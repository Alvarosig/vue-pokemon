<template>
  <div class="p-3 bg-white d-flex flex-column border rounded">
    <div class="d-flex gap-1 border-bottom">
      <Dna class="text-warning" size="24" />
      <h3 class="text-dark font-bold fs-5">{{ $t('pokemon.evolution') }}</h3>
    </div>

    <div class="d-flex gap-3 align-items-center justify-content-center ">
      <div class="d-flex flex-column gap-1">
        <div class="pokemon-background">
          <img :src="pokemon.sprites.front_default" :alt="pokemon.name" style="height: 100px; width: 100px;">
        </div>
        <span class="text-capitalize text-center font-bold">{{ pokemon.name }}</span>
      </div>
      <ArrowRight class="text-secondary" size="24" />
      <div class="d-flex flex-column gap-1" v-if="evolution">
        <div class="pokemon-background">
          <img :src="evolution.image" :alt="evolution.name" style="height: 100px; width: 100px;">
        </div>
        <span class="text-capitalize text-center font-bold">{{ evolution.name }}</span>
      </div>
      <div v-else>
        <span class="text-capitalize text-center font-bold">No evolution</span>
      </div>
    </div>
  </div>
</template>

<script>
import { Dna } from 'lucide-vue-next'
import { ArrowRight } from 'lucide-vue-next'
import { onMounted, ref, watch } from 'vue'
import { api } from '../../lib/axios'

export default {
  name: 'EvolutionPokemon',
  components: {
    Dna,
    ArrowRight
  },

  props: ['pokemon'],

  setup(props) {
    const evolution = ref(null)

    const findEvolution = (evolutionData, pokemonName) => {
      if (evolutionData.species.name === pokemonName && evolutionData.evolves_to.length > 0) {
        return evolutionData.evolves_to[0]
      }

      for (let i = 0; i < evolutionData.evolves_to.length; i++) {
        const result = findEvolution(evolutionData.evolves_to[i], pokemonName)
        if (result) return result
      }

      return null
    }

    const fetchEvolution = async () => {
      try {
        const speciesResponse = await api.get(props.pokemon.species.url)
        const evolutionChainResponse = await api.get(speciesResponse.data.evolution_chain.url)
        const evolutionData = findEvolution(evolutionChainResponse.data.chain, props.pokemon.name)

        if (evolutionData) {
          const evolutionResponse = await api.get(`/pokemon/${evolutionData.species.name}`)

          evolution.value = {
            name: evolutionData.species.name,
            image: evolutionResponse.data.sprites.front_default
          }
        } else {
          evolution.value = null
        }
      } catch (error) {
        console.error(error)
      }
    }

    onMounted(fetchEvolution)
    watch(() => props.pokemon, fetchEvolution)

    return { evolution }
  }
}

</script>

<style scoped>
img {
  width: 100;
  height: 100;
}
</style>