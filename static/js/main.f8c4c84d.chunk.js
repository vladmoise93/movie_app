(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],[,,,,function(e,t,n){e.exports=n(11)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(3),o=n.n(r),l=(n(9),n(1));n(10);var u=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(""),u=Object(l.a)(o,2),i=u[0],s=u[1],m=Object(a.useState)([]),p=Object(l.a)(m,2),f=p[0],h=p[1],b="https://www.omdbapi.com/?&apikey=".concat("`12c53eb6`".substring(1,"`12c53eb6`".length-1),"&s=").concat(i);return Object(a.useEffect)((function(){fetch(b).then((function(e){return e.json()})).then((function(e){return h(e.Search)})).catch((function(e){return console.log(e.message)}))}),[b]),c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"Hello world"),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),s(n)}},c.a.createElement("label",{htmlFor:"searchBox"}," Search "),c.a.createElement("input",{type:"text",name:"searchBox",placeholder:"Search",value:n,onChange:function(e){return function(e){r(e.target.value)}(e)}}),f?f.map((function(e){return"N/A"!==e.Poster?c.a.createElement("div",{key:e.imdbID},c.a.createElement("img",{src:e.Poster,alt:""}),c.a.createElement("div",null,e.Title)):""})):""))};o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(u,null)),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.f8c4c84d.chunk.js.map