<script setup>
import SettingButton from "../components/SettingButton.vue";
import SettingCategory from "../components/SettingCategory.vue";
import TitleBar from "../components/TitleBar.vue";
import { useRouter } from "vue-router";

const $router = useRouter();

function reportIssues() {
  if (process.env.MODE === "electron") {
    window.utilsSettings.reportIssues();
  }
}

function addGame() {
  if (process.env.MODE === "electron") {
    $router.push("/addgame");
  }
}
</script>

<template>
  <TitleBar></TitleBar>
  <SettingCategory icon="" name="Game Management">
    <div class="elements">
      <div class="interline">
        This button allows you to add games to your library
      </div>
      <SettingButton @click="addGame()">Add Game</SettingButton>
      <div class="interline">Remove all games from your library</div>
      <SettingButton>Reset library</SettingButton>
    </div>
  </SettingCategory>
  <SettingCategory icon="" name="Issues">
    <div class="elements">
      <div class="interline">Report issues to the developper</div>
      <SettingButton @click="reportIssues()">Report issues</SettingButton>
    </div>
  </SettingCategory>
</template>

<style scoped>
.elements {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.interline {
  font-size: 15px;
  font-family: "Segoe UI";
  color: white;
}
</style>
