import { FunctionComponent } from "react";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";

interface ICardInterface {
    // image: string;
    // nameCountry: string;
    // population: number;
    // region: string;
    // capital: string;
    // onClick: () => void;
    value: any;
}

const CountryDetails = (props) => {
    const [country, setCountry] = useState();
    const location = useLocation();
    const countryName = decodeURI(location.pathname.replace('/details/', ""))

    useEffect(() => {
        fetchcountry();
    }, []);
    
    async function fetchcountry() {
        const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`); 
        const country = await response.json();
        console.log(country);
        setCountry(country[0]);    

        
    }

  
    const currency = (currenciesArray) => {
        const currenciesName = currenciesArray.map((item) => item.name).toString()
        return currenciesName
    }

    return (
        <div>
            {country && (
                <div>
                    <div>
                        <img className="flagImage" src={country.flags.svg}></img>
                    </div>
                    <div className="text">
                        <span className="title">{country.name.common}</span>
                        <div>
                            <span>Native Name: </span>
                            {country.name.common}
                        </div>
                        <div>
                            <span>Population: </span>
                            {country.population}
                        </div>
                        <div>
                            <span>Region: </span>
                            {country.region}
                        </div>
                        <div>
                            <span>Sub Region: </span>
                            {country.subregion}
                        </div>
                        <div>
                            <span>Capital: </span>
                            {country.capital}
                        </div>
                        <div>
                            <span>Top level domain: </span>
                            {country.tld[0]}
                        </div>
                        <div>
                            <span>currencies: </span>
                            {currency(Object.values(country.currencies))}
                        </div>
  
                        <div>
                            <span>Languages: </span>
                            {Object.values(country.languages)}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CountryDetails;
