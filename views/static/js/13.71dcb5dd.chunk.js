(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[13],{621:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(535),l=n(528),i=n.n(l),s=n(529),o=n(530),d=["512 512","<polygon fill='var(--ci-primary-color, currentColor)' points='440 240 272 240 272 72 240 72 240 240 72 240 72 272 240 272 240 440 272 440 272 272 440 272 440 240' class='ci-primary'/>"],u=n(523),j=n(522),b=n(601),v=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M23.686,456.521a24.841,24.841,0,0,0,6,25.708l.087.087a24.841,24.841,0,0,0,17.612,7.342,25.179,25.179,0,0,0,8.1-1.344h0a646.28,646.28,0,0,0,248.04-154.207L469.981,167.646A88.832,88.832,0,1,0,344.354,42.019l-9.534,9.534L314.029,30.762a50.4,50.4,0,0,0-71.274,0L108.687,164.83l22.626,22.627L265.382,53.389a18.4,18.4,0,0,1,26.019,0L312.193,74.18l-134.3,134.3A646.28,646.28,0,0,0,23.686,456.521Zm343.3-391.875a56.832,56.832,0,1,1,80.373,80.373l-89.493,89.493-80.372-80.373ZM254.862,176.766l80.372,80.372L280.892,311.48A614.383,614.383,0,0,1,58.779,453.221,614.383,614.383,0,0,1,200.52,231.108Z' class='ci-primary'/>"],m=n(525),h=n(526),x=n.n(h),O=n(22),f=function(e){var t=e.filters,n=e.handleDelete,c=e.setVisible,a=e.setSelectedFilter;return Object(O.jsx)("div",{className:"col-md-9",children:Object(O.jsx)("div",{children:Object(O.jsx)(j.I,{children:t.map((function(e){var t,r,l;return Object(O.jsxs)(j.J,{className:"d-flex justify-content-between align-items-center",children:[null===e||void 0===e?void 0:e.name,Object(O.jsxs)("div",{children:[Object(O.jsx)(u.a,{name:b.a,style:{color:"red",cursor:"pointer",marginLeft:16},onClick:function(){return n(e._id)}}),Object(O.jsx)(u.a,{name:v,style:{cursor:"pointer",marginLeft:16},onClick:function(){a(e),c(!0)}}),Object(O.jsx)(j.c,{color:"primary",shape:"rounded-pill",children:Object(O.jsx)(j.hb,{content:null===e||void 0===e||null===(t=e.values)||void 0===t||null===(r=t.map((function(e){return e.name})))||void 0===r?void 0:r.join(" - "),children:Object(O.jsx)("span",{children:null===e||void 0===e||null===(l=e.values)||void 0===l?void 0:l.length})})})]})]})}))})})})},p=n(156),g=function(e){var t=e.visible,n=e.setVisible,l=e.selectedFilter,b=e.setSelectedFilter,v=e.categories,h=e.getAllData,f=a.a.useState([]),g=Object(o.a)(f,2),N=g[0],y=g[1],w=a.a.useState(""),k=Object(o.a)(w,2),S=k[0],C=k[1],F=a.a.useState(),L=Object(o.a)(F,2),D=L[0],_=L[1],A=a.a.useState(null),E=Object(o.a)(A,2),G=E[0],V=E[1];Object(c.useEffect)((function(){var e;y(null===l||void 0===l?void 0:l.values),_(null===l||void 0===l?void 0:l.name),V(null===v||void 0===v||null===(e=v.find((function(e){return e._id===(null===l||void 0===l?void 0:l.category)})))||void 0===e?void 0:e._id)}),[l]);var J=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,x.a.put("".concat(m.a,"/api/filter/").concat(null===l||void 0===l?void 0:l._id),{name:D,category:G,values:N});case 3:if(200!==e.sent.status){e.next=10;break}return e.next=7,h();case 7:p.b.success("\u0641\u06cc\u0644\u062a\u0631 \u0628\u0627 \u0645\u0648\u0641\u0642\u06cc\u062a \u0648\u06cc\u0631\u0627\u06cc\u0634 \u0634\u062f."),b(null),n(!1);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)(j.K,{visible:t,onClose:function(){return n(!1)},children:[Object(O.jsx)(j.N,{onClose:function(){return n(!1)},children:Object(O.jsx)(j.O,{children:"\u0648\u06cc\u0631\u0627\u06cc\u0634 \u0641\u06cc\u0644\u062a\u0631"})}),Object(O.jsx)(j.L,{children:Object(O.jsx)("div",{className:"row",children:Object(O.jsx)("div",{className:"col-md-12",children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("div",{className:"col-md-12 mb-3",children:Object(O.jsxs)(j.v,{children:[Object(O.jsx)(j.w,{type:"text",id:"name",placeholder:"\u0646\u0627\u0645 \u0641\u06cc\u0644\u062a\u0631 \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f",value:D,onChange:function(e){return _(e.target.value)}}),Object(O.jsx)(j.x,{htmlFor:"name",children:"\u0646\u0627\u0645 \u0641\u06cc\u0644\u062a\u0631"})]})}),Object(O.jsx)("div",{className:"col-md-12 mb-3",children:Object(O.jsxs)(j.v,{children:[Object(O.jsxs)(j.y,{id:"floatingSelectGrid","aria-label":"Floating label select example",onChange:function(e){return V(e.target.value)},value:G,children:[Object(O.jsx)("option",{children:"\u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f"}),v.map((function(e){return Object(O.jsx)("option",{value:e._id,children:e.name})}))]}),Object(O.jsx)(j.x,{htmlFor:"floatingSelectGrid",children:"\u062f\u0633\u062a\u0647 \u0628\u0646\u062f\u06cc \u0645\u0648\u0631\u062f \u0646\u0638\u0631"})]})}),Object(O.jsx)("div",{className:"col-md-12 mb-3",children:Object(O.jsxs)("div",{className:"row align-items-center",children:[Object(O.jsx)("div",{className:"col-md-10 mb-3",children:Object(O.jsxs)(j.v,{children:[Object(O.jsx)(j.w,{type:"text",id:"value",value:S,onChange:function(e){return C(e.target.value)},placeholder:"\u0645\u0642\u0627\u062f\u06cc\u0631 \u0641\u06cc\u0644\u062a\u0631 \u0631\u0627 \u0648\u0627\u0631\u062f \u0648 \u0628\u0631\u0648\u06cc Enter \u0628\u0632\u0646\u06cc\u062f"}),Object(O.jsx)(j.x,{htmlFor:"name",children:"\u0645\u0642\u0627\u062f\u06cc\u0631"})]})}),Object(O.jsx)("div",{className:"col-md-2",children:Object(O.jsx)(j.f,{shape:"rounded-pill",color:"primary",onClick:function(){y([].concat(Object(r.a)(N),[{name:S}])),C("")},children:Object(O.jsx)(u.a,{name:d})})}),Object(O.jsx)("div",{className:"col-md-12",children:null===N||void 0===N?void 0:N.map((function(e){return Object(O.jsx)(j.f,{color:"warning",shape:"rounded-pill",onClick:function(){Object(r.a)(N);var t=N.filter((function(t){return t.name!==e.name}));y(t)},children:null===e||void 0===e?void 0:e.name})}))})]})})]})})})}),Object(O.jsxs)(j.M,{children:[Object(O.jsx)(j.f,{color:"secondary",onClick:function(){return n(!1)},children:"\u0627\u0646\u0635\u0631\u0627\u0641"}),Object(O.jsx)(j.f,{color:"primary",onClick:J,children:"\u0630\u062e\u06cc\u0631\u0647 \u062a\u063a\u06cc\u06cc\u0631\u0627\u062a"})]})]})},N=function(){var e=a.a.useState([]),t=Object(o.a)(e,2),n=t[0],l=t[1],b=a.a.useState(""),v=Object(o.a)(b,2),h=v[0],p=v[1],N=a.a.useState([]),y=Object(o.a)(N,2),w=y[0],k=y[1],S=a.a.useState([]),C=Object(o.a)(S,2),F=C[0],L=C[1],D=a.a.useState(null),_=Object(o.a)(D,2),A=_[0],E=_[1],G=a.a.useState([]),V=Object(o.a)(G,2),J=V[0],M=V[1],Z=a.a.useState(null),I=Object(o.a)(Z,2),K=I[0],q=I[1],z=a.a.useState(!1),B=Object(o.a)(z,2),H=B[0],P=B[1];Object(c.useEffect)(Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:T();case 1:case"end":return e.stop()}}),e)}))),[]);var Q=function(){var e=Object(s.a)(i.a.mark((function e(t){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,x.a.post("".concat(m.a,"/api/filter"),{name:w,category:A,values:n},{headers:m.b});case 3:if(200!==e.sent.status){e.next=13;break}return e.next=7,x.a.get("".concat(m.a,"/api/filters"),{headers:m.b});case 7:c=e.sent,M(null===c||void 0===c?void 0:c.data),k(""),p(""),l([]),E(null);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(s.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.delete("".concat(m.a,"/api/filter/").concat(t),{headers:m.b});case 2:if(200!==e.sent.status){e.next=8;break}return e.next=6,x.a.get("".concat(m.a,"/api/filters"),{headers:m.b});case 6:n=e.sent,M(null===n||void 0===n?void 0:n.data);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(s.a)(i.a.mark((function e(){var t,n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("".concat(m.a,"/api/categories"),{headers:m.b});case 2:return n=e.sent,L(null===n||void 0===n||null===(t=n.data)||void 0===t?void 0:t.categories),e.next=6,x.a.get("".concat(m.a,"/api/filters"),{headers:m.b});case 6:c=e.sent,M(null===c||void 0===c?void 0:c.data);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.jsx)("div",{className:"container p-4",children:Object(O.jsx)("div",{className:"row",children:Object(O.jsx)("div",{className:"col-md-12",children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)(g,{visible:H,setVisible:P,selectedFilter:K,setSelectedFilter:q,categories:F,getAllData:T}),Object(O.jsx)(f,{filters:J,handleDelete:R,setVisible:P,setSelectedFilter:q}),Object(O.jsx)("div",{className:"col-md-3",children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("div",{className:"col-md-12 mb-3",children:Object(O.jsxs)(j.v,{children:[Object(O.jsx)(j.w,{type:"text",id:"name",placeholder:"\u0646\u0627\u0645 \u0641\u06cc\u0644\u062a\u0631 \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f",value:w,onChange:function(e){return k(e.target.value)}}),Object(O.jsx)(j.x,{htmlFor:"name",children:"\u0646\u0627\u0645 \u0641\u06cc\u0644\u062a\u0631"})]})}),Object(O.jsx)("div",{className:"col-md-12 mb-3",children:Object(O.jsxs)(j.v,{children:[Object(O.jsxs)(j.y,{id:"floatingSelectGrid","aria-label":"Floating label select example",onChange:function(e){return E(e.target.value)},children:[Object(O.jsx)("option",{children:"\u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f"}),F.map((function(e){return Object(O.jsx)("option",{value:e._id,children:e.name})}))]}),Object(O.jsx)(j.x,{htmlFor:"floatingSelectGrid",children:"\u062f\u0633\u062a\u0647 \u0628\u0646\u062f\u06cc \u0645\u0648\u0631\u062f \u0646\u0638\u0631"})]})}),Object(O.jsx)("div",{className:"col-md-12 mb-3",children:Object(O.jsxs)("div",{className:"row align-items-center",children:[Object(O.jsx)("div",{className:"col-md-10 mb-3",children:Object(O.jsxs)(j.v,{children:[Object(O.jsx)(j.w,{type:"text",id:"value",value:h,onChange:function(e){return p(e.target.value)},placeholder:"\u0645\u0642\u0627\u062f\u06cc\u0631 \u0641\u06cc\u0644\u062a\u0631 \u0631\u0627 \u0648\u0627\u0631\u062f \u0648 \u0628\u0631\u0648\u06cc Enter \u0628\u0632\u0646\u06cc\u062f"}),Object(O.jsx)(j.x,{htmlFor:"name",children:"\u0645\u0642\u0627\u062f\u06cc\u0631"})]})}),Object(O.jsx)("div",{className:"col-md-2",children:Object(O.jsx)(j.f,{shape:"rounded-pill",color:"primary",onClick:function(){l([].concat(Object(r.a)(n),[{name:h}])),p("")},children:Object(O.jsx)(u.a,{name:d})})}),Object(O.jsx)("div",{className:"col-md-12",children:null===n||void 0===n?void 0:n.map((function(e){return Object(O.jsx)(j.f,{color:"warning",shape:"rounded-pill",onClick:function(){Object(r.a)(n);var t=n.filter((function(t){return t.name!==e.name}));l(t)},children:null===e||void 0===e?void 0:e.name})}))})]})}),Object(O.jsx)("div",{className:"col-md-12",children:Object(O.jsx)("button",{type:"button",class:"btn btn-secondary btn-lg btn-block",onClick:Q,children:"\u0627\u0641\u0632\u0648\u062f\u0646 \u0641\u06cc\u0644\u062a\u0631"})})]})})]})})})})};t.default=function(){return Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:"jumbotron jumbotron-fluid mb-3",children:[Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("h1",{className:"display-4",children:"\u0641\u06cc\u0644\u062a\u0631\u0647\u0627"}),Object(O.jsx)("p",{className:"lead",children:"\u0641\u06cc\u0644\u062a\u0631\u0647\u0627\u06cc \u0645\u0648\u0631\u062f \u0646\u0638\u0631 \u0628\u0631\u0627\u06cc \u0647\u0631 \u062f\u0633\u062a\u0647 \u0628\u0646\u062f\u06cc \u0631\u0627 \u0628\u0631\u0627\u06cc \u062e\u0648\u062f \u0628\u0633\u0627\u0632\u06cc\u062f."})]}),Object(O.jsx)("div",{className:"dropdown-divider"})]}),Object(O.jsx)(N,{})]})}}}]);
//# sourceMappingURL=13.71dcb5dd.chunk.js.map