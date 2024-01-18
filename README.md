# App_Web_WaOBank

## Technologies
```
element-plus + vue + axios
express
etcd

# 依赖
npm install etcd3
npm install node-schedule
```

## Features
```
0. 基础 
- 登录/退出/验证token
- etcd分布式锁
- 定时任务
- 记录&订单管理: 订单生成/取消/查询
- 记入流水

1. 开户/销户 (记录管理)
- 开户，销户，核实身份，客户信息查询

2. 存款/取款 (记入流水)
- 存款，取款，账户余额查询

3. 转账 (记入流水)
- 转出，转入，账户余额查询

4. 贷款/放款/还款 (订单管理/记入流水)
- 贷款，还款，放款，利率查询

5. 外汇买入/卖出 (订单管理)
- 买入，卖出，汇率查询

6. 会计核算
- 对账

7. 保险 (订单管理)
- 买入，卖出，条款查询

```