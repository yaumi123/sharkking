// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
module.exports = {
    presets: [
        [
            'taro',
            {
                framework: 'react',
                ts: true,
            },
        ],
    ],
    plugins: [
        [
            'module-resolver',
            {
                root: ['.'],
                alias: {
                    react: 'nervjs',
                    'react-dom': 'nervjs',
                },
            },
        ],
    ],
};
//# sourceMappingURL=babel.config.js.map
//# sourceMappingURL=babel.config.js.map
//# sourceMappingURL=babel.config.js.map