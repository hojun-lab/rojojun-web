import React from "react";
import GlobalStyle from "./styles/GlobalStyle.ts";
import Header from "./view/Header.tsx";
import Home from "./view/Home.tsx";
import MyInfo from "./view/MyInfo.tsx";
import Skills from "./view/Skills.tsx";
import MyProjects from "./view/MyProjects.tsx";
import Career from "./view/Career.tsx";

const App: React.FC = () => {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Home />
            <MyInfo />
            <Skills />
            <MyProjects />
            <Career />
            {/*<Contact />*/}
        </>
    )
}

export default App
