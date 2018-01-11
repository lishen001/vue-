import wm from '../../component/router/wm.vue'
import fl from '../../component/router/fl.vue'
import dd from '../../component/router/dd.vue'
import wd from '../../component/router/wd.vue'

export const routes = [
    { path: '*', redirect: '/fl' },
    { path: '/wm', component: wm },
    { path: '/fl', component: fl },
    { path: '/dd', component: dd },
    { path: '/wd', component: wd }
]
export default routes;