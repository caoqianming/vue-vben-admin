import{a as e,h as t,i,o as n,j as s,k as o,w as a,p as l}from"./index.a952a825.js";import"./xlsx.a48e520c.js";import"./Trigger.6f8f8573.js";import"./_baseSlice.1123a25b.js";import"./index.e3c10438.js";import"./types.de6a8d52.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.a1c8f40e.js";import"./index.a172b251.js";import"./index.c4bdfd67.js";import"./index.36c067bc.js";import{a as r}from"./index.1619f591.js";import"./RightOutlined.07d991df.js";import"./useTimeout.3c09ffad.js";import"./tsxHelper.50b89473.js";import"./index.ea7d8d45.js";import"./domUtils.ad06f69d.js";import"./index.53160084.js";import"./resizeEvent.167fcdb9.js";import"./animation.581865d4.js";import"./useScrollTo.3b50ae2e.js";import"./index.ab19a1be.js";import{u as p}from"./useContextMenu.1c117463.js";var d=e({components:{CollapseContainer:r},setup(){const[e]=p(),{createMessage:i}=t();return{handleContext:function(t){e({event:t,items:[{label:"New",icon:"bi:plus",handler:()=>{i.success("click new")}},{label:"Open",icon:"bx:bxs-folder-open",handler:()=>{i.success("click open")}}]})},handleMultipleContext:function(t){e({event:t,items:[{label:"New",icon:"bi:plus",children:[{label:"New1-1",icon:"bi:plus",divider:!0,children:[{label:"New1-1-1",handler:()=>{i.success("click new")}},{label:"New1-2-1",disabled:!0}]},{label:"New1-2",icon:"bi:plus"}]}]})}}}});const c={class:"p-4"},m=l("Right Click on me"),u=l("Right Click on me");d.render=function(e,t,l,r,p,d){const b=i("a-button"),j=i("CollapseContainer");return n(),s("div",c,[o(j,{title:"Simple"},{default:a((()=>[o(b,{type:"primary",onContextmenu:e.handleContext},{default:a((()=>[m])),_:1},8,["onContextmenu"])])),_:1}),o(j,{title:"Multiple",class:"mt-4"},{default:a((()=>[o(b,{type:"primary",onContextmenu:e.handleMultipleContext},{default:a((()=>[u])),_:1},8,["onContextmenu"])])),_:1})])};export default d;