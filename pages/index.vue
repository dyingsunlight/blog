<template>
  <DefaultHeader></DefaultHeader>
  <hr>
  <main>
    <ContentList path="/articles/" v-slot="{ list }">
      <ul>
        <li v-for="article in list" :key="article._path">
          <NuxtLink :to="article._path">{{ article.title }}</NuxtLink>
          <span v-if="article.date">
            - {{ article.date }}
          </span>
        </li>
      </ul>
    </ContentList>
  </main>
  <hr>
  <DefaultFooter></DefaultFooter>
</template>

<style lang="less" scoped>
main {
  padding-top: 3rem;
  padding-bottom: 3rem;
}
</style>
<script setup lang="ts">
import DefaultFooter from "~/components/DefaultFooter.vue";
</script>
