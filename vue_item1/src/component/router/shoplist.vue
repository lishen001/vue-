<template>
    <div class="shop_box">
        <img :src="img" alt="" class="shop_top">
        <div class="shop_content">
            <router-link 
             v-for="item in list"
             :key="item.id" tag="div" 
             :to="`/fl/${$route.params.title}/${item.name}`" 
             :name="item.name"
             >
                <img :src="item.img">
            </router-link>
        </div>
        
    </div>
</template>

<script>
export default {
    data(){
        return {
            img: require('../../img/nav.png'),
            list:[
                {img:require('../../img/fl_1.png'),name:'田老师红烧肉'},
                {img:require('../../img/fl_2.png'),name:'麦当劳'},
                {img:require('../../img/fl_3.png'),name:'南城香'},
                {img:require('../../img/fl_4.png'),name:'二十五块半'}
            ]
        }
    },
    created(){
        this.bus.$emit('updataTitle',this.$route.params.title);
        this.bus.$emit('hideFooter')
    }
}
</script>

<style scoped>
    .shop_box{
        overflow-y: scroll;
    }
    .shop_top{
        position: absolute;
        top: .88rem;
        left: 0;
    }
    .shop_content{
        padding-top: .68rem;
    }
</style>
