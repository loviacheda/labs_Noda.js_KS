module.exports = {
    env: {
        node: true,
        es2021: true,
    },
    plugins: ["sonar","prettier" ],
    extends: [
        "airbnb/base",
        "plugin:sonar/recommended",
        "prettier",
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    globals: {
        Response: 'readonly',
    },
    rules: {},
}