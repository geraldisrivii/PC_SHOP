export interface Suggestion {
    value: string;
    unrestricted_value: string;
    data: object
    [key: string]: any;
}

export interface SuggestionAddress extends Suggestion {
    data: {
        postal_code: string;
        country_iso_code: string;
        [key: string]: string | boolean;
    };
}

export interface DadataResponse {
    suggestions: SuggestionAddress[];
}

export interface SuggestionFio extends Suggestion {
    data: {
        "surname": string | boolean,
        "name": string | boolean,
        "patronymic": string | boolean,
        "gender": string,
        "source": string | boolean,
        "qc": string
    };
}

export interface DadataResponseFio {
    suggestions: SuggestionFio[];
}