import pandas as pd
#显示所有列
pd.set_option('display.max_columns', None)
#显示所有行
pd.set_option('display.max_rows', None)
#设置value的显示长度为100，默认为50
pd.set_option('max_colwidth',100)

# task1_1

data1=pd.read_csv('../../data1.csv',encoding='gb18030')
data2=pd.read_csv('../../data2.csv',encoding='gb18030')
data3=pd.read_csv('../../data3.csv',encoding='gb18030')
# 检查缺失值
# print(data1.isnull().sum())
# print(data2.isnull().sum()) # TermSerNo和conOperNo超过50w缺失值
# print(data3.isnull().sum())
# print(data2.shape)
# 删除有非常多缺失值的列
del data2['TermSerNo']
del data2['conOperNo']
# print(data2.shape)

# 检查data1重复值
print(data1['Index'].duplicated().sum()) # 0
print(data1['CardNo'].duplicated().sum()) # 0
print(data1['AccessCardNo'].duplicated().sum()) # return 2
print(data1.shape)
# 删除data1重复值
data1.drop_duplicates(subset=['AccessCardNo'],inplace=True)
print('剔除重复值后data1维度：',data1.shape)

# 检查data2重复值
print(data2['Index'].duplicated().sum())

# 检查data3重复值
print(data3['Index'].duplicated().sum())

# 对时间类型数据转datetime64格式
data2['Date']=pd.to_datetime(data2.Date)
data3['Date']=pd.to_datetime(data3.Date)
# print(data2['Date'])

# 探索data1
# print(data1.describe())

# 探索data2
# print(data2.describe()) # 发现Money最小值为0
# print(data2[data2['Money']==0])
print(data2[data2['Money']==0].shape) # Money为0的数据为18438条，总数据有51w+,可以进行剔除处理

# print(data2.sort_values(by=['Money'],ascending=False).head()) # 查看消费最多前5信息
# 剔除消费金额Money为0的数据，方便后面的数据分析
print(data2.shape)
data2=data2[-(data2['Money']==0)]
print('清洗后data2维度',data2.shape)

# 探索data3
# print(data3.describe())



# 导出清洗处理后的结果
# data1.to_csv('../../result/result1/task1_1_1.csv',index=False)
# data2.to_csv('../../result/result1/task1_1_2.csv',index=False)
# data3.to_csv('../../result/result1/task1_1_3.csv',index=False)

# task1_2
# 将data1.csv中的学生个人信息与data2.csv中的消费记录建立关联，处理结果保存为“task1_2_1.csv”；
data4=pd.merge(data1,data2,on='CardNo')
print('data4维度：',data4.shape)
# data4.to_csv('../../result/result1/task1_2_1.csv',index=False)

# 将data1.csv中的学生个人信息与data3.csv中的门禁进出记录建立关联，处理结果保存为“task1_2_2.csv”
print('data3维度：',data3.shape)
data5=pd.merge(data1,data3,on='AccessCardNo')
print('data5维度：',data5.shape)
# data5.to_csv('../../result/result1/task1_2_2.csv',index=False)