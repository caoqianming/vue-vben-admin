import{cA as a,d as s,B as t,co as e,a6 as o,aI as r,g as i,bD as d,bE as n,h as c,o as m,i as l,aL as p,j as u,m as f}from"./index.02d1965c.js";import{_ as j}from"./index.15b9a23c.js";import"./_stringToArray.2de96d92.js";import"./domUtils.be3edd39.js";import"./index.fb8d6796.js";import"./index.08e233ae.js";import{a as b}from"./index.daf19870.js";import"./index.e7faca86.js";import"./FullscreenOutlined.247db61e.js";import"./RightOutlined.d46e4d56.js";import"./useTimeout.5f562c84.js";import"./index.46df4a2f.js";import"./animation.218b0c8c.js";import"./useScrollTo.b870f612.js";import{_ as h}from"./header.ab446760.js";import"./useAttrs.c1394557.js";import"./useWindowSizeFn.9d82b09a.js";import"./index.41a5a7ee.js";import"./uuid.a6cec785.js";import"./download.cbcf9755.js";import{u as g}from"./useForm.c6ae5496.js";import{b as _}from"./data.a32591d5.js";var x;(x||(x={})).ACCOUNT_INFO="/account/getAccountInfo";var C=s({components:{BasicForm:j,CollapseContainer:b,Button:t,Upload:e,Icon:o},setup(){const{createMessage:s}=i(),[t,{setFieldsValue:e}]=g({labelWidth:120,schemas:_,showActionButtonGroup:!1});return r((async()=>{const s=await a.request({url:x.ACCOUNT_INFO,method:"GET"});e(s)})),{headerImg:h,register:t,handleSubmit:()=>{s.success("更新成功！")}}}});const I=p("data-v-7482d48c");d("data-v-7482d48c");const v={class:"change-avatar"},F=u("div",{class:"mb-2"},"头像",-1),w=f("更换头像 "),A=f("更新基本信息");n();const B=I(((a,s,t,e,o,r)=>{const i=c("BasicForm"),d=c("a-col"),n=c("Icon"),p=c("Button"),f=c("Upload"),j=c("a-row"),b=c("CollapseContainer");return m(),l(b,{title:"基本设置",canExpan:!1},{default:I((()=>[u(j,{gutter:24},{default:I((()=>[u(d,{span:14},{default:I((()=>[u(i,{onRegister:a.register},null,8,["onRegister"])])),_:1}),u(d,{span:10},{default:I((()=>[u("div",v,[F,u("img",{width:"140",src:a.headerImg},null,8,["src"]),u(f,{showUploadList:!1},{default:I((()=>[u(p,{type:"ghost",class:"ml-5"},{default:I((()=>[u(n,{icon:"feather:upload"}),w])),_:1})])),_:1})])])),_:1})])),_:1}),u(p,{type:"primary",onClick:a.handleSubmit},{default:I((()=>[A])),_:1},8,["onClick"])])),_:1})}));C.render=B,C.__scopeId="data-v-7482d48c";export default C;