// Compiled by ClojureScript 1.8.51 {}
goog.provide('zhcljs.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('alandipert.storage_atom');
goog.require('ajax.core');
/**
 * I don't do a whole lot.
 */
zhcljs.core._main = (function zhcljs$core$_main(){
return cljs.core.println.call(null,"Hello from Clojure111");
});
zhcljs.core.some_stories = (function zhcljs$core$some_stories(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"Title","Title",1956715563),"The title 1",new cljs.core.Keyword(null,"Introduction","Introduction",-1974205923),"The introduction 1",new cljs.core.Keyword(null,"Published","Published",661167780),"04/27/2016 - 18:38",new cljs.core.Keyword(null,"Reference","Reference",384042559),"aHR0cDovL3d3dy56ZXJvaGVkZ2UuY29tL25ld3MvMjAxNi0wNC0yNy9lbmQtdmVuZXp1ZWxhLXJ1bnMtb3V0LW1vbmV5LXByaW50LW5ldy1tb25leQ=="], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"Title","Title",1956715563),"The title 2",new cljs.core.Keyword(null,"Introduction","Introduction",-1974205923),"The introduction 2",new cljs.core.Keyword(null,"Published","Published",661167780),"04/27/2017 - 18:38",new cljs.core.Keyword(null,"Reference","Reference",384042559),"R0cDovL3d3dy56ZXJvaGVkZ2UuY29tL25ld3MvMjAxNi0wNC0yNy9lbmQtdmVuZXp1ZWxhLXJ1bnMtb3V0LW1vbmV5LXByaW50LW5ldy1tb25leQ=="], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"Title","Title",1956715563),"The title 3",new cljs.core.Keyword(null,"Introduction","Introduction",-1974205923),"The introduction 3",new cljs.core.Keyword(null,"Published","Published",661167780),"04/27/2016 - 18:38",new cljs.core.Keyword(null,"Reference","Reference",384042559),"HR0cDovL3d3dy56ZXJvaGVkZ2UuY29tL25ld3MvMjAxNi0wNC0yNy9lbmQtdmVuZXp1ZWxhLXJ1bnMtb3V0LW1vbmV5LXByaW50LW5ldy1tb25leQ=="], null)], null);
});
zhcljs.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"0","0",351625802),zhcljs.core.some_stories.call(null)], null));
zhcljs.core.handler = (function zhcljs$core$handler(response){
var pageid = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.keyword.call(null,[cljs.core.str(cljs.core.get.call(null,response,"Page"))].join(''))],null));
var newdata = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (pageid){
return (function (story){
return cljs.core.assoc.call(null,story,new cljs.core.Keyword(null,"Title","Title",1956715563),cljs.core.get.call(null,story,"Title"),new cljs.core.Keyword(null,"Introduction","Introduction",-1974205923),cljs.core.get.call(null,story,"Introduction"),new cljs.core.Keyword(null,"Reference","Reference",384042559),cljs.core.get.call(null,story,"Reference"));
});})(pageid))
,cljs.core.get.call(null,response,"Data")));
console.log([cljs.core.str(pageid)].join(''));

