<template>
    <my-side-dialog v-model:isDialogShow="isDialogShow">
        <div class="cart-dialog">
            <div class="cart-dialog-basket-items">
                <BasketItem v-for="basketItem in BasketItemsGrouped" :key="basketItem.product.id"
                    :product="basketItem.product" :quantity="basketItem.quantity" />
            </div>
            <div class="cart-dialog-payment">
                <p class="cart-dialog-payment__sum">Сумма к оплате: <span>{{ sum }}</span> руб</p>
                <button @click="createPayment" class="button cart-dialog-payment__button">Оплатить</button>
            </div>
        </div>
    </my-side-dialog>
    <OrderDialog v-model:isOrderDialogShow="isOrderDialogShow"/>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import BasketItem from './BasketItem.vue';
import { useBasketItemsGrouped } from '@/hooks/Product/useBasketItemsGrouped';
import { useVuex } from '@/store/useVuex';
import { useStoreUser } from '@/hooks/User/useStoreUser';
import WP from '@/axiosWP'
import OrderDialog from './UI/OrderDialog.vue';


const isDialogShow = ref(false)

const isOrderDialogShow = ref(true)

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

const store = useVuex()

const { BasketItemsGrouped } = useBasketItemsGrouped(store)

const { user } = useStoreUser(store)

const sum = computed((): number => {
    let sum = 0;
    BasketItemsGrouped.value.forEach(basketItem => {
        sum += Number(basketItem.product.price) * basketItem.quantity
    })

    return sum
})

const createPayment = async () => {
    let data = {
        amount: sum.value,
        items: BasketItemsGrouped.value,
        shipping: {
            first_name: user.value.data.user_nicename,
            last_name: "",
            address_1: "",
            address_2: "",
            city: "",
            country: "RUSSIA"
        },
    }

    let response = await WP.post('/payments', data, {
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
}

.cart-dialog-basket-items {
    display: flex;
    flex-direction: column;
    gap: 30px;
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