(this.webpackJsonpclickygame=this.webpackJsonpclickygame||[]).push([[0],[,,,,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"image":"./assets/images/babyboss.jpeg","clicked":false},{"id":2,"image":"./assets/images/Heisenberg.jpeg","clicked":false},{"id":3,"image":"./assets/images/dwight-schrute.jpg","clicked":false},{"id":4,"image":"./assets/images/michael-scott.jpg","clicked":false},{"id":5,"image":"./assets/images/moana-cartoon-png.png","clicked":false},{"id":6,"image":"/assets/images/PeterGriffin.png","clicked":false},{"id":7,"image":"./assets/images/simpsons.jpeg","clicked":false},{"id":8,"image":"./assets/images/stewie.jpeg","clicked":false}]')},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(1),s=a(8),n=a.n(s),r=a(6),i=a(2),o=a(3),l=a(5),u=a(4),d=(a(14),a(0)),m=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var c=arguments.length,s=new Array(c),n=0;n<c;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={message:"",animating:!1},e.renderMessage=function(){switch(e.state.message){case"correct":return"correctly!";case"incorrect":return"incorrectly!";default:return"Click to start!"}},e}return Object(o.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=e.score,c=e.topScore,s={animating:!0};s.message=0===a&&0===c?"":0===a&&c>0?"incorrect":"correct",a===this.props.score&&this.state.message===s.message||this.setState(s)}},{key:"render",value:function(){var e=this;return Object(d.jsx)("li",{className:this.state.animating?this.state.message:"",onAnimationEnd:function(){return e.setState({animating:!1})},children:this.renderMessage()})}}]),a}(c.Component);a(16);var h=function(e){return Object(d.jsx)("nav",{className:"navbar",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{className:"brand",children:Object(d.jsx)("a",{href:"/",children:"Clicky Game"})}),Object(d.jsx)(m,{score:e.score,topScore:e.topScore}),Object(d.jsxs)("li",{children:["Score: ",e.score," | Top Score: ",e.topScore]})]})})};a(17);var j=function(){return Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)("h1",{children:"Clicky Game!"}),Object(d.jsx)("h2",{children:"Click on an image to get points!"})]})};a(18);var f=function(e){return Object(d.jsx)("main",{className:"container",children:e.children})};a(19);var g=function(e){return Object(d.jsx)("div",{role:"img","aria-label":"click item",onClick:function(){return e.handleClick(e.id)},style:{backgroundImage:'url("'.concat(e.image,'")')},className:"click-item".concat(e.shake?" shake":"")})};a(20);var b=function(){return Object(d.jsx)("footer",{className:"footer",children:Object(d.jsxs)("div",{className:"bottom",children:["Clicky Game! ",Object(d.jsx)("img",{alt:"react",src:"assets/images/logo192.png"})]})})},p=a(9),k=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var c=arguments.length,s=new Array(c),n=0;n<c;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={data:p,score:0,topScore:0},e.handleCorrectGuess=function(t){var a=e.state,c=a.topScore,s=a.score+1,n=Math.max(s,c);e.setState({data:e.shuffleData(t),score:s,topScore:n})},e.handleIncorrectGuess=function(t){e.setState({data:e.resetData(t),score:0})},e.resetData=function(t){var a=t.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{clicked:!1})}));return e.shuffleData(a)},e.shuffleData=function(e){for(var t=e.length-1;t>0;){var a=Math.floor(Math.random()*(t+1)),c=e[t];e[t]=e[a],e[a]=c,t--}return e},e.handleItemClick=function(t){var a=!1,c=e.state.data.map((function(e){var c=Object(r.a)({},e);return c.id===t&&(c.clicked||(c.clicked=!0,a=!0)),c}));a?e.handleCorrectGuess(c):e.handleIncorrectGuess(c)},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.setState({data:this.shuffleData(this.state.data)})}},{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{children:[Object(d.jsx)(h,{score:this.state.score,topScore:this.state.topScore}),Object(d.jsx)(j,{}),Object(d.jsx)(f,{children:this.state.data.map((function(t){return Object(d.jsx)(g,{id:t.id,shake:!e.state.score&&e.state.topScore,handleClick:e.handleItemClick,image:t.image},t.id)}))}),Object(d.jsx)(b,{})]})}}]),a}(c.Component);var O=function(){return Object(d.jsx)(k,{})};a(21);n.a.render(Object(d.jsx)(O,{}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.2459543c.chunk.js.map