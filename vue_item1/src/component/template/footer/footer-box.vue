<template>
    <div class="footer-item">
        <router-link active-class="active" tag="div" :to="path" >
            <div class="f_i_icon iconfont" :class="btnIcon"></div>
            <div class="f_i_text" v-text="btnText"></div>
         </router-link>
    </div>
</template>

<script>
export default {
    props:{
        text:{
            type: [String]
        },
        path:{
            type: [String]
        },
        iconname:{
            type: [String]
        }
    },
    computed:{
        btnText(){
            return this['text'] || '';
        },
        btnIcon(){
            return this['iconname'] || '';
        }
    }
}
</script>

<style scoped>
    .footer-item{
        flex      : 1;
        text-align: center;
        color     : #666;
    }
    .f_i_icon{
        height     : .72rem;
        line-height: .72rem;
        font-size  : .42rem;
    }
    .f_i_text{
        height     : .24rem;
        line-height: .24rem;
        font-size  : .18rem;
    }
    .active .f_i_text,.active .f_i_icon{
        color: #0092FF;
    }
</style>
