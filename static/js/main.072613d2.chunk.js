(this.webpackJsonpmonitoraweb=this.webpackJsonpmonitoraweb||[]).push([[0],{168:function(n,t){},169:function(n,t){},176:function(n,t,o){"use strict";o.r(t);var e=o(3),c=o.n(e),i=o(70),a=o.n(i),r=(o(78),o(5)),u=o(4),s=o(7),l=o(6),h=o(8),m=(o(79),o(72));o(82).config();var f,p=o(85),b=function(n){function t(){var n,o;Object(r.a)(this,t);for(var e=arguments.length,c=new Array(e),i=0;i<e;i++)c[i]=arguments[i];return(o=Object(s.a)(this,(n=Object(l.a)(t)).call.apply(n,[this].concat(c)))).conection=function(){(f=p.connect("wss://test.mosquitto.org:8081","monitora","clientic_"+Math.random())).on("connect",(function(){console.log("conectado")}))},o.acionar=function(){f.connected&&f.publish("monitora/lamp")},o}return Object(h.a)(t,n),Object(u.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return c.a.createElement(m.a,{mapboxApiAccessToken:"pk.eyJ1IjoiaWNhcm9saXYiLCJhIjoiY2syYWRuM3B0MTl5eDNibnAycGhzM3NxYyJ9.N2w8hIe7aB9hR7V9rBQWCg",height:1e3,width:1e3,altitude:15.8},c.a.createElement("button",{onClick:this.acionar},"Acionar"),c.a.createElement("button",{onClick:this.conection}," Conectar"))}}]),t}(e.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(c.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))},73:function(n,t,o){n.exports=o(176)},78:function(n,t,o){},79:function(n,t,o){},88:function(n,t){},90:function(n,t){}},[[73,1,2]]]);
//# sourceMappingURL=main.072613d2.chunk.js.map