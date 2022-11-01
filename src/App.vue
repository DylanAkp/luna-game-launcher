<script setup>
import { useQuasar } from "quasar";

const $q = useQuasar();
const games = $q.localStorage.getItem("games");

if (games == undefined) $q.localStorage.set("games", []);
</script>

<template>
  <router-view />
</template>

<style>
body {
  background-color: #202020;
  color: white;
}
</style>
