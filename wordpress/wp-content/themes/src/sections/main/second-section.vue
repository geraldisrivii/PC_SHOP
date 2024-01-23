<template>
    <div class="second-section">
        <div class="container second-section-container">
            <TransitionGroup name="list">
                <CategoryView class="category" v-if="isDataLoaded" v-for="(category, index) in categories" :key="index"
                    :image-src="category.image" :title="category.product_cat[0].name" :currency="'RUB'"
                    :price="category.price"
                    :slug="category.product_cat[0].slug"
                    />
            </TransitionGroup>
        </div>
    </div>
</template>

<script setup lang="ts">

const isDataLoaded: Ref<boolean> = ref(false);


import CategoryView from '@/components/CategoryView.vue';
import { useAppCategories } from '@/hooks/App/useAppCategories';
import { usePageSettings } from '@/hooks/App/usePageSettings';
import store from '@/store';
import { Ref, onMounted, ref } from 'vue';

let { page } = usePageSettings(store)

let {categories, getCategoryPrice} = useAppCategories(page.value['second-section_categories'])

onMounted(async () => {
    for (const category of categories.value) {
        category.price = await getCategoryPrice(category)
    }
    isDataLoaded.value = true
})
</script>

<style lang="scss" scoped>
@import "@/scss/base/mixins.scss";

.second-section {
    padding-top: 80px;
    margin-bottom: 80px;
}

.second-section-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    align-items: center;
    gap: 30px;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>