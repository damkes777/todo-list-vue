<template>
  <div class="container">
    <Calendar/>
    <TodoCreator @created="onTodoCreated($event)"/>
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
