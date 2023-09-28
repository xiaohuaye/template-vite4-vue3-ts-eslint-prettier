import { router } from "./index";

const whiteList = ["/"];

router.beforeEach(async (to, from, next) => {
  console.log("whiteList", whiteList);
  console.log("to", to);
  console.log("from", from);

  next();
});

/**
 * @description 全局路由守卫
 */
router.afterEach((to, from) => {
  console.log("to", to);
  console.log("from", from);
});

export default router;
