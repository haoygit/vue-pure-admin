import{n as e,t}from"./objectSpread2-CaLVbc0v.js";import{D as n,E as r,St as i,_ as a,k as o,mt as s,qt as c,rr as l,v as u,vn as d}from"./runtime-core.esm-bundler-CcQP0ylW.js";import{t as f}from"./Vditor-Br5tHQFE.js";e();var p={class:`card-header`},m={class:`font-medium`},h={class:`mb-2!`},g={class:`text-red-500`},_=o(t(t({},{name:`Markdown`}),{},{__name:`index`,setup(e){let t=d(`
\`\`\`ts
function sayHello(): void {
	console.log("Hello, World!");
}
sayHello();
\`\`\`
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
`);return(e,o)=>{let d=i(`el-link`),_=i(`el-card`);return s(),u(_,{shadow:`never`},{header:c(()=>[a(`div`,p,[a(`span`,m,[o[2]||(o[2]=r(` Markdown组件，采用开源的 `,-1)),n(d,{href:`https://b3log.org/vditor/`,target:`_blank`,style:{margin:`0 4px 5px`,"font-size":`16px`}},{default:c(()=>[...o[1]||(o[1]=[r(` Vditor `,-1)])]),_:1})])]),n(d,{class:`mt-2`,href:`https://github.com/pure-admin/vue-pure-admin/blob/main/src/views/markdown`,target:`_blank`},{default:c(()=>[...o[3]||(o[3]=[r(` 代码位置 src/views/markdown `,-1)])]),_:1})]),default:c(()=>[a(`h1`,h,[o[4]||(o[4]=r(` 双向绑定：`,-1)),a(`span`,g,l(t.value),1)]),n(f,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=e=>t.value=e),options:{height:560,outline:{enable:!0,position:`right`}}},null,8,[`modelValue`])]),_:1})}}}));export{_ as default};