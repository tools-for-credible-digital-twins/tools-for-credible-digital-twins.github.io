<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading><RouterLink to="/introduction">Introduction</RouterLink></template>
    General overview for the workshop.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading><RouterLink to="/standards">Standards</RouterLink></template>
    Introduction to the standards that form the basis for creating credible physiological models, including hands-on tutorials to gain familiarity on using the standards, tools for working with them, and APIs and services.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading
      ><RouterLink to="/modelling-tools">Modelling and simulation tools</RouterLink></template
    >
    Introduction to the tools we will use for modelling and simulation.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading
      ><RouterLink to="/clinical-applications">Clinical applications</RouterLink></template
    >
    Cover the use of the standards and tools to clinically relevant problems.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading><RouterLink to="/reuse">Community and reuse</RouterLink></template>
    Here, we will cover sharing a physiological model with the community in a <a href="https://www.go-fair.org/fair-principles/">FAIR</a> manner.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading><RouterLink to="/publishing">Publishing</RouterLink></template>
    Introducing the <a href="https://journal.physiomeproject.org/">Physiome journal</a>, a key component in encouraging reproducibility and providing evidence for credibility.
  </WelcomeItem>
</template>
