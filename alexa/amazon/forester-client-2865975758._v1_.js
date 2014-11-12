(function(CSM,w){var JSON,uex=CSM.uex,uet=CSM.uet,foresterClientScope="ue_frst";
CSM.ue.sid=CSM.ue_sid;
CSM.ue.mid=CSM.ue_mid;
CSM.ue.furl=CSM.ue_furl;
CSM.ue.sn=CSM.ue_sn;
uet&&uet("bb",foresterClientScope,{wb:1});
JSON={};
(function(){function f(n){return n<10?"0"+n:n;
}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null;
};
String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf();
};
}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;
function quote(string){escapable.lastIndex=0;
return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];
return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4);
})+'"':'"'+string+'"';
}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];
if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key);
}if(typeof rep==="function"){value=rep.call(holder,key,value);
}switch(typeof value){case"string":return quote(value);
case"number":return isFinite(value)?String(value):"null";
case"boolean":case"null":return String(value);
case"object":if(!value){return"null";
}gap+=indent;
partial=[];
if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;
for(i=0;
i<length;
i+=1){partial[i]=str(i,value)||"null";
}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";
gap=mind;
return v;
}if(rep&&typeof rep==="object"){length=rep.length;
for(i=0;
i<length;
i+=1){if(typeof rep[i]==="string"){k=rep[i];
v=str(k,value);
if(v){partial.push(quote(k)+(gap?": ":":")+v);
}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);
if(v){partial.push(quote(k)+(gap?": ":":")+v);
}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";
gap=mind;
return v;
}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(value,replacer,space){var i;
gap="";
indent="";
if(typeof space==="number"){for(i=0;
i<space;
i+=1){indent+=" ";
}}else{if(typeof space==="string"){indent=space;
}}rep=replacer;
if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify");
}return str("",{"":value});
};
}}());
var ue=CSM.ue,VERSION=CSM.ue_log_idx?"2":"1",FORESTER_URL="//"+ue.furl+"/1/batch/"+VERSION+"/OE/",GROUPS_SEP="/",GROUP_SEP="$",NAMESPACES_SEP="&",NAMESPACE_SEP="=",DATAS_SEP=",",PART_SEP="_",SEP=":",PERCENT_CHAR="%",MAX_WYW_SIZE=2000,PUBLISH_PERIOD=60000,QUEUE_PURGER_PERIOD=100,MIN_DATA_SIZE=5,MAX_NAMESPACE_LOG_COUNT=1000,currentWywSize,groups,calls=0,sends=0,logCount={},size=function(stringOrNumber){return(""+stringOrNumber).length;
},json=(w.JSON&&w.JSON.stringify)||(JSON&&JSON.stringify),getRequestId=function(options){return(options&&options.r)||ue.rid;
},getSessionId=function(options){return(options&&options.s)||ue.sid;
},getMarketplaceId=function(options){return(options&&options.m)||ue.mid;
},getServerName=function(options){return(options&&options.sn)||ue.sn;
},log=function(data,namespace,options){var relativeTime=options&&options.t?options.t:ue.d();
logWithTimeNonBlocking(data,namespace,options,relativeTime);
},tagwrongenc=0,tagnotnativenc=0,tagencnotfunc=0,logWithTimeNonBlocking=function(data,namespace,options,relativeTime,requestId){if(CSM.ue_lnb){setTimeout(function(){logWithTime(data,namespace,options,relativeTime,requestId);
},0);
}else{logWithTime(data,namespace,options,relativeTime,requestId);
}},logWithTime=function(data,namespace,options,relativeTime,requestId){if(requestId){options||(options={});
options.r||(options.r=requestId);
}var logCountKey=getRequestId(options)+":"+namespace;
logCount[logCountKey]=(logCount[logCountKey]||0)+1;
if(logCount[logCountKey]>MAX_NAMESPACE_LOG_COUNT){var message="ns '"+namespace+"' reached the max no of calls ("+MAX_NAMESPACE_LOG_COUNT+") - aborting log of "+data;
if(logCount[logCountKey]==(MAX_NAMESPACE_LOG_COUNT+1)){log({m:message,f:"forester-client.js",logLevel:"ERROR"},"jserr",options);
}return;
}var msr=getMarketplaceId(options)+SEP+getSessionId(options)+SEP+getRequestId(options),partIndex=0,partCount,time=""+relativeTime,encData=data,partData,restData,partSize,dataGroup,type="s",typeofData=typeof data,sendNow=options&&options.n||false,sendViaAjax=!options||!options.img?1:0,requiredSizeForData,currentAvailableSize,availableSizeForDataInEmptyWyw;
if(CSM.ue_fcsn&&getServerName(options)){msr+=SEP+getServerName(options);
}if(typeofData=="undefined"){encData="";
type="u";
}else{if(data==null){encData="";
type=null;
}else{if(typeofData=="boolean"){encData=data?"1":"0";
type="b";
}else{if(typeofData=="number"&&!isNaN(data)&&isFinite(data)){encData=""+data;
type="n";
}else{if(typeofData=="object"){if(json){encData=json(data);
type="j";
}else{encData=""+data;
}}}}}}encData=w.encodeURIComponent(encData);
availableSizeForDataInEmptyWyw=MAX_WYW_SIZE-size(msr)-size(namespace)-size(time)-2;
if(type!=null){availableSizeForDataInEmptyWyw-=(size(type)+2);
}while(encData!=""){partIndex++;
requiredSizeForData=getRequiredSizeForData(msr,namespace,encData,time,type);
currentAvailableSize=MAX_WYW_SIZE-currentWywSize;
if(requiredSizeForData<=currentAvailableSize){partData=encData;
restData="";
currentAvailableSize-=requiredSizeForData;
currentWywSize+=requiredSizeForData;
}else{if(size(encData)<=availableSizeForDataInEmptyWyw){send(sendViaAjax,sendNow);
continue;
}else{partSize=currentAvailableSize-(requiredSizeForData-size(encData));
if(MIN_DATA_SIZE<=partSize){partSize-=encData.charAt(partSize-1)==PERCENT_CHAR?1:encData.charAt(partSize-2)==PERCENT_CHAR?2:0;
partData=encData.substr(0,partSize);
restData=encData.substr(partSize);
currentAvailableSize=0;
currentWywSize=MAX_WYW_SIZE;
partCount||(partCount=1+Math.ceil(size(restData)/availableSizeForDataInEmptyWyw));
}else{if(MAX_WYW_SIZE-(requiredSizeForData-size(encData))<MIN_DATA_SIZE){return;
}send(sendViaAjax,sendNow);
continue;
}}}groups[msr]||(groups[msr]=[]);
if(CSM.ue_log_idx){ue.ue_idx=ue.ue_idx||{};
ue.ue_idx[namespace]=ue.ue_idx[namespace]||0;
dataGroup=ue.ue_idx[namespace]+SEP+(type!=null?type+SEP+partData+SEP+time:time);
ue.ue_idx[namespace]+=1;
}else{dataGroup=type!=null?type+SEP+partData+SEP+time:time;
}if(partCount){dataGroup+=SEP+partIndex+PART_SEP+partCount;
}if(!groups[msr][namespace]){groups[msr][namespace]=dataGroup;
}else{groups[msr][namespace]+=DATAS_SEP+dataGroup;
}if(currentAvailableSize==0||sendNow){send(sendViaAjax,sendNow);
}encData=restData;
}calls++;
},replay=function(){if(!ue.lr){return;
}var length=ue.lr.length,args,i;
for(i=0;
i<length;
i++){args=ue.lr[i];
logWithTimeNonBlocking(args[1],args[2],args[3],args[4],args[5]);
}ue.lr=null;
},getRequiredSizeForData=function(msr,namespace,encData,time,type){var requiredSizeForData=size(time);
if(type!=null){requiredSizeForData+=size(type)+size(encData)+2;
}if(!groups[msr]){requiredSizeForData+=size(msr)+size(namespace)+2;
if(groups.length>0){requiredSizeForData++;
}}else{if(!groups[msr][namespace]){requiredSizeForData+=size(namespace)+1;
if(groups[msr].length>0){requiredSizeForData++;
}}else{requiredSizeForData++;
}}return requiredSizeForData;
},init=function(){currentWywSize=0;
groups=[];
},buildUrlToForester=function(){if(currentWywSize==0){return;
}var wyw="",group,first,msrt,namespace;
for(msrt in groups){if(groups.hasOwnProperty(msrt)){if(wyw!=""){wyw+=GROUPS_SEP;
}wyw+=msrt+GROUP_SEP;
group=groups[msrt];
first=true;
for(namespace in group){if(group.hasOwnProperty(namespace)){if(!first){wyw+=NAMESPACES_SEP;
}first=false;
wyw+=namespace+NAMESPACE_SEP+group[namespace];
}}}}ue.w=wyw;
return FORESTER_URL+wyw;
},ajaxRequestWorks=1,queue=[],queuePurgerId,queuePurger=function(){if(!CSM.ue||!CSM.ue.isl){return;
}if(queue.length==0){w.clearInterval(queuePurgerId);
}else{var batchUrl=queue.shift();
sendBatch(batchUrl,1,1);
}},send=function(useAjax,sendNow){var batchUrl=buildUrlToForester();
if(batchUrl){sendBatch(batchUrl,useAjax,sendNow);
}init();
},sendBatch=function(batchUrl,useAjax,sendNow){if(!CSM.ue_lwl||sendNow||CSM.ue.isl){if(useAjax&&ajaxRequestWorks){ajaxRequestWorks=0;
try{var ajaxObj=getNewAJAXObject();
if(ajaxObj&&browserSupportForCORS){ajaxObj.open("GET",batchUrl,true);
ajaxObj.send();
ajaxRequestWorks=1;
}}catch(ex){if(CSM.ue_isrw&&CSM.ue.tag){CSM.ue.tag("flsajaxerr");
}}}if(!useAjax||!ajaxRequestWorks){var postbackImage=new Image();
postbackImage.src=batchUrl;
}sends++;
if(!CSM.ue.ielfc){CSM.ue.ielfc=[];
}CSM.ue.ielfc.push(batchUrl);
}else{queue.push(batchUrl);
}},browserSupportForCORS=0,xhrVersion,getNewAJAXObject=function(){var newAjaxObj;
if(window.XMLHttpRequest){try{if(window.XDomainRequest){newAjaxObj=new XDomainRequest();
newAjaxObj.onerror=function(){};
newAjaxObj.ontimeout=function(){};
newAjaxObj.onprogress=function(){};
newAjaxObj.onload=function(){};
newAjaxObj.timeout=0;
browserSupportForCORS=1;
}else{newAjaxObj=new XMLHttpRequest();
browserSupportForCORS=browserSupportForCORS||("withCredentials" in newAjaxObj?1:0);
}}catch(e){return;
}}else{if(window.ActiveXObject&&window.XDomainRequest){if(xhrVersion){newAjaxObj=new ActiveXObject(xhrVersion);
}else{var xhrVersions=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.5.0","MSXML2.XMLHTTP.4.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"];
for(var i=0;
i<xhrVersions.length;
i++){try{newAjaxObj=new ActiveXObject(xhrVersions[i]);
browserSupportForCORS=1;
xhrVersion=xhrVersions[i];
}catch(e){continue;
}break;
}}}}return newAjaxObj;
},beforeUnloadHandler=function(e){if(!beforeUnloadHandler.executed){if(CSM.ue_ulimg&&CSM.ue_ulimg.met!=2){if(CSM.ue_ulimg.met==1){send(0,1);
}else{send(0);
}}beforeUnloadHandler.executed=1;
}},attachAtOnBeforeUnload=function(){if(!window.chrome){w.onbeforeunload=function(e){if(prevOnBeforeUnload){prevOnBeforeUnload(e);
}beforeUnloadHandler(e);
};
}else{if(CSM.ue_ulimg){ue.attach(CSM.ue_ulimg.han,beforeUnloadHandler);
if(CSM.ue_ulimg.detach==1){ue.ulh.push(beforeUnloadHandler);
}}}},prevOnBeforeUnload=w.onbeforeunload;
attachAtOnBeforeUnload();
w.setInterval(function(){send(1,1);
},PUBLISH_PERIOD);
queuePurgerId=w.setInterval(queuePurger,QUEUE_PURGER_PERIOD);
init();
replay();
CSM.ue.log=log;
w.amznJQ&&w.amznJQ.declareAvailable&&w.amznJQ.declareAvailable("forester-client");
w.P&&w.P.register&&w.P.register("forester-client",function(){});
uex&&uex("ld",foresterClientScope,{wb:1});
})(ue_csm,window);
