(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{10:function(e,a,t){},12:function(e,a,t){"use strict";t.r(a);var c=t(5),n=t.n(c),i=t(4),r=t(1),l=(t(10),t(2)),s=t.n(l),o=t(0),j=function(e){for(var a=e.total,t=e.perPage,c=e.currentPage,n=e.onPageChange,i=Math.ceil(a/t),r=[],l=1;l<=i;l+=1)r.push(l);return Object(o.jsxs)("ul",{className:"pagination",children:[Object(o.jsx)("li",{className:s()("page-item",{disabled:1===c}),children:Object(o.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":1===c?"true":"false",onClick:function(){1!==c&&n(c-1)},children:"\xab"})}),r.map((function(e){return Object(o.jsx)("li",{className:s()("page-item",{active:e===c}),children:Object(o.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:function(){return n(e)},children:e})},e)})),Object(o.jsx)("li",{className:s()("page-item",{disabled:c===i}),children:Object(o.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":c===i?"true":"false",onClick:function(){c!==i&&n(c+1)},children:"\xbb"})})]})};var u=function(e,a){for(var t=[],c=e;c<=a;c+=1)t.push(c);return t}(1,42).map((function(e){return"Item ".concat(e)})),d=function(){var e=u.length,a=Object(r.useState)(5),t=Object(i.a)(a,2),c=t[0],n=t[1],l=Object(r.useState)(1),s=Object(i.a)(l,2),d=s[0],h=s[1],p=c*d-c,b=c*(d+1)-c,m=function(){return u.filter((function(e,a){return a>=p&&a<b&&e}))};return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{children:"Items with Pagination"}),Object(o.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(d," (items ").concat(p+1," - ").concat(p+m().length," of ").concat(e,")")}),Object(o.jsxs)("div",{className:"form-group row",children:[Object(o.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(o.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",value:c,onChange:function(e){h(1),n(parseInt(e.target.value,10))},children:[Object(o.jsx)("option",{value:"3",children:"3"}),Object(o.jsx)("option",{value:"5",children:"5"}),Object(o.jsx)("option",{value:"10",children:"10"}),Object(o.jsx)("option",{value:"20",children:"20"})]})}),Object(o.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(o.jsx)(j,{total:e,perPage:c,currentPage:d,onPageChange:function(e){h(e)}}),Object(o.jsx)("ul",{children:m().map((function(e){return Object(o.jsx)("li",{"data-cy":"item",children:e})}))})]})};n.a.render(Object(o.jsx)(d,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.2fc4aa2b.chunk.js.map