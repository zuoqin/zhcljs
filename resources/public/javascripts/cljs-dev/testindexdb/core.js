// Compiled by ClojureScript 1.8.51 {}
goog.provide('testindexdb.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('alandipert.storage_atom');
goog.require('ajax.core');
/**
 * I don't do a whole lot.
 */
testindexdb.core._main = (function testindexdb$core$_main(){
return cljs.core.println.call(null,"Hello from Clojure111");
});
testindexdb.core.some_stories = (function testindexdb$core$some_stories(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"Title","Title",1956715563),"The title 1",new cljs.core.Keyword(null,"Introduction","Introduction",-1974205923),"The introduction 1",new cljs.core.Keyword(null,"Published","Published",661167780),"04/27/2016 - 18:38",new cljs.core.Keyword(null,"Reference","Reference",384042559),"aHR0cDovL3d3dy56ZXJvaGVkZ2UuY29tL25ld3MvMjAxNi0wNC0yNy9lbmQtdmVuZXp1ZWxhLXJ1bnMtb3V0LW1vbmV5LXByaW50LW5ldy1tb25leQ=="], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"Title","Title",1956715563),"The title 2",new cljs.core.Keyword(null,"Introduction","Introduction",-1974205923),"The introduction 2",new cljs.core.Keyword(null,"Published","Published",661167780),"04/27/2017 - 18:38",new cljs.core.Keyword(null,"Reference","Reference",384042559),"R0cDovL3d3dy56ZXJvaGVkZ2UuY29tL25ld3MvMjAxNi0wNC0yNy9lbmQtdmVuZXp1ZWxhLXJ1bnMtb3V0LW1vbmV5LXByaW50LW5ldy1tb25leQ=="], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"Title","Title",1956715563),"The title 3",new cljs.core.Keyword(null,"Introduction","Introduction",-1974205923),"The introduction 3",new cljs.core.Keyword(null,"Published","Published",661167780),"04/27/2016 - 18:38",new cljs.core.Keyword(null,"Reference","Reference",384042559),"HR0cDovL3d3dy56ZXJvaGVkZ2UuY29tL25ld3MvMjAxNi0wNC0yNy9lbmQtdmVuZXp1ZWxhLXJ1bnMtb3V0LW1vbmV5LXByaW50LW5ldy1tb25leQ=="], null)], null);
});
testindexdb.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"0","0",351625802),testindexdb.core.some_stories.call(null)], null));
testindexdb.core.build_items_html = (function testindexdb$core$build_items_html(all_items){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#blogItems.col-md-12","div#blogItems.col-md-12",-1598561641),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"styles","styles",1954480375),"margin-top: 60px;"], null),(function (){var iter__6990__auto__ = (function testindexdb$core$build_items_html_$_iter__8530(s__8531){
return (new cljs.core.LazySeq(null,(function (){
var s__8531__$1 = s__8531;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__8531__$1);
if(temp__4657__auto__){
var s__8531__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8531__$2)){
var c__6988__auto__ = cljs.core.chunk_first.call(null,s__8531__$2);
var size__6989__auto__ = cljs.core.count.call(null,c__6988__auto__);
var b__8533 = cljs.core.chunk_buffer.call(null,size__6989__auto__);
if((function (){var i__8532 = (0);
while(true){
if((i__8532 < size__6989__auto__)){
var map__8538 = cljs.core._nth.call(null,c__6988__auto__,i__8532);
var map__8538__$1 = ((((!((map__8538 == null)))?((((map__8538.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8538.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8538):map__8538);
var Title = cljs.core.get.call(null,map__8538__$1,new cljs.core.Keyword(null,"Title","Title",1956715563));
var Updated = cljs.core.get.call(null,map__8538__$1,new cljs.core.Keyword(null,"Updated","Updated",-548544317));
var Introduction = cljs.core.get.call(null,map__8538__$1,new cljs.core.Keyword(null,"Introduction","Introduction",-1974205923));
var Reference = cljs.core.get.call(null,map__8538__$1,new cljs.core.Keyword(null,"Reference","Reference",384042559));
cljs.core.chunk_append.call(null,b__8533,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"panel-primary"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"panel-heading"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"panel-title"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("../story/"),cljs.core.str(Reference)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),Title], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"panel-body"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),Introduction], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),Reference], null)));

var G__8542 = (i__8532 + (1));
i__8532 = G__8542;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8533),testindexdb$core$build_items_html_$_iter__8530.call(null,cljs.core.chunk_rest.call(null,s__8531__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8533),null);
}
} else {
var map__8540 = cljs.core.first.call(null,s__8531__$2);
var map__8540__$1 = ((((!((map__8540 == null)))?((((map__8540.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8540.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8540):map__8540);
var Title = cljs.core.get.call(null,map__8540__$1,new cljs.core.Keyword(null,"Title","Title",1956715563));
var Updated = cljs.core.get.call(null,map__8540__$1,new cljs.core.Keyword(null,"Updated","Updated",-548544317));
var Introduction = cljs.core.get.call(null,map__8540__$1,new cljs.core.Keyword(null,"Introduction","Introduction",-1974205923));
var Reference = cljs.core.get.call(null,map__8540__$1,new cljs.core.Keyword(null,"Reference","Reference",384042559));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"panel-primary"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"panel-heading"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"panel-title"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("../story/"),cljs.core.str(Reference)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),Title], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"panel-body"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),Introduction], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),Reference], null)),testindexdb$core$build_items_html_$_iter__8530.call(null,cljs.core.rest.call(null,s__8531__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__6990__auto__.call(null,all_items);
})()], null);
});
testindexdb.core.app = (function testindexdb$core$app(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"role","role",-736691072),"navigation",new cljs.core.Keyword(null,"class","class",-2030961996),"navbar navbar-inverse navbar-fixed-top"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"navbar-collapse collapse"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align=","align=",-1321763915),"left"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"nav navbar-nav"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/page/0"], null),"Home"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id=","id=",-1548204040),"page1li"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/page/1"], null),"Page 1"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id=","id=",-1548204040),"page2li"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/page/2"], null),"Page 2"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id=","id=",-1548204040),"page3li"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/page/3"], null),"Page 3"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id=","id=",-1548204040),"page4li"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/page/4"], null),"Page 4"], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"content"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"container top-padding-med"], null),testindexdb.core.build_items_html.call(null,cljs.core.deref.call(null,testindexdb.core.app_state).call(null,new cljs.core.Keyword(null,"0","0",351625802)))], null)], null)], null);
});
reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [testindexdb.core.app], null),document.querySelector("#cljs-target"));
testindexdb.core.handler = (function testindexdb$core$handler(response){
var newdata = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (story){
return cljs.core.assoc.call(null,story,new cljs.core.Keyword(null,"Title","Title",1956715563),cljs.core.get.call(null,story,"Title"),new cljs.core.Keyword(null,"Introduction","Introduction",-1974205923),cljs.core.get.call(null,story,"Introduction"),new cljs.core.Keyword(null,"Reference","Reference",384042559),cljs.core.get.call(null,story,"Reference"));
}),response));
return cljs.core.swap_BANG_.call(null,testindexdb.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"0","0",351625802)], null),newdata);
});
testindexdb.core.error_handler = (function testindexdb$core$error_handler(p__8543){
var map__8546 = p__8543;
var map__8546__$1 = ((((!((map__8546 == null)))?((((map__8546.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8546.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8546):map__8546);
var status = cljs.core.get.call(null,map__8546__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__8546__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return console.log([cljs.core.str("something bad happened: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
ajax.core.GET.call(null,"http://take5people.cn:8083/api/page/0",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),testindexdb.core.handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),testindexdb.core.error_handler], null));
setTimeout((function (){
return cljs.core.swap_BANG_.call(null,testindexdb.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002)], null),"New Message");
}),(2000));

//# sourceMappingURL=core.js.map