(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Pv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Um={exports:{}},rc={},Nm={exports:{}},et={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var la=Symbol.for("react.element"),Lv=Symbol.for("react.portal"),Dv=Symbol.for("react.fragment"),Iv=Symbol.for("react.strict_mode"),Uv=Symbol.for("react.profiler"),Nv=Symbol.for("react.provider"),Fv=Symbol.for("react.context"),Ov=Symbol.for("react.forward_ref"),kv=Symbol.for("react.suspense"),zv=Symbol.for("react.memo"),Bv=Symbol.for("react.lazy"),Zf=Symbol.iterator;function Gv(t){return t===null||typeof t!="object"?null:(t=Zf&&t[Zf]||t["@@iterator"],typeof t=="function"?t:null)}var Fm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Om=Object.assign,km={};function Qs(t,e,n){this.props=t,this.context=e,this.refs=km,this.updater=n||Fm}Qs.prototype.isReactComponent={};Qs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Qs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function zm(){}zm.prototype=Qs.prototype;function jd(t,e,n){this.props=t,this.context=e,this.refs=km,this.updater=n||Fm}var qd=jd.prototype=new zm;qd.constructor=jd;Om(qd,Qs.prototype);qd.isPureReactComponent=!0;var Kf=Array.isArray,Bm=Object.prototype.hasOwnProperty,Yd={current:null},Gm={key:!0,ref:!0,__self:!0,__source:!0};function Hm(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Bm.call(e,i)&&!Gm.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:la,type:t,key:s,ref:o,props:r,_owner:Yd.current}}function Hv(t,e){return{$$typeof:la,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function $d(t){return typeof t=="object"&&t!==null&&t.$$typeof===la}function Vv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Jf=/\/+/g;function Cc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Vv(""+t.key):e.toString(36)}function hl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case la:case Lv:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Cc(o,0):i,Kf(r)?(n="",t!=null&&(n=t.replace(Jf,"$&/")+"/"),hl(r,e,n,"",function(c){return c})):r!=null&&($d(r)&&(r=Hv(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Jf,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Kf(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Cc(s,a);o+=hl(s,e,n,l,r)}else if(l=Gv(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Cc(s,a++),o+=hl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Sa(t,e,n){if(t==null)return t;var i=[],r=0;return hl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Wv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var _n={current:null},pl={transition:null},Xv={ReactCurrentDispatcher:_n,ReactCurrentBatchConfig:pl,ReactCurrentOwner:Yd};function Vm(){throw Error("act(...) is not supported in production builds of React.")}et.Children={map:Sa,forEach:function(t,e,n){Sa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Sa(t,function(){e++}),e},toArray:function(t){return Sa(t,function(e){return e})||[]},only:function(t){if(!$d(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};et.Component=Qs;et.Fragment=Dv;et.Profiler=Uv;et.PureComponent=jd;et.StrictMode=Iv;et.Suspense=kv;et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xv;et.act=Vm;et.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Om({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Yd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Bm.call(e,l)&&!Gm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:la,type:t.type,key:r,ref:s,props:i,_owner:o}};et.createContext=function(t){return t={$$typeof:Fv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Nv,_context:t},t.Consumer=t};et.createElement=Hm;et.createFactory=function(t){var e=Hm.bind(null,t);return e.type=t,e};et.createRef=function(){return{current:null}};et.forwardRef=function(t){return{$$typeof:Ov,render:t}};et.isValidElement=$d;et.lazy=function(t){return{$$typeof:Bv,_payload:{_status:-1,_result:t},_init:Wv}};et.memo=function(t,e){return{$$typeof:zv,type:t,compare:e===void 0?null:e}};et.startTransition=function(t){var e=pl.transition;pl.transition={};try{t()}finally{pl.transition=e}};et.unstable_act=Vm;et.useCallback=function(t,e){return _n.current.useCallback(t,e)};et.useContext=function(t){return _n.current.useContext(t)};et.useDebugValue=function(){};et.useDeferredValue=function(t){return _n.current.useDeferredValue(t)};et.useEffect=function(t,e){return _n.current.useEffect(t,e)};et.useId=function(){return _n.current.useId()};et.useImperativeHandle=function(t,e,n){return _n.current.useImperativeHandle(t,e,n)};et.useInsertionEffect=function(t,e){return _n.current.useInsertionEffect(t,e)};et.useLayoutEffect=function(t,e){return _n.current.useLayoutEffect(t,e)};et.useMemo=function(t,e){return _n.current.useMemo(t,e)};et.useReducer=function(t,e,n){return _n.current.useReducer(t,e,n)};et.useRef=function(t){return _n.current.useRef(t)};et.useState=function(t){return _n.current.useState(t)};et.useSyncExternalStore=function(t,e,n){return _n.current.useSyncExternalStore(t,e,n)};et.useTransition=function(){return _n.current.useTransition()};et.version="18.3.1";Nm.exports=et;var Pe=Nm.exports;const jv=Pv(Pe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qv=Pe,Yv=Symbol.for("react.element"),$v=Symbol.for("react.fragment"),Zv=Object.prototype.hasOwnProperty,Kv=qv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Jv={key:!0,ref:!0,__self:!0,__source:!0};function Wm(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Zv.call(e,i)&&!Jv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Yv,type:t,key:s,ref:o,props:r,_owner:Kv.current}}rc.Fragment=$v;rc.jsx=Wm;rc.jsxs=Wm;Um.exports=rc;var K=Um.exports,ku={},Xm={exports:{}},kn={},jm={exports:{}},qm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,H){var V=L.length;L.push(H);e:for(;0<V;){var k=V-1>>>1,q=L[k];if(0<r(q,H))L[k]=H,L[V]=q,V=k;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var H=L[0],V=L.pop();if(V!==H){L[0]=V;e:for(var k=0,q=L.length,B=q>>>1;k<B;){var J=2*(k+1)-1,ae=L[J],pe=J+1,Se=L[pe];if(0>r(ae,V))pe<q&&0>r(Se,ae)?(L[k]=Se,L[pe]=V,k=pe):(L[k]=ae,L[J]=V,k=J);else if(pe<q&&0>r(Se,V))L[k]=Se,L[pe]=V,k=pe;else break e}}return H}function r(L,H){var V=L.sortIndex-H.sortIndex;return V!==0?V:L.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,h=null,f=3,_=!1,x=!1,y=!1,p=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(L){for(var H=n(c);H!==null;){if(H.callback===null)i(c);else if(H.startTime<=L)i(c),H.sortIndex=H.expirationTime,e(l,H);else break;H=n(c)}}function S(L){if(y=!1,v(L),!x)if(n(l)!==null)x=!0,X(P);else{var H=n(c);H!==null&&Z(S,H.startTime-L)}}function P(L,H){x=!1,y&&(y=!1,u(G),G=-1),_=!0;var V=f;try{for(v(H),h=n(l);h!==null&&(!(h.expirationTime>H)||L&&!O());){var k=h.callback;if(typeof k=="function"){h.callback=null,f=h.priorityLevel;var q=k(h.expirationTime<=H);H=t.unstable_now(),typeof q=="function"?h.callback=q:h===n(l)&&i(l),v(H)}else i(l);h=n(l)}if(h!==null)var B=!0;else{var J=n(c);J!==null&&Z(S,J.startTime-H),B=!1}return B}finally{h=null,f=V,_=!1}}var b=!1,w=null,G=-1,E=5,T=-1;function O(){return!(t.unstable_now()-T<E)}function $(){if(w!==null){var L=t.unstable_now();T=L;var H=!0;try{H=w(!0,L)}finally{H?oe():(b=!1,w=null)}}else b=!1}var oe;if(typeof g=="function")oe=function(){g($)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,D=U.port2;U.port1.onmessage=$,oe=function(){D.postMessage(null)}}else oe=function(){p($,0)};function X(L){w=L,b||(b=!0,oe())}function Z(L,H){G=p(function(){L(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){x||_||(x=!0,X(P))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(f){case 1:case 2:case 3:var H=3;break;default:H=f}var V=f;f=H;try{return L()}finally{f=V}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,H){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var V=f;f=L;try{return H()}finally{f=V}},t.unstable_scheduleCallback=function(L,H,V){var k=t.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?k+V:k):V=k,L){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=V+q,L={id:d++,callback:H,priorityLevel:L,startTime:V,expirationTime:q,sortIndex:-1},V>k?(L.sortIndex=V,e(c,L),n(l)===null&&L===n(c)&&(y?(u(G),G=-1):y=!0,Z(S,V-k))):(L.sortIndex=q,e(l,L),x||_||(x=!0,X(P))),L},t.unstable_shouldYield=O,t.unstable_wrapCallback=function(L){var H=f;return function(){var V=f;f=H;try{return L.apply(this,arguments)}finally{f=V}}}})(qm);jm.exports=qm;var Qv=jm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e_=Pe,On=Qv;function ue(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ym=new Set,Vo={};function Yr(t,e){Hs(t,e),Hs(t+"Capture",e)}function Hs(t,e){for(Vo[t]=e,t=0;t<e.length;t++)Ym.add(e[t])}var Oi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zu=Object.prototype.hasOwnProperty,t_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qf={},eh={};function n_(t){return zu.call(eh,t)?!0:zu.call(Qf,t)?!1:t_.test(t)?eh[t]=!0:(Qf[t]=!0,!1)}function i_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function r_(t,e,n,i){if(e===null||typeof e>"u"||i_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function yn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var sn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){sn[t]=new yn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];sn[e]=new yn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){sn[t]=new yn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){sn[t]=new yn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){sn[t]=new yn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){sn[t]=new yn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){sn[t]=new yn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){sn[t]=new yn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){sn[t]=new yn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Zd=/[\-:]([a-z])/g;function Kd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Zd,Kd);sn[e]=new yn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Zd,Kd);sn[e]=new yn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Zd,Kd);sn[e]=new yn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){sn[t]=new yn(t,1,!1,t.toLowerCase(),null,!1,!1)});sn.xlinkHref=new yn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){sn[t]=new yn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Jd(t,e,n,i){var r=sn.hasOwnProperty(e)?sn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(r_(e,n,r,i)&&(n=null),i||r===null?n_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Hi=e_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ma=Symbol.for("react.element"),ys=Symbol.for("react.portal"),xs=Symbol.for("react.fragment"),Qd=Symbol.for("react.strict_mode"),Bu=Symbol.for("react.profiler"),$m=Symbol.for("react.provider"),Zm=Symbol.for("react.context"),ef=Symbol.for("react.forward_ref"),Gu=Symbol.for("react.suspense"),Hu=Symbol.for("react.suspense_list"),tf=Symbol.for("react.memo"),Ki=Symbol.for("react.lazy"),Km=Symbol.for("react.offscreen"),th=Symbol.iterator;function co(t){return t===null||typeof t!="object"?null:(t=th&&t[th]||t["@@iterator"],typeof t=="function"?t:null)}var bt=Object.assign,Pc;function bo(t){if(Pc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Pc=e&&e[1]||""}return`
`+Pc+t}var Lc=!1;function Dc(t,e){if(!t||Lc)return"";Lc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Lc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?bo(t):""}function s_(t){switch(t.tag){case 5:return bo(t.type);case 16:return bo("Lazy");case 13:return bo("Suspense");case 19:return bo("SuspenseList");case 0:case 2:case 15:return t=Dc(t.type,!1),t;case 11:return t=Dc(t.type.render,!1),t;case 1:return t=Dc(t.type,!0),t;default:return""}}function Vu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case xs:return"Fragment";case ys:return"Portal";case Bu:return"Profiler";case Qd:return"StrictMode";case Gu:return"Suspense";case Hu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Zm:return(t.displayName||"Context")+".Consumer";case $m:return(t._context.displayName||"Context")+".Provider";case ef:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case tf:return e=t.displayName||null,e!==null?e:Vu(t.type)||"Memo";case Ki:e=t._payload,t=t._init;try{return Vu(t(e))}catch{}}return null}function o_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Vu(e);case 8:return e===Qd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function _r(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Jm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function a_(t){var e=Jm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ea(t){t._valueTracker||(t._valueTracker=a_(t))}function Qm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Jm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Al(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Wu(t,e){var n=e.checked;return bt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function nh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=_r(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function eg(t,e){e=e.checked,e!=null&&Jd(t,"checked",e,!1)}function Xu(t,e){eg(t,e);var n=_r(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ju(t,e.type,n):e.hasOwnProperty("defaultValue")&&ju(t,e.type,_r(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ih(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ju(t,e,n){(e!=="number"||Al(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ro=Array.isArray;function Is(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+_r(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function qu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ue(91));return bt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function rh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ue(92));if(Ro(n)){if(1<n.length)throw Error(ue(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:_r(n)}}function tg(t,e){var n=_r(e.value),i=_r(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function sh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ng(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Yu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ng(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var wa,ig=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(wa=wa||document.createElement("div"),wa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=wa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Wo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Io={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},l_=["Webkit","ms","Moz","O"];Object.keys(Io).forEach(function(t){l_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Io[e]=Io[t]})});function rg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Io.hasOwnProperty(t)&&Io[t]?(""+e).trim():e+"px"}function sg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=rg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var c_=bt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $u(t,e){if(e){if(c_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ue(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ue(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ue(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ue(62))}}function Zu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ku=null;function nf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ju=null,Us=null,Ns=null;function oh(t){if(t=da(t)){if(typeof Ju!="function")throw Error(ue(280));var e=t.stateNode;e&&(e=cc(e),Ju(t.stateNode,t.type,e))}}function og(t){Us?Ns?Ns.push(t):Ns=[t]:Us=t}function ag(){if(Us){var t=Us,e=Ns;if(Ns=Us=null,oh(t),e)for(t=0;t<e.length;t++)oh(e[t])}}function lg(t,e){return t(e)}function cg(){}var Ic=!1;function ug(t,e,n){if(Ic)return t(e,n);Ic=!0;try{return lg(t,e,n)}finally{Ic=!1,(Us!==null||Ns!==null)&&(cg(),ag())}}function Xo(t,e){var n=t.stateNode;if(n===null)return null;var i=cc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ue(231,e,typeof n));return n}var Qu=!1;if(Oi)try{var uo={};Object.defineProperty(uo,"passive",{get:function(){Qu=!0}}),window.addEventListener("test",uo,uo),window.removeEventListener("test",uo,uo)}catch{Qu=!1}function u_(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Uo=!1,bl=null,Rl=!1,ed=null,d_={onError:function(t){Uo=!0,bl=t}};function f_(t,e,n,i,r,s,o,a,l){Uo=!1,bl=null,u_.apply(d_,arguments)}function h_(t,e,n,i,r,s,o,a,l){if(f_.apply(this,arguments),Uo){if(Uo){var c=bl;Uo=!1,bl=null}else throw Error(ue(198));Rl||(Rl=!0,ed=c)}}function $r(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function dg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ah(t){if($r(t)!==t)throw Error(ue(188))}function p_(t){var e=t.alternate;if(!e){if(e=$r(t),e===null)throw Error(ue(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return ah(r),t;if(s===i)return ah(r),e;s=s.sibling}throw Error(ue(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ue(189))}}if(n.alternate!==i)throw Error(ue(190))}if(n.tag!==3)throw Error(ue(188));return n.stateNode.current===n?t:e}function fg(t){return t=p_(t),t!==null?hg(t):null}function hg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=hg(t);if(e!==null)return e;t=t.sibling}return null}var pg=On.unstable_scheduleCallback,lh=On.unstable_cancelCallback,m_=On.unstable_shouldYield,g_=On.unstable_requestPaint,It=On.unstable_now,v_=On.unstable_getCurrentPriorityLevel,rf=On.unstable_ImmediatePriority,mg=On.unstable_UserBlockingPriority,Cl=On.unstable_NormalPriority,__=On.unstable_LowPriority,gg=On.unstable_IdlePriority,sc=null,Si=null;function y_(t){if(Si&&typeof Si.onCommitFiberRoot=="function")try{Si.onCommitFiberRoot(sc,t,void 0,(t.current.flags&128)===128)}catch{}}var ui=Math.clz32?Math.clz32:M_,x_=Math.log,S_=Math.LN2;function M_(t){return t>>>=0,t===0?32:31-(x_(t)/S_|0)|0}var Ta=64,Aa=4194304;function Co(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Pl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Co(a):(s&=o,s!==0&&(i=Co(s)))}else o=n&~r,o!==0?i=Co(o):s!==0&&(i=Co(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ui(e),r=1<<n,i|=t[n],e&=~r;return i}function E_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function w_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ui(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=E_(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function td(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function vg(){var t=Ta;return Ta<<=1,!(Ta&4194240)&&(Ta=64),t}function Uc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ca(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ui(e),t[e]=n}function T_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ui(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function sf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ui(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var lt=0;function _g(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var yg,of,xg,Sg,Mg,nd=!1,ba=[],sr=null,or=null,ar=null,jo=new Map,qo=new Map,Qi=[],A_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ch(t,e){switch(t){case"focusin":case"focusout":sr=null;break;case"dragenter":case"dragleave":or=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":jo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":qo.delete(e.pointerId)}}function fo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=da(e),e!==null&&of(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function b_(t,e,n,i,r){switch(e){case"focusin":return sr=fo(sr,t,e,n,i,r),!0;case"dragenter":return or=fo(or,t,e,n,i,r),!0;case"mouseover":return ar=fo(ar,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return jo.set(s,fo(jo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,qo.set(s,fo(qo.get(s)||null,t,e,n,i,r)),!0}return!1}function Eg(t){var e=Ur(t.target);if(e!==null){var n=$r(e);if(n!==null){if(e=n.tag,e===13){if(e=dg(n),e!==null){t.blockedOn=e,Mg(t.priority,function(){xg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ml(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=id(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Ku=i,n.target.dispatchEvent(i),Ku=null}else return e=da(n),e!==null&&of(e),t.blockedOn=n,!1;e.shift()}return!0}function uh(t,e,n){ml(t)&&n.delete(e)}function R_(){nd=!1,sr!==null&&ml(sr)&&(sr=null),or!==null&&ml(or)&&(or=null),ar!==null&&ml(ar)&&(ar=null),jo.forEach(uh),qo.forEach(uh)}function ho(t,e){t.blockedOn===e&&(t.blockedOn=null,nd||(nd=!0,On.unstable_scheduleCallback(On.unstable_NormalPriority,R_)))}function Yo(t){function e(r){return ho(r,t)}if(0<ba.length){ho(ba[0],t);for(var n=1;n<ba.length;n++){var i=ba[n];i.blockedOn===t&&(i.blockedOn=null)}}for(sr!==null&&ho(sr,t),or!==null&&ho(or,t),ar!==null&&ho(ar,t),jo.forEach(e),qo.forEach(e),n=0;n<Qi.length;n++)i=Qi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Qi.length&&(n=Qi[0],n.blockedOn===null);)Eg(n),n.blockedOn===null&&Qi.shift()}var Fs=Hi.ReactCurrentBatchConfig,Ll=!0;function C_(t,e,n,i){var r=lt,s=Fs.transition;Fs.transition=null;try{lt=1,af(t,e,n,i)}finally{lt=r,Fs.transition=s}}function P_(t,e,n,i){var r=lt,s=Fs.transition;Fs.transition=null;try{lt=4,af(t,e,n,i)}finally{lt=r,Fs.transition=s}}function af(t,e,n,i){if(Ll){var r=id(t,e,n,i);if(r===null)Wc(t,e,i,Dl,n),ch(t,i);else if(b_(r,t,e,n,i))i.stopPropagation();else if(ch(t,i),e&4&&-1<A_.indexOf(t)){for(;r!==null;){var s=da(r);if(s!==null&&yg(s),s=id(t,e,n,i),s===null&&Wc(t,e,i,Dl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Wc(t,e,i,null,n)}}var Dl=null;function id(t,e,n,i){if(Dl=null,t=nf(i),t=Ur(t),t!==null)if(e=$r(t),e===null)t=null;else if(n=e.tag,n===13){if(t=dg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Dl=t,null}function wg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(v_()){case rf:return 1;case mg:return 4;case Cl:case __:return 16;case gg:return 536870912;default:return 16}default:return 16}}var tr=null,lf=null,gl=null;function Tg(){if(gl)return gl;var t,e=lf,n=e.length,i,r="value"in tr?tr.value:tr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return gl=r.slice(t,1<i?1-i:void 0)}function vl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ra(){return!0}function dh(){return!1}function zn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ra:dh,this.isPropagationStopped=dh,this}return bt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ra)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ra)},persist:function(){},isPersistent:Ra}),e}var eo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cf=zn(eo),ua=bt({},eo,{view:0,detail:0}),L_=zn(ua),Nc,Fc,po,oc=bt({},ua,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==po&&(po&&t.type==="mousemove"?(Nc=t.screenX-po.screenX,Fc=t.screenY-po.screenY):Fc=Nc=0,po=t),Nc)},movementY:function(t){return"movementY"in t?t.movementY:Fc}}),fh=zn(oc),D_=bt({},oc,{dataTransfer:0}),I_=zn(D_),U_=bt({},ua,{relatedTarget:0}),Oc=zn(U_),N_=bt({},eo,{animationName:0,elapsedTime:0,pseudoElement:0}),F_=zn(N_),O_=bt({},eo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),k_=zn(O_),z_=bt({},eo,{data:0}),hh=zn(z_),B_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},G_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},H_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function V_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=H_[t])?!!e[t]:!1}function uf(){return V_}var W_=bt({},ua,{key:function(t){if(t.key){var e=B_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=vl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?G_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uf,charCode:function(t){return t.type==="keypress"?vl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?vl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),X_=zn(W_),j_=bt({},oc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ph=zn(j_),q_=bt({},ua,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uf}),Y_=zn(q_),$_=bt({},eo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Z_=zn($_),K_=bt({},oc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),J_=zn(K_),Q_=[9,13,27,32],df=Oi&&"CompositionEvent"in window,No=null;Oi&&"documentMode"in document&&(No=document.documentMode);var ey=Oi&&"TextEvent"in window&&!No,Ag=Oi&&(!df||No&&8<No&&11>=No),mh=" ",gh=!1;function bg(t,e){switch(t){case"keyup":return Q_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ss=!1;function ty(t,e){switch(t){case"compositionend":return Rg(e);case"keypress":return e.which!==32?null:(gh=!0,mh);case"textInput":return t=e.data,t===mh&&gh?null:t;default:return null}}function ny(t,e){if(Ss)return t==="compositionend"||!df&&bg(t,e)?(t=Tg(),gl=lf=tr=null,Ss=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ag&&e.locale!=="ko"?null:e.data;default:return null}}var iy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!iy[t.type]:e==="textarea"}function Cg(t,e,n,i){og(i),e=Il(e,"onChange"),0<e.length&&(n=new cf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Fo=null,$o=null;function ry(t){Bg(t,0)}function ac(t){var e=ws(t);if(Qm(e))return t}function sy(t,e){if(t==="change")return e}var Pg=!1;if(Oi){var kc;if(Oi){var zc="oninput"in document;if(!zc){var _h=document.createElement("div");_h.setAttribute("oninput","return;"),zc=typeof _h.oninput=="function"}kc=zc}else kc=!1;Pg=kc&&(!document.documentMode||9<document.documentMode)}function yh(){Fo&&(Fo.detachEvent("onpropertychange",Lg),$o=Fo=null)}function Lg(t){if(t.propertyName==="value"&&ac($o)){var e=[];Cg(e,$o,t,nf(t)),ug(ry,e)}}function oy(t,e,n){t==="focusin"?(yh(),Fo=e,$o=n,Fo.attachEvent("onpropertychange",Lg)):t==="focusout"&&yh()}function ay(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ac($o)}function ly(t,e){if(t==="click")return ac(e)}function cy(t,e){if(t==="input"||t==="change")return ac(e)}function uy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var hi=typeof Object.is=="function"?Object.is:uy;function Zo(t,e){if(hi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!zu.call(e,r)||!hi(t[r],e[r]))return!1}return!0}function xh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Sh(t,e){var n=xh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=xh(n)}}function Dg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Dg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ig(){for(var t=window,e=Al();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Al(t.document)}return e}function ff(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function dy(t){var e=Ig(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Dg(n.ownerDocument.documentElement,n)){if(i!==null&&ff(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Sh(n,s);var o=Sh(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var fy=Oi&&"documentMode"in document&&11>=document.documentMode,Ms=null,rd=null,Oo=null,sd=!1;function Mh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;sd||Ms==null||Ms!==Al(i)||(i=Ms,"selectionStart"in i&&ff(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Oo&&Zo(Oo,i)||(Oo=i,i=Il(rd,"onSelect"),0<i.length&&(e=new cf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ms)))}function Ca(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Es={animationend:Ca("Animation","AnimationEnd"),animationiteration:Ca("Animation","AnimationIteration"),animationstart:Ca("Animation","AnimationStart"),transitionend:Ca("Transition","TransitionEnd")},Bc={},Ug={};Oi&&(Ug=document.createElement("div").style,"AnimationEvent"in window||(delete Es.animationend.animation,delete Es.animationiteration.animation,delete Es.animationstart.animation),"TransitionEvent"in window||delete Es.transitionend.transition);function lc(t){if(Bc[t])return Bc[t];if(!Es[t])return t;var e=Es[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ug)return Bc[t]=e[n];return t}var Ng=lc("animationend"),Fg=lc("animationiteration"),Og=lc("animationstart"),kg=lc("transitionend"),zg=new Map,Eh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xr(t,e){zg.set(t,e),Yr(e,[t])}for(var Gc=0;Gc<Eh.length;Gc++){var Hc=Eh[Gc],hy=Hc.toLowerCase(),py=Hc[0].toUpperCase()+Hc.slice(1);xr(hy,"on"+py)}xr(Ng,"onAnimationEnd");xr(Fg,"onAnimationIteration");xr(Og,"onAnimationStart");xr("dblclick","onDoubleClick");xr("focusin","onFocus");xr("focusout","onBlur");xr(kg,"onTransitionEnd");Hs("onMouseEnter",["mouseout","mouseover"]);Hs("onMouseLeave",["mouseout","mouseover"]);Hs("onPointerEnter",["pointerout","pointerover"]);Hs("onPointerLeave",["pointerout","pointerover"]);Yr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Yr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Yr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Yr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Yr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Yr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),my=new Set("cancel close invalid load scroll toggle".split(" ").concat(Po));function wh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,h_(i,e,void 0,t),t.currentTarget=null}function Bg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;wh(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;wh(r,a,c),s=l}}}if(Rl)throw t=ed,Rl=!1,ed=null,t}function gt(t,e){var n=e[ud];n===void 0&&(n=e[ud]=new Set);var i=t+"__bubble";n.has(i)||(Gg(e,t,2,!1),n.add(i))}function Vc(t,e,n){var i=0;e&&(i|=4),Gg(n,t,i,e)}var Pa="_reactListening"+Math.random().toString(36).slice(2);function Ko(t){if(!t[Pa]){t[Pa]=!0,Ym.forEach(function(n){n!=="selectionchange"&&(my.has(n)||Vc(n,!1,t),Vc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Pa]||(e[Pa]=!0,Vc("selectionchange",!1,e))}}function Gg(t,e,n,i){switch(wg(e)){case 1:var r=C_;break;case 4:r=P_;break;default:r=af}n=r.bind(null,e,n,t),r=void 0,!Qu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Wc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Ur(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}ug(function(){var c=s,d=nf(n),h=[];e:{var f=zg.get(t);if(f!==void 0){var _=cf,x=t;switch(t){case"keypress":if(vl(n)===0)break e;case"keydown":case"keyup":_=X_;break;case"focusin":x="focus",_=Oc;break;case"focusout":x="blur",_=Oc;break;case"beforeblur":case"afterblur":_=Oc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=fh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=I_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=Y_;break;case Ng:case Fg:case Og:_=F_;break;case kg:_=Z_;break;case"scroll":_=L_;break;case"wheel":_=J_;break;case"copy":case"cut":case"paste":_=k_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=ph}var y=(e&4)!==0,p=!y&&t==="scroll",u=y?f!==null?f+"Capture":null:f;y=[];for(var g=c,v;g!==null;){v=g;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,u!==null&&(S=Xo(g,u),S!=null&&y.push(Jo(g,S,v)))),p)break;g=g.return}0<y.length&&(f=new _(f,x,null,n,d),h.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",f&&n!==Ku&&(x=n.relatedTarget||n.fromElement)&&(Ur(x)||x[ki]))break e;if((_||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,_?(x=n.relatedTarget||n.toElement,_=c,x=x?Ur(x):null,x!==null&&(p=$r(x),x!==p||x.tag!==5&&x.tag!==6)&&(x=null)):(_=null,x=c),_!==x)){if(y=fh,S="onMouseLeave",u="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(y=ph,S="onPointerLeave",u="onPointerEnter",g="pointer"),p=_==null?f:ws(_),v=x==null?f:ws(x),f=new y(S,g+"leave",_,n,d),f.target=p,f.relatedTarget=v,S=null,Ur(d)===c&&(y=new y(u,g+"enter",x,n,d),y.target=v,y.relatedTarget=p,S=y),p=S,_&&x)t:{for(y=_,u=x,g=0,v=y;v;v=Jr(v))g++;for(v=0,S=u;S;S=Jr(S))v++;for(;0<g-v;)y=Jr(y),g--;for(;0<v-g;)u=Jr(u),v--;for(;g--;){if(y===u||u!==null&&y===u.alternate)break t;y=Jr(y),u=Jr(u)}y=null}else y=null;_!==null&&Th(h,f,_,y,!1),x!==null&&p!==null&&Th(h,p,x,y,!0)}}e:{if(f=c?ws(c):window,_=f.nodeName&&f.nodeName.toLowerCase(),_==="select"||_==="input"&&f.type==="file")var P=sy;else if(vh(f))if(Pg)P=cy;else{P=ay;var b=oy}else(_=f.nodeName)&&_.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(P=ly);if(P&&(P=P(t,c))){Cg(h,P,n,d);break e}b&&b(t,f,c),t==="focusout"&&(b=f._wrapperState)&&b.controlled&&f.type==="number"&&ju(f,"number",f.value)}switch(b=c?ws(c):window,t){case"focusin":(vh(b)||b.contentEditable==="true")&&(Ms=b,rd=c,Oo=null);break;case"focusout":Oo=rd=Ms=null;break;case"mousedown":sd=!0;break;case"contextmenu":case"mouseup":case"dragend":sd=!1,Mh(h,n,d);break;case"selectionchange":if(fy)break;case"keydown":case"keyup":Mh(h,n,d)}var w;if(df)e:{switch(t){case"compositionstart":var G="onCompositionStart";break e;case"compositionend":G="onCompositionEnd";break e;case"compositionupdate":G="onCompositionUpdate";break e}G=void 0}else Ss?bg(t,n)&&(G="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(G="onCompositionStart");G&&(Ag&&n.locale!=="ko"&&(Ss||G!=="onCompositionStart"?G==="onCompositionEnd"&&Ss&&(w=Tg()):(tr=d,lf="value"in tr?tr.value:tr.textContent,Ss=!0)),b=Il(c,G),0<b.length&&(G=new hh(G,t,null,n,d),h.push({event:G,listeners:b}),w?G.data=w:(w=Rg(n),w!==null&&(G.data=w)))),(w=ey?ty(t,n):ny(t,n))&&(c=Il(c,"onBeforeInput"),0<c.length&&(d=new hh("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=w))}Bg(h,e)})}function Jo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Il(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Xo(t,n),s!=null&&i.unshift(Jo(t,s,r)),s=Xo(t,e),s!=null&&i.push(Jo(t,s,r))),t=t.return}return i}function Jr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Th(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Xo(n,s),l!=null&&o.unshift(Jo(n,l,a))):r||(l=Xo(n,s),l!=null&&o.push(Jo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var gy=/\r\n?/g,vy=/\u0000|\uFFFD/g;function Ah(t){return(typeof t=="string"?t:""+t).replace(gy,`
`).replace(vy,"")}function La(t,e,n){if(e=Ah(e),Ah(t)!==e&&n)throw Error(ue(425))}function Ul(){}var od=null,ad=null;function ld(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var cd=typeof setTimeout=="function"?setTimeout:void 0,_y=typeof clearTimeout=="function"?clearTimeout:void 0,bh=typeof Promise=="function"?Promise:void 0,yy=typeof queueMicrotask=="function"?queueMicrotask:typeof bh<"u"?function(t){return bh.resolve(null).then(t).catch(xy)}:cd;function xy(t){setTimeout(function(){throw t})}function Xc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Yo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Yo(e)}function lr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Rh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var to=Math.random().toString(36).slice(2),xi="__reactFiber$"+to,Qo="__reactProps$"+to,ki="__reactContainer$"+to,ud="__reactEvents$"+to,Sy="__reactListeners$"+to,My="__reactHandles$"+to;function Ur(t){var e=t[xi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ki]||n[xi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Rh(t);t!==null;){if(n=t[xi])return n;t=Rh(t)}return e}t=n,n=t.parentNode}return null}function da(t){return t=t[xi]||t[ki],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ws(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ue(33))}function cc(t){return t[Qo]||null}var dd=[],Ts=-1;function Sr(t){return{current:t}}function _t(t){0>Ts||(t.current=dd[Ts],dd[Ts]=null,Ts--)}function pt(t,e){Ts++,dd[Ts]=t.current,t.current=e}var yr={},fn=Sr(yr),Tn=Sr(!1),Hr=yr;function Vs(t,e){var n=t.type.contextTypes;if(!n)return yr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function An(t){return t=t.childContextTypes,t!=null}function Nl(){_t(Tn),_t(fn)}function Ch(t,e,n){if(fn.current!==yr)throw Error(ue(168));pt(fn,e),pt(Tn,n)}function Hg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ue(108,o_(t)||"Unknown",r));return bt({},n,i)}function Fl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||yr,Hr=fn.current,pt(fn,t),pt(Tn,Tn.current),!0}function Ph(t,e,n){var i=t.stateNode;if(!i)throw Error(ue(169));n?(t=Hg(t,e,Hr),i.__reactInternalMemoizedMergedChildContext=t,_t(Tn),_t(fn),pt(fn,t)):_t(Tn),pt(Tn,n)}var Pi=null,uc=!1,jc=!1;function Vg(t){Pi===null?Pi=[t]:Pi.push(t)}function Ey(t){uc=!0,Vg(t)}function Mr(){if(!jc&&Pi!==null){jc=!0;var t=0,e=lt;try{var n=Pi;for(lt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Pi=null,uc=!1}catch(r){throw Pi!==null&&(Pi=Pi.slice(t+1)),pg(rf,Mr),r}finally{lt=e,jc=!1}}return null}var As=[],bs=0,Ol=null,kl=0,Vn=[],Wn=0,Vr=null,Di=1,Ii="";function Rr(t,e){As[bs++]=kl,As[bs++]=Ol,Ol=t,kl=e}function Wg(t,e,n){Vn[Wn++]=Di,Vn[Wn++]=Ii,Vn[Wn++]=Vr,Vr=t;var i=Di;t=Ii;var r=32-ui(i)-1;i&=~(1<<r),n+=1;var s=32-ui(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Di=1<<32-ui(e)+r|n<<r|i,Ii=s+t}else Di=1<<s|n<<r|i,Ii=t}function hf(t){t.return!==null&&(Rr(t,1),Wg(t,1,0))}function pf(t){for(;t===Ol;)Ol=As[--bs],As[bs]=null,kl=As[--bs],As[bs]=null;for(;t===Vr;)Vr=Vn[--Wn],Vn[Wn]=null,Ii=Vn[--Wn],Vn[Wn]=null,Di=Vn[--Wn],Vn[Wn]=null}var Fn=null,Nn=null,St=!1,ai=null;function Xg(t,e){var n=$n(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Lh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Fn=t,Nn=lr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Fn=t,Nn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Vr!==null?{id:Di,overflow:Ii}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=$n(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Fn=t,Nn=null,!0):!1;default:return!1}}function fd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function hd(t){if(St){var e=Nn;if(e){var n=e;if(!Lh(t,e)){if(fd(t))throw Error(ue(418));e=lr(n.nextSibling);var i=Fn;e&&Lh(t,e)?Xg(i,n):(t.flags=t.flags&-4097|2,St=!1,Fn=t)}}else{if(fd(t))throw Error(ue(418));t.flags=t.flags&-4097|2,St=!1,Fn=t}}}function Dh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Fn=t}function Da(t){if(t!==Fn)return!1;if(!St)return Dh(t),St=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ld(t.type,t.memoizedProps)),e&&(e=Nn)){if(fd(t))throw jg(),Error(ue(418));for(;e;)Xg(t,e),e=lr(e.nextSibling)}if(Dh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ue(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Nn=lr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Nn=null}}else Nn=Fn?lr(t.stateNode.nextSibling):null;return!0}function jg(){for(var t=Nn;t;)t=lr(t.nextSibling)}function Ws(){Nn=Fn=null,St=!1}function mf(t){ai===null?ai=[t]:ai.push(t)}var wy=Hi.ReactCurrentBatchConfig;function mo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ue(309));var i=n.stateNode}if(!i)throw Error(ue(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ue(284));if(!n._owner)throw Error(ue(290,t))}return t}function Ia(t,e){throw t=Object.prototype.toString.call(e),Error(ue(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ih(t){var e=t._init;return e(t._payload)}function qg(t){function e(u,g){if(t){var v=u.deletions;v===null?(u.deletions=[g],u.flags|=16):v.push(g)}}function n(u,g){if(!t)return null;for(;g!==null;)e(u,g),g=g.sibling;return null}function i(u,g){for(u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function r(u,g){return u=fr(u,g),u.index=0,u.sibling=null,u}function s(u,g,v){return u.index=v,t?(v=u.alternate,v!==null?(v=v.index,v<g?(u.flags|=2,g):v):(u.flags|=2,g)):(u.flags|=1048576,g)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,g,v,S){return g===null||g.tag!==6?(g=Qc(v,u.mode,S),g.return=u,g):(g=r(g,v),g.return=u,g)}function l(u,g,v,S){var P=v.type;return P===xs?d(u,g,v.props.children,S,v.key):g!==null&&(g.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Ki&&Ih(P)===g.type)?(S=r(g,v.props),S.ref=mo(u,g,v),S.return=u,S):(S=wl(v.type,v.key,v.props,null,u.mode,S),S.ref=mo(u,g,v),S.return=u,S)}function c(u,g,v,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=eu(v,u.mode,S),g.return=u,g):(g=r(g,v.children||[]),g.return=u,g)}function d(u,g,v,S,P){return g===null||g.tag!==7?(g=kr(v,u.mode,S,P),g.return=u,g):(g=r(g,v),g.return=u,g)}function h(u,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Qc(""+g,u.mode,v),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ma:return v=wl(g.type,g.key,g.props,null,u.mode,v),v.ref=mo(u,null,g),v.return=u,v;case ys:return g=eu(g,u.mode,v),g.return=u,g;case Ki:var S=g._init;return h(u,S(g._payload),v)}if(Ro(g)||co(g))return g=kr(g,u.mode,v,null),g.return=u,g;Ia(u,g)}return null}function f(u,g,v,S){var P=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return P!==null?null:a(u,g,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ma:return v.key===P?l(u,g,v,S):null;case ys:return v.key===P?c(u,g,v,S):null;case Ki:return P=v._init,f(u,g,P(v._payload),S)}if(Ro(v)||co(v))return P!==null?null:d(u,g,v,S,null);Ia(u,v)}return null}function _(u,g,v,S,P){if(typeof S=="string"&&S!==""||typeof S=="number")return u=u.get(v)||null,a(g,u,""+S,P);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ma:return u=u.get(S.key===null?v:S.key)||null,l(g,u,S,P);case ys:return u=u.get(S.key===null?v:S.key)||null,c(g,u,S,P);case Ki:var b=S._init;return _(u,g,v,b(S._payload),P)}if(Ro(S)||co(S))return u=u.get(v)||null,d(g,u,S,P,null);Ia(g,S)}return null}function x(u,g,v,S){for(var P=null,b=null,w=g,G=g=0,E=null;w!==null&&G<v.length;G++){w.index>G?(E=w,w=null):E=w.sibling;var T=f(u,w,v[G],S);if(T===null){w===null&&(w=E);break}t&&w&&T.alternate===null&&e(u,w),g=s(T,g,G),b===null?P=T:b.sibling=T,b=T,w=E}if(G===v.length)return n(u,w),St&&Rr(u,G),P;if(w===null){for(;G<v.length;G++)w=h(u,v[G],S),w!==null&&(g=s(w,g,G),b===null?P=w:b.sibling=w,b=w);return St&&Rr(u,G),P}for(w=i(u,w);G<v.length;G++)E=_(w,u,G,v[G],S),E!==null&&(t&&E.alternate!==null&&w.delete(E.key===null?G:E.key),g=s(E,g,G),b===null?P=E:b.sibling=E,b=E);return t&&w.forEach(function(O){return e(u,O)}),St&&Rr(u,G),P}function y(u,g,v,S){var P=co(v);if(typeof P!="function")throw Error(ue(150));if(v=P.call(v),v==null)throw Error(ue(151));for(var b=P=null,w=g,G=g=0,E=null,T=v.next();w!==null&&!T.done;G++,T=v.next()){w.index>G?(E=w,w=null):E=w.sibling;var O=f(u,w,T.value,S);if(O===null){w===null&&(w=E);break}t&&w&&O.alternate===null&&e(u,w),g=s(O,g,G),b===null?P=O:b.sibling=O,b=O,w=E}if(T.done)return n(u,w),St&&Rr(u,G),P;if(w===null){for(;!T.done;G++,T=v.next())T=h(u,T.value,S),T!==null&&(g=s(T,g,G),b===null?P=T:b.sibling=T,b=T);return St&&Rr(u,G),P}for(w=i(u,w);!T.done;G++,T=v.next())T=_(w,u,G,T.value,S),T!==null&&(t&&T.alternate!==null&&w.delete(T.key===null?G:T.key),g=s(T,g,G),b===null?P=T:b.sibling=T,b=T);return t&&w.forEach(function($){return e(u,$)}),St&&Rr(u,G),P}function p(u,g,v,S){if(typeof v=="object"&&v!==null&&v.type===xs&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ma:e:{for(var P=v.key,b=g;b!==null;){if(b.key===P){if(P=v.type,P===xs){if(b.tag===7){n(u,b.sibling),g=r(b,v.props.children),g.return=u,u=g;break e}}else if(b.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Ki&&Ih(P)===b.type){n(u,b.sibling),g=r(b,v.props),g.ref=mo(u,b,v),g.return=u,u=g;break e}n(u,b);break}else e(u,b);b=b.sibling}v.type===xs?(g=kr(v.props.children,u.mode,S,v.key),g.return=u,u=g):(S=wl(v.type,v.key,v.props,null,u.mode,S),S.ref=mo(u,g,v),S.return=u,u=S)}return o(u);case ys:e:{for(b=v.key;g!==null;){if(g.key===b)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(u,g.sibling),g=r(g,v.children||[]),g.return=u,u=g;break e}else{n(u,g);break}else e(u,g);g=g.sibling}g=eu(v,u.mode,S),g.return=u,u=g}return o(u);case Ki:return b=v._init,p(u,g,b(v._payload),S)}if(Ro(v))return x(u,g,v,S);if(co(v))return y(u,g,v,S);Ia(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(n(u,g.sibling),g=r(g,v),g.return=u,u=g):(n(u,g),g=Qc(v,u.mode,S),g.return=u,u=g),o(u)):n(u,g)}return p}var Xs=qg(!0),Yg=qg(!1),zl=Sr(null),Bl=null,Rs=null,gf=null;function vf(){gf=Rs=Bl=null}function _f(t){var e=zl.current;_t(zl),t._currentValue=e}function pd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Os(t,e){Bl=t,gf=Rs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(wn=!0),t.firstContext=null)}function Kn(t){var e=t._currentValue;if(gf!==t)if(t={context:t,memoizedValue:e,next:null},Rs===null){if(Bl===null)throw Error(ue(308));Rs=t,Bl.dependencies={lanes:0,firstContext:t}}else Rs=Rs.next=t;return e}var Nr=null;function yf(t){Nr===null?Nr=[t]:Nr.push(t)}function $g(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,yf(e)):(n.next=r.next,r.next=n),e.interleaved=n,zi(t,i)}function zi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ji=!1;function xf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ni(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function cr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,rt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,zi(t,n)}return r=i.interleaved,r===null?(e.next=e,yf(i)):(e.next=r.next,r.next=e),i.interleaved=e,zi(t,n)}function _l(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,sf(t,n)}}function Uh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Gl(t,e,n,i){var r=t.updateQueue;Ji=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,d=c=l=null,a=s;do{var f=a.lane,_=a.eventTime;if((i&f)===f){d!==null&&(d=d.next={eventTime:_,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,y=a;switch(f=e,_=n,y.tag){case 1:if(x=y.payload,typeof x=="function"){h=x.call(_,h,f);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,f=typeof x=="function"?x.call(_,h,f):x,f==null)break e;h=bt({},h,f);break e;case 2:Ji=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else _={eventTime:_,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=_,l=h):d=d.next=_,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(d===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Xr|=o,t.lanes=o,t.memoizedState=h}}function Nh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ue(191,r));r.call(i)}}}var fa={},Mi=Sr(fa),ea=Sr(fa),ta=Sr(fa);function Fr(t){if(t===fa)throw Error(ue(174));return t}function Sf(t,e){switch(pt(ta,e),pt(ea,t),pt(Mi,fa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Yu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Yu(e,t)}_t(Mi),pt(Mi,e)}function js(){_t(Mi),_t(ea),_t(ta)}function Kg(t){Fr(ta.current);var e=Fr(Mi.current),n=Yu(e,t.type);e!==n&&(pt(ea,t),pt(Mi,n))}function Mf(t){ea.current===t&&(_t(Mi),_t(ea))}var Tt=Sr(0);function Hl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var qc=[];function Ef(){for(var t=0;t<qc.length;t++)qc[t]._workInProgressVersionPrimary=null;qc.length=0}var yl=Hi.ReactCurrentDispatcher,Yc=Hi.ReactCurrentBatchConfig,Wr=0,At=null,zt=null,Yt=null,Vl=!1,ko=!1,na=0,Ty=0;function on(){throw Error(ue(321))}function wf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!hi(t[n],e[n]))return!1;return!0}function Tf(t,e,n,i,r,s){if(Wr=s,At=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,yl.current=t===null||t.memoizedState===null?Cy:Py,t=n(i,r),ko){s=0;do{if(ko=!1,na=0,25<=s)throw Error(ue(301));s+=1,Yt=zt=null,e.updateQueue=null,yl.current=Ly,t=n(i,r)}while(ko)}if(yl.current=Wl,e=zt!==null&&zt.next!==null,Wr=0,Yt=zt=At=null,Vl=!1,e)throw Error(ue(300));return t}function Af(){var t=na!==0;return na=0,t}function _i(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Yt===null?At.memoizedState=Yt=t:Yt=Yt.next=t,Yt}function Jn(){if(zt===null){var t=At.alternate;t=t!==null?t.memoizedState:null}else t=zt.next;var e=Yt===null?At.memoizedState:Yt.next;if(e!==null)Yt=e,zt=t;else{if(t===null)throw Error(ue(310));zt=t,t={memoizedState:zt.memoizedState,baseState:zt.baseState,baseQueue:zt.baseQueue,queue:zt.queue,next:null},Yt===null?At.memoizedState=Yt=t:Yt=Yt.next=t}return Yt}function ia(t,e){return typeof e=="function"?e(t):e}function $c(t){var e=Jn(),n=e.queue;if(n===null)throw Error(ue(311));n.lastRenderedReducer=t;var i=zt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((Wr&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,At.lanes|=d,Xr|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,hi(i,e.memoizedState)||(wn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,At.lanes|=s,Xr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Zc(t){var e=Jn(),n=e.queue;if(n===null)throw Error(ue(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);hi(s,e.memoizedState)||(wn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Jg(){}function Qg(t,e){var n=At,i=Jn(),r=e(),s=!hi(i.memoizedState,r);if(s&&(i.memoizedState=r,wn=!0),i=i.queue,bf(n0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Yt!==null&&Yt.memoizedState.tag&1){if(n.flags|=2048,ra(9,t0.bind(null,n,i,r,e),void 0,null),$t===null)throw Error(ue(349));Wr&30||e0(n,e,r)}return r}function e0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=At.updateQueue,e===null?(e={lastEffect:null,stores:null},At.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function t0(t,e,n,i){e.value=n,e.getSnapshot=i,i0(e)&&r0(t)}function n0(t,e,n){return n(function(){i0(e)&&r0(t)})}function i0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!hi(t,n)}catch{return!0}}function r0(t){var e=zi(t,1);e!==null&&di(e,t,1,-1)}function Fh(t){var e=_i();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:t},e.queue=t,t=t.dispatch=Ry.bind(null,At,t),[e.memoizedState,t]}function ra(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=At.updateQueue,e===null?(e={lastEffect:null,stores:null},At.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function s0(){return Jn().memoizedState}function xl(t,e,n,i){var r=_i();At.flags|=t,r.memoizedState=ra(1|e,n,void 0,i===void 0?null:i)}function dc(t,e,n,i){var r=Jn();i=i===void 0?null:i;var s=void 0;if(zt!==null){var o=zt.memoizedState;if(s=o.destroy,i!==null&&wf(i,o.deps)){r.memoizedState=ra(e,n,s,i);return}}At.flags|=t,r.memoizedState=ra(1|e,n,s,i)}function Oh(t,e){return xl(8390656,8,t,e)}function bf(t,e){return dc(2048,8,t,e)}function o0(t,e){return dc(4,2,t,e)}function a0(t,e){return dc(4,4,t,e)}function l0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function c0(t,e,n){return n=n!=null?n.concat([t]):null,dc(4,4,l0.bind(null,e,t),n)}function Rf(){}function u0(t,e){var n=Jn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&wf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function d0(t,e){var n=Jn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&wf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function f0(t,e,n){return Wr&21?(hi(n,e)||(n=vg(),At.lanes|=n,Xr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,wn=!0),t.memoizedState=n)}function Ay(t,e){var n=lt;lt=n!==0&&4>n?n:4,t(!0);var i=Yc.transition;Yc.transition={};try{t(!1),e()}finally{lt=n,Yc.transition=i}}function h0(){return Jn().memoizedState}function by(t,e,n){var i=dr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},p0(t))m0(e,n);else if(n=$g(t,e,n,i),n!==null){var r=vn();di(n,t,i,r),g0(n,e,i)}}function Ry(t,e,n){var i=dr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(p0(t))m0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,hi(a,o)){var l=e.interleaved;l===null?(r.next=r,yf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=$g(t,e,r,i),n!==null&&(r=vn(),di(n,t,i,r),g0(n,e,i))}}function p0(t){var e=t.alternate;return t===At||e!==null&&e===At}function m0(t,e){ko=Vl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function g0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,sf(t,n)}}var Wl={readContext:Kn,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useInsertionEffect:on,useLayoutEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useMutableSource:on,useSyncExternalStore:on,useId:on,unstable_isNewReconciler:!1},Cy={readContext:Kn,useCallback:function(t,e){return _i().memoizedState=[t,e===void 0?null:e],t},useContext:Kn,useEffect:Oh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,xl(4194308,4,l0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return xl(4194308,4,t,e)},useInsertionEffect:function(t,e){return xl(4,2,t,e)},useMemo:function(t,e){var n=_i();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=_i();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=by.bind(null,At,t),[i.memoizedState,t]},useRef:function(t){var e=_i();return t={current:t},e.memoizedState=t},useState:Fh,useDebugValue:Rf,useDeferredValue:function(t){return _i().memoizedState=t},useTransition:function(){var t=Fh(!1),e=t[0];return t=Ay.bind(null,t[1]),_i().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=At,r=_i();if(St){if(n===void 0)throw Error(ue(407));n=n()}else{if(n=e(),$t===null)throw Error(ue(349));Wr&30||e0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Oh(n0.bind(null,i,s,t),[t]),i.flags|=2048,ra(9,t0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=_i(),e=$t.identifierPrefix;if(St){var n=Ii,i=Di;n=(i&~(1<<32-ui(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=na++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Ty++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Py={readContext:Kn,useCallback:u0,useContext:Kn,useEffect:bf,useImperativeHandle:c0,useInsertionEffect:o0,useLayoutEffect:a0,useMemo:d0,useReducer:$c,useRef:s0,useState:function(){return $c(ia)},useDebugValue:Rf,useDeferredValue:function(t){var e=Jn();return f0(e,zt.memoizedState,t)},useTransition:function(){var t=$c(ia)[0],e=Jn().memoizedState;return[t,e]},useMutableSource:Jg,useSyncExternalStore:Qg,useId:h0,unstable_isNewReconciler:!1},Ly={readContext:Kn,useCallback:u0,useContext:Kn,useEffect:bf,useImperativeHandle:c0,useInsertionEffect:o0,useLayoutEffect:a0,useMemo:d0,useReducer:Zc,useRef:s0,useState:function(){return Zc(ia)},useDebugValue:Rf,useDeferredValue:function(t){var e=Jn();return zt===null?e.memoizedState=t:f0(e,zt.memoizedState,t)},useTransition:function(){var t=Zc(ia)[0],e=Jn().memoizedState;return[t,e]},useMutableSource:Jg,useSyncExternalStore:Qg,useId:h0,unstable_isNewReconciler:!1};function ri(t,e){if(t&&t.defaultProps){e=bt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function md(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:bt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var fc={isMounted:function(t){return(t=t._reactInternals)?$r(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=vn(),r=dr(t),s=Ni(i,r);s.payload=e,n!=null&&(s.callback=n),e=cr(t,s,r),e!==null&&(di(e,t,r,i),_l(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=vn(),r=dr(t),s=Ni(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=cr(t,s,r),e!==null&&(di(e,t,r,i),_l(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=vn(),i=dr(t),r=Ni(n,i);r.tag=2,e!=null&&(r.callback=e),e=cr(t,r,i),e!==null&&(di(e,t,i,n),_l(e,t,i))}};function kh(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Zo(n,i)||!Zo(r,s):!0}function v0(t,e,n){var i=!1,r=yr,s=e.contextType;return typeof s=="object"&&s!==null?s=Kn(s):(r=An(e)?Hr:fn.current,i=e.contextTypes,s=(i=i!=null)?Vs(t,r):yr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=fc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function zh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&fc.enqueueReplaceState(e,e.state,null)}function gd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},xf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Kn(s):(s=An(e)?Hr:fn.current,r.context=Vs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(md(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&fc.enqueueReplaceState(r,r.state,null),Gl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function qs(t,e){try{var n="",i=e;do n+=s_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Kc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function vd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Dy=typeof WeakMap=="function"?WeakMap:Map;function _0(t,e,n){n=Ni(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){jl||(jl=!0,bd=i),vd(t,e)},n}function y0(t,e,n){n=Ni(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){vd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){vd(t,e),typeof i!="function"&&(ur===null?ur=new Set([this]):ur.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Bh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Dy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=jy.bind(null,t,e,n),e.then(t,t))}function Gh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Hh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ni(-1,1),e.tag=2,cr(n,e,1))),n.lanes|=1),t)}var Iy=Hi.ReactCurrentOwner,wn=!1;function mn(t,e,n,i){e.child=t===null?Yg(e,null,n,i):Xs(e,t.child,n,i)}function Vh(t,e,n,i,r){n=n.render;var s=e.ref;return Os(e,r),i=Tf(t,e,n,i,s,r),n=Af(),t!==null&&!wn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Bi(t,e,r)):(St&&n&&hf(e),e.flags|=1,mn(t,e,i,r),e.child)}function Wh(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Ff(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,x0(t,e,s,i,r)):(t=wl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Zo,n(o,i)&&t.ref===e.ref)return Bi(t,e,r)}return e.flags|=1,t=fr(s,i),t.ref=e.ref,t.return=e,e.child=t}function x0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Zo(s,i)&&t.ref===e.ref)if(wn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(wn=!0);else return e.lanes=t.lanes,Bi(t,e,r)}return _d(t,e,n,i,r)}function S0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},pt(Ps,In),In|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,pt(Ps,In),In|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,pt(Ps,In),In|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,pt(Ps,In),In|=i;return mn(t,e,r,n),e.child}function M0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function _d(t,e,n,i,r){var s=An(n)?Hr:fn.current;return s=Vs(e,s),Os(e,r),n=Tf(t,e,n,i,s,r),i=Af(),t!==null&&!wn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Bi(t,e,r)):(St&&i&&hf(e),e.flags|=1,mn(t,e,n,r),e.child)}function Xh(t,e,n,i,r){if(An(n)){var s=!0;Fl(e)}else s=!1;if(Os(e,r),e.stateNode===null)Sl(t,e),v0(e,n,i),gd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Kn(c):(c=An(n)?Hr:fn.current,c=Vs(e,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&zh(e,o,i,c),Ji=!1;var f=e.memoizedState;o.state=f,Gl(e,i,o,r),l=e.memoizedState,a!==i||f!==l||Tn.current||Ji?(typeof d=="function"&&(md(e,n,d,i),l=e.memoizedState),(a=Ji||kh(e,n,a,i,f,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Zg(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ri(e.type,a),o.props=c,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Kn(l):(l=An(n)?Hr:fn.current,l=Vs(e,l));var _=n.getDerivedStateFromProps;(d=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&zh(e,o,i,l),Ji=!1,f=e.memoizedState,o.state=f,Gl(e,i,o,r);var x=e.memoizedState;a!==h||f!==x||Tn.current||Ji?(typeof _=="function"&&(md(e,n,_,i),x=e.memoizedState),(c=Ji||kh(e,n,c,i,f,x,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return yd(t,e,n,i,s,r)}function yd(t,e,n,i,r,s){M0(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Ph(e,n,!1),Bi(t,e,s);i=e.stateNode,Iy.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Xs(e,t.child,null,s),e.child=Xs(e,null,a,s)):mn(t,e,a,s),e.memoizedState=i.state,r&&Ph(e,n,!0),e.child}function E0(t){var e=t.stateNode;e.pendingContext?Ch(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ch(t,e.context,!1),Sf(t,e.containerInfo)}function jh(t,e,n,i,r){return Ws(),mf(r),e.flags|=256,mn(t,e,n,i),e.child}var xd={dehydrated:null,treeContext:null,retryLane:0};function Sd(t){return{baseLanes:t,cachePool:null,transitions:null}}function w0(t,e,n){var i=e.pendingProps,r=Tt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),pt(Tt,r&1),t===null)return hd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=mc(o,i,0,null),t=kr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Sd(n),e.memoizedState=xd,t):Cf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Uy(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=fr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=fr(a,s):(s=kr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Sd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=xd,i}return s=t.child,t=s.sibling,i=fr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Cf(t,e){return e=mc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ua(t,e,n,i){return i!==null&&mf(i),Xs(e,t.child,null,n),t=Cf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Uy(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Kc(Error(ue(422))),Ua(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=mc({mode:"visible",children:i.children},r,0,null),s=kr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Xs(e,t.child,null,o),e.child.memoizedState=Sd(o),e.memoizedState=xd,s);if(!(e.mode&1))return Ua(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ue(419)),i=Kc(s,i,void 0),Ua(t,e,o,i)}if(a=(o&t.childLanes)!==0,wn||a){if(i=$t,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,zi(t,r),di(i,t,r,-1))}return Nf(),i=Kc(Error(ue(421))),Ua(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=qy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Nn=lr(r.nextSibling),Fn=e,St=!0,ai=null,t!==null&&(Vn[Wn++]=Di,Vn[Wn++]=Ii,Vn[Wn++]=Vr,Di=t.id,Ii=t.overflow,Vr=e),e=Cf(e,i.children),e.flags|=4096,e)}function qh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),pd(t.return,e,n)}function Jc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function T0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(mn(t,e,i.children,n),i=Tt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&qh(t,n,e);else if(t.tag===19)qh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(pt(Tt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Hl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Jc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Hl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Jc(e,!0,n,null,s);break;case"together":Jc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Sl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Bi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Xr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ue(153));if(e.child!==null){for(t=e.child,n=fr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=fr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Ny(t,e,n){switch(e.tag){case 3:E0(e),Ws();break;case 5:Kg(e);break;case 1:An(e.type)&&Fl(e);break;case 4:Sf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;pt(zl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(pt(Tt,Tt.current&1),e.flags|=128,null):n&e.child.childLanes?w0(t,e,n):(pt(Tt,Tt.current&1),t=Bi(t,e,n),t!==null?t.sibling:null);pt(Tt,Tt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return T0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),pt(Tt,Tt.current),i)break;return null;case 22:case 23:return e.lanes=0,S0(t,e,n)}return Bi(t,e,n)}var A0,Md,b0,R0;A0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Md=function(){};b0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Fr(Mi.current);var s=null;switch(n){case"input":r=Wu(t,r),i=Wu(t,i),s=[];break;case"select":r=bt({},r,{value:void 0}),i=bt({},i,{value:void 0}),s=[];break;case"textarea":r=qu(t,r),i=qu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ul)}$u(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Vo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Vo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&gt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};R0=function(t,e,n,i){n!==i&&(e.flags|=4)};function go(t,e){if(!St)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function an(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Fy(t,e,n){var i=e.pendingProps;switch(pf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return an(e),null;case 1:return An(e.type)&&Nl(),an(e),null;case 3:return i=e.stateNode,js(),_t(Tn),_t(fn),Ef(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Da(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ai!==null&&(Pd(ai),ai=null))),Md(t,e),an(e),null;case 5:Mf(e);var r=Fr(ta.current);if(n=e.type,t!==null&&e.stateNode!=null)b0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ue(166));return an(e),null}if(t=Fr(Mi.current),Da(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[xi]=e,i[Qo]=s,t=(e.mode&1)!==0,n){case"dialog":gt("cancel",i),gt("close",i);break;case"iframe":case"object":case"embed":gt("load",i);break;case"video":case"audio":for(r=0;r<Po.length;r++)gt(Po[r],i);break;case"source":gt("error",i);break;case"img":case"image":case"link":gt("error",i),gt("load",i);break;case"details":gt("toggle",i);break;case"input":nh(i,s),gt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},gt("invalid",i);break;case"textarea":rh(i,s),gt("invalid",i)}$u(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&La(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&La(i.textContent,a,t),r=["children",""+a]):Vo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&gt("scroll",i)}switch(n){case"input":Ea(i),ih(i,s,!0);break;case"textarea":Ea(i),sh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ul)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ng(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[xi]=e,t[Qo]=i,A0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Zu(n,i),n){case"dialog":gt("cancel",t),gt("close",t),r=i;break;case"iframe":case"object":case"embed":gt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Po.length;r++)gt(Po[r],t);r=i;break;case"source":gt("error",t),r=i;break;case"img":case"image":case"link":gt("error",t),gt("load",t),r=i;break;case"details":gt("toggle",t),r=i;break;case"input":nh(t,i),r=Wu(t,i),gt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=bt({},i,{value:void 0}),gt("invalid",t);break;case"textarea":rh(t,i),r=qu(t,i),gt("invalid",t);break;default:r=i}$u(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?sg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ig(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Wo(t,l):typeof l=="number"&&Wo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Vo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&gt("scroll",t):l!=null&&Jd(t,s,l,o))}switch(n){case"input":Ea(t),ih(t,i,!1);break;case"textarea":Ea(t),sh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+_r(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Is(t,!!i.multiple,s,!1):i.defaultValue!=null&&Is(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ul)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return an(e),null;case 6:if(t&&e.stateNode!=null)R0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ue(166));if(n=Fr(ta.current),Fr(Mi.current),Da(e)){if(i=e.stateNode,n=e.memoizedProps,i[xi]=e,(s=i.nodeValue!==n)&&(t=Fn,t!==null))switch(t.tag){case 3:La(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&La(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[xi]=e,e.stateNode=i}return an(e),null;case 13:if(_t(Tt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(St&&Nn!==null&&e.mode&1&&!(e.flags&128))jg(),Ws(),e.flags|=98560,s=!1;else if(s=Da(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ue(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ue(317));s[xi]=e}else Ws(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;an(e),s=!1}else ai!==null&&(Pd(ai),ai=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Tt.current&1?Bt===0&&(Bt=3):Nf())),e.updateQueue!==null&&(e.flags|=4),an(e),null);case 4:return js(),Md(t,e),t===null&&Ko(e.stateNode.containerInfo),an(e),null;case 10:return _f(e.type._context),an(e),null;case 17:return An(e.type)&&Nl(),an(e),null;case 19:if(_t(Tt),s=e.memoizedState,s===null)return an(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)go(s,!1);else{if(Bt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Hl(t),o!==null){for(e.flags|=128,go(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return pt(Tt,Tt.current&1|2),e.child}t=t.sibling}s.tail!==null&&It()>Ys&&(e.flags|=128,i=!0,go(s,!1),e.lanes=4194304)}else{if(!i)if(t=Hl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),go(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!St)return an(e),null}else 2*It()-s.renderingStartTime>Ys&&n!==1073741824&&(e.flags|=128,i=!0,go(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=It(),e.sibling=null,n=Tt.current,pt(Tt,i?n&1|2:n&1),e):(an(e),null);case 22:case 23:return Uf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?In&1073741824&&(an(e),e.subtreeFlags&6&&(e.flags|=8192)):an(e),null;case 24:return null;case 25:return null}throw Error(ue(156,e.tag))}function Oy(t,e){switch(pf(e),e.tag){case 1:return An(e.type)&&Nl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return js(),_t(Tn),_t(fn),Ef(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Mf(e),null;case 13:if(_t(Tt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ue(340));Ws()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return _t(Tt),null;case 4:return js(),null;case 10:return _f(e.type._context),null;case 22:case 23:return Uf(),null;case 24:return null;default:return null}}var Na=!1,un=!1,ky=typeof WeakSet=="function"?WeakSet:Set,Ae=null;function Cs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Ct(t,e,i)}else n.current=null}function Ed(t,e,n){try{n()}catch(i){Ct(t,e,i)}}var Yh=!1;function zy(t,e){if(od=Ll,t=Ig(),ff(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,h=t,f=null;t:for(;;){for(var _;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(_=h.firstChild)!==null;)f=h,h=_;for(;;){if(h===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++d===i&&(l=o),(_=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=_}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ad={focusedElem:t,selectionRange:n},Ll=!1,Ae=e;Ae!==null;)if(e=Ae,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ae=t;else for(;Ae!==null;){e=Ae;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,p=x.memoizedState,u=e.stateNode,g=u.getSnapshotBeforeUpdate(e.elementType===e.type?y:ri(e.type,y),p);u.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ue(163))}}catch(S){Ct(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,Ae=t;break}Ae=e.return}return x=Yh,Yh=!1,x}function zo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Ed(e,n,s)}r=r.next}while(r!==i)}}function hc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function wd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function C0(t){var e=t.alternate;e!==null&&(t.alternate=null,C0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[xi],delete e[Qo],delete e[ud],delete e[Sy],delete e[My])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function P0(t){return t.tag===5||t.tag===3||t.tag===4}function $h(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||P0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Td(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ul));else if(i!==4&&(t=t.child,t!==null))for(Td(t,e,n),t=t.sibling;t!==null;)Td(t,e,n),t=t.sibling}function Ad(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Ad(t,e,n),t=t.sibling;t!==null;)Ad(t,e,n),t=t.sibling}var en=null,si=!1;function Wi(t,e,n){for(n=n.child;n!==null;)L0(t,e,n),n=n.sibling}function L0(t,e,n){if(Si&&typeof Si.onCommitFiberUnmount=="function")try{Si.onCommitFiberUnmount(sc,n)}catch{}switch(n.tag){case 5:un||Cs(n,e);case 6:var i=en,r=si;en=null,Wi(t,e,n),en=i,si=r,en!==null&&(si?(t=en,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):en.removeChild(n.stateNode));break;case 18:en!==null&&(si?(t=en,n=n.stateNode,t.nodeType===8?Xc(t.parentNode,n):t.nodeType===1&&Xc(t,n),Yo(t)):Xc(en,n.stateNode));break;case 4:i=en,r=si,en=n.stateNode.containerInfo,si=!0,Wi(t,e,n),en=i,si=r;break;case 0:case 11:case 14:case 15:if(!un&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ed(n,e,o),r=r.next}while(r!==i)}Wi(t,e,n);break;case 1:if(!un&&(Cs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Ct(n,e,a)}Wi(t,e,n);break;case 21:Wi(t,e,n);break;case 22:n.mode&1?(un=(i=un)||n.memoizedState!==null,Wi(t,e,n),un=i):Wi(t,e,n);break;default:Wi(t,e,n)}}function Zh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new ky),e.forEach(function(i){var r=Yy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Qn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:en=a.stateNode,si=!1;break e;case 3:en=a.stateNode.containerInfo,si=!0;break e;case 4:en=a.stateNode.containerInfo,si=!0;break e}a=a.return}if(en===null)throw Error(ue(160));L0(s,o,r),en=null,si=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Ct(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)D0(e,t),e=e.sibling}function D0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Qn(e,t),vi(t),i&4){try{zo(3,t,t.return),hc(3,t)}catch(y){Ct(t,t.return,y)}try{zo(5,t,t.return)}catch(y){Ct(t,t.return,y)}}break;case 1:Qn(e,t),vi(t),i&512&&n!==null&&Cs(n,n.return);break;case 5:if(Qn(e,t),vi(t),i&512&&n!==null&&Cs(n,n.return),t.flags&32){var r=t.stateNode;try{Wo(r,"")}catch(y){Ct(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&eg(r,s),Zu(a,o);var c=Zu(a,s);for(o=0;o<l.length;o+=2){var d=l[o],h=l[o+1];d==="style"?sg(r,h):d==="dangerouslySetInnerHTML"?ig(r,h):d==="children"?Wo(r,h):Jd(r,d,h,c)}switch(a){case"input":Xu(r,s);break;case"textarea":tg(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?Is(r,!!s.multiple,_,!1):f!==!!s.multiple&&(s.defaultValue!=null?Is(r,!!s.multiple,s.defaultValue,!0):Is(r,!!s.multiple,s.multiple?[]:"",!1))}r[Qo]=s}catch(y){Ct(t,t.return,y)}}break;case 6:if(Qn(e,t),vi(t),i&4){if(t.stateNode===null)throw Error(ue(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){Ct(t,t.return,y)}}break;case 3:if(Qn(e,t),vi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Yo(e.containerInfo)}catch(y){Ct(t,t.return,y)}break;case 4:Qn(e,t),vi(t);break;case 13:Qn(e,t),vi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Df=It())),i&4&&Zh(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(un=(c=un)||d,Qn(e,t),un=c):Qn(e,t),vi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(Ae=t,d=t.child;d!==null;){for(h=Ae=d;Ae!==null;){switch(f=Ae,_=f.child,f.tag){case 0:case 11:case 14:case 15:zo(4,f,f.return);break;case 1:Cs(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(y){Ct(i,n,y)}}break;case 5:Cs(f,f.return);break;case 22:if(f.memoizedState!==null){Jh(h);continue}}_!==null?(_.return=f,Ae=_):Jh(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=rg("display",o))}catch(y){Ct(t,t.return,y)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(y){Ct(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Qn(e,t),vi(t),i&4&&Zh(t);break;case 21:break;default:Qn(e,t),vi(t)}}function vi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(P0(n)){var i=n;break e}n=n.return}throw Error(ue(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Wo(r,""),i.flags&=-33);var s=$h(t);Ad(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=$h(t);Td(t,a,o);break;default:throw Error(ue(161))}}catch(l){Ct(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function By(t,e,n){Ae=t,I0(t)}function I0(t,e,n){for(var i=(t.mode&1)!==0;Ae!==null;){var r=Ae,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Na;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||un;a=Na;var c=un;if(Na=o,(un=l)&&!c)for(Ae=r;Ae!==null;)o=Ae,l=o.child,o.tag===22&&o.memoizedState!==null?Qh(r):l!==null?(l.return=o,Ae=l):Qh(r);for(;s!==null;)Ae=s,I0(s),s=s.sibling;Ae=r,Na=a,un=c}Kh(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ae=s):Kh(t)}}function Kh(t){for(;Ae!==null;){var e=Ae;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:un||hc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!un)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ri(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Nh(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Nh(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&Yo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ue(163))}un||e.flags&512&&wd(e)}catch(f){Ct(e,e.return,f)}}if(e===t){Ae=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ae=n;break}Ae=e.return}}function Jh(t){for(;Ae!==null;){var e=Ae;if(e===t){Ae=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ae=n;break}Ae=e.return}}function Qh(t){for(;Ae!==null;){var e=Ae;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{hc(4,e)}catch(l){Ct(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Ct(e,r,l)}}var s=e.return;try{wd(e)}catch(l){Ct(e,s,l)}break;case 5:var o=e.return;try{wd(e)}catch(l){Ct(e,o,l)}}}catch(l){Ct(e,e.return,l)}if(e===t){Ae=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ae=a;break}Ae=e.return}}var Gy=Math.ceil,Xl=Hi.ReactCurrentDispatcher,Pf=Hi.ReactCurrentOwner,Zn=Hi.ReactCurrentBatchConfig,rt=0,$t=null,Ot=null,rn=0,In=0,Ps=Sr(0),Bt=0,sa=null,Xr=0,pc=0,Lf=0,Bo=null,Sn=null,Df=0,Ys=1/0,Ci=null,jl=!1,bd=null,ur=null,Fa=!1,nr=null,ql=0,Go=0,Rd=null,Ml=-1,El=0;function vn(){return rt&6?It():Ml!==-1?Ml:Ml=It()}function dr(t){return t.mode&1?rt&2&&rn!==0?rn&-rn:wy.transition!==null?(El===0&&(El=vg()),El):(t=lt,t!==0||(t=window.event,t=t===void 0?16:wg(t.type)),t):1}function di(t,e,n,i){if(50<Go)throw Go=0,Rd=null,Error(ue(185));ca(t,n,i),(!(rt&2)||t!==$t)&&(t===$t&&(!(rt&2)&&(pc|=n),Bt===4&&er(t,rn)),bn(t,i),n===1&&rt===0&&!(e.mode&1)&&(Ys=It()+500,uc&&Mr()))}function bn(t,e){var n=t.callbackNode;w_(t,e);var i=Pl(t,t===$t?rn:0);if(i===0)n!==null&&lh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&lh(n),e===1)t.tag===0?Ey(ep.bind(null,t)):Vg(ep.bind(null,t)),yy(function(){!(rt&6)&&Mr()}),n=null;else{switch(_g(i)){case 1:n=rf;break;case 4:n=mg;break;case 16:n=Cl;break;case 536870912:n=gg;break;default:n=Cl}n=G0(n,U0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function U0(t,e){if(Ml=-1,El=0,rt&6)throw Error(ue(327));var n=t.callbackNode;if(ks()&&t.callbackNode!==n)return null;var i=Pl(t,t===$t?rn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Yl(t,i);else{e=i;var r=rt;rt|=2;var s=F0();($t!==t||rn!==e)&&(Ci=null,Ys=It()+500,Or(t,e));do try{Wy();break}catch(a){N0(t,a)}while(!0);vf(),Xl.current=s,rt=r,Ot!==null?e=0:($t=null,rn=0,e=Bt)}if(e!==0){if(e===2&&(r=td(t),r!==0&&(i=r,e=Cd(t,r))),e===1)throw n=sa,Or(t,0),er(t,i),bn(t,It()),n;if(e===6)er(t,i);else{if(r=t.current.alternate,!(i&30)&&!Hy(r)&&(e=Yl(t,i),e===2&&(s=td(t),s!==0&&(i=s,e=Cd(t,s))),e===1))throw n=sa,Or(t,0),er(t,i),bn(t,It()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ue(345));case 2:Cr(t,Sn,Ci);break;case 3:if(er(t,i),(i&130023424)===i&&(e=Df+500-It(),10<e)){if(Pl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){vn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=cd(Cr.bind(null,t,Sn,Ci),e);break}Cr(t,Sn,Ci);break;case 4:if(er(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ui(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=It()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Gy(i/1960))-i,10<i){t.timeoutHandle=cd(Cr.bind(null,t,Sn,Ci),i);break}Cr(t,Sn,Ci);break;case 5:Cr(t,Sn,Ci);break;default:throw Error(ue(329))}}}return bn(t,It()),t.callbackNode===n?U0.bind(null,t):null}function Cd(t,e){var n=Bo;return t.current.memoizedState.isDehydrated&&(Or(t,e).flags|=256),t=Yl(t,e),t!==2&&(e=Sn,Sn=n,e!==null&&Pd(e)),t}function Pd(t){Sn===null?Sn=t:Sn.push.apply(Sn,t)}function Hy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!hi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function er(t,e){for(e&=~Lf,e&=~pc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ui(e),i=1<<n;t[n]=-1,e&=~i}}function ep(t){if(rt&6)throw Error(ue(327));ks();var e=Pl(t,0);if(!(e&1))return bn(t,It()),null;var n=Yl(t,e);if(t.tag!==0&&n===2){var i=td(t);i!==0&&(e=i,n=Cd(t,i))}if(n===1)throw n=sa,Or(t,0),er(t,e),bn(t,It()),n;if(n===6)throw Error(ue(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Cr(t,Sn,Ci),bn(t,It()),null}function If(t,e){var n=rt;rt|=1;try{return t(e)}finally{rt=n,rt===0&&(Ys=It()+500,uc&&Mr())}}function jr(t){nr!==null&&nr.tag===0&&!(rt&6)&&ks();var e=rt;rt|=1;var n=Zn.transition,i=lt;try{if(Zn.transition=null,lt=1,t)return t()}finally{lt=i,Zn.transition=n,rt=e,!(rt&6)&&Mr()}}function Uf(){In=Ps.current,_t(Ps)}function Or(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,_y(n)),Ot!==null)for(n=Ot.return;n!==null;){var i=n;switch(pf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Nl();break;case 3:js(),_t(Tn),_t(fn),Ef();break;case 5:Mf(i);break;case 4:js();break;case 13:_t(Tt);break;case 19:_t(Tt);break;case 10:_f(i.type._context);break;case 22:case 23:Uf()}n=n.return}if($t=t,Ot=t=fr(t.current,null),rn=In=e,Bt=0,sa=null,Lf=pc=Xr=0,Sn=Bo=null,Nr!==null){for(e=0;e<Nr.length;e++)if(n=Nr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Nr=null}return t}function N0(t,e){do{var n=Ot;try{if(vf(),yl.current=Wl,Vl){for(var i=At.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Vl=!1}if(Wr=0,Yt=zt=At=null,ko=!1,na=0,Pf.current=null,n===null||n.return===null){Bt=1,sa=e,Ot=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=rn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var _=Gh(o);if(_!==null){_.flags&=-257,Hh(_,o,a,s,e),_.mode&1&&Bh(s,c,e),e=_,l=c;var x=e.updateQueue;if(x===null){var y=new Set;y.add(l),e.updateQueue=y}else x.add(l);break e}else{if(!(e&1)){Bh(s,c,e),Nf();break e}l=Error(ue(426))}}else if(St&&a.mode&1){var p=Gh(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Hh(p,o,a,s,e),mf(qs(l,a));break e}}s=l=qs(l,a),Bt!==4&&(Bt=2),Bo===null?Bo=[s]:Bo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=_0(s,l,e);Uh(s,u);break e;case 1:a=l;var g=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(ur===null||!ur.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=y0(s,a,e);Uh(s,S);break e}}s=s.return}while(s!==null)}k0(n)}catch(P){e=P,Ot===n&&n!==null&&(Ot=n=n.return);continue}break}while(!0)}function F0(){var t=Xl.current;return Xl.current=Wl,t===null?Wl:t}function Nf(){(Bt===0||Bt===3||Bt===2)&&(Bt=4),$t===null||!(Xr&268435455)&&!(pc&268435455)||er($t,rn)}function Yl(t,e){var n=rt;rt|=2;var i=F0();($t!==t||rn!==e)&&(Ci=null,Or(t,e));do try{Vy();break}catch(r){N0(t,r)}while(!0);if(vf(),rt=n,Xl.current=i,Ot!==null)throw Error(ue(261));return $t=null,rn=0,Bt}function Vy(){for(;Ot!==null;)O0(Ot)}function Wy(){for(;Ot!==null&&!m_();)O0(Ot)}function O0(t){var e=B0(t.alternate,t,In);t.memoizedProps=t.pendingProps,e===null?k0(t):Ot=e,Pf.current=null}function k0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Oy(n,e),n!==null){n.flags&=32767,Ot=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Bt=6,Ot=null;return}}else if(n=Fy(n,e,In),n!==null){Ot=n;return}if(e=e.sibling,e!==null){Ot=e;return}Ot=e=t}while(e!==null);Bt===0&&(Bt=5)}function Cr(t,e,n){var i=lt,r=Zn.transition;try{Zn.transition=null,lt=1,Xy(t,e,n,i)}finally{Zn.transition=r,lt=i}return null}function Xy(t,e,n,i){do ks();while(nr!==null);if(rt&6)throw Error(ue(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ue(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(T_(t,s),t===$t&&(Ot=$t=null,rn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Fa||(Fa=!0,G0(Cl,function(){return ks(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Zn.transition,Zn.transition=null;var o=lt;lt=1;var a=rt;rt|=4,Pf.current=null,zy(t,n),D0(n,t),dy(ad),Ll=!!od,ad=od=null,t.current=n,By(n),g_(),rt=a,lt=o,Zn.transition=s}else t.current=n;if(Fa&&(Fa=!1,nr=t,ql=r),s=t.pendingLanes,s===0&&(ur=null),y_(n.stateNode),bn(t,It()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(jl)throw jl=!1,t=bd,bd=null,t;return ql&1&&t.tag!==0&&ks(),s=t.pendingLanes,s&1?t===Rd?Go++:(Go=0,Rd=t):Go=0,Mr(),null}function ks(){if(nr!==null){var t=_g(ql),e=Zn.transition,n=lt;try{if(Zn.transition=null,lt=16>t?16:t,nr===null)var i=!1;else{if(t=nr,nr=null,ql=0,rt&6)throw Error(ue(331));var r=rt;for(rt|=4,Ae=t.current;Ae!==null;){var s=Ae,o=s.child;if(Ae.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Ae=c;Ae!==null;){var d=Ae;switch(d.tag){case 0:case 11:case 15:zo(8,d,s)}var h=d.child;if(h!==null)h.return=d,Ae=h;else for(;Ae!==null;){d=Ae;var f=d.sibling,_=d.return;if(C0(d),d===c){Ae=null;break}if(f!==null){f.return=_,Ae=f;break}Ae=_}}}var x=s.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var p=y.sibling;y.sibling=null,y=p}while(y!==null)}}Ae=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ae=o;else e:for(;Ae!==null;){if(s=Ae,s.flags&2048)switch(s.tag){case 0:case 11:case 15:zo(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,Ae=u;break e}Ae=s.return}}var g=t.current;for(Ae=g;Ae!==null;){o=Ae;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,Ae=v;else e:for(o=g;Ae!==null;){if(a=Ae,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:hc(9,a)}}catch(P){Ct(a,a.return,P)}if(a===o){Ae=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,Ae=S;break e}Ae=a.return}}if(rt=r,Mr(),Si&&typeof Si.onPostCommitFiberRoot=="function")try{Si.onPostCommitFiberRoot(sc,t)}catch{}i=!0}return i}finally{lt=n,Zn.transition=e}}return!1}function tp(t,e,n){e=qs(n,e),e=_0(t,e,1),t=cr(t,e,1),e=vn(),t!==null&&(ca(t,1,e),bn(t,e))}function Ct(t,e,n){if(t.tag===3)tp(t,t,n);else for(;e!==null;){if(e.tag===3){tp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ur===null||!ur.has(i))){t=qs(n,t),t=y0(e,t,1),e=cr(e,t,1),t=vn(),e!==null&&(ca(e,1,t),bn(e,t));break}}e=e.return}}function jy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=vn(),t.pingedLanes|=t.suspendedLanes&n,$t===t&&(rn&n)===n&&(Bt===4||Bt===3&&(rn&130023424)===rn&&500>It()-Df?Or(t,0):Lf|=n),bn(t,e)}function z0(t,e){e===0&&(t.mode&1?(e=Aa,Aa<<=1,!(Aa&130023424)&&(Aa=4194304)):e=1);var n=vn();t=zi(t,e),t!==null&&(ca(t,e,n),bn(t,n))}function qy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),z0(t,n)}function Yy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ue(314))}i!==null&&i.delete(e),z0(t,n)}var B0;B0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Tn.current)wn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return wn=!1,Ny(t,e,n);wn=!!(t.flags&131072)}else wn=!1,St&&e.flags&1048576&&Wg(e,kl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Sl(t,e),t=e.pendingProps;var r=Vs(e,fn.current);Os(e,n),r=Tf(null,e,i,t,r,n);var s=Af();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,An(i)?(s=!0,Fl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,xf(e),r.updater=fc,e.stateNode=r,r._reactInternals=e,gd(e,i,t,n),e=yd(null,e,i,!0,s,n)):(e.tag=0,St&&s&&hf(e),mn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Sl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Zy(i),t=ri(i,t),r){case 0:e=_d(null,e,i,t,n);break e;case 1:e=Xh(null,e,i,t,n);break e;case 11:e=Vh(null,e,i,t,n);break e;case 14:e=Wh(null,e,i,ri(i.type,t),n);break e}throw Error(ue(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ri(i,r),_d(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ri(i,r),Xh(t,e,i,r,n);case 3:e:{if(E0(e),t===null)throw Error(ue(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Zg(t,e),Gl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=qs(Error(ue(423)),e),e=jh(t,e,i,n,r);break e}else if(i!==r){r=qs(Error(ue(424)),e),e=jh(t,e,i,n,r);break e}else for(Nn=lr(e.stateNode.containerInfo.firstChild),Fn=e,St=!0,ai=null,n=Yg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ws(),i===r){e=Bi(t,e,n);break e}mn(t,e,i,n)}e=e.child}return e;case 5:return Kg(e),t===null&&hd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,ld(i,r)?o=null:s!==null&&ld(i,s)&&(e.flags|=32),M0(t,e),mn(t,e,o,n),e.child;case 6:return t===null&&hd(e),null;case 13:return w0(t,e,n);case 4:return Sf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Xs(e,null,i,n):mn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ri(i,r),Vh(t,e,i,r,n);case 7:return mn(t,e,e.pendingProps,n),e.child;case 8:return mn(t,e,e.pendingProps.children,n),e.child;case 12:return mn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,pt(zl,i._currentValue),i._currentValue=o,s!==null)if(hi(s.value,o)){if(s.children===r.children&&!Tn.current){e=Bi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ni(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),pd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ue(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),pd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}mn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Os(e,n),r=Kn(r),i=i(r),e.flags|=1,mn(t,e,i,n),e.child;case 14:return i=e.type,r=ri(i,e.pendingProps),r=ri(i.type,r),Wh(t,e,i,r,n);case 15:return x0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ri(i,r),Sl(t,e),e.tag=1,An(i)?(t=!0,Fl(e)):t=!1,Os(e,n),v0(e,i,r),gd(e,i,r,n),yd(null,e,i,!0,t,n);case 19:return T0(t,e,n);case 22:return S0(t,e,n)}throw Error(ue(156,e.tag))};function G0(t,e){return pg(t,e)}function $y(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(t,e,n,i){return new $y(t,e,n,i)}function Ff(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Zy(t){if(typeof t=="function")return Ff(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ef)return 11;if(t===tf)return 14}return 2}function fr(t,e){var n=t.alternate;return n===null?(n=$n(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function wl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Ff(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case xs:return kr(n.children,r,s,e);case Qd:o=8,r|=8;break;case Bu:return t=$n(12,n,e,r|2),t.elementType=Bu,t.lanes=s,t;case Gu:return t=$n(13,n,e,r),t.elementType=Gu,t.lanes=s,t;case Hu:return t=$n(19,n,e,r),t.elementType=Hu,t.lanes=s,t;case Km:return mc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case $m:o=10;break e;case Zm:o=9;break e;case ef:o=11;break e;case tf:o=14;break e;case Ki:o=16,i=null;break e}throw Error(ue(130,t==null?t:typeof t,""))}return e=$n(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function kr(t,e,n,i){return t=$n(7,t,i,e),t.lanes=n,t}function mc(t,e,n,i){return t=$n(22,t,i,e),t.elementType=Km,t.lanes=n,t.stateNode={isHidden:!1},t}function Qc(t,e,n){return t=$n(6,t,null,e),t.lanes=n,t}function eu(t,e,n){return e=$n(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ky(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Uc(0),this.expirationTimes=Uc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Uc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Of(t,e,n,i,r,s,o,a,l){return t=new Ky(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=$n(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xf(s),t}function Jy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ys,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function H0(t){if(!t)return yr;t=t._reactInternals;e:{if($r(t)!==t||t.tag!==1)throw Error(ue(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(An(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ue(171))}if(t.tag===1){var n=t.type;if(An(n))return Hg(t,n,e)}return e}function V0(t,e,n,i,r,s,o,a,l){return t=Of(n,i,!0,t,r,s,o,a,l),t.context=H0(null),n=t.current,i=vn(),r=dr(n),s=Ni(i,r),s.callback=e??null,cr(n,s,r),t.current.lanes=r,ca(t,r,i),bn(t,i),t}function gc(t,e,n,i){var r=e.current,s=vn(),o=dr(r);return n=H0(n),e.context===null?e.context=n:e.pendingContext=n,e=Ni(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=cr(r,e,o),t!==null&&(di(t,r,o,s),_l(t,r,o)),o}function $l(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function np(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function kf(t,e){np(t,e),(t=t.alternate)&&np(t,e)}function Qy(){return null}var W0=typeof reportError=="function"?reportError:function(t){console.error(t)};function zf(t){this._internalRoot=t}vc.prototype.render=zf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ue(409));gc(t,e,null,null)};vc.prototype.unmount=zf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;jr(function(){gc(null,t,null,null)}),e[ki]=null}};function vc(t){this._internalRoot=t}vc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Sg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Qi.length&&e!==0&&e<Qi[n].priority;n++);Qi.splice(n,0,t),n===0&&Eg(t)}};function Bf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function _c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ip(){}function ex(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=$l(o);s.call(c)}}var o=V0(e,i,t,0,null,!1,!1,"",ip);return t._reactRootContainer=o,t[ki]=o.current,Ko(t.nodeType===8?t.parentNode:t),jr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=$l(l);a.call(c)}}var l=Of(t,0,!1,null,null,!1,!1,"",ip);return t._reactRootContainer=l,t[ki]=l.current,Ko(t.nodeType===8?t.parentNode:t),jr(function(){gc(e,l,n,i)}),l}function yc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=$l(o);a.call(l)}}gc(e,o,t,r)}else o=ex(n,e,t,r,i);return $l(o)}yg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Co(e.pendingLanes);n!==0&&(sf(e,n|1),bn(e,It()),!(rt&6)&&(Ys=It()+500,Mr()))}break;case 13:jr(function(){var i=zi(t,1);if(i!==null){var r=vn();di(i,t,1,r)}}),kf(t,1)}};of=function(t){if(t.tag===13){var e=zi(t,134217728);if(e!==null){var n=vn();di(e,t,134217728,n)}kf(t,134217728)}};xg=function(t){if(t.tag===13){var e=dr(t),n=zi(t,e);if(n!==null){var i=vn();di(n,t,e,i)}kf(t,e)}};Sg=function(){return lt};Mg=function(t,e){var n=lt;try{return lt=t,e()}finally{lt=n}};Ju=function(t,e,n){switch(e){case"input":if(Xu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=cc(i);if(!r)throw Error(ue(90));Qm(i),Xu(i,r)}}}break;case"textarea":tg(t,n);break;case"select":e=n.value,e!=null&&Is(t,!!n.multiple,e,!1)}};lg=If;cg=jr;var tx={usingClientEntryPoint:!1,Events:[da,ws,cc,og,ag,If]},vo={findFiberByHostInstance:Ur,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nx={bundleType:vo.bundleType,version:vo.version,rendererPackageName:vo.rendererPackageName,rendererConfig:vo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Hi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=fg(t),t===null?null:t.stateNode},findFiberByHostInstance:vo.findFiberByHostInstance||Qy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oa.isDisabled&&Oa.supportsFiber)try{sc=Oa.inject(nx),Si=Oa}catch{}}kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tx;kn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bf(e))throw Error(ue(200));return Jy(t,e,null,n)};kn.createRoot=function(t,e){if(!Bf(t))throw Error(ue(299));var n=!1,i="",r=W0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Of(t,1,!1,null,null,n,!1,i,r),t[ki]=e.current,Ko(t.nodeType===8?t.parentNode:t),new zf(e)};kn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ue(188)):(t=Object.keys(t).join(","),Error(ue(268,t)));return t=fg(e),t=t===null?null:t.stateNode,t};kn.flushSync=function(t){return jr(t)};kn.hydrate=function(t,e,n){if(!_c(e))throw Error(ue(200));return yc(null,t,e,!0,n)};kn.hydrateRoot=function(t,e,n){if(!Bf(t))throw Error(ue(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=W0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=V0(e,null,t,1,n??null,r,!1,s,o),t[ki]=e.current,Ko(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new vc(e)};kn.render=function(t,e,n){if(!_c(e))throw Error(ue(200));return yc(null,t,e,!1,n)};kn.unmountComponentAtNode=function(t){if(!_c(t))throw Error(ue(40));return t._reactRootContainer?(jr(function(){yc(null,null,t,!1,function(){t._reactRootContainer=null,t[ki]=null})}),!0):!1};kn.unstable_batchedUpdates=If;kn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!_c(n))throw Error(ue(200));if(t==null||t._reactInternals===void 0)throw Error(ue(38));return yc(t,e,n,!1,i)};kn.version="18.3.1-next-f1338f8080-20240426";function X0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(X0)}catch(t){console.error(t)}}X0(),Xm.exports=kn;var ix=Xm.exports,rp=ix;ku.createRoot=rp.createRoot,ku.hydrateRoot=rp.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gf="160",rx=0,sp=1,sx=2,j0=1,ox=2,Ri=3,fi=0,Rn=1,En=2,hr=0,zs=1,Dt=2,op=3,ap=4,ax=5,Dr=100,lx=101,cx=102,lp=103,cp=104,ux=200,dx=201,fx=202,hx=203,Ld=204,Dd=205,px=206,mx=207,gx=208,vx=209,_x=210,yx=211,xx=212,Sx=213,Mx=214,Ex=0,wx=1,Tx=2,Zl=3,Ax=4,bx=5,Rx=6,Cx=7,q0=0,Px=1,Lx=2,pr=0,Dx=1,Ix=2,Ux=3,Y0=4,Nx=5,Fx=6,$0=300,$s=301,Zs=302,Id=303,Ud=304,xc=306,Nd=1e3,li=1001,Fd=1002,gn=1003,up=1004,tu=1005,Xn=1006,Ox=1007,oa=1008,mr=1009,kx=1010,zx=1011,Hf=1012,Z0=1013,ir=1014,rr=1015,aa=1016,K0=1017,J0=1018,zr=1020,Bx=1021,ci=1023,Gx=1024,Hx=1025,Br=1026,Ks=1027,Vx=1028,Q0=1029,Wx=1030,ev=1031,tv=1033,nu=33776,iu=33777,ru=33778,su=33779,dp=35840,fp=35841,hp=35842,pp=35843,nv=36196,mp=37492,gp=37496,vp=37808,_p=37809,yp=37810,xp=37811,Sp=37812,Mp=37813,Ep=37814,wp=37815,Tp=37816,Ap=37817,bp=37818,Rp=37819,Cp=37820,Pp=37821,ou=36492,Lp=36494,Dp=36495,Xx=36283,Ip=36284,Up=36285,Np=36286,iv=3e3,Gr=3001,jx=3200,qx=3201,rv=0,Yx=1,qn="",tn="srgb",Gi="srgb-linear",Vf="display-p3",Sc="display-p3-linear",Kl="linear",vt="srgb",Jl="rec709",Ql="p3",Qr=7680,Fp=519,$x=512,Zx=513,Kx=514,sv=515,Jx=516,Qx=517,eS=518,tS=519,Od=35044,Op="300 es",kd=1035,Ui=2e3,ec=2001;class no{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],au=Math.PI/180,zd=180/Math.PI;function gr(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ln[t&255]+ln[t>>8&255]+ln[t>>16&255]+ln[t>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[n&63|128]+ln[n>>8&255]+"-"+ln[n>>16&255]+ln[n>>24&255]+ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]).toLowerCase()}function Mn(t,e,n){return Math.max(e,Math.min(n,t))}function nS(t,e){return(t%e+e)%e}function lu(t,e,n){return(1-n)*t+n*e}function kp(t){return(t&t-1)===0&&t!==0}function Bd(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Li(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function ft(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ve{constructor(e=0,n=0){Ve.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Mn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Je{constructor(e,n,i,r,s,o,a,l,c){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],h=i[7],f=i[2],_=i[5],x=i[8],y=r[0],p=r[3],u=r[6],g=r[1],v=r[4],S=r[7],P=r[2],b=r[5],w=r[8];return s[0]=o*y+a*g+l*P,s[3]=o*p+a*v+l*b,s[6]=o*u+a*S+l*w,s[1]=c*y+d*g+h*P,s[4]=c*p+d*v+h*b,s[7]=c*u+d*S+h*w,s[2]=f*y+_*g+x*P,s[5]=f*p+_*v+x*b,s[8]=f*u+_*S+x*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*o*d-n*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=d*o-a*c,f=a*l-d*s,_=c*s-o*l,x=n*h+i*f+r*_;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/x;return e[0]=h*y,e[1]=(r*c-d*i)*y,e[2]=(a*i-r*o)*y,e[3]=f*y,e[4]=(d*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=_*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(cu.makeScale(e,n)),this}rotate(e){return this.premultiply(cu.makeRotation(-e)),this}translate(e,n){return this.premultiply(cu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const cu=new Je;function ov(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function tc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function iS(){const t=tc("canvas");return t.style.display="block",t}const zp={};function Ho(t){t in zp||(zp[t]=!0,console.warn(t))}const Bp=new Je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Gp=new Je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ka={[Gi]:{transfer:Kl,primaries:Jl,toReference:t=>t,fromReference:t=>t},[tn]:{transfer:vt,primaries:Jl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Sc]:{transfer:Kl,primaries:Ql,toReference:t=>t.applyMatrix3(Gp),fromReference:t=>t.applyMatrix3(Bp)},[Vf]:{transfer:vt,primaries:Ql,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Gp),fromReference:t=>t.applyMatrix3(Bp).convertLinearToSRGB()}},rS=new Set([Gi,Sc]),ct={enabled:!0,_workingColorSpace:Gi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!rS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=ka[e].toReference,r=ka[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return ka[t].primaries},getTransfer:function(t){return t===qn?Kl:ka[t].transfer}};function Bs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function uu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let es;class av{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{es===void 0&&(es=tc("canvas")),es.width=e.width,es.height=e.height;const i=es.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=es}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=tc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Bs(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Bs(n[i]/255)*255):n[i]=Bs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sS=0;class lv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sS++}),this.uuid=gr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(du(r[o].image)):s.push(du(r[o]))}else s=du(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function du(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?av.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let oS=0;class Cn extends no{constructor(e=Cn.DEFAULT_IMAGE,n=Cn.DEFAULT_MAPPING,i=li,r=li,s=Xn,o=oa,a=ci,l=mr,c=Cn.DEFAULT_ANISOTROPY,d=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oS++}),this.uuid=gr(),this.name="",this.source=new lv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(Ho("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===Gr?tn:qn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Nd:e.x=e.x-Math.floor(e.x);break;case li:e.x=e.x<0?0:1;break;case Fd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Nd:e.y=e.y-Math.floor(e.y);break;case li:e.y=e.y<0?0:1;break;case Fd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ho("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===tn?Gr:iv}set encoding(e){Ho("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Gr?tn:qn}}Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=$0;Cn.DEFAULT_ANISOTROPY=1;class Mt{constructor(e=0,n=0,i=0,r=1){Mt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],h=l[8],f=l[1],_=l[5],x=l[9],y=l[2],p=l[6],u=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-y)<.01&&Math.abs(x-p)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+y)<.1&&Math.abs(x+p)<.1&&Math.abs(c+_+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,S=(_+1)/2,P=(u+1)/2,b=(d+f)/4,w=(h+y)/4,G=(x+p)/4;return v>S&&v>P?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=b/i,s=w/i):S>P?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=b/r,s=G/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=w/s,r=G/s),this.set(i,r,s,n),this}let g=Math.sqrt((p-x)*(p-x)+(h-y)*(h-y)+(f-d)*(f-d));return Math.abs(g)<.001&&(g=1),this.x=(p-x)/g,this.y=(h-y)/g,this.z=(f-d)/g,this.w=Math.acos((c+_+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class aS extends no{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Mt(0,0,e,n),this.scissorTest=!1,this.viewport=new Mt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Ho("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Gr?tn:qn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Cn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new lv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qr extends aS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class cv extends Cn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=gn,this.minFilter=gn,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lS extends Cn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=gn,this.minFilter=gn,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ha{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],h=i[r+3];const f=s[o+0],_=s[o+1],x=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h;return}if(a===1){e[n+0]=f,e[n+1]=_,e[n+2]=x,e[n+3]=y;return}if(h!==y||l!==f||c!==_||d!==x){let p=1-a;const u=l*f+c*_+d*x+h*y,g=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const P=Math.sqrt(v),b=Math.atan2(P,u*g);p=Math.sin(p*b)/P,a=Math.sin(a*b)/P}const S=a*g;if(l=l*p+f*S,c=c*p+_*S,d=d*p+x*S,h=h*p+y*S,p===1-a){const P=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=P,c*=P,d*=P,h*=P}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],h=s[o],f=s[o+1],_=s[o+2],x=s[o+3];return e[n]=a*x+d*h+l*_-c*f,e[n+1]=l*x+d*f+c*h-a*_,e[n+2]=c*x+d*_+a*f-l*h,e[n+3]=d*x-a*h-l*f-c*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),h=a(s/2),f=l(i/2),_=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=f*d*h+c*_*x,this._y=c*_*h-f*d*x,this._z=c*d*x+f*_*h,this._w=c*d*h-f*_*x;break;case"YXZ":this._x=f*d*h+c*_*x,this._y=c*_*h-f*d*x,this._z=c*d*x-f*_*h,this._w=c*d*h+f*_*x;break;case"ZXY":this._x=f*d*h-c*_*x,this._y=c*_*h+f*d*x,this._z=c*d*x+f*_*h,this._w=c*d*h-f*_*x;break;case"ZYX":this._x=f*d*h-c*_*x,this._y=c*_*h+f*d*x,this._z=c*d*x-f*_*h,this._w=c*d*h+f*_*x;break;case"YZX":this._x=f*d*h+c*_*x,this._y=c*_*h+f*d*x,this._z=c*d*x-f*_*h,this._w=c*d*h-f*_*x;break;case"XZY":this._x=f*d*h-c*_*x,this._y=c*_*h-f*d*x,this._z=c*d*x+f*_*h,this._w=c*d*h+f*_*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],d=n[6],h=n[10],f=i+a+h;if(f>0){const _=.5/Math.sqrt(f+1);this._w=.25/_,this._x=(d-l)*_,this._y=(s-c)*_,this._z=(o-r)*_}else if(i>a&&i>h){const _=2*Math.sqrt(1+i-a-h);this._w=(d-l)/_,this._x=.25*_,this._y=(r+o)/_,this._z=(s+c)/_}else if(a>h){const _=2*Math.sqrt(1+a-i-h);this._w=(s-c)/_,this._x=(r+o)/_,this._y=.25*_,this._z=(l+d)/_}else{const _=2*Math.sqrt(1+h-i-a);this._w=(o-r)/_,this._x=(s+c)/_,this._y=(l+d)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const _=1-n;return this._w=_*o+n*this._w,this._x=_*i+n*this._x,this._y=_*r+n*this._y,this._z=_*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),h=Math.sin((1-n)*d)/c,f=Math.sin(n*d)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,n=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Hp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Hp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*d,this.y=i+l*d+a*c-s*h,this.z=r+l*h+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return fu.copy(this).projectOnVector(e),this.sub(fu)}reflect(e){return this.sub(fu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Mn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fu=new z,Hp=new ha;class pa{constructor(e=new z(1/0,1/0,1/0),n=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ei.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ei.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ei.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ei):ei.fromBufferAttribute(s,o),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),za.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),za.copy(i.boundingBox)),za.applyMatrix4(e.matrixWorld),this.union(za)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_o),Ba.subVectors(this.max,_o),ts.subVectors(e.a,_o),ns.subVectors(e.b,_o),is.subVectors(e.c,_o),Xi.subVectors(ns,ts),ji.subVectors(is,ns),wr.subVectors(ts,is);let n=[0,-Xi.z,Xi.y,0,-ji.z,ji.y,0,-wr.z,wr.y,Xi.z,0,-Xi.x,ji.z,0,-ji.x,wr.z,0,-wr.x,-Xi.y,Xi.x,0,-ji.y,ji.x,0,-wr.y,wr.x,0];return!hu(n,ts,ns,is,Ba)||(n=[1,0,0,0,1,0,0,0,1],!hu(n,ts,ns,is,Ba))?!1:(Ga.crossVectors(Xi,ji),n=[Ga.x,Ga.y,Ga.z],hu(n,ts,ns,is,Ba))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ei=[new z,new z,new z,new z,new z,new z,new z,new z],ei=new z,za=new pa,ts=new z,ns=new z,is=new z,Xi=new z,ji=new z,wr=new z,_o=new z,Ba=new z,Ga=new z,Tr=new z;function hu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Tr.fromArray(t,s);const a=r.x*Math.abs(Tr.x)+r.y*Math.abs(Tr.y)+r.z*Math.abs(Tr.z),l=e.dot(Tr),c=n.dot(Tr),d=i.dot(Tr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const cS=new pa,yo=new z,pu=new z;class Mc{constructor(e=new z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):cS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yo.subVectors(e,this.center);const n=yo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(yo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yo.copy(e.center).add(pu)),this.expandByPoint(yo.copy(e.center).sub(pu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wi=new z,mu=new z,Ha=new z,qi=new z,gu=new z,Va=new z,vu=new z;class Wf{constructor(e=new z,n=new z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=wi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(wi.copy(this.origin).addScaledVector(this.direction,n),wi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){mu.copy(e).add(n).multiplyScalar(.5),Ha.copy(n).sub(e).normalize(),qi.copy(this.origin).sub(mu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Ha),a=qi.dot(this.direction),l=-qi.dot(Ha),c=qi.lengthSq(),d=Math.abs(1-o*o);let h,f,_,x;if(d>0)if(h=o*l-a,f=o*a-l,x=s*d,h>=0)if(f>=-x)if(f<=x){const y=1/d;h*=y,f*=y,_=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),_=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),_=-h*h+f*(f+2*l)+c;else f<=-x?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),_=-h*h+f*(f+2*l)+c):f<=x?(h=0,f=Math.min(Math.max(-s,-l),s),_=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),_=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),_=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(mu).addScaledVector(Ha,f),_}intersectSphere(e,n){wi.subVectors(e.center,this.origin);const i=wi.dot(this.direction),r=wi.dot(wi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),d>=0?(s=(e.min.y-f.y)*d,o=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,o=(e.min.y-f.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,wi)!==null}intersectTriangle(e,n,i,r,s){gu.subVectors(n,e),Va.subVectors(i,e),vu.crossVectors(gu,Va);let o=this.direction.dot(vu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;qi.subVectors(this.origin,e);const l=a*this.direction.dot(Va.crossVectors(qi,Va));if(l<0)return null;const c=a*this.direction.dot(gu.cross(qi));if(c<0||l+c>o)return null;const d=-a*qi.dot(vu);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pt{constructor(e,n,i,r,s,o,a,l,c,d,h,f,_,x,y,p){Pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,d,h,f,_,x,y,p)}set(e,n,i,r,s,o,a,l,c,d,h,f,_,x,y,p){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=h,u[14]=f,u[3]=_,u[7]=x,u[11]=y,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/rs.setFromMatrixColumn(e,0).length(),s=1/rs.setFromMatrixColumn(e,1).length(),o=1/rs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*d,_=o*h,x=a*d,y=a*h;n[0]=l*d,n[4]=-l*h,n[8]=c,n[1]=_+x*c,n[5]=f-y*c,n[9]=-a*l,n[2]=y-f*c,n[6]=x+_*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*d,_=l*h,x=c*d,y=c*h;n[0]=f+y*a,n[4]=x*a-_,n[8]=o*c,n[1]=o*h,n[5]=o*d,n[9]=-a,n[2]=_*a-x,n[6]=y+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*d,_=l*h,x=c*d,y=c*h;n[0]=f-y*a,n[4]=-o*h,n[8]=x+_*a,n[1]=_+x*a,n[5]=o*d,n[9]=y-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*d,_=o*h,x=a*d,y=a*h;n[0]=l*d,n[4]=x*c-_,n[8]=f*c+y,n[1]=l*h,n[5]=y*c+f,n[9]=_*c-x,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,_=o*c,x=a*l,y=a*c;n[0]=l*d,n[4]=y-f*h,n[8]=x*h+_,n[1]=h,n[5]=o*d,n[9]=-a*d,n[2]=-c*d,n[6]=_*h+x,n[10]=f-y*h}else if(e.order==="XZY"){const f=o*l,_=o*c,x=a*l,y=a*c;n[0]=l*d,n[4]=-h,n[8]=c*d,n[1]=f*h+y,n[5]=o*d,n[9]=_*h-x,n[2]=x*h-_,n[6]=a*d,n[10]=y*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uS,e,dS)}lookAt(e,n,i){const r=this.elements;return Ln.subVectors(e,n),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),Yi.crossVectors(i,Ln),Yi.lengthSq()===0&&(Math.abs(i.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),Yi.crossVectors(i,Ln)),Yi.normalize(),Wa.crossVectors(Ln,Yi),r[0]=Yi.x,r[4]=Wa.x,r[8]=Ln.x,r[1]=Yi.y,r[5]=Wa.y,r[9]=Ln.y,r[2]=Yi.z,r[6]=Wa.z,r[10]=Ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],h=i[5],f=i[9],_=i[13],x=i[2],y=i[6],p=i[10],u=i[14],g=i[3],v=i[7],S=i[11],P=i[15],b=r[0],w=r[4],G=r[8],E=r[12],T=r[1],O=r[5],$=r[9],oe=r[13],U=r[2],D=r[6],X=r[10],Z=r[14],L=r[3],H=r[7],V=r[11],k=r[15];return s[0]=o*b+a*T+l*U+c*L,s[4]=o*w+a*O+l*D+c*H,s[8]=o*G+a*$+l*X+c*V,s[12]=o*E+a*oe+l*Z+c*k,s[1]=d*b+h*T+f*U+_*L,s[5]=d*w+h*O+f*D+_*H,s[9]=d*G+h*$+f*X+_*V,s[13]=d*E+h*oe+f*Z+_*k,s[2]=x*b+y*T+p*U+u*L,s[6]=x*w+y*O+p*D+u*H,s[10]=x*G+y*$+p*X+u*V,s[14]=x*E+y*oe+p*Z+u*k,s[3]=g*b+v*T+S*U+P*L,s[7]=g*w+v*O+S*D+P*H,s[11]=g*G+v*$+S*X+P*V,s[15]=g*E+v*oe+S*Z+P*k,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],h=e[6],f=e[10],_=e[14],x=e[3],y=e[7],p=e[11],u=e[15];return x*(+s*l*h-r*c*h-s*a*f+i*c*f+r*a*_-i*l*_)+y*(+n*l*_-n*c*f+s*o*f-r*o*_+r*c*d-s*l*d)+p*(+n*c*h-n*a*_-s*o*h+i*o*_+s*a*d-i*c*d)+u*(-r*a*d-n*l*h+n*a*f+r*o*h-i*o*f+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=e[9],f=e[10],_=e[11],x=e[12],y=e[13],p=e[14],u=e[15],g=h*p*c-y*f*c+y*l*_-a*p*_-h*l*u+a*f*u,v=x*f*c-d*p*c-x*l*_+o*p*_+d*l*u-o*f*u,S=d*y*c-x*h*c+x*a*_-o*y*_-d*a*u+o*h*u,P=x*h*l-d*y*l-x*a*f+o*y*f+d*a*p-o*h*p,b=n*g+i*v+r*S+s*P;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=g*w,e[1]=(y*f*s-h*p*s-y*r*_+i*p*_+h*r*u-i*f*u)*w,e[2]=(a*p*s-y*l*s+y*r*c-i*p*c-a*r*u+i*l*u)*w,e[3]=(h*l*s-a*f*s-h*r*c+i*f*c+a*r*_-i*l*_)*w,e[4]=v*w,e[5]=(d*p*s-x*f*s+x*r*_-n*p*_-d*r*u+n*f*u)*w,e[6]=(x*l*s-o*p*s-x*r*c+n*p*c+o*r*u-n*l*u)*w,e[7]=(o*f*s-d*l*s+d*r*c-n*f*c-o*r*_+n*l*_)*w,e[8]=S*w,e[9]=(x*h*s-d*y*s-x*i*_+n*y*_+d*i*u-n*h*u)*w,e[10]=(o*y*s-x*a*s+x*i*c-n*y*c-o*i*u+n*a*u)*w,e[11]=(d*a*s-o*h*s-d*i*c+n*h*c+o*i*_-n*a*_)*w,e[12]=P*w,e[13]=(d*y*r-x*h*r+x*i*f-n*y*f-d*i*p+n*h*p)*w,e[14]=(x*a*r-o*y*r-x*i*l+n*y*l+o*i*p-n*a*p)*w,e[15]=(o*h*r-d*a*r+d*i*l-n*h*l-o*i*f+n*a*f)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,d=o+o,h=a+a,f=s*c,_=s*d,x=s*h,y=o*d,p=o*h,u=a*h,g=l*c,v=l*d,S=l*h,P=i.x,b=i.y,w=i.z;return r[0]=(1-(y+u))*P,r[1]=(_+S)*P,r[2]=(x-v)*P,r[3]=0,r[4]=(_-S)*b,r[5]=(1-(f+u))*b,r[6]=(p+g)*b,r[7]=0,r[8]=(x+v)*w,r[9]=(p-g)*w,r[10]=(1-(f+y))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=rs.set(r[0],r[1],r[2]).length();const o=rs.set(r[4],r[5],r[6]).length(),a=rs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ti.copy(this);const c=1/s,d=1/o,h=1/a;return ti.elements[0]*=c,ti.elements[1]*=c,ti.elements[2]*=c,ti.elements[4]*=d,ti.elements[5]*=d,ti.elements[6]*=d,ti.elements[8]*=h,ti.elements[9]*=h,ti.elements[10]*=h,n.setFromRotationMatrix(ti),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Ui){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),h=(n+e)/(n-e),f=(i+r)/(i-r);let _,x;if(a===Ui)_=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===ec)_=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ui){const l=this.elements,c=1/(n-e),d=1/(i-r),h=1/(o-s),f=(n+e)*c,_=(i+r)*d;let x,y;if(a===Ui)x=(o+s)*h,y=-2*h;else if(a===ec)x=s*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-_,l[2]=0,l[6]=0,l[10]=y,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const rs=new z,ti=new Pt,uS=new z(0,0,0),dS=new z(1,1,1),Yi=new z,Wa=new z,Ln=new z,Vp=new Pt,Wp=new ha;class Ec{constructor(e=0,n=0,i=0,r=Ec.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],h=r[2],f=r[6],_=r[10];switch(n){case"XYZ":this._y=Math.asin(Mn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,_),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Mn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,_),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Mn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,_),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Mn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,_),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Mn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,_));break;case"XZY":this._z=Math.asin(-Mn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Vp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Wp.setFromEuler(this),this.setFromQuaternion(Wp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ec.DEFAULT_ORDER="XYZ";class Xf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fS=0;const Xp=new z,ss=new ha,Ti=new Pt,Xa=new z,xo=new z,hS=new z,pS=new ha,jp=new z(1,0,0),qp=new z(0,1,0),Yp=new z(0,0,1),mS={type:"added"},gS={type:"removed"};class Gt extends no{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fS++}),this.uuid=gr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new z,n=new Ec,i=new ha,r=new z(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Pt},normalMatrix:{value:new Je}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ss.setFromAxisAngle(e,n),this.quaternion.multiply(ss),this}rotateOnWorldAxis(e,n){return ss.setFromAxisAngle(e,n),this.quaternion.premultiply(ss),this}rotateX(e){return this.rotateOnAxis(jp,e)}rotateY(e){return this.rotateOnAxis(qp,e)}rotateZ(e){return this.rotateOnAxis(Yp,e)}translateOnAxis(e,n){return Xp.copy(e).applyQuaternion(this.quaternion),this.position.add(Xp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(jp,e)}translateY(e){return this.translateOnAxis(qp,e)}translateZ(e){return this.translateOnAxis(Yp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Xa.copy(e):Xa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(xo,Xa,this.up):Ti.lookAt(Xa,xo,this.up),this.quaternion.setFromRotationMatrix(Ti),r&&(Ti.extractRotation(r.matrixWorld),ss.setFromRotationMatrix(Ti),this.quaternion.premultiply(ss.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(mS)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(gS)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ti),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,e,hS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,pS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),h=o(e.shapes),f=o(e.skeletons),_=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),_.length>0&&(i.animations=_),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Gt.DEFAULT_UP=new z(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ni=new z,Ai=new z,_u=new z,bi=new z,os=new z,as=new z,$p=new z,yu=new z,xu=new z,Su=new z;let ja=!1;class jn{constructor(e=new z,n=new z,i=new z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ni.subVectors(e,n),r.cross(ni);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){ni.subVectors(r,n),Ai.subVectors(i,n),_u.subVectors(e,n);const o=ni.dot(ni),a=ni.dot(Ai),l=ni.dot(_u),c=Ai.dot(Ai),d=Ai.dot(_u),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,_=(c*l-a*d)*f,x=(o*d-a*l)*f;return s.set(1-_-x,x,_)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,bi)===null?!1:bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getUV(e,n,i,r,s,o,a,l){return ja===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ja=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,bi.x),l.addScaledVector(o,bi.y),l.addScaledVector(a,bi.z),l)}static isFrontFacing(e,n,i,r){return ni.subVectors(i,n),Ai.subVectors(e,n),ni.cross(Ai).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ni.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),ni.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return jn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return ja===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ja=!0),jn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return jn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;os.subVectors(r,i),as.subVectors(s,i),yu.subVectors(e,i);const l=os.dot(yu),c=as.dot(yu);if(l<=0&&c<=0)return n.copy(i);xu.subVectors(e,r);const d=os.dot(xu),h=as.dot(xu);if(d>=0&&h<=d)return n.copy(r);const f=l*h-d*c;if(f<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(os,o);Su.subVectors(e,s);const _=os.dot(Su),x=as.dot(Su);if(x>=0&&_<=x)return n.copy(s);const y=_*c-l*x;if(y<=0&&c>=0&&x<=0)return a=c/(c-x),n.copy(i).addScaledVector(as,a);const p=d*x-_*h;if(p<=0&&h-d>=0&&_-x>=0)return $p.subVectors(s,r),a=(h-d)/(h-d+(_-x)),n.copy(r).addScaledVector($p,a);const u=1/(p+y+f);return o=y*u,a=f*u,n.copy(i).addScaledVector(os,o).addScaledVector(as,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const uv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},qa={h:0,s:0,l:0};function Mu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class He{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=ct.workingColorSpace){return this.r=e,this.g=n,this.b=i,ct.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=ct.workingColorSpace){if(e=nS(e,1),n=Mn(n,0,1),i=Mn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Mu(o,s,e+1/3),this.g=Mu(o,s,e),this.b=Mu(o,s,e-1/3)}return ct.toWorkingColorSpace(this,r),this}setStyle(e,n=tn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=tn){const i=uv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}copyLinearToSRGB(e){return this.r=uu(e.r),this.g=uu(e.g),this.b=uu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=tn){return ct.fromWorkingColorSpace(cn.copy(this),e),Math.round(Mn(cn.r*255,0,255))*65536+Math.round(Mn(cn.g*255,0,255))*256+Math.round(Mn(cn.b*255,0,255))}getHexString(e=tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ct.workingColorSpace){ct.fromWorkingColorSpace(cn.copy(this),n);const i=cn.r,r=cn.g,s=cn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=d<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=ct.workingColorSpace){return ct.fromWorkingColorSpace(cn.copy(this),n),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=tn){ct.fromWorkingColorSpace(cn.copy(this),e);const n=cn.r,i=cn.g,r=cn.b;return e!==tn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL($i),this.setHSL($i.h+e,$i.s+n,$i.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL($i),e.getHSL(qa);const i=lu($i.h,qa.h,n),r=lu($i.s,qa.s,n),s=lu($i.l,qa.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const cn=new He;He.NAMES=uv;let vS=0;class Zr extends no{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vS++}),this.uuid=gr(),this.name="",this.type="Material",this.blending=zs,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ld,this.blendDst=Dd,this.blendEquation=Dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=Zl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qr,this.stencilZFail=Qr,this.stencilZPass=Qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==zs&&(i.blending=this.blending),this.side!==fi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ld&&(i.blendSrc=this.blendSrc),this.blendDst!==Dd&&(i.blendDst=this.blendDst),this.blendEquation!==Dr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Zl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Qr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Qr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Hn extends Zr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=q0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ft=new z,Ya=new Ve;class wt{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Od,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=rr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ya.fromBufferAttribute(this,n),Ya.applyMatrix3(e),this.setXY(n,Ya.x,Ya.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyMatrix3(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyMatrix4(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyNormalMatrix(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.transformDirection(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Li(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=ft(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Li(n,this.array)),n}setX(e,n){return this.normalized&&(n=ft(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Li(n,this.array)),n}setY(e,n){return this.normalized&&(n=ft(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Li(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ft(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Li(n,this.array)),n}setW(e,n){return this.normalized&&(n=ft(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=ft(n,this.array),i=ft(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=ft(n,this.array),i=ft(i,this.array),r=ft(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=ft(n,this.array),i=ft(i,this.array),r=ft(r,this.array),s=ft(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Od&&(e.usage=this.usage),e}}class dv extends wt{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class fv extends wt{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class dn extends wt{constructor(e,n,i){super(new Float32Array(e),n,i)}}let _S=0;const Gn=new Pt,Eu=new Gt,ls=new z,Dn=new pa,So=new pa,qt=new z;class nn extends no{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_S++}),this.uuid=gr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ov(e)?fv:dv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gn.makeRotationFromQuaternion(e),this.applyMatrix4(Gn),this}rotateX(e){return Gn.makeRotationX(e),this.applyMatrix4(Gn),this}rotateY(e){return Gn.makeRotationY(e),this.applyMatrix4(Gn),this}rotateZ(e){return Gn.makeRotationZ(e),this.applyMatrix4(Gn),this}translate(e,n,i){return Gn.makeTranslation(e,n,i),this.applyMatrix4(Gn),this}scale(e,n,i){return Gn.makeScale(e,n,i),this.applyMatrix4(Gn),this}lookAt(e){return Eu.lookAt(e),Eu.updateMatrix(),this.applyMatrix4(Eu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new dn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Dn.setFromBufferAttribute(s),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(Dn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];So.setFromBufferAttribute(a),this.morphTargetsRelative?(qt.addVectors(Dn.min,So.min),Dn.expandByPoint(qt),qt.addVectors(Dn.max,So.max),Dn.expandByPoint(qt)):(Dn.expandByPoint(So.min),Dn.expandByPoint(So.max))}Dn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)qt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(qt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)qt.fromBufferAttribute(a,c),l&&(ls.fromBufferAttribute(e,c),qt.add(ls)),r=Math.max(r,i.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let T=0;T<a;T++)c[T]=new z,d[T]=new z;const h=new z,f=new z,_=new z,x=new Ve,y=new Ve,p=new Ve,u=new z,g=new z;function v(T,O,$){h.fromArray(r,T*3),f.fromArray(r,O*3),_.fromArray(r,$*3),x.fromArray(o,T*2),y.fromArray(o,O*2),p.fromArray(o,$*2),f.sub(h),_.sub(h),y.sub(x),p.sub(x);const oe=1/(y.x*p.y-p.x*y.y);isFinite(oe)&&(u.copy(f).multiplyScalar(p.y).addScaledVector(_,-y.y).multiplyScalar(oe),g.copy(_).multiplyScalar(y.x).addScaledVector(f,-p.x).multiplyScalar(oe),c[T].add(u),c[O].add(u),c[$].add(u),d[T].add(g),d[O].add(g),d[$].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let T=0,O=S.length;T<O;++T){const $=S[T],oe=$.start,U=$.count;for(let D=oe,X=oe+U;D<X;D+=3)v(i[D+0],i[D+1],i[D+2])}const P=new z,b=new z,w=new z,G=new z;function E(T){w.fromArray(s,T*3),G.copy(w);const O=c[T];P.copy(O),P.sub(w.multiplyScalar(w.dot(O))).normalize(),b.crossVectors(G,O);const oe=b.dot(d[T])<0?-1:1;l[T*4]=P.x,l[T*4+1]=P.y,l[T*4+2]=P.z,l[T*4+3]=oe}for(let T=0,O=S.length;T<O;++T){const $=S[T],oe=$.start,U=$.count;for(let D=oe,X=oe+U;D<X;D+=3)E(i[D+0]),E(i[D+1]),E(i[D+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new wt(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,_=i.count;f<_;f++)i.setXYZ(f,0,0,0);const r=new z,s=new z,o=new z,a=new z,l=new z,c=new z,d=new z,h=new z;if(e)for(let f=0,_=e.count;f<_;f+=3){const x=e.getX(f+0),y=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,p),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,p),a.add(d),l.add(d),c.add(d),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,_=n.count;f<_;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)qt.fromBufferAttribute(e,n),qt.normalize(),e.setXYZ(n,qt.x,qt.y,qt.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,h=a.normalized,f=new c.constructor(l.length*d);let _=0,x=0;for(let y=0,p=l.length;y<p;y++){a.isInterleavedBufferAttribute?_=l[y]*a.data.stride+a.offset:_=l[y]*d;for(let u=0;u<d;u++)f[x++]=c[_++]}return new wt(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new nn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,h=c.length;d<h;d++){const f=c[d],_=e(f,i);l.push(_)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,f=c.length;h<f;h++){const _=c[h];d.push(_.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],h=s[c];for(let f=0,_=h.length;f<_;f++)d.push(h[f].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zp=new Pt,Ar=new Wf,$a=new Mc,Kp=new z,cs=new z,us=new z,ds=new z,wu=new z,Za=new z,Ka=new Ve,Ja=new Ve,Qa=new Ve,Jp=new z,Qp=new z,em=new z,el=new z,tl=new z;class xt extends Gt{constructor(e=new nn,n=new Hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Za.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],h=s[l];d!==0&&(wu.fromBufferAttribute(h,e),o?Za.addScaledVector(wu,d):Za.addScaledVector(wu.sub(n),d))}n.add(Za)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),$a.copy(i.boundingSphere),$a.applyMatrix4(s),Ar.copy(e.ray).recast(e.near),!($a.containsPoint(Ar.origin)===!1&&(Ar.intersectSphere($a,Kp)===null||Ar.origin.distanceToSquared(Kp)>(e.far-e.near)**2))&&(Zp.copy(s).invert(),Ar.copy(e.ray).applyMatrix4(Zp),!(i.boundingBox!==null&&Ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ar)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,f=s.groups,_=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,y=f.length;x<y;x++){const p=f[x],u=o[p.materialIndex],g=Math.max(p.start,_.start),v=Math.min(a.count,Math.min(p.start+p.count,_.start+_.count));for(let S=g,P=v;S<P;S+=3){const b=a.getX(S),w=a.getX(S+1),G=a.getX(S+2);r=nl(this,u,e,i,c,d,h,b,w,G),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const x=Math.max(0,_.start),y=Math.min(a.count,_.start+_.count);for(let p=x,u=y;p<u;p+=3){const g=a.getX(p),v=a.getX(p+1),S=a.getX(p+2);r=nl(this,o,e,i,c,d,h,g,v,S),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,y=f.length;x<y;x++){const p=f[x],u=o[p.materialIndex],g=Math.max(p.start,_.start),v=Math.min(l.count,Math.min(p.start+p.count,_.start+_.count));for(let S=g,P=v;S<P;S+=3){const b=S,w=S+1,G=S+2;r=nl(this,u,e,i,c,d,h,b,w,G),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const x=Math.max(0,_.start),y=Math.min(l.count,_.start+_.count);for(let p=x,u=y;p<u;p+=3){const g=p,v=p+1,S=p+2;r=nl(this,o,e,i,c,d,h,g,v,S),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function yS(t,e,n,i,r,s,o,a){let l;if(e.side===Rn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===fi,a),l===null)return null;tl.copy(a),tl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(tl);return c<n.near||c>n.far?null:{distance:c,point:tl.clone(),object:t}}function nl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,cs),t.getVertexPosition(l,us),t.getVertexPosition(c,ds);const d=yS(t,e,n,i,cs,us,ds,el);if(d){r&&(Ka.fromBufferAttribute(r,a),Ja.fromBufferAttribute(r,l),Qa.fromBufferAttribute(r,c),d.uv=jn.getInterpolation(el,cs,us,ds,Ka,Ja,Qa,new Ve)),s&&(Ka.fromBufferAttribute(s,a),Ja.fromBufferAttribute(s,l),Qa.fromBufferAttribute(s,c),d.uv1=jn.getInterpolation(el,cs,us,ds,Ka,Ja,Qa,new Ve),d.uv2=d.uv1),o&&(Jp.fromBufferAttribute(o,a),Qp.fromBufferAttribute(o,l),em.fromBufferAttribute(o,c),d.normal=jn.getInterpolation(el,cs,us,ds,Jp,Qp,em,new z),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new z,materialIndex:0};jn.getNormal(cs,us,ds,h.normal),d.face=h}return d}class ma extends nn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],h=[];let f=0,_=0;x("z","y","x",-1,-1,i,n,e,o,s,0),x("z","y","x",1,-1,i,n,-e,o,s,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new dn(c,3)),this.setAttribute("normal",new dn(d,3)),this.setAttribute("uv",new dn(h,2));function x(y,p,u,g,v,S,P,b,w,G,E){const T=S/w,O=P/G,$=S/2,oe=P/2,U=b/2,D=w+1,X=G+1;let Z=0,L=0;const H=new z;for(let V=0;V<X;V++){const k=V*O-oe;for(let q=0;q<D;q++){const B=q*T-$;H[y]=B*g,H[p]=k*v,H[u]=U,c.push(H.x,H.y,H.z),H[y]=0,H[p]=0,H[u]=b>0?1:-1,d.push(H.x,H.y,H.z),h.push(q/w),h.push(1-V/G),Z+=1}}for(let V=0;V<G;V++)for(let k=0;k<w;k++){const q=f+k+D*V,B=f+k+D*(V+1),J=f+(k+1)+D*(V+1),ae=f+(k+1)+D*V;l.push(q,B,ae),l.push(B,J,ae),L+=6}a.addGroup(_,L,E),_+=L,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ma(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Js(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function pn(t){const e={};for(let n=0;n<t.length;n++){const i=Js(t[n]);for(const r in i)e[r]=i[r]}return e}function xS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function hv(t){return t.getRenderTarget()===null?t.outputColorSpace:ct.workingColorSpace}const SS={clone:Js,merge:pn};var MS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ES=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yn extends Zr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=MS,this.fragmentShader=ES,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Js(e.uniforms),this.uniformsGroups=xS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class pv extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=Ui}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Un extends pv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=zd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(au*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zd*2*Math.atan(Math.tan(au*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(au*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const fs=-90,hs=1;class wS extends Gt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Un(fs,hs,e,n);r.layers=this.layers,this.add(r);const s=new Un(fs,hs,e,n);s.layers=this.layers,this.add(s);const o=new Un(fs,hs,e,n);o.layers=this.layers,this.add(o);const a=new Un(fs,hs,e,n);a.layers=this.layers,this.add(a);const l=new Un(fs,hs,e,n);l.layers=this.layers,this.add(l);const c=new Un(fs,hs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ui)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ec)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(h,f,_),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class mv extends Cn{constructor(e,n,i,r,s,o,a,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:$s,super(e,n,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class TS extends qr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Ho("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Gr?tn:qn),this.texture=new mv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Xn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ma(5,5,5),s=new Yn({name:"CubemapFromEquirect",uniforms:Js(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Rn,blending:hr});s.uniforms.tEquirect.value=n;const o=new xt(r,s),a=n.minFilter;return n.minFilter===oa&&(n.minFilter=Xn),new wS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Tu=new z,AS=new z,bS=new Je;class Pr{constructor(e=new z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Tu.subVectors(i,n).cross(AS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Tu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||bS.getNormalMatrix(e),r=this.coplanarPoint(Tu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const br=new Mc,il=new z;class jf{constructor(e=new Pr,n=new Pr,i=new Pr,r=new Pr,s=new Pr,o=new Pr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ui){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],d=r[5],h=r[6],f=r[7],_=r[8],x=r[9],y=r[10],p=r[11],u=r[12],g=r[13],v=r[14],S=r[15];if(i[0].setComponents(l-s,f-c,p-_,S-u).normalize(),i[1].setComponents(l+s,f+c,p+_,S+u).normalize(),i[2].setComponents(l+o,f+d,p+x,S+g).normalize(),i[3].setComponents(l-o,f-d,p-x,S-g).normalize(),i[4].setComponents(l-a,f-h,p-y,S-v).normalize(),n===Ui)i[5].setComponents(l+a,f+h,p+y,S+v).normalize();else if(n===ec)i[5].setComponents(a,h,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(br)}intersectsSprite(e){return br.center.set(0,0,0),br.radius=.7071067811865476,br.applyMatrix4(e.matrixWorld),this.intersectsSphere(br)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(il.x=r.normal.x>0?e.max.x:e.min.x,il.y=r.normal.y>0?e.max.y:e.min.y,il.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(il)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function gv(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function RS(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,d){const h=c.array,f=c.usage,_=h.byteLength,x=t.createBuffer();t.bindBuffer(d,x),t.bufferData(d,h,f),c.onUploadCallback();let y;if(h instanceof Float32Array)y=t.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)y=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=t.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=t.SHORT;else if(h instanceof Uint32Array)y=t.UNSIGNED_INT;else if(h instanceof Int32Array)y=t.INT;else if(h instanceof Int8Array)y=t.BYTE;else if(h instanceof Uint8Array)y=t.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:x,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:_}}function s(c,d,h){const f=d.array,_=d._updateRange,x=d.updateRanges;if(t.bindBuffer(h,c),_.count===-1&&x.length===0&&t.bufferSubData(h,0,f),x.length!==0){for(let y=0,p=x.length;y<p;y++){const u=x[y];n?t.bufferSubData(h,u.start*f.BYTES_PER_ELEMENT,f,u.start,u.count):t.bufferSubData(h,u.start*f.BYTES_PER_ELEMENT,f.subarray(u.start,u.start+u.count))}d.clearUpdateRanges()}_.count!==-1&&(n?t.bufferSubData(h,_.offset*f.BYTES_PER_ELEMENT,f,_.offset,_.count):t.bufferSubData(h,_.offset*f.BYTES_PER_ELEMENT,f.subarray(_.offset,_.offset+_.count)),_.count=-1),d.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d&&(t.deleteBuffer(d.buffer),i.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);if(h===void 0)i.set(c,r(c,d));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,d),h.version=c.version}}return{get:o,remove:a,update:l}}class Gs extends nn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,h=e/a,f=n/l,_=[],x=[],y=[],p=[];for(let u=0;u<d;u++){const g=u*f-o;for(let v=0;v<c;v++){const S=v*h-s;x.push(S,-g,0),y.push(0,0,1),p.push(v/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<a;g++){const v=g+c*u,S=g+c*(u+1),P=g+1+c*(u+1),b=g+1+c*u;_.push(v,S,b),_.push(S,P,b)}this.setIndex(_),this.setAttribute("position",new dn(x,3)),this.setAttribute("normal",new dn(y,3)),this.setAttribute("uv",new dn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gs(e.width,e.height,e.widthSegments,e.heightSegments)}}var CS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,PS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,LS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,DS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,IS=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,US=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,NS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,FS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,OS=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,kS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,zS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,BS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,GS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,HS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,VS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,WS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,XS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,YS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$S=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ZS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,KS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,JS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,QS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,eM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,tM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sM="gl_FragColor = linearToOutputTexel( gl_FragColor );",oM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,aM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,lM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,uM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,vM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,_M=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,SM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,MM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,EM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,TM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,AM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,RM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,CM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,PM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,LM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,DM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,IM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,UM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,NM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,FM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,OM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,BM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,GM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,HM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,VM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,WM=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,XM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,jM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,qM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,YM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$M=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,KM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,JM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,QM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,rE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,oE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,aE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,dE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,fE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,hE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,pE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,gE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_E=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,SE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ME=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,EE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,wE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,TE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,AE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,bE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const RE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,CE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,NE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,FE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,OE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,kE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,GE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,HE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,VE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,qE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$E=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ZE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,QE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,t1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,i1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,r1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,o1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,a1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:CS,alphahash_pars_fragment:PS,alphamap_fragment:LS,alphamap_pars_fragment:DS,alphatest_fragment:IS,alphatest_pars_fragment:US,aomap_fragment:NS,aomap_pars_fragment:FS,batching_pars_vertex:OS,batching_vertex:kS,begin_vertex:zS,beginnormal_vertex:BS,bsdfs:GS,iridescence_fragment:HS,bumpmap_pars_fragment:VS,clipping_planes_fragment:WS,clipping_planes_pars_fragment:XS,clipping_planes_pars_vertex:jS,clipping_planes_vertex:qS,color_fragment:YS,color_pars_fragment:$S,color_pars_vertex:ZS,color_vertex:KS,common:JS,cube_uv_reflection_fragment:QS,defaultnormal_vertex:eM,displacementmap_pars_vertex:tM,displacementmap_vertex:nM,emissivemap_fragment:iM,emissivemap_pars_fragment:rM,colorspace_fragment:sM,colorspace_pars_fragment:oM,envmap_fragment:aM,envmap_common_pars_fragment:lM,envmap_pars_fragment:cM,envmap_pars_vertex:uM,envmap_physical_pars_fragment:MM,envmap_vertex:dM,fog_vertex:fM,fog_pars_vertex:hM,fog_fragment:pM,fog_pars_fragment:mM,gradientmap_pars_fragment:gM,lightmap_fragment:vM,lightmap_pars_fragment:_M,lights_lambert_fragment:yM,lights_lambert_pars_fragment:xM,lights_pars_begin:SM,lights_toon_fragment:EM,lights_toon_pars_fragment:wM,lights_phong_fragment:TM,lights_phong_pars_fragment:AM,lights_physical_fragment:bM,lights_physical_pars_fragment:RM,lights_fragment_begin:CM,lights_fragment_maps:PM,lights_fragment_end:LM,logdepthbuf_fragment:DM,logdepthbuf_pars_fragment:IM,logdepthbuf_pars_vertex:UM,logdepthbuf_vertex:NM,map_fragment:FM,map_pars_fragment:OM,map_particle_fragment:kM,map_particle_pars_fragment:zM,metalnessmap_fragment:BM,metalnessmap_pars_fragment:GM,morphcolor_vertex:HM,morphnormal_vertex:VM,morphtarget_pars_vertex:WM,morphtarget_vertex:XM,normal_fragment_begin:jM,normal_fragment_maps:qM,normal_pars_fragment:YM,normal_pars_vertex:$M,normal_vertex:ZM,normalmap_pars_fragment:KM,clearcoat_normal_fragment_begin:JM,clearcoat_normal_fragment_maps:QM,clearcoat_pars_fragment:eE,iridescence_pars_fragment:tE,opaque_fragment:nE,packing:iE,premultiplied_alpha_fragment:rE,project_vertex:sE,dithering_fragment:oE,dithering_pars_fragment:aE,roughnessmap_fragment:lE,roughnessmap_pars_fragment:cE,shadowmap_pars_fragment:uE,shadowmap_pars_vertex:dE,shadowmap_vertex:fE,shadowmask_pars_fragment:hE,skinbase_vertex:pE,skinning_pars_vertex:mE,skinning_vertex:gE,skinnormal_vertex:vE,specularmap_fragment:_E,specularmap_pars_fragment:yE,tonemapping_fragment:xE,tonemapping_pars_fragment:SE,transmission_fragment:ME,transmission_pars_fragment:EE,uv_pars_fragment:wE,uv_pars_vertex:TE,uv_vertex:AE,worldpos_vertex:bE,background_vert:RE,background_frag:CE,backgroundCube_vert:PE,backgroundCube_frag:LE,cube_vert:DE,cube_frag:IE,depth_vert:UE,depth_frag:NE,distanceRGBA_vert:FE,distanceRGBA_frag:OE,equirect_vert:kE,equirect_frag:zE,linedashed_vert:BE,linedashed_frag:GE,meshbasic_vert:HE,meshbasic_frag:VE,meshlambert_vert:WE,meshlambert_frag:XE,meshmatcap_vert:jE,meshmatcap_frag:qE,meshnormal_vert:YE,meshnormal_frag:$E,meshphong_vert:ZE,meshphong_frag:KE,meshphysical_vert:JE,meshphysical_frag:QE,meshtoon_vert:e1,meshtoon_frag:t1,points_vert:n1,points_frag:i1,shadow_vert:r1,shadow_frag:s1,sprite_vert:o1,sprite_frag:a1},ge={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},yi={basic:{uniforms:pn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:pn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new He(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:pn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:pn([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:pn([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new He(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:pn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:pn([ge.points,ge.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:pn([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:pn([ge.common,ge.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:pn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:pn([ge.sprite,ge.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:pn([ge.common,ge.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:pn([ge.lights,ge.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};yi.physical={uniforms:pn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const rl={r:0,b:0,g:0};function l1(t,e,n,i,r,s,o){const a=new He(0);let l=s===!0?0:1,c,d,h=null,f=0,_=null;function x(p,u){let g=!1,v=u.isScene===!0?u.background:null;v&&v.isTexture&&(v=(u.backgroundBlurriness>0?n:e).get(v)),v===null?y(a,l):v&&v.isColor&&(y(v,1),g=!0);const S=t.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||g)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===xc)?(d===void 0&&(d=new xt(new ma(1,1,1),new Yn({name:"BackgroundCubeMaterial",uniforms:Js(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(P,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=v,d.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,d.material.toneMapped=ct.getTransfer(v.colorSpace)!==vt,(h!==v||f!==v.version||_!==t.toneMapping)&&(d.material.needsUpdate=!0,h=v,f=v.version,_=t.toneMapping),d.layers.enableAll(),p.unshift(d,d.geometry,d.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new xt(new Gs(2,2),new Yn({name:"BackgroundMaterial",uniforms:Js(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=ct.getTransfer(v.colorSpace)!==vt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||_!==t.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,_=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function y(p,u){p.getRGB(rl,hv(t)),i.buffers.color.setClear(rl.r,rl.g,rl.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(p,u=1){a.set(p),l=u,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,y(a,l)},render:x}}function c1(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let c=l,d=!1;function h(U,D,X,Z,L){let H=!1;if(o){const V=y(Z,X,D);c!==V&&(c=V,_(c.object)),H=u(U,Z,X,L),H&&g(U,Z,X,L)}else{const V=D.wireframe===!0;(c.geometry!==Z.id||c.program!==X.id||c.wireframe!==V)&&(c.geometry=Z.id,c.program=X.id,c.wireframe=V,H=!0)}L!==null&&n.update(L,t.ELEMENT_ARRAY_BUFFER),(H||d)&&(d=!1,G(U,D,X,Z),L!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(L).buffer))}function f(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function _(U){return i.isWebGL2?t.bindVertexArray(U):s.bindVertexArrayOES(U)}function x(U){return i.isWebGL2?t.deleteVertexArray(U):s.deleteVertexArrayOES(U)}function y(U,D,X){const Z=X.wireframe===!0;let L=a[U.id];L===void 0&&(L={},a[U.id]=L);let H=L[D.id];H===void 0&&(H={},L[D.id]=H);let V=H[Z];return V===void 0&&(V=p(f()),H[Z]=V),V}function p(U){const D=[],X=[],Z=[];for(let L=0;L<r;L++)D[L]=0,X[L]=0,Z[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:X,attributeDivisors:Z,object:U,attributes:{},index:null}}function u(U,D,X,Z){const L=c.attributes,H=D.attributes;let V=0;const k=X.getAttributes();for(const q in k)if(k[q].location>=0){const J=L[q];let ae=H[q];if(ae===void 0&&(q==="instanceMatrix"&&U.instanceMatrix&&(ae=U.instanceMatrix),q==="instanceColor"&&U.instanceColor&&(ae=U.instanceColor)),J===void 0||J.attribute!==ae||ae&&J.data!==ae.data)return!0;V++}return c.attributesNum!==V||c.index!==Z}function g(U,D,X,Z){const L={},H=D.attributes;let V=0;const k=X.getAttributes();for(const q in k)if(k[q].location>=0){let J=H[q];J===void 0&&(q==="instanceMatrix"&&U.instanceMatrix&&(J=U.instanceMatrix),q==="instanceColor"&&U.instanceColor&&(J=U.instanceColor));const ae={};ae.attribute=J,J&&J.data&&(ae.data=J.data),L[q]=ae,V++}c.attributes=L,c.attributesNum=V,c.index=Z}function v(){const U=c.newAttributes;for(let D=0,X=U.length;D<X;D++)U[D]=0}function S(U){P(U,0)}function P(U,D){const X=c.newAttributes,Z=c.enabledAttributes,L=c.attributeDivisors;X[U]=1,Z[U]===0&&(t.enableVertexAttribArray(U),Z[U]=1),L[U]!==D&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,D),L[U]=D)}function b(){const U=c.newAttributes,D=c.enabledAttributes;for(let X=0,Z=D.length;X<Z;X++)D[X]!==U[X]&&(t.disableVertexAttribArray(X),D[X]=0)}function w(U,D,X,Z,L,H,V){V===!0?t.vertexAttribIPointer(U,D,X,L,H):t.vertexAttribPointer(U,D,X,Z,L,H)}function G(U,D,X,Z){if(i.isWebGL2===!1&&(U.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const L=Z.attributes,H=X.getAttributes(),V=D.defaultAttributeValues;for(const k in H){const q=H[k];if(q.location>=0){let B=L[k];if(B===void 0&&(k==="instanceMatrix"&&U.instanceMatrix&&(B=U.instanceMatrix),k==="instanceColor"&&U.instanceColor&&(B=U.instanceColor)),B!==void 0){const J=B.normalized,ae=B.itemSize,pe=n.get(B);if(pe===void 0)continue;const Se=pe.buffer,Ce=pe.type,De=pe.bytesPerElement,_e=i.isWebGL2===!0&&(Ce===t.INT||Ce===t.UNSIGNED_INT||B.gpuType===Z0);if(B.isInterleavedBufferAttribute){const Ne=B.data,j=Ne.stride,Qe=B.offset;if(Ne.isInstancedInterleavedBuffer){for(let Me=0;Me<q.locationSize;Me++)P(q.location+Me,Ne.meshPerAttribute);U.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Ne.meshPerAttribute*Ne.count)}else for(let Me=0;Me<q.locationSize;Me++)S(q.location+Me);t.bindBuffer(t.ARRAY_BUFFER,Se);for(let Me=0;Me<q.locationSize;Me++)w(q.location+Me,ae/q.locationSize,Ce,J,j*De,(Qe+ae/q.locationSize*Me)*De,_e)}else{if(B.isInstancedBufferAttribute){for(let Ne=0;Ne<q.locationSize;Ne++)P(q.location+Ne,B.meshPerAttribute);U.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let Ne=0;Ne<q.locationSize;Ne++)S(q.location+Ne);t.bindBuffer(t.ARRAY_BUFFER,Se);for(let Ne=0;Ne<q.locationSize;Ne++)w(q.location+Ne,ae/q.locationSize,Ce,J,ae*De,ae/q.locationSize*Ne*De,_e)}}else if(V!==void 0){const J=V[k];if(J!==void 0)switch(J.length){case 2:t.vertexAttrib2fv(q.location,J);break;case 3:t.vertexAttrib3fv(q.location,J);break;case 4:t.vertexAttrib4fv(q.location,J);break;default:t.vertexAttrib1fv(q.location,J)}}}}b()}function E(){$();for(const U in a){const D=a[U];for(const X in D){const Z=D[X];for(const L in Z)x(Z[L].object),delete Z[L];delete D[X]}delete a[U]}}function T(U){if(a[U.id]===void 0)return;const D=a[U.id];for(const X in D){const Z=D[X];for(const L in Z)x(Z[L].object),delete Z[L];delete D[X]}delete a[U.id]}function O(U){for(const D in a){const X=a[D];if(X[U.id]===void 0)continue;const Z=X[U.id];for(const L in Z)x(Z[L].object),delete Z[L];delete X[U.id]}}function $(){oe(),d=!0,c!==l&&(c=l,_(c.object))}function oe(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:$,resetDefaultState:oe,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfProgram:O,initAttributes:v,enableAttribute:S,disableUnusedAttributes:b}}function u1(t,e,n,i){const r=i.isWebGL2;let s;function o(d){s=d}function a(d,h){t.drawArrays(s,d,h),n.update(h,s,1)}function l(d,h,f){if(f===0)return;let _,x;if(r)_=t,x="drawArraysInstanced";else if(_=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",_===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[x](s,d,h,f),n.update(h,s,f)}function c(d,h,f){if(f===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let x=0;x<f;x++)this.render(d[x],h[x]);else{_.multiDrawArraysWEBGL(s,d,0,h,0,f);let x=0;for(let y=0;y<f;y++)x+=h[y];n.update(x,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function d1(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),d=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),f=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),g=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,S=o||e.has("OES_texture_float"),P=v&&S,b=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:f,maxTextureSize:_,maxCubemapSize:x,maxAttributes:y,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:g,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:P,maxSamples:b}}function f1(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Pr,a=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const _=h.length!==0||f||i!==0||r;return r=f,i=h.length,_},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=d(h,f,0)},this.setState=function(h,f,_){const x=h.clippingPlanes,y=h.clipIntersection,p=h.clipShadows,u=t.get(h);if(!r||x===null||x.length===0||s&&!p)s?d(null):c();else{const g=s?0:i,v=g*4;let S=u.clippingState||null;l.value=S,S=d(x,f,v,_);for(let P=0;P!==v;++P)S[P]=n[P];u.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,f,_,x){const y=h!==null?h.length:0;let p=null;if(y!==0){if(p=l.value,x!==!0||p===null){const u=_+y*4,g=f.matrixWorldInverse;a.getNormalMatrix(g),(p===null||p.length<u)&&(p=new Float32Array(u));for(let v=0,S=_;v!==y;++v,S+=4)o.copy(h[v]).applyMatrix4(g,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}function h1(t){let e=new WeakMap;function n(o,a){return a===Id?o.mapping=$s:a===Ud&&(o.mapping=Zs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Id||a===Ud)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new TS(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class vv extends pv{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ls=4,tm=[.125,.215,.35,.446,.526,.582],Ir=20,Au=new vv,nm=new He;let bu=null,Ru=0,Cu=0;const Lr=(1+Math.sqrt(5))/2,ps=1/Lr,im=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,Lr,ps),new z(0,Lr,-ps),new z(ps,0,Lr),new z(-ps,0,Lr),new z(Lr,ps,0),new z(-Lr,ps,0)];class rm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){bu=this._renderer.getRenderTarget(),Ru=this._renderer.getActiveCubeFace(),Cu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=am(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=om(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bu,Ru,Cu),e.scissorTest=!1,sl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===$s||e.mapping===Zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bu=this._renderer.getRenderTarget(),Ru=this._renderer.getActiveCubeFace(),Cu=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Xn,minFilter:Xn,generateMipmaps:!1,type:aa,format:ci,colorSpace:Gi,depthBuffer:!1},r=sm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=p1(s)),this._blurMaterial=m1(s,e,n)}return r}_compileMaterial(e){const n=new xt(this._lodPlanes[0],e);this._renderer.compile(n,Au)}_sceneToCubeUV(e,n,i,r){const a=new Un(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(nm),d.toneMapping=pr,d.autoClear=!1;const _=new Hn({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1}),x=new xt(new ma,_);let y=!1;const p=e.background;p?p.isColor&&(_.color.copy(p),e.background=null,y=!0):(_.color.copy(nm),y=!0);for(let u=0;u<6;u++){const g=u%3;g===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):g===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const v=this._cubeSize;sl(r,g*v,u>2?v:0,v,v),d.setRenderTarget(r),y&&d.render(x,a),d.render(e,a)}x.geometry.dispose(),x.material.dispose(),d.toneMapping=f,d.autoClear=h,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===$s||e.mapping===Zs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=am()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=om());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new xt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;sl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Au)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=im[(r-1)%im.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new xt(this._lodPlanes[r],c),f=c.uniforms,_=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*_):2*Math.PI/(2*Ir-1),y=s/x,p=isFinite(s)?1+Math.floor(d*y):Ir;p>Ir&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ir}`);const u=[];let g=0;for(let w=0;w<Ir;++w){const G=w/y,E=Math.exp(-G*G/2);u.push(E),w===0?g+=E:w<p&&(g+=2*E)}for(let w=0;w<u.length;w++)u[w]=u[w]/g;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=x,f.mipInt.value=v-i;const S=this._sizeLods[r],P=3*S*(r>v-Ls?r-v+Ls:0),b=4*(this._cubeSize-S);sl(n,P,b,3*S,2*S),l.setRenderTarget(n),l.render(h,Au)}}function p1(t){const e=[],n=[],i=[];let r=t;const s=t-Ls+1+tm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Ls?l=tm[o-t+Ls-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,h=1+c,f=[d,d,h,d,h,h,d,d,h,h,d,h],_=6,x=6,y=3,p=2,u=1,g=new Float32Array(y*x*_),v=new Float32Array(p*x*_),S=new Float32Array(u*x*_);for(let b=0;b<_;b++){const w=b%3*2/3-1,G=b>2?0:-1,E=[w,G,0,w+2/3,G,0,w+2/3,G+1,0,w,G,0,w+2/3,G+1,0,w,G+1,0];g.set(E,y*x*b),v.set(f,p*x*b);const T=[b,b,b,b,b,b];S.set(T,u*x*b)}const P=new nn;P.setAttribute("position",new wt(g,y)),P.setAttribute("uv",new wt(v,p)),P.setAttribute("faceIndex",new wt(S,u)),e.push(P),r>Ls&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function sm(t,e,n){const i=new qr(t,e,n);return i.texture.mapping=xc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function sl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function m1(t,e,n){const i=new Float32Array(Ir),r=new z(0,1,0);return new Yn({name:"SphericalGaussianBlur",defines:{n:Ir,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:qf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:hr,depthTest:!1,depthWrite:!1})}function om(){return new Yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:hr,depthTest:!1,depthWrite:!1})}function am(){return new Yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hr,depthTest:!1,depthWrite:!1})}function qf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function g1(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Id||l===Ud,d=l===$s||l===Zs;if(c||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return n===null&&(n=new rm(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||d&&h&&r(h)){n===null&&(n=new rm(t));const f=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function v1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function _1(t,e,n,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);for(const x in f.morphAttributes){const y=f.morphAttributes[x];for(let p=0,u=y.length;p<u;p++)e.remove(y[p])}f.removeEventListener("dispose",o),delete r[f.id];const _=s.get(f);_&&(e.remove(_),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const x in f)e.update(f[x],t.ARRAY_BUFFER);const _=h.morphAttributes;for(const x in _){const y=_[x];for(let p=0,u=y.length;p<u;p++)e.update(y[p],t.ARRAY_BUFFER)}}function c(h){const f=[],_=h.index,x=h.attributes.position;let y=0;if(_!==null){const g=_.array;y=_.version;for(let v=0,S=g.length;v<S;v+=3){const P=g[v+0],b=g[v+1],w=g[v+2];f.push(P,b,b,w,w,P)}}else if(x!==void 0){const g=x.array;y=x.version;for(let v=0,S=g.length/3-1;v<S;v+=3){const P=v+0,b=v+1,w=v+2;f.push(P,b,b,w,w,P)}}else return;const p=new(ov(f)?fv:dv)(f,1);p.version=y;const u=s.get(h);u&&e.remove(u),s.set(h,p)}function d(h){const f=s.get(h);if(f){const _=h.index;_!==null&&f.version<_.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function y1(t,e,n,i){const r=i.isWebGL2;let s;function o(_){s=_}let a,l;function c(_){a=_.type,l=_.bytesPerElement}function d(_,x){t.drawElements(s,x,a,_*l),n.update(x,s,1)}function h(_,x,y){if(y===0)return;let p,u;if(r)p=t,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](s,x,a,_*l,y),n.update(x,s,y)}function f(_,x,y){if(y===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<y;u++)this.render(_[u]/l,x[u]);else{p.multiDrawElementsWEBGL(s,x,0,a,_,0,y);let u=0;for(let g=0;g<y;g++)u+=x[g];n.update(u,s,1)}}this.setMode=o,this.setIndex=c,this.render=d,this.renderInstances=h,this.renderMultiDraw=f}function x1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function S1(t,e){return t[0]-e[0]}function M1(t,e){return Math.abs(e[1])-Math.abs(t[1])}function E1(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new Mt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,d,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,y=x!==void 0?x.length:0;let p=s.get(d);if(p===void 0||p.count!==y){let D=function(){oe.dispose(),s.delete(d),d.removeEventListener("dispose",D)};var _=D;p!==void 0&&p.texture.dispose();const v=d.morphAttributes.position!==void 0,S=d.morphAttributes.normal!==void 0,P=d.morphAttributes.color!==void 0,b=d.morphAttributes.position||[],w=d.morphAttributes.normal||[],G=d.morphAttributes.color||[];let E=0;v===!0&&(E=1),S===!0&&(E=2),P===!0&&(E=3);let T=d.attributes.position.count*E,O=1;T>e.maxTextureSize&&(O=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const $=new Float32Array(T*O*4*y),oe=new cv($,T,O,y);oe.type=rr,oe.needsUpdate=!0;const U=E*4;for(let X=0;X<y;X++){const Z=b[X],L=w[X],H=G[X],V=T*O*4*X;for(let k=0;k<Z.count;k++){const q=k*U;v===!0&&(o.fromBufferAttribute(Z,k),$[V+q+0]=o.x,$[V+q+1]=o.y,$[V+q+2]=o.z,$[V+q+3]=0),S===!0&&(o.fromBufferAttribute(L,k),$[V+q+4]=o.x,$[V+q+5]=o.y,$[V+q+6]=o.z,$[V+q+7]=0),P===!0&&(o.fromBufferAttribute(H,k),$[V+q+8]=o.x,$[V+q+9]=o.y,$[V+q+10]=o.z,$[V+q+11]=H.itemSize===4?o.w:1)}}p={count:y,texture:oe,size:new Ve(T,O)},s.set(d,p),d.addEventListener("dispose",D)}let u=0;for(let v=0;v<f.length;v++)u+=f[v];const g=d.morphTargetsRelative?1:1-u;h.getUniforms().setValue(t,"morphTargetBaseInfluence",g),h.getUniforms().setValue(t,"morphTargetInfluences",f),h.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),h.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const x=f===void 0?0:f.length;let y=i[d.id];if(y===void 0||y.length!==x){y=[];for(let S=0;S<x;S++)y[S]=[S,0];i[d.id]=y}for(let S=0;S<x;S++){const P=y[S];P[0]=S,P[1]=f[S]}y.sort(M1);for(let S=0;S<8;S++)S<x&&y[S][1]?(a[S][0]=y[S][0],a[S][1]=y[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(S1);const p=d.morphAttributes.position,u=d.morphAttributes.normal;let g=0;for(let S=0;S<8;S++){const P=a[S],b=P[0],w=P[1];b!==Number.MAX_SAFE_INTEGER&&w?(p&&d.getAttribute("morphTarget"+S)!==p[b]&&d.setAttribute("morphTarget"+S,p[b]),u&&d.getAttribute("morphNormal"+S)!==u[b]&&d.setAttribute("morphNormal"+S,u[b]),r[S]=w,g+=w):(p&&d.hasAttribute("morphTarget"+S)===!0&&d.deleteAttribute("morphTarget"+S),u&&d.hasAttribute("morphNormal"+S)===!0&&d.deleteAttribute("morphNormal"+S),r[S]=0)}const v=d.morphTargetsRelative?1:1-g;h.getUniforms().setValue(t,"morphTargetBaseInfluence",v),h.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function w1(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class _v extends Cn{constructor(e,n,i,r,s,o,a,l,c,d){if(d=d!==void 0?d:Br,d!==Br&&d!==Ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Br&&(i=ir),i===void 0&&d===Ks&&(i=zr),super(null,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:gn,this.minFilter=l!==void 0?l:gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const yv=new Cn,xv=new _v(1,1);xv.compareFunction=sv;const Sv=new cv,Mv=new lS,Ev=new mv,lm=[],cm=[],um=new Float32Array(16),dm=new Float32Array(9),fm=new Float32Array(4);function io(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=lm[r];if(s===void 0&&(s=new Float32Array(r),lm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ht(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Vt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function wc(t,e){let n=cm[e];n===void 0&&(n=new Int32Array(e),cm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function T1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function A1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2fv(this.addr,e),Vt(n,e)}}function b1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ht(n,e))return;t.uniform3fv(this.addr,e),Vt(n,e)}}function R1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4fv(this.addr,e),Vt(n,e)}}function C1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Vt(n,e)}else{if(Ht(n,i))return;fm.set(i),t.uniformMatrix2fv(this.addr,!1,fm),Vt(n,i)}}function P1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Vt(n,e)}else{if(Ht(n,i))return;dm.set(i),t.uniformMatrix3fv(this.addr,!1,dm),Vt(n,i)}}function L1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Vt(n,e)}else{if(Ht(n,i))return;um.set(i),t.uniformMatrix4fv(this.addr,!1,um),Vt(n,i)}}function D1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function I1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2iv(this.addr,e),Vt(n,e)}}function U1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ht(n,e))return;t.uniform3iv(this.addr,e),Vt(n,e)}}function N1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4iv(this.addr,e),Vt(n,e)}}function F1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function O1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2uiv(this.addr,e),Vt(n,e)}}function k1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ht(n,e))return;t.uniform3uiv(this.addr,e),Vt(n,e)}}function z1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4uiv(this.addr,e),Vt(n,e)}}function B1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?xv:yv;n.setTexture2D(e||s,r)}function G1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Mv,r)}function H1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Ev,r)}function V1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Sv,r)}function W1(t){switch(t){case 5126:return T1;case 35664:return A1;case 35665:return b1;case 35666:return R1;case 35674:return C1;case 35675:return P1;case 35676:return L1;case 5124:case 35670:return D1;case 35667:case 35671:return I1;case 35668:case 35672:return U1;case 35669:case 35673:return N1;case 5125:return F1;case 36294:return O1;case 36295:return k1;case 36296:return z1;case 35678:case 36198:case 36298:case 36306:case 35682:return B1;case 35679:case 36299:case 36307:return G1;case 35680:case 36300:case 36308:case 36293:return H1;case 36289:case 36303:case 36311:case 36292:return V1}}function X1(t,e){t.uniform1fv(this.addr,e)}function j1(t,e){const n=io(e,this.size,2);t.uniform2fv(this.addr,n)}function q1(t,e){const n=io(e,this.size,3);t.uniform3fv(this.addr,n)}function Y1(t,e){const n=io(e,this.size,4);t.uniform4fv(this.addr,n)}function $1(t,e){const n=io(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Z1(t,e){const n=io(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function K1(t,e){const n=io(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function J1(t,e){t.uniform1iv(this.addr,e)}function Q1(t,e){t.uniform2iv(this.addr,e)}function ew(t,e){t.uniform3iv(this.addr,e)}function tw(t,e){t.uniform4iv(this.addr,e)}function nw(t,e){t.uniform1uiv(this.addr,e)}function iw(t,e){t.uniform2uiv(this.addr,e)}function rw(t,e){t.uniform3uiv(this.addr,e)}function sw(t,e){t.uniform4uiv(this.addr,e)}function ow(t,e,n){const i=this.cache,r=e.length,s=wc(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),Vt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||yv,s[o])}function aw(t,e,n){const i=this.cache,r=e.length,s=wc(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),Vt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Mv,s[o])}function lw(t,e,n){const i=this.cache,r=e.length,s=wc(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),Vt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Ev,s[o])}function cw(t,e,n){const i=this.cache,r=e.length,s=wc(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),Vt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Sv,s[o])}function uw(t){switch(t){case 5126:return X1;case 35664:return j1;case 35665:return q1;case 35666:return Y1;case 35674:return $1;case 35675:return Z1;case 35676:return K1;case 5124:case 35670:return J1;case 35667:case 35671:return Q1;case 35668:case 35672:return ew;case 35669:case 35673:return tw;case 5125:return nw;case 36294:return iw;case 36295:return rw;case 36296:return sw;case 35678:case 36198:case 36298:case 36306:case 35682:return ow;case 35679:case 36299:case 36307:return aw;case 35680:case 36300:case 36308:case 36293:return lw;case 36289:case 36303:case 36311:case 36292:return cw}}class dw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=W1(n.type)}}class fw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=uw(n.type)}}class hw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Pu=/(\w+)(\])?(\[|\.)?/g;function hm(t,e){t.seq.push(e),t.map[e.id]=e}function pw(t,e,n){const i=t.name,r=i.length;for(Pu.lastIndex=0;;){const s=Pu.exec(i),o=Pu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){hm(n,c===void 0?new dw(a,t,e):new fw(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new hw(a),hm(n,h)),n=h}}}class Tl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);pw(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function pm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const mw=37297;let gw=0;function vw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function _w(t){const e=ct.getPrimaries(ct.workingColorSpace),n=ct.getPrimaries(t);let i;switch(e===n?i="":e===Ql&&n===Jl?i="LinearDisplayP3ToLinearSRGB":e===Jl&&n===Ql&&(i="LinearSRGBToLinearDisplayP3"),t){case Gi:case Sc:return[i,"LinearTransferOETF"];case tn:case Vf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function mm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+vw(t.getShaderSource(e),o)}else return r}function yw(t,e){const n=_w(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function xw(t,e){let n;switch(e){case Dx:n="Linear";break;case Ix:n="Reinhard";break;case Ux:n="OptimizedCineon";break;case Y0:n="ACESFilmic";break;case Fx:n="AgX";break;case Nx:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Sw(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ds).join(`
`)}function Mw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ds).join(`
`)}function Ew(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function ww(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ds(t){return t!==""}function gm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Tw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gd(t){return t.replace(Tw,bw)}const Aw=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function bw(t,e){let n=Ye[e];if(n===void 0){const i=Aw.get(e);if(i!==void 0)n=Ye[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Gd(n)}const Rw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _m(t){return t.replace(Rw,Cw)}function Cw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ym(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Pw(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===j0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===ox?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ri&&(e="SHADOWMAP_TYPE_VSM"),e}function Lw(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case $s:case Zs:e="ENVMAP_TYPE_CUBE";break;case xc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Dw(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Zs:e="ENVMAP_MODE_REFRACTION";break}return e}function Iw(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case q0:e="ENVMAP_BLENDING_MULTIPLY";break;case Px:e="ENVMAP_BLENDING_MIX";break;case Lx:e="ENVMAP_BLENDING_ADD";break}return e}function Uw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Nw(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=Pw(n),c=Lw(n),d=Dw(n),h=Iw(n),f=Uw(n),_=n.isWebGL2?"":Sw(n),x=Mw(n),y=Ew(s),p=r.createProgram();let u,g,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Ds).join(`
`),u.length>0&&(u+=`
`),g=[_,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Ds).join(`
`),g.length>0&&(g+=`
`)):(u=[ym(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ds).join(`
`),g=[_,ym(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==pr?"#define TONE_MAPPING":"",n.toneMapping!==pr?Ye.tonemapping_pars_fragment:"",n.toneMapping!==pr?xw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,yw("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ds).join(`
`)),o=Gd(o),o=gm(o,n),o=vm(o,n),a=Gd(a),a=gm(a,n),a=vm(a,n),o=_m(o),a=_m(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,u=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,g=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Op?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Op?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const S=v+u+o,P=v+g+a,b=pm(r,r.VERTEX_SHADER,S),w=pm(r,r.FRAGMENT_SHADER,P);r.attachShader(p,b),r.attachShader(p,w),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function G($){if(t.debug.checkShaderErrors){const oe=r.getProgramInfoLog(p).trim(),U=r.getShaderInfoLog(b).trim(),D=r.getShaderInfoLog(w).trim();let X=!0,Z=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(X=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,p,b,w);else{const L=mm(r,b,"vertex"),H=mm(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Program Info Log: `+oe+`
`+L+`
`+H)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(U===""||D==="")&&(Z=!1);Z&&($.diagnostics={runnable:X,programLog:oe,vertexShader:{log:U,prefix:u},fragmentShader:{log:D,prefix:g}})}r.deleteShader(b),r.deleteShader(w),E=new Tl(r,p),T=ww(r,p)}let E;this.getUniforms=function(){return E===void 0&&G(this),E};let T;this.getAttributes=function(){return T===void 0&&G(this),T};let O=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=r.getProgramParameter(p,mw)),O},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=gw++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=b,this.fragmentShader=w,this}let Fw=0;class Ow{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new kw(e),n.set(e,i)),i}}class kw{constructor(e){this.id=Fw++,this.code=e,this.usedTimes=0}}function zw(t,e,n,i,r,s,o){const a=new Xf,l=new Ow,c=[],d=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let _=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return E===0?"uv":`uv${E}`}function p(E,T,O,$,oe){const U=$.fog,D=oe.geometry,X=E.isMeshStandardMaterial?$.environment:null,Z=(E.isMeshStandardMaterial?n:e).get(E.envMap||X),L=Z&&Z.mapping===xc?Z.image.height:null,H=x[E.type];E.precision!==null&&(_=r.getMaxPrecision(E.precision),_!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",_,"instead."));const V=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,k=V!==void 0?V.length:0;let q=0;D.morphAttributes.position!==void 0&&(q=1),D.morphAttributes.normal!==void 0&&(q=2),D.morphAttributes.color!==void 0&&(q=3);let B,J,ae,pe;if(H){const kt=yi[H];B=kt.vertexShader,J=kt.fragmentShader}else B=E.vertexShader,J=E.fragmentShader,l.update(E),ae=l.getVertexShaderID(E),pe=l.getFragmentShaderID(E);const Se=t.getRenderTarget(),Ce=oe.isInstancedMesh===!0,De=oe.isBatchedMesh===!0,_e=!!E.map,Ne=!!E.matcap,j=!!Z,Qe=!!E.aoMap,Me=!!E.lightMap,Le=!!E.bumpMap,Ee=!!E.normalMap,$e=!!E.displacementMap,Oe=!!E.emissiveMap,A=!!E.metalnessMap,M=!!E.roughnessMap,Y=E.anisotropy>0,re=E.clearcoat>0,se=E.iridescence>0,ce=E.sheen>0,be=E.transmission>0,ye=Y&&!!E.anisotropyMap,we=re&&!!E.clearcoatMap,Fe=re&&!!E.clearcoatNormalMap,Be=re&&!!E.clearcoatRoughnessMap,le=se&&!!E.iridescenceMap,it=se&&!!E.iridescenceThicknessMap,ze=ce&&!!E.sheenColorMap,Ge=ce&&!!E.sheenRoughnessMap,Te=!!E.specularMap,Re=!!E.specularColorMap,je=!!E.specularIntensityMap,Ze=be&&!!E.transmissionMap,ut=be&&!!E.thicknessMap,We=!!E.gradientMap,fe=!!E.alphaMap,N=E.alphaTest>0,ve=!!E.alphaHash,xe=!!E.extensions,ke=!!D.attributes.uv1,Ie=!!D.attributes.uv2,dt=!!D.attributes.uv3;let st=pr;return E.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(st=t.toneMapping),{isWebGL2:d,shaderID:H,shaderType:E.type,shaderName:E.name,vertexShader:B,fragmentShader:J,defines:E.defines,customVertexShaderID:ae,customFragmentShaderID:pe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:_,batching:De,instancing:Ce,instancingColor:Ce&&oe.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Se===null?t.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:Gi,map:_e,matcap:Ne,envMap:j,envMapMode:j&&Z.mapping,envMapCubeUVHeight:L,aoMap:Qe,lightMap:Me,bumpMap:Le,normalMap:Ee,displacementMap:f&&$e,emissiveMap:Oe,normalMapObjectSpace:Ee&&E.normalMapType===Yx,normalMapTangentSpace:Ee&&E.normalMapType===rv,metalnessMap:A,roughnessMap:M,anisotropy:Y,anisotropyMap:ye,clearcoat:re,clearcoatMap:we,clearcoatNormalMap:Fe,clearcoatRoughnessMap:Be,iridescence:se,iridescenceMap:le,iridescenceThicknessMap:it,sheen:ce,sheenColorMap:ze,sheenRoughnessMap:Ge,specularMap:Te,specularColorMap:Re,specularIntensityMap:je,transmission:be,transmissionMap:Ze,thicknessMap:ut,gradientMap:We,opaque:E.transparent===!1&&E.blending===zs,alphaMap:fe,alphaTest:N,alphaHash:ve,combine:E.combine,mapUv:_e&&y(E.map.channel),aoMapUv:Qe&&y(E.aoMap.channel),lightMapUv:Me&&y(E.lightMap.channel),bumpMapUv:Le&&y(E.bumpMap.channel),normalMapUv:Ee&&y(E.normalMap.channel),displacementMapUv:$e&&y(E.displacementMap.channel),emissiveMapUv:Oe&&y(E.emissiveMap.channel),metalnessMapUv:A&&y(E.metalnessMap.channel),roughnessMapUv:M&&y(E.roughnessMap.channel),anisotropyMapUv:ye&&y(E.anisotropyMap.channel),clearcoatMapUv:we&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:Fe&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:it&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&y(E.sheenRoughnessMap.channel),specularMapUv:Te&&y(E.specularMap.channel),specularColorMapUv:Re&&y(E.specularColorMap.channel),specularIntensityMapUv:je&&y(E.specularIntensityMap.channel),transmissionMapUv:Ze&&y(E.transmissionMap.channel),thicknessMapUv:ut&&y(E.thicknessMap.channel),alphaMapUv:fe&&y(E.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(Ee||Y),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUv1s:ke,vertexUv2s:Ie,vertexUv3s:dt,pointsUvs:oe.isPoints===!0&&!!D.attributes.uv&&(_e||fe),fog:!!U,useFog:E.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:oe.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:q,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&O.length>0,shadowMapType:t.shadowMap.type,toneMapping:st,useLegacyLights:t._useLegacyLights,decodeVideoTexture:_e&&E.map.isVideoTexture===!0&&ct.getTransfer(E.map.colorSpace)===vt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===En,flipSided:E.side===Rn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:xe&&E.extensions.derivatives===!0,extensionFragDepth:xe&&E.extensions.fragDepth===!0,extensionDrawBuffers:xe&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:xe&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:xe&&E.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function u(E){const T=[];if(E.shaderID?T.push(E.shaderID):(T.push(E.customVertexShaderID),T.push(E.customFragmentShaderID)),E.defines!==void 0)for(const O in E.defines)T.push(O),T.push(E.defines[O]);return E.isRawShaderMaterial===!1&&(g(T,E),v(T,E),T.push(t.outputColorSpace)),T.push(E.customProgramCacheKey),T.join()}function g(E,T){E.push(T.precision),E.push(T.outputColorSpace),E.push(T.envMapMode),E.push(T.envMapCubeUVHeight),E.push(T.mapUv),E.push(T.alphaMapUv),E.push(T.lightMapUv),E.push(T.aoMapUv),E.push(T.bumpMapUv),E.push(T.normalMapUv),E.push(T.displacementMapUv),E.push(T.emissiveMapUv),E.push(T.metalnessMapUv),E.push(T.roughnessMapUv),E.push(T.anisotropyMapUv),E.push(T.clearcoatMapUv),E.push(T.clearcoatNormalMapUv),E.push(T.clearcoatRoughnessMapUv),E.push(T.iridescenceMapUv),E.push(T.iridescenceThicknessMapUv),E.push(T.sheenColorMapUv),E.push(T.sheenRoughnessMapUv),E.push(T.specularMapUv),E.push(T.specularColorMapUv),E.push(T.specularIntensityMapUv),E.push(T.transmissionMapUv),E.push(T.thicknessMapUv),E.push(T.combine),E.push(T.fogExp2),E.push(T.sizeAttenuation),E.push(T.morphTargetsCount),E.push(T.morphAttributeCount),E.push(T.numDirLights),E.push(T.numPointLights),E.push(T.numSpotLights),E.push(T.numSpotLightMaps),E.push(T.numHemiLights),E.push(T.numRectAreaLights),E.push(T.numDirLightShadows),E.push(T.numPointLightShadows),E.push(T.numSpotLightShadows),E.push(T.numSpotLightShadowsWithMaps),E.push(T.numLightProbes),E.push(T.shadowMapType),E.push(T.toneMapping),E.push(T.numClippingPlanes),E.push(T.numClipIntersection),E.push(T.depthPacking)}function v(E,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),E.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),E.push(a.mask)}function S(E){const T=x[E.type];let O;if(T){const $=yi[T];O=SS.clone($.uniforms)}else O=E.uniforms;return O}function P(E,T){let O;for(let $=0,oe=c.length;$<oe;$++){const U=c[$];if(U.cacheKey===T){O=U,++O.usedTimes;break}}return O===void 0&&(O=new Nw(t,T,E,s),c.push(O)),O}function b(E){if(--E.usedTimes===0){const T=c.indexOf(E);c[T]=c[c.length-1],c.pop(),E.destroy()}}function w(E){l.remove(E)}function G(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:S,acquireProgram:P,releaseProgram:b,releaseShaderCache:w,programs:c,dispose:G}}function Bw(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function Gw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function xm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Sm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,f,_,x,y,p){let u=t[e];return u===void 0?(u={id:h.id,object:h,geometry:f,material:_,groupOrder:x,renderOrder:h.renderOrder,z:y,group:p},t[e]=u):(u.id=h.id,u.object=h,u.geometry=f,u.material=_,u.groupOrder=x,u.renderOrder=h.renderOrder,u.z=y,u.group=p),e++,u}function a(h,f,_,x,y,p){const u=o(h,f,_,x,y,p);_.transmission>0?i.push(u):_.transparent===!0?r.push(u):n.push(u)}function l(h,f,_,x,y,p){const u=o(h,f,_,x,y,p);_.transmission>0?i.unshift(u):_.transparent===!0?r.unshift(u):n.unshift(u)}function c(h,f){n.length>1&&n.sort(h||Gw),i.length>1&&i.sort(f||xm),r.length>1&&r.sort(f||xm)}function d(){for(let h=e,f=t.length;h<f;h++){const _=t[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function Hw(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Sm,t.set(i,[o])):r>=s.length?(o=new Sm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function Vw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new z,color:new He};break;case"SpotLight":n={position:new z,direction:new z,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new z,color:new He,distance:0,decay:0};break;case"HemisphereLight":n={direction:new z,skyColor:new He,groundColor:new He};break;case"RectAreaLight":n={color:new He,position:new z,halfWidth:new z,halfHeight:new z};break}return t[e.id]=n,n}}}function Ww(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Xw=0;function jw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function qw(t,e){const n=new Vw,i=Ww(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new z);const s=new z,o=new Pt,a=new Pt;function l(d,h){let f=0,_=0,x=0;for(let $=0;$<9;$++)r.probe[$].set(0,0,0);let y=0,p=0,u=0,g=0,v=0,S=0,P=0,b=0,w=0,G=0,E=0;d.sort(jw);const T=h===!0?Math.PI:1;for(let $=0,oe=d.length;$<oe;$++){const U=d[$],D=U.color,X=U.intensity,Z=U.distance,L=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)f+=D.r*X*T,_+=D.g*X*T,x+=D.b*X*T;else if(U.isLightProbe){for(let H=0;H<9;H++)r.probe[H].addScaledVector(U.sh.coefficients[H],X);E++}else if(U.isDirectionalLight){const H=n.get(U);if(H.color.copy(U.color).multiplyScalar(U.intensity*T),U.castShadow){const V=U.shadow,k=i.get(U);k.shadowBias=V.bias,k.shadowNormalBias=V.normalBias,k.shadowRadius=V.radius,k.shadowMapSize=V.mapSize,r.directionalShadow[y]=k,r.directionalShadowMap[y]=L,r.directionalShadowMatrix[y]=U.shadow.matrix,S++}r.directional[y]=H,y++}else if(U.isSpotLight){const H=n.get(U);H.position.setFromMatrixPosition(U.matrixWorld),H.color.copy(D).multiplyScalar(X*T),H.distance=Z,H.coneCos=Math.cos(U.angle),H.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),H.decay=U.decay,r.spot[u]=H;const V=U.shadow;if(U.map&&(r.spotLightMap[w]=U.map,w++,V.updateMatrices(U),U.castShadow&&G++),r.spotLightMatrix[u]=V.matrix,U.castShadow){const k=i.get(U);k.shadowBias=V.bias,k.shadowNormalBias=V.normalBias,k.shadowRadius=V.radius,k.shadowMapSize=V.mapSize,r.spotShadow[u]=k,r.spotShadowMap[u]=L,b++}u++}else if(U.isRectAreaLight){const H=n.get(U);H.color.copy(D).multiplyScalar(X),H.halfWidth.set(U.width*.5,0,0),H.halfHeight.set(0,U.height*.5,0),r.rectArea[g]=H,g++}else if(U.isPointLight){const H=n.get(U);if(H.color.copy(U.color).multiplyScalar(U.intensity*T),H.distance=U.distance,H.decay=U.decay,U.castShadow){const V=U.shadow,k=i.get(U);k.shadowBias=V.bias,k.shadowNormalBias=V.normalBias,k.shadowRadius=V.radius,k.shadowMapSize=V.mapSize,k.shadowCameraNear=V.camera.near,k.shadowCameraFar=V.camera.far,r.pointShadow[p]=k,r.pointShadowMap[p]=L,r.pointShadowMatrix[p]=U.shadow.matrix,P++}r.point[p]=H,p++}else if(U.isHemisphereLight){const H=n.get(U);H.skyColor.copy(U.color).multiplyScalar(X*T),H.groundColor.copy(U.groundColor).multiplyScalar(X*T),r.hemi[v]=H,v++}}g>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ge.LTC_FLOAT_1,r.rectAreaLTC2=ge.LTC_FLOAT_2):(r.rectAreaLTC1=ge.LTC_HALF_1,r.rectAreaLTC2=ge.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ge.LTC_FLOAT_1,r.rectAreaLTC2=ge.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ge.LTC_HALF_1,r.rectAreaLTC2=ge.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=_,r.ambient[2]=x;const O=r.hash;(O.directionalLength!==y||O.pointLength!==p||O.spotLength!==u||O.rectAreaLength!==g||O.hemiLength!==v||O.numDirectionalShadows!==S||O.numPointShadows!==P||O.numSpotShadows!==b||O.numSpotMaps!==w||O.numLightProbes!==E)&&(r.directional.length=y,r.spot.length=u,r.rectArea.length=g,r.point.length=p,r.hemi.length=v,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=b+w-G,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=G,r.numLightProbes=E,O.directionalLength=y,O.pointLength=p,O.spotLength=u,O.rectAreaLength=g,O.hemiLength=v,O.numDirectionalShadows=S,O.numPointShadows=P,O.numSpotShadows=b,O.numSpotMaps=w,O.numLightProbes=E,r.version=Xw++)}function c(d,h){let f=0,_=0,x=0,y=0,p=0;const u=h.matrixWorldInverse;for(let g=0,v=d.length;g<v;g++){const S=d[g];if(S.isDirectionalLight){const P=r.directional[f];P.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(u),f++}else if(S.isSpotLight){const P=r.spot[x];P.position.setFromMatrixPosition(S.matrixWorld),P.position.applyMatrix4(u),P.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(u),x++}else if(S.isRectAreaLight){const P=r.rectArea[y];P.position.setFromMatrixPosition(S.matrixWorld),P.position.applyMatrix4(u),a.identity(),o.copy(S.matrixWorld),o.premultiply(u),a.extractRotation(o),P.halfWidth.set(S.width*.5,0,0),P.halfHeight.set(0,S.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),y++}else if(S.isPointLight){const P=r.point[_];P.position.setFromMatrixPosition(S.matrixWorld),P.position.applyMatrix4(u),_++}else if(S.isHemisphereLight){const P=r.hemi[p];P.direction.setFromMatrixPosition(S.matrixWorld),P.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:r}}function Mm(t,e){const n=new qw(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function l(h){n.setup(i,h)}function c(h){n.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Yw(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new Mm(t,e),n.set(s,[l])):o>=a.length?(l=new Mm(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class $w extends Zr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Zw extends Zr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Kw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Qw(t,e,n){let i=new jf;const r=new Ve,s=new Ve,o=new Mt,a=new $w({depthPacking:qx}),l=new Zw,c={},d=n.maxTextureSize,h={[fi]:Rn,[Rn]:fi,[En]:En},f=new Yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:Kw,fragmentShader:Jw}),_=f.clone();_.defines.HORIZONTAL_PASS=1;const x=new nn;x.setAttribute("position",new wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new xt(x,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=j0;let u=this.type;this.render=function(b,w,G){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const E=t.getRenderTarget(),T=t.getActiveCubeFace(),O=t.getActiveMipmapLevel(),$=t.state;$.setBlending(hr),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const oe=u!==Ri&&this.type===Ri,U=u===Ri&&this.type!==Ri;for(let D=0,X=b.length;D<X;D++){const Z=b[D],L=Z.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const H=L.getFrameExtents();if(r.multiply(H),s.copy(L.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/H.x),r.x=s.x*H.x,L.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/H.y),r.y=s.y*H.y,L.mapSize.y=s.y)),L.map===null||oe===!0||U===!0){const k=this.type!==Ri?{minFilter:gn,magFilter:gn}:{};L.map!==null&&L.map.dispose(),L.map=new qr(r.x,r.y,k),L.map.texture.name=Z.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const V=L.getViewportCount();for(let k=0;k<V;k++){const q=L.getViewport(k);o.set(s.x*q.x,s.y*q.y,s.x*q.z,s.y*q.w),$.viewport(o),L.updateMatrices(Z,k),i=L.getFrustum(),S(w,G,L.camera,Z,this.type)}L.isPointLightShadow!==!0&&this.type===Ri&&g(L,G),L.needsUpdate=!1}u=this.type,p.needsUpdate=!1,t.setRenderTarget(E,T,O)};function g(b,w){const G=e.update(y);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,_.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,_.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new qr(r.x,r.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(w,null,G,f,y,null),_.uniforms.shadow_pass.value=b.mapPass.texture,_.uniforms.resolution.value=b.mapSize,_.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(w,null,G,_,y,null)}function v(b,w,G,E){let T=null;const O=G.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(O!==void 0)T=O;else if(T=G.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const $=T.uuid,oe=w.uuid;let U=c[$];U===void 0&&(U={},c[$]=U);let D=U[oe];D===void 0&&(D=T.clone(),U[oe]=D,w.addEventListener("dispose",P)),T=D}if(T.visible=w.visible,T.wireframe=w.wireframe,E===Ri?T.side=w.shadowSide!==null?w.shadowSide:w.side:T.side=w.shadowSide!==null?w.shadowSide:h[w.side],T.alphaMap=w.alphaMap,T.alphaTest=w.alphaTest,T.map=w.map,T.clipShadows=w.clipShadows,T.clippingPlanes=w.clippingPlanes,T.clipIntersection=w.clipIntersection,T.displacementMap=w.displacementMap,T.displacementScale=w.displacementScale,T.displacementBias=w.displacementBias,T.wireframeLinewidth=w.wireframeLinewidth,T.linewidth=w.linewidth,G.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const $=t.properties.get(T);$.light=G}return T}function S(b,w,G,E,T){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&T===Ri)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,b.matrixWorld);const oe=e.update(b),U=b.material;if(Array.isArray(U)){const D=oe.groups;for(let X=0,Z=D.length;X<Z;X++){const L=D[X],H=U[L.materialIndex];if(H&&H.visible){const V=v(b,H,E,T);b.onBeforeShadow(t,b,w,G,oe,V,L),t.renderBufferDirect(G,null,oe,V,b,L),b.onAfterShadow(t,b,w,G,oe,V,L)}}}else if(U.visible){const D=v(b,U,E,T);b.onBeforeShadow(t,b,w,G,oe,D,null),t.renderBufferDirect(G,null,oe,D,b,null),b.onAfterShadow(t,b,w,G,oe,D,null)}}const $=b.children;for(let oe=0,U=$.length;oe<U;oe++)S($[oe],w,G,E,T)}function P(b){b.target.removeEventListener("dispose",P);for(const G in c){const E=c[G],T=b.target.uuid;T in E&&(E[T].dispose(),delete E[T])}}}function eT(t,e,n){const i=n.isWebGL2;function r(){let N=!1;const ve=new Mt;let xe=null;const ke=new Mt(0,0,0,0);return{setMask:function(Ie){xe!==Ie&&!N&&(t.colorMask(Ie,Ie,Ie,Ie),xe=Ie)},setLocked:function(Ie){N=Ie},setClear:function(Ie,dt,st,Et,kt){kt===!0&&(Ie*=Et,dt*=Et,st*=Et),ve.set(Ie,dt,st,Et),ke.equals(ve)===!1&&(t.clearColor(Ie,dt,st,Et),ke.copy(ve))},reset:function(){N=!1,xe=null,ke.set(-1,0,0,0)}}}function s(){let N=!1,ve=null,xe=null,ke=null;return{setTest:function(Ie){Ie?De(t.DEPTH_TEST):_e(t.DEPTH_TEST)},setMask:function(Ie){ve!==Ie&&!N&&(t.depthMask(Ie),ve=Ie)},setFunc:function(Ie){if(xe!==Ie){switch(Ie){case Ex:t.depthFunc(t.NEVER);break;case wx:t.depthFunc(t.ALWAYS);break;case Tx:t.depthFunc(t.LESS);break;case Zl:t.depthFunc(t.LEQUAL);break;case Ax:t.depthFunc(t.EQUAL);break;case bx:t.depthFunc(t.GEQUAL);break;case Rx:t.depthFunc(t.GREATER);break;case Cx:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}xe=Ie}},setLocked:function(Ie){N=Ie},setClear:function(Ie){ke!==Ie&&(t.clearDepth(Ie),ke=Ie)},reset:function(){N=!1,ve=null,xe=null,ke=null}}}function o(){let N=!1,ve=null,xe=null,ke=null,Ie=null,dt=null,st=null,Et=null,kt=null;return{setTest:function(ot){N||(ot?De(t.STENCIL_TEST):_e(t.STENCIL_TEST))},setMask:function(ot){ve!==ot&&!N&&(t.stencilMask(ot),ve=ot)},setFunc:function(ot,Wt,xn){(xe!==ot||ke!==Wt||Ie!==xn)&&(t.stencilFunc(ot,Wt,xn),xe=ot,ke=Wt,Ie=xn)},setOp:function(ot,Wt,xn){(dt!==ot||st!==Wt||Et!==xn)&&(t.stencilOp(ot,Wt,xn),dt=ot,st=Wt,Et=xn)},setLocked:function(ot){N=ot},setClear:function(ot){kt!==ot&&(t.clearStencil(ot),kt=ot)},reset:function(){N=!1,ve=null,xe=null,ke=null,Ie=null,dt=null,st=null,Et=null,kt=null}}}const a=new r,l=new s,c=new o,d=new WeakMap,h=new WeakMap;let f={},_={},x=new WeakMap,y=[],p=null,u=!1,g=null,v=null,S=null,P=null,b=null,w=null,G=null,E=new He(0,0,0),T=0,O=!1,$=null,oe=null,U=null,D=null,X=null;const Z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,H=0;const V=t.getParameter(t.VERSION);V.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(V)[1]),L=H>=1):V.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),L=H>=2);let k=null,q={};const B=t.getParameter(t.SCISSOR_BOX),J=t.getParameter(t.VIEWPORT),ae=new Mt().fromArray(B),pe=new Mt().fromArray(J);function Se(N,ve,xe,ke){const Ie=new Uint8Array(4),dt=t.createTexture();t.bindTexture(N,dt),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let st=0;st<xe;st++)i&&(N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY)?t.texImage3D(ve,0,t.RGBA,1,1,ke,0,t.RGBA,t.UNSIGNED_BYTE,Ie):t.texImage2D(ve+st,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ie);return dt}const Ce={};Ce[t.TEXTURE_2D]=Se(t.TEXTURE_2D,t.TEXTURE_2D,1),Ce[t.TEXTURE_CUBE_MAP]=Se(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ce[t.TEXTURE_2D_ARRAY]=Se(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Ce[t.TEXTURE_3D]=Se(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),De(t.DEPTH_TEST),l.setFunc(Zl),Oe(!1),A(sp),De(t.CULL_FACE),Ee(hr);function De(N){f[N]!==!0&&(t.enable(N),f[N]=!0)}function _e(N){f[N]!==!1&&(t.disable(N),f[N]=!1)}function Ne(N,ve){return _[N]!==ve?(t.bindFramebuffer(N,ve),_[N]=ve,i&&(N===t.DRAW_FRAMEBUFFER&&(_[t.FRAMEBUFFER]=ve),N===t.FRAMEBUFFER&&(_[t.DRAW_FRAMEBUFFER]=ve)),!0):!1}function j(N,ve){let xe=y,ke=!1;if(N)if(xe=x.get(ve),xe===void 0&&(xe=[],x.set(ve,xe)),N.isWebGLMultipleRenderTargets){const Ie=N.texture;if(xe.length!==Ie.length||xe[0]!==t.COLOR_ATTACHMENT0){for(let dt=0,st=Ie.length;dt<st;dt++)xe[dt]=t.COLOR_ATTACHMENT0+dt;xe.length=Ie.length,ke=!0}}else xe[0]!==t.COLOR_ATTACHMENT0&&(xe[0]=t.COLOR_ATTACHMENT0,ke=!0);else xe[0]!==t.BACK&&(xe[0]=t.BACK,ke=!0);ke&&(n.isWebGL2?t.drawBuffers(xe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(xe))}function Qe(N){return p!==N?(t.useProgram(N),p=N,!0):!1}const Me={[Dr]:t.FUNC_ADD,[lx]:t.FUNC_SUBTRACT,[cx]:t.FUNC_REVERSE_SUBTRACT};if(i)Me[lp]=t.MIN,Me[cp]=t.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(Me[lp]=N.MIN_EXT,Me[cp]=N.MAX_EXT)}const Le={[ux]:t.ZERO,[dx]:t.ONE,[fx]:t.SRC_COLOR,[Ld]:t.SRC_ALPHA,[_x]:t.SRC_ALPHA_SATURATE,[gx]:t.DST_COLOR,[px]:t.DST_ALPHA,[hx]:t.ONE_MINUS_SRC_COLOR,[Dd]:t.ONE_MINUS_SRC_ALPHA,[vx]:t.ONE_MINUS_DST_COLOR,[mx]:t.ONE_MINUS_DST_ALPHA,[yx]:t.CONSTANT_COLOR,[xx]:t.ONE_MINUS_CONSTANT_COLOR,[Sx]:t.CONSTANT_ALPHA,[Mx]:t.ONE_MINUS_CONSTANT_ALPHA};function Ee(N,ve,xe,ke,Ie,dt,st,Et,kt,ot){if(N===hr){u===!0&&(_e(t.BLEND),u=!1);return}if(u===!1&&(De(t.BLEND),u=!0),N!==ax){if(N!==g||ot!==O){if((v!==Dr||b!==Dr)&&(t.blendEquation(t.FUNC_ADD),v=Dr,b=Dr),ot)switch(N){case zs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Dt:t.blendFunc(t.ONE,t.ONE);break;case op:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ap:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case zs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Dt:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case op:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ap:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}S=null,P=null,w=null,G=null,E.set(0,0,0),T=0,g=N,O=ot}return}Ie=Ie||ve,dt=dt||xe,st=st||ke,(ve!==v||Ie!==b)&&(t.blendEquationSeparate(Me[ve],Me[Ie]),v=ve,b=Ie),(xe!==S||ke!==P||dt!==w||st!==G)&&(t.blendFuncSeparate(Le[xe],Le[ke],Le[dt],Le[st]),S=xe,P=ke,w=dt,G=st),(Et.equals(E)===!1||kt!==T)&&(t.blendColor(Et.r,Et.g,Et.b,kt),E.copy(Et),T=kt),g=N,O=!1}function $e(N,ve){N.side===En?_e(t.CULL_FACE):De(t.CULL_FACE);let xe=N.side===Rn;ve&&(xe=!xe),Oe(xe),N.blending===zs&&N.transparent===!1?Ee(hr):Ee(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),a.setMask(N.colorWrite);const ke=N.stencilWrite;c.setTest(ke),ke&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Y(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?De(t.SAMPLE_ALPHA_TO_COVERAGE):_e(t.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(N){$!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),$=N)}function A(N){N!==rx?(De(t.CULL_FACE),N!==oe&&(N===sp?t.cullFace(t.BACK):N===sx?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):_e(t.CULL_FACE),oe=N}function M(N){N!==U&&(L&&t.lineWidth(N),U=N)}function Y(N,ve,xe){N?(De(t.POLYGON_OFFSET_FILL),(D!==ve||X!==xe)&&(t.polygonOffset(ve,xe),D=ve,X=xe)):_e(t.POLYGON_OFFSET_FILL)}function re(N){N?De(t.SCISSOR_TEST):_e(t.SCISSOR_TEST)}function se(N){N===void 0&&(N=t.TEXTURE0+Z-1),k!==N&&(t.activeTexture(N),k=N)}function ce(N,ve,xe){xe===void 0&&(k===null?xe=t.TEXTURE0+Z-1:xe=k);let ke=q[xe];ke===void 0&&(ke={type:void 0,texture:void 0},q[xe]=ke),(ke.type!==N||ke.texture!==ve)&&(k!==xe&&(t.activeTexture(xe),k=xe),t.bindTexture(N,ve||Ce[N]),ke.type=N,ke.texture=ve)}function be(){const N=q[k];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ye(){try{t.compressedTexImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function we(){try{t.compressedTexImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Fe(){try{t.texSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Be(){try{t.texSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function le(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function it(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ze(){try{t.texStorage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ge(){try{t.texStorage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Te(){try{t.texImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Re(){try{t.texImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function je(N){ae.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),ae.copy(N))}function Ze(N){pe.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),pe.copy(N))}function ut(N,ve){let xe=h.get(ve);xe===void 0&&(xe=new WeakMap,h.set(ve,xe));let ke=xe.get(N);ke===void 0&&(ke=t.getUniformBlockIndex(ve,N.name),xe.set(N,ke))}function We(N,ve){const ke=h.get(ve).get(N);d.get(ve)!==ke&&(t.uniformBlockBinding(ve,ke,N.__bindingPointIndex),d.set(ve,ke))}function fe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},k=null,q={},_={},x=new WeakMap,y=[],p=null,u=!1,g=null,v=null,S=null,P=null,b=null,w=null,G=null,E=new He(0,0,0),T=0,O=!1,$=null,oe=null,U=null,D=null,X=null,ae.set(0,0,t.canvas.width,t.canvas.height),pe.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:De,disable:_e,bindFramebuffer:Ne,drawBuffers:j,useProgram:Qe,setBlending:Ee,setMaterial:$e,setFlipSided:Oe,setCullFace:A,setLineWidth:M,setPolygonOffset:Y,setScissorTest:re,activeTexture:se,bindTexture:ce,unbindTexture:be,compressedTexImage2D:ye,compressedTexImage3D:we,texImage2D:Te,texImage3D:Re,updateUBOMapping:ut,uniformBlockBinding:We,texStorage2D:ze,texStorage3D:Ge,texSubImage2D:Fe,texSubImage3D:Be,compressedTexSubImage2D:le,compressedTexSubImage3D:it,scissor:je,viewport:Ze,reset:fe}}function tT(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let h;const f=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(A,M){return _?new OffscreenCanvas(A,M):tc("canvas")}function y(A,M,Y,re){let se=1;if((A.width>re||A.height>re)&&(se=re/Math.max(A.width,A.height)),se<1||M===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const ce=M?Bd:Math.floor,be=ce(se*A.width),ye=ce(se*A.height);h===void 0&&(h=x(be,ye));const we=Y?x(be,ye):h;return we.width=be,we.height=ye,we.getContext("2d").drawImage(A,0,0,be,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+be+"x"+ye+")."),we}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function p(A){return kp(A.width)&&kp(A.height)}function u(A){return a?!1:A.wrapS!==li||A.wrapT!==li||A.minFilter!==gn&&A.minFilter!==Xn}function g(A,M){return A.generateMipmaps&&M&&A.minFilter!==gn&&A.minFilter!==Xn}function v(A){t.generateMipmap(A)}function S(A,M,Y,re,se=!1){if(a===!1)return M;if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ce=M;if(M===t.RED&&(Y===t.FLOAT&&(ce=t.R32F),Y===t.HALF_FLOAT&&(ce=t.R16F),Y===t.UNSIGNED_BYTE&&(ce=t.R8)),M===t.RED_INTEGER&&(Y===t.UNSIGNED_BYTE&&(ce=t.R8UI),Y===t.UNSIGNED_SHORT&&(ce=t.R16UI),Y===t.UNSIGNED_INT&&(ce=t.R32UI),Y===t.BYTE&&(ce=t.R8I),Y===t.SHORT&&(ce=t.R16I),Y===t.INT&&(ce=t.R32I)),M===t.RG&&(Y===t.FLOAT&&(ce=t.RG32F),Y===t.HALF_FLOAT&&(ce=t.RG16F),Y===t.UNSIGNED_BYTE&&(ce=t.RG8)),M===t.RGBA){const be=se?Kl:ct.getTransfer(re);Y===t.FLOAT&&(ce=t.RGBA32F),Y===t.HALF_FLOAT&&(ce=t.RGBA16F),Y===t.UNSIGNED_BYTE&&(ce=be===vt?t.SRGB8_ALPHA8:t.RGBA8),Y===t.UNSIGNED_SHORT_4_4_4_4&&(ce=t.RGBA4),Y===t.UNSIGNED_SHORT_5_5_5_1&&(ce=t.RGB5_A1)}return(ce===t.R16F||ce===t.R32F||ce===t.RG16F||ce===t.RG32F||ce===t.RGBA16F||ce===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function P(A,M,Y){return g(A,Y)===!0||A.isFramebufferTexture&&A.minFilter!==gn&&A.minFilter!==Xn?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function b(A){return A===gn||A===up||A===tu?t.NEAREST:t.LINEAR}function w(A){const M=A.target;M.removeEventListener("dispose",w),E(M),M.isVideoTexture&&d.delete(M)}function G(A){const M=A.target;M.removeEventListener("dispose",G),O(M)}function E(A){const M=i.get(A);if(M.__webglInit===void 0)return;const Y=A.source,re=f.get(Y);if(re){const se=re[M.__cacheKey];se.usedTimes--,se.usedTimes===0&&T(A),Object.keys(re).length===0&&f.delete(Y)}i.remove(A)}function T(A){const M=i.get(A);t.deleteTexture(M.__webglTexture);const Y=A.source,re=f.get(Y);delete re[M.__cacheKey],o.memory.textures--}function O(A){const M=A.texture,Y=i.get(A),re=i.get(M);if(re.__webglTexture!==void 0&&(t.deleteTexture(re.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(Y.__webglFramebuffer[se]))for(let ce=0;ce<Y.__webglFramebuffer[se].length;ce++)t.deleteFramebuffer(Y.__webglFramebuffer[se][ce]);else t.deleteFramebuffer(Y.__webglFramebuffer[se]);Y.__webglDepthbuffer&&t.deleteRenderbuffer(Y.__webglDepthbuffer[se])}else{if(Array.isArray(Y.__webglFramebuffer))for(let se=0;se<Y.__webglFramebuffer.length;se++)t.deleteFramebuffer(Y.__webglFramebuffer[se]);else t.deleteFramebuffer(Y.__webglFramebuffer);if(Y.__webglDepthbuffer&&t.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&t.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let se=0;se<Y.__webglColorRenderbuffer.length;se++)Y.__webglColorRenderbuffer[se]&&t.deleteRenderbuffer(Y.__webglColorRenderbuffer[se]);Y.__webglDepthRenderbuffer&&t.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let se=0,ce=M.length;se<ce;se++){const be=i.get(M[se]);be.__webglTexture&&(t.deleteTexture(be.__webglTexture),o.memory.textures--),i.remove(M[se])}i.remove(M),i.remove(A)}let $=0;function oe(){$=0}function U(){const A=$;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),$+=1,A}function D(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function X(A,M){const Y=i.get(A);if(A.isVideoTexture&&$e(A),A.isRenderTargetTexture===!1&&A.version>0&&Y.__version!==A.version){const re=A.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ae(Y,A,M);return}}n.bindTexture(t.TEXTURE_2D,Y.__webglTexture,t.TEXTURE0+M)}function Z(A,M){const Y=i.get(A);if(A.version>0&&Y.__version!==A.version){ae(Y,A,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,Y.__webglTexture,t.TEXTURE0+M)}function L(A,M){const Y=i.get(A);if(A.version>0&&Y.__version!==A.version){ae(Y,A,M);return}n.bindTexture(t.TEXTURE_3D,Y.__webglTexture,t.TEXTURE0+M)}function H(A,M){const Y=i.get(A);if(A.version>0&&Y.__version!==A.version){pe(Y,A,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture,t.TEXTURE0+M)}const V={[Nd]:t.REPEAT,[li]:t.CLAMP_TO_EDGE,[Fd]:t.MIRRORED_REPEAT},k={[gn]:t.NEAREST,[up]:t.NEAREST_MIPMAP_NEAREST,[tu]:t.NEAREST_MIPMAP_LINEAR,[Xn]:t.LINEAR,[Ox]:t.LINEAR_MIPMAP_NEAREST,[oa]:t.LINEAR_MIPMAP_LINEAR},q={[$x]:t.NEVER,[tS]:t.ALWAYS,[Zx]:t.LESS,[sv]:t.LEQUAL,[Kx]:t.EQUAL,[eS]:t.GEQUAL,[Jx]:t.GREATER,[Qx]:t.NOTEQUAL};function B(A,M,Y){if(Y?(t.texParameteri(A,t.TEXTURE_WRAP_S,V[M.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,V[M.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,V[M.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,k[M.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,k[M.minFilter])):(t.texParameteri(A,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(A,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(M.wrapS!==li||M.wrapT!==li)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(A,t.TEXTURE_MAG_FILTER,b(M.magFilter)),t.texParameteri(A,t.TEXTURE_MIN_FILTER,b(M.minFilter)),M.minFilter!==gn&&M.minFilter!==Xn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,q[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===gn||M.minFilter!==tu&&M.minFilter!==oa||M.type===rr&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===aa&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(t.texParameterf(A,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function J(A,M){let Y=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",w));const re=M.source;let se=f.get(re);se===void 0&&(se={},f.set(re,se));const ce=D(M);if(ce!==A.__cacheKey){se[ce]===void 0&&(se[ce]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),se[ce].usedTimes++;const be=se[A.__cacheKey];be!==void 0&&(se[A.__cacheKey].usedTimes--,be.usedTimes===0&&T(M)),A.__cacheKey=ce,A.__webglTexture=se[ce].texture}return Y}function ae(A,M,Y){let re=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(re=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(re=t.TEXTURE_3D);const se=J(A,M),ce=M.source;n.bindTexture(re,A.__webglTexture,t.TEXTURE0+Y);const be=i.get(ce);if(ce.version!==be.__version||se===!0){n.activeTexture(t.TEXTURE0+Y);const ye=ct.getPrimaries(ct.workingColorSpace),we=M.colorSpace===qn?null:ct.getPrimaries(M.colorSpace),Fe=M.colorSpace===qn||ye===we?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const Be=u(M)&&p(M.image)===!1;let le=y(M.image,Be,!1,r.maxTextureSize);le=Oe(M,le);const it=p(le)||a,ze=s.convert(M.format,M.colorSpace);let Ge=s.convert(M.type),Te=S(M.internalFormat,ze,Ge,M.colorSpace,M.isVideoTexture);B(re,M,it);let Re;const je=M.mipmaps,Ze=a&&M.isVideoTexture!==!0&&Te!==nv,ut=be.__version===void 0||se===!0,We=P(M,le,it);if(M.isDepthTexture)Te=t.DEPTH_COMPONENT,a?M.type===rr?Te=t.DEPTH_COMPONENT32F:M.type===ir?Te=t.DEPTH_COMPONENT24:M.type===zr?Te=t.DEPTH24_STENCIL8:Te=t.DEPTH_COMPONENT16:M.type===rr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Br&&Te===t.DEPTH_COMPONENT&&M.type!==Hf&&M.type!==ir&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=ir,Ge=s.convert(M.type)),M.format===Ks&&Te===t.DEPTH_COMPONENT&&(Te=t.DEPTH_STENCIL,M.type!==zr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=zr,Ge=s.convert(M.type))),ut&&(Ze?n.texStorage2D(t.TEXTURE_2D,1,Te,le.width,le.height):n.texImage2D(t.TEXTURE_2D,0,Te,le.width,le.height,0,ze,Ge,null));else if(M.isDataTexture)if(je.length>0&&it){Ze&&ut&&n.texStorage2D(t.TEXTURE_2D,We,Te,je[0].width,je[0].height);for(let fe=0,N=je.length;fe<N;fe++)Re=je[fe],Ze?n.texSubImage2D(t.TEXTURE_2D,fe,0,0,Re.width,Re.height,ze,Ge,Re.data):n.texImage2D(t.TEXTURE_2D,fe,Te,Re.width,Re.height,0,ze,Ge,Re.data);M.generateMipmaps=!1}else Ze?(ut&&n.texStorage2D(t.TEXTURE_2D,We,Te,le.width,le.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,le.width,le.height,ze,Ge,le.data)):n.texImage2D(t.TEXTURE_2D,0,Te,le.width,le.height,0,ze,Ge,le.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ze&&ut&&n.texStorage3D(t.TEXTURE_2D_ARRAY,We,Te,je[0].width,je[0].height,le.depth);for(let fe=0,N=je.length;fe<N;fe++)Re=je[fe],M.format!==ci?ze!==null?Ze?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,fe,0,0,0,Re.width,Re.height,le.depth,ze,Re.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,fe,Te,Re.width,Re.height,le.depth,0,Re.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?n.texSubImage3D(t.TEXTURE_2D_ARRAY,fe,0,0,0,Re.width,Re.height,le.depth,ze,Ge,Re.data):n.texImage3D(t.TEXTURE_2D_ARRAY,fe,Te,Re.width,Re.height,le.depth,0,ze,Ge,Re.data)}else{Ze&&ut&&n.texStorage2D(t.TEXTURE_2D,We,Te,je[0].width,je[0].height);for(let fe=0,N=je.length;fe<N;fe++)Re=je[fe],M.format!==ci?ze!==null?Ze?n.compressedTexSubImage2D(t.TEXTURE_2D,fe,0,0,Re.width,Re.height,ze,Re.data):n.compressedTexImage2D(t.TEXTURE_2D,fe,Te,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?n.texSubImage2D(t.TEXTURE_2D,fe,0,0,Re.width,Re.height,ze,Ge,Re.data):n.texImage2D(t.TEXTURE_2D,fe,Te,Re.width,Re.height,0,ze,Ge,Re.data)}else if(M.isDataArrayTexture)Ze?(ut&&n.texStorage3D(t.TEXTURE_2D_ARRAY,We,Te,le.width,le.height,le.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,ze,Ge,le.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Te,le.width,le.height,le.depth,0,ze,Ge,le.data);else if(M.isData3DTexture)Ze?(ut&&n.texStorage3D(t.TEXTURE_3D,We,Te,le.width,le.height,le.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,ze,Ge,le.data)):n.texImage3D(t.TEXTURE_3D,0,Te,le.width,le.height,le.depth,0,ze,Ge,le.data);else if(M.isFramebufferTexture){if(ut)if(Ze)n.texStorage2D(t.TEXTURE_2D,We,Te,le.width,le.height);else{let fe=le.width,N=le.height;for(let ve=0;ve<We;ve++)n.texImage2D(t.TEXTURE_2D,ve,Te,fe,N,0,ze,Ge,null),fe>>=1,N>>=1}}else if(je.length>0&&it){Ze&&ut&&n.texStorage2D(t.TEXTURE_2D,We,Te,je[0].width,je[0].height);for(let fe=0,N=je.length;fe<N;fe++)Re=je[fe],Ze?n.texSubImage2D(t.TEXTURE_2D,fe,0,0,ze,Ge,Re):n.texImage2D(t.TEXTURE_2D,fe,Te,ze,Ge,Re);M.generateMipmaps=!1}else Ze?(ut&&n.texStorage2D(t.TEXTURE_2D,We,Te,le.width,le.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ze,Ge,le)):n.texImage2D(t.TEXTURE_2D,0,Te,ze,Ge,le);g(M,it)&&v(re),be.__version=ce.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function pe(A,M,Y){if(M.image.length!==6)return;const re=J(A,M),se=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+Y);const ce=i.get(se);if(se.version!==ce.__version||re===!0){n.activeTexture(t.TEXTURE0+Y);const be=ct.getPrimaries(ct.workingColorSpace),ye=M.colorSpace===qn?null:ct.getPrimaries(M.colorSpace),we=M.colorSpace===qn||be===ye?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Fe=M.isCompressedTexture||M.image[0].isCompressedTexture,Be=M.image[0]&&M.image[0].isDataTexture,le=[];for(let fe=0;fe<6;fe++)!Fe&&!Be?le[fe]=y(M.image[fe],!1,!0,r.maxCubemapSize):le[fe]=Be?M.image[fe].image:M.image[fe],le[fe]=Oe(M,le[fe]);const it=le[0],ze=p(it)||a,Ge=s.convert(M.format,M.colorSpace),Te=s.convert(M.type),Re=S(M.internalFormat,Ge,Te,M.colorSpace),je=a&&M.isVideoTexture!==!0,Ze=ce.__version===void 0||re===!0;let ut=P(M,it,ze);B(t.TEXTURE_CUBE_MAP,M,ze);let We;if(Fe){je&&Ze&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ut,Re,it.width,it.height);for(let fe=0;fe<6;fe++){We=le[fe].mipmaps;for(let N=0;N<We.length;N++){const ve=We[N];M.format!==ci?Ge!==null?je?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,N,0,0,ve.width,ve.height,Ge,ve.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,N,Re,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):je?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,N,0,0,ve.width,ve.height,Ge,Te,ve.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,N,Re,ve.width,ve.height,0,Ge,Te,ve.data)}}}else{We=M.mipmaps,je&&Ze&&(We.length>0&&ut++,n.texStorage2D(t.TEXTURE_CUBE_MAP,ut,Re,le[0].width,le[0].height));for(let fe=0;fe<6;fe++)if(Be){je?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,le[fe].width,le[fe].height,Ge,Te,le[fe].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,Re,le[fe].width,le[fe].height,0,Ge,Te,le[fe].data);for(let N=0;N<We.length;N++){const xe=We[N].image[fe].image;je?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,N+1,0,0,xe.width,xe.height,Ge,Te,xe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,N+1,Re,xe.width,xe.height,0,Ge,Te,xe.data)}}else{je?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Ge,Te,le[fe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,Re,Ge,Te,le[fe]);for(let N=0;N<We.length;N++){const ve=We[N];je?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,N+1,0,0,Ge,Te,ve.image[fe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,N+1,Re,Ge,Te,ve.image[fe])}}}g(M,ze)&&v(t.TEXTURE_CUBE_MAP),ce.__version=se.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function Se(A,M,Y,re,se,ce){const be=s.convert(Y.format,Y.colorSpace),ye=s.convert(Y.type),we=S(Y.internalFormat,be,ye,Y.colorSpace);if(!i.get(M).__hasExternalTextures){const Be=Math.max(1,M.width>>ce),le=Math.max(1,M.height>>ce);se===t.TEXTURE_3D||se===t.TEXTURE_2D_ARRAY?n.texImage3D(se,ce,we,Be,le,M.depth,0,be,ye,null):n.texImage2D(se,ce,we,Be,le,0,be,ye,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),Ee(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,re,se,i.get(Y).__webglTexture,0,Le(M)):(se===t.TEXTURE_2D||se>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,re,se,i.get(Y).__webglTexture,ce),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ce(A,M,Y){if(t.bindRenderbuffer(t.RENDERBUFFER,A),M.depthBuffer&&!M.stencilBuffer){let re=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(Y||Ee(M)){const se=M.depthTexture;se&&se.isDepthTexture&&(se.type===rr?re=t.DEPTH_COMPONENT32F:se.type===ir&&(re=t.DEPTH_COMPONENT24));const ce=Le(M);Ee(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ce,re,M.width,M.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ce,re,M.width,M.height)}else t.renderbufferStorage(t.RENDERBUFFER,re,M.width,M.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,A)}else if(M.depthBuffer&&M.stencilBuffer){const re=Le(M);Y&&Ee(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,re,t.DEPTH24_STENCIL8,M.width,M.height):Ee(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,re,t.DEPTH24_STENCIL8,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,A)}else{const re=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let se=0;se<re.length;se++){const ce=re[se],be=s.convert(ce.format,ce.colorSpace),ye=s.convert(ce.type),we=S(ce.internalFormat,be,ye,ce.colorSpace),Fe=Le(M);Y&&Ee(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Fe,we,M.width,M.height):Ee(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Fe,we,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,we,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function De(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),X(M.depthTexture,0);const re=i.get(M.depthTexture).__webglTexture,se=Le(M);if(M.depthTexture.format===Br)Ee(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0,se):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0);else if(M.depthTexture.format===Ks)Ee(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0,se):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function _e(A){const M=i.get(A),Y=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");De(M.__webglFramebuffer,A)}else if(Y){M.__webglDepthbuffer=[];for(let re=0;re<6;re++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[re]),M.__webglDepthbuffer[re]=t.createRenderbuffer(),Ce(M.__webglDepthbuffer[re],A,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),Ce(M.__webglDepthbuffer,A,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ne(A,M,Y){const re=i.get(A);M!==void 0&&Se(re.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),Y!==void 0&&_e(A)}function j(A){const M=A.texture,Y=i.get(A),re=i.get(M);A.addEventListener("dispose",G),A.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=t.createTexture()),re.__version=M.version,o.memory.textures++);const se=A.isWebGLCubeRenderTarget===!0,ce=A.isWebGLMultipleRenderTargets===!0,be=p(A)||a;if(se){Y.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(a&&M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer[ye]=[];for(let we=0;we<M.mipmaps.length;we++)Y.__webglFramebuffer[ye][we]=t.createFramebuffer()}else Y.__webglFramebuffer[ye]=t.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer=[];for(let ye=0;ye<M.mipmaps.length;ye++)Y.__webglFramebuffer[ye]=t.createFramebuffer()}else Y.__webglFramebuffer=t.createFramebuffer();if(ce)if(r.drawBuffers){const ye=A.texture;for(let we=0,Fe=ye.length;we<Fe;we++){const Be=i.get(ye[we]);Be.__webglTexture===void 0&&(Be.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&Ee(A)===!1){const ye=ce?M:[M];Y.__webglMultisampledFramebuffer=t.createFramebuffer(),Y.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let we=0;we<ye.length;we++){const Fe=ye[we];Y.__webglColorRenderbuffer[we]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,Y.__webglColorRenderbuffer[we]);const Be=s.convert(Fe.format,Fe.colorSpace),le=s.convert(Fe.type),it=S(Fe.internalFormat,Be,le,Fe.colorSpace,A.isXRRenderTarget===!0),ze=Le(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,ze,it,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.RENDERBUFFER,Y.__webglColorRenderbuffer[we])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(Y.__webglDepthRenderbuffer=t.createRenderbuffer(),Ce(Y.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(se){n.bindTexture(t.TEXTURE_CUBE_MAP,re.__webglTexture),B(t.TEXTURE_CUBE_MAP,M,be);for(let ye=0;ye<6;ye++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let we=0;we<M.mipmaps.length;we++)Se(Y.__webglFramebuffer[ye][we],A,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,we);else Se(Y.__webglFramebuffer[ye],A,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);g(M,be)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ce){const ye=A.texture;for(let we=0,Fe=ye.length;we<Fe;we++){const Be=ye[we],le=i.get(Be);n.bindTexture(t.TEXTURE_2D,le.__webglTexture),B(t.TEXTURE_2D,Be,be),Se(Y.__webglFramebuffer,A,Be,t.COLOR_ATTACHMENT0+we,t.TEXTURE_2D,0),g(Be,be)&&v(t.TEXTURE_2D)}n.unbindTexture()}else{let ye=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?ye=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ye,re.__webglTexture),B(ye,M,be),a&&M.mipmaps&&M.mipmaps.length>0)for(let we=0;we<M.mipmaps.length;we++)Se(Y.__webglFramebuffer[we],A,M,t.COLOR_ATTACHMENT0,ye,we);else Se(Y.__webglFramebuffer,A,M,t.COLOR_ATTACHMENT0,ye,0);g(M,be)&&v(ye),n.unbindTexture()}A.depthBuffer&&_e(A)}function Qe(A){const M=p(A)||a,Y=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let re=0,se=Y.length;re<se;re++){const ce=Y[re];if(g(ce,M)){const be=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ye=i.get(ce).__webglTexture;n.bindTexture(be,ye),v(be),n.unbindTexture()}}}function Me(A){if(a&&A.samples>0&&Ee(A)===!1){const M=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],Y=A.width,re=A.height;let se=t.COLOR_BUFFER_BIT;const ce=[],be=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ye=i.get(A),we=A.isWebGLMultipleRenderTargets===!0;if(we)for(let Fe=0;Fe<M.length;Fe++)n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Fe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Fe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let Fe=0;Fe<M.length;Fe++){ce.push(t.COLOR_ATTACHMENT0+Fe),A.depthBuffer&&ce.push(be);const Be=ye.__ignoreDepthValues!==void 0?ye.__ignoreDepthValues:!1;if(Be===!1&&(A.depthBuffer&&(se|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&(se|=t.STENCIL_BUFFER_BIT)),we&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ye.__webglColorRenderbuffer[Fe]),Be===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[be]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[be])),we){const le=i.get(M[Fe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,le,0)}t.blitFramebuffer(0,0,Y,re,0,0,Y,re,se,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ce)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),we)for(let Fe=0;Fe<M.length;Fe++){n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Fe,t.RENDERBUFFER,ye.__webglColorRenderbuffer[Fe]);const Be=i.get(M[Fe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Fe,t.TEXTURE_2D,Be,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}}function Le(A){return Math.min(r.maxSamples,A.samples)}function Ee(A){const M=i.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function $e(A){const M=o.render.frame;d.get(A)!==M&&(d.set(A,M),A.update())}function Oe(A,M){const Y=A.colorSpace,re=A.format,se=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===kd||Y!==Gi&&Y!==qn&&(ct.getTransfer(Y)===vt?a===!1?e.has("EXT_sRGB")===!0&&re===ci?(A.format=kd,A.minFilter=Xn,A.generateMipmaps=!1):M=av.sRGBToLinear(M):(re!==ci||se!==mr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),M}this.allocateTextureUnit=U,this.resetTextureUnits=oe,this.setTexture2D=X,this.setTexture2DArray=Z,this.setTexture3D=L,this.setTextureCube=H,this.rebindTextures=Ne,this.setupRenderTarget=j,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Ee}function nT(t,e,n){const i=n.isWebGL2;function r(s,o=qn){let a;const l=ct.getTransfer(o);if(s===mr)return t.UNSIGNED_BYTE;if(s===K0)return t.UNSIGNED_SHORT_4_4_4_4;if(s===J0)return t.UNSIGNED_SHORT_5_5_5_1;if(s===kx)return t.BYTE;if(s===zx)return t.SHORT;if(s===Hf)return t.UNSIGNED_SHORT;if(s===Z0)return t.INT;if(s===ir)return t.UNSIGNED_INT;if(s===rr)return t.FLOAT;if(s===aa)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Bx)return t.ALPHA;if(s===ci)return t.RGBA;if(s===Gx)return t.LUMINANCE;if(s===Hx)return t.LUMINANCE_ALPHA;if(s===Br)return t.DEPTH_COMPONENT;if(s===Ks)return t.DEPTH_STENCIL;if(s===kd)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Vx)return t.RED;if(s===Q0)return t.RED_INTEGER;if(s===Wx)return t.RG;if(s===ev)return t.RG_INTEGER;if(s===tv)return t.RGBA_INTEGER;if(s===nu||s===iu||s===ru||s===su)if(l===vt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===nu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===iu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ru)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===su)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===nu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===iu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ru)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===su)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===dp||s===fp||s===hp||s===pp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===dp)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===fp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===hp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===pp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===nv)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===mp||s===gp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===mp)return l===vt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===gp)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===vp||s===_p||s===yp||s===xp||s===Sp||s===Mp||s===Ep||s===wp||s===Tp||s===Ap||s===bp||s===Rp||s===Cp||s===Pp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===vp)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===_p)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===yp)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===xp)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Sp)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Mp)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ep)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===wp)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Tp)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ap)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===bp)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Rp)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Cp)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Pp)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ou||s===Lp||s===Dp)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===ou)return l===vt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Lp)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Dp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Xx||s===Ip||s===Up||s===Np)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===ou)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Ip)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Up)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Np)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===zr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class iT extends Un{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class oi extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rT={type:"move"};class Lu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const p=n.getJointPose(y,i),u=this._getHandJoint(c,y);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=d.position.distanceTo(h.position),_=.02,x=.005;c.inputState.pinching&&f>_+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=_-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(rT)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new oi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class sT extends no{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,h=null,f=null,_=null,x=null;const y=n.getContextAttributes();let p=null,u=null;const g=[],v=[],S=new Ve;let P=null;const b=new Un;b.layers.enable(1),b.viewport=new Mt;const w=new Un;w.layers.enable(2),w.viewport=new Mt;const G=[b,w],E=new iT;E.layers.enable(1),E.layers.enable(2);let T=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let J=g[B];return J===void 0&&(J=new Lu,g[B]=J),J.getTargetRaySpace()},this.getControllerGrip=function(B){let J=g[B];return J===void 0&&(J=new Lu,g[B]=J),J.getGripSpace()},this.getHand=function(B){let J=g[B];return J===void 0&&(J=new Lu,g[B]=J),J.getHandSpace()};function $(B){const J=v.indexOf(B.inputSource);if(J===-1)return;const ae=g[J];ae!==void 0&&(ae.update(B.inputSource,B.frame,c||o),ae.dispatchEvent({type:B.type,data:B.inputSource}))}function oe(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",oe),r.removeEventListener("inputsourceschange",U);for(let B=0;B<g.length;B++){const J=v[B];J!==null&&(v[B]=null,g[B].disconnect(J))}T=null,O=null,e.setRenderTarget(p),_=null,f=null,h=null,r=null,u=null,q.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(S.width,S.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return f!==null?f:_},this.getBinding=function(){return h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(B){if(r=B,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",oe),r.addEventListener("inputsourceschange",U),y.xrCompatible!==!0&&await n.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(S),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};_=new XRWebGLLayer(r,n,J),r.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),u=new qr(_.framebufferWidth,_.framebufferHeight,{format:ci,type:mr,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let J=null,ae=null,pe=null;y.depth&&(pe=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,J=y.stencil?Ks:Br,ae=y.stencil?zr:ir);const Se={colorFormat:n.RGBA8,depthFormat:pe,scaleFactor:s};h=new XRWebGLBinding(r,n),f=h.createProjectionLayer(Se),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),u=new qr(f.textureWidth,f.textureHeight,{format:ci,type:mr,depthTexture:new _v(f.textureWidth,f.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const Ce=e.properties.get(u);Ce.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),q.setContext(r),q.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function U(B){for(let J=0;J<B.removed.length;J++){const ae=B.removed[J],pe=v.indexOf(ae);pe>=0&&(v[pe]=null,g[pe].disconnect(ae))}for(let J=0;J<B.added.length;J++){const ae=B.added[J];let pe=v.indexOf(ae);if(pe===-1){for(let Ce=0;Ce<g.length;Ce++)if(Ce>=v.length){v.push(ae),pe=Ce;break}else if(v[Ce]===null){v[Ce]=ae,pe=Ce;break}if(pe===-1)break}const Se=g[pe];Se&&Se.connect(ae)}}const D=new z,X=new z;function Z(B,J,ae){D.setFromMatrixPosition(J.matrixWorld),X.setFromMatrixPosition(ae.matrixWorld);const pe=D.distanceTo(X),Se=J.projectionMatrix.elements,Ce=ae.projectionMatrix.elements,De=Se[14]/(Se[10]-1),_e=Se[14]/(Se[10]+1),Ne=(Se[9]+1)/Se[5],j=(Se[9]-1)/Se[5],Qe=(Se[8]-1)/Se[0],Me=(Ce[8]+1)/Ce[0],Le=De*Qe,Ee=De*Me,$e=pe/(-Qe+Me),Oe=$e*-Qe;J.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Oe),B.translateZ($e),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const A=De+$e,M=_e+$e,Y=Le-Oe,re=Ee+(pe-Oe),se=Ne*_e/M*A,ce=j*_e/M*A;B.projectionMatrix.makePerspective(Y,re,se,ce,A,M),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function L(B,J){J===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(J.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(r===null)return;E.near=w.near=b.near=B.near,E.far=w.far=b.far=B.far,(T!==E.near||O!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),T=E.near,O=E.far);const J=B.parent,ae=E.cameras;L(E,J);for(let pe=0;pe<ae.length;pe++)L(ae[pe],J);ae.length===2?Z(E,b,w):E.projectionMatrix.copy(b.projectionMatrix),H(B,E,J)};function H(B,J,ae){ae===null?B.matrix.copy(J.matrixWorld):(B.matrix.copy(ae.matrixWorld),B.matrix.invert(),B.matrix.multiply(J.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(J.projectionMatrix),B.projectionMatrixInverse.copy(J.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=zd*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&_===null))return l},this.setFoveation=function(B){l=B,f!==null&&(f.fixedFoveation=B),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=B)};let V=null;function k(B,J){if(d=J.getViewerPose(c||o),x=J,d!==null){const ae=d.views;_!==null&&(e.setRenderTargetFramebuffer(u,_.framebuffer),e.setRenderTarget(u));let pe=!1;ae.length!==E.cameras.length&&(E.cameras.length=0,pe=!0);for(let Se=0;Se<ae.length;Se++){const Ce=ae[Se];let De=null;if(_!==null)De=_.getViewport(Ce);else{const Ne=h.getViewSubImage(f,Ce);De=Ne.viewport,Se===0&&(e.setRenderTargetTextures(u,Ne.colorTexture,f.ignoreDepthValues?void 0:Ne.depthStencilTexture),e.setRenderTarget(u))}let _e=G[Se];_e===void 0&&(_e=new Un,_e.layers.enable(Se),_e.viewport=new Mt,G[Se]=_e),_e.matrix.fromArray(Ce.transform.matrix),_e.matrix.decompose(_e.position,_e.quaternion,_e.scale),_e.projectionMatrix.fromArray(Ce.projectionMatrix),_e.projectionMatrixInverse.copy(_e.projectionMatrix).invert(),_e.viewport.set(De.x,De.y,De.width,De.height),Se===0&&(E.matrix.copy(_e.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),pe===!0&&E.cameras.push(_e)}}for(let ae=0;ae<g.length;ae++){const pe=v[ae],Se=g[ae];pe!==null&&Se!==void 0&&Se.update(pe,J,c||o)}V&&V(B,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),x=null}const q=new gv;q.setAnimationLoop(k),this.setAnimationLoop=function(B){V=B},this.dispose=function(){}}}function oT(t,e){function n(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,hv(t)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,g,v,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),h(p,u)):u.isMeshPhongMaterial?(s(p,u),d(p,u)):u.isMeshStandardMaterial?(s(p,u),f(p,u),u.isMeshPhysicalMaterial&&_(p,u,S)):u.isMeshMatcapMaterial?(s(p,u),x(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),y(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,g,v):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,n(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Rn&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,n(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Rn&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,n(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,n(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const g=e.get(u).envMap;if(g&&(p.envMap.value=g,p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const v=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*v,n(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,g,v){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*g,p.scale.value=v*.5,u.map&&(p.map.value=u.map,n(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function d(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function h(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function _(p,u,g){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Rn&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,u){u.matcap&&(p.matcap.value=u.matcap)}function y(p,u){const g=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(g.matrixWorld),p.nearDistance.value=g.shadow.camera.near,p.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function aT(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(g,v){const S=v.program;i.uniformBlockBinding(g,S)}function c(g,v){let S=r[g.id];S===void 0&&(x(g),S=d(g),r[g.id]=S,g.addEventListener("dispose",p));const P=v.program;i.updateUBOMapping(g,P);const b=e.render.frame;s[g.id]!==b&&(f(g),s[g.id]=b)}function d(g){const v=h();g.__bindingPointIndex=v;const S=t.createBuffer(),P=g.__size,b=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,P,b),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,S),S}function h(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(g){const v=r[g.id],S=g.uniforms,P=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let b=0,w=S.length;b<w;b++){const G=Array.isArray(S[b])?S[b]:[S[b]];for(let E=0,T=G.length;E<T;E++){const O=G[E];if(_(O,b,E,P)===!0){const $=O.__offset,oe=Array.isArray(O.value)?O.value:[O.value];let U=0;for(let D=0;D<oe.length;D++){const X=oe[D],Z=y(X);typeof X=="number"||typeof X=="boolean"?(O.__data[0]=X,t.bufferSubData(t.UNIFORM_BUFFER,$+U,O.__data)):X.isMatrix3?(O.__data[0]=X.elements[0],O.__data[1]=X.elements[1],O.__data[2]=X.elements[2],O.__data[3]=0,O.__data[4]=X.elements[3],O.__data[5]=X.elements[4],O.__data[6]=X.elements[5],O.__data[7]=0,O.__data[8]=X.elements[6],O.__data[9]=X.elements[7],O.__data[10]=X.elements[8],O.__data[11]=0):(X.toArray(O.__data,U),U+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,$,O.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function _(g,v,S,P){const b=g.value,w=v+"_"+S;if(P[w]===void 0)return typeof b=="number"||typeof b=="boolean"?P[w]=b:P[w]=b.clone(),!0;{const G=P[w];if(typeof b=="number"||typeof b=="boolean"){if(G!==b)return P[w]=b,!0}else if(G.equals(b)===!1)return G.copy(b),!0}return!1}function x(g){const v=g.uniforms;let S=0;const P=16;for(let w=0,G=v.length;w<G;w++){const E=Array.isArray(v[w])?v[w]:[v[w]];for(let T=0,O=E.length;T<O;T++){const $=E[T],oe=Array.isArray($.value)?$.value:[$.value];for(let U=0,D=oe.length;U<D;U++){const X=oe[U],Z=y(X),L=S%P;L!==0&&P-L<Z.boundary&&(S+=P-L),$.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=S,S+=Z.storage}}}const b=S%P;return b>0&&(S+=P-b),g.__size=S,g.__cache={},this}function y(g){const v={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(v.boundary=4,v.storage=4):g.isVector2?(v.boundary=8,v.storage=8):g.isVector3||g.isColor?(v.boundary=16,v.storage=12):g.isVector4?(v.boundary=16,v.storage=16):g.isMatrix3?(v.boundary=48,v.storage=48):g.isMatrix4?(v.boundary=64,v.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),v}function p(g){const v=g.target;v.removeEventListener("dispose",p);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function u(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class wv{constructor(e={}){const{canvas:n=iS(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const _=new Uint32Array(4),x=new Int32Array(4);let y=null,p=null;const u=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=tn,this._useLegacyLights=!1,this.toneMapping=pr,this.toneMappingExposure=1;const v=this;let S=!1,P=0,b=0,w=null,G=-1,E=null;const T=new Mt,O=new Mt;let $=null;const oe=new He(0);let U=0,D=n.width,X=n.height,Z=1,L=null,H=null;const V=new Mt(0,0,D,X),k=new Mt(0,0,D,X);let q=!1;const B=new jf;let J=!1,ae=!1,pe=null;const Se=new Pt,Ce=new Ve,De=new z,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ne(){return w===null?Z:1}let j=i;function Qe(m,C){for(let R=0;R<m.length;R++){const I=m[R],F=n.getContext(I,C);if(F!==null)return F}return null}try{const m={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Gf}`),n.addEventListener("webglcontextlost",fe,!1),n.addEventListener("webglcontextrestored",N,!1),n.addEventListener("webglcontextcreationerror",ve,!1),j===null){const C=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&C.shift(),j=Qe(C,m),j===null)throw Qe(C)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&j instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),j.getShaderPrecisionFormat===void 0&&(j.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(m){throw console.error("THREE.WebGLRenderer: "+m.message),m}let Me,Le,Ee,$e,Oe,A,M,Y,re,se,ce,be,ye,we,Fe,Be,le,it,ze,Ge,Te,Re,je,Ze;function ut(){Me=new v1(j),Le=new d1(j,Me,e),Me.init(Le),Re=new nT(j,Me,Le),Ee=new eT(j,Me,Le),$e=new x1(j),Oe=new Bw,A=new tT(j,Me,Ee,Oe,Le,Re,$e),M=new h1(v),Y=new g1(v),re=new RS(j,Le),je=new c1(j,Me,re,Le),se=new _1(j,re,$e,je),ce=new w1(j,se,re,$e),ze=new E1(j,Le,A),Be=new f1(Oe),be=new zw(v,M,Y,Me,Le,je,Be),ye=new oT(v,Oe),we=new Hw,Fe=new Yw(Me,Le),it=new l1(v,M,Y,Ee,ce,f,l),le=new Qw(v,ce,Le),Ze=new aT(j,$e,Le,Ee),Ge=new u1(j,Me,$e,Le),Te=new y1(j,Me,$e,Le),$e.programs=be.programs,v.capabilities=Le,v.extensions=Me,v.properties=Oe,v.renderLists=we,v.shadowMap=le,v.state=Ee,v.info=$e}ut();const We=new sT(v,j);this.xr=We,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const m=Me.get("WEBGL_lose_context");m&&m.loseContext()},this.forceContextRestore=function(){const m=Me.get("WEBGL_lose_context");m&&m.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(m){m!==void 0&&(Z=m,this.setSize(D,X,!1))},this.getSize=function(m){return m.set(D,X)},this.setSize=function(m,C,R=!0){if(We.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=m,X=C,n.width=Math.floor(m*Z),n.height=Math.floor(C*Z),R===!0&&(n.style.width=m+"px",n.style.height=C+"px"),this.setViewport(0,0,m,C)},this.getDrawingBufferSize=function(m){return m.set(D*Z,X*Z).floor()},this.setDrawingBufferSize=function(m,C,R){D=m,X=C,Z=R,n.width=Math.floor(m*R),n.height=Math.floor(C*R),this.setViewport(0,0,m,C)},this.getCurrentViewport=function(m){return m.copy(T)},this.getViewport=function(m){return m.copy(V)},this.setViewport=function(m,C,R,I){m.isVector4?V.set(m.x,m.y,m.z,m.w):V.set(m,C,R,I),Ee.viewport(T.copy(V).multiplyScalar(Z).floor())},this.getScissor=function(m){return m.copy(k)},this.setScissor=function(m,C,R,I){m.isVector4?k.set(m.x,m.y,m.z,m.w):k.set(m,C,R,I),Ee.scissor(O.copy(k).multiplyScalar(Z).floor())},this.getScissorTest=function(){return q},this.setScissorTest=function(m){Ee.setScissorTest(q=m)},this.setOpaqueSort=function(m){L=m},this.setTransparentSort=function(m){H=m},this.getClearColor=function(m){return m.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor.apply(it,arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha.apply(it,arguments)},this.clear=function(m=!0,C=!0,R=!0){let I=0;if(m){let F=!1;if(w!==null){const te=w.texture.format;F=te===tv||te===ev||te===Q0}if(F){const te=w.texture.type,de=te===mr||te===ir||te===Hf||te===zr||te===K0||te===J0,he=it.getClearColor(),W=it.getClearAlpha(),ee=he.r,ne=he.g,ie=he.b;de?(_[0]=ee,_[1]=ne,_[2]=ie,_[3]=W,j.clearBufferuiv(j.COLOR,0,_)):(x[0]=ee,x[1]=ne,x[2]=ie,x[3]=W,j.clearBufferiv(j.COLOR,0,x))}else I|=j.COLOR_BUFFER_BIT}C&&(I|=j.DEPTH_BUFFER_BIT),R&&(I|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",fe,!1),n.removeEventListener("webglcontextrestored",N,!1),n.removeEventListener("webglcontextcreationerror",ve,!1),we.dispose(),Fe.dispose(),Oe.dispose(),M.dispose(),Y.dispose(),ce.dispose(),je.dispose(),Ze.dispose(),be.dispose(),We.dispose(),We.removeEventListener("sessionstart",kt),We.removeEventListener("sessionend",ot),pe&&(pe.dispose(),pe=null),Wt.stop()};function fe(m){m.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const m=$e.autoReset,C=le.enabled,R=le.autoUpdate,I=le.needsUpdate,F=le.type;ut(),$e.autoReset=m,le.enabled=C,le.autoUpdate=R,le.needsUpdate=I,le.type=F}function ve(m){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",m.statusMessage)}function xe(m){const C=m.target;C.removeEventListener("dispose",xe),ke(C)}function ke(m){Ie(m),Oe.remove(m)}function Ie(m){const C=Oe.get(m).programs;C!==void 0&&(C.forEach(function(R){be.releaseProgram(R)}),m.isShaderMaterial&&be.releaseShaderCache(m))}this.renderBufferDirect=function(m,C,R,I,F,te){C===null&&(C=_e);const de=F.isMesh&&F.matrixWorld.determinant()<0,he=va(m,C,R,I,F);Ee.setMaterial(I,de);let W=R.index,ee=1;if(I.wireframe===!0){if(W=se.getWireframeAttribute(R),W===void 0)return;ee=2}const ne=R.drawRange,ie=R.attributes.position;let me=ne.start*ee,qe=(ne.start+ne.count)*ee;te!==null&&(me=Math.max(me,te.start*ee),qe=Math.min(qe,(te.start+te.count)*ee)),W!==null?(me=Math.max(me,0),qe=Math.min(qe,W.count)):ie!=null&&(me=Math.max(me,0),qe=Math.min(qe,ie.count));const tt=qe-me;if(tt<0||tt===1/0)return;je.setup(F,I,he,R,W);let Ut,Xe=Ge;if(W!==null&&(Ut=re.get(W),Xe=Te,Xe.setIndex(Ut)),F.isMesh)I.wireframe===!0?(Ee.setLineWidth(I.wireframeLinewidth*Ne()),Xe.setMode(j.LINES)):Xe.setMode(j.TRIANGLES);else if(F.isLine){let Ue=I.linewidth;Ue===void 0&&(Ue=1),Ee.setLineWidth(Ue*Ne()),F.isLineSegments?Xe.setMode(j.LINES):F.isLineLoop?Xe.setMode(j.LINE_LOOP):Xe.setMode(j.LINE_STRIP)}else F.isPoints?Xe.setMode(j.POINTS):F.isSprite&&Xe.setMode(j.TRIANGLES);if(F.isBatchedMesh)Xe.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)Xe.renderInstances(me,tt,F.count);else if(R.isInstancedBufferGeometry){const Ue=R._maxInstanceCount!==void 0?R._maxInstanceCount:1/0,Lt=Math.min(R.instanceCount,Ue);Xe.renderInstances(me,tt,Lt)}else Xe.render(me,tt)};function dt(m,C,R){m.transparent===!0&&m.side===En&&m.forceSinglePass===!1?(m.side=Rn,m.needsUpdate=!0,Zt(m,C,R),m.side=fi,m.needsUpdate=!0,Zt(m,C,R),m.side=En):Zt(m,C,R)}this.compile=function(m,C,R=null){R===null&&(R=m),p=Fe.get(R),p.init(),g.push(p),R.traverseVisible(function(F){F.isLight&&F.layers.test(C.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),m!==R&&m.traverseVisible(function(F){F.isLight&&F.layers.test(C.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights(v._useLegacyLights);const I=new Set;return m.traverse(function(F){const te=F.material;if(te)if(Array.isArray(te))for(let de=0;de<te.length;de++){const he=te[de];dt(he,R,F),I.add(he)}else dt(te,R,F),I.add(te)}),g.pop(),p=null,I},this.compileAsync=function(m,C,R=null){const I=this.compile(m,C,R);return new Promise(F=>{function te(){if(I.forEach(function(de){Oe.get(de).currentProgram.isReady()&&I.delete(de)}),I.size===0){F(m);return}setTimeout(te,10)}Me.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let st=null;function Et(m){st&&st(m)}function kt(){Wt.stop()}function ot(){Wt.start()}const Wt=new gv;Wt.setAnimationLoop(Et),typeof self<"u"&&Wt.setContext(self),this.setAnimationLoop=function(m){st=m,We.setAnimationLoop(m),m===null?Wt.stop():Wt.start()},We.addEventListener("sessionstart",kt),We.addEventListener("sessionend",ot),this.render=function(m,C){if(C!==void 0&&C.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),C.parent===null&&C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),We.enabled===!0&&We.isPresenting===!0&&(We.cameraAutoUpdate===!0&&We.updateCamera(C),C=We.getCamera()),m.isScene===!0&&m.onBeforeRender(v,m,C,w),p=Fe.get(m,g.length),p.init(),g.push(p),Se.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse),B.setFromProjectionMatrix(Se),ae=this.localClippingEnabled,J=Be.init(this.clippingPlanes,ae),y=we.get(m,u.length),y.init(),u.push(y),xn(m,C,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(L,H),this.info.render.frame++,J===!0&&Be.beginShadows();const R=p.state.shadowsArray;if(le.render(R,m,C),J===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),it.render(y,m),p.setupLights(v._useLegacyLights),C.isArrayCamera){const I=C.cameras;for(let F=0,te=I.length;F<te;F++){const de=I[F];ro(y,m,de,de.viewport)}}else ro(y,m,C);w!==null&&(A.updateMultisampleRenderTarget(w),A.updateRenderTargetMipmap(w)),m.isScene===!0&&m.onAfterRender(v,m,C),je.resetDefaultState(),G=-1,E=null,g.pop(),g.length>0?p=g[g.length-1]:p=null,u.pop(),u.length>0?y=u[u.length-1]:y=null};function xn(m,C,R,I){if(m.visible===!1)return;if(m.layers.test(C.layers)){if(m.isGroup)R=m.renderOrder;else if(m.isLOD)m.autoUpdate===!0&&m.update(C);else if(m.isLight)p.pushLight(m),m.castShadow&&p.pushShadow(m);else if(m.isSprite){if(!m.frustumCulled||B.intersectsSprite(m)){I&&De.setFromMatrixPosition(m.matrixWorld).applyMatrix4(Se);const de=ce.update(m),he=m.material;he.visible&&y.push(m,de,he,R,De.z,null)}}else if((m.isMesh||m.isLine||m.isPoints)&&(!m.frustumCulled||B.intersectsObject(m))){const de=ce.update(m),he=m.material;if(I&&(m.boundingSphere!==void 0?(m.boundingSphere===null&&m.computeBoundingSphere(),De.copy(m.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),De.copy(de.boundingSphere.center)),De.applyMatrix4(m.matrixWorld).applyMatrix4(Se)),Array.isArray(he)){const W=de.groups;for(let ee=0,ne=W.length;ee<ne;ee++){const ie=W[ee],me=he[ie.materialIndex];me&&me.visible&&y.push(m,de,me,R,De.z,ie)}}else he.visible&&y.push(m,de,he,R,De.z,null)}}const te=m.children;for(let de=0,he=te.length;de<he;de++)xn(te[de],C,R,I)}function ro(m,C,R,I){const F=m.opaque,te=m.transmissive,de=m.transparent;p.setupLightsView(R),J===!0&&Be.setGlobalState(v.clippingPlanes,R),te.length>0&&ga(F,te,C,R),I&&Ee.viewport(T.copy(I)),F.length>0&&Er(F,C,R),te.length>0&&Er(te,C,R),de.length>0&&Er(de,C,R),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function ga(m,C,R,I){if((R.isScene===!0?R.overrideMaterial:null)!==null)return;const te=Le.isWebGL2;pe===null&&(pe=new qr(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")?aa:mr,minFilter:oa,samples:te?4:0})),v.getDrawingBufferSize(Ce),te?pe.setSize(Ce.x,Ce.y):pe.setSize(Bd(Ce.x),Bd(Ce.y));const de=v.getRenderTarget();v.setRenderTarget(pe),v.getClearColor(oe),U=v.getClearAlpha(),U<1&&v.setClearColor(16777215,.5),v.clear();const he=v.toneMapping;v.toneMapping=pr,Er(m,R,I),A.updateMultisampleRenderTarget(pe),A.updateRenderTargetMipmap(pe);let W=!1;for(let ee=0,ne=C.length;ee<ne;ee++){const ie=C[ee],me=ie.object,qe=ie.geometry,tt=ie.material,Ut=ie.group;if(tt.side===En&&me.layers.test(I.layers)){const Xe=tt.side;tt.side=Rn,tt.needsUpdate=!0,so(me,R,I,qe,tt,Ut),tt.side=Xe,tt.needsUpdate=!0,W=!0}}W===!0&&(A.updateMultisampleRenderTarget(pe),A.updateRenderTargetMipmap(pe)),v.setRenderTarget(de),v.setClearColor(oe,U),v.toneMapping=he}function Er(m,C,R){const I=C.isScene===!0?C.overrideMaterial:null;for(let F=0,te=m.length;F<te;F++){const de=m[F],he=de.object,W=de.geometry,ee=I===null?de.material:I,ne=de.group;he.layers.test(R.layers)&&so(he,C,R,W,ee,ne)}}function so(m,C,R,I,F,te){m.onBeforeRender(v,C,R,I,F,te),m.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,m.matrixWorld),m.normalMatrix.getNormalMatrix(m.modelViewMatrix),F.onBeforeRender(v,C,R,I,m,te),F.transparent===!0&&F.side===En&&F.forceSinglePass===!1?(F.side=Rn,F.needsUpdate=!0,v.renderBufferDirect(R,C,I,F,m,te),F.side=fi,F.needsUpdate=!0,v.renderBufferDirect(R,C,I,F,m,te),F.side=En):v.renderBufferDirect(R,C,I,F,m,te),m.onAfterRender(v,C,R,I,F,te)}function Zt(m,C,R){C.isScene!==!0&&(C=_e);const I=Oe.get(m),F=p.state.lights,te=p.state.shadowsArray,de=F.state.version,he=be.getParameters(m,F.state,te,C,R),W=be.getProgramCacheKey(he);let ee=I.programs;I.environment=m.isMeshStandardMaterial?C.environment:null,I.fog=C.fog,I.envMap=(m.isMeshStandardMaterial?Y:M).get(m.envMap||I.environment),ee===void 0&&(m.addEventListener("dispose",xe),ee=new Map,I.programs=ee);let ne=ee.get(W);if(ne!==void 0){if(I.currentProgram===ne&&I.lightsStateVersion===de)return ao(m,he),ne}else he.uniforms=be.getUniforms(m),m.onBuild(R,he,v),m.onBeforeCompile(he,v),ne=be.acquireProgram(he,W),ee.set(W,ne),I.uniforms=he.uniforms;const ie=I.uniforms;return(!m.isShaderMaterial&&!m.isRawShaderMaterial||m.clipping===!0)&&(ie.clippingPlanes=Be.uniform),ao(m,he),I.needsLights=ya(m),I.lightsStateVersion=de,I.needsLights&&(ie.ambientLightColor.value=F.state.ambient,ie.lightProbe.value=F.state.probe,ie.directionalLights.value=F.state.directional,ie.directionalLightShadows.value=F.state.directionalShadow,ie.spotLights.value=F.state.spot,ie.spotLightShadows.value=F.state.spotShadow,ie.rectAreaLights.value=F.state.rectArea,ie.ltc_1.value=F.state.rectAreaLTC1,ie.ltc_2.value=F.state.rectAreaLTC2,ie.pointLights.value=F.state.point,ie.pointLightShadows.value=F.state.pointShadow,ie.hemisphereLights.value=F.state.hemi,ie.directionalShadowMap.value=F.state.directionalShadowMap,ie.directionalShadowMatrix.value=F.state.directionalShadowMatrix,ie.spotShadowMap.value=F.state.spotShadowMap,ie.spotLightMatrix.value=F.state.spotLightMatrix,ie.spotLightMap.value=F.state.spotLightMap,ie.pointShadowMap.value=F.state.pointShadowMap,ie.pointShadowMatrix.value=F.state.pointShadowMatrix),I.currentProgram=ne,I.uniformsList=null,ne}function oo(m){if(m.uniformsList===null){const C=m.currentProgram.getUniforms();m.uniformsList=Tl.seqWithValue(C.seq,m.uniforms)}return m.uniformsList}function ao(m,C){const R=Oe.get(m);R.outputColorSpace=C.outputColorSpace,R.batching=C.batching,R.instancing=C.instancing,R.instancingColor=C.instancingColor,R.skinning=C.skinning,R.morphTargets=C.morphTargets,R.morphNormals=C.morphNormals,R.morphColors=C.morphColors,R.morphTargetsCount=C.morphTargetsCount,R.numClippingPlanes=C.numClippingPlanes,R.numIntersection=C.numClipIntersection,R.vertexAlphas=C.vertexAlphas,R.vertexTangents=C.vertexTangents,R.toneMapping=C.toneMapping}function va(m,C,R,I,F){C.isScene!==!0&&(C=_e),A.resetTextureUnits();const te=C.fog,de=I.isMeshStandardMaterial?C.environment:null,he=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Gi,W=(I.isMeshStandardMaterial?Y:M).get(I.envMap||de),ee=I.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,ne=!!R.attributes.tangent&&(!!I.normalMap||I.anisotropy>0),ie=!!R.morphAttributes.position,me=!!R.morphAttributes.normal,qe=!!R.morphAttributes.color;let tt=pr;I.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(tt=v.toneMapping);const Ut=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,Xe=Ut!==void 0?Ut.length:0,Ue=Oe.get(I),Lt=p.state.lights;if(J===!0&&(ae===!0||m!==E)){const mt=m===E&&I.id===G;Be.setState(I,m,mt)}let Ke=!1;I.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==Lt.state.version||Ue.outputColorSpace!==he||F.isBatchedMesh&&Ue.batching===!1||!F.isBatchedMesh&&Ue.batching===!0||F.isInstancedMesh&&Ue.instancing===!1||!F.isInstancedMesh&&Ue.instancing===!0||F.isSkinnedMesh&&Ue.skinning===!1||!F.isSkinnedMesh&&Ue.skinning===!0||F.isInstancedMesh&&Ue.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ue.instancingColor===!1&&F.instanceColor!==null||Ue.envMap!==W||I.fog===!0&&Ue.fog!==te||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==Be.numPlanes||Ue.numIntersection!==Be.numIntersection)||Ue.vertexAlphas!==ee||Ue.vertexTangents!==ne||Ue.morphTargets!==ie||Ue.morphNormals!==me||Ue.morphColors!==qe||Ue.toneMapping!==tt||Le.isWebGL2===!0&&Ue.morphTargetsCount!==Xe)&&(Ke=!0):(Ke=!0,Ue.__version=I.version);let nt=Ue.currentProgram;Ke===!0&&(nt=Zt(I,C,F));let Kt=!1,Pn=!1,at=!1;const Rt=nt.getUniforms(),Xt=Ue.uniforms;if(Ee.useProgram(nt.program)&&(Kt=!0,Pn=!0,at=!0),I.id!==G&&(G=I.id,Pn=!0),Kt||E!==m){Rt.setValue(j,"projectionMatrix",m.projectionMatrix),Rt.setValue(j,"viewMatrix",m.matrixWorldInverse);const mt=Rt.map.cameraPosition;mt!==void 0&&mt.setValue(j,De.setFromMatrixPosition(m.matrixWorld)),Le.logarithmicDepthBuffer&&Rt.setValue(j,"logDepthBufFC",2/(Math.log(m.far+1)/Math.LN2)),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&Rt.setValue(j,"isOrthographic",m.isOrthographicCamera===!0),E!==m&&(E=m,Pn=!0,at=!0)}if(F.isSkinnedMesh){Rt.setOptional(j,F,"bindMatrix"),Rt.setOptional(j,F,"bindMatrixInverse");const mt=F.skeleton;mt&&(Le.floatVertexTextures?(mt.boneTexture===null&&mt.computeBoneTexture(),Rt.setValue(j,"boneTexture",mt.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}F.isBatchedMesh&&(Rt.setOptional(j,F,"batchingTexture"),Rt.setValue(j,"batchingTexture",F._matricesTexture,A));const pi=R.morphAttributes;if((pi.position!==void 0||pi.normal!==void 0||pi.color!==void 0&&Le.isWebGL2===!0)&&ze.update(F,R,nt),(Pn||Ue.receiveShadow!==F.receiveShadow)&&(Ue.receiveShadow=F.receiveShadow,Rt.setValue(j,"receiveShadow",F.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&(Xt.envMap.value=W,Xt.flipEnvMap.value=W.isCubeTexture&&W.isRenderTargetTexture===!1?-1:1),Pn&&(Rt.setValue(j,"toneMappingExposure",v.toneMappingExposure),Ue.needsLights&&_a(Xt,at),te&&I.fog===!0&&ye.refreshFogUniforms(Xt,te),ye.refreshMaterialUniforms(Xt,I,Z,X,pe),Tl.upload(j,oo(Ue),Xt,A)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(Tl.upload(j,oo(Ue),Xt,A),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&Rt.setValue(j,"center",F.center),Rt.setValue(j,"modelViewMatrix",F.modelViewMatrix),Rt.setValue(j,"normalMatrix",F.normalMatrix),Rt.setValue(j,"modelMatrix",F.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){const mt=I.uniformsGroups;for(let yt=0,Nt=mt.length;yt<Nt;yt++)if(Le.isWebGL2){const Jt=mt[yt];Ze.update(Jt,nt),Ze.bind(Jt,nt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return nt}function _a(m,C){m.ambientLightColor.needsUpdate=C,m.lightProbe.needsUpdate=C,m.directionalLights.needsUpdate=C,m.directionalLightShadows.needsUpdate=C,m.pointLights.needsUpdate=C,m.pointLightShadows.needsUpdate=C,m.spotLights.needsUpdate=C,m.spotLightShadows.needsUpdate=C,m.rectAreaLights.needsUpdate=C,m.hemisphereLights.needsUpdate=C}function ya(m){return m.isMeshLambertMaterial||m.isMeshToonMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isShadowMaterial||m.isShaderMaterial&&m.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(m,C,R){Oe.get(m.texture).__webglTexture=C,Oe.get(m.depthTexture).__webglTexture=R;const I=Oe.get(m);I.__hasExternalTextures=!0,I.__hasExternalTextures&&(I.__autoAllocateDepthBuffer=R===void 0,I.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),I.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(m,C){const R=Oe.get(m);R.__webglFramebuffer=C,R.__useDefaultFramebuffer=C===void 0},this.setRenderTarget=function(m,C=0,R=0){w=m,P=C,b=R;let I=!0,F=null,te=!1,de=!1;if(m){const W=Oe.get(m);W.__useDefaultFramebuffer!==void 0?(Ee.bindFramebuffer(j.FRAMEBUFFER,null),I=!1):W.__webglFramebuffer===void 0?A.setupRenderTarget(m):W.__hasExternalTextures&&A.rebindTextures(m,Oe.get(m.texture).__webglTexture,Oe.get(m.depthTexture).__webglTexture);const ee=m.texture;(ee.isData3DTexture||ee.isDataArrayTexture||ee.isCompressedArrayTexture)&&(de=!0);const ne=Oe.get(m).__webglFramebuffer;m.isWebGLCubeRenderTarget?(Array.isArray(ne[C])?F=ne[C][R]:F=ne[C],te=!0):Le.isWebGL2&&m.samples>0&&A.useMultisampledRTT(m)===!1?F=Oe.get(m).__webglMultisampledFramebuffer:Array.isArray(ne)?F=ne[R]:F=ne,T.copy(m.viewport),O.copy(m.scissor),$=m.scissorTest}else T.copy(V).multiplyScalar(Z).floor(),O.copy(k).multiplyScalar(Z).floor(),$=q;if(Ee.bindFramebuffer(j.FRAMEBUFFER,F)&&Le.drawBuffers&&I&&Ee.drawBuffers(m,F),Ee.viewport(T),Ee.scissor(O),Ee.setScissorTest($),te){const W=Oe.get(m.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+C,W.__webglTexture,R)}else if(de){const W=Oe.get(m.texture),ee=C||0;j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,W.__webglTexture,R||0,ee)}G=-1},this.readRenderTargetPixels=function(m,C,R,I,F,te,de){if(!(m&&m.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let he=Oe.get(m).__webglFramebuffer;if(m.isWebGLCubeRenderTarget&&de!==void 0&&(he=he[de]),he){Ee.bindFramebuffer(j.FRAMEBUFFER,he);try{const W=m.texture,ee=W.format,ne=W.type;if(ee!==ci&&Re.convert(ee)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ie=ne===aa&&(Me.has("EXT_color_buffer_half_float")||Le.isWebGL2&&Me.has("EXT_color_buffer_float"));if(ne!==mr&&Re.convert(ne)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ne===rr&&(Le.isWebGL2||Me.has("OES_texture_float")||Me.has("WEBGL_color_buffer_float")))&&!ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}C>=0&&C<=m.width-I&&R>=0&&R<=m.height-F&&j.readPixels(C,R,I,F,Re.convert(ee),Re.convert(ne),te)}finally{const W=w!==null?Oe.get(w).__webglFramebuffer:null;Ee.bindFramebuffer(j.FRAMEBUFFER,W)}}},this.copyFramebufferToTexture=function(m,C,R=0){const I=Math.pow(2,-R),F=Math.floor(C.image.width*I),te=Math.floor(C.image.height*I);A.setTexture2D(C,0),j.copyTexSubImage2D(j.TEXTURE_2D,R,0,0,m.x,m.y,F,te),Ee.unbindTexture()},this.copyTextureToTexture=function(m,C,R,I=0){const F=C.image.width,te=C.image.height,de=Re.convert(R.format),he=Re.convert(R.type);A.setTexture2D(R,0),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,R.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,R.unpackAlignment),C.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,I,m.x,m.y,F,te,de,he,C.image.data):C.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,I,m.x,m.y,C.mipmaps[0].width,C.mipmaps[0].height,de,C.mipmaps[0].data):j.texSubImage2D(j.TEXTURE_2D,I,m.x,m.y,de,he,C.image),I===0&&R.generateMipmaps&&j.generateMipmap(j.TEXTURE_2D),Ee.unbindTexture()},this.copyTextureToTexture3D=function(m,C,R,I,F=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const te=m.max.x-m.min.x+1,de=m.max.y-m.min.y+1,he=m.max.z-m.min.z+1,W=Re.convert(I.format),ee=Re.convert(I.type);let ne;if(I.isData3DTexture)A.setTexture3D(I,0),ne=j.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)A.setTexture2DArray(I,0),ne=j.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,I.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,I.unpackAlignment);const ie=j.getParameter(j.UNPACK_ROW_LENGTH),me=j.getParameter(j.UNPACK_IMAGE_HEIGHT),qe=j.getParameter(j.UNPACK_SKIP_PIXELS),tt=j.getParameter(j.UNPACK_SKIP_ROWS),Ut=j.getParameter(j.UNPACK_SKIP_IMAGES),Xe=R.isCompressedTexture?R.mipmaps[F]:R.image;j.pixelStorei(j.UNPACK_ROW_LENGTH,Xe.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Xe.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,m.min.x),j.pixelStorei(j.UNPACK_SKIP_ROWS,m.min.y),j.pixelStorei(j.UNPACK_SKIP_IMAGES,m.min.z),R.isDataTexture||R.isData3DTexture?j.texSubImage3D(ne,F,C.x,C.y,C.z,te,de,he,W,ee,Xe.data):R.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),j.compressedTexSubImage3D(ne,F,C.x,C.y,C.z,te,de,he,W,Xe.data)):j.texSubImage3D(ne,F,C.x,C.y,C.z,te,de,he,W,ee,Xe),j.pixelStorei(j.UNPACK_ROW_LENGTH,ie),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,me),j.pixelStorei(j.UNPACK_SKIP_PIXELS,qe),j.pixelStorei(j.UNPACK_SKIP_ROWS,tt),j.pixelStorei(j.UNPACK_SKIP_IMAGES,Ut),F===0&&I.generateMipmaps&&j.generateMipmap(ne),Ee.unbindTexture()},this.initTexture=function(m){m.isCubeTexture?A.setTextureCube(m,0):m.isData3DTexture?A.setTexture3D(m,0):m.isDataArrayTexture||m.isCompressedArrayTexture?A.setTexture2DArray(m,0):A.setTexture2D(m,0),Ee.unbindTexture()},this.resetState=function(){P=0,b=0,w=null,Ee.reset(),je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Vf?"display-p3":"srgb",n.unpackColorSpace=ct.workingColorSpace===Sc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===tn?Gr:iv}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Gr?tn:Gi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class lT extends wv{}lT.prototype.isWebGL1Renderer=!0;class cT extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class uT{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Od,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=gr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const hn=new z;class nc{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)hn.fromBufferAttribute(this,n),hn.applyMatrix4(e),this.setXYZ(n,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)hn.fromBufferAttribute(this,n),hn.applyNormalMatrix(e),this.setXYZ(n,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)hn.fromBufferAttribute(this,n),hn.transformDirection(e),this.setXYZ(n,hn.x,hn.y,hn.z);return this}setX(e,n){return this.normalized&&(n=ft(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=ft(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=ft(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=ft(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Li(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Li(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Li(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Li(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=ft(n,this.array),i=ft(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=ft(n,this.array),i=ft(i,this.array),r=ft(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=ft(n,this.array),i=ft(i,this.array),r=ft(r,this.array),s=ft(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new wt(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new nc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Lo extends Zr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ms;const Mo=new z,gs=new z,vs=new z,_s=new Ve,Eo=new Ve,Tv=new Pt,ol=new z,wo=new z,al=new z,Em=new Ve,Du=new Ve,wm=new Ve;class ll extends Gt{constructor(e=new Lo){if(super(),this.isSprite=!0,this.type="Sprite",ms===void 0){ms=new nn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new uT(n,5);ms.setIndex([0,1,2,0,2,3]),ms.setAttribute("position",new nc(i,3,0,!1)),ms.setAttribute("uv",new nc(i,2,3,!1))}this.geometry=ms,this.material=e,this.center=new Ve(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),gs.setFromMatrixScale(this.matrixWorld),Tv.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),vs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&gs.multiplyScalar(-vs.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;cl(ol.set(-.5,-.5,0),vs,o,gs,r,s),cl(wo.set(.5,-.5,0),vs,o,gs,r,s),cl(al.set(.5,.5,0),vs,o,gs,r,s),Em.set(0,0),Du.set(1,0),wm.set(1,1);let a=e.ray.intersectTriangle(ol,wo,al,!1,Mo);if(a===null&&(cl(wo.set(-.5,.5,0),vs,o,gs,r,s),Du.set(0,1),a=e.ray.intersectTriangle(ol,al,wo,!1,Mo),a===null))return;const l=e.ray.origin.distanceTo(Mo);l<e.near||l>e.far||n.push({distance:l,point:Mo.clone(),uv:jn.getInterpolation(Mo,ol,wo,al,Em,Du,wm,new Ve),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function cl(t,e,n,i,r,s){_s.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(Eo.x=s*_s.x-r*_s.y,Eo.y=r*_s.x+s*_s.y):Eo.copy(_s),t.copy(e),t.x+=Eo.x,t.y+=Eo.y,t.applyMatrix4(Tv)}class Hd extends Zr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Tm=new Pt,Vd=new Wf,ul=new Mc,dl=new z;class To extends Gt{constructor(e=new nn,n=new Hd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ul.copy(i.boundingSphere),ul.applyMatrix4(r),ul.radius+=s,e.ray.intersectsSphere(ul)===!1)return;Tm.copy(r).invert(),Vd.copy(e.ray).applyMatrix4(Tm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),_=Math.min(c.count,o.start+o.count);for(let x=f,y=_;x<y;x++){const p=c.getX(x);dl.fromBufferAttribute(h,p),Am(dl,p,l,r,e,n,this)}}else{const f=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let x=f,y=_;x<y;x++)dl.fromBufferAttribute(h,x),Am(dl,x,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Am(t,e,n,i,r,s,o){const a=Vd.distanceSqToPoint(t);if(a<n){const l=new z;Vd.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class bm extends Cn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Yf extends nn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),d(),this.setAttribute("position",new dn(s,3)),this.setAttribute("normal",new dn(s.slice(),3)),this.setAttribute("uv",new dn(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(g){const v=new z,S=new z,P=new z;for(let b=0;b<n.length;b+=3)_(n[b+0],v),_(n[b+1],S),_(n[b+2],P),l(v,S,P,g)}function l(g,v,S,P){const b=P+1,w=[];for(let G=0;G<=b;G++){w[G]=[];const E=g.clone().lerp(S,G/b),T=v.clone().lerp(S,G/b),O=b-G;for(let $=0;$<=O;$++)$===0&&G===b?w[G][$]=E:w[G][$]=E.clone().lerp(T,$/O)}for(let G=0;G<b;G++)for(let E=0;E<2*(b-G)-1;E++){const T=Math.floor(E/2);E%2===0?(f(w[G][T+1]),f(w[G+1][T]),f(w[G][T])):(f(w[G][T+1]),f(w[G+1][T+1]),f(w[G+1][T]))}}function c(g){const v=new z;for(let S=0;S<s.length;S+=3)v.x=s[S+0],v.y=s[S+1],v.z=s[S+2],v.normalize().multiplyScalar(g),s[S+0]=v.x,s[S+1]=v.y,s[S+2]=v.z}function d(){const g=new z;for(let v=0;v<s.length;v+=3){g.x=s[v+0],g.y=s[v+1],g.z=s[v+2];const S=p(g)/2/Math.PI+.5,P=u(g)/Math.PI+.5;o.push(S,1-P)}x(),h()}function h(){for(let g=0;g<o.length;g+=6){const v=o[g+0],S=o[g+2],P=o[g+4],b=Math.max(v,S,P),w=Math.min(v,S,P);b>.9&&w<.1&&(v<.2&&(o[g+0]+=1),S<.2&&(o[g+2]+=1),P<.2&&(o[g+4]+=1))}}function f(g){s.push(g.x,g.y,g.z)}function _(g,v){const S=g*3;v.x=e[S+0],v.y=e[S+1],v.z=e[S+2]}function x(){const g=new z,v=new z,S=new z,P=new z,b=new Ve,w=new Ve,G=new Ve;for(let E=0,T=0;E<s.length;E+=9,T+=6){g.set(s[E+0],s[E+1],s[E+2]),v.set(s[E+3],s[E+4],s[E+5]),S.set(s[E+6],s[E+7],s[E+8]),b.set(o[T+0],o[T+1]),w.set(o[T+2],o[T+3]),G.set(o[T+4],o[T+5]),P.copy(g).add(v).add(S).divideScalar(3);const O=p(P);y(b,T+0,g,O),y(w,T+2,v,O),y(G,T+4,S,O)}}function y(g,v,S,P){P<0&&g.x===1&&(o[v]=g.x-1),S.x===0&&S.z===0&&(o[v]=P/2/Math.PI+.5)}function p(g){return Math.atan2(g.z,-g.x)}function u(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yf(e.vertices,e.indices,e.radius,e.details)}}class $f extends Yf{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new $f(e.radius,e.detail)}}class ic extends nn{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],d=[];let h=e;const f=(n-e)/r,_=new z,x=new Ve;for(let y=0;y<=r;y++){for(let p=0;p<=i;p++){const u=s+p/i*o;_.x=h*Math.cos(u),_.y=h*Math.sin(u),l.push(_.x,_.y,_.z),c.push(0,0,1),x.x=(_.x/n+1)/2,x.y=(_.y/n+1)/2,d.push(x.x,x.y)}h+=f}for(let y=0;y<r;y++){const p=y*(i+1);for(let u=0;u<i;u++){const g=u+p,v=g,S=g+i+1,P=g+i+2,b=g+1;a.push(v,S,b),a.push(S,P,b)}}this.setIndex(a),this.setAttribute("position",new dn(l,3)),this.setAttribute("normal",new dn(c,3)),this.setAttribute("uv",new dn(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ic(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ii extends nn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const d=[],h=new z,f=new z,_=[],x=[],y=[],p=[];for(let u=0;u<=i;u++){const g=[],v=u/i;let S=0;u===0&&o===0?S=.5/n:u===i&&l===Math.PI&&(S=-.5/n);for(let P=0;P<=n;P++){const b=P/n;h.x=-e*Math.cos(r+b*s)*Math.sin(o+v*a),h.y=e*Math.cos(o+v*a),h.z=e*Math.sin(r+b*s)*Math.sin(o+v*a),x.push(h.x,h.y,h.z),f.copy(h).normalize(),y.push(f.x,f.y,f.z),p.push(b+S,1-v),g.push(c++)}d.push(g)}for(let u=0;u<i;u++)for(let g=0;g<n;g++){const v=d[u][g+1],S=d[u][g],P=d[u+1][g],b=d[u+1][g+1];(u!==0||o>0)&&_.push(v,S,b),(u!==i-1||l<Math.PI)&&_.push(S,P,b)}this.setIndex(_),this.setAttribute("position",new dn(x,3)),this.setAttribute("normal",new dn(y,3)),this.setAttribute("uv",new dn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ii(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Iu extends Zr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rv,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Tc extends Gt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class dT extends Tc{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Uu=new Pt,Rm=new z,Cm=new z;class Av{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.map=null,this.mapPass=null,this.matrix=new Pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jf,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Rm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Rm),Cm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Cm),n.updateMatrixWorld(),Uu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Uu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Pm=new Pt,Ao=new z,Nu=new z;class fT extends Av{constructor(){super(new Un(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ve(4,2),this._viewportCount=6,this._viewports=[new Mt(2,1,1,1),new Mt(0,1,1,1),new Mt(3,1,1,1),new Mt(1,1,1,1),new Mt(3,0,1,1),new Mt(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Ao.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ao),Nu.copy(i.position),Nu.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Nu),i.updateMatrixWorld(),r.makeTranslation(-Ao.x,-Ao.y,-Ao.z),Pm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pm)}}class fl extends Tc{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new fT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class hT extends Av{constructor(){super(new vv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Fu extends Tc{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new hT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class pT extends Tc{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class mT{constructor(e,n,i=0,r=1/0){this.ray=new Wf(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Xf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(e,n=!0,i=[]){return Wd(e,this,i,n),i.sort(Lm),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Wd(e[r],this,i,n);return i.sort(Lm),i}}function Lm(t,e){return t.distance-e.distance}function Wd(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let s=0,o=r.length;s<o;s++)Wd(r[s],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gf);const Q={bg:"#0f0d0b",surface:"#1e1b17",surfaceLight:"#2d2a25",surfaceMid:"#3a3530",amber:"#d4a574",amberBright:"#f0c896",amberDim:"#8b6b4a",textPrimary:"#ede5d8",textSecondary:"#8a8278",textMuted:"#4a4540",glowAmber:"rgba(212,165,116,0.25)"},Xd={anger:{hex:"#d94f4f",r:.85,g:.31,b:.31,label:"anger"},frustration:{hex:"#e06b45",r:.88,g:.42,b:.27,label:"frustration"},anxiety:{hex:"#d98a3d",r:.85,g:.54,b:.24,label:"anxiety"},fear:{hex:"#8b5fbf",r:.55,g:.37,b:.75,label:"fear"},sadness:{hex:"#5b7fbf",r:.36,g:.5,b:.75,label:"sadness"},loneliness:{hex:"#6b6b9e",r:.42,g:.42,b:.62,label:"loneliness"},exhaustion:{hex:"#7a6b5a",r:.48,g:.42,b:.35,label:"exhaustion"},overwhelm:{hex:"#c75a7a",r:.78,g:.35,b:.48,label:"overwhelm"},joy:{hex:"#d4b84f",r:.83,g:.72,b:.31,label:"joy"},peace:{hex:"#7ab89e",r:.48,g:.72,b:.62,label:"peace"},hope:{hex:"#8fc98f",r:.56,g:.79,b:.56,label:"hope"},confidence:{hex:"#c9a84f",r:.79,g:.66,b:.31,label:"confidence"},clarity:{hex:"#8ecae6",r:.56,g:.79,b:.9,label:"clarity"},gratitude:{hex:"#a3d9a5",r:.64,g:.85,b:.65,label:"gratitude"},excitement:{hex:"#e8b84f",r:.91,g:.72,b:.31,label:"excitement"},love:{hex:"#e07aa5",r:.88,g:.48,b:.65,label:"love"},neutral:{hex:"#d4a574",r:.83,g:.65,b:.46,label:"neutral"}},gT={anger:["angry","rage","furious","pissed","mad","hatred","resentment","bitter"],frustration:["frustrated","annoyed","irritated","stuck","blocked","failing","wrong"],anxiety:["anxious","worried","nervous","panic","racing","restless","uneasy","stress","stressed","overthink"],fear:["fear","scared","afraid","terrified","dread","paranoid","unsafe"],sadness:["sad","crying","depressed","grief","loss","heartbroken","empty","numb"],loneliness:["lonely","alone","isolated","disconnected","nobody","abandoned"],exhaustion:["tired","exhausted","drained","burnout","depleted","fatigued","worn"],overwhelm:["overwhelm","overwhelmed","drowning","too much","chaotic","scattered"],joy:["happy","joy","joyful","fun","laughing","wonderful","amazing","delighted"],peace:["calm","peace","peaceful","serene","still","quiet","centered","grounded","present"],hope:["hope","hopeful","optimistic","better","improving","growth","progress","forward"],confidence:["confident","strong","capable","proud","powerful","bold","certain"],clarity:["clarity","clear","insight","understand","realize","breakthrough","focus"],gratitude:["grateful","thankful","blessed","appreciate","fortunate","lucky"],excitement:["excited","thrilled","eager","alive","inspired","energized","motivated","built","building","create","creating"],love:["love","loving","connected","intimate","warm","tender","cherish","caring"]};function vT(t){const e=t.toLowerCase();let n="neutral",i=0;for(const[r,s]of Object.entries(gT)){const o=s.filter(a=>e.includes(a)).length;o>i&&(i=o,n=r)}return n}function Ac(t){const e=["anger","frustration","anxiety","fear","sadness","loneliness","exhaustion","overwhelm"],n=["joy","peace","hope","confidence","clarity","gratitude","excitement","love"];return e.includes(t)?"stress":n.includes(t)?"resolved":"neutral"}function Fi(t){return Xd[t]||Xd.neutral}class _T{constructor(){this.ctx=null,this.initialized=!1}init(){if(!this.initialized)try{this.ctx=new(window.AudioContext||window.webkitAudioContext),this.initialized=!0}catch{}}play(e){if(this.ctx||this.init(),!this.ctx)return;this.ctx.state==="suspended"&&this.ctx.resume();const n=this.ctx.currentTime;if(e==="zoom"){const i=this.ctx.createOscillator(),r=this.ctx.createGain(),s=this.ctx.createBiquadFilter();i.type="sawtooth",i.frequency.setValueAtTime(40,n),i.frequency.exponentialRampToValueAtTime(120,n+2.5),s.type="lowpass",s.frequency.setValueAtTime(200,n),s.frequency.exponentialRampToValueAtTime(2e3,n+2.5),r.gain.setValueAtTime(0,n),r.gain.linearRampToValueAtTime(.12,n+.8),r.gain.linearRampToValueAtTime(0,n+3),i.connect(s).connect(r).connect(this.ctx.destination),i.start(n),i.stop(n+3);const o=this.ctx.createOscillator(),a=this.ctx.createGain();o.type="sine",o.frequency.setValueAtTime(440,n+1),o.frequency.exponentialRampToValueAtTime(880,n+2.5),a.gain.setValueAtTime(0,n+1),a.gain.linearRampToValueAtTime(.03,n+1.8),a.gain.linearRampToValueAtTime(0,n+3),o.connect(a).connect(this.ctx.destination),o.start(n+1),o.stop(n+3)}if(e==="reveal"){const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(660,n),i.frequency.exponentialRampToValueAtTime(440,n+.6),r.gain.setValueAtTime(.06,n),r.gain.exponentialRampToValueAtTime(.001,n+.8),i.connect(r).connect(this.ctx.destination),i.start(n),i.stop(n+.8)}if(e==="submit"&&[0,.08,.16].forEach((i,r)=>{const s=this.ctx.createOscillator(),o=this.ctx.createGain();s.type="sine",s.frequency.value=[523,659,784][r],o.gain.setValueAtTime(.05,n+i),o.gain.exponentialRampToValueAtTime(.001,n+i+.4),s.connect(o).connect(this.ctx.destination),s.start(n+i),s.stop(n+i+.4)}),e==="hover"){const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sine",i.frequency.value=1200,r.gain.setValueAtTime(.015,n),r.gain.exponentialRampToValueAtTime(.001,n+.12),i.connect(r).connect(this.ctx.destination),i.start(n),i.stop(n+.12)}if(e==="drone"){const i=this.ctx.createOscillator(),r=this.ctx.createOscillator(),s=this.ctx.createGain(),o=this.ctx.createBiquadFilter();return i.type="sine",i.frequency.value=55,r.type="sine",r.frequency.value=82.5,o.type="lowpass",o.frequency.value=350,s.gain.value=.025,i.connect(o),r.connect(o),o.connect(s).connect(this.ctx.destination),i.start(n),r.start(n),{stop:()=>{s.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+2),setTimeout(()=>{i.stop(),r.stop()},2e3)}}}if(e==="impact"){const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(180,n),i.frequency.exponentialRampToValueAtTime(40,n+.5),r.gain.setValueAtTime(.08,n),r.gain.exponentialRampToValueAtTime(.001,n+.6),i.connect(r).connect(this.ctx.destination),i.start(n),i.stop(n+.6)}if(e==="coalesce"&&[440,660,880,1100].forEach((i,r)=>{const s=this.ctx.createOscillator(),o=this.ctx.createGain();s.type="sine",s.frequency.setValueAtTime(i*.5,n+r*.12),s.frequency.exponentialRampToValueAtTime(i,n+r*.12+.25),o.gain.setValueAtTime(0,n+r*.12),o.gain.linearRampToValueAtTime(.035,n+r*.12+.08),o.gain.exponentialRampToValueAtTime(.001,n+r*.12+.7),s.connect(o).connect(this.ctx.destination),s.start(n+r*.12),s.stop(n+r*.12+.7)}),e==="starClick"){const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(1400,n),i.frequency.exponentialRampToValueAtTime(2200,n+.08),r.gain.setValueAtTime(.06,n),r.gain.exponentialRampToValueAtTime(.001,n+.35),i.connect(r).connect(this.ctx.destination),i.start(n),i.stop(n+.35);const s=this.ctx.createOscillator(),o=this.ctx.createGain();s.type="sine",s.frequency.value=2800,o.gain.setValueAtTime(.02,n+.03),o.gain.exponentialRampToValueAtTime(.001,n+.25),s.connect(o).connect(this.ctx.destination),s.start(n+.03),s.stop(n+.25)}if(e==="diamondClick"){[523,659,784].forEach((s,o)=>{const a=this.ctx.createOscillator(),l=this.ctx.createGain();a.type="triangle",a.frequency.setValueAtTime(s,n+o*.05),a.frequency.exponentialRampToValueAtTime(s*.95,n+o*.05+.4),l.gain.setValueAtTime(.05,n+o*.05),l.gain.exponentialRampToValueAtTime(.001,n+o*.05+.5),a.connect(l).connect(this.ctx.destination),a.start(n+o*.05),a.stop(n+o*.05+.5)});const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sine",i.frequency.value=220,r.gain.setValueAtTime(.04,n),r.gain.exponentialRampToValueAtTime(.001,n+.6),i.connect(r).connect(this.ctx.destination),i.start(n),i.stop(n+.6)}if(e==="transform"){[330,440,550,660,880].forEach((s,o)=>{const a=this.ctx.createOscillator(),l=this.ctx.createGain();a.type="sine",a.frequency.setValueAtTime(s*.7,n+o*.08),a.frequency.exponentialRampToValueAtTime(s*1.2,n+o*.08+.2),l.gain.setValueAtTime(0,n+o*.08),l.gain.linearRampToValueAtTime(.04,n+o*.08+.05),l.gain.exponentialRampToValueAtTime(.001,n+o*.08+.5),a.connect(l).connect(this.ctx.destination),a.start(n+o*.08),a.stop(n+o*.08+.5)});const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="square",i.frequency.setValueAtTime(1200,n+.45),i.frequency.exponentialRampToValueAtTime(600,n+.55),r.gain.setValueAtTime(.03,n+.45),r.gain.exponentialRampToValueAtTime(.001,n+.7),i.connect(r).connect(this.ctx.destination),i.start(n+.45),i.stop(n+.7)}}}const ht=new _T;function Zi(t,e,n){const i=Math.sin(t*127.1+e*311.7+n*74.7)*43758.5453;return(i-Math.floor(i))*2-1}function yT(t,e,n){const i=Math.floor(t),r=Math.floor(e),s=Math.floor(n),o=t-i,a=e-r,l=n-s,c=o*o*(3-2*o),d=a*a*(3-2*a),h=l*l*(3-2*l),f=Zi(i,r,s),_=Zi(i+1,r,s),x=Zi(i,r+1,s),y=Zi(i+1,r+1,s),p=Zi(i,r,s+1),u=Zi(i+1,r,s+1),g=Zi(i,r+1,s+1),v=Zi(i+1,r+1,s+1),S=f+(_-f)*c,P=x+(y-x)*c,b=p+(u-p)*c,w=g+(v-g)*c,G=S+(P-S)*d,E=b+(w-b)*d;return G+(E-G)*h}function Ou(t,e,n,i=4){let r=0,s=.5,o=1;for(let a=0;a<i;a++)r+=s*yT(t*o,e*o,n*o),s*=.5,o*=2;return r}function Do(t){let e=2166136261,n=1818371886;for(let s=0;s<t.length;s++)e^=t.charCodeAt(s),e=Math.imul(e,16777619),n^=t.charCodeAt(s),n=Math.imul(n,1540483477);const i=.2+(e>>>0)/4294967295*(Math.PI-.4),r=(n>>>0)/4294967295*Math.PI*2;return{phi:i,theta:r}}function Dm(t,e){const{phi:n,theta:i}=Do(t);return new z(e*Math.sin(n)*Math.cos(i),e*Math.cos(n),e*Math.sin(n)*Math.sin(i))}const xT=new Set(["i","me","my","the","a","an","is","was","am","are","be","been","to","of","in","for","on","with","at","by","it","its","and","or","but","not","no","so","if","do","did","has","had","have","this","that","what","when","where","how","who","all","just","very","really","too","about","out","up","can","will","would","should","could","get","got","being","some","than","them","then","they","from","like","feel","feeling","think","thinking","know","thing","things","going","want","need","much","way","even","still","right","now","today","always","never","every","something","anything","everything","been","also","into","more","most","over","such","only","through","back","after","before","other","make","first","come","made","well","here","take","many","because","does","each","same","different","kind","between","under","while","again","off","down","keep","around","another","though","during","few","both","these","those","since"]),ST={built:"build",building:"build",builds:"build",builder:"build",creating:"create",created:"create",creates:"create",creation:"create",hopeful:"hope",hoping:"hope",hopes:"hope",hoped:"hope",sleeping:"sleep",slept:"sleep",sleeps:"sleep",sleepless:"sleep",working:"work",worked:"work",works:"work",isolated:"lonely",alone:"lonely",loneliness:"lonely",exhausted:"exhaust",exhausting:"exhaust",exhaustion:"exhaust",depleted:"exhaust",drained:"exhaust",fatigued:"exhaust",frustrated:"frustrate",frustrating:"frustrate",frustration:"frustrate",peaceful:"peace",grounded:"peace",clarity:"clear",clearer:"clear",confident:"confidence",grateful:"gratitude",excited:"excite",exciting:"excite",excitement:"excite",stressing:"stress",stressed:"stress",stressful:"stress",worried:"worry",worries:"worry",worrying:"worry",scared:"fear",afraid:"fear",fearful:"fear",terrified:"fear",angry:"anger",angrier:"anger",happier:"happy",happiness:"happy",sadder:"sad",sadness:"sad",comparing:"compare",compared:"compare",spiraling:"spiral",racing:"race",questioning:"question",improving:"improve",shifting:"shift",holding:"hold"};function vr(t){return ST[t]||t}function MT(t){const e=t.toLowerCase().replace(/[^a-z'\s]/g,"").split(/\s+/).filter(s=>s.length>0),n=e.filter(s=>s.length>2&&!xT.has(s)).map(vr),i=[...new Set(n)];if(i.length>0)return i;const r=e.filter(s=>s.length>2).map(vr);if(r.length>0)return[...new Set(r)];if(e.length>0){const s=e.reduce((o,a)=>o.length>=a.length?o:a);return[vr(s)]}return["thought"]}const Im={"work & career":["career","job","work","working","office","boss","coworker","meeting","deadline","project","promotion","fired","quit","hire","hiring","resume","interview","company","manager","team","colleague","corporate","professional","freelance","client","business","startup","hustle","grind","commute","salary","raise","performance","review","intern","remote","hybrid","workload","overtime","productivity"],finances:["money","finance","financial","debt","bills","salary","income","budget","savings","invest","investing","investment","expensive","afford","rent","mortgage","bank","credit","loan","broke","wealthy","rich","poor","pay","payment","tax","taxes","crypto","stock","stocks","spending","cost","price","save","fund","retire","retirement","economic"],"health & body":["health","sleep","sleeping","exercise","exercising","workout","gym","sick","sickness","pain","energy","tired","exhausted","body","weight","diet","eating","eat","headache","medication","doctor","hospital","therapy","therapist","medical","illness","symptom","insomnia","fatigue","migraine","chronic","vitamin","nutrition","fitness","running","yoga","meditation","breathing","rest","recovery","heal","healing"],relationships:["relationship","friend","friends","friendship","family","partner","love","loving","lonely","trust","argue","argument","breakup","dating","marriage","married","parents","parent","mom","dad","mother","father","sibling","brother","sister","child","children","kid","kids","boyfriend","girlfriend","husband","wife","spouse","couple","bond","connection","connect","companion","social","people","person","community","neighbor","roommate","ex","divorce","communicate","communication"],"growth & purpose":["growth","learn","learning","skill","skills","improve","goal","goals","progress","clarity","direction","purpose","meaning","create","creating","build","building","mentor","mentoring","education","study","studying","school","college","university","degree","course","read","reading","book","practice","master","mastery","evolve","develop","development","potential","ambition","discipline","habit","routine","vision","mission","calling","passion","talent"],creativity:["creative","creativity","art","artist","music","musical","write","writing","design","designing","paint","painting","draw","drawing","sing","singing","dance","dancing","perform","performance","compose","craft","make","making","code","coding","program","programming","produce","producing","film","photo","photography","studio","instrument","song","poetry","poem","story","novel","inspiration","imagination","expression"],emotions:["stress","stressed","anxious","anxiety","worried","worry","fear","scared","panic","overwhelm","overwhelmed","stuck","lost","angry","frustrated","frustration","sad","sadness","lonely","tired","exhausted","hate","failing","wrong","bad","worse","worst","nothing","afraid","dread","racing","restless","calm","peace","peaceful","happy","happiness","joy","grateful","gratitude","better","improve","clarity","clear","good","great","love","hope","confident","confidence","strong","free","relief","resolved","done","finished","proud","excited","alive","present","anxious","nervous","depressed","depression","mood","emotional"],identity:["identity","self","worth","value","values","believe","belief","authentic","genuine","true","real","mask","pretend","image","ego","soul","spirit","spiritual","inner","core","essence","personality","character","integrity","moral","ethics","conscience","boundaries","boundary","accept","acceptance","belong","belonging","culture","cultural","heritage","roots","tradition"],environment:["home","house","apartment","space","room","nature","outside","outdoors","city","urban","rural","move","moving","location","place","travel","traveling","trip","vacation","weather","season","environment","surroundings","neighborhood","country","state","world","global","local","scenery","landscape","ocean","mountain","forest","garden","park"],technology:["tech","technology","computer","phone","screen","internet","online","digital","social media","app","software","hardware","device","algorithm","data","ai","artificial intelligence","robot","automation","virtual","cyber","hack","hacking","security","privacy","code","coding","website","platform","server","cloud","blockchain","quantum"],"time & life":["time","future","past","present","memory","memories","remember","forget","age","aging","young","old","birthday","anniversary","year","years","month","months","week","weeks","day","days","morning","evening","night","deadline","rush","hurry","slow","fast","patience","impatient","wait","waiting","soon","later","someday","legacy","life","death","dying","mortality","birth","chapter","phase","season","transition","change","changing"]};function ET(t){const e={};return t.forEach(n=>{let i=!1;for(const[r,s]of Object.entries(Im))if(s.some(o=>n===o||n.includes(o)||o.includes(n))){e[r]||(e[r]=[]),e[r].includes(n)||e[r].push(n),i=!0;break}if(!i){for(const[r,s]of Object.entries(Im))if(s.some(o=>n.length>=4&&o.length>=4&&(o.startsWith(n.slice(0,4))||n.startsWith(o.slice(0,4))))){e[r]||(e[r]=[]),e[r].includes(n)||e[r].push(n),i=!0;break}}i||(e.other||(e.other=[]),e.other.includes(n)||e.other.push(n))}),e}function wT({onEnter:t}){const[e,n]=Pe.useState(0),i=Pe.useRef(null),r=Pe.useRef(null),[s,o]=Pe.useState(null);Pe.useEffect(()=>{const l=[setTimeout(()=>n(1),400),setTimeout(()=>n(2),1400),setTimeout(()=>n(3),2800),setTimeout(()=>n(4),4200)];return()=>l.forEach(clearTimeout)},[]),Pe.useEffect(()=>{const l=i.current;if(!l)return;const c=l.getContext("2d"),d=l.width=window.innerWidth,h=l.height=window.innerHeight,f=Array.from({length:150},()=>({x:Math.random()*d,y:Math.random()*h,vx:(Math.random()-.5)*.4,vy:-Math.random()*.4-.1,sz:Math.random()*2.5+.3,op:Math.random()*.4,life:Math.random()*100}));let _=0;const x=()=>{_++,c.clearRect(0,0,d,h),f.forEach(y=>{y.x+=y.vx+Math.sin(_*.008+y.life)*.3,y.y+=y.vy,y.op=.08+Math.sin(_*.015+y.life)*.12,y.y<-10&&(y.y=h+10,y.x=Math.random()*d),c.beginPath(),c.arc(y.x,y.y,y.sz,0,Math.PI*2),c.fillStyle=`rgba(212,165,116,${Math.max(0,y.op)})`,c.fill()});for(let y=0;y<f.length;y++)for(let p=y+1;p<f.length;p++){const u=Math.hypot(f[y].x-f[p].x,f[y].y-f[p].y);u<90&&(c.beginPath(),c.moveTo(f[y].x,f[y].y),c.lineTo(f[p].x,f[p].y),c.strokeStyle=`rgba(212,165,116,${.03*(1-u/90)})`,c.lineWidth=.5,c.stroke())}r.current=requestAnimationFrame(x)};return e>=1&&x(),()=>cancelAnimationFrame(r.current)},[e]);const a=l=>{ht.init(),ht.play("zoom"),n(5),setTimeout(()=>t(l),2600)};return K.jsxs("div",{style:{position:"fixed",inset:0,background:Q.bg,zIndex:100,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",overflow:"hidden",opacity:e===5?0:1,transform:e===5?"scale(4)":"scale(1)",transition:e===5?"all 2.5s cubic-bezier(0.4, 0, 0, 1)":"none",filter:e===5?"blur(8px)":"none"},children:[K.jsx("canvas",{ref:i,style:{position:"absolute",inset:0,opacity:e>=1?1:0,transition:"opacity 2s ease"}}),K.jsx("div",{style:{position:"absolute",width:500,height:500,borderRadius:"50%",background:"radial-gradient(circle, rgba(212,165,116,0.12) 0%, transparent 65%)",opacity:e>=2?1:0,transition:"opacity 2s ease",filter:"blur(50px)",animation:e>=2?"orbPulse 6s ease-in-out infinite":"none"}}),K.jsx("div",{style:{position:"absolute",top:44,fontFamily:"'JetBrains Mono', monospace",fontSize:9,letterSpacing:"0.35em",color:Q.textMuted,opacity:e>=1?1:0,transform:e>=1?"translateY(0)":"translateY(-10px)",transition:"all 1.2s ease"},children:"LIRIO LABS PRESENTS"}),K.jsxs("div",{style:{position:"relative",zIndex:2,textAlign:"center",transform:e>=2?"translateY(0) scale(1)":"translateY(40px) scale(0.85)",opacity:e>=2?1:0,transition:"all 1.4s cubic-bezier(0.22, 1, 0.36, 1)"},children:[K.jsx("div",{style:{fontFamily:"'Fraunces', Georgia, serif",fontSize:"clamp(80px, 18vw, 160px)",fontWeight:300,color:Q.textPrimary,letterSpacing:"-0.04em",lineHeight:.85,textShadow:`0 0 100px ${Q.glowAmber}, 0 0 200px rgba(212,165,116,0.08)`},children:"COIL"}),K.jsx("div",{style:{margin:"12px auto 0",height:1,width:e>=3?120:0,background:`linear-gradient(90deg, transparent, ${Q.amber}, transparent)`,transition:"width 1.5s cubic-bezier(0.22, 1, 0.36, 1)",transitionDelay:"0.3s"}})]}),K.jsxs("div",{style:{position:"relative",zIndex:2,marginTop:28,textAlign:"center",opacity:e>=3?1:0,transform:e>=3?"translateY(0)":"translateY(25px)",transition:"all 1.2s cubic-bezier(0.22, 1, 0.36, 1)"},children:[K.jsx("div",{style:{fontFamily:"'Fraunces', Georgia, serif",fontSize:"clamp(16px, 3vw, 22px)",color:Q.textSecondary,fontStyle:"italic",fontWeight:300},children:"your thoughts have terrain"}),K.jsx("div",{style:{fontFamily:"'DM Sans', system-ui, sans-serif",fontSize:"clamp(11px, 1.8vw, 13px)",color:Q.textMuted,marginTop:8,letterSpacing:"0.08em"},children:"see the patterns you can't feel"})]}),K.jsx("div",{style:{position:"relative",zIndex:2,marginTop:56,display:"flex",gap:16,flexWrap:"wrap",justifyContent:"center",padding:"0 24px",opacity:e>=4?1:0,transform:e>=4?"translateY(0)":"translateY(35px)",transition:"all 1s cubic-bezier(0.22, 1, 0.36, 1)"},children:[{id:"explore",label:"EXPLORE TERRAIN",sub:"see demo thought patterns",icon:"◈"},{id:"begin",label:"BEGIN FRESH",sub:"start mapping your mind",icon:"◇"}].map(l=>K.jsxs("button",{onClick:()=>a(l.id),onMouseEnter:()=>{o(l.id),ht.init(),ht.play("hover")},onMouseLeave:()=>o(null),style:{background:s===l.id?`${Q.amber}12`:`${Q.surface}aa`,border:`1px solid ${s===l.id?Q.amber+"55":Q.surfaceLight}`,borderRadius:14,padding:"22px 36px",cursor:"pointer",minWidth:210,textAlign:"center",transition:"all 0.5s cubic-bezier(0.22, 1, 0.36, 1)",transform:s===l.id?"scale(1.05) translateY(-4px)":"scale(1)",boxShadow:s===l.id?"0 12px 48px rgba(212,165,116,0.15), 0 0 80px rgba(212,165,116,0.06)":"0 4px 20px rgba(0,0,0,0.4)",backdropFilter:"blur(16px)"},children:[K.jsx("div",{style:{fontSize:20,marginBottom:8,color:s===l.id?Q.amberBright:Q.amber,transition:"all 0.4s ease",transform:s===l.id?"scale(1.2)":"scale(1)"},children:l.icon}),K.jsx("div",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:10,letterSpacing:"0.18em",color:s===l.id?Q.amberBright:Q.amber,marginBottom:6,transition:"color 0.3s ease"},children:l.label}),K.jsx("div",{style:{fontFamily:"'DM Sans', system-ui, sans-serif",fontSize:11,color:Q.textMuted,lineHeight:1.4},children:l.sub})]},l.id))}),K.jsx("div",{style:{position:"absolute",bottom:28,fontFamily:"'JetBrains Mono', monospace",fontSize:8,letterSpacing:"0.3em",color:Q.textMuted,opacity:e>=3?.35:0,transition:"opacity 1.5s ease"},children:"A LIRIO LABS INSTRUMENT · v0.3"}),K.jsx("style",{children:"@keyframes orbPulse { 0%, 100% { transform: scale(1); opacity: 0.6; } 50% { transform: scale(1.15); opacity: 0.9; } }"})]})}function TT({clusters:t,entries:e,onMarkerClick:n,zoomTarget:i,viewMode:r,sceneSettings:s,coalescingLabels:o}){const a=Pe.useRef(null),l=Pe.useRef({}),c=Pe.useRef({}),d=Pe.useRef({x:0,z:4,targetX:0,targetZ:4,yaw:Math.PI,targetYaw:Math.PI,pitch:-.12,targetPitch:-.12}),h=Pe.useRef({phi:Math.PI/3,theta:0,radius:7,targetPhi:Math.PI/3,targetTheta:0,targetRadius:7}),f=Pe.useRef({active:!1,lastX:0,lastY:0}),_=Pe.useRef(0),x=Pe.useRef(null),y=Pe.useRef([]),p=Pe.useRef(new mT),u=Pe.useRef(new Ve),g=Pe.useRef(r||"surface");Pe.useRef({x:0,y:0});const v=Pe.useRef(new Map),S=Pe.useRef([]),P=Pe.useRef(s||{}),b=Pe.useRef([]);Pe.useEffect(()=>{g.current=r},[r]),Pe.useEffect(()=>{P.current=s||{}},[s]),Pe.useEffect(()=>{b.current=o||[]},[o]);const w=200,G=160,E=Pe.useMemo(()=>!t||t.length===0?[]:t.map(O=>{const $=Dm(O.label,2.8),{phi:oe,theta:U}=Do(O.label),D=(U/(Math.PI*2)-.5)*w,X=(oe/Math.PI-.5)*w,Z=Ac(O.emotion),L=Fi(O.emotion),H=O.frequency,V=Z==="stress"?H<3?0:H<5?.005:H<8?.01:.018:0,k=Z==="resolved"?H<3?0:H<5?.004:H<8?.008:.014:0,q=Z==="neutral"?H<3?0:Math.min(H*.003,.012):0;return{...O,spherePos:$,direction:$.clone().normalize(),planeX:D,planeZ:X,craterScale:V,flareScale:k,neutralScale:q,trend:Z,color:new He(L.r,L.g,L.b),colorData:L}}),[t]);Pe.useEffect(()=>{if(!i)return;const{phi:O,theta:$}=Do(i),oe=($/(Math.PI*2)-.5)*w,U=(O/Math.PI-.5)*w;d.current.x=oe,d.current.z=U+5,d.current.targetX=oe,d.current.targetZ=U+5,d.current.targetYaw=Math.atan2(0,-1),d.current.yaw=d.current.targetYaw,h.current.targetPhi=O,h.current.targetTheta=$+Math.PI,h.current.targetRadius=5.5},[i]);const T=Pe.useRef(!1);return Pe.useEffect(()=>{if(T.current||!e||e.length===0)return;T.current=!0;const O=e[e.length-1];if(O&&O.keywords&&O.keywords.length>0){const $=O.keywords[0],{phi:oe,theta:U}=Do($),D=(U/(Math.PI*2)-.5)*w,X=(oe/Math.PI-.5)*w;d.current.x=D,d.current.z=X+4,d.current.targetX=D,d.current.targetZ=X+4,d.current.yaw=Math.atan2(D-d.current.x,X-d.current.z)||0,d.current.targetYaw=d.current.yaw,h.current.targetPhi=oe,h.current.targetTheta=U+Math.PI,h.current.phi=oe,h.current.theta=U+Math.PI}},[e]),Pe.useEffect(()=>{if(!a.current)return;const O=a.current,$=O.clientWidth,oe=O.clientHeight,U=new cT,D=new Un(60,$/oe,.1,800),X=new wv({antialias:!0,alpha:!1});X.setSize($,oe),X.setPixelRatio(Math.min(window.devicePixelRatio,2)),X.setClearColor(394500,1),X.toneMapping=Y0,X.toneMappingExposure=1.2,O.appendChild(X.domElement);const Z=new pT(14208192,.35);U.add(Z);const L=new dT(13156016,3811866,.25);U.add(L);const H=new Fu(15786184,.2);H.position.set(4,10,3),U.add(H);const V=new Fu(13160672,.12);V.position.set(-5,6,-4),U.add(V);const k=new Fu(13682872,.1);k.position.set(0,-3,-5),U.add(k);const q=new fl(13935988,.3,30);q.position.set(0,6,0),U.add(q);const B=new Gs(w,w,G,G);B.rotateX(-Math.PI/2);const J=new Iu({vertexColors:!0,roughness:.7,metalness:.05,flatShading:!0,transparent:!1,side:En,emissive:2760728,emissiveIntensity:.6}),ae=new xt(B,J);U.add(ae);const pe=new Gs(w,w,80,80);pe.rotateX(-Math.PI/2);const Se=new Hn({color:13935988,wireframe:!0,transparent:!0,opacity:.025}),Ce=new xt(pe,Se);Ce.position.y=.02,U.add(Ce);const De=800,_e=new nn,Ne=new Float32Array(De*3);for(let m=0;m<De;m++)Ne[m*3]=(Math.random()-.5)*w,Ne[m*3+1]=Math.random()*5+.3,Ne[m*3+2]=(Math.random()-.5)*w;_e.setAttribute("position",new wt(Ne,3));const j=new Hd({color:13935988,size:.025,transparent:!0,opacity:.5,blending:Dt,sizeAttenuation:!0}),Qe=new To(_e,j);U.add(Qe);const Me=128,Le=new ii(2.8,Me,Me),Ee=new Iu({vertexColors:!0,roughness:.7,metalness:.05,flatShading:!0,transparent:!1,side:fi,emissive:2103312,emissiveIntensity:.5}),$e=new xt(Le,Ee);U.add($e);const Oe=new ii(2.805,48,48),A=new Hn({color:13935988,wireframe:!0,transparent:!0,opacity:.012}),M=new xt(Oe,A);U.add(M);const Y=new ii(2.95,48,48),re=new Yn({vertexShader:`varying vec3 vNormal; varying vec3 vWorldPos;
        void main() { vNormal = normalize(normalMatrix * normal); vWorldPos = (modelMatrix * vec4(position,1.0)).xyz; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`varying vec3 vNormal; varying vec3 vWorldPos; uniform vec3 uCamPos;
        void main() { vec3 viewDir = normalize(uCamPos - vWorldPos); float rim = 1.0 - max(0.0, dot(vNormal, viewDir)); float i = pow(rim, 4.0); gl_FragColor = vec4(0.83, 0.65, 0.46, i * 0.18); }`,uniforms:{uCamPos:{value:new z}},side:fi,blending:Dt,transparent:!0,depthWrite:!1}),se=new xt(Y,re);U.add(se);const ce=Object.values(Xd),be=8e3,ye=new nn,we=new Float32Array(be*3),Fe=new Float32Array(be*3),Be=new Float32Array(be);for(let m=0;m<be;m++){let C,R,I;if(m<be*.4){const ee=60+Math.random()*140,ne=Math.random()*Math.PI*2,ie=(Math.random()-.5)*.15,me=.4;C=ee*Math.cos(ne),R=ee*(ie+Math.sin(ne)*Math.sin(me)*.3),I=ee*Math.sin(ne)}else if(m<be*.7){const ee=50+Math.random()*150,ne=Math.random()*Math.PI*2,ie=Math.acos(2*Math.random()-1);C=ee*Math.sin(ie)*Math.cos(ne),R=ee*Math.cos(ie),I=ee*Math.sin(ie)*Math.sin(ne)}else if(m<be*.88){const ee=20+Math.random()*40,ne=Math.random()*Math.PI*2,ie=Math.acos(2*Math.random()-1);C=ee*Math.sin(ie)*Math.cos(ne),R=ee*Math.cos(ie),I=ee*Math.sin(ie)*Math.sin(ne)}else{const ee=150+Math.random()*200,ne=Math.random()*Math.PI*2,ie=Math.acos(2*Math.random()-1);C=ee*Math.sin(ie)*Math.cos(ne),R=ee*Math.cos(ie),I=ee*Math.sin(ie)*Math.sin(ne)}we[m*3]=C,we[m*3+1]=R,we[m*3+2]=I;const F=Math.random();let te,de,he;if(F<.4)te=.95+Math.random()*.05,de=.93+Math.random()*.07,he=.98;else if(F<.6)te=.8+Math.random()*.1,de=.85+Math.random()*.1,he=1;else if(F<.8)te=1,de=.92+Math.random()*.08,he=.75+Math.random()*.15;else if(F<.9)te=1,de=.7+Math.random()*.15,he=.4+Math.random()*.2;else{const ee=ce[m%ce.length];te=.7+ee.r*.3,de=.7+ee.g*.3,he=.7+ee.b*.3}Fe[m*3]=te,Fe[m*3+1]=de,Fe[m*3+2]=he;const W=Math.sqrt(C*C+R*R+I*I);W<30?Be[m]=.15+Math.random()*.3:W<80?Be[m]=.08+Math.random()*.18:Be[m]=.04+Math.random()*.1,Math.random()<.02&&(Be[m]=.3+Math.random()*.25)}ye.setAttribute("position",new wt(we,3)),ye.setAttribute("color",new wt(Fe,3)),ye.setAttribute("size",new wt(Be,1));const le=new Yn({vertexShader:`
        attribute float size; attribute vec3 color; varying vec3 vColor;
        void main() { vColor = color; vec4 mvp = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * (250.0 / -mvp.z); gl_Position = projectionMatrix * mvp; }`,fragmentShader:`
        varying vec3 vColor;
        void main() { float d = length(gl_PointCoord - vec2(0.5)); if (d > 0.5) discard;
          float core = 1.0 - smoothstep(0.0, 0.15, d);
          float glow = 1.0 - smoothstep(0.0, 0.4, d);
          vec3 col = vColor * glow * 0.6 + vec3(1.0) * core * 0.8;
          gl_FragColor = vec4(col, glow * 0.85); }`,transparent:!0,blending:Dt,depthWrite:!1}),it=new To(ye,le);U.add(it);const ze=new oi;[{color:[.35,.15,.55],angle:.3,dist:110,scale:28,tilt:.2},{color:[.18,.35,.6],angle:1.1,dist:140,scale:35,tilt:-.3},{color:[.55,.2,.25],angle:2,dist:95,scale:22,tilt:.4},{color:[.2,.45,.35],angle:2.9,dist:130,scale:30,tilt:-.15},{color:[.5,.35,.15],angle:3.8,dist:105,scale:25,tilt:.35},{color:[.3,.2,.5],angle:4.7,dist:150,scale:40,tilt:-.25},{color:[.45,.15,.4],angle:5.5,dist:120,scale:32,tilt:.1}].forEach(m=>{const C=Math.cos(m.angle)*m.dist,R=50+Math.sin(m.tilt)*m.dist*.3,I=Math.sin(m.angle)*m.dist,F=5;for(let W=0;W<F;W++){const ee=m.scale*(.4+W*.2),ne=(.012-W*.0015)*(1+Math.random()*.3),ie=new ii(ee,12,12),me=ie.attributes.position;for(let Lt=0;Lt<me.count;Lt++){const Ke=me.getX(Lt),nt=me.getY(Lt),Kt=me.getZ(Lt),at=1+Ou(Ke*.08+W*3,nt*.08,Kt*.08,3)*.35;me.setXYZ(Lt,Ke*at,nt*at*(.5+Math.random()*.3),Kt*at)}me.needsUpdate=!0;const qe=m.color[0]+W*.03,tt=m.color[1]+W*.02,Ut=m.color[2]+W*.03,Xe=new Hn({color:new He(qe,tt,Ut),transparent:!0,opacity:Math.max(.003,ne),blending:Dt,depthWrite:!1,side:En}),Ue=new xt(ie,Xe);Ue.position.set(C+(Math.random()-.5)*ee*.3,R+(Math.random()-.5)*ee*.2,I+(Math.random()-.5)*ee*.3),Ue.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),ze.add(Ue)}const te=new ii(m.scale*.15,8,8),de=new Hn({color:new He(m.color[0]*1.5,m.color[1]*1.5,m.color[2]*1.5),transparent:!0,opacity:.02,blending:Dt,depthWrite:!1}),he=new xt(te,de);he.position.set(C,R,I),ze.add(he)}),U.add(ze),ze.children.forEach(m=>{m.material&&(m.material._baseOp=m.material.opacity)});const Te=new oi;[{dist:280,angle:.8,elev:120,radius:14,color:9136970,ring:!0,ringColor:10518624,tilt:.4},{dist:320,angle:3.2,elev:85,radius:9,color:4876939,ring:!1,tilt:.15},{dist:200,angle:5,elev:140,radius:4,color:9132618,ring:!1,tilt:.3},{dist:350,angle:1.9,elev:65,radius:4.5,color:8026746,ring:!1,tilt:.05}].forEach(m=>{const C=Math.cos(m.angle)*m.dist,R=m.elev,I=Math.sin(m.angle)*m.dist,F=new ii(m.radius,32,32),te=new Iu({color:m.color,roughness:.85,metalness:.02,emissive:m.color,emissiveIntensity:.08}),de=new xt(F,te);de.position.set(C,R,I),de.rotation.z=m.tilt,Te.add(de);const he=new ii(m.radius*1.08,24,24),W=new He(m.color),ee=new Yn({vertexShader:`varying vec3 vNormal; varying vec3 vWorldPos;
          void main() { vNormal = normalize(normalMatrix * normal); vWorldPos = (modelMatrix * vec4(position,1.0)).xyz; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`varying vec3 vNormal; varying vec3 vWorldPos; uniform vec3 uCamPos; uniform vec3 uColor;
          void main() { vec3 viewDir = normalize(uCamPos - vWorldPos); float rim = 1.0 - max(0.0, dot(vNormal, viewDir)); float i = pow(rim, 3.0); gl_FragColor = vec4(uColor, i * 0.12); }`,uniforms:{uCamPos:{value:new z},uColor:{value:new z(W.r,W.g,W.b)}},side:fi,blending:Dt,transparent:!0,depthWrite:!1}),ne=new xt(he,ee);if(ne.position.set(C,R,I),Te.add(ne),m.ring){const ie=new ic(m.radius*1.4,m.radius*2.2,64),me=new Hn({color:m.ringColor,transparent:!0,opacity:.06,side:En,blending:Dt,depthWrite:!1}),qe=new xt(ie,me);qe.position.set(C,R,I),qe.rotation.x=Math.PI/2+m.tilt,qe.rotation.y=.3,Te.add(qe);const tt=new ic(m.radius*1.6,m.radius*1.85,64),Ut=new Hn({color:13150328,transparent:!0,opacity:.035,side:En,blending:Dt,depthWrite:!1}),Xe=new xt(tt,Ut);Xe.position.set(C,R,I),Xe.rotation.x=Math.PI/2+m.tilt,Xe.rotation.y=.3,Te.add(Xe)}}),[{dist:380,angle:.5,elev:160,radius:5,color:[1,.9,.7],intensity:.04},{dist:400,angle:2.8,elev:100,radius:3.5,color:[.7,.8,1],intensity:.03},{dist:340,angle:4.2,elev:130,radius:2,color:[1,.6,.4],intensity:.025}].forEach(m=>{const C=Math.cos(m.angle)*m.dist,R=m.elev,I=Math.sin(m.angle)*m.dist,F=new ii(m.radius,16,16),te=new Hn({color:new He(m.color[0],m.color[1],m.color[2]),transparent:!0,opacity:.3,blending:Dt,depthWrite:!1}),de=new xt(F,te);de.position.set(C,R,I),Te.add(de);const he=new ii(m.radius*4,16,16),W=new Hn({color:new He(m.color[0]*.6,m.color[1]*.6,m.color[2]*.6),transparent:!0,opacity:m.intensity,blending:Dt,depthWrite:!1}),ee=new xt(he,W);ee.position.set(C,R,I),Te.add(ee);const ne=new Gs(m.radius*12,m.radius*.3),ie=new Hn({color:new He(m.color[0],m.color[1],m.color[2]),transparent:!0,opacity:.015,blending:Dt,depthWrite:!1,side:En}),me=new xt(ne,ie);me.position.set(C,R,I),me.userData.isFlare=!0,me.userData.baseRotZ=0,Te.add(me);const qe=new xt(ne.clone(),ie.clone());qe.position.set(C,R,I),qe.userData.isFlare=!0,qe.userData.baseRotZ=Math.PI/2,Te.add(qe)}),U.add(Te);const Ze=new oi,ut=600,We=new nn,fe=new Float32Array(ut*3),N=new Float32Array(ut),ve=new Float32Array(ut*3);for(let m=0;m<ut;m++){const C=Math.random()*Math.PI*2,R=80+Math.random()*40,I=(Math.random()-.5)*4,F=(Math.random()-.5)*6;fe[m*3]=Math.cos(C)*(R+F),fe[m*3+1]=40+I+Math.sin(C*3+m)*.8,fe[m*3+2]=Math.sin(C)*(R+F),N[m]=.06+Math.random()*.18;const te=.3+Math.random()*.25,de=Math.random()*.08;ve[m*3]=te+de,ve[m*3+1]=te,ve[m*3+2]=te-de*.5}We.setAttribute("position",new wt(fe,3)),We.setAttribute("size",new wt(N,1)),We.setAttribute("color",new wt(ve,3));const xe=new Yn({vertexShader:`
        attribute float size; attribute vec3 color; varying vec3 vColor; varying float vDist;
        void main() { vColor = color; vec4 mvp = modelViewMatrix * vec4(position, 1.0);
          vDist = -mvp.z; gl_PointSize = size * (120.0 / -mvp.z); gl_Position = projectionMatrix * mvp; }`,fragmentShader:`
        varying vec3 vColor; varying float vDist;
        void main() { float d = length(gl_PointCoord - vec2(0.5)); if (d > 0.45) discard;
          float shape = 1.0 - smoothstep(0.0, 0.45, d);
          float fade = clamp(1.0 - vDist / 300.0, 0.1, 1.0);
          gl_FragColor = vec4(vColor * shape, shape * 0.7 * fade); }`,transparent:!0,blending:Dt,depthWrite:!1}),ke=new To(We,xe);ke.rotation.x=.26,ke.rotation.z=.1,Ze.add(ke);for(let m=0;m<6;m++){const C=.5+Math.random()*.8,R=new $f(C,0),I=R.attributes.position;for(let W=0;W<I.count;W++){const ee=.7+Math.random()*.6;I.setXYZ(W,I.getX(W)*ee,I.getY(W)*ee,I.getZ(W)*ee)}I.needsUpdate=!0,R.computeVertexNormals();const F=new Hn({color:new He(.35+Math.random()*.15,.3+Math.random()*.1,.25+Math.random()*.1),transparent:!0,opacity:.4,blending:Dt,depthWrite:!1}),te=new xt(R,F),de=Math.random()*Math.PI*2,he=120+Math.random()*60;te.position.set(Math.cos(de)*he,40+Math.random()*30,Math.sin(de)*he),te.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),te.userData={orbitAngle:de,orbitRadius:he,spinSpeed:.001+Math.random()*.003},Ze.add(te)}U.add(Ze),Ze.children.forEach(m=>{m.material&&!m.material.isShaderMaterial&&(m.material._baseOp=m.material.opacity)});const Ie=new oi;[{count:3e3,minR:15,maxR:60,size:.015,opacity:.2,color:13156016},{count:2e3,minR:60,maxR:150,size:.025,opacity:.12,color:10524808},{count:1500,minR:150,maxR:350,size:.04,opacity:.06,color:8417376}].forEach(m=>{const C=new nn,R=new Float32Array(m.count*3);for(let te=0;te<m.count;te++){const de=m.minR+Math.random()*(m.maxR-m.minR),he=Math.random()*Math.PI*2,W=Math.acos(2*Math.random()-1);R[te*3]=de*Math.sin(W)*Math.cos(he),R[te*3+1]=de*Math.cos(W),R[te*3+2]=de*Math.sin(W)*Math.sin(he)}C.setAttribute("position",new wt(R,3));const I=new Hd({color:m.color,size:m.size,transparent:!0,opacity:m.opacity,blending:Dt,sizeAttenuation:!0,depthWrite:!1}),F=new To(C,I);Ie.add(F)}),U.add(Ie);const st=new oi;for(let m=0;m<5;m++){const C=new nn,R=14,I=new Float32Array(R*3),F=new Float32Array(R),te=(Math.random()-.5)*160,de=(Math.random()-.5)*80,he=50+Math.random()*100,W=(Math.random()-.5)*.8,ee=(Math.random()-.5)*.3;for(let me=0;me<R;me++)I[me*3]=te-W*me*1.8,I[me*3+1]=de-ee*me*1.8,I[me*3+2]=he,F[me]=1-me/R;C.setAttribute("position",new wt(I,3)),C.setAttribute("opacity",new wt(F,1));const ne=new Yn({vertexShader:`attribute float opacity; varying float vOpacity;
          void main() { vOpacity = opacity; gl_PointSize = mix(4.0, 1.0, 1.0 - opacity);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`varying float vOpacity;
          void main() { float d = length(gl_PointCoord - vec2(0.5));
            if (d > 0.5) discard;
            float a = (1.0 - d * 2.0) * vOpacity * 0.7;
            gl_FragColor = vec4(0.95, 0.88, 0.72, a); }`,transparent:!0,blending:Dt,depthWrite:!1}),ie=new To(C,ne);ie.userData={speed:.015+Math.random()*.025,dx:W,dy:ee},st.add(ie)}U.add(st);const Et=new oi,kt=new oi;U.add(Et),U.add(kt),l.current={scene:U,cam:D,ren:X,terrainMesh:ae,terrainGeo:B,terrainWireMesh:Ce,particles:Qe,particleGeo:_e,planet:$e,sphereGeo:Le,wireMesh:M,atmosMat:re,atmosMesh:se,starField:it,nebulaGroup:ze,cometGroup:st,distantBodies:Te,asteroidBelt:Ze,cosmicDustGroup:Ie,pl:q,ambientLight:Z,hemiLight:L,dl:H,dl2:V,dl3:k,surfaceMarkerGroup:Et,planetMarkerGroup:kt};const ot=m=>{const C=m.target.tagName;C==="TEXTAREA"||C==="INPUT"||(c.current[m.key.toLowerCase()]=!0,c.current[m.code]=!0)},Wt=m=>{c.current[m.key.toLowerCase()]=!1,c.current[m.code]=!1},xn=(m,C)=>{g.current==="surface"?(d.current.targetYaw-=m*.004,d.current.targetPitch=Math.max(-.5,Math.min(.3,d.current.targetPitch-C*.003))):(h.current.targetTheta-=m*.008,h.current.targetPhi=Math.max(.15,Math.min(Math.PI-.15,h.current.targetPhi-C*.008)))},ro=m=>{m.target.tagName==="TEXTAREA"||m.target.tagName==="BUTTON"||m.target.tagName==="INPUT"||(m.preventDefault(),f.current={active:!0,lastX:m.clientX,lastY:m.clientY,moved:!1})},ga=m=>{if(!f.current.active)return;m.preventDefault();const C=m.clientX-f.current.lastX,R=m.clientY-f.current.lastY;(Math.abs(C)>2||Math.abs(R)>2)&&(f.current.moved=!0),xn(C,R),f.current.lastX=m.clientX,f.current.lastY=m.clientY},Er=m=>{if(!f.current.moved&&f.current.active){const C=O.getBoundingClientRect();u.current.x=(m.clientX-C.left)/C.width*2-1,u.current.y=-((m.clientY-C.top)/C.height)*2+1,p.current.setFromCamera(u.current,D);const R=p.current.intersectObjects(y.current,!1);if(R.length>0&&R[0].object.userData.clusterLabel){const I=R[0].object.userData;I.isThoughtStar?(n({type:"star",clusterLabel:I.clusterLabel,thoughtId:I.thoughtId}),ht.play("starClick")):(n({type:"diamond",clusterLabel:I.clusterLabel}),ht.play("diamondClick"))}}f.current.active=!1},so=m=>{m.target.tagName==="TEXTAREA"||m.target.closest("[data-sidebar]")||m.target.closest("[data-panel]")||(m.preventDefault(),g.current==="planet"&&(h.current.targetRadius=Math.max(4,Math.min(14,h.current.targetRadius+m.deltaY*.005))))};let Zt=null;const oo=m=>{m.target.tagName==="TEXTAREA"||m.target.tagName==="BUTTON"||m.target.tagName==="INPUT"||(m.touches.length===1&&(f.current={active:!0,lastX:m.touches[0].clientX,lastY:m.touches[0].clientY,moved:!1}),m.touches.length===2&&(Zt=[{x:m.touches[0].clientX,y:m.touches[0].clientY},{x:m.touches[1].clientX,y:m.touches[1].clientY}]))},ao=m=>{if(m.preventDefault(),m.touches.length===1&&f.current.active){const C=m.touches[0].clientX-f.current.lastX,R=m.touches[0].clientY-f.current.lastY;(Math.abs(C)>2||Math.abs(R)>2)&&(f.current.moved=!0),xn(C,R),f.current.lastX=m.touches[0].clientX,f.current.lastY=m.touches[0].clientY}if(m.touches.length===2&&Zt){if(g.current==="planet"){const te=Math.hypot(m.touches[0].clientX-m.touches[1].clientX,m.touches[0].clientY-m.touches[1].clientY),de=Math.hypot(Zt[0].x-Zt[1].x,Zt[0].y-Zt[1].y);h.current.targetRadius=Math.max(4,Math.min(14,h.current.targetRadius-(te-de)*.015))}const C=(m.touches[0].clientX+m.touches[1].clientX)/2,R=(m.touches[0].clientY+m.touches[1].clientY)/2,I=(Zt[0].x+Zt[1].x)/2,F=(Zt[0].y+Zt[1].y)/2;xn(C-I,R-F),Zt=[{x:m.touches[0].clientX,y:m.touches[0].clientY},{x:m.touches[1].clientX,y:m.touches[1].clientY}]}},va=m=>{if(!f.current.moved&&f.current.active&&m.changedTouches.length===1){const C=O.getBoundingClientRect(),R=m.changedTouches[0];u.current.x=(R.clientX-C.left)/C.width*2-1,u.current.y=-((R.clientY-C.top)/C.height)*2+1,p.current.setFromCamera(u.current,D);const I=p.current.intersectObjects(y.current,!1);if(I.length>0&&I[0].object.userData.clusterLabel){const F=I[0].object.userData;F.isThoughtStar?(n({type:"star",clusterLabel:F.clusterLabel,thoughtId:F.thoughtId}),ht.play("starClick")):(n({type:"diamond",clusterLabel:F.clusterLabel}),ht.play("diamondClick"))}}f.current.active=!1,Zt=null};window.addEventListener("keydown",ot),window.addEventListener("keyup",Wt),O.addEventListener("mousedown",ro),window.addEventListener("mousemove",ga),window.addEventListener("mouseup",Er),O.addEventListener("wheel",so,{passive:!1}),O.addEventListener("touchstart",oo,{passive:!1}),O.addEventListener("touchmove",ao,{passive:!1}),O.addEventListener("touchend",va);const _a=()=>{D.aspect=O.clientWidth/O.clientHeight,D.updateProjectionMatrix(),X.setSize(O.clientWidth,O.clientHeight)};window.addEventListener("resize",_a);const ya=()=>{_.current+=.004;const m=_.current,C=c.current,R=d.current,I=h.current,F=g.current;if(ae.visible=F==="surface",Ce.visible=F==="surface",Qe.visible=F==="surface",$e.visible=F==="planet",M.visible=F==="planet",se.visible=F==="planet",Et.visible=F==="surface",kt.visible=F==="planet",F==="surface"){const ee=Math.cos(R.yaw),ne=Math.sin(R.yaw);(C.w||C.arrowup)&&(R.targetX+=ne*.35,R.targetZ+=ee*.35),(C.s||C.arrowdown)&&(R.targetX-=ne*.35,R.targetZ-=ee*.35),(C.a||C.arrowleft)&&(R.targetX+=ee*.35,R.targetZ-=ne*.35),(C.d||C.arrowright)&&(R.targetX-=ee*.35,R.targetZ+=ne*.35),C.shift&&((C.w||C.arrowup)&&(R.targetX+=ne*.35*(2.5-1),R.targetZ+=ee*.35*(2.5-1)),(C.s||C.arrowdown)&&(R.targetX-=ne*.35*(2.5-1),R.targetZ-=ee*.35*(2.5-1)));const ie=w*.5;R.targetX>ie&&(R.targetX-=w,R.x-=w),R.targetX<-ie&&(R.targetX+=w,R.x+=w),R.targetZ>ie&&(R.targetZ-=w,R.z-=w),R.targetZ<-ie&&(R.targetZ+=w,R.z+=w),R.x+=(R.targetX-R.x)*.14,R.z+=(R.targetZ-R.z)*.14,R.yaw+=(R.targetYaw-R.yaw)*.12,R.pitch+=(R.targetPitch-R.pitch)*.12;const me=4+Math.sin(m*.25)*.15;ae.position.x=R.x,ae.position.z=R.z,Ce.position.x=R.x,Ce.position.z=R.z,D.position.set(R.x,me,R.z);const qe=12,tt=R.x+Math.sin(R.yaw)*qe,Ut=me*.15+R.pitch*8,Xe=R.z+Math.cos(R.yaw)*qe;D.up.set(0,1,0),D.lookAt(tt,Ut,Xe),q.position.set(R.x,4,R.z);const Ue=B.attributes.position,Lt=new Float32Array(Ue.count*3);for(let nt=0;nt<Ue.count;nt++){const Kt=Ue.getX(nt),Pn=Ue.getZ(nt),at=Kt+R.x,Rt=Pn+R.z;let Xt=Ou(at*.08+m*.04,0,Rt*.08+m*.03,5)*1.2;Xt+=Math.sin(at*.06+m*.1)*Math.cos(Rt*.06+m*.08)*.4;const pi=(Xt+1)/2.2;let mt,yt,Nt;pi>.6?(mt=.78,yt=.42,Nt=.32):pi<.3?(mt=.38,yt=.52,Nt=.4):(mt=.58+pi*.12,yt=.44+pi*.08,Nt=.32);const Jt=Math.hypot(Kt,Pn);Jt<4&&(Xt+=Math.sin(Jt*2.5-m*4)*.05*Math.max(0,1-Jt/4));for(const Qt of E){let Vi=at-Qt.planeX,mi=Rt-Qt.planeZ;Vi>ie&&(Vi-=w),Vi<-ie&&(Vi+=w),mi>ie&&(mi-=w),mi<-ie&&(mi+=w);const Kr=Math.sqrt(Vi*Vi+mi*mi),bv=8+Math.min(Qt.frequency*1.5,10),xa=Math.max(0,1-Kr/bv);if(xa>0){const Bn=xa*xa*(3-2*xa),jt=Qt.frequency;if(Qt.trend==="stress"){const lo=jt<3?0:jt<5?.3:jt<8?.6:1;Xt-=Bn*lo;const gi=(jt<3?.2:jt<5?.35:.5)+Math.min(jt*.04,.3);mt+=Bn*Qt.colorData.r*gi,yt+=Bn*Qt.colorData.g*gi*.5,Nt+=Bn*Qt.colorData.b*gi*.5}else if(Qt.trend==="resolved"){const lo=jt<3?0:jt<5?.2:jt<8?.5:.8,gi=.6+jt*.15,Rv=jt<5?.1:jt<8?.2:.3,Cv=1+Math.sin(m*gi+Kr*.5)*Rv;Xt+=Bn*lo*Cv;const bc=(jt<3?.25:jt<5?.4:.55)+Math.min(jt*.04,.3),Rc=.8+Math.sin(m*gi*.7)*.2;mt+=Bn*Qt.colorData.r*bc*Rc,yt+=Bn*Qt.colorData.g*bc*Rc,Nt+=Bn*Qt.colorData.b*bc*.8*Rc}else{const lo=jt<3?0:Math.min(jt*.08,.4);Xt+=Bn*lo;const gi=jt<3?.15:.25;mt+=Bn*Qt.colorData.r*gi,yt+=Bn*Qt.colorData.g*gi,Nt+=Bn*Qt.colorData.b*gi}}}Ue.setY(nt,Xt),Lt[nt*3]=Math.max(0,Math.min(1,mt)),Lt[nt*3+1]=Math.max(0,Math.min(1,yt)),Lt[nt*3+2]=Math.max(0,Math.min(1,Nt))}B.setAttribute("color",new wt(Lt,3)),Ue.needsUpdate=!0,B.computeVertexNormals();const Ke=_e.attributes.position;for(let nt=0;nt<Ke.count;nt++){let Kt=Ke.getY(nt);Kt+=Math.sin(m*1.5+nt*.3)*.003,Ke.setX(nt,Ke.getX(nt)+Math.sin(m*.5+nt*.1)*.002),Kt>6&&(Kt=.3),Ke.setY(nt,Kt)}Ke.needsUpdate=!0,Z.intensity=.35,Z.color.setHex(14208192),L.intensity=.25,H.intensity=.2,V.intensity=.12,k.intensity=.1,q.intensity=.3}else{(C.w||C.arrowup)&&(I.targetPhi=Math.max(.15,I.targetPhi-.025)),(C.s||C.arrowdown)&&(I.targetPhi=Math.min(Math.PI-.15,I.targetPhi+.025)),(C.a||C.arrowleft)&&(I.targetTheta+=.025),(C.d||C.arrowright)&&(I.targetTheta-=.025),(C.q||C["-"])&&(I.targetRadius=Math.min(14,I.targetRadius+.06)),(C.e||C["="])&&(I.targetRadius=Math.max(4,I.targetRadius-.06)),C.r&&(I.targetRadius=Math.max(4,I.targetRadius-.1)),C.f&&(I.targetRadius=Math.min(14,I.targetRadius+.1)),I.phi+=(I.targetPhi-I.phi)*.15,I.theta+=(I.targetTheta-I.theta)*.15,I.radius+=(I.targetRadius-I.radius)*.12,D.position.set(I.radius*Math.sin(I.phi)*Math.cos(I.theta),I.radius*Math.cos(I.phi),I.radius*Math.sin(I.phi)*Math.sin(I.theta)),D.up.set(0,1,0),D.lookAt(0,0,0);const ee=Le.attributes.position,ne=new Float32Array(ee.count*3),ie=2.8;for(let me=0;me<ee.count;me++){const qe=ee.getX(me),tt=ee.getY(me),Ut=ee.getZ(me),Xe=new z(qe,tt,Ut).normalize();let Ue=Ou(Xe.x*2.2+m*.03,Xe.y*2.2,Xe.z*2.2+m*.02,4)*.02,Lt=.35,Ke=.28,nt=.22;const Kt=(Ue+.06)/.12;Lt+=Kt*.06,Ke+=Kt*.05,nt+=Kt*.03;for(const at of E){const Rt=Xe.dot(at.direction),Xt=Math.acos(Math.min(1,Math.max(-1,Rt))),pi=.25+Math.min(at.frequency*.025,.15),mt=Math.max(0,1-Xt/pi);if(mt>0){const yt=mt*mt*(3-2*mt),Nt=at.frequency;if(at.trend==="stress"){Ue-=yt*at.craterScale;const Jt=(Nt<3?.2:Nt<5?.35:.5)+Math.min(Nt*.04,.3);Lt+=yt*at.colorData.r*Jt,Ke+=yt*at.colorData.g*Jt*.5,nt+=yt*at.colorData.b*Jt*.5}else if(at.trend==="resolved"){const Jt=.6+Nt*.15,Qt=Nt<5?.15:Nt<8?.25:.35,Vi=1+Math.sin(m*Jt+Xt*8)*Qt;Ue+=yt*at.flareScale*Vi;const mi=(Nt<3?.25:Nt<5?.4:.55)+Math.min(Nt*.04,.3),Kr=.8+Math.sin(m*Jt*.7)*.2;Lt+=yt*at.colorData.r*mi*Kr,Ke+=yt*at.colorData.g*mi*Kr,nt+=yt*at.colorData.b*mi*.8*Kr}else{Ue+=yt*at.neutralScale;const Jt=Nt<3?.15:.25;Lt+=yt*at.colorData.r*Jt,Ke+=yt*at.colorData.g*Jt,nt+=yt*at.colorData.b*Jt}}}const Pn=ie+Ue;ee.setXYZ(me,Xe.x*Pn,Xe.y*Pn,Xe.z*Pn),ne[me*3]=Math.max(0,Math.min(1,Lt)),ne[me*3+1]=Math.max(0,Math.min(1,Ke)),ne[me*3+2]=Math.max(0,Math.min(1,nt))}Le.setAttribute("color",new wt(ne,3)),ee.needsUpdate=!0,Le.computeVertexNormals(),$e.rotation.y+=2e-4,M.rotation.y=$e.rotation.y,re.uniforms.uCamPos.value.copy(D.position),Z.intensity=.3,Z.color.setHex(13156532),L.intensity=.2,H.intensity=.15,V.intensity=.1,k.intensity=.08,q.intensity=0}const te=w*.5,de=Date.now();y.current.forEach(W=>{W.quaternion.copy(D.quaternion);const ee=W.userData.baseScale||.05;if(W.userData.isThoughtStar){const ne=b.current.includes(W.userData.clusterLabel);if(ne&&F==="surface"){const ie=Math.min(m%1.5/1.5,1),me=ie*ie,qe=W.userData.spreadDist*.6*(1-me*.85),tt=2+me*6,Ut=m*tt+W.userData.offsetAngle;W.userData.worldX=W.userData.clusterX+Math.cos(Ut)*qe,W.userData.worldZ=W.userData.clusterZ+Math.sin(Ut)*qe,W.position.y=.8+(1-me)*1.5;const Xe=ee*(1.5+me*1.5);W.scale.setScalar(Xe),W.material&&(W.material.opacity=1-me*.3)}else if(W.userData.isAggregated&&F==="surface"){const ie=.4+W.userData.seed%1*.3,me=m*ie+W.userData.offsetAngle,qe=W.userData.spreadDist*.6;W.userData.worldX=W.userData.clusterX+Math.cos(me)*qe,W.userData.worldZ=W.userData.clusterZ+Math.sin(me)*qe,W.position.y=.8+Math.sin(m*1.2+W.userData.seed)*.12}if(!ne){const ie=ee*(1+Math.sin(m*4+W.userData.seed*3.7)*.3);W.scale.setScalar(ie)}}else if(W.userData.isDiamond){const ne=de-(W.userData.birthTime||0),ie=2e3;if(ne<ie){const me=ne/ie,qe=me<.5?4*me*me*me:1-Math.pow(-2*me+2,3)/2;W.scale.set(ee*qe,ee*1.4*qe,1)}else{const me=ee*(1+Math.sin(m*2.5+W.userData.seed)*.15);W.scale.set(me,me*1.4,1)}}else{const ne=ee*(1+Math.sin(m*2.5+W.userData.seed)*.15);W.scale.setScalar(ne)}if(F==="surface"&&W.userData.worldX!==void 0){let ne=W.userData.worldX-R.x,ie=W.userData.worldZ-R.z;ne>te&&(ne-=w),ne<-te&&(ne+=w),ie>te&&(ie-=w),ie<-te&&(ie+=w),W.position.x=R.x+ne,W.position.z=R.z+ie}}),F==="surface"&&Et.children.forEach(W=>{if(W.isPointLight&&W.userData.worldX!==void 0){let ee=W.userData.worldX-R.x,ne=W.userData.worldZ-R.z;ee>te&&(ee-=w),ee<-te&&(ee+=w),ne>te&&(ne-=w),ne<-te&&(ne+=w),W.position.x=R.x+ee,W.position.z=R.z+ne}}),it.rotation.y+=8e-5,ze.rotation.y+=4e-5,ze.rotation.x+=8e-6,Ie.rotation.y+=6e-5,Ie.rotation.x+=1e-5,Te.rotation.y+=2e-5,Ze.rotation.y+=25e-5,Ze.children.forEach(W=>{W.isMesh&&W.userData.spinSpeed&&(W.rotation.x+=W.userData.spinSpeed,W.rotation.z+=W.userData.spinSpeed*.7)}),Te.children.forEach(W=>{W.material&&W.material.uniforms&&W.material.uniforms.uCamPos&&W.material.uniforms.uCamPos.value.copy(D.position)}),Te.children.forEach(W=>{W.userData&&W.userData.isFlare&&(W.quaternion.copy(D.quaternion),W.rotateZ(W.userData.baseRotZ))}),st.children.forEach(W=>{const ee=W.geometry.attributes.position,ne=W.userData;for(let ie=0;ie<ee.count;ie++)ee.setX(ie,ee.getX(ie)+ne.speed*ne.dx),ee.setY(ie,ee.getY(ie)+ne.speed*ne.dy);if(ee.needsUpdate=!0,Math.abs(ee.getX(0))>250){const ie=(Math.random()-.5)*160,me=(Math.random()-.5)*80,qe=50+Math.random()*100;for(let tt=0;tt<ee.count;tt++)ee.setX(tt,ie-ne.dx*tt*1.8),ee.setY(tt,me-ne.dy*tt*1.8),ee.setZ(tt,qe);ee.needsUpdate=!0}});const he=P.current;he&&(it.material.opacity=(he.starFieldOpacity??1)*.85,ze.visible=(he.nebulaOpacity??1)>.01,ze.children.forEach(W=>{W.material&&(W.material.opacity=W.material._baseOp!==void 0?W.material._baseOp*(he.nebulaOpacity??1):W.material.opacity)}),Ze.visible=(he.asteroidBeltOpacity??1)>.01,Ze.children.forEach(W=>{W.material&&!W.material.isShaderMaterial&&(W.material.opacity=(W.material._baseOp??W.material.opacity)*(he.asteroidBeltOpacity??1))}),Ie.visible=(he.cosmicDustOpacity??1)>.01,Te.visible=(he.distantBodiesOpacity??1)>.01,st.visible=(he.cometOpacity??1)>.01,F==="surface"&&(Qe.material.opacity=.5*(he.ambientParticles??1),Ce.material.opacity=.025*(he.terrainWireframe??1)),F==="planet"&&(se.visible=(he.atmosphereGlow??1)>.01)),X.render(U,D),x.current=requestAnimationFrame(ya)};return ya(),()=>{cancelAnimationFrame(x.current),window.removeEventListener("keydown",ot),window.removeEventListener("keyup",Wt),O.removeEventListener("mousedown",ro),window.removeEventListener("mousemove",ga),window.removeEventListener("mouseup",Er),O.removeEventListener("wheel",so),O.removeEventListener("touchstart",oo),O.removeEventListener("touchmove",ao),O.removeEventListener("touchend",va),window.removeEventListener("resize",_a),X.dispose(),O.contains(X.domElement)&&O.removeChild(X.domElement)}},[E,n]),Pe.useEffect(()=>{const{surfaceMarkerGroup:O,planetMarkerGroup:$}=l.current;if(!O||!$)return;for(;O.children.length;)O.remove(O.children[0]);for(;$.children.length;)$.remove($.children[0]);y.current=[],S.current=[];for(const D of v.current.keys())E.find(X=>X.label===D)||v.current.delete(D);E.forEach((D,X)=>{if(D.frequency<3)return;v.current.has(D.label)||v.current.set(D.label,Date.now());const Z=document.createElement("canvas");Z.width=64,Z.height=96;const L=Z.getContext("2d"),H=D.colorData.hex,V=32,k=48,q=L.createRadialGradient(V,k,2,V,k,40);q.addColorStop(0,H+"ff"),q.addColorStop(.15,H+"aa"),q.addColorStop(.4,H+"44"),q.addColorStop(.7,H+"11"),q.addColorStop(1,"transparent"),L.fillStyle=q,L.fillRect(0,0,64,96);const B=10,J=k,ae=82,pe=16;L.save(),L.shadowColor=H,L.shadowBlur=16,L.beginPath(),L.moveTo(V,B),L.lineTo(V+pe,J),L.lineTo(V,ae),L.lineTo(V-pe,J),L.closePath(),L.fillStyle=H,L.fill(),L.shadowBlur=8,L.globalAlpha=.6,L.fill(),L.restore(),L.save(),L.globalAlpha=.5,L.strokeStyle="#ffffff",L.lineWidth=.8,L.beginPath(),L.moveTo(V-pe,J),L.lineTo(V,B+18),L.lineTo(V+pe,J),L.stroke(),L.beginPath(),L.moveTo(V-pe+2,J),L.lineTo(V+pe-2,J),L.stroke(),L.restore(),L.beginPath(),L.moveTo(V,B),L.lineTo(V+pe,J),L.lineTo(V,ae),L.lineTo(V-pe,J),L.closePath(),L.strokeStyle="rgba(255,255,255,0.6)",L.lineWidth=1,L.stroke(),L.beginPath(),L.arc(V,J-4,3.5,0,Math.PI*2),L.fillStyle="#fff",L.globalAlpha=.95,L.fill(),D.frequency>=6&&(L.globalAlpha=.4,L.beginPath(),L.arc(V,k,22,0,Math.PI*2),L.strokeStyle=H,L.lineWidth=1.5,L.stroke()),L.globalAlpha=1;const Se=new bm(Z);Se.premultiplyAlpha=!0;const Ce=v.current.get(D.label),De=new Lo({map:Se,transparent:!0,depthWrite:!1,sizeAttenuation:!0,blending:Dt}),_e=new ll(De),Ne=2+(D.flareScale||0)*3+Math.min(D.frequency*.15,.8);_e.position.set(D.planeX,Ne,D.planeZ);const j=.55+Math.min(D.frequency*.06,.4);_e.scale.set(j,j*1.4,1),_e.userData={clusterLabel:D.label,seed:X*1.7,baseScale:j,worldX:D.planeX,worldZ:D.planeZ,isDiamond:!0,birthTime:Ce},O.add(_e),y.current.push(_e);const Qe=new Lo({map:Se.clone(),transparent:!0,depthWrite:!1,sizeAttenuation:!0,blending:Dt}),Me=new ll(Qe),Le=.12+(D.flareScale||0)+Math.min(D.frequency*.01,.06),Ee=D.direction.clone().multiplyScalar(2.8+Le);Me.position.copy(Ee);const $e=.06+Math.min(D.frequency*.007,.05);if(Me.scale.set($e,$e*1.4,1),Me.userData={clusterLabel:D.label,seed:X*1.7,baseScale:$e,isDiamond:!0,birthTime:Ce},$.add(Me),y.current.push(Me),D.frequency>=2){const Oe=new He(D.colorData.r,D.colorData.g,D.colorData.b),A=new fl(Oe,Math.min(D.frequency*.08,.6),2.5);A.position.copy(D.direction.clone().multiplyScalar(2.8+.15)),$.add(A);const M=new fl(Oe,Math.min(D.frequency*.1,.8),12);M.position.set(D.planeX,1.5+(D.flareScale||0)*2,D.planeZ),M.userData={worldX:D.planeX,worldZ:D.planeZ},O.add(M)}});const oe=2.399963,U=w;e.forEach((D,X)=>{const Z=vr(D.keywords&&D.keywords[0]||"thought"),{phi:L,theta:H}=Do(Z),V=E.find(ce=>ce.label===Z),k=V&&V.frequency>=3,q=X*oe,B=k?1.5+X%5*.5:2.5+X%8*.8,J=(H/(Math.PI*2)-.5)*U,ae=(L/Math.PI-.5)*U,pe=J+Math.cos(q)*B,Se=ae+Math.sin(q)*B,Ce=Fi(D.emotion),De=document.createElement("canvas");De.width=32,De.height=32;const _e=De.getContext("2d"),Ne=_e.createRadialGradient(16,16,0,16,16,14);Ne.addColorStop(0,"#ffffffff"),Ne.addColorStop(.15,"#ffffffdd"),Ne.addColorStop(.3,Ce.hex+"cc"),Ne.addColorStop(.55,Ce.hex+"66"),Ne.addColorStop(.8,Ce.hex+"22"),Ne.addColorStop(1,Ce.hex+"00"),_e.fillStyle=Ne,_e.beginPath(),_e.arc(16,16,14,0,Math.PI*2),_e.fill(),_e.strokeStyle="#ffffff55",_e.lineWidth=.8,_e.beginPath(),_e.moveTo(16,3),_e.lineTo(16,29),_e.stroke(),_e.beginPath(),_e.moveTo(3,16),_e.lineTo(29,16),_e.stroke();const j=new bm(De),Qe=new Lo({map:j,transparent:!0,depthWrite:!1,sizeAttenuation:!0,opacity:k?.75:.9,blending:Dt}),Me=new ll(Qe);Me.position.set(pe,.6+Math.random()*.5,Se);const Le=k?.15:.28;Me.scale.setScalar(Le),Me.userData={clusterLabel:Z,seed:X*2.3+.5,baseScale:Le,worldX:pe,worldZ:Se,isThoughtStar:!0,isAggregated:k,clusterX:J,clusterZ:ae,spreadDist:B,offsetAngle:q,thoughtId:D.id},O.add(Me),y.current.push(Me),S.current.push(Me);const Ee=Dm(Z,1).normalize(),$e=new z(-Ee.z,0,Ee.x).normalize(),Oe=new z().crossVectors(Ee,$e).normalize(),A=k?.02+X%5*.008:.04+X%8*.01,M=Ee.clone().addScaledVector($e,Math.cos(q)*A).addScaledVector(Oe,Math.sin(q)*A).normalize(),Y=new Lo({map:j.clone(),transparent:!0,depthWrite:!1,sizeAttenuation:!0,opacity:k?.7:.85,blending:Dt}),re=new ll(Y);re.position.copy(M.clone().multiplyScalar(2.82));const se=k?.015:.025;re.scale.setScalar(se),re.userData={clusterLabel:Z,seed:X*2.3+.5,baseScale:se,isThoughtStar:!0,isAggregated:k,thoughtId:D.id,sphereDir:M.clone(),spreadDist:A},$.add(re),y.current.push(re),S.current.push(re)}),E.forEach(D=>{if(D.frequency>=2&&D.frequency<3){const X=new He(D.colorData.r,D.colorData.g,D.colorData.b),Z=new fl(X,Math.min(D.frequency*.1,.4),8);Z.position.set(D.planeX,1,D.planeZ),Z.userData={worldX:D.planeX,worldZ:D.planeZ},O.add(Z)}})},[E,e]),K.jsx("div",{ref:a,style:{width:"100%",height:"100%",position:"absolute",top:0,left:0,cursor:"grab",touchAction:"none"}})}function AT({cluster:t,entries:e,onClose:n}){if(!t)return null;const i=Fi(t.emotion),r=e.filter(a=>a.keywords.some(l=>vr(l)===t.label)),s=Ac(t.emotion),o=s==="stress"?"crater":s==="resolved"?"flare":"ridge";return K.jsxs(K.Fragment,{children:[K.jsx("div",{onClick:n,style:{position:"absolute",inset:0,zIndex:39,cursor:"pointer"}}),K.jsxs("div",{onClick:a=>a.stopPropagation(),style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",background:`${Q.bg}f5`,backdropFilter:"blur(24px)",border:`1px solid ${i.hex}44`,borderRadius:16,padding:"24px 28px",maxWidth:380,width:"90%",zIndex:40,maxHeight:"60vh",overflowY:"auto",boxShadow:`0 20px 60px rgba(0,0,0,0.6), 0 0 40px ${i.hex}15`,animation:"popupIn 0.35s cubic-bezier(0.22, 1, 0.36, 1) both"},children:[K.jsx("button",{onClick:n,style:{position:"absolute",top:12,right:14,background:"none",border:"none",color:Q.textMuted,cursor:"pointer",fontSize:18,padding:4},children:"×"}),K.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:16},children:[K.jsx("div",{style:{width:12,height:12,borderRadius:2,background:i.hex,boxShadow:`0 0 12px ${i.hex}66`,transform:"rotate(45deg)"}}),K.jsxs("div",{children:[K.jsx("div",{style:{fontFamily:"'Fraunces', Georgia, serif",fontSize:18,color:Q.textPrimary},children:t.label}),K.jsxs("div",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:9,color:i.hex,letterSpacing:"0.1em",marginTop:2},children:[i.label.toUpperCase()," · ",o.toUpperCase()," · ",t.frequency,"×"]})]})]}),r.length===0&&K.jsx("div",{style:{fontFamily:"'DM Sans'",fontSize:13,color:Q.textMuted,fontStyle:"italic"},children:"No entries found."}),r.map(a=>K.jsxs("div",{style:{padding:"10px 0",borderBottom:`1px solid ${Q.surfaceLight}18`},children:[K.jsx("div",{style:{fontFamily:"'DM Sans'",fontSize:13,color:Q.textSecondary,lineHeight:1.6},children:a.rawText}),K.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginTop:4},children:[K.jsx("div",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:9,color:Q.textMuted},children:a.timestamp}),K.jsx("div",{style:{width:4,height:4,borderRadius:"50%",background:Fi(a.emotion).hex}}),K.jsx("div",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:9,color:Fi(a.emotion).hex},children:a.emotion})]})]},a.id))]})]})}function bT({thought:t,clusters:e,onClose:n,onViewCluster:i}){if(!t)return null;const{entry:r,clusterLabel:s}=t,o=Fi(r.emotion),a=e.find(f=>f.label===s),l=a?a.frequency:1,c=3,d=Math.min(l/c,1),h=Math.max(0,c-l);return K.jsxs(K.Fragment,{children:[K.jsx("div",{onClick:n,style:{position:"absolute",inset:0,zIndex:39,cursor:"pointer"}}),K.jsxs("div",{onClick:f=>f.stopPropagation(),style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",background:`${Q.bg}f5`,backdropFilter:"blur(24px)",border:`1px solid ${o.hex}33`,borderRadius:14,padding:"22px 26px",maxWidth:340,width:"85%",zIndex:40,boxShadow:`0 16px 48px rgba(0,0,0,0.5), 0 0 30px ${o.hex}10`,animation:"popupIn 0.3s cubic-bezier(0.22, 1, 0.36, 1) both"},children:[K.jsx("button",{onClick:n,style:{position:"absolute",top:10,right:12,background:"none",border:"none",color:Q.textMuted,cursor:"pointer",fontSize:18,padding:4},children:"x"}),K.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:14},children:[K.jsx("div",{style:{width:14,height:14,borderRadius:"50%",background:`radial-gradient(circle, #fff 20%, ${o.hex} 60%, transparent 100%)`,boxShadow:`0 0 10px ${o.hex}88`}}),K.jsxs("div",{children:[K.jsx("div",{style:{fontFamily:"'Fraunces', Georgia, serif",fontSize:16,color:Q.textPrimary},children:s}),K.jsxs("div",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:8,color:o.hex,letterSpacing:"0.12em",marginTop:2},children:[o.label.toUpperCase()," · THOUGHT STAR"]})]})]}),K.jsxs("div",{style:{fontFamily:"'DM Sans'",fontSize:13,color:Q.textSecondary,lineHeight:1.7,padding:"12px 0",borderTop:`1px solid ${Q.surfaceLight}22`,borderBottom:`1px solid ${Q.surfaceLight}22`},children:['"',r.rawText,'"']}),K.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginTop:10,marginBottom:14},children:[K.jsx("div",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:9,color:Q.textMuted},children:r.timestamp}),K.jsx("div",{style:{width:4,height:4,borderRadius:"50%",background:o.hex}}),K.jsx("div",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:9,color:o.hex},children:r.emotion})]}),K.jsxs("div",{style:{marginTop:4},children:[K.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6},children:[K.jsx("span",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:8,color:Q.textMuted,letterSpacing:"0.15em"},children:l>=c?"AGGREGATED INTO DIAMOND":`${h} MORE TO DIAMOND`}),K.jsxs("span",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:8,color:o.hex},children:[l,"/",c]})]}),K.jsx("div",{style:{height:3,borderRadius:2,background:Q.surfaceLight,overflow:"hidden"},children:K.jsx("div",{style:{height:"100%",borderRadius:2,width:`${d*100}%`,background:l>=c?`linear-gradient(90deg, ${o.hex}, ${Q.amber})`:o.hex,transition:"width 0.6s ease",boxShadow:l>=c?`0 0 8px ${o.hex}88`:"none"}})})]}),l>=c&&a&&K.jsxs("button",{onClick:()=>{i(a)},onMouseEnter:()=>ht.play("hover"),style:{marginTop:14,width:"100%",padding:"8px 0",borderRadius:8,border:`1px solid ${o.hex}33`,background:`${o.hex}11`,color:o.hex,fontFamily:"'JetBrains Mono', monospace",fontSize:9,letterSpacing:"0.12em",cursor:"pointer",transition:"all 0.2s"},children:["VIEW DIAMOND CLUSTER (",a.frequency," THOUGHTS)"]})]})]})}function RT({clusters:t,entries:e,isOpen:n,onToggle:i,onClusterClick:r}){const[s,o]=Pe.useState({}),a=Pe.useMemo(()=>{const d={};return t.forEach(h=>{const f=[h.label,...h.rawKeywords||[]],_=ET(f),x=Object.keys(_)[0]||"other";d[x]||(d[x]=[]),d[x].find(y=>y.label===h.label)||d[x].push(h)}),d},[t]),l=d=>{o(h=>({...h,[d]:!h[d]})),ht.play("hover")},c={"work & career":"◆",finances:"◇","health & body":"○",relationships:"◈","growth & purpose":"△",creativity:"✦",emotions:"◎",identity:"◉",environment:"▣",technology:"⬡","time & life":"◷",other:"·"};return K.jsxs(K.Fragment,{children:[K.jsx("button",{onClick:i,onMouseEnter:()=>ht.play("hover"),style:{position:"absolute",top:18,left:18,width:40,height:40,borderRadius:10,background:`${Q.surface}cc`,border:`1px solid ${Q.surfaceLight}`,color:Q.amber,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,zIndex:30,backdropFilter:"blur(8px)"},children:n?"×":"≡"}),K.jsxs("div",{"data-sidebar":"true",style:{position:"absolute",top:0,left:0,width:300,height:"100%",background:`${Q.bg}f8`,backdropFilter:"blur(24px)",borderRight:`1px solid ${Q.surfaceLight}`,transform:n?"translateX(0)":"translateX(-100%)",transition:"transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)",zIndex:25,padding:"72px 20px 20px",overflowY:"auto"},children:[K.jsx("div",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:9,color:Q.textMuted,letterSpacing:"0.2em",marginBottom:6},children:"THOUGHT TERRAIN"}),K.jsxs("div",{style:{fontFamily:"'DM Sans'",fontSize:11,color:Q.textMuted,marginBottom:20},children:[e.length," mapped · ",t.length," patterns"]}),Object.keys(a).length===0&&K.jsx("div",{style:{fontFamily:"'DM Sans'",fontSize:13,color:Q.textMuted,lineHeight:1.7,fontStyle:"italic"},children:"Your planet is smooth. Start dumping thoughts."}),Object.entries(a).map(([d,h])=>{const f=s[d],_=h.reduce((p,u)=>u.frequency>((p==null?void 0:p.frequency)||0)?u:p,null),x=_?Fi(_.emotion).hex:Q.amber,y=h.reduce((p,u)=>p+u.frequency,0);return K.jsxs("div",{style:{marginBottom:2},children:[K.jsxs("button",{onClick:()=>l(d),style:{width:"100%",background:"none",border:"none",cursor:"pointer",padding:"10px 0",display:"flex",alignItems:"center",gap:8,borderBottom:`1px solid ${Q.surfaceLight}12`},children:[K.jsx("span",{style:{color:x,fontSize:12,width:16,textAlign:"center"},children:c[d]||"·"}),K.jsx("span",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:10,letterSpacing:"0.1em",color:Q.textPrimary,textTransform:"uppercase",flex:1,textAlign:"left"},children:d}),K.jsxs("span",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:9,color:Q.textMuted},children:[y,"×"]}),K.jsx("span",{style:{color:Q.textMuted,fontSize:10,transform:f?"rotate(90deg)":"rotate(0deg)",transition:"transform 0.3s ease"},children:"▸"})]}),K.jsx("div",{style:{maxHeight:f?400:0,overflow:"hidden",transition:"max-height 0.4s cubic-bezier(0.22, 1, 0.36, 1)"},children:h.map((p,u)=>{const g=Fi(p.emotion),v=Ac(p.emotion);return K.jsxs("div",{onClick:()=>{r&&(r(p.label),ht.play("reveal"))},onMouseEnter:()=>ht.play("hover"),style:{padding:"8px 0 8px 24px",cursor:"pointer",borderRadius:6,transition:"background 0.2s ease"},onMouseOver:S=>S.currentTarget.style.background=`${Q.surfaceLight}22`,onMouseOut:S=>S.currentTarget.style.background="transparent",children:[K.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:2},children:[K.jsx("div",{style:{width:6,height:6,borderRadius:"50%",background:g.hex,boxShadow:`0 0 6px ${g.hex}44`}}),K.jsx("span",{style:{fontFamily:"'Fraunces', Georgia, serif",fontSize:13,color:Q.textPrimary},children:p.label}),K.jsxs("span",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:8,color:g.hex,marginLeft:"auto"},children:[p.frequency,"× · ",v==="stress"?"crater":v==="resolved"?"flare":"ridge"]})]}),K.jsx("div",{style:{marginTop:3,marginLeft:12,height:2,background:Q.surfaceLight,borderRadius:1,overflow:"hidden"},children:K.jsx("div",{style:{height:"100%",width:`${Math.min(p.frequency*16,100)}%`,background:g.hex,borderRadius:1,transition:"width 1s ease"}})})]},u)})})]},d)})]})]})}function CT({isOpen:t,onToggle:e,viewMode:n}){const s=n==="surface"?[{key:"W / ↑",action:"Walk forward"},{key:"S / ↓",action:"Walk backward"},{key:"A / ←",action:"Strafe left"},{key:"D / →",action:"Strafe right"},{key:"Shift + W/S",action:"Sprint"},{key:"Drag",action:"Look around"},{key:"Sidebar item",action:"Jump to thought"},{key:"Click marker",action:"View thoughts"}]:[{key:"W / ↑",action:"Orbit up"},{key:"S / ↓",action:"Orbit down"},{key:"A / ←",action:"Orbit left"},{key:"D / →",action:"Orbit right"},{key:"E / +",action:"Zoom in"},{key:"Q / -",action:"Zoom out"},{key:"R",action:"Quick zoom in"},{key:"F",action:"Quick zoom out"},{key:"Scroll",action:"Zoom in/out"},{key:"Drag",action:"Pan orbit"},{key:"Click marker",action:"View thoughts"},{key:"Pinch",action:"Zoom (mobile)"},{key:"Tap marker",action:"View thoughts (mobile)"}];return K.jsxs(K.Fragment,{children:[K.jsx("button",{onClick:e,onMouseEnter:()=>ht.play("hover"),style:{position:"absolute",bottom:18,right:18,width:40,height:40,borderRadius:12,background:`linear-gradient(135deg, ${Q.surface}ee, ${Q.surfaceMid}88)`,border:`1px solid ${t?Q.amber+"55":Q.surfaceLight}`,color:t?Q.amber:Q.textSecondary,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:15,fontWeight:400,zIndex:30,backdropFilter:"blur(12px)",fontFamily:"'JetBrains Mono', monospace",boxShadow:t?`0 0 16px ${Q.amber}22`:"0 2px 8px rgba(0,0,0,0.3)",transition:"all 0.3s ease"},children:"?"}),K.jsxs("div",{"data-panel":"true",style:{position:"absolute",bottom:60,right:18,width:220,background:`${Q.bg}f5`,backdropFilter:"blur(20px)",border:`1px solid ${Q.surfaceLight}`,borderRadius:12,padding:"16px 18px",zIndex:30,opacity:t?1:0,transform:t?"translateY(0)":"translateY(10px)",pointerEvents:t?"all":"none",transition:"all 0.3s cubic-bezier(0.22, 1, 0.36, 1)"},children:[K.jsx("div",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:9,color:Q.textMuted,letterSpacing:"0.2em",marginBottom:12},children:n==="surface"?"SURFACE CONTROLS":"PLANET CONTROLS"}),s.map((o,a)=>K.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"4px 0"},children:[K.jsx("span",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:10,color:Q.amber,minWidth:90},children:o.key}),K.jsx("span",{style:{fontFamily:"'DM Sans'",fontSize:11,color:Q.textSecondary},children:o.action})]},a))]})]})}function PT({isOpen:t,onToggle:e,settings:n,onChange:i}){const r=[{key:"starFieldOpacity",label:"Galaxy Stars"},{key:"nebulaOpacity",label:"Nebulae"},{key:"distantBodiesOpacity",label:"Planets & Suns"},{key:"asteroidBeltOpacity",label:"Asteroid Belt"},{key:"cosmicDustOpacity",label:"Cosmic Dust"},{key:"cometOpacity",label:"Comets"},{key:"ambientParticles",label:"Ambient Particles"},{key:"terrainWireframe",label:"Wireframe Grid"},{key:"atmosphereGlow",label:"Atmosphere Glow"}],s=(a,l)=>{i({...n,[a]:l})},o=a=>{const l={full:Object.fromEntries(r.map(c=>[c.key,1])),minimal:Object.fromEntries(r.map(c=>[c.key,c.key==="starFieldOpacity"?.3:c.key==="atmosphereGlow"?.5:0])),focused:{starFieldOpacity:.5,nebulaOpacity:.2,distantBodiesOpacity:.3,asteroidBeltOpacity:0,cosmicDustOpacity:.1,cometOpacity:0,ambientParticles:.6,terrainWireframe:1,atmosphereGlow:1}};i(l[a]||l.full)};return K.jsxs(K.Fragment,{children:[K.jsx("button",{onClick:()=>{e(),ht.play("hover")},onMouseEnter:()=>ht.play("hover"),style:{position:"absolute",bottom:18,left:18,zIndex:30,width:40,height:40,borderRadius:12,border:`1px solid ${t?Q.amber+"55":Q.surfaceLight}`,background:`linear-gradient(135deg, ${t?Q.surface+"ee":Q.surface+"cc"}, ${Q.surfaceMid}88)`,backdropFilter:"blur(12px)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'JetBrains Mono', monospace",fontSize:17,color:t?Q.amber:Q.textSecondary,boxShadow:t?`0 0 16px ${Q.amber}22`:"0 2px 8px rgba(0,0,0,0.3)",transition:"all 0.3s ease"},children:"⚙"}),K.jsxs("div",{"data-panel":"true",style:{position:"absolute",bottom:62,left:18,width:240,background:`${Q.bg}f5`,backdropFilter:"blur(20px)",border:`1px solid ${Q.surfaceLight}`,borderRadius:12,padding:"16px 18px",zIndex:30,opacity:t?1:0,transform:t?"translateY(0)":"translateY(10px)",pointerEvents:t?"all":"none",transition:"all 0.3s cubic-bezier(0.22, 1, 0.36, 1)",maxHeight:"60vh",overflowY:"auto"},children:[K.jsx("div",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:9,color:Q.textMuted,letterSpacing:"0.2em",marginBottom:14},children:"SCENE SETTINGS"}),K.jsx("div",{style:{display:"flex",gap:6,marginBottom:14},children:[["full","Full"],["focused","Focus"],["minimal","Minimal"]].map(([a,l])=>K.jsx("button",{onClick:()=>o(a),style:{flex:1,padding:"5px 0",borderRadius:6,border:`1px solid ${Q.surfaceLight}`,background:`${Q.surface}cc`,color:Q.textSecondary,fontFamily:"'JetBrains Mono', monospace",fontSize:8,letterSpacing:"0.1em",cursor:"pointer",transition:"all 0.2s"},onMouseEnter:c=>{c.target.style.borderColor=Q.amber+"44",c.target.style.color=Q.amber},onMouseLeave:c=>{c.target.style.borderColor=Q.surfaceLight,c.target.style.color=Q.textSecondary},children:l},a))}),r.map(({key:a,label:l})=>K.jsxs("div",{style:{marginBottom:10},children:[K.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:3},children:[K.jsx("span",{style:{fontFamily:"'DM Sans'",fontSize:11,color:Q.textSecondary},children:l}),K.jsxs("span",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:9,color:Q.textMuted},children:[Math.round((n[a]??1)*100),"%"]})]}),K.jsx("input",{type:"range",min:"0",max:"100",value:Math.round((n[a]??1)*100),onChange:c=>s(a,parseInt(c.target.value)/100),style:{width:"100%",height:3,appearance:"none",background:`linear-gradient(to right, ${Q.amber}88 ${(n[a]??1)*100}%, ${Q.surfaceLight} ${(n[a]??1)*100}%)`,borderRadius:2,outline:"none",cursor:"pointer"}})]},a))]})]})}function LT(){const[t,e]=Pe.useState("intro"),[n,i]=Pe.useState([]),[r,s]=Pe.useState([]),[o,a]=Pe.useState(""),[l,c]=Pe.useState(!1),[d,h]=Pe.useState(!1),[f,_]=Pe.useState(!1),[x,y]=Pe.useState(!1),[p,u]=Pe.useState(null),[g,v]=Pe.useState(null),[S,P]=Pe.useState("surface"),[b,w]=Pe.useState(null),[G,E]=Pe.useState([]),[T,O]=Pe.useState(!1),[$,oe]=Pe.useState({starFieldOpacity:1,nebulaOpacity:1,asteroidBeltOpacity:1,cosmicDustOpacity:1,distantBodiesOpacity:1,cometOpacity:1,ambientParticles:1,terrainWireframe:1,atmosphereGlow:1}),U=[{id:1,timestamp:"Jan 5",rawText:"can't stop thinking about whether I'm making the right career move",keywords:["career","move"],emotion:"anxiety",tone:"stress"},{id:2,timestamp:"Jan 12",rawText:"career anxiety back, comparing myself to everyone online",keywords:["career","anxiety","comparing"],emotion:"anxiety",tone:"stress"},{id:3,timestamp:"Jan 28",rawText:"spiraling about career again, am I behind everyone my age",keywords:["career","behind","age"],emotion:"anxiety",tone:"stress"},{id:4,timestamp:"Feb 3",rawText:"another career panic at 3am, what if I'm wasting my twenties",keywords:["career","panic","wasting"],emotion:"fear",tone:"stress"},{id:5,timestamp:"Feb 14",rawText:"saw someone my age succeed and now career dread is back",keywords:["career","dread","succeed"],emotion:"anxiety",tone:"stress"},{id:6,timestamp:"Feb 22",rawText:"career stress making it hard to focus on anything else",keywords:["career","stress","focus"],emotion:"anxiety",tone:"stress"},{id:7,timestamp:"Mar 1",rawText:"questioning my entire career path again, is this right for me",keywords:["career","path","questioning"],emotion:"anxiety",tone:"stress"},{id:8,timestamp:"Mar 8",rawText:"career imposter syndrome hitting different today",keywords:["career","imposter"],emotion:"fear",tone:"stress"},{id:9,timestamp:"Jan 8",rawText:"money feels tight this month, watching every dollar",keywords:["money","tight"],emotion:"anxiety",tone:"stress"},{id:10,timestamp:"Jan 20",rawText:"money stress again, should I take the safe route",keywords:["money","stress","safe"],emotion:"anxiety",tone:"stress"},{id:11,timestamp:"Feb 5",rawText:"rent is due and money is low, feeling the squeeze",keywords:["money","rent","squeeze"],emotion:"anxiety",tone:"stress"},{id:12,timestamp:"Feb 18",rawText:"money anxiety woke me up at 4am doing math in my head",keywords:["money","anxiety","math"],emotion:"anxiety",tone:"stress"},{id:13,timestamp:"Mar 2",rawText:"another month of money stress, when does this end",keywords:["money","stress"],emotion:"exhaustion",tone:"stress"},{id:14,timestamp:"Mar 7",rawText:"money worries coloring everything, hard to enjoy things",keywords:["money","worries","enjoy"],emotion:"sadness",tone:"stress"},{id:15,timestamp:"Jan 15",rawText:"built something cool today, forgot about everything for hours",keywords:["built","cool"],emotion:"excitement",tone:"resolved"},{id:16,timestamp:"Jan 25",rawText:"in the zone building this new project, time disappeared",keywords:["built","project","zone"],emotion:"excitement",tone:"resolved"},{id:17,timestamp:"Feb 8",rawText:"built a prototype and it actually works, feeling alive",keywords:["built","prototype","alive"],emotion:"joy",tone:"resolved"},{id:18,timestamp:"Feb 16",rawText:"creating again after a slump, this is what I'm meant to do",keywords:["creating","meant"],emotion:"confidence",tone:"resolved"},{id:19,timestamp:"Feb 28",rawText:"shipped the feature I've been building, pure satisfaction",keywords:["built","shipped","satisfaction"],emotion:"confidence",tone:"resolved"},{id:20,timestamp:"Mar 5",rawText:"building momentum with this project, ideas flowing freely",keywords:["built","momentum","ideas"],emotion:"excitement",tone:"resolved"},{id:21,timestamp:"Mar 10",rawText:"built three things this week, on fire creatively",keywords:["built","creative","fire"],emotion:"excitement",tone:"resolved"},{id:22,timestamp:"Jan 18",rawText:"had a beautiful walk through the park, felt grounded",keywords:["walk","park","grounded"],emotion:"peace",tone:"resolved"},{id:23,timestamp:"Feb 2",rawText:"morning meditation brought real peace today",keywords:["meditation","peace"],emotion:"peace",tone:"resolved"},{id:24,timestamp:"Feb 20",rawText:"sat by the water and just breathed, felt completely at peace",keywords:["water","breathed","peace"],emotion:"peace",tone:"resolved"},{id:25,timestamp:"Mar 3",rawText:"grounded myself with a long walk, the noise quieted down",keywords:["grounded","walk","quiet"],emotion:"peace",tone:"resolved"},{id:26,timestamp:"Mar 9",rawText:"found peace in the garden today, hands in the earth",keywords:["peace","garden","earth"],emotion:"peace",tone:"resolved"},{id:27,timestamp:"Jan 22",rawText:"sleep has been terrible, mind racing at 2am",keywords:["sleep","mind","racing"],emotion:"exhaustion",tone:"stress"},{id:28,timestamp:"Feb 6",rawText:"another night of broken sleep, running on empty",keywords:["sleep","broken","empty"],emotion:"exhaustion",tone:"stress"},{id:29,timestamp:"Feb 19",rawText:"sleep deprivation making everything feel harder",keywords:["sleep","harder"],emotion:"exhaustion",tone:"stress"},{id:30,timestamp:"Mar 1",rawText:"tried every sleep trick, still waking up at 3am",keywords:["sleep","waking"],emotion:"frustration",tone:"stress"},{id:31,timestamp:"Mar 6",rawText:"exhausted from bad sleep, body aches constantly",keywords:["sleep","exhausted","aches"],emotion:"exhaustion",tone:"stress"},{id:32,timestamp:"Jan 30",rawText:"frustrated that my partner doesn't communicate clearly",keywords:["partner","communicate"],emotion:"frustration",tone:"stress"},{id:33,timestamp:"Feb 10",rawText:"had an honest conversation with partner, felt closer",keywords:["partner","honest","closer"],emotion:"love",tone:"resolved"},{id:34,timestamp:"Feb 25",rawText:"partner and I are growing together, grateful for the effort",keywords:["partner","growing","grateful"],emotion:"gratitude",tone:"resolved"},{id:35,timestamp:"Mar 4",rawText:"partner surprised me today, feeling really loved",keywords:["partner","loved","surprised"],emotion:"love",tone:"resolved"},{id:36,timestamp:"Jan 16",rawText:"great conversation with a mentor, clarity about direction",keywords:["mentor","clarity","direction"],emotion:"clarity",tone:"resolved"},{id:37,timestamp:"Feb 1",rawText:"breakthrough moment of clarity about what I actually want",keywords:["clarity","breakthrough","want"],emotion:"clarity",tone:"resolved"},{id:38,timestamp:"Feb 15",rawText:"reading is giving me clarity I didn't know I needed",keywords:["reading","clarity"],emotion:"clarity",tone:"resolved"},{id:39,timestamp:"Mar 2",rawText:"clarity hit me during my run, I know what to do next",keywords:["clarity","run","next"],emotion:"confidence",tone:"resolved"},{id:40,timestamp:"Mar 8",rawText:"therapy session brought so much clarity, feeling lighter",keywords:["clarity","therapy","lighter"],emotion:"clarity",tone:"resolved"},{id:41,timestamp:"Feb 9",rawText:"feeling really isolated lately, nobody checks in",keywords:["isolated","nobody"],emotion:"loneliness",tone:"stress"},{id:42,timestamp:"Feb 23",rawText:"surrounded by people but still feel alone",keywords:["alone","people"],emotion:"loneliness",tone:"stress"},{id:43,timestamp:"Mar 5",rawText:"lonely again tonight, scrolling through old messages",keywords:["lonely","messages"],emotion:"loneliness",tone:"stress"},{id:44,timestamp:"Feb 12",rawText:"feeling hopeful about what I'm building for the first time",keywords:["hopeful","building"],emotion:"hope",tone:"resolved"},{id:45,timestamp:"Feb 27",rawText:"I can see a future I'm excited about, things are shifting",keywords:["future","excited","shifting"],emotion:"hope",tone:"resolved"},{id:46,timestamp:"Mar 9",rawText:"hope is the thread pulling me through, holding onto it",keywords:["hope","thread","holding"],emotion:"hope",tone:"resolved"}],D=Pe.useCallback(k=>{const q={};return k.forEach(B=>B.keywords.forEach(J=>{const ae=vr(J);q[ae]||(q[ae]={label:ae,frequency:0,firstSeen:B.timestamp,lastSeen:B.timestamp,emotion:B.emotion,entries:[],emotionCounts:{},rawKeywords:new Set}),q[ae].frequency++,q[ae].lastSeen=B.timestamp,q[ae].entries.push(B.id),q[ae].rawKeywords.add(J),q[ae].emotionCounts[B.emotion]=(q[ae].emotionCounts[B.emotion]||0)+1})),Object.values(q).forEach(B=>{let J=0,ae=B.emotion;for(const[pe,Se]of Object.entries(B.emotionCounts))Se>J&&(J=Se,ae=pe);B.emotion=ae,B.rawKeywords=[...B.rawKeywords]}),Object.values(q).filter(B=>B.frequency>=1).sort((B,J)=>J.frequency-B.frequency).slice(0,40)},[]),X=Pe.useCallback(k=>{if(e("main"),ht.play("reveal"),k==="explore"){i(U);const q=D(U);s(q);const B=U[U.length-1];B&&B.keywords.length>0&&setTimeout(()=>v(B.keywords[0]),1200)}setTimeout(()=>ht.play("drone"),600)},[D]),Z=Pe.useCallback(()=>{if(!o.trim())return;ht.play("submit");const k=MT(o),q=vT(o),B=Ac(q),J=new Date,ae=`${J.toLocaleString("default",{month:"short"})} ${J.getDate()}`,pe={id:Date.now(),timestamp:ae,rawText:o,keywords:k,emotion:q,tone:B},Se=[...n,pe],Ce={};r.forEach(Qe=>{Ce[Qe.label]=Qe.frequency});const De=D(Se);i(Se),s(De),a(""),y(!0),setTimeout(()=>y(!1),800);let _e=!1;De.forEach(Qe=>{(Ce[Qe.label]||0)<3&&Qe.frequency>=3&&(_e=!0)});const Ne=[];De.forEach(Qe=>{(Ce[Qe.label]||0)<3&&Qe.frequency>=3&&Ne.push(Qe.label)}),Ne.length>0?(ht.play("transform"),E(Ne),setTimeout(()=>E([]),1500)):_e?ht.play("coalesce"):ht.play("impact");const j=vr(k[0]||"thought");if(w({text:j,emotion:q,id:pe.id}),setTimeout(()=>w(null),2800),k.length>0){const Qe=k.reduce((Le,Ee)=>{const $e=vr(Ee),Oe=De.find(A=>A.label===$e);return Oe&&Oe.frequency>(Le.freq||0)?{kw:$e,freq:Oe.frequency}:Le},{kw:j,freq:0});v(null),setTimeout(()=>v(Qe.kw),300);const Me=De.find(Le=>Le.label===Qe.kw);Me&&Me.frequency>=3&&setTimeout(()=>u(Me),2200)}},[o,n,r,D]),[L,H]=Pe.useState(null),V=Pe.useCallback(k=>{if(typeof k=="string"){const q=r.find(B=>B.label===k);q&&u(q)}else if(k.type==="diamond"){H(null);const q=r.find(B=>B.label===k.clusterLabel);q&&u(q)}else if(k.type==="star"){u(null);const q=n.find(B=>B.id===k.thoughtId);q&&H({entry:q,clusterLabel:k.clusterLabel})}},[r,n]);return Pe.useEffect(()=>{const k=document.createElement("link");return k.href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,ital,wght@9..144,0,300;9..144,0,400;9..144,1,300&family=DM+Sans:wght@300;400;500&family=JetBrains+Mono:wght@300;400&display=swap",k.rel="stylesheet",document.head.appendChild(k),()=>{document.head.contains(k)&&document.head.removeChild(k)}},[]),Pe.useEffect(()=>{const k=q=>{q.key==="Escape"&&(p?u(null):L?H(null):T?O(!1):d&&h(!1))};return window.addEventListener("keydown",k),()=>window.removeEventListener("keydown",k)},[p,L,d,T]),t==="intro"?K.jsx(wT,{onEnter:X}):K.jsxs("div",{onClick:k=>{T&&!k.target.closest("[data-panel]")&&!k.target.closest("button")&&O(!1),f&&!k.target.closest("[data-panel]")&&!k.target.closest("button")&&_(!1)},style:{width:"100%",height:"100vh",background:Q.bg,position:"relative",overflow:"hidden",fontFamily:"'DM Sans', system-ui"},children:[K.jsx("div",{style:{position:"absolute",inset:0,pointerEvents:"none",zIndex:1,mixBlendMode:"overlay",opacity:.025,backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`}}),x&&K.jsx("div",{style:{position:"absolute",inset:0,zIndex:50,pointerEvents:"none",background:`radial-gradient(circle at 50% 50%, ${Q.glowAmber} 0%, transparent 50%)`,animation:"flashOut 0.8s ease-out forwards"}}),b&&(()=>{const k=Fi(b.emotion);return K.jsxs("div",{style:{position:"absolute",top:"38%",left:"50%",zIndex:45,pointerEvents:"none",textAlign:"center"},children:[K.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",width:220,height:220,borderRadius:"50%",border:`1px solid ${k.hex}55`,animation:"birthRing 2.4s ease-out forwards"}}),K.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",width:180,height:180,borderRadius:"50%",background:`radial-gradient(circle, ${k.hex}cc 0%, ${k.hex}88 15%, ${k.hex}44 35%, ${k.hex}11 60%, transparent 80%)`,animation:"starBurst 2.8s ease-out forwards"}}),K.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",width:24,height:24,borderRadius:"50%",background:`radial-gradient(circle, #ffffff 0%, ${k.hex} 50%, transparent 100%)`,animation:"birthCore 1.2s ease-out forwards"}}),K.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",width:2,height:120,background:`linear-gradient(to bottom, transparent, ${k.hex}88, transparent)`,animation:"birthRay 2s ease-out forwards"}}),K.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",width:120,height:2,background:`linear-gradient(to right, transparent, ${k.hex}88, transparent)`,animation:"birthRay 2s ease-out forwards"}}),K.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",whiteSpace:"nowrap",fontFamily:"'Fraunces', Georgia, serif",fontSize:22,fontWeight:300,color:k.hex,letterSpacing:"0.08em",textShadow:`0 0 24px ${k.hex}cc, 0 0 48px ${k.hex}66, 0 0 80px ${k.hex}33`,animation:"birthFade 2.8s cubic-bezier(0.22, 1, 0.36, 1) forwards"},children:b.text}),K.jsx("div",{style:{position:"absolute",top:"calc(50% + 32px)",left:"50%",transform:"translateX(-50%)",whiteSpace:"nowrap",fontFamily:"'JetBrains Mono', monospace",fontSize:8,letterSpacing:"0.2em",color:Q.textSecondary,animation:"birthFade 2.8s cubic-bezier(0.22, 1, 0.36, 1) 0.2s forwards",opacity:0},children:k.label.toUpperCase()})]},b.id)})(),K.jsx(TT,{clusters:r,entries:n,onMarkerClick:V,zoomTarget:g,viewMode:S,sceneSettings:$,coalescingLabels:G}),K.jsxs("div",{style:{position:"absolute",top:16,left:"50%",transform:"translateX(-50%)",zIndex:20,display:"flex",alignItems:"center",gap:10,animation:"fadeDown 1s ease 0.4s both",pointerEvents:"none"},children:[K.jsx("div",{style:{fontFamily:"'Fraunces', Georgia, serif",fontSize:22,color:Q.textPrimary,fontWeight:300,textShadow:`0 0 30px ${Q.glowAmber}`},children:"COIL"}),K.jsx("div",{style:{width:1,height:16,background:Q.surfaceLight}}),K.jsxs("div",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:9,color:Q.textMuted,letterSpacing:"0.1em"},children:[n.length," MAPPED"]})]}),K.jsx(RT,{clusters:r,entries:n,isOpen:d,onToggle:()=>{h(!d),ht.play("hover")},onClusterClick:k=>{v(null),setTimeout(()=>v(k),50);const q=r.find(B=>B.label===k);q&&setTimeout(()=>u(q),400)}}),K.jsx(CT,{isOpen:f,onToggle:()=>_(!f),viewMode:S}),K.jsx(PT,{isOpen:T,onToggle:()=>O(!T),settings:$,onChange:oe}),K.jsx("button",{onClick:()=>{P(k=>k==="surface"?"planet":"surface"),ht.play("reveal")},onMouseEnter:()=>ht.play("hover"),style:{position:"absolute",top:18,right:18,zIndex:30,background:`linear-gradient(135deg, ${Q.surface}ee, ${Q.surfaceMid}88)`,border:`1px solid ${Q.surfaceLight}`,borderRadius:12,padding:"9px 16px",cursor:"pointer",backdropFilter:"blur(12px)",display:"flex",alignItems:"center",gap:8,transition:"all 0.3s ease",boxShadow:"0 2px 10px rgba(0,0,0,0.3)"},children:K.jsx("span",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:9,letterSpacing:"0.12em",color:Q.amber},children:S==="surface"?"◈ SURFACE":"◎ PLANET"})}),p&&K.jsx(AT,{cluster:p,entries:n,onClose:()=>u(null)}),L&&!p&&K.jsx(bT,{thought:L,clusters:r,onClose:()=>H(null),onViewCluster:k=>{H(null),u(k)}}),K.jsxs("div",{style:{position:"absolute",bottom:28,left:"50%",transform:"translateX(-50%)",width:"88%",maxWidth:480,zIndex:20,animation:"fadeUp 1s ease 0.6s both"},children:[K.jsx("div",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:8,letterSpacing:"0.25em",color:l?Q.amber:Q.textMuted,marginBottom:10,marginLeft:6,transition:"color 0.5s ease",textShadow:l?`0 0 12px ${Q.amber}44`:"none"},children:"WHAT'S LOOPING?"}),K.jsxs("div",{style:{position:"relative",borderRadius:16},children:[K.jsx("div",{style:{position:"absolute",inset:-1,borderRadius:17,pointerEvents:"none",zIndex:2,border:`1px solid ${l?Q.amber+"55":Q.surfaceLight+"88"}`,boxShadow:l?`0 0 32px ${Q.glowAmber}, inset 0 0 20px ${Q.amber}08`:"0 4px 20px rgba(0,0,0,0.3)",transition:"all 0.5s cubic-bezier(0.22, 1, 0.36, 1)",animation:!x&&!l?"breathe 5s ease-in-out infinite":"none"}}),K.jsx("div",{style:{position:"absolute",top:0,left:20,right:20,height:1,zIndex:3,background:`linear-gradient(90deg, transparent, ${l?Q.amber+"44":Q.surfaceLight+"33"}, transparent)`,borderRadius:1,transition:"all 0.5s ease"}}),K.jsx("textarea",{value:o,onChange:k=>a(k.target.value),onFocus:()=>c(!0),onBlur:()=>c(!1),onKeyDown:k=>{k.key==="Enter"&&!k.shiftKey&&(k.preventDefault(),Z())},placeholder:"dump whatever is on your mind...",rows:2,style:{width:"100%",background:`linear-gradient(180deg, ${Q.surface}ee 0%, ${Q.bg}dd 100%)`,backdropFilter:"blur(24px)",border:"none",borderRadius:16,padding:"18px 56px 18px 20px",color:Q.textPrimary,fontFamily:"'DM Sans', system-ui",fontSize:14,lineHeight:1.7,resize:"none",outline:"none",boxSizing:"border-box",letterSpacing:"0.01em"}}),K.jsx("button",{onClick:Z,onMouseEnter:()=>o.trim()&&ht.play("hover"),style:{position:"absolute",right:14,bottom:14,width:36,height:36,borderRadius:12,border:o.trim()?`1px solid ${Q.amber}44`:`1px solid ${Q.surfaceLight}`,cursor:o.trim()?"pointer":"default",background:o.trim()?`linear-gradient(135deg, ${Q.amber}, ${Q.amberDim})`:`linear-gradient(135deg, ${Q.surfaceLight}, ${Q.surface})`,color:o.trim()?Q.bg:Q.textMuted,display:"flex",alignItems:"center",justifyContent:"center",fontSize:15,fontWeight:500,transition:"all 0.3s cubic-bezier(0.22, 1, 0.36, 1)",zIndex:3,boxShadow:o.trim()?`0 4px 16px ${Q.amber}33, 0 0 8px ${Q.amber}22`:"0 2px 6px rgba(0,0,0,0.2)",transform:o.trim()?"scale(1)":"scale(0.95)"},children:"↑"})]})]}),K.jsx("div",{style:{position:"absolute",bottom:5,left:"50%",transform:"translateX(-50%)",fontFamily:"'JetBrains Mono', monospace",fontSize:7,color:Q.textMuted,letterSpacing:"0.25em",opacity:.35,zIndex:15,pointerEvents:"none"},children:"A LIRIO LABS INSTRUMENT"}),K.jsx("style",{children:`
        @keyframes breathe { 0%,100%{border-color:${Q.surfaceLight};box-shadow:none} 50%{border-color:${Q.amber}22;box-shadow:0 0 18px ${Q.glowAmber}} }
        @keyframes fadeUp { from{opacity:0;transform:translateX(-50%) translateY(20px)} to{opacity:1;transform:translateX(-50%) translateY(0)} }
        @keyframes fadeDown { from{opacity:0;transform:translateY(-12px)} to{opacity:1;transform:translateY(0)} }
        @keyframes flashOut { 0%{opacity:0.5} 100%{opacity:0} }
        @keyframes birthFade { 0%{opacity:0;transform:translate(-50%,-50%) scale(0.6)} 12%{opacity:1;transform:translate(-50%,-50%) scale(1.05)} 20%{transform:translate(-50%,-50%) scale(1)} 75%{opacity:0.9} 100%{opacity:0;transform:translate(-50%,-50%) scale(1) translateY(-18px)} }
        @keyframes starBurst { 0%{opacity:0;transform:translate(-50%,-50%) scale(0)} 15%{opacity:1;transform:translate(-50%,-50%) scale(1.2)} 30%{opacity:0.9;transform:translate(-50%,-50%) scale(0.85)} 50%{opacity:0.6;transform:translate(-50%,-50%) scale(1.6)} 100%{opacity:0;transform:translate(-50%,-50%) scale(2.5)} }
        @keyframes birthRing { 0%{opacity:0;transform:translate(-50%,-50%) scale(0)} 20%{opacity:0.8;transform:translate(-50%,-50%) scale(0.8)} 60%{opacity:0.3;transform:translate(-50%,-50%) scale(1.5)} 100%{opacity:0;transform:translate(-50%,-50%) scale(2.2)} }
        @keyframes birthCore { 0%{opacity:0;transform:translate(-50%,-50%) scale(0)} 10%{opacity:1;transform:translate(-50%,-50%) scale(2)} 40%{opacity:0.8;transform:translate(-50%,-50%) scale(1)} 100%{opacity:0;transform:translate(-50%,-50%) scale(0)} }
        @keyframes birthRay { 0%{opacity:0;transform:translate(-50%,-50%) scaleY(0)} 15%{opacity:0.8;transform:translate(-50%,-50%) scaleY(1.2)} 50%{opacity:0.4;transform:translate(-50%,-50%) scaleY(1)} 100%{opacity:0;transform:translate(-50%,-50%) scaleY(0.3)} }
        @keyframes popupIn { 0%{opacity:0;transform:translate(-50%,-50%) scale(0.92)} 100%{opacity:1;transform:translate(-50%,-50%) scale(1)} }
        textarea::placeholder{color:${Q.textMuted};font-style:italic}
        ::-webkit-scrollbar{width:3px} ::-webkit-scrollbar-track{background:transparent} ::-webkit-scrollbar-thumb{background:${Q.surfaceLight};border-radius:3px}
        input[type="range"]::-webkit-slider-thumb{-webkit-appearance:none;width:10px;height:10px;border-radius:50%;background:${Q.amber};cursor:pointer;border:none;box-shadow:0 0 6px ${Q.amber}44}
        input[type="range"]::-moz-range-thumb{width:10px;height:10px;border-radius:50%;background:${Q.amber};cursor:pointer;border:none}
        *{box-sizing:border-box}
      `})]})}ku.createRoot(document.getElementById("root")).render(K.jsx(jv.StrictMode,{children:K.jsx(LT,{})}));
