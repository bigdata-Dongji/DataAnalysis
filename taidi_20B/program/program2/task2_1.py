# encoding:utf8
import pandas as pd
from flask import Flask,render_template
import os
import time

app=Flask(__name__)
app.config['SECRET_KEY']=os.urandom(24)

@app.route('/',methods=['GET','POST'])
def index():
    s=0

    return str(s)

data=pd.read_excel('static/data/附件1.xlsx')
province_data=pd.read_excel('static/data/附件1.xlsx',sheet_name='城市省份对照表')
province=province_data['省份'].tolist()
city=province_data['城市'].tolist()
data['省份']=data['城市'].apply(lambda x:province[city.index(x)])
print(data)

data['日期']=pd.to_datetime(data['日期'])
# 国内新增确诊人数趋势数据
new_label=data.groupby(data['日期'].dt.strftime(format('%m%d')))['新增确诊'].sum().index.tolist()
new_data=data.groupby(data['日期'].dt.strftime(format('%m%d')))['新增确诊'].sum().values.tolist()
# 国内新增治愈人数趋势数据
newcure_data=data.groupby(data['日期'].dt.strftime(format('%m%d')))['新增治愈'].sum().values.tolist()
# 国内新增死亡人数趋势数据
newdead_data=data.groupby(data['日期'].dt.strftime(format('%m%d')))['新增死亡'].sum().values.tolist()
print(new_label)
print(new_data)
print(newcure_data)
print(newdead_data)
# 累计确诊
add_data=[sum(new_data[:i+1]) for i in range(len(new_data))]
# 累计死亡
add_dead=[sum(newdead_data[:i+1]) for i in range(len(newdead_data))]
# 累计治愈
add_cure=[sum(newcure_data[:i+1]) for i in range(len(newcure_data))]
print(add_data)
print(add_dead)

city_str='''{name: '十堰市',value: %d},
            {name: '襄阳市',value: %d},
            {name: '随州市',value: %d},
            {name: '神农架林区',value: %d},
            {name: '恩施土家族苗族自治州',value: %d},
            {name: '宜昌市',value: %d},
            {name: '荆门市',value: %d},
            {name: '天门市',value: %d},
            {name: '潜江市',value: %d},
            {name: '荆州市',value: %d},
            {name: '仙桃市',value: %d},
            {name: '武汉市',value: %d},
            {name: '黄冈市',value: %d},
            {name: '鄂州市',value: %d},
            {name: '咸宁市',value: %d},
            {name: '黄石市',value: %d},
            {name: '孝感市',value: %d}'''
hubei_city=['十堰','襄阳','随州','神农架','恩施州','宜昌','荆门','天门','潜江','荆州', '仙桃','武汉','黄冈','鄂州','咸宁','黄石','孝感']
hubei_data=[]

for i in hubei_city:
    hubei_data.append(data[data['城市'] == i]['新增确诊'].sum())
city_str=city_str%(tuple(hubei_data))
max_visual=(max(hubei_data)//5000+1)*5000 # 地图映射颜色最大值
print(city_str)
print(max_visual)
# 除湖北地区外累计确诊top5城市
top5=data[-data['城市'].isin(hubei_city)].groupby(data['城市'].str.replace('-.*',''))['新增确诊'].sum().sort_values(ascending=False)[:5].index.tolist()
top5_data=data[-data['城市'].isin(hubei_city)].groupby(data['城市'].str.replace('-.*',''))['新增确诊'].sum().sort_values(ascending=False)[:5].values.tolist()
print(top5)
print(top5_data)
# 累计总数：确诊、死亡、治愈、现有确诊
print(add_data[-1],add_dead[-1],add_cure[-1],(add_data[-1]-add_dead[-1]-add_cure[-1]))



# if __name__=='__main__':
#     app.run(debug=True,port='5000')