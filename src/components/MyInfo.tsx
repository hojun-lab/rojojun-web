// src/components/MyInfo.tsx
import React from 'react';
import styled from 'styled-components';

const MyInfoContainer = styled.div`
        width: 100vw;
        padding-top: 60px; /* 헤더 높이만큼 paddingTop 설정 */
        display: flex;
        height: 100vh;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        background-color: #f0f0f0;
        color: #333;
`;

const MyInfoText = styled.p`
        font-size: 1.2rem;
        margin-bottom: 1rem;
`;

const MyInfo: React.FC = () => {
        return (
            <MyInfoContainer>
                    <MyInfoText>여기는 내용 1</MyInfoText>
                    <MyInfoText>여기는 내용 2</MyInfoText>
                    <MyInfoText>여기는 내용 3</MyInfoText>
                    <MyInfoText>여기는 내용 4</MyInfoText>
                    <MyInfoText>여기는 내용 5</MyInfoText>
                    <MyInfoText>여기는 내용 1</MyInfoText>
                    <MyInfoText>여기는 내용 2</MyInfoText>
                    <MyInfoText>여기는 내용 3</MyInfoText>
                    <MyInfoText>여기는 내용 4</MyInfoText>
                    <MyInfoText>여기는 내용 5</MyInfoText>
                    <MyInfoText>여기는 내용 1</MyInfoText>
                    <MyInfoText>여기는 내용 2</MyInfoText>
                    <MyInfoText>여기는 내용 3</MyInfoText>

            </MyInfoContainer>
        );
};

export default MyInfo;