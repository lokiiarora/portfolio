"use strict";(self.webpackChunkgatsby_starter_portfolio_minimal_theme=self.webpackChunkgatsby_starter_portfolio_minimal_theme||[]).push([[226],{4088:function(e,t,n){n.d(t,{T:function(){return y}});var r=n(7294),o=n(1883),i=n(8032);!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}('.styles_skeleton__tyzRD{background:#eff1f6;display:inline-block;line-height:1;overflow:hidden;position:relative}.styles_skeleton__tyzRD:before{animation:styles_skeleton-progress__aezri 1.2s ease-in-out infinite;background-image:linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.6),hsla(0,0%,100%,0));content:"";height:100%;left:-500px;position:absolute;top:0;width:500px}@keyframes styles_skeleton-progress__aezri{0%{left:-500px}to{left:100%}}');var a=n(5400),c="style-module--Banner--d401d",l="style-module--Card--c661d",u="style-module--Category--eeb92",s="style-module--DescriptionWrapper--5f867",f="style-module--Details--5ba4b",d="style-module--Image--43f10",p="style-module--ImageWrapper--50300",m="style-module--ReadingTime--a0392",v="style-module--Title--de70d";function y(e){const{globalState:t}=(0,a.j1)(),n=t.theme===a.Q2.Dark,y=e.data.link.indexOf("://")>0||0===e.data.link.indexOf("//"),h=r.createElement("article",{className:l,style:n?{border:"0.125rem solid var(--primary-color)"}:void 0},e.showBanner&&r.createElement("div",{className:c},e.data.image&&e.data.image.src&&r.createElement(i.G,{className:p,imgClassName:d,objectFit:e.data.image.objectFit||"cover",image:e.data.image.src.childImageSharp.gatsbyImageData,alt:e.data.image.alt||e.data.title})),r.createElement("div",{className:s},r.createElement("span",{className:u},r.createElement("u",null,e.data.category)),r.createElement("h4",{className:v},e.data.title),r.createElement("div",{className:f},["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][(b=e.data.publishedAt).getMonth()]+" "+b.getDate()+", "+b.getFullYear(),e.data.readingTime&&r.createElement("span",{className:m},e.data.readingTime))));var b;return y?r.createElement("a",{href:e.data.link,target:"_blank",rel:"noopener noreferrer",title:e.data.title},h):r.createElement(o.Link,{to:e.data.link,title:e.data.title},h)}},2311:function(e,t,n){n.d(t,{z:function(){return c},L:function(){return a}});var r=n(7294),o=n(1883),i="style-module--Button--82b1f";let a=function(e){return e.BUTTON="button",e.SUBMIT="submit",e.LINK="link",e}({});function c(e){if(e.type===a.LINK){if(e.url)return e.externalLink?r.createElement("a",{id:e.id,className:i,href:e.url,target:"_blank",rel:"noopener noreferrer","aria-label":"External Link"},e.label):r.createElement(o.Link,{id:e.id,to:e.url,className:i},e.label);throw new Error("Button should be a "+e.type+" but no URL is given!")}if(e.type===a.BUTTON||e.type===a.SUBMIT){if(!e.onClickHandler)throw new Error("Button should be a "+e.type+" but no onClickHandler is given!");return r.createElement("button",{id:e.id,className:i,type:e.type,onClick:e.onClickHandler},e.label)}throw new Error("Unknown button type specified.")}},1187:function(e,t,n){n.d(t,{$:function(){return c}});var r=n(7294),o="style-module--ContentWrapper --36dde",i="style-module--Heading--2c002",a="style-module--Section--1d871";function c(e){let t;return t=e.additionalClasses?e.additionalClasses.concat(o).join(" "):o,r.createElement("section",{id:e.anchor,className:a},r.createElement("div",{className:t},e.heading&&r.createElement("h3",{className:i},e.heading),e.children))}},8768:function(e,t,n){n.d(t,{i:function(){return i}});var r=n(7294),o="style-module--SlideContainer--60bf2";function i(e){let t;return t=e.additionalClasses?e.additionalClasses.concat(o).join(" "):o,r.createElement("div",{className:t,style:e.style},e.children)}},974:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});n(3383);var r=n(5785),o=n(7294),i=n(8366),a=n(1187),c=n(533),l=n(8768),u=n(4088),s=n(2311),f="style-module--Filter--31377",d="style-module--Listing--52eca",p="style-module--LoadMore--8b4c0",m="style-module--Option--83bb9",v="style-module--Options--3515b",y="style-module--Selected--f3165",h=n(1643);function b(e){var t;const n=e.pageContext.articles,[b,g]=o.useState(function(e){const t=[],n=[];return e.forEach((e=>{e.categories.forEach((r=>{if(n.includes(r)){const n=t.map((e=>e.label)).indexOf(r);t[n].relatedArticleIds.push(e.id)}else t.push({label:r,selected:!1,relatedArticleIds:[e.id]}),n.push(r)}))})),t.sort(((e,t)=>e.relatedArticleIds.length>t.relatedArticleIds.length?-1:1))}(n)),[x,w]=o.useState(9);let E=[];const O=-1!==b.map((e=>e.selected)).indexOf(!0);O&&(E=b.filter((e=>e.selected)).map((e=>e.relatedArticleIds)).flat(1).filter(((e,t,n)=>n.indexOf(e)===t)));const k=null!==(t=(0,h._)(e.pageContext.entityName))&&void 0!==t?t:"Articles";return o.createElement(o.Fragment,null,o.createElement(c.p,{title:"All "+k,useTitleTemplate:!0}),o.createElement(i.T,null,o.createElement(a.$,{anchor:"articleListing",heading:k},o.createElement("div",{className:f},"Select categories to filter ",k.toLocaleLowerCase(),o.createElement(l.i,{additionalClasses:[v]},b.map(((e,t)=>o.createElement("div",{key:t,role:"button",onClick:()=>function(e){const t=(0,r.Z)(b),n=t.map((e=>e.label)).indexOf(e);t[n].selected=!t[n].selected,g(t)}(e.label),className:[m,!0===e.selected?y:null].join(" ")},e.label," (",e.relatedArticleIds.length,")"))))),o.createElement("div",{className:d},n.filter((e=>!O||E.includes(e.id))).slice(0,x).map(((e,t)=>o.createElement(u.T,{key:t,showBanner:!0,data:{image:e.banner,title:e.title,category:e.categories.join(" / "),publishedAt:new Date(e.date.replace(/-/g,"/")),link:e.slug,readingTime:e.readingTime.text}})))),O&&E.length>x||!O&&n.length>x?o.createElement("div",{className:p},o.createElement(s.z,{type:s.L.BUTTON,label:"Load More",onClickHandler:()=>function(e,t){const n=x+3;(t&&t>=n||!t&&e>=n)&&w(n)}(n.length,O?E.length:void 0)})):null)))}},1643:function(e,t,n){function r(e,t){if(!e)return;if(void 0!==t&&1===t)return e;const n={"(quiz)$":"$1zes","^(ox)$":"$1en","([m|l])ouse$":"$1ice","(matr|vert|ind)ix|ex$":"$1ices","(x|ch|ss|sh)$":"$1es","([^aeiouy]|qu)y$":"$1ies","(hive)$":"$1s","(?:([^f])fe|([lr])f)$":"$1$2ves","(shea|lea|loa|thie)f$":"$1ves",sis$:"ses","([ti])um$":"$1a","(tomat|potat|ech|her|vet)o$":"$1oes","(bu)s$":"$1ses","(alias)$":"$1es","(octop)us$":"$1i","(ax|test)is$":"$1es","(us)$":"$1es","([^s]+)$":"$1s"},r={move:"moves",foot:"feet",goose:"geese",sex:"sexes",child:"children",man:"men",tooth:"teeth",person:"people"};if(["sheep","fish","deer","moose","series","species","money","rice","information","equipment","bison","cod","offspring","pike","salmon","shrimp","swine","trout","aircraft","hovercraft","spacecraft","sugar","tuna","you","wood"].indexOf(e.toLowerCase())>=0)return e;for(const o in r){const t=new RegExp(o+"$","i"),n=r[o];if(t.test(e))return e.replace(t,n)}for(const o in n){const t=new RegExp(o,"i");if(t.test(e))return e.replace(t,n[o])}return e}n.d(t,{_:function(){return r}})},509:function(e,t,n){var r=n(9985),o=n(3691),i=TypeError;e.exports=function(e){if(r(e))return e;throw new i(o(e)+" is not a function")}},7370:function(e,t,n){var r=n(4201),o=n(5391),i=n(2560).f,a=r("unscopables"),c=Array.prototype;void 0===c[a]&&i(c,a,{configurable:!0,value:o(null)}),e.exports=function(e){c[a][e]=!0}},5027:function(e,t,n){var r=n(8999),o=String,i=TypeError;e.exports=function(e){if(r(e))return e;throw new i(o(e)+" is not an object")}},4328:function(e,t,n){var r=n(5290),o=n(7578),i=n(6310),a=function(e){return function(t,n,a){var c,l=r(t),u=i(l),s=o(a,u);if(e&&n!=n){for(;u>s;)if((c=l[s++])!=c)return!0}else for(;u>s;s++)if((e||s in l)&&l[s]===n)return e||s||0;return!e&&-1}};e.exports={includes:a(!0),indexOf:a(!1)}},6648:function(e,t,n){var r=n(8844),o=r({}.toString),i=r("".slice);e.exports=function(e){return i(o(e),8,-1)}},5014:function(e,t,n){var r=n(9037),o=Object.defineProperty;e.exports=function(e,t){try{o(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},7697:function(e,t,n){var r=n(3689);e.exports=!r((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},6420:function(e,t,n){var r=n(9037),o=n(8999),i=r.document,a=o(i)&&o(i.createElement);e.exports=function(e){return a?i.createElement(e):{}}},71:function(e){e.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},3615:function(e,t,n){var r,o,i=n(9037),a=n(71),c=i.process,l=i.Deno,u=c&&c.versions||l&&l.version,s=u&&u.v8;s&&(o=(r=s.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&a&&(!(r=a.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=a.match(/Chrome\/(\d+)/))&&(o=+r[1]),e.exports=o},2739:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},3689:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},7215:function(e,t,n){var r=n(3689);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},2615:function(e,t,n){var r=n(7215),o=Function.prototype.call;e.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},8844:function(e,t,n){var r=n(7215),o=Function.prototype,i=o.call,a=r&&o.bind.bind(i,i);e.exports=r?a:function(e){return function(){return i.apply(e,arguments)}}},6058:function(e,t,n){var r=n(9037),o=n(9985);e.exports=function(e,t){return arguments.length<2?(n=r[e],o(n)?n:void 0):r[e]&&r[e][t];var n}},4849:function(e,t,n){var r=n(509),o=n(981);e.exports=function(e,t){var n=e[t];return o(n)?void 0:r(n)}},9037:function(e,t,n){var r=function(e){return e&&e.Math===Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||r("object"==typeof this&&this)||function(){return this}()||Function("return this")()},6812:function(e,t,n){var r=n(8844),o=n(690),i=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return i(o(e),t)}},7248:function(e){e.exports={}},2688:function(e,t,n){var r=n(6058);e.exports=r("document","documentElement")},8506:function(e,t,n){var r=n(7697),o=n(3689),i=n(6420);e.exports=!r&&!o((function(){return 7!==Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},4413:function(e,t,n){var r=n(8844),o=n(3689),i=n(6648),a=Object,c=r("".split);e.exports=o((function(){return!a("z").propertyIsEnumerable(0)}))?function(e){return"String"===i(e)?c(e,""):a(e)}:a},9985:function(e){var t="object"==typeof document&&document.all;e.exports=void 0===t&&void 0!==t?function(e){return"function"==typeof e||e===t}:function(e){return"function"==typeof e}},981:function(e){e.exports=function(e){return null==e}},8999:function(e,t,n){var r=n(9985);e.exports=function(e){return"object"==typeof e?null!==e:r(e)}},3931:function(e){e.exports=!1},734:function(e,t,n){var r=n(6058),o=n(9985),i=n(3622),a=n(9525),c=Object;e.exports=a?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return o(t)&&i(t.prototype,c(e))}},6310:function(e,t,n){var r=n(3126);e.exports=function(e){return r(e.length)}},8828:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},5391:function(e,t,n){var r,o=n(5027),i=n(8920),a=n(2739),c=n(7248),l=n(2688),u=n(6420),s=n(2713),f="prototype",d="script",p=s("IE_PROTO"),m=function(){},v=function(e){return"<"+d+">"+e+"</"+d+">"},y=function(e){e.write(v("")),e.close();var t=e.parentWindow.Object;return e=null,t},h=function(){try{r=new ActiveXObject("htmlfile")}catch(i){}var e,t,n;h="undefined"!=typeof document?document.domain&&r?y(r):(t=u("iframe"),n="java"+d+":",t.style.display="none",l.appendChild(t),t.src=String(n),(e=t.contentWindow.document).open(),e.write(v("document.F=Object")),e.close(),e.F):y(r);for(var o=a.length;o--;)delete h[f][a[o]];return h()};c[p]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(m[f]=o(e),n=new m,m[f]=null,n[p]=e):n=h(),void 0===t?n:i.f(n,t)}},8920:function(e,t,n){var r=n(7697),o=n(5648),i=n(2560),a=n(5027),c=n(5290),l=n(300);t.f=r&&!o?Object.defineProperties:function(e,t){a(e);for(var n,r=c(t),o=l(t),u=o.length,s=0;u>s;)i.f(e,n=o[s++],r[n]);return e}},2560:function(e,t,n){var r=n(7697),o=n(8506),i=n(5648),a=n(5027),c=n(8360),l=TypeError,u=Object.defineProperty,s=Object.getOwnPropertyDescriptor,f="enumerable",d="configurable",p="writable";t.f=r?i?function(e,t,n){if(a(e),t=c(t),a(n),"function"==typeof e&&"prototype"===t&&"value"in n&&p in n&&!n[p]){var r=s(e,t);r&&r[p]&&(e[t]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:f in n?n[f]:r[f],writable:!1})}return u(e,t,n)}:u:function(e,t,n){if(a(e),t=c(t),a(n),o)try{return u(e,t,n)}catch(r){}if("get"in n||"set"in n)throw new l("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},3622:function(e,t,n){var r=n(8844);e.exports=r({}.isPrototypeOf)},4948:function(e,t,n){var r=n(8844),o=n(6812),i=n(5290),a=n(4328).indexOf,c=n(7248),l=r([].push);e.exports=function(e,t){var n,r=i(e),u=0,s=[];for(n in r)!o(c,n)&&o(r,n)&&l(s,n);for(;t.length>u;)o(r,n=t[u++])&&(~a(s,n)||l(s,n));return s}},300:function(e,t,n){var r=n(4948),o=n(2739);e.exports=Object.keys||function(e){return r(e,o)}},5899:function(e,t,n){var r=n(2615),o=n(9985),i=n(8999),a=TypeError;e.exports=function(e,t){var n,c;if("string"===t&&o(n=e.toString)&&!i(c=r(n,e)))return c;if(o(n=e.valueOf)&&!i(c=r(n,e)))return c;if("string"!==t&&o(n=e.toString)&&!i(c=r(n,e)))return c;throw new a("Can't convert object to primitive value")}},4684:function(e,t,n){var r=n(981),o=TypeError;e.exports=function(e){if(r(e))throw new o("Can't call method on "+e);return e}},2713:function(e,t,n){var r=n(3430),o=n(4630),i=r("keys");e.exports=function(e){return i[e]||(i[e]=o(e))}},4091:function(e,t,n){var r=n(9037),o=n(5014),i="__core-js_shared__",a=r[i]||o(i,{});e.exports=a},3430:function(e,t,n){var r=n(3931),o=n(4091);(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.35.1",mode:r?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.35.1/LICENSE",source:"https://github.com/zloirock/core-js"})},146:function(e,t,n){var r=n(3615),o=n(3689),i=n(9037).String;e.exports=!!Object.getOwnPropertySymbols&&!o((function(){var e=Symbol("symbol detection");return!i(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},7578:function(e,t,n){var r=n(8700),o=Math.max,i=Math.min;e.exports=function(e,t){var n=r(e);return n<0?o(n+t,0):i(n,t)}},5290:function(e,t,n){var r=n(4413),o=n(4684);e.exports=function(e){return r(o(e))}},8700:function(e,t,n){var r=n(8828);e.exports=function(e){var t=+e;return t!=t||0===t?0:r(t)}},3126:function(e,t,n){var r=n(8700),o=Math.min;e.exports=function(e){var t=r(e);return t>0?o(t,9007199254740991):0}},690:function(e,t,n){var r=n(4684),o=Object;e.exports=function(e){return o(r(e))}},8732:function(e,t,n){var r=n(2615),o=n(8999),i=n(734),a=n(4849),c=n(5899),l=n(4201),u=TypeError,s=l("toPrimitive");e.exports=function(e,t){if(!o(e)||i(e))return e;var n,l=a(e,s);if(l){if(void 0===t&&(t="default"),n=r(l,e,t),!o(n)||i(n))return n;throw new u("Can't convert object to primitive value")}return void 0===t&&(t="number"),c(e,t)}},8360:function(e,t,n){var r=n(8732),o=n(734);e.exports=function(e){var t=r(e,"string");return o(t)?t:t+""}},3691:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},4630:function(e,t,n){var r=n(8844),o=0,i=Math.random(),a=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+a(++o+i,36)}},9525:function(e,t,n){var r=n(146);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5648:function(e,t,n){var r=n(7697),o=n(3689);e.exports=r&&o((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4201:function(e,t,n){var r=n(9037),o=n(3430),i=n(6812),a=n(4630),c=n(146),l=n(9525),u=r.Symbol,s=o("wks"),f=l?u.for||u:u&&u.withoutSetter||a;e.exports=function(e){return i(s,e)||(s[e]=c&&i(u,e)?u[e]:f("Symbol."+e)),s[e]}},3383:function(e,t,n){n(7370)("flat")}}]);
//# sourceMappingURL=component---node-modules-gatsby-theme-portfolio-minimal-src-templates-article-listing-index-tsx-60355fec7cfb4cfe93a7.js.map