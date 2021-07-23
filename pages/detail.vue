<template>
  <div>
    <NuxtLink class="cursor-pointer text-red-600 p-3 text-lg" tag="h5" to="/">
      <span class="material-icons">
        door_back
      </span>
      К списку задач
    </NuxtLink>
    <div class="flex flex-col bg-gray-100 rounded-xl p-8 border-solid border-2 border-gray-400 m-8">
      <div class="text-center">
          <p class="font-semibold text-xl">Информация о задаче:</p>
          <h5 class="mb-5 text-base text-black-300">Тема задачи: {{ todo.title }}</h5>
          <div class="inline-block rounded bg-blue-500 text-white p-3 text-lg">Cтатус задачи: {{ todo.completed }}</div>
          <div style="margin: 5px;" class="inline-block rounded bg-blue-500 text-white p-3 text-lg">ID пользователя: {{ todo.userId }}</div>
          <div class="inline-block rounded bg-blue-500 text-white p-3 text-lg">ID задачи: {{ todo.id }} </div>
        </div>
        <div class="mt-20 text-center">
          <p class="text-xl font-semibold text-black-300">Информация о пользователе:</p>
          <h5 class="mb-5 text-base text-black-300">Имя пользователя: {{ user.name }}</h5>
          <div class="inline-block rounded bg-blue-500 text-white p-3 text-sm">Email пользователя: {{ user.email }}</div>
          <p class="mt-5">Контактная информация:</p>
          <div class="m-2 inline-block rounded bg-blue-500 text-white p-3 text-lg">Улица: {{ user.address.street }} </div>
          <div class="m-2 inline-block rounded bg-blue-500 text-white p-3 text-lg">Город: {{ user.address.city }} </div>
          <div class="m-2 inline-block rounded bg-blue-500 text-white p-3 text-lg">Телефон: {{ user.phone }} </div>
          <div class="m-2 inline-block rounded bg-blue-500 text-white p-3 text-lg">Сайт: {{ user.website }} </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData ({ $axios, route }) {
    return {
      todo: await $axios.$get(`https://jsonplaceholder.typicode.com/todos/${route.query.todoid}`),
      user: await $axios.$get(`https://jsonplaceholder.typicode.com/users/${route.query.userid}`)
    }
  }
}
</script>
