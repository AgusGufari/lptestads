import{r as c,R as d}from"./jsx-runtime-ByGpHSPZ.js";import{a as _}from"./use-reduced-motion-yJY9mgkS.js";import{i as k}from"./is-element-CI8e1h0p.js";import{f as D,u as A,a as E,B as z,c as U,m as V,d as q,r as P}from"./factory-CAXpoK4s.js";import{r as K}from"./use-id-CBFaeZXz.js";import{u as M}from"./use-merged-ref-BJm5sttg.js";import{p as O}from"./polymorphic-factory-CAua_8H1.js";import{U as $}from"./UnstyledButton-DaEZdWNO.js";function ft({opened:t,shouldReturnFocus:n=!0}){const e=c.useRef(),o=()=>{var r;e.current&&"focus"in e.current&&typeof e.current.focus=="function"&&((r=e.current)==null||r.focus({preventScroll:!0}))};return _(()=>{let r=-1;const a=s=>{s.key==="Tab"&&window.clearTimeout(r)};return document.addEventListener("keydown",a),t?e.current=document.activeElement:n&&(r=window.setTimeout(o,10)),()=>{window.clearTimeout(r),document.removeEventListener("keydown",a)}},[t,n]),o}function j(t,n="body > :not(script)"){const e=K(),o=Array.from(document.querySelectorAll(n)).map(r=>{var u;if((u=r==null?void 0:r.shadowRoot)!=null&&u.contains(t)||r.contains(t))return;const a=r.getAttribute("aria-hidden"),s=r.getAttribute("data-hidden"),i=r.getAttribute("data-focus-id");return r.setAttribute("data-focus-id",e),a===null||a==="false"?r.setAttribute("aria-hidden","true"):!s&&!i&&r.setAttribute("data-hidden",a),{node:r,ariaHidden:s||null}});return()=>{o.forEach(r=>{!r||e!==r.node.getAttribute("data-focus-id")||(r.ariaHidden===null?r.node.removeAttribute("aria-hidden"):r.node.setAttribute("aria-hidden",r.ariaHidden),r.node.removeAttribute("data-focus-id"),r.node.removeAttribute("data-hidden"))})}}const G=/input|select|textarea|button|object/,N="a, input, select, textarea, button, object, [tabindex]";function Z(t){return t.style.display==="none"}function J(t){if(t.getAttribute("aria-hidden")||t.getAttribute("hidden")||t.getAttribute("type")==="hidden")return!1;let e=t;for(;e&&!(e===document.body||e.nodeType===11);){if(Z(e))return!1;e=e.parentNode}return!0}function g(t){let n=t.getAttribute("tabindex");return n===null&&(n=void 0),parseInt(n,10)}function m(t){const n=t.nodeName.toLowerCase(),e=!Number.isNaN(g(t));return(G.test(n)&&!t.disabled||t instanceof HTMLAnchorElement&&t.href||e)&&J(t)}function T(t){const n=g(t);return(Number.isNaN(n)||n>=0)&&m(t)}function Q(t){return Array.from(t.querySelectorAll(N)).filter(T)}function W(t,n){const e=Q(t);if(!e.length){n.preventDefault();return}const o=e[n.shiftKey?0:e.length-1],r=t.getRootNode();let a=o===r.activeElement||t===r.activeElement;const s=r.activeElement;if(s.tagName==="INPUT"&&s.getAttribute("type")==="radio"&&(a=e.filter(l=>l.getAttribute("type")==="radio"&&l.getAttribute("name")===s.getAttribute("name")).includes(o)),!a)return;n.preventDefault();const u=e[n.shiftKey?e.length-1:0];u&&u.focus()}function X(t=!0){const n=c.useRef(),e=c.useRef(null),o=a=>{let s=a.querySelector("[data-autofocus]");if(!s){const i=Array.from(a.querySelectorAll(N));s=i.find(T)||i.find(m)||null,!s&&m(a)&&(s=a)}s&&s.focus({preventScroll:!0})},r=c.useCallback(a=>{if(t){if(a===null){e.current&&(e.current(),e.current=null);return}e.current=j(a),n.current!==a&&(a?(setTimeout(()=>{a.getRootNode()&&o(a)}),n.current=a):n.current=null)}},[t]);return c.useEffect(()=>{if(!t)return;n.current&&setTimeout(()=>o(n.current));const a=s=>{s.key==="Tab"&&n.current&&W(n.current,s)};return document.addEventListener("keydown",a),()=>{document.removeEventListener("keydown",a),e.current&&e.current()}},[t]),r}var Y={root:"m-515a97f8"};const h=Y,tt={},b=D((t,n)=>{const e=A("VisuallyHidden",tt,t),{classNames:o,className:r,style:a,styles:s,unstyled:i,vars:u,...f}=e,l=E({name:"VisuallyHidden",classes:h,props:e,className:r,style:a,classNames:o,styles:s,unstyled:i});return d.createElement(z,{component:"span",ref:n,...l("root"),...f})});b.classes=h;b.displayName="@mantine/core/VisuallyHidden";function R({children:t,active:n=!0,refProp:e="ref"}){const o=X(n),r=M(o,t==null?void 0:t.ref);return k(t)?c.cloneElement(t,{[e]:r}):t}function w(t){return d.createElement(b,{tabIndex:-1,"data-autofocus":!0,...t})}R.displayName="@mantine/core/FocusTrap";w.displayName="@mantine/core/FocusTrapInitialFocus";R.InitialFocus=w;const C=c.forwardRef(({size:t="var(--cb-icon-size, 70%)",style:n,...e},o)=>d.createElement("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{...n,width:t,height:t},ref:o,...e},d.createElement("path",{d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})));C.displayName="@mantine/core/CloseIcon";var et={root:"m-86a44da5","root--subtle":"m-220c80f2"};const I=et,rt={variant:"subtle"},nt=U((t,{size:n,radius:e,iconSize:o})=>({root:{"--cb-size":V(n,"cb-size"),"--cb-radius":e===void 0?void 0:q(e),"--cb-icon-size":P(o)}})),x=O((t,n)=>{const e=A("CloseButton",rt,t),{iconSize:o,children:r,vars:a,radius:s,className:i,classNames:u,style:f,styles:l,unstyled:p,"data-disabled":L,disabled:y,variant:v,icon:F,mod:S,...H}=e,B=E({name:"CloseButton",props:e,className:i,style:f,classes:I,classNames:u,styles:l,unstyled:p,vars:a,varsResolver:nt});return d.createElement($,{ref:n,...H,unstyled:p,variant:v,disabled:y,mod:[{disabled:y||L},S],...B("root",{variant:v,active:!0})},F||d.createElement(C,null),r)});x.classes=I;x.displayName="@mantine/core/CloseButton";export{x as C,R as F,ft as u};
