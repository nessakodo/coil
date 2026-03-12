(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function hv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var _m={exports:{}},Xl={},ym={exports:{}},rt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ta=Symbol.for("react.element"),pv=Symbol.for("react.portal"),mv=Symbol.for("react.fragment"),gv=Symbol.for("react.strict_mode"),vv=Symbol.for("react.profiler"),_v=Symbol.for("react.provider"),yv=Symbol.for("react.context"),xv=Symbol.for("react.forward_ref"),Sv=Symbol.for("react.suspense"),Mv=Symbol.for("react.memo"),Ev=Symbol.for("react.lazy"),Dd=Symbol.iterator;function wv(t){return t===null||typeof t!="object"?null:(t=Dd&&t[Dd]||t["@@iterator"],typeof t=="function"?t:null)}var xm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Sm=Object.assign,Mm={};function Ys(t,e,n){this.props=t,this.context=e,this.refs=Mm,this.updater=n||xm}Ys.prototype.isReactComponent={};Ys.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ys.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Em(){}Em.prototype=Ys.prototype;function Pf(t,e,n){this.props=t,this.context=e,this.refs=Mm,this.updater=n||xm}var Lf=Pf.prototype=new Em;Lf.constructor=Pf;Sm(Lf,Ys.prototype);Lf.isPureReactComponent=!0;var Ud=Array.isArray,wm=Object.prototype.hasOwnProperty,Df={current:null},Tm={key:!0,ref:!0,__self:!0,__source:!0};function Am(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)wm.call(e,i)&&!Tm.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ta,type:t,key:s,ref:o,props:r,_owner:Df.current}}function Tv(t,e){return{$$typeof:ta,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Uf(t){return typeof t=="object"&&t!==null&&t.$$typeof===ta}function Av(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Id=/\/+/g;function mc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Av(""+t.key):e.toString(36)}function tl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ta:case pv:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+mc(o,0):i,Ud(r)?(n="",t!=null&&(n=t.replace(Id,"$&/")+"/"),tl(r,e,n,"",function(c){return c})):r!=null&&(Uf(r)&&(r=Tv(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Id,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Ud(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+mc(s,a);o+=tl(s,e,n,l,r)}else if(l=wv(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+mc(s,a++),o+=tl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ca(t,e,n){if(t==null)return t;var i=[],r=0;return tl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function bv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var fn={current:null},nl={transition:null},Rv={ReactCurrentDispatcher:fn,ReactCurrentBatchConfig:nl,ReactCurrentOwner:Df};function bm(){throw Error("act(...) is not supported in production builds of React.")}rt.Children={map:ca,forEach:function(t,e,n){ca(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ca(t,function(){e++}),e},toArray:function(t){return ca(t,function(e){return e})||[]},only:function(t){if(!Uf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};rt.Component=Ys;rt.Fragment=mv;rt.Profiler=vv;rt.PureComponent=Pf;rt.StrictMode=gv;rt.Suspense=Sv;rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rv;rt.act=bm;rt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Sm({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Df.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)wm.call(e,l)&&!Tm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ta,type:t.type,key:r,ref:s,props:i,_owner:o}};rt.createContext=function(t){return t={$$typeof:yv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:_v,_context:t},t.Consumer=t};rt.createElement=Am;rt.createFactory=function(t){var e=Am.bind(null,t);return e.type=t,e};rt.createRef=function(){return{current:null}};rt.forwardRef=function(t){return{$$typeof:xv,render:t}};rt.isValidElement=Uf;rt.lazy=function(t){return{$$typeof:Ev,_payload:{_status:-1,_result:t},_init:bv}};rt.memo=function(t,e){return{$$typeof:Mv,type:t,compare:e===void 0?null:e}};rt.startTransition=function(t){var e=nl.transition;nl.transition={};try{t()}finally{nl.transition=e}};rt.unstable_act=bm;rt.useCallback=function(t,e){return fn.current.useCallback(t,e)};rt.useContext=function(t){return fn.current.useContext(t)};rt.useDebugValue=function(){};rt.useDeferredValue=function(t){return fn.current.useDeferredValue(t)};rt.useEffect=function(t,e){return fn.current.useEffect(t,e)};rt.useId=function(){return fn.current.useId()};rt.useImperativeHandle=function(t,e,n){return fn.current.useImperativeHandle(t,e,n)};rt.useInsertionEffect=function(t,e){return fn.current.useInsertionEffect(t,e)};rt.useLayoutEffect=function(t,e){return fn.current.useLayoutEffect(t,e)};rt.useMemo=function(t,e){return fn.current.useMemo(t,e)};rt.useReducer=function(t,e,n){return fn.current.useReducer(t,e,n)};rt.useRef=function(t){return fn.current.useRef(t)};rt.useState=function(t){return fn.current.useState(t)};rt.useSyncExternalStore=function(t,e,n){return fn.current.useSyncExternalStore(t,e,n)};rt.useTransition=function(){return fn.current.useTransition()};rt.version="18.3.1";ym.exports=rt;var ke=ym.exports;const Cv=hv(ke);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pv=ke,Lv=Symbol.for("react.element"),Dv=Symbol.for("react.fragment"),Uv=Object.prototype.hasOwnProperty,Iv=Pv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Nv={key:!0,ref:!0,__self:!0,__source:!0};function Rm(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Uv.call(e,i)&&!Nv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Lv,type:t,key:s,ref:o,props:r,_owner:Iv.current}}Xl.Fragment=Dv;Xl.jsx=Rm;Xl.jsxs=Rm;_m.exports=Xl;var ae=_m.exports,Eu={},Cm={exports:{}},Dn={},Pm={exports:{}},Lm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,k){var z=D.length;D.push(k);e:for(;0<z;){var Z=z-1>>>1,Q=D[Z];if(0<r(Q,k))D[Z]=k,D[z]=Q,z=Z;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var k=D[0],z=D.pop();if(z!==k){D[0]=z;e:for(var Z=0,Q=D.length,Y=Q>>>1;Z<Y;){var K=2*(Z+1)-1,ue=D[K],le=K+1,me=D[le];if(0>r(ue,z))le<Q&&0>r(me,ue)?(D[Z]=me,D[le]=z,Z=le):(D[Z]=ue,D[K]=z,Z=K);else if(le<Q&&0>r(me,z))D[Z]=me,D[le]=z,Z=le;else break e}}return k}function r(D,k){var z=D.sortIndex-k.sortIndex;return z!==0?z:D.id-k.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,h=null,d=3,g=!1,y=!1,_=!1,p=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(D){for(var k=n(c);k!==null;){if(k.callback===null)i(c);else if(k.startTime<=D)i(c),k.sortIndex=k.expirationTime,e(l,k);else break;k=n(c)}}function x(D){if(_=!1,m(D),!y)if(n(l)!==null)y=!0,W(C);else{var k=n(c);k!==null&&$(x,k.startTime-D)}}function C(D,k){y=!1,_&&(_=!1,u(N),N=-1),g=!0;var z=d;try{for(m(k),h=n(l);h!==null&&(!(h.expirationTime>k)||D&&!P());){var Z=h.callback;if(typeof Z=="function"){h.callback=null,d=h.priorityLevel;var Q=Z(h.expirationTime<=k);k=t.unstable_now(),typeof Q=="function"?h.callback=Q:h===n(l)&&i(l),m(k)}else i(l);h=n(l)}if(h!==null)var Y=!0;else{var K=n(c);K!==null&&$(x,K.startTime-k),Y=!1}return Y}finally{h=null,d=z,g=!1}}var b=!1,w=null,N=-1,M=5,E=-1;function P(){return!(t.unstable_now()-E<M)}function j(){if(w!==null){var D=t.unstable_now();E=D;var k=!0;try{k=w(!0,D)}finally{k?B():(b=!1,w=null)}}else b=!1}var B;if(typeof v=="function")B=function(){v(j)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,U=R.port2;R.port1.onmessage=j,B=function(){U.postMessage(null)}}else B=function(){p(j,0)};function W(D){w=D,b||(b=!0,B())}function $(D,k){N=p(function(){D(t.unstable_now())},k)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,W(C))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(d){case 1:case 2:case 3:var k=3;break;default:k=d}var z=d;d=k;try{return D()}finally{d=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,k){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var z=d;d=D;try{return k()}finally{d=z}},t.unstable_scheduleCallback=function(D,k,z){var Z=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?Z+z:Z):z=Z,D){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=z+Q,D={id:f++,callback:k,priorityLevel:D,startTime:z,expirationTime:Q,sortIndex:-1},z>Z?(D.sortIndex=z,e(c,D),n(l)===null&&D===n(c)&&(_?(u(N),N=-1):_=!0,$(x,z-Z))):(D.sortIndex=Q,e(l,D),y||g||(y=!0,W(C))),D},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(D){var k=d;return function(){var z=d;d=k;try{return D.apply(this,arguments)}finally{d=z}}}})(Lm);Pm.exports=Lm;var Fv=Pm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ov=ke,Ln=Fv;function re(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Dm=new Set,No={};function Vr(t,e){Fs(t,e),Fs(t+"Capture",e)}function Fs(t,e){for(No[t]=e,t=0;t<e.length;t++)Dm.add(e[t])}var Ri=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wu=Object.prototype.hasOwnProperty,kv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Nd={},Fd={};function zv(t){return wu.call(Fd,t)?!0:wu.call(Nd,t)?!1:kv.test(t)?Fd[t]=!0:(Nd[t]=!0,!1)}function Bv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Hv(t,e,n,i){if(e===null||typeof e>"u"||Bv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function dn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Zt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Zt[t]=new dn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Zt[e]=new dn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Zt[t]=new dn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Zt[t]=new dn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Zt[t]=new dn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Zt[t]=new dn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Zt[t]=new dn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Zt[t]=new dn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Zt[t]=new dn(t,5,!1,t.toLowerCase(),null,!1,!1)});var If=/[\-:]([a-z])/g;function Nf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(If,Nf);Zt[e]=new dn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(If,Nf);Zt[e]=new dn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(If,Nf);Zt[e]=new dn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Zt[t]=new dn(t,1,!1,t.toLowerCase(),null,!1,!1)});Zt.xlinkHref=new dn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Zt[t]=new dn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ff(t,e,n,i){var r=Zt.hasOwnProperty(e)?Zt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Hv(e,n,r,i)&&(n=null),i||r===null?zv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ui=Ov.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ua=Symbol.for("react.element"),hs=Symbol.for("react.portal"),ps=Symbol.for("react.fragment"),Of=Symbol.for("react.strict_mode"),Tu=Symbol.for("react.profiler"),Um=Symbol.for("react.provider"),Im=Symbol.for("react.context"),kf=Symbol.for("react.forward_ref"),Au=Symbol.for("react.suspense"),bu=Symbol.for("react.suspense_list"),zf=Symbol.for("react.memo"),Vi=Symbol.for("react.lazy"),Nm=Symbol.for("react.offscreen"),Od=Symbol.iterator;function eo(t){return t===null||typeof t!="object"?null:(t=Od&&t[Od]||t["@@iterator"],typeof t=="function"?t:null)}var Pt=Object.assign,gc;function vo(t){if(gc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);gc=e&&e[1]||""}return`
`+gc+t}var vc=!1;function _c(t,e){if(!t||vc)return"";vc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{vc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?vo(t):""}function Gv(t){switch(t.tag){case 5:return vo(t.type);case 16:return vo("Lazy");case 13:return vo("Suspense");case 19:return vo("SuspenseList");case 0:case 2:case 15:return t=_c(t.type,!1),t;case 11:return t=_c(t.type.render,!1),t;case 1:return t=_c(t.type,!0),t;default:return""}}function Ru(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ps:return"Fragment";case hs:return"Portal";case Tu:return"Profiler";case Of:return"StrictMode";case Au:return"Suspense";case bu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Im:return(t.displayName||"Context")+".Consumer";case Um:return(t._context.displayName||"Context")+".Provider";case kf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case zf:return e=t.displayName||null,e!==null?e:Ru(t.type)||"Memo";case Vi:e=t._payload,t=t._init;try{return Ru(t(e))}catch{}}return null}function Vv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ru(e);case 8:return e===Of?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function dr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Fm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Wv(t){var e=Fm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function fa(t){t._valueTracker||(t._valueTracker=Wv(t))}function Om(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Fm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function pl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Cu(t,e){var n=e.checked;return Pt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function kd(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=dr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function km(t,e){e=e.checked,e!=null&&Ff(t,"checked",e,!1)}function Pu(t,e){km(t,e);var n=dr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Lu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Lu(t,e.type,dr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function zd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Lu(t,e,n){(e!=="number"||pl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var _o=Array.isArray;function Rs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+dr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Du(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return Pt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Bd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(re(92));if(_o(n)){if(1<n.length)throw Error(re(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:dr(n)}}function zm(t,e){var n=dr(e.value),i=dr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Hd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Bm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Uu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Bm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var da,Hm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(da=da||document.createElement("div"),da.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=da.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Fo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Eo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xv=["Webkit","ms","Moz","O"];Object.keys(Eo).forEach(function(t){Xv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Eo[e]=Eo[t]})});function Gm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Eo.hasOwnProperty(t)&&Eo[t]?(""+e).trim():e+"px"}function Vm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Gm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var jv=Pt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Iu(t,e){if(e){if(jv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function Nu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fu=null;function Bf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ou=null,Cs=null,Ps=null;function Gd(t){if(t=ra(t)){if(typeof Ou!="function")throw Error(re(280));var e=t.stateNode;e&&(e=Kl(e),Ou(t.stateNode,t.type,e))}}function Wm(t){Cs?Ps?Ps.push(t):Ps=[t]:Cs=t}function Xm(){if(Cs){var t=Cs,e=Ps;if(Ps=Cs=null,Gd(t),e)for(t=0;t<e.length;t++)Gd(e[t])}}function jm(t,e){return t(e)}function Ym(){}var yc=!1;function qm(t,e,n){if(yc)return t(e,n);yc=!0;try{return jm(t,e,n)}finally{yc=!1,(Cs!==null||Ps!==null)&&(Ym(),Xm())}}function Oo(t,e){var n=t.stateNode;if(n===null)return null;var i=Kl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(re(231,e,typeof n));return n}var ku=!1;if(Ri)try{var to={};Object.defineProperty(to,"passive",{get:function(){ku=!0}}),window.addEventListener("test",to,to),window.removeEventListener("test",to,to)}catch{ku=!1}function Yv(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var wo=!1,ml=null,gl=!1,zu=null,qv={onError:function(t){wo=!0,ml=t}};function $v(t,e,n,i,r,s,o,a,l){wo=!1,ml=null,Yv.apply(qv,arguments)}function Kv(t,e,n,i,r,s,o,a,l){if($v.apply(this,arguments),wo){if(wo){var c=ml;wo=!1,ml=null}else throw Error(re(198));gl||(gl=!0,zu=c)}}function Wr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function $m(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Vd(t){if(Wr(t)!==t)throw Error(re(188))}function Zv(t){var e=t.alternate;if(!e){if(e=Wr(t),e===null)throw Error(re(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Vd(r),t;if(s===i)return Vd(r),e;s=s.sibling}throw Error(re(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(re(189))}}if(n.alternate!==i)throw Error(re(190))}if(n.tag!==3)throw Error(re(188));return n.stateNode.current===n?t:e}function Km(t){return t=Zv(t),t!==null?Zm(t):null}function Zm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Zm(t);if(e!==null)return e;t=t.sibling}return null}var Jm=Ln.unstable_scheduleCallback,Wd=Ln.unstable_cancelCallback,Jv=Ln.unstable_shouldYield,Qv=Ln.unstable_requestPaint,Ut=Ln.unstable_now,e_=Ln.unstable_getCurrentPriorityLevel,Hf=Ln.unstable_ImmediatePriority,Qm=Ln.unstable_UserBlockingPriority,vl=Ln.unstable_NormalPriority,t_=Ln.unstable_LowPriority,eg=Ln.unstable_IdlePriority,jl=null,ui=null;function n_(t){if(ui&&typeof ui.onCommitFiberRoot=="function")try{ui.onCommitFiberRoot(jl,t,void 0,(t.current.flags&128)===128)}catch{}}var ni=Math.clz32?Math.clz32:s_,i_=Math.log,r_=Math.LN2;function s_(t){return t>>>=0,t===0?32:31-(i_(t)/r_|0)|0}var ha=64,pa=4194304;function yo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function _l(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=yo(a):(s&=o,s!==0&&(i=yo(s)))}else o=n&~r,o!==0?i=yo(o):s!==0&&(i=yo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ni(e),r=1<<n,i|=t[n],e&=~r;return i}function o_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function a_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ni(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=o_(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Bu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function tg(){var t=ha;return ha<<=1,!(ha&4194240)&&(ha=64),t}function xc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function na(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ni(e),t[e]=n}function l_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ni(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Gf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ni(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var dt=0;function ng(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ig,Vf,rg,sg,og,Hu=!1,ma=[],Ji=null,Qi=null,er=null,ko=new Map,zo=new Map,Xi=[],c_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xd(t,e){switch(t){case"focusin":case"focusout":Ji=null;break;case"dragenter":case"dragleave":Qi=null;break;case"mouseover":case"mouseout":er=null;break;case"pointerover":case"pointerout":ko.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":zo.delete(e.pointerId)}}function no(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ra(e),e!==null&&Vf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function u_(t,e,n,i,r){switch(e){case"focusin":return Ji=no(Ji,t,e,n,i,r),!0;case"dragenter":return Qi=no(Qi,t,e,n,i,r),!0;case"mouseover":return er=no(er,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ko.set(s,no(ko.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,zo.set(s,no(zo.get(s)||null,t,e,n,i,r)),!0}return!1}function ag(t){var e=Cr(t.target);if(e!==null){var n=Wr(e);if(n!==null){if(e=n.tag,e===13){if(e=$m(n),e!==null){t.blockedOn=e,og(t.priority,function(){rg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function il(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Gu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Fu=i,n.target.dispatchEvent(i),Fu=null}else return e=ra(n),e!==null&&Vf(e),t.blockedOn=n,!1;e.shift()}return!0}function jd(t,e,n){il(t)&&n.delete(e)}function f_(){Hu=!1,Ji!==null&&il(Ji)&&(Ji=null),Qi!==null&&il(Qi)&&(Qi=null),er!==null&&il(er)&&(er=null),ko.forEach(jd),zo.forEach(jd)}function io(t,e){t.blockedOn===e&&(t.blockedOn=null,Hu||(Hu=!0,Ln.unstable_scheduleCallback(Ln.unstable_NormalPriority,f_)))}function Bo(t){function e(r){return io(r,t)}if(0<ma.length){io(ma[0],t);for(var n=1;n<ma.length;n++){var i=ma[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ji!==null&&io(Ji,t),Qi!==null&&io(Qi,t),er!==null&&io(er,t),ko.forEach(e),zo.forEach(e),n=0;n<Xi.length;n++)i=Xi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Xi.length&&(n=Xi[0],n.blockedOn===null);)ag(n),n.blockedOn===null&&Xi.shift()}var Ls=Ui.ReactCurrentBatchConfig,yl=!0;function d_(t,e,n,i){var r=dt,s=Ls.transition;Ls.transition=null;try{dt=1,Wf(t,e,n,i)}finally{dt=r,Ls.transition=s}}function h_(t,e,n,i){var r=dt,s=Ls.transition;Ls.transition=null;try{dt=4,Wf(t,e,n,i)}finally{dt=r,Ls.transition=s}}function Wf(t,e,n,i){if(yl){var r=Gu(t,e,n,i);if(r===null)Pc(t,e,i,xl,n),Xd(t,i);else if(u_(r,t,e,n,i))i.stopPropagation();else if(Xd(t,i),e&4&&-1<c_.indexOf(t)){for(;r!==null;){var s=ra(r);if(s!==null&&ig(s),s=Gu(t,e,n,i),s===null&&Pc(t,e,i,xl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Pc(t,e,i,null,n)}}var xl=null;function Gu(t,e,n,i){if(xl=null,t=Bf(i),t=Cr(t),t!==null)if(e=Wr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=$m(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return xl=t,null}function lg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(e_()){case Hf:return 1;case Qm:return 4;case vl:case t_:return 16;case eg:return 536870912;default:return 16}default:return 16}}var Yi=null,Xf=null,rl=null;function cg(){if(rl)return rl;var t,e=Xf,n=e.length,i,r="value"in Yi?Yi.value:Yi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return rl=r.slice(t,1<i?1-i:void 0)}function sl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ga(){return!0}function Yd(){return!1}function Un(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ga:Yd,this.isPropagationStopped=Yd,this}return Pt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ga)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ga)},persist:function(){},isPersistent:ga}),e}var qs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jf=Un(qs),ia=Pt({},qs,{view:0,detail:0}),p_=Un(ia),Sc,Mc,ro,Yl=Pt({},ia,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ro&&(ro&&t.type==="mousemove"?(Sc=t.screenX-ro.screenX,Mc=t.screenY-ro.screenY):Mc=Sc=0,ro=t),Sc)},movementY:function(t){return"movementY"in t?t.movementY:Mc}}),qd=Un(Yl),m_=Pt({},Yl,{dataTransfer:0}),g_=Un(m_),v_=Pt({},ia,{relatedTarget:0}),Ec=Un(v_),__=Pt({},qs,{animationName:0,elapsedTime:0,pseudoElement:0}),y_=Un(__),x_=Pt({},qs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),S_=Un(x_),M_=Pt({},qs,{data:0}),$d=Un(M_),E_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},w_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},T_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function A_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=T_[t])?!!e[t]:!1}function Yf(){return A_}var b_=Pt({},ia,{key:function(t){if(t.key){var e=E_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=sl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?w_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yf,charCode:function(t){return t.type==="keypress"?sl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?sl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),R_=Un(b_),C_=Pt({},Yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kd=Un(C_),P_=Pt({},ia,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yf}),L_=Un(P_),D_=Pt({},qs,{propertyName:0,elapsedTime:0,pseudoElement:0}),U_=Un(D_),I_=Pt({},Yl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),N_=Un(I_),F_=[9,13,27,32],qf=Ri&&"CompositionEvent"in window,To=null;Ri&&"documentMode"in document&&(To=document.documentMode);var O_=Ri&&"TextEvent"in window&&!To,ug=Ri&&(!qf||To&&8<To&&11>=To),Zd=" ",Jd=!1;function fg(t,e){switch(t){case"keyup":return F_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ms=!1;function k_(t,e){switch(t){case"compositionend":return dg(e);case"keypress":return e.which!==32?null:(Jd=!0,Zd);case"textInput":return t=e.data,t===Zd&&Jd?null:t;default:return null}}function z_(t,e){if(ms)return t==="compositionend"||!qf&&fg(t,e)?(t=cg(),rl=Xf=Yi=null,ms=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ug&&e.locale!=="ko"?null:e.data;default:return null}}var B_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!B_[t.type]:e==="textarea"}function hg(t,e,n,i){Wm(i),e=Sl(e,"onChange"),0<e.length&&(n=new jf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ao=null,Ho=null;function H_(t){wg(t,0)}function ql(t){var e=_s(t);if(Om(e))return t}function G_(t,e){if(t==="change")return e}var pg=!1;if(Ri){var wc;if(Ri){var Tc="oninput"in document;if(!Tc){var eh=document.createElement("div");eh.setAttribute("oninput","return;"),Tc=typeof eh.oninput=="function"}wc=Tc}else wc=!1;pg=wc&&(!document.documentMode||9<document.documentMode)}function th(){Ao&&(Ao.detachEvent("onpropertychange",mg),Ho=Ao=null)}function mg(t){if(t.propertyName==="value"&&ql(Ho)){var e=[];hg(e,Ho,t,Bf(t)),qm(H_,e)}}function V_(t,e,n){t==="focusin"?(th(),Ao=e,Ho=n,Ao.attachEvent("onpropertychange",mg)):t==="focusout"&&th()}function W_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ql(Ho)}function X_(t,e){if(t==="click")return ql(e)}function j_(t,e){if(t==="input"||t==="change")return ql(e)}function Y_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ri=typeof Object.is=="function"?Object.is:Y_;function Go(t,e){if(ri(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!wu.call(e,r)||!ri(t[r],e[r]))return!1}return!0}function nh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ih(t,e){var n=nh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=nh(n)}}function gg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?gg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function vg(){for(var t=window,e=pl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=pl(t.document)}return e}function $f(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function q_(t){var e=vg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&gg(n.ownerDocument.documentElement,n)){if(i!==null&&$f(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=ih(n,s);var o=ih(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var $_=Ri&&"documentMode"in document&&11>=document.documentMode,gs=null,Vu=null,bo=null,Wu=!1;function rh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Wu||gs==null||gs!==pl(i)||(i=gs,"selectionStart"in i&&$f(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),bo&&Go(bo,i)||(bo=i,i=Sl(Vu,"onSelect"),0<i.length&&(e=new jf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=gs)))}function va(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var vs={animationend:va("Animation","AnimationEnd"),animationiteration:va("Animation","AnimationIteration"),animationstart:va("Animation","AnimationStart"),transitionend:va("Transition","TransitionEnd")},Ac={},_g={};Ri&&(_g=document.createElement("div").style,"AnimationEvent"in window||(delete vs.animationend.animation,delete vs.animationiteration.animation,delete vs.animationstart.animation),"TransitionEvent"in window||delete vs.transitionend.transition);function $l(t){if(Ac[t])return Ac[t];if(!vs[t])return t;var e=vs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in _g)return Ac[t]=e[n];return t}var yg=$l("animationend"),xg=$l("animationiteration"),Sg=$l("animationstart"),Mg=$l("transitionend"),Eg=new Map,sh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pr(t,e){Eg.set(t,e),Vr(e,[t])}for(var bc=0;bc<sh.length;bc++){var Rc=sh[bc],K_=Rc.toLowerCase(),Z_=Rc[0].toUpperCase()+Rc.slice(1);pr(K_,"on"+Z_)}pr(yg,"onAnimationEnd");pr(xg,"onAnimationIteration");pr(Sg,"onAnimationStart");pr("dblclick","onDoubleClick");pr("focusin","onFocus");pr("focusout","onBlur");pr(Mg,"onTransitionEnd");Fs("onMouseEnter",["mouseout","mouseover"]);Fs("onMouseLeave",["mouseout","mouseover"]);Fs("onPointerEnter",["pointerout","pointerover"]);Fs("onPointerLeave",["pointerout","pointerover"]);Vr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),J_=new Set("cancel close invalid load scroll toggle".split(" ").concat(xo));function oh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Kv(i,e,void 0,t),t.currentTarget=null}function wg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;oh(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;oh(r,a,c),s=l}}}if(gl)throw t=zu,gl=!1,zu=null,t}function Mt(t,e){var n=e[$u];n===void 0&&(n=e[$u]=new Set);var i=t+"__bubble";n.has(i)||(Tg(e,t,2,!1),n.add(i))}function Cc(t,e,n){var i=0;e&&(i|=4),Tg(n,t,i,e)}var _a="_reactListening"+Math.random().toString(36).slice(2);function Vo(t){if(!t[_a]){t[_a]=!0,Dm.forEach(function(n){n!=="selectionchange"&&(J_.has(n)||Cc(n,!1,t),Cc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[_a]||(e[_a]=!0,Cc("selectionchange",!1,e))}}function Tg(t,e,n,i){switch(lg(e)){case 1:var r=d_;break;case 4:r=h_;break;default:r=Wf}n=r.bind(null,e,n,t),r=void 0,!ku||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Pc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Cr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}qm(function(){var c=s,f=Bf(n),h=[];e:{var d=Eg.get(t);if(d!==void 0){var g=jf,y=t;switch(t){case"keypress":if(sl(n)===0)break e;case"keydown":case"keyup":g=R_;break;case"focusin":y="focus",g=Ec;break;case"focusout":y="blur",g=Ec;break;case"beforeblur":case"afterblur":g=Ec;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=qd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=g_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=L_;break;case yg:case xg:case Sg:g=y_;break;case Mg:g=U_;break;case"scroll":g=p_;break;case"wheel":g=N_;break;case"copy":case"cut":case"paste":g=S_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Kd}var _=(e&4)!==0,p=!_&&t==="scroll",u=_?d!==null?d+"Capture":null:d;_=[];for(var v=c,m;v!==null;){m=v;var x=m.stateNode;if(m.tag===5&&x!==null&&(m=x,u!==null&&(x=Oo(v,u),x!=null&&_.push(Wo(v,x,m)))),p)break;v=v.return}0<_.length&&(d=new g(d,y,null,n,f),h.push({event:d,listeners:_}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&n!==Fu&&(y=n.relatedTarget||n.fromElement)&&(Cr(y)||y[Ci]))break e;if((g||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=c,y=y?Cr(y):null,y!==null&&(p=Wr(y),y!==p||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=c),g!==y)){if(_=qd,x="onMouseLeave",u="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(_=Kd,x="onPointerLeave",u="onPointerEnter",v="pointer"),p=g==null?d:_s(g),m=y==null?d:_s(y),d=new _(x,v+"leave",g,n,f),d.target=p,d.relatedTarget=m,x=null,Cr(f)===c&&(_=new _(u,v+"enter",y,n,f),_.target=m,_.relatedTarget=p,x=_),p=x,g&&y)t:{for(_=g,u=y,v=0,m=_;m;m=jr(m))v++;for(m=0,x=u;x;x=jr(x))m++;for(;0<v-m;)_=jr(_),v--;for(;0<m-v;)u=jr(u),m--;for(;v--;){if(_===u||u!==null&&_===u.alternate)break t;_=jr(_),u=jr(u)}_=null}else _=null;g!==null&&ah(h,d,g,_,!1),y!==null&&p!==null&&ah(h,p,y,_,!0)}}e:{if(d=c?_s(c):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var C=G_;else if(Qd(d))if(pg)C=j_;else{C=W_;var b=V_}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(C=X_);if(C&&(C=C(t,c))){hg(h,C,n,f);break e}b&&b(t,d,c),t==="focusout"&&(b=d._wrapperState)&&b.controlled&&d.type==="number"&&Lu(d,"number",d.value)}switch(b=c?_s(c):window,t){case"focusin":(Qd(b)||b.contentEditable==="true")&&(gs=b,Vu=c,bo=null);break;case"focusout":bo=Vu=gs=null;break;case"mousedown":Wu=!0;break;case"contextmenu":case"mouseup":case"dragend":Wu=!1,rh(h,n,f);break;case"selectionchange":if($_)break;case"keydown":case"keyup":rh(h,n,f)}var w;if(qf)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else ms?fg(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(ug&&n.locale!=="ko"&&(ms||N!=="onCompositionStart"?N==="onCompositionEnd"&&ms&&(w=cg()):(Yi=f,Xf="value"in Yi?Yi.value:Yi.textContent,ms=!0)),b=Sl(c,N),0<b.length&&(N=new $d(N,t,null,n,f),h.push({event:N,listeners:b}),w?N.data=w:(w=dg(n),w!==null&&(N.data=w)))),(w=O_?k_(t,n):z_(t,n))&&(c=Sl(c,"onBeforeInput"),0<c.length&&(f=new $d("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:c}),f.data=w))}wg(h,e)})}function Wo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Sl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Oo(t,n),s!=null&&i.unshift(Wo(t,s,r)),s=Oo(t,e),s!=null&&i.push(Wo(t,s,r))),t=t.return}return i}function jr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ah(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Oo(n,s),l!=null&&o.unshift(Wo(n,l,a))):r||(l=Oo(n,s),l!=null&&o.push(Wo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Q_=/\r\n?/g,ey=/\u0000|\uFFFD/g;function lh(t){return(typeof t=="string"?t:""+t).replace(Q_,`
`).replace(ey,"")}function ya(t,e,n){if(e=lh(e),lh(t)!==e&&n)throw Error(re(425))}function Ml(){}var Xu=null,ju=null;function Yu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var qu=typeof setTimeout=="function"?setTimeout:void 0,ty=typeof clearTimeout=="function"?clearTimeout:void 0,ch=typeof Promise=="function"?Promise:void 0,ny=typeof queueMicrotask=="function"?queueMicrotask:typeof ch<"u"?function(t){return ch.resolve(null).then(t).catch(iy)}:qu;function iy(t){setTimeout(function(){throw t})}function Lc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Bo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Bo(e)}function tr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function uh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var $s=Math.random().toString(36).slice(2),li="__reactFiber$"+$s,Xo="__reactProps$"+$s,Ci="__reactContainer$"+$s,$u="__reactEvents$"+$s,ry="__reactListeners$"+$s,sy="__reactHandles$"+$s;function Cr(t){var e=t[li];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ci]||n[li]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=uh(t);t!==null;){if(n=t[li])return n;t=uh(t)}return e}t=n,n=t.parentNode}return null}function ra(t){return t=t[li]||t[Ci],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function _s(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(re(33))}function Kl(t){return t[Xo]||null}var Ku=[],ys=-1;function mr(t){return{current:t}}function wt(t){0>ys||(t.current=Ku[ys],Ku[ys]=null,ys--)}function xt(t,e){ys++,Ku[ys]=t.current,t.current=e}var hr={},sn=mr(hr),yn=mr(!1),Or=hr;function Os(t,e){var n=t.type.contextTypes;if(!n)return hr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function xn(t){return t=t.childContextTypes,t!=null}function El(){wt(yn),wt(sn)}function fh(t,e,n){if(sn.current!==hr)throw Error(re(168));xt(sn,e),xt(yn,n)}function Ag(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(re(108,Vv(t)||"Unknown",r));return Pt({},n,i)}function wl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||hr,Or=sn.current,xt(sn,t),xt(yn,yn.current),!0}function dh(t,e,n){var i=t.stateNode;if(!i)throw Error(re(169));n?(t=Ag(t,e,Or),i.__reactInternalMemoizedMergedChildContext=t,wt(yn),wt(sn),xt(sn,t)):wt(yn),xt(yn,n)}var Mi=null,Zl=!1,Dc=!1;function bg(t){Mi===null?Mi=[t]:Mi.push(t)}function oy(t){Zl=!0,bg(t)}function gr(){if(!Dc&&Mi!==null){Dc=!0;var t=0,e=dt;try{var n=Mi;for(dt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Mi=null,Zl=!1}catch(r){throw Mi!==null&&(Mi=Mi.slice(t+1)),Jm(Hf,gr),r}finally{dt=e,Dc=!1}}return null}var xs=[],Ss=0,Tl=null,Al=0,Fn=[],On=0,kr=null,wi=1,Ti="";function Mr(t,e){xs[Ss++]=Al,xs[Ss++]=Tl,Tl=t,Al=e}function Rg(t,e,n){Fn[On++]=wi,Fn[On++]=Ti,Fn[On++]=kr,kr=t;var i=wi;t=Ti;var r=32-ni(i)-1;i&=~(1<<r),n+=1;var s=32-ni(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,wi=1<<32-ni(e)+r|n<<r|i,Ti=s+t}else wi=1<<s|n<<r|i,Ti=t}function Kf(t){t.return!==null&&(Mr(t,1),Rg(t,1,0))}function Zf(t){for(;t===Tl;)Tl=xs[--Ss],xs[Ss]=null,Al=xs[--Ss],xs[Ss]=null;for(;t===kr;)kr=Fn[--On],Fn[On]=null,Ti=Fn[--On],Fn[On]=null,wi=Fn[--On],Fn[On]=null}var Cn=null,Rn=null,At=!1,Qn=null;function Cg(t,e){var n=Hn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function hh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Cn=t,Rn=tr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Cn=t,Rn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=kr!==null?{id:wi,overflow:Ti}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Hn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Cn=t,Rn=null,!0):!1;default:return!1}}function Zu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ju(t){if(At){var e=Rn;if(e){var n=e;if(!hh(t,e)){if(Zu(t))throw Error(re(418));e=tr(n.nextSibling);var i=Cn;e&&hh(t,e)?Cg(i,n):(t.flags=t.flags&-4097|2,At=!1,Cn=t)}}else{if(Zu(t))throw Error(re(418));t.flags=t.flags&-4097|2,At=!1,Cn=t}}}function ph(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Cn=t}function xa(t){if(t!==Cn)return!1;if(!At)return ph(t),At=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Yu(t.type,t.memoizedProps)),e&&(e=Rn)){if(Zu(t))throw Pg(),Error(re(418));for(;e;)Cg(t,e),e=tr(e.nextSibling)}if(ph(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(re(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Rn=tr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Rn=null}}else Rn=Cn?tr(t.stateNode.nextSibling):null;return!0}function Pg(){for(var t=Rn;t;)t=tr(t.nextSibling)}function ks(){Rn=Cn=null,At=!1}function Jf(t){Qn===null?Qn=[t]:Qn.push(t)}var ay=Ui.ReactCurrentBatchConfig;function so(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(re(309));var i=n.stateNode}if(!i)throw Error(re(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(re(284));if(!n._owner)throw Error(re(290,t))}return t}function Sa(t,e){throw t=Object.prototype.toString.call(e),Error(re(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function mh(t){var e=t._init;return e(t._payload)}function Lg(t){function e(u,v){if(t){var m=u.deletions;m===null?(u.deletions=[v],u.flags|=16):m.push(v)}}function n(u,v){if(!t)return null;for(;v!==null;)e(u,v),v=v.sibling;return null}function i(u,v){for(u=new Map;v!==null;)v.key!==null?u.set(v.key,v):u.set(v.index,v),v=v.sibling;return u}function r(u,v){return u=sr(u,v),u.index=0,u.sibling=null,u}function s(u,v,m){return u.index=m,t?(m=u.alternate,m!==null?(m=m.index,m<v?(u.flags|=2,v):m):(u.flags|=2,v)):(u.flags|=1048576,v)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,v,m,x){return v===null||v.tag!==6?(v=zc(m,u.mode,x),v.return=u,v):(v=r(v,m),v.return=u,v)}function l(u,v,m,x){var C=m.type;return C===ps?f(u,v,m.props.children,x,m.key):v!==null&&(v.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Vi&&mh(C)===v.type)?(x=r(v,m.props),x.ref=so(u,v,m),x.return=u,x):(x=dl(m.type,m.key,m.props,null,u.mode,x),x.ref=so(u,v,m),x.return=u,x)}function c(u,v,m,x){return v===null||v.tag!==4||v.stateNode.containerInfo!==m.containerInfo||v.stateNode.implementation!==m.implementation?(v=Bc(m,u.mode,x),v.return=u,v):(v=r(v,m.children||[]),v.return=u,v)}function f(u,v,m,x,C){return v===null||v.tag!==7?(v=Ur(m,u.mode,x,C),v.return=u,v):(v=r(v,m),v.return=u,v)}function h(u,v,m){if(typeof v=="string"&&v!==""||typeof v=="number")return v=zc(""+v,u.mode,m),v.return=u,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ua:return m=dl(v.type,v.key,v.props,null,u.mode,m),m.ref=so(u,null,v),m.return=u,m;case hs:return v=Bc(v,u.mode,m),v.return=u,v;case Vi:var x=v._init;return h(u,x(v._payload),m)}if(_o(v)||eo(v))return v=Ur(v,u.mode,m,null),v.return=u,v;Sa(u,v)}return null}function d(u,v,m,x){var C=v!==null?v.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return C!==null?null:a(u,v,""+m,x);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ua:return m.key===C?l(u,v,m,x):null;case hs:return m.key===C?c(u,v,m,x):null;case Vi:return C=m._init,d(u,v,C(m._payload),x)}if(_o(m)||eo(m))return C!==null?null:f(u,v,m,x,null);Sa(u,m)}return null}function g(u,v,m,x,C){if(typeof x=="string"&&x!==""||typeof x=="number")return u=u.get(m)||null,a(v,u,""+x,C);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ua:return u=u.get(x.key===null?m:x.key)||null,l(v,u,x,C);case hs:return u=u.get(x.key===null?m:x.key)||null,c(v,u,x,C);case Vi:var b=x._init;return g(u,v,m,b(x._payload),C)}if(_o(x)||eo(x))return u=u.get(m)||null,f(v,u,x,C,null);Sa(v,x)}return null}function y(u,v,m,x){for(var C=null,b=null,w=v,N=v=0,M=null;w!==null&&N<m.length;N++){w.index>N?(M=w,w=null):M=w.sibling;var E=d(u,w,m[N],x);if(E===null){w===null&&(w=M);break}t&&w&&E.alternate===null&&e(u,w),v=s(E,v,N),b===null?C=E:b.sibling=E,b=E,w=M}if(N===m.length)return n(u,w),At&&Mr(u,N),C;if(w===null){for(;N<m.length;N++)w=h(u,m[N],x),w!==null&&(v=s(w,v,N),b===null?C=w:b.sibling=w,b=w);return At&&Mr(u,N),C}for(w=i(u,w);N<m.length;N++)M=g(w,u,N,m[N],x),M!==null&&(t&&M.alternate!==null&&w.delete(M.key===null?N:M.key),v=s(M,v,N),b===null?C=M:b.sibling=M,b=M);return t&&w.forEach(function(P){return e(u,P)}),At&&Mr(u,N),C}function _(u,v,m,x){var C=eo(m);if(typeof C!="function")throw Error(re(150));if(m=C.call(m),m==null)throw Error(re(151));for(var b=C=null,w=v,N=v=0,M=null,E=m.next();w!==null&&!E.done;N++,E=m.next()){w.index>N?(M=w,w=null):M=w.sibling;var P=d(u,w,E.value,x);if(P===null){w===null&&(w=M);break}t&&w&&P.alternate===null&&e(u,w),v=s(P,v,N),b===null?C=P:b.sibling=P,b=P,w=M}if(E.done)return n(u,w),At&&Mr(u,N),C;if(w===null){for(;!E.done;N++,E=m.next())E=h(u,E.value,x),E!==null&&(v=s(E,v,N),b===null?C=E:b.sibling=E,b=E);return At&&Mr(u,N),C}for(w=i(u,w);!E.done;N++,E=m.next())E=g(w,u,N,E.value,x),E!==null&&(t&&E.alternate!==null&&w.delete(E.key===null?N:E.key),v=s(E,v,N),b===null?C=E:b.sibling=E,b=E);return t&&w.forEach(function(j){return e(u,j)}),At&&Mr(u,N),C}function p(u,v,m,x){if(typeof m=="object"&&m!==null&&m.type===ps&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case ua:e:{for(var C=m.key,b=v;b!==null;){if(b.key===C){if(C=m.type,C===ps){if(b.tag===7){n(u,b.sibling),v=r(b,m.props.children),v.return=u,u=v;break e}}else if(b.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Vi&&mh(C)===b.type){n(u,b.sibling),v=r(b,m.props),v.ref=so(u,b,m),v.return=u,u=v;break e}n(u,b);break}else e(u,b);b=b.sibling}m.type===ps?(v=Ur(m.props.children,u.mode,x,m.key),v.return=u,u=v):(x=dl(m.type,m.key,m.props,null,u.mode,x),x.ref=so(u,v,m),x.return=u,u=x)}return o(u);case hs:e:{for(b=m.key;v!==null;){if(v.key===b)if(v.tag===4&&v.stateNode.containerInfo===m.containerInfo&&v.stateNode.implementation===m.implementation){n(u,v.sibling),v=r(v,m.children||[]),v.return=u,u=v;break e}else{n(u,v);break}else e(u,v);v=v.sibling}v=Bc(m,u.mode,x),v.return=u,u=v}return o(u);case Vi:return b=m._init,p(u,v,b(m._payload),x)}if(_o(m))return y(u,v,m,x);if(eo(m))return _(u,v,m,x);Sa(u,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,v!==null&&v.tag===6?(n(u,v.sibling),v=r(v,m),v.return=u,u=v):(n(u,v),v=zc(m,u.mode,x),v.return=u,u=v),o(u)):n(u,v)}return p}var zs=Lg(!0),Dg=Lg(!1),bl=mr(null),Rl=null,Ms=null,Qf=null;function ed(){Qf=Ms=Rl=null}function td(t){var e=bl.current;wt(bl),t._currentValue=e}function Qu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ds(t,e){Rl=t,Qf=Ms=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(_n=!0),t.firstContext=null)}function Vn(t){var e=t._currentValue;if(Qf!==t)if(t={context:t,memoizedValue:e,next:null},Ms===null){if(Rl===null)throw Error(re(308));Ms=t,Rl.dependencies={lanes:0,firstContext:t}}else Ms=Ms.next=t;return e}var Pr=null;function nd(t){Pr===null?Pr=[t]:Pr.push(t)}function Ug(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,nd(e)):(n.next=r.next,r.next=n),e.interleaved=n,Pi(t,i)}function Pi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Wi=!1;function id(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ig(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function bi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function nr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,lt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Pi(t,n)}return r=i.interleaved,r===null?(e.next=e,nd(i)):(e.next=r.next,r.next=e),i.interleaved=e,Pi(t,n)}function ol(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Gf(t,n)}}function gh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Cl(t,e,n,i){var r=t.updateQueue;Wi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,f=c=l=null,a=s;do{var d=a.lane,g=a.eventTime;if((i&d)===d){f!==null&&(f=f.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,_=a;switch(d=e,g=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){h=y.call(g,h,d);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,d=typeof y=="function"?y.call(g,h,d):y,d==null)break e;h=Pt({},h,d);break e;case 2:Wi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else g={eventTime:g,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=g,l=h):f=f.next=g,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Br|=o,t.lanes=o,t.memoizedState=h}}function vh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(re(191,r));r.call(i)}}}var sa={},fi=mr(sa),jo=mr(sa),Yo=mr(sa);function Lr(t){if(t===sa)throw Error(re(174));return t}function rd(t,e){switch(xt(Yo,e),xt(jo,t),xt(fi,sa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Uu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Uu(e,t)}wt(fi),xt(fi,e)}function Bs(){wt(fi),wt(jo),wt(Yo)}function Ng(t){Lr(Yo.current);var e=Lr(fi.current),n=Uu(e,t.type);e!==n&&(xt(jo,t),xt(fi,n))}function sd(t){jo.current===t&&(wt(fi),wt(jo))}var Rt=mr(0);function Pl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Uc=[];function od(){for(var t=0;t<Uc.length;t++)Uc[t]._workInProgressVersionPrimary=null;Uc.length=0}var al=Ui.ReactCurrentDispatcher,Ic=Ui.ReactCurrentBatchConfig,zr=0,Ct=null,kt=null,jt=null,Ll=!1,Ro=!1,qo=0,ly=0;function Qt(){throw Error(re(321))}function ad(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ri(t[n],e[n]))return!1;return!0}function ld(t,e,n,i,r,s){if(zr=s,Ct=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,al.current=t===null||t.memoizedState===null?dy:hy,t=n(i,r),Ro){s=0;do{if(Ro=!1,qo=0,25<=s)throw Error(re(301));s+=1,jt=kt=null,e.updateQueue=null,al.current=py,t=n(i,r)}while(Ro)}if(al.current=Dl,e=kt!==null&&kt.next!==null,zr=0,jt=kt=Ct=null,Ll=!1,e)throw Error(re(300));return t}function cd(){var t=qo!==0;return qo=0,t}function oi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return jt===null?Ct.memoizedState=jt=t:jt=jt.next=t,jt}function Wn(){if(kt===null){var t=Ct.alternate;t=t!==null?t.memoizedState:null}else t=kt.next;var e=jt===null?Ct.memoizedState:jt.next;if(e!==null)jt=e,kt=t;else{if(t===null)throw Error(re(310));kt=t,t={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},jt===null?Ct.memoizedState=jt=t:jt=jt.next=t}return jt}function $o(t,e){return typeof e=="function"?e(t):e}function Nc(t){var e=Wn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=kt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((zr&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,Ct.lanes|=f,Br|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ri(i,e.memoizedState)||(_n=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Ct.lanes|=s,Br|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Fc(t){var e=Wn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ri(s,e.memoizedState)||(_n=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Fg(){}function Og(t,e){var n=Ct,i=Wn(),r=e(),s=!ri(i.memoizedState,r);if(s&&(i.memoizedState=r,_n=!0),i=i.queue,ud(Bg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||jt!==null&&jt.memoizedState.tag&1){if(n.flags|=2048,Ko(9,zg.bind(null,n,i,r,e),void 0,null),Yt===null)throw Error(re(349));zr&30||kg(n,e,r)}return r}function kg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ct.updateQueue,e===null?(e={lastEffect:null,stores:null},Ct.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function zg(t,e,n,i){e.value=n,e.getSnapshot=i,Hg(e)&&Gg(t)}function Bg(t,e,n){return n(function(){Hg(e)&&Gg(t)})}function Hg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ri(t,n)}catch{return!0}}function Gg(t){var e=Pi(t,1);e!==null&&ii(e,t,1,-1)}function _h(t){var e=oi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$o,lastRenderedState:t},e.queue=t,t=t.dispatch=fy.bind(null,Ct,t),[e.memoizedState,t]}function Ko(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Ct.updateQueue,e===null?(e={lastEffect:null,stores:null},Ct.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Vg(){return Wn().memoizedState}function ll(t,e,n,i){var r=oi();Ct.flags|=t,r.memoizedState=Ko(1|e,n,void 0,i===void 0?null:i)}function Jl(t,e,n,i){var r=Wn();i=i===void 0?null:i;var s=void 0;if(kt!==null){var o=kt.memoizedState;if(s=o.destroy,i!==null&&ad(i,o.deps)){r.memoizedState=Ko(e,n,s,i);return}}Ct.flags|=t,r.memoizedState=Ko(1|e,n,s,i)}function yh(t,e){return ll(8390656,8,t,e)}function ud(t,e){return Jl(2048,8,t,e)}function Wg(t,e){return Jl(4,2,t,e)}function Xg(t,e){return Jl(4,4,t,e)}function jg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Yg(t,e,n){return n=n!=null?n.concat([t]):null,Jl(4,4,jg.bind(null,e,t),n)}function fd(){}function qg(t,e){var n=Wn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ad(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function $g(t,e){var n=Wn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ad(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Kg(t,e,n){return zr&21?(ri(n,e)||(n=tg(),Ct.lanes|=n,Br|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,_n=!0),t.memoizedState=n)}function cy(t,e){var n=dt;dt=n!==0&&4>n?n:4,t(!0);var i=Ic.transition;Ic.transition={};try{t(!1),e()}finally{dt=n,Ic.transition=i}}function Zg(){return Wn().memoizedState}function uy(t,e,n){var i=rr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Jg(t))Qg(e,n);else if(n=Ug(t,e,n,i),n!==null){var r=un();ii(n,t,i,r),e0(n,e,i)}}function fy(t,e,n){var i=rr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Jg(t))Qg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ri(a,o)){var l=e.interleaved;l===null?(r.next=r,nd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Ug(t,e,r,i),n!==null&&(r=un(),ii(n,t,i,r),e0(n,e,i))}}function Jg(t){var e=t.alternate;return t===Ct||e!==null&&e===Ct}function Qg(t,e){Ro=Ll=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function e0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Gf(t,n)}}var Dl={readContext:Vn,useCallback:Qt,useContext:Qt,useEffect:Qt,useImperativeHandle:Qt,useInsertionEffect:Qt,useLayoutEffect:Qt,useMemo:Qt,useReducer:Qt,useRef:Qt,useState:Qt,useDebugValue:Qt,useDeferredValue:Qt,useTransition:Qt,useMutableSource:Qt,useSyncExternalStore:Qt,useId:Qt,unstable_isNewReconciler:!1},dy={readContext:Vn,useCallback:function(t,e){return oi().memoizedState=[t,e===void 0?null:e],t},useContext:Vn,useEffect:yh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ll(4194308,4,jg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ll(4194308,4,t,e)},useInsertionEffect:function(t,e){return ll(4,2,t,e)},useMemo:function(t,e){var n=oi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=oi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=uy.bind(null,Ct,t),[i.memoizedState,t]},useRef:function(t){var e=oi();return t={current:t},e.memoizedState=t},useState:_h,useDebugValue:fd,useDeferredValue:function(t){return oi().memoizedState=t},useTransition:function(){var t=_h(!1),e=t[0];return t=cy.bind(null,t[1]),oi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Ct,r=oi();if(At){if(n===void 0)throw Error(re(407));n=n()}else{if(n=e(),Yt===null)throw Error(re(349));zr&30||kg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,yh(Bg.bind(null,i,s,t),[t]),i.flags|=2048,Ko(9,zg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=oi(),e=Yt.identifierPrefix;if(At){var n=Ti,i=wi;n=(i&~(1<<32-ni(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=qo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ly++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},hy={readContext:Vn,useCallback:qg,useContext:Vn,useEffect:ud,useImperativeHandle:Yg,useInsertionEffect:Wg,useLayoutEffect:Xg,useMemo:$g,useReducer:Nc,useRef:Vg,useState:function(){return Nc($o)},useDebugValue:fd,useDeferredValue:function(t){var e=Wn();return Kg(e,kt.memoizedState,t)},useTransition:function(){var t=Nc($o)[0],e=Wn().memoizedState;return[t,e]},useMutableSource:Fg,useSyncExternalStore:Og,useId:Zg,unstable_isNewReconciler:!1},py={readContext:Vn,useCallback:qg,useContext:Vn,useEffect:ud,useImperativeHandle:Yg,useInsertionEffect:Wg,useLayoutEffect:Xg,useMemo:$g,useReducer:Fc,useRef:Vg,useState:function(){return Fc($o)},useDebugValue:fd,useDeferredValue:function(t){var e=Wn();return kt===null?e.memoizedState=t:Kg(e,kt.memoizedState,t)},useTransition:function(){var t=Fc($o)[0],e=Wn().memoizedState;return[t,e]},useMutableSource:Fg,useSyncExternalStore:Og,useId:Zg,unstable_isNewReconciler:!1};function Zn(t,e){if(t&&t.defaultProps){e=Pt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ef(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Pt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ql={isMounted:function(t){return(t=t._reactInternals)?Wr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=un(),r=rr(t),s=bi(i,r);s.payload=e,n!=null&&(s.callback=n),e=nr(t,s,r),e!==null&&(ii(e,t,r,i),ol(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=un(),r=rr(t),s=bi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=nr(t,s,r),e!==null&&(ii(e,t,r,i),ol(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=un(),i=rr(t),r=bi(n,i);r.tag=2,e!=null&&(r.callback=e),e=nr(t,r,i),e!==null&&(ii(e,t,i,n),ol(e,t,i))}};function xh(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Go(n,i)||!Go(r,s):!0}function t0(t,e,n){var i=!1,r=hr,s=e.contextType;return typeof s=="object"&&s!==null?s=Vn(s):(r=xn(e)?Or:sn.current,i=e.contextTypes,s=(i=i!=null)?Os(t,r):hr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ql,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Sh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Ql.enqueueReplaceState(e,e.state,null)}function tf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},id(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Vn(s):(s=xn(e)?Or:sn.current,r.context=Os(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ef(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Ql.enqueueReplaceState(r,r.state,null),Cl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Hs(t,e){try{var n="",i=e;do n+=Gv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Oc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function nf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var my=typeof WeakMap=="function"?WeakMap:Map;function n0(t,e,n){n=bi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Il||(Il=!0,hf=i),nf(t,e)},n}function i0(t,e,n){n=bi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){nf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){nf(t,e),typeof i!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Mh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new my;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Cy.bind(null,t,e,n),e.then(t,t))}function Eh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function wh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=bi(-1,1),e.tag=2,nr(n,e,1))),n.lanes|=1),t)}var gy=Ui.ReactCurrentOwner,_n=!1;function ln(t,e,n,i){e.child=t===null?Dg(e,null,n,i):zs(e,t.child,n,i)}function Th(t,e,n,i,r){n=n.render;var s=e.ref;return Ds(e,r),i=ld(t,e,n,i,s,r),n=cd(),t!==null&&!_n?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Li(t,e,r)):(At&&n&&Kf(e),e.flags|=1,ln(t,e,i,r),e.child)}function Ah(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!yd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,r0(t,e,s,i,r)):(t=dl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Go,n(o,i)&&t.ref===e.ref)return Li(t,e,r)}return e.flags|=1,t=sr(s,i),t.ref=e.ref,t.return=e,e.child=t}function r0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Go(s,i)&&t.ref===e.ref)if(_n=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(_n=!0);else return e.lanes=t.lanes,Li(t,e,r)}return rf(t,e,n,i,r)}function s0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},xt(ws,An),An|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,xt(ws,An),An|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,xt(ws,An),An|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,xt(ws,An),An|=i;return ln(t,e,r,n),e.child}function o0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function rf(t,e,n,i,r){var s=xn(n)?Or:sn.current;return s=Os(e,s),Ds(e,r),n=ld(t,e,n,i,s,r),i=cd(),t!==null&&!_n?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Li(t,e,r)):(At&&i&&Kf(e),e.flags|=1,ln(t,e,n,r),e.child)}function bh(t,e,n,i,r){if(xn(n)){var s=!0;wl(e)}else s=!1;if(Ds(e,r),e.stateNode===null)cl(t,e),t0(e,n,i),tf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Vn(c):(c=xn(n)?Or:sn.current,c=Os(e,c));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Sh(e,o,i,c),Wi=!1;var d=e.memoizedState;o.state=d,Cl(e,i,o,r),l=e.memoizedState,a!==i||d!==l||yn.current||Wi?(typeof f=="function"&&(ef(e,n,f,i),l=e.memoizedState),(a=Wi||xh(e,n,a,i,d,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Ig(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Zn(e.type,a),o.props=c,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Vn(l):(l=xn(n)?Or:sn.current,l=Os(e,l));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Sh(e,o,i,l),Wi=!1,d=e.memoizedState,o.state=d,Cl(e,i,o,r);var y=e.memoizedState;a!==h||d!==y||yn.current||Wi?(typeof g=="function"&&(ef(e,n,g,i),y=e.memoizedState),(c=Wi||xh(e,n,c,i,d,y,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),o.props=i,o.state=y,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return sf(t,e,n,i,s,r)}function sf(t,e,n,i,r,s){o0(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&dh(e,n,!1),Li(t,e,s);i=e.stateNode,gy.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=zs(e,t.child,null,s),e.child=zs(e,null,a,s)):ln(t,e,a,s),e.memoizedState=i.state,r&&dh(e,n,!0),e.child}function a0(t){var e=t.stateNode;e.pendingContext?fh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&fh(t,e.context,!1),rd(t,e.containerInfo)}function Rh(t,e,n,i,r){return ks(),Jf(r),e.flags|=256,ln(t,e,n,i),e.child}var of={dehydrated:null,treeContext:null,retryLane:0};function af(t){return{baseLanes:t,cachePool:null,transitions:null}}function l0(t,e,n){var i=e.pendingProps,r=Rt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),xt(Rt,r&1),t===null)return Ju(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=nc(o,i,0,null),t=Ur(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=af(n),e.memoizedState=of,t):dd(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return vy(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=sr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=sr(a,s):(s=Ur(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?af(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=of,i}return s=t.child,t=s.sibling,i=sr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function dd(t,e){return e=nc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ma(t,e,n,i){return i!==null&&Jf(i),zs(e,t.child,null,n),t=dd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function vy(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Oc(Error(re(422))),Ma(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=nc({mode:"visible",children:i.children},r,0,null),s=Ur(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&zs(e,t.child,null,o),e.child.memoizedState=af(o),e.memoizedState=of,s);if(!(e.mode&1))return Ma(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(re(419)),i=Oc(s,i,void 0),Ma(t,e,o,i)}if(a=(o&t.childLanes)!==0,_n||a){if(i=Yt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Pi(t,r),ii(i,t,r,-1))}return _d(),i=Oc(Error(re(421))),Ma(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Py.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Rn=tr(r.nextSibling),Cn=e,At=!0,Qn=null,t!==null&&(Fn[On++]=wi,Fn[On++]=Ti,Fn[On++]=kr,wi=t.id,Ti=t.overflow,kr=e),e=dd(e,i.children),e.flags|=4096,e)}function Ch(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Qu(t.return,e,n)}function kc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function c0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(ln(t,e,i.children,n),i=Rt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ch(t,n,e);else if(t.tag===19)Ch(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(xt(Rt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Pl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),kc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Pl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}kc(e,!0,n,null,s);break;case"together":kc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function cl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Li(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Br|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(re(153));if(e.child!==null){for(t=e.child,n=sr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=sr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function _y(t,e,n){switch(e.tag){case 3:a0(e),ks();break;case 5:Ng(e);break;case 1:xn(e.type)&&wl(e);break;case 4:rd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;xt(bl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(xt(Rt,Rt.current&1),e.flags|=128,null):n&e.child.childLanes?l0(t,e,n):(xt(Rt,Rt.current&1),t=Li(t,e,n),t!==null?t.sibling:null);xt(Rt,Rt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return c0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),xt(Rt,Rt.current),i)break;return null;case 22:case 23:return e.lanes=0,s0(t,e,n)}return Li(t,e,n)}var u0,lf,f0,d0;u0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};lf=function(){};f0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Lr(fi.current);var s=null;switch(n){case"input":r=Cu(t,r),i=Cu(t,i),s=[];break;case"select":r=Pt({},r,{value:void 0}),i=Pt({},i,{value:void 0}),s=[];break;case"textarea":r=Du(t,r),i=Du(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ml)}Iu(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(No.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(No.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Mt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};d0=function(t,e,n,i){n!==i&&(e.flags|=4)};function oo(t,e){if(!At)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function en(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function yy(t,e,n){var i=e.pendingProps;switch(Zf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(e),null;case 1:return xn(e.type)&&El(),en(e),null;case 3:return i=e.stateNode,Bs(),wt(yn),wt(sn),od(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(xa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Qn!==null&&(gf(Qn),Qn=null))),lf(t,e),en(e),null;case 5:sd(e);var r=Lr(Yo.current);if(n=e.type,t!==null&&e.stateNode!=null)f0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(re(166));return en(e),null}if(t=Lr(fi.current),xa(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[li]=e,i[Xo]=s,t=(e.mode&1)!==0,n){case"dialog":Mt("cancel",i),Mt("close",i);break;case"iframe":case"object":case"embed":Mt("load",i);break;case"video":case"audio":for(r=0;r<xo.length;r++)Mt(xo[r],i);break;case"source":Mt("error",i);break;case"img":case"image":case"link":Mt("error",i),Mt("load",i);break;case"details":Mt("toggle",i);break;case"input":kd(i,s),Mt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Mt("invalid",i);break;case"textarea":Bd(i,s),Mt("invalid",i)}Iu(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ya(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ya(i.textContent,a,t),r=["children",""+a]):No.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Mt("scroll",i)}switch(n){case"input":fa(i),zd(i,s,!0);break;case"textarea":fa(i),Hd(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ml)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Bm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[li]=e,t[Xo]=i,u0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Nu(n,i),n){case"dialog":Mt("cancel",t),Mt("close",t),r=i;break;case"iframe":case"object":case"embed":Mt("load",t),r=i;break;case"video":case"audio":for(r=0;r<xo.length;r++)Mt(xo[r],t);r=i;break;case"source":Mt("error",t),r=i;break;case"img":case"image":case"link":Mt("error",t),Mt("load",t),r=i;break;case"details":Mt("toggle",t),r=i;break;case"input":kd(t,i),r=Cu(t,i),Mt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Pt({},i,{value:void 0}),Mt("invalid",t);break;case"textarea":Bd(t,i),r=Du(t,i),Mt("invalid",t);break;default:r=i}Iu(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Vm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Hm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Fo(t,l):typeof l=="number"&&Fo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(No.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Mt("scroll",t):l!=null&&Ff(t,s,l,o))}switch(n){case"input":fa(t),zd(t,i,!1);break;case"textarea":fa(t),Hd(t);break;case"option":i.value!=null&&t.setAttribute("value",""+dr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Rs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Rs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ml)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return en(e),null;case 6:if(t&&e.stateNode!=null)d0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(re(166));if(n=Lr(Yo.current),Lr(fi.current),xa(e)){if(i=e.stateNode,n=e.memoizedProps,i[li]=e,(s=i.nodeValue!==n)&&(t=Cn,t!==null))switch(t.tag){case 3:ya(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ya(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[li]=e,e.stateNode=i}return en(e),null;case 13:if(wt(Rt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(At&&Rn!==null&&e.mode&1&&!(e.flags&128))Pg(),ks(),e.flags|=98560,s=!1;else if(s=xa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(re(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(re(317));s[li]=e}else ks(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;en(e),s=!1}else Qn!==null&&(gf(Qn),Qn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Rt.current&1?Bt===0&&(Bt=3):_d())),e.updateQueue!==null&&(e.flags|=4),en(e),null);case 4:return Bs(),lf(t,e),t===null&&Vo(e.stateNode.containerInfo),en(e),null;case 10:return td(e.type._context),en(e),null;case 17:return xn(e.type)&&El(),en(e),null;case 19:if(wt(Rt),s=e.memoizedState,s===null)return en(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)oo(s,!1);else{if(Bt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Pl(t),o!==null){for(e.flags|=128,oo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return xt(Rt,Rt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ut()>Gs&&(e.flags|=128,i=!0,oo(s,!1),e.lanes=4194304)}else{if(!i)if(t=Pl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),oo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!At)return en(e),null}else 2*Ut()-s.renderingStartTime>Gs&&n!==1073741824&&(e.flags|=128,i=!0,oo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ut(),e.sibling=null,n=Rt.current,xt(Rt,i?n&1|2:n&1),e):(en(e),null);case 22:case 23:return vd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?An&1073741824&&(en(e),e.subtreeFlags&6&&(e.flags|=8192)):en(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function xy(t,e){switch(Zf(e),e.tag){case 1:return xn(e.type)&&El(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Bs(),wt(yn),wt(sn),od(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return sd(e),null;case 13:if(wt(Rt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(re(340));ks()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return wt(Rt),null;case 4:return Bs(),null;case 10:return td(e.type._context),null;case 22:case 23:return vd(),null;case 24:return null;default:return null}}var Ea=!1,rn=!1,Sy=typeof WeakSet=="function"?WeakSet:Set,_e=null;function Es(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Lt(t,e,i)}else n.current=null}function cf(t,e,n){try{n()}catch(i){Lt(t,e,i)}}var Ph=!1;function My(t,e){if(Xu=yl,t=vg(),$f(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,h=t,d=null;t:for(;;){for(var g;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)d=h,h=g;for(;;){if(h===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++f===i&&(l=o),(g=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ju={focusedElem:t,selectionRange:n},yl=!1,_e=e;_e!==null;)if(e=_e,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,_e=t;else for(;_e!==null;){e=_e;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,p=y.memoizedState,u=e.stateNode,v=u.getSnapshotBeforeUpdate(e.elementType===e.type?_:Zn(e.type,_),p);u.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(x){Lt(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,_e=t;break}_e=e.return}return y=Ph,Ph=!1,y}function Co(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&cf(e,n,s)}r=r.next}while(r!==i)}}function ec(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function uf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function h0(t){var e=t.alternate;e!==null&&(t.alternate=null,h0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[li],delete e[Xo],delete e[$u],delete e[ry],delete e[sy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function p0(t){return t.tag===5||t.tag===3||t.tag===4}function Lh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||p0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ff(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ml));else if(i!==4&&(t=t.child,t!==null))for(ff(t,e,n),t=t.sibling;t!==null;)ff(t,e,n),t=t.sibling}function df(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(df(t,e,n),t=t.sibling;t!==null;)df(t,e,n),t=t.sibling}var qt=null,Jn=!1;function Fi(t,e,n){for(n=n.child;n!==null;)m0(t,e,n),n=n.sibling}function m0(t,e,n){if(ui&&typeof ui.onCommitFiberUnmount=="function")try{ui.onCommitFiberUnmount(jl,n)}catch{}switch(n.tag){case 5:rn||Es(n,e);case 6:var i=qt,r=Jn;qt=null,Fi(t,e,n),qt=i,Jn=r,qt!==null&&(Jn?(t=qt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):qt.removeChild(n.stateNode));break;case 18:qt!==null&&(Jn?(t=qt,n=n.stateNode,t.nodeType===8?Lc(t.parentNode,n):t.nodeType===1&&Lc(t,n),Bo(t)):Lc(qt,n.stateNode));break;case 4:i=qt,r=Jn,qt=n.stateNode.containerInfo,Jn=!0,Fi(t,e,n),qt=i,Jn=r;break;case 0:case 11:case 14:case 15:if(!rn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&cf(n,e,o),r=r.next}while(r!==i)}Fi(t,e,n);break;case 1:if(!rn&&(Es(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Lt(n,e,a)}Fi(t,e,n);break;case 21:Fi(t,e,n);break;case 22:n.mode&1?(rn=(i=rn)||n.memoizedState!==null,Fi(t,e,n),rn=i):Fi(t,e,n);break;default:Fi(t,e,n)}}function Dh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Sy),e.forEach(function(i){var r=Ly.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Yn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:qt=a.stateNode,Jn=!1;break e;case 3:qt=a.stateNode.containerInfo,Jn=!0;break e;case 4:qt=a.stateNode.containerInfo,Jn=!0;break e}a=a.return}if(qt===null)throw Error(re(160));m0(s,o,r),qt=null,Jn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Lt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)g0(e,t),e=e.sibling}function g0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Yn(e,t),si(t),i&4){try{Co(3,t,t.return),ec(3,t)}catch(_){Lt(t,t.return,_)}try{Co(5,t,t.return)}catch(_){Lt(t,t.return,_)}}break;case 1:Yn(e,t),si(t),i&512&&n!==null&&Es(n,n.return);break;case 5:if(Yn(e,t),si(t),i&512&&n!==null&&Es(n,n.return),t.flags&32){var r=t.stateNode;try{Fo(r,"")}catch(_){Lt(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&km(r,s),Nu(a,o);var c=Nu(a,s);for(o=0;o<l.length;o+=2){var f=l[o],h=l[o+1];f==="style"?Vm(r,h):f==="dangerouslySetInnerHTML"?Hm(r,h):f==="children"?Fo(r,h):Ff(r,f,h,c)}switch(a){case"input":Pu(r,s);break;case"textarea":zm(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Rs(r,!!s.multiple,g,!1):d!==!!s.multiple&&(s.defaultValue!=null?Rs(r,!!s.multiple,s.defaultValue,!0):Rs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Xo]=s}catch(_){Lt(t,t.return,_)}}break;case 6:if(Yn(e,t),si(t),i&4){if(t.stateNode===null)throw Error(re(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(_){Lt(t,t.return,_)}}break;case 3:if(Yn(e,t),si(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Bo(e.containerInfo)}catch(_){Lt(t,t.return,_)}break;case 4:Yn(e,t),si(t);break;case 13:Yn(e,t),si(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(md=Ut())),i&4&&Dh(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(rn=(c=rn)||f,Yn(e,t),rn=c):Yn(e,t),si(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(_e=t,f=t.child;f!==null;){for(h=_e=f;_e!==null;){switch(d=_e,g=d.child,d.tag){case 0:case 11:case 14:case 15:Co(4,d,d.return);break;case 1:Es(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(_){Lt(i,n,_)}}break;case 5:Es(d,d.return);break;case 22:if(d.memoizedState!==null){Ih(h);continue}}g!==null?(g.return=d,_e=g):Ih(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Gm("display",o))}catch(_){Lt(t,t.return,_)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(_){Lt(t,t.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Yn(e,t),si(t),i&4&&Dh(t);break;case 21:break;default:Yn(e,t),si(t)}}function si(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(p0(n)){var i=n;break e}n=n.return}throw Error(re(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Fo(r,""),i.flags&=-33);var s=Lh(t);df(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Lh(t);ff(t,a,o);break;default:throw Error(re(161))}}catch(l){Lt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ey(t,e,n){_e=t,v0(t)}function v0(t,e,n){for(var i=(t.mode&1)!==0;_e!==null;){var r=_e,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ea;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||rn;a=Ea;var c=rn;if(Ea=o,(rn=l)&&!c)for(_e=r;_e!==null;)o=_e,l=o.child,o.tag===22&&o.memoizedState!==null?Nh(r):l!==null?(l.return=o,_e=l):Nh(r);for(;s!==null;)_e=s,v0(s),s=s.sibling;_e=r,Ea=a,rn=c}Uh(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,_e=s):Uh(t)}}function Uh(t){for(;_e!==null;){var e=_e;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:rn||ec(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!rn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Zn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&vh(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}vh(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&Bo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}rn||e.flags&512&&uf(e)}catch(d){Lt(e,e.return,d)}}if(e===t){_e=null;break}if(n=e.sibling,n!==null){n.return=e.return,_e=n;break}_e=e.return}}function Ih(t){for(;_e!==null;){var e=_e;if(e===t){_e=null;break}var n=e.sibling;if(n!==null){n.return=e.return,_e=n;break}_e=e.return}}function Nh(t){for(;_e!==null;){var e=_e;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ec(4,e)}catch(l){Lt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Lt(e,r,l)}}var s=e.return;try{uf(e)}catch(l){Lt(e,s,l)}break;case 5:var o=e.return;try{uf(e)}catch(l){Lt(e,o,l)}}}catch(l){Lt(e,e.return,l)}if(e===t){_e=null;break}var a=e.sibling;if(a!==null){a.return=e.return,_e=a;break}_e=e.return}}var wy=Math.ceil,Ul=Ui.ReactCurrentDispatcher,hd=Ui.ReactCurrentOwner,Gn=Ui.ReactCurrentBatchConfig,lt=0,Yt=null,Ot=null,Kt=0,An=0,ws=mr(0),Bt=0,Zo=null,Br=0,tc=0,pd=0,Po=null,mn=null,md=0,Gs=1/0,Si=null,Il=!1,hf=null,ir=null,wa=!1,qi=null,Nl=0,Lo=0,pf=null,ul=-1,fl=0;function un(){return lt&6?Ut():ul!==-1?ul:ul=Ut()}function rr(t){return t.mode&1?lt&2&&Kt!==0?Kt&-Kt:ay.transition!==null?(fl===0&&(fl=tg()),fl):(t=dt,t!==0||(t=window.event,t=t===void 0?16:lg(t.type)),t):1}function ii(t,e,n,i){if(50<Lo)throw Lo=0,pf=null,Error(re(185));na(t,n,i),(!(lt&2)||t!==Yt)&&(t===Yt&&(!(lt&2)&&(tc|=n),Bt===4&&ji(t,Kt)),Sn(t,i),n===1&&lt===0&&!(e.mode&1)&&(Gs=Ut()+500,Zl&&gr()))}function Sn(t,e){var n=t.callbackNode;a_(t,e);var i=_l(t,t===Yt?Kt:0);if(i===0)n!==null&&Wd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Wd(n),e===1)t.tag===0?oy(Fh.bind(null,t)):bg(Fh.bind(null,t)),ny(function(){!(lt&6)&&gr()}),n=null;else{switch(ng(i)){case 1:n=Hf;break;case 4:n=Qm;break;case 16:n=vl;break;case 536870912:n=eg;break;default:n=vl}n=T0(n,_0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function _0(t,e){if(ul=-1,fl=0,lt&6)throw Error(re(327));var n=t.callbackNode;if(Us()&&t.callbackNode!==n)return null;var i=_l(t,t===Yt?Kt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Fl(t,i);else{e=i;var r=lt;lt|=2;var s=x0();(Yt!==t||Kt!==e)&&(Si=null,Gs=Ut()+500,Dr(t,e));do try{by();break}catch(a){y0(t,a)}while(!0);ed(),Ul.current=s,lt=r,Ot!==null?e=0:(Yt=null,Kt=0,e=Bt)}if(e!==0){if(e===2&&(r=Bu(t),r!==0&&(i=r,e=mf(t,r))),e===1)throw n=Zo,Dr(t,0),ji(t,i),Sn(t,Ut()),n;if(e===6)ji(t,i);else{if(r=t.current.alternate,!(i&30)&&!Ty(r)&&(e=Fl(t,i),e===2&&(s=Bu(t),s!==0&&(i=s,e=mf(t,s))),e===1))throw n=Zo,Dr(t,0),ji(t,i),Sn(t,Ut()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(re(345));case 2:Er(t,mn,Si);break;case 3:if(ji(t,i),(i&130023424)===i&&(e=md+500-Ut(),10<e)){if(_l(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){un(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=qu(Er.bind(null,t,mn,Si),e);break}Er(t,mn,Si);break;case 4:if(ji(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ni(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Ut()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*wy(i/1960))-i,10<i){t.timeoutHandle=qu(Er.bind(null,t,mn,Si),i);break}Er(t,mn,Si);break;case 5:Er(t,mn,Si);break;default:throw Error(re(329))}}}return Sn(t,Ut()),t.callbackNode===n?_0.bind(null,t):null}function mf(t,e){var n=Po;return t.current.memoizedState.isDehydrated&&(Dr(t,e).flags|=256),t=Fl(t,e),t!==2&&(e=mn,mn=n,e!==null&&gf(e)),t}function gf(t){mn===null?mn=t:mn.push.apply(mn,t)}function Ty(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ri(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ji(t,e){for(e&=~pd,e&=~tc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ni(e),i=1<<n;t[n]=-1,e&=~i}}function Fh(t){if(lt&6)throw Error(re(327));Us();var e=_l(t,0);if(!(e&1))return Sn(t,Ut()),null;var n=Fl(t,e);if(t.tag!==0&&n===2){var i=Bu(t);i!==0&&(e=i,n=mf(t,i))}if(n===1)throw n=Zo,Dr(t,0),ji(t,e),Sn(t,Ut()),n;if(n===6)throw Error(re(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Er(t,mn,Si),Sn(t,Ut()),null}function gd(t,e){var n=lt;lt|=1;try{return t(e)}finally{lt=n,lt===0&&(Gs=Ut()+500,Zl&&gr())}}function Hr(t){qi!==null&&qi.tag===0&&!(lt&6)&&Us();var e=lt;lt|=1;var n=Gn.transition,i=dt;try{if(Gn.transition=null,dt=1,t)return t()}finally{dt=i,Gn.transition=n,lt=e,!(lt&6)&&gr()}}function vd(){An=ws.current,wt(ws)}function Dr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ty(n)),Ot!==null)for(n=Ot.return;n!==null;){var i=n;switch(Zf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&El();break;case 3:Bs(),wt(yn),wt(sn),od();break;case 5:sd(i);break;case 4:Bs();break;case 13:wt(Rt);break;case 19:wt(Rt);break;case 10:td(i.type._context);break;case 22:case 23:vd()}n=n.return}if(Yt=t,Ot=t=sr(t.current,null),Kt=An=e,Bt=0,Zo=null,pd=tc=Br=0,mn=Po=null,Pr!==null){for(e=0;e<Pr.length;e++)if(n=Pr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Pr=null}return t}function y0(t,e){do{var n=Ot;try{if(ed(),al.current=Dl,Ll){for(var i=Ct.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ll=!1}if(zr=0,jt=kt=Ct=null,Ro=!1,qo=0,hd.current=null,n===null||n.return===null){Bt=1,Zo=e,Ot=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Kt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=Eh(o);if(g!==null){g.flags&=-257,wh(g,o,a,s,e),g.mode&1&&Mh(s,c,e),e=g,l=c;var y=e.updateQueue;if(y===null){var _=new Set;_.add(l),e.updateQueue=_}else y.add(l);break e}else{if(!(e&1)){Mh(s,c,e),_d();break e}l=Error(re(426))}}else if(At&&a.mode&1){var p=Eh(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),wh(p,o,a,s,e),Jf(Hs(l,a));break e}}s=l=Hs(l,a),Bt!==4&&(Bt=2),Po===null?Po=[s]:Po.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=n0(s,l,e);gh(s,u);break e;case 1:a=l;var v=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(ir===null||!ir.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=i0(s,a,e);gh(s,x);break e}}s=s.return}while(s!==null)}M0(n)}catch(C){e=C,Ot===n&&n!==null&&(Ot=n=n.return);continue}break}while(!0)}function x0(){var t=Ul.current;return Ul.current=Dl,t===null?Dl:t}function _d(){(Bt===0||Bt===3||Bt===2)&&(Bt=4),Yt===null||!(Br&268435455)&&!(tc&268435455)||ji(Yt,Kt)}function Fl(t,e){var n=lt;lt|=2;var i=x0();(Yt!==t||Kt!==e)&&(Si=null,Dr(t,e));do try{Ay();break}catch(r){y0(t,r)}while(!0);if(ed(),lt=n,Ul.current=i,Ot!==null)throw Error(re(261));return Yt=null,Kt=0,Bt}function Ay(){for(;Ot!==null;)S0(Ot)}function by(){for(;Ot!==null&&!Jv();)S0(Ot)}function S0(t){var e=w0(t.alternate,t,An);t.memoizedProps=t.pendingProps,e===null?M0(t):Ot=e,hd.current=null}function M0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=xy(n,e),n!==null){n.flags&=32767,Ot=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Bt=6,Ot=null;return}}else if(n=yy(n,e,An),n!==null){Ot=n;return}if(e=e.sibling,e!==null){Ot=e;return}Ot=e=t}while(e!==null);Bt===0&&(Bt=5)}function Er(t,e,n){var i=dt,r=Gn.transition;try{Gn.transition=null,dt=1,Ry(t,e,n,i)}finally{Gn.transition=r,dt=i}return null}function Ry(t,e,n,i){do Us();while(qi!==null);if(lt&6)throw Error(re(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(re(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(l_(t,s),t===Yt&&(Ot=Yt=null,Kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wa||(wa=!0,T0(vl,function(){return Us(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Gn.transition,Gn.transition=null;var o=dt;dt=1;var a=lt;lt|=4,hd.current=null,My(t,n),g0(n,t),q_(ju),yl=!!Xu,ju=Xu=null,t.current=n,Ey(n),Qv(),lt=a,dt=o,Gn.transition=s}else t.current=n;if(wa&&(wa=!1,qi=t,Nl=r),s=t.pendingLanes,s===0&&(ir=null),n_(n.stateNode),Sn(t,Ut()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Il)throw Il=!1,t=hf,hf=null,t;return Nl&1&&t.tag!==0&&Us(),s=t.pendingLanes,s&1?t===pf?Lo++:(Lo=0,pf=t):Lo=0,gr(),null}function Us(){if(qi!==null){var t=ng(Nl),e=Gn.transition,n=dt;try{if(Gn.transition=null,dt=16>t?16:t,qi===null)var i=!1;else{if(t=qi,qi=null,Nl=0,lt&6)throw Error(re(331));var r=lt;for(lt|=4,_e=t.current;_e!==null;){var s=_e,o=s.child;if(_e.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(_e=c;_e!==null;){var f=_e;switch(f.tag){case 0:case 11:case 15:Co(8,f,s)}var h=f.child;if(h!==null)h.return=f,_e=h;else for(;_e!==null;){f=_e;var d=f.sibling,g=f.return;if(h0(f),f===c){_e=null;break}if(d!==null){d.return=g,_e=d;break}_e=g}}}var y=s.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var p=_.sibling;_.sibling=null,_=p}while(_!==null)}}_e=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,_e=o;else e:for(;_e!==null;){if(s=_e,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Co(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,_e=u;break e}_e=s.return}}var v=t.current;for(_e=v;_e!==null;){o=_e;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,_e=m;else e:for(o=v;_e!==null;){if(a=_e,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ec(9,a)}}catch(C){Lt(a,a.return,C)}if(a===o){_e=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,_e=x;break e}_e=a.return}}if(lt=r,gr(),ui&&typeof ui.onPostCommitFiberRoot=="function")try{ui.onPostCommitFiberRoot(jl,t)}catch{}i=!0}return i}finally{dt=n,Gn.transition=e}}return!1}function Oh(t,e,n){e=Hs(n,e),e=n0(t,e,1),t=nr(t,e,1),e=un(),t!==null&&(na(t,1,e),Sn(t,e))}function Lt(t,e,n){if(t.tag===3)Oh(t,t,n);else for(;e!==null;){if(e.tag===3){Oh(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ir===null||!ir.has(i))){t=Hs(n,t),t=i0(e,t,1),e=nr(e,t,1),t=un(),e!==null&&(na(e,1,t),Sn(e,t));break}}e=e.return}}function Cy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=un(),t.pingedLanes|=t.suspendedLanes&n,Yt===t&&(Kt&n)===n&&(Bt===4||Bt===3&&(Kt&130023424)===Kt&&500>Ut()-md?Dr(t,0):pd|=n),Sn(t,e)}function E0(t,e){e===0&&(t.mode&1?(e=pa,pa<<=1,!(pa&130023424)&&(pa=4194304)):e=1);var n=un();t=Pi(t,e),t!==null&&(na(t,e,n),Sn(t,n))}function Py(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),E0(t,n)}function Ly(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(re(314))}i!==null&&i.delete(e),E0(t,n)}var w0;w0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||yn.current)_n=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return _n=!1,_y(t,e,n);_n=!!(t.flags&131072)}else _n=!1,At&&e.flags&1048576&&Rg(e,Al,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;cl(t,e),t=e.pendingProps;var r=Os(e,sn.current);Ds(e,n),r=ld(null,e,i,t,r,n);var s=cd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,xn(i)?(s=!0,wl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,id(e),r.updater=Ql,e.stateNode=r,r._reactInternals=e,tf(e,i,t,n),e=sf(null,e,i,!0,s,n)):(e.tag=0,At&&s&&Kf(e),ln(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(cl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Uy(i),t=Zn(i,t),r){case 0:e=rf(null,e,i,t,n);break e;case 1:e=bh(null,e,i,t,n);break e;case 11:e=Th(null,e,i,t,n);break e;case 14:e=Ah(null,e,i,Zn(i.type,t),n);break e}throw Error(re(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),rf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),bh(t,e,i,r,n);case 3:e:{if(a0(e),t===null)throw Error(re(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Ig(t,e),Cl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Hs(Error(re(423)),e),e=Rh(t,e,i,n,r);break e}else if(i!==r){r=Hs(Error(re(424)),e),e=Rh(t,e,i,n,r);break e}else for(Rn=tr(e.stateNode.containerInfo.firstChild),Cn=e,At=!0,Qn=null,n=Dg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ks(),i===r){e=Li(t,e,n);break e}ln(t,e,i,n)}e=e.child}return e;case 5:return Ng(e),t===null&&Ju(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Yu(i,r)?o=null:s!==null&&Yu(i,s)&&(e.flags|=32),o0(t,e),ln(t,e,o,n),e.child;case 6:return t===null&&Ju(e),null;case 13:return l0(t,e,n);case 4:return rd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=zs(e,null,i,n):ln(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),Th(t,e,i,r,n);case 7:return ln(t,e,e.pendingProps,n),e.child;case 8:return ln(t,e,e.pendingProps.children,n),e.child;case 12:return ln(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,xt(bl,i._currentValue),i._currentValue=o,s!==null)if(ri(s.value,o)){if(s.children===r.children&&!yn.current){e=Li(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=bi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Qu(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(re(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Qu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ln(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ds(e,n),r=Vn(r),i=i(r),e.flags|=1,ln(t,e,i,n),e.child;case 14:return i=e.type,r=Zn(i,e.pendingProps),r=Zn(i.type,r),Ah(t,e,i,r,n);case 15:return r0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),cl(t,e),e.tag=1,xn(i)?(t=!0,wl(e)):t=!1,Ds(e,n),t0(e,i,r),tf(e,i,r,n),sf(null,e,i,!0,t,n);case 19:return c0(t,e,n);case 22:return s0(t,e,n)}throw Error(re(156,e.tag))};function T0(t,e){return Jm(t,e)}function Dy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hn(t,e,n,i){return new Dy(t,e,n,i)}function yd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Uy(t){if(typeof t=="function")return yd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===kf)return 11;if(t===zf)return 14}return 2}function sr(t,e){var n=t.alternate;return n===null?(n=Hn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function dl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")yd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ps:return Ur(n.children,r,s,e);case Of:o=8,r|=8;break;case Tu:return t=Hn(12,n,e,r|2),t.elementType=Tu,t.lanes=s,t;case Au:return t=Hn(13,n,e,r),t.elementType=Au,t.lanes=s,t;case bu:return t=Hn(19,n,e,r),t.elementType=bu,t.lanes=s,t;case Nm:return nc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Um:o=10;break e;case Im:o=9;break e;case kf:o=11;break e;case zf:o=14;break e;case Vi:o=16,i=null;break e}throw Error(re(130,t==null?t:typeof t,""))}return e=Hn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Ur(t,e,n,i){return t=Hn(7,t,i,e),t.lanes=n,t}function nc(t,e,n,i){return t=Hn(22,t,i,e),t.elementType=Nm,t.lanes=n,t.stateNode={isHidden:!1},t}function zc(t,e,n){return t=Hn(6,t,null,e),t.lanes=n,t}function Bc(t,e,n){return e=Hn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Iy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xc(0),this.expirationTimes=xc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function xd(t,e,n,i,r,s,o,a,l){return t=new Iy(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Hn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},id(s),t}function Ny(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:hs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function A0(t){if(!t)return hr;t=t._reactInternals;e:{if(Wr(t)!==t||t.tag!==1)throw Error(re(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(xn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(t.tag===1){var n=t.type;if(xn(n))return Ag(t,n,e)}return e}function b0(t,e,n,i,r,s,o,a,l){return t=xd(n,i,!0,t,r,s,o,a,l),t.context=A0(null),n=t.current,i=un(),r=rr(n),s=bi(i,r),s.callback=e??null,nr(n,s,r),t.current.lanes=r,na(t,r,i),Sn(t,i),t}function ic(t,e,n,i){var r=e.current,s=un(),o=rr(r);return n=A0(n),e.context===null?e.context=n:e.pendingContext=n,e=bi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=nr(r,e,o),t!==null&&(ii(t,r,o,s),ol(t,r,o)),o}function Ol(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function kh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Sd(t,e){kh(t,e),(t=t.alternate)&&kh(t,e)}function Fy(){return null}var R0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Md(t){this._internalRoot=t}rc.prototype.render=Md.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(re(409));ic(t,e,null,null)};rc.prototype.unmount=Md.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Hr(function(){ic(null,t,null,null)}),e[Ci]=null}};function rc(t){this._internalRoot=t}rc.prototype.unstable_scheduleHydration=function(t){if(t){var e=sg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Xi.length&&e!==0&&e<Xi[n].priority;n++);Xi.splice(n,0,t),n===0&&ag(t)}};function Ed(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function sc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function zh(){}function Oy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Ol(o);s.call(c)}}var o=b0(e,i,t,0,null,!1,!1,"",zh);return t._reactRootContainer=o,t[Ci]=o.current,Vo(t.nodeType===8?t.parentNode:t),Hr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Ol(l);a.call(c)}}var l=xd(t,0,!1,null,null,!1,!1,"",zh);return t._reactRootContainer=l,t[Ci]=l.current,Vo(t.nodeType===8?t.parentNode:t),Hr(function(){ic(e,l,n,i)}),l}function oc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Ol(o);a.call(l)}}ic(e,o,t,r)}else o=Oy(n,e,t,r,i);return Ol(o)}ig=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=yo(e.pendingLanes);n!==0&&(Gf(e,n|1),Sn(e,Ut()),!(lt&6)&&(Gs=Ut()+500,gr()))}break;case 13:Hr(function(){var i=Pi(t,1);if(i!==null){var r=un();ii(i,t,1,r)}}),Sd(t,1)}};Vf=function(t){if(t.tag===13){var e=Pi(t,134217728);if(e!==null){var n=un();ii(e,t,134217728,n)}Sd(t,134217728)}};rg=function(t){if(t.tag===13){var e=rr(t),n=Pi(t,e);if(n!==null){var i=un();ii(n,t,e,i)}Sd(t,e)}};sg=function(){return dt};og=function(t,e){var n=dt;try{return dt=t,e()}finally{dt=n}};Ou=function(t,e,n){switch(e){case"input":if(Pu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Kl(i);if(!r)throw Error(re(90));Om(i),Pu(i,r)}}}break;case"textarea":zm(t,n);break;case"select":e=n.value,e!=null&&Rs(t,!!n.multiple,e,!1)}};jm=gd;Ym=Hr;var ky={usingClientEntryPoint:!1,Events:[ra,_s,Kl,Wm,Xm,gd]},ao={findFiberByHostInstance:Cr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},zy={bundleType:ao.bundleType,version:ao.version,rendererPackageName:ao.rendererPackageName,rendererConfig:ao.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ui.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Km(t),t===null?null:t.stateNode},findFiberByHostInstance:ao.findFiberByHostInstance||Fy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ta=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ta.isDisabled&&Ta.supportsFiber)try{jl=Ta.inject(zy),ui=Ta}catch{}}Dn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ky;Dn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ed(e))throw Error(re(200));return Ny(t,e,null,n)};Dn.createRoot=function(t,e){if(!Ed(t))throw Error(re(299));var n=!1,i="",r=R0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=xd(t,1,!1,null,null,n,!1,i,r),t[Ci]=e.current,Vo(t.nodeType===8?t.parentNode:t),new Md(e)};Dn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(re(188)):(t=Object.keys(t).join(","),Error(re(268,t)));return t=Km(e),t=t===null?null:t.stateNode,t};Dn.flushSync=function(t){return Hr(t)};Dn.hydrate=function(t,e,n){if(!sc(e))throw Error(re(200));return oc(null,t,e,!0,n)};Dn.hydrateRoot=function(t,e,n){if(!Ed(t))throw Error(re(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=R0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=b0(e,null,t,1,n??null,r,!1,s,o),t[Ci]=e.current,Vo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new rc(e)};Dn.render=function(t,e,n){if(!sc(e))throw Error(re(200));return oc(null,t,e,!1,n)};Dn.unmountComponentAtNode=function(t){if(!sc(t))throw Error(re(40));return t._reactRootContainer?(Hr(function(){oc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ci]=null})}),!0):!1};Dn.unstable_batchedUpdates=gd;Dn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!sc(n))throw Error(re(200));if(t==null||t._reactInternals===void 0)throw Error(re(38));return oc(t,e,n,!1,i)};Dn.version="18.3.1-next-f1338f8080-20240426";function C0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(C0)}catch(t){console.error(t)}}C0(),Cm.exports=Dn;var By=Cm.exports,Bh=By;Eu.createRoot=Bh.createRoot,Eu.hydrateRoot=Bh.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wd="160",Hy=0,Hh=1,Gy=2,P0=1,Vy=2,xi=3,pi=0,Mn=1,ci=2,or=0,Is=1,Ar=2,Gh=3,Vh=4,Wy=5,br=100,Xy=101,jy=102,Wh=103,Xh=104,Yy=200,qy=201,$y=202,Ky=203,vf=204,_f=205,Zy=206,Jy=207,Qy=208,ex=209,tx=210,nx=211,ix=212,rx=213,sx=214,ox=0,ax=1,lx=2,kl=3,cx=4,ux=5,fx=6,dx=7,L0=0,hx=1,px=2,ar=0,mx=1,gx=2,vx=3,D0=4,_x=5,yx=6,U0=300,Vs=301,Ws=302,yf=303,xf=304,ac=306,Sf=1e3,ei=1001,Mf=1002,cn=1003,jh=1004,Hc=1005,kn=1006,xx=1007,Jo=1008,lr=1009,Sx=1010,Mx=1011,Td=1012,I0=1013,$i=1014,Ki=1015,Qo=1016,N0=1017,F0=1018,Ir=1020,Ex=1021,ti=1023,wx=1024,Tx=1025,Nr=1026,Xs=1027,Ax=1028,O0=1029,bx=1030,k0=1031,z0=1033,Gc=33776,Vc=33777,Wc=33778,Xc=33779,Yh=35840,qh=35841,$h=35842,Kh=35843,B0=36196,Zh=37492,Jh=37496,Qh=37808,ep=37809,tp=37810,np=37811,ip=37812,rp=37813,sp=37814,op=37815,ap=37816,lp=37817,cp=37818,up=37819,fp=37820,dp=37821,jc=36492,hp=36494,pp=36495,Rx=36283,mp=36284,gp=36285,vp=36286,H0=3e3,Fr=3001,Cx=3200,Px=3201,G0=0,Lx=1,Bn="",$t="srgb",Di="srgb-linear",Ad="display-p3",lc="display-p3-linear",zl="linear",Et="srgb",Bl="rec709",Hl="p3",Yr=7680,_p=519,Dx=512,Ux=513,Ix=514,V0=515,Nx=516,Fx=517,Ox=518,kx=519,Ef=35044,yp="300 es",wf=1035,Ai=2e3,Gl=2001;class Ks{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yc=Math.PI/180,Tf=180/Math.PI;function cr(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[t&255]+tn[t>>8&255]+tn[t>>16&255]+tn[t>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[n&63|128]+tn[n>>8&255]+"-"+tn[n>>16&255]+tn[n>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function gn(t,e,n){return Math.max(e,Math.min(n,t))}function zx(t,e){return(t%e+e)%e}function qc(t,e,n){return(1-n)*t+n*e}function xp(t){return(t&t-1)===0&&t!==0}function Af(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Ei(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function gt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class et{constructor(e=0,n=0){et.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(gn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class nt{constructor(e,n,i,r,s,o,a,l,c){nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],h=i[7],d=i[2],g=i[5],y=i[8],_=r[0],p=r[3],u=r[6],v=r[1],m=r[4],x=r[7],C=r[2],b=r[5],w=r[8];return s[0]=o*_+a*v+l*C,s[3]=o*p+a*m+l*b,s[6]=o*u+a*x+l*w,s[1]=c*_+f*v+h*C,s[4]=c*p+f*m+h*b,s[7]=c*u+f*x+h*w,s[2]=d*_+g*v+y*C,s[5]=d*p+g*m+y*b,s[8]=d*u+g*x+y*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=f*o-a*c,d=a*l-f*s,g=c*s-o*l,y=n*h+i*d+r*g;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/y;return e[0]=h*_,e[1]=(r*c-f*i)*_,e[2]=(a*i-r*o)*_,e[3]=d*_,e[4]=(f*n-r*l)*_,e[5]=(r*s-a*n)*_,e[6]=g*_,e[7]=(i*l-c*n)*_,e[8]=(o*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply($c.makeScale(e,n)),this}rotate(e){return this.premultiply($c.makeRotation(-e)),this}translate(e,n){return this.premultiply($c.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $c=new nt;function W0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Vl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Bx(){const t=Vl("canvas");return t.style.display="block",t}const Sp={};function Do(t){t in Sp||(Sp[t]=!0,console.warn(t))}const Mp=new nt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ep=new nt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Aa={[Di]:{transfer:zl,primaries:Bl,toReference:t=>t,fromReference:t=>t},[$t]:{transfer:Et,primaries:Bl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[lc]:{transfer:zl,primaries:Hl,toReference:t=>t.applyMatrix3(Ep),fromReference:t=>t.applyMatrix3(Mp)},[Ad]:{transfer:Et,primaries:Hl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Ep),fromReference:t=>t.applyMatrix3(Mp).convertLinearToSRGB()}},Hx=new Set([Di,lc]),ht={enabled:!0,_workingColorSpace:Di,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!Hx.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Aa[e].toReference,r=Aa[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Aa[t].primaries},getTransfer:function(t){return t===Bn?zl:Aa[t].transfer}};function Ns(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Kc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let qr;class X0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{qr===void 0&&(qr=Vl("canvas")),qr.width=e.width,qr.height=e.height;const i=qr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=qr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Vl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ns(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ns(n[i]/255)*255):n[i]=Ns(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Gx=0;class j0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gx++}),this.uuid=cr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Zc(r[o].image)):s.push(Zc(r[o]))}else s=Zc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Zc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?X0.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Vx=0;class En extends Ks{constructor(e=En.DEFAULT_IMAGE,n=En.DEFAULT_MAPPING,i=ei,r=ei,s=kn,o=Jo,a=ti,l=lr,c=En.DEFAULT_ANISOTROPY,f=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vx++}),this.uuid=cr(),this.name="",this.source=new j0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(Do("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===Fr?$t:Bn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==U0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sf:e.x=e.x-Math.floor(e.x);break;case ei:e.x=e.x<0?0:1;break;case Mf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sf:e.y=e.y-Math.floor(e.y);break;case ei:e.y=e.y<0?0:1;break;case Mf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Do("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===$t?Fr:H0}set encoding(e){Do("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Fr?$t:Bn}}En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=U0;En.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,n=0,i=0,r=1){bt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],h=l[8],d=l[1],g=l[5],y=l[9],_=l[2],p=l[6],u=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-_)<.01&&Math.abs(y-p)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+_)<.1&&Math.abs(y+p)<.1&&Math.abs(c+g+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const m=(c+1)/2,x=(g+1)/2,C=(u+1)/2,b=(f+d)/4,w=(h+_)/4,N=(y+p)/4;return m>x&&m>C?m<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(m),r=b/i,s=w/i):x>C?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=b/r,s=N/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=w/s,r=N/s),this.set(i,r,s,n),this}let v=Math.sqrt((p-y)*(p-y)+(h-_)*(h-_)+(d-f)*(d-f));return Math.abs(v)<.001&&(v=1),this.x=(p-y)/v,this.y=(h-_)/v,this.z=(d-f)/v,this.w=Math.acos((c+g+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wx extends Ks{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new bt(0,0,e,n),this.scissorTest=!1,this.viewport=new bt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Do("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Fr?$t:Bn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new En(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new j0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gr extends Wx{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Y0 extends En{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=cn,this.minFilter=cn,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xx extends En{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=cn,this.minFilter=cn,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class oa{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],h=i[r+3];const d=s[o+0],g=s[o+1],y=s[o+2],_=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h;return}if(a===1){e[n+0]=d,e[n+1]=g,e[n+2]=y,e[n+3]=_;return}if(h!==_||l!==d||c!==g||f!==y){let p=1-a;const u=l*d+c*g+f*y+h*_,v=u>=0?1:-1,m=1-u*u;if(m>Number.EPSILON){const C=Math.sqrt(m),b=Math.atan2(C,u*v);p=Math.sin(p*b)/C,a=Math.sin(a*b)/C}const x=a*v;if(l=l*p+d*x,c=c*p+g*x,f=f*p+y*x,h=h*p+_*x,p===1-a){const C=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=C,c*=C,f*=C,h*=C}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],h=s[o],d=s[o+1],g=s[o+2],y=s[o+3];return e[n]=a*y+f*h+l*g-c*d,e[n+1]=l*y+f*d+c*h-a*g,e[n+2]=c*y+f*g+a*d-l*h,e[n+3]=f*y-a*h-l*d-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),h=a(s/2),d=l(i/2),g=l(r/2),y=l(s/2);switch(o){case"XYZ":this._x=d*f*h+c*g*y,this._y=c*g*h-d*f*y,this._z=c*f*y+d*g*h,this._w=c*f*h-d*g*y;break;case"YXZ":this._x=d*f*h+c*g*y,this._y=c*g*h-d*f*y,this._z=c*f*y-d*g*h,this._w=c*f*h+d*g*y;break;case"ZXY":this._x=d*f*h-c*g*y,this._y=c*g*h+d*f*y,this._z=c*f*y+d*g*h,this._w=c*f*h-d*g*y;break;case"ZYX":this._x=d*f*h-c*g*y,this._y=c*g*h+d*f*y,this._z=c*f*y-d*g*h,this._w=c*f*h+d*g*y;break;case"YZX":this._x=d*f*h+c*g*y,this._y=c*g*h+d*f*y,this._z=c*f*y-d*g*h,this._w=c*f*h-d*g*y;break;case"XZY":this._x=d*f*h-c*g*y,this._y=c*g*h-d*f*y,this._z=c*f*y+d*g*h,this._w=c*f*h+d*g*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],h=n[10],d=i+a+h;if(d>0){const g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(f-l)*g,this._y=(s-c)*g,this._z=(o-r)*g}else if(i>a&&i>h){const g=2*Math.sqrt(1+i-a-h);this._w=(f-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+c)/g}else if(a>h){const g=2*Math.sqrt(1+a-i-h);this._w=(s-c)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+f)/g}else{const g=2*Math.sqrt(1+h-i-a);this._w=(o-r)/g,this._x=(s+c)/g,this._y=(l+f)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-n;return this._w=g*o+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),h=Math.sin((1-n)*f)/c,d=Math.sin(n*f)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,n=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(wp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(wp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*f,this.y=i+l*f+a*c-s*h,this.z=r+l*h+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Jc.copy(this).projectOnVector(e),this.sub(Jc)}reflect(e){return this.sub(Jc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(gn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jc=new F,wp=new oa;class aa{constructor(e=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(qn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(qn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=qn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,qn):qn.fromBufferAttribute(s,o),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ba.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ba.copy(i.boundingBox)),ba.applyMatrix4(e.matrixWorld),this.union(ba)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(lo),Ra.subVectors(this.max,lo),$r.subVectors(e.a,lo),Kr.subVectors(e.b,lo),Zr.subVectors(e.c,lo),Oi.subVectors(Kr,$r),ki.subVectors(Zr,Kr),_r.subVectors($r,Zr);let n=[0,-Oi.z,Oi.y,0,-ki.z,ki.y,0,-_r.z,_r.y,Oi.z,0,-Oi.x,ki.z,0,-ki.x,_r.z,0,-_r.x,-Oi.y,Oi.x,0,-ki.y,ki.x,0,-_r.y,_r.x,0];return!Qc(n,$r,Kr,Zr,Ra)||(n=[1,0,0,0,1,0,0,0,1],!Qc(n,$r,Kr,Zr,Ra))?!1:(Ca.crossVectors(Oi,ki),n=[Ca.x,Ca.y,Ca.z],Qc(n,$r,Kr,Zr,Ra))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const mi=[new F,new F,new F,new F,new F,new F,new F,new F],qn=new F,ba=new aa,$r=new F,Kr=new F,Zr=new F,Oi=new F,ki=new F,_r=new F,lo=new F,Ra=new F,Ca=new F,yr=new F;function Qc(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){yr.fromArray(t,s);const a=r.x*Math.abs(yr.x)+r.y*Math.abs(yr.y)+r.z*Math.abs(yr.z),l=e.dot(yr),c=n.dot(yr),f=i.dot(yr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const jx=new aa,co=new F,eu=new F;class cc{constructor(e=new F,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):jx.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;co.subVectors(e,this.center);const n=co.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(co,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(eu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(co.copy(e.center).add(eu)),this.expandByPoint(co.copy(e.center).sub(eu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gi=new F,tu=new F,Pa=new F,zi=new F,nu=new F,La=new F,iu=new F;class bd{constructor(e=new F,n=new F(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=gi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(gi.copy(this.origin).addScaledVector(this.direction,n),gi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){tu.copy(e).add(n).multiplyScalar(.5),Pa.copy(n).sub(e).normalize(),zi.copy(this.origin).sub(tu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Pa),a=zi.dot(this.direction),l=-zi.dot(Pa),c=zi.lengthSq(),f=Math.abs(1-o*o);let h,d,g,y;if(f>0)if(h=o*l-a,d=o*a-l,y=s*f,h>=0)if(d>=-y)if(d<=y){const _=1/f;h*=_,d*=_,g=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),g=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),g=-h*h+d*(d+2*l)+c;else d<=-y?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),g=-h*h+d*(d+2*l)+c):d<=y?(h=0,d=Math.min(Math.max(-s,-l),s),g=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),g=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),g=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(tu).addScaledVector(Pa,d),g}intersectSphere(e,n){gi.subVectors(e.center,this.origin);const i=gi.dot(this.direction),r=gi.dot(gi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),f>=0?(s=(e.min.y-d.y)*f,o=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,o=(e.min.y-d.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,gi)!==null}intersectTriangle(e,n,i,r,s){nu.subVectors(n,e),La.subVectors(i,e),iu.crossVectors(nu,La);let o=this.direction.dot(iu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zi.subVectors(this.origin,e);const l=a*this.direction.dot(La.crossVectors(zi,La));if(l<0)return null;const c=a*this.direction.dot(nu.cross(zi));if(c<0||l+c>o)return null;const f=-a*zi.dot(iu);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Dt{constructor(e,n,i,r,s,o,a,l,c,f,h,d,g,y,_,p){Dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,h,d,g,y,_,p)}set(e,n,i,r,s,o,a,l,c,f,h,d,g,y,_,p){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=f,u[10]=h,u[14]=d,u[3]=g,u[7]=y,u[11]=_,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Dt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Jr.setFromMatrixColumn(e,0).length(),s=1/Jr.setFromMatrixColumn(e,1).length(),o=1/Jr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*f,g=o*h,y=a*f,_=a*h;n[0]=l*f,n[4]=-l*h,n[8]=c,n[1]=g+y*c,n[5]=d-_*c,n[9]=-a*l,n[2]=_-d*c,n[6]=y+g*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*f,g=l*h,y=c*f,_=c*h;n[0]=d+_*a,n[4]=y*a-g,n[8]=o*c,n[1]=o*h,n[5]=o*f,n[9]=-a,n[2]=g*a-y,n[6]=_+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*f,g=l*h,y=c*f,_=c*h;n[0]=d-_*a,n[4]=-o*h,n[8]=y+g*a,n[1]=g+y*a,n[5]=o*f,n[9]=_-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*f,g=o*h,y=a*f,_=a*h;n[0]=l*f,n[4]=y*c-g,n[8]=d*c+_,n[1]=l*h,n[5]=_*c+d,n[9]=g*c-y,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,g=o*c,y=a*l,_=a*c;n[0]=l*f,n[4]=_-d*h,n[8]=y*h+g,n[1]=h,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=g*h+y,n[10]=d-_*h}else if(e.order==="XZY"){const d=o*l,g=o*c,y=a*l,_=a*c;n[0]=l*f,n[4]=-h,n[8]=c*f,n[1]=d*h+_,n[5]=o*f,n[9]=g*h-y,n[2]=y*h-g,n[6]=a*f,n[10]=_*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Yx,e,qx)}lookAt(e,n,i){const r=this.elements;return wn.subVectors(e,n),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),Bi.crossVectors(i,wn),Bi.lengthSq()===0&&(Math.abs(i.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),Bi.crossVectors(i,wn)),Bi.normalize(),Da.crossVectors(wn,Bi),r[0]=Bi.x,r[4]=Da.x,r[8]=wn.x,r[1]=Bi.y,r[5]=Da.y,r[9]=wn.y,r[2]=Bi.z,r[6]=Da.z,r[10]=wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],h=i[5],d=i[9],g=i[13],y=i[2],_=i[6],p=i[10],u=i[14],v=i[3],m=i[7],x=i[11],C=i[15],b=r[0],w=r[4],N=r[8],M=r[12],E=r[1],P=r[5],j=r[9],B=r[13],R=r[2],U=r[6],W=r[10],$=r[14],D=r[3],k=r[7],z=r[11],Z=r[15];return s[0]=o*b+a*E+l*R+c*D,s[4]=o*w+a*P+l*U+c*k,s[8]=o*N+a*j+l*W+c*z,s[12]=o*M+a*B+l*$+c*Z,s[1]=f*b+h*E+d*R+g*D,s[5]=f*w+h*P+d*U+g*k,s[9]=f*N+h*j+d*W+g*z,s[13]=f*M+h*B+d*$+g*Z,s[2]=y*b+_*E+p*R+u*D,s[6]=y*w+_*P+p*U+u*k,s[10]=y*N+_*j+p*W+u*z,s[14]=y*M+_*B+p*$+u*Z,s[3]=v*b+m*E+x*R+C*D,s[7]=v*w+m*P+x*U+C*k,s[11]=v*N+m*j+x*W+C*z,s[15]=v*M+m*B+x*$+C*Z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],h=e[6],d=e[10],g=e[14],y=e[3],_=e[7],p=e[11],u=e[15];return y*(+s*l*h-r*c*h-s*a*d+i*c*d+r*a*g-i*l*g)+_*(+n*l*g-n*c*d+s*o*d-r*o*g+r*c*f-s*l*f)+p*(+n*c*h-n*a*g-s*o*h+i*o*g+s*a*f-i*c*f)+u*(-r*a*f-n*l*h+n*a*d+r*o*h-i*o*d+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=e[9],d=e[10],g=e[11],y=e[12],_=e[13],p=e[14],u=e[15],v=h*p*c-_*d*c+_*l*g-a*p*g-h*l*u+a*d*u,m=y*d*c-f*p*c-y*l*g+o*p*g+f*l*u-o*d*u,x=f*_*c-y*h*c+y*a*g-o*_*g-f*a*u+o*h*u,C=y*h*l-f*_*l-y*a*d+o*_*d+f*a*p-o*h*p,b=n*v+i*m+r*x+s*C;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=v*w,e[1]=(_*d*s-h*p*s-_*r*g+i*p*g+h*r*u-i*d*u)*w,e[2]=(a*p*s-_*l*s+_*r*c-i*p*c-a*r*u+i*l*u)*w,e[3]=(h*l*s-a*d*s-h*r*c+i*d*c+a*r*g-i*l*g)*w,e[4]=m*w,e[5]=(f*p*s-y*d*s+y*r*g-n*p*g-f*r*u+n*d*u)*w,e[6]=(y*l*s-o*p*s-y*r*c+n*p*c+o*r*u-n*l*u)*w,e[7]=(o*d*s-f*l*s+f*r*c-n*d*c-o*r*g+n*l*g)*w,e[8]=x*w,e[9]=(y*h*s-f*_*s-y*i*g+n*_*g+f*i*u-n*h*u)*w,e[10]=(o*_*s-y*a*s+y*i*c-n*_*c-o*i*u+n*a*u)*w,e[11]=(f*a*s-o*h*s-f*i*c+n*h*c+o*i*g-n*a*g)*w,e[12]=C*w,e[13]=(f*_*r-y*h*r+y*i*d-n*_*d-f*i*p+n*h*p)*w,e[14]=(y*a*r-o*_*r-y*i*l+n*_*l+o*i*p-n*a*p)*w,e[15]=(o*h*r-f*a*r+f*i*l-n*h*l-o*i*d+n*a*d)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,h=a+a,d=s*c,g=s*f,y=s*h,_=o*f,p=o*h,u=a*h,v=l*c,m=l*f,x=l*h,C=i.x,b=i.y,w=i.z;return r[0]=(1-(_+u))*C,r[1]=(g+x)*C,r[2]=(y-m)*C,r[3]=0,r[4]=(g-x)*b,r[5]=(1-(d+u))*b,r[6]=(p+v)*b,r[7]=0,r[8]=(y+m)*w,r[9]=(p-v)*w,r[10]=(1-(d+_))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Jr.set(r[0],r[1],r[2]).length();const o=Jr.set(r[4],r[5],r[6]).length(),a=Jr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],$n.copy(this);const c=1/s,f=1/o,h=1/a;return $n.elements[0]*=c,$n.elements[1]*=c,$n.elements[2]*=c,$n.elements[4]*=f,$n.elements[5]*=f,$n.elements[6]*=f,$n.elements[8]*=h,$n.elements[9]*=h,$n.elements[10]*=h,n.setFromRotationMatrix($n),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Ai){const l=this.elements,c=2*s/(n-e),f=2*s/(i-r),h=(n+e)/(n-e),d=(i+r)/(i-r);let g,y;if(a===Ai)g=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===Gl)g=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ai){const l=this.elements,c=1/(n-e),f=1/(i-r),h=1/(o-s),d=(n+e)*c,g=(i+r)*f;let y,_;if(a===Ai)y=(o+s)*h,_=-2*h;else if(a===Gl)y=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=_,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Jr=new F,$n=new Dt,Yx=new F(0,0,0),qx=new F(1,1,1),Bi=new F,Da=new F,wn=new F,Tp=new Dt,Ap=new oa;class uc{constructor(e=0,n=0,i=0,r=uc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],h=r[2],d=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(gn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(gn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-gn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(gn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-gn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Tp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Ap.setFromEuler(this),this.setFromQuaternion(Ap,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}uc.DEFAULT_ORDER="XYZ";class Rd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $x=0;const bp=new F,Qr=new oa,vi=new Dt,Ua=new F,uo=new F,Kx=new F,Zx=new oa,Rp=new F(1,0,0),Cp=new F(0,1,0),Pp=new F(0,0,1),Jx={type:"added"},Qx={type:"removed"};class Ht extends Ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$x++}),this.uuid=cr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DEFAULT_UP.clone();const e=new F,n=new uc,i=new oa,r=new F(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Dt},normalMatrix:{value:new nt}}),this.matrix=new Dt,this.matrixWorld=new Dt,this.matrixAutoUpdate=Ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Qr.setFromAxisAngle(e,n),this.quaternion.multiply(Qr),this}rotateOnWorldAxis(e,n){return Qr.setFromAxisAngle(e,n),this.quaternion.premultiply(Qr),this}rotateX(e){return this.rotateOnAxis(Rp,e)}rotateY(e){return this.rotateOnAxis(Cp,e)}rotateZ(e){return this.rotateOnAxis(Pp,e)}translateOnAxis(e,n){return bp.copy(e).applyQuaternion(this.quaternion),this.position.add(bp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Rp,e)}translateY(e){return this.translateOnAxis(Cp,e)}translateZ(e){return this.translateOnAxis(Pp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ua.copy(e):Ua.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(uo,Ua,this.up):vi.lookAt(Ua,uo,this.up),this.quaternion.setFromRotationMatrix(vi),r&&(vi.extractRotation(r.matrixWorld),Qr.setFromRotationMatrix(vi),this.quaternion.premultiply(Qr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Jx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Qx)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(uo,e,Kx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(uo,Zx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),h=o(e.shapes),d=o(e.skeletons),g=o(e.animations),y=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),g.length>0&&(i.animations=g),y.length>0&&(i.nodes=y)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ht.DEFAULT_UP=new F(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kn=new F,_i=new F,ru=new F,yi=new F,es=new F,ts=new F,Lp=new F,su=new F,ou=new F,au=new F;let Ia=!1;class zn{constructor(e=new F,n=new F,i=new F){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Kn.subVectors(e,n),r.cross(Kn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Kn.subVectors(r,n),_i.subVectors(i,n),ru.subVectors(e,n);const o=Kn.dot(Kn),a=Kn.dot(_i),l=Kn.dot(ru),c=_i.dot(_i),f=_i.dot(ru),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,g=(c*l-a*f)*d,y=(o*f-a*l)*d;return s.set(1-g-y,y,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getUV(e,n,i,r,s,o,a,l){return Ia===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ia=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,yi.x),l.addScaledVector(o,yi.y),l.addScaledVector(a,yi.z),l)}static isFrontFacing(e,n,i,r){return Kn.subVectors(i,n),_i.subVectors(e,n),Kn.cross(_i).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Kn.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return zn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Ia===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ia=!0),zn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return zn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;es.subVectors(r,i),ts.subVectors(s,i),su.subVectors(e,i);const l=es.dot(su),c=ts.dot(su);if(l<=0&&c<=0)return n.copy(i);ou.subVectors(e,r);const f=es.dot(ou),h=ts.dot(ou);if(f>=0&&h<=f)return n.copy(r);const d=l*h-f*c;if(d<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(es,o);au.subVectors(e,s);const g=es.dot(au),y=ts.dot(au);if(y>=0&&g<=y)return n.copy(s);const _=g*c-l*y;if(_<=0&&c>=0&&y<=0)return a=c/(c-y),n.copy(i).addScaledVector(ts,a);const p=f*y-g*h;if(p<=0&&h-f>=0&&g-y>=0)return Lp.subVectors(s,r),a=(h-f)/(h-f+(g-y)),n.copy(r).addScaledVector(Lp,a);const u=1/(p+_+d);return o=_*u,a=d*u,n.copy(i).addScaledVector(es,o).addScaledVector(ts,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const q0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},Na={h:0,s:0,l:0};function lu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class it{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=$t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=ht.workingColorSpace){return this.r=e,this.g=n,this.b=i,ht.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=ht.workingColorSpace){if(e=zx(e,1),n=gn(n,0,1),i=gn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=lu(o,s,e+1/3),this.g=lu(o,s,e),this.b=lu(o,s,e-1/3)}return ht.toWorkingColorSpace(this,r),this}setStyle(e,n=$t){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=$t){const i=q0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ns(e.r),this.g=Ns(e.g),this.b=Ns(e.b),this}copyLinearToSRGB(e){return this.r=Kc(e.r),this.g=Kc(e.g),this.b=Kc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$t){return ht.fromWorkingColorSpace(nn.copy(this),e),Math.round(gn(nn.r*255,0,255))*65536+Math.round(gn(nn.g*255,0,255))*256+Math.round(gn(nn.b*255,0,255))}getHexString(e=$t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ht.workingColorSpace){ht.fromWorkingColorSpace(nn.copy(this),n);const i=nn.r,r=nn.g,s=nn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=f<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=ht.workingColorSpace){return ht.fromWorkingColorSpace(nn.copy(this),n),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=$t){ht.fromWorkingColorSpace(nn.copy(this),e);const n=nn.r,i=nn.g,r=nn.b;return e!==$t?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Hi),this.setHSL(Hi.h+e,Hi.s+n,Hi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Hi),e.getHSL(Na);const i=qc(Hi.h,Na.h,n),r=qc(Hi.s,Na.s,n),s=qc(Hi.l,Na.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new it;it.NAMES=q0;let eS=0;class Xr extends Ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:eS++}),this.uuid=cr(),this.name="",this.type="Material",this.blending=Is,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vf,this.blendDst=_f,this.blendEquation=br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=kl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_p,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yr,this.stencilZFail=Yr,this.stencilZPass=Yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Is&&(i.blending=this.blending),this.side!==pi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==vf&&(i.blendSrc=this.blendSrc),this.blendDst!==_f&&(i.blendDst=this.blendDst),this.blendEquation!==br&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==kl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_p&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Yr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Yr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Uo extends Xr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=L0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nt=new F,Fa=new et;class zt{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Ef,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Fa.fromBufferAttribute(this,n),Fa.applyMatrix3(e),this.setXY(n,Fa.x,Fa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyMatrix3(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyMatrix4(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyNormalMatrix(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.transformDirection(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ei(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=gt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ei(n,this.array)),n}setX(e,n){return this.normalized&&(n=gt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ei(n,this.array)),n}setY(e,n){return this.normalized&&(n=gt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ei(n,this.array)),n}setZ(e,n){return this.normalized&&(n=gt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ei(n,this.array)),n}setW(e,n){return this.normalized&&(n=gt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=gt(n,this.array),i=gt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=gt(n,this.array),i=gt(i,this.array),r=gt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=gt(n,this.array),i=gt(i,this.array),r=gt(r,this.array),s=gt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ef&&(e.usage=this.usage),e}}class $0 extends zt{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class K0 extends zt{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class di extends zt{constructor(e,n,i){super(new Float32Array(e),n,i)}}let tS=0;const Nn=new Dt,cu=new Ht,ns=new F,Tn=new aa,fo=new aa,Xt=new F;class Pn extends Ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tS++}),this.uuid=cr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(W0(e)?K0:$0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new nt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,n,i){return Nn.makeTranslation(e,n,i),this.applyMatrix4(Nn),this}scale(e,n,i){return Nn.makeScale(e,n,i),this.applyMatrix4(Nn),this}lookAt(e){return cu.lookAt(e),cu.updateMatrix(),this.applyMatrix4(cu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new di(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new aa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Tn.setFromBufferAttribute(s),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(Tn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];fo.setFromBufferAttribute(a),this.morphTargetsRelative?(Xt.addVectors(Tn.min,fo.min),Tn.expandByPoint(Xt),Xt.addVectors(Tn.max,fo.max),Tn.expandByPoint(Xt)):(Tn.expandByPoint(fo.min),Tn.expandByPoint(fo.max))}Tn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Xt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Xt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Xt.fromBufferAttribute(a,c),l&&(ns.fromBufferAttribute(e,c),Xt.add(ns)),r=Math.max(r,i.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],f=[];for(let E=0;E<a;E++)c[E]=new F,f[E]=new F;const h=new F,d=new F,g=new F,y=new et,_=new et,p=new et,u=new F,v=new F;function m(E,P,j){h.fromArray(r,E*3),d.fromArray(r,P*3),g.fromArray(r,j*3),y.fromArray(o,E*2),_.fromArray(o,P*2),p.fromArray(o,j*2),d.sub(h),g.sub(h),_.sub(y),p.sub(y);const B=1/(_.x*p.y-p.x*_.y);isFinite(B)&&(u.copy(d).multiplyScalar(p.y).addScaledVector(g,-_.y).multiplyScalar(B),v.copy(g).multiplyScalar(_.x).addScaledVector(d,-p.x).multiplyScalar(B),c[E].add(u),c[P].add(u),c[j].add(u),f[E].add(v),f[P].add(v),f[j].add(v))}let x=this.groups;x.length===0&&(x=[{start:0,count:i.length}]);for(let E=0,P=x.length;E<P;++E){const j=x[E],B=j.start,R=j.count;for(let U=B,W=B+R;U<W;U+=3)m(i[U+0],i[U+1],i[U+2])}const C=new F,b=new F,w=new F,N=new F;function M(E){w.fromArray(s,E*3),N.copy(w);const P=c[E];C.copy(P),C.sub(w.multiplyScalar(w.dot(P))).normalize(),b.crossVectors(N,P);const B=b.dot(f[E])<0?-1:1;l[E*4]=C.x,l[E*4+1]=C.y,l[E*4+2]=C.z,l[E*4+3]=B}for(let E=0,P=x.length;E<P;++E){const j=x[E],B=j.start,R=j.count;for(let U=B,W=B+R;U<W;U+=3)M(i[U+0]),M(i[U+1]),M(i[U+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new zt(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,g=i.count;d<g;d++)i.setXYZ(d,0,0,0);const r=new F,s=new F,o=new F,a=new F,l=new F,c=new F,f=new F,h=new F;if(e)for(let d=0,g=e.count;d<g;d+=3){const y=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(n,y),s.fromBufferAttribute(n,_),o.fromBufferAttribute(n,p),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),a.fromBufferAttribute(i,y),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),a.add(f),l.add(f),c.add(f),i.setXYZ(y,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,g=n.count;d<g;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Xt.fromBufferAttribute(e,n),Xt.normalize(),e.setXYZ(n,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,h=a.normalized,d=new c.constructor(l.length*f);let g=0,y=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?g=l[_]*a.data.stride+a.offset:g=l[_]*f;for(let u=0;u<f;u++)d[y++]=c[g++]}return new zt(d,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Pn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,h=c.length;f<h;f++){const d=c[f],g=e(d,i);l.push(g)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let h=0,d=c.length;h<d;h++){const g=c[h];f.push(g.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],h=s[c];for(let d=0,g=h.length;d<g;d++)f.push(h[d].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dp=new Dt,xr=new bd,Oa=new cc,Up=new F,is=new F,rs=new F,ss=new F,uu=new F,ka=new F,za=new et,Ba=new et,Ha=new et,Ip=new F,Np=new F,Fp=new F,Ga=new F,Va=new F;class vn extends Ht{constructor(e=new Pn,n=new Uo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ka.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],h=s[l];f!==0&&(uu.fromBufferAttribute(h,e),o?ka.addScaledVector(uu,f):ka.addScaledVector(uu.sub(n),f))}n.add(ka)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Oa.copy(i.boundingSphere),Oa.applyMatrix4(s),xr.copy(e.ray).recast(e.near),!(Oa.containsPoint(xr.origin)===!1&&(xr.intersectSphere(Oa,Up)===null||xr.origin.distanceToSquared(Up)>(e.far-e.near)**2))&&(Dp.copy(s).invert(),xr.copy(e.ray).applyMatrix4(Dp),!(i.boundingBox!==null&&xr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,xr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,d=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,_=d.length;y<_;y++){const p=d[y],u=o[p.materialIndex],v=Math.max(p.start,g.start),m=Math.min(a.count,Math.min(p.start+p.count,g.start+g.count));for(let x=v,C=m;x<C;x+=3){const b=a.getX(x),w=a.getX(x+1),N=a.getX(x+2);r=Wa(this,u,e,i,c,f,h,b,w,N),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const y=Math.max(0,g.start),_=Math.min(a.count,g.start+g.count);for(let p=y,u=_;p<u;p+=3){const v=a.getX(p),m=a.getX(p+1),x=a.getX(p+2);r=Wa(this,o,e,i,c,f,h,v,m,x),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let y=0,_=d.length;y<_;y++){const p=d[y],u=o[p.materialIndex],v=Math.max(p.start,g.start),m=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let x=v,C=m;x<C;x+=3){const b=x,w=x+1,N=x+2;r=Wa(this,u,e,i,c,f,h,b,w,N),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const y=Math.max(0,g.start),_=Math.min(l.count,g.start+g.count);for(let p=y,u=_;p<u;p+=3){const v=p,m=p+1,x=p+2;r=Wa(this,o,e,i,c,f,h,v,m,x),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function nS(t,e,n,i,r,s,o,a){let l;if(e.side===Mn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===pi,a),l===null)return null;Va.copy(a),Va.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Va);return c<n.near||c>n.far?null:{distance:c,point:Va.clone(),object:t}}function Wa(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,is),t.getVertexPosition(l,rs),t.getVertexPosition(c,ss);const f=nS(t,e,n,i,is,rs,ss,Ga);if(f){r&&(za.fromBufferAttribute(r,a),Ba.fromBufferAttribute(r,l),Ha.fromBufferAttribute(r,c),f.uv=zn.getInterpolation(Ga,is,rs,ss,za,Ba,Ha,new et)),s&&(za.fromBufferAttribute(s,a),Ba.fromBufferAttribute(s,l),Ha.fromBufferAttribute(s,c),f.uv1=zn.getInterpolation(Ga,is,rs,ss,za,Ba,Ha,new et),f.uv2=f.uv1),o&&(Ip.fromBufferAttribute(o,a),Np.fromBufferAttribute(o,l),Fp.fromBufferAttribute(o,c),f.normal=zn.getInterpolation(Ga,is,rs,ss,Ip,Np,Fp,new F),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new F,materialIndex:0};zn.getNormal(is,rs,ss,h.normal),f.face=h}return f}class la extends Pn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],h=[];let d=0,g=0;y("z","y","x",-1,-1,i,n,e,o,s,0),y("z","y","x",1,-1,i,n,-e,o,s,1),y("x","z","y",1,1,e,i,n,r,o,2),y("x","z","y",1,-1,e,i,-n,r,o,3),y("x","y","z",1,-1,e,n,i,r,s,4),y("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new di(c,3)),this.setAttribute("normal",new di(f,3)),this.setAttribute("uv",new di(h,2));function y(_,p,u,v,m,x,C,b,w,N,M){const E=x/w,P=C/N,j=x/2,B=C/2,R=b/2,U=w+1,W=N+1;let $=0,D=0;const k=new F;for(let z=0;z<W;z++){const Z=z*P-B;for(let Q=0;Q<U;Q++){const Y=Q*E-j;k[_]=Y*v,k[p]=Z*m,k[u]=R,c.push(k.x,k.y,k.z),k[_]=0,k[p]=0,k[u]=b>0?1:-1,f.push(k.x,k.y,k.z),h.push(Q/w),h.push(1-z/N),$+=1}}for(let z=0;z<N;z++)for(let Z=0;Z<w;Z++){const Q=d+Z+U*z,Y=d+Z+U*(z+1),K=d+(Z+1)+U*(z+1),ue=d+(Z+1)+U*z;l.push(Q,Y,ue),l.push(Y,K,ue),D+=6}a.addGroup(g,D,M),g+=D,d+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new la(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function js(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function an(t){const e={};for(let n=0;n<t.length;n++){const i=js(t[n]);for(const r in i)e[r]=i[r]}return e}function iS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Z0(t){return t.getRenderTarget()===null?t.outputColorSpace:ht.workingColorSpace}const rS={clone:js,merge:an};var sS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,oS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hi extends Xr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sS,this.fragmentShader=oS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=js(e.uniforms),this.uniformsGroups=iS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class J0 extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Dt,this.projectionMatrix=new Dt,this.projectionMatrixInverse=new Dt,this.coordinateSystem=Ai}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class bn extends J0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Tf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Tf*2*Math.atan(Math.tan(Yc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Yc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const os=-90,as=1;class aS extends Ht{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new bn(os,as,e,n);r.layers=this.layers,this.add(r);const s=new bn(os,as,e,n);s.layers=this.layers,this.add(s);const o=new bn(os,as,e,n);o.layers=this.layers,this.add(o);const a=new bn(os,as,e,n);a.layers=this.layers,this.add(a);const l=new bn(os,as,e,n);l.layers=this.layers,this.add(l);const c=new bn(os,as,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ai)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Gl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(h,d,g),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class Q0 extends En{constructor(e,n,i,r,s,o,a,l,c,f){e=e!==void 0?e:[],n=n!==void 0?n:Vs,super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class lS extends Gr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Do("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Fr?$t:Bn),this.texture=new Q0(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:kn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new la(5,5,5),s=new hi({name:"CubemapFromEquirect",uniforms:js(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Mn,blending:or});s.uniforms.tEquirect.value=n;const o=new vn(r,s),a=n.minFilter;return n.minFilter===Jo&&(n.minFilter=kn),new aS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const fu=new F,cS=new F,uS=new nt;class wr{constructor(e=new F(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=fu.subVectors(i,n).cross(cS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(fu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||uS.getNormalMatrix(e),r=this.coplanarPoint(fu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Sr=new cc,Xa=new F;class Cd{constructor(e=new wr,n=new wr,i=new wr,r=new wr,s=new wr,o=new wr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ai){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],f=r[5],h=r[6],d=r[7],g=r[8],y=r[9],_=r[10],p=r[11],u=r[12],v=r[13],m=r[14],x=r[15];if(i[0].setComponents(l-s,d-c,p-g,x-u).normalize(),i[1].setComponents(l+s,d+c,p+g,x+u).normalize(),i[2].setComponents(l+o,d+f,p+y,x+v).normalize(),i[3].setComponents(l-o,d-f,p-y,x-v).normalize(),i[4].setComponents(l-a,d-h,p-_,x-m).normalize(),n===Ai)i[5].setComponents(l+a,d+h,p+_,x+m).normalize();else if(n===Gl)i[5].setComponents(a,h,_,m).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Sr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Sr)}intersectsSprite(e){return Sr.center.set(0,0,0),Sr.radius=.7071067811865476,Sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Sr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Xa.x=r.normal.x>0?e.max.x:e.min.x,Xa.y=r.normal.y>0?e.max.y:e.min.y,Xa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Xa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ev(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function fS(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,f){const h=c.array,d=c.usage,g=h.byteLength,y=t.createBuffer();t.bindBuffer(f,y),t.bufferData(f,h,d),c.onUploadCallback();let _;if(h instanceof Float32Array)_=t.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)_=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=t.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=t.SHORT;else if(h instanceof Uint32Array)_=t.UNSIGNED_INT;else if(h instanceof Int32Array)_=t.INT;else if(h instanceof Int8Array)_=t.BYTE;else if(h instanceof Uint8Array)_=t.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:y,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:g}}function s(c,f,h){const d=f.array,g=f._updateRange,y=f.updateRanges;if(t.bindBuffer(h,c),g.count===-1&&y.length===0&&t.bufferSubData(h,0,d),y.length!==0){for(let _=0,p=y.length;_<p;_++){const u=y[_];n?t.bufferSubData(h,u.start*d.BYTES_PER_ELEMENT,d,u.start,u.count):t.bufferSubData(h,u.start*d.BYTES_PER_ELEMENT,d.subarray(u.start,u.start+u.count))}f.clearUpdateRanges()}g.count!==-1&&(n?t.bufferSubData(h,g.offset*d.BYTES_PER_ELEMENT,d,g.offset,g.count):t.bufferSubData(h,g.offset*d.BYTES_PER_ELEMENT,d.subarray(g.offset,g.offset+g.count)),g.count=-1),f.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f&&(t.deleteBuffer(f.buffer),i.delete(c))}function l(c,f){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);if(h===void 0)i.set(c,r(c,f));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,f),h.version=c.version}}return{get:o,remove:a,update:l}}class ea extends Pn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,h=e/a,d=n/l,g=[],y=[],_=[],p=[];for(let u=0;u<f;u++){const v=u*d-o;for(let m=0;m<c;m++){const x=m*h-s;y.push(x,-v,0),_.push(0,0,1),p.push(m/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<a;v++){const m=v+c*u,x=v+c*(u+1),C=v+1+c*(u+1),b=v+1+c*u;g.push(m,x,b),g.push(x,C,b)}this.setIndex(g),this.setAttribute("position",new di(y,3)),this.setAttribute("normal",new di(_,3)),this.setAttribute("uv",new di(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ea(e.width,e.height,e.widthSegments,e.heightSegments)}}var dS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hS=`#ifdef USE_ALPHAHASH
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
#endif`,pS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gS=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,vS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_S=`#ifdef USE_AOMAP
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
#endif`,yS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xS=`#ifdef USE_BATCHING
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
#endif`,SS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,MS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ES=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,TS=`#ifdef USE_IRIDESCENCE
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
#endif`,AS=`#ifdef USE_BUMPMAP
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
#endif`,bS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,RS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,CS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,PS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,LS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,DS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,US=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,IS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,NS=`#define PI 3.141592653589793
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
} // validated`,FS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,OS=`vec3 transformedNormal = objectNormal;
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
#endif`,kS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,BS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,HS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,GS="gl_FragColor = linearToOutputTexel( gl_FragColor );",VS=`
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
}`,WS=`#ifdef USE_ENVMAP
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
#endif`,XS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jS=`#ifdef USE_ENVMAP
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
#endif`,YS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qS=`#ifdef USE_ENVMAP
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
#endif`,$S=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,KS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ZS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,JS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,QS=`#ifdef USE_GRADIENTMAP
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
}`,eM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,tM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rM=`uniform bool receiveShadow;
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
#endif`,sM=`#ifdef USE_ENVMAP
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
#endif`,oM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,aM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uM=`PhysicalMaterial material;
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
#endif`,fM=`struct PhysicalMaterial {
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
}`,dM=`
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
#endif`,hM=`#if defined( RE_IndirectDiffuse )
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
#endif`,pM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,_M=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,yM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,SM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,MM=`#if defined( USE_POINTS_UV )
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
#endif`,EM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,TM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,AM=`#ifdef USE_MORPHNORMALS
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
#endif`,bM=`#ifdef USE_MORPHTARGETS
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
#endif`,RM=`#ifdef USE_MORPHTARGETS
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
#endif`,CM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,PM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,LM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,IM=`#ifdef USE_NORMALMAP
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
#endif`,NM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,FM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,OM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,BM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,HM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,GM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,VM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,WM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,XM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,YM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$M=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,KM=`float getShadowMask() {
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
}`,ZM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,JM=`#ifdef USE_SKINNING
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
#endif`,QM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eE=`#ifdef USE_SKINNING
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
#endif`,tE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sE=`#ifdef USE_TRANSMISSION
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
#endif`,oE=`#ifdef USE_TRANSMISSION
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
#endif`,aE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dE=`uniform sampler2D t2D;
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
}`,hE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vE=`#include <common>
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
}`,_E=`#if DEPTH_PACKING == 3200
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
}`,yE=`#define DISTANCE
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
}`,xE=`#define DISTANCE
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
}`,SE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ME=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EE=`uniform float scale;
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
}`,wE=`uniform vec3 diffuse;
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
}`,TE=`#include <common>
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
}`,AE=`uniform vec3 diffuse;
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
}`,bE=`#define LAMBERT
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
}`,RE=`#define LAMBERT
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
}`,CE=`#define MATCAP
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
}`,PE=`#define MATCAP
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
}`,LE=`#define NORMAL
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
}`,DE=`#define NORMAL
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
}`,UE=`#define PHONG
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
}`,IE=`#define PHONG
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
}`,NE=`#define STANDARD
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
}`,FE=`#define STANDARD
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
}`,OE=`#define TOON
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
}`,kE=`#define TOON
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
}`,zE=`uniform float size;
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
}`,BE=`uniform vec3 diffuse;
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
}`,HE=`#include <common>
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
}`,GE=`uniform vec3 color;
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
}`,VE=`uniform float rotation;
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
}`,WE=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:dS,alphahash_pars_fragment:hS,alphamap_fragment:pS,alphamap_pars_fragment:mS,alphatest_fragment:gS,alphatest_pars_fragment:vS,aomap_fragment:_S,aomap_pars_fragment:yS,batching_pars_vertex:xS,batching_vertex:SS,begin_vertex:MS,beginnormal_vertex:ES,bsdfs:wS,iridescence_fragment:TS,bumpmap_pars_fragment:AS,clipping_planes_fragment:bS,clipping_planes_pars_fragment:RS,clipping_planes_pars_vertex:CS,clipping_planes_vertex:PS,color_fragment:LS,color_pars_fragment:DS,color_pars_vertex:US,color_vertex:IS,common:NS,cube_uv_reflection_fragment:FS,defaultnormal_vertex:OS,displacementmap_pars_vertex:kS,displacementmap_vertex:zS,emissivemap_fragment:BS,emissivemap_pars_fragment:HS,colorspace_fragment:GS,colorspace_pars_fragment:VS,envmap_fragment:WS,envmap_common_pars_fragment:XS,envmap_pars_fragment:jS,envmap_pars_vertex:YS,envmap_physical_pars_fragment:sM,envmap_vertex:qS,fog_vertex:$S,fog_pars_vertex:KS,fog_fragment:ZS,fog_pars_fragment:JS,gradientmap_pars_fragment:QS,lightmap_fragment:eM,lightmap_pars_fragment:tM,lights_lambert_fragment:nM,lights_lambert_pars_fragment:iM,lights_pars_begin:rM,lights_toon_fragment:oM,lights_toon_pars_fragment:aM,lights_phong_fragment:lM,lights_phong_pars_fragment:cM,lights_physical_fragment:uM,lights_physical_pars_fragment:fM,lights_fragment_begin:dM,lights_fragment_maps:hM,lights_fragment_end:pM,logdepthbuf_fragment:mM,logdepthbuf_pars_fragment:gM,logdepthbuf_pars_vertex:vM,logdepthbuf_vertex:_M,map_fragment:yM,map_pars_fragment:xM,map_particle_fragment:SM,map_particle_pars_fragment:MM,metalnessmap_fragment:EM,metalnessmap_pars_fragment:wM,morphcolor_vertex:TM,morphnormal_vertex:AM,morphtarget_pars_vertex:bM,morphtarget_vertex:RM,normal_fragment_begin:CM,normal_fragment_maps:PM,normal_pars_fragment:LM,normal_pars_vertex:DM,normal_vertex:UM,normalmap_pars_fragment:IM,clearcoat_normal_fragment_begin:NM,clearcoat_normal_fragment_maps:FM,clearcoat_pars_fragment:OM,iridescence_pars_fragment:kM,opaque_fragment:zM,packing:BM,premultiplied_alpha_fragment:HM,project_vertex:GM,dithering_fragment:VM,dithering_pars_fragment:WM,roughnessmap_fragment:XM,roughnessmap_pars_fragment:jM,shadowmap_pars_fragment:YM,shadowmap_pars_vertex:qM,shadowmap_vertex:$M,shadowmask_pars_fragment:KM,skinbase_vertex:ZM,skinning_pars_vertex:JM,skinning_vertex:QM,skinnormal_vertex:eE,specularmap_fragment:tE,specularmap_pars_fragment:nE,tonemapping_fragment:iE,tonemapping_pars_fragment:rE,transmission_fragment:sE,transmission_pars_fragment:oE,uv_pars_fragment:aE,uv_pars_vertex:lE,uv_vertex:cE,worldpos_vertex:uE,background_vert:fE,background_frag:dE,backgroundCube_vert:hE,backgroundCube_frag:pE,cube_vert:mE,cube_frag:gE,depth_vert:vE,depth_frag:_E,distanceRGBA_vert:yE,distanceRGBA_frag:xE,equirect_vert:SE,equirect_frag:ME,linedashed_vert:EE,linedashed_frag:wE,meshbasic_vert:TE,meshbasic_frag:AE,meshlambert_vert:bE,meshlambert_frag:RE,meshmatcap_vert:CE,meshmatcap_frag:PE,meshnormal_vert:LE,meshnormal_frag:DE,meshphong_vert:UE,meshphong_frag:IE,meshphysical_vert:NE,meshphysical_frag:FE,meshtoon_vert:OE,meshtoon_frag:kE,points_vert:zE,points_frag:BE,shadow_vert:HE,shadow_frag:GE,sprite_vert:VE,sprite_frag:WE},fe={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},ai={basic:{uniforms:an([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:an([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new it(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:an([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:an([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:an([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new it(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:an([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:an([fe.points,fe.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:an([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:an([fe.common,fe.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:an([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:an([fe.sprite,fe.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:an([fe.common,fe.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:an([fe.lights,fe.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};ai.physical={uniforms:an([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const ja={r:0,b:0,g:0};function XE(t,e,n,i,r,s,o){const a=new it(0);let l=s===!0?0:1,c,f,h=null,d=0,g=null;function y(p,u){let v=!1,m=u.isScene===!0?u.background:null;m&&m.isTexture&&(m=(u.backgroundBlurriness>0?n:e).get(m)),m===null?_(a,l):m&&m.isColor&&(_(m,1),v=!0);const x=t.xr.getEnvironmentBlendMode();x==="additive"?i.buffers.color.setClear(0,0,0,1,o):x==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),m&&(m.isCubeTexture||m.mapping===ac)?(f===void 0&&(f=new vn(new la(1,1,1),new hi({name:"BackgroundCubeMaterial",uniforms:js(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(C,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=m,f.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,f.material.toneMapped=ht.getTransfer(m.colorSpace)!==Et,(h!==m||d!==m.version||g!==t.toneMapping)&&(f.material.needsUpdate=!0,h=m,d=m.version,g=t.toneMapping),f.layers.enableAll(),p.unshift(f,f.geometry,f.material,0,0,null)):m&&m.isTexture&&(c===void 0&&(c=new vn(new ea(2,2),new hi({name:"BackgroundMaterial",uniforms:js(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=m,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=ht.getTransfer(m.colorSpace)!==Et,m.matrixAutoUpdate===!0&&m.updateMatrix(),c.material.uniforms.uvTransform.value.copy(m.matrix),(h!==m||d!==m.version||g!==t.toneMapping)&&(c.material.needsUpdate=!0,h=m,d=m.version,g=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,u){p.getRGB(ja,Z0(t)),i.buffers.color.setClear(ja.r,ja.g,ja.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(p,u=1){a.set(p),l=u,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:y}}function jE(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let c=l,f=!1;function h(R,U,W,$,D){let k=!1;if(o){const z=_($,W,U);c!==z&&(c=z,g(c.object)),k=u(R,$,W,D),k&&v(R,$,W,D)}else{const z=U.wireframe===!0;(c.geometry!==$.id||c.program!==W.id||c.wireframe!==z)&&(c.geometry=$.id,c.program=W.id,c.wireframe=z,k=!0)}D!==null&&n.update(D,t.ELEMENT_ARRAY_BUFFER),(k||f)&&(f=!1,N(R,U,W,$),D!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(D).buffer))}function d(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function g(R){return i.isWebGL2?t.bindVertexArray(R):s.bindVertexArrayOES(R)}function y(R){return i.isWebGL2?t.deleteVertexArray(R):s.deleteVertexArrayOES(R)}function _(R,U,W){const $=W.wireframe===!0;let D=a[R.id];D===void 0&&(D={},a[R.id]=D);let k=D[U.id];k===void 0&&(k={},D[U.id]=k);let z=k[$];return z===void 0&&(z=p(d()),k[$]=z),z}function p(R){const U=[],W=[],$=[];for(let D=0;D<r;D++)U[D]=0,W[D]=0,$[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:W,attributeDivisors:$,object:R,attributes:{},index:null}}function u(R,U,W,$){const D=c.attributes,k=U.attributes;let z=0;const Z=W.getAttributes();for(const Q in Z)if(Z[Q].location>=0){const K=D[Q];let ue=k[Q];if(ue===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(ue=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(ue=R.instanceColor)),K===void 0||K.attribute!==ue||ue&&K.data!==ue.data)return!0;z++}return c.attributesNum!==z||c.index!==$}function v(R,U,W,$){const D={},k=U.attributes;let z=0;const Z=W.getAttributes();for(const Q in Z)if(Z[Q].location>=0){let K=k[Q];K===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(K=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(K=R.instanceColor));const ue={};ue.attribute=K,K&&K.data&&(ue.data=K.data),D[Q]=ue,z++}c.attributes=D,c.attributesNum=z,c.index=$}function m(){const R=c.newAttributes;for(let U=0,W=R.length;U<W;U++)R[U]=0}function x(R){C(R,0)}function C(R,U){const W=c.newAttributes,$=c.enabledAttributes,D=c.attributeDivisors;W[R]=1,$[R]===0&&(t.enableVertexAttribArray(R),$[R]=1),D[R]!==U&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,U),D[R]=U)}function b(){const R=c.newAttributes,U=c.enabledAttributes;for(let W=0,$=U.length;W<$;W++)U[W]!==R[W]&&(t.disableVertexAttribArray(W),U[W]=0)}function w(R,U,W,$,D,k,z){z===!0?t.vertexAttribIPointer(R,U,W,D,k):t.vertexAttribPointer(R,U,W,$,D,k)}function N(R,U,W,$){if(i.isWebGL2===!1&&(R.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();const D=$.attributes,k=W.getAttributes(),z=U.defaultAttributeValues;for(const Z in k){const Q=k[Z];if(Q.location>=0){let Y=D[Z];if(Y===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(Y=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(Y=R.instanceColor)),Y!==void 0){const K=Y.normalized,ue=Y.itemSize,le=n.get(Y);if(le===void 0)continue;const me=le.buffer,Le=le.type,ze=le.bytesPerElement,Re=i.isWebGL2===!0&&(Le===t.INT||Le===t.UNSIGNED_INT||Y.gpuType===I0);if(Y.isInterleavedBufferAttribute){const qe=Y.data,H=qe.stride,Tt=Y.offset;if(qe.isInstancedInterleavedBuffer){for(let De=0;De<Q.locationSize;De++)C(Q.location+De,qe.meshPerAttribute);R.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=qe.meshPerAttribute*qe.count)}else for(let De=0;De<Q.locationSize;De++)x(Q.location+De);t.bindBuffer(t.ARRAY_BUFFER,me);for(let De=0;De<Q.locationSize;De++)w(Q.location+De,ue/Q.locationSize,Le,K,H*ze,(Tt+ue/Q.locationSize*De)*ze,Re)}else{if(Y.isInstancedBufferAttribute){for(let qe=0;qe<Q.locationSize;qe++)C(Q.location+qe,Y.meshPerAttribute);R.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let qe=0;qe<Q.locationSize;qe++)x(Q.location+qe);t.bindBuffer(t.ARRAY_BUFFER,me);for(let qe=0;qe<Q.locationSize;qe++)w(Q.location+qe,ue/Q.locationSize,Le,K,ue*ze,ue/Q.locationSize*qe*ze,Re)}}else if(z!==void 0){const K=z[Z];if(K!==void 0)switch(K.length){case 2:t.vertexAttrib2fv(Q.location,K);break;case 3:t.vertexAttrib3fv(Q.location,K);break;case 4:t.vertexAttrib4fv(Q.location,K);break;default:t.vertexAttrib1fv(Q.location,K)}}}}b()}function M(){j();for(const R in a){const U=a[R];for(const W in U){const $=U[W];for(const D in $)y($[D].object),delete $[D];delete U[W]}delete a[R]}}function E(R){if(a[R.id]===void 0)return;const U=a[R.id];for(const W in U){const $=U[W];for(const D in $)y($[D].object),delete $[D];delete U[W]}delete a[R.id]}function P(R){for(const U in a){const W=a[U];if(W[R.id]===void 0)continue;const $=W[R.id];for(const D in $)y($[D].object),delete $[D];delete W[R.id]}}function j(){B(),f=!0,c!==l&&(c=l,g(c.object))}function B(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:j,resetDefaultState:B,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfProgram:P,initAttributes:m,enableAttribute:x,disableUnusedAttributes:b}}function YE(t,e,n,i){const r=i.isWebGL2;let s;function o(f){s=f}function a(f,h){t.drawArrays(s,f,h),n.update(h,s,1)}function l(f,h,d){if(d===0)return;let g,y;if(r)g=t,y="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[y](s,f,h,d),n.update(h,s,d)}function c(f,h,d){if(d===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let y=0;y<d;y++)this.render(f[y],h[y]);else{g.multiDrawArraysWEBGL(s,f,0,h,0,d);let y=0;for(let _=0;_<d;_++)y+=h[_];n.update(y,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function qE(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),y=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),_=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),m=d>0,x=o||e.has("OES_texture_float"),C=m&&x,b=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:d,maxTextureSize:g,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:v,vertexTextures:m,floatFragmentTextures:x,floatVertexTextures:C,maxSamples:b}}function $E(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new wr,a=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const g=h.length!==0||d||i!==0||r;return r=d,i=h.length,g},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=f(h,d,0)},this.setState=function(h,d,g){const y=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,u=t.get(h);if(!r||y===null||y.length===0||s&&!p)s?f(null):c();else{const v=s?0:i,m=v*4;let x=u.clippingState||null;l.value=x,x=f(y,d,m,g);for(let C=0;C!==m;++C)x[C]=n[C];u.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,d,g,y){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=l.value,y!==!0||p===null){const u=g+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<u)&&(p=new Float32Array(u));for(let m=0,x=g;m!==_;++m,x+=4)o.copy(h[m]).applyMatrix4(v,a),o.normal.toArray(p,x),p[x+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function KE(t){let e=new WeakMap;function n(o,a){return a===yf?o.mapping=Vs:a===xf&&(o.mapping=Ws),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===yf||a===xf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new lS(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class tv extends J0{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ts=4,Op=[.125,.215,.35,.446,.526,.582],Rr=20,du=new tv,kp=new it;let hu=null,pu=0,mu=0;const Tr=(1+Math.sqrt(5))/2,ls=1/Tr,zp=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,Tr,ls),new F(0,Tr,-ls),new F(ls,0,Tr),new F(-ls,0,Tr),new F(Tr,ls,0),new F(-Tr,ls,0)];class Bp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){hu=this._renderer.getRenderTarget(),pu=this._renderer.getActiveCubeFace(),mu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(hu,pu,mu),e.scissorTest=!1,Ya(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Vs||e.mapping===Ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hu=this._renderer.getRenderTarget(),pu=this._renderer.getActiveCubeFace(),mu=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:Qo,format:ti,colorSpace:Di,depthBuffer:!1},r=Hp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ZE(s)),this._blurMaterial=JE(s,e,n)}return r}_compileMaterial(e){const n=new vn(this._lodPlanes[0],e);this._renderer.compile(n,du)}_sceneToCubeUV(e,n,i,r){const a=new bn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(kp),f.toneMapping=ar,f.autoClear=!1;const g=new Uo({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1}),y=new vn(new la,g);let _=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,_=!0):(g.color.copy(kp),_=!0);for(let u=0;u<6;u++){const v=u%3;v===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):v===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const m=this._cubeSize;Ya(r,v*m,u>2?m:0,m,m),f.setRenderTarget(r),_&&f.render(y,a),f.render(e,a)}y.geometry.dispose(),y.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Vs||e.mapping===Ws;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new vn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ya(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,du)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=zp[(r-1)%zp.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new vn(this._lodPlanes[r],c),d=c.uniforms,g=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Rr-1),_=s/y,p=isFinite(s)?1+Math.floor(f*_):Rr;p>Rr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Rr}`);const u=[];let v=0;for(let w=0;w<Rr;++w){const N=w/_,M=Math.exp(-N*N/2);u.push(M),w===0?v+=M:w<p&&(v+=2*M)}for(let w=0;w<u.length;w++)u[w]=u[w]/v;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=u,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:m}=this;d.dTheta.value=y,d.mipInt.value=m-i;const x=this._sizeLods[r],C=3*x*(r>m-Ts?r-m+Ts:0),b=4*(this._cubeSize-x);Ya(n,C,b,3*x,2*x),l.setRenderTarget(n),l.render(h,du)}}function ZE(t){const e=[],n=[],i=[];let r=t;const s=t-Ts+1+Op.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Ts?l=Op[o-t+Ts-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),f=-c,h=1+c,d=[f,f,h,f,h,h,f,f,h,h,f,h],g=6,y=6,_=3,p=2,u=1,v=new Float32Array(_*y*g),m=new Float32Array(p*y*g),x=new Float32Array(u*y*g);for(let b=0;b<g;b++){const w=b%3*2/3-1,N=b>2?0:-1,M=[w,N,0,w+2/3,N,0,w+2/3,N+1,0,w,N,0,w+2/3,N+1,0,w,N+1,0];v.set(M,_*y*b),m.set(d,p*y*b);const E=[b,b,b,b,b,b];x.set(E,u*y*b)}const C=new Pn;C.setAttribute("position",new zt(v,_)),C.setAttribute("uv",new zt(m,p)),C.setAttribute("faceIndex",new zt(x,u)),e.push(C),r>Ts&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Hp(t,e,n){const i=new Gr(t,e,n);return i.texture.mapping=ac,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ya(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function JE(t,e,n){const i=new Float32Array(Rr),r=new F(0,1,0);return new hi({name:"SphericalGaussianBlur",defines:{n:Rr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Pd(),fragmentShader:`

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
		`,blending:or,depthTest:!1,depthWrite:!1})}function Gp(){return new hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pd(),fragmentShader:`

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
		`,blending:or,depthTest:!1,depthWrite:!1})}function Vp(){return new hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function Pd(){return`

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
	`}function QE(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===yf||l===xf,f=l===Vs||l===Ws;if(c||f)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return n===null&&(n=new Bp(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||f&&h&&r(h)){n===null&&(n=new Bp(t));const d=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function ew(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function tw(t,e,n,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const y in d.attributes)e.remove(d.attributes[y]);for(const y in d.morphAttributes){const _=d.morphAttributes[y];for(let p=0,u=_.length;p<u;p++)e.remove(_[p])}d.removeEventListener("dispose",o),delete r[d.id];const g=s.get(d);g&&(e.remove(g),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const y in d)e.update(d[y],t.ARRAY_BUFFER);const g=h.morphAttributes;for(const y in g){const _=g[y];for(let p=0,u=_.length;p<u;p++)e.update(_[p],t.ARRAY_BUFFER)}}function c(h){const d=[],g=h.index,y=h.attributes.position;let _=0;if(g!==null){const v=g.array;_=g.version;for(let m=0,x=v.length;m<x;m+=3){const C=v[m+0],b=v[m+1],w=v[m+2];d.push(C,b,b,w,w,C)}}else if(y!==void 0){const v=y.array;_=y.version;for(let m=0,x=v.length/3-1;m<x;m+=3){const C=m+0,b=m+1,w=m+2;d.push(C,b,b,w,w,C)}}else return;const p=new(W0(d)?K0:$0)(d,1);p.version=_;const u=s.get(h);u&&e.remove(u),s.set(h,p)}function f(h){const d=s.get(h);if(d){const g=h.index;g!==null&&d.version<g.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:f}}function nw(t,e,n,i){const r=i.isWebGL2;let s;function o(g){s=g}let a,l;function c(g){a=g.type,l=g.bytesPerElement}function f(g,y){t.drawElements(s,y,a,g*l),n.update(y,s,1)}function h(g,y,_){if(_===0)return;let p,u;if(r)p=t,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](s,y,a,g*l,_),n.update(y,s,_)}function d(g,y,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<_;u++)this.render(g[u]/l,y[u]);else{p.multiDrawElementsWEBGL(s,y,0,a,g,0,_);let u=0;for(let v=0;v<_;v++)u+=y[v];n.update(u,s,1)}}this.setMode=o,this.setIndex=c,this.render=f,this.renderInstances=h,this.renderMultiDraw=d}function iw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function rw(t,e){return t[0]-e[0]}function sw(t,e){return Math.abs(e[1])-Math.abs(t[1])}function ow(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new bt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,f,h){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const y=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=y!==void 0?y.length:0;let p=s.get(f);if(p===void 0||p.count!==_){let U=function(){B.dispose(),s.delete(f),f.removeEventListener("dispose",U)};var g=U;p!==void 0&&p.texture.dispose();const m=f.morphAttributes.position!==void 0,x=f.morphAttributes.normal!==void 0,C=f.morphAttributes.color!==void 0,b=f.morphAttributes.position||[],w=f.morphAttributes.normal||[],N=f.morphAttributes.color||[];let M=0;m===!0&&(M=1),x===!0&&(M=2),C===!0&&(M=3);let E=f.attributes.position.count*M,P=1;E>e.maxTextureSize&&(P=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const j=new Float32Array(E*P*4*_),B=new Y0(j,E,P,_);B.type=Ki,B.needsUpdate=!0;const R=M*4;for(let W=0;W<_;W++){const $=b[W],D=w[W],k=N[W],z=E*P*4*W;for(let Z=0;Z<$.count;Z++){const Q=Z*R;m===!0&&(o.fromBufferAttribute($,Z),j[z+Q+0]=o.x,j[z+Q+1]=o.y,j[z+Q+2]=o.z,j[z+Q+3]=0),x===!0&&(o.fromBufferAttribute(D,Z),j[z+Q+4]=o.x,j[z+Q+5]=o.y,j[z+Q+6]=o.z,j[z+Q+7]=0),C===!0&&(o.fromBufferAttribute(k,Z),j[z+Q+8]=o.x,j[z+Q+9]=o.y,j[z+Q+10]=o.z,j[z+Q+11]=k.itemSize===4?o.w:1)}}p={count:_,texture:B,size:new et(E,P)},s.set(f,p),f.addEventListener("dispose",U)}let u=0;for(let m=0;m<d.length;m++)u+=d[m];const v=f.morphTargetsRelative?1:1-u;h.getUniforms().setValue(t,"morphTargetBaseInfluence",v),h.getUniforms().setValue(t,"morphTargetInfluences",d),h.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),h.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const y=d===void 0?0:d.length;let _=i[f.id];if(_===void 0||_.length!==y){_=[];for(let x=0;x<y;x++)_[x]=[x,0];i[f.id]=_}for(let x=0;x<y;x++){const C=_[x];C[0]=x,C[1]=d[x]}_.sort(sw);for(let x=0;x<8;x++)x<y&&_[x][1]?(a[x][0]=_[x][0],a[x][1]=_[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(rw);const p=f.morphAttributes.position,u=f.morphAttributes.normal;let v=0;for(let x=0;x<8;x++){const C=a[x],b=C[0],w=C[1];b!==Number.MAX_SAFE_INTEGER&&w?(p&&f.getAttribute("morphTarget"+x)!==p[b]&&f.setAttribute("morphTarget"+x,p[b]),u&&f.getAttribute("morphNormal"+x)!==u[b]&&f.setAttribute("morphNormal"+x,u[b]),r[x]=w,v+=w):(p&&f.hasAttribute("morphTarget"+x)===!0&&f.deleteAttribute("morphTarget"+x),u&&f.hasAttribute("morphNormal"+x)===!0&&f.deleteAttribute("morphNormal"+x),r[x]=0)}const m=f.morphTargetsRelative?1:1-v;h.getUniforms().setValue(t,"morphTargetBaseInfluence",m),h.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function aw(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,h=e.get(l,f);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class nv extends En{constructor(e,n,i,r,s,o,a,l,c,f){if(f=f!==void 0?f:Nr,f!==Nr&&f!==Xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===Nr&&(i=$i),i===void 0&&f===Xs&&(i=Ir),super(null,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:cn,this.minFilter=l!==void 0?l:cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const iv=new En,rv=new nv(1,1);rv.compareFunction=V0;const sv=new Y0,ov=new Xx,av=new Q0,Wp=[],Xp=[],jp=new Float32Array(16),Yp=new Float32Array(9),qp=new Float32Array(4);function Zs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Wp[r];if(s===void 0&&(s=new Float32Array(r),Wp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Gt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Vt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function fc(t,e){let n=Xp[e];n===void 0&&(n=new Int32Array(e),Xp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function lw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function cw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Gt(n,e))return;t.uniform2fv(this.addr,e),Vt(n,e)}}function uw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Gt(n,e))return;t.uniform3fv(this.addr,e),Vt(n,e)}}function fw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Gt(n,e))return;t.uniform4fv(this.addr,e),Vt(n,e)}}function dw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Gt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Vt(n,e)}else{if(Gt(n,i))return;qp.set(i),t.uniformMatrix2fv(this.addr,!1,qp),Vt(n,i)}}function hw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Gt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Vt(n,e)}else{if(Gt(n,i))return;Yp.set(i),t.uniformMatrix3fv(this.addr,!1,Yp),Vt(n,i)}}function pw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Gt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Vt(n,e)}else{if(Gt(n,i))return;jp.set(i),t.uniformMatrix4fv(this.addr,!1,jp),Vt(n,i)}}function mw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function gw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Gt(n,e))return;t.uniform2iv(this.addr,e),Vt(n,e)}}function vw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Gt(n,e))return;t.uniform3iv(this.addr,e),Vt(n,e)}}function _w(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Gt(n,e))return;t.uniform4iv(this.addr,e),Vt(n,e)}}function yw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function xw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Gt(n,e))return;t.uniform2uiv(this.addr,e),Vt(n,e)}}function Sw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Gt(n,e))return;t.uniform3uiv(this.addr,e),Vt(n,e)}}function Mw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Gt(n,e))return;t.uniform4uiv(this.addr,e),Vt(n,e)}}function Ew(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?rv:iv;n.setTexture2D(e||s,r)}function ww(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||ov,r)}function Tw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||av,r)}function Aw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||sv,r)}function bw(t){switch(t){case 5126:return lw;case 35664:return cw;case 35665:return uw;case 35666:return fw;case 35674:return dw;case 35675:return hw;case 35676:return pw;case 5124:case 35670:return mw;case 35667:case 35671:return gw;case 35668:case 35672:return vw;case 35669:case 35673:return _w;case 5125:return yw;case 36294:return xw;case 36295:return Sw;case 36296:return Mw;case 35678:case 36198:case 36298:case 36306:case 35682:return Ew;case 35679:case 36299:case 36307:return ww;case 35680:case 36300:case 36308:case 36293:return Tw;case 36289:case 36303:case 36311:case 36292:return Aw}}function Rw(t,e){t.uniform1fv(this.addr,e)}function Cw(t,e){const n=Zs(e,this.size,2);t.uniform2fv(this.addr,n)}function Pw(t,e){const n=Zs(e,this.size,3);t.uniform3fv(this.addr,n)}function Lw(t,e){const n=Zs(e,this.size,4);t.uniform4fv(this.addr,n)}function Dw(t,e){const n=Zs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Uw(t,e){const n=Zs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Iw(t,e){const n=Zs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Nw(t,e){t.uniform1iv(this.addr,e)}function Fw(t,e){t.uniform2iv(this.addr,e)}function Ow(t,e){t.uniform3iv(this.addr,e)}function kw(t,e){t.uniform4iv(this.addr,e)}function zw(t,e){t.uniform1uiv(this.addr,e)}function Bw(t,e){t.uniform2uiv(this.addr,e)}function Hw(t,e){t.uniform3uiv(this.addr,e)}function Gw(t,e){t.uniform4uiv(this.addr,e)}function Vw(t,e,n){const i=this.cache,r=e.length,s=fc(n,r);Gt(i,s)||(t.uniform1iv(this.addr,s),Vt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||iv,s[o])}function Ww(t,e,n){const i=this.cache,r=e.length,s=fc(n,r);Gt(i,s)||(t.uniform1iv(this.addr,s),Vt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||ov,s[o])}function Xw(t,e,n){const i=this.cache,r=e.length,s=fc(n,r);Gt(i,s)||(t.uniform1iv(this.addr,s),Vt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||av,s[o])}function jw(t,e,n){const i=this.cache,r=e.length,s=fc(n,r);Gt(i,s)||(t.uniform1iv(this.addr,s),Vt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||sv,s[o])}function Yw(t){switch(t){case 5126:return Rw;case 35664:return Cw;case 35665:return Pw;case 35666:return Lw;case 35674:return Dw;case 35675:return Uw;case 35676:return Iw;case 5124:case 35670:return Nw;case 35667:case 35671:return Fw;case 35668:case 35672:return Ow;case 35669:case 35673:return kw;case 5125:return zw;case 36294:return Bw;case 36295:return Hw;case 36296:return Gw;case 35678:case 36198:case 36298:case 36306:case 35682:return Vw;case 35679:case 36299:case 36307:return Ww;case 35680:case 36300:case 36308:case 36293:return Xw;case 36289:case 36303:case 36311:case 36292:return jw}}class qw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=bw(n.type)}}class $w{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Yw(n.type)}}class Kw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const gu=/(\w+)(\])?(\[|\.)?/g;function $p(t,e){t.seq.push(e),t.map[e.id]=e}function Zw(t,e,n){const i=t.name,r=i.length;for(gu.lastIndex=0;;){const s=gu.exec(i),o=gu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){$p(n,c===void 0?new qw(a,t,e):new $w(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new Kw(a),$p(n,h)),n=h}}}class hl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);Zw(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Kp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Jw=37297;let Qw=0;function e1(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function t1(t){const e=ht.getPrimaries(ht.workingColorSpace),n=ht.getPrimaries(t);let i;switch(e===n?i="":e===Hl&&n===Bl?i="LinearDisplayP3ToLinearSRGB":e===Bl&&n===Hl&&(i="LinearSRGBToLinearDisplayP3"),t){case Di:case lc:return[i,"LinearTransferOETF"];case $t:case Ad:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Zp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+e1(t.getShaderSource(e),o)}else return r}function n1(t,e){const n=t1(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function i1(t,e){let n;switch(e){case mx:n="Linear";break;case gx:n="Reinhard";break;case vx:n="OptimizedCineon";break;case D0:n="ACESFilmic";break;case yx:n="AgX";break;case _x:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function r1(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(As).join(`
`)}function s1(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(As).join(`
`)}function o1(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function a1(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function As(t){return t!==""}function Jp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const l1=/^[ \t]*#include +<([\w\d./]+)>/gm;function bf(t){return t.replace(l1,u1)}const c1=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function u1(t,e){let n=Qe[e];if(n===void 0){const i=c1.get(e);if(i!==void 0)n=Qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return bf(n)}const f1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function em(t){return t.replace(f1,d1)}function d1(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function tm(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function h1(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===P0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Vy?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===xi&&(e="SHADOWMAP_TYPE_VSM"),e}function p1(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Vs:case Ws:e="ENVMAP_TYPE_CUBE";break;case ac:e="ENVMAP_TYPE_CUBE_UV";break}return e}function m1(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ws:e="ENVMAP_MODE_REFRACTION";break}return e}function g1(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case L0:e="ENVMAP_BLENDING_MULTIPLY";break;case hx:e="ENVMAP_BLENDING_MIX";break;case px:e="ENVMAP_BLENDING_ADD";break}return e}function v1(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function _1(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=h1(n),c=p1(n),f=m1(n),h=g1(n),d=v1(n),g=n.isWebGL2?"":r1(n),y=s1(n),_=o1(s),p=r.createProgram();let u,v,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(As).join(`
`),u.length>0&&(u+=`
`),v=[g,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(As).join(`
`),v.length>0&&(v+=`
`)):(u=[tm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(As).join(`
`),v=[g,tm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ar?"#define TONE_MAPPING":"",n.toneMapping!==ar?Qe.tonemapping_pars_fragment:"",n.toneMapping!==ar?i1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,n1("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(As).join(`
`)),o=bf(o),o=Jp(o,n),o=Qp(o,n),a=bf(a),a=Jp(a,n),a=Qp(a,n),o=em(o),a=em(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,u=[y,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,v=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===yp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===yp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const x=m+u+o,C=m+v+a,b=Kp(r,r.VERTEX_SHADER,x),w=Kp(r,r.FRAGMENT_SHADER,C);r.attachShader(p,b),r.attachShader(p,w),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function N(j){if(t.debug.checkShaderErrors){const B=r.getProgramInfoLog(p).trim(),R=r.getShaderInfoLog(b).trim(),U=r.getShaderInfoLog(w).trim();let W=!0,$=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(W=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,p,b,w);else{const D=Zp(r,b,"vertex"),k=Zp(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Program Info Log: `+B+`
`+D+`
`+k)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(R===""||U==="")&&($=!1);$&&(j.diagnostics={runnable:W,programLog:B,vertexShader:{log:R,prefix:u},fragmentShader:{log:U,prefix:v}})}r.deleteShader(b),r.deleteShader(w),M=new hl(r,p),E=a1(r,p)}let M;this.getUniforms=function(){return M===void 0&&N(this),M};let E;this.getAttributes=function(){return E===void 0&&N(this),E};let P=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(p,Jw)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Qw++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=b,this.fragmentShader=w,this}let y1=0;class x1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new S1(e),n.set(e,i)),i}}class S1{constructor(e){this.id=y1++,this.code=e,this.usedTimes=0}}function M1(t,e,n,i,r,s,o){const a=new Rd,l=new x1,c=[],f=r.isWebGL2,h=r.logarithmicDepthBuffer,d=r.vertexTextures;let g=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function p(M,E,P,j,B){const R=j.fog,U=B.geometry,W=M.isMeshStandardMaterial?j.environment:null,$=(M.isMeshStandardMaterial?n:e).get(M.envMap||W),D=$&&$.mapping===ac?$.image.height:null,k=y[M.type];M.precision!==null&&(g=r.getMaxPrecision(M.precision),g!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",g,"instead."));const z=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,Z=z!==void 0?z.length:0;let Q=0;U.morphAttributes.position!==void 0&&(Q=1),U.morphAttributes.normal!==void 0&&(Q=2),U.morphAttributes.color!==void 0&&(Q=3);let Y,K,ue,le;if(k){const ve=ai[k];Y=ve.vertexShader,K=ve.fragmentShader}else Y=M.vertexShader,K=M.fragmentShader,l.update(M),ue=l.getVertexShaderID(M),le=l.getFragmentShaderID(M);const me=t.getRenderTarget(),Le=B.isInstancedMesh===!0,ze=B.isBatchedMesh===!0,Re=!!M.map,qe=!!M.matcap,H=!!$,Tt=!!M.aoMap,De=!!M.lightMap,Ge=!!M.bumpMap,Me=!!M.normalMap,pt=!!M.displacementMap,Be=!!M.emissiveMap,A=!!M.metalnessMap,S=!!M.roughnessMap,G=M.anisotropy>0,ne=M.clearcoat>0,te=M.iridescence>0,ie=M.sheen>0,we=M.transmission>0,ge=G&&!!M.anisotropyMap,ye=ne&&!!M.clearcoatMap,Ue=ne&&!!M.clearcoatNormalMap,$e=ne&&!!M.clearcoatRoughnessMap,ee=te&&!!M.iridescenceMap,at=te&&!!M.iridescenceThicknessMap,Ke=ie&&!!M.sheenColorMap,Xe=ie&&!!M.sheenRoughnessMap,Ce=!!M.specularMap,xe=!!M.specularColorMap,Ye=!!M.specularIntensityMap,ct=we&&!!M.transmissionMap,St=we&&!!M.thicknessMap,Ze=!!M.gradientMap,se=!!M.alphaMap,L=M.alphaTest>0,he=!!M.alphaHash,pe=!!M.extensions,He=!!U.attributes.uv1,Ie=!!U.attributes.uv2,q=!!U.attributes.uv3;let oe=ar;return M.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(oe=t.toneMapping),{isWebGL2:f,shaderID:k,shaderType:M.type,shaderName:M.name,vertexShader:Y,fragmentShader:K,defines:M.defines,customVertexShaderID:ue,customFragmentShaderID:le,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:g,batching:ze,instancing:Le,instancingColor:Le&&B.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:me===null?t.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Di,map:Re,matcap:qe,envMap:H,envMapMode:H&&$.mapping,envMapCubeUVHeight:D,aoMap:Tt,lightMap:De,bumpMap:Ge,normalMap:Me,displacementMap:d&&pt,emissiveMap:Be,normalMapObjectSpace:Me&&M.normalMapType===Lx,normalMapTangentSpace:Me&&M.normalMapType===G0,metalnessMap:A,roughnessMap:S,anisotropy:G,anisotropyMap:ge,clearcoat:ne,clearcoatMap:ye,clearcoatNormalMap:Ue,clearcoatRoughnessMap:$e,iridescence:te,iridescenceMap:ee,iridescenceThicknessMap:at,sheen:ie,sheenColorMap:Ke,sheenRoughnessMap:Xe,specularMap:Ce,specularColorMap:xe,specularIntensityMap:Ye,transmission:we,transmissionMap:ct,thicknessMap:St,gradientMap:Ze,opaque:M.transparent===!1&&M.blending===Is,alphaMap:se,alphaTest:L,alphaHash:he,combine:M.combine,mapUv:Re&&_(M.map.channel),aoMapUv:Tt&&_(M.aoMap.channel),lightMapUv:De&&_(M.lightMap.channel),bumpMapUv:Ge&&_(M.bumpMap.channel),normalMapUv:Me&&_(M.normalMap.channel),displacementMapUv:pt&&_(M.displacementMap.channel),emissiveMapUv:Be&&_(M.emissiveMap.channel),metalnessMapUv:A&&_(M.metalnessMap.channel),roughnessMapUv:S&&_(M.roughnessMap.channel),anisotropyMapUv:ge&&_(M.anisotropyMap.channel),clearcoatMapUv:ye&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$e&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:at&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ke&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&_(M.sheenRoughnessMap.channel),specularMapUv:Ce&&_(M.specularMap.channel),specularColorMapUv:xe&&_(M.specularColorMap.channel),specularIntensityMapUv:Ye&&_(M.specularIntensityMap.channel),transmissionMapUv:ct&&_(M.transmissionMap.channel),thicknessMapUv:St&&_(M.thicknessMap.channel),alphaMapUv:se&&_(M.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(Me||G),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:He,vertexUv2s:Ie,vertexUv3s:q,pointsUvs:B.isPoints===!0&&!!U.attributes.uv&&(Re||se),fog:!!R,useFog:M.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:B.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:Q,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:oe,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Re&&M.map.isVideoTexture===!0&&ht.getTransfer(M.map.colorSpace)===Et,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ci,flipSided:M.side===Mn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:pe&&M.extensions.derivatives===!0,extensionFragDepth:pe&&M.extensions.fragDepth===!0,extensionDrawBuffers:pe&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:pe&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:pe&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function u(M){const E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)E.push(P),E.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(v(E,M),m(E,M),E.push(t.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function v(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function m(M,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),M.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function x(M){const E=y[M.type];let P;if(E){const j=ai[E];P=rS.clone(j.uniforms)}else P=M.uniforms;return P}function C(M,E){let P;for(let j=0,B=c.length;j<B;j++){const R=c[j];if(R.cacheKey===E){P=R,++P.usedTimes;break}}return P===void 0&&(P=new _1(t,E,M,s),c.push(P)),P}function b(M){if(--M.usedTimes===0){const E=c.indexOf(M);c[E]=c[c.length-1],c.pop(),M.destroy()}}function w(M){l.remove(M)}function N(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:x,acquireProgram:C,releaseProgram:b,releaseShaderCache:w,programs:c,dispose:N}}function E1(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function w1(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function nm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function im(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,d,g,y,_,p){let u=t[e];return u===void 0?(u={id:h.id,object:h,geometry:d,material:g,groupOrder:y,renderOrder:h.renderOrder,z:_,group:p},t[e]=u):(u.id=h.id,u.object=h,u.geometry=d,u.material=g,u.groupOrder=y,u.renderOrder=h.renderOrder,u.z=_,u.group=p),e++,u}function a(h,d,g,y,_,p){const u=o(h,d,g,y,_,p);g.transmission>0?i.push(u):g.transparent===!0?r.push(u):n.push(u)}function l(h,d,g,y,_,p){const u=o(h,d,g,y,_,p);g.transmission>0?i.unshift(u):g.transparent===!0?r.unshift(u):n.unshift(u)}function c(h,d){n.length>1&&n.sort(h||w1),i.length>1&&i.sort(d||nm),r.length>1&&r.sort(d||nm)}function f(){for(let h=e,d=t.length;h<d;h++){const g=t[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:c}}function T1(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new im,t.set(i,[o])):r>=s.length?(o=new im,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function A1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new F,color:new it};break;case"SpotLight":n={position:new F,direction:new F,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new it,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new it,groundColor:new it};break;case"RectAreaLight":n={color:new it,position:new F,halfWidth:new F,halfHeight:new F};break}return t[e.id]=n,n}}}function b1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let R1=0;function C1(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function P1(t,e){const n=new A1,i=b1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)r.probe.push(new F);const s=new F,o=new Dt,a=new Dt;function l(f,h){let d=0,g=0,y=0;for(let j=0;j<9;j++)r.probe[j].set(0,0,0);let _=0,p=0,u=0,v=0,m=0,x=0,C=0,b=0,w=0,N=0,M=0;f.sort(C1);const E=h===!0?Math.PI:1;for(let j=0,B=f.length;j<B;j++){const R=f[j],U=R.color,W=R.intensity,$=R.distance,D=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)d+=U.r*W*E,g+=U.g*W*E,y+=U.b*W*E;else if(R.isLightProbe){for(let k=0;k<9;k++)r.probe[k].addScaledVector(R.sh.coefficients[k],W);M++}else if(R.isDirectionalLight){const k=n.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity*E),R.castShadow){const z=R.shadow,Z=i.get(R);Z.shadowBias=z.bias,Z.shadowNormalBias=z.normalBias,Z.shadowRadius=z.radius,Z.shadowMapSize=z.mapSize,r.directionalShadow[_]=Z,r.directionalShadowMap[_]=D,r.directionalShadowMatrix[_]=R.shadow.matrix,x++}r.directional[_]=k,_++}else if(R.isSpotLight){const k=n.get(R);k.position.setFromMatrixPosition(R.matrixWorld),k.color.copy(U).multiplyScalar(W*E),k.distance=$,k.coneCos=Math.cos(R.angle),k.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),k.decay=R.decay,r.spot[u]=k;const z=R.shadow;if(R.map&&(r.spotLightMap[w]=R.map,w++,z.updateMatrices(R),R.castShadow&&N++),r.spotLightMatrix[u]=z.matrix,R.castShadow){const Z=i.get(R);Z.shadowBias=z.bias,Z.shadowNormalBias=z.normalBias,Z.shadowRadius=z.radius,Z.shadowMapSize=z.mapSize,r.spotShadow[u]=Z,r.spotShadowMap[u]=D,b++}u++}else if(R.isRectAreaLight){const k=n.get(R);k.color.copy(U).multiplyScalar(W),k.halfWidth.set(R.width*.5,0,0),k.halfHeight.set(0,R.height*.5,0),r.rectArea[v]=k,v++}else if(R.isPointLight){const k=n.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity*E),k.distance=R.distance,k.decay=R.decay,R.castShadow){const z=R.shadow,Z=i.get(R);Z.shadowBias=z.bias,Z.shadowNormalBias=z.normalBias,Z.shadowRadius=z.radius,Z.shadowMapSize=z.mapSize,Z.shadowCameraNear=z.camera.near,Z.shadowCameraFar=z.camera.far,r.pointShadow[p]=Z,r.pointShadowMap[p]=D,r.pointShadowMatrix[p]=R.shadow.matrix,C++}r.point[p]=k,p++}else if(R.isHemisphereLight){const k=n.get(R);k.skyColor.copy(R.color).multiplyScalar(W*E),k.groundColor.copy(R.groundColor).multiplyScalar(W*E),r.hemi[m]=k,m++}}v>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=fe.LTC_FLOAT_1,r.rectAreaLTC2=fe.LTC_FLOAT_2):(r.rectAreaLTC1=fe.LTC_HALF_1,r.rectAreaLTC2=fe.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=fe.LTC_FLOAT_1,r.rectAreaLTC2=fe.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=fe.LTC_HALF_1,r.rectAreaLTC2=fe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=g,r.ambient[2]=y;const P=r.hash;(P.directionalLength!==_||P.pointLength!==p||P.spotLength!==u||P.rectAreaLength!==v||P.hemiLength!==m||P.numDirectionalShadows!==x||P.numPointShadows!==C||P.numSpotShadows!==b||P.numSpotMaps!==w||P.numLightProbes!==M)&&(r.directional.length=_,r.spot.length=u,r.rectArea.length=v,r.point.length=p,r.hemi.length=m,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=b+w-N,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=M,P.directionalLength=_,P.pointLength=p,P.spotLength=u,P.rectAreaLength=v,P.hemiLength=m,P.numDirectionalShadows=x,P.numPointShadows=C,P.numSpotShadows=b,P.numSpotMaps=w,P.numLightProbes=M,r.version=R1++)}function c(f,h){let d=0,g=0,y=0,_=0,p=0;const u=h.matrixWorldInverse;for(let v=0,m=f.length;v<m;v++){const x=f[v];if(x.isDirectionalLight){const C=r.directional[d];C.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(u),d++}else if(x.isSpotLight){const C=r.spot[y];C.position.setFromMatrixPosition(x.matrixWorld),C.position.applyMatrix4(u),C.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(u),y++}else if(x.isRectAreaLight){const C=r.rectArea[_];C.position.setFromMatrixPosition(x.matrixWorld),C.position.applyMatrix4(u),a.identity(),o.copy(x.matrixWorld),o.premultiply(u),a.extractRotation(o),C.halfWidth.set(x.width*.5,0,0),C.halfHeight.set(0,x.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),_++}else if(x.isPointLight){const C=r.point[g];C.position.setFromMatrixPosition(x.matrixWorld),C.position.applyMatrix4(u),g++}else if(x.isHemisphereLight){const C=r.hemi[p];C.direction.setFromMatrixPosition(x.matrixWorld),C.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:r}}function rm(t,e){const n=new P1(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function l(h){n.setup(i,h)}function c(h){n.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function L1(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new rm(t,e),n.set(s,[l])):o>=a.length?(l=new rm(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class D1 extends Xr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class U1 extends Xr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const I1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,N1=`uniform sampler2D shadow_pass;
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
}`;function F1(t,e,n){let i=new Cd;const r=new et,s=new et,o=new bt,a=new D1({depthPacking:Px}),l=new U1,c={},f=n.maxTextureSize,h={[pi]:Mn,[Mn]:pi,[ci]:ci},d=new hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:I1,fragmentShader:N1}),g=d.clone();g.defines.HORIZONTAL_PASS=1;const y=new Pn;y.setAttribute("position",new zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new vn(y,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=P0;let u=this.type;this.render=function(b,w,N){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const M=t.getRenderTarget(),E=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),j=t.state;j.setBlending(or),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const B=u!==xi&&this.type===xi,R=u===xi&&this.type!==xi;for(let U=0,W=b.length;U<W;U++){const $=b[U],D=$.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const k=D.getFrameExtents();if(r.multiply(k),s.copy(D.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/k.x),r.x=s.x*k.x,D.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/k.y),r.y=s.y*k.y,D.mapSize.y=s.y)),D.map===null||B===!0||R===!0){const Z=this.type!==xi?{minFilter:cn,magFilter:cn}:{};D.map!==null&&D.map.dispose(),D.map=new Gr(r.x,r.y,Z),D.map.texture.name=$.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const z=D.getViewportCount();for(let Z=0;Z<z;Z++){const Q=D.getViewport(Z);o.set(s.x*Q.x,s.y*Q.y,s.x*Q.z,s.y*Q.w),j.viewport(o),D.updateMatrices($,Z),i=D.getFrustum(),x(w,N,D.camera,$,this.type)}D.isPointLightShadow!==!0&&this.type===xi&&v(D,N),D.needsUpdate=!1}u=this.type,p.needsUpdate=!1,t.setRenderTarget(M,E,P)};function v(b,w){const N=e.update(_);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,g.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Gr(r.x,r.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(w,null,N,d,_,null),g.uniforms.shadow_pass.value=b.mapPass.texture,g.uniforms.resolution.value=b.mapSize,g.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(w,null,N,g,_,null)}function m(b,w,N,M){let E=null;const P=N.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)E=P;else if(E=N.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const j=E.uuid,B=w.uuid;let R=c[j];R===void 0&&(R={},c[j]=R);let U=R[B];U===void 0&&(U=E.clone(),R[B]=U,w.addEventListener("dispose",C)),E=U}if(E.visible=w.visible,E.wireframe=w.wireframe,M===xi?E.side=w.shadowSide!==null?w.shadowSide:w.side:E.side=w.shadowSide!==null?w.shadowSide:h[w.side],E.alphaMap=w.alphaMap,E.alphaTest=w.alphaTest,E.map=w.map,E.clipShadows=w.clipShadows,E.clippingPlanes=w.clippingPlanes,E.clipIntersection=w.clipIntersection,E.displacementMap=w.displacementMap,E.displacementScale=w.displacementScale,E.displacementBias=w.displacementBias,E.wireframeLinewidth=w.wireframeLinewidth,E.linewidth=w.linewidth,N.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const j=t.properties.get(E);j.light=N}return E}function x(b,w,N,M,E){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&E===xi)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,b.matrixWorld);const B=e.update(b),R=b.material;if(Array.isArray(R)){const U=B.groups;for(let W=0,$=U.length;W<$;W++){const D=U[W],k=R[D.materialIndex];if(k&&k.visible){const z=m(b,k,M,E);b.onBeforeShadow(t,b,w,N,B,z,D),t.renderBufferDirect(N,null,B,z,b,D),b.onAfterShadow(t,b,w,N,B,z,D)}}}else if(R.visible){const U=m(b,R,M,E);b.onBeforeShadow(t,b,w,N,B,U,null),t.renderBufferDirect(N,null,B,U,b,null),b.onAfterShadow(t,b,w,N,B,U,null)}}const j=b.children;for(let B=0,R=j.length;B<R;B++)x(j[B],w,N,M,E)}function C(b){b.target.removeEventListener("dispose",C);for(const N in c){const M=c[N],E=b.target.uuid;E in M&&(M[E].dispose(),delete M[E])}}}function O1(t,e,n){const i=n.isWebGL2;function r(){let L=!1;const he=new bt;let pe=null;const He=new bt(0,0,0,0);return{setMask:function(Ie){pe!==Ie&&!L&&(t.colorMask(Ie,Ie,Ie,Ie),pe=Ie)},setLocked:function(Ie){L=Ie},setClear:function(Ie,q,oe,J,ve){ve===!0&&(Ie*=J,q*=J,oe*=J),he.set(Ie,q,oe,J),He.equals(he)===!1&&(t.clearColor(Ie,q,oe,J),He.copy(he))},reset:function(){L=!1,pe=null,He.set(-1,0,0,0)}}}function s(){let L=!1,he=null,pe=null,He=null;return{setTest:function(Ie){Ie?ze(t.DEPTH_TEST):Re(t.DEPTH_TEST)},setMask:function(Ie){he!==Ie&&!L&&(t.depthMask(Ie),he=Ie)},setFunc:function(Ie){if(pe!==Ie){switch(Ie){case ox:t.depthFunc(t.NEVER);break;case ax:t.depthFunc(t.ALWAYS);break;case lx:t.depthFunc(t.LESS);break;case kl:t.depthFunc(t.LEQUAL);break;case cx:t.depthFunc(t.EQUAL);break;case ux:t.depthFunc(t.GEQUAL);break;case fx:t.depthFunc(t.GREATER);break;case dx:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}pe=Ie}},setLocked:function(Ie){L=Ie},setClear:function(Ie){He!==Ie&&(t.clearDepth(Ie),He=Ie)},reset:function(){L=!1,he=null,pe=null,He=null}}}function o(){let L=!1,he=null,pe=null,He=null,Ie=null,q=null,oe=null,J=null,ve=null;return{setTest:function(Oe){L||(Oe?ze(t.STENCIL_TEST):Re(t.STENCIL_TEST))},setMask:function(Oe){he!==Oe&&!L&&(t.stencilMask(Oe),he=Oe)},setFunc:function(Oe,tt,vt){(pe!==Oe||He!==tt||Ie!==vt)&&(t.stencilFunc(Oe,tt,vt),pe=Oe,He=tt,Ie=vt)},setOp:function(Oe,tt,vt){(q!==Oe||oe!==tt||J!==vt)&&(t.stencilOp(Oe,tt,vt),q=Oe,oe=tt,J=vt)},setLocked:function(Oe){L=Oe},setClear:function(Oe){ve!==Oe&&(t.clearStencil(Oe),ve=Oe)},reset:function(){L=!1,he=null,pe=null,He=null,Ie=null,q=null,oe=null,J=null,ve=null}}}const a=new r,l=new s,c=new o,f=new WeakMap,h=new WeakMap;let d={},g={},y=new WeakMap,_=[],p=null,u=!1,v=null,m=null,x=null,C=null,b=null,w=null,N=null,M=new it(0,0,0),E=0,P=!1,j=null,B=null,R=null,U=null,W=null;const $=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,k=0;const z=t.getParameter(t.VERSION);z.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(z)[1]),D=k>=1):z.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),D=k>=2);let Z=null,Q={};const Y=t.getParameter(t.SCISSOR_BOX),K=t.getParameter(t.VIEWPORT),ue=new bt().fromArray(Y),le=new bt().fromArray(K);function me(L,he,pe,He){const Ie=new Uint8Array(4),q=t.createTexture();t.bindTexture(L,q),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let oe=0;oe<pe;oe++)i&&(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)?t.texImage3D(he,0,t.RGBA,1,1,He,0,t.RGBA,t.UNSIGNED_BYTE,Ie):t.texImage2D(he+oe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ie);return q}const Le={};Le[t.TEXTURE_2D]=me(t.TEXTURE_2D,t.TEXTURE_2D,1),Le[t.TEXTURE_CUBE_MAP]=me(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Le[t.TEXTURE_2D_ARRAY]=me(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Le[t.TEXTURE_3D]=me(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ze(t.DEPTH_TEST),l.setFunc(kl),Be(!1),A(Hh),ze(t.CULL_FACE),Me(or);function ze(L){d[L]!==!0&&(t.enable(L),d[L]=!0)}function Re(L){d[L]!==!1&&(t.disable(L),d[L]=!1)}function qe(L,he){return g[L]!==he?(t.bindFramebuffer(L,he),g[L]=he,i&&(L===t.DRAW_FRAMEBUFFER&&(g[t.FRAMEBUFFER]=he),L===t.FRAMEBUFFER&&(g[t.DRAW_FRAMEBUFFER]=he)),!0):!1}function H(L,he){let pe=_,He=!1;if(L)if(pe=y.get(he),pe===void 0&&(pe=[],y.set(he,pe)),L.isWebGLMultipleRenderTargets){const Ie=L.texture;if(pe.length!==Ie.length||pe[0]!==t.COLOR_ATTACHMENT0){for(let q=0,oe=Ie.length;q<oe;q++)pe[q]=t.COLOR_ATTACHMENT0+q;pe.length=Ie.length,He=!0}}else pe[0]!==t.COLOR_ATTACHMENT0&&(pe[0]=t.COLOR_ATTACHMENT0,He=!0);else pe[0]!==t.BACK&&(pe[0]=t.BACK,He=!0);He&&(n.isWebGL2?t.drawBuffers(pe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(pe))}function Tt(L){return p!==L?(t.useProgram(L),p=L,!0):!1}const De={[br]:t.FUNC_ADD,[Xy]:t.FUNC_SUBTRACT,[jy]:t.FUNC_REVERSE_SUBTRACT};if(i)De[Wh]=t.MIN,De[Xh]=t.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(De[Wh]=L.MIN_EXT,De[Xh]=L.MAX_EXT)}const Ge={[Yy]:t.ZERO,[qy]:t.ONE,[$y]:t.SRC_COLOR,[vf]:t.SRC_ALPHA,[tx]:t.SRC_ALPHA_SATURATE,[Qy]:t.DST_COLOR,[Zy]:t.DST_ALPHA,[Ky]:t.ONE_MINUS_SRC_COLOR,[_f]:t.ONE_MINUS_SRC_ALPHA,[ex]:t.ONE_MINUS_DST_COLOR,[Jy]:t.ONE_MINUS_DST_ALPHA,[nx]:t.CONSTANT_COLOR,[ix]:t.ONE_MINUS_CONSTANT_COLOR,[rx]:t.CONSTANT_ALPHA,[sx]:t.ONE_MINUS_CONSTANT_ALPHA};function Me(L,he,pe,He,Ie,q,oe,J,ve,Oe){if(L===or){u===!0&&(Re(t.BLEND),u=!1);return}if(u===!1&&(ze(t.BLEND),u=!0),L!==Wy){if(L!==v||Oe!==P){if((m!==br||b!==br)&&(t.blendEquation(t.FUNC_ADD),m=br,b=br),Oe)switch(L){case Is:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ar:t.blendFunc(t.ONE,t.ONE);break;case Gh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Vh:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Is:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ar:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Gh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Vh:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}x=null,C=null,w=null,N=null,M.set(0,0,0),E=0,v=L,P=Oe}return}Ie=Ie||he,q=q||pe,oe=oe||He,(he!==m||Ie!==b)&&(t.blendEquationSeparate(De[he],De[Ie]),m=he,b=Ie),(pe!==x||He!==C||q!==w||oe!==N)&&(t.blendFuncSeparate(Ge[pe],Ge[He],Ge[q],Ge[oe]),x=pe,C=He,w=q,N=oe),(J.equals(M)===!1||ve!==E)&&(t.blendColor(J.r,J.g,J.b,ve),M.copy(J),E=ve),v=L,P=!1}function pt(L,he){L.side===ci?Re(t.CULL_FACE):ze(t.CULL_FACE);let pe=L.side===Mn;he&&(pe=!pe),Be(pe),L.blending===Is&&L.transparent===!1?Me(or):Me(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const He=L.stencilWrite;c.setTest(He),He&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),G(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ze(t.SAMPLE_ALPHA_TO_COVERAGE):Re(t.SAMPLE_ALPHA_TO_COVERAGE)}function Be(L){j!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),j=L)}function A(L){L!==Hy?(ze(t.CULL_FACE),L!==B&&(L===Hh?t.cullFace(t.BACK):L===Gy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Re(t.CULL_FACE),B=L}function S(L){L!==R&&(D&&t.lineWidth(L),R=L)}function G(L,he,pe){L?(ze(t.POLYGON_OFFSET_FILL),(U!==he||W!==pe)&&(t.polygonOffset(he,pe),U=he,W=pe)):Re(t.POLYGON_OFFSET_FILL)}function ne(L){L?ze(t.SCISSOR_TEST):Re(t.SCISSOR_TEST)}function te(L){L===void 0&&(L=t.TEXTURE0+$-1),Z!==L&&(t.activeTexture(L),Z=L)}function ie(L,he,pe){pe===void 0&&(Z===null?pe=t.TEXTURE0+$-1:pe=Z);let He=Q[pe];He===void 0&&(He={type:void 0,texture:void 0},Q[pe]=He),(He.type!==L||He.texture!==he)&&(Z!==pe&&(t.activeTexture(pe),Z=pe),t.bindTexture(L,he||Le[L]),He.type=L,He.texture=he)}function we(){const L=Q[Z];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ge(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ye(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ue(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $e(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function at(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ke(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Xe(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ce(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xe(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ye(L){ue.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),ue.copy(L))}function ct(L){le.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),le.copy(L))}function St(L,he){let pe=h.get(he);pe===void 0&&(pe=new WeakMap,h.set(he,pe));let He=pe.get(L);He===void 0&&(He=t.getUniformBlockIndex(he,L.name),pe.set(L,He))}function Ze(L,he){const He=h.get(he).get(L);f.get(he)!==He&&(t.uniformBlockBinding(he,He,L.__bindingPointIndex),f.set(he,He))}function se(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},Z=null,Q={},g={},y=new WeakMap,_=[],p=null,u=!1,v=null,m=null,x=null,C=null,b=null,w=null,N=null,M=new it(0,0,0),E=0,P=!1,j=null,B=null,R=null,U=null,W=null,ue.set(0,0,t.canvas.width,t.canvas.height),le.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ze,disable:Re,bindFramebuffer:qe,drawBuffers:H,useProgram:Tt,setBlending:Me,setMaterial:pt,setFlipSided:Be,setCullFace:A,setLineWidth:S,setPolygonOffset:G,setScissorTest:ne,activeTexture:te,bindTexture:ie,unbindTexture:we,compressedTexImage2D:ge,compressedTexImage3D:ye,texImage2D:Ce,texImage3D:xe,updateUBOMapping:St,uniformBlockBinding:Ze,texStorage2D:Ke,texStorage3D:Xe,texSubImage2D:Ue,texSubImage3D:$e,compressedTexSubImage2D:ee,compressedTexSubImage3D:at,scissor:Ye,viewport:ct,reset:se}}function k1(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new WeakMap;let h;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,S){return g?new OffscreenCanvas(A,S):Vl("canvas")}function _(A,S,G,ne){let te=1;if((A.width>ne||A.height>ne)&&(te=ne/Math.max(A.width,A.height)),te<1||S===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const ie=S?Af:Math.floor,we=ie(te*A.width),ge=ie(te*A.height);h===void 0&&(h=y(we,ge));const ye=G?y(we,ge):h;return ye.width=we,ye.height=ge,ye.getContext("2d").drawImage(A,0,0,we,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+we+"x"+ge+")."),ye}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function p(A){return xp(A.width)&&xp(A.height)}function u(A){return a?!1:A.wrapS!==ei||A.wrapT!==ei||A.minFilter!==cn&&A.minFilter!==kn}function v(A,S){return A.generateMipmaps&&S&&A.minFilter!==cn&&A.minFilter!==kn}function m(A){t.generateMipmap(A)}function x(A,S,G,ne,te=!1){if(a===!1)return S;if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ie=S;if(S===t.RED&&(G===t.FLOAT&&(ie=t.R32F),G===t.HALF_FLOAT&&(ie=t.R16F),G===t.UNSIGNED_BYTE&&(ie=t.R8)),S===t.RED_INTEGER&&(G===t.UNSIGNED_BYTE&&(ie=t.R8UI),G===t.UNSIGNED_SHORT&&(ie=t.R16UI),G===t.UNSIGNED_INT&&(ie=t.R32UI),G===t.BYTE&&(ie=t.R8I),G===t.SHORT&&(ie=t.R16I),G===t.INT&&(ie=t.R32I)),S===t.RG&&(G===t.FLOAT&&(ie=t.RG32F),G===t.HALF_FLOAT&&(ie=t.RG16F),G===t.UNSIGNED_BYTE&&(ie=t.RG8)),S===t.RGBA){const we=te?zl:ht.getTransfer(ne);G===t.FLOAT&&(ie=t.RGBA32F),G===t.HALF_FLOAT&&(ie=t.RGBA16F),G===t.UNSIGNED_BYTE&&(ie=we===Et?t.SRGB8_ALPHA8:t.RGBA8),G===t.UNSIGNED_SHORT_4_4_4_4&&(ie=t.RGBA4),G===t.UNSIGNED_SHORT_5_5_5_1&&(ie=t.RGB5_A1)}return(ie===t.R16F||ie===t.R32F||ie===t.RG16F||ie===t.RG32F||ie===t.RGBA16F||ie===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function C(A,S,G){return v(A,G)===!0||A.isFramebufferTexture&&A.minFilter!==cn&&A.minFilter!==kn?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function b(A){return A===cn||A===jh||A===Hc?t.NEAREST:t.LINEAR}function w(A){const S=A.target;S.removeEventListener("dispose",w),M(S),S.isVideoTexture&&f.delete(S)}function N(A){const S=A.target;S.removeEventListener("dispose",N),P(S)}function M(A){const S=i.get(A);if(S.__webglInit===void 0)return;const G=A.source,ne=d.get(G);if(ne){const te=ne[S.__cacheKey];te.usedTimes--,te.usedTimes===0&&E(A),Object.keys(ne).length===0&&d.delete(G)}i.remove(A)}function E(A){const S=i.get(A);t.deleteTexture(S.__webglTexture);const G=A.source,ne=d.get(G);delete ne[S.__cacheKey],o.memory.textures--}function P(A){const S=A.texture,G=i.get(A),ne=i.get(S);if(ne.__webglTexture!==void 0&&(t.deleteTexture(ne.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(G.__webglFramebuffer[te]))for(let ie=0;ie<G.__webglFramebuffer[te].length;ie++)t.deleteFramebuffer(G.__webglFramebuffer[te][ie]);else t.deleteFramebuffer(G.__webglFramebuffer[te]);G.__webglDepthbuffer&&t.deleteRenderbuffer(G.__webglDepthbuffer[te])}else{if(Array.isArray(G.__webglFramebuffer))for(let te=0;te<G.__webglFramebuffer.length;te++)t.deleteFramebuffer(G.__webglFramebuffer[te]);else t.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&t.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&t.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let te=0;te<G.__webglColorRenderbuffer.length;te++)G.__webglColorRenderbuffer[te]&&t.deleteRenderbuffer(G.__webglColorRenderbuffer[te]);G.__webglDepthRenderbuffer&&t.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let te=0,ie=S.length;te<ie;te++){const we=i.get(S[te]);we.__webglTexture&&(t.deleteTexture(we.__webglTexture),o.memory.textures--),i.remove(S[te])}i.remove(S),i.remove(A)}let j=0;function B(){j=0}function R(){const A=j;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),j+=1,A}function U(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function W(A,S){const G=i.get(A);if(A.isVideoTexture&&pt(A),A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){const ne=A.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(G,A,S);return}}n.bindTexture(t.TEXTURE_2D,G.__webglTexture,t.TEXTURE0+S)}function $(A,S){const G=i.get(A);if(A.version>0&&G.__version!==A.version){ue(G,A,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,G.__webglTexture,t.TEXTURE0+S)}function D(A,S){const G=i.get(A);if(A.version>0&&G.__version!==A.version){ue(G,A,S);return}n.bindTexture(t.TEXTURE_3D,G.__webglTexture,t.TEXTURE0+S)}function k(A,S){const G=i.get(A);if(A.version>0&&G.__version!==A.version){le(G,A,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture,t.TEXTURE0+S)}const z={[Sf]:t.REPEAT,[ei]:t.CLAMP_TO_EDGE,[Mf]:t.MIRRORED_REPEAT},Z={[cn]:t.NEAREST,[jh]:t.NEAREST_MIPMAP_NEAREST,[Hc]:t.NEAREST_MIPMAP_LINEAR,[kn]:t.LINEAR,[xx]:t.LINEAR_MIPMAP_NEAREST,[Jo]:t.LINEAR_MIPMAP_LINEAR},Q={[Dx]:t.NEVER,[kx]:t.ALWAYS,[Ux]:t.LESS,[V0]:t.LEQUAL,[Ix]:t.EQUAL,[Ox]:t.GEQUAL,[Nx]:t.GREATER,[Fx]:t.NOTEQUAL};function Y(A,S,G){if(G?(t.texParameteri(A,t.TEXTURE_WRAP_S,z[S.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,z[S.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,z[S.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,Z[S.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,Z[S.minFilter])):(t.texParameteri(A,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(A,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(S.wrapS!==ei||S.wrapT!==ei)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(A,t.TEXTURE_MAG_FILTER,b(S.magFilter)),t.texParameteri(A,t.TEXTURE_MIN_FILTER,b(S.minFilter)),S.minFilter!==cn&&S.minFilter!==kn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,Q[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===cn||S.minFilter!==Hc&&S.minFilter!==Jo||S.type===Ki&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===Qo&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(t.texParameterf(A,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function K(A,S){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",w));const ne=S.source;let te=d.get(ne);te===void 0&&(te={},d.set(ne,te));const ie=U(S);if(ie!==A.__cacheKey){te[ie]===void 0&&(te[ie]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,G=!0),te[ie].usedTimes++;const we=te[A.__cacheKey];we!==void 0&&(te[A.__cacheKey].usedTimes--,we.usedTimes===0&&E(S)),A.__cacheKey=ie,A.__webglTexture=te[ie].texture}return G}function ue(A,S,G){let ne=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ne=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ne=t.TEXTURE_3D);const te=K(A,S),ie=S.source;n.bindTexture(ne,A.__webglTexture,t.TEXTURE0+G);const we=i.get(ie);if(ie.version!==we.__version||te===!0){n.activeTexture(t.TEXTURE0+G);const ge=ht.getPrimaries(ht.workingColorSpace),ye=S.colorSpace===Bn?null:ht.getPrimaries(S.colorSpace),Ue=S.colorSpace===Bn||ge===ye?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const $e=u(S)&&p(S.image)===!1;let ee=_(S.image,$e,!1,r.maxTextureSize);ee=Be(S,ee);const at=p(ee)||a,Ke=s.convert(S.format,S.colorSpace);let Xe=s.convert(S.type),Ce=x(S.internalFormat,Ke,Xe,S.colorSpace,S.isVideoTexture);Y(ne,S,at);let xe;const Ye=S.mipmaps,ct=a&&S.isVideoTexture!==!0&&Ce!==B0,St=we.__version===void 0||te===!0,Ze=C(S,ee,at);if(S.isDepthTexture)Ce=t.DEPTH_COMPONENT,a?S.type===Ki?Ce=t.DEPTH_COMPONENT32F:S.type===$i?Ce=t.DEPTH_COMPONENT24:S.type===Ir?Ce=t.DEPTH24_STENCIL8:Ce=t.DEPTH_COMPONENT16:S.type===Ki&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Nr&&Ce===t.DEPTH_COMPONENT&&S.type!==Td&&S.type!==$i&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=$i,Xe=s.convert(S.type)),S.format===Xs&&Ce===t.DEPTH_COMPONENT&&(Ce=t.DEPTH_STENCIL,S.type!==Ir&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Ir,Xe=s.convert(S.type))),St&&(ct?n.texStorage2D(t.TEXTURE_2D,1,Ce,ee.width,ee.height):n.texImage2D(t.TEXTURE_2D,0,Ce,ee.width,ee.height,0,Ke,Xe,null));else if(S.isDataTexture)if(Ye.length>0&&at){ct&&St&&n.texStorage2D(t.TEXTURE_2D,Ze,Ce,Ye[0].width,Ye[0].height);for(let se=0,L=Ye.length;se<L;se++)xe=Ye[se],ct?n.texSubImage2D(t.TEXTURE_2D,se,0,0,xe.width,xe.height,Ke,Xe,xe.data):n.texImage2D(t.TEXTURE_2D,se,Ce,xe.width,xe.height,0,Ke,Xe,xe.data);S.generateMipmaps=!1}else ct?(St&&n.texStorage2D(t.TEXTURE_2D,Ze,Ce,ee.width,ee.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ee.width,ee.height,Ke,Xe,ee.data)):n.texImage2D(t.TEXTURE_2D,0,Ce,ee.width,ee.height,0,Ke,Xe,ee.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ct&&St&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ze,Ce,Ye[0].width,Ye[0].height,ee.depth);for(let se=0,L=Ye.length;se<L;se++)xe=Ye[se],S.format!==ti?Ke!==null?ct?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,xe.width,xe.height,ee.depth,Ke,xe.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,se,Ce,xe.width,xe.height,ee.depth,0,xe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?n.texSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,xe.width,xe.height,ee.depth,Ke,Xe,xe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,se,Ce,xe.width,xe.height,ee.depth,0,Ke,Xe,xe.data)}else{ct&&St&&n.texStorage2D(t.TEXTURE_2D,Ze,Ce,Ye[0].width,Ye[0].height);for(let se=0,L=Ye.length;se<L;se++)xe=Ye[se],S.format!==ti?Ke!==null?ct?n.compressedTexSubImage2D(t.TEXTURE_2D,se,0,0,xe.width,xe.height,Ke,xe.data):n.compressedTexImage2D(t.TEXTURE_2D,se,Ce,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?n.texSubImage2D(t.TEXTURE_2D,se,0,0,xe.width,xe.height,Ke,Xe,xe.data):n.texImage2D(t.TEXTURE_2D,se,Ce,xe.width,xe.height,0,Ke,Xe,xe.data)}else if(S.isDataArrayTexture)ct?(St&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ze,Ce,ee.width,ee.height,ee.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,Ke,Xe,ee.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ce,ee.width,ee.height,ee.depth,0,Ke,Xe,ee.data);else if(S.isData3DTexture)ct?(St&&n.texStorage3D(t.TEXTURE_3D,Ze,Ce,ee.width,ee.height,ee.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,Ke,Xe,ee.data)):n.texImage3D(t.TEXTURE_3D,0,Ce,ee.width,ee.height,ee.depth,0,Ke,Xe,ee.data);else if(S.isFramebufferTexture){if(St)if(ct)n.texStorage2D(t.TEXTURE_2D,Ze,Ce,ee.width,ee.height);else{let se=ee.width,L=ee.height;for(let he=0;he<Ze;he++)n.texImage2D(t.TEXTURE_2D,he,Ce,se,L,0,Ke,Xe,null),se>>=1,L>>=1}}else if(Ye.length>0&&at){ct&&St&&n.texStorage2D(t.TEXTURE_2D,Ze,Ce,Ye[0].width,Ye[0].height);for(let se=0,L=Ye.length;se<L;se++)xe=Ye[se],ct?n.texSubImage2D(t.TEXTURE_2D,se,0,0,Ke,Xe,xe):n.texImage2D(t.TEXTURE_2D,se,Ce,Ke,Xe,xe);S.generateMipmaps=!1}else ct?(St&&n.texStorage2D(t.TEXTURE_2D,Ze,Ce,ee.width,ee.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ke,Xe,ee)):n.texImage2D(t.TEXTURE_2D,0,Ce,Ke,Xe,ee);v(S,at)&&m(ne),we.__version=ie.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function le(A,S,G){if(S.image.length!==6)return;const ne=K(A,S),te=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+G);const ie=i.get(te);if(te.version!==ie.__version||ne===!0){n.activeTexture(t.TEXTURE0+G);const we=ht.getPrimaries(ht.workingColorSpace),ge=S.colorSpace===Bn?null:ht.getPrimaries(S.colorSpace),ye=S.colorSpace===Bn||we===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Ue=S.isCompressedTexture||S.image[0].isCompressedTexture,$e=S.image[0]&&S.image[0].isDataTexture,ee=[];for(let se=0;se<6;se++)!Ue&&!$e?ee[se]=_(S.image[se],!1,!0,r.maxCubemapSize):ee[se]=$e?S.image[se].image:S.image[se],ee[se]=Be(S,ee[se]);const at=ee[0],Ke=p(at)||a,Xe=s.convert(S.format,S.colorSpace),Ce=s.convert(S.type),xe=x(S.internalFormat,Xe,Ce,S.colorSpace),Ye=a&&S.isVideoTexture!==!0,ct=ie.__version===void 0||ne===!0;let St=C(S,at,Ke);Y(t.TEXTURE_CUBE_MAP,S,Ke);let Ze;if(Ue){Ye&&ct&&n.texStorage2D(t.TEXTURE_CUBE_MAP,St,xe,at.width,at.height);for(let se=0;se<6;se++){Ze=ee[se].mipmaps;for(let L=0;L<Ze.length;L++){const he=Ze[L];S.format!==ti?Xe!==null?Ye?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,L,0,0,he.width,he.height,Xe,he.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,L,xe,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,L,0,0,he.width,he.height,Xe,Ce,he.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,L,xe,he.width,he.height,0,Xe,Ce,he.data)}}}else{Ze=S.mipmaps,Ye&&ct&&(Ze.length>0&&St++,n.texStorage2D(t.TEXTURE_CUBE_MAP,St,xe,ee[0].width,ee[0].height));for(let se=0;se<6;se++)if($e){Ye?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ee[se].width,ee[se].height,Xe,Ce,ee[se].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,xe,ee[se].width,ee[se].height,0,Xe,Ce,ee[se].data);for(let L=0;L<Ze.length;L++){const pe=Ze[L].image[se].image;Ye?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,L+1,0,0,pe.width,pe.height,Xe,Ce,pe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,L+1,xe,pe.width,pe.height,0,Xe,Ce,pe.data)}}else{Ye?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Xe,Ce,ee[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,xe,Xe,Ce,ee[se]);for(let L=0;L<Ze.length;L++){const he=Ze[L];Ye?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,L+1,0,0,Xe,Ce,he.image[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,L+1,xe,Xe,Ce,he.image[se])}}}v(S,Ke)&&m(t.TEXTURE_CUBE_MAP),ie.__version=te.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function me(A,S,G,ne,te,ie){const we=s.convert(G.format,G.colorSpace),ge=s.convert(G.type),ye=x(G.internalFormat,we,ge,G.colorSpace);if(!i.get(S).__hasExternalTextures){const $e=Math.max(1,S.width>>ie),ee=Math.max(1,S.height>>ie);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,ie,ye,$e,ee,S.depth,0,we,ge,null):n.texImage2D(te,ie,ye,$e,ee,0,we,ge,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),Me(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ne,te,i.get(G).__webglTexture,0,Ge(S)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ne,te,i.get(G).__webglTexture,ie),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Le(A,S,G){if(t.bindRenderbuffer(t.RENDERBUFFER,A),S.depthBuffer&&!S.stencilBuffer){let ne=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(G||Me(S)){const te=S.depthTexture;te&&te.isDepthTexture&&(te.type===Ki?ne=t.DEPTH_COMPONENT32F:te.type===$i&&(ne=t.DEPTH_COMPONENT24));const ie=Ge(S);Me(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ie,ne,S.width,S.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ie,ne,S.width,S.height)}else t.renderbufferStorage(t.RENDERBUFFER,ne,S.width,S.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,A)}else if(S.depthBuffer&&S.stencilBuffer){const ne=Ge(S);G&&Me(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ne,t.DEPTH24_STENCIL8,S.width,S.height):Me(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ne,t.DEPTH24_STENCIL8,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,A)}else{const ne=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let te=0;te<ne.length;te++){const ie=ne[te],we=s.convert(ie.format,ie.colorSpace),ge=s.convert(ie.type),ye=x(ie.internalFormat,we,ge,ie.colorSpace),Ue=Ge(S);G&&Me(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ue,ye,S.width,S.height):Me(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ue,ye,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,ye,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ze(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),W(S.depthTexture,0);const ne=i.get(S.depthTexture).__webglTexture,te=Ge(S);if(S.depthTexture.format===Nr)Me(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0);else if(S.depthTexture.format===Xs)Me(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Re(A){const S=i.get(A),G=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");ze(S.__webglFramebuffer,A)}else if(G){S.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[ne]),S.__webglDepthbuffer[ne]=t.createRenderbuffer(),Le(S.__webglDepthbuffer[ne],A,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=t.createRenderbuffer(),Le(S.__webglDepthbuffer,A,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function qe(A,S,G){const ne=i.get(A);S!==void 0&&me(ne.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),G!==void 0&&Re(A)}function H(A){const S=A.texture,G=i.get(A),ne=i.get(S);A.addEventListener("dispose",N),A.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=t.createTexture()),ne.__version=S.version,o.memory.textures++);const te=A.isWebGLCubeRenderTarget===!0,ie=A.isWebGLMultipleRenderTargets===!0,we=p(A)||a;if(te){G.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(a&&S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[ge]=[];for(let ye=0;ye<S.mipmaps.length;ye++)G.__webglFramebuffer[ge][ye]=t.createFramebuffer()}else G.__webglFramebuffer[ge]=t.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let ge=0;ge<S.mipmaps.length;ge++)G.__webglFramebuffer[ge]=t.createFramebuffer()}else G.__webglFramebuffer=t.createFramebuffer();if(ie)if(r.drawBuffers){const ge=A.texture;for(let ye=0,Ue=ge.length;ye<Ue;ye++){const $e=i.get(ge[ye]);$e.__webglTexture===void 0&&($e.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&Me(A)===!1){const ge=ie?S:[S];G.__webglMultisampledFramebuffer=t.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ye=0;ye<ge.length;ye++){const Ue=ge[ye];G.__webglColorRenderbuffer[ye]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,G.__webglColorRenderbuffer[ye]);const $e=s.convert(Ue.format,Ue.colorSpace),ee=s.convert(Ue.type),at=x(Ue.internalFormat,$e,ee,Ue.colorSpace,A.isXRRenderTarget===!0),Ke=Ge(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ke,at,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.RENDERBUFFER,G.__webglColorRenderbuffer[ye])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=t.createRenderbuffer(),Le(G.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(te){n.bindTexture(t.TEXTURE_CUBE_MAP,ne.__webglTexture),Y(t.TEXTURE_CUBE_MAP,S,we);for(let ge=0;ge<6;ge++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let ye=0;ye<S.mipmaps.length;ye++)me(G.__webglFramebuffer[ge][ye],A,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ye);else me(G.__webglFramebuffer[ge],A,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);v(S,we)&&m(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ie){const ge=A.texture;for(let ye=0,Ue=ge.length;ye<Ue;ye++){const $e=ge[ye],ee=i.get($e);n.bindTexture(t.TEXTURE_2D,ee.__webglTexture),Y(t.TEXTURE_2D,$e,we),me(G.__webglFramebuffer,A,$e,t.COLOR_ATTACHMENT0+ye,t.TEXTURE_2D,0),v($e,we)&&m(t.TEXTURE_2D)}n.unbindTexture()}else{let ge=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?ge=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ge,ne.__webglTexture),Y(ge,S,we),a&&S.mipmaps&&S.mipmaps.length>0)for(let ye=0;ye<S.mipmaps.length;ye++)me(G.__webglFramebuffer[ye],A,S,t.COLOR_ATTACHMENT0,ge,ye);else me(G.__webglFramebuffer,A,S,t.COLOR_ATTACHMENT0,ge,0);v(S,we)&&m(ge),n.unbindTexture()}A.depthBuffer&&Re(A)}function Tt(A){const S=p(A)||a,G=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ne=0,te=G.length;ne<te;ne++){const ie=G[ne];if(v(ie,S)){const we=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ge=i.get(ie).__webglTexture;n.bindTexture(we,ge),m(we),n.unbindTexture()}}}function De(A){if(a&&A.samples>0&&Me(A)===!1){const S=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],G=A.width,ne=A.height;let te=t.COLOR_BUFFER_BIT;const ie=[],we=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ge=i.get(A),ye=A.isWebGLMultipleRenderTargets===!0;if(ye)for(let Ue=0;Ue<S.length;Ue++)n.bindFramebuffer(t.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ge.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let Ue=0;Ue<S.length;Ue++){ie.push(t.COLOR_ATTACHMENT0+Ue),A.depthBuffer&&ie.push(we);const $e=ge.__ignoreDepthValues!==void 0?ge.__ignoreDepthValues:!1;if($e===!1&&(A.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),ye&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ge.__webglColorRenderbuffer[Ue]),$e===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[we]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[we])),ye){const ee=i.get(S[Ue]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ee,0)}t.blitFramebuffer(0,0,G,ne,0,0,G,ne,te,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ie)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ye)for(let Ue=0;Ue<S.length;Ue++){n.bindFramebuffer(t.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.RENDERBUFFER,ge.__webglColorRenderbuffer[Ue]);const $e=i.get(S[Ue]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ge.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.TEXTURE_2D,$e,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}}function Ge(A){return Math.min(r.maxSamples,A.samples)}function Me(A){const S=i.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function pt(A){const S=o.render.frame;f.get(A)!==S&&(f.set(A,S),A.update())}function Be(A,S){const G=A.colorSpace,ne=A.format,te=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===wf||G!==Di&&G!==Bn&&(ht.getTransfer(G)===Et?a===!1?e.has("EXT_sRGB")===!0&&ne===ti?(A.format=wf,A.minFilter=kn,A.generateMipmaps=!1):S=X0.sRGBToLinear(S):(ne!==ti||te!==lr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),S}this.allocateTextureUnit=R,this.resetTextureUnits=B,this.setTexture2D=W,this.setTexture2DArray=$,this.setTexture3D=D,this.setTextureCube=k,this.rebindTextures=qe,this.setupRenderTarget=H,this.updateRenderTargetMipmap=Tt,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=me,this.useMultisampledRTT=Me}function z1(t,e,n){const i=n.isWebGL2;function r(s,o=Bn){let a;const l=ht.getTransfer(o);if(s===lr)return t.UNSIGNED_BYTE;if(s===N0)return t.UNSIGNED_SHORT_4_4_4_4;if(s===F0)return t.UNSIGNED_SHORT_5_5_5_1;if(s===Sx)return t.BYTE;if(s===Mx)return t.SHORT;if(s===Td)return t.UNSIGNED_SHORT;if(s===I0)return t.INT;if(s===$i)return t.UNSIGNED_INT;if(s===Ki)return t.FLOAT;if(s===Qo)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Ex)return t.ALPHA;if(s===ti)return t.RGBA;if(s===wx)return t.LUMINANCE;if(s===Tx)return t.LUMINANCE_ALPHA;if(s===Nr)return t.DEPTH_COMPONENT;if(s===Xs)return t.DEPTH_STENCIL;if(s===wf)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Ax)return t.RED;if(s===O0)return t.RED_INTEGER;if(s===bx)return t.RG;if(s===k0)return t.RG_INTEGER;if(s===z0)return t.RGBA_INTEGER;if(s===Gc||s===Vc||s===Wc||s===Xc)if(l===Et)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Gc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Vc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Wc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Xc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Gc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Vc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Wc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Xc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Yh||s===qh||s===$h||s===Kh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Yh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===qh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===$h)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Kh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===B0)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Zh||s===Jh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Zh)return l===Et?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Jh)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Qh||s===ep||s===tp||s===np||s===ip||s===rp||s===sp||s===op||s===ap||s===lp||s===cp||s===up||s===fp||s===dp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Qh)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ep)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===tp)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===np)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ip)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===rp)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===sp)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===op)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ap)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===lp)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===cp)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===up)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===fp)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===dp)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===jc||s===hp||s===pp)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===jc)return l===Et?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===hp)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===pp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Rx||s===mp||s===gp||s===vp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===jc)return a.COMPRESSED_RED_RGTC1_EXT;if(s===mp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===gp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===vp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ir?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class B1 extends bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Zi extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const H1={type:"move"};class vu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=n.getJointPose(_,i),u=this._getHandJoint(c,_);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=f.position.distanceTo(h.position),g=.02,y=.005;c.inputState.pinching&&d>g+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=g-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(H1)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Zi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class G1 extends Ks{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,h=null,d=null,g=null,y=null;const _=n.getContextAttributes();let p=null,u=null;const v=[],m=[],x=new et;let C=null;const b=new bn;b.layers.enable(1),b.viewport=new bt;const w=new bn;w.layers.enable(2),w.viewport=new bt;const N=[b,w],M=new B1;M.layers.enable(1),M.layers.enable(2);let E=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let K=v[Y];return K===void 0&&(K=new vu,v[Y]=K),K.getTargetRaySpace()},this.getControllerGrip=function(Y){let K=v[Y];return K===void 0&&(K=new vu,v[Y]=K),K.getGripSpace()},this.getHand=function(Y){let K=v[Y];return K===void 0&&(K=new vu,v[Y]=K),K.getHandSpace()};function j(Y){const K=m.indexOf(Y.inputSource);if(K===-1)return;const ue=v[K];ue!==void 0&&(ue.update(Y.inputSource,Y.frame,c||o),ue.dispatchEvent({type:Y.type,data:Y.inputSource}))}function B(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",R);for(let Y=0;Y<v.length;Y++){const K=m[Y];K!==null&&(m[Y]=null,v[Y].disconnect(K))}E=null,P=null,e.setRenderTarget(p),g=null,d=null,h=null,r=null,u=null,Q.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(x.width,x.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return h},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",B),r.addEventListener("inputsourceschange",R),_.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(x),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,K),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),u=new Gr(g.framebufferWidth,g.framebufferHeight,{format:ti,type:lr,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let K=null,ue=null,le=null;_.depth&&(le=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,K=_.stencil?Xs:Nr,ue=_.stencil?Ir:$i);const me={colorFormat:n.RGBA8,depthFormat:le,scaleFactor:s};h=new XRWebGLBinding(r,n),d=h.createProjectionLayer(me),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),u=new Gr(d.textureWidth,d.textureHeight,{format:ti,type:lr,depthTexture:new nv(d.textureWidth,d.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Le=e.properties.get(u);Le.__ignoreDepthValues=d.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Q.setContext(r),Q.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function R(Y){for(let K=0;K<Y.removed.length;K++){const ue=Y.removed[K],le=m.indexOf(ue);le>=0&&(m[le]=null,v[le].disconnect(ue))}for(let K=0;K<Y.added.length;K++){const ue=Y.added[K];let le=m.indexOf(ue);if(le===-1){for(let Le=0;Le<v.length;Le++)if(Le>=m.length){m.push(ue),le=Le;break}else if(m[Le]===null){m[Le]=ue,le=Le;break}if(le===-1)break}const me=v[le];me&&me.connect(ue)}}const U=new F,W=new F;function $(Y,K,ue){U.setFromMatrixPosition(K.matrixWorld),W.setFromMatrixPosition(ue.matrixWorld);const le=U.distanceTo(W),me=K.projectionMatrix.elements,Le=ue.projectionMatrix.elements,ze=me[14]/(me[10]-1),Re=me[14]/(me[10]+1),qe=(me[9]+1)/me[5],H=(me[9]-1)/me[5],Tt=(me[8]-1)/me[0],De=(Le[8]+1)/Le[0],Ge=ze*Tt,Me=ze*De,pt=le/(-Tt+De),Be=pt*-Tt;K.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Be),Y.translateZ(pt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const A=ze+pt,S=Re+pt,G=Ge-Be,ne=Me+(le-Be),te=qe*Re/S*A,ie=H*Re/S*A;Y.projectionMatrix.makePerspective(G,ne,te,ie,A,S),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function D(Y,K){K===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(K.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;M.near=w.near=b.near=Y.near,M.far=w.far=b.far=Y.far,(E!==M.near||P!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),E=M.near,P=M.far);const K=Y.parent,ue=M.cameras;D(M,K);for(let le=0;le<ue.length;le++)D(ue[le],K);ue.length===2?$(M,b,w):M.projectionMatrix.copy(b.projectionMatrix),k(Y,M,K)};function k(Y,K,ue){ue===null?Y.matrix.copy(K.matrixWorld):(Y.matrix.copy(ue.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(K.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(K.projectionMatrix),Y.projectionMatrixInverse.copy(K.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Tf*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&g===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=Y)};let z=null;function Z(Y,K){if(f=K.getViewerPose(c||o),y=K,f!==null){const ue=f.views;g!==null&&(e.setRenderTargetFramebuffer(u,g.framebuffer),e.setRenderTarget(u));let le=!1;ue.length!==M.cameras.length&&(M.cameras.length=0,le=!0);for(let me=0;me<ue.length;me++){const Le=ue[me];let ze=null;if(g!==null)ze=g.getViewport(Le);else{const qe=h.getViewSubImage(d,Le);ze=qe.viewport,me===0&&(e.setRenderTargetTextures(u,qe.colorTexture,d.ignoreDepthValues?void 0:qe.depthStencilTexture),e.setRenderTarget(u))}let Re=N[me];Re===void 0&&(Re=new bn,Re.layers.enable(me),Re.viewport=new bt,N[me]=Re),Re.matrix.fromArray(Le.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(Le.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(ze.x,ze.y,ze.width,ze.height),me===0&&(M.matrix.copy(Re.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),le===!0&&M.cameras.push(Re)}}for(let ue=0;ue<v.length;ue++){const le=m[ue],me=v[ue];le!==null&&me!==void 0&&me.update(le,K,c||o)}z&&z(Y,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),y=null}const Q=new ev;Q.setAnimationLoop(Z),this.setAnimationLoop=function(Y){z=Y},this.dispose=function(){}}}function V1(t,e){function n(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,Z0(t)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,v,m,x){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),h(p,u)):u.isMeshPhongMaterial?(s(p,u),f(p,u)):u.isMeshStandardMaterial?(s(p,u),d(p,u),u.isMeshPhysicalMaterial&&g(p,u,x)):u.isMeshMatcapMaterial?(s(p,u),y(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),_(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,v,m):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,n(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Mn&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,n(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Mn&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,n(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,n(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const v=e.get(u).envMap;if(v&&(p.envMap.value=v,p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const m=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*m,n(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,v,m){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*v,p.scale.value=m*.5,u.map&&(p.map.value=u.map,n(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function f(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function h(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function d(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function g(p,u,v){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Mn&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,p.specularIntensityMapTransform))}function y(p,u){u.matcap&&(p.matcap.value=u.matcap)}function _(p,u){const v=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function W1(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,m){const x=m.program;i.uniformBlockBinding(v,x)}function c(v,m){let x=r[v.id];x===void 0&&(y(v),x=f(v),r[v.id]=x,v.addEventListener("dispose",p));const C=m.program;i.updateUBOMapping(v,C);const b=e.render.frame;s[v.id]!==b&&(d(v),s[v.id]=b)}function f(v){const m=h();v.__bindingPointIndex=m;const x=t.createBuffer(),C=v.__size,b=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,C,b),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,m,x),x}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const m=r[v.id],x=v.uniforms,C=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,m);for(let b=0,w=x.length;b<w;b++){const N=Array.isArray(x[b])?x[b]:[x[b]];for(let M=0,E=N.length;M<E;M++){const P=N[M];if(g(P,b,M,C)===!0){const j=P.__offset,B=Array.isArray(P.value)?P.value:[P.value];let R=0;for(let U=0;U<B.length;U++){const W=B[U],$=_(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,t.bufferSubData(t.UNIFORM_BUFFER,j+R,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,R),R+=$.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,j,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(v,m,x,C){const b=v.value,w=m+"_"+x;if(C[w]===void 0)return typeof b=="number"||typeof b=="boolean"?C[w]=b:C[w]=b.clone(),!0;{const N=C[w];if(typeof b=="number"||typeof b=="boolean"){if(N!==b)return C[w]=b,!0}else if(N.equals(b)===!1)return N.copy(b),!0}return!1}function y(v){const m=v.uniforms;let x=0;const C=16;for(let w=0,N=m.length;w<N;w++){const M=Array.isArray(m[w])?m[w]:[m[w]];for(let E=0,P=M.length;E<P;E++){const j=M[E],B=Array.isArray(j.value)?j.value:[j.value];for(let R=0,U=B.length;R<U;R++){const W=B[R],$=_(W),D=x%C;D!==0&&C-D<$.boundary&&(x+=C-D),j.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=x,x+=$.storage}}}const b=x%C;return b>0&&(x+=C-b),v.__size=x,v.__cache={},this}function _(v){const m={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(m.boundary=4,m.storage=4):v.isVector2?(m.boundary=8,m.storage=8):v.isVector3||v.isColor?(m.boundary=16,m.storage=12):v.isVector4?(m.boundary=16,m.storage=16):v.isMatrix3?(m.boundary=48,m.storage=48):v.isMatrix4?(m.boundary=64,m.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),m}function p(v){const m=v.target;m.removeEventListener("dispose",p);const x=o.indexOf(m.__bindingPointIndex);o.splice(x,1),t.deleteBuffer(r[m.id]),delete r[m.id],delete s[m.id]}function u(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class lv{constructor(e={}){const{canvas:n=Bx(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const g=new Uint32Array(4),y=new Int32Array(4);let _=null,p=null;const u=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$t,this._useLegacyLights=!1,this.toneMapping=ar,this.toneMappingExposure=1;const m=this;let x=!1,C=0,b=0,w=null,N=-1,M=null;const E=new bt,P=new bt;let j=null;const B=new it(0);let R=0,U=n.width,W=n.height,$=1,D=null,k=null;const z=new bt(0,0,U,W),Z=new bt(0,0,U,W);let Q=!1;const Y=new Cd;let K=!1,ue=!1,le=null;const me=new Dt,Le=new et,ze=new F,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function qe(){return w===null?$:1}let H=i;function Tt(T,I){for(let O=0;O<T.length;O++){const X=T[O],V=n.getContext(X,I);if(V!==null)return V}return null}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${wd}`),n.addEventListener("webglcontextlost",se,!1),n.addEventListener("webglcontextrestored",L,!1),n.addEventListener("webglcontextcreationerror",he,!1),H===null){const I=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&I.shift(),H=Tt(I,T),H===null)throw Tt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&H instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let De,Ge,Me,pt,Be,A,S,G,ne,te,ie,we,ge,ye,Ue,$e,ee,at,Ke,Xe,Ce,xe,Ye,ct;function St(){De=new ew(H),Ge=new qE(H,De,e),De.init(Ge),xe=new z1(H,De,Ge),Me=new O1(H,De,Ge),pt=new iw(H),Be=new E1,A=new k1(H,De,Me,Be,Ge,xe,pt),S=new KE(m),G=new QE(m),ne=new fS(H,Ge),Ye=new jE(H,De,ne,Ge),te=new tw(H,ne,pt,Ye),ie=new aw(H,te,ne,pt),Ke=new ow(H,Ge,A),$e=new $E(Be),we=new M1(m,S,G,De,Ge,Ye,$e),ge=new V1(m,Be),ye=new T1,Ue=new L1(De,Ge),at=new XE(m,S,G,Me,ie,d,l),ee=new F1(m,ie,Ge),ct=new W1(H,pt,Ge,Me),Xe=new YE(H,De,pt,Ge),Ce=new nw(H,De,pt,Ge),pt.programs=we.programs,m.capabilities=Ge,m.extensions=De,m.properties=Be,m.renderLists=ye,m.shadowMap=ee,m.state=Me,m.info=pt}St();const Ze=new G1(m,H);this.xr=Ze,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const T=De.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=De.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(T){T!==void 0&&($=T,this.setSize(U,W,!1))},this.getSize=function(T){return T.set(U,W)},this.setSize=function(T,I,O=!0){if(Ze.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=T,W=I,n.width=Math.floor(T*$),n.height=Math.floor(I*$),O===!0&&(n.style.width=T+"px",n.style.height=I+"px"),this.setViewport(0,0,T,I)},this.getDrawingBufferSize=function(T){return T.set(U*$,W*$).floor()},this.setDrawingBufferSize=function(T,I,O){U=T,W=I,$=O,n.width=Math.floor(T*O),n.height=Math.floor(I*O),this.setViewport(0,0,T,I)},this.getCurrentViewport=function(T){return T.copy(E)},this.getViewport=function(T){return T.copy(z)},this.setViewport=function(T,I,O,X){T.isVector4?z.set(T.x,T.y,T.z,T.w):z.set(T,I,O,X),Me.viewport(E.copy(z).multiplyScalar($).floor())},this.getScissor=function(T){return T.copy(Z)},this.setScissor=function(T,I,O,X){T.isVector4?Z.set(T.x,T.y,T.z,T.w):Z.set(T,I,O,X),Me.scissor(P.copy(Z).multiplyScalar($).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(T){Me.setScissorTest(Q=T)},this.setOpaqueSort=function(T){D=T},this.setTransparentSort=function(T){k=T},this.getClearColor=function(T){return T.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor.apply(at,arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha.apply(at,arguments)},this.clear=function(T=!0,I=!0,O=!0){let X=0;if(T){let V=!1;if(w!==null){const ce=w.texture.format;V=ce===z0||ce===k0||ce===O0}if(V){const ce=w.texture.type,Te=ce===lr||ce===$i||ce===Td||ce===Ir||ce===N0||ce===F0,be=at.getClearColor(),Ne=at.getClearAlpha(),Fe=be.r,Ee=be.g,Ae=be.b;Te?(g[0]=Fe,g[1]=Ee,g[2]=Ae,g[3]=Ne,H.clearBufferuiv(H.COLOR,0,g)):(y[0]=Fe,y[1]=Ee,y[2]=Ae,y[3]=Ne,H.clearBufferiv(H.COLOR,0,y))}else X|=H.COLOR_BUFFER_BIT}I&&(X|=H.DEPTH_BUFFER_BIT),O&&(X|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",se,!1),n.removeEventListener("webglcontextrestored",L,!1),n.removeEventListener("webglcontextcreationerror",he,!1),ye.dispose(),Ue.dispose(),Be.dispose(),S.dispose(),G.dispose(),ie.dispose(),Ye.dispose(),ct.dispose(),we.dispose(),Ze.dispose(),Ze.removeEventListener("sessionstart",ve),Ze.removeEventListener("sessionend",Oe),le&&(le.dispose(),le=null),tt.stop()};function se(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const T=pt.autoReset,I=ee.enabled,O=ee.autoUpdate,X=ee.needsUpdate,V=ee.type;St(),pt.autoReset=T,ee.enabled=I,ee.autoUpdate=O,ee.needsUpdate=X,ee.type=V}function he(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function pe(T){const I=T.target;I.removeEventListener("dispose",pe),He(I)}function He(T){Ie(T),Be.remove(T)}function Ie(T){const I=Be.get(T).programs;I!==void 0&&(I.forEach(function(O){we.releaseProgram(O)}),T.isShaderMaterial&&we.releaseShaderCache(T))}this.renderBufferDirect=function(T,I,O,X,V,ce){I===null&&(I=Re);const Te=V.isMesh&&V.matrixWorld.determinant()<0,be=Js(T,I,O,X,V);Me.setMaterial(X,Te);let Ne=O.index,Fe=1;if(X.wireframe===!0){if(Ne=te.getWireframeAttribute(O),Ne===void 0)return;Fe=2}const Ee=O.drawRange,Ae=O.attributes.position;let st=Ee.start*Fe,ut=(Ee.start+Ee.count)*Fe;ce!==null&&(st=Math.max(st,ce.start*Fe),ut=Math.min(ut,(ce.start+ce.count)*Fe)),Ne!==null?(st=Math.max(st,0),ut=Math.min(ut,Ne.count)):Ae!=null&&(st=Math.max(st,0),ut=Math.min(ut,Ae.count));const mt=ut-st;if(mt<0||mt===1/0)return;Ye.setup(V,X,be,O,Ne);let It,ft=Xe;if(Ne!==null&&(It=ne.get(Ne),ft=Ce,ft.setIndex(It)),V.isMesh)X.wireframe===!0?(Me.setLineWidth(X.wireframeLinewidth*qe()),ft.setMode(H.LINES)):ft.setMode(H.TRIANGLES);else if(V.isLine){let Je=X.linewidth;Je===void 0&&(Je=1),Me.setLineWidth(Je*qe()),V.isLineSegments?ft.setMode(H.LINES):V.isLineLoop?ft.setMode(H.LINE_LOOP):ft.setMode(H.LINE_STRIP)}else V.isPoints?ft.setMode(H.POINTS):V.isSprite&&ft.setMode(H.TRIANGLES);if(V.isBatchedMesh)ft.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)ft.renderInstances(st,mt,V.count);else if(O.isInstancedBufferGeometry){const Je=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,Ii=Math.min(O.instanceCount,Je);ft.renderInstances(st,mt,Ii)}else ft.render(st,mt)};function q(T,I,O){T.transparent===!0&&T.side===ci&&T.forceSinglePass===!1?(T.side=Mn,T.needsUpdate=!0,We(T,I,O),T.side=pi,T.needsUpdate=!0,We(T,I,O),T.side=ci):We(T,I,O)}this.compile=function(T,I,O=null){O===null&&(O=T),p=Ue.get(O),p.init(),v.push(p),O.traverseVisible(function(V){V.isLight&&V.layers.test(I.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),T!==O&&T.traverseVisible(function(V){V.isLight&&V.layers.test(I.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights(m._useLegacyLights);const X=new Set;return T.traverse(function(V){const ce=V.material;if(ce)if(Array.isArray(ce))for(let Te=0;Te<ce.length;Te++){const be=ce[Te];q(be,O,V),X.add(be)}else q(ce,O,V),X.add(ce)}),v.pop(),p=null,X},this.compileAsync=function(T,I,O=null){const X=this.compile(T,I,O);return new Promise(V=>{function ce(){if(X.forEach(function(Te){Be.get(Te).currentProgram.isReady()&&X.delete(Te)}),X.size===0){V(T);return}setTimeout(ce,10)}De.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let oe=null;function J(T){oe&&oe(T)}function ve(){tt.stop()}function Oe(){tt.start()}const tt=new ev;tt.setAnimationLoop(J),typeof self<"u"&&tt.setContext(self),this.setAnimationLoop=function(T){oe=T,Ze.setAnimationLoop(T),T===null?tt.stop():tt.start()},Ze.addEventListener("sessionstart",ve),Ze.addEventListener("sessionend",Oe),this.render=function(T,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Ze.enabled===!0&&Ze.isPresenting===!0&&(Ze.cameraAutoUpdate===!0&&Ze.updateCamera(I),I=Ze.getCamera()),T.isScene===!0&&T.onBeforeRender(m,T,I,w),p=Ue.get(T,v.length),p.init(),v.push(p),me.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Y.setFromProjectionMatrix(me),ue=this.localClippingEnabled,K=$e.init(this.clippingPlanes,ue),_=ye.get(T,u.length),_.init(),u.push(_),vt(T,I,0,m.sortObjects),_.finish(),m.sortObjects===!0&&_.sort(D,k),this.info.render.frame++,K===!0&&$e.beginShadows();const O=p.state.shadowsArray;if(ee.render(O,T,I),K===!0&&$e.endShadows(),this.info.autoReset===!0&&this.info.reset(),at.render(_,T),p.setupLights(m._useLegacyLights),I.isArrayCamera){const X=I.cameras;for(let V=0,ce=X.length;V<ce;V++){const Te=X[V];Pe(_,T,Te,Te.viewport)}}else Pe(_,T,I);w!==null&&(A.updateMultisampleRenderTarget(w),A.updateRenderTargetMipmap(w)),T.isScene===!0&&T.onAfterRender(m,T,I),Ye.resetDefaultState(),N=-1,M=null,v.pop(),v.length>0?p=v[v.length-1]:p=null,u.pop(),u.length>0?_=u[u.length-1]:_=null};function vt(T,I,O,X){if(T.visible===!1)return;if(T.layers.test(I.layers)){if(T.isGroup)O=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(I);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Y.intersectsSprite(T)){X&&ze.setFromMatrixPosition(T.matrixWorld).applyMatrix4(me);const Te=ie.update(T),be=T.material;be.visible&&_.push(T,Te,be,O,ze.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Y.intersectsObject(T))){const Te=ie.update(T),be=T.material;if(X&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ze.copy(T.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),ze.copy(Te.boundingSphere.center)),ze.applyMatrix4(T.matrixWorld).applyMatrix4(me)),Array.isArray(be)){const Ne=Te.groups;for(let Fe=0,Ee=Ne.length;Fe<Ee;Fe++){const Ae=Ne[Fe],st=be[Ae.materialIndex];st&&st.visible&&_.push(T,Te,st,O,ze.z,Ae)}}else be.visible&&_.push(T,Te,be,O,ze.z,null)}}const ce=T.children;for(let Te=0,be=ce.length;Te<be;Te++)vt(ce[Te],I,O,X)}function Pe(T,I,O,X){const V=T.opaque,ce=T.transmissive,Te=T.transparent;p.setupLightsView(O),K===!0&&$e.setGlobalState(m.clippingPlanes,O),ce.length>0&&je(V,ce,I,O),X&&Me.viewport(E.copy(X)),V.length>0&&Se(V,I,O),ce.length>0&&Se(ce,I,O),Te.length>0&&Se(Te,I,O),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function je(T,I,O,X){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;const ce=Ge.isWebGL2;le===null&&(le=new Gr(1,1,{generateMipmaps:!0,type:De.has("EXT_color_buffer_half_float")?Qo:lr,minFilter:Jo,samples:ce?4:0})),m.getDrawingBufferSize(Le),ce?le.setSize(Le.x,Le.y):le.setSize(Af(Le.x),Af(Le.y));const Te=m.getRenderTarget();m.setRenderTarget(le),m.getClearColor(B),R=m.getClearAlpha(),R<1&&m.setClearColor(16777215,.5),m.clear();const be=m.toneMapping;m.toneMapping=ar,Se(T,O,X),A.updateMultisampleRenderTarget(le),A.updateRenderTargetMipmap(le);let Ne=!1;for(let Fe=0,Ee=I.length;Fe<Ee;Fe++){const Ae=I[Fe],st=Ae.object,ut=Ae.geometry,mt=Ae.material,It=Ae.group;if(mt.side===ci&&st.layers.test(X.layers)){const ft=mt.side;mt.side=Mn,mt.needsUpdate=!0,Ve(st,O,X,ut,mt,It),mt.side=ft,mt.needsUpdate=!0,Ne=!0}}Ne===!0&&(A.updateMultisampleRenderTarget(le),A.updateRenderTargetMipmap(le)),m.setRenderTarget(Te),m.setClearColor(B,R),m.toneMapping=be}function Se(T,I,O){const X=I.isScene===!0?I.overrideMaterial:null;for(let V=0,ce=T.length;V<ce;V++){const Te=T[V],be=Te.object,Ne=Te.geometry,Fe=X===null?Te.material:X,Ee=Te.group;be.layers.test(O.layers)&&Ve(be,I,O,Ne,Fe,Ee)}}function Ve(T,I,O,X,V,ce){T.onBeforeRender(m,I,O,X,V,ce),T.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),V.onBeforeRender(m,I,O,X,T,ce),V.transparent===!0&&V.side===ci&&V.forceSinglePass===!1?(V.side=Mn,V.needsUpdate=!0,m.renderBufferDirect(O,I,X,V,T,ce),V.side=pi,V.needsUpdate=!0,m.renderBufferDirect(O,I,X,V,T,ce),V.side=ci):m.renderBufferDirect(O,I,X,V,T,ce),T.onAfterRender(m,I,O,X,V,ce)}function We(T,I,O){I.isScene!==!0&&(I=Re);const X=Be.get(T),V=p.state.lights,ce=p.state.shadowsArray,Te=V.state.version,be=we.getParameters(T,V.state,ce,I,O),Ne=we.getProgramCacheKey(be);let Fe=X.programs;X.environment=T.isMeshStandardMaterial?I.environment:null,X.fog=I.fog,X.envMap=(T.isMeshStandardMaterial?G:S).get(T.envMap||X.environment),Fe===void 0&&(T.addEventListener("dispose",pe),Fe=new Map,X.programs=Fe);let Ee=Fe.get(Ne);if(Ee!==void 0){if(X.currentProgram===Ee&&X.lightsStateVersion===Te)return hn(T,be),Ee}else be.uniforms=we.getUniforms(T),T.onBuild(O,be,m),T.onBeforeCompile(be,m),Ee=we.acquireProgram(be,Ne),Fe.set(Ne,Ee),X.uniforms=be.uniforms;const Ae=X.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ae.clippingPlanes=$e.uniform),hn(T,be),X.needsLights=pn(T),X.lightsStateVersion=Te,X.needsLights&&(Ae.ambientLightColor.value=V.state.ambient,Ae.lightProbe.value=V.state.probe,Ae.directionalLights.value=V.state.directional,Ae.directionalLightShadows.value=V.state.directionalShadow,Ae.spotLights.value=V.state.spot,Ae.spotLightShadows.value=V.state.spotShadow,Ae.rectAreaLights.value=V.state.rectArea,Ae.ltc_1.value=V.state.rectAreaLTC1,Ae.ltc_2.value=V.state.rectAreaLTC2,Ae.pointLights.value=V.state.point,Ae.pointLightShadows.value=V.state.pointShadow,Ae.hemisphereLights.value=V.state.hemi,Ae.directionalShadowMap.value=V.state.directionalShadowMap,Ae.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ae.spotShadowMap.value=V.state.spotShadowMap,Ae.spotLightMatrix.value=V.state.spotLightMatrix,Ae.spotLightMap.value=V.state.spotLightMap,Ae.pointShadowMap.value=V.state.pointShadowMap,Ae.pointShadowMatrix.value=V.state.pointShadowMatrix),X.currentProgram=Ee,X.uniformsList=null,Ee}function _t(T){if(T.uniformsList===null){const I=T.currentProgram.getUniforms();T.uniformsList=hl.seqWithValue(I.seq,T.uniforms)}return T.uniformsList}function hn(T,I){const O=Be.get(T);O.outputColorSpace=I.outputColorSpace,O.batching=I.batching,O.instancing=I.instancing,O.instancingColor=I.instancingColor,O.skinning=I.skinning,O.morphTargets=I.morphTargets,O.morphNormals=I.morphNormals,O.morphColors=I.morphColors,O.morphTargetsCount=I.morphTargetsCount,O.numClippingPlanes=I.numClippingPlanes,O.numIntersection=I.numClipIntersection,O.vertexAlphas=I.vertexAlphas,O.vertexTangents=I.vertexTangents,O.toneMapping=I.toneMapping}function Js(T,I,O,X,V){I.isScene!==!0&&(I=Re),A.resetTextureUnits();const ce=I.fog,Te=X.isMeshStandardMaterial?I.environment:null,be=w===null?m.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Di,Ne=(X.isMeshStandardMaterial?G:S).get(X.envMap||Te),Fe=X.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Ee=!!O.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ae=!!O.morphAttributes.position,st=!!O.morphAttributes.normal,ut=!!O.morphAttributes.color;let mt=ar;X.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(mt=m.toneMapping);const It=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ft=It!==void 0?It.length:0,Je=Be.get(X),Ii=p.state.lights;if(K===!0&&(ue===!0||T!==M)){const In=T===M&&X.id===N;$e.setState(X,T,In)}let ot=!1;X.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Ii.state.version||Je.outputColorSpace!==be||V.isBatchedMesh&&Je.batching===!1||!V.isBatchedMesh&&Je.batching===!0||V.isInstancedMesh&&Je.instancing===!1||!V.isInstancedMesh&&Je.instancing===!0||V.isSkinnedMesh&&Je.skinning===!1||!V.isSkinnedMesh&&Je.skinning===!0||V.isInstancedMesh&&Je.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Je.instancingColor===!1&&V.instanceColor!==null||Je.envMap!==Ne||X.fog===!0&&Je.fog!==ce||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==$e.numPlanes||Je.numIntersection!==$e.numIntersection)||Je.vertexAlphas!==Fe||Je.vertexTangents!==Ee||Je.morphTargets!==Ae||Je.morphNormals!==st||Je.morphColors!==ut||Je.toneMapping!==mt||Ge.isWebGL2===!0&&Je.morphTargetsCount!==ft)&&(ot=!0):(ot=!0,Je.__version=X.version);let yt=Je.currentProgram;ot===!0&&(yt=We(X,I,V));let Ni=!1,Jt=!1,Qs=!1;const Wt=yt.getUniforms(),jn=Je.uniforms;if(Me.useProgram(yt.program)&&(Ni=!0,Jt=!0,Qs=!0),X.id!==N&&(N=X.id,Jt=!0),Ni||M!==T){Wt.setValue(H,"projectionMatrix",T.projectionMatrix),Wt.setValue(H,"viewMatrix",T.matrixWorldInverse);const In=Wt.map.cameraPosition;In!==void 0&&In.setValue(H,ze.setFromMatrixPosition(T.matrixWorld)),Ge.logarithmicDepthBuffer&&Wt.setValue(H,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Wt.setValue(H,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,Jt=!0,Qs=!0)}if(V.isSkinnedMesh){Wt.setOptional(H,V,"bindMatrix"),Wt.setOptional(H,V,"bindMatrixInverse");const In=V.skeleton;In&&(Ge.floatVertexTextures?(In.boneTexture===null&&In.computeBoneTexture(),Wt.setValue(H,"boneTexture",In.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}V.isBatchedMesh&&(Wt.setOptional(H,V,"batchingTexture"),Wt.setValue(H,"batchingTexture",V._matricesTexture,A));const vr=O.morphAttributes;if((vr.position!==void 0||vr.normal!==void 0||vr.color!==void 0&&Ge.isWebGL2===!0)&&Ke.update(V,O,yt),(Jt||Je.receiveShadow!==V.receiveShadow)&&(Je.receiveShadow=V.receiveShadow,Wt.setValue(H,"receiveShadow",V.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(jn.envMap.value=Ne,jn.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),Jt&&(Wt.setValue(H,"toneMappingExposure",m.toneMappingExposure),Je.needsLights&&Xn(jn,Qs),ce&&X.fog===!0&&ge.refreshFogUniforms(jn,ce),ge.refreshMaterialUniforms(jn,X,$,W,le),hl.upload(H,_t(Je),jn,A)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(hl.upload(H,_t(Je),jn,A),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Wt.setValue(H,"center",V.center),Wt.setValue(H,"modelViewMatrix",V.modelViewMatrix),Wt.setValue(H,"normalMatrix",V.normalMatrix),Wt.setValue(H,"modelMatrix",V.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const In=X.uniformsGroups;for(let pc=0,dv=In.length;pc<dv;pc++)if(Ge.isWebGL2){const Ld=In[pc];ct.update(Ld,yt),ct.bind(Ld,yt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return yt}function Xn(T,I){T.ambientLightColor.needsUpdate=I,T.lightProbe.needsUpdate=I,T.directionalLights.needsUpdate=I,T.directionalLightShadows.needsUpdate=I,T.pointLights.needsUpdate=I,T.pointLightShadows.needsUpdate=I,T.spotLights.needsUpdate=I,T.spotLightShadows.needsUpdate=I,T.rectAreaLights.needsUpdate=I,T.hemisphereLights.needsUpdate=I}function pn(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(T,I,O){Be.get(T.texture).__webglTexture=I,Be.get(T.depthTexture).__webglTexture=O;const X=Be.get(T);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=O===void 0,X.__autoAllocateDepthBuffer||De.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,I){const O=Be.get(T);O.__webglFramebuffer=I,O.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(T,I=0,O=0){w=T,C=I,b=O;let X=!0,V=null,ce=!1,Te=!1;if(T){const Ne=Be.get(T);Ne.__useDefaultFramebuffer!==void 0?(Me.bindFramebuffer(H.FRAMEBUFFER,null),X=!1):Ne.__webglFramebuffer===void 0?A.setupRenderTarget(T):Ne.__hasExternalTextures&&A.rebindTextures(T,Be.get(T.texture).__webglTexture,Be.get(T.depthTexture).__webglTexture);const Fe=T.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Te=!0);const Ee=Be.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ee[I])?V=Ee[I][O]:V=Ee[I],ce=!0):Ge.isWebGL2&&T.samples>0&&A.useMultisampledRTT(T)===!1?V=Be.get(T).__webglMultisampledFramebuffer:Array.isArray(Ee)?V=Ee[O]:V=Ee,E.copy(T.viewport),P.copy(T.scissor),j=T.scissorTest}else E.copy(z).multiplyScalar($).floor(),P.copy(Z).multiplyScalar($).floor(),j=Q;if(Me.bindFramebuffer(H.FRAMEBUFFER,V)&&Ge.drawBuffers&&X&&Me.drawBuffers(T,V),Me.viewport(E),Me.scissor(P),Me.setScissorTest(j),ce){const Ne=Be.get(T.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+I,Ne.__webglTexture,O)}else if(Te){const Ne=Be.get(T.texture),Fe=I||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ne.__webglTexture,O||0,Fe)}N=-1},this.readRenderTargetPixels=function(T,I,O,X,V,ce,Te){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Be.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Te!==void 0&&(be=be[Te]),be){Me.bindFramebuffer(H.FRAMEBUFFER,be);try{const Ne=T.texture,Fe=Ne.format,Ee=Ne.type;if(Fe!==ti&&xe.convert(Fe)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ae=Ee===Qo&&(De.has("EXT_color_buffer_half_float")||Ge.isWebGL2&&De.has("EXT_color_buffer_float"));if(Ee!==lr&&xe.convert(Ee)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ee===Ki&&(Ge.isWebGL2||De.has("OES_texture_float")||De.has("WEBGL_color_buffer_float")))&&!Ae){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=T.width-X&&O>=0&&O<=T.height-V&&H.readPixels(I,O,X,V,xe.convert(Fe),xe.convert(Ee),ce)}finally{const Ne=w!==null?Be.get(w).__webglFramebuffer:null;Me.bindFramebuffer(H.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(T,I,O=0){const X=Math.pow(2,-O),V=Math.floor(I.image.width*X),ce=Math.floor(I.image.height*X);A.setTexture2D(I,0),H.copyTexSubImage2D(H.TEXTURE_2D,O,0,0,T.x,T.y,V,ce),Me.unbindTexture()},this.copyTextureToTexture=function(T,I,O,X=0){const V=I.image.width,ce=I.image.height,Te=xe.convert(O.format),be=xe.convert(O.type);A.setTexture2D(O,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,O.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,O.unpackAlignment),I.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,X,T.x,T.y,V,ce,Te,be,I.image.data):I.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,X,T.x,T.y,I.mipmaps[0].width,I.mipmaps[0].height,Te,I.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,X,T.x,T.y,Te,be,I.image),X===0&&O.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),Me.unbindTexture()},this.copyTextureToTexture3D=function(T,I,O,X,V=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ce=T.max.x-T.min.x+1,Te=T.max.y-T.min.y+1,be=T.max.z-T.min.z+1,Ne=xe.convert(X.format),Fe=xe.convert(X.type);let Ee;if(X.isData3DTexture)A.setTexture3D(X,0),Ee=H.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)A.setTexture2DArray(X,0),Ee=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,X.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,X.unpackAlignment);const Ae=H.getParameter(H.UNPACK_ROW_LENGTH),st=H.getParameter(H.UNPACK_IMAGE_HEIGHT),ut=H.getParameter(H.UNPACK_SKIP_PIXELS),mt=H.getParameter(H.UNPACK_SKIP_ROWS),It=H.getParameter(H.UNPACK_SKIP_IMAGES),ft=O.isCompressedTexture?O.mipmaps[V]:O.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,ft.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ft.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,T.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,T.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,T.min.z),O.isDataTexture||O.isData3DTexture?H.texSubImage3D(Ee,V,I.x,I.y,I.z,ce,Te,be,Ne,Fe,ft.data):O.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Ee,V,I.x,I.y,I.z,ce,Te,be,Ne,ft.data)):H.texSubImage3D(Ee,V,I.x,I.y,I.z,ce,Te,be,Ne,Fe,ft),H.pixelStorei(H.UNPACK_ROW_LENGTH,Ae),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,st),H.pixelStorei(H.UNPACK_SKIP_PIXELS,ut),H.pixelStorei(H.UNPACK_SKIP_ROWS,mt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,It),V===0&&X.generateMipmaps&&H.generateMipmap(Ee),Me.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?A.setTextureCube(T,0):T.isData3DTexture?A.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?A.setTexture2DArray(T,0):A.setTexture2D(T,0),Me.unbindTexture()},this.resetState=function(){C=0,b=0,w=null,Me.reset(),Ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Ad?"display-p3":"srgb",n.unpackColorSpace=ht.workingColorSpace===lc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===$t?Fr:H0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Fr?$t:Di}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class X1 extends lv{}X1.prototype.isWebGL1Renderer=!0;class j1 extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class Y1{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Ef,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=cr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=cr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=cr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const on=new F;class Wl{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)on.fromBufferAttribute(this,n),on.applyMatrix4(e),this.setXYZ(n,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)on.fromBufferAttribute(this,n),on.applyNormalMatrix(e),this.setXYZ(n,on.x,on.y,on.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)on.fromBufferAttribute(this,n),on.transformDirection(e),this.setXYZ(n,on.x,on.y,on.z);return this}setX(e,n){return this.normalized&&(n=gt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=gt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=gt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=gt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Ei(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Ei(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Ei(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Ei(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=gt(n,this.array),i=gt(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=gt(n,this.array),i=gt(i,this.array),r=gt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=gt(n,this.array),i=gt(i,this.array),r=gt(r,this.array),s=gt(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new zt(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Wl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class So extends Xr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let cs;const ho=new F,us=new F,fs=new F,ds=new et,po=new et,cv=new Dt,qa=new F,mo=new F,$a=new F,sm=new et,_u=new et,om=new et;class Ka extends Ht{constructor(e=new So){if(super(),this.isSprite=!0,this.type="Sprite",cs===void 0){cs=new Pn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Y1(n,5);cs.setIndex([0,1,2,0,2,3]),cs.setAttribute("position",new Wl(i,3,0,!1)),cs.setAttribute("uv",new Wl(i,2,3,!1))}this.geometry=cs,this.material=e,this.center=new et(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),us.setFromMatrixScale(this.matrixWorld),cv.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),fs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&us.multiplyScalar(-fs.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;Za(qa.set(-.5,-.5,0),fs,o,us,r,s),Za(mo.set(.5,-.5,0),fs,o,us,r,s),Za($a.set(.5,.5,0),fs,o,us,r,s),sm.set(0,0),_u.set(1,0),om.set(1,1);let a=e.ray.intersectTriangle(qa,mo,$a,!1,ho);if(a===null&&(Za(mo.set(-.5,.5,0),fs,o,us,r,s),_u.set(0,1),a=e.ray.intersectTriangle(qa,$a,mo,!1,ho),a===null))return;const l=e.ray.origin.distanceTo(ho);l<e.near||l>e.far||n.push({distance:l,point:ho.clone(),uv:zn.getInterpolation(ho,qa,mo,$a,sm,_u,om,new et),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Za(t,e,n,i,r,s){ds.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(po.x=s*ds.x-r*ds.y,po.y=r*ds.x+s*ds.y):po.copy(ds),t.copy(e),t.x+=po.x,t.y+=po.y,t.applyMatrix4(cv)}class uv extends Xr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const am=new Dt,Rf=new bd,Ja=new cc,Qa=new F;class yu extends Ht{constructor(e=new Pn,n=new uv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ja.copy(i.boundingSphere),Ja.applyMatrix4(r),Ja.radius+=s,e.ray.intersectsSphere(Ja)===!1)return;am.copy(r).invert(),Rf.copy(e.ray).applyMatrix4(am);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),g=Math.min(c.count,o.start+o.count);for(let y=d,_=g;y<_;y++){const p=c.getX(y);Qa.fromBufferAttribute(h,p),lm(Qa,p,l,r,e,n,this)}}else{const d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let y=d,_=g;y<_;y++)Qa.fromBufferAttribute(h,y),lm(Qa,y,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function lm(t,e,n,i,r,s,o){const a=Rf.distanceSqToPoint(t);if(a<n){const l=new F;Rf.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class cm extends En{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class bs extends Pn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const f=[],h=new F,d=new F,g=[],y=[],_=[],p=[];for(let u=0;u<=i;u++){const v=[],m=u/i;let x=0;u===0&&o===0?x=.5/n:u===i&&l===Math.PI&&(x=-.5/n);for(let C=0;C<=n;C++){const b=C/n;h.x=-e*Math.cos(r+b*s)*Math.sin(o+m*a),h.y=e*Math.cos(o+m*a),h.z=e*Math.sin(r+b*s)*Math.sin(o+m*a),y.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),p.push(b+x,1-m),v.push(c++)}f.push(v)}for(let u=0;u<i;u++)for(let v=0;v<n;v++){const m=f[u][v+1],x=f[u][v],C=f[u+1][v],b=f[u+1][v+1];(u!==0||o>0)&&g.push(m,x,b),(u!==i-1||l<Math.PI)&&g.push(x,C,b)}this.setIndex(g),this.setAttribute("position",new di(y,3)),this.setAttribute("normal",new di(_,3)),this.setAttribute("uv",new di(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class um extends Xr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new it(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=G0,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class dc extends Ht{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class q1 extends dc{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new it(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const xu=new Dt,fm=new F,dm=new F;class fv{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.map=null,this.mapPass=null,this.matrix=new Dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cd,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;fm.setFromMatrixPosition(e.matrixWorld),n.position.copy(fm),dm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(dm),n.updateMatrixWorld(),xu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(xu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const hm=new Dt,go=new F,Su=new F;class $1 extends fv{constructor(){super(new bn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new et(4,2),this._viewportCount=6,this._viewports=[new bt(2,1,1,1),new bt(0,1,1,1),new bt(3,1,1,1),new bt(1,1,1,1),new bt(3,0,1,1),new bt(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),go.setFromMatrixPosition(e.matrixWorld),i.position.copy(go),Su.copy(i.position),Su.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Su),i.updateMatrixWorld(),r.makeTranslation(-go.x,-go.y,-go.z),hm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hm)}}class el extends dc{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new $1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class K1 extends fv{constructor(){super(new tv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Mu extends dc{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new K1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Z1 extends dc{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class J1{constructor(e,n,i=0,r=1/0){this.ray=new bd(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Rd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(e,n=!0,i=[]){return Cf(e,this,i,n),i.sort(pm),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Cf(e[r],this,i,n);return i.sort(pm),i}}function pm(t,e){return t.distance-e.distance}function Cf(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let s=0,o=r.length;s<o;s++)Cf(r[s],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wd);const de={bg:"#0f0d0b",surface:"#1e1b17",surfaceLight:"#2d2a25",amber:"#d4a574",amberBright:"#f0c896",amberDim:"#8b6b4a",textPrimary:"#ede5d8",textSecondary:"#8a8278",textMuted:"#4a4540",glowAmber:"rgba(212,165,116,0.25)"},Io={anger:{hex:"#d94f4f",r:.85,g:.31,b:.31,label:"anger"},frustration:{hex:"#e06b45",r:.88,g:.42,b:.27,label:"frustration"},anxiety:{hex:"#d98a3d",r:.85,g:.54,b:.24,label:"anxiety"},fear:{hex:"#8b5fbf",r:.55,g:.37,b:.75,label:"fear"},sadness:{hex:"#5b7fbf",r:.36,g:.5,b:.75,label:"sadness"},loneliness:{hex:"#6b6b9e",r:.42,g:.42,b:.62,label:"loneliness"},exhaustion:{hex:"#7a6b5a",r:.48,g:.42,b:.35,label:"exhaustion"},overwhelm:{hex:"#c75a7a",r:.78,g:.35,b:.48,label:"overwhelm"},joy:{hex:"#d4b84f",r:.83,g:.72,b:.31,label:"joy"},peace:{hex:"#7ab89e",r:.48,g:.72,b:.62,label:"peace"},hope:{hex:"#8fc98f",r:.56,g:.79,b:.56,label:"hope"},confidence:{hex:"#c9a84f",r:.79,g:.66,b:.31,label:"confidence"},clarity:{hex:"#8ecae6",r:.56,g:.79,b:.9,label:"clarity"},gratitude:{hex:"#a3d9a5",r:.64,g:.85,b:.65,label:"gratitude"},excitement:{hex:"#e8b84f",r:.91,g:.72,b:.31,label:"excitement"},love:{hex:"#e07aa5",r:.88,g:.48,b:.65,label:"love"},neutral:{hex:"#d4a574",r:.83,g:.65,b:.46,label:"neutral"}},Q1={anger:["angry","rage","furious","pissed","mad","hatred","resentment","bitter"],frustration:["frustrated","annoyed","irritated","stuck","blocked","failing","wrong"],anxiety:["anxious","worried","nervous","panic","racing","restless","uneasy","stress","stressed","overthink"],fear:["fear","scared","afraid","terrified","dread","paranoid","unsafe"],sadness:["sad","crying","depressed","grief","loss","heartbroken","empty","numb"],loneliness:["lonely","alone","isolated","disconnected","nobody","abandoned"],exhaustion:["tired","exhausted","drained","burnout","depleted","fatigued","worn"],overwhelm:["overwhelm","overwhelmed","drowning","too much","chaotic","scattered"],joy:["happy","joy","joyful","fun","laughing","wonderful","amazing","delighted"],peace:["calm","peace","peaceful","serene","still","quiet","centered","grounded","present"],hope:["hope","hopeful","optimistic","better","improving","growth","progress","forward"],confidence:["confident","strong","capable","proud","powerful","bold","certain"],clarity:["clarity","clear","insight","understand","realize","breakthrough","focus"],gratitude:["grateful","thankful","blessed","appreciate","fortunate","lucky"],excitement:["excited","thrilled","eager","alive","inspired","energized","motivated","built","building","create","creating"],love:["love","loving","connected","intimate","warm","tender","cherish","caring"]};function eT(t){const e=t.toLowerCase();let n="neutral",i=0;for(const[r,s]of Object.entries(Q1)){const o=s.filter(a=>e.includes(a)).length;o>i&&(i=o,n=r)}return n}function hc(t){const e=["anger","frustration","anxiety","fear","sadness","loneliness","exhaustion","overwhelm"],n=["joy","peace","hope","confidence","clarity","gratitude","excitement","love"];return e.includes(t)?"stress":n.includes(t)?"resolved":"neutral"}function ur(t){return Io[t]||Io.neutral}class tT{constructor(){this.ctx=null,this.initialized=!1}init(){if(!this.initialized)try{this.ctx=new(window.AudioContext||window.webkitAudioContext),this.initialized=!0}catch{}}play(e){if(!this.ctx)return;const n=this.ctx.currentTime;if(e==="zoom"){const i=this.ctx.createOscillator(),r=this.ctx.createGain(),s=this.ctx.createBiquadFilter();i.type="sawtooth",i.frequency.setValueAtTime(40,n),i.frequency.exponentialRampToValueAtTime(120,n+2.5),s.type="lowpass",s.frequency.setValueAtTime(200,n),s.frequency.exponentialRampToValueAtTime(2e3,n+2.5),r.gain.setValueAtTime(0,n),r.gain.linearRampToValueAtTime(.12,n+.8),r.gain.linearRampToValueAtTime(0,n+3),i.connect(s).connect(r).connect(this.ctx.destination),i.start(n),i.stop(n+3);const o=this.ctx.createOscillator(),a=this.ctx.createGain();o.type="sine",o.frequency.setValueAtTime(440,n+1),o.frequency.exponentialRampToValueAtTime(880,n+2.5),a.gain.setValueAtTime(0,n+1),a.gain.linearRampToValueAtTime(.03,n+1.8),a.gain.linearRampToValueAtTime(0,n+3),o.connect(a).connect(this.ctx.destination),o.start(n+1),o.stop(n+3)}if(e==="reveal"){const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(660,n),i.frequency.exponentialRampToValueAtTime(440,n+.6),r.gain.setValueAtTime(.06,n),r.gain.exponentialRampToValueAtTime(.001,n+.8),i.connect(r).connect(this.ctx.destination),i.start(n),i.stop(n+.8)}if(e==="submit"&&[0,.08,.16].forEach((i,r)=>{const s=this.ctx.createOscillator(),o=this.ctx.createGain();s.type="sine",s.frequency.value=[523,659,784][r],o.gain.setValueAtTime(.05,n+i),o.gain.exponentialRampToValueAtTime(.001,n+i+.4),s.connect(o).connect(this.ctx.destination),s.start(n+i),s.stop(n+i+.4)}),e==="hover"){const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sine",i.frequency.value=1200,r.gain.setValueAtTime(.015,n),r.gain.exponentialRampToValueAtTime(.001,n+.12),i.connect(r).connect(this.ctx.destination),i.start(n),i.stop(n+.12)}if(e==="drone"){const i=this.ctx.createOscillator(),r=this.ctx.createOscillator(),s=this.ctx.createGain(),o=this.ctx.createBiquadFilter();return i.type="sine",i.frequency.value=55,r.type="sine",r.frequency.value=82.5,o.type="lowpass",o.frequency.value=350,s.gain.value=.025,i.connect(o),r.connect(o),o.connect(s).connect(this.ctx.destination),i.start(n),r.start(n),{stop:()=>{s.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+2),setTimeout(()=>{i.stop(),r.stop()},2e3)}}}if(e==="impact"){const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(180,n),i.frequency.exponentialRampToValueAtTime(40,n+.5),r.gain.setValueAtTime(.08,n),r.gain.exponentialRampToValueAtTime(.001,n+.6),i.connect(r).connect(this.ctx.destination),i.start(n),i.stop(n+.6)}e==="coalesce"&&[440,660,880,1100].forEach((i,r)=>{const s=this.ctx.createOscillator(),o=this.ctx.createGain();s.type="sine",s.frequency.setValueAtTime(i*.5,n+r*.12),s.frequency.exponentialRampToValueAtTime(i,n+r*.12+.25),o.gain.setValueAtTime(0,n+r*.12),o.gain.linearRampToValueAtTime(.035,n+r*.12+.08),o.gain.exponentialRampToValueAtTime(.001,n+r*.12+.7),s.connect(o).connect(this.ctx.destination),s.start(n+r*.12),s.stop(n+r*.12+.7)})}}const Ft=new tT;function Gi(t,e,n){const i=Math.sin(t*127.1+e*311.7+n*74.7)*43758.5453;return(i-Math.floor(i))*2-1}function nT(t,e,n){const i=Math.floor(t),r=Math.floor(e),s=Math.floor(n),o=t-i,a=e-r,l=n-s,c=o*o*(3-2*o),f=a*a*(3-2*a),h=l*l*(3-2*l),d=Gi(i,r,s),g=Gi(i+1,r,s),y=Gi(i,r+1,s),_=Gi(i+1,r+1,s),p=Gi(i,r,s+1),u=Gi(i+1,r,s+1),v=Gi(i,r+1,s+1),m=Gi(i+1,r+1,s+1),x=d+(g-d)*c,C=y+(_-y)*c,b=p+(u-p)*c,w=v+(m-v)*c,N=x+(C-x)*f,M=b+(w-b)*f;return N+(M-N)*h}function mm(t,e,n,i=4){let r=0,s=.5,o=1;for(let a=0;a<i;a++)r+=s*nT(t*o,e*o,n*o),s*=.5,o*=2;return r}function Mo(t){let e=2166136261,n=1818371886;for(let s=0;s<t.length;s++)e^=t.charCodeAt(s),e=Math.imul(e,16777619),n^=t.charCodeAt(s),n=Math.imul(n,1540483477);const i=.2+(e>>>0)/4294967295*(Math.PI-.4),r=(n>>>0)/4294967295*Math.PI*2;return{phi:i,theta:r}}function gm(t,e){const{phi:n,theta:i}=Mo(t);return new F(e*Math.sin(n)*Math.cos(i),e*Math.cos(n),e*Math.sin(n)*Math.sin(i))}const iT=new Set(["i","me","my","the","a","an","is","was","am","are","be","been","to","of","in","for","on","with","at","by","it","its","and","or","but","not","no","so","if","do","did","has","had","have","this","that","what","when","where","how","who","all","just","very","really","too","about","out","up","can","will","would","should","could","get","got","being","some","than","them","then","they","from","like","feel","feeling","think","thinking","know","thing","things","going","want","need","much","way","even","still","right","now","today","always","never","every","something","anything","everything","been","also","into","more","most","over","such","only","through","back","after","before","other","make","first","come","made","well","here","take","many","because","does","each","same","different","kind","between","under","while","again","off","down","keep","around","another","though","during","few","both","these","those","since"]),rT={built:"build",building:"build",builds:"build",builder:"build",creating:"create",created:"create",creates:"create",creation:"create",hopeful:"hope",hoping:"hope",hopes:"hope",hoped:"hope",sleeping:"sleep",slept:"sleep",sleeps:"sleep",sleepless:"sleep",working:"work",worked:"work",works:"work",isolated:"lonely",alone:"lonely",loneliness:"lonely",exhausted:"exhaust",exhausting:"exhaust",exhaustion:"exhaust",depleted:"exhaust",drained:"exhaust",fatigued:"exhaust",frustrated:"frustrate",frustrating:"frustrate",frustration:"frustrate",peaceful:"peace",grounded:"peace",clarity:"clear",clearer:"clear",confident:"confidence",grateful:"gratitude",excited:"excite",exciting:"excite",excitement:"excite",stressing:"stress",stressed:"stress",stressful:"stress",worried:"worry",worries:"worry",worrying:"worry",scared:"fear",afraid:"fear",fearful:"fear",terrified:"fear",angry:"anger",angrier:"anger",happier:"happy",happiness:"happy",sadder:"sad",sadness:"sad",comparing:"compare",compared:"compare",spiraling:"spiral",racing:"race",questioning:"question",improving:"improve",shifting:"shift",holding:"hold"};function fr(t){return rT[t]||t}function sT(t){const e=t.toLowerCase().replace(/[^a-z'\s]/g,"").split(/\s+/).filter(s=>s.length>0),n=e.filter(s=>s.length>2&&!iT.has(s)).map(fr),i=[...new Set(n)];if(i.length>0)return i;const r=e.filter(s=>s.length>2).map(fr);if(r.length>0)return[...new Set(r)];if(e.length>0){const s=e.reduce((o,a)=>o.length>=a.length?o:a);return[fr(s)]}return["thought"]}const vm={"work & career":["career","job","work","working","office","boss","coworker","meeting","deadline","project","promotion","fired","quit","hire","hiring","resume","interview","company","manager","team","colleague","corporate","professional","freelance","client","business","startup","hustle","grind","commute","salary","raise","performance","review","intern","remote","hybrid","workload","overtime","productivity"],finances:["money","finance","financial","debt","bills","salary","income","budget","savings","invest","investing","investment","expensive","afford","rent","mortgage","bank","credit","loan","broke","wealthy","rich","poor","pay","payment","tax","taxes","crypto","stock","stocks","spending","cost","price","save","fund","retire","retirement","economic"],"health & body":["health","sleep","sleeping","exercise","exercising","workout","gym","sick","sickness","pain","energy","tired","exhausted","body","weight","diet","eating","eat","headache","medication","doctor","hospital","therapy","therapist","medical","illness","symptom","insomnia","fatigue","migraine","chronic","vitamin","nutrition","fitness","running","yoga","meditation","breathing","rest","recovery","heal","healing"],relationships:["relationship","friend","friends","friendship","family","partner","love","loving","lonely","trust","argue","argument","breakup","dating","marriage","married","parents","parent","mom","dad","mother","father","sibling","brother","sister","child","children","kid","kids","boyfriend","girlfriend","husband","wife","spouse","couple","bond","connection","connect","companion","social","people","person","community","neighbor","roommate","ex","divorce","communicate","communication"],"growth & purpose":["growth","learn","learning","skill","skills","improve","goal","goals","progress","clarity","direction","purpose","meaning","create","creating","build","building","mentor","mentoring","education","study","studying","school","college","university","degree","course","read","reading","book","practice","master","mastery","evolve","develop","development","potential","ambition","discipline","habit","routine","vision","mission","calling","passion","talent"],creativity:["creative","creativity","art","artist","music","musical","write","writing","design","designing","paint","painting","draw","drawing","sing","singing","dance","dancing","perform","performance","compose","craft","make","making","code","coding","program","programming","produce","producing","film","photo","photography","studio","instrument","song","poetry","poem","story","novel","inspiration","imagination","expression"],emotions:["stress","stressed","anxious","anxiety","worried","worry","fear","scared","panic","overwhelm","overwhelmed","stuck","lost","angry","frustrated","frustration","sad","sadness","lonely","tired","exhausted","hate","failing","wrong","bad","worse","worst","nothing","afraid","dread","racing","restless","calm","peace","peaceful","happy","happiness","joy","grateful","gratitude","better","improve","clarity","clear","good","great","love","hope","confident","confidence","strong","free","relief","resolved","done","finished","proud","excited","alive","present","anxious","nervous","depressed","depression","mood","emotional"],identity:["identity","self","worth","value","values","believe","belief","authentic","genuine","true","real","mask","pretend","image","ego","soul","spirit","spiritual","inner","core","essence","personality","character","integrity","moral","ethics","conscience","boundaries","boundary","accept","acceptance","belong","belonging","culture","cultural","heritage","roots","tradition"],environment:["home","house","apartment","space","room","nature","outside","outdoors","city","urban","rural","move","moving","location","place","travel","traveling","trip","vacation","weather","season","environment","surroundings","neighborhood","country","state","world","global","local","scenery","landscape","ocean","mountain","forest","garden","park"],technology:["tech","technology","computer","phone","screen","internet","online","digital","social media","app","software","hardware","device","algorithm","data","ai","artificial intelligence","robot","automation","virtual","cyber","hack","hacking","security","privacy","code","coding","website","platform","server","cloud","blockchain","quantum"],"time & life":["time","future","past","present","memory","memories","remember","forget","age","aging","young","old","birthday","anniversary","year","years","month","months","week","weeks","day","days","morning","evening","night","deadline","rush","hurry","slow","fast","patience","impatient","wait","waiting","soon","later","someday","legacy","life","death","dying","mortality","birth","chapter","phase","season","transition","change","changing"]};function oT(t){const e={};return t.forEach(n=>{let i=!1;for(const[r,s]of Object.entries(vm))if(s.some(o=>n===o||n.includes(o)||o.includes(n))){e[r]||(e[r]=[]),e[r].includes(n)||e[r].push(n),i=!0;break}if(!i){for(const[r,s]of Object.entries(vm))if(s.some(o=>n.length>=4&&o.length>=4&&(o.startsWith(n.slice(0,4))||n.startsWith(o.slice(0,4))))){e[r]||(e[r]=[]),e[r].includes(n)||e[r].push(n),i=!0;break}}i||(e.other||(e.other=[]),e.other.includes(n)||e.other.push(n))}),e}function aT({onEnter:t}){const[e,n]=ke.useState(0),i=ke.useRef(null),r=ke.useRef(null),[s,o]=ke.useState(null);ke.useEffect(()=>{const l=[setTimeout(()=>n(1),400),setTimeout(()=>n(2),1400),setTimeout(()=>n(3),2800),setTimeout(()=>n(4),4200)];return()=>l.forEach(clearTimeout)},[]),ke.useEffect(()=>{const l=i.current;if(!l)return;const c=l.getContext("2d"),f=l.width=window.innerWidth,h=l.height=window.innerHeight,d=Array.from({length:150},()=>({x:Math.random()*f,y:Math.random()*h,vx:(Math.random()-.5)*.4,vy:-Math.random()*.4-.1,sz:Math.random()*2.5+.3,op:Math.random()*.4,life:Math.random()*100}));let g=0;const y=()=>{g++,c.clearRect(0,0,f,h),d.forEach(_=>{_.x+=_.vx+Math.sin(g*.008+_.life)*.3,_.y+=_.vy,_.op=.08+Math.sin(g*.015+_.life)*.12,_.y<-10&&(_.y=h+10,_.x=Math.random()*f),c.beginPath(),c.arc(_.x,_.y,_.sz,0,Math.PI*2),c.fillStyle=`rgba(212,165,116,${Math.max(0,_.op)})`,c.fill()});for(let _=0;_<d.length;_++)for(let p=_+1;p<d.length;p++){const u=Math.hypot(d[_].x-d[p].x,d[_].y-d[p].y);u<90&&(c.beginPath(),c.moveTo(d[_].x,d[_].y),c.lineTo(d[p].x,d[p].y),c.strokeStyle=`rgba(212,165,116,${.03*(1-u/90)})`,c.lineWidth=.5,c.stroke())}r.current=requestAnimationFrame(y)};return e>=1&&y(),()=>cancelAnimationFrame(r.current)},[e]);const a=l=>{Ft.init(),Ft.play("zoom"),n(5),setTimeout(()=>t(l),2600)};return ae.jsxs("div",{style:{position:"fixed",inset:0,background:de.bg,zIndex:100,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",overflow:"hidden",opacity:e===5?0:1,transform:e===5?"scale(4)":"scale(1)",transition:e===5?"all 2.5s cubic-bezier(0.4, 0, 0, 1)":"none",filter:e===5?"blur(8px)":"none"},children:[ae.jsx("canvas",{ref:i,style:{position:"absolute",inset:0,opacity:e>=1?1:0,transition:"opacity 2s ease"}}),ae.jsx("div",{style:{position:"absolute",width:500,height:500,borderRadius:"50%",background:"radial-gradient(circle, rgba(212,165,116,0.12) 0%, transparent 65%)",opacity:e>=2?1:0,transition:"opacity 2s ease",filter:"blur(50px)",animation:e>=2?"orbPulse 6s ease-in-out infinite":"none"}}),ae.jsx("div",{style:{position:"absolute",top:44,fontFamily:"'JetBrains Mono', monospace",fontSize:9,letterSpacing:"0.35em",color:de.textMuted,opacity:e>=1?1:0,transform:e>=1?"translateY(0)":"translateY(-10px)",transition:"all 1.2s ease"},children:"LIRIO LABS PRESENTS"}),ae.jsxs("div",{style:{position:"relative",zIndex:2,textAlign:"center",transform:e>=2?"translateY(0) scale(1)":"translateY(40px) scale(0.85)",opacity:e>=2?1:0,transition:"all 1.4s cubic-bezier(0.22, 1, 0.36, 1)"},children:[ae.jsx("div",{style:{fontFamily:"'Fraunces', Georgia, serif",fontSize:"clamp(80px, 18vw, 160px)",fontWeight:300,color:de.textPrimary,letterSpacing:"-0.04em",lineHeight:.85,textShadow:`0 0 100px ${de.glowAmber}, 0 0 200px rgba(212,165,116,0.08)`},children:"COIL"}),ae.jsx("div",{style:{margin:"12px auto 0",height:1,width:e>=3?120:0,background:`linear-gradient(90deg, transparent, ${de.amber}, transparent)`,transition:"width 1.5s cubic-bezier(0.22, 1, 0.36, 1)",transitionDelay:"0.3s"}})]}),ae.jsxs("div",{style:{position:"relative",zIndex:2,marginTop:28,textAlign:"center",opacity:e>=3?1:0,transform:e>=3?"translateY(0)":"translateY(25px)",transition:"all 1.2s cubic-bezier(0.22, 1, 0.36, 1)"},children:[ae.jsx("div",{style:{fontFamily:"'Fraunces', Georgia, serif",fontSize:"clamp(16px, 3vw, 22px)",color:de.textSecondary,fontStyle:"italic",fontWeight:300},children:"your thoughts have terrain"}),ae.jsx("div",{style:{fontFamily:"'DM Sans', system-ui, sans-serif",fontSize:"clamp(11px, 1.8vw, 13px)",color:de.textMuted,marginTop:8,letterSpacing:"0.08em"},children:"see the patterns you can't feel"})]}),ae.jsx("div",{style:{position:"relative",zIndex:2,marginTop:56,display:"flex",gap:16,flexWrap:"wrap",justifyContent:"center",padding:"0 24px",opacity:e>=4?1:0,transform:e>=4?"translateY(0)":"translateY(35px)",transition:"all 1s cubic-bezier(0.22, 1, 0.36, 1)"},children:[{id:"explore",label:"EXPLORE TERRAIN",sub:"see demo thought patterns",icon:"◈"},{id:"begin",label:"BEGIN FRESH",sub:"start mapping your mind",icon:"◇"}].map(l=>ae.jsxs("button",{onClick:()=>a(l.id),onMouseEnter:()=>{o(l.id),Ft.init(),Ft.play("hover")},onMouseLeave:()=>o(null),style:{background:s===l.id?`${de.amber}12`:`${de.surface}aa`,border:`1px solid ${s===l.id?de.amber+"55":de.surfaceLight}`,borderRadius:14,padding:"22px 36px",cursor:"pointer",minWidth:210,textAlign:"center",transition:"all 0.5s cubic-bezier(0.22, 1, 0.36, 1)",transform:s===l.id?"scale(1.05) translateY(-4px)":"scale(1)",boxShadow:s===l.id?"0 12px 48px rgba(212,165,116,0.15), 0 0 80px rgba(212,165,116,0.06)":"0 4px 20px rgba(0,0,0,0.4)",backdropFilter:"blur(16px)"},children:[ae.jsx("div",{style:{fontSize:20,marginBottom:8,color:s===l.id?de.amberBright:de.amber,transition:"all 0.4s ease",transform:s===l.id?"scale(1.2)":"scale(1)"},children:l.icon}),ae.jsx("div",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:10,letterSpacing:"0.18em",color:s===l.id?de.amberBright:de.amber,marginBottom:6,transition:"color 0.3s ease"},children:l.label}),ae.jsx("div",{style:{fontFamily:"'DM Sans', system-ui, sans-serif",fontSize:11,color:de.textMuted,lineHeight:1.4},children:l.sub})]},l.id))}),ae.jsx("div",{style:{position:"absolute",bottom:28,fontFamily:"'JetBrains Mono', monospace",fontSize:8,letterSpacing:"0.3em",color:de.textMuted,opacity:e>=3?.35:0,transition:"opacity 1.5s ease"},children:"A LIRIO LABS INSTRUMENT · v0.3"}),ae.jsx("style",{children:"@keyframes orbPulse { 0%, 100% { transform: scale(1); opacity: 0.6; } 50% { transform: scale(1.15); opacity: 0.9; } }"})]})}function lT({clusters:t,entries:e,onMarkerClick:n,zoomTarget:i,viewMode:r}){const s=ke.useRef(null),o=ke.useRef({}),a=ke.useRef({}),l=ke.useRef({x:0,z:4,targetX:0,targetZ:4,yaw:Math.PI,targetYaw:Math.PI,pitch:-.12,targetPitch:-.12}),c=ke.useRef({phi:Math.PI/3,theta:0,radius:7,targetPhi:Math.PI/3,targetTheta:0,targetRadius:7}),f=ke.useRef({active:!1,lastX:0,lastY:0}),h=ke.useRef(0),d=ke.useRef(null),g=ke.useRef([]),y=ke.useRef(new J1),_=ke.useRef(new et),p=ke.useRef(r||"surface");ke.useRef({x:0,y:0});const u=ke.useRef(new Map),v=ke.useRef([]);ke.useEffect(()=>{p.current=r},[r]);const m=200,x=160,C=ke.useMemo(()=>!t||t.length===0?[]:t.map(w=>{const N=gm(w.label,2.8),{phi:M,theta:E}=Mo(w.label),P=(E/(Math.PI*2)-.5)*m,j=(M/Math.PI-.5)*m,B=hc(w.emotion),R=ur(w.emotion),U=w.frequency,W=B==="stress"?U<3?0:U<5?.005:U<8?.01:.018:0,$=B==="resolved"?U<3?0:U<5?.004:U<8?.008:.014:0,D=B==="neutral"?U<3?0:Math.min(U*.003,.012):0;return{...w,spherePos:N,direction:N.clone().normalize(),planeX:P,planeZ:j,craterScale:W,flareScale:$,neutralScale:D,trend:B,color:new it(R.r,R.g,R.b),colorData:R}}),[t]);ke.useEffect(()=>{if(!i)return;const{phi:w,theta:N}=Mo(i),M=(N/(Math.PI*2)-.5)*m,E=(w/Math.PI-.5)*m;l.current.x=M,l.current.z=E+5,l.current.targetX=M,l.current.targetZ=E+5,l.current.targetYaw=Math.atan2(0,-1),l.current.yaw=l.current.targetYaw,c.current.targetPhi=w,c.current.targetTheta=N+Math.PI,c.current.targetRadius=5.5},[i]);const b=ke.useRef(!1);return ke.useEffect(()=>{if(b.current||!e||e.length===0)return;b.current=!0;const w=e[e.length-1];if(w&&w.keywords&&w.keywords.length>0){const N=w.keywords[0],{phi:M,theta:E}=Mo(N),P=(E/(Math.PI*2)-.5)*m,j=(M/Math.PI-.5)*m;l.current.x=P,l.current.z=j+4,l.current.targetX=P,l.current.targetZ=j+4,l.current.yaw=Math.atan2(P-l.current.x,j-l.current.z)||0,l.current.targetYaw=l.current.yaw,c.current.targetPhi=M,c.current.targetTheta=E+Math.PI,c.current.phi=M,c.current.theta=E+Math.PI}},[e]),ke.useEffect(()=>{if(!s.current)return;const w=s.current,N=w.clientWidth,M=w.clientHeight,E=new j1,P=new bn(60,N/M,.1,800),j=new lv({antialias:!0,alpha:!1});j.setSize(N,M),j.setPixelRatio(Math.min(window.devicePixelRatio,2)),j.setClearColor(394500,1),j.toneMapping=D0,j.toneMappingExposure=1.2,w.appendChild(j.domElement);const B=new Z1(14208192,.35);E.add(B);const R=new q1(13156016,3811866,.25);E.add(R);const U=new Mu(15786184,.2);U.position.set(4,10,3),E.add(U);const W=new Mu(13160672,.12);W.position.set(-5,6,-4),E.add(W);const $=new Mu(13682872,.1);$.position.set(0,-3,-5),E.add($);const D=new el(13935988,.3,30);D.position.set(0,6,0),E.add(D);const k=new ea(m,m,x,x);k.rotateX(-Math.PI/2);const z=new um({vertexColors:!0,roughness:.7,metalness:.05,flatShading:!0,transparent:!1,side:ci,emissive:2760728,emissiveIntensity:.6}),Z=new vn(k,z);E.add(Z);const Q=new ea(m,m,80,80);Q.rotateX(-Math.PI/2);const Y=new Uo({color:13935988,wireframe:!0,transparent:!0,opacity:.025}),K=new vn(Q,Y);K.position.y=.02,E.add(K);const ue=800,le=new Pn,me=new Float32Array(ue*3);for(let q=0;q<ue;q++)me[q*3]=(Math.random()-.5)*m,me[q*3+1]=Math.random()*5+.3,me[q*3+2]=(Math.random()-.5)*m;le.setAttribute("position",new zt(me,3));const Le=new uv({color:13935988,size:.025,transparent:!0,opacity:.5,blending:Ar,sizeAttenuation:!0}),ze=new yu(le,Le);E.add(ze);const Re=128,qe=new bs(2.8,Re,Re),H=new um({vertexColors:!0,roughness:.7,metalness:.05,flatShading:!0,transparent:!1,side:pi,emissive:2103312,emissiveIntensity:.5}),Tt=new vn(qe,H);E.add(Tt);const De=new bs(2.805,48,48),Ge=new Uo({color:13935988,wireframe:!0,transparent:!0,opacity:.012}),Me=new vn(De,Ge);E.add(Me);const pt=new bs(2.95,48,48),Be=new hi({vertexShader:`varying vec3 vNormal; varying vec3 vWorldPos;
        void main() { vNormal = normalize(normalMatrix * normal); vWorldPos = (modelMatrix * vec4(position,1.0)).xyz; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`varying vec3 vNormal; varying vec3 vWorldPos; uniform vec3 uCamPos;
        void main() { vec3 viewDir = normalize(uCamPos - vWorldPos); float rim = 1.0 - max(0.0, dot(vNormal, viewDir)); float i = pow(rim, 4.0); gl_FragColor = vec4(0.83, 0.65, 0.46, i * 0.18); }`,uniforms:{uCamPos:{value:new F}},side:pi,blending:Ar,transparent:!0,depthWrite:!1}),A=new vn(pt,Be);E.add(A);const S=Object.values(Io),G=8e3,ne=new Pn,te=new Float32Array(G*3),ie=new Float32Array(G*3),we=new Float32Array(G);for(let q=0;q<G;q++){let oe,J,ve;if(q<G*.4){const Se=60+Math.random()*140,Ve=Math.random()*Math.PI*2,We=(Math.random()-.5)*.15,_t=.4;oe=Se*Math.cos(Ve),J=Se*(We+Math.sin(Ve)*Math.sin(_t)*.3),ve=Se*Math.sin(Ve)}else if(q<G*.7){const Se=50+Math.random()*150,Ve=Math.random()*Math.PI*2,We=Math.acos(2*Math.random()-1);oe=Se*Math.sin(We)*Math.cos(Ve),J=Se*Math.cos(We),ve=Se*Math.sin(We)*Math.sin(Ve)}else if(q<G*.88){const Se=20+Math.random()*40,Ve=Math.random()*Math.PI*2,We=Math.acos(2*Math.random()-1);oe=Se*Math.sin(We)*Math.cos(Ve),J=Se*Math.cos(We),ve=Se*Math.sin(We)*Math.sin(Ve)}else{const Se=150+Math.random()*200,Ve=Math.random()*Math.PI*2,We=Math.acos(2*Math.random()-1);oe=Se*Math.sin(We)*Math.cos(Ve),J=Se*Math.cos(We),ve=Se*Math.sin(We)*Math.sin(Ve)}te[q*3]=oe,te[q*3+1]=J,te[q*3+2]=ve;const Oe=Math.random();let tt,vt,Pe;if(Oe<.4)tt=.95+Math.random()*.05,vt=.93+Math.random()*.07,Pe=.98;else if(Oe<.6)tt=.8+Math.random()*.1,vt=.85+Math.random()*.1,Pe=1;else if(Oe<.8)tt=1,vt=.92+Math.random()*.08,Pe=.75+Math.random()*.15;else if(Oe<.9)tt=1,vt=.7+Math.random()*.15,Pe=.4+Math.random()*.2;else{const Se=S[q%S.length];tt=.7+Se.r*.3,vt=.7+Se.g*.3,Pe=.7+Se.b*.3}ie[q*3]=tt,ie[q*3+1]=vt,ie[q*3+2]=Pe;const je=Math.sqrt(oe*oe+J*J+ve*ve);je<30?we[q]=.15+Math.random()*.3:je<80?we[q]=.08+Math.random()*.18:we[q]=.04+Math.random()*.1,Math.random()<.02&&(we[q]=.3+Math.random()*.25)}ne.setAttribute("position",new zt(te,3)),ne.setAttribute("color",new zt(ie,3)),ne.setAttribute("size",new zt(we,1));const ge=new hi({vertexShader:`
        attribute float size; attribute vec3 color; varying vec3 vColor;
        void main() { vColor = color; vec4 mvp = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * (250.0 / -mvp.z); gl_Position = projectionMatrix * mvp; }`,fragmentShader:`
        varying vec3 vColor;
        void main() { float d = length(gl_PointCoord - vec2(0.5)); if (d > 0.5) discard;
          float core = 1.0 - smoothstep(0.0, 0.15, d);
          float glow = 1.0 - smoothstep(0.0, 0.4, d);
          vec3 col = vColor * glow * 0.6 + vec3(1.0) * core * 0.8;
          gl_FragColor = vec4(col, glow * 0.85); }`,transparent:!0,blending:Ar,depthWrite:!1}),ye=new yu(ne,ge);E.add(ye);const Ue=new Zi,$e=["anxiety","peace","love","sadness","joy","hope","clarity","confidence"];$e.forEach((q,oe)=>{const J=Io[q]||Io.neutral,ve=new bs(15+Math.random()*20,8,8),Oe=new Uo({color:new it(J.r*.8,J.g*.8,J.b*.8),transparent:!0,opacity:.008+Math.random()*.008,blending:Ar,depthWrite:!1}),tt=new vn(ve,Oe),vt=oe/$e.length*Math.PI*2,Pe=60+Math.random()*80;tt.position.set(Math.cos(vt)*Pe,(Math.random()-.5)*30,Math.sin(vt)*Pe),tt.scale.set(1.5,.6+Math.random()*.4,1.5),Ue.add(tt)}),E.add(Ue);const ee=new Zi;for(let q=0;q<5;q++){const oe=new Pn,J=8,ve=new Float32Array(J*3),Oe=new Float32Array(J),tt=(Math.random()-.5)*120,vt=(Math.random()-.5)*60,Pe=40+Math.random()*80,je=(Math.random()-.5)*.8,Se=(Math.random()-.5)*.3;for(let _t=0;_t<J;_t++)ve[_t*3]=tt-je*_t*1.5,ve[_t*3+1]=vt-Se*_t*1.5,ve[_t*3+2]=Pe,Oe[_t]=1-_t/J;oe.setAttribute("position",new zt(ve,3)),oe.setAttribute("opacity",new zt(Oe,1));const Ve=new hi({vertexShader:`attribute float opacity; varying float vOpacity;
          void main() { vOpacity = opacity; gl_PointSize = mix(3.0, 1.0, 1.0 - opacity);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`varying float vOpacity;
          void main() { float d = length(gl_PointCoord - vec2(0.5));
            if (d > 0.5) discard;
            float a = (1.0 - d * 2.0) * vOpacity * 0.6;
            gl_FragColor = vec4(0.9, 0.85, 0.7, a); }`,transparent:!0,blending:Ar,depthWrite:!1}),We=new yu(oe,Ve);We.userData={speed:.02+Math.random()*.03,dx:je,dy:Se},ee.add(We)}E.add(ee);const at=new Zi,Ke=new Zi;E.add(at),E.add(Ke),o.current={scene:E,cam:P,ren:j,terrainMesh:Z,terrainGeo:k,terrainWireMesh:K,particles:ze,particleGeo:le,planet:Tt,sphereGeo:qe,wireMesh:Me,atmosMat:Be,atmosMesh:A,starField:ye,nebulaGroup:Ue,cometGroup:ee,pl:D,ambientLight:B,hemiLight:R,dl:U,dl2:W,dl3:$,surfaceMarkerGroup:at,planetMarkerGroup:Ke};const Xe=q=>{const oe=q.target.tagName;oe==="TEXTAREA"||oe==="INPUT"||(a.current[q.key.toLowerCase()]=!0,a.current[q.code]=!0)},Ce=q=>{a.current[q.key.toLowerCase()]=!1,a.current[q.code]=!1},xe=(q,oe)=>{p.current==="surface"?(l.current.targetYaw-=q*.004,l.current.targetPitch=Math.max(-.5,Math.min(.3,l.current.targetPitch-oe*.003))):(c.current.targetTheta-=q*.008,c.current.targetPhi=Math.max(.15,Math.min(Math.PI-.15,c.current.targetPhi-oe*.008)))},Ye=q=>{q.target.tagName==="TEXTAREA"||q.target.tagName==="BUTTON"||q.target.tagName==="INPUT"||(q.preventDefault(),f.current={active:!0,lastX:q.clientX,lastY:q.clientY,moved:!1})},ct=q=>{if(!f.current.active)return;q.preventDefault();const oe=q.clientX-f.current.lastX,J=q.clientY-f.current.lastY;(Math.abs(oe)>2||Math.abs(J)>2)&&(f.current.moved=!0),xe(oe,J),f.current.lastX=q.clientX,f.current.lastY=q.clientY},St=q=>{if(!f.current.moved&&f.current.active){const oe=w.getBoundingClientRect();_.current.x=(q.clientX-oe.left)/oe.width*2-1,_.current.y=-((q.clientY-oe.top)/oe.height)*2+1,y.current.setFromCamera(_.current,P);const J=y.current.intersectObjects(g.current,!1);J.length>0&&J[0].object.userData.clusterLabel&&(n(J[0].object.userData.clusterLabel),Ft.play("reveal"))}f.current.active=!1},Ze=q=>{q.target.tagName==="TEXTAREA"||q.target.closest("[data-sidebar]")||q.target.closest("[data-panel]")||(q.preventDefault(),p.current==="planet"&&(c.current.targetRadius=Math.max(4,Math.min(14,c.current.targetRadius+q.deltaY*.005))))};let se=null;const L=q=>{q.target.tagName==="TEXTAREA"||q.target.tagName==="BUTTON"||q.target.tagName==="INPUT"||(q.touches.length===1&&(f.current={active:!0,lastX:q.touches[0].clientX,lastY:q.touches[0].clientY,moved:!1}),q.touches.length===2&&(se=[{x:q.touches[0].clientX,y:q.touches[0].clientY},{x:q.touches[1].clientX,y:q.touches[1].clientY}]))},he=q=>{if(q.preventDefault(),q.touches.length===1&&f.current.active){const oe=q.touches[0].clientX-f.current.lastX,J=q.touches[0].clientY-f.current.lastY;(Math.abs(oe)>2||Math.abs(J)>2)&&(f.current.moved=!0),xe(oe,J),f.current.lastX=q.touches[0].clientX,f.current.lastY=q.touches[0].clientY}if(q.touches.length===2&&se){if(p.current==="planet"){const tt=Math.hypot(q.touches[0].clientX-q.touches[1].clientX,q.touches[0].clientY-q.touches[1].clientY),vt=Math.hypot(se[0].x-se[1].x,se[0].y-se[1].y);c.current.targetRadius=Math.max(4,Math.min(14,c.current.targetRadius-(tt-vt)*.015))}const oe=(q.touches[0].clientX+q.touches[1].clientX)/2,J=(q.touches[0].clientY+q.touches[1].clientY)/2,ve=(se[0].x+se[1].x)/2,Oe=(se[0].y+se[1].y)/2;xe(oe-ve,J-Oe),se=[{x:q.touches[0].clientX,y:q.touches[0].clientY},{x:q.touches[1].clientX,y:q.touches[1].clientY}]}},pe=q=>{if(!f.current.moved&&f.current.active&&q.changedTouches.length===1){const oe=w.getBoundingClientRect(),J=q.changedTouches[0];_.current.x=(J.clientX-oe.left)/oe.width*2-1,_.current.y=-((J.clientY-oe.top)/oe.height)*2+1,y.current.setFromCamera(_.current,P);const ve=y.current.intersectObjects(g.current,!1);ve.length>0&&ve[0].object.userData.clusterLabel&&(n(ve[0].object.userData.clusterLabel),Ft.play("reveal"))}f.current.active=!1,se=null};window.addEventListener("keydown",Xe),window.addEventListener("keyup",Ce),w.addEventListener("mousedown",Ye),window.addEventListener("mousemove",ct),window.addEventListener("mouseup",St),w.addEventListener("wheel",Ze,{passive:!1}),w.addEventListener("touchstart",L,{passive:!1}),w.addEventListener("touchmove",he,{passive:!1}),w.addEventListener("touchend",pe);const He=()=>{P.aspect=w.clientWidth/w.clientHeight,P.updateProjectionMatrix(),j.setSize(w.clientWidth,w.clientHeight)};window.addEventListener("resize",He);const Ie=()=>{h.current+=.004;const q=h.current,oe=a.current,J=l.current,ve=c.current,Oe=p.current;if(Z.visible=Oe==="surface",K.visible=Oe==="surface",ze.visible=Oe==="surface",Tt.visible=Oe==="planet",Me.visible=Oe==="planet",A.visible=Oe==="planet",at.visible=Oe==="surface",Ke.visible=Oe==="planet",Oe==="surface"){const je=Math.cos(J.yaw),Se=Math.sin(J.yaw);(oe.w||oe.arrowup)&&(J.targetX+=Se*.35,J.targetZ+=je*.35),(oe.s||oe.arrowdown)&&(J.targetX-=Se*.35,J.targetZ-=je*.35),(oe.a||oe.arrowleft)&&(J.targetX+=je*.35,J.targetZ-=Se*.35),(oe.d||oe.arrowright)&&(J.targetX-=je*.35,J.targetZ+=Se*.35),oe.shift&&((oe.w||oe.arrowup)&&(J.targetX+=Se*.35*(2.5-1),J.targetZ+=je*.35*(2.5-1)),(oe.s||oe.arrowdown)&&(J.targetX-=Se*.35*(2.5-1),J.targetZ-=je*.35*(2.5-1)));const Ve=m*.5;J.targetX>Ve&&(J.targetX-=m,J.x-=m),J.targetX<-Ve&&(J.targetX+=m,J.x+=m),J.targetZ>Ve&&(J.targetZ-=m,J.z-=m),J.targetZ<-Ve&&(J.targetZ+=m,J.z+=m),J.x+=(J.targetX-J.x)*.14,J.z+=(J.targetZ-J.z)*.14,J.yaw+=(J.targetYaw-J.yaw)*.12,J.pitch+=(J.targetPitch-J.pitch)*.12;const We=4+Math.sin(q*.25)*.15;Z.position.x=J.x,Z.position.z=J.z,K.position.x=J.x,K.position.z=J.z,P.position.set(J.x,We,J.z);const _t=12,hn=J.x+Math.sin(J.yaw)*_t,Js=We*.15+J.pitch*8,Xn=J.z+Math.cos(J.yaw)*_t;P.up.set(0,1,0),P.lookAt(hn,Js,Xn),D.position.set(J.x,4,J.z);const pn=k.attributes.position,T=new Float32Array(pn.count*3);for(let O=0;O<pn.count;O++){const X=pn.getX(O),V=pn.getZ(O),ce=X+J.x,Te=V+J.z;let be=mm(ce*.08+q*.04,0,Te*.08+q*.03,5)*1.2;be+=Math.sin(ce*.06+q*.1)*Math.cos(Te*.06+q*.08)*.4;const Ne=(be+1)/2.2;let Fe,Ee,Ae;Ne>.6?(Fe=.78,Ee=.42,Ae=.32):Ne<.3?(Fe=.38,Ee=.52,Ae=.4):(Fe=.58+Ne*.12,Ee=.44+Ne*.08,Ae=.32);const st=Math.hypot(X,V);st<4&&(be+=Math.sin(st*2.5-q*4)*.05*Math.max(0,1-st/4));for(const ut of C){let mt=ce-ut.planeX,It=Te-ut.planeZ;mt>Ve&&(mt-=m),mt<-Ve&&(mt+=m),It>Ve&&(It-=m),It<-Ve&&(It+=m);const ft=Math.sqrt(mt*mt+It*It),Je=8+Math.min(ut.frequency*1.5,10),Ii=Math.max(0,1-ft/Je);if(Ii>0){const ot=Ii*Ii*(3-2*Ii),yt=ut.frequency;if(ut.trend==="stress"){const Ni=yt<3?0:yt<5?.3:yt<8?.6:1;be-=ot*Ni;const Jt=(yt<3?.2:yt<5?.35:.5)+Math.min(yt*.04,.3);Fe+=ot*ut.colorData.r*Jt,Ee+=ot*ut.colorData.g*Jt*.5,Ae+=ot*ut.colorData.b*Jt*.5}else if(ut.trend==="resolved"){const Ni=yt<3?0:yt<5?.2:yt<8?.5:.8,Jt=.6+yt*.15,Qs=yt<5?.1:yt<8?.2:.3,Wt=1+Math.sin(q*Jt+ft*.5)*Qs;be+=ot*Ni*Wt;const jn=(yt<3?.25:yt<5?.4:.55)+Math.min(yt*.04,.3),vr=.8+Math.sin(q*Jt*.7)*.2;Fe+=ot*ut.colorData.r*jn*vr,Ee+=ot*ut.colorData.g*jn*vr,Ae+=ot*ut.colorData.b*jn*.8*vr}else{const Ni=yt<3?0:Math.min(yt*.08,.4);be+=ot*Ni;const Jt=yt<3?.15:.25;Fe+=ot*ut.colorData.r*Jt,Ee+=ot*ut.colorData.g*Jt,Ae+=ot*ut.colorData.b*Jt}}}pn.setY(O,be),T[O*3]=Math.max(0,Math.min(1,Fe)),T[O*3+1]=Math.max(0,Math.min(1,Ee)),T[O*3+2]=Math.max(0,Math.min(1,Ae))}k.setAttribute("color",new zt(T,3)),pn.needsUpdate=!0,k.computeVertexNormals();const I=le.attributes.position;for(let O=0;O<I.count;O++){let X=I.getY(O);X+=Math.sin(q*1.5+O*.3)*.003,I.setX(O,I.getX(O)+Math.sin(q*.5+O*.1)*.002),X>6&&(X=.3),I.setY(O,X)}I.needsUpdate=!0,B.intensity=.35,B.color.setHex(14208192),R.intensity=.25,U.intensity=.2,W.intensity=.12,$.intensity=.1,D.intensity=.3}else{(oe.w||oe.arrowup)&&(ve.targetPhi=Math.max(.15,ve.targetPhi-.025)),(oe.s||oe.arrowdown)&&(ve.targetPhi=Math.min(Math.PI-.15,ve.targetPhi+.025)),(oe.a||oe.arrowleft)&&(ve.targetTheta+=.025),(oe.d||oe.arrowright)&&(ve.targetTheta-=.025),(oe.q||oe["-"])&&(ve.targetRadius=Math.min(14,ve.targetRadius+.06)),(oe.e||oe["="])&&(ve.targetRadius=Math.max(4,ve.targetRadius-.06)),oe.r&&(ve.targetRadius=Math.max(4,ve.targetRadius-.1)),oe.f&&(ve.targetRadius=Math.min(14,ve.targetRadius+.1)),ve.phi+=(ve.targetPhi-ve.phi)*.15,ve.theta+=(ve.targetTheta-ve.theta)*.15,ve.radius+=(ve.targetRadius-ve.radius)*.12,P.position.set(ve.radius*Math.sin(ve.phi)*Math.cos(ve.theta),ve.radius*Math.cos(ve.phi),ve.radius*Math.sin(ve.phi)*Math.sin(ve.theta)),P.up.set(0,1,0),P.lookAt(0,0,0);const je=qe.attributes.position,Se=new Float32Array(je.count*3),Ve=2.8;for(let We=0;We<je.count;We++){const _t=je.getX(We),hn=je.getY(We),Js=je.getZ(We),Xn=new F(_t,hn,Js).normalize();let pn=mm(Xn.x*2.2+q*.03,Xn.y*2.2,Xn.z*2.2+q*.02,4)*.02,T=.35,I=.28,O=.22;const X=(pn+.06)/.12;T+=X*.06,I+=X*.05,O+=X*.03;for(const ce of C){const Te=Xn.dot(ce.direction),be=Math.acos(Math.min(1,Math.max(-1,Te))),Ne=.25+Math.min(ce.frequency*.025,.15),Fe=Math.max(0,1-be/Ne);if(Fe>0){const Ee=Fe*Fe*(3-2*Fe),Ae=ce.frequency;if(ce.trend==="stress"){pn-=Ee*ce.craterScale;const st=(Ae<3?.2:Ae<5?.35:.5)+Math.min(Ae*.04,.3);T+=Ee*ce.colorData.r*st,I+=Ee*ce.colorData.g*st*.5,O+=Ee*ce.colorData.b*st*.5}else if(ce.trend==="resolved"){const st=.6+Ae*.15,ut=Ae<5?.15:Ae<8?.25:.35,mt=1+Math.sin(q*st+be*8)*ut;pn+=Ee*ce.flareScale*mt;const It=(Ae<3?.25:Ae<5?.4:.55)+Math.min(Ae*.04,.3),ft=.8+Math.sin(q*st*.7)*.2;T+=Ee*ce.colorData.r*It*ft,I+=Ee*ce.colorData.g*It*ft,O+=Ee*ce.colorData.b*It*.8*ft}else{pn+=Ee*ce.neutralScale;const st=Ae<3?.15:.25;T+=Ee*ce.colorData.r*st,I+=Ee*ce.colorData.g*st,O+=Ee*ce.colorData.b*st}}}const V=Ve+pn;je.setXYZ(We,Xn.x*V,Xn.y*V,Xn.z*V),Se[We*3]=Math.max(0,Math.min(1,T)),Se[We*3+1]=Math.max(0,Math.min(1,I)),Se[We*3+2]=Math.max(0,Math.min(1,O))}qe.setAttribute("color",new zt(Se,3)),je.needsUpdate=!0,qe.computeVertexNormals(),Tt.rotation.y+=2e-4,Me.rotation.y=Tt.rotation.y,Be.uniforms.uCamPos.value.copy(P.position),B.intensity=.3,B.color.setHex(13156532),R.intensity=.2,U.intensity=.15,W.intensity=.1,$.intensity=.08,D.intensity=0}const tt=m*.5,vt=Date.now();g.current.forEach(Pe=>{Pe.quaternion.copy(P.quaternion);const je=Pe.userData.baseScale||.05;if(Pe.userData.isThoughtStar){if(Pe.userData.isAggregated&&Oe==="surface"){const Ve=.4+Pe.userData.seed%1*.3,We=q*Ve+Pe.userData.offsetAngle,_t=Pe.userData.spreadDist*.6;Pe.userData.worldX=Pe.userData.clusterX+Math.cos(We)*_t,Pe.userData.worldZ=Pe.userData.clusterZ+Math.sin(We)*_t,Pe.position.y=.4+Math.sin(q*1.2+Pe.userData.seed)*.12}const Se=je*(1+Math.sin(q*4+Pe.userData.seed*3.7)*.3);Pe.scale.setScalar(Se)}else if(Pe.userData.isDiamond){const Se=vt-(Pe.userData.birthTime||0),Ve=2e3;if(Se<Ve){const We=Se/Ve,_t=We<.5?4*We*We*We:1-Math.pow(-2*We+2,3)/2;Pe.scale.setScalar(je*_t)}else{const We=je*(1+Math.sin(q*2.5+Pe.userData.seed)*.15);Pe.scale.setScalar(We)}}else{const Se=je*(1+Math.sin(q*2.5+Pe.userData.seed)*.15);Pe.scale.setScalar(Se)}if(Oe==="surface"&&Pe.userData.worldX!==void 0){let Se=Pe.userData.worldX-J.x,Ve=Pe.userData.worldZ-J.z;Se>tt&&(Se-=m),Se<-tt&&(Se+=m),Ve>tt&&(Ve-=m),Ve<-tt&&(Ve+=m),Pe.position.x=J.x+Se,Pe.position.z=J.z+Ve}}),Oe==="surface"&&at.children.forEach(Pe=>{if(Pe.isPointLight&&Pe.userData.worldX!==void 0){let je=Pe.userData.worldX-J.x,Se=Pe.userData.worldZ-J.z;je>tt&&(je-=m),je<-tt&&(je+=m),Se>tt&&(Se-=m),Se<-tt&&(Se+=m),Pe.position.x=J.x+je,Pe.position.z=J.z+Se}}),ye.rotation.y+=8e-5,Ue.rotation.y+=5e-5,ee.children.forEach(Pe=>{const je=Pe.geometry.attributes.position,Se=Pe.userData;for(let Ve=0;Ve<je.count;Ve++)je.setX(Ve,je.getX(Ve)+Se.speed*Se.dx),je.setY(Ve,je.getY(Ve)+Se.speed*Se.dy);if(je.needsUpdate=!0,Math.abs(je.getX(0))>200){const Ve=(Math.random()-.5)*120,We=(Math.random()-.5)*60,_t=40+Math.random()*80;for(let hn=0;hn<je.count;hn++)je.setX(hn,Ve-Se.dx*hn*1.5),je.setY(hn,We-Se.dy*hn*1.5),je.setZ(hn,_t);je.needsUpdate=!0}}),j.render(E,P),d.current=requestAnimationFrame(Ie)};return Ie(),()=>{cancelAnimationFrame(d.current),window.removeEventListener("keydown",Xe),window.removeEventListener("keyup",Ce),w.removeEventListener("mousedown",Ye),window.removeEventListener("mousemove",ct),window.removeEventListener("mouseup",St),w.removeEventListener("wheel",Ze),w.removeEventListener("touchstart",L),w.removeEventListener("touchmove",he),w.removeEventListener("touchend",pe),window.removeEventListener("resize",He),j.dispose(),w.contains(j.domElement)&&w.removeChild(j.domElement)}},[C,n]),ke.useEffect(()=>{const{surfaceMarkerGroup:w,planetMarkerGroup:N}=o.current;if(!w||!N)return;for(;w.children.length;)w.remove(w.children[0]);for(;N.children.length;)N.remove(N.children[0]);g.current=[],v.current=[];for(const P of u.current.keys())C.find(j=>j.label===P)||u.current.delete(P);C.forEach((P,j)=>{if(P.frequency<3)return;u.current.has(P.label)||u.current.set(P.label,Date.now());const B=document.createElement("canvas");B.width=48,B.height=48;const R=B.getContext("2d"),U=P.colorData.hex,W=R.createRadialGradient(24,24,4,24,24,22);W.addColorStop(0,U+"aa"),W.addColorStop(.4,U+"44"),W.addColorStop(1,U+"00"),R.fillStyle=W,R.fillRect(0,0,48,48),R.shadowColor=U,R.shadowBlur=10,R.beginPath(),R.moveTo(24,6),R.lineTo(38,24),R.lineTo(24,42),R.lineTo(10,24),R.closePath(),R.fillStyle=U,R.globalAlpha=.95,R.fill(),R.globalAlpha=1,R.strokeStyle="rgba(255,255,255,0.6)",R.lineWidth=1,R.stroke(),R.beginPath(),R.arc(24,24,3,0,Math.PI*2),R.fillStyle="#fff",R.globalAlpha=.9,R.fill(),P.frequency>=6&&(R.beginPath(),R.arc(24,24,8,0,Math.PI*2),R.strokeStyle=U,R.globalAlpha=.4,R.lineWidth=1.5,R.stroke());const $=new cm(B),D=u.current.get(P.label),k=new So({map:$,transparent:!0,depthWrite:!1,sizeAttenuation:!0}),z=new Ka(k);z.position.set(P.planeX,.8+(P.flareScale||0)*2,P.planeZ);const Z=.35+Math.min(P.frequency*.04,.3);z.scale.setScalar(Z),z.userData={clusterLabel:P.label,seed:j*1.7,baseScale:Z,worldX:P.planeX,worldZ:P.planeZ,isDiamond:!0,birthTime:D},w.add(z),g.current.push(z);const Q=new So({map:$.clone(),transparent:!0,depthWrite:!1,sizeAttenuation:!0}),Y=new Ka(Q),K=P.direction.clone().multiplyScalar(2.8+.06+(P.flareScale||0));Y.position.copy(K);const ue=.04+Math.min(P.frequency*.005,.04);if(Y.scale.setScalar(ue),Y.userData={clusterLabel:P.label,seed:j*1.7,baseScale:ue,isDiamond:!0,birthTime:D},N.add(Y),g.current.push(Y),P.frequency>=2){const le=new it(P.colorData.r,P.colorData.g,P.colorData.b),me=new el(le,Math.min(P.frequency*.08,.6),2.5);me.position.copy(P.direction.clone().multiplyScalar(2.8+.15)),N.add(me);const Le=new el(le,Math.min(P.frequency*.1,.8),12);Le.position.set(P.planeX,1.5+(P.flareScale||0)*2,P.planeZ),Le.userData={worldX:P.planeX,worldZ:P.planeZ},w.add(Le)}});const M=2.399963,E=m;e.forEach((P,j)=>{const B=fr(P.keywords&&P.keywords[0]||"thought"),{phi:R,theta:U}=Mo(B),W=C.find(S=>S.label===B),$=W&&W.frequency>=3,D=j*M,k=$?1.5+j%5*.5:2.5+j%8*.8,z=(U/(Math.PI*2)-.5)*E,Z=(R/Math.PI-.5)*E,Q=z+Math.cos(D)*k,Y=Z+Math.sin(D)*k,K=ur(P.emotion),ue=document.createElement("canvas");ue.width=16,ue.height=16;const le=ue.getContext("2d"),me=le.createRadialGradient(8,8,0,8,8,7);me.addColorStop(0,"#ffffffee"),me.addColorStop(.25,K.hex+"cc"),me.addColorStop(.6,K.hex+"55"),me.addColorStop(1,K.hex+"00"),le.fillStyle=me,le.beginPath(),le.arc(8,8,7,0,Math.PI*2),le.fill(),le.strokeStyle="#ffffff44",le.lineWidth=.5,le.beginPath(),le.moveTo(8,2),le.lineTo(8,14),le.stroke(),le.beginPath(),le.moveTo(2,8),le.lineTo(14,8),le.stroke();const Le=new cm(ue),ze=new So({map:Le,transparent:!0,depthWrite:!1,sizeAttenuation:!0,opacity:$?.75:.9}),Re=new Ka(ze);Re.position.set(Q,.3+Math.random()*.3,Y);const qe=$?.12:.18;Re.scale.setScalar(qe),Re.userData={clusterLabel:B,seed:j*2.3+.5,baseScale:qe,worldX:Q,worldZ:Y,isThoughtStar:!0,isAggregated:$,clusterX:z,clusterZ:Z,spreadDist:k,offsetAngle:D,thoughtId:P.id},w.add(Re),g.current.push(Re),v.current.push(Re);const H=gm(B,1).normalize(),Tt=new F(-H.z,0,H.x).normalize(),De=new F().crossVectors(H,Tt).normalize(),Ge=$?.02+j%5*.008:.04+j%8*.01,Me=H.clone().addScaledVector(Tt,Math.cos(D)*Ge).addScaledVector(De,Math.sin(D)*Ge).normalize(),pt=new So({map:Le.clone(),transparent:!0,depthWrite:!1,sizeAttenuation:!0,opacity:$?.7:.85}),Be=new Ka(pt);Be.position.copy(Me.clone().multiplyScalar(2.82));const A=$?.012:.018;Be.scale.setScalar(A),Be.userData={clusterLabel:B,seed:j*2.3+.5,baseScale:A,isThoughtStar:!0,isAggregated:$,thoughtId:P.id,sphereDir:Me.clone(),spreadDist:Ge},N.add(Be),g.current.push(Be),v.current.push(Be)}),C.forEach(P=>{if(P.frequency>=2&&P.frequency<3){const j=new it(P.colorData.r,P.colorData.g,P.colorData.b),B=new el(j,Math.min(P.frequency*.1,.4),8);B.position.set(P.planeX,1,P.planeZ),B.userData={worldX:P.planeX,worldZ:P.planeZ},w.add(B)}})},[C,e]),ae.jsx("div",{ref:s,style:{width:"100%",height:"100%",position:"absolute",top:0,left:0,cursor:"grab",touchAction:"none"}})}function cT({cluster:t,entries:e,onClose:n}){if(!t)return null;const i=ur(t.emotion),r=e.filter(a=>a.keywords.some(l=>fr(l)===t.label)),s=hc(t.emotion),o=s==="stress"?"crater":s==="resolved"?"flare":"ridge";return ae.jsxs(ae.Fragment,{children:[ae.jsx("div",{onClick:n,style:{position:"absolute",inset:0,zIndex:39,cursor:"pointer"}}),ae.jsxs("div",{onClick:a=>a.stopPropagation(),style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",background:`${de.bg}f5`,backdropFilter:"blur(24px)",border:`1px solid ${i.hex}44`,borderRadius:16,padding:"24px 28px",maxWidth:380,width:"90%",zIndex:40,maxHeight:"60vh",overflowY:"auto",boxShadow:`0 20px 60px rgba(0,0,0,0.6), 0 0 40px ${i.hex}15`,animation:"popupIn 0.35s cubic-bezier(0.22, 1, 0.36, 1) both"},children:[ae.jsx("button",{onClick:n,style:{position:"absolute",top:12,right:14,background:"none",border:"none",color:de.textMuted,cursor:"pointer",fontSize:18,padding:4},children:"×"}),ae.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:16},children:[ae.jsx("div",{style:{width:12,height:12,borderRadius:2,background:i.hex,boxShadow:`0 0 12px ${i.hex}66`,transform:"rotate(45deg)"}}),ae.jsxs("div",{children:[ae.jsx("div",{style:{fontFamily:"'Fraunces', Georgia, serif",fontSize:18,color:de.textPrimary},children:t.label}),ae.jsxs("div",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:9,color:i.hex,letterSpacing:"0.1em",marginTop:2},children:[i.label.toUpperCase()," · ",o.toUpperCase()," · ",t.frequency,"×"]})]})]}),r.length===0&&ae.jsx("div",{style:{fontFamily:"'DM Sans'",fontSize:13,color:de.textMuted,fontStyle:"italic"},children:"No entries found."}),r.map(a=>ae.jsxs("div",{style:{padding:"10px 0",borderBottom:`1px solid ${de.surfaceLight}18`},children:[ae.jsx("div",{style:{fontFamily:"'DM Sans'",fontSize:13,color:de.textSecondary,lineHeight:1.6},children:a.rawText}),ae.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginTop:4},children:[ae.jsx("div",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:9,color:de.textMuted},children:a.timestamp}),ae.jsx("div",{style:{width:4,height:4,borderRadius:"50%",background:ur(a.emotion).hex}}),ae.jsx("div",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:9,color:ur(a.emotion).hex},children:a.emotion})]})]},a.id))]})]})}function uT({clusters:t,entries:e,isOpen:n,onToggle:i,onClusterClick:r}){const[s,o]=ke.useState({}),a=ke.useMemo(()=>{const f={};return t.forEach(h=>{const d=[h.label,...h.rawKeywords||[]],g=oT(d),y=Object.keys(g)[0]||"other";f[y]||(f[y]=[]),f[y].find(_=>_.label===h.label)||f[y].push(h)}),f},[t]),l=f=>{o(h=>({...h,[f]:!h[f]})),Ft.play("hover")},c={"work & career":"◆",finances:"◇","health & body":"○",relationships:"◈","growth & purpose":"△",creativity:"✦",emotions:"◎",identity:"◉",environment:"▣",technology:"⬡","time & life":"◷",other:"·"};return ae.jsxs(ae.Fragment,{children:[ae.jsx("button",{onClick:i,onMouseEnter:()=>Ft.play("hover"),style:{position:"absolute",top:18,left:18,width:40,height:40,borderRadius:10,background:`${de.surface}cc`,border:`1px solid ${de.surfaceLight}`,color:de.amber,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,zIndex:30,backdropFilter:"blur(8px)"},children:n?"×":"≡"}),ae.jsxs("div",{"data-sidebar":"true",style:{position:"absolute",top:0,left:0,width:300,height:"100%",background:`${de.bg}f8`,backdropFilter:"blur(24px)",borderRight:`1px solid ${de.surfaceLight}`,transform:n?"translateX(0)":"translateX(-100%)",transition:"transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)",zIndex:25,padding:"72px 20px 20px",overflowY:"auto"},children:[ae.jsx("div",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:9,color:de.textMuted,letterSpacing:"0.2em",marginBottom:6},children:"THOUGHT TERRAIN"}),ae.jsxs("div",{style:{fontFamily:"'DM Sans'",fontSize:11,color:de.textMuted,marginBottom:20},children:[e.length," mapped · ",t.length," patterns"]}),Object.keys(a).length===0&&ae.jsx("div",{style:{fontFamily:"'DM Sans'",fontSize:13,color:de.textMuted,lineHeight:1.7,fontStyle:"italic"},children:"Your planet is smooth. Start dumping thoughts."}),Object.entries(a).map(([f,h])=>{const d=s[f],g=h.reduce((p,u)=>u.frequency>((p==null?void 0:p.frequency)||0)?u:p,null),y=g?ur(g.emotion).hex:de.amber,_=h.reduce((p,u)=>p+u.frequency,0);return ae.jsxs("div",{style:{marginBottom:2},children:[ae.jsxs("button",{onClick:()=>l(f),style:{width:"100%",background:"none",border:"none",cursor:"pointer",padding:"10px 0",display:"flex",alignItems:"center",gap:8,borderBottom:`1px solid ${de.surfaceLight}12`},children:[ae.jsx("span",{style:{color:y,fontSize:12,width:16,textAlign:"center"},children:c[f]||"·"}),ae.jsx("span",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:10,letterSpacing:"0.1em",color:de.textPrimary,textTransform:"uppercase",flex:1,textAlign:"left"},children:f}),ae.jsxs("span",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:9,color:de.textMuted},children:[_,"×"]}),ae.jsx("span",{style:{color:de.textMuted,fontSize:10,transform:d?"rotate(90deg)":"rotate(0deg)",transition:"transform 0.3s ease"},children:"▸"})]}),ae.jsx("div",{style:{maxHeight:d?400:0,overflow:"hidden",transition:"max-height 0.4s cubic-bezier(0.22, 1, 0.36, 1)"},children:h.map((p,u)=>{const v=ur(p.emotion),m=hc(p.emotion);return ae.jsxs("div",{onClick:()=>{r&&(r(p.label),Ft.play("reveal"))},onMouseEnter:()=>Ft.play("hover"),style:{padding:"8px 0 8px 24px",cursor:"pointer",borderRadius:6,transition:"background 0.2s ease"},onMouseOver:x=>x.currentTarget.style.background=`${de.surfaceLight}22`,onMouseOut:x=>x.currentTarget.style.background="transparent",children:[ae.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:2},children:[ae.jsx("div",{style:{width:6,height:6,borderRadius:"50%",background:v.hex,boxShadow:`0 0 6px ${v.hex}44`}}),ae.jsx("span",{style:{fontFamily:"'Fraunces', Georgia, serif",fontSize:13,color:de.textPrimary},children:p.label}),ae.jsxs("span",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:8,color:v.hex,marginLeft:"auto"},children:[p.frequency,"× · ",m==="stress"?"crater":m==="resolved"?"flare":"ridge"]})]}),ae.jsx("div",{style:{marginTop:3,marginLeft:12,height:2,background:de.surfaceLight,borderRadius:1,overflow:"hidden"},children:ae.jsx("div",{style:{height:"100%",width:`${Math.min(p.frequency*16,100)}%`,background:v.hex,borderRadius:1,transition:"width 1s ease"}})})]},u)})})]},f)})]})]})}function fT({isOpen:t,onToggle:e,viewMode:n}){const s=n==="surface"?[{key:"W / ↑",action:"Walk forward"},{key:"S / ↓",action:"Walk backward"},{key:"A / ←",action:"Strafe left"},{key:"D / →",action:"Strafe right"},{key:"Shift + W/S",action:"Sprint"},{key:"Drag",action:"Look around"},{key:"Sidebar item",action:"Jump to thought"},{key:"Click marker",action:"View thoughts"}]:[{key:"W / ↑",action:"Orbit up"},{key:"S / ↓",action:"Orbit down"},{key:"A / ←",action:"Orbit left"},{key:"D / →",action:"Orbit right"},{key:"E / +",action:"Zoom in"},{key:"Q / -",action:"Zoom out"},{key:"R",action:"Quick zoom in"},{key:"F",action:"Quick zoom out"},{key:"Scroll",action:"Zoom in/out"},{key:"Drag",action:"Pan orbit"},{key:"Click marker",action:"View thoughts"},{key:"Pinch",action:"Zoom (mobile)"},{key:"Tap marker",action:"View thoughts (mobile)"}];return ae.jsxs(ae.Fragment,{children:[ae.jsx("button",{onClick:e,onMouseEnter:()=>Ft.play("hover"),style:{position:"absolute",bottom:18,right:18,width:34,height:34,borderRadius:8,background:`${de.surface}cc`,border:`1px solid ${de.surfaceLight}`,color:de.textMuted,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,zIndex:30,backdropFilter:"blur(8px)",fontFamily:"'JetBrains Mono', monospace"},children:"?"}),ae.jsxs("div",{"data-panel":"true",style:{position:"absolute",bottom:60,right:18,width:220,background:`${de.bg}f5`,backdropFilter:"blur(20px)",border:`1px solid ${de.surfaceLight}`,borderRadius:12,padding:"16px 18px",zIndex:30,opacity:t?1:0,transform:t?"translateY(0)":"translateY(10px)",pointerEvents:t?"all":"none",transition:"all 0.3s cubic-bezier(0.22, 1, 0.36, 1)"},children:[ae.jsx("div",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:9,color:de.textMuted,letterSpacing:"0.2em",marginBottom:12},children:n==="surface"?"SURFACE CONTROLS":"PLANET CONTROLS"}),s.map((o,a)=>ae.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"4px 0"},children:[ae.jsx("span",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:10,color:de.amber,minWidth:90},children:o.key}),ae.jsx("span",{style:{fontFamily:"'DM Sans'",fontSize:11,color:de.textSecondary},children:o.action})]},a))]})]})}function dT(){const[t,e]=ke.useState("intro"),[n,i]=ke.useState([]),[r,s]=ke.useState([]),[o,a]=ke.useState(""),[l,c]=ke.useState(!1),[f,h]=ke.useState(!1),[d,g]=ke.useState(!1),[y,_]=ke.useState(!1),[p,u]=ke.useState(null),[v,m]=ke.useState(null),[x,C]=ke.useState("surface"),[b,w]=ke.useState(null),N=[{id:1,timestamp:"Jan 5",rawText:"can't stop thinking about whether I'm making the right career move",keywords:["career","move"],emotion:"anxiety",tone:"stress"},{id:2,timestamp:"Jan 12",rawText:"career anxiety back, comparing myself to everyone online",keywords:["career","anxiety","comparing"],emotion:"anxiety",tone:"stress"},{id:3,timestamp:"Jan 28",rawText:"spiraling about career again, am I behind everyone my age",keywords:["career","behind","age"],emotion:"anxiety",tone:"stress"},{id:4,timestamp:"Feb 3",rawText:"another career panic at 3am, what if I'm wasting my twenties",keywords:["career","panic","wasting"],emotion:"fear",tone:"stress"},{id:5,timestamp:"Feb 14",rawText:"saw someone my age succeed and now career dread is back",keywords:["career","dread","succeed"],emotion:"anxiety",tone:"stress"},{id:6,timestamp:"Feb 22",rawText:"career stress making it hard to focus on anything else",keywords:["career","stress","focus"],emotion:"anxiety",tone:"stress"},{id:7,timestamp:"Mar 1",rawText:"questioning my entire career path again, is this right for me",keywords:["career","path","questioning"],emotion:"anxiety",tone:"stress"},{id:8,timestamp:"Mar 8",rawText:"career imposter syndrome hitting different today",keywords:["career","imposter"],emotion:"fear",tone:"stress"},{id:9,timestamp:"Jan 8",rawText:"money feels tight this month, watching every dollar",keywords:["money","tight"],emotion:"anxiety",tone:"stress"},{id:10,timestamp:"Jan 20",rawText:"money stress again, should I take the safe route",keywords:["money","stress","safe"],emotion:"anxiety",tone:"stress"},{id:11,timestamp:"Feb 5",rawText:"rent is due and money is low, feeling the squeeze",keywords:["money","rent","squeeze"],emotion:"anxiety",tone:"stress"},{id:12,timestamp:"Feb 18",rawText:"money anxiety woke me up at 4am doing math in my head",keywords:["money","anxiety","math"],emotion:"anxiety",tone:"stress"},{id:13,timestamp:"Mar 2",rawText:"another month of money stress, when does this end",keywords:["money","stress"],emotion:"exhaustion",tone:"stress"},{id:14,timestamp:"Mar 7",rawText:"money worries coloring everything, hard to enjoy things",keywords:["money","worries","enjoy"],emotion:"sadness",tone:"stress"},{id:15,timestamp:"Jan 15",rawText:"built something cool today, forgot about everything for hours",keywords:["built","cool"],emotion:"excitement",tone:"resolved"},{id:16,timestamp:"Jan 25",rawText:"in the zone building this new project, time disappeared",keywords:["built","project","zone"],emotion:"excitement",tone:"resolved"},{id:17,timestamp:"Feb 8",rawText:"built a prototype and it actually works, feeling alive",keywords:["built","prototype","alive"],emotion:"joy",tone:"resolved"},{id:18,timestamp:"Feb 16",rawText:"creating again after a slump, this is what I'm meant to do",keywords:["creating","meant"],emotion:"confidence",tone:"resolved"},{id:19,timestamp:"Feb 28",rawText:"shipped the feature I've been building, pure satisfaction",keywords:["built","shipped","satisfaction"],emotion:"confidence",tone:"resolved"},{id:20,timestamp:"Mar 5",rawText:"building momentum with this project, ideas flowing freely",keywords:["built","momentum","ideas"],emotion:"excitement",tone:"resolved"},{id:21,timestamp:"Mar 10",rawText:"built three things this week, on fire creatively",keywords:["built","creative","fire"],emotion:"excitement",tone:"resolved"},{id:22,timestamp:"Jan 18",rawText:"had a beautiful walk through the park, felt grounded",keywords:["walk","park","grounded"],emotion:"peace",tone:"resolved"},{id:23,timestamp:"Feb 2",rawText:"morning meditation brought real peace today",keywords:["meditation","peace"],emotion:"peace",tone:"resolved"},{id:24,timestamp:"Feb 20",rawText:"sat by the water and just breathed, felt completely at peace",keywords:["water","breathed","peace"],emotion:"peace",tone:"resolved"},{id:25,timestamp:"Mar 3",rawText:"grounded myself with a long walk, the noise quieted down",keywords:["grounded","walk","quiet"],emotion:"peace",tone:"resolved"},{id:26,timestamp:"Mar 9",rawText:"found peace in the garden today, hands in the earth",keywords:["peace","garden","earth"],emotion:"peace",tone:"resolved"},{id:27,timestamp:"Jan 22",rawText:"sleep has been terrible, mind racing at 2am",keywords:["sleep","mind","racing"],emotion:"exhaustion",tone:"stress"},{id:28,timestamp:"Feb 6",rawText:"another night of broken sleep, running on empty",keywords:["sleep","broken","empty"],emotion:"exhaustion",tone:"stress"},{id:29,timestamp:"Feb 19",rawText:"sleep deprivation making everything feel harder",keywords:["sleep","harder"],emotion:"exhaustion",tone:"stress"},{id:30,timestamp:"Mar 1",rawText:"tried every sleep trick, still waking up at 3am",keywords:["sleep","waking"],emotion:"frustration",tone:"stress"},{id:31,timestamp:"Mar 6",rawText:"exhausted from bad sleep, body aches constantly",keywords:["sleep","exhausted","aches"],emotion:"exhaustion",tone:"stress"},{id:32,timestamp:"Jan 30",rawText:"frustrated that my partner doesn't communicate clearly",keywords:["partner","communicate"],emotion:"frustration",tone:"stress"},{id:33,timestamp:"Feb 10",rawText:"had an honest conversation with partner, felt closer",keywords:["partner","honest","closer"],emotion:"love",tone:"resolved"},{id:34,timestamp:"Feb 25",rawText:"partner and I are growing together, grateful for the effort",keywords:["partner","growing","grateful"],emotion:"gratitude",tone:"resolved"},{id:35,timestamp:"Mar 4",rawText:"partner surprised me today, feeling really loved",keywords:["partner","loved","surprised"],emotion:"love",tone:"resolved"},{id:36,timestamp:"Jan 16",rawText:"great conversation with a mentor, clarity about direction",keywords:["mentor","clarity","direction"],emotion:"clarity",tone:"resolved"},{id:37,timestamp:"Feb 1",rawText:"breakthrough moment of clarity about what I actually want",keywords:["clarity","breakthrough","want"],emotion:"clarity",tone:"resolved"},{id:38,timestamp:"Feb 15",rawText:"reading is giving me clarity I didn't know I needed",keywords:["reading","clarity"],emotion:"clarity",tone:"resolved"},{id:39,timestamp:"Mar 2",rawText:"clarity hit me during my run, I know what to do next",keywords:["clarity","run","next"],emotion:"confidence",tone:"resolved"},{id:40,timestamp:"Mar 8",rawText:"therapy session brought so much clarity, feeling lighter",keywords:["clarity","therapy","lighter"],emotion:"clarity",tone:"resolved"},{id:41,timestamp:"Feb 9",rawText:"feeling really isolated lately, nobody checks in",keywords:["isolated","nobody"],emotion:"loneliness",tone:"stress"},{id:42,timestamp:"Feb 23",rawText:"surrounded by people but still feel alone",keywords:["alone","people"],emotion:"loneliness",tone:"stress"},{id:43,timestamp:"Mar 5",rawText:"lonely again tonight, scrolling through old messages",keywords:["lonely","messages"],emotion:"loneliness",tone:"stress"},{id:44,timestamp:"Feb 12",rawText:"feeling hopeful about what I'm building for the first time",keywords:["hopeful","building"],emotion:"hope",tone:"resolved"},{id:45,timestamp:"Feb 27",rawText:"I can see a future I'm excited about, things are shifting",keywords:["future","excited","shifting"],emotion:"hope",tone:"resolved"},{id:46,timestamp:"Mar 9",rawText:"hope is the thread pulling me through, holding onto it",keywords:["hope","thread","holding"],emotion:"hope",tone:"resolved"}],M=ke.useCallback(B=>{const R={};return B.forEach(U=>U.keywords.forEach(W=>{const $=fr(W);R[$]||(R[$]={label:$,frequency:0,firstSeen:U.timestamp,lastSeen:U.timestamp,emotion:U.emotion,entries:[],emotionCounts:{},rawKeywords:new Set}),R[$].frequency++,R[$].lastSeen=U.timestamp,R[$].entries.push(U.id),R[$].rawKeywords.add(W),R[$].emotionCounts[U.emotion]=(R[$].emotionCounts[U.emotion]||0)+1})),Object.values(R).forEach(U=>{let W=0,$=U.emotion;for(const[D,k]of Object.entries(U.emotionCounts))k>W&&(W=k,$=D);U.emotion=$,U.rawKeywords=[...U.rawKeywords]}),Object.values(R).filter(U=>U.frequency>=1).sort((U,W)=>W.frequency-U.frequency).slice(0,40)},[]),E=ke.useCallback(B=>{if(e("main"),Ft.play("reveal"),B==="explore"){i(N);const R=M(N);s(R);const U=N[N.length-1];U&&U.keywords.length>0&&setTimeout(()=>m(U.keywords[0]),1200)}setTimeout(()=>Ft.play("drone"),600)},[M]),P=ke.useCallback(()=>{if(!o.trim())return;Ft.play("submit");const B=sT(o),R=eT(o),U=hc(R),W=new Date,$=`${W.toLocaleString("default",{month:"short"})} ${W.getDate()}`,D={id:Date.now(),timestamp:$,rawText:o,keywords:B,emotion:R,tone:U},k=[...n,D],z={};r.forEach(K=>{z[K.label]=K.frequency});const Z=M(k);i(k),s(Z),a(""),_(!0),setTimeout(()=>_(!1),800);let Q=!1;Z.forEach(K=>{(z[K.label]||0)<3&&K.frequency>=3&&(Q=!0)}),Q?Ft.play("coalesce"):Ft.play("impact");const Y=fr(B[0]||"thought");if(w({text:Y,emotion:R,id:D.id}),setTimeout(()=>w(null),2800),B.length>0){const K=B.reduce((le,me)=>{const Le=fr(me),ze=Z.find(Re=>Re.label===Le);return ze&&ze.frequency>(le.freq||0)?{kw:Le,freq:ze.frequency}:le},{kw:Y,freq:0});m(null),setTimeout(()=>m(K.kw),300);const ue=Z.find(le=>le.label===K.kw);ue&&ue.frequency>=3&&setTimeout(()=>u(ue),2200)}},[o,n,r,M]),j=ke.useCallback(B=>{const R=r.find(U=>U.label===B);R&&u(R)},[r]);return ke.useEffect(()=>{const B=document.createElement("link");return B.href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,ital,wght@9..144,0,300;9..144,0,400;9..144,1,300&family=DM+Sans:wght@300;400;500&family=JetBrains+Mono:wght@300;400&display=swap",B.rel="stylesheet",document.head.appendChild(B),()=>{document.head.contains(B)&&document.head.removeChild(B)}},[]),ke.useEffect(()=>{const B=R=>{R.key==="Escape"&&(p?u(null):f&&h(!1))};return window.addEventListener("keydown",B),()=>window.removeEventListener("keydown",B)},[p,f]),t==="intro"?ae.jsx(aT,{onEnter:E}):ae.jsxs("div",{style:{width:"100%",height:"100vh",background:de.bg,position:"relative",overflow:"hidden",fontFamily:"'DM Sans', system-ui"},children:[ae.jsx("div",{style:{position:"absolute",inset:0,pointerEvents:"none",zIndex:1,mixBlendMode:"overlay",opacity:.025,backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`}}),y&&ae.jsx("div",{style:{position:"absolute",inset:0,zIndex:50,pointerEvents:"none",background:`radial-gradient(circle at 50% 50%, ${de.glowAmber} 0%, transparent 50%)`,animation:"flashOut 0.8s ease-out forwards"}}),b&&(()=>{const B=ur(b.emotion);return ae.jsxs("div",{style:{position:"absolute",top:"42%",left:"50%",zIndex:45,pointerEvents:"none",textAlign:"center"},children:[ae.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",width:80,height:80,borderRadius:"50%",background:`radial-gradient(circle, ${B.hex}44 0%, ${B.hex}11 40%, transparent 70%)`,animation:"starBurst 2.8s ease-out forwards"}}),ae.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",whiteSpace:"nowrap",fontFamily:"'Fraunces', Georgia, serif",fontSize:20,fontWeight:300,color:B.hex,letterSpacing:"0.06em",textShadow:`0 0 20px ${B.hex}88, 0 0 40px ${B.hex}44`,animation:"birthFade 2.8s cubic-bezier(0.22, 1, 0.36, 1) forwards"},children:b.text}),ae.jsx("div",{style:{position:"absolute",top:"calc(50% + 28px)",left:"50%",transform:"translateX(-50%)",whiteSpace:"nowrap",fontFamily:"'JetBrains Mono', monospace",fontSize:8,letterSpacing:"0.2em",color:de.textMuted,animation:"birthFade 2.8s cubic-bezier(0.22, 1, 0.36, 1) 0.2s forwards",opacity:0},children:B.label.toUpperCase()})]},b.id)})(),ae.jsx(lT,{clusters:r,entries:n,onMarkerClick:j,zoomTarget:v,viewMode:x}),ae.jsxs("div",{style:{position:"absolute",top:16,left:"50%",transform:"translateX(-50%)",zIndex:20,display:"flex",alignItems:"center",gap:10,animation:"fadeDown 1s ease 0.4s both",pointerEvents:"none"},children:[ae.jsx("div",{style:{fontFamily:"'Fraunces', Georgia, serif",fontSize:22,color:de.textPrimary,fontWeight:300,textShadow:`0 0 30px ${de.glowAmber}`},children:"COIL"}),ae.jsx("div",{style:{width:1,height:16,background:de.surfaceLight}}),ae.jsxs("div",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:9,color:de.textMuted,letterSpacing:"0.1em"},children:[n.length," MAPPED"]})]}),ae.jsx(uT,{clusters:r,entries:n,isOpen:f,onToggle:()=>{h(!f),Ft.play("hover")},onClusterClick:B=>{m(null),setTimeout(()=>m(B),50);const R=r.find(U=>U.label===B);R&&setTimeout(()=>u(R),400)}}),ae.jsx(fT,{isOpen:d,onToggle:()=>g(!d),viewMode:x}),ae.jsx("button",{onClick:()=>{C(B=>B==="surface"?"planet":"surface"),Ft.play("reveal")},onMouseEnter:()=>Ft.play("hover"),style:{position:"absolute",top:18,right:18,zIndex:30,background:`${de.surface}cc`,border:`1px solid ${de.surfaceLight}`,borderRadius:10,padding:"8px 14px",cursor:"pointer",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",gap:8,transition:"all 0.3s ease"},children:ae.jsx("span",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:9,letterSpacing:"0.12em",color:de.amber},children:x==="surface"?"◈ SURFACE":"◎ PLANET"})}),p&&ae.jsx(cT,{cluster:p,entries:n,onClose:()=>u(null)}),ae.jsxs("div",{style:{position:"absolute",bottom:32,left:"50%",transform:"translateX(-50%)",width:"90%",maxWidth:500,zIndex:20,animation:"fadeUp 1s ease 0.6s both"},children:[ae.jsx("div",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:9,color:l?de.amber:de.textMuted,letterSpacing:"0.2em",marginBottom:8,marginLeft:4,transition:"color 0.4s"},children:"WHAT'S LOOPING?"}),ae.jsxs("div",{style:{position:"relative",borderRadius:14},children:[ae.jsx("div",{style:{position:"absolute",inset:0,borderRadius:14,pointerEvents:"none",zIndex:2,border:`1px solid ${l?de.amber+"44":de.surfaceLight}`,boxShadow:l?`0 0 28px ${de.glowAmber}`:"none",transition:"all 0.5s ease",animation:!y&&!l?"breathe 5s ease-in-out infinite":"none"}}),ae.jsx("textarea",{value:o,onChange:B=>a(B.target.value),onFocus:()=>c(!0),onBlur:()=>c(!1),onKeyDown:B=>{B.key==="Enter"&&!B.shiftKey&&(B.preventDefault(),P())},placeholder:"dump whatever is on your mind...",rows:2,style:{width:"100%",background:`${de.surface}dd`,backdropFilter:"blur(20px)",border:"none",borderRadius:14,padding:"16px 54px 16px 18px",color:de.textPrimary,fontFamily:"'DM Sans', system-ui",fontSize:14,lineHeight:1.6,resize:"none",outline:"none",boxSizing:"border-box"}}),ae.jsx("button",{onClick:P,onMouseEnter:()=>o.trim()&&Ft.play("hover"),style:{position:"absolute",right:12,bottom:12,width:34,height:34,borderRadius:10,border:"none",cursor:o.trim()?"pointer":"default",background:o.trim()?`linear-gradient(135deg, ${de.amber}, ${de.amberDim})`:de.surfaceLight,color:o.trim()?de.bg:de.textMuted,display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,transition:"all 0.3s ease",zIndex:3,boxShadow:o.trim()?`0 4px 14px ${de.amber}33`:"none"},children:"↑"})]})]}),ae.jsx("div",{style:{position:"absolute",bottom:5,left:"50%",transform:"translateX(-50%)",fontFamily:"'JetBrains Mono', monospace",fontSize:7,color:de.textMuted,letterSpacing:"0.25em",opacity:.35,zIndex:15,pointerEvents:"none"},children:"A LIRIO LABS INSTRUMENT"}),ae.jsx("style",{children:`
        @keyframes breathe { 0%,100%{border-color:${de.surfaceLight};box-shadow:none} 50%{border-color:${de.amber}22;box-shadow:0 0 18px ${de.glowAmber}} }
        @keyframes fadeUp { from{opacity:0;transform:translateX(-50%) translateY(20px)} to{opacity:1;transform:translateX(-50%) translateY(0)} }
        @keyframes fadeDown { from{opacity:0;transform:translateY(-12px)} to{opacity:1;transform:translateY(0)} }
        @keyframes flashOut { 0%{opacity:0.5} 100%{opacity:0} }
        @keyframes birthFade { 0%{opacity:0;transform:translate(-50%,-50%) scale(0.6)} 12%{opacity:1;transform:translate(-50%,-50%) scale(1.05)} 20%{transform:translate(-50%,-50%) scale(1)} 75%{opacity:0.9} 100%{opacity:0;transform:translate(-50%,-50%) scale(1) translateY(-18px)} }
        @keyframes starBurst { 0%{opacity:0;transform:translate(-50%,-50%) scale(0)} 25%{opacity:1;transform:translate(-50%,-50%) scale(1.4)} 50%{transform:translate(-50%,-50%) scale(0.9)} 70%{opacity:0.7} 100%{opacity:0;transform:translate(-50%,-50%) scale(2)} }
        @keyframes popupIn { 0%{opacity:0;transform:translate(-50%,-50%) scale(0.92)} 100%{opacity:1;transform:translate(-50%,-50%) scale(1)} }
        textarea::placeholder{color:${de.textMuted};font-style:italic}
        ::-webkit-scrollbar{width:3px} ::-webkit-scrollbar-track{background:transparent} ::-webkit-scrollbar-thumb{background:${de.surfaceLight};border-radius:3px}
        *{box-sizing:border-box}
      `})]})}Eu.createRoot(document.getElementById("root")).render(ae.jsx(Cv.StrictMode,{children:ae.jsx(dT,{})}));
