(this["webpackJsonpcara-sense-clothing-ltd"]=this["webpackJsonpcara-sense-clothing-ltd"]||[]).push([[0],{44:function(e,t,a){e.exports=a(87)},49:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),l=a.n(c),i=(a(49),a(7)),s=a.n(i),o=a(2),u=a(13),m=a(15),d=a(16),p=a(18),f=a(17),h=(a(51),a(52),a(14)),b=(a(53),a(54),a(5)),E=Object(b.g)((function(e){var t=e.title,a=e.imageUrl,n=e.size,c=e.history,l=e.match,i=e.linkUrl;return r.a.createElement("div",{className:"".concat(n," menu-item"),onClick:function(){return c.push("".concat(l.url).concat(i))}},r.a.createElement("div",{style:{backgroundImage:"url(".concat(a,")")},className:"background-image"}),r.a.createElement("div",{className:"content"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("span",{className:"subtitle"},"SHOP NOW")))})),g=a(3),v=a(1),O=Object(v.a)([function(e){return e.directoryReducer}],(function(e){return e.sections})),y=Object(v.b)({sections:O}),j=Object(g.b)(y)((function(e){var t=e.sections;return r.a.createElement("div",{className:"directory-menu"},t.map((function(e){var t=e.id,a=Object(h.a)(e,["id"]);return r.a.createElement(E,Object.assign({key:t},a))})))})),C=function(){return r.a.createElement("div",{className:"homepage"},r.a.createElement(j,null))},N=a(38),w=a.n(N),k=function(e){return e.shopReducer},I=Object(v.a)([k],(function(e){return e.collections})),S=w()((function(e){return Object(v.a)([I],(function(t){return t?t[e]:null}))})),x=Object(v.a)([I],(function(e){return e?Object.values(e):[]})),T=Object(v.a)([k],(function(e){return e.isFetching})),U=Object(v.a)([k],(function(e){return!!e.collections})),L=(a(60),function(e){return function(t){var a=t.isLoading,n=Object(h.a)(t,["isLoading"]);return a?r.a.createElement("div",{className:"spinner-overlay"},r.a.createElement("div",{className:"spinner-container"})):r.a.createElement(e,n)}}),R=(a(61),a(62),a(63),a(64),function(e){var t=e.children,a=e.isGoogleSignIn,n=e.inverted,c=Object(h.a)(e,["children","isGoogleSignIn","inverted"]);return r.a.createElement("button",Object.assign({className:"".concat(n?"inverted":""," ").concat(a?"google-sign-in":""," custom-button")},c),t)}),_="TOGGLE_CART_HIDDEN",P="ADD_ITEM",F="REMOVE_ITEM",H="CLEAR_ITEM_FROM_CART",A=function(){return{type:_}},M=function(e){return{type:P,payload:e}},D=Object(g.b)(null,(function(e){return{addItem:function(t){return e(M(t))}}}))((function(e){var t=e.item,a=e.addItem;return r.a.createElement("div",{className:"collection-item"},r.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(t.imageUrl,")")}}),r.a.createElement("div",{className:"collection-footer"},r.a.createElement("span",{className:"name"},t.name),r.a.createElement("span",{className:"price"},10*t.price)),r.a.createElement(R,{onClick:function(){return a(t)},className:"custom-button",inverted:!0},"ADD TO CART"))})),q=function(e){var t=e.title,a=e.items;return r.a.createElement("div",{className:"collection-preview"},r.a.createElement("h1",{className:"title"},"".concat(t.toUpperCase())),r.a.createElement("div",{className:"preview"},a.filter((function(e,t){return t<4})).map((function(e){return r.a.createElement(D,{key:e.id,item:e})}))))},G=Object(v.b)({collections:x}),z=Object(g.b)(G)((function(e){var t=e.collections;return r.a.createElement("div",{className:"collections-overview"},t.map((function(e){var t=e.id,a=Object(h.a)(e,["id"]);return r.a.createElement(q,Object.assign({key:t},a))})))})),B=a(6),W=Object(v.b)({isLoading:T}),J=Object(B.d)(Object(g.b)(W),L)(z),Q=(a(65),Object(g.b)((function(e,t){return{collection:S(t.match.params.collectionId)(e)}}))((function(e){var t=e.collection,a=t.title,n=t.items;return r.a.createElement("div",{className:"collection-page"},r.a.createElement("h2",null,a),r.a.createElement("div",{className:"items"},n.map((function(e){return r.a.createElement(D,{key:e.id,item:e})}))))}))),V=Object(v.b)({isLoading:function(e){return!U(e)}}),Y=Object(B.d)(Object(g.b)(V),L)(Q),K={FETCH_COLLECTIONS_PENDING:"FETCH_COLLECTIONS_PENDING",FETCH_COLLECTIONS_SUCCESS:"FETCH_COLLECTIONS_SUCCESS",FETCH_COLLECTIONS_FAILURE:"FETCH_COLLECTIONS_FAILURE"},X=a(22),Z=a.n(X),$=(a(66),a(70),function(){var e=Object(u.a)(s.a.mark((function e(t,a){var n,r,c,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return n=ae.doc("users/".concat(t.uid)),e.next=5,n.get();case 5:if(e.sent.exists){e.next=17;break}return r=t.displayName,c=t.email,l=new Date,e.prev=9,e.next=12,n.set(Object(o.a)({displayName:r,email:c,createdAt:l},a));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",n);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,a){return e.apply(this,arguments)}}()),ee=function(e){return e.docs.map((function(e){var t=e.data(),a=t.title,n=t.items;return{routeName:encodeURI(a.toLowerCase()),title:a,id:e.id,items:n}})).reduce((function(e,t){return e[t.title.toLowerCase()]=t,e}),{})};Z.a.initializeApp({apiKey:"AIzaSyD8uF9NhmjSjQjy35lk9gpkNM2cNBC5ys0",authDomain:"cara-sense-clothing.firebaseapp.com",databaseURL:"https://cara-sense-clothing.firebaseio.com",projectId:"cara-sense-clothing",storageBucket:"cara-sense-clothing.appspot.com",messagingSenderId:"522413661687",appId:"1:522413661687:web:363ddfd8f9be49c2c7e2f2"});var te=Z.a.auth(),ae=Z.a.firestore(),ne=new Z.a.auth.GoogleAuthProvider;ne.setCustomParameters({promt:"select_account"});var re=function(){return te.signInWithPopup(ne)},ce=(Z.a,function(e){return{type:K.FETCH_COLLECTIONS_SUCCESS,payload:e}}),le=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchCollectionsStart()}},{key:"render",value:function(){var e=this.props.match;return r.a.createElement("div",{className:"shop-page"},r.a.createElement(b.b,{exact:!0,path:"".concat(e.path),component:J}),r.a.createElement(b.b,{path:"".concat(e.url,"/:collectionId"),component:Y}))}}]),a}(r.a.Component),ie=Object(g.b)(null,(function(e){return{fetchCollectionsStart:function(){return e(function(){var e=Object(u.a)(s.a.mark((function e(t){var a,n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=ae.collection("collections"),t({type:K.FETCH_COLLECTIONS_PENDING}),e.prev=2,e.next=5,a.get();case 5:n=e.sent,r=ee(n),t(ce(r)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),t((c=e.t0.message,{type:K.FETCH_COLLECTIONS_FAILURE,payload:c}));case 13:case"end":return e.stop()}var c}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}())}}}))(le),se=(a(72),a(21)),oe=(a(73),a(74),function(e){var t=e.handleChange,a=e.label,n=Object(h.a)(e,["handleChange","label"]);return r.a.createElement("div",{className:"group"},r.a.createElement("input",Object.assign({className:"form-input",onChange:t},n)),a?r.a.createElement("label",{className:"".concat(n.value.length?"shrink":"","form-input-label")},a):null)}),ue=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).handleChange=function(t){var a=t.target,n=a.value,r=a.name;e.setState(Object(se.a)({},r,n))},e.handleSubmit=function(){var t=Object(u.a)(s.a.mark((function t(a){var n,r,c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=e.state,r=n.email,c=n.password,t.prev=2,t.next=5,te.signInWithEmailAndPassword(r,c);case 5:e.setState({email:"",password:""}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(2),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[2,8]])})));return function(e){return t.apply(this,arguments)}}(),e.state={email:"",password:""},e}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"sign-in"},r.a.createElement("h2",null,"I already have an account"),r.a.createElement("span",null,"Sign in with your email and password"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(oe,{name:"email",type:"email",value:this.state.email,label:"email",handleChange:this.handleChange,required:!0}),r.a.createElement(oe,{name:"password",type:"password",value:this.state.password,label:"password",handleChange:this.handleChange,required:!0}),r.a.createElement("div",{className:"buttons"},r.a.createElement(R,{type:"submit",value:"Submit Form"},"Sign In"),r.a.createElement(R,{type:"button",onClick:re,isGoogleSignIn:!0},"Sign In with Google"))))}}]),a}(r.a.Component),me=(a(75),function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).handleSubmit=function(){var t=Object(u.a)(s.a.mark((function t(a){var n,r,c,l,i,o,u;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),n=e.state,r=n.displayName,c=n.email,l=n.password,i=n.confirmPassword,l===i){t.next=5;break}return alert("passwords dont match!"),t.abrupt("return");case 5:return t.prev=5,t.next=8,te.createUserWithEmailAndPassword(c,l);case 8:return o=t.sent,u=o.user,t.next=12,$(u,{displayName:r});case 12:e.setState({displayName:"",email:"",password:"",confirmPassword:""}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(5),console.log(t.t0);case 18:case"end":return t.stop()}}),t,null,[[5,15]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(se.a)({},n,r))},e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state,t=e.displayName,a=e.email,n=e.password,c=e.confirmPassword;return r.a.createElement("div",{className:"sign-up"},r.a.createElement("h2",{className:"title"},"I do not have an account"),r.a.createElement("span",null,"Sign up with your email and password"),r.a.createElement("form",{className:"sign-up-form",onSubmit:this.handleSubmit},r.a.createElement(oe,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Display Name",required:!0}),r.a.createElement(oe,{type:"email",name:"email",value:a,onChange:this.handleChange,label:"Email",required:!0}),r.a.createElement(oe,{type:"password",name:"password",value:n,onChange:this.handleChange,label:"Password",required:!0}),r.a.createElement(oe,{type:"password",name:"confirmPassword",value:c,onChange:this.handleChange,label:"Confirm Password",required:!0}),r.a.createElement(R,{type:"submit"},"SIGN UP")))}}]),a}(r.a.Component)),de=function(){return r.a.createElement("div",{className:"sign-in-and-sign-up"},r.a.createElement(ue,null),r.a.createElement(me,null))},pe=function(e){return e.cartReducer},fe=Object(v.a)([pe],(function(e){return e.cartItems})),he=Object(v.a)([pe],(function(e){return e.hidden})),be=Object(v.a)([fe],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),Ee=Object(v.a)([fe],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price*10}),0)})),ge=(a(76),a(77),Object(g.b)(null,(function(e){return{addItem:function(t){return e(M(t))},removeItem:function(t){return e({type:F,payload:t})},clearItemFromCart:function(t){return e({type:H,payload:t})}}}))((function(e){var t=e.cartItem,a=e.clearItemFromCart,n=e.addItem,c=e.removeItem,l=t.name,i=t.imageUrl,s=t.quantity,o=t.price;return r.a.createElement("div",{className:"checkout-item"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:"".concat(i),alt:"item"})),r.a.createElement("span",{className:"name"},l),r.a.createElement("span",{className:"quantity"},r.a.createElement("div",{className:"arrow",onClick:function(){return c(t)}},"\u276e"),r.a.createElement("span",{className:"value"},s),r.a.createElement("div",{className:"arrow",onClick:function(){return n(t)}},"\u276f")),r.a.createElement("span",{className:"price"},10*o),r.a.createElement("div",{onClick:function(){return a(t)},className:"remove-button"},"\u2715"))}))),ve=(a(78),a(39)),Oe=a.n(ve),ye=function(e){console.log(e),alert("Payment Successful")},je=function(e){var t=e.price;return r.a.createElement(Oe.a,{label:"Pay Now",name:"CaraSense Clothing Ltd.",billingAddress:!0,shippingAddress:!0,image:"",description:"Your total is Rs. ".concat(t),amount:t,panelLabel:"Pay Now",token:ye,stripeKey:"pk_test_51HHk9ZLUvIm4O0nMPciLpzyyF1reVqiINnatYVGYNdYpsqfek85Q8PcEXvrmseFX3iIIpRJeZzm4bwC1niBGC3Wc007jo2Fjnz"})},Ce=Object(v.b)({cartItems:fe,total:Ee}),Ne=Object(g.b)(Ce)((function(e){var t=e.cartItems,a=e.total;return r.a.createElement("div",{className:"checkout-page"},r.a.createElement("div",{className:"checkout-header"},r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Product")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Description")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Quantity")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Price")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Remove"))),t.map((function(e){return r.a.createElement(ge,{key:e.id,cartItem:e})})),r.a.createElement("div",{className:"total"},r.a.createElement("span",null,"TOTAL: Rs. ",a)),r.a.createElement(je,{price:a}))})),we=a(12);function ke(){return(ke=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function Ie(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var Se=r.a.createElement("metadata",null,"\nCreated by potrace 1.16, written by Peter Selinger 2001-2019\n"),xe=r.a.createElement("g",{transform:"translate(0.000000,64.000000) scale(0.100000,-0.100000)",fill:"#000000",stroke:"none"},r.a.createElement("path",{d:"M171 373 c-32 -39 -68 -124 -77 -185 -6 -35 -5 -40 11 -37 12 3 26 30 45 83 44 123 66 145 136 131 l34 -6 0 -99 0 -100 95 0 c57 0 95 -4 95 -10 0 -6 -87 -10 -240 -10 -275 0 -263 5 -215 -90 l25 -50 240 0 240 0 25 50 c33 66 33 90 -1 90 l-27 0 6 75 c6 78 -5 104 -29 71 -11 -15 -13 -14 -23 16 -6 19 -25 50 -41 70 l-30 36 -120 0 -120 0 -29 -35z"})),Te=function(e){var t=e.svgRef,a=e.title,n=Ie(e,["svgRef","title"]);return r.a.createElement("svg",ke({width:"64.000000pt",height:"64.000000pt",viewBox:"0 0 64.000000 64.000000",preserveAspectRatio:"xMidYMid meet",ref:t},n),a?r.a.createElement("title",null,a):null,Se,xe)},Ue=r.a.forwardRef((function(e,t){return r.a.createElement(Te,ke({svgRef:t},e))}));a.p,a(79),a(80);function Le(){return(Le=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function Re(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var _e=r.a.createElement("g",null),Pe=r.a.createElement("g",null),Fe=r.a.createElement("g",null),He=r.a.createElement("g",null),Ae=r.a.createElement("g",null),Me=r.a.createElement("g",null),De=r.a.createElement("g",null),qe=r.a.createElement("g",null),Ge=r.a.createElement("g",null),ze=r.a.createElement("g",null),Be=r.a.createElement("g",null),We=r.a.createElement("g",null),Je=r.a.createElement("g",null),Qe=r.a.createElement("g",null),Ve=r.a.createElement("g",null),Ye=function(e){var t=e.svgRef,a=e.title,n=Re(e,["svgRef","title"]);return r.a.createElement("svg",Le({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t},n),a?r.a.createElement("title",null,a):null,r.a.createElement("g",null,r.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),_e,Pe,Fe,He,Ae,Me,De,qe,Ge,ze,Be,We,Je,Qe,Ve)},Ke=r.a.forwardRef((function(e,t){return r.a.createElement(Ye,Le({svgRef:t},e))})),Xe=(a.p,Object(v.b)({itemCount:be})),Ze=Object(g.b)(Xe,(function(e){return{toggleCartHidden:function(){return e(A())}}}))((function(e){var t=e.itemCount,a=e.toggleCartHidden;return r.a.createElement("div",{className:"cart-icon",onClick:a},r.a.createElement(Ke,{className:"shopping-icon"}),r.a.createElement("span",{className:"item-count"},t))})),$e=(a(81),a(82),function(e){var t=e.item,a=t.imageUrl,n=t.price,c=t.name,l=t.quantity;return r.a.createElement("div",{className:"cart-item"},r.a.createElement("img",{src:"".concat(a),alt:""}),r.a.createElement("div",{className:"item-details"},r.a.createElement("span",{className:"name"},c),r.a.createElement("span",{className:"price"},l," x Rs. ",10*Number(n))))}),et=Object(v.b)({cartItems:fe}),tt=Object(b.g)(Object(g.b)(et)((function(e){var t=e.cartItems,a=e.history,n=e.dispatch;return r.a.createElement("div",{className:"cart-dropdown"},r.a.createElement("div",{className:"cart-items"},t.length?t.map((function(e){return r.a.createElement($e,{key:e.id,item:e})})):r.a.createElement("span",{className:"empty-message"},"Your cart is empty")),r.a.createElement(R,{onClick:function(){a.push("/cara-sense-clothing-ltd/checkout/"),n(A())}},"GO TO CHECKOUT"))}))),at=Object(v.a)([function(e){return e.userReducer}],(function(e){return e.currentUser})),nt=Object(v.b)({currentUser:at,hidden:he}),rt=Object(g.b)(nt)((function(e){var t=e.currentUser,a=e.hidden;return r.a.createElement("div",{className:"header"},r.a.createElement(we.b,{to:"/cara-sense-clothing-ltd/",className:"logo-container"},r.a.createElement(Ue,{className:"logo"})),r.a.createElement("div",{className:"options"},r.a.createElement(we.b,{className:"option",to:"/cara-sense-clothing-ltd/shop/"},"SHOP"),r.a.createElement(we.b,{className:"option",to:"/cara-sense-clothing-ltd/contact/"},"CONTACT"),t?r.a.createElement("div",{className:"option",onClick:function(){return te.signOut()}},"SIGN OUT"):r.a.createElement(we.b,{className:"option",to:"/cara-sense-clothing-ltd/signin/"},"SIGN IN"),r.a.createElement(Ze,null)),a?null:r.a.createElement(tt,null))})),ct="SET_CURRENT_USER",lt=(a(83),function(){return r.a.createElement("div",{className:"contact-page"},r.a.createElement("h2",null,"Want to work with me?"),r.a.createElement("a",{href:"mailto:mak94723@gmail.com"},r.a.createElement(R,null,"CONTACT ME")),r.a.createElement("h2",null,"OR"),r.a.createElement("a",{href:"https://relaxed-tereshkova-ed0905.netlify.app/"},r.a.createElement(R,null,"Check out my other Projects :)")))}),it=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).unsubscribeFromAuth=null,e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.setCurrentUser;this.unsubscribeFromAuth=te.onAuthStateChanged(function(){var t=Object(u.a)(s.a.mark((function t(a){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a){t.next=7;break}return t.next=3,$(a);case 3:t.sent.onSnapshot((function(t){e(Object(o.a)({id:t.id},t.data()))})),t.next=8;break;case 7:e(null);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return r.a.createElement(n.Fragment,null,r.a.createElement(rt,null),r.a.createElement(b.d,null,r.a.createElement(b.b,{exact:!0,path:"/cara-sense-clothing-ltd/",component:C}),r.a.createElement(b.b,{path:"/cara-sense-clothing-ltd/shop/",component:ie}),r.a.createElement(b.b,{exact:!0,path:"/cara-sense-clothing-ltd/contact/",component:lt}),r.a.createElement(b.b,{exact:!0,path:"/cara-sense-clothing-ltd/checkout/",component:Ne}),r.a.createElement(b.b,{exact:!0,path:"/cara-sense-clothing-ltd/signin/",render:function(){return e.props.currentUser?r.a.createElement(b.a,{to:"/cara-sense-clothing-ltd/"}):r.a.createElement(de,null)}})))}}]),a}(r.a.Component),st=Object(v.b)({currentUser:at}),ot=Object(g.b)(st,(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:ct,payload:e}}(t))}}}))(it),ut=(a(84),a(40)),mt=a(27),dt=a(41),pt=a.n(dt),ft={currentUser:null},ht=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ft,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ct:return Object(o.a)(Object(o.a)({},e),{},{currentUser:t.payload});default:return e}},bt=a(43),Et=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(o.a)(Object(o.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(bt.a)(e),[Object(o.a)(Object(o.a)({},t),{},{quantity:1})])},gt=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(o.a)(Object(o.a)({},e),{},{quantity:e.quantity-1}):e}))},vt={hidden:!0,cartItems:[]},Ot=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:vt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(o.a)(Object(o.a)({},e),{},{hidden:!e.hidden});case P:return Object(o.a)(Object(o.a)({},e),{},{cartItems:Et(e.cartItems,t.payload)});case F:return Object(o.a)(Object(o.a)({},e),{},{cartItems:gt(e.cartItems,t.payload)});case H:return Object(o.a)(Object(o.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});default:return e}},yt={sections:[{title:"hats",imageUrl:"https://images.unsplash.com/photo-1533055640609-24b498dfd74c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://images.unsplash.com/photo-1549298916-f52d724204b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://images.unsplash.com/photo-1575881122010-dfda094fb8b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://blog.pakistani.pk/wp-content/uploads/2016/02/Top-10-Pakistani-Male-Models-Jahan-e-Khalid.png",size:"large",id:5,linkUrl:"shop/mens"}]},jt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:yt,t=arguments.length>1?arguments[1]:void 0;return t.type,e},Ct={collections:null,isFetching:!1,errorMessage:void 0},Nt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ct,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case K.FETCH_COLLECTIONS_PENDING:return Object(o.a)(Object(o.a)({},e),{},{isFetching:!0});case K.FETCH_COLLECTIONS_SUCCESS:return Object(o.a)(Object(o.a)({},e),{},{collections:t.payload,isFetching:!1});case K.FETCH_COLLECTIONS_FAILURE:return Object(o.a)(Object(o.a)({},e),{},{errorMessage:t.payload,isFetching:!1});case K.UPDATE_COLLECTIONS:return Object(o.a)(Object(o.a)({},e),{},{collections:t.payload});default:return e}},wt={key:"root",storage:pt.a,whitelist:["cartReducer"]},kt=Object(B.c)({userReducer:ht,cartReducer:Ot,directoryReducer:jt,shopReducer:Nt}),It=Object(mt.a)(wt,kt),St=[ut.a];var xt=Object(B.e)(It,B.a.apply(void 0,St)),Tt=Object(mt.b)(xt),Ut=a(42);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g.a,{store:xt},r.a.createElement(we.a,null,r.a.createElement(Ut.a,{persistor:Tt},r.a.createElement(ot,null))))),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.71030b32.chunk.js.map