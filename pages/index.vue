<template>
  <div>
    <h1>Pluginの動作確認</h1>
    <button v-tooltip="'TOPにメッセージが表示される'" >TOP</button>
  </div>
</template>

<script>
export default {};
</script>

<style>
.tooltip {
  display: block !important;
  padding: 4px;
  z-index: 10000;
}

.tooltip .tooltip-inner {
  background: black;
  color: white;
  border-radius: 16px;
  padding: 5px 10px 4px;
}

.tooltip .tooltip-arrow {
  display: none;
}

.tooltip[aria-hidden="true"] {
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.15s, visibility 0.15s;
}

.tooltip[aria-hidden="false"] {
  visibility: visible;
  opacity: 1;
  transition: opacity 0.15s;
}

.tooltip.danger .tooltip-inner {
  background: red;
}

.tooltip.caution .tooltip-inner {
  background: yellow;
  color: black;
}
</style>
