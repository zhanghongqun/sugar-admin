(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-097622f4"],{"1aba":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"material-input__component",class:e.computedClasses},[a("div",{class:{iconClass:e.icon}},[e.icon?a("i",{staticClass:"el-input__icon material-input__icon",class:["el-icon-"+e.icon]}):e._e(),e._v(" "),"email"===e.type?a("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],staticClass:"material-input",attrs:{type:"email",name:e.name,placeholder:e.fillPlaceHolder,readonly:e.readonly,disabled:e.disabled,autoComplete:e.autoComplete,required:e.required},domProps:{value:e.currentValue},on:{focus:e.handleMdFocus,blur:e.handleMdBlur,input:[function(t){t.target.composing||(e.currentValue=t.target.value)},e.handleModelInput]}}):e._e(),e._v(" "),"url"===e.type?a("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],staticClass:"material-input",attrs:{type:"url",name:e.name,placeholder:e.fillPlaceHolder,readonly:e.readonly,disabled:e.disabled,autoComplete:e.autoComplete,required:e.required},domProps:{value:e.currentValue},on:{focus:e.handleMdFocus,blur:e.handleMdBlur,input:[function(t){t.target.composing||(e.currentValue=t.target.value)},e.handleModelInput]}}):e._e(),e._v(" "),"number"===e.type?a("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],staticClass:"material-input",attrs:{type:"number",name:e.name,placeholder:e.fillPlaceHolder,step:e.step,readonly:e.readonly,disabled:e.disabled,autoComplete:e.autoComplete,max:e.max,min:e.min,minlength:e.minlength,maxlength:e.maxlength,required:e.required},domProps:{value:e.currentValue},on:{focus:e.handleMdFocus,blur:e.handleMdBlur,input:[function(t){t.target.composing||(e.currentValue=t.target.value)},e.handleModelInput]}}):e._e(),e._v(" "),"password"===e.type?a("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],staticClass:"material-input",attrs:{type:"password",name:e.name,placeholder:e.fillPlaceHolder,readonly:e.readonly,disabled:e.disabled,autoComplete:e.autoComplete,max:e.max,min:e.min,required:e.required},domProps:{value:e.currentValue},on:{focus:e.handleMdFocus,blur:e.handleMdBlur,input:[function(t){t.target.composing||(e.currentValue=t.target.value)},e.handleModelInput]}}):e._e(),e._v(" "),"tel"===e.type?a("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],staticClass:"material-input",attrs:{type:"tel",name:e.name,placeholder:e.fillPlaceHolder,readonly:e.readonly,disabled:e.disabled,autoComplete:e.autoComplete,required:e.required},domProps:{value:e.currentValue},on:{focus:e.handleMdFocus,blur:e.handleMdBlur,input:[function(t){t.target.composing||(e.currentValue=t.target.value)},e.handleModelInput]}}):e._e(),e._v(" "),"text"===e.type?a("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],staticClass:"material-input",attrs:{type:"text",name:e.name,placeholder:e.fillPlaceHolder,readonly:e.readonly,disabled:e.disabled,autoComplete:e.autoComplete,minlength:e.minlength,maxlength:e.maxlength,required:e.required},domProps:{value:e.currentValue},on:{focus:e.handleMdFocus,blur:e.handleMdBlur,input:[function(t){t.target.composing||(e.currentValue=t.target.value)},e.handleModelInput]}}):e._e(),e._v(" "),a("span",{staticClass:"material-input-bar"}),e._v(" "),a("label",{staticClass:"material-label"},[e._t("default")],2)])])},i=[],n=(a("c5f6"),{name:"md-input",props:{icon:String,name:String,type:{type:String,default:"text"},value:[String,Number],placeholder:String,readonly:Boolean,disabled:Boolean,min:String,max:String,step:String,minlength:Number,maxlength:Number,required:{type:Boolean,default:!0},autoComplete:{type:String,default:"off"},validateEvent:{type:Boolean,default:!0}},computed:{computedClasses:function(){return{"material--active":this.focus,"material--disabled":this.disabled,"material--raised":Boolean(this.focus||this.currentValue)}}},watch:{value:function(e){this.currentValue=e}},data:function(){return{currentValue:this.value,focus:!1,fillPlaceHolder:null}},methods:{handleModelInput:function(e){var t=e.target.value;this.$emit("input",t),"ElFormItem"===this.$parent.$options.componentName&&this.validateEvent&&this.$parent.$emit("el.form.change",[t]),this.$emit("change",t)},handleMdFocus:function(e){this.focus=!0,this.$emit("focus",e),this.placeholder&&""!==this.placeholder&&(this.fillPlaceHolder=this.placeholder)},handleMdBlur:function(e){this.focus=!1,this.$emit("blur",e),this.fillPlaceHolder=null,"ElFormItem"===this.$parent.$options.componentName&&this.validateEvent&&this.$parent.$emit("el.form.blur",[this.currentValue])}}}),s=n,o=(a("cf8b"),a("2877")),l=Object(o["a"])(s,r,i,!1,null,"3cb85bd2",null);t["a"]=l.exports},"4f59":function(e,t,a){"use strict";var r=a("8979"),i=a.n(r);i.a},"5dbc":function(e,t,a){var r=a("d3f4"),i=a("8b97").set;e.exports=function(e,t,a){var n,s=t.constructor;return s!==a&&"function"==typeof s&&(n=s.prototype)!==a.prototype&&r(n)&&i&&i(e,n),e}},8979:function(e,t,a){},"8b97":function(e,t,a){var r=a("d3f4"),i=a("cb7c"),n=function(e,t){if(i(e),!r(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,r){try{r=a("9b43")(Function.call,a("11e9").f(Object.prototype,"__proto__").set,2),r(e,[]),t=!(e instanceof Array)}catch(i){t=!0}return function(e,a){return n(e,a),t?e.__proto__=a:r(e,a),e}}({},!1):void 0),check:n}},"96ba":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"createPost-container"},[a("el-form",{ref:"postTask",staticClass:"form-container",attrs:{size:"medium","label-position":"top",model:e.postTask,rules:e.rules}},[a("sticky",{attrs:{className:"sub-navbar "+e.postTask.status}},[e.fetchSuccess?[a("el-button",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{"margin-left":"10px"},attrs:{type:"success"},on:{click:function(t){return e.submitForm()}}},[e._v("发布")])]:[a("el-tag",[e._v("发送异常错误,刷新页面,或者联系程序员")])]],2),e._v(" "),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"createPost-main-container"},[a("el-form-item",{attrs:{label:"标题:"}},[a("el-input",{staticClass:"article-textarea",attrs:{type:"textarea",rows:3,autosize:"",placeholder:"请输入标题"},model:{value:e.postTask.name,callback:function(t){e.$set(e.postTask,"name",t)},expression:"postTask.name"}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.contentShortLength,expression:"contentShortLength"}],staticClass:"word-counter"},[e._v(e._s(e.contentShortLength)+"字")])],1),e._v(" "),a("el-form-item",{attrs:{label:"发布时间:"}},[a("el-date-picker",{attrs:{type:"datetime",format:"yyyy-MM-dd HH:mm:ss",placeholder:"选择日期时间"},model:{value:e.postTask.start,callback:function(t){e.$set(e.postTask,"start",t)},expression:"postTask.start"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"关键字:"}},[a("el-input",{attrs:{placeholder:"商场搜索词"},model:{value:e.postTask.searchKeyword,callback:function(t){e.$set(e.postTask,"searchKeyword",t)},expression:"postTask.searchKeyword"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"描述:"}},[a("el-input",{staticClass:"article-textarea",attrs:{type:"textarea",rows:3,autosize:"",placeholder:"请输入内容"},model:{value:e.postTask.description,callback:function(t){e.$set(e.postTask,"description",t)},expression:"postTask.description"}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.contentShortLength,expression:"contentShortLength"}],staticClass:"word-counter"},[e._v(e._s(e.contentShortLength)+"字")])],1),e._v(" "),a("el-form-item",{attrs:{label:"奖励:"}},[a("el-input",{staticClass:"article-textarea",attrs:{type:"textarea",rows:"3",autosize:"",placeholder:"请输入内容"},model:{value:e.postTask.reward,callback:function(t){e.$set(e.postTask,"reward",t)},expression:"postTask.reward"}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.contentShortLength,expression:"contentShortLength"}],staticClass:"word-counter"},[e._v(e._s(e.contentShortLength)+"字")])],1),e._v(" "),a("div",{staticStyle:{"margin-bottom":"20px"}},[a("label",{staticClass:"el-form-item__label"},[e._v("列表图片:")]),e._v(" "),a("el-upload",{attrs:{headers:e.headers,action:"/sugar/api/file",limit:1,"list-type":"picture-card","on-preview":e.handleIntroducePictureCardPreview,"on-success":e.handleIntroducePictureSuccess,"file-list":e.orderPics}})],1),e._v(" "),a("div",{staticStyle:{"margin-bottom":"20px"}},[a("label",{staticClass:"el-form-item__label"},[e._v("商品图片:")]),e._v(" "),a("el-upload",{attrs:{headers:e.headers,action:"/sugar/api/file",limit:1,"list-type":"picture-card","on-preview":e.handleProductPictureCardPreview,"on-success":e.handleProductPictureSuccess,"file-list":e.productPics}})],1),e._v(" "),a("div",{staticStyle:{"margin-bottom":"20px"}},[a("label",{staticClass:"el-form-item__label"},[e._v("订单图片:")]),e._v(" "),a("el-upload",{attrs:{headers:e.headers,action:"/sugar/api/file",limit:1,"list-type":"picture-card","on-preview":e.handleOrderPictureCardPreview,"on-success":e.handleOrderPictureSuccess,"file-list":e.orderPics}})],1)],1)])],1)],1)},i=[],n=a("bd86"),s=a("1aba"),o=a("b804"),l=a("b199"),c=a("5f87"),u={status:"",name:"",description:"",reward:"",searchKeyword:"",productPic:"",orderPic:"",introducePic:"",displayTime:void 0,id:void 0,platforms:["a-platform"],comment_disabled:!1},d={name:"taskDetail",components:{Sticky:o["a"],MDinput:s["a"]},props:{isEdit:{type:Boolean,default:!1}},data:function(){var e=this,t=function(t,a,r){""===a?(e.$message({message:t.field+"为必传项",type:"error"}),r(null)):r()},a=function(t,a,r){a?validateURL(a)?r():(e.$message({message:"外链url填写不正确",type:"error"}),r(null)):r()};return{productPics:[],orderPics:[],introducePics:[],headers:{Authorization:"Bearer "+Object(c["a"])()},postTask:Object.assign({},u),fetchSuccess:!0,loading:!1,limit:1,rules:Object(n["a"])({pictureUrl:[{validator:t}],name:[{validator:t}],description:[{validator:t}]},"pictureUrl",[{validator:a,trigger:"blur"}])}},computed:{contentShortLength:function(){return this.postTask.description.length}},created:function(){this.isEdit?this.fetchData():this.postTask=Object.assign({},u)},methods:{handleIntroducePictureCardPreview:function(e){},handleIntroducePictureSuccess:function(e,t,a){this.postTask.introducePic=e},handleProductPictureCardPreview:function(e){},handleProductPictureSuccess:function(e,t,a){this.postTask.productPic=e},handleOrderPictureCardPreview:function(e){},handleOrderPictureSuccess:function(e,t,a){this.postTask.orderPic=e},fetchData:function(){var e=this,t=this.$route.params.taskId;Object(l["c"])(t).then((function(t){e.productPics.push({url:t.productPic}),e.orderPics.push({url:t.orderPic}),e.introducePics.push({url:t.introducePics}),e.postTask=t})).catch((function(t){e.fetchSuccess=!1}))},submitForm:function(){var e=this;this.postTask.start=parseInt(this.postTask.start.getTime()),Object(l["a"])(this.postTask).then((function(t){e.$router.push({name:"tasklist"})}))}}},p=d,h=(a("4f59"),a("2877")),m=Object(h["a"])(p,r,i,!1,null,"018107b3",null);t["a"]=m.exports},a071:function(e,t,a){},aa77:function(e,t,a){var r=a("5ca1"),i=a("be13"),n=a("79e5"),s=a("fdef"),o="["+s+"]",l="​",c=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),d=function(e,t,a){var i={},o=n((function(){return!!s[e]()||l[e]()!=l})),c=i[e]=o?t(p):s[e];a&&(i[a]=c),r(r.P+r.F*o,"String",i)},p=d.trim=function(e,t){return e=String(i(e)),1&t&&(e=e.replace(c,"")),2&t&&(e=e.replace(u,"")),e};e.exports=d},b199:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return s}));var r=a("b775");function i(e){return Object(r["a"])({url:"/task/list",method:"get",params:e})}function n(e){return console.log(e),Object(r["a"])({url:"/task/"+e,method:"get",params:{}})}function s(e){return Object(r["a"])({url:"/task",method:"post",data:e})}},b804:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{style:{height:e.height+"px",zIndex:e.zIndex}},[a("div",{class:e.className,style:{top:e.stickyTop+"px",zIndex:e.zIndex,position:e.position,width:e.width,height:e.height+"px"}},[e._t("default",[a("div",[e._v("sticky")])])],2)])},i=[],n=(a("c5f6"),{name:"Sticky",props:{stickyTop:{type:Number,default:0},zIndex:{type:Number,default:1},className:{type:String}},data:function(){return{active:!1,position:"",currentTop:"",width:void 0,height:void 0,child:null,stickyHeight:0}},mounted:function(){this.height=this.$el.getBoundingClientRect().height,window.addEventListener("scroll",this.handleScroll)},activated:function(){this.handleScroll()},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{sticky:function(){this.active||(this.position="fixed",this.active=!0,this.width=this.width+"px")},reset:function(){this.active&&(this.position="",this.width="auto",this.active=!1)},handleScroll:function(){this.width=this.$el.getBoundingClientRect().width;var e=this.$el.getBoundingClientRect().top;e<=this.stickyTop?this.sticky():this.reset()}}}),s=n,o=a("2877"),l=Object(o["a"])(s,r,i,!1,null,null,null);t["a"]=l.exports},c5f6:function(e,t,a){"use strict";var r=a("7726"),i=a("69a8"),n=a("2d95"),s=a("5dbc"),o=a("6a99"),l=a("79e5"),c=a("9093").f,u=a("11e9").f,d=a("86cc").f,p=a("aa77").trim,h="Number",m=r[h],f=m,v=m.prototype,b=n(a("2aeb")(v))==h,g="trim"in String.prototype,y=function(e){var t=o(e,!1);if("string"==typeof t&&t.length>2){t=g?t.trim():p(t,3);var a,r,i,n=t.charCodeAt(0);if(43===n||45===n){if(a=t.charCodeAt(2),88===a||120===a)return NaN}else if(48===n){switch(t.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+t}for(var s,l=t.slice(2),c=0,u=l.length;c<u;c++)if(s=l.charCodeAt(c),s<48||s>i)return NaN;return parseInt(l,r)}}return+t};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof m&&(b?l((function(){v.valueOf.call(a)})):n(a)!=h)?s(new f(y(t)),a,m):y(t)};for(var _,w=a("9e1e")?c(f):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),P=0;w.length>P;P++)i(f,_=w[P])&&!i(m,_)&&d(m,_,u(f,_));m.prototype=v,v.constructor=m,a("2aba")(r,h,m)}},cf8b:function(e,t,a){"use strict";var r=a("a071"),i=a.n(r);i.a},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);