var e=Object.assign;import{d as t,r as i,a as r,aD as o,cp as s,cq as n,h as p,o as a,i as d,bw as m,j as c,a3 as j,b8 as f,k as l}from"./index.cf365317.js";import{S as u}from"./index.f1f3cbff.js";import b from"./Step1.d09a0613.js";import x from"./Step2.4cee67a1.js";import S from"./Step3.ba29353d.js";import{_ as v}from"./index.9bd36aa1.js";import"./vendor.3b1829c7.js";import"./CheckOutlined.e5d7bf16.js";import"./index.acfd6410.js";import"./SearchOutlined.70021315.js";import"./DownOutlined.a5bc93c0.js";import"./index.9e4baf11.js";import"./EyeOutlined.37772c3d.js";import"./index.607b19dc.js";import"./index.b75404bd.js";import"./index.ce4dce0a.js";import"./index.a947876e.js";import"./responsiveObserve.c545f1cc.js";import"./findIndex.dfb4a59a.js";import"./isEqual.a74a7c19.js";import"./get.719a4219.js";import"./_baseProperty.74f89655.js";import"./toInteger.4b5728ae.js";import"./index.161c7f6b.js";import"./index.8749b4fc.js";import"./colors.31ba1fd6.js";import"./index.444ab33f.js";import"./UpOutlined.da4838f7.js";import"./index.fb5bb62b.js";import"./RightOutlined.dff2a05b.js";import"./RedoOutlined.f186bbf9.js";import"./index.0444d019.js";import"./EllipsisOutlined.45abe0a5.js";import"./types.d79f185c.js";import"./Tree.41dfced6.js";import"./util.2327827f.js";import"./useAttrs.ea7f6219.js";/* empty css              */import"./uuid.20e2b0e6.js";import"./index.1077fb7c.js";import"./DeleteOutlined.ce3d1c59.js";import"./index.fbe41d70.js";import"./index.5622acee.js";import"./useTimeout.cb6e36e1.js";import"./useWindowSizeFn.308a0bee.js";import"./index.eb3022f0.js";import"./index.0b90850f.js";import"./domUtils.fbaa4cd3.js";import"./_stringToArray.8266c95f.js";import"./useScrollTo.e29c35ef.js";import"./animation.5370f8e0.js";import"./FullscreenOutlined.d0ce88af.js";import"./index.579d8600.js";import"./index.f96d6e91.js";import"./LeftOutlined.9278b1ed.js";import"./download.c885af96.js";import"./data.2505cb7f.js";import"./useForm.c2bcb6ec.js";import"./index.2e694ac7.js";import"./index.e78e0d58.js";import"./index.327c61a8.js";import"./index.a1bfa9a8.js";import"./usePageContext.1152815b.js";import"./transButton.43a89275.js";import"./ArrowLeftOutlined.949c5d9e.js";var O=t({components:{Step1:b,Step2:x,Step3:S,PageWrapper:v,[u.name]:u,[u.Step.name]:u.Step},setup(){const t=i(0),s=r({initSetp2:!1,initSetp3:!1});return e({current:t,handleStep1Next:function(e){t.value++,s.initSetp2=!0},handleStep2Next:function(e){t.value++,s.initSetp3=!0},handleRedo:function(){t.value=0,s.initSetp2=!1,s.initSetp3=!1},handleStepPrev:function(){t.value--}},o(s))}});const h=m("data-v-53523f72");s("data-v-53523f72");const g={class:"step-form-form"},N={class:"mt-5"};n();const P=h(((e,t,i,r,o,s)=>{const n=p("a-step"),m=p("a-steps"),u=p("Step1"),b=p("Step2"),x=p("Step3"),S=p("PageWrapper");return a(),d(S,{title:"分步表单",contentBackground:"",content:" 将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。",contentClass:"p-4"},{default:h((()=>[c("div",g,[c(m,{current:e.current},{default:h((()=>[c(n,{title:"填写转账信息"}),c(n,{title:"确认转账信息"}),c(n,{title:"完成"})])),_:1},8,["current"])]),c("div",N,[j(c(u,{onNext:e.handleStep1Next},null,8,["onNext"]),[[f,0===e.current]]),e.initSetp2?j((a(),d(b,{key:0,onPrev:e.handleStepPrev,onNext:e.handleStep2Next},null,8,["onPrev","onNext"])),[[f,1===e.current]]):l("",!0),e.initSetp3?j((a(),d(x,{key:1,onRedo:e.handleRedo},null,8,["onRedo"])),[[f,2===e.current]]):l("",!0)])])),_:1})}));O.render=P,O.__scopeId="data-v-53523f72";export default O;
