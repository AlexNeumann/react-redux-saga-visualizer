(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,a){},106:function(e,t){},169:function(e,t){},187:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(43),l=a.n(o),c=a(21),i=a(194),s=a(199),u=a(172),m=a(34),p=a(53),d={app:{name:"test",greeting:"Hello World!"}};var y=a(35),h=a(24),b="MARKET_CHANGE_FILTER",g="SEND_SEARCH_FRUITS",v="RECEIVE_SEARCH_FRUITS",f={eventHandling:{isSending:!1},searchFilter:{type:"both",color:"any",searchString:""},items:[]};var E=a(54),_="HISTORY_CLEAR_LOG",O={history:[{type:"action",name:"EXAMPLE_ACTION",key:"hello",value:"world",sagaListener:!1}]};var j=Object(m.c)({AppContainerReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;switch((arguments.length>1?arguments[1]:void 0).type){case"TEST":default:return e}},FruitMartReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(h.a)({},e,{searchFilter:Object(h.a)({},e.searchFilter,Object(y.a)({},t.filterName,t.value))});case g:return Object(h.a)({},e,{eventHandling:Object(h.a)({},e.eventHandling,{isSending:!0}),items:[]});case v:return Object(h.a)({},e,{eventHandling:Object(h.a)({},e.eventHandling,{isSending:!1}),items:t.items});default:return e}},HistoryReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return O;case b:var a={type:"action",name:b,key:t.filterName,value:t.value,sagaListener:!1};return Object(h.a)({},e,{history:Object(E.a)(e.history).concat([a])});case g:var n={type:"saga",subType:"send",name:g,message:"Searching for items..."};return Object(h.a)({},e,{history:Object(E.a)(e.history).concat([n])});case v:var r={type:"saga",subType:"receive",name:v,message:"Received search results!"};return Object(h.a)({},e,{history:Object(E.a)(e.history).concat([r])});default:return e}}}),C=a(44),w=a.n(C),F=a(37),S=function(e){return{type:v,items:e}},N=function(){return{type:"FAILED_SEARCH_FRUITS"}},x=[{id:1,type:"Fruit",color:"red",name:"Red Apple"},{id:2,type:"Fruit",color:"red",name:"Blood Orange"},{id:3,type:"Fruit",color:"red",name:"Cherry"},{id:4,type:"Fruit",color:"red",name:"Cranberry"},{id:5,type:"Fruit",color:"red",name:"Strawberry"},{id:6,type:"Vegetable",color:"red",name:"Beets"},{id:7,type:"Vegetable",color:"red",name:"Red Peppers"},{id:8,type:"Vegetable",color:"red",name:"Radish"},{id:9,type:"Vegetable",color:"red",name:"Tomato"},{id:10,type:"Vegetable",color:"red",name:"Red Onions"},{id:11,type:"Fruit",color:"yellow",name:"Apricots"},{id:12,type:"Fruit",color:"yellow",name:"Grapefruit"},{id:13,type:"Fruit",color:"yellow",name:"Lemons"},{id:14,type:"Fruit",color:"yellow",name:"Oranges"},{id:15,type:"Fruit",color:"yellow",name:"Peaches"},{id:16,type:"Vegetable",color:"yellow",name:"Yellow Peppers"},{id:17,type:"Vegetable",color:"yellow",name:"Pumpkin"},{id:18,type:"Vegetable",color:"yellow",name:"Sweet Potatoes"},{id:19,type:"Vegetable",color:"yellow",name:"Carrots"},{id:20,type:"Vegetable",color:"yellow",name:"Butternut Squash"},{id:21,type:"Fruit",color:"white",name:"Banana"},{id:22,type:"Fruit",color:"white",name:"Dates"},{id:23,type:"Fruit",color:"white",name:"White Nectarine"},{id:24,type:"Fruit",color:"white",name:"White Peaches"},{id:25,type:"Vegetable",color:"white",name:"Cauliflower"},{id:26,type:"Vegetable",color:"white",name:"Garlic"},{id:27,type:"Vegetable",color:"white",name:"Mushrooms"},{id:28,type:"Vegetable",color:"white",name:"Onions"},{id:29,type:"Vegetable",color:"white",name:"Turnips"},{id:30,type:"Fruit",color:"green",name:"Avocados"},{id:30,type:"Fruit",color:"green",name:"Honeydew"},{id:30,type:"Fruit",color:"green",name:"Kiwifruit"},{id:30,type:"Fruit",color:"green",name:"Limes"},{id:31,type:"Fruit",color:"green",name:"Asparagus"},{id:32,type:"Fruit",color:"green",name:"Broccoli"},{id:33,type:"Fruit",color:"green",name:"Green Beans"},{id:34,type:"Fruit",color:"green",name:"Celery"},{id:35,type:"Fruit",color:"blue",name:"Blackberry"},{id:36,type:"Fruit",color:"blue",name:"Blueberry"},{id:37,type:"Vegetable",color:"blue",name:"Black Olives"},{id:38,type:"Vegetable",color:"blue",name:"Eggplant"}],H=function(e){var t=e.type,a=e.color,n=e.searchString,r=!0,o=!0;"both"===t&&(r=!1),"any"===a&&(o=!1);var l=x.filter(function(e){var l=!0;return r&&e.type.toLowerCase()!==t&&(l=!1),o&&e.color!==a&&(l=!1),e.name.toLowerCase().includes(n.toLowerCase())||(l=!1),l});return console.log("matches",l),l},R=w.a.mark(L),k=w.a.mark(B);function L(e){var t,a;return w.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t=e.searchParams,n.next=4,Object(p.b)(2e3);case 4:return a=H(t),n.next=7,Object(F.a)(S(a));case 7:n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(0),n.next=13,Object(F.a)(N());case 13:case"end":return n.stop()}},R,this,[[0,9]])}function B(){return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(F.b)(g,L);case 2:case"end":return e.stop()}},k,this)}var V=B,A=Object(p.a)(),T=Object(m.d)(j,Object(m.a)(A));A.run(V);a(104);var I=a(11),D=a(12),P=a(14),G=a(13),J=a(15),M=a(192),U=a(193),W=(a(106),a(197)),z=a(198),K=a(45),q=a.n(K),Y=a(80),X=a.n(Y),Z=function(e){function t(){return Object(I.a)(this,t),Object(P.a)(this,Object(G.a)(t).apply(this,arguments))}return Object(J.a)(t,e),Object(D.a)(t,[{key:"render",value:function(){var e=this.props.title;return r.a.createElement("div",{className:X.a.title},e)}}]),t}(n.Component),$=a(188),Q=a(189),ee=a(190),te=a(196),ae=a(191),ne=a(81),re=a.n(ne),oe=a(22),le=a.n(oe),ce=a(39),ie=a.n(ce),se=function(e){function t(e){var a;return Object(I.a)(this,t),(a=Object(P.a)(this,Object(G.a)(t).call(this,e))).colorCoordinator={red:"#ff7272",blue:"#729dff",white:"#f5deb3",green:"#89daa2",yellow:"#e8de63"},a}return Object(J.a)(t,e),Object(D.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.color,n=e.type,o=this.colorCoordinator[a];return r.a.createElement("div",{className:ie.a.tile},r.a.createElement("div",{className:ie.a.tileContent,style:{backgroundColor:o}},r.a.createElement("div",null,"Vegetable"===n?r.a.createElement("img",{className:ie.a.tileImage,src:"https://img.icons8.com/ios/50/000000/carrot.png",alt:"Vegetable"}):r.a.createElement("img",{className:ie.a.tileImage,src:"https://img.icons8.com/ios/50/000000/strawberry.png",alt:"Vegetable"})),r.a.createElement("div",{className:ie.a.name},t)))}}]),t}(n.Component),ue=function(e){function t(){var e,a;Object(I.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(P.a)(this,(e=Object(G.a)(t)).call.apply(e,[this].concat(r)))).onChangeFilter=function(e,t){a.props.dispatchChangeFilter(e,t)},a.onStartSearch=function(){console.log("Searching fruits..."),a.props.dispatchSendSearchFruits(a.props.searchFilter)},a}return Object(J.a)(t,e),Object(D.a)(t,[{key:"render",value:function(){var e=this;console.log("item check",this.props.items);var t=this.props.searchFilter,a=t.type,n=t.color,o=t.searchString;return r.a.createElement("div",{className:le.a.tabBox},r.a.createElement($.a,{inline:!0},r.a.createElement(Q.a,{className:le.a.formGrp,controlId:"type"},r.a.createElement(ee.a,null,"Search")," ",r.a.createElement(te.a,{type:"text",placeholder:"Search?",className:le.a.inputText,value:o,onChange:function(t){return e.onChangeFilter("searchString",t.target.value)}}))),r.a.createElement($.a,{inline:!0},r.a.createElement(Q.a,{className:le.a.formGrp,controlId:"type"},r.a.createElement(ee.a,null,"Type")," ",r.a.createElement(te.a,{componentClass:"select",placeholder:"Select...",value:a,className:le.a.inputSelect,onChange:function(t){return e.onChangeFilter("type",t.target.value)}},r.a.createElement("option",{value:"both"},"Both"),r.a.createElement("option",{value:"fruit"},"Fruit only"),r.a.createElement("option",{value:"vegetable"},"Vegetable only")))," ",r.a.createElement(Q.a,{className:le.a.formGrp,controlId:"color"},r.a.createElement(ee.a,null,"Color")," ",r.a.createElement(te.a,{componentClass:"select",placeholder:"Select...",value:n,className:le.a.inputSelect,onChange:function(t){return e.onChangeFilter("color",t.target.value)}},r.a.createElement("option",{value:"any"},"Any"),r.a.createElement("option",{value:"red"},"Red"),r.a.createElement("option",{value:"yellow"},"Yellow/Orange"),r.a.createElement("option",{value:"white"},"White/Tan/Brown"),r.a.createElement("option",{value:"green"},"Green"),r.a.createElement("option",{value:"blue"},"Blue/Purple")))," ",r.a.createElement(Q.a,{className:le.a.formGrp,controlId:"submitBtn"},r.a.createElement(ae.a,{className:le.a.btnSearch,onClick:this.onStartSearch},"Search!"))),r.a.createElement(M.a,{className:le.a.rowResults},this.props.eventHandling.isSending?r.a.createElement("div",{className:le.a.spinner},r.a.createElement(re.a,{type:"Watch",color:"#535784",height:"100",width:"100"}),r.a.createElement("div",null,"Artifically slowed down...")):this.props.items.map(function(e,t){return r.a.createElement(se,{key:t,name:e.name,color:e.color,type:e.type})})))}}]),t}(n.Component),me=function(e){function t(){return Object(I.a)(this,t),Object(P.a)(this,Object(G.a)(t).apply(this,arguments))}return Object(J.a)(t,e),Object(D.a)(t,[{key:"render",value:function(){return r.a.createElement(ue,{dispatchChangeFilter:this.props.dispatchChangeFilter,dispatchSendSearchFruits:this.props.dispatchSendSearchFruits,searchFilter:this.props.searchFilter,eventHandling:this.props.eventHandling,items:this.props.items})}}]),t}(n.Component),pe=Object(c.b)(function(e){return{searchFilter:e.FruitMartReducer.searchFilter,eventHandling:e.FruitMartReducer.eventHandling,items:e.FruitMartReducer.items}},function(e){return{dispatchChangeFilter:function(t,a){return e(function(e,t){return{type:b,filterName:e,value:t}}(t,a))},dispatchSendSearchFruits:function(t){return e(function(e){return{type:g,searchParams:e}}(t))}}})(me),de=function(e){function t(){return Object(I.a)(this,t),Object(P.a)(this,Object(G.a)(t).apply(this,arguments))}return Object(J.a)(t,e),Object(D.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(Z,{title:"UI"}),r.a.createElement(W.a,{className:q.a.tabsCustom,defaultActiveKey:1,id:"uncontrolled-tab-example"},r.a.createElement(z.a,{className:q.a.tabCustom,eventKey:1,title:"Fruit Mart"},r.a.createElement(pe,null)),r.a.createElement(z.a,{className:q.a.tabCustom,eventKey:2,title:"Example 2"},"Tab 2 content"),r.a.createElement(z.a,{className:q.a.tabCustom,eventKey:3,title:"Example 3"},"Tab 3 content")))}}]),t}(n.Component),ye=function(e){function t(){return Object(I.a)(this,t),Object(P.a)(this,Object(G.a)(t).apply(this,arguments))}return Object(J.a)(t,e),Object(D.a)(t,[{key:"render",value:function(){return r.a.createElement(de,null)}}]),t}(n.Component),he=Object(c.b)(function(e){return{}},function(e){return{}})(ye),be=a(8),ge=a.n(be),ve=a(23),fe=a.n(ve),Ee=function(e){function t(){var e,a;Object(I.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(P.a)(this,(e=Object(G.a)(t)).call.apply(e,[this].concat(r)))).onPressClear=function(){a.props.dispatchClearLog()},a}return Object(J.a)(t,e),Object(D.a)(t,[{key:"render",value:function(){var e=this.props.history.length;return r.a.createElement("div",{className:fe.a.box},r.a.createElement(Z,{title:"History"}),r.a.createElement("div",{className:fe.a.resetHistory},r.a.createElement("a",{onClick:this.onPressClear},"Clear History Log")),r.a.createElement("div",{className:fe.a.colOverflow},this.props.history.map(function(t,a){var n=a+1===e,o=ge()(fe.a.actionEntry,Object(y.a)({},fe.a.entryHL,n));return"action"===t.type?r.a.createElement("div",{className:o},r.a.createElement("div",null,"(".concat(a+1,") dispatch action - "),r.a.createElement("span",{className:fe.a.actionName},t.name)),r.a.createElement("div",{className:fe.a.actionDetailBox},r.a.createElement("div",null,"\tkey: ",r.a.createElement("span",{className:fe.a.actionDetail},t.key),"value: ",r.a.createElement("span",{className:fe.a.actionDetail},t.value)),t.sagaListener&&r.a.createElement("div",null,"=> triggers Saga"))):r.a.createElement("div",{className:o},r.a.createElement("div",null,"(".concat(a+1,") Saga listened: action - "),r.a.createElement("span",{className:fe.a.actionSaga},t.name)),r.a.createElement("div",{className:fe.a.actionDetailBox},r.a.createElement("div",null,"\t".concat(t.message)),t.sagaListener&&r.a.createElement("div",null,"=> triggers Saga")))})))}}]),t}(n.Component),_e=function(e){function t(){return Object(I.a)(this,t),Object(P.a)(this,Object(G.a)(t).apply(this,arguments))}return Object(J.a)(t,e),Object(D.a)(t,[{key:"render",value:function(){return r.a.createElement(Ee,{history:this.props.history,dispatchClearLog:this.props.dispatchClearLog})}}]),t}(n.Component),Oe=Object(c.b)(function(e){return{history:e.HistoryReducer.history}},function(e){return{dispatchClearLog:function(){return e({type:_})}}})(_e),je=(a(169),a(88)),Ce=a.n(je),we=function(e){function t(){return Object(I.a)(this,t),Object(P.a)(this,Object(G.a)(t).apply(this,arguments))}return Object(J.a)(t,e),Object(D.a)(t,[{key:"render",value:function(){var e=this.props.Fruits.items.length,t=(this.props.Fruits.items.slice(),JSON.parse(JSON.stringify(this.props.Fruits)));return e>2&&(t.items.splice(2),t.items.push({otherResults:"hidden"})),r.a.createElement("div",null,r.a.createElement(Z,{title:"Redux Store"}),r.a.createElement("pre",{className:Ce.a.prettyJson},r.a.createElement("code",null,JSON.stringify(t,void 0,4))))}}]),t}(n.Component),Fe=function(e){function t(){return Object(I.a)(this,t),Object(P.a)(this,Object(G.a)(t).apply(this,arguments))}return Object(J.a)(t,e),Object(D.a)(t,[{key:"render",value:function(){return r.a.createElement(we,{Fruits:this.props.Fruits})}}]),t}(n.Component),Se=Object(c.b)(function(e){return{Fruits:e.FruitMartReducer}},function(e){return{}})(Fe),Ne=a(27),xe=a.n(Ne),He=function(e){function t(){return Object(I.a)(this,t),Object(P.a)(this,Object(G.a)(t).apply(this,arguments))}return Object(J.a)(t,e),Object(D.a)(t,[{key:"render",value:function(){return console.log("Logging App props",this.props.app),r.a.createElement(u.a,{fluid:!0},r.a.createElement(M.a,null,r.a.createElement(U.a,{xs:4,md:4,lg:3,className:[xe.a.colCustom,xe.a.colDivider,xe.a.colHistory,xe.a.colOverflow]},r.a.createElement(Oe,null)),r.a.createElement(U.a,{xs:4,md:4,lg:6,className:[xe.a.colCustom,xe.a.colDivider,xe.a.colPlayground]},r.a.createElement(he,null)),r.a.createElement(U.a,{xs:4,md:4,lg:3,className:[xe.a.colCustom,xe.a.colStore]},r.a.createElement(Se,null))))}}]),t}(n.Component),Re=Object(c.b)(function(e){return{app:e.AppContainerReducer.app}},function(e){return{}})(He),ke=a(195),Le=a(61),Be=a.n(Le),Ve=function(e){function t(){return Object(I.a)(this,t),Object(P.a)(this,Object(G.a)(t).apply(this,arguments))}return Object(J.a)(t,e),Object(D.a)(t,[{key:"render",value:function(){return r.a.createElement(ke.a,{collapseOnSelect:!0,className:Be.a.navbarCustom},r.a.createElement(ke.a.Header,{className:Be.a.header},r.a.createElement(ke.a.Brand,null,r.a.createElement("a",{href:"/"},"React Redux Saga Visualizer"))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(c.a,{store:T},r.a.createElement(i.a,{basename:"/react-redux-saga-visualizer"},r.a.createElement(u.a,{fluid:!0,style:{paddingLeft:0,paddingRight:0}},r.a.createElement(Ve,null),r.a.createElement(s.a,{path:"/",exact:!0,component:Re})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},22:function(e,t,a){e.exports={btnSearch:"styles_btnSearch__2KCCe",formGrp:"styles_formGrp__2RJ0i",inputText:"styles_inputText__1VW1-",tabBox:"styles_tabBox__2zVXC",rowResults:"styles_rowResults__U-pIz",inputSelect:"styles_inputSelect__qWbsv",spinner:"styles_spinner__25y1P"}},23:function(e,t,a){e.exports={colOverflow:"styles_colOverflow__z7xms",box:"styles_box__JxEB7",resetHistory:"styles_resetHistory__T7qkw",actionName:"styles_actionName__3_o3t",actionSaga:"styles_actionSaga__1UZB6",actionDetailBox:"styles_actionDetailBox__1tUEr",actionDetail:"styles_actionDetail__30HJU",entryHL:"styles_entryHL__3xzHz",actionEntry:"styles_actionEntry__x3pD-",fadein:"styles_fadein__3WC4L"}},27:function(e,t,a){e.exports={colCustom:"styles_colCustom__3bFOU",colDivider:"styles_colDivider__3EGno",colHistory:"styles_colHistory__n50bh",colPlayground:"styles_colPlayground__1ONEv",colStore:"styles_colStore__2D_7b"}},39:function(e,t,a){e.exports={tile:"styles_tile__3JeCU",tileContent:"styles_tileContent__ASX_9",name:"styles_name__2046_",tileImage:"styles_tileImage__2HvMT"}},45:function(e,t,a){e.exports={tabsCustom:"styles_tabsCustom__1duvg",tabCustom:"styles_tabCustom__1pIGZ"}},61:function(e,t,a){e.exports={navbarCustom:"styles_navbarCustom__1Lqck",header:"styles_header__3GyAq"}},80:function(e,t,a){e.exports={title:"styles_title__PIdY-"}},88:function(e,t,a){e.exports={prettyJson:"styles_prettyJson__1DbHv"}},92:function(e,t,a){e.exports=a(187)}},[[92,2,1]]]);
//# sourceMappingURL=main.54f31f11.chunk.js.map