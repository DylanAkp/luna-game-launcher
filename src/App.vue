<script setup>
import { useQuasar } from "quasar";

const $q = useQuasar();
const games = $q.localStorage.getItem("games");

if (games == undefined) $q.localStorage.set("games", []);
</script>

<template>
  <div class="bg">
    <div class="mica">
      <router-view />
    </div>
  </div>
</template>

<style>
body {
  background-color: #202020;
  color: white;
}

.bg {
  background-image: url("background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: fixed;
  height: 100%;
  width: 100%;
  position: absolute;
}

.mica {
  height: 100%;
  width: 100%;

  -webkit-backdrop-filter: blur(40px);
  backdrop-filter: blur(40px);
  background-color: rgb(32, 32, 32, 0.7);
  box-shadow: 0px 25.6px 57.6px rgb(0 0 0 / 14%),
    0px 0px 16.4px rgb(0 0 0 / 12%);
}
</style>
