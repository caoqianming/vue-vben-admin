let e=document.createElement("style");e.innerHTML=".change-avatar img[data-v-c0c2b920]{display:block;margin-bottom:15px;border-radius:50%}",document.head.appendChild(e);import{dk as t,a,B as s,Q as i,h as o,c$ as r,d0 as d,i as n,o as m,j as c,aS as p,k as l,p as j}from"./index.a952a825.js";import"./xlsx.a48e520c.js";import"./index.041bce66.js";import"./Trigger.6f8f8573.js";import"./omit.1c9bfb01.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.ca2d5869.js";import"./CheckOutlined.44301b28.js";import{s as f}from"./index.a940dab4.js";import"./colors.c19e2bbc.js";import"./RightOutlined.94fd6a59.js";import"./types.de6a8d52.js";import{U as u}from"./index.3627dd48.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.a1c8f40e.js";import"./_baseFor.f4e5f03f.js";import"./index.51bebf76.js";import"./index.a172b251.js";import"./index.c4bdfd67.js";import"./index.79d94cfe.js";import"./UpOutlined.f7c9c4e6.js";import"./index.2f405b3a.js";import"./index.a9201ccf.js";import"./index.47d13434.js";import"./index.32ea9c37.js";import"./index.daaac866.js";import"./FileOutlined.f42ae5d7.js";import{a as b}from"./index.1619f591.js";import"./RightOutlined.07d991df.js";import"./useTimeout.3c09ffad.js";import"./tsxHelper.50b89473.js";import"./index.ea7d8d45.js";import"./domUtils.ad06f69d.js";import"./index.53160084.js";import"./resizeEvent.167fcdb9.js";import"./animation.581865d4.js";import"./useScrollTo.3b50ae2e.js";import{_ as x}from"./header.0299ae16.js";import{s as h}from"./index.ab19a1be.js";import"./index.d9bface4.js";import{u as g}from"./useForm.9a5c5b7d.js";import{b as _}from"./data.8adaf682.js";var C;(C||(C={})).ACCOUNT_INFO="/account/getAccountInfo";var v=a({components:{BasicForm:f,CollapseContainer:b,Button:s,Upload:u,Icon:h},setup(){const{createMessage:e}=o(),[a,{setFieldsValue:s}]=g({labelWidth:120,schemas:_,showActionButtonGroup:!1});return i((async()=>{const e=await t.request({url:C.ACCOUNT_INFO,method:"GET"});s(e)})),{headerImg:x,register:a,handleSubmit:()=>{e.success("更新成功！")}}}});const O=p("data-v-c0c2b920");r("data-v-c0c2b920");const F={class:"change-avatar"},y=l("div",{class:"mb-2"},"头像",-1),I=j("更换头像 "),T=j("更新基本信息");d();const U=O(((e,t,a,s,i,o)=>{const r=n("BasicForm"),d=n("a-col"),p=n("Icon"),j=n("Button"),f=n("Upload"),u=n("a-row"),b=n("CollapseContainer");return m(),c(b,{title:"基本设置",canExpan:!1},{default:O((()=>[l(u,{gutter:24},{default:O((()=>[l(d,{span:14},{default:O((()=>[l(r,{onRegister:e.register},null,8,["onRegister"])])),_:1}),l(d,{span:10},{default:O((()=>[l("div",F,[y,l("img",{width:"140",src:e.headerImg},null,8,["src"]),l(f,{showUploadList:!1},{default:O((()=>[l(j,{type:"ghost",class:"ml-5"},{default:O((()=>[l(p,{icon:"feather:upload"}),I])),_:1})])),_:1})])])),_:1})])),_:1}),l(j,{type:"primary",onClick:e.handleSubmit},{default:O((()=>[T])),_:1},8,["onClick"])])),_:1})}));v.render=U,v.__scopeId="data-v-c0c2b920";export default v;