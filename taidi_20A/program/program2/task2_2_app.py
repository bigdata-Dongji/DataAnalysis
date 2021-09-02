# encoding=utf8
import pandas as pd
import numpy as np
from flask import Flask,render_template
import os
import requests
import time
import datetime
import json

app=Flask(__name__)
app.config['SECRET_KEY']=os.urandom(24)

# 运行后访问 http://127.0.0.1:5000/ 这个url链接，python只能同时运行1个flask模块的应用
@app.route('/',methods=['GET','POST'])
def index():
    data = pd.read_csv('../login.csv', encoding='gb18030')
    data['login_time'] = pd.to_datetime(data['login_time'])
    workday, no_workday = [0] * 24, [0] * 24 # 用来存储工作日和非工作日数据
    dic = {}

    # 节假日API
    def req_api(date):
        _date = str(date).split()[0]
        api_url = "http://www.easybots.cn/api/holiday.php?d="
        api_request = requests.get(api_url + _date)
        json_data = json.loads(api_request.text)
        dic[_date] = json_data[_date]
        # print(dic)

    # 获取工作日和非工作日登录时间段（以小时为单位）的函数
    def split_workday(date, value):

        _date = str(date).split()[0]
        hour = int(str(date).split()[1])
        with open('time_api_data.json')as f:
            json_data = json.load(f)

        # 一般工作日
        if json_data[_date] == '0':
            workday[hour] += int(value)
        # 一般非工作日
        elif json_data[_date] == '1':
            no_workday[hour] += int(value)
        # 法定假日
        elif json_data[_date] == '2':
            no_workday[hour] += int(value)
        else:
            print('api获取日期失败:', _date)

        # print(workday)
        # print(no_workday)

    time_counts = data['login_time'].dt.strftime('%Y%m%d').value_counts()
    # 下面4行调用1次就可以了
    # for i in range(len(time_counts)):
    #     req_api(time_counts.index[i])
    # print(dic)
    # with open('time_api_data.json', 'w') as f:# 保存api有效数据
    #      json.dump(dic, f)

    # print(len(time_counts))
    time_counts2 = data['login_time'].dt.strftime('%Y%m%d %H').value_counts()
    print(time_counts2)
    for i in range(len(time_counts2)):
        split_workday(time_counts2.index[i], time_counts2.values[i])
    # print(time_counts)
    # print(len(time_counts))

    print(workday)
    print(no_workday)
    print(data.shape)  # (387144, 3)
    return render_template('task2_2.html',data1=workday,data2=no_workday)


if __name__=='__main__':
    app.run(debug=True,port='5000')