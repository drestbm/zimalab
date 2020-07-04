import Vue from 'vue'
import Vuex from 'vuex'
import vacancies from './modules/vacancies'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    vacancies,
  }
})
