module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:import/warnings",
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["vue", "@typescript-eslint", "import"],
  rules: {
    "no-new": "error",
    "no-new-func": "error",
    "no-throw-literal": "error",
    "no-useless-rename": "error",

    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    // vue computed中 是否可以使用其副作用(现在先为warn，后期为error)
    "vue/no-side-effects-in-computed-properties": "warn",
    // 忽略花括号在同一行（内容也就在同一行了）的语句块中的最后一个分号
    semi: ["error", "always"],
    // 不考虑缩进
    "no-tabs": [
      "error",
      {
        allowIndentationTabs: true,
      },
    ],
    // 同一行时，最后一个逗号不需要
    "comma-dangle": ["error", "always-multiline"],
    // 可以使用any
    "@typescript-eslint/no-explicit-any": "off",
    // 强制在 function的左括号之前使用一致的空格
    "space-before-function-paren": [
      "warn",
      { anonymous: "always", named: "never", asyncArrow: "always" },
    ],
    // 类型导入使用 import type
    "@typescript-eslint/consistent-type-imports": "error",
    // getter和setter必须成对出现
    "accessor-pairs": "error",
    // 把 var 语句看作是在块级作用域范围之内
    "block-scoped-var": "error",
    // 强制使用 ===
    eqeqeq: ["error", "always"],
    // 禁用 eval()
    "no-eval": "error",
    // 禁止不必要的函数绑定
    "no-extra-bind": "error",
    // 禁用标签语句
    "no-labels": "error",
    curly: "off",
    // 此规则的目的是在 switch 语句中强制声明 default 分支， 确实没有可以在最后一个 case 分支下，使用
    // no default 来表明此处不需要 default 分支。注释可以任何形式出现，比如 // No Default。
    "default-case": "error",
    // 该规则旨在强制成员表达式中强制换行的一致性。防止既在点号操作之前也在之后使用换行符。
    "dot-location": ["error", "property"],
    // 当 for in 循环没有使用 if 语句对结果进行筛选时，该规则将会发出警告。 -- if (Object.prototype.hasOwnProperty.call(foo, key)) {}
    "guard-for-in": "error",
    // 禁用 alert、confirm 和 prompt
    "no-alert": "error",
    // 禁止对 function 的参数进行重新赋值
    "no-param-reassign": "error",
    // 强制使用骆驼拼写法命名约定
    camelcase: "error",
    // 不允许多个空行
    "no-multiple-empty-lines": "error",
    // 要求使用 let 或 const 而不是 var
    "no-var": "error",
    // 超过3个元素数组换行
    "array-element-newline": ["error", "consistent"],
    // 可以出现未使用过的表达式
    "no-unused-expressions": "off",
    // return 表达式时提出警告
    "no-return-assign": "error",
    // todo 可以使用后再定义
    "no-use-before-define": "off",
    // 禁止多余的 return 语句
    "no-useless-return": "error",
    // 禁止不必要的字符串字面量或模板字面量的连接
    "no-useless-concat": "error",

    "vue/v-on-event-hyphenation": "off",

    "vue/attribute-hyphenation": "off",

    "vue/component-definition-name-casing": "off",

    indent: "off",

    "vue/no-v-html": "off",

    "@typescript-eslint/no-duplicate-enum-values": "off",

    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],

    "newline-per-chained-call": "off",

    "function-paren-newline": "off",

    "no-extra-parens": "off",

    "quote-props": ["error", "as-needed"],

    // import 语句排序分组
    "import/order": [
      "warn",
      {
        groups: [
          [
            "index",
            "external",
            "sibling",
            "parent",
            "internal",
            "builtin",
            "object",
            "type",
          ],
        ],
        pathGroups: [
          {
            pattern: "vue",
            group: "index",
          },
          {
            pattern: "ant-design-vue/**",
            group: "external",
          },
          {
            pattern: "@v100/**",
            group: "external",
          },
          {
            pattern: "@/type",
            group: "type",
          },
          {
            pattern: "@",
            group: "internal",
          },
        ],
        pathGroupsExcludedImportTypes: ["vue", "@v100", "@poct"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        jest: true,
      },
    },
  ],
  root: true,
  globals: {
    NodeJS: true,
    NodeListOf: true,
  },
};
