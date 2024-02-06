import antfu from '@antfu/eslint-config'

export default antfu(
  {
    unocss: true,
    formatters: true,
  },
  {
    rules: {
      'yaml/plain-scalar': 'off',
      'no-console': 'off',
      'vue/comma-dangle': 'off',
      'vue/space-unary-ops': 'off',
      'vue/dot-location': 'off',
      'vue/space-infix-ops': 'off',
      'vue/object-curly-newline': 'off',
      'antfu/no-ts-export-equal': 'off',
      'antfu/top-level-function': 'off',
      'antfu/no-cjs-exports': 'off',
    },
  }
)
