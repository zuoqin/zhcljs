// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args8759 = [];
var len__7280__auto___8765 = arguments.length;
var i__7281__auto___8766 = (0);
while(true){
if((i__7281__auto___8766 < len__7280__auto___8765)){
args8759.push((arguments[i__7281__auto___8766]));

var G__8767 = (i__7281__auto___8766 + (1));
i__7281__auto___8766 = G__8767;
continue;
} else {
}
break;
}

var G__8761 = args8759.length;
switch (G__8761) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8759.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async8762 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8762 = (function (f,blockable,meta8763){
this.f = f;
this.blockable = blockable;
this.meta8763 = meta8763;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async8762.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8764,meta8763__$1){
var self__ = this;
var _8764__$1 = this;
return (new cljs.core.async.t_cljs$core$async8762(self__.f,self__.blockable,meta8763__$1));
});

cljs.core.async.t_cljs$core$async8762.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8764){
var self__ = this;
var _8764__$1 = this;
return self__.meta8763;
});

cljs.core.async.t_cljs$core$async8762.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async8762.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async8762.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async8762.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async8762.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta8763","meta8763",962030703,null)], null);
});

cljs.core.async.t_cljs$core$async8762.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8762.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8762";

cljs.core.async.t_cljs$core$async8762.cljs$lang$ctorPrWriter = (function (this__6816__auto__,writer__6817__auto__,opt__6818__auto__){
return cljs.core._write.call(null,writer__6817__auto__,"cljs.core.async/t_cljs$core$async8762");
});

cljs.core.async.__GT_t_cljs$core$async8762 = (function cljs$core$async$__GT_t_cljs$core$async8762(f__$1,blockable__$1,meta8763){
return (new cljs.core.async.t_cljs$core$async8762(f__$1,blockable__$1,meta8763));
});

}

return (new cljs.core.async.t_cljs$core$async8762(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args8771 = [];
var len__7280__auto___8774 = arguments.length;
var i__7281__auto___8775 = (0);
while(true){
if((i__7281__auto___8775 < len__7280__auto___8774)){
args8771.push((arguments[i__7281__auto___8775]));

var G__8776 = (i__7281__auto___8775 + (1));
i__7281__auto___8775 = G__8776;
continue;
} else {
}
break;
}

var G__8773 = args8771.length;
switch (G__8773) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8771.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args8778 = [];
var len__7280__auto___8781 = arguments.length;
var i__7281__auto___8782 = (0);
while(true){
if((i__7281__auto___8782 < len__7280__auto___8781)){
args8778.push((arguments[i__7281__auto___8782]));

var G__8783 = (i__7281__auto___8782 + (1));
i__7281__auto___8782 = G__8783;
continue;
} else {
}
break;
}

var G__8780 = args8778.length;
switch (G__8780) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8778.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args8785 = [];
var len__7280__auto___8788 = arguments.length;
var i__7281__auto___8789 = (0);
while(true){
if((i__7281__auto___8789 < len__7280__auto___8788)){
args8785.push((arguments[i__7281__auto___8789]));

var G__8790 = (i__7281__auto___8789 + (1));
i__7281__auto___8789 = G__8790;
continue;
} else {
}
break;
}

var G__8787 = args8785.length;
switch (G__8787) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8785.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_8792 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_8792);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_8792,ret){
return (function (){
return fn1.call(null,val_8792);
});})(val_8792,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args8793 = [];
var len__7280__auto___8796 = arguments.length;
var i__7281__auto___8797 = (0);
while(true){
if((i__7281__auto___8797 < len__7280__auto___8796)){
args8793.push((arguments[i__7281__auto___8797]));

var G__8798 = (i__7281__auto___8797 + (1));
i__7281__auto___8797 = G__8798;
continue;
} else {
}
break;
}

var G__8795 = args8793.length;
switch (G__8795) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8793.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__7125__auto___8800 = n;
var x_8801 = (0);
while(true){
if((x_8801 < n__7125__auto___8800)){
(a[x_8801] = (0));

var G__8802 = (x_8801 + (1));
x_8801 = G__8802;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__8803 = (i + (1));
i = G__8803;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async8807 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8807 = (function (alt_flag,flag,meta8808){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta8808 = meta8808;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async8807.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_8809,meta8808__$1){
var self__ = this;
var _8809__$1 = this;
return (new cljs.core.async.t_cljs$core$async8807(self__.alt_flag,self__.flag,meta8808__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async8807.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_8809){
var self__ = this;
var _8809__$1 = this;
return self__.meta8808;
});})(flag))
;

cljs.core.async.t_cljs$core$async8807.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async8807.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async8807.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async8807.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async8807.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta8808","meta8808",1841259687,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async8807.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8807.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8807";

cljs.core.async.t_cljs$core$async8807.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__6816__auto__,writer__6817__auto__,opt__6818__auto__){
return cljs.core._write.call(null,writer__6817__auto__,"cljs.core.async/t_cljs$core$async8807");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async8807 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async8807(alt_flag__$1,flag__$1,meta8808){
return (new cljs.core.async.t_cljs$core$async8807(alt_flag__$1,flag__$1,meta8808));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async8807(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async8813 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8813 = (function (alt_handler,flag,cb,meta8814){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta8814 = meta8814;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async8813.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8815,meta8814__$1){
var self__ = this;
var _8815__$1 = this;
return (new cljs.core.async.t_cljs$core$async8813(self__.alt_handler,self__.flag,self__.cb,meta8814__$1));
});

cljs.core.async.t_cljs$core$async8813.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8815){
var self__ = this;
var _8815__$1 = this;
return self__.meta8814;
});

cljs.core.async.t_cljs$core$async8813.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async8813.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async8813.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async8813.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async8813.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta8814","meta8814",2115878386,null)], null);
});

cljs.core.async.t_cljs$core$async8813.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8813.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8813";

cljs.core.async.t_cljs$core$async8813.cljs$lang$ctorPrWriter = (function (this__6816__auto__,writer__6817__auto__,opt__6818__auto__){
return cljs.core._write.call(null,writer__6817__auto__,"cljs.core.async/t_cljs$core$async8813");
});

cljs.core.async.__GT_t_cljs$core$async8813 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async8813(alt_handler__$1,flag__$1,cb__$1,meta8814){
return (new cljs.core.async.t_cljs$core$async8813(alt_handler__$1,flag__$1,cb__$1,meta8814));
});

}

