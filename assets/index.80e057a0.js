import{d as e,r as o,cp as t,cq as i,h as r,o as s,i as n,bw as d,j as p,m as l}from"./index.d77f02a9.js";import{C as a}from"./index.64f67c9c.js";import"./index.e3fdb562.js";import"./index.d1623c3b.js";import{_ as m}from"./index.b1a0a170.js";import c from"./PersonTable.1b2f3cc0.js";import{_ as f}from"./index.6781f66c.js";import{u}from"./useForm.357a7f51.js";import"./vendor.3b1829c7.js";import"./index.eb1e31a4.js";import"./UpOutlined.d63ff681.js";import"./LeftOutlined.681613b8.js";import"./DownOutlined.4bb15dc2.js";import"./RightOutlined.91dd89cb.js";import"./PlusOutlined.cb77d8c2.js";import"./responsiveObserve.c545f1cc.js";import"./index.a769eace.js";import"./findIndex.04df4c69.js";import"./isEqual.66f620a0.js";import"./get.e772b8a0.js";import"./_baseProperty.74f89655.js";import"./toInteger.007e1a46.js";import"./index.c7d76346.js";import"./SearchOutlined.000a1584.js";import"./EyeOutlined.476b44c8.js";import"./index.17838d22.js";import"./CheckOutlined.7b7e8a9f.js";import"./index.af54f8a9.js";import"./index.5bbc4673.js";import"./index.2eba2f77.js";import"./RedoOutlined.3ae45394.js";import"./index.7e51aec0.js";import"./EllipsisOutlined.d6473483.js";import"./types.7d2364ed.js";import"./Tree.ec906c96.js";import"./util.d366d351.js";/* empty css              */import"./uuid.4588aa6c.js";import"./index.315d770f.js";import"./DeleteOutlined.841e45e2.js";import"./index.d61bd1bf.js";import"./index.76712c7b.js";import"./useTimeout.2d9628a9.js";import"./useWindowSizeFn.1e8107c9.js";import"./index.074ee3be.js";import"./index.36fa56ba.js";import"./domUtils.5a6e1164.js";import"./_stringToArray.7600767c.js";import"./useScrollTo.3b6a2f4d.js";import"./animation.c2cd2812.js";import"./FullscreenOutlined.560f680a.js";import"./index.52f18b9b.js";import"./index.61d5349a.js";import"./index.2418de79.js";import"./download.a32a8ead.js";import"./index.04121ac8.js";import"./index.2e77a795.js";import"./DoubleLeftOutlined.e3421569.js";import"./DoubleRightOutlined.664b79a8.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.29cc983c.js";import"./CaretDownFilled.bd9e9cf3.js";import"./clickOutside.725d20cd.js";import"./useSortable.fc1dee7e.js";import"./SettingOutlined.fb91ae0d.js";import"./useExpose.3c526196.js";import"./useTable.9d174450.js";import"./index.afd079bf.js";import"./index.f3100edb.js";import"./usePageContext.b4dcd332.js";import"./ArrowLeftOutlined.3f5c2cff.js";const j=[{label:"付晓晓",value:"1"},{label:"周毛毛",value:"2"}],b=[{label:"私密",value:"1"},{label:"公开",value:"2"}],x=[{field:"f1",component:"Input",label:"仓库名",required:!0},{field:"f2",component:"Input",label:"仓库域名",required:!0,componentProps:{addonBefore:"http://",addonAfter:"com"},colProps:{offset:2}},{field:"f3",component:"Select",label:"仓库管理员",componentProps:{options:j},required:!0,colProps:{offset:2}},{field:"f4",component:"Select",label:"审批人",componentProps:{options:j},required:!0},{field:"f5",component:"RangePicker",label:"生效日期",required:!0,colProps:{offset:2}},{field:"f6",component:"Select",label:"仓库类型",componentProps:{options:b},required:!0,colProps:{offset:2}}],P=[{field:"t1",component:"Input",label:"任务名",required:!0},{field:"t2",component:"Input",label:"任务描述",required:!0,colProps:{offset:2}},{field:"t3",component:"Select",label:"执行人",componentProps:{options:j},required:!0,colProps:{offset:2}},{field:"t4",component:"Select",label:"责任人",componentProps:{options:j},required:!0},{field:"t5",component:"TimePicker",label:"生效日期",required:!0,componentProps:{style:{width:"100%"}},colProps:{offset:2}},{field:"t6",component:"Select",label:"任务类型",componentProps:{options:b},required:!0,colProps:{offset:2}}];var g=e({components:{BasicForm:m,PersonTable:c,PageWrapper:f,[a.name]:a},setup(){const e=o(null),[t,{validate:i}]=u({baseColProps:{span:6},schemas:x,showActionButtonGroup:!1}),[r,{validate:s}]=u({baseColProps:{span:6},schemas:P,showActionButtonGroup:!1});return{register:t,registerTask:r,submitAll:async function(){try{e.value;const[o,t]=await Promise.all([i(),s()])}catch(o){}},tableRef:e}}});const O=d("data-v-2d2b3260");t("data-v-2d2b3260");const h=l(" 提交 ");i();const q=O(((e,o,t,i,d,l)=>{const a=r("BasicForm"),m=r("a-card"),c=r("PersonTable"),f=r("a-button"),u=r("PageWrapper");return s(),n(u,{class:"high-form",title:"高级表单",contentBackground:"",content:" 高级表单常见于一次性输入和提交大批量数据的场景。",contentClass:"p-4"},{rightFooter:O((()=>[p(f,{type:"primary",onClick:e.submitAll},{default:O((()=>[h])),_:1},8,["onClick"])])),default:O((()=>[p(m,{title:"仓库管理",bordered:!1},{default:O((()=>[p(a,{onRegister:e.register},null,8,["onRegister"])])),_:1}),p(m,{title:"任务管理",bordered:!1,class:"mt-5"},{default:O((()=>[p(a,{onRegister:e.registerTask},null,8,["onRegister"])])),_:1}),p(m,{title:"成员管理",bordered:!1,class:"mt-5"},{default:O((()=>[p(c,{ref:"tableRef"},null,512)])),_:1})])),_:1})}));g.render=q,g.__scopeId="data-v-2d2b3260";export default g;
