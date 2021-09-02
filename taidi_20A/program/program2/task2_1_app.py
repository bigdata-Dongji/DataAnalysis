# encoding=utf8
import pandas as pd
import numpy as np
from flask import Flask,render_template
import os

# pandas显示所有行
pd.set_option('display.max_rows', None)
# 设置value的显示长度为100，默认为50
pd.set_option('max_colwidth',100)

app=Flask(__name__)
app.config['SECRET_KEY']=os.urandom(24)

# 运行后访问 http://127.0.0.1:5000/ 这个url链接，python只能同时运行1个flask模块的应用
@app.route('/',methods=['GET','POST'])
def index():


    return render_template('task2_1.html',province_str=province_str,city_str=city_str)

data = pd.read_csv('../login.csv', encoding='gb18030')
# 保留登录地点为国内的数据
data = data[data['login_place'].str.contains('中国')]
# 有极少部分条登录地点为中国的，因为可视化是求城市，所以我们不保留这极少部分数据
data = data[-(data['login_place'] == '中国')]
# 对login_time这个时间字段去重，因为可能用户刷新
data['login_time'].drop_duplicates(inplace=True)

# 开始对数据处理和组装进行可视化
data['login_place'] = data['login_place'].str.replace('中国', '')
province = ['北京', '天津', '上海', '重庆', '内蒙古', '广西', '西藏', '宁夏', '新疆', '香港', '澳门', '河北', '山西',
            '辽宁', '吉林', '黑龙江', '江苏', '浙江', '安徽', '福建', '江西', '山东', '河南', '湖北', '湖南', '广东', '海南', '四川',
            '贵州', '云南', '陕西', '甘肃', '青海', '台湾']
visual_data = {}
sum = 0
province_data, city_data ,table_data= {}, {},{}
# 对地点分组求和
data1 = data['login_place'].value_counts()
for i in province:
    table_data[i]={}
for i in range(len(data1)):
    for j in province:
        # 因为可能出现：青海海南藏族自治州 同时含2个省名，if后面加这个条件判断是否开头
        if j in data1.index[i] and data1.index[i].find(j) == 0:
            if data1.index[i] in ['香港', '澳门', '北京', '天津', '上海', '重庆']:
                sum += data1.values[i]
                # 去除省份
                city_data[data1.index[i]] = data1.values[i]
                table_data[j][data1.index[i]]= data1.values[i]
            # 省份数据
            elif data1.index[i].replace(j, '') == '':
                province_data[data1.index[i]] = data1.values[i]
                sum += data1.values[i]
                table_data[j][data1.index[i]]=data1.values[i]
                ...
            else:
                if len(data1.index[i].replace(j, ''))==2:
                    city_data[data1.index[i].replace(j, '')+'市'] = data1.values[i]
                else:
                    city_data[data1.index[i].replace(j, '')] = data1.values[i]
                sum += data1.values[i]
                table_data[j][data1.index[i].replace(j, '')]= data1.values[i]

                ...
with open('../../result/result2/task2_1_table.csv','w')as f:
    f.write('省份' )
    for i in table_data.items():
        f.write('\n')
        f.write(i[0])
        f.write(',')
        for j in i[1].items():
            f.write(j[0]+',')
        f.write('总和')
        f.write('\n')
        f.write(',')
        s=0
        for j in i[1].items():
            f.write(str(j[1])+',')
            s+=j[1]
        f.write(str(s))

print(province_data)
print(city_data)
print(table_data)
province_str, city_str = '', ''
for i in province_data.items():
    province_str += '{name:'
    province_str += f'"{i[0]}",'
    province_str += 'value:'
    province_str += f'{i[1]}'
    province_str += '},'
for i in city_data.items():
    city_str += '{name:'
    city_str += f'"{i[0]}",'
    city_str += 'value:'
    city_str += f'{i[1]}'
    city_str += '},'
print(province_str)
print(city_str)
print(sum)
print(data.shape)  # (379413, 3)


# if __name__=='__main__':
#     app.run(debug=True,port='5000')