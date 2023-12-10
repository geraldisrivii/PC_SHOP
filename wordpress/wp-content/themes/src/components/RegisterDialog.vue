<template>
    <div class="register" :class="{ '--show': isRegisterDialogShow }">
        <my-dialog :isDialogShow="isRegisterDialogShow" @update:isDialogShow="onUpdate">
            <form class="register__form">
                <p class="register__title title">Регистрация</p>
                <div class="register__input-box">
                    <input v-model="DataFields.login" class="register__input input" type="text" placeholder="Логин" />
                    <label class="register__label"
                        :class="{ '--error': isntValidFields.login, '--success': ValidFields.login }">{{
                            isntValidFields.login ??
                            'Отлично' }}</label>
                </div>

                <div class="register__input-box">
                    <input v-model="DataFields.password" class="register__input input" type="text" placeholder="Пароль" />
                    <label class="register__label"
                        :class="{ '--error': isntValidFields.password, '--success': ValidFields.password }">{{
                            isntValidFields.password ??
                            'Отлично' }}</label>
                </div>

                <div class="register__input-box">
                    <input v-model="DataFields.email" class="register__input input" type="text"
                        placeholder="Электронная почта" />
                    <label class="register__label"
                        :class="{ '--error': isntValidFields.email, '--success': ValidFields.email }">{{
                            isntValidFields.email ??
                            'Отлично' }}</label>
                </div>
                <button :disabled="!isValidAll" type="submit" class="button register__button">Отправить</button>
            </form>
        </my-dialog>
    </div>
</template>

<script setup lang="ts">
import Validator from '@/classes/Validator';
import { Ref, ref, watch } from 'vue';

interface Props {
    isRegisterDialogShow: boolean
}
interface Emits {
    (e: 'update:isRegisterDialogShow', status: boolean): void
}
const { isRegisterDialogShow } = defineProps<Props>()
const emit = defineEmits<Emits>()

const onUpdate = (newValue: boolean) => {
    emit('update:isRegisterDialogShow', newValue)
}
interface Fields {
    login: string | null;
    password: string | null;
    email: string | null
}
const DataFields: Ref<Fields> = ref({
    login: '',
    password: '',
    email: ''
})

const isntValidFields: Ref<Fields> = ref({
    login: null,
    password: null,
    email: null
})

const ValidFields: Ref<Fields> = ref({
    login: null,
    password: null,
    email: null
})

const isValidAll = ref(false)


watch(DataFields, () => {
    validData()
}, { deep: true })

const validData = async () => {
    let validator = new Validator();
    validator.setRules([
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
                    callback: async (login) => {
                        // let response = await WP.get("/users/check_by_field", {
                        //     params: {
                        //         field: "login",
                        //         value: login
                        //     },
                        //     withCredentials: true
                        // });
                        // return response.data.status;

                        return true;
                    },
                    params: ["hello"],
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
                    callback: async (email) => {
                        // let response = await WP.get("/users/check_by_field", {
                        //     params: {
                        //         field: "email",
                        //         value: email
                        //     },
                        //     withCredentials: true
                        // });
                        // return response.data.status;

                        return true;
                    },
                    params: ["hello"],
                    message: "Такая почта уже используется"
                },
            ]
        },
    ]);
    let fields = {
        password: DataFields.value.password,
        login: DataFields.value.login,
        email: DataFields.value.email,
    };
    let validFields = await validator.run(fields);

    ValidFields.value = validFields as Fields;

    isntValidFields.value = validator.getIsntValidFields() as Fields;

    if (validator.isAllFieldsValid()) {
        isValidAll.value = true
    } else {
        isValidAll.value = false
    }
    console.log(validFields);
    console.log(isntValidFields.value);
}



</script>

<style lang="scss" scoped>
@import '@/scss/base/mixins.scss';
@import '@/scss/base/typography.scss';

.register {
    visibility: hidden;
    opacity: 0;
    transition: all 0.4s ease;
    z-index: 100;

    &.--show {
        opacity: 1;
        visibility: visible;
    }

    &__title {
        margin-bottom: 20px;
    }

    &__form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
        padding: 20px;
    }

    &__input-box {
        display: flex;
        flex-direction: column;
        // gap: 10px;
        width: 100%;
    }

    &__input {
        width: 100%;
    }

    &__button {
        width: 100%;
        margin-bottom: 20px;
    }

    &__label {
        padding-left: 5px;
        visibility: hidden;
        opacity: 0;
        transition: all 0.4s ease;
        transform: translateY(10px);
    }
}

.--success {
    color: rgb(21, 255, 0);
    padding: 5px;
    opacity: 1;
    visibility: visible;
    transform: translateY(0px);
}

.--error {
    color: rgb(255, 50, 50);
    padding: 5px;
    opacity: 1;
    visibility: visible;
    transform: translateY(0px);
}
</style>