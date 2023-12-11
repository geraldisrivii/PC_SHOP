import WP from '@/axiosWP';


export default [
    {
        name: "code",
        rules: [
            { type: "min", value: 4, message: "Код должен быть 4 символа" },
            { type: "max", value: 4, message: "Код должен быть 4 символа" },
            {
                type: "custom",
                callback: async (code: any) => {
                    let response = await WP.post("/mails/check", {
                        code: code
                    }, {
                        withCredentials: true
                    });
                    return response.data.status;
                },
                params: [],
                message: "Несуществующий код"
            },
        ]
    },
]