# 예매한 사이 (ticket-between-us)

공연 좌석 예매 시스템 · 동시성 제어와 토스페이먼츠 결제 · Spring Boot + Vue 모노레포

예매 오픈 순간 요청이 몰려도 같은 좌석이 두 번 팔리지 않고, 결제된 금액과 확정된 좌석이 항상 일치하는 예매 시스템을 만들고 부하 테스트로 검증합니다.

## 저장소 구조

```
ticket-between-us/
├── backend/     Spring Boot 4.1 (Java 21)       담당: 조은혜
├── frontend/    Vue 3 + Vite                    담당: 김민수
├── infra/       Terraform (AWS EC2 + RDS)       담당: 서창훈
├── loadtest/    k6 부하 테스트                   담당: 서창훈
├── docs/        요구사항 명세서, 화면 흐름도, ADR
└── docker-compose.yml   로컬 MySQL 8
```

## 기술 스택

| 영역 | 사용 기술 |
|---|---|
| 백엔드 | Java 21, Spring Boot 4.1.0, Spring Data JPA, Flyway |
| DB | MySQL 8 (로컬: Docker, 배포: Amazon RDS) |
| 프론트엔드 | Vue 3, Vite, Vue Router, Pinia, Axios |
| 결제 | 토스페이먼츠 결제위젯 v2 |
| 인프라 | AWS EC2 + Caddy, RDS, Terraform, GitHub Actions |
| 부하 테스트 | k6 |

## 로컬 실행

필요한 것: JDK 21, Node.js 22 이상(20.19 이상), Docker Desktop

```bash
# 1. 환경변수 파일 만들기
cp .env.example .env

# 2. MySQL 실행
docker compose up -d

# 3. 백엔드 실행 (http://localhost:8080)
cd backend
./gradlew bootRun          # Windows: gradlew.bat bootRun

# 4. 프론트 실행 (http://localhost:5173)
cd frontend
npm install
npm run dev
```

프론트 첫 화면에 "백엔드 상태: UP"이 보이면 정상입니다.

## 협업 규칙 (요약)

- 브랜치: GitHub Flow. `main` 보호, 기능 브랜치 `feat/{Jira 키}-{요약}` (예: `feat/KAN-41-hold`)
- 커밋·PR 제목에 Jira 키를 넣어 이슈와 자동 연결합니다.
- 모든 PR은 1명 이상 승인 후 병합. 결제·상태 전이·동시성 PR은 관련 CS 테스트 통과가 병합 조건입니다.
- DB 스키마는 Flyway 마이그레이션으로만 변경합니다.
- 비밀값은 커밋하지 않습니다. 배포 환경은 AWS SSM Parameter Store에서 주입합니다.

자세한 내용은 요구사항 명세서 12장을 따릅니다.

## 문서·링크

- 요구사항 명세서, 화면 흐름도: [`docs/`](docs/) · Confluence [프로젝트 문서](https://oso7865.atlassian.net/wiki/spaces/V1CPqdFXxDNd/pages/98314)
- Jira: [KAN 보드](https://oso7865.atlassian.net/jira/software/projects/KAN/boards/1)

## 데이터 출처

자료 출처: 공연예술통합전산망(KOPIS), www.kopis.or.kr
