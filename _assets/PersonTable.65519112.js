import{a as e,i as t,o as i,j as o,k as n,w as a,p as s}from"./index.741c7e80.js";import"./xlsx.a48e520c.js";import"./index.f91e8ba7.js";import"./index.0140268b.js";import"./Trigger.9624f24b.js";import"./omit.2ac92ce2.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.2d33f44f.js";import"./CheckOutlined.fa54ab74.js";import"./index.e028f2ec.js";import"./colors.11c2fe2a.js";import"./index.68e61bda.js";import"./RightOutlined.346767f2.js";import"./index.7af5c622.js";import"./types.3a4c305e.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.2638ac3e.js";import"./_baseFor.f4e5f03f.js";import"./index.b89b2489.js";import"./index.a172b251.js";import"./index.dd15aaf5.js";import"./index.71d835da.js";import"./UpOutlined.8fbbe575.js";import"./LeftOutlined.3bbf91ca.js";import"./index.fe81ccfa.js";import"./index.b3c5c07d.js";import"./index.46cea309.js";import"./index.ced671f3.js";import"./index.fce9afc1.js";import"./zh_CN.0242bd16.js";import{T as d}from"./TableAction.2c832e8f.js";import"./index.03e0e622.js";import"./CaretDownFilled.b510098b.js";import"./CheckOutlined.dd0fccea.js";import"./CloseOutlined.c0e66dca.js";import{s as r,a as c,r as l}from"./EditTableHeaderIcon.afcdb7ad.js";import"./DownOutlined.db3ed0f0.js";import"./FullscreenOutlined.db22ca11.js";import"./LeftOutlined.76bd1425.js";import"./functional.91884a91.js";import"./RedoOutlined.8bd117f8.js";import"./RightOutlined.ae2f2814.js";import"./SettingOutlined.085bf9bb.js";import"./useTimeout.0364e255.js";import"./useDebounce.87ee1be2.js";import"./useEventListener.3f9fc979.js";import"./useBreakpoint.7d12f99a.js";import"./index.504b6a3c.js";import"./tsxHelper.1229783e.js";import"./index.266c5a87.js";import"./index.58cbc055.js";import"./useForm.8e6b95f4.js";import"./index.854d6bdb.js";import"./useModalContext.26fce787.js";import"./domUtils.5e294dfc.js";import"./useFullScreen.37e98974.js";import"./uuid.40269c00.js";import"./useWindowSizeFn.2350f5a1.js";import"./useExpose.61e8cb01.js";import"./index.f2623b6d.js";import{u as m}from"./useTable.2d4d572e.js";const p=[{title:"成员姓名",dataIndex:"name",customRender:l({dataIndex:"name",placeholder:"请输入成员姓名"})},{title:"工号",dataIndex:"no",customRender:l({dataIndex:"no",placeholder:"请输入工号"})},{title:"所属部门",dataIndex:"dept",customRender:l({dataIndex:"dept",placeholder:"请输入所属部门"})}],u=[{name:"John Brown",no:"00001",dept:"New York No. 1 Lake Park"},{name:"John Brown2",no:"00002",dept:"New York No. 2 Lake Park"},{name:"John Brown3",no:"00003",dept:"New York No. 3Lake Park"}];var b=e({components:{BasicTable:r,EditTableHeaderIcon:c,TableAction:d},setup(){const[e,{getDataSource:t}]=m({columns:p,showIndexColumn:!1,dataSource:u,actionColumn:{width:160,title:"操作",dataIndex:"action",slots:{customRender:"action"}},pagination:!1});function i(e){e.editable=!0}function o(e){if(e.editable=!1,e.onCancel&&e.onCancel(),e.isNew){const i=t(),o=i.findIndex((t=>t.key===e.key));i.splice(o,1)}}function n(e){e.editable=!1,e.onSubmit&&e.onSubmit()}return{registerTable:e,handleEdit:i,createActions:function(e,t){return e.editable?[{label:"保存",onClick:n.bind(null,e,t)},{label:"取消",popConfirm:{title:"是否取消编辑",confirm:o.bind(null,e,t)}}]:[{label:"编辑",onClick:i.bind(null,e)},{label:"删除"}]},handleAdd:function(){t().push({name:"",no:"",dept:"",editable:!0,isNew:!0})},getDataSource:t}}});const j=s("新增成员");b.render=function(e,s,d,r,c,l){const m=t("TableAction"),p=t("BasicTable"),u=t("a-button");return i(),o("div",null,[n(p,{onRegister:e.registerTable},{action:a((({record:t,column:i})=>[n(m,{actions:e.createActions(t,i)},null,8,["actions"])])),_:1},8,["onRegister"]),n(u,{block:"",class:"mt-5",type:"dashed",onClick:e.handleAdd},{default:a((()=>[j])),_:1},8,["onClick"])])};export default b;