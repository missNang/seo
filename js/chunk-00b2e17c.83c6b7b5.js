(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-00b2e17c"],{"1d5a":function(e,t,l){},"2e3c":function(e,t,l){"use strict";l("1d5a")},3303:function(e,t,l){"use strict";l.r(t);var r=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"content-right"},[l("div",{staticClass:"menu-btn"},[l("span",{class:0==e.active?"active":"",on:{click:function(t){return e.toactive(0)}}},[e._v("账号授权")]),l("span",{class:1==e.active?"active":"",on:{click:function(t){return e.toactive(1)}}},[e._v("诚信认证")])]),l("div",{directives:[{name:"show",rawName:"v-show",value:0==e.active,expression:"active==0"}],staticClass:"empower"},[l("div",{staticClass:"account_box flexrow"},[l("div",{staticClass:"dy_box all-bg",staticStyle:{width:"25%",flex:"initial"}},[l("div",{staticClass:"flexhead flexrow"},[l("div",{staticClass:"platform_box flexrow"},[l("span",[l("img",{staticClass:"boderimg",attrs:{src:e.mainainfo.avatar,width:"30px"}})]),l("span",{staticClass:"platform_title"},[e._v("抖音")])]),1==e.mainainfo.open_status?l("div",{staticClass:"right-er redColor"},[e._v("已授权")]):2==e.mainainfo.open_status?l("div",{staticClass:"right-er redColor"},[e._v("已失效")]):3==e.mainainfo.open_status?l("div",{staticClass:"right-er redColor"},[e._v("取消")]):e._e()]),l("div",{staticClass:"flexcolumn item-list"},[l("div",{staticClass:"el-img"},[l("img",{attrs:{src:e.mainainfo.avatar}})]),l("span",[e._v(e._s(e.mainainfo.nickname)+"（"+e._s(e.mainainfo.account_role)+"）")])]),l("div",{staticClass:"empower-last"},[l("div",{staticClass:"flexrow"},[l("span",{staticStyle:{cursor:"pointer"}},[e._v("重新授权抖音")]),l("span",{staticStyle:{cursor:"pointer"},on:{click:e.setUrl}},[e._v("设置主页短链接 ")])]),l("el-dialog",{attrs:{title:"设置主页短链接",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[l("el-form",{ref:"urlFrom",staticClass:"demo-ruleForm",attrs:{model:e.urlFrom,"label-width":"100px"}},[l("el-form-item",{attrs:{label:"短链接",prop:"name",rules:[{required:!0,message:"请输入短链接地址",trigger:"blur"}]}},[l("el-input",{model:{value:e.urlFrom.name,callback:function(t){e.$set(e.urlFrom,"name",t)},expression:"urlFrom.name"}})],1),l("el-form-item",[l("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),l("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.getshorturl("urlFrom")}}},[e._v("确 定")])],1)],1)],1)],1),l("div",{staticClass:"tips"},[e._v(" 距离重新授权抖音还剩"),l("span",[e._v(e._s(e.mainainfo.auth_days))]),e._v("天 ")])])])]),l("div",{directives:[{name:"show",rawName:"v-show",value:1==e.active,expression:"active==1"}],staticClass:"empower all-bg"},[l("el-form",{ref:"form",staticStyle:{padding:"16px"},attrs:{model:e.form,rules:e.rules,"label-width":"140px"}},[l("el-form-item",{attrs:{label:"公司名称",prop:"name"}},[l("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),l("el-form-item",{attrs:{label:"公司网站地址",prop:"url"}},[l("el-input",{model:{value:e.form.url,callback:function(t){e.$set(e.form,"url",t)},expression:"form.url"}})],1),l("el-form-item",{attrs:{label:"营业执照注册号",prop:"reg_number"}},[l("el-input",{model:{value:e.form.reg_number,callback:function(t){e.$set(e.form,"reg_number",e._n(t))},expression:"form.reg_number"}})],1),l("el-form-item",{attrs:{label:"营业执照注册地址",prop:"reg_address"}},[l("el-input",{model:{value:e.form.reg_address,callback:function(t){e.$set(e.form,"reg_address",t)},expression:"form.reg_address"}})],1),l("el-form-item",{attrs:{label:"法人姓名",prop:"legal"}},[l("el-input",{model:{value:e.form.legal,callback:function(t){e.$set(e.form,"legal",t)},expression:"form.legal"}})],1),l("el-form-item",{attrs:{label:"注册资本（万元）",prop:"reg_money"}},[l("el-input",{model:{value:e.form.reg_money,callback:function(t){e.$set(e.form,"reg_money",e._n(t))},expression:"form.reg_money"}})],1),l("el-form-item",{attrs:{label:"公司类型",prop:"company_type"}},[l("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.company_type,callback:function(t){e.$set(e.form,"company_type",t)},expression:"form.company_type"}},e._l(e.options,(function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),l("el-form-item",{attrs:{label:"公司注册时间",prop:"reg_times"}},[l("el-input",{model:{value:e.form.reg_times,callback:function(t){e.$set(e.form,"reg_times",e._n(t))},expression:"form.reg_times"}})],1),l("el-form-item",{attrs:{label:"公司营业期限",prop:"oper_times"}},[l("el-input",{model:{value:e.form.oper_times,callback:function(t){e.$set(e.form,"oper_times",t)},expression:"form.oper_times"}})],1),l("el-form-item",{attrs:{label:"业务负责人姓名",prop:"apply_name"}},[l("el-input",{model:{value:e.form.apply_name,callback:function(t){e.$set(e.form,"apply_name",t)},expression:"form.apply_name"}})],1),l("el-form-item",{attrs:{label:"业务负责人职位",prop:"position"}},[l("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.position,callback:function(t){e.$set(e.form,"position",t)},expression:"form.position"}},e._l(e.options1,(function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),l("el-form-item",{attrs:{label:"业务负责人手机号",prop:"phone"}},[l("el-input",{model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",e._n(t))},expression:"form.phone"}})],1),l("el-form-item",{attrs:{label:"营业执照图片",prop:"license_img"}},[l("el-input",{model:{value:e.form.license_img,callback:function(t){e.$set(e.form,"license_img",t)},expression:"form.license_img"}}),l("el-upload",{staticClass:"upload-demo",attrs:{action:"/client/user/upload_img","on-success":e.handlePreview,"on-remove":e.handleRemove,multiple:"",limit:1,"file-list":e.fileList}},[l("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")])],1)],1),l("el-form-item",[l("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.onSubmit("form")}}},[e._v("确定")]),l("el-button",[e._v("取消")])],1)],1)],1),e._m(0)])},a=[function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("footer",{staticClass:"footer all-bg"},[e._v(" Copyright "),e._v(" 抖来查SEO 2022")])}],i={data:function(){return{active:0,form:{name:"",url:"",reg_number:"",reg_address:"",legal:"",reg_money:"",company_type:"",reg_times:"",oper_times:"",apply_name:"",position:"",phone:"",license_img:""},mainainfo:{},options:[{value:"0",label:"未选择"},{value:"1",label:"私营企业"},{value:"2",label:"国有企业"},{value:"3",label:"个体经营户"},{value:"4",label:"政府机构"},{value:"5",label:"外资企业"},{value:"6",label:"中外合资企"}],options1:[{value:"1",label:"CEO"},{value:"2",label:"总经理"},{value:"3",label:"总监"},{value:"4",label:"主管"},{value:"5",label:"运营"},{value:"6",label:"员工"},{value:"7",label:"财务"},{value:"8",label:"其他"}],value:"",value1:"",fileList:[],rules:{name:[{required:!0,message:"请输入",trigger:"blur"}],url:[{required:!0,message:"请输入",trigger:"blur"}],reg_number:[{required:!0,message:"请输入",trigger:"blur"}],reg_address:[{required:!0,message:"请输入",trigger:"blur"}],legal:[{required:!0,message:"请输入",trigger:"blur"}],reg_money:[{required:!0,message:"请输入",trigger:"blur"}],company_type:[{required:!0,message:"请输入",trigger:"blur"}],reg_times:[{required:!0,message:"请输入",trigger:"blur"}],oper_times:[{required:!0,message:"请输入",trigger:"blur"}],apply_name:[{required:!0,message:"请输入",trigger:"blur"}],position:[{required:!0,message:"请输入",trigger:"blur"}],phone:[{required:!0,message:"请输入",trigger:"blur"}],license_img:[{required:!0,message:"请输入",trigger:"blur"}]},rulesa:{url:[{required:!0,message:"请输入",trigger:"blur"}]},dialogFormVisible:!1,urlFrom:{url:""}}},mounted:function(){this.getmainai()},methods:{handleRemove:function(e,t){console.log(e,t)},handlePreview:function(e){console.log(e),this.form.license_img=e.url},toactive:function(e){this.active=e},onSubmit:function(e){var t=this;this.$refs[e].validate((function(e){e&&t.$api.post("/client/user/update_information",t.form).then((function(e){1==e.result&&alert("操作成功")}))}))},getmainai:function(){var e=this;this.$api.get("/client/user/main_account_info").then((function(t){e.mainainfo=t.data}))},getdouyin:function(){var e=1;this.$api.get("/client/user/get_douyin_auth?state="+e).then((function(e){console.log(e)}))},setUrl:function(){this.dialogFormVisible=!0},getshorturl:function(e){var t=this;this.$refs[e].validate((function(e){e&&t.$api.post("/client/user/set_short_url",{open_id:t.mainainfo.open_id,url:t.urlFrom.url}).then((function(e){t.dialogFormVisible=!1}))}))}}},o=i,s=(l("2e3c"),l("2877")),n=Object(s["a"])(o,r,a,!1,null,"9f6fbe38",null);t["default"]=n.exports}}]);