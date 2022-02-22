# DevOps_MicroServicesV2

# 一、概述
## 1.SpringCloud VS Kubernetes
| 功能 | Spring Cloud | Kubernetes |
| ------ | ------ | ------ |
| 网关 | Zuul/Gateway | Ingress |
| 微服务保护 | Hystrix+Turbine/Sentinel | Istio |
| 负载均衡/服务调用 | Feign+Ribbon | Service |
| 注册中心 | Eureka/Nacos/Consul/Zookeeper | Coredns |
| 配置中心 | Config+Bus/Nacos/Consul/Apollo/Disconf/Zookeeper | Configmap+Secret |
| 日志 | ELK | EFK |
| 链路追踪 | Sleuth+Zipkin/Skywalking | Istio |
| 监控 | Spectator+Atlas+Servo | Prometheus+Grafana |
| 数据库 | Mysql+Seata+Canal |
| 缓存 | Redis |
| 消息队列 | Stream+Kafka |
| 协调服务 | Zookeeper |
| 代理 | Nginx/Haproxy |

## 2.架构
```
- Spring Cloud
  - 组合1: (Eureka+Config)+Zuul+Hystrix+Ribbon+Feign
  - 组合2: (Nacos/Consul/Zookeeper)+Gateway+Sentinel+Ribbon+RestTemplate

- Spring Cloud Kubernetes
  - 组合1: (Coredns+ConfigMap)+Gateway+Hystrix+Ribbon+RestTemplate
  - 组合2: (Coredns+ConfigMap)+Gateway+Hystrix+LoadBalancer+RestTemplate

- Kubernetes
  - 组合1: (Coredns+ConfigMap)+Ingress+Istio+Service
```

# 二、项目结构
## 1.cloud-app
- 基于Spring Cloud的微服务框架
```
- Eureka + Config + Gateway/Zuul + Hystrix + Ribbon + Feign + Sleuth&Zipkin
```

## 2.cloud-k8s-app
- 基于Spring Cloud 和 K8S的微服务框架
```
- Coredns + ConfigMap + Gateway + Hystrix + Ribbon/LoadBalancer + RestTemplate + Sleuth&Zipkin
```

## 3.k8s-app
- 基于Spring Cloud 和 Istio 和 K8S的微服务框架
```
- Coredns + ConfigMap + Ingress+ Istio + Service
```

## 3.middleware-app
- 基于Spring Cloud的微服务调用中间件框架
  - Redis
  - Kafka+Stream
  - Zookeeper
  - Mysql+Seata+Canal
