<script setup>
import { useQuasar } from "quasar";
import { ref } from "vue";

const $q = useQuasar();
const games = $q.localStorage.getItem("games");
const winX = ref(0);
const winY = ref(0);
const screenX = ref(0);
const screenY = ref(0);

if (games == undefined) $q.localStorage.set("games", []);

function handleMouse() {
  if (process.env.MODE === "electron") {
    const pos = window.getWindowPosition().slice(0, 2);
    winX.value = pos[0] * -1;
    winY.value = pos[1] * -1;
    screenX.value = window.screen.width;
    screenY.value = window.screen.height;
  }
}

handleMouse();
</script>

<template>
  <div class="container" v-touch-pan.mouse="handleMouse">
    <div
      class="background"
      :style="
        'width:' +
        screenX +
        'px; height:' +
        screenY +
        'px; transform: translate(' +
        winX +
        'px, ' +
        winY +
        'px);'
      "
    >
      <div class="blur"></div>
    </div>
    <router-view />
  </div>
</template>

<style>
.container {
  width: 100%;
  height: 100%;
}

.background {
  background-image: url("https://4kwallpapers.com/images/wallpapers/windows-11-dark-mode-blue-stock-official-3840x2400-5630.jpg");
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background-size: cover;
}

.blur {
  background: #202020;
  opacity: 0.5;
  width: 100%;
  height: 100vh;
}
</style>
