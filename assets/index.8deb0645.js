import{d as e,aV as a,aW as o,aF as s,aK as r,u as t,K as n,f as i,bf as d,h as l,o as p,i as c,w as m,j as u,k as f,l as g}from"./index.d77f02a9.js";import{D as h,M as x}from"./index.7e51aec0.js";/* empty css              */import"./index.61d5349a.js";import{D as j}from"./siteSetting.c485f07c.js";import{d as C}from"./useHeaderSetting.f552c217.js";import{h as D}from"./header.d801b988.js";import"./vendor.3b1829c7.js";import"./RightOutlined.91dd89cb.js";import"./EllipsisOutlined.d6473483.js";import"./types.7d2364ed.js";import"./isEqual.66f620a0.js";import"./toInteger.007e1a46.js";var w=e({name:"UserDropdown",components:{Dropdown:h,Menu:x,MenuItem:a((()=>o((()=>import("./DropMenuItem.4a379d7a.js")),["/assets/DropMenuItem.4a379d7a.js","/assets/index.f8cd4764.css","/assets/index.d77f02a9.js","/assets/index.06ce6422.css","/assets/vendor.3b1829c7.js","/assets/vendor.4a5fa02d.css","/assets/index.7e51aec0.js","/assets/index.271c2814.css","/assets/RightOutlined.91dd89cb.js","/assets/EllipsisOutlined.d6473483.js","/assets/types.7d2364ed.js","/assets/isEqual.66f620a0.js","/assets/toInteger.007e1a46.js"]))),MenuDivider:x.Divider},props:{theme:s.oneOf(["dark","light"])},setup(){const{prefixCls:e}=r("header-user-dropdown"),{t:a}=t(),{getShowDoc:o}=C();return{prefixCls:e,t:a,getUserInfo:n((()=>{const{realName:e="",desc:a}=i.getUserInfoState||{};return{realName:e,desc:a}})),handleMenuClick:function(e){switch(e.key){case"loginOut":i.confirmLoginOut();break;case"doc":d(j)}},getShowDoc:o,headerImg:D}}});w.render=function(e,a,o,s,r,t){const n=l("MenuItem"),i=l("MenuDivider"),d=l("Menu"),h=l("Dropdown");return p(),c(h,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:m((()=>[u(d,{onClick:e.handleMenuClick},{default:m((()=>[e.getShowDoc?(p(),c(n,{key:"doc",text:e.t("layout.header.dropdownItemDoc"),icon:"gg:loadbar-doc"},null,8,["text"])):f("",!0),u(i),u(n,{key:"loginOut",text:e.t("layout.header.dropdownItemLoginOut"),icon:"carbon:power"},null,8,["text"])])),_:1},8,["onClick"])])),default:m((()=>[u("span",{class:[e.prefixCls,`${e.prefixCls}--${e.theme}`]},[u("img",{class:`${e.prefixCls}__header`,src:e.headerImg},null,10,["src"]),u("span",{class:`${e.prefixCls}__info`},[u("span",{class:`${e.prefixCls}__name anticon`},g(e.getUserInfo.realName),3)],2)],2)])),_:1},8,["overlayClassName"])};export default w;
