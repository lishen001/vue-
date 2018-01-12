<template>
    <!-- 遮罩层 -->
    <div class="mask_box" @touchend.self="flag">   
        <mack-content :flag="flag"></mack-content>  
    </div>
</template>
<script>
import mackcontent from './mask-content.vue';
export default {
    props:{
        flag:{
            type    : [Function],
            required: true
        }
    },
    components:{
        mackContent: mackcontent
    }
}
</script>

<style scoped lang="scss">
@import '../../css/style.scss';
    .mask_box{
        position  : fixed;
        left      : 0;
        right     : 0;
        top       : 0;
        bottom    : 0;
        background: rgba(0,0,0,.382);
        z-index   : 999;
    }
</style>
