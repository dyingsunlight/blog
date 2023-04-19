<script setup lang="ts">
import DefaultHeader from "./DefaultHeader.vue";
</script>

<template>
  <default-header></default-header>

  <main>
    <slot name="main"></slot>
    <slot></slot>
  </main>
  <footer class="footer">
    <slot name="footer"></slot>
  </footer>
</template>
