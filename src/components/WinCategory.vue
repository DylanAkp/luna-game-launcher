<script setup>
const props = defineProps({
  icon: String,
  name: String,
});
</script>

<template>
  <div class="setting-category">
    <div class="setting-title">
      <span class="icon">{{ icon }}</span>
      <span class="setting-name">{{ name }}</span>
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.setting-name {
  font-family: "Segoe UI";
  font-size: 25px;
}

.icon {
  font-family: "Segoe MDL2 Assets";
  font-size: 20px;
}

.setting-title {
  display: flex;
  width: 100%;
  align-items: center;
  gap: 15px;
  padding-left: 15px;
  padding-right: 15px;
  text-align: left;
  color: white;
}
.setting-category {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 25px;
  padding: 15px;
  background-color: #313235;
  border-radius: 10px;
}
</style>
