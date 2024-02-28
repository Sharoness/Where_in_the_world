import { useState, useEffect } from "react";
import CountryList from "./CountryList";

function Home({ defaultCountries }) {
    const [countries, setCountries] = useState(defaultCountries);
    const [filteredCountries, setFilteredCountries] = useState(defaultCountries);

    useEffect(() => {
        setFilteredCountries(defaultCountries)
    }, [defaultCountries])

    const handleSearch = (value) => {
        const lowercaseValue = value.toLowerCase();
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

export default Home;