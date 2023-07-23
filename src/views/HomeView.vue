<script setup>
import StandardLayout from '../layouts/StandardLayout.vue'
import TitleScreen from '../components/TitleScreen.vue'
import PhysiomeManCircleIcon from '../components/icons/IconPysiomeManCircle.vue'
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <standard-layout>
    <template #header>
      <physiome-man-circle-icon class="logo" />
      <div class="wrapper">
        <title-screen msg="Welcome!" level="3"/>
        <nav>
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
        </nav>
      </div>
    </template>
    <the-welcome />
  </standard-layout>
</template>

<style scoped>
@import url('../assets/main.css');
@import url('../assets/nav.css');
@import url('../assets/header.css');
@import url('../assets/logo.css');

.physiome-man-icon {
  width: 75px;
  height: 75px;
}

@media (min-width: 1024px) {
  .physiome-man-icon {
    width: 225px;
    height: 225px;
  }
}
</style>
