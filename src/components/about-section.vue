<template>
  <div class="d-flex flex-column justify-content-center text-center align-items-center gap-4 mt-5">
    <card-pokemon />

    <div class="d-flex justify-content-center gap-4 align-items-start mx-3 w-100">
      <abilities-pokemon />

      <stats-pokemon />

      <div class="p-3 bg-white d-flex flex-column border rounded">
        <div class="d-flex gap-1 border-bottom">
          <Dna class="text-warning" size="24" />
          <h3 class="text-dark font-weight-bold fs-5">Evolutions</h3>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import CardPokemon from './AboutPokemon/card-pokemon.vue'
import StatsPokemon from './AboutPokemon/stats-pokemon.vue'
import AbilitiesPokemon from './AboutPokemon/abilities-pokemon.vue'
import { Dna } from 'lucide-vue-next'

export default {
  name: 'AboutSection',
  components: {
    CardPokemon,
    StatsPokemon,
    AbilitiesPokemon,
    Dna
  }
}
</script>

<style scoped>
.stats {
  width: 320px;
}
</style>
