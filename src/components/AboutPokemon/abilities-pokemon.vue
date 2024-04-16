<template>
  <div class="p-3 bg-white d-flex flex-column border rounded">
    <div class="d-flex gap-1 border-bottom">
      <BadgeAlert fill="#ffc107" class="text-black"/>
      <h3 class="text-dark font-weight-bold fs-5">
        Abilities and Effects
      </h3>
    </div>
    <div class="d-flex gap-1 align-items-center mt-2">Dark types are immune to moves affected by the Prankster
      ability</div>
  </div>
</template>


<script>
import { BadgeAlert } from 'lucide-vue-next'

export default {
  name: 'AbilitiesPokemon',
  components: {
    BadgeAlert
  }
}
</script>

<style scoped></style>