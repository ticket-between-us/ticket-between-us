# infra

Terraform으로 AWS 환경(dev, loadtest)을 관리합니다. 담당: 서창훈

- 구성: EC2 1대 (Caddy + Spring Boot, Docker Compose) + RDS for MySQL 8 — 명세서 3.1
- 관련 이슈: KAN-89 ~ KAN-95
- `*.tfstate`, `*.tfvars`는 커밋하지 않습니다.
