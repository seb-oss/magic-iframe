var __extends=this&&this.__extends||function(){var e=function(r,t){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)if(Object.prototype.hasOwnProperty.call(r,t))e[t]=r[t]};return e(r,t)};return function(r,t){e(r,t);function n(){this.constructor=r}r.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,r,t,n){function a(e){return e instanceof t?e:new t((function(r){r(e)}))}return new(t||(t=Promise))((function(t,i){function l(e){try{o(n.next(e))}catch(r){i(r)}}function s(e){try{o(n["throw"](e))}catch(r){i(r)}}function o(e){e.done?t(e.value):a(e.value).then(l,s)}o((n=n.apply(e,r||[])).next())}))};var __generator=this&&this.__generator||function(e,r){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,l;return l={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(l[Symbol.iterator]=function(){return this}),l;function s(e){return function(r){return o([e,r])}}function o(l){if(n)throw new TypeError("Generator is already executing.");while(t)try{if(n=1,a&&(i=l[0]&2?a["return"]:l[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,l[1])).done)return i;if(a=0,i)l=[l[0]&2,i.value];switch(l[0]){case 0:case 1:i=l;break;case 4:t.label++;return{value:l[1],done:false};case 5:t.label++;a=l[1];l=[0];continue;case 7:l=t.ops.pop();t.trys.pop();continue;default:if(!(i=t.trys,i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){t.label=l[1];break}if(l[0]===6&&t.label<i[1]){t.label=i[1];i=l;break}if(i&&t.label<i[2]){t.label=i[2];t.ops.push(l);break}if(i[2])t.ops.pop();t.trys.pop();continue}l=r.call(e,t)}catch(s){l=[6,s];a=0}finally{n=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,r=0,t=arguments.length;r<t;r++)e+=arguments[r].length;for(var n=Array(e),a=0,r=0;r<t;r++)for(var i=arguments[r],l=0,s=i.length;l<s;l++,a++)n[a]=i[l];return n};System.register([],(function(e,r){"use strict";return{execute:function(){var t=this;var n=e("N","magic-iframe");var a;var i;var l=false;var s=false;var o=false;var f=false;var $=false;var u=e("w",typeof window!=="undefined"?window:{});var c=e("C",u.CSS);var v=e("d",u.document||{head:{}});var d=e("p",{$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,r,t,n){return e.addEventListener(r,t,n)},rel:function(e,r,t,n){return e.removeEventListener(r,t,n)},ce:function(e,r){return new CustomEvent(e,r)}});var h=e("a",(function(e){return Promise.resolve(e)}));var m=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var p="{visibility:hidden}.hydrated{visibility:inherit}";var g=function(e,r){if(r===void 0){r=""}{return function(){return}}};var y=function(e,r){{return function(){return}}};var b=new WeakMap;var w=function(e,r,t){var n=xe.get(e);if(m&&t){n=n||new CSSStyleSheet;n.replace(r)}else{n=r}xe.set(e,n)};var N=function(e,r,t,n){var a=_(r);var i=xe.get(a);e=e.nodeType===11?e:v;if(i){if(typeof i==="string"){e=e.head||e;var l=b.get(e);var s=void 0;if(!l){b.set(e,l=new Set)}if(!l.has(a)){{if(d.$cssShim$){s=d.$cssShim$.createHostStyle(n,a,i,!!(r.$flags$&10));var o=s["s-sc"];if(o){a=o;l=null}}else{s=v.createElement("style");s.innerHTML=i}e.insertBefore(s,e.querySelector("link"))}if(l){l.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[i])}}return a};var S=function(e){var r=e.$cmpMeta$;var t=e.$hostElement$;var n=g("attachStyles",r.$tagName$);var a=N(t.getRootNode(),r,e.$modeName$,t);n()};var _=function(e,r){return"sc-"+e.$tagName$};var R={};var x=function(e){e=typeof e;return e==="object"||e==="function"};var C=e("h",(function(e,r){var t=[];for(var n=2;n<arguments.length;n++){t[n-2]=arguments[n]}var a=null;var i=null;var l=false;var s=false;var o=[];var f=function(r){for(var t=0;t<r.length;t++){a=r[t];if(Array.isArray(a)){f(a)}else if(a!=null&&typeof a!=="boolean"){if(l=typeof e!=="function"&&!x(a)){a=String(a)}if(l&&s){o[o.length-1].$text$+=a}else{o.push(l?T(null,a):a)}s=l}}};f(t);if(r){if(r.name){i=r.name}{var $=r.className||r.class;if($){r.class=typeof $!=="object"?$:Object.keys($).filter((function(e){return $[e]})).join(" ")}}}var u=T(e,null);u.$attrs$=r;if(o.length>0){u.$children$=o}{u.$name$=i}return u}));var T=function(e,r){var t={$flags$:0,$tag$:e,$text$:r,$elm$:null,$children$:null};{t.$attrs$=null}{t.$name$=null}return t};var k=e("H",{});var j=function(e){return e&&e.$tag$===k};var E=function(e,r,t,n,a,i){if(t!==n){var l=Ne(e,r);var s=r.toLowerCase();if(r==="class"){var o=e.classList;var f=A(t);var $=A(n);o.remove.apply(o,f.filter((function(e){return e&&!$.includes(e)})));o.add.apply(o,$.filter((function(e){return e&&!f.includes(e)})))}else if(r==="style"){{for(var c in t){if(!n||n[c]==null){if(c.includes("-")){e.style.removeProperty(c)}else{e.style[c]=""}}}}for(var c in n){if(!t||n[c]!==t[c]){if(c.includes("-")){e.style.setProperty(c,n[c])}else{e.style[c]=n[c]}}}}else if(r==="ref"){if(n){n(e)}}else if(!l&&r[0]==="o"&&r[1]==="n"){if(r[2]==="-"){r=r.slice(3)}else if(Ne(u,s)){r=s.slice(2)}else{r=s[2]+r.slice(3)}if(t){d.rel(e,r,t,false)}if(n){d.ael(e,r,n,false)}}else{var v=x(n);if((l||v&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var h=n==null?"":n;if(r==="list"){l=false}else if(t==null||e[r]!=h){e[r]=h}}else{e[r]=n}}catch(m){}}if(n==null||n===false){if(n!==false||e.getAttribute(r)===""){{e.removeAttribute(r)}}}else if((!l||i&4||a)&&!v){n=n===true?"":n;{e.setAttribute(r,n)}}}}};var M=/\s/;var A=function(e){return!e?[]:e.split(M)};var P=function(e,r,t,n){var a=r.$elm$.nodeType===11&&r.$elm$.host?r.$elm$.host:r.$elm$;var i=e&&e.$attrs$||R;var l=r.$attrs$||R;{for(n in i){if(!(n in l)){E(a,n,i[n],undefined,t,r.$flags$)}}}for(n in l){E(a,n,i[n],l[n],t,r.$flags$)}};var B=function(e,r,t,n){var s=r.$children$[t];var $=0;var u;var c;var d;if(!l){o=true;if(s.$tag$==="slot"){s.$flags$|=s.$children$?2:1}}if(s.$text$!==null){u=s.$elm$=v.createTextNode(s.$text$)}else if(s.$flags$&1){u=s.$elm$=v.createTextNode("")}else{u=s.$elm$=v.createElement(s.$flags$&2?"slot-fb":s.$tag$);{P(null,s,f)}if(s.$children$){for($=0;$<s.$children$.length;++$){c=B(e,s,$);if(c){u.appendChild(c)}}}}{u["s-hn"]=i;if(s.$flags$&(2|1)){u["s-sr"]=true;u["s-cr"]=a;u["s-sn"]=s.$name$||"";d=e&&e.$children$&&e.$children$[t];if(d&&d.$tag$===s.$tag$&&e.$elm$){O(e.$elm$,false)}}}return u};var O=function(e,r){d.$flags$|=1;var t=e.childNodes;for(var n=t.length-1;n>=0;n--){var a=t[n];if(a["s-hn"]!==i&&a["s-ol"]){V(a).insertBefore(a,z(a));a["s-ol"].remove();a["s-ol"]=undefined;o=true}if(r){O(a,r)}}d.$flags$&=~1};var L=function(e,r,t,n,a,i){var l=e["s-cr"]&&e["s-cr"].parentNode||e;var s;for(;a<=i;++a){if(n[a]){s=B(null,t,a);if(s){n[a].$elm$=s;l.insertBefore(s,z(r))}}}};var I=function(e,r,t,n,a){for(;r<=t;++r){if(n=e[r]){a=n.$elm$;J(n);{s=true;if(a["s-ol"]){a["s-ol"].remove()}else{O(a,true)}}a.remove()}}};var H=function(e,r,t,n){var a=0;var i=0;var l=r.length-1;var s=r[0];var o=r[l];var f=n.length-1;var $=n[0];var u=n[f];var c;while(a<=l&&i<=f){if(s==null){s=r[++a]}else if(o==null){o=r[--l]}else if($==null){$=n[++i]}else if(u==null){u=n[--f]}else if(U(s,$)){q(s,$);s=r[++a];$=n[++i]}else if(U(o,u)){q(o,u);o=r[--l];u=n[--f]}else if(U(s,u)){if(s.$tag$==="slot"||u.$tag$==="slot"){O(s.$elm$.parentNode,false)}q(s,u);e.insertBefore(s.$elm$,o.$elm$.nextSibling);s=r[++a];u=n[--f]}else if(U(o,$)){if(s.$tag$==="slot"||u.$tag$==="slot"){O(o.$elm$.parentNode,false)}q(o,$);e.insertBefore(o.$elm$,s.$elm$);o=r[--l];$=n[++i]}else{{c=B(r&&r[i],t,i);$=n[++i]}if(c){{V(s.$elm$).insertBefore(c,z(s.$elm$))}}}}if(a>l){L(e,n[f+1]==null?null:n[f+1].$elm$,t,n,i,f)}else if(i>f){I(r,a,l)}};var U=function(e,r){if(e.$tag$===r.$tag$){if(e.$tag$==="slot"){return e.$name$===r.$name$}return true}return false};var z=function(e){return e&&e["s-ol"]||e};var V=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var q=function(e,r){var t=r.$elm$=e.$elm$;var n=e.$children$;var a=r.$children$;var i=r.$tag$;var l=r.$text$;var s;if(l===null){{if(i==="slot");else{P(e,r,f)}}if(n!==null&&a!==null){H(t,n,r,a)}else if(a!==null){if(e.$text$!==null){t.textContent=""}L(t,null,r,a,0,a.length-1)}else if(n!==null){I(n,0,n.length-1)}}else if(s=t["s-cr"]){s.parentNode.textContent=l}else if(e.$text$!==l){t.data=l}};var F=function(e){var r=e.childNodes;var t;var n;var a;var i;var l;var s;for(n=0,a=r.length;n<a;n++){t=r[n];if(t.nodeType===1){if(t["s-sr"]){l=t["s-sn"];t.hidden=false;for(i=0;i<a;i++){if(r[i]["s-hn"]!==t["s-hn"]){s=r[i].nodeType;if(l!==""){if(s===1&&l===r[i].getAttribute("slot")){t.hidden=true;break}}else{if(s===1||s===3&&r[i].textContent.trim()!==""){t.hidden=true;break}}}}}F(t)}}};var W=[];var G=function(e){var r;var t;var n;var a;var i;var l;var o=0;var f=e.childNodes;var $=f.length;for(;o<$;o++){r=f[o];if(r["s-sr"]&&(t=r["s-cr"])){n=t.parentNode.childNodes;a=r["s-sn"];for(l=n.length-1;l>=0;l--){t=n[l];if(!t["s-cn"]&&!t["s-nr"]&&t["s-hn"]!==r["s-hn"]){if(D(t,a)){i=W.find((function(e){return e.$nodeToRelocate$===t}));s=true;t["s-sn"]=t["s-sn"]||a;if(i){i.$slotRefNode$=r}else{W.push({$slotRefNode$:r,$nodeToRelocate$:t})}if(t["s-sr"]){W.map((function(e){if(D(e.$nodeToRelocate$,t["s-sn"])){i=W.find((function(e){return e.$nodeToRelocate$===t}));if(i&&!e.$slotRefNode$){e.$slotRefNode$=i.$slotRefNode$}}}))}}else if(!W.some((function(e){return e.$nodeToRelocate$===t}))){W.push({$nodeToRelocate$:t})}}}}if(r.nodeType===1){G(r)}}};var D=function(e,r){if(e.nodeType===1){if(e.getAttribute("slot")===null&&r===""){return true}if(e.getAttribute("slot")===r){return true}return false}if(e["s-sn"]===r){return true}return r===""};var J=function(e){{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null);e.$children$&&e.$children$.map(J)}};var K=function(e,r){var t=e.$hostElement$;var n=e.$cmpMeta$;var f=e.$vnode$||T(null,null);var $=j(r)?r:C(null,null,r);i=t.tagName;$.$tag$=null;$.$flags$|=4;e.$vnode$=$;$.$elm$=f.$elm$=t;{a=t["s-cr"];l=(n.$flags$&1)!==0;s=false}q(f,$);{d.$flags$|=1;if(o){G($.$elm$);var u=void 0;var c=void 0;var h=void 0;var m=void 0;var p=void 0;var g=void 0;var y=0;for(;y<W.length;y++){u=W[y];c=u.$nodeToRelocate$;if(!c["s-ol"]){h=v.createTextNode("");h["s-nr"]=c;c.parentNode.insertBefore(c["s-ol"]=h,c)}}for(y=0;y<W.length;y++){u=W[y];c=u.$nodeToRelocate$;if(u.$slotRefNode$){m=u.$slotRefNode$.parentNode;p=u.$slotRefNode$.nextSibling;h=c["s-ol"];while(h=h.previousSibling){g=h["s-nr"];if(g&&g["s-sn"]===c["s-sn"]&&m===g.parentNode){g=g.nextSibling;if(!g||!g["s-nr"]){p=g;break}}}if(!p&&m!==c.parentNode||c.nextSibling!==p){if(c!==p){if(!c["s-hn"]&&c["s-ol"]){c["s-hn"]=c["s-ol"].parentNode.nodeName}m.insertBefore(c,p)}}}else{if(c.nodeType===1){c.hidden=true}}}}if(s){F($.$elm$)}d.$flags$&=~1;W.length=0}};var Q=function(e){return ye(e).$hostElement$};var X=e("c",(function(e,r,t){var n=Q(e);return{emit:function(e){return Y(n,r,{bubbles:!!(t&4),composed:!!(t&2),cancelable:!!(t&1),detail:e})}}}));var Y=function(e,r,t){var n=d.ce(r,t);e.dispatchEvent(n);return n};var Z=function(e,r){if(r&&!e.$onRenderResolve$&&r["s-p"]){r["s-p"].push(new Promise((function(r){return e.$onRenderResolve$=r})))}};var ee=function(e,r){{e.$flags$|=16}if(e.$flags$&4){e.$flags$|=512;return}Z(e,e.$ancestorComponent$);var t=function(){return re(e,r)};return Ae(t)};var re=function(e,r){var t=g("scheduleUpdate",e.$cmpMeta$.$tagName$);var n=e.$lazyInstance$;var a;t();return se(a,(function(){return te(e,n,r)}))};var te=function(e,r,n){return __awaiter(t,void 0,void 0,(function(){var t,a,i,l,s,o;return __generator(this,(function(f){t=e.$hostElement$;a=g("update",e.$cmpMeta$.$tagName$);i=t["s-rc"];if(n){S(e)}l=g("render",e.$cmpMeta$.$tagName$);{{{K(e,ne(e,r))}}}if(d.$cssShim$){d.$cssShim$.updateHost(t)}if(i){i.map((function(e){return e()}));t["s-rc"]=undefined}l();a();{s=t["s-p"];o=function(){return ae(e)};if(s.length===0){o()}else{Promise.all(s).then(o);e.$flags$|=4;s.length=0}}return[2]}))}))};var ne=function(e,r){try{r=r.render();{e.$flags$&=~16}{e.$flags$|=2}}catch(t){Se(t)}return r};var ae=function(e){var r=e.$cmpMeta$.$tagName$;var t=e.$hostElement$;var n=g("postUpdate",r);var a=e.$ancestorComponent$;if(!(e.$flags$&64)){e.$flags$|=64;{oe(t)}n();{e.$onReadyResolve$(t);if(!a){ie()}}}else{n()}{if(e.$onRenderResolve$){e.$onRenderResolve$();e.$onRenderResolve$=undefined}if(e.$flags$&512){Me((function(){return ee(e,false)}))}e.$flags$&=~(4|512)}};var ie=function(e){{oe(v.documentElement)}Me((function(){return Y(u,"appload",{detail:{namespace:n}})}))};var le=function(e,r,t){if(e&&e[r]){try{return e[r](t)}catch(n){Se(n)}}return undefined};var se=function(e,r){return e&&e.then?e.then(r):r()};var oe=function(e){return e.classList.add("hydrated")};var fe=function(e,r){if(e!=null&&!x(e)){if(r&4){return e==="false"?false:e===""||!!e}if(r&2){return parseFloat(e)}if(r&1){return String(e)}return e}return e};var $e=function(e,r){return ye(e).$instanceValues$.get(r)};var ue=function(e,r,t,n){var a=ye(e);var i=a.$instanceValues$.get(r);var l=a.$flags$;var s=a.$lazyInstance$;t=fe(t,n.$members$[r][0]);if((!(l&8)||i===undefined)&&t!==i){a.$instanceValues$.set(r,t);if(s){if(n.$watchers$&&l&128){var o=n.$watchers$[r];if(o){o.map((function(e){try{s[e](t,i,r)}catch(n){Se(n)}}))}}if((l&(2|16))===2){ee(a,false)}}}};var ce=function(e,r,t){if(r.$members$){if(e.watchers){r.$watchers$=e.watchers}var n=Object.entries(r.$members$);var a=e.prototype;n.map((function(e){var n=e[0],i=e[1][0];if(i&31||t&2&&i&32){Object.defineProperty(a,n,{get:function(){return $e(this,n)},set:function(e){ue(this,n,e,r)},configurable:true,enumerable:true})}}));if(t&1){var i=new Map;a.attributeChangedCallback=function(e,r,t){var n=this;d.jmp((function(){var r=i.get(e);n[r]=t===null&&typeof n[r]==="boolean"?false:t}))};e.observedAttributes=n.filter((function(e){var r=e[0],t=e[1];return t[0]&15})).map((function(e){var r=e[0],t=e[1];var n=t[1]||r;i.set(n,r);return n}))}}return e};var ve=function(e,r,n,a,i){return __awaiter(t,void 0,void 0,(function(){var e,t,a,l,s,o,f;return __generator(this,(function($){switch($.label){case 0:if(!((r.$flags$&32)===0))return[3,3];r.$flags$|=32;i=Re(n);if(!i.then)return[3,2];e=y();return[4,i];case 1:i=$.sent();e();$.label=2;case 2:if(!i.isProxied){{n.$watchers$=i.watchers}ce(i,n,2);i.isProxied=true}t=g("createInstance",n.$tagName$);{r.$flags$|=8}try{new i(r)}catch(u){Se(u)}{r.$flags$&=~8}{r.$flags$|=128}t();if(i.style){a=i.style;l=_(n);if(!xe.has(l)){s=g("registerStyles",n.$tagName$);w(l,a,!!(n.$flags$&1));s()}}$.label=3;case 3:o=r.$ancestorComponent$;f=function(){return ee(r,true)};if(o&&o["s-rc"]){o["s-rc"].push(f)}else{f()}return[2]}}))}))};var de=function(e){if((d.$flags$&1)===0){var r=ye(e);var t=r.$cmpMeta$;var n=g("connectedCallback",t.$tagName$);if(!(r.$flags$&1)){r.$flags$|=1;{if(t.$flags$&(4|8)){he(e)}}{var a=e;while(a=a.parentNode||a.host){if(a["s-p"]){Z(r,r.$ancestorComponent$=a);break}}}if(t.$members$){Object.entries(t.$members$).map((function(r){var t=r[0],n=r[1][0];if(n&31&&e.hasOwnProperty(t)){var a=e[t];delete e[t];e[t]=a}}))}{ve(e,r,t)}}n()}};var he=function(e){var r=e["s-cr"]=v.createComment("");r["s-cn"]=true;e.insertBefore(r,e.firstChild)};var me=function(e){if((d.$flags$&1)===0){var r=ye(e);var t=r.$lazyInstance$;if(d.$cssShim$){d.$cssShim$.removeHost(e)}{le(t,"disconnectedCallback")}}};var pe=e("b",(function(e,r){if(r===void 0){r={}}var t=g();var n=[];var a=r.exclude||[];var i=u.customElements;var l=v.head;var s=l.querySelector("meta[charset]");var o=v.createElement("style");var f=[];var $;var c=true;Object.assign(d,r);d.$resourcesUrl$=new URL(r.resourcesUrl||"./",v.baseURI).href;e.map((function(e){return e[1].map((function(r){var t={$flags$:r[0],$tagName$:r[1],$members$:r[2],$listeners$:r[3]};{t.$members$=r[2]}{t.$watchers$={}}var l=t.$tagName$;var s=function(e){__extends(r,e);function r(r){var n=e.call(this,r)||this;r=n;we(r,t);return n}r.prototype.connectedCallback=function(){var e=this;if($){clearTimeout($);$=null}if(c){f.push(this)}else{d.jmp((function(){return de(e)}))}};r.prototype.disconnectedCallback=function(){var e=this;d.jmp((function(){return me(e)}))};r.prototype.componentOnReady=function(){return ye(this).$onReadyPromise$};return r}(HTMLElement);t.$lazyBundleId$=e[0];if(!a.includes(l)&&!i.get(l)){n.push(l);i.define(l,ce(s,t,1))}}))}));{o.innerHTML=n+p;o.setAttribute("data-styles","");l.insertBefore(o,s?s.nextSibling:l.firstChild)}c=false;if(f.length){f.map((function(e){return e.connectedCallback()}))}else{{d.jmp((function(){return $=setTimeout(ie,30)}))}}t()}));var ge=new WeakMap;var ye=function(e){return ge.get(e)};var be=e("r",(function(e,r){return ge.set(r.$lazyInstance$=e,r)}));var we=function(e,r){var t={$flags$:0,$hostElement$:e,$cmpMeta$:r,$instanceValues$:new Map};{t.$onReadyPromise$=new Promise((function(e){return t.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}return ge.set(e,t)};var Ne=function(e,r){return r in e};var Se=function(e){return console.error(e)};var _e=new Map;var Re=function(e,t,n){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleId$;var l=_e.get(i);if(l){return l[a]}return r.import("./"+i+".entry.js"+"").then((function(e){{_e.set(i,e)}return e[a]}),Se)};var xe=new Map;var Ce=[];var Te=[];var ke=function(e,r){return function(t){e.push(t);if(!$){$=true;if(r&&d.$flags$&4){Me(Ee)}else{d.raf(Ee)}}}};var je=function(e){for(var r=0;r<e.length;r++){try{e[r](performance.now())}catch(t){Se(t)}}e.length=0};var Ee=function(){je(Ce);{je(Te);if($=Ce.length>0){d.raf(Ee)}}};var Me=function(e){return h().then(e)};var Ae=ke(Te,true)}}}));