import{_ as e}from"./index.40081bc3.js";import{d as a,aJ as s,aF as t,r as o,aK as n,K as l,aZ as r,bi as i,ck as c,e as d,h as p,o as u,i as f,bw as v,j as m,l as x,k as g}from"./index.726a1292.js";import"./index.fc8abf96.js";import"./RightOutlined.97d13c0b.js";import"./EllipsisOutlined.f451d7d8.js";import"./types.96074ade.js";import"./isEqual.aa473c94.js";import"./toInteger.410aca8d.js";/* empty css              */import"./vendor.3b1829c7.js";var j=a({name:"AppLocalPicker",components:{Dropdown:e,Icon:s},props:{showText:t.bool.def(!0),reload:t.bool},setup(e){const a=o([]),{prefixCls:s}=n("app-locale-picker"),{localeList:t}=i(),{changeLocale:p,getLang:u}=c(),f=l((()=>{var e;const s=a.value[0];return s?null==(e=t.find((e=>e.event===s)))?void 0:e.text:""}));return r((()=>{a.value=[d(u)]})),{localeList:t,handleMenuEvent:function(s){var t;t=s.event,p(t),a.value=[t],e.reload&&location.reload()},selectedKeys:a,getLangText:f,prefixCls:s}}});const L=v("data-v-25af17ef"),b=L(((e,a,s,t,o,n)=>{const l=p("Icon"),r=p("Dropdown");return u(),f(r,{trigger:["click"],dropMenuList:e.localeList,selectedKeys:e.selectedKeys,onMenuEvent:e.handleMenuEvent,overlayClassName:`${e.prefixCls}-overlay`},{default:L((()=>[m("span",{class:e.prefixCls},[m(l,{icon:"cil:language"}),e.showText?(u(),f("span",{key:0,class:`${e.prefixCls}__text`},x(e.getLangText),3)):g("",!0)],2)])),_:1},8,["dropMenuList","selectedKeys","onMenuEvent","overlayClassName"])}));j.render=b,j.__scopeId="data-v-25af17ef";export default j;