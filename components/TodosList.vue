<template>
  <div>
    <div v-for="todo in todos" :key="todo.id">
      <div class="border-solid border-2 border-gray-400 rounded" style="margin: 10px; float: left; width: 18rem; min-height: 275px;">
        <div class="card-body">
          <NuxtLink class="mb-5 text-lg font-semibold text-black-300" style="cursor: pointer;" tag="h5" :to="{ path: '/detail', query: { todoid: todo.id, userid: todo.userId } }">Тема задачи: {{ todo.title }}</NuxtLink>
          <p >Нажмите на тему выше, чтобы перейти к детальному просмотру этой задачи.</p>
          <p class="mt-8 inline-block rounded bg-blue-500 text-white p-3 text-lg">Пользователь: {{ todo.userId }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TodosList',
  asyncData ({ store }) {
    const loadedTodos = store.dispatch('loadTodos')
    return {
      todos: loadedTodos
    }
  }
}
</script>
