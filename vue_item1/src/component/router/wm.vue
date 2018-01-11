<template>
<!-- 外卖详情页 -->
    <div>
        
    </div>
</template>

<script>

export default {
    data(){
        return {
            titletext: '外卖'
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
