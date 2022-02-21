# cloud-app

# 已使用服务
- portal: 8900
- service-producer: 8901
- service-consumer: 8902
- eureka-server: 9000
- config-server: 9001 缺client
- feign-api (Ribbon)
- gateway (Sentinel) / zuul: 9002
- hystrix-turbine: 9003
- sleuth+zipkin: 9004

# 未使用服务
- Consul
- Apollo
- Sentinel + RestTemplate
- Ribbon + RestTemplate
- elk
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