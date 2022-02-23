# DevOps_MicroServicesV2

# 一、概述
## 1.SpringCloud VS Kubernetes
| 功能 | Spring Cloud | Kubernetes |
| ------ | ------ | ------ |
| 网关 | Zuul/Gateway | Ingress |
| 微服务保护 | Hystrix+Turbine/Sentinel | Istio |
| 负载均衡/服务调用 | RestTemplate/Feign+Ribbon/LoadBalancer | Service |
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
| 方案 | 技术 |
| ------ | ------ |
| Spring Cloud 方案 1 | (Eureka+Config)+(Zuul+Hystrix+Ribbon+Feign)+Sleuth&Zipkin |
| Spring Cloud 方案 2 | (Nacos/Consul/Zookeeper)+(Gateway+Sentinel+Ribbon+RestTemplate)+Skywalking |
| Spring Cloud K8S 方案 1 | (K8S-Discovery+K8S-Config)+(Gateway+K8S-Hystrix+K8S-Ribbon&K8S-LoadBalancer+Feign)+Sleuth&K8S-Zipkin |
| Spring Cloud K8S 方案 2 | (Fabric8-Discovery+Fabric8-Config)+(Gateway+Hystrix+Fabric8-Loadbalancer+RestTemplate)+Sleuth&Zipkin |
| K8S 方案 1 | (Coredns+ConfigMap)+Ingress+Istio+Service |


# 二、项目结构
## 1.cloud-app
- 基于Spring Cloud的微服务框架
```
- Eureka + Config + Gateway/Zuul + Hystrix + Ribbon + Feign + Sleuth&Zipkin
```

## 2.cloud-k8s-app
- 基于Spring Cloud 和 K8S的微服务框架
```
- K8S-Discovery + K8S-Config + Gateway + Resilience4j + K8S-Ribbon&K8S-LoadBalancer + Feign&RestTemplate + Sleuth&K8S-Zipkin
```

## 3.k8s-app
- 基于Spring Cloud 和 Istio 和 K8S的微服务框架
```
- Coredns + ConfigMap + Ingress+ Istio + Service
```

## 3.middleware-app
- 中间件框架
  - Redis+Jedis+Redission
  - Kafka
  - Zookeeper
  - Mysql
  - Seata
  - Canal
  - Neo4j
  - Elasticsearch
  - Spark
  - Hdfs+Hadoop
