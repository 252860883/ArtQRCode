<template>
  <div class="view-content" >
        <div class="col-view-border" v-for=" view in views" :key="view.url" @click="isClick(view)">
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
import {mapActions} from "vuex";

export default {
  data() {
    return {
      views: [
        {
          codeId: "code1",
          url: require("../assets/component1/main.jpg"),
          name: "烘培工坊",
          click: "4666",
          save: "687"
        },
        {
          codeId: "code2",
          url: require("../assets/component2/main.jpg"),
          name: "简约方块拼凑风",
          click: "66666",
          save: "8765"
        },
        {
          codeId: "code3",
          url: require("../assets/main/view3.jpg"),
          name: "粉色系girl",
          click: "6952",
          save: "878"
        },

        {
          codeId: "code4",
          url: require("../assets/main/view4.jpg"),
          name: "疯狂动物城",
          click: "946",
          save: "105"
        },
        {
          codeId: "code5",
          url: require("../assets/main/view6.jpg"),
          name: "猫狗大战",
          click: "946",
          save: "105"
        }
      ]
    };
  },
  methods: {
    isClick(view) {
        this.$emit('child-say');
        this.changeCodeId(view);
    },
    ...mapActions([
      'changeCodeId'
      ])
  }
};
</script>

<style lang="scss">
@import "../assets/scss/all.scss";

.view-content {
  // width: 100%;
  height: p(200px);
  margin: p(10px) 0;
  // overflow-x:srcoll;
  // overflow: scroll;

  .col-view-border {
    display: inline-block;
    float: left;
    height: p(200px);
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
    .instruction {
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
        padding: p(3px);
      }
    }
  }
}
</style>
