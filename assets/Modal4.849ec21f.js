import{d as e,r as o,h as s,o as i,i as t,w as r,j as a,a0 as d}from"./index.02d1965c.js";import{_ as n}from"./index.15b9a23c.js";import"./_stringToArray.2de96d92.js";import"./domUtils.be3edd39.js";import"./index.fb8d6796.js";import"./index.08e233ae.js";import"./index.daf19870.js";import{_ as m,a as l}from"./index.e7faca86.js";import"./FullscreenOutlined.247db61e.js";import"./RightOutlined.d46e4d56.js";import"./useTimeout.5f562c84.js";import"./index.46df4a2f.js";import"./animation.218b0c8c.js";import"./useScrollTo.b870f612.js";import"./useAttrs.c1394557.js";import"./useWindowSizeFn.9d82b09a.js";import"./index.41a5a7ee.js";import"./uuid.a6cec785.js";import"./download.cbcf9755.js";import{u as p}from"./useForm.c6ae5496.js";const c=[{field:"field1",component:"Input",label:"字段1",colProps:{span:12},defaultValue:"111"},{field:"field2",component:"Input",label:"字段2",colProps:{span:12}}];var u=e({components:{BasicModal:m,BasicForm:n},setup(){const e=o({}),[s,{}]=p({labelWidth:120,schemas:c,showActionButtonGroup:!1,actionColOptions:{span:24}}),[i]=l((o=>{e.value={field2:o.data,field1:o.info}}));return{register:i,schemas:c,registerForm:s,model:e}}});u.render=function(e,o,n,m,l,p){const c=s("BasicForm"),u=s("BasicModal");return i(),t(u,d(e.$attrs,{onRegister:e.register,title:"Modal Title"}),{default:r((()=>[a(c,{onRegister:e.registerForm,model:e.model},null,8,["onRegister","model"])])),_:1},16,["onRegister"])};export default u;