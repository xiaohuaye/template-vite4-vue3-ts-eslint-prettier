import { defineStore } from "pinia";
import { ref } from "vue";

const useStore = defineStore("root", () => {
  const token = ref<string>();

  function updateToken(t: string) {
    token.value = t;
  }

  return {
    token,
    updateToken,
  };
});

export default useStore;
