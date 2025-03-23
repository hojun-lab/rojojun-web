import styled from "styled-components";
import SkillComponents from "../components/SkillComponents.tsx";

const MyInfoContainer = styled.div`
    padding-top: 60px; /* 헤더 높이만큼 paddingTop 설정 */
    display: flex;
    min-height: calc(100vh - 60px); /* 높이 고정 대신 최소 높이 설정 */
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: #213547;
    color: white;
    box-sizing: border-box; /* box-sizing 속성 추가 */
`;

const ContentContainer = styled.div`
    background-color: #e2f2ff;
    padding: 15px;
    border-radius: 10px;
    color: #1b1b1b;
    margin: 10px;
    width: 30%; /* 너비 30%로 조정 */
    min-width: 300px; /* 최소 너비 설정 */
    box-sizing: border-box; /* box-sizing 속성 추가 */
`

const level = [
    "NOVICE",
    "ADVANCE_BEGINNERS",
    "COMPETENT",
    "PROFICIENT",
    "EXPERT"
]

const SkillContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    //align-items: flex-start; /* 상단 정렬 */
    align-items: stretch; /* 모든 ContentContainer 높이를 동일하게 */
    flex-wrap: wrap;
    width: 100vw;
    max-width: 1200px; /* 최대 너비 설정 */
    margin: 0 auto; /* 가운데 정렬 */
    padding: 0 20px; /* 양쪽 여백 추가 */
    box-sizing: border-box; /* box-sizing 속성 추가 */
    @media (max-width: 768px) {
        flex-direction: column; /* 모바일에서는 세로로 배치 */
        align-items: center; /* 모바일에서는 가운데 정렬 */
    }
