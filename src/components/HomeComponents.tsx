import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

interface proptype {
    start: number;
    end: number;
    message: string;
    button: boolean; // 버튼 표시 여부
}

const mySize = { start: 5, end: 10 };

const ParentContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: sticky;
    top: 0;
`;

const ScrollContainer = styled.div<{ $isVisible: number }>`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: sticky;
    top: 0;
    background-color: rgba(40, 44, 52, ${props => props.$isVisible});
    opacity: ${props => props.$isVisible};
    transition: opacity 0.5s ease-in-out;
    color: #ffffff;
`;

const Button = styled.button`
    background-color: #61afef;
    color: #fff;
    border: none;
    padding: 1rem 2rem;
    font-size: 1.2rem;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #5c6370;
    }
`;

interface HomeTestComponentsProps extends proptype {
    message : string
}

const HomeComponents = ({ message, start, end, button }: HomeTestComponentsProps) => {
    const [fontSize, setFontSize] = useState(mySize.start);
    const [isVisible, setIsVisible] = useState(0); // 가시성 상태 추가
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            // 가시성 계산
            let visibility = 0;
            if (scrollY >= start && scrollY < end) {
                visibility = Math.max(0, Math.min(1, (scrollY - start) / (end - start))); // 0과 1 사이 값으로 제한
            } else if (scrollY < start) {
                visibility = 0;
            } else {
                visibility = 1;
            }
            setIsVisible(visibility);

            // 폰트 크기 계산
            const newFontSize =
                mySize.start +
                ((Math.min(scrollY, end) - start) * (mySize.end - mySize.start)) /
                (end - start);
            setFontSize(newFontSize);
        };

        handleScroll()

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [start, end]);

    useEffect(() => {
        if (start === 0) {
            setIsVisible(1);
        }
    },[])

    return (
        <ParentContainer ref={containerRef}>
            <ScrollContainer color={message} $isVisible={isVisible}>
                <p style={{ fontSize: fontSize + 'vw' }}>{message}</p>
                {button && <Button onClick={() => alert('클릭이벤트 구현 중...')}>Click Me</Button>}
            </ScrollContainer>
        </ParentContainer>
    );
};

export default HomeComponents;