<template>
<!-- 订单详情页 -->
    <div>
        
    </div>
</template>

<script>

export default {
    data(){
        return {
            titletext: '订单'
        }
    },
    components:{
       
    },
    created(){
       this.bus.$emit('updataTitle',this.titletext)
    }
}
</script>

<style scoped>

</style>
