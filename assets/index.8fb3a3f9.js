import{_ as e}from"./index.b1a0a170.js";import{d as t,g as o,h as i,o as s,i as r,bw as n,j as a}from"./index.d77f02a9.js";import{_ as p}from"./index.6781f66c.js";import{u as l}from"./useForm.357a7f51.js";import"./index.a769eace.js";import"./index.d1623c3b.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.04df4c69.js";import"./isEqual.66f620a0.js";import"./get.e772b8a0.js";import"./_baseProperty.74f89655.js";import"./toInteger.007e1a46.js";import"./index.eb1e31a4.js";import"./index.c7d76346.js";import"./SearchOutlined.000a1584.js";import"./EyeOutlined.476b44c8.js";import"./index.17838d22.js";import"./CheckOutlined.7b7e8a9f.js";import"./DownOutlined.4bb15dc2.js";import"./index.af54f8a9.js";import"./index.5bbc4673.js";import"./UpOutlined.d63ff681.js";import"./index.2eba2f77.js";import"./RightOutlined.91dd89cb.js";import"./RedoOutlined.3ae45394.js";import"./index.7e51aec0.js";import"./EllipsisOutlined.d6473483.js";import"./types.7d2364ed.js";import"./Tree.ec906c96.js";import"./util.d366d351.js";/* empty css              */import"./uuid.4588aa6c.js";import"./index.315d770f.js";import"./DeleteOutlined.841e45e2.js";import"./index.d61bd1bf.js";import"./index.76712c7b.js";import"./useTimeout.2d9628a9.js";import"./useWindowSizeFn.1e8107c9.js";import"./index.074ee3be.js";import"./index.36fa56ba.js";import"./domUtils.5a6e1164.js";import"./_stringToArray.7600767c.js";import"./useScrollTo.3b6a2f4d.js";import"./animation.c2cd2812.js";import"./FullscreenOutlined.560f680a.js";import"./index.52f18b9b.js";import"./index.61d5349a.js";import"./index.2418de79.js";import"./LeftOutlined.681613b8.js";import"./download.a32a8ead.js";import"./index.afd079bf.js";import"./index.f3100edb.js";import"./usePageContext.b4dcd332.js";import"./transButton.29cc983c.js";import"./ArrowLeftOutlined.3f5c2cff.js";const d=[{field:"title",component:"Input",label:"标题",componentProps:{placeholder:"给目标起个名字"},required:!0},{field:"time",component:"RangePicker",label:"起止日期",required:!0},{field:"target",component:"InputTextArea",label:"目标描述",componentProps:{placeholder:"请输入你的阶段性工作目标",rows:4},required:!0},{field:"metrics",component:"InputTextArea",label:"衡量标准",componentProps:{placeholder:"请输入衡量标准",rows:4},required:!0},{field:"client",component:"Input",label:"客户",helpMessage:"目标的服务对象",subLabel:"( 选填 )",componentProps:{placeholder:"请描述你服务的客户，内部客户直接 @姓名／工号"}},{field:"inviteer",component:"Input",label:"邀评人",subLabel:"( 选填 )",componentProps:{placeholder:"请直接 @姓名／工号，最多可邀请 5 人"}},{field:"weights",component:"InputNumber",label:"权重",subLabel:"( 选填 )",componentProps:{formatter:e=>e?`${e}%`:"",parser:e=>e.replace("%",""),placeholder:"请输入"}},{field:"disclosure",component:"RadioGroup",label:"目标公开",itemProps:{extra:"客户、邀评人默认被分享"},componentProps:{options:[{label:"公开",value:"1"},{label:"部分公开",value:"2"},{label:"不公开",value:"3"}]}},{field:"disclosurer",component:"Select",label:" ",show:({model:e})=>"2"===e.disclosure,componentProps:{placeholder:"公开给",mode:"multiple",options:[{label:"同事1",value:"1"},{label:"同事2",value:"2"},{label:"同事3",value:"3"}]}}];var m=t({components:{BasicForm:e,PageWrapper:p},setup(){const{createMessage:e}=o(),[t,{validate:i,setProps:s}]=l({labelCol:{span:7},wrapperCol:{span:10},schemas:d,actionColOptions:{offset:8},submitButtonOptions:{text:"提交"},submitFunc:async function(){try{await i(),s({submitButtonOptions:{loading:!0}}),setTimeout((()=>{s({submitButtonOptions:{loading:!1}}),e.success("提交成功！")}),2e3)}catch(t){}}});return{register:t}}});const c=n("data-v-5cbaa0f1"),u=c(((e,t,o,n,p,l)=>{const d=i("BasicForm"),m=i("PageWrapper");return s(),r(m,{title:"基础表单",contentBackground:"",content:" 表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。",contentClass:"p-4"},{default:c((()=>[a(d,{onRegister:e.register},null,8,["onRegister"])])),_:1})}));m.render=u,m.__scopeId="data-v-5cbaa0f1";export default m;
