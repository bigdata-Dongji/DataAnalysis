'''
任务1.1  对数据作必要的预处理，在报告中列出处理步骤，将处理后的结果保存为“task1_1.csv”。
任务1.2  统计每个大类商品的销售金额，将结果保存为“task1_2.csv”。
任务1.3  统计每个中类商品的促销销售金额和非促销销售金额，将结果保存为“task1_3.csv”。
任务1.4  统计生鲜类产品和一般产品的每周销售金额，将结果保存为“task1_4.csv”。
任务1.5  统计每位顾客每月的消费额及消费天数，将结果保存为“task1_5.csv”，并在报告中列出用户编号为0-10的结果。
'''
import pandas as pd
import numpy as np
#显示所有列
pd.set_option('display.max_columns', None)
#显示所有行
pd.set_option('display.max_rows', None)
#设置value的显示长度为100，默认为50
pd.set_option('max_colwidth',100)

# 1.1
def task1_1():
    df=pd.read_csv('../附件.csv',encoding='gbk')
    # print(df.shape)
    # 去重处理
    df.drop_duplicates(inplace=True)
    # print(df.shape) # 去除了3行重复数据

    # 去除任意有空值的数据
    df.dropna(axis=0, how='any', inplace=True)
    # 查看空值
    # print(df.isnull().sum())  # 去除了2行带空值数据

    # 查找异常值
    # print(df[['销售数量', '销售金额', '商品单价']].describe()) # 查看描述会发现‘销售数量’和‘销售金额’存在小于0的情况
    # print(df.shape)
    # 删除异常值
    df.drop(df[df['销售金额'] < 0].index, inplace=True)
    df.drop(df[df['销售数量'] < 0].index, inplace=True)
    # print(df.shape)

    # print(df['销售日期'].head())
    # 时间处理
    df['销售日期'] = pd.to_datetime(df['销售日期'], format='%Y%m%d', errors='coerce')
    # print(df['销售日期'].head())

    # 销售金额异常
    # print(df[df['是否促销'] == '否'] )
    df[df['是否促销'] == '否'] = df[df['是否促销'] == '否'].eval('销售金额=(商品单价*销售数量)')
    # print(df[df['是否促销'] == '否'] )
    # print(df)
    df.to_csv('../result/task1_1.csv',index=False)

def task1_2():
    df=pd.read_csv('../result/task1_1.csv')

    data=df.groupby('大类名称')['销售金额'].sum()
    pd.DataFrame(data.values, index=list(data.index), columns=['各大类销售总额']).to_csv('../result/task1_2.csv')

def task1_3():
    df=pd.read_csv('../result/task1_1.csv')
    df = df.groupby(['是否促销','中类名称'])['销售金额'].sum()
    df = df.unstack(fill_value=0).T
    # print(df)
    df.to_csv('../result/task1_3.csv')

def task1_4():
    df=pd.read_csv('../result/task1_1.csv')

    data=df[df['商品类型'].isin(['一般商品','生鲜'])]
    data['销售周']=pd.to_datetime(data['销售日期']).dt.week
    data=data.groupby(['商品类型','销售周'])['销售金额'].sum()
    data_new=data.unstack(fill_value=0).T
    # print(data_new)
    data_new.to_csv('../result/task1_4.csv')

def task1_5():
    df=pd.read_csv('../result/task1_1.csv')

    df['月份'] = pd.to_datetime(df['销售日期']).dt.month
    df['日'] = pd.to_datetime(df['销售日期']).dt.day
    # 每位顾客每月的消费额
    df=df.groupby(['顾客编号','月份', ]).agg({'销售金额':['sum'],'日':'count'})
    df=df.unstack(fill_value=0)
    df.columns=['1月消费总额','2月消费总额','3月消费总额','4月消费总额','1月消费天数','2月消费天数','3月消费天数','4月消费天数',]
    # print(df)
    df.to_csv('../result/task1_5.csv')

# task1_1()
# task1_2()
# task1_3()
# task1_4()
# task1_5()