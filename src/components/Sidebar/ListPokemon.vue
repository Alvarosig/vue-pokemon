<template>
  <li class="nav-item bg-hover" v-for="pokemon in pokemonsFiltered" :key="pokemon.name">
    <a href="#" class="nav-link d-flex text-dark gap-3 border-bottom">
      <img
        :src="getPokemonImageUrl(pokemon)"
        alt="" class="img-fluid">
      <div class="d-flex flex-1 flex-column justify-content-center text-start gap-1">
        <span class="small text-secondary">{{ getPokemonIndexUrl(pokemon) }}</span>
        <span class="fs-5 font-bold text-dark text-capitalize">{{ pokemon.name }}</span>
      </div>
    </a>
  </li>
</template>

<script>
export default {
  name: 'ListPokemon',
  props: ['pokemonsFiltered'],

  methods: {
    getPokemonImageUrl(pokemon) {
      const id = pokemon.url.split('/')[6] // url = 'https://pokeapi.co/api/v2/pokemon/1/', extrai o id do pokemon
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
    },

    getPokemonIndexUrl(pokemon) {
      const id = pokemon.url.split('/')[6]
      return id
    },
  }
}
</script>

<style scoped>
img {
  width: 96px;
  height: 96px;
}

img:hover {
  transform: scale(1.1);
}

.bg-hover:hover {
  background-color: #f8f9fa;
}

</style>
