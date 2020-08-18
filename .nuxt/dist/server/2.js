exports.ids = [2];
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

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=template&id=279bbef8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-page"},[_vm._ssrNode("<div class=\"banner\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<h1>"+_vm._ssrEscape(_vm._s(_vm.article.title))+"</h1> "),_c('article-meta',{attrs:{"article":_vm.article}})],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row article-content\">","</div>",[_vm._ssrNode("<div class=\"col-md-12\">"+(_vm._s(_vm.article.body))+"</div> "),_vm._ssrNode("<ul class=\"tag-list\">","</ul>",_vm._l((_vm.article.tagList),function(tag){return _c('nuxt-link',{key:tag,attrs:{"to":{
          name: 'home',
          query: {
            tag: tag,
            tab: 'tag'
          }
        }}},[_c('li',{staticClass:"tag-default tag-pill tag-outline ng-binding ng-scope",attrs:{"ng-repeat":"tag in ::$ctrl.article.tagList"}},[_vm._v("\r\n            "+_vm._s(tag)+"\r\n          ")])])}),1)],2),_vm._ssrNode(" <hr> "),_vm._ssrNode("<div class=\"article-actions\">","</div>",[_c('article-meta',{attrs:{"article":_vm.article}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-8 offset-md-2\">","</div>",[_c('article-comments',{attrs:{"article":_vm.article}})],1)])],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=template&id=279bbef8&

// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(27);

// EXTERNAL MODULE: external "markdown-it"
var external_markdown_it_ = __webpack_require__(26);
var external_markdown_it_default = /*#__PURE__*/__webpack_require__.n(external_markdown_it_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-meta.vue?vue&type=template&id=dbbfa1f8&
var article_metavue_type_template_id_dbbfa1f8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-meta"},[_c('nuxt-link',{attrs:{"to":{
        name: 'profile',
        params: {
            username: _vm.article.author.username
        }
    }}},[_c('img',{attrs:{"src":_vm.article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('nuxt-link',{attrs:{"to":{
            name: 'profile',
            params: {
                username: _vm.article.author.username
            }
        }}},[_vm._v(_vm._s(_vm.article.author.username))]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(_vm.article.createdAt)))+"</span>")],2),_vm._ssrNode(" "+((!_vm.isCurrentUser)?("<button"+(_vm._ssrAttr("disabled",_vm.followDisabled))+(_vm._ssrClass("btn btn-sm btn-outline-secondary",{
                active: _vm.article.author.following
            }))+"><i class=\"ion-plus-round\"></i>\n             \n            "+_vm._ssrEscape("\n            "+_vm._s(_vm.article.author.following ? 'Unfollow' : 'Follow')+" \n            "+_vm._s(_vm.article.author.username)+"\n        ")+"</button>\n          \n         <button"+(_vm._ssrAttr("disabled",_vm.favoriteDisabled))+(_vm._ssrClass("btn btn-sm btn-outline-primary",{
                active: _vm.article.author.favorited
            }))+"><i class=\"ion-heart\"></i>\n             \n            "+_vm._ssrEscape("\n            "+_vm._s(_vm.article.favorited ? 'Unfavorite article' : 'Favorite Post')+" \n            ")+"<span class=\"counter\">"+_vm._ssrEscape("("+_vm._s(_vm.article.favoritesCount)+")")+"</span></button>"):"<!---->")+" "),(_vm.isCurrentUser)?[_vm._ssrNode("<span class=\"ng-scope\">","</span>",[_c('nuxt-link',{staticClass:"btn btn-outline-secondary btn-sm",attrs:{"to":{
                  name: 'editor',
                  query: {
                      slug: _vm.article.slug
                  }
              }}},[_c('i',{staticClass:"ion-edit"}),_vm._v(" Edit Article\n            ")]),_vm._ssrNode(" <button"+(_vm._ssrAttr("disabled",_vm.deleteDisabled))+" class=\"btn btn-outline-danger btn-sm\"><i class=\"ion-trash-a\"></i> Delete Article\n            </button>")],2)]:_vm._e()],2)}
var article_metavue_type_template_id_dbbfa1f8_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/article-meta.vue?vue&type=template&id=dbbfa1f8&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-meta.vue?vue&type=script&lang=js&
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


/* harmony default export */ var article_metavue_type_script_lang_js_ = ({
  name: 'articleMeta',
  props: {
    article: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      followDisabled: false,
      favoriteDisabled: false,
      deleteDisabled: false
    };
  },

  methods: {
    // 删除文章
    async deleteArticle() {
      this.deleteDisabled = true; // 删除文章

      await Object(api_article["e" /* deleteArticle */])(this.article.slug); // 跳转个人主页

      this.$router.push(`/profile/${this.user.username}`);
      this.deleteDisabled = false;
    },

    // 关注作者 / 取消关注
    async follow() {
      // 禁止点击按钮
      this.followDisabled = true; // 根据是否已经添加来调用对应接口

      if (this.article.author.following) {
        await Object(api_article["h" /* deleteFollow */])(this.article.author.username);
        this.article.author.following = false;
      } else {
        await Object(api_article["d" /* addFollow */])(this.article.author.username);
        this.article.author.following = true;
      }

      this.followDisabled = false;
    },

    // 添加喜欢文章 / 删除喜欢文章
    async favorite() {
      // 禁止点击按钮
      this.favoriteDisabled = true; // 根据是否已经添加来调用对应接口

      if (this.article.favorited) {
        await Object(api_article["g" /* deleteFavorite */])(this.article.slug);
        this.article.favorited = false;
        this.article.favoritesCount--;
      } else {
        await Object(api_article["c" /* addFavorite */])(this.article.slug);
        this.article.favorited = true;
        this.article.favoritesCount++;
      }

      this.favoriteDisabled = false;
    }

  },
  computed: { // 映射当前登录用户的登录状态
    ...Object(external_vuex_["mapState"])(['user']),

    // 判断是否为当前登录用户的详情页
    isCurrentUser() {
      return this.user && this.article.author.username === this.user.username;
    }

  }
});
// CONCATENATED MODULE: ./pages/article/components/article-meta.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_article_metavue_type_script_lang_js_ = (article_metavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/article/components/article-meta.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_article_metavue_type_script_lang_js_,
  article_metavue_type_template_id_dbbfa1f8_render,
  article_metavue_type_template_id_dbbfa1f8_staticRenderFns,
  false,
  injectStyles,
  null,
  "45132640"
  
)

