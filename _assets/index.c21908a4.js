import{a as e,i as t,o as a,j as s,k as r,w as i}from"./index.a952a825.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.a1c8f40e.js";import{a as o}from"./index.1619f591.js";import"./RightOutlined.07d991df.js";import"./useTimeout.3c09ffad.js";import"./tsxHelper.50b89473.js";import"./index.ea7d8d45.js";import"./domUtils.ad06f69d.js";import"./index.53160084.js";import"./resizeEvent.167fcdb9.js";import"./animation.581865d4.js";import"./useScrollTo.3b50ae2e.js";import{B as l,t as d}from"./data.996b9921.js";var p=e({components:{BasicTree:l,CollapseContainer:o},setup:()=>({treeData:d})});const m={class:"flex p-4"};p.render=function(e,o,l,d,p,n){const c=t("BasicTree"),f=t("CollapseContainer");return a(),s("div",m,[r(f,{title:"基础示例",style:{width:"33%"},class:"mr-4"},{default:i((()=>[r(c,{treeData:e.treeData},null,8,["treeData"])])),_:1}),r(f,{title:"可勾选",class:"mr-4",style:{width:"33%"}},{default:i((()=>[r(c,{treeData:e.treeData,checkable:!0},null,8,["treeData"])])),_:1}),r(f,{title:"默认展开/勾选示例",style:{width:"33%"}},{default:i((()=>[r(c,{treeData:e.treeData,checkable:!0,expandedKeys:["0-0"],checkedKeys:["0-0"]},null,8,["treeData"])])),_:1})])};export default p;