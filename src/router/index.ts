import {createWebHistory,createRouter} from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";

// 2.定义一些路由
// 每个路由都需要映射到一个组件
// 我们后面在讨论嵌套路由
const routes = [
    {path:'/',component:Home},
    {path: '/login',component: Login}
]

// 3.创建路由并传递‘routes’配置
// 这里可以输入更多的配置，但我们在这里暂时保持简单
const router = createRouter({
    // 4. 内部提供了 history模式的实现。为了简单期间我们这里使用 hash
    history:createWebHistory(),
    routes, // 'routes:routes' 的缩写
})

export default router