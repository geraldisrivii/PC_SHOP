<template>
    <div class="register">
        <my-dialog :isDialogShow="isLoginDialogShow" @update:isDialogShow="onUpdate">
            <form @submit.prevent="onSubmit" class="register__form">
                <p class="register__title title">Авторизация</p>
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
                <button :disabled="!isValidAll" type="submit" class="button register__button">Отправить</button>
            </form>
        </my-dialog>
    </div>
</template>

<script setup lang="ts">
import WP from '@/axiosWP';
import { Ref, ref, watch } from 'vue';
import { useLoginFields } from '@/hooks/User/useLoginFields';
import { useStatusDialog } from '@/hooks/App/useStatusDialog';
import { useVuex } from '@/store/useVuex';
import { useStoreUser } from '@/hooks/User/useStoreUser';

interface Props { isLoginDialogShow: boolean }

interface Emits {
    (e: 'update:isLoginDialogShow', status: boolean): void
}

const { isLoginDialogShow } = defineProps<Props>()
const emit = defineEmits<Emits>()


const onUpdate = (newValue: boolean) => emit('update:isLoginDialogShow', newValue)

const store = useVuex();

const { DataFields, isntValidFields, ValidFields, validData, isValidAll } = useLoginFields();

const onSubmit = async (event: Event) => {
    let responseLogin = await WP.post('/users/signin', {
        'login': DataFields.value.login,
        'password': DataFields.value.password
    }, {
        withCredentials: true,
        validateStatus: function (status) {
            return status < 500
        }
    })

    onUpdate(false)

    const { statusDialog } = useStatusDialog(store)

    statusDialog.value.open(responseLogin.data.status == true ? 'success' : 'error', responseLogin.data.message, null, responseLogin.data.status ? 'Отлично!' : 'Закрыть' )

    const { user } = useStoreUser(store)

    if (responseLogin.data.status) {
        user.value = responseLogin.data.user
    }

}

</script>

<style lang="scss" scoped>
@import '@/scss/base/mixins.scss';
@import '@/scss/base/typography.scss';

.register {
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