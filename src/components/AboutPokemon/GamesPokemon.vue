<template>
  <div class="p-3 bg-white d-flex flex-column border rounded mb-5" style="max-width: 500px;">
    <div class="d-flex gap-1 border-bottom">
      <Joystick fill="#ffc107" class="text-black" />
      <h3 class="text-dark font-bold fs-5">
        Games Indices on Pokédex
      </h3>
    </div>

    <div class="d-flex flex-column gap-1 align-items-start mt-2">
      <div v-for="(games, index) in gameIndices" :key="index" class="d-flex flex-column gap-1 align-items-start">
        <span class="text-nowrap text-start"><strong>Game Index:</strong> {{ index }}</span>
        <span class="text-capitalize text-start"><strong>Version:</strong> {{ games.join(', ') }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { Joystick } from 'lucide-vue-next'
import { computed } from 'vue';

export default {
  name: 'GamesPokemon',
  props: ['games'],
  components: {
    Joystick
  },

  setup(props) {

    const gameIndices = computed(() => {
      const index = {}

      props.games.forEach(game => {
        if (!index[game.game_index]) {
          index[game.game_index] = []
        }

        index[game.game_index].push(game.version.name)
      })

      return index
    })

    return { gameIndices }
  }
}
</script>