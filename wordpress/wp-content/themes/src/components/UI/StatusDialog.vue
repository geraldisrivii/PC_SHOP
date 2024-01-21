<template>
    <div class="status-dialog-box">
        <my-dialog v-model:isDialogShow="isStatusDialogShow">
            <div class="status-dialog">
                <div class="status-dialog__image">
                    <img :src="props.image" :alt="props.title">
                </div>
                <p class="status-dialog__title title title_secondary">{{ props.title }}</p>
                <p v-if="props.text" class="status-dialog__text">{{ props.text }}</p>
                <button @click="close" class="button">
                    {{ props.button_text }}
                </button>
            </div>
        </my-dialog>
    </div>
</template>

<script setup lang="ts">

import { useAppSettings } from '@/hooks/App/useAppSettings';
import { useVuex } from '@/store/useVuex';
import { Status } from '@/types/components/statusDialog';
import { Ref, ref } from 'vue';


const store = useVuex();

const { app } = useAppSettings(store)

const images: Record<Status, string> = {
    'success': app.value['general_success-icon'],
    'error': app.value['general_problem-icon'],
    'warning': app.value['general_warning-icon']
}



const isStatusDialogShow: Ref<boolean> = ref(false)

const props = {
    image: '',
    title: '',
    text: '',
    button_text: ''
}

function open(status: Status, title: string, text?: string, button_text?: string) {
    isStatusDialogShow.value = true;

    props.image = images[status]
    props.title = title
    props.text = text
    props.button_text = button_text ?? 'Закрыть'

    text = text
}

const close = () => {
    isStatusDialogShow.value = false
}

defineExpose({
    open,
    close
})



</script>

<style lang="scss" scoped>
@import '@/scss/base/mixins.scss';
@import '@/scss/base/typography.scss';


.status-dialog {
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    justify-content: center;

    padding: 18px 23px;

    &__image {
        width: 100px;
        height: 100px;

        img{
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    &__title {
        text-align: center;
    }

    &__text {
        text-align: center;
    }
}

.title {
    &_secondary {}
}
</style>