/* harmony default export */ var article_meta = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-comments.vue?vue&type=template&id=82730bee&
var article_commentsvue_type_template_id_82730bee_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.user)?_c('div',[_vm._ssrNode("<form class=\"card comment-form\"><div class=\"card-block\"><textarea placeholder=\"Write a comment...\" rows=\"3\" class=\"form-control\">"+_vm._ssrEscape(_vm._s(_vm.body))+"</textarea></div> <div class=\"card-footer\"><img src=\"http://i.imgur.com/Qr71crq.jpg\" class=\"comment-author-img\"> <button"+(_vm._ssrAttr("disabled",_vm.btnDisabled))+" class=\"btn btn-sm btn-primary\">\n          Post Comment\n      </button></div></form> "),_vm._l((_vm.comments),function(comment){return _vm._ssrNode("<div class=\"card\">","</div>",[_vm._ssrNode("<div class=\"card-block\"><p class=\"card-text\">"+_vm._ssrEscape(_vm._s(comment.body))+"</p></div> "),_vm._ssrNode("<div class=\"card-footer\">","</div>",[_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{
              name: 'profile',
              params: {
                  username: comment.author.username
              }
          }}},[_c('img',{staticClass:"comment-author-img",attrs:{"src":comment.author.image}})]),_vm._ssrNode("\n           \n          "),_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{
              name: 'profile',
              params: {
                  username: comment.author.username
              }
          }}},[_vm._v("\n              "+_vm._s(comment.author.username)+"\n          ")]),_vm._ssrNode(" <span class=\"date-posted\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(comment.createdAt)))+"</span> "+((_vm.user.username === comment.author.username)?("<span ng-show=\"$ctrl.canModify\" class=\"mod-options\"><i ng-click=\"$ctrl.deleteCb()\" class=\"ion-trash-a\"></i></span>"):"<!---->"))],2)],2)})],2):_vm._e()}
var article_commentsvue_type_template_id_82730bee_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/article-comments.vue?vue&type=template&id=82730bee&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/article-comments.vue?vue&type=script&lang=js&
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


/* harmony default export */ var article_commentsvue_type_script_lang_js_ = ({
  name: 'ArticleComments',
  props: {
    article: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      comments: [],
      body: '',
      btnDisabled: false
    };
  },

  async mounted() {
    const {
      data
    } = await Object(api_article["k" /* getComments */])(this.article.slug);
    this.comments = data.comments;
  },

  computed: { // 映射当前登录用户的登录状态
    ...Object(external_vuex_["mapState"])(['user'])
  },
  methods: {
    async deleteComment(comment) {
      // 获取 id
      const {
        id
      } = comment; // 删除评论

      await Object(api_article["f" /* deleteComment */])(this.article.slug, id); // 找到对应下标并删除

      const index = this.comments.findIndex(comment => comment.id === id);
      this.comments.splice(index, 1);
    },

    async addUserComment() {
      // 禁用按钮
      this.btnDisabled = true; // 发起请求

      const {
        data
      } = await Object(api_article["b" /* addComment */])(this.article.slug, {
        comment: {
          body: this.body
        }
      }); // 如果返回添加的评论信息则添加到所有评论的第一个并清空输入框

      if (data.comment) this.comments.unshift(data.comment);
      this.body = '';
      this.btnDisabled = false;
    }

  }
});
// CONCATENATED MODULE: ./pages/article/components/article-comments.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_article_commentsvue_type_script_lang_js_ = (article_commentsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/components/article-comments.vue



function article_comments_injectStyles (context) {
  
  
}

/* normalize component */

var article_comments_component = Object(componentNormalizer["a" /* default */])(
  components_article_commentsvue_type_script_lang_js_,
  article_commentsvue_type_template_id_82730bee_render,
  article_commentsvue_type_template_id_82730bee_staticRenderFns,
  false,
  article_comments_injectStyles,
  null,
  "111d952f"
  
)

/* harmony default export */ var article_comments = (article_comments_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=script&lang=js&
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




/* harmony default export */ var articlevue_type_script_lang_js_ = ({
  name: 'ArticlePage',

  async asyncData({
    params
  }) {
    const {
      data
    } = await Object(api_article["i" /* getArticle */])(params.slug);
    const {
      article
    } = data;
    const md = new external_markdown_it_default.a();
    article.body = md.render(article.body);
    return {
      article
    };
  },

  components: {
    ArticleMeta: article_meta,
    ArticleComments: article_comments
  },

  head() {
    return {
      title: `${this.article.title} - RealWorld`,
      meta: [{
        hid: 'description',
        name: 'description',
        content: this.article.description
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_articlevue_type_script_lang_js_ = (articlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/index.vue



function article_injectStyles (context) {
  
  
}

/* normalize component */

var article_component = Object(componentNormalizer["a" /* default */])(
  pages_articlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  article_injectStyles,
  null,
  "82b1ade0"
  
)

/* harmony default export */ var pages_article = __webpack_exports__["default"] = (article_component.exports);

/***/ })

};;
//# sourceMappingURL=2.js.map