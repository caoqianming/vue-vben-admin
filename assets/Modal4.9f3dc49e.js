import{_ as e,a as i}from"./index.76712c7b.js";import{_ as t}from"./index.b1a0a170.js";import{d as o,r as s,h as r,o as d,i as a,w as n,j as m,a7 as p}from"./index.d77f02a9.js";import{u as l}from"./useForm.357a7f51.js";import"./useTimeout.2d9628a9.js";import"./useWindowSizeFn.1e8107c9.js";import"./index.074ee3be.js";import"./index.36fa56ba.js";import"./domUtils.5a6e1164.js";import"./_stringToArray.7600767c.js";import"./RightOutlined.91dd89cb.js";/* empty css              */import"./useScrollTo.3b6a2f4d.js";import"./animation.c2cd2812.js";import"./FullscreenOutlined.560f680a.js";import"./isEqual.66f620a0.js";import"./index.a769eace.js";import"./index.d1623c3b.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.04df4c69.js";import"./get.e772b8a0.js";import"./_baseProperty.74f89655.js";import"./toInteger.007e1a46.js";import"./index.eb1e31a4.js";import"./index.c7d76346.js";import"./SearchOutlined.000a1584.js";import"./EyeOutlined.476b44c8.js";import"./index.17838d22.js";import"./CheckOutlined.7b7e8a9f.js";import"./DownOutlined.4bb15dc2.js";import"./index.af54f8a9.js";import"./index.5bbc4673.js";import"./UpOutlined.d63ff681.js";import"./index.2eba2f77.js";import"./RedoOutlined.3ae45394.js";import"./index.7e51aec0.js";import"./EllipsisOutlined.d6473483.js";import"./types.7d2364ed.js";import"./Tree.ec906c96.js";import"./util.d366d351.js";import"./uuid.4588aa6c.js";import"./index.315d770f.js";import"./DeleteOutlined.841e45e2.js";import"./index.d61bd1bf.js";import"./index.52f18b9b.js";import"./index.61d5349a.js";import"./index.2418de79.js";import"./LeftOutlined.681613b8.js";import"./download.a32a8ead.js";const j=[{field:"field1",component:"Input",label:"字段1",colProps:{span:12},defaultValue:"111"},{field:"field2",component:"Input",label:"字段2",colProps:{span:12}}];var c=o({components:{BasicModal:e,BasicForm:t},setup(){const e=s({}),[t,{}]=l({labelWidth:120,schemas:j,showActionButtonGroup:!1,actionColOptions:{span:24}}),[o]=i((i=>{e.value={field2:i.data,field1:i.info}}));return{register:o,schemas:j,registerForm:t,model:e}}});c.render=function(e,i,t,o,s,l){const j=r("BasicForm"),c=r("BasicModal");return d(),a(c,p(e.$attrs,{onRegister:e.register,title:"Modal Title"}),{default:n((()=>[m(j,{onRegister:e.registerForm,model:e.model},null,8,["onRegister","model"])])),_:1},16,["onRegister"])};export default c;
