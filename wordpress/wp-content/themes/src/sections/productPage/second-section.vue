<template>
    <div class="second-section container">
        <div class="second-section-grid">
            <div>
                <div class="second-section-description">
                    <p class="second-section__title title title_secondary">{{ chosenMenuItem.label }}</p>
                    <button @click="addReview" v-if="chosenMenuItem.value === 'reviews'"
                        class="second-section__button button">Добавить
                        отзыв</button>
                </div>
                <div v-if="chosenMenuItem.value === 'specs'" class="second-section-specs">
                    <Spec v-for="child in product.grouped_products"
                        :specLabel="child.categories.find(c => c.slug != 'specs')?.name + ': '" :spec="child"
                        :specValue="child.name" />
                </div>
                <div v-if="chosenMenuItem.value === 'reviews'" class="second-section-reviews">
                    <p v-if="reviews.length == 0">Отзывы отсуствуют, будь первым !</p>
                    <ProductReview v-for="review in reviews" :key="review.id" :title="review.title" :text="review.review"
                        :images="review.images" :average_rating="review.rating" />
                </div>
            </div>
            <MenuButtons :items="menuItems" v-model:chosenItem="chosenMenuItem" />
        </div>
    </div>
    <AddReviewDialog :product-id="product.id" v-model:is-add-review-dialog-show="isAddReviewDialogShow" />
</template>

<script setup lang="ts">
import ProductReview from '@/components/ProductReview.vue';
import Spec from '@/components/Spec.vue';
import MenuButtons from '@/components/UI/MenuButtons.vue';
import { MenuButtonItem } from '@/types/App';
import { IGrouppedProduct, IProductReview } from '@/types/Product';
import { Ref, onMounted, ref } from 'vue';
import WP from '@/axiosWP'
import WOO from '@/axiosWoocomerce'
import AddReviewDialog from '@/components/AddReviewDialog.vue';

interface Props {
    product: IGrouppedProduct;
}
const { product } = defineProps<Props>();

const menuItems = <Ref<Array<MenuButtonItem>>>ref([
    {
        label: 'Характеристики',
        value: 'specs'
    },
    {
        label: 'Отзывы',
        value: 'reviews'
    }
])

const chosenMenuItem: Ref<MenuButtonItem> = ref({
    label: 'Характеристики',
    value: 'specs'
},)

const reviews: Ref<Array<IProductReview>> = ref([])

const isAddReviewDialogShow: Ref<boolean> = ref(true)

const getProductReviews = async () => {
    reviews.value = (await WOO.get('products/reviews', {
        params: {
            product: product.id
        }
    })).data
}

const addReview = (event) => {
    isAddReviewDialogShow.value = true
}

onMounted(async () => {
    await getProductReviews()
})


</script>

<style lang="scss" scoped>
@import '@/scss/base/mixins.scss';
@import '@/scss/base/typography.scss';

.second-section-description {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

.second-section {
    padding-top: 65px;
    padding-bottom: 65px;

    &__title {
        margin-bottom: 25px;
    }
}

.second-section-grid {
    display: grid;
    grid-template-columns: 6fr 3fr;
    align-items: flex-start;
    gap: 30px;
}

.second-section-specs {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
}

.second-section-reviews {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    height: 400px;
    overflow-y: scroll;
}
</style>