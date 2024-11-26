<template>
  <div>
    <button @click="setPreviousDay()">Previous</button>
    <div v-for="day in days" :key="day">
      <span>{{ day }}</span>
    </div>
    <button @click="setNextDay()">Next</button>
  </div>
</template>

<script setup>
import { useCalendar } from "@/composables/useCalendar.js";
import {watchEffect} from "vue";

const {
  now,
  days,
  setNextDay,
  setPreviousDay
} = useCalendar();

watchEffect(() => {
  now.value
})
</script>