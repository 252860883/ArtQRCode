<template>
  <div class="view-content" >
        <div class="col-view-border" v-for=" view in views" :key="view.url" @click="isClick(view)">
            <div class="instruction">
                <span class="name">{{view.name}}</span><br>
                <div class="number">
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
  width: 100%;
  height: p(220px);
  margin: p(15px) 0;
  display: flex;
  justify-content: space-between;
  .col-view-border {
    display: inline-block;
    height: p(220px);
    border: p(1px) solid $bordercolor;
    border-radius: p(5px);
    background: #fff;
    position: relative;
    overflow: hidden;
    img {
      width: p(155px);
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
