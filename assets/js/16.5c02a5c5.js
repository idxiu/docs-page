(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{457:function(t,n,e){"use strict";var r=e(3),i=e(112).PROPER,o=e(34),a=e(14),u=e(56),s=e(20),c=e(6),l=e(264),f=RegExp.prototype,v=f.toString,p=r(l),h=c((function(){return"/a/b"!=v.call({source:"a",flags:"b"})})),g=i&&"toString"!=v.name;(h||g)&&o(RegExp.prototype,"toString",(function(){var t=a(this),n=s(t.source),e=t.flags;return"/"+n+"/"+s(void 0===e&&u(f,t)&&!("flags"in f)?p(t):e)}),{unsafe:!0})},491:function(t,n,e){},728:function(t,n,e){var r=e(3),i=e(34),o=Date.prototype,a=r(o.toString),u=r(o.getTime);"Invalid Date"!=String(new Date(NaN))&&i(o,"toString",(function(){var t=u(this);return t==t?a(this):"Invalid Date"}))},729:function(t,n,e){"use strict";e(491)},744:function(t,n,e){"use strict";e.r(n);e(42),e(728),e(8),e(457),e(166);var r={data:function(){return{counter:0,interval:null}},methods:{clearInterval:function(t){function n(){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}((function(){clearInterval(this.interval)}))},mounted:function(){var t=this;this.interval=setInterval((function(){t.counter++}),1e3)}},i=(e(729),e(33)),o=Object(i.a)(r,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"demo"},[n("p",[this._v("Counter: "+this._s(this.counter))]),this._v(" "),n("button",{on:{click:this.clearInterval}},[this._v("Stop timer")])])}),[],!1,null,"276250da",null);n.default=o.exports}}]);