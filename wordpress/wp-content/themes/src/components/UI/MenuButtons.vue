<template>
    <div class="buttons">
        <div class="button button_check-box buttons_button" 
        @click="onClick(item)"
        :class="{'button_check-box--active': deepEqual(chosenItem, item)}"
        v-for="item in items">{{ item.label }}</div>
    </div>
</template>

<script setup lang="ts">
import { MenuButtonItem } from '@/types/App';
import deepEqual from 'deep-equal';
import { toRefs } from 'vue';

interface Props {
    chosenItem: MenuButtonItem;
    items: Array<MenuButtonItem>;
}
interface Emits {
    (e: 'update:chosenItem', item: MenuButtonItem): void
}
const props = defineProps<Props>()

const { items, chosenItem } = toRefs(props)

const emit = defineEmits<Emits>()

const onClick = (item: MenuButtonItem) => {
    emit('update:chosenItem', item)
}
</script>

<style lang="scss" scoped>
.buttons {
    display: flex;
    flex-direction: column;
    gap: 15px;
    background-color: #0C0C0C;
    padding: 25px 40px;
    border-radius: 5px;

    &_button {
        width: 100%;
    }
}
</style>