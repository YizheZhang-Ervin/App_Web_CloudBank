# cloud-app

# 一、微服务
## 1.生产者&消费者
```
- (OK) service-producer: 8901
  - /user/{id}
  - /user/prop
  - /user/now
  - /user/config
  - /actuator
  - 有sleuth+zipkin

- (OK) service-consumer: 8902
  - /order/{orderId}
  - /actuator
  - /actuator/hystrix.stream
  - 有feign
  - 有sleuth+zipkin

- (OK) admin-service: 8903
  - Actuator应用监控中心
```

## 2.注册中心&配置中心
```
# 注册中心
- (OK) Kubernetes CoreDNS
  - K8S Discovery

# 配置中心
- (OK) config-service: 9001
  - K8S Config
```

## 3.服务调用&负载均衡&微服务保护
```
# 服务调用&负载均衡
- (OK) feign-api
  - 集成K8S Ribbon & K8S LoadBalancer

# 微服务保护
- (OK) hystrix-turbine: 9003
  - http://localhost:8901/actuator/hystrix.stream
  - /hystrix
```

## 4.网关
```
- (OK) gateway: 9002
  - 已集成Sentinel
```

## 5.链路追踪
```
- (X) Sleuth+Zipkin
  - 要集成zipkin-server: 9004
```

---

# 二、中间件
## 1.Database: test
- Table: clouduser
  - id
  - username
  - info

- Table: cloudorder
  - id
  - name
  - description
  - userId
