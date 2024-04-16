<template>
  <div class="col-auto col-md-4 col-lg-3 min-vh-100 bg-white" style="border-right: 2px solid #2c3e50;">
    <div class="p-2">
      <div
        class="d-flex flex-column text-decoration-none mt-1 align-items-center justify-content-center text-white border-bottom p-3">
        <span class="fs-4 d-none d-sm-inline text-dark">1280 Pokémon</span>

        <input type="text" placeholder="Search Pokemon"
          class="form-control w-100 mt-2 bg-black/50 text-dark placeholder-secondary/50" />
      </div>

      <ul class="nav nav-pills flex-column mt-4">
        <list-pokemon />

        <li class="nav-item">
          <a href="#" class="nav-link d-flex text-dark gap-2 border-bottom">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" alt=""
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

        <li class="nav-item">
          <a href="#" class="nav-link d-flex text-dark gap-2 border-bottom">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" alt=""
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
      </ul>
    </div>
  </div>
</template>

<script>
import ListPokemon from './Sidebar/list-pokemon.vue'

export default {
  name: 'SidebarMenu',
  components: {
    ListPokemon
  }
}
</script>

<style scoped>

</style>

/*
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
*/