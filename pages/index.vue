<template>
  <div class="container m-auto text-center w-full min-h-screen">
    <FilterMenu :propsTodos="todos" :propsUsers="users" />
  </div>
</template>

<script>
import FilterMenu from '../components/FilterMenu'

export default {
  async asyncData ({ $axios, store }) {
    store.dispatch('loadUsers')
    store.dispatch('loadTodos')
    return {
      todos: await $axios.$get('https://jsonplaceholder.typicode.com/todos/'),
      users: await $axios.$get('https://jsonplaceholder.typicode.com/users/')
    }
  },
  components: {
    FilterMenu
  }
}
</script>
