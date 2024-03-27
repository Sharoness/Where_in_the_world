import { useState, useEffect } from "react";
import CountryList from "./CountryList";
import { ICountry } from "./interface";

function Home({ defaultCountries }: {defaultCountries: ICountry[]}) {
    const [filteredCountries, setFilteredCountries] = useState<ICountry[]>(defaultCountries);

    useEffect(() => {
        setFilteredCountries(defaultCountries)
    }, [defaultCountries])

    const handleSearch = (value:string) => {
        const lowercaseValue = value.toLowerCase();
        setFilteredCountries(defaultCountries.filter((item: ICountry) => (item.name!.common.toLowerCase().includes(lowercaseValue)))  );
    }

    const handleDropdown = (value:string) => {
        if (value === "All") {
            setFilteredCountries(defaultCountries);
        } else {
            setFilteredCountries(defaultCountries.filter((item)=> item?.region === value));
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
