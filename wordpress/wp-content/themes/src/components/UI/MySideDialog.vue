<template>
    <div class="my-side-dialog-container" :class="{ 'my-side-dialog-container--show': isDialogShow }">
        <button @click="emit('update:isDialogShow', false)" class="my-side-dialog-container__close-button close-button">
            <div class="close-button__line close-button__line_1"></div>
            <div class="close-button__line close-button__line_2"></div>
        </button>
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';


interface Props {
    isDialogShow: boolean
}

const props = defineProps<Props>()

interface Emits {
    (e: 'update:isDialogShow', status: boolean): void
}
const emit = defineEmits<Emits>()


const onClick = () => {
    emit('update:isDialogShow', !props.isDialogShow)
}



</script>

<style lang="scss" scoped>
@import '@/scss/base/mixins.scss';
@import '@/scss/base/typography.scss';
.my-side-dialog-container {
    position: fixed;
    top: 0;
    right: 0;
    z-index: -1;
    background-color: #1a1a1a;

    transition: all 0.3s ease-in-out;

    width: 70%;
    opacity: 0;
    height: 100vh;

    @include table {
        width: 100%;
    }

    padding: 25px;


    padding-top: 50px;

    &__close-button {
        margin-bottom: 20px;
    }

    &--show {
        width: 90%;
        opacity: 1;
        z-index: 850;
    }
}
</style>