return (new cljs.core.async.t_cljs$core$async8813(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__8816_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__8816_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__8817_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__8817_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__6210__auto__ = wport;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return port;
}
})()], null));
} else {
var G__8818 = (i + (1));
i = G__8818;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6210__auto__ = ret;
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__6198__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__6198__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__6198__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__7287__auto__ = [];
var len__7280__auto___8824 = arguments.length;
var i__7281__auto___8825 = (0);
while(true){
if((i__7281__auto___8825 < len__7280__auto___8824)){
args__7287__auto__.push((arguments[i__7281__auto___8825]));

var G__8826 = (i__7281__auto___8825 + (1));
i__7281__auto___8825 = G__8826;
continue;
} else {
}
break;
}

var argseq__7288__auto__ = ((((1) < args__7287__auto__.length))?(new cljs.core.IndexedSeq(args__7287__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7288__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__8821){
var map__8822 = p__8821;
var map__8822__$1 = ((((!((map__8822 == null)))?((((map__8822.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8822.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8822):map__8822);
var opts = map__8822__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq8819){
var G__8820 = cljs.core.first.call(null,seq8819);
var seq8819__$1 = cljs.core.next.call(null,seq8819);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8820,seq8819__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args8827 = [];
var len__7280__auto___8877 = arguments.length;
var i__7281__auto___8878 = (0);
while(true){
if((i__7281__auto___8878 < len__7280__auto___8877)){
args8827.push((arguments[i__7281__auto___8878]));

var G__8879 = (i__7281__auto___8878 + (1));
i__7281__auto___8878 = G__8879;
continue;
} else {
}
break;
}

var G__8829 = args8827.length;
switch (G__8829) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8827.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__8714__auto___8881 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8714__auto___8881){
return (function (){
var f__8715__auto__ = (function (){var switch__8602__auto__ = ((function (c__8714__auto___8881){
return (function (state_8853){
var state_val_8854 = (state_8853[(1)]);
if((state_val_8854 === (7))){
var inst_8849 = (state_8853[(2)]);
var state_8853__$1 = state_8853;
var statearr_8855_8882 = state_8853__$1;
(statearr_8855_8882[(2)] = inst_8849);

(statearr_8855_8882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8854 === (1))){
var state_8853__$1 = state_8853;
var statearr_8856_8883 = state_8853__$1;
(statearr_8856_8883[(2)] = null);

(statearr_8856_8883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8854 === (4))){
var inst_8832 = (state_8853[(7)]);
var inst_8832__$1 = (state_8853[(2)]);
var inst_8833 = (inst_8832__$1 == null);
var state_8853__$1 = (function (){var statearr_8857 = state_8853;
(statearr_8857[(7)] = inst_8832__$1);

return statearr_8857;
})();
if(cljs.core.truth_(inst_8833)){
var statearr_8858_8884 = state_8853__$1;
(statearr_8858_8884[(1)] = (5));

} else {
var statearr_8859_8885 = state_8853__$1;
(statearr_8859_8885[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8854 === (13))){
var state_8853__$1 = state_8853;
var statearr_8860_8886 = state_8853__$1;
(statearr_8860_8886[(2)] = null);

(statearr_8860_8886[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8854 === (6))){
var inst_8832 = (state_8853[(7)]);
var state_8853__$1 = state_8853;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8853__$1,(11),to,inst_8832);
} else {
if((state_val_8854 === (3))){
var inst_8851 = (state_8853[(2)]);
var state_8853__$1 = state_8853;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8853__$1,inst_8851);
} else {
if((state_val_8854 === (12))){
var state_8853__$1 = state_8853;
var statearr_8861_8887 = state_8853__$1;
(statearr_8861_8887[(2)] = null);

(statearr_8861_8887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8854 === (2))){
var state_8853__$1 = state_8853;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8853__$1,(4),from);
} else {
if((state_val_8854 === (11))){
var inst_8842 = (state_8853[(2)]);
var state_8853__$1 = state_8853;
if(cljs.core.truth_(inst_8842)){
var statearr_8862_8888 = state_8853__$1;
(statearr_8862_8888[(1)] = (12));

} else {
var statearr_8863_8889 = state_8853__$1;
(statearr_8863_8889[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8854 === (9))){
var state_8853__$1 = state_8853;
var statearr_8864_8890 = state_8853__$1;
(statearr_8864_8890[(2)] = null);

(statearr_8864_8890[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8854 === (5))){
var state_8853__$1 = state_8853;
if(cljs.core.truth_(close_QMARK_)){
var statearr_8865_8891 = state_8853__$1;
(statearr_8865_8891[(1)] = (8));

} else {
var statearr_8866_8892 = state_8853__$1;
(statearr_8866_8892[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8854 === (14))){
var inst_8847 = (state_8853[(2)]);
var state_8853__$1 = state_8853;
var statearr_8867_8893 = state_8853__$1;
(statearr_8867_8893[(2)] = inst_8847);

(statearr_8867_8893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8854 === (10))){
var inst_8839 = (state_8853[(2)]);
var state_8853__$1 = state_8853;
var statearr_8868_8894 = state_8853__$1;
(statearr_8868_8894[(2)] = inst_8839);

(statearr_8868_8894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8854 === (8))){
var inst_8836 = cljs.core.async.close_BANG_.call(null,to);
var state_8853__$1 = state_8853;
var statearr_8869_8895 = state_8853__$1;
(statearr_8869_8895[(2)] = inst_8836);

(statearr_8869_8895[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8714__auto___8881))
;
return ((function (switch__8602__auto__,c__8714__auto___8881){
return (function() {
var cljs$core$async$state_machine__8603__auto__ = null;
var cljs$core$async$state_machine__8603__auto____0 = (function (){
var statearr_8873 = [null,null,null,null,null,null,null,null];
(statearr_8873[(0)] = cljs$core$async$state_machine__8603__auto__);

(statearr_8873[(1)] = (1));

return statearr_8873;
});
var cljs$core$async$state_machine__8603__auto____1 = (function (state_8853){
while(true){
var ret_value__8604__auto__ = (function (){try{while(true){
var result__8605__auto__ = switch__8602__auto__.call(null,state_8853);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8605__auto__;
}
break;
}
}catch (e8874){if((e8874 instanceof Object)){
var ex__8606__auto__ = e8874;
var statearr_8875_8896 = state_8853;
(statearr_8875_8896[(5)] = ex__8606__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8874;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8897 = state_8853;
state_8853 = G__8897;
continue;
} else {
return ret_value__8604__auto__;
}
break;
}
});
cljs$core$async$state_machine__8603__auto__ = function(state_8853){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8603__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8603__auto____1.call(this,state_8853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8603__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8603__auto____0;
cljs$core$async$state_machine__8603__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8603__auto____1;
return cljs$core$async$state_machine__8603__auto__;
})()
;})(switch__8602__auto__,c__8714__auto___8881))
})();
var state__8716__auto__ = (function (){var statearr_8876 = f__8715__auto__.call(null);
(statearr_8876[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8714__auto___8881);

return statearr_8876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8716__auto__);
});})(c__8714__auto___8881))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__9081){
var vec__9082 = p__9081;
var v = cljs.core.nth.call(null,vec__9082,(0),null);
var p = cljs.core.nth.call(null,vec__9082,(1),null);
var job = vec__9082;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__8714__auto___9264 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8714__auto___9264,res,vec__9082,v,p,job,jobs,results){
return (function (){
var f__8715__auto__ = (function (){var switch__8602__auto__ = ((function (c__8714__auto___9264,res,vec__9082,v,p,job,jobs,results){
return (function (state_9087){
var state_val_9088 = (state_9087[(1)]);
if((state_val_9088 === (1))){
var state_9087__$1 = state_9087;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9087__$1,(2),res,v);
} else {
if((state_val_9088 === (2))){
var inst_9084 = (state_9087[(2)]);
var inst_9085 = cljs.core.async.close_BANG_.call(null,res);
var state_9087__$1 = (function (){var statearr_9089 = state_9087;
(statearr_9089[(7)] = inst_9084);

return statearr_9089;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9087__$1,inst_9085);
} else {
return null;
}
}
});})(c__8714__auto___9264,res,vec__9082,v,p,job,jobs,results))
;
return ((function (switch__8602__auto__,c__8714__auto___9264,res,vec__9082,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8603__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8603__auto____0 = (function (){
var statearr_9093 = [null,null,null,null,null,null,null,null];
(statearr_9093[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8603__auto__);

(statearr_9093[(1)] = (1));

return statearr_9093;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8603__auto____1 = (function (state_9087){
while(true){
var ret_value__8604__auto__ = (function (){try{while(true){
var result__8605__auto__ = switch__8602__auto__.call(null,state_9087);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8605__auto__;
}
break;
}
}catch (e9094){if((e9094 instanceof Object)){
var ex__8606__auto__ = e9094;
var statearr_9095_9265 = state_9087;
(statearr_9095_9265[(5)] = ex__8606__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9087);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9094;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9266 = state_9087;
state_9087 = G__9266;
continue;
} else {
return ret_value__8604__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8603__auto__ = function(state_9087){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8603__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8603__auto____1.call(this,state_9087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8603__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8603__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8603__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8603__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8603__auto__;
})()
;})(switch__8602__auto__,c__8714__auto___9264,res,vec__9082,v,p,job,jobs,results))
})();
var state__8716__auto__ = (function (){var statearr_9096 = f__8715__auto__.call(null);
(statearr_9096[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8714__auto___9264);

return statearr_9096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8716__auto__);
});})(c__8714__auto___9264,res,vec__9082,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__9097){
var vec__9098 = p__9097;
var v = cljs.core.nth.call(null,vec__9098,(0),null);
var p = cljs.core.nth.call(null,vec__9098,(1),null);
var job = vec__9098;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__7125__auto___9267 = n;
var __9268 = (0);
while(true){
if((__9268 < n__7125__auto___9267)){
var G__9099_9269 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__9099_9269) {
case "compute":
var c__8714__auto___9271 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__9268,c__8714__auto___9271,G__9099_9269,n__7125__auto___9267,jobs,results,process,async){
return (function (){
var f__8715__auto__ = (function (){var switch__8602__auto__ = ((function (__9268,c__8714__auto___9271,G__9099_9269,n__7125__auto___9267,jobs,results,process,async){
return (function (state_9112){
var state_val_9113 = (state_9112[(1)]);
if((state_val_9113 === (1))){
var state_9112__$1 = state_9112;
var statearr_9114_9272 = state_9112__$1;
(statearr_9114_9272[(2)] = null);

(statearr_9114_9272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9113 === (2))){
var state_9112__$1 = state_9112;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9112__$1,(4),jobs);
} else {
if((state_val_9113 === (3))){
var inst_9110 = (state_9112[(2)]);
var state_9112__$1 = state_9112;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9112__$1,inst_9110);
} else {
if((state_val_9113 === (4))){
var inst_9102 = (state_9112[(2)]);
var inst_9103 = process.call(null,inst_9102);
var state_9112__$1 = state_9112;
if(cljs.core.truth_(inst_9103)){
var statearr_9115_9273 = state_9112__$1;
(statearr_9115_9273[(1)] = (5));

} else {
var statearr_9116_9274 = state_9112__$1;
(statearr_9116_9274[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9113 === (5))){
var state_9112__$1 = state_9112;
var statearr_9117_9275 = state_9112__$1;
(statearr_9117_9275[(2)] = null);

(statearr_9117_9275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9113 === (6))){
var state_9112__$1 = state_9112;
var statearr_9118_9276 = state_9112__$1;
(statearr_9118_9276[(2)] = null);

(statearr_9118_9276[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9113 === (7))){
var inst_9108 = (state_9112[(2)]);
var state_9112__$1 = state_9112;
var statearr_9119_9277 = state_9112__$1;
(statearr_9119_9277[(2)] = inst_9108);

(statearr_9119_9277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__9268,c__8714__auto___9271,G__9099_9269,n__7125__auto___9267,jobs,results,process,async))
;
return ((function (__9268,switch__8602__auto__,c__8714__auto___9271,G__9099_9269,n__7125__auto___9267,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8603__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8603__auto____0 = (function (){
var statearr_9123 = [null,null,null,null,null,null,null];
(statearr_9123[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8603__auto__);

(statearr_9123[(1)] = (1));

return statearr_9123;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8603__auto____1 = (function (state_9112){
while(true){
var ret_value__8604__auto__ = (function (){try{while(true){
var result__8605__auto__ = switch__8602__auto__.call(null,state_9112);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8605__auto__;
}
break;
}
}catch (e9124){if((e9124 instanceof Object)){
var ex__8606__auto__ = e9124;
var statearr_9125_9278 = state_9112;
(statearr_9125_9278[(5)] = ex__8606__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9112);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9124;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9279 = state_9112;
state_9112 = G__9279;
continue;
} else {
return ret_value__8604__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8603__auto__ = function(state_9112){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8603__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8603__auto____1.call(this,state_9112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8603__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8603__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8603__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8603__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8603__auto__;
})()
;})(__9268,switch__8602__auto__,c__8714__auto___9271,G__9099_9269,n__7125__auto___9267,jobs,results,process,async))
})();
var state__8716__auto__ = (function (){var statearr_9126 = f__8715__auto__.call(null);
(statearr_9126[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8714__auto___9271);

return statearr_9126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8716__auto__);
});})(__9268,c__8714__auto___9271,G__9099_9269,n__7125__auto___9267,jobs,results,process,async))
);


break;
case "async":
var c__8714__auto___9280 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__9268,c__8714__auto___9280,G__9099_9269,n__7125__auto___9267,jobs,results,process,async){
return (function (){
var f__8715__auto__ = (function (){var switch__8602__auto__ = ((function (__9268,c__8714__auto___9280,G__9099_9269,n__7125__auto___9267,jobs,results,process,async){
return (function (state_9139){
var state_val_9140 = (state_9139[(1)]);
if((state_val_9140 === (1))){
var state_9139__$1 = state_9139;
var statearr_9141_9281 = state_9139__$1;
(statearr_9141_9281[(2)] = null);

(statearr_9141_9281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9140 === (2))){
var state_9139__$1 = state_9139;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9139__$1,(4),jobs);
} else {
if((state_val_9140 === (3))){
var inst_9137 = (state_9139[(2)]);
var state_9139__$1 = state_9139;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9139__$1,inst_9137);
} else {
if((state_val_9140 === (4))){
var inst_9129 = (state_9139[(2)]);
var inst_9130 = async.call(null,inst_9129);
var state_9139__$1 = state_9139;
if(cljs.core.truth_(inst_9130)){
var statearr_9142_9282 = state_9139__$1;
(statearr_9142_9282[(1)] = (5));

} else {
var statearr_9143_9283 = state_9139__$1;
(statearr_9143_9283[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9140 === (5))){
var state_9139__$1 = state_9139;
var statearr_9144_9284 = state_9139__$1;
(statearr_9144_9284[(2)] = null);

(statearr_9144_9284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9140 === (6))){
var state_9139__$1 = state_9139;
var statearr_9145_9285 = state_9139__$1;
(statearr_9145_9285[(2)] = null);

(statearr_9145_9285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9140 === (7))){
var inst_9135 = (state_9139[(2)]);
var state_9139__$1 = state_9139;
var statearr_9146_9286 = state_9139__$1;
(statearr_9146_9286[(2)] = inst_9135);

(statearr_9146_9286[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__9268,c__8714__auto___9280,G__9099_9269,n__7125__auto___9267,jobs,results,process,async))
;
return ((function (__9268,switch__8602__auto__,c__8714__auto___9280,G__9099_9269,n__7125__auto___9267,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8603__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8603__auto____0 = (function (){
var statearr_9150 = [null,null,null,null,null,null,null];
(statearr_9150[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8603__auto__);

(statearr_9150[(1)] = (1));

return statearr_9150;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8603__auto____1 = (function (state_9139){
while(true){
var ret_value__8604__auto__ = (function (){try{while(true){
var result__8605__auto__ = switch__8602__auto__.call(null,state_9139);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8605__auto__;
}
break;
}
}catch (e9151){if((e9151 instanceof Object)){
var ex__8606__auto__ = e9151;
var statearr_9152_9287 = state_9139;
(statearr_9152_9287[(5)] = ex__8606__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9139);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9151;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9288 = state_9139;
state_9139 = G__9288;
continue;
} else {
return ret_value__8604__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8603__auto__ = function(state_9139){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8603__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8603__auto____1.call(this,state_9139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8603__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8603__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8603__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8603__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8603__auto__;
})()
;})(__9268,switch__8602__auto__,c__8714__auto___9280,G__9099_9269,n__7125__auto___9267,jobs,results,process,async))
})();
var state__8716__auto__ = (function (){var statearr_9153 = f__8715__auto__.call(null);
(statearr_9153[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8714__auto___9280);

return statearr_9153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8716__auto__);
});})(__9268,c__8714__auto___9280,G__9099_9269,n__7125__auto___9267,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__9289 = (__9268 + (1));
__9268 = G__9289;
continue;
} else {
}
break;
}

var c__8714__auto___9290 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8714__auto___9290,jobs,results,process,async){
return (function (){
var f__8715__auto__ = (function (){var switch__8602__auto__ = ((function (c__8714__auto___9290,jobs,results,process,async){
return (function (state_9175){
var state_val_9176 = (state_9175[(1)]);
if((state_val_9176 === (1))){
var state_9175__$1 = state_9175;
var statearr_9177_9291 = state_9175__$1;
(statearr_9177_9291[(2)] = null);

(statearr_9177_9291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9176 === (2))){
var state_9175__$1 = state_9175;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9175__$1,(4),from);
} else {
if((state_val_9176 === (3))){
var inst_9173 = (state_9175[(2)]);
var state_9175__$1 = state_9175;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9175__$1,inst_9173);
} else {
if((state_val_9176 === (4))){
var inst_9156 = (state_9175[(7)]);
var inst_9156__$1 = (state_9175[(2)]);
var inst_9157 = (inst_9156__$1 == null);
var state_9175__$1 = (function (){var statearr_9178 = state_9175;
(statearr_9178[(7)] = inst_9156__$1);

return statearr_9178;
})();
if(cljs.core.truth_(inst_9157)){
var statearr_9179_9292 = state_9175__$1;
(statearr_9179_9292[(1)] = (5));

} else {
var statearr_9180_9293 = state_9175__$1;
(statearr_9180_9293[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9176 === (5))){
var inst_9159 = cljs.core.async.close_BANG_.call(null,jobs);
var state_9175__$1 = state_9175;
var statearr_9181_9294 = state_9175__$1;
(statearr_9181_9294[(2)] = inst_9159);

(statearr_9181_9294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9176 === (6))){
var inst_9156 = (state_9175[(7)]);
var inst_9161 = (state_9175[(8)]);
var inst_9161__$1 = cljs.core.async.chan.call(null,(1));
var inst_9162 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9163 = [inst_9156,inst_9161__$1];
var inst_9164 = (new cljs.core.PersistentVector(null,2,(5),inst_9162,inst_9163,null));
var state_9175__$1 = (function (){var statearr_9182 = state_9175;
(statearr_9182[(8)] = inst_9161__$1);

return statearr_9182;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9175__$1,(8),jobs,inst_9164);
} else {
if((state_val_9176 === (7))){
var inst_9171 = (state_9175[(2)]);
var state_9175__$1 = state_9175;
var statearr_9183_9295 = state_9175__$1;
(statearr_9183_9295[(2)] = inst_9171);

(statearr_9183_9295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9176 === (8))){
var inst_9161 = (state_9175[(8)]);
var inst_9166 = (state_9175[(2)]);
var state_9175__$1 = (function (){var statearr_9184 = state_9175;
(statearr_9184[(9)] = inst_9166);

return statearr_9184;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9175__$1,(9),results,inst_9161);
} else {
if((state_val_9176 === (9))){
var inst_9168 = (state_9175[(2)]);
var state_9175__$1 = (function (){var statearr_9185 = state_9175;
(statearr_9185[(10)] = inst_9168);

return statearr_9185;
})();
var statearr_9186_9296 = state_9175__$1;
(statearr_9186_9296[(2)] = null);

(statearr_9186_9296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__8714__auto___9290,jobs,results,process,async))
;
return ((function (switch__8602__auto__,c__8714__auto___9290,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8603__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8603__auto____0 = (function (){
var statearr_9190 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9190[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8603__auto__);

(statearr_9190[(1)] = (1));

return statearr_9190;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8603__auto____1 = (function (state_9175){
while(true){
var ret_value__8604__auto__ = (function (){try{while(true){
var result__8605__auto__ = switch__8602__auto__.call(null,state_9175);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8605__auto__;
}
break;
}
}catch (e9191){if((e9191 instanceof Object)){
var ex__8606__auto__ = e9191;
var statearr_9192_9297 = state_9175;
(statearr_9192_9297[(5)] = ex__8606__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9175);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9191;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9298 = state_9175;
state_9175 = G__9298;
continue;
} else {
return ret_value__8604__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8603__auto__ = function(state_9175){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8603__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8603__auto____1.call(this,state_9175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8603__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8603__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8603__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8603__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8603__auto__;
})()
;})(switch__8602__auto__,c__8714__auto___9290,jobs,results,process,async))
})();
var state__8716__auto__ = (function (){var statearr_9193 = f__8715__auto__.call(null);
(statearr_9193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8714__auto___9290);

return statearr_9193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8716__auto__);
});})(c__8714__auto___9290,jobs,results,process,async))
);


var c__8714__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8714__auto__,jobs,results,process,async){
return (function (){
var f__8715__auto__ = (function (){var switch__8602__auto__ = ((function (c__8714__auto__,jobs,results,process,async){
return (function (state_9231){
var state_val_9232 = (state_9231[(1)]);
if((state_val_9232 === (7))){
var inst_9227 = (state_9231[(2)]);
var state_9231__$1 = state_9231;
var statearr_9233_9299 = state_9231__$1;
(statearr_9233_9299[(2)] = inst_9227);

(statearr_9233_9299[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9232 === (20))){
var state_9231__$1 = state_9231;
var statearr_9234_9300 = state_9231__$1;
(statearr_9234_9300[(2)] = null);

(statearr_9234_9300[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9232 === (1))){
var state_9231__$1 = state_9231;
var statearr_9235_9301 = state_9231__$1;
(statearr_9235_9301[(2)] = null);

(statearr_9235_9301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9232 === (4))){
var inst_9196 = (state_9231[(7)]);
var inst_9196__$1 = (state_9231[(2)]);
var inst_9197 = (inst_9196__$1 == null);
var state_9231__$1 = (function (){var statearr_9236 = state_9231;
(statearr_9236[(7)] = inst_9196__$1);

return statearr_9236;
})();
if(cljs.core.truth_(inst_9197)){
var statearr_9237_9302 = state_9231__$1;
(statearr_9237_9302[(1)] = (5));

} else {
var statearr_9238_9303 = state_9231__$1;
(statearr_9238_9303[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9232 === (15))){
var inst_9209 = (state_9231[(8)]);
var state_9231__$1 = state_9231;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9231__$1,(18),to,inst_9209);
} else {
if((state_val_9232 === (21))){
var inst_9222 = (state_9231[(2)]);
var state_9231__$1 = state_9231;
var statearr_9239_9304 = state_9231__$1;
(statearr_9239_9304[(2)] = inst_9222);

(statearr_9239_9304[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9232 === (13))){
var inst_9224 = (state_9231[(2)]);
var state_9231__$1 = (function (){var statearr_9240 = state_9231;
(statearr_9240[(9)] = inst_9224);

return statearr_9240;
})();
var statearr_9241_9305 = state_9231__$1;
(statearr_9241_9305[(2)] = null);

(statearr_9241_9305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9232 === (6))){
var inst_9196 = (state_9231[(7)]);
var state_9231__$1 = state_9231;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9231__$1,(11),inst_9196);
} else {
if((state_val_9232 === (17))){
var inst_9217 = (state_9231[(2)]);
var state_9231__$1 = state_9231;
if(cljs.core.truth_(inst_9217)){
var statearr_9242_9306 = state_9231__$1;
(statearr_9242_9306[(1)] = (19));

} else {
var statearr_9243_9307 = state_9231__$1;
(statearr_9243_9307[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9232 === (3))){
var inst_9229 = (state_9231[(2)]);
var state_9231__$1 = state_9231;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9231__$1,inst_9229);
} else {
if((state_val_9232 === (12))){
var inst_9206 = (state_9231[(10)]);
var state_9231__$1 = state_9231;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9231__$1,(14),inst_9206);
} else {
if((state_val_9232 === (2))){
var state_9231__$1 = state_9231;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9231__$1,(4),results);
} else {
if((state_val_9232 === (19))){
var state_9231__$1 = state_9231;
var statearr_9244_9308 = state_9231__$1;
(statearr_9244_9308[(2)] = null);

(statearr_9244_9308[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9232 === (11))){
var inst_9206 = (state_9231[(2)]);
var state_9231__$1 = (function (){var statearr_9245 = state_9231;
(statearr_9245[(10)] = inst_9206);

return statearr_9245;
})();
var statearr_9246_9309 = state_9231__$1;
(statearr_9246_9309[(2)] = null);

(statearr_9246_9309[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9232 === (9))){
var state_9231__$1 = state_9231;
var statearr_9247_9310 = state_9231__$1;
(statearr_9247_9310[(2)] = null);

(statearr_9247_9310[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9232 === (5))){
var state_9231__$1 = state_9231;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9248_9311 = state_9231__$1;
(statearr_9248_9311[(1)] = (8));

} else {
var statearr_9249_9312 = state_9231__$1;
(statearr_9249_9312[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9232 === (14))){
var inst_9209 = (state_9231[(8)]);
var inst_9211 = (state_9231[(11)]);
var inst_9209__$1 = (state_9231[(2)]);
var inst_9210 = (inst_9209__$1 == null);
var inst_9211__$1 = cljs.core.not.call(null,inst_9210);
var state_9231__$1 = (function (){var statearr_9250 = state_9231;
(statearr_9250[(8)] = inst_9209__$1);

(statearr_9250[(11)] = inst_9211__$1);

return statearr_9250;
})();
if(inst_9211__$1){
var statearr_9251_9313 = state_9231__$1;
(statearr_9251_9313[(1)] = (15));

} else {
var statearr_9252_9314 = state_9231__$1;
(statearr_9252_9314[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9232 === (16))){
var inst_9211 = (state_9231[(11)]);
var state_9231__$1 = state_9231;
var statearr_9253_9315 = state_9231__$1;
(statearr_9253_9315[(2)] = inst_9211);

(statearr_9253_9315[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9232 === (10))){
var inst_9203 = (state_9231[(2)]);
var state_9231__$1 = state_9231;
var statearr_9254_9316 = state_9231__$1;
(statearr_9254_9316[(2)] = inst_9203);

(statearr_9254_9316[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9232 === (18))){
var inst_9214 = (state_9231[(2)]);
var state_9231__$1 = state_9231;
var statearr_9255_9317 = state_9231__$1;
(statearr_9255_9317[(2)] = inst_9214);

(statearr_9255_9317[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9232 === (8))){
var inst_9200 = cljs.core.async.close_BANG_.call(null,to);
var state_9231__$1 = state_9231;
var statearr_9256_9318 = state_9231__$1;
(statearr_9256_9318[(2)] = inst_9200);

(statearr_9256_9318[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8714__auto__,jobs,results,process,async))
;
return ((function (switch__8602__auto__,c__8714__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8603__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8603__auto____0 = (function (){
var statearr_9260 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9260[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8603__auto__);

(statearr_9260[(1)] = (1));

return statearr_9260;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8603__auto____1 = (function (state_9231){
while(true){
var ret_value__8604__auto__ = (function (){try{while(true){
var result__8605__auto__ = switch__8602__auto__.call(null,state_9231);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8605__auto__;
}
break;
}
}catch (e9261){if((e9261 instanceof Object)){
var ex__8606__auto__ = e9261;
var statearr_9262_9319 = state_9231;
(statearr_9262_9319[(5)] = ex__8606__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9261;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9320 = state_9231;
state_9231 = G__9320;
continue;
} else {
return ret_value__8604__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8603__auto__ = function(state_9231){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8603__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8603__auto____1.call(this,state_9231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8603__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8603__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8603__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8603__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8603__auto__;
})()
;})(switch__8602__auto__,c__8714__auto__,jobs,results,process,async))
})();
var state__8716__auto__ = (function (){var statearr_9263 = f__8715__auto__.call(null);
(statearr_9263[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8714__auto__);

return statearr_9263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8716__auto__);
});})(c__8714__auto__,jobs,results,process,async))
);

return c__8714__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args9321 = [];
var len__7280__auto___9324 = arguments.length;
var i__7281__auto___9325 = (0);
while(true){
if((i__7281__auto___9325 < len__7280__auto___9324)){
args9321.push((arguments[i__7281__auto___9325]));

var G__9326 = (i__7281__auto___9325 + (1));
i__7281__auto___9325 = G__9326;
continue;
} else {
}
break;
}

var G__9323 = args9321.length;
switch (G__9323) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9321.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args9328 = [];
var len__7280__auto___9331 = arguments.length;
var i__7281__auto___9332 = (0);
while(true){
if((i__7281__auto___9332 < len__7280__auto___9331)){
args9328.push((arguments[i__7281__auto___9332]));

var G__9333 = (i__7281__auto___9332 + (1));
i__7281__auto___9332 = G__9333;
continue;
} else {
}
break;
}

var G__9330 = args9328.length;
switch (G__9330) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9328.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args9335 = [];
var len__7280__auto___9388 = arguments.length;
var i__7281__auto___9389 = (0);
while(true){
if((i__7281__auto___9389 < len__7280__auto___9388)){
args9335.push((arguments[i__7281__auto___9389]));

var G__9390 = (i__7281__auto___9389 + (1));
i__7281__auto___9389 = G__9390;
continue;
} else {
}
break;
}

var G__9337 = args9335.length;
switch (G__9337) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9335.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__8714__auto___9392 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8714__auto___9392,tc,fc){
return (function (){
var f__8715__auto__ = (function (){var switch__8602__auto__ = ((function (c__8714__auto___9392,tc,fc){
return (function (state_9363){
var state_val_9364 = (state_9363[(1)]);
if((state_val_9364 === (7))){
var inst_9359 = (state_9363[(2)]);
var state_9363__$1 = state_9363;
var statearr_9365_9393 = state_9363__$1;
(statearr_9365_9393[(2)] = inst_9359);

(statearr_9365_9393[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9364 === (1))){
var state_9363__$1 = state_9363;
var statearr_9366_9394 = state_9363__$1;
(statearr_9366_9394[(2)] = null);

(statearr_9366_9394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9364 === (4))){
var inst_9340 = (state_9363[(7)]);
var inst_9340__$1 = (state_9363[(2)]);
var inst_9341 = (inst_9340__$1 == null);
var state_9363__$1 = (function (){var statearr_9367 = state_9363;
(statearr_9367[(7)] = inst_9340__$1);

return statearr_9367;
})();
if(cljs.core.truth_(inst_9341)){
var statearr_9368_9395 = state_9363__$1;
(statearr_9368_9395[(1)] = (5));

} else {
var statearr_9369_9396 = state_9363__$1;
(statearr_9369_9396[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9364 === (13))){
var state_9363__$1 = state_9363;
var statearr_9370_9397 = state_9363__$1;
(statearr_9370_9397[(2)] = null);

(statearr_9370_9397[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9364 === (6))){
var inst_9340 = (state_9363[(7)]);
var inst_9346 = p.call(null,inst_9340);
var state_9363__$1 = state_9363;
if(cljs.core.truth_(inst_9346)){
var statearr_9371_9398 = state_9363__$1;
(statearr_9371_9398[(1)] = (9));

} else {
var statearr_9372_9399 = state_9363__$1;
(statearr_9372_9399[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9364 === (3))){
var inst_9361 = (state_9363[(2)]);
var state_9363__$1 = state_9363;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9363__$1,inst_9361);
} else {
if((state_val_9364 === (12))){
var state_9363__$1 = state_9363;
var statearr_9373_9400 = state_9363__$1;
(statearr_9373_9400[(2)] = null);

(statearr_9373_9400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9364 === (2))){
var state_9363__$1 = state_9363;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9363__$1,(4),ch);
} else {
if((state_val_9364 === (11))){
var inst_9340 = (state_9363[(7)]);
var inst_9350 = (state_9363[(2)]);
var state_9363__$1 = state_9363;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9363__$1,(8),inst_9350,inst_9340);
} else {
if((state_val_9364 === (9))){
var state_9363__$1 = state_9363;
var statearr_9374_9401 = state_9363__$1;
(statearr_9374_9401[(2)] = tc);

(statearr_9374_9401[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9364 === (5))){
var inst_9343 = cljs.core.async.close_BANG_.call(null,tc);
var inst_9344 = cljs.core.async.close_BANG_.call(null,fc);
var state_9363__$1 = (function (){var statearr_9375 = state_9363;
(statearr_9375[(8)] = inst_9343);

return statearr_9375;
})();
var statearr_9376_9402 = state_9363__$1;
(statearr_9376_9402[(2)] = inst_9344);

(statearr_9376_9402[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9364 === (14))){
var inst_9357 = (state_9363[(2)]);
var state_9363__$1 = state_9363;
var statearr_9377_9403 = state_9363__$1;
(statearr_9377_9403[(2)] = inst_9357);

(statearr_9377_9403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9364 === (10))){
var state_9363__$1 = state_9363;
var statearr_9378_9404 = state_9363__$1;
(statearr_9378_9404[(2)] = fc);

(statearr_9378_9404[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9364 === (8))){
var inst_9352 = (state_9363[(2)]);
var state_9363__$1 = state_9363;
if(cljs.core.truth_(inst_9352)){
var statearr_9379_9405 = state_9363__$1;
(statearr_9379_9405[(1)] = (12));

} else {
var statearr_9380_9406 = state_9363__$1;
(statearr_9380_9406[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8714__auto___9392,tc,fc))
;
return ((function (switch__8602__auto__,c__8714__auto___9392,tc,fc){
return (function() {
var cljs$core$async$state_machine__8603__auto__ = null;
var cljs$core$async$state_machine__8603__auto____0 = (function (){
var statearr_9384 = [null,null,null,null,null,null,null,null,null];
(statearr_9384[(0)] = cljs$core$async$state_machine__8603__auto__);

(statearr_9384[(1)] = (1));

return statearr_9384;
});
var cljs$core$async$state_machine__8603__auto____1 = (function (state_9363){
while(true){
var ret_value__8604__auto__ = (function (){try{while(true){
var result__8605__auto__ = switch__8602__auto__.call(null,state_9363);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8605__auto__;
}
break;
}
}catch (e9385){if((e9385 instanceof Object)){
var ex__8606__auto__ = e9385;
var statearr_9386_9407 = state_9363;
(statearr_9386_9407[(5)] = ex__8606__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9363);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9385;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9408 = state_9363;
state_9363 = G__9408;
continue;
} else {
return ret_value__8604__auto__;
}
break;
}
});
cljs$core$async$state_machine__8603__auto__ = function(state_9363){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8603__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8603__auto____1.call(this,state_9363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8603__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8603__auto____0;
cljs$core$async$state_machine__8603__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8603__auto____1;
return cljs$core$async$state_machine__8603__auto__;
})()
;})(switch__8602__auto__,c__8714__auto___9392,tc,fc))
})();
var state__8716__auto__ = (function (){var statearr_9387 = f__8715__auto__.call(null);
(statearr_9387[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8714__auto___9392);

return statearr_9387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8716__auto__);
});})(c__8714__auto___9392,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__8714__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8714__auto__){
return (function (){
var f__8715__auto__ = (function (){var switch__8602__auto__ = ((function (c__8714__auto__){
return (function (state_9472){
var state_val_9473 = (state_9472[(1)]);
if((state_val_9473 === (7))){
var inst_9468 = (state_9472[(2)]);
var state_9472__$1 = state_9472;
var statearr_9474_9495 = state_9472__$1;
(statearr_9474_9495[(2)] = inst_9468);

(statearr_9474_9495[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9473 === (1))){
var inst_9452 = init;
var state_9472__$1 = (function (){var statearr_9475 = state_9472;
(statearr_9475[(7)] = inst_9452);

return statearr_9475;
})();
var statearr_9476_9496 = state_9472__$1;
(statearr_9476_9496[(2)] = null);

(statearr_9476_9496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9473 === (4))){
var inst_9455 = (state_9472[(8)]);
var inst_9455__$1 = (state_9472[(2)]);
var inst_9456 = (inst_9455__$1 == null);
var state_9472__$1 = (function (){var statearr_9477 = state_9472;
(statearr_9477[(8)] = inst_9455__$1);

return statearr_9477;
})();
if(cljs.core.truth_(inst_9456)){
var statearr_9478_9497 = state_9472__$1;
(statearr_9478_9497[(1)] = (5));

} else {
var statearr_9479_9498 = state_9472__$1;
(statearr_9479_9498[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9473 === (6))){
var inst_9459 = (state_9472[(9)]);
var inst_9452 = (state_9472[(7)]);
var inst_9455 = (state_9472[(8)]);
var inst_9459__$1 = f.call(null,inst_9452,inst_9455);
var inst_9460 = cljs.core.reduced_QMARK_.call(null,inst_9459__$1);
var state_9472__$1 = (function (){var statearr_9480 = state_9472;
(statearr_9480[(9)] = inst_9459__$1);

return statearr_9480;
})();
if(inst_9460){
var statearr_9481_9499 = state_9472__$1;
(statearr_9481_9499[(1)] = (8));

} else {
var statearr_9482_9500 = state_9472__$1;
(statearr_9482_9500[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9473 === (3))){
var inst_9470 = (state_9472[(2)]);
var state_9472__$1 = state_9472;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9472__$1,inst_9470);
} else {
if((state_val_9473 === (2))){
var state_9472__$1 = state_9472;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9472__$1,(4),ch);
} else {
if((state_val_9473 === (9))){
var inst_9459 = (state_9472[(9)]);
var inst_9452 = inst_9459;
var state_9472__$1 = (function (){var statearr_9483 = state_9472;
(statearr_9483[(7)] = inst_9452);

return statearr_9483;
})();
var statearr_9484_9501 = state_9472__$1;
(statearr_9484_9501[(2)] = null);

(statearr_9484_9501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9473 === (5))){
var inst_9452 = (state_9472[(7)]);
var state_9472__$1 = state_9472;
var statearr_9485_9502 = state_9472__$1;
(statearr_9485_9502[(2)] = inst_9452);

(statearr_9485_9502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9473 === (10))){
var inst_9466 = (state_9472[(2)]);
var state_9472__$1 = state_9472;
var statearr_9486_9503 = state_9472__$1;
(statearr_9486_9503[(2)] = inst_9466);

(statearr_9486_9503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9473 === (8))){
var inst_9459 = (state_9472[(9)]);
var inst_9462 = cljs.core.deref.call(null,inst_9459);
var state_9472__$1 = state_9472;
var statearr_9487_9504 = state_9472__$1;
(statearr_9487_9504[(2)] = inst_9462);

(statearr_9487_9504[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__8714__auto__))
;
return ((function (switch__8602__auto__,c__8714__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__8603__auto__ = null;
var cljs$core$async$reduce_$_state_machine__8603__auto____0 = (function (){
var statearr_9491 = [null,null,null,null,null,null,null,null,null,null];
(statearr_9491[(0)] = cljs$core$async$reduce_$_state_machine__8603__auto__);

(statearr_9491[(1)] = (1));

return statearr_9491;
});
var cljs$core$async$reduce_$_state_machine__8603__auto____1 = (function (state_9472){
while(true){
var ret_value__8604__auto__ = (function (){try{while(true){
var result__8605__auto__ = switch__8602__auto__.call(null,state_9472);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8605__auto__;
}
break;
}
}catch (e9492){if((e9492 instanceof Object)){
var ex__8606__auto__ = e9492;
var statearr_9493_9505 = state_9472;
(statearr_9493_9505[(5)] = ex__8606__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9472);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9492;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9506 = state_9472;
state_9472 = G__9506;
continue;
} else {
return ret_value__8604__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__8603__auto__ = function(state_9472){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__8603__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__8603__auto____1.call(this,state_9472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__8603__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__8603__auto____0;
cljs$core$async$reduce_$_state_machine__8603__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__8603__auto____1;
return cljs$core$async$reduce_$_state_machine__8603__auto__;
})()
;})(switch__8602__auto__,c__8714__auto__))
})();
var state__8716__auto__ = (function (){var statearr_9494 = f__8715__auto__.call(null);
(statearr_9494[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8714__auto__);

return statearr_9494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8716__auto__);
});})(c__8714__auto__))
);

return c__8714__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args9507 = [];
var len__7280__auto___9559 = arguments.length;
var i__7281__auto___9560 = (0);
while(true){
if((i__7281__auto___9560 < len__7280__auto___9559)){
args9507.push((arguments[i__7281__auto___9560]));

var G__9561 = (i__7281__auto___9560 + (1));
i__7281__auto___9560 = G__9561;
continue;
} else {
}
break;
}

var G__9509 = args9507.length;
switch (G__9509) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9507.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__8714__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8714__auto__){
return (function (){
var f__8715__auto__ = (function (){var switch__8602__auto__ = ((function (c__8714__auto__){
return (function (state_9534){
var state_val_9535 = (state_9534[(1)]);
if((state_val_9535 === (7))){
var inst_9516 = (state_9534[(2)]);
var state_9534__$1 = state_9534;
var statearr_9536_9563 = state_9534__$1;
(statearr_9536_9563[(2)] = inst_9516);

(statearr_9536_9563[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9535 === (1))){
var inst_9510 = cljs.core.seq.call(null,coll);
var inst_9511 = inst_9510;
var state_9534__$1 = (function (){var statearr_9537 = state_9534;
(statearr_9537[(7)] = inst_9511);

return statearr_9537;
})();
var statearr_9538_9564 = state_9534__$1;
(statearr_9538_9564[(2)] = null);

(statearr_9538_9564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9535 === (4))){
var inst_9511 = (state_9534[(7)]);
var inst_9514 = cljs.core.first.call(null,inst_9511);
var state_9534__$1 = state_9534;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9534__$1,(7),ch,inst_9514);
} else {
if((state_val_9535 === (13))){
var inst_9528 = (state_9534[(2)]);
var state_9534__$1 = state_9534;
var statearr_9539_9565 = state_9534__$1;
(statearr_9539_9565[(2)] = inst_9528);

(statearr_9539_9565[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9535 === (6))){
var inst_9519 = (state_9534[(2)]);
var state_9534__$1 = state_9534;
if(cljs.core.truth_(inst_9519)){
var statearr_9540_9566 = state_9534__$1;
(statearr_9540_9566[(1)] = (8));

} else {
var statearr_9541_9567 = state_9534__$1;
(statearr_9541_9567[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9535 === (3))){
var inst_9532 = (state_9534[(2)]);
var state_9534__$1 = state_9534;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9534__$1,inst_9532);
} else {
if((state_val_9535 === (12))){
var state_9534__$1 = state_9534;
var statearr_9542_9568 = state_9534__$1;
(statearr_9542_9568[(2)] = null);

(statearr_9542_9568[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9535 === (2))){
var inst_9511 = (state_9534[(7)]);
var state_9534__$1 = state_9534;
if(cljs.core.truth_(inst_9511)){
var statearr_9543_9569 = state_9534__$1;
(statearr_9543_9569[(1)] = (4));

} else {
var statearr_9544_9570 = state_9534__$1;
(statearr_9544_9570[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9535 === (11))){
var inst_9525 = cljs.core.async.close_BANG_.call(null,ch);
var state_9534__$1 = state_9534;
var statearr_9545_9571 = state_9534__$1;
(statearr_9545_9571[(2)] = inst_9525);

(statearr_9545_9571[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9535 === (9))){
var state_9534__$1 = state_9534;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9546_9572 = state_9534__$1;
(statearr_9546_9572[(1)] = (11));

} else {
var statearr_9547_9573 = state_9534__$1;
(statearr_9547_9573[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9535 === (5))){
var inst_9511 = (state_9534[(7)]);
var state_9534__$1 = state_9534;
var statearr_9548_9574 = state_9534__$1;
(statearr_9548_9574[(2)] = inst_9511);

(statearr_9548_9574[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9535 === (10))){
var inst_9530 = (state_9534[(2)]);
var state_9534__$1 = state_9534;
var statearr_9549_9575 = state_9534__$1;
(statearr_9549_9575[(2)] = inst_9530);

(statearr_9549_9575[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9535 === (8))){
var inst_9511 = (state_9534[(7)]);
var inst_9521 = cljs.core.next.call(null,inst_9511);
var inst_9511__$1 = inst_9521;
var state_9534__$1 = (function (){var statearr_9550 = state_9534;
(statearr_9550[(7)] = inst_9511__$1);

return statearr_9550;
})();
var statearr_9551_9576 = state_9534__$1;
(statearr_9551_9576[(2)] = null);

(statearr_9551_9576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8714__auto__))
;
return ((function (switch__8602__auto__,c__8714__auto__){
return (function() {
var cljs$core$async$state_machine__8603__auto__ = null;
var cljs$core$async$state_machine__8603__auto____0 = (function (){
var statearr_9555 = [null,null,null,null,null,null,null,null];
(statearr_9555[(0)] = cljs$core$async$state_machine__8603__auto__);

(statearr_9555[(1)] = (1));

return statearr_9555;
});
var cljs$core$async$state_machine__8603__auto____1 = (function (state_9534){
while(true){
var ret_value__8604__auto__ = (function (){try{while(true){
var result__8605__auto__ = switch__8602__auto__.call(null,state_9534);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8605__auto__;
}
break;
}
}catch (e9556){if((e9556 instanceof Object)){
var ex__8606__auto__ = e9556;
var statearr_9557_9577 = state_9534;
(statearr_9557_9577[(5)] = ex__8606__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9534);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9556;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9578 = state_9534;
state_9534 = G__9578;
continue;
} else {
return ret_value__8604__auto__;
}
break;
}
});
cljs$core$async$state_machine__8603__auto__ = function(state_9534){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8603__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8603__auto____1.call(this,state_9534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8603__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8603__auto____0;
cljs$core$async$state_machine__8603__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8603__auto____1;
return cljs$core$async$state_machine__8603__auto__;
})()
;})(switch__8602__auto__,c__8714__auto__))
})();
var state__8716__auto__ = (function (){var statearr_9558 = f__8715__auto__.call(null);
(statearr_9558[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8714__auto__);

return statearr_9558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8716__auto__);
});})(c__8714__auto__))
);

return c__8714__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__6873__auto__ = (((_ == null))?null:_);
var m__6874__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__6873__auto__)]);
if(!((m__6874__auto__ == null))){
return m__6874__auto__.call(null,_);
} else {
var m__6874__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__6874__auto____$1 == null))){
return m__6874__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__6873__auto__ = (((m == null))?null:m);
var m__6874__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__6873__auto__)]);
if(!((m__6874__auto__ == null))){
return m__6874__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__6874__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__6874__auto____$1 == null))){
return m__6874__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__6873__auto__ = (((m == null))?null:m);
var m__6874__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__6873__auto__)]);
if(!((m__6874__auto__ == null))){
return m__6874__auto__.call(null,m,ch);
} else {
var m__6874__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__6874__auto____$1 == null))){
return m__6874__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__6873__auto__ = (((m == null))?null:m);
var m__6874__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__6873__auto__)]);
if(!((m__6874__auto__ == null))){
return m__6874__auto__.call(null,m);
} else {
var m__6874__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__6874__auto____$1 == null))){
return m__6874__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async9800 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9800 = (function (mult,ch,cs,meta9801){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta9801 = meta9801;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9800.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_9802,meta9801__$1){
var self__ = this;
var _9802__$1 = this;
return (new cljs.core.async.t_cljs$core$async9800(self__.mult,self__.ch,self__.cs,meta9801__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async9800.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_9802){
var self__ = this;
var _9802__$1 = this;
return self__.meta9801;
});})(cs))
;

cljs.core.async.t_cljs$core$async9800.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async9800.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async9800.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async9800.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async9800.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async9800.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async9800.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta9801","meta9801",1031961286,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async9800.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9800.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9800";

cljs.core.async.t_cljs$core$async9800.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6816__auto__,writer__6817__auto__,opt__6818__auto__){
return cljs.core._write.call(null,writer__6817__auto__,"cljs.core.async/t_cljs$core$async9800");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async9800 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async9800(mult__$1,ch__$1,cs__$1,meta9801){
return (new cljs.core.async.t_cljs$core$async9800(mult__$1,ch__$1,cs__$1,meta9801));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async9800(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__8714__auto___10021 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8714__auto___10021,cs,m,dchan,dctr,done){
return (function (){
var f__8715__auto__ = (function (){var switch__8602__auto__ = ((function (c__8714__auto___10021,cs,m,dchan,dctr,done){
return (function (state_9933){
var state_val_9934 = (state_9933[(1)]);
if((state_val_9934 === (7))){
var inst_9929 = (state_9933[(2)]);
var state_9933__$1 = state_9933;
var statearr_9935_10022 = state_9933__$1;
(statearr_9935_10022[(2)] = inst_9929);

(statearr_9935_10022[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9934 === (20))){
var inst_9834 = (state_9933[(7)]);
var inst_9844 = cljs.core.first.call(null,inst_9834);
var inst_9845 = cljs.core.nth.call(null,inst_9844,(0),null);
var inst_9846 = cljs.core.nth.call(null,inst_9844,(1),null);
var state_9933__$1 = (function (){var statearr_9936 = state_9933;
(statearr_9936[(8)] = inst_9845);

return statearr_9936;
})();
if(cljs.core.truth_(inst_9846)){
var statearr_9937_10023 = state_9933__$1;
(statearr_9937_10023[(1)] = (22));

} else {
var statearr_9938_10024 = state_9933__$1;
(statearr_9938_10024[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9934 === (27))){
var inst_9881 = (state_9933[(9)]);
var inst_9876 = (state_9933[(10)]);
var inst_9805 = (state_9933[(11)]);
var inst_9874 = (state_9933[(12)]);
var inst_9881__$1 = cljs.core._nth.call(null,inst_9874,inst_9876);
var inst_9882 = cljs.core.async.put_BANG_.call(null,inst_9881__$1,inst_9805,done);
var state_9933__$1 = (function (){var statearr_9939 = state_9933;
(statearr_9939[(9)] = inst_9881__$1);

return statearr_9939;
})();
if(cljs.core.truth_(inst_9882)){
var statearr_9940_10025 = state_9933__$1;
(statearr_9940_10025[(1)] = (30));

} else {
var statearr_9941_10026 = state_9933__$1;
(statearr_9941_10026[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9934 === (1))){
var state_9933__$1 = state_9933;
var statearr_9942_10027 = state_9933__$1;
(statearr_9942_10027[(2)] = null);

(statearr_9942_10027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9934 === (24))){
var inst_9834 = (state_9933[(7)]);
var inst_9851 = (state_9933[(2)]);
var inst_9852 = cljs.core.next.call(null,inst_9834);
var inst_9814 = inst_9852;
var inst_9815 = null;
var inst_9816 = (0);
var inst_9817 = (0);
var state_9933__$1 = (function (){var statearr_9943 = state_9933;
(statearr_9943[(13)] = inst_9814);

(statearr_9943[(14)] = inst_9817);

(statearr_9943[(15)] = inst_9815);

(statearr_9943[(16)] = inst_9816);

(statearr_9943[(17)] = inst_9851);

return statearr_9943;
})();
var statearr_9944_10028 = state_9933__$1;
(statearr_9944_10028[(2)] = null);

(statearr_9944_10028[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9934 === (39))){
var state_9933__$1 = state_9933;
var statearr_9948_10029 = state_9933__$1;
(statearr_9948_10029[(2)] = null);

(statearr_9948_10029[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9934 === (4))){
var inst_9805 = (state_9933[(11)]);
var inst_9805__$1 = (state_9933[(2)]);
var inst_9806 = (inst_9805__$1 == null);
var state_9933__$1 = (function (){var statearr_9949 = state_9933;
(statearr_9949[(11)] = inst_9805__$1);

return statearr_9949;
})();
if(cljs.core.truth_(inst_9806)){
var statearr_9950_10030 = state_9933__$1;
(statearr_9950_10030[(1)] = (5));

} else {
var statearr_9951_10031 = state_9933__$1;
(statearr_9951_10031[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9934 === (15))){
var inst_9814 = (state_9933[(13)]);
var inst_9817 = (state_9933[(14)]);
var inst_9815 = (state_9933[(15)]);
var inst_9816 = (state_9933[(16)]);
var inst_9830 = (state_9933[(2)]);
var inst_9831 = (inst_9817 + (1));
var tmp9945 = inst_9814;
var tmp9946 = inst_9815;
var tmp9947 = inst_9816;
var inst_9814__$1 = tmp9945;
var inst_9815__$1 = tmp9946;
var inst_9816__$1 = tmp9947;
var inst_9817__$1 = inst_9831;
var state_9933__$1 = (function (){var statearr_9952 = state_9933;
(statearr_9952[(13)] = inst_9814__$1);

(statearr_9952[(14)] = inst_9817__$1);

(statearr_9952[(18)] = inst_9830);

(statearr_9952[(15)] = inst_9815__$1);

(statearr_9952[(16)] = inst_9816__$1);

return statearr_9952;
})();
var statearr_9953_10032 = state_9933__$1;
(statearr_9953_10032[(2)] = null);

(statearr_9953_10032[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9934 === (21))){
var inst_9855 = (state_9933[(2)]);
var state_9933__$1 = state_9933;
var statearr_9957_10033 = state_9933__$1;
(statearr_9957_10033[(2)] = inst_9855);

(statearr_9957_10033[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9934 === (31))){
var inst_9881 = (state_9933[(9)]);
var inst_9885 = done.call(null,null);
var inst_9886 = cljs.core.async.untap_STAR_.call(null,m,inst_9881);
var state_9933__$1 = (function (){var statearr_9958 = state_9933;
(statearr_9958[(19)] = inst_9885);

return statearr_9958;
})();
var statearr_9959_10034 = state_9933__$1;
(statearr_9959_10034[(2)] = inst_9886);

(statearr_9959_10034[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9934 === (32))){
var inst_9876 = (state_9933[(10)]);
var inst_9875 = (state_9933[(20)]);
var inst_9873 = (state_9933[(21)]);
var inst_9874 = (state_9933[(12)]);
var inst_9888 = (state_9933[(2)]);
var inst_9889 = (inst_9876 + (1));
var tmp9954 = inst_9875;
var tmp9955 = inst_9873;
var tmp9956 = inst_9874;
var inst_9873__$1 = tmp9955;
var inst_9874__$1 = tmp9956;
var inst_9875__$1 = tmp9954;
var inst_9876__$1 = inst_9889;
var state_9933__$1 = (function (){var statearr_9960 = state_9933;
(statearr_9960[(10)] = inst_9876__$1);

(statearr_9960[(20)] = inst_9875__$1);

(statearr_9960[(21)] = inst_9873__$1);

(statearr_9960[(22)] = inst_9888);

(statearr_9960[(12)] = inst_9874__$1);

return statearr_9960;
})();
var statearr_9961_10035 = state_9933__$1;
(statearr_9961_10035[(2)] = null);

(statearr_9961_10035[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9934 === (40))){
var inst_9901 = (state_9933[(23)]);
var inst_9905 = done.call(null,null);
var inst_9906 = cljs.core.async.untap_STAR_.call(null,m,inst_9901);
var state_9933__$1 = (function (){var statearr_9962 = state_9933;
(statearr_9962[(24)] = inst_9905);

return statearr_9962;
})();
var statearr_9963_10036 = state_9933__$1;
(statearr_9963_10036[(2)] = inst_9906);

(statearr_9963_10036[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9934 === (33))){
var inst_9892 = (state_9933[(25)]);
var inst_9894 = cljs.core.chunked_seq_QMARK_.call(null,inst_9892);
var state_9933__$1 = state_9933;
if(inst_9894){
var statearr_9964_10037 = state_9933__$1;
(statearr_9964_10037[(1)] = (36));

} else {
var statearr_9965_10038 = state_9933__$1;
(statearr_9965_10038[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9934 === (13))){
var inst_9824 = (state_9933[(26)]);
var inst_9827 = cljs.core.async.close_BANG_.call(null,inst_9824);
var state_9933__$1 = state_9933;
var statearr_9966_10039 = state_9933__$1;
(statearr_9966_10039[(2)] = inst_9827);

(statearr_9966_10039[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9934 === (22))){
var inst_9845 = (state_9933[(8)]);
var inst_9848 = cljs.core.async.close_BANG_.call(null,inst_9845);
var state_9933__$1 = state_9933;
var statearr_9967_10040 = state_9933__$1;
(statearr_9967_10040[(2)] = inst_9848);

(statearr_9967_10040[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9934 === (36))){
var inst_9892 = (state_9933[(25)]);
var inst_9896 = cljs.core.chunk_first.call(null,inst_9892);
var inst_9897 = cljs.core.chunk_rest.call(null,inst_9892);
var inst_9898 = cljs.core.count.call(null,inst_9896);
var inst_9873 = inst_9897;
var inst_9874 = inst_9896;
var inst_9875 = inst_9898;
var inst_9876 = (0);
var state_9933__$1 = (function (){var statearr_9968 = state_9933;
(statearr_9968[(10)] = inst_9876);

(statearr_9968[(20)] = inst_9875);

(statearr_9968[(21)] = inst_9873);

(statearr_9968[(12)] = inst_9874);

return statearr_9968;
})();
var statearr_9969_10041 = state_9933__$1;
(statearr_9969_10041[(2)] = null);

(statearr_9969_10041[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9934 === (41))){
var inst_9892 = (state_9933[(25)]);
var inst_9908 = (state_9933[(2)]);
var inst_9909 = cljs.core.next.call(null,inst_9892);
var inst_9873 = inst_9909;
var inst_9874 = null;
var inst_9875 = (0);
var inst_9876 = (0);
var state_9933__$1 = (function (){var statearr_9970 = state_9933;
(statearr_9970[(10)] = inst_9876);

(statearr_9970[(20)] = inst_9875);

(statearr_9970[(21)] = inst_9873);

(statearr_9970[(27)] = inst_9908);

(statearr_9970[(12)] = inst_9874);

return statearr_9970;
})();
var statearr_9971_10042 = state_9933__$1;
(statearr_9971_10042[(2)] = null);

(statearr_9971_10042[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9934 === (43))){
var state_9933__$1 = state_9933;
var statearr_9972_10043 = state_9933__$1;
(statearr_9972_10043[(2)] = null);

(statearr_9972_10043[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9934 === (29))){
var inst_9917 = (state_9933[(2)]);
var state_9933__$1 = state_9933;
var statearr_9973_10044 = state_9933__$1;
(statearr_9973_10044[(2)] = inst_9917);

(statearr_9973_10044[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9934 === (44))){
var inst_9926 = (state_9933[(2)]);
var state_9933__$1 = (function (){var statearr_9974 = state_9933;
(statearr_9974[(28)] = inst_9926);

return statearr_9974;
})();
var statearr_9975_10045 = state_9933__$1;
(statearr_9975_10045[(2)] = null);

(statearr_9975_10045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9934 === (6))){
var inst_9865 = (state_9933[(29)]);
var inst_9864 = cljs.core.deref.call(null,cs);
var inst_9865__$1 = cljs.core.keys.call(null,inst_9864);
var inst_9866 = cljs.core.count.call(null,inst_9865__$1);
var inst_9867 = cljs.core.reset_BANG_.call(null,dctr,inst_9866);
var inst_9872 = cljs.core.seq.call(null,inst_9865__$1);
var inst_9873 = inst_9872;
var inst_9874 = null;
var inst_9875 = (0);
var inst_9876 = (0);
var state_9933__$1 = (function (){var statearr_9976 = state_9933;
(statearr_9976[(10)] = inst_9876);

(statearr_9976[(20)] = inst_9875);

(statearr_9976[(21)] = inst_9873);

(statearr_9976[(29)] = inst_9865__$1);

(statearr_9976[(30)] = inst_9867);

(statearr_9976[(12)] = inst_9874);

return statearr_9976;
})();
var statearr_9977_10046 = state_9933__$1;
(statearr_9977_10046[(2)] = null);

(statearr_9977_10046[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9934 === (28))){
var inst_9873 = (state_9933[(21)]);
var inst_9892 = (state_9933[(25)]);
var inst_9892__$1 = cljs.core.seq.call(null,inst_9873);
var state_9933__$1 = (function (){var statearr_9978 = state_9933;
(statearr_9978[(25)] = inst_9892__$1);

return statearr_9978;
})();
if(inst_9892__$1){
var statearr_9979_10047 = state_9933__$1;
(statearr_9979_10047[(1)] = (33));

} else {
var statearr_9980_10048 = state_9933__$1;
(statearr_9980_10048[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9934 === (25))){
var inst_9876 = (state_9933[(10)]);
var inst_9875 = (state_9933[(20)]);
var inst_9878 = (inst_9876 < inst_9875);
var inst_9879 = inst_9878;
var state_9933__$1 = state_9933;
if(cljs.core.truth_(inst_9879)){
var statearr_9981_10049 = state_9933__$1;
(statearr_9981_10049[(1)] = (27));

} else {
var statearr_9982_10050 = state_9933__$1;
(statearr_9982_10050[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9934 === (34))){
var state_9933__$1 = state_9933;
var statearr_9983_10051 = state_9933__$1;
(statearr_9983_10051[(2)] = null);

(statearr_9983_10051[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9934 === (17))){
var state_9933__$1 = state_9933;
var statearr_9984_10052 = state_9933__$1;
(statearr_9984_10052[(2)] = null);

(statearr_9984_10052[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9934 === (3))){
var inst_9931 = (state_9933[(2)]);
var state_9933__$1 = state_9933;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9933__$1,inst_9931);
} else {
if((state_val_9934 === (12))){
var inst_9860 = (state_9933[(2)]);
var state_9933__$1 = state_9933;
var statearr_9985_10053 = state_9933__$1;
(statearr_9985_10053[(2)] = inst_9860);

(statearr_9985_10053[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9934 === (2))){
var state_9933__$1 = state_9933;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9933__$1,(4),ch);
} else {
if((state_val_9934 === (23))){
var state_9933__$1 = state_9933;
var statearr_9986_10054 = state_9933__$1;
(statearr_9986_10054[(2)] = null);

(statearr_9986_10054[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9934 === (35))){
var inst_9915 = (state_9933[(2)]);
var state_9933__$1 = state_9933;
var statearr_9987_10055 = state_9933__$1;
(statearr_9987_10055[(2)] = inst_9915);

(statearr_9987_10055[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9934 === (19))){
var inst_9834 = (state_9933[(7)]);
var inst_9838 = cljs.core.chunk_first.call(null,inst_9834);
var inst_9839 = cljs.core.chunk_rest.call(null,inst_9834);
var inst_9840 = cljs.core.count.call(null,inst_9838);
var inst_9814 = inst_9839;
var inst_9815 = inst_9838;
var inst_9816 = inst_9840;
var inst_9817 = (0);
var state_9933__$1 = (function (){var statearr_9988 = state_9933;
(statearr_9988[(13)] = inst_9814);

(statearr_9988[(14)] = inst_9817);

(statearr_9988[(15)] = inst_9815);

(statearr_9988[(16)] = inst_9816);

return statearr_9988;
})();
var statearr_9989_10056 = state_9933__$1;
(statearr_9989_10056[(2)] = null);

(statearr_9989_10056[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9934 === (11))){
var inst_9814 = (state_9933[(13)]);
var inst_9834 = (state_9933[(7)]);
var inst_9834__$1 = cljs.core.seq.call(null,inst_9814);
var state_9933__$1 = (function (){var statearr_9990 = state_9933;
(statearr_9990[(7)] = inst_9834__$1);

return statearr_9990;
})();
if(inst_9834__$1){
var statearr_9991_10057 = state_9933__$1;
(statearr_9991_10057[(1)] = (16));

} else {
var statearr_9992_10058 = state_9933__$1;
(statearr_9992_10058[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9934 === (9))){
var inst_9862 = (state_9933[(2)]);
var state_9933__$1 = state_9933;
var statearr_9993_10059 = state_9933__$1;
(statearr_9993_10059[(2)] = inst_9862);

(statearr_9993_10059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9934 === (5))){
var inst_9812 = cljs.core.deref.call(null,cs);
var inst_9813 = cljs.core.seq.call(null,inst_9812);
var inst_9814 = inst_9813;
var inst_9815 = null;
var inst_9816 = (0);
var inst_9817 = (0);
var state_9933__$1 = (function (){var statearr_9994 = state_9933;
(statearr_9994[(13)] = inst_9814);

(statearr_9994[(14)] = inst_9817);

(statearr_9994[(15)] = inst_9815);

(statearr_9994[(16)] = inst_9816);

return statearr_9994;
})();
var statearr_9995_10060 = state_9933__$1;
(statearr_9995_10060[(2)] = null);

(statearr_9995_10060[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9934 === (14))){
var state_9933__$1 = state_9933;
var statearr_9996_10061 = state_9933__$1;
(statearr_9996_10061[(2)] = null);

(statearr_9996_10061[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9934 === (45))){
var inst_9923 = (state_9933[(2)]);
var state_9933__$1 = state_9933;
var statearr_9997_10062 = state_9933__$1;
(statearr_9997_10062[(2)] = inst_9923);

(statearr_9997_10062[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9934 === (26))){
var inst_9865 = (state_9933[(29)]);
var inst_9919 = (state_9933[(2)]);
var inst_9920 = cljs.core.seq.call(null,inst_9865);
var state_9933__$1 = (function (){var statearr_9998 = state_9933;
(statearr_9998[(31)] = inst_9919);

return statearr_9998;
})();
if(inst_9920){
var statearr_9999_10063 = state_9933__$1;
(statearr_9999_10063[(1)] = (42));

} else {
var statearr_10000_10064 = state_9933__$1;
(statearr_10000_10064[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9934 === (16))){
var inst_9834 = (state_9933[(7)]);
var inst_9836 = cljs.core.chunked_seq_QMARK_.call(null,inst_9834);
var state_9933__$1 = state_9933;
if(inst_9836){
var statearr_10001_10065 = state_9933__$1;
(statearr_10001_10065[(1)] = (19));

} else {
var statearr_10002_10066 = state_9933__$1;
(statearr_10002_10066[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9934 === (38))){
var inst_9912 = (state_9933[(2)]);
var state_9933__$1 = state_9933;
var statearr_10003_10067 = state_9933__$1;
(statearr_10003_10067[(2)] = inst_9912);

(statearr_10003_10067[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9934 === (30))){
var state_9933__$1 = state_9933;
var statearr_10004_10068 = state_9933__$1;
(statearr_10004_10068[(2)] = null);

(statearr_10004_10068[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9934 === (10))){
var inst_9817 = (state_9933[(14)]);
var inst_9815 = (state_9933[(15)]);
var inst_9823 = cljs.core._nth.call(null,inst_9815,inst_9817);
var inst_9824 = cljs.core.nth.call(null,inst_9823,(0),null);
var inst_9825 = cljs.core.nth.call(null,inst_9823,(1),null);
var state_9933__$1 = (function (){var statearr_10005 = state_9933;
(statearr_10005[(26)] = inst_9824);

return statearr_10005;
})();
if(cljs.core.truth_(inst_9825)){
var statearr_10006_10069 = state_9933__$1;
(statearr_10006_10069[(1)] = (13));

} else {
var statearr_10007_10070 = state_9933__$1;
(statearr_10007_10070[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9934 === (18))){
var inst_9858 = (state_9933[(2)]);
var state_9933__$1 = state_9933;
var statearr_10008_10071 = state_9933__$1;
(statearr_10008_10071[(2)] = inst_9858);

(statearr_10008_10071[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9934 === (42))){
var state_9933__$1 = state_9933;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9933__$1,(45),dchan);
} else {
if((state_val_9934 === (37))){
var inst_9805 = (state_9933[(11)]);
var inst_9901 = (state_9933[(23)]);
var inst_9892 = (state_9933[(25)]);
var inst_9901__$1 = cljs.core.first.call(null,inst_9892);
var inst_9902 = cljs.core.async.put_BANG_.call(null,inst_9901__$1,inst_9805,done);
var state_9933__$1 = (function (){var statearr_10009 = state_9933;
(statearr_10009[(23)] = inst_9901__$1);

return statearr_10009;
})();
if(cljs.core.truth_(inst_9902)){
var statearr_10010_10072 = state_9933__$1;
(statearr_10010_10072[(1)] = (39));

} else {
var statearr_10011_10073 = state_9933__$1;
(statearr_10011_10073[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9934 === (8))){
var inst_9817 = (state_9933[(14)]);
var inst_9816 = (state_9933[(16)]);
var inst_9819 = (inst_9817 < inst_9816);
var inst_9820 = inst_9819;
var state_9933__$1 = state_9933;
if(cljs.core.truth_(inst_9820)){
var statearr_10012_10074 = state_9933__$1;
(statearr_10012_10074[(1)] = (10));

} else {
var statearr_10013_10075 = state_9933__$1;
(statearr_10013_10075[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8714__auto___10021,cs,m,dchan,dctr,done))
;
return ((function (switch__8602__auto__,c__8714__auto___10021,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__8603__auto__ = null;
var cljs$core$async$mult_$_state_machine__8603__auto____0 = (function (){
var statearr_10017 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10017[(0)] = cljs$core$async$mult_$_state_machine__8603__auto__);

(statearr_10017[(1)] = (1));

return statearr_10017;
});
var cljs$core$async$mult_$_state_machine__8603__auto____1 = (function (state_9933){
while(true){
var ret_value__8604__auto__ = (function (){try{while(true){
var result__8605__auto__ = switch__8602__auto__.call(null,state_9933);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8605__auto__;
}
break;
}
}catch (e10018){if((e10018 instanceof Object)){
var ex__8606__auto__ = e10018;
var statearr_10019_10076 = state_9933;
(statearr_10019_10076[(5)] = ex__8606__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9933);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10018;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10077 = state_9933;
state_9933 = G__10077;
continue;
} else {
return ret_value__8604__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__8603__auto__ = function(state_9933){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__8603__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__8603__auto____1.call(this,state_9933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__8603__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__8603__auto____0;
cljs$core$async$mult_$_state_machine__8603__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__8603__auto____1;
return cljs$core$async$mult_$_state_machine__8603__auto__;
})()
;})(switch__8602__auto__,c__8714__auto___10021,cs,m,dchan,dctr,done))
})();
var state__8716__auto__ = (function (){var statearr_10020 = f__8715__auto__.call(null);
(statearr_10020[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8714__auto___10021);

return statearr_10020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8716__auto__);
});})(c__8714__auto___10021,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args10078 = [];
var len__7280__auto___10081 = arguments.length;
var i__7281__auto___10082 = (0);
while(true){
if((i__7281__auto___10082 < len__7280__auto___10081)){
args10078.push((arguments[i__7281__auto___10082]));

var G__10083 = (i__7281__auto___10082 + (1));
i__7281__auto___10082 = G__10083;
continue;
} else {
}
break;
}

var G__10080 = args10078.length;
switch (G__10080) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10078.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__6873__auto__ = (((m == null))?null:m);
var m__6874__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__6873__auto__)]);
if(!((m__6874__auto__ == null))){
return m__6874__auto__.call(null,m,ch);
} else {
var m__6874__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__6874__auto____$1 == null))){
return m__6874__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__6873__auto__ = (((m == null))?null:m);
var m__6874__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__6873__auto__)]);
if(!((m__6874__auto__ == null))){
return m__6874__auto__.call(null,m,ch);
} else {
var m__6874__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__6874__auto____$1 == null))){
return m__6874__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__6873__auto__ = (((m == null))?null:m);
var m__6874__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__6873__auto__)]);
if(!((m__6874__auto__ == null))){
return m__6874__auto__.call(null,m);
} else {
var m__6874__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__6874__auto____$1 == null))){
return m__6874__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__6873__auto__ = (((m == null))?null:m);
var m__6874__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__6873__auto__)]);
if(!((m__6874__auto__ == null))){
return m__6874__auto__.call(null,m,state_map);
} else {
var m__6874__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__6874__auto____$1 == null))){
return m__6874__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__6873__auto__ = (((m == null))?null:m);
var m__6874__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__6873__auto__)]);
if(!((m__6874__auto__ == null))){
return m__6874__auto__.call(null,m,mode);
} else {
var m__6874__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__6874__auto____$1 == null))){
return m__6874__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7287__auto__ = [];
var len__7280__auto___10095 = arguments.length;
var i__7281__auto___10096 = (0);
while(true){
if((i__7281__auto___10096 < len__7280__auto___10095)){
args__7287__auto__.push((arguments[i__7281__auto___10096]));

var G__10097 = (i__7281__auto___10096 + (1));
i__7281__auto___10096 = G__10097;
continue;
} else {
}
break;
}

var argseq__7288__auto__ = ((((3) < args__7287__auto__.length))?(new cljs.core.IndexedSeq(args__7287__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7288__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__10089){
var map__10090 = p__10089;
var map__10090__$1 = ((((!((map__10090 == null)))?((((map__10090.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10090.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10090):map__10090);
var opts = map__10090__$1;
var statearr_10092_10098 = state;
(statearr_10092_10098[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__10090,map__10090__$1,opts){
return (function (val){
var statearr_10093_10099 = state;
(statearr_10093_10099[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__10090,map__10090__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_10094_10100 = state;
(statearr_10094_10100[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq10085){
var G__10086 = cljs.core.first.call(null,seq10085);
var seq10085__$1 = cljs.core.next.call(null,seq10085);
var G__10087 = cljs.core.first.call(null,seq10085__$1);
var seq10085__$2 = cljs.core.next.call(null,seq10085__$1);
var G__10088 = cljs.core.first.call(null,seq10085__$2);
var seq10085__$3 = cljs.core.next.call(null,seq10085__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10086,G__10087,G__10088,seq10085__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async10264 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10264 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta10265){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta10265 = meta10265;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10264.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10266,meta10265__$1){
var self__ = this;
var _10266__$1 = this;
return (new cljs.core.async.t_cljs$core$async10264(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta10265__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10264.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10266){
var self__ = this;
var _10266__$1 = this;
return self__.meta10265;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10264.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async10264.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10264.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async10264.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10264.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10264.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10264.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10264.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10264.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta10265","meta10265",1521488559,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10264.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10264.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10264";

cljs.core.async.t_cljs$core$async10264.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6816__auto__,writer__6817__auto__,opt__6818__auto__){
return cljs.core._write.call(null,writer__6817__auto__,"cljs.core.async/t_cljs$core$async10264");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async10264 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async10264(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10265){
return (new cljs.core.async.t_cljs$core$async10264(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10265));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async10264(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8714__auto___10427 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8714__auto___10427,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__8715__auto__ = (function (){var switch__8602__auto__ = ((function (c__8714__auto___10427,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_10364){
var state_val_10365 = (state_10364[(1)]);
if((state_val_10365 === (7))){
var inst_10282 = (state_10364[(2)]);
var state_10364__$1 = state_10364;
var statearr_10366_10428 = state_10364__$1;
(statearr_10366_10428[(2)] = inst_10282);

(statearr_10366_10428[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10365 === (20))){
var inst_10294 = (state_10364[(7)]);
var state_10364__$1 = state_10364;
var statearr_10367_10429 = state_10364__$1;
(statearr_10367_10429[(2)] = inst_10294);

(statearr_10367_10429[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10365 === (27))){
var state_10364__$1 = state_10364;
var statearr_10368_10430 = state_10364__$1;
(statearr_10368_10430[(2)] = null);

(statearr_10368_10430[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10365 === (1))){
var inst_10270 = (state_10364[(8)]);
var inst_10270__$1 = calc_state.call(null);
var inst_10272 = (inst_10270__$1 == null);
var inst_10273 = cljs.core.not.call(null,inst_10272);
var state_10364__$1 = (function (){var statearr_10369 = state_10364;
(statearr_10369[(8)] = inst_10270__$1);

return statearr_10369;
})();
if(inst_10273){
var statearr_10370_10431 = state_10364__$1;
(statearr_10370_10431[(1)] = (2));

} else {
var statearr_10371_10432 = state_10364__$1;
(statearr_10371_10432[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10365 === (24))){
var inst_10317 = (state_10364[(9)]);
var inst_10338 = (state_10364[(10)]);
var inst_10324 = (state_10364[(11)]);
var inst_10338__$1 = inst_10317.call(null,inst_10324);
var state_10364__$1 = (function (){var statearr_10372 = state_10364;
(statearr_10372[(10)] = inst_10338__$1);

return statearr_10372;
})();
if(cljs.core.truth_(inst_10338__$1)){
var statearr_10373_10433 = state_10364__$1;
(statearr_10373_10433[(1)] = (29));

} else {
var statearr_10374_10434 = state_10364__$1;
(statearr_10374_10434[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10365 === (4))){
var inst_10285 = (state_10364[(2)]);
var state_10364__$1 = state_10364;
if(cljs.core.truth_(inst_10285)){
var statearr_10375_10435 = state_10364__$1;
(statearr_10375_10435[(1)] = (8));

} else {
var statearr_10376_10436 = state_10364__$1;
(statearr_10376_10436[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10365 === (15))){
var inst_10311 = (state_10364[(2)]);
var state_10364__$1 = state_10364;
if(cljs.core.truth_(inst_10311)){
var statearr_10377_10437 = state_10364__$1;
(statearr_10377_10437[(1)] = (19));

} else {
var statearr_10378_10438 = state_10364__$1;
(statearr_10378_10438[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10365 === (21))){
var inst_10316 = (state_10364[(12)]);
var inst_10316__$1 = (state_10364[(2)]);
var inst_10317 = cljs.core.get.call(null,inst_10316__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_10318 = cljs.core.get.call(null,inst_10316__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_10319 = cljs.core.get.call(null,inst_10316__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_10364__$1 = (function (){var statearr_10379 = state_10364;
(statearr_10379[(13)] = inst_10318);

(statearr_10379[(12)] = inst_10316__$1);

(statearr_10379[(9)] = inst_10317);

return statearr_10379;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_10364__$1,(22),inst_10319);
} else {
if((state_val_10365 === (31))){
var inst_10346 = (state_10364[(2)]);
var state_10364__$1 = state_10364;
if(cljs.core.truth_(inst_10346)){
var statearr_10380_10439 = state_10364__$1;
(statearr_10380_10439[(1)] = (32));

} else {
var statearr_10381_10440 = state_10364__$1;
(statearr_10381_10440[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10365 === (32))){
var inst_10323 = (state_10364[(14)]);
var state_10364__$1 = state_10364;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10364__$1,(35),out,inst_10323);
} else {
if((state_val_10365 === (33))){
var inst_10316 = (state_10364[(12)]);
var inst_10294 = inst_10316;
var state_10364__$1 = (function (){var statearr_10382 = state_10364;
(statearr_10382[(7)] = inst_10294);

return statearr_10382;
})();
var statearr_10383_10441 = state_10364__$1;
(statearr_10383_10441[(2)] = null);

(statearr_10383_10441[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10365 === (13))){
var inst_10294 = (state_10364[(7)]);
var inst_10301 = inst_10294.cljs$lang$protocol_mask$partition0$;
var inst_10302 = (inst_10301 & (64));
var inst_10303 = inst_10294.cljs$core$ISeq$;
var inst_10304 = (inst_10302) || (inst_10303);
var state_10364__$1 = state_10364;
if(cljs.core.truth_(inst_10304)){
var statearr_10384_10442 = state_10364__$1;
(statearr_10384_10442[(1)] = (16));

} else {
var statearr_10385_10443 = state_10364__$1;
(statearr_10385_10443[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10365 === (22))){
var inst_10323 = (state_10364[(14)]);
var inst_10324 = (state_10364[(11)]);
var inst_10322 = (state_10364[(2)]);
var inst_10323__$1 = cljs.core.nth.call(null,inst_10322,(0),null);
var inst_10324__$1 = cljs.core.nth.call(null,inst_10322,(1),null);
var inst_10325 = (inst_10323__$1 == null);
var inst_10326 = cljs.core._EQ_.call(null,inst_10324__$1,change);
var inst_10327 = (inst_10325) || (inst_10326);
var state_10364__$1 = (function (){var statearr_10386 = state_10364;
(statearr_10386[(14)] = inst_10323__$1);

(statearr_10386[(11)] = inst_10324__$1);

return statearr_10386;
})();
if(cljs.core.truth_(inst_10327)){
var statearr_10387_10444 = state_10364__$1;
(statearr_10387_10444[(1)] = (23));

} else {
var statearr_10388_10445 = state_10364__$1;
(statearr_10388_10445[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10365 === (36))){
var inst_10316 = (state_10364[(12)]);
var inst_10294 = inst_10316;
var state_10364__$1 = (function (){var statearr_10389 = state_10364;
(statearr_10389[(7)] = inst_10294);

return statearr_10389;
})();
var statearr_10390_10446 = state_10364__$1;
(statearr_10390_10446[(2)] = null);

(statearr_10390_10446[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10365 === (29))){
var inst_10338 = (state_10364[(10)]);
var state_10364__$1 = state_10364;
var statearr_10391_10447 = state_10364__$1;
(statearr_10391_10447[(2)] = inst_10338);

(statearr_10391_10447[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10365 === (6))){
var state_10364__$1 = state_10364;
var statearr_10392_10448 = state_10364__$1;
(statearr_10392_10448[(2)] = false);

(statearr_10392_10448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10365 === (28))){
var inst_10334 = (state_10364[(2)]);
var inst_10335 = calc_state.call(null);
var inst_10294 = inst_10335;
var state_10364__$1 = (function (){var statearr_10393 = state_10364;
(statearr_10393[(15)] = inst_10334);

(statearr_10393[(7)] = inst_10294);

return statearr_10393;
})();
var statearr_10394_10449 = state_10364__$1;
(statearr_10394_10449[(2)] = null);

(statearr_10394_10449[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10365 === (25))){
var inst_10360 = (state_10364[(2)]);
var state_10364__$1 = state_10364;
var statearr_10395_10450 = state_10364__$1;
(statearr_10395_10450[(2)] = inst_10360);

(statearr_10395_10450[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10365 === (34))){
var inst_10358 = (state_10364[(2)]);
var state_10364__$1 = state_10364;
var statearr_10396_10451 = state_10364__$1;
(statearr_10396_10451[(2)] = inst_10358);

(statearr_10396_10451[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10365 === (17))){
var state_10364__$1 = state_10364;
var statearr_10397_10452 = state_10364__$1;
(statearr_10397_10452[(2)] = false);

(statearr_10397_10452[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10365 === (3))){
var state_10364__$1 = state_10364;
var statearr_10398_10453 = state_10364__$1;
(statearr_10398_10453[(2)] = false);

(statearr_10398_10453[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10365 === (12))){
var inst_10362 = (state_10364[(2)]);
var state_10364__$1 = state_10364;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10364__$1,inst_10362);
} else {
if((state_val_10365 === (2))){
var inst_10270 = (state_10364[(8)]);
var inst_10275 = inst_10270.cljs$lang$protocol_mask$partition0$;
var inst_10276 = (inst_10275 & (64));
var inst_10277 = inst_10270.cljs$core$ISeq$;
var inst_10278 = (inst_10276) || (inst_10277);
var state_10364__$1 = state_10364;
if(cljs.core.truth_(inst_10278)){
var statearr_10399_10454 = state_10364__$1;
(statearr_10399_10454[(1)] = (5));

} else {
var statearr_10400_10455 = state_10364__$1;
(statearr_10400_10455[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10365 === (23))){
var inst_10323 = (state_10364[(14)]);
var inst_10329 = (inst_10323 == null);
var state_10364__$1 = state_10364;
if(cljs.core.truth_(inst_10329)){
var statearr_10401_10456 = state_10364__$1;
(statearr_10401_10456[(1)] = (26));

} else {
var statearr_10402_10457 = state_10364__$1;
(statearr_10402_10457[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10365 === (35))){
var inst_10349 = (state_10364[(2)]);
var state_10364__$1 = state_10364;
if(cljs.core.truth_(inst_10349)){
var statearr_10403_10458 = state_10364__$1;
(statearr_10403_10458[(1)] = (36));

} else {
var statearr_10404_10459 = state_10364__$1;
(statearr_10404_10459[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10365 === (19))){
var inst_10294 = (state_10364[(7)]);
var inst_10313 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10294);
var state_10364__$1 = state_10364;
var statearr_10405_10460 = state_10364__$1;
(statearr_10405_10460[(2)] = inst_10313);

(statearr_10405_10460[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10365 === (11))){
var inst_10294 = (state_10364[(7)]);
var inst_10298 = (inst_10294 == null);
var inst_10299 = cljs.core.not.call(null,inst_10298);
var state_10364__$1 = state_10364;
if(inst_10299){
var statearr_10406_10461 = state_10364__$1;
(statearr_10406_10461[(1)] = (13));

} else {
var statearr_10407_10462 = state_10364__$1;
(statearr_10407_10462[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10365 === (9))){
var inst_10270 = (state_10364[(8)]);
var state_10364__$1 = state_10364;
var statearr_10408_10463 = state_10364__$1;
(statearr_10408_10463[(2)] = inst_10270);

(statearr_10408_10463[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10365 === (5))){
var state_10364__$1 = state_10364;
var statearr_10409_10464 = state_10364__$1;
(statearr_10409_10464[(2)] = true);

(statearr_10409_10464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10365 === (14))){
var state_10364__$1 = state_10364;
var statearr_10410_10465 = state_10364__$1;
(statearr_10410_10465[(2)] = false);

(statearr_10410_10465[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10365 === (26))){
var inst_10324 = (state_10364[(11)]);
var inst_10331 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_10324);
var state_10364__$1 = state_10364;
var statearr_10411_10466 = state_10364__$1;
(statearr_10411_10466[(2)] = inst_10331);

(statearr_10411_10466[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10365 === (16))){
var state_10364__$1 = state_10364;
var statearr_10412_10467 = state_10364__$1;
(statearr_10412_10467[(2)] = true);

(statearr_10412_10467[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10365 === (38))){
var inst_10354 = (state_10364[(2)]);
var state_10364__$1 = state_10364;
var statearr_10413_10468 = state_10364__$1;
(statearr_10413_10468[(2)] = inst_10354);

(statearr_10413_10468[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10365 === (30))){
var inst_10318 = (state_10364[(13)]);
var inst_10317 = (state_10364[(9)]);
var inst_10324 = (state_10364[(11)]);
var inst_10341 = cljs.core.empty_QMARK_.call(null,inst_10317);
var inst_10342 = inst_10318.call(null,inst_10324);
var inst_10343 = cljs.core.not.call(null,inst_10342);
var inst_10344 = (inst_10341) && (inst_10343);
var state_10364__$1 = state_10364;
var statearr_10414_10469 = state_10364__$1;
(statearr_10414_10469[(2)] = inst_10344);

(statearr_10414_10469[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10365 === (10))){
var inst_10270 = (state_10364[(8)]);
var inst_10290 = (state_10364[(2)]);
var inst_10291 = cljs.core.get.call(null,inst_10290,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_10292 = cljs.core.get.call(null,inst_10290,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_10293 = cljs.core.get.call(null,inst_10290,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_10294 = inst_10270;
var state_10364__$1 = (function (){var statearr_10415 = state_10364;
(statearr_10415[(16)] = inst_10293);

(statearr_10415[(17)] = inst_10291);

(statearr_10415[(18)] = inst_10292);

(statearr_10415[(7)] = inst_10294);

return statearr_10415;
})();
var statearr_10416_10470 = state_10364__$1;
(statearr_10416_10470[(2)] = null);

(statearr_10416_10470[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10365 === (18))){
var inst_10308 = (state_10364[(2)]);
var state_10364__$1 = state_10364;
var statearr_10417_10471 = state_10364__$1;
(statearr_10417_10471[(2)] = inst_10308);

(statearr_10417_10471[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10365 === (37))){
var state_10364__$1 = state_10364;
var statearr_10418_10472 = state_10364__$1;
(statearr_10418_10472[(2)] = null);

(statearr_10418_10472[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10365 === (8))){
var inst_10270 = (state_10364[(8)]);
var inst_10287 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10270);
var state_10364__$1 = state_10364;
var statearr_10419_10473 = state_10364__$1;
(statearr_10419_10473[(2)] = inst_10287);

(statearr_10419_10473[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8714__auto___10427,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__8602__auto__,c__8714__auto___10427,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__8603__auto__ = null;
var cljs$core$async$mix_$_state_machine__8603__auto____0 = (function (){
var statearr_10423 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10423[(0)] = cljs$core$async$mix_$_state_machine__8603__auto__);

(statearr_10423[(1)] = (1));

return statearr_10423;
});
var cljs$core$async$mix_$_state_machine__8603__auto____1 = (function (state_10364){
while(true){
var ret_value__8604__auto__ = (function (){try{while(true){
var result__8605__auto__ = switch__8602__auto__.call(null,state_10364);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8605__auto__;
}
break;
}
}catch (e10424){if((e10424 instanceof Object)){
var ex__8606__auto__ = e10424;
var statearr_10425_10474 = state_10364;
(statearr_10425_10474[(5)] = ex__8606__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10424;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10475 = state_10364;
state_10364 = G__10475;
continue;
} else {
return ret_value__8604__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__8603__auto__ = function(state_10364){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__8603__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__8603__auto____1.call(this,state_10364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__8603__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__8603__auto____0;
cljs$core$async$mix_$_state_machine__8603__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__8603__auto____1;
return cljs$core$async$mix_$_state_machine__8603__auto__;
})()
;})(switch__8602__auto__,c__8714__auto___10427,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__8716__auto__ = (function (){var statearr_10426 = f__8715__auto__.call(null);
(statearr_10426[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8714__auto___10427);

return statearr_10426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8716__auto__);
});})(c__8714__auto___10427,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__6873__auto__ = (((p == null))?null:p);
var m__6874__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__6873__auto__)]);
if(!((m__6874__auto__ == null))){
return m__6874__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__6874__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__6874__auto____$1 == null))){
return m__6874__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__6873__auto__ = (((p == null))?null:p);
var m__6874__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__6873__auto__)]);
if(!((m__6874__auto__ == null))){
return m__6874__auto__.call(null,p,v,ch);
} else {
var m__6874__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__6874__auto____$1 == null))){
return m__6874__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args10476 = [];
var len__7280__auto___10479 = arguments.length;
var i__7281__auto___10480 = (0);
while(true){
if((i__7281__auto___10480 < len__7280__auto___10479)){
args10476.push((arguments[i__7281__auto___10480]));

var G__10481 = (i__7281__auto___10480 + (1));
i__7281__auto___10480 = G__10481;
continue;
} else {
}
break;
}

var G__10478 = args10476.length;
switch (G__10478) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10476.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__6873__auto__ = (((p == null))?null:p);
var m__6874__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6873__auto__)]);
if(!((m__6874__auto__ == null))){
return m__6874__auto__.call(null,p);
} else {
var m__6874__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6874__auto____$1 == null))){
return m__6874__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__6873__auto__ = (((p == null))?null:p);
var m__6874__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6873__auto__)]);
if(!((m__6874__auto__ == null))){
return m__6874__auto__.call(null,p,v);
} else {
var m__6874__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6874__auto____$1 == null))){
return m__6874__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args10484 = [];
var len__7280__auto___10609 = arguments.length;
var i__7281__auto___10610 = (0);
while(true){
if((i__7281__auto___10610 < len__7280__auto___10609)){
args10484.push((arguments[i__7281__auto___10610]));

var G__10611 = (i__7281__auto___10610 + (1));
i__7281__auto___10610 = G__10611;
continue;
} else {
}
break;
}

var G__10486 = args10484.length;
switch (G__10486) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10484.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__6210__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__6210__auto__)){
return or__6210__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__6210__auto__,mults){
return (function (p1__10483_SHARP_){
if(cljs.core.truth_(p1__10483_SHARP_.call(null,topic))){
return p1__10483_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__10483_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6210__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async10487 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10487 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta10488){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta10488 = meta10488;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10487.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_10489,meta10488__$1){
var self__ = this;
var _10489__$1 = this;
return (new cljs.core.async.t_cljs$core$async10487(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta10488__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10487.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_10489){
var self__ = this;
var _10489__$1 = this;
return self__.meta10488;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10487.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async10487.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10487.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async10487.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10487.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10487.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10487.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10487.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta10488","meta10488",-1611035624,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10487.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10487.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10487";

cljs.core.async.t_cljs$core$async10487.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6816__auto__,writer__6817__auto__,opt__6818__auto__){
return cljs.core._write.call(null,writer__6817__auto__,"cljs.core.async/t_cljs$core$async10487");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async10487 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async10487(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta10488){
return (new cljs.core.async.t_cljs$core$async10487(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta10488));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async10487(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8714__auto___10613 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8714__auto___10613,mults,ensure_mult,p){
return (function (){
var f__8715__auto__ = (function (){var switch__8602__auto__ = ((function (c__8714__auto___10613,mults,ensure_mult,p){
return (function (state_10561){
var state_val_10562 = (state_10561[(1)]);
if((state_val_10562 === (7))){
var inst_10557 = (state_10561[(2)]);
var state_10561__$1 = state_10561;
var statearr_10563_10614 = state_10561__$1;
(statearr_10563_10614[(2)] = inst_10557);

(statearr_10563_10614[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10562 === (20))){
var state_10561__$1 = state_10561;
var statearr_10564_10615 = state_10561__$1;
(statearr_10564_10615[(2)] = null);

(statearr_10564_10615[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10562 === (1))){
var state_10561__$1 = state_10561;
var statearr_10565_10616 = state_10561__$1;
(statearr_10565_10616[(2)] = null);

(statearr_10565_10616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10562 === (24))){
var inst_10540 = (state_10561[(7)]);
var inst_10549 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_10540);
var state_10561__$1 = state_10561;
var statearr_10566_10617 = state_10561__$1;
(statearr_10566_10617[(2)] = inst_10549);

(statearr_10566_10617[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10562 === (4))){
var inst_10492 = (state_10561[(8)]);
var inst_10492__$1 = (state_10561[(2)]);
var inst_10493 = (inst_10492__$1 == null);
var state_10561__$1 = (function (){var statearr_10567 = state_10561;
(statearr_10567[(8)] = inst_10492__$1);

return statearr_10567;
})();
if(cljs.core.truth_(inst_10493)){
var statearr_10568_10618 = state_10561__$1;
(statearr_10568_10618[(1)] = (5));

} else {
var statearr_10569_10619 = state_10561__$1;
(statearr_10569_10619[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10562 === (15))){
var inst_10534 = (state_10561[(2)]);
var state_10561__$1 = state_10561;
var statearr_10570_10620 = state_10561__$1;
(statearr_10570_10620[(2)] = inst_10534);

(statearr_10570_10620[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10562 === (21))){
var inst_10554 = (state_10561[(2)]);
var state_10561__$1 = (function (){var statearr_10571 = state_10561;
(statearr_10571[(9)] = inst_10554);

return statearr_10571;
})();
var statearr_10572_10621 = state_10561__$1;
(statearr_10572_10621[(2)] = null);

(statearr_10572_10621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10562 === (13))){
var inst_10516 = (state_10561[(10)]);
var inst_10518 = cljs.core.chunked_seq_QMARK_.call(null,inst_10516);
var state_10561__$1 = state_10561;
if(inst_10518){
var statearr_10573_10622 = state_10561__$1;
(statearr_10573_10622[(1)] = (16));

} else {
var statearr_10574_10623 = state_10561__$1;
(statearr_10574_10623[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10562 === (22))){
var inst_10546 = (state_10561[(2)]);
var state_10561__$1 = state_10561;
if(cljs.core.truth_(inst_10546)){
var statearr_10575_10624 = state_10561__$1;
(statearr_10575_10624[(1)] = (23));

} else {
var statearr_10576_10625 = state_10561__$1;
(statearr_10576_10625[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10562 === (6))){
var inst_10540 = (state_10561[(7)]);
var inst_10542 = (state_10561[(11)]);
var inst_10492 = (state_10561[(8)]);
var inst_10540__$1 = topic_fn.call(null,inst_10492);
var inst_10541 = cljs.core.deref.call(null,mults);
var inst_10542__$1 = cljs.core.get.call(null,inst_10541,inst_10540__$1);
var state_10561__$1 = (function (){var statearr_10577 = state_10561;
(statearr_10577[(7)] = inst_10540__$1);

(statearr_10577[(11)] = inst_10542__$1);

return statearr_10577;
})();
if(cljs.core.truth_(inst_10542__$1)){
var statearr_10578_10626 = state_10561__$1;
(statearr_10578_10626[(1)] = (19));

} else {
var statearr_10579_10627 = state_10561__$1;
(statearr_10579_10627[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10562 === (25))){
var inst_10551 = (state_10561[(2)]);
var state_10561__$1 = state_10561;
var statearr_10580_10628 = state_10561__$1;
(statearr_10580_10628[(2)] = inst_10551);

(statearr_10580_10628[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10562 === (17))){
var inst_10516 = (state_10561[(10)]);
var inst_10525 = cljs.core.first.call(null,inst_10516);
var inst_10526 = cljs.core.async.muxch_STAR_.call(null,inst_10525);
var inst_10527 = cljs.core.async.close_BANG_.call(null,inst_10526);
var inst_10528 = cljs.core.next.call(null,inst_10516);
var inst_10502 = inst_10528;
var inst_10503 = null;
var inst_10504 = (0);
var inst_10505 = (0);
var state_10561__$1 = (function (){var statearr_10581 = state_10561;
(statearr_10581[(12)] = inst_10503);

(statearr_10581[(13)] = inst_10504);

(statearr_10581[(14)] = inst_10505);

(statearr_10581[(15)] = inst_10502);

(statearr_10581[(16)] = inst_10527);

return statearr_10581;
})();
var statearr_10582_10629 = state_10561__$1;
(statearr_10582_10629[(2)] = null);

(statearr_10582_10629[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10562 === (3))){
var inst_10559 = (state_10561[(2)]);
var state_10561__$1 = state_10561;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10561__$1,inst_10559);
} else {
if((state_val_10562 === (12))){
var inst_10536 = (state_10561[(2)]);
var state_10561__$1 = state_10561;
var statearr_10583_10630 = state_10561__$1;
(statearr_10583_10630[(2)] = inst_10536);

(statearr_10583_10630[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10562 === (2))){
var state_10561__$1 = state_10561;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10561__$1,(4),ch);
} else {
if((state_val_10562 === (23))){
var state_10561__$1 = state_10561;
var statearr_10584_10631 = state_10561__$1;
(statearr_10584_10631[(2)] = null);

(statearr_10584_10631[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10562 === (19))){
var inst_10542 = (state_10561[(11)]);
var inst_10492 = (state_10561[(8)]);
var inst_10544 = cljs.core.async.muxch_STAR_.call(null,inst_10542);
var state_10561__$1 = state_10561;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10561__$1,(22),inst_10544,inst_10492);
} else {
if((state_val_10562 === (11))){
var inst_10516 = (state_10561[(10)]);
var inst_10502 = (state_10561[(15)]);
var inst_10516__$1 = cljs.core.seq.call(null,inst_10502);
var state_10561__$1 = (function (){var statearr_10585 = state_10561;
(statearr_10585[(10)] = inst_10516__$1);

return statearr_10585;
})();
if(inst_10516__$1){
var statearr_10586_10632 = state_10561__$1;
(statearr_10586_10632[(1)] = (13));

} else {
var statearr_10587_10633 = state_10561__$1;
(statearr_10587_10633[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10562 === (9))){
var inst_10538 = (state_10561[(2)]);
var state_10561__$1 = state_10561;
var statearr_10588_10634 = state_10561__$1;
(statearr_10588_10634[(2)] = inst_10538);

(statearr_10588_10634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10562 === (5))){
var inst_10499 = cljs.core.deref.call(null,mults);
var inst_10500 = cljs.core.vals.call(null,inst_10499);
var inst_10501 = cljs.core.seq.call(null,inst_10500);
var inst_10502 = inst_10501;
var inst_10503 = null;
var inst_10504 = (0);
var inst_10505 = (0);
var state_10561__$1 = (function (){var statearr_10589 = state_10561;
(statearr_10589[(12)] = inst_10503);

(statearr_10589[(13)] = inst_10504);

(statearr_10589[(14)] = inst_10505);

(statearr_10589[(15)] = inst_10502);

return statearr_10589;
})();
var statearr_10590_10635 = state_10561__$1;
(statearr_10590_10635[(2)] = null);

(statearr_10590_10635[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10562 === (14))){
var state_10561__$1 = state_10561;
var statearr_10594_10636 = state_10561__$1;
(statearr_10594_10636[(2)] = null);

(statearr_10594_10636[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10562 === (16))){
var inst_10516 = (state_10561[(10)]);
var inst_10520 = cljs.core.chunk_first.call(null,inst_10516);
var inst_10521 = cljs.core.chunk_rest.call(null,inst_10516);
var inst_10522 = cljs.core.count.call(null,inst_10520);
var inst_10502 = inst_10521;
var inst_10503 = inst_10520;
var inst_10504 = inst_10522;
var inst_10505 = (0);
var state_10561__$1 = (function (){var statearr_10595 = state_10561;
(statearr_10595[(12)] = inst_10503);

(statearr_10595[(13)] = inst_10504);

(statearr_10595[(14)] = inst_10505);

(statearr_10595[(15)] = inst_10502);

return statearr_10595;
})();
var statearr_10596_10637 = state_10561__$1;
(statearr_10596_10637[(2)] = null);

(statearr_10596_10637[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10562 === (10))){
var inst_10503 = (state_10561[(12)]);
var inst_10504 = (state_10561[(13)]);
var inst_10505 = (state_10561[(14)]);
var inst_10502 = (state_10561[(15)]);
var inst_10510 = cljs.core._nth.call(null,inst_10503,inst_10505);
var inst_10511 = cljs.core.async.muxch_STAR_.call(null,inst_10510);
var inst_10512 = cljs.core.async.close_BANG_.call(null,inst_10511);
var inst_10513 = (inst_10505 + (1));
var tmp10591 = inst_10503;
var tmp10592 = inst_10504;
var tmp10593 = inst_10502;
var inst_10502__$1 = tmp10593;
var inst_10503__$1 = tmp10591;
var inst_10504__$1 = tmp10592;
var inst_10505__$1 = inst_10513;
var state_10561__$1 = (function (){var statearr_10597 = state_10561;
(statearr_10597[(12)] = inst_10503__$1);

(statearr_10597[(13)] = inst_10504__$1);

(statearr_10597[(17)] = inst_10512);

(statearr_10597[(14)] = inst_10505__$1);

(statearr_10597[(15)] = inst_10502__$1);

return statearr_10597;
})();
var statearr_10598_10638 = state_10561__$1;
(statearr_10598_10638[(2)] = null);

(statearr_10598_10638[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10562 === (18))){
var inst_10531 = (state_10561[(2)]);
var state_10561__$1 = state_10561;
var statearr_10599_10639 = state_10561__$1;
(statearr_10599_10639[(2)] = inst_10531);

(statearr_10599_10639[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10562 === (8))){
var inst_10504 = (state_10561[(13)]);
var inst_10505 = (state_10561[(14)]);
var inst_10507 = (inst_10505 < inst_10504);
var inst_10508 = inst_10507;
var state_10561__$1 = state_10561;
if(cljs.core.truth_(inst_10508)){
var statearr_10600_10640 = state_10561__$1;
(statearr_10600_10640[(1)] = (10));

} else {
var statearr_10601_10641 = state_10561__$1;
(statearr_10601_10641[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8714__auto___10613,mults,ensure_mult,p))
;
return ((function (switch__8602__auto__,c__8714__auto___10613,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__8603__auto__ = null;
var cljs$core$async$state_machine__8603__auto____0 = (function (){
var statearr_10605 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10605[(0)] = cljs$core$async$state_machine__8603__auto__);

(statearr_10605[(1)] = (1));

return statearr_10605;
});
var cljs$core$async$state_machine__8603__auto____1 = (function (state_10561){
while(true){
var ret_value__8604__auto__ = (function (){try{while(true){
var result__8605__auto__ = switch__8602__auto__.call(null,state_10561);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8605__auto__;
}
break;
}
}catch (e10606){if((e10606 instanceof Object)){
var ex__8606__auto__ = e10606;
var statearr_10607_10642 = state_10561;
(statearr_10607_10642[(5)] = ex__8606__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10561);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10606;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10643 = state_10561;
state_10561 = G__10643;
continue;
} else {
return ret_value__8604__auto__;
}
break;
}
});
cljs$core$async$state_machine__8603__auto__ = function(state_10561){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8603__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8603__auto____1.call(this,state_10561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8603__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8603__auto____0;
cljs$core$async$state_machine__8603__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8603__auto____1;
return cljs$core$async$state_machine__8603__auto__;
})()
;})(switch__8602__auto__,c__8714__auto___10613,mults,ensure_mult,p))
})();
var state__8716__auto__ = (function (){var statearr_10608 = f__8715__auto__.call(null);
(statearr_10608[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8714__auto___10613);

return statearr_10608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8716__auto__);
});})(c__8714__auto___10613,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args10644 = [];
var len__7280__auto___10647 = arguments.length;
var i__7281__auto___10648 = (0);
while(true){
if((i__7281__auto___10648 < len__7280__auto___10647)){
args10644.push((arguments[i__7281__auto___10648]));

var G__10649 = (i__7281__auto___10648 + (1));
i__7281__auto___10648 = G__10649;
continue;
} else {
}
break;
}

var G__10646 = args10644.length;
switch (G__10646) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10644.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args10651 = [];
var len__7280__auto___10654 = arguments.length;
var i__7281__auto___10655 = (0);
while(true){
if((i__7281__auto___10655 < len__7280__auto___10654)){
args10651.push((arguments[i__7281__auto___10655]));

var G__10656 = (i__7281__auto___10655 + (1));
i__7281__auto___10655 = G__10656;
continue;
} else {
}
break;
}

var G__10653 = args10651.length;
switch (G__10653) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10651.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args10658 = [];
var len__7280__auto___10729 = arguments.length;
var i__7281__auto___10730 = (0);
while(true){
if((i__7281__auto___10730 < len__7280__auto___10729)){
args10658.push((arguments[i__7281__auto___10730]));

var G__10731 = (i__7281__auto___10730 + (1));
i__7281__auto___10730 = G__10731;
continue;
} else {
}
break;
}

var G__10660 = args10658.length;
switch (G__10660) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10658.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__8714__auto___10733 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8714__auto___10733,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__8715__auto__ = (function (){var switch__8602__auto__ = ((function (c__8714__auto___10733,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_10699){
var state_val_10700 = (state_10699[(1)]);
if((state_val_10700 === (7))){
var state_10699__$1 = state_10699;
var statearr_10701_10734 = state_10699__$1;
(statearr_10701_10734[(2)] = null);

(statearr_10701_10734[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10700 === (1))){
var state_10699__$1 = state_10699;
var statearr_10702_10735 = state_10699__$1;
(statearr_10702_10735[(2)] = null);

(statearr_10702_10735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10700 === (4))){
var inst_10663 = (state_10699[(7)]);
var inst_10665 = (inst_10663 < cnt);
var state_10699__$1 = state_10699;
if(cljs.core.truth_(inst_10665)){
var statearr_10703_10736 = state_10699__$1;
(statearr_10703_10736[(1)] = (6));

} else {
var statearr_10704_10737 = state_10699__$1;
(statearr_10704_10737[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10700 === (15))){
var inst_10695 = (state_10699[(2)]);
var state_10699__$1 = state_10699;
var statearr_10705_10738 = state_10699__$1;
(statearr_10705_10738[(2)] = inst_10695);

(statearr_10705_10738[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10700 === (13))){
var inst_10688 = cljs.core.async.close_BANG_.call(null,out);
var state_10699__$1 = state_10699;
var statearr_10706_10739 = state_10699__$1;
(statearr_10706_10739[(2)] = inst_10688);

(statearr_10706_10739[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10700 === (6))){
var state_10699__$1 = state_10699;
var statearr_10707_10740 = state_10699__$1;
(statearr_10707_10740[(2)] = null);

(statearr_10707_10740[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10700 === (3))){
var inst_10697 = (state_10699[(2)]);
var state_10699__$1 = state_10699;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10699__$1,inst_10697);
} else {
if((state_val_10700 === (12))){
var inst_10685 = (state_10699[(8)]);
var inst_10685__$1 = (state_10699[(2)]);
var inst_10686 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_10685__$1);
var state_10699__$1 = (function (){var statearr_10708 = state_10699;
(statearr_10708[(8)] = inst_10685__$1);

return statearr_10708;
})();
if(cljs.core.truth_(inst_10686)){
var statearr_10709_10741 = state_10699__$1;
(statearr_10709_10741[(1)] = (13));

} else {
var statearr_10710_10742 = state_10699__$1;
(statearr_10710_10742[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10700 === (2))){
var inst_10662 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_10663 = (0);
var state_10699__$1 = (function (){var statearr_10711 = state_10699;
(statearr_10711[(7)] = inst_10663);

(statearr_10711[(9)] = inst_10662);

return statearr_10711;
})();
var statearr_10712_10743 = state_10699__$1;
(statearr_10712_10743[(2)] = null);

(statearr_10712_10743[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10700 === (11))){
var inst_10663 = (state_10699[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10699,(10),Object,null,(9));
var inst_10672 = chs__$1.call(null,inst_10663);
var inst_10673 = done.call(null,inst_10663);
var inst_10674 = cljs.core.async.take_BANG_.call(null,inst_10672,inst_10673);
var state_10699__$1 = state_10699;
var statearr_10713_10744 = state_10699__$1;
(statearr_10713_10744[(2)] = inst_10674);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10699__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10700 === (9))){
var inst_10663 = (state_10699[(7)]);
var inst_10676 = (state_10699[(2)]);
var inst_10677 = (inst_10663 + (1));
var inst_10663__$1 = inst_10677;
var state_10699__$1 = (function (){var statearr_10714 = state_10699;
(statearr_10714[(7)] = inst_10663__$1);

(statearr_10714[(10)] = inst_10676);

return statearr_10714;
})();
var statearr_10715_10745 = state_10699__$1;
(statearr_10715_10745[(2)] = null);

(statearr_10715_10745[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10700 === (5))){
var inst_10683 = (state_10699[(2)]);
var state_10699__$1 = (function (){var statearr_10716 = state_10699;
(statearr_10716[(11)] = inst_10683);

return statearr_10716;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10699__$1,(12),dchan);
} else {
if((state_val_10700 === (14))){
var inst_10685 = (state_10699[(8)]);
var inst_10690 = cljs.core.apply.call(null,f,inst_10685);
var state_10699__$1 = state_10699;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10699__$1,(16),out,inst_10690);
} else {
if((state_val_10700 === (16))){
var inst_10692 = (state_10699[(2)]);
var state_10699__$1 = (function (){var statearr_10717 = state_10699;
(statearr_10717[(12)] = inst_10692);

return statearr_10717;
})();
var statearr_10718_10746 = state_10699__$1;
(statearr_10718_10746[(2)] = null);

(statearr_10718_10746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10700 === (10))){
var inst_10667 = (state_10699[(2)]);
var inst_10668 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_10699__$1 = (function (){var statearr_10719 = state_10699;
(statearr_10719[(13)] = inst_10667);

return statearr_10719;
})();
var statearr_10720_10747 = state_10699__$1;
(statearr_10720_10747[(2)] = inst_10668);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10699__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10700 === (8))){
var inst_10681 = (state_10699[(2)]);
var state_10699__$1 = state_10699;
var statearr_10721_10748 = state_10699__$1;
(statearr_10721_10748[(2)] = inst_10681);

(statearr_10721_10748[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8714__auto___10733,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__8602__auto__,c__8714__auto___10733,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__8603__auto__ = null;
var cljs$core$async$state_machine__8603__auto____0 = (function (){
var statearr_10725 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10725[(0)] = cljs$core$async$state_machine__8603__auto__);

(statearr_10725[(1)] = (1));

return statearr_10725;
});
var cljs$core$async$state_machine__8603__auto____1 = (function (state_10699){
while(true){
var ret_value__8604__auto__ = (function (){try{while(true){
var result__8605__auto__ = switch__8602__auto__.call(null,state_10699);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8605__auto__;
}
break;
}
}catch (e10726){if((e10726 instanceof Object)){
var ex__8606__auto__ = e10726;
var statearr_10727_10749 = state_10699;
(statearr_10727_10749[(5)] = ex__8606__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10699);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10726;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10750 = state_10699;
state_10699 = G__10750;
continue;
} else {
return ret_value__8604__auto__;
}
break;
}
});
cljs$core$async$state_machine__8603__auto__ = function(state_10699){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8603__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8603__auto____1.call(this,state_10699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8603__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8603__auto____0;
cljs$core$async$state_machine__8603__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8603__auto____1;
return cljs$core$async$state_machine__8603__auto__;
})()
;})(switch__8602__auto__,c__8714__auto___10733,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__8716__auto__ = (function (){var statearr_10728 = f__8715__auto__.call(null);
(statearr_10728[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8714__auto___10733);

return statearr_10728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8716__auto__);
});})(c__8714__auto___10733,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args10752 = [];
var len__7280__auto___10808 = arguments.length;
var i__7281__auto___10809 = (0);
while(true){
if((i__7281__auto___10809 < len__7280__auto___10808)){
args10752.push((arguments[i__7281__auto___10809]));

var G__10810 = (i__7281__auto___10809 + (1));
i__7281__auto___10809 = G__10810;
continue;
} else {
}
break;
}

var G__10754 = args10752.length;
switch (G__10754) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10752.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8714__auto___10812 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8714__auto___10812,out){
return (function (){
var f__8715__auto__ = (function (){var switch__8602__auto__ = ((function (c__8714__auto___10812,out){
return (function (state_10784){
var state_val_10785 = (state_10784[(1)]);
if((state_val_10785 === (7))){
var inst_10764 = (state_10784[(7)]);
var inst_10763 = (state_10784[(8)]);
var inst_10763__$1 = (state_10784[(2)]);
var inst_10764__$1 = cljs.core.nth.call(null,inst_10763__$1,(0),null);
var inst_10765 = cljs.core.nth.call(null,inst_10763__$1,(1),null);
var inst_10766 = (inst_10764__$1 == null);
var state_10784__$1 = (function (){var statearr_10786 = state_10784;
(statearr_10786[(7)] = inst_10764__$1);

(statearr_10786[(8)] = inst_10763__$1);

(statearr_10786[(9)] = inst_10765);

return statearr_10786;
})();
if(cljs.core.truth_(inst_10766)){
var statearr_10787_10813 = state_10784__$1;
(statearr_10787_10813[(1)] = (8));

} else {
var statearr_10788_10814 = state_10784__$1;
(statearr_10788_10814[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10785 === (1))){
var inst_10755 = cljs.core.vec.call(null,chs);
var inst_10756 = inst_10755;
var state_10784__$1 = (function (){var statearr_10789 = state_10784;
(statearr_10789[(10)] = inst_10756);

return statearr_10789;
})();
var statearr_10790_10815 = state_10784__$1;
(statearr_10790_10815[(2)] = null);

(statearr_10790_10815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10785 === (4))){
var inst_10756 = (state_10784[(10)]);
var state_10784__$1 = state_10784;
return cljs.core.async.ioc_alts_BANG_.call(null,state_10784__$1,(7),inst_10756);
} else {
if((state_val_10785 === (6))){
var inst_10780 = (state_10784[(2)]);
var state_10784__$1 = state_10784;
var statearr_10791_10816 = state_10784__$1;
(statearr_10791_10816[(2)] = inst_10780);

(statearr_10791_10816[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10785 === (3))){
var inst_10782 = (state_10784[(2)]);
var state_10784__$1 = state_10784;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10784__$1,inst_10782);
} else {
if((state_val_10785 === (2))){
var inst_10756 = (state_10784[(10)]);
var inst_10758 = cljs.core.count.call(null,inst_10756);
var inst_10759 = (inst_10758 > (0));
var state_10784__$1 = state_10784;
if(cljs.core.truth_(inst_10759)){
var statearr_10793_10817 = state_10784__$1;
(statearr_10793_10817[(1)] = (4));

} else {
var statearr_10794_10818 = state_10784__$1;
(statearr_10794_10818[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10785 === (11))){
var inst_10756 = (state_10784[(10)]);
var inst_10773 = (state_10784[(2)]);
var tmp10792 = inst_10756;
var inst_10756__$1 = tmp10792;
var state_10784__$1 = (function (){var statearr_10795 = state_10784;
(statearr_10795[(11)] = inst_10773);

(statearr_10795[(10)] = inst_10756__$1);

return statearr_10795;
})();
var statearr_10796_10819 = state_10784__$1;
(statearr_10796_10819[(2)] = null);

(statearr_10796_10819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10785 === (9))){
var inst_10764 = (state_10784[(7)]);
var state_10784__$1 = state_10784;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10784__$1,(11),out,inst_10764);
} else {
if((state_val_10785 === (5))){
var inst_10778 = cljs.core.async.close_BANG_.call(null,out);
var state_10784__$1 = state_10784;
var statearr_10797_10820 = state_10784__$1;
(statearr_10797_10820[(2)] = inst_10778);

(statearr_10797_10820[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10785 === (10))){
var inst_10776 = (state_10784[(2)]);
var state_10784__$1 = state_10784;
var statearr_10798_10821 = state_10784__$1;
(statearr_10798_10821[(2)] = inst_10776);

(statearr_10798_10821[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10785 === (8))){
var inst_10764 = (state_10784[(7)]);
var inst_10763 = (state_10784[(8)]);
var inst_10765 = (state_10784[(9)]);
var inst_10756 = (state_10784[(10)]);
var inst_10768 = (function (){var cs = inst_10756;
var vec__10761 = inst_10763;
var v = inst_10764;
var c = inst_10765;
return ((function (cs,vec__10761,v,c,inst_10764,inst_10763,inst_10765,inst_10756,state_val_10785,c__8714__auto___10812,out){
return (function (p1__10751_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__10751_SHARP_);
});
;})(cs,vec__10761,v,c,inst_10764,inst_10763,inst_10765,inst_10756,state_val_10785,c__8714__auto___10812,out))
})();
var inst_10769 = cljs.core.filterv.call(null,inst_10768,inst_10756);
var inst_10756__$1 = inst_10769;
var state_10784__$1 = (function (){var statearr_10799 = state_10784;
(statearr_10799[(10)] = inst_10756__$1);

return statearr_10799;
})();
var statearr_10800_10822 = state_10784__$1;
(statearr_10800_10822[(2)] = null);

(statearr_10800_10822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__8714__auto___10812,out))
;
return ((function (switch__8602__auto__,c__8714__auto___10812,out){
return (function() {
var cljs$core$async$state_machine__8603__auto__ = null;
var cljs$core$async$state_machine__8603__auto____0 = (function (){
var statearr_10804 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10804[(0)] = cljs$core$async$state_machine__8603__auto__);

(statearr_10804[(1)] = (1));

return statearr_10804;
});
var cljs$core$async$state_machine__8603__auto____1 = (function (state_10784){
while(true){
var ret_value__8604__auto__ = (function (){try{while(true){
var result__8605__auto__ = switch__8602__auto__.call(null,state_10784);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8605__auto__;
}
break;
}
}catch (e10805){if((e10805 instanceof Object)){
var ex__8606__auto__ = e10805;
var statearr_10806_10823 = state_10784;
(statearr_10806_10823[(5)] = ex__8606__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10784);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10805;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10824 = state_10784;
state_10784 = G__10824;
continue;
} else {
return ret_value__8604__auto__;
}
break;
}
});
cljs$core$async$state_machine__8603__auto__ = function(state_10784){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8603__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8603__auto____1.call(this,state_10784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8603__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8603__auto____0;
cljs$core$async$state_machine__8603__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8603__auto____1;
return cljs$core$async$state_machine__8603__auto__;
})()
;})(switch__8602__auto__,c__8714__auto___10812,out))
})();
var state__8716__auto__ = (function (){var statearr_10807 = f__8715__auto__.call(null);
(statearr_10807[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8714__auto___10812);

return statearr_10807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8716__auto__);
});})(c__8714__auto___10812,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args10825 = [];
var len__7280__auto___10874 = arguments.length;
var i__7281__auto___10875 = (0);
while(true){
if((i__7281__auto___10875 < len__7280__auto___10874)){
args10825.push((arguments[i__7281__auto___10875]));

var G__10876 = (i__7281__auto___10875 + (1));
i__7281__auto___10875 = G__10876;
continue;
} else {
}
break;
}

var G__10827 = args10825.length;
switch (G__10827) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10825.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8714__auto___10878 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8714__auto___10878,out){
return (function (){
var f__8715__auto__ = (function (){var switch__8602__auto__ = ((function (c__8714__auto___10878,out){
return (function (state_10851){
var state_val_10852 = (state_10851[(1)]);
if((state_val_10852 === (7))){
var inst_10833 = (state_10851[(7)]);
var inst_10833__$1 = (state_10851[(2)]);
var inst_10834 = (inst_10833__$1 == null);
var inst_10835 = cljs.core.not.call(null,inst_10834);
var state_10851__$1 = (function (){var statearr_10853 = state_10851;
(statearr_10853[(7)] = inst_10833__$1);

return statearr_10853;
})();
if(inst_10835){
var statearr_10854_10879 = state_10851__$1;
(statearr_10854_10879[(1)] = (8));

} else {
var statearr_10855_10880 = state_10851__$1;
(statearr_10855_10880[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10852 === (1))){
var inst_10828 = (0);
var state_10851__$1 = (function (){var statearr_10856 = state_10851;
(statearr_10856[(8)] = inst_10828);

return statearr_10856;
})();
var statearr_10857_10881 = state_10851__$1;
(statearr_10857_10881[(2)] = null);

(statearr_10857_10881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10852 === (4))){
var state_10851__$1 = state_10851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10851__$1,(7),ch);
} else {
if((state_val_10852 === (6))){
var inst_10846 = (state_10851[(2)]);
var state_10851__$1 = state_10851;
var statearr_10858_10882 = state_10851__$1;
(statearr_10858_10882[(2)] = inst_10846);

(statearr_10858_10882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10852 === (3))){
var inst_10848 = (state_10851[(2)]);
var inst_10849 = cljs.core.async.close_BANG_.call(null,out);
var state_10851__$1 = (function (){var statearr_10859 = state_10851;
(statearr_10859[(9)] = inst_10848);

return statearr_10859;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10851__$1,inst_10849);
} else {
if((state_val_10852 === (2))){
var inst_10828 = (state_10851[(8)]);
var inst_10830 = (inst_10828 < n);
var state_10851__$1 = state_10851;
if(cljs.core.truth_(inst_10830)){
var statearr_10860_10883 = state_10851__$1;
(statearr_10860_10883[(1)] = (4));

} else {
var statearr_10861_10884 = state_10851__$1;
(statearr_10861_10884[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10852 === (11))){
var inst_10828 = (state_10851[(8)]);
var inst_10838 = (state_10851[(2)]);
var inst_10839 = (inst_10828 + (1));
var inst_10828__$1 = inst_10839;
var state_10851__$1 = (function (){var statearr_10862 = state_10851;
(statearr_10862[(8)] = inst_10828__$1);

(statearr_10862[(10)] = inst_10838);

return statearr_10862;
})();
var statearr_10863_10885 = state_10851__$1;
(statearr_10863_10885[(2)] = null);

(statearr_10863_10885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10852 === (9))){
var state_10851__$1 = state_10851;
var statearr_10864_10886 = state_10851__$1;
(statearr_10864_10886[(2)] = null);

(statearr_10864_10886[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10852 === (5))){
var state_10851__$1 = state_10851;
var statearr_10865_10887 = state_10851__$1;
(statearr_10865_10887[(2)] = null);

(statearr_10865_10887[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10852 === (10))){
var inst_10843 = (state_10851[(2)]);
var state_10851__$1 = state_10851;
var statearr_10866_10888 = state_10851__$1;
(statearr_10866_10888[(2)] = inst_10843);

(statearr_10866_10888[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10852 === (8))){
var inst_10833 = (state_10851[(7)]);
var state_10851__$1 = state_10851;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10851__$1,(11),out,inst_10833);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__8714__auto___10878,out))
;
return ((function (switch__8602__auto__,c__8714__auto___10878,out){
return (function() {
var cljs$core$async$state_machine__8603__auto__ = null;
var cljs$core$async$state_machine__8603__auto____0 = (function (){
var statearr_10870 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10870[(0)] = cljs$core$async$state_machine__8603__auto__);

(statearr_10870[(1)] = (1));

return statearr_10870;
});
var cljs$core$async$state_machine__8603__auto____1 = (function (state_10851){
while(true){
var ret_value__8604__auto__ = (function (){try{while(true){
var result__8605__auto__ = switch__8602__auto__.call(null,state_10851);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8605__auto__;
}
break;
}
}catch (e10871){if((e10871 instanceof Object)){
var ex__8606__auto__ = e10871;
var statearr_10872_10889 = state_10851;
(statearr_10872_10889[(5)] = ex__8606__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10851);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10871;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10890 = state_10851;
state_10851 = G__10890;
continue;
} else {
return ret_value__8604__auto__;
}
break;
}
});
cljs$core$async$state_machine__8603__auto__ = function(state_10851){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8603__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8603__auto____1.call(this,state_10851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8603__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8603__auto____0;
cljs$core$async$state_machine__8603__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8603__auto____1;
return cljs$core$async$state_machine__8603__auto__;
})()
;})(switch__8602__auto__,c__8714__auto___10878,out))
})();
var state__8716__auto__ = (function (){var statearr_10873 = f__8715__auto__.call(null);
(statearr_10873[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8714__auto___10878);

return statearr_10873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8716__auto__);
});})(c__8714__auto___10878,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async10898 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10898 = (function (map_LT_,f,ch,meta10899){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta10899 = meta10899;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10898.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10900,meta10899__$1){
var self__ = this;
var _10900__$1 = this;
return (new cljs.core.async.t_cljs$core$async10898(self__.map_LT_,self__.f,self__.ch,meta10899__$1));
});

cljs.core.async.t_cljs$core$async10898.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10900){
var self__ = this;
var _10900__$1 = this;
return self__.meta10899;
});

cljs.core.async.t_cljs$core$async10898.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async10898.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async10898.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async10898.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async10898.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async10901 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10901 = (function (map_LT_,f,ch,meta10899,_,fn1,meta10902){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta10899 = meta10899;
this._ = _;
this.fn1 = fn1;
this.meta10902 = meta10902;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10901.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_10903,meta10902__$1){
var self__ = this;
var _10903__$1 = this;
return (new cljs.core.async.t_cljs$core$async10901(self__.map_LT_,self__.f,self__.ch,self__.meta10899,self__._,self__.fn1,meta10902__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async10901.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_10903){
var self__ = this;
var _10903__$1 = this;
return self__.meta10902;
});})(___$1))
;

cljs.core.async.t_cljs$core$async10901.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async10901.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async10901.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async10901.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__10891_SHARP_){
return f1.call(null,(((p1__10891_SHARP_ == null))?null:self__.f.call(null,p1__10891_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async10901.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta10899","meta10899",1987964367,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async10898","cljs.core.async/t_cljs$core$async10898",-1872037233,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta10902","meta10902",895074114,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async10901.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10901.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10901";

cljs.core.async.t_cljs$core$async10901.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__6816__auto__,writer__6817__auto__,opt__6818__auto__){
return cljs.core._write.call(null,writer__6817__auto__,"cljs.core.async/t_cljs$core$async10901");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async10901 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async10901(map_LT___$1,f__$1,ch__$1,meta10899__$1,___$2,fn1__$1,meta10902){
return (new cljs.core.async.t_cljs$core$async10901(map_LT___$1,f__$1,ch__$1,meta10899__$1,___$2,fn1__$1,meta10902));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async10901(self__.map_LT_,self__.f,self__.ch,self__.meta10899,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6198__auto__ = ret;
if(cljs.core.truth_(and__6198__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__6198__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async10898.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async10898.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async10898.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta10899","meta10899",1987964367,null)], null);
});

cljs.core.async.t_cljs$core$async10898.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10898.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10898";

cljs.core.async.t_cljs$core$async10898.cljs$lang$ctorPrWriter = (function (this__6816__auto__,writer__6817__auto__,opt__6818__auto__){
return cljs.core._write.call(null,writer__6817__auto__,"cljs.core.async/t_cljs$core$async10898");
});

cljs.core.async.__GT_t_cljs$core$async10898 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async10898(map_LT___$1,f__$1,ch__$1,meta10899){
return (new cljs.core.async.t_cljs$core$async10898(map_LT___$1,f__$1,ch__$1,meta10899));
});

}

return (new cljs.core.async.t_cljs$core$async10898(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async10907 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10907 = (function (map_GT_,f,ch,meta10908){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta10908 = meta10908;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10907.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10909,meta10908__$1){
var self__ = this;
var _10909__$1 = this;
return (new cljs.core.async.t_cljs$core$async10907(self__.map_GT_,self__.f,self__.ch,meta10908__$1));
});

cljs.core.async.t_cljs$core$async10907.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10909){
var self__ = this;
var _10909__$1 = this;
return self__.meta10908;
});

cljs.core.async.t_cljs$core$async10907.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async10907.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async10907.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async10907.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async10907.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async10907.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async10907.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta10908","meta10908",-2071573489,null)], null);
});

cljs.core.async.t_cljs$core$async10907.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10907.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10907";

cljs.core.async.t_cljs$core$async10907.cljs$lang$ctorPrWriter = (function (this__6816__auto__,writer__6817__auto__,opt__6818__auto__){
return cljs.core._write.call(null,writer__6817__auto__,"cljs.core.async/t_cljs$core$async10907");
});

cljs.core.async.__GT_t_cljs$core$async10907 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async10907(map_GT___$1,f__$1,ch__$1,meta10908){
return (new cljs.core.async.t_cljs$core$async10907(map_GT___$1,f__$1,ch__$1,meta10908));
});

}

return (new cljs.core.async.t_cljs$core$async10907(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async10913 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10913 = (function (filter_GT_,p,ch,meta10914){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta10914 = meta10914;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10913.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10915,meta10914__$1){
var self__ = this;
var _10915__$1 = this;
return (new cljs.core.async.t_cljs$core$async10913(self__.filter_GT_,self__.p,self__.ch,meta10914__$1));
});

cljs.core.async.t_cljs$core$async10913.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10915){
var self__ = this;
var _10915__$1 = this;
return self__.meta10914;
});

cljs.core.async.t_cljs$core$async10913.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async10913.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async10913.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async10913.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async10913.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async10913.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async10913.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async10913.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta10914","meta10914",-1863149150,null)], null);
});

cljs.core.async.t_cljs$core$async10913.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10913.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10913";

cljs.core.async.t_cljs$core$async10913.cljs$lang$ctorPrWriter = (function (this__6816__auto__,writer__6817__auto__,opt__6818__auto__){
return cljs.core._write.call(null,writer__6817__auto__,"cljs.core.async/t_cljs$core$async10913");
});

cljs.core.async.__GT_t_cljs$core$async10913 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async10913(filter_GT___$1,p__$1,ch__$1,meta10914){
return (new cljs.core.async.t_cljs$core$async10913(filter_GT___$1,p__$1,ch__$1,meta10914));
});

}

return (new cljs.core.async.t_cljs$core$async10913(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args10916 = [];
var len__7280__auto___10960 = arguments.length;
var i__7281__auto___10961 = (0);
while(true){
if((i__7281__auto___10961 < len__7280__auto___10960)){
args10916.push((arguments[i__7281__auto___10961]));

var G__10962 = (i__7281__auto___10961 + (1));
i__7281__auto___10961 = G__10962;
continue;
} else {
}
break;
}

var G__10918 = args10916.length;
switch (G__10918) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10916.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8714__auto___10964 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8714__auto___10964,out){
return (function (){
var f__8715__auto__ = (function (){var switch__8602__auto__ = ((function (c__8714__auto___10964,out){
return (function (state_10939){
var state_val_10940 = (state_10939[(1)]);
if((state_val_10940 === (7))){
var inst_10935 = (state_10939[(2)]);
var state_10939__$1 = state_10939;
var statearr_10941_10965 = state_10939__$1;
(statearr_10941_10965[(2)] = inst_10935);

(statearr_10941_10965[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10940 === (1))){
var state_10939__$1 = state_10939;
var statearr_10942_10966 = state_10939__$1;
(statearr_10942_10966[(2)] = null);

(statearr_10942_10966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10940 === (4))){
var inst_10921 = (state_10939[(7)]);
var inst_10921__$1 = (state_10939[(2)]);
var inst_10922 = (inst_10921__$1 == null);
var state_10939__$1 = (function (){var statearr_10943 = state_10939;
(statearr_10943[(7)] = inst_10921__$1);

return statearr_10943;
})();
if(cljs.core.truth_(inst_10922)){
var statearr_10944_10967 = state_10939__$1;
(statearr_10944_10967[(1)] = (5));

} else {
var statearr_10945_10968 = state_10939__$1;
(statearr_10945_10968[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10940 === (6))){
var inst_10921 = (state_10939[(7)]);
var inst_10926 = p.call(null,inst_10921);
var state_10939__$1 = state_10939;
if(cljs.core.truth_(inst_10926)){
var statearr_10946_10969 = state_10939__$1;
(statearr_10946_10969[(1)] = (8));

} else {
var statearr_10947_10970 = state_10939__$1;
(statearr_10947_10970[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10940 === (3))){
var inst_10937 = (state_10939[(2)]);
var state_10939__$1 = state_10939;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10939__$1,inst_10937);
} else {
if((state_val_10940 === (2))){
var state_10939__$1 = state_10939;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10939__$1,(4),ch);
} else {
if((state_val_10940 === (11))){
var inst_10929 = (state_10939[(2)]);
var state_10939__$1 = state_10939;
var statearr_10948_10971 = state_10939__$1;
(statearr_10948_10971[(2)] = inst_10929);

(statearr_10948_10971[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10940 === (9))){
var state_10939__$1 = state_10939;
var statearr_10949_10972 = state_10939__$1;
(statearr_10949_10972[(2)] = null);

(statearr_10949_10972[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10940 === (5))){
var inst_10924 = cljs.core.async.close_BANG_.call(null,out);
var state_10939__$1 = state_10939;
var statearr_10950_10973 = state_10939__$1;
(statearr_10950_10973[(2)] = inst_10924);

(statearr_10950_10973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10940 === (10))){
var inst_10932 = (state_10939[(2)]);
var state_10939__$1 = (function (){var statearr_10951 = state_10939;
(statearr_10951[(8)] = inst_10932);

return statearr_10951;
})();
var statearr_10952_10974 = state_10939__$1;
(statearr_10952_10974[(2)] = null);

(statearr_10952_10974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10940 === (8))){
var inst_10921 = (state_10939[(7)]);
var state_10939__$1 = state_10939;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10939__$1,(11),out,inst_10921);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__8714__auto___10964,out))
;
return ((function (switch__8602__auto__,c__8714__auto___10964,out){
return (function() {
var cljs$core$async$state_machine__8603__auto__ = null;
var cljs$core$async$state_machine__8603__auto____0 = (function (){
var statearr_10956 = [null,null,null,null,null,null,null,null,null];
(statearr_10956[(0)] = cljs$core$async$state_machine__8603__auto__);

(statearr_10956[(1)] = (1));

return statearr_10956;
});
var cljs$core$async$state_machine__8603__auto____1 = (function (state_10939){
while(true){
var ret_value__8604__auto__ = (function (){try{while(true){
var result__8605__auto__ = switch__8602__auto__.call(null,state_10939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8605__auto__;
}
break;
}
}catch (e10957){if((e10957 instanceof Object)){
var ex__8606__auto__ = e10957;
var statearr_10958_10975 = state_10939;
(statearr_10958_10975[(5)] = ex__8606__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10957;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10976 = state_10939;
state_10939 = G__10976;
continue;
} else {
return ret_value__8604__auto__;
}
break;
}
});
cljs$core$async$state_machine__8603__auto__ = function(state_10939){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8603__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8603__auto____1.call(this,state_10939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8603__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8603__auto____0;
cljs$core$async$state_machine__8603__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8603__auto____1;
return cljs$core$async$state_machine__8603__auto__;
})()
;})(switch__8602__auto__,c__8714__auto___10964,out))
})();
var state__8716__auto__ = (function (){var statearr_10959 = f__8715__auto__.call(null);
(statearr_10959[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8714__auto___10964);

return statearr_10959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8716__auto__);
});})(c__8714__auto___10964,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args10977 = [];
var len__7280__auto___10980 = arguments.length;
var i__7281__auto___10981 = (0);
while(true){
if((i__7281__auto___10981 < len__7280__auto___10980)){
args10977.push((arguments[i__7281__auto___10981]));

var G__10982 = (i__7281__auto___10981 + (1));
i__7281__auto___10981 = G__10982;
continue;
} else {
}
break;
}

var G__10979 = args10977.length;
switch (G__10979) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10977.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__8714__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8714__auto__){
return (function (){
var f__8715__auto__ = (function (){var switch__8602__auto__ = ((function (c__8714__auto__){
return (function (state_11149){
var state_val_11150 = (state_11149[(1)]);
if((state_val_11150 === (7))){
var inst_11145 = (state_11149[(2)]);
var state_11149__$1 = state_11149;
var statearr_11151_11192 = state_11149__$1;
(statearr_11151_11192[(2)] = inst_11145);

(statearr_11151_11192[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11150 === (20))){
var inst_11115 = (state_11149[(7)]);
var inst_11126 = (state_11149[(2)]);
var inst_11127 = cljs.core.next.call(null,inst_11115);
var inst_11101 = inst_11127;
var inst_11102 = null;
var inst_11103 = (0);
var inst_11104 = (0);
var state_11149__$1 = (function (){var statearr_11152 = state_11149;
(statearr_11152[(8)] = inst_11103);

(statearr_11152[(9)] = inst_11101);

(statearr_11152[(10)] = inst_11102);

(statearr_11152[(11)] = inst_11126);

(statearr_11152[(12)] = inst_11104);

return statearr_11152;
})();
var statearr_11153_11193 = state_11149__$1;
(statearr_11153_11193[(2)] = null);

(statearr_11153_11193[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11150 === (1))){
var state_11149__$1 = state_11149;
var statearr_11154_11194 = state_11149__$1;
(statearr_11154_11194[(2)] = null);

(statearr_11154_11194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11150 === (4))){
var inst_11090 = (state_11149[(13)]);
var inst_11090__$1 = (state_11149[(2)]);
var inst_11091 = (inst_11090__$1 == null);
var state_11149__$1 = (function (){var statearr_11155 = state_11149;
(statearr_11155[(13)] = inst_11090__$1);

return statearr_11155;
})();
if(cljs.core.truth_(inst_11091)){
var statearr_11156_11195 = state_11149__$1;
(statearr_11156_11195[(1)] = (5));

} else {
var statearr_11157_11196 = state_11149__$1;
(statearr_11157_11196[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11150 === (15))){
var state_11149__$1 = state_11149;
var statearr_11161_11197 = state_11149__$1;
(statearr_11161_11197[(2)] = null);

(statearr_11161_11197[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11150 === (21))){
var state_11149__$1 = state_11149;
var statearr_11162_11198 = state_11149__$1;
(statearr_11162_11198[(2)] = null);

(statearr_11162_11198[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11150 === (13))){
var inst_11103 = (state_11149[(8)]);
var inst_11101 = (state_11149[(9)]);
var inst_11102 = (state_11149[(10)]);
var inst_11104 = (state_11149[(12)]);
var inst_11111 = (state_11149[(2)]);
var inst_11112 = (inst_11104 + (1));
var tmp11158 = inst_11103;
var tmp11159 = inst_11101;
var tmp11160 = inst_11102;
var inst_11101__$1 = tmp11159;
var inst_11102__$1 = tmp11160;
var inst_11103__$1 = tmp11158;
var inst_11104__$1 = inst_11112;
var state_11149__$1 = (function (){var statearr_11163 = state_11149;
(statearr_11163[(14)] = inst_11111);

(statearr_11163[(8)] = inst_11103__$1);

(statearr_11163[(9)] = inst_11101__$1);

(statearr_11163[(10)] = inst_11102__$1);

(statearr_11163[(12)] = inst_11104__$1);

return statearr_11163;
})();
var statearr_11164_11199 = state_11149__$1;
(statearr_11164_11199[(2)] = null);

(statearr_11164_11199[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11150 === (22))){
var state_11149__$1 = state_11149;
var statearr_11165_11200 = state_11149__$1;
(statearr_11165_11200[(2)] = null);

(statearr_11165_11200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11150 === (6))){
var inst_11090 = (state_11149[(13)]);
var inst_11099 = f.call(null,inst_11090);
var inst_11100 = cljs.core.seq.call(null,inst_11099);
var inst_11101 = inst_11100;
var inst_11102 = null;
var inst_11103 = (0);
var inst_11104 = (0);
var state_11149__$1 = (function (){var statearr_11166 = state_11149;
(statearr_11166[(8)] = inst_11103);

(statearr_11166[(9)] = inst_11101);

(statearr_11166[(10)] = inst_11102);

(statearr_11166[(12)] = inst_11104);

return statearr_11166;
})();
var statearr_11167_11201 = state_11149__$1;
(statearr_11167_11201[(2)] = null);

(statearr_11167_11201[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11150 === (17))){
var inst_11115 = (state_11149[(7)]);
var inst_11119 = cljs.core.chunk_first.call(null,inst_11115);
var inst_11120 = cljs.core.chunk_rest.call(null,inst_11115);
var inst_11121 = cljs.core.count.call(null,inst_11119);
var inst_11101 = inst_11120;
var inst_11102 = inst_11119;
var inst_11103 = inst_11121;
var inst_11104 = (0);
var state_11149__$1 = (function (){var statearr_11168 = state_11149;
(statearr_11168[(8)] = inst_11103);

(statearr_11168[(9)] = inst_11101);

(statearr_11168[(10)] = inst_11102);

(statearr_11168[(12)] = inst_11104);

return statearr_11168;
})();
var statearr_11169_11202 = state_11149__$1;
(statearr_11169_11202[(2)] = null);

(statearr_11169_11202[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11150 === (3))){
var inst_11147 = (state_11149[(2)]);
var state_11149__$1 = state_11149;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11149__$1,inst_11147);
} else {
if((state_val_11150 === (12))){
var inst_11135 = (state_11149[(2)]);
var state_11149__$1 = state_11149;
var statearr_11170_11203 = state_11149__$1;
(statearr_11170_11203[(2)] = inst_11135);

(statearr_11170_11203[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11150 === (2))){
var state_11149__$1 = state_11149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11149__$1,(4),in$);
} else {
if((state_val_11150 === (23))){
var inst_11143 = (state_11149[(2)]);
var state_11149__$1 = state_11149;
var statearr_11171_11204 = state_11149__$1;
(statearr_11171_11204[(2)] = inst_11143);

(statearr_11171_11204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11150 === (19))){
var inst_11130 = (state_11149[(2)]);
var state_11149__$1 = state_11149;
var statearr_11172_11205 = state_11149__$1;
(statearr_11172_11205[(2)] = inst_11130);

(statearr_11172_11205[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11150 === (11))){
var inst_11101 = (state_11149[(9)]);
var inst_11115 = (state_11149[(7)]);
var inst_11115__$1 = cljs.core.seq.call(null,inst_11101);
var state_11149__$1 = (function (){var statearr_11173 = state_11149;
(statearr_11173[(7)] = inst_11115__$1);

return statearr_11173;
})();
if(inst_11115__$1){
var statearr_11174_11206 = state_11149__$1;
(statearr_11174_11206[(1)] = (14));

} else {
var statearr_11175_11207 = state_11149__$1;
(statearr_11175_11207[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11150 === (9))){
var inst_11137 = (state_11149[(2)]);
var inst_11138 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_11149__$1 = (function (){var statearr_11176 = state_11149;
(statearr_11176[(15)] = inst_11137);

return statearr_11176;
})();
if(cljs.core.truth_(inst_11138)){
var statearr_11177_11208 = state_11149__$1;
(statearr_11177_11208[(1)] = (21));

} else {
var statearr_11178_11209 = state_11149__$1;
(statearr_11178_11209[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11150 === (5))){
var inst_11093 = cljs.core.async.close_BANG_.call(null,out);
var state_11149__$1 = state_11149;
var statearr_11179_11210 = state_11149__$1;
(statearr_11179_11210[(2)] = inst_11093);

(statearr_11179_11210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11150 === (14))){
var inst_11115 = (state_11149[(7)]);
var inst_11117 = cljs.core.chunked_seq_QMARK_.call(null,inst_11115);
var state_11149__$1 = state_11149;
if(inst_11117){
var statearr_11180_11211 = state_11149__$1;
(statearr_11180_11211[(1)] = (17));

} else {
var statearr_11181_11212 = state_11149__$1;
(statearr_11181_11212[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11150 === (16))){
var inst_11133 = (state_11149[(2)]);
var state_11149__$1 = state_11149;
var statearr_11182_11213 = state_11149__$1;
(statearr_11182_11213[(2)] = inst_11133);

(statearr_11182_11213[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11150 === (10))){
var inst_11102 = (state_11149[(10)]);
var inst_11104 = (state_11149[(12)]);
var inst_11109 = cljs.core._nth.call(null,inst_11102,inst_11104);
var state_11149__$1 = state_11149;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11149__$1,(13),out,inst_11109);
} else {
if((state_val_11150 === (18))){
var inst_11115 = (state_11149[(7)]);
var inst_11124 = cljs.core.first.call(null,inst_11115);
var state_11149__$1 = state_11149;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11149__$1,(20),out,inst_11124);
} else {
if((state_val_11150 === (8))){
var inst_11103 = (state_11149[(8)]);
var inst_11104 = (state_11149[(12)]);
var inst_11106 = (inst_11104 < inst_11103);
var inst_11107 = inst_11106;
var state_11149__$1 = state_11149;
if(cljs.core.truth_(inst_11107)){
var statearr_11183_11214 = state_11149__$1;
(statearr_11183_11214[(1)] = (10));

} else {
var statearr_11184_11215 = state_11149__$1;
(statearr_11184_11215[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8714__auto__))
;
return ((function (switch__8602__auto__,c__8714__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__8603__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__8603__auto____0 = (function (){
var statearr_11188 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11188[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__8603__auto__);

(statearr_11188[(1)] = (1));

return statearr_11188;
});
var cljs$core$async$mapcat_STAR__$_state_machine__8603__auto____1 = (function (state_11149){
while(true){
var ret_value__8604__auto__ = (function (){try{while(true){
var result__8605__auto__ = switch__8602__auto__.call(null,state_11149);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8605__auto__;
}
break;
}
}catch (e11189){if((e11189 instanceof Object)){
var ex__8606__auto__ = e11189;
var statearr_11190_11216 = state_11149;
(statearr_11190_11216[(5)] = ex__8606__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11149);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11189;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11217 = state_11149;
state_11149 = G__11217;
continue;
} else {
return ret_value__8604__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__8603__auto__ = function(state_11149){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__8603__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__8603__auto____1.call(this,state_11149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__8603__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__8603__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__8603__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__8603__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__8603__auto__;
})()
;})(switch__8602__auto__,c__8714__auto__))
})();
var state__8716__auto__ = (function (){var statearr_11191 = f__8715__auto__.call(null);
(statearr_11191[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8714__auto__);

return statearr_11191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8716__auto__);
});})(c__8714__auto__))
);

return c__8714__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args11218 = [];
var len__7280__auto___11221 = arguments.length;
var i__7281__auto___11222 = (0);
while(true){
if((i__7281__auto___11222 < len__7280__auto___11221)){
args11218.push((arguments[i__7281__auto___11222]));

var G__11223 = (i__7281__auto___11222 + (1));
i__7281__auto___11222 = G__11223;
continue;
} else {
}
break;
}

var G__11220 = args11218.length;
switch (G__11220) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11218.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args11225 = [];
var len__7280__auto___11228 = arguments.length;
var i__7281__auto___11229 = (0);
while(true){
if((i__7281__auto___11229 < len__7280__auto___11228)){
args11225.push((arguments[i__7281__auto___11229]));

var G__11230 = (i__7281__auto___11229 + (1));
i__7281__auto___11229 = G__11230;
continue;
} else {
}
break;
}

var G__11227 = args11225.length;
switch (G__11227) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11225.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args11232 = [];
var len__7280__auto___11283 = arguments.length;
var i__7281__auto___11284 = (0);
while(true){
if((i__7281__auto___11284 < len__7280__auto___11283)){
args11232.push((arguments[i__7281__auto___11284]));

var G__11285 = (i__7281__auto___11284 + (1));
i__7281__auto___11284 = G__11285;
continue;
} else {
}
break;
}

var G__11234 = args11232.length;
switch (G__11234) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11232.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8714__auto___11287 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8714__auto___11287,out){
return (function (){
var f__8715__auto__ = (function (){var switch__8602__auto__ = ((function (c__8714__auto___11287,out){
return (function (state_11258){
var state_val_11259 = (state_11258[(1)]);
if((state_val_11259 === (7))){
var inst_11253 = (state_11258[(2)]);
var state_11258__$1 = state_11258;
var statearr_11260_11288 = state_11258__$1;
(statearr_11260_11288[(2)] = inst_11253);

(statearr_11260_11288[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11259 === (1))){
var inst_11235 = null;
var state_11258__$1 = (function (){var statearr_11261 = state_11258;
(statearr_11261[(7)] = inst_11235);

return statearr_11261;
})();
var statearr_11262_11289 = state_11258__$1;
(statearr_11262_11289[(2)] = null);

(statearr_11262_11289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11259 === (4))){
var inst_11238 = (state_11258[(8)]);
var inst_11238__$1 = (state_11258[(2)]);
var inst_11239 = (inst_11238__$1 == null);
var inst_11240 = cljs.core.not.call(null,inst_11239);
var state_11258__$1 = (function (){var statearr_11263 = state_11258;
(statearr_11263[(8)] = inst_11238__$1);

return statearr_11263;
})();
if(inst_11240){
var statearr_11264_11290 = state_11258__$1;
(statearr_11264_11290[(1)] = (5));

} else {
var statearr_11265_11291 = state_11258__$1;
(statearr_11265_11291[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11259 === (6))){
var state_11258__$1 = state_11258;
var statearr_11266_11292 = state_11258__$1;
(statearr_11266_11292[(2)] = null);

(statearr_11266_11292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11259 === (3))){
var inst_11255 = (state_11258[(2)]);
var inst_11256 = cljs.core.async.close_BANG_.call(null,out);
var state_11258__$1 = (function (){var statearr_11267 = state_11258;
(statearr_11267[(9)] = inst_11255);

return statearr_11267;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11258__$1,inst_11256);
} else {
if((state_val_11259 === (2))){
var state_11258__$1 = state_11258;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11258__$1,(4),ch);
} else {
if((state_val_11259 === (11))){
var inst_11238 = (state_11258[(8)]);
var inst_11247 = (state_11258[(2)]);
var inst_11235 = inst_11238;
var state_11258__$1 = (function (){var statearr_11268 = state_11258;
(statearr_11268[(7)] = inst_11235);

(statearr_11268[(10)] = inst_11247);

return statearr_11268;
})();
var statearr_11269_11293 = state_11258__$1;
(statearr_11269_11293[(2)] = null);

(statearr_11269_11293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11259 === (9))){
var inst_11238 = (state_11258[(8)]);
var state_11258__$1 = state_11258;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11258__$1,(11),out,inst_11238);
} else {
if((state_val_11259 === (5))){
var inst_11235 = (state_11258[(7)]);
var inst_11238 = (state_11258[(8)]);
var inst_11242 = cljs.core._EQ_.call(null,inst_11238,inst_11235);
var state_11258__$1 = state_11258;
if(inst_11242){
var statearr_11271_11294 = state_11258__$1;
(statearr_11271_11294[(1)] = (8));

} else {
var statearr_11272_11295 = state_11258__$1;
(statearr_11272_11295[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11259 === (10))){
var inst_11250 = (state_11258[(2)]);
var state_11258__$1 = state_11258;
var statearr_11273_11296 = state_11258__$1;
(statearr_11273_11296[(2)] = inst_11250);

(statearr_11273_11296[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11259 === (8))){
var inst_11235 = (state_11258[(7)]);
var tmp11270 = inst_11235;
var inst_11235__$1 = tmp11270;
var state_11258__$1 = (function (){var statearr_11274 = state_11258;
(statearr_11274[(7)] = inst_11235__$1);

return statearr_11274;
})();
var statearr_11275_11297 = state_11258__$1;
(statearr_11275_11297[(2)] = null);

(statearr_11275_11297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__8714__auto___11287,out))
;
return ((function (switch__8602__auto__,c__8714__auto___11287,out){
return (function() {
var cljs$core$async$state_machine__8603__auto__ = null;
var cljs$core$async$state_machine__8603__auto____0 = (function (){
var statearr_11279 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11279[(0)] = cljs$core$async$state_machine__8603__auto__);

(statearr_11279[(1)] = (1));

return statearr_11279;
});
var cljs$core$async$state_machine__8603__auto____1 = (function (state_11258){
while(true){
var ret_value__8604__auto__ = (function (){try{while(true){
var result__8605__auto__ = switch__8602__auto__.call(null,state_11258);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8605__auto__;
}
break;
}
}catch (e11280){if((e11280 instanceof Object)){
var ex__8606__auto__ = e11280;
var statearr_11281_11298 = state_11258;
(statearr_11281_11298[(5)] = ex__8606__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11258);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11280;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11299 = state_11258;
state_11258 = G__11299;
continue;
} else {
return ret_value__8604__auto__;
}
break;
}
});
cljs$core$async$state_machine__8603__auto__ = function(state_11258){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8603__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8603__auto____1.call(this,state_11258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8603__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8603__auto____0;
cljs$core$async$state_machine__8603__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8603__auto____1;
return cljs$core$async$state_machine__8603__auto__;
})()
;})(switch__8602__auto__,c__8714__auto___11287,out))
})();
var state__8716__auto__ = (function (){var statearr_11282 = f__8715__auto__.call(null);
(statearr_11282[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8714__auto___11287);

return statearr_11282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8716__auto__);
});})(c__8714__auto___11287,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args11300 = [];
var len__7280__auto___11370 = arguments.length;
var i__7281__auto___11371 = (0);
while(true){
if((i__7281__auto___11371 < len__7280__auto___11370)){
args11300.push((arguments[i__7281__auto___11371]));

var G__11372 = (i__7281__auto___11371 + (1));
i__7281__auto___11371 = G__11372;
continue;
} else {
}
break;
}

var G__11302 = args11300.length;
switch (G__11302) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11300.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8714__auto___11374 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8714__auto___11374,out){
return (function (){
var f__8715__auto__ = (function (){var switch__8602__auto__ = ((function (c__8714__auto___11374,out){
return (function (state_11340){
var state_val_11341 = (state_11340[(1)]);
if((state_val_11341 === (7))){
var inst_11336 = (state_11340[(2)]);
var state_11340__$1 = state_11340;
var statearr_11342_11375 = state_11340__$1;
(statearr_11342_11375[(2)] = inst_11336);

(statearr_11342_11375[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11341 === (1))){
var inst_11303 = (new Array(n));
var inst_11304 = inst_11303;
var inst_11305 = (0);
var state_11340__$1 = (function (){var statearr_11343 = state_11340;
(statearr_11343[(7)] = inst_11305);

(statearr_11343[(8)] = inst_11304);

return statearr_11343;
})();
var statearr_11344_11376 = state_11340__$1;
(statearr_11344_11376[(2)] = null);

(statearr_11344_11376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11341 === (4))){
var inst_11308 = (state_11340[(9)]);
var inst_11308__$1 = (state_11340[(2)]);
var inst_11309 = (inst_11308__$1 == null);
var inst_11310 = cljs.core.not.call(null,inst_11309);
var state_11340__$1 = (function (){var statearr_11345 = state_11340;
(statearr_11345[(9)] = inst_11308__$1);

return statearr_11345;
})();
if(inst_11310){
var statearr_11346_11377 = state_11340__$1;
(statearr_11346_11377[(1)] = (5));

} else {
var statearr_11347_11378 = state_11340__$1;
(statearr_11347_11378[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11341 === (15))){
var inst_11330 = (state_11340[(2)]);
var state_11340__$1 = state_11340;
var statearr_11348_11379 = state_11340__$1;
(statearr_11348_11379[(2)] = inst_11330);

(statearr_11348_11379[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11341 === (13))){
var state_11340__$1 = state_11340;
var statearr_11349_11380 = state_11340__$1;
(statearr_11349_11380[(2)] = null);

(statearr_11349_11380[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11341 === (6))){
var inst_11305 = (state_11340[(7)]);
var inst_11326 = (inst_11305 > (0));
var state_11340__$1 = state_11340;
if(cljs.core.truth_(inst_11326)){
var statearr_11350_11381 = state_11340__$1;
(statearr_11350_11381[(1)] = (12));

} else {
var statearr_11351_11382 = state_11340__$1;
(statearr_11351_11382[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11341 === (3))){
var inst_11338 = (state_11340[(2)]);
var state_11340__$1 = state_11340;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11340__$1,inst_11338);
} else {
if((state_val_11341 === (12))){
var inst_11304 = (state_11340[(8)]);
var inst_11328 = cljs.core.vec.call(null,inst_11304);
var state_11340__$1 = state_11340;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11340__$1,(15),out,inst_11328);
} else {
if((state_val_11341 === (2))){
var state_11340__$1 = state_11340;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11340__$1,(4),ch);
} else {
if((state_val_11341 === (11))){
var inst_11320 = (state_11340[(2)]);
var inst_11321 = (new Array(n));
var inst_11304 = inst_11321;
var inst_11305 = (0);
var state_11340__$1 = (function (){var statearr_11352 = state_11340;
(statearr_11352[(7)] = inst_11305);

(statearr_11352[(8)] = inst_11304);

(statearr_11352[(10)] = inst_11320);

return statearr_11352;
})();
var statearr_11353_11383 = state_11340__$1;
(statearr_11353_11383[(2)] = null);

(statearr_11353_11383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11341 === (9))){
var inst_11304 = (state_11340[(8)]);
var inst_11318 = cljs.core.vec.call(null,inst_11304);
var state_11340__$1 = state_11340;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11340__$1,(11),out,inst_11318);
} else {
if((state_val_11341 === (5))){
var inst_11305 = (state_11340[(7)]);
var inst_11304 = (state_11340[(8)]);
var inst_11308 = (state_11340[(9)]);
var inst_11313 = (state_11340[(11)]);
var inst_11312 = (inst_11304[inst_11305] = inst_11308);
var inst_11313__$1 = (inst_11305 + (1));
var inst_11314 = (inst_11313__$1 < n);
var state_11340__$1 = (function (){var statearr_11354 = state_11340;
(statearr_11354[(12)] = inst_11312);

(statearr_11354[(11)] = inst_11313__$1);

return statearr_11354;
})();
if(cljs.core.truth_(inst_11314)){
var statearr_11355_11384 = state_11340__$1;
(statearr_11355_11384[(1)] = (8));

} else {
var statearr_11356_11385 = state_11340__$1;
(statearr_11356_11385[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11341 === (14))){
var inst_11333 = (state_11340[(2)]);
var inst_11334 = cljs.core.async.close_BANG_.call(null,out);
var state_11340__$1 = (function (){var statearr_11358 = state_11340;
(statearr_11358[(13)] = inst_11333);

return statearr_11358;
})();
var statearr_11359_11386 = state_11340__$1;
(statearr_11359_11386[(2)] = inst_11334);

(statearr_11359_11386[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11341 === (10))){
var inst_11324 = (state_11340[(2)]);
var state_11340__$1 = state_11340;
var statearr_11360_11387 = state_11340__$1;
(statearr_11360_11387[(2)] = inst_11324);

(statearr_11360_11387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11341 === (8))){
var inst_11304 = (state_11340[(8)]);
var inst_11313 = (state_11340[(11)]);
var tmp11357 = inst_11304;
var inst_11304__$1 = tmp11357;
var inst_11305 = inst_11313;
var state_11340__$1 = (function (){var statearr_11361 = state_11340;
(statearr_11361[(7)] = inst_11305);

(statearr_11361[(8)] = inst_11304__$1);

return statearr_11361;
})();
var statearr_11362_11388 = state_11340__$1;
(statearr_11362_11388[(2)] = null);

(statearr_11362_11388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8714__auto___11374,out))
;
return ((function (switch__8602__auto__,c__8714__auto___11374,out){
return (function() {
var cljs$core$async$state_machine__8603__auto__ = null;
var cljs$core$async$state_machine__8603__auto____0 = (function (){
var statearr_11366 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11366[(0)] = cljs$core$async$state_machine__8603__auto__);

(statearr_11366[(1)] = (1));

return statearr_11366;
});
var cljs$core$async$state_machine__8603__auto____1 = (function (state_11340){
while(true){
var ret_value__8604__auto__ = (function (){try{while(true){
var result__8605__auto__ = switch__8602__auto__.call(null,state_11340);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8605__auto__;
}
break;
}
}catch (e11367){if((e11367 instanceof Object)){
var ex__8606__auto__ = e11367;
var statearr_11368_11389 = state_11340;
(statearr_11368_11389[(5)] = ex__8606__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11340);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11367;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11390 = state_11340;
state_11340 = G__11390;
continue;
} else {
return ret_value__8604__auto__;
}
break;
}
});
cljs$core$async$state_machine__8603__auto__ = function(state_11340){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8603__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8603__auto____1.call(this,state_11340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8603__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8603__auto____0;
cljs$core$async$state_machine__8603__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8603__auto____1;
return cljs$core$async$state_machine__8603__auto__;
})()
;})(switch__8602__auto__,c__8714__auto___11374,out))
})();
var state__8716__auto__ = (function (){var statearr_11369 = f__8715__auto__.call(null);
(statearr_11369[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8714__auto___11374);

return statearr_11369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8716__auto__);
});})(c__8714__auto___11374,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args11391 = [];
var len__7280__auto___11465 = arguments.length;
var i__7281__auto___11466 = (0);
while(true){
if((i__7281__auto___11466 < len__7280__auto___11465)){
args11391.push((arguments[i__7281__auto___11466]));

var G__11467 = (i__7281__auto___11466 + (1));
i__7281__auto___11466 = G__11467;
continue;
} else {
}
break;
}

var G__11393 = args11391.length;
switch (G__11393) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11391.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8714__auto___11469 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8714__auto___11469,out){
return (function (){
var f__8715__auto__ = (function (){var switch__8602__auto__ = ((function (c__8714__auto___11469,out){
return (function (state_11435){
var state_val_11436 = (state_11435[(1)]);
if((state_val_11436 === (7))){
var inst_11431 = (state_11435[(2)]);
var state_11435__$1 = state_11435;
var statearr_11437_11470 = state_11435__$1;
(statearr_11437_11470[(2)] = inst_11431);

(statearr_11437_11470[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11436 === (1))){
var inst_11394 = [];
var inst_11395 = inst_11394;
var inst_11396 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_11435__$1 = (function (){var statearr_11438 = state_11435;
(statearr_11438[(7)] = inst_11396);

(statearr_11438[(8)] = inst_11395);

return statearr_11438;
})();
var statearr_11439_11471 = state_11435__$1;
(statearr_11439_11471[(2)] = null);

(statearr_11439_11471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11436 === (4))){
var inst_11399 = (state_11435[(9)]);
var inst_11399__$1 = (state_11435[(2)]);
var inst_11400 = (inst_11399__$1 == null);
var inst_11401 = cljs.core.not.call(null,inst_11400);
var state_11435__$1 = (function (){var statearr_11440 = state_11435;
(statearr_11440[(9)] = inst_11399__$1);

return statearr_11440;
})();
if(inst_11401){
var statearr_11441_11472 = state_11435__$1;
(statearr_11441_11472[(1)] = (5));

} else {
var statearr_11442_11473 = state_11435__$1;
(statearr_11442_11473[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11436 === (15))){
var inst_11425 = (state_11435[(2)]);
var state_11435__$1 = state_11435;
var statearr_11443_11474 = state_11435__$1;
(statearr_11443_11474[(2)] = inst_11425);

(statearr_11443_11474[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11436 === (13))){
var state_11435__$1 = state_11435;
var statearr_11444_11475 = state_11435__$1;
(statearr_11444_11475[(2)] = null);

(statearr_11444_11475[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11436 === (6))){
var inst_11395 = (state_11435[(8)]);
var inst_11420 = inst_11395.length;
var inst_11421 = (inst_11420 > (0));
var state_11435__$1 = state_11435;
if(cljs.core.truth_(inst_11421)){
var statearr_11445_11476 = state_11435__$1;
(statearr_11445_11476[(1)] = (12));

} else {
var statearr_11446_11477 = state_11435__$1;
(statearr_11446_11477[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11436 === (3))){
var inst_11433 = (state_11435[(2)]);
var state_11435__$1 = state_11435;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11435__$1,inst_11433);
} else {
if((state_val_11436 === (12))){
var inst_11395 = (state_11435[(8)]);
var inst_11423 = cljs.core.vec.call(null,inst_11395);
var state_11435__$1 = state_11435;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11435__$1,(15),out,inst_11423);
} else {
if((state_val_11436 === (2))){
var state_11435__$1 = state_11435;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11435__$1,(4),ch);
} else {
if((state_val_11436 === (11))){
var inst_11399 = (state_11435[(9)]);
var inst_11403 = (state_11435[(10)]);
var inst_11413 = (state_11435[(2)]);
var inst_11414 = [];
var inst_11415 = inst_11414.push(inst_11399);
var inst_11395 = inst_11414;
var inst_11396 = inst_11403;
var state_11435__$1 = (function (){var statearr_11447 = state_11435;
(statearr_11447[(7)] = inst_11396);

(statearr_11447[(11)] = inst_11413);

(statearr_11447[(12)] = inst_11415);

(statearr_11447[(8)] = inst_11395);

return statearr_11447;
})();
var statearr_11448_11478 = state_11435__$1;
(statearr_11448_11478[(2)] = null);

(statearr_11448_11478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11436 === (9))){
var inst_11395 = (state_11435[(8)]);
var inst_11411 = cljs.core.vec.call(null,inst_11395);
var state_11435__$1 = state_11435;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11435__$1,(11),out,inst_11411);
} else {
if((state_val_11436 === (5))){
var inst_11396 = (state_11435[(7)]);
var inst_11399 = (state_11435[(9)]);
var inst_11403 = (state_11435[(10)]);
var inst_11403__$1 = f.call(null,inst_11399);
var inst_11404 = cljs.core._EQ_.call(null,inst_11403__$1,inst_11396);
var inst_11405 = cljs.core.keyword_identical_QMARK_.call(null,inst_11396,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_11406 = (inst_11404) || (inst_11405);
var state_11435__$1 = (function (){var statearr_11449 = state_11435;
(statearr_11449[(10)] = inst_11403__$1);

return statearr_11449;
})();
if(cljs.core.truth_(inst_11406)){
var statearr_11450_11479 = state_11435__$1;
(statearr_11450_11479[(1)] = (8));

} else {
var statearr_11451_11480 = state_11435__$1;
(statearr_11451_11480[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11436 === (14))){
var inst_11428 = (state_11435[(2)]);
var inst_11429 = cljs.core.async.close_BANG_.call(null,out);
var state_11435__$1 = (function (){var statearr_11453 = state_11435;
(statearr_11453[(13)] = inst_11428);

return statearr_11453;
})();
var statearr_11454_11481 = state_11435__$1;
(statearr_11454_11481[(2)] = inst_11429);

(statearr_11454_11481[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11436 === (10))){
var inst_11418 = (state_11435[(2)]);
var state_11435__$1 = state_11435;
var statearr_11455_11482 = state_11435__$1;
(statearr_11455_11482[(2)] = inst_11418);

(statearr_11455_11482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11436 === (8))){
var inst_11399 = (state_11435[(9)]);
var inst_11403 = (state_11435[(10)]);
var inst_11395 = (state_11435[(8)]);
var inst_11408 = inst_11395.push(inst_11399);
var tmp11452 = inst_11395;
var inst_11395__$1 = tmp11452;
var inst_11396 = inst_11403;
var state_11435__$1 = (function (){var statearr_11456 = state_11435;
(statearr_11456[(7)] = inst_11396);

(statearr_11456[(14)] = inst_11408);

(statearr_11456[(8)] = inst_11395__$1);

return statearr_11456;
})();
var statearr_11457_11483 = state_11435__$1;
(statearr_11457_11483[(2)] = null);

(statearr_11457_11483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8714__auto___11469,out))
;
return ((function (switch__8602__auto__,c__8714__auto___11469,out){
return (function() {
var cljs$core$async$state_machine__8603__auto__ = null;
var cljs$core$async$state_machine__8603__auto____0 = (function (){
var statearr_11461 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11461[(0)] = cljs$core$async$state_machine__8603__auto__);

(statearr_11461[(1)] = (1));

return statearr_11461;
});
var cljs$core$async$state_machine__8603__auto____1 = (function (state_11435){
while(true){
var ret_value__8604__auto__ = (function (){try{while(true){
var result__8605__auto__ = switch__8602__auto__.call(null,state_11435);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8605__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8605__auto__;
}
break;
}
}catch (e11462){if((e11462 instanceof Object)){
var ex__8606__auto__ = e11462;
var statearr_11463_11484 = state_11435;
(statearr_11463_11484[(5)] = ex__8606__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11435);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11462;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8604__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11485 = state_11435;
state_11435 = G__11485;
continue;
} else {
return ret_value__8604__auto__;
}
break;
}
});
cljs$core$async$state_machine__8603__auto__ = function(state_11435){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8603__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8603__auto____1.call(this,state_11435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8603__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8603__auto____0;
cljs$core$async$state_machine__8603__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8603__auto____1;
return cljs$core$async$state_machine__8603__auto__;
})()
;})(switch__8602__auto__,c__8714__auto___11469,out))
})();
var state__8716__auto__ = (function (){var statearr_11464 = f__8715__auto__.call(null);
(statearr_11464[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8714__auto___11469);

return statearr_11464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8716__auto__);
});})(c__8714__auto___11469,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map