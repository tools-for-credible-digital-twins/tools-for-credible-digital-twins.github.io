<template>
  <div class="container">
    <header>
      <slot name="header"></slot>
    </header>

    <div class="main-container">
      <aside><slot name="aside"></slot></aside>
      <main>
        <slot></slot>
      </main>
    </div>
  </div>
</template>

<style scoped>
@import url('../assets/docspage.css');

header {
  z-index: 10;
}
.container {
  margin: 0 5%;
}

.main-container {
  display: flex;
  justify-content: space-between;
}

aside {
  --offset: var(--header-size);
  padding-right: 2rem;
  position: sticky;
  top: var(--offset);
  max-height: calc(100vh - var(--offset) * 2);
}

main {
  overflow-y: auto;
}

section img {
  max-width: 75%;
  margin-left: auto;
  margin-right: auto;
  display: block;
}

@media (min-width: 1024px) {
  .container {
    margin: 0 10%;
  }
}
</style>
