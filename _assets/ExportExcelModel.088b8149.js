import{a as e,u as s,i as t,o as i,j as o,w as r,k as a,v as l}from"./index.a952a825.js";import"./xlsx.a48e520c.js";import"./index.041bce66.js";import"./Trigger.6f8f8573.js";import"./omit.1c9bfb01.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.ca2d5869.js";import"./CheckOutlined.44301b28.js";import{s as n}from"./index.a940dab4.js";import"./colors.c19e2bbc.js";import"./RightOutlined.94fd6a59.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.a1c8f40e.js";import"./index.51bebf76.js";import"./index.a172b251.js";import"./index.79d94cfe.js";import"./UpOutlined.f7c9c4e6.js";import"./index.2f405b3a.js";import"./index.a9201ccf.js";import"./index.47d13434.js";import"./index.daaac866.js";import"./CloseOutlined.56cac908.js";import"./FullscreenOutlined.2cf0b23d.js";import"./RightOutlined.07d991df.js";import"./useTimeout.3c09ffad.js";import"./tsxHelper.50b89473.js";import"./index.53160084.js";import"./resizeEvent.167fcdb9.js";import"./index.ab19a1be.js";import"./index.d9bface4.js";import{u as m}from"./useForm.9a5c5b7d.js";import{B as c,b as p}from"./index.87e5edf0.js";import"./useWindowSizeFn.03a16a67.js";const{t:d}=s(),u=[{field:"filename",component:"Input",label:d("component.excel.fileName"),rules:[{required:!0}]},{field:"bookType",component:"Select",label:d("component.excel.fileType"),defaultValue:"xlsx",rules:[{required:!0}],componentProps:{options:[{label:"xlsx",value:"xlsx",key:"xlsx"},{label:"html",value:"html",key:"html"},{label:"csv",value:"csv",key:"csv"},{label:"txt",value:"txt",key:"txt"}]}}];var f=e({components:{BasicModal:c,BasicForm:n},emits:["success","register"],setup(e,{emit:s}){const[t,{validateFields:i}]=m(),[o,{closeModal:r}]=p();return{schemas:u,handleOk:async function(){const e=await i(),{filename:t,bookType:o}=e;s("success",{filename:`${t.split(".").shift()}.${o}`,bookType:o}),r()},registerForm:t,registerModal:o,t:d}}});f.render=function(e,s,n,m,c,p){const d=t("BasicForm"),u=t("BasicModal");return i(),o(u,l(e.$attrs,{title:e.t("component.excel.exportModalTitle"),onOk:e.handleOk,onRegister:e.registerModal}),{default:r((()=>[a(d,{labelWidth:100,schemas:e.schemas,showActionButtonGroup:!1,onRegister:e.registerForm},null,8,["schemas","onRegister"])])),_:1},16,["title","onOk","onRegister"])};export default f;