import{d as e,aV as l,aW as t,aK as s,K as a,h as r,o as n,i,w as c,l as o,k as p,aL as u,m as d}from"./index.cf365317.js";import"./vendor.3b1829c7.js";var m=e({name:"TableHeaderCell",components:{EditTableHeaderCell:l((()=>t((()=>import("./index.7c9c0b17.js").then((function(e){return e.E}))),["/assets/index.7c9c0b17.js","/assets/index.8700919e.css","/assets/index.20066e29.css","/assets/index.cf365317.js","/assets/index.e5c5d570.css","/assets/vendor.3b1829c7.js","/assets/vendor.4a5fa02d.css","/assets/index.acfd6410.js","/assets/index.2077061b.css","/assets/SearchOutlined.70021315.js","/assets/CheckOutlined.e5d7bf16.js","/assets/DownOutlined.a5bc93c0.js","/assets/index.b75404bd.js","/assets/index.33099378.css","/assets/index.ce4dce0a.js","/assets/index.f0866991.css","/assets/index.a947876e.js","/assets/index.0edc9df2.css","/assets/responsiveObserve.c545f1cc.js","/assets/findIndex.dfb4a59a.js","/assets/isEqual.a74a7c19.js","/assets/get.719a4219.js","/assets/_baseProperty.74f89655.js","/assets/toInteger.4b5728ae.js","/assets/index.161c7f6b.js","/assets/index.9e4baf11.js","/assets/index.97caa971.css","/assets/EyeOutlined.37772c3d.js","/assets/index.8749b4fc.js","/assets/index.6bf8a612.css","/assets/colors.31ba1fd6.js","/assets/index.444ab33f.js","/assets/index.5bfe313c.css","/assets/UpOutlined.da4838f7.js","/assets/index.fb5bb62b.js","/assets/index.ade313ee.css","/assets/RightOutlined.dff2a05b.js","/assets/RedoOutlined.f186bbf9.js","/assets/index.0444d019.js","/assets/index.271c2814.css","/assets/EllipsisOutlined.45abe0a5.js","/assets/types.d79f185c.js","/assets/Tree.41dfced6.js","/assets/util.2327827f.js","/assets/useAttrs.ea7f6219.js","/assets/uuid.20e2b0e6.js","/assets/uuid.b356e1c1.css","/assets/index.1077fb7c.js","/assets/index.ed4aed53.css","/assets/DeleteOutlined.ce3d1c59.js","/assets/index.fbe41d70.js","/assets/index.7b8671b1.css","/assets/index.5622acee.js","/assets/index.4d45b084.css","/assets/useTimeout.cb6e36e1.js","/assets/useWindowSizeFn.308a0bee.js","/assets/index.eb3022f0.js","/assets/index.aa7ae4c0.css","/assets/index.0b90850f.js","/assets/index.121e7eba.css","/assets/domUtils.fbaa4cd3.js","/assets/_stringToArray.8266c95f.js","/assets/useScrollTo.e29c35ef.js","/assets/animation.5370f8e0.js","/assets/FullscreenOutlined.d0ce88af.js","/assets/index.607b19dc.js","/assets/index.2b38113f.css","/assets/index.579d8600.js","/assets/index.f96d6e91.js","/assets/index.5e8b94d8.css","/assets/LeftOutlined.9278b1ed.js","/assets/download.c885af96.js","/assets/index.5ac782f0.js","/assets/index.2da96c5e.css","/assets/DoubleLeftOutlined.b9c1651d.js","/assets/DoubleRightOutlined.a3b12db1.js","/assets/zh_CN.8094f4d6.js","/assets/scrollTo.c1e0f75f.js","/assets/transButton.43a89275.js","/assets/CaretDownFilled.424e143e.js","/assets/clickOutside.82b0560a.js","/assets/useSortable.69a550f8.js","/assets/SettingOutlined.b9b92344.js","/assets/useExpose.8e4e12b0.js","/assets/useForm.c2bcb6ec.js"]))),BasicHelp:l((()=>t((()=>import("./BasicHelp.a6583c40.js")),["/assets/BasicHelp.a6583c40.js","/assets/index.20066e29.css","/assets/index.eb3022f0.js","/assets/index.aa7ae4c0.css","/assets/index.cf365317.js","/assets/index.e5c5d570.css","/assets/vendor.3b1829c7.js","/assets/vendor.4a5fa02d.css","/assets/index.0b90850f.js","/assets/index.121e7eba.css","/assets/domUtils.fbaa4cd3.js","/assets/_stringToArray.8266c95f.js","/assets/RightOutlined.dff2a05b.js","/assets/useTimeout.cb6e36e1.js","/assets/useScrollTo.e29c35ef.js","/assets/animation.5370f8e0.js"])))},props:{column:{type:Object,default:{}}},setup(e){const{prefixCls:l}=s("basic-table-header-cell");return{prefixCls:l,getIsEdit:a((()=>{var l;return!!(null==(l=e.column)?void 0:l.edit)})),getTitle:a((()=>{var l;return null==(l=e.column)?void 0:l.customTitle})),getHelpMessage:a((()=>{var l;return null==(l=e.column)?void 0:l.helpMessage}))}}});const _={key:1};m.render=function(e,l,t,s,a,m){const g=r("EditTableHeaderCell"),f=r("BasicHelp");return n(),i(u,null,[e.getIsEdit?(n(),i(g,{key:0},{default:c((()=>[d(o(e.getTitle),1)])),_:1})):(n(),i("span",_,o(e.getTitle),1)),e.getHelpMessage?(n(),i(f,{key:2,text:e.getHelpMessage,class:`${e.prefixCls}__help`},null,8,["text","class"])):p("",!0)],64)};export default m;
