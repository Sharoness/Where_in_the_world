import Card from "./Card";
import { ICardInterface } from "./interface";

const CountryList = (props) => {

    if (props.countries.length < 1) return <>Loading..</>;

    return (
        <div className="list">
            {props.countries.map((item: ICardInterface, key) => (
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
