import Country from "./Card";
import {ICountry } from "./interface";


const CountryList = ({ countries }: {countries: ICountry[]}) => {

    if (countries.length < 1) return <>Loading..</>;

    return (
        <div className="list">
            {countries.map((item: ICountry, key:number) => (
                <Country
                    key={key}
                    image={item.flags!.svg}
                    nameCountry={item.name!.common}
                    region={item.region}
                    population={item!.population}
                    capital={item.capital}
                />
            ))}
        </div>
    );
};

export default CountryList;
