"use strict";(self.webpackChunkteigi_doc=self.webpackChunkteigi_doc||[]).push([[4448],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=c(n),m=a,f=s["".concat(u,".").concat(m)]||s[m]||d[m]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3725:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:30},l="\u8a8d\u8a3c\u3068\u8a8d\u53ef",i={unversionedId:"functions/authnauthz",id:"functions/authnauthz",title:"\u8a8d\u8a3c\u3068\u8a8d\u53ef",description:"teigi \u4e0a\u306e\u30b5\u30fc\u30d3\u30b9\u306e\u8a8d\u8a3c\u306f\u3001\u4ee5\u4e0b\u306e\uff12\u6bb5\u968e\u3067\u884c\u308f\u308c\u307e\u3059\u3002",source:"@site/docs/functions/authnauthz.md",sourceDirName:"functions",slug:"/functions/authnauthz",permalink:"/en/docs/functions/authnauthz",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/functions/authnauthz.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"documentationSidebar",previous:{title:"\u30d7\u30ed\u30d3\u30b8\u30e7\u30cb\u30f3\u30b0",permalink:"/en/docs/functions/provisioning"},next:{title:"\u30d5\u30a3\u30eb\u30bf\u5f0f",permalink:"/en/docs/functions/filterExpression"}},u={},c=[{value:"\u30bb\u30c3\u30b7\u30e7\u30f3\u30de\u30cd\u30fc\u30b8\u30e3",id:"\u30bb\u30c3\u30b7\u30e7\u30f3\u30de\u30cd\u30fc\u30b8\u30e3",level:2},{value:"\u30b2\u30b9\u30c8\u8a8d\u8a3c",id:"\u30b2\u30b9\u30c8\u8a8d\u8a3c",level:2},{value:"SAML\u8a8d\u8a3c",id:"saml\u8a8d\u8a3c",level:2},{value:"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u8a3c\u660e\u66f8",id:"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u8a3c\u660e\u66f8",level:2},{value:"\u8155\u7ae0",id:"\u8155\u7ae0",level:2},{value:"\u8155\u7ae0\u30aa\u30d6\u30b8\u30a7\u30af\u30c8",id:"\u8155\u7ae0\u30aa\u30d6\u30b8\u30a7\u30af\u30c8",level:3}],p={toc:c};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u8a8d\u8a3c\u3068\u8a8d\u53ef"},"\u8a8d\u8a3c\u3068\u8a8d\u53ef"),(0,a.kt)("p",null,"teigi \u4e0a\u306e\u30b5\u30fc\u30d3\u30b9\u306e\u8a8d\u8a3c\u306f\u3001\u4ee5\u4e0b\u306e\uff12\u6bb5\u968e\u3067\u884c\u308f\u308c\u307e\u3059\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5229\u7528\u8005\u306e\u4e00\u9023\u306e Web UI \u3078\u306e\u30a2\u30af\u30bb\u30b9\u306b\u3064\u3044\u3066\u3001\u305d\u306e\u5229\u7528\u8005ID\u3092\u7279\u5b9a\u3057\u305f\u4e0a\u3067\u30bb\u30c3\u30b7\u30e7\u30f3\u3068\u3057\u3066\u7ba1\u7406"),(0,a.kt)("li",{parentName:"ul"},"\u305d\u306e\u5229\u7528\u8005\u304c\u3069\u306e\u3088\u3046\u306a\u5c5e\u6027\u3092\u6301\u3064\u304b\u3092\u6c7a\u5b9a\u3057\u3066\u305d\u306e\u5c5e\u6027\u3092\u4fdd\u6301\u3059\u308b\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\uff08\u4ee5\u964d\u3001\u8155\u7ae0\u3068\u547c\u3076\uff09\u306e\u767a\u884c")),(0,a.kt)("p",null,"\u8a8d\u53ef\u306f\u8155\u7ae0\u306b\u8a18\u9332\u3055\u308c\u3066\u3044\u308b\u5229\u7528\u8005\u306e\u5c5e\u6027\u3068\u30ea\u30bd\u30fc\u30b9\u3001\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9\u3092\u7167\u5408\u3059\u308b\u3053\u3068\u3067\u5b9f\u65bd\u3055\u308c\u307e\u3059\u3002"),(0,a.kt)("img",{src:"https://www.plantuml.com/plantuml/svg/lPB1JiCm38RlVGeJSO13Nu03MYSXDBI9QMNY759hZKYJ4ZjCl3r9ruaHw8wxMSxt-vT_vufRx12ebmgDV2jcnD9pw4on9VHGblSmzsuVwpkufg0K4js8vnujBALjjDt1MkvGt1OZDaZ4wHlKw3-rGd4wuV7X9Mh-vwPSDzXeZug17LI1MvkxrX7Jpi9AsZZF_p8S1B31Zu34oJg7froFGWg6eGH21kNSkxxCpcT2tcPeewatyYjIvqvNeqaHLhw3UPoTBn7xgGqB8WnPX6DuS6JscjkVBFv89mCzS4aolehHUxqOyiWl5zlLK1ySdrvJZ3EqJVoctm00",alt:"Test"}),(0,a.kt)("h2",{id:"\u30bb\u30c3\u30b7\u30e7\u30f3\u30de\u30cd\u30fc\u30b8\u30e3"},"\u30bb\u30c3\u30b7\u30e7\u30f3\u30de\u30cd\u30fc\u30b8\u30e3"),(0,a.kt)("p",null,"\u30bb\u30c3\u30b7\u30e7\u30f3\u30de\u30cd\u30fc\u30b8\u30e3\u306f\u3001\u5229\u7528\u8005\u306e\u4e00\u9023\u306e Web UI \u3078\u306e\u30a2\u30af\u30bb\u30b9\u306b\u3064\u3044\u3066\u3001\u305d\u306e\u5229\u7528\u8005\u3092\u7279\u5b9a\u3057\u305f\u4e0a\u3067\u30bb\u30c3\u30b7\u30e7\u30f3\u3068\u3057\u3066\u7ba1\u7406\u3057\u307e\u3059\u3002\u30bb\u30c3\u30b7\u30e7\u30f3\u3054\u3068\u306b\u56fa\u6709\u306e Cookie \u3092\u767a\u884c\u3057\u3001\u30d6\u30e9\u30a6\u30b6\u306b Set-Cookie \u30d8\u30c3\u30c0\u30fc\u3067\u30bb\u30c3\u30c8\u3057\u307e\u3059\u3002\n\u30bb\u30c3\u30b7\u30e7\u30f3\u30de\u30cd\u30fc\u30b8\u30e3\u304c\u767a\u884c\u3059\u308b Cookie \u306f http-only \u5c5e\u6027\u304c\u4ed8\u4e0e\u3055\u308c\u3066\u304a\u308a\u3001API\u547c\u3073\u51fa\u3057\u306b Bearer \u30c8\u30fc\u30af\u30f3\u3068\u3057\u3066\u76f4\u63a5\u5229\u7528\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002"),(0,a.kt)("h2",{id:"\u30b2\u30b9\u30c8\u8a8d\u8a3c"},"\u30b2\u30b9\u30c8\u8a8d\u8a3c"),(0,a.kt)("p",null,"\u30ed\u30b0\u30a4\u30f3\u304c\u4e0d\u8981\u306a\u8a8d\u8a3c\u3067\u3059\u3002\u6700\u521d\u306e\u30a2\u30af\u30bb\u30b9\u6642\u306b\u6709\u52b9\u671f\u9593\u306e\u9577\u3044 Cookie \u3092\u767a\u884c\u3057\u307e\u3059\u3002\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u767a\u884c\u30b5\u30fc\u30d3\u30b9\u306f\u30b2\u30b9\u30c8\u306e Cookie \u306e\u5185\u5bb9\u3092\u898b\u3066\u30b2\u30b9\u30c8\u7528\u306e\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u3092\u767a\u884c\u3057\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"saml\u8a8d\u8a3c"},"SAML\u8a8d\u8a3c"),(0,a.kt)("p",null,"\u30e6\u30fc\u30b6\u304cWeb \u30d6\u30e9\u30a6\u30b6\u304b\u3089\u30a2\u30af\u30bb\u30b9\u3059\u308b\u5834\u5408\u3001 teigi \u4e0a\u306e\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u767a\u884c\u30b5\u30fc\u30d3\u30b9\u306f SAML SP \u3068\u3057\u3066\u52d5\u4f5c\u3057\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u8a3c\u660e\u66f8"},"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u8a3c\u660e\u66f8"),(0,a.kt)("h2",{id:"\u8155\u7ae0"},"\u8155\u7ae0"),(0,a.kt)("p",null,"\u8155\u7ae0\u306f\u5229\u7528\u8005\u304c\u3069\u306e\u3088\u3046\u306a\u5f79\u5272\u3067\u30b5\u30fc\u30d3\u30b9\u7fa4\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u304b\u3092\u793a\u3059\u3082\u306e\u3067\u3042\u308a\u3001\u4e00\u4eba\u306e\u5229\u7528\u8005\u304c\u8907\u6570\u306e\u8155\u7ae0\u3092\u5207\u308a\u66ff\u3048\u3066\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002\n\u7279\u306b\u7279\u6a29\u30a2\u30af\u30bb\u30b9\u3078\u306e\u5207\u308a\u66ff\u3048\u3084\u517c\u52d9\u3067\u306e\u5207\u308a\u66ff\u3048\u304c\u3042\u308b\u5834\u5408\u306f\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u30d0\u30fc\u3067\u73fe\u5728\u306e\u8155\u7ae0\u3092\u8b58\u5225\u3057\u3084\u3059\u3044\u3088\u3046\u306b\u3059\u308b\u3053\u3068\u3067\u3001\u5229\u7528\u8005\u306e\u64cd\u4f5c\u30df\u30b9\u3092\u9632\u3050\u52b9\u679c\u3092\u3082\u305f\u305b\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u306b\u306f\u8907\u6570\u306e\u8155\u7ae0\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002\u5177\u4f53\u7684\u306b\u306f JWT \u306e ab \u5c5e\u6027\u306b\u30b5\u30fc\u30d3\u30b9\u540d\u3092\u30ad\u30fc\u3068\u3057\u3066\u8155\u7ae0\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u304c\u5165\u308a\u307e\u3059\u3002"),(0,a.kt)("h3",{id:"\u8155\u7ae0\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"},"\u8155\u7ae0\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"),(0,a.kt)("p",null,"\u8155\u7ae0\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u306f\u4ee5\u4e0b\u306e\u5c5e\u6027\u304c\u8a2d\u5b9a\u3055\u308c\u307e\u3059\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u540d"),(0,a.kt)("th",{parentName:"tr",align:null},"\u610f\u5473"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"role"),(0,a.kt)("td",{parentName:"tr",align:null},"\u305d\u306e\u30b5\u30fc\u30d3\u30b9\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u3068\u304d\u306e\u5f79\u5272")))))}s.isMDXComponent=!0}}]);