import axios from "axios"
import { ref } from "vue"

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
})

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

  const getPokemonData = async (pokemonId) => {
    try {
      const response = await api.get(`/pokemon/${pokemonId}`)
      return response.data

    } catch (err) {
      error.value = err
    }
  }

  const getAbilityDescription = async (abilityId) => {
    try {
      const response = await api.get(`/ability/${abilityId}`)
      
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
