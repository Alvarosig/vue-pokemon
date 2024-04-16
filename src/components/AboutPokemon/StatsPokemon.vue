<template>
  <div class="p-3 bg-white d-flex flex-column border rounded stats">
    <div class="d-flex gap-1 border-bottom">
      <AlignLeft class="text-warning" size="24" />
      <h3 class="text-dark font-bold fs-5">Base Stats</h3>
    </div>
    
    <div class="d-flex flex-column gap-2 mt-2">
      <div class="d-flex gap-1 align-items-center w-100">
        <span class="text-nowrap font-bold flex-shrink-0" style="width: 60px;">HP:</span>
        <div class="text-nowrap flex-shrink-0" style="width: 40px;">100</div>
        <div class="progress w-100" style="height: 10px;">
          <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="0" aria-valuemin="0"
            aria-valuemax="100">
          </div>
        </div>
      </div>

      <div class="d-flex gap-1 align-items-center w-100">
        <span class="text-nowrap font-bold flex-shrink-0" style="width: 60px;">ATK:</span>
        <div class="text-nowrap flex-shrink-0" style="width: 40px;">100</div>
        <div class="progress w-100" style="height: 10px;">
          <div class="progress-bar bg-warning" role="progressbar" style="width: 25%" aria-valuenow="25"
            aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>

      <div class="d-flex gap-1 align-items-center w-100">
        <span class="text-nowrap font-bold flex-shrink-0" style="width: 60px;">DEF:</span>
        <div class="text-nowrap flex-shrink-0" style="width: 40px;">100</div>
        <div class="progress w-100" style="height: 10px;">
          <div class="progress-bar bg-warning" role="progressbar" style="width: 25%" aria-valuenow="25"
            aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>

      <div class="d-flex gap-1 align-items-center w-100">
        <span class="text-nowrap font-bold flex-shrink-0" style="width: 60px;">SPATK:</span>
        <div class="text-nowrap flex-shrink-0" style="width: 40px;">100</div>
        <div class="progress w-100" style="height: 10px;">
          <div class="progress-bar bg-warning" role="progressbar" style="width: 25%" aria-valuenow="25"
            aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>

      <div class="d-flex gap-1 align-items-center w-100">
        <span class="text-nowrap font-bold flex-shrink-0" style="width: 60px;">SPDEF:</span>
        <div class="text-nowrap flex-shrink-0" style="width: 40px;">100</div>
        <div class="progress w-100" style="height: 10px;">
          <div class="progress-bar bg-warning" role="progressbar" style="width: 25%" aria-valuenow="25"
            aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>

      <div class="d-flex gap-1 align-items-center w-100">
        <span class="text-nowrap font-bold flex-shrink-0" style="width: 60px;">SPEED:</span>
        <div class="text-nowrap flex-shrink-0" style="width: 40px;">100</div>
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

<style scoped>
</style>