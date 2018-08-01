
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
function drawMaterialUnit(ctx, index, row, col, length) {
    let
        unit = 1425 / length,//单元大小
        x = 450,//起始x坐标
        y = 470;//起始y坐标
    switch (index) {
        case 1: return ctx.draw(`image over ${x + row * unit},${y + col * unit},${unit * 7},${unit * 7} ${getUnitUrl("eye")}`); break;//eye
        case 2: return ctx.draw(`image over ${x + row * unit},${y + col * unit},${unit * 2},${unit * 3} ${getUnitUrl("row2col3")}`); break;//row2col3
        case 3: return ctx.draw(`image over ${x + row * unit},${y + col * unit},${unit * 3},${unit * 2} ${getUnitUrl("row3col2")}`); break;//row3col2
        case 4: return ctx.draw(`image over ${x + row * unit},${y + col * unit},${unit * 1},${unit * 4} ${getUnitUrl("row4")}`); break;//row4
        case 5: return ctx.draw(`image over ${x + row * unit},${y + col * unit},${unit * 2},${unit * 2} ${getUnitUrl("row2col2")}`); break;//row2col2
        case 6: return ctx.draw(`image over ${x + row * unit},${y + col * unit},${unit * 2},${unit * 2} ${getUnitUrl("corner")}`); break;//corner
        case 7: return ctx.draw(`image over ${x + row * unit},${y + col * unit},${unit * 2},${unit * 1} ${getUnitUrl("col2")}`); break;//col2
        case 8: return ctx.draw(`image over ${x + row * unit},${y + col * unit},${unit * 1},${unit * 2} ${getUnitUrl("row2")} `); break;//row2
        case 9: return ctx.draw(`image over ${x + row * unit},${y + col * unit},${unit * 1},${unit * 1} ${getUnitUrl("single")}`); break;//single
        case 10: return ctx.draw(`image over ${x + row * unit},${y + col * unit},${unit * 3},${unit * 1} ${getUnitUrl("col3")} `); break;//col3
    }
}

function getUnitUrl(mName) {
    let matrerialArr = matrerial.ELECTRIC[mName];
    let index = parseInt(Math.random() * matrerialArr.length)
    return matrerialArr[index]
}

module.exports = {
    drawMaterialUnit
}