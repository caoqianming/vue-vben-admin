import{d as e,aV as a,aW as o,aF as s,aK as r,u as t,K as n,f as i,bf as d,h as l,o as c,i as p,w as m,j as f,k as u,l as g}from"./index.cf365317.js";import{D as h,M as x}from"./index.0444d019.js";/* empty css              */import"./index.579d8600.js";import{D as j}from"./siteSetting.c485f07c.js";import{d as C}from"./useHeaderSetting.c5562c91.js";import{h as D}from"./header.d801b988.js";import"./vendor.3b1829c7.js";import"./RightOutlined.dff2a05b.js";import"./EllipsisOutlined.45abe0a5.js";import"./types.d79f185c.js";import"./isEqual.a74a7c19.js";import"./toInteger.4b5728ae.js";var w=e({name:"UserDropdown",components:{Dropdown:h,Menu:x,MenuItem:a((()=>o((()=>import("./DropMenuItem.2e599fab.js")),["/assets/DropMenuItem.2e599fab.js","/assets/index.20066e29.css","/assets/index.cf365317.js","/assets/index.e5c5d570.css","/assets/vendor.3b1829c7.js","/assets/vendor.4a5fa02d.css","/assets/index.0444d019.js","/assets/index.271c2814.css","/assets/RightOutlined.dff2a05b.js","/assets/EllipsisOutlined.45abe0a5.js","/assets/types.d79f185c.js","/assets/isEqual.a74a7c19.js","/assets/toInteger.4b5728ae.js"]))),MenuDivider:x.Divider},props:{theme:s.oneOf(["dark","light"])},setup(){const{prefixCls:e}=r("header-user-dropdown"),{t:a}=t(),{getShowDoc:o}=C();return{prefixCls:e,t:a,getUserInfo:n((()=>{const{realName:e="",desc:a}=i.getUserInfoState||{};return{realName:e,desc:a}})),handleMenuClick:function(e){switch(e.key){case"loginOut":i.confirmLoginOut();break;case"doc":d(j)}},getShowDoc:o,headerImg:D}}});w.render=function(e,a,o,s,r,t){const n=l("MenuItem"),i=l("MenuDivider"),d=l("Menu"),h=l("Dropdown");return c(),p(h,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:m((()=>[f(d,{onClick:e.handleMenuClick},{default:m((()=>[e.getShowDoc?(c(),p(n,{key:"doc",text:e.t("layout.header.dropdownItemDoc"),icon:"gg:loadbar-doc"},null,8,["text"])):u("",!0),f(i),f(n,{key:"loginOut",text:e.t("layout.header.dropdownItemLoginOut"),icon:"carbon:power"},null,8,["text"])])),_:1},8,["onClick"])])),default:m((()=>[f("span",{class:[e.prefixCls,`${e.prefixCls}--${e.theme}`]},[f("img",{class:`${e.prefixCls}__header`,src:e.headerImg},null,10,["src"]),f("span",{class:`${e.prefixCls}__info`},[f("span",{class:`${e.prefixCls}__name anticon`},g(e.getUserInfo.realName),3)],2)],2)])),_:1},8,["overlayClassName"])};export default w;
