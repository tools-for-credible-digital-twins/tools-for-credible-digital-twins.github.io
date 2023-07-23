<script setup>
import TitleScreen from '../components/TitleScreen.vue'
import StandardLayout from '../layouts/StandardLayout.vue'
import PhysiomeManCircleIcon from '../components/icons/IconPysiomeManCircle.vue'
import WelcomeItem from '../components/WelcomeItem.vue'
import DocumentationIcon from '../components/icons/IconDocumentation.vue'
</script>

<template>
  <standard-layout>
    <template #header>
      <PhysiomeManCircleIcon class="logo" />
      <div class="wrapper">
        <TitleScreen msg="About" level="3"/>
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
    </template>
    <WelcomeItem>
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>About Tools for Credible Digital Twins</template>
      This work has been funded by the
      <a href="https://www.auckland.ac.nz/en/abi.html" target="_blank"
        >Auckland Bioengineering Institue</a
      >.
    </WelcomeItem>
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
