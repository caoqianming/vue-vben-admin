import{j as e,a7 as t,a8 as o,d as n,aK as a,u as r,e as c,bG as s,dU as l,dN as i,dO as u,bg as d,g as f,h as p,o as g,i as y,m,l as b,bw as C}from"./index.d77f02a9.js";import{u as v}from"./useCopyToClipboard.e4964030.js";import{R as h}from"./RedoOutlined.3ae45394.js";import"./vendor.3b1829c7.js";var O={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"};function S(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var j=function(n,a){var r=function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?Object(arguments[t]):{},n=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),n.forEach((function(t){S(e,t,o[t])}))}return e}({},n,a.attrs);return e(o,t(r,{icon:O}),null)};j.displayName="CopyOutlined",j.inheritAttrs=!1;var k=n({name:"SettingFooter",components:{CopyOutlined:j,RedoOutlined:h},setup(){const{getRootSetting:e}=d(),{prefixCls:t}=a("setting-footer"),{t:o}=r(),{createSuccessModal:n,createMessage:p}=f();return{prefixCls:t,t:o,handleCopy:function(){const{isSuccessRef:t}=v(JSON.stringify(c(e),null,2));c(t)&&n({title:o("layout.setting.operatingTitle"),content:o("layout.setting.operatingContent")})},handleResetSetting:function(){try{s.commitProjectConfigState(l);const{colorWeak:e,grayMode:t}=l;i(e),u(t),p.success(o("layout.setting.resetSuccess"))}catch(e){p.error(e)}},handleClearAndRedo:function(){localStorage.clear(),s.resumeAllState(),location.reload()}}}});const R=C("data-v-6e37453e"),w=R(((t,o,n,a,r,c)=>{const s=p("CopyOutlined"),l=p("a-button"),i=p("RedoOutlined");return g(),y("div",{class:t.prefixCls},[e(l,{type:"primary",block:"",onClick:t.handleCopy},{default:R((()=>[e(s,{class:"mr-2"}),m(" "+b(t.t("layout.setting.copyBtn")),1)])),_:1},8,["onClick"]),e(l,{color:"warning",block:"",onClick:t.handleResetSetting,class:"my-3"},{default:R((()=>[e(i,{class:"mr-2"}),m(" "+b(t.t("common.resetText")),1)])),_:1},8,["onClick"]),e(l,{color:"error",block:"",onClick:t.handleClearAndRedo},{default:R((()=>[e(i,{class:"mr-2"}),m(" "+b(t.t("layout.setting.clearBtn")),1)])),_:1},8,["onClick"])],2)}));k.render=w,k.__scopeId="data-v-6e37453e";export default k;
