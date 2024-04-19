
import { ref } from "vue"
import { api } from "./axios"

export const usePokemonData = () => {
  const error = ref(null)

  const getAllPokemonData = async () => {
    try {
      const response = await api.get('/pokemon?limit=151&offset=0') // Ajuste o limite conforme necessário
      
      return response.data
    } catch (err) {
      error.value = err
    }
  }

  const getPokemonData = async (url) => {
    try {
      const response = await api.get(url)
      return response.data

    } catch (err) {
      error.value = err
    }
  }

  const getAbilityDescription = async (url) => {
    try {
      const response = await api.get(url)
      
      return response.data
    } catch (err) {
      error.value = err
    }
  }

  const getPokemonEvolution = async (evolutionId) => {
    try {
      const response = await api.get(`/evolution-chain/${evolutionId}`)
      return response.data
      
    } catch (err) {
      error.value = err
    }
  }

  return { getAllPokemonData, getPokemonData, getPokemonEvolution, getAbilityDescription }
}
