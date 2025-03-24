import BasicContainer from "../styles/BasicContainer.ts";
import MainTitle from "../styles/MainTitle.ts";
import CareerComponent from "../components/CareerComponent.tsx";
import careers from "../data/career.ts";

const Career = () => {
    return (
        <BasicContainer
            backgroundColor="#FF8C42"
            color="#FFFFFF"
        >
            <MainTitle>
                Career
                <hr/>
            </MainTitle>
            {careers.map((career) => (
                <CareerComponent
                    company={career.company}
                    companyDuration={career.companyDuration}
                    subtitle={career.subtitle}
                    role={career.role}
                    projects={career.projects}
                />
            ))}
        </BasicContainer>
    )
}

export default Career