`

const langData = [
    {"lang": "java", "level": "COMPETENT", "reason": "자바 : 실무에서 다수의 프로젝트를 경험하고, JPA 등 관련 기술과 함께 활용 가능", "url": "/0.png"},
    {"lang": "javascript", "level": level[1], "reason": "자바스크립트 : 간단한 프론트엔드 개발 가능, 복잡한 비동기 처리나 최적화는 추가 학습 필요", "url": "/1.png"},
    {"lang": "typescript", "level": level[1], "reason": "타입스크립트 : JS 기으로 프로젝트를 수행해봤지만, 깊이 있는 타입 시스템 활용 경험 부족", "url": "/2.png"},
    {"lang": "C#", "level": level[0], "reason": "C# : 기본 문법은 알고 있지만, 실무 경험은 없음", "url": "/3.png"},
    {"lang": "kotiln", "level": level[1], "reason": "코틀린 : 자바 기반으로 활용가능하지만, 코루틴과 같은 고급 기능은 사용 경험 부족", "url": "/4.png"},
    {"lang": "python", "level": level[0], "reason": "파이썬 : 간단한 스크립트 작성 가능하지만, 대규모 프로젝트 경험 부족", "url": "/5.png"},
    {"lang": "Go", "level": level[0], "reason": "Go : 기본적인 문법 숙지, 실무 사용 경험 부족", "url": "/6.png"},
]

const frameworkData = [
    {"lang": "springboot", "level": level[2], "reason": "여러 프로젝트에서 활용, API 개발 및 설정 최적화 가능", "url": "/springboot.png"},
    {"lang": "React", "level": level[0], "reason": "기본적인 컴포넌트 작성 가능하지만, 상태 관리 및 최적화 경험 부족", "url": "/react.png"},
    {"lang": "express.js", "level": level[1], "reason": "간단한 API 서버 개발 가능하지만, 확장성과 보안 고려 부족", "url": "/express.png"},
    {"lang": "typeORM", "level": level[1], "reason": "기본적인 ORM 사용 가능하지만, 고급 설정 경험 부족", "url": "/typeORM.png"},
    {"lang": "spring data jpa", "level": level[2], "reason": "JPA와 함께 실무 적용 겸험, 복잡한 QueryDSL 활용 가능", "url": "/spring-data.png"},
    {"lang": "hibernate", "level": level[2], "reason": "JPA 내부 동작을 이해하고, 성능 최적화 경험 있음", "url": "/hibernate.png"},
    {"lang": "queryDSL", "level": level[3], "reason": "복잡한 동적 쿼리 작성 가능, 실제 프로젝트에서 최적화 경험 있음", "url": "/querydsl.png"},
    {"lang": "spring security", "level": level[1], "reason": "기본적인 인증/인가 구현 가능하지만, OAuth 등 심화 학습 필요", "url": "/springsecurity.png"},
    {"lang": "junit5", "level": level[3], "reason": "단위 테스트 및 Mocking 능숙, CI/CD에 적용 가능", "url": "/junit5-logo.png"}
]

const DBData = [
    {"lang": "MySQL", "level": level[2], "reason": "스키마 설계, 인덱스 최적화 경험 있음", url: "/mysql.png"},
    {"lang": "MongoDB", "level": level[1], "reason": "NoSQL 이해 가능하지만, 대규모 트랜잭션 경험 부족", url: "/mongodb.png"},
    {"lang": "REDIS", "level": level[1], "reason": "기본적인 캐싱 적용 가능, 고급 활용 (Pub/Sub 등) 미흡", url: "/Redis-Logo.png"},
    {"lang": "postgreSQL", "level": level[0], "reason": "기본적인 CRUD 가능, 고급 기능 활용 부족", url: "/postgreSQL.png"},
]

const DocData = [
    {"lang": "Notion", "level": level[2], "reason": "문서 정리 및 협업 경험 다수", url: "/notion.png"},
    {"lang": "Mermaid.js", "level": level[3], "reason": "다양한 다이어그램 활용", url: "/mermaid.png"},
]

const DepolyMent = [
    {"lang": "AWS", "level": level[2], "reason": "EC2, S3, Lambda 등 기본적인 클라우드 인프라 구성 가능", url: "/aws.png"},
    {"lang": "Linux", "level": level[1], "reason": "터미널 명령어 및 기본적인 서버 관리 가능, 보안 및 최적화 추가 학습 필요", url: "/linux.png"},
    {"lang": "Git", "level": level[2], "reason": "브랜치 전략 및 협업 경험 다수, CI/CD 연동 경험 있음", url: "/git.png"},
    {"lang": "GitHubActions", "level": level[1], "reason": "간단한 배포 파이프라인 구성 가능, 고급 기능 활용 부족", url: "/githubactions.png"},
    {"lang": "gradle", "level": level[0], "reason": "기본적인 빌드 스크립트 작성 가능, 커스텀 태스크 작성 경험 부족", url: "/gradle.png"},
]

const Skills = () => {
    return (
        <>
            <MyInfoContainer id="skills">
                <div style={{
                    lineHeight: '1.2',
                    marginBottom: '10px', paddingTop: '3vh', fontSize: 'clamp(2rem, 6vw, 4rem)' /* 최소 16px, 선호 2vw, 최대 24px */
                }}>SKILLS
                    <p style={{fontSize: '14px'}}>프로젝트 진행 & 개인적인 흥미로 공부</p>
                    <hr/>
                </div>
                <SkillContainer>
                    <ContentContainer>
                        <p style={{fontSize: '18px'}}>Language</p>
                        <hr style={{marginBottom: '2rem'}}/>
                        {langData.map((component) =>
                            <SkillComponents
                                key={component.lang}
                                indexNumber={component.url}
                                name={component.lang}
                                level={component.level}
                                reason={component.reason}
                            />
                        )}
                    </ContentContainer>
                    <ContentContainer>
                        <p style={{fontSize: '18px'}}>Framework & Library</p>
                        <hr style={{marginBottom: '2rem'}}/>
                        {frameworkData.map((component) =>
                            <SkillComponents
                                key={component.lang}
                                indexNumber={component.url}
                                name={component.lang}
                                level={component.level}
                                reason={component.reason}
                            />
                        )}
                    </ContentContainer>
                    <ContentContainer>
                        <p style={{fontSize: '18px'}}>Infrastructure</p>
                        <hr style={{marginBottom: '2rem'}}/>
                        {DepolyMent.map((component) =>
                            <SkillComponents
                                key={component.lang}
                                indexNumber={component.url}
                                name={component.lang}
                                level={component.level}
                                reason={component.reason}
                            />
                        )}
                    </ContentContainer>
                    <ContentContainer>
                        <p style={{fontSize: '18px'}}>Databases</p>
                        <hr style={{marginBottom: '2rem'}}/>
                        {DBData.map((component) =>
                            <SkillComponents
                                key={component.lang}
                                indexNumber={component.url}
                                name={component.lang}
                                level={component.level}
                                reason={component.reason}
                            />
                        )}
                    </ContentContainer>
                    <ContentContainer>
                        <p style={{fontSize: '18px'}}>Documents</p>
                        <hr style={{marginBottom: '2rem'}}/>
                        {DocData.map((component) =>
                            <SkillComponents
                                key={component.lang}
                                indexNumber={component.url}
                                name={component.lang}
                                level={component.level}
                                reason={component.reason}
                            />
                        )}
                    </ContentContainer>
                </SkillContainer>
            </MyInfoContainer>
        </>
    )
}

export default Skills