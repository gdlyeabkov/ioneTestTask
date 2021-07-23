<template>
  <div>
    <span @click="toggleBurgerMenu = !toggleBurgerMenu" class="material-icons p-2 bg-blue-200 rounded cursor-pointer fixed top-0 left-0 z-10 text-white">
      menu
    </span>
    <TodosList :todos="todos" />
    <div :class="{ 'hidden': !toggleBurgerMenu, 'block': toggleBurgerMenu }">
      <table class="table-fixed text-white border-solid border-2 border-gray-400 fixed top-0 left-0">
        <div v-for="(user, userIndex) in propsUsers" :key="user.id">
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
    'propsTodos',
    'propsUsers'
  ],
  data () {
    return {
      toggleBurgerMenu: false,
      todos: this.propsTodos,
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
      this.$store.commit('incrementCounter')
      this.counterOfFiltered++
      if (this.$store.state.counterOfFiltered === 1) {
        this.$store.commit('setStartTodos', this.propsTodos)
      }
      this.todos = this.propsTodos
      this.$store.commit('setTodos', this.$store.state.startTodos)
      this.checkboxes[userIndex] = event.target.checked
      this.$store.commit('setCheckboxes', { userIndex, event })
      this.todos = this.propsTodos.filter((todo) => {
        if ((this.checkboxes[userIndex] && todo.userId === userId) || this.checkboxes[todo.userId - 1]) {
          return true
        } else if (!this.checkboxes[userIndex]) {
          return false
        }
        return false
      })
      this.$store.commit('setTodos', this.propsTodos.filter((todo) => {
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
