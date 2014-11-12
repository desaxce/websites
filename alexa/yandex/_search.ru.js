var _borschik=function(){var t=this._borschik||function(e){return!(e in t||t[e]++)};return t}();if(_borschik("bdYWxtZYwDrtwNkKN0dVEZFVeZE")){var BEMHTML=function(){var t,e={},n=function(e){function n(t){var e=t._mode;
if("content"===e)return i(t);if("empty-option"===e)return"z-interactive"===t.block?"form-dropdown"===t.elem?Li(t):oo(t):oo(t);
if("mods"===e)return"b-autocomplete-item"===t.block?!(t.mods&&"no-match"===t.mods.type)==!1?!!t.elem==!1?{enterable:"no"}:oo(t):oo(t):oo(t);
if(""===e)return Ci(t);if("icon-size"===e)return"z-interactive"===t.block?"form-checkbox"===t.elem?Si(t):oo(t):oo(t);
if("format-value"===e){if("value"===t.elem){var e=t.block;return"notice"===e?$i(t):"ticker"===e?ji(t):oo(t)
}return oo(t)}if("live"===e){var e=t.block;return"checkbox"===e?!!t.elem==!1?Ai(t):oo(t):"input"===e?!!t.elem==!1?Ni(t):oo(t):oo(t)
}return"auto-content"===e?"auth"===t.block?zi(t):oo(t):"action"===e?"auth"===t.block?!!t.elem==!1?Ri(t):oo(t):oo(t):"service-url"===e?"i-services"===t.block?qi(t):oo(t):"date-string"===e?"z-interactive"===t.block?"form-date"===t.elem?Bi(t):oo(t):oo(t):"bem"===e?Hi(t):"suggest-num"===e?"z-interactive"===t.block?"form-suggest"===t.elem?Ei(t):oo(t):oo(t):"lego-input"===e?"search"===t.block?!!t.elem==!1?Vi(t):oo(t):oo(t):"price"===e?"interactive-results"===t.block?"item"===t.elem?wi(t):oo(t):oo(t):"lego-label"===e?"search"===t.block?!!t.elem==!1?Wi(t):oo(t):oo(t):"price-format"===e?"interactive-results"===t.block?"item"===t.elem?ki(t):oo(t):oo(t):"get-label"===e?"search"===t.block?!!t.elem==!1?Qi(t):oo(t):oo(t):"price-format-cents"===e?"interactive-results"===t.block?"item"===t.elem?xi(t):oo(t):oo(t):"value"===e?"input"===t.block?Gi(t):oo(t):"tag"===e?mi(t):"public-params"===e?"i-global"===t.block?Ji(t):oo(t):"js"===e?oi(t):"js-params"===e?"b-page"===t.block?!!t.elem==!1?to(t):oo(t):oo(t):"mix"===e?Gn(t):"env"===e?"i-global"===t.block?eo(t):oo(t):"default"===e?$e(t):"jsAttr"===e?no(t):"attrs"===e?Y(t):"cls"===e?io(t):"elem"===e?"dropdown"===t.block?!(t.mods&&"yes"===t.mods.advanced)==!1?"title-text":oo(t):oo(t):oo(t)
}function i(t){var e=t.block;if("navigation"===e){var e=t.elem;return"more-label"===e?!(t.mods&&"yes"===t.mods["text-nav"])==!1?BEM.I18N("navigation","more"):!(t.mods&&"popup"===t.mods["more-type"])==!1?"• • •":d(t):"item"===e?o(t):"region"===e?r(t):"more"===e?u(t):d(t)
}if("z-interactive"===e){var e=t.elem;if("form-slider"===e)return B(t);if("form-action"===e)return{block:"button",mix:[{block:"z-interactive",elem:"submit"}],type:"submit",mods:{theme:"action",size:t._size},content:[{elem:"label",content:t.ctx.go_text},{block:"z-interactive",elem:"count",content:t.ctx.found_text}]};
if("form-date"===e)return S(t);if("form-suggest"===e)return L(t);if("form-input"===e){var n=t.ctx.data;
return{block:"input",js:{"default":n["default"]},name:n.id,value:n.selected||n["default"]||"",mods:{size:t._size,filter:t.ctx.filter,"has-default":n["default"]?"yes":"","default-view":!n.selected&&n["default"]?"yes":""},content:[{elem:"label",content:t._.xmlEscape(n.caption)},{elem:"control"}]}
}return"form-checkbox"===e?C(t):"form-dropdown"===e?I(t):"form-table"===e?P(t):X(t)}if("input"===e)return"box"===t.elem?D(t):O(t);
if("notice"===e){var e=t.elem;return"value"===e?A(t):"text"===e?BEM.I18N("notice","notifications"):"count"===e?[{elem:"text"},{elem:"value",count:t.ctx.content}]:!("undefined"!=typeof t.ctx.count)==!1?!!t.elem==!1?{elem:"count",url:t.ctx.url,content:t.ctx.count}:X(t):X(t)
}if("ticker"===e){var e=t.elem;return"value"===e?N(t):"text"===e?BEM.I18N("ticker__text","notifications"):"count"===e?[{elem:"text"},{elem:"value",count:t.ctx.content}]:!!t.elem==!1?{elem:"count",url:t.ctx.url,content:t.ctx.count}:X(t)
}if("interactive-results"===e){var e=t.elem;return"item"===e?"gallery"===t.ctx.type?k(t):M(t):"ajax-wrap"===e?!(t.ctx.data&&"gallery"===t.ctx.data.template)==!1?w(t):{block:"interactive-results",elem:"main",mods:{type:t.ctx.type},target:t.ctx.target}:M(t)
}if("auth"===e){var e=t.elem;return"register"===e?!!t.ctx.content==!1?{block:"button",mods:{theme:"pseudo",size:"s"},url:t.ctx.url||[t._passportHost,"/passport?mode=register",t._paramFrom,t._paramRetpath].join(""),content:BEM.I18N("auth","register")}:z(t):"remember"===e?!!t.ctx.content==!1?{block:"button",mods:{theme:"pseudo",size:"s"},url:t.ctx.url||[t._passportHost,"/passport?mode=restore",t._paramFrom,t._paramRetpath].join(""),content:BEM.I18N("auth","remember")}:z(t):"button"===e?!!t.ctx.content==!1?{block:"button",type:"submit",mods:{theme:"action",size:"m"},content:BEM.I18N("auth","logon")}:z(t):"haunter"===e?!!t.ctx.content==!1?{block:"checkbox",mods:{theme:"normal",size:"m"},checkboxAttrs:{id:"auth-haunter",autocomplete:"off",name:"twoweeks",value:"no"},content:{elem:"label",content:BEM.I18N("auth","temporary")}}:z(t):"password"===e?!!t.ctx.content==!1?{block:"input",mods:{theme:"normal",size:"m"},name:"passwd",content:[{elem:"hint",content:BEM.I18N("auth","password")},{elem:"control",attrs:{type:"password",maxlength:256,"aria-required":!0}}]}:z(t):"username"===e?!!t.ctx.content==!1?{block:"input",mods:{theme:"normal",size:"m"},name:"login",content:[{elem:"hint",content:BEM.I18N("auth","login")},{elem:"control",attrs:{"aria-required":!0}}]}:z(t):z(t)
}if("domik"===e)return!!t.elem==!1?[{elem:"roof",content:[{elem:"roof-border"},{elem:"roof-body"},{elem:"logo"}]},{elem:"content",content:t.ctx.content}]:X(t);
if("suggest2"===e)return"title"===t.elem?[{elem:"a11y",content:BEM.I18N("suggest2","group")+": "},t.ctx.content]:X(t);
if("service"===e)return R(t);if("search"===e)return!!t.ctx.content==!1?!!t.elem==!1?H(t):K(t):K(t);if("check-button"===e)return!!t.elem==!1?[t._control,{elem:"text",tag:"span",content:t.ctx.content}]:X(t);
if("suggest2-item"===e)return!(t.mods&&"link"===t.mods.interact)==!1?!!t.elem==!1?{elem:"link",url:t.ctx.url,target:t.ctx.target||"_blank",content:t.ctx.content}:V(t):V(t);
if("spin"===e)return y(t);if("button"===e)return!!t.elem==!1?{elem:"text",tag:"span",content:t.ctx.content}:X(t);
if("slider"===e){var e=t.elem;return"text"===e?t._value:"runner"===e?{elem:"text"}:!!t.elem==!1?[t.ctx.content,{elem:"body",content:{elem:"click"}}]:X(t)
}if("popup"===e)return!!t.elem==!1?[{elem:"under",mods:t.ctx.underMods},t.ctx.content]:X(t);if("b-autocomplete-item"===e){if(!(t.mods&&"service-pay"===t.mods.type)==!1){if(!!t.elem==!1){var i=BEM.blocks["i-common__string"],s=i.escapeHTML(t.ctx.data[1]),a=t.ctx.data[2];
return[{block:"b-autocomplete-item",elem:"text",content:s},{block:"b-autocomplete-item",elem:"service-pay-inn",content:a.inn}]
}return m(t)}return m(t)}return"i-ua"===e?W(t):"checkbox"===e?!!t.elem==!1?[{elem:"box",tag:"span",elemMods:"yes"===t.mods.checked?{checked:"yes"}:"",content:[{elem:"control",attrs:t.ctx.checkboxAttrs||{}},{elem:"tick",tag:"i"}]},t.ctx.content]:X(t):X(t)
}function o(t){return!(t.__$anflg53!==!0)==!1?!(t.mods&&"yes"===t.mods["text-nav"])==!1?s(t):d(t):d(t)
}function s(t){var e,n,i,s;return t.extend(t._localLog?(t._localLog.push([["__$anflg53"],!0]),e=t.__$anflg53,t.__$anflg53=!0,n=o(t),t.__$anflg53=e,__bv151=n,t._localLog=t._localLog.slice(0,-1),__bv151):(i=t.__$anflg53,t.__$anflg53=!0,s=o(t),t.__$anflg53=i,s),{icon:!1})
}function r(t){return!(t.__$anflg52!==!0)==!1?!(t.mods&&"tablo"===t.mods["more-type"])==!1?a(t):l(t):l(t)
}function a(t){var e,n,i,o;return[t._localLog?(t._localLog.push([["__$anflg52"],!0]),e=t.__$anflg52,t.__$anflg52=!0,n=r(t),t.__$anflg52=e,__bv150=n,t._localLog=t._localLog.slice(0,-1),__bv150):(i=t.__$anflg52,t.__$anflg52=!0,o=r(t),t.__$anflg52=i,o),{elem:"more"}]
}function l(t){return!(t.__$anflg51!==!0)==!1?!(t.mods&&"popup"===t.mods["more-type"])==!1?c(t):d(t):d(t)
}function c(t){var e,n,i,o;return[t._localLog?(t._localLog.push([["__$anflg51"],!0]),e=t.__$anflg51,t.__$anflg51=!0,n=r(t),t.__$anflg51=e,__bv149=n,t._localLog=t._localLog.slice(0,-1),__bv149):(i=t.__$anflg51,t.__$anflg51=!0,o=r(t),t.__$anflg51=i,o),{elem:"more",content:t.ctx.content}]
}function u(t){return!(t.__$anflg49!==!0)==!1?!(t.mods&&"popup"===t.mods["more-type"])==!1?h(t):d(t):d(t)
}function h(t){var e,n,i,o;return[t._localLog?(t._localLog.push([["__$anflg49"],!0]),e=t.__$anflg49,t.__$anflg49=!0,n=u(t),t.__$anflg49=e,__bv147=n,t._localLog=t._localLog.slice(0,-1),__bv147):(i=t.__$anflg49,t.__$anflg49=!0,o=u(t),t.__$anflg49=i,o),{block:"popup",mix:[{block:"navigation",elem:"popup",js:{id:t.generateId()}}],mods:{adaptive:"yes","watch-scroll":"no",position:"fixed"},js:{directions:[{to:"right",axis:"middle"}],position:{left:128}},zIndex:9,content:[{elem:"tail"},{elem:"content",mix:[{block:"navigation",elem:"more-stack"}],content:function(t){return t.ctx.content.map(function(e){return t.extend(t.extend({},e),{elemMods:{service:"no"}})
})}(t)}]}]}function d(t){return!(t.__$anflg48!==!0)==!1?!!t.elem==!1?_(t):p(t):p(t)}function _(t){var e,n,i,o,s,r,a,l,c,u,h,d,_,p,m,f;
return t._localLog?(t._localLog.push([["__$anflg48"],!0]),n=t.__$anflg48,t.__$anflg48=!0,c=t._localLog?(t._localLog.push([["_mode"],""]),i=t.ctx,t.ctx={elem:"region",content:function(t){return(t.ctx.content||[]).map(function(e){return t._.extend(e,{elemMods:{service:"yes"}})
})}(t)},o=t._mode,t._mode="",s=Ci(t),t.ctx=i,t._mode=o,__bv145=s,t._localLog=t._localLog.slice(0,-1),__bv145):(r=t.ctx,t.ctx={elem:"region",content:function(t){return(t.ctx.content||[]).map(function(e){return t._.extend(e,{elemMods:{service:"yes"}})
})}(t)},a=t._mode,t._mode="",l=Ci(t),t.ctx=r,t._mode=a,l),t.__$anflg48=n,__bv146=c,t._localLog=t._localLog.slice(0,-1),__bv146):(e=t.__$anflg48,t.__$anflg48=!0,u=t._localLog?(t._localLog.push([["_mode"],""]),h=t.ctx,t.ctx={elem:"region",content:function(t){return(t.ctx.content||[]).map(function(e){return t._.extend(e,{elemMods:{service:"yes"}})
})}(t)},d=t._mode,t._mode="",_=Ci(t),t.ctx=h,t._mode=d,__bv145=_,t._localLog=t._localLog.slice(0,-1),__bv145):(p=t.ctx,t.ctx={elem:"region",content:function(t){return(t.ctx.content||[]).map(function(e){return t._.extend(e,{elemMods:{service:"yes"}})
})}(t)},m=t._mode,t._mode="",f=Ci(t),t.ctx=p,t._mode=m,f),t.__$anflg48=e,u)}function p(t){var e=t.elem;
return"more"===e?[{elem:"more-label",mix:[{block:"service",mods:{hoverable:"yes"}}],content:{block:"service",elem:"icon"}}]:"item"===e?{block:"service",service:t.ctx.service,iconMods:{self:"40"},name:t.ctx.name,mods:t.ctx.selected?!1:{hoverable:"yes"},lang:t.ctx.lang,url:t.ctx.selected?!1:t.ctx.url,urlParams:(t.ctx.search||"")+(t.ctx.params||""),urlAttrs:{target:t.ctx.target,tabindex:0},counter:t.ctx.counter}:!!t.elem==!1?{elem:"region",content:t.ctx.content.map(function(t){return t.block="navigation",this.extend(this.extend({},t),{elemMods:{service:"yes"}})
},t)}:X(t)}function m(t){return!(t.mods&&"serp-api"===t.mods.type)==!1?!!t.elem==!1?{elem:"text",content:t._.xmlEscape(t.ctx.data[1]),attrs:{"data-key":t.ctx.data[2]}}:f(t):f(t)
}function f(t){if(!(t.mods&&"lingvo"===t.mods.type)==!1){if(!!t.elem==!1){var e=t.ctx.data[1];return[{tag:"span",elem:"text",content:e.text},{tag:"span",elem:"translation",content:[" — ",e.translation]}]
}return g(t)}return g(t)}function g(t){return!(t.mods&&"foot"===t.mods.type)==!1?!!t.elem==!1?t.ctx.data.slice(1).map(function(t){return this._.isArray(t)?{tag:"span",elem:"foot",content:t[0]}:t
},t):v(t):v(t)}function v(t){return!(t.mods&&"nav"===t.mods.type)==!1?!!t.elem==!1?{elem:"link",tag:"a",attrs:{href:t._url,target:"_blank"},content:[{elem:"link-url",tag:"span",content:t._linkUrlContent},{elem:"link-info",tag:"span",content:t._linkInfoConten}]}:b(t):b(t)
}function b(t){if(!!t.elem==!1){var e=t.ctx.data,n=BEM.blocks["i-common__string"],i=n.escapeHTML(t._.isArray(e)?e[1]:e);
return n.highlight(i,t.ctx.hl)}return X(t)}function y(t){return!(t.__$anflg38!==!0)==!1?!t.ctx.label==!1?!!t.elem==!1?x(t):X(t):X(t):X(t)
}function x(t){var e,n,i,o;return[{elem:"label",content:t.ctx.label},t._localLog?(t._localLog.push([["__$anflg38"],!0]),e=t.__$anflg38,t.__$anflg38=!0,n=y(t),t.__$anflg38=e,__bv127=n,t._localLog=t._localLog.slice(0,-1),__bv127):(i=t.__$anflg38,t.__$anflg38=!0,o=y(t),t.__$anflg38=i,o)]
}function k(t){var e,n,i,o,s,r,a,l,c=t.ctx.itemData,u=t.ctx.index,h=c.meta?c.meta[0]:"";return[{block:"b-link",url:c.url,target:t.ctx.target,content:{block:"interactive-results",elem:"image",src:c.image,mods:{pos:u}}},{elem:"price",content:t._localLog?(t._localLog.push([["_mode"],"price"],[["_currency"],["ctx","currency"]]),e=t._mode,t._mode="price",n=t._currency,t._currency=t.ctx.currency,i=t.ctx,t.ctx=c,o=wi(t),t._mode=e,t._currency=n,t.ctx=i,__bv118=o,t._localLog=t._localLog.slice(0,-2),__bv118):(s=t._mode,t._mode="price",r=t._currency,t._currency=t.ctx.currency,a=t.ctx,t.ctx=c,l=wi(t),t._mode=s,t._currency=r,t.ctx=a,l)},{block:"b-link",mix:{block:"interactive-results",elem:"link"},url:c.url,target:t.ctx.target,content:{block:"interactive-results",elem:"title",content:c.title,mods:{pos:u}}},c.description&&{elem:"description",content:c.description},h&&{elem:"meta",content:h}]
}function w(t){for(var e,n=t.ctx.data,i=n.results||[],o=t.ctx.target,s=t.ctx.currency,r=t.ctx.displayCount,a=[],l=0;r>l;l++)e=i[l],a.push({elem:"cell",mods:{first:0===l?"yes":null,last:l===r-1?"yes":null,"main-last":1===l?"yes":"",extra:l>1?"yes":""},content:e&&{block:"interactive-results",elem:"item",type:"gallery",data:n,index:l,itemData:e,currency:s,target:o}});
return{block:"z-interactive",elem:"table",mix:[{block:"interactive-results",elem:"main",mods:{type:"gallery"}}],content:{elem:"row",mods:{first:"yes"},content:a}}
}function M(t){return!!t.elem==!1?E(t):X(t)}function E(t){var e=t.ctx.data,n=t.ctx.i18n;return[{elem:"ajax-wrap",data:e,type:t.ctx.type,target:t.ctx.js.target,currency:t.ctx.js.currency,displayCount:t.ctx.js.displayCount},{elem:"message",elemMods:{type:"error"},content:[{elem:"message-title",content:n.errorTitle},{elem:"message-description",content:n.errorDescription},{block:"b-link",mix:{block:"interactive-results",elem:"submit"},target:t.ctx.js.target,content:t.ctx.host.name,url:t.ctx.host.url}]},{elem:"message",elemMods:{type:"not-found"},content:{elem:"message-title",content:n.notFound}},{elem:"fade",content:{block:"spin",mods:{theme:"gray-32",progress:"yes"===(t.ctx.mods||{}).empty?"yes":""},js:!0}}]
}function B(t){var e=t.ctx.data,n=e.selected,i=n.from||n["default-from"],o=n.to||n["default-to"],s=t.ctx.isSliderDegradation,r="",a="",l=t.ctx.size;
if(s!==!0&&(r={size:l,block:"slider",mix:[{block:"z-interactive",elem:"slider"}],mods:{type:"range",theme:"normal",interactive:"no",size:"s",orientation:"horiz",input:"hidden","for":"interactive"},js:{min:e.min,max:e.max,scale:[{value:e.min,step:e.step},{value:e.max}]},content:[{elem:"title",content:[e.caption+" ",e["from-caption"]+" ",{elem:"title-from",content:i}," "+e["to-caption"]+" ",{elem:"title-to",content:o}," "+e.unit]},{elem:"info",elemMods:{preset:"inline"},content:[{block:"input",mods:{size:"s"},value:i,content:{elem:"control",attrs:{name:e.id}}},{block:"input",mods:{size:"s"},value:o,content:{elem:"control",attrs:{name:e.id}}}]}]}),s!==!1){var c=e.unit?", "+e.unit:"",i=e["from-caption"]?(c?" ":", ")+e["from-caption"]:"",o=e["to-caption"]?(c?" ":", ")+e["to-caption"]:"",u=e.caption+i+c,h=e.caption+o+c,d={id:e.id,selected:e.selected&&e.selected.from,"default":e.selected&&e.selected["default-from"],caption:u},_={id:e.id,selected:e.selected&&e.selected.to,"default":e.selected&&e.selected["default-to"],caption:h};
a=[{elem:"form-input",mods:{first:"yes"},size:3,filter:"digit",data:d},{elem:"form-input",mods:{last:"yes"},size:3,filter:"digit",data:_}]
}return[r,a]}function S(t){var e,n,i,o,s,r,a,l,c,u,h,d,_,p,m=t.ctx.data;return isNaN(parseInt(m.min,10))||(_=t._localLog?(__bv112=parseInt(m.min,10),t._localLog.push([["_mode"],"date-string"],[["_offset"],__bv112]),n=t._mode,t._mode="date-string",a=t._offset,t._offset=__bv112,i=Bi(t),t._mode=n,t._offset=a,__bv113=i,t._localLog=t._localLog.slice(0,-2),__bv113):(o=t._mode,t._mode="date-string",s=t._offset,t._offset=parseInt(m.min,10),r=Bi(t),t._mode=o,t._offset=s,r)),isNaN(parseInt(m.max,10))||(p=t._localLog?(__bv114=parseInt(m.max,10),t._localLog.push([["_mode"],"date-string"],[["_offset"],__bv114]),e=t._mode,t._mode="date-string",l=t._offset,t._offset=__bv114,c=Bi(t),t._mode=e,t._offset=l,__bv115=c,t._localLog=t._localLog.slice(0,-2),__bv115):(u=t._mode,t._mode="date-string",h=t._offset,t._offset=parseInt(m.max,10),d=Bi(t),t._mode=u,t._offset=h,d)),{block:"input",js:{earlierLimit:_,laterLimit:p,months:t.ctx.i18n.months,weekDays:t.ctx.i18n.weekdays,popupMix:{block:"input",elem:"calendar-popup",elemMods:{type:"interactive"}},"default":m["default"]},name:m.id,value:m.selected||m["default"]||"",mods:{size:t._size,"has-calendar":"yes","has-default":m["default"]?"yes":"","default-view":!m.selected&&m["default"]?"yes":""},content:[{elem:"label",content:t._.xmlEscape(m.caption)},{elem:"control",content:{elem:"calendar"}}]}
}function L(t){var e,n,i,o,s=t.ctx.data,r=s["default"]&&s["default"].key,a=s.selected&&s.selected.key;
return{block:"input",name:s.id,value:a&&s.selected.caption||r&&s["default"].caption||"",attrs:{"data-key":a&&s.selected.key||r&&s["default"].key,"data-val":a&&s.selected.caption||r&&s["default"].caption},mods:{size:t._size,suggest:"yes",combobox:"yes","tap-ahead":"yes","ahead-fixed":"yes","nosplit-words":"yes","noprevent-tab":"yes","default-view":!a&&r?"yes":"","z-interactive":"yes"},js:{"default":s["default"],dataprovider:{name:"i-interactive-dataprovider",num:t._localLog?(t._localLog.push([["_mode"],"suggest-num"]),e=t._mode,t._mode="suggest-num",n=Ei(t),t._mode=e,__bv111=n,t._localLog=t._localLog.slice(0,-1),__bv111):(i=t._mode,t._mode="suggest-num",o=Ei(t),t._mode=i,o),url:t.ctx.url,filter_id:s.id},popupMods:{size:"m","z-interactive":"yes","z-interactive-exp":t._exp?"yes":""},popupParams:{directions:["bottom-left","bottom-right"]},i18n:{empty:t.ctx.i18n.empty_item_text},showOverChars:1},content:[{elem:"label",content:t._.xmlEscape(s.caption)},{elem:"control"}]}
}function C(t){var e,n,i,o,s=t.ctx.data,r=t._localLog?(t._localLog.push([["_mode"],"icon-size"]),e=t._mode,t._mode="icon-size",n=Si(t),t._mode=e,__bv110=n,t._localLog=t._localLog.slice(0,-1),__bv110):(i=t._mode,t._mode="icon-size",o=Si(t),t._mode=i,o),a={};
return a[r]="check",{block:"check-button",js:{val:s.checked},mods:{size:t._size,checked:s.selected?"yes":"","z-interactive":"yes","z-interactive-exp":t._exp?"yes":""},name:s.id,value:s.checked,content:[{block:"b-icon",mix:[{block:"check-button",elem:"icon",mods:a}],alt:"Metro"},t._.xmlEscape(s.caption)]}
}function I(t){var e,n,i,o,s,r,a=t.ctx.data,l=t,c=a["default"]&&a["default"].key,u=a.selected&&a.selected.key;
return{block:"select",name:a.id,mods:{size:t._size,theme:"normal","z-interactive":"yes","z-interactive-exp":t._exp?"yes":""},js:{popupMods:{"z-interactive":"yes","z-interactive-exp":t._exp?"yes":""},popupParams:{directions:["bottom-left","bottom-right"]}},content:[{tag:"span",elem:"caption",content:t._.xmlEscape(a.caption)},{block:"button",mods:{size:t._size},content:u&&t._.xmlEscape(a.selected.caption)||c&&t._.xmlEscape(a["default"].caption)||""},{elem:"control",content:[t._localLog?(__bv108=t._.xmlEscape(a.caption),t._localLog.push([["_mode"],"empty-option"],[["_label"],__bv108]),e=t._mode,t._mode="empty-option",n=t._label,t._label=__bv108,i=Li(t),t._mode=e,t._label=n,__bv109=i,t._localLog=t._localLog.slice(0,-2),__bv109):(o=t._mode,t._mode="empty-option",s=t._label,t._label=t._.xmlEscape(a.caption),r=Li(t),t._mode=o,t._label=s,r)].concat(a.values.map(function(t){return{elem:"option",attrs:u&&a.selected.key==t.key||!u&&c&&a["default"].key==t.key?{value:t.key,selected:"selected"}:{value:t.key},content:l._.xmlEscape(t.caption)}
}))}]}}function P(t){var e=t.ctx,n=t.ctx.i18n,i=t.ctx.data||{},o=i.filters||[],s=(t.ctx.baseline3,0),r=5,a=function(t,e){if(s===r)return void 0;
if(Array.isArray(t)){r+=t.length-1;for(var n=[],i=0;i<t.length;i++)a(t[i],n);e.push(n)}else{if(!t.size){var o,l=parseInt(t.chars,10);
o=l>0&&6>l?2:l>0&&11>l?3:l>0&&15>l?4:l>0&&19>l?5:l>0?6:3,t.size=o}s+=1,e.push(t)}},l=function(t,e){e.push({elem:"form-action",url:t,size:3,go_text:n.go,found_text:n.found})
},c=[],u=t.ctx.backend.suggest,h=function(t){for(var o=0;o<t.length;o++){var s=t[o],r=s.view&&s.view["expected-width-in-chars"],a="drop-down"==s.type||"geo"==s.type;
if(a&&s.values&&s.values.length>0)s["default"]=s["default-selected"],c.push({elem:"form-dropdown",chars:r,data:s});
else if(a&&s.suggest)s.site_id=i["site-id"],s["default"]=s["default-selected"],c.push({elem:"form-suggest",chars:r,data:s,url:u,i18n:n});
else if("range-geo"==s.type){var l={id:s.id,selected:s.selected&&s.selected.from,"default":s.selected&&s.selected["default-from"],caption:n.geo_from},d={id:s.id,selected:s.selected&&s.selected.to,"default":s.selected&&s.selected["default-to"],caption:n.geo_to};
s.values&&s.values.length>0?(l.values=d.values=s.values,c.push([{elem:"form-dropdown",chars:r,data:l},{elem:"form-dropdown",chars:r,data:d}])):s.suggest&&(l.site_id=d.site_id=i["site-id"],c.push([{elem:"form-suggest",chars:r,data:l,url:u,i18n:n},{elem:"form-suggest",chars:r,data:d,url:u,i18n:n}]))
}else if("checkbox"==s.type)c.push({elem:"form-checkbox",chars:r,data:s});else if("date"==s.type)c.push({elem:"form-date",chars:r,data:s,i18n:n});
else if("range-date"==s.type){var l={id:s.id,min:s.min,max:s.max,selected:s.selected&&s.selected.from,"default":s.selected&&s.selected["default-from"],caption:s["from-caption"]},d={id:s.id,min:s.min,max:s.max,selected:s.selected&&s.selected.to,"default":s.selected&&s.selected["default-to"],caption:s["to-caption"]};
c.push([{elem:"form-date",chars:Math.ceil(r/2),data:l,i18n:n},{elem:"form-date",chars:Math.floor(r/2),data:d,i18n:n}])
}else"range"==s.type?c.push({elem:"form-slider",mods:{degradable:e.isSliderDegradation?"yes":""},isSliderDegradation:e.isSliderDegradation,size:6,data:s}):"textbox"==s.type&&c.push({elem:"form-input",chars:r,data:s});
s["sub-filters"]&&s["sub-filters"].length>0&&h(s["sub-filters"])}},d=[];h(o);for(var _=0,p=c.length;p>_;_++){var m=c[_];
a(m,d)}l(i.request.url,d);var f=function(t){return{elem:"cell",mods:{span:t.size},content:t}};return{elem:"table",content:d.map(function(t){return{elem:"row",content:Array.isArray(t)?t.map(f):f(t)}
})}}function D(t){return!(t.__$anflg30!==!0)==!1?!(t.mods&&"yes"===t.mods["has-calendar"])==!1?T(t):O(t):O(t)
}function T(t){var e,n,i,o;return[t._localLog?(t._localLog.push([["__$anflg30"],!0]),e=t.__$anflg30,t.__$anflg30=!0,n=D(t),t.__$anflg30=e,__bv103=n,t._localLog=t._localLog.slice(0,-1),__bv103):(i=t.__$anflg30,t.__$anflg30=!0,o=D(t),t.__$anflg30=i,o),{elem:"calendar"}]
}function O(t){return!(t.mods&&"yes"===t.mods.combobox)==!1?!!t.elem==!1?[t.ctx.content,{tag:"input",elem:"combokey",attrs:{type:"hidden",name:t._name,value:t._value}}]:$(t):$(t)
}function $(t){var e=t.elem;return"box"===e?!(t.__$anflg15!==!0)==!1?!t._service==!1?j(t):X(t):X(t):"requery"===e?[{elem:"requery-input",tag:"input"},{elem:"requery-hidden",tag:"span"},{elem:"requery-visible",tag:"span"}]:"clear"===e?!!t.ctx.content==!1?"":X(t):"ahead"===e?[{elem:"ahead-filler"},{elem:"ahead-hint"}]:X(t)
}function j(t){var e,n,i,o;return[{elem:"box-layout",content:{tag:"tr",content:[{elem:"box-layout-cell",elemMods:{pos:"first"},content:t._.extend({block:"service",urlAttrs:{tabindex:-1,"aria-hidden":!0},mix:[{block:"input",elem:"service-label"}],icon:!1},"string"==typeof t._service?{service:t._service}:t._service)},{elem:"box-layout-cell",elemMods:{pos:"last"},content:t._localLog?(t._localLog.push([["__$anflg15"],!0]),e=t.__$anflg15,t.__$anflg15=!0,n=D(t),t.__$anflg15=e,__bv60=n,t._localLog=t._localLog.slice(0,-1),__bv60):(i=t.__$anflg15,t.__$anflg15=!0,o=D(t),t.__$anflg15=i,o)}]}}]
}function A(t){var e,n,i,o;return t._localLog?(t._localLog.push([["_mode"],"format-value"]),e=t._mode,t._mode="format-value",n=$i(t),t._mode=e,__bv100=n,t._localLog=t._localLog.slice(0,-1),__bv100):(i=t._mode,t._mode="format-value",o=$i(t),t._mode=i,o)
}function N(t){var e,n,i,o;return t._localLog?(t._localLog.push([["_mode"],"format-value"]),e=t._mode,t._mode="format-value",n=ji(t),t._mode=e,__bv99=n,t._localLog=t._localLog.slice(0,-1),__bv99):(i=t._mode,t._mode="format-value",o=ji(t),t._mode=i,o)
}function z(t){return!!t.elem==!1?F(t):X(t)}function F(t){var e,n,i,o;return[t.ctx.content||(t._localLog?(t._localLog.push([["_mode"],"auto-content"]),e=t._mode,t._mode="auto-content",n=zi(t),t._mode=e,__bv77=n,t._localLog=t._localLog.slice(0,-1),__bv77):(i=t._mode,t._mode="auto-content",o=zi(t),t._mode=i,o)),{elem:"retpath"}]
}function R(t){var e=t.elem;if("url"===e)return t.ctx.content;if("name"===e){var n=t.ctx,i=n.service,o=n.name||t["i-services"].serviceName(i)||i;
return o}if(!!t._url==!1){if(!!t.elem==!1){var s=[];return t._icon&&s.push({elem:"icon",service:t.ctx.service,elemMods:t.ctx.iconMods}),t._name&&s.push({elem:"name",service:t.ctx.service,name:t.ctx.name}),s
}return q(t)}return q(t)}function q(t){return!(t.__$anflg17!==!0)==!1?!t._url==!1?!!t.elem==!1?U(t):X(t):X(t):X(t)
}function U(t){var e,n,i,o,s,r,a,l,c,u,h,d;return{elem:"url",url:t._url,urlParams:t.ctx.urlParams||"",urlAttrs:t.ctx.urlAttrs,counter:t.ctx.counter,content:t._localLog?(t._localLog.push([["__$anflg17"],!0]),n=t.__$anflg17,t.__$anflg17=!0,a=t._localLog?(t._localLog.push([["_url"],!1]),i=t._url,t._url=!1,o=R(t),t._url=i,__bv67=o,t._localLog=t._localLog.slice(0,-1),__bv67):(s=t._url,t._url=!1,r=R(t),t._url=s,r),t.__$anflg17=n,__bv68=a,t._localLog=t._localLog.slice(0,-1),__bv68):(e=t.__$anflg17,t.__$anflg17=!0,l=t._localLog?(t._localLog.push([["_url"],!1]),c=t._url,t._url=!1,u=R(t),t._url=c,__bv67=u,t._localLog=t._localLog.slice(0,-1),__bv67):(h=t._url,t._url=!1,d=R(t),t._url=h,d),t.__$anflg17=e,l)}
}function H(t){for(var e,n,i,o,s,r,a,l,c,u,h,d,_,p,m,f=t.ctx.input,g=t._.isArray(f)?f.length:(f=[f],1),v=[],b=0;g>b;)m=f[b++],m&&v.push([t._localLog?(t._localLog.push([["_mode"],"lego-label"],[["position"],b]),n=t._mode,t._mode="lego-label",l=t.ctx,t.ctx=m,i=t.position,t.position=b,o=Wi(t),t._mode=n,t.ctx=l,t.position=i,__bv55=o,t._localLog=t._localLog.slice(0,-2),__bv55):(s=t._mode,t._mode="lego-label",r=t.ctx,t.ctx=m,a=t.position,t.position=b,e=Wi(t),t._mode=s,t.ctx=r,t.position=a,e),t._localLog?(t._localLog.push([["_mode"],"lego-input"]),c=t._mode,t._mode="lego-input",u=t.ctx,t.ctx=m,h=Vi(t),t._mode=c,t.ctx=u,__bv56=h,t._localLog=t._localLog.slice(0,-1),__bv56):(d=t._mode,t._mode="lego-input",_=t.ctx,t.ctx=m,p=Vi(t),t._mode=d,t.ctx=_,p)]);
return t.ctx.button&&v.push({elem:"button",content:t.ctx.button.content}),v={elem:"table",content:[{elem:"row",content:v}]},m&&v.content.push({elem:"row",content:m}),t.ctx.hidden&&(v=[v,t.ctx.hidden]),v
}function K(t){return!!t.elem==!1?{elem:"table",content:t.ctx.content}:X(t)}function V(t){var e=t.elem;
return"fact"===e?!(t.mods&&"nav"===t.mods.type)==!1?"&nbsp;&mdash;&nbsp;"+t.ctx.content:[{block:"suggest2",elem:"a11y",content:BEM.I18N("suggest2-item","quick-answer")+": "},t.xmlEscape(t.ctx.content)]:"highlight"===e?t.xmlEscape(t.ctx.content):"text"===e?Array.isArray(t.ctx.content)?t.ctx.content.map(function(t){return"string"==typeof t?this.xmlEscape(t):t
},t):t.xmlEscape(t.ctx.content):X(t)}function W(t){return!(t.__$anflg1!==!0)==!1?!!t.elem==!1?Q(t):G(t):G(t)
}function Q(t){var e,n,i,o,s=t._localLog?(t._localLog.push([["__$anflg1"],!0]),e=t.__$anflg1,t.__$anflg1=!0,n=W(t),t.__$anflg1=e,__bv23=n,t._localLog=t._localLog.slice(0,-1),__bv23):(i=t.__$anflg1,t.__$anflg1=!0,o=W(t),t.__$anflg1=i,o);
return s+=[";(function(d,e,c,n,w,v,f){","e=d.documentElement;",'c="className";','n="createElementNS";','f="firstChild";','w="http://www.w3.org/2000/svg";','e[c]+=" i-ua_svg_"+(!!d[n]&&!!d[n](w,"svg").createSVGRect?"yes":"no");','v=d.createElement("div");','v.innerHTML="<svg/>";','e[c]+=" i-ua_inlinesvg_"+((v[f]&&v[f].namespaceURI)==w?"yes":"no");',"})(document);"].join("")
}function G(t){return!!t.elem==!1?[";(function(d,e,c,r){","e=d.documentElement;",'c="className";','r="replace";','e[c]=e[c][r]("i-ua_js_no","i-ua_js_yes");','if(d.compatMode!="CSS1Compat")','e[c]=e[c][r]("i-ua_css_standart","i-ua_css_quirks")',"})(document);"].join(""):X(t)
}function X(t){return t.ctx.content}function Y(t){var e=t.block;if("navigation"===e)return Z(t);if("z-interactive"===e){var e=t.elem;
return"send-form"===e?{method:"POST"}:"form"===e?{target:"_blank"}:Oe(t)}if("input"===e){var e=t.elem;
return"control"===e?le(t):"label"===e?{id:t._labelId,"for":t._inputId,"aria-hidden":!0}:"hint"===e?{id:t._hintId,"for":t._inputId,"aria-hidden":!0}:"requery"===e?{"aria-hidden":!0}:"clear"===e?{unselectable:"on"}:Oe(t)
}if("dropdown"===e)return"hidden-value"===t.elem?!(t.mods&&"yes"===t.mods.advanced)==!1?{type:"hidden",name:t.ctx.name,value:t.ctx.value||""}:Oe(t):Oe(t);
if("interactive-results"===e)return"image"===t.elem?{style:"background-image:url("+t.ctx.src+")"}:Oe(t);
if("ticker"===e){var e=t.elem;return"value"===e?{title:t._count}:"count"===e?!t.ctx.url==!1?{href:t.ctx.url}:de(t):de(t)
}if("checkbox"===e){var e=t.elem;if("label"===e){var n=t.ctx.attrs||{};return n["for"]=t._checkboxAttrs.id,n.id=t._labelId,n["aria-hidden"]=!0,n
}return"control"===e?_e(t):Oe(t)}if("auth"===e){var e=t.elem;return"social-link"===e?{role:"button",tabindex:0,title:t.ctx.title,"aria-label":t.ctx.title}:"social"===e?{role:"group","aria-label":BEM.I18N("auth","social-log-in")}:"retpath"===e?{type:"hidden",name:"retpath",value:t._retpath||""}:!!t.elem==!1?me(t):Oe(t)
}if("domik"===e)return fe(t);if("link"===e)return!!t.elem==!1?ve(t):!(t.__$anflg19!==!0)==!1?!(t.mods&&"yes"===t.mods.disabled)==!1?!!t.elem==!1?be(t):ye(t):ye(t):ye(t);
if("check-button"===e){var e=t.elem;if("control"===e){for(var i,o=t.ctx,s={type:"checkbox"},r=["tabindex","name","value","id"];i=r.pop();)o[i]&&(s[i]=o[i]);
return o.checked&&(s.checked="checked"),o.disabled&&(s.disabled="disabled"),s["aria-labelledby"]=o.labelledby,s
}return"text"===e?{id:t._control.labelledby}:!!t.elem==!1?{"for":t._control.id}:Oe(t)}if("service"===e){if("url"===t.elem){var a=t.ctx.urlAttrs||{};
return a.href=t.ctx.url+t.ctx.urlParams,t.ctx.counter&&(a.onmousedown=t.ctx.counter),a}return Oe(t)}if("image"===e){if(!!t.elem==!1){var l,c=t.ctx,u={src:"//yastatic.net/lego/_/La6qi18Z8LwgnZdsAr1qy1GwCwo.gif",alt:""},h=["alt","width","height"];
for(c.url&&(u.src=c.url);l=h.shift();)c[l]&&(u[l]=c[l]);return u}return Oe(t)}if("search"===e)return!!t.elem==!1?ke(t):Oe(t);
if("slider"===e){var e=t.elem;return"unit"===e?{"aria-hidden":!0}:"title"===e?{id:t._titleId,"aria-hidden":!0}:"mark"===e?{"aria-hidden":!0}:"runner"===e?{hideFocus:"true",id:t.ctx.id,role:"slider","aria-valuenow":t._value,"aria-valuemin":t.ctx.min,"aria-valuemax":t.ctx.max,"aria-disabled":"yes"===(t.ctx.mods||{}).disabled,"aria-labelledby":t.ctx.labelledby,"aria-controls":t.ctx.inputId}:Oe(t)
}if("suggest2-item"===e){var e=t.elem;return"icon"===e?!t.ctx.png==!1?!t.ctx.svg==!1?{style:'background-image:url("'+t.ctx[BEM.blocks["i-ua"]&&BEM.blocks["i-ua"].svg?"svg":"png"]+'")'}:we(t):we(t):"link"===e?{href:t.ctx.url,target:t.ctx.target}:"bullet"===e?{"aria-hidden":!0}:Oe(t)
}if("b-icon"===e){if(!!t.elem==!1){var d,_=t.ctx,p={src:"//yastatic.net/lego/_/La6qi18Z8LwgnZdsAr1qy1GwCwo.gif",alt:""},m=["alt","width","height"];
for(_.url&&(p.src=_.url);d=m.shift();)_[d]&&(p[d]=_[d]);return p}return Oe(t)}if("select"===e){var e=t.elem;
if("group"===e)return{role:"group","aria-labelledby":t._labelId};if("control"===e){for(var f,g=["id","name","tabindex"],v={};f=g.pop();)t._controlAttrs[f]&&(v[f]=t._controlAttrs[f]);
return"yes"===t.mods.disabled&&(v.disabled="disabled"),v.tabindex=-1,v["aria-hidden"]=!0,t.ctx.controlAttrs||v
}return"item"===e?Me(t):Oe(t)}return"b-link"===e?!!t.elem==!1?ae(t):Oe(t):"button"===e?Be(t):"notice"===e?"count"===t.elem?!t.ctx.url==!1?{href:t.ctx.url}:he(t):he(t):Oe(t)
}function Z(t){var e=t.elem;return"more-label"===e?J(t):"more"===e?ie(t):"region"===e?{role:"list"}:se(t)
}function J(t){return!(t.__$anflg50!==!0)==!1?!(t.mods&&"popup"===t.mods["more-type"])==!1?te(t):ee(t):ee(t)
}function te(t){var e,n,i,o,s=(t._localLog?(t._localLog.push([["__$anflg50"],!0]),e=t.__$anflg50,t.__$anflg50=!0,n=J(t),t.__$anflg50=e,__bv148=n,t._localLog=t._localLog.slice(0,-1),__bv148):(i=t.__$anflg50,t.__$anflg50=!0,o=J(t),t.__$anflg50=i,o))||{},r=BEM.I18N("navigation","more");
return t._.extend(s,{tabindex:0,role:"button",title:r,"aria-label":r,"aria-haspopup":!0,"aria-expanded":!1})
}function ee(t){return!(t.__$anflg44!==!0)==!1?ne(t):se(t)}function ne(t){var e,n,i,o,s=(t._localLog?(t._localLog.push([["__$anflg44"],!0]),e=t.__$anflg44,t.__$anflg44=!0,n=J(t),t.__$anflg44=e,__bv138=n,t._localLog=t._localLog.slice(0,-1),__bv138):(i=t.__$anflg44,t.__$anflg44=!0,o=J(t),t.__$anflg44=i,o))||{},r=BEM.I18N("navigation","more");
return t._.extend(s,{tabindex:0,role:"button",title:r,"aria-label":r,"aria-haspopup":!0,"aria-expanded":!1})
}function ie(t){return!(t.__$anflg46!==!0)==!1?oe(t):se(t)}function oe(t){var e,n,i,o,s=t._localLog?(t._localLog.push([["__$anflg46"],!0]),e=t.__$anflg46,t.__$anflg46=!0,n=ie(t),t.__$anflg46=e,__bv142=n,t._localLog=t._localLog.slice(0,-1),__bv142):(i=t.__$anflg46,t.__$anflg46=!0,o=ie(t),t.__$anflg46=i,o);
return s=t._.extend(s,{onmousedown:t._moreCounter})}function se(t){return!(t.__$anflg43!==!0)==!1?!!t.elem==!1?re(t):Oe(t):Oe(t)
}function re(t){var e,n,i,o,s,r=(t._localLog?(t._localLog.push([["__$anflg43"],!0]),e=t.__$anflg43,t.__$anflg43=!0,n=Z(t),t.__$anflg43=e,__bv137=n,t._localLog=t._localLog.slice(0,-1),__bv137):(i=t.__$anflg43,t.__$anflg43=!0,o=Z(t),t.__$anflg43=i,o))||{},a=t.ctx.query;
return r.role="navigation",s=a?BEM.I18N("navigation","search-on",{query:a}):BEM.I18N("navigation","search-also"),r["aria-label"]=s,r
}function ae(t){for(var e,n={},i=t.ctx,o=i.url,s=i.counter,r=t["i-global"],a=["title","target"],l=/^(https?:)?\/\/([^.?#\/]+\.)*?yandex\.(ru|by|ua|kz|com|com\.tr|net|st)(:\d{1,5})?([#\/?].*)?$/,c=r.isYandexNet&&!r.isPumpkin&&s&&-1===s.indexOf(r.redirPrefix)&&o&&o.match(/^(https?:)?\/\//)&&!o.match(l);e=a.pop();)i[e]&&(n[e]=i[e]);
return s&&(n.onmousedown=s),n.href=c?"//h.yandex.net/?"+encodeURIComponent(o):o,n}function le(t){return!(t.__$anflg31!==!0)==!1?!(t.mods&&"yes"===t.mods.readonly)==!1?ce(t):ue(t):ue(t)
}function ce(t){var e,n,i,o,s=t._localLog?(t._localLog.push([["__$anflg31"],!0]),e=t.__$anflg31,t.__$anflg31=!0,n=le(t),t.__$anflg31=e,__bv104=n,t._localLog=t._localLog.slice(0,-1),__bv104):(i=t.__$anflg31,t.__$anflg31=!0,o=le(t),t.__$anflg31=i,o);
return s.readonly="readonly",s}function ue(t){var e=t._.extend({id:t._inputId,name:t._name},t.ctx.controlAttrs);
return(t._value||0===t._value)&&(e.value=t._value),t.mods.disabled&&(e.disabled="disabled"),t._live&&(e.autocomplete="off"),e["aria-labelledby"]=t._labelId+" "+t._hintId,e
}function he(t){return!!t.elem==!1?{role:"alert","aria-live":"assertive","aria-atomic":!0}:Oe(t)}function de(t){return!!t.elem==!1?{role:"alert","aria-live":"assertive","aria-atomic":!0}:Oe(t)
}function _e(t){if(!(t.__$anflg27!==!0)==!1)return pe(t);var e=t.ctx.attrs||{};return e.id=t._checkboxAttrs.id,e.type="checkbox",e.autocomplete="off",t.mods.disabled&&(e.disabled="disabled"),"yes"==t.mods.checked&&(e.checked="checked"),e["aria-labelledby"]=t._labelId,e
}function pe(t){var e,n,i,o;return t._.extend(t._localLog?(t._localLog.push([["__$anflg27"],!0]),e=t.__$anflg27,t.__$anflg27=!0,n=_e(t),t.__$anflg27=e,__bv94=n,t._localLog=t._localLog.slice(0,-1),__bv94):(i=t.__$anflg27,t.__$anflg27=!0,o=_e(t),t.__$anflg27=i,o),{autocomplete:"off"})
}function me(t){var e,n,i,o;return{method:"POST",action:t.ctx.url||(t._localLog?(t._localLog.push([["_mode"],"action"]),e=t._mode,t._mode="action",n=Ri(t),t._mode=e,__bv76=n,t._localLog=t._localLog.slice(0,-1),__bv76):(i=t._mode,t._mode="action",o=Ri(t),t._mode=i,o)),role:"form","aria-label":BEM.I18N("auth","auth")}
}function fe(t){return!(t.__$anflg20!==!0)==!1?!(t.mods&&"popup"===t.mods.type)==!1?!!t.elem==!1?ge(t):Oe(t):Oe(t):Oe(t)
}function ge(t){var e,n,i,o,s=(t._localLog?(t._localLog.push([["__$anflg20"],!0]),e=t.__$anflg20,t.__$anflg20=!0,n=fe(t),t.__$anflg20=e,__bv73=n,t._localLog=t._localLog.slice(0,-1),__bv73):(i=t.__$anflg20,t.__$anflg20=!0,o=fe(t),t.__$anflg20=i,o))||{};
return s.role="dialog",s}function ve(t){for(var e,n={},i=t.ctx,o=i.url,s=i.counter,r=t["i-global"],a=["title","target"],l=/^(https?:)?\/\/([^.?#\/]+\.)*?yandex\.(ru|by|ua|kz|com|com\.tr|net|st)(:\d{1,5})?([#\/?].*)?$/,c=r.isYandexNet&&!r.isPumpkin&&s&&-1===s.indexOf(r.redirPrefix)&&o&&o.match(/^(https?:)?\/\//)&&!o.match(l);e=a.pop();)i[e]&&(n[e]=i[e]);
return s&&(n.onmousedown=s),n.href=c?"//h.yandex.net/?"+encodeURIComponent(o):o,n}function be(t){var e,n,i,o,s=(t._localLog?(t._localLog.push([["__$anflg19"],!0]),e=t.__$anflg19,t.__$anflg19=!0,n=ve(t),t.__$anflg19=e,__bv72=n,t._localLog=t._localLog.slice(0,-1),__bv72):(i=t.__$anflg19,t.__$anflg19=!0,o=ve(t),t.__$anflg19=i,o))||{};
return s.tabindex=-1,s["aria-disabled"]=!0,s}function ye(t){return!!t.elem==!1?xe(t):Oe(t)}function xe(t){var e=t.ctx,n={};
if(["title","target","id","tabindex"].forEach(function(t){e.hasOwnProperty(t)&&(n[t]=String(e[t]))}),null!==e.url&&"undefined"!=typeof e.url)if(t.isSimple(e.url))n.href=String(e.url);
else{var i=[];if(t._localLog){t._localLog.push([["_mode"],""],[["_buf"],i]);var o=t._mode;t._mode="";
var s=t._buf;t._buf=i;var r=t.ctx;t.ctx=e.url,Ci(t),t._mode=o,t._buf=s,t.ctx=r,t._localLog=t._localLog.slice(0,-2)
}else{var a=t._mode;t._mode="";var l=t._buf;t._buf=i;var c=t.ctx;t.ctx=e.url,Ci(t),t._mode=a,t._buf=l,t.ctx=c
}n.href=i.join("")}else n.role="button",n.tabindex||(n.tabindex="0");return n}function ke(t){var e,n,i,o;
return{action:t.ctx.action||"/",role:"search","aria-label":t._localLog?(t._localLog.push([["_mode"],"get-label"]),e=t._mode,t._mode="get-label",n=Qi(t),t._mode=e,__bv54=n,t._localLog=t._localLog.slice(0,-1),__bv54):(i=t._mode,t._mode="get-label",o=Qi(t),t._mode=i,o)}
}function we(t){return!t.ctx.svg==!1?{style:'background-image:url("'+t.ctx.svg+'")'}:!t.ctx.png==!1?{style:'background-image:url("'+t.ctx.png+'")'}:Oe(t)
}function Me(t){return!(t.__$anflg7!==!0)==!1?Ee(t):{id:t.generateId()}}function Ee(t){var e,n,i,o,s=(t._localLog?(t._localLog.push([["__$anflg7"],!0]),e=t.__$anflg7,t.__$anflg7=!0,n=Me(t),t.__$anflg7=e,__bv36=n,t._localLog=t._localLog.slice(0,-1),__bv36):(i=t.__$anflg7,t.__$anflg7=!0,o=Me(t),t.__$anflg7=i,o))||{};
return"yes"===(t.ctx.elemMods||{}).label&&(s.id=t._labelId,s["aria-hidden"]=!0),s}function Be(t){return!t._formSelect==!1?!!t.elem==!1?{role:"listbox",type:"button","aria-haspopup":!0,"aria-expanded":!1}:Se(t):Se(t)
}function Se(t){return!(t.__$anflg5!==!0)==!1?!t.ctx.counter==!1?!!t.elem==!1?Le(t):Ce(t):Ce(t):Ce(t)
}function Le(t){var e,n,i,o;return t._.extend(t._localLog?(t._localLog.push([["__$anflg5"],!0]),e=t.__$anflg5,t.__$anflg5=!0,n=Be(t),t.__$anflg5=e,__bv31=n,t._localLog=t._localLog.slice(0,-1),__bv31):(i=t.__$anflg5,t.__$anflg5=!0,o=Be(t),t.__$anflg5=i,o),{onmousedown:t.ctx.counter})
}function Ce(t){return!(t.__$anflg4!==!0)==!1?!t.ctx.url==!1?!!t.elem==!1?Ie(t):Pe(t):Pe(t):Pe(t)}function Ie(t){var e,n,i,o,s=t.ctx,r=t._localLog?(t._localLog.push([["__$anflg4"],!0]),e=t.__$anflg4,t.__$anflg4=!0,n=Be(t),t.__$anflg4=e,__bv30=n,t._localLog=t._localLog.slice(0,-1),__bv30):(i=t.__$anflg4,t.__$anflg4=!0,o=Be(t),t.__$anflg4=i,o),a={href:s.url};
return s.target&&(a.target=s.target),t.mods.disabled&&(a["aria-disabled"]=!0),t._.extend(r,a)}function Pe(t){return!(t.__$anflg3!==!0)==!1?!!t.elem==!1?!!t.ctx.url==!1?De(t):Te(t):Te(t):Te(t)
}function De(t){for(var e,n,i,o,s,r=t.ctx,a=t._localLog?(t._localLog.push([["__$anflg3"],!0]),e=t.__$anflg3,t.__$anflg3=!0,n=Be(t),t.__$anflg3=e,__bv29=n,t._localLog=t._localLog.slice(0,-1),__bv29):(i=t.__$anflg3,t.__$anflg3=!0,o=Be(t),t.__$anflg3=i,o),l={type:r.type||"button"},c=["name","value"];s=c.shift();)r[s]&&(l[s]=r[s]);
return t.mods.disabled&&(l.disabled="disabled"),t._.extend(a,l)}function Te(t){if(!!t.elem==!1){var e=t.ctx,n={role:"button"};
return e.tabindex&&(n.tabindex=e.tabindex),n}return Oe(t)}function Oe(){return void 0}function $e(t){var e=t.block;
if("navigation"===e)return je(t);if("ticker"===e)return ln(t);if("checkbox"===e)return un(t);if("input"===e)return dn(t);
if("dropdown"===e)return"popup"===t.elem?!(t.__$anflg24!==!0)==!1?gn(t):oo(t):oo(t);if("b-autocomplete-item"===e)return rn(t);
if("domik"===e)return wn(t);if("service"===e)return Sn(t);if("i-services"===e){var e=t.elem;return"url"===e?(t._buf.push(t["i-services"].serviceUrl(t.ctx.id,t.ctx.region)),void 0):"name"===e?(t._buf.push(t["i-services"].serviceName(t.ctx.id)),void 0):!t.elem==!1?"":oo(t)
}return"search"===e?Pn(t):"paranja"===e?Tn(t):"z-interactive"===e?"form-table"===t.elem?on(t):oo(t):"i-bem"===e?"i18n"===t.elem?$n(t):oo(t):"interactive-results"===e?Je(t):"select"===e?jn(t):"check-button"===e?Ye(t):"button"===e?Rn(t):"spin"===e?!(t.__$anflg37!==!0)==!1?!!t.elem==!1?Xe(t):oo(t):oo(t):"popup"===e?Kn(t):"slider"===e?Ke(t):"i-global"===e?Wn(t):"auth"===e?vn(t):oo(t)
}function je(t){return"item"===t.elem?Ae(t):ze(t)}function Ae(t){return!(t.__$anflg47!==!0)==!1?Ne(t):ze(t)
}function Ne(t){var e,n,i,o,s,r,a,l,c,u,h,d,_,p,m,f,g=t.ctx.serpsearch,v=t.ctx.query,b=t.ctx.tld,y=(t.ctx.host,t.ctx.hostname),x=(y.match(/www\./)?"www.":"")+(y.match(/beta\./)?"beta.":"")+y.replace(/\S*(?=yandex\.\S*)/,""),k=t.ctx.prefsTarget,w=t.ctx.urlSuffix,M=(t.ctx.lang,{afisha:{search:"/search/?text="+v,target:k,search:w},appsearch:{url:"//yandex."+(b||"com.tr"),search:"/yandsearch?text="+v,target:k,params:"&filter=mobile_apps"},auto:{search:"/search?text="+v,target:k},blogs:{search:"/search.xml?text="+v,target:k,params:t.ctx.family&&"&family=yes"},encyc:{service:"slovari",search:"/"+v+"/значение/",target:k},fresh:{service:"fresh",url:"//"+y,search:g+"?text="+v,params:"&time_from=-3dE"+(t.ctx.family?"&family=yes":""),ajax:!0},images:{service:"images",search:"/search?text="+v,params:t.ctx.family&&"&family=yes",url:"//"+x+("com.tr"==b?"/gorsel":"/images")},mail:{service:"mail",target:k},maps:{service:"maps",search:"/?text="+v,target:k},market:{service:"market",search:"com.tr"==b?"/search?text="+v:"/search.xml?text="+v,target:k},music:{search:"/search?text="+v,target:k},news:{service:"news",search:"/yandsearch?text="+v,params:"&rpt=nnews2&grhow=clutop",target:k},peoplesearch:{url:"//yandex."+(b||"ru"),search:g+"?text="+v,params:"&filter=people",target:t.ctx.isNewPpl?"":k},rabota:{search:"/search.xml?text="+v,target:k},rasp:{search:w,target:k},realty:{search:w,target:k},review:{},serp:{service:"www",url:"//"+y,search:g+"?text="+v,ajax:!0},sloavri:{service:"slovari",search:"/"+v+"/значение/",target:k},slovari:{service:"slovari",search:"/"+v+"/значение/",target:k},ticket:{service:"avia",target:k},translate:{service:"translate",search:"/?text="+v,target:k},tv:{target:k},video:{service:"video",search:"/search?text="+v,params:t.ctx.family&&"&family=yes",url:"//"+y+"/video"},weather:{service:"weather",search:w,target:k},web:{service:"www",url:"//"+y,search:g+"?text="+v},www:{service:"www",url:"//"+y,search:g+"?text="+v}}),E=M[t.ctx.service];
return t.ctx.isContextVerticalsEnable&&(E.url=t.ctx.url,E.search=null,E.params=null),t._localLog?(t._localLog.push([["__$anflg47"],!0]),n=t.__$anflg47,t.__$anflg47=!0,c=t._localLog?(t._localLog.push([["_mode"],""]),i=t.ctx,t.ctx=t._.extend(t.ctx,E),o=t._mode,t._mode="",s=Ci(t),t.ctx=i,t._mode=o,__bv143=s,t._localLog=t._localLog.slice(0,-1),__bv143):(r=t.ctx,t.ctx=t._.extend(t.ctx,E),a=t._mode,t._mode="",l=Ci(t),t.ctx=r,t._mode=a,l),t.__$anflg47=n,__bv144=c,t._localLog=t._localLog.slice(0,-1),__bv144):(e=t.__$anflg47,t.__$anflg47=!0,u=t._localLog?(t._localLog.push([["_mode"],""]),h=t.ctx,t.ctx=t._.extend(t.ctx,E),d=t._mode,t._mode="",_=Ci(t),t.ctx=h,t._mode=d,__bv143=_,t._localLog=t._localLog.slice(0,-1),__bv143):(p=t.ctx,t.ctx=t._.extend(t.ctx,E),m=t._mode,t._mode="",f=Ci(t),t.ctx=p,t._mode=m,f),t.__$anflg47=e,u)
}function ze(t){return!(t.__$anflg45!==!0)==!1?!!t.elem==!1?Fe(t):Re(t):Re(t)}function Fe(t){var e,n,i,o,s,r,a,l,c,u,h,d;
return t._localLog?(t._localLog.push([["__$anflg45"],!0]),n=t.__$anflg45,t.__$anflg45=!0,a=t._localLog?(t._localLog.push([["_moreCounter"],["ctx","moreCounter"]]),i=t._moreCounter,t._moreCounter=t.ctx.moreCounter,o=je(t),t._moreCounter=i,__bv140=o,t._localLog=t._localLog.slice(0,-1),__bv140):(s=t._moreCounter,t._moreCounter=t.ctx.moreCounter,r=je(t),t._moreCounter=s,r),t.__$anflg45=n,__bv141=a,t._localLog=t._localLog.slice(0,-1),__bv141):(e=t.__$anflg45,t.__$anflg45=!0,l=t._localLog?(t._localLog.push([["_moreCounter"],["ctx","moreCounter"]]),c=t._moreCounter,t._moreCounter=t.ctx.moreCounter,u=je(t),t._moreCounter=c,__bv140=u,t._localLog=t._localLog.slice(0,-1),__bv140):(h=t._moreCounter,t._moreCounter=t.ctx.moreCounter,d=je(t),t._moreCounter=h,d),t.__$anflg45=e,l)
}function Re(t){return"item"===t.elem?!t.ctx.ajax==!1?!!t.ajax==!1?qe(t):Ue(t):Ue(t):Ue(t)}function qe(t){var e,n,i,o;
return t._localLog?(t._localLog.push([["ajax"],!0]),e=t.ajax,t.ajax=!0,n=Ae(t),t.ajax=e,__bv139=n,t._localLog=t._localLog.slice(0,-1),__bv139):(i=t.ajax,t.ajax=!0,o=Ae(t),t.ajax=i,o)
}function Ue(t){return!(t.__$anflg42!==!0)==!1?!!t.elem==!1?!!t.mods["more-type"]==!1?He(t):oo(t):oo(t):oo(t)
}function He(t){if(t.ctx.mods=t.extend(t.ctx.mods||{},{"more-type":"popup"}),t._localLog){t._localLog.push([["__$anflg42"],!0]);
var e=t.__$anflg42;if(t.__$anflg42=!0,t._localLog){t._localLog.push([["_mode"],""]);var n=t.ctx;t.ctx=t.ctx;
var i=t._mode;t._mode="",Ci(t),t.ctx=n,t._mode=i,t._localLog=t._localLog.slice(0,-1)}else{var o=t.ctx;
t.ctx=t.ctx;var s=t._mode;t._mode="",Ci(t),t.ctx=o,t._mode=s}t.__$anflg42=e,t._localLog=t._localLog.slice(0,-1)
}else{var r=t.__$anflg42;if(t.__$anflg42=!0,t._localLog){t._localLog.push([["_mode"],""]);var a=t.ctx;
t.ctx=t.ctx;var l=t._mode;t._mode="",Ci(t),t.ctx=a,t._mode=l,t._localLog=t._localLog.slice(0,-1)}else{var c=t.ctx;
t.ctx=t.ctx;var u=t._mode;t._mode="",Ci(t),t.ctx=c,t._mode=u}t.__$anflg42=r}}function Ke(t){return"runner"===t.elem?Ve(t):Qe(t)
}function Ve(t){return!!t._done==!1?We(t):Qe(t)}function We(t){var e,n,i,o,s,r;return t._localLog?(t._localLog.push([["_value"],["ctx","value"]],[["_done"],!0]),e=t._value,t._value=t.ctx.value,n=t._done,t._done=!0,i=Ve(t),t._value=e,t._done=n,__bv131=i,t._localLog=t._localLog.slice(0,-2),__bv131):(o=t._value,t._value=t.ctx.value,s=t._done,t._done=!0,r=Ve(t),t._value=o,t._done=s,r)
}function Qe(t){return!(t.__$anflg39!==!0)==!1?!!t.elem==!1?Ge(t):oo(t):oo(t)}function Ge(t){var e=t.generateId();
if(t._localLog){t._localLog.push([["__$anflg39"],!0]);var n=t.__$anflg39;if(t.__$anflg39=!0,t._localLog){__bv128="title"+e,t._localLog.push([["_inSlider"],!0],[["_titleId"],__bv128]);
var i=t._inSlider;t._inSlider=!0;var o=t._titleId;t._titleId=__bv128,Ke(t),t._inSlider=i,t._titleId=o,t._localLog=t._localLog.slice(0,-2)
}else{var s=t._inSlider;t._inSlider=!0;var r=t._titleId;t._titleId="title"+e,Ke(t),t._inSlider=s,t._titleId=r
}t.__$anflg39=n,t._localLog=t._localLog.slice(0,-1)}else{var a=t.__$anflg39;if(t.__$anflg39=!0,t._localLog){__bv128="title"+e,t._localLog.push([["_inSlider"],!0],[["_titleId"],__bv128]);
var l=t._inSlider;t._inSlider=!0;var c=t._titleId;t._titleId=__bv128,Ke(t),t._inSlider=l,t._titleId=c,t._localLog=t._localLog.slice(0,-2)
}else{var u=t._inSlider;t._inSlider=!0;var h=t._titleId;t._titleId="title"+e,Ke(t),t._inSlider=u,t._titleId=h
}t.__$anflg39=a}}function Xe(t){var e,n,i,o,s,r,a,l,c,u,h,d,_,p,m,f,g=t.ctx.mods||{};return g.theme||(g.theme="gray-32"),t.ctx.mods=g,t.ctx.content={block:"image",mix:[{block:"spin",elem:"icon"}]},t._localLog?(t._localLog.push([["__$anflg37"],!0]),n=t.__$anflg37,t.__$anflg37=!0,c=t._localLog?(t._localLog.push([["_mode"],""]),i=t.ctx,t.ctx=t.ctx,o=t._mode,t._mode="",s=Ci(t),t.ctx=i,t._mode=o,__bv125=s,t._localLog=t._localLog.slice(0,-1),__bv125):(r=t.ctx,t.ctx=t.ctx,a=t._mode,t._mode="",l=Ci(t),t.ctx=r,t._mode=a,l),t.__$anflg37=n,__bv126=c,t._localLog=t._localLog.slice(0,-1),__bv126):(e=t.__$anflg37,t.__$anflg37=!0,u=t._localLog?(t._localLog.push([["_mode"],""]),h=t.ctx,t.ctx=t.ctx,d=t._mode,t._mode="",_=Ci(t),t.ctx=h,t._mode=d,__bv125=_,t._localLog=t._localLog.slice(0,-1),__bv125):(p=t.ctx,t.ctx=t.ctx,m=t._mode,t._mode="",f=Ci(t),t.ctx=p,t._mode=m,f),t.__$anflg37=e,u)
}function Ye(t){return!(t.__$anflg36!==!0)==!1?!!t.elem==!1?Ze(t):oo(t):oo(t)}function Ze(t){var e=t.ctx,n=(e.controlAttrs||{}).id||t.generateId(),i=e.mods||{};
if(i.theme=i.theme||"normal",t._localLog){t._localLog.push([["__$anflg36"],!0]);var o=t.__$anflg36;if(t.__$anflg36=!0,t._localLog){__bv122={elem:"control",attrs:e.controlAttrs,id:n,labelledby:"text"+n,name:e.name,tabindex:e.tabindex,checked:t.mods.checked,disabled:t.mods.disabled,value:e.value||e.content},t._localLog.push([["_control"],__bv122]);
var s=t._control;t._control=__bv122;var r=e.mods;e.mods=i,Ye(t),t._control=s,e.mods=r,t._localLog=t._localLog.slice(0,-1)
}else{var a=t._control;t._control={elem:"control",attrs:e.controlAttrs,id:n,labelledby:"text"+n,name:e.name,tabindex:e.tabindex,checked:t.mods.checked,disabled:t.mods.disabled,value:e.value||e.content};
var l=e.mods;e.mods=i,Ye(t),t._control=a,e.mods=l}t.__$anflg36=o,t._localLog=t._localLog.slice(0,-1)}else{var c=t.__$anflg36;
if(t.__$anflg36=!0,t._localLog){__bv122={elem:"control",attrs:e.controlAttrs,id:n,labelledby:"text"+n,name:e.name,tabindex:e.tabindex,checked:t.mods.checked,disabled:t.mods.disabled,value:e.value||e.content},t._localLog.push([["_control"],__bv122]);
var u=t._control;t._control=__bv122;var h=e.mods;e.mods=i,Ye(t),t._control=u,e.mods=h,t._localLog=t._localLog.slice(0,-1)
}else{var d=t._control;t._control={elem:"control",attrs:e.controlAttrs,id:n,labelledby:"text"+n,name:e.name,tabindex:e.tabindex,checked:t.mods.checked,disabled:t.mods.disabled,value:e.value||e.content};
var _=e.mods;e.mods=i,Ye(t),t._control=d,e.mods=_}t.__$anflg36=c}}function Je(t){return!(t.__$anflg35!==!0)==!1?!(t.ctx.data&&t.ctx.data.results_count<=0)==!1?!!t.elem==!1?tn(t):en(t):en(t):en(t)
}function tn(t){if(t._localLog){t._localLog.push([["__$anflg35"],!0]);var e=t.__$anflg35;if(t.__$anflg35=!0,t._localLog){var n=t.ctx,i=n.mods;
n.mods=t._.extend(t.ctx.mods||{},{message:"not-found"}),Je(t),n.mods=i}else{var o=t.ctx,s=o.mods;o.mods=t._.extend(t.ctx.mods||{},{message:"not-found"}),Je(t),o.mods=s
}t.__$anflg35=e,t._localLog=t._localLog.slice(0,-1)}else{var r=t.__$anflg35;if(t.__$anflg35=!0,t._localLog){var a=t.ctx,l=a.mods;
a.mods=t._.extend(t.ctx.mods||{},{message:"not-found"}),Je(t),a.mods=l}else{var c=t.ctx,u=c.mods;c.mods=t._.extend(t.ctx.mods||{},{message:"not-found"}),Je(t),c.mods=u
}t.__$anflg35=r}}function en(t){return!(t.__$anflg34!==!0)==!1?!!t.ctx.data==!1?!!t.elem==!1?nn(t):oo(t):oo(t):oo(t)
}function nn(t){if(t._localLog){t._localLog.push([["__$anflg34"],!0]);var e=t.__$anflg34;if(t.__$anflg34=!0,t._localLog){var n=t.ctx,i=n.mods;
n.mods=t._.extend(t.ctx.mods||{},{empty:"yes"}),Je(t),n.mods=i}else{var o=t.ctx,s=o.mods;o.mods=t._.extend(t.ctx.mods||{},{empty:"yes"}),Je(t),o.mods=s
}t.__$anflg34=e,t._localLog=t._localLog.slice(0,-1)}else{var r=t.__$anflg34;if(t.__$anflg34=!0,t._localLog){var a=t.ctx,l=a.mods;
a.mods=t._.extend(t.ctx.mods||{},{empty:"yes"}),Je(t),a.mods=l}else{var c=t.ctx,u=c.mods;c.mods=t._.extend(t.ctx.mods||{},{empty:"yes"}),Je(t),c.mods=u
}t.__$anflg34=r}}function on(t){return!(t.__$anflg33!==!0)==!1?sn(t):oo(t)}function sn(t){if(t._localLog){t._localLog.push([["__$anflg33"],!0]);
var e=t.__$anflg33;if(t.__$anflg33=!0,t._localLog){t._localLog.push([["_exp"],["ctx","exp"]],[["_size"],["ctx","size"]]);
var n=t._exp;t._exp=t.ctx.exp;var i=t._size;t._size=t.ctx.size,on(t),t._exp=n,t._size=i,t._localLog=t._localLog.slice(0,-2)
}else{var o=t._exp;t._exp=t.ctx.exp;var s=t._size;t._size=t.ctx.size,on(t),t._exp=o,t._size=s}t.__$anflg33=e,t._localLog=t._localLog.slice(0,-1)
}else{var r=t.__$anflg33;if(t.__$anflg33=!0,t._localLog){t._localLog.push([["_exp"],["ctx","exp"]],[["_size"],["ctx","size"]]);
var a=t._exp;t._exp=t.ctx.exp;var l=t._size;t._size=t.ctx.size,on(t),t._exp=a,t._size=l,t._localLog=t._localLog.slice(0,-2)
}else{var c=t._exp;t._exp=t.ctx.exp;var u=t._size;t._size=t.ctx.size,on(t),t._exp=c,t._size=u}t.__$anflg33=r
}}function rn(t){return!(t.__$anflg29!==!0)==!1?!(t.mods&&"nav"===t.mods.type)==!1?!!t.elem==!1?an(t):oo(t):oo(t):oo(t)
}function an(t){var e,n,i,o,s,r,a,l,c,u,h,d,_,p,m,f,g,v,b,y,x=t.ctx.data,k=x[4],w=(k.match(/^\w[\w-]*:\/\//g)?"":"http://")+k,M=BEM.blocks["i-common__string"].escapeHTML(x[3]),E="&nbsp;&mdash;&nbsp;"+BEM.blocks["i-common__string"].highlight(x[2],t.ctx.hl);
return t._localLog?(t._localLog.push([["__$anflg29"],!0]),n=t.__$anflg29,t.__$anflg29=!0,h=t._localLog?(t._localLog.push([["_linkUrlContent"],M],[["_linkInfoConten"],E],[["_url"],w]),i=t._linkUrlContent,t._linkUrlContent=M,o=t._linkInfoConten,t._linkInfoConten=E,s=t._url,t._url=w,r=rn(t),t._linkUrlContent=i,t._linkInfoConten=o,t._url=s,__bv101=r,t._localLog=t._localLog.slice(0,-3),__bv101):(a=t._linkUrlContent,t._linkUrlContent=M,l=t._linkInfoConten,t._linkInfoConten=E,c=t._url,t._url=w,u=rn(t),t._linkUrlContent=a,t._linkInfoConten=l,t._url=c,u),t.__$anflg29=n,__bv102=h,t._localLog=t._localLog.slice(0,-1),__bv102):(e=t.__$anflg29,t.__$anflg29=!0,d=t._localLog?(t._localLog.push([["_linkUrlContent"],M],[["_linkInfoConten"],E],[["_url"],w]),_=t._linkUrlContent,t._linkUrlContent=M,p=t._linkInfoConten,t._linkInfoConten=E,m=t._url,t._url=w,f=rn(t),t._linkUrlContent=_,t._linkInfoConten=p,t._url=m,__bv101=f,t._localLog=t._localLog.slice(0,-3),__bv101):(g=t._linkUrlContent,t._linkUrlContent=M,v=t._linkInfoConten,t._linkInfoConten=E,b=t._url,t._url=w,y=rn(t),t._linkUrlContent=g,t._linkInfoConten=v,t._url=b,y),t.__$anflg29=e,d)
}function ln(t){return!(t.__$anflg28!==!0)==!1?!!t.elem==!1?cn(t):oo(t):oo(t)}function cn(t){if(t._localLog){t._localLog.push([["__$anflg28"],!0]);
var e=t.__$anflg28;if(t.__$anflg28=!0,t._localLog){__bv95=t.ctx.count||0,__bv96=t.ctx.maxCount||99,t._localLog.push([["_count"],__bv95],[["_maxCount"],__bv96],[["_url"],["ctx","url"]]);
var n=t._count;t._count=__bv95;var i=t._maxCount;t._maxCount=__bv96;var o=t._url;t._url=t.ctx.url,ln(t),t._count=n,t._maxCount=i,t._url=o,t._localLog=t._localLog.slice(0,-3)
}else{var s=t._count;t._count=t.ctx.count||0;var r=t._maxCount;t._maxCount=t.ctx.maxCount||99;var a=t._url;
t._url=t.ctx.url,ln(t),t._count=s,t._maxCount=r,t._url=a}t.__$anflg28=e,t._localLog=t._localLog.slice(0,-1)
}else{var l=t.__$anflg28;if(t.__$anflg28=!0,t._localLog){__bv95=t.ctx.count||0,__bv96=t.ctx.maxCount||99,t._localLog.push([["_count"],__bv95],[["_maxCount"],__bv96],[["_url"],["ctx","url"]]);
var c=t._count;t._count=__bv95;var u=t._maxCount;t._maxCount=__bv96;var h=t._url;t._url=t.ctx.url,ln(t),t._count=c,t._maxCount=u,t._url=h,t._localLog=t._localLog.slice(0,-3)
}else{var d=t._count;t._count=t.ctx.count||0;var _=t._maxCount;t._maxCount=t.ctx.maxCount||99;var p=t._url;
t._url=t.ctx.url,ln(t),t._count=d,t._maxCount=_,t._url=p}t.__$anflg28=l}}function un(t){return!(t.__$anflg26!==!0)==!1?!!t.elem==!1?hn(t):oo(t):oo(t)
}function hn(t){var e=t.ctx,n=e.checkboxAttrs||{},i=n.id||t.generateId(),o=e.mods||{};if(o.theme=o.theme||"normal",t._localLog){t._localLog.push([["__$anflg26"],!0]);
var s=t.__$anflg26;if(t.__$anflg26=!0,t._localLog){__bv90=n.id?n:{id:"id"+i},__bv91="label"+i,t._localLog.push([["_checkboxAttrs"],__bv90],[["_labelId"],__bv91]);
var r=t._checkboxAttrs;t._checkboxAttrs=__bv90;var a=t._labelId;t._labelId=__bv91;var l=e.mods;e.mods=o,un(t),t._checkboxAttrs=r,t._labelId=a,e.mods=l,t._localLog=t._localLog.slice(0,-2)
}else{var c=t._checkboxAttrs;t._checkboxAttrs=n.id?n:{id:"id"+i};var u=t._labelId;t._labelId="label"+i;
var h=e.mods;e.mods=o,un(t),t._checkboxAttrs=c,t._labelId=u,e.mods=h}t.__$anflg26=s,t._localLog=t._localLog.slice(0,-1)
}else{var d=t.__$anflg26;if(t.__$anflg26=!0,t._localLog){__bv90=n.id?n:{id:"id"+i},__bv91="label"+i,t._localLog.push([["_checkboxAttrs"],__bv90],[["_labelId"],__bv91]);
var _=t._checkboxAttrs;t._checkboxAttrs=__bv90;var p=t._labelId;t._labelId=__bv91;var m=e.mods;e.mods=o,un(t),t._checkboxAttrs=_,t._labelId=p,e.mods=m,t._localLog=t._localLog.slice(0,-2)
}else{var f=t._checkboxAttrs;t._checkboxAttrs=n.id?n:{id:"id"+i};var g=t._labelId;t._labelId="label"+i;
var v=e.mods;e.mods=o,un(t),t._checkboxAttrs=f,t._labelId=g,e.mods=v}t.__$anflg26=d}}function dn(t){var e=t.elem;
return"hint"===e?!(t.__$anflg25!==!0)==!1?!!t._value==!1?!(0!==t._value)==!1?_n(t):mn(t):mn(t):mn(t):"control"===e?!(t.__$anflg11!==!0)==!1?!!t.mods.clear==!1?pn(t):mn(t):mn(t):mn(t)
}function _n(t){var e,n,i,o,s,r,a,l,c,u,h,d,_,p,m,f,g=t.ctx,v=g.elemMods||(g.elemMods={});return v.visibility="visible",t._localLog?(t._localLog.push([["__$anflg25"],!0]),n=t.__$anflg25,t.__$anflg25=!0,c=t._localLog?(t._localLog.push([["_mode"],""]),i=t.ctx,t.ctx=g,o=t._mode,t._mode="",s=Ci(t),t.ctx=i,t._mode=o,__bv87=s,t._localLog=t._localLog.slice(0,-1),__bv87):(r=t.ctx,t.ctx=g,a=t._mode,t._mode="",l=Ci(t),t.ctx=r,t._mode=a,l),t.__$anflg25=n,__bv88=c,t._localLog=t._localLog.slice(0,-1),__bv88):(e=t.__$anflg25,t.__$anflg25=!0,u=t._localLog?(t._localLog.push([["_mode"],""]),h=t.ctx,t.ctx=g,d=t._mode,t._mode="",_=Ci(t),t.ctx=h,t._mode=d,__bv87=_,t._localLog=t._localLog.slice(0,-1),__bv87):(p=t.ctx,t.ctx=g,m=t._mode,t._mode="",f=Ci(t),t.ctx=p,t._mode=m,f),t.__$anflg25=e,u)
}function pn(t){if(t._localLog){t._localLog.push([["__$anflg11"],!0]);var e=t.__$anflg11;if(t.__$anflg11=!0,t._localLog){t._localLog.push([["_mode"],""]);
var n=t.ctx;t.ctx={elem:"box",tag:"span",content:[t.ctx,{elem:"clear",elemMods:t._value||0===t._value?{visibility:"visible"}:void 0}]};
var i=t._mode;t._mode="",Ci(t),t.ctx=n,t._mode=i,t._localLog=t._localLog.slice(0,-1)}else{var o=t.ctx;
t.ctx={elem:"box",tag:"span",content:[t.ctx,{elem:"clear",elemMods:t._value||0===t._value?{visibility:"visible"}:void 0}]};
var s=t._mode;t._mode="",Ci(t),t.ctx=o,t._mode=s}t.__$anflg11=e,t._localLog=t._localLog.slice(0,-1)}else{var r=t.__$anflg11;
if(t.__$anflg11=!0,t._localLog){t._localLog.push([["_mode"],""]);var a=t.ctx;t.ctx={elem:"box",tag:"span",content:[t.ctx,{elem:"clear",elemMods:t._value||0===t._value?{visibility:"visible"}:void 0}]};
var l=t._mode;t._mode="",Ci(t),t.ctx=a,t._mode=l,t._localLog=t._localLog.slice(0,-1)}else{var c=t.ctx;
t.ctx={elem:"box",tag:"span",content:[t.ctx,{elem:"clear",elemMods:t._value||0===t._value?{visibility:"visible"}:void 0}]};
var u=t._mode;t._mode="",Ci(t),t.ctx=c,t._mode=u}t.__$anflg11=r}}function mn(t){return!(t.__$anflg10!==!0)==!1?!!t.elem==!1?fn(t):oo(t):oo(t)
}function fn(t){var e,n,i,o,s,r,a=t._localLog?(t._localLog.push([["_mode"],"value"]),e=t._mode,t._mode="value",n=t.ctx,t.ctx=t.ctx.value,i=Gi(t),t._mode=e,t.ctx=n,__bv42=i,t._localLog=t._localLog.slice(0,-1),__bv42):(o=t._mode,t._mode="value",s=t.ctx,t.ctx=t.ctx.value,r=Gi(t),t._mode=o,t.ctx=s,r),l=t.ctx.id||t.generateId(),c=t.ctx.mods||{},u=t.ctx.js||{};
if(c.theme=c.theme||"normal",t._localLog){t._localLog.push([["__$anflg10"],!0]);var h=t.__$anflg10;if(t.__$anflg10=!0,t._localLog){__bv43="label"+l,__bv44="hint"+l,__bv45=t.ctx.name||"",__bv46=u.live||!1,t._localLog.push([["_inputId"],l],[["_labelId"],__bv43],[["_hintId"],__bv44],[["_name"],__bv45],[["_value"],a],[["_inputLink"],!0],[["_disabled"],["mods","disabled"]],[["_live"],__bv46]);
var d=t._inputId;t._inputId=l;var _=t._labelId;t._labelId=__bv43;var p=t._hintId;t._hintId=__bv44;var m=t._name;
t._name=__bv45;var f=t._value;t._value=a;var g=t._inputLink;t._inputLink=!0;var v=t._disabled;t._disabled=t.mods.disabled;
var b=t._live;t._live=__bv46;var y=t.ctx,x=y.mods;y.mods=c,dn(t),t._inputId=d,t._labelId=_,t._hintId=p,t._name=m,t._value=f,t._inputLink=g,t._disabled=v,t._live=b,y.mods=x,t._localLog=t._localLog.slice(0,-8)
}else{var k=t._inputId;t._inputId=l;var w=t._labelId;t._labelId="label"+l;var M=t._hintId;t._hintId="hint"+l;
var E=t._name;t._name=t.ctx.name||"";var B=t._value;t._value=a;var S=t._inputLink;t._inputLink=!0;var L=t._disabled;
t._disabled=t.mods.disabled;var C=t._live;t._live=u.live||!1;var I=t.ctx,P=I.mods;I.mods=c,dn(t),t._inputId=k,t._labelId=w,t._hintId=M,t._name=E,t._value=B,t._inputLink=S,t._disabled=L,t._live=C,I.mods=P
}t.__$anflg10=h,t._localLog=t._localLog.slice(0,-1)}else{var D=t.__$anflg10;if(t.__$anflg10=!0,t._localLog){__bv43="label"+l,__bv44="hint"+l,__bv45=t.ctx.name||"",__bv46=u.live||!1,t._localLog.push([["_inputId"],l],[["_labelId"],__bv43],[["_hintId"],__bv44],[["_name"],__bv45],[["_value"],a],[["_inputLink"],!0],[["_disabled"],["mods","disabled"]],[["_live"],__bv46]);
var T=t._inputId;t._inputId=l;var O=t._labelId;t._labelId=__bv43;var $=t._hintId;t._hintId=__bv44;var j=t._name;
t._name=__bv45;var A=t._value;t._value=a;var N=t._inputLink;t._inputLink=!0;var z=t._disabled;t._disabled=t.mods.disabled;
var F=t._live;t._live=__bv46;var R=t.ctx,q=R.mods;R.mods=c,dn(t),t._inputId=T,t._labelId=O,t._hintId=$,t._name=j,t._value=A,t._inputLink=N,t._disabled=z,t._live=F,R.mods=q,t._localLog=t._localLog.slice(0,-8)
}else{var U=t._inputId;t._inputId=l;var H=t._labelId;t._labelId="label"+l;var K=t._hintId;t._hintId="hint"+l;
var V=t._name;t._name=t.ctx.name||"";var W=t._value;t._value=a;var Q=t._inputLink;t._inputLink=!0;var G=t._disabled;
t._disabled=t.mods.disabled;var X=t._live;t._live=u.live||!1;var Y=t.ctx,Z=Y.mods;Y.mods=c,dn(t),t._inputId=U,t._labelId=H,t._hintId=K,t._name=V,t._value=W,t._inputLink=Q,t._disabled=G,t._live=X,Y.mods=Z
}t.__$anflg10=D}}function gn(t){var e=t.ctx,n=[{block:"dropdown",elem:"popup"}];if(e.mix&&(n=n.concat(e.mix)),t._localLog){t._localLog.push([["__$anflg24"],!0]);
var i=t.__$anflg24;if(t.__$anflg24=!0,t._localLog){t._localLog.push([["_mode"],""]);var o=t.ctx;t.ctx={block:"popup",mix:n,mods:e.mods,attrs:e.attrs,js:e.js,content:[{elem:"tail"},{elem:"content",content:e.content}]};
var s=t._mode;t._mode="",Ci(t),t.ctx=o,t._mode=s,t._localLog=t._localLog.slice(0,-1)}else{var r=t.ctx;
t.ctx={block:"popup",mix:n,mods:e.mods,attrs:e.attrs,js:e.js,content:[{elem:"tail"},{elem:"content",content:e.content}]};
var a=t._mode;t._mode="",Ci(t),t.ctx=r,t._mode=a}t.__$anflg24=i,t._localLog=t._localLog.slice(0,-1)}else{var l=t.__$anflg24;
if(t.__$anflg24=!0,t._localLog){t._localLog.push([["_mode"],""]);var c=t.ctx;t.ctx={block:"popup",mix:n,mods:e.mods,attrs:e.attrs,js:e.js,content:[{elem:"tail"},{elem:"content",content:e.content}]};
var u=t._mode;t._mode="",Ci(t),t.ctx=c,t._mode=u,t._localLog=t._localLog.slice(0,-1)}else{var h=t.ctx;
t.ctx={block:"popup",mix:n,mods:e.mods,attrs:e.attrs,js:e.js,content:[{elem:"tail"},{elem:"content",content:e.content}]};
var d=t._mode;t._mode="",Ci(t),t.ctx=h,t._mode=d}t.__$anflg24=l}}function vn(t){return"retpath"===t.elem?bn(t):xn(t)
}function bn(t){return!(t.__$anflg23!==!0)==!1?yn(t):xn(t)}function yn(t){if(t._localLog){t._localLog.push([["__$anflg23"],!0]);
var e=t.__$anflg23;if(t.__$anflg23=!0,t._localLog){__bv82=BEM&&BEM.blocks?BEM.blocks["i-global"].param("retpath"):t["i-global"].retpath,t._localLog.push([["_retpath"],__bv82]);
var n=t._retpath;t._retpath=__bv82,bn(t),t._retpath=n,t._localLog=t._localLog.slice(0,-1)}else{var i=t._retpath;
t._retpath=BEM&&BEM.blocks?BEM.blocks["i-global"].param("retpath"):t["i-global"].retpath,bn(t),t._retpath=i
}t.__$anflg23=e,t._localLog=t._localLog.slice(0,-1)}else{var o=t.__$anflg23;if(t.__$anflg23=!0,t._localLog){__bv82=BEM&&BEM.blocks?BEM.blocks["i-global"].param("retpath"):t["i-global"].retpath,t._localLog.push([["_retpath"],__bv82]);
var s=t._retpath;t._retpath=__bv82,bn(t),t._retpath=s,t._localLog=t._localLog.slice(0,-1)}else{var r=t._retpath;
t._retpath=BEM&&BEM.blocks?BEM.blocks["i-global"].param("retpath"):t["i-global"].retpath,bn(t),t._retpath=r
}t.__$anflg23=o}}function xn(t){return!(t.__$anflg22!==!0)==!1?!!t.elem==!1?kn(t):oo(t):oo(t)}function kn(t){var e,n,i,o;
if(BEM&&BEM.blocks?(o=BEM.blocks["i-global"],e=o.param("passport-host"),n=o.param("retpath"),i=o.param("passport-msg")):(o=t["i-global"],e=o["passport-host"],n=o.retpath,i=o["passport-msg"]),t._localLog){t._localLog.push([["__$anflg22"],!0]);
var s=t.__$anflg22;if(t.__$anflg22=!0,t._localLog){__bv78=n?"&retpath="+encodeURIComponent(n):"",__bv79=i?"&from="+encodeURIComponent(i):"",t._localLog.push([["_passportHost"],e],[["_paramRetpath"],__bv78],[["_paramFrom"],__bv79]);
var r=t._passportHost;t._passportHost=e;var a=t._paramRetpath;t._paramRetpath=__bv78;var l=t._paramFrom;
t._paramFrom=__bv79,vn(t),t._passportHost=r,t._paramRetpath=a,t._paramFrom=l,t._localLog=t._localLog.slice(0,-3)
}else{var c=t._passportHost;t._passportHost=e;var u=t._paramRetpath;t._paramRetpath=n?"&retpath="+encodeURIComponent(n):"";
var h=t._paramFrom;t._paramFrom=i?"&from="+encodeURIComponent(i):"",vn(t),t._passportHost=c,t._paramRetpath=u,t._paramFrom=h
}t.__$anflg22=s,t._localLog=t._localLog.slice(0,-1)}else{var d=t.__$anflg22;if(t.__$anflg22=!0,t._localLog){__bv78=n?"&retpath="+encodeURIComponent(n):"",__bv79=i?"&from="+encodeURIComponent(i):"",t._localLog.push([["_passportHost"],e],[["_paramRetpath"],__bv78],[["_paramFrom"],__bv79]);
var _=t._passportHost;t._passportHost=e;var p=t._paramRetpath;t._paramRetpath=__bv78;var m=t._paramFrom;
t._paramFrom=__bv79,vn(t),t._passportHost=_,t._paramRetpath=p,t._paramFrom=m,t._localLog=t._localLog.slice(0,-3)
}else{var f=t._passportHost;t._passportHost=e;var g=t._paramRetpath;t._paramRetpath=n?"&retpath="+encodeURIComponent(n):"";
var v=t._paramFrom;t._paramFrom=i?"&from="+encodeURIComponent(i):"",vn(t),t._passportHost=f,t._paramRetpath=g,t._paramFrom=v
}t.__$anflg22=d}}function wn(t){return!(t.__$anflg21!==!0)==!1?!(t.mods&&"hidden"===t.mods.type)==!1?!!t.elem==!1?Mn(t):En(t):En(t):En(t)
}function Mn(t){var e,n,i,o,s,r,a,l,c,u,h,d,_,p,m,f;return t._localLog?(t._localLog.push([["__$anflg21"],!0]),n=t.__$anflg21,t.__$anflg21=!0,c=t._localLog?(t._localLog.push([["_mode"],""]),i=t.ctx,t.ctx={block:"auth",mix:[{block:"domik",mods:{type:"hidden"}}],js:!1,attrs:{style:"display:none"},content:[{tag:"input",attrs:{name:"login"}},{tag:"input",attrs:{name:"passwd",type:"password"}}]},o=t._mode,t._mode="",s=Ci(t),t.ctx=i,t._mode=o,__bv74=s,t._localLog=t._localLog.slice(0,-1),__bv74):(r=t.ctx,t.ctx={block:"auth",mix:[{block:"domik",mods:{type:"hidden"}}],js:!1,attrs:{style:"display:none"},content:[{tag:"input",attrs:{name:"login"}},{tag:"input",attrs:{name:"passwd",type:"password"}}]},a=t._mode,t._mode="",l=Ci(t),t.ctx=r,t._mode=a,l),t.__$anflg21=n,__bv75=c,t._localLog=t._localLog.slice(0,-1),__bv75):(e=t.__$anflg21,t.__$anflg21=!0,u=t._localLog?(t._localLog.push([["_mode"],""]),h=t.ctx,t.ctx={block:"auth",mix:[{block:"domik",mods:{type:"hidden"}}],js:!1,attrs:{style:"display:none"},content:[{tag:"input",attrs:{name:"login"}},{tag:"input",attrs:{name:"passwd",type:"password"}}]},d=t._mode,t._mode="",_=Ci(t),t.ctx=h,t._mode=d,__bv74=_,t._localLog=t._localLog.slice(0,-1),__bv74):(p=t.ctx,t.ctx={block:"auth",mix:[{block:"domik",mods:{type:"hidden"}}],js:!1,attrs:{style:"display:none"},content:[{tag:"input",attrs:{name:"login"}},{tag:"input",attrs:{name:"passwd",type:"password"}}]},m=t._mode,t._mode="",f=Ci(t),t.ctx=p,t._mode=m,f),t.__$anflg21=e,u)
}function En(t){return!!t.elem==!1?!!(t.ctx.mods||{}).logo==!1?Bn(t):oo(t):oo(t)}function Bn(t){var e,n;
if(BEM.blocks?(n=BEM.blocks["i-global"],e=n.param("lang")):(n=t["i-global"],e=n.lang),t._localLog){var i=t.ctx,o=i.mods;
i.mods=t.extend(t.ctx.mods||{},{logo:~["en","tr"].indexOf(e)?"en":"ru"}),wn(t),i.mods=o}else{var s=t.ctx,r=s.mods;
s.mods=t.extend(t.ctx.mods||{},{logo:~["en","tr"].indexOf(e)?"en":"ru"}),wn(t),s.mods=r}}function Sn(t){return!(t.__$anflg18!==!0)==!1?!!t.elem==!1?Ln(t):Cn(t):Cn(t)
}function Ln(t){var e,n,i,o,s,r,a,l,c,u,h,d,_,p,m,f,g=t.ctx.service;return t._localLog?(t._localLog.push([["__$anflg18"],!0]),n=t.__$anflg18,t.__$anflg18=!0,c=t._localLog?(t._localLog.push([["_mode"],""]),i=t.ctx,t.ctx=t._.extend(t.ctx,{mix:(t.ctx.mix||[]).concat({block:"service",mods:{name:g}}),counter:t.ctx.counter||t["i-global"]._counter&&t["i-global"]._counter("/table/"+g)}),o=t._mode,t._mode="",s=Ci(t),t.ctx=i,t._mode=o,__bv69=s,t._localLog=t._localLog.slice(0,-1),__bv69):(r=t.ctx,t.ctx=t._.extend(t.ctx,{mix:(t.ctx.mix||[]).concat({block:"service",mods:{name:g}}),counter:t.ctx.counter||t["i-global"]._counter&&t["i-global"]._counter("/table/"+g)}),a=t._mode,t._mode="",l=Ci(t),t.ctx=r,t._mode=a,l),t.__$anflg18=n,__bv70=c,t._localLog=t._localLog.slice(0,-1),__bv70):(e=t.__$anflg18,t.__$anflg18=!0,u=t._localLog?(t._localLog.push([["_mode"],""]),h=t.ctx,t.ctx=t._.extend(t.ctx,{mix:(t.ctx.mix||[]).concat({block:"service",mods:{name:g}}),counter:t.ctx.counter||t["i-global"]._counter&&t["i-global"]._counter("/table/"+g)}),d=t._mode,t._mode="",_=Ci(t),t.ctx=h,t._mode=d,__bv69=_,t._localLog=t._localLog.slice(0,-1),__bv69):(p=t.ctx,t.ctx=t._.extend(t.ctx,{mix:(t.ctx.mix||[]).concat({block:"service",mods:{name:g}}),counter:t.ctx.counter||t["i-global"]._counter&&t["i-global"]._counter("/table/"+g)}),m=t._mode,t._mode="",f=Ci(t),t.ctx=p,t._mode=m,f),t.__$anflg18=e,u)
}function Cn(t){return!(t.__$anflg16!==!0)==!1?!!t.elem==!1?In(t):oo(t):oo(t)}function In(t){var e,n,i,o,s,r,a,l,c,u,h,d,_,p,m,f,g,v,b,y,x=t.ctx;
return t._localLog?(t._localLog.push([["__$anflg16"],!0]),n=t.__$anflg16,t.__$anflg16=!0,h=t._localLog?(__bv62=x.url!==!1&&(x.url||t["i-services"].serviceUrl(x.service)),__bv63=x.icon!==!1,__bv64=x.name!==!1,t._localLog.push([["_url"],__bv62],[["_icon"],__bv63],[["_name"],__bv64]),i=t._url,t._url=__bv62,o=t._icon,t._icon=__bv63,s=t._name,t._name=__bv64,r=Sn(t),t._url=i,t._icon=o,t._name=s,__bv65=r,t._localLog=t._localLog.slice(0,-3),__bv65):(a=t._url,t._url=x.url!==!1&&(x.url||t["i-services"].serviceUrl(x.service)),l=t._icon,t._icon=x.icon!==!1,c=t._name,t._name=x.name!==!1,u=Sn(t),t._url=a,t._icon=l,t._name=c,u),t.__$anflg16=n,__bv66=h,t._localLog=t._localLog.slice(0,-1),__bv66):(e=t.__$anflg16,t.__$anflg16=!0,d=t._localLog?(__bv62=x.url!==!1&&(x.url||t["i-services"].serviceUrl(x.service)),__bv63=x.icon!==!1,__bv64=x.name!==!1,t._localLog.push([["_url"],__bv62],[["_icon"],__bv63],[["_name"],__bv64]),_=t._url,t._url=__bv62,p=t._icon,t._icon=__bv63,m=t._name,t._name=__bv64,f=Sn(t),t._url=_,t._icon=p,t._name=m,__bv65=f,t._localLog=t._localLog.slice(0,-3),__bv65):(g=t._url,t._url=x.url!==!1&&(x.url||t["i-services"].serviceUrl(x.service)),v=t._icon,t._icon=x.icon!==!1,b=t._name,t._name=x.name!==!1,y=Sn(t),t._url=g,t._icon=v,t._name=b,y),t.__$anflg16=e,d)
}function Pn(t){return!(t.__$anflg14!==!0)==!1?!(t.mods&&"yes"===t.mods["service-label"])==!1?!!t.elem==!1?Dn(t):oo(t):oo(t):oo(t)
}function Dn(t){var e,n,i,o,s,r,a,l,c,u,h,d;return t._localLog?(t._localLog.push([["__$anflg14"],!0]),n=t.__$anflg14,t.__$anflg14=!0,a=t._localLog?(t._localLog.push([["_service"],["ctx","service"]]),i=t._service,t._service=t.ctx.service,o=Pn(t),t._service=i,__bv58=o,t._localLog=t._localLog.slice(0,-1),__bv58):(s=t._service,t._service=t.ctx.service,r=Pn(t),t._service=s,r),t.__$anflg14=n,__bv59=a,t._localLog=t._localLog.slice(0,-1),__bv59):(e=t.__$anflg14,t.__$anflg14=!0,l=t._localLog?(t._localLog.push([["_service"],["ctx","service"]]),c=t._service,t._service=t.ctx.service,u=Pn(t),t._service=c,__bv58=u,t._localLog=t._localLog.slice(0,-1),__bv58):(h=t._service,t._service=t.ctx.service,d=Pn(t),t._service=h,d),t.__$anflg14=e,l)
}function Tn(t){return!(t.__$anflg12!==!0)==!1?!!t.elem==!1?On(t):oo(t):oo(t)}function On(t){var e,n,i,o,s,r,a,l,c,u,h,d,_,p,m,f;
return t._localLog?(t._localLog.push([["__$anflg12"],!0]),n=t.__$anflg12,t.__$anflg12=!0,c=t._localLog?(i=t.ctx,o=i.mods,i.mods=t._.extend({state:"close",theme:"normal"},t.ctx.mods),s=Tn(t),i.mods=o,s):(r=t.ctx,a=r.mods,r.mods=t._.extend({state:"close",theme:"normal"},t.ctx.mods),l=Tn(t),r.mods=a,l),t.__$anflg12=n,__bv53=c,t._localLog=t._localLog.slice(0,-1),__bv53):(e=t.__$anflg12,t.__$anflg12=!0,u=t._localLog?(h=t.ctx,d=h.mods,h.mods=t._.extend({state:"close",theme:"normal"},t.ctx.mods),_=Tn(t),h.mods=d,_):(p=t.ctx,m=p.mods,p.mods=t._.extend({state:"close",theme:"normal"},t.ctx.mods),f=Tn(t),p.mods=m,f),t.__$anflg12=e,u)
}function $n(t){var e,n,i,o,s,r,a,l;if(!t.ctx)return"";var c=t.ctx,u=c.keyset,h=c.key,d=c.params||{};
if(!u&&!h)return"";if(c.content){var _;d.content=(_=[],t._localLog?(t._localLog.push([["_buf"],_],[["_mode"],""]),e=t._buf,t._buf=_,n=t._mode,t._mode="",i=t.ctx,t.ctx=c.content,o=Ci(t),t._buf=e,t._mode=n,t.ctx=i,__bv52=o,t._localLog=t._localLog.slice(0,-2),__bv52):(s=t._buf,t._buf=_,r=t._mode,t._mode="",a=t.ctx,t.ctx=c.content,l=Ci(t),t._buf=s,t._mode=r,t.ctx=a,l),_.join(""))
}t._buf.push(BEM.I18N(u,h,d))}function jn(t){return"group"===t.elem?An(t):zn(t)}function An(t){return!(t.__$anflg9!==!0)==!1?Nn(t):zn(t)
}function Nn(t){if(t._localLog){t._localLog.push([["__$anflg9"],!0]);var e=t.__$anflg9;if(t.__$anflg9=!0,t._localLog){__bv38=t.generateId(),t._localLog.push([["_labelId"],__bv38]);
var n=t._labelId;t._labelId=__bv38,An(t),t._labelId=n,t._localLog=t._localLog.slice(0,-1)}else{var i=t._labelId;
t._labelId=t.generateId(),An(t),t._labelId=i}t.__$anflg9=e,t._localLog=t._localLog.slice(0,-1)}else{var o=t.__$anflg9;
if(t.__$anflg9=!0,t._localLog){__bv38=t.generateId(),t._localLog.push([["_labelId"],__bv38]);var s=t._labelId;
t._labelId=__bv38,An(t),t._labelId=s,t._localLog=t._localLog.slice(0,-1)}else{var r=t._labelId;t._labelId=t.generateId(),An(t),t._labelId=r
}t.__$anflg9=o}}function zn(t){return!(t.__$anflg6!==!0)==!1?!!t.elem==!1?Fn(t):oo(t):oo(t)}function Fn(t){var e=t.ctx,n=e.id||t.generateId();
if(t._localLog){t._localLog.push([["__$anflg6"],!0]);var i=t.__$anflg6;if(t.__$anflg6=!0,t._localLog){__bv32={id:n,name:e.name||n,tabindex:e.tabindex},__bv33={block:t.block,mods:t.mods,tabindex:e.tabindex},t._localLog.push([["_controlAttrs"],__bv32],[["_formSelect"],__bv33]);
var o=t._controlAttrs;t._controlAttrs=__bv32;var s=t._formSelect;t._formSelect=__bv33,jn(t),t._controlAttrs=o,t._formSelect=s,t._localLog=t._localLog.slice(0,-2)
}else{var r=t._controlAttrs;t._controlAttrs={id:n,name:e.name||n,tabindex:e.tabindex};var a=t._formSelect;
t._formSelect={block:t.block,mods:t.mods,tabindex:e.tabindex},jn(t),t._controlAttrs=r,t._formSelect=a
}t.__$anflg6=i,t._localLog=t._localLog.slice(0,-1)}else{var l=t.__$anflg6;if(t.__$anflg6=!0,t._localLog){__bv32={id:n,name:e.name||n,tabindex:e.tabindex},__bv33={block:t.block,mods:t.mods,tabindex:e.tabindex},t._localLog.push([["_controlAttrs"],__bv32],[["_formSelect"],__bv33]);
var c=t._controlAttrs;t._controlAttrs=__bv32;var u=t._formSelect;t._formSelect=__bv33,jn(t),t._controlAttrs=c,t._formSelect=u,t._localLog=t._localLog.slice(0,-2)
}else{var h=t._controlAttrs;t._controlAttrs={id:n,name:e.name||n,tabindex:e.tabindex};var d=t._formSelect;
t._formSelect={block:t.block,mods:t.mods,tabindex:e.tabindex},jn(t),t._controlAttrs=h,t._formSelect=d
}t.__$anflg6=l}}function Rn(t){return!(t.__$anflg8!==!0)==!1?!t._formSelect==!1?!!t.elem==!1?qn(t):Un(t):Un(t):Un(t)
}function qn(t){var e=t.ctx,n=t._formSelect.mods,i=t._formSelect.tabindex,o=e.mods||{};if(o.arrow="down",n.theme&&(o.theme=n.theme),n.size&&(o.size=n.size),"yes"===n.disabled&&(o.disabled="yes"),e.mods=o,i&&(e.tabindex=i),t._localLog){t._localLog.push([["__$anflg8"],!0]);
var s=t.__$anflg8;if(t.__$anflg8=!0,t._localLog){var r=t.ctx,a=r._theme;r._theme=!0,Rn(t),r._theme=a}else{var l=t.ctx,c=l._theme;
l._theme=!0,Rn(t),l._theme=c}t.__$anflg8=s,t._localLog=t._localLog.slice(0,-1)}else{var u=t.__$anflg8;
if(t.__$anflg8=!0,t._localLog){var h=t.ctx,d=h._theme;h._theme=!0,Rn(t),h._theme=d}else{var _=t.ctx,p=_._theme;
_._theme=!0,Rn(t),_._theme=p}t.__$anflg8=u}}function Un(t){return!(t.__$anflg2!==!0)==!1?!!t.elem==!1?Hn(t):oo(t):oo(t)
}function Hn(t){var e=t.ctx.mods||{};if(e.theme=e.theme||"normal",t._localLog){t._localLog.push([["__$anflg2"],!0]);
var n=t.__$anflg2;if(t.__$anflg2=!0,t._localLog){var i=t.ctx,o=i.mods;i.mods=e,Rn(t),i.mods=o}else{var s=t.ctx,r=s.mods;
s.mods=e,Rn(t),s.mods=r}t.__$anflg2=n,t._localLog=t._localLog.slice(0,-1)}else{var a=t.__$anflg2;if(t.__$anflg2=!0,t._localLog){var l=t.ctx,c=l.mods;
l.mods=e,Rn(t),l.mods=c}else{var u=t.ctx,h=u.mods;u.mods=e,Rn(t),u.mods=h}t.__$anflg2=a}}function Kn(t){return!!t._popupDefaults==!1?!!t.elem==!1?Vn(t):oo(t):oo(t)
}function Vn(t){var e=t.ctx;if(e.mods=t.mods=t.extend({theme:"ffffff",autoclosable:"yes",adaptive:"yes",animate:"yes"},t.mods),e.zIndex){var n=e.attrs||(e.attrs={});
n.style=(n.style||"")+";z-index:"+e.zIndex+";"}if(t._localLog){t._localLog.push([["_popupDefaults"],!0]);
var i=t._popupDefaults;t._popupDefaults=!0,Kn(t),t._popupDefaults=i,t._localLog=t._localLog.slice(0,-1)
}else{var o=t._popupDefaults;t._popupDefaults=!0,Kn(t),t._popupDefaults=o}}function Wn(t){var e=t.elem;
return"lego-static-host"===e?"//yastatic.net/lego/2.10-142":"export-host"===e?"https://export.yandex.ru":"social-host"===e?"https://social.yandex.ru":"pass-host"===e?"https://pass.yandex.ru":"passport-host"===e?"https://passport.yandex.ru":"click-host"===e?"//clck.yandex.ru":"content-region"===e||"tld"===e||"lang"===e?"ru":!t.elem==!1?"":!!t.elem==!1?Qn(t):oo(t)
}function Qn(t){var e,n,i,o=t.ctx.params||{},s=t["i-global"],r=o.tld&&o.tld!==s.tld;r&&(e=o.tld,n="tr"===e?"yandex.com.tr":"yandex."+e,i=-1!=["ua","by","kz"].indexOf(e)?"yandex.ru":n,s["content-region"]=e,s["click-host"]="//clck."+i,s["passport-host"]="https://passport."+i,s["pass-host"]="https://pass."+n,s["social-host"]="https://social."+n,s["export-host"]="https://export."+n);
for(var a in o)s[a]=o[a]}function Gn(t){var e=t.block;if("navigation"===e){var e=t.elem;return"more"===e?[{elem:"item"}]:"item"===e?[{elemMods:{name:t.ctx.service,state:t.ctx.selected?"selected":null}}]:ii(t)
}if("image"===e)return!(t.mods&&"yes"===t.mods.placeholder)==!1?!!t.elem==!1?[{block:"content-placeholder"}]:ii(t):ii(t);
if("b-autocomplete-item"===e)return!(t.mods&&"foot"===t.mods.type)==!1?!!t.elem==!1?[{mods:{enterable:"no"}}]:ei(t):ei(t);
if("notice"===e){var e=t.elem;return"text"===e?[{block:"a11y-hidden"}]:"count"===e?!!t.ctx.url==!1?[{elem:"plain"}]:ii(t):ii(t)
}if("input"===e)return!t._inSlider==!1?!!t.elem==!1?[{block:"slider",elem:"input"}]:ti(t):ti(t);if("dropdown"===e)return!!t.elem==!1?[{mods:{action:"closed"}}]:ii(t);
if("service"===e){var e=t.elem;return"url"===e?!t.ajax==!1?{block:"link",mods:{pseudo:"yes",ajax:"yes"},js:!0}:[{block:"link"}]:"icon"===e?[{block:"service-icon",elem:t.ctx.service,elemMods:t.ctx.elemMods}]:ii(t)
}if("suggest2-item"===e)return"text"===t.elem?!(t.mods&&"link"===t.mods.interact)==!1?!("nav"===t.mods.type||"icon"===t.mods.type)==!1?{mods:{type:"url"}}:ii(t):ii(t):ii(t);
if("suggest2"===e)return!!t.elem==!1?[{block:"suggest2-detect",js:!0}]:ii(t);if("select"===e){if("group"===t.elem){var n=t.isFirst()?t.isLast()?"both":"first":t.isLast()?"last":"middle";
return{mods:{position:n}}}return ii(t)}if("slider"===e)return"body"===t.elem?Xn(t):ii(t);if("button"===e)return!t._formSelect==!1?!!t.elem==!1?[{block:t._formSelect.block,elem:"button"}]:ii(t):ii(t);
if("ticker"===e){var e=t.elem;return"text"===e?[{block:"a11y-hidden"}]:"count"===e?!!t.ctx.url==!1?[{elem:"plain"}]:ni(t):ni(t)
}return ii(t)}function Xn(t){return!(t.__$anflg41!==!0)==!1?!t.mods.type==!1?!!t.ctx._wType==!1?Yn(t):Zn(t):Zn(t):Zn(t)
}function Yn(t){var e,n,i,o,s,r,a,l,c,u,h,d,_,p,m,f,g=(t._localLog?(t._localLog.push([["__$anflg41"],!0]),n=t.__$anflg41,t.__$anflg41=!0,c=t._localLog?(i=t.ctx,o=i._wType,i._wType=!0,s=Xn(t),i._wType=o,s):(r=t.ctx,a=r._wType,r._wType=!0,l=Xn(t),r._wType=a,l),t.__$anflg41=n,__bv133=c,t._localLog=t._localLog.slice(0,-1),__bv133):(e=t.__$anflg41,t.__$anflg41=!0,u=t._localLog?(h=t.ctx,d=h._wType,h._wType=!0,_=Xn(t),h._wType=d,_):(p=t.ctx,m=p._wType,p._wType=!0,f=Xn(t),p._wType=m,f),t.__$anflg41=e,u))||[];
return g.push({elemMods:{type:t.mods.type}}),g}function Zn(t){return!(t.__$anflg40!==!0)==!1?!t.mods.orientation==!1?!!t.ctx._wOrigin==!1?Jn(t):ii(t):ii(t):ii(t)
}function Jn(t){var e,n,i,o,s,r,a,l,c,u,h,d,_,p,m,f,g=(t._localLog?(t._localLog.push([["__$anflg40"],!0]),n=t.__$anflg40,t.__$anflg40=!0,c=t._localLog?(i=t.ctx,o=i._wOrigin,i._wOrigin=!0,s=Xn(t),i._wOrigin=o,s):(r=t.ctx,a=r._wOrigin,r._wOrigin=!0,l=Xn(t),r._wOrigin=a,l),t.__$anflg40=n,__bv132=c,t._localLog=t._localLog.slice(0,-1),__bv132):(e=t.__$anflg40,t.__$anflg40=!0,u=t._localLog?(h=t.ctx,d=h._wOrigin,h._wOrigin=!0,_=Xn(t),h._wOrigin=d,_):(p=t.ctx,m=p._wOrigin,p._wOrigin=!0,f=Xn(t),p._wOrigin=m,f),t.__$anflg40=e,u))||[];
return g.push({elemMods:{origin:"vert"===t.mods.orientation?"y":"x"}}),g}function ti(t){return"ahead"===t.elem?[{block:"input",elem:"input"}]:ii(t)
}function ei(t){return!!t.elem==!1?[{mods:{pers:t.ctx.pers?"yes":""}}]:ii(t)}function ni(t){return!!t._count==!1?!!t.elem==!1?[{mods:{state:"empty"}}]:ii(t):ii(t)
}function ii(){return void 0}function oi(t){var e=t.block;return"navigation"===e?!!t.elem==!1?!0:pi(t):"input"===e?ai(t):"notice"===e?!!t.elem==!1?!0:!("undefined"!=typeof t.ctx.count)==!1?!!t.elem==!1?{count:t.ctx.count}:pi(t):pi(t):"ticker"===e?!!t.elem==!1?{count:t._count,maxCount:t._maxCount}:pi(t):"checkbox"===e?!!t.elem==!1?_i(t):pi(t):"z-interactive"===e?"form-table"===t.elem?{size:t.ctx.size,i18n:t.ctx.i18n,limit:t.ctx.limit,backend:t.ctx.backend,baseline3:t.ctx.baseline3}:pi(t):"auth"===e?!!t.elem==!1?!0:pi(t):"domik"===e?!(t.mods&&"hidden"===t.mods.type)==!1?!!t.elem==!1?!1:pi(t):pi(t):"link"===e?!t.ctx.hasOwnProperty("tabindex")==!1?{origTabindex:String(t.ctx.tabindex)}:pi(t):"suggest2-item"===e||"suggest2"===e||"check-button"===e||"select"===e?!!t.elem==!1?!0:pi(t):"b-autocomplete-item"===e?!(t.mods&&"service-pay"===t.mods.type)==!1?!!t.elem==!1?t.ctx.data[2]:si(t):si(t):"button"===e||"dropdown"===e?!!t.elem==!1?!0:pi(t):pi(t)
}function si(t){return!(t.mods&&"nav"===t.mods.type)==!1?!!t.elem==!1?{val:t._url}:ri(t):ri(t)}function ri(t){return!!t.elem==!1?!0:!t.ctx.search_cgi==!1?!t._.isArray(t.ctx.search_cgi)==!1?{cgi:t.ctx.search_cgi}:pi(t):pi(t)
}function ai(t){return!(t.__$anflg32!==!0)==!1?!(t.mods&&"ahead"===t.mods.tap)==!1?!!t.elem==!1?li(t):ci(t):ci(t):ci(t)
}function li(t){var e,n,i,o;return t.extend(t._localLog?(t._localLog.push([["__$anflg32"],!0]),e=t.__$anflg32,t.__$anflg32=!0,n=ai(t),t.__$anflg32=e,__bv105=n,t._localLog=t._localLog.slice(0,-1),__bv105):(i=t.__$anflg32,t.__$anflg32=!0,o=ai(t),t.__$anflg32=i,o),{live:!1})
}function ci(t){return!(t.__$anflg13!==!0)==!1?!(t.mods&&"yes"===t.mods.autofocus)==!1?!!t.elem==!1?ui(t):hi(t):hi(t):hi(t)
}function ui(t){var e,n,i,o;return t.extend(t._localLog?(t._localLog.push([["__$anflg13"],!0]),e=t.__$anflg13,t.__$anflg13=!0,n=ai(t),t.__$anflg13=e,__bv57=n,t._localLog=t._localLog.slice(0,-1),__bv57):(i=t.__$anflg13,t.__$anflg13=!0,o=ai(t),t.__$anflg13=i,o),{live:!1})
}function hi(t){return!!t.elem==!1?di(t):pi(t)}function di(t){var e,n,i,o,s=t._localLog?(t._localLog.push([["_mode"],"live"]),e=t._mode,t._mode="live",n=Ni(t),t._mode=e,__bv41=n,t._localLog=t._localLog.slice(0,-1),__bv41):(i=t._mode,t._mode="live",o=Ni(t),t._mode=i,o),r=t.ctx.js;
if(r){if(r.autoFocus&&r.live)throw new Error('input block can\'t have both "live" and "autoFocus" enabled');
"live"in r&&(s=r.live),r.autoFocus&&(s=!1)}return"gradient"==t.mods.popup?{live:s,popupMods:{gradient:"yes"}}:{live:s}
}function _i(t){var e,n,i,o,s=t.ctx.js,r=Object(s).hasOwnProperty("live")?s.live:t._localLog?(t._localLog.push([["_mode"],"live"]),e=t._mode,t._mode="live",n=Ai(t),t._mode=e,__bv89=n,t._localLog=t._localLog.slice(0,-1),__bv89):(i=t._mode,t._mode="live",o=Ai(t),t._mode=i,o);
return{live:r}}function pi(){return void 0}function mi(t){var e=t.block;if("b-link"===e)return!!t.elem==!1?"a":yi(t);
if("b-autocomplete-item"===e)return!!t.elem==!1?"li":yi(t);if("dropdown"===e)return!(t.mods&&"yes"===t.mods.advanced)==!1?!!t.elem==!1?"span":vi(t):vi(t);
if("notice"===e||"ticker"===e){var e=t.elem;return"value"===e||"text"===e?"span":"count"===e?!t.ctx.url==!1?"a":"span":!!t.elem==!1?"span":yi(t)
}if("input"===e){var e=t.elem;return"calendar"===e?"i":"label"===e||"hint"===e?"label":"box-layout-cell"===e?!t._service==!1?"td":gi(t):"box-layout"===e?!t._service==!1?"table":gi(t):"clear"===e?"span":"control"===e?"input":"ahead-hint"===e||"ahead-filler"===e?"span":gi(t)
}if("auth"===e){var e=t.elem;return"social-link"===e?"a":"social-icon"===e?"i":"retpath"===e?"input":!!t.elem==!1?"form":yi(t)
}if("popup"===e)return"tail"===t.elem?"i":yi(t);if("domik"===e){var e=t.elem;return"logo"===e||"roof-body"===e||"roof-border"===e?"i":yi(t)
}if("link"===e)return"inner"===t.elem?"span":!!t.elem==!1?t.ctx.url?"a":"span":yi(t);if("service"===e)return"url"===t.elem?"a":yi(t);
if("z-interactive"===e){var e=t.elem;return"send-form"===e||"form"===e?"form":"cell"===e||"row"===e||"table"===e?"div":yi(t)
}if("search"===e){var e=t.elem;return"cell"===e?"td":"row"===e?"tr":"table"===e?"table":!!t.elem==!1?"form":yi(t)
}if("interactive-results"===e)return"image"===t.elem?"i":yi(t);if("suggest2-item"===e){var e=t.elem;return"icon"===e?"span":"link"===e?"a":"bullet"===e?"span":"highlight"===e?"b":"fact"===e||"text"===e?"span":!!t.elem==!1?"li":yi(t)
}if("check-button"===e)return"control"===t.elem?"input":!!t.elem==!1?"label":yi(t);if("suggest2"===e){var e=t.elem;
return"a11y"===e?"span":"items"===e?"ul":yi(t)}if("spin"===e)return"label"===t.elem?"span":yi(t);if("select"===e){var e=t.elem;
return"control"===e?"select":"text"===e?"span":"option-group"===e?"optgroup":"option"===e?"option":!!t.elem==!1?"span":yi(t)
}if("image"===e)return!!t.elem==!1?"img":yi(t);if("button"===e)return!t.ctx.url==!1?!!t.elem==!1?"a":bi(t):bi(t);
if("slider"===e)return!(t.mods&&"interactive"===t.mods["for"])==!1?!~["title-from","title-to"].indexOf(t.elem)==!1?"span":fi(t):fi(t);
if("b-statcounter"===e)return!!t.elem==!1?"i":yi(t);if("b-icon"===e)return!!t.elem==!1?"img":yi(t);if("i-ua"===e)return!!t.elem==!1?"script":yi(t);
if("checkbox"===e){var e=t.elem;return"label"===e?"label":"control"===e?"input":!!t.elem==!1?"span":yi(t)
}return yi(t)}function fi(t){var e=t.elem;return"unit"===e||"title"===e||"text"===e?"span":"runner"===e?"a":yi(t)
}function gi(t){return!!t.elem==!1?"span":yi(t)}function vi(t){var e=t.elem;return"hidden-value"===e?!(t.mods&&"yes"===t.mods.advanced)==!1?"input":yi(t):"switcher-text"===e||"text"===e?"span":yi(t)
}function bi(t){return!!t.elem==!1?"button":yi(t)}function yi(){return void 0}function xi(t){if(0===t._value)return"";
var e=t._value<10?"0"+t._value:t._value,n="tr"===BEM.I18N.lang()?{elem:"price-cents",content:e}:e;return[",",n]
}function ki(t){var e="tr"===BEM.I18N.lang()?".":"&thinsp;";return t._value.replace(/(\d)(?=(?:\d\d\d)+$)/g,"$1"+e)
}function wi(t){return!t.ctx.price_currency==!1?Mi(t):""}function Mi(t){var e,n,i,o,s,r,a,l,c,u,h,d,_,p,m=(t.ctx.price_currency||"").toUpperCase();
return[t._localLog?(t._localLog.push([["_mode"],"price-format"],[["_value"],["ctx","price"]]),n=t._mode,t._mode="price-format",l=t._value,t._value=t.ctx.price,i=ki(t),t._mode=n,t._value=l,__bv119=i,t._localLog=t._localLog.slice(0,-2),__bv119):(o=t._mode,t._mode="price-format",s=t._value,t._value=t.ctx.price,r=ki(t),t._mode=o,t._value=s,r),t._localLog?(__bv120=parseInt(t.ctx.price_cents,10),t._localLog.push([["_mode"],"price-format-cents"],[["_value"],__bv120],[["_currency"],["ctx","price_currency"]]),a=t._mode,t._mode="price-format-cents",e=t._value,t._value=__bv120,c=t._currency,t._currency=t.ctx.price_currency,u=xi(t),t._mode=a,t._value=e,t._currency=c,__bv121=u,t._localLog=t._localLog.slice(0,-3),__bv121):(h=t._mode,t._mode="price-format-cents",d=t._value,t._value=parseInt(t.ctx.price_cents,10),_=t._currency,t._currency=t.ctx.price_currency,p=xi(t),t._mode=h,t._value=d,t._currency=_,p),"&nbsp;"+(t._currency[m]||m)]
}function Ei(){return 30}function Bi(t){var e=new Date;e.setDate(e.getDate()+(t._offset||0));var n=e.getMonth()+1,i=e.getDate();
return e.getFullYear()+"-"+(10>n?"0"+n:n)+"-"+(10>i?"0"+i:i)}function Si(){return 24}function Li(){return{block:"select",elem:"option",attrs:{value:""},content:"&mdash;"}
}function Ci(t){return!t._==!1?!!t._.cleverSubstring==!1?(t._.cleverSubstring=function(t,e,n){return t.length>e+n?t.substring(0,e-1)+"…":t
},mo(t),void 0):Ii(t):Ii(t)}function Ii(t){return!t["i-global"]==!1?!!t["i-services"]==!1?Pi(t):Di(t):Di(t)
}function Pi(t){var e,n,i,o,s,r,a=t["i-services"]={},l=t["i-global"];a._data=t._localLog?(t._localLog.push([["block"],"i-services"],[["_mode"],"service-url"]),e=t.block,t.block="i-services",n=t._mode,t._mode="service-url",i=qi(t),t.block=e,t._mode=n,__bv61=i,t._localLog=t._localLog.slice(0,-2),__bv61):(o=t.block,t.block="i-services",s=t._mode,t._mode="service-url",r=qi(t),t.block=o,t._mode=s,r),a.serviceName=function(t){return BEM.I18N("i-services",t||l.id)
},a.serviceUrl=function(t,e){return t||(t=l.id),a._data[t](e||l["content-region"])},mo(t)}function Di(t){return"popup"===t.block?!t._popupDefaults==!1?!!t.elem==!1?(delete t._popupDefaults,mo(t),void 0):Ti(t):Ti(t):Ti(t)
}function Ti(t){return!!t["i-global"]==!1?Oi(t):oo(t)}function Oi(t){for(var e,n,i,o,s,r,a,l,c,u,h,d,_,p,m,f={},g=["lang","tld","content-region","click-host","passport-host","pass-host","social-host","export-host","login","lego-static-host"];m=g.shift();)f[m]=t._localLog?(t._localLog.push([["_mode"],"default"],[["block"],"i-global"],[["elem"],m]),n=t._mode,t._mode="default",l=t.block,t.block="i-global",i=t.elem,t.elem=m,o=Wn(t),t._mode=n,t.block=l,t.elem=i,__bv24=o,t._localLog=t._localLog.slice(0,-3),__bv24):(s=t._mode,t._mode="default",r=t.block,t.block="i-global",a=t.elem,t.elem=m,e=Wn(t),t._mode=s,t.block=r,t.elem=a,e);
t["i-global"]=t._.extend(f,t._localLog?(t._localLog.push([["_mode"],"env"],[["block"],"i-global"]),c=t._mode,t._mode="env",u=t.block,t.block="i-global",h=eo(t),t._mode=c,t.block=u,__bv25=h,t._localLog=t._localLog.slice(0,-2),__bv25):(d=t._mode,t._mode="env",_=t.block,t.block="i-global",p=eo(t),t._mode=d,t.block=_,p)),mo(t)
}function $i(t){var e,n,i=t.ctx;return e=parseInt(i.count,10),n=i.maxCount?i.maxCount:99,e>n?n+"+":e}function ji(t){return t._count>t._maxCount?t._maxCount+"+":t._count
}function Ai(){return!1}function Ni(){return!1}function zi(t){return!!t.ctx.content==!1?!!t.elem==!1?[{elem:"username"},{elem:"password"},{elem:"row",mods:{button:"yes"},content:[{elem:"haunter"},{elem:"button"}]},{elem:"social"},{elem:"row",content:[{elem:"remember"},{elem:"register"}]}]:Fi(t):Fi(t)
}function Fi(t){return!!t.elem==!1?[]:oo(t)}function Ri(t){var e,n;return BEM&&BEM.blocks?(e=BEM.blocks["i-global"],n=e.param("passport-msg")):(e=t["i-global"],n=e["passport-msg"]),[t._passportHost,"/auth?twoweeks=yes",n?"&from="+encodeURIComponent(n):""].join("")
}function qi(t){return!!t.elem==!1?Ui(t):oo(t)}function Ui(){return{serp:function(t){return"ru"===t?"http://yandex.ru":"ua"===t?"http://yandex.ua":"by"===t?"http://yandex.by":"kz"===t?"http://yandex.kz":"com"===t?"http://www.yandex.com":"tr"===t?"http://www.yandex.com.tr":"http://yandex.ru"
},mail:function(t){return"ru"===t?"https://mail.yandex.ru":"ua"===t?"https://mail.yandex.ua":"by"===t?"https://mail.yandex.by":"kz"===t?"https://mail.yandex.kz":"com"===t?"https://mail.yandex.com":"tr"===t?"https://mail.yandex.com.tr":"https://mail.yandex.ru"
},pdd:function(t){return"ru"===t?"http://pdd.yandex.ru":"http://pdd.yandex.ru"},zakladki:function(t){return"ru"===t?"http://zakladki.yandex.ru":"http://zakladki.yandex.ru"
},fotki:function(t){return"ru"===t?"http://fotki.yandex.ru":"http://fotki.yandex.ru"},moikrug:function(t){return"ru"===t?"http://moikrug.ru":"http://moikrug.ru"
},direct:function(t){return"ru"===t?"http://direct.yandex.ru":"ua"===t?"http://direct.yandex.ua":"by"===t?"http://direct.yandex.by":"kz"===t?"http://direct.yandex.kz":"com"===t?"http://direct.yandex.com":"http://direct.yandex.ru"
},money:function(t){return"ru"===t?"https://money.yandex.ru":"https://money.yandex.ru"},lenta:function(t){return"ru"===t?"http://lenta.yandex.ru":"http://lenta.yandex.ru"
},market:function(t){return"ru"===t?"//market.yandex.ru":"ua"===t?"//market.yandex.ua":"by"===t?"//market.yandex.by":"kz"===t?"//market.yandex.kz":"tr"===t?"//market.yandex.com.tr":"//market.yandex.ru"
},"market.advertising":function(t){return"ru"===t?"http://welcome.advertising.yandex.ru/market/":"http://welcome.advertising.yandex.ru/market/"
},wow:function(t){return"ru"===t?"http://my.ya.ru":"http://my.ya.ru"},tv:function(t){return"ru"===t?"http://tv.yandex.ru":"ua"===t?"http://tv.yandex.ua":"by"===t?"http://tv.yandex.by":"kz"===t?"http://tv.yandex.kz":"http://tv.yandex.ru"
},afisha:function(t){return"ru"===t?"http://afisha.yandex.ru":"ua"===t?"http://afisha.yandex.ua":"by"===t?"http://afisha.yandex.by":"kz"===t?"http://afisha.yandex.kz":"tr"===t?"http://afis.yandex.com.tr":"http://afisha.yandex.ru"
},calendar:function(t){return"ru"===t?"http://calendar.yandex.ru":"http://calendar.yandex.ru"},nahodki:function(t){return"ru"===t?"http://nahodki.yandex.ru":"ua"===t?"http://nahodki.yandex.ua":"kz"===t?"http://nahodki.yandex.kz":"http://nahodki.yandex.ru"
},weather:function(t){return"ru"===t?"http://pogoda.yandex.ru":"ua"===t?"http://pogoda.yandex.ua":"by"===t?"http://pogoda.yandex.by":"kz"===t?"http://pogoda.yandex.kz":"tr"===t?"http://hava.yandex.com.tr":"http://pogoda.yandex.ru"
},kuda:function(t){return"ru"===t?"http://kuda.yandex.ru":"http://kuda.yandex.ru"},video:function(t){return"ru"===t?"http://www.yandex.ru/video/":"ua"===t?"http://www.yandex.ua/video/":"by"===t?"http://www.yandex.by/video/":"kz"===t?"http://www.yandex.kz/video/":"com"===t?"http://www.yandex.com/video/":"tr"===t?"http://www.yandex.com.tr/video/":"http://yandex.ru/video/"
},"video-com":function(t){return"ru"===t?"http://video.yandex.com":"http://video.yandex.com"},music:function(t){return"ru"===t?"//music.yandex.ru":"ua"===t?"//music.yandex.ua":"by"===t?"//music.yandex.by":"kz"===t?"//music.yandex.kz":"//music.yandex.ru"
},"music-partner":function(t){return"ru"===t?"http://music-partner.yandex.ru":"http://music-partner.yandex.ru"
},www:function(t){return"ru"===t?"http://www.yandex.ru":"ua"===t?"http://www.yandex.ua":"com"===t?"http://www.yandex.com":"by"===t?"http://www.yandex.by":"kz"===t?"http://www.yandex.kz":"tr"===t?"http://www.yandex.com.tr":"http://www.yandex.ru"
},search:function(t){return"ru"===t?"http://yandex.ru":"ua"===t?"http://yandex.ua":"com"===t?"http://yandex.com":"by"===t?"http://yandex.by":"kz"===t?"http://yandex.kz":"tr"===t?"http://yandex.com.tr":"http://yandex.ru"
},review:function(t){return"ru"===t?"http://yandex.ru":"ua"===t?"http://yandex.ua":"by"===t?"http://yandex.by":"kz"===t?"http://yandex.kz":"com"===t?"http://www.yandex.com":"tr"===t?"http://www.yandex.com.tr":"http://yandex.ru"
},fresh:function(t){return"ru"===t?"http://yandex.ru":"ua"===t?"http://yandex.ua":"by"===t?"http://yandex.by":"kz"===t?"http://yandex.kz":"com"===t?"http://www.yandex.com":"tr"===t?"http://www.yandex.com.tr":"http://yandex.ru"
},news:function(t){return"ru"===t?"http://news.yandex.ru":"ua"===t?"http://news.yandex.ua":"by"===t?"http://news.yandex.by":"kz"===t?"http://news.yandex.kz":"tr"===t?"http://haber.yandex.com.tr":"http://news.yandex.ru"
},"news-com":function(t){return"ru"===t?"http://news.yandex.com":"http://news.yandex.com"},maps:function(t){return"ru"===t?"//maps.yandex.ru":"ua"===t?"//maps.yandex.ua":"tr"===t?"//harita.yandex.com.tr":"//maps.yandex.ru"
},"maps-com":function(t){return"ru"===t?"http://maps.yandex.com":"http://maps.yandex.com"},probki:function(t){return"ru"===t?"http://probki.yandex.ru":"ua"===t?"http://probki.yandex.ua":"http://probki.yandex.ru"
},slovari:function(t){return"ru"===t?"//slovari.yandex.ru":"ua"===t?"//slovari.yandex.ua":"by"===t?"//slovari.yandex.by":"kz"===t?"//slovari.yandex.kz":"//slovari.yandex.ru"
},images:function(t){return"ru"===t?"http://www.yandex.ru/images/":"ua"===t?"http://www.yandex.ua/images/":"by"===t?"http://www.yandex.by/images/":"kz"===t?"http://www.yandex.kz/images/":"com"===t?"http://www.yandex.com/images/":"tr"===t?"http://www.yandex.com.tr/gorsel/":"http://yandex.ru/images/"
},"images-com":function(){return"http://www.yandex.com/images/"},blogs:function(t){return"ru"===t?"http://blogs.yandex.ru":"ua"===t?"http://blogs.yandex.ua":"by"===t?"http://blogs.yandex.by":"kz"===t?"http://blogs.yandex.kz":"http://blogs.yandex.ru"
},auto:function(t){return"ru"===t?"http://auto.yandex.ru":"ua"===t?"http://auto.yandex.ua":"http://auto.yandex.ru"
},adresa:function(t){return"ru"===t?"http://adresa.yandex.ru":"http://adresa.yandex.ru"},games:function(t){return"ru"===t?"http://games.yandex.ru":"http://games.yandex.ru"
},yaca:function(t){return"ru"===t?"http://yaca.yandex.ru":"ua"===t?"http://yaca.yandex.ua":"by"===t?"http://yaca.yandex.by":"http://yaca.yandex.ru"
},rasp:function(t){return"ru"===t?"http://rasp.yandex.ru":"ua"===t?"http://rasp.yandex.ua":"by"===t?"http://rasp.yandex.by":"kz"===t?"http://rasp.yandex.kz":"tr"===t?"http://seferler.yandex.com.tr":"http://rasp.yandex.ru"
},avia:function(t){return"ru"===t?"https://avia.yandex.ru":"ua"===t?"https://avia.yandex.ua":"https://avia.yandex.ru"
},ticket:function(){return"http://ticket.yandex.ru"},pvo:function(t){return"ru"===t?"http://ask.yandex.ru":"http://ask.yandex.ru"
},online:function(t){return"ru"===t?"http://online.yandex.ru":"http://online.yandex.ru"},books:function(t){return"ru"===t?"http://books.yandex.ru":"http://books.yandex.ru"
},site:function(t){return"ru"===t?"http://site.yandex.ru":"ua"===t?"http://site.yandex.ua":"tr"===t?"http://ozel.yandex.com.tr":"http://site.yandex.ru"
},bar:function(t){return"ru"===t?"http://bar.yandex.ru":"ua"===t?"http://bar.yandex.ua":"by"===t?"http://bar.yandex.by":"kz"===t?"http://bar.yandex.kz":"tr"===t?"http://bar.yandex.com.tr":"http://bar.yandex.ru"
},widgets:function(t){return"ru"===t?"http://widgets.yandex.ru":"ua"===t?"http://widgets.yandex.ua":"by"===t?"http://widgets.yandex.by":"kz"===t?"http://widgets.yandex.kz":"tr"===t?"http://widgets.yandex.com.tr":"http://widgets.yandex.ru"
},wdgt:function(t){return"ru"===t?"http://wdgt.yandex.ru":"ua"===t?"http://wdgt.yandex.ua":"by"===t?"http://wdgt.yandex.by":"kz"===t?"http://wdgt.yandex.kz":"tr"===t?"http://wdgt.yandex.com.tr":"http://wdgt.yandex.ru"
},interests:function(t){return"ru"===t?"http://interests.yandex.ru":"http://interests.yandex.ru"},kraski:function(t){return"ru"===t?"http://kraski.yandex.ru":"http://kraski.yandex.ru"
},local:function(t){return"ru"===t?"http://local.yandex.ru":"http://local.yandex.ru"},museums:function(t){return"ru"===t?"http://18.yandex.ru":"http://18.yandex.ru"
},collection:function(t){return"ru"===t?"http://collection.yandex.ru":"http://collection.yandex.ru"},company:function(t){return"ru"===t?"http://company.yandex.ru":"com"===t?"http://company.yandex.com":"tr"===t?"http://company.yandex.com.tr":"http://company.yandex.ru"
},tests:function(t){return"ru"===t?"http://tests.yandex.ru":"http://tests.yandex.ru"},referats:function(t){return"ru"===t?"http://referats.yandex.ru":"http://referats.yandex.ru"
},terms:function(t){return"ru"===t?"http://terms.yandex.ru":"http://terms.yandex.ru"},tune:function(t){return"ru"===t?"http://tune.yandex.ru":"ua"===t?"http://tune.yandex.ua":"com"===t?"http://tune.yandex.com":"by"===t?"http://tune.yandex.by":"kz"===t?"http://tune.yandex.kz":"tr"===t?"http://tune.yandex.com.tr":"http://tune.yandex.ru"
},api:function(t){return"ru"===t?"http://api.yandex.ru":"com"===t?"http://api.yandex.com":"http://api.yandex.ru"
},punto:function(t){return"ru"===t?"http://punto.yandex.ru":"http://punto.yandex.ru"},opinion:function(t){return"ru"===t?"http://opinion.yandex.ru":"http://opinion.yandex.ru"
},perevod:function(t){return"ru"===t?"http://perevod.yandex.ru":"http://perevod.yandex.ru"},rabota:function(t){return"ru"===t?"http://rabota.yandex.ru":"ua"===t?"http://rabota.yandex.ua":"by"===t?"http://rabota.yandex.by":"kz"===t?"http://rabota.yandex.kz":"http://rabota.yandex.ru"
},sprav:function(t){return"ru"===t?"http://sprav.yandex.ru":"ua"===t?"http://sprav.yandex.ua":"by"===t?"http://sprav.yandex.by":"kz"===t?"http://sprav.yandex.kz":"tr"===t?"http://rehber.yandex.com.tr":"http://sprav.yandex.ru"
},realty:function(t){return"ru"===t?"http://realty.yandex.ru":"ua"===t?"http://realty.yandex.ua":"by"===t?"http://realty.yandex.by":"kz"===t?"http://realty.yandex.kz":"http://realty.yandex.ru"
},advertising:function(t){return"ru"===t?"http://advertising.yandex.ru":"ua"===t?"http://advertising.yandex.ua":"com"===t?"http://advertising.yandex.com":"by"===t?"http://advertising.yandex.by":"kz"===t?"http://advertising.yandex.kz":"http://advertising.yandex.ru"
},expert:function(t){return"ru"===t?"http://expert.yandex.ru":"http://expert.yandex.ru"},"direct.market":function(t){return"ru"===t?"http://partner.market.yandex.ru/yandex.market/":"http://partner.market.yandex.ru/yandex.market/"
},ba:function(t){return"ru"===t?"http://ba.yandex.ru":"ua"===t?"http://ba.yandex.ua":"com"===t?"http://ba.yandex.com":"by"===t?"http://ba.yandex.by":"kz"===t?"http://ba.yandex.kz":"http://ba.yandex.ru"
},bayan:function(t){return"ru"===t?"http://bayan.yandex.ru":"http://bayan.yandex.ru"},partners:function(t){return"ru"===t?"http://partner.yandex.ru":"ua"===t?"http://partner.yandex.ua":"com"===t?"http://partner.yandex.com":"by"===t?"http://partner.yandex.by":"kz"===t?"http://partner.yandex.kz":"http://partner.yandex.ru"
},metrika:function(t){return"ru"===t?"https://metrika.yandex.ru":"ua"===t?"https://metrika.yandex.ua":"com"===t?"https://metrica.yandex.com":"by"===t?"https://metrika.yandex.by":"kz"===t?"https://metrika.yandex.kz":"tr"===t?"https://metrica.yandex.com.tr":"https://metrika.yandex.ru"
},balance:function(t){return"ru"===t?"http://balance.yandex.ru":"http://balance.yandex.ru"},wordstat:function(t){return"ru"===t?"http://wordstat.yandex.ru":"http://wordstat.yandex.ru"
},webmaster:function(t){return"ru"===t?"http://webmaster.yandex.ru":"ua"===t?"http://webmaster.yandex.ua":"com"===t?"http://webmaster.yandex.com":"tr"===t?"http://webmaster.yandex.com.tr":"http://webmaster.yandex.ru"
},server:function(t){return"ru"===t?"http://company.yandex.ru/technology/server/":"http://company.yandex.ru/technology/server/"
},stat:function(t){return"ru"===t?"http://stat.yandex.ru":"ua"===t?"http://stat.yandex.ua":"by"===t?"http://stat.yandex.by":"http://stat.yandex.ru"
},mobile:function(t){return"ru"===t?"http://mobile.yandex.ru":"ua"===t?"http://mobile.yandex.ua":"tr"===t?"http://mobil.yandex.com.tr":"http://mobile.yandex.ru"
},help:function(t){return"ru"===t?"http://help.yandex.ru":"ua"===t?"http://help.yandex.ua":"com"===t?"http://help.yandex.com":"tr"===t?"http://yardim.yandex.com.tr":"http://help.yandex.ru"
},feedback:function(t){return"ru"===t?"http://feedback.yandex.ru":"ua"===t?"http://feedback.yandex.ua":"com"===t?"http://feedback.yandex.com":"by"===t?"http://feedback.yandex.by":"kz"===t?"http://feedback.yandex.kz":"tr"===t?"http://contact.yandex.com.tr":"http://feedback.yandex.ru"
},feedback2:function(t){return"ru"===t?"http://feedback2.yandex.ru":"ua"===t?"http://feedback2.yandex.ua":"com"===t?"http://feedback2.yandex.com":"by"===t?"http://feedback2.yandex.by":"kz"===t?"http://feedback2.yandex.kz":"tr"===t?"http://contact2.yandex.com.tr":"http://feedback2.yandex.ru"
},start:function(t){return"ru"===t?"http://help.yandex.ru/start/":"ua"===t?"http://help.yandex.ua/start/":"com"===t?"http://help.yandex.com/start/":"tr"===t?"http://yardim.yandex.com.tr/start":"http://help.yandex.ru/start/"
},cityday:function(t){return"ru"===t?"http://cityday.yandex.ru":"http://cityday.yandex.ru"},openid:function(t){return"ru"===t?"http://openid.yandex.ru":"http://openid.yandex.ru"
},oauth:function(t){return"ru"===t?"https://oauth.yandex.ru":"com"===t?"https://oauth.yandex.com":"https://oauth.yandex.ru"
},nano:function(t){return"ru"===t?"http://nano.yandex.ru":"http://nano.yandex.ru"},partnersearch:function(t){return"ru"===t?"http://yandex.ru":"http://yandex.ru"
},city:function(t){return"ru"===t?"http://city.yandex.ru":"http://city.yandex.ru"},goroda:function(t){return"ru"===t?"http://goroda.yandex.ru":"http://goroda.yandex.ru"
},toster:function(t){return"ru"===t?"http://toster.yandex.ru":"http://toster.yandex.ru"},love:function(t){return"ru"===t?"http://love.yandex.ru":"http://love.yandex.ru"
},rk:function(t){return"ru"===t?"http://rk.yandex.ru":"http://rk.yandex.ru"},lost:function(t){return"ru"===t?"http://lost.yandex.ru":"http://lost.yandex.ru"
},soft:function(t){return"ru"===t?"http://soft.yandex.ru":"ua"===t?"http://soft.yandex.ua":"tr"===t?"http://soft.yandex.com.tr":"http://soft.yandex.ru"
},passport:function(t){return"ru"===t?"https://passport.yandex.ru":"com"===t?"https://passport.yandex.com":"tr"===t?"https://passport.yandex.com.tr":"https://passport.yandex.ru"
},"maps-wiki":function(t){return"ru"===t?"http://nk.yandex.ru":"http://nk.yandex.ru"},404:function(t){return"ru"===t?"http://404.yandex.ru":"ua"===t?"http://404.yandex.ua":"com"===t?"http://404.yandex.com":"by"===t?"http://404.yandex.by":"kz"===t?"http://404.yandex.kz":"tr"===t?"http://404.yandex.com.tr":"http://404.yandex.ru"
},i:function(t){return"ru"===t?"http://i.yandex.ru":"http://i.yandex.ru"},desktop:function(t){return"ru"===t?"http://desktop.yandex.ru":"http://desktop.yandex.ru"
},ff:function(t){return"ru"===t?"http://ff.yandex.ru":"http://ff.yandex.ru"},fx:function(t){return"ru"===t?"http://fx.yandex.ru":"ua"===t?"http://fx.yandex.ua":"tr"===t?"http://fx.yandex.com.tr":"http://fx.yandex.ru"
},ie:function(t){return"ru"===t?"http://ie.yandex.ru":"ua"===t?"http://ie.yandex.ua":"tr"===t?"http://ie.yandex.com.tr":"http://ie.yandex.ru"
},"bar-ie":function(t){return"ru"===t?"http://bar.yandex.ru/ie":"ua"===t?"http://bar.yandex.ua/ie":"com"===t?"http://bar.yandex.com/ie":"by"===t?"http://bar.yandex.by/ie":"kz"===t?"http://bar.yandex.kz/ie":"tr"===t?"http://bar.yandex.com.tr/ie":"http://bar.yandex.ru/ie"
},"bar-ie9":function(t){return"ru"===t?"http://bar.yandex.ru/ie":"ua"===t?"http://bar.yandex.ua/ie":"com"===t?"http://bar.yandex.com/ie":"by"===t?"http://bar.yandex.by/ie":"kz"===t?"http://bar.yandex.kz/ie":"tr"===t?"http://bar.yandex.com.tr/ie":"http://bar.yandex.ru/ie"
},internet:function(t){return"ru"===t?"http://internet.yandex.ru":"com"===t?"http://internet.yandex.com":"tr"===t?"http://internet.yandex.com.tr":"http://internet.yandex.ru"
},keyboard:function(t){return"ru"===t?"http://www.yandex.ru/index_engl_qwerty.html":"http://www.yandex.ru/index_engl_qwerty.html"
},metro:function(t){return"ru"===t?"http://metro.yandex.ru":"http://metro.yandex.ru"},pulse:function(t){return"ru"===t?"http://blogs.yandex.ru/pulse":"ua"===t?"http://blogs.yandex.ua/pulse":"by"===t?"http://blogs.yandex.by/pulse":"kz"===t?"http://blogs.yandex.kz/pulse":"http://blogs.yandex.ru/pulse"
},school:function(t){return"ru"===t?"http://school.yandex.ru":"http://school.yandex.ru"},so:function(t){return"ru"===t?"http://so.yandex.ru":"http://so.yandex.ru"
},time:function(t){return"ru"===t?"http://time.yandex.ru":"ua"===t?"http://time.yandex.ua":"com"===t?"http://time.yandex.com":"by"===t?"http://time.yandex.by":"kz"===t?"http://time.yandex.kz":"tr"===t?"http://saat.yandex.com.tr":"http://time.yandex.ru"
},xmlsearch:function(t){return"ru"===t?"http://xml.yandex.ru":"ua"===t?"http://xml.yandex.ua":"com"===t?"http://xml.yandex.com":"by"===t?"http://xml.yandex.by":"kz"===t?"http://xml.yandex.kz":"tr"===t?"http://xml.yandex.com.tr":"http://xml.yandex.ru"
},catalogwdgt:function(t){return"ru"===t?"http://www.yandex.ru/catalog":"http://www.yandex.ru/catalog"
},opera:function(t){return"ru"===t?"http://opera.yandex.ru":"tr"===t?"http://opera.yandex.com.tr":"http://opera.yandex.ru"
},uslugi:function(t){return"ru"===t?"http://uslugi.yandex.ru":"http://uslugi.yandex.ru"},backapv:function(t){return"ru"===t?"http://backapv.yandex.ru":"http://backapv.yandex.ru"
},chrome:function(t){return"ru"===t?"http://chrome.yandex.ru":"http://chrome.yandex.ru"},browser:function(t){return"ru"===t?"//browser.yandex.ru":"ua"===t?"//browser.yandex.ua":"com"===t?"//browser.yandex.com":"by"===t?"//browser.yandex.by":"kz"===t?"//browser.yandex.kz":"tr"===t?"//browser.yandex.com.tr":"//browser.yandex.ru"
},aziada:function(t){return"ru"===t?"http://aziada2011.yandex.kz":"http://aziada2011.yandex.kz"},translate:function(t){return"ru"===t?"//translate.yandex.ru":"ua"===t?"//translate.yandex.ua":"com"===t?"//translate.yandex.com":"by"===t?"//translate.yandex.by":"kz"===t?"//translate.yandex.kz":"tr"===t?"//ceviri.yandex.com.tr":"//translate.yandex.ru"
},subs:function(t){return"ru"===t?"http://subs.yandex.ru":"http://subs.yandex.ru"},all:function(t){return"ru"===t?"http://www.yandex.ru/all":"ua"===t?"http://www.yandex.ua/all":"com"===t?"http://www.yandex.com/all":"by"===t?"http://www.yandex.by/all":"kz"===t?"http://www.yandex.kz/all":"tr"===t?"http://www.yandex.com.tr/all":"http://www.yandex.ru/all"
},large:function(t){return"ru"===t?"http://large.yandex.ru":"http://large.yandex.ru"},geocontext:function(t){return"ru"===t?"http://geocontext.yandex.ru":"http://geocontext.yandex.ru"
},root:function(t){return"ru"===t?"http://root.yandex.ru":"http://root.yandex.ru"},yamb:function(t){return"ru"===t?"https://yamb.yandex.ru":"https://yamb.yandex.ru"
},legal:function(t){return"ru"===t?"http://legal.yandex.ru":"ua"===t?"http://legal.yandex.ua":"com"===t?"http://legal.yandex.com":"tr"===t?"http://legal.yandex.com.tr":"http://legal.yandex.ru"
},taxi:function(t){return"ru"===t?"https://taxi.yandex.ru":"https://taxi.yandex.ru"},social:function(t){return"ru"===t?"https://social.yandex.ru":"ua"===t?"https://social.yandex.ua":"com"===t?"https://social.yandex.ru":"by"===t?"https://social.yandex.by":"kz"===t?"https://social.yandex.kz":"tr"===t?"https://social.yandex.com.tr":"https://social.yandex.ru"
},contest:function(t){return"ru"===t?"http://contest.yandex.ru":"com"===t?"http://contest.yandex.com":"http://contest.yandex.ru"
},peoplesearch:function(t){return"ru"===t?"http://people.yandex.ru":"ua"===t?"http://people.yandex.ua":"http://people.yandex.ru"
},disk:function(t){return"ru"===t?"https://disk.yandex.ru":"com"===t?"https://disk.yandex.com":"ua"===t?"https://disk.yandex.ua":"kz"===t?"https://disk.yandex.kz":"by"===t?"https://disk.yandex.by":"tr"===t?"https://disk.yandex.com.tr":"https://disk.yandex.ru"
},sport:function(t){return"ru"===t?"http://sport.yandex.ru":"by"===t?"http://sport.yandex.by":"ua"===t?"http://sport.yandex.ua":"kz"===t?"http://sport.yandex.kz":"tr"===t?"http://spor.yandex.com.tr":"http://sport.yandex.ru"
},literacy:function(t){return"ru"===t?"http://literacy.yandex.ru":"http://literacy.yandex.ru"},appsearch:function(t){return"ru"===t?"//appsearch.yandex.ru":"//appsearch.yandex.ru"
},ege:function(t){return"ru"===t?"//ege.yandex.ru":"//ege.yandex.ru"},vno:function(t){return"ru"===t?"//zno.yandex.ua":"//zno.yandex.ua"
},notifications:function(t){return"ru"===t?"https://notifications.yandex.ru":"ua"===t?"https://notifications.yandex.ua":"by"===t?"https://notifications.yandex.by":"kz"===t?"https://notifications.yandex.kz":"com"===t?"https://notifications.yandex.com":"tr"===t?"https://notifications.yandex.com.tr":"https://notifications.yandex.ru"
}}}function Hi(t){var e=t.block;return"search"===e?"row"===t.elem?!0:Ki(t):"suggest2-item"===e?"highlight"===t.elem?!1:Ki(t):"i-ua"===e?!!t.elem==!1?!1:Ki(t):Ki(t)
}function Ki(){return void 0}function Vi(t){return{elem:"input",content:t.ctx.content}}function Wi(){return void 0
}function Qi(t){return t.ctx.label?t.ctx.label:BEM.I18N("search","search-for")}function Gi(t){return!t.isSimple(t.ctx)==!1?!!t.elem==!1?t.ctx:Xi(t):Xi(t)
}function Xi(t){return!t.ctx==!1?!!t.elem==!1?Yi(t):Zi(t):Zi(t)}function Yi(t){var e=[];if(t._localLog){t._localLog.push([["_buf"],e],[["_mode"],""]);
var n=t._buf;t._buf=e;var i=t._mode;t._mode="",Ci(t),t._buf=n,t._mode=i,t._localLog=t._localLog.slice(0,-2)
}else{var o=t._buf;t._buf=e;var s=t._mode;t._mode="",Ci(t),t._buf=o,t._mode=s}return e.join("")}function Zi(t){return!!t.elem==!1?"":oo(t)
}function Ji(t){var e=t.elem;return"pref-ajax"===e||"isPageLoadCounter"===e||"serpRequestExtraParams"===e||"pid"===e||"isGameEnabled"===e||"ajaxUrl"===e||"framebuster"===e||"shownResult"===e||"pg"===e||"nahodki"===e||"suggestIsPrefetched"===e||"tld"===e||"isCounterSerpview"===e||"reqid"===e||"cache"===e||"query"===e||"lr"===e?!0:!t.elem==!1?{id:1,lang:1,tld:1,"content-region":1,"user-region":1,login:1,displayName:1,index:1,yandexuid:1,"passport-host":1,"pass-host":1,"passport-msg":1,"static-host":1,"lego-static-host":1,"social-host":1,clck:1,"click-host":1,"export-host":1,"i-host":1,"social-retpath":1,"lego-path":1,sid:1,retpath:1,uid:1}[t.elem]||!1:oo(t)
}function to(t){var e,n,i,o,s,r,a,l,c,u=t["i-global"],h={},d={block:"i-global",js:h};for(c in u)u.hasOwnProperty(c)&&(t._localLog?(t._localLog.push([["_mode"],"public-params"],[["block"],"i-global"],[["elem"],c]),e=t._mode,t._mode="public-params",n=t.block,t.block="i-global",i=t.elem,t.elem=c,o=Ji(t),t._mode=e,t.block=n,t.elem=i,__bv26=o,t._localLog=t._localLog.slice(0,-3),__bv26):(s=t._mode,t._mode="public-params",r=t.block,t.block="i-global",a=t.elem,t.elem=c,l=Ji(t),t._mode=s,t.block=r,t.elem=a,l))&&(h[c]=u[c]);
return d}function eo(t){return!!t.elem==!1?{}:oo(t)}function no(){return void 0}function io(){return void 0
}function oo(t){return!t.ctx==!1?!t.ctx.link==!1?!!t._.isSimple(t.ctx)==!1?so(t):ro(t):ro(t):ro(t)}function so(e){function i(){if("no-follow"===this.ctx.link)return void 0;
var t=this._links[this.ctx.link];return e._localLog?(o=this.ctx,this.ctx=t,s=n(e),this.ctx=o,s):(r=this.ctx,this.ctx=t,a=n(e),this.ctx=r,a)
}var o,s,r,a;if(!t||!e._cacheLog)return i.call(e);var l=e._buf.slice(e._cachePos).join("");e._cachePos=e._buf.length,e._cacheLog.push(l,{log:e._localLog.slice(),link:e.ctx.link});
var c=i.call(e);return e._cachePos=e._buf.length,c}function ro(e){return!t==!1?!e.ctx==!1?!e.ctx.cache==!1?ao(e):lo(e):lo(e):lo(e)
}function ao(e){function i(t,e,n){if(0===e.length)return void 0;if(Array.isArray(n)){for(var i=t,o=0;o<n.length-1;o++)i=i[n[o]];
n=i[n[o]]}for(var s,r=t,o=0;o<e.length-1;o++)r=r[e[o]];return s=r[e[o]],r[e[o]]=n,s}var o;if(o=t.get(e.ctx.cache)){var s=e._links;
e.ctx.links&&(e._links=e.ctx.links);for(var r=0;r<o.log.length;r++)if("string"!=typeof o.log[r]){var a,l=o.log[r];
if(a=l.log.map(function(t){return{key:t[0],value:i(this,t[0],t[1])}},e).reverse(),e._localLog){e._localLog.push([["_cacheLog"],null]);
var c=e.ctx,u=c.cache;c.cache=null;var h=e._cacheLog;e._cacheLog=null;var d=e.ctx,_=d.link;d.link=l.link,n(e),c.cache=u,e._cacheLog=h,d.link=_,e._localLog=e._localLog.slice(0,-1)
}else{var p=e.ctx,m=p.cache;p.cache=null;var f=e._cacheLog;e._cacheLog=null;var g=e.ctx,v=g.link;g.link=l.link,n(e),p.cache=m,e._cacheLog=f,g.link=v
}a.forEach(function(t){i(this,t.key,t.value)},e)}else e._buf.push(o.log[r]);return e._links=s,o.res}var b,y=[];
if(e._localLog){__bv21=[],e._localLog.push([["_cachePos"],["_buf","length"]],[["_cacheLog"],y],[["_localLog"],__bv21]);
var x=e.ctx,k=x.cache;x.cache=null;var w=e._cachePos;e._cachePos=e._buf.length;var M=e._cacheLog;e._cacheLog=y;
var E=e._localLog;e._localLog=__bv21,b=n(e);var B=e._buf.slice(e._cachePos).join("");B&&y.push(B),x.cache=k,e._cachePos=w,e._cacheLog=M,e._localLog=E,e._localLog=e._localLog.slice(0,-3)
}else{var S=e.ctx,L=S.cache;S.cache=null;var C=e._cachePos;e._cachePos=e._buf.length;var I=e._cacheLog;
e._cacheLog=y;var P=e._localLog;e._localLog=[],b=n(e);var B=e._buf.slice(e._cachePos).join("");B&&y.push(B),S.cache=L,e._cachePos=C,e._cacheLog=I,e._localLog=P
}return t.set(e.ctx.cache,{log:y,res:b}),b}function lo(t){var e=t._mode;if("default"===e)return co(t);
if(""===e){if(!t._.isSimple(t.ctx)==!1){t._listLength--;var n=t.ctx;return(n&&n!==!0||0===n)&&t._buf.push(n),void 0
}return!!t.ctx==!1?(t._listLength--,void 0):!t._.isArray(t.ctx)==!1?uo(t):ho(t)}return _o(t)}function co(t){function e(t,e){return(t||"")+"__"+(e||"")
}var n,o,s,r,a,l,c,u,h,d,_,p,m,f,g,v,b,y,x,k,w,M,E,B,S,L,C,I,P,D,T,O,$,j,A,N,z,F,R,q,U,H=t,K=H.BEM,V=t.ctx,W=t._buf;
if(U=t._localLog?(t._localLog.push([["_mode"],"tag"]),o=t._mode,t._mode="tag",w=mi(t),t._mode=o,__bv6=w,t._localLog=t._localLog.slice(0,-1),__bv6):(s=t._mode,t._mode="tag",r=mi(t),t._mode=s,r),"undefined"!=typeof U||(U=V.tag),"undefined"!=typeof U||(U="div"),U){var Q,G;
t.block&&V.js!==!1&&(G=t._localLog?(t._localLog.push([["_mode"],"js"]),a=t._mode,t._mode="js",l=oi(t),t._mode=a,__bv8=l,t._localLog=t._localLog.slice(0,-1),__bv8):(c=t._mode,t._mode="js",u=oi(t),t._mode=c,u),G=G?t._.extend(V.js,G===!0?{}:G):V.js===!0?{}:V.js,G&&((Q={})[K.INTERNAL.buildClass(t.block,V.elem)]=G)),W.push("<",U);
var X=t._localLog?(t._localLog.push([["_mode"],"bem"]),h=t._mode,t._mode="bem",d=Hi(t),t._mode=h,__bv9=d,t._localLog=t._localLog.slice(0,-1),__bv9):(_=t._mode,t._mode="bem",p=Hi(t),t._mode=_,p);
"undefined"!=typeof X||(X="undefined"!=typeof V.bem?V.bem:V.block||V.elem);var Z=t._localLog?(t._localLog.push([["_mode"],"cls"]),m=t._mode,t._mode="cls",f=io(t),t._mode=m,__bv10=f,t._localLog=t._localLog.slice(0,-1),__bv10):(g=t._mode,t._mode="cls",v=io(t),t._mode=g,v);
Z||(Z=V.cls);var J=V.block&&Q;if(X||Z){if(W.push(' class="'),X){K.INTERNAL.buildClasses(t.block,V.elem,V.elemMods||V.mods,W);
var te=t._localLog?(t._localLog.push([["_mode"],"mix"]),b=t._mode,t._mode="mix",y=Gn(t),t._mode=b,__bv11=y,t._localLog=t._localLog.slice(0,-1),__bv11):(x=t._mode,t._mode="mix",k=Gn(t),t._mode=x,k);
if(V.mix&&(te=te?[].concat(te,V.mix):V.mix),te){var ee={};ee[e(t.block,t.elem)]=!0,t._.isArray(te)||(te=[te]);
for(var ne=0;ne<te.length;ne++){var ie=te[ne];if(ie){var oe=ie.block||ie.elem,se=ie.block||ie._block||H.block,re=ie.elem||ie._elem||H.elem;
if(oe&&W.push(" "),K.INTERNAL[oe?"buildClasses":"buildModsClasses"](se,ie.elem||ie._elem||(ie.block?void 0:H.elem),ie.elemMods||ie.mods,W),ie.js&&((Q||(Q={}))[K.INTERNAL.buildClass(se,ie.elem)]=ie.js===!0?{}:ie.js,J||(J=se&&!ie.elem)),oe&&!ee[e(se,re)]){ee[e(se,re)]=!0;
var ae=t._localLog?(t._localLog.push([["block"],se],[["elem"],re],[["_mode"],"mix"]),n=t.block,t.block=se,M=t.elem,t.elem=re,E=t._mode,t._mode="mix",B=Gn(t),t.block=n,t.elem=M,t._mode=E,__bv12=B,t._localLog=t._localLog.slice(0,-3),__bv12):(S=t.block,t.block=se,L=t.elem,t.elem=re,C=t._mode,t._mode="mix",I=Gn(t),t.block=S,t.elem=L,t._mode=C,I);
if(ae)for(var le=0;le<ae.length;le++){var ce=ae[le];(ce.block||ce.elem)&&ee[e(ce.block,ce.elem)]||(ce._block=se,ce._elem=re,te.splice(ne+1,0,ce))
}}}}}}Z&&W.push(X?" ":"",Z),J&&W.push(" i-bem"),W.push('"')}if(Q){var ue=t._localLog?(t._localLog.push([["_mode"],"jsAttr"]),P=t._mode,t._mode="jsAttr",D=no(t),t._mode=P,__bv14=D,t._localLog=t._localLog.slice(0,-1),__bv14):(T=t._mode,t._mode="jsAttr",O=no(t),t._mode=T,O);
W.push(" ",ue||"onclick",'="return ',t._.attrEscape(JSON.stringify(Q)),'"')}var he=t._localLog?(t._localLog.push([["_mode"],"attrs"]),$=t._mode,t._mode="attrs",j=Y(t),t._mode=$,__bv15=j,t._localLog=t._localLog.slice(0,-1),__bv15):(A=t._mode,t._mode="attrs",N=Y(t),t._mode=A,N);
if(he=t._.extend(he,V.attrs)){var de;for(de in he)void 0!==he[de]&&W.push(" ",de,'="',t._.attrEscape(he[de]),'"')
}}if(t._.isShortTag(U))W.push("/>");else{U&&W.push(">");var _e=t._localLog?(t._localLog.push([["_mode"],"content"]),z=t._mode,t._mode="content",F=i(t),t._mode=z,__bv16=F,t._localLog=t._localLog.slice(0,-1),__bv16):(R=t._mode,t._mode="content",q=i(t),t._mode=R,q);
if(_e||0===_e){var X=t.block||t.elem;if(t._localLog){__bv17=X?1:t.position,__bv18=X?1:t._listLength,t._localLog.push([["_notNewList"],!1],[["position"],__bv17],[["_listLength"],__bv18],[["_mode"],""]);
var pe=t._notNewList;t._notNewList=!1;var me=t.position;t.position=__bv17;var fe=t._listLength;t._listLength=__bv18;
var ge=t.ctx;t.ctx=_e;var ve=t._mode;t._mode="",Ci(t),t._notNewList=pe,t.position=me,t._listLength=fe,t.ctx=ge,t._mode=ve,t._localLog=t._localLog.slice(0,-4)
}else{var be=t._notNewList;t._notNewList=!1;var ye=t.position;t.position=X?1:t.position;var xe=t._listLength;
t._listLength=X?1:t._listLength;var ke=t.ctx;t.ctx=_e;var we=t._mode;t._mode="",Ci(t),t._notNewList=be,t.position=ye,t._listLength=xe,t.ctx=ke,t._mode=we
}}U&&W.push("</",U,">")}}function uo(t){var e=t.ctx,n=e.length,i=0,o=t.position,s=t._notNewList;for(s?t._listLength+=n-1:(t.position=0,t._listLength=n),t._notNewList=!0;n>i;){var r=e[i++];
if(t._localLog){var a=t.ctx;t.ctx=null==r?"":r,Ci(t),t.ctx=a}else{var l=t.ctx;t.ctx=null==r?"":r,Ci(t),t.ctx=l
}}s||(t.position=o)}function ho(t){var e=t.ctx.block,n=t.ctx.elem,i=t._currBlock||t.block;if(t.ctx||(t.ctx={}),t._localLog){__bv0=t.ctx.links||t._links,__bv1=e||(n?i:void 0),__bv2=e||n?void 0:i,__bv3=(e?t.ctx.mods:t.mods)||{},__bv4=t.ctx.elemMods||{},t._localLog.push([["_mode"],"default"],[["_links"],__bv0],[["block"],__bv1],[["_currBlock"],__bv2],[["elem"],["ctx","elem"]],[["mods"],__bv3],[["elemMods"],__bv4]);
var o=t._mode;t._mode="default";var s=t._links;t._links=__bv0;var r=t.block;t.block=__bv1;var a=t._currBlock;
t._currBlock=__bv2;var l=t.elem;t.elem=t.ctx.elem;var c=t.mods;t.mods=__bv3;var u=t.elemMods;t.elemMods=__bv4,t.block||t.elem?t.position=(t.position||0)+1:t._listLength--,$e(t),t._mode=o,t._links=s,t.block=r,t._currBlock=a,t.elem=l,t.mods=c,t.elemMods=u,t._localLog=t._localLog.slice(0,-7)
}else{var h=t._mode;t._mode="default";var d=t._links;t._links=t.ctx.links||t._links;var _=t.block;t.block=e||(n?i:void 0);
var p=t._currBlock;t._currBlock=e||n?void 0:i;var m=t.elem;t.elem=t.ctx.elem;var f=t.mods;t.mods=(e?t.ctx.mods:t.mods)||{};
var g=t.elemMods;t.elemMods=t.ctx.elemMods||{},t.block||t.elem?t.position=(t.position||0)+1:t._listLength--,$e(t),t._mode=h,t._links=d,t.block=_,t._currBlock=p,t.elem=m,t.mods=f,t.elemMods=g
}}function _o(){throw new Error(this)}function po(t){return mo(t||this)}function mo(t){return n(t)}return!function(){!function(t,e){if(e.I18N)return void 0;
t.BEM=e;var n=e.I18N=function(t,e){return e};n.keyset=function(){return n},n.key=function(t){return t
},n.lang=function(){return void 0}}(this,"undefined"==typeof BEM?{}:BEM)}(),!function(){function t(t,e){this.ctx=null===typeof t?"":t,this.apply=e,this._buf=[],this._=this,this._start=!0,this._mode="",this._listLength=0,this._notNewList=!1,this.position=0,this.block=void 0,this.elem=void 0,this.mods=void 0,this.elemMods=void 0
}var n={},i=Object.prototype.toString,o={area:1,base:1,br:1,col:1,command:1,embed:1,hr:1,img:1,input:1,keygen:1,link:1,meta:1,param:1,source:1,wbr:1};
!function(t,e){function n(t,e,n){n.push(s,t,s,e)}function i(t,e,i,o){o.push(t),i&&n(e,i,o)}function o(t,o,s,a,l){i(t,e,e,l),l.push(r,o),a&&n(s,a,l)
}var s="_",r="__",a="[a-zA-Z0-9-]+";t.INTERNAL={NAME_PATTERN:a,MOD_DELIM:s,ELEM_DELIM:r,buildModPostfix:function(t,e,i){var o=i||[];
return n(t,e,o),i?o:o.join("")},buildClass:function(t,n,s,r,a){var l=typeof s;if("string"==l?"string"!=typeof r&&(a=r,r=s,s=n,n=e):"undefined"!=l?(a=s,s=e):n&&"string"!=typeof n&&(a=n,n=e),!(n||s||a))return t;
var c=a||[];return n?o(t,n,s,r,c):i(t,s,r,c),a?c:c.join("")},buildModsClasses:function(t,e,n,s){var r=s||[];
if(n){var a;for(a in n)if(n.hasOwnProperty(a)){var l=n[a];null!=l&&(l=n[a]+"",l&&(r.push(" "),e?o(t,e,a,l,r):i(t,a,l,r)))
}}return s?r:r.join("")},buildClasses:function(t,n,s,r){var a=r||[];return n?o(t,n,e,e,a):i(t,e,e,a),this.buildModsClasses(t,n,s,r),r?a:a.join("")
}}}(n);var s=function(){var t={'"':"&quot;","&":"&amp;","<":"&lt;",">":"&gt;"},e=function(e){return t[e]||e
};return function(t){return t=new RegExp(t,"g"),function(n){return(""+n).replace(t,e)}}}();t.prototype.isArray=function(t){return"[object Array]"===i.call(t)
},t.prototype.isSimple=function(t){var e=typeof t;return"string"===e||"number"===e||"boolean"===e},t.prototype.isShortTag=function(t){return o.hasOwnProperty(t)
},t.prototype.extend=function(t,e){if(!t||!e)return t||e;var n,i={};for(n in t)t.hasOwnProperty(n)&&(i[n]=t[n]);
for(n in e)e.hasOwnProperty(n)&&(i[n]=e[n]);return i},t.prototype.identify=function(){var t=0,e=n.__id=+new Date,i="__"+e,o=function(){return"uniq"+e+ ++t
};return function(t,e){return t?e||t[i]?t[i]:t[i]=o():o()}}(),t.prototype.xmlEscape=s("[&<>]"),t.prototype.attrEscape=s('["&<>]'),t.prototype.BEM=n,t.prototype.isFirst=function(){return 1===this.position
},t.prototype.isLast=function(){return this.position===this._listLength},t.prototype.generateId=function(){return this.identify(this.ctx)
},e.apply=t.apply=function(){var e=new t(this,po);return e.apply(),e._buf.join("")}}(),e}("undefined"==typeof e?{}:e);
return function(e){var i=this;return e||(e={}),t=e.cache,function(){i===this&&(i=void 0);return n.apply.call([i])
}.call(null)}}();"undefined"==typeof exports||(exports.BEMHTML=BEMHTML),_borschik("AUiCuvCsFkeXqPHTCnve3trT-eI")&&(jQuery.cookie=function(t,e,n){if("undefined"==typeof e){var i=null;
if(document.cookie&&""!=document.cookie)for(var o=document.cookie.split(";"),s=0;s<o.length;s++){var r=jQuery.trim(o[s]);
if(r.substring(0,t.length+1)==t+"="){i=decodeURIComponent(r.substring(t.length+1));break}}return i}n=n||{},null===e&&(e="",n.expires=-1);
var a="";if(n.expires&&("number"==typeof n.expires||n.expires.toUTCString)){var l;"number"==typeof n.expires?(l=new Date,l.setTime(l.getTime()+24*n.expires*60*60*1e3)):l=n.expires,a="; expires="+l.toUTCString()
}var c=n.path?"; path="+n.path:"",u=n.domain?"; domain="+n.domain:"",h=n.secure?"; secure":"";document.cookie=[t,"=",encodeURIComponent(e),a,c,u,h].join("")
}),_borschik("irbqP6Ggd1noo1nmTI1gPmuX7A4")&&!function(t){function e(t){return t.replace(/%.{2}/g,function(t){return i[t]||t
})}function n(t,n){var i="";try{i=t(n)}catch(o){try{i=t(e(n))}catch(o){i=n}}return i}var i={"%D0":"%D0%A0","%C0":"%D0%90","%C1":"%D0%91","%C2":"%D0%92","%C3":"%D0%93","%C4":"%D0%94","%C5":"%D0%95","%A8":"%D0%81","%C6":"%D0%96","%C7":"%D0%97","%C8":"%D0%98","%C9":"%D0%99","%CA":"%D0%9A","%CB":"%D0%9B","%CC":"%D0%9C","%CD":"%D0%9D","%CE":"%D0%9E","%CF":"%D0%9F","%D1":"%D0%A1","%D2":"%D0%A2","%D3":"%D0%A3","%D4":"%D0%A4","%D5":"%D0%A5","%D6":"%D0%A6","%D7":"%D0%A7","%D8":"%D0%A8","%D9":"%D0%A9","%DA":"%D0%AA","%DB":"%D0%AB","%DC":"%D0%AC","%DD":"%D0%AD","%DE":"%D0%AE","%DF":"%D0%AF","%E0":"%D0%B0","%E1":"%D0%B1","%E2":"%D0%B2","%E3":"%D0%B3","%E4":"%D0%B4","%E5":"%D0%B5","%B8":"%D1%91","%E6":"%D0%B6","%E7":"%D0%B7","%E8":"%D0%B8","%E9":"%D0%B9","%EA":"%D0%BA","%EB":"%D0%BB","%EC":"%D0%BC","%ED":"%D0%BD","%EE":"%D0%BE","%EF":"%D0%BF","%F0":"%D1%80","%F1":"%D1%81","%F2":"%D1%82","%F3":"%D1%83","%F4":"%D1%84","%F5":"%D1%85","%F6":"%D1%86","%F7":"%D1%87","%F8":"%D1%88","%F9":"%D1%89","%FA":"%D1%8A","%FB":"%D1%8B","%FC":"%D1%8C","%FD":"%D1%8D","%FE":"%D1%8E","%FF":"%D1%8F"};
t.extend({decodeURI:function(t){return n(decodeURI,t)},decodeURIComponent:function(t){return n(decodeURIComponent,t)
}})}(jQuery),_borschik("oUJpFqlIp9iA1Zv57aq1wiF4aLA")&&!function(t){function e(e,i,o){var r=!1;if(s){var a=[];
t.each(l,function(){o.hasOwnProperty(this)&&(r=!0)&&a.push({name:this,val:o[this]})}),r&&(t.each(o,function(t){a.push({name:t,val:this})
}),o=a)}t.each(o,function(o,s){if(r&&(o=s.name,s=s.val),t.isFunction(s)&&(!n||s.toString().indexOf(".__base")>-1)){var a=e[o]||function(){};
i[o]=function(){var t=this.__base;this.__base=a;var e=s.apply(this,arguments);return this.__base=t,e}
}else i[o]=s})}var n=function(){"_"}.toString().indexOf("_")>-1,i=function(){},o=Object.create||function(t){var e=function(){};
return e.prototype=t,new e},s=!0,r={toString:""};for(var a in r)r.hasOwnProperty(a)&&(s=!1);var l=s?["toString","valueOf"]:null;
t.inherit=function(){var n=arguments,s=t.isFunction(n[0]),r=s?n[0]:i,a=n[s?1:0]||{},l=n[s?2:1],c=a.__constructor||s&&r.prototype.__constructor?function(){return this.__constructor.apply(this,arguments)
}:function(){};if(!s)return c.prototype=a,c.prototype.__self=c.prototype.constructor=c,t.extend(c,l);
t.extend(c,r);var u=r.prototype,h=c.prototype=o(u);return h.__self=h.constructor=c,e(u,h,a),l&&e(r,c,l),c
},t.inheritSelf=function(t,n,i){var o=t.prototype;return e(o,o,n),i&&e(t,t,i),t}}(jQuery),_borschik("eim9mbh-HguuX6sdshSBuau-YF8")&&!function(t){var e=0,n="__"+ +new Date,i=function(){return"uniq"+ ++e
};t.identify=function(t,e){if(!t)return i();var o="uniqueID"in t?"uniqueID":n;return e||o in t?t[o]:t[o]=i()
}}(jQuery),_borschik("gOR9FuNtxxFTRUHpBJCppIiGQD8")&&!function(t){t.isEmptyObject||(t.isEmptyObject=function(t){for(var e in t)return!1;
return!0})}(jQuery),_borschik("AW47RAjsjOlefg_2L_CsT2aXktI")&&!function(t){t.extend({debounce:function(t,e,n,i){3==arguments.length&&"boolean"!=typeof n&&(i=n,n=!1);
var o;return function(){var s=arguments;i=i||this,n&&!o&&t.apply(i,s),clearTimeout(o),o=setTimeout(function(){n||t.apply(i,s),o=null
},e)}},throttle:function(t,e,n){var i,o,s;return function(){o=arguments,s=!0,n=n||this,i||function(){s?(t.apply(n,o),s=!1,i=setTimeout(arguments.callee,e)):i=null
}()}}})}(jQuery),_borschik("zp1cShcmhQhukkz4jYNgMjVnI7s")&&!function(t){var e="__"+ +new Date+"storage",n=function(e,n){return t.identify(e)+(n?t.identify(n):"")
},i={buildEventName:function(t){return t},on:function(i,o,s,r,a){if("string"==typeof i){t.isFunction(o)&&(r=s,s=o,o=void 0);
for(var l,c=n(s,r),u=this[e]||(this[e]={}),h=i.split(" "),d=0;i=h[d++];)if(i=this.buildEventName(i),l=u[i]||(u[i]={ids:{},list:{}}),!(c in l.ids)){var _=l.list,p={fn:s,data:o,ctx:r,special:a};
_.last?(_.last.next=p,p.prev=_.last):_.first=p,l.ids[c]=_.last=p}}else{var m=this;t.each(i,function(t,e){m.on(t,e,o,a)
})}return this},onFirst:function(t,e,n,i){return this.on(t,e,n,i,{one:!0})},un:function(i,o,s){if("string"==typeof i||"undefined"==typeof i){var r=this[e];
if(r)if(i){for(var a,l=i.split(" "),c=0;i=l[c++];)if(i=this.buildEventName(i),a=r[i])if(o){var u=n(o,s),h=a.ids;
if(u in h){var d=a.list,_=h[u],p=_.prev,m=_.next;p?p.next=m:_===d.first&&(d.first=m),m?m.prev=p:_===d.last&&(d.last=p),delete h[u]
}}else delete this[e][i]}else delete this[e]}else{var f=this;t.each(i,function(t,e){f.un(t,e,s)})}return this
},trigger:function(n,i){var o,s=this,r=s[e];if("string"==typeof n?n=t.Event(s.buildEventName(o=n)):n.type=s.buildEventName(o=n.type),n.target||(n.target=s),r&&(r=r[n.type]))for(var a,l=r.list.first;l;)n.data=l.data,a=l.fn.call(l.ctx||s,n,i),"undefined"!=typeof a&&(n.result=a,a===!1&&(n.preventDefault(),n.stopPropagation())),l.special&&l.special.one&&s.un(o,l.fn,l.ctx),l=l.next;
return this}};t.observable=t.inherit(i,i)}(jQuery),_borschik("wPX3rJZ8aeXecCalKPR3xgvNSa0")&&!function(t,e){function n(t,e,n){return(t?"__elem_"+t:"")+"__mod"+(e?"_"+e:"")+(n?"_"+n:"")
}function i(e,i,o){t.isFunction(e)?i[n(o,"*","*")]=e:t.each(e,function(e,s){t.isFunction(s)?i[n(o,e,"*")]=s:t.each(s,function(t,s){i[n(o,e,t)]=s
})})}function o(t,e){return e?Array.isArray(e)?function(n){for(var i=0,o=e.length;o>i;)if(n.hasMod(t,e[i++]))return!0;
return!1}:function(n){return n.hasMod(t,e)}:function(e){return e.hasMod(t)}}var s=[],r={},a={};this.BEM=t.inherit(t.observable,{__constructor:function(t,e,n){var i=this;
i._modCache=t||{},i._processingMods={},i._params=e,i.params=null,n!==!1?i._init():i.afterCurrentEvent(function(){i._init()
})},_init:function(){return this._initing||this.hasMod("js","inited")||(this._initing=!0,this.params||(this.params=t.extend(this.getDefaultParams(),this._params),delete this._params),this.setMod("js","inited"),delete this._initing,this.hasMod("js","inited")&&this.trigger("init")),this
},changeThis:function(t,e){return t.bind(e||this)},afterCurrentEvent:function(t,e){this.__self.afterCurrentEvent(this.changeThis(t,e))
},trigger:function(t,e){return this.__base(t=this.buildEvent(t),e).__self.trigger(t,e),this},buildEvent:function(e){return"string"==typeof e&&(e=t.Event(e)),e.block=this,e
},hasMod:function(t,n,i){var o=arguments.length,s=!1;1==o?(i="",n=t,t=e,s=!0):2==o&&("string"==typeof t?(i=n,n=t,t=e):(i="",s=!0));
var r=this.getMod(t,n)===i;return s?!r:r},getMod:function(t,e){var n=typeof t;if("string"===n||"undefined"===n){e=t||e;
var i=this._modCache;return e in i?i[e]:i[e]=this._extractModVal(e)}return this._getElemMod(e,t)},_getElemMod:function(t,e,n){return this._extractModVal(t,e,n)
},getMods:function(t){var n=t&&"string"!=typeof t,i=this,o=[].slice.call(arguments,n?1:0),s=i._extractMods(o,n?t:e);
return n||(o.length?o.forEach(function(t){i._modCache[t]=s[t]}):i._modCache=s),s},setMod:function(n,i,o){"undefined"==typeof o&&(o=i,i=n,n=e);
var s=this;if(!n||n[0]){var r=(n&&n[0]?t.identify(n[0]):"")+"_"+i;if(this._processingMods[r])return s;
var a,l=n?s._getElemMod(i,n,a=s.__self._extractElemNameFrom(n)):s.getMod(i);if(l===o)return s;this._processingMods[r]=!0;
var c=!0,u=[i,o,l];n&&u.unshift(n),[["*","*"],[i,"*"],[i,o]].forEach(function(t){c=s._callModFn(a,t[0],t[1],u)!==!1&&c
}),!n&&c&&(s._modCache[i]=o),c&&s._afterSetMod(i,o,l,n,a),delete this._processingMods[r]}return s},_afterSetMod:function(){},toggleMod:function(t,n,i,o,s){"string"==typeof t&&(s=o,o=i,i=n,n=t,t=e),"undefined"==typeof o?o="":"boolean"==typeof o&&(s=o,o="");
var r=this.getMod(t,n);return(r==i||r==o)&&this.setMod(t,n,"boolean"==typeof s?s?i:o:this.hasMod(t,n,i)?o:i),this
},delMod:function(t,n){return n||(n=t,t=e),this.setMod(t,n,"")},_callModFn:function(t,i,o,s){var r=n(t,i,o);
return this[r]?this[r].apply(this,s):e},_extractModVal:function(){return""},_extractMods:function(){return{}
},channel:function(t,e){return this.__self.channel(t,e)},getDefaultParams:function(){return{}},del:function(t){var e=[].slice.call(arguments);
return"string"==typeof t&&e.unshift(this),this.__self.del.apply(this.__self,e),this},destruct:function(){}},{_name:"i-bem",blocks:r,decl:function(n,s,a){if("string"==typeof n?n={block:n}:n.name&&(n.block=n.name),n.baseBlock&&!r[n.baseBlock])throw'baseBlock "'+n.baseBlock+'" for "'+n.block+'" is undefined';
s||(s={}),s.onSetMod&&(i(s.onSetMod,s),delete s.onSetMod),s.onElemSetMod&&(t.each(s.onElemSetMod,function(t,e){i(e,s,t)
}),delete s.onElemSetMod);var l=r[n.baseBlock||n.block]||this;if(n.modName){var c=o(n.modName,n.modVal);
t.each(s,function(n,i){t.isFunction(i)&&(s[n]=function(){var t;if(c(this))t=i;else{var o=l.prototype[n];
o&&o!==s[n]&&(t=this.__base)}return t?t.apply(this,arguments):e})})}if(a&&"boolean"==typeof a.live){var u=a.live;
a.live=function(){return u}}var h;return n.block==l._name?(h=t.inheritSelf(l,s,a))._processLive(!0):(h=r[n.block]=t.inherit(l,s,a))._name=n.block,h
},_processLive:function(){return!1},create:function(t,e){return"string"==typeof t&&(t={block:t}),new r[t.block](t.mods,e)
},getName:function(){return this._name},_extractElemNameFrom:function(){},afterCurrentEvent:function(t,e){1==s.push({fn:t,ctx:e})&&setTimeout(this._runAfterCurrentEventFns,0)
},_runAfterCurrentEventFns:function(){var t=s.length;if(t)for(var e,n=s.splice(0,t);e=n.shift();)e.fn.call(e.ctx||this)
},changeThis:function(t,e){return t.bind(e||this)},del:function(t){var e="string"==typeof t,n=e?0:1,i=arguments.length;
for(e&&(t=this);i>n;)delete t[arguments[n++]];return this},channel:function(n,i){return"boolean"==typeof n&&(i=n,n=e),n||(n="default"),i?(a[n]&&(a[n].un(),delete a[n]),void 0):a[n]||(a[n]=new t.observable)
}})}(jQuery),_borschik("I3cBlUXdbJl5WGhNNjZ8sIMbDY4")&&!function(){Object.keys||(Object.keys=function(t){var e=[];
for(var n in t)t.hasOwnProperty(n)&&e.push(n);return e})}(),_borschik("6OtocFE1B3Wsk4aWWQmvNc911GU")&&!function(){var t=Array.prototype,e=Object.prototype.toString,n={indexOf:function(t,e){e=+(e||0);
var n=this,i=n.length;if(i>0&&i>e)for(e=0>e?Math.ceil(e):Math.floor(e),-i>e&&(e=0),0>e&&(e+=i);i>e;){if(e in n&&n[e]===t)return e;
++e}return-1},forEach:function(t,e){for(var n=-1,i=this,o=i.length;++n<o;)n in i&&(e?t.call(e,i[n],n,i):t(i[n],n,i))
},map:function(t,e){for(var n=-1,i=this,o=i.length,s=new Array(o);++n<o;)n in i&&(s[n]=e?t.call(e,i[n],n,i):t(i[n],n,i));
return s},filter:function(t,e){for(var n=-1,i=this,o=i.length,s=[];++n<o;)n in i&&(e?t.call(e,i[n],n,i):t(i[n],n,i))&&s.push(i[n]);
return s},reduce:function(t,e){var n,i=-1,o=this,s=o.length;if(arguments.length<2){for(;++i<s;)if(i in o){n=o[i];
break}}else n=e;for(;++i<s;)i in o&&(n=t(n,o[i],i,o));return n},some:function(t,e){for(var n=-1,i=this,o=i.length;++n<o;)if(n in i&&(e?t.call(e,i[n],n,i):t(i[n],n,i)))return!0;
return!1},every:function(t,e){for(var n=-1,i=this,o=i.length;++n<o;)if(n in i&&!(e?t.call(e,i[n],n,i):t(i[n],n,i)))return!1;
return!0}};for(var i in n)t[i]||(t[i]=n[i]);Array.isArray||(Array.isArray=function(t){return"[object Array]"===e.call(t)
})}(),_borschik("vAscd2mB4A4XPDZE8_rLW4IBSF8")&&!function(){var t=Array.prototype.slice;Function.prototype.bind||(Function.prototype.bind=function(e){var n=this,i=t.call(arguments,1);
return function(){return n.apply(e,i.concat(t.call(arguments)))}})}(),_borschik("jsCjS5rSMjCXvTk4uYxD9E_6410")&&!function(t,e,n){function i(t,e,n){n.push(r,t,r,e)
}function o(t,e,n,o){o.push(t),n&&i(e,n,o)}function s(t,e,s,r,l){o(t,n,n,l),l.push(a,e),r&&i(s,r,l)}var r="_",a="__",l="[a-zA-Z0-9-]+";
t.INTERNAL={NAME_PATTERN:l,MOD_DELIM:r,ELEM_DELIM:a,buildModPostfix:function(t,e,n){var o=n||[];return i(t,e,o),n?o:o.join("")
},buildClass:function(t,e,i,r,a){var l=typeof i;if("string"==l?"string"!=typeof r&&"number"!=typeof r&&(a=r,r=i,i=e,e=n):"undefined"!=l?(a=i,i=n):e&&"string"!=typeof e&&(a=e,e=n),!(e||i||a))return t;
var c=a||[];return e?s(t,e,i,r,c):o(t,i,r,c),a?c:c.join("")},buildClasses:function(t,i,r,a){i&&"string"!=typeof i&&(a=r,r=i,i=n);
var l=a||[];return i?s(t,i,n,n,l):o(t,n,n,l),r&&e.each(r,function(e,n){n&&(l.push(" "),i?s(t,i,e,n,l):o(t,e,n,l))
}),a?l:l.join("")}}}(BEM,jQuery),_borschik("0SCysFuZDJLtQIXOA4fR53FXRuA")&&(!function(t){function e(t){return t.replace(/^(?:https?:)?\/\//,"")
}t||(t=window.Lego={}),!t.params&&(t.params={}),t.c=function(t,n,i){var o=e(i&&i.host||BEM.blocks["i-global"].param("click-host")||"clck.yandex.ru"),s=function(t,e,n,i){return e=e.replace("'","%27"),e.indexOf("/dtype=")>-1?e:location.protocol+"//"+o+"/"+n+"/dtype="+t+"/rnd="+((new Date).getTime()+Math.round(100*Math.random()))+(i?"/*"+(e.match(/^http/)?e:location.protocol+"//"+location.host+(e.match("^/")?e:"/"+e)):"/*data="+encodeURIComponent("url="+encodeURIComponent(e.match(/^http/)?e:location.protocol+"//"+location.host+(e.match("^/")?e:"/"+e))))
},r=function(){var e=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0],n=document.createElement("script");
n.setAttribute("src",s(t,location.href,"jclck")),e.insertBefore(n,e.firstChild)};if(n)if(n.className.match(/b-link_pseudo_yes/)||n.href&&n.href.match(/^mailto:/)||i&&i.noRedirect===!0)r();
else if(n.href){var a=n.href;n.href=s(t,a,"redir"),setTimeout(function(){n.href=a},500)}else if(n.form)if(n.type.match(/submit|button|image/)){var a=n.form.action;
n.form.action=s(t,a,"redir",!0),setTimeout(function(){n.form.action=a},500)}else r();else{if(!n.action)throw"counter.js: not link and not form!";
n.action=s(t,n.action,"redir",!0)}else r()}}(window.Lego),function(t,e){t||(t=window.Lego={}),t.cp=function(n,i,o,s,r,a){"string"==typeof s||(a=r,r=s,s=e),t.c("stred/pid="+n+"/cid="+i+(o?"/path="+o+(s?"/vars="+s:""):""),r,a)
}}(window.Lego),function(t){t||(t=window.Lego={}),t.ch=function(e,n,i){BEM.blocks["i-global"].param("show-counters")&&t.cp(0,2219,e,n,i)
}}(window.Lego)),_borschik("cXnDO14Y5A-NxW1rFFI6qOjFo1E")&&!function(t){t||(t=window.Lego={}),t.getCookie=function(t){var e=document.cookie;
if(e.length<1)return!1;var n=e.indexOf(t+"=");if(-1==n)return!1;n+=t.length+1;var i=e.indexOf(";",n);
return decodeURIComponent(-1==i?e.substring(n):e.substring(n,i))}}(window.Lego),_borschik("aIsupGFtZhGfKbXxiPQIrAPBfBk")&&!function(t){t||(t=window.Lego={}),t.isSessionValid=function(){return!!t.getCookie("yandex_login")
}}(window.Lego),_borschik("CphGF0hhQqPR-EeGzZOfvnREL3E")&&!function(t,e){e||(e=window.Lego={}),e.init||(e.init=function(n){return(n=e.params=t.extend({id:"",login:e.isSessionValid()?e.getCookie("yandex_login")||"":"",yandexuid:e.getCookie("yandexuid"),locale:"ru",retpath:window.location.toString(),"passport-host":"https://passport.yandex.ru","pass-host":"https://pass.yandex.ru","passport-msg":n.id,"social-host":"https://social.yandex.ru","lego-path":"/lego","show-counters-percent":100},n,e.params))["show-counters"]=Math.round(100*Math.random())<=n["show-counters-percent"],BEM.blocks["i-global"]._params||t.extend(BEM.blocks["i-global"]._params={},n),t(function(){n.oframebust&&e.oframebust(n.oframebust)
}),n}),e.block||(e.block={}),e.blockInit||(e.blockInit=function(n,i){n=n||document,i=i||".g-js",t(n).find(i).each(function(){var n=t(this),i=this.onclick?this.onclick():{},o=i.name||"",s=e.block[o];
s&&!n.data(o)&&(s.call(n,i),n.data(o,!0).addClass(o+"_js_inited"))})}),e.blockInitBinded||(e.blockInitBinded=!!t(document).ready(function(){e.blockInit()
}))}(jQuery,window.Lego),_borschik("E6vqydSSAYnWVICbcEV2tFXJF1U")&&!function(t,e,n){function i(t,e,n){(t[e]||(t[e]=[])).unshift(n)
}function o(t,e){return e.modName?function(n){(n._curBlock.mods||{})[e.modName]===e.modVal&&t(n)}:t}function s(t,n){var i,o=e.isArray(n);
return e.isArray(t)?o?i=t.concat(n):(i=t).push(n):o?(i=n).unshift(t):i=[t,n],i}function r(t){return t.replace(p,function(t){return _[t]
})}var a=t.INTERNAL,l=a.ELEM_DELIM,c={area:1,base:1,br:1,col:1,command:1,embed:1,hr:1,img:1,input:1,keygen:1,link:1,meta:1,param:1,source:1,wbr:1},u=a.buildClass,h=a.buildClasses,d={},_={'"':"&quot;","&":"&amp;","<":"&lt;",">":"&gt;"},p=/["&<>]/g;
t.HTML={decl:function(t,n){"string"==typeof t&&(t={block:t}),t.name&&(t.block=t.name);var s=d[t.block]||(d[t.block]={});
n.onBlock&&i(s,"_block",o(n.onBlock,t)),n.onElem&&(e.isFunction(n.onElem)?i(s,"_elem",o(n.onElem,t)):e.each(n.onElem,function(e,n){i(s,"_elem"+("*"===e?"":l+e),o(n,t))
}))},build:function(t){var e=new this.Ctx(t);return e._buildAll(),e._flush()},Ctx:e.inherit({__constructor:function(t){this._buffer=[],this._params=t,this._tParams=null,this._tParamsChanges=null,this._curBlock=n
},pos:function(){return this._params._pos},isFirst:function(){return 1===this._params._pos},isLast:function(){var t=this._params;
return t._pos===t._siblingsCount},params:function(t){var e=this;return"undefined"==typeof t?e._params:(e._params=t,e)
},param:function(t,n,i,o){var s=this,r=s._params;return"undefined"==typeof n?r[t]:(!i&&t in r?o&&(r[t]=e.extend(n,r[t])):r[t]=n,s)
},attrs:function(t,e){return this.param("attrs",t,e,!0)},attr:function(t,e,n){var i=this;if("undefined"==typeof e)return(i._params.attrs||{})[t];
var o=i._params.attrs;return o?(n||!(t in o))&&(o[t]=e):(i._params.attrs={})[t]=e,i},tag:function(t,e){return this.param("tag",t,e)
},cls:function(t,e){return this.param("cls",t,e)},mods:function(t,e){return this.param("mods",t,e,!0)
},mod:function(t,e,n){var i=this;if("undefined"==typeof e)return(i._params.mods||{})[t];var o=i._params.mods;
return o?(n||!(t in o))&&(o[t]=e):(i._params.mods={})[t]=e,i},mix:function(t,e){var n=this,i=n._params;
return"undefined"==typeof t?i.mix:(i.mix=!e&&"mix"in i?i.mix.concat(t):t,n)},js:function(t){return this.param("js",t)
},content:function(t,e){return this.param("content",t,e)},wrapContent:function(t){var e=this,n=e._params;
return t.content=n.content,n.content=t,e},beforeContent:function(t){var e=this,n=e._params;return n.content=s(t,n.content),e
},afterContent:function(t){var e=this,n=e._params;return n.content=s(n.content,t),e},wrap:function(t){var e=this,n=e._params;
return t.block||(t._curBlock=e._curBlock),t.content=n._wrapper?n._wrapper:n,n._wrapper=t,e},tParam:function(t,e){var n=this,i=n._tParams||(n._tParams={});
if("undefined"==typeof e)return i[t];var o=n._tParamsChanges||(n._tParamsChanges={});return t in o||(o[t]=i[t]),i[t]=e,n
},generateId:function(){return e.identify()},stop:function(){this._params._isStopped=!0},_buildAll:function(){var t=this,n=t._buffer,i=t._params,o=typeof i;
if("string"==o||"number"==o)n.push(i);else if(e.isArray(i))for(var s,r,a=0,l=i.length;l>a;)t._params=s=i[a++],r=typeof s,"string"==r||"number"==r?n.push(s):s&&(s._pos=a,s._siblingsCount=l,t._buildByDecl());
else i&&(t._params._pos=t._params._siblingsCount=1,t._buildByDecl())},_build:function(){var t,n=this,i=n._buffer,o=n._params,s=o.tag||"div",a=o.block||o.elem,l=a&&(o.block||n._curBlock.block),d=!1;
o.js&&((t={})[u(l,o.elem)]=o.js===!0?{}:o.js,d=!o.elem),i.push("<",s),(a||o.cls)&&(i.push(' class="'),a&&(h(l,o.elem,o.mods,i),o.mix&&e.each(o.mix,function(e,n){n&&(i.push(" "),h(n.block,n.elem,n.mods,i),n.js&&((t||(t={}))[u(n.block,n.elem)]=n.js===!0?{}:n.js,d||(d=!n.elem)))
})),o.cls&&i.push(a?" ":"",o.cls),d&&i.push(" i-bem"),i.push('"')),t&&i.push(' onclick="return ',r(JSON.stringify(t)),'"'),o.attrs&&e.each(o.attrs,function(t,e){"undefined"!=typeof e&&null!==e&&e!==!1&&i.push(" ",t,'="',e.toString().replace(/"/g,"&quot;"),'"')
}),c[s]?i.push("/>"):(i.push(">"),"undefined"!=typeof o.content&&(n._params=o.content,n._buildAll()),i.push("</",s,">"))
},_flush:function(){var t=this._buffer.join("");return delete this._buffer,t},_buildByDecl:function(){var t=this,n=t._curBlock,i=t._params;
if(i._curBlock&&(t._curBlock=i._curBlock),i.block&&(t._curBlock=i),!i._wrapper){if(i.block||i.elem){var o=d[t._curBlock.block];
if(o){var s;if(i.elem?(s=o["_elem"+l+i.elem],o._elem&&(s=s?s.concat(o._elem):o._elem)):s=o._block,s)for(var r,a=0;(r=s[a++])&&(r(t),!i._isStopped););}}if(i._wrapper)return i._curBlock=t._curBlock,t._params=i._wrapper,t._buildAll()
}var c=t._tParamsChanges;if(t._tParamsChanges=null,t._build(),t._curBlock=n,c){var u=t._tParams;e.each(c,function(t,e){"undefined"==typeof e?delete u[t]:u[t]=e
})}}})}}(BEM,jQuery),_borschik("azc8ELKrl3NRELxSB_s-PIcdsag")&&!function(t){if(!window.JSON){var e,n=Object.prototype.toString,i=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,o={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};
window.JSON={stringify:e=function(s){if(null===s)return"null";if("undefined"==typeof s)return t;switch(n.call(s)){case"[object String]":return i.lastIndex=0,'"'+(i.test(s)?s.replace(i,function(t){var e=o[t];
return"string"==typeof e?e:"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)}):s)+'"';case"[object Number]":case"[object Boolean]":return""+s;
case"[object Array]":for(var r,a="[",l=0,c=s.length;c>l;)r=e(s[l]),a+=(l++?",":"")+("undefined"==typeof r?"null":r);
return a+"]";case"[object Object]":if("[object Function]"===n.call(s.toJSON))return e(s.toJSON());var r,a="{",l=0;
for(var u in s)s.hasOwnProperty(u)&&(r=e(s[u]),"undefined"!=typeof r&&(a+=(l++?",":"")+'"'+u+'":'+r));
return a+"}";default:return t}}}}}(),_borschik("0tcMtYn9rFOPlRR_StMgwOD6Al8")&&!function(t,e,n){function i(t,n){var i=t[0];
e.each(a(i),function(r,a){s(a,i,r,n);var l=p[a.uniqId];l?l.domElem.index(i)<0&&(l.domElem=l.domElem.add(t),e.extend(l._params,a)):o(r,t,a)
})}function o(t,i,o,r,l){"boolean"==typeof o&&(l=r,r=o,o=n);var c=i[0];o=s(o||a(c)[t],c,t);var u=o.uniqId;
if(p[u])return p[u]._init();_[u]=_[u]?_[u].add(i):i;var h=c.parentNode;h&&11!==h.nodeType||e.unique(_[u]);
var d=v[t]||S.decl(t,{},{live:!0});if(!(d._liveInitable=!!d._processLive())||r||o.live===!1){r&&i.addClass("i-bem");
var m=new d(_[u],o,!!r);return delete _[u],l&&l.apply(m,E.call(arguments,4)),m}}function s(t,n,i,o){(t||(t={})).uniqId||(t.uniqId=(t.id?i+"-id-"+t.id:e.identify())+(o||e.identify()));
var s=e.identify(n),r=m[s]||(m[s]={});return r[i]||(r[i]=t),t}function r(t,e,n){var i=t.find(e);return n?i:i.add(t.filter(e))
}function a(t){var n=e.identify(t);return m[n]||(m[n]=l(t))}function l(t){var n=t.onclick||t.ondblclick;
if(!n&&"body"==t.tagName.toLowerCase()){var i=e(t),o=i.attr("onclick")||i.attr("ondblclick");o&&(n=Function(o))
}return n?n():{}}function c(t){delete m[e.identify(t)],t.onclick=null}function u(t,e){1===t.domElem.length?t.destruct(!0):t.domElem=t.domElem.not(e)
}var h=e(window),d=e(document),_={},p={},m={},f={},g={},v=t.blocks,b=t.INTERNAL,y=b.NAME_PATTERN,x=b.MOD_DELIM,k=b.ELEM_DELIM,w=b.buildModPostfix,M=b.buildClass,E=Array.prototype.slice,B=Array.prototype.reverse;
e.fn.bem=function(t,e){return o(t,this,e,!0)};var S=t.DOM=t.decl("i-bem__dom",{__constructor:function(t,n,i){var o=this;
o.domElem=t,o._eventNameCache={},o._elemCache={},p[o._uniqId=n.uniqId||e.identify(o)]=o,o._needSpecialUnbind=!1,o.__base(null,n,i)
},findBlocksInside:function(t,e){return this._findBlocks("find",t,e)},findBlockInside:function(t,e){return this._findBlocks("find",t,e,!0)
},findBlocksOutside:function(t,e){return this._findBlocks("parents",t,e)},findBlockOutside:function(t,e){return this._findBlocks("closest",t,e)[0]||null
},findBlocksOn:function(t,e){return this._findBlocks("",t,e)},findBlockOn:function(t,e){return this._findBlocks("",t,e,!0)
},_findBlocks:function(t,i,s,r){s||(s=i,i=n);var a=i?"string"==typeof i?this.findElem(i):i:this.domElem,l="string"==typeof s,c=l?s:s.block||s.blockName,u="."+(l?M(c):M(c,s.modName,s.modVal))+(r?":first":""),h=a.filter(u);
if(t&&(h=h.add(a[t](u))),r)return h[0]?o(c,h.eq(0),!0):null;var d=[],_={};return e.each(h,function(t,n){var i=o(c,e(n),!0);
_[i._uniqId]||(_[i._uniqId]=!0,d.push(i))}),d},bindToDomElem:function(t,n,i){var o=this;return i?t.bind(o._buildEventName(n),function(t){return(t.data||(t.data={})).domElem=e(this),i.apply(o,arguments)
}):e.each(n,function(e,n){o.bindToDomElem(t,e,n)}),o},bindToDoc:function(t,e){return this._needSpecialUnbind=!0,this.bindToDomElem(d,t,e)
},bindToWin:function(t,e){var n,i,o=e;return"resize"===t&&(e=function(){var t=h.height(),e=h.width();
(n!==t||i!==e)&&(n=t,i=e,o.apply(this,arguments))}),this._needSpecialUnbind=!0,this.bindToDomElem(h,t,e)
},bindTo:function(t,n,i){return!n||e.isFunction(n)?(i=n,n=t,t=this.domElem):"string"==typeof t&&(t=this.elem(t)),this.bindToDomElem(t,n,i)
},unbindFromDomElem:function(t,e){return t.unbind(this._buildEventName(e)),this},unbindFromDoc:function(t){return this.unbindFromDomElem(d,t)
},unbindFromWin:function(t){return this.unbindFromDomElem(h,t)},unbindFrom:function(t,e){return e?"string"==typeof t&&(t=this.elem(t)):(e=t,t=this.domElem),this.unbindFromDomElem(t,e)
},_buildEventName:function(t){var e=this;return t.indexOf(" ")>1?t.split(" ").map(function(t){return e._buildOneEventName(t)
}).join(" "):e._buildOneEventName(t)},_buildOneEventName:function(t){var e=this,n=e._eventNameCache;if(t in n)return n[t];
var i="."+e._uniqId;if(t.indexOf(".")<0)return n[t]=t+i;var o=".bem_"+e.__self._name;return n[t]=t.split(".").map(function(t,e){return 0==e?t+o:o+"_"+t
}).join("")+i},trigger:function(t,e){return this.__base(t=this.buildEvent(t),e).domElem&&this._ctxTrigger(t,e),this
},_ctxTrigger:function(t,n){var i=this,o=f[i.__self._buildCtxEventName(t.type)],s={};o&&i.domElem.each(function(){for(var r=this,a=o.counter;r&&a;){var l=e.identify(r,!0);
if(l){if(s[l])break;var c=o.ctxs[l];c&&(e.each(c,function(e,o){o.fn.call(o.ctx||i,t,n)}),a--),s[l]=!0
}r=r.parentNode}})},setMod:function(t,n,i){if(t&&"undefined"!=typeof i&&t.length>1){var o=this;return t.each(function(){var s=e(this);
s.__bemElemName=t.__bemElemName,o.setMod(s,n,i)}),o}return this.__base(t,n,i)},_extractModVal:function(t,e,n){var i,o=(e||this.domElem)[0];
return o&&(i=o.className.match(this.__self._buildModValRE(t,n||e))),i?i[2]:""},_extractMods:function(t,e){var n={},i=!t.length,o=0;
return((e||this.domElem)[0].className.match(this.__self._buildModValRE("("+(i?y:t.join("|"))+")",e,"g"))||[]).forEach(function(t){var e=(t=t.trim()).lastIndexOf(x),i=t.substr(0,e-1).lastIndexOf(x);
n[t.substr(i+1,e-i-1)]=t.substr(e+1),++o}),o<t.length&&t.forEach(function(t){t in n||(n[t]="")}),n},_afterSetMod:function(t,n,i,o,s){var r=this.__self,a=r._buildModClassPrefix(t,s),l=r._buildModValRE(t,s),c=""===n;
(o||this.domElem).each(function(){var t=this.className;t.indexOf(a)>-1?this.className=t.replace(l,c?"":"$1"+a+n):c||e(this).addClass(a+n)
}),s&&this.dropElemCache(s,t,i).dropElemCache(s,t,n)},findElem:function(t,e,n,i){arguments.length%2?(i=n,n=e,e=t,t=this.domElem):"string"==typeof t&&(t=this.findElem(t));
var o=this.__self,s="."+e.split(" ").map(function(t){return M(o._name,t,n,i)}).join(",.");return r(t,s)
},_elem:function(t,e,n){var i,o=t+w(e,n);return(i=this._elemCache[o])||(i=this._elemCache[o]=this.findElem(t,e,n),i.__bemElemName=t),i
},elem:function(t,n,i){if(n&&"string"!=typeof n)return n.__bemElemName=t,n;if(t.indexOf(" ")<0)return this._elem(t,n,i);
var o=e([]),s=this;return t.split(" ").forEach(function(t){o=o.add(s._elem(t,n,i))}),o},dropElemCache:function(t,e,n){if(t){var i=this,o=w(e,n);
t.indexOf(" ")<0?delete i._elemCache[t+o]:t.split(" ").forEach(function(t){delete i._elemCache[t+o]})
}else this._elemCache={};return this},elemParams:function(t){var e;return"string"==typeof t?(e=t,t=this.elem(t)):e=this.__self._extractElemNameFrom(t),l(t[0])[M(this.__self.getName(),e)]||{}
},elemify:function(t,n){return(t=e(t)).__bemElemName=n,t},containsDomElem:function(t){var e=!1;return this.domElem.each(function(){return!(e=t.parents().andSelf().index(this)>-1)
}),e},buildSelector:function(t,e,n){return this.__self.buildSelector(t,e,n)},destruct:function(t){var n=this,i=n.__self;
n._isDestructing||(n._isDestructing=!0,n._needSpecialUnbind&&i.doc.add(i.win).unbind("."+n._uniqId),n.dropElemCache().domElem.each(function(t,n){var i=a(n);
e.each(i,function(t,e){var i=p[e.uniqId];i?i._isDestructing||u(i,n):delete _[e.uniqId]}),c(n)}),t||n.domElem.remove(),delete p[n.un()._uniqId],delete n.domElem,delete n._elemCache,n.__base())
}},{scope:null,doc:d,win:h,_processLive:function(t){var e=this,n=e._liveInitable;if("live"in e){var i="undefined"==typeof n;
i^t&&(n=e.live()!==!1,e.live=function(){})}return n},init:function(t,n,o){(!t||e.isFunction(t))&&(o=n,n=t,t=d);
var s=e.identify();return r(t,".i-bem").each(function(){i(e(this),s)}),n&&this.afterCurrentEvent(function(){n.call(o||this,t)
}),this._runAfterCurrentEventFns(),t},destruct:function(t,i,o){"boolean"!=typeof t&&(o=i,i=t,t=n),B.call(r(i,".i-bem",o)).each(function(t,n){var i=a(this);
e.each(i,function(t,e){if(e.uniqId){var i=p[e.uniqId];i?u(i,n):delete _[e.uniqId]}}),c(this)}),t||(o?i.empty():i.remove())
},update:function(t,e,n,i){this.destruct(t,!0),this.init(t.html(e),n,i)},replace:function(t,n){this.destruct(!0,t),this.init(e(n).replaceAll(t))
},append:function(t,n){this.init(e(n).appendTo(t))},prepend:function(t,n){this.init(e(n).prependTo(t))
},before:function(t,n){this.init(e(n).insertBefore(t))},after:function(t,n){this.init(e(n).insertAfter(t))
},_buildCtxEventName:function(t){return this._name+":"+t},_liveClassBind:function(t,n,i,o){var s=this;
if(n.indexOf(" ")>-1)n.split(" ").forEach(function(e){s._liveClassBind(t,e,i,o)});else{var r=g[n],a=e.identify(i);
r||(r=g[n]={},d.bind(n,s.changeThis(s._liveClassTrigger,s))),r=r[t]||(r[t]={uniqIds:{},fns:[]}),a in r.uniqIds||(r.fns.push({uniqId:a,fn:s._buildLiveEventFn(i,o)}),r.uniqIds[a]=r.fns.length-1)
}return this},_liveClassUnbind:function(t,n,i){var o=g[n];if(o)if(i){if(o=o[t]){var s=e.identify(i);if(s in o.uniqIds){var r=o.uniqIds[s],a=o.fns.length-1;
for(o.fns.splice(r,1);a>r;)o.uniqIds[o.fns[r++].uniqId]=r-1;delete o.uniqIds[s]}}}else delete o[t];return this
},_liveClassTrigger:function(t){var n=g[t.type];if(n){var i=t.target,o=[];for(var s in n)n.hasOwnProperty(s)&&o.push(s);
do for(var r=" "+i.className+" ",a=0;s=o[a++];)if(r.indexOf(" "+s+" ")>-1){for(var l,c=0,u=n[s].fns,h=!1;l=u[c++];)l.fn.call(e(i),t)===!1&&(h=!0);
if(h&&t.preventDefault(),h||t.isPropagationStopped())return;o.splice(--a,1)}while(o.length&&(i=i.parentNode))
}},_buildLiveEventFn:function(t,n){var i=this;return function(s){var r=[i._name,((s.data||(s.data={})).domElem=e(this)).closest(i.buildSelector()),!0],a=o.apply(null,n?r.concat([t,s]):r);
return a&&!n&&t?t.apply(a,arguments):void 0}},liveInitOnEvent:function(t,e,n){return this.liveBindTo(t,e,n,!0)
},liveBindTo:function(t,i,o,s){(!i||e.isFunction(i))&&(o=i,i=t,t=n),t&&"string"!=typeof t||(t={elem:t}),t.elemName&&(t.elem=t.elemName);
var r=this;return t.elem&&t.elem.indexOf(" ")>0?(t.elem.split(" ").forEach(function(e){r._liveClassBind(M(r._name,e,t.modName,t.modVal),i,o,s)
}),r):r._liveClassBind(M(r._name,t.elem,t.modName,t.modVal),i,o,s)},liveUnbindFrom:function(t,i,o){(!i||e.isFunction(i))&&(o=i,i=t,t=n);
var s=this;return t&&t.indexOf(" ")>1?(t.split(" ").forEach(function(t){s._liveClassUnbind(M(s._name,t),i,o)
}),s):s._liveClassUnbind(M(s._name,t),i,o)},_liveInitOnBlockEvent:function(t,e,n,i){var o=this._name;
return v[e].on(t,function(t){if(t.block.domElem){var e=arguments,s=t.block[i](o);n&&s.forEach(function(t){n.apply(t,e)
})}}),this},liveInitOnBlockEvent:function(t,e,n){return this._liveInitOnBlockEvent(t,e,n,"findBlocksOn")
},liveInitOnBlockInsideEvent:function(t,e,n){return this._liveInitOnBlockEvent(t,e,n,"findBlocksOutside")
},liveInitOnBlockInit:function(t,e){return this.liveInitOnBlockEvent("init",t,e)},liveInitOnBlockInsideInit:function(t,e){return this.liveInitOnBlockInsideEvent("init",t,e)
},on:function(t,e,n,i,o){return t.jquery?this._liveCtxBind(t,e,n,i,o):this.__base(t,e,n,i)},un:function(t,e,n,i){return t.jquery?this._liveCtxUnbind(t,e,n,i):this.__base(t,e,n)
},liveCtxBind:function(t,e,n,i,o){return this._liveCtxBind(t,e,n,i,o)},_liveCtxBind:function(t,i,o,s,r){var a=this;
if("string"==typeof i)if(e.isFunction(o)&&(r=s,s=o,o=n),i.indexOf(" ")>-1)i.split(" ").forEach(function(e){a._liveCtxBind(t,e,o,s,r)
});else{var l=a._buildCtxEventName(i),c=f[l]||(f[l]={counter:0,ctxs:{}});t.each(function(){var t=e.identify(this),n=c.ctxs[t];
n||(n=c.ctxs[t]={},++c.counter),n[e.identify(s)+(r?e.identify(r):"")]={fn:s,data:o,ctx:r}})}else e.each(i,function(e,n){a._liveCtxBind(t,e,n,o)
});return a},liveCtxUnbind:function(t,e,n,i){return this._liveCtxUnbind(t,e,n,i)},_liveCtxUnbind:function(t,n,i,o){var s=this,r=f[n=s._buildCtxEventName(n)];
return r&&(t.each(function(){var t,n=e.identify(this,!0);n&&(t=r.ctxs[n])&&(i&&delete t[e.identify(i)+(o?e.identify(o):"")],(!i||e.isEmptyObject(t))&&(r.counter--,delete r.ctxs[n]))
}),r.counter||delete f[n]),s},_extractElemNameFrom:function(t){if(t.__bemElemName)return t.__bemElemName;
var e=t[0].className.match(this._buildElemNameRE());return e?e[1]:n},extractParams:l,_buildModClassPrefix:function(t,e){return M(this._name)+(e?k+("string"==typeof e?e:this._extractElemNameFrom(e)):"")+x+t+x
},_buildModValRE:function(t,e,n){return new RegExp("(\\s|^)"+this._buildModClassPrefix(t,e)+"("+y+")(?=\\s|$)",n)
},_buildElemNameRE:function(){return new RegExp(this._name+k+"("+y+")(?:\\s|$)")},buildSelector:function(t,e,n){return"."+M(this._name,t,e,n)
},getBlockByUniqId:function(t){return p[t]},getWindowSize:function(){return{width:h.width(),height:h.height()}
}});e(function(){t.DOM.scope=e("body")})}(BEM,jQuery),_borschik("5iPwhAxg0OtVlbQ7xKwlc6ZyD9A")&&!function(){String.prototype.trim||(String.prototype.trim=function(){for(var t=this.replace(/^\s\s*/,""),e=/\s/,n=t.length;e.test(t.charAt(--n)););return t.slice(0,n+1)
})}(),_borschik("iLapcIwwMoWny1t82wYYA6h5Xws")&&BEM.decl("location",{onSetMod:{js:function(){this._history=BEM.blocks.history.getInstance(),this._syncState(),this._history.on("statechange",this.changeThis(this._onStateChange))
}},_onStateChange:function(){this._syncState(),this._state.referer!==BEM.blocks.uri.normalize(window.location.href)&&this._state.trigger!==!1&&(this.trigger("change",this._state),this._state.block&&this.channel(this._state.block).trigger("change"))
},_syncState:function(){var t=this._history.state,e=BEM.blocks.uri.parse(t.url);return this._state=$.extend({},t.data,{referer:this._state&&this._state.url,url:e.build(),hostname:e.host(),path:e.path(),params:e.queryParams}),this
},change:function(t){var e=BEM.blocks.uri.parse(t.url);if(t.url&&delete t.params,t.url=e.build(),t.params){var n=BEM.blocks.uri.parse(),i=t.forceParams?t.params:$.extend({},this._state.params,t.params);
Object.keys(i).forEach(function(t){n.addParam(t,i[t])}),t.url=n.build()}t.trigger===!1||(t.trigger=!0);
try{this._history.changeState(t.history===!1?"replace":"push",{data:t,url:t.url})}catch(o){window.location.assign(t.url)
}},getState:function(){return $.extend(!0,{},this._state)},getUri:function(){return BEM.blocks.uri.parse(this._state.url)
},getReferer:function(){return this._state.referer}},{_instance:null,getInstance:function(){return this._instance||(this._instance=BEM.create("location"))
}}),_borschik("1a0tHsk5Gwa7OO8a8MWLOFdRA2Q")&&BEM.decl("history",{onSetMod:{js:function(){if(!this.hasMod("provider"))throw new Error("Use BEM.blocks['history'].getInstance() instead of BEM.create('history')");
this._resetUrl().bindEvents().syncState()}},destruct:function(){this.unbindEvents(),this.__base.apply(this,arguments)
},pushState:function(t,e,n){return this.changeState("push",this.normalizeState(t,e,n))},replaceState:function(t,e,n){return this.changeState("replace",this.normalizeState(t,e,n))
},bindEvents:function(){return this},_resetUrl:function(){return this},_removeHashbang:function(t){var e=BEM.blocks.uri,n=e.parse(t);
if(""===n.anchor())return t;var i=e.parse(n.anchor().replace(/^!/,""));return n.anchor(""),n.query(i.query()),n.build()
},unbindEvents:function(){return this},syncState:function(){return this.state=this.normalizeState(void 0,document.title,window.location.href),this
},normalizeState:function(t,e,n){return{data:null===t?void 0:t,title:e,url:n}},changeState:function(t,e){try{window.location.assign(e.url)
}catch(n){}}},{hasNativeAPI:function(){return window.history&&"pushState"in window.history},_instance:null,getInstance:function(){return this._instance||(this._instance=BEM.create({block:"history",mods:{provider:this.hasNativeAPI()?"history-api":"hashchange"}}))
}}),_borschik("i0VIlgGdnXrH8n-xe-UQ90hodws")&&BEM.decl("uri",{onSetMod:{js:function(){var t=this;["protocol","host","port","path","anchor"].forEach(function(e){t[e]=function(t){return"undefined"!=typeof t?(this.uriParts[e]=t,this):this.uriParts[e]
}})}},encode:function(t){return encodeURIComponent(t)},decode:function(t){try{t=decodeURIComponent(t)
}catch(e){try{t=decodeURIComponent(this.convert(t))}catch(n){}}return t},convert:function(t){var e={"%D0":"%D0%A0","%C0":"%D0%90","%C1":"%D0%91","%C2":"%D0%92","%C3":"%D0%93","%C4":"%D0%94","%C5":"%D0%95","%A8":"%D0%81","%C6":"%D0%96","%C7":"%D0%97","%C8":"%D0%98","%C9":"%D0%99","%CA":"%D0%9A","%CB":"%D0%9B","%CC":"%D0%9C","%CD":"%D0%9D","%CE":"%D0%9E","%CF":"%D0%9F","%D1":"%D0%A1","%D2":"%D0%A2","%D3":"%D0%A3","%D4":"%D0%A4","%D5":"%D0%A5","%D6":"%D0%A6","%D7":"%D0%A7","%D8":"%D0%A8","%D9":"%D0%A9","%DA":"%D0%AA","%DB":"%D0%AB","%DC":"%D0%AC","%DD":"%D0%AD","%DE":"%D0%AE","%DF":"%D0%AF","%E0":"%D0%B0","%E1":"%D0%B1","%E2":"%D0%B2","%E3":"%D0%B3","%E4":"%D0%B4","%E5":"%D0%B5","%B8":"%D1%91","%E6":"%D0%B6","%E7":"%D0%B7","%E8":"%D0%B8","%E9":"%D0%B9","%EA":"%D0%BA","%EB":"%D0%BB","%EC":"%D0%BC","%ED":"%D0%BD","%EE":"%D0%BE","%EF":"%D0%BF","%F0":"%D1%80","%F1":"%D1%81","%F2":"%D1%82","%F3":"%D1%83","%F4":"%D1%84","%F5":"%D1%85","%F6":"%D1%86","%F7":"%D1%87","%F8":"%D1%88","%F9":"%D1%89","%FA":"%D1%8A","%FB":"%D1%8B","%FC":"%D1%8C","%FD":"%D1%8D","%FE":"%D1%8E","%FF":"%D1%8F"};
return t=t.replace(/%.{2}/g,function(t){return e[t]||t})},normalize:function(t){return(t||"").replace(/\+/g,"%20")
},parseUri:function(t){var e=/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,n=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],i=e.exec(t||""),o={};
return n.forEach(function(t,e){o[t]=i[e]||""}),o},parseQuery:function(t){var e,n,i,o,s,r={};if("string"!=typeof t||""===t)return r;
for(n=t.replace("?","").split("&"),e=0;e<n.length;e++)i=n[e].split("="),i=[i.shift(),void 0!==i[0]?i.join("="):null],o=this.decode(i[0]),s=i[1]||""===i[1]?this.decode(i[1]):null,r[o]?(s||""===s)&&r[o].push(s):r[o]=null===s?[]:[s];
return r},query:function(t){var e="";"undefined"!=typeof t&&(this.queryParams=this.parseQuery(t));var n=this.queryParams,i=Object.keys(n),o=this;
return i.forEach(function(t,i){i>0&&(e+="&"),"object"!=typeof n[t]||n[t].length?n[t].forEach(function(n,i){i>0&&(e+="&"),e+=o.encode(t)+"="+o.encode(n)
}):e+=t}),e.length>0?"?"+e:e},getParam:function(t){return this.queryParams[t]},deleteParam:function(t,e){var n=[];
return"undefined"!=typeof e&&(this.queryParams[t].forEach(function(t){t!==e&&n.push(t)}),this.queryParams[t]=n),("undefined"==typeof e||0===n.length)&&delete this.queryParams[t],this
},addParam:function(t,e){return this.queryParams[t]=(this.queryParams[t]||[]).concat(e),this},replaceParam:function(t,e,n){return this.deleteParam(t,n).addParam(t,e)
},scheme:function(){var t="";return this.protocol()?(t+=this.protocol(),this.protocol().indexOf(":")!==this.protocol().length-1&&(t+=":"),t+="//"):this.host()&&(t+="//"),t
},origin:function(){var t=this.scheme();return this.host()&&(t+=this.host(),this.port()&&(t+=":"+this.port())),t
},getRoot:function(){var t=this.origin();return this.path()&&(t+=this.path().replace(/\/[^\/]*$/,"")),t
},pathParts:function(){return this.path().split("/")},toString:function(){var t=this.origin();return this.path()?t+=0!==this.path().indexOf("/")&&"/"!==t[t.length-1]?"/"+this.path():this.path():this.host()&&(this.query().toString()||this.anchor())&&(t+="/"),this.query().toString()&&(0!==this.query().toString().indexOf("?")&&(t+="?"),t+=this.query().toString()),this.anchor()&&(0!==this.anchor().indexOf("#")&&(t+="#"),t+=this.anchor()),t
},build:function(){var t="";return t+=this.protocol()?this.protocol():window.location.protocol,t+=t.indexOf(":")!==t.length-1?"://":"//",t+=this.host()?this.host():window.location.hostname,this.port()?t+=":"+this.port():!this.host()&&window.location.hostname&&(t+=":"+window.location.port),t+=this.path()?this.path():this.host()?"/":window.location.pathname,this.query()&&(0!==this.query().indexOf("?")&&(t+="?"),t+=this.query()),this.anchor()&&(0!==this.anchor().indexOf("#")&&(t+="#"),t+=this.anchor()),t
}},{parse:function(t){var e=BEM.create({block:"uri"});return e.uriParts=e.parseUri(e.normalize(t)),e.queryParams=e.parseQuery(e.uriParts.query),e
},normalize:function(t){return this.parse(t).toString()}}),_borschik("IK_XO0vfhGpLtw4Srr7I07N2hh0")&&BEM.decl({block:"history",modName:"provider",modVal:"history-api"},{_onPopState:function(t){var e=t.originalEvent.state;
null!==e&&(this.state=this.normalizeState(e,document.title,window.location.href),this.state.data&&delete this.state.data.trigger,this.trigger("statechange",this.state))
},bindEvents:function(){return this.__base.apply(this,arguments),BEM.DOM.win.on("popstate",this.changeThis(this._onPopState)),this
},unbindEvents:function(){return this.__base.apply(this,arguments),BEM.DOM.win.off("popstate",this._onPopState),this
},_resetUrl:function(){var t=BEM.blocks.uri.parse(window.location.href);return t.anchor()&&window.history.replaceState(null,document.title,this._removeHashbang(window.location.href)),this
},syncState:function(){return null===window.history.state&&window.history.replaceState(void 0,document.title,window.location.href),(null===this.state||void 0===this.state)&&(this.state=this.normalizeState(void 0,document.title,window.location.href)),this
},changeState:function(t,e){return window.history[t+"State"](e.data,e.title||document.title,e.url),this.state=e,this.trigger("statechange",{state:e,nativeApi:!0}),this
}}),_borschik("EBtlUlQXmrGKOpyMC2IKXjXXwc0")&&BEM.decl({block:"history",modName:"provider",modVal:"hashchange"},{_onHashChange:function(){this.state=this.normalizeState(void 0,document.title,this._removeHashbang(window.location.href)),this.trigger("statechange",{state:this.state,nativeApi:!1})
},bindEvents:function(){return this.__base.apply(this,arguments),BEM.DOM.win.on("hashchange",this.changeThis(this._onHashChange)),this
},unbindEvents:function(){return this.__base.apply(this,arguments),BEM.DOM.win.off("hashchange",this._onHashChange),this
},syncState:function(){return this.state=this.normalizeState(void 0,document.title,this._removeHashbang(window.location.href)),this
},_generateHashbang:function(t){var e=BEM.blocks.uri.parse(t),n=e.pathParts();return"!/"+n[n.length-1]+e.query()
},_resetUrl:function(){return this},changeState:function(t,e){var n=BEM.blocks.uri.parse(e.url);if(n.host()&&n.host()!==window.location.hostname||n.port()&&n.port()!==window.location.port||n.protocol()&&n.protocol()!==window.location.protocol.replace(":",""))throw new Error("SECURITY_ERR: DOM Exception 18");
this.state=e,window.location.hash=this._generateHashbang(e.url)}}),_borschik("6E64pL8uB3fXwwdi5gTPpMwtk6M")&&!function(t){var e=1,n=!1;
if("deviceXDPI"in screen&&"logicalXDPI"in screen?e=screen.deviceXDPI/screen.logicalXDPI:"devicePixelRatio"in t&&(e=t.devicePixelRatio),"function"==typeof t.matchMedia){var i="only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen and (min-resolution: 124dpi)";
n=t.matchMedia(i).matches}else n=e>=1.3;BEM.DOM.decl("i-ua",{onSetMod:{js:function(){var t=this,e=t.__self;
e.hiDpi&&t.setMod("hi-dpi","yes")}}},{dpr:e,hiDpi:n})}(window),_borschik("y7kwd8srwWMa7KrW1CgMUftWyAg")&&!function(){var t,e,n;
BEM.decl("i-ua",{},{canUseAjax:function(){return"undefined"==typeof t&&(t=(window.history&&"pushState"in window.history||"onhashchange"in window)&&this.isCookieEnabled()),t
},isCookieEnabled:function(){if("undefined"==typeof e){var t=Math.random().toString(16).slice(2);document.cookie=t+"=1",e=document.cookie.indexOf(t)>=0,document.cookie=t+"=;expires="+new Date(0).toGMTString()
}return e},canUseDataURIAsync:function(t){if("undefined"==typeof n){var e=new Image;e.onerror=function(){t(n=!1)
},e.onload=function(){1==e.width&&1==e.height?t(n=!0):t(n=!1)},e.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
}else this.afterCurrentEvent(function(){t(n)})}})}(),_borschik("7NY8E_X8L7PQ0KJooSBACcgRNq0")&&BEM.decl("i-ua",{},{canUseAjax:function(){return this.__base.apply(this,arguments)&&BEM.blocks["i-global"].param("pref-ajax")
}}),_borschik("oBxXkftuvFSxIodWbtoM8GzKW3g")&&!function(t){t||(t=window.Lego={}),t.messages=t.messages||{},t.message=function(e,n){return"ru"==t.params.locale?n:t.messages[e]||n
}}(window.Lego),_borschik("rPoVNjfkSbG7cNaAbXJQqtdyBQc")&&BEM.DOM.decl("i-global",{onSetMod:{js:function(){this.del(this.__self._params=$.extend({},this.params),"uniqId","name");
var t=this.__self._params;t["passport-msg"]||(t["passport-msg"]=t.id),void 0===t["show-counters"]&&(t["show-counters"]=Math.round(100*Math.random())<=t["show-counters-percent"]),t.locale=t.lang,$(function(){t.oframebust&&Lego.oframebust(t.oframebust)
})}},getDefaultParams:function(){return{id:"",login:Lego.isSessionValid()?$.cookie("yandex_login")||"":"",yandexuid:$.cookie("yandexuid"),lang:"ru",tld:"ru",retpath:encodeURI($.decodeURI(location.href)),"passport-host":"https://passport.yandex.ru","pass-host":"https://pass.yandex.ru","social-host":"https://social.yandex.ru","lego-path":"/lego","show-counters-percent":100}
}},{param:function(t){return(this._params||{})[t]}}),_borschik("7InqI79-nZzDZJ7jMZvj-DoxLYM")&&BEM.DOM.decl("i-global",{onSetMod:{js:function(){this.params.framebuster&&BEM.create({block:"i-framebuster",mods:{type:"yandex"}},{whitelist:this.params.framebuster}),this.__base.apply(this,arguments),BEM.blocks.location.getInstance().on("change",function(t,e){this.__self.setParams({retpath:e.url})
},this)}}},{setParams:function(t){$.extend(this._params,t)}}),_borschik("ohX0388V5eNnznHnnelu9PprIeo")&&BEM.DOM.decl("i-global",{onSetMod:{js:function(){this.__base.apply(this,arguments),this.__self.rstat=BEM.create({block:"b-statcounter",elem:"statface",elemMods:{type:"rstat"}});
var t={path:"click",keys:["path"]};if(t.customKeys=["vars"],this.__self.pageLoadCounter=BEM.create("i-statface",t),window.history&&window.history.pushState){var e=BEM.blocks.location.getInstance();
e.getState().params.lr||e.change({params:{lr:this.params.lr},trigger:!1,history:!1})}this.__self.sendCounters(this.__self.viewPortParamsCount())
}}},{sendCounters:function(t){var e={path:"471.143.1007"};t&&$.extend(e,{vars:"-visible-web-cnt="+t.serpTitlesCount+",-visible-direct-cnt="+t.serpAdvTitlesCount+",-visible-banner="+t.bannerInArea+",-viewport-size="+t.winWidth+";"+t.winHeight+",-serp=3"}),this.rstat.send(this.param("reqid")),this.param("isPageLoadCounter")&&this.pageLoadCounter.set(e).sendCounter()
},viewPortParamsCount:function(){var t=BEM.DOM.win,e=t.width(),n=t.scrollTop(),i=t.height(),o={t:n+$(".header").outerHeight(),r:e,b:n+i,l:0},s=function(t,e){if(t&&t.length){var n=t.offset(),i=n.top;
return e&&(i+=t.height()),t.length&&n.left<o.r&&i<o.b&&i>o.t}},r=function(t){if(t.length){for(var e=0;e<t.length;e++){var n=$(t[e]),i=s(n.find(".serp-item__title"),!0);
if(i||u){if(!i&&u)break;u=!0,n.hasClass("serp-adv__item")?c++:l++}}u=!1}},a=!1,l=0,c=0,u=!1;return r($(".content__left").find(".serp-item")),s($(".serp-adv__banner"))&&(a=!0),{serpTitlesCount:l,serpAdvTitlesCount:c,bannerInArea:a,winWidth:e,winHeight:i}
}}),_borschik("CXHFnEIepnLwqbAUMdZ55F8crUU")&&BEM.decl("i-framebuster",{onSetMod:{js:function(){if(window.top.location!==window.location){var t=document.referrer.match(/^https?:\/\/([^:\/\s]+)\/?.*/);
t&&!this.isInWhitelist(t[1])&&(window.top.location=window.location)}}},isInWhitelist:function(t){for(var e=this.defaultWhitelist().concat(this.params.whitelist||[]),n=0;n<e.length;++n){var i=e[n];
if("string"!=typeof i){if(i.test(t))return!0}else if(i===t||-1!=t.indexOf(i,t.length-i.length))return!0
}},defaultWhitelist:function(){return[]}}),_borschik("piMndFoeA4XTJUPCoHFb_jDyYxg")&&BEM.decl({name:"i-framebuster",modName:"type",modVal:"yandex"},{defaultWhitelist:function(){return[/^(\w*\.)*yandex\.(ru|kz|by|ua|com|com\.tr|net)\.?$/,/^(\w*\.)*yandex-team\.(ru|kz|by|ua|com|com\.tr)\.?$/]
}}),_borschik("xrIj6Mt0kN3Dg7y9o8dyFtosF9c")&&!function(){var t=0,e=72043,n=0;$(document).one("mousemove",function(){n=1
}),BEM.decl({block:"b-statcounter",elem:"statface",elemMods:{type:"rstat"}},{send:function(i,o){i&&setTimeout(function(){Lego.cp(t,e,"M"+n+"/reqid="+i)
},o||1e3)}})}(),_borschik("0DBwCeZTy79OEw8Vi3tBQrqlxZ4")&&!function(){var t={};BEM.decl("i-request",{onSetMod:{js:function(){this._preventCache=!1
}},get:function(t,e,n,i){$.isFunction(n)||(i=n,n=this.params.onError),this._get(t,e,n,$.extend({},this.params,i))
},_get:function(e,n,i,o){var s=this._buildCacheKey(e,o),r=t[o.cacheGroup];o.cache&&r&&s in r.data?this.afterCurrentEvent(function(){n.call(this.params.callbackCtx,r.data[s])
},this):this._do(e,n,i,o)},_do:function(){},_onSuccess:function(t,e,n,i){i.cache&&!this._preventCache&&this.putToCache(i,t,n),this._preventCache=!1
},_buildCacheKey:function(t){return"string"==typeof t?t:$.param(t)},putToCache:function(e,n,i){var o=t[e.cacheGroup]||(t[e.cacheGroup]={keys:[],data:{}});
o.keys.length>=e.cacheSize&&delete o.data[o.keys.shift()];var s=this._buildCacheKey(n,e);o.data[s]=i,o.keys.push(s)
},dropCache:function(){delete t[this.params.cacheGroup]},getDefaultParams:function(){return{cache:!1,cacheGroup:"default",cacheSize:100,callbackCtx:this}
}},{_cache:t})}(),_borschik("bj-QU2oLq0vHa8Mjy_HL2GySYPs")&&!function(t){t.decl({block:"i-request_type_ajax",baseBlock:"i-request"},{onSetMod:{js:function(){this.__base(),this._requestNumber=this._number=this._preventNumber=this._retryCount=0
}},_get:function(t,e,n,i){this._number++,this._requestNumber++,this._retryCount=i.retryCount,this.__base.apply(this,arguments)
},_do:function(t,e,n,i){var o=this;if(o._number>o._preventNumber){var s=arguments,r={data:i.data?$.extend({},i.data,t):t},a=o._wrapCallback(function(n,s,r){o._onSuccess(o._buildCacheKey(t,i),t,n[0],i),o._allowCallback(s,r)&&e.apply(i.callbackCtx,n)
}),l=o._wrapCallback(function(t,e,r){o._allowCallback(e,r)&&(o._retryCount-->0?setTimeout(function(){o._do.apply(o,s)
},i.retryInterval):n&&n.apply(i.callbackCtx,t))});$.each(["url","dataType","timeout","type","jsonp","jsonpCallback"].concat(i.paramsToSettings||[]),function(t,e){r[e]=i[e]
}),$.ajax(r).done(a).fail(l)}},_wrapCallback:function(t){var e=this._requestNumber,n=this._number;return function(i){null!==i&&t(arguments,e,n)
}},_allowCallback:function(t,e){return e>this._preventNumber&&this._requestNumber==t},_buildCacheKey:function(t,e){return"string"==typeof t?t:this.__base(t)+e.url
},abort:function(){this._preventNumber=++this._number},preventCallbacks:function(){this.abort()},getDefaultParams:function(){return $.extend(this.__base(),{cache:!0,type:"GET",dataType:"jsonp",timeout:2e4,retryCount:0,retryInterval:2e3})
}})}(BEM),_borschik("Sn_oz1jE8m6fmrgr3lvo4SGsb1w")&&BEM.decl({block:"i-request_type_ajax"},{onSetMod:{js:function(){this.__base.apply(this,arguments),this.cacheIrrelevantParams=["rf","skip-banner","lr","redircnt","prefetch","reqid"];
var t=BEM.blocks["i-global"].param("serpRequestExtraParams");for(var e in t)t.hasOwnProperty(e)&&this.cacheIrrelevantParams.push(e)
}},_get:function(t,e,n,i){if(i.data&&(i.data.reqid=BEM.blocks["i-global"].param("reqid")),this.params.cacheTimeout){var o,s=this._buildCacheKey(t,i),r=this.__self._cache,a=r[i.cacheGroup];
i.cache&&a&&s in a.data&&(o=a.timestamps[s],(new Date).getTime()-o>this.params.cacheTimeout&&(delete a.timestamps[s],delete a.data[s],a.keys.splice(a.keys.indexOf(s),1)))
}this.__base.apply(this,arguments)},_onSuccess:function(t,e,n,i){this.__base.apply(this,arguments),i.hubName&&i.cache&&!this._preventCache&&i.hubCallback(i.hubName,t)
},_buildCacheKey:function(t,e){if("string"==typeof t)return t;for(var n=$.extend(!0,{},t),i=this.cacheIrrelevantParams,o=0,s=i.length;s>o;o++)i[o]in n&&delete n[i[o]];
return $.param(n)+e.url},putToCache:function(t,e){var n=this._buildCacheKey(e,t),i=this.__self._cache,o=i[t.cacheGroup]||(i[t.cacheGroup]={keys:[],data:{},timestamps:{}});
this.__base.apply(this,arguments),o.keys.length>=t.cacheSize&&delete o.timestamps[o.keys[0]],o.timestamps[n]=(new Date).getTime()
}}),_borschik("cx78Xug3m9kpJD5vUgffPTOxu3M")&&!function(){BEM.decl("i-mcounter",{},{entropy:0,cellSize:100,previous:"",current:"",moves:{total:0,cells:{}},init:function(){this.bind()
},bind:function(){var t=this;$(window).unbind("mousemove.i-mcounter").bind("mousemove.i-mcounter",function(e){t.track(e.clientX,e.clientY)
})},track:function(t,e){this.current=this.getKey(t,e),this.shouldTrack()&&(this.updateCellCounter(),this.moves.total++,this.previous=this.current)
},shouldTrack:function(){return this.current!==this.previous||!this.previous},updateCellCounter:function(){var t=this.moves.cells;
this.current in t||(t[this.current]=0),t[this.current]++},getKey:function(t,e){return Math.floor(t/100)+"."+Math.floor(e/100)
},getCellPosition:function(t){return Math.floor(t/this.cellSize)},get:function(){return this.calculate(),this.entropy
},calculate:function(){var t=0,e=this.moves.cells,n=this;$.each(e,function(e,i){var o=n.moves.total,s=i/o;
t-=s*Math.log(s)/Math.log(2)}),this.entropy=t}}).init()}(),_borschik("k1SW_T7uym9a92egWrrspcHh5yA")&&$(function(){BEM.afterCurrentEvent(function(){BEM.DOM.init()
})}),_borschik("G9yqiyl0uxWHC6lZQToKDd_Zzt8")&&!function(){var t={9:"tab",13:"enter",32:"space",33:"page up",34:"page down",35:"end",36:"home",37:"left arrow",38:"up arrow",39:"right arrow",40:"down arrow",46:"delete"},e={27:"escape"};
BEM.DOM.decl({block:"i-ua",modName:"interaction",modVal:"yes"},{onSetMod:{js:{inited:function(){this.bindTo("mousedown",this._onPointer).bindTo("keydown",this._onKeyboard)
}}},_onPointer:function(){this.interaction="pointer",this.domElem.attr("data-interaction","pointer"),this.unbindFrom("mousedown")
},_onKeyboard:function(n){var i=n.keyCode;return e[i]?(this._onPointer(),void 0):(t[i]&&"keyboard"!==this.interaction&&(this.domElem.attr("data-interaction","keyboard"),this.interaction="keyboard",this.bindTo("mousedown",this._onPointer)),void 0)
}})}(),_borschik("mPDd1HTyxeKNUFR0zVW0F8SWQZA")&&BEM.DOM.decl("b-page",{onSetMod:{js:function(){this.bindToWin("focus focusin",this._updateWprid)
}},_updateWprid:function(){var t=BEM.blocks["i-global"].param("reqid"),e=BEM.blocks["i-cookie"].get();
t!==e.ys("wprid")&&e.ys("wprid",t)}}),_borschik("ShgATzASB-ROJtabxwGoPQHpFf4")&&!function(t){t=t||{},t.oframebustMatchDomain=function(t,e){t="[object Array]"===Object.prototype.toString.call(t)?t:function(){var e=[];
for(var n in t)t.hasOwnProperty(n)&&e.push(n);return e}();for(var n=0,i=t.length;i>n;n++){var o=t[n];
if("string"==typeof o){if(/(\?|\*)/.test(o)){var s=o.replace(/\./g,"\\.").replace(/\*/g,".*").replace(/\?/g,".{1}");
if(new RegExp("^"+s+"$").test(e))return!0}else if(e==o)return!0}else try{if(o.test(e))return!0}catch(r){}}}
}(window.Lego),_borschik("-TdS4jafy63XFqw-rGn6ubNJuqg")&&!function(t){t=t||{},t.oframebust=function(e){if(window.top.location!=window.location){var n=document.referrer.match(/^https?:\/\/([^:\/\s]+)\/?.*/);
if(!n)return;!t.oframebustMatchDomain(e,n[1])&&(window.top.location=window.location)}}}(window.Lego),_borschik("Rf2nfzsIJmN0pdjyK4dDjWFS3Bw")&&BEM.DOM.decl("i-services",{onSetMod:{js:function(){this._searchInput=this.findBlockInside("search").findBlockInside("input")
}},getServicePath:function(t,e){var n=this.params[t];return n?n.search+encodeURIComponent(e||this._searchInput.val())+(n.params||""):""
},getServiceUrl:function(t){return(this.params[t]||{}).baseUrl}}),_borschik("Czu3BwTZ7aRScOPOGV2qvOHX7jk")&&BEM.DOM.decl("link",{getDefaultParams:function(){return{origTabindex:"0"}
},onSetMod:{disabled:function(t,e){var n="yes"===e;this.domElem.attr({"aria-disabled":n,tabindex:n?-1:this.params.origTabindex})
}}}),_borschik("rnS9r8o1HOJCZfTK4pkXRiP9av4")&&!function(){var t;BEM.decl("i-cookie",{defaultExpire:new Date+604800,getDefaultParams:function(){return{yp:{expires:new Date("Tue Jan 1 00:00:00 2038"),domain:".yandex."+BEM.blocks["i-global"].param("tld"),path:"/"},ys:{domain:".yandex."+BEM.blocks["i-global"].param("tld"),path:"/"}}
},ypRead:function(){for(var t,e=$.cookie("yp"),n=e?e.split("#"):[],i=new Date/1e3,o={},s=0,r=n.length;r>s;s++)t=n[s].split("."),t[0]>i&&(o[t[1]]={value:t[2],expires:t[0]});
return o},ypWrite:function(t){for(var e=[],n=0,i=Object.keys(t),o=i.length;o>n;n++)e.push([t[i[n]].expires,i[n],t[i[n]].value].join("."));
$.cookie("yp",e.join("#"),this.params.yp)},yp:function(t,e,n){var i=this.ypRead(),o=i[t];return 1===arguments.length?o&&o.value:(o||(o={}),o.value=e,o.expires=n||o.expires||this.defaultExpires,i[t]=o,this.ypWrite(i))
},ysRead:function(){var t,e=$.cookie("ys"),n=e?e.split("#"):[],i={};return n.forEach(function(e){t=e.split("."),i[t[0]]=decodeURIComponent(t[1])
}),i},ysWrite:function(t){for(var e=[],n=0,i=Object.keys(t),o=i.length;o>n;n++)e.push([i[n],t[i[n]]].join("."));
$.cookie("ys",e.join("#"),this.params.ys)},ys:function(t,e){var n=this.ysRead();return e?(n[t]=e,this.ysWrite(n)):n[t]
}},{get:function(){return t||(t=BEM.create("i-cookie"))}})}(),_borschik("YPAwY4tkhSLA451j11A1Z9PQZow")&&BEM.DOM.decl("metrika",{onSetMod:{js:function(){var t=this.params.counter,e=BEM.blocks.location.getInstance();
e.on("change",function(e,n){try{window["yaCounter"+t].hit(n.url,document.title)}catch(i){}},this);var n=this.findBlockOutside("b-page").findBlockInside("more");
n&&n.on("nextPage",function(){try{window["yaCounter"+t].hit(e.getUri().replaceQueryParam("rnd",Math.round(1e6*Math.random())).toString(),document.title)
}catch(n){}})}}}),_borschik("zjVCmSEQK0cH7IKsJi8cpNrLW2Y")&&(BEM.DOM.decl({name:"i-flashcookie",modName:"type",modVal:"iframe"},{onSetMod:{js:function(){Lego.block["i-flashcookie"].call(this.domElem,this.params)
}}}),function(){var t=Lego.block["i-flashcookie"],e=function(t){t||(t={});var e=this,n=t.host||"kiks.yandex",i=arguments.callee.load=function(){e.replaceWith($('<iframe src="//'+n+location.host.match(/.*([.].*?):?\d{0,}$/)[1]+'/su/" class="'+e.attr("class")+'"/>'))
};e.hasClass("i-flashcookie_autoload_no")||i()};Lego.block["i-flashcookie"]=function(n){var i=this.hasClass("i-flashcookie_type_iframe")?e:t;
i&&i.call(this,n)}}()),_borschik("0alFzS0vCukFS7C_3wer7fwhO2M")&&(BEM.DOM.decl({name:"i-flashcookie",modName:"type",modVal:"inline"},{onSetMod:{js:function(){Lego.block["i-flashcookie"].call(this.domElem,this.params)
}}}),function(){var t=Lego.block["i-flashcookie"],e=function(t){function e(t,e){return'<param name="'+t+'" value="'+e+'" />'
}function n(t,e){return" "+t+'="'+e+'"'}function i(t,e,n){var i=t.match(e);return i&&i[n+1?n:1]||""}function o(){return i(d.cookie,new RegExp("fuid"+l+"=([^;]+)"))
}function s(){var t=d.domain;return t&&i(t,/[^.]+\.[^.]{2,3}(\.tr)?$/,0)}t||(t={});var r,a,l,c,u=t.host||"kiks.yandex",h=window,d=document,_=navigator,p=_.userAgent,m=_.mimeTypes,f=9,g=p&&/gecko/i.test(p),v=p&&/MSIE/.test(p)&&/Win/.test(p),b=g?"embed":"object",y="//"+u.split(".").slice(0,-1).join(".")+".%s/system/fc%d.html",x="//"+u+".ru/system/%s%d.swf",k="//"+u+".ru/fu",w="//"+u+".ru/fu",M="application/x-shockwave-flash",E="style",B="position:absolute;margin-left:-999em;top:0;",S=' classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"',L="allowScriptAccess",C="always",I="height",P="wmode",D="window",T="width",O="bgcolor",$="#FFFFFF",j="ya_fc",A=n(E,B)+n(T,1)+n(I,1)+n("id",j),N=!1;
h.ya_fc_external=function(t,i,u,h){r=t,a=i,l=u,c=h||"fc";var d,_=m&&m[M]?m[M].enabledPlugin:0,p=N,y=0,E=o()?x.replace("%d",a).replace("%s",c):k.replace("%s",s());
if(_)y=_.description.split("Shockwave Flash ")[1],p=parseInt(y,10)>=f;else if(v){p=N;try{p=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+f)
}catch(I){}}return d=p?g?'<div style="'+B+'"><'+b+A+n("src",E)+n(P,D)+n(O,$)+n(L,C)+n("type",M)+"/></div>":(v?"<"+b+S+A+">"+e("movie",E):"<"+b+A+n("type",M)+n("data",E)+">")+e(P,D)+e(O,$)+e(L,C)+"</"+b+">":'<img src="'+w.replace("%s",s())+'" style="'+B+'" />'
},h.ya_fc_requestData=function(){var t=d.getElementById("ya_fc");try{t.setLocation(s(),o())}catch(e){}},h.ya_fc_setCookie=function(t){var e=new Date;
e.setTime(e.getTime()+31536e7),d.cookie="fuid"+l+"="+t+";expires="+e.toGMTString()+";path=/;domain="+s()
},h.ya_fc_getIFrame=function(t){var e=y.replace("%s",t).replace("%d",r),n=d.createElement("iframe"),i=d.getElementsByTagName("body")[0],o="40px;";
n.src=e,n.style.cssText=T+o+I+o+"border:0;"+B,n.frameBorder=0,i&&i.insertBefore(n,i.firstChild)};var z=this,F=arguments.callee.load=function(t){var e,n;
t.mode?(e="00",n="kfc"):e="07",z.replaceWith(h.ya_fc_external("07_2",e,"01",n))};z.hasClass("i-flashcookie_autoload_no")||F(t)
};Lego.block["i-flashcookie"]=function(n){var i=this.hasClass("i-flashcookie_type_inline")?e:t;i&&i.call(this,n)
}}()),_borschik("-X2f-4NCE97fyQyR29pNg7C9cp0")&&!function(t){var e=t.event.special.leftclick={setup:function(){t(this).bind("click",e.handler)
},teardown:function(){t(this).unbind("click",e.handler)},handler:function(e){e.button||(e.type="leftclick",t.event.handle.apply(this,arguments),e.type="click")
}}}(jQuery),_borschik("JmxYeUpKdEDOLLo8gToWnm3jNo8")&&!function(t){var e,n=t.browser,i=n.opera&&n.version<13,o=n.opera&&n.version<12.1?"keypress":"keydown",s=Object.prototype.hasOwnProperty,r=BEM.DOM,a=n.msie&&n.version>=9&&n.version<10,l=function(t){try{return t.activeElement
}catch(e){}};BEM.DOM.decl("popup",{getDefaultParams:function(){var t={left:15,right:15,top:15,bottom:15};
return{directions:[{to:"bottom",axis:"center",tail:{axis:"center"}},{to:"top",axis:"center",tail:{axis:"center"}},{to:"right",axis:"middle",tail:{axis:"middle"}},{to:"left",axis:"middle",tail:{axis:"middle"}}],tail:{width:24.04,height:12.02,offset:t},duration:150}
},onSetMod:{js:function(){this._cache={},this._viewport=r.win,this._scope=r.scope,this._channel=BEM.channel("popups"),this._inContainer=!1,this._isParentFixed=!1,this._owner=null,this._userPosition=null,this._parent=null,this._childs=[],this._isShown=!1,this._isHiding=!1,this._positions={},this._currPos={},this._visibilityFactor=null,this._direction=!1,this._directions={};
var t=this.getDefaultParams(),e=this.params,n=this._repackDirParams(t.directions),i=e.generateDirections?this._generateDirections:e.directions,o=this._repackDirParams(i);
e.tail&&(this.params.tail=this._mergeParams(t.tail,e.tail)),this._order=o.keys.map(function(t){var e=o.directions[t],i=n.directions[t];
return i||(i=n.directions[e.to]),this._directions[t]=this._mergeParams(i,e,{tail:this._tailParamsHook}),t
},this)},visibility:{visible:function(){this._onShown()},"":function(){this._onHidden()}}},show:function(e){var n;
if(e instanceof BEM)n=e.domElem.eq(0);else if(e instanceof t)n=e;else if(!e)return;if(n){this._owner&&n[0]!==this._owner[0]&&this.delMod("visibility"),this._owner=n;
var i=this._findParent(n);i&&this.setParent(i)}else this._userPosition=e;return this.setMod("visibility","outside").repaint()
},hide:function(){if(this._isHiding)return this;if(this._isShown&&(this._isHiding=!0,this._childs.forEach(function(t){t.hide()
}),this.hasMod("animate","yes")&&!this.hasMod("fade-out","no"))){var t=this;return this.beforeHide(function(){t.domElem&&t.delMod("visibility")
}),this}return this.delMod("visibility")},toggle:function(t){return this._isShown&&!this._isHiding?this.hide():this.show(t||this._owner)
},repaint:function(){this._moveToContainer();var t=this._pickDirection();return this.setMod("to",t.to)._show(this._positions[t.key],this._tailPos&&this._tailPos[t.key]),this
},repaintShadowIfNeeded:function(){return a&&this._repaintShadow(),this},getCurrPos:function(){return this._currPos
},getCurrDirection:function(){return this._direction},setContent:function(t){return r.update(this.elem("content"),t),this._resetDefault(),this._isShown&&this.repaint(),this
},isShown:function(){return this._isShown},setParent:function(t){return this._parent=t,this._isParentFixed=t.hasMod("position","fixed"),t.addChild(this),this
},addChild:function(t){for(var e=this._childs,n=e.length,i=0;n>i;i++)if(e[i]._uniqId===t._uniqId)return;
t.on("hide",function(){this.removeChild(t)},this),e.push(t)},removeChild:function(t){for(var e=this._childs,n=e.length,i=0;n>i;i++)if(e[i]._uniqId===t._uniqId)return e.splice(i,1),void 0
},setSize:function(t){return t&&(this._resetDefault(),this.domElem.css(t),this._isShown&&!this._isHiding&&this.repaint()),this
},_show:function(t,e){return this._currPos=t,e&&this.elem("tail").removeAttr("style").css(e),this.domElem.css(t),(!this._isShown||this._isHiding)&&this.hasMod("animate","yes")&&!this.hasMod("fade-in","no")&&this.afterShow(),this._isHiding=!1,this.setMod("visibility","visible"),this
},_onShown:function(){this.bindToDoc(o,function(t){27===t.which&&0===this._childs.length&&this.hide()
}),this._bindFocusEvents(),this._attachUnder(),this._isShown=!0,this.hasMod("autoclosable","yes")&&this.afterCurrentEvent(function(){this._enableAutoclosable()
}),this.hasMod("adaptive","yes")&&this._enableAdaptive(),this._channel.on("hide",this.hide,this),this.trigger("show")
},_onHidden:function(){this._unbindFocusEvents(),this.unbindFromDoc(o),this._detachUnder(),this.hasMod("autoclosable","yes")&&this._disableAutoclosable(),this.hasMod("adaptive","yes")&&this._disableAdaptive(),this._cache={},this._isShown=!1,this._isHiding=!1,this._channel.un("hide"),this._returnFocus(),this.trigger("hide")
},_bindFocusEvents:function(){this._lastFocused=t(l(document)||this._scope);var e=this.__self._getFocusable(this.elem("content"));
return this._firstFocusable=e.first(),this._lastFocusable=e.last(),this._skipReturnFocus=!1,0===this._firstFocusable.length?(this._skipReturnFocus=!0,void 0):(this.bindTo(this._lastFocused,"keydown",this._onLastFocusedKeyDown).bindTo(this._firstFocusable,"keydown",this._onFirstFocusableKeyDown).bindTo(this._lastFocusable,"keydown",this._onLastFocusableKeyDown),void 0)
},_unbindFocusEvents:function(){this.unbindFrom(this._firstFocusable,"keydown"),this.unbindFrom(this._lastFocusable,"keydown"),this.unbindFrom(this._lastFocused,"keydown")
},_onLastFocusedKeyDown:function(t){t.ctrlKey||t.altKey||t.metaKey||9===t.which&&(t.preventDefault(),this[t.shiftKey?"_lastFocusable":"_firstFocusable"].focus())
},_onFirstFocusableKeyDown:function(t){t.ctrlKey||t.altKey||t.metaKey||t.shiftKey&&9===t.which&&(t.preventDefault(),this._lastFocused.focus())
},_onLastFocusableKeyDown:function(t){t.shiftKey||t.ctrlKey||t.altKey||t.metaKey||9===t.which&&(t.preventDefault(),this._lastFocused.focus())
},_returnFocus:function(){var t=(this._parent||{})._skipReturnFocus||this._skipReturnFocus;t||this._lastFocused.focus()
},_mergeParams:function(t,e,n){var i={};return n||(n={}),t&&"object"==typeof t&&Object.keys(t).forEach(function(e){i[e]=t[e]
}),Object.keys(e).forEach(function(o){var r=s.call(n,o)?n[o].call(this,t[o],e[o]):e[o];i[o]=!r||"object"!=typeof r||Array.isArray(r)?r:t[o]?this._mergeParams(t[o],r,n):r
},this),i},_tailParamsHook:function(t,e){return e.offset||(e.offset=this.params.tail.offset),"number"==typeof e.offset?{offset:{left:e.offset,top:e.offset}}:e
},_generateDirections:function(){if(e)return e;for(var t=[["bottom","top"],["left","right"]],n=[["center","left","right"],["middle","top","bottom"]],i=n,o=t.length,s=[],r=0;o>r;r++)for(var a=t[r],l=a.length,c=0;l>c;c++)for(var u=n[r],h=u.length,d=0;h>d;d++)for(var _=i[r],p=_.length,m=0;p>m;m++)s.push({direction:a[c],axis:u[d],tail:{axis:_[m]}});
return e=s,s},_repackDirParams:function(e){var n={},i=[];return("string"==typeof e||t.isPlainObject(e))&&(e=[e]),i=e.map(function(t){if("string"==typeof t){var e=t.split("-");
t={to:e[0],tail:{}},e[1]&&(t.axis=e[1]),e[2]&&(t.tail.axis=e[2])}var i=t.to;return n[i]||(n[i]=t),t.axis&&(i+="-"+t.axis),t.key=i,n[i]=t,i
},this),{directions:n,keys:i}},setViewport:function(t){return this._viewport=t,this},_pickDirection:function(){var t,e=this._order,n=this.hasMod("adaptive","yes")?e.length:1;
for(this._visibilityFactor=0,t=0;n>t;t++){var i=e[t],o=this._directions[i];this._resetPos(i)._pushPos(i,this._calcPos(o))._pushPos(i,this._calcOffsets(o)),this._hasTail()&&this._resetTailPos(i)._pushTailPos(i,this._calcTailPos(o))._pushTailPos(i,this._calcTailOffset(o))._pushPos(i,this._calcOffsetByTail(o)),this._pushPos(i,this._getParentOffset());
var s=this._calcVisibilityFactor(o);if((s>this._visibilityFactor||!this._direction)&&(this._visibilityFactor=s,this._direction=this._directions[i],this.size=this.getPlacingSize(),100===s))break
}return this._direction},_getParentOffset:function(){var t=this.domElem.offsetParent().offset();return t.left*=-1,t.top*=-1,t
},_calcPos:function(t){this._calcPlacingSize(t);var e=this.getOwnerPos(),n=this.getOwnerSize(),i=this.getPlacingSize(),o=t.axis,r=this.params.position||{},a={};
switch(t.to){case"bottom":a={top:s.call(r,"top")?r.top:e.top+n.height,left:s.call(r,"left")?r.left:this._calcLeft(o)};
break;case"top":a={top:s.call(r,"top")?r.top:e.top-i.height,left:s.call(r,"left")?r.left:this._calcLeft(o)};
break;case"left":a={top:s.call(r,"top")?r.top:this._calcTop(o),left:s.call(r,"left")?r.left:e.left-i.width};
break;case"right":a={top:s.call(r,"top")?r.top:this._calcTop(o),left:s.call(r,"left")?r.left:e.left+n.width}
}return a},_calcTop:function(t){var e=0,n=this.getPlacingSize(),i=this.getOwnerPos(),o=this.getOwnerSize();
return"top"===t?e+=i.top:"middle"===t?e+=i.top+o.height/2-n.height/2:"bottom"===t&&(e+=i.top+o.height-n.height),e
},_calcLeft:function(t){var e=0,n=this.getPlacingSize(),i=this.getOwnerPos(),o=this.getOwnerSize();return"left"===t?e+=i.left:"center"===t?e+=i.left+o.width/2-n.width/2:"right"===t&&(e+=i.left+o.width-n.width),e
},getPlacingSize:function(){return this.getPopupSize()},_calcOffsets:function(t){var e,n=this._cache.offset||(this._cache.offset={}),i=t.key,o=t.offset;
if(n[i])return n[i];if(!o)return!1;if(e={left:0,top:0},"number"==typeof o)switch(i){case"left":e.left+=o;
break;case"right":e.left-=o;break;case"top":e.top+=o;break;case"bottom":e.top-=o}else o.left&&(e.left+=o.left),o.right&&(e.left-=o.right),o.top&&(e.top+=o.top),o.bottom&&(e.top-=o.bottom);
return n[i]=e,e},_hasTail:function(){return 0!==this.elem("tail").length},_moveToContainer:function(t){if(t)this._inContainer=!1;
else{if(this._isShown)return;t=this._parent?this._parent.domElem:this._scope}this.domElem.appendTo(t),this._inContainer=!0
},_resetPos:function(t){return t?this._positions[t]=null:this._positions={},this},_pushPosTo:function(t,e,n){n!==!1&&("string"==typeof e?this._sum(t[e]||(t[e]={}),n):(n=e,Object.keys(t).forEach(function(e){this._sum(t[e],n)
},this)))},_pushPos:function(t,e){return this._pushPosTo(this._positions,t,e),this},_sum:function(t,e){Object.keys(e).forEach(function(n){t[n]=(t[n]||0)+e[n]
})},_getSizeOf:function(t){return{height:t.outerHeight(),width:t.outerWidth()}},getOwnerSize:function(){return this._owner?this._cache.ownerSize||(this._cache.ownerSize=this._getSizeOf(this._owner)):{height:0,width:0}
},getPopupSize:function(){return this._getSizeOf(this.domElem)},_getPosOf:function(t){return t.offset()||{left:0,top:0}
},getOwnerPos:function(){var t;return this._owner&&(t=this._getPosOf(this._owner),"pageYOffset"in window&&(t.top-=window.pageYOffset-(document.documentElement.scrollTop||document.body.scrollTop),t.left-=window.pageXOffset-(document.documentElement.scrollLeft||document.body.scrollLeft))),t||this._userPosition
},_calcVisibilityFactor:function(t){var e,n,i=this._viewport,o=this._getSizeOf(i),s=this.getPopupSize(),r=this._positions[t.key],a=this._parent?this._parent.domElem.offset():{top:0,left:0},l=r.top+(this._isParentFixed?a.top:-i.scrollTop()),c=r.left+(this._isParentFixed?a.left:-i.scrollLeft()),u=c+s.width-o.width,h=l+s.height-o.height,d={height:s.height,width:s.width},_=100;
return h>0&&(d.height-=h),0>l&&(d.height+=l),0>c&&(d.width+=c),u>0&&(d.width-=u),d.height<0||d.width<0?_=0:(n=Math.abs(d.height*d.width),e=s.height*s.width,e!==n&&(_=n/e*100)),_
},_repaintShadow:function(){"undefined"==typeof this._repaintShadowCounter&&(this._repaintShadowCounter=0),this.domElem.css("zoom",1&++this._repaintShadowCounter)
},_findParent:function(t){return this.findBlockOutside(t,"popup")},destruct:function(){var t=arguments;
return this._channel.un("hide"),this._childs.forEach(function(e){e.destruct.apply(e,t)}),this.__base.apply(this,t)
},_resetDefault:function(){},_calcPlacingSize:function(){}},{live:function(){this.liveBindTo("close","leftclick tap",function(){this.hide()
})},_getFocusable:function(e){var n=t.data(e,"popup-getFocusable-id");n||(n=t.identify(),t.data(e,"popup-getFocusable-id",n)),n='*[data-popup-getFocusable-id="'+n+'"]';
var o=i?"":"a[href], link, ";return e.find(o+'*[tabindex], button, input:not([type="hidden"]), textarea, select, menuitem').filter(function(){var e=t(this),i=!0;
return parseInt(e.prop("tabindex"),10)<0||"hidden"===e.css("visibility")?!1:(t(this).parentsUntil(n).each(function(){var e=t(this);
return"none"===e.css("display")?i=!1:void 0}),i)})}})}(jQuery),_borschik("dEaZOFX2GFpzBd8-6mX9Urpt5fc")&&BEM.DOM.decl("popup",{show:function(t){var e;
if(t instanceof BEM)e=t.domElem.eq(0);else if(t instanceof $)e=t;else if(!t)return;if(e){this._owner&&e[0]!==this._owner[0]&&this.delMod("visibility"),this._owner=e;
var n=this.findBlockOutside(e,"popup")||this.findBlockOutside(e,"popup-owner");n&&this.setParent(n)}else this._userPosition=t;
return this.setMod("visibility","outside").repaint()},_calcVisibilityFactor:function(t){var e,n,i=this._viewport,o=this._getSizeOf(i),s=this.getPopupSize(),r=this._positions[t.key],a=this._parent?this._parent.domElem.offset():{top:0,left:0},l=r.top+(this._isParentFixed?a.top:0)-i.scrollTop(),c=r.left+(this._isParentFixed?a.left:0)-i.scrollLeft(),u=c+s.width-o.width,h=l+s.height-o.height,d={height:s.height,width:s.width},_=100;
return h>0&&(d.height-=h),0>l&&(d.height+=l),0>c&&(d.width+=c),u>0&&(d.width-=u),d.height<0||d.width<0?_=0:(n=Math.abs(d.height*d.width),e=s.height*s.width,e!==n&&(_=n/e*100)),_
}}),_borschik("S_eQb0sDJ-CJ0AjBxwwYc9DJNP8")&&BEM.DOM.decl("popup",{onSetMod:{autoclosable:{yes:function(){this._enableAutoclosable()
},"":function(){this._disableAutoclosable()}}},_enableAutoclosable:function(){var t=this._under;this.hasMod(t,"type","paranja")&&(t.is("iframe")&&(t=$([t[0].contentWindow,t[0].contentWindow.document])),this.bindTo(t,"leftclick tap",function(t){t.stopPropagation(),this.hide()
}),this.bindTo(t,"mousedown",function(){this._skipReturnFocus=!0})),this.bindToDoc("leftclick tap",function(t){if(!this._isRelatedNode($(t.target))){var e=$.Event("outside-click");
this.trigger(e,t),e.isDefaultPrevented()||this.hide()}}),this.bindToDoc("mousedown",function(){this._skipReturnFocus=!0
})},_disableAutoclosable:function(){this.hasMod(this._under,"type","paranja")&&this.unbindFrom(this._under,"leftclick tap mousedown"),this.unbindFromDoc("leftclick tap mousedown")
},_isRelatedNode:function(t){var e=this.containsDomElem(t);if(e||(e=Boolean(this._owner)&&this.containsDomElem.call({domElem:this._owner},t)),e)return!0;
var n,i=this._childs.length;for(n=0;i>n;n++)if(this.containsDomElem.call({domElem:this._childs[n].domElem},t))return!0;
return!1}}),_borschik("qV6sVreEJMz90tIvnMyqvRDOXrA")&&BEM.DOM.decl({block:"popup",modName:"autoclosable",modVal:"yes"},{_isRelatedNode:function(){return this.domElem?this.__base.apply(this,arguments):!1
},show:function(){return this.domElem?this.__base.apply(this,arguments):!1},hide:function(){return this.domElem?this.__base.apply(this,arguments):!1
}}),_borschik("dxYpe1RmwnckJspH3jf8OdvGDRA")&&BEM.DOM.decl({block:"popup",modName:"adaptive",modVal:"yes"},{onSetMod:{adaptive:{yes:function(){this._enableAdaptive()
},no:function(){this._disableAdaptive()}},"watch-scroll":{yes:function(){this._watchScroll()},no:function(){this._unwatchScroll()
}}},_enableAdaptive:function(){this.afterCurrentEvent(function(){this.domElem&&this.bindToWin("resize",this.onResize)
}),this._watchScroll()},_disableAdaptive:function(){this.unbindFromWin("resize")._unwatchScroll()},getScrollEvents:function(){return["scroll"]
},_watchScroll:function(){this._owner&&!this.hasMod("watch-scroll","no")&&this.bindTo(this._owner.parents().add(this._viewport),this.getScrollEvents().join(" "),this.onScroll,this)
},_unwatchScroll:function(){this._owner&&this.unbindFromDomElem(this._owner.parents().add(this._viewport),this.getScrollEvents().join(" "))
},onResize:function(){this._cache={},this._isShown&&!this._isHiding&&this.repaint()},onScroll:function(){this._cache={},this._isShown&&!this._isHiding&&this.repaint()
},destruct:function(){this._disableAdaptive(),this.__base.apply(this,arguments)}}),_borschik("VVHPmyb70tHsCgccGMY-04SIDJ4")&&BEM.DOM.decl({block:"popup",modName:"animate",modVal:"yes"},{afterShow:function(){var t=this.getCurrDirection();
if(t){var e=t.to,n=this.getCurrPos(),i={opacity:1,top:n.top,left:n.left},o={opacity:0,top:n.top,left:n.left};
"bottom"===e?o.top+=10:"top"===e?o.top-=10:"left"===e?o.left-=10:"right"===e&&(o.left+=10),this.domElem.stop(!0).css(o).animate(i,this.params.duration)
}},beforeHide:function(t){var e=this.getCurrDirection();if(!e)return t();var n=e.to,i=this.getCurrPos(),o=this.domElem,s={top:i.top,left:i.left,opacity:0};
return"bottom"===n?s.top+=10:"top"===n?s.top-=10:"left"===n?s.left-=10:"right"===n&&(s.left+=10),o.stop(!0,!0).animate(s,this.params.duration,function(){t(),o.css("opacity","")
})}}),_borschik("kQ2fImSjIvuHOU2Fy4twthM9NP4")&&!function(){var t=[];BEM.DOM.decl("popup",{onSetMod:{js:function(){this.__base.call(this);
var t=this.findElem("under").first();this._underClassAttr=t.attr("class"),this.isDivEnough()?this._under=t:(t.remove(),this._under=null),this._underInPool=!1
}},isDivEnough:function(){return!1},_createUnder:function(){return $('<iframe frameBorder="0" tabindex="-1" src="about:blank"/>')
},_getUnder:function(){if(this._under)return this._under;var e=t.pop();return e&&(this._underInPool=!1),this._under=e||this._createUnder()
},_attachUnder:function(){var t=this._under=this._getUnder();t.attr("class",this._underClassAttr),this.hasMod(t,"type","paranja")?t.detach().insertBefore(this.domElem):t.prependTo(this.domElem)
},_detachUnder:function(){var e=this._under;t.push(e.detach()),this._under=null,this._underInPool=!0},destruct:function(){return this._underInPool&&t.pop(),this._under&&this._under.remove(),this.__base.apply(this,arguments)
}})}(),_borschik("8TtU8iZ95_f0ZwI47puJhWXytLU")&&BEM.DOM.decl("popup-owner",{onSetMod:{js:function(){this._childs=[]
}},addChild:function(t){for(var e=this._childs.length,n=0;e>n;n++)if(this._childs[n]._uniqId==t._uniqId)return;
this._childs.push(t),t.on("hide",function(){this.removeChild(t)},this)},repaint:function(){},removeChild:function(t){for(var e=this._childs.length,n=0;e>n;n++)if(this._childs[n]._uniqId==t._uniqId){this._childs.splice(n,1);
break}},hide:function(){this._childs.forEach(function(t){t.hide()})},destruct:function(){var t=arguments;
return this._childs.forEach(function(e){e.destruct.apply(e,t)}),this.__base.apply(this,t)}}),_borschik("DOWYWcmkfvSDldA6vh4IcrJP984")&&BEM.DOM.decl({block:"popup",modName:"type",modVal:"modal"},{getDefaultParams:function(){var t=this.__base();
return t.top="50%",t.left="50%",t},_isPercentVal:function(t){return"string"==typeof t&&t.indexOf("%")>0
},show:function(t){return this._moveToContainer(),this.setMod("visibility","outside").setMod("adaptive","no"),this.repaint(t),this
},repaint:function(t){this._moveToContainer(),t||(t={left:this.params.left,top:this.params.top});var e=this.getPopupSize();
return this._isPercentVal(t.left)&&!t.marginLeft&&(t.marginLeft=e.width/(-100/parseInt(t.left,10))),this._isPercentVal(t.top)&&!t.marginTop&&(t.marginTop=e.height/(-100/parseInt(t.top,10))),this._show(t),this
}}),_borschik("33_-vGXYFH-SjDpffgkCDlqCHyw")&&BEM.DOM.decl("feedback",{externalData:{},onSetMod:{js:function(){this.checkboxes=this.findBlocksInside("checkbox"),this.submit=this.findBlockInside({block:"button",modName:"type",modVal:"submit"}).on("press",this.submitFeedback,this),this.findBlockInside({block:"button",modName:"type",modVal:"close"}).on("press",function(){this.popup.hide()
},this),this.popup=this.findBlockInside("popup").on("show",this.onShowPopup,this).on("hide",this.onHidePopup,this),this.setCheckboxEvent(),this._ajax=BEM.create("i-request_type_ajax",{url:this.params.abuseLink,cache:!1,dataType:"script",type:"POST"}),this.channel("feedback").on("show",this.showFeedback,this)
}},showFeedback:function(t,e){this.externalData=e,this.resetPopup(),this.popup.toggle()},resetPopup:function(){this.checkboxes.forEach(function(t){t.delMod("checked")
}),this.popup.findBlockInside("radiobox").val("no"),this.popup.findElem("result").hide(),this.popup.findElem("complaint").show()
},setCheckboxEvent:function(){var t=this.findBlocksInside("checkbox"),e=this;t&&t.map(function(t){t.on("change",e.checkboxChanged,e)
})},checkboxChanged:function(){this.submit.setMod("disabled",this.hasCheckedItems()?"no":"yes")},hasCheckedItems:function(){return this.checkboxes.filter(function(t){return t.isChecked()
}).length>0},submitFeedback:function(){var t=this;this._ajax.get(t.getLogParams(),this.onSuccess),setTimeout(function(){t.popup.findElem("result").show(),t.popup.findElem("complaint").hide()
},200)},defaultParams:function(){var t=this.popup.findBlocksInside("checkbox").filter(function(t){return t.isChecked()
}).map(function(t){return t.val()}).toString(),e=this.popup.findBlockInside("radiobox").val(),n=this.params&&this.params.request,i={"complaint-query":e,"reason-complaint":t};
return n&&$.extend(i,n),i},getLogParams:function(){return this.defaultParams()},onShowPopup:function(){},onHidePopup:function(){},onSuccess:function(){}}),_borschik("PKk5lMR_QMpDKDIdtiGKqttZW8Q")&&BEM.DOM.decl("feedback",{onSetMod:{js:function(){this.__base(),this.popup.findBlockInside("radiobox").on("change",this.radioboxChanged,this)
}},radioboxChanged:function(){"yes"===this.popup.findBlockInside("radiobox").val()?this.removeSerpItemBorder():this.setSerpItemBorder()
},onShowPopup:function(){this.setSerpItemBorder()},onHidePopup:function(){this.removeSerpItemBorder()
},setSerpItemBorder:function(){this.externalData.serpItem&&this.externalData.serpItem.setMod("feedback","yes")
},removeSerpItemBorder:function(){this.externalData.serpItem&&this.externalData.serpItem.delMod("feedback")
},getLogParams:function(){var t=BEM.blocks["i-global"],e={query:t.param("query"),service:"yandex."+t.param("tld")},n=this.externalData.serpItem,i=$(".serp-item__title a").map(function(t,e){return $(e).attr("href")
});return e["shows-urls"]=i.toArray().join(";"),n&&(e["url-complaint"]=n.findElem("title-link").attr("href")),$.extend(e,this.defaultParams()),e
}}),_borschik("f6eKZk0PhCBFVSlgNXHL-Z0dr2Y")&&BEM.DOM.decl("paranja",{onSetMod:{js:function(){var t=this;
$(t.params.rel).each(function(){$(this.elem||t.domElem).on(this.event,t[this.method].bind(t))}),this.bindTo("leftclick tap",function(){this.trigger("click")
})},state:{open:function(){this.trigger("open")},close:function(){this.trigger("close")}}},open:function(){this.setMod("state","open")
},close:function(){this.setMod("state","close")}},{live:!1}),_borschik("Md2Bf2v8wRpAvlQa5xotw-K_rLQ")&&BEM.DOM.decl("show-feedback",{onSetMod:{js:function(){var t=this.findBlockOutside("popup");
this.paranja=this.findBlockOutside("b-page").findBlockInside("paranja"),this.feedbackContainer=this.findBlockOutside("main"),this.serpItem=this.findBlockOutside("serp-item"),this.bindTo(this.domElem,"click",function(){t&&t.hide(),this.feedbackContainer.findBlockInside("feedback")?this.callFeedback(this):(this.showParanja(),this.channel("serp-request").trigger("request",{key:"feedback",success:this.loadFeedback.bind(this),error:this.hideParanja.bind(this)}))
})}},loadFeedback:function(t){BEM.DOM.init($(t.html).appendTo(this.feedbackContainer.domElem)).bem("feedback"),this.callFeedback(this)
},callFeedback:function(){this.hideParanja(),this.channel("feedback").trigger("show",{serpItem:this.serpItem})
},showParanja:function(){this.paranja.open(),this.paranja.setMod("full","yes")},hideParanja:function(){this.paranja.close(),this.paranja.delMod("full")
}}),_borschik("WKi0vNJOPY-lmCvZ4LIV2Qq1cxg")&&BEM.DOM.decl("timing",{onSetMod:{js:function(){this.data={},this.send()
}},send:function(){this.getData().then(this.changeThis(function(t){this._send(this.buildCounterParams(this.normalizeMetrics(this.buildMetrics(t))))
}))},_send:function(t){t&&(document.createElement("IMG").src=[this.getClickUrl(),this._serializeParams(t),"*"].join("/"))
},getData:function(){var t=this._timing=(window.performance||{}).timing;if(!t||!t.navigationStart)return $.Deferred().reject().promise();
var e=this.data;return $.when.apply($,this.getDataList()).pipe(function(){return e})},buildMetrics:function(){var t=this._timing,e={1036:[t.domainLookupStart,t.navigationStart],1037:[t.domainLookupEnd,t.domainLookupStart],1038:[t.connectEnd,t.connectStart],1039:[t.responseStart,t.connectEnd],1040:[t.responseEnd,t.responseStart],1040.906:[t.responseEnd,t.domainLookupStart],1310.1309:[t.domContentLoadedEventEnd,t.domContentLoadedEventStart],1310.1007:[t.domContentLoadedEventStart,t.responseStart]},n=this.data.firstPaintTime;
n&&n>0&&(e["1041"]=[n,t.responseStart],e["1041.906"]=[n,t.domainLookupStart]);var i=t.secureConnectionStart;
i&&i>0&&(e["1383"]=[t.requestStart,i]);var o=window.performance.navigation;return o&&(o.redirectCount&&(e["1384.1385"]=o.redirectCount),(1==o.type||2==o.type)&&(e["770.76"]=o.type)),e
},normalizeMetrics:function(t){return $.each(t,function(e,n){if($.isArray(n)){if(n[0]<=0||n[1]<=0||n[0]<n[1])return t=!1;
t[e]=n=n[0]-n[1]}return 0>n?t=!1:void 0}),t},buildCounterParams:function(t){if(t){var e=this.getCounterParams();
return e.vars=$.extend(t,this.params.vars),e.vars["1042"]=encodeURIComponent(navigator.userAgent),e}},getDataList:function(){if(this.isPrerender())return[];
var t,e;this._timing.msFirstPaint&&(t=this._timing,e="msFirstPaint"),this.withLoadTimes(function(n){t=n,e="firstPaintTime"
});var n=this,i=[];return t&&i.push(this.promiseProperty(t,e).then(function(t){"firstPaintTime"===e&&(t*=1e3),n.data.firstPaintTime=Math.floor(t)
})),i},promiseProperty:function(t,e,n){var i=this.channel("sys"),o=$.Deferred(),s=function(){var i=$.isFunction(t)?t():t;
return i&&i[e]?((n?n(i[e]):i[e]>0)&&o.resolve(i[e],i),void 0):o.reject("Property does not exist")};return i.on("tick",s),o.always(function(){i.un("tick",s)
}),o.promise()},withLoadTimes:function(t){var e=(window.chrome||{}).loadTimes;return $.isFunction(e)&&t&&t.call(this,e),this
},getCounterParams:function(){return{dtype:"stred",pid:1,cid:72202,path:"690.1033"}},isPrerender:function(){return"prerender"===(document.visibilityState||document.webkitVisibilityState||document.msVisibilityState)
},getClickUrl:function(){var t=this.params.clckHost;if(!t){var e=location.hostname.match(/^(?:[-\w]+\.)*(yandex(?:.[a-z]+)+)$/i);
t=(e?e[1]:"yandex.ru")+"/clck"}return"//"+t+"/click"},_flatten:function(t,e){var n=[];return e=e||"=",$.each(t,function(t,i){n.push(t+e+i)
}),n},_serializeParams:function(t){var e=this;return $.each(t,function(n,i){$.isPlainObject(i)&&(t[n]=e._flatten(i).join(","))
}),this._flatten(t).join("/")}}),_borschik("N2zmuIYLhfClKKgfzkgobQgNVf0")&&BEM.DOM.decl("timing",{getCounterParams:function(){var t=this.__base.apply(this,arguments);
return this.params.reqid&&(t.reqid=encodeURIComponent(this.params.reqid)),t}}),_borschik("jPQE72c7fhedaxpkW6TbFakeQSo")&&BEM.DOM.decl("ajax-perf",{errors:{UNKNOWN_ERROR:-1,SERVER_TIMEOUT:1,CLIENT_TIMEOUT:2,ABORT:3,PARSE_ERROR:4,JS_ERROR:5,HTTP_ERROR:6,HANDLED_ERROR:7},onSetMod:{js:function(){this._requests={},this._stateChange=0,this._bindEvents()
}},_bindEvents:function(){var t=this;BEM.blocks.history.getInstance().on("statechange",function(){t._stateChange=+new Date
}),this.bindToDoc({ajaxSend:this._onSend,ajaxError:this._onError,ajaxSuccess:this._onSuccess,ajaxComplete:this._onComplete})
},_getRequestData:function(t){return this._requests[$.identify(t)]},_onSend:function(t,e,n){this.filterRequest(n)&&(this._requests[$.identify(e)]={ajaxSend:+new Date,stateChange:this._stateChange})
},_onSuccess:function(t,e,n,i){if(i&&i.error){var o=this._getRequestData(e);o&&(o.ajaxError=+new Date,o.ajaxErrorType=this.errors.HANDLED_ERROR)
}},_onError:function(t,e,n,i){var o=this._getRequestData(e);o&&(o.ajaxError=+new Date,o.ajaxErrorType=this._getErrorType(e,i))
},_onComplete:function(t,e,n){var i=this._getRequestData(e);if(i){i.ajaxComplete=+new Date;var o=this._buildMetrics(i),s=n.url;
this._hasResourceTiming()&&!i.ajaxError?this.afterCurrentEvent(function(){o=$.extend(o,this._buildMetricsForUrl(s)),this._send(o,s)
}):this._send(o,s),delete this._requests[$.identify(e)]}},_getErrorType:function(t,e){var n=this.errors;
if(0===t.status&&"timeout"===t.statusText)return n.SERVER_TIMEOUT;switch(e){case"timeout":return n.CLIENT_TIMEOUT;
case"canceled":case"abort":return n.ABORT;case"parsererror":return n.PARSE_ERROR;default:if(e instanceof Error)return n.JS_ERROR
}return 200!==t.status&&304!==t.status?n.HTTP_ERROR:n.UNKNOWN_ERROR},filterRequest:function(t){var e=BEM.blocks.uri.parse(t.url),n=e.queryParams;
return 0===e.path().indexOf("/yandsearch")&&n.callback&&!(n.rpt||n.filter)},_hasResourceTiming:function(){return!window.externalHost&&window.performance&&$.isFunction(window.performance.getEntriesByName)
},_buildMetrics:function(t){var e={1201.906:(t.ajaxError||t.ajaxComplete)-t.ajaxSend};return t.ajaxError&&(e["1201.1030"]=t.ajaxErrorType),t.stateChange&&(e["1201.789"]=t.ajaxSend-t.stateChange),e
},_buildMetricsForUrl:function(t){t=this._getFullUrl(t);var e,n={},i=performance.getEntriesByName(t);
return i.length&&(i=i[0],e=i.domainLookupStart-i.fetchStart,i.connectEnd===i.fetchStart&&(e=i.requestStart-i.connectEnd),n={1036:e,1037:i.domainLookupEnd-i.domainLookupStart,1038:i.connectEnd-i.connectStart,1039:i.responseStart-i.connectEnd,1040:i.responseEnd-i.responseStart,1040.906:i.responseEnd-i.domainLookupStart}),n
},_getFullUrl:function(t){return t.indexOf("//")<0&&(t=location.protocol+"//"+location.host+location.pathname+t),t
},getClickUrl:function(){var t=this.params.clckHost;if(!t){var e=location.hostname.match(/^(?:[-\w]+\.)*(yandex(?:.[a-z]+)+)$/i);
t=(e?e[1]:"yandex.ru")+"/clck"}return"//"+t+"/click"},getCounterParams:function(){return{reqid:encodeURIComponent(BEM.blocks["i-global"].param("reqid")),dtype:"stred",pid:1,cid:72202,path:"690.1201"}
},buildCounterParams:function(t){var e=this.getCounterParams();return e.vars=$.extend(t,this.params.vars),e.vars["1042"]=encodeURIComponent(navigator.userAgent),e
},_send:function(t,e){t=this._normalizeMetrics(t),t&&(t=this.buildCounterParams(t),t.vars["1201.1030"]&&(t.vars["13"]=encodeURIComponent(e)),document.createElement("IMG").src=[this.getClickUrl(),this._serializeParams(t),"*"].join("/"))
},_normalizeMetrics:function(t){return $.each(t,function(e,n){return isNaN(n)||0>n?t=!1:(t&&(t[e]=parseInt(n,10)),void 0)
}),t},_flatten:function(t,e,n){return e=e||"=",$.map(t,function(t,n){return n+e+t}).join(n||",")},_serializeParams:function(t){var e=this;
return $.each(t,function(n,i){$.isPlainObject(i)&&(t[n]=e._flatten(i))}),this._flatten(t,"=","/")}}),_borschik("MOZRWJEgqXuaRbhVMqQYSETDm1s")&&BEM.DOM.decl("main",{onAjaxSuccess:function(t){this.closePanel(!0),this.update(t,!0),this.afterCurrentEvent(function(){BEM.DOM.win.scrollTop(0)
})},update:function(t,e){this.appendScripts(t),(t||{}).html?BEM.DOM[e?"update":"append"](this.elem("content"),t.html):this.showNoConnectionError()
},appendScripts:function(t){(t&&t.scripts||[]).forEach(function(t){if(t){var e=document.createElement("script");
t.content&&(e.text=t.content),t.url&&(e.src=t.url),document.body.appendChild(e)}})},showNoConnectionError:function(){this._serp||(this._serp=this.findBlockOn("serp")),this._serp.showServerError()
}}),_borschik("jFY785Rl03y8bp4B2EsdJGdRWwg")&&BEM.DOM.decl("no-connection",{_onButtonClick:function(){var t=BEM.blocks.location.getInstance();
t.trigger("change",t.getState())}},{live:function(){this.liveBindTo("reload","click",function(){this._onButtonClick()
})}}),_borschik("4PuAiMsP_43jdLhlRp1hbQdNgUE")&&!function(t){t.fn.extend({isMedia:function(t){if(!this.css)return!1;
var e=this.css("counter-reset");return e=e&&e.split(" ")||"",e[1===e.length?0:e.length-2]===t}})}(jQuery),_borschik("B3PclJ41WMhCgFZwRe5Xs8NtPMk")&&BEM.DOM.decl("z-entity-card",{onSetMod:{js:function(){this.hasMod("empty","yes")||this._addCounters()
}},_addCounters:function(){var t=this.params.counters;t["hover-in"]&&t["hover-out"]&&(this.bindTo("mouseenter",function(){w(null,t["hover-in"][0],t["hover-in"][1])
}),this.bindTo("mouseleave",function(){w(null,t["hover-out"][0],t["hover-out"][1])}))}}),_borschik("b6XF7GTwaRZURRslS6NG7lfuN8Q")&&BEM.DOM.decl("z-entity-cut",{},{live:function(){this.liveBindTo("leftclick tap",function(){this.setMod("state","open")
})}}),_borschik("xf64KSUie5hFgJy501I9osSHwlI")&&BEM.decl("i-statface",{onSetMod:{js:function(){this._data={},this._needSend=!1,this.hasMod("send","manual")||$(window).unload(this.changeThis(this.send))
}},set:function(t,e){this._needSend=!0;var n=this._data;return"object"==typeof t?$.each(t,function(t,e){n[t]=e
}):n[t]=e,this},reset:function(){var t=this;return arguments[0]?$.each(arguments,function(e,n){delete t._data[n]
}):this._data={},$.isEmptyObject(this._data)&&(this._needSend=!1),this},serialize:function(){var t=this;
return $.map(t.params.keys,function(e){return t._data[e]}).join(".")+(t.params.customKeys?$.map(t.params.customKeys,function(e){var n=t._data[e];
return"/"+e+"="+(void 0==n?"":n)}).join(""):"")},send:function(t){if(this._needSend){var e=this.params,n=["//",e.host,"/",e.path,"/dtype=stred","/pid=",e.pid,"/cid=",e.cid,"/cts=",(new Date).getTime(),"/path=",this.serialize(),"/*data=",encodeURIComponent("url="+encodeURIComponent(e.url))].join("");
"click"==e.path?document.createElement("IMG").src=n:$.ajax({type:"GET",url:n,data:null,complete:t||$.noop,dataType:"script",timeout:500}),this._needSend=!1
}return this},getDefaultParams:function(){return{host:"clck.yandex.ru",path:"jclck",url:location.href}
}}),_borschik("xyHy8YRnSDDWvd_v0zFquDw81ms")&&BEM.decl("i-statface",{onSetMod:{js:function(){this.__base.apply(this,arguments),this.params.customKeys.push("u","reqid")
}},sendCounter:function(t){this.set({u:(new Date).getTime(),reqid:BEM.blocks["i-global"].param("reqid")}).send(t).reset()
},getDefaultParams:function(){return $.extend(this.__base(),{pid:1,host:BEM.blocks["i-global"].param("click-host").replace(/(.*)\/\//,""),customKeys:[]})
}}),_borschik("CQrMnde1bgDy3PACRTPEqL0OhEE")&&(BEM.decl("z-entity-image-counter",{},{start:function(){this._initCounter(),this.channel("serp-request").on("request",this._perRequest,this)
},_initCounter:function(){this._total=$(".z-entity-image__image").length,this._total>0&&(this._timer=setTimeout(this._sendCounter.bind(this),1e3))
},_createCounter:function(){var t={cid:"72639",keys:["path"],customKeys:["906","1030"]};this.imageCounter=BEM.create("i-statface",t)
},_perRequest:function(){window["z-entity-image__failed"]=0,this._initCounter()},_sendCounter:function(){clearTimeout(this._timer),this._timer=null;
var t=window["z-entity-image__failed"];t&&this.sendData(this._total,t)},sendData:function(t,e){this.imageCounter||this._createCounter();
var n={path:"690.277.1030",906:t,1030:e};this.imageCounter.set(n).sendCounter()}}),BEM.blocks["z-entity-image-counter"].start()),_borschik("C8Jcuk3sggWl-uiu7-1V6KQ83tA")&&BEM.DOM.decl("z-related-list",{onSetMod:{js:function(){var t=this.params.counters;
t["hover-in"]&&t["hover-out"]&&(this.bindTo("mouseenter",function(){w(null,t["hover-in"][0],t["hover-in"][1])
}),this.bindTo("mouseleave",function(){w(null,t["hover-out"][0],t["hover-out"][1])}))}}}),_borschik("QZaqarvgKRwbmhibHagc8g_Udmg")&&BEM.DOM.decl({name:"z-entity-navigator",modName:"type",modVal:"seasons"},{_updateList:function(t){var e=t.target.val();
this.elem("content-wrapper").html(BEMHTML.apply(this.params.itemList[e]))}},{live:function(){this.liveInitOnBlockInsideEvent("change","select",function(){this.findBlockInside("select").on("change",this._updateList,this)
})}}),_borschik("3x4k4Rr5nSOd56ZoT7N87hi-i8M")&&BEM.DOM.decl("button",{onSetMod:{js:function(){var t=this.isDisabled(),e=this.domElem;
(this._href=e.attr("href"))&&t&&e.removeAttr("href")},disabled:function(t,e){var n="yes"===e,i=this.domElem;
this._href&&(n?i.removeAttr("href"):i.attr("href",this._href)),this.afterCurrentEvent(function(){i.attr("disabled",n)
})},pressed:function(t,e){return this.isDisabled()?!1:(this.trigger("yes"===e?"press":"release"),void 0)
}},isDisabled:function(){return this.hasMod("disabled","yes")},url:function(t){return"undefined"==typeof t?this._href:(this._href=t,this.isDisabled()||this.domElem.attr("href",t),this)
},_onClick:function(t){this.isDisabled()?t.preventDefault():this.afterCurrentEvent(function(){this.trigger("click")
})}},{live:function(){this.liveBindTo("leftclick tap",function(t){this._onClick(t)})}}),_borschik("tMLceeeX6Y0LqDfLDcqd2OiLJik")&&BEM.DOM.decl("button",{onSetMod:{js:function(){this.__base.apply(this,arguments)
},focused:{yes:function(){return this.isDisabled()?!1:(this.bindToWin("unload",function(){this.delMod("focused")
}).bindTo("keydown",this._onKeyDown),this._isControlFocused()||this._getControl().focus(),this.afterCurrentEvent(function(){this.trigger("focus")
}),void 0)},"":function(){this.unbindFromWin("unload").unbindFrom("keydown"),this._isControlFocused()&&this._getControl().blur(),this.afterCurrentEvent(function(){this.trigger("blur")
})}},disabled:function(t,e){this.__base.apply(this,arguments),"yes"===e&&this.domElem.keyup()},hovered:function(t,e){return this.isDisabled()?!1:(""===e&&this.delMod("pressed"),void 0)
},pressed:function(){return this.isDisabled()||this.setMod("focused","yes"),this.__base.apply(this,arguments)
}},_getControl:function(){return this.elem("control").length&&this.elem("control")||this.domElem},_isControlFocused:function(){try{return this.containsDomElem($(this.__self.doc[0].activeElement))
}catch(t){return!1}},_onKeyDown:function(t){var e=t.keyCode;13!==e&&32!==e||this._keyDowned||(this._keyDowned=!0,this.setMod("pressed","yes").bindTo("keyup",function(){this.delMod("pressed").unbindFrom("keyup"),delete this._keyDowned,32===e&&this.domElem.attr("href")&&(document.location=this.domElem.attr("href"))
}))},destruct:function(){this.delMod("focused"),this.__base.apply(this,arguments)}},{live:function(){this.__base.apply(this,arguments);
var t={mouseover:{name:"hovered",val:"yes"},mouseout:{name:"hovered"},mousedown:{name:"pressed",val:"yes"},mouseup:{name:"pressed"},focusin:{name:"focused",val:"yes"},focusout:{name:"focused"}},e=$.browser.msie&&"8.0"===$.browser.version;
this.liveBindTo("mouseover mouseout mouseup focusin focusout",function(n){var i=t[n.type];this.setMod(i.name,i.val||""),!e||this._href||"mouseup"!==n.type&&"mouseout"!==n.type||this.domElem.height()
}).liveBindTo("mousedown",function(e){var n=t[e.type];1===e.which&&this.setMod(n.name,n.val||"")})}}),_borschik("2jmj7l5rSw0yVb_vlWAYkK_YBwk"),_borschik("2PKfP_y9qA7GMX4QTWbfZEG4Fi4")&&!function(){function t(){o=!0,setTimeout(e)
}function e(){o=!1}function n(){i.toggleClass("pointerfocus",o)}var i=$(document.documentElement),o=!1;
window.addEventListener&&(addEventListener("mousedown",t,!0),addEventListener("mouseup",t,!0),addEventListener("click",t,!0),addEventListener("focus",n,!0))
}(),_borschik("xuTos_jMiGTi7Kh3BbPnYgYzrlI")&&BEM.DOM.decl({block:"popup",modName:"autosize",modVal:"yes"},{getDefaultParams:function(){var t=this.__base();
return t.offsetWithoutTail=5,t},repaint:function(){return this._saveDefault(),this.__base(),this.domElem.css({maxWidth:this.size.width,height:this.size.height}),this
},_saveDefault:function(){this._defSize||(this._defSize=this.getPopupSize())},_resetDefault:function(){return this._defSize=null,this.domElem.css({maxWidth:"",height:""}),this
},_getAvailableSpace:function(t){return this._owner?{width:this._getAvailableWidth(t),height:this._getAvailableHeight(t)}:$.extend({},this._defSize)
},_getAvailableWidth:function(t){var e=BEM.DOM.getWindowSize(),n=e.width,i=t.offset,o=this._owner[0].getBoundingClientRect(),s=$.extend({},this._defSize);
switch(t.to){case"left":n=o.left,"number"==typeof i&&(n-=i),"object"==typeof i&&(i.left&&(n+=i.left),i.right&&(n-=i.right));
break;case"right":n=e.width-o.right,"number"==typeof i&&(n-=i),"object"==typeof i&&(i.left&&(n-=i.left),i.right&&(n+=i.right))
}return("left"===t.to||"right"===t.to)&&(n-=this._tailPos?2*this.params.tail.width:this.params.offsetWithoutTail),Math.min(s.width,n)
},_getAvailableHeight:function(t){var e=BEM.DOM.getWindowSize(),n=e.height,i=t.offset,o=this._owner[0].getBoundingClientRect(),s=$.extend({},this._defSize);
switch(t.to){case"bottom":n=e.height-o.bottom,"number"==typeof i&&(n-=i),"object"==typeof i&&(i.bottom&&(n+=i.bottom),i.top&&(n-=i.top));
break;case"top":n=o.top,"number"==typeof i&&(n-=i),"object"==typeof i&&(i.bottom&&(n-=i.bottom),i.top&&(n+=i.top))
}return("bottom"===t.to||"top"===t.to)&&(n-=this._tailPos?2*this.params.tail.height:this.params.offsetWithoutTail),Math.min(s.height,n)
},_calcTop:function(t){var e,n=this.__base(t),i=$(window).scrollTop(),o=BEM.DOM.getWindowSize(),s=this.getPlacingSize(),r=this.getOwnerPos(),a=this.getOwnerSize();
return 0>n&&(n=0),e=Math.max(o.height+i,r.top+a.height),n+s.height>e&&(n=e-s.height),n},_calcLeft:function(t){var e,n=this.__base(t),i=$(window).scrollLeft(),o=BEM.DOM.getWindowSize(),s=this.getPlacingSize(),r=this.getOwnerPos(),a=this.getOwnerSize();
return 0>n&&(n=0),e=Math.max(o.width+i,r.left+a.width),n+s.width>e&&(n=e-s.width),n},getPlacingSize:function(){return this._availSizes
},_calcPlacingSize:function(t){return this._availSizes=this._getAvailableSpace(t),this._availSizes},_calcVisibilityFactor:function(){var t=this._defSize,e=this.getPlacingSize(),n=e.height*e.width,i=t.height*t.width;
return n/i*100}}),_borschik("paUhhigaizGhyRenf1aX1Uyv1YU")&&!function(t,e){function n(t){var e={};return"option"===t.item?(e={block:l,elem:"option",tag:"option",attrs:{value:t.value},content:t.content},t.disabled&&(e.attrs.disabled="disabled"),t.selected&&(e.attrs.selected="selected")):"optgroup"===t.item&&(e={elem:"option-group",tag:"optgroup",attrs:{label:t.label}},t.disabled&&(e.attrs.disabled="disabled"),e.content=Array.isArray(t.content)?t.content.map(function(t,e){return n(t,e)
}):t.content),e.block=l,e}var i=t.browser.opera&&t.browser.version<12.1?"keypress":"keydown",o=t.browser,s=o.msie&&parseInt(o.version,10)<=10,r=o.msie&&8===parseInt(o.version,10),a=null,l="select";
e.DOM.decl("select",{onSetMod:{js:function(){this._items=[],this._curItemIndex=-1,this._scrollableElemOutsidePopup=null,this._rowHeight=22,this.on("change",this._redrawParentPopup),this._getSelectedText()!==this._buttonText()&&this.elem("control").trigger("change")
},disabled:function(t,e){var n="yes"===e;this.elem("control").attr("disabled",n),this._getButton().setMod(t,e),n&&this.delMod("opened").delMod("focused")
},focused:{yes:function(){return this.hasMod("disabled","yes")?!1:(this._useNativeControl()||this.bindTo(i,this._onKeyDown),this.afterCurrentEvent(function(){this.trigger("focus")
}),void 0)},"":function(){this._useNativeControl()||this.delMod("opened").unbindFrom(i),this.afterCurrentEvent(function(){this.trigger("blur")
})}}},isDisabled:function(){return this.hasMod("disabled","yes")},isOpened:function(){return this.hasMod("opened","yes")
},open:function(){return this.setMod("opened","yes")},close:function(){return this.delMod("opened")},val:function(e,n){if("undefined"==typeof e)return this.elem("control").val();
var i,o=-1;return this.findElem("option").each(function(n){this.value===e&&!this.disabled&&(i=t(this).parent("optgroup")[0],!(i&&i.disabled))&&(o=n)
}),o>-1&&this._selectedIndex(o,n),this},name:function(t){var e=this.elem("control");return arguments.length?(e.attr("name",t),this):e.attr("name")
},_selectedIndex:function(e,n){var i=this._getSelectedIndex();return"undefined"==typeof e||e===i?i:(this.elem("control").prop("selectedIndex",e),this._useNativeControl()||(this._buttonText(this._getSelectedText()),this._items[0]&&this.delMod(this._items,"selected").setMod(this._items.eq(e),"selected","yes")),this.trigger("change",t.extend({index:e,prev:i},n)),e)
},setOptions:function(i){return i?(e.DOM.update(this.elem("control"),BEMHTML.apply(t.map(i,n))),this.redraw()):this
},redraw:function(){return this._popup&&this._redrawList(),this.elem("control").trigger("change"),this
},_useNativeControl:function(){return null!==a?a:a="none"!==this.elem("control").css("display")},_redrawParentPopup:function(){return this._isParentPopup()&&this._popup._parent.repaint(),this
},_isParentPopup:function(){return this._popup&&this._popup._parent&&!this.hasMod("layout","fixed")},_onSelectChange:function(){var t=this;
t._buttonText(t._getSelectedText()),this.trigger("change",{index:t._getSelectedIndex(),prev:-1})},_onControlFocusInOut:function(t){this._useNativeControl()&&this.toggleMod("focused","yes","","focusin"===t.type)
},_onMouseDown:function(t){this._isControlFocused()&&t.preventDefault()},_onKeyDown:function(t){var e=38===t.keyCode,n=40===t.keyCode,i=13===t.keyCode,o=32===t.keyCode;
if(e||n){if(t.preventDefault(),!this.isOpened())return this.open();var s=this._items.length,r=this._curItemIndex;
if(e&&0===r||n&&r>s-2)return;if(s){var a=n?1:-1,l=0;for(l=r;l>=0&&s>=l;)if(l+=a,this._isSelectableItem(this._items.eq(l))){r=l;
break}this._onEnterItem(this._items.eq(r),!0)}}(i||o)&&this._onEnterItem(this._items.eq(this._curItemIndex),!0,!0)
},_onEnterItem:function(t,e,n){this.elem("button").attr("aria-activedescendant",t.attr("id"));var i=this._curItemIndex,o=this._getItemIndex(t),s=this._items;
i>-1&&this.delMod(s.eq(i),"hovered"),o>-1&&(this._curItemIndex=o,this.setMod(s.eq(o),"hovered","yes")),n&&this._selectedIndex(this._curItemIndex),e&&this._scrollToCurrent()
},_onLeaveItem:function(t){var e=this._curItemIndex;e>-1&&e===this._getItemIndex(t)&&(this.delMod(this._items.eq(e),"hovered")._curItemIndex=-1)
},_onSelectItem:function(t){return this._isSelectableItem(t)&&this._selectedIndex(this._curItemIndex),this.close()
},_onButtonFocus:function(){this.setMod("focused","yes")},_findScrollableElemOutsidePopup:function(){if(null===this._scrollableElemOutsidePopup){var t,e=this._getPopup().domElem;
do e=e.parent(),t=e.css("overflow-y");while("scroll"!==t&&"auto"!==t&&"HTML"!==e.prop("tagName"));this._scrollableElemOutsidePopup=e
}return this._scrollableElemOutsidePopup},_onButtonBlur:function(){if(this.isOpened()&&this._isPopupFocused())if(r){var t=this._findScrollableElemOutsidePopup(),e=t.scrollTop();
this._focusButton(),t.scrollTop(e)}else this._focusButton();else this.delMod("focused")},_onButtonPress:function(){this.toggleMod("opened","yes","")
},_focusButton:function(){return this._getButton().setMod("focused","yes"),this},_blurButton:function(){return this._getButton().delMod("focused"),this
},_isPopupFocused:function(){try{return this._getPopup().containsDomElem(t(document.activeElement))}catch(e){return!1
}},_buttonText:function(t){return"undefined"==typeof t?this._getButton().elem("text").text():(this._getButton().elem("text").html(t||" &nbsp; "),s&&this.domElem.parent().css("outline",""),void 0)
},_isOutsideClicked:function(e,n){return this.containsDomElem(t(n.target))},_getItemIndex:function(e){return t.inArray(e.get(0),this._items)
},_getSelectedText:function(){return this.elem("control").find(":selected").text()},_getSelectedIndex:function(){return this.elem("control").prop("selectedIndex")
},_isSelectableItem:function(t){var e;return e=this.hasMod(t,"disabled","yes")||this.hasMod(t,"label","yes")?!1:!0
},_getButton:function(){return this._button||(this._button=this.findBlockOn("button","button"))},_getRowHeight:function(){return this.findElem(this._getPopup().domElem,"item").outerHeight()
},_isControlFocused:function(){try{return this.containsDomElem(t(this.__self.doc[0].activeElement))}catch(e){return!1
}},destruct:function(){this._outPopup&&this._outPopup.un("outside-click"),this.delMod("opened");var t=this._popup;
t&&t.domElem&&t.destruct(),this.__base.apply(this,arguments)},getDefaultParams:function(){return{rows:15,popupMods:{direction:"down"}}
}},{live:function(){return this.liveBindTo("control","change",function(){this._onSelectChange()}),this.liveBindTo("control","focusin focusout",function(t){this._onControlFocusInOut(t)
}),this.liveBindTo("mousedown",function(t){this._onMouseDown(t)}),!1}})}(jQuery,BEM),_borschik("K1E8nXnim3Sheu_8rkXQxT3_QP0")&&!function(t,e){var n=t.browser.opera&&t.browser.version<15;
e.DOM.decl("select",{onElemSetMod:{item:{hovered:function(){n&&this._popup.domElem.css("display","inline").css("display","")
}}}})}(jQuery,BEM),_borschik("6zMBK-28tGknPGEZxiK-D4s67O0")&&!function(t){function e(t,e,n){var i={block:"select",elem:"item",content:{elem:"text",tag:"span",content:e||" &nbsp; "},elemMods:{}};
return n&&(i.elemMods=n),i}function n(t){function n(t,i){var l=t.length;if(l){var c=0;do{var u=$(t[c]),h=u.attr("disabled")&&{disabled:"yes"};
if(u.is("optgroup")){a=!0,!u.prev().is("optgroup")&&c>0&&s.push(o),r.push(s),s=[],s.push(e(u,u.attr("label"),$.extend({label:"yes"},h,i))),n(u.children(),$.extend({inner:"yes"},h,i));
var d=s;s=r.pop(),s.push({block:"select",elem:"group",content:d})}else s.push(e(u,u.text(),$.extend(h,u.is(":selected")&&{selected:"yes"},i)))
}while(++c<l||(a=!1))}}var i="select",o={block:i,elem:"separator",tag:"i"},s=[],r=[],a=!1;return n(t),BEMHTML.apply(s)
}t.DOM.decl("select",{onSetMod:{js:function(){this.__base.apply(this,arguments),this._initButton()}},_initButton:function(){this._getButton().on("focus",this._onButtonFocus,this).on("blur",this._onButtonBlur,this).on("press",this._onButtonPress,this)
},_redrawList:function(){var e,i=this,o=this._getPopup().domElem;return t.DOM.update(this.findElem(o,"list"),n(this.elem("control").children())),e=this.findElem(o,"item"),this._curItemIndex=-1,this._items=e.filter(function(){return!i.hasMod($(this),"label","yes")
}),this}})}(BEM),_borschik("AlvFf0ZmeOjMXrxeeDmVFScrWtQ")&&BEM.DOM.decl("select",{_redrawList:function(){this.__base();
var t=this;this.bindTo(t._items,{mouseup:function(e){1===e.which&&(e.preventDefault(),t._onSelectItem(e.data.domElem))
},mouseover:function(e){t._onEnterItem(e.data.domElem)},mouseout:function(e){t._onLeaveItem(e.data.domElem)
}})}}),_borschik("b6pKZyTrItPV6DdvXXeXamzZtSA")&&BEM.DOM.decl("select",{onSetMod:{opened:{yes:function(){if(this.hasMod("disabled","yes"))return!1;
this._drawPopup();var t=this.findElem(this._popup.domElem,"item","selected","yes");this.elem("button").attr({"aria-activedescendant":t.attr("id"),"aria-expanded":!0})
},"":function(){this.elem("button").attr("aria-expanded",!1).removeAttr("aria-activedescendant"),this._getPopup().hide()
}}},_getPopup:function(){if(this._popup)return this._popup;var t=this,e=t.params,n=t.__self.getName(),i={block:n,elem:"list"},o={block:n,elem:"popup",elemMods:{}},s={animate:"no"},r={directions:[{to:"bottom",axis:"left",offset:{top:8}},{to:"top",axis:"left",offset:{bottom:8}}]};
["size","layout","theme","width"].forEach(function(e){t.hasMod(e)&&(o.elemMods[e]=t.getMod(e))}),$.extend(o.elemMods,e.elemPopupMods),$.extend(s,e.popupMods),$.extend(r,e.popupParams);
var a=$(BEMHTML.apply({block:"popup",mods:s,mix:[o],js:r,content:{elem:"content",content:i}}));return(t._popup=t.findBlockOn(a,"popup")).on({show:function(){t._curItemIndex=t._getSelectedIndex();
var e=t._items.eq(t._curItemIndex);t.delMod(t._items,"selected").setMod(e,"hovered","yes").setMod(e,"selected","yes")
},"outside-click":function(e,n){t._isOutsideClicked(e,n)?e.preventDefault():t._blurButton()},hide:function(){t.delMod("opened").delMod(t._items,"hovered").delMod(t.findElem(t._popup.domElem,"popup"),"scrollable")
}}).bindTo("mousedown",function(t){t.preventDefault()}),BEM.DOM.append(BEM.DOM.scope,t._popup.domElem),t._redrawList(),t._outPopup=t.findBlockOutside("button","popup"),t._outPopup&&t._outPopup.on("outside-click",function(e,n){t._popup.containsDomElem($(n.target))&&e.preventDefault()
}),t._popup},_calcPopupDimensions:function(){this._popupContent||(this._popupContent=this._getPopup().findBlockInside("popup").elem("content"));
var t=parseInt(this.params.rows,10)||!1;if(t&&this.findElem(this._popupContent,"item").size()>t){this._rowHeight=this._getRowHeight();
var e=parseInt(this._getPopup().domElem.css("height"),10);if(e>t*this._rowHeight)this._getPopup().setSize({height:t*this._rowHeight}),this.setMod(this.findElem(this._getPopup().domElem,"popup"),"scrollable","yes");
else{var n=t*this._rowHeight+"px";this._getPopup().domElem.css("height")!==n&&this._getPopup().setSize({height:n})
}}else this._getPopup().setSize({height:"auto"})},_drawPopup:function(){var t=this.findBlockInside("select"),e=this._getPopup();
e.show(t),this._calcPopupDimensions(),this._scrollToCurrent()},_scrollToCurrent:function(){if(this._popupContent&&!(this._curItemIndex<0)){var t,e=this._items.eq(this._curItemIndex).get(0).offsetTop,n=this._popupContent,i=n.scrollTop(),o=e-i,s=2*this._rowHeight;
o>n.height()-s?t=e-s:i&&s>o&&(t=e-n.height()+s),t&&n.scrollTop(t)}}},{SHADOW_OFFSET:1}),_borschik("DQ548ghbrzNMcH-LQYqEeLWlQSw")&&!function(){var t=50,e=85,n=$.inherit($.observable,{alreadySent:{},children:[],__constructor:function(t){this.tree=t,this.send=$.debounce(this.send,500,this)
},addChild:function(t,e,n){this.alreadySent[t]||(this.children.push({ctag:e,vars:n}),this.alreadySent[t]=!0,this.send())
},send:function(){this.children.length&&(sh($.extend(this.tree,{children:this.children})),this.children=[])
}});BEM.DOM.decl("z-entity-collection",{onSetMod:{js:function(){this.initialize()},"portion-load":function(t,e){this.findBlockInside("spin").toggleMod("progress","yes","","yes"===e)
}},initialize:function(){this.hasMod("empty","yes")||(this.itemsBatch=new n(this.countersParams().batch),this.itemsContainer=this.findElem("items"),this.items=this.findElem("item"),this.itemWidth=this.items.outerWidth(!0),this.nextStartIndex=this.params.nextStartIndex,this.prepareCarousel(function(){this.updateVisibleElementsState(),this.bindEvents()
}.bind(this)))},prepareCarousel:function(t){var e=this.findElem("item","selected","yes");e.length?this.shiftTo(this.calculateShiftToPutInMiddle(e),t):t()
},calculateShiftToPutInMiddle:function(t){var e=this.visibleItemsCount()>>1,n=t?t.index()-e:0;return Math.max(n,0)
},bindEvents:function(){var t=this.countersParams();t["hover-in"]&&t["hover-out"]&&(this.bindTo(this.findElem("carousel"),"mouseenter",function(){w(null,t["hover-in"][0],t["hover-in"][1])
}),this.bindTo(this.findElem("carousel"),"mouseleave",function(){w(null,t["hover-out"][0],t["hover-out"][1])
})),this.bindTo(this.findElem("back-button"),"leftclick tap",this.onBackButtonClick.bind(this)),this.bindTo(this.findElem("item"),"leftclick tap",this.onItemClick.bind(this)).bindTo(this.findElem("arrow"),"leftclick tap",this.scrollOnArrowClick.bind(this)).bindTo(this.findElem("items"),"scroll",this.updateVisibleElementsState.bind(this)),this.bindToWin("resize.carousel",$.throttle(this.updateVisibleElementsState.bind(this),200))
},unbindEvents:function(){this.unbindFrom(this.findElem("carousel"),"mouseenter"),this.unbindFrom(this.findElem("carousel"),"mouseleave"),this.unbindFrom(this.findElem("back-button"),"leftclick tap"),this.unbindFrom(this.findElem("item"),"leftclick tap").unbindFrom(this.findElem("arrow"),"leftclick tap").unbindFrom(this.findElem("items"),"scroll"),this.unbindFromWin("resize.carousel")
},countersParams:function(){return this.elemParams(this.findElem("carousel")).counters},scrollOnArrowClick:function(t){var e=this.elemParams(t.data.domElem).direction,n=this.visibleItemsCount()-1,i=n*("left"===e?-1:"right"===e?1:0);
return this.shiftTo(i,this.updateVisibleElementsState.bind(this)),!1},shiftTo:function(t,e){if(0===t)return e();
var n=this.itemsContainer.scrollLeft()%this.itemWidth,i=t*this.itemWidth-n;this.itemsContainer.stop().animate({scrollLeft:"+="+i},250,e||$.noop)
},updateVisibleElementsState:function(){this.updateButtonsState(),this.countVisibleItems(),this.params.isLoadAllowed&&this.loadNextPortion()
},updateBackButton:function(t){var e=this.findElem("back-button");e.attr("href",t.url),this.findBlockOn(e,"button").findElem("text").text(t.text),t.needShow?this.delMod(e,"hidden"):this.setMod(e,"hidden","yes")
},updateButtonsState:function(){var t=this.itemsContainer.scrollLeft()<=0,e=this.items.last().position().left+this.itemWidth<=this.itemsContainer.scrollLeft()+this.itemsContainer.width();
this.toggleMod(this.findElem("arrow","direction","left"),"visible","no","yes",t),this.toggleMod(this.findElem("arrow","direction","right"),"visible","no","yes",e)
},countVisibleItems:function(){for(var n=this.itemsContainer.scrollLeft(),i=Math.floor(n/this.itemWidth),o=Math.min(i+this.visibleItemsCount(),t-1,this.items.length),s=i;o>s;s++)this.itemsBatch.addChild(s,e+s,"-id="+this.elemParams(this.items.eq(s)).id)
},visibleItemsCount:function(){var t=this.itemsContainer.scrollLeft()%this.itemWidth;return Math.floor((this.itemsContainer.width()+t)/this.itemWidth)
},onItemClick:function(t){var e=t.data.domElem;this.countClick(e),this.selectItem(e)},onBackButtonClick:function(){var t=this.findElem("item","selected","yes");
t.length&&(this.delMod(t,"selected"),this.isAjaxUpdateCanceled=!0)},countClick:function(n){var i=this.countersParams(),o=n.index();
if(t>o){var s=i.click[0]+"."+(e+o);vars=(i.click[1]?i.click[1]+",":"")+"-id="+this.elemParams(n).id,w(null,s,vars)
}},selectItem:function(t){this.delMod(this.findElem("item"),"selected"),this.setMod(t,"selected","yes"),this.isAjaxUpdateCanceled=!0
},onAjaxSuccess:function(t){t.params&&t.params.isEmpty||!this.isAjaxUpdateCanceled?this.updateContent($(t.html).html(),t.params):this.updateBackButton(t.params&&t.params.backButton||{}),this.isAjaxUpdateCanceled=!1
},updateContent:function(t,e){this.toggleMod("empty","","yes",!!t),this.unbindEvents(),t&&BEM.DOM.update(this.domElem,t,function(){e&&(this.params.entref=e.entref,this.params.nextStartIndex=e.nextStartIndex),this.initialize()
}.bind(this))},needLoadNextPortion:function(){var t=this.itemWidth*this.items.length;return-1!==this.nextStartIndex&&this.itemsContainer.width()===t-this.itemsContainer.scrollLeft()&&this.items.length<this.params.maxItemsLength
},loadNextPortion:function(){if(this.needLoadNextPortion()&&!this.hasMod("portion-load","yes")){var t=BEM.blocks.uri.parse(location.href).getParam("ento");
t=t&&t.length?t[0]:this.params.entref,this.setMod("portion-load","yes"),this.channel("serp-request").trigger("request",{key:this.__self.getName(),params:{ento:t+";entlistskip="+this.nextStartIndex},success:this.updatePortionContent.bind(this),error:this.delMod.bind(this,"portion-load")})
}},updatePortionContent:function(t){this.delMod("portion-load");var e=$(t.html).find(".z-entity-collection__item"),n=this.params.maxItemsLength-this.items.length;
e.length&&(this.unbindFrom(this.items,"click"),e.length>n&&(e.splice(n),this.params.nextStartIndex=-1),this.findElem("spin").before(e),this.items=this.findElem("item"),this.nextStartIndex=t.params&&t.params.nextStartIndex||-1,this.updateVisibleElementsState(),this.bindTo(this.items,"click",this.onItemClick.bind(this)))
}})}(),_borschik("2ctlQN76G9myKoEFlXj0pVXyjEs")&&!function(t,e){if(t.addEventListener&&t.getComputedStyle&&Function.prototype.bind){var n="76",i="487",o="238",s="690",r="836",a="1042",l="1132",c="1133",u="1134",h="1135",d={MIN_HEIGHT:16,probeElem:null,probeClass:"adbanner advblock b-adv b-banner bannerad reklama pagead sideads spec-adv sponsoredlinks",probeId:"adbanner",probeStyle:"position: absolute !important; visibility: hidden !important; height: 9px !important",params:null,counterParams:{dtype:"yact",path:s+"."+l},vars:{},isMSIE:navigator.userAgent.indexOf("Trident")>-1,detect:function(n){this.params=n,this.prepareTests();
for(var i,o=0,s=this.tests.length;!i&&s>o;o++)i=this.tests[o].call(this);return!i&&this.isMSIE?"complete"==e.readyState?this.doDeferredTests():t.addEventListener("load",this.doDeferredTests.bind(this),!1):(this.report(i),void 0)
},doDeferredTests:function(){for(var t,e=0,n=this.deferredTests.length;!t&&n>e;e++)t=this.deferredTests[e].call(this);
this.report(t)},report:function(t){var e=this.check();e&&!t&&(t=r),t?this.vars[n]=t:this.setCookie(!1),this.send()
},check:function(){var t=this.params.inquire,e=[],n=[];for(var s in t)if(t.hasOwnProperty(s)){n.push(s);
var r=!0,a=t[s];if(a instanceof Array)for(var l=a.length;l--&&r;)r=this.checkBlock(a[l]);else r=this.checkBlock(a);
r||e.push(s)}return n.length&&(this.vars[i]=n),e.length&&(this.setCookie(!0),this.vars[o]=e),!!e.length
},checkBlock:function(n){var i=e.querySelector(n),o=i&&t.getComputedStyle(i,"");return!(!i||"none"==o.display||"visible"!=o.visibility||"1"!=o.opacity||o.MozBinding&&o.MozBinding.indexOf("abp")>-1||parseInt(o.height,10)<this.MIN_HEIGHT)
},send:function(){this.vars[a]=encodeURIComponent(navigator.userAgent),(new Image).src=[this.params.counterUrl,this._stringify(this.counterParams),this._stringify(this.vars),"*"].join("/")
},_stringify:function(t,e){var n=[];e||(e="/");for(var i in t)t.hasOwnProperty(i)&&null!=t[i]&&n.push(i+"="+t[i]);
return n.join(e)},setCookie:function(t){for(var n=(e.cookie||"").split(/\s*;\s*/),i=String(location.host),o="."+i.substring(i.indexOf("yandex")),s="Tue, 19 Jan 2038 03:14:00 GMT",r="; expires="+s+"; domain="+o+"; path=/",a=2592e3,l=[],c=!1,u=n.length;!l.length&&u--;)"yp="==n[u].substring(0,3)&&(l=n[u].substring(3).split(/#|%23/));
for(var u=0,h=l.length;!c&&h>u;u++){var d=l[u].split(".");if("los"==d[1])if(c=!0,t){if("0"!=d[2])return;
d[2]="1",l[u]=d.join(".")}else l.splice(u,1)}t&&!c&&l.push(Math.round(.001*new Date+a)+".los.1"),(t||c)&&(e.cookie="yp="+l.join("#")+r)
},prepareTests:function(){"MozBinding"in e.body.style?this.tests.push(function(){var n=this.createTestElement(),i=t.getComputedStyle(n,"").MozBinding;
return e.body.removeChild(n),i&&i.indexOf("about:abp")>-1?c:void 0}):t.opera&&t.opera.version()<13?this.tests.push(function(){for(var t=e.querySelectorAll('style[type="text/css"]'),n=0,i=t.length;i>n;n++){var o=t[n].sheet.cssRules;
if(o.length){var s=o[0].selectorText;if(s.toLowerCase().indexOf("#ad")>-1)return 20==s.split(",").length?c:l
}}}):this.tests.push(function(){for(var t=e.documentElement.webkitShadowRoot||e.documentElement.shadowRoot,n=t?Array.apply(null,t.getElementsByTagName("style")):[],i=Array.prototype.slice.call(e.querySelectorAll('head>style[type="text/css"]'),0),o=n.concat(i),s=0,r=o.length;r>s;s++){var a,u=o[s].sheet.cssRules;
if(u.length){if(1==u[0].type&&(a=u[0].selectorText,a.toLowerCase().indexOf("#ad")>-1&&20==a.split(",").length))return c;
var h=u[u.length-1];if(1==h.type&&(a=h.selectorText,a.toLowerCase().indexOf("#ad")>-1&&1e3==a.split(",").length))return l
}}}),this.isMSIE?this.deferredTests.push(this.doTraitTest):this.tests.push(this.doTraitTest)},doTraitTest:function(){var n=this.createTestElement(),i=t.getComputedStyle(n,null),o=i.display,s=parseInt(i.height,10);
return e.body.removeChild(n),"none"!=o&&s?void 0:r},createTestElement:function(){var t=this.probeElem||(this.probeElem=e.createElement("div"));
return t.className=this.probeClass,t.id=this.probeId,t.style.cssText=this.probeStyle,e.body.appendChild(t),t
},tests:[function(){if("undefined"!=typeof adguard)return h;this.styleLinks||(this.styleLinks=e.querySelectorAll('head>link[rel="stylesheet"]'));
for(var t=0,n=this.styleLinks.length;n>t;t++)if(this.styleLinks[t].href.indexOf("adguard")>-1)return h
},function(){this.styleLinks||(this.styleLinks=e.querySelectorAll('head>link[rel="stylesheet"]'));for(var t=0,n=this.styleLinks.length;n>t;t++)if(this.styleLinks[t].href.indexOf("interceptedby.admuncher.com")>-1)return u
}],deferredTests:[function(){return null!=e.body.getAttribute("abp")?c:void 0}]};return BEM&&BEM.DOM&&BEM.DOM.decl("inquire",{onSetMod:{js:function(){var t=BEM.blocks["i-global"].param("click-host");
if(!t){var e=location.hostname.match(/^yandex(?:.[a-z]+)+$/i);t="//"+(e?e[0]:"yandex.ru")+"/clck"}this.params.counterUrl=t+"/click",d.detect(this.params)
}}}),d}}(window,document),_borschik("A2zUAQ17mQURQUnx2xM4xXCMykE")&&BEM.DOM.decl("main",{onSetMod:{js:function(){this.__base.apply(this,arguments)
}},isPanelOpened:function(){return!this.hasMod("right-panel-hidden")},openPanel:function(){this.hasMod("right-panel-hidden","yes")&&(this.delMod("right-panel-animate"),this.delMod("right-panel-hidden"),this.bindEvents(),this.syncScroll(),this.trigger("panelOpened"))
},closePanel:function(t){this.hasMod("right-panel-hidden","yes")||(t&&this.setMod("right-panel-animate","no"),this.setMod("right-panel-hidden","yes"),this.unbindEvents(),this.trigger("panelClosed"))
},togglePanel:function(){this.hasMod("right-panel-hidden","yes")?this.openPanel():this.closePanel()},_onEventsSomewhereElse:function(t){$(t.target).filter(this.__self._activeElements).length||$(t.target).parents(this.__self._activeElements).length||(this.closePanel(),this.unbindEvents())
},bindEvents:function(){this.bindToDoc("leftclick.mainRight tap.mainRight",this._onEventsSomewhereElse)
},unbindEvents:function(){this.unbindFromDoc("leftclick.mainRight tap.mainRight")}},{_activeElements:[".serp-item__preview-btn",".serp-item_preview-active_yes",".z-images__link",".main__right-inner",".content-preview",".i-geo-point__cont",'[target="_blank"]',"ymaps",".video-thumb",".popup"].join()}),_borschik("_iIGv8xTYlyqhzr-QVDYY4x30Ws")&&BEM.DOM.decl("main",{onSetMod:{js:function(){this.__base.apply(this,arguments),this.bindToWin("scroll.mainRight",this.syncScroll,this),this.bindToWin("resize",this.syncScroll,this),this.bindToDoc("keydown",this._keyControls,this),this.on("panelClosed",this._unfixCenterHeight,this),/MSIE 8/i.test(navigator.userAgent)&&(this.ieOnlyModsSetup(),this.bindToWin("resize",$.throttle(this.ieOnlyModsSetup,100)))
}},_throttleTrigger:$.throttle(function(t){this.trigger(t)},200),ieOnlyModsSetup:function(){var t=BEM.DOM.win.width(),e={s:843,m:943,l:1296},n="xs";
["s","m","l"].forEach(function(i){t>e[i]&&(n=i)}),this.setMod("size",n)},_keyControls:function(t){if(("INPUT"!==t.target.tagName||"text"!==t.target.name)&&this.isPanelOpened()){var e=27;
t.keyCode===e&&this.closePanel()}},_fixCenterHeight:function(t){this.findElem("center").css({"min-height":t})
},_unfixCenterHeight:function(){this.findElem("center").css({"min-height":0})},syncScroll:function(){if(this.isPanelOpened()){this._content=this._content||this.findBlockInside("content").elem("left"),this._entityCard=this._entityCard||this.findBlockInside("z-entity-card");
var t=BEM.DOM.win,e=BEM.DOM.doc,n=this._content.offset().top,i=this.elem("center").height(),o=this.elem("right-inner"),s=this.elem("right"),r=s.offset().top,a=parseInt(o.css("margin-top"),10),l=t.scrollTop(),c=a-l+this.prevScroll,u=o.height(),h=this.prevScroll&&0>=c&&u>s.height();
if(u>i)return this._fixCenterHeight(u+76),this.syncScroll(),void 0;0>=l&&(c=0),(l+t.height()>=e.height()||u+c<s.height())&&(c=s.height()-u),(!s.isMedia("main__right_large_yes")||this.hasMod(s,"size","l"))&&n>r&&(c=n-r,h=!0),o.css("margin-top",h?c:0),this.prevScroll=t.scrollTop()
}}}),_borschik("Xzas17HTgIqnkrqLaPV_CVdALkE")&&BEM.DOM.decl("main",{onSetMod:{js:{inited:function(){this.__base.apply(this,arguments),this.hasMod(this.elem("left"),"fixed","yes")&&(this._html=BEM.DOM.doc[0].documentElement,this._body=BEM.DOM.scope[0],this._toggleScrollHandler(),this._repositionMenu(),this._repositionMenu=$.throttle(this._repositionMenu,50),this.bindToWin("resize",$.throttle(this._toggleScrollHandler,100)))
}}},_repositionMenu:function(t){var e=this._html.scrollLeft||this._body.scrollLeft,n=Math.min(e,this._maxScrollLeft),i=Math.min(-n,0);
void 0===t&&(this._currentScrollLeft=0),(void 0===t||n!==this._currentScrollLeft)&&this.elem("left").css("left",i),this._currentScrollLeft=n
},_toggleScrollHandler:function(){var t=100;this._maxScrollLeft=this._body.scrollWidth-this._body.offsetWidth,0!==this._maxScrollLeft?(this._isOnScrollBound||this.bindToWin("scroll.mainLeft",this._repositionMenu),this._isOnScrollBound=!0):this._isOnScrollBound&&(this.unbindFromWin("scroll.mainLeft"),this._isOnScrollBound=!1),BEM.DOM.win.width()-this._previousWinWidth>t&&this._repositionMenu(),this._previousWinWidth=BEM.DOM.win.width()
}}),_borschik("-oI6QfJWZ9HeziV5jKVANVfzBIM")&&BEM.decl("suggest2-popup",{onSetMod:{js:{inited:function(){this._popup=this.params.popup,this._popup.on("hide",function(){BEM.blocks["suggest2-detect"].isPressedEscape()&&this.trigger("hide",{})
},this),this.bindSuggestEvents()}}},show:function(t){return this._popup.domElem?(t&&this._popup.setContent(t),this.isShown()?this:(this.trigger("preshow"),this._popup.show(this.params.owner),this.trigger("show"),this)):this
},hide:function(t){return this.isShown()&&(this._popup.hide(),this.trigger("hide",t||{})),this},setContent:function(t){return this._popup.setContent(t),this
},isShown:function(){return this._popup?this._popup.isShown():!1},owner:function(t){return t?(this.params.owner=t,this):this.params.owner
},getOwnerPos:function(){return this._popup.getOwnerPos()||{}},get:function(){return this._popup},width:function(t){return void 0===t?this._popup.domElem.outerWidth():(this._popup.domElem.outerWidth(t),this)
},destruct:function(){return this._popup?this._popup.destruct():void 0},bindSuggestEvents:function(){return this.params.suggest.on({select:function(t,e){this.hide(e)
},update:function(t,e){e.items.length||this.hide({response:"empty"})}},this),this}}),_borschik("SNoAgYDmlIpAu1IYY5yHk0kUVM8")&&BEM.DOM.decl("suggest2-detect",{onSetMod:{js:{inited:function(){this.bindToDoc("keydown",function(t){this.__self._pressedKeyCode=t.which
},this).bindToDoc("keyup",function(){this.__self._pressedKeyCode=null},this)}}}},{_pressedKeyCode:null,isPressedEscape:function(){return 27===this._pressedKeyCode
},isSupportInlineSVG:function(){var t=document.createElement("div");return t.innerHTML="<svg/>","http://www.w3.org/2000/svg"===(t.firstChild&&t.firstChild.namespaceURI)
}}),_borschik("GDdgcllydYlFq0gCqldLRHsmado")&&BEM.DOM.decl("header",{onSetMod:{js:{inited:function(){this.__base.apply(this,arguments),this.bindToWin("resize",$.throttle(this._onResize,150)),this._collapseUserIfNeeded()
}}},_onResize:function(){this._collapseUserIfNeeded()},_onUserUpdatesName:function(){this._collapseBreakpoint=null,this._collapseUserIfNeeded()
},_collapseUserIfNeeded:function(){var t=this._getUser();t&&t.toggleCollapsed(this._getCollapseBreakpoint()>=this.elem("nav").width())
},_getCollapseBreakpoint:function(){return this._collapseBreakpoint||(this._collapseBreakpoint=this._getNavItemsWidth()+this.__self.NAV_ITEMS_GAP),this._collapseBreakpoint
},_getNavItemsWidth:function(){var t=0;return this.elem("nav").children().each(function(){t+=$(this).outerWidth(!0)
}),t},_getUser:function(){return this._user?this._user._isDestructing&&(this._collapseBreakpoint=null,this._user=this.findBlockInside("user")):(this._user=this.findBlockInside("user"),this._user&&this._user.on("update-name",this._onUserUpdatesName,this)),this._user
}},{NAV_ITEMS_GAP:10,live:!1}),_borschik("poiEVpac9CiApb3Eu__AzBIG1tA")&&BEM.DOM.decl("header",{onSetMod:{js:function(){this.__base.apply(this,arguments);
var t=this.findBlockOutside("b-page").findBlockInside("main");this.bindTo(this.elem("action","type","adv"),"pressed",function(){this.findBlockInside("advanced-search").initBlock(),this.setMod("type","advanced"),t.setMod("kind","advanced-search")
}),this.bindTo(this.elem("action","type","adv"),"released",function(){this.findBlockInside("advanced-search").reset(),this.delMod("type"),t.delMod("kind")
}),this.params.advPressed&&this.afterCurrentEvent(function(){this.setMod(this.elem("action","type","adv"),"pressed","yes")
}),this.bindTo(this.elem("action","type","srv"),"pressed",function(){this.findBlockInside("services-table").updateServicesLink()
}),this.searchInput=this.findBlockInside("search").findBlockInside("input","input"),BEM.channel("header").on("init",function(t,e){this.updateData(e,!0)
}.bind(this.searchInput)),this.findBlockInside("suggest2").on({preshow:function(){this.setMod(this.elem("main"),"line","no")
},hide:function(){this.delMod(this.elem("main"),"line")}},this)}}}),_borschik("-w3d7S9LFlDSwxJ0-elRe3v-sCA")&&!function(t){var e=t.event.special.outsideclick={add:function(n){t(document).on("click."+n.guid,e.handler.bind(this))
},remove:function(e){t(document).off("click."+e.guid)},handler:function(e){t.contains(this,e.target)||(e.type="outsideclick",t.event.handle.apply(this,arguments),e.type="click")
}}}(jQuery),_borschik("3bzBsUY4VQ2BfUcU-p8ytRFCXzc")&&!function(t,e){var n=t.browser.opera&&t.browser.version<13;
e.DOM.decl("header",{onSetMod:{js:{inited:function(){this.__base.apply(this,arguments),this._openedSlide=null
}}},onElemSetMod:{action:{pressed:{"":function(t){this.elemParams(t).releaseByDocumentScroll&&this.unbindFromWin("scroll"),this._openedSlide&&(this._openedSlide.unbindFromDoc("click"),this._openedSlide=null),this.unbindFromWin("closeUnder"),t.attr({"aria-pressed":!1,"aria-expanded":!1}),t.trigger("released")
},yes:function(t,e){var n=this;n.delMod(this.elem("action"),e).bindToWin("closeUnder",function(){n.delMod(t,e)
}),n.elemParams(t).releaseByHeaderOutsideClick&&n.afterCurrentEvent(function(){if(n.domElem){var e=n._openedSlide=n._getOpenedSlide(t);
e&&n._slideOnClick(e,t)}}),n.elemParams(t).releaseByDocumentScroll&&this.bindToWin("scroll",function(){n._onScroll(t)
}),t.attr({"aria-pressed":!0,"aria-expanded":!0}),t.trigger("pressed")}}}},_getOpenedSlide:function(t){var e,n=this.buildSelector("action","type",this.getMod(t,"type"));
return this.findBlocksInside("slide").some(function(t){return t.params.rel&&t.params.rel[0].elem===n?(e=t,!0):void 0
}),e},_onScroll:function(t){this.delMod(t,"pressed")},_slideOnClick:function(e,n){var i=this;e.bindToDoc("click",function(o){var s=t(o.target);
e.containsDomElem(s)||s.is(i.elem("main"))||s.is(i.elem("action-i"))||i.delMod(n,"pressed")})},_onActionClick:function(t){t.preventDefault(),n&&t.stopPropagation(),this.toggleMod(t.data.domElem,"pressed","yes","")
},_onActionKeyup:function(t){(!n&&13===t.keyCode||32===t.keyCode)&&(t.preventDefault(),this.toggleMod(t.data.domElem,"pressed","yes",""))
},destruct:function(){this._openedSlide&&(this._openedSlide.unbindFromDoc("click"),this._openedSlide=null),this.__base.apply(this,arguments)
}},{live:function(){return this.liveBindTo("action","leftclick tap",function(t){this._onActionClick(t)
}).liveBindTo("action","keyup",function(t){t.shiftKey||t.ctrlKey||t.altKey||this._onActionKeyup(t)}),this.__base.apply(this,arguments)
}})}(jQuery,BEM),_borschik("c43duPjUFt_knLMRSyOpx9v_mpE")&&!function(t){var e=t.browser,n=e.opera&&e.version<12.1?"keypress":"keydown";
BEM.DOM.decl("tooltip",{onSetMod:{js:{inited:function(){this._popup=null,this._owner=null}},shown:{yes:function(){if(!this._owner)throw new Error("Owner is unset");
this._getPopup().show(this._owner).unbindFromDoc(n)},"":function(){this._getPopup().hide()}}},getOwner:function(){return this._owner
},setOwner:function(t){return this._owner=t,this},setContent:function(t){return this._getPopup().setContent(t),this
},redraw:function(){return this.hasMod("shown","yes")&&this._getPopup().repaint(),this},destruct:function(){this.delMod("shown"),this.__base.apply(this,arguments)
},_getPopup:function(){return this._popup||(this._popup=this.findBlockOn("popup").on("show",this._onPopupShow,this).on("hide",this._onPopupHide,this)),this._popup
},_onPopupShow:function(){this.trigger("show")},_onPopupHide:function(){this.delMod("shown").trigger("hide")
},_onClick:function(){this.trigger("click").delMod("shown")}},{live:function(){this.liveBindTo("click",function(){this._onClick()
})}})}(jQuery),_borschik("0-dFyoN-QSCNB0MPKkSQ32eiMI0")&&BEM.DOM.decl("tooltip",{onSetMod:{hovered:{yes:function(){this.bindTo("mouseleave",this._onMouseLeave)
},"":function(){this.unbindFrom("mouseleave")}}},_onMouseOver:function(){this.setMod("hovered","yes")
},_onMouseLeave:function(){this.delMod("hovered")}},{live:function(){return this.liveBindTo("mouseover",function(){this._onMouseOver()
}),this.__base.apply(this,arguments)}}),_borschik("g-vKkcXTDKrS6ctWAkL0vBQaCNo")&&!function(){var t=27;
BEM.DOM.decl({block:"tooltip",modName:"autoclosable",modVal:"yes"},{onSetMod:{shown:{yes:function(){this.__base.apply(this,arguments),this.bindToDoc("keydown",this._onKeyDown)
},"":function(){this.unbindFromDoc("keydown"),this.__base.apply(this,arguments)}}},_onKeyDown:function(e){e.keyCode===t&&this.delMod("shown")
}})}(),_borschik("_TrLVuHiyhsdq_fWdnTpW7I5e3c")&&BEM.DOM.decl({block:"logo",modName:"tooltip",modVal:"yes"},{onSetMod:{js:function(){var t=this,e=this.findBlockOutside("b-page"),n=e.findBlockInside("main"),i=localStorage.getItem("last_show_tooltip"),o=+new Date,s=i?Math.round((o-i)/36e5):null,r=s>=72;
this.tooltip=e.findBlockInside({block:"tooltip",modName:"type",modVal:"tablo"}),this.isVisible=!1,this.tooltip&&(this.tooltip.on("hide",function(){t._hide()
}),!i&&localStorage.setItem("last_show_tooltip",o),parseInt(localStorage.getItem("is_first_tooltip"),10)||(localStorage.setItem("is_first_tooltip",1),this._showWithTimeout()),parseInt(localStorage.getItem("is_first_tooltip"),10)&&r&&n.bindTo("left","mouseover",function(){t.isVisible||(t._show(),t._hideWithTimeout(),localStorage.setItem("last_show_tooltip",o))
}).bindTo("left","mouseout",function(){t._clear()}))}},_showWithTimeout:function(){setTimeout(function(){this._show()
}.bind(this),5e3)},_show:function(){this._clear(),this.timer=setTimeout(function(){this.tooltip.setOwner(this).setMod("shown","yes"),this.isVisible=!0
}.bind(this),200)},_hide:function(){this.tooltip.setOwner(this).delMod("shown"),this.isVisible=!1},_clear:function(){this.timer&&clearTimeout(this.timer)
},_hideWithTimeout:function(){this.timerClear=setTimeout(function(){this._hide(),clearTimeout(this.timerClear)
}.bind(this),5e3)}}),_borschik("iYbCYL-rvtsQ1oz_vMS6GtQhgZc")&&BEM.DOM.decl({block:"logo",modName:"logotablo",modVal:"yes"},{onSetMod:{js:function(){this.__base.apply(this,arguments);
var t,e=this.findBlockOutside("b-page"),n=e.findBlockInside("search").findBlockInside("input");this.channel("serp-request").on("success",function(){window.servicesTable.setSearchText(encodeURIComponent(n.val()))
}),this._initTablo(encodeURIComponent(n.val())),t=e.findBlockInside("tablo-panel"),this.bindTo("mousemove",$.throttle(this._open,25)).bindTo("mouseout",this._clear),t.bindTo("helper","hover",function(){this._clear(),this._close()
}.bind(this))}},_initTablo:function(t){window.servicesTable.init({searchText:t,services:"mail+weather+market+news+maps+music+images+video+translate+money+slovari+rasp"})
},_open:function(){this._clear(),this.timer=setTimeout(function(){window.servicesTable.open(),this._hideTooltip()
}.bind(this),100)},_close:function(){window.servicesTable.close()},_clear:function(){this.timer&&clearTimeout(this.timer)
},_hideTooltip:function(){this.tooltip&&this.tooltip.setOwner(this).delMod("shown")}}),_borschik("vjZQ5RgylAmUQJdWCS8Ij3Qi2NM")&&BEM.DOM.decl("services-table",{onSetMod:{js:function(){this._globalServices=this.findBlockOutside("i-services"),this._services=this.findBlocksInside("service")
}},updateServicesLink:function(){var t=this;$.each(this._services,function(){var e=this.elem("url"),n=this.getMod("name"),i=e.attr("href"),o=BEM.blocks.uri.parse(i).getRoot(),s=t._globalServices.getServicePath(n),r={maps:"source=serp_table",browser:"from=link_serp___|&banerid=0402000000"},a=r[n];
a&&(s+=(s?"&":"/?")+a),o=t._globalServices.getServiceUrl(this.getMod("name"))||o,e.attr("href",o.replace(/\/$/,"")+s)
})}},{live:!0}),_borschik("ZkPGO5cC73xYv7tA6tp2H37ybPQ")&&!function(t,e){var n=".tabloPanel",i="open"+n,o="close"+n,s="tablo-panel",r="tablo-panel_visibility_visible",a="tablo-panel_visibility_hidden",l="tablo-panel__iframe",c="body",u=!1;
!u&&e.documentMode>10&&(u=!0),u&&e.documentMode<9&&(c="html"),t.TabloPanel=function(){},t.TabloPanel.prototype={init:function(t){this._inited||(this._setParams(t),this._setEvents(),this._buildIframe(),this._inited=!0)
},open:function(t){this._iframeInited||(this._iframeInited=!0),this._open(t)},close:function(t){this._iframeInited&&this.isOpened()&&(this._$panel.removeClass(r).addClass(a),this._params.overflowHidden&&$(c).css("overflow",this._overflow),t||this.postMessage(o),this._trigger(o))
},toggle:function(){this.isOpened()?this.close():this.open()},isOpened:function(){return this._iframeInited?!!this._$panel.hasClass(r):!1
},destruct:function(){this._iframeInited&&(this._$iframe.remove(),this._$iframe=null,this._$panel.remove(),this._$panel=null,this._iframeInited=!1,$(t).off("message",this._onmessage))
},_iframeInited:!1,_open:function(t){if(this._iframeInited&&!this.isOpened()){var e=$(c);this._$panel.removeClass(a).addClass(r),this._params.overflowHidden&&(this._overflow=e.css("overflow"),e.css("overflow","hidden")),t||this.postMessage(i),this._trigger(i)
}},_trigger:function(e,n){if(e){var i=t.BEM;"undefined"!=typeof i&&i.channel&&(e=e.split(".")[0],i.channel("tablo-panel").trigger(e,n))
}},_setParams:function(t){t=t||{},this._params={device:t.device||"desktop",position:t.position||"left",width:t.width,top:t.top,header:t.header,container:t.container||"body",overflowHidden:t.overflowHidden,host:t.host,path:t.path,data:t.data||{},cache:t.cache,onload:t.onload}
},postMessage:function(t){try{this._$iframe[0].contentWindow.postMessage(t,"*")}catch(e){}},_buildIframe:function(){var e=this,n=$(this._params.container),i=[s,this._getDeviceClass(s),this._getPositionClass(s),a].join(" ");
this._$panel=$('<div class="'+i+'"></div>'),this._$panel_helper=$('<div class="tablo-panel__helper"></div>'),this._$iframe=$("<iframe/>",{"class":l,src:this._getUrl(),frameBorder:"0",allowTransparency:"true"});
var o=this._params.top;if(!o){var r=$(this._params.header);r.length&&(o=r.outerHeight())}o&&this._$panel.css("top",o+"px");
var c=this._params.width;c&&this._$panel.css("width",c+"px"),this._$panel_helper.appendTo(this._$panel),this._$iframe.appendTo(this._$panel),this._$panel.appendTo(n),$(t).on("message",this._onmessage);
var u=this._params.onload;u&&this._$iframe.on("load",function(){u.apply(e,arguments)})},_getUrl:function(){var e=function(e,n){return e+"="+t.encodeURIComponent((""+n).substr(0,512))
},n=this._params,i=n.host+n.path,o=n.data,s=Object.keys(o).map(function(t){return e(t,o[t])});return n.cache===!1&&s.push(e("_",Math.floor(1e6*Math.random()))),i+(s.length?"?"+s.join("&"):"")
},_getDeviceClass:function(t){return t+"_device_"+this._params.device},_getPositionClass:function(t){return t+"_position_"+this._params.position
},_setEvents:function(){var t=this;this._onmessage=function(e){try{var n=e.originalEvent.data;n&&"string"==typeof n&&(n===o?t.close(!0):t._trigger(n))
}catch(e){}},this._onesc=function(e){e.shiftKey||e.altKey||e.ctrlKey||e.metaKey||27===e.keyCode&&t.close()
},this._onclose=function(){t.close()}}}}(this,this.document),_borschik("IaYcSQ3aUvWJU045l52LU29ZCw4")&&!function(t,e,n){var i,o,s=t.servicesTable=new t.TabloPanel;
s.init=function(s){s||(s={});var r={},a=s.device||"desktop",l=s.services,c=s.lang,u=s.domain;if(r.device=a,l&&(r.services=l),c&&(r.lang=c),u&&(r.domain="com.tr"===u?"tr":u),i=s.clid,!i&&!(o=s.serviceId)){var h=e&&e.blocks["i-global"];
o=h&&h.param("id")}o&&(r["service-id"]=o),t.TabloPanel.prototype.init.call(this,{device:a,width:s.width||370,top:s.top||(s.header?n:70),header:s.header,container:s.container,overflowHidden:s.overflowHidden,host:"undefined"!=typeof s.host?s.host:"//yastatic.net",path:s.path||"/tableau/tableau.html",data:r,cache:!0,onload:function(){setTimeout(function(){this.setSearchText(s.searchText||"")
}.bind(this),0)}})},s.setSearchText=function(t){this.postMessage(JSON.stringify({fnName:"updateUrls",fnArgs:[{text:t.trim(),clid:i,serviceId:o}]}),"*")
}}(window,window.BEM),_borschik("DgYV8KJtpcC4RKBz7TlnBocQDLs")&&BEM.DOM.decl("input",{onSetMod:{js:function(){this._val=this.elem("control").val()
},disabled:function(t,e){this.elem("control").attr("disabled","yes"===e)},focused:function(t,e){if(this.hasMod("disabled","yes"))return!1;
var n="yes"===e;n?this._focused||this._focus():this._focused&&this._blur(),this.afterCurrentEvent(function(){this.trigger(n?"focus":"blur")
})}},isDisabled:function(){return this.hasMod("disabled","yes")},val:function(t,e){if("undefined"==typeof t)return this._val;
t=null===t?"":t.toString();var n=this.elem("control");return n.val()!==t&&n.val(t),this._val=t,this.trigger("change",e),this
},name:function(t){var e=this.elem("control");return arguments.length?(e.attr("name",t),this):e.attr("name")
},getSelectionEnd:function(){var t=this.elem("control")[0],e=0;if("number"==typeof t.selectionEnd)e=t.selectionEnd;
else{var n=document.selection.createRange();if(n&&n.parentElement()===t){var i=t.value.length,o=t.createTextRange();
o.moveToBookmark(n.getBookmark());var s=t.createTextRange();s.collapse(!1),e=o.compareEndPoints("EndToEnd",s)>-1?i:-o.moveEnd("character",-i)
}}return e},_onFocus:function(){return this._focused=!0,this.setMod("focused","yes")},_onBlur:function(){return this._returnFocus?(this.afterCurrentEvent(function(){this._focus()
}),this):this.hasMod(this.elem("clear"),"pressed")?this:(this._focused=!1,this.delMod("focused"))},_focus:function(){return this.hasMod("disabled","yes")?!1:(this.elem("control").focus(),void 0)
},_blur:function(){this._returnFocus=!1,this.elem("control").blur()},destruct:function(){this._blur(),this.__base.apply(this,arguments)
}},{live:function(){this.liveBindTo("control","focusin focusout",function(t){this["focusin"===t.type?"_onFocus":"_onBlur"](t)
})}}),_borschik("TyOHpMeUkdMWf9uZdjOsOj34zLs")&&!function(){var t,e=[],n=function(){e.forEach(function(t){t.val(t.elem("control").val())
})},i=function(t){try{return t.activeElement}catch(e){}};BEM.DOM.decl("input",{onSetMod:{js:{inited:function(){this.__base.apply(this,arguments),this._instanceIndex=e.push(this)-1;
var o=this.elem("control"),s=i(this.__self.doc[0]),r=this.params.autoFocus&&(!s||!$(s).is("input, textarea"));
(s===o[0]||r)&&(this.setMod("focused","yes")._focused=!0),t||(t=this.channel("sys").on({tick:n,idle:function(){t.un("tick",n)
},wakeup:function(){t.on("tick",n)}})),this.params.shortcut&&this.bindToDoc("keydown",function(t){t.ctrlKey&&38===t.which&&!$(t.target).is("input, textarea")&&this.setMod("focused","yes")
})}}},val:function(t,e){var n="undefined"!=typeof t,i=this.elem("control");return t=n?null===t?"":t.toString():i.val(),this._val!==t&&(this._val=t,i.val()!==t&&i.val(t),this.trigger("change",e)),n?this:t
},_focus:function(){var t=this.elem("control")[0];if(t.createTextRange&&!t.selectionStart){var e=t.createTextRange();
e.move("character",t.value.length),e.select()}else t.focus()},destruct:function(){this.__base.apply(this,arguments),this.params.shortcut&&this.unbindFromDoc("keydown"),e.splice(this._instanceIndex,1),e.slice(this._instanceIndex).forEach(function(t){t._instanceIndex--
})}},{})}(),_borschik("Wd81RK8UZ9hwXMZyFdInfc0j3cM")&&BEM.DOM.decl("input",{_mayShowSuggest:!0,_hasChanged:!1,onSetMod:{js:function(){this.__base(),this.on("change",function(){this._hasChanged=!0
})}},onAjaxPrepare:function(){this._hasChanged=!1},onAjaxSuccess:function(t){var e=t.params;this._mayShowSuggest=!0,this._hasChanged||(this.updateData(e),this.delMod("focused"))
},updateData:function(t,e){if(t){!e&&this.val(t.value,{noSuggest:!0});var n=this.findBlockInside("search__hidden-inputs");
n&&n.domElem&&n.domElem.replaceWith(t.hiddenInputs)}},mayShowSuggest:function(t){return void 0!==t&&(this._mayShowSuggest=t),this._mayShowSuggest
},getSelectionEnd:function(){var t=this.elem("control")[0],e=0;if("number"==typeof t.selectionEnd)e=t.selectionEnd;
else{var n=document.selection.createRange();if(n&&n.parentElement()===t){var i=t.value.length,o=t.createTextRange();
o.moveToBookmark(n.getBookmark());var s=t.createTextRange();s.collapse(!1),e=o.compareEndPoints("EndToEnd",s)>-1?i:-o.moveEnd("character",-i)
}}return e}}),_borschik("Z_2AsDqoOKDPn3Mim9QrGSOsDyc")&&!function(){var t,e=0,n=!1,i=0,o=BEM.channel("sys"),s=50;
BEM.decl("i-system",{},{start:function(){$(document).bind("mousemove keydown",function(){i=0,n&&(n=!1,o.trigger("wakeup"))
}),this._tick()},_tick:function(){var r=this;o.trigger("tick",{counter:e++}),!n&&(i+=s)>3e3&&(n=!0,o.trigger("idle")),t=setTimeout(function(){r._tick()
},s)}}).start()}(),_borschik("WIF96DABM44506iz53erQuBCzZc")&&BEM.DOM.decl("input",{onSetMod:{js:function(){this.__base.apply(this,arguments),this.on("change",this._updateClear)._updateClear()
}},_onBoxClear:function(){this.hasMod("clear","visibility","visible")||this.hasMod("disabled","yes")||this.setMod("focused","yes")
},_onClearClick:function(){return this.trigger("clear"),this.removeInsets&&this.removeInsets(),this.clearInput({source:"clear"})._focus()
},clearInput:function(t){return this.val("",t),this},_updateClear:function(){return this.toggleMod(this.elem("clear"),"visibility","visible","",!!this._val)
}},{live:function(){this.__base.apply(this,arguments),this.liveBindTo("clear","mousedown",function(t){1===t.which&&this.setMod(this.elem("clear"),"pressed","yes")
}).liveBindTo("clear","leftclick tap",function(){this.delMod(this.elem("clear"),"pressed"),this._onClearClick()
}).liveBindTo("box","leftclick tap",function(){this._onBoxClear()})}}),_borschik("nKcV1Lclev9wcgpjLkM95vvGwOg")&&BEM.DOM.decl("search",{_needSend:function(t){var e,n=!1,i=this._cleanParams(BEM.blocks.uri.parse("?"+this.serialize(t)).queryParams);
return newParamsKeys=Object.keys(i),oldParams=this._cleanParams(this.location.getState().params),oldParamsKeys=Object.keys(oldParams),e=newParamsKeys.length>oldParamsKeys.length?newParamsKeys:oldParamsKeys,$.each(e,function(t,e){i[e]instanceof Array&&oldParams[e]instanceof Array&&i[e].sort().join().trim()!==oldParams[e].sort().join().trim()&&(n=!0)
}),n},_cleanParams:function(t){t=$.extend({},t);for(var e,n=["msid","tld","rnd"];e=n.shift();)t.hasOwnProperty(e)&&delete t[e];
return t},serialize:function(t){var e=this.domElem.serializeArray();return $.each(t||{},function(t,n){e.push({name:t,value:n})
}),$.param(e)}}),_borschik("hvOrV51jv966YEViON-douUnUXk")&&BEM.DOM.decl("search",{onSetMod:{js:function(){this.__base();
var t=this.findBlockInside("suggest2"),e=this.findBlockOutside("header"),n=e.elem("wrapper"),i=$.browser.msie,o=i&&parseInt($.browser.version,10);
this.input=this.findBlockInside("input"),this.inputClear=this.input.elem("clear"),this.suggest=this.findBlockInside("suggest2"),this.suggestCounter=this.findBlockOn("suggest2-counter"),BEM.blocks["i-ua"].canUseAjax()&&(o>9||!i)&&(this.location=BEM.blocks.location.getInstance(),this.serp=this.input.findBlockOn("serp")),this.findBlockInside("suggest2-form").on("ready",t.setOwner(n[0]&&n||e)),this.input.bindTo(this.input.elem("clear"),"click",this._onClear.bind(this)),this.bindTo("submit",this._onSubmit.bind(this)),this.suggestCounter.on("submit",function(t,e){this.setSuggestCsgParams(e)
}.bind(this)),this._rnd=0,this._lastSubmit=new Date}},setSuggestCsgParams:function(t){this.suggestCsgParams||(this.suggestCsgParams=[t.since_last_change,t.since_first_change,t.user_input.length,t.ratio.actionsCount,t.path.index,"button_by_mouse"===t.path.submit?"1":"0","edit"===t.path.state?"1":"0"].join(","))
},reSubmit:function(){this._rnd=Math.floor(1e5*Math.random()),this.domElem.submit()},_onClear:function(t){w(null,this.input.params.counterClear),t.preventDefault()
},_onSubmit:function(t,e){if(!(e&&e.item&&e.item.hasMod("interact","link"))){this.advancedSearch||(this.advancedSearch=this.findBlockOutside("b-page").findBlockInside("advanced-search")),BEM.blocks["i-global"]._params.timeSinceSearchSubmit=(new Date).getTime();
var n=!this.advancedSearch.isDefaultState()&&this.advancedSearch.getParams(),i={url:this.domElem.attr("action")+"?"+this.serialize()+(n?"&"+n:"")};
this.input.mayShowSuggest(!1);var o=e&&e.item&&e.item.params&&e.item.params.cgi;if(o&&o.forEach(function(t){i.url+="&"+t.join("=")
}),!this.serp)return document.location=i.url,!1;var s=new Date-this._lastSubmit>5e3,r=this._needSend();
return r?this._rnd=0:s&&(this._rnd=Math.floor(1e5*Math.random())),this._rnd&&(i.url+="&rnd="+this._rnd,i.history=!1),(s||r)&&(this._lastSubmit=new Date),this.suggestCsgParams&&(i.url+="&csg="+this.suggestCsgParams,this.suggestCsgParams=null),this.location.change(i),!1
}}}),_borschik("AVjRWX-vsSblW98nydwefTpEGCk")&&BEM.DOM.decl("search",{onSetMod:{js:function(){this.__base(),this._tabindexed=this.domElem.find("[tabindex]")
}},onAjaxSuccess:function(){this._tabindexed.attr("tabindex",-1),BEM.DOM.win.on("keyup.tabindex",this.changeThis(this._onKeyUp))
},_onKeyUp:function(t){9===t.keyCode&&(this._tabindexed.attr("tabindex",1),BEM.DOM.win.off("keyup.tabindex"))
}}),_borschik("BbiMWkySNWZ1G6gXpnX1LQKoA1g")&&BEM.DOM.decl("input",{onSetMod:{js:function(){this.__base(),this.elem("requery-input").appendTo(this.elem("control").parent())
},requery:function(t,e){this.setMod(this.elem("control"),"visibility","yes"==e?"hidden":""),this.setMod(this.elem("requery requery-input"),"visibility","yes"==e?"visible":"")
}},showRequery:function(){this.setMod("requery","yes")},hideRequery:function(){this.delMod("requery")
},updateRequeryHidden:function(t){this.elem("requery-input").val(t+" "),this.elem("requery-hidden").html(t+"&nbsp;")
},updateRequeryVisible:function(t){this.elem("requery-visible").html(t)}}),_borschik("WcjHiBchaVDV6osyPz1XucLQleQ")&&BEM.DOM.decl("input",{onSetMod:{js:function(){if(this.__base.apply(this,arguments),this.elem("found").length){var t=this.elem("control");
$("<span/>",{"class":this.buildSelector("query-holder").slice(1)}).css({"font-size":t.css("font-size")}).text(this.val()).appendTo(this.domElem),this._controlQueryLeftOffset=parseInt(t.css("padding-left"),10)+(parseInt(t.css("border-left-width"),10)||0),this.on("change",this._toggleVisibility).bindToWin("resize",$.throttle(this._onWindowResize,100,this)).setPosition()
}}},_toggleVisibility:function(){var t=this.val()===this.elem("query-holder").text()&&this.textWidth<this.inputWidth&&!!this.elem("found").html();
this.toggleMod(this.elem("found"),"visibility","visible","",t)},setPosition:function(){var t=this.elem("control"),e=this.elem("found"),n=t.offset().left-this.domElem.offset().left+this._controlQueryLeftOffset+this.elem("query-holder").width();
this.inputWidth=t.width(),this.textWidth=e.width()+n,e.css({left:n}),this._toggleVisibility()},_onWindowResize:function(){this.inputWidth=this.elem("control").width(),this._toggleVisibility()
},setFound:function(t,e){this.elem("found").html(t),this.elem("query-holder").html(e),this.setPosition()
}}),_borschik("CPhvoQKaG_bfMOFW0g9rwlyBKB8")&&BEM.DOM.decl("input",{onSetMod:{js:function(){this.__base.apply(this,arguments),this.bindTo("found","mousedown",function(){this.setMod("focused","yes")
})}}}),_borschik("-XiGPtfAFqM741ynj06ubd05lAk")&&BEM.DOM.decl({name:"input",modName:"found",modVal:"yes"},{updateData:function(t){this.__base.apply(this,arguments),t&&this.setFound(t.found,BEM.blocks["i-common__string"].escapeHTML(t.value))
}}),_borschik("WRGGUBvfufJOnL8_d29mp4Jo8V4")&&!function(){var t=function(t){var e=t.charCode||t.keyCode||t.which||0,n=t.ctrlKey||t.altKey||t.metaKey,i=e>=48&&57>=e,o=e>=96&&105>=e,s=[e>=65&&90>=e,e>=1025&&1071>=e,0===e,231===e].some(Boolean);
return!n&&(i||o||s)};BEM.DOM.decl({name:"input",modName:"autofocus",modVal:"yes"},{onSetMod:{js:function(){this.__base.apply(this,arguments),this.bindToDoc("keydown",this._autoFocusBind)
},autofocus:{yes:function(){this.bindToDoc("keydown",this._autoFocusBind)},"":function(){this.unbindFromDoc("keydown")
}}},_autoFocusBind:function(e){if(!this.hasMod("focused","yes")){var n;try{n=document.activeElement.tagName.toLowerCase()
}catch(e){}if(t(e)&&"input"!==n&&"textarea"!==n){var i=this.elem("control")[0],o=this.val();if(o.length>0&&" "!==o.slice(-1)&&(o+=" ",this.val(o)),i.createTextRange){var s=i.createTextRange();
s.collapse(!1),s.select()}else i.selectionStart&&i.setSelectionRange(o.length,o.length);this.setMod("focused","yes")
}}}})}(),_borschik("xBLEh4L0LNP5BbxWVup3SN6KuaM")&&BEM.DOM.decl("input",{onSetMod:{js:{inited:function(){this.__base(),this.bindTo("service-label","tap click",function(t){t.stopPropagation()
})}}}}),_borschik("h8Cdg2uIRJ2A1Bp0ePNHPmlOHn8")&&BEM.DOM.decl("suggest2",{onSetMod:{js:{inited:function(){this.params.form||this.findBlockOutside("suggest2-form"),this._lastSubmitTime=0,this._lastBlurTime=0,this._clear()
}}},getDefaultParams:function(){return{submitBySelect:!1,updateOnEnterByKeyboard:!0,onFocus:"request",requestOnEmptyInput:!1}
},init:function(){var t=this;t.params.form.on("submit",function(){this._lastSubmitTime=(new Date).getTime(),t._clear(),t._popup.hide()
},t),t._model=t.initModel(),t._view=t.initView(),t._counter=t.initCounter(),t._model.on({response:this.setItems,reject:function(e,n){2===n.code&&(t._popup.hide(),t._clear())
}},t),t._input=t.params["suggest2-input"],t._popup=t.params["suggest2-popup"],t.bindEvents()},initModel:function(){return BEM.create("suggest2-model",this.params)
},getModel:function(){return this._model},initView:function(){var t=this.getMod("theme")||"normal",e={theme:t};
return"large"===t&&(e.group="type"),"label"===this.getMod("group")&&(e.group="label"),BEM.create({block:"suggest2-view",mods:e})
},getView:function(){return this._view},initCounter:function(){return this.params.counter?this.params.counter.initValues().bindEvents():void 0
},getCounter:function(){return this._counter},setDataConverter:function(t){return this.getModel().getProvider().convert=t,this
},setRequestData:function(t){return this.getModel().getProvider().getRequestData=t,this},setRequestUrl:function(t){return this.getModel().getProvider().getRequestUrl=t,this
},setOwner:function(t){return this._popup.owner(t),this},bindEvents:function(){var t=this;return t._input.bindEvents({change:t._onChange,focus:t._onFocus,blur:t._onBlur},t),t._popup.on({preshow:function(){this.trigger("preshow")
},show:function(){this.trigger("show")},hide:function(t,e){this.trigger("hide",e)}},this),t.params.button&&t.params.button.bindTo("mousedown",function(){t._input.realVal(t._input.val()),t._popup.hide()
}),t},setItems:function(t,e){var n=this;return n._isFormSubmitDurinQuery()||!e.data.items.length?(n._popup.hide(),n._clear()):n._input.val()!==e.val?n._clear():(n._text=e.val,n._pos=e.pos,n._meta=e.data.meta||{},n._popup.show(n._view.html(e.data.items,n._meta)).width(n.getPopupWidth()),n._items=n.findBlocksInside("suggest2-item"),n._clearItems().trigger("update",{val:n._text,pos:n._pos,items:n._items}),n)
},getItems:function(){return this._items||[]},isBlur:function(){return this._isBlur},getPopupWidth:function(){},_isFormSubmitDurinQuery:function(){return this._lastSubmitTime?this._model.isTimeInRequestInterval(this._lastSubmitTime)?(this._lastSubmitTime=0,!0):!1:!1
},_onChange:function(t,e){this._model.request(this._input.realVal(this._input.val()),this._input.getCaretPosition(),e)
},_onFocus:function(){this._isBlur&&this.params.onFocus&&this._isLastBlurTimeLater(300)&&(this.getItems().length&&this._input.val()===this._text?(this._clearItems(),this._popup.show()):this._isMouseDown||"request"!==this.params.onFocus||this._onChange())
},_onBlur:function(){this._lastBlurTime=(new Date).getTime(),this._isBlur?(this._clear(),this._popup.hide()):this._freezeInputFocus?(this._clear(),this._input.focus()):this._isMouseDown&&this._input.focus(),this._isBlur=!0
},_getItemIndex:function(t){return this.getItems().indexOf(t)},_clear:function(){return this._isBlur=!0,this._freezeInputFocus=!1,this._clearItems()
},_clearItems:function(){return this._isMouseDown=!1,this._enterItemIndex=-1,this._unselectItems()},_isLastBlurTimeLater:function(t){return(new Date).getTime()-this._lastBlurTime>t
},_unselectItems:function(t){var e=t?[].slice.call(arguments):this.getItems();return e.forEach(function(t){t.onLeave()
}),this},_onSelectItem:function(t,e){var n=this,i=n._getItemIndex(t),o=t.onSelect(e).val();return n._text=n._input.realVal(o),n._isBlur=!0,n._freezeInputFocus=!1,n.trigger("select",{val:n._text,pos:n._pos,item:t,meta:n._meta,itemIndex:i,byKeyboard:e}),o!==!1&&(n._items=[],n.params.submitBySelect&&n.params.form.submit()),i
},_onDownItem:function(){this._isBlur=!1,this._isMouseDown=!0}}),_borschik("EFxPXjRYzoTQP9Q4i5r8fvoP4-0")&&BEM.DOM.decl("suggest2",{bindEvents:function(){var t=this;
return t._input.bindEvents({keydown:t._onKeyDown,keyup:t._onKeyUp,keypress:t._onKeyPress},t),BEM.blocks["suggest2-item"].on(t.domElem,{mouseover:function(e){t._onEnterItem(e.block,!1)
},mouseout:function(e){t._onLeaveItem(e.block,!1)},mousedown:function(){t._onDownItem()},leftclick:function(e){t._onSelectItem(e.block,!1)
}}),t.__base.apply(t,arguments)},_onKeyDown:function(t){var e=this.__self.keyboard,n=t.which;!this._popup.isShown()||n!==e.up&&n!==e.down||(t.preventDefault(),this._enterByKeyboard(n))
},_onKeyUp:function(t){var e=this.__self.keyboard;if((t.which===e.left||t.which===e.right)&&(this.trigger("change-cursor-pos"),this._model.request(this._input.realVal(this._input.val()),this._input.getCaretPosition())),t.which===e.right&&~this._enterItemIndex&&this._enterItemByKeyboard){var n=this._items[this._enterItemIndex];
n&&this.trigger("ahead",{item:n,val:"link"===n.getMod("interact")?n.elem("text").text():n.val()})}},_onKeyPress:function(t){if(t.which===this.__self.keyboard.enter&&~this._enterItemIndex&&this._enterItemByKeyboard){var e=this._items[this._enterItemIndex];
e&&(t.preventDefault(),this._onSelectItem(e,!0))}},_enterByKeyboard:function(t){var e=t-39,n=this._items.length,i=this._enterItemIndex+e;
return-1===i||i===n?(this._enterItemIndex=i,this._unselectItems(this._items[i]),this.trigger("out",{val:this._text,byKeyboard:!0})):(0>i?i=n-1:i>=n&&(i=0),this._onEnterItem(this._items[i],!0),void 0)
},_onEnterItem:function(t,e){this._enterItemIndex=this._getItemIndex(t),this._enterItemByKeyboard=e,this._unselectItems(),t.onEnter(e)
},_onLeaveItem:function(t){this._clearItems()._unselectItems(t)}},{keyboard:{enter:13,left:37,up:38,right:39,down:40},live:function(){this.liveBindTo("mousedown",function(){this._onDownItem()
})}}),_borschik("p5Oz7ci6xrAm6qFErv_c1SIsT_k")&&BEM.DOM.decl("suggest2",{setRequestUrl:function(t){return this.getModel().getProvider().getRequestUrl=t,this
},_onChange:function(t,e){e&&e.noSuggest||this.__base.apply(this,arguments)}}),_borschik("7h1KDJvpuB7WA_M_Kleiis5TrFw")&&BEM.decl("suggest2-model",{onSetMod:{js:{inited:function(){this._requests=[]
}}},destruct:function(){return this._provider&&this._provider.destruct(),this.__base.apply(this,arguments)
},getProvider:function(){return this._provider?this._provider:(this._provider=this.setProvider(this.params),this._provider)
},setProvider:function(t){return this._provider=BEM.create("suggest2-provider",t),this._provider},getCancelRequestConditions:function(){return[{block:"suggest2",show:!1},{block:"suggest2",event:"select"},{block:"suggest2",event:"out"},{block:"suggest2-item",show:!1},{block:"suggest2-popup",event:"hide"},{suggest:!1},{source:"sample"}]
},request:function(t,e,n){var i=this._isNeedRequest(t,n);if(!i.need)return this.trigger("reject",{val:t,pos:e,code:i.code,reason:i.reason||{}});
var o={val:t,requestTime:(new Date).getTime()};return this.trigger("request",{val:t,pos:e}),this.getProvider().get(t,e,function(t,e,n){o.responseTime=(new Date).getTime(),this._requests.push(o),this._onResponse(t,e,n)
}.bind(this)),this},isTimeInRequestInterval:function(t){for(var e=this._requests.length-1;e>=0;e--)if(t>this._requests[e].requestTime&&t<this._requests[e].responseTime)return!0;
return!1},_isNeedRequest:function(t,e){if(""===t&&!this.params.requestOnEmptyInput)return{need:!1,code:2};
if(!e)return{need:!0};var n,i=this.getCancelRequestConditions();t:for(var o=0;o<i.length;o++){n=i[o];
for(var s in n)if(n.hasOwnProperty(s)&&n[s]!==e[s])continue t;return{need:!1,code:1,reason:{condition:n}}
}return{need:!0}},_onResponse:function(t,e,n){this.trigger("response",{val:t,pos:e,data:n})}}),_borschik("bPsQBhIkrNVYN5ADOUed_RSjDg4")&&BEM.decl("suggest2-provider",{getDefaultParams:function(){return{cache:!1,type:"GET",dataType:"jsonp",timeout:2e3}
},get:function(t,e,n){this._lastText!==t&&(this._lastText=t,$.ajax(this._extendParamsData(this.getRequestData(t,e))).done(function(i){n.call(this,t,e,this.convert(i))
}.bind(this)).error(function(){n.call(this,t,e,{items:[]})}.bind(this)))},convert:function(t){return{orig:t[0],items:t[1],meta:t[2]}
},getRequestData:function(t,e){var n={};return BEM.blocks["suggest2-detect"].isSupportInlineSVG()&&(n.svg=1),$.extend({part:t,pos:e},n)
},getRequestUrl:function(){return this.params.url},_extendParamsData:function(t){return this.params.url=this.getRequestUrl(),this.params.data=$.extend(this.params.data||{},t),this.params
},_lastText:void 0}),_borschik("JRWQrE8GGi85Lai1MemaubDSJWw")&&BEM.decl("suggest2-provider",{getRequestData:function(){return $.extend(this.__base.apply(this,arguments),{"prev-query":BEM.blocks["i-global"].param("query")})
},getRequestUrl:function(){return this.params.url},_extendParamsData:function(){return this.params.url=this.getRequestUrl(),this.__base.apply(this,arguments),this.params
}}),_borschik("6gG2EomLQT3WXy7yU9wtK2LeDCI")&&BEM.decl("suggest2-view",{html:function(t,e){return BEMHTML.apply(this.build(t,e))
},build:function(t,e){return{block:"suggest2",elem:"content",mods:{theme:"normal"},content:this.buildItems(t,e)}
},buildItems:function(t){return t.reduce(function(t,e){return t.push(this.buildItem(e)),t}.bind(this),[])
},buildItem:function(t){var e=this.__self._getPrefs(t),n=this.__self._getType(t,e),i="html"===n?{}:{type:n};
return this._getItemByType(t,e,n,{text:{elem:"text",content:this.__self._highlight(this.__self._getText(t,e),e)},mods:i,js:e.js||{},props:{},content:[]})
},_getItemByType:function(t,e,n,i){var o=i.text,s=i.mods,r=i.js,a=i.props,l=i.content;if(e.pers&&(s.personal="yes"),"fact"===n)l.push(o,{elem:"bullet"},{elem:"fact",content:t[2]});
else if("weather"===n)l.push(o,{elem:"icon",elemMods:{weather:t[3].replace("-","minus-").replace("+","plus-").replace(/_/g,"-")}},{elem:"fact",content:t[2]});
else if("traffic"===n)l.push(o,{elem:"icon",elemMods:{traffic:t[3]}},{elem:"fact",content:t[2]});else if("nav"===n)s.interact="link",a.url=this.__self._resolveUrl(t[4]),l.push({elem:"text",content:t[3]},{elem:"fact",content:t[2]});
else if("icon"===n){var c={};e.icon.forEach(function(t,e,n){Array.isArray(t)?c[t[0]]=t[1]:0===e&&(c[t]=n[e+1])
}),l.push(o,$.extend({elem:"icon",elemMods:{type:"favicon"}},c)),e.fact&&l.push({elem:"fact",content:e.fact})
}else"html"===n?(r.val=t[1],l.push(e.body)):l.push(o);return e.url&&(s.interact="link",a.url=this.__self._resolveUrl(e.url),e.target&&(a.target=e.target)),$.extend({block:"suggest2-item",mods:s,js:r,content:l},a)
}},{_getPrefs:function(t){if(!Array.isArray(t))return{};var e=t[t.length-1];return $.isPlainObject(e)?e:{}
},_getType:function(t,e){var n=Array.isArray(t)?t[0]||"text":"text";return"icon"!==n||e.icon?n:"text"
},_getText:function(t){return Array.isArray(t)?t[1]:t},_highlight:function(t,e){if(!e.hl)return t;var n,i=e.hl.sort(function(t,e){return t[0]-e[0]
}).filter(function(t){return t[0]>=0}),o=[],s=0;return i.length?(i.forEach(function(e){n=s>e[0]?s:e[0],o.push(t.slice(s,n)),o.push({elem:"highlight",content:t.slice(n,s=e[1])})
},this),o.push(t.slice(s)),o.filter(function(t){return!!t})):t},_resolveUrl:function(t){return(/[\/]{2}/.test(t)?"":"http://")+t
}}),_borschik("5YC0q8o6La9H-Ejl8HcJnJ-4dGw")&&BEM.decl("suggest2-view",{},{_getGroupType:function(t,e){return t.pers?"nah":~["nav"].indexOf(e)?e:"text"
},_getTextLabel:function(t){return BEM.I18N("suggest2",t)}}),_borschik("1oBjccxOecghFl0CvMAlwFfyqXc")&&BEM.decl("suggest2-input",{onSetMod:{js:{inited:function(){var t=this;
t._input=t.params.input,t.disableBrowserAutocomplete(),t.realVal(t.val()),t.bindEvents({change:function(e,n){t.trigger("change",n)
},clear:$.throttle(function(e,n){t.trigger("clear",n)},300)},t),t.bindSuggestEvents()}}},get:function(){return this._input
},focus:function(){return this._input.setMod("focused","yes"),this},blur:function(){return this._input.delMod("focused"),this
},getControl:function(){return this._input.elem("control")},val:function(){return this._input.val.apply(this._input,arguments)
},valWithoutSuggest:function(t,e){return this._input.val.call(this._input,t,$.extend(e,{suggest:!1}))
},realVal:function(t){return void 0===t?this._realVal:("string"==typeof t&&(this._realVal=t),this._realVal)
},width:function(){return this._input.domElem.width()},getCaretPosition:function(){var t,e=this.getControl()[0],n=this.val().length;
return document.selection?(t=document.selection.createRange(),t.moveStart("character",-n),t.text.length):e.selectionStart||0===e.selectionStart?e.selectionStart:n
},moveCaretToEnd:function(){var t=this.getControl()[0],e=t.value.length;if("number"==typeof t.selectionStart)t.scrollLeft=999999,t.setSelectionRange(e,e);
else if("undefined"!=typeof t.createTextRange){t.focus();var n=t.createTextRange();n.collapse(!1),n.select()
}return this},disableBrowserAutocomplete:function(){var t=this._input.hasMod("focused");t&&this._input.delMod("focused"),this.getControl().attr({autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:"false","aria-autocomplete":"list"}),t&&this._input.setMod("focused","yes")
},bindEvents:function(t,e){return Object.keys(t).forEach(function(n){this._eventsFilter(n).on(n,t[n].bind(e||this))
},this),this},bindSuggestEvents:function(){var t=this.params.suggest;return t.on({out:function(t,e){this.a11yDeactive(),this._changeValueByEvent(t,e)
}},this),BEM.blocks["suggest2-item"].on(t.domElem,{tpah:function(t,e){this._changeValueByEvent(t,e),this.moveCaretToEnd()
},select:this._changeValueByEvent,enter:function(t,e){this.a11yActive(e.id),e.byKeyboard&&this.params.updateOnEnterByKeyboard&&this._changeValueByEvent(t,e)
}},this),this},a11yActive:function(t){this.getControl().attr("aria-activedescendant",t)},a11yDeactive:function(){this.getControl().removeAttr("aria-activedescendant")
},_eventsFilter:function(t){return~["blur","focus","change","clear"].indexOf(t)?this._input:this.getControl()
},_changeValueByEvent:function(t,e){this.val(e&&e.val||this.realVal(),$.extend({block:t.block.__self.getName(),event:t.type},e))
}}),_borschik("G4_TUza8DU6dzjOlX6BPe7pihNg")&&BEM.decl("suggest2-input",{onSetMod:{js:{inited:function(){this.__base.apply(this,arguments),this.bindEvents({keydown:function(t){t.which===this.params.suggest.__self.keyboard.enter&&this.trigger("enter")
}},this)}}}}),_borschik("9KrpyL3ofbnublGncJ9tbh1TQXQ")&&BEM.DOM.decl("suggest2-item",{val:function(){if(this.params.val)return this.params.val;
var t=this.elem("text");return(t.length?t:this.domElem).text()},onEnter:function(t){return this.setMod("selected","yes").triggerEvent("enter",{val:this.val(),byKeyboard:t})
},onLeave:function(){return this.delMod("selected")},onSelect:function(t){return this.triggerEvent("select",{val:this.val(),byKeyboard:t})
},triggerEvent:function(t,e){return this.trigger(t,{val:e.val,id:this.domElem.attr("id"),show:!1,byKeyboard:e.byKeyboard})
}}),_borschik("QIccT0_wugcRsNnmOHczc_wwF9Q")&&BEM.DOM.decl("suggest2-item",{},{live:function(){this.liveBindTo("mouseover mouseout mousedown leftclick",function(t){this.trigger(t.type,t)
})}}),_borschik("DImbpQu2wyM1qQCMSxG0QtTkyuw")&&BEM.DOM.decl({block:"suggest2-item",modName:"type",modVal:"nav"},{select:function(){var t=BEM.blocks["i-game"];
return t&&t.sendSerpEvent(this.elem("link").text()),this.__base(),!1}}),_borschik("JrDLdtoLYmlMQ14Sf7OSCvDvAEI")&&BEM.DOM.decl({block:"suggest2-item",modName:"interact",modVal:"link"},{val:function(){return!1
},onSelect:function(t){return t&&(window.location=this.elem("link").attr("href")),this.__base.apply(this,arguments)
}}),_borschik("xhnHTtTSLXm5BQryVAxZ726wwFU")&&BEM.DOM.decl({block:"search",modName:"paranja",modVal:"yes"},{onSetMod:{js:function(){this.__base.apply(this,arguments),this.paranja=this.findBlockInside("paranja"),BEM.DOM.append(BEM.DOM.scope,this.paranja.domElem),this.input.on({focus:this._showParanja.bind(this),blur:function(){this.suggest._isBlur&&!this.getMod("progress")&&this._hideParanja()
}},this),BEM.channel("serp-request").on({startProgress:function(){this._showParanja(),this.setMod("progress","yes")
},stopProgress:function(){this._hideParanja(),this.delMod("progress")}},this)}},_showParanja:function(){this.paranja.open()
},_hideParanja:function(){this.paranja.close()}}),_borschik("L61zgDBlD9ydY5pjVVASQdfx7gs")&&BEM.decl({block:"suggest2-view",modName:"theme",modVal:"large"},{build:function(t,e){return{block:"suggest2",elem:"content",mods:{theme:"large"},content:this.buildItems(t,e)}
}}),_borschik("aaR21EmMGSMeSIcxmXgXHOEMyas")&&BEM.decl({block:"suggest2-view",modName:"group",modVal:"type"},{buildItems:function(t){var e,n;
return t.reduce(function(t,i){var o=this.__self._getPrefs(i),s=this.__self._getType(i,o),r=this.__self._getGroupType(o,s);
return e!==r&&(e=r,n=[],t.push({block:"suggest2",elem:"group",content:[{elem:"title",content:this.__self._getTextLabel(e)},{elem:"items",content:n}]})),n.push(this.buildItem(i)),t
}.bind(this),[])}}),_borschik("TbDbovjUuyQ3kkLlpfPn0J-XMTI")&&BEM.decl({block:"suggest2-view",modName:"group",modVal:"label"},{buildItems:function(t){var e,n;
return t.reduce(function(t,i,o){var s=this.__self._getPrefs(i).label||"";if(e!==s){e=s,n=[];var r;r=s?s:0===o?"":this.__self._getTextLabel("text"),t.push({block:"suggest2",elem:"group",content:[{elem:"title",content:r},{elem:"items",content:n}]})
}return n.push(this.buildItem(i)),t}.bind(this),[])}}),_borschik("Q8rJxngxHFXvTMvVbTxS-4cbs1A")&&BEM.DOM.decl("suggest2-form",{onSetMod:{js:{inited:function(){this._isReady=!1,this.initNodes()
}}},getDefaultParams:function(){return{inputName:"input",buttonName:"button",popupName:"popup"}},getOwner:function(){},isReady:function(){return this._isReady
},initNodes:function(){var t=this.getNodes();t.forEach(function(t){t.suggest.init()}),this._isReady=!0,this.trigger("ready",{nodes:t})
},getNodes:function(){return this.getNodeList().map(function(t){var e=t.suggest,n=e.params;return n.input=t.input,n.button=t.button,n.form=this,n["suggest2-popup"]=BEM.create("suggest2-popup",{suggest:e,popup:e.findBlockOn(this.params.popupName),owner:this.getOwner(t)||n.input}),n["suggest2-input"]=BEM.create("suggest2-input",{suggest:e,input:n.input,updateOnEnterByKeyboard:n.updateOnEnterByKeyboard}),t.counter&&(t.counter.params.suggest=e,t.counter.params.form=this,n.counter=t.counter),this.bindFormEvents(t),t
},this)},bindFormEvents:function(t){var e=this;return t.button&&t.button.bindTo("click",function(t){e.trigger("button-click",t)
}),e.bindTo("submit",function(t,n){e.onSubmit(t,n)}),e},submit:function(t){return this.domElem.trigger("submit",t||{}),this
},onSubmit:function(t,e){t.data=e||{},this.trigger("submit",t)},getNodeList:function(){var t=this,e=[];
return t.elem("node").each(function(n,i){var o=$(i),s=t.findBlockInside(o,"suggest2"),r={input:t.findElem(o,"input"),button:t.findElem(o,"button")};
e.push({node:o,suggest:s,counter:t.findBlockOn("suggest2-counter"),input:t.findBlockOn(r.input,t.params.inputName),button:t.findBlockOn(r.button,t.params.buttonName),popup:s.findBlockOn(t.params.popupName)})
}),e}}),_borschik("voLNVT6Fr9Mrt2sXAiXtFN2PlpE")&&BEM.DOM.decl("suggest2-counter",{onSetMod:{js:{inited:function(){this.clear()
}}},getDefaultParams:function(){return{submitBySelect:!1,preventSubmit:!0,host:"//yandex.ru",path:"clck/jclck",dataUrl:"http://ya.ru",params:{},timeout:300}
},metaProps:{exprt:"exprt",r:"region",log:"log"},clear:function(){var t=this;return t._params={user_input:"",text:""},t._times=[],t._path={service:t.params.service,state:"not_shown",index:0,personal:"nah_not_shown",submit:""},t._ratio={len:0,queryLen:0,actionsCount:0},t._firstChange=0,t._lastChange=0,t._sinceChange={first:0,last:0},t._selectedText="",t._session=0,t._meta={},t._afterSendAjaxCallback,t
},submit:function(){var t=this,e=t.params.suggest.params["suggest2-input"];t._params.text=e.val(),t._params.pos=e.getCaretPosition(),t._selectedText&&t._selectedText!==t._params.text&&(t._path.state="edit"),t.sendAjax(t.getUrl()),this.trigger("submit",this._getSubmitEventData()).clear(),this._params.prev_query=e.val()
},_getSubmitEventData:function(){var t=this;return{path:t._path,times:t._times,prev_query:t._params.prev_query,user_input:t._params.user_input,text:t._params.text,pos:t._params.pos,ratio:t._ratio,since_first_change:t._sinceChange.first,since_last_change:t._sinceChange.last,session:t._session,meta:t._meta,url:t.getUrl()}
},sendAjax:function(t){return $.ajax({type:"GET",url:t,dataType:"script",timeout:this.params.timeout,cache:!0,async:!this.params.preventSubmit}).always(function(){this._afterSendAjaxCallback&&this._afterSendAjaxCallback()
}.bind(this)),this},afterSendAjax:function(t){return this._afterSendAjaxCallback=t,this},getUrl:function(){return this.params.host+["/",this.params.path].concat(this._getUrlParams()).join("/").replace(/(\/+)/g,"/")
},_getUrlParams:function(){var t=this;return this._getParamsList().concat(t._getData()).reduce(function(e,n){return e.concat(t._getParams(n))
},[]).concat(["/"])},_getParamsList:function(){var t=this;return[t.params.params,t._getPath(),t._params,t._getRatio(),t._getSinceChange(),t._getSession()]
},initValues:function(){return this._params.prev_query=this.params.suggest.params["suggest2-input"].val(),this
},bindEvents:function(){var t,e=this,n=e.params,i=n.suggest;return n.form.on("button-click",function(){"keyboard"!==e._path.submit&&(e._path.submit="button_by_mouse")
}),n.form.on("submit",e.submit.bind(e)),i.getModel().on({request:function(){t=new Date},response:function(n,i){e._path.personal=e._hasPersonal(i.data.items)?"nah_not_used":"nah_not_shown",e._meta=i.data.meta||{},e._addTime(new Date-t),e._setMetaProps(i)
}}),i.params["suggest2-input"].on({change:function(t,n){n&&"clear"!==n.source||(e._params.user_input=t.block.val(),e[e._firstChange?"_lastChange":"_firstChange"]=new Date),e._ratio.actionsCount++
},enter:function(){e._path.submit="keyboard"}}),i.params["suggest2-popup"].on({show:function(){e._path.state="not_used"
},hide:function(t,n){"empty"===n.response&&(e._path.state="not_shown")}}),BEM.blocks["suggest2-item"].on(i.domElem,{enter:function(t,n){n.byKeyboard&&e.params.suggest.params.updateOnEnterByKeyboard&&(e._selectedText=n.val,e._path.state="suggest")
}}),i.on({select:function(t,i){e._path.state=i.byKeyboard?"keyboard":"mouse",e._path.index=i.itemIndex+1,e._selectedText=i.val,i.item.hasMod("personal")&&(e._path.personal="nah_used"),n.submitBySelect&&(e._path.submit=i.byKeyboard?"keyboard":"click_by_mouse",e._params.pos=i.pos,e._params.text=e._selectedText,e.submit())
}},e),e},_hasPersonal:function(t){return t.some(function(t){return 1===BEM.blocks["suggest2-view"]._getPrefs(t).pers
})},_setMetaProps:function(t){t.data.meta&&Object.keys(this.metaProps).forEach(function(e){this._params[this.metaProps[e]]=t.data.meta[e]||""
},this)},_getParams:function(t){return Object.keys(t).reduce(function(e,n){return""===t[n]?e:(e.push(n+"="+encodeURIComponent(t[n]).replace(/%5B/g,"[").replace(/%5D/g,"]").replace(/%2C/g,",")),e)
},[])},_getPath:function(){return{path:[this._path.service,this._path.state,"p"+this._path.index,this._path.personal,this._path.submit].join(".")}
},_getSession:function(){return this._session=(new Date).getTime()+Math.round(1e4*Math.random()),{session:this._session}
},_getSinceChange:function(){return{since_first_change:this._getSinceTime("first"),since_last_change:this._getSinceTime("last")}
},_getSinceTime:function(t){var e="_"+t+"Change";return this._sinceChange[t]=this[e]?(new Date).getTime()-this[e]:0,this._sinceChange[t]
},_getRatio:function(){return this._ratio.len=this._params.user_input.length,this._ratio.queryLen=this._params.text.length,{ratio:[this._ratio.len,this._ratio.queryLen,this._ratio.actionsCount].join(".")}
},_addTime:function(t){return this._times.push(t),this._params.times=this._times.join("."),this},_getData:function(){return{"*data":"url="+this.params.dataUrl}
}}),_borschik("faIAhpa5g32GFT4ov10di2i1gBE")&&BEM.DOM.decl("suggest2-counter",{bindEvents:function(){var t,e=this,n=e.params,i=n.suggest;
return n.form.on("button-click",function(){"keyboard"!==e._path.submit&&(e._path.submit="button_by_mouse")
}),n.form.on("submit",e.submit.bind(e)),i.getModel().on({request:function(){t=new Date},response:function(n,i){e._path.personal=e._hasPersonal(i.data.items)?"nah_not_used":"nah_not_shown",e._meta=i.data.meta||{},e._addTime(new Date-t),e._setMetaProps(i)
}}),i.params["suggest2-input"].on({change:function(t,n){n&&"clear"!==n.source||(e._params.user_input=t.block.val(),e[e._firstChange?"_lastChange":"_firstChange"]=new Date),e._ratio.actionsCount++
},enter:function(){e._path.submit="keyboard"}}),i.params["suggest2-popup"].on({show:function(){e._path.state="not_used"
},hide:function(t,n){"empty"===n.response&&(e._path.state="not_shown")}}),BEM.blocks["suggest2-item"].on(i.domElem,{enter:function(t,n){n.byKeyboard&&e.params.suggest.params.updateOnEnterByKeyboard&&(e._selectedText=n.val,e._path.state="suggest")
}}),i.on({select:function(t,i){e._path.state=i.byKeyboard?"keyboard":"mouse",e._path.index=i.itemIndex+1,e._selectedText=i.val,i.item.hasMod("personal")&&(e._path.personal="nah_used"),n.submitBySelect&&(e._path.submit=i.byKeyboard?"keyboard":"click_by_mouse",e._params.pos=i.pos,e._params.text=e._selectedText)
}},e),e}}),_borschik("AISYGuQ0sOvYHsS7YEf4EcQekdY")&&BEM.DOM.decl("user",{onSetMod:{js:function(){this.__base.apply(this,arguments);
var t=this.findBlockOn("enter","button");if(null!==t){var e=this.domElem.prop("tabindex");this.domElem.attr({tabindex:-1,role:"group"}).removeAttr("aria-haspopup aria-expanded"),t.domElem.attr("tabindex",e),this._domik=BEM.create("domik_type_popup",{mods:this.params.domikMods,js:this.params.domikJs,hidden:this.findBlockInside({block:"domik",modName:"type",modVal:"hidden"})}),t.bindTo("leftclick tap",function(t){t.preventDefault(),this._domik.open()
}.bind(this))}}},destruct:function(){this._domik&&this._domik.destruct(),this.__base.apply(this,arguments)
}}),_borschik("hSYARxXNNbv5mIjKfWwovEE_mJs")&&BEM.DOM.decl({name:"button",modName:"pseudo",modVal:"yes"},{_onClick:function(t){this.__base.apply(this,arguments),this._href&&t.preventDefault()
}}),_borschik("Ek5aP7-8RGTMp-_oz57bC2NzhJg")&&BEM.decl("domik_type_popup",{destruct:function(){this._form&&this._form.destruct(),this._popup&&this._popup.destruct(),this.__base.apply(this,arguments)
},create:function(){if(this._created)return this;var t,e,n=this.__self,i=n._buildTypePopup(this._uniqId,this.params.mods,this.params.js),o=$(BEMHTML.apply(i)),s=this.params.hidden;
if(BEM.DOM.append(BEM.DOM.scope,o),e=this._popup=o.bem("popup"),t=this._form=this._popup.findBlockInside("auth"),s){var r=s.domElem;
t.getUsernameBlock().val(r.find("input[name=login]").change().val()),t.getPasswordBlock().val(r.find("input[name=passwd]").change().val()),delete this.params.hidden,s.destruct()
}return this._created=!0,this},open:function(){var t=this;return BEM.blocks["i-global"].param("login")?this:(this._created||this.create(),this.close(),this._popup.show(),this.afterCurrentEvent(function(){t._form.getUsernameBlock().setMod("focused","yes"),t._form.redraw()
}),this)},close:function(){return this._popup.hide(),this},isOpened:function(){return this._popup&&this._popup.isShown()||!1
},getFormBlock:function(){return this._form}},{_buildTypePopup:function(t,e,n){var i=(n||{}).explain;
return{block:"popup",mix:[{block:"domik",elem:"popup"}],mods:{type:"modal",position:"fixed","body-scroll":"no",theme:"ffffff"},underMods:{type:"paranja"},content:{elem:"content",content:{block:"domik",js:$.extend({_uniqId:t},n),mods:$.extend({type:"popup"},e),content:[i?{elem:"explain",content:i}:"",{block:"auth",mods:{content:"auto"}}]}}}
}}),_borschik("b0wszeqPOWXhMEBIhT4Y1VAYpEE")&&BEM.DOM.decl({block:"popup",modName:"position",modVal:"fixed"},{addChild:function(t){this.__base.apply(this,arguments),t.setMod("watch-scroll","no")
},_onFirstFocusableKeyDown:function(t){t.ctrlKey||t.altKey||t.metaKey||t.shiftKey&&9===t.which&&(t.preventDefault(),this._lastFocusable.focus())
},_onLastFocusableKeyDown:function(t){t.shiftKey||t.ctrlKey||t.altKey||t.metaKey||9===t.which&&(t.preventDefault(),this._firstFocusable.focus())
}}),_borschik("sfH9C4IGy1ip9PvIpfb14fsz6M8")&&BEM.DOM.decl({block:"popup",modName:"position",modVal:"fixed"},{getOwnerPos:function(){var t=this.__base.apply(this,arguments);
if(this._owner){var e=this._viewport;t.top-=e.scrollTop(),t.left-=e.scrollLeft()}return t}}),_borschik("PfHRek1FuKwWIOwzx2E-N9VF_OY")&&!function(){var t={};
BEM.DOM.decl({block:"popup",modName:"body-scroll",modVal:"no"},{onSetMod:{visibility:function(){return this.afterCurrentEvent(function(){this.domElem&&this.hasMod("visibility","visible")?t[this.params.uniqId]=!0:delete t[this.params.uniqId],this._manageScopeOverflow()
}),this.__base()}},destruct:function(){var e=this.params.uniqId;t[e]&&(delete t[e],this._manageScopeOverflow()),this.__base.apply(this,arguments)
},_enableScroll:function(){return this._scope.css({overflow:""}),this},_disableScroll:function(){return this._scope.css({overflow:"hidden"}),this
},_manageScopeOverflow:function(){var e=Object.keys(t).length;0===e?this._enableScroll():1===e&&this._disableScroll()
}})}(),_borschik("m0VPFZoFcdlllwwCJO0yyQcHUVw")&&!function(){function t(t,e,n,i){var o=t.__self,s=i.checkEmpty;
return[function(){return s&&0===e.length?[t._username,"fill-input"]:!0},function(){return s&&0===n.length?[t._password,"fill-input"]:!0
},function(){return/[а-яА-ЯёЁ]/.test(n)?[t._password,"wrong-keyboard-layout"]:!0},function(){return o._isUsernameValid(e,!s)?!0:[t._username,"wrong-characters"]
},function(){return o._isPasswordValid(n)?!0:[t._password,"wrong-characters"]},function(){return n&&n===e?[t._password,"wrong-password"]:!0
}]}BEM.DOM.decl("auth",{onSetMod:{js:{inited:function(){this._username=this.findBlockInside("username","input").on("change",this._onInputChange,this),this._password=this.findBlockInside("password","input").on("change",this._onInputChange,this),this._button=this.findBlockInside("button","button"),this._error=null,this._errorOwner=null,this.bindTo("submit",this._onBeforeSubmit),this.redraw()
}}},destruct:function(){this._error&&this._error.destruct(),this.__base.apply(this,arguments)},_checkInput:function(e){var n=this,i=t(n,n._username.val(),n._password.val(),{checkEmpty:e}),o=i.every(function(t){var e=t();
return Array.isArray(e)?(n.showError(e[0],BEM.I18N("auth",e[1])),e[0].elem("control").attr("aria-invalid",!0),!1):!0
});return o&&(this.hideError(),this._username.elem("control").removeAttr("aria-invalid"),this._password.elem("control").removeAttr("aria-invalid")),o
},_onInputChange:function(){this._checkInput(!1)},enableButton:function(){return this._button.delMod("disabled"),this
},disableButton:function(){return this._button.setMod("disabled","yes"),this},_onBeforeSubmit:function(t){return this._username.val(this._username.val().trim()),this._checkInput(!0)?(this._onSubmit(t),this.trigger("submit",t),void 0):!1
},_onSubmit:function(){if(this.disableButton(),this.elem("retpath").val(this.__self._getRetpath()),!this._timestamp){var t=this.__self._timestampName;
this._timestamp=$('<input type="hidden" name="'+t+'"/>').appendTo(this.domElem)}this._timestamp.val(+new Date);
var e=this.domElem.attr("action");e&&this.domElem.attr("action",e.replace(/^(https?:)?/,"https:"))},_getError:function(){if(this._error)return this._error;
var t=$(BEMHTML.apply(this.__self._buildError()));return BEM.DOM.append(this.domElem,t),this._error=this.findBlockOn(t,"popup"),this._errorMsg=this.findElem(t,"error"),this._error.on("hide",function(){this._errorOwner=null
},this),this._error},showError:function(t,e){var n=this._getError();return this._curErrorMsg!==e&&(this._errorMsg.text(e),this._curErrorMsg=e),this._errorOwner!==t&&(this._errorOwner=t,n.hide().show(t)),this
},hideError:function(){return this._error&&this._error.hide(),this},getUsernameBlock:function(){return this._username
},getPasswordBlock:function(){return this._password},getHaunterBlock:function(){return this._haunter||(this._haunter=this.findBlockInside("haunter","checkbox")),this._haunter
},submit:function(){return this.domElem.submit(),this},redraw:function(){var t,e=this.__self;return this._onInputChange(),t=this.findBlockInside("register","button"),t&&t.url(e._getRegisterURL()),t=this.findBlockInside("remember","button"),t&&t.url(e._getRememberURL()),this
}},{_fromName:"from",_retpathName:"retpath",_timestampName:"timestamp",_isUsernameValid:function(t,e){return this._isUsernameEmailValid(t)||this._isUsernameLoginValid(t)||this._isUsernamePhoneValid(t,e)
},_isUsernameEmailValid:function(t){return/^\s*[^@\s]+@[^@\s]+\s*$/.test(t)},_isUsernameLoginValid:function(t){return/^\s*[-а-яА-ЯёЁA-Za-z0-9.]+\s*$/.test(t)
},_isUsernamePhoneValid:function(t,e){return e?(t=t.trim(),t=t.replace(/-\)/,"+)"),t=t.replace(/(\d)-/g,"$1"),t=t.replace(/\((\d+)\)/,"$1"),t=t.replace(/(^|\d+)\(/,"$1"),t=t.replace(/^\+/,""),/^\d*$/.test(t)):/^\+?[-0-9]*(?:\([-0-9]+\))?[-0-9]+$/.test(t)
},_isPasswordValid:function(t){return!/[^\-a-zA-Z0-9`!@#$%^&*()_=+\[\]{};:"\|\\,.<>\/?]/.test(t)},_getRetpath:function(){return BEM.blocks["i-global"].param("retpath")
},_getPassportURL:function(t){var e=BEM.blocks["i-global"],n=e.param("passport-host"),i=e.param("passport-msg"),o=this._getRetpath();
return[n,"/passport?mode=",t,i?"&"+this._fromName+"="+encodeURIComponent(i):"",o?"&"+this._retpathName+"="+encodeURIComponent(o):""].join("")
},_getRegisterURL:function(){return this._getPassportURL("register")},_getRememberURL:function(){return this._getPassportURL("restore")
},_buildError:function(){return{block:"popup",mods:{autoclosable:"no"},js:{directions:["right","left"]},attrs:{role:"alert","aria-live":"assertive","aria-atomic":!0},content:[{elem:"tail"},{elem:"content",mix:[{block:"auth",elem:"error"}]}]}
}})}(),_borschik("8HuK6X5SQDrsntZClirOf6pgffo")&&BEM.DOM.decl("auth",{onSetMod:{js:{inited:function(){var t=this;
t.__base.apply(t,arguments);var e=document.createElement("b");e.innerHTML="<!--[if IE 9]><i></i><![endif]-->",1===e.getElementsByTagName("i").length&&t._username.elem("control").add(t._password.elem("control")).keydown(function(e){return 13===e.which?(t.submit(),!1):void 0
})}}}}),_borschik("nt8Z1jIII0CUhBo2aH9GNFavEGU")&&BEM.DOM.decl("popup",{onSetMod:{js:function(){this.__base(),this._tailPos={}
}},_calcTailPos:function(t){var e=t.to,n=this._positions[t.key],i=t.tail.axis,o={};return"top"===e||"bottom"===e?o.left=this._calcTailLeft(i,n):("left"===e||"right"===e)&&(o.top=this._calcTailTop(i,n)),o
},_calcTailTop:function(t,e){var n=0,i=this.getOwnerSize(),o=this.getOwnerPos(),s=this.params.tail.width,r=this.getPopupSize(),a=r.height,l=o.top-e.top,c=e.top+r.height-(o.top+i.height);
return l>0&&(n+=l,a-=l),c>0&&(a-=c),"middle"===t?(a-=s,n+=a/2):"bottom"===t&&(a-=s,n+=a),0>n&&(n=0),n
},_calcTailLeft:function(t,e){var n=0,i=this.getOwnerSize(),o=this.getOwnerPos(),s=this.params.tail.width,r=this.getPopupSize(),a=o.left-e.left,l=r.width,c=e.left+r.width-(o.left+i.width);
return a>0&&(n+=a,l-=a),c>0&&(l-=c),"center"===t?(l-=s,n+=l/2):"right"===t&&(l-=s,n+=l),n},_calcOffsetByTail:function(t){var e=this.params.tail,n=e.height,i={};
switch(t.to){case"top":i={top:-n};break;case"bottom":i={top:n};break;case"right":i={left:n};break;case"left":i={left:-n}
}return i},_calcTailOffset:function(t){var e={},n=t.to,i=t.tail,o=i.offset,s=i.axis;return o?("top"===n||"bottom"===n?(e.left=0,"left"===s?e.left+=o.left:"center"===s?(o.left&&(e.left+=o.left),o.right&&(e.left-=o.right)):"right"===s&&(e.left-=o.right)):("left"===n||"right"===n)&&(e.top=0,"top"===s?e.top+=o.top:"middle"===s?(o.top&&(e.top+=o.top),o.bottom&&(e.top-=o.bottom)):"bottom"===s&&(e.top-=o.bottom)),e):!1
},_resetTailPos:function(t){return t?this._tailPos[t]=null:this._tailPos={},this},_pushTailPos:function(t,e){return this._pushPosTo(this._tailPos,t,e),this
}}),_borschik("Mpg1S5FtwPH-sZqoJLdJME4gfo4")&&!function(){function t(){}var e=BEM.DOM,n=28;e.decl("auth",{onSetMod:{js:{inited:function(){this.__base.apply(this,arguments),this._socialDropdown=null,this._initSocialProviders()
}}},destruct:function(){var t=this._socialDropdown;t&&t.domElem&&t.desruct(),this.__base.apply(this,arguments)
},_initSocialProviders:function(){var t=BEM.blocks["i-global"],e=t.param("social-providers"),n=this;if(e)n._createSocial(e);
else{var i=t.param("social-host");if(!i)return;n._getSocialProviders(i,function(t){n._createSocial(t)
})}},_getSocialProviders:function(t,e){var i=this.elem("social");i.css("height",n),$.getJSON(this.__self._getProvidersURL(t),function(t){i.css("height",""),e(t.providers)
})},_createSocial:function(t){return t.length?(e.update(this.elem("social"),BEMHTML.apply(this.__self._buildSocial(t,this._uniqId))),this._socialDropdown=this.findBlockInside("social","dropdown"),void 0):(this.elem("social").remove(),this.dropElemCache("social"),void 0)
},_onSocialClick:function(e){e.preventDefault();var n=BEM.blocks["i-global"];this._socialDropdown&&this._socialDropdown.hide(),BEM.blocks["social-broker"].start(function(){n.param("retpath")&&top.location.href!==n.param("retpath")?top.location.href=n.param("retpath"):top.location.reload()
},t,{provider:this.elemParams(e.data.domElem).provider})}},{live:function(){return this.__base.apply(this,arguments),this.liveBindTo("social-link","leftclick tap",function(t){this._onSocialClick(t)
}).liveBindTo("social-link","keyup",function(t){t.shiftKey||t.ctrlKey||t.altKey||t.metaKey||32===t.keyCode&&this._onSocialClick(t)
}),!1},_getProvidersURL:function(t){return t+"/providers2.jsonp?callback=?"},_buildSocial:function(t,e){var n,i,o=[];
if(t=t.filter(function(t){return t.enabled}),n=t.filter(function(t){return t.primary}).map(function(t){return{block:"auth",elem:"social-link",js:{provider:t.code},mix:[{elem:"social-icon",elemMods:{code:t.code}}],title:t.display_name}
}),o=o.concat(n),i=t.map(function(t){return{block:"auth",elem:"social-link",js:{provider:t.code},title:t.display_name,content:[{elem:"social-icon",elemMods:{code:t.code}},t.display_name]}
}),n.length<t.length){var s=BEM.I18N("auth","more");o.push({block:"dropdown",js:!0,content:[{block:"button",mods:{pseudo:"yes",theme:"pseudo",size:"s"},mix:[{block:"dropdown",elem:"switcher"}],attrs:{title:s,"aria-label":s},content:"· · ·"},{elem:"popup",content:{block:"auth",elem:"social-popup",mix:[{block:"auth",js:{uniqId:e}}],content:i}}]})
}return o}})}(),_borschik("CEBAiHppSZUbzStGmdZbYQGtNdc")&&BEM.decl("social-broker",{_windowWidth:500,_windowHeight:280,onSetMod:{js:{inited:function(){this._window=null,this._timer=0
}}},start:function(t,e,n){var i,o,s,r,a=this;if(this._cleanup(),this._onSuccess=t,this._onFailure=e,n=$.extend({},a._getDefaultParams(),n),i=n.startUrl+"?",r=n.popupName,delete n.startUrl,delete n.popupName,o=n.display,s=n.retpath,o&&"popup"!==o)n.retpath=n.retnopopup||n.retpath||window.location.href,delete n.retnopopup;
else{var l="ddom="+(n.ddom||(location.hostname===document.domain?"":document.domain));n.retpath+=(s.match("#")?"&":"#")+l
}return i+=Object.keys(n).reduce(function(t,e){return t.push(encodeURIComponent(e)+"="+encodeURIComponent(n[e])),t
},[]).join("&"),o&&"popup"!==o?(this._navigate(i),void 0):(this._window=window.open(i,r,a._getPopupParams()),this._window&&(this._window.focus(),clearInterval(this._timer),this._timer=setInterval(function(){a.isClosed()&&(clearInterval(a._timer),a.onFailure({status:"error"}))
},500)),void 0)},isClosed:function(){if(!this._window)return!0;try{return this._window.closed}catch(t){return!0
}},_navigate:function(t){window.location.href=t},_getDefaultParams:function(){var t=BEM.blocks["i-global"],e=t.param("id");
return{startUrl:t.param("social-startUrl")||t.param("social-host")+"/broker/start",retpath:t.param("social-retpath")||[location.protocol,"//",location.host,t.param("lego-path"),"/blocks-common/i-social/closer/i-social__closer.html"].join(""),retnopopup:t.param("social-retnopopup")||!1,consumer:e||"morda",popupName:"social_"+(e||"morda"),action_if_anonymous:"authorize",result_location:"fragment"}
},_getPositionedParams:function(t,e,n,i){return["scrollbars=yes, resizable=1, menubar=0, toolbar=0, status=0, location=0, directories=0",", left=",e,", top=",t,", width=",n,", height=",i].join("")
},_getPopupParams:function(){var t,e,n=this._windowWidth,i=this._windowHeight;return window.opera?(t=(screen.availWidth-n)/2,e=(screen.availHeight-i)/2):(t=(window.innerWidth-n)/2,e=(window.innerHeight-i)/2),t=Math.round(t),e=Math.round(e),this._getPositionedParams(e,t,n,i)
},_cleanup:function(){clearInterval(this._timer),this.isClosed()||this._window.close(),this._window=null
},onSuccess:function(t){this._cleanup(),this._onSuccess&&this._onSuccess(t)},onFailure:function(t){this._cleanup(),this._onFailure&&this._onFailure(t)
}},{start:function(){this._current&&this._current.destruct(),this._current=BEM.create("social-broker"),Lego.block["i-social"]={broker:this._current},this._current.start.apply(this._current,arguments)
},onSuccess:function(){this._current.onSuccess.apply(this._current,arguments)},onFailure:function(){this._current.onFailure.apply(this._current,arguments)
}}),_borschik("WUzKrSqK0LLBOkkWjsUB0c_ZrZs")&&BEM.DOM.decl("dropdown",{onSetMod:{js:function(){var t=this,e=t.params,n=t._popup=t.findBlockOn(t.elem(e.popupElem),"popup").on("show",function(){t.setMod("action","open").trigger("show")
}).on("hide",function(){t.setMod("action","closed").trigger("hide")});e.popupMethods.map(function(e){t[e]=n[e].bind(n)
});var i=t.params.switcherBlock,o=t.elem("switcher");i&&(t._switcher=t.findBlockOn(o,i).domElem),o.attr({"aria-haspopup":!0,"aria-expanded":!1})
},action:function(t,e){this.elem("switcher").attr("aria-expanded","open"===e)}},getPopup:function(){return this._popup
},getDefaultParams:function(){return{popupElem:"popup",popupMethods:["toggle","show","hide","setContent"]}
},destruct:function(){this._popup&&this._popup.domElem&&this._popup.destruct(),this.__base.apply(this,arguments)
},_toggle:function(){this._popup.toggle(this._switcher)},_onSwitcherClick:function(){this._switcher||(this._switcher=this.elem("switcher")),this._toggle()
},_onSwitcherKeyUp:function(t){if(!(t.shiftKey||t.ctrlKey||t.altKey||t.metaKey)){var e=this.elem("switcher")[0].tagName.toLowerCase();
"button"!==e&&("a"!==e&&13===t.which||32===t.which)&&(t.preventDefault(),this.params.switcherBlock||this._toggle())
}}},{live:function(){this.liveBindTo("switcher","leftclick tap",function(t){this._onSwitcherClick(t)}).liveBindTo("switcher","keyup",function(t){this._onSwitcherKeyUp(t)
})}}),_borschik("leHgF4hwEChStLH262biSuLuA78")&&BEM.DOM.decl("input",{onSetMod:{js:function(){this.__base.apply(this,arguments),(this._hasHint=Boolean(this.elem("hint")[0]))&&this.on("change",this._updateHint)._updateHint()
},focused:function(){return this.__base.apply(this,arguments)===!1?!1:(this._hasHint&&this._updateHint(),void 0)
}},_updateHint:function(){this.toggleMod(this.elem("hint"),"visibility","visible",!this.val())}}),_borschik("QeuXc4Hsu8_MI5kaI7Y0XK8PUe8")&&BEM.DOM.decl("checkbox",{name:function(t){var e=this.elem("control");
return"undefined"==typeof t?e.attr("name"):(e.attr("name",t),this)}}),_borschik("T0DCmxKcm9dCO_4rDXRHrEdNuTc")&&BEM.DOM.decl("checkbox",{onSetMod:{js:function(){this.setMod("checked",this.elem("control").prop("checked")?"yes":""),this._isControlFocused()&&this.setMod("focused","yes")
},focused:{yes:function(){return this.isDisabled()?!1:(this._isControlFocused()||this.elem("control").focus(),this.setMod(this.elem("box"),"focused","yes"),this.afterCurrentEvent(function(){this.trigger("focus")
}),void 0)},"":function(){this._isControlFocused()&&this.elem("control").blur(),this.delMod(this.elem("box"),"focused"),this.afterCurrentEvent(function(){this.trigger("blur")
})}},checked:function(t,e){return this.isDisabled()?!1:(this.elem("control").prop("checked","yes"===e),this.afterCurrentEvent(function(){this.trigger("change",{checked:"yes"===e})
}),this.setMod(this.elem("box"),"checked",e),void 0)},disabled:function(t,e){this.elem("control").prop("disabled","yes"===e)
}},isDisabled:function(){return this.hasMod("disabled","yes")},isChecked:function(){return this.hasMod("checked","yes")
},toggle:function(){this.toggleMod("checked","yes","")},val:function(t){var e=this.elem("control");return"undefined"==typeof t?e.val():(e.val(t),this)
},name:function(t){var e=this.elem("control");return arguments.length?(e.attr("name",t),this):e.attr("name")
},_onClick:function(){this.isDisabled()||this.setMod("focused","yes")},_onChange:function(t){t.target.checked?this.setMod("checked","yes"):this.delMod("checked")
},_onFocusInFocusOut:function(t){this.setMod("focused","focusin"===t.type?"yes":"")},_onMouseOverMouseOut:function(t){this.isDisabled()||this.setMod("hovered","mouseover"===t.type?"yes":"")
},_isControlFocused:function(){try{return this.containsDomElem($(this.__self.doc[0].activeElement))}catch(t){return!1
}}},{live:function(){this.liveBindTo("leftclick tap",function(t){this._onClick(t)}).liveBindTo("control","change",function(t){this._onChange(t)
}).liveBindTo("control","focusin focusout",function(t){this._onFocusInFocusOut(t)}).liveBindTo("mouseover mouseout",function(t){this._onMouseOverMouseOut(t)
})}}),_borschik("YyAEn5-8ibwBEKpgLbsDg7HgYvw")&&BEM.DOM.decl("user",{redraw:function(){return this}},{getLogoutUrl:function(){var t=BEM.blocks["i-global"],e=t.param("retpath"),n=t.param("yandexuid");
return[t.param("passport-host"),"/passport?mode=logout",n?"&yu="+n:"",e?"&retpath="+encodeURIComponent(e):""].join("")
}}),_borschik("xbcK__uEqzYuLKMxEAxGIU9tWas")&&BEM.decl("i-common__string",{},{cleverSubstring:function(){var t="…";
return function(e,n,i){return e.length>n+i?e.substring(0,n-1)+t:e}}(),escapeHTML:function(){var t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};
return function(e){return String(e).replace(/&(?!\w+;)|[<>"']/g,function(e){return t[e]||e})}}(),escapeRegExp:function(t){return t.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")
},highlight:function(t,e){if(!$.isArray(e))return t;var n,i=[],o=0,s=e.sort(function(t,e){return t[0]-e[0]
}),r=[],a="?",l=~t.indexOf(a),c=function(){for(var e,n=/\&#\d+;/gi;e=n.exec(t);)r.push(e[0]),t=t.replace(e[0],a)
},u=function(t){if(l)return t;for(;~t.indexOf(a)&&r.length;)t=t.replace(a,r[0]),r.shift();return t};return!l&&c(),s.forEach(function(e){n=o>e[0]?o:e[0],i.push({tag:"span",elem:"span",content:u(t.slice(o,n))}),i.push({tag:"em",elem:"em",content:u(t.slice(n,o=e[1]))})
},this),i.push({tag:"span",elem:"span",content:u(t.slice(o))}),i}}),_borschik("YrTEP_xGTWikHC3dQQtexdadIXo")&&BEM.DOM.decl("user",{onSetMod:{js:{inited:function(){if(this.__base.apply(this,arguments),this.elem("name").length){var t=this,e=t.elemParams("name");
e.isUglyUserName&&BEM.blocks["i-user-services"].get(function(n){var i=BEM.blocks["i-common__string"].cleverSubstring,o=n.displayName?n.displayName.name:n.login,s=i(o,e.maxLength,e.maxLengthRelative);
t.elem("name").text(s),t.trigger("update-name")})}}}},toggleCollapsed:function(t){return this.toggleMod("hide-name","yes","",t)
}}),_borschik("RBHiUEGUf7Ys26X-qKbKxwmEoVY")&&BEM.decl("i-user-services",{},{get:function(t){this._data?t(this._data):this._get(t)
},getApiUrl:function(){return BEM.blocks["i-global"].param("pass-host")+"/services?callback=?"},_callbacks:[],_get:function(t){var e=this;
e._callbacks.push(t),1==e._callbacks.length&&$.getJSON(e.getApiUrl(),{locale:BEM.blocks["i-global"].param("lang"),login:"yes","current-login":BEM.blocks["i-global"].param("login"),yu:$.cookie("yandexuid")},function(t){e._data=t,$.each(e._callbacks,function(){this(t)
}),e._callbacks.length=0})}}),_borschik("LreM3Uxj6PqLzwE2uTTGnU_BKdw")&&BEM.DOM.decl("user",{onSetMod:{js:{inited:function(){this.__base.apply(this,arguments),this._isRetina=BEM.blocks["i-ua"].hiDpi,this._isRetina&&this.updateIcon()
}}},_getIconPath:function(){var t=this.params.avatarHost,e=this.params.uid||BEM.blocks["i-global"].param("uid"),n=this._getIconSize(),i=(this._isRetina?"/islands-retina-":"/islands-")+n;
return[t,"/get-yapic/",e,i,"?rnd=",+new Date].join("")},_setIconBackground:function(t){var e=this.elem("icon");
e&&e.css("background-image","url("+t+")")},updateIcon:function(){this._setIconBackground(this._getIconPath())
},getDefaultParams:function(){return{avatarHost:"//avatars.yandex.net"}}}),_borschik("U1bMZGOFwPTVbzGf11XPiRCbio4")&&BEM.DOM.decl("user",{_getIconSize:function(){return"middle"
}}),_borschik("np-o3E6Lvl0wfPejbROsEUQkqEI")&&!function(t,e,n){t.DOM.decl({block:"user",modName:"notification-panel",modVal:"yes"},{onSetMod:{js:{inited:function(){this.__base.apply(this,arguments);
var e=t.blocks["i-global"];if(e.param("login")){this._ticker=this.findBlockInside("ticker");var n=this.findBlockOutside("header");
window.notificationPanel.init({container:this.params.notificationPanelContainer,contentRegion:e.param("content-region"),device:this.params.notificationPanelDevice,header:n&&n.domElem,lang:e.param("lang"),overflowHidden:this.params.notificationPanelOverflowHidden,retpath:e.param("retpath"),withoutParanja:this.params.notificationPanelWithoutParanja}),this.bindTo("leftclick tap",function(t){t.preventDefault(),this._onUserClick()
}),this.bindTo("keypress",function(t){t.shiftKey||t.ctrlKey||t.altKey||t.metaKey||32===t.which&&(t.preventDefault(),this._onUserClick())
}),this.channel("notification-panel-notice").on("click",this._onNotificationClick,this),this._loadData()
}}}},getDefaultParams:function(){var e=t.blocks["i-global"].param("content-region"),i="tr"===e?"com.tr":e;
return n.extend(this.__base(),{tickerUrl:"https://notifications.yandex."+i+"/api/1.x/user/ticker?callback=?"})
},destruct:function(){window.notificationPanel.destruct(),this.channel("notification-panel-notice").un("click",this._onNotificationClick,this),this._ticker&&this._ticker.destruct(),this._notice&&this._notice.destruct(),this.__base()
},_onNotificationClick:function(){window.notificationPanel.open(),this._ticker.hide()},_onUserClick:function(){window.notificationPanel.toggle(),this._ticker.hide(),this.channel("notification-panel-notice").trigger("close")
},_onTickerLoaded:function(e){e&&(this._ticker.val(e.ticker),this._hasNotification||(this._notice=t.blocks["notification-panel-notice"].create(),this._hasNotification=!0),this.channel("notification-panel-notice").trigger("open",e.tooltip))
},_loadData:function(){var e=t.blocks["i-global"];t.create("i-request_type_ajax",{url:this.params.tickerUrl,cache:!1,callbackCtx:this}).get({lang:e.param("lang"),"content-region":e.param("content-region"),yu:n.cookie("yandexuid")},this._onTickerLoaded)
}})}(BEM,BEMHTML,jQuery),_borschik("sNxpnX3V7RVg0Z5xblAH2NK-ioY")&&BEM.DOM.decl({block:"user",modName:"notification-panel",modVal:"yes"},{getDefaultParams:function(){return $.extend(this.__base(),{notificationPanelDevice:"desktop",notificationPanelOverflowHidden:!0})
}}),_borschik("MT9vi7qYkXBfWbF3GLyunemiIzc")&&BEM.DOM.decl({block:"user",modName:"notification-panel",modVal:"yes"},{onSetMod:{js:function(){this.__base.apply(this,arguments),this._page=this.findBlockOutside("b-page"),this._main=this._page.findBlockInside("main")
}},_onUserClick:function(){this.__base.apply(this,arguments),this._togglePanel(),this.afterCurrentEvent(function(){this.bindToWin("click",function(){this._togglePanel()
})})},_togglePanel:function(){var t=this.params.counter;this._userOpen?(this._userOpen=!1,w(this.domElem[0],t.off[0],t.off[1])):(this._userOpen=!0,w(this.domElem[0],t.on[0],t.on[1])),this.unbindFromWin("click")
}}),_borschik("oBlS3rc_NPFx2ZftxwfxEM55HuE")&&!function(t){var e=4e3,n="notification-panel-notice",i=27;
t.DOM.decl("notification-panel-notice",{onSetMod:{js:{inited:function(){this._ignoreClick=!1,this.bindTo("leftclick tap",this._onClick).channel(n).on("open",this._onOpen,this).on("close",this._onClose,this)
}},state:{open:function(){this._timer=setTimeout(this.close.bind(this),e),this.bindTo("mouseover",function(){clearTimeout(this._timer),this.unbindFrom("mouseover")
}).bindTo("close","leftclick tap",function(){this._ignoreClick=!0,this.close()}).bindToDoc("keydown",function(t){t.keyCode===i&&this.close()
}).bindToDoc("leftclick tap",function(t){$.contains(this.domElem,t.target)||this.close()})},close:function(){clearTimeout(this._timer),this.unbindFrom("outsideclick").unbindFrom("mouseover").unbindFrom("close","leftclick tap").unbindFromDoc("keydown").unbindFromDoc("leftclick tap")
}}},open:function(){return this.setMod("state","open"),this},close:function(){return this.setMod("state","close"),this
},text:function(e){var n="";return this.delMod("service"),e&&e.count&&(1===e.count&&e.services&&"gamification"===e.services[0]&&(n=t.I18N("notification-panel-notice","new-achievement"),this.setMod("service","gamification")),n=n||t.I18N("notification-panel-notice","n-new-notifications",{count:e.count})),this.findElem("inner").html(n),this
},destruct:function(){this.close().channel(n).un("open",this._onOpen,this).un("close",this._onClose,this),this.__base.apply(this,arguments)
},_onClick:function(){this.close(),this._ignoreClick||this.channel(n).trigger("click"),this._ignoreClick=!1
},_onOpen:function(t,e){e&&e.count&&(this.text(e),this.afterCurrentEvent(function(){this.domElem&&this.open()
}))},_onClose:function(){this.close()}},{live:!1,create:function(){var e=$(BEMHTML.apply(this.build())).bem(this.getName());
return t.DOM.append(document.body,e.domElem),e},build:function(){return{block:"notification-panel-notice",js:!0,content:[{elem:"inner"},{elem:"close"}]}
}})}(BEM),_borschik("zSPkRjKVpihsB1Zzk52v8JJ8pAU")&&!function(t,e){var n=".notification-panel_device_desktop{position:fixed;top:70px;right:0;bottom:0;width:360px;margin:0;padding:0;border:0;border-left:1px solid #e5e5e5;border-left:1px solid rgba(0,0,0,.1);-webkit-transition:-webkit-transform .15s linear;transition:transform .15s linear}.notification-panel_device_desktop.notification-panel_visibility_hidden{-webkit-transform:translateX(100%);transform:translateX(100%)}.notification-panel_device_desktop.notification-panel_visibility_visible{-webkit-transform:translateX(0);transform:translateX(0)}.notification-panel_device_touch-pad{position:fixed;top:0;right:0;bottom:0;width:360px;border:0;border-left:1px solid #e5e5e5;border-left:1px solid rgba(0,0,0,.1);-webkit-transition:-webkit-transform .15s linear;transition:transform .15s linear}.notification-panel_device_touch-pad.notification-panel_visibility_hidden{-webkit-transform:translateX(100%);transform:translateX(100%)}.notification-panel_device_touch-pad.notification-panel_visibility_visible{-webkit-transform:translateX(0);transform:translateX(0)}.notification-panel_device_touch-phone{width:100%}.notification-panel__iframe{position:absolute;top:0;left:0;overflow-x:hidden;overflow-y:auto;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;background-color:#fff}.notification-panel_device_touch-pad .notification-panel__iframe{background-color:rgba(255,255,255,.99)}.notification-panel__paranja{position:fixed;top:0;right:0;bottom:0;left:0;visibility:hidden;opacity:0;background:#000;background:rgba(0,0,0,.15);-webkit-transition:visibility 0 linear .3s,opacity .3s ease-out;transition:visibility 0s linear .3s,opacity .3s ease-out;-webkit-tap-highlight-color:rgba(0,0,0,0)}.notification-panel__paranja_opened_yes{visibility:visible;opacity:1;-webkit-transition:opacity .3s ease-out;transition:opacity .3s ease-out}",i=".notification-panel.notification-panel_visibility_visible{display:block}.notification-panel.notification-panel_visibility_hidden{display:none}.notification-panel__paranja{filter:progid:DXImageTransform.Microsoft.Alpha(opacity=15)}",o="https://notifications.yandex.{domain}",s="/{device}/{lang}/",r=".notificationPanel",a="open"+r,l="close"+r,c="notification-panel",u=c+"_visibility_visible",h=c+"_visibility_hidden",d=c+"__paranja",_=c+"__paranja_opened_yes",p=c+"__iframe",m="body",f="execScript"in t,g=e.documentMode<=9;
f&&e.documentMode<9&&(m="html"),t.notificationPanel={init:function(t){this._inited||(this._setParams(t),this._setEvents(),this._inited=!0)
},open:function(t){var e=this;this._iframeInited?this._open(t):(this._clearTimerOpen(),this._buildIframe(),this._iframeInited=!0,this._timerOpen=setTimeout(function(){e._open(t)
},0))},close:function(t){var n=this;this._iframeInited&&this.isOpened()&&(this._clearTimerOpen(),this._$panel.removeClass(u).addClass(h),this._$paranja&&(this._$paranja.removeClass(_).off("click",this._onclose),$(e).off("keypress",this._onesc).off("click",this._onclose)),this._params.overflowHidden&&(g?this._unsetOverflow():this._timerOverflow=setTimeout(function(){n._unsetOverflow()
},300)),t||this._postMessage(l),this._trigger(l))},toggle:function(){this.isOpened()?this.close():this.open()
},isOpened:function(){return this._iframeInited?!!this._$panel.hasClass(u):!1},destruct:function(){this._iframeInited&&(this._$paranja&&(this._$paranja.remove(),this._$paranja=null),this._unsetOverflow(),this._$iframe.remove(),this._$iframe=null,this._$panel.remove(),this._$panel=null,$(this._css).remove(),this._css=null,this._clearTimerOpen(),this._iframeInited=!1,$(t).off("message",this._onmessage))
},_iframeInited:!1,_open:function(t){if(this._iframeInited&&!this.isOpened()){var n=this;this._clearTimerOpen(),this._$panel.removeClass(h).addClass(u),this._$paranja&&(this._$paranja.addClass(_).on("click",this._onclose),setTimeout(function(){$(e).on("keypress",n._onesc).on("click",n._onclose)
},0)),this._setOverflow(),t||this._postMessage(a),this._trigger(a)}},_trigger:function(e,n){if(e){var i=t.BEM;
"undefined"!=typeof i&&i.channel&&(e=e.split(".")[0],i.channel(c).trigger(e,n))}},_setParams:function(e){e=e||{},this._params={lang:e.lang||"ru",contentRegion:e.contentRegion||"ru",retpath:e.retpath||t.location.href,device:e.device||"desktop",header:e.header,container:e.container||"body",withoutParanja:e.withoutParanja,overflowHidden:e.overflowHidden,linkTarget:e.linkTarget,host:e.host||o,path:e.path||s}
},_postMessage:function(t){try{this._$iframe[0].contentWindow.postMessage(t,"*")}catch(e){}},_buildIframe:function(){var e=$(this._params.container),o=[c,this._getDeviceClass(c),h].join(" ");
this._css=this._addCSS(n+(g?i:"")),"touch-phone"===this._params.device||this._params.withoutParanja||(this._$paranja=$('<div class="'+d+'"></div>'),this._$paranja.appendTo(e)),this._$panel=$('<div class="'+o+'"></div>'),this._$iframe=$("<iframe/>",{"class":p,src:this._getUrl(),frameBorder:"0",allowTransparency:"true"});
var s=$(this._params.header);s.length&&this._$panel.css("top",s.outerHeight()+"px"),this._$iframe.appendTo(this._$panel),this._$panel.appendTo(e),$(t).on("message",this._onmessage)
},_getUrl:function(){var e=function(e,n){return e+"="+t.encodeURIComponent((""+n).substr(0,512))},n=this._params.host+this._params.path,i="tr"===this._params.contentRegion?"com.tr":this._params.contentRegion;
return n=n.replace("{device}",this._params.device).replace("{lang}",this._params.lang).replace("{domain}",i||"ru"),n+"?"+[e("ltarget",this._params.linkTarget||""),e("content-region",this._params.contentRegion),e("origin",t.location.protocol+"//"+t.location.host),e("retpath",this._params.retpath),e("rn",Math.floor(1e6*Math.random()))].join("&")
},_getDeviceClass:function(t){return t+"_device_"+this._params.device},_setEvents:function(){var t=this;
this._onmessage=function(e){try{var n=e.originalEvent.data;n&&"string"==typeof n&&(n===l?t.close(!0):t._trigger(n))
}catch(e){}},this._onesc=function(e){e.shiftKey||e.altKey||e.ctrlKey||e.metaKey||27===e.keyCode&&t.close()
},this._onclose=function(){t.close()}},_setOverflow:function(){var t;this._params.overflowHidden&&(t=$(m),this._overflow||(this._overflow=t.css("overflow")),t.css("overflow","hidden"),clearTimeout(this._timerOverflow),this._timerOverflow=null)
},_unsetOverflow:function(){this._params.overflowHidden&&this._overflow&&($(m).css("overflow",this._overflow),this._overflow=null,this._timerOverflow=null)
},_clearTimerOpen:function(){this._timerOpen&&(clearTimeout(this._timerOpen),this._timerOpen=null)},_addCSS:function(t){var n=e.createElement("style");
return n.type="text/css",e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet?n.styleSheet.cssText=t:"textContent"in n?n.textContent=t:n.innerHTML=t,n
}}}(this,this.document),_borschik("MAsdS1MaMXOGifcdInr2oVfX-hc")&&BEM.DOM.decl("ticker",{onSetMod:{js:{inited:function(){this._count=this.params.count
}}},show:function(){return this.setMod("state","normal")},hide:function(){return this.setMod("state","empty")
},val:function(t){if(!arguments.length)return this._count;var e=this.params.maxCount;return this._count=t,this.elem("value").attr("title",t).text(t>e?e+"+":t),t?this.show():this.hide(),this
}}),_borschik("W2OThg4oiLrQqcAsiz90_GllgG8")&&BEM.DOM.decl({block:"user",modName:"menu",modVal:"yes"},{onSetMod:{js:function(){this.__base.apply(this,arguments);
var t=60;this._dropdown=this.findBlockOutside("dropdown-menu")||0,this._dropdown&&this._dropdown.on("show",function(){this.bindToWin("scroll",$.throttle(this._hide,t,this)).redraw().domElem.attr("aria-expanded",!0)
}.bind(this)).on("hide",function(){this.unbindFromWin("scroll").domElem.attr("aria-expanded",!1)}.bind(this))
}},_hide:function(){this._dropdown&&this._dropdown.hide()},_onClick:function(t){t.preventDefault(),this.__base.apply(this,arguments),this._dropdown&&this._dropdown.toggle(this.elem("icon").length?this.elem("icon"):this.elem("name"))
},redraw:function(){if(this.__base.apply(this,arguments),!this._dropdown)return this;var t=this.__self.getLogoutUrl();
return this._dropdown._popup.findBlockInside("user").elem("logout").attr("href",t),this},destruct:function(){this._dropdown&&this._dropdown.domElem&&this._dropdown.destruct(),this.__base.apply(this,arguments)
}},{live:function(){return this.__base.apply(this,arguments),this.liveBindTo("leftclick tap",function(t){this._onClick(t)
}).liveBindTo("keyup",function(t){t.shiftKey||t.ctrlKey||t.altKey||t.metaKey||32===t.which&&this.domElem.click()
}),!1}}),_borschik("nw2ku2drTyYR76dTT1b0dXGC5So")&&BEM.DOM.decl({block:"user",modName:"menu",modVal:"yes"},{onSetMod:{js:function(){this.__base.apply(this,arguments);
var t=this.findBlockOutside("dropdown-menu"),e=this.params.counter;e&&this.bindTo("click",function(){var n=this.findBlockInside("notice"),i=n&&n.getCountNotice()>0?e.on.ticker:e.on.none;
t.hasMod("action","open")?w(this.domElem[0],e.off[0],e.off[1]):w(this.domElem[0],i[0],i[1])})}}}),_borschik("OQYYlNZLGXjmC2VipuLVfUuafP0")&&BEM.DOM.decl({block:"dropdown-menu",baseBlock:"dropdown"}),_borschik("FZpEEusp3gShvZDl5_9W9IuVxtU")&&!function(){BEM.DOM.decl("i-menu",{onElemSetMod:{item:{state:{current:function(t,e,n,i){if("disabled"==i)return!1;
var o=this.elem("item","state","current");this.delMod(o,"state").trigger("current",{prev:o,current:t})
}}}},onItemSelectorClick:function(t){var e=this._getItemByEvent(t);this.setMod(e,"state","current")},_getItemByEvent:function(t){return t.data.domElem.closest(this.buildSelector("item"))
}},{live:function(){this.liveBindTo("item-selector","leftclick",function(t){this.onItemSelectorClick(t)
})}})}(),_borschik("J5uv9qnea3XXvDtBKJ1BY1vH-HI")&&BEM.DOM.decl({block:"b-menu-vert",baseBlock:"i-menu"}),_borschik("1ZzeqhNlJkeOFr7a0Rrou1wiBfw")&&!function(){BEM.DOM.decl({name:"b-menu-horiz",baseBlock:"i-menu"})
}(),_borschik("MZnT3HhQInjUGrIboAJtyLU3khg")&&BEM.DOM.decl("user-menu-update",{onSetMod:{js:{inited:function(){var t=this;
t.updateInformer(t.onUpdateSuccess,t.onUpdateError)}}},updateInformer:function(t,e){var n=this;n._getExporter().get({key:$.cookie("yandexuid")},function(n){n.unread?t.apply(this,arguments):e&&e.call(this)
},e)},onUpdateSuccess:function(t){var e=parseInt(t.unread,10)||0,n=this.params.unreadMax;e&&n&&e>n&&(e=n+"+");
var i=e?e+" ":"";BEM.DOM.update(this.domElem,i+BEM.I18N("user","letter",{count:e}))},onUpdateError:function(){},_getExporter:function(){return this._exporter||(this._exporter=BEM.create("i-request_type_ajax",{url:this.__self.getExportApiUrl(),cache:!1,callbackCtx:this}))
},getDefaultParams:function(){return{unreadMax:99}}},{getExportApiUrl:function(){return BEM.blocks["i-global"].param("export-host")+"/for/unread.xml?callback=?"
}}),_borschik("sTaQQKMy826qGJs9MKmrtaoFENI")&&BEM.DOM.decl({name:"user",modName:"account",modVal:"yes"},{onSetMod:{js:function(){}},update:function(t,e,n,i,o){this.params={uid:e,pos:o,avatarHost:"//avatars.yandex.net"},this._isRetina=BEM.blocks["i-ua"].hiDpi,this.updateIcon(),this.elem("name").text(i),this.delMod("blank")
},getUid:function(){return this.params.uid},getPos:function(){return this.params.pos}}),_borschik("1DBjCx-VHSgAWerA3nSa-Sn2Rw8")&&BEM.DOM.decl("multi-auth",{onSetMod:{js:function(){this.findBlockOn("popup").on("show",this._onShow,this)
}},getDefaultParams:function(){return{accountsGate:"//pass.yandex.ru/accounts?yu=",maxAccounts:5}},_onShow:function(){this.getAccounts(),["add","edit","logout"].forEach(function(t){this.changeRetPath(this.findElem(t))
},this)},changeRetPath:function(t){t.attr("href",BEM.blocks.uri.parse(t.attr("href")).replaceParam("retpath",BEM.blocks["i-global"].param("retpath")).toString())
},getAccounts:function(){this._accountsInited||(this._accountsInited=!0,$.ajax({url:this.params.accountsGate+BEM.blocks["i-global"].param("yandexuid"),jsonp:"callback",dataType:"jsonp",timeout:5e3,success:this.addAccounts.bind(this)}))
},_buildCounterData:function(t,e,n){var i=this.params.switchUserCounterData,o=$.extend(!0,{},i.tree),s=e+(n||1)-1;
o.vars=i.actionVars[t];for(var r=e;s>=r;r++)o.children.push({ctag:i.childCtag,vars:i.childVarPos+"="+(parseInt(i.childVarP0)+r)});
return o},addAccounts:function(t){if((t&&t.accounts||[]).length>1){var e=this.findBlockInside({blockName:"user",modName:"blank",modVal:"yes"}),n=e.domElem.parents(".b-menu-vert__layout-unit, .b-menu-vert__item").last(),i=0,o=n;
t.accounts.forEach(function(e){if(e.uid!==t.default_uid&&e&&e.displayName){var s=e.displayName,r=n.clone();
o.after(r),o=r,this.findBlockInside(r,"user").update(r,e.uid,s.default_avatar,s.name,i++)}},this);var s=this._buildCounterData("show",0,i);
sh(s),this.setMod(this.elem("edit"),"visible","yes"),(!t["can-add-more"]||t.accounts.length>=this.params.maxAccounts)&&this.setMod(this.findElem("add"),"hidden","yes")
}},onAccountClick:function(t){var e=this.findBlockOutside(t,"user");sh(this._buildCounterData("click",e.getPos())),this.setMainAccount(e.getUid())
},setMainAccount:function(t){var e=this.elem("form"),n=BEM.blocks["i-global"];$("[name=uid]",e).val(t),$("[name=retpath]",e).val(n.param("retpath")),$("[name=yu]",e).val(n.param("yandexuid")),e.submit()
}},{live:function(){return this.liveBindTo("account-link","leftclick tap",function(t){this.onAccountClick($(t.target))
}),!1}}),_borschik("W24eamJ5S8u4sG6TLlfeNJJXIG0")&&BEM.DOM.decl("notice",{onSetMod:{js:{inited:function(){this._count=this.params.count
}}},setCount:function(t){t>=0||(t=0);var e=$(BEMHTML.apply({block:"notice",elem:"value",count:t,maxCount:this.params.maxCount})).text();
return this._count=t,this.elem("value").text(e),this},getCount:function(){return this._count}}),_borschik("60zSQ8PSdsoF6JNTzi6GSXtmj7c")&&BEM.DOM.decl("notice",{onSetMod:{js:function(){this.__base.apply(this,arguments),this._noticeRequest(function(t){this._countNotice=t.unread,t.unread>0&&(BEM.DOM.append(this.domElem,BEMHTML.apply({block:"notice",mods:this.hasMod("more","no")&&{more:"no"},elem:"count",count:t.unread})),this.setCount(t.unread),this.trigger("update"))
},function(){})}},_noticeRequest:function(t,e){BEM.create("i-request_type_ajax",{url:"//export.yandex.ru/for/unread.xml",callbackCtx:this}).get({key:$.cookie("yandexuid")},t,e)
},getCountNotice:function(){return this._countNotice}}),_borschik("Dw8R87o37dy32aKY8J3JGgV1Je0")&&BEM.DOM.decl("advanced-search",{initBlock:function(){if(!this._inited){this._inited=!0,this._vals=[];
var t=this.findBlocksInside({block:"dropdown",modName:"advanced",modVal:"yes"}),e=t.filter(function(t){return"safety"!=t.params.name
}),n=t.filter(function(t){return"safety"==t.params.name}),i=this.findBlocksOn(this.elem("input"),"input"),o=this.findBlockInside("suggest2");
o&&o.setDataConverter(function(t){var e=t[1].map(function(t){return["city",t[0],t[1]]});return{orig:t[0],items:e,meta:t[2]}
}),this.bindTo(this.domElem,"submit",function(){return this.submit(),!1}),e.concat(i).map(function(t,e){this._initSearchControl(t,e)
},this),n.map(function(t){this._initSettingsControl(t)},this),this.afterCurrentEvent(function(){e.map(function(t){t.on("change",function(){this.submit()
},this)},this)}),i.forEach(function(t){t.on("clear",function(){this.submit()},this)},this),this._initRegion(),this.params.opened&&this.open(),this._lteIe10=!!$.browser.msie&&parseInt($.browser.version,10)<=10,this._needRefresh=this._lteIe10&&this.__self._isKub()
}},_initSettingsControl:function(t){t.on("change",function(){var e={save:"family",family:t.val()[0].val,rnd:Math.random(),yandexuid:BEM.blocks["i-global"].param("yandexuid")};
this._needRefresh?(e.retpath=BEM.blocks.location.getInstance().getState().url,e.save=1,location.href=this.__self._domain()+this.__self._settingsUrl+"?"+$.param(e)):this.__self.getSettingsRequest().get(e,this.changeThis(this.submit),this.changeThis(this.submit))
},this)},_initSearchControl:function(t,e){this._vals.push(t.val()),t.on("change",function(t){this._vals[e]=t.block.val()
},this)},_initRegion:function(){var t=this.findBlockInside({block:"input",modName:"type",modVal:"city"}),e=this.findBlockInside("suggest2"),n=e&&e.getModel(),i={};
t&&(n.on("response",function(t,e){$.each(e.data.items,function(){i[this[1].toLowerCase()]=this[2]})}),t.on("change",function(t){var e=i[t.block.val().toLowerCase()];
e&&this.elem("hidden-value","for","region").val("-"+e)},this))},isDefaultState:function(){return!this._vals||!this._vals.some(function(t){return t&&""!=t
})},submit:$.debounce(function(){var t=this.findBlockOutside("b-page").findBlockInside("search");"function"==typeof t.reSubmit?t.reSubmit():t.domElem.submit()
},50),reset:function(){this.isDefaultState()||(this.findBlocksInside({block:"dropdown",modName:"advanced",modVal:"yes"}).map(function(t){t.reset()
},this),this.findBlocksInside("input").map(function(t){t.val("")}),this.submit())},getParams:function(){var t="&?[^&?]+=(?=(?:&|$))",e="|&?within=-1",n=new RegExp(t+e,"g");
return this.domElem.serialize().replace(n,"").replace(/^&/,"")}},{_request:null,_settingsUrl:"/search/settings",_tld:function(){return BEM.blocks["i-global"].param("tld")
},_isKub:function(){return"by"===this._tld()||"ua"===this._tld()||"kz"===this._tld()},_domain:function(){return this._isKub()?"//yandex.ru":""
},getSettingsRequest:function(){return this._request||(this._request=BEM.create("i-request_type_ajax",{dataType:"html",url:this._domain()+this._settingsUrl,type:"iframe",cache:!1})),this._request
},live:!0}),_borschik("rDtwNpORN8CvXml_59sMwo7SZRE")&&BEM.DOM.decl("advanced-search",{onSetMod:{js:function(){this.__base.apply(this,arguments),this.bindTo("action-link","mousedown",function(t){var e=BEM.blocks.location.getInstance().getUri().toString(),n=$(t.currentTarget),i=BEM.blocks.uri.parse(n.attr("href"));
n.attr("href",i.replaceParam("retpath",e).toString())})}}}),_borschik("d0XiTpUMpqd3BBB_IvTnFwDFxOg")&&BEM.HTML.decl("b-icon",{onBlock:function(t){var e,n={src:"//yastatic.net/lego/_/La6qi18Z8LwgnZdsAr1qy1GwCwo.gif",alt:""},i=t.params(),o=["alt","width","height"];
for(i.url&&(n.src=i.url);e=o.shift();)i[e]&&(n[e]=i[e]);t.tag("img").attrs(n)}}),_borschik("hGvVCXvZgCBCHMR4q4_Tn3XsyEY")&&BEM.DOM.decl({name:"dropdown",modName:"advanced",modVal:"yes"},{onSetMod:{js:function(){this.__base.apply(this,arguments),this._controls={},this._popup=this.findBlockInside("popup"),this._button=this.findBlockInside("button"),this._buttonText=this.findElem(this._button.domElem,"switcher-text"),0===this._buttonText.length&&(this._buttonText=this._button.elem("text")),this._buttonDefaultTitle=this._buttonText.text(),this._buttonIcon=this.findElem(this._button.domElem,"icon"),this._initWidth(),this._initControls(),this._afterInit()
}},_initControls:function(){this.__self.supportedControls.map(function(t){var e=this.findBlocksInside(t);
0!==e.length&&(this._controls[t]=e,e.map(this["_"+t+"Init"],this))},this)},_afterInit:function(){this.__self.supportedControls.map(function(t){this._controls[t]&&this["_"+t+"AfterInit"]()
},this)},_initWidth:function(){var t=this._getLongestTitle(),e=t.length>this._buttonDefaultTitle.length;
e&&this._buttonText.empty().append(t),this._fixWidth(),e&&this._buttonText.empty().append(this._buttonDefaultTitle)
},_getLongestTitle:function(){return this.findElem("text").toArray().map(function(t){return $(t).text()
}).sort(function(t,e){return e.length-t.length}).slice(0,this.params.maxItemsInTitle).join(", ")},_fixWidth:function(){this._popup.domElem.css({"min-width":this._button.domElem.width()+3}),this._button.domElem.css({"min-width":this._button.domElem.width()+3})
},_buildHidden:function(t,e){return BEMHTML.apply({block:"dropdown",mods:{advanced:"yes"},elem:"hidden-value",name:e,value:t})
},_radioboxInit:function(t){t.on("change",function(e,n){this._radioboxProcess(n.current,e.target.val(),t.name()),this.trigger("change")
},this)},_radioboxAfterInit:function(){var t=this._controls.radiobox[0];this._radioboxProcess(t.getCurrent(),t.val(),t.name())
},_getRadioboxText:function(){if(!this._controls.radiobox)return"";var t=this._controls.radiobox[0],e=this.findElem(t.getCurrent(),"text").text();
return+t.val()===this.params.defaultValue?"":e},_radioboxProcess:function(t,e){var n=this._getChekcboxText(),i=this.findElem(t,"text").text(),o=+e!==this.params.defaultValue?i:0!==n.length?n:this._buttonDefaultTitle;
this._buttonText.empty().append(o),this.params.withIcons&&this.setMod(this._buttonIcon,"type",this.params.withIcons[e]),this._generateHidden()
},_checkboxInit:function(t){t.on("change",function(){this._checkboxProcess(),this.trigger("change")},this)
},_checkboxAfterInit:function(){this._checkboxProcess()},_getChekcboxText:function(){if(this._controls.checkbox){var t=this._controls.checkbox.filter(function(t){return t.isChecked()
});return isOverflow=t.length>this.params.maxItemsInTitle,extend=isOverflow?" &hellip;":"",t.slice(0,isOverflow?this.params.maxItemsInTitle-1:this.params.maxItemsInTitle).map(function(t){return this.findElem(t.domElem,"text").text()
},this).join(", ")+extend}},_checkboxProcess:function(){var t=this._controls.checkbox.filter(function(t){return t.isChecked()
}),e=this._getChekcboxText(t),n=this._getRadioboxText(),i=0!==n.length?n:0!==e.length?e:this._buttonDefaultTitle;
this._buttonText.empty().append(i.length>0?i:this._buttonDefaultTitle),this._generateHidden()},_generateHidden:function(){this.params.generateHidden&&(this.findElem("hidden-value").remove(),this.__self.supportedControls.map(function(t){return this._controls[t]&&this["_"+t+"GenerateHidden"]()
},this))},_radioboxGenerateHidden:function(){this._controls.radiobox.map(function(t){var e=t.val();e!==this.params.defaultValue&&this.domElem.append(this._buildHidden(e,t.name()))
},this)},_checkboxGenerateHidden:function(){var t=this._controls.checkbox.filter(function(t){return t.isChecked()
});t.map(function(t){this.domElem.append(this._buildHidden(t.val(),t.name()))},this)},val:function(){return this.__self.supportedControls.map(function(t){return this._controls[t]&&this["_"+t+"Val"]()
},this).reduce(function(t,e){return e?(t||[]).concat(e):t})},_radioboxVal:function(){var t=this._controls.radiobox[0];
return t.val()!=this.params.defaultValue&&[{name:this.params.name,val:t.val()}]},_checkboxVal:function(){var t=this._controls.checkbox.filter(function(t){return t.isChecked()
}).map(function(t){return{name:this.params.name,val:t.val()}},this);return 0==t.length?void 0:t},reset:function(){return this.findElem("hidden-value").remove(),this.__self.supportedControls.map(function(t){this["_"+t+"Reset"]()
},this)},_radioboxReset:function(){this.params.defaultValue&&this._controls.radiobox.map(function(t){t.val(String(this.params.defaultValue))
},this)},_checkboxReset:function(){(this._controls.checkbox||[]).map(function(t){t.delMod("checked")})
},getDefaultParams:function(){return $.extend(this.__base.apply(this,arguments),{maxItemsInTitle:1,generateHidden:!0})
}},{supportedControls:["checkbox","radiobox"]}),_borschik("jj1ceDO4YA4A4mM816SQepyF_-c")&&BEM.decl({name:"input__dataprovider",baseBlock:"i-request_type_ajax"},{get:function(t,e){return this.__base({part:t},function(t){e.call(this,{items:t[1],metainfo:t[2]})
})}}),_borschik("rZ3U7KvFxHpWtK0c-en7cbw47f0")&&BEM.DOM.decl("radiobox",{name:function(t){var e=this.elem("control");
return"undefined"==typeof t?e.attr("name"):(e.each(function(e,n){n.name=t}),this)}}),_borschik("DTKb7GrrlVxYf6POQlJjiB8xDuk")&&!function(t,e){t.DOM.decl("radiobox",{onSetMod:{js:function(){var t=this;
t._val=t.findElem(t.elem("radio","checked","yes"),"control").val(),t.elem("control").each(function(e,n){var i=[];
if(t._isControlFocused($(n))&&i.push("focused"),n.checked&&i.push("checked"),i[0]){var o=t.__self._getRadioByElem($(n));
i.forEach(function(e){t.setMod(o,e,"yes")})}})},disabled:{yes:function(){this.setMod(this.elem("radio"),"disabled","yes")
},"":function(){this.delMod(this.elem("radio"),"disabled")}}},onElemSetMod:{radio:{focused:{yes:function(t){this.delMod(this.elem("radio","focused","yes"),"focused");
var e=this.findElem(t,"control");this._isControlFocused(e)||e.focus(),this.afterCurrentEvent(function(){this.trigger("focus",{current:t})
})},"":function(t){this.afterCurrentEvent(function(){this.trigger("blur",{prev:t})})}},checked:{yes:function(t){this._val=this.findElem(t,"control").prop("checked",!0).val();
var e=this.elem("radio","checked","yes");this.delMod(e,"checked"),this.trigger("change",{current:t,prev:e})
}},hovered:function(t){return!this.isDisabled(t)},disabled:function(t,e,n){t.find(this.buildSelector("control")).prop("disabled","yes"===n)
}}},_isControlFocused:function(t){try{return t[0]===this.__self.doc[0].activeElement}catch(e){return!1
}},isDisabled:function(t){return this.hasMod(t,"disabled","yes")},val:function(t){if("undefined"==typeof t)return this._val;
var e=this;return this.elem("control").each(function(n,i){return i.value===t?(e.setMod(e.__self._getRadioByElem($(i)),"checked","yes"),!1):void 0
}),e},name:function(t){var e=this.elem("control");return arguments.length?(e.attr("name",t),this):e.attr("name")
},getCurrent:function(){return this.findElem("radio","checked","yes")},uncheckAll:function(){var t=this.elem("radio","checked","yes");
return this.delMod(t,"checked").findElem(t,"control").prop("checked",!1),this._val=e,this.trigger("change",{current:e,prev:t}),this
},_onLeftClick:function(t){this.isDisabled(t.data.domElem)||this.setMod(t.data.domElem,"focused","yes")
},_onChange:function(t){this.setMod(this.__self._getRadioByElem(t.data.domElem),"checked","yes")}},{live:function(){return this.liveBindTo("radio","leftclick tap",function(t){this._onLeftClick(t)
}).liveBindTo("control","change",function(t){this._onChange(t)}).liveBindTo("radio","mouseover mouseout",function(t){this.setMod(t.data.domElem,"hovered","mouseover"===t.type?"yes":"")
}).liveBindTo("control","focusin focusout",function(t){this.setMod(this.__self._getRadioByElem(t.data.domElem),"focused","focusin"===t.type?"yes":"")
}),!1},_getRadioByElem:function(t){return t.closest(this.buildSelector("radio"))}})}(BEM),_borschik("pQHv5-NORKIf9_kHTgq6T8E-rLc")&&BEM.DOM.decl("radiobox",{getCurrent:function(){return this.findElem("radio","checked","yes")
}}),_borschik("wLAHrEnp0plnosm1y0EMq2gQLFg")&&BEM.DOM.decl({block:"suggest2",modName:"theme",modVal:"normal"},{getPopupWidth:function(){return this._input.width()
}}),_borschik("3wxMUlC8y-_gHcaDlXCGExUCCgg")&&!function(t){"use strict";t.ajaxPrefilter(function(t){return"iframe"===t.type.toLowerCase()?"iframe":void 0
}),t.ajaxTransport("iframe",function(e,n){var i,o="iframe-"+t.now(),s=e.url+"?"+t.param(n.data),r=function(){i.remove()
};return{send:function(e,n){i=t("<iframe></iframe>").hide().attr({name:o,id:o,src:s}),i.one("load",function(){try{var t=this.contentWindow?this.contentWindow.document:this.contentDocument?this.contentDocument:this.document,e=t.documentElement?t.documentElement:t.body;
n(200,e.innerHTML)}catch(i){n(500)}setTimeout(function(){r()},42)}),t("body").append(i)},abort:function(){i||(i.unbind("load"),r())
}}})}(jQuery),_borschik("iKP95yIJqIAKQlWC1EngIgKGg9s")&&BEM.DOM.decl("header",{onSetMod:{js:function(){this.__base.apply(this,arguments);
var t=this.findBlockInside("notice"),e=this.elem("mail");t&&e[0]&&t.on("update",function(){this.setMod(e,"notice","yes")
},this)}}}),_borschik("dZ-bN1ctjSaRLqEYfwfRX-P2Dg0")&&BEM.DOM.decl("header",{onElemSetMod:{action:{pressed:{yes:function(t){this.__base.apply(this,arguments),this.hasMod(t,"type","srv")&&this.bindToDoc("keydown",function(e){e.shiftKey||e.ctrlKey||e.altKey||27===e.keyCode&&this.delMod(t,"pressed","yes")
})},"":function(t){this.__base.apply(this,arguments),this.hasMod(t,"type","srv")&&this.unbindFromDoc("keydown")
}}}}}),_borschik("oPlptIKyMnAHb43er7ObsMrZ2Wc")&&!function(t,e){var n=function(t){try{return t.activeElement
}catch(e){}},i=t.browser,o=i.opera&&i.version<13;e.DOM.decl("slide",{onSetMod:{js:{inited:function(){var e=this;
t(e.params.rel).each(function(){t(this.elem||e.domElem).on(this.event,e[this.method].bind(e))})}},state:{open:function(){this.afterCurrentEvent(function(){this._bindFocusEvents()
}),this.domElem.attr("aria-hidden",!1).trigger("open")},close:function(){this._unbindFocusEvents(),this._returnFocus(),this.domElem.attr("aria-hidden",!0).trigger("close")
}}},open:function(){var t=this;this.setMod("state","open"),this._resize(t._getSlideParams())},close:function(){var t=this;
this.setMod("state","close"),this._resize(t._getSlideParams())},_bindFocusEvents:function(){this._lastFocused=t(n(document)||e.DOM.scope);
var i=this.__self._getFocusable(this.domElem);return this._firstFocusable=i.first(),this._lastFocusable=i.last(),0===this._firstFocusable.length?(this._skipReturnFocus=!0,void 0):(this.bindTo(this._lastFocused,"keydown",this._onLastFocusedKeyDown).bindTo(this._firstFocusable,"keydown",this._onFirstFocusableKeyDown).bindTo(this._lastFocusable,"keydown",this._onLastFocusableKeyDown),this._skipReturnFocus=!1,this.bindToDoc("mousedown.returnFocus",function(){this._skipReturnFocus=!0
}),void 0)},_unbindFocusEvents:function(){this.unbindFromDoc("mousedown.returnFocus"),this.unbindFrom(this._firstFocusable,"keydown"),this.unbindFrom(this._lastFocusable,"keydown"),this.unbindFrom(this._lastFocused,"keydown")
},_onLastFocusedKeyDown:function(t){t.ctrlKey||t.altKey||t.metaKey||9===t.which&&(t.preventDefault(),this[t.shiftKey?"_lastFocusable":"_firstFocusable"].focus())
},_onFirstFocusableKeyDown:function(t){t.ctrlKey||t.altKey||t.metaKey||t.shiftKey&&9===t.which&&(t.preventDefault(),this._lastFocused.focus())
},_onLastFocusableKeyDown:function(t){t.shiftKey||t.ctrlKey||t.altKey||t.metaKey||9===t.which&&(t.preventDefault(),this._lastFocused.focus())
},_returnFocus:function(){this._skipReturnFocus||this.afterCurrentEvent(function(){this._lastFocused.focus()
})},_resize:function(t){this._body=this._body||this.findBlockOutside("b-page");var e=this,n=this.domElem,i=t.dur,o=this.hasMod("state","open"),s="right"===t.dir,r={},a={};
o?(s&&this._body.setMod("overflow","hidden"),r[t.sizeType]=t.sizeVal,r[t.dir]=-t.sizeVal,a[t.dir]=0,n.css(r).css("visibility","visible").stop().animate(a,i,function(){s&&e._body.delMod("overflow")
})):(s&&this._body.setMod("overflow","hidden"),r[t.sizeType]="",r[t.dir]="",a[t.dir]=-t.sizeVal,n.stop().animate(a,i,function(){n.css("visibility","hidden").css(r),s&&e._body.delMod("overflow")
}))},_getSlideParams:function s(){if(!s[this._uniqId]){var e=0,n={t:{meth:"outerHeight",sizeType:"height",direction:"top"},r:{meth:"outerWidth",sizeType:"width",direction:"right"},b:{meth:"outerHeight",sizeType:"height",direction:"bottom"},l:{meth:"outerWidth",sizeType:"width",direction:"left"}}[this.getMod("dir")],i=this.getMod("dur");
this.domElem.children().each(function(){e+=t(this)[n.meth](!0)}),s[this._uniqId]={sizeType:n.sizeType,sizeVal:e,dir:n.direction,dur:+i}
}return s[this._uniqId]}},{live:!1,_getFocusable:function(e){var n=t.data(e,"slide-getFocusable-id");
n||(n=t.identify(),t.data(e,"slide-getFocusable-id",n)),n='*[data-slide-getFocusable-id="'+n+'"]';var i=o?"":"a[href], link, ";
return e.find(i+'*[tabindex], button, input:not([type="hidden"]), textarea, select, menuitem').filter(function(){var e=t(this),i=!0;
return parseInt(e.prop("tabindex"),10)<0||"hidden"===e.css("visibility")?!1:(t(this).parentsUntil(n).each(function(){var e=t(this);
return"none"===e.css("display")?i=!1:void 0}),i)})}})}(jQuery,BEM),_borschik("VJBZ_AYCxpHvYTYWLkdZGYwR7E8")&&BEM.DOM.decl("lang-switcher",{_onLangKeyUp:function(t){var e=t.data.domElem;
this.hasMod(e,"selected","yes")||!this.findBlockOn("popup").containsDomElem(e)||t.shiftKey||t.ctrlKey||t.altKey||t.metaKey||32===t.which&&e.click()
}},{live:function(){this.liveBindTo("lang","keyup",function(t){this._onLangKeyUp(t)})}}),_borschik("8XiRROfVb0RdDitETSkxYaEZEhw")&&BEM.DOM.decl("lang-switcher",{onSetMod:{js:function(){var t=this.findBlockOn("dropdown-menu")._popup.domElem;
this.langs=this.findElem(t,"lang")}}},{live:function(){this.liveBindTo("leftclick tap",function(){this.langs.each(function(){var t=$(this).attr("href"),e=BEM.blocks.location.getInstance();
t&&$(this).attr("href",BEM.blocks.uri.parse(t).replaceParam("retpath",e.getState().url).toString())})
})}}),_borschik("PiXHs9rIR1GwTkA5_TdnO6af0yg")&&BEM.DOM.decl({name:"link",modName:"pseudo",modVal:"yes"},{_onClick:function(t){t.preventDefault(),this.hasMod("disabled","yes")||this.afterCurrentEvent(function(){this.trigger("click")
})},_onKeyUp:function(t){t.shiftKey||t.ctrlKey||t.altKey||(13===t.which||32===t.which)&&(this.hasMod("disabled","yes")||this.afterCurrentEvent(function(){this.trigger("click")
}))}},{live:function(){this.__base.apply(this,arguments),this.liveBindTo({modName:"pseudo",modVal:"yes"},"leftclick tap",function(t){this._onClick(t)
}).liveBindTo({modName:"pseudo",modVal:"yes"},"keyup",function(t){this._onKeyUp(t)})}}),_borschik("O1OKTXAYiHgHOzJsUdd81JcZ3Z4")&&BEM.DOM.decl("content",{showRightPanel:function(){this.delMod(this.elem("right"),"hidden")
},hideRightPanel:function(){this.setMod(this.elem("right"),"hidden","yes")}}),_borschik("EKLwCKtFd_gg5t8BX68hpwVwvgg")&&BEM.DOM.decl("serp-adv",{onSetMod:{js:function(){if(this.params.counterUrl&&this.bindToWin("scroll",$.debounce(this._onScroll,100)),this.params.banner){if(this.params.banner.indexOf("flashldr019.js")<0)return this.elem("banner").html(this.params.banner);
var t=this,e=document.write,n="";document.write=function(){document.write=function(t){n+=t},$.ajax({url:"//yabs.yandex.ru/resource/flashldr019.js",cache:!0,dataType:"script",success:function(){return document.write=e,t.elem("banner").html(n)
}})},this.elem("banner").append(this.params.banner)}}},_onScroll:function(){BEM.DOM.win.scrollTop()+BEM.DOM.win.height()>=this.domElem.offset().top+15&&((new Image).src=this.params.counterUrl,this.unbindFromWin("scroll",this._onScroll))
}}),_borschik("b-0cojCiYBbBFtsurukP6PnBnbc")&&BEM.DOM.decl("serp-adv__banner",{onSetMod:{js:function(){window.swfobject?this.initFlash():this.flashErrorCallback()
}},initFlash:function(){var t=this,e=t.params;e.flashVersion&&!swfobject.hasFlashPlayerVersion(e.flashVersion)?this.flashErrorCallback():swfobject.embedSWF(e.flash,e.id,e.width,e.height,e.flashVersion,null,{color:"0xFFFFFF"},{allowscriptaccess:"always",wmode:"transparent"},"",function(n){n.success?(new Image).src=e.counter:t.flashErrorCallback()
})},flashErrorCallback:function(){if(this.params.html.indexOf("flashldr019.js")<0)return this.domElem.html(this.params.html);
var t=this,e=document.write,n="";document.write=function(){document.write=function(t){n+=t},$.ajax({url:"//yabs.yandex.ru/resource/flashldr019.js",cache:!0,dataType:"script",success:function(){return document.write=e,t.domElem.html(n)
}})},this.domElem.append(this.params.html)}}),_borschik("b4F7l_f07Vrisq91b5Ls1B3ZAoc")&&!function(){var t=/(?:^|\/\/)[^\s/?#]+(yandex|ya)\.[a-z\.]+/,e=/(?:^|\/\/)[^\s/?#]+wikipedia\.org/;
BEM.decl("i-game",{},{sendSerpEvent:function(n,i){var o={},s=BEM.blocks["i-global"];s.param("isGameEnabled")&&"com.tr"===s.param("tld")&&!t.test(n)&&(o.verb=e.test(n)?"serp.wikipedia_click":"serp.outlander_click",i&&(o.language=i),this.send(o))
}})}(),_borschik("UmgzYPhZgw55eU9bRi8NQfvi02Q")&&BEM.decl("i-game",{},{send:function(t){if(this._site||(this._site="yandex.com.tr",this._pid=BEM.blocks["i-global"].param("pid")),!this._pid||!t)return!1;
var e=new BEM.blocks.game,n={user:this._pid+"@yandex.com",site:this._site};return"string"==typeof t||"number"==typeof t?n["activity[verb]"]=t:Object.keys(t).forEach(function(e){n["activity["+e+"]"]=t[e]
}),e.send(n)}}),_borschik("m_bkfeo8m9quDlcKjHzkrm_ABhw")&&!function(){function t(t,n){return $.support.cors?$.ajax({url:o.addresses.activities.xhr,type:"POST",data:t,context:n}):window.XDomainRequest?e(t,n):$.Deferred().rejectWith(n,[{},"fail"]).promise()
}function e(t,e){var n=$.Deferred(),i=new window.XDomainRequest;return i.timeout=i.onerror=function(){n.rejectWith(e)
},i.onload=function(){var t;try{t=JSON.parse(i.responseText)}catch(o){return n.rejectWith(e)}n.resolveWith(e,[t,"success"])
},i.open("POST",o.addresses.activities.xhr),i.send($.param(t||{})),n.promise()}var n=[].slice,i=+new Date,o=BEM.decl("game",{__constructor:function(t,e){return e?this.send(e):(this.request=$.Deferred().rejectWith(this,[{},"Not sended",0]).promise(),$.extend(this,this.request))
},send:function(e){var o=i++,s=this.request=$.Deferred();return t(e,this).done(function(){var t=n.call(arguments,0,2);
t.push(o),s.resolveWith(this,t)}).fail(function(){s.rejectWith(this,[{},"fail",o])}),this.request=this.request.promise(),$.extend(this,this.request)
}});o.addresses={activities:{xhr:"http://gproxy.yandex.net/berlin/activities.json",jsonp:"http://gproxy.yandex.net/berlin/activities.jsonp"}}
}.call(BEM),_borschik("2y3Y1CEMucg8IBbh18a8GW_a0Wk")&&BEM.DOM.decl("serp-item",{onSetMod:{js:function(){this._bindBackgroundEvents()
}},_bindBackgroundEvents:function(){var t,e,n,i=5;this.bindTo(this.domElem,"mouseup pointerup",function(o){t||Math.abs(o.pageX-e)>i||Math.abs(o.pageY-n)>i||"A"===o.target.tagName||$(o.target).parents(this.__self.active).length||this.trigger("backgroundClick")
}),this.bindTo(this.domElem,"mousedown pointdown",function(i){e=i.pageX,n=i.pageY,t=window.getSelection&&""!==window.getSelection().toString()
})}},{active:["a",".serp-url",".check-button",".serp-item__preview",".serp-item__right"].join(",")}),_borschik("MTDL6ZWSfqf4T2VzbcKVYlIWEeE")&&BEM.DOM.decl("serp-item",{togglePreview:function(){if(this.__base.apply(this,arguments),$.browser.msie&&$.browser.version<9){var t=BEM.DOM.win.scrollTop(),e=this.findBlockOutside("main"),n=e&&e.elem("center");
if(!n.length)return;n[0].className=n[0].className,BEM.DOM.win.scrollTop(t)}}}),_borschik("oZa28fSByqPhWP03qczKoaJgcms")&&BEM.DOM.decl("serp-item",{onSetMod:{js:function(){this.__base();
var t=BEM.blocks["i-game"];if(t&&this.params.game){var e=this.params.game.url,n=this.params.game.lang;
$("a",this.domElem).each(function(i,o){$(o).click(function(){t.sendSerpEvent(e,n)})})}}}}),_borschik("J3oRMvdRWzjgFXEdmu48FClW1pc")&&BEM.DOM.decl("serp-item",{onSetMod:{js:function(){this.__base.apply(this,arguments),this.findBlocksOn("preview-btn","check-button").map(function(t){t.afterCurrentEvent(function(){t.on("change",this._onPreviewButtonStateChange,this)
},this),this._uncheckPreviewButton(t)},this)}},togglePreview:function(t){this._isActivePreview(t)?this.closePreview(t):this.openPreview(t)
},openPreview:function(t){this._isModernPreview(t)?this._modernPreviewOpen(t):this._legacyPreviewOpen(t),this.trigger("previewShow",{name:t})
},closePreview:function(t){this._isModernPreview(t)?this._modernPreviewClose(t):this._legacyPreviewClose(t)
},_onPreviewButtonStateChange:function(t){return this._skipToggle?(this._skipToggle=!1,void 0):(this.togglePreview(this.getMod(t.block.domElem,"name")),void 0)
},_legacyPreviewOpen:function(t){this._legacyPreviewClose(this._legacyPreviewGetActivePreviewId()),this._legacyPreviewSetActivePreviewId(t),this._checkPreviewButton(this._getCorrespondedButton(t)),this.setMod("expanded","yes"),this.setMod(this._legacyPreviewGet(t),"visibility","visible")
},_legacyPreviewClose:function(t){this._uncheckPreviewButton(this._getCorrespondedButton(t)),this._legacyPreviewSetActivePreviewId(null),this.delMod("expanded"),this.delMod(this._legacyPreviewGet(t),"visibility"),this.trigger("previewHide",{name:t})
},_legacyPreviewSetActivePreviewId:function(t){this._legacyPreviewActiveId=t},_legacyPreviewGetActivePreviewId:function(){return this._legacyPreviewActiveId
},_legacyPreviewGet:function(t){return this.elem("preview","name",t)},_legacyPreviewIsActive:function(t){return t===this._legacyPreviewGetActivePreviewId()
},_uncheckPreviewButton:function(t){t&&t.isChecked()&&(this._skipToggle=!0,t.toggle())},_checkPreviewButton:function(t){t&&!t.isChecked()&&(this._skipToggle=!0,t.toggle())
},_getCorrespondedButton:function(t){var e=this.elem("preview-btn","name",t);return this.findBlockOn(e,"check-button")
},_isActivePreview:function(t){return this._isModernPreview(t)?this._modernPreviewIsActive(t):this._legacyPreviewIsActive(t)
},_isModernPreview:function(t){return!this._legacyPreviewGet(t).length}}),_borschik("jCjArGqbsX94lqeDO2vDqxJX9M8")&&BEM.DOM.decl("serp-item",{onSetMod:{js:function(){this.__base.apply(this,arguments),this._main=this.findBlockOutside("main")
}},_modernPreviewOnPreviewUpdate:function(t,e){!e.partial&&this._modernPreviewDeactivate()},_modernPreviewOpen:function(t){this._modernPreviewPreloadSiblings(t),this.channel("content-preview").trigger("update",this._modernPreviewGetParams(t)),this._modernPreviewActivate(t),this._main.openPanel()
},_modernPreviewClose:function(){this._main.closePanel()},_modernPreviewActivate:function(t){var e=this._getCorrespondedButton(t);
this._modernPreviewSetActivePreviewId(t),this._modernPrevieSetActiveButton(e),this._modernPreviewBindDeactivationEvents(),this._modernPreviewSetVisualChanges(t),this._checkPreviewButton(e)
},_modernPreviewDeactivate:function(){var t=this._modernPreviewGetActiveButton();t&&t.findBlockOutside("serp-item")._uncheckPreviewButton(t),this.trigger("previewHide",{name:this._modernPreviewGetActivePreviewId()}),this._modernPreviewSetActivePreviewId(null),this._modernPrevieSetActiveButton(null),this._modernPreviewUnbindDeactivationEvents(),this._modernPreviewUnsetVisualChanges()
},_modernPreviewBindDeactivationEvents:function(){this._main.on("panelClosed",this._modernPreviewDeactivate,this),this.channel("content-preview").on("update",this._modernPreviewOnPreviewUpdate,this)
},_modernPreviewUnbindDeactivationEvents:function(){this._main.un("panelClosed",this._modernPreviewDeactivate,this),this.channel("content-preview").un("update",this._modernPreviewOnPreviewUpdate,this)
},_modernPreviewGetActiveButton:function(){return this.__self.modernPreviewActiveButton},_modernPrevieSetActiveButton:function(t){this.__self.modernPreviewActiveButton=t
},_modernPreviewSetActivePreviewId:function(t){this._modernPreviewActiveId=t},_modernPreviewGetActivePreviewId:function(){return this._modernPreviewActiveId
},_modernPreviewIsActive:function(t){return t===this._modernPreviewActiveId},_modernPreviewGetParams:function(t){return this.params.preview&&$.extend({},this.params.preview[t],this.params.preview._extra)
},_modernPreviewSetVisualChanges:function(){},_modernPreviewUnsetVisualChanges:function(){},_modernPreviewPreloadSiblings:function(t){var e=1,n=7,i=this._main.findBlocksInside({block:"serp-item",modName:"content-preview",modVal:"yes"}),o=i.indexOf(this),s=Math.max(o-e,0),r=Math.min(o+n,i.length);
i.slice(s,r).map(function(e){var n=e.params.preview,i=n&&(n[t]?n[t].url:n[i]);if(i)return Array.isArray(i)?i.map(function(t){BEM.blocks["content-preview"].preload(t)
}):BEM.blocks["content-preview"].preload(i)},this)}}),_borschik("lijmpv4PN9ZAkUM8HZAfvt_MeMA")&&BEM.DOM.decl({block:"check-button",baseBlock:"checkbox"},{onSetMod:{js:function(){this.__base.apply(this,arguments),this.elem("control").attr({role:"button","aria-labelledby":this.elem("text").attr("id"),"aria-pressed":this.hasMod("checked","yes")}),this.bindTo("keyup",function(t){t.shiftKey||t.ctrlKey||t.altKey||13===t.which&&this.elem("control").click()
})},checked:function(t,e){if(this.__base.apply(this,arguments)===!1)return!1;var n="yes"===e;this.elem("control").attr("aria-pressed",n)
},pressed:function(){return this.isDisabled()?!1:void 0}},_onMouseDown:function(){this.setMod("pressed","yes"),this.bindToDoc("mouseup touchend",function(){this.delMod("pressed"),this.unbindFromDoc("mouseup touchend")
})}},{live:function(){return this.__base.apply(this,arguments),this.liveBindTo("mousedown touchstart",function(t){this._onMouseDown(t)
}),!1}}),_borschik("FRvGa9ieoxH5hb_nFq6u0TOCLDs")&&BEM.DOM.decl("serp-item",{onSetMod:{js:function(){this.__base.apply(this,arguments);
var t=this.findBlockOn(this.elem("preview-btn","name","common"),"check-button");this.bindTo(this.elem("text-link"),"click",function(){return t.toggle(),!1
})}}}),_borschik("nPXEnVUyFaUF3IE7DI1pETWtVBQ")&&BEM.DOM.decl({name:"serp-item",modName:"nahodki",modVal:"yes"},{onSetMod:{js:function(){this.nahodkiUrl=this.elem("title-link").attr("href"),this.__base()
}},nahodkiSave:function(){$.post("/storeclick",this.nahodkiGatherParams())},nahodkiGatherParams:function(){return{header:this.elem("title-link").html(),url:this.nahodkiUrl,request:BEM.blocks["i-global"].param("query"),request_time:this.params.nahodkiTime,yandexuid:BEM.blocks["i-global"].param("yandexuid"),ajax:1,snippet:this.nahodkiGatherText(),exsnp_img:this.nahodkiGatherImg()}
},nahodkiGatherText:function(){var t=this.elem("text").toArray().map(function(t){return $(t).html()}).join("<br/>");
return"<p>"+t+"</p>"},nahodkiGatherImg:function(){if(this.elem("nahodki-thumb").length){var t=this.elemParams("nahodki-thumb").url;
return BEM.blocks.uri.parse(t).protocol("http").toString()}}},{live:function(){return this.__base(),this.liveBindTo("title-link nahodki-link","click",function(){this.nahodkiSave()
}),!1}}),_borschik("EicMbNnxsvRJzobNcbnE2_XAhlQ")&&BEM.DOM.decl({block:"serp-item",modName:"content-preview-mode",modVal:"available"},{onSetMod:{js:function(){var t=this.params.backgroundClickCounter;
this.__base.apply(this,arguments),this.on("previewShow",function(){this.setMod("preview-active","yes")
},this),this.on("previewHide",function(){this.delMod("preview-active")},this),this.on("backgroundClick",function(){t&&t.length&&w("",t[0],t[1]),this.togglePreview("common")
})}}}),_borschik("7jdffeoLT_0rKMAGDygz0M3QUUk")&&BEM.HTML.decl("b-link",{onBlock:function(t){t.tag("a").attr("href",t.param("url"));
for(var e,n=["title","target"];e=n.pop();)t.param(e)&&t.attr(e,t.param(e))}}),_borschik("MUpq9D2dAErd1HJcL8yG176Ivmw")&&BEM.DOM.decl("b-link"),_borschik("todhGbTkvvVvV5my_mvhsQOFay0")&&BEM.DOM.decl("serp-url",{_showPopup:function(t){this._popup=this._popup||this.findBlockInside("popup"),this._popup&&this._popup.toggle(t.data.domElem)
},destruct:function(){this._popup&&this._popup.destruct(),delete this._popup}},{live:function(){this.liveBindTo("arrow","click",function(t){this._showPopup(t)
})}}),_borschik("w6gfxfTn16Zr2t0lVieqSqPaZZE")&&BEM.DOM.decl("content-preview",{onSetMod:{js:function(){this.setMod("first","yes"),this._defaultParams=this.params,this._previousData={},this.channel("content-preview").on("update",function(t,e){this.update(e)
},this)}},destruct:function(){},show:function(t){BEM.DOM.update(this.elem("wrap"),t),this.delMod(this.elem("close-wrap"),"hidden"),BEM.DOM.update(this.elem("close-wrap"),this.__self.createCloser(this.params)),this._initCloseButton()
},showEmpty:function(){this.show(this.__self.createEmpty(this.params.empty)),sh(this.params.empty.showCounter)
},update:function(t){if(this._isInited||this._afterInit(),!this._isSameContent(t)){this._previousData=t,this.params=$.extend(!0,[],this._defaultParams,t),this.setMod("transition","yes"),!t.content&&!t.partial&&this.delMod("updated");
var e=t.content&&t.url||t.partial;if(t.content){if(t.type?this.setMod("type",t.type):this.delMod("type"),this._beforeUpdate(),this.show(t.content),this.setMod("updated","yes"),this._afterUpdate(),!e)return;
this.delMod("transition")}if(!t.url)return this.showEmpty();e?this._beforeUrlUpdate():this._beforeUpdate();
var n=this;e||(BEM.DOM.destruct(this.elem("close-wrap"),!0),this.setMod(this.elem("close-wrap"),"hidden","yes")),this.__self._getLoader().get({},function(t){setTimeout(function(){n._updateCssJs(t),e?n._appendHtml(t):n._updateHtml(t),e?n._afterUrlUpdate(t.content):n._afterUpdate()
},Math.max(Math.min(new Date-this._extraSpinStarted,0),this.__self.EXTRA_SPIN_MIN_DURATION)||0)},function(t){n._onError(t)
},{url:this.__self._getHandleUrlForRequest(t.url,!0)})}},_onError:function(){this.findBlockInside("spin").delMod("progress"),this.showEmpty()
},_updateHtml:function(t){BEM.DOM.update(this.elem("wrap"),t.content)},_appendHtml:function(t){BEM.DOM.update(this.elem("extra-wrap"),t.content)
},_updateCssJs:function(t){if(!this.__self._alreadyLoadedWithStyle){var e=this.findBlockOutside("b-page").domElem,n=document.createElement("script");
n.text=t.js,e[0].appendChild(n),e.prepend(t.css),this.__self._alreadyLoadedWithStyle=t.url,this._afterInit()
}},_initCloseButton:function(){this.bindTo(this.findElem("close"),"click",function(){return this.findBlockOutside("main").closePanel(),!1
},this)},_afterInit:function(){this._isInited=!0},_showExtraPreloader:function(){var t=this;this._extraSpinTimeoutId=setTimeout(function(){t._extraSpinStarted=new Date,t.setMod(t.elem("outer-wrap"),"updating","yes"),t.findBlockOn(t.elem("extra-spin"),"spin").setMod("progress","yes")
},this.__self.EXTRA_SPIN_DELAY)},_beforeUrlUpdate:function(){this._showExtraPreloader()},_beforeUpdate:function(){BEM.DOM.destruct(this.elem("wrap"),!0),BEM.DOM.destruct(this.elem("extra-wrap"),!0),this.findBlockInside("spin").setMod("progress","yes"),this.trigger("beforeUpdate")
},_hideExtraPreloader:function(){var t=this;clearTimeout(this._extraSpinTimeoutId),this._extraSpinTimeoutId=null,t.delMod(t.elem("outer-wrap"),"updating"),t.findBlockOn(t.elem("extra-spin"),"spin").delMod("progress"),this._extraSpinStarted=null
},_afterUrlUpdate:function(){this._hideExtraPreloader(),this.findBlockOutside("main").syncScroll()},_afterUpdate:function(){var t=this._getExtraParams();
return this.findBlockInside("spin").delMod("progress"),this.delMod("first"),t.isEmpty?this.showEmpty():(t.counter&&sh(t.counter),this._initCloseButton(),this.findBlockOutside("main").syncScroll(),this.trigger("updated"),void 0)
},_getExtraParams:function(){var t=this.findElem("extra-params");return t.length?this.elemParams(t):{}
},_isSameContent:function(t){return!t.force&&this._previousData.url===t.url&&this._previousData.content===t.content
}},{EXTRA_SPIN_DELAY:500,EXTRA_SPIN_MIN_DURATION:300,isCssJsLoaded:!1,_loader:null,_getLoader:function(){return this._loader=this._loader||BEM.create("i-request_type_ajax",{dataType:"jsonp",timeout:1e4,data:{yu:BEM.blocks["i-global"].param("yandexuid")}}),this._loader
},_getHandleUrlForRequest:function(t){return this._alreadyLoadedWithStyle?t:(this._requestedWithStyle=t,t+"&css=1")
},_getHandleUrlForPreload:function(t){return this._requestedWithStyle&&this._requestedWithStyle!==t?t:t+"&css=1"
},preload:function(t){this._getLoader().get({},function(){},{url:this._getHandleUrlForPreload(t)})},createCloser:function(t){return BEMHTML.apply({block:"b-link",mix:{block:"content-preview",elem:"close"},counter:t.closeCounter,content:[{block:"content-preview",elem:"close-icon"},{block:"content-preview",elem:"close-text",content:t.closeText}]})
},createEmpty:function(t){return BEMHTML.apply([{block:"content-preview",elem:"content",mods:{empty:"yes"},content:t.text.replace("%sitename%",BEMHTML.apply({block:"b-link",mix:[{block:"content-preview",elem:"empty-link"}],url:t.siteUrl,counter:t.textCounter,target:"_blank",content:t.siteName}))}])
}}),_borschik("8tmNYjLHwURjHu6L2JfPdNZmtPU")&&BEM.DOM.decl("video-player",{open:function(){this._spin=this.findBlockInside("spin"),this.__self.closeActivePlayer(this),this._setInitialMods(),this._initPlayer(),this.isOpened||this._setPlayerParams(),this.isOpened=!0,this.trigger("open"),this._sendSERPCounter("open"),this.params.doNotScroll||this.findBlockOutside({blockName:"content-preview",modName:"updated",modVal:"yes"})||this.afterCurrentEvent(this._scrollToView)
},close:function(){this._player.clean(),this.isOpened=!1,this.__self.dropActivePlayer(this),this.trigger("close"),this._sendSERPCounter("close")
},destruct:function(){this.isOpened&&this.close(),this.unbindFromWin("resize"),this.__base.apply(this,arguments)
},_setInitialMods:function(){this.delMod("error"),this._spin.setMod("progress","yes")},_initPlayer:function(){this._player||(this._player=this.findBlockInside("player"),/MSIE 8/i.test(navigator.userAgent)&&this._player.elem("iframe")[0].removeAttribute("allowfullscreen"),this._player.on("error load-error",this._onError,this),this._player.on("started",this._onStart,this),this._player.on("load-success",this._onLoadSuccess,this),this._player.on("paused",this._onPause,this),this._player.on("ended",this._onEnd,this))
},_setPlayerParams:function(){this._spin.setMod("progress","yes"),this._player.setParams({hosting:this.params.hosting,url:this.params.src,autoplay:this.params.autoplay,properties:this.params.videoUrlParam})
},_onStart:function(t,e){this._spin.delMod("progress"),this._sendSERPCounter("play",e.time?",-time="+e.time:"")
},_onLoadSuccess:function(){this._spin.delMod("progress")},_onPause:function(t,e){this._sendSERPCounter("pause",e.time?",-time="+e.time:"")
},_onEnd:function(){this._sendSERPCounter("end")},_onError:function(t,e){this._spin.delMod("progress"),this.setMod("error","yes"),this._player.clean(),this._sendErrCounter(e)
},_scrollToView:function(){var t=this.domElem.height(),e=this.findBlockOutside("b-page").findBlockInside("header").domElem.outerHeight(),n=this.domElem.offset().top-e,i=this.domElem.offset().top-BEM.DOM.win.height()+t+5,o=Math.min(n,Math.max(i,BEM.DOM.win.scrollTop()));
$("html, body").animate({scrollTop:o},"fast")},_sendErrCounter:function(t){w(null,this.params.countersData.techPath,"-event=error,-hosting="+this.params.hosting+",-code="+t.code+",-source-url="+encodeURIComponent(this.params.src)+t.time?",-time"+t.time:"")
},_sendSERPCounter:function(t,e){e=e||"",w(this.domElem[0],this.params.countersData[t+"Path"],this.params.countersData.vars+e)
}},{live:!0,_current:null,closeActivePlayer:function(t){this._current&&this._current.trigger("closeActive"),this._current=t
},dropActivePlayer:function(t){t===this._current&&(this._current=null)}}),_borschik("dwnvRHqDY4dzJkP7PRg4PsF4vVw")&&BEM.DOM.decl("player",{onSetMod:{"iframe-listener":{yes:function(){this.afterCurrentEvent(function(){this._startListenHostingsPostMessage()
}.bind(this))}}},setParams:function(t){var e=this._getNormalizedParams(t);this._isEqual(this.params,e)||(this.params=e,this._setMods()._update())
},_setMods:function(){var t=this.params,e=t.hosting||"",n=e&&-1!==this.__self.IFRAME_LISTENERS.indexOf(e),i=-1===this.__self.NO_TRANSPORT.indexOf(e),o="";
return i&&(t.autoplayHtml&&t.noAutoplayHtml?o="direct":t.url&&(o="ajax")),this.setMod("transport",o),n&&this.setMod("iframe-listener","yes"),this.setMod("hosting",e),this
},getParams:function(){return this.params},_getNormalizedParams:function(t){var e=this.__self.HOSTING_NORMALIZE_MAP,n={};
return this.__self.ALLOWED_PARAMS.forEach(function(e){"undefined"!=typeof t[e]&&(n[e]=t[e])}),this.params.includeHostings&&(e=function(t,e){var n={};
return $.each(t,function(t,i){-1!==e.indexOf(i)&&(n[t]=i)}),n}(e,this.params.includeHostings)),n.hosting=t.hosting&&e[t.hosting]?e[t.hosting]:"",n.includeHostings=this.params.includeHostings,n
},_replacePlayerSizes:function(t){return t.replace(/%{playerWidth}/gi,this.domElem.width()).replace(/%{playerHeight}/gi,this.domElem.height())
},_updateDomElem:function(t){return t=this._replacePlayerSizes(t),this.domElem.html(t),this},_update:function(){},clean:function(){return this.unbindFromWin("message"),this.__self._alreadyListeningHostingsPostMessages=!1,this.domElem&&this.domElem.empty(),this
},_triggerEvent:function(t,e){e&&(e.hosting=this.getMod("hosting")),-1!==["started","paused","ended","error"].indexOf(t)&&this.trigger(t,e)
},destruct:function(){this.__base.apply(this,arguments),this.unbindFromWin("message")}},{SOFT_404_ERROR_CODE:"s404",HOSTING_NORMALIZE_MAP:{},ALLOWED_PARAMS:["url","autoplay","autoplayHtml","noAutoplayHtml","properties","hosting","remoteServerUrl"],IFRAME_LISTENERS:["mailru","rutube"],NO_TRANSPORT:[],registerHosting:function(t){this.HOSTING_NORMALIZE_MAP=$.extend(this.HOSTING_NORMALIZE_MAP,t)
},registerNoTransport:function(t){this.NO_TRANSPORT.push(t)}}),_borschik("2Evt6NlnXYxdg-PSUILOczreYJE")&&!function(){function t(t){return window.YT?(setTimeout(t,1),void 0):n?(n.promise().done(t),void 0):(n=$.Deferred(),n.promise().done(t),window.onYouTubeIframeAPIReady=function(){n.resolve(),n=null,delete window.onYouTubeIframeAPIReady
}.bind(this),$.getScript("//www.youtube.com/iframe_api"),void 0)}function e(t){var e;return[/(?:youtube\.com\/watch\?v=([\da-z\-_]+))/i,/(?:youtube\.com\/v\/([\da-z\-_]+))/i,/(?:youtu\.be\/([\da-z\-_]+))/i].some(function(n){var i=t.match(n);
return e=i&&i[1],!!e}),e}var n=null;BEM.DOM.decl({block:"player",modName:"hosting",modVal:"youtube"},{_update:function(){this.params.videoid=e(this.params.url),t(function(){this._player=new YT.Player(this.domElem.html("<div>").children()[0],{width:"100%",height:"100%",videoId:this.params.videoid,events:{onReady:this._onReady.bind(this),onStateChange:this._onStateChange.bind(this),onError:this._onError.bind(this)}})
}.bind(this))},_onStateChange:function(t){var e=Math.round(this._player.getCurrentTime()),n={};n[YT.PlayerState.PLAYING]="started",n[YT.PlayerState.PAUSED]="paused",n[YT.PlayerState.ENDED]="ended",n[t.data]&&this._triggerEvent(n[t.data],{url:this.params.url,time:e})
},_onError:function(t){this._triggerEvent("error",{url:this.params.url,time:Math.round(this._player.getCurrentTime()),code:t.data})
},_onReady:function(){this.params.autoplay&&this._player.playVideo()}}),BEM.blocks.player.registerHosting({youtube:"youtube","youtube.com":"youtube","www.youtube.com":"youtube"}),BEM.blocks.player.registerNoTransport("youtube")
}(),_borschik("SJeR6nV8TKZPb7uVoJfJrfYQ75U")&&(BEM.DOM.decl({block:"player",modName:"hosting",modVal:"mailru"},{_onHostingsPostMessage:function(t){if(t=t.originalEvent,this._isCorrectOrigin(t.origin)){var e={start:"started",pause:"paused",stop:"ended"};
e[t.data]&&this._triggerEvent(e[t.data],{url:this.params.url})}},_isCorrectOrigin:function(t){return-1!==t.indexOf("mail.ru")
}}),BEM.blocks.player.registerHosting({maulru:"mailru","video.mail.ru":"mailru"})),_borschik("dPnXPO-08XipMO6eucXc7QU-_0E")&&(BEM.DOM.decl({block:"player",modName:"hosting",modVal:"rutube"},{_onHostingsPostMessage:function(t){if(t=t.originalEvent,this._isCorrectOrigin(t.origin)){var e=$.parseJSON(t.data),n=e.type,i=e.data&&e.data.time,o=e.data&&e.data.state;
"player:currentTime"===n?this._setCurrentTime(i):"player:changeState"===n&&o?this._triggerPlayerStateEvent(o):"player:playComplete"===n&&this._triggerPlayerStateEvent("ended")
}},_isCorrectOrigin:function(t){return-1!==t.indexOf("rutube")},_setCurrentTime:function(t){this._time=t
},_getCurrentTime:function(){return Math.round(this._time)||0},_triggerPlayerStateEvent:function(t){var e={playing:"started",paused:"paused",ended:"ended"};
"lockScreenOn"===t?this._triggerEvent("error",{url:this.params.url,code:this.__self.SOFT_404_ERROR_CODE}):e[t]&&this._triggerEvent(e[t],{url:this.params.url,time:this._getCurrentTime()})
}}),BEM.blocks.player.registerHosting({rutube:"rutube","rutube.ru":"rutube"})),_borschik("iu6m7qYfC7iWqTYjFKofj_hB63g")&&BEM.DOM.decl({block:"player",modName:"transport",modVal:"ajax"},{DEFAULT_EMBED_URL:"/video/hosting?action=generateEmbedSimple",_update:function(){this.__base.apply(this,arguments);
var t=this.params;this._deferred&&this._deferred.reject(),this._loadPlayer(function(e){"undefined"!=typeof e&&(e.autoplay||e.noautoplay)?this._updateDomElem(t.autoplay?e.autoplay.html:e.noautoplay.html):this.trigger("load-error")
}.bind(this))},_loadPlayer:function(t){this._deferred=$.Deferred(),this.trigger("load-starts"),$.ajax({url:this.DEFAULT_EMBED_URL,context:this,dataType:"json",timeout:1500,data:{properties:this.params.properties||"",url:this.params.url}}).done(function(t){this._deferred&&this._deferred.resolve(t),this._cleanPlayerLoad(),this.trigger("load-success")
}).fail(function(t,e){this._cleanPlayerLoad(),this.trigger("load-error",[e])}),this._deferred.promise().done(t)
},clean:function(){return this.__base.apply(this,arguments),this._ajax&&(this._ajax.abort(),this._cleanPlayerLoad()),this
},_cleanPlayerLoad:function(){delete this._deferred,delete this._ajax}}),_borschik("yANtkX9tCdk7iOpimA5o4cya-us")&&BEM.DOM.decl({block:"player",modName:"transport",modVal:"direct"},{_update:function(){this.__base.apply(this,arguments);
var t=this.params,e="";return t.autoplay&&t.autoplayHtml?e=t.autoplayHtml:!t.autoplay&&t.noAutoplayHtml&&(e=t.noAutoplayHtml),e?(this._updateDomElem(e),void 0):void 0
}}),_borschik("_Rp-S27kVuL4khfj0x3uC_rQ4CQ")&&BEM.DOM.decl({block:"player",modName:"iframe-listener",modVal:"yes"},{_startListenHostingsPostMessage:function(){this.__self._alreadyListeningHostingsPostMessages||(this.bindToWin("message",this._onHostingsPostMessage.bind(this)),this.__self._alreadyListeningHostingsPostMessages=!0)
}}),_borschik("1U37ef1iy-r4JMtvOeWsTGHE4GA")&&!function(){function t(){var t,e,n,i,o,s=["constructor","setParams","getDefaultParams","destruct","clean"],r={};
for(t=Object.keys(BEM.blocks.player.prototype),e=0,n=t.length;n>e;e++)i=t[e],o=BEM.blocks.player.prototype[i],$.isFunction(o)&&0!==i.indexOf("_")&&-1===s.indexOf(i)&&!function(t){r[t]=function(){return this._callRemoteMethod.call(this,t,Array.prototype.slice.call(arguments))
}}(i);BEM.DOM.decl({block:"player",modName:"remote",modVal:"client"},r)}BEM.DOM.decl({block:"player",modName:"remote",modVal:"client"},{onSetMod:{js:function(){this._ready=!1,this._readyCommands=[],this._callPromises={},this._generateId(),this._startListenPostMessage(),this._iframe=this.elem("iframe")[0],this.params.remoteServerUrl?this._updateIframeUrl(this.params.remoteServerUrl):this._updateIframeUrl(this._getServersUrl())
}},_getServersUrl:function(){return"//yastatic.net/video-player/"+this.__self.STATIC_VERSION+"/pages-desktop/player/player.html"
},_update:function(){var t=$.extend(this.params,{});return this.hasMod("transport","ajax")?(this._loadPlayer(function(e){"undefined"!=typeof e&&(e.autoplay||e.noautoplay)?(t.noAutoplayHtml=e.autoplay.html,t.autoplayHtml=e.autoplay.html,this._callRemoteMethod("setParams",[t])):this.trigger("load-error")
}.bind(this)),void 0):(this._callRemoteMethod("setParams",[t]),void 0)},_generateId:function(){this._id=this._uniqueId("player-remote-")
},_updateIframeUrl:function(t){this._iframe.src=t+"#"+this._id},_startListenPostMessage:function(){this.bindToWin("message",this._onPostMessage.bind(this))
},_onPostMessage:function(t){var e,n=t.originalEvent;n.source===this._iframe.contentWindow&&(e=$.parseJSON(n.data),setTimeout(function(){"event"===e.type?this._processPostMessageEvent(e):"result"===e.type&&this._processPostMessageResult(e)
}.bind(this),1))},_processPostMessageEvent:function(t){"init"===t.name?(this._ready=!0,this._callRemoteDelayedMethods()):this.trigger(t.name,t.data)
},_processPostMessageResult:function(t){this._callPromises[t.callId].resolve(t.data),delete this._callPromises[t.callId]
},_callRemoteMethod:function(t,e,n){return n||(n=this._uniqueId(),this._callPromises[n]=$.Deferred()),this._ready?this._iframe.contentWindow.postMessage(JSON.stringify({type:"command",name:t,args:e,callId:n,id:this._id}),"*"):this._readyCommands.push([t,e,n]),this._callPromises[n].promise()
},_callRemoteDelayedMethods:function(){for(;this._readyCommands.length;)this._callRemoteMethod.apply(this,this._readyCommands.shift())
}}),t()}(),_borschik("4K2cgbBTwKMFSTd_J07-V_R2Mpk")&&BEM.DOM.decl("player",{},{STATIC_VERSION:"0x0deff05"}),_borschik("KjOZwKma7JrZjYktLupVpgZ7apE")&&BEM.DOM.decl("player",{_uniqueId:function(){var t=0;
return function(e){return(e||"")+ ++t}}(),_isEqual:function(t,e){if(t===e)return 0!==t||1/t===1/e;if(null==t||null==e)return t===e;
if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(t.hasOwnProperty(n)&&t[n]!==e[n])return!1;
return!0}}),_borschik("0F4xLmsAbPViB0kPmOzDw0KRgas")&&!function(){BEM.DOM.decl({block:"player",modName:"hosting",modVal:"yavideo"},{_update:function(){this.__base.apply(this,arguments);
var t=this.params,e='<iframe src="'+t.url+(t.autoplay?"&autoplay=1":"")+'"></iframe>',n=this;this._updateDomElem(e).domElem.find("iframe").on("load",function(){n.trigger("load-success")
})}}),BEM.blocks.player.registerHosting({"yandex.video":"yavideo",yavideo:"yavideo"}),BEM.blocks.player.registerNoTransport("yavideo")
}(),_borschik("-9ZNbb1CQDUZ8SeCwy-X1mCO9jY")&&!function(){var t="background-position",e="0 -",n=!1,i="animation",o="islands-spin",s="transform",r="sprite";
!function(){var o=document.createElement("img");void 0!==o.style["background-position-y"]&&(t="background-position-y",e="-");
var s="Webkit Moz O ms Khtml".split(" ");if(void 0!==o.style.animationName)n=!0;else for(var r=0;r<s.length;r++){var a=s[r];
if(void 0!==o.style[a+"AnimationName"]){i="-"+a.toLowerCase()+"-animation",n=!0;break}}}(),BEM.DOM.decl("spin",{getDefaultParams:function(){return{animation:s,startDelay:0,frameAngle:10,frameTime:27,frames:36}
},onSetMod:{js:function(){n||(this.params.animation=r),this.params.animation===r&&(this._size=parseInt(this.getMod("size")||/[\d]+/.exec(this.getMod("theme"))[0],10),this._height=this._size*this.params.frames,this._curFrame=0,this.setMod("support-transforms","no")),this.hasMod("progress","yes")&&this._startSpin()
},progress:{yes:function(){this._startSpin()},"":function(){this._stopSpin()}}},_startSpin:function(){var t=function(){if(this.hasMod("progress","yes")&&!this._interval)switch(this.params.animation){case s:var t=o+" "+Math.floor(360*this.params.frameTime/this.params.frameAngle)+"ms infinite linear";
this.elem("icon").css(i,t);break;case r:this._interval=setInterval(this._switchFrame.bind(this),this.params.frameTime)
}}.bind(this);this._delayTimeout=setTimeout(t,this.params.startDelay)},_stopSpin:function(){this._delayTimeout&&(clearTimeout(this._delayTimeout),delete this._delayTimeout),this._interval&&(clearInterval(this._interval),delete this._interval)
},_switchFrame:function(){var n=++this._curFrame,i=n*this._size;i>=this._height&&(this._curFrame=i=0),this.elem("icon").css(t,e+i+"px")
},destruct:function(){this._stopSpin(),this.__base.apply(this,arguments)}})}(),_borschik("K6ep4yE-cDe1l7LW8M14ydiNVDY")&&BEM.decl("serp-request",{onSetMod:{js:function(){this._buf={},this._request=BEM.create("i-request_type_ajax",{url:BEM.blocks["i-global"].param("ajaxUrl")||"",data:{yu:BEM.blocks["i-global"].param("yandexuid"),staticVersion:BEM.blocks["i-global"].param("static-host").match(/\/([^\/]*)\/$/)[1]},cacheTimeout:3e5,traditional:!0,paramsToSettings:["traditional"],cache:BEM.blocks["i-global"].param("cache")}),this._requestParams={},this._location=BEM.blocks.location.getInstance(),this._doRequest=$.debounce(this._doRequest,this.__self.debounceTime,this),this.channel("serp-request").on("request",function(t,e){this._isEmptyBuf=!1,this._buf[e.key]=e,this._doRequest()
},this)}},_doRequest:function(){var t=this._buf,e={},n={};this._isEmptyBuf||($.each(t,function(t,i){n[t]=i.data||{},$.extend(e,i.params)
}),this._tmpBuf=this._buf,this._buf={},this._isEmptyBuf=!0,this._request.get($.extend({rf:this._location.getState().referer},this._location.getState().params,e,this.getSearchParams(n),BEM.blocks["i-global"].param("serpRequestExtraParams")),this.changeThis(this._onSuccess),this.changeThis(this._onError),this._requestParams))
},_onSuccess:function(t){if(t.error)return this._onError(t.error),void 0;if(t.captcha)return location.href=t.captcha["captcha-page"],void 0;
if(t["static-host"]!=BEM.blocks["i-global"].param("static-host"))return this._onError("Invalid static-host"),void 0;
BEM.blocks["i-global"].setParams({reqid:t.serp.params.reqid,clck:t.serp.params.clck,query:t.serp.params.query,serpRequestExtraParams:t.serp.params.extraParams});
var e=this._tmpBuf;$.each(t,function(t,n){e[t]&&e[t].success&&e[t].success(n)}),this.channel("serp-request").trigger("success",t)
},_onError:function(t){if(200===t.status||409===t.status)return document.location=this._location.getState().url,void 0;
var e=this._tmpBuf;$.each(e,function(n){"function"==typeof e[n].error&&e[n].error(t)})},getSearchParams:function(t){return{ajax:JSON.stringify(t)}
}},{debounceTime:15}),_borschik("ldiS7h28htxUZDTBzljljI2EMqA")&&BEM.decl("serp-request",{onSetMod:{js:function(){this.__base.apply(this,arguments),this._preloadedRequests={},this.channel("serp-request").on("preload",function(t,e){this._isEmptyBuf=!1,e.error&&delete e.error,e.success&&delete e.success,this._buf[e.key]=e;
var n=e.cacheHub||{};n.isPreloadRequest=!0,n.hubCallback=this._addToPreloaded(),this._doRequest(n)},this)
}},_addToPreloaded:function(){var t=this;return function(e,n){t._preloadedRequests[n]={hub:e,guessed:!1},t._sendPreloadCounter(!1,e)
}},_checkPreloaded:function(t){if(t in this._preloadedRequests){var e=this._preloadedRequests[t];if(e.guessed)return;
this._sendPreloadCounter(!0,e.hub),e.guessed=!0}},_sendPreloadCounter:function(t,e){var n={suggest:695,more:75};
if(n[e]){var i="//"+BEM.blocks["i-global"].param("click-host")+"/",o=["1112="+BEM.blocks.serp._prefetchTask,"884="+(t?1:0),"76="+n[e]],s=["click","dtype=stred","pid=306","cid=72304","path=690.1035.1034.1088","vars="+o.join(","),"*"];
(new Image).src=i+s.join("/")}},_doRequest:function(t){BEM.blocks["i-global"]._params.sts=(new Date).getTime(),this._requestParams=t||{},this.__base.apply(this,arguments)
},_onSuccess:function(t,e){this._requestParams.isPreloadRequest||(e&&e.cacheKey&&this._checkPreloaded(e.cacheKey),this.__base.apply(this,arguments),t.error||BEM.blocks["i-global"].sendCounters(BEM.blocks["i-global"].viewPortParamsCount()))
}}),_borschik("sjYhQ0m9tHgcesETKYESEvEiswU")&&BEM.DOM.decl("serp",{onSetMod:{js:function(){BEM.create("serp-request"),BEM.blocks["i-ua"].canUseAjax()&&this.afterCurrentEvent(this._initBlocks)
}},_initBlocks:function(){var t=this.__self.blocks.map(function(t){return this.findBlockOn(t)},this);
t.unshift(this),t.forEach(this._initBlock)},_initBlock:function(t){t&&(t.__onLocationChange=function(){var e;
"function"==typeof t.onAjaxPrepare&&t.onAjaxPrepare(),"function"==typeof t.getAjaxData&&(e=t.getAjaxData()),this.channel("serp-request").trigger("request",{key:t.params.ajaxKey||t.__self.getName(),data:e||{},success:t.changeThis(function(t){"function"==typeof this.onAjaxSuccess?this.onAjaxSuccess(t):t&&t.html&&BEM.DOM.update(this.domElem,$(t.html).html())
}),error:t.changeThis(function(t){"function"==typeof this.onAjaxError&&this.onAjaxError(t)})})},BEM.blocks.location.getInstance().on("change",t.__onLocationChange))
},_startProgress:function(){this.spin||(this.spin=this.findBlockInside(this.elem("spin"),"spin")),this.spin&&this.spin.setMod("progress","yes"),this.setMod("loading","yes"),this.setMod(this.elem("spin"),"progress","yes")
},_stopProgress:function(){this.delMod("loading"),this.delMod(this.elem("spin"),"progress"),this.spin.delMod("progress")
},_hideError:function(){},_showError:function(t){t&&alert(t)},addRequestListener:function(t){this._initBlock(t)
},removeRequestListener:function(t){t&&"function"==typeof t.__onLocationChange&&BEM.blocks.location.getInstance().un("change",t.__onLocationChange)
},onAjaxPrepare:function(){this._hideError(),this._startProgress()},onAjaxError:function(t){return"string"==typeof t&&~t.indexOf("static-host")?(document.location=BEM.blocks.location.getInstance().getState().url,void 0):(this._stopProgress(),this._showError(this.params[t.readyState?"serverError":"clientError"]),void 0)
},onAjaxSuccess:function(t){this._stopProgress();var e=t.params.found,n=document.createElement("i");n.innerHTML=e,document.title=n.firstChild.nodeValue
}},{blocks:[]}),_borschik("vd38yoIkUSw3EGO4kteWPg50B_M")&&!function(){var t,e;BEM.DOM.decl("serp",{onSetMod:{js:function(){this.__base();
var n=this.__self,i=function(t){var e=t.target.domElem.bem(this.getName()),i=e&&!e.hasMod("ajax","no")&&(e.findBlockOutside("serp")||e.hasMod("ajax","yes"));
if(i){var o=e.domElem.attr("href");o&&n.go(o)}};BEM.blocks["b-link"].on("click",i),BEM.blocks.link.on("click",i);
var o={4572:.25,4570:.25,4571:0};this.__self._prefetchTask=t=BEM.blocks["i-global"].param("suggestIsPrefetched"),e={threshold:o[t],withtapeahead:"4572"===t}
}},_initBlock:function(n){function i(t){BEM.channel("serp-request").trigger("preload",{cacheHub:{hubName:"suggest"},key:n.params.ajaxKey||n.__self.getName(),params:{text:[t],prefetch:1}})
}this.__base(n),n&&t&&BEM.blocks["suggest2-model"].on("response",function(t,n){var o=n.data,s="undefined"!=typeof e.threshold?1*o.meta.confidence>=e.threshold:"yes"===o.meta.instant;
if(s){for(var r="",a=0,l=o.items.length;l>a;a++)if("string"===$.type(o.items[a])){r=o.items[a];break}if(i(r),e.withtapeahead&&!(r.indexOf(" ")<0)){var c=r.substr(o.orig.length).match(/([^\s]*)\s/);
c&&(c=o.orig+c[1],setTimeout(function(){i(c)},50))}}})},_stopProgress:function(){var t=(new Date).getTime(),e=this.spinStarted.getTime(),n=250;
n=Math.max(0,n-(t-e)),this.hasMod("loading","yes")&&window.setTimeout(this.__base.bind(this),n),BEM.channel("serp-request").trigger("stopProgress")
},_startProgress:function(){BEM.channel("serp-request").trigger("startProgress"),this.elem("spin").css("padding-top",this.findBlockOutside("header").domElem.outerHeight(!0)+50),this.spinStarted=new Date,this.__base()
},_showError:function(t){this._main=this.findBlockOutside("main"),this._noConnectionBlock=this._main&&this._main.findBlockInside("no-connection"),this._noConnectionBlock&&(this._noConnectionBlock.elem("message").text(t),this._noConnectionBlock.setMod("visible","yes"),this._main.setMod("hidden-content","yes"))
},showServerError:function(){this._stopProgress(),this._showError(this.params.serverError)},_hideError:function(){this._noConnectionBlock&&(this._noConnectionBlock.delMod("visible"),delete this._noConnectionBlock,this._main&&this._main.delMod("hidden-content"))
}},{_prefetchTask:t,go:function(t){if(BEM.blocks["i-ua"].canUseAjax()){var e=BEM.blocks.location.getInstance();
"string"==typeof t?e.change({url:t}):e.change(t)}else"string"==typeof t&&(window.location=t)},blocks:["input","misspell","b-counters","more","pager","region","region-change","navigation","competitors","main","search","first-impression","z-entity-collection","feedback"]})
}(),_borschik("SYj7oZiVi8S45e2_O8y1hhnLAMk")&&BEM.DOM.decl({name:"b-link",modName:"pseudo",modVal:"yes"},{_onClick:function(t){t.preventDefault(),this.hasMod("disabled","yes")||this.afterCurrentEvent(function(){this.trigger("click")
})}},{live:function(){this.__base.apply(this,arguments),this.liveBindTo({modName:"pseudo",modVal:"yes"},"leftclick",function(t){this._onClick(t)
})}}),_borschik("FsDv-T1CC3zXSGCCFtrtOLD0EgU")&&BEM.HTML.decl({name:"b-link",modName:"pseudo",modVal:"yes"},{onBlock:function(t){t.tag(t.param("url")?"a":"span"),t.wrapContent({elem:"inner"}),t.js(!0)
},onElem:{inner:function(t){t.tag("span")}}}),_borschik("taGiFmN6Yeh1ZQJXEskCGpn_gC0")&&BEM.DOM.decl("more",{onAjaxSuccess:function(t){this._page=t.params&&t.params.page,BEM.DOM.init(BEM.DOM.update(this.domElem,$(t.html).html()))
},onAjaxError:function(t){return"string"==typeof t&&~t.indexOf("static-host")&&this._requestInProgress&&this.elem("button").length?(window.location=this.elem("button").attr("href"),void 0):void 0
}}),_borschik("QQWKm0CKCfKC5McXNWHEl2rCu2s")&&BEM.DOM.decl("more",{onSetMod:{js:function(){this._page=this.params.page,this._serp=this.findBlockOn("serp"),this._list=this._serp.findBlockOn("main"),this._pager=this._serp.findBlockOn("pager"),this._spin=this.findBlockInside("spin"),this._setCounterData(),this._counted="",this._onResize=$.throttle(this._onResize,100),this.bindToWin("load scroll resize",this._onResize)
}},_setCounterData:function(){this._showCounter=this.dropElemCache("button").elem("button").length&&this.elemParams("button").showCounter[0]
},_onResize:function(){var t=this.domElem;if(t.is(":empty"))return!1;if(!this._showCounter||this._counted===this._showCounter)return!1;
var e=t.offset().top,n=BEM.DOM.win.height()+BEM.DOM.win.scrollTop();n>=e&&this._counted!==this._showCounter&&(this._counted=this._showCounter,w.apply("",[].concat(t[0],this._showCounter)))
},_onClick:function(){this._getPortion()},_hideOnLoad:function(t){"undefined"==typeof this._hideOnLoadBlock&&(this._hideOnLoadBlock=this.findBlockOutside("b-page").findBlockInside("more-hidden")),this._hideOnLoadBlock&&(t?this._hideOnLoadBlock.setMod("visibility","hidden"):this._hideOnLoadBlock.delMod("visibility"))
},_toggleSpin:function(t){var e=this._spin=this.findBlockInside("spin"),n=this.findElem("button");this.toggleMod("progress","yes",t),t?(e.setMod("progress","yes"),this.setMod(n,"hidden","yes")):(e.delMod("progress"),this.delMod(n,"hidden")),this._hideOnLoad(t)
},_getPortion:function(){var t=this.findBlockOutside("b-page");if(this.params.isLast)return this;if(this._page>9||!BEM.blocks["i-ua"].canUseAjax()||t.hasMod("baseline","serp3")||t.hasMod("pager","simple")){var e=BEM.blocks.location.getInstance(),n=e.getUri().replaceParam("p",this._page).toString();
return BEM.blocks.serp.go(n),this}this._toggleSpin(!0);var i=this._list;return this.channel("serp-request").trigger("request",{key:this.__self.getName(),params:{p:this._page},data:{endless:1},success:this.changeThis(function(t){this.onAjaxSuccess(t)
}),error:this.changeThis(function(t){this.onAjaxError(t)})}).trigger("request",{key:i.__self.getName(),success:i.update.bind(i)}).trigger("request",{key:this._pager.__self.getName(),success:this.changeThis(function(t){this.trigger("nextPage"),this._pager.update(t,["bottom"])
})}),this},onAjaxSuccess:function(){this._toggleSpin(!1),this.__base.apply(this,arguments),this._setCounterData()
},onAjaxError:function(){this.__base.apply(this,arguments),this._toggleSpin(!1)}},{live:function(){this.liveBindTo("button","click",function(){return BEM.blocks["i-ua"].canUseAjax()?(this._onClick(),!1):void 0
})}}),_borschik("b5GbVRLGCr5AimRuC0U6GVGVKPE")&&!function(t){var e=Math.floor(100*Math.random());BEM.DOM.decl({name:"button",modName:"counter",modVal:"yes"},{_onCounterClick:function(){e<=(this.params["show-counter"]||10)&&t.ch(this.params.counter)
}},{live:function(){return this.liveBindTo({modName:"counter",modVal:"yes"},"mousedown",function(t){this._onCounterClick(t)
}),this.__base.apply(this,arguments)}})}(window.Lego),_borschik("pBMfOqg20vznSF118h-lVSmHe7Q")&&BEM.DOM.decl("button",{onSetMod:{focused:{yes:function(){return this.hasMod("focus","no")?!1:this.__base.apply(this,arguments)
}}}}),_borschik("6qeIKP0SIWA1Xzd8NTV1xoQuz1Q")&&BEM.DOM.decl("more-hidden",{},{live:!0}),_borschik("d7iDsv0dbPumzmZFqyNmEXz0Sfw")&&BEM.DOM.decl("pager",{onSetMod:{js:function(){this._instances={top:this.elem("instance","position","top"),bottom:this.elem("instance","position","bottom")}
}},update:function(t,e){e?e.forEach(this.changeThis(function(e){this._instances[e]&&BEM.DOM.update(this._instances[e],$(t.html).html())
})):BEM.DOM.update(this.domElem,$(t.html).html())},onAjaxSuccess:function(t){var e=t.params&&1!==t.params.nextPage;
e||BEM.DOM.update(this._instances.top,""),t.params&&$.extend(this.params,t.params),this.update(t,e?null:["bottom"])
}}),_borschik("DGaoW2HYVG_JLxndS_Ah8IAKgpA")&&BEM.DOM.decl("pager",{onSetMod:{js:function(){this.__base(),this.bindToDoc("keydown",function(t){if(!this._focusOnInput()&&this._modifierPressed(t)){var e,n=t.keyCode===this.__self.ARROW_NEXT?"next":t.keyCode===this.__self.ARROW_BACK?"prev":null;
n&&(t.preventDefault(),e=this._getUrl(n),e&&BEM.blocks.serp.go(e))}})}},_getUrl:function(t){var e=this.params["next"===t?"nextPage":"prevPage"];
return e!==!1&&BEM.blocks.location.getInstance().getUri().replaceParam("p",e).toString()},_modifierPressed:function(t){var e,n,i=0,o=this.__self;
if(!t[o.modifierKey])return!1;for(e=0,n=o.modifierKeys.length;n>e;e++)t[o.modifierKeys[e]]&&i++;return 1===i
},_focusOnInput:function(){var t=document.activeElement;return t&&"input textarea".indexOf(t.tagName.toLowerCase())>-1
}},{modifierKey:-1!==navigator.userAgent.search(/Mac OS X/i)?"altKey":"ctrlKey",modifierKeys:["ctrlKey","altKey","shiftKey","metaKey"],ARROW_NEXT:39,ARROW_BACK:37}),_borschik("v8Un0uNE1GbnGWA-s9nGMeJ4HUw")&&BEM.DOM.decl("navigation",{onSetMod:{js:function(){this.__base(),this._searchInput=this.findBlockOutside("b-page").findBlockInside("search").findBlockInside("input"),this._onSearchQueryChange=$.debounce(this._onSearchQueryChange,200,this),this._searchInput.on("change",this._onSearchQueryChange,this),this._changeLabel(this._searchInput.val())
}},_onSearchQueryChange:function(){var t=this.elem("item").map(this.changeThis(this._processItem)),e=this._searchInput.val();
t.each(this.changeThis(function(t,n){var i,o,s=this.findBlockInside(n,"service").elem("url"),r=s.attr("href");
$.url&&r&&e&&(i=$.url.getParam(r,"request")?"request":"text",o=$.url.setParam(r,i,$.trim(e)),s.attr("href",o))
})),this._changeLabel(e)},_changeLabel:function(t){t=t?BEM.I18N("navigation","search-on",{query:t}):BEM.I18N("navigation","search-also"),this.domElem.attr("aria-label",t)
}}),_borschik("nRDw4bTs1E0PbjOTwNV5p3Ujh3M")&&BEM.DOM.decl("navigation",{onSetMod:{js:{inited:function(){this._selectedItem=-1,this._items=this.elem("item","service","yes").map(this.changeThis(this._processItem,this)),this._onWindowResize=$.throttle(this._onWindowResize,100,this),this._onWindowResize(),this.bindToWin("resize",this._onWindowResize)
}}},onElemSetMod:{item:{state:{selected:function(t){t.attr({role:"link","aria-hidden":!0})},"":function(t){t.attr("role","listitem").removeAttr("aria-hidden")
}}}},_processItem:function(t,e){var n=$(e),i=this.getMod(n,"name"),o=this.hasMod(n,"state","selected");
return i?(o&&(this._selectedItem=t),$.extend(n,{_index:t,_cachedBottom:this._getBorders(n).bottom,_sticky:o}),n):null
},_onWindowResize:function(){this.reflow()},reflow:function(){var t,e=this._getViewportThreshold(),n=this._items.length,i=0;
for(t=n;t--;)this._items[t]._cachedBottom>e&&i++;if(i=this._reflowExtra(e,n,i),i===n)for(t=n;t--;)this.setMod(this._items[t],"stacked","yes");
else{var o=i;for(t=n;t--;){var s=this._items[t];o&&!s._sticky?(this.setMod(s,"stacked","yes"),o--):this.delMod(s,"stacked")
}}return i},_reflowExtra:function(t,e,n){return n},_onMoreClick:function(){},_getViewportThreshold:function(){return this.__self.win.height()
},_getBorders:function(t){"number"==typeof t&&(t=this._items[t]),!t instanceof $&&(t=$(t));var e=t.outerHeight(),n=t.offset().top-BEM.DOM.win.scrollTop();
return{top:n,bottom:e+n}}},{live:function(){return this.liveBindTo("more","leftclick tap",function(t){this._onMoreClick(t)
}).liveBindTo("more","keyup",function(t){t.shiftKey||t.ctrlKey||t.altKey||(13===t.which||32===t.which)&&this._onMoreClick(t)
}),!1}}),_borschik("C2_O_3uJOxROdzNtaA1bHX5KSuw")&&BEM.DOM.decl("navigation",{_getBorders:function(){if($.browser.opera||$.browser.msie&&$.browser.version<9){var t=this.elem("more").css("bottom");
this.elem("more").css("bottom","0"),this.elem("more").offset().top,this.elem("more").css("bottom",t)}return this.__base.apply(this,arguments)
}}),_borschik("fm9aPiGxZuHemQBytsqViGacxG0")&&BEM.DOM.decl("navigation",{onSetMod:{js:function(){this.__base(),this._params=this.params
}},onAjaxPrepare:function(){this.unbindFrom("more","click")},onAjaxSuccess:function(t){this.dropElemCache(),BEM.DOM.update(this.domElem,$(t.html).html()),this._items=this.elem("item","service","yes").map(this.changeThis(this._processItem,this)),this.bindTo("more","click",this._onMoreClick),this.reflow()
}}),_borschik("F5VGJmoErOpnXbEFUXh1avNqdak")&&BEM.DOM.decl({block:"navigation",modName:"more-type",modVal:"popup"},{onSetMod:{js:{inited:function(){var t=this.elem("more-label");
this._popup=this.findBlockInside("popup").on("show",function(){t.attr("aria-expanded",!0)}).on("hide",function(){t.attr("aria-expanded",!1)
}),this._stack=this.elem("more-stack"),this.bindTo(this.findElem(this._stack,"item"),"leftclick tap",this._onStackedItemClick),this.__base.apply(this,arguments)
}}},onElemSetMod:{item:{stacked:function(t,e,n){this.setMod(t._popupElem,"visibility",n)}},more:{visibility:{"":function(){this._popup.hide()
}}}},_processItem:function(){var t=this.__base.apply(this,arguments),e=this.getMod(t,"name");return $.extend(t,{_popupElem:this.findElem(this._stack,"item","name",e)}),t
},_onStackedItemClick:function(){this._popup.hide()},reflow:function(){var t=this.__base.apply(this,arguments);
return this.toggleMod(this.elem("more"),"visibility","yes","",t>0),t},_reflowExtra:function(t,e,n){return 1===n&&e>1&&n++,n
},_onMoreClick:function(){this._popup.toggle(this.elem("more"))},_getViewportThreshold:function(){return this._getBorders(this.elem("more")).top
}}),_borschik("2h9bFF4n1sBcV1ibvY22tfnbrHE")&&!function(t){var e=t.DOM,n=e.win;e.decl({block:"navigation",modName:"more-type",modVal:"tablo"},{_onMoreClick:function(){var t=this._getHeader();
if(t){var e=t.findElem("action","type","srv").focus();t.setMod(e,"pressed","yes")}},_getViewportThreshold:function(){return n.height()-this.elem("more").height()
},_getHeader:function(){return this._header||(this._header=this.findBlockInside(e.doc,"header"))}})}(BEM),_borschik("1LyuZcIo1S563iFwEKVQXvkOTHg")&&BEM.DOM.decl({block:"navigation",modName:"more-type",modVal:"tablo"},{_onMoreClick:function(){var t=this._getHeader();
if(t){var e=t.findElem("action","type","srv");t.setMod(e,"pressed","yes")}}}),_borschik("F5tuF257W3AWnJTxQckyMvj2gZg")&&BEM.decl({block:"navigation",modName:"sticky",modVal:"yes"},{onSetMod:{js:function(){this.__base.apply(this,arguments),this._footerHeight=this.findBlockOutside("b-page").findBlockInside("footer").domElem.height()
}},_getViewportThreshold:function(){var t=this.domElem.offset().top-this.__self.win.scrollTop();return this.__self.win.height()-t-this._footerHeight
}}),_borschik("N-ykyOXnYbQ_tjFaRo0JY32yAC4")&&BEM.DOM.decl("region",{onSetMod:{js:function(){this._initPopup()
}},onAjaxPrepare:function(){this._rmPopup()},onAjaxSuccess:function(t){var e="hidden";t&&t.html&&(BEM.DOM.update(this.domElem,$(t.html).html()),this._initPopup(),t.params&&(e=t.params.visibility)),this.setMod("visibility",e)
},_initPopup:function(){var t=this.findBlockInside(this.findElem("button"),"button");this._popup=this.findBlockInside("popup"),t&&this._popup&&this.bindTo(t.domElem,"leftclick tap",function(){this._popup.toggle(t)
})},_rmPopup:function(){this.unbindFrom("button","leftclick tap"),this._popup&&this._popup.destruct(),delete this._popup
}}),_borschik("WOPISYtu0-MQY5Pr21AF2UQx0PM")&&BEM.DOM.decl({block:"popup",modName:"poll",modVal:"size"},{onSetMod:{visibility:{outside:function(){this.__base(),this._prevSize=this.getPopupSize()
}}},_onShown:function(){this.__base(),this._sizePollInterval||(this._sizePollInterval=setInterval(this._sizePoller.bind(this),this.params.sizePoll||100))
},_sizePoller:function(){if(this._isShown&&!this._isHiding){var t=this.getPopupSize(),e=this.getCurrPos();
this._prevSize&&this._prevPos&&this._prevSize.height===t.height&&this._prevSize.width===t.width&&this._prevPos.left===e.left&&this._prevPos.top===e.top||(this._prevSize=t,this._prevPos=e,this.repaint())
}},_onHidden:function(){this.__base(),clearInterval(this._sizePollInterval)}}),_borschik("QxUbItu5PHc5I9vbAodKOt_Uy_0")&&BEM.DOM.decl({block:"popup",modName:"poll",modVal:"size"},{destruct:function(){clearInterval(this._sizePollInterval),this.__base.apply(this,arguments)
}}),_borschik("_zO_bSLtASOnPwBIQx3wUOp3ooM")&&BEM.DOM.decl("intents",{onSetMod:{js:function(){this._cacheElems(),this.afterCurrentEvent(function(){(this._onWindowResize=$.throttle(this._onWindowResize,200,this))(),this.bindToWin("resize",this._onWindowResize)
}),this.separator=this.elem("separator")}},onElemSetMod:{button:{pressed:{yes:function(t){this.afterCurrentEvent(function(){this.hasMod(this._level(t),"pos","top")&&this._indicateTo(t)
})}}}},_cacheElems:function(){var t=this;this.dropElemCache(),this._levels=this.elem("level"),this._levels.each(function(e,n){n.$=$(n),n._buttons=t.findElem(n.$,"button"),n._buttons.each(function(t,e){e.$=$(e)
})})},_level:function(t){return t.closest(this.buildSelector("level"))},_container:function(t){return t.closest(this.buildSelector("container"))
},_sep:function(t){return this.findElem(this._container(t),"separator")},_sepLeft:function(t){return this.findElem(this._container(t),"separator-left")
},_sepRight:function(t){return this.findElem(this._container(t),"separator-right")},_sepArrow:function(t){return this.findElem(this._container(t),"separator-arrow")
},_indicateNone:function(t){this.separator[t]&&(this.elem("separator-left").css("width","50%"),this.elem("separator-right").css("left","50%"),this.elem("separator-arrow").hide())
},_indicateTo:function(t,e){if(0!=this.elem("separator").length&&0!==this.domElem.height()){if(!t||!t.length)return this._indicateNone(e),void 0;
var n=t.offset().left,i=t.width(),o=this._sep(t).offset().left,s=this._sepArrow(t).show().width(),r=n+Math.floor(i/2)-o,a=Math.floor(s/2),l=r-a,c=r-a,u=r+a;
this._indicateToSetStyle(t,l,c,u)}},_indicateToSetStyle:function(t,e,n,i){this._sepLeft(t).css("width",Math.max(e,0)+"px"),this._sepArrow(t).css("left",n+"px"),this._sepRight(t).css("left",i+"px")
},_indicateToActive:function(){var t=this,e=this.elem("level","pos","top");e.each(function(e,n){var i=t.findElem($(n),"button","pressed","yes");
i&&t._indicateTo(i,e)})},_onWindowResize:function(){this._indicateToActive()},_onMouseDownTarget:function(t){return t.data.domElem
}},{live:function(){return this.liveBindTo("button","click",function(){this.trigger("buttonPressed")}),!1
}}),_borschik("RMuNN1ry8SHVdi-acMvELf0MSgs")&&BEM.DOM.decl({block:"intents",modName:"ajax",modVal:"yes"},{onSetMod:{js:function(){this.__base(),this.findBlockOn("serp").addRequestListener(this)
}},destruct:function(){this.findBlockOn("serp").removeRequestListener(this),this.__base()},onAjaxSuccess:function(){this._cacheElems(),this._firstPageQuery=this._searchInput&&this._searchInput.val(),this.setMod("empty",0==this._levels.length?"yes":""),this._indicateToActive()
}},{_go:function(t,e){var n,i=$.browser.msie,o=i&&parseInt($.browser.version,10);return e?(window.open(t,"_blank"),void 0):(BEM.blocks["i-ua"].canUseAjax()&&(o>9||!i)&&(n=BEM.blocks.location.getInstance()),n?n.change({url:t}):window.location=t,void 0)
},live:function(){return this.__base(),this.liveBindTo("button","click",function(t){t.preventDefault();
var e=t.data.domElem,n=e.attr("href"),i="_blank"===e.attr("target");n&&this.__self._go(n,i)}),!1}}),_borschik("Z63S0Qz6Lk_jXw7HFt5kiEp7WgY")&&BEM.DOM.decl({block:"intents",modName:"ajax",modVal:"yes"},{onAjaxPrepare:function(){this.__base(),this._levels.each(function(t,e){e._more&&e._more._popup&&e._more._popup.destruct(),e._more._popup=null
})},onAjaxSuccess:function(){}}),_borschik("uYWqceKO18ylTtoCRiU9R86eTFM")&&BEM.DOM.decl({block:"intents",modName:"hover",modValue:"yes"},{onSetMod:{js:function(){this.__base();
var t=this.findBlockOutside("b-page"),e=t&&t.findBlockInside("header"),n=e&&e.findBlockInside("search");
this._searchInput=n&&n.findBlockInside(n.elem("input"),"input"),this._firstPageQuery=this._searchInput&&this._searchInput.val(),this._hoverInProgress=!1,this._addMouseEventListeners()
}},destruct:function(){clearTimeout(this._hoverTimer),clearTimeout(this._pageQueryTimer),this._searchInput&&this._searchInput.hideRequery&&this._searchInput.hideRequery(),this._removeMouseEventListeners(),this.__base()
},_addMouseEventListeners:function(){this.bindTo("button","click",this._onClick),this.bindTo("button","mouseenter",this._onMouseOver),this.bindTo("button","mouseleave",this._onMouseOut)
},_removeMouseEventListeners:function(){this.unbindFrom("button","click mouseenter mouseleave")},_updateSearchInput:function(t,e){this._searchInput.updateRequeryHidden&&this._searchInput.updateRequeryHidden(t.join(" ")),this._searchInput.updateRequeryVisible&&this._searchInput.updateRequeryVisible(e.join(" ")),this._searchInput.showRequery&&this._searchInput.showRequery()
},_onMouseOver:function(t){if(this._searchInput&&!($(t.relatedTarget).hasClass("serp__spin")||$(t.relatedTarget).hasClass("spin")||$(t.relatedTarget).hasClass("intents__button-text")||null==t.relatedTarget)){clearTimeout(this._pageQueryTimer);
var e=this._onMouseDownTarget(t),n=this.__self.extractParams(e[0]);if(n.intents__button){var i=n.intents__button.query;
if(this._pageQuery=this._pageQuery||this._searchInput&&this._searchInput.val(),this._pageQuery==this._firstPageQuery){for(var o=this._pageQuery.split(/\s+/),s=i.split(/\s+/),r={},a=0;a<o.length;a++)for(var l=0;l<s.length;l++){var c=o[a].toLowerCase(),u=s[l].toLowerCase();
c==u&&(r[c]=o[a])}for(var h=!1,d=[],_=[],a=0;a<s.length;a++){var p=r[s[a].toLowerCase()];p&&!h?d.push(p):(h=!0,_.push(s[a]))
}if(this._hoverInProgress)this._updateSearchInput(d,_);else{var m=this;clearTimeout(this._hoverTimer),this._hoverTimer=setTimeout(function(){m._hoverInProgress=!0,m._updateSearchInput(d,_)
},100)}}}}},_onMouseOut:function(){if(this._searchInput){clearTimeout(this._hoverTimer);var t=this;this._pageQueryTimer=setTimeout(function(){t._pageQuery=null,t._hoverInProgress=!1,t._searchInput.hideRequery&&t._searchInput.hideRequery()
},100)}},_onClick:function(t){var e=this._onMouseDownTarget(t),n=this.__self.extractParams(e[0]),i=n.intents__button.query;
this._searchInput&&this._searchInput.val(i,{noSuggest:!0})}}),_borschik("oewWN_eY5Sxuy_lWuXn-rehwFmM")&&BEM.DOM.decl({block:"intents",modName:"collapse",modValue:"yes"},{onElemSetMod:{button:{pressed:{yes:function(t){var e=this.__base;
this.afterCurrentEvent(function(){this._updateCollapse(),e.call(this,t)})}},visibility:{hidden:function(t){this._delayVisibility(t,"visible")
},visible:function(t){this._delayVisibility(t,"hidden")}}},more:{visibility:{hidden:function(t){var e=this._popup(t);
e&&e.hide()}}}},_delayVisibility:function(t,e){var n=this;setTimeout(function(){var i=$.data(t[0],"mirror");
i&&n.setMod(i,"visibility",e)},500)},_cacheElems:function(){this.__base();var t=this;this._levels.each(function(e,n){n._more=t.findElem(n.$,"more"),n._more._popup=t.findBlockInside(n._more,"popup"),n._stack=t.findElem(n.$,"more-stack"),n._buttons.each(function(e,i){var o=i.$.clone(1);
o.appendTo(n._stack),$.data(i,"mirror",o),$.data(o[0],"original",i.$),t.setMod(o,"pressed","")})})},_popup:function(t){var e=t[0];
return e._popup||(e._popup=this.findBlockInside(t,"popup")),e._popup},_updateCollapse:function(){var t=this,e=BEM.DOM.getWindowSize().width;
$.each(this._levels,function(n,i){var o=i.$,s=o.width(),r=Math.min(e,s),a=t.findElem(o,"button","pressed","yes"),l=a?a.width()+parseInt(a.css("margin-right")):0,c=r,u=0,h=[];
t.setMod(i._more,"visibility","hidden");for(var d=0;d<i._buttons.length;d++)t.setMod(i._buttons[d].$,"visibility","visible");
var _=i._buttons.length-1,p=!1,m=!1;for($.each(i._buttons,function(t,e){u+=$(e).outerWidth(!0),h.push(u)
});i._buttons[_];){var f=i._buttons[_].$,g=h[_];if(f[0]===a[0])c-=l;else{if(!(g>c))break;t.setMod(f,"visibility","hidden"),m=!0
}m&&!p&&(t.setMod(i._more,"visibility","visible"),c-=i._more.width()+10,p=!0),_--}})},_onWindowResize:function(){var t=this;
t._updateCollapse(),this.__base()},_onMouseDownTarget:function(t){var e=t.data.domElem;return $.data(e[0],"original")||e
}},{live:function(){return this.__base(),this.liveBindTo("more","leftclick tap",function(t){var e=this._popup(t.data.domElem);
e&&e.toggle(t.data.domElem)}),!1}}),_borschik("ZWjucwzzpN3X2VBGNnRSsKtD78I")&&BEM.DOM.decl("competitors",{onSetMod:{js:function(){this._searchInput=this.findBlockOutside("b-page").findBlockInside("search").findBlockInside("input"),this._onSearchQueryChange=$.debounce(this._onSearchQueryChange,200,this),this._searchInput&&this._searchInput.on("change",this._onSearchQueryChange,this),this._footer=this.findBlockOutside("b-page").findBlockInside("footer"),this._bottomOffset=this._footer.domElem.height(),this.updateCompetitorsPos(),this.bindToWin("orientationchange resize",$.debounce(this.updateCompetitorsPos,50,this))
}},onAjaxSuccess:function(t){BEM.DOM.update(this.domElem,$(t.html).html()),this.setMod("pos",t.params.pos),this.setMod("visibility",t.params.visibility),this.dropElemCache("link query")
},_onSearchQueryChange:function(){var t=BEM.blocks["i-common__string"],e=this._searchInput.val();e&&(this.elem("link").each(function(t,n){var i,o,s=$(n),r=s.attr("href");
r&&(i=BEM.blocks.uri.parse(r),"h.yandex.net"===i.host()&&(i=BEM.blocks.uri.parse(decodeURIComponent(i.query().slice(1))),o=!0),i=i.replaceParam("q",$.trim(e)).toString(),o&&(i="//h.yandex.net/?"+encodeURIComponent(i)),s.attr("href",i))
}),this.elem("query").html(t.escapeHTML(t.cleverSubstring(e,52,0))))},updateCompetitorsPos:function(){if(this.hasMod("pos","bottom")){var t=BEM.DOM.win.height()-this._footer.domElem.offset().top-this._bottomOffset;
this.domElem.css("position",t>0?"":"static")}}}),_borschik("vyin8kurO4RRLfV4MwGBKWFlKw0")&&BEM.DOM.decl("region-change",{getAjaxData:function(){return this.getMod(this.elem("instance"),"position")
},onAjaxSuccess:function(t){BEM.DOM.update(this.domElem,$(t.html).html())}}),_borschik("0jSBsm74plUv2ZGNTXMjgcT9HnU")&&BEM.DOM.decl("b-counters",{onSetMod:{js:function(){this._counter=BEM.create({block:"b-statcounter",elem:"statface",elemMods:{type:"rstat"}}),this._counter.send(this.params.reqid)
}},update:function(t){BEM.DOM.update(this.domElem,$(t.html).children()),this._counter.send(t.params.reqid)
}}),function(t,e){function n(){_&&p&&console.log.apply(console,arguments)}function i(t){return"string"==typeof t&&(t={block:t}),t.block+(t.elem?c+t.elem:"")+(t.modName?l+t.modName+l+t.modVal:"")
}function o(t){var e={};return t.split(c).forEach(function(t,n){var i=[n?"elem":"block","mod","val"];
t.split(l).forEach(function(t,n){e[i[n]]=t})}),e}function s(t){return t?d.push(t):!1}function r(){return d.length&&d.pop()
}function a(){this._lang="",this._prj="lego",this._keyset="",this._key=""}if("function"==typeof e.I18N&&e.I18N._proto)return e.I18N;
"undefined"==typeof i18n&&(i18n={}),BEM=e;var l="_",c="__",u="ru",h={},d=[],_=!1,p="undefined"!=typeof console&&"function"==typeof console.log;
a.prototype={lang:function(t){return this._lang=t,this},project:function(t){return this._prj=t,this},keyset:function(t,e){return e&&s(this._keyset),this._keyset=i(t),this
},key:function(t){return this._key=t,this},decl:function(t){var e=o(this._keyset),n="i-tanker"===e.block?"tanker":this._prj,i=e.elem||this._keyset,s=this._key;
n=i18n[n]||(i18n[n]={}),i=n[i]||(n[i]={}),i[s]="function"==typeof t?t:function(){return t};var r=h[this._lang]||(h[this._lang]={}),a=r[this._keyset]||(r[this._keyset]={});
a[s]=t},val:function(t,e){var i=h[this._lang]&&h[this._lang][this._keyset],o="keyset: "+this._keyset+" key: "+this._key+" (lang: "+this._lang+")";
if(!i)return n("[I18N_NO_KEYSET] %s",o),"";i=i[this._key];var s=typeof i;return"undefined"===s?(n("[I18N_NO_VALUE] %s",o),""):"string"===s?i:(e||(e=this),i.call(e,t))
},_cache:function(){return h}},e.I18N=function(t){var e=function(t,n,i){return e.keyset(t).key(n,i)};
return e._proto=t,e.project=function(t){return this._proto.project(t),this},e.keyset=function(t){return this._proto.keyset(t,!0),this
},e.key=function(t,n){var i,o,s=this._proto;return s.lang(this._lang).key(t),i=s.val.call(s,n,e),o=r(),o&&s.keyset(o,!1),i
},e.decl=function(t,e,n){var i,o=this._proto;n||(n={}),n.lang&&o.lang(n.lang),o.keyset(t);for(i in e)e.hasOwnProperty(i)&&o.key(i).decl(e[i]);
return this},e.lang=function(t){return"undefined"!=typeof t&&(this._lang=t),this._lang},e.debug=function(t){_=!!t
},e.lang(u),e}(new a)}(this,"undefined"==typeof BEM?{}:BEM),BEM.I18N.decl("auth",{auth:"Авторизация","fill-input":"Заполните это поле",login:"Логин",logon:"Войти",more:"Ещё",password:"Пароль",permanent:"Запомнить меня",register:"Регистрация",remember:"Вспомнить пароль","social-log-in":"Войти при помощи социальной сети",temporary:"Чужой компьютер","wrong-characters":"Недопустимый ввод","wrong-keyboard-layout":"Смените раскладку","wrong-password":"Пароль не может совпадать с логином"},{lang:"ru"}),BEM.I18N.decl("copyright",{link:function(t){return"ООО «"+t.content+"»"
},yandex:"Яндекс"},{lang:"ru"}),BEM.I18N.decl("feedback",{"Вернуться на Яндекс":"Вернуться на Яндекс","На все результаты на странице":"На все результаты на странице","На этот результат":"На этот результат","Ответ не соответствует запросу":"Ответ не соответствует запросу","Ответ содержит неуместную порнографию":"Ответ содержит неуместную порнографию","Ответ содержит отталкивающую информацию":"Ответ содержит отталкивающую информацию",Пожаловаться:"Пожаловаться","Спасибо, что помогли сделать Яндекс лучше!":"Спасибо, что помогли сделать Яндекс лучше!","Что не так?":"Что не так?"},{lang:"ru"}),BEM.I18N.decl("footer",{about:"О компании","about-url":"//company.yandex.ru",advert:"Реклама","advert-url":"//advertising.yandex.ru/kupislova.xml?advertising",agreement:"Пользовательское соглашение",apps:"Мобильные приложения","apps-url":"//mobile.yandex.ru",beta:"β-версия","copyright-notice":"",design:"Дизайн","design-artlebedev":"Студия Артемия Лебедева","design-artlebedev-url":"http://www.artlebedev.ru",mobile:"Мобильная версия","privacy-policy":"","services-button-value":"Перейти",stat:"Статистика","terms-of-service":"",termsofuse:"Лицензия на поиск","termsofuse-url":"//legal.yandex.ru/termsofuse/",vacancies:"Вакансии","yandex-is-local":"Яндекс локален","yandex-is-not-local":"Как сделать Яндекс локальным"},{lang:"ru"}),BEM.I18N.decl("header__action_type_srv",{"services-table":"Табло сервисов"},{lang:"ru"}),BEM.I18N.decl("i-services",{404:"404",adresa:"Адреса",advertising:"Реклама",afisha:"Афиша",all:"Все сервисы",api:"API",appsearch:"Приложения",auto:"Авто",avia:"Авиабилеты",aziada:"Азиада",ba:"Баян",backapv:"Партнер Я.Карт",balance:"Баланс",bar:"Бар","bar-ie":"Бар для ИЕ","bar-ie9":"Бар для ИЕ9",bayan:"Баннеры Яндекса",blogs:"Блоги",books:"Книги",browser:"Браузер",calendar:"Календарь",captcha:"ой...",catalogwdgt:"Каталог виджетов",chrome:"Хром с поиском Яндекса",city:"Города",cityday:"День города",collection:"Коллекция",company:"Компания",contest:"Contest",desktop:"Персональный поиск",direct:"Директ","direct.market":"Маркет",disk:"Диск",ege:"ЕГЭ",expert:"Эксперт",feedback:"Обратная связь",feedback2:"Обратная связь",ff:"ФФ с поиском Яндекса",fotki:"Фотки",fresh:"Свежее",games:"Игрушки",geocontext:"Геоконтекст",goroda:"Города",help:"Помощь",i:"Мои сервисы",ie:"ИЕ с поиском Яндекса",images:"Картинки","images-com":"Картинки",interests:"Интересы",internet:"Интернет",keyboard:"Клавиатура",kraski:"Краски",kuda:"Куда все идут",large:"Яндекс для слабовидящих",legal:"Правовые документы",lenta:"Лента",libra:"Библиотека",literacy:"Неделя борьбы за грамотность",local:"Локальная сеть",lost:"Незабудки",love:"День взаимного тяготения — 13 августа",mail:"Почта",maps:"Карты","maps-wiki":"Народная карта",market:"Маркет","market.advertising":"Маркет",metrika:"Метрика",metro:"Метро",mobile:"Мобильный",moikrug:"Мой Круг",money:"Деньги",museums:"Дни исторического и культурного наследия",music:"Музыка","music-partner":"Музыка: статистика",nahodki:"Мои находки",nano:"Нано",newhire:"Наниматор",news:"Новости",notifications:"Нотификационная панель",oauth:"Авторизация",online:"Онлайн",openid:"OpenID",opera:"Opera Software",opinion:"Цитаты",partners:"Рекламная сеть",partnersearch:"Поиск для партнеров",passport:"Паспорт",pdd:"Почта для домена",peoplesearch:"Люди",perevod:"Перевод",probki:"Пробки",pulse:"блоги: пульс",punto:"Punto switcher",pvo:"Ответы",rabota:"Работа",ramazan:"",rasp:"Расписания",realty:"Недвижимость",referats:"Рефераты",rk:"Есть вопросы?",root:"Яндекс.Олимпиада для Unix администраторов",school:"Школа",search:"Поиск",server:"Сервер",site:"Поиск для сайта",slovari:"Словари",so:"Самооборона",social:"Социализм",soft:"Программы",sport:"Спорт",sprav:"Справочник",start:"Стартовая страница",stat:"Статистика",subs:"Подписки",taxi:"Такси",terms:"Разговорник",tests:"Тесты и опросы",tickets:"Билеты",time:"Яндекс.Время",toster:"Тосты",translate:"Перевод",tune:"Настройки",tv:"Телепрограмма",uslugi:"Услуги",video:"Видео","video-com":"Видео",vno:"ВНО",wdgt:"Виджеты",weather:"Погода",webmaster:"Вебмастер",widgets:"Виджеты",wordstat:"Статистика",wow:"Я.ру",www:"Поиск",xmlsearch:"XML",yaca:"Каталог",yamb:"Медийные баннеры",zakladki:"Закладки"},{lang:"ru"}),BEM.I18N.decl("i-tanker__dynamic",{gender:function(t){return function(t){return t[t.gender]
}.call(this,t)},plural:function(t){return function(t){var e=isNaN(parseInt(t.count))?0:t.count,n=e%10,i=e%100;
return 1==n&&11!=i?t.one:n>1&&5>n&&(10>i||i>20)?t.some:t.many}.call(this,t)},plural_adv:function(t){return function(t){var e=isNaN(parseInt(t.count))?0:t.count;
return 0===e?t.none:this.keyset("i-tanker__dynamic").key("plural",{count:t.count,one:t.one,some:t.some,many:t.many})
}.call(this,t)},toggle:function(t){return function(t){return Boolean(t.condition)?t["true"]:t["false"]
}.call(this,t)}},{lang:"ru"}),BEM.I18N.decl("lang-switcher",{all:"Ещё"},{lang:"ru"}),BEM.I18N.decl("logo",{yandex:"Яндекс"},{lang:"ru"}),BEM.I18N.decl("navigation",{more:"Ещё","search-also":"Найти также","search-on":function(t){return"Найти "+t.query+" в других сервисах"
}},{lang:"ru"}),BEM.I18N.decl("notice",{notifications:"Уведомлений"},{lang:"ru"}),BEM.I18N.decl("notification-panel-notice",{"n-new-notifications":function(t){return t.count+" "+this.keyset("notification-panel-notice").key("new-notifications",{count:t.count})
},"new-achievement":"Новое достижение!","new-notification":"Новое событие:","new-notifications":function(t){return this.keyset("i-tanker__dynamic").key("plural_adv",{count:t.count,one:"новое событие",some:"новых события",many:"новых событий",none:"новых событий"})
}},{lang:"ru"}),BEM.I18N.decl("search",{"search-for":"Искать",query:"Запрос"},{lang:"ru"}),BEM.I18N.decl("suggest2",{fact:"Факты",group:"Группа подсказок",nah:"Вы искали",nav:"Сайт",text:"Поиск",traffic:"Пробки",weather:"Погода"},{lang:"ru"}),BEM.I18N.decl("suggest2-item",{"quick-answer":"Быстрый ответ"},{lang:"ru"}),BEM.I18N.decl("ticker__text",{notifications:"Уведомлений"},{lang:"ru"}),BEM.I18N.decl("user",{"Загрузить файлы":"Загрузить файлы","Редактировать список":"Редактировать список","Добавить пользователя":"Добавить пользователя",enter:"Войти",exit:"Выйти",letter:function(t){return this.keyset("i-tanker__dynamic").key("plural_adv",{count:t.count,one:"новое письмо",some:"новых письма",many:"новых писем",none:"Нет новых писем"})
},letter_compose:"Написать письмо",passport:"Паспорт",tune:"Настройка",upload_files:"Мой диск"},{lang:"ru"}),BEM.I18N.lang("ru")
}