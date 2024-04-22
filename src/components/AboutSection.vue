<template>
  <div class="d-flex flex-column gap-4 align-items-center p-2 p-sm-5 h-100 overflow-y-auto " v-if="selectedPokemon">
    <card-pokemon :pokemon="selectedPokemon" />

      <div class="d-flex flex-column flex-md-row justify-content-md-center gap-4 align-items-center align-items-md-start w-100 flex-fill">
        <abilities-pokemon :abilities="selectedPokemon.abilities" />
        <games-pokemon :games="selectedPokemon.game_indices" />
      </div>

      <div class="d-flex flex-column gap-4 flex-md-row justify-content-md-center gap-4 align-items-center align-items-md-start w-100 flex-fill">
        <stats-pokemon :stats="selectedPokemon.stats" />
        <evolution-pokemon :pokemon="selectedPokemon" />
      </div>
  </div>
</template>

<script>
import CardPokemon from './AboutPokemon/CardPokemon.vue'
import StatsPokemon from './AboutPokemon/StatsPokemon.vue'
import AbilitiesPokemon from './AboutPokemon/AbilitiesPokemon.vue'
import EvolutionPokemon from './AboutPokemon/EvolutionPokemon.vue'
import GamesPokemon from './AboutPokemon/GamesPokemon.vue'
import { mapState } from 'vuex'

export default {
  name: 'AboutSection',
  components: {
    CardPokemon,
    StatsPokemon,
    AbilitiesPokemon,
    EvolutionPokemon,
    GamesPokemon,
  },

  computed: {
    ...mapState(['selectedPokemon']),
  },

}
</script>

<style scoped>
.stats {
  width: 320px;
}

</style>
