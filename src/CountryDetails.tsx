
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

interface ICardInterface {
    // image: string;
    // nameCountry: string;
    // population: number;
    // region: string;
    // capital: string;
    // onClick: () => void;
}

const CountryDetails = (props) => {
    const [country, setCountry] = useState();
    const [borders, setBorders] = useState([]);
    const [code, setCode] = useState()
    const location = useLocation();
    const navigate = useNavigate();
    
    const countryName = decodeURI(location.pathname.replace('/details/', ""))

    useEffect(() => {
        fetchcountry();
    }, [code]);
    
    // https://restcountries.com/v3.1/alpha/{code}
    async function fetchcountry() {
           
        let url
        if(location.state.type == 'code') {
            url = `https://restcountries.com/v3.1/alpha/${code}`
        } else {
            url = `https://restcountries.com/v3.1/name/${countryName}`
        }
        const response = await fetch(url); 
        const country = await response.json();
    
        setCountry(country[0]);
        setBorders(country[0].borders);
    }


    const handleClick = () => {
        navigate(`/`);
    }

    const handleBottomBorderClick = (country) => {
        navigate(`/details/${country}`,  {state: {type: "code"}});
        setCode(country)
    }


    const currency = (currenciesArray) => {
        const currenciesName = currenciesArray.map((item) => item.name).toString();
        return currenciesName;
    }

    return (
        <div>
        <button onClick={handleClick}>Back</button>
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
                        </div> <br />
                        <div>
                            <span>Top level domain: </span>
                            {country.tld[0]}
                        </div>
                        <div>
                            <span>Currencies:</span>
                            {currency(Object.values(country.currencies))}
                        </div>

                        <div>
                            <span>Languages: </span>
                            {Object.values(country.languages)}
                        </div>
                    </div>
                </div>
            )}
            <div>Border countries</div>
            {borders.map((value) => {
                return (<button onClick={() => handleBottomBorderClick(value)} className='borderButton'>{value}</button>)
            })}
        </div>
    );
};

export default CountryDetails;
