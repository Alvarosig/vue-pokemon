<template>
  <div class="p-3 bg-white d-flex flex-column border rounded" style="max-width: 500px;">
    <div class="d-flex gap-1 border-bottom">
      <BadgeAlert fill="#ffc107" class="text-black" />
      <h3 class="text-dark font-bold fs-5">
        Abilities and Effects
      </h3>
    </div>
    <div class="d-flex gap-1 align-items-center mt-2" v-for="(item, index) in abilities" :key="index">
      <div class="d-flex flex-column justify-content-start text-left gap-1">
        <p class="text-nowrap text-capitalize m-0 font-bold text-start">{{ item.ability.name }}</p>
        <p class="text-start">-> {{ item.ability.description.effect_entries.find(entry => entry.language.name === 'en').effect ?? 'No effect found' }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { BadgeAlert } from 'lucide-vue-next'
import { ref } from 'vue'

export default {
  name: 'AbilitiesPokemon',
  components: {
    BadgeAlert
  },
  props: ['abilities'],

  setup() {
    let description = ref('')

    return { description }
  }

}
</script>

<style scoped></style>