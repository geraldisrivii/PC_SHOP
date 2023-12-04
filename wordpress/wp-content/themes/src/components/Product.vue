<template>
    <div class="product">
        <img class="product__image" :src="imageSrc" :alt="name">
        <div class="product-description">
            <p class="product-description__name">{{ name }}</p>
            <div class="product-description-specs">
                <div class="spec">
                    <p>{{ productCpu ? productCpu.cfs.shortly_name : 'отсутсвует' }}</p>
                </div>
                <div class="spec">
                    <p>{{ productGpu ? productGpu.cfs.shortly_name : 'отсуствует' }}</p>
                </div>
                <div class="spec">
                    <p>{{ productRam ? productRam.cfs.shortly_name : 'отсуствует' }}</p>
                </div>
            </div>
        </div>
        <p class="product__price">{{ price }} RUB</p>
    </div>
</template>

<script setup lang="ts">
import { IProduct } from '@/types/Product';
import { computed } from 'vue';


interface Props {
    imageSrc: string;
    name: string;
    grouped_products: IProduct[];
    price: string | number;
}

const props = defineProps<Props>()

const necessarySpecsSlugs = [
    'cpu', 'gpu', 'ram'
]
const grouppedProductNames = computed(() => {

    let filteredArray = props.grouped_products.filter(item => item.categories.find(category => necessarySpecsSlugs.includes(category.slug)))

    return filteredArray
})

const productCpu = computed(() => grouppedProductNames.value.find(item => item.categories.find(category => category.slug == 'cpu')))

const productGpu = computed(() => grouppedProductNames.value.find(item => item.categories.find(category => category.slug == 'gpu')))

const productRam = computed(() => grouppedProductNames.value.find(item => item.categories.find(category => category.slug == 'ram')))

</script>

<style lang="scss" scoped>
.product {
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding-top: 15px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 25px;

    background-color: #141414;

    border-radius: 5px;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 20px;

    transition: all 0.3s;

    &:hover {
        cursor: pointer;
        box-shadow: 0 0 10px #ffffff;
    }

    &__image {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    &__price {
        font-size: 18px;
        font-weight: 500px;
        text-transform: uppercase;
    }
}

.product-description {


    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;

    &__name {
        text-transform: uppercase;
        font-size: 22px;
        font-weight: 600;
        margin-bottom: 20px;
    }
}

.product-description-specs {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 10px;
    margin-bottom: 5px;
}

.spec {
    border-bottom: 2px dashed rgb(51, 51, 51);
    width: 80%;
    text-align: center;
    padding-bottom: 5px;

    font-weight: 300;
    color: rgb(214, 213, 213);
}
</style>