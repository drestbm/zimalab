import axios from 'axios'

const cors_url = `https://cors-anywhere.herokuapp.com/`

const state = () => ({
    listOfVacancies: [],
    page: 1,
    description: "",
    location: "",
    full_time: undefined
})

// getters
const getters = {}

const actions = {
    getList({ commit, state }) {
        axios.get(cors_url + `https://jobs.github.com/positions.json`, {params: {
            page: state.page,
            description: state.description,
            location: state.location,
            full_time: state.full_time
        }})
        .then(response => {
            commit('setList', response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }
}

// mutations
const mutations = {
    setList (state, list) {
        state.listOfVacancies = list
    },
    setPage (state, page) {
        state.page = page
    },
    setDescription (state, descr) {
        state.description = descr
    },
    setLocation (state, loc) {
        state.location = loc
    },
    setFullTime (state, full_time) {
        state.full_time = full_time
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}