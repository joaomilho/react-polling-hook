!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.ReactPollingHook=t(require("react")):e.ReactPollingHook=t(e.react)}(window,function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(t,r){t.exports=e},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n);var u=function(e){if(o.a.version.split("-")[0]<"16.7.0")throw new Error("Hooks are only supported in React 16.7.0-alpha release or above");var t=e.url,r=e.interval,u=void 0===r?3e3:r,c=e.retryCount,i=void 0===c?0:c,f=e.onSuccess,a=e.onFailure,l=void 0===a?function(){}:a,s=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,["url","interval","retryCount","onSuccess","onFailure"]),d=Object(n.useState)(!1),p=d[0],b=d[1],v=Object(n.useRef)(),y=Object(n.useRef)(),j=Object(n.useRef)();if(v.current=p,Object(n.useEffect)(function(){return y.current=!0,m(),function(){y.current=!1,h()}},[]),!t)throw new Error("No url provided to poll. Please provide a config object with the url param set");var O=!!i,h=function(){y.current&&(j.current&&(clearTimeout(j.current),j.current=null),b(!1))},m=function(){b(!0),g()},g=function e(){var r=setTimeout(function(){fetch(t,s).then(function(e){return e.json().then(function(t){return e.ok?t:Promise.reject({status:e.status,data:t})})}).then(f).then(function(t){v.current&&t?e():h()}).catch(function(t){O&&i>0?(l&&l(t),i--,e()):(l&&l(t),h())})},u);j.current=r};return[p,m,h]};r.d(t,"usePolling",function(){return u})}])});
//# sourceMappingURL=ReactPollingHook.js.map