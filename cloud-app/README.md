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
```

## 2.注册中心&配置中心
```
# 注册中心
- (OK) eureka-server: 9000

# 配置中心
- (X) config-server: 9001
  - 要集成rabbitmq: 5672
- (X) Apollo
- (X) Disconf

# 注册+配置中心
- (X) Consul
- (X) Nacos
- (X) Zookeeper
```

## 3.服务调用&负载均衡&微服务保护
```
# 服务调用&负载均衡
- (OK) feign-api
  - 已集成Ribbon
- (X) restTemplate

# 微服务保护
- (OK) hystrix-turbine: 9003
  - http://localhost:8901/actuator/hystrix.stream
  - /hystrix
- (X) Sentinel
  - 配合Ribbon
  - 配合RestTemplate
```

## 4.网关
```
- (OK) gateway: 9002
  - 已集成Sentinel
  
- (OK) zuul: 9002
  - 已集成Hystrix
  - 已集成Ribbon
```

## 5.链路追踪
```
- (X) Sleuth+Zipkin
  - 要集成zipkin-server: 9004

- (X) Skywalking
```

## 6.度量监控
```
- (X) Prometheus+Grafana

- (X) Spectator+Atlas+Servo
```

## 7.日志
```
- (X) ELK
```

---

# 二、中间件
## 1.Database: test
- Table: clouduser
  - id
  - username
  - info

- Table: cloudrrder
  - id
  - name
  - description
  - userId
