<template>
  <div>
    <nav>
      <nuxt-link to="/">Home</nuxt-link>

<!--   prefetchはviewportに入ったリンクのデータをページにアクセス前に事前に取得できる機能   -->
      <nuxt-link to="/about" no-prefetch>About page not prefetched</nuxt-link>
      <nuxt-link to="/about" :prefetch="false">About page not prefetched</nuxt-link>
      <nuxt-link :to="{ name: 'users-list' }">User List</nuxt-link>
    </nav>
  </div>
</template>
