<template>
    <my-dialog v-model:isDialogShow="isDialogShow">
        <div v-if="isDialogShow" class="spec-dialog">
            <div class="spec-dialog-image-box">
                <img :src="spec.images[0].src" class="spec-dialog-image-box__image" :alt="spec.name">
            </div>
            <div class="spec-dialog-description-box">
                <p class="spec-dialog-description-box__name title title_secondary">{{ spec.name }}</p>
                <p class="spec-dialog-description-box__description" v-html="spec.description"></p>
            </div>
            <div class="spec-dialog-specs-box">
                <Spec v-for="prop in spec.cfs.properties"
                    :specValue="prop.value"
                    :specLabel="prop.key[0].name + ':'" />
            </div>
        </div>
    </my-dialog>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue';
import Spec from './Spec.vue';
import { IProduct } from '@/types/Product';

let isDialogShow = ref(false)

const spec: Ref<IProduct> = ref({} as IProduct)

const open = (spec_param: IProduct) => {
    spec.value = spec_param
    isDialogShow.value = true
    console.log(spec.value)
}

const close = () => {
    isDialogShow.value = false
}

defineExpose({
    open,
    close
})

</script>

<style lang="scss" scoped>
.spec-dialog {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
}

.spec-dialog-image-box {
    background-color: white;
    padding: 10px;
    border-radius: 5px;
    width: 100%;

    &__image {
        width: 100%;
        height: 200px;
        object-fit: contain;
    }
}

.spec-dialog-description-box {
    &__name {
        text-align: center;
        margin-bottom: 12px;
    }

    &__description {
        text-align: center;
    }
}

.spec-dialog-specs-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
}
</style>