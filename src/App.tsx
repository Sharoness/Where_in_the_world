import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";
import CountryList from "./CountryList";

function App() {
    const [theme, setTheme] = useState("light-mode");
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);

    useEffect(() => {
        fetchCountries();
    }, []);

    async function fetchCountries() {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const countries = await response.json();
        setCountries(countries);
        setFilteredCountries(countries);
        console.log(countries);
    }

    const handleClick = () => {
        if (theme === "light-mode") {
            setTheme("dark-mode");
        } else {
            setTheme("light-mode");
        }
    };
    
    const handleDropdown = (value) => {
        setFilteredCountries(countries.filter( (item)=> item?.region === value));
    }

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
                <div>
                    <select onChange={(event) => handleDropdown(event.target.value)}>
                        <option value="Africa">Africa</option>
                        <option value="Americas">America</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                </div>
                <CountryList countries={filteredCountries} />
            </div>
        </div>
    );
}

export default App;
