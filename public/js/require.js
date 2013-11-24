var requirejs,require,define;!function(W){function D(e){return"[object Function]"===M.call(e)}function E(e){return"[object Array]"===M.call(e)}function t(e,t){if(e){var n;for(n=0;n<e.length&&(!e[n]||!t(e[n],n,e));n+=1);}}function N(e,t){if(e){var n;for(n=e.length-1;n>-1&&(!e[n]||!t(e[n],n,e));n-=1);}}function A(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n],n))break}function O(e,t,n,r){return t&&A(t,function(t,i){(n||!F.call(e,i))&&(r&&"string"!=typeof t?(e[i]||(e[i]={}),O(e[i],t,n,r)):e[i]=t)}),e}function r(e,t){return function(){return t.apply(e,arguments)}}function X(e){if(!e)return e;var n=W;return t(e.split("."),function(e){n=n[e]}),n}function G(e,t,n,r){return t=Error(t+"\nhttp://requirejs.org/docs/errors.html#"+e),t.requireType=e,t.requireModules=r,n&&(t.originalError=n),t}function ba(){return H&&"interactive"===H.readyState?H:(N(document.getElementsByTagName("script"),function(e){return"interactive"===e.readyState?H=e:void 0}),H)}var g,s,u,y,q,B,H,I,Y,Z,ca=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,da=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,$=/\.js$/,ea=/^\.\//;s=Object.prototype;var M=s.toString,F=s.hasOwnProperty,fa=Array.prototype.splice,v=!("undefined"==typeof window||!navigator||!document),aa=!v&&"undefined"!=typeof importScripts,ga=v&&"PLAYSTATION 3"===navigator.platform?/^complete$/:/^(complete|loaded)$/,R="undefined"!=typeof opera&&"[object Opera]"===opera.toString(),w={},n={},P=[],J=!1;if("undefined"==typeof define){if("undefined"!=typeof requirejs){if(D(requirejs))return;n=requirejs,requirejs=void 0}"undefined"!=typeof require&&!D(require)&&(n=require,require=void 0),g=requirejs=function(e,t,n,r){var i,a="_";return!E(e)&&"string"!=typeof e&&(i=e,E(t)?(e=t,t=n,n=r):e=[]),i&&i.context&&(a=i.context),(r=w[a])||(r=w[a]=g.s.newContext(a)),i&&r.configure(i),r.require(e,t,n)},g.config=function(e){return g(e)},g.nextTick="undefined"!=typeof setTimeout?function(e){setTimeout(e,4)}:function(e){e()},require||(require=g),g.version="2.1.1",g.jsExtRegExp=/^\/|:|\?|\.js$/,g.isBrowser=v,s=g.s={contexts:w,newContext:function(e){function n(e,t,n){var r,i,a,o,s,c,u,l=t&&t.split("/");r=l;var f=j.map,p=f&&f["*"];if(e&&"."===e.charAt(0))if(t){for(r=j.pkgs[t]?l=[t]:l.slice(0,l.length-1),t=e=r.concat(e.split("/")),r=0;t[r];r+=1)if(i=t[r],"."===i)t.splice(r,1),r-=1;else if(".."===i){if(1===r&&(".."===t[2]||".."===t[0]))break;r>0&&(t.splice(r-1,2),r-=2)}r=j.pkgs[t=e[0]],e=e.join("/"),r&&e===t+"/"+r.main&&(e=t)}else 0===e.indexOf("./")&&(e=e.substring(2));if(n&&(l||p)&&f){for(t=e.split("/"),r=t.length;r>0;r-=1){if(a=t.slice(0,r).join("/"),l)for(i=l.length;i>0;i-=1)if((n=f[l.slice(0,i).join("/")])&&(n=n[a])){o=n,s=r;break}if(o)break;!c&&p&&p[a]&&(c=p[a],u=r)}!o&&c&&(o=c,s=u),o&&(t.splice(0,s,o),e=t.join("/"))}return e}function i(e){v&&t(document.getElementsByTagName("script"),function(t){return t.getAttribute("data-requiremodule")===e&&t.getAttribute("data-requirecontext")===w.contextName?(t.parentNode.removeChild(t),!0):void 0})}function a(e){var t=j.paths[e];return t&&E(t)&&t.length>1?(i(e),t.shift(),w.require.undef(e),w.require([e]),!0):void 0}function o(e){var t,n=e?e.indexOf("!"):-1;return n>-1&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function s(e,t,r,i){var a,s,c=null,u=t?t.name:null,l=e,f=!0,p="";return e||(f=!1,e="_@r"+(L+=1)),e=o(e),c=e[0],e=e[1],c&&(c=n(c,u,i),s=C[c]),e&&(c?p=s&&s.normalize?s.normalize(e,function(e){return n(e,u,i)}):n(e,u,i):(p=n(e,u,i),e=o(p),c=e[0],p=e[1],r=!0,a=w.nameToUrl(p))),r=!c||s||r?"":"_unnormalized"+(N+=1),{prefix:c,name:p,parentMap:t,unnormalized:!!r,url:a,originalName:l,isDefine:f,id:(c?c+"!"+p:p)+r}}function c(e){var t=e.id,n=S[t];return n||(n=S[t]=new w.Module(e)),n}function u(e,t,n){var r=e.id,i=S[r];!F.call(C,r)||i&&!i.defineEmitComplete?c(e).on(t,n):"defined"===t&&n(C[r])}function l(e,n){var r=e.requireModules,i=!1;n?n(e):(t(r,function(t){(t=S[t])&&(t.error=e,t.events.error&&(i=!0,t.emit("error",e)))}),i||g.onError(e))}function f(){P.length&&(fa.apply(q,[q.length-1,0].concat(P)),P=[])}function p(e,n,r){var i=e.map.id;e.error?e.emit("error",e.error):(n[i]=!0,t(e.depMaps,function(t,i){var a=t.id,o=S[a];o&&!e.depMatched[i]&&!r[a]&&(n[a]?(e.defineDep(i,C[a]),e.check()):p(o,n,r))}),r[i]=!0)}function d(){var e,n,r,o,s=(r=1e3*j.waitSeconds)&&w.startTime+r<(new Date).getTime(),c=[],u=[],f=!1,h=!0;if(!b){if(b=!0,A(S,function(t){if(e=t.map,n=e.id,t.enabled&&(e.isDefine||u.push(t),!t.error))if(!t.inited&&s)a(n)?f=o=!0:(c.push(n),i(n));else if(!t.inited&&t.fetched&&e.isDefine&&(f=!0,!e.prefix))return h=!1}),s&&c.length)return r=G("timeout","Load timeout for modules: "+c,null,c),r.contextName=w.contextName,l(r);h&&t(u,function(e){p(e,{},{})}),s&&!o||!f||!v&&!aa||k||(k=setTimeout(function(){k=0,d()},50)),b=!1}}function h(e){c(s(e[0],null,!0)).init(e[1],e[2])}function m(e){var e=e.currentTarget||e.srcElement,t=w.onScriptLoad;return e.detachEvent&&!R?e.detachEvent("onreadystatechange",t):e.removeEventListener("load",t,!1),t=w.onScriptError,e.detachEvent&&!R||e.removeEventListener("error",t,!1),{node:e,id:e&&e.getAttribute("data-requiremodule")}}function y(){var e;for(f();q.length;){if(e=q.shift(),null===e[0])return l(G("mismatch","Mismatched anonymous define() module: "+e[e.length-1]));h(e)}}var b,x,w,_,k,j={waitSeconds:7,baseUrl:"./",paths:{},pkgs:{},shim:{},map:{},config:{}},S={},T={},q=[],C={},M={},L=1,N=1;return _={require:function(e){return e.require?e.require:e.require=w.makeRequire(e.map)},exports:function(e){return e.usingExports=!0,e.map.isDefine?e.exports?e.exports:e.exports=C[e.map.id]={}:void 0},module:function(e){return e.module?e.module:e.module={id:e.map.id,uri:e.map.url,config:function(){return j.config&&j.config[e.map.id]||{}},exports:C[e.map.id]}}},x=function(e){this.events=T[e.id]||{},this.map=e,this.shim=j.shim[e.id],this.depExports=[],this.depMaps=[],this.depMatched=[],this.pluginMaps={},this.depCount=0},x.prototype={init:function(e,t,n,i){i=i||{},this.inited||(this.factory=t,n?this.on("error",n):this.events.error&&(n=r(this,function(e){this.emit("error",e)})),this.depMaps=e&&e.slice(0),this.errback=n,this.inited=!0,this.ignore=i.ignore,i.enabled||this.enabled?this.enable():this.check())},defineDep:function(e,t){this.depMatched[e]||(this.depMatched[e]=!0,this.depCount-=1,this.depExports[e]=t)},fetch:function(){if(!this.fetched){this.fetched=!0,w.startTime=(new Date).getTime();var e=this.map;if(!this.shim)return e.prefix?this.callPlugin():this.load();w.makeRequire(this.map,{enableBuildCallback:!0})(this.shim.deps||[],r(this,function(){return e.prefix?this.callPlugin():this.load()}))}},load:function(){var e=this.map.url;M[e]||(M[e]=!0,w.load(this.map.id,e))},check:function(){if(this.enabled&&!this.enabling){var e,t,n=this.map.id;t=this.depExports;var r=this.exports,i=this.factory;if(this.inited){if(this.error)this.emit("error",this.error);else if(!this.defining){if(this.defining=!0,this.depCount<1&&!this.defined){if(D(i)){if(this.events.error)try{r=w.execCb(n,i,t,r)}catch(a){e=a}else r=w.execCb(n,i,t,r);if(this.map.isDefine&&((t=this.module)&&void 0!==t.exports&&t.exports!==this.exports?r=t.exports:void 0===r&&this.usingExports&&(r=this.exports)),e)return e.requireMap=this.map,e.requireModules=[this.map.id],e.requireType="define",l(this.error=e)}else r=i;this.exports=r,this.map.isDefine&&!this.ignore&&(C[n]=r,g.onResourceLoad)&&g.onResourceLoad(w,this.map,this.depMaps),delete S[n],this.defined=!0}this.defining=!1,this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,this.emit("defined",this.exports),this.defineEmitComplete=!0)}}else this.fetch()}},callPlugin:function(){var e=this.map,t=e.id,i=s(e.prefix);this.depMaps.push(i),u(i,"defined",r(this,function(i){var a,o;o=this.map.name;var f=this.map.parentMap?this.map.parentMap.name:null,p=w.makeRequire(e.parentMap,{enableBuildCallback:!0,skipMap:!0});this.map.unnormalized?(i.normalize&&(o=i.normalize(o,function(e){return n(e,f,!0)})||""),i=s(e.prefix+"!"+o,this.map.parentMap),u(i,"defined",r(this,function(e){this.init([],function(){return e},null,{enabled:!0,ignore:!0})})),(o=S[i.id])&&(this.depMaps.push(i),this.events.error&&o.on("error",r(this,function(e){this.emit("error",e)})),o.enable())):(a=r(this,function(e){this.init([],function(){return e},null,{enabled:!0})}),a.error=r(this,function(e){this.inited=!0,this.error=e,e.requireModules=[t],A(S,function(e){0===e.map.id.indexOf(t+"_unnormalized")&&delete S[e.map.id]}),l(e)}),a.fromText=r(this,function(t,n){var r=e.name,i=s(r),o=J;n&&(t=n),o&&(J=!1),c(i);try{g.exec(t)}catch(u){throw Error("fromText eval for "+r+" failed: "+u)}o&&(J=!0),this.depMaps.push(i),w.completeLoad(r),p([r],a)}),i.load(e.name,p,a,j))})),w.enable(i,this),this.pluginMaps[i.id]=i},enable:function(){this.enabling=this.enabled=!0,t(this.depMaps,r(this,function(e,t){var n,i;if("string"==typeof e){if(e=s(e,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap),this.depMaps[t]=e,n=_[e.id])return this.depExports[t]=n(this),void 0;this.depCount+=1,u(e,"defined",r(this,function(e){this.defineDep(t,e),this.check()})),this.errback&&u(e,"error",this.errback)}n=e.id,i=S[n],!_[n]&&i&&!i.enabled&&w.enable(e,this)})),A(this.pluginMaps,r(this,function(e){var t=S[e.id];t&&!t.enabled&&w.enable(e,this)})),this.enabling=!1,this.check()},on:function(e,t){var n=this.events[e];n||(n=this.events[e]=[]),n.push(t)},emit:function(e,n){t(this.events[e],function(e){e(n)}),"error"===e&&delete this.events[e]}},w={config:j,contextName:e,registry:S,defined:C,urlFetched:M,defQueue:q,Module:x,makeModuleMap:s,nextTick:g.nextTick,configure:function(e){e.baseUrl&&"/"!==e.baseUrl.charAt(e.baseUrl.length-1)&&(e.baseUrl+="/");var n=j.pkgs,r=j.shim,i={paths:!0,config:!0,map:!0};A(e,function(e,t){i[t]?"map"===t?O(j[t],e,!0,!0):O(j[t],e,!0):j[t]=e}),e.shim&&(A(e.shim,function(e,t){E(e)&&(e={deps:e}),e.exports&&!e.exportsFn&&(e.exportsFn=w.makeShimExports(e)),r[t]=e}),j.shim=r),e.packages&&(t(e.packages,function(e){e="string"==typeof e?{name:e}:e,n[e.name]={name:e.name,location:e.location||e.name,main:(e.main||"main").replace(ea,"").replace($,"")}}),j.pkgs=n),A(S,function(e,t){e.inited||e.map.unnormalized||(e.map=s(t))}),(e.deps||e.callback)&&w.require(e.deps||[],e.callback)},makeShimExports:function(e){return function(){var t;return e.init&&(t=e.init.apply(W,arguments)),t||X(e.exports)}},makeRequire:function(t,r){function i(n,a,o){var u,f;return r.enableBuildCallback&&a&&D(a)&&(a.__requireJsBuild=!0),"string"==typeof n?D(a)?l(G("requireargs","Invalid require call"),o):t&&_[n]?_[n](S[t.id]):g.get?g.get(w,n,t):(u=s(n,t,!1,!0),u=u.id,F.call(C,u)?C[u]:l(G("notloaded",'Module name "'+u+'" has not been loaded yet for context: '+e+(t?"":". Use require([])")))):(y(),w.nextTick(function(){y(),f=c(s(null,t)),f.skipMap=r.skipMap,f.init(n,a,o,{enabled:!0}),d()}),i)}return r=r||{},O(i,{isBrowser:v,toUrl:function(e){var r=e.lastIndexOf("."),i=null;return-1!==r&&(i=e.substring(r,e.length),e=e.substring(0,r)),w.nameToUrl(n(e,t&&t.id,!0),i)},defined:function(e){return e=s(e,t,!1,!0).id,F.call(C,e)},specified:function(e){return e=s(e,t,!1,!0).id,F.call(C,e)||F.call(S,e)}}),t||(i.undef=function(e){f();var n=s(e,t,!0),r=S[e];delete C[e],delete M[n.url],delete T[e],r&&(r.events.defined&&(T[e]=r.events),delete S[e])}),i},enable:function(e){S[e.id]&&c(e).enable()},completeLoad:function(e){var t,n,r=j.shim[e]||{},i=r.exports;for(f();q.length;){if(n=q.shift(),null===n[0]){if(n[0]=e,t)break;t=!0}else n[0]===e&&(t=!0);h(n)}if(n=S[e],!t&&!C[e]&&n&&!n.inited){if(!(!j.enforceDefine||i&&X(i)))return a(e)?void 0:l(G("nodefine","No define call for "+e,null,[e]));h([e,r.deps||[],r.exportsFn])}d()},nameToUrl:function(e,t){var n,r,i,a,o,s;if(g.jsExtRegExp.test(e))a=e+(t||"");else{for(n=j.paths,r=j.pkgs,a=e.split("/"),o=a.length;o>0;o-=1){if(s=a.slice(0,o).join("/"),i=r[s],s=n[s]){E(s)&&(s=s[0]),a.splice(0,o,s);break}if(i){n=e===i.name?i.location+"/"+i.main:i.location,a.splice(0,o,n);break}}a=a.join("/"),a+=t||(/\?/.test(a)?"":".js"),a=("/"===a.charAt(0)||a.match(/^[\w\+\.\-]+:/)?"":j.baseUrl)+a}return j.urlArgs?a+((-1===a.indexOf("?")?"?":"&")+j.urlArgs):a},load:function(e,t){g.load(w,e,t)},execCb:function(e,t,n,r){return t.apply(r,n)},onScriptLoad:function(e){("load"===e.type||ga.test((e.currentTarget||e.srcElement).readyState))&&(H=null,e=m(e),w.completeLoad(e.id))},onScriptError:function(e){var t=m(e);return a(t.id)?void 0:l(G("scripterror","Script error",e,[t.id]))}},w.require=w.makeRequire(),w}},g({}),t(["toUrl","undef","defined","specified"],function(e){g[e]=function(){var t=w._;return t.require[e].apply(t,arguments)}}),v&&(u=s.head=document.getElementsByTagName("head")[0],y=document.getElementsByTagName("base")[0])&&(u=s.head=y.parentNode),g.onError=function(e){throw e},g.load=function(e,t,n){var r,i=e&&e.config||{};return v?(r=i.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script"),r.type=i.scriptType||"text/javascript",r.charset="utf-8",r.async=!0,r.setAttribute("data-requirecontext",e.contextName),r.setAttribute("data-requiremodule",t),!r.attachEvent||r.attachEvent.toString&&r.attachEvent.toString().indexOf("[native code")<0||R?(r.addEventListener("load",e.onScriptLoad,!1),r.addEventListener("error",e.onScriptError,!1)):(J=!0,r.attachEvent("onreadystatechange",e.onScriptLoad)),r.src=n,I=r,y?u.insertBefore(r,y):u.appendChild(r),I=null,r):(aa&&(importScripts(n),e.completeLoad(t)),void 0)},v&&N(document.getElementsByTagName("script"),function(e){return u||(u=e.parentNode),(q=e.getAttribute("data-main"))?(n.baseUrl||(B=q.split("/"),Y=B.pop(),Z=B.length?B.join("/")+"/":"./",n.baseUrl=Z,q=Y),q=q.replace($,""),n.deps=n.deps?n.deps.concat(q):[q],!0):void 0}),define=function(e,t,n){var r,i;"string"!=typeof e&&(n=t,t=e,e=null),E(t)||(n=t,t=[]),!t.length&&D(n)&&n.length&&(n.toString().replace(ca,"").replace(da,function(e,n){t.push(n)}),t=(1===n.length?["require"]:["require","exports","module"]).concat(t)),J&&(r=I||ba())&&(e||(e=r.getAttribute("data-requiremodule")),i=w[r.getAttribute("data-requirecontext")]),(i?i.defQueue:P).push([e,t,n])},define.amd={jQuery:!0},g.exec=function(b){return eval(b)},g(n)}}(this);