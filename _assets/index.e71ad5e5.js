let e=document.createElement("style");e.innerHTML=".form-wrap[data-v-46649975]{padding:24px;background:#fff}",document.head.appendChild(e);import{a as o,h as t,c$ as a,d0 as s,i as r,o as i,j as n,k as l,aS as p,p as c}from"./index.a952a825.js";import"./xlsx.a48e520c.js";import"./index.041bce66.js";import"./Trigger.6f8f8573.js";import"./omit.1c9bfb01.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.ca2d5869.js";import"./CheckOutlined.44301b28.js";import{s as d}from"./index.a940dab4.js";import"./colors.c19e2bbc.js";import"./RightOutlined.94fd6a59.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.a1c8f40e.js";import"./index.51bebf76.js";import"./index.a172b251.js";import"./index.79d94cfe.js";import"./UpOutlined.f7c9c4e6.js";import"./index.2f405b3a.js";import"./index.a9201ccf.js";import"./index.47d13434.js";import"./index.daaac866.js";import"./RightOutlined.07d991df.js";import"./tsxHelper.50b89473.js";import"./index.53160084.js";import"./index.ab19a1be.js";import"./index.d9bface4.js";import{u as m}from"./useForm.9a5c5b7d.js";const u=[{field:"title",component:"Input",label:"标题",componentProps:{placeholder:"给目标起个名字"},required:!0},{field:"time",component:"RangePicker",label:"起止日期",required:!0},{field:"target",component:"InputTextArea",label:"目标描述",componentProps:{placeholder:"请输入你的阶段性工作目标",rows:4},required:!0},{field:"metrics",component:"InputTextArea",label:"衡量标准",componentProps:{placeholder:"请输入衡量标准",rows:4},required:!0},{field:"client",component:"Input",label:"客户",helpMessage:"目标的服务对象",subLabel:"( 选填 )",componentProps:{placeholder:"请描述你服务的客户，内部客户直接 @姓名／工号"}},{field:"inviteer",component:"Input",label:"邀评人",subLabel:"( 选填 )",componentProps:{placeholder:"请直接 @姓名／工号，最多可邀请 5 人"}},{field:"weights",component:"InputNumber",label:"权重",subLabel:"( 选填 )",componentProps:{formatter:e=>e?`${e}%`:"",parser:e=>e.replace("%",""),placeholder:"请输入"}},{field:"disclosure",component:"RadioGroup",label:"目标公开",itemProps:{extra:"客户、邀评人默认被分享"},componentProps:{options:[{label:"公开",value:"1"},{label:"部分公开",value:"2"},{label:"不公开",value:"3"}]}},{field:"disclosurer",component:"Select",label:" ",show:({model:e})=>"2"===e.disclosure,componentProps:{placeholder:"公开给",mode:"multiple",options:[{label:"同事1",value:"1"},{label:"同事2",value:"2"},{label:"同事3",value:"3"}]}}];var b=o({components:{BasicForm:d},setup(){const{createMessage:e}=t(),[o,{validate:a,setProps:s}]=m({labelCol:{span:7},wrapperCol:{span:10},schemas:u,actionColOptions:{offset:8},submitButtonOptions:{text:"提交"},submitFunc:async function(){try{await a(),s({submitButtonOptions:{loading:!0}}),setTimeout((()=>{s({submitButtonOptions:{loading:!1}}),e.success("提交成功！")}),2e3)}catch(e){}}});return{register:o}}});const f=p("data-v-46649975");a("data-v-46649975");const j=c(" 表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。 "),x={class:"m-5 form-wrap"};s();const g=f(((e,o,t,a,s,p)=>{const c=r("a-page-header"),d=r("BasicForm");return i(),n("div",null,[l(c,{title:"基础表单",ghost:!1},{default:f((()=>[j])),_:1}),l("div",x,[l(d,{onRegister:e.register},null,8,["onRegister"])])])}));b.render=g,b.__scopeId="data-v-46649975";export default b;