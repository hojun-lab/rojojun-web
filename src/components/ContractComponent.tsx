import styled from "styled-components";

const ContractContainer = styled.div`
    width: 95vw; /* 뷰포트 너비에 맞게 설정 */
    max-width: 1200px; /* 최대 너비 1200px 제한 */
    height: 100vh;
    margin: 5vh 2vh; /* 상하 5vh, 좌우 auto (가운데 정렬) */
    background-color: white;
    border-radius: 15px;
    padding: 40px 10px;
    box-sizing: border-box; /* padding을 width에 포함 */
`;


const ContractComponent = () => {
    return (<ContractContainer>
        name
        email
        message
    </ContractContainer>)
}

export default ContractComponent;