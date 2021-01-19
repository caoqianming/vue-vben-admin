import{d as o,bQ as e,i,o as s,j as r,w as t,k as a,n as d}from"./index.a0c9d414.js";import"./index.f4c035d6.js";import{b as n}from"./index.4b5d41a1.js";import l from"./Modal1.cc7a1012.js";import p from"./Modal2.13ab1afc.js";import m from"./Modal3.a7f22a68.js";import c from"./Modal4.a7d81039.js";import{_ as j}from"./index.5b50fd31.js";import"./useTimeout.81dc2a45.js";import"./useAttrs.d4af3e38.js";import"./useWindowSizeFn.3ffc3951.js";import"./index.803cad5c.js";import"./index.34eb3473.js";import"./domUtils.dc6d2a29.js";import"./RightOutlined.c999941e.js";import"./index.8d91dadc.js";import"./useScrollTo.ffacd2e0.js";import"./animation.d0036cd9.js";import"./FullscreenOutlined.a24d6272.js";import"./index.60510fc2.js";import"./index.38c8e961.js";import"./index.fdcc7c21.js";import"./index.47fbc714.js";import"./index.925fe361.js";import"./index.eae08916.js";import"./index.61099513.js";import"./index.9284d4e4.js";import"./uuid.467c825e.js";import"./index.d469528e.js";import"./index.a45b2b74.js";import"./index.99820032.js";import"./index.673364b0.js";import"./index.643da10c.js";import"./download.d1b8f6fd.js";import"./useForm.0c31c5a9.js";import"./index.b0611c31.js";import"./index.9fbd6c39.js";import"./usePageContext.21816986.js";var f=o({components:{Alert:e,Modal1:l,Modal2:p,Modal3:m,Modal4:c,PageWrapper:j},setup(){const[o,{openModal:e,setModalProps:i}]=n(),[s,{openModal:r}]=n(),[t,{openModal:a}]=n(),[d,{openModal:l}]=n();return{register1:o,openModal1:e,register2:s,openModal2:r,register3:t,openModal3:a,register4:d,openModal4:l,send:function(){l(!0,{data:"content",info:"Info"})},openModalLoading:function(){e(),i({loading:!0}),setTimeout((()=>{i({loading:!1})}),2e3)}}}});const u=d("打开弹窗 默认可以拖动/全屏"),g=d("打开弹窗"),M=d("打开弹窗"),x=d("打开弹窗并传递数据");f.render=function(o,e,d,n,l,p){const m=i("Alert"),c=i("a-button"),j=i("Modal1"),f=i("Modal2"),b=i("Modal3"),y=i("Modal4"),R=i("PageWrapper");return s(),r(R,{title:"modal组件使用示例"},{default:t((()=>[a(m,{message:"使用 useModal 进行弹窗操作，默认可以拖动，可以通过 draggable\n    参数进行控制是否可以拖动/全屏","show-icon":""}),a(c,{type:"primary",class:"my-4",onClick:o.openModalLoading},{default:t((()=>[u])),_:1},8,["onClick"]),a(m,{message:"内外同时同时显示隐藏","show-icon":""}),a(c,{type:"primary",class:"my-4",onClick:o.openModal2},{default:t((()=>[g])),_:1},8,["onClick"]),a(m,{message:"自适应高度","show-icon":""}),a(c,{type:"primary",class:"my-4",onClick:o.openModal3},{default:t((()=>[M])),_:1},8,["onClick"]),a(m,{message:"内外数据交互,外部通过 transferModalData 发送，内部通过 receiveDrawerDataRef 接收。该数据具有响应式","show-icon":""}),a(c,{type:"primary",class:"my-4",onClick:o.send},{default:t((()=>[x])),_:1},8,["onClick"]),a(j,{onRegister:o.register1},null,8,["onRegister"]),a(f,{onRegister:o.register2},null,8,["onRegister"]),a(b,{onRegister:o.register3},null,8,["onRegister"]),a(y,{onRegister:o.register4},null,8,["onRegister"])])),_:1})};export default f;