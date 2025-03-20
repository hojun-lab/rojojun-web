import styled from "styled-components";
import { useState } from "react";
import MyProjectsComponents from "./MyProjectsComponents.tsx";

const ProjectContainer = styled.div`
    padding-top: 60px; /* 헤더 높이만큼 paddingTop 설정 */
    display: flex;
    min-height: calc(100vh - 60px); /* 높이 고정 대신 최소 높이 설정 */
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: aliceblue;
    color: black;
    box-sizing: border-box; /* box-sizing 속성 추가 */
    position: relative; /* pagination indicator 위치 설정을 위해 추가 */
`;

const PaginationIndicator = styled.div`
    
    top: 70px; /* ProjectContainer paddingTop 값 고려해서 조정 */
    right: 20px;
    font-size: 14px;
    color: #555;
`;

// 임시 프로젝트 데이터 (실제 데이터로 대체하세요)
const projectsData = [
    { id: 1, title: "애니쥬", description: "🐾 우리들의 반려동물 자랑 SNS", type: 'PREP', url: 'https://www.notion.so/SNS-d4732501dcb949e88b84e83161beaea3?pvs=4', duration: '2022.07 ~ 08 (6주)', techStack: ["java", "spring", "jpa", "aws", "test", "spring security"],
        task: [" 1.This is project 2 description. ", "This is project 2 description.", "This is project 2 description.", "This is project 2 description.", "This is project 2 description." ], preview: "" },
    { id: 2, title: "AI 마타수학", description: "This is project 2 description.", type: 'PREP', url: 'https://www.notion.so/SNS-d4732501dcb949e88b84e83161beaea3?pvs=4', duration: '2022.07 ~ 08 (6주)', techStack: ["java", "spring", "jpa", "aws", "test", "spring security"],
        task: [" 1.This is project 2 description. ", "This is project 2 description.", "This is project 2 description.", "This is project 2 description.", "This is project 2 description." ] },
    { id: 3, title: "제1회 스파르톤 과제", description: "This is project 3 description." },
    { id: 4, title: "디지털 교과서 프로토 타입", description: "This is project 4 description." },
    { id: 5, title: "EBS 초등온 마타수학", description: "This is project 5 description." },
    { id: 6, title: "AI 디지털 교과서", description: "This is project 6 description." },
    { id: 7, title: "Pickify", description: "This is project 6 description." },
    { id: 8, title: "사내 백오피스 작업", description: "This is project 7 description." },
    { id: 9, title: "AI 마타수학 for 대학", description: "This is project 8 description." },
    { id: 10, title: "픽토리", description: "This is project 8 description." },
];

const MyProjects = () => {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

    const currentProject = projectsData[currentProjectIndex];
    const totalProjects = projectsData.length;

    return (
        <ProjectContainer>
            <div style={{
                lineHeight: '1',
                marginBottom: '10px', paddingTop: '3vh', fontSize: 'clamp(2rem, 6vw, 4rem)' /* 최소 16px, 선호 2vw, 최대 24px */
            }}>PROJECTS
                <hr/>
            </div>
            <PaginationIndicator>
                {currentProjectIndex + 1} / {totalProjects}
            </PaginationIndicator>
            {currentProject && (
                <MyProjectsComponents
                    title={currentProject.title}
                    description={currentProject.description}
                    type={currentProject.type}
                    duration={currentProject.duration}
                    url={currentProject.url}
                    techStack={currentProject.techStack}
                    task={currentProject.task}
                />
            )}
            <div style={{ display:'flex', flexDirection: 'row', marginTop: '10px' }}>
                <button
                    onClick={() => setCurrentProjectIndex(currentProjectIndex - 1)}
                    style={{backgroundColor:'transparent', borderRadius:'10px'}}
                    disabled={currentProjectIndex === 0}
                >
                    Previous
                </button>
                <button
                    onClick={() => setCurrentProjectIndex(currentProjectIndex + 1)}
                    style={{backgroundColor:'transparent', borderRadius:'10px'}}
                    disabled={currentProjectIndex === totalProjects - 1}
                >
                    Next
                </button>
            </div>
        </ProjectContainer>
    )
}

export default MyProjects;