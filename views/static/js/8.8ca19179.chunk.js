(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[8],{524:function(e,a,c){"use strict";c.d(a,"a",(function(){return t})),c.d(a,"b",(function(){return r}));var t="http://45.92.95.60:7070",r={"x-auth-token":localStorage.token,"Content-Type":"application/json"}},570:function(e,a,c){"use strict";c.d(a,"a",(function(){return t}));var t=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M411.6,343.656l-72.823-47.334,27.455-50.334A80.23,80.23,0,0,0,376,207.681V128a112,112,0,0,0-224,0v79.681a80.236,80.236,0,0,0,9.768,38.308l27.455,50.333L116.4,343.656A79.725,79.725,0,0,0,80,410.732V496H448V410.732A79.727,79.727,0,0,0,411.6,343.656ZM416,464H112V410.732a47.836,47.836,0,0,1,21.841-40.246l97.66-63.479-41.64-76.341A48.146,48.146,0,0,1,184,207.681V128a80,80,0,0,1,160,0v79.681a48.146,48.146,0,0,1-5.861,22.985L296.5,307.007l97.662,63.479h0A47.836,47.836,0,0,1,416,410.732Z' class='ci-primary'/>"]},604:function(e,a,c){"use strict";c.r(a);var t=c(528),r=c.n(t),s=c(529),n=c(154),l=c(53),o=c(527),i=c(570),j=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M64,16V496H96V360H448V322.762L363.841,208,448,93.238V56H96V16ZM412.159,88l-88,120,88,120H96V88Z' class='ci-primary'/>"],d=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z' class='ci-primary'/>"],m=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M469.666,216.45,271.078,33.749a34,34,0,0,0-47.062.98L41.373,217.373,32,226.745V496H208V328h96V496H480V225.958ZM248.038,56.771c.282,0,.108.061-.013.18C247.9,56.832,247.756,56.771,248.038,56.771ZM448,464H336V328a32,32,0,0,0-32-32H208a32,32,0,0,0-32,32V464H64V240L248.038,57.356c.013-.012.014-.023.024-.035L448,240Z' class='ci-primary'/>"],h=c(589),b=c(523),u=c(522),p=c(526),x=c.n(p),O=c(1),v=c(24),g=c(524),f=c(22);a.default=function(){var e=Object(O.useState)({email:"",firstName:"",lastName:"",countryCode:"",phoneNumber:"",password:"",storeName:"",storeAddress:"",storeDescription:"",role:"admin"}),a=Object(o.a)(e,2),c=a[0],t=a[1],p=Object(v.useHistory)().push,N=[/\u06f0/g,/\u06f1/g,/\u06f2/g,/\u06f3/g,/\u06f4/g,/\u06f5/g,/\u06f6/g,/\u06f7/g,/\u06f8/g,/\u06f9/g],C=[/\u0660/g,/\u0661/g,/\u0662/g,/\u0663/g,/\u0664/g,/\u0665/g,/\u0666/g,/\u0667/g,/\u0668/g,/\u0669/g],w=function(e){if("string"===typeof e)for(var a=0;a<10;a++)e=e.replace(N[a],a).replace(C[a],a);return e},H=function(e){t(Object(l.a)(Object(l.a)({},c),{},Object(n.a)({},e.target.name,e.target.value)))},V=function(){var e=Object(s.a)(r.a.mark((function e(a){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,x.a.post("".concat(g.a,"/api/user/register"),{email:null===c||void 0===c?void 0:c.email,firstName:null===c||void 0===c?void 0:c.firstName,lastName:null===c||void 0===c?void 0:c.lastName,countryCode:w(null===c||void 0===c?void 0:c.countryCode),phoneNumber:w(null===c||void 0===c?void 0:c.phoneNumber),password:null===c||void 0===c?void 0:c.password,store:{name:null===c||void 0===c?void 0:c.storeName,store:c.storeAddress,description:null===c||void 0===c?void 0:c.storeDescription},role:"admin"});case 4:p("/"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),alert(null===e.t0||void 0===e.t0||null===(t=e.t0.response)||void 0===t?void 0:t.message);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(a){return e.apply(this,arguments)}}();return Object(f.jsx)("div",{className:"bg-light min-vh-100 d-flex flex-row align-items-center",children:Object(f.jsx)(u.m,{children:Object(f.jsx)(u.U,{className:"justify-content-center",children:Object(f.jsx)(u.l,{md:9,lg:7,xl:6,children:Object(f.jsx)(u.h,{className:"mx-4",children:Object(f.jsx)(u.i,{className:"p-4",children:Object(f.jsxs)(u.u,{children:[Object(f.jsx)("h1",{children:"\u062b\u0628\u062a \u0646\u0627\u0645"}),Object(f.jsxs)(u.G,{className:"mb-3",children:[Object(f.jsx)(u.H,{children:Object(f.jsx)(b.a,{icon:i.a})}),Object(f.jsx)(u.w,{placeholder:"\u0646\u0627\u0645",autoComplete:"firstName",name:"firstName",onChange:H})]}),Object(f.jsxs)(u.G,{className:"mb-3",children:[Object(f.jsx)(u.H,{children:Object(f.jsx)(b.a,{icon:i.a})}),Object(f.jsx)(u.w,{placeholder:"\u0646\u0627\u0645 \u062e\u0627\u0646\u0648\u0627\u062f\u06af\u06cc",autoComplete:"lastName",name:"lastName",onChange:H})]}),Object(f.jsxs)(u.G,{className:"mb-3",children:[Object(f.jsx)(u.H,{children:Object(f.jsx)(b.a,{icon:j})}),Object(f.jsx)(u.w,{placeholder:"\u06a9\u062f \u06a9\u0634\u0648\u0631",name:"countryCode",onChange:H})]}),Object(f.jsxs)(u.G,{className:"mb-3",children:[Object(f.jsx)(u.H,{children:Object(f.jsx)(b.a,{icon:d})}),Object(f.jsx)(u.w,{placeholder:"\u0634\u0645\u0627\u0631\u0647 \u0647\u0645\u0631\u0627\u0647",name:"phoneNumber",onChange:H})]}),Object(f.jsxs)(u.G,{className:"mb-3",children:[Object(f.jsx)(u.H,{children:Object(f.jsx)(b.a,{icon:m})}),Object(f.jsx)(u.w,{placeholder:"\u0646\u0627\u0645 \u0641\u0631\u0648\u0634\u06af\u0627\u0647",name:"storeName",onChange:H})]}),Object(f.jsxs)(u.G,{className:"mb-3",children:[Object(f.jsx)(u.H,{children:Object(f.jsx)(b.a,{icon:m})}),Object(f.jsx)(u.w,{placeholder:"\u0622\u062f\u0631\u0633 \u0641\u0631\u0648\u0634\u06af\u0627\u0647",name:"storeAddress",onChange:H})]}),Object(f.jsxs)(u.G,{className:"mb-3",children:[Object(f.jsx)(u.H,{children:Object(f.jsx)(b.a,{icon:m})}),Object(f.jsx)(u.w,{placeholder:"\u062a\u0648\u0636\u06cc\u062d\u0627\u062a \u0641\u0631\u0648\u0634\u06af\u0627\u0647",name:"storeDescription",onChange:H})]}),Object(f.jsxs)(u.G,{className:"mb-3",children:[Object(f.jsx)(u.H,{children:"@"}),Object(f.jsx)(u.w,{placeholder:"\u0627\u06cc\u0645\u06cc\u0644",autoComplete:"email",name:"email",onChange:H})]}),Object(f.jsxs)(u.G,{className:"mb-5",children:[Object(f.jsx)(u.H,{children:Object(f.jsx)(b.a,{icon:h.a})}),Object(f.jsx)(u.w,{type:"password",name:"password",placeholder:"\u0631\u0645\u0632 \u0639\u0628\u0648\u0631",autoComplete:"new-password",onChange:H})]}),Object(f.jsx)("div",{className:"d-grid",children:Object(f.jsx)(u.f,{color:"success",onClick:V,children:"\u0633\u0627\u062d\u062a \u0627\u06a9\u0627\u0646\u062a"})})]})})})})})})})}}}]);
//# sourceMappingURL=8.8ca19179.chunk.js.map