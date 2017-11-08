<template>
<div>
  <div class="content">
    <div class="left">
      <div class="qrcode-content">
          <div id="qrcode"></div>
          <img class="qrcode-border" :src="this.$store.state.url" v-if="isImgShow">
      </div>
    </div>

    <div class="right">
      <div class="instruction">
        <div class="title">
          <h2>{{this.$store.state.name}}</h2>
          <!-- <span>编号ID:{{lists.codeId}}</span>
          <span>收藏:{{lists.save}}次</span> -->
          <div class="how">
            <span>提示：您可以通过上传黑白二维码或输入链接、文字方式生产ArtQRcode</span>
          </div>
        </div>
      </div>
      <div class="list">
        <list v-on:child-say="isClick"></list>
      </div>
      <textarea  cols="30" rows="10" v-model="text" placeholder="请输入文字或者链接"></textarea>
      <a onclick='javascript:void(0)'><input onclick='javascript:void(0)' type="file" >点击上传二维码图片</a>
      <a @click="madeCode">点击生成艺术码</a>
      <div class="download-group">
        <a v-show="finishMade" @click="downloadImg">下载</a>
        <a v-show="!finishMade" class="unfinish-btn">下载</a>
      </div>
      
    </div>
    
  </div>
    
</div>
</template>

<script>
// import QRCode from "qrcodejs2";
import QRCode from "../core/art-qrcode";
import list from "../components/list";

export default {
  data() {
    return {
      text: "",
      isImgShow: true,
      finishMade: false,
      // UIcomponent: "component1",
      imgSrc: "",
      UIpath: [
        "border",
        "eyeBorder",
        "eyeCenter",
        "col2",
        "row2",
        "single",
        "row2col1",
        "col3"
      ],

      UIcomponents: {
        code1: {
          codeId: "678",
          name: "烘培工坊",
          save: "768552121",
          url: require("../assets/component1/main.jpg"),
          position: {
            top: 77,
            left: 77,
            width: 197,
            height: 197,
            bgWidth: 350,
            bgHeight: 500
          },
          path: {
            border: require("../assets/component1/border.png"),
            eyeBorder: require("../assets/component1/eyeBorder.png"),
            eyeCenter: require("../assets/component1/eyeCenter.png"),
            col2: require("../assets/component1/col2.png"),
            row2: require("../assets/component1/row2.png"),
            single: require("../assets/component1/single.png"),
            row2col1: require("../assets/component1/row2col1.png"),
            col3: require("../assets/component1/col3.png")
          }
        },
        code2: {
          codeId: "678",
          name: "烘培工坊",
          save: "768552121",
          url: require("../assets/component2/main.jpg"),
          position: {
            top: 107,
            left: 99,
            width: 152,
            height: 152,
            bgWidth: 350,
            bgHeight: 500
          },
          path: {
            border: require("../assets/component2/border.jpg"),
            eyeBorder: require("../assets/component2/eyeBorder.png"),
            eyeCenter: require("../assets/component2/eyeCenter.png"),
            col2: require("../assets/component2/col2.png"),
            row2: require("../assets/component2/row2.png"),
            single: require("../assets/component2/single.png"),
            row2col1: require("../assets/component2/row2col1.png"),
            col3: require("../assets/component2/col3.png")
          }
        }
      },
      UIscource: {}
    };
  },
  components: {
    list
  },
  mounted() {
    // let codeId = this.$store.state.codeId;
    // this.lists = this.UIcomponents[codeId];
  },
  created() {
    var self = this;
    // self.newQRCode();
  },
  methods: {
    //判断是否点击了列表图片
    isClick: function() {
      this.isImgShow = true;
      this.finishMade = false;
      document.getElementById("qrcode").innerHTML = "";
    },

    //加载所有的素材文件后执行绘制操作
    madeCode() {
      let qr = [], //存放所有 promise 的状态
        self = this,
        codeId = this.$store.state.codeId,
        UI = self.UIcomponents[codeId];

      self.UIscource["position"] = UI.position;
      for (var key in UI.path) {
        let promise = new Promise(resolve => {
          let value = new Image();
          value.src = UI.path[key];
          self.UIscource[key] = value;
          value.onload = () => {
            resolve();
          };
        });
        qr.push(promise);
      }
      self.UIpath.map((value, index) => {});

      Promise.all(qr).then(() => {
        if (self.text) {
          self.isImgShow = false;
          let promise2 = new Promise(resolve => {
            self.drawQRCode();
            resolve();
          });
          promise2.then(() => {});
        }
      });
    },

    //绘制二维码
    drawQRCode() {
      var self = this;
      document.getElementById("qrcode").innerHTML = "";
      /**
        * QRCode的第一个参数是二维码要绘制到的dom
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
         * 对应每种遍历情况的填充图案
         */
        border: self.UIscource.border,
        eyeBorder: self.UIscource.eyeBorder,
        eyeCenter: self.UIscource.eyeCenter,
        col2: self.UIscource.col2,
        row2: self.UIscource.row2,
        single: self.UIscource.single,
        row2col1: self.UIscource.row2col1,
        col3: self.UIscource.col3
      });

      new Promise(resolve => {
        let a = qrcode.getImgUrl();
        resolve(a);
      }).then(a => {
        self.imgSrc = a;

        self.finishMade = true;
      });
    },
    //下载原图
    downloadImg: function() {

      let self = this,imgData = self.imgSrc;
      imgData = imgData.replace(self.fixType("png"), "image/octet-stream");
      // 下载后的文件名设置
      let filename = "artQrcode_" + new Date().getTime() + "." + "png";
      // 下载
      self.saveFile(imgData, filename);
    },

    //将mime-type改为image/octet-stream
    fixType(type) {
      type = type.toLowerCase().replace(/jpg/i, "jpeg");
      var r = type.match(/png|jpeg|bmp|gif/)[0];
      return "image/" + r;
    },

    /**
     * 在本地进行文件保存
     * @param  {String} data     要保存到本地的图片数据
     * @param  {String} filename 文件名
     */
    saveFile(data, filename) {
      var save_link = document.createElementNS(
        "http://www.w3.org/1999/xhtml",
        "a"
      );
      save_link.href = data;
      save_link.download = filename;

      var event = document.createEvent("MouseEvents");
      event.initMouseEvent(
        "click",
        true,
        false,
        window,
        0,
        0,
        0,
        0,
        0,
        false,
        false,
        false,
        false,
        0,
        null
      );
      save_link.dispatchEvent(event);
    }
  }
};
</script>

