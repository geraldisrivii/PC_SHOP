import WP from '@/axiosWP';
import { useStatusDialog } from '@/hooks/App/useStatusDialog';
import store from '@/store';


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
                        withCredentials: true,
                        validateStatus: function (status) {
                            return status < 500
                        }
                    });

                    const { statusDialog } = useStatusDialog(store)

                    statusDialog.value.open(response.data.status == true ? 'success' : 'error', response.data.message, null, 'Закрыть')

                    return response.data.status;
                },
                params: [],
                message: "Несуществующий код"
            },
        ]
    },
]