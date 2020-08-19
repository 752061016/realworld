import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5a22c074 = () => interopDefault(import('..\\pages\\layout\\index.vue' /* webpackChunkName: "" */))
const _1f7d68d9 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _5f300aa2 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _2f7adb6f = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _5120a31d = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _300b7ee7 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _16451ebc = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _5a22c074,
    children: [{
      path: "",
      component: _1f7d68d9,
      name: "home"
    }, {
      path: "/login",
      component: _5f300aa2,
      name: "login"
    }, {
      path: "/register",
      component: _5f300aa2,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _2f7adb6f,
      name: "profile"
    }, {
      path: "/settings",
      component: _5120a31d,
      name: "settings"
    }, {
      path: "/editor",
      component: _300b7ee7,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _16451ebc,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
