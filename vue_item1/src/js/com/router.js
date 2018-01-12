import wm from '../../component/router/wm.vue'
import fl from '../../component/router/fl.vue'
import dd from '../../component/router/dd.vue'
import wd from '../../component/router/wd.vue'
import shoplist from '../../component/router/shoplist.vue'
import shoppage from '../../component/router/shoppage.vue'

export const routes = [
    { path: "*", redirect: "/wm" },
    { path: "/wm", component: wm },
    { path: "/fl", component: fl },
    { path: "/fl/:title", component: shoplist },
    { path: "/fl/:title/:name", component: shoppage },
    { path: "/dd", component: dd },
    { path: "/wd", component: wd }
];
export default routes;