let e=document.createElement("style");e.innerHTML=".qrcode-demo-item[data-v-727cd0d1]{width:30%;margin-right:1%}",document.head.appendChild(e);import{ao as o,a as t,r as l,l as a,f as r,c$ as d,d0 as s,i,o as n,j as c,k as m,aS as u,p}from"./index.a952a825.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.a1c8f40e.js";import{a as g}from"./index.1619f591.js";import"./RightOutlined.07d991df.js";import"./useTimeout.3c09ffad.js";import"./tsxHelper.50b89473.js";import"./index.ea7d8d45.js";import"./domUtils.ad06f69d.js";import"./index.53160084.js";import"./resizeEvent.167fcdb9.js";import"./animation.581865d4.js";import"./useScrollTo.3b50ae2e.js";const v=o((()=>import("./index.d9ee79d0.js")));var f=t({components:{CollapseContainer:g,QrCode:v},setup(){const e=l(null);return{qrCodeUrl:"https://www.vvbin.cn",LogoImg:a,download:function(){const o=r(e);o&&o.download("文件名")},qrRef:e}}});const b=u("data-v-727cd0d1");d("data-v-727cd0d1");const q={class:"p-4 flex flex-wrap"},x=p(" 下载 "),j=m("div",{class:"msg"},"(在线logo会导致图片跨域，需要下载图片需要自行解决跨域问题)",-1);s();const C=b(((e,o,t,l,a,r)=>{const d=i("QrCode"),s=i("CollapseContainer"),u=i("a-button");return n(),c("div",q,[m(s,{title:"基础示例",canExpan:!0,class:"text-center mb-6 qrcode-demo-item"},{default:b((()=>[m(d,{value:e.qrCodeUrl},null,8,["value"])])),_:1}),m(s,{title:"渲染成img标签示例",class:"text-center mb-6 qrcode-demo-item"},{default:b((()=>[m(d,{value:e.qrCodeUrl,tag:"img"},null,8,["value"])])),_:1}),m(s,{title:"配置样式示例",class:"text-center mb-6 qrcode-demo-item"},{default:b((()=>[m(d,{value:e.qrCodeUrl,options:{color:{dark:"#55D187"}}},null,8,["value"])])),_:1}),m(s,{title:"本地logo示例",class:"text-center mb-6 qrcode-demo-item"},{default:b((()=>[m(d,{value:e.qrCodeUrl,logo:e.LogoImg},null,8,["value","logo"])])),_:1}),m(s,{title:"在线logo示例",class:"text-center mb-6 qrcode-demo-item"},{default:b((()=>[m(d,{value:e.qrCodeUrl,logo:"https://vebn.oss-cn-beijing.aliyuncs.com/vben/logo.png",options:{color:{dark:"#55D187"}}},null,8,["value"])])),_:1}),m(s,{title:"logo配置示例",class:"text-center mb-6 qrcode-demo-item"},{default:b((()=>[m(d,{value:e.qrCodeUrl,logo:{src:"https://vebn.oss-cn-beijing.aliyuncs.com/vben/logo.png",logoSize:.2,borderSize:.05,borderRadius:50,bgColor:"blue"}},null,8,["value","logo"])])),_:1}),m(s,{title:"下载示例",class:"text-center qrcode-demo-item"},{default:b((()=>[m(d,{value:e.qrCodeUrl,ref:"qrRef",logo:e.LogoImg},null,8,["value","logo"]),m(u,{class:"mb-2",type:"primary",onClick:e.download},{default:b((()=>[x])),_:1},8,["onClick"]),j])),_:1}),m(s,{title:"配置大小示例",class:"text-center qrcode-demo-item"},{default:b((()=>[m(d,{value:e.qrCodeUrl,width:300},null,8,["value"])])),_:1})])}));f.render=C,f.__scopeId="data-v-727cd0d1";export default f;