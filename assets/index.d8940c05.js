import{D as e}from"./index.46d366ac.js";import{u as t}from"./useDescription.a607541e.js";import{_ as s}from"./index.6781f66c.js";import{d as a,h as i,o as r,i as o,w as m,j as n}from"./index.d77f02a9.js";import"./index.7a1a38f0.js";import"./responsiveObserve.c545f1cc.js";import"./index.074ee3be.js";import"./index.36fa56ba.js";import"./domUtils.5a6e1164.js";import"./_stringToArray.7600767c.js";import"./RightOutlined.91dd89cb.js";/* empty css              */import"./useTimeout.2d9628a9.js";import"./useScrollTo.3b6a2f4d.js";import"./animation.c2cd2812.js";import"./get.e772b8a0.js";import"./index.afd079bf.js";import"./index.7e51aec0.js";import"./EllipsisOutlined.d6473483.js";import"./types.7d2364ed.js";import"./isEqual.66f620a0.js";import"./toInteger.007e1a46.js";import"./DownOutlined.4bb15dc2.js";import"./index.f3100edb.js";import"./usePageContext.b4dcd332.js";import"./transButton.29cc983c.js";import"./ArrowLeftOutlined.3f5c2cff.js";import"./vendor.3b1829c7.js";const l={username:"test",nickName:"VB",age:25,phone:"15695909xxx",email:"190848757@qq.com",addr:"厦门市思明区",sex:"男",certy:"3504256199xxxxxxxxx",tag:"orange"},d=[{field:"username",label:"用户名"},{field:"nickName",label:"昵称",render:(e,t)=>`${t.username}-${e}`},{field:"phone",label:"联系电话"},{field:"email",label:"邮箱"},{field:"addr",label:"地址"}];var c=a({components:{Description:e,PageWrapper:s},setup(){const[e]=t({title:"useDescription",data:l,schema:d}),[s]=t({title:"无边框",bordered:!1,data:l,schema:d});return{mockData:l,schema:d,register:e,register1:s}}});c.render=function(e,t,s,a,l,d){const c=i("Description"),p=i("PageWrapper");return r(),o(p,{title:"详情组件示例"},{default:m((()=>[n(c,{title:"基础示例",collapseOptions:{canExpand:!0,helpMessage:"help me"},column:3,data:e.mockData,schema:e.schema},null,8,["data","schema"]),n(c,{class:"mt-4",title:"垂直示例",layout:"vertical",collapseOptions:{canExpand:!0,helpMessage:"help me"},column:2,data:e.mockData,schema:e.schema},null,8,["data","schema"]),n(c,{onRegister:e.register,class:"mt-4"},null,8,["onRegister"]),n(c,{onRegister:e.register1,class:"mt-4"},null,8,["onRegister"])])),_:1})};export default c;
