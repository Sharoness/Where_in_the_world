import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";
import CountryList from "./CountryList";

function App() {
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

    const handleSearch = (value) => {
        let lowercaseValue = value.toLowerCase();
        setFilteredCountries(countries.filter((item) => item.name.common.toLowerCase().includes(lowercaseValue)));
    }

    const handleDropdown = (value) => {
        if (value === "All") {
            setFilteredCountries(countries);
        } else {
            setFilteredCountries(countries.filter((item)=> item?.region === value));
        }
    }

    return (
        <div>
            <input onChange={(event) => handleSearch(event.target.value)} />
            <div>
                <select onChange={(event) => handleDropdown(event.target.value)}>
                    <option value="All">All</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
            <CountryList countries={filteredCountries} />
        </div>
    );
}

export default App;
