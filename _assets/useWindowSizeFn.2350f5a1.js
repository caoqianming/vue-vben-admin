import{cF as e,cG as n}from"./index.741c7e80.js";import{u as s}from"./useDebounce.87ee1be2.js";function t(t,i=150,o){let r=()=>{t()};const[c,m]=s(r,i,o);r=c;const a=()=>{o&&o.immediate&&r(),window.addEventListener("resize",r)},d=()=>{window.removeEventListener("resize",r),m()};return e((()=>{a()})),n((()=>{d()})),[a,d]}export{t as u};