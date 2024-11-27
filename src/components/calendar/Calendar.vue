<template>
  <div class="flex flex-col w-1/2 mx-auto items-center">
    <div>
      <span class="text-gray-600 text-sm font-semibold uppercase">{{ monthYear }}</span>
      <div class="flex justify-center mt-1">
        <button @click="setPreviousDay()"
                class="px-2 text-gray-100 hover:text-cyan-400 active:text-cyan-600 transition-colors duration-200 ease-in-out">
          <font-awesome-icon :icon="['fas', 'chevron-left']" class="text-lg"/>
        </button>
        <DaysList :days="days" :now="now"/>
        <button @click="setNextDay()"
                class="px-2 text-gray-100 hover:text-cyan-400 active:text-cyan-600 transition-colors duration-200 ease-in-out">
          <font-awesome-icon :icon="['fas', 'chevron-right']" class="text-lg"/>
        </button>
      </div>

    </div>

  </div>
</template>

<script setup>
import {useCalendar} from "@/composables/useCalendar.js";
import DaysList from "@/components/calendar/DaysList.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const {
  now,
  days,
  monthYear,
  setNextDay,
  setPreviousDay
} = useCalendar();

</script>