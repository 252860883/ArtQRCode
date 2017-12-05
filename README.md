# Art-QRCode-min
### 说明
这版先做一个纯js合成艺术二维码的缩减版，暂时只能通过输入文字生成，后续会实现一个前后端分离的项目，实现更复杂的功能.  
demo请戳：http://www.duhonghui.top/artqrcode/#/
### 前提
核心生成代码，基于QRcode.js进行封装，canvas实现艺术图案填充  
vue全家桶  

合成二维码的代码:
<pre>
/**
 * import QRcode from 'core.js';
 * let let qrcode = new QRCode.QRCode(DOMElement, {Options配置});
 */

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
</pre>

### 功能
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
![image](http://wx4.sinaimg.cn/mw690/a73bc6a1ly1flv9oyf8h2j20jg0rswnw.jpg)
![image](http://wx2.sinaimg.cn/mw690/a73bc6a1ly1flv9oyykfdj20jg0rs0wk.jpg)
![image](http://wx4.sinaimg.cn/mw690/a73bc6a1ly1flv9p0poa9j20jg0rs1kx.jpg)



### 项目总结
请戳![项目总结](问题汇总.md)


