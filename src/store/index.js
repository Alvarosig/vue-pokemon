import { createStore } from 'vuex'

export default createStore({
  state: {
    selectedPokemon: null,
    language: 'en'
  },
  getters: {
    getSelectedPokemon(state) {
      return state.selectedPokemon
    },
    getLanguage(state) {
      return state.language
    }
  },
  mutations: {
    setSelectedPokemon(state, pokemon) {
      state.selectedPokemon = pokemon
    },
    setLanguage(state, language) {
      state.language = language
    }
  },
})