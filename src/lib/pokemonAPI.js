import axios from "axios"
import { ref } from "vue"

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
})

export const usePokemonData = () => {
  const data = ref(null)
  const error = ref(null)

  const getAllPokemonData = async () => {
    try {
      const response = await api.get('/pokemon') // Ajuste o limite conforme necessário
      return response.data

    } catch (err) {
      error.value = err
    }
  }

  const getPokemonData = async () => {
    try {
      const response = await api.get(`/pokemon/1`)
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

  return { data, error, getAllPokemonData, getPokemonData, getPokemonEvolution }
}
