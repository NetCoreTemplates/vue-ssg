import{_ as N}from"./vue-25f3301b.js";import{_ as A}from"./SrcLink.vue_vue_type_script_setup_true_lang-10231d90.js";import{_ as H}from"./pineapple-74af111c.js";import{o as d,c as g,b as s,A as L,k as x,x as k,n as v,B as S,T as D,E as j,G as I,H as K,I as Z,f as z,r as E,d as T,w as f,a as u,i as l,J as O,h as U,F as G,e as p,t as F,p as V,m as M,K as J,j as P}from"./app-34c2d944.js";import{_ as Q}from"./AppPage.vue_vue_type_script_setup_true_lang-56aaab22.js";import"./AppBreadcrumb.vue_vue_type_script_setup_true_lang-6e912670.js";import"./home-591d3302.js";const W={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},q=s("path",{fill:"currentColor",d:"M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9M7 6h10v13H7V6m2 2v9h2V8H9m4 0v9h2V8h-2Z"},null,-1),R=[q];function X(o,e){return d(),g("svg",W,R)}const Y={name:"mdi-trash-can-outline",render:X},ee={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},te=s("path",{fill:"currentColor",d:"M12 20a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"},null,-1),se=[te];function oe(o,e){return d(),g("svg",ee,se)}const ne={name:"mdi-checkbox-blank-circle-outline",render:oe},ie={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},ae=s("path",{fill:"currentColor",d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z"},null,-1),le=[ae];function re(o,e){return d(),g("svg",ie,le)}const de={name:"mdi-check-circle",render:re},ce=L("todos",()=>{const o=x([]),e=x(""),c=x("all"),_=x(),i=k(()=>o.value.filter(t=>t.isFinished)),m=k(()=>o.value.filter(t=>!t.isFinished)),w=k(()=>c.value=="finished"?i.value:c.value=="unfinished"?m.value:o.value),h=async t=>{_.value=t;const a=await v.api(new S);a.succeeded&&(o.value=a.response.results??[])};return{error:_,newTodo:e,filter:c,finishedTodos:i,unfinishedTodos:m,filteredTodos:w,refreshTodos:h,addTodo:async()=>{o.value.push(new D({text:e.value}));let t=await v.api(new j({text:e.value}));t.succeeded&&(e.value=""),await h(t.error)},removeTodo:async t=>{o.value=o.value.filter(r=>r.id!=t);let a=await v.api(new I({id:t}));await h(a.error)},removeFinishedTodos:async()=>{let t=o.value.filter(r=>r.isFinished).map(r=>r.id);if(t.length==0)return;o.value=o.value.filter(r=>!r.isFinished);let a=await v.api(new K({ids:t}));await h(a.error)},toggleTodo:async t=>{const a=o.value.find(B=>B.id==t);a.isFinished=!a.isFinished;let r=await v.api(new Z(a));await h(r.error)},changeFilter:t=>c.value=t}}),ue={class:"mb-3"},he={class:"bg-white shadow overflow-hidden rounded-md"},_e={role:"list",class:"divide-y divide-gray-200"},me=["onClick"],fe={class:"flex items-center h-6"},pe={class:"ml-3 flex-grow"},ve={class:"mt-4 flex justify-between"},ge={class:"text-gray-400 leading-8 mr-4"},xe=s("span",{class:"hidden sm:inline"},"item(s)",-1),Te={class:"inline-flex shadow-sm rounded-md"},we={class:"leading-8 ml-4"},be=s("span",{class:"hidden sm:inline"},"completed",-1),ke={class:"mt-4 text-center text-gray-400 flex justify-center -ml-6"},Ne=z({__name:"TodoMvc",setup(o){const e=ce();e.refreshTodos();const c=(_,i)=>J("a",{href:"#",class:`border-gray-200 text-sm font-medium px-4 py-2 hover:bg-gray-100 
      focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 
      dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white
      ${_.filter==e.filter?"text-blue-700 dark:bg-blue-600":"text-gray-900 hover:text-blue-700 dark:bg-gray-700"}`,onClick:m=>{m.preventDefault(),e.changeFilter(_.filter)}},i.slots);return(_,i)=>{const m=E("TextInput"),w=de,h=ne,y=Y,C=H,b=A,$=N;return d(),T(Q,{title:"Todos Application",class:"max-w-xl"},{default:f(()=>[s("div",ue,[u(m,{status:l(e).error,id:"Text",modelValue:l(e).newTodo,"onUpdate:modelValue":i[0]||(i[0]=n=>l(e).newTodo=n),placeholder:"What needs to be done?",label:"",onKeyup:i[1]||(i[1]=O(M(n=>l(e).addTodo(),["stop"]),["enter"]))},null,8,["status","modelValue"])]),s("div",he,[s("ul",_e,[(d(!0),g(G,null,U(l(e).filteredTodos,n=>(d(),g("li",{key:n.id,class:"px-6 py-4"},[s("div",{class:"relative flex items-start",onClick:t=>l(e).toggleTodo(n.id)},[s("div",fe,[n.isFinished?(d(),T(w,{key:0,class:"text-green-600"})):(d(),T(h,{key:1}))]),s("div",pe,[s("label",{class:V({"line-through":n.isFinished})},F(n.text),3)]),s("div",null,[n.isFinished?(d(),T(y,{key:0,class:"cursor-pointer",onClick:t=>l(e).removeTodo(n.id)},null,8,["onClick"])):P("",!0)])],8,me)]))),128))])]),s("div",ve,[s("div",ge,[p(F(l(e).unfinishedTodos.length)+" ",1),xe,p(" left ")]),s("div",Te,[u(c,{class:"rounded-l-lg border",filter:"all"},{default:f(()=>[p(" All ")]),_:1}),u(c,{class:"border-t border-b",filter:"unfinished"},{default:f(()=>[p(" Active ")]),_:1}),u(c,{class:"rounded-r-md border",filter:"finished"},{default:f(()=>[p(" Completed ")]),_:1})]),s("div",we,[s("a",{href:"#",class:V({invisible:l(e).finishedTodos.length===0}),onClick:i[2]||(i[2]=M(n=>l(e).removeFinishedTodos(),["prevent"]))},[p(" clear "),be],2)])]),s("div",ke,[u(b,{href:"https://github.com/NetCoreTemplates/vue-ssg/blob/main/ui/src/stores/todos.ts"},{default:f(()=>[u(C,{class:"w-5 h-5 inline-flex"})]),_:1}),u(b,{href:"https://github.com/NetCoreTemplates/vue-ssg/blob/main/ui/src/pages/TodoMvc.vue"},{default:f(()=>[u($,{class:"w-4 h-4 inline-flex"})]),_:1})])]),_:1})}}});export{Ne as default};