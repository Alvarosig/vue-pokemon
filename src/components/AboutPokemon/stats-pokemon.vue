<template>
  <div class="p-3 bg-white d-flex flex-column border rounded stats">
    <div class="d-flex gap-1">
      <AlignLeft class="text-warning" size="24" />
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
</template>

<script>
import { AlignLeft  } from 'lucide-vue-next'

export default {
  name: 'StatsPokemon',
  components: {
    AlignLeft
  }
}
</script>

<style scoped></style>