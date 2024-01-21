import WP from '@/axiosWP';


export default [
    {
        name: "password",
        rules: [
            { type: "min", value: 6, message: "Пароль должен быть хотя-бы 6 символов" },
            { type: "max", value: 15, message: "Пароль должен быть не более 15 символов" },
            { regexp: "/[0-9]+/i", message: "Пароль должен содержать хотя-бы одну цифру" },
        ]
    },
    {
        name: "login",
        rules: [
            { type: "min", value: 6, message: "Логин должен быть хотя-бы 6 символов" },
            { type: "max", value: 15, message: "Логин должен быть не более 15 символов" },
            {
                type: "custom",
                callback: async (login: any) => {
                    let response = await WP.get("/users/check_by_field", {
                        params: {
                            field: "login",
                            value: login
                        },
                        withCredentials: true
                    });
                    return response.data.status;
                },
                params: [],
                message: "Такой логин уже используется"
            },
        ]
    },
    {
        name: "email",
        rules: [
            { regexp: "/^[a-z0-9_.+-]+@[a-z0-9-]+.[a-z0-9-.]+$/i", message: "Не валидный вариант электронной почтоы" },
            {
                type: "custom",
                callback: async (email: any) => {
                    let response = await WP.get("/users/check_by_field", {
                        params: {
                            field: "email",
                            value: email
                        },
                        withCredentials: true
                    });
                    return response.data.status;
                },
                params: [],
                message: "Такая почта уже используется"
            },
        ]
    },
]