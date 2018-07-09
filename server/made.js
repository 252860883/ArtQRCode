
let express = require('express'),
    app = new express(),
    fs = require('fs'),
    gm = require('gm'),
    UUID=require('uuid');

let toBinary =require('./toBinary')
// 生成二维码的布尔值
// console.log(toBinary.getBinary('666'))
 
function computedImg() {
    let a = gm('./assets/avator.jpg')
        .font('./font/font.otf')    //设置字体
        .fontSize(20)
        .drawText(50, 150, 'get my love') //设置水印
        .rotate('purple', 5) //旋转
        .borderColor('pink')
        .border(10, 10) //边框
        .fill('#ffffff')
        .drawRectangle(260, 260, 300, 360) //画矩形

    for (let i = 0; i < 10; i++) {
        a.draw(`image over ${i * 80},${i * 40},50,50 "./assets/wechat.png"`) //叠加图片
    }
    a.write(`./assets/output/avator${UUID.v1()}.jpg`, function (e) { //设置修改好的路径，UUID.v1()基于时间戳生成唯一标示符
        if (e) {
            console.log(e.message)
        } else {
            console.log('new Image done')
        }
    });
}

computedImg()

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.listen(4000, function () {
    console.log('app is running at 4000')
});


