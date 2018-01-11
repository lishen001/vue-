<template>
    <div>
        <img :src="img" alt="">
    </div>
</template>

<script>
export default {
    data(){
        return {
            img: require('../../img/nav.png')
        }
    },
    created(){
        this.bus.$emit('updataTitle',this.$route.params.title)
    }
}
</script>

<style scoped>

</style>
