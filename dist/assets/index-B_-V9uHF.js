(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Rv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Dm={exports:{}},nc={},Um={exports:{}},Je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var la=Symbol.for("react.element"),Cv=Symbol.for("react.portal"),Pv=Symbol.for("react.fragment"),Lv=Symbol.for("react.strict_mode"),Dv=Symbol.for("react.profiler"),Uv=Symbol.for("react.provider"),Iv=Symbol.for("react.context"),Nv=Symbol.for("react.forward_ref"),Fv=Symbol.for("react.suspense"),Ov=Symbol.for("react.memo"),kv=Symbol.for("react.lazy"),qf=Symbol.iterator;function zv(t){return t===null||typeof t!="object"?null:(t=qf&&t[qf]||t["@@iterator"],typeof t=="function"?t:null)}var Im={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Nm=Object.assign,Fm={};function Qs(t,e,n){this.props=t,this.context=e,this.refs=Fm,this.updater=n||Im}Qs.prototype.isReactComponent={};Qs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Qs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Om(){}Om.prototype=Qs.prototype;function Wd(t,e,n){this.props=t,this.context=e,this.refs=Fm,this.updater=n||Im}var Xd=Wd.prototype=new Om;Xd.constructor=Wd;Nm(Xd,Qs.prototype);Xd.isPureReactComponent=!0;var $f=Array.isArray,km=Object.prototype.hasOwnProperty,jd={current:null},zm={key:!0,ref:!0,__self:!0,__source:!0};function Bm(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)km.call(e,i)&&!zm.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:la,type:t,key:s,ref:o,props:r,_owner:jd.current}}function Bv(t,e){return{$$typeof:la,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Yd(t){return typeof t=="object"&&t!==null&&t.$$typeof===la}function Hv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Kf=/\/+/g;function bc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Hv(""+t.key):e.toString(36)}function dl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case la:case Cv:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+bc(o,0):i,$f(r)?(n="",t!=null&&(n=t.replace(Kf,"$&/")+"/"),dl(r,e,n,"",function(c){return c})):r!=null&&(Yd(r)&&(r=Bv(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Kf,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",$f(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+bc(s,a);o+=dl(s,e,n,l,r)}else if(l=zv(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+bc(s,a++),o+=dl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ya(t,e,n){if(t==null)return t;var i=[],r=0;return dl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Gv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var _n={current:null},fl={transition:null},Vv={ReactCurrentDispatcher:_n,ReactCurrentBatchConfig:fl,ReactCurrentOwner:jd};function Hm(){throw Error("act(...) is not supported in production builds of React.")}Je.Children={map:ya,forEach:function(t,e,n){ya(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ya(t,function(){e++}),e},toArray:function(t){return ya(t,function(e){return e})||[]},only:function(t){if(!Yd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Je.Component=Qs;Je.Fragment=Pv;Je.Profiler=Dv;Je.PureComponent=Wd;Je.StrictMode=Lv;Je.Suspense=Fv;Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vv;Je.act=Hm;Je.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Nm({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=jd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)km.call(e,l)&&!zm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:la,type:t.type,key:r,ref:s,props:i,_owner:o}};Je.createContext=function(t){return t={$$typeof:Iv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Uv,_context:t},t.Consumer=t};Je.createElement=Bm;Je.createFactory=function(t){var e=Bm.bind(null,t);return e.type=t,e};Je.createRef=function(){return{current:null}};Je.forwardRef=function(t){return{$$typeof:Nv,render:t}};Je.isValidElement=Yd;Je.lazy=function(t){return{$$typeof:kv,_payload:{_status:-1,_result:t},_init:Gv}};Je.memo=function(t,e){return{$$typeof:Ov,type:t,compare:e===void 0?null:e}};Je.startTransition=function(t){var e=fl.transition;fl.transition={};try{t()}finally{fl.transition=e}};Je.unstable_act=Hm;Je.useCallback=function(t,e){return _n.current.useCallback(t,e)};Je.useContext=function(t){return _n.current.useContext(t)};Je.useDebugValue=function(){};Je.useDeferredValue=function(t){return _n.current.useDeferredValue(t)};Je.useEffect=function(t,e){return _n.current.useEffect(t,e)};Je.useId=function(){return _n.current.useId()};Je.useImperativeHandle=function(t,e,n){return _n.current.useImperativeHandle(t,e,n)};Je.useInsertionEffect=function(t,e){return _n.current.useInsertionEffect(t,e)};Je.useLayoutEffect=function(t,e){return _n.current.useLayoutEffect(t,e)};Je.useMemo=function(t,e){return _n.current.useMemo(t,e)};Je.useReducer=function(t,e,n){return _n.current.useReducer(t,e,n)};Je.useRef=function(t){return _n.current.useRef(t)};Je.useState=function(t){return _n.current.useState(t)};Je.useSyncExternalStore=function(t,e,n){return _n.current.useSyncExternalStore(t,e,n)};Je.useTransition=function(){return _n.current.useTransition()};Je.version="18.3.1";Um.exports=Je;var Ue=Um.exports;const Wv=Rv(Ue);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xv=Ue,jv=Symbol.for("react.element"),Yv=Symbol.for("react.fragment"),qv=Object.prototype.hasOwnProperty,$v=Xv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Kv={key:!0,ref:!0,__self:!0,__source:!0};function Gm(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)qv.call(e,i)&&!Kv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:jv,type:t,key:s,ref:o,props:r,_owner:$v.current}}nc.Fragment=Yv;nc.jsx=Gm;nc.jsxs=Gm;Dm.exports=nc;var te=Dm.exports,Fu={},Vm={exports:{}},kn={},Wm={exports:{}},Xm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,I){var G=P.length;P.push(I);e:for(;0<G;){var Z=G-1>>>1,ee=P[Z];if(0<r(ee,I))P[Z]=I,P[G]=ee,G=Z;else break e}}function n(P){return P.length===0?null:P[0]}function i(P){if(P.length===0)return null;var I=P[0],G=P.pop();if(G!==I){P[0]=G;e:for(var Z=0,ee=P.length,K=ee>>>1;Z<K;){var Q=2*(Z+1)-1,he=P[Q],ge=Q+1,Se=P[ge];if(0>r(he,G))ge<ee&&0>r(Se,he)?(P[Z]=Se,P[ge]=G,Z=ge):(P[Z]=he,P[Q]=G,Z=Q);else if(ge<ee&&0>r(Se,G))P[Z]=Se,P[ge]=G,Z=ge;else break e}}return I}function r(P,I){var G=P.sortIndex-I.sortIndex;return G!==0?G:P.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,f=null,h=3,g=!1,y=!1,_=!1,p=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(P){for(var I=n(c);I!==null;){if(I.callback===null)i(c);else if(I.startTime<=P)i(c),I.sortIndex=I.expirationTime,e(l,I);else break;I=n(c)}}function M(P){if(_=!1,v(P),!y)if(n(l)!==null)y=!0,N(b);else{var I=n(c);I!==null&&H(M,I.startTime-P)}}function b(P,I){y=!1,_&&(_=!1,u(O),O=-1),g=!0;var G=h;try{for(v(I),f=n(l);f!==null&&(!(f.expirationTime>I)||P&&!q());){var Z=f.callback;if(typeof Z=="function"){f.callback=null,h=f.priorityLevel;var ee=Z(f.expirationTime<=I);I=t.unstable_now(),typeof ee=="function"?f.callback=ee:f===n(l)&&i(l),v(I)}else i(l);f=n(l)}if(f!==null)var K=!0;else{var Q=n(c);Q!==null&&H(M,Q.startTime-I),K=!1}return K}finally{f=null,h=G,g=!1}}var T=!1,A=null,O=-1,S=5,w=-1;function q(){return!(t.unstable_now()-w<S)}function Y(){if(A!==null){var P=t.unstable_now();w=P;var I=!0;try{I=A(!0,P)}finally{I?W():(T=!1,A=null)}}else T=!1}var W;if(typeof m=="function")W=function(){m(Y)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,V=L.port2;L.port1.onmessage=Y,W=function(){V.postMessage(null)}}else W=function(){p(Y,0)};function N(P){A=P,T||(T=!0,W())}function H(P,I){O=p(function(){P(t.unstable_now())},I)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,N(b))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(P){switch(h){case 1:case 2:case 3:var I=3;break;default:I=h}var G=h;h=I;try{return P()}finally{h=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,I){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var G=h;h=P;try{return I()}finally{h=G}},t.unstable_scheduleCallback=function(P,I,G){var Z=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?Z+G:Z):G=Z,P){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=G+ee,P={id:d++,callback:I,priorityLevel:P,startTime:G,expirationTime:ee,sortIndex:-1},G>Z?(P.sortIndex=G,e(c,P),n(l)===null&&P===n(c)&&(_?(u(O),O=-1):_=!0,H(M,G-Z))):(P.sortIndex=ee,e(l,P),y||g||(y=!0,N(b))),P},t.unstable_shouldYield=q,t.unstable_wrapCallback=function(P){var I=h;return function(){var G=h;h=I;try{return P.apply(this,arguments)}finally{h=G}}}})(Xm);Wm.exports=Xm;var Zv=Wm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jv=Ue,On=Zv;function de(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jm=new Set,Vo={};function qr(t,e){Gs(t,e),Gs(t+"Capture",e)}function Gs(t,e){for(Vo[t]=e,t=0;t<e.length;t++)jm.add(e[t])}var Oi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ou=Object.prototype.hasOwnProperty,Qv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Zf={},Jf={};function e_(t){return Ou.call(Jf,t)?!0:Ou.call(Zf,t)?!1:Qv.test(t)?Jf[t]=!0:(Zf[t]=!0,!1)}function t_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function n_(t,e,n,i){if(e===null||typeof e>"u"||t_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function yn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var rn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){rn[t]=new yn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];rn[e]=new yn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){rn[t]=new yn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){rn[t]=new yn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){rn[t]=new yn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){rn[t]=new yn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){rn[t]=new yn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){rn[t]=new yn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){rn[t]=new yn(t,5,!1,t.toLowerCase(),null,!1,!1)});var qd=/[\-:]([a-z])/g;function $d(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(qd,$d);rn[e]=new yn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(qd,$d);rn[e]=new yn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(qd,$d);rn[e]=new yn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){rn[t]=new yn(t,1,!1,t.toLowerCase(),null,!1,!1)});rn.xlinkHref=new yn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){rn[t]=new yn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Kd(t,e,n,i){var r=rn.hasOwnProperty(e)?rn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(n_(e,n,r,i)&&(n=null),i||r===null?e_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Gi=Jv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xa=Symbol.for("react.element"),ys=Symbol.for("react.portal"),xs=Symbol.for("react.fragment"),Zd=Symbol.for("react.strict_mode"),ku=Symbol.for("react.profiler"),Ym=Symbol.for("react.provider"),qm=Symbol.for("react.context"),Jd=Symbol.for("react.forward_ref"),zu=Symbol.for("react.suspense"),Bu=Symbol.for("react.suspense_list"),Qd=Symbol.for("react.memo"),Ki=Symbol.for("react.lazy"),$m=Symbol.for("react.offscreen"),Qf=Symbol.iterator;function co(t){return t===null||typeof t!="object"?null:(t=Qf&&t[Qf]||t["@@iterator"],typeof t=="function"?t:null)}var Rt=Object.assign,Rc;function bo(t){if(Rc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Rc=e&&e[1]||""}return`
`+Rc+t}var Cc=!1;function Pc(t,e){if(!t||Cc)return"";Cc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Cc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?bo(t):""}function i_(t){switch(t.tag){case 5:return bo(t.type);case 16:return bo("Lazy");case 13:return bo("Suspense");case 19:return bo("SuspenseList");case 0:case 2:case 15:return t=Pc(t.type,!1),t;case 11:return t=Pc(t.type.render,!1),t;case 1:return t=Pc(t.type,!0),t;default:return""}}function Hu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case xs:return"Fragment";case ys:return"Portal";case ku:return"Profiler";case Zd:return"StrictMode";case zu:return"Suspense";case Bu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case qm:return(t.displayName||"Context")+".Consumer";case Ym:return(t._context.displayName||"Context")+".Provider";case Jd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Qd:return e=t.displayName||null,e!==null?e:Hu(t.type)||"Memo";case Ki:e=t._payload,t=t._init;try{return Hu(t(e))}catch{}}return null}function r_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Hu(e);case 8:return e===Zd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function _r(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Km(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function s_(t){var e=Km(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Sa(t){t._valueTracker||(t._valueTracker=s_(t))}function Zm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Km(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function wl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Gu(t,e){var n=e.checked;return Rt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function eh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=_r(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Jm(t,e){e=e.checked,e!=null&&Kd(t,"checked",e,!1)}function Vu(t,e){Jm(t,e);var n=_r(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Wu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Wu(t,e.type,_r(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function th(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Wu(t,e,n){(e!=="number"||wl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ro=Array.isArray;function Us(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+_r(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Xu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(de(91));return Rt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function nh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(de(92));if(Ro(n)){if(1<n.length)throw Error(de(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:_r(n)}}function Qm(t,e){var n=_r(e.value),i=_r(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function ih(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function eg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ju(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?eg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ma,tg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ma=Ma||document.createElement("div"),Ma.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ma.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Wo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Uo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},o_=["Webkit","ms","Moz","O"];Object.keys(Uo).forEach(function(t){o_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Uo[e]=Uo[t]})});function ng(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Uo.hasOwnProperty(t)&&Uo[t]?(""+e).trim():e+"px"}function ig(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=ng(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var a_=Rt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yu(t,e){if(e){if(a_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(de(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(de(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(de(61))}if(e.style!=null&&typeof e.style!="object")throw Error(de(62))}}function qu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $u=null;function ef(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ku=null,Is=null,Ns=null;function rh(t){if(t=da(t)){if(typeof Ku!="function")throw Error(de(280));var e=t.stateNode;e&&(e=ac(e),Ku(t.stateNode,t.type,e))}}function rg(t){Is?Ns?Ns.push(t):Ns=[t]:Is=t}function sg(){if(Is){var t=Is,e=Ns;if(Ns=Is=null,rh(t),e)for(t=0;t<e.length;t++)rh(e[t])}}function og(t,e){return t(e)}function ag(){}var Lc=!1;function lg(t,e,n){if(Lc)return t(e,n);Lc=!0;try{return og(t,e,n)}finally{Lc=!1,(Is!==null||Ns!==null)&&(ag(),sg())}}function Xo(t,e){var n=t.stateNode;if(n===null)return null;var i=ac(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(de(231,e,typeof n));return n}var Zu=!1;if(Oi)try{var uo={};Object.defineProperty(uo,"passive",{get:function(){Zu=!0}}),window.addEventListener("test",uo,uo),window.removeEventListener("test",uo,uo)}catch{Zu=!1}function l_(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Io=!1,Tl=null,Al=!1,Ju=null,c_={onError:function(t){Io=!0,Tl=t}};function u_(t,e,n,i,r,s,o,a,l){Io=!1,Tl=null,l_.apply(c_,arguments)}function d_(t,e,n,i,r,s,o,a,l){if(u_.apply(this,arguments),Io){if(Io){var c=Tl;Io=!1,Tl=null}else throw Error(de(198));Al||(Al=!0,Ju=c)}}function $r(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function cg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function sh(t){if($r(t)!==t)throw Error(de(188))}function f_(t){var e=t.alternate;if(!e){if(e=$r(t),e===null)throw Error(de(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return sh(r),t;if(s===i)return sh(r),e;s=s.sibling}throw Error(de(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(de(189))}}if(n.alternate!==i)throw Error(de(190))}if(n.tag!==3)throw Error(de(188));return n.stateNode.current===n?t:e}function ug(t){return t=f_(t),t!==null?dg(t):null}function dg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=dg(t);if(e!==null)return e;t=t.sibling}return null}var fg=On.unstable_scheduleCallback,oh=On.unstable_cancelCallback,h_=On.unstable_shouldYield,p_=On.unstable_requestPaint,Nt=On.unstable_now,m_=On.unstable_getCurrentPriorityLevel,tf=On.unstable_ImmediatePriority,hg=On.unstable_UserBlockingPriority,bl=On.unstable_NormalPriority,g_=On.unstable_LowPriority,pg=On.unstable_IdlePriority,ic=null,Mi=null;function v_(t){if(Mi&&typeof Mi.onCommitFiberRoot=="function")try{Mi.onCommitFiberRoot(ic,t,void 0,(t.current.flags&128)===128)}catch{}}var fi=Math.clz32?Math.clz32:x_,__=Math.log,y_=Math.LN2;function x_(t){return t>>>=0,t===0?32:31-(__(t)/y_|0)|0}var Ea=64,wa=4194304;function Co(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Rl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Co(a):(s&=o,s!==0&&(i=Co(s)))}else o=n&~r,o!==0?i=Co(o):s!==0&&(i=Co(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-fi(e),r=1<<n,i|=t[n],e&=~r;return i}function S_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function M_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-fi(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=S_(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Qu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function mg(){var t=Ea;return Ea<<=1,!(Ea&4194240)&&(Ea=64),t}function Dc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ca(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-fi(e),t[e]=n}function E_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-fi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function nf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-fi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ut=0;function gg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var vg,rf,_g,yg,xg,ed=!1,Ta=[],rr=null,sr=null,or=null,jo=new Map,Yo=new Map,Ji=[],w_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ah(t,e){switch(t){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":or=null;break;case"pointerover":case"pointerout":jo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yo.delete(e.pointerId)}}function fo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=da(e),e!==null&&rf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function T_(t,e,n,i,r){switch(e){case"focusin":return rr=fo(rr,t,e,n,i,r),!0;case"dragenter":return sr=fo(sr,t,e,n,i,r),!0;case"mouseover":return or=fo(or,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return jo.set(s,fo(jo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Yo.set(s,fo(Yo.get(s)||null,t,e,n,i,r)),!0}return!1}function Sg(t){var e=Ir(t.target);if(e!==null){var n=$r(e);if(n!==null){if(e=n.tag,e===13){if(e=cg(n),e!==null){t.blockedOn=e,xg(t.priority,function(){_g(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function hl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=td(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);$u=i,n.target.dispatchEvent(i),$u=null}else return e=da(n),e!==null&&rf(e),t.blockedOn=n,!1;e.shift()}return!0}function lh(t,e,n){hl(t)&&n.delete(e)}function A_(){ed=!1,rr!==null&&hl(rr)&&(rr=null),sr!==null&&hl(sr)&&(sr=null),or!==null&&hl(or)&&(or=null),jo.forEach(lh),Yo.forEach(lh)}function ho(t,e){t.blockedOn===e&&(t.blockedOn=null,ed||(ed=!0,On.unstable_scheduleCallback(On.unstable_NormalPriority,A_)))}function qo(t){function e(r){return ho(r,t)}if(0<Ta.length){ho(Ta[0],t);for(var n=1;n<Ta.length;n++){var i=Ta[n];i.blockedOn===t&&(i.blockedOn=null)}}for(rr!==null&&ho(rr,t),sr!==null&&ho(sr,t),or!==null&&ho(or,t),jo.forEach(e),Yo.forEach(e),n=0;n<Ji.length;n++)i=Ji[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ji.length&&(n=Ji[0],n.blockedOn===null);)Sg(n),n.blockedOn===null&&Ji.shift()}var Fs=Gi.ReactCurrentBatchConfig,Cl=!0;function b_(t,e,n,i){var r=ut,s=Fs.transition;Fs.transition=null;try{ut=1,sf(t,e,n,i)}finally{ut=r,Fs.transition=s}}function R_(t,e,n,i){var r=ut,s=Fs.transition;Fs.transition=null;try{ut=4,sf(t,e,n,i)}finally{ut=r,Fs.transition=s}}function sf(t,e,n,i){if(Cl){var r=td(t,e,n,i);if(r===null)Gc(t,e,i,Pl,n),ah(t,i);else if(T_(r,t,e,n,i))i.stopPropagation();else if(ah(t,i),e&4&&-1<w_.indexOf(t)){for(;r!==null;){var s=da(r);if(s!==null&&vg(s),s=td(t,e,n,i),s===null&&Gc(t,e,i,Pl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Gc(t,e,i,null,n)}}var Pl=null;function td(t,e,n,i){if(Pl=null,t=ef(i),t=Ir(t),t!==null)if(e=$r(t),e===null)t=null;else if(n=e.tag,n===13){if(t=cg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Pl=t,null}function Mg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(m_()){case tf:return 1;case hg:return 4;case bl:case g_:return 16;case pg:return 536870912;default:return 16}default:return 16}}var er=null,of=null,pl=null;function Eg(){if(pl)return pl;var t,e=of,n=e.length,i,r="value"in er?er.value:er.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return pl=r.slice(t,1<i?1-i:void 0)}function ml(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Aa(){return!0}function ch(){return!1}function zn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Aa:ch,this.isPropagationStopped=ch,this}return Rt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Aa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Aa)},persist:function(){},isPersistent:Aa}),e}var eo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},af=zn(eo),ua=Rt({},eo,{view:0,detail:0}),C_=zn(ua),Uc,Ic,po,rc=Rt({},ua,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==po&&(po&&t.type==="mousemove"?(Uc=t.screenX-po.screenX,Ic=t.screenY-po.screenY):Ic=Uc=0,po=t),Uc)},movementY:function(t){return"movementY"in t?t.movementY:Ic}}),uh=zn(rc),P_=Rt({},rc,{dataTransfer:0}),L_=zn(P_),D_=Rt({},ua,{relatedTarget:0}),Nc=zn(D_),U_=Rt({},eo,{animationName:0,elapsedTime:0,pseudoElement:0}),I_=zn(U_),N_=Rt({},eo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),F_=zn(N_),O_=Rt({},eo,{data:0}),dh=zn(O_),k_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},z_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},B_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function H_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=B_[t])?!!e[t]:!1}function lf(){return H_}var G_=Rt({},ua,{key:function(t){if(t.key){var e=k_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ml(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?z_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lf,charCode:function(t){return t.type==="keypress"?ml(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ml(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),V_=zn(G_),W_=Rt({},rc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fh=zn(W_),X_=Rt({},ua,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lf}),j_=zn(X_),Y_=Rt({},eo,{propertyName:0,elapsedTime:0,pseudoElement:0}),q_=zn(Y_),$_=Rt({},rc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),K_=zn($_),Z_=[9,13,27,32],cf=Oi&&"CompositionEvent"in window,No=null;Oi&&"documentMode"in document&&(No=document.documentMode);var J_=Oi&&"TextEvent"in window&&!No,wg=Oi&&(!cf||No&&8<No&&11>=No),hh=" ",ph=!1;function Tg(t,e){switch(t){case"keyup":return Z_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ag(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ss=!1;function Q_(t,e){switch(t){case"compositionend":return Ag(e);case"keypress":return e.which!==32?null:(ph=!0,hh);case"textInput":return t=e.data,t===hh&&ph?null:t;default:return null}}function ey(t,e){if(Ss)return t==="compositionend"||!cf&&Tg(t,e)?(t=Eg(),pl=of=er=null,Ss=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return wg&&e.locale!=="ko"?null:e.data;default:return null}}var ty={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ty[t.type]:e==="textarea"}function bg(t,e,n,i){rg(i),e=Ll(e,"onChange"),0<e.length&&(n=new af("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Fo=null,$o=null;function ny(t){kg(t,0)}function sc(t){var e=ws(t);if(Zm(e))return t}function iy(t,e){if(t==="change")return e}var Rg=!1;if(Oi){var Fc;if(Oi){var Oc="oninput"in document;if(!Oc){var gh=document.createElement("div");gh.setAttribute("oninput","return;"),Oc=typeof gh.oninput=="function"}Fc=Oc}else Fc=!1;Rg=Fc&&(!document.documentMode||9<document.documentMode)}function vh(){Fo&&(Fo.detachEvent("onpropertychange",Cg),$o=Fo=null)}function Cg(t){if(t.propertyName==="value"&&sc($o)){var e=[];bg(e,$o,t,ef(t)),lg(ny,e)}}function ry(t,e,n){t==="focusin"?(vh(),Fo=e,$o=n,Fo.attachEvent("onpropertychange",Cg)):t==="focusout"&&vh()}function sy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return sc($o)}function oy(t,e){if(t==="click")return sc(e)}function ay(t,e){if(t==="input"||t==="change")return sc(e)}function ly(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var mi=typeof Object.is=="function"?Object.is:ly;function Ko(t,e){if(mi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Ou.call(e,r)||!mi(t[r],e[r]))return!1}return!0}function _h(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function yh(t,e){var n=_h(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=_h(n)}}function Pg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Pg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Lg(){for(var t=window,e=wl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=wl(t.document)}return e}function uf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function cy(t){var e=Lg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Pg(n.ownerDocument.documentElement,n)){if(i!==null&&uf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=yh(n,s);var o=yh(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var uy=Oi&&"documentMode"in document&&11>=document.documentMode,Ms=null,nd=null,Oo=null,id=!1;function xh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;id||Ms==null||Ms!==wl(i)||(i=Ms,"selectionStart"in i&&uf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Oo&&Ko(Oo,i)||(Oo=i,i=Ll(nd,"onSelect"),0<i.length&&(e=new af("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ms)))}function ba(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Es={animationend:ba("Animation","AnimationEnd"),animationiteration:ba("Animation","AnimationIteration"),animationstart:ba("Animation","AnimationStart"),transitionend:ba("Transition","TransitionEnd")},kc={},Dg={};Oi&&(Dg=document.createElement("div").style,"AnimationEvent"in window||(delete Es.animationend.animation,delete Es.animationiteration.animation,delete Es.animationstart.animation),"TransitionEvent"in window||delete Es.transitionend.transition);function oc(t){if(kc[t])return kc[t];if(!Es[t])return t;var e=Es[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Dg)return kc[t]=e[n];return t}var Ug=oc("animationend"),Ig=oc("animationiteration"),Ng=oc("animationstart"),Fg=oc("transitionend"),Og=new Map,Sh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xr(t,e){Og.set(t,e),qr(e,[t])}for(var zc=0;zc<Sh.length;zc++){var Bc=Sh[zc],dy=Bc.toLowerCase(),fy=Bc[0].toUpperCase()+Bc.slice(1);xr(dy,"on"+fy)}xr(Ug,"onAnimationEnd");xr(Ig,"onAnimationIteration");xr(Ng,"onAnimationStart");xr("dblclick","onDoubleClick");xr("focusin","onFocus");xr("focusout","onBlur");xr(Fg,"onTransitionEnd");Gs("onMouseEnter",["mouseout","mouseover"]);Gs("onMouseLeave",["mouseout","mouseover"]);Gs("onPointerEnter",["pointerout","pointerover"]);Gs("onPointerLeave",["pointerout","pointerover"]);qr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qr("onBeforeInput",["compositionend","keypress","textInput","paste"]);qr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Po));function Mh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,d_(i,e,void 0,t),t.currentTarget=null}function kg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Mh(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Mh(r,a,c),s=l}}}if(Al)throw t=Ju,Al=!1,Ju=null,t}function vt(t,e){var n=e[ld];n===void 0&&(n=e[ld]=new Set);var i=t+"__bubble";n.has(i)||(zg(e,t,2,!1),n.add(i))}function Hc(t,e,n){var i=0;e&&(i|=4),zg(n,t,i,e)}var Ra="_reactListening"+Math.random().toString(36).slice(2);function Zo(t){if(!t[Ra]){t[Ra]=!0,jm.forEach(function(n){n!=="selectionchange"&&(hy.has(n)||Hc(n,!1,t),Hc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ra]||(e[Ra]=!0,Hc("selectionchange",!1,e))}}function zg(t,e,n,i){switch(Mg(e)){case 1:var r=b_;break;case 4:r=R_;break;default:r=sf}n=r.bind(null,e,n,t),r=void 0,!Zu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Gc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Ir(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}lg(function(){var c=s,d=ef(n),f=[];e:{var h=Og.get(t);if(h!==void 0){var g=af,y=t;switch(t){case"keypress":if(ml(n)===0)break e;case"keydown":case"keyup":g=V_;break;case"focusin":y="focus",g=Nc;break;case"focusout":y="blur",g=Nc;break;case"beforeblur":case"afterblur":g=Nc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=uh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=L_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=j_;break;case Ug:case Ig:case Ng:g=I_;break;case Fg:g=q_;break;case"scroll":g=C_;break;case"wheel":g=K_;break;case"copy":case"cut":case"paste":g=F_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=fh}var _=(e&4)!==0,p=!_&&t==="scroll",u=_?h!==null?h+"Capture":null:h;_=[];for(var m=c,v;m!==null;){v=m;var M=v.stateNode;if(v.tag===5&&M!==null&&(v=M,u!==null&&(M=Xo(m,u),M!=null&&_.push(Jo(m,M,v)))),p)break;m=m.return}0<_.length&&(h=new g(h,y,null,n,d),f.push({event:h,listeners:_}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==$u&&(y=n.relatedTarget||n.fromElement)&&(Ir(y)||y[ki]))break e;if((g||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=c,y=y?Ir(y):null,y!==null&&(p=$r(y),y!==p||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=c),g!==y)){if(_=uh,M="onMouseLeave",u="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(_=fh,M="onPointerLeave",u="onPointerEnter",m="pointer"),p=g==null?h:ws(g),v=y==null?h:ws(y),h=new _(M,m+"leave",g,n,d),h.target=p,h.relatedTarget=v,M=null,Ir(d)===c&&(_=new _(u,m+"enter",y,n,d),_.target=v,_.relatedTarget=p,M=_),p=M,g&&y)t:{for(_=g,u=y,m=0,v=_;v;v=Jr(v))m++;for(v=0,M=u;M;M=Jr(M))v++;for(;0<m-v;)_=Jr(_),m--;for(;0<v-m;)u=Jr(u),v--;for(;m--;){if(_===u||u!==null&&_===u.alternate)break t;_=Jr(_),u=Jr(u)}_=null}else _=null;g!==null&&Eh(f,h,g,_,!1),y!==null&&p!==null&&Eh(f,p,y,_,!0)}}e:{if(h=c?ws(c):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var b=iy;else if(mh(h))if(Rg)b=ay;else{b=sy;var T=ry}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(b=oy);if(b&&(b=b(t,c))){bg(f,b,n,d);break e}T&&T(t,h,c),t==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&Wu(h,"number",h.value)}switch(T=c?ws(c):window,t){case"focusin":(mh(T)||T.contentEditable==="true")&&(Ms=T,nd=c,Oo=null);break;case"focusout":Oo=nd=Ms=null;break;case"mousedown":id=!0;break;case"contextmenu":case"mouseup":case"dragend":id=!1,xh(f,n,d);break;case"selectionchange":if(uy)break;case"keydown":case"keyup":xh(f,n,d)}var A;if(cf)e:{switch(t){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else Ss?Tg(t,n)&&(O="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(wg&&n.locale!=="ko"&&(Ss||O!=="onCompositionStart"?O==="onCompositionEnd"&&Ss&&(A=Eg()):(er=d,of="value"in er?er.value:er.textContent,Ss=!0)),T=Ll(c,O),0<T.length&&(O=new dh(O,t,null,n,d),f.push({event:O,listeners:T}),A?O.data=A:(A=Ag(n),A!==null&&(O.data=A)))),(A=J_?Q_(t,n):ey(t,n))&&(c=Ll(c,"onBeforeInput"),0<c.length&&(d=new dh("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=A))}kg(f,e)})}function Jo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ll(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Xo(t,n),s!=null&&i.unshift(Jo(t,s,r)),s=Xo(t,e),s!=null&&i.push(Jo(t,s,r))),t=t.return}return i}function Jr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Eh(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Xo(n,s),l!=null&&o.unshift(Jo(n,l,a))):r||(l=Xo(n,s),l!=null&&o.push(Jo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var py=/\r\n?/g,my=/\u0000|\uFFFD/g;function wh(t){return(typeof t=="string"?t:""+t).replace(py,`
`).replace(my,"")}function Ca(t,e,n){if(e=wh(e),wh(t)!==e&&n)throw Error(de(425))}function Dl(){}var rd=null,sd=null;function od(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ad=typeof setTimeout=="function"?setTimeout:void 0,gy=typeof clearTimeout=="function"?clearTimeout:void 0,Th=typeof Promise=="function"?Promise:void 0,vy=typeof queueMicrotask=="function"?queueMicrotask:typeof Th<"u"?function(t){return Th.resolve(null).then(t).catch(_y)}:ad;function _y(t){setTimeout(function(){throw t})}function Vc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),qo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);qo(e)}function ar(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ah(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var to=Math.random().toString(36).slice(2),Si="__reactFiber$"+to,Qo="__reactProps$"+to,ki="__reactContainer$"+to,ld="__reactEvents$"+to,yy="__reactListeners$"+to,xy="__reactHandles$"+to;function Ir(t){var e=t[Si];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ki]||n[Si]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ah(t);t!==null;){if(n=t[Si])return n;t=Ah(t)}return e}t=n,n=t.parentNode}return null}function da(t){return t=t[Si]||t[ki],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ws(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(de(33))}function ac(t){return t[Qo]||null}var cd=[],Ts=-1;function Sr(t){return{current:t}}function yt(t){0>Ts||(t.current=cd[Ts],cd[Ts]=null,Ts--)}function gt(t,e){Ts++,cd[Ts]=t.current,t.current=e}var yr={},dn=Sr(yr),Tn=Sr(!1),Gr=yr;function Vs(t,e){var n=t.type.contextTypes;if(!n)return yr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function An(t){return t=t.childContextTypes,t!=null}function Ul(){yt(Tn),yt(dn)}function bh(t,e,n){if(dn.current!==yr)throw Error(de(168));gt(dn,e),gt(Tn,n)}function Bg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(de(108,r_(t)||"Unknown",r));return Rt({},n,i)}function Il(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||yr,Gr=dn.current,gt(dn,t),gt(Tn,Tn.current),!0}function Rh(t,e,n){var i=t.stateNode;if(!i)throw Error(de(169));n?(t=Bg(t,e,Gr),i.__reactInternalMemoizedMergedChildContext=t,yt(Tn),yt(dn),gt(dn,t)):yt(Tn),gt(Tn,n)}var Li=null,lc=!1,Wc=!1;function Hg(t){Li===null?Li=[t]:Li.push(t)}function Sy(t){lc=!0,Hg(t)}function Mr(){if(!Wc&&Li!==null){Wc=!0;var t=0,e=ut;try{var n=Li;for(ut=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Li=null,lc=!1}catch(r){throw Li!==null&&(Li=Li.slice(t+1)),fg(tf,Mr),r}finally{ut=e,Wc=!1}}return null}var As=[],bs=0,Nl=null,Fl=0,Vn=[],Wn=0,Vr=null,Ui=1,Ii="";function Rr(t,e){As[bs++]=Fl,As[bs++]=Nl,Nl=t,Fl=e}function Gg(t,e,n){Vn[Wn++]=Ui,Vn[Wn++]=Ii,Vn[Wn++]=Vr,Vr=t;var i=Ui;t=Ii;var r=32-fi(i)-1;i&=~(1<<r),n+=1;var s=32-fi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ui=1<<32-fi(e)+r|n<<r|i,Ii=s+t}else Ui=1<<s|n<<r|i,Ii=t}function df(t){t.return!==null&&(Rr(t,1),Gg(t,1,0))}function ff(t){for(;t===Nl;)Nl=As[--bs],As[bs]=null,Fl=As[--bs],As[bs]=null;for(;t===Vr;)Vr=Vn[--Wn],Vn[Wn]=null,Ii=Vn[--Wn],Vn[Wn]=null,Ui=Vn[--Wn],Vn[Wn]=null}var Fn=null,Nn=null,Mt=!1,ci=null;function Vg(t,e){var n=$n(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ch(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Fn=t,Nn=ar(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Fn=t,Nn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Vr!==null?{id:Ui,overflow:Ii}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=$n(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Fn=t,Nn=null,!0):!1;default:return!1}}function ud(t){return(t.mode&1)!==0&&(t.flags&128)===0}function dd(t){if(Mt){var e=Nn;if(e){var n=e;if(!Ch(t,e)){if(ud(t))throw Error(de(418));e=ar(n.nextSibling);var i=Fn;e&&Ch(t,e)?Vg(i,n):(t.flags=t.flags&-4097|2,Mt=!1,Fn=t)}}else{if(ud(t))throw Error(de(418));t.flags=t.flags&-4097|2,Mt=!1,Fn=t}}}function Ph(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Fn=t}function Pa(t){if(t!==Fn)return!1;if(!Mt)return Ph(t),Mt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!od(t.type,t.memoizedProps)),e&&(e=Nn)){if(ud(t))throw Wg(),Error(de(418));for(;e;)Vg(t,e),e=ar(e.nextSibling)}if(Ph(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(de(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Nn=ar(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Nn=null}}else Nn=Fn?ar(t.stateNode.nextSibling):null;return!0}function Wg(){for(var t=Nn;t;)t=ar(t.nextSibling)}function Ws(){Nn=Fn=null,Mt=!1}function hf(t){ci===null?ci=[t]:ci.push(t)}var My=Gi.ReactCurrentBatchConfig;function mo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(de(309));var i=n.stateNode}if(!i)throw Error(de(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(de(284));if(!n._owner)throw Error(de(290,t))}return t}function La(t,e){throw t=Object.prototype.toString.call(e),Error(de(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Lh(t){var e=t._init;return e(t._payload)}function Xg(t){function e(u,m){if(t){var v=u.deletions;v===null?(u.deletions=[m],u.flags|=16):v.push(m)}}function n(u,m){if(!t)return null;for(;m!==null;)e(u,m),m=m.sibling;return null}function i(u,m){for(u=new Map;m!==null;)m.key!==null?u.set(m.key,m):u.set(m.index,m),m=m.sibling;return u}function r(u,m){return u=dr(u,m),u.index=0,u.sibling=null,u}function s(u,m,v){return u.index=v,t?(v=u.alternate,v!==null?(v=v.index,v<m?(u.flags|=2,m):v):(u.flags|=2,m)):(u.flags|=1048576,m)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,m,v,M){return m===null||m.tag!==6?(m=Zc(v,u.mode,M),m.return=u,m):(m=r(m,v),m.return=u,m)}function l(u,m,v,M){var b=v.type;return b===xs?d(u,m,v.props.children,M,v.key):m!==null&&(m.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Ki&&Lh(b)===m.type)?(M=r(m,v.props),M.ref=mo(u,m,v),M.return=u,M):(M=Ml(v.type,v.key,v.props,null,u.mode,M),M.ref=mo(u,m,v),M.return=u,M)}function c(u,m,v,M){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=Jc(v,u.mode,M),m.return=u,m):(m=r(m,v.children||[]),m.return=u,m)}function d(u,m,v,M,b){return m===null||m.tag!==7?(m=kr(v,u.mode,M,b),m.return=u,m):(m=r(m,v),m.return=u,m)}function f(u,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Zc(""+m,u.mode,v),m.return=u,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case xa:return v=Ml(m.type,m.key,m.props,null,u.mode,v),v.ref=mo(u,null,m),v.return=u,v;case ys:return m=Jc(m,u.mode,v),m.return=u,m;case Ki:var M=m._init;return f(u,M(m._payload),v)}if(Ro(m)||co(m))return m=kr(m,u.mode,v,null),m.return=u,m;La(u,m)}return null}function h(u,m,v,M){var b=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return b!==null?null:a(u,m,""+v,M);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case xa:return v.key===b?l(u,m,v,M):null;case ys:return v.key===b?c(u,m,v,M):null;case Ki:return b=v._init,h(u,m,b(v._payload),M)}if(Ro(v)||co(v))return b!==null?null:d(u,m,v,M,null);La(u,v)}return null}function g(u,m,v,M,b){if(typeof M=="string"&&M!==""||typeof M=="number")return u=u.get(v)||null,a(m,u,""+M,b);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case xa:return u=u.get(M.key===null?v:M.key)||null,l(m,u,M,b);case ys:return u=u.get(M.key===null?v:M.key)||null,c(m,u,M,b);case Ki:var T=M._init;return g(u,m,v,T(M._payload),b)}if(Ro(M)||co(M))return u=u.get(v)||null,d(m,u,M,b,null);La(m,M)}return null}function y(u,m,v,M){for(var b=null,T=null,A=m,O=m=0,S=null;A!==null&&O<v.length;O++){A.index>O?(S=A,A=null):S=A.sibling;var w=h(u,A,v[O],M);if(w===null){A===null&&(A=S);break}t&&A&&w.alternate===null&&e(u,A),m=s(w,m,O),T===null?b=w:T.sibling=w,T=w,A=S}if(O===v.length)return n(u,A),Mt&&Rr(u,O),b;if(A===null){for(;O<v.length;O++)A=f(u,v[O],M),A!==null&&(m=s(A,m,O),T===null?b=A:T.sibling=A,T=A);return Mt&&Rr(u,O),b}for(A=i(u,A);O<v.length;O++)S=g(A,u,O,v[O],M),S!==null&&(t&&S.alternate!==null&&A.delete(S.key===null?O:S.key),m=s(S,m,O),T===null?b=S:T.sibling=S,T=S);return t&&A.forEach(function(q){return e(u,q)}),Mt&&Rr(u,O),b}function _(u,m,v,M){var b=co(v);if(typeof b!="function")throw Error(de(150));if(v=b.call(v),v==null)throw Error(de(151));for(var T=b=null,A=m,O=m=0,S=null,w=v.next();A!==null&&!w.done;O++,w=v.next()){A.index>O?(S=A,A=null):S=A.sibling;var q=h(u,A,w.value,M);if(q===null){A===null&&(A=S);break}t&&A&&q.alternate===null&&e(u,A),m=s(q,m,O),T===null?b=q:T.sibling=q,T=q,A=S}if(w.done)return n(u,A),Mt&&Rr(u,O),b;if(A===null){for(;!w.done;O++,w=v.next())w=f(u,w.value,M),w!==null&&(m=s(w,m,O),T===null?b=w:T.sibling=w,T=w);return Mt&&Rr(u,O),b}for(A=i(u,A);!w.done;O++,w=v.next())w=g(A,u,O,w.value,M),w!==null&&(t&&w.alternate!==null&&A.delete(w.key===null?O:w.key),m=s(w,m,O),T===null?b=w:T.sibling=w,T=w);return t&&A.forEach(function(Y){return e(u,Y)}),Mt&&Rr(u,O),b}function p(u,m,v,M){if(typeof v=="object"&&v!==null&&v.type===xs&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case xa:e:{for(var b=v.key,T=m;T!==null;){if(T.key===b){if(b=v.type,b===xs){if(T.tag===7){n(u,T.sibling),m=r(T,v.props.children),m.return=u,u=m;break e}}else if(T.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Ki&&Lh(b)===T.type){n(u,T.sibling),m=r(T,v.props),m.ref=mo(u,T,v),m.return=u,u=m;break e}n(u,T);break}else e(u,T);T=T.sibling}v.type===xs?(m=kr(v.props.children,u.mode,M,v.key),m.return=u,u=m):(M=Ml(v.type,v.key,v.props,null,u.mode,M),M.ref=mo(u,m,v),M.return=u,u=M)}return o(u);case ys:e:{for(T=v.key;m!==null;){if(m.key===T)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(u,m.sibling),m=r(m,v.children||[]),m.return=u,u=m;break e}else{n(u,m);break}else e(u,m);m=m.sibling}m=Jc(v,u.mode,M),m.return=u,u=m}return o(u);case Ki:return T=v._init,p(u,m,T(v._payload),M)}if(Ro(v))return y(u,m,v,M);if(co(v))return _(u,m,v,M);La(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(u,m.sibling),m=r(m,v),m.return=u,u=m):(n(u,m),m=Zc(v,u.mode,M),m.return=u,u=m),o(u)):n(u,m)}return p}var Xs=Xg(!0),jg=Xg(!1),Ol=Sr(null),kl=null,Rs=null,pf=null;function mf(){pf=Rs=kl=null}function gf(t){var e=Ol.current;yt(Ol),t._currentValue=e}function fd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Os(t,e){kl=t,pf=Rs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(wn=!0),t.firstContext=null)}function Zn(t){var e=t._currentValue;if(pf!==t)if(t={context:t,memoizedValue:e,next:null},Rs===null){if(kl===null)throw Error(de(308));Rs=t,kl.dependencies={lanes:0,firstContext:t}}else Rs=Rs.next=t;return e}var Nr=null;function vf(t){Nr===null?Nr=[t]:Nr.push(t)}function Yg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,vf(e)):(n.next=r.next,r.next=n),e.interleaved=n,zi(t,i)}function zi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Zi=!1;function _f(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Fi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function lr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,tt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,zi(t,n)}return r=i.interleaved,r===null?(e.next=e,vf(i)):(e.next=r.next,r.next=e),i.interleaved=e,zi(t,n)}function gl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,nf(t,n)}}function Dh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function zl(t,e,n,i){var r=t.updateQueue;Zi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,d=c=l=null,a=s;do{var h=a.lane,g=a.eventTime;if((i&h)===h){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,_=a;switch(h=e,g=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){f=y.call(g,f,h);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,h=typeof y=="function"?y.call(g,f,h):y,h==null)break e;f=Rt({},f,h);break e;case 2:Zi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=g,l=f):d=d.next=g,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Xr|=o,t.lanes=o,t.memoizedState=f}}function Uh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(de(191,r));r.call(i)}}}var fa={},Ei=Sr(fa),ea=Sr(fa),ta=Sr(fa);function Fr(t){if(t===fa)throw Error(de(174));return t}function yf(t,e){switch(gt(ta,e),gt(ea,t),gt(Ei,fa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ju(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ju(e,t)}yt(Ei),gt(Ei,e)}function js(){yt(Ei),yt(ea),yt(ta)}function $g(t){Fr(ta.current);var e=Fr(Ei.current),n=ju(e,t.type);e!==n&&(gt(ea,t),gt(Ei,n))}function xf(t){ea.current===t&&(yt(Ei),yt(ea))}var At=Sr(0);function Bl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Xc=[];function Sf(){for(var t=0;t<Xc.length;t++)Xc[t]._workInProgressVersionPrimary=null;Xc.length=0}var vl=Gi.ReactCurrentDispatcher,jc=Gi.ReactCurrentBatchConfig,Wr=0,bt=null,Bt=null,Kt=null,Hl=!1,ko=!1,na=0,Ey=0;function sn(){throw Error(de(321))}function Mf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!mi(t[n],e[n]))return!1;return!0}function Ef(t,e,n,i,r,s){if(Wr=s,bt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,vl.current=t===null||t.memoizedState===null?by:Ry,t=n(i,r),ko){s=0;do{if(ko=!1,na=0,25<=s)throw Error(de(301));s+=1,Kt=Bt=null,e.updateQueue=null,vl.current=Cy,t=n(i,r)}while(ko)}if(vl.current=Gl,e=Bt!==null&&Bt.next!==null,Wr=0,Kt=Bt=bt=null,Hl=!1,e)throw Error(de(300));return t}function wf(){var t=na!==0;return na=0,t}function yi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Kt===null?bt.memoizedState=Kt=t:Kt=Kt.next=t,Kt}function Jn(){if(Bt===null){var t=bt.alternate;t=t!==null?t.memoizedState:null}else t=Bt.next;var e=Kt===null?bt.memoizedState:Kt.next;if(e!==null)Kt=e,Bt=t;else{if(t===null)throw Error(de(310));Bt=t,t={memoizedState:Bt.memoizedState,baseState:Bt.baseState,baseQueue:Bt.baseQueue,queue:Bt.queue,next:null},Kt===null?bt.memoizedState=Kt=t:Kt=Kt.next=t}return Kt}function ia(t,e){return typeof e=="function"?e(t):e}function Yc(t){var e=Jn(),n=e.queue;if(n===null)throw Error(de(311));n.lastRenderedReducer=t;var i=Bt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((Wr&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,bt.lanes|=d,Xr|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,mi(i,e.memoizedState)||(wn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,bt.lanes|=s,Xr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function qc(t){var e=Jn(),n=e.queue;if(n===null)throw Error(de(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);mi(s,e.memoizedState)||(wn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Kg(){}function Zg(t,e){var n=bt,i=Jn(),r=e(),s=!mi(i.memoizedState,r);if(s&&(i.memoizedState=r,wn=!0),i=i.queue,Tf(e0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Kt!==null&&Kt.memoizedState.tag&1){if(n.flags|=2048,ra(9,Qg.bind(null,n,i,r,e),void 0,null),Zt===null)throw Error(de(349));Wr&30||Jg(n,e,r)}return r}function Jg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=bt.updateQueue,e===null?(e={lastEffect:null,stores:null},bt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Qg(t,e,n,i){e.value=n,e.getSnapshot=i,t0(e)&&n0(t)}function e0(t,e,n){return n(function(){t0(e)&&n0(t)})}function t0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!mi(t,n)}catch{return!0}}function n0(t){var e=zi(t,1);e!==null&&hi(e,t,1,-1)}function Ih(t){var e=yi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:t},e.queue=t,t=t.dispatch=Ay.bind(null,bt,t),[e.memoizedState,t]}function ra(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=bt.updateQueue,e===null?(e={lastEffect:null,stores:null},bt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function i0(){return Jn().memoizedState}function _l(t,e,n,i){var r=yi();bt.flags|=t,r.memoizedState=ra(1|e,n,void 0,i===void 0?null:i)}function cc(t,e,n,i){var r=Jn();i=i===void 0?null:i;var s=void 0;if(Bt!==null){var o=Bt.memoizedState;if(s=o.destroy,i!==null&&Mf(i,o.deps)){r.memoizedState=ra(e,n,s,i);return}}bt.flags|=t,r.memoizedState=ra(1|e,n,s,i)}function Nh(t,e){return _l(8390656,8,t,e)}function Tf(t,e){return cc(2048,8,t,e)}function r0(t,e){return cc(4,2,t,e)}function s0(t,e){return cc(4,4,t,e)}function o0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function a0(t,e,n){return n=n!=null?n.concat([t]):null,cc(4,4,o0.bind(null,e,t),n)}function Af(){}function l0(t,e){var n=Jn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Mf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function c0(t,e){var n=Jn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Mf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function u0(t,e,n){return Wr&21?(mi(n,e)||(n=mg(),bt.lanes|=n,Xr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,wn=!0),t.memoizedState=n)}function wy(t,e){var n=ut;ut=n!==0&&4>n?n:4,t(!0);var i=jc.transition;jc.transition={};try{t(!1),e()}finally{ut=n,jc.transition=i}}function d0(){return Jn().memoizedState}function Ty(t,e,n){var i=ur(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},f0(t))h0(e,n);else if(n=Yg(t,e,n,i),n!==null){var r=vn();hi(n,t,i,r),p0(n,e,i)}}function Ay(t,e,n){var i=ur(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(f0(t))h0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,mi(a,o)){var l=e.interleaved;l===null?(r.next=r,vf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Yg(t,e,r,i),n!==null&&(r=vn(),hi(n,t,i,r),p0(n,e,i))}}function f0(t){var e=t.alternate;return t===bt||e!==null&&e===bt}function h0(t,e){ko=Hl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function p0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,nf(t,n)}}var Gl={readContext:Zn,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useInsertionEffect:sn,useLayoutEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useMutableSource:sn,useSyncExternalStore:sn,useId:sn,unstable_isNewReconciler:!1},by={readContext:Zn,useCallback:function(t,e){return yi().memoizedState=[t,e===void 0?null:e],t},useContext:Zn,useEffect:Nh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,_l(4194308,4,o0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return _l(4194308,4,t,e)},useInsertionEffect:function(t,e){return _l(4,2,t,e)},useMemo:function(t,e){var n=yi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=yi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Ty.bind(null,bt,t),[i.memoizedState,t]},useRef:function(t){var e=yi();return t={current:t},e.memoizedState=t},useState:Ih,useDebugValue:Af,useDeferredValue:function(t){return yi().memoizedState=t},useTransition:function(){var t=Ih(!1),e=t[0];return t=wy.bind(null,t[1]),yi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=bt,r=yi();if(Mt){if(n===void 0)throw Error(de(407));n=n()}else{if(n=e(),Zt===null)throw Error(de(349));Wr&30||Jg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Nh(e0.bind(null,i,s,t),[t]),i.flags|=2048,ra(9,Qg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=yi(),e=Zt.identifierPrefix;if(Mt){var n=Ii,i=Ui;n=(i&~(1<<32-fi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=na++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Ey++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Ry={readContext:Zn,useCallback:l0,useContext:Zn,useEffect:Tf,useImperativeHandle:a0,useInsertionEffect:r0,useLayoutEffect:s0,useMemo:c0,useReducer:Yc,useRef:i0,useState:function(){return Yc(ia)},useDebugValue:Af,useDeferredValue:function(t){var e=Jn();return u0(e,Bt.memoizedState,t)},useTransition:function(){var t=Yc(ia)[0],e=Jn().memoizedState;return[t,e]},useMutableSource:Kg,useSyncExternalStore:Zg,useId:d0,unstable_isNewReconciler:!1},Cy={readContext:Zn,useCallback:l0,useContext:Zn,useEffect:Tf,useImperativeHandle:a0,useInsertionEffect:r0,useLayoutEffect:s0,useMemo:c0,useReducer:qc,useRef:i0,useState:function(){return qc(ia)},useDebugValue:Af,useDeferredValue:function(t){var e=Jn();return Bt===null?e.memoizedState=t:u0(e,Bt.memoizedState,t)},useTransition:function(){var t=qc(ia)[0],e=Jn().memoizedState;return[t,e]},useMutableSource:Kg,useSyncExternalStore:Zg,useId:d0,unstable_isNewReconciler:!1};function oi(t,e){if(t&&t.defaultProps){e=Rt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function hd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Rt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var uc={isMounted:function(t){return(t=t._reactInternals)?$r(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=vn(),r=ur(t),s=Fi(i,r);s.payload=e,n!=null&&(s.callback=n),e=lr(t,s,r),e!==null&&(hi(e,t,r,i),gl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=vn(),r=ur(t),s=Fi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=lr(t,s,r),e!==null&&(hi(e,t,r,i),gl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=vn(),i=ur(t),r=Fi(n,i);r.tag=2,e!=null&&(r.callback=e),e=lr(t,r,i),e!==null&&(hi(e,t,i,n),gl(e,t,i))}};function Fh(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ko(n,i)||!Ko(r,s):!0}function m0(t,e,n){var i=!1,r=yr,s=e.contextType;return typeof s=="object"&&s!==null?s=Zn(s):(r=An(e)?Gr:dn.current,i=e.contextTypes,s=(i=i!=null)?Vs(t,r):yr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=uc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Oh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&uc.enqueueReplaceState(e,e.state,null)}function pd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},_f(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Zn(s):(s=An(e)?Gr:dn.current,r.context=Vs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(hd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&uc.enqueueReplaceState(r,r.state,null),zl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ys(t,e){try{var n="",i=e;do n+=i_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function $c(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function md(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Py=typeof WeakMap=="function"?WeakMap:Map;function g0(t,e,n){n=Fi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Wl||(Wl=!0,Td=i),md(t,e)},n}function v0(t,e,n){n=Fi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){md(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){md(t,e),typeof i!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function kh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Py;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Wy.bind(null,t,e,n),e.then(t,t))}function zh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Bh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Fi(-1,1),e.tag=2,lr(n,e,1))),n.lanes|=1),t)}var Ly=Gi.ReactCurrentOwner,wn=!1;function mn(t,e,n,i){e.child=t===null?jg(e,null,n,i):Xs(e,t.child,n,i)}function Hh(t,e,n,i,r){n=n.render;var s=e.ref;return Os(e,r),i=Ef(t,e,n,i,s,r),n=wf(),t!==null&&!wn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Bi(t,e,r)):(Mt&&n&&df(e),e.flags|=1,mn(t,e,i,r),e.child)}function Gh(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!If(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,_0(t,e,s,i,r)):(t=Ml(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ko,n(o,i)&&t.ref===e.ref)return Bi(t,e,r)}return e.flags|=1,t=dr(s,i),t.ref=e.ref,t.return=e,e.child=t}function _0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ko(s,i)&&t.ref===e.ref)if(wn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(wn=!0);else return e.lanes=t.lanes,Bi(t,e,r)}return gd(t,e,n,i,r)}function y0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},gt(Ps,Un),Un|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,gt(Ps,Un),Un|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,gt(Ps,Un),Un|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,gt(Ps,Un),Un|=i;return mn(t,e,r,n),e.child}function x0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function gd(t,e,n,i,r){var s=An(n)?Gr:dn.current;return s=Vs(e,s),Os(e,r),n=Ef(t,e,n,i,s,r),i=wf(),t!==null&&!wn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Bi(t,e,r)):(Mt&&i&&df(e),e.flags|=1,mn(t,e,n,r),e.child)}function Vh(t,e,n,i,r){if(An(n)){var s=!0;Il(e)}else s=!1;if(Os(e,r),e.stateNode===null)yl(t,e),m0(e,n,i),pd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Zn(c):(c=An(n)?Gr:dn.current,c=Vs(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Oh(e,o,i,c),Zi=!1;var h=e.memoizedState;o.state=h,zl(e,i,o,r),l=e.memoizedState,a!==i||h!==l||Tn.current||Zi?(typeof d=="function"&&(hd(e,n,d,i),l=e.memoizedState),(a=Zi||Fh(e,n,a,i,h,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,qg(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:oi(e.type,a),o.props=c,f=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Zn(l):(l=An(n)?Gr:dn.current,l=Vs(e,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&Oh(e,o,i,l),Zi=!1,h=e.memoizedState,o.state=h,zl(e,i,o,r);var y=e.memoizedState;a!==f||h!==y||Tn.current||Zi?(typeof g=="function"&&(hd(e,n,g,i),y=e.memoizedState),(c=Zi||Fh(e,n,c,i,h,y,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),o.props=i,o.state=y,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return vd(t,e,n,i,s,r)}function vd(t,e,n,i,r,s){x0(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Rh(e,n,!1),Bi(t,e,s);i=e.stateNode,Ly.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Xs(e,t.child,null,s),e.child=Xs(e,null,a,s)):mn(t,e,a,s),e.memoizedState=i.state,r&&Rh(e,n,!0),e.child}function S0(t){var e=t.stateNode;e.pendingContext?bh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&bh(t,e.context,!1),yf(t,e.containerInfo)}function Wh(t,e,n,i,r){return Ws(),hf(r),e.flags|=256,mn(t,e,n,i),e.child}var _d={dehydrated:null,treeContext:null,retryLane:0};function yd(t){return{baseLanes:t,cachePool:null,transitions:null}}function M0(t,e,n){var i=e.pendingProps,r=At.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),gt(At,r&1),t===null)return dd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=hc(o,i,0,null),t=kr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=yd(n),e.memoizedState=_d,t):bf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Dy(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=dr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=dr(a,s):(s=kr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?yd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=_d,i}return s=t.child,t=s.sibling,i=dr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function bf(t,e){return e=hc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Da(t,e,n,i){return i!==null&&hf(i),Xs(e,t.child,null,n),t=bf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Dy(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=$c(Error(de(422))),Da(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=hc({mode:"visible",children:i.children},r,0,null),s=kr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Xs(e,t.child,null,o),e.child.memoizedState=yd(o),e.memoizedState=_d,s);if(!(e.mode&1))return Da(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(de(419)),i=$c(s,i,void 0),Da(t,e,o,i)}if(a=(o&t.childLanes)!==0,wn||a){if(i=Zt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,zi(t,r),hi(i,t,r,-1))}return Uf(),i=$c(Error(de(421))),Da(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Xy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Nn=ar(r.nextSibling),Fn=e,Mt=!0,ci=null,t!==null&&(Vn[Wn++]=Ui,Vn[Wn++]=Ii,Vn[Wn++]=Vr,Ui=t.id,Ii=t.overflow,Vr=e),e=bf(e,i.children),e.flags|=4096,e)}function Xh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),fd(t.return,e,n)}function Kc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function E0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(mn(t,e,i.children,n),i=At.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Xh(t,n,e);else if(t.tag===19)Xh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(gt(At,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Bl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Kc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Bl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Kc(e,!0,n,null,s);break;case"together":Kc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function yl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Bi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Xr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(de(153));if(e.child!==null){for(t=e.child,n=dr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=dr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Uy(t,e,n){switch(e.tag){case 3:S0(e),Ws();break;case 5:$g(e);break;case 1:An(e.type)&&Il(e);break;case 4:yf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;gt(Ol,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(gt(At,At.current&1),e.flags|=128,null):n&e.child.childLanes?M0(t,e,n):(gt(At,At.current&1),t=Bi(t,e,n),t!==null?t.sibling:null);gt(At,At.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return E0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),gt(At,At.current),i)break;return null;case 22:case 23:return e.lanes=0,y0(t,e,n)}return Bi(t,e,n)}var w0,xd,T0,A0;w0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xd=function(){};T0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Fr(Ei.current);var s=null;switch(n){case"input":r=Gu(t,r),i=Gu(t,i),s=[];break;case"select":r=Rt({},r,{value:void 0}),i=Rt({},i,{value:void 0}),s=[];break;case"textarea":r=Xu(t,r),i=Xu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Dl)}Yu(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Vo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Vo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&vt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};A0=function(t,e,n,i){n!==i&&(e.flags|=4)};function go(t,e){if(!Mt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function on(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Iy(t,e,n){var i=e.pendingProps;switch(ff(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return on(e),null;case 1:return An(e.type)&&Ul(),on(e),null;case 3:return i=e.stateNode,js(),yt(Tn),yt(dn),Sf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Pa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ci!==null&&(Rd(ci),ci=null))),xd(t,e),on(e),null;case 5:xf(e);var r=Fr(ta.current);if(n=e.type,t!==null&&e.stateNode!=null)T0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(de(166));return on(e),null}if(t=Fr(Ei.current),Pa(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Si]=e,i[Qo]=s,t=(e.mode&1)!==0,n){case"dialog":vt("cancel",i),vt("close",i);break;case"iframe":case"object":case"embed":vt("load",i);break;case"video":case"audio":for(r=0;r<Po.length;r++)vt(Po[r],i);break;case"source":vt("error",i);break;case"img":case"image":case"link":vt("error",i),vt("load",i);break;case"details":vt("toggle",i);break;case"input":eh(i,s),vt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},vt("invalid",i);break;case"textarea":nh(i,s),vt("invalid",i)}Yu(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ca(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ca(i.textContent,a,t),r=["children",""+a]):Vo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&vt("scroll",i)}switch(n){case"input":Sa(i),th(i,s,!0);break;case"textarea":Sa(i),ih(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Dl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=eg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Si]=e,t[Qo]=i,w0(t,e,!1,!1),e.stateNode=t;e:{switch(o=qu(n,i),n){case"dialog":vt("cancel",t),vt("close",t),r=i;break;case"iframe":case"object":case"embed":vt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Po.length;r++)vt(Po[r],t);r=i;break;case"source":vt("error",t),r=i;break;case"img":case"image":case"link":vt("error",t),vt("load",t),r=i;break;case"details":vt("toggle",t),r=i;break;case"input":eh(t,i),r=Gu(t,i),vt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Rt({},i,{value:void 0}),vt("invalid",t);break;case"textarea":nh(t,i),r=Xu(t,i),vt("invalid",t);break;default:r=i}Yu(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?ig(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&tg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Wo(t,l):typeof l=="number"&&Wo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Vo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&vt("scroll",t):l!=null&&Kd(t,s,l,o))}switch(n){case"input":Sa(t),th(t,i,!1);break;case"textarea":Sa(t),ih(t);break;case"option":i.value!=null&&t.setAttribute("value",""+_r(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Us(t,!!i.multiple,s,!1):i.defaultValue!=null&&Us(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Dl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return on(e),null;case 6:if(t&&e.stateNode!=null)A0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(de(166));if(n=Fr(ta.current),Fr(Ei.current),Pa(e)){if(i=e.stateNode,n=e.memoizedProps,i[Si]=e,(s=i.nodeValue!==n)&&(t=Fn,t!==null))switch(t.tag){case 3:Ca(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ca(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Si]=e,e.stateNode=i}return on(e),null;case 13:if(yt(At),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Mt&&Nn!==null&&e.mode&1&&!(e.flags&128))Wg(),Ws(),e.flags|=98560,s=!1;else if(s=Pa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(de(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(de(317));s[Si]=e}else Ws(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;on(e),s=!1}else ci!==null&&(Rd(ci),ci=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||At.current&1?Ht===0&&(Ht=3):Uf())),e.updateQueue!==null&&(e.flags|=4),on(e),null);case 4:return js(),xd(t,e),t===null&&Zo(e.stateNode.containerInfo),on(e),null;case 10:return gf(e.type._context),on(e),null;case 17:return An(e.type)&&Ul(),on(e),null;case 19:if(yt(At),s=e.memoizedState,s===null)return on(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)go(s,!1);else{if(Ht!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Bl(t),o!==null){for(e.flags|=128,go(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return gt(At,At.current&1|2),e.child}t=t.sibling}s.tail!==null&&Nt()>qs&&(e.flags|=128,i=!0,go(s,!1),e.lanes=4194304)}else{if(!i)if(t=Bl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),go(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Mt)return on(e),null}else 2*Nt()-s.renderingStartTime>qs&&n!==1073741824&&(e.flags|=128,i=!0,go(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Nt(),e.sibling=null,n=At.current,gt(At,i?n&1|2:n&1),e):(on(e),null);case 22:case 23:return Df(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Un&1073741824&&(on(e),e.subtreeFlags&6&&(e.flags|=8192)):on(e),null;case 24:return null;case 25:return null}throw Error(de(156,e.tag))}function Ny(t,e){switch(ff(e),e.tag){case 1:return An(e.type)&&Ul(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return js(),yt(Tn),yt(dn),Sf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return xf(e),null;case 13:if(yt(At),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(de(340));Ws()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return yt(At),null;case 4:return js(),null;case 10:return gf(e.type._context),null;case 22:case 23:return Df(),null;case 24:return null;default:return null}}var Ua=!1,cn=!1,Fy=typeof WeakSet=="function"?WeakSet:Set,Te=null;function Cs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Ct(t,e,i)}else n.current=null}function Sd(t,e,n){try{n()}catch(i){Ct(t,e,i)}}var jh=!1;function Oy(t,e){if(rd=Cl,t=Lg(),uf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,f=t,h=null;t:for(;;){for(var g;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)h=f,f=g;for(;;){if(f===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++d===i&&(l=o),(g=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(sd={focusedElem:t,selectionRange:n},Cl=!1,Te=e;Te!==null;)if(e=Te,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Te=t;else for(;Te!==null;){e=Te;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,p=y.memoizedState,u=e.stateNode,m=u.getSnapshotBeforeUpdate(e.elementType===e.type?_:oi(e.type,_),p);u.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(de(163))}}catch(M){Ct(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,Te=t;break}Te=e.return}return y=jh,jh=!1,y}function zo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Sd(e,n,s)}r=r.next}while(r!==i)}}function dc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Md(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function b0(t){var e=t.alternate;e!==null&&(t.alternate=null,b0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Si],delete e[Qo],delete e[ld],delete e[yy],delete e[xy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function R0(t){return t.tag===5||t.tag===3||t.tag===4}function Yh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||R0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ed(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Dl));else if(i!==4&&(t=t.child,t!==null))for(Ed(t,e,n),t=t.sibling;t!==null;)Ed(t,e,n),t=t.sibling}function wd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(wd(t,e,n),t=t.sibling;t!==null;)wd(t,e,n),t=t.sibling}var Qt=null,ai=!1;function Vi(t,e,n){for(n=n.child;n!==null;)C0(t,e,n),n=n.sibling}function C0(t,e,n){if(Mi&&typeof Mi.onCommitFiberUnmount=="function")try{Mi.onCommitFiberUnmount(ic,n)}catch{}switch(n.tag){case 5:cn||Cs(n,e);case 6:var i=Qt,r=ai;Qt=null,Vi(t,e,n),Qt=i,ai=r,Qt!==null&&(ai?(t=Qt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Qt.removeChild(n.stateNode));break;case 18:Qt!==null&&(ai?(t=Qt,n=n.stateNode,t.nodeType===8?Vc(t.parentNode,n):t.nodeType===1&&Vc(t,n),qo(t)):Vc(Qt,n.stateNode));break;case 4:i=Qt,r=ai,Qt=n.stateNode.containerInfo,ai=!0,Vi(t,e,n),Qt=i,ai=r;break;case 0:case 11:case 14:case 15:if(!cn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Sd(n,e,o),r=r.next}while(r!==i)}Vi(t,e,n);break;case 1:if(!cn&&(Cs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Ct(n,e,a)}Vi(t,e,n);break;case 21:Vi(t,e,n);break;case 22:n.mode&1?(cn=(i=cn)||n.memoizedState!==null,Vi(t,e,n),cn=i):Vi(t,e,n);break;default:Vi(t,e,n)}}function qh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Fy),e.forEach(function(i){var r=jy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function ti(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Qt=a.stateNode,ai=!1;break e;case 3:Qt=a.stateNode.containerInfo,ai=!0;break e;case 4:Qt=a.stateNode.containerInfo,ai=!0;break e}a=a.return}if(Qt===null)throw Error(de(160));C0(s,o,r),Qt=null,ai=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Ct(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)P0(e,t),e=e.sibling}function P0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ti(e,t),_i(t),i&4){try{zo(3,t,t.return),dc(3,t)}catch(_){Ct(t,t.return,_)}try{zo(5,t,t.return)}catch(_){Ct(t,t.return,_)}}break;case 1:ti(e,t),_i(t),i&512&&n!==null&&Cs(n,n.return);break;case 5:if(ti(e,t),_i(t),i&512&&n!==null&&Cs(n,n.return),t.flags&32){var r=t.stateNode;try{Wo(r,"")}catch(_){Ct(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Jm(r,s),qu(a,o);var c=qu(a,s);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?ig(r,f):d==="dangerouslySetInnerHTML"?tg(r,f):d==="children"?Wo(r,f):Kd(r,d,f,c)}switch(a){case"input":Vu(r,s);break;case"textarea":Qm(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Us(r,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?Us(r,!!s.multiple,s.defaultValue,!0):Us(r,!!s.multiple,s.multiple?[]:"",!1))}r[Qo]=s}catch(_){Ct(t,t.return,_)}}break;case 6:if(ti(e,t),_i(t),i&4){if(t.stateNode===null)throw Error(de(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(_){Ct(t,t.return,_)}}break;case 3:if(ti(e,t),_i(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{qo(e.containerInfo)}catch(_){Ct(t,t.return,_)}break;case 4:ti(e,t),_i(t);break;case 13:ti(e,t),_i(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Pf=Nt())),i&4&&qh(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(cn=(c=cn)||d,ti(e,t),cn=c):ti(e,t),_i(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(Te=t,d=t.child;d!==null;){for(f=Te=d;Te!==null;){switch(h=Te,g=h.child,h.tag){case 0:case 11:case 14:case 15:zo(4,h,h.return);break;case 1:Cs(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(_){Ct(i,n,_)}}break;case 5:Cs(h,h.return);break;case 22:if(h.memoizedState!==null){Kh(f);continue}}g!==null?(g.return=h,Te=g):Kh(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=ng("display",o))}catch(_){Ct(t,t.return,_)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(_){Ct(t,t.return,_)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ti(e,t),_i(t),i&4&&qh(t);break;case 21:break;default:ti(e,t),_i(t)}}function _i(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(R0(n)){var i=n;break e}n=n.return}throw Error(de(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Wo(r,""),i.flags&=-33);var s=Yh(t);wd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Yh(t);Ed(t,a,o);break;default:throw Error(de(161))}}catch(l){Ct(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ky(t,e,n){Te=t,L0(t)}function L0(t,e,n){for(var i=(t.mode&1)!==0;Te!==null;){var r=Te,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ua;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||cn;a=Ua;var c=cn;if(Ua=o,(cn=l)&&!c)for(Te=r;Te!==null;)o=Te,l=o.child,o.tag===22&&o.memoizedState!==null?Zh(r):l!==null?(l.return=o,Te=l):Zh(r);for(;s!==null;)Te=s,L0(s),s=s.sibling;Te=r,Ua=a,cn=c}$h(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Te=s):$h(t)}}function $h(t){for(;Te!==null;){var e=Te;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:cn||dc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!cn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:oi(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Uh(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Uh(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&qo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(de(163))}cn||e.flags&512&&Md(e)}catch(h){Ct(e,e.return,h)}}if(e===t){Te=null;break}if(n=e.sibling,n!==null){n.return=e.return,Te=n;break}Te=e.return}}function Kh(t){for(;Te!==null;){var e=Te;if(e===t){Te=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Te=n;break}Te=e.return}}function Zh(t){for(;Te!==null;){var e=Te;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{dc(4,e)}catch(l){Ct(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Ct(e,r,l)}}var s=e.return;try{Md(e)}catch(l){Ct(e,s,l)}break;case 5:var o=e.return;try{Md(e)}catch(l){Ct(e,o,l)}}}catch(l){Ct(e,e.return,l)}if(e===t){Te=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Te=a;break}Te=e.return}}var zy=Math.ceil,Vl=Gi.ReactCurrentDispatcher,Rf=Gi.ReactCurrentOwner,Kn=Gi.ReactCurrentBatchConfig,tt=0,Zt=null,kt=null,nn=0,Un=0,Ps=Sr(0),Ht=0,sa=null,Xr=0,fc=0,Cf=0,Bo=null,Sn=null,Pf=0,qs=1/0,Pi=null,Wl=!1,Td=null,cr=null,Ia=!1,tr=null,Xl=0,Ho=0,Ad=null,xl=-1,Sl=0;function vn(){return tt&6?Nt():xl!==-1?xl:xl=Nt()}function ur(t){return t.mode&1?tt&2&&nn!==0?nn&-nn:My.transition!==null?(Sl===0&&(Sl=mg()),Sl):(t=ut,t!==0||(t=window.event,t=t===void 0?16:Mg(t.type)),t):1}function hi(t,e,n,i){if(50<Ho)throw Ho=0,Ad=null,Error(de(185));ca(t,n,i),(!(tt&2)||t!==Zt)&&(t===Zt&&(!(tt&2)&&(fc|=n),Ht===4&&Qi(t,nn)),bn(t,i),n===1&&tt===0&&!(e.mode&1)&&(qs=Nt()+500,lc&&Mr()))}function bn(t,e){var n=t.callbackNode;M_(t,e);var i=Rl(t,t===Zt?nn:0);if(i===0)n!==null&&oh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&oh(n),e===1)t.tag===0?Sy(Jh.bind(null,t)):Hg(Jh.bind(null,t)),vy(function(){!(tt&6)&&Mr()}),n=null;else{switch(gg(i)){case 1:n=tf;break;case 4:n=hg;break;case 16:n=bl;break;case 536870912:n=pg;break;default:n=bl}n=z0(n,D0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function D0(t,e){if(xl=-1,Sl=0,tt&6)throw Error(de(327));var n=t.callbackNode;if(ks()&&t.callbackNode!==n)return null;var i=Rl(t,t===Zt?nn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=jl(t,i);else{e=i;var r=tt;tt|=2;var s=I0();(Zt!==t||nn!==e)&&(Pi=null,qs=Nt()+500,Or(t,e));do try{Gy();break}catch(a){U0(t,a)}while(!0);mf(),Vl.current=s,tt=r,kt!==null?e=0:(Zt=null,nn=0,e=Ht)}if(e!==0){if(e===2&&(r=Qu(t),r!==0&&(i=r,e=bd(t,r))),e===1)throw n=sa,Or(t,0),Qi(t,i),bn(t,Nt()),n;if(e===6)Qi(t,i);else{if(r=t.current.alternate,!(i&30)&&!By(r)&&(e=jl(t,i),e===2&&(s=Qu(t),s!==0&&(i=s,e=bd(t,s))),e===1))throw n=sa,Or(t,0),Qi(t,i),bn(t,Nt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(de(345));case 2:Cr(t,Sn,Pi);break;case 3:if(Qi(t,i),(i&130023424)===i&&(e=Pf+500-Nt(),10<e)){if(Rl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){vn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=ad(Cr.bind(null,t,Sn,Pi),e);break}Cr(t,Sn,Pi);break;case 4:if(Qi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-fi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Nt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*zy(i/1960))-i,10<i){t.timeoutHandle=ad(Cr.bind(null,t,Sn,Pi),i);break}Cr(t,Sn,Pi);break;case 5:Cr(t,Sn,Pi);break;default:throw Error(de(329))}}}return bn(t,Nt()),t.callbackNode===n?D0.bind(null,t):null}function bd(t,e){var n=Bo;return t.current.memoizedState.isDehydrated&&(Or(t,e).flags|=256),t=jl(t,e),t!==2&&(e=Sn,Sn=n,e!==null&&Rd(e)),t}function Rd(t){Sn===null?Sn=t:Sn.push.apply(Sn,t)}function By(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!mi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Qi(t,e){for(e&=~Cf,e&=~fc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-fi(e),i=1<<n;t[n]=-1,e&=~i}}function Jh(t){if(tt&6)throw Error(de(327));ks();var e=Rl(t,0);if(!(e&1))return bn(t,Nt()),null;var n=jl(t,e);if(t.tag!==0&&n===2){var i=Qu(t);i!==0&&(e=i,n=bd(t,i))}if(n===1)throw n=sa,Or(t,0),Qi(t,e),bn(t,Nt()),n;if(n===6)throw Error(de(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Cr(t,Sn,Pi),bn(t,Nt()),null}function Lf(t,e){var n=tt;tt|=1;try{return t(e)}finally{tt=n,tt===0&&(qs=Nt()+500,lc&&Mr())}}function jr(t){tr!==null&&tr.tag===0&&!(tt&6)&&ks();var e=tt;tt|=1;var n=Kn.transition,i=ut;try{if(Kn.transition=null,ut=1,t)return t()}finally{ut=i,Kn.transition=n,tt=e,!(tt&6)&&Mr()}}function Df(){Un=Ps.current,yt(Ps)}function Or(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,gy(n)),kt!==null)for(n=kt.return;n!==null;){var i=n;switch(ff(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ul();break;case 3:js(),yt(Tn),yt(dn),Sf();break;case 5:xf(i);break;case 4:js();break;case 13:yt(At);break;case 19:yt(At);break;case 10:gf(i.type._context);break;case 22:case 23:Df()}n=n.return}if(Zt=t,kt=t=dr(t.current,null),nn=Un=e,Ht=0,sa=null,Cf=fc=Xr=0,Sn=Bo=null,Nr!==null){for(e=0;e<Nr.length;e++)if(n=Nr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Nr=null}return t}function U0(t,e){do{var n=kt;try{if(mf(),vl.current=Gl,Hl){for(var i=bt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Hl=!1}if(Wr=0,Kt=Bt=bt=null,ko=!1,na=0,Rf.current=null,n===null||n.return===null){Ht=1,sa=e,kt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=nn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=zh(o);if(g!==null){g.flags&=-257,Bh(g,o,a,s,e),g.mode&1&&kh(s,c,e),e=g,l=c;var y=e.updateQueue;if(y===null){var _=new Set;_.add(l),e.updateQueue=_}else y.add(l);break e}else{if(!(e&1)){kh(s,c,e),Uf();break e}l=Error(de(426))}}else if(Mt&&a.mode&1){var p=zh(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Bh(p,o,a,s,e),hf(Ys(l,a));break e}}s=l=Ys(l,a),Ht!==4&&(Ht=2),Bo===null?Bo=[s]:Bo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=g0(s,l,e);Dh(s,u);break e;case 1:a=l;var m=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(cr===null||!cr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=v0(s,a,e);Dh(s,M);break e}}s=s.return}while(s!==null)}F0(n)}catch(b){e=b,kt===n&&n!==null&&(kt=n=n.return);continue}break}while(!0)}function I0(){var t=Vl.current;return Vl.current=Gl,t===null?Gl:t}function Uf(){(Ht===0||Ht===3||Ht===2)&&(Ht=4),Zt===null||!(Xr&268435455)&&!(fc&268435455)||Qi(Zt,nn)}function jl(t,e){var n=tt;tt|=2;var i=I0();(Zt!==t||nn!==e)&&(Pi=null,Or(t,e));do try{Hy();break}catch(r){U0(t,r)}while(!0);if(mf(),tt=n,Vl.current=i,kt!==null)throw Error(de(261));return Zt=null,nn=0,Ht}function Hy(){for(;kt!==null;)N0(kt)}function Gy(){for(;kt!==null&&!h_();)N0(kt)}function N0(t){var e=k0(t.alternate,t,Un);t.memoizedProps=t.pendingProps,e===null?F0(t):kt=e,Rf.current=null}function F0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Ny(n,e),n!==null){n.flags&=32767,kt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ht=6,kt=null;return}}else if(n=Iy(n,e,Un),n!==null){kt=n;return}if(e=e.sibling,e!==null){kt=e;return}kt=e=t}while(e!==null);Ht===0&&(Ht=5)}function Cr(t,e,n){var i=ut,r=Kn.transition;try{Kn.transition=null,ut=1,Vy(t,e,n,i)}finally{Kn.transition=r,ut=i}return null}function Vy(t,e,n,i){do ks();while(tr!==null);if(tt&6)throw Error(de(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(de(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(E_(t,s),t===Zt&&(kt=Zt=null,nn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ia||(Ia=!0,z0(bl,function(){return ks(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Kn.transition,Kn.transition=null;var o=ut;ut=1;var a=tt;tt|=4,Rf.current=null,Oy(t,n),P0(n,t),cy(sd),Cl=!!rd,sd=rd=null,t.current=n,ky(n),p_(),tt=a,ut=o,Kn.transition=s}else t.current=n;if(Ia&&(Ia=!1,tr=t,Xl=r),s=t.pendingLanes,s===0&&(cr=null),v_(n.stateNode),bn(t,Nt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Wl)throw Wl=!1,t=Td,Td=null,t;return Xl&1&&t.tag!==0&&ks(),s=t.pendingLanes,s&1?t===Ad?Ho++:(Ho=0,Ad=t):Ho=0,Mr(),null}function ks(){if(tr!==null){var t=gg(Xl),e=Kn.transition,n=ut;try{if(Kn.transition=null,ut=16>t?16:t,tr===null)var i=!1;else{if(t=tr,tr=null,Xl=0,tt&6)throw Error(de(331));var r=tt;for(tt|=4,Te=t.current;Te!==null;){var s=Te,o=s.child;if(Te.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Te=c;Te!==null;){var d=Te;switch(d.tag){case 0:case 11:case 15:zo(8,d,s)}var f=d.child;if(f!==null)f.return=d,Te=f;else for(;Te!==null;){d=Te;var h=d.sibling,g=d.return;if(b0(d),d===c){Te=null;break}if(h!==null){h.return=g,Te=h;break}Te=g}}}var y=s.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var p=_.sibling;_.sibling=null,_=p}while(_!==null)}}Te=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Te=o;else e:for(;Te!==null;){if(s=Te,s.flags&2048)switch(s.tag){case 0:case 11:case 15:zo(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,Te=u;break e}Te=s.return}}var m=t.current;for(Te=m;Te!==null;){o=Te;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,Te=v;else e:for(o=m;Te!==null;){if(a=Te,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:dc(9,a)}}catch(b){Ct(a,a.return,b)}if(a===o){Te=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,Te=M;break e}Te=a.return}}if(tt=r,Mr(),Mi&&typeof Mi.onPostCommitFiberRoot=="function")try{Mi.onPostCommitFiberRoot(ic,t)}catch{}i=!0}return i}finally{ut=n,Kn.transition=e}}return!1}function Qh(t,e,n){e=Ys(n,e),e=g0(t,e,1),t=lr(t,e,1),e=vn(),t!==null&&(ca(t,1,e),bn(t,e))}function Ct(t,e,n){if(t.tag===3)Qh(t,t,n);else for(;e!==null;){if(e.tag===3){Qh(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(cr===null||!cr.has(i))){t=Ys(n,t),t=v0(e,t,1),e=lr(e,t,1),t=vn(),e!==null&&(ca(e,1,t),bn(e,t));break}}e=e.return}}function Wy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=vn(),t.pingedLanes|=t.suspendedLanes&n,Zt===t&&(nn&n)===n&&(Ht===4||Ht===3&&(nn&130023424)===nn&&500>Nt()-Pf?Or(t,0):Cf|=n),bn(t,e)}function O0(t,e){e===0&&(t.mode&1?(e=wa,wa<<=1,!(wa&130023424)&&(wa=4194304)):e=1);var n=vn();t=zi(t,e),t!==null&&(ca(t,e,n),bn(t,n))}function Xy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),O0(t,n)}function jy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(de(314))}i!==null&&i.delete(e),O0(t,n)}var k0;k0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Tn.current)wn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return wn=!1,Uy(t,e,n);wn=!!(t.flags&131072)}else wn=!1,Mt&&e.flags&1048576&&Gg(e,Fl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;yl(t,e),t=e.pendingProps;var r=Vs(e,dn.current);Os(e,n),r=Ef(null,e,i,t,r,n);var s=wf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,An(i)?(s=!0,Il(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,_f(e),r.updater=uc,e.stateNode=r,r._reactInternals=e,pd(e,i,t,n),e=vd(null,e,i,!0,s,n)):(e.tag=0,Mt&&s&&df(e),mn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(yl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=qy(i),t=oi(i,t),r){case 0:e=gd(null,e,i,t,n);break e;case 1:e=Vh(null,e,i,t,n);break e;case 11:e=Hh(null,e,i,t,n);break e;case 14:e=Gh(null,e,i,oi(i.type,t),n);break e}throw Error(de(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:oi(i,r),gd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:oi(i,r),Vh(t,e,i,r,n);case 3:e:{if(S0(e),t===null)throw Error(de(387));i=e.pendingProps,s=e.memoizedState,r=s.element,qg(t,e),zl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ys(Error(de(423)),e),e=Wh(t,e,i,n,r);break e}else if(i!==r){r=Ys(Error(de(424)),e),e=Wh(t,e,i,n,r);break e}else for(Nn=ar(e.stateNode.containerInfo.firstChild),Fn=e,Mt=!0,ci=null,n=jg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ws(),i===r){e=Bi(t,e,n);break e}mn(t,e,i,n)}e=e.child}return e;case 5:return $g(e),t===null&&dd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,od(i,r)?o=null:s!==null&&od(i,s)&&(e.flags|=32),x0(t,e),mn(t,e,o,n),e.child;case 6:return t===null&&dd(e),null;case 13:return M0(t,e,n);case 4:return yf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Xs(e,null,i,n):mn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:oi(i,r),Hh(t,e,i,r,n);case 7:return mn(t,e,e.pendingProps,n),e.child;case 8:return mn(t,e,e.pendingProps.children,n),e.child;case 12:return mn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,gt(Ol,i._currentValue),i._currentValue=o,s!==null)if(mi(s.value,o)){if(s.children===r.children&&!Tn.current){e=Bi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Fi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),fd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(de(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),fd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}mn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Os(e,n),r=Zn(r),i=i(r),e.flags|=1,mn(t,e,i,n),e.child;case 14:return i=e.type,r=oi(i,e.pendingProps),r=oi(i.type,r),Gh(t,e,i,r,n);case 15:return _0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:oi(i,r),yl(t,e),e.tag=1,An(i)?(t=!0,Il(e)):t=!1,Os(e,n),m0(e,i,r),pd(e,i,r,n),vd(null,e,i,!0,t,n);case 19:return E0(t,e,n);case 22:return y0(t,e,n)}throw Error(de(156,e.tag))};function z0(t,e){return fg(t,e)}function Yy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(t,e,n,i){return new Yy(t,e,n,i)}function If(t){return t=t.prototype,!(!t||!t.isReactComponent)}function qy(t){if(typeof t=="function")return If(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Jd)return 11;if(t===Qd)return 14}return 2}function dr(t,e){var n=t.alternate;return n===null?(n=$n(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ml(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")If(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case xs:return kr(n.children,r,s,e);case Zd:o=8,r|=8;break;case ku:return t=$n(12,n,e,r|2),t.elementType=ku,t.lanes=s,t;case zu:return t=$n(13,n,e,r),t.elementType=zu,t.lanes=s,t;case Bu:return t=$n(19,n,e,r),t.elementType=Bu,t.lanes=s,t;case $m:return hc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ym:o=10;break e;case qm:o=9;break e;case Jd:o=11;break e;case Qd:o=14;break e;case Ki:o=16,i=null;break e}throw Error(de(130,t==null?t:typeof t,""))}return e=$n(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function kr(t,e,n,i){return t=$n(7,t,i,e),t.lanes=n,t}function hc(t,e,n,i){return t=$n(22,t,i,e),t.elementType=$m,t.lanes=n,t.stateNode={isHidden:!1},t}function Zc(t,e,n){return t=$n(6,t,null,e),t.lanes=n,t}function Jc(t,e,n){return e=$n(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function $y(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Dc(0),this.expirationTimes=Dc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Nf(t,e,n,i,r,s,o,a,l){return t=new $y(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=$n(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_f(s),t}function Ky(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ys,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function B0(t){if(!t)return yr;t=t._reactInternals;e:{if($r(t)!==t||t.tag!==1)throw Error(de(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(An(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(de(171))}if(t.tag===1){var n=t.type;if(An(n))return Bg(t,n,e)}return e}function H0(t,e,n,i,r,s,o,a,l){return t=Nf(n,i,!0,t,r,s,o,a,l),t.context=B0(null),n=t.current,i=vn(),r=ur(n),s=Fi(i,r),s.callback=e??null,lr(n,s,r),t.current.lanes=r,ca(t,r,i),bn(t,i),t}function pc(t,e,n,i){var r=e.current,s=vn(),o=ur(r);return n=B0(n),e.context===null?e.context=n:e.pendingContext=n,e=Fi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=lr(r,e,o),t!==null&&(hi(t,r,o,s),gl(t,r,o)),o}function Yl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ep(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ff(t,e){ep(t,e),(t=t.alternate)&&ep(t,e)}function Zy(){return null}var G0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Of(t){this._internalRoot=t}mc.prototype.render=Of.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(de(409));pc(t,e,null,null)};mc.prototype.unmount=Of.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;jr(function(){pc(null,t,null,null)}),e[ki]=null}};function mc(t){this._internalRoot=t}mc.prototype.unstable_scheduleHydration=function(t){if(t){var e=yg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ji.length&&e!==0&&e<Ji[n].priority;n++);Ji.splice(n,0,t),n===0&&Sg(t)}};function kf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function gc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function tp(){}function Jy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Yl(o);s.call(c)}}var o=H0(e,i,t,0,null,!1,!1,"",tp);return t._reactRootContainer=o,t[ki]=o.current,Zo(t.nodeType===8?t.parentNode:t),jr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Yl(l);a.call(c)}}var l=Nf(t,0,!1,null,null,!1,!1,"",tp);return t._reactRootContainer=l,t[ki]=l.current,Zo(t.nodeType===8?t.parentNode:t),jr(function(){pc(e,l,n,i)}),l}function vc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Yl(o);a.call(l)}}pc(e,o,t,r)}else o=Jy(n,e,t,r,i);return Yl(o)}vg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Co(e.pendingLanes);n!==0&&(nf(e,n|1),bn(e,Nt()),!(tt&6)&&(qs=Nt()+500,Mr()))}break;case 13:jr(function(){var i=zi(t,1);if(i!==null){var r=vn();hi(i,t,1,r)}}),Ff(t,1)}};rf=function(t){if(t.tag===13){var e=zi(t,134217728);if(e!==null){var n=vn();hi(e,t,134217728,n)}Ff(t,134217728)}};_g=function(t){if(t.tag===13){var e=ur(t),n=zi(t,e);if(n!==null){var i=vn();hi(n,t,e,i)}Ff(t,e)}};yg=function(){return ut};xg=function(t,e){var n=ut;try{return ut=t,e()}finally{ut=n}};Ku=function(t,e,n){switch(e){case"input":if(Vu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=ac(i);if(!r)throw Error(de(90));Zm(i),Vu(i,r)}}}break;case"textarea":Qm(t,n);break;case"select":e=n.value,e!=null&&Us(t,!!n.multiple,e,!1)}};og=Lf;ag=jr;var Qy={usingClientEntryPoint:!1,Events:[da,ws,ac,rg,sg,Lf]},vo={findFiberByHostInstance:Ir,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ex={bundleType:vo.bundleType,version:vo.version,rendererPackageName:vo.rendererPackageName,rendererConfig:vo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Gi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ug(t),t===null?null:t.stateNode},findFiberByHostInstance:vo.findFiberByHostInstance||Zy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Na=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Na.isDisabled&&Na.supportsFiber)try{ic=Na.inject(ex),Mi=Na}catch{}}kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qy;kn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!kf(e))throw Error(de(200));return Ky(t,e,null,n)};kn.createRoot=function(t,e){if(!kf(t))throw Error(de(299));var n=!1,i="",r=G0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Nf(t,1,!1,null,null,n,!1,i,r),t[ki]=e.current,Zo(t.nodeType===8?t.parentNode:t),new Of(e)};kn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(de(188)):(t=Object.keys(t).join(","),Error(de(268,t)));return t=ug(e),t=t===null?null:t.stateNode,t};kn.flushSync=function(t){return jr(t)};kn.hydrate=function(t,e,n){if(!gc(e))throw Error(de(200));return vc(null,t,e,!0,n)};kn.hydrateRoot=function(t,e,n){if(!kf(t))throw Error(de(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=G0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=H0(e,null,t,1,n??null,r,!1,s,o),t[ki]=e.current,Zo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new mc(e)};kn.render=function(t,e,n){if(!gc(e))throw Error(de(200));return vc(null,t,e,!1,n)};kn.unmountComponentAtNode=function(t){if(!gc(t))throw Error(de(40));return t._reactRootContainer?(jr(function(){vc(null,null,t,!1,function(){t._reactRootContainer=null,t[ki]=null})}),!0):!1};kn.unstable_batchedUpdates=Lf;kn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!gc(n))throw Error(de(200));if(t==null||t._reactInternals===void 0)throw Error(de(38));return vc(t,e,n,!1,i)};kn.version="18.3.1-next-f1338f8080-20240426";function V0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(V0)}catch(t){console.error(t)}}V0(),Vm.exports=kn;var tx=Vm.exports,np=tx;Fu.createRoot=np.createRoot,Fu.hydrateRoot=np.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zf="160",nx=0,ip=1,ix=2,W0=1,rx=2,Ci=3,pi=0,Rn=1,En=2,fr=0,zs=1,It=2,rp=3,sp=4,sx=5,Dr=100,ox=101,ax=102,op=103,ap=104,lx=200,cx=201,ux=202,dx=203,Cd=204,Pd=205,fx=206,hx=207,px=208,mx=209,gx=210,vx=211,_x=212,yx=213,xx=214,Sx=0,Mx=1,Ex=2,ql=3,wx=4,Tx=5,Ax=6,bx=7,X0=0,Rx=1,Cx=2,hr=0,Px=1,Lx=2,Dx=3,j0=4,Ux=5,Ix=6,Y0=300,$s=301,Ks=302,Ld=303,Dd=304,_c=306,Ud=1e3,ui=1001,Id=1002,gn=1003,lp=1004,Qc=1005,Xn=1006,Nx=1007,oa=1008,pr=1009,Fx=1010,Ox=1011,Bf=1012,q0=1013,nr=1014,ir=1015,aa=1016,$0=1017,K0=1018,zr=1020,kx=1021,di=1023,zx=1024,Bx=1025,Br=1026,Zs=1027,Hx=1028,Z0=1029,Gx=1030,J0=1031,Q0=1033,eu=33776,tu=33777,nu=33778,iu=33779,cp=35840,up=35841,dp=35842,fp=35843,ev=36196,hp=37492,pp=37496,mp=37808,gp=37809,vp=37810,_p=37811,yp=37812,xp=37813,Sp=37814,Mp=37815,Ep=37816,wp=37817,Tp=37818,Ap=37819,bp=37820,Rp=37821,ru=36492,Cp=36494,Pp=36495,Vx=36283,Lp=36284,Dp=36285,Up=36286,tv=3e3,Hr=3001,Wx=3200,Xx=3201,nv=0,jx=1,Yn="",en="srgb",Hi="srgb-linear",Hf="display-p3",yc="display-p3-linear",$l="linear",_t="srgb",Kl="rec709",Zl="p3",Qr=7680,Ip=519,Yx=512,qx=513,$x=514,iv=515,Kx=516,Zx=517,Jx=518,Qx=519,Nd=35044,Np="300 es",Fd=1035,Ni=2e3,Jl=2001;class no{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],su=Math.PI/180,Od=180/Math.PI;function mr(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(an[t&255]+an[t>>8&255]+an[t>>16&255]+an[t>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[n&63|128]+an[n>>8&255]+"-"+an[n>>16&255]+an[n>>24&255]+an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]).toLowerCase()}function Mn(t,e,n){return Math.max(e,Math.min(n,t))}function eS(t,e){return(t%e+e)%e}function ou(t,e,n){return(1-n)*t+n*e}function Fp(t){return(t&t-1)===0&&t!==0}function kd(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Di(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function pt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Xe{constructor(e=0,n=0){Xe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Mn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $e{constructor(e,n,i,r,s,o,a,l,c){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],f=i[7],h=i[2],g=i[5],y=i[8],_=r[0],p=r[3],u=r[6],m=r[1],v=r[4],M=r[7],b=r[2],T=r[5],A=r[8];return s[0]=o*_+a*m+l*b,s[3]=o*p+a*v+l*T,s[6]=o*u+a*M+l*A,s[1]=c*_+d*m+f*b,s[4]=c*p+d*v+f*T,s[7]=c*u+d*M+f*A,s[2]=h*_+g*m+y*b,s[5]=h*p+g*v+y*T,s[8]=h*u+g*M+y*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*o*d-n*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=d*o-a*c,h=a*l-d*s,g=c*s-o*l,y=n*f+i*h+r*g;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/y;return e[0]=f*_,e[1]=(r*c-d*i)*_,e[2]=(a*i-r*o)*_,e[3]=h*_,e[4]=(d*n-r*l)*_,e[5]=(r*s-a*n)*_,e[6]=g*_,e[7]=(i*l-c*n)*_,e[8]=(o*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(au.makeScale(e,n)),this}rotate(e){return this.premultiply(au.makeRotation(-e)),this}translate(e,n){return this.premultiply(au.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const au=new $e;function rv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ql(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function tS(){const t=Ql("canvas");return t.style.display="block",t}const Op={};function Go(t){t in Op||(Op[t]=!0,console.warn(t))}const kp=new $e().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),zp=new $e().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Fa={[Hi]:{transfer:$l,primaries:Kl,toReference:t=>t,fromReference:t=>t},[en]:{transfer:_t,primaries:Kl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[yc]:{transfer:$l,primaries:Zl,toReference:t=>t.applyMatrix3(zp),fromReference:t=>t.applyMatrix3(kp)},[Hf]:{transfer:_t,primaries:Zl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(zp),fromReference:t=>t.applyMatrix3(kp).convertLinearToSRGB()}},nS=new Set([Hi,yc]),ft={enabled:!0,_workingColorSpace:Hi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!nS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Fa[e].toReference,r=Fa[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Fa[t].primaries},getTransfer:function(t){return t===Yn?$l:Fa[t].transfer}};function Bs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function lu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let es;class sv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{es===void 0&&(es=Ql("canvas")),es.width=e.width,es.height=e.height;const i=es.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=es}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ql("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Bs(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Bs(n[i]/255)*255):n[i]=Bs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let iS=0;class ov{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:iS++}),this.uuid=mr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(cu(r[o].image)):s.push(cu(r[o]))}else s=cu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function cu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?sv.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rS=0;class Cn extends no{constructor(e=Cn.DEFAULT_IMAGE,n=Cn.DEFAULT_MAPPING,i=ui,r=ui,s=Xn,o=oa,a=di,l=pr,c=Cn.DEFAULT_ANISOTROPY,d=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rS++}),this.uuid=mr(),this.name="",this.source=new ov(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(Go("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===Hr?en:Yn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Y0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ud:e.x=e.x-Math.floor(e.x);break;case ui:e.x=e.x<0?0:1;break;case Id:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ud:e.y=e.y-Math.floor(e.y);break;case ui:e.y=e.y<0?0:1;break;case Id:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Go("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===en?Hr:tv}set encoding(e){Go("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Hr?en:Yn}}Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=Y0;Cn.DEFAULT_ANISOTROPY=1;class Et{constructor(e=0,n=0,i=0,r=1){Et.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],f=l[8],h=l[1],g=l[5],y=l[9],_=l[2],p=l[6],u=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-_)<.01&&Math.abs(y-p)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+_)<.1&&Math.abs(y+p)<.1&&Math.abs(c+g+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,M=(g+1)/2,b=(u+1)/2,T=(d+h)/4,A=(f+_)/4,O=(y+p)/4;return v>M&&v>b?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=T/i,s=A/i):M>b?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=T/r,s=O/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=A/s,r=O/s),this.set(i,r,s,n),this}let m=Math.sqrt((p-y)*(p-y)+(f-_)*(f-_)+(h-d)*(h-d));return Math.abs(m)<.001&&(m=1),this.x=(p-y)/m,this.y=(f-_)/m,this.z=(h-d)/m,this.w=Math.acos((c+g+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sS extends no{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Et(0,0,e,n),this.scissorTest=!1,this.viewport=new Et(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Go("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Hr?en:Yn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Cn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new ov(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yr extends sS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class av extends Cn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=gn,this.minFilter=gn,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class oS extends Cn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=gn,this.minFilter=gn,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ha{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],f=i[r+3];const h=s[o+0],g=s[o+1],y=s[o+2],_=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=g,e[n+2]=y,e[n+3]=_;return}if(f!==_||l!==h||c!==g||d!==y){let p=1-a;const u=l*h+c*g+d*y+f*_,m=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const b=Math.sqrt(v),T=Math.atan2(b,u*m);p=Math.sin(p*T)/b,a=Math.sin(a*T)/b}const M=a*m;if(l=l*p+h*M,c=c*p+g*M,d=d*p+y*M,f=f*p+_*M,p===1-a){const b=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=b,c*=b,d*=b,f*=b}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],f=s[o],h=s[o+1],g=s[o+2],y=s[o+3];return e[n]=a*y+d*f+l*g-c*h,e[n+1]=l*y+d*h+c*f-a*g,e[n+2]=c*y+d*g+a*h-l*f,e[n+3]=d*y-a*f-l*h-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),f=a(s/2),h=l(i/2),g=l(r/2),y=l(s/2);switch(o){case"XYZ":this._x=h*d*f+c*g*y,this._y=c*g*f-h*d*y,this._z=c*d*y+h*g*f,this._w=c*d*f-h*g*y;break;case"YXZ":this._x=h*d*f+c*g*y,this._y=c*g*f-h*d*y,this._z=c*d*y-h*g*f,this._w=c*d*f+h*g*y;break;case"ZXY":this._x=h*d*f-c*g*y,this._y=c*g*f+h*d*y,this._z=c*d*y+h*g*f,this._w=c*d*f-h*g*y;break;case"ZYX":this._x=h*d*f-c*g*y,this._y=c*g*f+h*d*y,this._z=c*d*y-h*g*f,this._w=c*d*f+h*g*y;break;case"YZX":this._x=h*d*f+c*g*y,this._y=c*g*f+h*d*y,this._z=c*d*y-h*g*f,this._w=c*d*f-h*g*y;break;case"XZY":this._x=h*d*f-c*g*y,this._y=c*g*f-h*d*y,this._z=c*d*y+h*g*f,this._w=c*d*f+h*g*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],d=n[6],f=n[10],h=i+a+f;if(h>0){const g=.5/Math.sqrt(h+1);this._w=.25/g,this._x=(d-l)*g,this._y=(s-c)*g,this._z=(o-r)*g}else if(i>a&&i>f){const g=2*Math.sqrt(1+i-a-f);this._w=(d-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+c)/g}else if(a>f){const g=2*Math.sqrt(1+a-i-f);this._w=(s-c)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+d)/g}else{const g=2*Math.sqrt(1+f-i-a);this._w=(o-r)/g,this._x=(s+c)/g,this._y=(l+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-n;return this._w=g*o+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),f=Math.sin((1-n)*d)/c,h=Math.sin(n*d)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,n=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Bp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Bp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*d,this.y=i+l*d+a*c-s*f,this.z=r+l*f+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return uu.copy(this).projectOnVector(e),this.sub(uu)}reflect(e){return this.sub(uu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Mn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const uu=new F,Bp=new ha;class pa{constructor(e=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ni.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ni.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ni.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ni):ni.fromBufferAttribute(s,o),ni.applyMatrix4(e.matrixWorld),this.expandByPoint(ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Oa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Oa.copy(i.boundingBox)),Oa.applyMatrix4(e.matrixWorld),this.union(Oa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ni),ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_o),ka.subVectors(this.max,_o),ts.subVectors(e.a,_o),ns.subVectors(e.b,_o),is.subVectors(e.c,_o),Wi.subVectors(ns,ts),Xi.subVectors(is,ns),wr.subVectors(ts,is);let n=[0,-Wi.z,Wi.y,0,-Xi.z,Xi.y,0,-wr.z,wr.y,Wi.z,0,-Wi.x,Xi.z,0,-Xi.x,wr.z,0,-wr.x,-Wi.y,Wi.x,0,-Xi.y,Xi.x,0,-wr.y,wr.x,0];return!du(n,ts,ns,is,ka)||(n=[1,0,0,0,1,0,0,0,1],!du(n,ts,ns,is,ka))?!1:(za.crossVectors(Wi,Xi),n=[za.x,za.y,za.z],du(n,ts,ns,is,ka))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const wi=[new F,new F,new F,new F,new F,new F,new F,new F],ni=new F,Oa=new pa,ts=new F,ns=new F,is=new F,Wi=new F,Xi=new F,wr=new F,_o=new F,ka=new F,za=new F,Tr=new F;function du(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Tr.fromArray(t,s);const a=r.x*Math.abs(Tr.x)+r.y*Math.abs(Tr.y)+r.z*Math.abs(Tr.z),l=e.dot(Tr),c=n.dot(Tr),d=i.dot(Tr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const aS=new pa,yo=new F,fu=new F;class xc{constructor(e=new F,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):aS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yo.subVectors(e,this.center);const n=yo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(yo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yo.copy(e.center).add(fu)),this.expandByPoint(yo.copy(e.center).sub(fu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ti=new F,hu=new F,Ba=new F,ji=new F,pu=new F,Ha=new F,mu=new F;class Gf{constructor(e=new F,n=new F(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ti)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ti.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ti.copy(this.origin).addScaledVector(this.direction,n),Ti.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){hu.copy(e).add(n).multiplyScalar(.5),Ba.copy(n).sub(e).normalize(),ji.copy(this.origin).sub(hu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Ba),a=ji.dot(this.direction),l=-ji.dot(Ba),c=ji.lengthSq(),d=Math.abs(1-o*o);let f,h,g,y;if(d>0)if(f=o*l-a,h=o*a-l,y=s*d,f>=0)if(h>=-y)if(h<=y){const _=1/d;f*=_,h*=_,g=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),g=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),g=-f*f+h*(h+2*l)+c;else h<=-y?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),g=-f*f+h*(h+2*l)+c):h<=y?(f=0,h=Math.min(Math.max(-s,-l),s),g=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),g=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),g=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(hu).addScaledVector(Ba,h),g}intersectSphere(e,n){Ti.subVectors(e.center,this.origin);const i=Ti.dot(this.direction),r=Ti.dot(Ti)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),d>=0?(s=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ti)!==null}intersectTriangle(e,n,i,r,s){pu.subVectors(n,e),Ha.subVectors(i,e),mu.crossVectors(pu,Ha);let o=this.direction.dot(mu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ji.subVectors(this.origin,e);const l=a*this.direction.dot(Ha.crossVectors(ji,Ha));if(l<0)return null;const c=a*this.direction.dot(pu.cross(ji));if(c<0||l+c>o)return null;const d=-a*ji.dot(mu);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Lt{constructor(e,n,i,r,s,o,a,l,c,d,f,h,g,y,_,p){Lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,d,f,h,g,y,_,p)}set(e,n,i,r,s,o,a,l,c,d,f,h,g,y,_,p){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=h,u[3]=g,u[7]=y,u[11]=_,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/rs.setFromMatrixColumn(e,0).length(),s=1/rs.setFromMatrixColumn(e,1).length(),o=1/rs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*d,g=o*f,y=a*d,_=a*f;n[0]=l*d,n[4]=-l*f,n[8]=c,n[1]=g+y*c,n[5]=h-_*c,n[9]=-a*l,n[2]=_-h*c,n[6]=y+g*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*d,g=l*f,y=c*d,_=c*f;n[0]=h+_*a,n[4]=y*a-g,n[8]=o*c,n[1]=o*f,n[5]=o*d,n[9]=-a,n[2]=g*a-y,n[6]=_+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*d,g=l*f,y=c*d,_=c*f;n[0]=h-_*a,n[4]=-o*f,n[8]=y+g*a,n[1]=g+y*a,n[5]=o*d,n[9]=_-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*d,g=o*f,y=a*d,_=a*f;n[0]=l*d,n[4]=y*c-g,n[8]=h*c+_,n[1]=l*f,n[5]=_*c+h,n[9]=g*c-y,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,g=o*c,y=a*l,_=a*c;n[0]=l*d,n[4]=_-h*f,n[8]=y*f+g,n[1]=f,n[5]=o*d,n[9]=-a*d,n[2]=-c*d,n[6]=g*f+y,n[10]=h-_*f}else if(e.order==="XZY"){const h=o*l,g=o*c,y=a*l,_=a*c;n[0]=l*d,n[4]=-f,n[8]=c*d,n[1]=h*f+_,n[5]=o*d,n[9]=g*f-y,n[2]=y*f-g,n[6]=a*d,n[10]=_*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lS,e,cS)}lookAt(e,n,i){const r=this.elements;return Ln.subVectors(e,n),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),Yi.crossVectors(i,Ln),Yi.lengthSq()===0&&(Math.abs(i.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),Yi.crossVectors(i,Ln)),Yi.normalize(),Ga.crossVectors(Ln,Yi),r[0]=Yi.x,r[4]=Ga.x,r[8]=Ln.x,r[1]=Yi.y,r[5]=Ga.y,r[9]=Ln.y,r[2]=Yi.z,r[6]=Ga.z,r[10]=Ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],f=i[5],h=i[9],g=i[13],y=i[2],_=i[6],p=i[10],u=i[14],m=i[3],v=i[7],M=i[11],b=i[15],T=r[0],A=r[4],O=r[8],S=r[12],w=r[1],q=r[5],Y=r[9],W=r[13],L=r[2],V=r[6],N=r[10],H=r[14],P=r[3],I=r[7],G=r[11],Z=r[15];return s[0]=o*T+a*w+l*L+c*P,s[4]=o*A+a*q+l*V+c*I,s[8]=o*O+a*Y+l*N+c*G,s[12]=o*S+a*W+l*H+c*Z,s[1]=d*T+f*w+h*L+g*P,s[5]=d*A+f*q+h*V+g*I,s[9]=d*O+f*Y+h*N+g*G,s[13]=d*S+f*W+h*H+g*Z,s[2]=y*T+_*w+p*L+u*P,s[6]=y*A+_*q+p*V+u*I,s[10]=y*O+_*Y+p*N+u*G,s[14]=y*S+_*W+p*H+u*Z,s[3]=m*T+v*w+M*L+b*P,s[7]=m*A+v*q+M*V+b*I,s[11]=m*O+v*Y+M*N+b*G,s[15]=m*S+v*W+M*H+b*Z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],f=e[6],h=e[10],g=e[14],y=e[3],_=e[7],p=e[11],u=e[15];return y*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*g-i*l*g)+_*(+n*l*g-n*c*h+s*o*h-r*o*g+r*c*d-s*l*d)+p*(+n*c*f-n*a*g-s*o*f+i*o*g+s*a*d-i*c*d)+u*(-r*a*d-n*l*f+n*a*h+r*o*f-i*o*h+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=e[9],h=e[10],g=e[11],y=e[12],_=e[13],p=e[14],u=e[15],m=f*p*c-_*h*c+_*l*g-a*p*g-f*l*u+a*h*u,v=y*h*c-d*p*c-y*l*g+o*p*g+d*l*u-o*h*u,M=d*_*c-y*f*c+y*a*g-o*_*g-d*a*u+o*f*u,b=y*f*l-d*_*l-y*a*h+o*_*h+d*a*p-o*f*p,T=n*m+i*v+r*M+s*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=m*A,e[1]=(_*h*s-f*p*s-_*r*g+i*p*g+f*r*u-i*h*u)*A,e[2]=(a*p*s-_*l*s+_*r*c-i*p*c-a*r*u+i*l*u)*A,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*g-i*l*g)*A,e[4]=v*A,e[5]=(d*p*s-y*h*s+y*r*g-n*p*g-d*r*u+n*h*u)*A,e[6]=(y*l*s-o*p*s-y*r*c+n*p*c+o*r*u-n*l*u)*A,e[7]=(o*h*s-d*l*s+d*r*c-n*h*c-o*r*g+n*l*g)*A,e[8]=M*A,e[9]=(y*f*s-d*_*s-y*i*g+n*_*g+d*i*u-n*f*u)*A,e[10]=(o*_*s-y*a*s+y*i*c-n*_*c-o*i*u+n*a*u)*A,e[11]=(d*a*s-o*f*s-d*i*c+n*f*c+o*i*g-n*a*g)*A,e[12]=b*A,e[13]=(d*_*r-y*f*r+y*i*h-n*_*h-d*i*p+n*f*p)*A,e[14]=(y*a*r-o*_*r-y*i*l+n*_*l+o*i*p-n*a*p)*A,e[15]=(o*f*r-d*a*r+d*i*l-n*f*l-o*i*h+n*a*h)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,d=o+o,f=a+a,h=s*c,g=s*d,y=s*f,_=o*d,p=o*f,u=a*f,m=l*c,v=l*d,M=l*f,b=i.x,T=i.y,A=i.z;return r[0]=(1-(_+u))*b,r[1]=(g+M)*b,r[2]=(y-v)*b,r[3]=0,r[4]=(g-M)*T,r[5]=(1-(h+u))*T,r[6]=(p+m)*T,r[7]=0,r[8]=(y+v)*A,r[9]=(p-m)*A,r[10]=(1-(h+_))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=rs.set(r[0],r[1],r[2]).length();const o=rs.set(r[4],r[5],r[6]).length(),a=rs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ii.copy(this);const c=1/s,d=1/o,f=1/a;return ii.elements[0]*=c,ii.elements[1]*=c,ii.elements[2]*=c,ii.elements[4]*=d,ii.elements[5]*=d,ii.elements[6]*=d,ii.elements[8]*=f,ii.elements[9]*=f,ii.elements[10]*=f,n.setFromRotationMatrix(ii),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Ni){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let g,y;if(a===Ni)g=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===Jl)g=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ni){const l=this.elements,c=1/(n-e),d=1/(i-r),f=1/(o-s),h=(n+e)*c,g=(i+r)*d;let y,_;if(a===Ni)y=(o+s)*f,_=-2*f;else if(a===Jl)y=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=_,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const rs=new F,ii=new Lt,lS=new F(0,0,0),cS=new F(1,1,1),Yi=new F,Ga=new F,Ln=new F,Hp=new Lt,Gp=new ha;class Sc{constructor(e=0,n=0,i=0,r=Sc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],f=r[2],h=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(Mn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Mn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Mn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Mn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Mn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-Mn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Hp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Gp.setFromEuler(this),this.setFromQuaternion(Gp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sc.DEFAULT_ORDER="XYZ";class Vf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let uS=0;const Vp=new F,ss=new ha,Ai=new Lt,Va=new F,xo=new F,dS=new F,fS=new ha,Wp=new F(1,0,0),Xp=new F(0,1,0),jp=new F(0,0,1),hS={type:"added"},pS={type:"removed"};class Gt extends no{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uS++}),this.uuid=mr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new F,n=new Sc,i=new ha,r=new F(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Lt},normalMatrix:{value:new $e}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ss.setFromAxisAngle(e,n),this.quaternion.multiply(ss),this}rotateOnWorldAxis(e,n){return ss.setFromAxisAngle(e,n),this.quaternion.premultiply(ss),this}rotateX(e){return this.rotateOnAxis(Wp,e)}rotateY(e){return this.rotateOnAxis(Xp,e)}rotateZ(e){return this.rotateOnAxis(jp,e)}translateOnAxis(e,n){return Vp.copy(e).applyQuaternion(this.quaternion),this.position.add(Vp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Wp,e)}translateY(e){return this.translateOnAxis(Xp,e)}translateZ(e){return this.translateOnAxis(jp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Va.copy(e):Va.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(xo,Va,this.up):Ai.lookAt(Va,xo,this.up),this.quaternion.setFromRotationMatrix(Ai),r&&(Ai.extractRotation(r.matrixWorld),ss.setFromRotationMatrix(Ai),this.quaternion.premultiply(ss.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(hS)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(pS)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,e,dS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,fS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),f=o(e.shapes),h=o(e.skeletons),g=o(e.animations),y=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),g.length>0&&(i.animations=g),y.length>0&&(i.nodes=y)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Gt.DEFAULT_UP=new F(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ri=new F,bi=new F,gu=new F,Ri=new F,os=new F,as=new F,Yp=new F,vu=new F,_u=new F,yu=new F;let Wa=!1;class jn{constructor(e=new F,n=new F,i=new F){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ri.subVectors(e,n),r.cross(ri);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){ri.subVectors(r,n),bi.subVectors(i,n),gu.subVectors(e,n);const o=ri.dot(ri),a=ri.dot(bi),l=ri.dot(gu),c=bi.dot(bi),d=bi.dot(gu),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,g=(c*l-a*d)*h,y=(o*d-a*l)*h;return s.set(1-g-y,y,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getUV(e,n,i,r,s,o,a,l){return Wa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Wa=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ri.x),l.addScaledVector(o,Ri.y),l.addScaledVector(a,Ri.z),l)}static isFrontFacing(e,n,i,r){return ri.subVectors(i,n),bi.subVectors(e,n),ri.cross(bi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ri.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),ri.cross(bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return jn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Wa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Wa=!0),jn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return jn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;os.subVectors(r,i),as.subVectors(s,i),vu.subVectors(e,i);const l=os.dot(vu),c=as.dot(vu);if(l<=0&&c<=0)return n.copy(i);_u.subVectors(e,r);const d=os.dot(_u),f=as.dot(_u);if(d>=0&&f<=d)return n.copy(r);const h=l*f-d*c;if(h<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(os,o);yu.subVectors(e,s);const g=os.dot(yu),y=as.dot(yu);if(y>=0&&g<=y)return n.copy(s);const _=g*c-l*y;if(_<=0&&c>=0&&y<=0)return a=c/(c-y),n.copy(i).addScaledVector(as,a);const p=d*y-g*f;if(p<=0&&f-d>=0&&g-y>=0)return Yp.subVectors(s,r),a=(f-d)/(f-d+(g-y)),n.copy(r).addScaledVector(Yp,a);const u=1/(p+_+h);return o=_*u,a=h*u,n.copy(i).addScaledVector(os,o).addScaledVector(as,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const lv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},Xa={h:0,s:0,l:0};function xu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class We{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=en){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=ft.workingColorSpace){return this.r=e,this.g=n,this.b=i,ft.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=ft.workingColorSpace){if(e=eS(e,1),n=Mn(n,0,1),i=Mn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=xu(o,s,e+1/3),this.g=xu(o,s,e),this.b=xu(o,s,e-1/3)}return ft.toWorkingColorSpace(this,r),this}setStyle(e,n=en){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=en){const i=lv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}copyLinearToSRGB(e){return this.r=lu(e.r),this.g=lu(e.g),this.b=lu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=en){return ft.fromWorkingColorSpace(ln.copy(this),e),Math.round(Mn(ln.r*255,0,255))*65536+Math.round(Mn(ln.g*255,0,255))*256+Math.round(Mn(ln.b*255,0,255))}getHexString(e=en){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ft.workingColorSpace){ft.fromWorkingColorSpace(ln.copy(this),n);const i=ln.r,r=ln.g,s=ln.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=d<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=ft.workingColorSpace){return ft.fromWorkingColorSpace(ln.copy(this),n),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=en){ft.fromWorkingColorSpace(ln.copy(this),e);const n=ln.r,i=ln.g,r=ln.b;return e!==en?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(qi),this.setHSL(qi.h+e,qi.s+n,qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(qi),e.getHSL(Xa);const i=ou(qi.h,Xa.h,n),r=ou(qi.s,Xa.s,n),s=ou(qi.l,Xa.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ln=new We;We.NAMES=lv;let mS=0;class Kr extends no{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mS++}),this.uuid=mr(),this.name="",this.type="Material",this.blending=zs,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cd,this.blendDst=Pd,this.blendEquation=Dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=ql,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ip,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qr,this.stencilZFail=Qr,this.stencilZPass=Qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==zs&&(i.blending=this.blending),this.side!==pi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Cd&&(i.blendSrc=this.blendSrc),this.blendDst!==Pd&&(i.blendDst=this.blendDst),this.blendEquation!==Dr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ql&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ip&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Qr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Qr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Gn extends Kr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=X0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ot=new F,ja=new Xe;class Tt{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Nd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ir,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ja.fromBufferAttribute(this,n),ja.applyMatrix3(e),this.setXY(n,ja.x,ja.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.applyMatrix3(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.applyMatrix4(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.applyNormalMatrix(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.transformDirection(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Di(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=pt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Di(n,this.array)),n}setX(e,n){return this.normalized&&(n=pt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Di(n,this.array)),n}setY(e,n){return this.normalized&&(n=pt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Di(n,this.array)),n}setZ(e,n){return this.normalized&&(n=pt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Di(n,this.array)),n}setW(e,n){return this.normalized&&(n=pt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=pt(n,this.array),i=pt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=pt(n,this.array),i=pt(i,this.array),r=pt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=pt(n,this.array),i=pt(i,this.array),r=pt(r,this.array),s=pt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nd&&(e.usage=this.usage),e}}class cv extends Tt{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class uv extends Tt{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class un extends Tt{constructor(e,n,i){super(new Float32Array(e),n,i)}}let gS=0;const Hn=new Lt,Su=new Gt,ls=new F,Dn=new pa,So=new pa,$t=new F;class tn extends no{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gS++}),this.uuid=mr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rv(e)?uv:cv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new $e().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,n,i){return Hn.makeTranslation(e,n,i),this.applyMatrix4(Hn),this}scale(e,n,i){return Hn.makeScale(e,n,i),this.applyMatrix4(Hn),this}lookAt(e){return Su.lookAt(e),Su.updateMatrix(),this.applyMatrix4(Su.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new un(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Dn.setFromBufferAttribute(s),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(Dn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];So.setFromBufferAttribute(a),this.morphTargetsRelative?($t.addVectors(Dn.min,So.min),Dn.expandByPoint($t),$t.addVectors(Dn.max,So.max),Dn.expandByPoint($t)):(Dn.expandByPoint(So.min),Dn.expandByPoint(So.max))}Dn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)$t.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared($t));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)$t.fromBufferAttribute(a,c),l&&(ls.fromBufferAttribute(e,c),$t.add(ls)),r=Math.max(r,i.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let w=0;w<a;w++)c[w]=new F,d[w]=new F;const f=new F,h=new F,g=new F,y=new Xe,_=new Xe,p=new Xe,u=new F,m=new F;function v(w,q,Y){f.fromArray(r,w*3),h.fromArray(r,q*3),g.fromArray(r,Y*3),y.fromArray(o,w*2),_.fromArray(o,q*2),p.fromArray(o,Y*2),h.sub(f),g.sub(f),_.sub(y),p.sub(y);const W=1/(_.x*p.y-p.x*_.y);isFinite(W)&&(u.copy(h).multiplyScalar(p.y).addScaledVector(g,-_.y).multiplyScalar(W),m.copy(g).multiplyScalar(_.x).addScaledVector(h,-p.x).multiplyScalar(W),c[w].add(u),c[q].add(u),c[Y].add(u),d[w].add(m),d[q].add(m),d[Y].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let w=0,q=M.length;w<q;++w){const Y=M[w],W=Y.start,L=Y.count;for(let V=W,N=W+L;V<N;V+=3)v(i[V+0],i[V+1],i[V+2])}const b=new F,T=new F,A=new F,O=new F;function S(w){A.fromArray(s,w*3),O.copy(A);const q=c[w];b.copy(q),b.sub(A.multiplyScalar(A.dot(q))).normalize(),T.crossVectors(O,q);const W=T.dot(d[w])<0?-1:1;l[w*4]=b.x,l[w*4+1]=b.y,l[w*4+2]=b.z,l[w*4+3]=W}for(let w=0,q=M.length;w<q;++w){const Y=M[w],W=Y.start,L=Y.count;for(let V=W,N=W+L;V<N;V+=3)S(i[V+0]),S(i[V+1]),S(i[V+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Tt(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,g=i.count;h<g;h++)i.setXYZ(h,0,0,0);const r=new F,s=new F,o=new F,a=new F,l=new F,c=new F,d=new F,f=new F;if(e)for(let h=0,g=e.count;h<g;h+=3){const y=e.getX(h+0),_=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,y),s.fromBufferAttribute(n,_),o.fromBufferAttribute(n,p),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),a.fromBufferAttribute(i,y),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),a.add(d),l.add(d),c.add(d),i.setXYZ(y,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,g=n.count;h<g;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)$t.fromBufferAttribute(e,n),$t.normalize(),e.setXYZ(n,$t.x,$t.y,$t.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,f=a.normalized,h=new c.constructor(l.length*d);let g=0,y=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?g=l[_]*a.data.stride+a.offset:g=l[_]*d;for(let u=0;u<d;u++)h[y++]=c[g++]}return new Tt(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new tn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,f=c.length;d<f;d++){const h=c[d],g=e(h,i);l.push(g)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,h=c.length;f<h;f++){const g=c[f];d.push(g.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],f=s[c];for(let h=0,g=f.length;h<g;h++)d.push(f[h].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qp=new Lt,Ar=new Gf,Ya=new xc,$p=new F,cs=new F,us=new F,ds=new F,Mu=new F,qa=new F,$a=new Xe,Ka=new Xe,Za=new Xe,Kp=new F,Zp=new F,Jp=new F,Ja=new F,Qa=new F;class St extends Gt{constructor(e=new tn,n=new Gn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){qa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],f=s[l];d!==0&&(Mu.fromBufferAttribute(f,e),o?qa.addScaledVector(Mu,d):qa.addScaledVector(Mu.sub(n),d))}n.add(qa)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ya.copy(i.boundingSphere),Ya.applyMatrix4(s),Ar.copy(e.ray).recast(e.near),!(Ya.containsPoint(Ar.origin)===!1&&(Ar.intersectSphere(Ya,$p)===null||Ar.origin.distanceToSquared($p)>(e.far-e.near)**2))&&(qp.copy(s).invert(),Ar.copy(e.ray).applyMatrix4(qp),!(i.boundingBox!==null&&Ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ar)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,h=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,_=h.length;y<_;y++){const p=h[y],u=o[p.materialIndex],m=Math.max(p.start,g.start),v=Math.min(a.count,Math.min(p.start+p.count,g.start+g.count));for(let M=m,b=v;M<b;M+=3){const T=a.getX(M),A=a.getX(M+1),O=a.getX(M+2);r=el(this,u,e,i,c,d,f,T,A,O),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const y=Math.max(0,g.start),_=Math.min(a.count,g.start+g.count);for(let p=y,u=_;p<u;p+=3){const m=a.getX(p),v=a.getX(p+1),M=a.getX(p+2);r=el(this,o,e,i,c,d,f,m,v,M),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let y=0,_=h.length;y<_;y++){const p=h[y],u=o[p.materialIndex],m=Math.max(p.start,g.start),v=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let M=m,b=v;M<b;M+=3){const T=M,A=M+1,O=M+2;r=el(this,u,e,i,c,d,f,T,A,O),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const y=Math.max(0,g.start),_=Math.min(l.count,g.start+g.count);for(let p=y,u=_;p<u;p+=3){const m=p,v=p+1,M=p+2;r=el(this,o,e,i,c,d,f,m,v,M),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function vS(t,e,n,i,r,s,o,a){let l;if(e.side===Rn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===pi,a),l===null)return null;Qa.copy(a),Qa.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Qa);return c<n.near||c>n.far?null:{distance:c,point:Qa.clone(),object:t}}function el(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,cs),t.getVertexPosition(l,us),t.getVertexPosition(c,ds);const d=vS(t,e,n,i,cs,us,ds,Ja);if(d){r&&($a.fromBufferAttribute(r,a),Ka.fromBufferAttribute(r,l),Za.fromBufferAttribute(r,c),d.uv=jn.getInterpolation(Ja,cs,us,ds,$a,Ka,Za,new Xe)),s&&($a.fromBufferAttribute(s,a),Ka.fromBufferAttribute(s,l),Za.fromBufferAttribute(s,c),d.uv1=jn.getInterpolation(Ja,cs,us,ds,$a,Ka,Za,new Xe),d.uv2=d.uv1),o&&(Kp.fromBufferAttribute(o,a),Zp.fromBufferAttribute(o,l),Jp.fromBufferAttribute(o,c),d.normal=jn.getInterpolation(Ja,cs,us,ds,Kp,Zp,Jp,new F),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new F,materialIndex:0};jn.getNormal(cs,us,ds,f.normal),d.face=f}return d}class ma extends tn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],f=[];let h=0,g=0;y("z","y","x",-1,-1,i,n,e,o,s,0),y("z","y","x",1,-1,i,n,-e,o,s,1),y("x","z","y",1,1,e,i,n,r,o,2),y("x","z","y",1,-1,e,i,-n,r,o,3),y("x","y","z",1,-1,e,n,i,r,s,4),y("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new un(c,3)),this.setAttribute("normal",new un(d,3)),this.setAttribute("uv",new un(f,2));function y(_,p,u,m,v,M,b,T,A,O,S){const w=M/A,q=b/O,Y=M/2,W=b/2,L=T/2,V=A+1,N=O+1;let H=0,P=0;const I=new F;for(let G=0;G<N;G++){const Z=G*q-W;for(let ee=0;ee<V;ee++){const K=ee*w-Y;I[_]=K*m,I[p]=Z*v,I[u]=L,c.push(I.x,I.y,I.z),I[_]=0,I[p]=0,I[u]=T>0?1:-1,d.push(I.x,I.y,I.z),f.push(ee/A),f.push(1-G/O),H+=1}}for(let G=0;G<O;G++)for(let Z=0;Z<A;Z++){const ee=h+Z+V*G,K=h+Z+V*(G+1),Q=h+(Z+1)+V*(G+1),he=h+(Z+1)+V*G;l.push(ee,K,he),l.push(K,Q,he),P+=6}a.addGroup(g,P,S),g+=P,h+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ma(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Js(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function pn(t){const e={};for(let n=0;n<t.length;n++){const i=Js(t[n]);for(const r in i)e[r]=i[r]}return e}function _S(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function dv(t){return t.getRenderTarget()===null?t.outputColorSpace:ft.workingColorSpace}const yS={clone:Js,merge:pn};var xS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,SS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qn extends Kr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xS,this.fragmentShader=SS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Js(e.uniforms),this.uniformsGroups=_S(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class fv extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=Ni}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class In extends fv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Od*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(su*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Od*2*Math.atan(Math.tan(su*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(su*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const fs=-90,hs=1;class MS extends Gt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new In(fs,hs,e,n);r.layers=this.layers,this.add(r);const s=new In(fs,hs,e,n);s.layers=this.layers,this.add(s);const o=new In(fs,hs,e,n);o.layers=this.layers,this.add(o);const a=new In(fs,hs,e,n);a.layers=this.layers,this.add(a);const l=new In(fs,hs,e,n);l.layers=this.layers,this.add(l);const c=new In(fs,hs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ni)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Jl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(f,h,g),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class hv extends Cn{constructor(e,n,i,r,s,o,a,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:$s,super(e,n,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ES extends Yr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Go("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Hr?en:Yn),this.texture=new hv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Xn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ma(5,5,5),s=new qn({name:"CubemapFromEquirect",uniforms:Js(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Rn,blending:fr});s.uniforms.tEquirect.value=n;const o=new St(r,s),a=n.minFilter;return n.minFilter===oa&&(n.minFilter=Xn),new MS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Eu=new F,wS=new F,TS=new $e;class Pr{constructor(e=new F(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Eu.subVectors(i,n).cross(wS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Eu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||TS.getNormalMatrix(e),r=this.coplanarPoint(Eu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const br=new xc,tl=new F;class Wf{constructor(e=new Pr,n=new Pr,i=new Pr,r=new Pr,s=new Pr,o=new Pr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ni){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],d=r[5],f=r[6],h=r[7],g=r[8],y=r[9],_=r[10],p=r[11],u=r[12],m=r[13],v=r[14],M=r[15];if(i[0].setComponents(l-s,h-c,p-g,M-u).normalize(),i[1].setComponents(l+s,h+c,p+g,M+u).normalize(),i[2].setComponents(l+o,h+d,p+y,M+m).normalize(),i[3].setComponents(l-o,h-d,p-y,M-m).normalize(),i[4].setComponents(l-a,h-f,p-_,M-v).normalize(),n===Ni)i[5].setComponents(l+a,h+f,p+_,M+v).normalize();else if(n===Jl)i[5].setComponents(a,f,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(br)}intersectsSprite(e){return br.center.set(0,0,0),br.radius=.7071067811865476,br.applyMatrix4(e.matrixWorld),this.intersectsSphere(br)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(tl.x=r.normal.x>0?e.max.x:e.min.x,tl.y=r.normal.y>0?e.max.y:e.min.y,tl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(tl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function pv(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function AS(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,d){const f=c.array,h=c.usage,g=f.byteLength,y=t.createBuffer();t.bindBuffer(d,y),t.bufferData(d,f,h),c.onUploadCallback();let _;if(f instanceof Float32Array)_=t.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)_=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=t.SHORT;else if(f instanceof Uint32Array)_=t.UNSIGNED_INT;else if(f instanceof Int32Array)_=t.INT;else if(f instanceof Int8Array)_=t.BYTE;else if(f instanceof Uint8Array)_=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:y,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:g}}function s(c,d,f){const h=d.array,g=d._updateRange,y=d.updateRanges;if(t.bindBuffer(f,c),g.count===-1&&y.length===0&&t.bufferSubData(f,0,h),y.length!==0){for(let _=0,p=y.length;_<p;_++){const u=y[_];n?t.bufferSubData(f,u.start*h.BYTES_PER_ELEMENT,h,u.start,u.count):t.bufferSubData(f,u.start*h.BYTES_PER_ELEMENT,h.subarray(u.start,u.start+u.count))}d.clearUpdateRanges()}g.count!==-1&&(n?t.bufferSubData(f,g.offset*h.BYTES_PER_ELEMENT,h,g.offset,g.count):t.bufferSubData(f,g.offset*h.BYTES_PER_ELEMENT,h.subarray(g.offset,g.offset+g.count)),g.count=-1),d.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d&&(t.deleteBuffer(d.buffer),i.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);if(f===void 0)i.set(c,r(c,d));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,d),f.version=c.version}}return{get:o,remove:a,update:l}}class Hs extends tn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,f=e/a,h=n/l,g=[],y=[],_=[],p=[];for(let u=0;u<d;u++){const m=u*h-o;for(let v=0;v<c;v++){const M=v*f-s;y.push(M,-m,0),_.push(0,0,1),p.push(v/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let m=0;m<a;m++){const v=m+c*u,M=m+c*(u+1),b=m+1+c*(u+1),T=m+1+c*u;g.push(v,M,T),g.push(M,b,T)}this.setIndex(g),this.setAttribute("position",new un(y,3)),this.setAttribute("normal",new un(_,3)),this.setAttribute("uv",new un(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hs(e.width,e.height,e.widthSegments,e.heightSegments)}}var bS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,RS=`#ifdef USE_ALPHAHASH
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
#endif`,CS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,PS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,LS=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,DS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,US=`#ifdef USE_AOMAP
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
#endif`,IS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,NS=`#ifdef USE_BATCHING
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
#endif`,FS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,OS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,BS=`#ifdef USE_IRIDESCENCE
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
#endif`,HS=`#ifdef USE_BUMPMAP
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
#endif`,GS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,VS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,WS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,XS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,YS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,$S=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,KS=`#define PI 3.141592653589793
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
} // validated`,ZS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,JS=`vec3 transformedNormal = objectNormal;
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
#endif`,QS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iM="gl_FragColor = linearToOutputTexel( gl_FragColor );",rM=`
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
}`,sM=`#ifdef USE_ENVMAP
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
#endif`,oM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,aM=`#ifdef USE_ENVMAP
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
#endif`,lM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cM=`#ifdef USE_ENVMAP
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
#endif`,uM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pM=`#ifdef USE_GRADIENTMAP
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
}`,mM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,gM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_M=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yM=`uniform bool receiveShadow;
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
#endif`,xM=`#ifdef USE_ENVMAP
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
#endif`,SM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,MM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,EM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,TM=`PhysicalMaterial material;
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
#endif`,AM=`struct PhysicalMaterial {
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
}`,bM=`
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
#endif`,RM=`#if defined( RE_IndirectDiffuse )
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
#endif`,CM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,PM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,LM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,DM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,UM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,IM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,NM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,FM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,OM=`#if defined( USE_POINTS_UV )
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
#endif`,kM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,BM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,HM=`#ifdef USE_MORPHNORMALS
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
#endif`,GM=`#ifdef USE_MORPHTARGETS
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
#endif`,VM=`#ifdef USE_MORPHTARGETS
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
#endif`,WM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,XM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$M=`#ifdef USE_NORMALMAP
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
#endif`,KM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ZM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,JM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,QM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,nE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,oE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,aE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,dE=`float getShadowMask() {
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
}`,fE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hE=`#ifdef USE_SKINNING
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
#endif`,pE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mE=`#ifdef USE_SKINNING
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
#endif`,gE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_E=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xE=`#ifdef USE_TRANSMISSION
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
#endif`,SE=`#ifdef USE_TRANSMISSION
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
#endif`,ME=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,EE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,TE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const AE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bE=`uniform sampler2D t2D;
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
}`,RE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,PE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DE=`#include <common>
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
}`,UE=`#if DEPTH_PACKING == 3200
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
}`,IE=`#define DISTANCE
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
}`,NE=`#define DISTANCE
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
}`,FE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,OE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kE=`uniform float scale;
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
}`,zE=`uniform vec3 diffuse;
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
}`,BE=`#include <common>
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
}`,HE=`uniform vec3 diffuse;
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
}`,GE=`#define LAMBERT
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
}`,VE=`#define LAMBERT
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
}`,WE=`#define MATCAP
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
}`,XE=`#define MATCAP
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
}`,jE=`#define NORMAL
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
}`,YE=`#define NORMAL
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
}`,qE=`#define PHONG
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
}`,$E=`#define PHONG
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
}`,KE=`#define STANDARD
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
}`,ZE=`#define STANDARD
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
}`,JE=`#define TOON
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
}`,QE=`#define TOON
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
}`,e1=`uniform float size;
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
}`,t1=`uniform vec3 diffuse;
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
}`,n1=`#include <common>
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
}`,i1=`uniform vec3 color;
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
}`,r1=`uniform float rotation;
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
}`,s1=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:bS,alphahash_pars_fragment:RS,alphamap_fragment:CS,alphamap_pars_fragment:PS,alphatest_fragment:LS,alphatest_pars_fragment:DS,aomap_fragment:US,aomap_pars_fragment:IS,batching_pars_vertex:NS,batching_vertex:FS,begin_vertex:OS,beginnormal_vertex:kS,bsdfs:zS,iridescence_fragment:BS,bumpmap_pars_fragment:HS,clipping_planes_fragment:GS,clipping_planes_pars_fragment:VS,clipping_planes_pars_vertex:WS,clipping_planes_vertex:XS,color_fragment:jS,color_pars_fragment:YS,color_pars_vertex:qS,color_vertex:$S,common:KS,cube_uv_reflection_fragment:ZS,defaultnormal_vertex:JS,displacementmap_pars_vertex:QS,displacementmap_vertex:eM,emissivemap_fragment:tM,emissivemap_pars_fragment:nM,colorspace_fragment:iM,colorspace_pars_fragment:rM,envmap_fragment:sM,envmap_common_pars_fragment:oM,envmap_pars_fragment:aM,envmap_pars_vertex:lM,envmap_physical_pars_fragment:xM,envmap_vertex:cM,fog_vertex:uM,fog_pars_vertex:dM,fog_fragment:fM,fog_pars_fragment:hM,gradientmap_pars_fragment:pM,lightmap_fragment:mM,lightmap_pars_fragment:gM,lights_lambert_fragment:vM,lights_lambert_pars_fragment:_M,lights_pars_begin:yM,lights_toon_fragment:SM,lights_toon_pars_fragment:MM,lights_phong_fragment:EM,lights_phong_pars_fragment:wM,lights_physical_fragment:TM,lights_physical_pars_fragment:AM,lights_fragment_begin:bM,lights_fragment_maps:RM,lights_fragment_end:CM,logdepthbuf_fragment:PM,logdepthbuf_pars_fragment:LM,logdepthbuf_pars_vertex:DM,logdepthbuf_vertex:UM,map_fragment:IM,map_pars_fragment:NM,map_particle_fragment:FM,map_particle_pars_fragment:OM,metalnessmap_fragment:kM,metalnessmap_pars_fragment:zM,morphcolor_vertex:BM,morphnormal_vertex:HM,morphtarget_pars_vertex:GM,morphtarget_vertex:VM,normal_fragment_begin:WM,normal_fragment_maps:XM,normal_pars_fragment:jM,normal_pars_vertex:YM,normal_vertex:qM,normalmap_pars_fragment:$M,clearcoat_normal_fragment_begin:KM,clearcoat_normal_fragment_maps:ZM,clearcoat_pars_fragment:JM,iridescence_pars_fragment:QM,opaque_fragment:eE,packing:tE,premultiplied_alpha_fragment:nE,project_vertex:iE,dithering_fragment:rE,dithering_pars_fragment:sE,roughnessmap_fragment:oE,roughnessmap_pars_fragment:aE,shadowmap_pars_fragment:lE,shadowmap_pars_vertex:cE,shadowmap_vertex:uE,shadowmask_pars_fragment:dE,skinbase_vertex:fE,skinning_pars_vertex:hE,skinning_vertex:pE,skinnormal_vertex:mE,specularmap_fragment:gE,specularmap_pars_fragment:vE,tonemapping_fragment:_E,tonemapping_pars_fragment:yE,transmission_fragment:xE,transmission_pars_fragment:SE,uv_pars_fragment:ME,uv_pars_vertex:EE,uv_vertex:wE,worldpos_vertex:TE,background_vert:AE,background_frag:bE,backgroundCube_vert:RE,backgroundCube_frag:CE,cube_vert:PE,cube_frag:LE,depth_vert:DE,depth_frag:UE,distanceRGBA_vert:IE,distanceRGBA_frag:NE,equirect_vert:FE,equirect_frag:OE,linedashed_vert:kE,linedashed_frag:zE,meshbasic_vert:BE,meshbasic_frag:HE,meshlambert_vert:GE,meshlambert_frag:VE,meshmatcap_vert:WE,meshmatcap_frag:XE,meshnormal_vert:jE,meshnormal_frag:YE,meshphong_vert:qE,meshphong_frag:$E,meshphysical_vert:KE,meshphysical_frag:ZE,meshtoon_vert:JE,meshtoon_frag:QE,points_vert:e1,points_frag:t1,shadow_vert:n1,shadow_frag:i1,sprite_vert:r1,sprite_frag:s1},ve={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},xi={basic:{uniforms:pn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:pn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new We(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:pn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:pn([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:pn([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new We(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:pn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:pn([ve.points,ve.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:pn([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:pn([ve.common,ve.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:pn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:pn([ve.sprite,ve.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:pn([ve.common,ve.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:pn([ve.lights,ve.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};xi.physical={uniforms:pn([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const nl={r:0,b:0,g:0};function o1(t,e,n,i,r,s,o){const a=new We(0);let l=s===!0?0:1,c,d,f=null,h=0,g=null;function y(p,u){let m=!1,v=u.isScene===!0?u.background:null;v&&v.isTexture&&(v=(u.backgroundBlurriness>0?n:e).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),m=!0);const M=t.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||m)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===_c)?(d===void 0&&(d=new St(new ma(1,1,1),new qn({name:"BackgroundCubeMaterial",uniforms:Js(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(b,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=v,d.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,d.material.toneMapped=ft.getTransfer(v.colorSpace)!==_t,(f!==v||h!==v.version||g!==t.toneMapping)&&(d.material.needsUpdate=!0,f=v,h=v.version,g=t.toneMapping),d.layers.enableAll(),p.unshift(d,d.geometry,d.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new St(new Hs(2,2),new qn({name:"BackgroundMaterial",uniforms:Js(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=ft.getTransfer(v.colorSpace)!==_t,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||h!==v.version||g!==t.toneMapping)&&(c.material.needsUpdate=!0,f=v,h=v.version,g=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,u){p.getRGB(nl,dv(t)),i.buffers.color.setClear(nl.r,nl.g,nl.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(p,u=1){a.set(p),l=u,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:y}}function a1(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let c=l,d=!1;function f(L,V,N,H,P){let I=!1;if(o){const G=_(H,N,V);c!==G&&(c=G,g(c.object)),I=u(L,H,N,P),I&&m(L,H,N,P)}else{const G=V.wireframe===!0;(c.geometry!==H.id||c.program!==N.id||c.wireframe!==G)&&(c.geometry=H.id,c.program=N.id,c.wireframe=G,I=!0)}P!==null&&n.update(P,t.ELEMENT_ARRAY_BUFFER),(I||d)&&(d=!1,O(L,V,N,H),P!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(P).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function g(L){return i.isWebGL2?t.bindVertexArray(L):s.bindVertexArrayOES(L)}function y(L){return i.isWebGL2?t.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function _(L,V,N){const H=N.wireframe===!0;let P=a[L.id];P===void 0&&(P={},a[L.id]=P);let I=P[V.id];I===void 0&&(I={},P[V.id]=I);let G=I[H];return G===void 0&&(G=p(h()),I[H]=G),G}function p(L){const V=[],N=[],H=[];for(let P=0;P<r;P++)V[P]=0,N[P]=0,H[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:N,attributeDivisors:H,object:L,attributes:{},index:null}}function u(L,V,N,H){const P=c.attributes,I=V.attributes;let G=0;const Z=N.getAttributes();for(const ee in Z)if(Z[ee].location>=0){const Q=P[ee];let he=I[ee];if(he===void 0&&(ee==="instanceMatrix"&&L.instanceMatrix&&(he=L.instanceMatrix),ee==="instanceColor"&&L.instanceColor&&(he=L.instanceColor)),Q===void 0||Q.attribute!==he||he&&Q.data!==he.data)return!0;G++}return c.attributesNum!==G||c.index!==H}function m(L,V,N,H){const P={},I=V.attributes;let G=0;const Z=N.getAttributes();for(const ee in Z)if(Z[ee].location>=0){let Q=I[ee];Q===void 0&&(ee==="instanceMatrix"&&L.instanceMatrix&&(Q=L.instanceMatrix),ee==="instanceColor"&&L.instanceColor&&(Q=L.instanceColor));const he={};he.attribute=Q,Q&&Q.data&&(he.data=Q.data),P[ee]=he,G++}c.attributes=P,c.attributesNum=G,c.index=H}function v(){const L=c.newAttributes;for(let V=0,N=L.length;V<N;V++)L[V]=0}function M(L){b(L,0)}function b(L,V){const N=c.newAttributes,H=c.enabledAttributes,P=c.attributeDivisors;N[L]=1,H[L]===0&&(t.enableVertexAttribArray(L),H[L]=1),P[L]!==V&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,V),P[L]=V)}function T(){const L=c.newAttributes,V=c.enabledAttributes;for(let N=0,H=V.length;N<H;N++)V[N]!==L[N]&&(t.disableVertexAttribArray(N),V[N]=0)}function A(L,V,N,H,P,I,G){G===!0?t.vertexAttribIPointer(L,V,N,P,I):t.vertexAttribPointer(L,V,N,H,P,I)}function O(L,V,N,H){if(i.isWebGL2===!1&&(L.isInstancedMesh||H.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const P=H.attributes,I=N.getAttributes(),G=V.defaultAttributeValues;for(const Z in I){const ee=I[Z];if(ee.location>=0){let K=P[Z];if(K===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&(K=L.instanceColor)),K!==void 0){const Q=K.normalized,he=K.itemSize,ge=n.get(K);if(ge===void 0)continue;const Se=ge.buffer,_e=ge.type,Pe=ge.bytesPerElement,be=i.isWebGL2===!0&&(_e===t.INT||_e===t.UNSIGNED_INT||K.gpuType===q0);if(K.isInterleavedBufferAttribute){const He=K.data,X=He.stride,ot=K.offset;if(He.isInstancedInterleavedBuffer){for(let Re=0;Re<ee.locationSize;Re++)b(ee.location+Re,He.meshPerAttribute);L.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=He.meshPerAttribute*He.count)}else for(let Re=0;Re<ee.locationSize;Re++)M(ee.location+Re);t.bindBuffer(t.ARRAY_BUFFER,Se);for(let Re=0;Re<ee.locationSize;Re++)A(ee.location+Re,he/ee.locationSize,_e,Q,X*Pe,(ot+he/ee.locationSize*Re)*Pe,be)}else{if(K.isInstancedBufferAttribute){for(let He=0;He<ee.locationSize;He++)b(ee.location+He,K.meshPerAttribute);L.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let He=0;He<ee.locationSize;He++)M(ee.location+He);t.bindBuffer(t.ARRAY_BUFFER,Se);for(let He=0;He<ee.locationSize;He++)A(ee.location+He,he/ee.locationSize,_e,Q,he*Pe,he/ee.locationSize*He*Pe,be)}}else if(G!==void 0){const Q=G[Z];if(Q!==void 0)switch(Q.length){case 2:t.vertexAttrib2fv(ee.location,Q);break;case 3:t.vertexAttrib3fv(ee.location,Q);break;case 4:t.vertexAttrib4fv(ee.location,Q);break;default:t.vertexAttrib1fv(ee.location,Q)}}}}T()}function S(){Y();for(const L in a){const V=a[L];for(const N in V){const H=V[N];for(const P in H)y(H[P].object),delete H[P];delete V[N]}delete a[L]}}function w(L){if(a[L.id]===void 0)return;const V=a[L.id];for(const N in V){const H=V[N];for(const P in H)y(H[P].object),delete H[P];delete V[N]}delete a[L.id]}function q(L){for(const V in a){const N=a[V];if(N[L.id]===void 0)continue;const H=N[L.id];for(const P in H)y(H[P].object),delete H[P];delete N[L.id]}}function Y(){W(),d=!0,c!==l&&(c=l,g(c.object))}function W(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:Y,resetDefaultState:W,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfProgram:q,initAttributes:v,enableAttribute:M,disableUnusedAttributes:T}}function l1(t,e,n,i){const r=i.isWebGL2;let s;function o(d){s=d}function a(d,f){t.drawArrays(s,d,f),n.update(f,s,1)}function l(d,f,h){if(h===0)return;let g,y;if(r)g=t,y="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[y](s,d,f,h),n.update(f,s,h)}function c(d,f,h){if(h===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let y=0;y<h;y++)this.render(d[y],f[y]);else{g.multiDrawArraysWEBGL(s,d,0,f,0,h);let y=0;for(let _=0;_<h;_++)y+=f[_];n.update(y,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function c1(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),d=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),y=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),_=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),m=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,M=o||e.has("OES_texture_float"),b=v&&M,T=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:h,maxTextureSize:g,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:m,vertexTextures:v,floatFragmentTextures:M,floatVertexTextures:b,maxSamples:T}}function u1(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Pr,a=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const g=f.length!==0||h||i!==0||r;return r=h,i=f.length,g},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=d(f,h,0)},this.setState=function(f,h,g){const y=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,u=t.get(f);if(!r||y===null||y.length===0||s&&!p)s?d(null):c();else{const m=s?0:i,v=m*4;let M=u.clippingState||null;l.value=M,M=d(y,h,v,g);for(let b=0;b!==v;++b)M[b]=n[b];u.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,h,g,y){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,y!==!0||p===null){const u=g+_*4,m=h.matrixWorldInverse;a.getNormalMatrix(m),(p===null||p.length<u)&&(p=new Float32Array(u));for(let v=0,M=g;v!==_;++v,M+=4)o.copy(f[v]).applyMatrix4(m,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function d1(t){let e=new WeakMap;function n(o,a){return a===Ld?o.mapping=$s:a===Dd&&(o.mapping=Ks),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ld||a===Dd)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new ES(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class mv extends fv{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ls=4,Qp=[.125,.215,.35,.446,.526,.582],Ur=20,wu=new mv,em=new We;let Tu=null,Au=0,bu=0;const Lr=(1+Math.sqrt(5))/2,ps=1/Lr,tm=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,Lr,ps),new F(0,Lr,-ps),new F(ps,0,Lr),new F(-ps,0,Lr),new F(Lr,ps,0),new F(-Lr,ps,0)];class nm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Tu=this._renderer.getRenderTarget(),Au=this._renderer.getActiveCubeFace(),bu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Tu,Au,bu),e.scissorTest=!1,il(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===$s||e.mapping===Ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Tu=this._renderer.getRenderTarget(),Au=this._renderer.getActiveCubeFace(),bu=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Xn,minFilter:Xn,generateMipmaps:!1,type:aa,format:di,colorSpace:Hi,depthBuffer:!1},r=im(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=im(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=f1(s)),this._blurMaterial=h1(s,e,n)}return r}_compileMaterial(e){const n=new St(this._lodPlanes[0],e);this._renderer.compile(n,wu)}_sceneToCubeUV(e,n,i,r){const a=new In(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(em),d.toneMapping=hr,d.autoClear=!1;const g=new Gn({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1}),y=new St(new ma,g);let _=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,_=!0):(g.color.copy(em),_=!0);for(let u=0;u<6;u++){const m=u%3;m===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):m===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const v=this._cubeSize;il(r,m*v,u>2?v:0,v,v),d.setRenderTarget(r),_&&d.render(y,a),d.render(e,a)}y.geometry.dispose(),y.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===$s||e.mapping===Ks;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=sm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new St(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;il(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,wu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=tm[(r-1)%tm.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new St(this._lodPlanes[r],c),h=c.uniforms,g=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Ur-1),_=s/y,p=isFinite(s)?1+Math.floor(d*_):Ur;p>Ur&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ur}`);const u=[];let m=0;for(let A=0;A<Ur;++A){const O=A/_,S=Math.exp(-O*O/2);u.push(S),A===0?m+=S:A<p&&(m+=2*S)}for(let A=0;A<u.length;A++)u[A]=u[A]/m;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=u,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=y,h.mipInt.value=v-i;const M=this._sizeLods[r],b=3*M*(r>v-Ls?r-v+Ls:0),T=4*(this._cubeSize-M);il(n,b,T,3*M,2*M),l.setRenderTarget(n),l.render(f,wu)}}function f1(t){const e=[],n=[],i=[];let r=t;const s=t-Ls+1+Qp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Ls?l=Qp[o-t+Ls-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,f=1+c,h=[d,d,f,d,f,f,d,d,f,f,d,f],g=6,y=6,_=3,p=2,u=1,m=new Float32Array(_*y*g),v=new Float32Array(p*y*g),M=new Float32Array(u*y*g);for(let T=0;T<g;T++){const A=T%3*2/3-1,O=T>2?0:-1,S=[A,O,0,A+2/3,O,0,A+2/3,O+1,0,A,O,0,A+2/3,O+1,0,A,O+1,0];m.set(S,_*y*T),v.set(h,p*y*T);const w=[T,T,T,T,T,T];M.set(w,u*y*T)}const b=new tn;b.setAttribute("position",new Tt(m,_)),b.setAttribute("uv",new Tt(v,p)),b.setAttribute("faceIndex",new Tt(M,u)),e.push(b),r>Ls&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function im(t,e,n){const i=new Yr(t,e,n);return i.texture.mapping=_c,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function il(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function h1(t,e,n){const i=new Float32Array(Ur),r=new F(0,1,0);return new qn({name:"SphericalGaussianBlur",defines:{n:Ur,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Xf(),fragmentShader:`

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
		`,blending:fr,depthTest:!1,depthWrite:!1})}function rm(){return new qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xf(),fragmentShader:`

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
		`,blending:fr,depthTest:!1,depthWrite:!1})}function sm(){return new qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fr,depthTest:!1,depthWrite:!1})}function Xf(){return`

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
	`}function p1(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ld||l===Dd,d=l===$s||l===Ks;if(c||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return n===null&&(n=new nm(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||d&&f&&r(f)){n===null&&(n=new nm(t));const h=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function m1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function g1(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const y in h.attributes)e.remove(h.attributes[y]);for(const y in h.morphAttributes){const _=h.morphAttributes[y];for(let p=0,u=_.length;p<u;p++)e.remove(_[p])}h.removeEventListener("dispose",o),delete r[h.id];const g=s.get(h);g&&(e.remove(g),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const y in h)e.update(h[y],t.ARRAY_BUFFER);const g=f.morphAttributes;for(const y in g){const _=g[y];for(let p=0,u=_.length;p<u;p++)e.update(_[p],t.ARRAY_BUFFER)}}function c(f){const h=[],g=f.index,y=f.attributes.position;let _=0;if(g!==null){const m=g.array;_=g.version;for(let v=0,M=m.length;v<M;v+=3){const b=m[v+0],T=m[v+1],A=m[v+2];h.push(b,T,T,A,A,b)}}else if(y!==void 0){const m=y.array;_=y.version;for(let v=0,M=m.length/3-1;v<M;v+=3){const b=v+0,T=v+1,A=v+2;h.push(b,T,T,A,A,b)}}else return;const p=new(rv(h)?uv:cv)(h,1);p.version=_;const u=s.get(f);u&&e.remove(u),s.set(f,p)}function d(f){const h=s.get(f);if(h){const g=f.index;g!==null&&h.version<g.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:d}}function v1(t,e,n,i){const r=i.isWebGL2;let s;function o(g){s=g}let a,l;function c(g){a=g.type,l=g.bytesPerElement}function d(g,y){t.drawElements(s,y,a,g*l),n.update(y,s,1)}function f(g,y,_){if(_===0)return;let p,u;if(r)p=t,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](s,y,a,g*l,_),n.update(y,s,_)}function h(g,y,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<_;u++)this.render(g[u]/l,y[u]);else{p.multiDrawElementsWEBGL(s,y,0,a,g,0,_);let u=0;for(let m=0;m<_;m++)u+=y[m];n.update(u,s,1)}}this.setMode=o,this.setIndex=c,this.render=d,this.renderInstances=f,this.renderMultiDraw=h}function _1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function y1(t,e){return t[0]-e[0]}function x1(t,e){return Math.abs(e[1])-Math.abs(t[1])}function S1(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new Et,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,d,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const y=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=y!==void 0?y.length:0;let p=s.get(d);if(p===void 0||p.count!==_){let V=function(){W.dispose(),s.delete(d),d.removeEventListener("dispose",V)};var g=V;p!==void 0&&p.texture.dispose();const v=d.morphAttributes.position!==void 0,M=d.morphAttributes.normal!==void 0,b=d.morphAttributes.color!==void 0,T=d.morphAttributes.position||[],A=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let S=0;v===!0&&(S=1),M===!0&&(S=2),b===!0&&(S=3);let w=d.attributes.position.count*S,q=1;w>e.maxTextureSize&&(q=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const Y=new Float32Array(w*q*4*_),W=new av(Y,w,q,_);W.type=ir,W.needsUpdate=!0;const L=S*4;for(let N=0;N<_;N++){const H=T[N],P=A[N],I=O[N],G=w*q*4*N;for(let Z=0;Z<H.count;Z++){const ee=Z*L;v===!0&&(o.fromBufferAttribute(H,Z),Y[G+ee+0]=o.x,Y[G+ee+1]=o.y,Y[G+ee+2]=o.z,Y[G+ee+3]=0),M===!0&&(o.fromBufferAttribute(P,Z),Y[G+ee+4]=o.x,Y[G+ee+5]=o.y,Y[G+ee+6]=o.z,Y[G+ee+7]=0),b===!0&&(o.fromBufferAttribute(I,Z),Y[G+ee+8]=o.x,Y[G+ee+9]=o.y,Y[G+ee+10]=o.z,Y[G+ee+11]=I.itemSize===4?o.w:1)}}p={count:_,texture:W,size:new Xe(w,q)},s.set(d,p),d.addEventListener("dispose",V)}let u=0;for(let v=0;v<h.length;v++)u+=h[v];const m=d.morphTargetsRelative?1:1-u;f.getUniforms().setValue(t,"morphTargetBaseInfluence",m),f.getUniforms().setValue(t,"morphTargetInfluences",h),f.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const y=h===void 0?0:h.length;let _=i[d.id];if(_===void 0||_.length!==y){_=[];for(let M=0;M<y;M++)_[M]=[M,0];i[d.id]=_}for(let M=0;M<y;M++){const b=_[M];b[0]=M,b[1]=h[M]}_.sort(x1);for(let M=0;M<8;M++)M<y&&_[M][1]?(a[M][0]=_[M][0],a[M][1]=_[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(y1);const p=d.morphAttributes.position,u=d.morphAttributes.normal;let m=0;for(let M=0;M<8;M++){const b=a[M],T=b[0],A=b[1];T!==Number.MAX_SAFE_INTEGER&&A?(p&&d.getAttribute("morphTarget"+M)!==p[T]&&d.setAttribute("morphTarget"+M,p[T]),u&&d.getAttribute("morphNormal"+M)!==u[T]&&d.setAttribute("morphNormal"+M,u[T]),r[M]=A,m+=A):(p&&d.hasAttribute("morphTarget"+M)===!0&&d.deleteAttribute("morphTarget"+M),u&&d.hasAttribute("morphNormal"+M)===!0&&d.deleteAttribute("morphNormal"+M),r[M]=0)}const v=d.morphTargetsRelative?1:1-m;f.getUniforms().setValue(t,"morphTargetBaseInfluence",v),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function M1(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class gv extends Cn{constructor(e,n,i,r,s,o,a,l,c,d){if(d=d!==void 0?d:Br,d!==Br&&d!==Zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Br&&(i=nr),i===void 0&&d===Zs&&(i=zr),super(null,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:gn,this.minFilter=l!==void 0?l:gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const vv=new Cn,_v=new gv(1,1);_v.compareFunction=iv;const yv=new av,xv=new oS,Sv=new hv,om=[],am=[],lm=new Float32Array(16),cm=new Float32Array(9),um=new Float32Array(4);function io(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=om[r];if(s===void 0&&(s=new Float32Array(r),om[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Vt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Wt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Mc(t,e){let n=am[e];n===void 0&&(n=new Int32Array(e),am[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function E1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function w1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2fv(this.addr,e),Wt(n,e)}}function T1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Vt(n,e))return;t.uniform3fv(this.addr,e),Wt(n,e)}}function A1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4fv(this.addr,e),Wt(n,e)}}function b1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Wt(n,e)}else{if(Vt(n,i))return;um.set(i),t.uniformMatrix2fv(this.addr,!1,um),Wt(n,i)}}function R1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Wt(n,e)}else{if(Vt(n,i))return;cm.set(i),t.uniformMatrix3fv(this.addr,!1,cm),Wt(n,i)}}function C1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Wt(n,e)}else{if(Vt(n,i))return;lm.set(i),t.uniformMatrix4fv(this.addr,!1,lm),Wt(n,i)}}function P1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function L1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2iv(this.addr,e),Wt(n,e)}}function D1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Vt(n,e))return;t.uniform3iv(this.addr,e),Wt(n,e)}}function U1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4iv(this.addr,e),Wt(n,e)}}function I1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function N1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2uiv(this.addr,e),Wt(n,e)}}function F1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Vt(n,e))return;t.uniform3uiv(this.addr,e),Wt(n,e)}}function O1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4uiv(this.addr,e),Wt(n,e)}}function k1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?_v:vv;n.setTexture2D(e||s,r)}function z1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||xv,r)}function B1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Sv,r)}function H1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||yv,r)}function G1(t){switch(t){case 5126:return E1;case 35664:return w1;case 35665:return T1;case 35666:return A1;case 35674:return b1;case 35675:return R1;case 35676:return C1;case 5124:case 35670:return P1;case 35667:case 35671:return L1;case 35668:case 35672:return D1;case 35669:case 35673:return U1;case 5125:return I1;case 36294:return N1;case 36295:return F1;case 36296:return O1;case 35678:case 36198:case 36298:case 36306:case 35682:return k1;case 35679:case 36299:case 36307:return z1;case 35680:case 36300:case 36308:case 36293:return B1;case 36289:case 36303:case 36311:case 36292:return H1}}function V1(t,e){t.uniform1fv(this.addr,e)}function W1(t,e){const n=io(e,this.size,2);t.uniform2fv(this.addr,n)}function X1(t,e){const n=io(e,this.size,3);t.uniform3fv(this.addr,n)}function j1(t,e){const n=io(e,this.size,4);t.uniform4fv(this.addr,n)}function Y1(t,e){const n=io(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function q1(t,e){const n=io(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function $1(t,e){const n=io(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function K1(t,e){t.uniform1iv(this.addr,e)}function Z1(t,e){t.uniform2iv(this.addr,e)}function J1(t,e){t.uniform3iv(this.addr,e)}function Q1(t,e){t.uniform4iv(this.addr,e)}function ew(t,e){t.uniform1uiv(this.addr,e)}function tw(t,e){t.uniform2uiv(this.addr,e)}function nw(t,e){t.uniform3uiv(this.addr,e)}function iw(t,e){t.uniform4uiv(this.addr,e)}function rw(t,e,n){const i=this.cache,r=e.length,s=Mc(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),Wt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||vv,s[o])}function sw(t,e,n){const i=this.cache,r=e.length,s=Mc(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),Wt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||xv,s[o])}function ow(t,e,n){const i=this.cache,r=e.length,s=Mc(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),Wt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Sv,s[o])}function aw(t,e,n){const i=this.cache,r=e.length,s=Mc(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),Wt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||yv,s[o])}function lw(t){switch(t){case 5126:return V1;case 35664:return W1;case 35665:return X1;case 35666:return j1;case 35674:return Y1;case 35675:return q1;case 35676:return $1;case 5124:case 35670:return K1;case 35667:case 35671:return Z1;case 35668:case 35672:return J1;case 35669:case 35673:return Q1;case 5125:return ew;case 36294:return tw;case 36295:return nw;case 36296:return iw;case 35678:case 36198:case 36298:case 36306:case 35682:return rw;case 35679:case 36299:case 36307:return sw;case 35680:case 36300:case 36308:case 36293:return ow;case 36289:case 36303:case 36311:case 36292:return aw}}class cw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=G1(n.type)}}class uw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=lw(n.type)}}class dw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Ru=/(\w+)(\])?(\[|\.)?/g;function dm(t,e){t.seq.push(e),t.map[e.id]=e}function fw(t,e,n){const i=t.name,r=i.length;for(Ru.lastIndex=0;;){const s=Ru.exec(i),o=Ru.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){dm(n,c===void 0?new cw(a,t,e):new uw(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new dw(a),dm(n,f)),n=f}}}class El{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);fw(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function fm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const hw=37297;let pw=0;function mw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function gw(t){const e=ft.getPrimaries(ft.workingColorSpace),n=ft.getPrimaries(t);let i;switch(e===n?i="":e===Zl&&n===Kl?i="LinearDisplayP3ToLinearSRGB":e===Kl&&n===Zl&&(i="LinearSRGBToLinearDisplayP3"),t){case Hi:case yc:return[i,"LinearTransferOETF"];case en:case Hf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function hm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+mw(t.getShaderSource(e),o)}else return r}function vw(t,e){const n=gw(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function _w(t,e){let n;switch(e){case Px:n="Linear";break;case Lx:n="Reinhard";break;case Dx:n="OptimizedCineon";break;case j0:n="ACESFilmic";break;case Ix:n="AgX";break;case Ux:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function yw(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ds).join(`
`)}function xw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ds).join(`
`)}function Sw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Mw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ds(t){return t!==""}function pm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ew=/^[ \t]*#include +<([\w\d./]+)>/gm;function zd(t){return t.replace(Ew,Tw)}const ww=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Tw(t,e){let n=qe[e];if(n===void 0){const i=ww.get(e);if(i!==void 0)n=qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return zd(n)}const Aw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gm(t){return t.replace(Aw,bw)}function bw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function vm(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Rw(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===W0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===rx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ci&&(e="SHADOWMAP_TYPE_VSM"),e}function Cw(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case $s:case Ks:e="ENVMAP_TYPE_CUBE";break;case _c:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Pw(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ks:e="ENVMAP_MODE_REFRACTION";break}return e}function Lw(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case X0:e="ENVMAP_BLENDING_MULTIPLY";break;case Rx:e="ENVMAP_BLENDING_MIX";break;case Cx:e="ENVMAP_BLENDING_ADD";break}return e}function Dw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Uw(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=Rw(n),c=Cw(n),d=Pw(n),f=Lw(n),h=Dw(n),g=n.isWebGL2?"":yw(n),y=xw(n),_=Sw(s),p=r.createProgram();let u,m,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Ds).join(`
`),u.length>0&&(u+=`
`),m=[g,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Ds).join(`
`),m.length>0&&(m+=`
`)):(u=[vm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ds).join(`
`),m=[g,vm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==hr?"#define TONE_MAPPING":"",n.toneMapping!==hr?qe.tonemapping_pars_fragment:"",n.toneMapping!==hr?_w("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,vw("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ds).join(`
`)),o=zd(o),o=pm(o,n),o=mm(o,n),a=zd(a),a=pm(a,n),a=mm(a,n),o=gm(o),a=gm(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,u=[y,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,m=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Np?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Np?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=v+u+o,b=v+m+a,T=fm(r,r.VERTEX_SHADER,M),A=fm(r,r.FRAGMENT_SHADER,b);r.attachShader(p,T),r.attachShader(p,A),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function O(Y){if(t.debug.checkShaderErrors){const W=r.getProgramInfoLog(p).trim(),L=r.getShaderInfoLog(T).trim(),V=r.getShaderInfoLog(A).trim();let N=!0,H=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(N=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,p,T,A);else{const P=hm(r,T,"vertex"),I=hm(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Program Info Log: `+W+`
`+P+`
`+I)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(L===""||V==="")&&(H=!1);H&&(Y.diagnostics={runnable:N,programLog:W,vertexShader:{log:L,prefix:u},fragmentShader:{log:V,prefix:m}})}r.deleteShader(T),r.deleteShader(A),S=new El(r,p),w=Mw(r,p)}let S;this.getUniforms=function(){return S===void 0&&O(this),S};let w;this.getAttributes=function(){return w===void 0&&O(this),w};let q=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return q===!1&&(q=r.getProgramParameter(p,hw)),q},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=pw++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=T,this.fragmentShader=A,this}let Iw=0;class Nw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Fw(e),n.set(e,i)),i}}class Fw{constructor(e){this.id=Iw++,this.code=e,this.usedTimes=0}}function Ow(t,e,n,i,r,s,o){const a=new Vf,l=new Nw,c=[],d=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let g=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return S===0?"uv":`uv${S}`}function p(S,w,q,Y,W){const L=Y.fog,V=W.geometry,N=S.isMeshStandardMaterial?Y.environment:null,H=(S.isMeshStandardMaterial?n:e).get(S.envMap||N),P=H&&H.mapping===_c?H.image.height:null,I=y[S.type];S.precision!==null&&(g=r.getMaxPrecision(S.precision),g!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",g,"instead."));const G=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Z=G!==void 0?G.length:0;let ee=0;V.morphAttributes.position!==void 0&&(ee=1),V.morphAttributes.normal!==void 0&&(ee=2),V.morphAttributes.color!==void 0&&(ee=3);let K,Q,he,ge;if(I){const Xt=xi[I];K=Xt.vertexShader,Q=Xt.fragmentShader}else K=S.vertexShader,Q=S.fragmentShader,l.update(S),he=l.getVertexShaderID(S),ge=l.getFragmentShaderID(S);const Se=t.getRenderTarget(),_e=W.isInstancedMesh===!0,Pe=W.isBatchedMesh===!0,be=!!S.map,He=!!S.matcap,X=!!H,ot=!!S.aoMap,Re=!!S.lightMap,Le=!!S.bumpMap,Ae=!!S.normalMap,nt=!!S.displacementMap,Oe=!!S.emissiveMap,R=!!S.metalnessMap,E=!!S.roughnessMap,$=S.anisotropy>0,ae=S.clearcoat>0,se=S.iridescence>0,ue=S.sheen>0,Ce=S.transmission>0,xe=$&&!!S.anisotropyMap,Ee=ae&&!!S.clearcoatMap,ke=ae&&!!S.clearcoatNormalMap,Ge=ae&&!!S.clearcoatRoughnessMap,ie=se&&!!S.iridescenceMap,ct=se&&!!S.iridescenceThicknessMap,Ne=ue&&!!S.sheenColorMap,Ve=ue&&!!S.sheenRoughnessMap,Fe=!!S.specularMap,Me=!!S.specularColorMap,Be=!!S.specularIntensityMap,et=Ce&&!!S.transmissionMap,ht=Ce&&!!S.thicknessMap,je=!!S.gradientMap,pe=!!S.alphaMap,U=S.alphaTest>0,ye=!!S.alphaHash,me=!!S.extensions,ze=!!V.attributes.uv1,De=!!V.attributes.uv2,it=!!V.attributes.uv3;let at=hr;return S.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(at=t.toneMapping),{isWebGL2:d,shaderID:I,shaderType:S.type,shaderName:S.name,vertexShader:K,fragmentShader:Q,defines:S.defines,customVertexShaderID:he,customFragmentShaderID:ge,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:g,batching:Pe,instancing:_e,instancingColor:_e&&W.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:Se===null?t.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:Hi,map:be,matcap:He,envMap:X,envMapMode:X&&H.mapping,envMapCubeUVHeight:P,aoMap:ot,lightMap:Re,bumpMap:Le,normalMap:Ae,displacementMap:h&&nt,emissiveMap:Oe,normalMapObjectSpace:Ae&&S.normalMapType===jx,normalMapTangentSpace:Ae&&S.normalMapType===nv,metalnessMap:R,roughnessMap:E,anisotropy:$,anisotropyMap:xe,clearcoat:ae,clearcoatMap:Ee,clearcoatNormalMap:ke,clearcoatRoughnessMap:Ge,iridescence:se,iridescenceMap:ie,iridescenceThicknessMap:ct,sheen:ue,sheenColorMap:Ne,sheenRoughnessMap:Ve,specularMap:Fe,specularColorMap:Me,specularIntensityMap:Be,transmission:Ce,transmissionMap:et,thicknessMap:ht,gradientMap:je,opaque:S.transparent===!1&&S.blending===zs,alphaMap:pe,alphaTest:U,alphaHash:ye,combine:S.combine,mapUv:be&&_(S.map.channel),aoMapUv:ot&&_(S.aoMap.channel),lightMapUv:Re&&_(S.lightMap.channel),bumpMapUv:Le&&_(S.bumpMap.channel),normalMapUv:Ae&&_(S.normalMap.channel),displacementMapUv:nt&&_(S.displacementMap.channel),emissiveMapUv:Oe&&_(S.emissiveMap.channel),metalnessMapUv:R&&_(S.metalnessMap.channel),roughnessMapUv:E&&_(S.roughnessMap.channel),anisotropyMapUv:xe&&_(S.anisotropyMap.channel),clearcoatMapUv:Ee&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:ke&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ge&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&_(S.sheenRoughnessMap.channel),specularMapUv:Fe&&_(S.specularMap.channel),specularColorMapUv:Me&&_(S.specularColorMap.channel),specularIntensityMapUv:Be&&_(S.specularIntensityMap.channel),transmissionMapUv:et&&_(S.transmissionMap.channel),thicknessMapUv:ht&&_(S.thicknessMap.channel),alphaMapUv:pe&&_(S.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Ae||$),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUv1s:ze,vertexUv2s:De,vertexUv3s:it,pointsUvs:W.isPoints===!0&&!!V.attributes.uv&&(be||pe),fog:!!L,useFog:S.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:W.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:ee,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&q.length>0,shadowMapType:t.shadowMap.type,toneMapping:at,useLegacyLights:t._useLegacyLights,decodeVideoTexture:be&&S.map.isVideoTexture===!0&&ft.getTransfer(S.map.colorSpace)===_t,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===En,flipSided:S.side===Rn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:me&&S.extensions.derivatives===!0,extensionFragDepth:me&&S.extensions.fragDepth===!0,extensionDrawBuffers:me&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:me&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:me&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function u(S){const w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(const q in S.defines)w.push(q),w.push(S.defines[q]);return S.isRawShaderMaterial===!1&&(m(w,S),v(w,S),w.push(t.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function m(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.numLightProbes),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function v(S,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),S.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function M(S){const w=y[S.type];let q;if(w){const Y=xi[w];q=yS.clone(Y.uniforms)}else q=S.uniforms;return q}function b(S,w){let q;for(let Y=0,W=c.length;Y<W;Y++){const L=c[Y];if(L.cacheKey===w){q=L,++q.usedTimes;break}}return q===void 0&&(q=new Uw(t,w,S,s),c.push(q)),q}function T(S){if(--S.usedTimes===0){const w=c.indexOf(S);c[w]=c[c.length-1],c.pop(),S.destroy()}}function A(S){l.remove(S)}function O(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:M,acquireProgram:b,releaseProgram:T,releaseShaderCache:A,programs:c,dispose:O}}function kw(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function zw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function _m(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function ym(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,g,y,_,p){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:h,material:g,groupOrder:y,renderOrder:f.renderOrder,z:_,group:p},t[e]=u):(u.id=f.id,u.object=f,u.geometry=h,u.material=g,u.groupOrder=y,u.renderOrder=f.renderOrder,u.z=_,u.group=p),e++,u}function a(f,h,g,y,_,p){const u=o(f,h,g,y,_,p);g.transmission>0?i.push(u):g.transparent===!0?r.push(u):n.push(u)}function l(f,h,g,y,_,p){const u=o(f,h,g,y,_,p);g.transmission>0?i.unshift(u):g.transparent===!0?r.unshift(u):n.unshift(u)}function c(f,h){n.length>1&&n.sort(f||zw),i.length>1&&i.sort(h||_m),r.length>1&&r.sort(h||_m)}function d(){for(let f=e,h=t.length;f<h;f++){const g=t[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function Bw(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new ym,t.set(i,[o])):r>=s.length?(o=new ym,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function Hw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new F,color:new We};break;case"SpotLight":n={position:new F,direction:new F,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new We,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new We,groundColor:new We};break;case"RectAreaLight":n={color:new We,position:new F,halfWidth:new F,halfHeight:new F};break}return t[e.id]=n,n}}}function Gw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Vw=0;function Ww(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Xw(t,e){const n=new Hw,i=Gw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new F);const s=new F,o=new Lt,a=new Lt;function l(d,f){let h=0,g=0,y=0;for(let Y=0;Y<9;Y++)r.probe[Y].set(0,0,0);let _=0,p=0,u=0,m=0,v=0,M=0,b=0,T=0,A=0,O=0,S=0;d.sort(Ww);const w=f===!0?Math.PI:1;for(let Y=0,W=d.length;Y<W;Y++){const L=d[Y],V=L.color,N=L.intensity,H=L.distance,P=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=V.r*N*w,g+=V.g*N*w,y+=V.b*N*w;else if(L.isLightProbe){for(let I=0;I<9;I++)r.probe[I].addScaledVector(L.sh.coefficients[I],N);S++}else if(L.isDirectionalLight){const I=n.get(L);if(I.color.copy(L.color).multiplyScalar(L.intensity*w),L.castShadow){const G=L.shadow,Z=i.get(L);Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize=G.mapSize,r.directionalShadow[_]=Z,r.directionalShadowMap[_]=P,r.directionalShadowMatrix[_]=L.shadow.matrix,M++}r.directional[_]=I,_++}else if(L.isSpotLight){const I=n.get(L);I.position.setFromMatrixPosition(L.matrixWorld),I.color.copy(V).multiplyScalar(N*w),I.distance=H,I.coneCos=Math.cos(L.angle),I.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),I.decay=L.decay,r.spot[u]=I;const G=L.shadow;if(L.map&&(r.spotLightMap[A]=L.map,A++,G.updateMatrices(L),L.castShadow&&O++),r.spotLightMatrix[u]=G.matrix,L.castShadow){const Z=i.get(L);Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize=G.mapSize,r.spotShadow[u]=Z,r.spotShadowMap[u]=P,T++}u++}else if(L.isRectAreaLight){const I=n.get(L);I.color.copy(V).multiplyScalar(N),I.halfWidth.set(L.width*.5,0,0),I.halfHeight.set(0,L.height*.5,0),r.rectArea[m]=I,m++}else if(L.isPointLight){const I=n.get(L);if(I.color.copy(L.color).multiplyScalar(L.intensity*w),I.distance=L.distance,I.decay=L.decay,L.castShadow){const G=L.shadow,Z=i.get(L);Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize=G.mapSize,Z.shadowCameraNear=G.camera.near,Z.shadowCameraFar=G.camera.far,r.pointShadow[p]=Z,r.pointShadowMap[p]=P,r.pointShadowMatrix[p]=L.shadow.matrix,b++}r.point[p]=I,p++}else if(L.isHemisphereLight){const I=n.get(L);I.skyColor.copy(L.color).multiplyScalar(N*w),I.groundColor.copy(L.groundColor).multiplyScalar(N*w),r.hemi[v]=I,v++}}m>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_FLOAT_1,r.rectAreaLTC2=ve.LTC_FLOAT_2):(r.rectAreaLTC1=ve.LTC_HALF_1,r.rectAreaLTC2=ve.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_FLOAT_1,r.rectAreaLTC2=ve.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_HALF_1,r.rectAreaLTC2=ve.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=g,r.ambient[2]=y;const q=r.hash;(q.directionalLength!==_||q.pointLength!==p||q.spotLength!==u||q.rectAreaLength!==m||q.hemiLength!==v||q.numDirectionalShadows!==M||q.numPointShadows!==b||q.numSpotShadows!==T||q.numSpotMaps!==A||q.numLightProbes!==S)&&(r.directional.length=_,r.spot.length=u,r.rectArea.length=m,r.point.length=p,r.hemi.length=v,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=T+A-O,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=S,q.directionalLength=_,q.pointLength=p,q.spotLength=u,q.rectAreaLength=m,q.hemiLength=v,q.numDirectionalShadows=M,q.numPointShadows=b,q.numSpotShadows=T,q.numSpotMaps=A,q.numLightProbes=S,r.version=Vw++)}function c(d,f){let h=0,g=0,y=0,_=0,p=0;const u=f.matrixWorldInverse;for(let m=0,v=d.length;m<v;m++){const M=d[m];if(M.isDirectionalLight){const b=r.directional[h];b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(u),h++}else if(M.isSpotLight){const b=r.spot[y];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(u),b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(u),y++}else if(M.isRectAreaLight){const b=r.rectArea[_];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(u),a.identity(),o.copy(M.matrixWorld),o.premultiply(u),a.extractRotation(o),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){const b=r.point[g];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(u),g++}else if(M.isHemisphereLight){const b=r.hemi[p];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:r}}function xm(t,e){const n=new Xw(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){n.setup(i,f)}function c(f){n.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function jw(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new xm(t,e),n.set(s,[l])):o>=a.length?(l=new xm(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class Yw extends Kr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qw extends Kr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const $w=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Kw=`uniform sampler2D shadow_pass;
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
}`;function Zw(t,e,n){let i=new Wf;const r=new Xe,s=new Xe,o=new Et,a=new Yw({depthPacking:Xx}),l=new qw,c={},d=n.maxTextureSize,f={[pi]:Rn,[Rn]:pi,[En]:En},h=new qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:$w,fragmentShader:Kw}),g=h.clone();g.defines.HORIZONTAL_PASS=1;const y=new tn;y.setAttribute("position",new Tt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new St(y,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=W0;let u=this.type;this.render=function(T,A,O){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const S=t.getRenderTarget(),w=t.getActiveCubeFace(),q=t.getActiveMipmapLevel(),Y=t.state;Y.setBlending(fr),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const W=u!==Ci&&this.type===Ci,L=u===Ci&&this.type!==Ci;for(let V=0,N=T.length;V<N;V++){const H=T[V],P=H.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;r.copy(P.mapSize);const I=P.getFrameExtents();if(r.multiply(I),s.copy(P.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/I.x),r.x=s.x*I.x,P.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/I.y),r.y=s.y*I.y,P.mapSize.y=s.y)),P.map===null||W===!0||L===!0){const Z=this.type!==Ci?{minFilter:gn,magFilter:gn}:{};P.map!==null&&P.map.dispose(),P.map=new Yr(r.x,r.y,Z),P.map.texture.name=H.name+".shadowMap",P.camera.updateProjectionMatrix()}t.setRenderTarget(P.map),t.clear();const G=P.getViewportCount();for(let Z=0;Z<G;Z++){const ee=P.getViewport(Z);o.set(s.x*ee.x,s.y*ee.y,s.x*ee.z,s.y*ee.w),Y.viewport(o),P.updateMatrices(H,Z),i=P.getFrustum(),M(A,O,P.camera,H,this.type)}P.isPointLightShadow!==!0&&this.type===Ci&&m(P,O),P.needsUpdate=!1}u=this.type,p.needsUpdate=!1,t.setRenderTarget(S,w,q)};function m(T,A){const O=e.update(_);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,g.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,g.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Yr(r.x,r.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(A,null,O,h,_,null),g.uniforms.shadow_pass.value=T.mapPass.texture,g.uniforms.resolution.value=T.mapSize,g.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(A,null,O,g,_,null)}function v(T,A,O,S){let w=null;const q=O.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(q!==void 0)w=q;else if(w=O.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const Y=w.uuid,W=A.uuid;let L=c[Y];L===void 0&&(L={},c[Y]=L);let V=L[W];V===void 0&&(V=w.clone(),L[W]=V,A.addEventListener("dispose",b)),w=V}if(w.visible=A.visible,w.wireframe=A.wireframe,S===Ci?w.side=A.shadowSide!==null?A.shadowSide:A.side:w.side=A.shadowSide!==null?A.shadowSide:f[A.side],w.alphaMap=A.alphaMap,w.alphaTest=A.alphaTest,w.map=A.map,w.clipShadows=A.clipShadows,w.clippingPlanes=A.clippingPlanes,w.clipIntersection=A.clipIntersection,w.displacementMap=A.displacementMap,w.displacementScale=A.displacementScale,w.displacementBias=A.displacementBias,w.wireframeLinewidth=A.wireframeLinewidth,w.linewidth=A.linewidth,O.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const Y=t.properties.get(w);Y.light=O}return w}function M(T,A,O,S,w){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&w===Ci)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,T.matrixWorld);const W=e.update(T),L=T.material;if(Array.isArray(L)){const V=W.groups;for(let N=0,H=V.length;N<H;N++){const P=V[N],I=L[P.materialIndex];if(I&&I.visible){const G=v(T,I,S,w);T.onBeforeShadow(t,T,A,O,W,G,P),t.renderBufferDirect(O,null,W,G,T,P),T.onAfterShadow(t,T,A,O,W,G,P)}}}else if(L.visible){const V=v(T,L,S,w);T.onBeforeShadow(t,T,A,O,W,V,null),t.renderBufferDirect(O,null,W,V,T,null),T.onAfterShadow(t,T,A,O,W,V,null)}}const Y=T.children;for(let W=0,L=Y.length;W<L;W++)M(Y[W],A,O,S,w)}function b(T){T.target.removeEventListener("dispose",b);for(const O in c){const S=c[O],w=T.target.uuid;w in S&&(S[w].dispose(),delete S[w])}}}function Jw(t,e,n){const i=n.isWebGL2;function r(){let U=!1;const ye=new Et;let me=null;const ze=new Et(0,0,0,0);return{setMask:function(De){me!==De&&!U&&(t.colorMask(De,De,De,De),me=De)},setLocked:function(De){U=De},setClear:function(De,it,at,Dt,Xt){Xt===!0&&(De*=Dt,it*=Dt,at*=Dt),ye.set(De,it,at,Dt),ze.equals(ye)===!1&&(t.clearColor(De,it,at,Dt),ze.copy(ye))},reset:function(){U=!1,me=null,ze.set(-1,0,0,0)}}}function s(){let U=!1,ye=null,me=null,ze=null;return{setTest:function(De){De?Pe(t.DEPTH_TEST):be(t.DEPTH_TEST)},setMask:function(De){ye!==De&&!U&&(t.depthMask(De),ye=De)},setFunc:function(De){if(me!==De){switch(De){case Sx:t.depthFunc(t.NEVER);break;case Mx:t.depthFunc(t.ALWAYS);break;case Ex:t.depthFunc(t.LESS);break;case ql:t.depthFunc(t.LEQUAL);break;case wx:t.depthFunc(t.EQUAL);break;case Tx:t.depthFunc(t.GEQUAL);break;case Ax:t.depthFunc(t.GREATER);break;case bx:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}me=De}},setLocked:function(De){U=De},setClear:function(De){ze!==De&&(t.clearDepth(De),ze=De)},reset:function(){U=!1,ye=null,me=null,ze=null}}}function o(){let U=!1,ye=null,me=null,ze=null,De=null,it=null,at=null,Dt=null,Xt=null;return{setTest:function(lt){U||(lt?Pe(t.STENCIL_TEST):be(t.STENCIL_TEST))},setMask:function(lt){ye!==lt&&!U&&(t.stencilMask(lt),ye=lt)},setFunc:function(lt,jt,Pn){(me!==lt||ze!==jt||De!==Pn)&&(t.stencilFunc(lt,jt,Pn),me=lt,ze=jt,De=Pn)},setOp:function(lt,jt,Pn){(it!==lt||at!==jt||Dt!==Pn)&&(t.stencilOp(lt,jt,Pn),it=lt,at=jt,Dt=Pn)},setLocked:function(lt){U=lt},setClear:function(lt){Xt!==lt&&(t.clearStencil(lt),Xt=lt)},reset:function(){U=!1,ye=null,me=null,ze=null,De=null,it=null,at=null,Dt=null,Xt=null}}}const a=new r,l=new s,c=new o,d=new WeakMap,f=new WeakMap;let h={},g={},y=new WeakMap,_=[],p=null,u=!1,m=null,v=null,M=null,b=null,T=null,A=null,O=null,S=new We(0,0,0),w=0,q=!1,Y=null,W=null,L=null,V=null,N=null;const H=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,I=0;const G=t.getParameter(t.VERSION);G.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(G)[1]),P=I>=1):G.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),P=I>=2);let Z=null,ee={};const K=t.getParameter(t.SCISSOR_BOX),Q=t.getParameter(t.VIEWPORT),he=new Et().fromArray(K),ge=new Et().fromArray(Q);function Se(U,ye,me,ze){const De=new Uint8Array(4),it=t.createTexture();t.bindTexture(U,it),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let at=0;at<me;at++)i&&(U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY)?t.texImage3D(ye,0,t.RGBA,1,1,ze,0,t.RGBA,t.UNSIGNED_BYTE,De):t.texImage2D(ye+at,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,De);return it}const _e={};_e[t.TEXTURE_2D]=Se(t.TEXTURE_2D,t.TEXTURE_2D,1),_e[t.TEXTURE_CUBE_MAP]=Se(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(_e[t.TEXTURE_2D_ARRAY]=Se(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),_e[t.TEXTURE_3D]=Se(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Pe(t.DEPTH_TEST),l.setFunc(ql),Oe(!1),R(ip),Pe(t.CULL_FACE),Ae(fr);function Pe(U){h[U]!==!0&&(t.enable(U),h[U]=!0)}function be(U){h[U]!==!1&&(t.disable(U),h[U]=!1)}function He(U,ye){return g[U]!==ye?(t.bindFramebuffer(U,ye),g[U]=ye,i&&(U===t.DRAW_FRAMEBUFFER&&(g[t.FRAMEBUFFER]=ye),U===t.FRAMEBUFFER&&(g[t.DRAW_FRAMEBUFFER]=ye)),!0):!1}function X(U,ye){let me=_,ze=!1;if(U)if(me=y.get(ye),me===void 0&&(me=[],y.set(ye,me)),U.isWebGLMultipleRenderTargets){const De=U.texture;if(me.length!==De.length||me[0]!==t.COLOR_ATTACHMENT0){for(let it=0,at=De.length;it<at;it++)me[it]=t.COLOR_ATTACHMENT0+it;me.length=De.length,ze=!0}}else me[0]!==t.COLOR_ATTACHMENT0&&(me[0]=t.COLOR_ATTACHMENT0,ze=!0);else me[0]!==t.BACK&&(me[0]=t.BACK,ze=!0);ze&&(n.isWebGL2?t.drawBuffers(me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(me))}function ot(U){return p!==U?(t.useProgram(U),p=U,!0):!1}const Re={[Dr]:t.FUNC_ADD,[ox]:t.FUNC_SUBTRACT,[ax]:t.FUNC_REVERSE_SUBTRACT};if(i)Re[op]=t.MIN,Re[ap]=t.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(Re[op]=U.MIN_EXT,Re[ap]=U.MAX_EXT)}const Le={[lx]:t.ZERO,[cx]:t.ONE,[ux]:t.SRC_COLOR,[Cd]:t.SRC_ALPHA,[gx]:t.SRC_ALPHA_SATURATE,[px]:t.DST_COLOR,[fx]:t.DST_ALPHA,[dx]:t.ONE_MINUS_SRC_COLOR,[Pd]:t.ONE_MINUS_SRC_ALPHA,[mx]:t.ONE_MINUS_DST_COLOR,[hx]:t.ONE_MINUS_DST_ALPHA,[vx]:t.CONSTANT_COLOR,[_x]:t.ONE_MINUS_CONSTANT_COLOR,[yx]:t.CONSTANT_ALPHA,[xx]:t.ONE_MINUS_CONSTANT_ALPHA};function Ae(U,ye,me,ze,De,it,at,Dt,Xt,lt){if(U===fr){u===!0&&(be(t.BLEND),u=!1);return}if(u===!1&&(Pe(t.BLEND),u=!0),U!==sx){if(U!==m||lt!==q){if((v!==Dr||T!==Dr)&&(t.blendEquation(t.FUNC_ADD),v=Dr,T=Dr),lt)switch(U){case zs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case It:t.blendFunc(t.ONE,t.ONE);break;case rp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case sp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case zs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case It:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case rp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case sp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}M=null,b=null,A=null,O=null,S.set(0,0,0),w=0,m=U,q=lt}return}De=De||ye,it=it||me,at=at||ze,(ye!==v||De!==T)&&(t.blendEquationSeparate(Re[ye],Re[De]),v=ye,T=De),(me!==M||ze!==b||it!==A||at!==O)&&(t.blendFuncSeparate(Le[me],Le[ze],Le[it],Le[at]),M=me,b=ze,A=it,O=at),(Dt.equals(S)===!1||Xt!==w)&&(t.blendColor(Dt.r,Dt.g,Dt.b,Xt),S.copy(Dt),w=Xt),m=U,q=!1}function nt(U,ye){U.side===En?be(t.CULL_FACE):Pe(t.CULL_FACE);let me=U.side===Rn;ye&&(me=!me),Oe(me),U.blending===zs&&U.transparent===!1?Ae(fr):Ae(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),a.setMask(U.colorWrite);const ze=U.stencilWrite;c.setTest(ze),ze&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),$(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Pe(t.SAMPLE_ALPHA_TO_COVERAGE):be(t.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(U){Y!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),Y=U)}function R(U){U!==nx?(Pe(t.CULL_FACE),U!==W&&(U===ip?t.cullFace(t.BACK):U===ix?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):be(t.CULL_FACE),W=U}function E(U){U!==L&&(P&&t.lineWidth(U),L=U)}function $(U,ye,me){U?(Pe(t.POLYGON_OFFSET_FILL),(V!==ye||N!==me)&&(t.polygonOffset(ye,me),V=ye,N=me)):be(t.POLYGON_OFFSET_FILL)}function ae(U){U?Pe(t.SCISSOR_TEST):be(t.SCISSOR_TEST)}function se(U){U===void 0&&(U=t.TEXTURE0+H-1),Z!==U&&(t.activeTexture(U),Z=U)}function ue(U,ye,me){me===void 0&&(Z===null?me=t.TEXTURE0+H-1:me=Z);let ze=ee[me];ze===void 0&&(ze={type:void 0,texture:void 0},ee[me]=ze),(ze.type!==U||ze.texture!==ye)&&(Z!==me&&(t.activeTexture(me),Z=me),t.bindTexture(U,ye||_e[U]),ze.type=U,ze.texture=ye)}function Ce(){const U=ee[Z];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function xe(){try{t.compressedTexImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ee(){try{t.compressedTexImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ke(){try{t.texSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ge(){try{t.texSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ct(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ne(){try{t.texStorage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ve(){try{t.texStorage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Fe(){try{t.texImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Me(){try{t.texImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Be(U){he.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),he.copy(U))}function et(U){ge.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),ge.copy(U))}function ht(U,ye){let me=f.get(ye);me===void 0&&(me=new WeakMap,f.set(ye,me));let ze=me.get(U);ze===void 0&&(ze=t.getUniformBlockIndex(ye,U.name),me.set(U,ze))}function je(U,ye){const ze=f.get(ye).get(U);d.get(ye)!==ze&&(t.uniformBlockBinding(ye,ze,U.__bindingPointIndex),d.set(ye,ze))}function pe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},Z=null,ee={},g={},y=new WeakMap,_=[],p=null,u=!1,m=null,v=null,M=null,b=null,T=null,A=null,O=null,S=new We(0,0,0),w=0,q=!1,Y=null,W=null,L=null,V=null,N=null,he.set(0,0,t.canvas.width,t.canvas.height),ge.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Pe,disable:be,bindFramebuffer:He,drawBuffers:X,useProgram:ot,setBlending:Ae,setMaterial:nt,setFlipSided:Oe,setCullFace:R,setLineWidth:E,setPolygonOffset:$,setScissorTest:ae,activeTexture:se,bindTexture:ue,unbindTexture:Ce,compressedTexImage2D:xe,compressedTexImage3D:Ee,texImage2D:Fe,texImage3D:Me,updateUBOMapping:ht,uniformBlockBinding:je,texStorage2D:Ne,texStorage3D:Ve,texSubImage2D:ke,texSubImage3D:Ge,compressedTexSubImage2D:ie,compressedTexSubImage3D:ct,scissor:Be,viewport:et,reset:pe}}function Qw(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let f;const h=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(R,E){return g?new OffscreenCanvas(R,E):Ql("canvas")}function _(R,E,$,ae){let se=1;if((R.width>ae||R.height>ae)&&(se=ae/Math.max(R.width,R.height)),se<1||E===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const ue=E?kd:Math.floor,Ce=ue(se*R.width),xe=ue(se*R.height);f===void 0&&(f=y(Ce,xe));const Ee=$?y(Ce,xe):f;return Ee.width=Ce,Ee.height=xe,Ee.getContext("2d").drawImage(R,0,0,Ce,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Ce+"x"+xe+")."),Ee}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function p(R){return Fp(R.width)&&Fp(R.height)}function u(R){return a?!1:R.wrapS!==ui||R.wrapT!==ui||R.minFilter!==gn&&R.minFilter!==Xn}function m(R,E){return R.generateMipmaps&&E&&R.minFilter!==gn&&R.minFilter!==Xn}function v(R){t.generateMipmap(R)}function M(R,E,$,ae,se=!1){if(a===!1)return E;if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ue=E;if(E===t.RED&&($===t.FLOAT&&(ue=t.R32F),$===t.HALF_FLOAT&&(ue=t.R16F),$===t.UNSIGNED_BYTE&&(ue=t.R8)),E===t.RED_INTEGER&&($===t.UNSIGNED_BYTE&&(ue=t.R8UI),$===t.UNSIGNED_SHORT&&(ue=t.R16UI),$===t.UNSIGNED_INT&&(ue=t.R32UI),$===t.BYTE&&(ue=t.R8I),$===t.SHORT&&(ue=t.R16I),$===t.INT&&(ue=t.R32I)),E===t.RG&&($===t.FLOAT&&(ue=t.RG32F),$===t.HALF_FLOAT&&(ue=t.RG16F),$===t.UNSIGNED_BYTE&&(ue=t.RG8)),E===t.RGBA){const Ce=se?$l:ft.getTransfer(ae);$===t.FLOAT&&(ue=t.RGBA32F),$===t.HALF_FLOAT&&(ue=t.RGBA16F),$===t.UNSIGNED_BYTE&&(ue=Ce===_t?t.SRGB8_ALPHA8:t.RGBA8),$===t.UNSIGNED_SHORT_4_4_4_4&&(ue=t.RGBA4),$===t.UNSIGNED_SHORT_5_5_5_1&&(ue=t.RGB5_A1)}return(ue===t.R16F||ue===t.R32F||ue===t.RG16F||ue===t.RG32F||ue===t.RGBA16F||ue===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function b(R,E,$){return m(R,$)===!0||R.isFramebufferTexture&&R.minFilter!==gn&&R.minFilter!==Xn?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function T(R){return R===gn||R===lp||R===Qc?t.NEAREST:t.LINEAR}function A(R){const E=R.target;E.removeEventListener("dispose",A),S(E),E.isVideoTexture&&d.delete(E)}function O(R){const E=R.target;E.removeEventListener("dispose",O),q(E)}function S(R){const E=i.get(R);if(E.__webglInit===void 0)return;const $=R.source,ae=h.get($);if(ae){const se=ae[E.__cacheKey];se.usedTimes--,se.usedTimes===0&&w(R),Object.keys(ae).length===0&&h.delete($)}i.remove(R)}function w(R){const E=i.get(R);t.deleteTexture(E.__webglTexture);const $=R.source,ae=h.get($);delete ae[E.__cacheKey],o.memory.textures--}function q(R){const E=R.texture,$=i.get(R),ae=i.get(E);if(ae.__webglTexture!==void 0&&(t.deleteTexture(ae.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray($.__webglFramebuffer[se]))for(let ue=0;ue<$.__webglFramebuffer[se].length;ue++)t.deleteFramebuffer($.__webglFramebuffer[se][ue]);else t.deleteFramebuffer($.__webglFramebuffer[se]);$.__webglDepthbuffer&&t.deleteRenderbuffer($.__webglDepthbuffer[se])}else{if(Array.isArray($.__webglFramebuffer))for(let se=0;se<$.__webglFramebuffer.length;se++)t.deleteFramebuffer($.__webglFramebuffer[se]);else t.deleteFramebuffer($.__webglFramebuffer);if($.__webglDepthbuffer&&t.deleteRenderbuffer($.__webglDepthbuffer),$.__webglMultisampledFramebuffer&&t.deleteFramebuffer($.__webglMultisampledFramebuffer),$.__webglColorRenderbuffer)for(let se=0;se<$.__webglColorRenderbuffer.length;se++)$.__webglColorRenderbuffer[se]&&t.deleteRenderbuffer($.__webglColorRenderbuffer[se]);$.__webglDepthRenderbuffer&&t.deleteRenderbuffer($.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let se=0,ue=E.length;se<ue;se++){const Ce=i.get(E[se]);Ce.__webglTexture&&(t.deleteTexture(Ce.__webglTexture),o.memory.textures--),i.remove(E[se])}i.remove(E),i.remove(R)}let Y=0;function W(){Y=0}function L(){const R=Y;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),Y+=1,R}function V(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function N(R,E){const $=i.get(R);if(R.isVideoTexture&&nt(R),R.isRenderTargetTexture===!1&&R.version>0&&$.__version!==R.version){const ae=R.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{he($,R,E);return}}n.bindTexture(t.TEXTURE_2D,$.__webglTexture,t.TEXTURE0+E)}function H(R,E){const $=i.get(R);if(R.version>0&&$.__version!==R.version){he($,R,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,$.__webglTexture,t.TEXTURE0+E)}function P(R,E){const $=i.get(R);if(R.version>0&&$.__version!==R.version){he($,R,E);return}n.bindTexture(t.TEXTURE_3D,$.__webglTexture,t.TEXTURE0+E)}function I(R,E){const $=i.get(R);if(R.version>0&&$.__version!==R.version){ge($,R,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture,t.TEXTURE0+E)}const G={[Ud]:t.REPEAT,[ui]:t.CLAMP_TO_EDGE,[Id]:t.MIRRORED_REPEAT},Z={[gn]:t.NEAREST,[lp]:t.NEAREST_MIPMAP_NEAREST,[Qc]:t.NEAREST_MIPMAP_LINEAR,[Xn]:t.LINEAR,[Nx]:t.LINEAR_MIPMAP_NEAREST,[oa]:t.LINEAR_MIPMAP_LINEAR},ee={[Yx]:t.NEVER,[Qx]:t.ALWAYS,[qx]:t.LESS,[iv]:t.LEQUAL,[$x]:t.EQUAL,[Jx]:t.GEQUAL,[Kx]:t.GREATER,[Zx]:t.NOTEQUAL};function K(R,E,$){if($?(t.texParameteri(R,t.TEXTURE_WRAP_S,G[E.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,G[E.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,G[E.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,Z[E.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,Z[E.minFilter])):(t.texParameteri(R,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(R,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(E.wrapS!==ui||E.wrapT!==ui)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(R,t.TEXTURE_MAG_FILTER,T(E.magFilter)),t.texParameteri(R,t.TEXTURE_MIN_FILTER,T(E.minFilter)),E.minFilter!==gn&&E.minFilter!==Xn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,ee[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ae=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===gn||E.minFilter!==Qc&&E.minFilter!==oa||E.type===ir&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===aa&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(t.texParameterf(R,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function Q(R,E){let $=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",A));const ae=E.source;let se=h.get(ae);se===void 0&&(se={},h.set(ae,se));const ue=V(E);if(ue!==R.__cacheKey){se[ue]===void 0&&(se[ue]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,$=!0),se[ue].usedTimes++;const Ce=se[R.__cacheKey];Ce!==void 0&&(se[R.__cacheKey].usedTimes--,Ce.usedTimes===0&&w(E)),R.__cacheKey=ue,R.__webglTexture=se[ue].texture}return $}function he(R,E,$){let ae=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ae=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ae=t.TEXTURE_3D);const se=Q(R,E),ue=E.source;n.bindTexture(ae,R.__webglTexture,t.TEXTURE0+$);const Ce=i.get(ue);if(ue.version!==Ce.__version||se===!0){n.activeTexture(t.TEXTURE0+$);const xe=ft.getPrimaries(ft.workingColorSpace),Ee=E.colorSpace===Yn?null:ft.getPrimaries(E.colorSpace),ke=E.colorSpace===Yn||xe===Ee?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);const Ge=u(E)&&p(E.image)===!1;let ie=_(E.image,Ge,!1,r.maxTextureSize);ie=Oe(E,ie);const ct=p(ie)||a,Ne=s.convert(E.format,E.colorSpace);let Ve=s.convert(E.type),Fe=M(E.internalFormat,Ne,Ve,E.colorSpace,E.isVideoTexture);K(ae,E,ct);let Me;const Be=E.mipmaps,et=a&&E.isVideoTexture!==!0&&Fe!==ev,ht=Ce.__version===void 0||se===!0,je=b(E,ie,ct);if(E.isDepthTexture)Fe=t.DEPTH_COMPONENT,a?E.type===ir?Fe=t.DEPTH_COMPONENT32F:E.type===nr?Fe=t.DEPTH_COMPONENT24:E.type===zr?Fe=t.DEPTH24_STENCIL8:Fe=t.DEPTH_COMPONENT16:E.type===ir&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Br&&Fe===t.DEPTH_COMPONENT&&E.type!==Bf&&E.type!==nr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=nr,Ve=s.convert(E.type)),E.format===Zs&&Fe===t.DEPTH_COMPONENT&&(Fe=t.DEPTH_STENCIL,E.type!==zr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=zr,Ve=s.convert(E.type))),ht&&(et?n.texStorage2D(t.TEXTURE_2D,1,Fe,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,Fe,ie.width,ie.height,0,Ne,Ve,null));else if(E.isDataTexture)if(Be.length>0&&ct){et&&ht&&n.texStorage2D(t.TEXTURE_2D,je,Fe,Be[0].width,Be[0].height);for(let pe=0,U=Be.length;pe<U;pe++)Me=Be[pe],et?n.texSubImage2D(t.TEXTURE_2D,pe,0,0,Me.width,Me.height,Ne,Ve,Me.data):n.texImage2D(t.TEXTURE_2D,pe,Fe,Me.width,Me.height,0,Ne,Ve,Me.data);E.generateMipmaps=!1}else et?(ht&&n.texStorage2D(t.TEXTURE_2D,je,Fe,ie.width,ie.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ie.width,ie.height,Ne,Ve,ie.data)):n.texImage2D(t.TEXTURE_2D,0,Fe,ie.width,ie.height,0,Ne,Ve,ie.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){et&&ht&&n.texStorage3D(t.TEXTURE_2D_ARRAY,je,Fe,Be[0].width,Be[0].height,ie.depth);for(let pe=0,U=Be.length;pe<U;pe++)Me=Be[pe],E.format!==di?Ne!==null?et?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,pe,0,0,0,Me.width,Me.height,ie.depth,Ne,Me.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,pe,Fe,Me.width,Me.height,ie.depth,0,Me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?n.texSubImage3D(t.TEXTURE_2D_ARRAY,pe,0,0,0,Me.width,Me.height,ie.depth,Ne,Ve,Me.data):n.texImage3D(t.TEXTURE_2D_ARRAY,pe,Fe,Me.width,Me.height,ie.depth,0,Ne,Ve,Me.data)}else{et&&ht&&n.texStorage2D(t.TEXTURE_2D,je,Fe,Be[0].width,Be[0].height);for(let pe=0,U=Be.length;pe<U;pe++)Me=Be[pe],E.format!==di?Ne!==null?et?n.compressedTexSubImage2D(t.TEXTURE_2D,pe,0,0,Me.width,Me.height,Ne,Me.data):n.compressedTexImage2D(t.TEXTURE_2D,pe,Fe,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?n.texSubImage2D(t.TEXTURE_2D,pe,0,0,Me.width,Me.height,Ne,Ve,Me.data):n.texImage2D(t.TEXTURE_2D,pe,Fe,Me.width,Me.height,0,Ne,Ve,Me.data)}else if(E.isDataArrayTexture)et?(ht&&n.texStorage3D(t.TEXTURE_2D_ARRAY,je,Fe,ie.width,ie.height,ie.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,Ne,Ve,ie.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Fe,ie.width,ie.height,ie.depth,0,Ne,Ve,ie.data);else if(E.isData3DTexture)et?(ht&&n.texStorage3D(t.TEXTURE_3D,je,Fe,ie.width,ie.height,ie.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,Ne,Ve,ie.data)):n.texImage3D(t.TEXTURE_3D,0,Fe,ie.width,ie.height,ie.depth,0,Ne,Ve,ie.data);else if(E.isFramebufferTexture){if(ht)if(et)n.texStorage2D(t.TEXTURE_2D,je,Fe,ie.width,ie.height);else{let pe=ie.width,U=ie.height;for(let ye=0;ye<je;ye++)n.texImage2D(t.TEXTURE_2D,ye,Fe,pe,U,0,Ne,Ve,null),pe>>=1,U>>=1}}else if(Be.length>0&&ct){et&&ht&&n.texStorage2D(t.TEXTURE_2D,je,Fe,Be[0].width,Be[0].height);for(let pe=0,U=Be.length;pe<U;pe++)Me=Be[pe],et?n.texSubImage2D(t.TEXTURE_2D,pe,0,0,Ne,Ve,Me):n.texImage2D(t.TEXTURE_2D,pe,Fe,Ne,Ve,Me);E.generateMipmaps=!1}else et?(ht&&n.texStorage2D(t.TEXTURE_2D,je,Fe,ie.width,ie.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ne,Ve,ie)):n.texImage2D(t.TEXTURE_2D,0,Fe,Ne,Ve,ie);m(E,ct)&&v(ae),Ce.__version=ue.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function ge(R,E,$){if(E.image.length!==6)return;const ae=Q(R,E),se=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+$);const ue=i.get(se);if(se.version!==ue.__version||ae===!0){n.activeTexture(t.TEXTURE0+$);const Ce=ft.getPrimaries(ft.workingColorSpace),xe=E.colorSpace===Yn?null:ft.getPrimaries(E.colorSpace),Ee=E.colorSpace===Yn||Ce===xe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const ke=E.isCompressedTexture||E.image[0].isCompressedTexture,Ge=E.image[0]&&E.image[0].isDataTexture,ie=[];for(let pe=0;pe<6;pe++)!ke&&!Ge?ie[pe]=_(E.image[pe],!1,!0,r.maxCubemapSize):ie[pe]=Ge?E.image[pe].image:E.image[pe],ie[pe]=Oe(E,ie[pe]);const ct=ie[0],Ne=p(ct)||a,Ve=s.convert(E.format,E.colorSpace),Fe=s.convert(E.type),Me=M(E.internalFormat,Ve,Fe,E.colorSpace),Be=a&&E.isVideoTexture!==!0,et=ue.__version===void 0||ae===!0;let ht=b(E,ct,Ne);K(t.TEXTURE_CUBE_MAP,E,Ne);let je;if(ke){Be&&et&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ht,Me,ct.width,ct.height);for(let pe=0;pe<6;pe++){je=ie[pe].mipmaps;for(let U=0;U<je.length;U++){const ye=je[U];E.format!==di?Ve!==null?Be?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,U,0,0,ye.width,ye.height,Ve,ye.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,U,Me,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,U,0,0,ye.width,ye.height,Ve,Fe,ye.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,U,Me,ye.width,ye.height,0,Ve,Fe,ye.data)}}}else{je=E.mipmaps,Be&&et&&(je.length>0&&ht++,n.texStorage2D(t.TEXTURE_CUBE_MAP,ht,Me,ie[0].width,ie[0].height));for(let pe=0;pe<6;pe++)if(Ge){Be?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,ie[pe].width,ie[pe].height,Ve,Fe,ie[pe].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Me,ie[pe].width,ie[pe].height,0,Ve,Fe,ie[pe].data);for(let U=0;U<je.length;U++){const me=je[U].image[pe].image;Be?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,U+1,0,0,me.width,me.height,Ve,Fe,me.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,U+1,Me,me.width,me.height,0,Ve,Fe,me.data)}}else{Be?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Ve,Fe,ie[pe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Me,Ve,Fe,ie[pe]);for(let U=0;U<je.length;U++){const ye=je[U];Be?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,U+1,0,0,Ve,Fe,ye.image[pe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,U+1,Me,Ve,Fe,ye.image[pe])}}}m(E,Ne)&&v(t.TEXTURE_CUBE_MAP),ue.__version=se.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Se(R,E,$,ae,se,ue){const Ce=s.convert($.format,$.colorSpace),xe=s.convert($.type),Ee=M($.internalFormat,Ce,xe,$.colorSpace);if(!i.get(E).__hasExternalTextures){const Ge=Math.max(1,E.width>>ue),ie=Math.max(1,E.height>>ue);se===t.TEXTURE_3D||se===t.TEXTURE_2D_ARRAY?n.texImage3D(se,ue,Ee,Ge,ie,E.depth,0,Ce,xe,null):n.texImage2D(se,ue,Ee,Ge,ie,0,Ce,xe,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Ae(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ae,se,i.get($).__webglTexture,0,Le(E)):(se===t.TEXTURE_2D||se>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ae,se,i.get($).__webglTexture,ue),n.bindFramebuffer(t.FRAMEBUFFER,null)}function _e(R,E,$){if(t.bindRenderbuffer(t.RENDERBUFFER,R),E.depthBuffer&&!E.stencilBuffer){let ae=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if($||Ae(E)){const se=E.depthTexture;se&&se.isDepthTexture&&(se.type===ir?ae=t.DEPTH_COMPONENT32F:se.type===nr&&(ae=t.DEPTH_COMPONENT24));const ue=Le(E);Ae(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ue,ae,E.width,E.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ue,ae,E.width,E.height)}else t.renderbufferStorage(t.RENDERBUFFER,ae,E.width,E.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,R)}else if(E.depthBuffer&&E.stencilBuffer){const ae=Le(E);$&&Ae(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ae,t.DEPTH24_STENCIL8,E.width,E.height):Ae(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ae,t.DEPTH24_STENCIL8,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,R)}else{const ae=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let se=0;se<ae.length;se++){const ue=ae[se],Ce=s.convert(ue.format,ue.colorSpace),xe=s.convert(ue.type),Ee=M(ue.internalFormat,Ce,xe,ue.colorSpace),ke=Le(E);$&&Ae(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ke,Ee,E.width,E.height):Ae(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ke,Ee,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,Ee,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Pe(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),N(E.depthTexture,0);const ae=i.get(E.depthTexture).__webglTexture,se=Le(E);if(E.depthTexture.format===Br)Ae(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ae,0,se):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ae,0);else if(E.depthTexture.format===Zs)Ae(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ae,0,se):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function be(R){const E=i.get(R),$=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");Pe(E.__webglFramebuffer,R)}else if($){E.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[ae]),E.__webglDepthbuffer[ae]=t.createRenderbuffer(),_e(E.__webglDepthbuffer[ae],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=t.createRenderbuffer(),_e(E.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function He(R,E,$){const ae=i.get(R);E!==void 0&&Se(ae.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),$!==void 0&&be(R)}function X(R){const E=R.texture,$=i.get(R),ae=i.get(E);R.addEventListener("dispose",O),R.isWebGLMultipleRenderTargets!==!0&&(ae.__webglTexture===void 0&&(ae.__webglTexture=t.createTexture()),ae.__version=E.version,o.memory.textures++);const se=R.isWebGLCubeRenderTarget===!0,ue=R.isWebGLMultipleRenderTargets===!0,Ce=p(R)||a;if(se){$.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(a&&E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer[xe]=[];for(let Ee=0;Ee<E.mipmaps.length;Ee++)$.__webglFramebuffer[xe][Ee]=t.createFramebuffer()}else $.__webglFramebuffer[xe]=t.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer=[];for(let xe=0;xe<E.mipmaps.length;xe++)$.__webglFramebuffer[xe]=t.createFramebuffer()}else $.__webglFramebuffer=t.createFramebuffer();if(ue)if(r.drawBuffers){const xe=R.texture;for(let Ee=0,ke=xe.length;Ee<ke;Ee++){const Ge=i.get(xe[Ee]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&Ae(R)===!1){const xe=ue?E:[E];$.__webglMultisampledFramebuffer=t.createFramebuffer(),$.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Ee=0;Ee<xe.length;Ee++){const ke=xe[Ee];$.__webglColorRenderbuffer[Ee]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,$.__webglColorRenderbuffer[Ee]);const Ge=s.convert(ke.format,ke.colorSpace),ie=s.convert(ke.type),ct=M(ke.internalFormat,Ge,ie,ke.colorSpace,R.isXRRenderTarget===!0),Ne=Le(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ne,ct,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.RENDERBUFFER,$.__webglColorRenderbuffer[Ee])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&($.__webglDepthRenderbuffer=t.createRenderbuffer(),_e($.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(se){n.bindTexture(t.TEXTURE_CUBE_MAP,ae.__webglTexture),K(t.TEXTURE_CUBE_MAP,E,Ce);for(let xe=0;xe<6;xe++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let Ee=0;Ee<E.mipmaps.length;Ee++)Se($.__webglFramebuffer[xe][Ee],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ee);else Se($.__webglFramebuffer[xe],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);m(E,Ce)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ue){const xe=R.texture;for(let Ee=0,ke=xe.length;Ee<ke;Ee++){const Ge=xe[Ee],ie=i.get(Ge);n.bindTexture(t.TEXTURE_2D,ie.__webglTexture),K(t.TEXTURE_2D,Ge,Ce),Se($.__webglFramebuffer,R,Ge,t.COLOR_ATTACHMENT0+Ee,t.TEXTURE_2D,0),m(Ge,Ce)&&v(t.TEXTURE_2D)}n.unbindTexture()}else{let xe=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?xe=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(xe,ae.__webglTexture),K(xe,E,Ce),a&&E.mipmaps&&E.mipmaps.length>0)for(let Ee=0;Ee<E.mipmaps.length;Ee++)Se($.__webglFramebuffer[Ee],R,E,t.COLOR_ATTACHMENT0,xe,Ee);else Se($.__webglFramebuffer,R,E,t.COLOR_ATTACHMENT0,xe,0);m(E,Ce)&&v(xe),n.unbindTexture()}R.depthBuffer&&be(R)}function ot(R){const E=p(R)||a,$=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ae=0,se=$.length;ae<se;ae++){const ue=$[ae];if(m(ue,E)){const Ce=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,xe=i.get(ue).__webglTexture;n.bindTexture(Ce,xe),v(Ce),n.unbindTexture()}}}function Re(R){if(a&&R.samples>0&&Ae(R)===!1){const E=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],$=R.width,ae=R.height;let se=t.COLOR_BUFFER_BIT;const ue=[],Ce=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,xe=i.get(R),Ee=R.isWebGLMultipleRenderTargets===!0;if(Ee)for(let ke=0;ke<E.length;ke++)n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ke,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ke,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let ke=0;ke<E.length;ke++){ue.push(t.COLOR_ATTACHMENT0+ke),R.depthBuffer&&ue.push(Ce);const Ge=xe.__ignoreDepthValues!==void 0?xe.__ignoreDepthValues:!1;if(Ge===!1&&(R.depthBuffer&&(se|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&(se|=t.STENCIL_BUFFER_BIT)),Ee&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,xe.__webglColorRenderbuffer[ke]),Ge===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Ce]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Ce])),Ee){const ie=i.get(E[ke]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ie,0)}t.blitFramebuffer(0,0,$,ae,0,0,$,ae,se,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ue)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Ee)for(let ke=0;ke<E.length;ke++){n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ke,t.RENDERBUFFER,xe.__webglColorRenderbuffer[ke]);const Ge=i.get(E[ke]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ke,t.TEXTURE_2D,Ge,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}}function Le(R){return Math.min(r.maxSamples,R.samples)}function Ae(R){const E=i.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function nt(R){const E=o.render.frame;d.get(R)!==E&&(d.set(R,E),R.update())}function Oe(R,E){const $=R.colorSpace,ae=R.format,se=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Fd||$!==Hi&&$!==Yn&&(ft.getTransfer($)===_t?a===!1?e.has("EXT_sRGB")===!0&&ae===di?(R.format=Fd,R.minFilter=Xn,R.generateMipmaps=!1):E=sv.sRGBToLinear(E):(ae!==di||se!==pr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),E}this.allocateTextureUnit=L,this.resetTextureUnits=W,this.setTexture2D=N,this.setTexture2DArray=H,this.setTexture3D=P,this.setTextureCube=I,this.rebindTextures=He,this.setupRenderTarget=X,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Ae}function eT(t,e,n){const i=n.isWebGL2;function r(s,o=Yn){let a;const l=ft.getTransfer(o);if(s===pr)return t.UNSIGNED_BYTE;if(s===$0)return t.UNSIGNED_SHORT_4_4_4_4;if(s===K0)return t.UNSIGNED_SHORT_5_5_5_1;if(s===Fx)return t.BYTE;if(s===Ox)return t.SHORT;if(s===Bf)return t.UNSIGNED_SHORT;if(s===q0)return t.INT;if(s===nr)return t.UNSIGNED_INT;if(s===ir)return t.FLOAT;if(s===aa)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===kx)return t.ALPHA;if(s===di)return t.RGBA;if(s===zx)return t.LUMINANCE;if(s===Bx)return t.LUMINANCE_ALPHA;if(s===Br)return t.DEPTH_COMPONENT;if(s===Zs)return t.DEPTH_STENCIL;if(s===Fd)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Hx)return t.RED;if(s===Z0)return t.RED_INTEGER;if(s===Gx)return t.RG;if(s===J0)return t.RG_INTEGER;if(s===Q0)return t.RGBA_INTEGER;if(s===eu||s===tu||s===nu||s===iu)if(l===_t)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===eu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===tu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===nu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===iu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===eu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===tu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===nu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===iu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===cp||s===up||s===dp||s===fp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===cp)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===up)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===dp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===fp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ev)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===hp||s===pp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===hp)return l===_t?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===pp)return l===_t?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===mp||s===gp||s===vp||s===_p||s===yp||s===xp||s===Sp||s===Mp||s===Ep||s===wp||s===Tp||s===Ap||s===bp||s===Rp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===mp)return l===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===gp)return l===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===vp)return l===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===_p)return l===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===yp)return l===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===xp)return l===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Sp)return l===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Mp)return l===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ep)return l===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===wp)return l===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Tp)return l===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ap)return l===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===bp)return l===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Rp)return l===_t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ru||s===Cp||s===Pp)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===ru)return l===_t?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Cp)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Pp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Vx||s===Lp||s===Dp||s===Up)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===ru)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Lp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Dp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Up)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===zr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class tT extends In{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class li extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nT={type:"move"};class Cu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new li,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new li,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new li,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=n.getJointPose(_,i),u=this._getHandJoint(c,_);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=d.position.distanceTo(f.position),g=.02,y=.005;c.inputState.pinching&&h>g+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=g-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(nT)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new li;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class iT extends no{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,f=null,h=null,g=null,y=null;const _=n.getContextAttributes();let p=null,u=null;const m=[],v=[],M=new Xe;let b=null;const T=new In;T.layers.enable(1),T.viewport=new Et;const A=new In;A.layers.enable(2),A.viewport=new Et;const O=[T,A],S=new tT;S.layers.enable(1),S.layers.enable(2);let w=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let Q=m[K];return Q===void 0&&(Q=new Cu,m[K]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(K){let Q=m[K];return Q===void 0&&(Q=new Cu,m[K]=Q),Q.getGripSpace()},this.getHand=function(K){let Q=m[K];return Q===void 0&&(Q=new Cu,m[K]=Q),Q.getHandSpace()};function Y(K){const Q=v.indexOf(K.inputSource);if(Q===-1)return;const he=m[Q];he!==void 0&&(he.update(K.inputSource,K.frame,c||o),he.dispatchEvent({type:K.type,data:K.inputSource}))}function W(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",L);for(let K=0;K<m.length;K++){const Q=v[K];Q!==null&&(v[K]=null,m[K].disconnect(Q))}w=null,q=null,e.setRenderTarget(p),g=null,h=null,f=null,r=null,u=null,ee.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(M.width,M.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return h!==null?h:g},this.getBinding=function(){return f},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",W),r.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(M),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Q={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,Q),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),u=new Yr(g.framebufferWidth,g.framebufferHeight,{format:di,type:pr,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let Q=null,he=null,ge=null;_.depth&&(ge=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Q=_.stencil?Zs:Br,he=_.stencil?zr:nr);const Se={colorFormat:n.RGBA8,depthFormat:ge,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(Se),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),u=new Yr(h.textureWidth,h.textureHeight,{format:di,type:pr,depthTexture:new gv(h.textureWidth,h.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const _e=e.properties.get(u);_e.__ignoreDepthValues=h.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ee.setContext(r),ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function L(K){for(let Q=0;Q<K.removed.length;Q++){const he=K.removed[Q],ge=v.indexOf(he);ge>=0&&(v[ge]=null,m[ge].disconnect(he))}for(let Q=0;Q<K.added.length;Q++){const he=K.added[Q];let ge=v.indexOf(he);if(ge===-1){for(let _e=0;_e<m.length;_e++)if(_e>=v.length){v.push(he),ge=_e;break}else if(v[_e]===null){v[_e]=he,ge=_e;break}if(ge===-1)break}const Se=m[ge];Se&&Se.connect(he)}}const V=new F,N=new F;function H(K,Q,he){V.setFromMatrixPosition(Q.matrixWorld),N.setFromMatrixPosition(he.matrixWorld);const ge=V.distanceTo(N),Se=Q.projectionMatrix.elements,_e=he.projectionMatrix.elements,Pe=Se[14]/(Se[10]-1),be=Se[14]/(Se[10]+1),He=(Se[9]+1)/Se[5],X=(Se[9]-1)/Se[5],ot=(Se[8]-1)/Se[0],Re=(_e[8]+1)/_e[0],Le=Pe*ot,Ae=Pe*Re,nt=ge/(-ot+Re),Oe=nt*-ot;Q.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Oe),K.translateZ(nt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert();const R=Pe+nt,E=be+nt,$=Le-Oe,ae=Ae+(ge-Oe),se=He*be/E*R,ue=X*be/E*R;K.projectionMatrix.makePerspective($,ae,se,ue,R,E),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}function P(K,Q){Q===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(Q.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;S.near=A.near=T.near=K.near,S.far=A.far=T.far=K.far,(w!==S.near||q!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),w=S.near,q=S.far);const Q=K.parent,he=S.cameras;P(S,Q);for(let ge=0;ge<he.length;ge++)P(he[ge],Q);he.length===2?H(S,T,A):S.projectionMatrix.copy(T.projectionMatrix),I(K,S,Q)};function I(K,Q,he){he===null?K.matrix.copy(Q.matrixWorld):(K.matrix.copy(he.matrixWorld),K.matrix.invert(),K.matrix.multiply(Q.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(Q.projectionMatrix),K.projectionMatrixInverse.copy(Q.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Od*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&g===null))return l},this.setFoveation=function(K){l=K,h!==null&&(h.fixedFoveation=K),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=K)};let G=null;function Z(K,Q){if(d=Q.getViewerPose(c||o),y=Q,d!==null){const he=d.views;g!==null&&(e.setRenderTargetFramebuffer(u,g.framebuffer),e.setRenderTarget(u));let ge=!1;he.length!==S.cameras.length&&(S.cameras.length=0,ge=!0);for(let Se=0;Se<he.length;Se++){const _e=he[Se];let Pe=null;if(g!==null)Pe=g.getViewport(_e);else{const He=f.getViewSubImage(h,_e);Pe=He.viewport,Se===0&&(e.setRenderTargetTextures(u,He.colorTexture,h.ignoreDepthValues?void 0:He.depthStencilTexture),e.setRenderTarget(u))}let be=O[Se];be===void 0&&(be=new In,be.layers.enable(Se),be.viewport=new Et,O[Se]=be),be.matrix.fromArray(_e.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(_e.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),Se===0&&(S.matrix.copy(be.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ge===!0&&S.cameras.push(be)}}for(let he=0;he<m.length;he++){const ge=v[he],Se=m[he];ge!==null&&Se!==void 0&&Se.update(ge,Q,c||o)}G&&G(K,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),y=null}const ee=new pv;ee.setAnimationLoop(Z),this.setAnimationLoop=function(K){G=K},this.dispose=function(){}}}function rT(t,e){function n(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,dv(t)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,m,v,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),f(p,u)):u.isMeshPhongMaterial?(s(p,u),d(p,u)):u.isMeshStandardMaterial?(s(p,u),h(p,u),u.isMeshPhysicalMaterial&&g(p,u,M)):u.isMeshMatcapMaterial?(s(p,u),y(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),_(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,m,v):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,n(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Rn&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,n(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Rn&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,n(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,n(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const m=e.get(u).envMap;if(m&&(p.envMap.value=m,p.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const v=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*v,n(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,m,v){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*m,p.scale.value=v*.5,u.map&&(p.map.value=u.map,n(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function d(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function f(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function h(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function g(p,u,m){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Rn&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=m.texture,p.transmissionSamplerSize.value.set(m.width,m.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,p.specularIntensityMapTransform))}function y(p,u){u.matcap&&(p.matcap.value=u.matcap)}function _(p,u){const m=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(m.matrixWorld),p.nearDistance.value=m.shadow.camera.near,p.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function sT(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(m,v){const M=v.program;i.uniformBlockBinding(m,M)}function c(m,v){let M=r[m.id];M===void 0&&(y(m),M=d(m),r[m.id]=M,m.addEventListener("dispose",p));const b=v.program;i.updateUBOMapping(m,b);const T=e.render.frame;s[m.id]!==T&&(h(m),s[m.id]=T)}function d(m){const v=f();m.__bindingPointIndex=v;const M=t.createBuffer(),b=m.__size,T=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,b,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,M),M}function f(){for(let m=0;m<a;m++)if(o.indexOf(m)===-1)return o.push(m),m;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(m){const v=r[m.id],M=m.uniforms,b=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let T=0,A=M.length;T<A;T++){const O=Array.isArray(M[T])?M[T]:[M[T]];for(let S=0,w=O.length;S<w;S++){const q=O[S];if(g(q,T,S,b)===!0){const Y=q.__offset,W=Array.isArray(q.value)?q.value:[q.value];let L=0;for(let V=0;V<W.length;V++){const N=W[V],H=_(N);typeof N=="number"||typeof N=="boolean"?(q.__data[0]=N,t.bufferSubData(t.UNIFORM_BUFFER,Y+L,q.__data)):N.isMatrix3?(q.__data[0]=N.elements[0],q.__data[1]=N.elements[1],q.__data[2]=N.elements[2],q.__data[3]=0,q.__data[4]=N.elements[3],q.__data[5]=N.elements[4],q.__data[6]=N.elements[5],q.__data[7]=0,q.__data[8]=N.elements[6],q.__data[9]=N.elements[7],q.__data[10]=N.elements[8],q.__data[11]=0):(N.toArray(q.__data,L),L+=H.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,Y,q.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(m,v,M,b){const T=m.value,A=v+"_"+M;if(b[A]===void 0)return typeof T=="number"||typeof T=="boolean"?b[A]=T:b[A]=T.clone(),!0;{const O=b[A];if(typeof T=="number"||typeof T=="boolean"){if(O!==T)return b[A]=T,!0}else if(O.equals(T)===!1)return O.copy(T),!0}return!1}function y(m){const v=m.uniforms;let M=0;const b=16;for(let A=0,O=v.length;A<O;A++){const S=Array.isArray(v[A])?v[A]:[v[A]];for(let w=0,q=S.length;w<q;w++){const Y=S[w],W=Array.isArray(Y.value)?Y.value:[Y.value];for(let L=0,V=W.length;L<V;L++){const N=W[L],H=_(N),P=M%b;P!==0&&b-P<H.boundary&&(M+=b-P),Y.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=M,M+=H.storage}}}const T=M%b;return T>0&&(M+=b-T),m.__size=M,m.__cache={},this}function _(m){const v={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(v.boundary=4,v.storage=4):m.isVector2?(v.boundary=8,v.storage=8):m.isVector3||m.isColor?(v.boundary=16,v.storage=12):m.isVector4?(v.boundary=16,v.storage=16):m.isMatrix3?(v.boundary=48,v.storage=48):m.isMatrix4?(v.boundary=64,v.storage=64):m.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",m),v}function p(m){const v=m.target;v.removeEventListener("dispose",p);const M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function u(){for(const m in r)t.deleteBuffer(r[m]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class Mv{constructor(e={}){const{canvas:n=tS(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const g=new Uint32Array(4),y=new Int32Array(4);let _=null,p=null;const u=[],m=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=en,this._useLegacyLights=!1,this.toneMapping=hr,this.toneMappingExposure=1;const v=this;let M=!1,b=0,T=0,A=null,O=-1,S=null;const w=new Et,q=new Et;let Y=null;const W=new We(0);let L=0,V=n.width,N=n.height,H=1,P=null,I=null;const G=new Et(0,0,V,N),Z=new Et(0,0,V,N);let ee=!1;const K=new Wf;let Q=!1,he=!1,ge=null;const Se=new Lt,_e=new Xe,Pe=new F,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function He(){return A===null?H:1}let X=i;function ot(x,C){for(let k=0;k<x.length;k++){const z=x[k],B=n.getContext(z,C);if(B!==null)return B}return null}try{const x={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${zf}`),n.addEventListener("webglcontextlost",pe,!1),n.addEventListener("webglcontextrestored",U,!1),n.addEventListener("webglcontextcreationerror",ye,!1),X===null){const C=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&C.shift(),X=ot(C,x),X===null)throw ot(C)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&X instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let Re,Le,Ae,nt,Oe,R,E,$,ae,se,ue,Ce,xe,Ee,ke,Ge,ie,ct,Ne,Ve,Fe,Me,Be,et;function ht(){Re=new m1(X),Le=new c1(X,Re,e),Re.init(Le),Me=new eT(X,Re,Le),Ae=new Jw(X,Re,Le),nt=new _1(X),Oe=new kw,R=new Qw(X,Re,Ae,Oe,Le,Me,nt),E=new d1(v),$=new p1(v),ae=new AS(X,Le),Be=new a1(X,Re,ae,Le),se=new g1(X,ae,nt,Be),ue=new M1(X,se,ae,nt),Ne=new S1(X,Le,R),Ge=new u1(Oe),Ce=new Ow(v,E,$,Re,Le,Be,Ge),xe=new rT(v,Oe),Ee=new Bw,ke=new jw(Re,Le),ct=new o1(v,E,$,Ae,ue,h,l),ie=new Zw(v,ue,Le),et=new sT(X,nt,Le,Ae),Ve=new l1(X,Re,nt,Le),Fe=new v1(X,Re,nt,Le),nt.programs=Ce.programs,v.capabilities=Le,v.extensions=Re,v.properties=Oe,v.renderLists=Ee,v.shadowMap=ie,v.state=Ae,v.info=nt}ht();const je=new iT(v,X);this.xr=je,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const x=Re.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Re.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(x){x!==void 0&&(H=x,this.setSize(V,N,!1))},this.getSize=function(x){return x.set(V,N)},this.setSize=function(x,C,k=!0){if(je.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=x,N=C,n.width=Math.floor(x*H),n.height=Math.floor(C*H),k===!0&&(n.style.width=x+"px",n.style.height=C+"px"),this.setViewport(0,0,x,C)},this.getDrawingBufferSize=function(x){return x.set(V*H,N*H).floor()},this.setDrawingBufferSize=function(x,C,k){V=x,N=C,H=k,n.width=Math.floor(x*k),n.height=Math.floor(C*k),this.setViewport(0,0,x,C)},this.getCurrentViewport=function(x){return x.copy(w)},this.getViewport=function(x){return x.copy(G)},this.setViewport=function(x,C,k,z){x.isVector4?G.set(x.x,x.y,x.z,x.w):G.set(x,C,k,z),Ae.viewport(w.copy(G).multiplyScalar(H).floor())},this.getScissor=function(x){return x.copy(Z)},this.setScissor=function(x,C,k,z){x.isVector4?Z.set(x.x,x.y,x.z,x.w):Z.set(x,C,k,z),Ae.scissor(q.copy(Z).multiplyScalar(H).floor())},this.getScissorTest=function(){return ee},this.setScissorTest=function(x){Ae.setScissorTest(ee=x)},this.setOpaqueSort=function(x){P=x},this.setTransparentSort=function(x){I=x},this.getClearColor=function(x){return x.copy(ct.getClearColor())},this.setClearColor=function(){ct.setClearColor.apply(ct,arguments)},this.getClearAlpha=function(){return ct.getClearAlpha()},this.setClearAlpha=function(){ct.setClearAlpha.apply(ct,arguments)},this.clear=function(x=!0,C=!0,k=!0){let z=0;if(x){let B=!1;if(A!==null){const re=A.texture.format;B=re===Q0||re===J0||re===Z0}if(B){const re=A.texture.type,j=re===pr||re===nr||re===Bf||re===zr||re===$0||re===K0,J=ct.getClearColor(),ne=ct.getClearAlpha(),le=J.r,ce=J.g,we=J.b;j?(g[0]=le,g[1]=ce,g[2]=we,g[3]=ne,X.clearBufferuiv(X.COLOR,0,g)):(y[0]=le,y[1]=ce,y[2]=we,y[3]=ne,X.clearBufferiv(X.COLOR,0,y))}else z|=X.COLOR_BUFFER_BIT}C&&(z|=X.DEPTH_BUFFER_BIT),k&&(z|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",pe,!1),n.removeEventListener("webglcontextrestored",U,!1),n.removeEventListener("webglcontextcreationerror",ye,!1),Ee.dispose(),ke.dispose(),Oe.dispose(),E.dispose(),$.dispose(),ue.dispose(),Be.dispose(),et.dispose(),Ce.dispose(),je.dispose(),je.removeEventListener("sessionstart",Xt),je.removeEventListener("sessionend",lt),ge&&(ge.dispose(),ge=null),jt.stop()};function pe(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const x=nt.autoReset,C=ie.enabled,k=ie.autoUpdate,z=ie.needsUpdate,B=ie.type;ht(),nt.autoReset=x,ie.enabled=C,ie.autoUpdate=k,ie.needsUpdate=z,ie.type=B}function ye(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function me(x){const C=x.target;C.removeEventListener("dispose",me),ze(C)}function ze(x){De(x),Oe.remove(x)}function De(x){const C=Oe.get(x).programs;C!==void 0&&(C.forEach(function(k){Ce.releaseProgram(k)}),x.isShaderMaterial&&Ce.releaseShaderCache(x))}this.renderBufferDirect=function(x,C,k,z,B,re){C===null&&(C=be);const j=B.isMesh&&B.matrixWorld.determinant()<0,J=va(x,C,k,z,B);Ae.setMaterial(z,j);let ne=k.index,le=1;if(z.wireframe===!0){if(ne=se.getWireframeAttribute(k),ne===void 0)return;le=2}const ce=k.drawRange,we=k.attributes.position;let Ke=ce.start*le,Ut=(ce.start+ce.count)*le;re!==null&&(Ke=Math.max(Ke,re.start*le),Ut=Math.min(Ut,(re.start+re.count)*le)),ne!==null?(Ke=Math.max(Ke,0),Ut=Math.min(Ut,ne.count)):we!=null&&(Ke=Math.max(Ke,0),Ut=Math.min(Ut,we.count));const Qe=Ut-Ke;if(Qe<0||Qe===1/0)return;Be.setup(B,z,J,k,ne);let mt,Ye=Ve;if(ne!==null&&(mt=ae.get(ne),Ye=Fe,Ye.setIndex(mt)),B.isMesh)z.wireframe===!0?(Ae.setLineWidth(z.wireframeLinewidth*He()),Ye.setMode(X.LINES)):Ye.setMode(X.TRIANGLES);else if(B.isLine){let Ie=z.linewidth;Ie===void 0&&(Ie=1),Ae.setLineWidth(Ie*He()),B.isLineSegments?Ye.setMode(X.LINES):B.isLineLoop?Ye.setMode(X.LINE_LOOP):Ye.setMode(X.LINE_STRIP)}else B.isPoints?Ye.setMode(X.POINTS):B.isSprite&&Ye.setMode(X.TRIANGLES);if(B.isBatchedMesh)Ye.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)Ye.renderInstances(Ke,Qe,B.count);else if(k.isInstancedBufferGeometry){const Ie=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,rt=Math.min(k.instanceCount,Ie);Ye.renderInstances(Ke,Qe,rt)}else Ye.render(Ke,Qe)};function it(x,C,k){x.transparent===!0&&x.side===En&&x.forceSinglePass===!1?(x.side=Rn,x.needsUpdate=!0,Er(x,C,k),x.side=pi,x.needsUpdate=!0,Er(x,C,k),x.side=En):Er(x,C,k)}this.compile=function(x,C,k=null){k===null&&(k=x),p=ke.get(k),p.init(),m.push(p),k.traverseVisible(function(B){B.isLight&&B.layers.test(C.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),x!==k&&x.traverseVisible(function(B){B.isLight&&B.layers.test(C.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights(v._useLegacyLights);const z=new Set;return x.traverse(function(B){const re=B.material;if(re)if(Array.isArray(re))for(let j=0;j<re.length;j++){const J=re[j];it(J,k,B),z.add(J)}else it(re,k,B),z.add(re)}),m.pop(),p=null,z},this.compileAsync=function(x,C,k=null){const z=this.compile(x,C,k);return new Promise(B=>{function re(){if(z.forEach(function(j){Oe.get(j).currentProgram.isReady()&&z.delete(j)}),z.size===0){B(x);return}setTimeout(re,10)}Re.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let at=null;function Dt(x){at&&at(x)}function Xt(){jt.stop()}function lt(){jt.start()}const jt=new pv;jt.setAnimationLoop(Dt),typeof self<"u"&&jt.setContext(self),this.setAnimationLoop=function(x){at=x,je.setAnimationLoop(x),x===null?jt.stop():jt.start()},je.addEventListener("sessionstart",Xt),je.addEventListener("sessionend",lt),this.render=function(x,C){if(C!==void 0&&C.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),C.parent===null&&C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),je.enabled===!0&&je.isPresenting===!0&&(je.cameraAutoUpdate===!0&&je.updateCamera(C),C=je.getCamera()),x.isScene===!0&&x.onBeforeRender(v,x,C,A),p=ke.get(x,m.length),p.init(),m.push(p),Se.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse),K.setFromProjectionMatrix(Se),he=this.localClippingEnabled,Q=Ge.init(this.clippingPlanes,he),_=Ee.get(x,u.length),_.init(),u.push(_),Pn(x,C,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(P,I),this.info.render.frame++,Q===!0&&Ge.beginShadows();const k=p.state.shadowsArray;if(ie.render(k,x,C),Q===!0&&Ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),ct.render(_,x),p.setupLights(v._useLegacyLights),C.isArrayCamera){const z=C.cameras;for(let B=0,re=z.length;B<re;B++){const j=z[B];ro(_,x,j,j.viewport)}}else ro(_,x,C);A!==null&&(R.updateMultisampleRenderTarget(A),R.updateRenderTargetMipmap(A)),x.isScene===!0&&x.onAfterRender(v,x,C),Be.resetDefaultState(),O=-1,S=null,m.pop(),m.length>0?p=m[m.length-1]:p=null,u.pop(),u.length>0?_=u[u.length-1]:_=null};function Pn(x,C,k,z){if(x.visible===!1)return;if(x.layers.test(C.layers)){if(x.isGroup)k=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(C);else if(x.isLight)p.pushLight(x),x.castShadow&&p.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||K.intersectsSprite(x)){z&&Pe.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Se);const j=ue.update(x),J=x.material;J.visible&&_.push(x,j,J,k,Pe.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||K.intersectsObject(x))){const j=ue.update(x),J=x.material;if(z&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Pe.copy(x.boundingSphere.center)):(j.boundingSphere===null&&j.computeBoundingSphere(),Pe.copy(j.boundingSphere.center)),Pe.applyMatrix4(x.matrixWorld).applyMatrix4(Se)),Array.isArray(J)){const ne=j.groups;for(let le=0,ce=ne.length;le<ce;le++){const we=ne[le],Ke=J[we.materialIndex];Ke&&Ke.visible&&_.push(x,j,Ke,k,Pe.z,we)}}else J.visible&&_.push(x,j,J,k,Pe.z,null)}}const re=x.children;for(let j=0,J=re.length;j<J;j++)Pn(re[j],C,k,z)}function ro(x,C,k,z){const B=x.opaque,re=x.transmissive,j=x.transparent;p.setupLightsView(k),Q===!0&&Ge.setGlobalState(v.clippingPlanes,k),re.length>0&&ga(B,re,C,k),z&&Ae.viewport(w.copy(z)),B.length>0&&Jt(B,C,k),re.length>0&&Jt(re,C,k),j.length>0&&Jt(j,C,k),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function ga(x,C,k,z){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;const re=Le.isWebGL2;ge===null&&(ge=new Yr(1,1,{generateMipmaps:!0,type:Re.has("EXT_color_buffer_half_float")?aa:pr,minFilter:oa,samples:re?4:0})),v.getDrawingBufferSize(_e),re?ge.setSize(_e.x,_e.y):ge.setSize(kd(_e.x),kd(_e.y));const j=v.getRenderTarget();v.setRenderTarget(ge),v.getClearColor(W),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear();const J=v.toneMapping;v.toneMapping=hr,Jt(x,k,z),R.updateMultisampleRenderTarget(ge),R.updateRenderTargetMipmap(ge);let ne=!1;for(let le=0,ce=C.length;le<ce;le++){const we=C[le],Ke=we.object,Ut=we.geometry,Qe=we.material,mt=we.group;if(Qe.side===En&&Ke.layers.test(z.layers)){const Ye=Qe.side;Qe.side=Rn,Qe.needsUpdate=!0,so(Ke,k,z,Ut,Qe,mt),Qe.side=Ye,Qe.needsUpdate=!0,ne=!0}}ne===!0&&(R.updateMultisampleRenderTarget(ge),R.updateRenderTargetMipmap(ge)),v.setRenderTarget(j),v.setClearColor(W,L),v.toneMapping=J}function Jt(x,C,k){const z=C.isScene===!0?C.overrideMaterial:null;for(let B=0,re=x.length;B<re;B++){const j=x[B],J=j.object,ne=j.geometry,le=z===null?j.material:z,ce=j.group;J.layers.test(k.layers)&&so(J,C,k,ne,le,ce)}}function so(x,C,k,z,B,re){x.onBeforeRender(v,C,k,z,B,re),x.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),B.onBeforeRender(v,C,k,z,x,re),B.transparent===!0&&B.side===En&&B.forceSinglePass===!1?(B.side=Rn,B.needsUpdate=!0,v.renderBufferDirect(k,C,z,B,x,re),B.side=pi,B.needsUpdate=!0,v.renderBufferDirect(k,C,z,B,x,re),B.side=En):v.renderBufferDirect(k,C,z,B,x,re),x.onAfterRender(v,C,k,z,B,re)}function Er(x,C,k){C.isScene!==!0&&(C=be);const z=Oe.get(x),B=p.state.lights,re=p.state.shadowsArray,j=B.state.version,J=Ce.getParameters(x,B.state,re,C,k),ne=Ce.getProgramCacheKey(J);let le=z.programs;z.environment=x.isMeshStandardMaterial?C.environment:null,z.fog=C.fog,z.envMap=(x.isMeshStandardMaterial?$:E).get(x.envMap||z.environment),le===void 0&&(x.addEventListener("dispose",me),le=new Map,z.programs=le);let ce=le.get(ne);if(ce!==void 0){if(z.currentProgram===ce&&z.lightsStateVersion===j)return ao(x,J),ce}else J.uniforms=Ce.getUniforms(x),x.onBuild(k,J,v),x.onBeforeCompile(J,v),ce=Ce.acquireProgram(J,ne),le.set(ne,ce),z.uniforms=J.uniforms;const we=z.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(we.clippingPlanes=Ge.uniform),ao(x,J),z.needsLights=fe(x),z.lightsStateVersion=j,z.needsLights&&(we.ambientLightColor.value=B.state.ambient,we.lightProbe.value=B.state.probe,we.directionalLights.value=B.state.directional,we.directionalLightShadows.value=B.state.directionalShadow,we.spotLights.value=B.state.spot,we.spotLightShadows.value=B.state.spotShadow,we.rectAreaLights.value=B.state.rectArea,we.ltc_1.value=B.state.rectAreaLTC1,we.ltc_2.value=B.state.rectAreaLTC2,we.pointLights.value=B.state.point,we.pointLightShadows.value=B.state.pointShadow,we.hemisphereLights.value=B.state.hemi,we.directionalShadowMap.value=B.state.directionalShadowMap,we.directionalShadowMatrix.value=B.state.directionalShadowMatrix,we.spotShadowMap.value=B.state.spotShadowMap,we.spotLightMatrix.value=B.state.spotLightMatrix,we.spotLightMap.value=B.state.spotLightMap,we.pointShadowMap.value=B.state.pointShadowMap,we.pointShadowMatrix.value=B.state.pointShadowMatrix),z.currentProgram=ce,z.uniformsList=null,ce}function oo(x){if(x.uniformsList===null){const C=x.currentProgram.getUniforms();x.uniformsList=El.seqWithValue(C.seq,x.uniforms)}return x.uniformsList}function ao(x,C){const k=Oe.get(x);k.outputColorSpace=C.outputColorSpace,k.batching=C.batching,k.instancing=C.instancing,k.instancingColor=C.instancingColor,k.skinning=C.skinning,k.morphTargets=C.morphTargets,k.morphNormals=C.morphNormals,k.morphColors=C.morphColors,k.morphTargetsCount=C.morphTargetsCount,k.numClippingPlanes=C.numClippingPlanes,k.numIntersection=C.numClipIntersection,k.vertexAlphas=C.vertexAlphas,k.vertexTangents=C.vertexTangents,k.toneMapping=C.toneMapping}function va(x,C,k,z,B){C.isScene!==!0&&(C=be),R.resetTextureUnits();const re=C.fog,j=z.isMeshStandardMaterial?C.environment:null,J=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Hi,ne=(z.isMeshStandardMaterial?$:E).get(z.envMap||j),le=z.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,ce=!!k.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),we=!!k.morphAttributes.position,Ke=!!k.morphAttributes.normal,Ut=!!k.morphAttributes.color;let Qe=hr;z.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Qe=v.toneMapping);const mt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Ye=mt!==void 0?mt.length:0,Ie=Oe.get(z),rt=p.state.lights;if(Q===!0&&(he===!0||x!==S)){const st=x===S&&z.id===O;Ge.setState(z,x,st)}let Ze=!1;z.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==rt.state.version||Ie.outputColorSpace!==J||B.isBatchedMesh&&Ie.batching===!1||!B.isBatchedMesh&&Ie.batching===!0||B.isInstancedMesh&&Ie.instancing===!1||!B.isInstancedMesh&&Ie.instancing===!0||B.isSkinnedMesh&&Ie.skinning===!1||!B.isSkinnedMesh&&Ie.skinning===!0||B.isInstancedMesh&&Ie.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ie.instancingColor===!1&&B.instanceColor!==null||Ie.envMap!==ne||z.fog===!0&&Ie.fog!==re||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==Ge.numPlanes||Ie.numIntersection!==Ge.numIntersection)||Ie.vertexAlphas!==le||Ie.vertexTangents!==ce||Ie.morphTargets!==we||Ie.morphNormals!==Ke||Ie.morphColors!==Ut||Ie.toneMapping!==Qe||Le.isWebGL2===!0&&Ie.morphTargetsCount!==Ye)&&(Ze=!0):(Ze=!0,Ie.__version=z.version);let fn=Ie.currentProgram;Ze===!0&&(fn=Er(z,C,B));let dt=!1,Qn=!1,xn=!1;const wt=fn.getUniforms(),Ft=Ie.uniforms;if(Ae.useProgram(fn.program)&&(dt=!0,Qn=!0,xn=!0),z.id!==O&&(O=z.id,Qn=!0),dt||S!==x){wt.setValue(X,"projectionMatrix",x.projectionMatrix),wt.setValue(X,"viewMatrix",x.matrixWorldInverse);const st=wt.map.cameraPosition;st!==void 0&&st.setValue(X,Pe.setFromMatrixPosition(x.matrixWorld)),Le.logarithmicDepthBuffer&&wt.setValue(X,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&wt.setValue(X,"isOrthographic",x.isOrthographicCamera===!0),S!==x&&(S=x,Qn=!0,xn=!0)}if(B.isSkinnedMesh){wt.setOptional(X,B,"bindMatrix"),wt.setOptional(X,B,"bindMatrixInverse");const st=B.skeleton;st&&(Le.floatVertexTextures?(st.boneTexture===null&&st.computeBoneTexture(),wt.setValue(X,"boneTexture",st.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}B.isBatchedMesh&&(wt.setOptional(X,B,"batchingTexture"),wt.setValue(X,"batchingTexture",B._matricesTexture,R));const xt=k.morphAttributes;if((xt.position!==void 0||xt.normal!==void 0||xt.color!==void 0&&Le.isWebGL2===!0)&&Ne.update(B,k,fn),(Qn||Ie.receiveShadow!==B.receiveShadow)&&(Ie.receiveShadow=B.receiveShadow,wt.setValue(X,"receiveShadow",B.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Ft.envMap.value=ne,Ft.flipEnvMap.value=ne.isCubeTexture&&ne.isRenderTargetTexture===!1?-1:1),Qn&&(wt.setValue(X,"toneMappingExposure",v.toneMappingExposure),Ie.needsLights&&D(Ft,xn),re&&z.fog===!0&&xe.refreshFogUniforms(Ft,re),xe.refreshMaterialUniforms(Ft,z,H,N,ge),El.upload(X,oo(Ie),Ft,R)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(El.upload(X,oo(Ie),Ft,R),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&wt.setValue(X,"center",B.center),wt.setValue(X,"modelViewMatrix",B.modelViewMatrix),wt.setValue(X,"normalMatrix",B.normalMatrix),wt.setValue(X,"modelMatrix",B.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const st=z.uniformsGroups;for(let Yt=0,zt=st.length;Yt<zt;Yt++)if(Le.isWebGL2){const ei=st[Yt];et.update(ei,fn),et.bind(ei,fn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return fn}function D(x,C){x.ambientLightColor.needsUpdate=C,x.lightProbe.needsUpdate=C,x.directionalLights.needsUpdate=C,x.directionalLightShadows.needsUpdate=C,x.pointLights.needsUpdate=C,x.pointLightShadows.needsUpdate=C,x.spotLights.needsUpdate=C,x.spotLightShadows.needsUpdate=C,x.rectAreaLights.needsUpdate=C,x.hemisphereLights.needsUpdate=C}function fe(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(x,C,k){Oe.get(x.texture).__webglTexture=C,Oe.get(x.depthTexture).__webglTexture=k;const z=Oe.get(x);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=k===void 0,z.__autoAllocateDepthBuffer||Re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(x,C){const k=Oe.get(x);k.__webglFramebuffer=C,k.__useDefaultFramebuffer=C===void 0},this.setRenderTarget=function(x,C=0,k=0){A=x,b=C,T=k;let z=!0,B=null,re=!1,j=!1;if(x){const ne=Oe.get(x);ne.__useDefaultFramebuffer!==void 0?(Ae.bindFramebuffer(X.FRAMEBUFFER,null),z=!1):ne.__webglFramebuffer===void 0?R.setupRenderTarget(x):ne.__hasExternalTextures&&R.rebindTextures(x,Oe.get(x.texture).__webglTexture,Oe.get(x.depthTexture).__webglTexture);const le=x.texture;(le.isData3DTexture||le.isDataArrayTexture||le.isCompressedArrayTexture)&&(j=!0);const ce=Oe.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(ce[C])?B=ce[C][k]:B=ce[C],re=!0):Le.isWebGL2&&x.samples>0&&R.useMultisampledRTT(x)===!1?B=Oe.get(x).__webglMultisampledFramebuffer:Array.isArray(ce)?B=ce[k]:B=ce,w.copy(x.viewport),q.copy(x.scissor),Y=x.scissorTest}else w.copy(G).multiplyScalar(H).floor(),q.copy(Z).multiplyScalar(H).floor(),Y=ee;if(Ae.bindFramebuffer(X.FRAMEBUFFER,B)&&Le.drawBuffers&&z&&Ae.drawBuffers(x,B),Ae.viewport(w),Ae.scissor(q),Ae.setScissorTest(Y),re){const ne=Oe.get(x.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+C,ne.__webglTexture,k)}else if(j){const ne=Oe.get(x.texture),le=C||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,ne.__webglTexture,k||0,le)}O=-1},this.readRenderTargetPixels=function(x,C,k,z,B,re,j){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let J=Oe.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&j!==void 0&&(J=J[j]),J){Ae.bindFramebuffer(X.FRAMEBUFFER,J);try{const ne=x.texture,le=ne.format,ce=ne.type;if(le!==di&&Me.convert(le)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const we=ce===aa&&(Re.has("EXT_color_buffer_half_float")||Le.isWebGL2&&Re.has("EXT_color_buffer_float"));if(ce!==pr&&Me.convert(ce)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ce===ir&&(Le.isWebGL2||Re.has("OES_texture_float")||Re.has("WEBGL_color_buffer_float")))&&!we){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}C>=0&&C<=x.width-z&&k>=0&&k<=x.height-B&&X.readPixels(C,k,z,B,Me.convert(le),Me.convert(ce),re)}finally{const ne=A!==null?Oe.get(A).__webglFramebuffer:null;Ae.bindFramebuffer(X.FRAMEBUFFER,ne)}}},this.copyFramebufferToTexture=function(x,C,k=0){const z=Math.pow(2,-k),B=Math.floor(C.image.width*z),re=Math.floor(C.image.height*z);R.setTexture2D(C,0),X.copyTexSubImage2D(X.TEXTURE_2D,k,0,0,x.x,x.y,B,re),Ae.unbindTexture()},this.copyTextureToTexture=function(x,C,k,z=0){const B=C.image.width,re=C.image.height,j=Me.convert(k.format),J=Me.convert(k.type);R.setTexture2D(k,0),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,k.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,k.unpackAlignment),C.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,z,x.x,x.y,B,re,j,J,C.image.data):C.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,z,x.x,x.y,C.mipmaps[0].width,C.mipmaps[0].height,j,C.mipmaps[0].data):X.texSubImage2D(X.TEXTURE_2D,z,x.x,x.y,j,J,C.image),z===0&&k.generateMipmaps&&X.generateMipmap(X.TEXTURE_2D),Ae.unbindTexture()},this.copyTextureToTexture3D=function(x,C,k,z,B=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const re=x.max.x-x.min.x+1,j=x.max.y-x.min.y+1,J=x.max.z-x.min.z+1,ne=Me.convert(z.format),le=Me.convert(z.type);let ce;if(z.isData3DTexture)R.setTexture3D(z,0),ce=X.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)R.setTexture2DArray(z,0),ce=X.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,z.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,z.unpackAlignment);const we=X.getParameter(X.UNPACK_ROW_LENGTH),Ke=X.getParameter(X.UNPACK_IMAGE_HEIGHT),Ut=X.getParameter(X.UNPACK_SKIP_PIXELS),Qe=X.getParameter(X.UNPACK_SKIP_ROWS),mt=X.getParameter(X.UNPACK_SKIP_IMAGES),Ye=k.isCompressedTexture?k.mipmaps[B]:k.image;X.pixelStorei(X.UNPACK_ROW_LENGTH,Ye.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Ye.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,x.min.x),X.pixelStorei(X.UNPACK_SKIP_ROWS,x.min.y),X.pixelStorei(X.UNPACK_SKIP_IMAGES,x.min.z),k.isDataTexture||k.isData3DTexture?X.texSubImage3D(ce,B,C.x,C.y,C.z,re,j,J,ne,le,Ye.data):k.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(ce,B,C.x,C.y,C.z,re,j,J,ne,Ye.data)):X.texSubImage3D(ce,B,C.x,C.y,C.z,re,j,J,ne,le,Ye),X.pixelStorei(X.UNPACK_ROW_LENGTH,we),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Ke),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Ut),X.pixelStorei(X.UNPACK_SKIP_ROWS,Qe),X.pixelStorei(X.UNPACK_SKIP_IMAGES,mt),B===0&&z.generateMipmaps&&X.generateMipmap(ce),Ae.unbindTexture()},this.initTexture=function(x){x.isCubeTexture?R.setTextureCube(x,0):x.isData3DTexture?R.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?R.setTexture2DArray(x,0):R.setTexture2D(x,0),Ae.unbindTexture()},this.resetState=function(){b=0,T=0,A=null,Ae.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Hf?"display-p3":"srgb",n.unpackColorSpace=ft.workingColorSpace===yc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===en?Hr:tv}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Hr?en:Hi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class oT extends Mv{}oT.prototype.isWebGL1Renderer=!0;class aT extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class lT{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Nd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=mr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const hn=new F;class ec{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)hn.fromBufferAttribute(this,n),hn.applyMatrix4(e),this.setXYZ(n,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)hn.fromBufferAttribute(this,n),hn.applyNormalMatrix(e),this.setXYZ(n,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)hn.fromBufferAttribute(this,n),hn.transformDirection(e),this.setXYZ(n,hn.x,hn.y,hn.z);return this}setX(e,n){return this.normalized&&(n=pt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Di(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Di(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Di(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Di(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=pt(n,this.array),i=pt(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=pt(n,this.array),i=pt(i,this.array),r=pt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=pt(n,this.array),i=pt(i,this.array),r=pt(r,this.array),s=pt(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new Tt(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ec(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Lo extends Kr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ms;const Mo=new F,gs=new F,vs=new F,_s=new Xe,Eo=new Xe,Ev=new Lt,rl=new F,wo=new F,sl=new F,Sm=new Xe,Pu=new Xe,Mm=new Xe;class ol extends Gt{constructor(e=new Lo){if(super(),this.isSprite=!0,this.type="Sprite",ms===void 0){ms=new tn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new lT(n,5);ms.setIndex([0,1,2,0,2,3]),ms.setAttribute("position",new ec(i,3,0,!1)),ms.setAttribute("uv",new ec(i,2,3,!1))}this.geometry=ms,this.material=e,this.center=new Xe(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),gs.setFromMatrixScale(this.matrixWorld),Ev.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),vs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&gs.multiplyScalar(-vs.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;al(rl.set(-.5,-.5,0),vs,o,gs,r,s),al(wo.set(.5,-.5,0),vs,o,gs,r,s),al(sl.set(.5,.5,0),vs,o,gs,r,s),Sm.set(0,0),Pu.set(1,0),Mm.set(1,1);let a=e.ray.intersectTriangle(rl,wo,sl,!1,Mo);if(a===null&&(al(wo.set(-.5,.5,0),vs,o,gs,r,s),Pu.set(0,1),a=e.ray.intersectTriangle(rl,sl,wo,!1,Mo),a===null))return;const l=e.ray.origin.distanceTo(Mo);l<e.near||l>e.far||n.push({distance:l,point:Mo.clone(),uv:jn.getInterpolation(Mo,rl,wo,sl,Sm,Pu,Mm,new Xe),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function al(t,e,n,i,r,s){_s.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(Eo.x=s*_s.x-r*_s.y,Eo.y=r*_s.x+s*_s.y):Eo.copy(_s),t.copy(e),t.x+=Eo.x,t.y+=Eo.y,t.applyMatrix4(Ev)}class Bd extends Kr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Em=new Lt,Hd=new Gf,ll=new xc,cl=new F;class To extends Gt{constructor(e=new tn,n=new Bd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ll.copy(i.boundingSphere),ll.applyMatrix4(r),ll.radius+=s,e.ray.intersectsSphere(ll)===!1)return;Em.copy(r).invert(),Hd.copy(e.ray).applyMatrix4(Em);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),g=Math.min(c.count,o.start+o.count);for(let y=h,_=g;y<_;y++){const p=c.getX(y);cl.fromBufferAttribute(f,p),wm(cl,p,l,r,e,n,this)}}else{const h=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let y=h,_=g;y<_;y++)cl.fromBufferAttribute(f,y),wm(cl,y,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function wm(t,e,n,i,r,s,o){const a=Hd.distanceSqToPoint(t);if(a<n){const l=new F;Hd.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Tm extends Cn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class jf extends tn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),d(),this.setAttribute("position",new un(s,3)),this.setAttribute("normal",new un(s.slice(),3)),this.setAttribute("uv",new un(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(m){const v=new F,M=new F,b=new F;for(let T=0;T<n.length;T+=3)g(n[T+0],v),g(n[T+1],M),g(n[T+2],b),l(v,M,b,m)}function l(m,v,M,b){const T=b+1,A=[];for(let O=0;O<=T;O++){A[O]=[];const S=m.clone().lerp(M,O/T),w=v.clone().lerp(M,O/T),q=T-O;for(let Y=0;Y<=q;Y++)Y===0&&O===T?A[O][Y]=S:A[O][Y]=S.clone().lerp(w,Y/q)}for(let O=0;O<T;O++)for(let S=0;S<2*(T-O)-1;S++){const w=Math.floor(S/2);S%2===0?(h(A[O][w+1]),h(A[O+1][w]),h(A[O][w])):(h(A[O][w+1]),h(A[O+1][w+1]),h(A[O+1][w]))}}function c(m){const v=new F;for(let M=0;M<s.length;M+=3)v.x=s[M+0],v.y=s[M+1],v.z=s[M+2],v.normalize().multiplyScalar(m),s[M+0]=v.x,s[M+1]=v.y,s[M+2]=v.z}function d(){const m=new F;for(let v=0;v<s.length;v+=3){m.x=s[v+0],m.y=s[v+1],m.z=s[v+2];const M=p(m)/2/Math.PI+.5,b=u(m)/Math.PI+.5;o.push(M,1-b)}y(),f()}function f(){for(let m=0;m<o.length;m+=6){const v=o[m+0],M=o[m+2],b=o[m+4],T=Math.max(v,M,b),A=Math.min(v,M,b);T>.9&&A<.1&&(v<.2&&(o[m+0]+=1),M<.2&&(o[m+2]+=1),b<.2&&(o[m+4]+=1))}}function h(m){s.push(m.x,m.y,m.z)}function g(m,v){const M=m*3;v.x=e[M+0],v.y=e[M+1],v.z=e[M+2]}function y(){const m=new F,v=new F,M=new F,b=new F,T=new Xe,A=new Xe,O=new Xe;for(let S=0,w=0;S<s.length;S+=9,w+=6){m.set(s[S+0],s[S+1],s[S+2]),v.set(s[S+3],s[S+4],s[S+5]),M.set(s[S+6],s[S+7],s[S+8]),T.set(o[w+0],o[w+1]),A.set(o[w+2],o[w+3]),O.set(o[w+4],o[w+5]),b.copy(m).add(v).add(M).divideScalar(3);const q=p(b);_(T,w+0,m,q),_(A,w+2,v,q),_(O,w+4,M,q)}}function _(m,v,M,b){b<0&&m.x===1&&(o[v]=m.x-1),M.x===0&&M.z===0&&(o[v]=b/2/Math.PI+.5)}function p(m){return Math.atan2(m.z,-m.x)}function u(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jf(e.vertices,e.indices,e.radius,e.details)}}class Yf extends jf{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Yf(e.radius,e.detail)}}class tc extends tn{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],d=[];let f=e;const h=(n-e)/r,g=new F,y=new Xe;for(let _=0;_<=r;_++){for(let p=0;p<=i;p++){const u=s+p/i*o;g.x=f*Math.cos(u),g.y=f*Math.sin(u),l.push(g.x,g.y,g.z),c.push(0,0,1),y.x=(g.x/n+1)/2,y.y=(g.y/n+1)/2,d.push(y.x,y.y)}f+=h}for(let _=0;_<r;_++){const p=_*(i+1);for(let u=0;u<i;u++){const m=u+p,v=m,M=m+i+1,b=m+i+2,T=m+1;a.push(v,M,T),a.push(M,b,T)}}this.setIndex(a),this.setAttribute("position",new un(l,3)),this.setAttribute("normal",new un(c,3)),this.setAttribute("uv",new un(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class si extends tn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const d=[],f=new F,h=new F,g=[],y=[],_=[],p=[];for(let u=0;u<=i;u++){const m=[],v=u/i;let M=0;u===0&&o===0?M=.5/n:u===i&&l===Math.PI&&(M=-.5/n);for(let b=0;b<=n;b++){const T=b/n;f.x=-e*Math.cos(r+T*s)*Math.sin(o+v*a),f.y=e*Math.cos(o+v*a),f.z=e*Math.sin(r+T*s)*Math.sin(o+v*a),y.push(f.x,f.y,f.z),h.copy(f).normalize(),_.push(h.x,h.y,h.z),p.push(T+M,1-v),m.push(c++)}d.push(m)}for(let u=0;u<i;u++)for(let m=0;m<n;m++){const v=d[u][m+1],M=d[u][m],b=d[u+1][m],T=d[u+1][m+1];(u!==0||o>0)&&g.push(v,M,T),(u!==i-1||l<Math.PI)&&g.push(M,b,T)}this.setIndex(g),this.setAttribute("position",new un(y,3)),this.setAttribute("normal",new un(_,3)),this.setAttribute("uv",new un(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new si(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Lu extends Kr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nv,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ec extends Gt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class cT extends Ec{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new We(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Du=new Lt,Am=new F,bm=new F;class wv{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.map=null,this.mapPass=null,this.matrix=new Lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wf,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Am.setFromMatrixPosition(e.matrixWorld),n.position.copy(Am),bm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(bm),n.updateMatrixWorld(),Du.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Du),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Du)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Rm=new Lt,Ao=new F,Uu=new F;class uT extends wv{constructor(){super(new In(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Xe(4,2),this._viewportCount=6,this._viewports=[new Et(2,1,1,1),new Et(0,1,1,1),new Et(3,1,1,1),new Et(1,1,1,1),new Et(3,0,1,1),new Et(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Ao.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ao),Uu.copy(i.position),Uu.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Uu),i.updateMatrixWorld(),r.makeTranslation(-Ao.x,-Ao.y,-Ao.z),Rm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rm)}}class ul extends Ec{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new uT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class dT extends wv{constructor(){super(new mv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Iu extends Ec{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new dT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class fT extends Ec{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class hT{constructor(e,n,i=0,r=1/0){this.ray=new Gf(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Vf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(e,n=!0,i=[]){return Gd(e,this,i,n),i.sort(Cm),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Gd(e[r],this,i,n);return i.sort(Cm),i}}function Cm(t,e){return t.distance-e.distance}function Gd(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let s=0,o=r.length;s<o;s++)Gd(r[s],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zf);const oe={bg:"#0f0d0b",surface:"#1e1b17",surfaceLight:"#2d2a25",amber:"#d4a574",amberBright:"#f0c896",amberDim:"#8b6b4a",textPrimary:"#ede5d8",textSecondary:"#8a8278",textMuted:"#4a4540",glowAmber:"rgba(212,165,116,0.25)"},Vd={anger:{hex:"#d94f4f",r:.85,g:.31,b:.31,label:"anger"},frustration:{hex:"#e06b45",r:.88,g:.42,b:.27,label:"frustration"},anxiety:{hex:"#d98a3d",r:.85,g:.54,b:.24,label:"anxiety"},fear:{hex:"#8b5fbf",r:.55,g:.37,b:.75,label:"fear"},sadness:{hex:"#5b7fbf",r:.36,g:.5,b:.75,label:"sadness"},loneliness:{hex:"#6b6b9e",r:.42,g:.42,b:.62,label:"loneliness"},exhaustion:{hex:"#7a6b5a",r:.48,g:.42,b:.35,label:"exhaustion"},overwhelm:{hex:"#c75a7a",r:.78,g:.35,b:.48,label:"overwhelm"},joy:{hex:"#d4b84f",r:.83,g:.72,b:.31,label:"joy"},peace:{hex:"#7ab89e",r:.48,g:.72,b:.62,label:"peace"},hope:{hex:"#8fc98f",r:.56,g:.79,b:.56,label:"hope"},confidence:{hex:"#c9a84f",r:.79,g:.66,b:.31,label:"confidence"},clarity:{hex:"#8ecae6",r:.56,g:.79,b:.9,label:"clarity"},gratitude:{hex:"#a3d9a5",r:.64,g:.85,b:.65,label:"gratitude"},excitement:{hex:"#e8b84f",r:.91,g:.72,b:.31,label:"excitement"},love:{hex:"#e07aa5",r:.88,g:.48,b:.65,label:"love"},neutral:{hex:"#d4a574",r:.83,g:.65,b:.46,label:"neutral"}},pT={anger:["angry","rage","furious","pissed","mad","hatred","resentment","bitter"],frustration:["frustrated","annoyed","irritated","stuck","blocked","failing","wrong"],anxiety:["anxious","worried","nervous","panic","racing","restless","uneasy","stress","stressed","overthink"],fear:["fear","scared","afraid","terrified","dread","paranoid","unsafe"],sadness:["sad","crying","depressed","grief","loss","heartbroken","empty","numb"],loneliness:["lonely","alone","isolated","disconnected","nobody","abandoned"],exhaustion:["tired","exhausted","drained","burnout","depleted","fatigued","worn"],overwhelm:["overwhelm","overwhelmed","drowning","too much","chaotic","scattered"],joy:["happy","joy","joyful","fun","laughing","wonderful","amazing","delighted"],peace:["calm","peace","peaceful","serene","still","quiet","centered","grounded","present"],hope:["hope","hopeful","optimistic","better","improving","growth","progress","forward"],confidence:["confident","strong","capable","proud","powerful","bold","certain"],clarity:["clarity","clear","insight","understand","realize","breakthrough","focus"],gratitude:["grateful","thankful","blessed","appreciate","fortunate","lucky"],excitement:["excited","thrilled","eager","alive","inspired","energized","motivated","built","building","create","creating"],love:["love","loving","connected","intimate","warm","tender","cherish","caring"]};function mT(t){const e=t.toLowerCase();let n="neutral",i=0;for(const[r,s]of Object.entries(pT)){const o=s.filter(a=>e.includes(a)).length;o>i&&(i=o,n=r)}return n}function wc(t){const e=["anger","frustration","anxiety","fear","sadness","loneliness","exhaustion","overwhelm"],n=["joy","peace","hope","confidence","clarity","gratitude","excitement","love"];return e.includes(t)?"stress":n.includes(t)?"resolved":"neutral"}function gr(t){return Vd[t]||Vd.neutral}class gT{constructor(){this.ctx=null,this.initialized=!1}init(){if(!this.initialized)try{this.ctx=new(window.AudioContext||window.webkitAudioContext),this.initialized=!0}catch{}}play(e){if(!this.ctx)return;const n=this.ctx.currentTime;if(e==="zoom"){const i=this.ctx.createOscillator(),r=this.ctx.createGain(),s=this.ctx.createBiquadFilter();i.type="sawtooth",i.frequency.setValueAtTime(40,n),i.frequency.exponentialRampToValueAtTime(120,n+2.5),s.type="lowpass",s.frequency.setValueAtTime(200,n),s.frequency.exponentialRampToValueAtTime(2e3,n+2.5),r.gain.setValueAtTime(0,n),r.gain.linearRampToValueAtTime(.12,n+.8),r.gain.linearRampToValueAtTime(0,n+3),i.connect(s).connect(r).connect(this.ctx.destination),i.start(n),i.stop(n+3);const o=this.ctx.createOscillator(),a=this.ctx.createGain();o.type="sine",o.frequency.setValueAtTime(440,n+1),o.frequency.exponentialRampToValueAtTime(880,n+2.5),a.gain.setValueAtTime(0,n+1),a.gain.linearRampToValueAtTime(.03,n+1.8),a.gain.linearRampToValueAtTime(0,n+3),o.connect(a).connect(this.ctx.destination),o.start(n+1),o.stop(n+3)}if(e==="reveal"){const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(660,n),i.frequency.exponentialRampToValueAtTime(440,n+.6),r.gain.setValueAtTime(.06,n),r.gain.exponentialRampToValueAtTime(.001,n+.8),i.connect(r).connect(this.ctx.destination),i.start(n),i.stop(n+.8)}if(e==="submit"&&[0,.08,.16].forEach((i,r)=>{const s=this.ctx.createOscillator(),o=this.ctx.createGain();s.type="sine",s.frequency.value=[523,659,784][r],o.gain.setValueAtTime(.05,n+i),o.gain.exponentialRampToValueAtTime(.001,n+i+.4),s.connect(o).connect(this.ctx.destination),s.start(n+i),s.stop(n+i+.4)}),e==="hover"){const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sine",i.frequency.value=1200,r.gain.setValueAtTime(.015,n),r.gain.exponentialRampToValueAtTime(.001,n+.12),i.connect(r).connect(this.ctx.destination),i.start(n),i.stop(n+.12)}if(e==="drone"){const i=this.ctx.createOscillator(),r=this.ctx.createOscillator(),s=this.ctx.createGain(),o=this.ctx.createBiquadFilter();return i.type="sine",i.frequency.value=55,r.type="sine",r.frequency.value=82.5,o.type="lowpass",o.frequency.value=350,s.gain.value=.025,i.connect(o),r.connect(o),o.connect(s).connect(this.ctx.destination),i.start(n),r.start(n),{stop:()=>{s.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+2),setTimeout(()=>{i.stop(),r.stop()},2e3)}}}if(e==="impact"){const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(180,n),i.frequency.exponentialRampToValueAtTime(40,n+.5),r.gain.setValueAtTime(.08,n),r.gain.exponentialRampToValueAtTime(.001,n+.6),i.connect(r).connect(this.ctx.destination),i.start(n),i.stop(n+.6)}e==="coalesce"&&[440,660,880,1100].forEach((i,r)=>{const s=this.ctx.createOscillator(),o=this.ctx.createGain();s.type="sine",s.frequency.setValueAtTime(i*.5,n+r*.12),s.frequency.exponentialRampToValueAtTime(i,n+r*.12+.25),o.gain.setValueAtTime(0,n+r*.12),o.gain.linearRampToValueAtTime(.035,n+r*.12+.08),o.gain.exponentialRampToValueAtTime(.001,n+r*.12+.7),s.connect(o).connect(this.ctx.destination),s.start(n+r*.12),s.stop(n+r*.12+.7)})}}const Pt=new gT;function $i(t,e,n){const i=Math.sin(t*127.1+e*311.7+n*74.7)*43758.5453;return(i-Math.floor(i))*2-1}function vT(t,e,n){const i=Math.floor(t),r=Math.floor(e),s=Math.floor(n),o=t-i,a=e-r,l=n-s,c=o*o*(3-2*o),d=a*a*(3-2*a),f=l*l*(3-2*l),h=$i(i,r,s),g=$i(i+1,r,s),y=$i(i,r+1,s),_=$i(i+1,r+1,s),p=$i(i,r,s+1),u=$i(i+1,r,s+1),m=$i(i,r+1,s+1),v=$i(i+1,r+1,s+1),M=h+(g-h)*c,b=y+(_-y)*c,T=p+(u-p)*c,A=m+(v-m)*c,O=M+(b-M)*d,S=T+(A-T)*d;return O+(S-O)*f}function Nu(t,e,n,i=4){let r=0,s=.5,o=1;for(let a=0;a<i;a++)r+=s*vT(t*o,e*o,n*o),s*=.5,o*=2;return r}function Do(t){let e=2166136261,n=1818371886;for(let s=0;s<t.length;s++)e^=t.charCodeAt(s),e=Math.imul(e,16777619),n^=t.charCodeAt(s),n=Math.imul(n,1540483477);const i=.2+(e>>>0)/4294967295*(Math.PI-.4),r=(n>>>0)/4294967295*Math.PI*2;return{phi:i,theta:r}}function Pm(t,e){const{phi:n,theta:i}=Do(t);return new F(e*Math.sin(n)*Math.cos(i),e*Math.cos(n),e*Math.sin(n)*Math.sin(i))}const _T=new Set(["i","me","my","the","a","an","is","was","am","are","be","been","to","of","in","for","on","with","at","by","it","its","and","or","but","not","no","so","if","do","did","has","had","have","this","that","what","when","where","how","who","all","just","very","really","too","about","out","up","can","will","would","should","could","get","got","being","some","than","them","then","they","from","like","feel","feeling","think","thinking","know","thing","things","going","want","need","much","way","even","still","right","now","today","always","never","every","something","anything","everything","been","also","into","more","most","over","such","only","through","back","after","before","other","make","first","come","made","well","here","take","many","because","does","each","same","different","kind","between","under","while","again","off","down","keep","around","another","though","during","few","both","these","those","since"]),yT={built:"build",building:"build",builds:"build",builder:"build",creating:"create",created:"create",creates:"create",creation:"create",hopeful:"hope",hoping:"hope",hopes:"hope",hoped:"hope",sleeping:"sleep",slept:"sleep",sleeps:"sleep",sleepless:"sleep",working:"work",worked:"work",works:"work",isolated:"lonely",alone:"lonely",loneliness:"lonely",exhausted:"exhaust",exhausting:"exhaust",exhaustion:"exhaust",depleted:"exhaust",drained:"exhaust",fatigued:"exhaust",frustrated:"frustrate",frustrating:"frustrate",frustration:"frustrate",peaceful:"peace",grounded:"peace",clarity:"clear",clearer:"clear",confident:"confidence",grateful:"gratitude",excited:"excite",exciting:"excite",excitement:"excite",stressing:"stress",stressed:"stress",stressful:"stress",worried:"worry",worries:"worry",worrying:"worry",scared:"fear",afraid:"fear",fearful:"fear",terrified:"fear",angry:"anger",angrier:"anger",happier:"happy",happiness:"happy",sadder:"sad",sadness:"sad",comparing:"compare",compared:"compare",spiraling:"spiral",racing:"race",questioning:"question",improving:"improve",shifting:"shift",holding:"hold"};function vr(t){return yT[t]||t}function xT(t){const e=t.toLowerCase().replace(/[^a-z'\s]/g,"").split(/\s+/).filter(s=>s.length>0),n=e.filter(s=>s.length>2&&!_T.has(s)).map(vr),i=[...new Set(n)];if(i.length>0)return i;const r=e.filter(s=>s.length>2).map(vr);if(r.length>0)return[...new Set(r)];if(e.length>0){const s=e.reduce((o,a)=>o.length>=a.length?o:a);return[vr(s)]}return["thought"]}const Lm={"work & career":["career","job","work","working","office","boss","coworker","meeting","deadline","project","promotion","fired","quit","hire","hiring","resume","interview","company","manager","team","colleague","corporate","professional","freelance","client","business","startup","hustle","grind","commute","salary","raise","performance","review","intern","remote","hybrid","workload","overtime","productivity"],finances:["money","finance","financial","debt","bills","salary","income","budget","savings","invest","investing","investment","expensive","afford","rent","mortgage","bank","credit","loan","broke","wealthy","rich","poor","pay","payment","tax","taxes","crypto","stock","stocks","spending","cost","price","save","fund","retire","retirement","economic"],"health & body":["health","sleep","sleeping","exercise","exercising","workout","gym","sick","sickness","pain","energy","tired","exhausted","body","weight","diet","eating","eat","headache","medication","doctor","hospital","therapy","therapist","medical","illness","symptom","insomnia","fatigue","migraine","chronic","vitamin","nutrition","fitness","running","yoga","meditation","breathing","rest","recovery","heal","healing"],relationships:["relationship","friend","friends","friendship","family","partner","love","loving","lonely","trust","argue","argument","breakup","dating","marriage","married","parents","parent","mom","dad","mother","father","sibling","brother","sister","child","children","kid","kids","boyfriend","girlfriend","husband","wife","spouse","couple","bond","connection","connect","companion","social","people","person","community","neighbor","roommate","ex","divorce","communicate","communication"],"growth & purpose":["growth","learn","learning","skill","skills","improve","goal","goals","progress","clarity","direction","purpose","meaning","create","creating","build","building","mentor","mentoring","education","study","studying","school","college","university","degree","course","read","reading","book","practice","master","mastery","evolve","develop","development","potential","ambition","discipline","habit","routine","vision","mission","calling","passion","talent"],creativity:["creative","creativity","art","artist","music","musical","write","writing","design","designing","paint","painting","draw","drawing","sing","singing","dance","dancing","perform","performance","compose","craft","make","making","code","coding","program","programming","produce","producing","film","photo","photography","studio","instrument","song","poetry","poem","story","novel","inspiration","imagination","expression"],emotions:["stress","stressed","anxious","anxiety","worried","worry","fear","scared","panic","overwhelm","overwhelmed","stuck","lost","angry","frustrated","frustration","sad","sadness","lonely","tired","exhausted","hate","failing","wrong","bad","worse","worst","nothing","afraid","dread","racing","restless","calm","peace","peaceful","happy","happiness","joy","grateful","gratitude","better","improve","clarity","clear","good","great","love","hope","confident","confidence","strong","free","relief","resolved","done","finished","proud","excited","alive","present","anxious","nervous","depressed","depression","mood","emotional"],identity:["identity","self","worth","value","values","believe","belief","authentic","genuine","true","real","mask","pretend","image","ego","soul","spirit","spiritual","inner","core","essence","personality","character","integrity","moral","ethics","conscience","boundaries","boundary","accept","acceptance","belong","belonging","culture","cultural","heritage","roots","tradition"],environment:["home","house","apartment","space","room","nature","outside","outdoors","city","urban","rural","move","moving","location","place","travel","traveling","trip","vacation","weather","season","environment","surroundings","neighborhood","country","state","world","global","local","scenery","landscape","ocean","mountain","forest","garden","park"],technology:["tech","technology","computer","phone","screen","internet","online","digital","social media","app","software","hardware","device","algorithm","data","ai","artificial intelligence","robot","automation","virtual","cyber","hack","hacking","security","privacy","code","coding","website","platform","server","cloud","blockchain","quantum"],"time & life":["time","future","past","present","memory","memories","remember","forget","age","aging","young","old","birthday","anniversary","year","years","month","months","week","weeks","day","days","morning","evening","night","deadline","rush","hurry","slow","fast","patience","impatient","wait","waiting","soon","later","someday","legacy","life","death","dying","mortality","birth","chapter","phase","season","transition","change","changing"]};function ST(t){const e={};return t.forEach(n=>{let i=!1;for(const[r,s]of Object.entries(Lm))if(s.some(o=>n===o||n.includes(o)||o.includes(n))){e[r]||(e[r]=[]),e[r].includes(n)||e[r].push(n),i=!0;break}if(!i){for(const[r,s]of Object.entries(Lm))if(s.some(o=>n.length>=4&&o.length>=4&&(o.startsWith(n.slice(0,4))||n.startsWith(o.slice(0,4))))){e[r]||(e[r]=[]),e[r].includes(n)||e[r].push(n),i=!0;break}}i||(e.other||(e.other=[]),e.other.includes(n)||e.other.push(n))}),e}function MT({onEnter:t}){const[e,n]=Ue.useState(0),i=Ue.useRef(null),r=Ue.useRef(null),[s,o]=Ue.useState(null);Ue.useEffect(()=>{const l=[setTimeout(()=>n(1),400),setTimeout(()=>n(2),1400),setTimeout(()=>n(3),2800),setTimeout(()=>n(4),4200)];return()=>l.forEach(clearTimeout)},[]),Ue.useEffect(()=>{const l=i.current;if(!l)return;const c=l.getContext("2d"),d=l.width=window.innerWidth,f=l.height=window.innerHeight,h=Array.from({length:150},()=>({x:Math.random()*d,y:Math.random()*f,vx:(Math.random()-.5)*.4,vy:-Math.random()*.4-.1,sz:Math.random()*2.5+.3,op:Math.random()*.4,life:Math.random()*100}));let g=0;const y=()=>{g++,c.clearRect(0,0,d,f),h.forEach(_=>{_.x+=_.vx+Math.sin(g*.008+_.life)*.3,_.y+=_.vy,_.op=.08+Math.sin(g*.015+_.life)*.12,_.y<-10&&(_.y=f+10,_.x=Math.random()*d),c.beginPath(),c.arc(_.x,_.y,_.sz,0,Math.PI*2),c.fillStyle=`rgba(212,165,116,${Math.max(0,_.op)})`,c.fill()});for(let _=0;_<h.length;_++)for(let p=_+1;p<h.length;p++){const u=Math.hypot(h[_].x-h[p].x,h[_].y-h[p].y);u<90&&(c.beginPath(),c.moveTo(h[_].x,h[_].y),c.lineTo(h[p].x,h[p].y),c.strokeStyle=`rgba(212,165,116,${.03*(1-u/90)})`,c.lineWidth=.5,c.stroke())}r.current=requestAnimationFrame(y)};return e>=1&&y(),()=>cancelAnimationFrame(r.current)},[e]);const a=l=>{Pt.init(),Pt.play("zoom"),n(5),setTimeout(()=>t(l),2600)};return te.jsxs("div",{style:{position:"fixed",inset:0,background:oe.bg,zIndex:100,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",overflow:"hidden",opacity:e===5?0:1,transform:e===5?"scale(4)":"scale(1)",transition:e===5?"all 2.5s cubic-bezier(0.4, 0, 0, 1)":"none",filter:e===5?"blur(8px)":"none"},children:[te.jsx("canvas",{ref:i,style:{position:"absolute",inset:0,opacity:e>=1?1:0,transition:"opacity 2s ease"}}),te.jsx("div",{style:{position:"absolute",width:500,height:500,borderRadius:"50%",background:"radial-gradient(circle, rgba(212,165,116,0.12) 0%, transparent 65%)",opacity:e>=2?1:0,transition:"opacity 2s ease",filter:"blur(50px)",animation:e>=2?"orbPulse 6s ease-in-out infinite":"none"}}),te.jsx("div",{style:{position:"absolute",top:44,fontFamily:"'JetBrains Mono', monospace",fontSize:9,letterSpacing:"0.35em",color:oe.textMuted,opacity:e>=1?1:0,transform:e>=1?"translateY(0)":"translateY(-10px)",transition:"all 1.2s ease"},children:"LIRIO LABS PRESENTS"}),te.jsxs("div",{style:{position:"relative",zIndex:2,textAlign:"center",transform:e>=2?"translateY(0) scale(1)":"translateY(40px) scale(0.85)",opacity:e>=2?1:0,transition:"all 1.4s cubic-bezier(0.22, 1, 0.36, 1)"},children:[te.jsx("div",{style:{fontFamily:"'Fraunces', Georgia, serif",fontSize:"clamp(80px, 18vw, 160px)",fontWeight:300,color:oe.textPrimary,letterSpacing:"-0.04em",lineHeight:.85,textShadow:`0 0 100px ${oe.glowAmber}, 0 0 200px rgba(212,165,116,0.08)`},children:"COIL"}),te.jsx("div",{style:{margin:"12px auto 0",height:1,width:e>=3?120:0,background:`linear-gradient(90deg, transparent, ${oe.amber}, transparent)`,transition:"width 1.5s cubic-bezier(0.22, 1, 0.36, 1)",transitionDelay:"0.3s"}})]}),te.jsxs("div",{style:{position:"relative",zIndex:2,marginTop:28,textAlign:"center",opacity:e>=3?1:0,transform:e>=3?"translateY(0)":"translateY(25px)",transition:"all 1.2s cubic-bezier(0.22, 1, 0.36, 1)"},children:[te.jsx("div",{style:{fontFamily:"'Fraunces', Georgia, serif",fontSize:"clamp(16px, 3vw, 22px)",color:oe.textSecondary,fontStyle:"italic",fontWeight:300},children:"your thoughts have terrain"}),te.jsx("div",{style:{fontFamily:"'DM Sans', system-ui, sans-serif",fontSize:"clamp(11px, 1.8vw, 13px)",color:oe.textMuted,marginTop:8,letterSpacing:"0.08em"},children:"see the patterns you can't feel"})]}),te.jsx("div",{style:{position:"relative",zIndex:2,marginTop:56,display:"flex",gap:16,flexWrap:"wrap",justifyContent:"center",padding:"0 24px",opacity:e>=4?1:0,transform:e>=4?"translateY(0)":"translateY(35px)",transition:"all 1s cubic-bezier(0.22, 1, 0.36, 1)"},children:[{id:"explore",label:"EXPLORE TERRAIN",sub:"see demo thought patterns",icon:"◈"},{id:"begin",label:"BEGIN FRESH",sub:"start mapping your mind",icon:"◇"}].map(l=>te.jsxs("button",{onClick:()=>a(l.id),onMouseEnter:()=>{o(l.id),Pt.init(),Pt.play("hover")},onMouseLeave:()=>o(null),style:{background:s===l.id?`${oe.amber}12`:`${oe.surface}aa`,border:`1px solid ${s===l.id?oe.amber+"55":oe.surfaceLight}`,borderRadius:14,padding:"22px 36px",cursor:"pointer",minWidth:210,textAlign:"center",transition:"all 0.5s cubic-bezier(0.22, 1, 0.36, 1)",transform:s===l.id?"scale(1.05) translateY(-4px)":"scale(1)",boxShadow:s===l.id?"0 12px 48px rgba(212,165,116,0.15), 0 0 80px rgba(212,165,116,0.06)":"0 4px 20px rgba(0,0,0,0.4)",backdropFilter:"blur(16px)"},children:[te.jsx("div",{style:{fontSize:20,marginBottom:8,color:s===l.id?oe.amberBright:oe.amber,transition:"all 0.4s ease",transform:s===l.id?"scale(1.2)":"scale(1)"},children:l.icon}),te.jsx("div",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:10,letterSpacing:"0.18em",color:s===l.id?oe.amberBright:oe.amber,marginBottom:6,transition:"color 0.3s ease"},children:l.label}),te.jsx("div",{style:{fontFamily:"'DM Sans', system-ui, sans-serif",fontSize:11,color:oe.textMuted,lineHeight:1.4},children:l.sub})]},l.id))}),te.jsx("div",{style:{position:"absolute",bottom:28,fontFamily:"'JetBrains Mono', monospace",fontSize:8,letterSpacing:"0.3em",color:oe.textMuted,opacity:e>=3?.35:0,transition:"opacity 1.5s ease"},children:"A LIRIO LABS INSTRUMENT · v0.3"}),te.jsx("style",{children:"@keyframes orbPulse { 0%, 100% { transform: scale(1); opacity: 0.6; } 50% { transform: scale(1.15); opacity: 0.9; } }"})]})}function ET({clusters:t,entries:e,onMarkerClick:n,zoomTarget:i,viewMode:r,sceneSettings:s}){const o=Ue.useRef(null),a=Ue.useRef({}),l=Ue.useRef({}),c=Ue.useRef({x:0,z:4,targetX:0,targetZ:4,yaw:Math.PI,targetYaw:Math.PI,pitch:-.12,targetPitch:-.12}),d=Ue.useRef({phi:Math.PI/3,theta:0,radius:7,targetPhi:Math.PI/3,targetTheta:0,targetRadius:7}),f=Ue.useRef({active:!1,lastX:0,lastY:0}),h=Ue.useRef(0),g=Ue.useRef(null),y=Ue.useRef([]),_=Ue.useRef(new hT),p=Ue.useRef(new Xe),u=Ue.useRef(r||"surface");Ue.useRef({x:0,y:0});const m=Ue.useRef(new Map),v=Ue.useRef([]),M=Ue.useRef(s||{});Ue.useEffect(()=>{u.current=r},[r]),Ue.useEffect(()=>{M.current=s||{}},[s]);const b=200,T=160,A=Ue.useMemo(()=>!t||t.length===0?[]:t.map(S=>{const w=Pm(S.label,2.8),{phi:q,theta:Y}=Do(S.label),W=(Y/(Math.PI*2)-.5)*b,L=(q/Math.PI-.5)*b,V=wc(S.emotion),N=gr(S.emotion),H=S.frequency,P=V==="stress"?H<3?0:H<5?.005:H<8?.01:.018:0,I=V==="resolved"?H<3?0:H<5?.004:H<8?.008:.014:0,G=V==="neutral"?H<3?0:Math.min(H*.003,.012):0;return{...S,spherePos:w,direction:w.clone().normalize(),planeX:W,planeZ:L,craterScale:P,flareScale:I,neutralScale:G,trend:V,color:new We(N.r,N.g,N.b),colorData:N}}),[t]);Ue.useEffect(()=>{if(!i)return;const{phi:S,theta:w}=Do(i),q=(w/(Math.PI*2)-.5)*b,Y=(S/Math.PI-.5)*b;c.current.x=q,c.current.z=Y+5,c.current.targetX=q,c.current.targetZ=Y+5,c.current.targetYaw=Math.atan2(0,-1),c.current.yaw=c.current.targetYaw,d.current.targetPhi=S,d.current.targetTheta=w+Math.PI,d.current.targetRadius=5.5},[i]);const O=Ue.useRef(!1);return Ue.useEffect(()=>{if(O.current||!e||e.length===0)return;O.current=!0;const S=e[e.length-1];if(S&&S.keywords&&S.keywords.length>0){const w=S.keywords[0],{phi:q,theta:Y}=Do(w),W=(Y/(Math.PI*2)-.5)*b,L=(q/Math.PI-.5)*b;c.current.x=W,c.current.z=L+4,c.current.targetX=W,c.current.targetZ=L+4,c.current.yaw=Math.atan2(W-c.current.x,L-c.current.z)||0,c.current.targetYaw=c.current.yaw,d.current.targetPhi=q,d.current.targetTheta=Y+Math.PI,d.current.phi=q,d.current.theta=Y+Math.PI}},[e]),Ue.useEffect(()=>{if(!o.current)return;const S=o.current,w=S.clientWidth,q=S.clientHeight,Y=new aT,W=new In(60,w/q,.1,800),L=new Mv({antialias:!0,alpha:!1});L.setSize(w,q),L.setPixelRatio(Math.min(window.devicePixelRatio,2)),L.setClearColor(394500,1),L.toneMapping=j0,L.toneMappingExposure=1.2,S.appendChild(L.domElement);const V=new fT(14208192,.35);Y.add(V);const N=new cT(13156016,3811866,.25);Y.add(N);const H=new Iu(15786184,.2);H.position.set(4,10,3),Y.add(H);const P=new Iu(13160672,.12);P.position.set(-5,6,-4),Y.add(P);const I=new Iu(13682872,.1);I.position.set(0,-3,-5),Y.add(I);const G=new ul(13935988,.3,30);G.position.set(0,6,0),Y.add(G);const Z=new Hs(b,b,T,T);Z.rotateX(-Math.PI/2);const ee=new Lu({vertexColors:!0,roughness:.7,metalness:.05,flatShading:!0,transparent:!1,side:En,emissive:2760728,emissiveIntensity:.6}),K=new St(Z,ee);Y.add(K);const Q=new Hs(b,b,80,80);Q.rotateX(-Math.PI/2);const he=new Gn({color:13935988,wireframe:!0,transparent:!0,opacity:.025}),ge=new St(Q,he);ge.position.y=.02,Y.add(ge);const Se=800,_e=new tn,Pe=new Float32Array(Se*3);for(let D=0;D<Se;D++)Pe[D*3]=(Math.random()-.5)*b,Pe[D*3+1]=Math.random()*5+.3,Pe[D*3+2]=(Math.random()-.5)*b;_e.setAttribute("position",new Tt(Pe,3));const be=new Bd({color:13935988,size:.025,transparent:!0,opacity:.5,blending:It,sizeAttenuation:!0}),He=new To(_e,be);Y.add(He);const X=128,ot=new si(2.8,X,X),Re=new Lu({vertexColors:!0,roughness:.7,metalness:.05,flatShading:!0,transparent:!1,side:pi,emissive:2103312,emissiveIntensity:.5}),Le=new St(ot,Re);Y.add(Le);const Ae=new si(2.805,48,48),nt=new Gn({color:13935988,wireframe:!0,transparent:!0,opacity:.012}),Oe=new St(Ae,nt);Y.add(Oe);const R=new si(2.95,48,48),E=new qn({vertexShader:`varying vec3 vNormal; varying vec3 vWorldPos;
        void main() { vNormal = normalize(normalMatrix * normal); vWorldPos = (modelMatrix * vec4(position,1.0)).xyz; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`varying vec3 vNormal; varying vec3 vWorldPos; uniform vec3 uCamPos;
        void main() { vec3 viewDir = normalize(uCamPos - vWorldPos); float rim = 1.0 - max(0.0, dot(vNormal, viewDir)); float i = pow(rim, 4.0); gl_FragColor = vec4(0.83, 0.65, 0.46, i * 0.18); }`,uniforms:{uCamPos:{value:new F}},side:pi,blending:It,transparent:!0,depthWrite:!1}),$=new St(R,E);Y.add($);const ae=Object.values(Vd),se=8e3,ue=new tn,Ce=new Float32Array(se*3),xe=new Float32Array(se*3),Ee=new Float32Array(se);for(let D=0;D<se;D++){let fe,x,C;if(D<se*.4){const J=60+Math.random()*140,ne=Math.random()*Math.PI*2,le=(Math.random()-.5)*.15,ce=.4;fe=J*Math.cos(ne),x=J*(le+Math.sin(ne)*Math.sin(ce)*.3),C=J*Math.sin(ne)}else if(D<se*.7){const J=50+Math.random()*150,ne=Math.random()*Math.PI*2,le=Math.acos(2*Math.random()-1);fe=J*Math.sin(le)*Math.cos(ne),x=J*Math.cos(le),C=J*Math.sin(le)*Math.sin(ne)}else if(D<se*.88){const J=20+Math.random()*40,ne=Math.random()*Math.PI*2,le=Math.acos(2*Math.random()-1);fe=J*Math.sin(le)*Math.cos(ne),x=J*Math.cos(le),C=J*Math.sin(le)*Math.sin(ne)}else{const J=150+Math.random()*200,ne=Math.random()*Math.PI*2,le=Math.acos(2*Math.random()-1);fe=J*Math.sin(le)*Math.cos(ne),x=J*Math.cos(le),C=J*Math.sin(le)*Math.sin(ne)}Ce[D*3]=fe,Ce[D*3+1]=x,Ce[D*3+2]=C;const k=Math.random();let z,B,re;if(k<.4)z=.95+Math.random()*.05,B=.93+Math.random()*.07,re=.98;else if(k<.6)z=.8+Math.random()*.1,B=.85+Math.random()*.1,re=1;else if(k<.8)z=1,B=.92+Math.random()*.08,re=.75+Math.random()*.15;else if(k<.9)z=1,B=.7+Math.random()*.15,re=.4+Math.random()*.2;else{const J=ae[D%ae.length];z=.7+J.r*.3,B=.7+J.g*.3,re=.7+J.b*.3}xe[D*3]=z,xe[D*3+1]=B,xe[D*3+2]=re;const j=Math.sqrt(fe*fe+x*x+C*C);j<30?Ee[D]=.15+Math.random()*.3:j<80?Ee[D]=.08+Math.random()*.18:Ee[D]=.04+Math.random()*.1,Math.random()<.02&&(Ee[D]=.3+Math.random()*.25)}ue.setAttribute("position",new Tt(Ce,3)),ue.setAttribute("color",new Tt(xe,3)),ue.setAttribute("size",new Tt(Ee,1));const ke=new qn({vertexShader:`
        attribute float size; attribute vec3 color; varying vec3 vColor;
        void main() { vColor = color; vec4 mvp = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * (250.0 / -mvp.z); gl_Position = projectionMatrix * mvp; }`,fragmentShader:`
        varying vec3 vColor;
        void main() { float d = length(gl_PointCoord - vec2(0.5)); if (d > 0.5) discard;
          float core = 1.0 - smoothstep(0.0, 0.15, d);
          float glow = 1.0 - smoothstep(0.0, 0.4, d);
          vec3 col = vColor * glow * 0.6 + vec3(1.0) * core * 0.8;
          gl_FragColor = vec4(col, glow * 0.85); }`,transparent:!0,blending:It,depthWrite:!1}),Ge=new To(ue,ke);Y.add(Ge);const ie=new li;[{color:[.35,.15,.55],angle:.3,dist:110,scale:28,tilt:.2},{color:[.18,.35,.6],angle:1.1,dist:140,scale:35,tilt:-.3},{color:[.55,.2,.25],angle:2,dist:95,scale:22,tilt:.4},{color:[.2,.45,.35],angle:2.9,dist:130,scale:30,tilt:-.15},{color:[.5,.35,.15],angle:3.8,dist:105,scale:25,tilt:.35},{color:[.3,.2,.5],angle:4.7,dist:150,scale:40,tilt:-.25},{color:[.45,.15,.4],angle:5.5,dist:120,scale:32,tilt:.1}].forEach(D=>{const fe=Math.cos(D.angle)*D.dist,x=50+Math.sin(D.tilt)*D.dist*.3,C=Math.sin(D.angle)*D.dist,k=5;for(let j=0;j<k;j++){const J=D.scale*(.4+j*.2),ne=(.012-j*.0015)*(1+Math.random()*.3),le=new si(J,12,12),ce=le.attributes.position;for(let Ye=0;Ye<ce.count;Ye++){const Ie=ce.getX(Ye),rt=ce.getY(Ye),Ze=ce.getZ(Ye),dt=1+Nu(Ie*.08+j*3,rt*.08,Ze*.08,3)*.35;ce.setXYZ(Ye,Ie*dt,rt*dt*(.5+Math.random()*.3),Ze*dt)}ce.needsUpdate=!0;const we=D.color[0]+j*.03,Ke=D.color[1]+j*.02,Ut=D.color[2]+j*.03,Qe=new Gn({color:new We(we,Ke,Ut),transparent:!0,opacity:Math.max(.003,ne),blending:It,depthWrite:!1,side:En}),mt=new St(le,Qe);mt.position.set(fe+(Math.random()-.5)*J*.3,x+(Math.random()-.5)*J*.2,C+(Math.random()-.5)*J*.3),mt.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),ie.add(mt)}const z=new si(D.scale*.15,8,8),B=new Gn({color:new We(D.color[0]*1.5,D.color[1]*1.5,D.color[2]*1.5),transparent:!0,opacity:.02,blending:It,depthWrite:!1}),re=new St(z,B);re.position.set(fe,x,C),ie.add(re)}),Y.add(ie),ie.children.forEach(D=>{D.material&&(D.material._baseOp=D.material.opacity)});const Ne=new li;[{dist:280,angle:.8,elev:120,radius:14,color:9136970,ring:!0,ringColor:10518624,tilt:.4},{dist:320,angle:3.2,elev:85,radius:9,color:4876939,ring:!1,tilt:.15},{dist:200,angle:5,elev:140,radius:4,color:9132618,ring:!1,tilt:.3},{dist:350,angle:1.9,elev:65,radius:4.5,color:8026746,ring:!1,tilt:.05}].forEach(D=>{const fe=Math.cos(D.angle)*D.dist,x=D.elev,C=Math.sin(D.angle)*D.dist,k=new si(D.radius,32,32),z=new Lu({color:D.color,roughness:.85,metalness:.02,emissive:D.color,emissiveIntensity:.08}),B=new St(k,z);B.position.set(fe,x,C),B.rotation.z=D.tilt,Ne.add(B);const re=new si(D.radius*1.08,24,24),j=new We(D.color),J=new qn({vertexShader:`varying vec3 vNormal; varying vec3 vWorldPos;
          void main() { vNormal = normalize(normalMatrix * normal); vWorldPos = (modelMatrix * vec4(position,1.0)).xyz; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`varying vec3 vNormal; varying vec3 vWorldPos; uniform vec3 uCamPos; uniform vec3 uColor;
          void main() { vec3 viewDir = normalize(uCamPos - vWorldPos); float rim = 1.0 - max(0.0, dot(vNormal, viewDir)); float i = pow(rim, 3.0); gl_FragColor = vec4(uColor, i * 0.12); }`,uniforms:{uCamPos:{value:new F},uColor:{value:new F(j.r,j.g,j.b)}},side:pi,blending:It,transparent:!0,depthWrite:!1}),ne=new St(re,J);if(ne.position.set(fe,x,C),Ne.add(ne),D.ring){const le=new tc(D.radius*1.4,D.radius*2.2,64),ce=new Gn({color:D.ringColor,transparent:!0,opacity:.06,side:En,blending:It,depthWrite:!1}),we=new St(le,ce);we.position.set(fe,x,C),we.rotation.x=Math.PI/2+D.tilt,we.rotation.y=.3,Ne.add(we);const Ke=new tc(D.radius*1.6,D.radius*1.85,64),Ut=new Gn({color:13150328,transparent:!0,opacity:.035,side:En,blending:It,depthWrite:!1}),Qe=new St(Ke,Ut);Qe.position.set(fe,x,C),Qe.rotation.x=Math.PI/2+D.tilt,Qe.rotation.y=.3,Ne.add(Qe)}}),[{dist:380,angle:.5,elev:160,radius:5,color:[1,.9,.7],intensity:.04},{dist:400,angle:2.8,elev:100,radius:3.5,color:[.7,.8,1],intensity:.03},{dist:340,angle:4.2,elev:130,radius:2,color:[1,.6,.4],intensity:.025}].forEach(D=>{const fe=Math.cos(D.angle)*D.dist,x=D.elev,C=Math.sin(D.angle)*D.dist,k=new si(D.radius,16,16),z=new Gn({color:new We(D.color[0],D.color[1],D.color[2]),transparent:!0,opacity:.3,blending:It,depthWrite:!1}),B=new St(k,z);B.position.set(fe,x,C),Ne.add(B);const re=new si(D.radius*4,16,16),j=new Gn({color:new We(D.color[0]*.6,D.color[1]*.6,D.color[2]*.6),transparent:!0,opacity:D.intensity,blending:It,depthWrite:!1}),J=new St(re,j);J.position.set(fe,x,C),Ne.add(J);const ne=new Hs(D.radius*12,D.radius*.3),le=new Gn({color:new We(D.color[0],D.color[1],D.color[2]),transparent:!0,opacity:.015,blending:It,depthWrite:!1,side:En}),ce=new St(ne,le);ce.position.set(fe,x,C),ce.userData.isFlare=!0,ce.userData.baseRotZ=0,Ne.add(ce);const we=new St(ne.clone(),le.clone());we.position.set(fe,x,C),we.userData.isFlare=!0,we.userData.baseRotZ=Math.PI/2,Ne.add(we)}),Y.add(Ne);const Me=new li,Be=600,et=new tn,ht=new Float32Array(Be*3),je=new Float32Array(Be),pe=new Float32Array(Be*3);for(let D=0;D<Be;D++){const fe=Math.random()*Math.PI*2,x=80+Math.random()*40,C=(Math.random()-.5)*4,k=(Math.random()-.5)*6;ht[D*3]=Math.cos(fe)*(x+k),ht[D*3+1]=40+C+Math.sin(fe*3+D)*.8,ht[D*3+2]=Math.sin(fe)*(x+k),je[D]=.06+Math.random()*.18;const z=.3+Math.random()*.25,B=Math.random()*.08;pe[D*3]=z+B,pe[D*3+1]=z,pe[D*3+2]=z-B*.5}et.setAttribute("position",new Tt(ht,3)),et.setAttribute("size",new Tt(je,1)),et.setAttribute("color",new Tt(pe,3));const U=new qn({vertexShader:`
        attribute float size; attribute vec3 color; varying vec3 vColor; varying float vDist;
        void main() { vColor = color; vec4 mvp = modelViewMatrix * vec4(position, 1.0);
          vDist = -mvp.z; gl_PointSize = size * (120.0 / -mvp.z); gl_Position = projectionMatrix * mvp; }`,fragmentShader:`
        varying vec3 vColor; varying float vDist;
        void main() { float d = length(gl_PointCoord - vec2(0.5)); if (d > 0.45) discard;
          float shape = 1.0 - smoothstep(0.0, 0.45, d);
          float fade = clamp(1.0 - vDist / 300.0, 0.1, 1.0);
          gl_FragColor = vec4(vColor * shape, shape * 0.7 * fade); }`,transparent:!0,blending:It,depthWrite:!1}),ye=new To(et,U);ye.rotation.x=.26,ye.rotation.z=.1,Me.add(ye);for(let D=0;D<6;D++){const fe=.5+Math.random()*.8,x=new Yf(fe,0),C=x.attributes.position;for(let j=0;j<C.count;j++){const J=.7+Math.random()*.6;C.setXYZ(j,C.getX(j)*J,C.getY(j)*J,C.getZ(j)*J)}C.needsUpdate=!0,x.computeVertexNormals();const k=new Gn({color:new We(.35+Math.random()*.15,.3+Math.random()*.1,.25+Math.random()*.1),transparent:!0,opacity:.4,blending:It,depthWrite:!1}),z=new St(x,k),B=Math.random()*Math.PI*2,re=120+Math.random()*60;z.position.set(Math.cos(B)*re,40+Math.random()*30,Math.sin(B)*re),z.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),z.userData={orbitAngle:B,orbitRadius:re,spinSpeed:.001+Math.random()*.003},Me.add(z)}Y.add(Me),Me.children.forEach(D=>{D.material&&!D.material.isShaderMaterial&&(D.material._baseOp=D.material.opacity)});const me=new li;[{count:3e3,minR:15,maxR:60,size:.015,opacity:.2,color:13156016},{count:2e3,minR:60,maxR:150,size:.025,opacity:.12,color:10524808},{count:1500,minR:150,maxR:350,size:.04,opacity:.06,color:8417376}].forEach(D=>{const fe=new tn,x=new Float32Array(D.count*3);for(let z=0;z<D.count;z++){const B=D.minR+Math.random()*(D.maxR-D.minR),re=Math.random()*Math.PI*2,j=Math.acos(2*Math.random()-1);x[z*3]=B*Math.sin(j)*Math.cos(re),x[z*3+1]=B*Math.cos(j),x[z*3+2]=B*Math.sin(j)*Math.sin(re)}fe.setAttribute("position",new Tt(x,3));const C=new Bd({color:D.color,size:D.size,transparent:!0,opacity:D.opacity,blending:It,sizeAttenuation:!0,depthWrite:!1}),k=new To(fe,C);me.add(k)}),Y.add(me);const De=new li;for(let D=0;D<5;D++){const fe=new tn,x=14,C=new Float32Array(x*3),k=new Float32Array(x),z=(Math.random()-.5)*160,B=(Math.random()-.5)*80,re=50+Math.random()*100,j=(Math.random()-.5)*.8,J=(Math.random()-.5)*.3;for(let ce=0;ce<x;ce++)C[ce*3]=z-j*ce*1.8,C[ce*3+1]=B-J*ce*1.8,C[ce*3+2]=re,k[ce]=1-ce/x;fe.setAttribute("position",new Tt(C,3)),fe.setAttribute("opacity",new Tt(k,1));const ne=new qn({vertexShader:`attribute float opacity; varying float vOpacity;
          void main() { vOpacity = opacity; gl_PointSize = mix(4.0, 1.0, 1.0 - opacity);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`varying float vOpacity;
          void main() { float d = length(gl_PointCoord - vec2(0.5));
            if (d > 0.5) discard;
            float a = (1.0 - d * 2.0) * vOpacity * 0.7;
            gl_FragColor = vec4(0.95, 0.88, 0.72, a); }`,transparent:!0,blending:It,depthWrite:!1}),le=new To(fe,ne);le.userData={speed:.015+Math.random()*.025,dx:j,dy:J},De.add(le)}Y.add(De);const it=new li,at=new li;Y.add(it),Y.add(at),a.current={scene:Y,cam:W,ren:L,terrainMesh:K,terrainGeo:Z,terrainWireMesh:ge,particles:He,particleGeo:_e,planet:Le,sphereGeo:ot,wireMesh:Oe,atmosMat:E,atmosMesh:$,starField:Ge,nebulaGroup:ie,cometGroup:De,distantBodies:Ne,asteroidBelt:Me,cosmicDustGroup:me,pl:G,ambientLight:V,hemiLight:N,dl:H,dl2:P,dl3:I,surfaceMarkerGroup:it,planetMarkerGroup:at};const Dt=D=>{const fe=D.target.tagName;fe==="TEXTAREA"||fe==="INPUT"||(l.current[D.key.toLowerCase()]=!0,l.current[D.code]=!0)},Xt=D=>{l.current[D.key.toLowerCase()]=!1,l.current[D.code]=!1},lt=(D,fe)=>{u.current==="surface"?(c.current.targetYaw-=D*.004,c.current.targetPitch=Math.max(-.5,Math.min(.3,c.current.targetPitch-fe*.003))):(d.current.targetTheta-=D*.008,d.current.targetPhi=Math.max(.15,Math.min(Math.PI-.15,d.current.targetPhi-fe*.008)))},jt=D=>{D.target.tagName==="TEXTAREA"||D.target.tagName==="BUTTON"||D.target.tagName==="INPUT"||(D.preventDefault(),f.current={active:!0,lastX:D.clientX,lastY:D.clientY,moved:!1})},Pn=D=>{if(!f.current.active)return;D.preventDefault();const fe=D.clientX-f.current.lastX,x=D.clientY-f.current.lastY;(Math.abs(fe)>2||Math.abs(x)>2)&&(f.current.moved=!0),lt(fe,x),f.current.lastX=D.clientX,f.current.lastY=D.clientY},ro=D=>{if(!f.current.moved&&f.current.active){const fe=S.getBoundingClientRect();p.current.x=(D.clientX-fe.left)/fe.width*2-1,p.current.y=-((D.clientY-fe.top)/fe.height)*2+1,_.current.setFromCamera(p.current,W);const x=_.current.intersectObjects(y.current,!1);x.length>0&&x[0].object.userData.clusterLabel&&(n(x[0].object.userData.clusterLabel),Pt.play("reveal"))}f.current.active=!1},ga=D=>{D.target.tagName==="TEXTAREA"||D.target.closest("[data-sidebar]")||D.target.closest("[data-panel]")||(D.preventDefault(),u.current==="planet"&&(d.current.targetRadius=Math.max(4,Math.min(14,d.current.targetRadius+D.deltaY*.005))))};let Jt=null;const so=D=>{D.target.tagName==="TEXTAREA"||D.target.tagName==="BUTTON"||D.target.tagName==="INPUT"||(D.touches.length===1&&(f.current={active:!0,lastX:D.touches[0].clientX,lastY:D.touches[0].clientY,moved:!1}),D.touches.length===2&&(Jt=[{x:D.touches[0].clientX,y:D.touches[0].clientY},{x:D.touches[1].clientX,y:D.touches[1].clientY}]))},Er=D=>{if(D.preventDefault(),D.touches.length===1&&f.current.active){const fe=D.touches[0].clientX-f.current.lastX,x=D.touches[0].clientY-f.current.lastY;(Math.abs(fe)>2||Math.abs(x)>2)&&(f.current.moved=!0),lt(fe,x),f.current.lastX=D.touches[0].clientX,f.current.lastY=D.touches[0].clientY}if(D.touches.length===2&&Jt){if(u.current==="planet"){const z=Math.hypot(D.touches[0].clientX-D.touches[1].clientX,D.touches[0].clientY-D.touches[1].clientY),B=Math.hypot(Jt[0].x-Jt[1].x,Jt[0].y-Jt[1].y);d.current.targetRadius=Math.max(4,Math.min(14,d.current.targetRadius-(z-B)*.015))}const fe=(D.touches[0].clientX+D.touches[1].clientX)/2,x=(D.touches[0].clientY+D.touches[1].clientY)/2,C=(Jt[0].x+Jt[1].x)/2,k=(Jt[0].y+Jt[1].y)/2;lt(fe-C,x-k),Jt=[{x:D.touches[0].clientX,y:D.touches[0].clientY},{x:D.touches[1].clientX,y:D.touches[1].clientY}]}},oo=D=>{if(!f.current.moved&&f.current.active&&D.changedTouches.length===1){const fe=S.getBoundingClientRect(),x=D.changedTouches[0];p.current.x=(x.clientX-fe.left)/fe.width*2-1,p.current.y=-((x.clientY-fe.top)/fe.height)*2+1,_.current.setFromCamera(p.current,W);const C=_.current.intersectObjects(y.current,!1);C.length>0&&C[0].object.userData.clusterLabel&&(n(C[0].object.userData.clusterLabel),Pt.play("reveal"))}f.current.active=!1,Jt=null};window.addEventListener("keydown",Dt),window.addEventListener("keyup",Xt),S.addEventListener("mousedown",jt),window.addEventListener("mousemove",Pn),window.addEventListener("mouseup",ro),S.addEventListener("wheel",ga,{passive:!1}),S.addEventListener("touchstart",so,{passive:!1}),S.addEventListener("touchmove",Er,{passive:!1}),S.addEventListener("touchend",oo);const ao=()=>{W.aspect=S.clientWidth/S.clientHeight,W.updateProjectionMatrix(),L.setSize(S.clientWidth,S.clientHeight)};window.addEventListener("resize",ao);const va=()=>{h.current+=.004;const D=h.current,fe=l.current,x=c.current,C=d.current,k=u.current;if(K.visible=k==="surface",ge.visible=k==="surface",He.visible=k==="surface",Le.visible=k==="planet",Oe.visible=k==="planet",$.visible=k==="planet",it.visible=k==="surface",at.visible=k==="planet",k==="surface"){const J=Math.cos(x.yaw),ne=Math.sin(x.yaw);(fe.w||fe.arrowup)&&(x.targetX+=ne*.35,x.targetZ+=J*.35),(fe.s||fe.arrowdown)&&(x.targetX-=ne*.35,x.targetZ-=J*.35),(fe.a||fe.arrowleft)&&(x.targetX+=J*.35,x.targetZ-=ne*.35),(fe.d||fe.arrowright)&&(x.targetX-=J*.35,x.targetZ+=ne*.35),fe.shift&&((fe.w||fe.arrowup)&&(x.targetX+=ne*.35*(2.5-1),x.targetZ+=J*.35*(2.5-1)),(fe.s||fe.arrowdown)&&(x.targetX-=ne*.35*(2.5-1),x.targetZ-=J*.35*(2.5-1)));const le=b*.5;x.targetX>le&&(x.targetX-=b,x.x-=b),x.targetX<-le&&(x.targetX+=b,x.x+=b),x.targetZ>le&&(x.targetZ-=b,x.z-=b),x.targetZ<-le&&(x.targetZ+=b,x.z+=b),x.x+=(x.targetX-x.x)*.14,x.z+=(x.targetZ-x.z)*.14,x.yaw+=(x.targetYaw-x.yaw)*.12,x.pitch+=(x.targetPitch-x.pitch)*.12;const ce=4+Math.sin(D*.25)*.15;K.position.x=x.x,K.position.z=x.z,ge.position.x=x.x,ge.position.z=x.z,W.position.set(x.x,ce,x.z);const we=12,Ke=x.x+Math.sin(x.yaw)*we,Ut=ce*.15+x.pitch*8,Qe=x.z+Math.cos(x.yaw)*we;W.up.set(0,1,0),W.lookAt(Ke,Ut,Qe),G.position.set(x.x,4,x.z);const mt=Z.attributes.position,Ye=new Float32Array(mt.count*3);for(let rt=0;rt<mt.count;rt++){const Ze=mt.getX(rt),fn=mt.getZ(rt),dt=Ze+x.x,Qn=fn+x.z;let xn=Nu(dt*.08+D*.04,0,Qn*.08+D*.03,5)*1.2;xn+=Math.sin(dt*.06+D*.1)*Math.cos(Qn*.06+D*.08)*.4;const wt=(xn+1)/2.2;let Ft,xt,st;wt>.6?(Ft=.78,xt=.42,st=.32):wt<.3?(Ft=.38,xt=.52,st=.4):(Ft=.58+wt*.12,xt=.44+wt*.08,st=.32);const Yt=Math.hypot(Ze,fn);Yt<4&&(xn+=Math.sin(Yt*2.5-D*4)*.05*Math.max(0,1-Yt/4));for(const zt of A){let ei=dt-zt.planeX,gi=Qn-zt.planeZ;ei>le&&(ei-=b),ei<-le&&(ei+=b),gi>le&&(gi-=b),gi<-le&&(gi+=b);const Zr=Math.sqrt(ei*ei+gi*gi),Tv=8+Math.min(zt.frequency*1.5,10),_a=Math.max(0,1-Zr/Tv);if(_a>0){const Bn=_a*_a*(3-2*_a),qt=zt.frequency;if(zt.trend==="stress"){const lo=qt<3?0:qt<5?.3:qt<8?.6:1;xn-=Bn*lo;const vi=(qt<3?.2:qt<5?.35:.5)+Math.min(qt*.04,.3);Ft+=Bn*zt.colorData.r*vi,xt+=Bn*zt.colorData.g*vi*.5,st+=Bn*zt.colorData.b*vi*.5}else if(zt.trend==="resolved"){const lo=qt<3?0:qt<5?.2:qt<8?.5:.8,vi=.6+qt*.15,Av=qt<5?.1:qt<8?.2:.3,bv=1+Math.sin(D*vi+Zr*.5)*Av;xn+=Bn*lo*bv;const Tc=(qt<3?.25:qt<5?.4:.55)+Math.min(qt*.04,.3),Ac=.8+Math.sin(D*vi*.7)*.2;Ft+=Bn*zt.colorData.r*Tc*Ac,xt+=Bn*zt.colorData.g*Tc*Ac,st+=Bn*zt.colorData.b*Tc*.8*Ac}else{const lo=qt<3?0:Math.min(qt*.08,.4);xn+=Bn*lo;const vi=qt<3?.15:.25;Ft+=Bn*zt.colorData.r*vi,xt+=Bn*zt.colorData.g*vi,st+=Bn*zt.colorData.b*vi}}}mt.setY(rt,xn),Ye[rt*3]=Math.max(0,Math.min(1,Ft)),Ye[rt*3+1]=Math.max(0,Math.min(1,xt)),Ye[rt*3+2]=Math.max(0,Math.min(1,st))}Z.setAttribute("color",new Tt(Ye,3)),mt.needsUpdate=!0,Z.computeVertexNormals();const Ie=_e.attributes.position;for(let rt=0;rt<Ie.count;rt++){let Ze=Ie.getY(rt);Ze+=Math.sin(D*1.5+rt*.3)*.003,Ie.setX(rt,Ie.getX(rt)+Math.sin(D*.5+rt*.1)*.002),Ze>6&&(Ze=.3),Ie.setY(rt,Ze)}Ie.needsUpdate=!0,V.intensity=.35,V.color.setHex(14208192),N.intensity=.25,H.intensity=.2,P.intensity=.12,I.intensity=.1,G.intensity=.3}else{(fe.w||fe.arrowup)&&(C.targetPhi=Math.max(.15,C.targetPhi-.025)),(fe.s||fe.arrowdown)&&(C.targetPhi=Math.min(Math.PI-.15,C.targetPhi+.025)),(fe.a||fe.arrowleft)&&(C.targetTheta+=.025),(fe.d||fe.arrowright)&&(C.targetTheta-=.025),(fe.q||fe["-"])&&(C.targetRadius=Math.min(14,C.targetRadius+.06)),(fe.e||fe["="])&&(C.targetRadius=Math.max(4,C.targetRadius-.06)),fe.r&&(C.targetRadius=Math.max(4,C.targetRadius-.1)),fe.f&&(C.targetRadius=Math.min(14,C.targetRadius+.1)),C.phi+=(C.targetPhi-C.phi)*.15,C.theta+=(C.targetTheta-C.theta)*.15,C.radius+=(C.targetRadius-C.radius)*.12,W.position.set(C.radius*Math.sin(C.phi)*Math.cos(C.theta),C.radius*Math.cos(C.phi),C.radius*Math.sin(C.phi)*Math.sin(C.theta)),W.up.set(0,1,0),W.lookAt(0,0,0);const J=ot.attributes.position,ne=new Float32Array(J.count*3),le=2.8;for(let ce=0;ce<J.count;ce++){const we=J.getX(ce),Ke=J.getY(ce),Ut=J.getZ(ce),Qe=new F(we,Ke,Ut).normalize();let mt=Nu(Qe.x*2.2+D*.03,Qe.y*2.2,Qe.z*2.2+D*.02,4)*.02,Ye=.35,Ie=.28,rt=.22;const Ze=(mt+.06)/.12;Ye+=Ze*.06,Ie+=Ze*.05,rt+=Ze*.03;for(const dt of A){const Qn=Qe.dot(dt.direction),xn=Math.acos(Math.min(1,Math.max(-1,Qn))),wt=.25+Math.min(dt.frequency*.025,.15),Ft=Math.max(0,1-xn/wt);if(Ft>0){const xt=Ft*Ft*(3-2*Ft),st=dt.frequency;if(dt.trend==="stress"){mt-=xt*dt.craterScale;const Yt=(st<3?.2:st<5?.35:.5)+Math.min(st*.04,.3);Ye+=xt*dt.colorData.r*Yt,Ie+=xt*dt.colorData.g*Yt*.5,rt+=xt*dt.colorData.b*Yt*.5}else if(dt.trend==="resolved"){const Yt=.6+st*.15,zt=st<5?.15:st<8?.25:.35,ei=1+Math.sin(D*Yt+xn*8)*zt;mt+=xt*dt.flareScale*ei;const gi=(st<3?.25:st<5?.4:.55)+Math.min(st*.04,.3),Zr=.8+Math.sin(D*Yt*.7)*.2;Ye+=xt*dt.colorData.r*gi*Zr,Ie+=xt*dt.colorData.g*gi*Zr,rt+=xt*dt.colorData.b*gi*.8*Zr}else{mt+=xt*dt.neutralScale;const Yt=st<3?.15:.25;Ye+=xt*dt.colorData.r*Yt,Ie+=xt*dt.colorData.g*Yt,rt+=xt*dt.colorData.b*Yt}}}const fn=le+mt;J.setXYZ(ce,Qe.x*fn,Qe.y*fn,Qe.z*fn),ne[ce*3]=Math.max(0,Math.min(1,Ye)),ne[ce*3+1]=Math.max(0,Math.min(1,Ie)),ne[ce*3+2]=Math.max(0,Math.min(1,rt))}ot.setAttribute("color",new Tt(ne,3)),J.needsUpdate=!0,ot.computeVertexNormals(),Le.rotation.y+=2e-4,Oe.rotation.y=Le.rotation.y,E.uniforms.uCamPos.value.copy(W.position),V.intensity=.3,V.color.setHex(13156532),N.intensity=.2,H.intensity=.15,P.intensity=.1,I.intensity=.08,G.intensity=0}const z=b*.5,B=Date.now();y.current.forEach(j=>{j.quaternion.copy(W.quaternion);const J=j.userData.baseScale||.05;if(j.userData.isThoughtStar){if(j.userData.isAggregated&&k==="surface"){const le=.4+j.userData.seed%1*.3,ce=D*le+j.userData.offsetAngle,we=j.userData.spreadDist*.6;j.userData.worldX=j.userData.clusterX+Math.cos(ce)*we,j.userData.worldZ=j.userData.clusterZ+Math.sin(ce)*we,j.position.y=.4+Math.sin(D*1.2+j.userData.seed)*.12}const ne=J*(1+Math.sin(D*4+j.userData.seed*3.7)*.3);j.scale.setScalar(ne)}else if(j.userData.isDiamond){const ne=B-(j.userData.birthTime||0),le=2e3;if(ne<le){const ce=ne/le,we=ce<.5?4*ce*ce*ce:1-Math.pow(-2*ce+2,3)/2;j.scale.set(J*we,J*1.4*we,1)}else{const ce=J*(1+Math.sin(D*2.5+j.userData.seed)*.15);j.scale.set(ce,ce*1.4,1)}}else{const ne=J*(1+Math.sin(D*2.5+j.userData.seed)*.15);j.scale.setScalar(ne)}if(k==="surface"&&j.userData.worldX!==void 0){let ne=j.userData.worldX-x.x,le=j.userData.worldZ-x.z;ne>z&&(ne-=b),ne<-z&&(ne+=b),le>z&&(le-=b),le<-z&&(le+=b),j.position.x=x.x+ne,j.position.z=x.z+le}}),k==="surface"&&it.children.forEach(j=>{if(j.isPointLight&&j.userData.worldX!==void 0){let J=j.userData.worldX-x.x,ne=j.userData.worldZ-x.z;J>z&&(J-=b),J<-z&&(J+=b),ne>z&&(ne-=b),ne<-z&&(ne+=b),j.position.x=x.x+J,j.position.z=x.z+ne}}),Ge.rotation.y+=8e-5,ie.rotation.y+=4e-5,ie.rotation.x+=8e-6,me.rotation.y+=6e-5,me.rotation.x+=1e-5,Ne.rotation.y+=2e-5,Me.rotation.y+=25e-5,Me.children.forEach(j=>{j.isMesh&&j.userData.spinSpeed&&(j.rotation.x+=j.userData.spinSpeed,j.rotation.z+=j.userData.spinSpeed*.7)}),Ne.children.forEach(j=>{j.material&&j.material.uniforms&&j.material.uniforms.uCamPos&&j.material.uniforms.uCamPos.value.copy(W.position)}),Ne.children.forEach(j=>{j.userData&&j.userData.isFlare&&(j.quaternion.copy(W.quaternion),j.rotateZ(j.userData.baseRotZ))}),De.children.forEach(j=>{const J=j.geometry.attributes.position,ne=j.userData;for(let le=0;le<J.count;le++)J.setX(le,J.getX(le)+ne.speed*ne.dx),J.setY(le,J.getY(le)+ne.speed*ne.dy);if(J.needsUpdate=!0,Math.abs(J.getX(0))>250){const le=(Math.random()-.5)*160,ce=(Math.random()-.5)*80,we=50+Math.random()*100;for(let Ke=0;Ke<J.count;Ke++)J.setX(Ke,le-ne.dx*Ke*1.8),J.setY(Ke,ce-ne.dy*Ke*1.8),J.setZ(Ke,we);J.needsUpdate=!0}});const re=M.current;re&&(Ge.material.opacity=(re.starFieldOpacity??1)*.85,ie.visible=(re.nebulaOpacity??1)>.01,ie.children.forEach(j=>{j.material&&(j.material.opacity=j.material._baseOp!==void 0?j.material._baseOp*(re.nebulaOpacity??1):j.material.opacity)}),Me.visible=(re.asteroidBeltOpacity??1)>.01,Me.children.forEach(j=>{j.material&&!j.material.isShaderMaterial&&(j.material.opacity=(j.material._baseOp??j.material.opacity)*(re.asteroidBeltOpacity??1))}),me.visible=(re.cosmicDustOpacity??1)>.01,Ne.visible=(re.distantBodiesOpacity??1)>.01,De.visible=(re.cometOpacity??1)>.01,He.material.opacity=.5*(re.ambientParticles??1),ge.material.opacity=.025*(re.terrainWireframe??1),$.visible=(re.atmosphereGlow??1)>.01),L.render(Y,W),g.current=requestAnimationFrame(va)};return va(),()=>{cancelAnimationFrame(g.current),window.removeEventListener("keydown",Dt),window.removeEventListener("keyup",Xt),S.removeEventListener("mousedown",jt),window.removeEventListener("mousemove",Pn),window.removeEventListener("mouseup",ro),S.removeEventListener("wheel",ga),S.removeEventListener("touchstart",so),S.removeEventListener("touchmove",Er),S.removeEventListener("touchend",oo),window.removeEventListener("resize",ao),L.dispose(),S.contains(L.domElement)&&S.removeChild(L.domElement)}},[A,n]),Ue.useEffect(()=>{const{surfaceMarkerGroup:S,planetMarkerGroup:w}=a.current;if(!S||!w)return;for(;S.children.length;)S.remove(S.children[0]);for(;w.children.length;)w.remove(w.children[0]);y.current=[],v.current=[];for(const W of m.current.keys())A.find(L=>L.label===W)||m.current.delete(W);A.forEach((W,L)=>{if(W.frequency<3)return;m.current.has(W.label)||m.current.set(W.label,Date.now());const V=document.createElement("canvas");V.width=64,V.height=96;const N=V.getContext("2d"),H=W.colorData.hex,P=32,I=48,G=N.createRadialGradient(P,I,2,P,I,40);G.addColorStop(0,H+"ff"),G.addColorStop(.15,H+"aa"),G.addColorStop(.4,H+"44"),G.addColorStop(.7,H+"11"),G.addColorStop(1,"transparent"),N.fillStyle=G,N.fillRect(0,0,64,96);const Z=10,ee=I,K=82,Q=16;N.save(),N.shadowColor=H,N.shadowBlur=16,N.beginPath(),N.moveTo(P,Z),N.lineTo(P+Q,ee),N.lineTo(P,K),N.lineTo(P-Q,ee),N.closePath(),N.fillStyle=H,N.fill(),N.shadowBlur=8,N.globalAlpha=.6,N.fill(),N.restore(),N.save(),N.globalAlpha=.5,N.strokeStyle="#ffffff",N.lineWidth=.8,N.beginPath(),N.moveTo(P-Q,ee),N.lineTo(P,Z+18),N.lineTo(P+Q,ee),N.stroke(),N.beginPath(),N.moveTo(P-Q+2,ee),N.lineTo(P+Q-2,ee),N.stroke(),N.restore(),N.beginPath(),N.moveTo(P,Z),N.lineTo(P+Q,ee),N.lineTo(P,K),N.lineTo(P-Q,ee),N.closePath(),N.strokeStyle="rgba(255,255,255,0.6)",N.lineWidth=1,N.stroke(),N.beginPath(),N.arc(P,ee-4,3.5,0,Math.PI*2),N.fillStyle="#fff",N.globalAlpha=.95,N.fill(),W.frequency>=6&&(N.globalAlpha=.4,N.beginPath(),N.arc(P,I,22,0,Math.PI*2),N.strokeStyle=H,N.lineWidth=1.5,N.stroke()),N.globalAlpha=1;const he=new Tm(V);he.premultiplyAlpha=!0;const ge=m.current.get(W.label),Se=new Lo({map:he,transparent:!0,depthWrite:!1,sizeAttenuation:!0,blending:It}),_e=new ol(Se),Pe=2+(W.flareScale||0)*3+Math.min(W.frequency*.15,.8);_e.position.set(W.planeX,Pe,W.planeZ);const be=.55+Math.min(W.frequency*.06,.4);_e.scale.set(be,be*1.4,1),_e.userData={clusterLabel:W.label,seed:L*1.7,baseScale:be,worldX:W.planeX,worldZ:W.planeZ,isDiamond:!0,birthTime:ge},S.add(_e),y.current.push(_e);const He=new Lo({map:he.clone(),transparent:!0,depthWrite:!1,sizeAttenuation:!0,blending:It}),X=new ol(He),ot=.12+(W.flareScale||0)+Math.min(W.frequency*.01,.06),Re=W.direction.clone().multiplyScalar(2.8+ot);X.position.copy(Re);const Le=.06+Math.min(W.frequency*.007,.05);if(X.scale.set(Le,Le*1.4,1),X.userData={clusterLabel:W.label,seed:L*1.7,baseScale:Le,isDiamond:!0,birthTime:ge},w.add(X),y.current.push(X),W.frequency>=2){const Ae=new We(W.colorData.r,W.colorData.g,W.colorData.b),nt=new ul(Ae,Math.min(W.frequency*.08,.6),2.5);nt.position.copy(W.direction.clone().multiplyScalar(2.8+.15)),w.add(nt);const Oe=new ul(Ae,Math.min(W.frequency*.1,.8),12);Oe.position.set(W.planeX,1.5+(W.flareScale||0)*2,W.planeZ),Oe.userData={worldX:W.planeX,worldZ:W.planeZ},S.add(Oe)}});const q=2.399963,Y=b;e.forEach((W,L)=>{const V=vr(W.keywords&&W.keywords[0]||"thought"),{phi:N,theta:H}=Do(V),P=A.find(ae=>ae.label===V),I=P&&P.frequency>=3,G=L*q,Z=I?1.5+L%5*.5:2.5+L%8*.8,ee=(H/(Math.PI*2)-.5)*Y,K=(N/Math.PI-.5)*Y,Q=ee+Math.cos(G)*Z,he=K+Math.sin(G)*Z,ge=gr(W.emotion),Se=document.createElement("canvas");Se.width=16,Se.height=16;const _e=Se.getContext("2d"),Pe=_e.createRadialGradient(8,8,0,8,8,7);Pe.addColorStop(0,"#ffffffee"),Pe.addColorStop(.25,ge.hex+"cc"),Pe.addColorStop(.6,ge.hex+"55"),Pe.addColorStop(1,ge.hex+"00"),_e.fillStyle=Pe,_e.beginPath(),_e.arc(8,8,7,0,Math.PI*2),_e.fill(),_e.strokeStyle="#ffffff44",_e.lineWidth=.5,_e.beginPath(),_e.moveTo(8,2),_e.lineTo(8,14),_e.stroke(),_e.beginPath(),_e.moveTo(2,8),_e.lineTo(14,8),_e.stroke();const be=new Tm(Se),He=new Lo({map:be,transparent:!0,depthWrite:!1,sizeAttenuation:!0,opacity:I?.75:.9,blending:It}),X=new ol(He);X.position.set(Q,.6+Math.random()*.5,he);const ot=I?.12:.18;X.scale.setScalar(ot),X.userData={clusterLabel:V,seed:L*2.3+.5,baseScale:ot,worldX:Q,worldZ:he,isThoughtStar:!0,isAggregated:I,clusterX:ee,clusterZ:K,spreadDist:Z,offsetAngle:G,thoughtId:W.id},S.add(X),y.current.push(X),v.current.push(X);const Re=Pm(V,1).normalize(),Le=new F(-Re.z,0,Re.x).normalize(),Ae=new F().crossVectors(Re,Le).normalize(),nt=I?.02+L%5*.008:.04+L%8*.01,Oe=Re.clone().addScaledVector(Le,Math.cos(G)*nt).addScaledVector(Ae,Math.sin(G)*nt).normalize(),R=new Lo({map:be.clone(),transparent:!0,depthWrite:!1,sizeAttenuation:!0,opacity:I?.7:.85,blending:It}),E=new ol(R);E.position.copy(Oe.clone().multiplyScalar(2.82));const $=I?.012:.018;E.scale.setScalar($),E.userData={clusterLabel:V,seed:L*2.3+.5,baseScale:$,isThoughtStar:!0,isAggregated:I,thoughtId:W.id,sphereDir:Oe.clone(),spreadDist:nt},w.add(E),y.current.push(E),v.current.push(E)}),A.forEach(W=>{if(W.frequency>=2&&W.frequency<3){const L=new We(W.colorData.r,W.colorData.g,W.colorData.b),V=new ul(L,Math.min(W.frequency*.1,.4),8);V.position.set(W.planeX,1,W.planeZ),V.userData={worldX:W.planeX,worldZ:W.planeZ},S.add(V)}})},[A,e]),te.jsx("div",{ref:o,style:{width:"100%",height:"100%",position:"absolute",top:0,left:0,cursor:"grab",touchAction:"none"}})}function wT({cluster:t,entries:e,onClose:n}){if(!t)return null;const i=gr(t.emotion),r=e.filter(a=>a.keywords.some(l=>vr(l)===t.label)),s=wc(t.emotion),o=s==="stress"?"crater":s==="resolved"?"flare":"ridge";return te.jsxs(te.Fragment,{children:[te.jsx("div",{onClick:n,style:{position:"absolute",inset:0,zIndex:39,cursor:"pointer"}}),te.jsxs("div",{onClick:a=>a.stopPropagation(),style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",background:`${oe.bg}f5`,backdropFilter:"blur(24px)",border:`1px solid ${i.hex}44`,borderRadius:16,padding:"24px 28px",maxWidth:380,width:"90%",zIndex:40,maxHeight:"60vh",overflowY:"auto",boxShadow:`0 20px 60px rgba(0,0,0,0.6), 0 0 40px ${i.hex}15`,animation:"popupIn 0.35s cubic-bezier(0.22, 1, 0.36, 1) both"},children:[te.jsx("button",{onClick:n,style:{position:"absolute",top:12,right:14,background:"none",border:"none",color:oe.textMuted,cursor:"pointer",fontSize:18,padding:4},children:"×"}),te.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:16},children:[te.jsx("div",{style:{width:12,height:12,borderRadius:2,background:i.hex,boxShadow:`0 0 12px ${i.hex}66`,transform:"rotate(45deg)"}}),te.jsxs("div",{children:[te.jsx("div",{style:{fontFamily:"'Fraunces', Georgia, serif",fontSize:18,color:oe.textPrimary},children:t.label}),te.jsxs("div",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:9,color:i.hex,letterSpacing:"0.1em",marginTop:2},children:[i.label.toUpperCase()," · ",o.toUpperCase()," · ",t.frequency,"×"]})]})]}),r.length===0&&te.jsx("div",{style:{fontFamily:"'DM Sans'",fontSize:13,color:oe.textMuted,fontStyle:"italic"},children:"No entries found."}),r.map(a=>te.jsxs("div",{style:{padding:"10px 0",borderBottom:`1px solid ${oe.surfaceLight}18`},children:[te.jsx("div",{style:{fontFamily:"'DM Sans'",fontSize:13,color:oe.textSecondary,lineHeight:1.6},children:a.rawText}),te.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginTop:4},children:[te.jsx("div",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:9,color:oe.textMuted},children:a.timestamp}),te.jsx("div",{style:{width:4,height:4,borderRadius:"50%",background:gr(a.emotion).hex}}),te.jsx("div",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:9,color:gr(a.emotion).hex},children:a.emotion})]})]},a.id))]})]})}function TT({clusters:t,entries:e,isOpen:n,onToggle:i,onClusterClick:r}){const[s,o]=Ue.useState({}),a=Ue.useMemo(()=>{const d={};return t.forEach(f=>{const h=[f.label,...f.rawKeywords||[]],g=ST(h),y=Object.keys(g)[0]||"other";d[y]||(d[y]=[]),d[y].find(_=>_.label===f.label)||d[y].push(f)}),d},[t]),l=d=>{o(f=>({...f,[d]:!f[d]})),Pt.play("hover")},c={"work & career":"◆",finances:"◇","health & body":"○",relationships:"◈","growth & purpose":"△",creativity:"✦",emotions:"◎",identity:"◉",environment:"▣",technology:"⬡","time & life":"◷",other:"·"};return te.jsxs(te.Fragment,{children:[te.jsx("button",{onClick:i,onMouseEnter:()=>Pt.play("hover"),style:{position:"absolute",top:18,left:18,width:40,height:40,borderRadius:10,background:`${oe.surface}cc`,border:`1px solid ${oe.surfaceLight}`,color:oe.amber,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,zIndex:30,backdropFilter:"blur(8px)"},children:n?"×":"≡"}),te.jsxs("div",{"data-sidebar":"true",style:{position:"absolute",top:0,left:0,width:300,height:"100%",background:`${oe.bg}f8`,backdropFilter:"blur(24px)",borderRight:`1px solid ${oe.surfaceLight}`,transform:n?"translateX(0)":"translateX(-100%)",transition:"transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)",zIndex:25,padding:"72px 20px 20px",overflowY:"auto"},children:[te.jsx("div",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:9,color:oe.textMuted,letterSpacing:"0.2em",marginBottom:6},children:"THOUGHT TERRAIN"}),te.jsxs("div",{style:{fontFamily:"'DM Sans'",fontSize:11,color:oe.textMuted,marginBottom:20},children:[e.length," mapped · ",t.length," patterns"]}),Object.keys(a).length===0&&te.jsx("div",{style:{fontFamily:"'DM Sans'",fontSize:13,color:oe.textMuted,lineHeight:1.7,fontStyle:"italic"},children:"Your planet is smooth. Start dumping thoughts."}),Object.entries(a).map(([d,f])=>{const h=s[d],g=f.reduce((p,u)=>u.frequency>((p==null?void 0:p.frequency)||0)?u:p,null),y=g?gr(g.emotion).hex:oe.amber,_=f.reduce((p,u)=>p+u.frequency,0);return te.jsxs("div",{style:{marginBottom:2},children:[te.jsxs("button",{onClick:()=>l(d),style:{width:"100%",background:"none",border:"none",cursor:"pointer",padding:"10px 0",display:"flex",alignItems:"center",gap:8,borderBottom:`1px solid ${oe.surfaceLight}12`},children:[te.jsx("span",{style:{color:y,fontSize:12,width:16,textAlign:"center"},children:c[d]||"·"}),te.jsx("span",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:10,letterSpacing:"0.1em",color:oe.textPrimary,textTransform:"uppercase",flex:1,textAlign:"left"},children:d}),te.jsxs("span",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:9,color:oe.textMuted},children:[_,"×"]}),te.jsx("span",{style:{color:oe.textMuted,fontSize:10,transform:h?"rotate(90deg)":"rotate(0deg)",transition:"transform 0.3s ease"},children:"▸"})]}),te.jsx("div",{style:{maxHeight:h?400:0,overflow:"hidden",transition:"max-height 0.4s cubic-bezier(0.22, 1, 0.36, 1)"},children:f.map((p,u)=>{const m=gr(p.emotion),v=wc(p.emotion);return te.jsxs("div",{onClick:()=>{r&&(r(p.label),Pt.play("reveal"))},onMouseEnter:()=>Pt.play("hover"),style:{padding:"8px 0 8px 24px",cursor:"pointer",borderRadius:6,transition:"background 0.2s ease"},onMouseOver:M=>M.currentTarget.style.background=`${oe.surfaceLight}22`,onMouseOut:M=>M.currentTarget.style.background="transparent",children:[te.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:2},children:[te.jsx("div",{style:{width:6,height:6,borderRadius:"50%",background:m.hex,boxShadow:`0 0 6px ${m.hex}44`}}),te.jsx("span",{style:{fontFamily:"'Fraunces', Georgia, serif",fontSize:13,color:oe.textPrimary},children:p.label}),te.jsxs("span",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:8,color:m.hex,marginLeft:"auto"},children:[p.frequency,"× · ",v==="stress"?"crater":v==="resolved"?"flare":"ridge"]})]}),te.jsx("div",{style:{marginTop:3,marginLeft:12,height:2,background:oe.surfaceLight,borderRadius:1,overflow:"hidden"},children:te.jsx("div",{style:{height:"100%",width:`${Math.min(p.frequency*16,100)}%`,background:m.hex,borderRadius:1,transition:"width 1s ease"}})})]},u)})})]},d)})]})]})}function AT({isOpen:t,onToggle:e,viewMode:n}){const s=n==="surface"?[{key:"W / ↑",action:"Walk forward"},{key:"S / ↓",action:"Walk backward"},{key:"A / ←",action:"Strafe left"},{key:"D / →",action:"Strafe right"},{key:"Shift + W/S",action:"Sprint"},{key:"Drag",action:"Look around"},{key:"Sidebar item",action:"Jump to thought"},{key:"Click marker",action:"View thoughts"}]:[{key:"W / ↑",action:"Orbit up"},{key:"S / ↓",action:"Orbit down"},{key:"A / ←",action:"Orbit left"},{key:"D / →",action:"Orbit right"},{key:"E / +",action:"Zoom in"},{key:"Q / -",action:"Zoom out"},{key:"R",action:"Quick zoom in"},{key:"F",action:"Quick zoom out"},{key:"Scroll",action:"Zoom in/out"},{key:"Drag",action:"Pan orbit"},{key:"Click marker",action:"View thoughts"},{key:"Pinch",action:"Zoom (mobile)"},{key:"Tap marker",action:"View thoughts (mobile)"}];return te.jsxs(te.Fragment,{children:[te.jsx("button",{onClick:e,onMouseEnter:()=>Pt.play("hover"),style:{position:"absolute",bottom:18,right:18,width:34,height:34,borderRadius:8,background:`${oe.surface}cc`,border:`1px solid ${oe.surfaceLight}`,color:oe.textMuted,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,zIndex:30,backdropFilter:"blur(8px)",fontFamily:"'JetBrains Mono', monospace"},children:"?"}),te.jsxs("div",{"data-panel":"true",style:{position:"absolute",bottom:60,right:18,width:220,background:`${oe.bg}f5`,backdropFilter:"blur(20px)",border:`1px solid ${oe.surfaceLight}`,borderRadius:12,padding:"16px 18px",zIndex:30,opacity:t?1:0,transform:t?"translateY(0)":"translateY(10px)",pointerEvents:t?"all":"none",transition:"all 0.3s cubic-bezier(0.22, 1, 0.36, 1)"},children:[te.jsx("div",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:9,color:oe.textMuted,letterSpacing:"0.2em",marginBottom:12},children:n==="surface"?"SURFACE CONTROLS":"PLANET CONTROLS"}),s.map((o,a)=>te.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"4px 0"},children:[te.jsx("span",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:10,color:oe.amber,minWidth:90},children:o.key}),te.jsx("span",{style:{fontFamily:"'DM Sans'",fontSize:11,color:oe.textSecondary},children:o.action})]},a))]})]})}function bT({isOpen:t,onToggle:e,settings:n,onChange:i}){const r=[{key:"starFieldOpacity",label:"Galaxy Stars"},{key:"nebulaOpacity",label:"Nebulae"},{key:"distantBodiesOpacity",label:"Planets & Suns"},{key:"asteroidBeltOpacity",label:"Asteroid Belt"},{key:"cosmicDustOpacity",label:"Cosmic Dust"},{key:"cometOpacity",label:"Comets"},{key:"ambientParticles",label:"Ambient Particles"},{key:"terrainWireframe",label:"Wireframe Grid"},{key:"atmosphereGlow",label:"Atmosphere Glow"}],s=(a,l)=>{i({...n,[a]:l})},o=a=>{const l={full:Object.fromEntries(r.map(c=>[c.key,1])),minimal:Object.fromEntries(r.map(c=>[c.key,c.key==="starFieldOpacity"?.3:c.key==="atmosphereGlow"?.5:0])),focused:{starFieldOpacity:.5,nebulaOpacity:.2,distantBodiesOpacity:.3,asteroidBeltOpacity:0,cosmicDustOpacity:.1,cometOpacity:0,ambientParticles:.6,terrainWireframe:1,atmosphereGlow:1}};i(l[a]||l.full)};return te.jsxs(te.Fragment,{children:[te.jsx("button",{onClick:()=>{e(),Pt.play("hover")},onMouseEnter:()=>Pt.play("hover"),style:{position:"absolute",bottom:18,left:18,zIndex:30,width:36,height:36,borderRadius:10,border:`1px solid ${t?oe.amber+"44":oe.surfaceLight}`,background:t?`${oe.surface}ee`:`${oe.surface}99`,backdropFilter:"blur(8px)",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'JetBrains Mono', monospace",fontSize:14,color:t?oe.amber:oe.textMuted,transition:"all 0.3s ease"},children:"⚙"}),te.jsxs("div",{"data-panel":"true",style:{position:"absolute",bottom:62,left:18,width:240,background:`${oe.bg}f5`,backdropFilter:"blur(20px)",border:`1px solid ${oe.surfaceLight}`,borderRadius:12,padding:"16px 18px",zIndex:30,opacity:t?1:0,transform:t?"translateY(0)":"translateY(10px)",pointerEvents:t?"all":"none",transition:"all 0.3s cubic-bezier(0.22, 1, 0.36, 1)",maxHeight:"60vh",overflowY:"auto"},children:[te.jsx("div",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:9,color:oe.textMuted,letterSpacing:"0.2em",marginBottom:14},children:"SCENE SETTINGS"}),te.jsx("div",{style:{display:"flex",gap:6,marginBottom:14},children:[["full","Full"],["focused","Focus"],["minimal","Minimal"]].map(([a,l])=>te.jsx("button",{onClick:()=>o(a),style:{flex:1,padding:"5px 0",borderRadius:6,border:`1px solid ${oe.surfaceLight}`,background:`${oe.surface}cc`,color:oe.textSecondary,fontFamily:"'JetBrains Mono', monospace",fontSize:8,letterSpacing:"0.1em",cursor:"pointer",transition:"all 0.2s"},onMouseEnter:c=>{c.target.style.borderColor=oe.amber+"44",c.target.style.color=oe.amber},onMouseLeave:c=>{c.target.style.borderColor=oe.surfaceLight,c.target.style.color=oe.textSecondary},children:l},a))}),r.map(({key:a,label:l})=>te.jsxs("div",{style:{marginBottom:10},children:[te.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:3},children:[te.jsx("span",{style:{fontFamily:"'DM Sans'",fontSize:11,color:oe.textSecondary},children:l}),te.jsxs("span",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:9,color:oe.textMuted},children:[Math.round((n[a]??1)*100),"%"]})]}),te.jsx("input",{type:"range",min:"0",max:"100",value:Math.round((n[a]??1)*100),onChange:c=>s(a,parseInt(c.target.value)/100),style:{width:"100%",height:3,appearance:"none",background:`linear-gradient(to right, ${oe.amber}88 ${(n[a]??1)*100}%, ${oe.surfaceLight} ${(n[a]??1)*100}%)`,borderRadius:2,outline:"none",cursor:"pointer"}})]},a))]})]})}function RT(){const[t,e]=Ue.useState("intro"),[n,i]=Ue.useState([]),[r,s]=Ue.useState([]),[o,a]=Ue.useState(""),[l,c]=Ue.useState(!1),[d,f]=Ue.useState(!1),[h,g]=Ue.useState(!1),[y,_]=Ue.useState(!1),[p,u]=Ue.useState(null),[m,v]=Ue.useState(null),[M,b]=Ue.useState("surface"),[T,A]=Ue.useState(null),[O,S]=Ue.useState(!1),[w,q]=Ue.useState({starFieldOpacity:1,nebulaOpacity:1,asteroidBeltOpacity:1,cosmicDustOpacity:1,distantBodiesOpacity:1,cometOpacity:1,ambientParticles:1,terrainWireframe:1,atmosphereGlow:1}),Y=[{id:1,timestamp:"Jan 5",rawText:"can't stop thinking about whether I'm making the right career move",keywords:["career","move"],emotion:"anxiety",tone:"stress"},{id:2,timestamp:"Jan 12",rawText:"career anxiety back, comparing myself to everyone online",keywords:["career","anxiety","comparing"],emotion:"anxiety",tone:"stress"},{id:3,timestamp:"Jan 28",rawText:"spiraling about career again, am I behind everyone my age",keywords:["career","behind","age"],emotion:"anxiety",tone:"stress"},{id:4,timestamp:"Feb 3",rawText:"another career panic at 3am, what if I'm wasting my twenties",keywords:["career","panic","wasting"],emotion:"fear",tone:"stress"},{id:5,timestamp:"Feb 14",rawText:"saw someone my age succeed and now career dread is back",keywords:["career","dread","succeed"],emotion:"anxiety",tone:"stress"},{id:6,timestamp:"Feb 22",rawText:"career stress making it hard to focus on anything else",keywords:["career","stress","focus"],emotion:"anxiety",tone:"stress"},{id:7,timestamp:"Mar 1",rawText:"questioning my entire career path again, is this right for me",keywords:["career","path","questioning"],emotion:"anxiety",tone:"stress"},{id:8,timestamp:"Mar 8",rawText:"career imposter syndrome hitting different today",keywords:["career","imposter"],emotion:"fear",tone:"stress"},{id:9,timestamp:"Jan 8",rawText:"money feels tight this month, watching every dollar",keywords:["money","tight"],emotion:"anxiety",tone:"stress"},{id:10,timestamp:"Jan 20",rawText:"money stress again, should I take the safe route",keywords:["money","stress","safe"],emotion:"anxiety",tone:"stress"},{id:11,timestamp:"Feb 5",rawText:"rent is due and money is low, feeling the squeeze",keywords:["money","rent","squeeze"],emotion:"anxiety",tone:"stress"},{id:12,timestamp:"Feb 18",rawText:"money anxiety woke me up at 4am doing math in my head",keywords:["money","anxiety","math"],emotion:"anxiety",tone:"stress"},{id:13,timestamp:"Mar 2",rawText:"another month of money stress, when does this end",keywords:["money","stress"],emotion:"exhaustion",tone:"stress"},{id:14,timestamp:"Mar 7",rawText:"money worries coloring everything, hard to enjoy things",keywords:["money","worries","enjoy"],emotion:"sadness",tone:"stress"},{id:15,timestamp:"Jan 15",rawText:"built something cool today, forgot about everything for hours",keywords:["built","cool"],emotion:"excitement",tone:"resolved"},{id:16,timestamp:"Jan 25",rawText:"in the zone building this new project, time disappeared",keywords:["built","project","zone"],emotion:"excitement",tone:"resolved"},{id:17,timestamp:"Feb 8",rawText:"built a prototype and it actually works, feeling alive",keywords:["built","prototype","alive"],emotion:"joy",tone:"resolved"},{id:18,timestamp:"Feb 16",rawText:"creating again after a slump, this is what I'm meant to do",keywords:["creating","meant"],emotion:"confidence",tone:"resolved"},{id:19,timestamp:"Feb 28",rawText:"shipped the feature I've been building, pure satisfaction",keywords:["built","shipped","satisfaction"],emotion:"confidence",tone:"resolved"},{id:20,timestamp:"Mar 5",rawText:"building momentum with this project, ideas flowing freely",keywords:["built","momentum","ideas"],emotion:"excitement",tone:"resolved"},{id:21,timestamp:"Mar 10",rawText:"built three things this week, on fire creatively",keywords:["built","creative","fire"],emotion:"excitement",tone:"resolved"},{id:22,timestamp:"Jan 18",rawText:"had a beautiful walk through the park, felt grounded",keywords:["walk","park","grounded"],emotion:"peace",tone:"resolved"},{id:23,timestamp:"Feb 2",rawText:"morning meditation brought real peace today",keywords:["meditation","peace"],emotion:"peace",tone:"resolved"},{id:24,timestamp:"Feb 20",rawText:"sat by the water and just breathed, felt completely at peace",keywords:["water","breathed","peace"],emotion:"peace",tone:"resolved"},{id:25,timestamp:"Mar 3",rawText:"grounded myself with a long walk, the noise quieted down",keywords:["grounded","walk","quiet"],emotion:"peace",tone:"resolved"},{id:26,timestamp:"Mar 9",rawText:"found peace in the garden today, hands in the earth",keywords:["peace","garden","earth"],emotion:"peace",tone:"resolved"},{id:27,timestamp:"Jan 22",rawText:"sleep has been terrible, mind racing at 2am",keywords:["sleep","mind","racing"],emotion:"exhaustion",tone:"stress"},{id:28,timestamp:"Feb 6",rawText:"another night of broken sleep, running on empty",keywords:["sleep","broken","empty"],emotion:"exhaustion",tone:"stress"},{id:29,timestamp:"Feb 19",rawText:"sleep deprivation making everything feel harder",keywords:["sleep","harder"],emotion:"exhaustion",tone:"stress"},{id:30,timestamp:"Mar 1",rawText:"tried every sleep trick, still waking up at 3am",keywords:["sleep","waking"],emotion:"frustration",tone:"stress"},{id:31,timestamp:"Mar 6",rawText:"exhausted from bad sleep, body aches constantly",keywords:["sleep","exhausted","aches"],emotion:"exhaustion",tone:"stress"},{id:32,timestamp:"Jan 30",rawText:"frustrated that my partner doesn't communicate clearly",keywords:["partner","communicate"],emotion:"frustration",tone:"stress"},{id:33,timestamp:"Feb 10",rawText:"had an honest conversation with partner, felt closer",keywords:["partner","honest","closer"],emotion:"love",tone:"resolved"},{id:34,timestamp:"Feb 25",rawText:"partner and I are growing together, grateful for the effort",keywords:["partner","growing","grateful"],emotion:"gratitude",tone:"resolved"},{id:35,timestamp:"Mar 4",rawText:"partner surprised me today, feeling really loved",keywords:["partner","loved","surprised"],emotion:"love",tone:"resolved"},{id:36,timestamp:"Jan 16",rawText:"great conversation with a mentor, clarity about direction",keywords:["mentor","clarity","direction"],emotion:"clarity",tone:"resolved"},{id:37,timestamp:"Feb 1",rawText:"breakthrough moment of clarity about what I actually want",keywords:["clarity","breakthrough","want"],emotion:"clarity",tone:"resolved"},{id:38,timestamp:"Feb 15",rawText:"reading is giving me clarity I didn't know I needed",keywords:["reading","clarity"],emotion:"clarity",tone:"resolved"},{id:39,timestamp:"Mar 2",rawText:"clarity hit me during my run, I know what to do next",keywords:["clarity","run","next"],emotion:"confidence",tone:"resolved"},{id:40,timestamp:"Mar 8",rawText:"therapy session brought so much clarity, feeling lighter",keywords:["clarity","therapy","lighter"],emotion:"clarity",tone:"resolved"},{id:41,timestamp:"Feb 9",rawText:"feeling really isolated lately, nobody checks in",keywords:["isolated","nobody"],emotion:"loneliness",tone:"stress"},{id:42,timestamp:"Feb 23",rawText:"surrounded by people but still feel alone",keywords:["alone","people"],emotion:"loneliness",tone:"stress"},{id:43,timestamp:"Mar 5",rawText:"lonely again tonight, scrolling through old messages",keywords:["lonely","messages"],emotion:"loneliness",tone:"stress"},{id:44,timestamp:"Feb 12",rawText:"feeling hopeful about what I'm building for the first time",keywords:["hopeful","building"],emotion:"hope",tone:"resolved"},{id:45,timestamp:"Feb 27",rawText:"I can see a future I'm excited about, things are shifting",keywords:["future","excited","shifting"],emotion:"hope",tone:"resolved"},{id:46,timestamp:"Mar 9",rawText:"hope is the thread pulling me through, holding onto it",keywords:["hope","thread","holding"],emotion:"hope",tone:"resolved"}],W=Ue.useCallback(H=>{const P={};return H.forEach(I=>I.keywords.forEach(G=>{const Z=vr(G);P[Z]||(P[Z]={label:Z,frequency:0,firstSeen:I.timestamp,lastSeen:I.timestamp,emotion:I.emotion,entries:[],emotionCounts:{},rawKeywords:new Set}),P[Z].frequency++,P[Z].lastSeen=I.timestamp,P[Z].entries.push(I.id),P[Z].rawKeywords.add(G),P[Z].emotionCounts[I.emotion]=(P[Z].emotionCounts[I.emotion]||0)+1})),Object.values(P).forEach(I=>{let G=0,Z=I.emotion;for(const[ee,K]of Object.entries(I.emotionCounts))K>G&&(G=K,Z=ee);I.emotion=Z,I.rawKeywords=[...I.rawKeywords]}),Object.values(P).filter(I=>I.frequency>=1).sort((I,G)=>G.frequency-I.frequency).slice(0,40)},[]),L=Ue.useCallback(H=>{if(e("main"),Pt.play("reveal"),H==="explore"){i(Y);const P=W(Y);s(P);const I=Y[Y.length-1];I&&I.keywords.length>0&&setTimeout(()=>v(I.keywords[0]),1200)}setTimeout(()=>Pt.play("drone"),600)},[W]),V=Ue.useCallback(()=>{if(!o.trim())return;Pt.play("submit");const H=xT(o),P=mT(o),I=wc(P),G=new Date,Z=`${G.toLocaleString("default",{month:"short"})} ${G.getDate()}`,ee={id:Date.now(),timestamp:Z,rawText:o,keywords:H,emotion:P,tone:I},K=[...n,ee],Q={};r.forEach(_e=>{Q[_e.label]=_e.frequency});const he=W(K);i(K),s(he),a(""),_(!0),setTimeout(()=>_(!1),800);let ge=!1;he.forEach(_e=>{(Q[_e.label]||0)<3&&_e.frequency>=3&&(ge=!0)}),ge?Pt.play("coalesce"):Pt.play("impact");const Se=vr(H[0]||"thought");if(A({text:Se,emotion:P,id:ee.id}),setTimeout(()=>A(null),2800),H.length>0){const _e=H.reduce((be,He)=>{const X=vr(He),ot=he.find(Re=>Re.label===X);return ot&&ot.frequency>(be.freq||0)?{kw:X,freq:ot.frequency}:be},{kw:Se,freq:0});v(null),setTimeout(()=>v(_e.kw),300);const Pe=he.find(be=>be.label===_e.kw);Pe&&Pe.frequency>=3&&setTimeout(()=>u(Pe),2200)}},[o,n,r,W]),N=Ue.useCallback(H=>{const P=r.find(I=>I.label===H);P&&u(P)},[r]);return Ue.useEffect(()=>{const H=document.createElement("link");return H.href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,ital,wght@9..144,0,300;9..144,0,400;9..144,1,300&family=DM+Sans:wght@300;400;500&family=JetBrains+Mono:wght@300;400&display=swap",H.rel="stylesheet",document.head.appendChild(H),()=>{document.head.contains(H)&&document.head.removeChild(H)}},[]),Ue.useEffect(()=>{const H=P=>{P.key==="Escape"&&(p?u(null):O?S(!1):d&&f(!1))};return window.addEventListener("keydown",H),()=>window.removeEventListener("keydown",H)},[p,d,O]),t==="intro"?te.jsx(MT,{onEnter:L}):te.jsxs("div",{style:{width:"100%",height:"100vh",background:oe.bg,position:"relative",overflow:"hidden",fontFamily:"'DM Sans', system-ui"},children:[te.jsx("div",{style:{position:"absolute",inset:0,pointerEvents:"none",zIndex:1,mixBlendMode:"overlay",opacity:.025,backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`}}),y&&te.jsx("div",{style:{position:"absolute",inset:0,zIndex:50,pointerEvents:"none",background:`radial-gradient(circle at 50% 50%, ${oe.glowAmber} 0%, transparent 50%)`,animation:"flashOut 0.8s ease-out forwards"}}),T&&(()=>{const H=gr(T.emotion);return te.jsxs("div",{style:{position:"absolute",top:"38%",left:"50%",zIndex:45,pointerEvents:"none",textAlign:"center"},children:[te.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",width:220,height:220,borderRadius:"50%",border:`1px solid ${H.hex}55`,animation:"birthRing 2.4s ease-out forwards"}}),te.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",width:180,height:180,borderRadius:"50%",background:`radial-gradient(circle, ${H.hex}cc 0%, ${H.hex}88 15%, ${H.hex}44 35%, ${H.hex}11 60%, transparent 80%)`,animation:"starBurst 2.8s ease-out forwards"}}),te.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",width:24,height:24,borderRadius:"50%",background:`radial-gradient(circle, #ffffff 0%, ${H.hex} 50%, transparent 100%)`,animation:"birthCore 1.2s ease-out forwards"}}),te.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",width:2,height:120,background:`linear-gradient(to bottom, transparent, ${H.hex}88, transparent)`,animation:"birthRay 2s ease-out forwards"}}),te.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",width:120,height:2,background:`linear-gradient(to right, transparent, ${H.hex}88, transparent)`,animation:"birthRay 2s ease-out forwards"}}),te.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",whiteSpace:"nowrap",fontFamily:"'Fraunces', Georgia, serif",fontSize:22,fontWeight:300,color:H.hex,letterSpacing:"0.08em",textShadow:`0 0 24px ${H.hex}cc, 0 0 48px ${H.hex}66, 0 0 80px ${H.hex}33`,animation:"birthFade 2.8s cubic-bezier(0.22, 1, 0.36, 1) forwards"},children:T.text}),te.jsx("div",{style:{position:"absolute",top:"calc(50% + 32px)",left:"50%",transform:"translateX(-50%)",whiteSpace:"nowrap",fontFamily:"'JetBrains Mono', monospace",fontSize:8,letterSpacing:"0.2em",color:oe.textSecondary,animation:"birthFade 2.8s cubic-bezier(0.22, 1, 0.36, 1) 0.2s forwards",opacity:0},children:H.label.toUpperCase()})]},T.id)})(),te.jsx(ET,{clusters:r,entries:n,onMarkerClick:N,zoomTarget:m,viewMode:M,sceneSettings:w}),te.jsxs("div",{style:{position:"absolute",top:16,left:"50%",transform:"translateX(-50%)",zIndex:20,display:"flex",alignItems:"center",gap:10,animation:"fadeDown 1s ease 0.4s both",pointerEvents:"none"},children:[te.jsx("div",{style:{fontFamily:"'Fraunces', Georgia, serif",fontSize:22,color:oe.textPrimary,fontWeight:300,textShadow:`0 0 30px ${oe.glowAmber}`},children:"COIL"}),te.jsx("div",{style:{width:1,height:16,background:oe.surfaceLight}}),te.jsxs("div",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:9,color:oe.textMuted,letterSpacing:"0.1em"},children:[n.length," MAPPED"]})]}),te.jsx(TT,{clusters:r,entries:n,isOpen:d,onToggle:()=>{f(!d),Pt.play("hover")},onClusterClick:H=>{v(null),setTimeout(()=>v(H),50);const P=r.find(I=>I.label===H);P&&setTimeout(()=>u(P),400)}}),te.jsx(AT,{isOpen:h,onToggle:()=>g(!h),viewMode:M}),te.jsx(bT,{isOpen:O,onToggle:()=>S(!O),settings:w,onChange:q}),te.jsx("button",{onClick:()=>{b(H=>H==="surface"?"planet":"surface"),Pt.play("reveal")},onMouseEnter:()=>Pt.play("hover"),style:{position:"absolute",top:18,right:18,zIndex:30,background:`${oe.surface}cc`,border:`1px solid ${oe.surfaceLight}`,borderRadius:10,padding:"8px 14px",cursor:"pointer",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",gap:8,transition:"all 0.3s ease"},children:te.jsx("span",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:9,letterSpacing:"0.12em",color:oe.amber},children:M==="surface"?"◈ SURFACE":"◎ PLANET"})}),p&&te.jsx(wT,{cluster:p,entries:n,onClose:()=>u(null)}),te.jsxs("div",{style:{position:"absolute",bottom:32,left:"50%",transform:"translateX(-50%)",width:"90%",maxWidth:500,zIndex:20,animation:"fadeUp 1s ease 0.6s both"},children:[te.jsx("div",{style:{fontFamily:"'JetBrains Mono', monospace",fontSize:9,color:l?oe.amber:oe.textMuted,letterSpacing:"0.2em",marginBottom:8,marginLeft:4,transition:"color 0.4s"},children:"WHAT'S LOOPING?"}),te.jsxs("div",{style:{position:"relative",borderRadius:14},children:[te.jsx("div",{style:{position:"absolute",inset:0,borderRadius:14,pointerEvents:"none",zIndex:2,border:`1px solid ${l?oe.amber+"44":oe.surfaceLight}`,boxShadow:l?`0 0 28px ${oe.glowAmber}`:"none",transition:"all 0.5s ease",animation:!y&&!l?"breathe 5s ease-in-out infinite":"none"}}),te.jsx("textarea",{value:o,onChange:H=>a(H.target.value),onFocus:()=>c(!0),onBlur:()=>c(!1),onKeyDown:H=>{H.key==="Enter"&&!H.shiftKey&&(H.preventDefault(),V())},placeholder:"dump whatever is on your mind...",rows:2,style:{width:"100%",background:`${oe.surface}dd`,backdropFilter:"blur(20px)",border:"none",borderRadius:14,padding:"16px 54px 16px 18px",color:oe.textPrimary,fontFamily:"'DM Sans', system-ui",fontSize:14,lineHeight:1.6,resize:"none",outline:"none",boxSizing:"border-box"}}),te.jsx("button",{onClick:V,onMouseEnter:()=>o.trim()&&Pt.play("hover"),style:{position:"absolute",right:12,bottom:12,width:34,height:34,borderRadius:10,border:"none",cursor:o.trim()?"pointer":"default",background:o.trim()?`linear-gradient(135deg, ${oe.amber}, ${oe.amberDim})`:oe.surfaceLight,color:o.trim()?oe.bg:oe.textMuted,display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,transition:"all 0.3s ease",zIndex:3,boxShadow:o.trim()?`0 4px 14px ${oe.amber}33`:"none"},children:"↑"})]})]}),te.jsx("div",{style:{position:"absolute",bottom:5,left:"50%",transform:"translateX(-50%)",fontFamily:"'JetBrains Mono', monospace",fontSize:7,color:oe.textMuted,letterSpacing:"0.25em",opacity:.35,zIndex:15,pointerEvents:"none"},children:"A LIRIO LABS INSTRUMENT"}),te.jsx("style",{children:`
        @keyframes breathe { 0%,100%{border-color:${oe.surfaceLight};box-shadow:none} 50%{border-color:${oe.amber}22;box-shadow:0 0 18px ${oe.glowAmber}} }
        @keyframes fadeUp { from{opacity:0;transform:translateX(-50%) translateY(20px)} to{opacity:1;transform:translateX(-50%) translateY(0)} }
        @keyframes fadeDown { from{opacity:0;transform:translateY(-12px)} to{opacity:1;transform:translateY(0)} }
        @keyframes flashOut { 0%{opacity:0.5} 100%{opacity:0} }
        @keyframes birthFade { 0%{opacity:0;transform:translate(-50%,-50%) scale(0.6)} 12%{opacity:1;transform:translate(-50%,-50%) scale(1.05)} 20%{transform:translate(-50%,-50%) scale(1)} 75%{opacity:0.9} 100%{opacity:0;transform:translate(-50%,-50%) scale(1) translateY(-18px)} }
        @keyframes starBurst { 0%{opacity:0;transform:translate(-50%,-50%) scale(0)} 15%{opacity:1;transform:translate(-50%,-50%) scale(1.2)} 30%{opacity:0.9;transform:translate(-50%,-50%) scale(0.85)} 50%{opacity:0.6;transform:translate(-50%,-50%) scale(1.6)} 100%{opacity:0;transform:translate(-50%,-50%) scale(2.5)} }
        @keyframes birthRing { 0%{opacity:0;transform:translate(-50%,-50%) scale(0)} 20%{opacity:0.8;transform:translate(-50%,-50%) scale(0.8)} 60%{opacity:0.3;transform:translate(-50%,-50%) scale(1.5)} 100%{opacity:0;transform:translate(-50%,-50%) scale(2.2)} }
        @keyframes birthCore { 0%{opacity:0;transform:translate(-50%,-50%) scale(0)} 10%{opacity:1;transform:translate(-50%,-50%) scale(2)} 40%{opacity:0.8;transform:translate(-50%,-50%) scale(1)} 100%{opacity:0;transform:translate(-50%,-50%) scale(0)} }
        @keyframes birthRay { 0%{opacity:0;transform:translate(-50%,-50%) scaleY(0)} 15%{opacity:0.8;transform:translate(-50%,-50%) scaleY(1.2)} 50%{opacity:0.4;transform:translate(-50%,-50%) scaleY(1)} 100%{opacity:0;transform:translate(-50%,-50%) scaleY(0.3)} }
        @keyframes popupIn { 0%{opacity:0;transform:translate(-50%,-50%) scale(0.92)} 100%{opacity:1;transform:translate(-50%,-50%) scale(1)} }
        textarea::placeholder{color:${oe.textMuted};font-style:italic}
        ::-webkit-scrollbar{width:3px} ::-webkit-scrollbar-track{background:transparent} ::-webkit-scrollbar-thumb{background:${oe.surfaceLight};border-radius:3px}
        input[type="range"]::-webkit-slider-thumb{-webkit-appearance:none;width:10px;height:10px;border-radius:50%;background:${oe.amber};cursor:pointer;border:none;box-shadow:0 0 6px ${oe.amber}44}
        input[type="range"]::-moz-range-thumb{width:10px;height:10px;border-radius:50%;background:${oe.amber};cursor:pointer;border:none}
        *{box-sizing:border-box}
      `})]})}Fu.createRoot(document.getElementById("root")).render(te.jsx(Wv.StrictMode,{children:te.jsx(RT,{})}));
