(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7cefe675"],{1917:function(t,e,i){},"4f73":function(t,e,i){"use strict";i("1917")},"60d4":function(t,e,i){},"61b0":function(t,e,i){"use strict";i("bbc5")},"6a20":function(t,e,i){"use strict";i("60d4")},a0c6:function(t,e,i){},b0c0:function(t,e,i){var n=i("83ab"),c=i("9bf2").f,s=Function.prototype,o=s.toString,a=/^\s*function ([^ (]*)/,m="name";n&&!(m in s)&&c(s,m,{configurable:!0,get:function(){try{return o.call(this).match(a)[1]}catch(t){return""}}})},bbc5:function(t,e,i){},d47c:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"todoListContainer"},[i("div",{staticClass:"heading"},[i("h2",{attrs:{id:"title"}},[t._v("Todo List")]),i("add-item-form",{on:{reloadlist:function(e){return t.getList()}}})],1),i("list-view",{attrs:{items:t.items},on:{reloadlist:function(e){return t.getList()}}})],1)},c=[],s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"addItem"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.item.name,expression:"item.name"}],attrs:{type:"text"},domProps:{value:t.item.name},on:{input:function(e){e.target.composing||t.$set(t.item,"name",e.target.value)}}}),i("font-awesome-icon",{class:[t.item.name?"active":"inactive","plus"],attrs:{icon:"plus-square"},on:{click:function(e){return t.addItem()}}})],1)},o=[],a=(i("b0c0"),{data:function(){return{item:{name:""}}},methods:{addItem:function(){var t=this;""!=this.item.name&&axios.post("api/item/store",{item:this.item}).then((function(e){201==e.status&&(t.item.name="",t.$emit("reloadlist"))})).catch((function(t){console.log(t)}))}}}),m=a,r=(i("4f73"),i("2877")),u=Object(r["a"])(m,s,o,!1,null,"71c0dd25",null),l=u.exports,d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.items,(function(e,n){return i("div",{key:n},[i("list-item",{staticClass:"item",attrs:{item:e},on:{itemchanged:function(e){return t.$emit("reloadlist")}}})],1)})),0)},f=[],p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"item"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.item.completed,expression:"item.completed"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.item.completed)?t._i(t.item.completed,null)>-1:t.item.completed},on:{change:[function(e){var i=t.item.completed,n=e.target,c=!!n.checked;if(Array.isArray(i)){var s=null,o=t._i(i,s);n.checked?o<0&&t.$set(t.item,"completed",i.concat([s])):o>-1&&t.$set(t.item,"completed",i.slice(0,o).concat(i.slice(o+1)))}else t.$set(t.item,"completed",c)},function(e){return t.updateCheck()}]}}),i("span",{class:[t.item.completed?"completed":"","itemText"]},[t._v(" "+t._s(t.item.name)+" ")]),i("button",{staticClass:"trashcan",on:{click:function(e){return t.removeItem()}}},[i("font-awesome-icon",{attrs:{icon:"trash"}})],1)])},h=[],v={props:["item"],methods:{updateCheck:function(){var t=this;axios.put("api/item/"+this.item.id,{item:this.item}).then((function(e){200==e.status&&t.$emit("itemchanged")})).catch((function(t){console.log(t)}))},removeItem:function(){var t=this;axios.delete("api/item/"+this.item.id).then((function(e){200==e.status&&t.$emit("itemchanged")})).catch((function(t){console.log(t)}))}}},g=v,b=(i("61b0"),Object(r["a"])(g,p,h,!1,null,"64a19aa5",null)),_=b.exports,x={props:["items"],components:{listItem:_}},k=x,w=(i("f06e"),Object(r["a"])(k,d,f,!1,null,"9d981b2a",null)),$=w.exports,y={components:{addItemForm:l,listView:$},data:function(){return{items:[]}},methods:{getList:function(){var t=this;axios.get("api/items").then((function(e){t.items=e.data})).catch((function(t){console.log(t)}))}},created:function(){this.getList()}},C=y,I=(i("6a20"),Object(r["a"])(C,n,c,!1,null,"0d4ec5c6",null));e["default"]=I.exports},f06e:function(t,e,i){"use strict";i("a0c6")}}]);
//# sourceMappingURL=chunk-7cefe675.fa9a5595.js.map