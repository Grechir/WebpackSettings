// здесь задаем правила, по которым будет работать наш линтер
export default [
    {
        files: ["**/*.js", "**/*.cjs", "**/*.mjs"],
        rules: {
            "prefer-const": "warn",
            "no-constant-binary-expression": "error",
        }
    }
];

