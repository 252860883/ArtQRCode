
let express = require('express'),
    app = new express(),
    fs = require('fs'),
    gm = require('gm'),
    UUID = require('uuid');

let BINARYCODE = require('./utils/toBinary').getBinary('这辈子，我只爱你', 'L')
let DRAW =require('./utils/drawUnit')
let matrerial = require('./config/material');
console.log(matrerial.ELECTRIC)

// 生成二维码
let computedImg = async function () {
    let a = gm('./assets/material/border2.png')
    for (let i = 0; i < BINARYCODE.length; i++) {
        // console.log(BINARYCODE[i])
        for (let j = 0; j < BINARYCODE[i].length; j++) {
            drawMaterial(a, BINARYCODE[i][j], i, j)
            if (BINARYCODE[i][j]) {
                //    a.draw(`image over ${i * 10},${j * 10},10,10 "./assets/material/eye.png"`) 
            }
        }
    }
    // await a.draw('image over 10,10,70,70,"./assets/material/col2.png"')
    // a.rotate('transparent', -30) //旋转
    a.write(`./assets/output/avator${UUID.v1()}.jpg`, function (e) { //设置修改好的路径，UUID.v1()基于时间戳生成唯一标示符
        if (e) {
            console.log(e.message)
        } else {
            console.log('new Image done')
        }
    });
}

/**
 * draw the position material
 * 
 * @private
 * @param {Object} ctx
 * @param {Number} index
 * @param {Number} row
 * @param {Number} col
 * @return {Number} type
 */
function drawMaterial(ctx, index, row, col) {
    let unit = 1425/BINARYCODE.length,//单元大小
        x = 450,//起始x坐标
        y = 450;//起始y坐标
    switch (index) {
        case 1: return ctx.draw(`image over ${x + row * unit},${y + col * unit},${unit * 7},${unit * 7} ${matrerial.ELECTRIC.eye[0]}`); break;//eye
        case 2: return ctx.draw(`image over ${x + row * unit},${y + col * unit},${unit * 2},${unit * 3} "./assets/material/row2col3.png"`); break;//row2col3
        case 3: return ctx.draw(`image over ${x + row * unit},${y + col * unit},${unit * 3},${unit * 2} "./assets/material/row3col2.png"`); break;//row3col2
        case 4: return ctx.draw(`image over ${x + row * unit},${y + col * unit},${unit * 1},${unit * 4} "./assets/material/row4.png"`); break;//row4
        case 5: return ctx.draw(`image over ${x + row * unit},${y + col * unit},${unit * 2},${unit * 2} "./assets/material/row2col2.png"`); break;//row2col2
        case 6: return ctx.draw(`image over ${x + row * unit},${y + col * unit},${unit * 2},${unit * 2} "./assets/material/corner.png"`); break;//corner
        case 7: return ctx.draw(`image over ${x + row * unit},${y + col * unit},${unit * 2},${unit * 1} "./assets/material/col2.png"`); break;//col2
        case 8: return ctx.draw(`image over ${x + row * unit},${y + col * unit},${unit * 1},${unit * 2} "./assets/material/row2.png"`); break;//row2
        case 9: return ctx.draw(`image over ${x + row * unit},${y + col * unit},${unit * 1},${unit * 1} "./assets/material/single.png"`); break;//single
        case 10: return ctx.draw(`image over ${x + row * unit},${y + col * unit},${unit * 3},${unit * 1} "./assets/material/col3.png"`); break;//col3
    }
}

computedImg()

app.get('/', function (req, res) {
    let a = BINARYCODE
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length; j++) {
            if (a[i][j] === true) {
                a[i][j] = 'z'
            }
        }
    }
    res.send(a);
});

app.listen(4000, function () {
    console.log('app is running at 4000')
});


