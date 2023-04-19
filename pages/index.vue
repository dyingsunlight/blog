<script lang="ts" setup>
import DefaultContainer from "~/components/DefaultContainer.vue"
</script>

<template>
  <default-container>
    <ContentList path="/" v-slot="{ list }">
      <div v-for="article in list" :key="article._path">
        <NuxtLink :to="article._path">{{ article.title }}</NuxtLink>
      </div>
    </ContentList>
  </default-container>
</template>
