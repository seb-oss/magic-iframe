var __extends=this&&this.__extends||function(){var e=function(r,t){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)if(r.hasOwnProperty(t))e[t]=r[t]};return e(r,t)};return function(r,t){e(r,t);function n(){this.constructor=r}r.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,r,t,n){function a(e){return e instanceof t?e:new t((function(r){r(e)}))}return new(t||(t=Promise))((function(t,i){function s(e){try{o(n.next(e))}catch(r){i(r)}}function l(e){try{o(n["throw"](e))}catch(r){i(r)}}function o(e){e.done?t(e.value):a(e.value).then(s,l)}o((n=n.apply(e,r||[])).next())}))};var __generator=this&&this.__generator||function(e,r){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,s;return s={next:l(0),throw:l(1),return:l(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function l(e){return function(r){return o([e,r])}}function o(s){if(n)throw new TypeError("Generator is already executing.");while(t)try{if(n=1,a&&(i=s[0]&2?a["return"]:s[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,s[1])).done)return i;if(a=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:t.label++;return{value:s[1],done:false};case 5:t.label++;a=s[1];s=[0];continue;case 7:s=t.ops.pop();t.trys.pop();continue;default:if(!(i=t.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){t=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){t.label=s[1];break}if(s[0]===6&&t.label<i[1]){t.label=i[1];i=s;break}if(i&&t.label<i[2]){t.label=i[2];t.ops.push(s);break}if(i[2])t.ops.pop();t.trys.pop();continue}s=r.call(e,t)}catch(l){s=[6,l];a=0}finally{n=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,r=0,t=arguments.length;r<t;r++)e+=arguments[r].length;for(var n=Array(e),a=0,r=0;r<t;r++)for(var i=arguments[r],s=0,l=i.length;s<l;s++,a++)n[a]=i[s];return n};System.register([],(function(e,r){"use strict";return{execute:function(){var t=this;var n="magic-iframe";var a;var i;var s=false;var l=false;var o=false;var f=false;var $=0;var u=false;var c=typeof window!=="undefined"?window:{};var v=c.CSS;var d=c.document||{head:{}};var h={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,r,t,n){return e.addEventListener(r,t,n)},rel:function(e,r,t,n){return e.removeEventListener(r,t,n)}};var m=function(e){return Promise.resolve(e)};var p=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var g="{visibility:hidden}.hydrated{visibility:inherit}";var y=function(e,r){if(r===void 0){r=""}{return function(){return}}};var b=function(e,r){{return function(){return}}};var w=new WeakMap;var N=function(e,r,t){var n=Te.get(e);if(p&&t){n=n||new CSSStyleSheet;n.replace(r)}else{n=r}Te.set(e,n)};var R=function(e,r,t,n){var a=_(r.$tagName$);var i=Te.get(a);e=e.nodeType===11?e:d;if(i){if(typeof i==="string"){e=e.head||e;var s=w.get(e);var l=void 0;if(!s){w.set(e,s=new Set)}if(!s.has(a)){{if(h.$cssShim$){l=h.$cssShim$.createHostStyle(n,a,i,!!(r.$flags$&10));var o=l["s-sc"];if(o){a=o;s=null}}else{l=d.createElement("style");l.innerHTML=i}e.insertBefore(l,e.querySelector("link"))}if(s){s.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[i])}}return a};var S=function(e){var r=e.$cmpMeta$;var t=e.$hostElement$;var n=y("attachStyles",r.$tagName$);var a=R(t.getRootNode(),r,e.$modeName$,t);n()};var _=function(e,r){return"sc-"+e};var x={};var C=function(e){e=typeof e;return e==="object"||e==="function"};var T=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var j=e("h",(function(e,r){var t=[];for(var n=2;n<arguments.length;n++){t[n-2]=arguments[n]}var a=null;var i=null;var s=false;var l=false;var o=[];var f=function(r){for(var t=0;t<r.length;t++){a=r[t];if(Array.isArray(a)){f(a)}else if(a!=null&&typeof a!=="boolean"){if(s=typeof e!=="function"&&!C(a)){a=String(a)}if(s&&l){o[o.length-1].$text$+=a}else{o.push(s?E(null,a):a)}l=s}}};f(t);if(r){if(r.name){i=r.name}{var $=r.className||r.class;if($){r.class=typeof $!=="object"?$:Object.keys($).filter((function(e){return $[e]})).join(" ")}}}var u=E(e,null);u.$attrs$=r;if(o.length>0){u.$children$=o}{u.$name$=i}return u}));var E=function(e,r){var t={$flags$:0,$tag$:e,$text$:r,$elm$:null,$children$:null};{t.$attrs$=null}{t.$name$=null}return t};var M=e("H",{});var A=function(e){return e&&e.$tag$===M};var k=function(e,r,t,n,a,i){if(t!==n){var s=Se(e,r);var l=r.toLowerCase();if(r==="class"){var o=e.classList;var f=U(t);var $=U(n);o.remove.apply(o,f.filter((function(e){return e&&!$.includes(e)})));o.add.apply(o,$.filter((function(e){return e&&!f.includes(e)})))}else if(r==="style"){{for(var u in t){if(!n||n[u]==null){if(u.includes("-")){e.style.removeProperty(u)}else{e.style[u]=""}}}}for(var u in n){if(!t||n[u]!==t[u]){if(u.includes("-")){e.style.setProperty(u,n[u])}else{e.style[u]=n[u]}}}}else if(r==="ref"){if(n){n(e)}}else if(!s&&r[0]==="o"&&r[1]==="n"){if(r[2]==="-"){r=r.slice(3)}else if(Se(c,l)){r=l.slice(2)}else{r=l[2]+r.slice(3)}if(t){h.rel(e,r,t,false)}if(n){h.ael(e,r,n,false)}}else{var v=C(n);if((s||v&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var d=n==null?"":n;if(r==="list"){s=false}else if(t==null||e[r]!=d){e[r]=d}}else{e[r]=n}}catch(m){}}if(n==null||n===false){{e.removeAttribute(r)}}else if((!s||i&4||a)&&!v){n=n===true?"":n;{e.setAttribute(r,n)}}}}};var P=/\s/;var U=function(e){return!e?[]:e.split(P)};var L=function(e,r,t,n){var a=r.$elm$.nodeType===11&&r.$elm$.host?r.$elm$.host:r.$elm$;var i=e&&e.$attrs$||x;var s=r.$attrs$||x;{for(n in i){if(!(n in s)){k(a,n,i[n],undefined,t,r.$flags$)}}}for(n in s){k(a,n,i[n],s[n],t,r.$flags$)}};var O=function(e,r,t,n){var l=r.$children$[t];var $=0;var u;var c;var v;if(!s){o=true;if(l.$tag$==="slot"){l.$flags$|=l.$children$?2:1}}if(l.$text$!==null){u=l.$elm$=d.createTextNode(l.$text$)}else if(l.$flags$&1){u=l.$elm$=d.createTextNode("")}else{u=l.$elm$=d.createElement(l.$flags$&2?"slot-fb":l.$tag$);{L(null,l,f)}if(l.$children$){for($=0;$<l.$children$.length;++$){c=O(e,l,$);if(c){u.appendChild(c)}}}}{u["s-hn"]=i;if(l.$flags$&(2|1)){u["s-sr"]=true;u["s-cr"]=a;u["s-sn"]=l.$name$||"";v=e&&e.$children$&&e.$children$[t];if(v&&v.$tag$===l.$tag$&&e.$elm$){B(e.$elm$,false)}}}return u};var B=function(e,r){h.$flags$|=1;var t=e.childNodes;for(var n=t.length-1;n>=0;n--){var a=t[n];if(a["s-hn"]!==i&&a["s-ol"]){F(a).insertBefore(a,V(a));a["s-ol"].remove();a["s-ol"]=undefined;o=true}if(r){B(a,r)}}h.$flags$&=~1};var I=function(e,r,t,n,a,i){var s=e["s-cr"]&&e["s-cr"].parentNode||e;var l;for(;a<=i;++a){if(n[a]){l=O(null,t,a);if(l){n[a].$elm$=l;s.insertBefore(l,V(r))}}}};var H=function(e,r,t,n,a){for(;r<=t;++r){if(n=e[r]){a=n.$elm$;K(n);{l=true;if(a["s-ol"]){a["s-ol"].remove()}else{B(a,true)}}a.remove()}}};var z=function(e,r,t,n){var a=0;var i=0;var s=r.length-1;var l=r[0];var o=r[s];var f=n.length-1;var $=n[0];var u=n[f];var c;while(a<=s&&i<=f){if(l==null){l=r[++a]}else if(o==null){o=r[--s]}else if($==null){$=n[++i]}else if(u==null){u=n[--f]}else if(q(l,$)){W(l,$);l=r[++a];$=n[++i]}else if(q(o,u)){W(o,u);o=r[--s];u=n[--f]}else if(q(l,u)){if(l.$tag$==="slot"||u.$tag$==="slot"){B(l.$elm$.parentNode,false)}W(l,u);e.insertBefore(l.$elm$,o.$elm$.nextSibling);l=r[++a];u=n[--f]}else if(q(o,$)){if(l.$tag$==="slot"||u.$tag$==="slot"){B(o.$elm$.parentNode,false)}W(o,$);e.insertBefore(o.$elm$,l.$elm$);o=r[--s];$=n[++i]}else{{c=O(r&&r[i],t,i);$=n[++i]}if(c){{F(l.$elm$).insertBefore(c,V(l.$elm$))}}}}if(a>s){I(e,n[f+1]==null?null:n[f+1].$elm$,t,n,i,f)}else if(i>f){H(r,a,s)}};var q=function(e,r){if(e.$tag$===r.$tag$){if(e.$tag$==="slot"){return e.$name$===r.$name$}return true}return false};var V=function(e){return e&&e["s-ol"]||e};var F=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var W=function(e,r){var t=r.$elm$=e.$elm$;var n=e.$children$;var a=r.$children$;var i=r.$tag$;var s=r.$text$;var l;if(s===null){{if(i==="slot");else{L(e,r,f)}}if(n!==null&&a!==null){z(t,n,r,a)}else if(a!==null){if(e.$text$!==null){t.textContent=""}I(t,null,r,a,0,a.length-1)}else if(n!==null){H(n,0,n.length-1)}}else if(l=t["s-cr"]){l.parentNode.textContent=s}else if(e.$text$!==s){t.data=s}};var D=function(e){var r=e.childNodes;var t;var n;var a;var i;var s;var l;for(n=0,a=r.length;n<a;n++){t=r[n];if(t.nodeType===1){if(t["s-sr"]){s=t["s-sn"];t.hidden=false;for(i=0;i<a;i++){if(r[i]["s-hn"]!==t["s-hn"]){l=r[i].nodeType;if(s!==""){if(l===1&&s===r[i].getAttribute("slot")){t.hidden=true;break}}else{if(l===1||l===3&&r[i].textContent.trim()!==""){t.hidden=true;break}}}}}D(t)}}};var G=[];var Q=function(e){var r;var t;var n;var a;var i;var s;var o=0;var f=e.childNodes;var $=f.length;for(;o<$;o++){r=f[o];if(r["s-sr"]&&(t=r["s-cr"])){n=t.parentNode.childNodes;a=r["s-sn"];for(s=n.length-1;s>=0;s--){t=n[s];if(!t["s-cn"]&&!t["s-nr"]&&t["s-hn"]!==r["s-hn"]){if(J(t,a)){i=G.find((function(e){return e.$nodeToRelocate$===t}));l=true;t["s-sn"]=t["s-sn"]||a;if(i){i.$slotRefNode$=r}else{G.push({$slotRefNode$:r,$nodeToRelocate$:t})}if(t["s-sr"]){G.map((function(e){if(J(e.$nodeToRelocate$,t["s-sn"])){i=G.find((function(e){return e.$nodeToRelocate$===t}));if(i&&!e.$slotRefNode$){e.$slotRefNode$=i.$slotRefNode$}}}))}}else if(!G.some((function(e){return e.$nodeToRelocate$===t}))){G.push({$nodeToRelocate$:t})}}}}if(r.nodeType===1){Q(r)}}};var J=function(e,r){if(e.nodeType===1){if(e.getAttribute("slot")===null&&r===""){return true}if(e.getAttribute("slot")===r){return true}return false}if(e["s-sn"]===r){return true}return r===""};var K=function(e){{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null);e.$children$&&e.$children$.map(K)}};var X=function(e,r){var t=e.$hostElement$;var n=e.$cmpMeta$;var f=e.$vnode$||E(null,null);var $=A(r)?r:j(null,null,r);i=t.tagName;$.$tag$=null;$.$flags$|=4;e.$vnode$=$;$.$elm$=f.$elm$=t;{a=t["s-cr"];s=(n.$flags$&1)!==0;l=false}W(f,$);{h.$flags$|=1;if(o){Q($.$elm$);var u=void 0;var c=void 0;var v=void 0;var m=void 0;var p=void 0;var g=void 0;var y=0;for(;y<G.length;y++){u=G[y];c=u.$nodeToRelocate$;if(!c["s-ol"]){v=d.createTextNode("");v["s-nr"]=c;c.parentNode.insertBefore(c["s-ol"]=v,c)}}for(y=0;y<G.length;y++){u=G[y];c=u.$nodeToRelocate$;if(u.$slotRefNode$){m=u.$slotRefNode$.parentNode;p=u.$slotRefNode$.nextSibling;v=c["s-ol"];while(v=v.previousSibling){g=v["s-nr"];if(g&&g["s-sn"]===c["s-sn"]&&m===g.parentNode){g=g.nextSibling;if(!g||!g["s-nr"]){p=g;break}}}if(!p&&m!==c.parentNode||c.nextSibling!==p){if(c!==p){if(!c["s-hn"]&&c["s-ol"]){c["s-hn"]=c["s-ol"].parentNode.nodeName}m.insertBefore(c,p)}}}else{if(c.nodeType===1){c.hidden=true}}}}if(l){D($.$elm$)}h.$flags$&=~1;G.length=0}};var Y=function(e){return we(e).$hostElement$};var Z=e("c",(function(e,r,t){var n=Y(e);return{emit:function(e){return ee(n,r,{bubbles:!!(t&4),composed:!!(t&2),cancelable:!!(t&1),detail:e})}}}));var ee=function(e,r,t){var n=new CustomEvent(r,t);e.dispatchEvent(n);return n};var re=function(e,r){if(r&&!e.$onRenderResolve$){r["s-p"].push(new Promise((function(r){return e.$onRenderResolve$=r})))}};var te=function(e,r){{e.$flags$|=16}if(e.$flags$&4){e.$flags$|=512;return}var t=y("scheduleUpdate",e.$cmpMeta$.$tagName$);var n=e.$ancestorComponent$;var a=e.$lazyInstance$;var i=function(){return ne(e,a,r)};re(e,n);var s;t();return fe(s,(function(){return Oe(i)}))};var ne=function(e,r,t){var n=e.$hostElement$;var a=y("update",e.$cmpMeta$.$tagName$);var i=n["s-rc"];if(t){S(e)}var s=y("render",e.$cmpMeta$.$tagName$);{{X(e,ae(r))}}if(h.$cssShim$){h.$cssShim$.updateHost(n)}{e.$flags$&=~16}{e.$flags$|=2}if(i){i.map((function(e){return e()}));n["s-rc"]=undefined}s();a();{var l=n["s-p"];var o=function(){return ie(e)};if(l.length===0){o()}else{Promise.all(l).then(o);e.$flags$|=4;l.length=0}}};var ae=function(e){try{e=e.render()}catch(r){_e(r)}return e};var ie=function(e){var r=e.$cmpMeta$.$tagName$;var t=e.$hostElement$;var n=y("postUpdate",r);var a=e.$ancestorComponent$;if(!(e.$flags$&64)){e.$flags$|=64;{$e(t)}n();{e.$onReadyResolve$(t);if(!a){le()}}}else{n()}{if(e.$onRenderResolve$){e.$onRenderResolve$();e.$onRenderResolve$=undefined}if(e.$flags$&512){Le((function(){return te(e,false)}))}e.$flags$&=~(4|512)}};var se=function(e){{var r=we(e);var t=r.$hostElement$.isConnected;if(t&&(r.$flags$&(2|16))===2){te(r,false)}return t}};var le=function(e){{$e(d.documentElement)}{h.$flags$|=2}Le((function(){return ee(c,"appload",{detail:{namespace:n}})}))};var oe=function(e,r,t){if(e&&e[r]){try{return e[r](t)}catch(n){_e(n)}}return undefined};var fe=function(e,r){return e&&e.then?e.then(r):r()};var $e=function(e){return e.classList.add("hydrated")};var ue=function(e,r){if(e!=null&&!C(e)){if(r&4){return e==="false"?false:e===""||!!e}if(r&2){return parseFloat(e)}if(r&1){return String(e)}return e}return e};var ce=function(e,r){return we(e).$instanceValues$.get(r)};var ve=function(e,r,t,n){var a=we(e);var i=a.$instanceValues$.get(r);var s=a.$flags$;var l=a.$lazyInstance$;t=ue(t,n.$members$[r][0]);if((!(s&8)||i===undefined)&&t!==i){a.$instanceValues$.set(r,t);if(l){if(n.$watchers$&&s&128){var o=n.$watchers$[r];if(o){o.map((function(e){try{l[e](t,i,r)}catch(n){_e(n)}}))}}if((s&(2|16))===2){te(a,false)}}}};var de=function(e,r,t){if(r.$members$){if(e.watchers){r.$watchers$=e.watchers}var n=Object.entries(r.$members$);var a=e.prototype;n.map((function(e){var n=e[0],i=e[1][0];if(i&31||t&2&&i&32){Object.defineProperty(a,n,{get:function(){return ce(this,n)},set:function(e){ve(this,n,e,r)},configurable:true,enumerable:true})}}));if(t&1){var i=new Map;a.attributeChangedCallback=function(e,r,t){var n=this;h.jmp((function(){var r=i.get(e);n[r]=t===null&&typeof n[r]==="boolean"?false:t}))};e.observedAttributes=n.filter((function(e){var r=e[0],t=e[1];return t[0]&15})).map((function(e){var r=e[0],t=e[1];var n=t[1]||r;i.set(n,r);return n}))}}return e};var he=function(e,r,n,a,i){return __awaiter(t,void 0,void 0,(function(){var e,t,a,s,l,o,f;return __generator(this,(function($){switch($.label){case 0:if(!((r.$flags$&32)===0))return[3,3];r.$flags$|=32;i=Ce(n);if(!i.then)return[3,2];e=b();return[4,i];case 1:i=$.sent();e();$.label=2;case 2:if(!i.isProxied){{n.$watchers$=i.watchers}de(i,n,2);i.isProxied=true}t=y("createInstance",n.$tagName$);{r.$flags$|=8}try{new i(r)}catch(u){_e(u)}{r.$flags$&=~8}{r.$flags$|=128}t();a=_(n.$tagName$);if(!Te.has(a)&&i.style){s=y("registerStyles",n.$tagName$);l=i.style;N(a,l,!!(n.$flags$&1));s()}$.label=3;case 3:o=r.$ancestorComponent$;f=function(){return te(r,true)};if(o&&o["s-rc"]){o["s-rc"].push(f)}else{f()}return[2]}}))}))};var me=function(e){if((h.$flags$&1)===0){var r=we(e);var t=r.$cmpMeta$;var n=y("connectedCallback",t.$tagName$);if(!(r.$flags$&1)){r.$flags$|=1;{if(t.$flags$&(4|8)){pe(e)}}{var a=e;while(a=a.parentNode||a.host){if(a["s-p"]){re(r,r.$ancestorComponent$=a);break}}}if(t.$members$){Object.entries(t.$members$).map((function(r){var t=r[0],n=r[1][0];if(n&31&&e.hasOwnProperty(t)){var a=e[t];delete e[t];e[t]=a}}))}{Le((function(){return he(e,r,t)}))}}n()}};var pe=function(e){var r=e["s-cr"]=d.createComment("");r["s-cn"]=true;e.insertBefore(r,e.firstChild)};var ge=function(e){if((h.$flags$&1)===0){var r=we(e);var t=r.$lazyInstance$;if(h.$cssShim$){h.$cssShim$.removeHost(e)}{oe(t,"componentDidUnload")}}};var ye=e("b",(function(e,r){if(r===void 0){r={}}var t=y();var n=[];var a=r.exclude||[];var i=c.customElements;var s=d.head;var l=s.querySelector("meta[charset]");var o=d.createElement("style");var f=[];var $;var u=true;Object.assign(h,r);h.$resourcesUrl$=new URL(r.resourcesUrl||"./",d.baseURI).href;{if(r.syncQueue){h.$flags$|=4}}e.map((function(e){return e[1].map((function(r){var t={$flags$:r[0],$tagName$:r[1],$members$:r[2],$listeners$:r[3]};{t.$members$=r[2]}{t.$watchers$={}}var s=t.$tagName$;var l=function(e){__extends(r,e);function r(r){var n=e.call(this,r)||this;r=n;Re(r,t);return n}r.prototype.connectedCallback=function(){var e=this;if($){clearTimeout($);$=null}if(u){f.push(this)}else{h.jmp((function(){return me(e)}))}};r.prototype.disconnectedCallback=function(){var e=this;h.jmp((function(){return ge(e)}))};r.prototype.forceUpdate=function(){se(this)};r.prototype.componentOnReady=function(){return we(this).$onReadyPromise$};return r}(HTMLElement);t.$lazyBundleIds$=e[0];if(!a.includes(s)&&!i.get(s)){n.push(s);i.define(s,de(l,t,1))}}))}));{o.innerHTML=n+g;o.setAttribute("data-styles","");s.insertBefore(o,l?l.nextSibling:s.firstChild)}u=false;if(f.length){f.map((function(e){return e.connectedCallback()}))}else{{h.jmp((function(){return $=setTimeout(le,30)}))}}t()}));var be=new WeakMap;var we=function(e){return be.get(e)};var Ne=e("r",(function(e,r){return be.set(r.$lazyInstance$=e,r)}));var Re=function(e,r){var t={$flags$:0,$hostElement$:e,$cmpMeta$:r,$instanceValues$:new Map};{t.$onReadyPromise$=new Promise((function(e){return t.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}return be.set(e,t)};var Se=function(e,r){return r in e};var _e=function(e){return console.error(e)};var xe=new Map;var Ce=function(e,t,n){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleIds$;var s=xe.get(i);if(s){return s[a]}return r.import("./"+i+".entry.js"+"").then((function(e){{xe.set(i,e)}return e[a]}),_e)};var Te=new Map;var je=[];var Ee=[];var Me=[];var Ae=function(e,r){return function(t){e.push(t);if(!u){u=true;if(r&&h.$flags$&4){Le(Ue)}else{h.raf(Ue)}}}};var ke=function(e){for(var r=0;r<e.length;r++){try{e[r](performance.now())}catch(t){_e(t)}}e.length=0};var Pe=function(e,r){var t=0;var n=0;while(t<e.length&&(n=performance.now())<r){try{e[t++](n)}catch(a){_e(a)}}if(t===e.length){e.length=0}else if(t!==0){e.splice(0,t)}};var Ue=function(){{$++}ke(je);{var e=(h.$flags$&6)===2?performance.now()+14*Math.ceil($*(1/10)):Infinity;Pe(Ee,e);Pe(Me,e);if(Ee.length>0){Me.push.apply(Me,Ee);Ee.length=0}if(u=je.length+Ee.length+Me.length>0){h.raf(Ue)}else{$=0}}};var Le=function(e){return m().then(e)};var Oe=Ae(Ee,true);var Be=e("a",(function(){if(!(v&&v.supports&&v.supports("color","var(--c)"))){return r.import("./p-0a076484.system.js").then((function(){if(h.$cssShim$=c.__cssshim){return h.$cssShim$.i()}else{return 0}}))}return m()}));var Ie=e("p",(function(){{h.$cssShim$=c.__cssshim}var e=Array.from(d.querySelectorAll("script")).find((function(e){return new RegExp("/"+n+"(\\.esm)?\\.js($|\\?|#)").test(e.src)||e.getAttribute("data-stencil-namespace")===n}));var t=e["data-opts"]||{};if("onbeforeload"in e&&!history.scrollRestoration){return{then:function(){}}}{t.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,c.location.href)).href;{He(t.resourcesUrl,e)}if(!c.customElements){return r.import("./p-dd4a472f.system.js").then((function(){return t}))}}return m(t)}));var He=function(e,r){var t=T(n);try{c[t]=new Function("w","return import(w);//"+Math.random())}catch(i){var a=new Map;c[t]=function(n){var i=new URL(n,e).href;var s=a.get(i);if(!s){var l=d.createElement("script");l.type="module";l.crossOrigin=r.crossOrigin;l.src=URL.createObjectURL(new Blob(["import * as m from '"+i+"'; window."+t+".m = m;"],{type:"application/javascript"}));s=new Promise((function(e){l.onload=function(){e(c[t].m);l.remove()}}));a.set(i,s);d.head.appendChild(l)}return s}}}}}}));