<template>
    <div class="input-box">
        <input :name="name + '[]'" ref="fileInput" @change="inputChange" style="display: none;" :multiple="isMultiple" type="file" />
        <button type="button" @click="inputOpen" class="button button_white button_around">{{ buttonText }}</button>
    </div>
</template>

<script setup lang="ts">
import { ApiImage } from '@/types/App';
import { Ref, ref } from 'vue';


interface Props {
    images: FileList;
    buttonText: string;
    isMultiple: boolean;
    name: string;
}

const { images, buttonText, isMultiple } = defineProps<Props>()

interface Emits {
    (e: 'update:images', images: FileList): void;
}

const emit = defineEmits<Emits>();

const inputChange = (event: Event) => {

    let files = (event.target as HTMLInputElement).files;

    for (const file of files) {
        file['src'] = URL.createObjectURL(file)
    }
    console.log(files);
    emit('update:images', files);
}

const fileInput: Ref<HTMLInputElement | null> = ref(null)

const inputOpen = () => {
    fileInput.value.click()
}

</script>

<style lang="scss" scoped>
.input-box {
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: flex-start;
}

</style>