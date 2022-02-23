# cloud-k8s-app

## 脚本
```
minikube start --vm-driver=virtualbox --memory='4000mb'
mvn clean install
docker build -t xx:1.0 .
/kubernetes $ kubectl apply -f xx.yaml
kubectl get pods

# deploy all
skaffold dev
```

# 一、微服务
## 1.服务调用方
```
- employee-service
    - k8s discovery
    - actuator / sleuth
    - mongoDB
    - employee CRUD
- department-service
    - k8s discovery
    - k8s loadbalancer
    - feign
    - resilience4j
    - actuator / sleuth
    - mongoDB
    - department CRUD with employee-service
- organization-service
    - k8s discovery
    - feign
    - organization CRUD with department-service & employee-service
```

## 2.网关&管理
```
- gateway-service
    - gateway
    - sleuth
- admin-service
    - adminserver
    - security
    - Spring Boot Admin Server
- config-service
  - k8s config
```

# 二、中间件
## 1.Kubernetes&MongoDB
```
- k8s
  - privileges.yaml
    - Role and RoleBinding (access Kubernetes API from pod)
  - mongo-secret.yaml
    - credentials for MongoDB
  - mongo-configmap.yaml
    - user for MongoDB
  - mongo-deployment.yaml
    - Deployment for MongoDB
```