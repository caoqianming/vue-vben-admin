import{B as e}from"./index.732b3727.js";import{d as s,r as t,g as c,cp as l,cq as n,h as a,o as i,i as r,j as d,bw as o,m as u}from"./index.d77f02a9.js";import{_ as f}from"./index.6781f66c.js";import{B as p}from"./BugOutlined.666b3d76.js";import{R as m}from"./RightOutlined.91dd89cb.js";import"./vendor.3b1829c7.js";import"./index.afd079bf.js";import"./index.7e51aec0.js";import"./EllipsisOutlined.d6473483.js";import"./types.7d2364ed.js";import"./isEqual.66f620a0.js";import"./toInteger.007e1a46.js";import"./DownOutlined.4bb15dc2.js";/* empty css              */import"./index.f3100edb.js";import"./usePageContext.b4dcd332.js";import"./transButton.29cc983c.js";import"./ArrowLeftOutlined.3f5c2cff.js";var y=s({components:{BasicDragVerify:e,BugOutlined:p,RightOutlined:m,PageWrapper:f},setup(){const{createMessage:e}=c();return{handleSuccess:function(s){const{time:t}=s;e.success(`校验成功,耗时${t}秒`)},el1:t(null),el2:t(null),el3:t(null),el4:t(null),el5:t(null),handleBtnClick:function(e){e&&e.resume()}}}});const g=o("data-v-2fc4780c");l("data-v-2fc4780c");const j={class:"flex justify-center p-4 items-center bg-gray-700"},b=u(" 还原 "),x={class:"flex justify-center p-4 items-center bg-gray-700"},S=u(" 还原 "),h={class:"flex justify-center p-4 items-center bg-gray-700"},k=u(" 还原 "),B={class:"flex justify-center p-4 items-center bg-gray-700"},v=u(" 还原 "),C={class:"flex justify-center p-4 items-center bg-gray-700"},_={key:0},O=u(" 成功 "),R={key:1},w=u(" 拖动 "),D=u(" 还原 ");n();const I=g(((e,s,t,c,l,n)=>{const o=a("BasicDragVerify"),u=a("a-button"),f=a("BugOutlined"),p=a("RightOutlined"),m=a("PageWrapper");return i(),r(m,{title:"拖动校验示例"},{default:g((()=>[d("div",j,[d(o,{ref:"el1",onSuccess:e.handleSuccess},null,8,["onSuccess"]),d(u,{type:"primary",class:"ml-2",onClick:s[1]||(s[1]=s=>e.handleBtnClick(e.el1))},{default:g((()=>[b])),_:1})]),d("div",x,[d(o,{ref:"el2",onSuccess:e.handleSuccess,circle:""},null,8,["onSuccess"]),d(u,{type:"primary",class:"ml-2",onClick:s[2]||(s[2]=s=>e.handleBtnClick(e.el2))},{default:g((()=>[S])),_:1})]),d("div",h,[d(o,{ref:"el3",onSuccess:e.handleSuccess,text:"拖动以进行校验",successText:"校验成功",barStyle:{background:"#018ffb"}},null,8,["onSuccess"]),d(u,{type:"primary",class:"ml-2",onClick:s[3]||(s[3]=s=>e.handleBtnClick(e.el3))},{default:g((()=>[k])),_:1})]),d("div",B,[d(o,{ref:"el4",onSuccess:e.handleSuccess},{actionIcon:g((e=>[e?(i(),r(f,{key:0})):(i(),r(p,{key:1}))])),_:1},8,["onSuccess"]),d(u,{type:"primary",class:"ml-2",onClick:s[4]||(s[4]=s=>e.handleBtnClick(e.el4))},{default:g((()=>[v])),_:1})]),d("div",C,[d(o,{ref:"el5",onSuccess:e.handleSuccess},{text:g((e=>[e?(i(),r("div",_,[d(f),O])):(i(),r("div",R,[w,d(p)]))])),_:1},8,["onSuccess"]),d(u,{type:"primary",class:"ml-2",onClick:s[5]||(s[5]=s=>e.handleBtnClick(e.el5))},{default:g((()=>[D])),_:1})])])),_:1})}));y.render=I,y.__scopeId="data-v-2fc4780c";export default y;
