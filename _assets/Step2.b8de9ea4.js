let t=document.createElement("style");t.innerHTML=".step2[data-v-3e6a7e30]{width:450px;margin:0 auto}",document.head.appendChild(t);import{a as e,c$ as s,d0 as i,i as a,o,j as n,k as r,aS as d,p as m}from"./index.a952a825.js";import"./xlsx.a48e520c.js";import"./index.041bce66.js";import"./Trigger.6f8f8573.js";import"./omit.1c9bfb01.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.ca2d5869.js";import"./CheckOutlined.44301b28.js";import{s as p}from"./index.a940dab4.js";import"./colors.c19e2bbc.js";import"./RightOutlined.94fd6a59.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.a1c8f40e.js";import"./index.51bebf76.js";import"./index.a172b251.js";import"./index.79d94cfe.js";import"./UpOutlined.f7c9c4e6.js";import"./index.2f405b3a.js";import"./index.a9201ccf.js";import"./index.47d13434.js";import"./index.daaac866.js";import"./RightOutlined.07d991df.js";import"./tsxHelper.50b89473.js";import"./index.53160084.js";import"./index.ab19a1be.js";import"./index.d9bface4.js";import{u as c}from"./useForm.9a5c5b7d.js";import{step2Schemas as l}from"./data.4718af51.js";var u=e({components:{BasicForm:p},emits:["next","prev"],setup(t,{emit:e}){const[s,{validate:i,setProps:a}]=c({labelWidth:80,schemas:l,actionColOptions:{span:14},resetButtonOptions:{text:"上一步"},submitButtonOptions:{text:"提交"},resetFunc:async function(){e("prev")},submitFunc:async function(){try{const t=await i();a({submitButtonOptions:{loading:!0}}),setTimeout((()=>{a({submitButtonOptions:{loading:!1}}),e("next",t)}),1500)}catch(t){}}});return{register:s}}});const j=d("data-v-3e6a7e30");s("data-v-3e6a7e30");const b={class:"step2"},f=m(" ant-design@alipay.com "),x=m(" test@example.com "),g=m(" Vben "),h=m(" 500元 ");i();const v=j(((t,e,s,i,d,m)=>{const p=a("a-alert"),c=a("a-descriptions-item"),l=a("a-descriptions"),u=a("a-divider"),v=a("BasicForm");return o(),n("div",b,[r(p,{message:"确认转账后，资金将直接打入对方账户，无法退回。","show-icon":""}),r(l,{column:1,class:"mt-5"},{default:j((()=>[r(c,{label:"付款账户"},{default:j((()=>[f])),_:1}),r(c,{label:"收款账户"},{default:j((()=>[x])),_:1}),r(c,{label:"收款人姓名"},{default:j((()=>[g])),_:1}),r(c,{label:"转账金额"},{default:j((()=>[h])),_:1})])),_:1}),r(u),r(v,{onRegister:t.register},null,8,["onRegister"])])}));u.render=v,u.__scopeId="data-v-3e6a7e30";export default u;