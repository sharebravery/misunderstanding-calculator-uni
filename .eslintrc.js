/*
 * @Description: ^_^
 * @Author: sharebravery
 * @Date: 2023-05-22 17:33:45
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    '@antfu',
    '@unocss',
  ],
  rules: {
    'no-console': 0,
    // '@typescript-eslint/semi': ['error', 'always'],
    // '@typescript-eslint/member-delimiter-style': ['error', {
    //   multiline: {
    //     delimiter: 'semi',
    //     requireLast: true,
    //   },
    //   singleline: {
    //     delimiter: 'semi',
    //     requireLast: false,
    //   },
    // }],
    'vue/v-on-event-hyphenation': 0,
    'prefer-regex-literals': 0,
    'no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^_', // 忽略以下划线开头的变量
        argsIgnorePattern: '^_', // 忽略以下划线开头的参数
      },
    ],
  },
}
