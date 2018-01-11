<template>
<!-- 分类详情页 -->
    <div class="search_box">
        <search :icon="icon" :text="text"></search>
        <div class="fl_content">
            <div v-for="item in list" :key="item.id" class="fl_item">
                <div v-text="item.type"></div>
                <div>
                    <img :src="item.image" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import search from '../template/search/search.vue';
export default {
    data(){
        return {
            titletext: '分类',
            icon     : 'icon-sousuo',
            text     : '搜索商家、商品名称',
            list     : []
        }
    },
    components:{
        search
    },
    created(){
       this.bus.$emit('updataTitle',this.titletext);
       this.axios({
           url   : 'http://localhost:8080/mock/getfoodtypelist',
           method: 'GET'
       }).then((result)=>{
           this.list = result.data;
       },(error)=>{
           throw error;
       })
    }
}
</script>

<style scoped>
    .search_box{
        width     : 100%;
        overflow-y: scroll;
    }
    .fl_content{
        display        : flex;
        flex-wrap      : wrap;
        justify-content: space-around;
        padding        : 0 .12rem;
    }
    .fl_item{
        margin-top     : .24rem;
        width          : 2.84rem;
        background     : #F8F8F8;
        display        : flex;
        justify-content: space-between;
        font-size      : .24rem;
        height         : 1.06rem;
        line-height    : 1.06rem;
        text-indent    : .24rem;
    }
</style>
