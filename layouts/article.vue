<script setup lang="ts">
import DefaultHeader from "~/components/DefaultHeader.vue"
import CCLicense from "~/components/CCLicense.vue"
</script>

<template>
  <DefaultHeader></DefaultHeader>
  <main>
    <ContentDoc v-slot="{ doc }">
      <h1>{{ doc.title }}</h1>
      <time v-if="doc.date" datetime="{{ doc.date }}">{{ doc.date }}</time>
      <hr />
      <article>
        <ContentRenderer :value="doc" />
      </article>
      <template v-if="doc.license === 'cc'">
        <hr />
        <CCLicense></CCLicense>
        <hr />
      </template>
    </ContentDoc>
  </main>
</template>

<style lang="less" scoped>
main > h1 {
  margin-top: 0;
  margin-bottom: .5rem;
}
main > time {
  color: var(--text-light);
}
</style>
