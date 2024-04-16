<template>
  <div class="d-flex flex-column justify-content-center text-center align-items-center gap-5 mt-5">
    <div class="d-flex flex-column gap-1">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" alt=""
        class="img-fluid">
      <span class="fs-5 text-secondary">889</span>
      <span class="fs-1 font-weight-bold text-dark">Bulbasaur</span>
      <div class="d-flex gap-1 align-items-center justify-content-center">
        <span class="py-1 px-2 rounded bg-secondary small text-white">Normal</span>
        <span class="py-1 px-2 rounded bg-secondary small text-white">Normal</span>
      </div>
    </div>

    <div class="d-flex justify-content-center gap-4 align-items-start mx-3 w-100">
      <div class="p-3 bg-white d-flex flex-column border rounded">
        <div class="d-flex gap-1 align-items-center border-bottom">
          <h3 class="text-dark font-weight-bold fs-5">Abilities and Effects</h3>
        </div>
        <div class="d-flex gap-1 align-items-center mt-2">Dark types are immune to moves affected by the Prankster
          ability</div>
      </div>

      <div class="p-3 bg-white d-flex flex-column border rounded stats">
        <div class="d-flex gap-1 align-items-center">
          <h3 class="text-dark font-weight-bold fs-5 border-bottom">Base Stats</h3>
        </div>
        <div class="d-flex flex-column gap-1 align-items-center mt-2">
          <div class="d-flex gap-1 align-items-center w-100">
            <span class="text-nowrap font-weight-bold">HP: 100</span>
            <div class="progress w-100" style="height: 10px;">
              <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="0" aria-valuemin="0"
                aria-valuemax="100">
              </div>
            </div>
          </div>

          <div class="d-flex gap-1 align-items-center w-100">
            <span class="text-nowrap font-weight-bold">ATK: 100</span>
            <div class="progress w-100" style="height: 10px;">
              <div class="progress-bar bg-warning" role="progressbar" style="width: 25%" aria-valuenow="25"
                aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

          <div class="d-flex gap-1 align-items-center w-100">
            <span class="text-nowrap font-weight-bold">DEF: 100</span>
            <div class="progress w-100" style="height: 10px;">
              <div class="progress-bar bg-warning" role="progressbar" style="width: 25%" aria-valuenow="25"
                aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

          <div class="d-flex gap-1 align-items-center w-100">
            <span class="text-nowrap font-weight-bold">SPATK: 100</span>
            <div class="progress w-100" style="height: 10px;">
              <div class="progress-bar bg-warning" role="progressbar" style="width: 25%" aria-valuenow="25"
                aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

          <div class="d-flex gap-1 align-items-center w-100">
            <span class="text-nowrap font-weight-bold">SPDEF: 100</span>
            <div class="progress w-100" style="height: 10px;">
              <div class="progress-bar bg-warning" role="progressbar" style="width: 25%" aria-valuenow="25"
                aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

          <div class="d-flex gap-1 align-items-center w-100">
            <span class="text-nowrap font-weight-bold">SPEED: 100</span>
            <div class="progress w-100" style="height: 10px;">
              <div class="progress-bar bg-warning" role="progressbar" style="width: 25%" aria-valuenow="25"
                aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="p-3 bg-white d-flex flex-column border rounded">
        <div class="d-flex gap-1 align-items-center border-bottom">
          <h3 class="text-dark font-weight-bold fs-5">Evolutions</h3>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutSection',
}
</script>

<style scoped>
img {
  width: 250px;
  height: 250px;
}

.stats {
  width: 320px;
}
</style>