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
        <span>送我一颗小星星</span>
        <span>微信打call</span>
    </div>
</div>

</template>
<script>
export default {
  data(){
      return{

      }
  },
  components:{
     
  }
}
</script>

<style lang="scss">
@import "../assets/scss/all.scss";
.foot{
    // margin-top: p(100px);
    height: p(50px);
    width: 100%;
    background: $bg;
    display: flex;
    position: fixed;
    bottom: 0;
    flex-direction: column;
    justify-content: center;
    .main{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        span{
            flex: 0 1 auto;
            color: $fontcolor;
            font-size: p(10px);
            margin: p(5px) p(20px);
            cursor: pointer;
        }
    }
}
</style>
