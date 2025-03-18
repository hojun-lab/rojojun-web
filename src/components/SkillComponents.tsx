import styled from "styled-components";
// import Tooltip from "./Tooltip.tsx";
import { Tooltip } from 'react-tooltip'
// import backgroundImage from '../assets/images/1.png';

interface SkillComponentProps {
    indexNumber: string;
    name: string,
    level: string,
    reason: string,
}

interface LogoProps {
    name: number,
}

interface BadgeProps {
    name: string,
}

const NameContainer = styled.div`
    margin: 1vh auto;
    display: flex;  /* Flexbox 레이아웃 활성화 */
    flex-direction: row;
    align-items: center; /* 세로축 중앙 정렬 (선택 사항) */
`

const BadgeStyle = styled.div<BadgeProps>`
    width: 200px;
    height: 25px;
    border-radius: 10px;
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

// const InfoIcon = styled.span`
//     cursor: pointer;
//     position: relative;
//     margin: 10px;
//     font-size: 16px; /* 아이콘 크기 조정 */
//
//     //&::after {
//     //    content: attr(data-tooltip);
//     //    position: absolute;
//     //    bottom: 150%; /* 아이콘 위에 표시 */
//     //    left: 50%;
//     //    transform: translateX(-50%);
//     //    background-color: rgba(0, 0, 0, 0.85);
//     //    color: white;
//     //    padding: 8px 12px;
//     //    border-radius: 6px;
//     //    font-size: 13px;
//     //    white-space: nowrap;
//     //    z-index: 1000;
//     //    opacity: 0;
//     //    visibility: hidden;
//     //    transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
//     //}
//
//     ::after {
//         border-color: #eef3fd transparent;
//         border-style: solid;
//         border-width: 0 6px 8px 6.5px;
//         content: "";
//         display: block;
//         left: 50%;
//         transform: translateX(-50%);
//         position: absolute;
//         top: -7px;
//         width: 0;
//         z-index: 1;
//     }
//     //
//     //&:hover::after {
//     //    opacity: 1;
//     //    visibility: visible;
//     //}
//
//     ::before {
//         border-color: #7689fd transparent;
//         border-style: solid;
//         border-width: 0 6px 8px 6.5px;
//         content: "";
//         display: block;
//         left: 50%;
//         transform: translateX(-50%);
//         position: absolute;
//         top: -8px;
//         width: 0;
//         z-index: 0;
//     }
// `;

const InfoIcon = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
  display: inline-block;

  &:hover > .tooltip,
  &:active > .tooltip {
    display: block;
  }

  .tooltip {
    white-space: pre-line;
    display: none;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #eef3fd;
    border: #7689fd solid 1px;
    border-radius: 5px;
    color: #505bf0;
    font-size: 12px;
    font-weight: 500;
    height: auto;
    letter-spacing: -0.25px;
    margin-top: 6.8px;
    padding: 5px 11px;
    width: max-content;
    z-index: 100;
    transform: translate(-44%, 110%);
  }

// 말풍선 테두리와 꼬리를 위한 before, after
  .tooltip::after {
    border-color: #eef3fd transparent;
    border-style: solid;
    border-width: 0 6px 8px 6.5px;
    content: "";
    display: block;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    top: -7px;
    width: 0;
    z-index: 1;
  }

  .tooltip::before {
    border-color: #7689fd transparent;
    border-style: solid;
    border-width: 0 6px 8px 6.5px;
    content: "";
    display: block;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    top: -8px;
    width: 0;
    z-index: 0;
  }
`;

const SkillComponents = (props: SkillComponentProps) => {
    return (
        <NameContainer>
            <LogoContainer name={props.indexNumber} >
            </LogoContainer>
            {/*기술명 : {props.name}*/}
            <BadgeStyle name={props.level}>
                {props.level}
            </BadgeStyle>
            {/*<InfoIcon data-tooltip={props.reason} >*/}
            <Tooltip>
                ⓘ
            </Tooltip>
        </NameContainer>
    )
}

export default SkillComponents;