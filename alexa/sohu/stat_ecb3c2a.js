
define('gdt:mod/stat.js',function(require,exports,module){var J=require("jquery");function report(timepot){var url="http://isdspeed.qq.com/cgi-bin/r.cgi?flag1=175&flag2=33&flag3=24&1={1}&2={2}",t0,t1,r=Math.random()*100;t0=timepot[1]-timepot[0];t1=timepot[2]-timepot[1];url=url.replace("{1}",t0).replace("{2}",t1);url+='&r='+Math.random();if(r<1){GDT.pingreq(url);}
J(document).ready(function(){setTimeout(function(){var rate=30;setTimingRpt(175,33,7,8,{rate:rate});},500);});};function resourceTimeTest(url){if(window.performance&&window.performance.getEntriesByName){var t=window.performance.getEntriesByName(url)[0];if(t){var fe=t.fetchStart-t.startTime,duration=t.responseEnd-t.fetchStart,r=Math.random()*100,arr;var d=t.domainLookupEnd-t.domainLookupStart;var c=t.requestStart-t.connectStart;var req=t.responseStart-t.requestStart;var resp=t.responseEnd-t.responseStart;arr=[fe,duration,d,c,req,resp];if(r<10&&req>2){var url='http://isdspeed.qq.com/cgi-bin/r.cgi?flag1=175&flag2=33&flag3=23&{req}&r='+Math.random(),req="",reqarr=[];J.each(arr,function(k,v){reqarr.push((k+1)+"="+parseInt(v,10));});req=reqarr.join("&");url=url.replace('{req}',req);GDT.pingreq(url);}}}}
function setTimingRpt(f1,f2,f3_ie,f3_c,opts){var _t,_p=(window.webkitPerformance?window.webkitPerformance:window.msPerformance),_ta=["navigationStart","unloadEventStart","unloadEventEnd","redirectStart","redirectEnd","fetchStart","domainLookupStart","domainLookupEnd","connectStart","connectEnd","requestStart","responseStart","responseEnd","domLoading","domInteractive","domContentLoadedEventStart","domContentLoadedEventEnd","domComplete","loadEventStart","loadEventEnd"],_da=[],_t0,_tmp,f3=f3_ie;opts=opts||{};_p=(_p?_p:window.performance);if(_p&&(_t=_p.timing)){if(typeof _t.msFirstPaint!="undefined"){_ta.push("msFirstPaint");}else if(window.chrome){var _cl=window.chrome.loadTimes();if(_cl.firstPaintTime){_ta.push("firstPaintTime");_t.firstPaintTime=parseInt(_cl.firstPaintTime*1000,10);}}
if(!_t.domContentLoadedEventStart){_ta.splice(15,2,'domContentLoaded','domContentLoaded');}else{if(f3_c){f3=f3_c;}}
_t0=_t[_ta[0]];for(var i=1,l=_ta.length;i<l;i++){_tmp=_t[_ta[i]];_tmp=(_tmp?(_tmp-_t0):0);if(_tmp>0){_da.push(i+'='+_tmp);}}
var url='http://isdspeed.qq.com/cgi-bin/r.cgi?flag1='+f1+'&flag2='+f2+'&flag3='+f3+'&'+_da.join('&');var rate=opts.rate||100;var r=Math.random()*rate;if(r<1){var _img=new Image();setTimeout(function(){_img.src=url;},0);}}};module.exports={report:report,resourceTimeTest:resourceTimeTest};});/*  |xGv00|f96acde8ac8fe43adc113875e89e5389 */