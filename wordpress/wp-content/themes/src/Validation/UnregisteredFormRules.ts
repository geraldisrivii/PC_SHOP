export default [
    {
        name: "name",
        rules: [
            { type: "min", value: 1, message: "Поле должно быть заполнено" },
            { type: "max", value: 15, message: "Врядли ваше имя более 15 символов" },
            { regexp: "/[А-ЯЁ]+/i", message: "Имя может содержать только буквы." },
        ]
    },
    {
        name: "tel",
        rules: [
            { regexp: '/\\+?[0-9]{1}[\\s\\-0-9]{10,20}/i', message: "Не валидный вариант номера" },
        ]
    },
]