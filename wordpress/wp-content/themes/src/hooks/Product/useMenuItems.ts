import { Ref, computed, ref } from 'vue';
import { MenuButtonItem } from '@/types/App';

export const useMenuItems = () => {

    const menuItems = <Ref<Array<MenuButtonItem>>>ref([
        {
            label: 'Характеристики',
            value: 'specs'
        },
        {
            label: 'Отзывы',
            value: 'reviews'
        },
        {
            label: 'ФПС в играх',
            value: 'stats'
        }
    ])

    const chosenMenuItem: Ref<MenuButtonItem> = ref({
        label: 'Характеристики',
        value: 'specs'
    },)



    return {
        menuItems,
        chosenMenuItem
    }
}