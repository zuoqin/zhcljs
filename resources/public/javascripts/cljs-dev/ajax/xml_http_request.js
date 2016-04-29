// Compiled by ClojureScript 1.8.51 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__7531,handler){
var map__7532 = p__7531;
var map__7532__$1 = ((((!((map__7532 == null)))?((((map__7532.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7532.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7532):map__7532);
var uri = cljs.core.get.call(null,map__7532__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__7532__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__7532__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__7532__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__7532__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__7532__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__7532__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__7532,map__7532__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__7530_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__7530_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__7532,map__7532__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___7540 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___7540)){
var response_type_7541 = temp__4657__auto___7540;
this$__$1.responseType = cljs.core.name.call(null,response_type_7541);
} else {
}

var seq__7534_7542 = cljs.core.seq.call(null,headers);
var chunk__7535_7543 = null;
var count__7536_7544 = (0);
var i__7537_7545 = (0);
while(true){
if((i__7537_7545 < count__7536_7544)){
var vec__7538_7546 = cljs.core._nth.call(null,chunk__7535_7543,i__7537_7545);
var k_7547 = cljs.core.nth.call(null,vec__7538_7546,(0),null);
var v_7548 = cljs.core.nth.call(null,vec__7538_7546,(1),null);
this$__$1.setRequestHeader(k_7547,v_7548);

var G__7549 = seq__7534_7542;
var G__7550 = chunk__7535_7543;
var G__7551 = count__7536_7544;
var G__7552 = (i__7537_7545 + (1));
seq__7534_7542 = G__7549;
chunk__7535_7543 = G__7550;
count__7536_7544 = G__7551;
i__7537_7545 = G__7552;
continue;
} else {
var temp__4657__auto___7553 = cljs.core.seq.call(null,seq__7534_7542);
if(temp__4657__auto___7553){
var seq__7534_7554__$1 = temp__4657__auto___7553;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7534_7554__$1)){
var c__7021__auto___7555 = cljs.core.chunk_first.call(null,seq__7534_7554__$1);
var G__7556 = cljs.core.chunk_rest.call(null,seq__7534_7554__$1);
var G__7557 = c__7021__auto___7555;
var G__7558 = cljs.core.count.call(null,c__7021__auto___7555);
var G__7559 = (0);
seq__7534_7542 = G__7556;
chunk__7535_7543 = G__7557;
count__7536_7544 = G__7558;
i__7537_7545 = G__7559;
continue;
} else {
var vec__7539_7560 = cljs.core.first.call(null,seq__7534_7554__$1);
var k_7561 = cljs.core.nth.call(null,vec__7539_7560,(0),null);
var v_7562 = cljs.core.nth.call(null,vec__7539_7560,(1),null);
this$__$1.setRequestHeader(k_7561,v_7562);

var G__7563 = cljs.core.next.call(null,seq__7534_7554__$1);
var G__7564 = null;
var G__7565 = (0);
var G__7566 = (0);
seq__7534_7542 = G__7563;
chunk__7535_7543 = G__7564;
count__7536_7544 = G__7565;
i__7537_7545 = G__7566;
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