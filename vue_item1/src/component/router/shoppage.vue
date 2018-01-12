<template>
    <div>
        {{$route.params.name}}
    </div>
</template>

<script>
export default {
    created(){
        this.bus.$emit('updataTitle',this.$route.params.name);
    }
}
</script>

<style>

</style>
