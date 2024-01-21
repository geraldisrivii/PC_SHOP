import { Ref, computed, ref } from 'vue';
import { Resolutions, StatsGraphValues } from '@/types/Stats';
import WP from '@/axiosWP'
import { Game, IProduct } from '@/types/Product';

export const useGames = (product: Ref<IProduct>, resolutions: Ref<Resolutions[]>) => {

    const games = computed(() => {
        product.value.cfs.statistic_games.map((game: Game) => {

            let editedGameStatistic = game.game_statistic.map((statistic) => {
                const resolution = resolutions.value.find(resolution => resolution.id == statistic.resolution[0])

                statistic.value = Number(statistic.fps)
                statistic.color = resolution.cfs.color;
            })

            return {
                game_name: game.game_name,
                game_statistic: editedGameStatistic
            }
        })
        return product.value.cfs.statistic_games as Array<Game & StatsGraphValues>
    })


    return {
        games
    }
}