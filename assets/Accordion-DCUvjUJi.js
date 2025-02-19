import{r as B,R as u}from"./jsx-runtime-ByGpHSPZ.js";import{f as x,u as w,n as X,B as S,a as Y,c as Z,r as V,d as ee}from"./factory-CAXpoK4s.js";import{c as te,g as F}from"./create-scoped-keydown-handler-DsNfVizA.js";import{c as z}from"./create-safe-context-jSuPt_P6.js";import{A as K}from"./AccordionChevron-Cbiw1tIz.js";import{U as oe}from"./UnstyledButton-DaEZdWNO.js";import{g as ne}from"./get-style-object-DUJZA7T_.js";import{r as re}from"./index-CMx3RsMM.js";import{a as ae,u as se}from"./use-reduced-motion-yJY9mgkS.js";import{m as ie}from"./use-merged-ref-BJm5sttg.js";import{u as ce}from"./use-id-CBFaeZXz.js";import{u as le}from"./use-uncontrolled-DgPl9ViR.js";function de(t){if(!t||typeof t=="string")return 0;const s=t/36;return Math.round((4+15*s**.25+s/5)*10)}function D(t){return t!=null&&t.current?t.current.scrollHeight:"auto"}const I=typeof window<"u"&&window.requestAnimationFrame;function me({transitionDuration:t,transitionTimingFunction:s="ease",onTransitionEnd:r=()=>{},opened:a}){const d=B.useRef(null),i=0,f={display:"none",height:0,overflow:"hidden"},[m,h]=B.useState(a?{}:f),c=n=>{re.flushSync(()=>h(n))},o=n=>{c(l=>({...l,...n}))};function v(n){const l=t||de(n);return{transition:`height ${l}ms ${s}, opacity ${l}ms ${s}`}}ae(()=>{typeof I=="function"&&I(a?()=>{o({willChange:"height",display:"block",overflow:"hidden"}),I(()=>{const n=D(d);o({...v(n),height:n})})}:()=>{const n=D(d);o({...v(n),willChange:"height",height:n}),I(()=>o({height:i,overflow:"hidden"}))})},[a]);const A=n=>{if(!(n.target!==d.current||n.propertyName!=="height"))if(a){const l=D(d);l===m.height?c({}):o({height:l}),r()}else m.height===i&&(c(f),r())};function p({style:n={},refKey:l="ref",...e}={}){const b=e[l];return{"aria-hidden":!a,...e,[l]:ie(d,b),onTransitionEnd:A,style:{boxSizing:"border-box",...n,...m}}}return p}const ue={transitionDuration:200,transitionTimingFunction:"ease",animateOpacity:!0},W=x((t,s)=>{const{children:r,in:a,transitionDuration:d,transitionTimingFunction:i,style:f,onTransitionEnd:m,animateOpacity:h,...c}=w("Collapse",ue,t),o=X(),v=se(),p=(o.respectReducedMotion?v:!1)?0:d,n=me({opened:a,transitionDuration:p,transitionTimingFunction:i,onTransitionEnd:m});return p===0?a?u.createElement(S,{...c},r):null:u.createElement(S,{...n({style:{opacity:a||!h?1:0,transition:h?`opacity ${p}ms ${i}`:"none",...ne(f,o)},ref:s,...c})},r)});W.displayName="@mantine/core/Collapse";const[he,H]=z("Accordion component was not found in the tree"),[fe,j]=z("Accordion.Item component was not found in the tree");var pe={root:"m-9bdbb667",panel:"m-df78851f",content:"m-4ba554d4",itemTitle:"m-8fa820a0",control:"m-4ba585b8","control--default":"m-6939a5e9","control--contained":"m-4271d21b",label:"m-df3ffa0f",chevron:"m-3f35ae96",icon:"m-9bd771fe",item:"m-9bd7b098","item--default":"m-fe19b709","item--contained":"m-1f921b3b","item--filled":"m-2cdf939a","item--separated":"m-9f59b069"};const E=pe,ve={},M=x((t,s)=>{const{classNames:r,className:a,style:d,styles:i,vars:f,chevron:m,icon:h,onClick:c,onKeyDown:o,children:v,disabled:A,mod:p,...n}=w("AccordionControl",ve,t),{value:l}=j(),e=H(),b=e.isItemActive(l),O=typeof e.order=="number",N=`h${e.order}`,P=u.createElement(oe,{...n,...e.getStyles("control",{className:a,classNames:r,style:d,styles:i,variant:e.variant}),unstyled:e.unstyled,mod:["accordion-control",{active:b,"chevron-position":e.chevronPosition,disabled:A},p],ref:s,onClick:R=>{c==null||c(R),e.onChange(l)},type:"button",disabled:A,"aria-expanded":b,"aria-controls":e.getRegionId(l),id:e.getControlId(l),onKeyDown:te({siblingSelector:"[data-accordion-control]",parentSelector:"[data-accordion]",activateOnFocus:!1,loop:e.loop,orientation:"vertical",onKeyDown:o})},u.createElement(S,{component:"span",mod:{rotate:!e.disableChevronRotation&&b,position:e.chevronPosition},...e.getStyles("chevron",{classNames:r,styles:i})},m||e.chevron),u.createElement("span",{...e.getStyles("label",{classNames:r,styles:i})},v),h&&u.createElement(S,{component:"span",mod:{"chevron-position":e.chevronPosition},...e.getStyles("icon",{classNames:r,styles:i})},h));return O?u.createElement(N,{...e.getStyles("itemTitle",{classNames:r,styles:i})},P):P});M.displayName="@mantine/core/AccordionControl";M.classes=E;const ge={},T=x((t,s)=>{const{classNames:r,className:a,style:d,styles:i,vars:f,value:m,mod:h,...c}=w("AccordionItem",ge,t),o=H();return u.createElement(fe,{value:{value:m}},u.createElement(S,{ref:s,mod:[{active:o.isItemActive(m)},h],...o.getStyles("item",{className:a,classNames:r,styles:i,style:d,variant:o.variant}),...c}))});T.displayName="@mantine/core/AccordionItem";T.classes=E;const ye={},_=x((t,s)=>{const{classNames:r,className:a,style:d,styles:i,vars:f,children:m,...h}=w("AccordionPanel",ye,t),{value:c}=j(),o=H();return u.createElement(W,{ref:s,...o.getStyles("panel",{className:a,classNames:r,style:d,styles:i}),...h,in:o.isItemActive(c),transitionDuration:o.transitionDuration??200,role:"region",id:o.getRegionId(c),"aria-labelledby":o.getControlId(c)},u.createElement("div",{...o.getStyles("content",{classNames:r,styles:i})},m))});_.displayName="@mantine/core/AccordionPanel";_.classes=E;const Ae={multiple:!1,disableChevronRotation:!1,chevronPosition:"right",variant:"default",chevron:u.createElement(K,null)},be=Z((t,{transitionDuration:s,chevronSize:r,radius:a})=>({root:{"--accordion-transition-duration":s===void 0?void 0:`${s}ms`,"--accordion-chevron-size":r===void 0?void 0:V(r),"--accordion-radius":a===void 0?void 0:ee(a)}}));function C(t){const s=w("Accordion",Ae,t),{classNames:r,className:a,style:d,styles:i,unstyled:f,vars:m,children:h,multiple:c,value:o,defaultValue:v,onChange:A,id:p,loop:n,transitionDuration:l,disableChevronRotation:e,chevronPosition:b,chevronSize:O,order:N,chevron:P,variant:R,radius:Se,...k}=s,$=ce(p),[g,q]=le({value:o,defaultValue:v,finalValue:c?[]:null,onChange:A}),G=y=>Array.isArray(g)?g.includes(y):y===g,J=y=>{const L=Array.isArray(g)?g.includes(y)?g.filter(Q=>Q!==y):[...g,y]:y===g?null:y;q(L)},U=Y({name:"Accordion",classes:E,props:s,className:a,style:d,classNames:r,styles:i,unstyled:f,vars:m,varsResolver:be});return u.createElement(he,{value:{isItemActive:G,onChange:J,getControlId:F(`${$}-control`,"Accordion.Item component was rendered with invalid value or without value"),getRegionId:F(`${$}-panel`,"Accordion.Item component was rendered with invalid value or without value"),transitionDuration:l,disableChevronRotation:e,chevronPosition:b,order:N,chevron:P,loop:n,getStyles:U,variant:R,unstyled:f}},u.createElement(S,{...U("root"),id:$,...k,variant:R,"data-accordion":!0},h))}const Ce=t=>t;C.extend=Ce;C.classes=E;C.displayName="@mantine/core/Accordion";C.Item=T;C.Panel=_;C.Control=M;C.Chevron=K;export{T as A,M as a,_ as b,C as c};
