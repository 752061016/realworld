<template>
<div class="settings-page">
  <div class="container page">
    <div class="row">

      <div class="col-md-6 offset-md-3 col-xs-12">
        <h1 class="text-xs-center">Your Settings</h1>

        <form>
          <fieldset>
              <fieldset class="form-group">
                <input class="form-control" 
                v-model="user.image" 
                type="text" 
                placeholder="URL of profile picture">
              </fieldset>
              <fieldset class="form-group">
                <input class="form-control form-control-lg" 
                v-model="user.username" 
                type="text" 
                placeholder="Your Name">
              </fieldset>
              <fieldset class="form-group">
                <textarea class="form-control form-control-lg" 
                v-model="user.bio" 
                rows="8" 
                placeholder="Short bio about you"></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input class="form-control form-control-lg" 
                v-model="user.email" 
                type="text" 
                placeholder="Email">
              </fieldset>
              <fieldset class="form-group">
                <input class="form-control form-control-lg" 
                v-model="user.password" 
                type="password" 
                placeholder="Password">
              </fieldset>
              <button class="btn btn-lg btn-primary pull-xs-right" 
              :disabled="btnDisabled" 
              @click="setUserInfo">
                Update Settings
              </button>
          </fieldset>
        </form>
        <button 
          class="btn btn-outline-danger"
          @click="logout"
        >
          Or click here to logout.
        </button>
      </div>

    </div>
  </div>
</div>
</template>

<script>
import { getUser,setUser } from '@/api/user'
const Cookie = process.client ? require('js-cookie') : undefined
export default {
    // 在路由匹配组件之前会先执行中间件处理
    middleware: 'authenticated',
    async mounted () {
      // 获取用户数据
      const { data } = await getUser()
      // 因为不会显示密码，初始化一个空密码
      data.password = ''
      this.user = data.user
    },
    data () {
      return {
        user: {},
        btnDisabled: false
      }
    },
    methods: {
      async logout () {
        // 清除 cookie 缓存
        Cookie.remove('user')
        this.$store.commit('logout')
        this.$router.push('/')
      },
      async setUserInfo () {
        // 可能更新失败
        try {
          // 禁用按钮
          this.btnDisabled = true
          // 更新数据接口
          const { data } = await setUser({
            user: this.user
          })
          // 成功更新后跳转到用户详情页
          this.$router.push(`/profile/${data.user.username}`)
          this.btnDisabled = false
        } catch(err) {
          console.error(err)
        }
      }
    }
}
</script>

<style>

</style>