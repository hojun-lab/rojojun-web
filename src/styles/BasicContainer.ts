import styled from "styled-components";

interface ContainerProps {
    backgroundColor: string;
    color: string;
}

const BasicContainer = styled.div<ContainerProps>`
    padding-top: 60px; /* 헤더 높이만큼 paddingTop 설정 */
    display: flex;
    min-height: calc(100vh - 60px); /* 높이 고정 대신 최소 높이 설정 */
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: ${props => props.backgroundColor};
    color: ${props => props.color};
    box-sizing: border-box; /* box-sizing 속성 추가 */
`

export default BasicContainer;