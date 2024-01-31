import { FunctionComponent } from "react";
import { useNavigate } from 'react-router-dom';

interface ICardInterface {
    image: string;
    nameCountry: string;
    population: number;
    region: string;
    capital: string;
}

const Card: FunctionComponent<ICardInterface> = (props: ICardInterface) => {
    const navigate = useNavigate();

    const handleClick = (value) => {
        navigate(`/details/${value}`, {state: {key: "value"}});
    }

    return (
        <div className="card elements">
            <button onClick={() => handleClick(props.nameCountry)}>button</button>
            <div>
                <img className="flagImage" src={props.image}></img>
            </div>
            <div className="text">
                <span className="title">{props.nameCountry}</span>
                <div>
                    <span>Population: </span>
                    {props.population}
                </div>
                <div>
                    <span>Region: </span>
                    {props.region}
                </div>
                <div>
                    <span>Capital: </span>
                    {props.capital}
                </div>
            </div>
        </div>
    );
};

export default Card;
