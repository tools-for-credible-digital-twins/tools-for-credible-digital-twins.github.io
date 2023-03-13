<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { SphinxPage } from 'vue3-sphinx-xml'
import { Starport } from 'vue-starport'
import PhysiomeManCircleIcon from '../components/icons/IconPysiomeManCircle.vue'
import TitleHeading from '../components/TitleHeading.vue'

const route = useRoute()

const documentationPath = computed(() => {
  return `/documentation/latest${route.path}`
})
</script>

<template>
  <div class="header">
    <div class="row">
      <div class="column side">
        <RouterLink to="/">
          <Starport port="physiome-icon" id="starport-1">
            <PhysiomeManCircleIcon id="main-icon" />
          </Starport>
        </RouterLink>
      </div>
      <div class="column middle">
        <Starport port="title-text" id="starport-2">
          <TitleHeading />
        </Starport>
      </div>
      <div class="column side"></div>
    </div>
  </div>
  <div class="row">
    <div class="column side"></div>
    <div class="documentation column middle">
      <sphinx-page :baseURL="documentationPath" imagesBaseURL="/documentation/latest/_static" />
    </div>
    <div class="column side"></div>
  </div>
  <div class="footer">Footer</div>
</template>

<style>
@import url('../assets/docspage.css');

#starport-1 {
  width: 3rem;
  height: 3rem;
}
#starport-2 {
  height: 1rem;
}
</style>
