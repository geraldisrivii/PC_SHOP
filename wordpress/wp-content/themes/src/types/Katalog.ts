import { IProductCategory } from "./Product";

export interface IFirstSectionSettings {
    category: IProductCategory[];
    title: string;
    text: string;
    image: string;
    background: string;
}

export type TypeMatching = 'matching' | 'non-matching';


export interface IMatchingRule {
    key: string; // то поле в самом обьекте которое сравниваем со значением
    type: TypeMatching;
    value: Array<object>; // прокидываем из выбраных
    compareKey: string;
}   