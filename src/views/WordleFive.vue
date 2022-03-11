<template>
  <button @click="addCount">{{ count }}</button>
  <InputBox />
</template>

<script>
import { onMounted, ref } from "vue";
import WordleManager from "../core/wordle-manager.js";
import InputBox from "../components/InputBox.vue";

export default {
  components: {
    InputBox,
  },
  setup() {
    const count = ref(0); // ref 반응형 변수
    const wordle = new WordleManager();

    console.log(wordle.checkResult("abcde"));

    function addCount() {
      // 함수
      count.value += 1;
    }

    onMounted(() => {
      console.log(count.value); // 0
    });

    return { wordle, count, addCount }; // template에서 반응형으로 사용될 수 있는 묶음
  },

  mounted() {
    console.log(this.count); // 0
  },
};
</script>

<style></style>
