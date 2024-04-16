<template>
  <div class="card" style="width: 18rem;">
      <div class="d-flex justify-content-center align-items-center">
        <img class="card-img-top img-fluid"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="Card image cap">
      </div>
      <div class="card-body pt-0">
        <h5 class="card-title">Bulbasaur</h5>
        <p class="card-text mb-1">889</p>
        <div class="d-flex gap-3 align-items-center justify-content-center">
          <span class="py-1 px-3 rounded bg-secondary small text-white">Normal</span>
          <span class="py-1 px-3 rounded bg-secondary small text-white">Normal</span>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'CardPokemon',
}
</script>

<style scoped>
</style>