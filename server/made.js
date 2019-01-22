
let express = require('express'),
    app = new express(),
    fs = require('fs'),
    gm = require('gm'),
    UUID = require('uuid');

let BINARYCODE = require('./utils/toBinary').getBinary('h', 'L')
let DRAW =require('./utils/drawUnit') 
let matrerial = require('./config/material');

// 生成二维码
let computedImg = async function () {
    let a = gm('./assets/material/border2.png')
    for (let i = 0; i < BINARYCODE.length; i++) {
        // console.log(BINARYCODE[i])
        for (let j = 0; j < BINARYCODE[i].length; j++) {
            // drawMaterial(a, BINARYCODE[i][j], i, j)
            DRAW.drawMaterialUnit(a, BINARYCODE[i][j], i, j,BINARYCODE[i].length)
            // if (BINARYCODE[i][j]) {
                //    a.draw(`image over ${i * 10},${j * 10},10,10 "./assets/material/eye.png"`) 
            // }
        }
    }
    // await a.draw('image over 10,10,70,70,"./assets/material/col2.png"')
    a.rotate('white', -15) //旋转
    a.write(`./dist/avator${UUID.v1()}.jpg`, function (e) { //设置修改好的路径，UUID.v1()基于时间戳生成唯一标示符
        if (e) {
            // console.log(e.message)
        } else {
            console.log('new Image done')
        }
    });
}

computedImg()

// app.listen(4000, function () {
//     console.log('app is running at 4000')
// });


