import{d as t,u as e,h as s,o as i,i as o,w as r,j as a,a0 as n}from"./index.02d1965c.js";import"./_stringToArray.2de96d92.js";import"./domUtils.be3edd39.js";import"./index.daf19870.js";import{_ as d}from"./index.e7faca86.js";import"./FullscreenOutlined.247db61e.js";import"./RightOutlined.d46e4d56.js";import"./useTimeout.5f562c84.js";import"./index.46df4a2f.js";import"./animation.218b0c8c.js";import"./useScrollTo.b870f612.js";import"./useAttrs.c1394557.js";import"./useWindowSizeFn.9d82b09a.js";import{D as c}from"./index.556c6ee0.js";import{u as m}from"./useDescription.b4cdabcc.js";import{getDescSchema as p}from"./data.3cc7c7a5.js";var l=t({name:"ErrorLogDetailModal",components:{BasicModal:d,Description:c},props:{info:{type:Object,default:null}},setup(){const{t:t}=e(),[s]=m({column:2,schema:p()});return{register:s,useI18n:e,t:t}}});l.render=function(t,e,d,c,m,p){const l=s("Description"),u=s("BasicModal");return i(),o(u,n({width:800,title:t.t("sys.errorLog.tableActionDesc")},t.$attrs),{default:r((()=>[a(l,{data:t.info,onRegister:t.register},null,8,["data","onRegister"])])),_:1},16,["title"])};export default l;