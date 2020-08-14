import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _19aa079e = () => interopDefault(import('..\\pages\\layout\\index.vue' /* webpackChunkName: "" */))
const _2e1e2201 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _d44332f2 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _7105b147 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _40f08845 = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _19628e0f = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _57cff494 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

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
    component: _19aa079e,
    children: [{
      path: "",
      component: _2e1e2201,
      name: "home"
    }, {
      path: "/login",
      component: _d44332f2,
      name: "login"
    }, {
      path: "/register",
      component: _d44332f2,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _7105b147,
      name: "profile"
    }, {
      path: "/settings",
      component: _40f08845,
      name: "settings"
    }, {
      path: "/editor",
      component: _19628e0f,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _57cff494,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
