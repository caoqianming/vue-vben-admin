import{d as e,bK as t,N as s,s as i,i as a,o as d,j as n,k as o,m as r,y as l,aJ as p}from"./index.a0c9d414.js";import"./index.47fbc714.js";import{b as m}from"./index.d0beb13d.js";import"./index.a45b2b74.js";import"./index.76e56cd2.js";import"./index.6f7c662f.js";import"./index.803cad5c.js";import"./index.34eb3473.js";import"./domUtils.dc6d2a29.js";import"./RightOutlined.c999941e.js";import"./index.8d91dadc.js";import"./useTimeout.81dc2a45.js";import"./useScrollTo.ffacd2e0.js";import"./animation.d0036cd9.js";import"./useAttrs.d4af3e38.js";import"./useHeaderSetting.06bc887a.js";import"./SettingOutlined.fcf5c9f8.js";var c=e({name:"SelectItem",components:{Select:t},props:{event:{type:Number,default:()=>{}},disabled:{type:Boolean},title:{type:String},def:{type:[String,Number]},initValue:{type:[String,Number]},options:{type:Array,default:[]}},setup(e){const{prefixCls:t}=s("setting-select-item");return{prefixCls:t,handleChange:function(t){e.event&&m(e.event,t)},getBindValue:i((()=>e.def?{value:e.def,defaultValue:e.initValue||e.def}:{}))}}});const u=p("data-v-e2504774")(((e,t,s,i,p,m)=>{const c=a("Select");return d(),n("div",{class:e.prefixCls},[o("span",null,r(e.title),1),o(c,l(e.getBindValue,{class:`${e.prefixCls}-select`,onChange:e.handleChange,disabled:e.disabled,size:"small",options:e.options}),null,16,["class","onChange","disabled","options"])],2)}));c.render=u,c.__scopeId="data-v-e2504774";export default c;