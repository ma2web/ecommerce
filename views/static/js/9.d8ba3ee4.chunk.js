(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[9],{525:function(e,t,c){"use strict";c.d(t,"a",(function(){return a})),c.d(t,"b",(function(){return n}));var a="http://45.92.95.60:7070",n={"x-auth-token":localStorage.token,"Content-Type":"application/json"}},615:function(e,t,c){"use strict";c.r(t);var a=c(528),n=c.n(a),r=c(529),s=c(155),l=c(53),i=c(530),o=c(607),d=c(523),j=c(522),u=c(526),h=c.n(u),b=c(1),p=c(24),x=c(153),m=c(525),O=c(22);t.default=function(){var e=Object(b.useState)({email:"",password:""}),t=Object(i.a)(e,2),c=t[0],a=t[1],u=Object(b.useState)(null),v=Object(i.a)(u,2),f=v[0],g=v[1],w=(Object(p.useHistory)().push,function(e){return a(Object(l.a)(Object(l.a)({},c),{},Object(s.a)({},e.target.name,e.target.value)))}),y=function(){var e=Object(r.a)(n.a.mark((function e(t){var a,r,s,l,i,o,d,j,u;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,h.a.post("".concat(m.a,"/api/user/login"),c);case 4:200===(null===(a=e.sent)||void 0===a?void 0:a.status)&&(i=null===a||void 0===a||null===(r=a.data)||void 0===r?void 0:r.token,o=null===a||void 0===a||null===(s=a.data)||void 0===s?void 0:s._id,d=null===a||void 0===a||null===(l=a.data)||void 0===l?void 0:l.role,localStorage.token=i,localStorage.userId=o,localStorage.role=d,setTimeout((function(){window.location.href="/"}),1e3)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),g(null===e.t0||void 0===e.t0||null===(j=e.t0.response)||void 0===j||null===(u=j.data)||void 0===u?void 0:u.message);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsx)("div",{className:"bg-light min-vh-100 d-flex flex-row align-items-center",children:Object(O.jsx)(j.m,{children:Object(O.jsx)(j.T,{className:"justify-content-center",children:Object(O.jsx)(j.l,{md:8,children:Object(O.jsxs)(j.j,{children:[Object(O.jsxs)(j.h,{className:"p-4",children:[Object(O.jsx)(j.i,{children:Object(O.jsxs)(j.u,{children:[Object(O.jsx)("h1",{children:"\u0648\u0631\u0648\u062f"}),Object(O.jsx)("p",{className:"text-medium-emphasis",children:"\u0628\u0647 \u062d\u0633\u0627\u0628 \u06a9\u0627\u0631\u0628\u0631\u06cc \u062e\u0648\u062f \u0648\u0627\u0631\u062f \u0634\u0648\u06cc\u062f"}),Object(O.jsxs)(j.F,{className:"mb-3",children:[Object(O.jsx)(j.G,{children:"@"}),Object(O.jsx)(j.w,{placeholder:"\u062d\u0633\u0627\u0628 \u06a9\u0627\u0631\u0628\u0631\u06cc",autoComplete:"email",name:"email",value:c.email,onChange:w})]}),Object(O.jsxs)(j.F,{className:"mb-4",children:[Object(O.jsx)(j.G,{children:Object(O.jsx)(d.a,{icon:o.a})}),Object(O.jsx)(j.w,{type:"password",placeholder:"\u0631\u0645\u0632 \u0639\u0628\u0648\u0631",autoComplete:"current-password",name:"password",value:c.password,onChange:w})]}),Object(O.jsx)(j.T,{children:Object(O.jsx)(j.l,{xs:6,children:Object(O.jsx)(j.f,{color:"primary",className:"px-4",onClick:y,children:"\u0648\u0631\u0648\u062f"})})})]})}),f&&Object(O.jsx)(j.a,{color:"danger",children:f})]}),Object(O.jsx)(j.h,{className:"text-white bg-primary py-5",style:{width:"44%"},children:Object(O.jsx)(j.i,{className:"text-center",children:Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:"\u062b\u0628\u062a \u0646\u0627\u0645"}),Object(O.jsx)("p",{children:"\u0627\u06af\u0631 \u062d\u0633\u0627\u0628 \u06a9\u0627\u0631\u0628\u0631\u06cc \u0646\u062f\u0627\u0631\u06cc\u062f \u0628\u0631\u0648\u06cc \u0644\u06cc\u0646\u06a9 \u0632\u06cc\u0631 \u06a9\u0644\u06cc\u06a9 \u06a9\u0646\u06cc\u062f \u0648 \u062d\u0633\u0627\u0628 \u06a9\u0627\u0631\u0628\u0631\u06cc \u062e\u0648\u062f \u0631\u0627 \u0627\u06cc\u062c\u0627\u062f \u06a9\u0646\u06cc\u062f"}),Object(O.jsx)(x.b,{to:"/register",children:Object(O.jsx)(j.f,{color:"primary",className:"mt-3",active:!0,tabIndex:-1,children:"\u0639\u0636\u0648\u06cc\u062a"})})]})})})]})})})})})}}}]);
//# sourceMappingURL=9.d8ba3ee4.chunk.js.map