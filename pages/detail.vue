<template>
  <div>
    <NuxtLink style="cursor: pointer;" class="text-red-600 p-3 text-lg" tag="h5" to="/">
      <span class="material-icons">
        door_back
      </span>
      К списку задач
    </NuxtLink>
    <div class="md:flex bg-gray-100 rounded-xl p-8 border-solid border-2 border-gray-400 m-8">
      <div class="grid grid-cols-1 divide-y-4 divide-yellow-500" style="margin: 10px auto; text-align: center; width: 18rem; min-height: 215px;">
        <div class="">
          <p class="font-semibold text-xl">Информация о задаче:</p>
          <h5 class="mb-5 text-base text-black-300">Тема задачи: {{ todo.title }}</h5>
          <p class="inline-block rounded bg-blue-500 text-white p-3 text-lg">Cтатус задачи: {{ todo.completed }}</p>
          <p style="margin: 5px;" class="inline-block rounded bg-blue-500 text-white p-3 text-lg">ID пользователя: {{ todo.userId }}</p>
          <p href="#" class="inline-block rounded bg-blue-500 text-white p-3 text-lg">ID задачи: {{ todo.id }} </p>
        </div>
        <div class="mt-10">
          <p class="text-xl font-semibold text-black-300">Информация о пользователе:</p>
          <h5 class="mb-5 text-base text-black-300">Имя пользователя: {{ user.name }}</h5>
          <p class="inline-block rounded bg-blue-500 text-white p-3 text-lg">Email пользователя: {{ user.email }}</p>
          Контактная информация:
          <p style="margin: 2px;" class="inline-block rounded bg-blue-500 text-white p-3 text-lg">Улца: {{ user.address.street }} </p>
          <p style="margin: 2px;" class="inline-block rounded bg-blue-500 text-white p-3 text-lg">Город: {{ user.address.city }} </p>
          <p style="margin: 2px;" class="inline-block rounded bg-blue-500 text-white p-3 text-lg">Телефон: {{ user.phone }} </p>
          <p style="margin: 2px;" class="inline-block rounded bg-blue-500 text-white p-3 text-lg">Сайт: {{ user.website }} </p>
        </div>
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
