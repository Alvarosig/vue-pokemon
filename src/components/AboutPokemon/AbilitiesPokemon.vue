<template>
  <div class="p-3 bg-white d-flex flex-column border rounded">
    <div class="d-flex gap-1 border-bottom">
      <BadgeAlert fill="#ffc107" class="text-black" />
      <h3 class="text-dark font-bold fs-5">
        Abilities and Effects
      </h3>
    </div>
    <div class="d-flex gap-1 align-items-center mt-2" v-for="(ability, index) in abilities" :key="index">
      <div class="d-flex flex-column justify-content-start text-left gap-1">
        <p class="text-nowrap text-capitalize m-0 font-bold text-start">{{ ability.ability.name }}</p>
        <p class="text-nowrap text-start">-> {{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { usePokemonData } from '@/lib/pokemonAPI'
import { BadgeAlert } from 'lucide-vue-next'
import { onMounted, ref } from 'vue'

export default {
  name: 'AbilitiesPokemon',
  components: {
    BadgeAlert
  },
  props: ['abilities'],

  setup(props) {
    let description = ref('')

    onMounted(async () => {
      const abilities = props.abilities

      if (abilities.length > 0) {
        const urls = abilities.map(ability => ability.ability.url)
        const id = urls[0].split('/')[6]

        const { getAbilityDescription } = usePokemonData()

        const abilityDescription = await getAbilityDescription(id)

        description.value = abilityDescription.effect_changes[0].effect_entries[1].effect

      }

    })

    return { description }
  }

}
</script>

<style scoped></style>