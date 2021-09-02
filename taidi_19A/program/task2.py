'''
任务2.1  绘制生鲜类商品和一般商品每天销售金额的折线图，并分析比较两类产品的销售状况。
任务2.2  按月绘制各大类商品销售金额的占比饼图，并分析其销售状况。
任务2.3  绘制促销商品和非促销商品销售金额的周环比增长率柱状图
'''
import pandas as pd
from flask import Flask,render_template

app=Flask(__name__)

@app.route('/1')
def task2_1():
    df=pd.read_csv('../result/task1_1.csv')
    df['销售日期']=pd.to_datetime(df['销售日期'])
    data1=df[df['商品类型']=='生鲜'].groupby('销售日期')['销售金额'].sum()
    data2=df[df['商品类型']=='一般商品'].groupby('销售日期')['销售金额'].sum()
    label=data1.index.strftime('%m%d').tolist()
    print(label)

    return render_template('1.html',label=label,data1=data1.tolist(),data2=data2.tolist())

@app.route('/2')
def task2_2():
    df=pd.read_csv('../result/task1_1.csv')
    df['月份'] = pd.to_datetime(df['销售日期']).dt.month
    data=df.groupby(['月份','大类名称'])['销售金额'].sum()
    data=data.unstack(fill_value=0)
    names=data.columns.values.tolist()
    data1=data.values[0].tolist()
    data2=data.values[1].tolist()
    data3=data.values[2].tolist()
    data4=data.values[3].tolist()
    print(data)
    print(data1)
    print(names)
    return render_template('2.html', names=names, data1=data1, data2=data2,data3=data3,data4=data4)

@app.route('/3')
def task2_3():
    df=pd.read_csv('../result/task1_1.csv')
    df['周'] = pd.to_datetime(df['销售日期']).dt.week
    data=df.groupby(['是否促销','周'])['销售金额'].sum()
    # df['增长率']=df['周销售总额'].pct_change()
    # print(df['增长率'])
    # data1 = df[df['周']>1].groupby(['是否促销', '周'])['销售金额'].sum()
    data=data.unstack().T
    # print(data)
    # print(data.pct_change()) # 环比增长率,这里是周环比增长率
    data=data.pct_change()
    label=data.index.tolist()[1:]
    data1=data.iloc[1:,0].values.tolist() # 非促销
    data2=data.iloc[1:,1].values.tolist() # 促销
    print(data)
    print(data1)
    return render_template('3.html', label=label, data1=data1, data2=data2)


# task2_1()
# task2_2()
# task2_3()

# if __name__ == '__main__':
#     app.run(debug=1)

