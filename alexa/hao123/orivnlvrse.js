PDC&&PDC.mark("c_jl");
(function(l,k,g,b){function c(a){var A,E,d,e,F,f;A=B[a];if(!A)throw Error('Requiring unknown module "'+a+'"');if(A.hasOwnProperty("exports"))return A.exports;A.exports=a={};E=A.deps;f=E.length;F=-1;for(e=[];++F<f;)d=E[F],e.push("module"===d?A:"exports"===d?a:c(d));if((E=A.factory.apply(null,e))!==b)A.exports=a=E;return a}function a(b,a,c){a=["global","require","module","exports"].concat(a);B[b]={factory:c,deps:a}}function e(a,b,c){var d=Array.prototype.slice;e=function(a,b,c){var A=d.call(arguments,
1);return d.apply(a,A)};return e.apply(this,e(arguments,0))}function h(a,b){b=b||g;return b.getElementById(a)}function f(b){for(var b=b||{},a=arguments,c=a.length,d=0,e,f;++d<c;)for(f in e=a[d],e)e.hasOwnProperty(f)&&(b[f]=e[f]);return b}function d(b,a,c){var e;this instanceof d?(this.constructor=b,f(this,c)):(e=d.prototype,d.prototype=a.prototype,b.prototype=new d(b,a,c),d.prototype=e)}function j(){function b(){for(var e=-1,f;++e<d;)f=a[e],f[0].apply(f[1],f[2]),delete a[e];a=[];d=0;c=null}var a=
[],c=null,d=0;j=function(f,m,h){if(!f)return j;a.push([f,m||this,e(arguments,2)]);d++;null===c&&(c=setTimeout(b,0));return c};return j.apply(this,e(arguments,0))}function i(b){var a,c=g.getElementsByTagName("head");a=c.length&&c[0]||g.body;i=function(b){a.appendChild(b)};return i(b)}function q(a,c){var d=w(a)?[]:{};"function"!=typeof c&&(c=c===b?function(a,b){return!!b}:function(a,b){return b==c});o(a,function(b,a){c(b,a)&&(d[b]=a)});return d}function n(b,a,c){var d,e;d=g.createElement(b);e=d.style;
a&&o(a,function(a,b){d[a]=b});e&&c&&o(c,function(a,b){e[a]=b});return d}function o(a,b){v(a,function(a,c){b(a,c);return!1})}function v(a,c){var d;d=a.length;return(d===b||u(a)?function(a,b){for(var c in a)if(a.hasOwnProperty(c)&&b(c,a[c]))return!0;return!1}:function(a,b){var c;for(c=0;c<d;c++)if(b(c,a[c]))return!0;return!1})(a,c)}function r(a){for(var b="Boolean,Number,String,Function,Array,Date,RegExp,Object".split(","),c=b.length,d=Object.prototype.toString,e={},f;c--;)f=b[c],e["[object "+f+"]"]=
f.toLowerCase();r=function(a){return null==a?""+a:e[d.call(a)]||"object"};return r(a)}function u(a){return"function"===r(a)}function w(a){function b(a){return"array"===r(a)}w=Array.isArray||b;return w(a)}function u(a){return"[object Function]"==Object.prototype.toString.call(a)}function p(a,b){return m(a,b,e(arguments,2))}function m(a,b,c){C.push([a,b,c]);if(!D){for(D=!0;a=C.length;){for(b=0;b<a;b++)c=C[b],c[0].apply(c[1],c[2]);C.splice(0,a)}D=!1}}function s(a,b){var c=[],d=a.length;if("function"!==
typeof b)return a;for(;d--;)c.unshift(b(a[d]));return c}var B={};B.global={exports:l};B.require={exports:c};var z={addHandler:function(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent?a.attachEvent("on"+b,c):a["on"+b]=c},getEvent:function(a){return a?a:k.event},getTarget:function(a){return a.target||a.srcElement},preventDefault:function(a){a.preventDefault?a.preventDefault():a.returnValue=!1},stopPropagation:function(a){a.stopPropagation?a.stopPropagation():a.cancelBubble=!0},removeHandler:function(a,
b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent?a.detachEvent("on"+b,c):a["on"+b]=null}},C=[],D=!1;a("Arbiter",["global","ErrorUtils"],function(a,b){function c(a){this._listenerMap={};this._setup(a||[])}var a=b("global"),d=b("ErrorUtils");f(c.prototype,{_setup:function(a){for(var b=a.length,c=this._listenerMap;b--;)c[a[b]]={args:null,cbs:[]}},on:function(b,c,d){var f=this._listenerMap[b],h,y;if(!f)return!1;d=d||a;h=e(arguments,3);(y=f.args)?m(c,d,h.concat(y)):f.cbs.push([c,
d,h]);return!0},done:function(a,b){var c=this._listenerMap[a],d,f,y;if(!c)return!0;f=c.cbs;y=f.length;b=e(arguments,1);c.args=b;d=this.emit.apply(this,arguments);c.cbs=f.slice(y);return d},emit:function(a,b){var c=this._listenerMap[a],f,h,y;if(!c)throw Error(a+" has not listened");b=e(arguments,1);c=c.cbs;f=c.length;h=-1;for(y=!0;++h<f;){var t;t=c[h];var x=b,G=t[0],m=t[1],x=t[2].concat(x);t=d.inGuard()?G.apply(m,x):d.applyWithGuard(G,m,x);y=!1!==t&&y}return!!y},undo:function(a){a=this._listenerMap[a];
if(!a)return!1;a.args=null}});return c});a("Resource",["Arbiter","CSSLoader","JSLoader"],function(a,c){function e(a,b){if(this instanceof e)g.call(this,t),this.id=a,this.deps=b,this.loaded=!1,this.state=x;else return h(a)}function h(a){var b,c;if(!(b=i[a]))throw Error('resource "'+a+'" unknow.');if(!(c=b._handler))c=b._handler=new e(a,b.deps||[]),b._loaded&&(c.loaded=!0);return c}function m(a,b){s[a]=b}function j(a,c){var d;if(c!==b)d=i[a]||{},f(d,c),i[a]=d;else for(a in c=a,c)j(a,c[a])}var g=c("Arbiter"),
i={},s={},y={},t=["load","resolve"],x=1;d(e,g,{load:function(){function a(){--d||(m=!0,h&&this.done("resolve"))}function b(){h=!0;this.done("load");m&&this.done("resolve")}var c,d,f,x,t,h,m;if(2<=this.state)return!1;this.state=2;h=this.loaded;m=!0;c=this.deps;f=d=c.length;if(0<f){m=!1;for(x=-1;++x<f;)t=e(c[x]),t.on("resolve",a,this),t.load()}p(function(){var a;if(h)p(b,this);else{a=this.id;var c,d,e;c=i[a];d=c.type;if(!(e=s[d]))throw Error('unknow type "'+d+'"');a=new e(a,c);a.on("load",b,this);a.load()}},
this)}});f(e,{setResourceMap:j,setModuleMap:function(a){f(y,a)},setResourceLoaded:function(a){var b;for(b=a.length;b--;)j(a[b],{_loaded:!0})},moudelToResource:function(a){var b=y[a];if(!b)throw Error('module "'+a+'" unknow.');return h(b)}});m("css",c("CSSLoader"));m("js",c("JSLoader"));return e});a("Pagelet",["Arbiter","Resource"],function(a,b){function c(a){if(this instanceof c)e.call(this,p),this.id=a,this.root=null===a,this.state=g;else{var b;if(null===a)return new c(a);b=i[a];b||(b=new c(a),i[a]=
b);return b}}var e=b("Arbiter"),m=b("Resource"),p="arrive,beforeload,cssresolved,jsresolved,beforedisplay,display,load,afterload,resolved,beforeunload,unload,afterunload".split(","),g=0,i={},s={};d(c,e,{arrive:function(a){f(this,{html:a.html||"",css:a.css||[],js:a.js||[],parent:a.parent?c(a.parent):null,children:a.children||[],state:1});this.afterload=!1;this.done("arrive");this.emit("beforeload")?this.load():(this.afterload=!0,this.done("afterload"))},load:function(){function a(){this.parent.on("display",
b,this)}function b(){this.emit("beforedisplay")&&this.display()}if(2<=this.state)return!1;this.state=2;this.on("cssresolved",this.parent?a:b,this);this._resolve(this.css,"cssresolved");this._resolve(this.js,"jsresolved")},setState:function(){if(3>this.state)return!1;this.state=4;var a,b,d,e;a=this.children;b=a.length;d=-1;if(b)for(;++d<b;)e=a[d],e=c(e),e.setState()},doUnload:function(){function a(){--b||this.emit("beforeunload")&&this.unload()}var b,d,e,f,m;d=this.children;e=b=d.length;f=-1;if(e)for(;++f<
e;)m=d[f],m=c(m),m.on("unload",a,this),m.doUnload();else this.emit("beforeunload")&&this.unload()},remove:function(){if(4==this.state)return!1;this.setState();this.on("unload",this.destroy,this);this.doUnload()},unload:function(){this.done("unload")},destroy:function(){var a,b,d,e;a=this.children;b=a.length;d=-1;if(b)for(;++d<b;)e=a[d],e=c(e),e.destroy();delete i[this.id];this.state=g;j(this.done,this,"afterunload")},isUnloading:function(){return 4==this.state},_resolve:function(a,b){function c(){--d||
this.done(b)}var d,e,f,h;e=d=a.length;f=-1;if(e)for(;++f<e;)h=m(a[f]),h.on("resolve",c,this),h.load();else this.done(b)},display:function(){if(3<=this.state)return!1;this.state=3;this.root||(h(this.id).innerHTML=this.html);this.done("display");this.on("jsresolved",function(){this.done("load");this.afterload||this.done("afterload")},this)},get:function(a,b){return s[a]||b},set:function(a,b){s[a]=b}});f(c,{hasPagelet:function(a){return!!i[a]}});return c});a("BigPipe",["Resource","Emulator","Arbiter",
"Requestor","ErrorUtils"],function(a,b){function c(){j.call(this);this.hooks={}}function e(a){return!a||"string"!=typeof a?a:a.replace(/["'<>\\\/`]/g,function(a){return"&#"+a.charCodeAt(0)+";"})}var f=!1,m=b("Resource"),h=b("Emulator"),j=b("Arbiter"),i=b("Requestor"),p=b("ErrorUtils"),t=!1;d(c,j,{init:function(a){var b=!!a.debug;if(t)throw Error("BigPipe has been initialized.");t=!0;this.emulator=h();this.emulator.listen();this.emulator.on("request",this.request,this);this.requestor=new i(a);p.setConfig("nocatch",
b);if(f=b){var c=!0;this.console=n("ul",null,{cssText:"position:fixed;_position:absolute;top:0;left:0;z-index:999;border:1px solid #ddd;border-bottom:none;font-family:monospace;background:#000;color:#dadada"});this.console.onmouseover=function(){c?(this.style.left="auto",this.style.right="0"):(this.style.left="0",this.style.right="auto");c=!c};g.body.appendChild(this.console)}},onPageletArrive:function(a){var b=a.callback,c,d,e,f,h,t,j=this.hooks;if(b){c=a.hook||{};for(var i in b){d=b[i];e=-1;f=d.length;
for(h=c[i]||[];++e<f;)t=d[e],h.push(j[t]),delete j[t];c[i]=h}a.hook=c}m.setResourceMap(a.map||{});m.setModuleMap(a.mods||{});this.requestor.arrive(a)},request:function(a,b){this.requestor.request(a,b)},sessionStart:function(a){this.requestor.start(a)},sessionEnd:function(a){this.requestor.end(a)},loadModule:function(a,b){var c=m.moudelToResource(a);c.on("resolve",b);c.load()},loadedResource:function(a){m.setResourceLoaded(a)},log:function(){if(f){var a=this.console,b,c,d;if(a){for(c=0,b=arguments.length,
d=[];c<b;c++)d.push(e(""+arguments[c]));a.appendChild(n("li",{innerHTML:d.join(" ")},{cssText:"border-bottom:1px solid #ddd"}))}}}});return c});a("CSSLoader",["Arbiter"],function(a,b){function c(a,b){t.call(this,x);this.id=a;this.url=b.src;this.state=B}function e(a){n||(n=g.createElement("meta"),i(n));q=a||q;n.className=q.join(" ")}function f(a){return!a?!1:(a=k.getComputedStyle?getComputedStyle(a,null):a.currentStyle)&&1<parseInt(a.height,10)}function m(){var a,b,c,d,h,t,j,i,p,x,g,s;b=2<q.length?
f(n):!0;c=0;d=[];h=!1;t=+new Date;for(a in o){j=o[a];i=j[0];p=!1;b&&f(i)&&(p=!0);for(g=1,x=j.length;g<x;g++)s=j[g],p?s[1].call(s[2],!0):s[0]<t&&(s[1].call(s[2],!1),j.splice(g,1),g--,x--);p||1==x?(i.parentNode.removeChild(i),delete o[a],h=!0):(d.push("css_"+a),c++)}c?(h&&e(d),setTimeout(m,20)):(q=[],n&&(n.parentNode.removeChild(n),n=null),w=!1)}function h(a,b,c,d){var f,t;if(!(f=o[a]))t="css_"+a,f=g.createElement("meta"),f.className=t,i(f),f=[f],o[a]=f,q.push(t),e();b=+new Date+b;f.push([b,c,d]);w||
(w=!0,j(m))}function p(a){this.state=a?l:v;this.done("load",a)}function s(){var a=this.id,b=this.url,c=g.createElement("link");c.rel="stylesheet";c.type="text/css";c.href=b;i(c);h(a,u,p,this)}function y(){for(var a=this.id,b=this.url,c=r.length,d=c,e;d--;)if(31>r[d].length){e=z[d];break}0>d&&(e=g.createStyleSheet(),z.push(e),r.push([]),d=c);e.addImport(b);r[d].push(b);h(a,u,p,this)}var t=b("Arbiter"),x=["load"],B=1,l=3,v=4,u=5E3,w=!1,r=[],z=[],o={},q=[],n=null;d(c,t,{load:function(){2>this.state&&
(this.state=2,this._load())},_load:g.createStyleSheet?y:s});return c});a("JSLoader",["Arbiter"],function(a,c){function e(a,b){f.call(this,h);this.id=a;this.url=b.src;this.state=m}var f=c("Arbiter"),h=["load"],m=1,p=3,s=4;d(e,f,{load:function(){function a(h){if(!(c.state>=p)){c.state=h?p:s;c.done("load");k[d]=e;if(e===b)try{delete k[d]}catch(m){}j(function(){f.onerror=null;f.parentNode&&f.parentNode.removeChild(f);f=null})}}var c=this,d,e;if(!(2<=this.state)){this.state=2;var f=g.createElement("script");
f.src=this.url;f.async=!0;f.onerror=function(){a(!1)};d="js_"+this.id;e=k[d];k[d]=a;i(f)}}});return e});a("Emulator",["Arbiter"],function(a,b){function c(a){var b=!1;if(a&&(a=(""+a).replace(/(^\s*)|(\s*$)/g,"")))b=q(a.split(" "),function(a,b){return!!(""+b).replace(/(^\s*)|(\s*$)/g,"")});return b}function e(a){var b,d;for(b="A";a&&a.nodeName!=b;)a=a.parentNode;if(!a)return!1;if(!this.emit("beforetrigger",a))return!0;b=a.href;if(!b)return!1;var f=!1,h=/^\s*(https?|ftp):\/\//i;b==j||0==b.indexOf(j+
"/")?f=b.substring(i)||"/":h.test(b)||(f=b);b=f;if(!b)return!1;(a=a.rel)&&(d=c(a));if(!d)return!1;this.emit("request",b,d);return!0}function f(){if(this instanceof f)h.call(this,p);else return m||(m=new f),m}var h=b("Arbiter"),m,j,i,p=["beforetrigger","request"];j=[location.protocol,"//",location.host].join("");i=j.length;d(f,h,{listen:function(){var a=this;z.addHandler(g.documentElement,"click",function(b){var c,b=z.getEvent(b);c=z.getTarget(b);e.call(a,c)&&z.preventDefault(b)})}});return f});a("Requestor",
["Arbiter","Controller"],function(a,b){function c(a){e.call(this,m);f(this,{ajaxKey:a.ajaxKey,separator:a.separator,sessionKey:a.sessionKey});i||this.init()}var e=b("Arbiter"),h=b("Controller"),m=["arrive","allarrived"],j={},i=!1,p=!1,s=0;d(c,e,{init:function(){i=!0;this.sessionState=this.state=0;this.controller=new h;this.controller.on("arrived",this._onItemArrived,this);this.on("allarrived",this._onSessionEnd,this);this.refCount=0},start:function(a){this.sessionID=a;switch(this.sessionState){case 1:case 2:case 3:this.sessionState=
2;break;case 0:this.sessionState=1}},end:function(){this.sessionState=3;0==this.refCount&&this._onSessionEnd()},arrive:function(a){var b=this.sessionID,c=this.sessionState;j[b-1]&&(j[b-1]=null);2==c||3==c?(j[b]=j[b]||[],j[b].push(a)):(++this.refCount,this.controller.handdleArrive(a))},request:function(a,b){s++;this._ajaxRequest([a,/.*\?.*/.test(a)?"&":"?",this.ajaxKey,b?"="+b.join(this.separator):"","&",this.sessionKey,"=",s].join(""))},_onSessionEnd:function(){this.sessionState=0;var a=j[this.sessionID],
b=this;a&&o(a,function(a,c){b.refCount++;b.controller.handdleArrive(c)})},_onItemArrived:function(){!--this.refCount&&3==this.sessionState&&this.emit("allarrived")},_ajaxRequest:function(a){switch(this.state){case 1:var b=this._ajaxIframe;b&&b.parentNode&&b.parentNode.removeChild(b);this._initAjaxIframe(a);break;case 0:this._initAjaxIframe(a),this.state=1}},_initAjaxIframe:function(a){var b=this;this._ajaxIframe=n("iframe",{src:a},{display:"none"});g.body.appendChild(this._ajaxIframe);clearTimeout(p);
z.addHandler(this._ajaxIframe,"load",function(){1==b.state&&(p=setTimeout(function(){var a=b._ajaxIframe;a&&a.parentNode&&a.parentNode.removeChild(a);b.state=0},100))})}});return c});a("Controller",["Arbiter","Pagelet","Resource"],function(a,b){function c(){f.call(this,j)}function e(a,b){var c=h(a,b),d;if(!(d=c.firstChild)||8!==d.nodeType)return null;d=d.nodeValue;c.parentNode.removeChild(c);d=d.slice(1,-1);return d.replace(/--\\>/g,"--\>").replace(/\\\\/g,"\\")}var f=b("Arbiter"),m=b("Pagelet");
b("Resource");var j=["arrived"];d(c,f,{handdleArrive:function(a){var b,c;c=a.id;m.hasPagelet(c)&&(b=m(c),b.remove());if(m.hasPagelet(c))if(b=m(c),b.isUnloading())b.on("afterunload",this._doArrive,this,a);else throw Error("unbeliveble");else this._doArrive(a)},_doArrive:function(b){var c,d,f,h,j,i,p,s;c=b.id||null;d=b.content?b.content:b.container_id?e(b.container_id,b.doc):null;b.html=d;d=m(c);if(f=b.hook)for(h in f){j=f[h];p=j.length;for(i=-1;++i<p;){s=j[i];try{d.on(h,u(s)?s:new Function("pagelet",
s),a,d)}catch(g){throw Error("Error on add script:"+j[i]);}}}d.arrive(b);d.on("afterload",function(a){this.emit("arrived",a)},this,c)}});return c});a("ErrorUtils",["wrapFunction"],function(a,b,c){function d(a){if(!a)return[];a=a.split(/\n\n/)[0].replace(/[\(\)]|\[.*?\]|^\w+:\s.*?\n/g,"").split("\n");return a=s(a,function(a){var b,c,d,a=a.trim();/(:(\d+)(:(\d+))?)$/.test(a)&&(c=RegExp.$2,d=RegExp.$4,a=a.slice(0,-RegExp.$1.length));if(u.test(a)||/(.*)(@|\s)[^\s]+$/.test(a))a=a.substring(RegExp.$1.length+
1),b=/(at)?\s*(.*)([^\s]+|$)/.test(RegExp.$1)?RegExp.$2:"";a={identifier:b,script:a,line:c,column:d};w&&w(a);a.text="    at"+(a.identifier?" "+a.identifier+" (":" ")+a.script+(a.line?":"+a.line:"")+(a.column?":"+a.column:"")+(a.identifier?")":"");return a})}function f(a){if(a){if(a._originalError)return a}else return{};var b=d(a.stackTrace||a.stack),c=!1;if(a.framesToPop){for(var e=a.framesToPop,h;0<e&&0<b.length;)h=b.shift(),e--,c=!0;v.test(a.message)&&2===a.framesToPop&&h&&l.test(h.script)&&(a.message+=
" at "+h.script+(h.line?":"+h.line:"")+(h.column?":"+h.column:""));delete a.framesToPop}e={line:a.lineNumber||a.line,column:a.columnNumber||a.column,name:a.name,message:a.message,type:a.type,script:a.fileName||a.sourceURL||a.script,stack:s(b,function(a){return a.text}).join("\n"),stackFrames:b,guard:a.guard,guardList:a.guardList,extra:a.extra,snapshot:a.snapshot};"string"!==typeof e.message&&(e.messageObject=e.message,e.message=""+e.message);w&&w(e);c&&(delete e.script,delete e.line,delete e.column);
b[0]&&(e.script=e.script||b[0].script,e.line=e.line||b[0].line,e.column=e.column||b[0].column);e._originalError=a;for(var m in e)null==e[m]&&delete e[m];return e}function e(a){if(C)return!1;0<n.length&&(a.guard=a.guard||n[0],a.guardList=n.slice());a=f(a);z.length>q&&z.splice(q/2,1);z.push(a);C=!0;for(var b=0;b<r.length;b++)try{r[b](a)}catch(c){}C=!1;return!0}function h(a,b,c,d,m){n.unshift(m||p);D=!0;var j;if(i.nocatch||/nocatch/.test(location.search)){try{j=a.apply(b,c||[])}finally{n.shift(),D=0!==
n.length}return j}try{return j=a.apply(b,c||[])}catch(s){b=f(s),d&&d(b),a&&(b.callee=a.toString().substring(0,100)),c&&(b.args=Array.prototype.slice.call(c).toString().substring(0,100)),b.guard=n[0],b.guardList=n.slice(),e(b)}finally{n.shift(),D=0!==n.length}}function m(a,b,c){b=b||a.name||g;return function(){return h(a,c||this,arguments,null,b)}}function j(a,b,c,d,f){f=f||{};f.message=f.message||a;f.script=f.script||b;f.line=f.line||c;f.column=f.column||d;f.guard=B;f.guardList=[B];e(f)}var i={},
p="<anonymous guard>",g="<generated guard>",B="<window.onerror>",l=/^https?:\/\//i,v=/^Type Mismatch for/,u=/(.*?)(\s)(?:Unknown script code|Function code|eval code)$/,r=[],w,z=[],q=50,n=[],D=!1,C=!1;b("wrapFunction").setWrapper(m,"entry");k.onerror=j;c.exports={ANONYMOUS_GUARD_TAG:p,GENERATED_GUARD_TAG:g,GLOBAL_ERROR_HANDLER_TAG:B,addListener:function(a,b){r.push(a);b||o(z,a)},setSourceResolver:function(a){w=a},applyWithGuard:h,guard:m,history:z,inGuard:function(){return D},normalizeError:f,onerror:j,
reportError:e,setConfig:function(a,b){i[a]=b}}});a("wrapFunction",[],function(a,b,c){function d(a,b,c){b=b||"default";return function(){var a=b in e?e[b](a,c):a;return a.apply(this,arguments)}}var e={};d.setWrapper=function(a,b){e[b||"default"]=a};c.exports=d});var H=c("BigPipe");l.BigPipe=new H;l.BigPipe.ErrorUtils=c("ErrorUtils")})(this,window,document);
(function(l,k){function g(a,c,d,e){var f,h,g;h=c.length;f=i[a]||{};f.name=a;f.factory=d;f.deps=c;f.flag=e||n;f.waiting=h;j[a]=f;delete i[a];for(d=0;d<h;d++)g=c[d],(e=j[g])?g=e.waiting:(e=i[g]=i[g]||{},g=!0),g?(e=e.refs=e.refs||[],e.push(a)):f.waiting--;f.waiting||b(f)}function b(a){var d=a.refs,e=a.name,f;a.flag&o&&(c(e),delete j[e]);if(d)for(e=0,f=d.length;e<f;e++)(a=j[d[e]])&&a.waiting&&(--a.waiting||b(a))}function c(a){var b,d,e,f,h,i,g;b=j[a];if(!b)throw Error('Requiring unknown module "'+a+'"');
if(b.error)throw Error('Requiring module "'+a+'" which threw an exception');if(b.waiting)throw Error('Requiring module "'+a+'" with unresolved dependencies');if(b.hasOwnProperty("exports"))return b.exports;b.exports=d={};a=b.deps;i=a.length;h=-1;for(f=[];++h<i;)e=a[h],f.push("module"===e?b:"exports"===e?d:c(e));v&&!v.inGuard()?v.applyWithGuard(function(){g=b.factory.apply(this,f);void 0!==g&&g!==d&&(b.exports=g)},this,f):(g=b.factory.apply(this,f),void 0!==g&&g!==d&&(b.exports=g));return b.exports}
function a(a,b){function d(){--h||e()}function e(){var d=[],h;for(h=0;h<f;h++)d.push(c(a[h]));b&&b.apply(this,d)}var f,h,j,i;if(h=f=a.length)for(j=0;j<f;j++)i=a[j],k.loadModule(i,d);else e()}function e(b,c){w?(g("__mod_"+r++,b,c,o),a(b)):q.push([b,c])}function h(){if(!w){w=!0;e.onready&&e.onready();var b,c,d,f;for(b=0,c=q.length;b<c;b++)d=q[b],f=d[0],d=d[1],g("__mod_"+r++,f,d,o),a(f);q=null}}function f(a,b){j[a]={exports:b,waiting:0}}function d(){k.log.apply(k,arguments)}var j={},i={},q=[],n=0,o=
1,v=k.ErrorUtils,r=0,u,w=!1;document.addEventListener?u=function(){document.removeEventListener("DOMContentLoaded",u,!1);h()}:document.attachEvent&&(u=function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",u),h())});c.__debug__=j;c.__waiting__=i;document.addEventListener?(document.addEventListener("DOMContentLoaded",u,!1),window.addEventListener("load",h,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",u),window.attachEvent("onload",h));f("global",
l);f("module",1);f("exports",1);f("require",c);f("requireAsync",a);f("requireLazy",e);l.define=g;l.require=c;l.requireAsync=a;l.requireLazy=e;l.__d=function(a,b,c){return g(a,"global,module,exports,require,requireAsync,requireLazy".split(",").concat(b),c)};l.console||(l.console={log:d,error:d,dir:d})})(window,BigPipe);
__d("common.js.config",[],function(l,k,g){function b(a){var a=a||{},e;for(e in a)a.hasOwnProperty(e)&&(c[e]=a[e]);b=function(){}}var c={};return g={__config__:c,init:b,get:function(a,b){return c.hasOwnProperty(a)?c[a]:b}}});
__d("common.js.events",[],function(l,k,g){function b(a,b){var c=a[0],e=a[1],b=a[2].concat(b);try{return c.apply(e,b)}catch(i){setTimeout(function(){throw i;},0)}}function c(c,f){var d=a[c],j,i;if(!d)return!0;f=e.call(arguments,1);d=d.cbs;j=d.length;for(i=!0;j--;)d[j]&&(i=!1!==b(d[j],f)&&i);return!!i}var a={},e=[].slice;return g={on:function(c,f,d){var j,i,g;if(!(j=a[c]))a[c]=j={args:null,cbs:[]};d=d||l;i=[f,d,e.call(arguments,3)];(g=j.args)?b(i,g):j.cbs.push(i)},un:function(b,c){var d=a[b],e;if(!d)return!0;
if(1==arguments.length)d.cbs=[];else{d=d.cbs;for(e=d.length;e--;)d[e]&&d[e][0]===c&&d.splice(e,1)}},emit:function(a,b){return c.apply(this,arguments)},done:function(b,f){var d,j,i;if(!(d=a[b]))a[b]=d={args:f,cbs:[]};j=d.cbs;i=j.length;f=e.call(arguments,1);d.args=f;c.apply(this,arguments);d.cbs=j.slice(i)},undo:function(b){b=a[b];if(!b)return!1;b.args=null}}});
__d("common.js.pageEvents",["common.js.events"],function(l,k,g,b){function c(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent?a.attachEvent("on"+b,c):a["on"+b]=c}function a(){var a={},b;b=null!=window.innerHeight?{width:window.innerWidth,height:window.innerHeight}:"CSS1Compat"==document.compatMode?{width:document.documentElement.clientWidth,height:document.documentElement.clientHeight}:{width:document.body.clientWidth,height:document.body.clientHeight};var c;c=null!=window.pageXOffset?
{scrollLeft:window.pageXOffset,scrollTop:window.pageYOffset}:"CSS1Compat"==document.compatMode?{scrollLeft:document.documentElement.scrollLeft,scrollTop:document.documentElement.scrollTop}:{scrollLeft:document.body.scrollLeft,scrollTop:document.body.scrollTop};a.height=b.height;a.width=b.width;a.scrollLeft=c.scrollLeft;a.scrollTop=c.scrollTop;return a}function e(b,c){var e;e=a();e.originalEvent=b&&b.originalEvent;i?clearTimeout(i):d.emit("viewport.startchange",e);d.emit("viewport.change",e);i=setTimeout(function(){i=
0;e=a();e.originalEvent=b&&b.originalEvent;d.emit("viewport.deferchange",e)},c||20)}function h(a,b){function c(){n=0;d.emit("page.endchange",a)}var b=b||0,e=+new Date+b;n||d.emit("page.startchange",a);d.emit("page.change",a);o<e&&(o=e,b?(clearTimeout(n),n=setTimeout(c,b)):c())}function f(){this.emitViewportChange=e;this.emitPageChange=h;this.getViewport=a}for(var d=b("common.js.events"),l=[[window,"scroll","window.scroll"],[window,"resize","window.resize"]],j,i,k=l.length;k--;){var q,g=l[k],b=g[0];
j=g[1];q=g[2];c(b,j,function(a){d.emit(q,{originalEvent:a})})}var n=0,o=0;d.on("window.scroll",e);d.on("window.resize",e);d.done("window.init",a());f.prototype=d;return g=new f});
__d("common.js.queue",[],function(l,k,g){function b(b,c,d){a.push([b,c,d]);if(!e){for(e=!0;b=a.length;){for(c=0;c<b;c++)d=a[c],d[0].apply(d[1],d[2]);a.splice(0,b)}e=!1}}function c(a,b,d){var e=Array.prototype.slice;c=function(a,b,c){var d=e.call(arguments,1);return e.apply(a,d)};return c.apply(this,c(arguments,0))}var a=[],e=!1;return g={call:function(a,e){return b(a,e,c(arguments,2))},apply:b}});
__d("common.js.lazy",["common.js.pageEvents","common.js.queue"],function(l,k,g,b,c,a){function e(){p==r&&(p=u,a(["common.js.jquery"],function(){p=w;e=h;i.call(e)}))}function h(){var a,b,c;for(a=0,b=q.length;a<b;a++){c=q[a];void 0===c.offsetTop&&c.valid&&(c.offsetTop=d(c.elem));var e;if(e=void 0!==c.offsetTop)c.valid?o.scrollTop+o.height+50>c.offsetTop?(i.call(c.callback,l,c.elem),e=!0):e=!1:e=!0;e&&(q.splice(a,1),a--,b--)}}function f(a){a.setAttribute("src",a.getAttribute("data-src"))}function d(a){var b=
0,c;try{for(;0>=b;){if(!a||!(c=$(a).offset()))return;b=c.top;a=a.parentNode}}catch(e){return}return b}var j=b("common.js.pageEvents"),i=b("common.js.queue"),q=[],n=0,o,v=!1,r=1,u=2,w=3,p=r;j.on("viewport.change",function(){v||(o=j.getViewport(),i.call(e))});j.on("page.endchange",function(){if(!v){for(var a=0,b=q.length;a<b;a++)q[a].offsetTop=void 0;i.call(e)}});return g={add:function(a,b){"length"in a||(a=[a]);for(var c=0,d,h=a.length;c<h;c++)d={elem:a[c],callback:b||f,key:n,valid:!0},q.push(d);o||
(o=j.getViewport());i.call(e);return n++},remove:function(a){for(var b=q.length;b--;)q[b].key===a&&(q[b].valid=!1)},disable:function(){v=!0},enable:function(){v=!1}}});
__d("common.js.bigRender",["common.js.lazy"],function(l,k,g,b){function c(b){var c=document.getElementById(b.id);a(c,"g-bigrender");var d=e.add(c,function(){b.load();b.on("display",function(){if(c){var a=c.className;0!=a.length&&("g-bigrender"==a?c.className="":a.match(/(^|\s)g-bigrender(\s|$)/)&&(c.className=a.replace(/(^|\s)g-bigrender(\s|$)/," ")))}})});b.on("unload",function(){e.remove(d)})}function a(a,b){if(a){var c=a.className;0==c.length?a.className=b:c==b||c.match(RegExp("(^|\\s)"+b+"(\\s|$)"))||
(a.className=c+" "+b)}}var e=b("common.js.lazy");return g={add:function(a){try{if(a.parent)a.parent.on("display",function(){c(a)});else c(a);return!0}catch(b){return setTimeout(function(){throw b;},0),!1}}}});
__d("common.js.load",[],function(l,k,g){var b=document;return g={loadScript:function(c,a,e){a=b.createElement("script");b.getElementsByTagName("head");e=e||{};a.type="text/javascript";a.src=c;var c=a,a=null,h;for(h in e)a=b.createAttribute(h),a.value=e[h],c.setAttributeNode(a);b.body.appendChild(c)},loadScriptString:function(c){var a=b.createElement("script");a.type="text/javascript";try{a.appendChild(b.createTextNode(c))}catch(e){a.text=c}b.body.appendChild(a)},loadStyle:function(){},loadStyleString:function(c){var a=
b.createElement("style"),e=b.getElementsByTagName("head")[0];a.type="text/css";try{a.appendChild(b.createTextNode(c))}catch(h){a.styleSheet.cssText=c}e.appendChild(a)}}});
__d("common.js.format",[],function(){function l(k,g){var b=Array.prototype.slice.call(arguments,1),c=Object.prototype.toString;return b.length?(b=1==b.length?null!==g&&/\[object Array\]|\[object Object\]/.test(c.call(g))?g:b:b,k.replace(/#\{(.+?)\}/g,function(a,e){var h,f,d,j,g;if(!b)return"";h=e.split("|");f=b[h[0]];"[object Function]"==c.call(f)&&(f=f(h[0]));for(d=1,j=h.length;d<j;++d)g=l.filters[h[d]],"[object Function]"==c.call(g)&&(f=g(f));return"undefined"==typeof f||null===f?"":f})):k}l.filters=
{escapeJs:function(k){if(!k||"string"!=typeof k)return k;var g,b,c,a=[];for(g=0,b=k.length;g<b;++g)c=k.charCodeAt(g),255<c?a.push(k.charAt(g)):a.push("\\x"+c.toString(16));return a.join("")},escapeString:function(k){return!k||"string"!=typeof k?k:k.replace(/["'<>\\\/`]/g,function(g){return"&#"+g.charCodeAt(0)+";"})},escapeUrl:function(k){return!k||"string"!=typeof k?k:encodeURIComponent(k)},toInt:function(k){return parseInt(k,10)||0}};l.filters.js=l.filters.escapeJs;l.filters.e=l.filters.escapeString;
l.filters.u=l.filters.escapeUrl;l.filters.i=l.filters.toInt;return l});
__d("common.js.log",["common.js.config"],function(l,k,g,b){function c(a,b){for(var c in b)a[c]=b[c];return a}var a=window,e=b("common.js.config").get("logConf",{level:1,page:"index"}),h={ts:"1ug",pid:"113"};return function(b,d){function g(){a["__logImg_"+k]=null;a["__logImg_"+k]=void 0}var i={},k=b.r=+new Date,n=a["__logImg_"+k]=new Image,l=[],v=d&&d.url||"/images/track.gif",r=d&&d.callback,i=c(i,e),i=c(i,b);"http://nsclick.baidu.com/h.gif"==v&&(i=c(h,i));for(var u in i)"thisUrl"!=u&&l.push(encodeURIComponent(u)+
"="+encodeURIComponent(i[u]));n.onload=function(){g();r&&r(!0)};n.onerror=function(){g();r&&r(!1)};n.src=v+"?"+l.join("&");n=l=null}});
__d("common.js.detect",["common.js.log"],function(l,k,g,b){function c(){-1<document.getElementById("_amd").style.display.indexOf("none")&&(a=!0);e.parentNode.removeChild(e);a&&h({type:"xblock"},{url:"http://www.hao123.com/v.gif"})}var a=!1,e=void 0,h=b("common.js.log");return function(){e=document.createElement("IMG");e.id="_amd";e.src="http://www.hao123.com/adimages/textlink-ads.gif";e.style.width="1px";e.style.height="1px";e.style.top="-1000px";e.style.left="-1000px";document.body.appendChild(e);
setTimeout(c,100)}});__d("common.js.secure",[],function(l,k,g){k.exports.encrypt=function(b){var c,a;if(!b)return!1;c=[];for(a=b.length;a--;)c.push(encodeURIComponent(String.fromCharCode(b.charCodeAt(a)-10)));return c.join("")};k.exports.decrypt=function(b){var c,a;if(!b)return!1;c=[];b=decodeURIComponent(b);for(a=b.length;a--;)c.push(String.fromCharCode(b.charCodeAt(a)+10));return c.join("")};return g});
__d("common.js.scroll",[],function(l,k,g){function b(b){var h,f,d,g,i;function k(a,g,i){"function"===typeof b.fn&&b.fn.call(this);var j=(h||r.height())-o.height();0<=a&&a<=j?(o.css("top",a+"px"),v.css("top",-((v.height()-l.height())/j*a)+"px"),f=a,i&&c(g)):(0>a?(d.x=0,d.y=0,o.css("top","5px"),v.css("top","0px")):(o.css("top",j+5+"px"),v.css("top",-((v.height()-l.height())/j*j)+"px")),u||window.setTimeout(function(){u=3},500),3>u&&i?c(g):u=0)}d={x:0,y:0};g=0;i=0;f=0;h=0;var l=b.box.parent(),o=l.find("div[data-scroll=auto-scroll-btn]"),
v=l.find("div[data-scroll=conten-scroll-box]"),r=l.find("div[data-scroll=auto-scroll-box]");l.find("div[data-scroll=conten-scroll-box]");var u=0;l.on("mouseenter",function(){o.show();r.show()}).on("mouseleave",function(){o.hide();r.hide()});r.on("click",function(a){a=window.event||a;k(a.clientY+$(window).scrollTop()-(l.offset().top+4),a)});o.on("mousedown",function(b){var b=window.event||b,c=b.clientY;a();i=c-f;$(document).on("mousemove",function(a){a=window.event||a;d.x=a.clientX;d.y=a.clientY});
g=setInterval(function(){k(d.y-i,b)},1)});(function(a,b,c){var e="undefined"!=typeof document.body.style.MozUserSelect;a.addEventListener?a.addEventListener(e?"DOMMouseScroll":b,c,!1):a.attachEvent("on"+b,c);return c})(b.box[0],"mousewheel",function(a){var b;b=a||event;b=-10*(b.wheelDelta?b.wheelDelta/120:-(0==b.detail%3?b.detail/3:b.detail))+parseInt(o.css("top"));k(b,a,!0)});$(document).on("mouseup",function(){document.all?$("body")[0].onselectstart=null:$("body").removeClass("user-select-none");
$(document).unbind("mousemove");clearInterval(g)})}function c(a){a.preventDefault?a.preventDefault():a.returnValue=!1;return!1}function a(){document.all?$("body")[0].onselectstart=function(){return!1}:$("body").addClass("user-select-none")}return g={auto:function(a){b(a)}}});
__d("common.js.juziAX",[],function(l,k,g){return g={exist:function(){try{var b=this.getObject();if(b&&b.GetPath())return!0}catch(c){}return!1},getObject:function(){if(!this.isValidHost())return!1;try{return new ActiveXObject("JuziAgent.Agent")}catch(b){}try{navigator.plugins&&navigator.plugins.refresh(!1);if(navigator.mimeTypes&&navigator.mimeTypes["application/x-juziagent-plugin"])return this.makeNewEmbed();if(navigator.plugins)for(var c=0;c<navigator.plugins.length;c++)if(navigator.plugins[c][0].type&&
"application/x-juziagent-plugin"==navigator.plugins[c][0].type)return this.makeNewEmbed()}catch(a){}return null},makeNewEmbed:function(){var b=document.getElementById("JuziAgentPluginNew");if(b)return b;b=document.createElement("embed");b.style.visibility="hidden";b.type="application/x-juziagent-plugin";b.width=0;b.height=0;b.setAttribute("progid","JuziAgent.Agent");b.setAttribute("id","JuziAgentPluginNew");document.body.appendChild(b);return b},isValidHost:function(){var b=window.location.hostname.toLowerCase();
return"hao123.com"==b||!0==this.strEndWith(b,".hao123.com")||"baidu.com"==b||!0==this.strEndWith(b,".baidu.com")||"123juzi.com"==b||!0==this.strEndWith(b,".123juzi.com")?!0:!1},strEndWith:function(b,c){return null==c||""==c||0==b.length||c.length>b.length?!1:b.substring(b.length-c.length)==c?!0:!1},callBrowser:function(b){try{if(b){var c=this.getObject();if(c&&c.OpenUrl(b))return!0}}catch(a){}return!1},monitorBrowser:function(b){try{var c=this,a=function(){c.exist()?c.callBrowser(b):setTimeout(a,
1E3)};setTimeout(a,3E3)}catch(e){}},checkRunOnJuzi:function(){try{return!(!window.external||!window.external.ExtGetAppPath||!window.external.ExtGetAppPath())}catch(b){}return!1},checkExist:function(b){try{var c=this.getObject();if(c&&c.CheckExist(b))return!0}catch(a){}return!1},getCid:function(b){try{var c=this.getObject();if(c)return c.GetCid(b)}catch(a){}return""},createIconNumber:function(b,c){try{var a=this.getObject();if(a&&a.CreateIconNumber(b,c))return!0}catch(e){}return!1},createShortcut:function(b,
c){try{var a=this.getObject();if(a&&a.CreateShortcut(b,c))return!0}catch(e){}return!1}}});__d("common.js.supportthree",[],function(l,k,g){return g=function(){var b=document.createElement("div"),c=["Khtml","Ms","O","Moz","Webkit"],a=c.length;return function(e){if(e in b.style)return b=null,!0;for(e=e.replace(/^[a-z]/,function(a){return a.toUpperCase()});a--;)if(c[a]+e in b.style)return b=null,!0;b=null;return!1}}()});window.js_oRIVnLVrsE&&window.js_oRIVnLVrsE(!0);
