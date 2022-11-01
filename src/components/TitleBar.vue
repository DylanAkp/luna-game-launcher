<script setup>
import TitleBarButton from "../components/TitleBarButton.vue";
import { useRoute, useRouter } from "vue-router";
import router from "src/router";

const $route = useRoute();
const $router = useRouter();

function minimize() {
  if (process.env.MODE === "electron") {
    window.windowManagement.minimize();
  }
}

function toggleMaximize() {
  if (process.env.MODE === "electron") {
    window.windowManagement.toggleMaximize();
  }
}

function closeApp() {
  if (process.env.MODE === "electron") {
    window.windowManagement.close();
  }
}

function openSettings() {
  if (process.env.MODE === "electron") {
    if ($route.path == "/") $router.push("/settings");
    else $router.push("/");
  }
}
</script>

<template>
  <div class="titlebar">
    <TitleBarButton
      :icon="$route.path == '/' ? '' : ''"
      button-type="min-max-button"
      @click="openSettings()"
    ></TitleBarButton>
    <div class="titlename">Luna Game Launcher</div>
    <div class="spacer"></div>
    <TitleBarButton
      icon=""
      button-type="min-max-button"
      @click="minimize()"
    ></TitleBarButton>
    <TitleBarButton
      icon=""
      button-type="min-max-button"
      @click="toggleMaximize()"
    ></TitleBarButton>
    <TitleBarButton
      icon=""
      button-type="close-button"
      @click="closeApp()"
    ></TitleBarButton>
  </div>
</template>

<style scoped>
.spacer {
  flex-grow: 4;
}

.titlename {
  font-size: 12px;
  margin-left: 10px;
}

.titlebar {
  display: flex;
  font-size: 12px;
  align-items: center;
  width: 100%;
  height: 30px;
  color: white;
  -webkit-app-region: drag;
  font-family: "Segoe UI Variable Text", "Segoe UI";
  user-select: none;
}
</style>
