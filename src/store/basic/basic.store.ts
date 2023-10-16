import { defineStore } from "pinia";
import { ref } from "vue";

export const useBasicStore = defineStore("basic", () => {
  const token = ref<string>();

  function updateToken(t: string) {
    token.value = t;
  }

  return {
    token,
    updateToken,
  };
});
