# Art-QRCode-min
### 说明
这版先做一个纯js合成艺术二维码的缩减版，暂时只能通过输入文字生成，后续会实现一个前后端分离的项目，实现更复杂的功能.  

目前暂时只设计了三款二维码，后续可能会依次上传，稍后会附上设计规范，可以自行设计上传。  
  
demo请戳：http://www.duhonghui.top/artqrcode/#/
### 前提
核心生成代码，基于QRcode.js进行封装，canvas实现艺术图案填充  
vue全家桶  
...
  
### 素材尺寸以及命名说明

![image](http://wx3.sinaimg.cn/mw690/a73bc6a1ly1fml6ed2m30j20s00gzmz1.jpg)    

图中单位尺寸为 50px ，黑字为该素材在下面的代码中的命名。    

注：灰色浅底为辅助展示，实际裁剪时并没有灰色底，裁剪图片一律为png格式的透明底。

合成二维码代码:
```js
 
/**
 * 组件中引入
 * import QRcode from 'core.js';
 * let let qrcode = new QRCode.QRCode(DOMElement, {Options配置});
 */
 
// 组件中引入配置
let qrcode = new QRCode.QRCode(document.getElementById("qrcode"), {
        /**
         * text：二维码的信息
         */
        text: self.text,
        /**
         * width,height 是二维码的长宽
         * bgWidth,bgHeight 是整张图片的大小
         * top,left 是二维码距离整图的距离
         */
        width: self.UIscource.position.width,
        height: self.UIscource.position.height,
        bgWidth: self.UIscource.position.bgWidth,
        bgheight: self.UIscource.position.bgHeight,
        top: self.UIscource.position.top,
        left: self.UIscource.position.left,
        /**
         * 对应每种情况的填充图案
         * 切记需要等图片加载完毕再执行绘制的代码，否则会报错
         */
        border: self.UIscource.border,//背景图的图片资源
        eyeBorder: self.UIscource.eyeBorder,//码眼的边框
        eyeCenter: self.UIscource.eyeCenter,//码眼的中心
        col2: self.UIscource.col2,
        row2: self.UIscource.row2,
        single: self.UIscource.single,
        row2col1: self.UIscource.row2col1,
        col3: self.UIscource.col3
      });
```

### 功能介绍
选择二维码样式  
输入链接或者文字    
点击生成艺术二维码  
导出高清图片  

### 待优化
识别图片二维码  
海报编辑改字模板  
二维码名片设计  
. . .

### 效果图
#### 界面
![image](http://wx2.sinaimg.cn/mw690/a73bc6a1ly1flv9o0y775j20yj0hpk0d.jpg)  
#### 生成艺术二维码示例：
![image](http://wx2.sinaimg.cn/mw690/a73bc6a1ly1fmeydtz4jej21kw0qzgz6.jpg)


### 项目总结
请戳![项目总结](问题汇总.md)


