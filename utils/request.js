// 基于 axios 封装的请求模块

import axios from 'axios'

const request = axios.create({
    baseURL: 'https://conduit.productionready.io/'
})

// // 请求拦截器
// // 任何请求都要经过请求拦截器
// // 我们在请求拦截器中做一些公共的业务处理
// request.interceptors.request.use(function (config) {
//     // 请求会经过这里
//     // 修改请求头
//     config.headers.Authorization = `Token 用户token`

//     // 返回 config 请求配置对象
//     return config
// }, function (error) {
//     // 如果请求失败，此时请求还没有发出去，就会进入这里
//     return Promise.reject(error)
// })

// 响应拦截器

export default request