<template>
  <div class="p-3 bg-white d-flex flex-column border rounded w-100 " style="max-width: 500px;">
    <div class="d-flex gap-1 border-bottom">
      <BadgeAlert fill="#ffc107" class="text-black" />
      <h3 class="text-dark font-bold fs-5">
        {{ $t('pokemon.abilities') }}
      </h3>
    </div>
    <div class="d-flex gap-1 align-items-center mt-2" v-for="(item, index) in abilities" :key="index">
      <div class="d-flex flex-column justify-content-start text-left gap-1">
        <p class="text-nowrap text-capitalize m-0 font-bold text-start">{{ item.ability.name }}</p>
        <p class="text-start">-> {{ getAbilityDescription(item.ability.description.flavor_text_entries) ?? 'No effect found' }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { BadgeAlert } from 'lucide-vue-next'
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'AbilitiesPokemon',
  components: {
    BadgeAlert
  },
  props: ['abilities'],
  setup() {
    let description = ref('')
    const store = useStore()

    const getAbilityDescription = (flavorTextEntries) => {
      let language = store.state.language
      if (language === 'pt_BR') {
        language = 'en'
      }

      const entry = flavorTextEntries.find(entry => entry.language.name === language)

      return entry ? entry.flavor_text : null
    }

    return { description, getAbilityDescription }
  }

}
</script>

<style scoped></style>