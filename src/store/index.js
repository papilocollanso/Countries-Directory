import Vue from 'vue'
import Vuex from 'vuex'
import countriesData from './modules/countriesData'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    countriesData
  }
})
