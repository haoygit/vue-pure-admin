import{n as e,s as t,t as n}from"./objectSpread2-CaLVbc0v.js";import{t as r}from"./asyncToGenerator-BVcl5FgL.js";import{$n as i,D as a,Ht as o,Yt as s,_ as c,b as l,bt as u,et as d,ft as f,g as p,ir as m,k as h,mt as g,nr as _,o as v,rr as y,tt as b,u as x,v as S,vn as C,wt as w,y as T}from"./runtime-core.esm-bundler-CcQP0ylW.js";import{S as E,f as D,w as O}from"./runtime-dom.esm-bundler-CS3-MfZG.js";import{s as k}from"./dist-DjM7WQ8a.js";import{D as A}from"./index-DISUDWe9.js";import{n as j}from"./data-DjMfWg4f.js";var M=function(e){let t=Array.isArray(e)?[]:{};if(e&&typeof e==`object`)for(let n in e)e.hasOwnProperty(n)&&(t[n]=e[n]&&typeof e[n]==`object`?M(e[n]):e[n]);return t},N=h({name:`MouseMenu`,props:{appendToBody:{type:Boolean,default:!0},menuWidth:{type:Number,default:200},menuList:{type:Array,required:!0},menuHiddenFn:{type:Function},hasIcon:{type:Boolean,default:!1},iconType:{type:String,default:`font-icon`},menuWrapperCss:Object,menuItemCss:Object,el:{type:Object,required:!0},params:{type:[String,Number,Array,Object]},useLongPressInMobile:Boolean,longPressDuration:Number,longPressPreventDefault:[Function,Boolean],injectCloseListener:{type:Boolean,default:!0},customClass:String,disabled:{type:Function}},emits:[`open`,`close`],expose:[`show`,`close`,`showMenu`],setup(e,{emit:t}){let n=C(0),i=C(0),a=C(!1),s=C(0),c=C(0),l=C(!1),u=C(null),d=C([]),m=p(()=>e.menuList.some(e=>e.children&&e.children.length>0)),h=C(10),g=C();o(l,function(){var n=r(function*(n){if(n){var r;yield b();let n=g.value;e.menuWrapperCss&&Object.keys(e.menuWrapperCss).map(t=>{n.style.setProperty(`--menu-${t}`,e.menuWrapperCss&&e.menuWrapperCss[t])}),e.menuItemCss&&Object.keys(e.menuItemCss).map(t=>{n.style.setProperty(`--menu-item-${t}`,e.menuItemCss&&e.menuItemCss[t])});let i=(r=e.menuItemCss)==null||(r=r.arrowSize)==null?void 0:r.match(/\d+/);i?h.value=~~i[0]||10:h.value=10,n.style.setProperty(`--menu-item-arrowRealSize`,h.value/2+`px`),t(`open`,e.params,u.value,e.el)}else t(`close`,e.params,u.value,e.el)});return function(e){return n.apply(this,arguments)}}());let _=(t,n)=>{t.disabled||t.fn&&typeof t.fn==`function`&&t.fn(e.params,u.value,e.el,n)===!1||(l.value=!1)},v=(t,n)=>{if(!t.disabled){if(t.fn&&typeof t.fn==`function`&&!t.disabled){if(t.fn(e.params,u.value,e.el,n)===!1)return;a.value=!1}l.value=!1}},y=function(){var e=r(function*(e,t){if(t.children&&!t.disabled){a.value=!0,yield b();let t=e.currentTarget;if(!t)return;let{offsetWidth:r}=t,o=t.querySelector(`.__menu__sub__wrapper`);if(!o)return;let{offsetWidth:s,offsetHeight:c}=o,{innerWidth:l,innerHeight:u}=window,{top:d,left:f}=t.getBoundingClientRect();f+r+s>l-5?n.value=f-s+5:n.value=f+r,d+c>u-5?i.value=u-c:i.value=d+5}});return function(t,n){return e.apply(this,arguments)}}(),x=(e,t,n,r)=>e.map(e=>(e.children&&(e.children=x(e.children,t,n,r)),e.label&&typeof e.label==`function`&&(e.label=e.label(r,t,n)),e.tips&&typeof e.tips==`function`&&(e.tips=e.tips(r,t,n)),e.icon&&typeof e.icon==`function`&&(e.icon=e.icon(r,t,n)),e.hidden&&typeof e.hidden==`function`&&(e.hidden=e.hidden(r,t,n)),e.disabled&&typeof e.disabled==`function`&&(e.disabled=e.disabled(r,t,n)),e)),S=function(){var t=r(function*(t=0,n=0){if(u.value=document.elementFromPoint(t-1,n-1),e.menuHiddenFn?l.value=!e.menuHiddenFn(e.params,u.value,e.el):l.value=!0,!l.value)return;d.value=M(e.menuList),d.value=x(d.value,u.value,e.el,e.params),yield b();let{innerWidth:r,innerHeight:i}=window,a=g.value.offsetHeight,o=e.menuWidth||200;c.value=t+o+1>r?r-o-5:t+1,s.value=n+a+1>i?i-a-5:n+1});return function(){return t.apply(this,arguments)}}(),w=()=>{l.value=!1},T=p(()=>e.useLongPressInMobile&&`ontouchstart`in window?`touchstart`:`mousedown`),E=e=>{g.value&&!g.value.contains(e.currentTarget)&&(l.value=!1,document.oncontextmenu=null)};return o(()=>e.injectCloseListener,e=>{e?document.addEventListener(T.value,E):document.removeEventListener(T.value,E)},{immediate:!0}),f(()=>{document.removeEventListener(T.value,E)}),{subLeft:n,subTop:i,hoverFlag:a,menuTop:s,menuLeft:c,showMenu:l,clickDomEl:u,calcMenuList:d,arrowSize:h,hasSubMenu:m,MenuWrapper:g,handleMenuItemClick:_,handleSubMenuItemClick:v,handleMenuMouseEnter:y,show:S,close:w,clickEventKey:T}}}),P=[`onMouseenter`],F={key:0,class:`__menu__item-icon`},I=[`innerHTML`],L={class:`__menu__item-label`},R={class:`__menu__item-tips`},z={class:`__menu__item-arrow-after`},B={key:0,class:`__menu__item-icon`},V=[`innerHTML`],H={class:`__menu__sub__item-label`},U={class:`__menu__sub__item-tips`};function W(e,t,n,r,a,o){return g(),S(x,{to:`body`,disabled:!e.appendToBody},[e.showMenu?(g(),l(`div`,{key:0,ref:`MenuWrapper`,class:i([`__menu__wrapper`,e.customClass]),style:_({width:`${e.menuWidth}px`,top:`${e.menuTop}px`,left:`${e.menuLeft}px`})},[(g(!0),l(v,null,u(e.calcMenuList,(t,n)=>(g(),l(v,null,[!t.hidden&&!t.line?(g(),l(`div`,d({key:n,class:[`__menu__item`,t.disabled&&`disabled`,t.customClass]},{[m(e.clickEventKey)]:O(n=>e.handleMenuItemClick(t,n),[`stop`])},{onMouseenter:n=>e.handleMenuMouseEnter(n,t)}),[e.hasIcon?(g(),l(`div`,F,[e.iconType===`font-icon`?s((g(),l(`i`,{key:0,class:i(t.icon)},null,2)),[[E,t.icon]]):e.iconType===`svg-icon`?s((g(),l(`div`,{key:1,class:`__menu__item-icon-svg`,innerHTML:t.icon},null,8,I)),[[E,t.icon]]):e.iconType===`vnode-icon`?(g(),S(w(t.icon),{key:2})):T(`v-if`,!0)])):T(`v-if`,!0),c(`span`,L,y(t.label),1),c(`span`,R,y(t.tips||``),1),e.hasSubMenu?(g(),l(`span`,{key:1,class:i([`__menu__item-arrow`,{show:e.hasSubMenu&&t.children}]),style:_({width:e.arrowSize+`px`,height:e.arrowSize+`px`})},[s(c(`span`,z,null,512),[[E,e.hasSubMenu&&t.children]])],6)):T(`v-if`,!0),t.children&&t.children.length>0&&!t.disabled?s((g(),l(`div`,{key:2,class:`__menu__sub__wrapper`,style:_({width:`${e.menuWidth}px`,top:`${e.subTop}px`,left:`${e.subLeft}px`})},[(g(!0),l(v,null,u(t.children,(t,n)=>(g(),l(v,null,[!t.hidden&&!t.line?(g(),l(`div`,d({key:n,class:[`__menu__sub__item`,t.disabled&&`disabled`,t.customClass]},{[m(e.clickEventKey)]:O(n=>e.handleSubMenuItemClick(t,n),[`stop`])}),[e.hasIcon?(g(),l(`div`,B,[e.iconType===`font-icon`?s((g(),l(`i`,{key:0,class:i(t.icon)},null,2)),[[E,t.icon]]):e.iconType===`svg-icon`?s((g(),l(`div`,{key:1,class:`__menu__item-icon-svg`,innerHTML:t.icon},null,8,V)),[[E,t.icon]]):e.iconType===`vnode-icon`?(g(),S(w(t.icon),{key:2})):T(`v-if`,!0)])):T(`v-if`,!0),c(`span`,H,y(t.label),1),c(`span`,U,y(t.tips||``),1)],16)):T(`v-if`,!0),t.line?(g(),l(`div`,{key:n,class:`__menu__line`})):T(`v-if`,!0)],64))),256))],4)),[[E,e.hoverFlag]]):T(`v-if`,!0)],16,P)):T(`v-if`,!0),!t.hidden&&t.line?(g(),l(`div`,{key:n,class:`__menu__line`})):T(`v-if`,!0)],64))),256))],6)):T(`v-if`,!0)],8,[`disabled`])}function G(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>`u`)){var r=document.head||document.getElementsByTagName(`head`)[0],i=document.createElement(`style`);i.type=`text/css`,n===`top`&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}G(`.__menu__mask[data-v-3d21bc0a] {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
}
.__menu__wrapper[data-v-3d21bc0a] {
  --menu-background: #c8f2f0;
  --menu-boxShadow: 0 1px 5px #888;
  --menu-padding: 5px 0;
  --menu-borderRadius: 0;
  --menu-item-height: 30px;
  --menu-item-padding: 0 10px;
  --menu-item-iconSize: 20px;
  --menu-item-iconFontSize: 14px;
  --menu-item-iconColor: #484852;
  --menu-item-labelColor: #484852;
  --menu-item-labelFontSize: 14px;
  --menu-item-tipsColor: #889;
  --menu-item-tipsFontSize: 12px;
  --menu-item-arrowColor: #484852;
  --menu-item-disabledColor: #bcc;
  --menu-item-hoverBackground: rgba(255, 255, 255, 0.8);
  --menu-item-hoverIconColor: inherit;
  --menu-item-hoverLabelColor: inherit;
  --menu-item-hoverTipsColor: inherit;
  --menu-item-hoverArrowColor: inherit;
  --menu-lineColor: #ccc;
  --menu-lineMargin: 5px 0;
}
.__menu__wrapper[data-v-3d21bc0a] {
  position: fixed;
  width: 200px;
  background: var(--menu-background);
  box-shadow: var(--menu-boxShadow);
  padding: var(--menu-padding);
  border-radius: var(--menu-borderRadius);
  z-index: 99999;
}
.__menu__line[data-v-3d21bc0a],
.__menu__sub__line[data-v-3d21bc0a] {
  border-top: 1px solid var(--menu-lineColor);
  margin: var(--menu-lineMargin);
}
.__menu__item[data-v-3d21bc0a],
.__menu__sub__item[data-v-3d21bc0a] {
  display: flex;
  height: var(--menu-item-height);
  align-items: center;
  cursor: pointer;
  padding: var(--menu-item-padding);
}
.__menu__item .__menu__item-icon[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-icon[data-v-3d21bc0a] {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--menu-item-iconColor);
  width: var(--menu-item-iconSize);
  height: var(--menu-item-iconSize);
}
.__menu__item .__menu__item-icon i[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-icon i[data-v-3d21bc0a] {
  font-size: var(--menu-item-iconFontSize);
}
.__menu__item .__menu__item-icon .__menu__item-icon-svg[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-icon .__menu__item-icon-svg[data-v-3d21bc0a] {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.__menu__item .__menu__item-label[data-v-3d21bc0a],
.__menu__item .__menu__sub__item-label[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-label[data-v-3d21bc0a],
.__menu__sub__item .__menu__sub__item-label[data-v-3d21bc0a] {
  width: 100%;
  max-height: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  font-size: var(--menu-item-labelFontSize);
  color: var(--menu-item-labelColor);
  margin-right: 5px;
  overflow: hidden;
}
.__menu__item .__menu__item-tips[data-v-3d21bc0a],
.__menu__item .__menu__sub__item-tips[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-tips[data-v-3d21bc0a],
.__menu__sub__item .__menu__sub__item-tips[data-v-3d21bc0a] {
  font-size: var(--menu-item-tipsFontSize);
  color: var(--menu-item-tipsColor);
}
.__menu__item .__menu__item-arrow[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-arrow[data-v-3d21bc0a] {
  width: 10px;
  height: 10px;
  margin-left: 5px;
  position: relative;
}
.__menu__item.disabled[data-v-3d21bc0a],
.__menu__sub__item.disabled[data-v-3d21bc0a] {
  cursor: not-allowed;
}
.__menu__item.disabled .__menu__item-icon[data-v-3d21bc0a],
.__menu__item.disabled .__menu__item-label[data-v-3d21bc0a],
.__menu__item.disabled .__menu__sub__item-label[data-v-3d21bc0a],
.__menu__item.disabled .__menu__item-tips[data-v-3d21bc0a],
.__menu__item.disabled .__menu__sub__item-tips[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__item-icon[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__item-label[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__sub__item-label[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__item-tips[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__sub__item-tips[data-v-3d21bc0a] {
  color: var(--menu-item-disabledColor);
}
.__menu__item.disabled .__menu__item-arrow .__menu__item-arrow-after[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__item-arrow .__menu__item-arrow-after[data-v-3d21bc0a] {
  border-left: var(--menu-item-arrowRealSize) solid var(--menu-item-disabledColor);
}
.__menu__item[data-v-3d21bc0a]:not(.disabled):hover {
  background: var(--menu-item-hoverBackground);
}
.__menu__item:not(.disabled):hover .__menu__item-icon[data-v-3d21bc0a] {
  color: var(--menu-item-hoverIconColor);
}
.__menu__item:not(.disabled):hover .__menu__item-label[data-v-3d21bc0a] {
  color: var(--menu-item-hoverLabelColor);
}
.__menu__item:not(.disabled):hover .__menu__item-tips[data-v-3d21bc0a] {
  color: var(--menu-item-hoverTipsColor);
}
.__menu__item:not(.disabled):hover .__menu__item-arrow[data-v-3d21bc0a] {
  color: var(--menu-item-hoverArrowColor);
}
.__menu__sub__item[data-v-3d21bc0a]:not(.disabled):hover {
  background: var(--menu-item-hoverBackground);
}
.__menu__sub__item:not(.disabled):hover .__menu__sub__item-label[data-v-3d21bc0a] {
  color: var(--menu-item-hoverLabelColor);
}
.__menu__sub__item:not(.disabled):hover .__menu__sub__item-tips[data-v-3d21bc0a] {
  color: var(--menu-item-hoverTipsColor);
}
.__menu__item-icon[data-v-3d21bc0a] {
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  margin-right: 4px;
}
.__menu__item-arrow.show .__menu__item-arrow-after[data-v-3d21bc0a] {
  position: absolute;
  width: 0;
  height: 0;
  left: 8px;
  border-left: var(--menu-item-arrowRealSize) solid var(--menu-item-arrowColor);
  border-top: var(--menu-item-arrowRealSize) solid transparent;
  border-bottom: var(--menu-item-arrowRealSize) solid transparent;
}
.__menu__sub__wrapper[data-v-3d21bc0a] {
  position: fixed;
  visibility: hidden;
  width: 200px;
  background: var(--menu-background);
  box-shadow: var(--menu-boxShadow);
  padding: var(--menu-padding);
  border-radius: var(--menu-borderRadius);
}
.__menu__item:hover .__menu__sub__wrapper[data-v-3d21bc0a] {
  visibility: visible;
}`),N.render=W,N.__scopeId=`data-v-3d21bc0a`,N.__file=`packages/mouse-menu/mouse-menu.vue`;function K(e,t,n){let r=document.createElement(e);return r.setAttribute(`class`,t),n&&(r.innerText=n),r}N.install=e=>{e.component(N.name,N)};function q(e){var t;let n=`__mouse__menu__container`,r;r=document.querySelector(`.${n}`)?document.querySelector(`.${n}`):K(`div`,n);let i=a(N,e);return D(i,r),document.body.appendChild(r),(t=i.component)==null?void 0:t.proxy}var J=t({useColumns:()=>Y});e();function Y(){let e=C(k(j,!0)),t=[{label:`ID`,prop:`id`},{label:`日期`,prop:`date`},{label:`姓名`,prop:`name`}],r={menuList:[{label:({id:e})=>`ID为：${e}`,disabled:!0},{label:`修改`,tips:`Edit`,fn:t=>A(`您修改了第 ${e.value.findIndex(e=>e.id===t.id)+1} 行，数据为：${JSON.stringify(t)}`,{type:`success`})}]};function i(e,t,i){i.preventDefault();let{x:a,y:o}=i;q(n({el:i.currentTarget,params:e,menuWrapperCss:{background:`var(--el-bg-color)`},menuItemCss:{labelColor:`var(--el-text-color)`,hoverLabelColor:`var(--el-color-primary)`,hoverTipsColor:`var(--el-color-primary)`}},r)).show(a,o)}return{columns:t,dataList:e,showMouseMenu:i}}export{Y as n,J as t};