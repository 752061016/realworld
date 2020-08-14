// 验证是否登录的中间件

export default function ({ store, redirect }) {
    // 如果没有 user 则重定向到 login 页面
    if (!store.state.user) {
        return redirect('/login')
    }
}