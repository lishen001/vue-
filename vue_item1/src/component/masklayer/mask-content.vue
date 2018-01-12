<template>
  <div class="mask_content">
      <div>转发</div>
      <div class="m_c_middle">关于饿了么外卖服务</div>
      <div @touchend.prevent="flag">取消</div>
  </div>
</template>

<script>
export default {
    props:{
        flag:{
            type    : [Function],
            required: true
        }
    }
}
</script>

<style scoped lang="scss">
@import '../../css/style.scss';
    .mask_content{
        position  : absolute;
        left      : 0;
        right     : 0;
        bottom    : 0;
        height    : 3.15rem;
        background: #E7E7E7;
        z-index   : 1000;
    }
    .mask_content div{
        height     : 1rem;
        line-height: 1rem;
        background : #F6F6F6;
        text-align : center;
        color      : #000;
        font-size  : .34rem;
    }
    .m_c_middle{
        margin: .03rem 0 .12rem;
    }
</style>
