# jest-nuts
## 运行测试用例
1、运行全部测试用例
```
npm run test 或 jest
```
2、运行单个测试用例
```
jest src/ajax.test.js
```
## es6配置 可以写es6+代码
1、安装babel相关的包
```
yarn add --dev babel-jest @babel/core @babel/preset-env
```
2、在工程的根目录下创建babel.config.js
```
// babel.config.js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
```
### 运行ajax.test.js时，需要先启动mock-server文件夹下的server.js文件
```
node node src/mock-server/server.js
```

