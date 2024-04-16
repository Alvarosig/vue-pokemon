<template>
  <div class="p-3 bg-white d-flex flex-column border rounded">
    <div class="d-flex gap-1 border-bottom">
      <Dna class="text-warning" size="24" />
      <h3 class="text-dark font-bold fs-5">Evolutions</h3>
    </div>
  </div>
</template>

<script>
import { Dna } from 'lucide-vue-next'
export default {
  name: 'EvolutionPokemon',
  components: {
    Dna
  }
}
</script>

<style scoped></style>