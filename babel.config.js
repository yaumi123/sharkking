// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
module.exports = {
  presets: [
    [
      'taro',
      {
        framework: 'nerv',
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
          '@': './src',
        },
      },
    ],
  ],
};
