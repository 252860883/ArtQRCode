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
      <a onclick='javascript:void(0)'>点击上传二维码图片</a>
      <a @click="madeCode">点击生成艺术码</a>
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
      isImgShow:true,
      // UIcomponent: "component1",
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
    //
    isClick:function(){
      this.isImgShow=true;
      document.getElementById("qrcode").innerHTML = "";
    },

    madeCode() {
      this.imgLoad();
    },

    //加载所有的素材文件
    imgLoad() {
      let qr = [], //存放所有 promise 的状态
        self = this,
        codeId = this.$store.state.codeId,
        UI = self.UIcomponents[codeId];
      self.UIscource['position'] = UI.position;
      console.log(self.UIscource);

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
        
        if(self.text){
          self.isImgShow=false;
          self.drawQRCode();
        }
      });
    },

    //绘制二维码
    drawQRCode() {
      var self = this;
      document.getElementById("qrcode").innerHTML = "";
      new QRCode.QRCode(document.getElementById("qrcode"), {
        text: self.text,
        width: self.UIscource.position.width,
        height: self.UIscource.position.height,
        bgWidth: self.UIscource.position.bgWidth,
        bgheight: self.UIscource.position.bgHeight,
        top: self.UIscource.position.top,
        left: self.UIscource.position.left,
        // correctLevel : QRCode.CorrectLevel.H,
        border: self.UIscource.border,
        eyeBorder: self.UIscource.eyeBorder, //码眼边框
        eyeCenter: self.UIscource.eyeCenter,
        col2: self.UIscource.col2,
        row2: self.UIscource.row2,
        single: self.UIscource.single,
        row2col1: self.UIscource.row2col1,
        col3: self.UIscource.col3
        // imgBorder:""
      });
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
      width: 33%;
      height: p(50px);
      line-height: p(50px);
      background: $bg;
      border-radius: 5px;
      margin: p(5px) auto;
      &:first-of-type {
        width: 65%;
      }
      &:hover {
        background: #444;
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
      background: $bg;
      position: relative;
      line-height: p(500px);
      margin: 0 auto;
      // top: 50%;
      // transform: translateY(-50%);
      transition: all 0.1s;
      -webkit-backface-visibility: hidden;
      .qrcode-border {
        display: block;
        width: p(350px);
        height: auto;
      }
      #qrcode {
        position: absolute;
        // top: p(77px);
        // left: p(77px);
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
