<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

const prettyPath = computed(() => {
  return route.params.pathMatch.join('/')
})
</script>

<template>
  <p>The page that you've requested:</p>
  <br />
  <h4>{{ prettyPath }}</h4>
  <br />
  <p>
    does not exist. Please use the "back" button on your browser to return to where you were, or
    start again using the links in the menu bar.
  </p>
</template>
