<template>
    <div class="group">
        <div class="group-panel">
            <p class="group-panel__title">{{ groupe.label }}</p>
        </div>
        <div class="group-categories">
            <ConfiguratorCategory :configureProduct="configureProduct" v-for="category_slug in groupe.includes" :category="categories.find(category => category.slug === category_slug) ? categories.find(category => category.slug === category_slug) : null"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { IConfigureGroupe, IProductCategoryResponse } from '@/types/Product';
import ConfiguratorCategory from './ConfiguratorCategory.vue';
import { IConfigureProduct } from '@/types/Configurator';

interface Props {
    groupe: IConfigureGroupe
    categories: IProductCategoryResponse[]
    configureProduct: IConfigureProduct
}

const { groupe } = defineProps<Props>()




</script>

<style lang="scss" scoped></style>