exports.ids = [1];
exports.modules = {

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return getYourFeedArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return addFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return deleteFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return deleteComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return addFollow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return deleteFollow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return deleteArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return updataArticle; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
 // 获取公共文章列表

const getArticles = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: '/api/articles',
    params
  });
}; // 获取关注作者文章列表

const getYourFeedArticles = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: '/api/articles/feed',
    params,
    isLogin: true
  });
}; // 添加收藏

const addFavorite = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/articles/${slug}/favorite`,
    isLogin: true
  });
}; // 取消收藏

const deleteFavorite = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${slug}/favorite`,
    isLogin: true
  });
}; // 获取文章详情

const getArticle = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/articles/${slug}`
  });
}; // 获取文章评论

const getComments = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/articles/${slug}/comments`
  });
}; // 添加文章评论

const addComment = (slug, data) => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/articles/${slug}/comments`,
    data,
    isLogin: true
  });
}; // 删除文章评论

const deleteComment = (slug, id) => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${slug}/comments/${id}`,
    isLogin: true
  });
}; // 关注文章作者

const addFollow = username => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/profiles/${username}/follow`,
    isLogin: true
  });
}; // 取消关注文章作者

const deleteFollow = username => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/profiles/${username}/follow`,
    isLogin: true
  });
}; // 添加文章

const addArticle = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/articles`,
    data,
    isLogin: true
  });
}; // 删除文章

const deleteArticle = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${slug}`,
    isLogin: true
  });
}; // 修改文章

const updataArticle = (slug, data) => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'PUT',
    url: `/api/articles/${slug}`,
    data,
    isLogin: true
  });
};

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return setUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getProfiles; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
 // 用户登录

const login = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: '/api/users/login',
    data
  });
}; // 用户注册

const register = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: '/api/users',
    data
  });
}; // 获取当前用户资料

const getUser = () => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/user`
  });
}; // 更新用户资料

const setUser = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'PUT',
    url: `/api/user`,
    data
  });
}; // 获取用户资料

const getProfiles = username => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/profiles/${username}`
  });
};

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=template&id=668e3d27&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"profile-page"},[_vm._ssrNode("<div class=\"user-info\"><div class=\"container\"><div class=\"row\"><div class=\"col-xs-12 col-md-10 offset-md-1\"><img"+(_vm._ssrAttr("src",_vm.profile.image))+" class=\"user-img\"> <h4>"+_vm._ssrEscape(_vm._s(_vm.profile.username))+"</h4> <p>"+_vm._ssrEscape("\r\n            "+_vm._s(_vm.profile.bio)+"\r\n          ")+"</p> "+((!_vm.isCurrentUser)?("<button"+(_vm._ssrAttr("disabled",_vm.followDisabled))+(_vm._ssrClass("btn btn-sm btn-outline-secondary action-btn",{
                active: _vm.profile.following
            }))+"><i class=\"ion-plus-round\"></i>"+_vm._ssrEscape("\r\n             \r\n            "+_vm._s(_vm.profile.following ? 'Unfollow' : 'Follow')+" "+_vm._s(_vm.profile.username)+"\r\n          ")+"</button>"):"<!---->")+" "+((_vm.isCurrentUser)?("<button"+(_vm._ssrClass("btn btn-sm btn-outline-secondary action-btn",{
                active: _vm.profile.following
            }))+"><i class=\"ion-gear-a\"></i>\r\n             \r\n            Edit Profile Settings\r\n          </button>"):"<!---->")+"</div></div></div></div> "),_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-10 offset-md-1\">","</div>",[_vm._ssrNode("<div class=\"articles-toggle\">","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\">","</ul>",[_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{
                active: _vm.tab === 'my_articles'
              },attrs:{"exact":"","to":{
                name: 'profile',
                params: {
                  username: _vm.username
                },
                query: {
                  tab: 'my_articles'
                }
              }}},[_vm._v("My Articles")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{
                active: _vm.tab === 'favorited_articles'
              },attrs:{"exact":"","to":{
                name: 'profile',
                params: {
                  username: _vm.username
                },
                query: {
                  tab: 'favorited_articles'
                }
              }}},[_vm._v("Favorited Articles")])],1)],2)]),_vm._ssrNode(" "),_vm._l((_vm.articles),function(article){return _vm._ssrNode("<div class=\"article-preview\">","</div>",[_vm._ssrNode("<div class=\"article-meta\">","</div>",[_c('nuxt-link',{attrs:{"to":{
              name: 'profile',
              params: {
                username: article.author.username
              }
            }}},[_c('img',{attrs:{"src":article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('nuxt-link',{attrs:{"to":{
                name: 'profile',
                params: {
                  username: article.author.username
                }
              }}},[_vm._v(_vm._s(article.author.username))]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(article.createdAt)))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrAttr("disabled",article.favoriteDisabled))+(_vm._ssrClass("btn btn-outline-primary btn-sm pull-xs-right",{
                active: article.favorited
              }))+"><i class=\"ion-heart\"></i>"+_vm._ssrEscape(" "+_vm._s(article.favoritesCount)+"\r\n            ")+"</button>")],2),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"preview-link",attrs:{"to":{
            name: 'article',
            params: {
              slug: article.slug
            }
          }}},[_c('h1',[_vm._v(_vm._s(article.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(article.description))]),_vm._v(" "),_c('span',[_vm._v("Read more...")]),_vm._v(" "),_c('ul',{staticClass:"tag-list"},_vm._l((article.tagList),function(tag){return _c('li',{key:tag,staticClass:"tag-default tag-pill tag-outline ng-binding ng-scope"},[_vm._v("\r\n                "+_vm._s(tag)+"\r\n              ")])}),0)])],2)}),_vm._ssrNode(" "),_vm._ssrNode("<nav>","</nav>",[_vm._ssrNode("<ul class=\"pagination\">","</ul>",_vm._l((_vm.totalPage),function(item){return _vm._ssrNode("<li"+(_vm._ssrAttr("disabled",item === _vm.page))+(_vm._ssrClass("page-item",{
                active: item === _vm.page
              }))+">","</li>",[_c('nuxt-link',{staticClass:"page-link",attrs:{"to":{
                  name: 'home',
                  query: {
                    page: item,
                    tab: _vm.tab
                  }
                }}},[_vm._v(_vm._s(item))])],1)}),0)])],2)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=template&id=668e3d27&

