"use strict";var i=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(s){throw (r=0, s)}};};var u=i(function(h,n){
var c=require('@stdlib/blas-ext-base-sdsapxsumpw/dist').ndarray;function y(e,r,s,a,m){return c(e,r,s,a,m)}n.exports=y
});var d=i(function(k,v){
var f=require('@stdlib/strided-base-stride2offset/dist'),j=u();function l(e,r,s,a){return j(e,r,s,a,f(e,a))}v.exports=l
});var o=i(function(z,q){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=d(),_=u();R(p,"ndarray",_);q.exports=p
});var w=require("path").join,E=require('@stdlib/utils-try-require/dist'),O=require('@stdlib/assert-is-error/dist'),b=o(),t,x=E(w(__dirname,"./native.js"));O(x)?t=b:t=x;module.exports=t;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
