import styled from "styled-components";

interface SkillComponentProps {
    indexNumber: string;
    name: string;
    level: string;
    reason: string;
}

interface LogoProps {
    name: string;
}

interface BadgeProps {
    name: string;
}

const NameContainer = styled.div`
    margin: 1vh auto;
    display: flex;
    align-items: center;
    cursor: pointer; /* 클릭 가능하게 설정 */
`;

const BadgeStyle = styled.div<BadgeProps>`
    width: 200px;
    height: 25px;
    border-radius: 10px;
    color: #ffffff;
    text-align: center;
    line-height: 25px;
    background-color: ${props => {
        switch (props.name) {
            case "NOVICE":
                return "#606c76";
            case "ADVANCE_BEGINNERS":
                return "#34c5e8";
            case "COMPETENT":
                return "#646cff";
            case "PROFICIENT":
                return "#98c379";
            case "EXPERT":
                return "#e06c75";
            default:
                return "#cccccc";
        }
    }};
`;

const InfoIcon = styled.div`
    position: relative;
    width: fit-content;
    height: fit-content;
    display: inline-block;
    margin-left: 5px;
    cursor: pointer; /* 클릭 가능하게 변경 */

    &:hover > .tooltip,
    &:active > .tooltip {
        opacity: 1;
        visibility: visible;
    }

    .tooltip {
        white-space: pre-line;
        opacity: 0; /* 처음에는 안 보이도록 */
        visibility: hidden;
        transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out; /* 부드럽게 표시 */

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
        max-width: 200px; /*  maxWidth 추가 */
        z-index: 100;
        transform: translate(-60%, 110%); /* translate 값 조정 */
    }

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

const LogoContainer = styled.div<LogoProps>`
    background-image: url("${props => props.name}");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 50px;
    height: 50px;
    margin-right: 20px;
`;

const SkillComponents = (props: SkillComponentProps) => {

    return (
        <NameContainer>
            <LogoContainer
                name={props.indexNumber} />
            <BadgeStyle name={props.level}>{props.level}</BadgeStyle>
            <InfoIcon>
                ⓘ
                <div className="tooltip">{props.reason}</div>
            </InfoIcon>
        </NameContainer>
    );
};

export default SkillComponents;