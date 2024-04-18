<template>
  <div class="p-3 bg-white d-flex flex-column border rounded stats">
    <div class="d-flex gap-1 border-bottom">
      <AlignLeft class="text-warning" size="24" />
      <h3 class="text-dark font-bold fs-5">Base Stats</h3>
    </div>

    <div class="d-flex flex-column gap-2 mt-2">
      <div class="d-flex gap-1 align-items-center w-100" v-for="(stat, index) in stats" :key="index">
        <span class="text-nowrap font-bold flex-shrink-0 text-uppercase " style="width: 120px;">{{ stat.stat.name }}:</span>
        <div class="text-nowrap flex-shrink-0" style="width: 40px;">{{ stat.base_stat }}</div>
        <div class="progress w-100" style="height: 10px;">
          <div class="progress-bar bg-warning" :style="{width: calculateWidth(stat.base_stat)}" role="progressbar" :aria-valuenow="stat.base_stat" aria-valuemin="0"
            aria-valuemax="100">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { AlignLeft } from 'lucide-vue-next'

export default {
  name: 'StatsPokemon',
  components: {
    AlignLeft
  },
  props: ['stats'],

  methods: {
    calculateWidth(baseStat) {
      return Math.min(baseStat / 255 * 100, 100) + '%';
    }
  }
}
</script>

<style scoped></style>