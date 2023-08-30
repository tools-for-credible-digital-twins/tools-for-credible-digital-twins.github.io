<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { SphinxPage } from 'vue3-sphinx-xml'

import PhysiomeManCircleIcon from '../components/icons/IconPysiomeManCircle.vue'
import DocumentationLayout from '../layouts/DocumentationLayout.vue'
import TitleHeading from '../components/TitleHeading.vue'

const route = useRoute()

const documentationPath = computed(() => {
  return `/documentation/latest${route.path}`
})

let inPageLinks = ref([])

const checkForHeadings = (mainElement, timeout) => {
  setTimeout(() => {
    const sections = mainElement.querySelectorAll('section')
    sections.forEach((element) => {
      let firstElementChild = element.firstElementChild
      if (firstElementChild.tagName === 'SPAN') {
        firstElementChild = firstElementChild.nextElementSibling
      }
      if (['H1', 'H2'].includes(firstElementChild.tagName)) {
        const heading = { id: element.id, text: firstElementChild.innerText }
        if (
          !inPageLinks.value.find((x) => {
            return x.id === heading.id
          })
        ) {
          inPageLinks.value.push(heading)
        }
      }
    })
  }, timeout)
}

onMounted(() => {
  const mainElement = document.querySelector('main')
  checkForHeadings(mainElement, 250)
  checkForHeadings(mainElement, 750)
  checkForHeadings(mainElement, 1500)
})
</script>

<template>
  <documentation-layout>
    <template #header>
      <router-link to="/">
        <physiome-man-circle-icon class="logo" />
      </router-link>
      <title-heading />
    </template>
    <template #aside>
      <div>
        <router-link to="/">Home</router-link>
      </div>
      <div v-for="link in inPageLinks" :key="link.id">
        <router-link :to="`#${link.id}`" class="nobreak">{{ link.text }}</router-link>
      </div>
    </template>
    <sphinx-page
      :baseURL="documentationPath"
      imagesBaseURL="/documentation/latest/_static"
      referenceBaseURL="/"
    />
  </documentation-layout>
</template>

<style scoped>
.physiome-man-icon {
  width: 75px;
  height: 75px;
}

.nobreak {
  white-space: nowrap;
}

header {
  display: flex;
}

header h1 {
  margin-left: 1rem;
}

img {
  padding-top: 1rem;
}
</style>

<style>
section img {
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 75%;
}

section h1 {
  padding-top: 2rem;
}
section h2 {
  padding-top: 1rem;
}

div.admonition.admonition-exercise {
  padding: 0rem 1.8rem 1rem 1.8rem;
  background-color: var(--color-exercise);
  border: 1px solid var(--color-exercise-border);
  color: var(--color-exercise-text);
}

div.admonition.warning {
  padding: 0rem 1.8rem 1rem 1.8rem;
  background-color: var(--color-warning);
  border: 1px solid var(--color-warning-border);
  color: var(--color-warning-text);
}
</style>
