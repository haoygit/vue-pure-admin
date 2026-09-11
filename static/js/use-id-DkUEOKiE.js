import{J as e,L as t,On as n}from"./runtime-core.esm-bundler-CcQP0ylW.js";import{a as r,n as i}from"./dist-C6YJz8zZ.js";import{n as a}from"./use-namespace-BlrZRuUm.js";import{s as o}from"./style-Dci0dTnJ.js";var s={prefix:Math.floor(Math.random()*1e4),current:0},c=Symbol(`elIdInjection`),l=()=>t()?e(c,s):s,u=e=>{let t=l();!r&&t===s&&o(`IdInjection`,`Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);let c=a();return i(()=>n(e)||`${c.value}-id-${t.prefix}-${t.current++}`)};export{l as n,u as t};