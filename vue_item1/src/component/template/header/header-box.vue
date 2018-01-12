<template>
<!-- 头部 -->
    <div class="header_box">
        <div class="iconfont icon-fanhui" @touchend="touchbark"></div>
        <div class="h_title" v-text="title"></div>
        <div class="iconfont icon-gengduo" @touchend="touchmoretrue"></div>
        <keep-alive>
            <transition name="fade">
                <mask-box v-if="flag" :flag="touchmorefalse" transition="fade"></mask-box>
            </transition>
        </keep-alive>
    </div>
</template>
    
<script>
import mask from "../../masklayer/mask.vue";
export default {
  data() {
    return {
      flag    : false,
      newTitle: null
    };
  },
  props: {
    titleText: {
      type: [String]
    }
  },
  computed:{
    title:{
      set(newTitle){
        this.newTitle = newTitle;
      },
      get(){
        return this.newTitle||this.titleText;
      }
    }
  },
  methods: {
    touchbark() {
      // 返回
      this.$router.go(-1);
    },
    touchmorefalse() {
      // 更多
      this.flag = false;
    },
    touchmoretrue() {
      this.flag = true;
    }
  },
  components: {
    maskBox: mask
  },
  created() {
    this.bus.$on('updataTitle',newTitle=>{
      this.title = newTitle;
    })
  },
  beforeDestroy() {
    this.bus.$off('updataTitle')
  }
};
</script>

<style scoped lang="scss">
@import '../../../css/style.scss';
.header_box {
  width          : 100%;
  height         : 0.88rem;
  box-sizing     : border-box;
  padding        : 0 0.22rem;
  background     :$mainColor;
  display        : flex;
  justify-content: space-between;
  line-height    : 0.88rem;
  color          : #fff;
}
.iconfont {
  font-size: 0.36rem;
}
.h_title {
  font-size: 0.36rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>