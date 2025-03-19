import React from "react";
import Home from "./components/Home.tsx";
import Header from "./components/Header.tsx";
import MyInfo from "./components/MyInfo.tsx";
import GlobalStyle from "./styles/GlobalStyle.ts";
import Skills from "./components/Skills.tsx";
import MyProjects from "./components/MyProjects.tsx";

const App: React.FC = () => {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Home />
            <MyInfo />
            <Skills />
            <MyProjects />
            {/*<Contact />*/}
        </>
    )
}

export default App
