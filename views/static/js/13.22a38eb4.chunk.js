(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[13],{621:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),l=n(532),r=n(528),i=n.n(r),s=n(529),o=n(527),d=["512 512","<polygon fill='var(--ci-primary-color, currentColor)' points='440 240 272 240 272 72 240 72 240 240 72 240 72 272 240 272 240 440 272 440 272 272 440 272 440 240' class='ci-primary'/>"],u=n(523),j=n(522),v=n(601),b=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M23.686,456.521a24.841,24.841,0,0,0,6,25.708l.087.087a24.841,24.841,0,0,0,17.612,7.342,25.179,25.179,0,0,0,8.1-1.344h0a646.28,646.28,0,0,0,248.04-154.207L469.981,167.646A88.832,88.832,0,1,0,344.354,42.019l-9.534,9.534L314.029,30.762a50.4,50.4,0,0,0-71.274,0L108.687,164.83l22.626,22.627L265.382,53.389a18.4,18.4,0,0,1,26.019,0L312.193,74.18l-134.3,134.3A646.28,646.28,0,0,0,23.686,456.521Zm343.3-391.875a56.832,56.832,0,1,1,80.373,80.373l-89.493,89.493-80.372-80.373ZM254.862,176.766l80.372,80.372L280.892,311.48A614.383,614.383,0,0,1,58.779,453.221,614.383,614.383,0,0,1,200.52,231.108Z' class='ci-primary'/>"],h=n(525),m=n(526),x=n.n(m),O=n(53),f=n(156),p=n(22),g=function(e){var t,n=e.visible,r=e.setVisible,v=e.filter,b=e.getAllFilters,m=a.a.useState(""),g=Object(o.a)(m,2),N=g[0],w=g[1],y=a.a.useState([]),k=Object(o.a)(y,2),C=k[0],S=k[1],F=a.a.useState(null),_=Object(o.a)(F,2),A=_[0],L=_[1],D=a.a.useState({title:"",values:[]}),E=Object(o.a)(D,2),V=E[0],G=E[1],M=function(){var e=Object(s.a)(i.a.mark((function e(t){var n,c,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(null===(n=V.values)||void 0===n?void 0:n.find((function(e){return(null===e||void 0===e?void 0:e.value)===A}))).values=C,null===(c=Object(O.a)(Object(O.a)({},v),{},{children:V}))||void 0===c||delete c.createdAt,null===c||void 0===c||delete c.updatedAt,null===c||void 0===c||delete c.__v,null===c||void 0===c||delete c._id,e.next=10,x.a.put("".concat(h.a,"/api/filter/").concat(null===v||void 0===v?void 0:v._id),c,{headers:h.b});case 10:200===(null===(a=e.sent)||void 0===a?void 0:a.status)&&(f.b.success("\u0628\u0627 \u0645\u0648\u0641\u0642\u06cc\u062a \u062a\u063a\u06cc\u06cc\u0631\u0627\u062a \u0627\u0646\u062c\u0627\u0645 \u0634\u062f"),r(!1),b());case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)(Object(s.a)(i.a.mark((function e(){var t,n,c,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("".concat(h.a,"/api/filter/").concat(null===v||void 0===v?void 0:v._id),{headers:h.b});case 2:(null===(c=e.sent)||void 0===c||null===(t=c.data)||void 0===t||null===(n=t.children)||void 0===n?void 0:n.title.length)?G(null===c||void 0===c||null===(a=c.data)||void 0===a?void 0:a.children):G({title:"",values:[]});case 4:case"end":return e.stop()}}),e)}))),[v]),Object(p.jsxs)(j.K,{visible:n,onClose:function(){return r(!1)},children:[Object(p.jsx)(j.N,{onClose:function(){return r(!1)},children:Object(p.jsx)(j.O,{children:"\u0648\u06cc\u0631\u0627\u06cc\u0634 \u0641\u06cc\u0644\u062a\u0631"})}),Object(p.jsx)(j.L,{children:Object(p.jsx)("div",{className:"row",children:Object(p.jsx)("div",{className:"col-md-12",children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col-md-12 mb-3",children:Object(p.jsxs)(j.v,{children:[Object(p.jsx)(j.w,{type:"text",id:"name",placeholder:"\u0646\u0627\u0645 \u0641\u06cc\u0644\u062a\u0631 \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f",value:null===V||void 0===V?void 0:V.title,onChange:function(e){return G(Object(O.a)(Object(O.a)({},V),{},{title:e.target.value}))}}),Object(p.jsx)(j.x,{htmlFor:"name",children:"\u0639\u0646\u0648\u0627\u0646"})]})}),Object(p.jsx)("div",{className:"col-md-9 mb-3",children:Object(p.jsxs)("select",{class:"form-select","aria-label":"Default select example",onChange:function(){var e=Object(s.a)(i.a.mark((function e(t){var n,c,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return L(t.target.value),e.next=3,x.a.get("".concat(h.a,"/api/filter/category/value/").concat(null===v||void 0===v?void 0:v._id,"/").concat(t.target.value),{headers:h.b});case 3:a=e.sent,S(null===(n=a.data)||void 0===n||null===(c=n[0])||void 0===c?void 0:c.values);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:[Object(p.jsx)("option",{selected:!0,value:null,children:"\u0627\u0646\u062a\u062e\u0627\u0628 \u0645\u0642\u062f\u0627\u0631"}),null===v||void 0===v||null===(t=v.values)||void 0===t?void 0:t.map((function(e){return Object(p.jsx)("option",{value:e._id,children:e.name})}))]})}),Object(p.jsx)("div",{className:"col-md-12 mb-3",children:Object(p.jsxs)("div",{className:"row align-items-center",children:[Object(p.jsx)("div",{className:"col-md-10 mb-3",children:Object(p.jsxs)(j.v,{children:[Object(p.jsx)(j.w,{type:"text",id:"value",value:N,onChange:function(e){return w(e.target.value)},placeholder:"\u0645\u0642\u0627\u062f\u06cc\u0631 \u0641\u06cc\u0644\u062a\u0631 \u0631\u0627 \u0648\u0627\u0631\u062f \u0648 \u0628\u0631\u0648\u06cc Enter \u0628\u0632\u0646\u06cc\u062f"}),Object(p.jsx)(j.x,{htmlFor:"name",children:"\u0645\u0642\u0627\u062f\u06cc\u0631"})]})}),Object(p.jsx)("div",{className:"col-md-2",children:Object(p.jsx)(j.f,{shape:"rounded-pill",color:"primary",onClick:function(){S([].concat(Object(l.a)(C),[{name:N}])),w("")},children:Object(p.jsx)(u.a,{name:d})})}),Object(p.jsx)("div",{className:"col-md-12",children:null===C||void 0===C?void 0:C.map((function(e){return Object(p.jsx)(j.f,{color:"warning",shape:"rounded-pill",onClick:function(){S(null===C||void 0===C?void 0:C.filter((function(t){return t.name!==(null===e||void 0===e?void 0:e.name)})))},children:null===e||void 0===e?void 0:e.name})}))})]})})]})})})}),Object(p.jsxs)(j.M,{children:[Object(p.jsx)(j.f,{color:"secondary",onClick:function(){return r(!1)},children:"\u0627\u0646\u0635\u0631\u0627\u0641"}),Object(p.jsx)(j.f,{color:"primary",onClick:M,children:"\u0630\u062e\u06cc\u0631\u0647 \u062a\u063a\u06cc\u06cc\u0631\u0627\u062a"})]})]})},N=function(e){var t=e.filters,n=e.handleDelete,a=e.setVisible,l=e.setSelectedFilter,r=e.getAllFilters,i=Object(c.useState)(!1),s=Object(o.a)(i,2),d=s[0],h=s[1],m=Object(c.useState)(null),x=Object(o.a)(m,2),O=x[0],f=x[1];return Object(p.jsxs)("div",{className:"col-md-9",children:[Object(p.jsx)(g,{setVisible:h,visible:d,filter:O,getAllFilters:r}),Object(p.jsx)("div",{children:Object(p.jsx)(j.I,{children:t.map((function(e){var t,c,r,i,s,o,d;return Object(p.jsxs)(j.J,{className:"d-flex justify-content-between align-items-center",children:[null===e||void 0===e?void 0:e.name,Object(p.jsxs)("div",{children:[Object(p.jsx)(u.a,{name:v.a,style:{color:"red",cursor:"pointer",marginLeft:16},onClick:function(){return n(e._id)}}),Object(p.jsx)(u.a,{name:b,style:{cursor:"pointer",marginLeft:16},onClick:function(){l(e),a(!0)}}),Object(p.jsx)(j.c,{color:"primary",shape:"rounded-pill",children:Object(p.jsx)(j.hb,{content:null===e||void 0===e||null===(t=e.values)||void 0===t||null===(c=t.map((function(e){return e.name})))||void 0===c?void 0:c.join(" - "),children:Object(p.jsx)("span",{children:null===e||void 0===e||null===(r=e.values)||void 0===r?void 0:r.length})})}),Object(p.jsx)(j.f,{color:(null===e||void 0===e||null===(i=e.children)||void 0===i||null===(s=i.values)||void 0===s?void 0:s.length)?"primary":"warning",className:"m-2",onClick:function(){h(!0),f(e)},children:(null===e||void 0===e||null===(o=e.children)||void 0===o||null===(d=o.values)||void 0===d?void 0:d.length)?"\u0648\u06cc\u0631\u0627\u06cc\u0634 \u0632\u06cc\u0631 \u0641\u06cc\u0644\u062a\u0631":"\u0627\u0641\u0632\u0648\u062f\u0646 \u0632\u06cc\u0631 \u0641\u06cc\u0644\u062a\u0631"})]})]})}))})})]})},w=function(e){var t=e.visible,n=e.setVisible,r=e.selectedFilter,v=e.setSelectedFilter,b=e.categories,m=e.getAllData,O=a.a.useState([]),g=Object(o.a)(O,2),N=g[0],w=g[1],y=a.a.useState(""),k=Object(o.a)(y,2),C=k[0],S=k[1],F=a.a.useState(),_=Object(o.a)(F,2),A=_[0],L=_[1],D=a.a.useState(null),E=Object(o.a)(D,2),V=E[0],G=E[1];Object(c.useEffect)((function(){var e;w(null===r||void 0===r?void 0:r.values),L(null===r||void 0===r?void 0:r.name),G(null===b||void 0===b||null===(e=b.find((function(e){return e._id===(null===r||void 0===r?void 0:r.category)})))||void 0===e?void 0:e._id)}),[r]);var M=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,x.a.put("".concat(h.a,"/api/filter/").concat(null===r||void 0===r?void 0:r._id),{name:A,category:V,values:N});case 3:if(200!==e.sent.status){e.next=10;break}return e.next=7,m();case 7:f.b.success("\u0641\u06cc\u0644\u062a\u0631 \u0628\u0627 \u0645\u0648\u0641\u0642\u06cc\u062a \u0648\u06cc\u0631\u0627\u06cc\u0634 \u0634\u062f."),v(null),n(!1);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)(j.K,{visible:t,onClose:function(){return n(!1)},children:[Object(p.jsx)(j.N,{onClose:function(){return n(!1)},children:Object(p.jsx)(j.O,{children:"\u0648\u06cc\u0631\u0627\u06cc\u0634 \u0641\u06cc\u0644\u062a\u0631"})}),Object(p.jsx)(j.L,{children:Object(p.jsx)("div",{className:"row",children:Object(p.jsx)("div",{className:"col-md-12",children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col-md-12 mb-3",children:Object(p.jsxs)(j.v,{children:[Object(p.jsx)(j.w,{type:"text",id:"name",placeholder:"\u0646\u0627\u0645 \u0641\u06cc\u0644\u062a\u0631 \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f",value:A,onChange:function(e){return L(e.target.value)}}),Object(p.jsx)(j.x,{htmlFor:"name",children:"\u0646\u0627\u0645 \u0641\u06cc\u0644\u062a\u0631"})]})}),Object(p.jsx)("div",{className:"col-md-12 mb-3",children:Object(p.jsxs)(j.v,{children:[Object(p.jsxs)(j.y,{id:"floatingSelectGrid","aria-label":"Floating label select example",onChange:function(e){return G(e.target.value)},value:V,children:[Object(p.jsx)("option",{children:"\u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f"}),b.map((function(e){return Object(p.jsx)("option",{value:e._id,children:e.name})}))]}),Object(p.jsx)(j.x,{htmlFor:"floatingSelectGrid",children:"\u062f\u0633\u062a\u0647 \u0628\u0646\u062f\u06cc \u0645\u0648\u0631\u062f \u0646\u0638\u0631"})]})}),Object(p.jsx)("div",{className:"col-md-12 mb-3",children:Object(p.jsxs)("div",{className:"row align-items-center",children:[Object(p.jsx)("div",{className:"col-md-10 mb-3",children:Object(p.jsxs)(j.v,{children:[Object(p.jsx)(j.w,{type:"text",id:"value",value:C,onChange:function(e){return S(e.target.value)},placeholder:"\u0645\u0642\u0627\u062f\u06cc\u0631 \u0641\u06cc\u0644\u062a\u0631 \u0631\u0627 \u0648\u0627\u0631\u062f \u0648 \u0628\u0631\u0648\u06cc Enter \u0628\u0632\u0646\u06cc\u062f"}),Object(p.jsx)(j.x,{htmlFor:"name",children:"\u0645\u0642\u0627\u062f\u06cc\u0631"})]})}),Object(p.jsx)("div",{className:"col-md-2",children:Object(p.jsx)(j.f,{shape:"rounded-pill",color:"primary",onClick:function(){w([].concat(Object(l.a)(N),[{name:C}])),S("")},children:Object(p.jsx)(u.a,{name:d})})}),Object(p.jsx)("div",{className:"col-md-12",children:null===N||void 0===N?void 0:N.map((function(e){return Object(p.jsx)(j.f,{color:"warning",shape:"rounded-pill",onClick:function(){Object(l.a)(N);var t=N.filter((function(t){return t.name!==e.name}));w(t)},children:null===e||void 0===e?void 0:e.name})}))})]})})]})})})}),Object(p.jsxs)(j.M,{children:[Object(p.jsx)(j.f,{color:"secondary",onClick:function(){return n(!1)},children:"\u0627\u0646\u0635\u0631\u0627\u0641"}),Object(p.jsx)(j.f,{color:"primary",onClick:M,children:"\u0630\u062e\u06cc\u0631\u0647 \u062a\u063a\u06cc\u06cc\u0631\u0627\u062a"})]})]})},y=function(){var e=a.a.useState([]),t=Object(o.a)(e,2),n=t[0],r=t[1],v=a.a.useState(""),b=Object(o.a)(v,2),m=b[0],O=b[1],f=a.a.useState([]),g=Object(o.a)(f,2),y=g[0],k=g[1],C=a.a.useState([]),S=Object(o.a)(C,2),F=S[0],_=S[1],A=a.a.useState(null),L=Object(o.a)(A,2),D=L[0],E=L[1],V=a.a.useState([]),G=Object(o.a)(V,2),M=G[0],J=G[1],Z=a.a.useState(null),K=Object(o.a)(Z,2),I=K[0],q=K[1],z=a.a.useState(!1),B=Object(o.a)(z,2),H=B[0],P=B[1];Object(c.useEffect)(Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:T();case 1:case"end":return e.stop()}}),e)}))),[]);var Q=function(){var e=Object(s.a)(i.a.mark((function e(t){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,x.a.post("".concat(h.a,"/api/filter"),{name:y,category:D,values:n},{headers:h.b});case 3:if(200!==e.sent.status){e.next=13;break}return e.next=7,x.a.get("".concat(h.a,"/api/filters"),{headers:h.b});case 7:c=e.sent,J(null===c||void 0===c?void 0:c.data),k(""),O(""),r([]),E(null);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(s.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.delete("".concat(h.a,"/api/filter/").concat(t),{headers:h.b});case 2:if(200!==e.sent.status){e.next=8;break}return e.next=6,x.a.get("".concat(h.a,"/api/filters"),{headers:h.b});case 6:n=e.sent,J(null===n||void 0===n?void 0:n.data);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(s.a)(i.a.mark((function e(){var t,n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("".concat(h.a,"/api/categories"),{headers:h.b});case 2:return n=e.sent,_(null===n||void 0===n||null===(t=n.data)||void 0===t?void 0:t.categories),e.next=6,x.a.get("".concat(h.a,"/api/filters"),{headers:h.b});case 6:c=e.sent,J(null===c||void 0===c?void 0:c.data);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(s.a)(i.a.mark((function e(t){var n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("\u0641\u06cc\u0644\u062a\u0631 \u0628\u0631 \u0627\u0633\u0627\u0633 \u062f\u0633\u062a\u0647 \u0628\u0646\u062f\u06cc \u0647\u0627"===t){e.next=7;break}return e.next=3,x.a.get("".concat(h.a,"/api/filter/category/").concat(t),{headers:h.b});case 3:n=e.sent,J(null===n||void 0===n?void 0:n.data),e.next=11;break;case 7:return e.next=9,x.a.get("".concat(h.a,"/api/filters"),{headers:h.b});case 9:c=e.sent,J(null===c||void 0===c?void 0:c.data);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)("div",{className:"container p-4",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsx)("div",{className:"col-md-12",children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)(w,{visible:H,setVisible:P,selectedFilter:I,setSelectedFilter:q,categories:F,getAllData:T}),Object(p.jsx)("div",{className:"col-md-9 mb-3",children:Object(p.jsxs)("select",{class:"form-select","aria-label":"Default select example",onChange:function(e){return U(e.target.value)},children:[Object(p.jsx)("option",{selected:!0,value:null,children:"\u0641\u06cc\u0644\u062a\u0631 \u0628\u0631 \u0627\u0633\u0627\u0633 \u062f\u0633\u062a\u0647 \u0628\u0646\u062f\u06cc \u0647\u0627"}),F.map((function(e){return Object(p.jsx)("option",{value:e._id,children:e.name})}))]})}),Object(p.jsx)(N,{filters:M,handleDelete:R,setVisible:P,setSelectedFilter:q,getAllFilters:Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("".concat(h.a,"/api/filters"),{headers:h.b});case 2:t=e.sent,J(null===t||void 0===t?void 0:t.data);case 4:case"end":return e.stop()}}),e)})))}),Object(p.jsx)("div",{className:"col-md-3",children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col-md-12 mb-3",children:Object(p.jsxs)(j.v,{children:[Object(p.jsx)(j.w,{type:"text",id:"name",placeholder:"\u0646\u0627\u0645 \u0641\u06cc\u0644\u062a\u0631 \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f",value:y,onChange:function(e){return k(e.target.value)}}),Object(p.jsx)(j.x,{htmlFor:"name",children:"\u0646\u0627\u0645 \u0641\u06cc\u0644\u062a\u0631"})]})}),Object(p.jsx)("div",{className:"col-md-12 mb-3",children:Object(p.jsxs)(j.v,{children:[Object(p.jsxs)(j.y,{id:"floatingSelectGrid","aria-label":"Floating label select example",onChange:function(e){return E(e.target.value)},children:[Object(p.jsx)("option",{children:"\u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f"}),F.map((function(e){return Object(p.jsx)("option",{value:e._id,children:e.name})}))]}),Object(p.jsx)(j.x,{htmlFor:"floatingSelectGrid",children:"\u062f\u0633\u062a\u0647 \u0628\u0646\u062f\u06cc \u0645\u0648\u0631\u062f \u0646\u0638\u0631"})]})}),Object(p.jsx)("div",{className:"col-md-12 mb-3",children:Object(p.jsxs)("div",{className:"row align-items-center",children:[Object(p.jsx)("div",{className:"col-md-10 mb-3",children:Object(p.jsxs)(j.v,{children:[Object(p.jsx)(j.w,{type:"text",id:"value",value:m,onChange:function(e){return O(e.target.value)},placeholder:"\u0645\u0642\u0627\u062f\u06cc\u0631 \u0641\u06cc\u0644\u062a\u0631 \u0631\u0627 \u0648\u0627\u0631\u062f \u0648 \u0628\u0631\u0648\u06cc Enter \u0628\u0632\u0646\u06cc\u062f"}),Object(p.jsx)(j.x,{htmlFor:"name",children:"\u0645\u0642\u0627\u062f\u06cc\u0631"})]})}),Object(p.jsx)("div",{className:"col-md-2",children:Object(p.jsx)(j.f,{shape:"rounded-pill",color:"primary",onClick:function(){r([].concat(Object(l.a)(n),[{name:m}])),O("")},children:Object(p.jsx)(u.a,{name:d})})}),Object(p.jsx)("div",{className:"col-md-12",children:null===n||void 0===n?void 0:n.map((function(e){return Object(p.jsx)(j.f,{color:"warning",shape:"rounded-pill",onClick:function(){Object(l.a)(n);var t=n.filter((function(t){return t.name!==e.name}));r(t)},children:null===e||void 0===e?void 0:e.name})}))})]})}),Object(p.jsx)("div",{className:"col-md-12",children:Object(p.jsx)("button",{type:"button",class:"btn btn-secondary btn-lg btn-block",onClick:Q,children:"\u0627\u0641\u0632\u0648\u062f\u0646 \u0641\u06cc\u0644\u062a\u0631"})})]})})]})})})})};t.default=function(){return Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"jumbotron jumbotron-fluid mb-3",children:[Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("h1",{className:"display-4",children:"\u0641\u06cc\u0644\u062a\u0631\u0647\u0627"}),Object(p.jsx)("p",{className:"lead",children:"\u0641\u06cc\u0644\u062a\u0631\u0647\u0627\u06cc \u0645\u0648\u0631\u062f \u0646\u0638\u0631 \u0628\u0631\u0627\u06cc \u0647\u0631 \u062f\u0633\u062a\u0647 \u0628\u0646\u062f\u06cc \u0631\u0627 \u0628\u0631\u0627\u06cc \u062e\u0648\u062f \u0628\u0633\u0627\u0632\u06cc\u062f."})]}),Object(p.jsx)("div",{className:"dropdown-divider"})]}),Object(p.jsx)(y,{})]})}}}]);
//# sourceMappingURL=13.22a38eb4.chunk.js.map