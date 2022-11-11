<script setup>
import { useQuasar } from "quasar";

const $q = useQuasar();
const games = $q.localStorage.getItem("games");

if (games == undefined) $q.localStorage.set("games", []);
</script>

<template>
  <div>
    <router-view />
  </div>
</template>

<style></style>
