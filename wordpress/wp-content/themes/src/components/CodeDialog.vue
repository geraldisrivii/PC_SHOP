<template>
    <my-dialog v-model:isDialogShow="isCodeDialogShow">
        <form class="code-form-form">
            <p class="code-form-form__title title">Потдверждение</p>
            <div class="code-form__input-box code-form-input-box">
                <input v-model="DataAprovedFields.code" class="code-form-form__input input" type="text"
                    placeholder="Введите код" />
                <label class="code-form-form__label"
                    :class="{ '--error': isntValidApprovedFields.code, '--success': ValidApprovedFields.code }">{{
                        isntValidApprovedFields.code ??
                        'Отлично' }}</label>
            </div>
            <p class="code-form__text">
                На вашу почту, которую вы указали при регистрации был выслан код подтверждения. Он состоит из 4-х цифр.
            </p>
        </form>
    </my-dialog>
</template>

<script setup lang="ts">
import { userApprovedFields } from '@/hooks/User/useApprovedFields';
import { Ref, ref, watch } from 'vue';

const isCodeDialogShow = ref(false)

const { DataFields: DataAprovedFields, isntValidFields: isntValidApprovedFields, ValidFields: ValidApprovedFields, validData: validApprovedData, isValidAll: isValidApprovedAll } = userApprovedFields();

let callback: Ref<Function | null> =  ref(null);

watch(isValidApprovedAll, () => {
    if (isValidApprovedAll.value) {
        isCodeDialogShow.value = false
        callback.value()
    }
})

const open = (callbackParam?: Function) => {
    isCodeDialogShow.value = true

    if(callbackParam){
        callback.value = callbackParam 
    }

}

const close = () => {
    isCodeDialogShow.value = false
}

defineExpose({
    open,
    close
})
</script>

<style lang="scss" scoped>
.code-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    &__input-box {
        display: flex;
        flex-direction: column;
        // gap: 10px;
        width: 100%;
        
    }

    &__text {
        text-align: center;
        font-weight: 300;
        color: rgb(219, 219, 219);
    }

}

.code-form-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    padding: 20px;
    max-width: 460px;

    &__label {
        padding-left: 5px;
        visibility: hidden;
        opacity: 0;
        transition: all 0.4s ease;
        transform: translateY(10px);
    }

    &__title {
        margin-bottom: 20px;
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