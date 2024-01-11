<template>
    <div class="order-dialog-box">
        <my-dialog :isDialogShow="isOrderDialogShow" @update:isDialogShow="emit('update:isOrderDialogShow', $event)">
            <form @submit.prevent="onSubmit" class="order-dialog-form">
                <p class="order-dialog-form__title title">Данные заказа</p>
                <div class="order-dialog-form__inputs">
                    <MySelect :placeholder="'Введите имя'" :options="names" v-model:choosenOptions="choosenNames"
                        :labelName="'label'" :valueName="'value'" :isSearchable="true" v-model:search-value="serchOfNames"
                        :search-type="'no-search'" />
                    <MySelect :placeholder="'Выберете регион'" :options="regions" v-model:choosenOptions="choosenRegions"
                        :labelName="'label'" :valueName="'value'" :isSearchable="true"
                        v-model:search-value="regionsSearchValue" :search-type="'no-search'" />
                    <MySelect :placeholder="'Уточните адрес'" :options="addreses" v-model:choosenOptions="choosenAddress"
                        :labelName="'label'" :valueName="'value'" :isSearchable="true"
                        v-model:search-value="addresesSearchValue" :search-type="'no-search'" />
                    <MySelect v-if="isDataLoaded" :placeholder="'Выберите время доставки'" :options="shipingSelectValues"
                        v-model:choosenOptions="choosenShipingSelectValue" :labelName="'label'" :valueName="'value'" />
                    <textarea class="order-dialog-form__textarea text-area"
                        placeholder="Можете оставить комментарий к заказу"></textarea>
                </div>
                <button class="button order-dialog-form__button">
                    Перейти к оплате
                </button>
            </form>
        </my-dialog>
    </div>
</template>

<script setup lang="ts">

import { useAppSettings } from '@/hooks/App/useAppSettings';
import { useVuex } from '@/store/useVuex';
import { Status } from '@/types/components/statusDialog';
import { Ref, computed, onBeforeMount, ref, watch } from 'vue';
import MySelect from './MySelect.vue';
import axios, { AxiosRequestConfig } from 'axios';
import { DadataResponse, DadataResponseFio } from '@/types/ThirdPartyApi';
import { useSuggestionsOfRegions } from '@/hooks/Cart/useSuggestionsOfRegions';
import { useSugguestionsOfAddress } from '@/hooks/Cart/useSuggestionsOfAddress';
import WP from '@/axiosWP'
import { ShippingTime } from '@/types/Basket';
import { useSuggestionsOfName } from '@/hooks/Cart/useSuggestionsOfName';
import { RequestData } from '@/types/components/cartDialog';
import { useStoreUser } from '@/hooks/User/useStoreUser';

interface Props {
    isOrderDialogShow: boolean
}

const { isOrderDialogShow } = defineProps<Props>()

interface Emits {
    (e: 'update:isOrderDialogShow', status: boolean): void
    (e: 'pay', data: RequestData): void
}

const emit = defineEmits<Emits>()

const store = useVuex();

const { app } = useAppSettings(store)

const { regions, regionsSearchValue, choosenRegions } = useSuggestionsOfRegions()

const { addreses, addresesSearchValue, choosenAddress } = useSugguestionsOfAddress(choosenRegions, 'value')

const shippingTimes: Ref<ShippingTime[]> = ref([])

const shipingSelectValues = computed(() => {
    return shippingTimes.value.map(item => {
        return {
            value: item.id,
            label: `${item.title.rendered} (${item.cfs.start} - ${item.cfs.end})`
        }
    })
})

const choosenShipingSelectValue = ref([])

const isDataLoaded = ref(false)


const getShippingTime = async () => {
    shippingTimes.value = (await WP.get('shipping_times')).data
}

const { names, choosenNames, serchOfNames } = useSuggestionsOfName()


onBeforeMount(async () => {
    await getShippingTime()

    isDataLoaded.value = true
})

const { user } = useStoreUser(store)


const onSubmit = () => {
    emit('pay', {
        first_name: choosenNames.value[0].label,
        email: user.value.data.user_email,
        address: choosenAddress.value[0].label,
        shipping_timezone_id: choosenShipingSelectValue.value[0].value
    })
}


</script>

<style lang="scss" scoped>
@import '@/scss/base/mixins.scss';
@import '@/scss/base/typography.scss';


.order-dialog {
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    justify-content: center;

    padding: 18px 23px;

    &__image {
        width: 100px;
        height: 100px;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    &__title {
        text-align: center;
    }

    &__text {
        text-align: center;
    }
}

.order-dialog-form {
    display: flex;
    flex-direction: column;
    padding: 15px 20px;

    &__inputs {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-bottom: 30px;
    }

    &__title {
        text-align: center;
        margin-bottom: 30px;
    }

    &__textarea {
        background-color: #242424;
        color: white;
        border: none;

        &::placeholder {
            color: white;
        }
    }
}
</style>