<style lang="scss">
@import "../assets/scss/all.scss";
.content {
  width: p(1200px);
  margin: 0 auto;
  display: flex;
  // height: p(600px);

  .right {
    flex: 0 1 50%;
    width: p(700px);
    height: p(400px);
    padding: p(25px) p(25px) p(50px) p(75px);
    .instruction {
      text-align: left;
      .title {
        h2 {
          line-height: p(10px);
        }
        span {
          display: inline-block;
          margin: p(0px) p(10px) p(10px) 0;
        }
      }
      .how {
        width: 100%;
        height: p(30px);
        background: #ddd;
        border-radius: p(5px);
        margin: p(5px) 0;
        text-align: center;
        line-height: p(30px);
        span {
          color: #888;
          font-size: p(14px);
        }
      }
    }
    textarea {
      width: 100%;
      height: p(100px);
      resize: none;
      border: p(2px) solid #ddd;
      border-radius: p(5px);
      padding: p(10px);
      box-sizing: border-box;
      font-size: p(20px);
      margin-top: p(10px);
    }
    a {
      display: inline-block;
      height: p(50px);
      line-height: p(50px);
      background: $bg;
      border-radius: 5px;
      margin: p(5px) auto;
      position: relative;
      &:first-of-type {
        width: 45%;
      }
      &:nth-of-type(2) {
        width: 35%;
      }

      &:hover {
        background: #333;
      }
      input[type="file"] {
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        height: 0;
        height: p(50px);
        width: 100%;
        cursor: pointer;
      }
    }
    .download-group {
      float: right;
      vertical-align: middle;
      width: 18%;
      height: p(50px);
      position: relative;
      a {
        position: absolute;
        top: 0;
        left: 0;
        height: p(50px);
        width: 100%;
      }
      .unfinish-btn {
        background: #999;
      }
    }
    .list {
      // overflow: scroll;
      width: 100%;
      // height: p(300px);
    }
  }

  .left {
    flex: 0 1 40%;
    width: p(400px);
    height: p(500px);
    background: $bg-light;
    border-radius: p(10px);
    padding: p(15px);
    margin: p(15px) auto;
    overflow: hidden;
    .qrcode-content {
      width: p(350px);
      height: 100%;
      background: $bg;
      position: relative;
      background: $bg-light;
      margin: 0 auto;

      .qrcode-border {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        display: block;
        width: p(350px);
        height: auto;
      }
      #qrcode {
        position: absolute;
        top: 0;
        left: 0;
        // margin: p(-70px) 0 0 p(-70px);
        background-size: 50%;
        .qrcodeImg {
          // width: p(300px);
          // height: p(300px);
        }
      }
    }
  }
}
</style>
