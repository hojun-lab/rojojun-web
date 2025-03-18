import styled from "styled-components";
import SkillComponents from "./SkillComponents.tsx";

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
    {"lang": "java", "level": "COMPETENT", "reason": "dd", "url": "/src/assets/images/0.png"},
    {"lang": "javascript", "level": level[1], "reason": "dd", "url": "/src/assets/images/1.png"},
    {"lang": "typescript", "level": level[1], "reason": "dd", "url": "/src/assets/images/2.png"},
    {"lang": "C#", "level": level[0], "reason": "dd", "url": "/src/assets/images/3.png"},
    {"lang": "kotiln", "level": level[1], "reason": "dd", "url": "/src/assets/images/4.png"},
    {"lang": "python", "level": level[0], "reason": "dd", "url": "/src/assets/images/5.png"},
    {"lang": "Go", "level": level[0], "reason": "dd", "url": "/src/assets/images/6.png"},
]

const frameworkData = [
    {"lang": "springboot", "level": level[2], "reason": "dd", "url": "/src/assets/images/springboot.png"},
    {"lang": "React", "level": level[0], "reason": "dd", "url": "/src/assets/images/react.png"},
    {"lang": "express.js", "level": level[1], "reason": "dd", "url": "/src/assets/images/express.png"},
    {"lang": "typeORM", "level": level[1], "reason": "dd", "url": "/src/assets/images/typeORM.png"},
    {"lang": "spring data jpa", "level": level[2], "reason": "dd", "url": "/src/assets/images/spring-data.png"},
    {"lang": "hibernate", "level": level[2], "reason": "dd", "url": "/src/assets/images/hibernate.png"},
    {"lang": "queryDSL", "level": level[3], "reason": "dd", "url": "/src/assets/images/queryDSL.png"},
    {"lang": "spring security", "level": level[1], "reason": "dd", "url": "/src/assets/images/springsecurity.png"},
    {"lang": "junit5", "level": level[3], "reason": "dd", "url": "/src/assets/images/junit5-logo.png"}
]

const DBData = [
    {"lang": "MySQL", "level": level[2], "reason": "dd", url: "/src/assets/images/MySQL.png"},
    {"lang": "MongoDB", "level": level[1], "reason": "dd", url: "/src/assets/images/mongodb.png"},
    {"lang": "REDIS", "level": level[1], "reason": "dd", url: "/src/assets/images/Redis-Logo.png"},
    {"lang": "postgreSQL", "level": level[0], "reason": "dd", url: "/src/assets/images/PostgreSQL.png"},
]

const DocData = [
    {"lang": "Notion", "level": level[2], "reason": "dd", url: "/src/assets/images/Notion.png"},
    {"lang": "Mermaid.js", "level": level[3], "reason": "dd", url: "/src/assets/images/Mermaid.png"},
]

const DepolyMent = [
    {"lang": "AWS", "level": level[2], "reason": "dd", url: "/src/assets/images/aws.png"},
    {"lang": "Linux", "level": level[1], "reason": "dd", url: "/src/assets/images/linux.png"},
    {"lang": "Git", "level": level[2], "reason": "dd", url: "/src/assets/images/git.png"},
    {"lang": "GitHubActions", "level": level[1], "reason": "dd", url: "/src/assets/images/githubactions.png"},
    {"lang": "gradle", "level": level[0], "reason": "dd", url: "/src/assets/images/gradle.png"},
]

const Skills = () => {
    return (
        <>
            <MyInfoContainer>
                <div style={{
                    lineHeight: '1',
                    marginBottom: '10px', paddingTop: '3vh', fontSize: 'clamp(2rem, 6vw, 4rem)' /* 최소 16px, 선호 2vw, 최대 24px */
                }}>SKILLS
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
                <button onClick={() => alert('test')}></button>
            </MyInfoContainer>
        </>
    )
}

export default Skills