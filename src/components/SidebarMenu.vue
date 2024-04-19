<template>
  <div class="col-auto col-md-4 col-lg-3 min-vh-100 bg-white h-100 overflow-hidden "
    style="border-right: 2px solid #2c3e50;">
    <div class="p-2 h-100 overflow-hidden ">
      <div
        class="d-flex flex-column text-decoration-none mt-1 align-items-center justify-content-center text-white border-bottom p-3">
        <span class="fs-4 d-none d-sm-inline text-dark font-bold">
          {{ pokemonList.count }} Pokémons
          <img src="/pokemon-icon.ico" alt="">
        </span>

        <label hidden for="searchPokemonField" class="form-label">Search Pokémon</label>
        <input type="text" id="searchPokemonField" placeholder="Search Pokemon"
          class="form-control w-100 mt-2 bg-black/50 text-dark placeholder-secondary/50 font-bold"
          v-model="searchPokemonField" />
      </div>

      <div class="overflow-y-scroll h-100">
        <ul class="nav nav-pills d-flex flex-column mt-4">
          <list-pokemon :pokemonsFiltered="pokemonsFiltered" />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { usePokemonData } from '@/lib/pokemonAPI'
import { onMounted, reactive, ref, computed } from 'vue'
import ListPokemon from './Sidebar/ListPokemon.vue'

export default {
  name: 'SidebarMenu',
  components: {
    ListPokemon
  },

  setup() {
    let pokemonList = reactive({ count: 0, results: [] })
    let searchPokemonField = ref("")

    onMounted(async () => {
      const { getAllPokemonData } = usePokemonData()

      const data = await getAllPokemonData()

      pokemonList.count = data.count
      pokemonList.results = data.results

    })

    const pokemonsFiltered = computed(() => {
      return pokemonList.results.filter(pokemon => pokemon.name.toLowerCase().includes(searchPokemonField.value.toLocaleLowerCase()))
    })

    return { pokemonList, searchPokemonField, pokemonsFiltered }
  }

}
</script>

<style scoped></style>
