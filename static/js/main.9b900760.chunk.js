(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{72:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(9),r=a.n(c),l=a(19),s=a(36),o=a(14),u=a(54),b=a.n(u),d=a(55),j=a.n(d),m=a(104),g=a(107),O=a(109),f=a(115),h=a(116),p=a(111),x=a(110),S=a(10),v=Object(m.a)((function(e){return{margin:{margin:e.spacing(1)},extendedIcon:{marginRight:e.spacing(1)},root:{width:"100%",maxWidth:600,backgroundColor:e.palette.background.paper},multiline:{"& span":{width:"80%",lineHeight:"34px",verticalAlign:"middle"},wordWrap:"break-word"}}})),k=function(e){var t=e.items,a=e.removeItem,n=e.editItem,i=e.changeCheck,c=v();return Object(S.jsx)(g.a,{component:"nav","aria-label":"main mailbox folders",className:c.root,children:t.map((function(e){var t=e.id,r=e.title,l=e.status,s="checkbox-list-label-".concat(t);return Object(S.jsxs)(O.a,{alignItems:"flex-start",children:[Object(S.jsx)(f.a,{edge:"start",checked:l,tabIndex:-1,disableRipple:!0,inputProps:{"aria-labelledby":s},onChange:function(){return i(t,l)}}),Object(S.jsx)(h.a,{disableTypography:!1,primaryTypographyProps:{style:{whiteSpace:"normal"}},className:c.multiline,children:r}),Object(S.jsxs)(p.a,{children:[Object(S.jsx)(x.a,{"aria-label":"delete",className:c.margin,onClick:function(){return n(t)},children:Object(S.jsx)(b.a,{fontSize:"small"})}),Object(S.jsx)(x.a,{"aria-label":"delete",className:c.margin,onClick:function(){return a(t)},children:Object(S.jsx)(j.a,{fontSize:"small"})})]})]},t)}))})},y=(a(72),a(112)),I=a(114),w=a(113),N=Object(m.a)((function(e){return{margin:{margin:e.spacing(1)},extendedIcon:{marginRight:e.spacing(1)}}})),C=function(){var e=N(),t=Object(n.useState)(""),a=Object(o.a)(t,2),i=a[0],c=a[1],r=Object(n.useState)(localStorage.getItem("list")?JSON.parse(localStorage.getItem("list")):[]),u=Object(o.a)(r,2),b=u[0],d=u[1],j=Object(n.useState)(!1),m=Object(o.a)(j,2),g=m[0],O=m[1],f=Object(n.useState)(null),h=Object(o.a)(f,2),p=h[0],x=h[1],v=Object(n.useState)(!1),C=Object(o.a)(v,2);C[0],C[1];return Object(n.useEffect)((function(){localStorage.setItem("list",JSON.stringify(b))}),[b]),Object(S.jsxs)(y.a,{maxWidth:"sm",children:[Object(S.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),i)if(i&&g)d(b.map((function(e){return e.id===p?Object(s.a)(Object(s.a)({},e),{},{title:i}):e}))),c(""),x(null),O(!1);else{var t={id:(new Date).getTime().toString(),title:i,status:!1};d([].concat(Object(l.a)(b),[t])),c("")}},children:[Object(S.jsx)(I.a,{id:"standard-basic",label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u0434\u0430\u0447\u0443",value:i,fullWidth:!0,onChange:function(e){return c(e.target.value)}}),Object(S.jsx)(w.a,{variant:"contained",size:"small",color:"primary",className:e.margin,type:"submit",children:g?"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]}),b.length>0&&Object(S.jsx)("div",{className:"task-body",children:Object(S.jsx)(k,{items:b,removeItem:function(e){d(b.filter((function(t){return t.id!==e})))},editItem:function(e){var t=b.find((function(t){return t.id===e}));O(!0),x(e),c(t.title)},changeCheck:function(e,t){d(b.map((function(a){return a.id===e?Object(s.a)(Object(s.a)({},a),{},{status:!t}):a})))}})})]})};r.a.render(Object(S.jsx)(i.a.StrictMode,{children:Object(S.jsx)(C,{})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.9b900760.chunk.js.map