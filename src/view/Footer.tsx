import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
    width: 100vw;
    text-align: center;
    font-size: 12px; /* 뷰포트 크기에 따라 자동 조절 */
    padding: 20px 0;
    background-color: #333;
    color: #ffffff;
`;

const Footer: React.FC = () => {
    return (
        <FooterContainer>
            &copy; {new Date().getFullYear()} Hojun Na (GitHub. Rojojun). All rights reserved.
        </FooterContainer>
    );
};

export default Footer;