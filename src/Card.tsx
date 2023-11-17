import { FunctionComponent } from "react";

interface ICardInterface {
    image: string;
    nameCountry: string;
    population: number;
    region: string;
    capital: string;
    
}

const Card: FunctionComponent<ICardInterface> = (props: ICardInterface) =>
 {

    return (
    <div>
        <div>{props.image}</div>
        <div>{props.nameCountry} </div>
        <div>{props.population}</div>
        <div>{props.region}</div>
        <div>{props.capital}</div>
    </div>
    )
}

export default Card;
