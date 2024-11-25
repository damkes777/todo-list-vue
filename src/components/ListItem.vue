<script>
export default {
  props: {
    index: {
      type: Number,
      required: true
    }
  },
  emits: ['deleteTask']
}
</script>
<template>
  <div>
    <slot name="content"></slot>
  </div>
  <div class="buttons">
    <button @click="$emit('deleteTask', index)">delete</button>
  </div>
</template>