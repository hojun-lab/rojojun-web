import React from "react";
import Home from "./components/Home.tsx";
import Header from "./components/Header.tsx";
import MyInfo from "./components/MyInfo.tsx";
import GlobalStyle from "./styles/GlobalStyle.ts";

const App: React.FC = () => {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Home />
            <MyInfo />
        </>
    )
}

export default App
