(this["webpackJsonpreact-warmup"]=this["webpackJsonpreact-warmup"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var r=n(3),c=n.n(r),a=n(4),o=n(1),s=n.n(o),i=n(5),u=n.n(i),j=n(6),h=n(0),d=function(e){var t=e.jokes,n=function(){return t[Math.floor(Math.random()*t.length)]},r=Object(o.useState)(n()),c=Object(j.a)(r,2),a=c[0],s=c[1];return Object(h.jsxs)("div",{className:"content-page",children:[Object(h.jsxs)("div",{className:"joke-area",children:[Object(h.jsx)("h1",{id:"type",children:a.type}),Object(h.jsx)("p",{id:"joke",children:a.joke}),Object(h.jsx)("p",{id:"answer",children:a.answer})]}),Object(h.jsx)("button",{id:"random-joke",onClick:function(){return s(n())},children:"JOKE"})]})},l=(n(13),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),a(e),o(e)}))});Object(a.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://raw.githubusercontent.com/Blagues-API/blagues-api/master/blagues.json").then((function(e){return e.text()})).then((function(e){return t=JSON.parse(e)})).catch((function(e){return console.log("error",e)}));case 2:u.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(d,{jokes:t})}),document.getElementById("root")),l();case 4:case"end":return e.stop()}}),e)})))()}},[[14,1,2]]]);
//# sourceMappingURL=main.537ea156.chunk.js.map