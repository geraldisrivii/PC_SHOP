<template>
    <div class="order">
        <div class="order-panel">
            <div class="order-panel-left">
                <p class="order-panel__code">{{ order.code }}</p>
                <p class="order-panel__status">Статус заказа:
                    <span :style="{ color: colorsOfStatus[order.status] }">
                        {{ translateStatus[order.status] }}
                    </span>
                </p>
                <p class="order-panel__date">{{ order.status == 'completed' ? 'Время завершения' : 'Время создания' }} {{
                    order.status == 'completed' ? order.date_completed_gmt : order.date_created_gmt }}</p>
            </div>
            <div class="order-panel-right">
                <p class="order-panel__total">Сумма заказа: <span>{{ order.total + ' ' + order.currency_symbol }}</span></p>
                <p class="order-panel__address"><span>{{ order.shipping.address_1 }}</span></p>
                <p v-if="order.timezone" class="order-panel__shipping_timezone">{{ `${order.timezone.post_title}
                                    (${order.timezone.cfs.start} - ${order.timezone.cfs.end})` }}</p>
            </div>
        </div>
        <div class="order-items">
            <OrderItem v-for="basketItem in order.line_items" :basketItem="basketItem" :key="basketItem.product.id" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { IOrder } from '@/types/Basket';
import OrderItem from './OrderItem.vue';

const colorsOfStatus = {
    pending: 'orange',
    completed: 'green',
    cancelled: 'red'
}

const translateStatus = {
    pending: 'В ожидании оплаты',
    completed: 'Завершен',
    cancelled: 'Отменен'
}


interface Props {
    order: IOrder
}

const { order } = defineProps<Props>()

</script>

<style lang="scss" scoped>
@import '@/scss/base/mixins.scss';
@import '@/scss/base/typography.scss';
.order {}

.order-panel {
    padding: 15px 20px;
    background-color: rgb(24, 24, 24);
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    @include table{
        flex-direction: column;
    }

    font-weight: 300;
    color: rgb(214, 214, 214);
    border-radius: 5px 5px 0px 0px;

    &__date {}

    &__code {
        color: white;
        font-weight: 500;
        font-size: 20px;
    }

    &__status {
        span {
            color: white;
            font-weight: 500;
        }
    }

    &__total {
        span {
            color: white;
            font-weight: 500;
        }
    }

    &__address {
        span {
            font-weight: 400;
            color: white;
        }
    }

    &__shipping {
        &_timezone {}
    }
}

.order-panel-left {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.order-panel-right {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.order-items {
    display: flex;
    flex-direction: column;
    gap: 5px;

    div {
        &:last-child {
            border-radius: 0px 0px 5px 5px;
        }
    }
}
</style>