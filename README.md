# App_Web_WaOBank

## Technologies
```
- element-plus + vue + axios
- express
- etcd

# 依赖
- npm install etcd3
- npm install node-schedule
```

## Features
```
1. 基础
- etcd分布式锁
- 定时任务

2. 公共服务
- 登录/退出/验证token
- 文件上传
- 订单管理
- 流水管理
- 余额管理
- 客户信息管理
- 利率管理

3. 开户
- 开户，销户，核实身份(外呼)

4. 存款
- 存款，取款
- 简化为固定期现1年，存到一个集中账户(Bank001)

5. 转账【TODO】
- 转出，转入

6. 贷款【TODO】
- 贷款，还款，放款，信用查询(外呼)
- 简化为还贷/放贷/贷款都和一个集中账户交互(Bank001)

7. 外汇【TODO】
- 买入，卖出
- 简化为买入卖出都和一个集中账户进行操作(Bank001)

8. 会计核算【TODO】
- 对账(外呼)

9. 保险【TODO】
- 买入，卖出，保险赔付，条款查询
- 简化为可以卖无限份保险，赔付固定金额，无保障期限，与一个集中账户进行交互(Bank001)

```

## Https
```
# 生成服务器端私钥
openssl genrsa -out server.key 1024 

# 生成服务端公钥
openssl rsa -in server.key -pubout -out server.pem

# 生成CA私钥
openssl genrsa -out ca.key 1024

# 生成csr文件
openssl req -new -key ca.key -out ca.csr

# 生成自签名证书
openssl x509 -req -in ca.csr -signkey ca.key -out ca.crt

# 生成server.csr文件
openssl req -new -key server.key -out server.csr

# 生成带有ca签名的证书
openssl x509 -req -CA ca.crt -CAkey ca.key -CAcreateserial -in server.csr -out server.crt
```

## Etcd Entity
```
# balance
- key: balance/${userId}
- value: {currency1,currency2}

# flow
- key: flow/${inUserId}_${outUserId}_${type}_${date}
- value: {inUserId, outUserId, amount, type, date}

# order
- key: order/${userId}/${uniqueId}
- value: {userId, content:{rate,amount,currencyType}, type, date, status}

# rate
- key: ${rateKey}/${productId}
    - rateKey分为deposit/loan/exchange
- value: {rate}

# userInfo
- key: user/${userId}
- value: {userId, username, password, token, accountStatus}

```