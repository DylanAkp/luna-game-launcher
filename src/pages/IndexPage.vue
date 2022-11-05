<script setup>
import { defineComponent } from "vue";
import TitleBar from "../components/TitleBar.vue";
import { useQuasar } from "quasar";

const $q = useQuasar();
const games = $q.localStorage.getItem("games");
</script>

<template>
  <TitleBar></TitleBar>
  <div>{{ games }}</div>
</template>

<style></style>
