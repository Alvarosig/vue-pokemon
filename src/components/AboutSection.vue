<template>
  <div class="d-flex flex-column gap-4 align-items-center p-5 h-100 " v-if="selectedPokemon">
    <card-pokemon :pokemon="selectedPokemon" />

    <div class="d-flex justify-content-center gap-4 align-items-start mx-3 w-100">
      <div class="d-flex flex-column gap-4">
        <abilities-pokemon :abilities="selectedPokemon.abilities" />
        <evolution-pokemon />
      </div>

      <stats-pokemon :stats="selectedPokemon.stats" />

    </div>
  </div>
</template>

<script>
import CardPokemon from './AboutPokemon/CardPokemon.vue'
import StatsPokemon from './AboutPokemon/StatsPokemon.vue'
import AbilitiesPokemon from './AboutPokemon/AbilitiesPokemon.vue'
import EvolutionPokemon from './AboutPokemon/EvolutionPokemon.vue'
import { watch } from 'vue'
import { mapState } from 'vuex'
import { useStore } from 'vuex'

export default {
  name: 'AboutSection',
  components: {
    CardPokemon,
    StatsPokemon,
    AbilitiesPokemon,
    EvolutionPokemon,
  },

  computed: {
    ...mapState(['selectedPokemon']),
  },

  setup() {
    const store = useStore()

    watch(() => store.state.selectedPokemon, (newVal) => {
      console.log(JSON.parse(JSON.stringify(newVal)))
    })

  }
}
</script>

<style scoped>
.stats {
  width: 320px;
}
</style>
