(this["webpackJsonpmodulo-3-leccion-02-organizar-ficheros-y-carpetas"]=this["webpackJsonpmodulo-3-leccion-02-organizar-ficheros-y-carpetas"]||[]).push([[0],{22:function(e,n,t){},24:function(e,n,t){},25:function(e,n,t){},26:function(e,n,t){},27:function(e,n,t){},28:function(e,n,t){},34:function(e,n,t){},35:function(e,n,t){},36:function(e,n,t){"use strict";t.r(n);var c=t(1),a=t.n(c),r=t(16),i=t.n(r),s=t(10),l=(t(22),t.p+"static/media/Rick_and_Morty_-_logo_(English).de13d484.png"),o=t(0),u=function(){return Object(o.jsx)("header",{id:"header",className:"header",children:Object(o.jsx)("img",{className:"header__logo",title:"Logo Rick y Morty",alt:"Logo Rick y Morty",src:l})})};t(24);var j=function(e){return Object(o.jsx)("label",{children:Object(o.jsx)("input",{placeholder:"Ej. Rick Sanchez",onChange:function(n){e.handleInputChange({key:"name",value:n.target.value})},type:"text",value:e.name})})},d=function(e){return Object(o.jsxs)("label",{htmlFor:"gender",children:["G\xe9nero:",Object(o.jsxs)("select",{name:"gender",id:"gender",onChange:function(n){e.handleInputChange({key:"gender",value:n.target.value})},children:[Object(o.jsx)("option",{value:"All",children:"All"}),Object(o.jsx)("option",{value:"Female",children:"Female"}),Object(o.jsx)("option",{value:"Male",children:"Male"}),Object(o.jsx)("option",{value:"Genderless",children:"Genderless"}),Object(o.jsx)("option",{value:"unknown",children:"unknown"})]})]})},h=function(e){return Object(o.jsxs)("form",{children:[Object(o.jsx)(j,{handleInputChange:e.handleInputChange}),Object(o.jsx)(d,{handleInputChange:e.handleInputChange})]})},b=(t(25),function(e){return Object(o.jsx)("button",{children:"Inicio de la p\xe1gina"})});t(26);var m=function(e){return Object(o.jsx)("article",{children:Object(o.jsx)("p",{children:"Aqui va la tarjeta con detalles del personaje"})})},O=(t(27),t(28),t(8));var p=function(e){return Object(o.jsx)("article",{className:"main__list-article",children:Object(o.jsxs)(O.b,{to:"/character/".concat(e.character.id),children:[Object(o.jsx)("img",{className:"main__list-articleImg",src:e.character.image,alt:"Foto de ".concat(e.character.name),title:"Foto de ".concat(e.character.name)}),Object(o.jsxs)("h2",{className:"main__list-articleName",children:["Nombre:",e.character.name]}),Object(o.jsxs)("h3",{className:"main__list-articleSpecie",children:["Especie:",e.character.specie]})]})})},f=function(e){var n=e.characters.map((function(e){return Object(o.jsx)("li",{className:"main__list-item",children:Object(o.jsx)(p,{character:e})},e.id)}));return Object(o.jsx)("ul",{className:"main__list",children:n})};t(34);var g=function(){return Object(o.jsx)(o.Fragment,{children:" "})},x=function(){return fetch("https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{id:e.id,name:e.name,status:e.status,specie:e.species,origin:e.origin.name,image:e.image,episodes:e.episode.length,gender:e.gender}}))}))},v=t(2),_=function(){var e=Object(c.useState)([]),n=Object(s.a)(e,2),t=n[0],a=n[1],r=Object(c.useState)(""),i=Object(s.a)(r,2),l=i[0],j=i[1],d=Object(c.useState)("All"),O=Object(s.a)(d,2),p=O[0],_=O[1];Object(c.useEffect)((function(){x().then((function(e){return a(e)}))}),[]);var y=t.filter((function(e){return e.name.toUpperCase().includes(l.toUpperCase())})).filter((function(e){return"All"===p||e.gender===p}));return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(u,{}),Object(o.jsxs)("main",{children:[Object(o.jsx)(h,{handleInputChange:function(e){"name"===e.key?j(e.value):"gender"===e&&_(e.value)}}),Object(o.jsx)(f,{characters:y}),Object(o.jsx)(b,{}),Object(o.jsx)(m,{})]}),Object(o.jsx)(g,{}),Object(o.jsx)(v.c,{children:Object(o.jsx)(v.a,{path:"/character/:id",render:function(e){var n=e.match.params.id,c=t.find((function(e){return e.id===n}));return Object(o.jsx)(m,{character:c})}})})]})};t(35);i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(O.a,{children:Object(o.jsx)(_,{})})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.9d358c9b.chunk.js.map