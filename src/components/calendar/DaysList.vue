<template>
  <div class="flex">
    <ul class="text-xl" v-for="day in days" :key="day">
      <li class="mx-3"
          :class="{'text-gray-600': !dayAndNowIsEqual(day, now), 'text-gray-100 font-semibold border-b-2 border-pink-600': dayAndNowIsEqual(day, now)}">
        {{ day }}
      </li>
    </ul>
  </div>
</template>
<script setup>
defineProps(['days', 'now'])

const dayAndNowIsEqual = (day, now) => {
  const date = new Date(now)
  const nowDay = date.toLocaleDateString(undefined, {month: "2-digit", day: "2-digit"})

  return day === nowDay
}
</script>
