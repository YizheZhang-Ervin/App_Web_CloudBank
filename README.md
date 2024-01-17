# App_Web_CloudBank

## Technologies
```
vue + axios
gin + etcd
```

## Commands
```
# golang
go mod init xxx
go mod tidy
go mod edit -replace github.com/coreos/bbolt@v1.3.8=go.etcd.io/bbolt@v1.3.8
go mod edit -replace google.golang.org/grpc=google.golang.org/grpc@v1.26.0
go build
go run xx.go

# etcd
etcdctl--endpoints=http://127.0.0.1:2379 put xxKey"xxVal"
etcdctl--endpoints=http://127.0.0.1:2379 get xxKey
```

## Features
```
1. 存款/取款
- 分布式锁

2. 贷款/放款
- 定时任务

3. 转账
- 分布式锁

4. 开户/销户

5. 外汇买入/卖出

6. 会计核算

7. 保险

```
