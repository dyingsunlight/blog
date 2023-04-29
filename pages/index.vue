<template>
<DefaultContainer>
  <ContentList path="/articles/" v-slot="{ list }">
    <ul>
      <li v-for="article in list" :key="article._path">
        <NuxtLink :to="article._path">{{ article.title }}</NuxtLink>
        <small v-if="article.date">
          - {{ article.date }}
        </small>
      </li>
    </ul>
  </ContentList>
</DefaultContainer>
</template>
