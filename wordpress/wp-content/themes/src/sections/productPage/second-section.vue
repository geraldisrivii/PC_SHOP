<template>
    <div class="second-section container">
        <div class="second-section-grid">
            <div class="second-section-grid-left">
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
                <div v-if="chosenMenuItem.value === 'stats' && isDataLoaded" class="stats-box">
                    <div class="stats-box-graphs">
                        <StatsGraph v-for="game in games" :values="game.game_statistic" :name="game.game_name" />
                    </div>
                    <div class="stats-box-assigns">
                        <StatsAssign v-for="resolution in resolutions" :key="resolution.id" :color="resolution.cfs.color"
                            :title="resolution.cfs.resolution" />
                    </div>
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
import { Ref, computed, onMounted, ref } from 'vue';
import AddReviewDialog from '@/components/AddReviewDialog.vue';
import StatsGraph from '@/components/StatsGraph.vue';
import StatsAssign from '@/components/StatsAssign.vue';
import { useResolutions } from '@/hooks/Product/useResolutions';
import { useGames } from '@/hooks/Product/useGames';
import { useCurrentProduct } from '@/hooks/Product/useCurrentProduct';
import { useMenuItems } from '@/hooks/Product/useMenuItems';
import { useProductReviews } from '@/hooks/Product/useProductReviews';

const { product } = useCurrentProduct()

const { resolutions, onMountedAction } = useResolutions();

const { games } = useGames(product, resolutions);

const { menuItems, chosenMenuItem } = useMenuItems()

const isAddReviewDialogShow: Ref<boolean> = ref(false)

const {reviews, onMountedAction: getProductReviews} = useProductReviews(product)

const addReview = (event) => {
    isAddReviewDialogShow.value = true
}

const isDataLoaded = ref(false)

onMounted(async () => {
    await getProductReviews()

    await onMountedAction();

    isDataLoaded.value = true
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

    @include table {
        grid-template-columns: 1fr;
    }
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

.stats-box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    align-items: center;
    height: 450px;
    padding: 20px 40px;
    width: 100%;
    overflow-x: hidden;
    background-color: #0C0C0C;
}

.stats-box-graphs {
    height: 100%;
    gap: 40px;
    display: flex;
    justify-content: center;
    // align-items: self-start;
    width: 100%;
    flex-wrap: wrap;
    overflow-y: scroll;
}

.stats-box-assigns {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 30px;
}

.second-section-grid-left {
    width: auto;
}
</style>