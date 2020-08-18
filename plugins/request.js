// 基于 axios 封装的请求模块
import axios from 'axios'
// import {routerOptions} from '@/router'
// console.log(routerOptions)

// 创建请求对象
export const request = axios.create({
    baseURL: 'https://conduit.productionready.io/'
})

// 通过插件机制获取到上下文对象 (query, params, req, res, app)
// 插件导出函数必须作为 default 成员
export default ({ store, redirect }) => {
    
    
    // 请求拦截器
    // 任何请求都要经过请求拦截器
    // 我们在请求拦截器中做一些公共的业务处理
    request.interceptors.request.use(function (config) {
        // 请求会经过这里
        // 修改请求头
        const { user } = store.state
        
        // 接口参数带 isLogin 但用户未登录会跳转到登录页面
        if (!user && config.isLogin) {
            redirect('/login')
            return Promise.reject()
        }

        if (user && user.token) {
            config.headers.Authorization = `Token ${user.token}`
        }

        // 返回 config 请求配置对象
        return config
    }, function (error) {
        // 如果请求失败，此时请求还没有发出去，就会进入这里
        return Promise.reject(error)
    })

    // 响应拦截器
    // request.interceptors.response.use(function (config) {
    //     return config
    // }, function (error) {
    //     console.log(error)
    //     if (error.response && error.response.status === 401) {
    //         redirect('/login')
    //     }
    //     return Promise.reject(error)
    // })

    // export default request
}

