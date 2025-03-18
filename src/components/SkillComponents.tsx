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
    //cursor: pointer; /* 클릭 가능하게 설정 */
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
            </NameContainer>
    );
};

export default SkillComponents;