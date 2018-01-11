<template>
<!-- 我的详情页 -->
    <div>
        
    </div>
</template>

<script>

export default {
    data(){
        return {
            titletext: '我的'
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
