import{d as e,bB as t,h as s,o,i as r,w as i,j as a,m as l}from"./index.726a1292.js";import{I as n}from"./index.6d83b64c.js";import{a as c}from"./index.56a51e6f.js";import{_ as d}from"./index.4b3faacc.js";import"./vendor.3b1829c7.js";import"./SearchOutlined.47e6a5d6.js";import"./EyeOutlined.c0aabb58.js";import"./index.f4bd2380.js";import"./domUtils.88771570.js";import"./_stringToArray.d899db8d.js";import"./RightOutlined.97d13c0b.js";/* empty css              */import"./useTimeout.621e6290.js";import"./useScrollTo.367edc72.js";import"./animation.7e1378fc.js";import"./index.41b8ad5e.js";import"./index.fc8abf96.js";import"./EllipsisOutlined.f451d7d8.js";import"./types.96074ade.js";import"./isEqual.aa473c94.js";import"./toInteger.410aca8d.js";import"./DownOutlined.f011354d.js";import"./index.151c2907.js";import"./usePageContext.212455a7.js";import"./transButton.b72fffa2.js";import"./ArrowLeftOutlined.d3517891.js";var m=e({name:"TabsDemo",components:{CollapseContainer:c,PageWrapper:d,[n.name]:n},setup(){const{closeAll:e,closeLeft:s,closeRight:o,closeOther:r,closeCurrent:i,refreshPage:a}=t();return{closeAll:e,closeLeft:s,closeRight:o,closeOther:r,closeCurrent:i,refreshPage:a}}});const p=l(" 关闭所有 "),f=l(" 关闭左侧 "),u=l(" 关闭右侧 "),j=l(" 关闭其他 "),C=l(" 关闭当前 "),b=l(" 刷新当前 ");m.render=function(e,t,l,n,c,d){const m=s("a-input"),h=s("CollapseContainer"),g=s("a-button"),k=s("PageWrapper");return o(),r(k,{title:"标签页操作示例"},{default:i((()=>[a(h,{title:"在下面输入框输入文本,切换后回来内容会保存"},{default:i((()=>[a(m,{placeholder:"请输入"})])),_:1}),a(h,{class:"mt-4",title:"标签页操作"},{default:i((()=>[a(g,{class:"mr-2",onClick:e.closeAll},{default:i((()=>[p])),_:1},8,["onClick"]),a(g,{class:"mr-2",onClick:e.closeLeft},{default:i((()=>[f])),_:1},8,["onClick"]),a(g,{class:"mr-2",onClick:e.closeRight},{default:i((()=>[u])),_:1},8,["onClick"]),a(g,{class:"mr-2",onClick:e.closeOther},{default:i((()=>[j])),_:1},8,["onClick"]),a(g,{class:"mr-2",onClick:e.closeCurrent},{default:i((()=>[C])),_:1},8,["onClick"]),a(g,{class:"mr-2",onClick:e.refreshPage},{default:i((()=>[b])),_:1},8,["onClick"])])),_:1})])),_:1})};export default m;