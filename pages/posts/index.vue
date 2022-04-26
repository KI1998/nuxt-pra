<template>
  <div>
    <h1>記事一覧</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        {{ post.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const posts = await $axios.$get(
      "https://jsonplaceholder.typicode.com/posts/"
    );
    return { posts };
  },
};
</script>
