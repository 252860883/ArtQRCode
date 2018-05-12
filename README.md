# Art-QRCode-min      
### 说明
- 这版先做一个纯js合成艺术二维码的缩减版，暂时只能通过输入文字生成，后续会实现一个前后端分离的项目，实现更复杂的功能.  

- 目前暂时只设计了三款二维码，后续可能会依次上传，稍后会附上设计规范，可以自行设计上传。  
  
- 查看demo请戳：http://www.duhonghui.top/artqrcode/#/

- 生成代码是基于QRcode.js进行封装的，利用canvas实现艺术图案填充，vue全家桶构建...
---
  
### 素材尺寸以及命名规范
![image](http://wx3.sinaimg.cn/mw690/a73bc6a1ly1fml6ed2m30j20s00gzmz1.jpg)    

图中单位尺寸为 50px ，黑字为该素材在下面的代码中的命名。    

注：灰色浅底为辅助展示，实际裁剪时并没有灰色底，裁剪图片一律为png格式的透明底。  

---

### 合成二维码代码
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
         * 切记需要等图片加载完毕（可以使用 promis.all）再执行绘制的代码，否则会报错
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
---
### 功能
选择二维码样式  
输入链接或者文字    
点击生成艺术二维码  
导出高清图片  

---
### 待优化
识别图片二维码  
海报编辑改字模板  
二维码名片设计  
. . .

---
### 效果展示
#### 界面
![image](http://wx2.sinaimg.cn/mw690/a73bc6a1ly1flv9o0y775j20yj0hpk0d.jpg)  
#### 生成艺术二维码示例：
![image](http://wx2.sinaimg.cn/mw690/a73bc6a1ly1fmeydtz4jej21kw0qzgz6.jpg)

---

### 项目总结
请戳![项目总结](问题汇总.md)


