import{v as e}from"./app-b230772f.js";const n=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),c=t=>t?n.format(t):"",f=t=>t?e.toDateFmt(t):"",s=t=>e.dateFmt(t).replace(/\//g,"-");function i(t){return t?(Object.keys(t).forEach(a=>{let r=t[a];typeof r=="string"&&r.startsWith("/Date")&&(t[a]=s(e.toDate(r)))}),t):{}}export{f as a,s as d,c as f,i as s};
