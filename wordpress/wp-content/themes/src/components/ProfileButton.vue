<template>
    <button @click="onClick" class="profile-button">
        <img :src="app['header-profile_icon']" alt="header-profile_icon">
    </button>
</template>

<script setup lang="ts">
import { useAppSettings } from '@/hooks/App/useAppSettings';
import { useProfileDialog } from '@/hooks/App/useProfileDialog';
import { useVuex } from '@/store/useVuex';

let store = useVuex()

let { app } = useAppSettings(store);

const { profileDialog } = useProfileDialog(store)

const onClick = () => {
    profileDialog.value.open()
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