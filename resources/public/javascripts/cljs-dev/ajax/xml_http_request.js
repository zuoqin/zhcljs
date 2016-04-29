// Compiled by ClojureScript 1.8.51 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__7355,handler){
var map__7356 = p__7355;
var map__7356__$1 = ((((!((map__7356 == null)))?((((map__7356.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7356.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7356):map__7356);
var uri = cljs.core.get.call(null,map__7356__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__7356__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__7356__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__7356__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__7356__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__7356__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__7356__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__7356,map__7356__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__7354_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__7354_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__7356,map__7356__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___7364 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___7364)){
var response_type_7365 = temp__4657__auto___7364;
this$__$1.responseType = cljs.core.name.call(null,response_type_7365);
} else {
}

var seq__7358_7366 = cljs.core.seq.call(null,headers);
var chunk__7359_7367 = null;
var count__7360_7368 = (0);
var i__7361_7369 = (0);
while(true){
if((i__7361_7369 < count__7360_7368)){
var vec__7362_7370 = cljs.core._nth.call(null,chunk__7359_7367,i__7361_7369);
var k_7371 = cljs.core.nth.call(null,vec__7362_7370,(0),null);
var v_7372 = cljs.core.nth.call(null,vec__7362_7370,(1),null);
this$__$1.setRequestHeader(k_7371,v_7372);

var G__7373 = seq__7358_7366;
var G__7374 = chunk__7359_7367;
var G__7375 = count__7360_7368;
var G__7376 = (i__7361_7369 + (1));
seq__7358_7366 = G__7373;
chunk__7359_7367 = G__7374;
count__7360_7368 = G__7375;
i__7361_7369 = G__7376;
continue;
} else {
var temp__4657__auto___7377 = cljs.core.seq.call(null,seq__7358_7366);
if(temp__4657__auto___7377){
var seq__7358_7378__$1 = temp__4657__auto___7377;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7358_7378__$1)){
var c__7021__auto___7379 = cljs.core.chunk_first.call(null,seq__7358_7378__$1);
var G__7380 = cljs.core.chunk_rest.call(null,seq__7358_7378__$1);
var G__7381 = c__7021__auto___7379;
var G__7382 = cljs.core.count.call(null,c__7021__auto___7379);
var G__7383 = (0);
seq__7358_7366 = G__7380;
chunk__7359_7367 = G__7381;
count__7360_7368 = G__7382;
i__7361_7369 = G__7383;
continue;
} else {
var vec__7363_7384 = cljs.core.first.call(null,seq__7358_7378__$1);
var k_7385 = cljs.core.nth.call(null,vec__7363_7384,(0),null);
var v_7386 = cljs.core.nth.call(null,vec__7363_7384,(1),null);
this$__$1.setRequestHeader(k_7385,v_7386);

var G__7387 = cljs.core.next.call(null,seq__7358_7378__$1);
var G__7388 = null;
var G__7389 = (0);
var G__7390 = (0);
seq__7358_7366 = G__7387;
chunk__7359_7367 = G__7388;
count__7360_7368 = G__7389;
i__7361_7369 = G__7390;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__6210__auto__ = body;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map