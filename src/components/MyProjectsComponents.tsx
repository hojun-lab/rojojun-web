import styled from "styled-components";
import InfoRow from "../styles/InfoRow.ts";
import Label from "../styles/Label.ts";
import Value from "../styles/Value.ts";

interface MyProjProps {
    title: string;
    description: string;
    type: string;
    url: string;
    duration: string;
    task: string[];
    techStack: string[];
}

interface BadgeProps {
    type: string;
}

const ProjectContent = styled.div`
    padding: 20px;
    //border: 1px solid #ccc;
    background-color: white;
    border-radius: 8px;
    margin-top: 20px;
    width: 80%;
    max-width: 800px;
`;

const ProjectBox = styled.div`
    margin-top: 20px;
    display: flex;
    text-align: left;
    flex-direction: row;
    align-items: flex-start; /* 상단 정렬로 변경 */
    gap: 20px; /* 간격 추가 */

    @media (max-width: 1010px) {
        flex-direction: column;
        width: 100%; /* 모바일에서는 ProjectContent에 꽉 차게 */
        gap: 10px; /* 모바일 간격 줄임 */
    }
`;

const ProjectPreviewBox = styled.div`
    width: 40%; /* ProjectBox의 40% 차지 */
    max-width: 400px; /* 최대 너비 제한 */
    aspect-ratio: 1 / 1; /* 1:1 비율 유지 */
    overflow: hidden; /* 이미지가 넘치는 부분 숨김 */
    @media (max-width: 1010px) {
        width: 100%; /* 모바일에서는 ProjectBox에 꽉 차게 */
        max-width: none; /* 최대 너비 제한 해제 */
    }
`;

const ProjectPreview = styled.div`
    width: 100%;
    height: 100%; /* 부모 요소에 꽉 차게 */
    background-color: lightblue;
    background-image: url('/proj1.png');
    background-repeat: no-repeat;
    background-size: contain; /* contain으로 변경하여 이미지 전체가 보이도록 */
    background-position: center;
`;

const ProjectInfoBox = styled.div`
    width: 60%; /* ProjectBox의 60% 차지 */
    display: flex;
    flex-direction: column;

    @media (max-width: 1010px) {
        width: 100%; /* 모바일에서는 ProjectBox에 꽉 차게 */
    }
`;

const ProjectBadge = styled.div<BadgeProps>`
    display: inline-block; /* inline-block으로 변경 */
    padding: 5px 10px; /* padding 추가 */
    height: auto; /* 높이 자동 조정 */
    border-radius: 10px;
    color: #ffffff;
    text-align: center;
    line-height: 1.4; /* line-height 조정 */
    font-size: 0.9em; /* font-size 조정 */
    white-space: nowrap; /* 한 줄로 표시 */
    background-color: ${props => {
    switch (props.type) {
        case "ENTERPRISE":
            return "#606c76";
        case "PERSONAL":
            return "#34c5e8";
        case "PREP":
            return "#646cff";
        case "HACKATHON":
            return "#98c379";
        case "SIDE_PROJECT":
            return "#e06c75";
        default:
            return "#cccccc";
    }
}};
`;

const MyProjectsComponents = (props: MyProjProps) => {
    return <ProjectContent>
        <h2>
            <a href={props.url} target="_blank" rel="noopener noreferrer">
            🔗 {props.title}
            </a></h2>
        <h3>{props.description}</h3>
        <ProjectBox>
            <ProjectPreviewBox>
                <ProjectPreview />
            </ProjectPreviewBox>
            <ProjectInfoBox>
                <InfoRow>
                    <Label><p>구분</p></Label>
                    <Value><ProjectBadge type={props.type}>{props.type}</ProjectBadge></Value>
                </InfoRow>
                <InfoRow>
                    <Label><p>기술 스택</p></Label>
                    <Value><p>{props.techStack.map((i, index) => (
                        <span key={index}>
                            {i}
                            {index < props.techStack.length - 1 ? ', ' : ''}
                        </span>
                    ))}</p></Value>
                </InfoRow>
                <InfoRow>
                    <Label><p>프로젝트 기간</p></Label>
                    <Value><p>{props.duration}</p></Value>
                </InfoRow>
                <InfoRow>
                    <Label><p>주요 작업</p></Label>
                    <Value>
                        {props.task.map((data, index) => {
                            return <p key={index}>{data}</p>
                        })}
                        {/*<p>{props.task</p></Value>*/}
                    </Value>
                </InfoRow>
            </ProjectInfoBox>
        </ProjectBox>
        {/* 여기에 프로젝트 상세 내용 컴포넌트 또는 내용 추가 */}
    </ProjectContent>
}

export default MyProjectsComponents;