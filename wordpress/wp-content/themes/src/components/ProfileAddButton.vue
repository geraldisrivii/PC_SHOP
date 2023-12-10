<template>
    <button @click="onClick" class="profile-button">
        <img :src="app['header-profile_add-icon']" alt="header-profile_add-icon">
    </button>
</template>

<script setup lang="ts">
import { useAppSettings } from '@/hooks/App/useAppSettings';
import { useVuex } from '@/store/useVuex';

let store = useVuex()

let { app } = useAppSettings(store);


interface Props {
    isRegisterDialogShow: boolean
}

const props = defineProps<Props>()


const emit = defineEmits<{
    (e: 'update:isRegisterDialogShow', status: boolean): void
}>()

const onClick = () => {
    emit('update:isRegisterDialogShow', !props.isRegisterDialogShow)
}

</script>

<style lang="scss" scoped>
@import "@/scss/base/mixins.scss";

.profile-button {
    img {
        width: 38px;
        height: 38px;

        @include table {
            width: 35px;
            height: 35px;
        }
    }
}
</style>