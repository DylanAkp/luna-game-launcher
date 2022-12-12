<script setup>
import TitleBar from "../components/TitleBar.vue";
import Category from "../components/WinCategory.vue";
import Button from "../components/WinButton.vue";
import { ref } from "vue";

const file = ref(null);
</script>

<template>
  <TitleBar></TitleBar>
  <Category icon="" name="Add a new game">
    <div class="elements">
      <div class="interline">
        Select the game you want to add to your library
      </div>
      <q-file
        class="file-opener"
        v-model="file"
        label="Select Your Game"
        type="file"
        accept=".exe"
        max-files="1"
      />
      <div class="interline">Search and select the right game</div>

      <Button>Search the game</Button>
    </div>
  </Category>
</template>

<style scoped>
.file-opener:hover {
  background-color: #48b2eb;
}

.file-opener:active {
  background-color: #47a4d8;
  color: #23526c;
}

.file-opener {
  font-size: 18px;
  background-color: #60cdff;
  text-align: center;
  width: fit-content;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  color: black;
  border-radius: 15px;
}

.button-content {
  font-family: "Segoe UI";
}
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
