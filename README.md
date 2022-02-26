# DevOps_MicroServicesV2

# 一、概述
## 1.技术对比
| 功能 | Spring Cloud | Kubernetes |
| ------ | ------ | ------ |
| 注册中心 | Eureka/Nacos/Consul/Zookeeper | Pilot/Envoy+CoreDNS |
| 配置中心 | Config+Bus/Nacos/Consul/Apollo/Disconf/Zookeeper | Configmap/Secret |
| 网关 | Zuul/Gateway | Ingress |
| 微服务保护 | Hystrix+Turbine/Sentinel | Pilot/Envoy |
| 负载均衡/服务调用 | RestTemplate/Feign+Ribbon/LoadBalancer | Pilot/Envoy |
| 链路追踪 | Sleuth+Zipkin/Skywalking | Mixer+Adapter+OpenTracing/Skywalking/Zipkin |
| 监控 | Spectator+Atlas+Servo/Prometheus+Grafana | Mixer+Adapter+Prometheus+Grafana |
| 日志 | ELK | EFK |
| 安全 | / | citadel |
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
| 4) Istio K8S | Pilot/Envoy + Configmap&Secret + Ingress + Pilot/Envoy + Pilot/Envoy + Pilot/Envoy + OpenTracing |

# 二、项目结构
## 1.cloud-app
- 基于Spring Cloud的微服务框架
  - Eureka/Consul
  - Config
  - Gateway/Zuul
  - Hystrix
  - Ribbon
  - Feign
  - Sleuth&Zipkin

## 2.cloud-app-2
- 基于Spring Cloud的微服务框架
  - Nacos
  - Gateway
  - Sentinel
  - Ribbon
  - RestTemplate
  - Skywalking

## 3.cloud-k8s-app
- 基于Spring Cloud 和 K8S的微服务框架
  - K8S-Discovery
  - K8S-Config
  - Gateway
  - Hystrix
  - Ribbon
  - Feign
  - Sleuth&Zipkin

## 4.k8s-app
- 基于Istio 和 K8S的微服务框架
  - Istio Pilot/Envoy
  - K8S Ingress Gateway
  - RestTemplate

## 5.middleware-app
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
