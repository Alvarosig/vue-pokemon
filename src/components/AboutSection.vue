<template>
  <div class="d-flex flex-column justify-content-center text-center align-items-center gap-4 mt-5" @click="selectPokemon(pokemon)">
    <card-pokemon :pokemon="pokemon" />

    <div class="d-flex justify-content-center gap-4 align-items-start mx-3 w-100">
      <div class="d-flex flex-column gap-4">
        <abilities-pokemon :abilities="pokemon.abilities"/>
        <evolution-pokemon />
      </div>

      <stats-pokemon :stats="pokemon.stats" />

    </div>
  </div>
</template>

<script>
import CardPokemon from './AboutPokemon/CardPokemon.vue'
import StatsPokemon from './AboutPokemon/StatsPokemon.vue'
import AbilitiesPokemon from './AboutPokemon/AbilitiesPokemon.vue'
import EvolutionPokemon from './AboutPokemon/EvolutionPokemon.vue'
import { onMounted, reactive } from 'vue'
import { usePokemonData } from '@/lib/pokemonAPI'

export default {
  name: 'AboutSection',
  components: {
    CardPokemon,
    StatsPokemon,
    AbilitiesPokemon,
    EvolutionPokemon,
  },

  setup() {
    let pokemon = reactive({
      name: '',
      stats: [],
      types: [],
      abilities: [],
      img: '',
      order: 0
    })
    
    onMounted(async () => {
      const { getPokemonData } = usePokemonData()
      const id = pokemon.url.split('/')[6]

      const pokemonData = await getPokemonData(id)

      pokemon.name = pokemonData.name
      pokemon.stats = pokemonData.stats
      pokemon.types = pokemonData.types
      pokemon.abilities = pokemonData.abilities
      pokemon.img = pokemonData.sprites.other.dream_world.front_default
      pokemon.id = pokemonData.id

    })

    return { pokemon }

  }
}
</script>

<style scoped>
.stats {
  width: 320px;
}
</style>
