import Swiper from 'swiper';
import 'swiper/css';
import { SwiperOptions } from 'swiper/types/swiper-options';
import { Ref, ref } from 'vue';

export const useSwiper = (config: SwiperOptions) => {

    let swiper: Ref<Swiper | null> = ref(null)

    const swiperContainer: Ref<HTMLElement | null> = ref(null)

    const initializeSwiper = () => {
        swiper.value = new Swiper(swiperContainer.value, {
            slidesPerView: 'auto',
            spaceBetween: 30,
            ...config
        });
    }

    const swiperPrev = () => {
        swiper.value.slidePrev();
    }
    const swiperNext = () => {
        swiper.value.slideNext();
    }

    return {
        swiper,
        swiperContainer,
        initializeSwiper,
        swiperPrev,
        swiperNext
    }

}