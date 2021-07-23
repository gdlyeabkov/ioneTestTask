<template>
  <div class="container">
    <span @click="toggleBurgerMenu = !toggleBurgerMenu" style="cursor: pointer; color: white; z-index: 2; position: fixed; top: 0px; left: 0px;" class="material-icons p-2 bg-blue-200 rounded">
      menu
    </span>
    <div v-for="todo in todos" :key="todo.id">
      <div class="border-solid border-2 border-gray-400 rounded" style="margin: 10px; float: left; width: 18rem; min-height: 275px;">
        <div class="card-body">
          <NuxtLink class="mb-5 text-lg font-semibold text-black-300" style="cursor: pointer;" tag="h5" :to="{ path: '/detail', query: { todoid: todo.id, userid: todo.userId } }">Тема задачи: {{ todo.title }}</NuxtLink>
          <p >Нажмите на тему выше, чтобы перейти к детальному просмотру этой задачи.</p>
          <p class="mt-8 inline-block rounded bg-blue-500 text-white p-3 text-lg">Пользователь: {{ todo.userId }}</p>
        </div>
      </div>
    </div>
    <div :style="{ display: !toggleBurgerMenu ? 'none' : 'block' }">
      <table class="table-fixed text-white border-solid border-2 border-gray-400" style="position: fixed; top: 0px; left: 0px;">
        <div v-for="(user, userIndex) in users" :key="user.id">
          <tr class="bg-gray-700 border-solid border-2 border-gray-400">
            <td width="750px">
              <span>{{ user.username }}</span>
            </td>
            <td width="750px">
              <input type="checkbox" @change="filterTodos($event, user.id, userIndex)"/>
            </td>
          </tr>
        </div>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $axios }) {
    return {
      todos: await $axios.$get('https://jsonplaceholder.typicode.com/todos/'),
      users: await $axios.$get('https://jsonplaceholder.typicode.com/users/')
    }
  },
  data () {
    return {
      toggleBurgerMenu: false,
      startTodos: [],
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
    }
  },
  methods: {
    filterTodos (event, userId, userIndex) {
      this.counterOfFiltered++
      if (this.counterOfFiltered === 1) {
        this.startTodos = this.todos
      }
      this.todos = this.startTodos
      this.checkboxes[userIndex] = event.target.checked
      this.todos = this.todos.filter((todo) => {
        if ((this.checkboxes[userIndex] && todo.userId === userId) || this.checkboxes[todo.userId - 1]) {
          return true
        } else if (!this.checkboxes[userIndex]) {
          return false
        }
        return false
      })
    }
  }
}
</script>
<style>
.container {
  margin: auto;
  min-height: 100vh;
  text-align: center;
  width: 100%;
}
</style>
