<script setup>
import { computed } from 'vue'

const props = defineProps({
  level: {
    type: String,
    default: '1'
  }
})
const headingTag = computed(() => {
  return `h${props.level}`
})
</script>

<template>
  <component :is="headingTag">Tools for credible digital twins.</component>
</template>
