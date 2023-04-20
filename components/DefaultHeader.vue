<template>
  <header>
    <span class="primary">
      <NuxtLink to="/"> Edgest World </NuxtLink>
    </span>
    <small class="byline"> nothing there. </small>
  </header>
</template>

<style lang="less" scoped>
header {
  display: flex;
  align-items: baseline;
  padding: 32px 0;
}
.primary {
  margin: 0;
  padding: 0;
  font-size: 2rem;
  color: #841212;
}

.byline {
  margin-left: 8px;
  opacity: .7;
}
</style>
