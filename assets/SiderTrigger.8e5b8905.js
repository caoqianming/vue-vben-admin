import{j as e,a0 as t,a1 as n,d as r,af as o,h as a,o as l,i}from"./index.02d1965c.js";import{D as u}from"./DoubleRightOutlined.7865ff03.js";var c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z"}}]},name:"double-left",theme:"outlined"};function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=function(r,o){var a=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){s(e,t,n[t])}))}return e}({},r,o.attrs);return e(n,t(a,{icon:c}),null)};f.displayName="DoubleLeftOutlined",f.inheritAttrs=!1;var d=r({name:"SiderTrigger",components:{DoubleRightOutlined:u,DoubleLeftOutlined:f},setup(){const{getCollapsed:e}=o();return{getCollapsed:e}}});d.render=function(e,t,n,r,o,u){const c=a("DoubleRightOutlined"),s=a("DoubleLeftOutlined");return e.getCollapsed?(l(),i(c,{key:0})):(l(),i(s,{key:1}))};export default d;