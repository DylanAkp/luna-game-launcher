<script setup>
const props = defineProps({
  icon: String,
});
</script>

<template>
  <div class="setting-buttons button-box">
    <span class="icon">
      {{ icon }}
    </span>
    <span class="button-content">
      <slot></slot>
    </span>
  </div>
</template>

<style scoped>
.button-box:hover {
  background-color: #48b2eb;
}

.button-box:active {
  background-color: #47a4d8;
  color: #23526c;
}

.button-content {
  font-family: "Segoe UI";
}

.icon {
  font-family: "Segoe MDL2 Assets";
}
.setting-buttons {
  font-size: 18px;
  background-color: #60cdff;
  text-align: center;
  width: fit-content;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  color: black;
  border-radius: 5px;
}
</style>
