
var require,define;(function(global){var head=document.getElementsByTagName('head')[0],baseUrl,loadingMap={},factoryMap={},modulesMap={},scriptsMap={},resMap={},pkgMap={};function createScript(url,onerror){if(url in scriptsMap)return;scriptsMap[url]=true;var script=document.createElement('script');if(onerror){var tid=setTimeout(onerror,require.timeout);script.onerror=function(){clearTimeout(tid);onerror();};script.onreadystatechange=function(){if(this.readyState=='complete'){clearTimeout(tid);}}}
script.type='text/javascript';script.charset='UTF-8';script.src=url;head.appendChild(script);return script;}
function loadScript(id,callback,onerror){var queue=loadingMap[id]||(loadingMap[id]=[]);queue.push(callback);var res=resMap[id]||{};var pkg=res.pkg;var url;if(pkg){url=pkgMap[pkg].url;}else{url=res.url||id;}
var base=baseUrl||'';(url.slice(0,7)!='http://')&&(url=base+url);createScript(url,onerror&&function(){onerror(id);});}
define=function(id,factory){factory=arguments[2]||factory;factoryMap[id]=factory;var queue=loadingMap[id];if(queue){for(var i=0,n=queue.length;i<n;i++){queue[i]();}
delete loadingMap[id];}};define.amd=true;require=function(id){id=require.alias(id);var mod=modulesMap[id];if(mod){return mod.exports;}
var factory=factoryMap[id];if(!factory){throw'[ModJS] Cannot find module `'+id+'`';}
mod=modulesMap[id]={exports:{}};var ret=(typeof factory=='function')?factory.apply(mod,[require,mod.exports,mod]):factory;if(ret){mod.exports=ret;}
return mod.exports;};require.async=function(names,onload,onerror){if(typeof names=='string'){names=[names];}
for(var i=0,n=names.length;i<n;i++){names[i]=require.alias(names[i]);}
var needMap={};var needNum=0;function findNeed(depArr){for(var i=0,n=depArr.length;i<n;i++){var dep=depArr[i];var child=resMap[dep];if(child&&'deps'in child){findNeed(child.deps);}
if(dep in factoryMap||dep in needMap){continue;}
needMap[dep]=true;needNum++;loadScript(dep,updateNeed,onerror);}}
function updateNeed(){if(0==needNum--){var args=[];for(var i=0,n=names.length;i<n;i++){args[i]=require(names[i]);}
onload&&onload.apply(global,args);}}
findNeed(names);updateNeed();};require.resourceMap=function(obj){var k,col;col=obj.res;for(k in col){if(col.hasOwnProperty(k)){resMap[k]=col[k];}}
col=obj.pkg;for(k in col){if(col.hasOwnProperty(k)){pkgMap[k]=col[k];}}};require.setBaseUrl=function(url){baseUrl=url;};require.loadJs=function(url){createScript(url);};require.loadCss=function(cfg){if(cfg.content){var sty=document.createElement('style');sty.type='text/css';if(sty.styleSheet){sty.styleSheet.cssText=cfg.content;}else{sty.innerHTML=cfg.content;}
head.appendChild(sty);}
else if(cfg.url){var link=document.createElement('link');link.href=cfg.url;link.rel='stylesheet';link.type='text/css';head.appendChild(link);}};require.alias=function(id){return id};require.timeout=5000;})(window);/*  |xGv00|3da46e29a4207fec204e3c48dc6159d6 */