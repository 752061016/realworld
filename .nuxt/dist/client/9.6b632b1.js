(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{193:function(e,t,r){"use strict";r.d(t,"c",(function(){return n})),r.d(t,"d",(function(){return c})),r.d(t,"b",(function(){return l})),r.d(t,"e",(function(){return m})),r.d(t,"a",(function(){return d}));var o=r(61),n=function(data){return Object(o.b)({method:"POST",url:"/api/users/login",data:data})},c=function(data){return Object(o.b)({method:"POST",url:"/api/users",data:data})},l=function(){return Object(o.b)({method:"GET",url:"/api/user"})},m=function(data){return Object(o.b)({method:"PUT",url:"/api/user",data:data})},d=function(e){return Object(o.b)({method:"GET",url:"/api/profiles/".concat(e)})}},265:function(e,t,r){"use strict";r.r(t);r(29);var o=r(4),n=r(193),c=r(188),l={middleware:"authenticated",mounted:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(n.b)();case 2:r=t.sent,(data=r.data).password="",e.user=data.user;case 6:case"end":return t.stop()}}),t)})))()},data:function(){return{user:{},btnDisabled:!1}},methods:{logout:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c.remove("user"),e.$store.commit("logout"),e.$router.push("/");case 3:case"end":return t.stop()}}),t)})))()},setUserInfo:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.btnDisabled=!0,t.next=4,Object(n.e)({user:e.user});case 4:r=t.sent,data=r.data,e.$router.push("/profile/".concat(data.user.username)),e.btnDisabled=!1,t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.error(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()}}},m=r(24),component=Object(m.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"settings-page"},[r("div",{staticClass:"container page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 offset-md-3 col-xs-12"},[r("h1",{staticClass:"text-xs-center"},[e._v("Your Settings")]),e._v(" "),r("form",[r("fieldset",[r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.image,expression:"user.image"}],staticClass:"form-control",attrs:{type:"text",placeholder:"URL of profile picture"},domProps:{value:e.user.image},on:{input:function(t){t.target.composing||e.$set(e.user,"image",t.target.value)}}})]),e._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Your Name"},domProps:{value:e.user.username},on:{input:function(t){t.target.composing||e.$set(e.user,"username",t.target.value)}}})]),e._v(" "),r("fieldset",{staticClass:"form-group"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.user.bio,expression:"user.bio"}],staticClass:"form-control form-control-lg",attrs:{rows:"8",placeholder:"Short bio about you"},domProps:{value:e.user.bio},on:{input:function(t){t.target.composing||e.$set(e.user,"bio",t.target.value)}}})]),e._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Email"},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}})]),e._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",placeholder:"Password"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}})]),e._v(" "),r("button",{staticClass:"btn btn-lg btn-primary pull-xs-right",attrs:{disabled:e.btnDisabled},on:{click:e.setUserInfo}},[e._v("\r\n                Update Settings\r\n              ")])])]),e._v(" "),r("button",{staticClass:"btn btn-outline-danger",on:{click:e.logout}},[e._v("\r\n          Or click here to logout.\r\n        ")])])])])])}),[],!1,null,null,null);t.default=component.exports}}]);