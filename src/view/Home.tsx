import React, {useState, useEffect} from "react";
import styled from "styled-components";
import HomeComponents from "../components/HomeComponents.tsx";

const IntroContainer = styled.div<{ $opacity: number }>`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    background-color: white;
    opacity: ${(props) => props.$opacity};
    transition: opacity 0.5s ease-in-out;
    z-index: 10;
    pointer-events: none; /* 이 줄을 추가하세요 */
`;

const IntroText = styled.p`
    font-size: 5vw;
    font-weight: bold;
    color: #1a1a1a;
`;

const componentsData = [
    { id: 1, message: "HELLO👋", button : false },
    { id: 2, message: "I'M HOJUN", button : false  },
    { id: 3, message: "== DEVELOPER🧑‍💻", button : false  },
    { id: 4, message: "AND MORE?", button : true  },
];

const Home: React.FC = () => {
    const [introOpacity, setIntroOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            // 스크롤 값이 100px 이상이면 점점 사라지도록 설정
            const scrollY = window.scrollY;
            setIntroOpacity(Math.max(0, 1 - scrollY / 200));
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <div style={{ height: window.innerHeight * 7 }}>
             초기 안내 메시지
            <IntroContainer $opacity={introOpacity}>
                <IntroText>스크롤 해주세요 ⬇</IntroText>
            </IntroContainer>

            {componentsData.map((component, index) => (
                <HomeComponents
                    message={component.message}
                    key={component.id}
                    start={ index * window.innerHeight}
                    end = {(index + 1) * window.innerHeight}
                    button = {component.button}
                />
            ))}
        </div>
    )
}

export default Home;