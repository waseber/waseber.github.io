(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(t,e,o){var content=o(168);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(40).default)("56b15182",content,!0,{sourceMap:!1})},106:function(t,e,o){var content=o(170);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(40).default)("b9024d94",content,!0,{sourceMap:!1})},107:function(t,e,o){var content=o(172);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(40).default)("f1f96c0e",content,!0,{sourceMap:!1})},113:function(t,e,o){"use strict";o(36),o(15),o(16),o(8),o(26);var r=o(14),n=o(17);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}var l={fetch:function(t){t.store.commit("toggle")},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(n.b)(["isIn"])),methods:{closeMenu:function(){this.$store.commit("toggle")}}},d=(o(167),o(10)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("Header",{staticClass:"layout__header"}),t._v(" "),o("link",{attrs:{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.12.1/css/all.css",crossorigin:"anonymous"}}),t._v(" "),o("div",{class:{layout__sidebar:!0,show:t.isIn}},[o("div",{staticClass:"mobile-nav-toggle"},[o("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.closeMenu(e)}}},[t.isIn?o("i",{staticClass:"fas fa-times"}):o("i",{staticClass:"fas fa-ellipsis-v"})])]),t._v(" "),o("Sidebar")],1),t._v(" "),o("Nuxt",{staticClass:"layout__content"})],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Header:o(176).default,Sidebar:o(175).default})},114:function(t,e,o){o(115),o(116),t.exports=o(117)},167:function(t,e,o){"use strict";o(105)},168:function(t,e,o){(e=o(39)(!1)).push([t.i,'html{font-family:BlinkMacSystemFont,Roboto,"Helvetica Neue",Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}*,:after,:before{box-sizing:border-box;margin:0}.page-enter-active,.page-leave-active{transition:opacity .5s,transform .5s}.page-enter,.page-leave-to{transform:translateX(-15%);opacity:0}a{text-decoration:none}li{list-style:none}.container{margin:0 auto;min-height:100vh;display:grid;grid-template-areas:"header header" "sidebar body";grid-template-columns:300px 1fr;grid-template-rows:100px 1fr;justify-content:center;align-items:center;text-align:center}@media (max-width:992px){.container{grid-template-areas:"sidebar header" "sidebar body";grid-template-columns:0 1fr;grid-template-rows:100px 1fr}}.layout__header{grid-area:header}.mobile-nav-toggle{display:none;top:1px;left:100%;width:50px;height:50px;border:1px solid #ddd;border-radius:50%;background-color:#fff}@media (max-width:992px){.mobile-nav-toggle{display:flex;justify-content:center;align-items:center;position:absolute}.show .mobile-nav-toggle{left:auto;right:1px}}.layout__sidebar{grid-area:sidebar;align-self:flex-start;position:relative;background:#fff}@media (max-width:992px){.layout__sidebar{padding-top:50px;position:fixed;height:100vh;right:100%;left:auto;z-index:1}}@media (max-width:992px){.layout__sidebar.show{right:auto;left:0;transition:all 1s ease}}.layout__content{grid-area:body;align-self:flex-start}.subtitle{font-weight:300;font-size:28px;color:#526488;word-spacing:5px;padding-bottom:15px}.button--green{display:inline-block;border-radius:4px;border:1px solid #3b8070;color:#3b8070;text-decoration:none;padding:10px 30px}.button--green:hover{color:#fff;background-color:#3b8070}.button--grey{display:inline-block;border-radius:4px;border:1px solid #35495e;color:#35495e;text-decoration:none;padding:10px 30px;margin-left:15px}.button--grey:hover{color:#fff;background-color:#35495e}.tech-list{display:flex;padding:0}.tech-list li{margin:5px}.w-100{width:100%}.m-15{margin:15px}.m-b0{margin-bottom:0}',""]),t.exports=e},169:function(t,e,o){"use strict";o(106)},170:function(t,e,o){(e=o(39)(!1)).push([t.i,'nav[data-v-0e12bdf3]{display:flex;justify-content:center;align-items:center}h4[data-v-0e12bdf3]{font-family:"Segoe UI",Tahoma,Geneva,Verdana,sans-serif;font-size:24px;margin-top:-25px;color:teal}.title[data-v-0e12bdf3],h4[data-v-0e12bdf3]{font-weight:300}.title[data-v-0e12bdf3]{font-family:"Quicksand","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:block;font-size:72px;color:#35495e;letter-spacing:1px}@media screen and (max-width:992px){.title[data-v-0e12bdf3]{font-size:48px}}',""]),t.exports=e},171:function(t,e,o){"use strict";o(107)},172:function(t,e,o){(e=o(39)(!1)).push([t.i,"nav[data-v-c8487608]{align-self:flex-start;height:calc(100vh - 100px);border-right:1px solid #ddd}nav[data-v-c8487608],ul[data-v-c8487608]{display:flex;flex-direction:column}ul[data-v-c8487608]{padding:0}li[data-v-c8487608]{display:flex}",""]),t.exports=e},173:function(t,e,o){"use strict";o.r(e),o.d(e,"state",(function(){return r})),o.d(e,"mutations",(function(){return n}));var r=function(){return{isIn:!1}},n={toggle:function(t){t.isIn=!t.isIn}}},175:function(t,e,o){"use strict";o.r(e);o(36),o(15),o(16),o(8),o(26);var r=o(14),n=o(17);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={data:[{proj_name:"GenealogyBank.com",path:"/projects/genealogybank"},{proj_name:"ObitsArchive.com",path:"/projects/obitsarchive"},{proj_name:"Publisher Archives",path:"/projects/publisher-archives"},{proj_name:"Nephrology-Hypertension of Naples",path:"/projects/nhn"},{proj_name:"Loutron",path:"/projects/loutron"},{proj_name:"My Soundtrack",path:"/projects/mysoundtrack"},{proj_name:"Reuters",path:"/projects/reuters"},{proj_name:"Band Site",path:"/projects/band"}]},f={data:function(){return{data:d.data}},fetch:function(t){t.store.commit("toggle")},computed:l(l({},Object(n.b)(["isIn"])),{},{projects:function(){return this.data}}),methods:{closeMenu:function(){this.$store.commit("toggle")}}},h=(o(171),o(10)),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("nav",[o("h3",[t._v("Projects")]),t._v(" "),o("div",{staticClass:"links"},[o("ul",t._l(t.projects,(function(e){return o("li",{on:{click:t.closeMenu}},[o("nuxt-link",{staticClass:"w-100 m-15 m-b0 button--green",attrs:{to:e.path}},[t._v("\n                "+t._s(e.proj_name)+"\n                ")])],1)})),0)])])}),[],!1,null,"c8487608",null);e.default=component.exports},176:function(t,e,o){"use strict";o.r(e);o(169);var r=o(10),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("nav",[e("h4",[this._v("Yves Gerber")]),this._v(" "),e("nuxt-link",{attrs:{to:"/"}},[e("h1",{staticClass:"title"},[this._v("Portfolio")])])],1)}),[],!1,null,"0e12bdf3",null);e.default=component.exports}},[[114,13,1,14]]]);