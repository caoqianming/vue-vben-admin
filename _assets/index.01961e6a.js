import{a as e,r as a,f as s,h as o,i as t,o as i,j as r,k as p,w as n,p as l}from"./index.a952a825.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.a1c8f40e.js";import{a as d}from"./index.1619f591.js";import"./RightOutlined.07d991df.js";import"./useTimeout.3c09ffad.js";import"./tsxHelper.50b89473.js";import"./index.ea7d8d45.js";import"./domUtils.ad06f69d.js";import"./index.53160084.js";import"./resizeEvent.167fcdb9.js";import"./animation.581865d4.js";import"./useScrollTo.3b50ae2e.js";import{u}from"./useCopyToClipboard.1f22a76b.js";var c=e({name:"Copy",components:{CollapseContainer:d},setup(){const e=a(""),{createMessage:t}=o(),{clipboardRef:i,copiedRef:r}=u();return{handleCopy:function(){const a=s(e);a?(i.value=a,s(r)&&t.warning("copy success！")):t.warning("请输入要拷贝的内容！")},value:e}}});const m={class:"p-4"},f={class:"flex justify-center"},j=l("Copy");c.render=function(e,a,s,o,l,d){const u=t("a-input"),c=t("a-button"),C=t("CollapseContainer");return i(),r("div",m,[p(C,{class:"px-20 bg-white w-full h-32 rounded-md",title:"Copy Example"},{default:n((()=>[p("div",f,[p(u,{placeholder:"请输入",value:e.value,"onUpdate:value":a[1]||(a[1]=a=>e.value=a)},null,8,["value"]),p(c,{type:"primary",onClick:e.handleCopy},{default:n((()=>[j])),_:1},8,["onClick"])])])),_:1})])};export default c;