<template>
  <div class="container">
    <TodoCreator @created="onTodoCreated($event)"/>
    <ListItem :todos="todos" @deleteTask="onTodoDelete($event)"/>
  </div>
</template>

<script setup>
import TodoCreator from "@/components/todo/TodoCreator.vue";
import {useTodos} from "@/composables/useTodos.js";
import ListItem from "@/components/todo/ListItem.vue";
import {useLocalStorage} from "@/composables/useLocalStorage.js";

const {
  todos,
  onTodoCreated,
  onTodoDelete
} = useTodos()

useLocalStorage('todos', todos)
</script>
