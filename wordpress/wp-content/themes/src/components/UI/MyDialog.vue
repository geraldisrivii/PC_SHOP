<template>
        <div @click.stop="onClick" class="modal-wrapper" :class="{ 'modal-wrapper--show': isDialogShow }">
            <div @click.stop class="modal">
                <slot></slot>
            </div>
        </div>
</template>

<script setup lang="ts">
import { defineComponent, ref } from 'vue';

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


.modal-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 999;
    background-color: rgba($color: #474747, $alpha: 0.6);

    visibility: hidden;
    opacity: 0;
    transition: all 0.3s ease;
    transform: translate(-5px, -5px);

    &--show {
        visibility: visible;
        opacity: 1;
        transform: translate(0px, 0px);
    }
}

.modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #1a1a1a;
    border-radius: 20px;

    min-width: 500px;
    min-height: 350px;

    @include table {
        min-width: 300px;
        min-height: 300px;
    }

    padding: 25px;
}
</style>