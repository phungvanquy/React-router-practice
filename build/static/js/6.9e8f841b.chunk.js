(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[6],{41:function(e,t,c){e.exports={card:"Card_card__miCaD"}},42:function(e,t,c){e.exports={form:"QuoteForm_form__2eMgc",loading:"QuoteForm_loading__1NVuI",control:"QuoteForm_control__N2PDd",actions:"QuoteForm_actions__1Ntzp"}},55:function(e,t,c){"use strict";c.r(t);var n=c(2),o=c(37),r=c(0),a=c(12),s=c(41),u=c.n(s),i=c(1),d=function(e){return Object(i.jsx)("div",{className:u.a.card,children:e.children})},l=c(15),j=c(42),b=c.n(j),h=function(e){var t=Object(r.useState)(!1),c=Object(o.a)(t,2),s=c[0],u=c[1],j=Object(r.useRef)(),h=Object(r.useRef)();return Object(i.jsxs)(a.Fragment,{children:[Object(i.jsx)(n.a,{when:s,message:function(e){return"Are you sure you want to leave?"}}),Object(i.jsx)(d,{children:Object(i.jsxs)("form",{onFocus:function(){u(!0)},className:b.a.form,onSubmit:function(t){u(!1),t.preventDefault();var c=j.current.value,n=h.current.value;e.onAddQuote({author:c,text:n})},children:[e.isLoading&&Object(i.jsx)("div",{className:b.a.loading,children:Object(i.jsx)(l.a,{})}),Object(i.jsxs)("div",{className:b.a.control,children:[Object(i.jsx)("label",{htmlFor:"author",children:"Author"}),Object(i.jsx)("input",{type:"text",id:"author",ref:j})]}),Object(i.jsxs)("div",{className:b.a.control,children:[Object(i.jsx)("label",{htmlFor:"text",children:"Text"}),Object(i.jsx)("textarea",{id:"text",rows:"5",ref:h})]}),Object(i.jsx)("div",{className:b.a.actions,children:Object(i.jsx)("button",{onClick:function(){u(!1)},className:"btn",children:"Add Quote"})})]})})]})},f=c(35),m=c(36);t.default=function(){var e=Object(m.a)(f.b),t=e.sendRequest,c=e.status,o=Object(n.h)();Object(r.useEffect)((function(){"completed"===c&&o.push("/quotes")}),[c,o]);return Object(i.jsx)(h,{isLoading:"pending"===c,onAddQuote:function(e){t(e)},children:"New Quote Page"})}}}]);
//# sourceMappingURL=6.9e8f841b.chunk.js.map