
let express = require('express'),
    app = new express(),
    fs = require('fs'),
    gm = require('gm'),
    UUID = require('uuid');
// 转二进制
let binaryCode = require('./toBinary').getBinary('www.baidu.com')
// console.log(binaryCode)

// 生成二维码
function computedImg() {
    let a = gm('./assets/avator.jpg')
        .font('./font/font.otf')    //设置字体
        .fontSize(20)
        .drawText(50, 150, 'get my love') //设置水印
        .rotate('purple', 5) //旋转
        .borderColor('pink')
        .border(10, 10) //边框
        .fill('#ffffff')
        .drawRectangle(0,0,200,200)
    for (let i = 0; i < binaryCode.length; i++) {
        for(let j=0;j<binaryCode[i].length;j++){
            console.log(binaryCode[i][j]) 
            if(binaryCode[i][j]){
                a.draw(`image over ${i*5},${j * 5},5,5 "./assets/black.jpg"`) //叠加图片
                // a.fill('#000')
                // a.drawRectangle(`${i*50},${j * 50},50,50`) //画矩形
            }
        }
       
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


