<template>
  <div class="error">
      <span>{{errMsg}}</span>
      
  </div>
</template>

<script>
export default {
  props: [],
  data() {
    return {
        errMsg:"这是一个错误"
    };
  }
};
</script>


<style lang="scss">
    .error{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }
</style>
