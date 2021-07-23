import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      todos: [],
      startTodos: [],
      users: [],
      checkboxes: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
      ]
    }),
    mutations: {
      setTodos (state, newTodos) {
        state.todos = newTodos
      },
      setStartTodos (state, newTodos) {
        state.startTodos = newTodos
      },
      setUsers (state, newUsers) {
        state.users = newUsers
      },
      setCheckboxes (state, { userIndex, event }) {
        state.checkboxes[userIndex] = event.target.checked
      }
    },
    actions: {
      async loadTodos (state) {
        state.todos = await axios.get('https://jsonplaceholder.typicode.com/todos/').then(res => res.data)
      },
      async loadUsers (state) {
        state.users = await axios.get('https://jsonplaceholder.typicode.com/users/').then(res => res.data)
      }
    }
  })
}
export default createStore
