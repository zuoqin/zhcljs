// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs_idxdb.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
cljs_idxdb.core.pprint = (function cljs_idxdb$core$pprint(o){
return cljs.core.println.call(null,JSON.stringify.call(null,o,null,(2)));
});
cljs_idxdb.core.log = (function cljs_idxdb$core$log(var_args){
var args__7287__auto__ = [];
var len__7280__auto___11490 = arguments.length;
var i__7281__auto___11491 = (0);
while(true){
if((i__7281__auto___11491 < len__7280__auto___11490)){
args__7287__auto__.push((arguments[i__7281__auto___11491]));

var G__11492 = (i__7281__auto___11491 + (1));
i__7281__auto___11491 = G__11492;
continue;
} else {
}
break;
}

var argseq__7288__auto__ = ((((1) < args__7287__auto__.length))?(new cljs.core.IndexedSeq(args__7287__auto__.slice((1)),(0),null)):null);
return cljs_idxdb.core.log.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7288__auto__);
});

cljs_idxdb.core.log.cljs$core$IFn$_invoke$arity$variadic = (function (v,text){
var vs = ((typeof v === 'string')?cljs.core.apply.call(null,cljs.core.str,v,text):v);
console.log(vs);

return v;
});

cljs_idxdb.core.log.cljs$lang$maxFixedArity = (1);

cljs_idxdb.core.log.cljs$lang$applyTo = (function (seq11488){
var G__11489 = cljs.core.first.call(null,seq11488);
var seq11488__$1 = cljs.core.next.call(null,seq11488);
return cljs_idxdb.core.log.cljs$core$IFn$_invoke$arity$variadic(G__11489,seq11488__$1);
});
cljs_idxdb.core.get_target_result = (function cljs_idxdb$core$get_target_result(e){
return e.target.result;
});
cljs_idxdb.core.error_callback = (function cljs_idxdb$core$error_callback(e){
cljs_idxdb.core.log.call(null,"error occurred");

return cljs_idxdb.core.log.call(null,e);
});
cljs_idxdb.core.delete_store = (function cljs_idxdb$core$delete_store(db,name){
if(cljs.core.truth_(db.objectStoreNames.contains(name))){
return db.deleteObjectStore(name);
} else {
return null;
}
});
cljs_idxdb.core.create_store = (function cljs_idxdb$core$create_store(db,name,opts){
return db.createObjectStore(name,cljs.core.clj__GT_js.call(null,opts));
});
cljs_idxdb.core.delete_and_create_store = (function cljs_idxdb$core$delete_and_create_store(db,name,opts){
cljs_idxdb.core.delete_store.call(null,db,name);

return cljs_idxdb.core.create_store.call(null,db,name,opts);
});
cljs_idxdb.core.create_index = (function cljs_idxdb$core$create_index(store,name,field,opts){
return store.createIndex(name,field,cljs.core.clj__GT_js.call(null,opts));
});
cljs_idxdb.core.create_db = (function cljs_idxdb$core$create_db(name,version,upgrade_fn,success_fn){
var request = indexedDB.open(name,version);
request.onsuccess = cljs.core.comp.call(null,success_fn,cljs_idxdb.core.get_target_result);

request.onupgradeneeded = cljs.core.comp.call(null,upgrade_fn,cljs_idxdb.core.get_target_result);

return request.onerror = cljs_idxdb.core.error_callback;
});
cljs_idxdb.core.add_item = (function cljs_idxdb$core$add_item(db,store_name,item,success_fn){
if(cljs.core.truth_(db)){
var item__$1 = cljs.core.clj__GT_js.call(null,item);
var tx = db.transaction(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [store_name], null)),"readwrite");
var store = tx.objectStore(store_name);
var request = store.put(item__$1);
return request.onsuccess = success_fn;
} else {
return null;
}
});
cljs_idxdb.core.make_rec_acc_fn = (function cljs_idxdb$core$make_rec_acc_fn(acc,request,success_fn){
return (function (e){
var temp__4655__auto__ = cljs_idxdb.core.get_target_result.call(null,e);
if(cljs.core.truth_(temp__4655__auto__)){
var cursor = temp__4655__auto__;
request.onsuccess = cljs_idxdb$core$make_rec_acc_fn.call(null,cljs.core.conj.call(null,acc,cljs.core.js__GT_clj.call(null,cursor.value,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)),request,success_fn);

return cursor.continue();
} else {
return success_fn.call(null,acc);
}
});
});
cljs_idxdb.core.make_tx = (function cljs_idxdb$core$make_tx(var_args){
var args11493 = [];
var len__7280__auto___11496 = arguments.length;
var i__7281__auto___11497 = (0);
while(true){
if((i__7281__auto___11497 < len__7280__auto___11496)){
args11493.push((arguments[i__7281__auto___11497]));

var G__11498 = (i__7281__auto___11497 + (1));
i__7281__auto___11497 = G__11498;
continue;
} else {
}
break;
}

var G__11495 = args11493.length;
switch (G__11495) {
case 2:
return cljs_idxdb.core.make_tx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_idxdb.core.make_tx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11493.length)].join('')));

}
});

cljs_idxdb.core.make_tx.cljs$core$IFn$_invoke$arity$2 = (function (db,store_name){
return cljs_idxdb.core.make_tx.call(null,db,store_name,true);
});

