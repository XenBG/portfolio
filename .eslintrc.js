module.exports = {
    env: {
        browser: true,
        commonjs: true,
        jest: true,
        node: true
    },
    extends: ['eslint:recommended', 'plugin:prettier/recommended', 'plugin:vue/vue3-recommended', 'prettier'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['vue', 'prettier'],
    root: true,
    rules: {
        'comma-dangle': 1,
        'no-unused-vars': 'off',
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto'
            }
        ],
        'vue/html-closing-bracket-newline': ['error', { singleline: 'never', multiline: 'always' }],
        'vue/html-indent': 'off',
        'vue/max-attributes-per-line': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/no-multiple-template-root': 'off',
        'vue/no-v-html': 'off',
        'vue/require-default-prop': 'off',
        'vue/singleline-html-element-content-newline': 'off',
        quotes: ['warn', 'single', { avoidEscape: true }],
        semi: ['warn', 'never']
    }
}
