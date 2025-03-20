const projects = [
    {
        id: 1,
        title: "애니쥬",
        description: "🐾 우리들의 반려동물 자랑 SNS",
        type: 'PREP',
        url: 'https://www.notion.so/SNS-d4732501dcb949e88b84e83161beaea3?pvs=4',
        duration: '2022.07 ~ 08 (6주)',
        techStack: ["Java", "Spring Boot", "Hibernate", "FFMPEG", "Websocket", "Redis", "MySQL", "AWS"],
        task: [
                "1. FFMPEG 활용 동영상 인코딩 및 썸네일 추출",
                "2. ERD 설계 및 수정",
                "3. 아키텍쳐 설계 및 구축",
                "4. 전체 코드의 70% 기여",
                "5. JMeter를 활용한 성능테스트"
        ],
        preview: ""
    },
    {
        id: 2,
        title: "AI 마타수학",
        description: "학생의 취약 개념을 진단하는 마타에듀의 서비스",
        type: 'ENTERPRISE',
        url: 'https://www.notion.so/SNS-d4732501dcb949e88b84e83161beaea3?pvs=4',
        duration: '2022.11 ~ (운영 중)',
        techStack: ["java", "Spring Boot", "Hibernate", "aws", "docker", "Junit5", "spring security", "QueryDSL", "flyway", "Redis", "MySQL", "MongoDB"],
        task: [
            "1. 서비스 초기 제작, 기획 및 설계 참여",
            "2. 게시판 테이블 및 API 설계",
            "3. AWS CloudWatch를 통한 로그 분석 및 데이터를 통한 서비스 유지 보수",
            "4. 보고서를 위한 집계성 API 및 쿼리 제작",
            "5. 서비스 안정화를 위한 성능 최적화 경험",
            "6. 지속적인 서비스와 유지보수성을 높이기 위한 읽기쉬운 코드를 위한 끊임 없는 리팩토링"
        ]
    },
    {
        id: 3,
        title: "제1회 스파르톤 과제",
        description: "스파르타 코딩클럽에서 주최하는 무박 2일 해커톤",
        type: 'HACKATHON',
        url: 'https://www.notion.so/SNS-d4732501dcb949e88b84e83161beaea3?pvs=4',
        duration: '2023.02 (무박 2일)',
        techStack: ["TypeScript", "React", "StyledComponent", "Java", "Spring Boot"],
        task: [
            "1. 총4개 중 호랑 에듀 부문 참여 호랑에듀 부문 2등의 성적 기록",
            "2. React를 활용하여 프론트엔드 개발 참여",
            "3. 상태관리와 컴포넌트를 구조화 하여 최대한 가독성 있는 코드를 만들 수 있도록 개발",
            "4. 백엔드 초기 아키텍쳐 설계",
            "5. 해커톤 참여를 위한 팀 빌드 및 리드"
        ]
    },
    {
        id: 4, title: "EBS 초등온 마타수학", description: "EBS 초등 ON에 있는 마타수학 B2C 서비스", type: 'ENTERPRISE',
        url: 'https://www.notion.so/SNS-d4732501dcb949e88b84e83161beaea3?pvs=4',
        duration: '2023.10 ~ (운영 중)',
        techStack: ["java", "Spring Boot", "Hibernate", "aws", "docker", "Junit5", "spring security", "QueryDSL", "Redis", "MySQL"],
        task: [
            "1. 패키지 아키텍쳐 구조 설계 및 AI 마타수학 문제서버 분리 작업",
            "2. 맡은 코드의 70% 테스트 코드 작성",
            "3. JDK17 변경에 따른 코드 스타일 개선 및 교육",
            "4. Redis를 데이터베이스로서 적극 활용한 데모 기능 구현"
        ]
    },
    {
        id: 5, title: "AI 디지털 교과서", description: "This is project 6 description.", type: 'ENTERPRISE',
        url: 'https://www.notion.so/SNS-d4732501dcb949e88b84e83161beaea3?pvs=4',
        duration: '2024.02 ~ 10 (9개월)',
        techStack: ["java", "Spring Boot", "Hibernate", "aws", "docker", "Junit5", "spring security", "QueryDSL", "Redis", "MySQL", "MongoDB", "TypeScript", "ExpressJS"],
        task: [
            "1. 디지털 교과서 전반적인 개발 및 설계 참여",
            "2. ECR과 ECS를 통한 배포 경험",
            "3. AI 튜터 및 보조교사 기능 API 구현",
            "4. FixtureMonkey 라이브러리를 활용한 테스트 효율성 향상",
            "5. AI 디지털교과서 외부로그인을 모킹하기 위한 목서버 설계"
        ]
    },
    {
        id: 6, title: "Pickify", description: "Google 주최 Chrome Gemini Nano 활용 해커톤", type: 'HACKATHON',
        url: 'https://www.notion.so/SNS-d4732501dcb949e88b84e83161beaea3?pvs=4',
        duration: '2024.12 ~ 25.01 (2주)',
        techStack: ["java", "spring", "jpa", "spring security", "mongoDB", "GCP"],
        task: [
            "1. Google에서 주최하는 글로벌 해커톤 참여",
            "2. Gemini Nano를 이용한 프롬프트 작업",
            "3. 추천 알고리즘 구현",
            "4. GCP의 기능을 활용한 주요 아키텍쳐 및 추천 URL 분석 구현"
        ]
    },
    {
        id: 7, title: "사내 백오피스 작업", description: "마타에듀 전체 서비스 관리 페이지", type: 'ENTERPRISE',
        url: 'https://www.notion.so/SNS-d4732501dcb949e88b84e83161beaea3?pvs=4',
        duration: '2025.01 ~ (운영 중)',
        techStack: ["java", "Spring Boot", "Hibernate", "aws", "docker", "Junit5", "spring security", "QueryDSL", "Redis", "MySQL"],
        task: [
            "1. 사내 백오피스 서비스 프로젝트 리드 및 일정 관리",
            "2. TDD를 통한 전체 프로젝트 개발",
            "3. 프론트엔드와 원할한 작업을 위해 ECR을 통한 프라이빗 도커 레포지토리 관리",
            "4. AI 마타 유저 도메인에 대한 이해도 및 기타 불필요한 도메인 제거",
            "5. AI 마타 라이센스 작업 진행"
        ]
    },
    {
        id: 8, title: "AI 마타수학 for 대학", description: "This is project 8 description.", type: 'ENTERPRISE',
        url: 'https://www.notion.so/SNS-d4732501dcb949e88b84e83161beaea3?pvs=4',
        duration: '2025.01 ~ (운영 중)',
        techStack: ["java", "Spring Boot", "Hibernate", "aws", "docker", "Junit5", "QueryDSL", "MySQL"],
        task: [
            " 1.This is project 2 description. ", "This is project 2 description.", "This is project 2 description.", "This is project 2 description.", "This is project 2 description."
        ]
    },
    {
        id: 9, title: "픽토리", description: "다양한 직군과 진행한 사이드 프로젝트", type: 'SIDE_PROJECT',
        url: 'https://www.notion.so/SNS-d4732501dcb949e88b84e83161beaea3?pvs=4',
        duration: '2025.02 ~ (운영 중)',
        techStack: ["kotlin", "spring", "hibernate", "aws", "Junit5"],
        task: [
            "1. 각각 다른 분야의 직군들과 협업하여 1차 스크럼을 위해 작업",
            "2. 코틀린을 활용한 사이드 프로젝트 진행 경험",
            "3. 현재까지는 크게 성공한 프로젝트가 아니지만, 실패의 원인과 그 대책을 찾아 다른 프로젝트 진행 예정"]
    },
];

export default projects;