<script setup lang="ts">
import DefaultHeader from "~/components/DefaultHeader.vue"
import CCLicense from "~/components/CCLicense.vue";
const props = defineProps<{
  license?: 'cc' | 'reversed',
}>()
</script>

<template>
  <default-header></default-header>
  <main>
    <slot name="main"></slot>
    <ContentDoc v-slot="{ doc }">
      <h3>{{ doc.title }}</h3>
      <article class="post">
        <time v-if="doc.date" datetime="{{ doc.date }}" class="post-date">{{ doc.date }}</time>
        <ContentRenderer :value="doc" />
      </article>
      <hr />
      <template v-if="doc.license === 'cc'">
        <CCLicense></CCLicense>
      </template>
      <hr />
    </ContentDoc>
  </main>
</template>
