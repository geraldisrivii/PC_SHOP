<template>
    <button @click="onClick" class="profile-button">
        <img :src="app['header-profile_login-icon']" alt="header-profile_login-icon">
    </button>
</template>

<script setup lang="ts">
import { useAppSettings } from '@/hooks/App/useAppSettings';
import { useVuex } from '@/store/useVuex';

let store = useVuex()

let { app } = useAppSettings(store);


interface Props {
    isLoginDialogShow: boolean
}

const props = defineProps<Props>()


const emit = defineEmits<{
    (e: 'update:isLoginDialogShow', status: boolean): void
}>()

const onClick = () => {
    emit('update:isLoginDialogShow', !props.isLoginDialogShow)
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