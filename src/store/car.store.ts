import { defineStore } from "pinia";
import { ref } from "vue";

export const useCarStore = defineStore("car", () => {
  const wheelNumber = ref<number>(4);

  function changeWheelNumber(n: number) {
    wheelNumber.value = n;
  }

  return {
    wheelNumber,
    changeWheelNumber,
  };
});
