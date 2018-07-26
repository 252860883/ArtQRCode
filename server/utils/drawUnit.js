
let matrerial = require('../config/material');

/**
 * draw the position material Unit
 * 绘制单个单位点
 * 
 * @private
 * @param {Object} ctx
 * @param {Number} index
 * @param {Number} row
 * @param {Number} col
 * @return {Number} type
 */
function drawMaterialUnit(ctx, index, row, col) {
    let 
        // unit = 1425 / binaryCode.length,//单元大小
        unit = 1425,//单元大小
        x = 450,//起始x坐标
        y = 450;//起始y坐标
    // switch (index) {
    //     case 1: return ctx.draw(`image over ${x + row * unit},${y + col * unit},${unit * 7},${unit * 7} "./assets/material/eye.png"`); break;//eye
    //     case 2: return ctx.draw(`image over ${x + row * unit},${y + col * unit},${unit * 2},${unit * 3} "./assets/material/row2col3.png"`); break;//row2col3
    //     case 3: return ctx.draw(`image over ${x + row * unit},${y + col * unit},${unit * 3},${unit * 2} "./assets/material/row3col2.png"`); break;//row3col2
    //     case 4: return ctx.draw(`image over ${x + row * unit},${y + col * unit},${unit * 1},${unit * 4} "./assets/material/row4.png"`); break;//row4
    //     case 5: return ctx.draw(`image over ${x + row * unit},${y + col * unit},${unit * 2},${unit * 2} "./assets/material/row2col2.png"`); break;//row2col2
    //     case 6: return ctx.draw(`image over ${x + row * unit},${y + col * unit},${unit * 2},${unit * 2} "./assets/material/corner.png"`); break;//corner
    //     case 7: return ctx.draw(`image over ${x + row * unit},${y + col * unit},${unit * 2},${unit * 1} "./assets/material/col2.png"`); break;//col2
    //     case 8: return ctx.draw(`image over ${x + row * unit},${y + col * unit},${unit * 1},${unit * 2} "./assets/material/row2.png"`); break;//row2
    //     case 9: return ctx.draw(`image over ${x + row * unit},${y + col * unit},${unit * 1},${unit * 1} "./assets/material/single.png"`); break;//single
    //     case 10: return ctx.draw(`image over ${x + row * unit},${y + col * unit},${unit * 3},${unit * 1} "./assets/material/col3.png"`); break;//col3
    // }
}

function getUnitUrl(mName) {
    console.log(matrerial)
}

module.exports = {
    drawMaterialUnit
}