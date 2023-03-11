<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { SphinxPage } from 'vue3-sphinx-xml'

const route = useRoute()

const documentationPath = computed(() => {
  return `/documentation/latest${route.path}`
})
</script>

<template>
  <div class="documentation">
    <sphinx-page :baseURL="documentationPath" imagesBaseURL="/documentation/latest/_static" />
  </div>
</template>
