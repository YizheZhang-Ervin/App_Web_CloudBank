# cloud-app

# 已使用服务
- service-producer: 8901
- service-consumer: 8902
- eureka-server: 9000
- config-server: 9001
- feign-api (Ribbon)
- gateway (Sentinel) / zuul: 9002
- hystrix-turbine: 9003
- sleuth+zipkin: 9004

# 未使用服务
- 注册中心/配置中心
  - Consul
  - Apollo
  - Nacos
  - Vault
  - Disconf
- 负载均衡&微服务保护
  - Sentinel + RestTemplate
  - Ribbon + RestTemplate
- 日志&监控&链路追踪
  - ELK
  - Spectator+Atlas+Servo
  - Skywalking

# SQL
- clouduser
  - id
  - username
  - info

- cloudrrder
  - id
  - name
  - description
  - userId
