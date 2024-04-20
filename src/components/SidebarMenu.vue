<template>
  <div class="col-auto col-md-4 col-lg-3 min-vh-100 bg-white h-100 overflow-hidden "
    style="border-right: 2px solid #2c3e50;">
    <div class="d-flex justify-content-end gap-2 flags p-2">
      <span @click="setLocale('pt_BR')">🇧🇷</span>
      <span @click="setLocale('en')">🇺🇸</span>
      <span @click="setLocale('es')">🇪🇸</span>
    </div>
    <div class="p-2 h-100 overflow-hidden ">
      <div
        class="d-flex flex-column text-decoration-none mt-1 align-items-center justify-content-center text-white border-bottom p-3">
        <span class="fs-4 d-none d-sm-inline text-dark font-bold">
          {{ pokemonList.count }} Pokémons
          <img src="/pokemon-icon.ico" alt="">
        </span>

        <label hidden for="searchPokemonField" class="form-label">{{ $t('input.search')}}</label>
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

export default {
  name: 'SidebarMenu',
  components: {
    ListPokemon
  },

  methods: {
    setLocale(locale){
      this.$i18n.locale = locale
      this.$store.commit('setLanguage', locale)
    }
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

<style scoped>
@font-face {
  font-family: NotoColorEmojiLimited;
  unicode-range: U+1F1E6-1F1FF;
  src: url(https://raw.githack.com/googlefonts/noto-emoji/main/fonts/NotoColorEmoji.ttf);
}

.flags {
  font-family: 'NotoColorEmojiLimited', -apple-system, BlinkMacSystemFont, 
  'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 
  'Segoe UI Emoji', 'Segoe UI Symbol';
}

.flags span {
  cursor: pointer;
}

.flags span:hover {
  transform: scale(1.1);
}
</style>
