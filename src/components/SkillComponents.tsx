import styled from "styled-components";
import Modal from "./Modal.tsx";
import {useState} from "react";

interface SkillComponentProps {
    indexNumber: string;
    name: string,
    level: string,
    reason: string,
}

interface LogoProps {
    name: string,
}

interface BadgeProps {
    name: string,
}

const NameContainer = styled.div`
    margin: 1vh auto;
    display: flex;  /* Flexbox 레이아웃 활성화 */
    flex-direction: row;
    align-items: center; /* 세로축 중앙 정렬 (선택 사항) */
    
    cursor: pointer;
`

const BadgeStyle = styled.div<BadgeProps>`
    width: 200px;
    height: 25px;
    border-radius: 10px;
    color: #ffffff;
    background-color: ${props => {
        switch (props.name) {
            case 'NOVICE' :
                return '#606c76';
            case 'ADVANCE_BEGINNERS' :
                return '#34c5e8'
            case 'COMPETENT' :
                return '#646cff'
            case 'PROFICIENT' :
                return '#98c379'
            case 'EXPERT' :
                return '#e06c75'
        }
    }};
`

const LogoContainer = styled.div<LogoProps>`
    // background-image: url(${props => `/src/assets/images/${props.name}.png`});
    background-image: url("${props => props.name}");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 50px;
    height: 50px;
    margin-right: 20px;
`

const SkillComponents = (props: SkillComponentProps) => {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <NameContainer>
            <LogoContainer name={props.indexNumber} >
            </LogoContainer>
            {/*기술명 : {props.name}*/}
            <BadgeStyle name={props.level}>
                {props.level}
            </BadgeStyle>
            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} reason={props.reason} />
        </NameContainer>
    )
}

export default SkillComponents;