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
    border: 1px solid #ffffff;
    padding: 15px;
    border-radius: 10px;
    margin: 10px;
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
    align-items: flex-start; /* 상단 정렬 */
    flex-wrap: wrap;
    width: 100vw;
    max-width: 1200px; /* 최대 너비 설정 */
    margin: 0 auto; /* 가운데 정렬 */
    @media (max-width: 768px) {
        flex-direction: column; /* 모바일에서는 세로로 배치 */
        align-items: center; /* 모바일에서는 가운데 정렬 */
    }
`

const langData = [
    {"lang": "java", "level" : "COMPETENT", "reason": "dd", "url" : "/src/assets/images/0.png"},
    {"lang": "javascript", "level" : level[1], "reason": "dd", "url" : "/src/assets/images/1.png"},
    {"lang": "typescript", "level" : level[1], "reason": "dd", "url" : "/src/assets/images/2.png"},
    {"lang": "C#", "level" : level[0], "reason": "dd", "url" : "/src/assets/images/3.png"},
    {"lang": "kotiln", "level" : level[1], "reason": "dd", "url" : "/src/assets/images/4.png"},
    {"lang": "python", "level" : level[0], "reason": "dd", "url" : "/src/assets/images/5.png"},
    {"lang": "Go", "level" : level[0], "reason": "dd", "url" : "/src/assets/images/6.png"},
]

const frameworkData = [
    {"lang": "spring", "level" : level[2], "reason": "dd"},
    {"lang": "React", "level" : level[0], "reason": "dd"},
    {"lang": "express.js", "level" : level[1], "reason": "dd"},
    {"lang": "typeORM", "level" : level[1], "reason": "dd"},
    {"lang": "spring jpa", "level" : level[2], "reason": "dd"},
    {"lang": "spring security", "level" : level[1], "reason": "dd"},
    {"lang": "junit5", "level" : level[3], "reason": "dd"}
]

const DBData = [
    {"lang": "MySQL", "level" : level[2], "reason": "dd"},
    {"lang": "MongoDB", "level" : level[1], "reason": "dd"},
    {"lang": "REDIS", "level" : level[1], "reason": "dd"},
    {"lang": "postgreSQL", "level" : level[0], "reason": "dd"},
]

const DocData = [
    {"lang": "Notion", "level" : level[2], "reason": "dd"},
    {"lang": "Mermaid.js", "level" : level[3], "reason": "dd"}
]

const DepolyMent = [
    {"lang": "AWS", "level" : level[2], "reason": "dd"},
    {"lang": "Linux", "level" : level[1], "reason": "dd"},
    {"lang": "Git", "level" : level[2], "reason": "dd"},
    {"lang": "GitHubActions", "level" : level[1], "reason": "dd"},
    {"lang": "SonarCube", "level" : level[0], "reason": "dd"},
    {"lang": "GCP", "level" : level[0], "reason": "dd"}
]

const Skills = () => {
    return (
        <>
            <MyInfoContainer>
                <div style={{
                    lineHeight: '1',
                    marginBottom: '10px', paddingTop: '3vh', fontSize: 'clamp(2rem, 6vw, 4rem)' /* 최소 16px, 선호 2vw, 최대 24px */
                }}>SKILLS
                    <hr />
                </div>
                <SkillContainer>
                <ContentContainer>
                    <p style={{fontSize: '18px'}}>Language</p>
                    <hr style={{marginBottom: '2rem'}} />
                {langData.map((component) =>
                    <SkillComponents
                        indexNumber={component.url}
                        name={component.lang}
                        level={component.level}
                        reason={component.reason}
                    />
                )}
                </ContentContainer>
                <ContentContainer>
                    {frameworkData.map((component, index) =>
                        <SkillComponents
                            indexNumber={index}
                            name={component.lang}
                            level={component.level}
                            reason={component.reason}
                        />
                    )}
                </ContentContainer>
                    <ContentContainer>
                        {DBData.map((component, index) =>
                            <SkillComponents
                                indexNumber={index}
                                name={component.lang}
                                level={component.level}
                                reason={component.reason}
                            />
                        )}
                    </ContentContainer>
                    <ContentContainer>
                        {DocData.map((component, index) =>
                            <SkillComponents
                                indexNumber={index}
                                name={component.lang}
                                level={component.level}
                                reason={component.reason}
                            />
                        )}
                    </ContentContainer>
                    <ContentContainer>
                        {DepolyMent.map((component, index) =>
                            <SkillComponents
                                indexNumber={index}
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