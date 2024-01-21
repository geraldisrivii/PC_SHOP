import { Ref, computed, ref } from 'vue';
import { MenuButtonItem } from '@/types/App';

export const useOrderMenuItems = () => {

    const menuItems = <Ref<Array<MenuButtonItem>>>ref([
        {
            label: 'Заказы',
            value: 'orders'
        },
        {
            label: 'Настройки',
            value: 'settings'
        },
    ])

    const chosenMenuItem: Ref<MenuButtonItem> = ref({
        label: 'Заказы',
        value: 'orders'
    })

    return {
        menuItems,
        chosenMenuItem
    }
}