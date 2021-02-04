import{d as e,h as i,o as t,i as r,bw as o,j as s}from"./index.cf365317.js";import{D as a}from"./index.607b19dc.js";import{D as d}from"./index.3de7c2b4.js";import{_ as m}from"./index.7c9c0b17.js";import{_ as n}from"./index.9bd36aa1.js";import{refundSchema as p,refundData as c,personSchema as j,personData as l,refundTableData as u,refundTableSchema as f,refundTimeTableSchema as b,refundTimeTableData as x}from"./data.11285d2e.js";import{u as g}from"./useTable.c2077769.js";import"./vendor.3b1829c7.js";import"./index.2e694ac7.js";import"./responsiveObserve.c545f1cc.js";import"./index.eb3022f0.js";import"./index.0b90850f.js";import"./domUtils.fbaa4cd3.js";import"./_stringToArray.8266c95f.js";import"./RightOutlined.dff2a05b.js";/* empty css              */import"./useTimeout.cb6e36e1.js";import"./useScrollTo.e29c35ef.js";import"./animation.5370f8e0.js";import"./get.719a4219.js";import"./index.acfd6410.js";import"./SearchOutlined.70021315.js";import"./CheckOutlined.e5d7bf16.js";import"./DownOutlined.a5bc93c0.js";import"./index.b75404bd.js";import"./index.ce4dce0a.js";import"./index.a947876e.js";import"./findIndex.dfb4a59a.js";import"./isEqual.a74a7c19.js";import"./_baseProperty.74f89655.js";import"./toInteger.4b5728ae.js";import"./index.161c7f6b.js";import"./index.9e4baf11.js";import"./EyeOutlined.37772c3d.js";import"./index.8749b4fc.js";import"./colors.31ba1fd6.js";import"./index.444ab33f.js";import"./UpOutlined.da4838f7.js";import"./index.fb5bb62b.js";import"./RedoOutlined.f186bbf9.js";import"./index.0444d019.js";import"./EllipsisOutlined.45abe0a5.js";import"./types.d79f185c.js";import"./Tree.41dfced6.js";import"./util.2327827f.js";import"./useAttrs.ea7f6219.js";import"./uuid.20e2b0e6.js";import"./index.1077fb7c.js";import"./DeleteOutlined.ce3d1c59.js";import"./index.fbe41d70.js";import"./index.5622acee.js";import"./useWindowSizeFn.308a0bee.js";import"./FullscreenOutlined.d0ce88af.js";import"./index.579d8600.js";import"./index.f96d6e91.js";import"./LeftOutlined.9278b1ed.js";import"./download.c885af96.js";import"./index.5ac782f0.js";import"./DoubleLeftOutlined.b9c1651d.js";import"./DoubleRightOutlined.a3b12db1.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.43a89275.js";import"./CaretDownFilled.424e143e.js";import"./clickOutside.82b0560a.js";import"./useSortable.69a550f8.js";import"./SettingOutlined.b9b92344.js";import"./useExpose.8e4e12b0.js";import"./useForm.c2bcb6ec.js";import"./index.327c61a8.js";import"./index.a1bfa9a8.js";import"./usePageContext.1152815b.js";import"./ArrowLeftOutlined.949c5d9e.js";import"./index.7ddf4f32.js";import"./isNumeric.2bec345d.js";var h=e({components:{Description:d,BasicTable:m,PageWrapper:n,[a.name]:a},setup(){const[e]=g({title:"退货商品",dataSource:u,columns:f,pagination:!1,showIndexColumn:!1,scroll:{y:300},showSummary:!0,summaryFunc:function(e){let i=0,t=0;return e.forEach((e=>{i+=e.t5,t+=e.t6})),[{t1:"总计",t5:i,t6:t}]}}),[i]=g({title:"退货进度",columns:b,pagination:!1,dataSource:x,showIndexColumn:!1,scroll:{y:300}});return{registerRefundTable:e,registerTimeTable:i,refundSchema:p,refundData:c,personSchema:j,personData:l}}});const O=o("data-v-ada482fc"),T=O(((e,o,a,d,m,n)=>{const p=i("Description"),c=i("a-divider"),j=i("BasicTable"),l=i("PageWrapper");return t(),r(l,{title:"基础详情页",contentBackground:""},{default:O((()=>[s(p,{size:"middle",title:"退款申请",bordered:!1,column:3,data:e.refundData,schema:e.refundSchema},null,8,["data","schema"]),s(c),s(p,{size:"middle",title:"用户信息",bordered:!1,column:3,data:e.personData,schema:e.personSchema},null,8,["data","schema"]),s(c),s(j,{onRegister:e.registerRefundTable},null,8,["onRegister"]),s(c),s(j,{onRegister:e.registerTimeTable},null,8,["onRegister"])])),_:1})}));h.render=T,h.__scopeId="data-v-ada482fc";export default h;
