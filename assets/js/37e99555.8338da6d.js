"use strict";(self.webpackChunkteigi_doc=self.webpackChunkteigi_doc||[]).push([[3314],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),s=u(n),m=l,d=s["".concat(c,".").concat(m)]||s[m]||f[m]||i;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[s]="string"==typeof e?e:l,o[1]=a;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},656:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var r=n(7462),l=(n(7294),n(3905));const i={sidebar_position:10},o="\u69cb\u6210\u60c5\u5831",a={unversionedId:"functions/config",id:"functions/config",title:"\u69cb\u6210\u60c5\u5831",description:"Teigi \u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u69cb\u6210\u60c5\u5831\u306f Teigi \u30d1\u30c3\u30b1\u30fc\u30b8\u30de\u30cd\u30fc\u30b8\u30e3\u306b\u3088\u308a\u7ba1\u7406\u3055\u308c\u307e\u3059\u3002",source:"@site/docs/functions/config.md",sourceDirName:"functions",slug:"/functions/config",permalink:"/docs/functions/config",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/functions/config.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"documentationSidebar",previous:{title:"\u30d3\u30eb\u30c0\u30fc",permalink:"/docs/functions/builder"},next:{title:"\u30d7\u30ed\u30d3\u30b8\u30e7\u30cb\u30f3\u30b0",permalink:"/docs/functions/provisioning"}},c={},u=[{value:"\u30d5\u30a1\u30a4\u30eb\u306e\u7a2e\u985e",id:"\u30d5\u30a1\u30a4\u30eb\u306e\u7a2e\u985e",level:2},{value:"\u30d1\u30c3\u30b1\u30fc\u30b8\u30de\u30cd\u30fc\u30b8\u30e3",id:"\u30d1\u30c3\u30b1\u30fc\u30b8\u30de\u30cd\u30fc\u30b8\u30e3",level:2},{value:"\u30d1\u30c3\u30b1\u30fc\u30b8\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u30bf\u30a4\u30d7",id:"\u30d1\u30c3\u30b1\u30fc\u30b8\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u30bf\u30a4\u30d7",level:3},{value:"\u8ffd\u52a0",id:"\u8ffd\u52a0",level:3},{value:"\u30de\u30fc\u30b8",id:"\u30de\u30fc\u30b8",level:3},{value:"\u30d1\u30fc\u30bd\u30ca\u30e9\u30a4\u30bc\u30fc\u30b7\u30e7\u30f3",id:"\u30d1\u30fc\u30bd\u30ca\u30e9\u30a4\u30bc\u30fc\u30b7\u30e7\u30f3",level:2}],p={toc:u};function s(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u69cb\u6210\u60c5\u5831"},"\u69cb\u6210\u60c5\u5831"),(0,l.kt)("p",null,"Teigi \u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u69cb\u6210\u60c5\u5831\u306f Teigi \u30d1\u30c3\u30b1\u30fc\u30b8\u30de\u30cd\u30fc\u30b8\u30e3\u306b\u3088\u308a\u7ba1\u7406\u3055\u308c\u307e\u3059\u3002\nTeigi \u30d1\u30c3\u30b1\u30fc\u30b8\u30de\u30cd\u30fc\u30b8\u30e3\u306f\u69cb\u6210\u60c5\u5831\u3092 git \u3067\u7ba1\u7406\u3057\u307e\u3059\u3002"),(0,l.kt)("img",{src:"https://www.plantuml.com/plantuml/svg/TPBVIiCm5CRl-nJ1-xs2x25yWRJ9Qh1hHvjUYQ0DgnjZC9qeuYwc29kAVuR873fyc6DRznQcoVwqWdSvEL--yvrVMmquzdbOTmo7rZZY7lAPlSiHOJwrEFDS0rlSyr4wwcJFxRJJJERzdyCcmW4YHWDRUzYcUJDjzLBHJ8QJxEawwyKGJI6QWOX13D6-WL0OK0i756s1E04X89g0-8Je7Q9JY6v1l2fvAxyK3rkvFNDbDCSflYtEaG-pwNXn5IknvRarPeS-BSfjnb7QxtxF1qeZotAGlXm5egsQPiWS8jirpo7KBssqyJSE388gbUrrDbrjXkiw7wHFsbKJB2BHa9OSiO7_sE2r3IxOh6ZlK6OpY6v0N82uNv6SWXX9Z6NOIUikEnkh1ULTQVleJR7koqp9qI1zb7OVITnTd7UK79CwSykuZa7qrATxKGf2pT3U4FitK6xMQ4WXmHoRkPUoaeel49VgC5D-fiIhKUdOIpoX4Ie8-GAQgfwiqUYS6fs-aBCAfNIjKfV87_mN",alt:"package-manager"}),(0,l.kt)("p",null,"git \u306e\u30b5\u30fc\u30d0\u3092\u904b\u7528\u3059\u308b\u3053\u3068\u306b\u3088\u3063\u3066\u3001\u691c\u8a3c\u74b0\u5883\u3068\u672c\u756a\u74b0\u5883\u306e\u5dee\u5206\u3092\u7ba1\u7406\u3067\u304d\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"\u30d5\u30a1\u30a4\u30eb\u306e\u7a2e\u985e"},"\u30d5\u30a1\u30a4\u30eb\u306e\u7a2e\u985e"),(0,l.kt)("p",null,"\u30d1\u30c3\u30b1\u30fc\u30b8\u30de\u30cd\u30fc\u30b8\u30e3\u304c\u7ba1\u7406\u3059\u308b\u30d5\u30a1\u30a4\u30eb\u306f\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u30bf\u30a4\u30d7\u3068\u305d\u308c\u4ee5\u5916\u306b\u5225\u308c\u307e\u3059\u3002\n\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u30bf\u30a4\u30d7\u304c yml \u306e\u3082\u306e\u306f\u30d1\u30c3\u30b1\u30fc\u30b8\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3068\u547c\u3070\u308c\u3001\u30d1\u30c3\u30b1\u30fc\u30b8\u30de\u30cd\u30fc\u30b8\u30e3\u306b\u3088\u308b\u7279\u6b8a\u306a\u30de\u30fc\u30b8\u51e6\u7406\u304c\u884c\u308f\u308c\u307e\u3059\u3002"),(0,l.kt)("h2",{id:"\u30d1\u30c3\u30b1\u30fc\u30b8\u30de\u30cd\u30fc\u30b8\u30e3"},"\u30d1\u30c3\u30b1\u30fc\u30b8\u30de\u30cd\u30fc\u30b8\u30e3"),(0,l.kt)("p",null,"\u30d1\u30c3\u30b1\u30fc\u30b8\u30de\u30cd\u30fc\u30b8\u30e3\u306f\u4ee5\u4e0b\u306e\u624b\u9806\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u4f9d\u5b58\u95a2\u4fc2\u306e\u89e3\u6c7a"),(0,l.kt)("li",{parentName:"ol"},"\u30d1\u30c3\u30b1\u30fc\u30b8\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u30ed\u30fc\u30c9"),(0,l.kt)("li",{parentName:"ol"},"\u30d1\u30c3\u30b1\u30fc\u30b8\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u88dc\u6b63\u51e6\u7406"),(0,l.kt)("li",{parentName:"ol"},"\u30d1\u30c3\u30b1\u30fc\u30b8\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u30d0\u30ea\u30c7\u30fc\u30b7\u30e7\u30f3\u30c1\u30a7\u30c3\u30af"),(0,l.kt)("li",{parentName:"ol"},"\u30d1\u30c3\u30b1\u30fc\u30b8\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u5024\u524a\u9664\u51e6\u7406")),(0,l.kt)("h3",{id:"\u30d1\u30c3\u30b1\u30fc\u30b8\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u30bf\u30a4\u30d7"},"\u30d1\u30c3\u30b1\u30fc\u30b8\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u30bf\u30a4\u30d7"),(0,l.kt)("p",null,"\u30d1\u30c3\u30b1\u30fc\u30b8\u5185\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u306f\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3054\u3068\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u30bf\u30a4\u30d7\u304c\u3042\u308b\u3002"),(0,l.kt)("h3",{id:"\u8ffd\u52a0"},"\u8ffd\u52a0"),(0,l.kt)("p",null,"_installType \u5c5e\u6027\u304c\u7701\u7565\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u8ffd\u52a0\u30e2\u30fc\u30c9\u3068\u306a\u308a\u307e\u3059\u3002"),(0,l.kt)("h3",{id:"\u30de\u30fc\u30b8"},"\u30de\u30fc\u30b8"),(0,l.kt)("p",null,"\u30d1\u30c3\u30b1\u30fc\u30b8\u30de\u30cd\u30fc\u30b8\u30e3\u306f\u8907\u6570\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u9593\u3067\u540c\u3058 Key \u3092\u6301\u3064\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u30de\u30fc\u30b8\u3057\u3066\u53c2\u7167\u3067\u304d\u307e\u3059\u3002\u30de\u30fc\u30b8\u3067\u306f\u4ee5\u4e0b\u306e\u6a5f\u80fd\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u8ffd\u52a0\u30fb\u524a\u9664"),(0,l.kt)("li",{parentName:"ul"},"\u5c5e\u6027\u5024\u306e\u4e0a\u66f8\u304d"),(0,l.kt)("li",{parentName:"ul"},"\u5185\u5305\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u518d\u5e30\u7684\u30de\u30fc\u30b8"),(0,l.kt)("li",{parentName:"ul"},"\u9806\u5e8f\u4ed8\u304d\u914d\u5217\u3078\u306e\u8981\u7d20\u306e\u8ffd\u52a0\u3001\u524a\u9664")),(0,l.kt)("h2",{id:"\u30d1\u30fc\u30bd\u30ca\u30e9\u30a4\u30bc\u30fc\u30b7\u30e7\u30f3"},"\u30d1\u30fc\u30bd\u30ca\u30e9\u30a4\u30bc\u30fc\u30b7\u30e7\u30f3"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u306e\u9805\u76ee\u306b\u3064\u3044\u3066\u306f\u3001\u30d6\u30e9\u30a6\u30b6\u306e local storage \u3084\u30b5\u30fc\u30d0\u5074\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306b\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u4fdd\u5b58\u3059\u308b\u3053\u3068\u3067\u30d1\u30fc\u30bd\u30ca\u30e9\u30a4\u30bc\u30fc\u30b7\u30e7\u30f3\u6a5f\u80fd\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u30ac\u30b8\u30a7\u30c3\u30c8\u306e\u914d\u7f6e"),(0,l.kt)("li",{parentName:"ul"},"\u304a\u6c17\u306b\u5165\u308a\u30e1\u30cb\u30e5\u30fc\u306e\u5185\u5bb9"),(0,l.kt)("li",{parentName:"ul"},"\u4e00\u89a7\u8868\u793a\u30ac\u30b8\u30a7\u30c3\u30c8\u306e\u691c\u7d22\u30d1\u30e9\u30e1\u30fc\u30bf\u3001\u30bd\u30fc\u30c8\u9806\u3001\u30ab\u30e9\u30e0\u306e\u8868\u793a\u975e\u8868\u793a")),(0,l.kt)("p",null,"\u30e6\u30fc\u30b6\u304c\u8a2d\u5b9a\u3092\u5909\u66f4\u3059\u308b\u3068\u30d6\u30e9\u30a6\u30b6\u306e local storage \u306b\u30d1\u30e9\u30e1\u30fc\u30bf\u304c\u4fdd\u5b58\u3055\u308c\u307e\u3059\u3002\u305d\u306e\u5f8c\u3001\u30e6\u30fc\u30b6\u306f\u73fe\u5728\u306e\u8a2d\u5b9a\u3092\u7d44\u7e54\u3084\u500b\u4eba\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u5024\u3068\u3057\u3066\u30b5\u30fc\u30d0\u5074\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306b\u4fdd\u5b58\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\n\u30ac\u30b8\u30a7\u30c3\u30c8\u304c\u69cb\u6210\u60c5\u5831\u3092\u5bfe\u8c61\u3068\u3057\u3066\u3044\u308b\u5834\u5408\u306f\u30d1\u30fc\u30bd\u30ca\u30e9\u30a4\u30bc\u30fc\u30b7\u30e7\u30f3\u306f\u30b5\u30fc\u30d0\u5074\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3078\u306e\u4fdd\u5b58\u306f\u3067\u304d\u307e\u305b\u3093\u3002\n\u30b5\u30fc\u30d0\u5074\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u5024\u3068\u30d6\u30e9\u30a6\u30b6\u306e local storage \u306b\u30d1\u30fc\u30bd\u30ca\u30e9\u30a4\u30bc\u30fc\u30b7\u30e7\u30f3\u306e\u5185\u5bb9\u304c\u7570\u306a\u308b\u5834\u5408\u306f\u3001\u30d6\u30e9\u30a6\u30b6\u306e local storage \u306e\u5185\u5bb9\u304c\u512a\u5148\u3055\u308c\u307e\u3059\u3002\u30ac\u30b8\u30a7\u30c3\u30c8\u3084\u30da\u30fc\u30b8\u306e\u8a2d\u5b9a\u3092\u30ea\u30bb\u30c3\u30c8\u3059\u308b\u3053\u3068\u3067\u3001\u30b5\u30fc\u30d0\u5074\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u5024\u306b\u5408\u308f\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u307e\u305f\u3001\u30b5\u30fc\u30d0\u5074\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306b\u4fdd\u5b58\u3055\u308c\u3066\u3044\u308b\u8a2d\u5b9a\u3092\u524a\u9664\u3059\u308b\u3053\u3068\u3067\u3001\u88fd\u54c1\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u5024\u306b\u623b\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"))}s.isMDXComponent=!0}}]);