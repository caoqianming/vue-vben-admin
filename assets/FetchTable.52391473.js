import{_ as e}from"./index.04121ac8.js";import{getBasicColumns as i}from"./tableData.252346e9.js";import{d as t}from"./table.5bd62cc1.js";import{d as o,h as r,o as s,i as d,j as a,w as n,m as p}from"./index.d77f02a9.js";import{u as m}from"./useTable.9d174450.js";import"./index.17838d22.js";import"./SearchOutlined.000a1584.js";import"./CheckOutlined.7b7e8a9f.js";import"./DownOutlined.4bb15dc2.js";import"./index.b1a0a170.js";import"./index.a769eace.js";import"./index.d1623c3b.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.04df4c69.js";import"./isEqual.66f620a0.js";import"./get.e772b8a0.js";import"./_baseProperty.74f89655.js";import"./toInteger.007e1a46.js";import"./index.eb1e31a4.js";import"./index.c7d76346.js";import"./EyeOutlined.476b44c8.js";import"./index.af54f8a9.js";import"./index.5bbc4673.js";import"./UpOutlined.d63ff681.js";import"./index.2eba2f77.js";import"./RightOutlined.91dd89cb.js";import"./RedoOutlined.3ae45394.js";import"./index.7e51aec0.js";import"./EllipsisOutlined.d6473483.js";import"./types.7d2364ed.js";import"./Tree.ec906c96.js";import"./util.d366d351.js";/* empty css              */import"./uuid.4588aa6c.js";import"./index.315d770f.js";import"./DeleteOutlined.841e45e2.js";import"./index.d61bd1bf.js";import"./index.76712c7b.js";import"./useTimeout.2d9628a9.js";import"./useWindowSizeFn.1e8107c9.js";import"./index.074ee3be.js";import"./index.36fa56ba.js";import"./domUtils.5a6e1164.js";import"./_stringToArray.7600767c.js";import"./useScrollTo.3b6a2f4d.js";import"./animation.c2cd2812.js";import"./FullscreenOutlined.560f680a.js";import"./index.52f18b9b.js";import"./index.61d5349a.js";import"./index.2418de79.js";import"./LeftOutlined.681613b8.js";import"./download.a32a8ead.js";import"./index.2e77a795.js";import"./DoubleLeftOutlined.e3421569.js";import"./DoubleRightOutlined.664b79a8.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.29cc983c.js";import"./CaretDownFilled.bd9e9cf3.js";import"./clickOutside.725d20cd.js";import"./useSortable.fc1dee7e.js";import"./SettingOutlined.fb91ae0d.js";import"./useExpose.3c526196.js";import"./useForm.357a7f51.js";var j=o({components:{BasicTable:e},setup(){const[e,{reload:o}]=m({title:"远程加载示例",api:t,columns:i()});return{registerTable:e,handleReloadCurrent:function(){o()},handleReload:function(){o({page:1})}}}});const l={class:"p-4"},c=p(" 刷新当前页 "),u=p(" 刷新并返回第一页 ");j.render=function(e,i,t,o,p,m){const j=r("a-button"),b=r("BasicTable");return s(),d("div",l,[a(b,{onRegister:e.registerTable},{toolbar:n((()=>[a(j,{type:"primary",onClick:e.handleReloadCurrent},{default:n((()=>[c])),_:1},8,["onClick"]),a(j,{type:"primary",onClick:e.handleReload},{default:n((()=>[u])),_:1},8,["onClick"])])),_:1},8,["onRegister"])])};export default j;
