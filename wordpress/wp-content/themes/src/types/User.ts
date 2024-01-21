export interface RegisterFields {
    login: string | null;
    password: string | null;
    email: string | null
}

export interface LoginFields {
    login: string | null;
    password: string | null;
}
export interface ApprovedFields {
    code: string | null;
}


export interface IUser{
    ID: number;
    caps: object;
    data: {
        ID: number;
        display_name: string;
        is_email_verified: boolean;
        user_email: string;
        user_login: string;
        user_nicename: string;
        user_pass: string;
    };
    roles: string[]
}
