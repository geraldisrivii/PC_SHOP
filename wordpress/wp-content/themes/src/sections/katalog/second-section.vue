<template>
    <div class="second-section">
        <div class="filters-box">

        </div>
        <div class="products-box">
            <Product v-if="isDataLoaded" v-for="product in products" :key="product.id" :image-src="product.images[0].src"
                :name="product.name" :grouped_products="product.grouped_products" :price="product.price" />
        </div>
    </div>
</template>

<script setup lang="ts">
import Product from '@/components/Product.vue';
import WOO from '@/axiosWoocomerce'
import { Ref, onBeforeMount, onMounted, ref } from 'vue';
import { IGrouppedProduct } from '@/types/Product';
import { useRoute } from 'vue-router';

const route = useRoute();

let isDataLoaded: Ref<boolean> = ref(false)

let products: Ref<Array<IGrouppedProduct>> = ref([])
onBeforeMount(async () => {
    products.value = await WOO.get('products', {
        params: {
            per_page: 20,
            category: 16,
        }
    }).then(res => res.data)

    console.log(products.value)

    isDataLoaded.value = true
})

</script>

<style lang="scss" scoped>
@import '@/scss/base/mixins.scss';
@import '@/scss/base/typography.scss';

.second-section {
    display: grid;
    grid-template-columns: 380px 1fr;
    gap: 30px;
    padding-top: 56px;
    padding-bottom: 68px;
    padding-left: 20px;
    padding-right: 20px;
    max-width: 1420px;
    margin: 0 auto;
}

.filters-box {
    background-color: #141414;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
}

.products-box {
    display: grid;
    grid-template-columns: repeat(auto-fit, 310px);
    gap: 20px;

}
</style>