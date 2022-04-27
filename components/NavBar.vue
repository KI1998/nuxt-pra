<template>
  <div>
    <nav>
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/about" no-prefetch>About</nuxt-link>
      <nuxt-link :to="{ name: 'users-list' }">User List</nuxt-link>
    </nav>
  </div>
</template>
