(function(e){function t(t){for(var r,o,c=t[0],i=t[1],l=t[2],s=0,d=[];s<c.length;s++)o=c[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);h&&h(t);while(d.length)d.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},u=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-00784146":"a6370437","chunk-2d0bacb6":"dd23b3a8","chunk-2d0c0ea4":"745c6059","chunk-2d0e4a6e":"545d27d0","chunk-2d229481":"b200211c","chunk-2d22996d":"a60af986","chunk-2d22d746":"f89eed96","chunk-2d230c32":"11b0df57","chunk-4be7a73e":"360f5481","chunk-fc473a78":"40a141cc"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-fc473a78":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-00784146":"31d6cfe0","chunk-2d0bacb6":"31d6cfe0","chunk-2d0c0ea4":"31d6cfe0","chunk-2d0e4a6e":"31d6cfe0","chunk-2d229481":"31d6cfe0","chunk-2d22996d":"31d6cfe0","chunk-2d22d746":"31d6cfe0","chunk-2d230c32":"31d6cfe0","chunk-4be7a73e":"31d6cfe0","chunk-fc473a78":"5af00f76"}[e]+".css",a=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var l=u[c],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===a))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],s=l.getAttribute("data-href");if(s===r||s===a)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],h.parentNode.removeChild(h),n(u)},h.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=u);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=c(e);var d=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(h);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var h=s;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"3db4":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"id"}},[n("div",{staticClass:"header"},[n("div",{staticClass:"logo",on:{click:e.handleClick}},[e._v("渡一教育")]),n("ul",{staticClass:"nav"},[n("router-link",{attrs:{tag:"li",to:"/home"}},[e._v("首页")]),n("router-link",{attrs:{tag:"li",to:"/about"}},[e._v("关于")]),n("router-link",{attrs:{tag:"li",to:"/Student"}},[e._v("学术")]),n("router-link",{attrs:{tag:"li",to:"/Learn"}},[e._v("学习资料")]),n("router-link",{attrs:{tag:"li",to:"/Community"}},[e._v("社区")])],1)]),n("router-view",{staticClass:"view"})],1)},a=[],u={methods:{handleClick:function(){this.$router.push("/home")}}},c=u,i=(n("034f"),n("2877")),l=Object(i["a"])(c,o,a,!1,null,null,null),s=l.exports,d=n("8c4f"),h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},f=[],p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._m(0),n("h3",[e._v("Installed CLI Plugins")]),e._m(1),n("h3",[e._v("Essential Links")]),e._m(2),n("h3",[e._v("Ecosystem")]),e._m(3)])},m=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n    For a guide and recipes on how to configure / customize this project,"),n("br"),e._v("\n    check out the\n    "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(".\n  ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],v={name:"HelloWorld",props:{msg:String}},g=v,b=(n("b0df"),Object(i["a"])(g,p,m,!1,null,"0495e2ba",null)),k=b.exports,_={name:"home",components:{HelloWorld:k}},y=_,w=Object(i["a"])(y,h,f,!1,null,null,null),j=w.exports;r["a"].use(d["a"]);var C=new d["a"]({linkExactActiveClass:"active-exact",linkActiveClass:"active",mode:"history",routes:[{path:"/login",name:"login",component:function(){return n.e("chunk-2d229481").then(n.bind(null,"dd7b"))}},{path:"/home",name:"home",component:j},{path:"/learn",name:"learn",component:function(){return n.e("chunk-00784146").then(n.bind(null,"41ce"))}},{path:"/About",name:"About",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}},{path:"/Student",name:"Student",meta:{login:!0},component:function(){return n.e("chunk-2d0c0ea4").then(n.bind(null,"448f"))}},{path:"/Community",name:"Community",meta:{login:!0},component:function(){return n.e("chunk-fc473a78").then(n.bind(null,"8838"))},redirect:"/Community/academic",children:[{path:"academic",name:"academic",component:function(){return n.e("chunk-2d230c32").then(n.bind(null,"ee51"))}},{path:"download",name:"download",component:function(){return n.e("chunk-2d0bacb6").then(n.bind(null,"3971"))}},{path:"personal",name:"personal",component:function(){return n.e("chunk-2d0e4a6e").then(n.bind(null,"90ab"))}}]},{path:"/question/:id",name:"question",component:function(){return n.e("chunk-4be7a73e").then(n.bind(null,"e254"))}},{path:"*",redirect:function(e){return"/"==e.path?"/home":"/Error"}},{path:"/Error",name:"error",component:function(){return n.e("chunk-2d22996d").then(n.bind(null,"dda8"))}}]}),E=n("2f62"),S=(n("7f7f"),{namespaced:"getStudentList",state:{student:[]},getters:{studentListInfo:function(e){return e.student.map((function(e){return"姓名：".concat(e.name," 年龄：").concat(e.age)}))}},mutations:{ChangestudentList:function(e,t){e.student.push(t)}},actions:{ChangestudentList:function(e,t){var n=this;setTimeout((function(){return n.commit("ChangestudentList",t)}),1e3)}}});r["a"].use(E["a"]);var x=new E["a"].Store({strict:!0,modules:{getStudentList:S}});n("3db4");r["a"].config.productionTip=!1,C.beforeEach((function(e,t,n){if(e.meta.login){if(e.matched.some((function(e){return e.meta.login})))if("login=true"==document.cookie)n();else{if(!window.confirm("要登录么？"))return;n("login")}}else n()})),new r["a"]({router:C,store:x,render:function(e){return e(s)}}).$mount("#app")},"64a9":function(e,t,n){},b0df:function(e,t,n){"use strict";var r=n("fc28"),o=n.n(r);o.a},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},fc28:function(e,t,n){}});