import{d as e,aJ as n,aK as o,K as s,e as t,aP as a,h as c,o as r,i as d,j as l}from"./index.cf365317.js";import{d as i}from"./useHeaderSetting.c5562c91.js";import"./vendor.3b1829c7.js";var u=e({name:"FoldButton",components:{Icon:n},setup(){const{prefixCls:e}=o("multiple-tabs-content"),{getShowMenu:n,setMenuSetting:c}=a(),{getShowHeader:r,setHeaderSetting:d}=i(),l=s((()=>!t(n)&&!t(r)));return{prefixCls:e,getIcon:s((()=>t(l)?"codicon:screen-normal":"codicon:screen-full")),handleFold:function(){const e=!t(n)&&!t(r);c({show:e,hidden:!e}),d({show:e})}}}});u.render=function(e,n,o,s,t,a){const i=c("Icon");return r(),d("span",{class:`${e.prefixCls}__extra-fold`,onClick:n[1]||(n[1]=(...n)=>e.handleFold&&e.handleFold(...n))},[l(i,{icon:e.getIcon},null,8,["icon"])],2)};export default u;
