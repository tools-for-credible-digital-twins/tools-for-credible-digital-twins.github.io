<script setup>
import TitleHeading from './TitleHeading.vue'

defineProps({
  msg: {
    type: String,
    required: true
  }, 
  level: {
    type: String,
    default: "1"
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="purple">{{ msg }}</h1>
      <title-heading :level="level" />
  </div>
</template>

<style scoped>
#starport-2 {
  height: 1rem;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
