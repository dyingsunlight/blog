<template>
  <header>
    <span class="primary">
      <NuxtLink to="/"> Edgest World </NuxtLink>
    </span>
    <small class="byline">
      论如何使用代码释放魔法
    </small>
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
  color: var(--accent);
}
@media only screen and (max-width: 720px) {
  header {
    padding: 16px 0;
  }
  .byline {
    display: none;
  }
}

.byline {
  margin-left: 8px;
  opacity: .7;
}
</style>
