import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import CountryList from "./CountryList";

function App() {
    const [theme, setTheme] = useState("light-mode");

    const handleClick = () => {
        if (theme === "light-mode") {
            setTheme("dark-mode");
        } else {
            setTheme("light-mode");
        }
    };

    return (
        <div className={theme}>
            <header className="header elements">
                <div className="title">Where in the world?</div>
                <button onClick={handleClick}>
                    <FontAwesomeIcon icon={faMoon} />
                    Dark mode
                </button>
            </header>
            <div>
                <input />
                <div>dropdown</div>
                <CountryList />
            </div>
        </div>
    );
}

export default App;
