<template>
  <div class="view-content" >
        <div class="col-view-border" v-for=" view in views" :key="view.url" @click="toMadeCode(view)">
            <div class="instruction">
                <span class="name">{{view.name}}</span><br>
                <div class="number">
                    <!-- <span>{{view.click}}</span>
                    <span>{{view.save}}</span> -->
                </div>
            </div>
            <img :src="view.url" >
        </div>
    </div>         
</template>

<script>
export default {
  data() {
    return {
      views: [
        {
          codeId: "1",
          url: require("../assets/component1/main.jpg"),
          name: "烘培工坊",
          click: "4666",
          save: "687"
        },
        {
          codeId: "2",
          url: require("../assets/main/view1.jpg"),
          name: "幽径紫夜月",
          click: "66666",
          save: "8765"
        },
        {
          codeId: "3",
          url: require("../assets/main/view2.jpg"),
          name: "疯狂动物城",
          click: "6952",
          save: "878"
        },
        
        {
          codeId: "4",
          url: require("../assets/main/view4.jpg"),
          name: "猫狗大战",
          click: "946",
          save: "105"
        },
        {
          codeId: "5",
          url: require("../assets/main/view6.jpg"),
          name: "简约方块拼凑风",
          click: "946",
          save: "105"
        }
      ]
    };
  },
  methods: {
    toMadeCode(view) {
      // console.log(id);
      // this.$router.push({ path: "/madeCode", query: { codeId: view.codeId,url:view.url,save:view.save,name:view.name} });
    }
  }
};
</script>

<style lang="scss">
@import "../assets/scss/all.scss";

.view-content {
  width: p(700px);
  height: p(230px);
  margin: p(10px) 0;
  overflow: auto;

  .col-view-border {
    display: inline-block;
    float: left;
    height: p(225px);
    border: p(1px) solid $bordercolor;
    border-radius: p(5px);
    margin: p(12px);
    margin-top: 0;
    background: #fff;
    position: relative;
    overflow: hidden;
    img {
      width: p(140px);
      height: 100%;
      background-size: contain;
      cursor: pointer;
      transition: all 0.1s;
      -webkit-backface-visibility: hidden;
      &:hover {
        opacity: 0.9;
      }
    }
    .instruction{
      display: none;
    }
    &:hover {
      .instruction {
        display: inline-block;
        opacity: 0.9;
        height: p(25px);
        width: 100%;
        color: #eee;
        text-align: center;
        position: absolute;
        bottom: 0;
        z-index: 100;
        box-sizing: border-box;
        background: #666;
        font-size: p(13px);
        padding: p(3px)
      }
    }
  }
}
</style>
