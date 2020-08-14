module.exports = {
    router: {
        extendRoutes(routes, resolve) {
            // 清除 Nuxt.js 基于 pages 目录
            routes.splice(0)
            // 自定义路由规则
            routes.push(
                {
                    path: '/',
                    component: resolve(__dirname, 'pages/layout/index.vue'),
                    children: [
                        {
                            path: '', // 默认子路由
                            name: 'home',
                            component: resolve(__dirname, 'pages/home/')
                        },{
                            path: '/login', 
                            name: 'login',
                            component: resolve(__dirname, 'pages/login/')
                        },{
                            path: '/register', 
                            name: 'register',
                            component: resolve(__dirname, 'pages/login/')
                        },{
                            path: '/profile/:username', 
                            name: 'profile',
                            component: resolve(__dirname, 'pages/profile/')
                        },{
                            path: '/settings', 
                            name: 'settings',
                            component: resolve(__dirname, 'pages/settings/')
                        },{
                            path: '/editor', 
                            name: 'editor',
                            component: resolve(__dirname, 'pages/editor/')
                        },{
                            path: '/article/:slug', 
                            name: 'article',
                            component: resolve(__dirname, 'pages/article/')
                        }
                    ]
                }
            )
        },
        linkActiveClass: 'active'
    },
    // 注册插件
    plugins: [
        '~/plugins/request.js',
        '~/plugins/day.js'
    ],
    server: {
        host: '0.0.0.0', // 如果要被外网服务需要设置 host
        port: 3000 // 端口号
    }
}