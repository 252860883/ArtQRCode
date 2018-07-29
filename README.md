![image](http://p70gzm2sm.bkt.clouddn.com/mdBanner%E5%9B%BE.jpg)   

>注意：此项目做了 nodejs 版和纯前端 js 版，分别对应 server 和 client 文件夹下。

### 素材准备
实现好看的艺术二维码首先需要UI的准备，下图是列出的UI规范。透过UI，我想大家应该对艺术二维码的实现有个大概的了解，主要是将传统的黑色填充优化为彩色素材的拼接。

![image](http://wx3.sinaimg.cn/mw690/a73bc6a1ly1fml6ed2m30j20s00gzmz1.jpg)    

>注：图中单位尺寸为 50px ，黑字为该素材在下面的代码中的命名。灰色浅底为辅助展示，实际裁剪时并没有灰色底，裁剪图片一律为png格式的透明底。  

---
## nodejs版
>nodejs版引入了 [gm](https://github.com/aheckmann/gm) 库实现图像的绘制，需要额外安装`imagemagick`和`graphicsmagick`。

### 安装运行
```
cd server

npm install

npm install imagemagick graphicsmagick

node made.js

```

### 目录结构
.
├── assets              // 素材存放目录
│   └── material
├── config
│   └── material.js     // 素材路径文件
├── dist                // 存放生成的素材
├── font
├── node_modules
├── made.js             // 项目的主入口
└── utils
    ├── drawUnit.js     // 绘制单元素材
    └── toBinary.js     // 文字转二进制算法



---
## 前端版
>前端版基于 QRcode.js 的封装，利用vue-cli脚手架搭建。

### 安装
```
cd client 

npm install

npm run dev
```
 

### 合核心代码   
```js
 
/**
 * 组件中引入
 * import QRcode from 'core.js';
 * let qrcode = new QRCode.QRCode(DOMElement, {Options配置});
 */   
 
// 组件中引入配置
let qrcode = new QRCode.QRCode(document.getElementById("qrcode"), {
        /**
         * text：二维码的信息
         */
        text: self.text,
        /**
         * width,height 是二维码区域的长宽
         * bgWidth,bgHeight 是整张背景图片的长宽
         * top,left 是二维码距离整图的坐标距离
         */
        width: self.UIscource.position.width,
        height: self.UIscource.position.height,
        bgWidth: self.UIscource.position.bgWidth,
        bgheight: self.UIscource.position.bgHeight,
        top: self.UIscource.position.top,
        left: self.UIscource.position.left,
        /**
         * 对应每种情况的填充图案
         * 切记需要等图片加载完毕（可以使用 promise.all）再执行绘制的代码，否则会报错
         */
        border: self.UIscource.border,
        eye: self.UIscource.eye,
        row4: self.UIscource.row4,
        row3: self.UIscource.row3,
        row2col3:self.UIscource.row2col3,
        row3col2:self.UIscource.row3col2,
        single: self.UIscource.single,
        row2col2: self.UIscource.row2col2,
        corner:self.UIscource.corner
      });
```  

### 效果展示
#### 界面
![image](http://wx2.sinaimg.cn/mw690/a73bc6a1ly1flv9o0y775j20yj0hpk0d.jpg)  
#### 生成艺术二维码示例：
![image](http://wx2.sinaimg.cn/mw690/a73bc6a1ly1fmeydtz4jej21kw0qzgz6.jpg)

---

### 最后
- 觉得有意思的话，给颗star吧～
- 网罗一线牵，珍惜这段缘
- We meet in the network,please cherish this fate
- 欢迎issue,wechat请扫👇

 ![image](http://wx4.sinaimg.cn/mw690/a73bc6a1ly1fro1yi2i4lj21kw0xhn2i.jpg)
