import styled from "styled-components";
import ContractComponent from "./ContractComponent.tsx";

const ContactContainer = styled.div`
    width: 100vw;
    padding-top: 60px; /* 헤더 높이만큼 paddingTop 설정 */
    display: flex;
    height: calc(100vh - 60px);
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: #8ecccc;
    box-sizing: border-box; /* box-sizing 속성 추가 */
`;

const ContactTitle = styled.div`
    padding-top: 3vh;
    font-size: clamp(2rem, 6vw, 4rem);
    line-height: 1.2;
    margin-bottom: 10px;
    color: white;
`;


const Contact = () => {
    return<ContactContainer>
        <ContactTitle>STORAGE</ContactTitle>
        <hr style={{ border: "1px solid #808080", width: "50px", marginBottom: '2rem' }} />
        <ContractComponent></ContractComponent>
    </ContactContainer>
}

export default Contact;