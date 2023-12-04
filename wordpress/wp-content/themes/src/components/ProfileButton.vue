<template>
    <button @click="onClick" class="profile-button">
        <img :src="app['header-profile_icon']" alt="header-profile_icon">
    </button>
</template>

<script setup lang="ts">
import { useAppSettings } from '@/hooks/App/useAppSettings';
import { useVuex } from '@/store/useVuex';

let store = useVuex()

let { app } = useAppSettings(store);


interface Props {
    isProfileShow: boolean
}

const props = defineProps<Props>()


const emit = defineEmits<{
    (e: 'update:isProfileShow', status: boolean): void
}>()

const onClick = () => {
    emit('update:isProfileShow', !props.isProfileShow)
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