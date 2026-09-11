import{n as e,s as t,t as n}from"./objectSpread2-CaLVbc0v.js";import{Ut as r,ct as i,gn as a,vn as o}from"./runtime-core.esm-bundler-CcQP0ylW.js";import{f as s,s as c}from"./dist-DjM7WQ8a.js";import{t as l}from"./data-DfK8rH-4.js";var u=t({useColumns:()=>d});e();function d(){let e=o([]),t=o(!0),u=o(`no`),d=o(`nohide`),f=o(`default`),p=o(`right`),m=[{type:`selection`,align:`left`,reserveSelection:!0,hide:()=>u.value===`no`},{label:`日期`,prop:`date`,hide:()=>d.value===`hideDate`},{label:`姓名`,prop:`name`,hide:()=>d.value===`hideName`},{label:`地址`,prop:`address`,hide:()=>d.value===`hideAddress`}],h=a({pageSize:10,currentPage:1,pageSizes:[10,15,20],total:0,align:`right`,background:!0,size:`default`}),g=a({text:`正在加载第一页...`,viewBox:`-10, -10, 50, 50`,spinner:`
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `});function _(e){h.size=e}function v(e){}function y(e){g.text=`正在加载第${e}页...`,t.value=!0,s(600).then(()=>{t.value=!1})}return r(()=>{h.align=p.value}),i(()=>{s(600).then(()=>{let r=[];Array.from({length:6}).forEach(()=>{r.push(c(l,!0))}),r.flat(1/0).forEach((t,r)=>{e.value.push(n({id:r},t))}),h.total=e.value.length,t.value=!1})}),{loading:t,columns:m,dataList:e,select:u,hideVal:d,tableSize:f,pagination:h,loadingConfig:g,paginationAlign:p,onChange:_,onSizeChange:v,onCurrentChange:y}}export{d as n,u as t};