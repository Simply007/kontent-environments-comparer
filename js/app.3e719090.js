(function(e){function t(t){for(var a,r,i=t[0],c=t[1],l=t[2],p=0,m=[];p<i.length;p++)r=i[p],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&m.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(m.length)m.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(a=!1)}a&&(s.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},o={app:0},s=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/kontent-environments-comparer/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},9224:function(e){e.exports=JSON.parse('{"a":"0.4.0"}')},"9b19":function(e,t,n){e.exports=n.p+"img/logo.ef1b24ce.svg"},cd49:function(e,t,n){"use strict";n.r(t);var a=n("2b0e"),o=n("7496"),s=n("40dc"),r=n("8336"),i=n("132d"),c=n("adda"),l=n("f6c4"),d=n("2fa4"),p=n("2a7f"),m=function(){var e=this,t=e._self._c;e._self._setupProxy;return t(o["a"],[t(s["a"],{attrs:{app:"",color:"secondary",dark:""}},[t("div",{staticClass:"d-flex align-center"},[t(c["a"],{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:n("9b19"),transition:"scale-transition",width:"40"}})],1),t(p["a"],[e._v("Kontent"),t("span",{staticStyle:{color:"#3dcca8"}},[e._v(".")]),e._v("ai Environments Comparer (v"+e._s(e.version)+")")]),t(d["a"]),t(r["a"],{attrs:{href:"https://github.com/Simply007/kontent-environments-comparer",target:"_blank",text:""}},[t("span",{staticClass:"mr-2"},[e._v("Source code")]),t(i["a"],[e._v("mdi-open-in-new")])],1)],1),t(l["a"],[t("Home")],1)],1)},u=[],f=n("a523"),g=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"home"},[t(f["a"],[t("Comparer")],1)],1)},h=[],y=n("9ab4"),v=n("1b40"),b=n("e4e5"),w=n("ac7c"),T=n("62ad"),j=n("da13"),x=n("8e36"),I=n("0fd9"),_=n("71a3"),O=n("c671"),S=n("fe57"),E=n("9a96"),C=n("8654"),M=function(){var e=this,t=e._self._c;return t("div",{staticClass:"comparer"},[t(f["a"],[e.message?t(b["a"],{scopedSlots:e._u([{key:"actions",fn:function(){return[t(r["a"],{attrs:{color:"primary",text:""},on:{click:e.closeBanner}},[e._v(" Close ")])]},proxy:!0}],null,!1,1749201699)},[t(i["a"],{attrs:{slot:"icon",color:"warning",size:"36"},slot:"icon"},[e._v(" mdi-alert-circle-outline ")]),e._v(" "+e._s(e.message)+" ")],1):e._e(),t(I["a"],{attrs:{align:"center",justify:"center","align-items":"center"}},[t(T["a"],{attrs:{cols:"12",md:"5"}},[t("v-box",[t(C["a"],{attrs:{filled:"",clearable:"",label:"Source environment ID","append-icon":e.sourceEnvironmentIdKey?"mdi-eye":"mdi-eye-off",type:e.sourceEnvironmentIdKey?"text":"password"},on:{"click:append":function(t){e.sourceEnvironmentIdKey=!e.sourceEnvironmentIdKey}},model:{value:e.sourceEnvironmentId,callback:function(t){e.sourceEnvironmentId=t},expression:"sourceEnvironmentId"}}),t(C["a"],{attrs:{filled:"",clearable:"",label:"Source management API Key","append-icon":e.showSourceManagementKey?"mdi-eye":"mdi-eye-off",type:e.showSourceManagementKey?"text":"password"},on:{"click:append":function(t){e.showSourceManagementKey=!e.showSourceManagementKey}},model:{value:e.sourceEnvironmentManagementId,callback:function(t){e.sourceEnvironmentManagementId=t},expression:"sourceEnvironmentManagementId"}})],1)],1),t(T["a"],{staticStyle:{"text-align":"center"},attrs:{cols:"12",md:"2"}},[t("v-box",[t(j["a"],[t(w["a"],{staticStyle:{margin:"auto"},attrs:{label:"QA"},model:{value:e.qa,callback:function(t){e.qa=t},expression:"qa"}})],1),t(j["a"],[t(r["a"],{staticStyle:{margin:"auto"},on:{click:e.compare}},[e._v("Compare")])],1)],1)],1),t(T["a"],{attrs:{cols:"12",md:"5"}},[t("v-box",[t(C["a"],{attrs:{filled:"",clearable:"",label:"Target environment ID","append-icon":e.targetEnvironmentIdKey?"mdi-eye":"mdi-eye-off",type:e.targetEnvironmentIdKey?"text":"password"},on:{"click:append":function(t){e.targetEnvironmentIdKey=!e.targetEnvironmentIdKey}},model:{value:e.targetEnvironmentId,callback:function(t){e.targetEnvironmentId=t},expression:"targetEnvironmentId"}}),t(C["a"],{attrs:{filled:"",clearable:"",label:"Target management API Key","append-icon":e.showTargetManagementKey?"mdi-eye":"mdi-eye-off",type:e.showTargetManagementKey?"text":"password"},on:{"click:append":function(t){e.showTargetManagementKey=!e.showTargetManagementKey}},model:{value:e.targetEnvironmentManagementId,callback:function(t){e.targetEnvironmentManagementId=t},expression:"targetEnvironmentManagementId"}})],1)],1)],1),e.loading?t(x["a"],{attrs:{indeterminate:""}}):e._e()],1),e.displayTabs?t(S["a"],{attrs:{centered:""}},[t(E["a"]),e.displayTypesTab?t(_["a"],[e._v(" Content types ")]):e._e(),e.displayTypesTab?t(O["a"],[t("Diff",{attrs:{sourceObjects:e.sourceTypes,targetObjects:e.targetTypes,objectIdentificationCodename:"codename"}})],1):e._e(),e.displaySnippetsTab?t(_["a"],[e._v(" Content type snippets ")]):e._e(),e.displaySnippetsTab?t(O["a"],[t("Diff",{attrs:{sourceObjects:e.sourceSnippets,targetObjects:e.targetSnippets,objectIdentificationCodename:"codename"}})],1):e._e(),e.displayTaxonomiesTab?t(_["a"],[e._v(" Content taxonomies ")]):e._e(),e.displayTaxonomiesTab?t(O["a"],[t("Diff",{attrs:{sourceObjects:e.sourceTaxonomies,targetObjects:e.targetTaxonomies,objectIdentificationCodename:"codename"}})],1):e._e()],1):e._e()],1)},k=[],K=n("5cda"),P=function(){var e=this,t=e._self._c;return t("div",[t("div",{domProps:{innerHTML:e._s(e.diffResult)}})])},A=[],D=(n("14d9"),n("bf68")),N=n("ae7d"),q=(n("ef6b"),{name:"Diff",props:{sourceObjects:Array,targetObjects:Array,objectIdentificationCodename:String},computed:{diffResult:function(){if(0===this.sourceObjects.length&&0===this.targetObjects.length)return"N/A";const e=[];this.sourceObjects.forEach(t=>{const n=this.targetObjects.find(e=>e[this.objectIdentificationCodename]===t[this.objectIdentificationCodename])||void 0,a=Object(D["createTwoFilesPatch"])(t[this.objectIdentificationCodename],t[this.objectIdentificationCodename],JSON.stringify(t,void 0,2),n?JSON.stringify(n,void 0,2):"");e.push(...Object(N["b"])(a))});const t=this.sourceObjects.map(e=>e[this.objectIdentificationCodename]),n=this.targetObjects.filter(e=>!t.includes(e[this.objectIdentificationCodename]));n.forEach(t=>{const n=Object(D["createTwoFilesPatch"])(t[this.objectIdentificationCodename],t[this.objectIdentificationCodename],"",JSON.stringify(t,void 0,2));e.push(...Object(N["b"])(n))});const a=Object(N["a"])(e.sort((e,t)=>e.oldName>t.oldName?1:-1),{drawFileList:!0,matching:"lines",outputFormat:"side-by-side"});return a}}}),F=q,J=n("2877"),H=Object(J["a"])(F,P,A,!1,null,"21f79717",null),B=H.exports;n("1232");var L={name:"Comparer",components:{Diff:B},data(){return{showSourceManagementKey:!1,showTargetManagementKey:!1,sourceEnvironmentIdKey:!1,targetEnvironmentIdKey:!1,sourceEnvironmentManagementId:"",targetEnvironmentManagementId:"",sourceEnvironmentId:"",targetEnvironmentId:"",sourceTypes:[],targetTypes:[],sourceSnippets:[],targetSnippets:[],sourceTaxonomies:[],targetTaxonomies:[],loading:!1,message:"",qa:!1}},computed:{displayTabs:function(){return(this.displayTypesTab||this.displaySnippetsTab||this.displayTaxonomiesTab)&&!1===this.loading},displayTypesTab:function(){return this.sourceTypes.length>0||this.targetTypes.length>0},displaySnippetsTab:function(){return this.sourceSnippets.length>0||this.targetSnippets.length>0},displayTaxonomiesTab:function(){return this.sourceTaxonomies.length>0||this.targetTaxonomies.length>0}},methods:{closeBanner(){this.message=""},showMessage(e){this.message=e},async compare(){this.loading=!0;try{const e=new K["ManagementClient"]({projectId:this.sourceEnvironmentId,apiKey:this.sourceEnvironmentManagementId,baseUrl:this.qa?"https://manage.devkontentmasters.com/v2/projects":void 0}),t=new K["ManagementClient"]({projectId:this.targetEnvironmentId,apiKey:this.targetEnvironmentManagementId,baseUrl:this.qa?"https://manage.devkontentmasters.com/v2/projects":void 0});this.sourceTypes=await e.listContentTypes().toAllPromise().then(e=>[...e.responses.flatMap(e=>e.rawData.types)]),this.targetTypes=await t.listContentTypes().toAllPromise().then(e=>[...e.responses.flatMap(e=>e.rawData.types)]),this.sourceSnippets=await e.listContentTypeSnippets().toAllPromise().then(e=>[...e.responses.flatMap(e=>e.rawData.snippets)]),this.targetSnippets=await t.listContentTypeSnippets().toAllPromise().then(e=>[...e.responses.flatMap(e=>e.rawData.snippets)]),this.sourceTaxonomies=await e.listTaxonomies().toPromise().then(e=>e.rawData.taxonomies),this.targetTaxonomies=await t.listTaxonomies().toPromise().then(e=>e.rawData.taxonomies),this.loading=!1}catch(e){throw this.message="Error in loading data. Check console for detailed error.",this.loading=!1,console.error(e.message),e}}}},U=L,R=Object(J["a"])(U,M,k,!1,null,"b0c7cd04",null),z=R.exports;let Q=class extends v["b"]{};Q=Object(y["a"])([Object(v["a"])({components:{Comparer:z}})],Q);var V=Q,$=V,G=Object(J["a"])($,g,h,!1,null,null,null),W=G.exports,X=n("9224"),Y=a["a"].extend({name:"App",components:{Home:W},data:()=>({version:X["a"]})}),Z=Y,ee=Object(J["a"])(Z,m,u,!1,null,null,null),te=ee.exports,ne=n("9483");Object(ne["a"])("/kontent-environments-comparer/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var ae=n("8c4f");a["a"].use(ae["a"]);const oe=[{path:"/",name:"Home",component:W}],se=new ae["a"]({routes:oe});var re=se,ie=n("2f62");a["a"].use(ie["a"]);var ce=new ie["a"].Store({state:{},mutations:{},actions:{},modules:{}}),le=n("f309");a["a"].use(le["a"]);var de=new le["a"]({}),pe=n("0284"),me=n.n(pe);a["a"].config.productionTip=!1,a["a"].use(me.a,{id:"UA-128307780-5",router:re}),new a["a"]({router:re,store:ce,vuetify:de,render:e=>e(te)}).$mount("#app")}});
//# sourceMappingURL=app.3e719090.js.map