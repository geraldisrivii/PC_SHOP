<template>
    <div class="group">
        <div class="group-panel">
            <p class="group-panel__title">{{ groupe.label }}</p>
        </div>
        <div class="group-categories">
            <ConfiguratorCategory @click="onclick(categories.find(category => category.slug === category_slug))"  :configureProduct="configureProduct" v-for="category_slug in groupe.includes" :category="categories.find(category => category.slug === category_slug) ? categories.find(category => category.slug === category_slug) : null"/>
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
    isInfoDialogShow: boolean
}

interface Emits {
    (e: 'update:choosenCategory', category: IProductCategoryResponse): void
    (e: 'update:isInfoDialogShow', status: boolean): void
}

const emit = defineEmits<Emits>()

const { groupe } = defineProps<Props>()


const onclick = (category: IProductCategoryResponse | null) => {
    if(category){
        window.scrollTo(0, 200)
        emit('update:choosenCategory', category)
        emit('update:isInfoDialogShow', false)
    }
}



</script>

<style lang="scss" scoped>
@import '@/scss/base/mixins.scss';
@import '@/scss/base/typography.scss';

.group{
    display: flex;
    flex-direction: column;
}
.group-panel {
    padding: 18px;
    background-color: rgb(53, 53, 53);
    &__title {
        text-transform: uppercase;
        font-size: 16px;
    }
}
.group-categories {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

    @include table{
        grid-template-columns: 1fr;
    }
    gap: 10px;
}

</style>