// src/components/Home.tsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import { throttle } from 'lodash';
import { FaAngleDoubleDown } from "react-icons/fa";

interface HomeContainerProps {
    $backgroundColor: string; // Transient Prop
    $scrollProgress: number; // Transient Prop
}

const HomeContainer = styled.div<HomeContainerProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
    background-color: ${props => props.$backgroundColor};
    color: #abb2bf;
    font-size: 10em;
    font-family: 'Roboto Mono', monospace;
    overflow: hidden;
    transition: background-color 0.5s ease-in-out;
`;

const ScrollNav = styled.div`
    position: fixed; /* 화면에 고정 */
    top: 5rem; /* 상단 여백 */
    left: 50%; /* 중앙 정렬 */
    transform: translateX(-50%); /* 정확한 중앙 정렬 */
    z-index: 100; /* 다른 요소 위에 표시 */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    background-color: transparent; /* 배경색 투명하게 설정 */
    color: #abb2bf; /* 텍스트 색상 변경 */
    font-size: 16px;
    pointer-events: none; /* 클릭 방지 */
`;

interface TextSectionProps {
    $scrollProgress: number; // Transient Prop
}

const TextSection = styled.div<TextSectionProps>`
    font-weight: bold;
    opacity: ${props => props.$scrollProgress};
    transition: opacity 0.5s ease-in-out;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    white-space: nowrap; /* 줄바꿈 방지 */
    font-size: 10vw; /* 화면 너비에 따라 글자 크기 조절 */
    display: flex; /* flexbox 레이아웃 사용 */
    flex-direction: column; /* 수직 정렬 */
    align-items: center; /* 가로축 중앙 정렬 */
`;

const InfoButton = styled.button`
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

const Home: React.FC = () => {
    const sectionRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];
    const backgroundColors = '#282c34';
    const [currentIndex, setCurrentIndex] = useState(0); // 현재 섹션 인덱스
    const [isScrolling, setIsScrolling] = useState(false); // 스크롤 중 여부
    const [scrollProgresses, setScrollProgresses] = useState<number[]>([1, 0, 0, 0]); // 초기 scrollProgresses 설정

    // Throttled 스크롤 핸들러
    const throttledScrollHandler = useCallback(
        throttle((direction: number) => {
            if (!isScrolling) {
                setIsScrolling(true); // 스크롤 시작

                const nextIndex = Math.max(0, Math.min(currentIndex + direction, sectionRefs.length - 1)); // 다음 인덱스 계산

                if (nextIndex !== currentIndex) {
                    // 다음 인덱스로 스크롤 이동
                    window.scrollTo({
                        top: sectionRefs[nextIndex].current?.offsetTop || 0,
                        behavior: 'smooth',
                    });

                    setCurrentIndex(nextIndex); // 현재 인덱스 업데이트
                }

                // 스크롤 종료 후 스크롤 가능 상태로 변경
                setTimeout(() => {
                    setIsScrolling(false);
                }, 800); // 스크롤 시간
            }
        }, 800), // 800ms Throttle
        [currentIndex, sectionRefs, isScrolling]
    );

    useEffect(() => {
        const handleWheel = (event: WheelEvent) => {
            event.preventDefault(); // 기본 스크롤 동작 방지

            if (!isScrolling) {
                const direction = event.deltaY > 0 ? 1 : -1; // 스크롤 방향 (1: 아래, -1: 위)
                throttledScrollHandler(direction); // Throttled 스크롤 핸들러 호출
            }
        };

        window.addEventListener('wheel', handleWheel, { passive: false }); // passive: false 설정
        return () => {
            window.removeEventListener('wheel', handleWheel);
            throttledScrollHandler.cancel(); // 컴포넌트 언마운트 시 Throttle 취소
        };
    }, [throttledScrollHandler, isScrolling]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;

            const newScrollProgresses = sectionRefs.map((ref) => {
                if (ref.current) {
                    const top = ref.current.offsetTop;
                    const sectionHeight = ref.current.offsetHeight;
                    const center = top + sectionHeight / 2;

                    const distance = Math.abs(scrollPosition + windowHeight / 2 - center);
                    let scrollProgress = 1 - distance / (windowHeight / 2);
                    scrollProgress = Math.max(0, Math.min(1, scrollProgress));

                    return scrollProgress;
                } else {
                    return 0;
                }
            });

            setScrollProgresses(newScrollProgresses);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [sectionRefs]);

    useEffect(() => {
        // 컴포넌트 마운트 후 0.1초 뒤에 페이지를 맨 위로 스크롤
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100);
    }, []);

    return (
        <>
            {sectionRefs.map((ref, index) => (
                <HomeContainer
                    ref={ref}
                    key={index}
                    $backgroundColor={backgroundColors}
                    $scrollProgress={scrollProgresses[index]}
                >
                    <ScrollNav>
                        Scroll Down
                        <div><FaAngleDoubleDown /></div>
                    </ScrollNav>
                    <TextSection $scrollProgress={scrollProgresses[index]}>
                        {index === 0 ? "HELLO👋" : index === 1 ? "I'M HOJUN" : index === 2 ? "== DEVELOPER🧑‍💻" : "AND MORE?"}
                        {index === 3 && <InfoButton>Info</InfoButton>} {/* "AND MORE?" 섹션에서 버튼 표시 */}
                    </TextSection>
                </HomeContainer>
            ))}
        </>
    );
};

export default Home;