(this["webpackJsonpmodulo-3-leccion-02-organizar-ficheros-y-carpetas"]=this["webpackJsonpmodulo-3-leccion-02-organizar-ficheros-y-carpetas"]||[]).push([[0],{15:function(e,t,a){},23:function(e,t,a){},25:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(17),i=a.n(r),s=a(10),l=(a(23),a.p+"static/media/Rick_and_Morty_-_logo_(English).de13d484.png"),o=a(0),j=function(){return Object(o.jsx)("header",{id:"header",className:"header",children:Object(o.jsx)("img",{className:"header__logo",title:"Logo Rick y Morty",alt:"Logo Rick y Morty",src:l})})};a(15);var d=function(e){return Object(o.jsxs)("label",{className:"main__form-label",children:["Filter by Name",Object(o.jsx)("input",{className:"main__form-input",placeholder:"Example: Rick Sanchez",onChange:function(t){e.handleInputChange({key:"name",value:t.target.value})},type:"text",value:e.name})]})},h=function(e){return Object(o.jsxs)("label",{className:"main__form-label",htmlFor:"gender",children:["and Gender",Object(o.jsx)("br",{}),Object(o.jsxs)("select",{name:"gender",id:"gender",onChange:function(t){e.handleInputChange({key:"gender",value:t.target.value})},children:[Object(o.jsx)("option",{value:"All",children:"All"}),Object(o.jsx)("option",{value:"Female",children:"Female"}),Object(o.jsx)("option",{value:"Male",children:"Male"}),Object(o.jsx)("option",{value:"Genderless",children:"Genderless"}),Object(o.jsx)("option",{value:"unknown",children:"unknown"})]})]})},u=function(e){return Object(o.jsxs)("form",{className:"main__form",children:[Object(o.jsx)(d,{handleInputChange:e.handleInputChange}),Object(o.jsx)(h,{handleInputChange:e.handleInputChange})]})},m=(a(25),a(7));var b=function(e){return Object(o.jsxs)("article",{className:"main__detail",children:[Object(o.jsx)(m.b,{className:"main__detail-link",title:"Volver a resultados",to:"/",children:"Volver"}),Object(o.jsx)("img",{className:"main__detail-img",src:e.character.image,alt:"Foto de ".concat(e.character.name)}),Object(o.jsxs)("ul",{children:[Object(o.jsxs)("li",{children:["Name:",e.character.name," "]}),Object(o.jsxs)("li",{children:["Gender:",e.character.gender," "]}),Object(o.jsxs)("li",{children:["Specie:",e.character.specie," "]}),Object(o.jsxs)("li",{children:["Origin: ",e.character.origin]}),Object(o.jsxs)("li",{children:["Episodes:",e.character.episodes]}),Object(o.jsxs)("li",{children:["Status:",e.character.status]})]})]})};a(31),a(32);var f=function(e){return Object(o.jsx)("article",{className:"main__list-article",children:Object(o.jsxs)(m.b,{to:"/character/".concat(e.character.id),children:[Object(o.jsx)("img",{className:"main__list-articleImg",src:e.character.image,alt:"Foto de ".concat(e.character.name),title:"Foto de ".concat(e.character.name)}),Object(o.jsxs)("h2",{className:"main__list-articleName",children:["Name: ",e.character.name]}),Object(o.jsxs)("h3",{className:"main__list-articleSpecie",children:["Specie: ",e.character.specie]})]})})},O=function(e){var t=e.characters.map((function(e){return Object(o.jsx)("li",{className:"main__list-item",children:Object(o.jsx)(f,{character:e})},e.id)}));return Object(o.jsx)("ul",{className:"main__list",children:t})},x=(a(33),function(){return Object(o.jsxs)("footer",{className:"footer",children:[Object(o.jsx)("small",{className:"footer__text",children:"Barcelona-2020 @eugedallasta"}),Object(o.jsxs)("nav",{children:[Object(o.jsx)("a",{href:"https://github.com/eugedallasta",className:"footer__github",title:"GitHub",target:"_blank",rel:"noreferrer",children:Object(o.jsx)("i",{className:"fab fa-github footer__github--icon"})}),Object(o.jsx)("a",{href:"https://twitter.com/eugedallasta",className:"footer__twitter",title:"Twitter",target:"_blank",rel:"noreferrer",children:Object(o.jsx)("i",{className:"fab fa-twitter footer__twitter--icon"})}),Object(o.jsx)("a",{href:"https://www.linkedin.com/in/eugenia-dallasta-32753318a/",className:"footer__linkedin",title:"Linkedin",target:"_blank",rel:"noreferrer",children:Object(o.jsx)("i",{className:"fab fa-linkedin footer__linkedin--icon"})})]})]})}),g=function(){return fetch("https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{id:e.id,name:e.name,status:e.status,specie:e.species,origin:e.origin.name,image:e.image,episodes:e.episode.length,gender:e.gender}}))}))},p=a(2),_=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),i=Object(s.a)(r,2),l=i[0],d=i[1],h=Object(n.useState)("All"),m=Object(s.a)(h,2),f=m[0],_=m[1];Object(n.useEffect)((function(){g().then((function(e){return c(e)}))}),[]);var N=function(e){"name"===e.key?d(e.value):"gender"===e.key&&_(e.value)},k=a.filter((function(e){return e.name.toUpperCase().includes(l.toUpperCase())})).filter((function(e){return"All"===f||e.gender===f}));return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(j,{}),Object(o.jsx)("main",{}),Object(o.jsx)(x,{}),Object(o.jsxs)(p.c,{children:[Object(o.jsx)(p.a,{exact:!0,path:"/",render:function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(u,{handleInputChange:N}),Object(o.jsx)(O,{characters:k})]})}}),Object(o.jsx)(p.a,{path:"/character/:id",render:function(e){var t=parseInt(e.match.params.id),n=a.find((function(e){return e.id===t}));return Object(o.jsx)(b,{character:n})}})]})]})};a(34);i.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(m.a,{children:Object(o.jsx)(_,{})})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.335db79a.chunk.js.map