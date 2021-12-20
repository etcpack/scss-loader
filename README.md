<p align='center'>
    <a href='https://ectpack.github.io/api' target='_blank'>
        <img src='./logo.png'>
    </a>
</p>

# scss-loader
📦 scss文件编译成css的loader，导入的文本可以是scss或者css

<p>
  <a href="https://hai2007.gitee.io/npm-downloads?interval=7&packages=@etcpack/scss-loader"><img src="https://img.shields.io/npm/dm/@etcpack/scss-loader.svg" alt="downloads"></a>
  <a href="https://www.npmjs.com/package/@etcpack/scss-loader"><img src="https://img.shields.io/npm/v/@etcpack/scss-loader.svg" alt="Version"></a>
  <a href="https://github.com/etcpack/scss-loader/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/@etcpack/scss-loader.svg" alt="License"></a>
  <a href="https://github.com/etcpack/scss-loader" target='_blank'><img alt="GitHub repo stars" src="https://img.shields.io/github/stars/etcpack/scss-loader?style=social"></a>
</p>

## Issues
使用的时候遇到任何问题或有好的建议，请点击进入[issue](https://github.com/etcpack/scss-loader/issues)！

## How to use?

```
npm install --save-dev @etcpack/scss-loader
```

然后在```etcpack.config.js```的```loader```配置项中添加，例如：

```js
loader: [{
    test: /\.(scss|css)$/,
    handler: ['@etcpack/scss-loader']
}]
```

开源协议
---------------------------------------
[MIT](https://github.com/etcpack/scss-loader/blob/master/LICENSE)

Copyright (c) 2021 [hai2007](https://hai2007.gitee.io/sweethome/) 走一步，再走一步。
