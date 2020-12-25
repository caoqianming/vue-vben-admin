import{a as e,r as i,h as t,f as o,i as s,o as n,j as a,k as c,w as l,p as r}from"./index.a952a825.js";import"./xlsx.a48e520c.js";import"./index.78cf2b4b.js";import"./index.041bce66.js";import"./Trigger.6f8f8573.js";import"./omit.1c9bfb01.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.ca2d5869.js";import"./CheckOutlined.44301b28.js";import"./index.a940dab4.js";import"./colors.c19e2bbc.js";import"./index.f5fee5fe.js";import"./RightOutlined.94fd6a59.js";import"./index.e3c10438.js";import"./types.de6a8d52.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.a1c8f40e.js";import"./_baseFor.f4e5f03f.js";import"./index.51bebf76.js";import"./index.a172b251.js";import"./index.c4bdfd67.js";import"./index.79d94cfe.js";import"./UpOutlined.f7c9c4e6.js";import"./LeftOutlined.c4199e3a.js";import"./index.2f405b3a.js";import"./index.a9201ccf.js";import"./index.36c067bc.js";import"./index.47d13434.js";import"./index.f85fb911.js";import"./zh_CN.0242bd16.js";import"./TableAction.849c6599.js";import"./index.daaac866.js";import"./CaretDownFilled.6a089e95.js";import"./CheckOutlined.20191aeb.js";import"./CloseOutlined.56cac908.js";import{s as d}from"./EditTableHeaderIcon.60d1a574.js";import"./DownOutlined.acca69ab.js";import"./FullscreenOutlined.2cf0b23d.js";import"./LeftOutlined.c91acac2.js";import"./functional.696ef6a9.js";import"./RedoOutlined.2cc6df04.js";import"./RightOutlined.07d991df.js";import"./SettingOutlined.11b15c5a.js";import"./useTimeout.3c09ffad.js";import"./tsxHelper.50b89473.js";import"./domUtils.ad06f69d.js";import"./index.53160084.js";import"./resizeEvent.167fcdb9.js";import"./index.ab19a1be.js";import"./index.d9bface4.js";import"./useForm.9a5c5b7d.js";import"./index.87e5edf0.js";import"./useWindowSizeFn.03a16a67.js";import"./useFullScreen.882550a2.js";import"./uuid.40269c00.js";import"./useExpose.339c803b.js";import"./index.7362e9dc.js";import{getBasicColumns as m,getBasicShortColumns as f}from"./tableData.5ce30fe6.js";import{d as p}from"./table.336f364c.js";var u=e({components:{BasicTable:d},setup(){const e=i(null),{createMessage:s}=t();function n(){const i=o(e);if(!i)throw new Error("tableAction is null");return i}return{tableRef:e,api:p,columns:m(),changeLoading:function(){n().setLoading(!0),setTimeout((()=>{n().setLoading(!1)}),1e3)},changeColumns:function(){n().setColumns(f())},reloadTable:function(){n().setColumns(m()),n().reload({page:1})},getColumn:function(){s.info("请在控制台查看！")},getTableData:function(){s.info("请在控制台查看！")},getPagination:function(){s.info("请在控制台查看！")},setPaginationInfo:function(){n().setPagination({current:2}),n().reload()},getSelectRowList:function(){s.info("请在控制台查看！")},getSelectRowKeyList:function(){s.info("请在控制台查看！")},setSelectedRowKeyList:function(){n().setSelectedRowKeys(["0","1","2"])},clearSelect:function(){n().clearSelectedRowKeys()}}}});const j={class:"p-4"},b={class:"mb-4"},C=r("还原"),g=r("开启loading"),x=r("更改Columns"),k=r("获取Columns"),w=r("获取表格数据"),R=r("跳转到第2页"),S={class:"mb-4"},_=r("获取选中行"),O=r("获取选中行Key"),T=r("设置选中行"),h=r("清空选中行"),L=r("获取分页信息");u.render=function(e,i,t,o,r,d){const m=s("a-button"),f=s("BasicTable");return n(),a("div",j,[c("div",b,[c(m,{class:"mr-2",onClick:e.reloadTable},{default:l((()=>[C])),_:1},8,["onClick"]),c(m,{class:"mr-2",onClick:e.changeLoading},{default:l((()=>[g])),_:1},8,["onClick"]),c(m,{class:"mr-2",onClick:e.changeColumns},{default:l((()=>[x])),_:1},8,["onClick"]),c(m,{class:"mr-2",onClick:e.getColumn},{default:l((()=>[k])),_:1},8,["onClick"]),c(m,{class:"mr-2",onClick:e.getTableData},{default:l((()=>[w])),_:1},8,["onClick"]),c(m,{class:"mr-2",onClick:e.setPaginationInfo},{default:l((()=>[R])),_:1},8,["onClick"])]),c("div",S,[c(m,{class:"mr-2",onClick:e.getSelectRowList},{default:l((()=>[_])),_:1},8,["onClick"]),c(m,{class:"mr-2",onClick:e.getSelectRowKeyList},{default:l((()=>[O])),_:1},8,["onClick"]),c(m,{class:"mr-2",onClick:e.setSelectedRowKeyList},{default:l((()=>[T])),_:1},8,["onClick"]),c(m,{class:"mr-2",onClick:e.clearSelect},{default:l((()=>[h])),_:1},8,["onClick"]),c(m,{class:"mr-2",onClick:e.getPagination},{default:l((()=>[L])),_:1},8,["onClick"])]),c(f,{canResize:!1,title:"RefTable示例",titleHelpMessage:"使用Ref调用表格内方法",ref:"tableRef",api:e.api,columns:e.columns,rowKey:"id",rowSelection:{type:"checkbox"}},null,8,["api","columns"])])};export default u;