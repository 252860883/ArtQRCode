

const connect=function(url){
    let mypath = require('path').resolve('assets');
    return `${mypath}${url}`
}

// 电子素材文件
const ELECTRIC = {
    eye: [connect('/material/eye.png')],
    row2col3: [connect('/material/row2col3.png')],
    row3col2: [connect('/material/row3col2.png')],
    row4: [connect('/material/row4.png')],
    row2col2: [connect('/material/row2col2.png')],
    corner: [connect('/material/corner.png')],
    col3: [connect('/material/col3.png')],
    row2: [connect('/material/row2.png'),connect('/material/row2(2).png')],
    single: [connect('/material/single.png'), connect('/material/single(2).png')],
}

module.exports = {
    ELECTRIC
}