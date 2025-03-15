import React from "react";
import Home from "./components/Home.tsx";
import GlobalStyle from "./styles/GlobalStyle.ts";
import Header from "./components/Header.tsx";

const App: React.FC = () => {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Home />
        </>
    )
}

export default App