// EXTERNAL MODULE: ./api/user.js
var user = __webpack_require__(28);

// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(27);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var profilevue_type_script_lang_js_ = ({
  name: 'profile',
  // 监听参数变化
  watchQuery: ['page', 'tab'],

  async asyncData({
    query,
    params
  }) {
    // 用户名
    const username = params.username; // 当前标签

    const tab = query.tab || 'my_articles'; // 当前页码

    const page = Number.parseInt(query.page || 1); // 每页数量

    const limit = 5; // 获取文章列表参数

    const data = {
      limit,
      offset: (page - 1) * limit
    };

    if (tab === 'my_articles') {
      // 选择用户文章的参数
      data.author = username;
    } else {
      // 选择用户喜欢的参数
      data.favorited = username;
    } // const { data } = await getProfiles(username)


    const [profileData, articleData] = await Promise.all([Object(user["a" /* getProfiles */])(username), Object(api_article["j" /* getArticles */])(data)]);
    const {
      profile
    } = profileData.data;
    const {
      articles,
      articlesCount
    } = articleData.data; // 添加按钮状态

    articles.forEach(article => article.favoriteDisabled = false);
    return {
      profile,
      articles,
      page,
      tab,
      username,
      limit,
      articlesCount
    };
  },

  data() {
    return {
      followDisabled: false // favoriteDisabled: false

    };
  },

  methods: {
    goSetting() {
      this.$router.push('/settings');
    },

    async favorite(article) {
      // 禁用按钮
      article.favoriteDisabled = true; // 根据状态调用不同接口

      if (article.favorited) {
        await Object(api_article["g" /* deleteFavorite */])(article.slug);
        article.favorited = false;
        article.favoritesCount--;
      } else {
        await Object(api_article["c" /* addFavorite */])(article.slug);
        article.favorited = true;
        article.favoritesCount++;
      }

      article.favoriteDisabled = false;
    },

    // 关注作者 / 取消关注
    async follow() {
      // 禁止点击按钮
      this.followDisabled = true; // 根据是否已经添加来调用对应接口

      if (this.profile.following) {
        await Object(api_article["h" /* deleteFollow */])(this.profile.username);
        this.profile.following = false;
      } else {
        await Object(api_article["d" /* addFollow */])(this.profile.username);
        this.profile.following = true;
      }

      this.followDisabled = false;
    }

  },
  computed: { // 映射当前登录用户的登录状态
    ...Object(external_vuex_["mapState"])(['user']),

    // 判断是否为当前登录用户的详情页
    isCurrentUser() {
      return this.user && this.profile.username === this.user.username;
    },

    totalPage() {
      return Math.ceil(this.articlesCount / this.limit);
    }

  }
});
// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_profilevue_type_script_lang_js_ = (profilevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/profile/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_profilevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "ae6a3bfa"
  
)

/* harmony default export */ var pages_profile = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=1.js.map