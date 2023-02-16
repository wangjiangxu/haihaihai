// 1.引入 axios
import axios, {Axios} from "axios";

// 2.axios 创建对象
const request = axios.create({
    baseURL:"https://api.shop.eduwork.cn/", // 管理后台接口的路径
    timeout:8000
})

// 3.定义前置浏览器，请求拦截器
request.interceptors.request.use(config =>{
    // config 接口请求的配置信息
    return config
},(error)=>{
    // 报错的是定义前置拦截器时抛出一个错误信息
    return Promise.reject(error)
})

// 4.响应拦截器
request.interceptors.response.use(response =>{
    // 响应回来的数据操作
    return response
},(error) => {
    // 报错时抛出一个错误信息
    return Promise.reject(error)
})

// 5.抛出对象的信息
export default request