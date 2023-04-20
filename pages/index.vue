<template>
  <DefaultHeader></DefaultHeader>
  <hr>
  <main>
    <ContentList path="/p" v-slot="{ list }">
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
  <footer>
    <NuxtLink to="/about"> 关于 </NuxtLink>
  </footer>
</template>

<style lang="less" scoped>
main {
  min-height: 5rem;
}
footer {
  margin-top: 2rem;
}
</style>
