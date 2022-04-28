<template>
  <div>
    <h1>About Page</h1>
    <h2>{{ subtitle }}</h2>
  </div>
</template>

<script>
export default {
  // 各ページでローカル設定を行うことができる。
  head() {
    return {
      title: 'About Page',
    }
  },
  data(){
    return {
      subtitle: "この文書はNuxt.jsの基本的な使用方法について説明しています。"
    }
  },
};
</script>
