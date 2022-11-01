<script setup>
const props = defineProps({
  icon: String,
  buttonType: String,
});
</script>

<template>
  <div :class="'title-buttons ' + props.buttonType">{{ icon }}</div>
</template>

<style scoped>
.close-button:hover {
  background-color: #c42b1c;
  color: white;
}

.min-max-button:hover {
  background-color: #2d2d2d;
  color: white;
}
.title-buttons {
  text-align: center;
  line-height: 30px;
  width: 47px;
  height: 100%;
  font-family: "Segoe MDL2 Assets";
  -webkit-app-region: no-drag;
  color: #9599a2;
}
</style>
