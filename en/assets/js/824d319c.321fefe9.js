"use strict";(self.webpackChunkteigi_doc=self.webpackChunkteigi_doc||[]).push([[55],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),m=o,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4076:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:1},i="KVS",c={unversionedId:"guides/kvs",id:"guides/kvs",title:"KVS",description:"\u3001 Web \u30b5\u30fc\u30d0\u3068\u540c\u69d8\u306b Key \u306e\u62e1\u5f35\u5b50\u3067\u305d\u306e MIME Type \u3092\u8b58\u5225\u3057\u307e\u3059\u3002\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f json \u304b YAML \u3067\u8a18\u8ff0\u3055\u308c\u3001\u62e1\u5f35\u5b50\u306f json, yaml, yml \u306e\u3044\u305a\u308c\u304b\u306b\u306a\u308a\u307e\u3059\u3002",source:"@site/docs/guides/kvs.md",sourceDirName:"guides",slug:"/guides/kvs",permalink:"/en/docs/guides/kvs",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guides/kvs.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"documentationSidebar",previous:{title:"Documentation - Guides",permalink:"/en/docs/category/documentation---guides"},next:{title:"Documentation - Reference",permalink:"/en/docs/category/documentation---reference"}},l={},u=[{value:"\u30de\u30fc\u30b8\u6a5f\u80fd",id:"\u30de\u30fc\u30b8\u6a5f\u80fd",level:3},{value:"\u7248\u7ba1\u7406",id:"\u7248\u7ba1\u7406",level:2}],s={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kvs"},"KVS"),(0,o.kt)("p",null,"\u3001 Web \u30b5\u30fc\u30d0\u3068\u540c\u69d8\u306b Key \u306e\u62e1\u5f35\u5b50\u3067\u305d\u306e MIME Type \u3092\u8b58\u5225\u3057\u307e\u3059\u3002\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f json \u304b YAML \u3067\u8a18\u8ff0\u3055\u308c\u3001\u62e1\u5f35\u5b50\u306f json, yaml, yml \u306e\u3044\u305a\u308c\u304b\u306b\u306a\u308a\u307e\u3059\u3002"),(0,o.kt)("h3",{id:"\u30de\u30fc\u30b8\u6a5f\u80fd"},"\u30de\u30fc\u30b8\u6a5f\u80fd"),(0,o.kt)("p",null,"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u30de\u30fc\u30b8\u306b\u304a\u3044\u3066\u306f\u4ee5\u4e0b\u3092\u5b9f\u88c5\u3059\u308b\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u8ffd\u52a0\u30fb\u524a\u9664"),(0,o.kt)("li",{parentName:"ul"},"\u5c5e\u6027\u5024\u306e\u4e0a\u66f8\u304d"),(0,o.kt)("li",{parentName:"ul"},"\u5185\u5305\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u518d\u5e30\u7684\u30de\u30fc\u30b8"),(0,o.kt)("li",{parentName:"ul"},"\u9806\u5e8f\u4ed8\u304d\u914d\u5217\u3078\u306e\u8981\u7d20\u306e\u8ffd\u52a0\u3001\u524a\u9664")),(0,o.kt)("p",null,"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f Key Value Store \u306b\u683c\u7d0d\u3055\u308c\u308b\u3002\n\u30d7\u30ea\u30d5\u30a3\u30c3\u30af\u30b9\u304b\u3089\u30b5\u30fc\u30d0\u4e0a\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3078\u306e\u5bfe\u5fdc\u304c\u53d6\u308c\u308b\u3002\nremote \u3092\u6307\u5b9a\u3059\u308b\u3068 git \u3068\u306e\u9023\u643a\u304c\u81ea\u52d5\u7684\u306b\u884c\u308f\u308c\u308b\u3002\ngit \u306e\u5dee\u5206\u60c5\u5831\u304b\u3089\u5dee\u5206\u30ec\u30a4\u30e4\u30fc\u3092\u751f\u6210\u3059\u308b\u6a5f\u80fd\u3042\u308a\uff1f\nLayer \u30de\u30fc\u30b8\u3068\u306f\u5225\u306b\u500b\u5225\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u6d3e\u751f\u5143\u6307\u5b9a\u306b\u3088\u308b\u30de\u30fc\u30b8\u3082\u3067\u304d\u308b"),(0,o.kt)("h2",{id:"\u7248\u7ba1\u7406"},"\u7248\u7ba1\u7406"),(0,o.kt)("p",null,"\u30a4\u30d9\u30f3\u30c8\u304b\u3089\u767a\u751f\u3059\u308b\u30d7\u30ed\u30d3\u30b8\u30e7\u30cb\u30f3\u30b0\u304c\u30a4\u30d9\u30f3\u30c8\u767a\u751f\u6642\u70b9\u306e\u5185\u5bb9\u3092\u53c2\u7167\u3059\u308b\u3088\u3046\u306b\u3059\u308b\u3002\n\u3053\u308c\u306f\u3001\u52d5\u7684 Layer \u306b\u3088\u3063\u3066\u5b9f\u88c5\u3055\u308c\u308b\u3002"))}p.isMDXComponent=!0}}]);