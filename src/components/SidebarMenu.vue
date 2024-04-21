<template>
  <div class="col-auto col-md-4 col-lg-3 min-vh-100 bg-white h-100 overflow-hidden "
    style="border-right: 2px solid #2c3e50;">

    <language-selector @setLocale="setLocale" />

    <div class="p-2 h-100 overflow-hidden ">
      <div
        class="d-flex flex-column text-decoration-none mt-1 align-items-center justify-content-center text-white border-bottom p-3">
        <span class="fs-4 d-none d-sm-inline text-dark font-bold">
          {{ pokemonList.count }} Pokémons
          <img src="/pokemon-icon.ico" alt="">
        </span>

        <pokemon-filter :pokemonTypes="pokemonTypes" v-model="filterType" />

        <label hidden for="searchPokemonField" class="form-label">{{ $t('input.search') }}</label>
        <input type="text" id="searchPokemonField" :placeholder="$t('input.search')"
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
import LanguageSelector from './Sidebar/LanguageSelector.vue'
import PokemonFilter from './Sidebar/PokemonFilter.vue'

export default {
  name: 'SidebarMenu',
  components: {
    ListPokemon,
    LanguageSelector,
    PokemonFilter,
  },

  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale
      this.$store.commit('setLanguage', locale)
    },
  },

  setup() {
    let pokemonList = reactive({ count: 0, results: [] })
    let searchPokemonField = ref("")
    let filterType = ref("#")
    let pokemonTypes = reactive([])

    onMounted(async () => {
      const { getAllPokemonData, getPokemonTypes } = usePokemonData()

      const data = await getAllPokemonData()
      const types = await getPokemonTypes('/type')

      pokemonList.count = data.count
      pokemonList.results = data.results

      pokemonTypes.push(...types.results)

    })

    const pokemonsFiltered = computed(() => {
      let filtered = pokemonList.results

      if (filterType.value === "id") {
        filtered = filtered.filter(pokemon => {
          const id = pokemon.url.split("/").slice(-2, -1)[0]
          return id == searchPokemonField.value
        })

      } else if (filterType.value === "type") {
        filtered = filtered.filter(pokemon => pokemon.type === searchPokemonField.value)

      } else if (filterType.value === "species") {
        filtered = filtered.filter(pokemon => pokemon.species === searchPokemonField.value)

      } else {
        filtered = filtered.filter(pokemon => pokemon.name.toLowerCase().includes(searchPokemonField.value))

      }
      return filtered
    })

    return { pokemonList, searchPokemonField, pokemonsFiltered, filterType, pokemonTypes }
  }

}
</script>
