# DevOps_MicroServicesV2

# 一、概述
## 1.技术对比
| 功能 | Spring Cloud | Kubernetes |
| ------ | ------ | ------ |
| 网关 | Zuul/Gateway | Ingress |
| 微服务保护 | Hystrix+Turbine/Sentinel | Istio |
| 负载均衡/服务调用 | RestTemplate/Feign+Ribbon/LoadBalancer | Service |
| 注册中心 | Eureka/Nacos/Consul/Zookeeper | CoreDNS |
| 配置中心 | Config+Bus/Nacos/Consul/Apollo/Disconf/Zookeeper | Configmap+Secret |
| 日志 | ELK | EFK |
| 链路追踪 | Sleuth+Zipkin/Skywalking | Istio |
| 监控 | Spectator+Atlas+Servo/Prometheus+Grafana |
| 数据库 | Mysql+Seata+Canal |
| 缓存 | Redis |
| 消息队列 | Stream+Kafka |
| 协调服务 | Zookeeper |
| 代理 | Nginx/Haproxy |

## 2.架构
| 方案 | 注册中心 + 配置中心 + 网关 + 微服务保护 + 负载均衡 + 服务调用 + 链路追踪 |
| ------ | ------ |
| 1) Cloud | Eureka + Config + Zuul + Hystrix + Ribbon + Feign + Sleuth&Zipkin |
| 2) Cloud | Nacos + Nacos + Gateway + Sentinel + Ribbon + RestTemplate + Skywalking |
| 3) Cloud K8S | K8S-Discovery + K8S-Config + Gateway + K8S-Hystrix + K8S-Ribbon&K8S-LoadBalancer + Feign + Sleuth&K8S-Zipkin |
| 4) K8S | CoreDNS + Configmap+Secret + Ingress + Istio + Service + Service + Istio |

## 3. SpringCloudK8S相关依赖
- 注册中心
  - k8s-discovery 
  - fabric8-discovery
- 配置中心
  - k8s-config/k8s-archaius
  - fabric8-config
- 微服务保护
  - k8s-hystrix
- 负载均衡/服务调用
  - k8s-ribbon/k8s-loadbalancer
  - fabric8-loadbalancer
- 链路追踪
  - k8s-zipkin
- 其他
  - k8s-leader/k8s-istio
  - fabric8-leader/fabric8-istio

# 二、项目结构
## 1.cloud-app
- 基于Spring Cloud的微服务框架
  - Eureka
  - Config
  - Gateway/Zuul
  - Hystrix
  - Ribbon
  - Feign
  - Sleuth&Zipkin

## 2.cloud-k8s-app
- 基于Spring Cloud 和 K8S的微服务框架
  - K8S-Discovery
  - K8S-Config
  - Gateway
  - Hystrix
  - Ribbon
  - Feign
  - Sleuth&Zipkin

## 3.k8s-app
- 基于Spring Cloud 和 Istio 和 K8S的微服务框架
  - Coredns
  - ConfigMap
  - Ingress
  - Istio
  - Service

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
