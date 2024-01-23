<template>
    <my-side-dialog v-model:isDialogShow="isDialogShow">
        <div class="profile-dialog">
            <div class="profile-dialog-orders" v-if="chosenMenuItem.value == 'orders'">
                <Order v-for="order in orders" :key="order.id" :order="order" />
            </div>
            <div class="profile-dialog-settings" v-if="chosenMenuItem.value == 'settings'">
                <div class="profile-dialog-settings-action profile-action-login">
                    <p class="profile-action-login__login">LOGIN: <span>{{ user ? user.data.user_login : '' }}</span></p>
                    <button @click="signOut" class="button">Разлогинится</button>
                </div>
                <div class="profile-dialog-settings-action profile-action-email">
                    <p class="profile-action-email__email">EMAIL: <span>{{ user ? user.data.user_login : '' }}</span></p>
                    <p class="profile-action-email__email-verification-status"
                        :style="{ color: user ? (user.data.is_email_verified ? 'white' : 'red') : 'white' }">{{ user ?
                            (user.data.is_email_verified ?
                                'Подтверждена' : 'Требуется подтверждение') : '' }}</p>
                    <button @click="openCodeDialog" :disabled="user ? user.data.is_email_verified : false"
                        class="button">Подтвердить</button>
                </div>
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
import WP from '@/axiosWP'
import { IOrder } from '@/types/Basket';
import { useStoreUser } from '@/hooks/User/useStoreUser';
import { useVuex } from '@/store/useVuex';
import { useStatusDialog } from '@/hooks/App/useStatusDialog';
import { useCodeDialog } from '@/hooks/App/useCodeDialog';


const { menuItems, chosenMenuItem } = useOrderMenuItems()

const store = useVuex()

const { user } = useStoreUser(store)

const { statusDialog } = useStatusDialog(store)

const orders: Ref<IOrder[]> = ref([])

const getOrders = async () => {
    const response = await WOO.get('orders', user.value ? {
        params: { customer: user.value.ID }
    } : {})

    return response.data;
}

onMounted(async () => {
    if (user) {
        orders.value = await getOrders()
    }
})

const signOut = async () => {
    let response = await WP.delete('users/signout', { withCredentials: true })

    if (response.data.status == true) {
        isDialogShow.value = false
        user.value = null
        statusDialog.value.open('success', 'Вы вышли из аккаунта', null, 'Закрыть')
    } else {
        statusDialog.value.open('error', 'Вероятно ваша сессия истекла', null, 'Закрыть')
    }
}


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

const { codeDialog } = useCodeDialog(store)

const callback = () => {
    user.value.data.is_email_verified = true
}

const openCodeDialog = async () => {
    let mailResponse = await WP.post('mails', {}, {
        withCredentials: true
    })
    if(mailResponse.status == 200){
        codeDialog.value.open(callback)
    }
}
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
    // height: 90%;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.profile-dialog-settings {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.profile-dialog-settings-action {
    background-color: #0C0C0C;
    padding: 17px;
    border-radius: 5px;
}

.profile-action-login {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__login {
        text-transform: uppercase;
        font-weight: 300;

        span {
            font-weight: 500;
        }
    }
}

.profile-action-email {
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__email {}

    &__email-verification-status {}
}
</style>