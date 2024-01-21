<template>
    <my-side-dialog v-model:isDialogShow="isDialogShow">
        <div class="profile-dialog">
            <div class="profile-dialog-orders">
                <Order v-for="order in orders" :key="order.id" :order="order"/>
            </div>
            <MenuButtons :items="menuItems" v-model:chosenItem="chosenMenuItem" />
        </div>
    </my-side-dialog>
</template>

<script setup lang="ts">
import { Ref, onMounted, ref } from 'vue';
import MenuButtons from './UI/MenuButtons.vue';
import { useOrderMenuItems } from '@/hooks/Cart/useOrderMenuItems';
import Order from './Order.vue';
import WOO from '@/axiosWoocomerce'
import { IOrder } from '@/types/Basket';


const { menuItems, chosenMenuItem } = useOrderMenuItems()

const orders: Ref<IOrder[]> = ref([])

const getOrders = async () => {
    const response = await WOO.get('orders')

    return response.data;
}

onMounted( async () => {
    orders.value = await getOrders()
})


const isDialogShow = ref(false)

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

</script>

<style lang="scss" scoped>
@import '@/scss/base/mixins.scss';
@import '@/scss/base/typography.scss';

.profile-dialog {
    display: grid;
    grid-template-columns: 5fr 2fr;
    gap: 40px;
    height: 90%;

    @include table {
        grid-template-columns: 1fr;
    }
}

.profile-dialog-orders {
    @import "@/scss/base/mixins.scss";
    // height: 90%;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    gap: 20px;
}
</style>