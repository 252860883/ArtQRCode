<template>
<transition name="error">
  <div class="error">
      <div class="con">
          <img src="../assets/error.png">
          <span>{{errMsg}}</span>
      </div>
  </div>
</transition>

</template>

<script>
export default {
  props: ['errorMsg'],
  data() {
    return {
      errMsg: this.errorMsg,
    };
  },
  watch:{
      errorMsg(){
          this.errMsg=this.errorMsg;
      }
  }
};
</script>

<style lang="scss">
.error {
    z-index: 100;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  margin: auto;
  .con {
    background: rgba(0, 0, 0, 0.7);
    padding: 15px;
    border-radius: 10px;
    line-height: 1;
    img {
      vertical-align: middle;
      width: 50px;
      height: 50px;
    }
    span {
      vertical-align: middle;
      display: inline-block;
      color: #ddd;
      font-size: 20px;
      font-weight:400;
      margin-left: 10px;
    }
  }
}
.error-enter,.error-leave-to{
    opacity: 0;
}
.error-enter-active,.error-leave-active{
    transition: all .5s;
}
</style>
