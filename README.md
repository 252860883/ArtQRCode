![image](http://wx1.sinaimg.cn/large/a73bc6a1ly1fz9rutoazqj21kw0lon0r.jpg)  

>ArtQRCode 是基于 qrcode.js 的封装，支持以图片元素为基本单元的二维码绘制。

## Basic Usages
```
<div id="qrcode"></div>
<script type="text/javascript">
    let qrcode = new QRCode(document.getElementById("qrcode"), {
        text: "https://github.com/252860883/ArtQRCode",
        width: 500,
        height: 500,
        materials: {
            border: "./materials/border.png",
            eye: "./materials/eye.png",
            row4: "./materials/row4.png",
            col4: "./materials/col3.png",
            row2col3: "./materials/row2col3.png",
            row3col2: "./materials/row3col2.png",
            col3: ["./materials/col3.png", "./materials/col3_2.png"],
            row2col2: "./materials/row2col2.png",
            corner: "./materials/corner.png",
            row2: ["./materials/row2.png", "./materials/row2_2.png"],
            col2: "./materials/col2.png",
            single: ["./materials/single.png", "./materials/single_2.png"],
        }
    });
</script>
```


## Productive Example
![image](http://wx2.sinaimg.cn/large/a73bc6a1ly1fmeydtz4jej21kw0qzgz6.jpg)


## Last
- 觉得有意思的话，给颗star吧～
- 网罗一线牵，珍惜这段缘
- We meet in the network,please cherish this fate
- 欢迎issue
