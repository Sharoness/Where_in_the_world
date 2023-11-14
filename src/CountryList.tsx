import { useEffect, useState } from "react";
import Card from "./Card"

const CountryList = () => {
	const [countries, setCountries] = useState();

	useEffect(() => {
		fetchCountries();
	}, []);

	async function fetchCountries() {
		const response = await fetch("https://restcountries.com/v3.1/all");
		const countries = await response.json();
		setCountries(countries);
		console.log(countries);
	}

    return (
        <>
            <Card></Card>
        </>
    )
}

export default CountryList;