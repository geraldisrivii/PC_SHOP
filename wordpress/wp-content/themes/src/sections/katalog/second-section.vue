<template>
    <div class="second-section">
        <div class="products-wrapper" v-for="series in serieses">
            <p class="products-wrapper__title title">Линейка {{ series.name }}</p>
            <div class="products-box">
                <TransitionGroup name="list">
                    <Product v-if="hasLoadedOneProduct" v-for="product in products[series.slug]" :key="product.id"
                        :image-src="product.images[0].src" :name="product.name" :grouped_products="product.grouped_products"
                        :price="product.price" :id="product.id" :slug="product.slug"
                        :category_slug="product.categories[0].slug" />
                </TransitionGroup>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Product from '@/components/Product.vue';
import WOO from '@/axiosWoocomerce'
import WP from '@/axiosWP'
import { Ref, computed, onBeforeMount, onMounted, ref, watch } from 'vue';
import { IGrouppedProduct } from '@/types/Product';
import { useRoute } from 'vue-router';

import { useVuex } from '@/store/useVuex';
import { usePageSettings } from '@/hooks/App/usePageSettings';
import { useProducts } from '@/hooks/Katalog/useProducts';

interface Emits {
    (e: 'load'): void
}

const emit = defineEmits<Emits>()

const route = useRoute();

const store = useVuex();

const { page } = usePageSettings(store);


let isDataLoaded: Ref<boolean> = ref(false)

const { serieses, products, onMountedAction, hasLoadedOneProduct } = useProducts()

watch(hasLoadedOneProduct, () => {
    if (hasLoadedOneProduct.value) {
        emit('load')
    }
})

watch(route, async () => {
    await onMountedAction(route.params.category as string)
    // emit('load')
}, { deep: true })

onBeforeMount(async () => {

    await onMountedAction(route.params.category as string)

    // isDataLoaded.value = true

    // emit('load')

})

</script>

<style lang="scss" scoped>
@import '@/scss/base/mixins.scss';
@import '@/scss/base/typography.scss';

.paginate {
    padding-top: 70px;
    width: fit-content;
    margin: 0 auto;
}

.second-section {
    display: flex;
    flex-direction: column;
    gap: 100px;
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
    height: fit-content;

    display: flex;
    flex-direction: column;
    padding: 15px;
    gap: 10px;
}

.products-wrapper {
    &__title {
        margin-bottom: 60px;
    }
}

.products-box {
    display: grid;
    grid-template-columns: repeat(auto-fit, 330px);

    @include table {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }

    gap: 20px;
    align-content: flex-start;
    align-items: center;
}


.list-move,
/* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
    position: absolute;
}
</style>