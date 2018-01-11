import Vue from 'vue';
import VueRouter from 'vue-router';
import '../index.html';
import rem from './js/base/rem';
import axios from 'axios';
import './iconfont/iconfont.css';
import './css/style.css';
import { routes } from './js/com/router.js';
import footerbox from './component/template/footer/footer.vue';
import headerbox from './component/template/header/header-box.vue';
import bus from './js/plugin/bus.js';

Vue.prototype.axios = axios;

rem(3.2);

const router = new VueRouter({
    routes
})

Vue.use(VueRouter);

Vue.use(bus);

new Vue({ // 实例 Vue
    el: '#app',
    data() {
        return {
            msg: 'hello vue',
            list: [
                { text: "外卖", path: "/wm", iconname: 'icon-eliaomo' },
                { text: "分类", path: "/fl", iconname: 'icon-fenlei' },
                { text: "订单", path: "/dd", iconname: 'icon-icon-' },
                { text: "我的", path: "/wd", iconname: 'icon-home' }
            ],
            title: "分类"
        }
    },
    router,
    components: {
        footerBox: footerbox,
        headerBox: headerbox
    }
})