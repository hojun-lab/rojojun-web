import styled from "styled-components";

interface CareerProps {
    company: string;
    companyDuration: string;
    subtitle: string;
    role: string[];
    projects: ProjectDetails[]
}

interface ProjectDetails {
    name: string;
    duration: string;
    detail: string;
}

const ComponentContainer = styled.div`
    padding: 20px;
    //border: 1px solid #ccc;
    background-color: #FFF5E6;
    border-radius: 8px;
    margin-top: 20px;
    width: 80%;
    max-width: 800px;
`

const ProjectBox = styled.div`
    margin-top: 20px;
    display: flex;
    text-align: left;
    flex-direction: row;
    align-items: flex-start; /* 상단 정렬 */
    gap: 20px;

    @media (max-width: 1010px) {
        flex-direction: column;
        width: 100%;
        gap: 10px;
    }
`;

const StyledHr = styled.hr`
    flex-grow: 1; /* PreviewBox와 InfoBox의 최대 높이에 맞춰 확장 */
    border: none;
    width: 1px;
    height: 100%;
    background-color: #ccc;
`;

const PreviewBox = styled.div`
    width: 40%;
    max-width: 400px;
    aspect-ratio: 1 / 1;
    overflow: hidden;
    flex-shrink: 0; /* 크기가 변하지 않도록 고정 */

    @media (max-width: 1010px) {
        width: 100%;
        max-width: none;
    }
`;

const Preview = styled.div`
    width: 95%;
    height: 95%; /* 부모 요소에 꽉 차게 */
    background-color: #ffffff;
    border: 1px solid #FF8C42;
    border-radius: 20px;
    background-image: url('/company.png');
    background-repeat: no-repeat;
    background-size: contain; /* contain으로 변경하여 이미지 전체가 보이도록 */
    background-position: center;
`;

const InfoBox = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    color: #1a1a1a;

    @media (max-width: 1010px) {
        width: 100%;
        max-height: none; /* 모바일에서는 높이 제한 해제 */
    }
`;

const CareerComponent = (props: CareerProps) => {
    return (
        <ComponentContainer>
            <ProjectBox>
                <PreviewBox>
                    <Preview></Preview>
                </PreviewBox>
                <StyledHr/>
                <InfoBox>
                    <div>
                        <h2 style={{width: '100%'}}>{props.company}</h2>
                        <p style={{color: '#808080', marginBottom: '15px'}}>{props.companyDuration}</p>
                        <p>{props.subtitle}</p>
                        <p>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'row',
                                gap: '5px',
                                flexWrap: 'wrap',
                                margin: '20px 0',
                            }}>                                {props.role.map((item) => (
                                <div style={{
                                    backgroundColor: '#4A5784', width: '100px', height: '30px', borderRadius: '5px',
                                    color: '#FFF',
                                    fontSize: '12px',
                                    alignContent: 'center',
                                    textAlign: 'center',
                                }}>
                                    {item}
                                </div>
                            ))}
                            </div>
                            {props.projects.map((item) => (
                                <div style={{marginBottom: '20px'}}>
                                    <h3>{item.name}</h3>
                                    <p style={{color: '#808080', marginBottom: '15px'}}>{item.duration}</p>
                                    {item.detail}
                                </div>
                            ))}
                        </p>
                    </div>
                </InfoBox>
            </ProjectBox>
        </ComponentContainer>
    )
}

export default CareerComponent;