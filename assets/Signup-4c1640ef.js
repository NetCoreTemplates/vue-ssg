import{f as V,y as N,L as k,k as m,g as C,q as S,r as i,o as L,d as U,w as v,b as s,a,e as T,m as B,s as r,M as E,N as I,O as z,P as O}from"./app-4ed2a3eb.js";import{_ as R}from"./AppPage.vue_vue_type_script_setup_true_lang-81c23aba.js";import"./AppBreadcrumb.vue_vue_type_script_setup_true_lang-20ea0690.js";import"./home-60a608b4.js";const j=["onSubmit"],F={class:"shadow overflow-hidden sm:rounded-md"},M={class:"px-4 py-5 bg-white space-y-6 sm:p-6"},$={class:"flex flex-col gap-y-4"},q={class:"pt-5 px-4 py-3 bg-gray-50 text-right sm:px-6"},Q={class:"flex justify-end"},Y={class:"flex mt-8 ml-8"},A=s("h3",{class:"mr-4 leading-8 text-gray-500"},"Quick Links",-1),D={class:"relative z-0 inline-flex shadow-sm rounded-md"},X=V({__name:"Signup",setup(G){const _=N(),{user:y}=k(),u=m(""),c=m(""),p=m(""),f=m(""),w=C(),h=S(()=>{y.value&&(w.push(z(w)??"/"),O(h))});function b(n){let e=r.leftPart(n,"@"),l=r.rightPart(r.leftPart(n,"."),"@");u.value=r.toPascalCase(e)+" "+r.toPascalCase(l),c.value=n,f.value=p.value="p@55wOrd"}async function P(n){const{displayName:e,userName:l,password:t,confirmPassword:d,autoLogin:g}=r.serializeToObject(n.currentTarget);if(t!==d){_.setError({fieldName:"confirmPassword",message:"Passwords do not match"});return}(await _.api(new E({displayName:e,email:l,password:t,confirmPassword:d,autoLogin:g}))).succeeded&&(await I(),await w.push("/signin"))}return(n,e)=>{const l=i("ErrorSummary"),t=i("TextInput"),d=i("CheckboxInput"),g=i("FormLoading"),x=i("PrimaryButton");return L(),U(R,{title:"Sign Up",class:"max-w-xl"},{default:v(()=>[s("form",{onSubmit:B(P,["prevent"])},[s("div",F,[a(l,{except:"displayName,userName,password,confirmPassword,autoLogin"}),s("div",M,[s("div",$,[a(t,{id:"displayName",help:"Your first and last name",modelValue:u.value,"onUpdate:modelValue":e[0]||(e[0]=o=>u.value=o)},null,8,["modelValue"]),a(t,{id:"userName",placeholder:"Email",help:"",modelValue:c.value,"onUpdate:modelValue":e[1]||(e[1]=o=>c.value=o)},null,8,["modelValue"]),a(t,{id:"password",type:"password",help:"6 characters or more",modelValue:p.value,"onUpdate:modelValue":e[2]||(e[2]=o=>p.value=o)},null,8,["modelValue"]),a(t,{id:"confirmPassword",type:"password",modelValue:f.value,"onUpdate:modelValue":e[3]||(e[3]=o=>f.value=o)},null,8,["modelValue"]),a(d,{id:"autoLogin"})])]),s("div",q,[s("div",Q,[a(g,{class:"flex-1"}),a(x,{class:"ml-3"},{default:v(()=>[T("Sign Up")]),_:1})])])])],40,j),s("div",Y,[A,s("span",D,[s("button",{type:"button",onClick:e[4]||(e[4]=o=>b("new@user.com")),class:"-ml-px relative inline-flex items-center px-4 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"}," new@user.com ")])])]),_:1})}}});export{X as default};
