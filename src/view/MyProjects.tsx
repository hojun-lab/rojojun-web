import styled from "styled-components";
import { useState } from "react";
import projects from "../data/projects.ts";
import MyProjectsComponents from "../components/MyProjectsComponents.tsx";

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

const MyProjects = () => {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

    const currentProject = projects[currentProjectIndex];
    const totalProjects = projects.length;

    return (
        <ProjectContainer id="projects">
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
                    image={currentProject.image}
                    url={currentProject.url}
                    techStack={currentProject.techStack}
                    task={currentProject.task}
                />
            )}
            <div style={{ display:'flex', flexDirection: 'row', marginTop: '10px' }}>
                <button
                    onClick={() => setCurrentProjectIndex(currentProjectIndex - 1)}
                    style={{backgroundColor:'transparent', borderRadius:'10px', color:'black'}}
                    disabled={currentProjectIndex === 0}
                >
                    Previous
                </button>
                <button
                    onClick={() => setCurrentProjectIndex(currentProjectIndex + 1)}
                    style={{backgroundColor:'transparent', borderRadius:'10px', color:'black'}}
                    disabled={currentProjectIndex === totalProjects - 1}
                >
                    Next
                </button>
            </div>
        </ProjectContainer>
    )
}

export default MyProjects;