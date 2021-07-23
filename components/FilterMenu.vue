<template>
  <div>
    <span @click="toggleBurgerMenu = !toggleBurgerMenu" style="cursor: pointer; color: white; z-index: 2; position: fixed; top: 0px; left: 0px;" class="material-icons p-2 bg-blue-200 rounded">
      menu
    </span>
    <TodosList/>
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
import TodosList from './TodosList.vue'

export default {
  name: 'FilterMenu',
  props: [
    'todos',
    'users'
  ],
  data () {
    return {
      toggleBurgerMenu: false
    }
  },
  methods: {
    filterTodos (event, userId, userIndex) {
      this.$store.commit('incrementCounter')
      // this.counterOfFiltered++
      if (this.$store.state.counterOfFiltered === 1) {
        this.$store.commit('setStartTodos', this.todos)
        // this.startTodos = this.todos
      }
      // this.todos = this.startTodos
      this.$store.commit('setTodos', this.$store.state.startTodos)
      // this.$store.checkboxes[userIndex] = event.target.checked
      this.$store.commit('setCheckboxes', { userIndex, event })
      // this.todos = this.todos.filter((todo) => {
      this.$store.commit('setTodos', this.todos.filter((todo) => {
        if ((this.$store.state.checkboxes[userIndex] && todo.userId === userId) || this.$store.state.checkboxes[todo.userId - 1]) {
          return true
        } else if (!this.$store.state.checkboxes[userIndex]) {
          return false
        }
        return false
      }))
    }
  },
  components: {
    TodosList
  }
}
</script>
