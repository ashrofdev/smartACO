(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(22)},,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){e.exports=n.p+"static/media/smartaco.666f1c8c.gif"},function(e,t,n){e.exports=n.p+"static/media/g.0c194e03.gif"},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(3),r=n.n(o),s=(n(16),n(1)),i=n.n(s),l=n(4),m=n(5),u=n(6),d=n(8),h=n(7),p=n(9),f=(n(18),n(19),function(e){var t=e.msg;return c.a.createElement("div",{className:"cont"},c.a.createElement("div",null,c.a.createElement("header",null,c.a.createElement("h1",null,"SMARTACO"),c.a.createElement("img",{className:"smart",src:n(20)})),c.a.createElement("div",{className:"request"},c.a.createElement("input",{placeholder:"Chat with SmartAco..."}),c.a.createElement("div",{className:"smarta"},t))),c.a.createElement("img",{className:"img",src:n(21),alt:""}))}),g=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).onChat=Object(l.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:document.querySelector(".img").classList.add("show"),t=document.querySelector("input").value,fetch("https://cors-anywhere.herokuapp.com/http://api.brainshop.ai/get?bid=8601&key=dtvRbKjZKR8GGZ4C&uid=67063&msg=".concat(t)).then(function(e){return e.json()}).then(function(e){document.querySelector(".img").classList.remove("show"),n.setState({msg:e.cnt}),console.log(e)}).catch(function(e){document.querySelector("img").classList.remove("show"),n.setState({msg:"Bad Internet"}),console.log(e)});case 3:case"end":return e.stop()}},e)})),n.state={msg:[]},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("keypress",function(t){"Enter"===t.key&&e.onChat()})}},{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"container"},c.a.createElement(f,{onChat:this.onChat,msg:this.state.msg})),c.a.createElement("footer",null,"\xa9 By Ashraf, powered by Acobot Team"))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.794bbff9.chunk.js.map