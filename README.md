# DevOps_MicroServicesV2

| 功能 | Spring Cloud | K8S |
| ------ | ------ | ------ |
| 网关 | Zuul/Gateway | Ingress |
| 微服务保护 | Hystrix+Turbine/Sentinel | Istio |
| 负载均衡/服务调用 | Feign/Ribbon | Service |
| 注册中心 | Eureka/Nacos/Consul | Coredns |
| 配置中心 | Config+Bus/Nacos/Consul/Apollo/Disconf/Vault | Configmap+Secret |
| 日志 | ELK | EFK |
| 链路追踪 | Sleuth+Zipkin/Skywalking | Istio |
| 监控 | Spectator+Atlas+Servo | Prometheus+Grafana |
| 数据库 | Mysql + Seata + Canal |
| 缓存 | Redis |
| 消息队列 | Stream + Kafka |
| 协调服务 | Zookeeper |
| 代理 | Nginx/Haproxy |

## cloud-app
- 基于Spring Cloud的微服务框架

## cloud-k8s-app
- 基于Spring Cloud 和K8S的微服务框架

## middleware-app
- 基于Spring Cloud的微服务调用中间件框架
  - Redis
  - Kafka + Stream
  - Zookeeper
  - Mysql + Seata + Canal
