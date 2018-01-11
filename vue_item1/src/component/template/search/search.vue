<template>
    <div class="fl_search_box">
        <div class="fl_search" @touchend="openSearchPage">
            <span class="iconfont" :class="icon">

            </span>
            <span v-text="text">

            </span>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        icon:{
            type    : [String],
            required: true
        },
        text:{
            type    : [String],
            required: true
        }
    },
    methods:{
        openSearchPage(){
            console.log('222')
        }
    }
}
</script>

<style scoped>
    .fl_search_box{
        width           : 100%;
        height          : .8rem;
        background-color: #F5F5F5;
        padding         : .12rem;
        box-sizing      : border-box;
    }
    .fl_search{
        text-align      : center;
        height          : .56rem;
        line-height     : .56rem;
        font-size       : .22rem;
        color           : #A7A7A7;
        background-color: #fff;
        border-radius   : .05rem;
    }
    .iconfont{
        font-size: .24rem;
    }
</style>
