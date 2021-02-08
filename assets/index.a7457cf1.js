import{aV as e,aW as o,d as t,r as l,L as a,e as r,cp as s,cq as d,h as i,o as n,i as m,j as c,bw as u,m as p}from"./index.726a1292.js";import{a as f}from"./index.56a51e6f.js";import{_ as g}from"./index.4b3faacc.js";import"./vendor.3b1829c7.js";import"./index.f4bd2380.js";import"./domUtils.88771570.js";import"./_stringToArray.d899db8d.js";import"./RightOutlined.97d13c0b.js";/* empty css              */import"./useTimeout.621e6290.js";import"./useScrollTo.367edc72.js";import"./animation.7e1378fc.js";import"./index.41b8ad5e.js";import"./index.fc8abf96.js";import"./EllipsisOutlined.f451d7d8.js";import"./types.96074ade.js";import"./isEqual.aa473c94.js";import"./toInteger.410aca8d.js";import"./DownOutlined.f011354d.js";import"./index.151c2907.js";import"./usePageContext.212455a7.js";import"./transButton.b72fffa2.js";import"./ArrowLeftOutlined.d3517891.js";const b=e((()=>o((()=>import("./index.37b5a0a6.js")),["/assets/index.37b5a0a6.js","/assets/vendor.3b1829c7.js","/assets/vendor.4a5fa02d.css","/assets/index.726a1292.js","/assets/index.baa8423f.css","/assets/download.d746980c.js"])));var v=t({components:{CollapseContainer:f,QrCode:b,PageWrapper:g},setup(){const e=l(null);return{qrCodeUrl:"https://www.vvbin.cn",LogoImg:a,download:function(){const o=r(e);o&&o.download("文件名")},qrRef:e}}});const j=u("data-v-f8968a82");s("data-v-f8968a82");const x={class:"flex flex-wrap"},q=p(" 下载 "),C=c("div",{class:"msg"}," (在线logo会导致图片跨域，需要下载图片需要自行解决跨域问题) ",-1);d();const _=j(((e,o,t,l,a,r)=>{const s=i("QrCode"),d=i("CollapseContainer"),u=i("a-button"),p=i("PageWrapper");return n(),m(p,{title:"二维码组件使用示例"},{default:j((()=>[c("div",x,[c(d,{title:"基础示例",canExpan:!0,class:"text-center mb-6 qrcode-demo-item"},{default:j((()=>[c(s,{value:e.qrCodeUrl},null,8,["value"])])),_:1}),c(d,{title:"渲染成img标签示例",class:"text-center mb-6 qrcode-demo-item"},{default:j((()=>[c(s,{value:e.qrCodeUrl,tag:"img"},null,8,["value"])])),_:1}),c(d,{title:"配置样式示例",class:"text-center mb-6 qrcode-demo-item"},{default:j((()=>[c(s,{value:e.qrCodeUrl,options:{color:{dark:"#55D187"}}},null,8,["value"])])),_:1}),c(d,{title:"本地logo示例",class:"text-center mb-6 qrcode-demo-item"},{default:j((()=>[c(s,{value:e.qrCodeUrl,logo:e.LogoImg},null,8,["value","logo"])])),_:1}),c(d,{title:"在线logo示例",class:"text-center mb-6 qrcode-demo-item"},{default:j((()=>[c(s,{value:e.qrCodeUrl,logo:"https://vebn.oss-cn-beijing.aliyuncs.com/vben/logo.png",options:{color:{dark:"#55D187"}}},null,8,["value"])])),_:1}),c(d,{title:"logo配置示例",class:"text-center mb-6 qrcode-demo-item"},{default:j((()=>[c(s,{value:e.qrCodeUrl,logo:{src:"https://vebn.oss-cn-beijing.aliyuncs.com/vben/logo.png",logoSize:.2,borderSize:.05,borderRadius:50,bgColor:"blue"}},null,8,["value","logo"])])),_:1}),c(d,{title:"下载示例",class:"text-center qrcode-demo-item"},{default:j((()=>[c(s,{value:e.qrCodeUrl,ref:"qrRef",logo:e.LogoImg},null,8,["value","logo"]),c(u,{class:"mb-2",type:"primary",onClick:e.download},{default:j((()=>[q])),_:1},8,["onClick"]),C])),_:1}),c(d,{title:"配置大小示例",class:"text-center qrcode-demo-item"},{default:j((()=>[c(s,{value:e.qrCodeUrl,width:300},null,8,["value"])])),_:1})])])),_:1})}));v.render=_,v.__scopeId="data-v-f8968a82";export default v;