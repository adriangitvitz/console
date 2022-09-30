(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[6401,2112],{59114:function(e,t,n){"use strict";var a=n(4942),o=n(1413),r=(n(72791),n(63466)),c=n(74900),i=n(27391),s=n(25787),l=n(11135),u=n(23814),d=n(80184);t.Z=(0,s.Z)((function(e){return(0,l.Z)({searchField:(0,o.Z)({},u.qg.searchField),adornment:{}})}))((function(e){var t=e.placeholder,n=void 0===t?"":t,o=e.classes,s=e.onChange,l=e.adornmentPosition,u=void 0===l?"end":l,p=e.overrideClass,m=e.value,v=(0,a.Z)({disableUnderline:!0},"".concat(u,"Adornment"),(0,d.jsx)(r.Z,{position:u,className:o.adornment,children:(0,d.jsx)(c.Z,{})}));return(0,d.jsx)(i.Z,{placeholder:n,className:p||o.searchField,id:"search-resource",label:"",InputProps:v,onChange:function(e){s(e.target.value)},variant:"standard",value:m})}))},54120:function(e,t,n){"use strict";n.r(t);var a=n(29439),o=n(1413),r=n(72791),c=n(26181),i=n.n(c),s=n(61889),l=n(11135),u=n(25787),d=n(23814),p=n(25469),m=n(87995),v=n(81207),h=n(92983),f=n(32112),Z=n(32291),x=n(74794),C=n(59114),b=n(80184);t.default=(0,u.Z)((function(e){return(0,l.Z)((0,o.Z)((0,o.Z)((0,o.Z)({tableWrapper:{height:"calc(100vh - 150px)"}},d.OR),d.qg),(0,d.Bz)(e.spacing(4))))}))((function(e){var t=e.classes,n=(0,p.TL)(),c=(0,r.useState)([]),l=(0,a.Z)(c,2),u=l[0],d=l[1],j=(0,r.useState)(""),g=(0,a.Z)(j,2),k=g[0],y=g[1],P=(0,r.useState)(!0),z=(0,a.Z)(P,2),S=z[0],V=z[1],w=(0,r.useState)(null),I=(0,a.Z)(w,2),M=I[0],F=I[1],H=(0,r.useState)(!1),L=(0,a.Z)(H,2),O=L[0],D=L[1];(0,r.useEffect)((function(){S&&v.Z.invoke("GET","/api/v1/list-pvcs").then((function(e){var t=i()(e,"pvcs",[]);d(t||[]),V(!1)})).catch((function(e){V(!1),n((0,m.Ih)(e))}))}),[S,n]);var E=u.filter((function(e){return e.name.toLowerCase().includes(k.toLowerCase())})),T=[{type:"delete",onClick:function(e){var t=(0,o.Z)((0,o.Z)({},e),{},{tenant:e.tenant,namespace:e.namespace});F(t),D(!0)}}];return(0,b.jsxs)(r.Fragment,{children:[O&&(0,b.jsx)(f.default,{deleteOpen:O,selectedPVC:M,closeDeleteModalAndRefresh:function(e){D(!1),V(!0)}}),(0,b.jsx)(Z.Z,{label:"Persistent Volumes Claims",middleComponent:(0,b.jsx)(C.Z,{placeholder:"Search Volumes (PVCs)",onChange:function(e){y(e)},value:k})}),(0,b.jsx)(x.Z,{children:(0,b.jsx)(s.ZP,{item:!0,xs:12,children:(0,b.jsx)(h.Z,{itemActions:T,columns:[{label:"Name",elementKey:"name"},{label:"Namespace",elementKey:"namespace",width:90},{label:"Status",elementKey:"status",width:120},{label:"Tenant",renderFullObject:!0,renderFunction:function(e){return"".concat(e.namespace,"/").concat(e.tenant)}},{label:"Capacity",elementKey:"capacity",width:90},{label:"Storage Class",elementKey:"storageClass"}],isLoading:S,records:E,entityName:"PVCs",idField:"name",customPaperHeight:t.tableWrapper})})})]})}))},32112:function(e,t,n){"use strict";n.r(t);var a=n(29439),o=n(72791),r=n(51691),c=n(21435),i=n(61889),s=n(9505),l=n(23508),u=n(38734),d=n(87995),p=n(25469),m=n(80184);t.default=function(e){var t=e.deleteOpen,n=e.selectedPVC,v=e.closeDeleteModalAndRefresh,h=(0,p.TL)(),f=(0,o.useState)(""),Z=(0,a.Z)(f,2),x=Z[0],C=Z[1],b=(0,s.Z)((function(){return v(!0)}),(function(e){return h((0,d.Ih)(e))})),j=(0,a.Z)(b,2),g=j[0],k=j[1];return(0,m.jsx)(l.Z,{title:"Delete PVC",confirmText:"Delete",isOpen:t,titleIcon:(0,m.jsx)(u.NvT,{}),isLoading:g,onConfirm:function(){x===n.name?k("DELETE","/api/v1/namespaces/".concat(n.namespace,"/tenants/").concat(n.tenant,"/pvc/").concat(n.name)):h((0,d.Ih)({errorMessage:"PVC name is incorrect",detailedError:""}))},onClose:function(){return v(!1)},confirmButtonProps:{disabled:x!==n.name||g},confirmationContent:(0,m.jsxs)(r.Z,{children:["To continue please type ",(0,m.jsx)("b",{children:n.name})," in the box.",(0,m.jsx)(i.ZP,{item:!0,xs:12,children:(0,m.jsx)(c.Z,{id:"retype-PVC",name:"retype-PVC",onChange:function(e){C(e.target.value)},label:"",value:x})})]})})}},26759:function(e,t,n){"use strict";var a=n(64836);t.Z=void 0;var o=a(n(45649)),r=n(80184),c=(0,o.default)((0,r.jsx)("path",{d:"m7 10 5 5 5-5z"}),"ArrowDropDown");t.Z=c},70366:function(e,t,n){"use strict";var a=n(64836);t.Z=void 0;var o=a(n(45649)),r=n(80184),c=(0,o.default)((0,r.jsx)("path",{d:"m7 14 5-5 5 5z"}),"ArrowDropUp");t.Z=c},97911:function(e,t,n){"use strict";var a=n(64836);t.Z=void 0;var o=a(n(45649)),r=n(80184),c=(0,o.default)((0,r.jsx)("path",{d:"M14.67 5v14H9.33V5h5.34zm1 14H21V5h-5.33v14zm-7.34 0V5H3v14h5.33z"}),"ViewColumn");t.Z=c},94454:function(e,t,n){"use strict";n.d(t,{Z:function(){return z}});var a=n(4942),o=n(63366),r=n(87462),c=n(72791),i=n(94419),s=n(12065),l=n(97278),u=n(76189),d=n(80184),p=(0,u.Z)((0,d.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),m=(0,u.Z)((0,d.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),v=(0,u.Z)((0,d.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),h=n(14036),f=n(31402),Z=n(66934),x=n(21217);function C(e){return(0,x.Z)("MuiCheckbox",e)}var b=(0,n(75878).Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),j=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],g=(0,Z.ZP)(l.Z,{shouldForwardProp:function(e){return(0,Z.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.indeterminate&&t.indeterminate,"default"!==n.color&&t["color".concat((0,h.Z)(n.color))]]}})((function(e){var t,n=e.theme,o=e.ownerState;return(0,r.Z)({color:(n.vars||n).palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:n.vars?"rgba(".concat("default"===o.color?n.vars.palette.action.activeChannel:n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.hoverOpacity,")"):(0,s.Fq)("default"===o.color?n.palette.action.active:n.palette[o.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==o.color&&(t={},(0,a.Z)(t,"&.".concat(b.checked,", &.").concat(b.indeterminate),{color:(n.vars||n).palette[o.color].main}),(0,a.Z)(t,"&.".concat(b.disabled),{color:(n.vars||n).palette.action.disabled}),t))})),k=(0,d.jsx)(m,{}),y=(0,d.jsx)(p,{}),P=(0,d.jsx)(v,{}),z=c.forwardRef((function(e,t){var n,a,s=(0,f.Z)({props:e,name:"MuiCheckbox"}),l=s.checkedIcon,u=void 0===l?k:l,p=s.color,m=void 0===p?"primary":p,v=s.icon,Z=void 0===v?y:v,x=s.indeterminate,b=void 0!==x&&x,z=s.indeterminateIcon,S=void 0===z?P:z,V=s.inputProps,w=s.size,I=void 0===w?"medium":w,M=(0,o.Z)(s,j),F=b?S:Z,H=b?S:u,L=(0,r.Z)({},s,{color:m,indeterminate:b,size:I}),O=function(e){var t=e.classes,n=e.indeterminate,a=e.color,o={root:["root",n&&"indeterminate","color".concat((0,h.Z)(a))]},c=(0,i.Z)(o,C,t);return(0,r.Z)({},t,c)}(L);return(0,d.jsx)(g,(0,r.Z)({type:"checkbox",inputProps:(0,r.Z)({"data-indeterminate":b},V),icon:c.cloneElement(F,{fontSize:null!=(n=F.props.fontSize)?n:I}),checkedIcon:c.cloneElement(H,{fontSize:null!=(a=H.props.fontSize)?a:I}),ownerState:L,ref:t},M,{classes:O}))}))},26769:function(e,t,n){var a=n(39066),o=n(93629),r=n(43141);e.exports=function(e){return"string"==typeof e||!o(e)&&r(e)&&"[object String]"==a(e)}}}]);
//# sourceMappingURL=6401.5c896f2e.chunk.js.map