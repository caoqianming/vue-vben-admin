import{d as t,dz as e,dA as s,cp as o,cq as n,h as a,o as r,i as d,bw as i,j as c,m}from"./index.d77f02a9.js";import{A as p}from"./index.d61bd1bf.js";import u from"./CurrentPermissionMode.d57c1e6f.js";import{_ as f}from"./index.6781f66c.js";import"./vendor.3b1829c7.js";import"./index.52f18b9b.js";import"./index.afd079bf.js";import"./index.7e51aec0.js";import"./RightOutlined.91dd89cb.js";import"./EllipsisOutlined.d6473483.js";import"./types.7d2364ed.js";import"./isEqual.66f620a0.js";import"./toInteger.007e1a46.js";import"./DownOutlined.4bb15dc2.js";/* empty css              */import"./index.f3100edb.js";import"./usePageContext.b4dcd332.js";import"./transButton.29cc983c.js";import"./ArrowLeftOutlined.3f5c2cff.js";var l=t({components:{Alert:p,CurrentPermissionMode:u,PageWrapper:f},setup(){const{changeMenu:t}=s();return{RoleEnum:e,changeMenu:t}}});const b=i("data-v-bcdaa5b4");o("data-v-bcdaa5b4");const j={class:"mt-4"},g=m(" 权限切换(请先切换权限模式为后台权限模式): "),x=m(" 获取用户id为1的菜单 "),h=m(" 获取用户id为2的菜单 ");n();const C=b(((t,e,s,o,n,i)=>{const m=a("CurrentPermissionMode"),p=a("Alert"),u=a("a-button"),f=a("a-button-group"),l=a("PageWrapper");return r(),d(l,{title:"后台权限示例",contentBackground:"",contentClass:"p-4",content:"目前mock了两组数据， id为1 和 2 具体返回的菜单可以在mock/sys/menu.ts内查看"},{default:b((()=>[c(m),c(p,{class:"mt-4",type:"info",message:"点击后请查看左侧菜单变化","show-icon":""}),c("div",j,[g,c(f,null,{default:b((()=>[c(u,{onClick:e[1]||(e[1]=e=>t.changeMenu("1"))},{default:b((()=>[x])),_:1}),c(u,{onClick:e[2]||(e[2]=e=>t.changeMenu("2"))},{default:b((()=>[h])),_:1})])),_:1})])])),_:1})}));l.render=C,l.__scopeId="data-v-bcdaa5b4";export default l;
