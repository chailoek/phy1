/*! For license information please see 298.ddf839cb5b3ff136e958.js.LICENSE.txt */
(self.webpackChunkjupyterlab_tabular_data_editor=self.webpackChunkjupyterlab_tabular_data_editor||[]).push([[298],{298:(t,e,r)=>{"use strict";r.r(e),r.d(e,{Datastore:()=>A,Field:()=>E,Fields:()=>j,ListField:()=>P,MapField:()=>M,RegisterField:()=>S,Table:()=>_,TextField:()=>L,validateSchema:()=>d});var n,i=r(850),o=function(){function t(t){this._root=new n.LeafNode,this.cmp=t}return Object.defineProperty(t.prototype,"isEmpty",{get:function(){return 0===this._root.size},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"size",{get:function(){return this._root.size},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"first",{get:function(){var t=n.firstLeaf(this._root);return t.size>0?t.items[0]:void 0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"last",{get:function(){var t=n.lastLeaf(this._root);return t.size>0?t.items[t.size-1]:void 0},enumerable:!0,configurable:!0}),t.prototype.iter=function(){return n.iterItems(this._root)},t.prototype.retro=function(){return n.retroItems(this._root)},t.prototype.slice=function(t,e){return n.sliceItems(this._root,t,e)},t.prototype.retroSlice=function(t,e){return n.retroSliceItems(this._root,t,e)},t.prototype.at=function(t){return n.itemAt(this._root,t)},t.prototype.has=function(t,e){return n.hasItem(this._root,t,e)},t.prototype.indexOf=function(t,e){return n.indexOf(this._root,t,e)},t.prototype.get=function(t,e){return n.getItem(this._root,t,e)},t.prototype.assign=function(t){this.clear(),this.update(t)},t.prototype.insert=function(t){var e=n.insertItem(this._root,t,this.cmp);return this._root=n.maybeSplitRoot(this._root),e},t.prototype.update=function(t){var e=this;(0,i.each)(t,(function(t){e.insert(t)}))},t.prototype.delete=function(t,e){var r=n.deleteItem(this._root,t,e);return this._root=n.maybeExtractRoot(this._root),r},t.prototype.remove=function(t){var e=n.removeItem(this._root,t);return this._root=n.maybeExtractRoot(this._root),e},t.prototype.clear=function(){n.clear(this._root),this._root=new n.LeafNode},t}();!function(t){t.from=function(e,r){var n=new t(r);return n.assign(e),n}}(o||(o={})),function(t){var e=function(){function t(){this.items=[],this.sizes=[],this.children=[]}return Object.defineProperty(t.prototype,"type",{get:function(){return 0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"size",{get:function(){return this.sizes[this.sizes.length-1]},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"width",{get:function(){return this.children.length},enumerable:!0,configurable:!0}),t}();t.BranchNode=e;var r=function(){function t(){this.next=null,this.prev=null,this.items=[]}return Object.defineProperty(t.prototype,"type",{get:function(){return 1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"size",{get:function(){return this.items.length},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"width",{get:function(){return this.items.length},enumerable:!0,configurable:!0}),t}();function n(t){for(;0===t.type;)t=t.children[0];return t}function o(t){for(;0===t.type;)t=t.children[t.children.length-1];return t}function a(t){0===t.type?((0,i.each)(t.children,a),t.children.length=0,t.sizes.length=0,t.items.length=0):(t.items.length=0,t.next=null,t.prev=null)}t.LeafNode=r,t.firstLeaf=n,t.lastLeaf=o,t.iterItems=function(t){var e=n(t);return new c(e,0,-1)},t.retroItems=function(t){var e=o(t);return new p(e,e.size-1,-1)},t.sliceItems=function(t,e,r){e=void 0===e?0:e<0?Math.max(0,e+t.size):Math.min(e,t.size),r=void 0===r?t.size:r<0?Math.max(0,r+t.size):Math.min(r,t.size);var n=Math.max(0,r-e);if(0===n)return(0,i.empty)();for(;0===t.type;){var o=h(t.sizes,e);o>0&&(e-=t.sizes[o-1]),t=t.children[o]}return new c(t,e,n)},t.retroSliceItems=function(t,e,r){e=void 0===e?t.size-1:e<0?Math.max(-1,e+t.size):Math.min(e,t.size-1),r=void 0===r?-1:r<0?Math.max(-1,r+t.size):Math.min(r,t.size-1);var n=Math.max(0,e-r);if(0===n)return(0,i.empty)();for(;0===t.type;){var o=h(t.sizes,e);o>0&&(e-=t.sizes[o-1]),t=t.children[o]}return new p(t,e,n)},t.itemAt=function(t,e){if(e<0&&(e+=t.size),!(e<0||e>=t.size)){for(;0===t.type;){var r=h(t.sizes,e);r>0&&(e-=t.sizes[r-1]),t=t.children[r]}return t.items[e]}},t.hasItem=function(t,e,r){for(;0===t.type;){var n=d(t.items,e,r);t=t.children[n]}return l(t.items,e,r)>=0},t.indexOf=function(t,e,r){for(var n=0;0===t.type;){var i=d(t.items,e,r);i>0&&(n+=t.sizes[i-1]),t=t.children[i]}var o=l(t.items,e,r);return o>=0?n+o:-n+o},t.getItem=function(t,e,r){for(;0===t.type;){var n=d(t.items,e,r);t=t.children[n]}var i=l(t.items,e,r);return i>=0?t.items[i]:void 0},t.insertItem=function t(e,r,n){if(1===e.type){var o,a=l(e.items,r,n);return a>=0?(o=e.items[a],e.items[a]=r):(o=void 0,i.ArrayExt.insert(e.items,-a-1,r)),o}var u=d(e.items,r,n),c=e.children[u],p=c.size,h=t(c,r,n),m=c.size;if(e.items[u]=c.items[0],p===m)return h;if(c.width>s){var y=v(c);i.ArrayExt.insert(e.children,u+1,y),i.ArrayExt.insert(e.items,u+1,y.items[0])}return f(e,u),h},t.deleteItem=function t(e,r,n){if(1===e.type){var o=l(e.items,r,n);if(o<0)return;return i.ArrayExt.removeAt(e.items,o)}var a=d(e.items,r,n),s=e.children[a],c=s.size,p=t(s,r,n);return c===s.size||(e.items[a]=s.items[0],s.width<u&&(a=m(e,a)),f(e,a)),p},t.removeItem=function t(e,r){if(r<0&&(r+=e.size),!(r<0||r>=e.size)){if(1===e.type)return i.ArrayExt.removeAt(e.items,r);var n=h(e.sizes,r);n>0&&(r-=e.sizes[n]);var o=e.children[n],a=t(o,r);return e.items[n]=o.items[0],o.width<u&&(n=m(e,n)),f(e,n),a}},t.clear=a,t.maybeSplitRoot=function(t){if(t.width<=s)return t;var r=new e,n=v(t);return r.sizes[0]=t.size,r.sizes[1]=t.size+n.size,r.children[0]=t,r.children[1]=n,r.items[0]=t.items[0],r.items[1]=n.items[0],r},t.maybeExtractRoot=function(t){if(1===t.type)return t;if(t.children.length>1)return t;var e=t.children.pop();return a(t),e};var s=32,u=s>>1,c=function(){function t(t,e,r){this._node=t,this._index=e,this._count=r}return t.prototype.iter=function(){return this},t.prototype.clone=function(){return new t(this._node,this._index,this._count)},t.prototype.next=function(){if(null!==this._node&&0!==this._count)return this._index>=this._node.size?(this._node=this._node.next,this._index=0,this.next()):(this._count>0&&this._count--,this._node.items[this._index++])},t}(),p=function(){function t(t,e,r){this._node=t,this._index=e,this._count=r}return t.prototype.iter=function(){return this},t.prototype.clone=function(){return new t(this._node,this._index,this._count)},t.prototype.next=function(){if(null!==this._node&&0!==this._count)return this._index>=this._node.size&&(this._index=this._node.size-1),this._index<0?(this._node=this._node.prev,this._index=this._node?this._node.size-1:-1,this.next()):(this._count>0&&this._count--,this._node.items[this._index--])},t}();function h(t,e){for(var r=t.length,n=0;n<r;++n)if(t[n]>e)return n;return r-1}function d(t,e,r){for(var n=t.length,i=1;i<n;++i)if(r(t[i],e)>0)return i-1;return n-1}function l(t,e,r){for(var n=t.length,i=0;i<n;++i){var o=r(t[i],e);if(0===o)return i;if(o>0)return-i-1}return-n-1}function f(t,e){for(var r=t.sizes,n=t.children,i=e>0?r[e-1]:0,o=n.length;e<o;++e)i=r[e]=i+n[e].size;r.length=n.length}function v(t){if(1===t.type){for(var n=new r,i=t.items,o=n.items,a=u,s=i.length;a<s;++a)o.push(i[a]);return i.length=u,t.next&&(t.next.prev=n),n.next=t.next,n.prev=t,t.next=n,n}var c=new e,p=t.children,h=c.children;for(a=u,s=p.length;a<s;++a)h.push(p[a]);p.length=u;var d=t.items,l=c.items;for(a=u,s=d.length;a<s;++a)l.push(d[a]);return d.length=u,f(t,u),f(c,0),c}function m(t,e){var r,n,o,s,c,p,h=t.children[e],d=0===e?t.children[e+1]:t.children[e-1],l=0===e,v=1===h.type,m=d.width>u;if(v&&m&&l){var y=d;return(g=h).items.push(y.items.shift()),t.items[e+1]=y.items[0],e}if(v&&m&&!l)return y=d,(g=h).items.unshift(y.items.pop()),t.items[e]=g.items[0],e-1;if(v&&!m&&l){var g=h;return(r=(y=d).items).unshift.apply(r,g.items),i.ArrayExt.removeAt(t.children,e),i.ArrayExt.removeAt(t.items,e+1),g.prev&&(g.prev.next=y),y.prev=g.prev,a(g),e}if(v&&!m&&!l)return g=h,(n=(y=d).items).push.apply(n,g.items),i.ArrayExt.removeAt(t.children,e),i.ArrayExt.removeAt(t.items,e),g.next&&(g.next.prev=y),y.next=g.next,a(g),e-1;if(!v&&m&&l)return y=d,(g=h).children.push(y.children.shift()),g.items.push(y.items.shift()),t.items[e+1]=y.items[0],f(g,g.width-1),f(y,0),e;if(!v&&m&&!l)return y=d,(g=h).children.unshift(y.children.pop()),g.items.unshift(y.items.pop()),t.items[e]=g.items[0],f(g,0),f(y,y.width-1),e-1;if(!v&&!m&&l)return g=h,(o=(y=d).children).unshift.apply(o,g.children),(s=y.items).unshift.apply(s,g.items),i.ArrayExt.removeAt(t.children,e),i.ArrayExt.removeAt(t.items,e+1),f(y,0),g.children.length=0,a(g),e;if(!v&&!m&&!l)return g=h,(c=(y=d).children).push.apply(c,g.children),(p=y.items).push.apply(p,g.items),i.ArrayExt.removeAt(t.children,e),i.ArrayExt.removeAt(t.items,e),f(y,0),g.children.length=0,a(g),e-1;throw"unreachable"}}(n||(n={}));var a,s=function(){function t(){this._first=null,this._last=null,this._size=0}return Object.defineProperty(t.prototype,"isEmpty",{get:function(){return 0===this._size},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"size",{get:function(){return this._size},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"length",{get:function(){return this._size},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"first",{get:function(){return this._first?this._first.value:void 0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"last",{get:function(){return this._last?this._last.value:void 0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"firstNode",{get:function(){return this._first},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"lastNode",{get:function(){return this._last},enumerable:!0,configurable:!0}),t.prototype.iter=function(){return new t.ForwardValueIterator(this._first)},t.prototype.retro=function(){return new t.RetroValueIterator(this._last)},t.prototype.nodes=function(){return new t.ForwardNodeIterator(this._first)},t.prototype.retroNodes=function(){return new t.RetroNodeIterator(this._last)},t.prototype.assign=function(t){var e=this;this.clear(),(0,i.each)(t,(function(t){e.addLast(t)}))},t.prototype.push=function(t){this.addLast(t)},t.prototype.pop=function(){return this.removeLast()},t.prototype.shift=function(t){this.addFirst(t)},t.prototype.unshift=function(){return this.removeFirst()},t.prototype.addFirst=function(t){var e=new a.LinkedListNode(this,t);return this._first?(e.next=this._first,this._first.prev=e,this._first=e):(this._first=e,this._last=e),this._size++,e},t.prototype.addLast=function(t){var e=new a.LinkedListNode(this,t);return this._last?(e.prev=this._last,this._last.next=e,this._last=e):(this._first=e,this._last=e),this._size++,e},t.prototype.insertBefore=function(t,e){if(!e||e===this._first)return this.addFirst(t);if(!(e instanceof a.LinkedListNode)||e.list!==this)throw new Error("Reference node is not owned by the list.");var r=new a.LinkedListNode(this,t),n=e,i=n.prev;return r.next=n,r.prev=i,n.prev=r,i.next=r,this._size++,r},t.prototype.insertAfter=function(t,e){if(!e||e===this._last)return this.addLast(t);if(!(e instanceof a.LinkedListNode)||e.list!==this)throw new Error("Reference node is not owned by the list.");var r=new a.LinkedListNode(this,t),n=e,i=n.next;return r.next=i,r.prev=n,n.next=r,i.prev=r,this._size++,r},t.prototype.removeFirst=function(){var t=this._first;if(t)return t===this._last?(this._first=null,this._last=null):(this._first=t.next,this._first.prev=null),t.list=null,t.next=null,t.prev=null,this._size--,t.value},t.prototype.removeLast=function(){var t=this._last;if(t)return t===this._first?(this._first=null,this._last=null):(this._last=t.prev,this._last.next=null),t.list=null,t.next=null,t.prev=null,this._size--,t.value},t.prototype.removeNode=function(t){if(!(t instanceof a.LinkedListNode)||t.list!==this)throw new Error("Node is not owned by the list.");var e=t;e===this._first&&e===this._last?(this._first=null,this._last=null):e===this._first?(this._first=e.next,this._first.prev=null):e===this._last?(this._last=e.prev,this._last.next=null):(e.next.prev=e.prev,e.prev.next=e.next),e.list=null,e.next=null,e.prev=null,this._size--},t.prototype.clear=function(){for(var t=this._first;t;){var e=t.next;t.list=null,t.prev=null,t.next=null,t=e}this._first=null,this._last=null,this._size=0},t}();!function(t){t.from=function(e){var r=new t;return r.assign(e),r};var e=function(){function t(t){this._node=t}return t.prototype.iter=function(){return this},t.prototype.clone=function(){return new t(this._node)},t.prototype.next=function(){if(this._node){var t=this._node;return this._node=t.next,t.value}},t}();t.ForwardValueIterator=e;var r=function(){function t(t){this._node=t}return t.prototype.iter=function(){return this},t.prototype.clone=function(){return new t(this._node)},t.prototype.next=function(){if(this._node){var t=this._node;return this._node=t.prev,t.value}},t}();t.RetroValueIterator=r;var n=function(){function t(t){this._node=t}return t.prototype.iter=function(){return this},t.prototype.clone=function(){return new t(this._node)},t.prototype.next=function(){if(this._node){var t=this._node;return this._node=t.next,t}},t}();t.ForwardNodeIterator=n;var i=function(){function t(t){this._node=t}return t.prototype.iter=function(){return this},t.prototype.clone=function(){return new t(this._node)},t.prototype.next=function(){if(this._node){var t=this._node;return this._node=t.prev,t}},t}();t.RetroNodeIterator=i}(s||(s={})),function(t){t.LinkedListNode=function(t,e){this.list=null,this.next=null,this.prev=null,this.list=t,this.value=e}}(a||(a={}));var u=r(129),c=r(211),p=r(168),h=["$","@"];function d(t){var e=[];for(var r in t.fields)-1!==h.indexOf(r[0])&&e.push("Invalid field name: '"+r+"'. Cannot start field name with '"+r[0]+"'");return e}var l=function(t,e){return(l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};function f(t,e){function r(){this.constructor=t}l(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}var v=function(){return(v=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};function m(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;var n=Array(t),i=0;for(e=0;e<r;e++)for(var o=arguments[e],a=0,s=o.length;a<s;a++,i++)n[i]=o[a];return n}var y,g,_=function(){function t(t,e,r){this._records=new o(y.recordCmp),this.schema=t,this._context=e,r&&this._records.assign(r)}return t.create=function(e,r){return new t(e,r)},t.recreate=function(e,r,n){return new t(e,r,n)},t.patch=function(t,e){var r={},n=t.schema,i=t._records,o=y.recordIdCmp;for(var a in e){var s=i.get(a,o)||y.createRecord(n,a),u=y.applyPatch(n,s,e[a]),c=u.record,p=u.change;i.insert(c),r[a]=p}return r},t.unpatch=function(t,e){var r={},n=t.schema,i=t._records,o=y.recordIdCmp;for(var a in e){var s=i.get(a,o)||y.createRecord(n,a),u=y.unapplyPatch(n,s,e[a]),c=u.record,p=u.change;i.insert(c),r[a]=p}return r},Object.defineProperty(t.prototype,"isEmpty",{get:function(){return this._records.isEmpty},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"size",{get:function(){return this._records.size},enumerable:!0,configurable:!0}),t.prototype.iter=function(){return this._records.iter()},t.prototype.has=function(t){return this._records.has(t,y.recordIdCmp)},t.prototype.get=function(t){return this._records.get(t,y.recordIdCmp)},t.prototype.update=function(t){var e=this._context;if(!e.inTransaction)throw new Error("A table can only be updated during a transaction.");var r=this.schema,n=this._records,i=y.recordIdCmp;for(var o in t){var a=n.get(o,i)||y.createRecord(r,o),s=y.applyUpdate(r,a,t[o],e);n.insert(s)}},t}();function x(t,e){var r=65535&t,n=65535&((t-r)/65536|0),i=65535&((t-n-r)/4294967296|0),o=65535&e,a=65535&((e-o)/65536|0);return String.fromCharCode(i,n,r,a,o)}function b(t,e,r,n){for(var i=0xffffffffffff,o="",a=r?g.idTripletCount(r):0,s=n?g.idTripletCount(n):0,u=0,c=Math.max(a,s);u<c;++u){var p=void 0,h=void 0,d=void 0;u>=a?(p=0,h=0,d=0):(p=g.idPathAt(r,u),h=g.idVersionAt(r,u),d=g.idStoreAt(r,u));var l=void 0,f=void 0,v=void 0;if(u>=s?(l=0===s?i+1:0,f=0,v=0):(l=g.idPathAt(n,u),f=g.idVersionAt(n,u),v=g.idStoreAt(n,u)),p!==l||h!==f||d!==v){if(l-p>1){var m=g.randomPath(p+1,l-1);return(o+=g.createTriplet(m,t,e)).slice()}o+=g.createTriplet(p,h,d),s=0}else o+=g.createTriplet(p,h,d)}var y=g.randomPath(1,i);return(o+=g.createTriplet(y,t,e)).slice()}function w(t,e,r,n,i){for(var o=[];o.length<t;){var a=b(e,r,n,i);o.push(a),n=a}return o}!function(t){t.recordCmp=function(t,e){return i.StringExt.cmp(t.$id,e.$id)},t.recordIdCmp=function(t,e){return i.StringExt.cmp(t.$id,e)},t.createRecord=function(t,e){var r={},n={};for(var i in r.$id=e,r["@@metadata"]=n,t.fields){var o=t.fields[i];r[i]=o.createValue(),n[i]=o.createMetadata()}return r},t.applyUpdate=function(t,e,r,n){var i=n.version,o=n.storeId,a=n.change[t.id]||(n.change[t.id]={}),s=n.patch[t.id]||(n.patch[t.id]={}),u=a[e.$id]||(a[e.$id]={}),c=s[e.$id]||(s[e.$id]={}),p=e,h=e["@@metadata"],d=v({},e);for(var l in r){var f=t.fields[l],m=f.applyUpdate({previous:p[l],update:r[l],metadata:h[l],version:i,storeId:o}),y=m.value,g=m.change,_=m.patch;d[l]=y,l in u&&(g=f.mergeChange(u[l],g)),l in c&&(_=f.mergePatch(c[l],_)),u[l]=g,c[l]=_}return d},t.applyPatch=function(t,e,r){var n={},i=e,o=e["@@metadata"],a=v({},e);for(var s in r){var u=t.fields[s].applyPatch({previous:i[s],patch:r[s],metadata:o[s]}),c=u.value,p=u.change;a[s]=c,n[s]=p}return{record:a,change:n}},t.unapplyPatch=function(t,e,r){var n={},i=e,o=e["@@metadata"],a=v({},e);for(var s in r){var u=t.fields[s].unapplyPatch({previous:i[s],patch:r[s],metadata:o[s]}),c=u.value,p=u.change;a[s]=c,n[s]=p}return{record:a,change:n}}}(y||(y={})),function(t){t.createTriplet=function(t,e,r){var n=65535&t,i=65535&((t-n)/65536|0),o=65535&((t-i-n)/4294967296|0),a=65535&e,s=65535&((e-a)/65536|0),u=65535&((e-s-a)/4294967296|0),c=65535&r,p=65535&((r-c)/65536|0);return String.fromCharCode(o,i,n,u,s,a,p,c)},t.idTripletCount=function(t){return t.length>>3},t.idPathAt=function(t,e){var r=e<<3;return 4294967296*t.charCodeAt(r+0)+65536*t.charCodeAt(r+1)+t.charCodeAt(r+2)},t.idVersionAt=function(t,e){var r=e<<3;return 4294967296*t.charCodeAt(r+3)+65536*t.charCodeAt(r+4)+t.charCodeAt(r+5)},t.idStoreAt=function(t,e){var r=e<<3;return 65536*t.charCodeAt(r+6)+t.charCodeAt(r+7)},t.randomPath=function(t,e){return t+Math.round(Math.random()*Math.sqrt(e-t))}}(g||(g={}));var I,A=function(){function t(t,e,r,n){this._cemetery={},this._disposed=!1,this._changed=new p.Signal(this),this._transactionQueue=new s,this._context=t,this._tables=e,this._adapter=r||null,this._transactionIdFactory=n||x,this._adapter&&(this._adapter.onRemoteTransaction=this._onRemoteTransaction.bind(this),this._adapter.onUndo=this._onUndo.bind(this),this._adapter.onRedo=this._onRedo.bind(this))}return t.create=function(e){var r=e.schemas;I.validateSchemas(r);var n={inTransaction:!1,transactionId:"",version:0,storeId:e.id,change:{},patch:{}},a=new o(I.recordCmp);if(e.restoreState){var s=JSON.parse(e.restoreState);a.assign((0,i.map)(r,(function(t){return _.recreate(t,n,s[t.id]||[])})))}else a.assign((0,i.map)(r,(function(t){return _.create(t,n)})));return new t(n,a,e.adapter)},t.prototype.dispose=function(){this._disposed||(this._disposed=!0,p.Signal.clearData(this),this._adapter=null)},Object.defineProperty(t.prototype,"isDisposed",{get:function(){return this._disposed},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"changed",{get:function(){return this._changed},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"id",{get:function(){return this._context.storeId},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"inTransaction",{get:function(){return this._context.inTransaction},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"version",{get:function(){return this._context.version},enumerable:!0,configurable:!0}),t.prototype.iter=function(){return this._tables.iter()},t.prototype.get=function(t){var e=this._tables.get(t.id,I.recordIdCmp);if(void 0===e)throw new Error("No table found for schema with id: "+t.id);return e},t.prototype.beginTransaction=function(){var t=this._context.version+1,e=this._transactionIdFactory(t,this.id);return this._initTransaction(e,t),c.MessageLoop.postMessage(this,new c.ConflatableMessage("transaction-begun")),e},t.prototype.endTransaction=function(){this._finalizeTransaction();var t=this._context,e=t.patch,r=t.change,n=t.storeId,i=t.transactionId,o=t.version;this._adapter&&!I.isPatchEmpty(e)&&this._adapter.broadcast({id:i,storeId:n,patch:e,version:o}),this._cemetery[i]=1,I.isChangeEmpty(this._context.change)||this._changed.emit({storeId:n,transactionId:i,type:"transaction",change:r})},t.prototype.processMessage=function(t){switch(t.type){case"transaction-begun":this._context.inTransaction&&(console.warn("Automatically ending transaction (did you forget to end it?): "+this._context.transactionId),this.endTransaction());break;case"queued-transaction":this._processQueue()}},t.prototype.undo=function(t){if(!this._adapter)throw Error("No server adapter has been set for the datastore");if(this.inTransaction)throw Error("Cannot undo during a transaction");return this._adapter.undo(t)},t.prototype.redo=function(t){if(!this._adapter)throw Error("No server adapter has been set for the datastore");if(this.inTransaction)throw Error("Cannot redo during a transaction");return this._adapter.redo(t)},Object.defineProperty(t.prototype,"adapter",{get:function(){return this._adapter},enumerable:!0,configurable:!0}),t.prototype.toString=function(){return JSON.stringify((0,i.toObject)((0,i.map)(this,(function(t){return[t.schema.id,(0,i.toArray)(t)]}))))},t.prototype._onRemoteTransaction=function(t){this._processTransaction(t,"transaction")},t.prototype._onUndo=function(t){this._processTransaction(t,"undo")},t.prototype._onRedo=function(t){this._processTransaction(t,"redo")},t.prototype._processTransaction=function(t,e){var r=this,n=t.storeId,o=t.patch;try{this._initTransaction(t.id,Math.max(this._context.version,t.version))}catch(r){return void this._queueTransaction(t,e)}var a={};try{(0,i.each)((0,i.iterItems)(o),(function(n){var i=n[0],o=n[1],s=r._tables.get(i,I.recordIdCmp);if(void 0===s)return console.warn("Missing table for schema id '"+i+"' in transaction '"+t.id+"'"),void r._finalizeTransaction();if("transaction"===e||"redo"===e){if(void 0===(u=r._cemetery[t.id]))return r._cemetery[t.id]=1,void(a[i]=_.patch(s,o));if(r._cemetery[t.id]=u+1,1===r._cemetery[t.id])return void(a[i]=_.patch(s,o))}else{var u;if(void 0===(u=r._cemetery[t.id]))return void(r._cemetery[t.id]=-1);r._cemetery[t.id]=u-1,0===r._cemetery[t.id]&&(a[i]=_.unpatch(s,o))}}))}finally{this._finalizeTransaction()}I.isChangeEmpty(a)||this._changed.emit({storeId:n,transactionId:t.id,type:e,change:a})},t.prototype._queueTransaction=function(t,e){this._transactionQueue.addLast([t,e]),c.MessageLoop.postMessage(this,new c.ConflatableMessage("queued-transaction"))},t.prototype._processQueue=function(){var t=this._transactionQueue;if(!t.isEmpty){var e={};for(t.addLast(e);;){var r=t.removeFirst(),n=r[0],i=r[1];if(n===e)return;this._processTransaction(n,i)}}},t.prototype._initTransaction=function(t,e){var r=this._context;if(r.inTransaction)throw new Error("Already in a transaction: "+this._context.transactionId);r.inTransaction=!0,r.change={},r.patch={},r.transactionId=t,r.version=e},t.prototype._finalizeTransaction=function(){var t=this._context;if(!t.inTransaction)throw new Error("No transaction in progress.");t.inTransaction=!1},t}();!function(t){t.withTransaction=function(t,e){var r="";t.inTransaction||(r=t.beginTransaction());try{e(r)}finally{r&&t.endTransaction()}return r},t.getTable=function(t,e){return t.get(e.schema)},t.getRecord=function(t,e){return t.get(e.schema).get(e.record)},t.getField=function(t,e){var r=t.get(e.schema).get(e.record);if(!r)throw Error("The record "+e.record+" could not be found");return r[e.field]},t.updateTable=function(t,e,r){t.get(e.schema).update(r)},t.updateRecord=function(t,e,r){var n;t.get(e.schema).update(((n={})[e.record]=r,n))},t.updateField=function(t,e,r){var n,i;t.get(e.schema).update(((n={})[e.record]=((i={})[e.field]=r,i),n))},t.listenTable=function(t,e,r,n){var i=function(t,i){if(i.change[e.schema.id]){var o=i.change[e.schema.id];r.bind(n)(t,o)}};return t.changed.connect(i),new u.DisposableDelegate((function(){t.changed.disconnect(i)}))},t.listenRecord=function(t,e,r,n){var i=function(t,i){if(i.change[e.schema.id]&&i.change[e.schema.id][e.record]){var o=i.change[e.schema.id];r.bind(n)(t,o[e.record])}};return t.changed.connect(i),new u.DisposableDelegate((function(){t.changed.disconnect(i)}))},t.listenField=function(t,e,r,n){var i=function(t,i){if(i.change[e.schema.id]&&i.change[e.schema.id][e.record]&&i.change[e.schema.id][e.record][e.field]){var o=i.change[e.schema.id];r.bind(n)(t,o[e.record][e.field])}};return t.changed.connect(i),new u.DisposableDelegate((function(){t.changed.disconnect(i)}))}}(A||(A={})),function(t){t.validateSchemas=function(t){for(var e=[],r=0,n=t;r<n.length;r++){var i=n[r],o=d(i);o.length&&e.push("Schema '"+i.id+"' validation failed: \n"+o.join("\n"))}if(e.length)throw new Error(e.join("\n\n"))},t.recordCmp=function(t,e){return i.StringExt.cmp(t.schema.id,e.schema.id)},t.recordIdCmp=function(t,e){return i.StringExt.cmp(t.schema.id,e)},t.isPatchEmpty=function(t){return 0===Object.keys(t).length},t.isChangeEmpty=function(t){return 0===Object.keys(t).length}}(I||(I={}));var z,E=function(t){void 0===t&&(t={});var e=v({description:""},t);this.description=e.description},P=function(t){function e(e){return void 0===e&&(e={}),t.call(this,e)||this}return f(e,t),Object.defineProperty(e.prototype,"type",{get:function(){return"list"},enumerable:!0,configurable:!0}),e.prototype.createValue=function(){return[]},e.prototype.createMetadata=function(){return{ids:[],cemetery:{}}},e.prototype.applyUpdate=function(t){var e=t.previous,r=t.update,n=t.metadata,i=t.version,o=t.storeId,a=m(e),s=[],u=[];z.isSplice(r)&&(r=[r]);for(var c=0,p=r;c<p.length;c++){var h=p[c],d=z.applySplice(a,h,n,i,o);s.push(d.change),u.push(d.patch)}return{value:a,change:s,patch:u}},e.prototype.applyPatch=function(t){for(var e=t.previous,r=t.patch,n=t.metadata,i=m(e),o=[],a=0,s=r;a<s.length;a++){var u=s[a],c=z.applyPatch(i,u,n);o.push.apply(o,c)}return{value:i,change:o}},e.prototype.unapplyPatch=function(t){for(var e=t.previous,r=t.patch,n=t.metadata,i=m(e),o=[],a=0,s=r;a<s.length;a++){var u=s[a],c={removedIds:u.insertedIds,insertedIds:u.removedIds,removedValues:u.insertedValues,insertedValues:u.removedValues},p=z.applyPatch(i,c,n);o.push.apply(o,p)}return{value:i,change:o}},e.prototype.mergeChange=function(t,e){return m(t,e)},e.prototype.mergePatch=function(t,e){return m(t,e)},e}(E);!function(t){function e(t,e){var r=e[t]||0;return 1===r?(delete e[t],!0):r>1&&(e[t]=r-1,!0)}function r(t,e,r,n){if(!n)return t.splice(e,r);var i=1e5;if(n.length<i)return t.splice.apply(t,m([e,r||0],n));for(var o=t.splice(e,r),a=Math.floor(n.length/i),s=0,u=0;u<a;u++,s+=i)t.splice.apply(t,m([e+s,0],n.slice(s,s+i)));return t.splice.apply(t,m([e+s,0],n.slice(s))),o}t.isSplice=function(t){return!Array.isArray(t)},t.applySplice=function(t,e,n,i,o){var a=e.index,s=e.remove,u=e.values;a=a<0?Math.max(0,a+t.length):Math.min(a,t.length);var c=Math.min(s,t.length-a),p=0===a?"":n.ids[a-1],h=a===t.length?"":n.ids[a],d=w(u.length,i,o,p,h),l=r(n.ids,a,c,d),f=r(t,a,c,u);return{change:{index:a,removed:f,inserted:u},patch:{removedIds:l,removedValues:f,insertedIds:d,insertedValues:u}}},t.applyPatch=function(t,n,o){var a=n.removedIds,s=n.insertedIds,u=n.insertedValues,c=[];if(a.length>0)for(var p=function(t,e){for(var r=[],n=0,o=t.length;n<o;){var a=i.ArrayExt.lowerBound(e.ids,t[n],i.StringExt.cmp);if(a!==e.ids.length&&e.ids[a]===t[n]){for(var s=a,u=0;n<o&&0===i.StringExt.cmp(t[n],e.ids[a]);)u++,n++,a++;u>0?r.push({index:s,count:u}):n++}else{var c=e.cemetery[t[n]]||0;e.cemetery[t[n]]=c+1,n++}}return r}(a,o);p.length>0;){var h=p.pop(),d=h.index,l=h.count;o.ids.splice(d,l);var f=t.splice(d,l);c.push({index:d,removed:f,inserted:[]})}if(s.length>0)for(p=function(t,r,n){for(var o=[],a=[],s=[],u=0;u<t.length;u++)e(t[u],n.cemetery)||(a.push(t[u]),o.push(i.ArrayExt.lowerBound(n.ids,t[u],i.StringExt.cmp)),s.push(r[u]));return function(t,e,r){for(var n,i=[],o=0;o<t.length;){var a=[],s=[];for(n=r[o];r[o]===n&&o<t.length;)a.push(t[o]),s.push(e[o]),o++;s.length&&i.push({index:n,ids:a,values:s})}return i}(a,s,o)}(s,u,o);p.length>0;){var v=p.pop(),m=(d=v.index,v.ids),y=v.values;r(o.ids,d,0,m),r(t,d,0,y),c.push({index:d,removed:[],inserted:y})}return c}}(z||(z={}));var T,M=function(t){function e(e){return void 0===e&&(e={}),t.call(this,e)||this}return f(e,t),Object.defineProperty(e.prototype,"type",{get:function(){return"map"},enumerable:!0,configurable:!0}),e.prototype.createValue=function(){return{}},e.prototype.createMetadata=function(){return{ids:{},values:{}}},e.prototype.applyUpdate=function(t){var e=t.previous,r=t.update,n=t.metadata,i=x(t.version,t.storeId),o=v({},e),a={},s={};for(var u in r){var c=T.insertIntoMetadata(n,u,i,r[u]);null===c?delete o[u]:o[u]=c,a[u]=u in e?e[u]:null,s[u]=c}return{value:o,change:{previous:a,current:s},patch:{id:i,values:r}}},e.prototype.applyPatch=function(t){var e=t.previous,r=t.patch,n=t.metadata,i=r.id,o=r.values,a=v({},e),s={},u={};for(var c in o){var p=T.insertIntoMetadata(n,c,i,o[c]);null===p?delete a[c]:a[c]=p,s[c]=c in e?e[c]:null,u[c]=p}return{value:a,change:{previous:s,current:u}}},e.prototype.unapplyPatch=function(t){var e=t.previous,r=t.patch,n=t.metadata,i=r.id,o=r.values,a=v({},e),s={},u={};for(var c in o){var p=T.removeFromMetadata(n,c,i);null===p?delete a[c]:a[c]=p,s[c]=c in e?e[c]:null,u[c]=p}return{value:a,change:{previous:s,current:u}}},e.prototype.mergeChange=function(t,e){return{previous:v(v({},e.previous),t.previous),current:v(v({},t.current),e.current)}},e.prototype.mergePatch=function(t,e){return{id:e.id,values:v(v({},t.values),e.values)}},e}(E);!function(t){t.insertIntoMetadata=function(t,e,r,n){var o=t.ids[e]||(t.ids[e]=[]),a=t.values[e]||(t.values[e]=[]),s=i.ArrayExt.lowerBound(o,r,i.StringExt.cmp);return s<o.length&&o[s]===r?a[s]=n:(i.ArrayExt.insert(o,s,r),i.ArrayExt.insert(a,s,n)),a[a.length-1]},t.removeFromMetadata=function(t,e,r){var n=t.ids[e]||(t.ids[e]=[]),o=t.values[e]||(t.values[e]=[]),a=i.ArrayExt.lowerBound(n,r,i.StringExt.cmp);return n[a]===r&&(i.ArrayExt.removeAt(n,a),i.ArrayExt.removeAt(o,a)),o.length?o[o.length-1]:null}}(T||(T={}));var O,S=function(t){function e(e){var r=t.call(this,e)||this;return r.value=e.value,r}return f(e,t),Object.defineProperty(e.prototype,"type",{get:function(){return"register"},enumerable:!0,configurable:!0}),e.prototype.createValue=function(){return this.value},e.prototype.createMetadata=function(){return{ids:[],values:[]}},e.prototype.applyUpdate=function(t){var e=t.previous,r=t.update,n=t.metadata,i=x(t.version,t.storeId),o=O.insertIntoMetadata(n,i,r);return{value:o,change:{previous:e,current:o},patch:{id:i,value:r}}},e.prototype.applyPatch=function(t){var e=t.previous,r=t.patch,n=t.metadata,i=O.insertIntoMetadata(n,r.id,r.value);return{value:i,change:{previous:e,current:i}}},e.prototype.unapplyPatch=function(t){var e=t.previous,r=t.patch,n=t.metadata,i=O.removeFromMetadata(n,r.id,this.value);return{value:i,change:{previous:e,current:i}}},e.prototype.mergeChange=function(t,e){return{previous:t.previous,current:e.current}},e.prototype.mergePatch=function(t,e){return e},e}(E);!function(t){t.insertIntoMetadata=function(t,e,r){var n=t.ids,o=t.values,a=i.ArrayExt.lowerBound(n,e,i.StringExt.cmp);return a<n.length&&n[a]===e?o[a]=r:(i.ArrayExt.insert(n,a,e),i.ArrayExt.insert(o,a,r)),o[o.length-1]},t.removeFromMetadata=function(t,e,r){var n=t.ids,o=t.values,a=i.ArrayExt.lowerBound(n,e,i.StringExt.cmp);return n[a]===e&&(i.ArrayExt.removeAt(n,a),i.ArrayExt.removeAt(o,a)),o.length?o[o.length-1]:r}}(O||(O={}));var C,j,L=function(t){function e(e){return void 0===e&&(e={}),t.call(this,e)||this}return f(e,t),Object.defineProperty(e.prototype,"type",{get:function(){return"text"},enumerable:!0,configurable:!0}),e.prototype.createValue=function(){return""},e.prototype.createMetadata=function(){return{ids:[],cemetery:{}}},e.prototype.applyUpdate=function(t){var e=t.previous,r=t.update,n=t.metadata,i=t.version,o=t.storeId,a=e,s=[],u=[];C.isSplice(r)&&(r=[r]);for(var c=0,p=r;c<p.length;c++){var h=p[c],d=C.applySplice(a,h,n,i,o);s.push(d.change),u.push(d.patch),a=d.value}return{value:a,change:s,patch:u}},e.prototype.applyPatch=function(t){for(var e=t.previous,r=t.patch,n=t.metadata,i=e,o=[],a=0,s=r;a<s.length;a++){var u=s[a],c=C.applyPatch(i,u,n);o.push.apply(o,c.change),i=c.value}return{value:i,change:o}},e.prototype.unapplyPatch=function(t){for(var e=t.previous,r=t.patch,n=t.metadata,i=e,o=[],a=0,s=r;a<s.length;a++){var u=s[a],c={removedIds:u.insertedIds,insertedIds:u.removedIds,removedText:u.insertedText,insertedText:u.removedText},p=C.applyPatch(i,c,n);o.push.apply(o,p.change),i=p.value}return{value:i,change:o}},e.prototype.mergeChange=function(t,e){return m(t,e)},e.prototype.mergePatch=function(t,e){return m(t,e)},e}(E);!function(t){function e(t,e){var r=e[t]||0;return 1===r?(delete e[t],!0):r>1&&(e[t]=r-1,!0)}function r(t,e,r,n){if(!n)return t.splice(e,r);var i=1e5;if(n.length<i)return t.splice.apply(t,m([e,r||0],n));for(var o=t.splice(e,r),a=Math.floor(n.length/i),s=0,u=0;u<a;u++,s+=i)t.splice.apply(t,m([s,0],n.slice(s,i)));return t.splice.apply(t,m([s,0],n.slice(s))),o}t.isSplice=function(t){return!Array.isArray(t)},t.applySplice=function(t,e,n,i,o){var a=e.index,s=e.remove,u=e.text;a=a<0?Math.max(0,a+t.length):Math.min(a,t.length);var c=Math.min(s,t.length-a),p=0===a?"":n.ids[a-1],h=a===t.length?"":n.ids[a],d=w(u.length,i,o,p,h),l=r(n.ids,a,c,d),f=t.slice(a,a+c);return{change:{index:a,removed:f,inserted:u},patch:{removedIds:l,removedText:f,insertedIds:d,insertedText:u},value:t=t.slice(0,a)+u+t.slice(a+c)}},t.applyPatch=function(t,n,o){var a=n.removedIds,s=n.insertedIds,u=n.insertedText,c=[];if(a.length>0)for(var p=function(t,e){for(var r=[],n=0,o=t.length;n<o;){var a=i.ArrayExt.lowerBound(e.ids,t[n],i.StringExt.cmp);if(a!==e.ids.length&&e.ids[a]===t[n]){for(var s=a,u=0;n<o&&0===i.StringExt.cmp(t[n],e.ids[a]);)u++,n++,a++;u>0?r.push({index:s,count:u}):n++}else{var c=e.cemetery[t[n]]||0;e.cemetery[t[n]]=c+1,n++}}return r}(a,o);p.length>0;){var h=p.pop(),d=h.index,l=h.count;o.ids.splice(d,l);var f=t.slice(d,d+l);t=t.slice(0,d)+t.slice(d+l),c.push({index:d,removed:f,inserted:""})}if(s.length>0)for(p=function(t,r,n){for(var o=[],a=[],s="",u=0;u<t.length;u++)e(t[u],n.cemetery)||(a.push(t[u]),o.push(i.ArrayExt.lowerBound(n.ids,t[u],i.StringExt.cmp)),s+=r[u]);return function(t,e,r){for(var n,i=[],o=0;o<t.length;){var a=[],s="";for(n=r[o];r[o]===n&&o<t.length;)a.push(t[o]),s+=e[o],o++;s&&i.push({index:n,ids:a,text:s})}return i}(a,s,o)}(s,u,o);p.length>0;){var v=p.pop(),m=(d=v.index,v.ids),y=v.text;r(o.ids,d,0,m),t=t.slice(0,d)+y+t.slice(d),c.push({index:d,removed:"",inserted:y})}return{change:c,value:t}}}(C||(C={})),function(t){t.Boolean=function(t){return void 0===t&&(t={}),new S(v({value:!1},t))},t.Number=function(t){return void 0===t&&(t={}),new S(v({value:0},t))},t.String=function(t){return void 0===t&&(t={}),new S(v({value:""},t))},t.List=function(t){return void 0===t&&(t={}),new P(t)},t.Map=function(t){return void 0===t&&(t={}),new M(t)},t.Register=function(t){return new S(t)},t.Text=function(t){return void 0===t&&(t={}),new L(t)}}(j||(j={}))}}]);