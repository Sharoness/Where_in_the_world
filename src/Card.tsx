import { FunctionComponent } from "react";
import { useNavigate } from 'react-router-dom';
import { ICountry } from "./interface";

const Country: FunctionComponent<ICountry> = (props: ICountry) => {
    const navigate = useNavigate();

    const handleClick = (value:string) => {
        navigate(`/details/${value}`, {state: {key: "value"}});
    }

    return (
        <div className="Country elements card">
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

export default Country;
