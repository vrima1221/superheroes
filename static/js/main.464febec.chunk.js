(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{30:function(e,t,a){},36:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(31),r=a.n(c),s=a(13),i=(a(36),a(5)),l=a.n(i),o=a(9),u=a(8),p=a(6),j=(a(38),a(4)),b=(a(39),a(40),a(2)),d=function(e){var t=e.hero;return Object(b.jsx)(s.b,{to:"".concat(t.nickname),children:Object(b.jsxs)("div",{className:"hero",children:[Object(b.jsx)("img",{src:"http://localhost:5000/".concat(t.images[0]),alt:"",className:"hero__img"}),Object(b.jsx)("p",{className:"hero__nickname",children:t.nickname})]})})},m=function(e){var t=e.heroes,a=e.currentPage,n=e.onPageChange;return Object(b.jsxs)("div",{className:"list__container",children:[Object(b.jsx)("div",{className:"list",children:t.map((function(e){return Object(b.jsx)(d,{hero:e},e.nickname)}))}),Object(b.jsx)("button",{type:"button",className:"button--load",onClick:function(){return n(a+1)},children:"Load more..."})]})},h=function(){return Object(b.jsx)("h1",{children:"Page not found"})},f=(a(42),a(50)),O="http://localhost:5000",_=function(){var e=Object(u.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("".concat(O,"/superheroes?page=").concat(t));case 3:return a=e.sent,n=a.data,e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(u.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.post("".concat(O,"/superheroes"),t);case 3:return a=e.sent,e.next=6,a.data;case 6:return n=e.sent,e.abrupt("return",n);case 10:return e.prev=10,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",null);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(u.a)(l.a.mark((function e(t,a){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.patch("".concat(O,"/superheroes/").concat(t),a);case 3:return n=e.sent,c=n.data,e.abrupt("return",c);case 8:return e.prev=8,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,a){return e.apply(this,arguments)}}(),g=function(){var e=Object(u.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("".concat(O,"/superheroes/").concat(t));case 3:return a=e.sent,n=a.data,e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(p.a)(r,2),i=s[0],o=s[1],d=Object(n.useState)(""),m=Object(p.a)(d,2),h=m[0],f=m[1],O=Object(n.useState)(""),_=Object(p.a)(O,2),v=_[0],g=_[1],N=Object(n.useState)(""),k=Object(p.a)(N,2),y=k[0],w=k[1],S=Object(n.useState)(""),C=Object(p.a)(S,2),E=C[0],F=C[1],q=Object(j.o)(),P=function(){var e=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(n=new FormData).append("nickname",i),n.append("real_name",h),n.append("origin_description",v),n.append("superpowers",y),n.append("catch_phrase",E),a.forEach((function(e){n.append("images",e)})),e.next=10,x(n);case 10:q("/".concat(i));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{className:"form__title",children:"Create new hero"}),Object(b.jsxs)("form",{className:"form",onSubmit:P,children:[Object(b.jsxs)("div",{className:"form__input",children:[Object(b.jsx)("label",{htmlFor:"nickname",className:"form__input-label",children:"Nickname:"}),Object(b.jsx)("input",{className:"form__input-field",type:"text",name:"nickname",id:"nickname",required:!0,value:i,onChange:function(e){return o(e.target.value)}})]}),Object(b.jsxs)("div",{className:"form__input",children:[Object(b.jsx)("label",{htmlFor:"real_name",className:"form__input-label",children:"Real name:"}),Object(b.jsx)("input",{className:"form__input-field",type:"text",name:"real_name",id:"real_name",required:!0,value:h,onChange:function(e){return f(e.target.value)}})]}),Object(b.jsxs)("div",{className:"form__input",children:[Object(b.jsx)("label",{htmlFor:"description",className:"form__input-label",children:"Origin description:"}),Object(b.jsx)("input",{className:"form__input-field",type:"text",name:"description",id:"description",required:!0,value:v,onChange:function(e){return g(e.target.value)}})]}),Object(b.jsxs)("div",{className:"form__input",children:[Object(b.jsx)("label",{htmlFor:"superpowers",className:"form__input-label",children:"Superpowers:"}),Object(b.jsx)("input",{className:"form__input-field",type:"text",name:"superpowers",id:"superpowers",required:!0,value:y,onChange:function(e){return w(e.target.value)}})]}),Object(b.jsxs)("div",{className:"form__input",children:[Object(b.jsx)("label",{htmlFor:"catch_phrase",className:"form__input-label",children:"Catch phrase:"}),Object(b.jsx)("input",{className:"form__input-field",type:"text",name:"catch_phrase",id:"catch_phrase",required:!0,value:E,onChange:function(e){return F(e.target.value)}})]}),Object(b.jsx)("div",{className:"form__images",children:Object(b.jsx)("input",{type:"file",id:"profile_pic",name:"profile_pic",accept:".jpg, .jpeg, .png",multiple:!0,onChange:function(e){var t=e.target.files,a=Array.from(t);c(a)}})}),Object(b.jsx)("button",{type:"submit",className:"form__button",children:"Create"})]})]})},k=function(){return Object(b.jsx)("div",{children:Object(b.jsx)(N,{})})},y=(a(47),function(){return Object(b.jsxs)("header",{className:"header",children:[Object(b.jsx)(s.b,{to:"/",children:"Home"}),Object(b.jsx)(s.b,{to:"/create",children:"Add your hero"})]})}),w=(a(30),function(){var e=Object(j.q)().nickname,t=Object(n.useState)(null),a=Object(p.a)(t,2),c=a[0],r=a[1];return Object(n.useEffect)((function(){e&&g(e).then((function(e){return r(e)}))}),[]),Object(b.jsxs)("div",{className:"profile",children:[Object(b.jsx)(s.b,{to:"./edit",className:"edit-button",children:"Edit"}),Object(b.jsx)("h1",{className:"profile__title",children:null===c||void 0===c?void 0:c.nickname}),Object(b.jsx)("p",{className:"profile__real-name",children:null===c||void 0===c?void 0:c.real_name}),Object(b.jsx)("img",{src:"http://localhost:5000/".concat(null===c||void 0===c?void 0:c.images[0]),alt:null===c||void 0===c?void 0:c.nickname,className:"profile__avatar"}),Object(b.jsxs)("div",{className:"profile__description section",children:[Object(b.jsx)("h2",{className:"profile__description-title section__title",children:"Origin"}),Object(b.jsx)("p",{className:"profile__description-text section__text",children:null===c||void 0===c?void 0:c.origin_description})]}),Object(b.jsx)("div",{className:"separator"}),Object(b.jsxs)("div",{className:"profile__superpowers section",children:[Object(b.jsx)("h2",{className:"profile__superpovers-title section__title",children:"Superpowers"}),Object(b.jsx)("p",{className:"profile__superpowers-text",children:null===c||void 0===c?void 0:c.superpowers})]}),Object(b.jsx)("div",{className:"separator"}),Object(b.jsxs)("div",{className:"profile__phrase section",children:[Object(b.jsx)("h2",{className:"profile__phrase-title section__title",children:"Catch phrase"}),Object(b.jsx)("p",{className:"profile__prhase-text",children:null===c||void 0===c?void 0:c.catch_phrase})]}),Object(b.jsx)("div",{className:"separator"}),Object(b.jsx)("h2",{className:"profile__gallery-title section__title",children:"Gallery"}),Object(b.jsx)("div",{className:"profile__gallery",children:null===c||void 0===c?void 0:c.images.map((function(e){return Object(b.jsx)("div",{className:"profile__gallery-image--container",children:Object(b.jsx)("img",{src:"http://localhost:5000/".concat(e),alt:null===c||void 0===c?void 0:c.nickname,className:"profile__gallery-image"})},null===c||void 0===c?void 0:c.nickname)}))})]})}),S=function(){var e=Object(j.q)().nickname,t=Object(j.o)(),a=Object(n.useState)(null),c=Object(p.a)(a,2),r=c[0],s=c[1],i=Object(n.useState)(""),o=Object(p.a)(i,2),d=o[0],m=o[1],h=Object(n.useState)(""),f=Object(p.a)(h,2),O=f[0],_=f[1],x=Object(n.useState)(""),N=Object(p.a)(x,2),k=N[0],y=N[1],w=Object(n.useState)([]),S=Object(p.a)(w,2),C=S[0],E=S[1],F=Object(n.useState)([]),q=Object(p.a)(F,2),P=q[0],D=q[1];Object(n.useEffect)((function(){e&&g(e).then((function(e){s(e),m(e.origin_description),y(e.catch_phrase),_(e.superpowers),E(e.images)}))}),[]);var A=function(){var a=Object(u.a)(l.a.mark((function a(n){var c;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n.preventDefault(),(c=new FormData).append("origin_description",d),c.append("superpowers",O),c.append("catch_phrase",k),C.forEach((function(e){c.append("images",e)})),P.forEach((function(e){c.append("newImages",e)})),!e){a.next=17;break}return a.prev=8,a.next=11,v(e,c);case 11:t("/".concat(e)),a.next=17;break;case 14:a.prev=14,a.t0=a.catch(8),console.log(a.t0);case 17:case"end":return a.stop()}}),a,null,[[8,14]])})));return function(e){return a.apply(this,arguments)}}();return Object(b.jsxs)("form",{action:"",className:"profile",onSubmit:A,children:[Object(b.jsx)("h1",{className:"profile__title",children:null===r||void 0===r?void 0:r.nickname}),Object(b.jsx)("p",{className:"profile__real-name",children:null===r||void 0===r?void 0:r.real_name}),Object(b.jsx)("img",{src:"http://localhost:5000/".concat(null===r||void 0===r?void 0:r.images[0]),alt:null===r||void 0===r?void 0:r.nickname,className:"profile__avatar"}),Object(b.jsxs)("div",{className:"profile__description section",children:[Object(b.jsx)("h2",{className:"profile__description-title section__title",children:"Origin"}),Object(b.jsx)("textarea",{name:"",id:"",value:d,onChange:function(e){return m(e.target.value)},className:"textarea"})]}),Object(b.jsx)("div",{className:"separator"}),Object(b.jsxs)("div",{className:"profile__superpowers section",children:[Object(b.jsx)("h2",{className:"profile__superpovers-title section__title",children:"Superpowers"}),Object(b.jsx)("textarea",{name:"",id:"",value:O,onChange:function(e){return _(e.target.value)},className:"textarea"})]}),Object(b.jsx)("div",{className:"separator"}),Object(b.jsxs)("div",{className:"profile__phrase section",children:[Object(b.jsx)("h2",{className:"profile__phrase-title section__title",children:"Catch phrase"}),Object(b.jsx)("textarea",{name:"",id:"",value:k,onChange:function(e){return y(e.target.value)},className:"textarea"})]}),Object(b.jsx)("div",{className:"separator"}),Object(b.jsxs)("div",{className:"profile__gallery",children:[Object(b.jsx)("h2",{className:"profile__gallery-title section__title",children:"Gallery"}),C.map((function(t){return Object(b.jsxs)("div",{className:"profile__gallery-image--container",children:[Object(b.jsx)("img",{src:"http://localhost:5000/".concat(t),alt:null===r||void 0===r?void 0:r.nickname,className:"profile__gallery-image"}),Object(b.jsx)("button",{type:"button",className:"button--remove",onClick:function(){return a=t,void E((function(t){var n=t.filter((function(e){return e!==a}));if(e)try{v(e,{images:n})}catch(c){console.log(c)}return n}));var a},children:"X"})]},null===r||void 0===r?void 0:r.nickname)})),Object(b.jsx)("input",{type:"file",id:"profile_pic",name:"profile_pic",accept:".jpg, .jpeg, .png",multiple:!0,onChange:function(e){var t=e.target.files,a=Array.from(t);D(a)}})]}),Object(b.jsx)("button",{type:"submit",className:"button--submit",children:"Save"})]})},C=function(){var e=Object(n.useState)(!1),t=Object(p.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),s=Object(p.a)(r,2),i=s[0],d=s[1],f=Object(n.useState)(1),O=Object(p.a)(f,2),x=O[0],v=O[1],g=Object(n.useState)(!1),N=Object(p.a)(g,2),C=N[0],E=N[1],F=function(){var e=Object(u.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_(t);case 3:0===(a=e.sent).length&&(E(!0),setTimeout((function(){return E(!1)}),3e3)),d((function(e){return[].concat(Object(o.a)(e),Object(o.a)(a))})),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),c(!0),setTimeout((function(){return c(!1)}),3e3);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){F(x)}),[x]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(y,{}),Object(b.jsxs)("div",{className:"starter",children:[Object(b.jsxs)(j.d,{children:[Object(b.jsx)(j.b,{path:"*",element:Object(b.jsx)(h,{})}),Object(b.jsx)(j.b,{path:"/",element:Object(b.jsx)(m,{heroes:i,currentPage:x,onPageChange:v})}),Object(b.jsx)(j.b,{path:"/home",element:Object(b.jsx)(j.a,{to:"/",replace:!0})}),Object(b.jsx)(j.b,{path:"/create",element:Object(b.jsx)(k,{})}),Object(b.jsx)(j.b,{path:":nickname",element:Object(b.jsx)(w,{})}),Object(b.jsx)(j.b,{path:":nickname/edit",element:Object(b.jsx)(S,{})})]}),a&&Object(b.jsx)("h1",{children:"Error"}),C&&Object(b.jsx)("h1",{children:"No More Heroes"})]})]})};r.a.render(Object(b.jsx)(s.a,{children:Object(b.jsx)(C,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.464febec.chunk.js.map