export interface ICountry {
	name?: IName;
    image?: string;
    nameCountry?: string;
    capital?: string;
    population?: number;
    region?: string;
    flags?: IFlags;
    subregion?: string;
    borders?: string[];
    cca3?: string;
    languages?:string;
    tld?: string;
    currencies?: CurrencyName[];
}
export interface ICountries {
    listCountries: ICountry[]
}

export interface IFlags {
	svg: string;
}

export interface IName {
	common: string;
}

export interface CurrencyName {
	name: string;
}

