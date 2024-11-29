<template>
  <div class="container mx-auto p-5 bg-gray-800 text-gray-200 sm:mt-12 sm:rounded-lg h-dvh sm:h-fit sm:shadow-2xl">
    <Calendar/>
    <TodoCreator @created="onTodoCreated($event)" class="my-5"/>
    <div class="mb-8">
      <ListItem :todos="todos"
                @deleteTask="onTodoDelete($event)"
                @markAsDone="onMarkAsDone($event)"
                @undo="onUndo($event)"
      />
    </div>
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
  onTodoDelete,
  onMarkAsDone,
  onUndo
} = useTodos()

useLocalStorage('todos', todos)
</script>
