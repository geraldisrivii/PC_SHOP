<template>
    <my-side-dialog :isCloseButtonPositionAbsolute="true" v-model:isDialogShow="isDialogShow">
        <SiteMenu :isMobile="true"/>
    </my-side-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SiteMenu from './UI/SiteMenu.vue';


const isDialogShow = ref(false)

const open = () => {
    isDialogShow.value = true
}

const close = () => {
    isDialogShow.value = false
}

defineExpose({
    open,
    close
})

</script>

<style scoped>

</style>