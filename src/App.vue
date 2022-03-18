<template>
  <WordleNav />
  <div class="wordle-board">
    <router-view />
  </div>
</template>

<script setup>
import WordleNav from "./components/WordleNav.vue";
</script>

<style lang="scss" scoped>
.wordle-board {
  height: calc(100% - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
</style>
