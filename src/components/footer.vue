<template>
<div class="foot">
    <div class="main">
        <!-- <span>关于我们</span>
        <span>专属定制</span>
        <span>咨询帮助</span>
        <span>联系我们</span>
        <span>版权</span> -->
    </div>
    <div class="main">
        <span>villion</span>
        <span class='touchLight' @click="toGithub">送我一颗小星星</span>
        <div class="wechat">
            <span class="touchLight" @mouseover="isWXTouch=true" @mouseout="isWXTouch=false">微信交流</span> 
            <div class="imgBorder" v-if="isWXTouch">
                <img src="../assets/main/view2.jpg" alt="">
            </div>
        </div>
    </div>
</div>

</template>
<script>
export default {
  data() {
    return {
      isWXTouch: false
    };
  },
  components: {},
  methods: {
    toGithub() {
      //   this.$router.
      window.location.href = "https://github.com/252860883/Art-QRCode-min";
    }
  }
};
</script>

<style lang="scss">
@import "../assets/scss/all.scss";
.foot {
  // margin-top: p(100px);
  height: p(50px);
  width: 100%;
  background: $bg;
  display: flex;
  position: fixed;
  bottom: 0;
  flex-direction: column;
  justify-content: center;
  .main {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    span {
      flex: 0 1 auto;
      color: $fontcolor;
      font-size: p(10px);
      margin: p(5px) p(20px);
      cursor: pointer;
    }
    .wechat {
      position: relative;
      .imgBorder {
        position: absolute;
        width: 150px;
        height: 150px;
        bottom: 50px;
        left: -25px;
        border: 5px solid #fff;
        border-radius: 10px;
        overflow: hidden;
        img {
          width: 170px;
          position: relative;
          top: -20px;
          left: -10px;
        }
      }
    }
  }
  .touchLight {
    &:hover {
      color: #ffd700;
    }
  }
}
</style>
