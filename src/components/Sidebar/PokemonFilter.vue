<template>
  <select class="form-control w-100 mt-2 bg-black/50 text-dark placeholder-secondary/50 font-bold"
    v-model="selectedFilter">
    <option value="#" selected>{{ $t('input.option.head') }}</option>
    <option value="">-----------</option>
    <option value="id">ID</option>
    <option value="">-----------</option>
    <option value="type">{{ $t('input.option.type') }}</option>
    <option value="">-----------</option>
    <option v-for="types in pokemonTypes" :value="types.name" :key="types.name" class="text-capitalize">{{ types.name }}
    </option>
    <option value="">-----------</option>
    <option value="species">{{ $t('input.option.specie') }}</option>
    <option value="">-----------</option>
  </select>
</template>

<script>
export default {
  name: 'PokemonFilter',
  props: ['pokemonTypes', 'value'],

  data() {
    return {
      selectedFilter: this.value || '#',
    }
  },
  watch: {
    value(newVal) {
      this.selectedFilter = newVal
    },
  },
}
</script>