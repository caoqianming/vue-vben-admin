import{_ as e}from"./index.04121ac8.js";import{getBasicColumns as i,getBasicData as t}from"./tableData.252346e9.js";import{d as o,r,h as s,o as a,i as d,j as n,w as p,m as l,l as m}from"./index.d77f02a9.js";import"./index.17838d22.js";import"./SearchOutlined.000a1584.js";import"./CheckOutlined.7b7e8a9f.js";import"./DownOutlined.4bb15dc2.js";import"./index.b1a0a170.js";import"./index.a769eace.js";import"./index.d1623c3b.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.04df4c69.js";import"./isEqual.66f620a0.js";import"./get.e772b8a0.js";import"./_baseProperty.74f89655.js";import"./toInteger.007e1a46.js";import"./index.eb1e31a4.js";import"./index.c7d76346.js";import"./EyeOutlined.476b44c8.js";import"./index.af54f8a9.js";import"./index.5bbc4673.js";import"./UpOutlined.d63ff681.js";import"./index.2eba2f77.js";import"./RightOutlined.91dd89cb.js";import"./RedoOutlined.3ae45394.js";import"./index.7e51aec0.js";import"./EllipsisOutlined.d6473483.js";import"./types.7d2364ed.js";import"./Tree.ec906c96.js";import"./util.d366d351.js";/* empty css              */import"./uuid.4588aa6c.js";import"./index.315d770f.js";import"./DeleteOutlined.841e45e2.js";import"./index.d61bd1bf.js";import"./index.76712c7b.js";import"./useTimeout.2d9628a9.js";import"./useWindowSizeFn.1e8107c9.js";import"./index.074ee3be.js";import"./index.36fa56ba.js";import"./domUtils.5a6e1164.js";import"./_stringToArray.7600767c.js";import"./useScrollTo.3b6a2f4d.js";import"./animation.c2cd2812.js";import"./FullscreenOutlined.560f680a.js";import"./index.52f18b9b.js";import"./index.61d5349a.js";import"./index.2418de79.js";import"./LeftOutlined.681613b8.js";import"./download.a32a8ead.js";import"./index.2e77a795.js";import"./DoubleLeftOutlined.e3421569.js";import"./DoubleRightOutlined.664b79a8.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.29cc983c.js";import"./CaretDownFilled.bd9e9cf3.js";import"./clickOutside.725d20cd.js";import"./useSortable.fc1dee7e.js";import"./SettingOutlined.fb91ae0d.js";import"./useExpose.3c526196.js";import"./useForm.357a7f51.js";var c=o({components:{BasicTable:e},setup(){const e=r(!1),o=r(!1),s=r(!0),a=r(!0),d=r(!1);return{columns:i(),data:t(),canResize:e,loading:o,striped:s,border:a,toggleStriped:function(){s.value=!s.value},toggleCanResize:function(){e.value=!e.value},toggleLoading:function(){o.value=!0,setTimeout((()=>{o.value=!1,d.value={pageSize:20}}),3e3)},toggleBorder:function(){a.value=!a.value},pagination:d}}});const j={class:"p-4"},u=l(" 开启loading ");c.render=function(e,i,t,o,r,c){const b=s("a-button"),f=s("BasicTable");return a(),d("div",j,[n(f,{title:"基础示例",titleHelpMessage:"温馨提醒",columns:e.columns,dataSource:e.data,canResize:e.canResize,loading:e.loading,striped:e.striped,bordered:e.border,showTableSetting:"",pagination:e.pagination},{toolbar:p((()=>[n(b,{type:"primary",onClick:e.toggleCanResize},{default:p((()=>[l(m(e.canResize?"取消自适应":"自适应高度"),1)])),_:1},8,["onClick"]),n(b,{type:"primary",onClick:e.toggleBorder},{default:p((()=>[l(m(e.border?"隐藏边框":"显示边框"),1)])),_:1},8,["onClick"]),n(b,{type:"primary",onClick:e.toggleLoading},{default:p((()=>[u])),_:1},8,["onClick"]),n(b,{type:"primary",onClick:e.toggleStriped},{default:p((()=>[l(m(e.striped?"隐藏斑马纹":"显示斑马纹"),1)])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource","canResize","loading","striped","bordered","pagination"])])};export default c;
