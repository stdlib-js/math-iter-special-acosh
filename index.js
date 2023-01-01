// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).iterAcosh=r()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,n=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,a=e.__lookupGetter__,c=e.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?n:function(t,r,n){var f,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(a.call(t,r)||c.call(t,r)?(f=t.__proto__,t.__proto__=e,delete t[r],t[r]=n.value,t.__proto__=f):t[r]=n.value),y="get"in n,p="set"in n,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(t,r,n.get),p&&i&&i.call(t,r,n.set),t};var f=r;function l(t,r,n){f(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}var y=/./;function p(t){return"boolean"==typeof t}var v="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return v&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function m(t,r){return null!=t&&d.call(t,r)}var w="function"==typeof Symbol?Symbol.toStringTag:"";var j=b()?function(t){var r,n,e;if(null==t)return s.call(t);n=t[w],r=m(t,w);try{t[w]=void 0}catch(r){return s.call(t)}return e=s.call(t),r?t[w]=n:delete t[w],e}:function(t){return s.call(t)},A=Boolean.prototype.toString;var g=b();function _(t){return"object"==typeof t&&(t instanceof Boolean||(g?function(t){try{return A.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===j(t)))}function h(t){return p(t)||_(t)}function O(){return new Function("return this;")()}l(h,"isPrimitive",p),l(h,"isObject",_);var U="object"==typeof self?self:null,S="object"==typeof window?window:null,E="object"==typeof global?global:null;var N=function(t){if(arguments.length){if(!p(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return O()}if(U)return U;if(S)return S;if(E)return E;throw new Error("unexpected error. Unable to resolve global object.")}(),T=N.document&&N.document.childNodes,F=Int8Array;function P(){return/^\s*function\s*([^(]*)/i}var I=/^\s*function\s*([^(]*)/i;l(P,"REGEXP",I);var x=Array.isArray?Array.isArray:function(t){return"[object Array]"===j(t)};function V(t){return null!==t&&"object"==typeof t}function B(t){var r,n,e,o;if(("Object"===(n=j(t).slice(8,-1))||"Error"===n)&&t.constructor){if("string"==typeof(e=t.constructor).name)return e.name;if(r=I.exec(e.toString()))return r[1]}return V(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}l(V,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var n,e;if(!x(r))return!1;if(0===(n=r.length))return!1;for(e=0;e<n;e++)if(!1===t(r[e]))return!1;return!0}}(V));var G="function"==typeof y||"object"==typeof F||"function"==typeof T?function(t){return B(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?B(t).toLowerCase():r};function k(t){return"function"===G(t)}function C(t){var r=typeof t;return null!==t&&("object"===r||"function"===r)&&k(t.next)}function L(t){return"number"==typeof t}var M=Number,Y=M.prototype.toString;var q=b();function R(t){return"object"==typeof t&&(t instanceof M||(q?function(t){try{return Y.call(t),!0}catch(t){return!1}}(t):"[object Number]"===j(t)))}function X(t){return L(t)||R(t)}l(X,"isPrimitive",L),l(X,"isObject",R);var z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&m(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;var D,H=Object.getPrototypeOf;D=k(Object.getPrototypeOf)?H:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===j(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var J=D;var K=Object.prototype;function Q(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!x(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),J(t))}(t),!r||!m(t,"constructor")&&m(r,"constructor")&&k(r.constructor)&&"[object Function]"===j(r.constructor)&&m(r,"isPrototypeOf")&&k(r.isPrototypeOf)&&(r===K||function(t){var r;for(r in t)if(!m(t,r))return!1;return!0}(t)))}function W(t,r){return Q(r)?(m(r,"invalid")&&(t.invalid=r.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.")}function Z(t,r,n){var e,o,u,i;if(!C(t))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+t+"`.");if(!k(r))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+r+"`.");if(e={invalid:NaN},arguments.length>2&&(u=W(e,n)))throw u;return l(o={},"next",a),l(o,"return",c),z&&k(t[z])&&l(o,z,f),o;function a(){var n;return i?{done:!0}:(n=t.next()).done?(i=!0,n):{value:L(n.value)?r(n.value):e.invalid,done:!1}}function c(t){return i=!0,arguments.length?{value:t,done:!0}:{done:!0}}function f(){return Z(t[z](),r,e)}}function $(t){return t!=t}var tt="function"==typeof Uint32Array;var rt="function"==typeof Uint32Array?Uint32Array:null;var nt,et="function"==typeof Uint32Array?Uint32Array:void 0;nt=function(){var t,r,n;if("function"!=typeof rt)return!1;try{r=new rt(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(tt&&n instanceof Uint32Array||"[object Uint32Array]"===j(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?et:function(){throw new Error("not implemented")};var ot=nt,ut="function"==typeof Float64Array;var it="function"==typeof Float64Array?Float64Array:null;var at,ct="function"==typeof Float64Array?Float64Array:void 0;at=function(){var t,r,n;if("function"!=typeof it)return!1;try{r=new it([1,3.14,-3.14,NaN]),n=r,t=(ut&&n instanceof Float64Array||"[object Float64Array]"===j(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?ct:function(){throw new Error("not implemented")};var ft=at,lt="function"==typeof Uint8Array;var yt="function"==typeof Uint8Array?Uint8Array:null;var pt,vt="function"==typeof Uint8Array?Uint8Array:void 0;pt=function(){var t,r,n;if("function"!=typeof yt)return!1;try{r=new yt(r=[1,3.14,-3.14,256,257]),n=r,t=(lt&&n instanceof Uint8Array||"[object Uint8Array]"===j(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?vt:function(){throw new Error("not implemented")};var bt=pt,st="function"==typeof Uint16Array;var dt="function"==typeof Uint16Array?Uint16Array:null;var mt,wt="function"==typeof Uint16Array?Uint16Array:void 0;mt=function(){var t,r,n;if("function"!=typeof dt)return!1;try{r=new dt(r=[1,3.14,-3.14,65536,65537]),n=r,t=(st&&n instanceof Uint16Array||"[object Uint16Array]"===j(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?wt:function(){throw new Error("not implemented")};var jt,At={uint16:mt,uint8:bt};(jt=new At.uint16(1))[0]=4660;var gt=52===new At.uint8(jt.buffer)[0],_t=!0===gt?1:0,ht=new ft(1),Ot=new ot(ht.buffer);function Ut(t){return ht[0]=t,Ot[_t]}var St=!0===gt?1:0,Et=new ft(1),Nt=new ot(Et.buffer);function Tt(t,r){return Et[0]=t,Nt[St]=r>>>0,Et[0]}var Ft=Number.POSITIVE_INFINITY,Pt=M.NEGATIVE_INFINITY,It=1023;var xt=.6931471803691238,Vt=1.9082149292705877e-10;var Bt=Math.sqrt;var Gt=.6931471803691238,kt=1.9082149292705877e-10,Ct=1048575;function Lt(t){var r,n,e,o,u,i,a,c,f,l,y,p;return 0===t?Pt:$(t)||t<0?NaN:(u=0,(n=Ut(t))<1048576&&(u-=54,n=Ut(t*=0x40000000000000)),n>=2146435072?t+t:(u+=(n>>20)-It|0,u+=(c=(n&=Ct)+614244&1048576|0)>>20|0,a=(t=Tt(t,n|1072693248^c))-1,(Ct&2+n)<3?0===a?0===u?0:u*Gt+u*kt:(i=a*a*(.5-.3333333333333333*a),0===u?a-i:u*Gt-(i-u*kt-a)):(c=n-398458|0,f=440401-n|0,o=(y=(p=(l=a/(2+a))*l)*p)*function(t){return 0===t?.3999999999940942:.3999999999940942+t*(.22222198432149784+.15313837699209373*t)}(y),e=p*function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.2857142874366239+t*(.1818357216161805+.14798198605116586*t))}(y),i=e+o,(c|=f)>0?(r=.5*a*a,0===u?a-(r-l*(r+i)):u*Gt-(r-(l*(r+i)+u*kt)-a)):0===u?a-l*(a-i):u*Gt-(l*(a-i)-u*kt-a))))}function Mt(t){var r;return $(t)||t<1?NaN:1===t?0:t>=268435456?Lt(t)+.6931471805599453:t>2?Lt(2*t-1/(t+Bt(t*t-1))):function(t){var r,n,e,o,u,i,a,c,f,l;if(t<-1||$(t))return NaN;if(-1===t)return Pt;if(t===Ft)return t;if(0===t)return t;if(l=1,(e=t<0?-t:t)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?t:t-t*t*.5;t>-.2928932188134525&&(l=0,o=t,n=1)}return 0!==l&&(e<9007199254740992?(u=(l=((n=Ut(f=1+t))>>20)-It)>0?1-(f-t):t-(f-1),u/=f):(l=((n=Ut(f=t))>>20)-It,u=0),(n&=1048575)<434334?f=Tt(f,1072693248|n):(l+=1,f=Tt(f,1071644672|n),n=1048576-n>>2),o=f-1),r=.5*o*o,0===n?0===o?l*xt+(u+=l*Vt):l*xt-((c=r*(1-.6666666666666666*o))-(l*Vt+u)-o):(c=(a=(i=o/(2+o))*i)*function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.3999999999940942+t*(.2857142874366239+t*(.22222198432149784+t*(.1818357216161805+t*(.15313837699209373+.14798198605116586*t)))))}(a),0===l?o-(r-i*(r+c)):l*xt-(r-(i*(r+c)+(l*Vt+u))-o))}((r=t-1)+Bt(2*r+r*r))}return function(t){return Z(t,Mt)}}));
//# sourceMappingURL=index.js.map