cljs_idxdb.core.make_tx.cljs$core$IFn$_invoke$arity$3 = (function (db,store_name,readwrite_QMARK_){
return db.transaction(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [store_name], null)),(cljs.core.truth_(readwrite_QMARK_)?"readwrite":"readonly"));
});

cljs_idxdb.core.make_tx.cljs$lang$maxFixedArity = 3;
cljs_idxdb.core.get_tx_store = (function cljs_idxdb$core$get_tx_store(db,store_name){
var tx = cljs_idxdb.core.make_tx.call(null,db,store_name);
return tx.objectStore(store_name);
});
cljs_idxdb.core.make_range = (function cljs_idxdb$core$make_range(var_args){
var args11500 = [];
var len__7280__auto___11503 = arguments.length;
var i__7281__auto___11504 = (0);
while(true){
if((i__7281__auto___11504 < len__7280__auto___11503)){
args11500.push((arguments[i__7281__auto___11504]));

var G__11505 = (i__7281__auto___11504 + (1));
i__7281__auto___11504 = G__11505;
continue;
} else {
}
break;
}

var G__11502 = args11500.length;
switch (G__11502) {
case 1:
return cljs_idxdb.core.make_range.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return cljs_idxdb.core.make_range.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs_idxdb.core.make_range.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11500.length)].join('')));

}
});

cljs_idxdb.core.make_range.cljs$core$IFn$_invoke$arity$1 = (function (only){
return IDBKeyRange.only(only);
});

cljs_idxdb.core.make_range.cljs$core$IFn$_invoke$arity$3 = (function (lower_QMARK_,bound,open_QMARK_){
if(cljs.core.truth_(lower_QMARK_)){
return IDBKeyRange.lowerBound(bound,open_QMARK_);
} else {
return IDBKeyRange.upperBound(bound,open_QMARK_);
}
});

cljs_idxdb.core.make_range.cljs$core$IFn$_invoke$arity$4 = (function (lower,upper,open_lower_QMARK_,open_upper_QMARK_){
return IDBKeyRange.bound(lower,cljs_idxdb.core.uppoer,open_lower_QMARK_,open_upper_QMARK_);
});

cljs_idxdb.core.make_range.cljs$lang$maxFixedArity = 4;
cljs_idxdb.core.open_cursor = (function cljs_idxdb$core$open_cursor(store_or_index,range){
return store_or_index.openCursor(range);
});
cljs_idxdb.core.get_index = (function cljs_idxdb$core$get_index(store,index_name){
return store.index(index_name);
});
cljs_idxdb.core.get_all = (function cljs_idxdb$core$get_all(var_args){
var args11507 = [];
var len__7280__auto___11510 = arguments.length;
var i__7281__auto___11511 = (0);
while(true){
if((i__7281__auto___11511 < len__7280__auto___11510)){
args11507.push((arguments[i__7281__auto___11511]));

var G__11512 = (i__7281__auto___11511 + (1));
i__7281__auto___11511 = G__11512;
continue;
} else {
}
break;
}

var G__11509 = args11507.length;
switch (G__11509) {
case 3:
return cljs_idxdb.core.get_all.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs_idxdb.core.get_all.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11507.length)].join('')));

}
});

cljs_idxdb.core.get_all.cljs$core$IFn$_invoke$arity$3 = (function (db,store_name,success_fn){
return cljs_idxdb.core.get_all.call(null,db,store_name,(0),success_fn);
});

cljs_idxdb.core.get_all.cljs$core$IFn$_invoke$arity$4 = (function (db,store_name,initial_key,success_fn){
if(cljs.core.truth_(db)){
var store = cljs_idxdb.core.get_tx_store.call(null,db,store_name);
var range = cljs_idxdb.core.make_range.call(null,true,initial_key,false);
var request = cljs_idxdb.core.open_cursor.call(null,store,range);
return request.onsuccess = cljs_idxdb.core.make_rec_acc_fn.call(null,cljs.core.PersistentVector.EMPTY,request,success_fn);
} else {
return null;
}
});

cljs_idxdb.core.get_all.cljs$lang$maxFixedArity = 4;
cljs_idxdb.core.get_by_key = (function cljs_idxdb$core$get_by_key(db,store_name,key,success_fn){
if(cljs.core.truth_(db)){
var store = cljs_idxdb.core.get_tx_store.call(null,db,store_name);
var request = store.get(key);
return request.onsuccess = ((function (store,request){
return (function (e){
return success_fn.call(null,cljs.core.js__GT_clj.call(null,cljs_idxdb.core.get_target_result.call(null,e),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});})(store,request))
;
} else {
return null;
}
});
cljs_idxdb.core.get_by_index = (function cljs_idxdb$core$get_by_index(db,store_name,index_name,initial_key,success_fn){
if(cljs.core.truth_(db)){
var store = cljs_idxdb.core.get_tx_store.call(null,db,store_name);
var index = cljs_idxdb.core.get_index.call(null,store,index_name);
var range = cljs_idxdb.core.make_range.call(null,true,initial_key,false);
var request = cljs_idxdb.core.open_cursor.call(null,index,range);
return request.onsuccess = cljs_idxdb.core.make_rec_acc_fn.call(null,cljs.core.PersistentVector.EMPTY,request,success_fn);
} else {
return null;
}
});

//# sourceMappingURL=core.js.map