<template>
  <div class="wordle-six">
    <div class="wordle-tiles">
      <InputLine
        v-for="idx in ROWS"
        :key="idx"
        :rowNumber="idx"
        :wordle="wordle"
        :rows="ROWS"
        :columns="COLUMNS"
        @result-displayed="(isSuccess) => checkGameOver(idx, isSuccess)"
      />
    </div>
    <AnswerSheet :is-game-over="isGameOver" :wordle="wordle" />
    <DisplayPoint />
  </div>
</template>

<script setup>
import { ref } from "vue";
import WordleManager from "../core/wordle-manager.js";
import { usePointStore } from "../pointer";

import InputLine from "../components/InputLine.vue";
import AnswerSheet from "../components/AnswerSheet.vue";
import DisplayPoint from "../components/DisplayPoint.vue";

const ROWS = 5;
const COLUMNS = 6;
const { increasePoint } = usePointStore();

const wordle = new WordleManager(COLUMNS);
const isGameOver = ref(false);

const checkGameOver = (idx, isSuccess) => {
  if (idx === ROWS || isSuccess) {
    isGameOver.value = true;
    increasePoint(ROWS - idx + 1);
  }
  // 원래 위치에 전달
  // 다음 요소 활성화
};
</script>

<style lang="scss" scoped>
.wordle-six {
  width: 474px; // 64 * 6 + 18 * 5
}

.wordle-tiles {
  width: 100%;
  height: 416px; // 64 * 5 + 24 * 4
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
