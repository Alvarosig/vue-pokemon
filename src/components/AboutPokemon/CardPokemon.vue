<template>
  <div class="card z-0" style="width: 18rem;">
    <div class="d-flex justify-content-center align-items-center">
      <div class="pokemon-background size">
        <img class="card-img-top img-fluid p-4" style="height: 200px" :src="pokemon.sprites.other.dream_world.front_default" :alt="pokemon.name">
      </div>
    </div>
    <div class="card-body pt-0">
      <h5 class="card-title font-bold text-capitalize text-center">{{ pokemon.name }}</h5>
      <p class="card-text mb-1 text-center">{{ pokemon.id }}</p>
      <div class="d-flex gap-3 align-items-center justify-content-center">
        <span :class="['py-1 px-3 rounded small text-white text-capitalize', category.type.name]"
          v-for="category in pokemon.types" :key="category.type.name">
          {{ category.type.name }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardPokemon',
  props: ['pokemon'],

}
</script>

<style scoped>
img {
  padding: 0.5rem;
}

.size {
  width: 220px;
  height: 220px;
}

.normal {
  background-color: #a6a877;
}

.grass {
  background-color: #77c850;
}

.fire {
  background-color: #ee7f30;
}

.water {
  background-color: #678fee;
}

.electric {
  background-color: #f7cf2e;
}

.ice {
  background-color: #98d5d7;
}

.ground {
  background-color: #dfbf69;
}

.flying {
  background-color: #a98ff0;
}

.poison {
  background-color: #a640a0;
}

.fighting {
  background-color: #bf3029;
}

.psychic {
  background-color: #f65687;
}

.dark {
  background-color: #025847;
}

.rock {
  background-color: #b8a137;
}

.bug {
  background-color: #a8b720;
}

.ghost {
  background-color: #6e5896;
}

.steel {
  background-color: #b9b7cf;
}

.dragon {
  background-color: #6f38f6;
}

.fairy {
  background-color: #f9aec7;
}
</style>