<template>
  <div>
    <div>count: {{ $store.state.count.count }}</div>
    <button @click="addCount" >Add</button>
  </div>
</template>

<script>
export default {
  methods: {
    addCount() {
      this.$store.dispatch("count/increment");
    }
  }
};
</script>
