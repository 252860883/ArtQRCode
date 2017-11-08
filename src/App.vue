<template>
  <div id="app">
    <headers></headers>
    <router-view/>
    <div>
      <!-- <footers class="foot-content"></footers> -->
    </div>
    
  </div>
</template>

<script>
import headers from '../src/components/header';
import footers from '../src/components/footer';
export default {
  name: 'app',
  components:{
    headers,footers
  }
}
</script>

<style lang="scss">
  @import 'assets/scss/all.scss';

  #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: static;
  height: 100%;
  // overflow: scroll;
  .foot{
    .foot-content{
          position: absolute;
          bottom:0;
    }
  }
}

</style>
