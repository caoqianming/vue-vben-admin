import{B as t,t as e}from"./data.d9e0af88.js";import{a as i}from"./index.eb3022f0.js";import{_ as a}from"./index.9bd36aa1.js";import{d as r,bP as s,h as o,o as n,i as l,w as d,j as m}from"./index.cf365317.js";import{P as p}from"./PlusOutlined.2c246177.js";import{D as c}from"./DeleteOutlined.ce3d1c59.js";import"./index.0b90850f.js";import"./domUtils.fbaa4cd3.js";import"./_stringToArray.8266c95f.js";import"./RightOutlined.dff2a05b.js";/* empty css              */import"./useTimeout.cb6e36e1.js";import"./useScrollTo.e29c35ef.js";import"./animation.5370f8e0.js";import"./index.327c61a8.js";import"./index.0444d019.js";import"./EllipsisOutlined.45abe0a5.js";import"./types.d79f185c.js";import"./isEqual.a74a7c19.js";import"./toInteger.4b5728ae.js";import"./DownOutlined.a5bc93c0.js";import"./index.a1bfa9a8.js";import"./usePageContext.1152815b.js";import"./transButton.43a89275.js";import"./ArrowLeftOutlined.949c5d9e.js";import"./vendor.3b1829c7.js";var f=r({components:{BasicTree:t,CollapseContainer:i,PageWrapper:a},setup:()=>({treeData:e,actionList:[{render:t=>s(p,{class:"ml-2",onClick:()=>{}})},{render:()=>s(c)}],getRightMenuList:function(t){return[{label:"新增",handler:()=>{},icon:"bi:plus"},{label:"删除",handler:()=>{},icon:"bx:bxs-folder-open"}]}})});const j={class:"flex"};f.render=function(t,e,i,a,r,s){const p=o("BasicTree"),c=o("CollapseContainer"),f=o("PageWrapper");return n(),l(f,{title:"Tree函数操作示例"},{default:d((()=>[m("div",j,[m(c,{title:"右侧操作按钮",class:"mr-4",style:{width:"33%"}},{default:d((()=>[m(p,{treeData:t.treeData,actionList:t.actionList},null,8,["treeData","actionList"])])),_:1}),m(c,{title:"右键菜单",class:"mr-4",style:{width:"33%"}},{default:d((()=>[m(p,{treeData:t.treeData,beforeRightClick:t.getRightMenuList},null,8,["treeData","beforeRightClick"])])),_:1})])])),_:1})};export default f;
