const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Production',
        }),
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'), // прямой путь к папке dist
        clean: true, // Удаляет старые файлы перед сборкой
    },
    optimization: {
        minimize: true, // Хотя режим production и имеет встроенный минимизатор, но так
    }                   // можно использовать кастомные настройки
};