<script setup>
import TitleBar from "../components/TitleBar.vue";
import Button from "../components/WinButton.vue";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";

const $router = useRouter();

const $q = useQuasar();
const games = $q.localStorage.getItem("games");

function addGame() {
  if (process.env.MODE === "electron") {
    $router.push("/addgame");
  }
}
</script>

<template>
  <TitleBar></TitleBar>
  <div class="content">
    <div v-if="games.length === 0" class="empty-lib">
      <div>No Games found</div>
      <Button @click="addGame()">Add Game</Button>
    </div>

    <div v-else>Games</div>
  </div>
</template>

<style>
.content {
  color: white;
  width: 100vw;
  height: 100vh;
}

.empty-lib {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90%;
  font-size: 25px;
}
</style>
