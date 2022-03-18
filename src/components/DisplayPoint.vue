<template>
  <div class="display-point">
    <h2 class="title">점수</h2>
    <p class="point">{{ point }}</p>
  </div>
</template>

<script setup>
import { usePointStore } from "../pointer";
import { storeToRefs } from "pinia";

const { point } = storeToRefs(usePointStore());
</script>

<style lang="scss" scoped>
.display-point {
  width: 96px;
  height: 80px;
  border: 2px solid #fff;
  border-radius: 4px;
  overflow: hidden;

  position: absolute;
  top: 20%;
  right: 32px;
}

.title {
  height: 32px;
  line-height: 32px;
  color: #fff;
  border-bottom: 2px solid #fff;
  font-size: 16px;
  text-align: center;
}

.point {
  height: 44px;
  line-height: 48px;
  color: #fff;
  font-size: 32px;
  text-align: center;
}
</style>
