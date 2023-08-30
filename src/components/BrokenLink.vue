<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

const prettyPath = computed(() => {
  return route.query.path
})
</script>

<template>
  <p>The page that you've requested:</p>
  <br />
  <h4>{{ prettyPath }}</h4>
  <br />
  <p>
    does not exist. Try starting from the <RouterLink to="/">home</RouterLink> page to find the page you are looking for.
  </p>
</template>
