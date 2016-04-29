// Compiled by ClojureScript 1.8.51 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__7397_7401 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__7398_7402 = null;
var count__7399_7403 = (0);
var i__7400_7404 = (0);
while(true){
if((i__7400_7404 < count__7399_7403)){
var k_7405 = cljs.core._nth.call(null,chunk__7398_7402,i__7400_7404);
var v_7406 = (b[k_7405]);
(a[k_7405] = v_7406);

var G__7407 = seq__7397_7401;
var G__7408 = chunk__7398_7402;
var G__7409 = count__7399_7403;
var G__7410 = (i__7400_7404 + (1));
seq__7397_7401 = G__7407;
chunk__7398_7402 = G__7408;
count__7399_7403 = G__7409;
i__7400_7404 = G__7410;
continue;
} else {
var temp__4657__auto___7411 = cljs.core.seq.call(null,seq__7397_7401);
if(temp__4657__auto___7411){
var seq__7397_7412__$1 = temp__4657__auto___7411;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7397_7412__$1)){
var c__7021__auto___7413 = cljs.core.chunk_first.call(null,seq__7397_7412__$1);
var G__7414 = cljs.core.chunk_rest.call(null,seq__7397_7412__$1);
var G__7415 = c__7021__auto___7413;
var G__7416 = cljs.core.count.call(null,c__7021__auto___7413);
var G__7417 = (0);
seq__7397_7401 = G__7414;
chunk__7398_7402 = G__7415;
count__7399_7403 = G__7416;
i__7400_7404 = G__7417;
continue;
} else {
var k_7418 = cljs.core.first.call(null,seq__7397_7412__$1);
var v_7419 = (b[k_7418]);
(a[k_7418] = v_7419);

var G__7420 = cljs.core.next.call(null,seq__7397_7412__$1);
var G__7421 = null;
var G__7422 = (0);
var G__7423 = (0);
seq__7397_7401 = G__7420;
chunk__7398_7402 = G__7421;
count__7399_7403 = G__7422;
i__7400_7404 = G__7423;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__6816__auto__,writer__6817__auto__,opt__6818__auto__){
return cljs.core._write.call(null,writer__6817__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__6816__auto__,writer__6817__auto__,opt__6818__auto__){
return cljs.core._write.call(null,writer__6817__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args7424 = [];
var len__7280__auto___7427 = arguments.length;
var i__7281__auto___7428 = (0);
while(true){
if((i__7281__auto___7428 < len__7280__auto___7427)){
args7424.push((arguments[i__7281__auto___7428]));

var G__7429 = (i__7281__auto___7428 + (1));
i__7281__auto___7428 = G__7429;
continue;
} else {
}
break;
}

var G__7426 = args7424.length;
switch (G__7426) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7424.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__7431 = (i + (2));
var G__7432 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__7431;
ret = G__7432;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__6816__auto__,writer__6817__auto__,opt__6818__auto__){
return cljs.core._write.call(null,writer__6817__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__6816__auto__,writer__6817__auto__,opt__6818__auto__){
return cljs.core._write.call(null,writer__6817__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__7433_7437 = cljs.core.seq.call(null,v);
var chunk__7434_7438 = null;
var count__7435_7439 = (0);
var i__7436_7440 = (0);
while(true){
if((i__7436_7440 < count__7435_7439)){
var x_7441 = cljs.core._nth.call(null,chunk__7434_7438,i__7436_7440);
ret.push(x_7441);

var G__7442 = seq__7433_7437;
var G__7443 = chunk__7434_7438;
var G__7444 = count__7435_7439;
var G__7445 = (i__7436_7440 + (1));
seq__7433_7437 = G__7442;
chunk__7434_7438 = G__7443;
count__7435_7439 = G__7444;
i__7436_7440 = G__7445;
continue;
} else {
var temp__4657__auto___7446 = cljs.core.seq.call(null,seq__7433_7437);
if(temp__4657__auto___7446){
var seq__7433_7447__$1 = temp__4657__auto___7446;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7433_7447__$1)){
var c__7021__auto___7448 = cljs.core.chunk_first.call(null,seq__7433_7447__$1);
var G__7449 = cljs.core.chunk_rest.call(null,seq__7433_7447__$1);
var G__7450 = c__7021__auto___7448;
var G__7451 = cljs.core.count.call(null,c__7021__auto___7448);
var G__7452 = (0);
seq__7433_7437 = G__7449;
chunk__7434_7438 = G__7450;
count__7435_7439 = G__7451;
i__7436_7440 = G__7452;
continue;
} else {
var x_7453 = cljs.core.first.call(null,seq__7433_7447__$1);
ret.push(x_7453);

var G__7454 = cljs.core.next.call(null,seq__7433_7447__$1);
var G__7455 = null;
var G__7456 = (0);
var G__7457 = (0);
seq__7433_7437 = G__7454;
chunk__7434_7438 = G__7455;
count__7435_7439 = G__7456;
i__7436_7440 = G__7457;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__6816__auto__,writer__6817__auto__,opt__6818__auto__){
return cljs.core._write.call(null,writer__6817__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__6816__auto__,writer__6817__auto__,opt__6818__auto__){
return cljs.core._write.call(null,writer__6817__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__7458_7462 = cljs.core.seq.call(null,v);
var chunk__7459_7463 = null;
var count__7460_7464 = (0);
var i__7461_7465 = (0);
while(true){
if((i__7461_7465 < count__7460_7464)){
var x_7466 = cljs.core._nth.call(null,chunk__7459_7463,i__7461_7465);
ret.push(x_7466);

var G__7467 = seq__7458_7462;
var G__7468 = chunk__7459_7463;
var G__7469 = count__7460_7464;
var G__7470 = (i__7461_7465 + (1));
seq__7458_7462 = G__7467;
chunk__7459_7463 = G__7468;
count__7460_7464 = G__7469;
i__7461_7465 = G__7470;
continue;
} else {
var temp__4657__auto___7471 = cljs.core.seq.call(null,seq__7458_7462);
if(temp__4657__auto___7471){
var seq__7458_7472__$1 = temp__4657__auto___7471;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7458_7472__$1)){
var c__7021__auto___7473 = cljs.core.chunk_first.call(null,seq__7458_7472__$1);
var G__7474 = cljs.core.chunk_rest.call(null,seq__7458_7472__$1);
var G__7475 = c__7021__auto___7473;
var G__7476 = cljs.core.count.call(null,c__7021__auto___7473);
var G__7477 = (0);
seq__7458_7462 = G__7474;
chunk__7459_7463 = G__7475;
count__7460_7464 = G__7476;
i__7461_7465 = G__7477;
continue;
} else {
var x_7478 = cljs.core.first.call(null,seq__7458_7472__$1);
ret.push(x_7478);

var G__7479 = cljs.core.next.call(null,seq__7458_7472__$1);
var G__7480 = null;
var G__7481 = (0);
var G__7482 = (0);
seq__7458_7462 = G__7479;
chunk__7459_7463 = G__7480;
count__7460_7464 = G__7481;
i__7461_7465 = G__7482;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__6816__auto__,writer__6817__auto__,opt__6818__auto__){
return cljs.core._write.call(null,writer__6817__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__7483_7487 = cljs.core.seq.call(null,v);
var chunk__7484_7488 = null;
var count__7485_7489 = (0);
var i__7486_7490 = (0);
while(true){
if((i__7486_7490 < count__7485_7489)){
var x_7491 = cljs.core._nth.call(null,chunk__7484_7488,i__7486_7490);
ret.push(x_7491);

var G__7492 = seq__7483_7487;
var G__7493 = chunk__7484_7488;
var G__7494 = count__7485_7489;
var G__7495 = (i__7486_7490 + (1));
seq__7483_7487 = G__7492;
chunk__7484_7488 = G__7493;
count__7485_7489 = G__7494;
i__7486_7490 = G__7495;
continue;
} else {
var temp__4657__auto___7496 = cljs.core.seq.call(null,seq__7483_7487);
if(temp__4657__auto___7496){
var seq__7483_7497__$1 = temp__4657__auto___7496;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7483_7497__$1)){
var c__7021__auto___7498 = cljs.core.chunk_first.call(null,seq__7483_7497__$1);
var G__7499 = cljs.core.chunk_rest.call(null,seq__7483_7497__$1);
var G__7500 = c__7021__auto___7498;
var G__7501 = cljs.core.count.call(null,c__7021__auto___7498);
var G__7502 = (0);
seq__7483_7487 = G__7499;
chunk__7484_7488 = G__7500;
count__7485_7489 = G__7501;
i__7486_7490 = G__7502;
continue;
} else {
var x_7503 = cljs.core.first.call(null,seq__7483_7497__$1);
ret.push(x_7503);

var G__7504 = cljs.core.next.call(null,seq__7483_7497__$1);
var G__7505 = null;
var G__7506 = (0);
var G__7507 = (0);
seq__7483_7487 = G__7504;
chunk__7484_7488 = G__7505;
count__7485_7489 = G__7506;
i__7486_7490 = G__7507;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__6816__auto__,writer__6817__auto__,opt__6818__auto__){
return cljs.core._write.call(null,writer__6817__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__6816__auto__,writer__6817__auto__,opt__6818__auto__){
return cljs.core._write.call(null,writer__6817__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args7508 = [];
var len__7280__auto___7519 = arguments.length;
var i__7281__auto___7520 = (0);
while(true){
if((i__7281__auto___7520 < len__7280__auto___7519)){
args7508.push((arguments[i__7281__auto___7520]));

var G__7521 = (i__7281__auto___7520 + (1));
i__7281__auto___7520 = G__7521;
continue;
} else {
}
break;
}

var G__7510 = args7508.length;
switch (G__7510) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7508.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__7511 = obj;
G__7511.push(kfn.call(null,k),vfn.call(null,v));

return G__7511;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x7512 = cljs.core.clone.call(null,handlers);
x7512.forEach = ((function (x7512,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__7513 = cljs.core.seq.call(null,coll);
var chunk__7514 = null;
var count__7515 = (0);
var i__7516 = (0);
while(true){
if((i__7516 < count__7515)){
var vec__7517 = cljs.core._nth.call(null,chunk__7514,i__7516);
var k = cljs.core.nth.call(null,vec__7517,(0),null);
var v = cljs.core.nth.call(null,vec__7517,(1),null);
f.call(null,v,k);

var G__7523 = seq__7513;
var G__7524 = chunk__7514;
var G__7525 = count__7515;
var G__7526 = (i__7516 + (1));
seq__7513 = G__7523;
chunk__7514 = G__7524;
count__7515 = G__7525;
i__7516 = G__7526;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__7513);
if(temp__4657__auto__){
var seq__7513__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7513__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__7513__$1);
var G__7527 = cljs.core.chunk_rest.call(null,seq__7513__$1);
var G__7528 = c__7021__auto__;
var G__7529 = cljs.core.count.call(null,c__7021__auto__);
var G__7530 = (0);
seq__7513 = G__7527;
chunk__7514 = G__7528;
count__7515 = G__7529;
i__7516 = G__7530;
continue;
} else {
var vec__7518 = cljs.core.first.call(null,seq__7513__$1);
var k = cljs.core.nth.call(null,vec__7518,(0),null);
var v = cljs.core.nth.call(null,vec__7518,(1),null);
f.call(null,v,k);

var G__7531 = cljs.core.next.call(null,seq__7513__$1);
var G__7532 = null;
var G__7533 = (0);
var G__7534 = (0);
seq__7513 = G__7531;
chunk__7514 = G__7532;
count__7515 = G__7533;
i__7516 = G__7534;
continue;
}
} else {
return null;
}
}
break;
}
});})(x7512,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x7512;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args7535 = [];
var len__7280__auto___7541 = arguments.length;
var i__7281__auto___7542 = (0);
while(true){
if((i__7281__auto___7542 < len__7280__auto___7541)){
args7535.push((arguments[i__7281__auto___7542]));

var G__7543 = (i__7281__auto___7542 + (1));
i__7281__auto___7542 = G__7543;
continue;
} else {
}
break;
}

var G__7537 = args7535.length;
switch (G__7537) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7535.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit7538 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit7538 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta7539){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta7539 = meta7539;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit7538.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7540,meta7539__$1){
var self__ = this;
var _7540__$1 = this;
return (new cognitect.transit.t_cognitect$transit7538(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta7539__$1));
});

cognitect.transit.t_cognitect$transit7538.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7540){
var self__ = this;
var _7540__$1 = this;
return self__.meta7539;
});

cognitect.transit.t_cognitect$transit7538.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit7538.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit7538.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit7538.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit7538.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta7539","meta7539",1663451236,null)], null);
});

cognitect.transit.t_cognitect$transit7538.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit7538.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit7538";

cognitect.transit.t_cognitect$transit7538.cljs$lang$ctorPrWriter = (function (this__6816__auto__,writer__6817__auto__,opt__6818__auto__){
return cljs.core._write.call(null,writer__6817__auto__,"cognitect.transit/t_cognitect$transit7538");
});

cognitect.transit.__GT_t_cognitect$transit7538 = (function cognitect$transit$__GT_t_cognitect$transit7538(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta7539){
return (new cognitect.transit.t_cognitect$transit7538(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta7539));
});

}

return (new cognitect.transit.t_cognitect$transit7538(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__6210__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map