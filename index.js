// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((r="undefined"!=typeof globalThis?globalThis:r||self).sdsapxsum={})}(this,(function(r){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,n=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,f=o.__defineSetter__,a=o.__lookupGetter__,c=o.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(r){return!1}}()?n:function(r,t,e){var n,l,s,p;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===u.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(a.call(r,t)||c.call(r,t)?(n=r.__proto__,r.__proto__=o,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),s="get"in e,p="set"in e,l&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&i&&i.call(r,t,e.get),p&&f&&f.call(r,t,e.set),r};var l=e;function s(r,t,e){l(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function p(r){var t=function(r){return"/"===r.charAt(0)}(r),e="/"===b(r,-1);return(r=function(r,t){for(var e=0,n=r.length-1;n>=0;n--){var o=r[n];"."===o?r.splice(n,1):".."===o?(r.splice(n,1),e++):e&&(r.splice(n,1),e--)}if(t)for(;e--;e)r.unshift("..");return r}(y(r.split("/"),(function(r){return!!r})),!t).join("/"))||t||(r="."),r&&e&&(r+="/"),(t?"/":"")+r}function y(r,t){if(r.filter)return r.filter(t);for(var e=[],n=0;n<r.length;n++)t(r[n],n,r)&&e.push(r[n]);return e}var b="b"==="ab".substr(-1)?function(r,t,e){return r.substr(t,e)}:function(r,t,e){return t<0&&(t=r.length+t),r.substr(t,e)},d=/./;function v(r){return"boolean"==typeof r}var j="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function _(){return j&&"symbol"==typeof Symbol.toStringTag}var m=Object.prototype.toString;var w=Object.prototype.hasOwnProperty;var g,h="function"==typeof Symbol?Symbol.toStringTag:"";g=_()?function(r){var t,e,n,o,u;if(null==r)return m.call(r);e=r[h],u=h,t=null!=(o=r)&&w.call(o,u);try{r[h]=void 0}catch(t){return m.call(r)}return n=m.call(r),t?r[h]=e:delete r[h],n}:function(r){return m.call(r)};var O=g,A=Boolean.prototype.toString;var E=_();function S(r){return"object"==typeof r&&(r instanceof Boolean||(E?function(r){try{return A.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===O(r)))}function x(r){return v(r)||S(r)}function F(){return new Function("return this;")()}s(x,"isPrimitive",v),s(x,"isObject",S);var P="object"==typeof self?self:null,T="object"==typeof window?window:null,B="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},I="object"==typeof B?B:null;var M=function(r){if(arguments.length){if(!v(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return F()}if(P)return P;if(T)return T;if(I)return I;throw new Error("unexpected error. Unable to resolve global object.")}(),N=M.document&&M.document.childNodes,V=Int8Array;function k(){return/^\s*function\s*([^(]*)/i}var C,G=/^\s*function\s*([^(]*)/i;s(k,"REGEXP",G),C=Array.isArray?Array.isArray:function(r){return"[object Array]"===O(r)};var L=C;function q(r){return null!==r&&"object"==typeof r}var J=function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!L(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(q);function R(r){var t,e,n,o;if(("Object"===(e=O(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=G.exec(n.toString()))return t[1]}return q(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}s(q,"isObjectLikeArray",J);var U="function"==typeof d||"object"==typeof V||"function"==typeof N?function(r){return R(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?R(r).toLowerCase():t};var X,Y,z=Object.getPrototypeOf;Y=Object.getPrototypeOf,X="function"===U(Y)?z:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===O(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var D=X;function H(r){return null==r?null:(r=Object(r),D(r))}function K(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===O(r))return!0;r=H(r)}return!1}var Q="function"==typeof Math.fround?Math.fround:null,W="function"==typeof Float32Array;var Z=Number.POSITIVE_INFINITY,$="function"==typeof Float32Array?Float32Array:null;var rr,tr="function"==typeof Float32Array?Float32Array:void 0;rr=function(){var r,t;if("function"!=typeof $)return!1;try{r=function(r){return W&&r instanceof Float32Array||"[object Float32Array]"===O(r)}(t=new $([1,3.14,-3.14,5e40]))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===Z}catch(t){r=!1}return r}()?tr:function(){throw new Error("not implemented")};var er=new rr(1);var nr,or="function"==typeof Q?Q:function(r){return er[0]=r,er[0]},ur=Math.floor;function ir(r,t,e,n,o){var u,i,f,a,c,l,s,p,y,b,d,v,j;if(r<=0)return 0;if(1===r||0===n)return or(t+e[o]);if(u=o,r<8){for(d=0,j=0;j<r;j++)d+=t+e[u],u+=n;return or(d)}if(r<=128){for(i=t+e[u],f=t+e[u+n],a=t+e[u+2*n],c=t+e[u+3*n],l=t+e[u+4*n],s=t+e[u+5*n],p=t+e[u+6*n],y=t+e[u+7*n],u+=8*n,b=r%8,j=8;j<r-b;j+=8)i+=t+e[u],f+=t+e[u+n],a+=t+e[u+2*n],c+=t+e[u+3*n],l+=t+e[u+4*n],s+=t+e[u+5*n],p+=t+e[u+6*n],y+=t+e[u+7*n],u+=8*n;for(d=i+f+(a+c)+(l+s+(p+y));j<r;j++)d+=t+e[u],u+=n;return or(d)}return v=ur(r/2),or(ir(v-=v%8,t,e,n,u)+ir(r-v,t,e,n,u+v*n))}function fr(r,t,e,n){var o,u,i;if(r<=0)return 0;if(1===r||0===n)return or(t+e[0]);if(o=n<0?(1-r)*n:0,r<8){for(u=0,i=0;i<r;i++)u+=t+e[o],o+=n;return or(u)}return ir(r,t,e,n,o)}s(fr,"ndarray",ir);var ar=function(r){try{return require(r)}catch(r){return K(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}(function(){var r=Array.prototype.slice.call(arguments,0);return p(y(r,(function(r,t){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))}("/home/runner/work/blas-ext-base-sdsapxsum/blas-ext-base-sdsapxsum/node_modules/@stdlib/blas-ext-base-sdsapxsumpw/lib","./native.js")),cr=nr=K(ar)?fr:ar;const{ndarray:lr}=nr;function sr(r,t,e,n){return cr(r,t,e,n)}function pr(r,t,e,n,o){return lr(r,t,e,n,o)}s(sr,"ndarray",pr),r.default=sr,r.ndarray=pr,Object.defineProperty(r,"__esModule",{value:!0})}));
//# sourceMappingURL=index.js.map