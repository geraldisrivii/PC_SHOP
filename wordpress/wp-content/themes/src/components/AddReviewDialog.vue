<template>
    <div class="add-review">
        <my-dialog :isDialogShow="isAddReviewDialogShow" @update:isDialogShow="onUpdate">
            <form @submit.prevent="onSubmit" class="add-review-form">
                <p class="title add-review-form__title">Добавление отзыва</p>
                <div class="add-review-form-rate">
                    <img class="add-review-form-rate__image" @mouseover="(event) => mouseEnter(event, value)"
                        v-for="value in 5" :key="value" :src="app['general_in-star-icon']" :alt="(value.toString())">
                </div>
                <input v-model="requestReview.title" class="add-review-form__title-review input" type="text"
                    placeholder="Заголовок" />
                <textarea v-model="requestReview.text" class="add-review-form__text-review text-area"
                    placeholder="Текст коментария"></textarea>
                <div class="add-review-action-box">
                    <FileInput :buttonText="'Загрузить изображения'" :isMultiple="true"
                        v-model:images="requestReview.images" :name="'images'" />
                    <button class="button">Отправить</button>
                </div>

                <div class="add-review-chosen-files">
                    <div v-for="image in requestReview.images" class="add-review-chosen-files-file">
                        <img class="add-review-chosen-files-file__image" :src="image.src" :alt="image.name">
                    </div>
                </div>
            </form>
            <Preloader ref="preloader" />
        </my-dialog>
    </div>
</template>

<script setup lang="ts">

import WOO from '@/axiosWoocomerce'
import { useAppSettings } from '@/hooks/App/useAppSettings';
import store from '@/store';
import { Ref, computed, onMounted, ref } from 'vue';
import FileInput from './FileInput.vue';
import { useStoreUser } from '@/hooks/User/useStoreUser';
import { ApiImage } from '@/types/App';
import { useStatusDialog } from '@/hooks/App/useStatusDialog';
import Preloader from '@/components/Preloader.vue';

const requestReview = ref({
    images: [] as FileList & Array<ApiImage>,
    title: '',
    text: '',
    rating: 0
})

interface Props {
    isAddReviewDialogShow: boolean;
    productId: number;
}

const { isAddReviewDialogShow, productId } = defineProps<Props>()

interface Emits {
    (e: 'update:isAddReviewDialogShow', status: boolean): void;
}

const emit = defineEmits<Emits>()

const { user } = useStoreUser(store)

const { statusDialog } = useStatusDialog(store)

const preloader = ref<InstanceType<typeof Preloader> | null>(null)


const onSubmit = async (event: Event) => {
    
    let formData = new FormData(event.target as HTMLFormElement)

    formData.append('product_id', productId.toString())
    formData.append('reviewer', user.value == null ? 'someone' : user.value.data.user_login)
    formData.append('reviewer_email', user.value == null ? 'someone@example.com' : user.value.data.user_email)
    formData.append('rating', requestReview.value.rating.toString())
    formData.append('title', requestReview.value.title)
    formData.append('review', requestReview.value.text)

    preloader.value.open()

    const response = await WOO.post('products/reviews', formData, {
        validateStatus: function (status) {
            return status < 500;
        }
    })

    preloader.value.close()

    statusDialog.value.open(response.status == 201 ? 'success' : 'error', response.status == 201 ? 'Отзыв был добавлен' : response.data.message, null, 'Закрыть')


    emit('update:isAddReviewDialogShow', false)
}

const onUpdate = (newValue: boolean) => {
    emit('update:isAddReviewDialogShow', newValue)
}

const { app } = useAppSettings(store)

const mouseEnter = (event, index: number) => {
    let children = event.target.parentElement.children

    for (let i = 0; i < index; i++) {
        children[i].src = app.value['general_star-icon']
    }
    requestReview.value.rating = index;

    for (let i = index; i < children.length; i++) {
        children[i].src = app.value['general_in-star-icon']
    }
}



</script>

<style lang="scss" scoped>
@import '@/scss/base/mixins.scss';
@import '@/scss/base/typography.scss';


.add-review {
    position: relative;
}

.add-review-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 15px 0px;

    &__title {}

    &__title-review {}

    &__text-review {
        height: 100px;
    }
}


.add-review-form-rate {
    &__image {
        height: 30px;
        width: 30px;
    }
}

.add-review-chosen-files {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fit, 150px);
    grid-template-rows: repeat(auto-fit, 150px);
    width: 100%;
}

.add-review-chosen-files-file {
    display: flex;
    flex-direction: column;
    width: 100%;

    overflow: hidden;

    &__image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
    }

}

.add-review-action-box {
    display: flex;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
}
</style>