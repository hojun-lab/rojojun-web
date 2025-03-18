// src/components/MyInfo.tsx
import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import backgroundImage from '../assets/images/bg-1.png';

interface ContentProps {
    fontSize: string;
}

interface ContentContainerProps {
    isSmallScreen: boolean;
}

const MyInfoContainer = styled.div`
    width: 100vw;
    padding-top: 60px; /* 헤더 높이만큼 paddingTop 설정 */
    display: flex;
    height: calc(100vh - 60px);
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-image: url(${backgroundImage});
    background-size: contain; /* 이미지 크기 조절 */
    background-repeat: no-repeat; /* 이미지 반복 방지 */
    background-position: bottom; /* 이미지 위치 조절 */
    background-color: white;
    //color: #333;
`;

const MyInfoText = styled.div`
    //padding-top: 3vh;
    font-size: 8vw;
    line-height: 1.2;
    color: #1a1a1a;
`;

const Subtitle = styled.div`
    //min-font-size: 16px;
    //max-font-size: 20px;
    //font-size: 3vw;
    //font-size: 16px;
    font-size: clamp(1rem, 2vw, 1.5rem); /* 최소 16px, 선호 2vw, 최대 24px */
    color: #1b1b1b;
`

const ContentContainer = styled.div<ContentContainerProps>`
    display: flex;
    flex-direction: row;
    justify-content: space-around; /* 요소 간 간격을 균등하게 분배 */
    align-items: center;
    flex-wrap: wrap; /* 요소가 넘칠 경우 줄바꿈 */

    ${props => !props.isSmallScreen && css`
        justify-content: space-around;
        flex-direction: row;
    `}

    ${props => props.isSmallScreen && css`
        flex-direction: column;
        align-items: stretch;
    `}
`
const Content = styled.div<ContentProps>`
    font-size: ${props => props.fontSize};
    color: #213547;
    flex-grow: 1; /* 내부 요소의 높이를 맞추기 */
    display: flex;
    align-items: center; /* 텍스트 수직 정렬 */
    justify-content: center;
`;

const ContentBox = styled.div`
    margin: 3vh;
    min-width: 400px;
    width: 25vw;
    text-align: center; /* 텍스트 가운데 정렬 */
    background-color: white;
    opacity: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* 내부 요소 균일 정렬 */
    align-items: center;
    min-height: 120px; /* 최소 높이 설정 */

    @media (max-width: 768px) {
        width: 80vw; /* 모바일에서는 더 넓게 */
        min-width: unset;
        min-height: unset; /* 모바일에서는 높이 제한 해제 */
    }
`;


const MyInfo: React.FC = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsSmallScreen(window.innerWidth <= 768);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    return (
        <MyInfoContainer>
            <MyInfoText>INFO</MyInfoText>
            <Subtitle>실용적 배움을 바탕으로 조직과 함께 발전하는 개발자</Subtitle>
            <ContentContainer isSmallScreen={isSmallScreen}>
                <ContentBox>
                    <Content fontSize={"22px"}>Born</Content>
                    <hr style={{ border: "1px solid #808080", width: "50px" }} />
                    <Content fontSize={"16px"}>1993.03.16</Content>
                </ContentBox>
                <ContentBox>
                    <Content fontSize={"22px"}>Name</Content>
                    <hr style={{ border: "1px solid #808080", width: "50px" }} />
                    <Content fontSize={"16px"}>나호준</Content>
                </ContentBox>
                <ContentBox>
                    <Content fontSize={"22px"}>Contact</Content>
                <hr style={{ border: "1px solid #808080", width: "50px" }} />
                    <Content fontSize={"16px"}>http://github.com/rojojun</Content>
                    <Content fontSize={"16px"}>zoloman316@gmail.com</Content>
                </ContentBox>
            </ContentContainer>
        </MyInfoContainer>
    );
};

export default MyInfo;