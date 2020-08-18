(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{192:function(t,e,r){"use strict";r.d(e,"j",(function(){return o})),r.d(e,"l",(function(){return c})),r.d(e,"c",(function(){return l})),r.d(e,"g",(function(){return f})),r.d(e,"i",(function(){return d})),r.d(e,"k",(function(){return m})),r.d(e,"b",(function(){return v})),r.d(e,"f",(function(){return O})),r.d(e,"d",(function(){return _})),r.d(e,"h",(function(){return h})),r.d(e,"a",(function(){return j})),r.d(e,"e",(function(){return C})),r.d(e,"m",(function(){return w}));var n=r(61),o=function(t){return Object(n.b)({method:"GET",url:"/api/articles",params:t})},c=function(t){return Object(n.b)({method:"GET",url:"/api/articles/feed",params:t,isLogin:!0})},l=function(t){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/favorite"),isLogin:!0})},f=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/favorite"),isLogin:!0})},d=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t)})},m=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t,"/comments")})},v=function(t,data){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/comments"),data:data,isLogin:!0})},O=function(t,e){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/comments/").concat(e),isLogin:!0})},_=function(t){return Object(n.b)({method:"POST",url:"/api/profiles/".concat(t,"/follow"),isLogin:!0})},h=function(t){return Object(n.b)({method:"DELETE",url:"/api/profiles/".concat(t,"/follow"),isLogin:!0})},j=function(data){return Object(n.b)({method:"POST",url:"/api/articles",data:data,isLogin:!0})},C=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t),isLogin:!0})},w=function(t,data){return Object(n.b)({method:"PUT",url:"/api/articles/".concat(t),data:data,isLogin:!0})}},193:function(t,e,r){"use strict";r.d(e,"c",(function(){return o})),r.d(e,"d",(function(){return c})),r.d(e,"b",(function(){return l})),r.d(e,"e",(function(){return f})),r.d(e,"a",(function(){return d}));var n=r(61),o=function(data){return Object(n.b)({method:"POST",url:"/api/users/login",data:data})},c=function(data){return Object(n.b)({method:"POST",url:"/api/users",data:data})},l=function(){return Object(n.b)({method:"GET",url:"/api/user"})},f=function(data){return Object(n.b)({method:"PUT",url:"/api/user",data:data})},d=function(t){return Object(n.b)({method:"GET",url:"/api/profiles/".concat(t)})}},264:function(t,e,r){"use strict";r.r(e);r(80),r(30),r(62);var n=r(43),o=(r(31),r(13),r(44),r(41)),c=(r(186),r(187),r(29),r(4)),l=r(193),f=r(192),d=r(63);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var O={name:"profile",watchQuery:["page","tab"],asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,n,c,d,m,v,data,O,_,h,j,C,w,y,k;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.query,n=t.params,c=n.username,d=r.tab||"my_articles",m=Number.parseInt(r.page||1),data={limit:v=5,offset:(m-1)*v},"my_articles"===d?data.author=c:data.favorited=c,e.next=9,Promise.all([Object(l.a)(c),Object(f.j)(data)]);case 9:return O=e.sent,_=Object(o.a)(O,2),h=_[0],j=_[1],C=h.data.profile,w=j.data,y=w.articles,k=w.articlesCount,y.forEach((function(article){return article.favoriteDisabled=!1})),e.abrupt("return",{profile:C,articles:y,page:m,tab:d,username:c,limit:v,articlesCount:k});case 17:case"end":return e.stop()}}),e)})))()},data:function(){return{followDisabled:!1}},methods:{goSetting:function(){this.$router.push("/settings")},favorite:function(article){return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(article.favoriteDisabled=!0,!article.favorited){t.next=8;break}return t.next=4,Object(f.g)(article.slug);case 4:article.favorited=!1,article.favoritesCount--,t.next=12;break;case 8:return t.next=10,Object(f.c)(article.slug);case 10:article.favorited=!0,article.favoritesCount++;case 12:article.favoriteDisabled=!1;case 13:case"end":return t.stop()}}),t)})))()},follow:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.followDisabled=!0,!t.profile.following){e.next=7;break}return e.next=4,Object(f.h)(t.profile.username);case 4:t.profile.following=!1,e.next=10;break;case 7:return e.next=9,Object(f.d)(t.profile.username);case 9:t.profile.following=!0;case 10:t.followDisabled=!1;case 11:case"end":return e.stop()}}),e)})))()}},computed:v(v({},Object(d.b)(["user"])),{},{isCurrentUser:function(){return this.user&&this.profile.username===this.user.username},totalPage:function(){return Math.ceil(this.articlesCount/this.limit)}})},_=r(24),component=Object(_.a)(O,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"profile-page"},[r("div",{staticClass:"user-info"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-xs-12 col-md-10 offset-md-1"},[r("img",{staticClass:"user-img",attrs:{src:t.profile.image}}),t._v(" "),r("h4",[t._v(t._s(t.profile.username))]),t._v(" "),r("p",[t._v("\r\n            "+t._s(t.profile.bio)+"\r\n          ")]),t._v(" "),t.isCurrentUser?t._e():r("button",{staticClass:"btn btn-sm btn-outline-secondary action-btn",class:{active:t.profile.following},attrs:{disabled:t.followDisabled},on:{click:t.follow}},[r("i",{staticClass:"ion-plus-round"}),t._v("\r\n             \r\n            "+t._s(t.profile.following?"Unfollow":"Follow")+" "+t._s(t.profile.username)+"\r\n          ")]),t._v(" "),t.isCurrentUser?r("button",{staticClass:"btn btn-sm btn-outline-secondary action-btn",class:{active:t.profile.following},on:{click:t.goSetting}},[r("i",{staticClass:"ion-gear-a"}),t._v("\r\n             \r\n            Edit Profile Settings\r\n          ")]):t._e()])])])]),t._v(" "),r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-xs-12 col-md-10 offset-md-1"},[r("div",{staticClass:"articles-toggle"},[r("ul",{staticClass:"nav nav-pills outline-active"},[r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"my_articles"===t.tab},attrs:{exact:"",to:{name:"profile",params:{username:t.username},query:{tab:"my_articles"}}}},[t._v("My Articles")])],1),t._v(" "),r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"favorited_articles"===t.tab},attrs:{exact:"",to:{name:"profile",params:{username:t.username},query:{tab:"favorited_articles"}}}},[t._v("Favorited Articles")])],1)])]),t._v(" "),t._l(t.articles,(function(article){return r("div",{key:article.username,staticClass:"article-preview"},[r("div",{staticClass:"article-meta"},[r("nuxt-link",{attrs:{to:{name:"profile",params:{username:article.author.username}}}},[r("img",{attrs:{src:article.author.image}})]),t._v(" "),r("div",{staticClass:"info"},[r("nuxt-link",{attrs:{to:{name:"profile",params:{username:article.author.username}}}},[t._v(t._s(article.author.username))]),t._v(" "),r("span",{staticClass:"date"},[t._v(t._s(t._f("date")(article.createdAt)))])],1),t._v(" "),r("button",{staticClass:"btn btn-outline-primary btn-sm pull-xs-right",class:{active:article.favorited},attrs:{disabled:article.favoriteDisabled},on:{click:function(e){return t.favorite(article)}}},[r("i",{staticClass:"ion-heart"}),t._v(" "+t._s(article.favoritesCount)+"\r\n            ")])],1),t._v(" "),r("nuxt-link",{staticClass:"preview-link",attrs:{to:{name:"article",params:{slug:article.slug}}}},[r("h1",[t._v(t._s(article.title))]),t._v(" "),r("p",[t._v(t._s(article.description))]),t._v(" "),r("span",[t._v("Read more...")]),t._v(" "),r("ul",{staticClass:"tag-list"},t._l(article.tagList,(function(e){return r("li",{key:e,staticClass:"tag-default tag-pill tag-outline ng-binding ng-scope"},[t._v("\r\n                "+t._s(e)+"\r\n              ")])})),0)])],1)})),t._v(" "),r("nav",[r("ul",{staticClass:"pagination"},t._l(t.totalPage,(function(e){return r("li",{key:e,staticClass:"page-item",class:{active:e===t.page},attrs:{disabled:e===t.page}},[r("nuxt-link",{staticClass:"page-link",attrs:{to:{name:"home",query:{page:e,tab:t.tab}}}},[t._v(t._s(e))])],1)})),0)])],2)])])])}),[],!1,null,null,null);e.default=component.exports}}]);