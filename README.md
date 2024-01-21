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
- 开户，销户，核实身份
- 涉及：客户信息查询，订单管理

4. 存款
- 存款，取款
- 涉及：余额查询，流水管理，客户信息查询，利率查询，订单管理

5. 转账
- 转出，转入
- 涉及：余额查询，流水管理，客户信息查询

6. 贷款
- 贷款，还款，放款
- 涉及：余额查询，流水管理，客户信息查询，利率查询，订单管理

7. 外汇
- 买入，卖出
- 涉及：余额查询，流水管理，客户信息查询，利率查询，订单管理

8. 会计核算
- 对账
- 涉及：余额查询，流水管理

9. 保险
- 买入，卖出，保险赔付，条款查询
- 涉及：余额查询，客户信息查询，订单管理

```

## https
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