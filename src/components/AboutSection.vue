<template>
  <div class="d-flex flex-column gap-4 align-items-center p-5 h-100 " v-if="selectedPokemon">
    <card-pokemon :pokemon="selectedPokemon" />

    <div class="d-flex justify-content-center gap-4 align-items-start mx-3 w-100">
      <div class="d-flex flex-column gap-4">
        <abilities-pokemon :abilities="selectedPokemon.abilities" />
        <games-pokemon :games="selectedPokemon.game_indices" />
      </div>

      <div class="d-flex flex-column gap-4">
        <stats-pokemon :stats="selectedPokemon.stats" />
        <evolution-pokemon :pokemon="selectedPokemon" />
      </div>
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
