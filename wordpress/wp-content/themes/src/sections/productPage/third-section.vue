<template>
    <div class="third-section">
        <div class="container third-section-container">
            <p class="third-section__title title title_secondary">Похожие продукты</p>
            <div v-if="sameProductsLoaded" class="third-section-products">
                <Product v-for="product in sameProducts" :key="product.id" :image-src="product.images[0].src"
                    :name="product.name" :id="product.id" :slug="product.slug" :category_slug="product.categories[0].slug"
                    :grouped_products="product.grouped_products" :price="product.price" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Product from '@/components/Product.vue';
import { computed, onMounted, ref } from 'vue';
import { useSameProducts } from '@/hooks/Product/useSameProducts';
import { useCurrentProduct } from '@/hooks/Product/useCurrentProduct';

const { product: currentProduct } = useCurrentProduct()

const { sameProducts, sameProductsLoaded, onMountedAction } = useSameProducts(currentProduct)


onMounted(async () => {
    await onMountedAction();
})

</script>

<style lang="scss" scoped>
@import '@/scss/base/mixins.scss';
@import '@/scss/base/typography.scss';

.third-section {
    background-color: #121212;
    padding-top: 74px;
    padding-bottom: 65px;

    &__title {
        margin-bottom: 40px;
    }
}

.third-section-container {}

.third-section-products {
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

    @include min-table {
        grid-template-columns: 1fr;
    }
}
</style>