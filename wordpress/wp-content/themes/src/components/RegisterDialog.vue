<template>
    <div class="register">
        <my-dialog :isDialogShow="isRegisterDialogShow" @update:isDialogShow="onUpdate">
            <form @submit.prevent="onSubmit" class="register__form">
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
            <Preloader ref="preloader" />
        </my-dialog>

        <!-- <my-dialog v-model:isDialogShow="isCodeDialogShow">
            <form class="register__form register__code-form">
                <p class="register__title title">Потдверждение</p>
                <div class="register__input-box register__code-input-box">
                    <input v-model="DataAprovedFields.code" class="register__input input" type="text"
                        placeholder="Введите код" />
                    <label class="register__label"
                        :class="{ '--error': isntValidApprovedFields.code, '--success': ValidApprovedFields.code }">{{
                            isntValidApprovedFields.code ??
                            'Отлично' }}</label>
                </div>
                <p class="register__text">
                    На вашу почту, которую вы указали при регистрации был выслан код подтверждения. Он состоит из 4-х цифр.
                </p>
            </form>
        </my-dialog> -->
    </div>
</template>

<script setup lang="ts">
import WP from '@/axiosWP';
import { Ref, onMounted, ref, watch } from 'vue';
import { useRegisterFields } from '@/hooks/User/useRegisterFields';
import { useStoreUser } from '@/hooks/User/useStoreUser';
import { useVuex } from '@/store/useVuex';
import { userApprovedFields } from '@/hooks/User/useApprovedFields';
import Preloader from './Preloader.vue';
import { useStatusDialog } from '@/hooks/App/useStatusDialog';
import { useCodeDialog } from '@/hooks/App/useCodeDialog';

interface Props { isRegisterDialogShow: boolean }

interface Emits {
    (e: 'update:isRegisterDialogShow', status: boolean): void
}

const { isRegisterDialogShow } = defineProps<Props>()
const emit = defineEmits<Emits>()

const isCodeDialogShow: Ref<boolean> = ref(false)


const onUpdate = (newValue: boolean) => emit('update:isRegisterDialogShow', newValue)


const preloader = ref<InstanceType<typeof Preloader> | null>(null)

const register = ref<HTMLElement | null>(null)


const store = useVuex();

const { user } = useStoreUser(store);


const { codeDialog } = useCodeDialog(store)

const callback = () => {
    user.value.data.is_email_verified = true
}

const onSubmit = async () => {
    let response = await WP.post('users/signup', ValidFields.value, {
        withCredentials: true,
    })

    user.value = response.data.user

    preloader.value.open()

    let mailResponse = await WP.post('mails', {}, {
        withCredentials: true
    })

    preloader.value.close()

    console.log(mailResponse.data)


    if (mailResponse.status == 200) {
        codeDialog.value.open(callback)
        onUpdate(false)
    }

}

const { DataFields, isntValidFields, ValidFields, validData, isValidAll } = useRegisterFields();


</script>

<style lang="scss" scoped>
@import '@/scss/base/mixins.scss';
@import '@/scss/base/typography.scss';

.register {
    position: relative;
    transition: opacity 0.4s ease;
    z-index: 100;

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

    &__code-form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
        padding: 20px;
        max-width: 460px;
    }


    &__input-box {
        display: flex;
        flex-direction: column;
        // gap: 10px;
        width: 100%;
    }

    &__code-input-box {
        margin-bottom: 20px;
    }

    &__input {
        width: 100%;
    }

    &__text {
        text-align: center;
        font-weight: 300;
        color: rgb(219, 219, 219);
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