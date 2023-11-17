export interface ICardInterface {
	flags: IFlags;
	name: IName;
    image: string;
    nameCountry: string;
    population: number;
    region: string;
    capital: string;
}

export interface IFlags {
	svg: string;
}

export interface IName {
	common: string;
}

