<script lang="ts" setup>
import { useScene } from "~/components/ThreeJSPlayground/sence"
import { onMounted, ref } from "vue";
const container = ref<HTMLElement>()
onMounted(() => {
  // const handlers = useScene({})
  if (container.value) {
    useScene({
      container: container.value
    })
  }
})
</script>

<template>
<div> ThreeJS </div>
<div ref="container" style="width: 800px; height: 800px"></div>
</template>

<style scoped>

</style>
