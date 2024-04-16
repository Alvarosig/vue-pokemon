<template>
  <li class="nav-item" v-for="pokemon in pokemonList" :key="pokemon.name">
    <a href="#" class="nav-link d-flex text-dark gap-3 border-bottom">
      <img
        :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.url.split('/')[6]}.svg`"
        alt="" class="img-fluid">
      <div class="d-flex flex-1 flex-column text-start gap-1">
        <span class="small text-secondary">{{ pokemon.url.split('/')[6] }}</span>
        <span class="fs-5 font-bold text-dark text-capitalize">{{ pokemon.name }}</span>
        <div class="d-flex gap-1">
          <span class="py-1 px-2 rounded bg-secondary small text-white">Normal</span>
        </div>
      </div>
    </a>
  </li>
</template>

<script>
export default {
  name: 'ListPokemon',
  props: ['pokemonList'],

}
</script>

<style scoped>
img {
  width: 96px;
  height: 96px;
}
</style>