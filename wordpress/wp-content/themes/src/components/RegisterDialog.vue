<template>
    <div class="register">
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
import WP from '@/axiosWP';
import { Ref, ref, watch } from 'vue';
import { useRegisterFields } from '@/hooks/User/useRegisterFields';

interface Props { isRegisterDialogShow: boolean }

interface Emits {
    (e: 'update:isRegisterDialogShow', status: boolean): void
}

const { isRegisterDialogShow } = defineProps<Props>()
const emit = defineEmits<Emits>()


const onUpdate = (newValue: boolean) => emit('update:isRegisterDialogShow', newValue)

const { DataFields, isntValidFields, ValidFields, validData, isValidAll } = useRegisterFields();

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