return cljs.core.swap_BANG_.call(null,zhcljs.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"0","0",351625802)], null),newdata);
});
zhcljs.core.error_handler = (function zhcljs$core$error_handler(p__9540){
var map__9543 = p__9540;
var map__9543__$1 = ((((!((map__9543 == null)))?((((map__9543.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9543.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9543):map__9543);
var status = cljs.core.get.call(null,map__9543__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__9543__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return console.log([cljs.core.str("something bad happened: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
zhcljs.core.downloadpage = (function zhcljs$core$downloadpage(pageid){
return ajax.core.GET.call(null,[cljs.core.str("http://localhost:8083/api/page/"),cljs.core.str(pageid)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),zhcljs.core.handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),zhcljs.core.error_handler], null));
});
zhcljs.core.build_items_html = (function zhcljs$core$build_items_html(all_items){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#blogItems.col-md-12","div#blogItems.col-md-12",-1598561641),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"styles","styles",1954480375),"margin-top: 60px;"], null),(function (){var iter__6990__auto__ = (function zhcljs$core$build_items_html_$_iter__9557(s__9558){
return (new cljs.core.LazySeq(null,(function (){
var s__9558__$1 = s__9558;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__9558__$1);
if(temp__4657__auto__){
var s__9558__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9558__$2)){
var c__6988__auto__ = cljs.core.chunk_first.call(null,s__9558__$2);
var size__6989__auto__ = cljs.core.count.call(null,c__6988__auto__);
var b__9560 = cljs.core.chunk_buffer.call(null,size__6989__auto__);
if((function (){var i__9559 = (0);
while(true){
if((i__9559 < size__6989__auto__)){
var map__9565 = cljs.core._nth.call(null,c__6988__auto__,i__9559);
var map__9565__$1 = ((((!((map__9565 == null)))?((((map__9565.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9565.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9565):map__9565);
var Title = cljs.core.get.call(null,map__9565__$1,new cljs.core.Keyword(null,"Title","Title",1956715563));
var Updated = cljs.core.get.call(null,map__9565__$1,new cljs.core.Keyword(null,"Updated","Updated",-548544317));
var Introduction = cljs.core.get.call(null,map__9565__$1,new cljs.core.Keyword(null,"Introduction","Introduction",-1974205923));
var Reference = cljs.core.get.call(null,map__9565__$1,new cljs.core.Keyword(null,"Reference","Reference",384042559));
cljs.core.chunk_append.call(null,b__9560,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"panel-primary"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"panel-heading"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"panel-title"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("../story/"),cljs.core.str(Reference)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),Title], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"panel-body"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),Introduction], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),Reference], null)));

var G__9569 = (i__9559 + (1));
i__9559 = G__9569;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9560),zhcljs$core$build_items_html_$_iter__9557.call(null,cljs.core.chunk_rest.call(null,s__9558__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9560),null);
}
} else {
var map__9567 = cljs.core.first.call(null,s__9558__$2);
var map__9567__$1 = ((((!((map__9567 == null)))?((((map__9567.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9567.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9567):map__9567);
var Title = cljs.core.get.call(null,map__9567__$1,new cljs.core.Keyword(null,"Title","Title",1956715563));
var Updated = cljs.core.get.call(null,map__9567__$1,new cljs.core.Keyword(null,"Updated","Updated",-548544317));
var Introduction = cljs.core.get.call(null,map__9567__$1,new cljs.core.Keyword(null,"Introduction","Introduction",-1974205923));
var Reference = cljs.core.get.call(null,map__9567__$1,new cljs.core.Keyword(null,"Reference","Reference",384042559));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"panel-primary"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"panel-heading"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"panel-title"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("../story/"),cljs.core.str(Reference)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),Title], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"panel-body"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),Introduction], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),Reference], null)),zhcljs$core$build_items_html_$_iter__9557.call(null,cljs.core.rest.call(null,s__9558__$2)));
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
zhcljs.core.app = (function zhcljs$core$app(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"role","role",-736691072),"navigation",new cljs.core.Keyword(null,"class","class",-2030961996),"navbar navbar-inverse navbar-fixed-top"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"navbar-collapse collapse"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align=","align=",-1321763915),"left"], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"nav navbar-nav"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
return zhcljs.core.downloadpage.call(null,(0));
})], null),"Home"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id=","id=",-1548204040),"page1li"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
return zhcljs.core.downloadpage.call(null,(1));
})], null),"Page 1"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id=","id=",-1548204040),"page2li"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
return zhcljs.core.downloadpage.call(null,(2));
})], null),"Page 2"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id=","id=",-1548204040),"page3li"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
return zhcljs.core.downloadpage.call(null,(3));
})], null),"Page 3"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id=","id=",-1548204040),"page4li"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
return zhcljs.core.downloadpage.call(null,(4));
})], null),"Page 4"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id=","id=",-1548204040),"page5li"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
return zhcljs.core.downloadpage.call(null,(5));
})], null),"Page 5"], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"content"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"container top-padding-med"], null),zhcljs.core.build_items_html.call(null,cljs.core.deref.call(null,zhcljs.core.app_state).call(null,new cljs.core.Keyword(null,"0","0",351625802)))], null)], null)], null);
});
reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zhcljs.core.app], null),document.querySelector("#cljs-target"));
zhcljs.core.downloadpage.call(null,(0));

//# sourceMappingURL=core.js.map