<template>
  <NuxtPage />
</template>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s ease-in-out;
}

.page-enter-from {
  opacity: 0;
  /*transform: translateY(-32px);*/
}
.page-leave-to {
  opacity: 0;
  /*transform: translateY(32px);*/
}
</style>
