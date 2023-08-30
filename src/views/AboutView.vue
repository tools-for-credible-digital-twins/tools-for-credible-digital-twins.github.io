<script setup>
import StandardLayout from '../layouts/StandardLayout.vue'
import WelcomeItem from '../components/WelcomeItem.vue'
import DocumentationIcon from '../components/icons/IconDocumentation.vue'
import CommunityIcon from '../components/icons/IconCommunity.vue'
</script>

<template>
  <standard-layout title="About">
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
    <WelcomeItem>
      <template #icon>
        <CommunityIcon />
      </template>
      <template #heading>We value your feedback</template>
      We have a (very) short survey about our workshop.
      We would appreciate it if you would take a minute to leave some feedback.
      Our survey is available <a _target="blank" href="https://forms.gle/A1JhLWENCfHhMVHR7">here</a>.
    </WelcomeItem>
  </standard-layout>
</template>
