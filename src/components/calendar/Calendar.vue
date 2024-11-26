<template>
  <div class="flex justify-center">
    <button class="px-2 font-semibold bg-pink-600" @click="setPreviousDay()">Previous</button>
    <DaysList :days="days" :now="now"/>
    <button class="bg-pink-600" @click="setNextDay()">Next</button>
  </div>
</template>

<script setup>
import { useCalendar } from "@/composables/useCalendar.js";
import DaysList from "@/components/calendar/DaysList.vue";

const {
  now,
  days,
  setNextDay,
  setPreviousDay
} = useCalendar();

</script>