import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

var config = {
  header: {
    'Content-Type': 'application/json',
  }
}

var cors_url = `https://cors-anywhere.herokuapp.com/`

export default new Vuex.Store({
  state: {
    listOfVacancies: [],
  },
  mutations: {
    loadListOfVacancies() {
      axios.get(cors_url + `https://jobs.github.com/positions.json?page=1`,config)
        .then(response => {
          this.listOfVacancies = response.data
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
