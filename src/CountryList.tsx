import { useEffect, useState } from "react";
import Card from "./Card";
import { ICardInterface } from "./interface";

const CountryList = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetchCountries();
    }, []);

    async function fetchCountries() {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const countries = await response.json();
        setCountries(countries);
        console.log(countries);
    }

    if (countries.length < 1) return <>Loading..</>;

    return (
        <div className="list">
            {countries.map((item: ICardInterface, key) => (
                <Card
                    key={key}
                    image={item.flags.svg}
                    nameCountry={item.name.common}
                    region={item.region}
                    population={item.population}
                    capital={item.capital}
                />
            ))}
        </div>
    );
};

export default CountryList;
