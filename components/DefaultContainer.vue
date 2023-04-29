<template>
  <div class="container">
    <slot name="header">
      <DefaultHeader></DefaultHeader>
    </slot>
    <main>
      <slot>
        <slot name="default"></slot>
      </slot>
    </main>
    <slot name="footer">
      <DefaultFooter></DefaultFooter>
    </slot>
    <slot name="background">
      <DotsBackgrounds class="background"></DotsBackgrounds>
    </slot>
  </div>
</template>

<style lang="less" scoped>
main {
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.container {
  width: 100%;
  max-width: 1024px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 2rem;
  backdrop-filter: blur(4px);
  box-shadow: 0 0 2px 2px var(--accent-bg);
}
</style>
