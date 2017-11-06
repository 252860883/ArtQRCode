<template>
<div class="top">
  <div class="logo">MAKE ART QRCODE</div>
</div>
  
</template>
<script>
export default {
  data() {
    return {};
  },
  methods:{
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/all.scss";
.top {
  width: 100%;
  background: #444;
  height: p(45px);
  // padding-top: p(15px);
  // box-sizing: border-box;
  .logo {
    line-height: p(45px);
    height: p(21px);
    color: $fontcolor;
  }
}

</style>
