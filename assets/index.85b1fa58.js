var e=Object.assign;import{j as t,a0 as o,a1 as s,u as l,a2 as a,d as n,a9 as r,q as i,h as c,o as u,i as d,ab as p,b8 as f,w as g,m as b,l as h,k as w,aQ as v,r as k,b9 as C,ai as m,bd as y,e as D,ak as x,cz as O,t as $,bw as P,S as B,aP as j,aM as _,az as T,ac as F,a as S,cD as L,bh as H,cE as V,ck as A,cy as z,bf as M}from"./index.02d1965c.js";import{d as N,_ as E}from"./index.daf19870.js";import{u as I}from"./useAttrs.c1394557.js";var R={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"};function q(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var Q=function(e,l){var a=function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?Object(arguments[t]):{},s=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),s.forEach((function(t){q(e,t,o[t])}))}return e}({},e,l.attrs);return t(s,o(a,{icon:R}),null)};Q.displayName="ArrowLeftOutlined",Q.inheritAttrs=!1;const{t:W}=l(),G={confirmLoading:a.bool,showCancelBtn:a.bool.def(!0),cancelButtonProps:Object,cancelText:a.string.def(W("component.drawer.cancelText")),showOkBtn:a.bool.def(!0),okButtonProps:Object,okText:a.string.def(W("component.drawer.okText")),okType:a.string.def("primary"),showFooter:a.bool,footerHeight:{type:[String,Number],default:60}},J=e({isDetail:a.bool,title:a.string.def(""),loadingText:a.string,showDetailBack:a.bool.def(!0),visible:a.bool,loading:a.bool,maskClosable:a.bool.def(!0),getContainer:{type:[Object,String]},scrollOptions:{type:Object,default:null},closeFunc:{type:[Function,Object],default:null},triggerWindowResize:a.bool,destroyOnClose:a.bool},G);var K=n({name:"BasicDrawerFooter",props:e(e({},G),{height:{type:String,default:"60px"}}),emits:["ok","close"],setup(e,{emit:t}){const{prefixCls:o}=r("basic-drawer-footer");return{handleOk:function(){t("ok")},prefixCls:o,handleClose:function(){t("close")},getStyle:i((()=>{const t=`${e.height}`;return{height:t,lineHeight:t}}))}}});K.render=function(e,t,s,l,a,n){const r=c("a-button");return e.showFooter||e.$slots.footer?(u(),d("div",{key:0,class:e.prefixCls,style:e.getStyle},[e.$slots.footer?f(e.$slots,"footer",{key:1}):(u(),d(p,{key:0},[f(e.$slots,"insertFooter"),e.showCancelBtn?(u(),d(r,o({key:0},e.cancelButtonProps,{onClick:e.handleClose,class:"mr-2"}),{default:g((()=>[b(h(e.cancelText),1)])),_:1},16,["onClick"])):w("",!0),f(e.$slots,"centerFooter"),e.showOkBtn?(u(),d(r,o({key:1,type:e.okType,onClick:e.handleOk},e.okButtonProps,{class:"mr-2",loading:e.confirmLoading}),{default:g((()=>[b(h(e.okText),1)])),_:1},16,["type","onClick","loading"])):w("",!0),f(e.$slots,"appendFooter")],64))],6)):w("",!0)};var U=n({name:"BasicDrawerHeader",components:{BasicTitle:N,ArrowLeftOutlined:Q},props:{isDetail:a.bool,showDetailBack:a.bool,title:a.string},setup(e,{emit:t}){const{prefixCls:o}=r("basic-drawer-header");return{prefixCls:o,handleClose:function(){t("close")}}}});const X={key:1};U.render=function(e,o,s,l,a,n){const r=c("BasicTitle"),i=c("ArrowLeftOutlined");return e.isDetail?(u(),d("div",{key:1,class:[e.prefixCls,`${e.prefixCls}--detail`]},[t("span",{class:`${e.prefixCls}__twrap`},[e.showDetailBack?(u(),d("span",{key:0,onClick:o[1]||(o[1]=(...t)=>e.handleClose&&e.handleClose(...t))},[t(i,{class:`${e.prefixCls}__back`},null,8,["class"])])):w("",!0),e.title?(u(),d("span",X,h(e.title),1)):w("",!0)],2),t("span",{class:`${e.prefixCls}__toolbar`},[f(e.$slots,"titleToolbar")],2)],2)):(u(),d(r,{key:0,class:e.prefixCls},{default:g((()=>[f(e.$slots,"title"),b(" "+h(e.$slots.title?"":e.title),1)])),_:3},8,["class"]))};var Y=n({inheritAttrs:!1,components:{Drawer:v,ScrollContainer:E,DrawerFooter:K,DrawerHeader:U},props:J,emits:["visible-change","ok","close","register"],setup(t,{emit:o}){const s=k(!1),a=I(),n=k(null),{t:c}=l(),{prefixVar:u,prefixCls:d}=r("basic-drawer"),p={setDrawerProps:function(e){n.value=O(D(n)||{},e),Reflect.has(e,"visible")&&(s.value=!!e.visible)},emitVisible:void 0},f=y();f&&o("register",p,f.uid);const g=i((()=>O($(t),D(n)))),b=i((()=>{const t=e(e(e({placement:"right"},D(a)),D(g)),{visible:D(s)});t.title=void 0;const{isDetail:o,width:l,wrapClassName:n,getContainer:r}=t;if(o){l||(t.width="100%");const e=`${d}__detail`;t.wrapClassName=n?`${n} ${e}`:e,r||(t.getContainer=`.${u}-layout-content`)}return t})),h=i((()=>e(e({},a),D(b)))),w=i((()=>{const{footerHeight:e,showFooter:t}=D(b);return t&&e?P(e)?`${e}px`:`${e.replace("px","")}px`:"0px"})),v=i((()=>({position:"relative",height:`calc(100% - ${D(w)})`}))),j=i((()=>{var e;return!!(null==(e=D(b))?void 0:e.loading)}));return C((()=>{s.value=t.visible})),m((()=>s.value),(e=>{B((()=>{var t;o("visible-change",e),f&&(null==(t=p.emitVisible)||t.call(p,e,f.uid))}))})),{onClose:async function(e){const{closeFunc:t}=D(b);if(o("close",e),t&&x(t)){const e=await t();s.value=!e}else s.value=!1},t:c,prefixCls:d,getMergeProps:g,getScrollContentStyle:v,getProps:b,getLoading:j,getBindValues:h,getFooterHeight:w,handleOk:function(){o("ok")}}}});Y.render=function(e,s,l,a,n,r){const i=c("DrawerHeader"),p=c("ScrollContainer"),b=c("DrawerFooter"),h=c("Drawer"),w=j("loading");return u(),d(h,o({class:e.prefixCls,onClose:e.onClose},e.getBindValues),_({default:g((()=>[T(t(p,{style:e.getScrollContentStyle,"loading-tip":e.loadingText||e.t("component.drawer.loadingText")},{default:g((()=>[f(e.$slots,"default")])),_:3},8,["style","loading-tip"]),[[w,e.getLoading]]),t(b,o(e.getProps,{onClose:e.onClose,onOk:e.handleOk,height:e.getFooterHeight}),_({_:2},[F(Object.keys(e.$slots),(t=>({name:t,fn:g((o=>[f(e.$slots,t,o)]))})))]),1040,["onClose","onOk","height"])])),_:2},[e.$slots.title?void 0:{name:"title",fn:g((()=>[t(i,{title:e.getMergeProps.title,isDetail:e.isDetail,showDetailBack:e.showDetailBack,onClose:e.onClose},{titleToolbar:g((()=>[f(e.$slots,"titleToolbar")])),_:1},8,["title","isDetail","showDetailBack","onClose"])]))}]),1040,["class","onClose"])};const Z=S({}),ee=S({});function te(){L();const e=k(null),t=k(!1),o=k("");const s=()=>{const t=D(e);return t||z("useDrawer instance is undefined!"),t};return[function(s,l){H((()=>{e.value=null,t.value=null,Z[D(o)]=null})),D(t)&&V()&&s===D(e)||(o.value=l,e.value=s,t.value=!0,s.emitVisible=(e,t)=>{ee[t]=e})},{setDrawerProps:e=>{var t;null==(t=s())||t.setDrawerProps(e)},getVisible:i((()=>ee[~~D(o)])),openDrawer:(e=!0,t,l=!0)=>{var a;if(null==(a=s())||a.setDrawerProps({visible:e}),!t)return;if(l)return Z[D(o)]=null,void(Z[D(o)]=t);A($(Z[D(o)]),t)||(Z[D(o)]=t)}}]}const oe=e=>{const t=k(null),o=y(),s=k("");o||z("useDrawerInner instance is undefined!");const l=()=>{const e=D(t);if(e)return e;z("useDrawerInner instance is undefined!")};return C((()=>{const t=Z[D(s)];t&&e&&x(e)&&B((()=>{e(t)}))})),[(e,l)=>{H((()=>{t.value=null})),s.value=l,t.value=e,null==o||o.emit("register",e,l)},{changeLoading:(e=!0)=>{var t;null==(t=l())||t.setDrawerProps({loading:e})},changeOkLoading:(e=!0)=>{var t;null==(t=l())||t.setDrawerProps({confirmLoading:e})},getVisible:i((()=>ee[~~D(s)])),closeDrawer:()=>{var e;null==(e=l())||e.setDrawerProps({visible:!1})},setDrawerProps:e=>{var t;null==(t=l())||t.setDrawerProps(e)}}]};M(Y);export{Y as _,oe as a,te as u};