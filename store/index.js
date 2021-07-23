import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      todos: [],
      startTodos: [],
      users: [],
      counterOfFiltered: 0,
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
      },
      incrementCounter (state) {
        state.counterOfFiltered++
      }
    },
    actions: {
      async nuxtServerInit ({ state, dispatch }) {
        state.todos = await axios.get('https://jsonplaceholder.typicode.com/todos/').then(res => res.data)
        state.users = await axios.get('https://jsonplaceholder.typicode.com/users/').then(res => res.data)
        console.log('state.todos: ', state.todos)
      },
      async loadTodos (state) {
        state.todos = await axios.get('https://jsonplaceholder.typicode.com/todos/').then(res => res.data)
        console.log('state.todos: ', state.todos)
      },
      async loadUsers (state) {
        state.users = await axios.get('https://jsonplaceholder.typicode.com/users/').then(res => res.data)
        console.log('state.users: ', state.users)
      }
    }
  })
}
export default createStore
