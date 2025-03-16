// src/components/Header.tsx
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #333;
    color: #fff;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100; /* 다른 요소 위에 표시 */
    box-sizing: border-box; /* box-sizing 속성 추가 */
    height: 60px; /* 명시적인 높이 설정 */
`;

const HomeLink = styled.a`
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    font-size: 1.2rem;
`;

const Nav = styled.nav`
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
    }

    li {
        margin-left: 1rem;
    }

    a {
        text-decoration: none;
        color: #fff;
        &:hover {
            color: #ddd;
        }
    }
`;

const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <HomeLink href="/">Home</HomeLink>
            <Nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </Nav>
        </HeaderContainer>
    );
};

export default Header;