import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ICountry, CurrencyName } from "./interface";
import "./App.css";
import {
    faArrowAltCircleLeft,
    faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const CountryDetails = ({
    defaultCountries,
}: {
    defaultCountries: ICountry[];
}) => {
    const [country, setCountry] = useState<ICountry>();
    const [borders, setBorders] = useState([]);
    const [countryPath, setCountryPath] = useState("");
    const location = useLocation();
    const navigate = useNavigate();

    const countryName = decodeURI(location.pathname.replace("/details/", ""));

    useEffect(() => {
        fetchcountry();
    }, [countryPath]);

    useEffect(() => {}, [defaultCountries]);

    async function fetchcountry() {
        const url = `https://restcountries.com/v3.1/name/${countryName}`;

        const response = await fetch(url);
        const country = await response.json();
        setCountry(country[0]);

        const fullBordercountryName = country[0].borders?.map(
            (countryBorder: string) => {
                const cioc = defaultCountries.filter(
                    (defCountries) => defCountries.cca3 === countryBorder
                )[0];
                const fullCountryName = cioc?.name!.common;
                return fullCountryName;
            }
        );
        setBorders(fullBordercountryName);
    }

    const handleClick = () => {
        navigate(`/`);
    };

    const handleBottomBorderClick = (country: string) => {
        navigate(`/details/${country}`, { state: { type: "code" } });
        setCountryPath(country);
    };

    const currency = (currenciesArray: CurrencyName[]) => {
        const currenciesName = currenciesArray
            .map((item) => item.name)
            .toString();
        return currenciesName;
    };

    return (
        <div className="container pink">
            <button className="border-button purple" onClick={handleClick}>
                {" "}
                <FontAwesomeIcon
                    className="icon-padding"
                    icon={faArrowLeft}
                />{" "}
                Back
            </button>
            {country && (
                <div className="purple">
                    <div className="">
                        <img
                            className="flagImage"
                            src={country.flags!.svg}
                        ></img>
                    </div>
                    <div className="brown">
                        <span className="title">{country.name!.common}</span>
                        <div className="blue">
                            <div className="light-green">
                                <div>
                                    <span>Native Name: </span>
                                    {country.name!.common}
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
                            </div>

                            <div className="light-green">
                                <div>
                                    <span>Top level domain: </span>
                                    {country.tld![0]}
                                </div>
                                <div>
                                    <span>Currencies:</span>
                                    {currency(
                                        Object.values(country.currencies!)
                                    )}
                                </div>
                                <div>
                                    <span>Languages: </span>
                                    {Object.values(country.languages!)}
                                </div>
                            </div>
                        </div>

                        {borders ? (
                            <div className="blue-borders">
                                <div>Border countries</div>{" "}
                                {borders.map((value, index) => {
                                    return (
                                        <button
                                            key={index}
                                            onClick={() =>
                                                handleBottomBorderClick(value)
                                            }
                                            className="border-bottom"
                                        >
                                            {value}
                                        </button>
                                    );
                                })}
                            </div>
                        ) : null}

                    </div>
                </div>
            )}
        </div>
    );
};

export default CountryDetails;
