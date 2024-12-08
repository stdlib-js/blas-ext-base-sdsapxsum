"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=u(function(g,t){
var c=require('@stdlib/blas-ext-base-sdsapxsumpw/dist');function y(e,r,s,a){return c(e,r,s,a)}t.exports=y
});var v=u(function(h,p){
var f=require('@stdlib/blas-ext-base-sdsapxsumpw/dist').ndarray;function j(e,r,s,a,o){return f(e,r,s,a,o)}p.exports=j
});var x=u(function(k,q){
var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=n(),w=v();l(d,"ndarray",w);q.exports=d
});var R=require("path").join,_=require('@stdlib/utils-try-require/dist'),E=require('@stdlib/assert-is-error/dist'),O=x(),i,m=_(R(__dirname,"./native.js"));E(m)?i=O:i=m;module.exports=i;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
