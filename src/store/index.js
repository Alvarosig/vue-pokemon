import { createStore } from 'vuex'

export default createStore({
  state: {
    selectedPokemon: null
  },
  getters: {
    getSelectedPokemon(state) {
      return state.selectedPokemon
    }
  },
  mutations: {
    setSelectedPokemon(state, pokemon) {
      state.selectedPokemon = pokemon
    }
  },
})