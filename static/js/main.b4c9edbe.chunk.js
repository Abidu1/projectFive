(this["webpackJsonpmakeup-app"]=this["webpackJsonpmakeup-app"]||[]).push([[0],{17:function(e,t,n){e.exports=n(41)},22:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(15),c=n.n(o),u=(n(22),n(2)),l=n(3),i=n(5),s=n(4),p=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("h1",null,"Welcome to Makepin!"),r.a.createElement("p",null,"This website is designed to help you find makeup products!"))}}]),n}(a.Component),m=n(16),d=n.n(m),h=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).userpicks=function(t){e.setState({userSelection:t.target.value})},e.state={userSelection:""},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("form",null,r.a.createElement("div",{class:"dropDownform"},r.a.createElement("label",{htmlFor:"makeupProduct"}),r.a.createElement("select",{onChange:this.userpicks,name:"makeupProduct",id:"makeupProduct"},r.a.createElement("option",{value:"lipstick"},"Lipsticks"),r.a.createElement("option",{value:"eyeshadow"},"Eye Shadow"),r.a.createElement("option",{value:"blush"},"Blush")),r.a.createElement("button",{onClick:function(t){return e.props.getProduct(t,e.state.userSelection)}}," Submit")))}}]),n}(a.Component),f=function(e){return r.a.createElement("main",null,e.items.map((function(e){return r.a.createElement("div",null,r.a.createElement("h3",{key:e._id},e.name))})))},v=(n(40),function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).getProduct=function(t,n){t.preventDefault(),console.log(n),d()({url:"https://makeup-api.herokuapp.com/api/v1/products.json?product_type=".concat(n," "),method:"GET",responseType:"json"}).then((function(t){console.log(t),e.setState({currentProducts:t.data})}))},e.getUserInput=function(e){e.preventDefault()},e.state={currentProducts:[]},e}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,null),r.a.createElement(h,{getProduct:this.getProduct}),r.a.createElement(f,{items:this.state.currentProducts}))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.b4c9edbe.chunk.js.map