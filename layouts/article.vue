<template>
  <ContentDoc v-slot="{ doc, isHideFooter }">
    <DefaultContainer>
      <template #default>
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
      </template>
      <template #footer>
        <div v-if="doc.isHideFooter"></div>
      </template>
    </DefaultContainer>
  </ContentDoc>

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
