import { FunctionComponent } from "react";
import { useLocation } from 'react-router-dom';


interface ICardInterface {
    // image: string;
    // nameCountry: string;
    // population: number;
    // region: string;
    // capital: string;
    // onClick: () => void;
    value: any;
}

const CountryDetails: FunctionComponent<ICardInterface> = (props: ICardInterface) => {
    console.log("props", props.value);
    const thingy = useLocation();
    console.log("thingy:", thingy);

    return (
        <div>test</div>
    );
};

export default CountryDetails;
