import{o as s,c as n,b as e,f as h,x,r as f,a,w as o,F as g,h as p,d as y,i as _,t as l}from"./app-4ed2a3eb.js";import{_ as v}from"./home-60a608b4.js";const k={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},w=e("path",{fill:"currentColor",d:"M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.42Z"},null,-1),B=[w];function C(t,c){return s(),n("svg",k,B)}const b={name:"mdi-chevron-right",render:C},L={class:"flex","aria-label":"Breadcrumb"},M={role:"list",class:"flex items-center sm:space-x-4 flex-wrap sm:flex-nowrap"},$={class:"text-gray-600 hover:text-gray-700"},F=e("span",{class:"sr-only"},"Home",-1),H={class:"flex items-center"},N={class:"ml-1 sm:ml-4 sm:text-2xl text-gray-500 hover:text-gray-700"},V={class:"flex items-center"},A=["aria-current"],D=["aria-current"],j=h({__name:"AppBreadcrumb",props:{crumbs:{default:()=>[]},name:null,href:null,current:{type:Boolean,default:!0}},setup(t){const{current:c}=t,i=x(()=>c?"page":void 0);return(E,R)=>{const d=v,r=f("router-link"),m=b;return s(),n("nav",L,[e("ol",M,[e("li",null,[e("div",null,[a(r,{to:"/"},{default:o(()=>[e("a",$,[a(d,{class:"flex-shrink-0 h-10 w-10","aria-hidden":"true"}),F])]),_:1})])]),(s(!0),n(g,null,p(t.crumbs,u=>(s(),n("li",null,[e("div",H,[a(m,{class:"flex-shrink-0 h-8 w-8 text-gray-400","aria-hidden":"true"}),a(r,{to:u.href},{default:o(()=>[e("a",N,l(u.name),1)]),_:2},1032,["to"])])]))),256)),e("li",null,[e("div",V,[a(m,{class:"flex-shrink-0 h-8 w-8 text-gray-400","aria-hidden":"true"}),t.href?(s(),y(r,{key:0,to:t.href},{default:o(()=>[e("a",{class:"ml-1 sm:ml-4 sm:text-2xl text-gray-500 hover:text-gray-700","aria-current":_(i)},l(t.name),9,A)]),_:1},8,["to"])):(s(),n("span",{key:1,class:"ml-1 sm:ml-4 sm:text-3xl text-gray-700","aria-current":_(i)},l(t.name),9,D))])])])])}}});export{j as _,b as a};
