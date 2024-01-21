<template>
    <my-side-dialog v-model:isDialogShow="isDialogShow">
        <div class="cart-dialog">
            <div class="cart-dialog-basket-items">
                <BasketItem  v-for="basketItem in BasketItemsGrouped" :key="basketItem.product.id"
                    :product="basketItem.product" :quantity="basketItem.quantity" />
            </div>
            <div class="cart-dialog-payment">
                <p class="cart-dialog-payment__sum">Сумма к оплате: <span>{{ sum }}</span> руб</p>
                <button @click="isOrderDialogShow = true" class="button cart-dialog-payment__button">Оплатить</button>
            </div>
        </div>
    </my-side-dialog>
    <OrderDialog @pay="createPayment" v-model:isOrderDialogShow="isOrderDialogShow" />
</template>

<script setup lang="ts">
import { computed, onMounted, ref, toRef, toRefs, watch } from 'vue';
import BasketItem from './BasketItem.vue';
import { useBasketItemsGrouped } from '@/hooks/Product/useBasketItemsGrouped';
import { useVuex } from '@/store/useVuex';
import { useStoreUser } from '@/hooks/User/useStoreUser';
import WP from '@/axiosWP'
import WOO from '@/axiosWoocomerce'
import OrderDialog from './UI/OrderDialog.vue';
import { RequestData } from '@/types/components/cartDialog';
import { useBasketItems } from '@/hooks/Product/useBasketItems';
import { IGrouppedProduct } from '@/types/Product';
import { checkMaxQuantityOfProduct } from '@/helpers/checkMaxQuantityOfProduct';
import { getMaxQuantityOfProduct } from '@/helpers/getMaxQuantityOfProduct';

interface Props {
    isDataLoaded: boolean
}

const props = defineProps<Props>()

const { isDataLoaded } = toRefs(props)

const isDialogShow = ref(false)

const isOrderDialogShow = ref(false)


const store = useVuex()

const { BasketItemsGrouped } = useBasketItemsGrouped(store)

const { basketItems } = useBasketItems(store)

watch(isDataLoaded, async () => {
    if(isDataLoaded.value){

        let newBasketItems: IGrouppedProduct[] = []

        for (const basketItem of basketItems.value) {
            const newItem = (await WOO.get('products/' + basketItem.id)).data

            const MaxQuantity = getMaxQuantityOfProduct(basketItems, newItem)
            
            if(newBasketItems.filter(item => item.id == basketItem.id).length >= MaxQuantity){
                continue
            }
            newBasketItems.push(newItem)
        }

        basketItems.value = newBasketItems
    }
})

onMounted(async () => {

})

const open = () => {
    isDialogShow.value = true
}
const close = () => {
    isDialogShow.value = false
}

defineExpose({
    open,
    close
})



const { user } = useStoreUser(store)

const sum = computed((): number => {
    let sum = 0;
    BasketItemsGrouped.value.forEach(basketItem => {
        sum += Number(basketItem.product.price) * basketItem.quantity
    })

    return sum
})

const createPayment = async (data: RequestData) => {

    let response = await WP.post('/payments', {
        amount: sum.value,
        items: BasketItemsGrouped.value,
        ...data
    },
        {
            withCredentials: true
        }).then(response => response.data)

    console.log(response)

    window.location.href = response.yookassa_object.confirmation.confirmation_url
}

</script>

<style lang="scss" scoped>
.cart-dialog {
    display: grid;
    grid-template-columns: 5fr 2fr;
    gap: 30px;
    height: 100%;
}

.cart-dialog-basket-items {
    display: flex;
    flex-direction: column;
    gap: 30px;
    overflow-y: scroll;
    height: 90%;
}

.cart-dialog-payment {
    background-color: #1C1C1C;
    padding: 25px;
    display: flex;
    flex-direction: column;
    height: fit-content;
    gap: 40px;

    &__sum {
        text-transform: uppercase;

        span {
            font-weight: 600;
        }
    }

    &__button {}
}
</style>