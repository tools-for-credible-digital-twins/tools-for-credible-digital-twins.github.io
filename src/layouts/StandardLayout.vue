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
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  .container {
    min-height: 600px;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  /* nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  } */
}
</style>
