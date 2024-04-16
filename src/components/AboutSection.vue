<template>
  <div class="d-flex flex-column justify-content-center text-center align-items-center gap-4 mt-5">
    <card-pokemon />

    <div class="d-flex justify-content-center gap-4 align-items-start mx-3 w-100">
      <div class="d-flex flex-column gap-4">
        <abilities-pokemon />
        <evolution-pokemon />
      </div>

      <stats-pokemon />

    </div>
  </div>
</template>

<script>
import CardPokemon from './AboutPokemon/CardPokemon.vue'
import StatsPokemon from './AboutPokemon/StatsPokemon.vue'
import AbilitiesPokemon from './AboutPokemon/AbilitiesPokemon.vue'
import EvolutionPokemon from './AboutPokemon/EvolutionPokemon.vue'

export default {
  name: 'AboutSection',
  components: {
    CardPokemon,
    StatsPokemon,
    AbilitiesPokemon,
    EvolutionPokemon,
  }
}
</script>

<style scoped>
.stats {
  width: 320px;
}
</style>
