<template>
    <my-side-dialog v-model:isDialogShow="isDialogShow">
        <div class="cart-dialog">
            <h1>Hello</h1>
        </div>
    </my-side-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';


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

<style scoped></style>