import{q as e,a as t,r as n,s,Q as o,F as l,cv as i,f as c,W as a,ad as r,di as d,k as u,dj as m,cn as p}from"./index.a952a825.js";import{M as f}from"./index.e3c10438.js";import{D as h}from"./index.36c067bc.js";import{s as v}from"./index.ab19a1be.js";const y={width:e.number.def(156),customEvent:{type:Object,default:null},styles:e.style,showIcon:e.bool.def(!0),axis:{type:Object,default:()=>({x:0,y:0})},items:{type:Array,default:()=>[]}},b=e=>{const{item:t}=e;return a("span",{style:"display: inline-block; width: 100%;",onClick:e.handler.bind(null,t)},e.showIcon&&t.icon&&a(v,{class:"mr-2",icon:t.icon}),a("span",null,t.label))};var x=t({name:"ContextMenu",props:y,setup(e){const t=n(null),d=n(!1),u=s((()=>{const{axis:t,items:n,styles:s,width:o}=e,{x:l,y:i}=t||{x:0,y:0},c=40*(n||[]).length,a=o,r=document.body;return{...s,width:`${o}px`,left:`${(r.clientWidth<l+a?l-a:l)+1}px`,top:`${(r.clientHeight<i+c?i-c:i)+1}px`}}));function m(e,t){const{handler:n,disabled:s}=e;s||(d.value=!1,null==t||t.stopPropagation(),null==t||t.preventDefault(),null==n||n())}function p(t){return t.map((t=>{const{disabled:n,label:s,children:o,divider:l=!1}=t,i=l?a(h,{key:`d-${s}`}):null;return o&&0!==o.length?c(d)?a(f.SubMenu,{key:s,disabled:n,popupClassName:"context-menu__popup"},{title:()=>a(b,{showIcon:e.showIcon,item:t,handler:m}),default:()=>p(o)}):null:a(r,null,a(f.Item,{disabled:n,class:"context-menu__item",key:s},(()=>[a(b,{showIcon:e.showIcon,item:t,handler:m})])),i)}))}return o((()=>{l((()=>d.value=!0))})),i((()=>{const e=c(t);e&&document.body.removeChild(e)})),()=>{const{items:n}=e;return c(d)?a(f,{inlineIndent:12,mode:"vertical",class:"context-menu",ref:t,style:c(u)},(()=>p(n))):null}}});const w={domList:[],resolve:()=>{}},k=function(e){const{event:t}=e||{};if(t&&(null==t||t.preventDefault()),d)return new Promise((n=>{const s=document.body,o=document.createElement("div"),l={};e.styles&&(l.styles=e.styles),e.items&&(l.items=e.items),e.event&&(l.customEvent=t,l.axis={x:t.clientX,y:t.clientY});const i=u(x,l);m(i,o);const c=function(){w.resolve("")};w.domList.push(o);const a=function(){w.domList.forEach((e=>{try{e&&s.removeChild(e)}catch(e){}})),s.removeEventListener("click",c),s.removeEventListener("scroll",c)};w.resolve=function(...e){a(),n(e[0])},a(),s.appendChild(o),s.addEventListener("click",c),s.addEventListener("scroll",c)}))},E=function(){w&&(w.resolve(""),w.domList=[])};function I(e=!0){return p()&&e&&i((()=>{E()})),[k,E]}export{I as u};