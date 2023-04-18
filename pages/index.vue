<template>
  <main>
    <ContentList path="/" v-slot="{ list }">
      <div v-for="article in list" :key="article._path">
        <h2>{{ article.title }}</h2>
        <NuxtLink :to="article._path">{{ article.title }}</NuxtLink>

      </div>
    </ContentList>
  </main>
</template>

<script lang="ts" setup>
definePageMeta({
  name: "Home"
})
</script>
