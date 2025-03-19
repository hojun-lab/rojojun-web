import styled from "styled-components";

interface MyProjProps {
    title: string;
    description: string;
}

const ProjectBox = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row; // 기본적으로 가로 방향 (2개의 칸)
    align-items: center;
    //@media (max-width: 760px) { // 주석 처리된 미디어 쿼리 (760px 기준)
    //    flex-direction: column;
    //}

    @media (max-width: 1010px) { // 활성화된 미디어 쿼리 (768px 기준)
        flex-direction: column; // 768px 이하에서는 세로 방향 (1열)
        width: 80vw; /* 모바일에서는 더 넓게 */
        min-width: unset;
        min-height: unset; /* 모바일에서는 높이 제한 해제 */
    }
`

const ProjectContent = styled.div`
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    margin-top: 20px;
    width: 80%;
    max-width: 800px;
`;

const DataBox = styled.div`
    width: 50vw;
    min-width: 400px;

    @media (max-width: 768px) { // 활성화된 미디어 쿼리 (768px 기준)
        width: 80vw; /* 모바일에서는 더 넓게 */
        min-width: unset;
        min-height: unset; /* 모바일에서는 높이 제한 해제 */
    }
`

const ProjectPreview = styled.div`
    margin: 10px;
    backgroundColor: lightblue;
    width: 400px;
    height: 400px;
    background-image: url('/proj1.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
`

const MyProjectsComponents = (props: MyProjProps) => {
    return <ProjectContent>
        <h2>{props.title}</h2>
        <ProjectBox>
            <DataBox>
                <ProjectPreview />
            </DataBox>
            <DataBox>
                <p>{props.description}</p>
                <p>구분</p>
                <p>url</p>
                <p>기술 스택</p>
                <p>프로젝트 기간</p>
                <p>주요 작업</p>
            </DataBox>
        </ProjectBox>
        {/* 여기에 프로젝트 상세 내용 컴포넌트 또는 내용 추가 */}
    </ProjectContent>
}

export default MyProjectsComponents;