import{M as e}from"./index.6c1498d2.js";import{_ as n}from"./index.5b50fd31.js";import{d as a,r as t,f as o,i as r,o as s,j as i,w as d,k as l,n as m}from"./index.a0c9d414.js";import"./index.b0611c31.js";import"./index.673364b0.js";import"./index.8d91dadc.js";import"./index.9fbd6c39.js";import"./usePageContext.21816986.js";var u=a({components:{MarkDown:e,PageWrapper:n},setup(){const e=t(null),n=t("\n# title\n\n# content\n");return{value:n,toggleTheme:function(){const n=o(e);if(!n)return;n.getVditor().setTheme("dark")},markDownRef:e,handleChange:function(e){n.value=e}}}});const c=m("黑暗主题");u.render=function(e,n,a,t,o,m){const u=r("a-button"),p=r("MarkDown"),f=r("PageWrapper");return s(),i(f,{title:"MarkDown组件示例"},{default:d((()=>[l(u,{onClick:e.toggleTheme,class:"mb-2",type:"primary"},{default:d((()=>[c])),_:1},8,["onClick"]),l(p,{value:e.value,onChange:e.handleChange,ref:"markDownRef"},null,8,["value","onChange"])])),_:1})};export default u;