import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

var config = {
  header: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS'
  }
}

export default new Vuex.Store({
  state: {
    listOfVacancies: [],
  },
  mutations: {
    loadListOfVacancies() {
      axios.get(`https://jobs.github.com/positions.json?page=1`,config)
        .then(response => {
          this.listOfVacancies = response.data
          console.log(this.listOfVacancies)
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  actions: {
  },
  modules: {
  }
})
