<template>
    <div v-if="category" @click="onClick" :key="category.id" class="cat">
        <div v-if="configureProduct[category.slug]" class="cat-good">
            <div class="cat-good__image-box">
                <img class="cat-good__image" v-if="configureProduct[category.slug].images"
                    :src="configureProduct[category.slug].images[0].src" :alt="configureProduct[category.slug].name">
            </div>
            <p class="cat-good__name">{{ configureProduct[category.slug].name }}</p>
        </div>
        <div v-else class="cat__category">
            <img v-if="category.image" :src="category.image.src" :alt="category.image.name">
            <p>{{ category.name }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useConfigureProduct } from '@/hooks/Configurator/useConfigureProduct';
import { IConfigureProduct } from '@/types/Configurator';
import { IProductCategoryResponse } from '@/types/Product';
import { Ref, ref, toRefs } from 'vue';

interface Props {
    category: IProductCategoryResponse | null;
    // choosenCategory: IProductCategoryResponse | null
    configureProduct: IConfigureProduct
}

const props = defineProps<Props>()
const { category, configureProduct } = toRefs(props)

interface Emits {
    (e: 'update:choosenCategory', value: IProductCategoryResponse): void
}

const emit = defineEmits<Emits>()

const onClick = () => {
    emit('update:choosenCategory', category.value)
}


</script>

<style lang="scss" scoped>
.cat {
    height: 100%;
    // max-width: 250px;
    flex-basis: 260px;
    min-width: 230px;
    background-color: rgb(24, 24, 24);
    cursor: pointer;
    border-radius: 5px;
    padding: 15px 15px 0px 15px;

    &__category {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        gap: 20px;

        img {
            height: 120px;
            width: 120px;
            object-fit: contain;
        }

        p {
            height: 60px;
            text-align: center;
        }
    }

}

.cat-good {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;

    &__image {
        width: 90%;
        height: 90%;
    }

    &__image-box {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        background-color: white;
        width: 120px;
        height: 120px;
    }

    &__name {
        text-align: center;
        height: 60px;
    }
}
</style>