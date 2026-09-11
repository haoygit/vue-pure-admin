import{n as e,s as t,t as n}from"./objectSpread2-CaLVbc0v.js";import{ct as r,gn as i,vn as a}from"./runtime-core.esm-bundler-CcQP0ylW.js";import{f as o,s}from"./dist-DjM7WQ8a.js";import{t as c}from"./data-Cz7ZUUKL.js";var l=t({useColumns:()=>u});e();function u(){let e=a([]),t=a(!0),l=[{label:`日期`,prop:`date`},{label:`姓名`,prop:`name`},{label:`地址`,prop:`address`}],u=i({pageSize:20,currentPage:1,pageSizes:[20,40,60],total:0,align:`right`,background:!0,size:`default`}),d=i({text:`正在加载第一页...`,viewBox:`-10, -10, 50, 50`,spinner:`
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `}),f={offsetBottom:110};function p(e){}function m(e){d.text=`正在加载第${e}页...`,t.value=!0,o(600).then(()=>{t.value=!1})}return r(()=>{o(600).then(()=>{let r=[];Array.from({length:6}).forEach(()=>{r.push(s(c,!0))}),r.flat(1/0).forEach((t,r)=>{e.value.push(n({id:r},t))}),u.total=e.value.length,t.value=!1})}),{loading:t,columns:l,dataList:e,pagination:u,loadingConfig:d,adaptiveConfig:f,onSizeChange:p,onCurrentChange:m}}export{u as n,l as t};