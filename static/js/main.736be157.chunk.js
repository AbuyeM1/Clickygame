(this.webpackJsonpClickygame=this.webpackJsonpClickygame||[]).push([[0],[,,function(e){e.exports=JSON.parse('[{"id":1,"name":"cleveland","image":"https://tse1.mm.bing.net/th?id=OIP.46rloZ2nINAtUfg4rAuwXwHaFj&pid=Api&P=0&w=160&h=120"},{"id":2,"name":"Dewit","image":"http://www.geocities.ws/gabrudos/pics/homerface.jpg"},{"id":3,"name":"simpson","image":"https://i.imgflip.com/2/qqs09.jpg"},{"id":4,"name":"Michael","image":"https://vignette.wikia.nocookie.net/theoffice/images/f/f1/Michael.jpg/revision/latest/scale-to-width-down/150?cb=20170724043334"},{"id":5,"name":"Moana","image":"https://i1.wp.com/drawcentral.com/wp-content/uploads/2018/12/How-To-Draw-Moana-Main.jpg?resize=150%2C150&ssl=1"},{"id":6,"name":"Peter","image":"https://vignette.wikia.nocookie.net/parody/images/1/1b/Peter_Griffin_in_Family_Guy.jpg/revision/latest/scale-to-width-down/162?cb=20151128224031"},{"id":7,"name":"Bart","image":"https://s-cdn.serienjunkies.de/TheSimpsons/bart-simpson.jpg"},{"id":8,"name":"Stewie","image":"https://vignette.wikia.nocookie.net/familyguy/images/0/00/Stewie-04.jpg/revision/latest/scale-to-width-down/181?cb=20170803145039&path-prefix=de"},{"id":9,"name":"Joker","image":"https://66.media.tumblr.com/80a00961fcf300e41ac393d23d0e7730/afdbdc66c42a87cf-51/s640x960/7d4fcb8553735a15acae431a24a35472f947ce12.jpg"},{"id":10,"name":"Panda","image":"https://i.pinimg.com/originals/3b/67/d7/3b67d7012adb12edf178c367d685802d.jpg"},{"id":11,"name":"Pets","image":"https://vignette3.wikia.nocookie.net/secretlifeofpets/images/4/4e/TSLOPChloe.png/revision/latest?cb=20170221021935"},{"id":12,"name":"Angry Bird","image":"https://f0.pngfuel.com/png/856/1021/red-angry-bird-character-illustration-png-clip-art.png"}]')},,,,,,,,,,,function(e,t,i){},,function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";i.r(t);var a=i(1),n=i(4),s=i.n(n),c=i(5),r=i(6),o=i(8),d=i(7),l=(i(13),i(0)),m=function(e){return Object(l.jsx)("div",{className:"wrapper",children:e.children})},p=(i(15),function(e){return Object(l.jsxs)("ul",{className:"nav nav-fill",children:[Object(l.jsx)("li",{className:"nav-item nav-text text-left",children:"Clicky Game."}),Object(l.jsxs)("li",{className:"nav-item nav-text text-right",children:["Score: ",e.score," | High score: ",e.topScore]})]})}),g=function(e){return Object(l.jsx)("div",{children:Object(l.jsx)("h5",{className:"text-center",children:e.note})})},h=function(e){return Object(l.jsx)("div",{className:"container",children:e.children})},u=(i(16),function(e){return Object(l.jsx)("div",{className:"card mx-auto",children:Object(l.jsx)("a",{onClick:function(){return e.cardClick(e.id)},children:Object(l.jsx)("img",{alt:e.name,src:e.image})})})}),f=i(2),j=function(e){Object(o.a)(i,e);var t=Object(d.a)(i);function i(){var e;Object(c.a)(this,i);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={cards:f,displayCards:f,score:0,topScore:0,note:"Don't click the same photo twice or you lose."},e.sortCards=function(){f.sort((function(e,t){return.5-Math.random()}))},e.cardClick=function(t){if(console.log(e.state.cards),console.log(e.state.displayCards),void 0===e.state.displayCards.find((function(e){return e.id===t})))e.setState({displayCards:f,topScore:e.state.score>e.state.topScore?e.state.score:e.state.topScore,score:0,note:"Nope!"});else{var i=e.state.displayCards.filter((function(e){return e.id!==t}));e.setState({displayCards:i,score:e.state.score+1,note:"Good guess."})}e.sortCards()},e}return Object(r.a)(i,[{key:"render",value:function(){var e=this;return Object(l.jsxs)(m,{children:[Object(l.jsx)(p,{score:this.state.score,topScore:this.state.topScore}),Object(l.jsx)(g,{note:this.state.note}),Object(l.jsx)(h,{children:this.state.cards.map((function(t){return Object(l.jsx)(u,{cardClick:e.cardClick,id:t.id,name:t.name,image:t.image},t.id)}))})]})}}]),i}(a.Component);i(17);s.a.render(Object(l.jsx)(j,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.736be157.chunk.js.map