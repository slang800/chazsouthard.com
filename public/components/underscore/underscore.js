(function(){var t=this,e=t._,n={},i=Array.prototype,r=Object.prototype,a=Function.prototype,o=i.push,s=i.slice,u=i.concat,c=r.toString,l=r.hasOwnProperty,h=i.forEach,f=i.map,p=i.reduce,d=i.reduceRight,g=i.filter,m=i.every,v=i.some,y=i.indexOf,b=i.lastIndexOf,x=Array.isArray,w=Object.keys,_=a.bind,k=function(t){return t instanceof k?t:this instanceof k?(this._wrapped=t,void 0):new k(t)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=k),exports._=k):t._=k,k.VERSION="1.4.4";var E=k.each=k.forEach=function(t,e,i){if(null!=t)if(h&&t.forEach===h)t.forEach(e,i);else if(t.length===+t.length){for(var r=0,a=t.length;a>r;r++)if(e.call(i,t[r],r,t)===n)return}else for(var o in t)if(k.has(t,o)&&e.call(i,t[o],o,t)===n)return};k.map=k.collect=function(t,e,n){var i=[];return null==t?i:f&&t.map===f?t.map(e,n):(E(t,function(t,r,a){i[i.length]=e.call(n,t,r,a)}),i)};var j="Reduce of empty array with no initial value";k.reduce=k.foldl=k.inject=function(t,e,n,i){var r=arguments.length>2;if(null==t&&(t=[]),p&&t.reduce===p)return i&&(e=k.bind(e,i)),r?t.reduce(e,n):t.reduce(e);if(E(t,function(t,a,o){r?n=e.call(i,n,t,a,o):(n=t,r=!0)}),!r)throw new TypeError(j);return n},k.reduceRight=k.foldr=function(t,e,n,i){var r=arguments.length>2;if(null==t&&(t=[]),d&&t.reduceRight===d)return i&&(e=k.bind(e,i)),r?t.reduceRight(e,n):t.reduceRight(e);var a=t.length;if(a!==+a){var o=k.keys(t);a=o.length}if(E(t,function(s,u,c){u=o?o[--a]:--a,r?n=e.call(i,n,t[u],u,c):(n=t[u],r=!0)}),!r)throw new TypeError(j);return n},k.find=k.detect=function(t,e,n){var i;return S(t,function(t,r,a){return e.call(n,t,r,a)?(i=t,!0):void 0}),i},k.filter=k.select=function(t,e,n){var i=[];return null==t?i:g&&t.filter===g?t.filter(e,n):(E(t,function(t,r,a){e.call(n,t,r,a)&&(i[i.length]=t)}),i)},k.reject=function(t,e,n){return k.filter(t,function(t,i,r){return!e.call(n,t,i,r)},n)},k.every=k.all=function(t,e,i){e||(e=k.identity);var r=!0;return null==t?r:m&&t.every===m?t.every(e,i):(E(t,function(t,a,o){return(r=r&&e.call(i,t,a,o))?void 0:n}),!!r)};var S=k.some=k.any=function(t,e,i){e||(e=k.identity);var r=!1;return null==t?r:v&&t.some===v?t.some(e,i):(E(t,function(t,a,o){return r||(r=e.call(i,t,a,o))?n:void 0}),!!r)};k.contains=k.include=function(t,e){return null==t?!1:y&&t.indexOf===y?-1!=t.indexOf(e):S(t,function(t){return t===e})},k.invoke=function(t,e){var n=s.call(arguments,2),i=k.isFunction(e);return k.map(t,function(t){return(i?e:t[e]).apply(t,n)})},k.pluck=function(t,e){return k.map(t,function(t){return t[e]})},k.where=function(t,e,n){return k.isEmpty(e)?n?null:[]:k[n?"find":"filter"](t,function(t){for(var n in e)if(e[n]!==t[n])return!1;return!0})},k.findWhere=function(t,e){return k.where(t,e,!0)},k.max=function(t,e,n){if(!e&&k.isArray(t)&&t[0]===+t[0]&&t.length<65535)return Math.max.apply(Math,t);if(!e&&k.isEmpty(t))return-1/0;var i={computed:-1/0,value:-1/0};return E(t,function(t,r,a){var o=e?e.call(n,t,r,a):t;o>=i.computed&&(i={value:t,computed:o})}),i.value},k.min=function(t,e,n){if(!e&&k.isArray(t)&&t[0]===+t[0]&&t.length<65535)return Math.min.apply(Math,t);if(!e&&k.isEmpty(t))return 1/0;var i={computed:1/0,value:1/0};return E(t,function(t,r,a){var o=e?e.call(n,t,r,a):t;o<i.computed&&(i={value:t,computed:o})}),i.value},k.shuffle=function(t){var e,n=0,i=[];return E(t,function(t){e=k.random(n++),i[n-1]=i[e],i[e]=t}),i};var A=function(t){return k.isFunction(t)?t:function(e){return e[t]}};k.sortBy=function(t,e,n){var i=A(e);return k.pluck(k.map(t,function(t,e,r){return{value:t,index:e,criteria:i.call(n,t,e,r)}}).sort(function(t,e){var n=t.criteria,i=e.criteria;if(n!==i){if(n>i||void 0===n)return 1;if(i>n||void 0===i)return-1}return t.index<e.index?-1:1}),"value")};var T=function(t,e,n,i){var r={},a=A(e||k.identity);return E(t,function(e,o){var s=a.call(n,e,o,t);i(r,s,e)}),r};k.groupBy=function(t,e,n){return T(t,e,n,function(t,e,n){(k.has(t,e)?t[e]:t[e]=[]).push(n)})},k.countBy=function(t,e,n){return T(t,e,n,function(t,e){k.has(t,e)||(t[e]=0),t[e]++})},k.sortedIndex=function(t,e,n,i){n=null==n?k.identity:A(n);for(var r=n.call(i,e),a=0,o=t.length;o>a;){var s=a+o>>>1;n.call(i,t[s])<r?a=s+1:o=s}return a},k.toArray=function(t){return t?k.isArray(t)?s.call(t):t.length===+t.length?k.map(t,k.identity):k.values(t):[]},k.size=function(t){return null==t?0:t.length===+t.length?t.length:k.keys(t).length},k.first=k.head=k.take=function(t,e,n){return null==t?void 0:null==e||n?t[0]:s.call(t,0,e)},k.initial=function(t,e,n){return s.call(t,0,t.length-(null==e||n?1:e))},k.last=function(t,e,n){return null==t?void 0:null==e||n?t[t.length-1]:s.call(t,Math.max(t.length-e,0))},k.rest=k.tail=k.drop=function(t,e,n){return s.call(t,null==e||n?1:e)},k.compact=function(t){return k.filter(t,k.identity)};var O=function(t,e,n){return E(t,function(t){k.isArray(t)?e?o.apply(n,t):O(t,e,n):n.push(t)}),n};k.flatten=function(t,e){return O(t,e,[])},k.without=function(t){return k.difference(t,s.call(arguments,1))},k.uniq=k.unique=function(t,e,n,i){k.isFunction(e)&&(i=n,n=e,e=!1);var r=n?k.map(t,n,i):t,a=[],o=[];return E(r,function(n,i){(e?i&&o[o.length-1]===n:k.contains(o,n))||(o.push(n),a.push(t[i]))}),a},k.union=function(){return k.uniq(u.apply(i,arguments))},k.intersection=function(t){var e=s.call(arguments,1);return k.filter(k.uniq(t),function(t){return k.every(e,function(e){return k.indexOf(e,t)>=0})})},k.difference=function(t){var e=u.apply(i,s.call(arguments,1));return k.filter(t,function(t){return!k.contains(e,t)})},k.zip=function(){for(var t=s.call(arguments),e=k.max(k.pluck(t,"length")),n=new Array(e),i=0;e>i;i++)n[i]=k.pluck(t,""+i);return n},k.object=function(t,e){if(null==t)return{};for(var n={},i=0,r=t.length;r>i;i++)e?n[t[i]]=e[i]:n[t[i][0]]=t[i][1];return n},k.indexOf=function(t,e,n){if(null==t)return-1;var i=0,r=t.length;if(n){if("number"!=typeof n)return i=k.sortedIndex(t,e),t[i]===e?i:-1;i=0>n?Math.max(0,r+n):n}if(y&&t.indexOf===y)return t.indexOf(e,n);for(;r>i;i++)if(t[i]===e)return i;return-1},k.lastIndexOf=function(t,e,n){if(null==t)return-1;var i=null!=n;if(b&&t.lastIndexOf===b)return i?t.lastIndexOf(e,n):t.lastIndexOf(e);for(var r=i?n:t.length;r--;)if(t[r]===e)return r;return-1},k.range=function(t,e,n){arguments.length<=1&&(e=t||0,t=0),n=arguments[2]||1;for(var i=Math.max(Math.ceil((e-t)/n),0),r=0,a=new Array(i);i>r;)a[r++]=t,t+=n;return a},k.bind=function(t,e){if(t.bind===_&&_)return _.apply(t,s.call(arguments,1));var n=s.call(arguments,2);return function(){return t.apply(e,n.concat(s.call(arguments)))}},k.partial=function(t){var e=s.call(arguments,1);return function(){return t.apply(this,e.concat(s.call(arguments)))}},k.bindAll=function(t){var e=s.call(arguments,1);return 0===e.length&&(e=k.functions(t)),E(e,function(e){t[e]=k.bind(t[e],t)}),t},k.memoize=function(t,e){var n={};return e||(e=k.identity),function(){var i=e.apply(this,arguments);return k.has(n,i)?n[i]:n[i]=t.apply(this,arguments)}},k.delay=function(t,e){var n=s.call(arguments,2);return setTimeout(function(){return t.apply(null,n)},e)},k.defer=function(t){return k.delay.apply(k,[t,1].concat(s.call(arguments,1)))},k.throttle=function(t,e){var n,i,r,a,o=0,s=function(){o=new Date,r=null,a=t.apply(n,i)};return function(){var u=new Date,c=e-(u-o);return n=this,i=arguments,0>=c?(clearTimeout(r),r=null,o=u,a=t.apply(n,i)):r||(r=setTimeout(s,c)),a}},k.debounce=function(t,e,n){var i,r;return function(){var a=this,o=arguments,s=function(){i=null,n||(r=t.apply(a,o))},u=n&&!i;return clearTimeout(i),i=setTimeout(s,e),u&&(r=t.apply(a,o)),r}},k.once=function(t){var e,n=!1;return function(){return n?e:(n=!0,e=t.apply(this,arguments),t=null,e)}},k.wrap=function(t,e){return function(){var n=[t];return o.apply(n,arguments),e.apply(this,n)}},k.compose=function(){var t=arguments;return function(){for(var e=arguments,n=t.length-1;n>=0;n--)e=[t[n].apply(this,e)];return e[0]}},k.after=function(t,e){return 0>=t?e():function(){return--t<1?e.apply(this,arguments):void 0}},k.keys=w||function(t){if(t!==Object(t))throw new TypeError("Invalid object");var e=[];for(var n in t)k.has(t,n)&&(e[e.length]=n);return e},k.values=function(t){var e=[];for(var n in t)k.has(t,n)&&e.push(t[n]);return e},k.pairs=function(t){var e=[];for(var n in t)k.has(t,n)&&e.push([n,t[n]]);return e},k.invert=function(t){var e={};for(var n in t)k.has(t,n)&&(e[t[n]]=n);return e},k.functions=k.methods=function(t){var e=[];for(var n in t)k.isFunction(t[n])&&e.push(n);return e.sort()},k.extend=function(t){return E(s.call(arguments,1),function(e){if(e)for(var n in e)t[n]=e[n]}),t},k.pick=function(t){var e={},n=u.apply(i,s.call(arguments,1));return E(n,function(n){n in t&&(e[n]=t[n])}),e},k.omit=function(t){var e={},n=u.apply(i,s.call(arguments,1));for(var r in t)k.contains(n,r)||(e[r]=t[r]);return e},k.defaults=function(t){return E(s.call(arguments,1),function(e){if(e)for(var n in e)null==t[n]&&(t[n]=e[n])}),t},k.clone=function(t){return k.isObject(t)?k.isArray(t)?t.slice():k.extend({},t):t},k.tap=function(t,e){return e(t),t};var C=function(t,e,n,i){if(t===e)return 0!==t||1/t==1/e;if(null==t||null==e)return t===e;t instanceof k&&(t=t._wrapped),e instanceof k&&(e=e._wrapped);var r=c.call(t);if(r!=c.call(e))return!1;switch(r){case"[object String]":return t==String(e);case"[object Number]":return t!=+t?e!=+e:0==t?1/t==1/e:t==+e;case"[object Date]":case"[object Boolean]":return+t==+e;case"[object RegExp]":return t.source==e.source&&t.global==e.global&&t.multiline==e.multiline&&t.ignoreCase==e.ignoreCase}if("object"!=typeof t||"object"!=typeof e)return!1;for(var a=n.length;a--;)if(n[a]==t)return i[a]==e;n.push(t),i.push(e);var o=0,s=!0;if("[object Array]"==r){if(o=t.length,s=o==e.length)for(;o--&&(s=C(t[o],e[o],n,i)););}else{var u=t.constructor,l=e.constructor;if(u!==l&&!(k.isFunction(u)&&u instanceof u&&k.isFunction(l)&&l instanceof l))return!1;for(var h in t)if(k.has(t,h)&&(o++,!(s=k.has(e,h)&&C(t[h],e[h],n,i))))break;if(s){for(h in e)if(k.has(e,h)&&!o--)break;s=!o}}return n.pop(),i.pop(),s};k.isEqual=function(t,e){return C(t,e,[],[])},k.isEmpty=function(t){if(null==t)return!0;if(k.isArray(t)||k.isString(t))return 0===t.length;for(var e in t)if(k.has(t,e))return!1;return!0},k.isElement=function(t){return!(!t||1!==t.nodeType)},k.isArray=x||function(t){return"[object Array]"==c.call(t)},k.isObject=function(t){return t===Object(t)},E(["Arguments","Function","String","Number","Date","RegExp"],function(t){k["is"+t]=function(e){return c.call(e)=="[object "+t+"]"}}),k.isArguments(arguments)||(k.isArguments=function(t){return!(!t||!k.has(t,"callee"))}),"function"!=typeof/./&&(k.isFunction=function(t){return"function"==typeof t}),k.isFinite=function(t){return isFinite(t)&&!isNaN(parseFloat(t))},k.isNaN=function(t){return k.isNumber(t)&&t!=+t},k.isBoolean=function(t){return t===!0||t===!1||"[object Boolean]"==c.call(t)},k.isNull=function(t){return null===t},k.isUndefined=function(t){return void 0===t},k.has=function(t,e){return l.call(t,e)},k.noConflict=function(){return t._=e,this},k.identity=function(t){return t},k.times=function(t,e,n){for(var i=Array(t),r=0;t>r;r++)i[r]=e.call(n,r);return i},k.random=function(t,e){return null==e&&(e=t,t=0),t+Math.floor(Math.random()*(e-t+1))};var M={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};M.unescape=k.invert(M.escape);var q={escape:new RegExp("["+k.keys(M.escape).join("")+"]","g"),unescape:new RegExp("("+k.keys(M.unescape).join("|")+")","g")};k.each(["escape","unescape"],function(t){k[t]=function(e){return null==e?"":(""+e).replace(q[t],function(e){return M[t][e]})}}),k.result=function(t,e){if(null==t)return null;var n=t[e];return k.isFunction(n)?n.call(t):n},k.mixin=function(t){E(k.functions(t),function(e){var n=k[e]=t[e];k.prototype[e]=function(){var t=[this._wrapped];return o.apply(t,arguments),H.call(this,n.apply(k,t))}})};var R=0;k.uniqueId=function(t){var e=++R+"";return t?t+e:e},k.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var P=/(.)^/,N={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},I=/\\|'|\r|\n|\t|\u2028|\u2029/g;k.template=function(t,e,n){var i;n=k.defaults({},n,k.templateSettings);var r=new RegExp([(n.escape||P).source,(n.interpolate||P).source,(n.evaluate||P).source].join("|")+"|$","g"),a=0,o="__p+='";t.replace(r,function(e,n,i,r,s){return o+=t.slice(a,s).replace(I,function(t){return"\\"+N[t]}),n&&(o+="'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'"),i&&(o+="'+\n((__t=("+i+"))==null?'':__t)+\n'"),r&&(o+="';\n"+r+"\n__p+='"),a=s+e.length,e}),o+="';\n",n.variable||(o="with(obj||{}){\n"+o+"}\n"),o="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+o+"return __p;\n";try{i=new Function(n.variable||"obj","_",o)}catch(s){throw s.source=o,s}if(e)return i(e,k);var u=function(t){return i.call(this,t,k)};return u.source="function("+(n.variable||"obj")+"){\n"+o+"}",u},k.chain=function(t){return k(t).chain()};var H=function(t){return this._chain?k(t).chain():t};k.mixin(k),E(["pop","push","reverse","shift","sort","splice","unshift"],function(t){var e=i[t];k.prototype[t]=function(){var n=this._wrapped;return e.apply(n,arguments),"shift"!=t&&"splice"!=t||0!==n.length||delete n[0],H.call(this,n)}}),E(["concat","join","slice"],function(t){var e=i[t];k.prototype[t]=function(){return H.call(this,e.apply(this._wrapped,arguments))}}),k.extend(k.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);