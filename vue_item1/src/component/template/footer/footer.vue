<template>
    <div class="footer">
        <app-footer v-for = "item in data"
                :key      = "item.id"
                :text     = "item.text"
                :iconname = "item.iconname"
                :path     = "item.path" >
        </app-footer>
    </div>
</template>

<script>

import appfooter from './footer-box.vue';

export default {
    props:{
        data:{
            type    : [Array,Object],
            required: true
        }
    },
    components:{
        appFooter: appfooter
    }
}
</script>

<style scoped>
    .footer{
        width     : 100%;
        height    : .96rem;
        display   : flex;
        border-top: .01rem solid #B2B2B2;
    }
</style>
