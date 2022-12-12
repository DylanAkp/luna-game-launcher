<script setup>
import { useQuasar } from "quasar";
import { ref } from "vue";

const $q = useQuasar();
const games = $q.localStorage.getItem("games");

function addGame() {
  if (process.env.MODE === "electron") {
    $router.push("/addgame");
  }
}

if (games == undefined) $q.localStorage.set("games", []);
</script>

<template>
  <div class="container">
    <router-view />
  </div>
</template>

<style>
.container {
  width: 100vw;
  height: 100vh;
  background-color: #202124;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
