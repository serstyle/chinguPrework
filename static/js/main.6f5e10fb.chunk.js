(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{231:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(15),o=n.n(l),c=(n(96),n(23)),i=n(24),s=n(27),u=n(25),m=n(28),h=n(84),p=n.n(h),f=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={input:""},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("form",{onSubmit:function(t){return e.props.onSearchChange(t,e.state.input)}},r.a.createElement(p.a,{label:"Search",onChange:function(t){return e.setState({input:t.target.value})}})))}}]),t}(a.Component),d=n(26),g=n(88),E=n.n(g),b=n(90),v=n.n(b),w=n(87),y=n.n(w),j=n(89),O=n.n(j),k=n(37),S=n.n(k),A=n(49),C=n.n(A),M=n(86),N=n.n(M);var P=Object(d.withStyles)(function(e){return{progress:{margin:2*e.spacing.unit}}})(function(e){var t=e.classes;return r.a.createElement("div",null,r.a.createElement(N.a,{className:t.progress}))}),x=function(e){return console.log("Scroll"),r.a.createElement("div",{style:{overflow:"scroll",height:"800px"}},e.children)},L=Object(d.withStyles)(function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}})(y.a),D=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(C.a,{className:e.root},r.a.createElement(x,null,r.a.createElement(E.a,{className:e.table},r.a.createElement(O.a,null,r.a.createElement(S.a,null,r.a.createElement(L,null,"Name"),r.a.createElement(L,null,"ID"),r.a.createElement(L,null,"Name Type"),r.a.createElement(L,null,"Mass(g)"),r.a.createElement(L,null,"Fall"),r.a.createElement(L,null,"Year"),r.a.createElement(L,null,"Latitude"),r.a.createElement(L,null,"Longitude"))),r.a.createElement(v.a,null,this.props.isPending?r.a.createElement(P,{style:{postion:"absolute",left:"45%"}}):this.props.meteoriteArr?this.props.meteoriteArr.map(function(t){return r.a.createElement(S.a,{className:e.row,key:t.id},r.a.createElement(L,null,t.name),r.a.createElement(L,null,t.id),r.a.createElement(L,null,t.nametype),r.a.createElement(L,null,t.mass),r.a.createElement(L,null,t.fall),r.a.createElement(L,null,t.year),r.a.createElement(L,null,t.reclat),r.a.createElement(L,null,t.reclong))}):r.a.createElement(S.a,null,"error oopsie")))))}}]),t}(r.a.Component),W=Object(d.withStyles)(function(e){return{root:{width:"100%",marginTop:3*e.spacing.unit,overflowX:"auto"},table:{minWidth:700},row:{"&:nth-of-type(odd)":{backgroundColor:e.palette.background.default}}}})(D),B=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={input:"",meteoriteArr:[],filterMeteorite:[],isPending:!0},n.onSearchChange=function(e,t){e.preventDefault();var a=n.state.meteoriteArr.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())?e:null});n.setState({filterMeteorite:a,input:t})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://data.nasa.gov/resource/gh4g-9sfh.json").then(function(e){return e.json()}).then(function(t){return e.setState({meteoriteArr:t,isPending:!1})})}},{key:"render",value:function(){return r.a.createElement("div",{style:{width:"80%",position:"absolute",left:"10%",background:"#f8f8f8"}},r.a.createElement("h1",{style:{textAlign:"center"}},"Meteorite App"),r.a.createElement(f,{onSearchChange:this.onSearchChange}),r.a.createElement(W,{meteoriteArr:this.state.input?this.state.filterMeteorite:this.state.meteoriteArr,isPending:this.state.isPending}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},91:function(e,t,n){e.exports=n(231)},96:function(e,t,n){}},[[91,1,2]]]);
//# sourceMappingURL=main.6f5e10fb.chunk.js.map