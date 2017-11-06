<template>
<div>
  <div class="content">
    <div class="left">
      <div class="qrcode-content">
        <img class="qrcode-border" :src="lists.url">
          <div id="qrcode"></div>
      </div>
    </div>

    <div class="right">
      <div class="instruction">
        <div class="title">
          <h2>{{lists.name}}</h2>
          <!-- <span>编号ID:{{lists.codeId}}</span>
          <span>收藏:{{lists.save}}次</span> -->
          <div class="how">
            <span>提示：您可以通过上传黑白二维码或输入链接、文字方式生产ArtQRcode</span>
          </div>
        </div>
      </div>
      <div class="list">
        <list ></list>
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
      lists: {
        codeId: "678",
        name: "我爱你",
        save: "768552121",
        url: ""
      },
      text: "",
      UIcomponent: "component1",
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
      UIscource: {},
      backgroundUrl: {
        // background: `url(${url})`
      }
    };
  },
  components: {
    list
  },
  created() {
    this.url = this.lists.url;
    console.log(QRCode);
  },
  mounted() {
    var self = this;
    // self.newQRCode();
  },
  methods: {
    madeCode() {
      this.imgLoad();
    },

    //加载所有的素材文件
    imgLoad() {
      let qr = [], //存放所有 promise 的状态
        self = this;
      self.UIpath.map((value, index) => {
        let promise = new Promise(resolve => {
          let name = value;
          value = new Image();
          value.src = require(`../assets/${self.UIcomponent}/${name}.png`);
          self.UIscource[name] = value;
          value.onload = () => {
            resolve();
          };
        });
        qr.push(promise);
      });

      Promise.all(qr).then(() => {
        self.drawQRCode();
      });
    },

    //绘制二维码
    drawQRCode() {
      var self = this;
      document.getElementById("qrcode").innerHTML = "";
      //
      new QRCode.QRCode(document.getElementById("qrcode"), {
        text: self.text,
        width: 197,
        height: 197,
        bgWidth: 350,
        bgheight: 500,
        top: 77,
        left: 77,
        colorDark: "#6e3805",
        colorLight: "rgba(0,0,0,0)",
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
