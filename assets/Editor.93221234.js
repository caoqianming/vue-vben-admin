import{_ as e}from"./index.b1a0a170.js";import{a as i}from"./index.074ee3be.js";import{d as t,bP as s,g as r,h as o,o as a,i as d,w as n,j as m}from"./index.d77f02a9.js";import{M as p}from"./index.6ebea15d.js";import{_ as l}from"./index.6781f66c.js";import"./index.a769eace.js";import"./index.d1623c3b.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.04df4c69.js";import"./isEqual.66f620a0.js";import"./get.e772b8a0.js";import"./_baseProperty.74f89655.js";import"./toInteger.007e1a46.js";import"./index.eb1e31a4.js";import"./index.c7d76346.js";import"./SearchOutlined.000a1584.js";import"./EyeOutlined.476b44c8.js";import"./index.17838d22.js";import"./CheckOutlined.7b7e8a9f.js";import"./DownOutlined.4bb15dc2.js";import"./index.af54f8a9.js";import"./index.5bbc4673.js";import"./UpOutlined.d63ff681.js";import"./index.2eba2f77.js";import"./RightOutlined.91dd89cb.js";import"./RedoOutlined.3ae45394.js";import"./index.7e51aec0.js";import"./EllipsisOutlined.d6473483.js";import"./types.7d2364ed.js";import"./Tree.ec906c96.js";import"./util.d366d351.js";/* empty css              */import"./uuid.4588aa6c.js";import"./index.315d770f.js";import"./DeleteOutlined.841e45e2.js";import"./index.d61bd1bf.js";import"./index.76712c7b.js";import"./useTimeout.2d9628a9.js";import"./useWindowSizeFn.1e8107c9.js";import"./FullscreenOutlined.560f680a.js";import"./index.52f18b9b.js";import"./index.61d5349a.js";import"./index.2418de79.js";import"./LeftOutlined.681613b8.js";import"./download.a32a8ead.js";import"./domUtils.5a6e1164.js";import"./_stringToArray.7600767c.js";import"./index.36fa56ba.js";import"./useScrollTo.3b6a2f4d.js";import"./animation.c2cd2812.js";import"./index.afd079bf.js";import"./index.f3100edb.js";import"./usePageContext.b4dcd332.js";import"./transButton.29cc983c.js";import"./ArrowLeftOutlined.3f5c2cff.js";const j=[{field:"title",component:"Input",label:"title",defaultValue:"标题",rules:[{required:!0}]},{field:"markdown",component:"Input",label:"markdown",defaultValue:"defaultValue",rules:[{required:!0,trigger:"blur"}],render:({model:e,field:i})=>s(p,{value:e[i],onChange:t=>{e[i]=t}})}];var c=t({components:{BasicForm:e,CollapseContainer:i,PageWrapper:l},setup(){const{createMessage:e}=r();return{schemas:j,handleSubmit:i=>{e.success("click search,values:"+JSON.stringify(i))}}}});c.render=function(e,i,t,s,r,p){const l=o("BasicForm"),j=o("CollapseContainer"),c=o("PageWrapper");return a(),d(c,{title:"MarkDown组件嵌入Form示例"},{default:n((()=>[m(j,{title:"MarkDown表单"},{default:n((()=>[m(l,{labelWidth:100,schemas:e.schemas,actionColOptions:{span:24},onSubmit:e.handleSubmit},null,8,["schemas","onSubmit"])])),_:1})])),_:1})};export default c;
