import{a as e,i as t,o as i,j as s,k as o,w as r}from"./index.a952a825.js";import"./xlsx.a48e520c.js";import"./index.78cf2b4b.js";import"./index.041bce66.js";import"./Trigger.6f8f8573.js";import"./omit.1c9bfb01.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.ca2d5869.js";import"./CheckOutlined.44301b28.js";import"./index.a940dab4.js";import"./colors.c19e2bbc.js";import"./index.f5fee5fe.js";import"./RightOutlined.94fd6a59.js";import"./index.e3c10438.js";import"./types.de6a8d52.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.a1c8f40e.js";import"./_baseFor.f4e5f03f.js";import"./index.51bebf76.js";import"./index.a172b251.js";import"./index.c4bdfd67.js";import"./index.79d94cfe.js";import"./UpOutlined.f7c9c4e6.js";import"./LeftOutlined.c4199e3a.js";import"./index.2f405b3a.js";import"./index.a9201ccf.js";import"./index.36c067bc.js";import"./index.47d13434.js";import"./index.f85fb911.js";import"./zh_CN.0242bd16.js";import"./TableAction.849c6599.js";import"./index.daaac866.js";import"./CaretDownFilled.6a089e95.js";import"./CheckOutlined.20191aeb.js";import"./CloseOutlined.56cac908.js";import{s as d,b as a,r as m}from"./EditTableHeaderIcon.60d1a574.js";import"./DownOutlined.acca69ab.js";import"./FullscreenOutlined.2cf0b23d.js";import"./LeftOutlined.c91acac2.js";import"./functional.696ef6a9.js";import"./RedoOutlined.2cc6df04.js";import"./RightOutlined.07d991df.js";import"./SettingOutlined.11b15c5a.js";import"./useTimeout.3c09ffad.js";import"./tsxHelper.50b89473.js";import"./domUtils.ad06f69d.js";import"./index.53160084.js";import"./resizeEvent.167fcdb9.js";import"./index.ab19a1be.js";import"./index.d9bface4.js";import"./useForm.9a5c5b7d.js";import"./index.87e5edf0.js";import"./useWindowSizeFn.03a16a67.js";import"./useFullScreen.882550a2.js";import"./uuid.40269c00.js";import"./useExpose.339c803b.js";import"./index.7362e9dc.js";import{u as n}from"./useTable.2da2fe15.js";import{d as p}from"./table.336f364c.js";const c=[{dataIndex:"id",slots:{title:"customId"},customRender:m({dataIndex:"id"})},{dataIndex:"name",slots:{title:"customName"},customRender:m({dataIndex:"name"})},{title:"地址",dataIndex:"address",sorter:!0}];var j=e({components:{BasicTable:d,EditTableHeaderIcon:a},setup(){const[e]=n({title:"可编辑单元格示例",api:p,columns:c,showIndexColumn:!1});return{registerTable:e}}});const l={class:"p-4"};j.render=function(e,d,a,m,n,p){const c=t("EditTableHeaderIcon"),j=t("BasicTable");return i(),s("div",l,[o(j,{onRegister:e.registerTable},{customId:r((()=>[o(c,{title:"Id"})])),customName:r((()=>[o(c,{title:"姓名"})])),_:1},8,["onRegister"])])};export default j;