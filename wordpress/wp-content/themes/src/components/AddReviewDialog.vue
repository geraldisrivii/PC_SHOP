<template>
    <div class="add-review">
        <my-dialog :isDialogShow="isAddReviewDialogShow" @update:isDialogShow="onUpdate">

        </my-dialog>
    </div>
</template>

<script setup lang="ts">

interface Props {
    isAddReviewDialogShow: boolean;
}

const { isAddReviewDialogShow } = defineProps<Props>()

interface Emits {
    (e: 'update:isAddReviewDialogShow', status: boolean): void;
}

const emit = defineEmits<Emits>()

const onUpdate = (newValue: boolean) => {
    emit('update:isAddReviewDialogShow', newValue)
}

</script>

<style lang="scss" scoped></style>