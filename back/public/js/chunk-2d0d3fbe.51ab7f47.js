(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d3fbe"],{"5ea9":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return et}));var r=n("2b0e"),o=/^[a-z0-9]+(-[a-z0-9]+)*$/,i=Object.freeze({left:0,top:0,width:16,height:16,rotate:0,vFlip:!1,hFlip:!1});function c(e){return{...i,...e}}var s=(e,t,n,r="")=>{const o=e.split(":");if("@"===e.slice(0,1)){if(o.length<2||o.length>3)return null;r=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const e=o.pop(),n=o.pop(),i={provider:o.length>0?o[0]:r,prefix:n,name:e};return t&&!a(i)?null:i}const i=o[0],c=i.split("-");if(c.length>1){const e={provider:r,prefix:c.shift(),name:c.join("-")};return t&&!a(e)?null:e}if(n&&""===r){const e={provider:r,prefix:"",name:i};return t&&!a(e,n)?null:e}return null},a=(e,t)=>!!e&&!(""!==e.provider&&!e.provider.match(o)||!(t&&""===e.prefix||e.prefix.match(o))||!e.name.match(o));function l(e,t){const n={...e};for(const r in i){const e=r;if(void 0!==t[e]){const r=t[e];if(void 0===n[e]){n[e]=r;continue}switch(e){case"rotate":n[e]=(n[e]+r)%4;break;case"hFlip":case"vFlip":n[e]=r!==n[e];break;default:n[e]=r}}}return n}function f(e,t,n=!1){function r(t,n){var o,i,c,s;if(void 0!==e.icons[t])return Object.assign({},e.icons[t]);if(n>5)return null;if(void 0!==(null==(o=e.aliases)?void 0:o[t])){const o=null==(i=e.aliases)?void 0:i[t],c=r(o.parent,n+1);return c?l(c,o):c}return 0===n&&void 0!==(null==(c=e.chars)?void 0:c[t])?r(null==(s=e.chars)?void 0:s[t],n+1):null}const o=r(t,0);if(o)for(const c in i)void 0===o[c]&&void 0!==e[c]&&(o[c]=e[c]);return o&&n?c(o):o}var u=/^[a-f0-9]+(-[a-f0-9]+)*$/;function d(e,t){for(const n in e){const r=n,o=e[r],i=typeof o;if("undefined"!==i)switch(n){case"body":case"parent":if("string"!==i)return n;break;case"hFlip":case"vFlip":case"hidden":if("boolean"!==i){if(!t)return n;delete e[r]}break;case"width":case"height":case"left":case"top":case"rotate":case"inlineHeight":case"inlineTop":case"verticalAlign":if("number"!==i){if(!t)return n;delete e[r]}break;default:if("object"===i){if(!t)return n;delete e[r]}}else delete e[r]}return null}function p(e,t){const n=!!(null==t?void 0:t.fix);if("object"!==typeof e||null===e||"object"!==typeof e.icons||!e.icons)throw new Error("Bad icon set");const r=e;if("string"===typeof(null==t?void 0:t.prefix))r.prefix=t.prefix;else if("string"!==typeof r.prefix||!r.prefix.match(o))throw new Error("Invalid prefix");if("string"===typeof(null==t?void 0:t.provider))r.provider=t.provider;else if(void 0!==r.provider){const e=r.provider;if("string"!==typeof e||""!==e&&!e.match(o)){if(!n)throw new Error("Invalid provider");delete r.provider}}const c=r.icons;if(Object.keys(c).forEach(e=>{if(!e.match(o)){if(n)return void delete c[e];throw new Error(`Invalid icon name: "${e}"`)}const t=c[e];if("object"!==typeof t||null===t||"string"!==typeof t.body){if(n)return void delete c[e];throw new Error(`Invalid icon: "${e}"`)}const r="string"===typeof t.parent?"parent":d(t,n);if(null!==r){if(n)return void delete c[e];throw new Error(`Invalid property "${r}" in icon "${e}"`)}}),!Object.keys(r.icons).length)throw new Error("Icon set is empty");if(void 0!==r.aliases&&("object"!==typeof r.aliases||null===r.aliases)){if(!n)throw new Error("Invalid aliases list");delete r.aliases}if("object"===typeof r.aliases){let e=function(s,a){if(i.has(s))return!c.has(s);const l=t[s];if(a>5||"object"!==typeof l||null===l||"string"!==typeof l.parent||!s.match(o)){if(n)return delete t[s],c.add(s),!1;throw new Error(`Invalid icon alias: "${s}"`)}const f=l.parent;if(void 0===r.icons[f]&&(void 0===t[f]||!e(f,a+1))){if(n)return delete t[s],c.add(s),!1;throw new Error('Missing parent icon for alias "'+s)}n&&void 0!==l.body&&delete l.body;const u=void 0!==l.body?"body":d(l,n);if(null!==u){if(n)return delete t[s],c.add(s),!1;throw new Error(`Invalid property "${u}" in alias "${s}"`)}return i.add(s),!0};const t=r.aliases,i=new Set,c=new Set;Object.keys(t).forEach(t=>{e(t,0)}),n&&!Object.keys(r.aliases).length&&delete r.aliases}if(Object.keys(i).forEach(e=>{const t=typeof i[e],n=typeof r[e];if("undefined"!==n&&n!==t)throw new Error(`Invalid value type for "${e}"`)}),void 0!==r.chars&&("object"!==typeof r.chars||null===r.chars)){if(!n)throw new Error("Invalid characters map");delete r.chars}if("object"===typeof r.chars){const e=r.chars;Object.keys(e).forEach(t=>{var o;if(!t.match(u)||"string"!==typeof e[t]){if(n)return void delete e[t];throw new Error(`Invalid character "${t}"`)}const i=e[t];if(void 0===r.icons[i]&&void 0===(null==(o=r.aliases)?void 0:o[i])){if(n)return void delete e[t];throw new Error(`Character "${t}" points to missing icon "${i}"`)}}),n&&!Object.keys(r.chars).length&&delete r.chars}return r}function h(e){for(const t in i)if(void 0!==e[t])return!0;return!1}function v(e,t,n){n=n||{};const r=[];if("object"!==typeof e||"object"!==typeof e.icons)return r;const o=n.validate;if(!1!==o)try{p(e,"object"===typeof o?o:{fix:!0})}catch(s){return r}e.not_found instanceof Array&&e.not_found.forEach(e=>{t(e,null),r.push(e)});const i=e.icons;Object.keys(i).forEach(n=>{const o=f(e,n,!0);o&&(t(n,o),r.push(n))});const c=n.aliases||"all";if("none"!==c&&"object"===typeof e.aliases){const n=e.aliases;Object.keys(n).forEach(o=>{if("variations"===c&&h(n[o]))return;const i=f(e,o,!0);i&&(t(o,i),r.push(o))})}return r}var g=Object.create(null);function b(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:Object.create(null)}}function y(e,t){void 0===g[e]&&(g[e]=Object.create(null));const n=g[e];return void 0===n[t]&&(n[t]=b(e,t)),n[t]}function m(e,t){const n=Date.now();return v(t,(t,r)=>{r?e.icons[t]=r:e.missing[t]=n})}function w(e,t,n){try{if("string"===typeof n.body)return e.icons[t]=Object.freeze(c(n)),!0}catch(r){}return!1}function x(e,t){const n=e.icons[t];return void 0===n?null:n}var j=!1;function k(e){return"boolean"===typeof e&&(j=e),j}function E(e){const t="string"===typeof e?s(e,!0,j):e;return t?x(y(t.provider,t.prefix),t.name):null}function I(e,t){const n=s(e,!0,j);if(!n)return!1;const r=y(n.provider,n.prefix);return w(r,n.name,t)}function O(e,t){if("object"!==typeof e)return!1;if("string"!==typeof t&&(t="string"===typeof e.provider?e.provider:""),j&&""===t&&("string"!==typeof e.prefix||""===e.prefix)){let t=!1;return v(e,(e,n)=>{n&&I(e,n)&&(t=!0)},{validate:{fix:!0,prefix:""}}),t}if("string"!==typeof e.prefix||!a({provider:t,prefix:e.prefix,name:"a"}))return!1;const n=y(t,e.prefix);return!!m(n,e)}var A=Object.freeze({inline:!1,width:null,height:null,hAlign:"center",vAlign:"middle",slice:!1,hFlip:!1,vFlip:!1,rotate:0});function $(e,t){const n={};for(const r in e){const o=r;if(n[o]=e[o],void 0===t[o])continue;const i=t[o];switch(o){case"inline":case"slice":"boolean"===typeof i&&(n[o]=i);break;case"hFlip":case"vFlip":!0===i&&(n[o]=!n[o]);break;case"hAlign":case"vAlign":"string"===typeof i&&""!==i&&(n[o]=i);break;case"width":case"height":("string"===typeof i&&""!==i||"number"===typeof i&&i||null===i)&&(n[o]=i);break;case"rotate":"number"===typeof i&&(n[o]+=i);break}}return n}var M=/(-?[0-9.]*[0-9]+[0-9.]*)/g,F=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function T(e,t,n){if(1===t)return e;if(n=void 0===n?100:n,"number"===typeof e)return Math.ceil(e*t*n)/n;if("string"!==typeof e)return e;const r=e.split(M);if(null===r||!r.length)return e;const o=[];let i=r.shift(),c=F.test(i);while(1){if(c){const e=parseFloat(i);isNaN(e)?o.push(i):o.push(Math.ceil(e*t*n)/n)}else o.push(i);if(i=r.shift(),void 0===i)return o.join("");c=!c}}function L(e){let t="";switch(e.hAlign){case"left":t+="xMin";break;case"right":t+="xMax";break;default:t+="xMid"}switch(e.vAlign){case"top":t+="YMin";break;case"bottom":t+="YMax";break;default:t+="YMid"}return t+=e.slice?" slice":" meet",t}function C(e,t){const n={left:e.left,top:e.top,width:e.width,height:e.height};let r,o,i=e.body;[e,t].forEach(e=>{const t=[],r=e.hFlip,o=e.vFlip;let c,s=e.rotate;switch(r?o?s+=2:(t.push("translate("+(n.width+n.left)+" "+(0-n.top)+")"),t.push("scale(-1 1)"),n.top=n.left=0):o&&(t.push("translate("+(0-n.left)+" "+(n.height+n.top)+")"),t.push("scale(1 -1)"),n.top=n.left=0),s<0&&(s-=4*Math.floor(s/4)),s%=4,s){case 1:c=n.height/2+n.top,t.unshift("rotate(90 "+c+" "+c+")");break;case 2:t.unshift("rotate(180 "+(n.width/2+n.left)+" "+(n.height/2+n.top)+")");break;case 3:c=n.width/2+n.left,t.unshift("rotate(-90 "+c+" "+c+")");break}s%2===1&&(0===n.left&&0===n.top||(c=n.left,n.left=n.top,n.top=c),n.width!==n.height&&(c=n.width,n.width=n.height,n.height=c)),t.length&&(i='<g transform="'+t.join(" ")+'">'+i+"</g>")}),null===t.width&&null===t.height?(o="1em",r=T(o,n.width/n.height)):null!==t.width&&null!==t.height?(r=t.width,o=t.height):null!==t.height?(o=t.height,r=T(o,n.width/n.height)):(r=t.width,o=T(r,n.height/n.width)),"auto"===r&&(r=n.width),"auto"===o&&(o=n.height),r="string"===typeof r?r:r+"",o="string"===typeof o?o:o+"";const c={attributes:{width:r,height:o,preserveAspectRatio:L(t),viewBox:n.left+" "+n.top+" "+n.width+" "+n.height},body:i};return t.inline&&(c.inline=!0),c}var _=/\sid="(\S+)"/g,S="IconifyId-"+Date.now().toString(16)+"-"+(16777216*Math.random()|0).toString(16)+"-",R=0;function U(e,t=S){const n=[];let r;while(r=_.exec(e))n.push(r[1]);return n.length?(n.forEach(n=>{const r="function"===typeof t?t(n):t+R++,o=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+o+')([")]|\\.[a-z])',"g"),"$1"+r+"$3")}),e):e}var D=Object.create(null);function P(e,t){D[e]=t}function z(e){return D[e]||D[""]}function N(e){let t;if("string"===typeof e.resources)t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;const n={resources:t,path:void 0===e.path?"/":e.path,maxURL:e.maxURL?e.maxURL:500,rotate:e.rotate?e.rotate:750,timeout:e.timeout?e.timeout:5e3,random:!0===e.random,index:e.index?e.index:0,dataAfterTimeout:!1!==e.dataAfterTimeout};return n}var q=Object.create(null),J=["https://api.simplesvg.com","https://api.unisvg.com"],H=[];while(J.length>0)1===J.length||Math.random()>.5?H.push(J.shift()):H.push(J.pop());function Y(e,t){const n=N(t);return null!==n&&(q[e]=n,!0)}function B(e){return q[e]}q[""]=N({resources:["https://api.iconify.design"].concat(H)});var Q=(e,t)=>{let n=e,r=-1!==n.indexOf("?");function o(e){switch(typeof e){case"boolean":return e?"true":"false";case"number":return encodeURIComponent(e);case"string":return encodeURIComponent(e);default:throw new Error("Invalid parameter")}}return Object.keys(t).forEach(e=>{let i;try{i=o(t[e])}catch(c){return}n+=(r?"&":"?")+encodeURIComponent(e)+"="+i,r=!0}),n},G=Object.create(null),K=Object.create(null),V=()=>{let t;try{if(t=fetch,"function"===typeof t)return t}catch(n){}try{const n=String.fromCharCode(114)+String.fromCharCode(101),r=e[n+"qui"+n];if(t=r("cross-fetch"),"function"===typeof t)return t}catch(n){}return null},W=V();function X(e,t){const n=B(e);if(!n)return 0;let r;if(n.maxURL){let e=0;n.resources.forEach(t=>{const n=t;e=Math.max(e,n.length)});const o=Q(t+".json",{icons:""});r=n.maxURL-e-n.path.length-o.length}else r=0;const o=e+":"+t;return K[e]=n.path,G[o]=r,r}var Z=(e,t,n)=>{const r=[];let o=G[t];void 0===o&&(o=X(e,t));const i="icons";let c={type:i,provider:e,prefix:t,icons:[]},s=0;return n.forEach((n,a)=>{s+=n.length+1,s>=o&&a>0&&(r.push(c),c={type:i,provider:e,prefix:t,icons:[]},s=n.length),c.icons.push(n)}),r.push(c),r};function ee(e){if("string"===typeof e){if(void 0===K[e]){const t=B(e);if(!t)return"/";K[e]=t.path}return K[e]}return"/"}var te=(e,t,n)=>{if(!W)return void n.done(void 0,424);let r=ee(t.provider);switch(t.type){case"icons":{const e=t.prefix,n=t.icons,o=n.join(",");r+=Q(e+".json",{icons:o});break}case"custom":{const e=t.uri;r+="/"===e.slice(0,1)?e.slice(1):e;break}default:return void n.done(void 0,400)}let o=503;W(e+r).then(e=>{if(200===e.status)return o=501,e.json();setTimeout(()=>{n.done(void 0,e.status)})}).then(e=>{"object"===typeof e&&null!==e?setTimeout(()=>{n.done(e)}):setTimeout(()=>{n.done(void 0,o)})}).catch(()=>{n.done(void 0,o)})},ne={prepare:Z,send:te};function re(e){const t={loaded:[],missing:[],pending:[]},n=Object.create(null);e.sort((e,t)=>e.provider!==t.provider?e.provider.localeCompare(t.provider):e.prefix!==t.prefix?e.prefix.localeCompare(t.prefix):e.name.localeCompare(t.name));let r={provider:"",prefix:"",name:""};return e.forEach(e=>{if(r.name===e.name&&r.prefix===e.prefix&&r.provider===e.provider)return;r=e;const o=e.provider,i=e.prefix,c=e.name;void 0===n[o]&&(n[o]=Object.create(null));const s=n[o];void 0===s[i]&&(s[i]=y(o,i));const a=s[i];let l;l=void 0!==a.icons[c]?t.loaded:""===i||void 0!==a.missing[c]?t.missing:t.pending;const f={provider:o,prefix:i,name:c};l.push(f)}),t}var oe=Object.create(null),ie=Object.create(null);function ce(e,t){e.forEach(e=>{const n=e.provider;if(void 0===oe[n])return;const r=oe[n],o=e.prefix,i=r[o];i&&(r[o]=i.filter(e=>e.id!==t))})}function se(e,t){void 0===ie[e]&&(ie[e]=Object.create(null));const n=ie[e];n[t]||(n[t]=!0,setTimeout(()=>{if(n[t]=!1,void 0===oe[e]||void 0===oe[e][t])return;const r=oe[e][t].slice(0);if(!r.length)return;const o=y(e,t);let i=!1;r.forEach(n=>{const r=n.icons,c=r.pending.length;r.pending=r.pending.filter(n=>{if(n.prefix!==t)return!0;const c=n.name;if(void 0!==o.icons[c])r.loaded.push({provider:e,prefix:t,name:c});else{if(void 0===o.missing[c])return i=!0,!0;r.missing.push({provider:e,prefix:t,name:c})}return!1}),r.pending.length!==c&&(i||ce([{provider:e,prefix:t}],n.id),n.callback(r.loaded.slice(0),r.missing.slice(0),r.pending.slice(0),n.abort))})}))}var ae=0;function le(e,t,n){const r=ae++,o=ce.bind(null,n,r);if(!t.pending.length)return o;const i={id:r,icons:t,callback:e,abort:o};return n.forEach(e=>{const t=e.provider,n=e.prefix;void 0===oe[t]&&(oe[t]=Object.create(null));const r=oe[t];void 0===r[n]&&(r[n]=[]),r[n].push(i)}),o}function fe(e,t=!0,n=!1){const r=[];return e.forEach(e=>{const o="string"===typeof e?s(e,!1,n):e;t&&!a(o,n)||r.push({provider:o.provider,prefix:o.prefix,name:o.name})}),r}var ue={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function de(e,t,n,r,o){const i=e.resources.length,c=e.random?Math.floor(Math.random()*i):e.index;let s;if(e.random){let t=e.resources.slice(0);s=[];while(t.length>1){const e=Math.floor(Math.random()*t.length);s.push(t[e]),t=t.slice(0,e).concat(t.slice(e+1))}s=s.concat(t)}else s=e.resources.slice(c).concat(e.resources.slice(0,c));const a=Date.now();let l="pending",f=0,u=void 0,d=null,p=[],h=[];function v(){d&&(clearTimeout(d),d=null)}function g(){"pending"===l&&(l="aborted"),v(),p.forEach(e=>{e.abort&&e.abort(),"pending"===e.status&&(e.status="aborted")}),p=[]}function b(e,t){t&&(h=[]),"function"===typeof e&&h.push(e)}function y(){return{startTime:a,payload:t,status:l,queriesSent:f,queriesPending:p.length,subscribe:b,abort:g}}function m(){l="failed",h.forEach(e=>{e(void 0,u)})}function w(){p=p.filter(e=>("pending"===e.status&&(e.status="aborted"),e.abort&&e.abort(),!1))}function x(t,n,r){const i=void 0===n;switch(p=p.filter(e=>e!==t),l){case"pending":break;case"failed":if(i||!e.dataAfterTimeout)return;break;default:return}if(i)return void 0!==r&&(u=r),void(p.length||(s.length?j():m()));if(v(),w(),o&&!e.random){const n=e.resources.indexOf(t.resource);-1!==n&&n!==e.index&&o(n)}l="completed",h.forEach(e=>{e(n)})}function j(){if("pending"!==l)return;v();const r=s.shift();if(void 0===r){if(p.length){const t="function"===typeof e.timeout?e.timeout(a):e.timeout;if(t)return void(d=setTimeout(()=>{v(),"pending"===l&&(w(),m())},t))}return void m()}const o={getQueryStatus:y,status:"pending",resource:r,done:(e,t)=>{x(o,e,t)}};p.push(o),f++;const i="function"===typeof e.rotate?e.rotate(f,a):e.rotate;d=setTimeout(j,i),n(r,t,o)}return"function"===typeof r&&h.push(r),setTimeout(j),y}function pe(e){if("object"!==typeof e||"object"!==typeof e.resources||!(e.resources instanceof Array)||!e.resources.length)throw new Error("Invalid Reduncancy configuration");const t=Object.create(null);let n;for(n in ue)void 0!==e[n]?t[n]=e[n]:t[n]=ue[n];return t}function he(e){const t=pe(e);let n=[];function r(){n=n.filter(e=>"pending"===e().status)}function o(e,o,i){const c=de(t,e,o,(e,t)=>{r(),i&&i(e,t)},e=>{t.index=e});return n.push(c),c}function i(e){const t=n.find(t=>e(t));return void 0!==t?t:null}const c={query:o,find:i,setIndex:e=>{t.index=e},getIndex:()=>t.index,cleanup:r};return c}function ve(){}var ge=Object.create(null);function be(e){if(void 0===ge[e]){const t=B(e);if(!t)return;const n=he(t),r={config:t,redundancy:n};ge[e]=r}return ge[e]}function ye(e,t,n){let r,o;if("string"===typeof e){const t=z(e);if(!t)return n(void 0,424),ve;o=t.send;const i=be(e);i&&(r=i.redundancy)}else{const t=N(e);if(t){r=he(t);const n=e.resources?e.resources[0]:"",i=z(n);i&&(o=i.send)}}return r&&o?r.query(t,o,n)().abort:(n(void 0,424),ve)}var me={};function we(){}var xe=Object.create(null),je=Object.create(null),ke=Object.create(null),Ee=Object.create(null);function Ie(e,t){void 0===ke[e]&&(ke[e]=Object.create(null));const n=ke[e];n[t]||(n[t]=!0,setTimeout(()=>{n[t]=!1,se(e,t)}))}var Oe=Object.create(null);function Ae(e,t,n){function r(){const n=(""===e?"":"@"+e+":")+t,r=Math.floor(Date.now()/6e4);Oe[n]<r&&(Oe[n]=r,console.error('Unable to retrieve icons for "'+n+'" because API is not configured properly.'))}void 0===je[e]&&(je[e]=Object.create(null));const o=je[e];void 0===Ee[e]&&(Ee[e]=Object.create(null));const i=Ee[e];void 0===xe[e]&&(xe[e]=Object.create(null));const c=xe[e];void 0===o[t]?o[t]=n:o[t]=o[t].concat(n).sort(),i[t]||(i[t]=!0,setTimeout(()=>{i[t]=!1;const n=o[t];delete o[t];const s=z(e);if(!s)return void r();const a=s.prepare(e,t,n);a.forEach(n=>{ye(e,n,(r,o)=>{const i=y(e,t);if("object"!==typeof r){if(404!==o)return;const e=Date.now();n.icons.forEach(t=>{i.missing[t]=e})}else try{const n=m(i,r);if(!n.length)return;const o=c[t];n.forEach(e=>{delete o[e]}),me.store&&me.store(e,r)}catch(s){console.error(s)}Ie(e,t)})})}))}var $e=(e,t)=>{const n=fe(e,!0,k()),r=re(n);if(!r.pending.length){let e=!0;return t&&setTimeout(()=>{e&&t(r.loaded,r.missing,r.pending,we)}),()=>{e=!1}}const o=Object.create(null),i=[];let c,s;r.pending.forEach(e=>{const t=e.provider,n=e.prefix;if(n===s&&t===c)return;c=t,s=n,i.push({provider:t,prefix:n}),void 0===xe[t]&&(xe[t]=Object.create(null));const r=xe[t];void 0===r[n]&&(r[n]=Object.create(null)),void 0===o[t]&&(o[t]=Object.create(null));const a=o[t];void 0===a[n]&&(a[n]=[])});const a=Date.now();return r.pending.forEach(e=>{const t=e.provider,n=e.prefix,r=e.name,i=xe[t][n];void 0===i[r]&&(i[r]=a,o[t][n].push(r))}),i.forEach(e=>{const t=e.provider,n=e.prefix;o[t][n].length&&Ae(t,n,o[t][n])}),t?le(t,r,i):we},Me="iconify2",Fe="iconify",Te=Fe+"-count",Le=Fe+"-version",Ce=36e5,_e=168,Se={local:!0,session:!0},Re=!1,Ue={local:0,session:0},De={local:[],session:[]},Pe="undefined"===typeof window?{}:window;function ze(e){const t=e+"Storage";try{if(Pe&&Pe[t]&&"number"===typeof Pe[t].length)return Pe[t]}catch(n){}return Se[e]=!1,null}function Ne(e,t,n){try{return e.setItem(Te,n+""),Ue[t]=n,!0}catch(r){return!1}}function qe(e){const t=e.getItem(Te);if(t){const e=parseInt(t);return e||0}return 0}function Je(e,t){try{e.setItem(Le,Me)}catch(n){}Ne(e,t,0)}function He(e){try{const t=qe(e);for(let n=0;n<t;n++)e.removeItem(Fe+n)}catch(t){}}var Ye=()=>{if(Re)return;Re=!0;const e=Math.floor(Date.now()/Ce)-_e;function t(t){const n=ze(t);if(!n)return;const r=t=>{const r=Fe+t,o=n.getItem(r);if("string"!==typeof o)return!1;let i=!0;try{const t=JSON.parse(o);if("object"!==typeof t||"number"!==typeof t.cached||t.cached<e||"string"!==typeof t.provider||"object"!==typeof t.data||"string"!==typeof t.data.prefix)i=!1;else{const e=t.provider,n=t.data.prefix,r=y(e,n);i=m(r,t.data).length>0}}catch(c){i=!1}return i||n.removeItem(r),i};try{const e=n.getItem(Le);if(e!==Me)return e&&He(n),void Je(n,t);let o=qe(n);for(let n=o-1;n>=0;n--)r(n)||(n===o-1?o--:De[t].push(n));Ne(n,t,o)}catch(o){}}for(const n in Se)t(n)},Be=(e,t)=>{function n(n){if(!Se[n])return!1;const r=ze(n);if(!r)return!1;let o=De[n].shift();if(void 0===o&&(o=Ue[n],!Ne(r,n,o+1)))return!1;try{const n={cached:Math.floor(Date.now()/Ce),provider:e,data:t};r.setItem(Fe+o,JSON.stringify(n))}catch(i){return!1}return!0}Re||Ye(),n("local")||n("session")};var Qe=/[\s,]+/;function Ge(e,t){t.split(Qe).forEach(t=>{const n=t.trim();switch(n){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function Ke(e,t){t.split(Qe).forEach(t=>{const n=t.trim();switch(n){case"left":case"center":case"right":e.hAlign=n;break;case"top":case"middle":case"bottom":e.vAlign=n;break;case"slice":case"crop":e.slice=!0;break;case"meet":e.slice=!1}})}function Ve(e,t=0){const n=e.replace(/^-?[0-9.]*/,"");function r(e){while(e<0)e+=4;return e%4}if(""===n){const t=parseInt(e);return isNaN(t)?0:r(t)}if(n!==e){let t=0;switch(n){case"%":t=25;break;case"deg":t=90}if(t){let o=parseFloat(e.slice(0,e.length-n.length));return isNaN(o)?0:(o/=t,o%1===0?r(o):0)}}return t}const We={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"};let Xe={};["horizontal","vertical"].forEach(e=>{["Align","Flip"].forEach(t=>{const n=e.slice(0,1)+t,r={attr:n,boolean:"Flip"===t};Xe[e+"-"+t.toLowerCase()]=r,Xe[e.slice(0,1)+"-"+t.toLowerCase()]=r,Xe[e+t]=r})});const Ze=(e,t,n,r)=>{const o=$(A,t),i={...We},c={};for(let u in t){const e=t[u];if(void 0!==e)switch(u){case"icon":case"style":case"onLoad":break;case"inline":case"hFlip":case"vFlip":o[u]=!0===e||"true"===e||1===e;break;case"flip":"string"===typeof e&&Ge(o,e);break;case"align":"string"===typeof e&&Ke(o,e);break;case"color":c.color=e;break;case"rotate":"string"===typeof e?o[u]=Ve(e):"number"===typeof e&&(o[u]=e);break;case"ariaHidden":case"aria-hidden":!0!==e&&"true"!==e&&delete i["aria-hidden"];break;default:void 0!==Xe[u]?!Xe[u].boolean||!0!==e&&"true"!==e&&1!==e?Xe[u].boolean||"string"!==typeof e||""===e||(o[Xe[u].attr]=e):o[Xe[u].attr]=!0:void 0===A[u]&&(i[u]=e)}}const s=C(r,o);for(let u in s.attributes)i[u]=s.attributes[u];s.inline&&(c.verticalAlign="-0.125em");let a=0;const l=t.id,f={attrs:i,domProps:{innerHTML:U(s.body,l?()=>l+"-"+a++:"iconify-vue-")}};return Object.keys(c).length>0&&(f.style=c),n&&(["on","ref"].forEach(e=>{void 0!==n[e]&&(f[e]=n[e])}),["staticClass","class"].forEach(e=>{void 0!==n[e]&&(f.class=n[e])})),e("svg",f)};if(k(!0),P("",ne),"undefined"!==typeof document&&"undefined"!==typeof window){me.store=Be,Ye();const e=window;if(void 0!==e.IconifyPreload){const t=e.IconifyPreload,n="Invalid IconifyPreload syntax.";"object"===typeof t&&null!==t&&(t instanceof Array?t:[t]).forEach(e=>{try{("object"!==typeof e||null===e||e instanceof Array||"object"!==typeof e.icons||"string"!==typeof e.prefix||!O(e))&&console.error(n)}catch(t){console.error(n)}})}if(void 0!==e.IconifyProviders){const t=e.IconifyProviders;if("object"===typeof t&&null!==t)for(let e in t){const n="IconifyProviders["+e+"] is invalid.";try{const r=t[e];if("object"!==typeof r||!r||void 0===r.resources)continue;Y(e,r)||console.error(n)}catch(tt){console.error(n)}}}}const et=r["a"].extend({inheritAttrs:!1,data(){return{mounted:!1}},beforeMount(){this._name="",this._loadingIcon=null,this.mounted=!0},beforeDestroy(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(e,t){if("object"===typeof e&&null!==e&&"string"===typeof e.body)return this._name="",this.abortLoading(),{data:c(e)};let n;if("string"!==typeof e||null===(n=s(e,!1,!0)))return this.abortLoading(),null;const r=E(n);if(null===r)return this._loadingIcon&&this._loadingIcon.name===e||(this.abortLoading(),this._name="",this._loadingIcon={name:e,abort:$e([n],()=>{this.$forceUpdate()})}),null;this.abortLoading(),this._name!==e&&(this._name=e,t&&t(e));const o=["iconify"];return""!==n.prefix&&o.push("iconify--"+n.prefix),""!==n.provider&&o.push("iconify--"+n.provider),{data:r,classes:o}}},render(e){function t(t){if(t.default){const n=t.default;if(n instanceof Array&&n.length>0)return 1===n.length?n[0]:e("span",n)}return null}if(!this.mounted)return t(this.$slots);const n=this.$attrs,r=this.getIcon(n.icon,n.onLoad);if(!r)return t(this.$slots);let o=this.$data;return r.classes&&(o={...o,class:("string"===typeof o["class"]?o["class"]+" ":"")+r.classes.join(" ")}),Ze(e,n,o,r.data)}})}).call(this,n("c8ba"))}}]);
//# sourceMappingURL=chunk-2d0d3fbe.51ab7f47.js.map