<template>
    <div>
        {{$route.params.name}}
    </div>
</template>

<script>
export default {
    created(){
        this.bus.$emit('updataTitle',' ');
    }
}
</script>

<style>

</style>
