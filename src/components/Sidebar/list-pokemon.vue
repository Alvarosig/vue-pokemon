<template>
  <li class="nav-item">
    <a href="#" class="nav-link d-flex text-dark gap-2 border-bottom">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt=""
        class="img-fluid">
      <div class="d-flex flex-1 flex-column text-start gap-1">
        <span class="small text-secondary">889</span>
        <span class="fs-5 font-weight-bold text-dark">Bulbasaur</span>
        <div class="d-flex gap-1">
          <span class="py-1 px-2 rounded bg-secondary small text-white">Normal</span>
          <span class="py-1 px-2 rounded bg-secondary small text-white">Normal</span>
        </div>
      </div>
    </a>
  </li>
</template>

<script>
export default {
  name: 'ListPokemon',
}
</script>

<style scoped></style>