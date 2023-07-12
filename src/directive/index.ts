import type { App, DirectiveBinding } from "vue";

export const install = (app: App) => {
  /**
   * table滚动加载更多
   * v-loadMore=function
   */
  app.directive("loadMore", {
    mounted(el, binding: DirectiveBinding) {
      const className = binding.value.className;
      const currentElement = el.getElementsByClassName(className);

      if (currentElement[0]) {
        currentElement[0].addEventListener("scroll", () => {
          const { scrollHeight, scrollTop, clientHeight } = currentElement[0];
          const CONDITION =
            Math.floor(scrollHeight - scrollTop - 1) <= clientHeight;
          if (CONDITION) {
            console.log(
              "CONDITION",
              CONDITION,
              Math.floor(scrollHeight - scrollTop - 1),
              clientHeight
            );
            binding.value.callback();
          }
        });
      }
    },
  });
};
