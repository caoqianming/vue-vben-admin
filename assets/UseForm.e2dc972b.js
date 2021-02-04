import{_ as e}from"./index.b75404bd.js";import{a as s}from"./index.eb3022f0.js";import{d as o,g as t,h as i,o as l,i as r,w as a,j as n,m as p}from"./index.cf365317.js";import{_ as d}from"./index.9bd36aa1.js";import{u as c}from"./useForm.c2bcb6ec.js";import"./index.ce4dce0a.js";import"./index.a947876e.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.dfb4a59a.js";import"./isEqual.a74a7c19.js";import"./get.719a4219.js";import"./_baseProperty.74f89655.js";import"./toInteger.4b5728ae.js";import"./index.161c7f6b.js";import"./index.9e4baf11.js";import"./SearchOutlined.70021315.js";import"./EyeOutlined.37772c3d.js";import"./index.acfd6410.js";import"./CheckOutlined.e5d7bf16.js";import"./DownOutlined.a5bc93c0.js";import"./index.8749b4fc.js";import"./colors.31ba1fd6.js";import"./index.444ab33f.js";import"./UpOutlined.da4838f7.js";import"./index.fb5bb62b.js";import"./RightOutlined.dff2a05b.js";import"./RedoOutlined.f186bbf9.js";import"./index.0444d019.js";import"./EllipsisOutlined.45abe0a5.js";import"./types.d79f185c.js";import"./Tree.41dfced6.js";import"./util.2327827f.js";import"./useAttrs.ea7f6219.js";/* empty css              */import"./uuid.20e2b0e6.js";import"./index.1077fb7c.js";import"./DeleteOutlined.ce3d1c59.js";import"./index.fbe41d70.js";import"./index.5622acee.js";import"./useTimeout.cb6e36e1.js";import"./useWindowSizeFn.308a0bee.js";import"./FullscreenOutlined.d0ce88af.js";import"./index.607b19dc.js";import"./index.579d8600.js";import"./index.f96d6e91.js";import"./LeftOutlined.9278b1ed.js";import"./download.c885af96.js";import"./domUtils.fbaa4cd3.js";import"./_stringToArray.8266c95f.js";import"./index.0b90850f.js";import"./useScrollTo.e29c35ef.js";import"./animation.5370f8e0.js";import"./index.327c61a8.js";import"./index.a1bfa9a8.js";import"./usePageContext.1152815b.js";import"./transButton.43a89275.js";import"./ArrowLeftOutlined.949c5d9e.js";const m=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}}];var u=o({components:{BasicForm:e,CollapseContainer:s,PageWrapper:d},setup(){const{createMessage:e}=t(),[s,{setProps:o}]=c({labelWidth:120,schemas:m,actionColOptions:{span:24}});return{register:s,schemas:m,handleSubmit:s=>{e.success("click search,values:"+JSON.stringify(s))},setProps:o}}});const f={class:"mb-4"},b=p(" 更改labelWidth "),j=p(" 还原labelWidth "),P=p(" 更改Size "),x=p(" 还原Size "),C=p(" 禁用表单 "),h=p(" 解除禁用 "),k=p(" 紧凑表单 "),_=p(" 还原正常间距 "),O=p(" 操作按钮位置 "),g={class:"mb-4"},v=p(" 隐藏操作按钮 "),S=p(" 显示操作按钮 "),w=p(" 隐藏重置按钮 "),B=p(" 显示重置按钮 "),W=p(" 隐藏查询按钮 "),y=p(" 显示查询按钮 "),F=p(" 修改重置按钮 "),R=p(" 修改查询按钮 ");u.render=function(e,s,o,t,p,d){const c=i("a-button"),m=i("BasicForm"),u=i("CollapseContainer"),z=i("PageWrapper");return l(),r(z,{title:"UseForm操作示例"},{default:a((()=>[n("div",f,[n(c,{onClick:s[1]||(s[1]=s=>e.setProps({labelWidth:150})),class:"mr-2"},{default:a((()=>[b])),_:1}),n(c,{onClick:s[2]||(s[2]=s=>e.setProps({labelWidth:120})),class:"mr-2"},{default:a((()=>[j])),_:1}),n(c,{onClick:s[3]||(s[3]=s=>e.setProps({size:"large"})),class:"mr-2"},{default:a((()=>[P])),_:1}),n(c,{onClick:s[4]||(s[4]=s=>e.setProps({size:"default"})),class:"mr-2"},{default:a((()=>[x])),_:1}),n(c,{onClick:s[5]||(s[5]=s=>e.setProps({disabled:!0})),class:"mr-2"},{default:a((()=>[C])),_:1}),n(c,{onClick:s[6]||(s[6]=s=>e.setProps({disabled:!1})),class:"mr-2"},{default:a((()=>[h])),_:1}),n(c,{onClick:s[7]||(s[7]=s=>e.setProps({compact:!0})),class:"mr-2"},{default:a((()=>[k])),_:1}),n(c,{onClick:s[8]||(s[8]=s=>e.setProps({compact:!1})),class:"mr-2"},{default:a((()=>[_])),_:1}),n(c,{onClick:s[9]||(s[9]=s=>e.setProps({actionColOptions:{span:8}})),class:"mr-2"},{default:a((()=>[O])),_:1})]),n("div",g,[n(c,{onClick:s[10]||(s[10]=s=>e.setProps({showActionButtonGroup:!1})),class:"mr-2"},{default:a((()=>[v])),_:1}),n(c,{onClick:s[11]||(s[11]=s=>e.setProps({showActionButtonGroup:!0})),class:"mr-2"},{default:a((()=>[S])),_:1}),n(c,{onClick:s[12]||(s[12]=s=>e.setProps({showResetButton:!1})),class:"mr-2"},{default:a((()=>[w])),_:1}),n(c,{onClick:s[13]||(s[13]=s=>e.setProps({showResetButton:!0})),class:"mr-2"},{default:a((()=>[B])),_:1}),n(c,{onClick:s[14]||(s[14]=s=>e.setProps({showSubmitButton:!1})),class:"mr-2"},{default:a((()=>[W])),_:1}),n(c,{onClick:s[15]||(s[15]=s=>e.setProps({showSubmitButton:!0})),class:"mr-2"},{default:a((()=>[y])),_:1}),n(c,{onClick:s[16]||(s[16]=s=>e.setProps({resetButtonOptions:{disabled:!0,text:"重置New"}})),class:"mr-2"},{default:a((()=>[F])),_:1}),n(c,{onClick:s[17]||(s[17]=s=>e.setProps({submitButtonOptions:{disabled:!0,loading:!0}})),class:"mr-2"},{default:a((()=>[R])),_:1})]),n(u,{title:"useForm示例"},{default:a((()=>[n(m,{onRegister:e.register,onSubmit:e.handleSubmit},null,8,["onRegister","onSubmit"])])),_:1})])),_:1})};export default u;
