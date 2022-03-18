import { defineStore } from "pinia";

export const usePointStore = defineStore("point", {
  state: () => ({ point: 0 }), // 상태
  actions: {
    increasePoint(point) {
      this.point += point;
    },
    decreasePoint(point) {
      this.point -= point;
    },
  },
});
