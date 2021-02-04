import{d as e,h as t,o as i,i as s,j as o,w as r,m as d,l as a}from"./index.cf365317.js";import{T as m}from"./index.8749b4fc.js";import{_ as n,T as p}from"./index.7c9c0b17.js";import{d as c}from"./table.9cc67bfe.js";import{u as l}from"./useTable.c2077769.js";import"./vendor.3b1829c7.js";import"./colors.31ba1fd6.js";import"./index.acfd6410.js";import"./SearchOutlined.70021315.js";import"./CheckOutlined.e5d7bf16.js";import"./DownOutlined.a5bc93c0.js";import"./index.b75404bd.js";import"./index.ce4dce0a.js";import"./index.a947876e.js";import"./responsiveObserve.c545f1cc.js";import"./findIndex.dfb4a59a.js";import"./isEqual.a74a7c19.js";import"./get.719a4219.js";import"./_baseProperty.74f89655.js";import"./toInteger.4b5728ae.js";import"./index.161c7f6b.js";import"./index.9e4baf11.js";import"./EyeOutlined.37772c3d.js";import"./index.444ab33f.js";import"./UpOutlined.da4838f7.js";import"./index.fb5bb62b.js";import"./RightOutlined.dff2a05b.js";import"./RedoOutlined.f186bbf9.js";import"./index.0444d019.js";import"./EllipsisOutlined.45abe0a5.js";import"./types.d79f185c.js";import"./Tree.41dfced6.js";import"./util.2327827f.js";import"./useAttrs.ea7f6219.js";/* empty css              */import"./uuid.20e2b0e6.js";import"./index.1077fb7c.js";import"./DeleteOutlined.ce3d1c59.js";import"./index.fbe41d70.js";import"./index.5622acee.js";import"./useTimeout.cb6e36e1.js";import"./useWindowSizeFn.308a0bee.js";import"./index.eb3022f0.js";import"./index.0b90850f.js";import"./domUtils.fbaa4cd3.js";import"./_stringToArray.8266c95f.js";import"./useScrollTo.e29c35ef.js";import"./animation.5370f8e0.js";import"./FullscreenOutlined.d0ce88af.js";import"./index.607b19dc.js";import"./index.579d8600.js";import"./index.f96d6e91.js";import"./LeftOutlined.9278b1ed.js";import"./download.c885af96.js";import"./index.5ac782f0.js";import"./DoubleLeftOutlined.b9c1651d.js";import"./DoubleRightOutlined.a3b12db1.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.43a89275.js";import"./CaretDownFilled.424e143e.js";import"./clickOutside.82b0560a.js";import"./useSortable.69a550f8.js";import"./SettingOutlined.b9b92344.js";import"./useExpose.8e4e12b0.js";import"./useForm.c2bcb6ec.js";const j=[{title:"ID",dataIndex:"id",slots:{customRender:"id"}},{title:"分类",dataIndex:"category",width:80,align:"center",defaultHidden:!0,slots:{customRender:"category"}},{title:"姓名",dataIndex:"name",width:120},{title:"头像",dataIndex:"img",width:120,slots:{customRender:"img"}},{title:"地址",dataIndex:"address"},{title:"编号",dataIndex:"no",slots:{customRender:"no"}},{title:"开始时间",dataIndex:"beginTime"},{title:"结束时间",dataIndex:"endTime"}];var b=e({components:{BasicTable:n,TableImg:p,Tag:m},setup(){const[e]=l({title:"自定义列内容",api:c,columns:j,bordered:!0,showTableSetting:!0});return{registerTable:e}}});const f={class:"p-4"};b.render=function(e,m,n,p,c,l){const j=t("Tag"),b=t("TableImg"),u=t("BasicTable");return i(),s("div",f,[o(u,{onRegister:e.registerTable},{id:r((({record:e})=>[d(" ID: "+a(e.id),1)])),no:r((({record:e})=>[o(j,{color:"green"},{default:r((()=>[d(a(e.no),1)])),_:2},1024)])),img:r((()=>[o(b,{imgList:["https://picsum.photos/id/66/346/216","https://picsum.photos/id/67/346/216"]},null,8,["imgList"])])),category:r((({record:e})=>[o(j,{color:"green"},{default:r((()=>[d(a(e.no),1)])),_:2},1024)])),_:1},8,["onRegister"])])};export default b;
