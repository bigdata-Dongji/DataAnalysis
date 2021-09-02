import pandas as pd
#显示所有列
pd.set_option('display.max_columns', None)

data=pd.read_csv('../../result/result1/task1_1_2.csv')

# 食堂就餐行为分析,所以保留消费地点与食堂相关数据
data=data[data['Dept'].str.contains('食堂')]
data['Date']=pd.to_datetime(data.Date)
data['hour']=pd.to_datetime(data.Date).dt.hour
# 根据一般食堂正常运营情况，我们只保留时间6点到晚上22点的数据
# print(data.shape)
data=data[(data['hour']>=6) & (data['hour']<22)]


li=['第一食堂','第二食堂','第三食堂','第四食堂','第五食堂','教师食堂']
# 总体食堂人数占比
overall=[]

for i in li:
    overall.append(data['Dept'].value_counts()[i])

# print(data['Dept'].value_counts())
print(overall) # [60534, 145767, 51959, 60703, 116765, 2143]

# 划分6点到10点59分为早餐，11点到15点59分为午餐，16点及以后为晚餐
morning=data[(data['hour']>=6) & (data['hour']<=10)]
noon=data[(data['hour']>=11) & (data['hour']<=15)]
evening=data[(data['hour']>=16) & (data['hour']<=22)]
# print(morning.shape)
# print(noon.shape)
# print(evening.shape)
# 早餐食堂人数占比
mor_data=[]
for i in li:
    mor_data.append(morning['Dept'].value_counts()[i])
# 午餐食堂人数占比
noon_data=[]
for i in li:
    noon_data.append(noon['Dept'].value_counts()[i])
# 晚餐食堂人数占比
eve_data=[]
for i in li:
    try:
        eve_data.append(evening['Dept'].value_counts()[i])
    except:
        eve_data.append(0)


data['weekday']=pd.to_datetime(data.Date).dt.weekday # 周一为0 ，周日为6
workday=data[data['weekday']<5]
no_workday=data[data['weekday']>=5]
label=workday['Date'].dt.strftime(date_format='%H:%M:%S').value_counts().sort_index().index.tolist()
values1=workday['Date'].dt.strftime(date_format='%H:%M').value_counts().sort_index().values.tolist()
string=''
for i in range(len(label)):
    string+='{name:"'
    string+=label[i]
    string+='",value:'
    string+=str(values1[i])
    string+='},'
print(string)
print(label)
print(values1)