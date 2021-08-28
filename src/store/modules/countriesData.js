import axios from 'axios'
const state = {
  infos: []
}
const getters = {
  allOceania: (state) => (state.infos)
}
const actions = {
  async getCountriesOceania ({ commit }) {
    const response = await axios.get('https://restcountries.eu/rest/v2/region/oceania')
    commit('setCountriesOceania', response.data)
  },
  async getCountriesAsia ({ commit }) {
    const response = await axios.get('https://restcountries.eu/rest/v2/region/asia')
    commit('setCountriesAsia', response.data)
  },
  async getCountriesEurope ({ commit }) {
    const response = await axios.get('https://restcountries.eu/rest/v2/region/europe')
    commit('setCountriesEurope', response.data)
  },
  async getCountriesAmericas ({ commit }) {
    const response = await axios.get('https://restcountries.eu/rest/v2/region/americas')
    commit('setCountriesAmericas', response.data)
  },
  async getCountriesAfrica ({ commit }) {
    const response = await axios.get('https://restcountries.eu/rest/v2/region/africa')
    commit('setCountriesAfrica', response.data)
  },
  async getCountriesAll ({ commit }) {
    const response = await axios.get('https://restcountries.eu/rest/v2/all')
    commit('setCountriesAll', response.data)
  },
  async getSearch ({ commit }, q) {
    const response = await axios.get(`https://restcountries.eu/rest/v2/name/${q}`)
    commit('setSearch', response.data)
  }
}
const mutations = {
  setCountriesOceania: (state, payload) => (state.infos = payload),
  setSearch: (state, payload) => (state.infos = payload),
  setCountriesAsia: (state, payload) => (state.infos = payload),
  setCountriesEurope: (state, payload) => (state.infos = payload),
  setCountriesAmericas: (state, payload) => (state.infos = payload),
  setCountriesAfrica: (state, payload) => (state.infos = payload),
  setCountriesAll: (state, payload) => (state.infos = payload)
}
export default {
  state,
  getters,
  actions,
  mutations
}
