<template>
  <div class="container mx-auto mt-12 p-5 rounded-lg bg-gray-800 text-gray-200">
    <Calendar/>
    <TodoCreator @created="onTodoCreated($event)" class="mt-5"/>
    <ListItem :todos="todos" @deleteTask="onTodoDelete($event)"/>
  </div>
</template>

<script setup>
import {useTodos} from "@/composables/useTodos.js";
import {useLocalStorage} from "@/composables/useLocalStorage.js";
import TodoCreator from "@/components/todo/TodoCreator.vue";
import ListItem from "@/components/todo/ListItem.vue";
import Calendar from "@/components/calendar/Calendar.vue";

const {
  todos,
  onTodoCreated,
  onTodoDelete
} = useTodos()

useLocalStorage('todos', todos)
</script>
