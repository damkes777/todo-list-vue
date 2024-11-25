<script setup>

import ListItem from "@/components/ListItem.vue";
import {reactive, ref} from "vue";

const tasks = reactive(JSON.parse(localStorage.getItem('tasks')) || [])
const task = ref('')

function addTask() {
  tasks.push(task.value)
  localStorage.setItem('tasks', JSON.stringify(tasks))
  task.value = ''
}

function deleteTask(taskId) {
  tasks.splice(taskId, 1)
  localStorage.setItem('tasks', JSON.stringify(tasks))
  console.log(taskId)
}

</script>
<template>
  <div>
    <input v-model="task">
    <button @click="addTask">add</button>
  </div>
  <div>
    <div v-for="(task, index) in tasks" :key="index">
      <ListItem @deleteTask="deleteTask" :index="index">
        <template #content>
          {{ task }}
        </template>
      </ListItem>

    </div>
  </div>
</template>

<style scoped>

</style>