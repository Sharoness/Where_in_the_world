import { FunctionComponent } from "react";


interface ICardInterface {
    image: string;
    nameCountry: string;
    population: number;
    region: string;
    capital: string;
    onClick: () => void;
}

const CountryDetails: FunctionComponent<ICardInterface> = (props: ICardInterface) => {
    return (
        <div>test</div>
    );
};

export default CountryDetails;
