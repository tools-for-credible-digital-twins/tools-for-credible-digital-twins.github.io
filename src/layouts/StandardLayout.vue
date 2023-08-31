<script setup>
import PhysiomeManCircleIcon from '../components/icons/IconPysiomeManCircle.vue'
import TitleScreen from '../components/TitleScreen.vue'
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="container">
    <header>
      <PhysiomeManCircleIcon class="logo" />
      <div class="wrapper">
        <TitleScreen :msg="title" level="3" />
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
    </header>
    <main>
      <slot></slot>
    </main>
  </div>
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
