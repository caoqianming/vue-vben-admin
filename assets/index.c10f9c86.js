import{d as e,h as r,o as i,i as o,w as t,j as s,m as a}from"./index.726a1292.js";import{A as n}from"./index.e9b59711.js";import{u as p}from"./index.b50e15c5.js";import d from"./Drawer1.85878d97.js";import m from"./Drawer2.004b3d0a.js";import c from"./Drawer3.4257dc8b.js";import j from"./Drawer4.31fca035.js";import f from"./Drawer5.5566b6b7.js";import{_ as l}from"./index.4b3faacc.js";import"./vendor.3b1829c7.js";import"./index.56ebafcd.js";import"./index.56a51e6f.js";import"./index.f4bd2380.js";import"./domUtils.88771570.js";import"./_stringToArray.d899db8d.js";import"./RightOutlined.97d13c0b.js";/* empty css              */import"./useTimeout.621e6290.js";import"./useScrollTo.367edc72.js";import"./animation.7e1378fc.js";import"./ArrowLeftOutlined.d3517891.js";import"./isEqual.aa473c94.js";import"./index.b092357d.js";import"./index.c87fd8d1.js";import"./index.2ebd2525.js";import"./responsiveObserve.c545f1cc.js";import"./findIndex.6b15e138.js";import"./get.47cb6864.js";import"./_baseProperty.74f89655.js";import"./toInteger.410aca8d.js";import"./index.64f011cb.js";import"./index.6d83b64c.js";import"./SearchOutlined.47e6a5d6.js";import"./EyeOutlined.c0aabb58.js";import"./index.d1ee17e2.js";import"./CheckOutlined.004492c1.js";import"./DownOutlined.f011354d.js";import"./index.95f3772a.js";import"./index.57c2cc27.js";import"./UpOutlined.f9435ac9.js";import"./index.571c6d75.js";import"./RedoOutlined.31b7b26c.js";import"./index.fc8abf96.js";import"./EllipsisOutlined.f451d7d8.js";import"./types.96074ade.js";import"./Tree.23ca4528.js";import"./util.fcd2ca24.js";import"./uuid.9631d95f.js";import"./index.bdd4f54c.js";import"./DeleteOutlined.f78597ae.js";import"./index.594319ed.js";import"./useWindowSizeFn.7fb21022.js";import"./FullscreenOutlined.0d377604.js";import"./index.d77fefba.js";import"./index.40081bc3.js";import"./index.0c4a85ff.js";import"./LeftOutlined.49f96845.js";import"./download.d746980c.js";import"./useForm.ac48f24c.js";import"./index.41b8ad5e.js";import"./index.151c2907.js";import"./usePageContext.212455a7.js";import"./transButton.b72fffa2.js";var w=e({components:{Alert:n,PageWrapper:l,Drawer1:d,Drawer2:m,Drawer3:c,Drawer4:j,Drawer5:f},setup(){const[e,{openDrawer:r,setDrawerProps:i}]=p(),[o,{openDrawer:t}]=p(),[s,{openDrawer:a}]=p(),[n,{openDrawer:d}]=p(),[m,{openDrawer:c}]=p();return{register1:e,openDrawer1:r,register2:o,openDrawer2:t,register3:s,openDrawer3:a,register4:n,register5:m,openDrawer5:c,send:function(){d(!0,{data:"content",info:"Info"})},openDrawerLoading:function(){r(),i({loading:!0}),setTimeout((()=>{i({loading:!1})}),2e3)}}}});const u=a(" 打开Drawer "),D=a(" 打开Drawer "),g=a(" 打开Drawer "),b=a(" 打开Drawer并传递数据 "),x=a(" 打开详情Drawer ");w.render=function(e,a,n,p,d,m){const c=r("Alert"),j=r("a-button"),f=r("Drawer1"),l=r("Drawer2"),w=r("Drawer3"),y=r("Drawer4"),O=r("Drawer5"),R=r("PageWrapper");return i(),o(R,{title:"抽屉组件使用示例"},{default:t((()=>[s(c,{message:"使用 useDrawer 进行抽屉操作","show-icon":""}),s(j,{type:"primary",class:"my-4",onClick:e.openDrawerLoading},{default:t((()=>[u])),_:1},8,["onClick"]),s(c,{message:"内外同时控制显示隐藏","show-icon":""}),s(j,{type:"primary",class:"my-4",onClick:a[1]||(a[1]=r=>e.openDrawer2(!0))},{default:t((()=>[D])),_:1}),s(c,{message:"自适应高度/显示footer","show-icon":""}),s(j,{type:"primary",class:"my-4",onClick:a[2]||(a[2]=r=>e.openDrawer3(!0))},{default:t((()=>[g])),_:1}),s(c,{message:"内外数据交互,外部通过 transferModalData 发送，内部通过 receiveDrawerDataRef 接收。该数据具有响应式","show-icon":""}),s(j,{type:"primary",class:"my-4",onClick:e.send},{default:t((()=>[b])),_:1},8,["onClick"]),s(c,{message:"详情页模式","show-icon":""}),s(j,{type:"primary",class:"my-4",onClick:a[3]||(a[3]=r=>e.openDrawer5(!0))},{default:t((()=>[x])),_:1}),s(f,{onRegister:e.register1},null,8,["onRegister"]),s(l,{onRegister:e.register2},null,8,["onRegister"]),s(w,{onRegister:e.register3},null,8,["onRegister"]),s(y,{onRegister:e.register4},null,8,["onRegister"]),s(O,{onRegister:e.register5},null,8,["onRegister"])])),_:1})};export default w;