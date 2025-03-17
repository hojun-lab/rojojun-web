import React from "react";
import HomeComponents from "./HomeComponents.tsx";

const componentsData = [
    { id: 1, message: "HELLO👋", button : false },
    { id: 2, message: "I'M HOJUN", button : false  },
    { id: 3, message: "== DEVELOPER🧑‍💻", button : false  },
    { id: 4, message: "AND MORE?", button : true  },
];

const Home: React.FC = () => {
    return (
        <div style={{ height: window.innerHeight * 7 }}>
            {componentsData.map((component, index) => (
                <HomeComponents
                    message={component.message}
                    key={component.id}
                    start={ index * window.innerHeight}
                    end = {(index + 1) * window.innerHeight}
                    button = {component.button}
                />
            ))}
        </div>
    )
}

export default Home;