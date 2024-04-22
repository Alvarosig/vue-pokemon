import { createStore } from 'vuex'

export default createStore({
  state: {
    selectedPokemon: null,
    language: 'en',
    isSidebarOpen: true,
  },
  getters: {
    getSelectedPokemon(state) {
      return state.selectedPokemon
    },
    getLanguage(state) {
      return state.language
    },
    getIsSidebarOpen(state) {
      return state.isSidebarOpen
    }
  },
  mutations: {
    setSelectedPokemon(state, pokemon) {
      state.selectedPokemon = pokemon
    },
    setLanguage(state, language) {
      state.language = language
    },
    setIsSidebarOpen(state, isOpen) {
      state.isSidebarOpen = isOpen
    }
  },
})