<template>
<!-- 分类详情页 -->
    <div>
        
        <search :icon="icon" :text="text"></search>
    </div>
</template>

<script>

import search from '../template/search/search.vue';
export default {
    data(){
        return {
            titletext: '分类',
            icon     : 'icon-sousuo',
            text     : '搜索商家、商品名称'
        }
    },
    components:{
       
        search
    },
    created(){
       this.bus.$emit('updataTitle',this.titletext)
    }
}
</script>

<style scoped>

</style>
