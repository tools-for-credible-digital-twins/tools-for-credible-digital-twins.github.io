<script setup>
import BrokenLink from '../components/BrokenLink.vue'
import StandardLayout from '../layouts/StandardLayout.vue'
</script>

<template>
  <standard-layout title="Page Not Found">
    <h1>Oops!</h1>
    <broken-link />
    <br />
    <router-link to="/">Back to the home page</router-link>
  </standard-layout>
</template>
