(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{68:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),r=a(30),c=a.n(r),i=(a(81),a(22)),o=(a(82),a(19)),l=a.n(o),j=a(32),h=a(13),d=a(14),b=a(16),u=a(15),m=a(105),x=a(106),p=a(103),O=a(70),v=a(97),f=a(73),g=(a(67),a.p+"static/media/netflix_logo.780a34b3.png"),y=a.p+"static/media/cat.77ff77a4.jpg",N=(a(68),a(56)),w=a(72),C=a(9),I=a(2),k=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(h.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={query:""},e.handleSearch=function(){},e.fetchMovie=Object(j.a)(l.a.mark((function t(){var a,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://www.omdbapi.com/?apikey=f7c25f33&s=harry%20potter");case 2:if(!(a=t.sent).ok){t.next=10;break}return t.next=6,a.json();case 6:s=t.sent,console.log(s),e.setState({movies:s.Search}),console.log("Harry",s);case 10:case"end":return t.stop()}}),t)}))),e.handleSearch=function(){},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.fetchMovie()}},{key:"render",value:function(){var e=this;return Object(I.jsxs)(m.a,{id:"navbar",collapseOnSelect:!0,expand:"lg",children:[Object(I.jsx)(m.a.Brand,{children:Object(I.jsx)("img",{src:g,id:"logo",alt:"logo"})}),Object(I.jsx)(m.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(I.jsxs)(m.a.Collapse,{id:"responsive-navbar-nav",children:[Object(I.jsxs)(x.a,{className:"me-auto",children:[Object(I.jsx)(x.a.Link,{children:"Home"}),Object(I.jsx)(x.a.Link,{children:"Tv Shows"}),Object(I.jsx)(x.a.Link,{children:"Movies"}),Object(I.jsx)(x.a.Link,{children:"Recently Added"}),Object(I.jsx)(x.a.Link,{children:"My list"})]}),Object(I.jsxs)(x.a,{id:"interaction",children:[Object(I.jsxs)(p.a,{inline:!0,children:[Object(I.jsx)(O.a,{type:"text",placeholder:"Search",className:"mr-sm-2",value:this.state.query,onChange:function(t){return e.setState({query:t.target.value})}}),Object(I.jsx)(N.b,{})]}),Object(I.jsx)(x.a.Link,{className:"nav-link-c",children:"KIDS"}),Object(I.jsx)(w.a,{}),Object(I.jsxs)(v.a,{title:Object(I.jsx)("img",{src:y,id:"avatar",alt:"avatar"}),id:"collasible-nav-dropdown",children:[Object(I.jsx)(v.a.Item,{href:"#action/3.1",children:"Action"}),Object(I.jsx)(v.a.Item,{href:"#action/3.2",children:"Another action"}),Object(I.jsx)(v.a.Item,{href:"#action/3.3",children:"Something"}),Object(I.jsx)(v.a.Divider,{}),Object(I.jsx)(v.a.Item,{href:"#action/3.4",children:"Separated link"})]}),Object(I.jsx)(f.a,{onClick:function(){return e.props.history.push("/registration")},className:"btn btn-dark",id:"register-btn",children:"Register"})]})]})]})}}]),a}(s.Component),M=Object(C.e)(k),S=a(36),T=a(76),A=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(I.jsxs)("div",{className:"header__wrap",id:"header",children:[Object(I.jsxs)("div",{className:"header__inner",children:[Object(I.jsx)("h2",{children:"Tv Shows"}),Object(I.jsxs)(S.a,{children:[Object(I.jsx)(S.a.Toggle,{id:"dropdown-basic",className:"dropdown__h",children:"Genres"}),Object(I.jsxs)(S.a.Menu,{children:[Object(I.jsx)(S.a.Item,{href:"#/action-1",children:"Action"}),Object(I.jsx)(S.a.Item,{href:"#/action-2",children:"Another action"}),Object(I.jsx)(S.a.Item,{href:"#/action-3",children:"Something else"})]})]})]}),Object(I.jsxs)("div",{className:"header__inner",children:[Object(I.jsx)(N.a,{className:"h__icon"}),Object(I.jsx)(T.a,{className:"h__icon"})]})]})}}]),a}(s.Component),L=a(98),D=a(99),z=a(71),R=a(51),q=function(){return Object(I.jsx)("footer",{className:"mt-5",id:"color1",children:Object(I.jsx)(L.a,{children:Object(I.jsxs)(D.a,{children:[Object(I.jsxs)(z.a,{xs:12,className:"mb-2",children:[Object(I.jsx)(R.a,{className:"mr-2"}),Object(I.jsx)(R.b,{className:"mr-2"}),Object(I.jsx)(R.c,{className:"mr-2"}),Object(I.jsx)(R.d,{})]}),Object(I.jsxs)(z.a,{xs:6,lg:3,children:[Object(I.jsx)("p",{className:"text-nowrap",children:"Audio and Subtitles"}),Object(I.jsx)("p",{className:"text-nowrap",children:"Media Center"}),Object(I.jsx)("p",{className:"text-nowrap",children:"Privacy"}),Object(I.jsx)("p",{className:"text-nowrap",children:"Contact us"})]}),Object(I.jsxs)(z.a,{xs:6,lg:3,children:[Object(I.jsx)("p",{className:"text-nowrap",children:"Audio Description"}),Object(I.jsx)("p",{className:"text-nowrap",children:"Investor Relations"}),Object(I.jsx)("p",{className:"text-nowrap",children:"Legal Notices"})]}),Object(I.jsxs)(z.a,{xs:6,lg:3,children:[Object(I.jsx)("p",{className:"text-nowrap",children:"Help Center"}),Object(I.jsx)("p",{className:"text-nowrap",children:"Jobs"}),Object(I.jsx)("p",{className:"text-nowrap",children:"Cookie Preferences"})]}),Object(I.jsxs)(z.a,{xs:6,lg:3,children:[Object(I.jsx)("p",{className:"text-nowrap",children:"Gift Cards"}),Object(I.jsx)("p",{className:"text-nowrap",children:"Terms of Use"}),Object(I.jsx)("p",{className:"text-nowrap",children:"Corporate Information"})]}),Object(I.jsx)(z.a,{xs:12,className:"mb-2 my-4",children:Object(I.jsx)("a",{className:"service-code",href:"/",children:"Service Code"})}),Object(I.jsx)(z.a,{xs:12,className:"mb-2",children:Object(I.jsx)("p",{id:"copyright"})})]})})})},J=a(104),E=a(38),F=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(I.jsx)("div",{className:"col-md-2 col-lg-2 movie-container mx-0 px-1",children:this.props.movie.Title&&Object(I.jsx)(I.Fragment,{children:Object(I.jsx)(E.b,{to:"/details/"+this.props.movie.imdbID,children:Object(I.jsx)("img",{src:this.props.movie.Poster,className:"img-fluid carousel-img",alt:"Movie Here"})})})})}}]),a}(s.Component),P=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(I.jsxs)(J.a,{interval:null,className:"carousel-fixed",children:[Object(I.jsx)(J.a.Item,{children:Object(I.jsxs)("div",{className:"row",children:[Object(I.jsx)(F,{movie:this.props.moviesArray[0]}),Object(I.jsx)(F,{movie:this.props.moviesArray[1]}),Object(I.jsx)(F,{movie:this.props.moviesArray[2]}),Object(I.jsx)(F,{movie:this.props.moviesArray[3]}),Object(I.jsx)(F,{movie:this.props.moviesArray[4]}),Object(I.jsx)(F,{movie:this.props.moviesArray[5]})]})}),Object(I.jsx)(J.a.Item,{children:Object(I.jsxs)("div",{className:"row",children:[Object(I.jsx)(F,{movie:this.props.moviesArray[6]}),Object(I.jsx)(F,{movie:this.props.moviesArray[7]}),Object(I.jsx)(F,{movie:this.props.moviesArray[8]}),Object(I.jsx)(F,{movie:this.props.moviesArray[9]}),Object(I.jsx)(F,{movie:this.props.moviesArray[1]}),Object(I.jsx)(F,{movie:this.props.moviesArray[0]})]})})]})}}]),a}(s.Component),G=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(I.jsxs)("div",{className:"m-3",children:[Object(I.jsx)("h3",{className:"text-light mt-2 mb-2",children:this.props.sectionTitle}),Object(I.jsx)(P,{moviesArray:this.props.moviesFetch.Search})]})}}]),a}(s.Component),_=a(100),Y=function(){return Object(I.jsx)(_.a,{animation:"border",variant:"light"})},B=a(101),V=function(){return Object(I.jsx)(B.a,{variant:"danger",children:"Sorry, we got an error!"})},U=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(h.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,isError:!1,sections:[{title:"Mission Impossible",query:"mission",movies:[]},{title:"Love & Romance",query:"love",movies:[]},{title:"Robots",query:"robot",movies:[]}]},e.componentDidMount=Object(j.a)(l.a.mark((function t(){var a,s,n,r,c,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("http://www.omdbapi.com/?apikey=f7c25f33&s=".concat(e.state.sections[0].query));case 3:return a=t.sent,t.next=6,fetch("http://www.omdbapi.com/?apikey=f7c25f33&s=".concat(e.state.sections[1].query));case 6:return s=t.sent,t.next=9,fetch("http://www.omdbapi.com/?apikey=f7c25f33&s=".concat(e.state.sections[2].query));case 9:return n=t.sent,t.next=12,Promise.all([a,s,n]).then((function(e){return Promise.all(e.map((function(e){return e.json()})))}));case 12:for(c in r=t.sent,e.state.sections)(o=Object(i.a)({},e.state.sections))[c].movies=r[c];e.setState({isLoading:!1,sections:o}),t.next=21;break;case 17:t.prev=17,t.t0=t.catch(0),console.log(t.t0),e.setState({isError:!0,isLoading:!1});case 21:case"end":return t.stop()}}),t,null,[[0,17]])}))),e}return Object(d.a)(a,[{key:"render",value:function(){return!0===this.state.isLoading||this.state.isError?Object(I.jsx)(I.Fragment,{children:this.state.isError?Object(I.jsx)(V,{}):Object(I.jsx)(Y,{})}):Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(G,{sectionTitle:this.state.sections[0].title,moviesFetch:this.state.sections[0].movies}),Object(I.jsx)(G,{sectionTitle:this.state.sections[1].title,moviesFetch:this.state.sections[1].movies}),Object(I.jsx)(G,{sectionTitle:this.state.sections[2].title,moviesFetch:this.state.sections[2].movies})]})}}]),a}(s.Component),W=a(63),Q=a(102),X=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(h.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={body:{comment:"",rate:1,elementId:e.props.selectedMovie.imdbID},isLoading:!1},e.handleSubmit=function(t){t.preventDefault(),alert("Comments added successfully"),e.setState({isLoading:!0}),setTimeout((function(){e.props.history.push("/")}),2e3);try{fetch("https://striveschool-api.herokuapp.com/api/comments/",{method:"POST",body:JSON.stringify(e.state.body),headers:{"Content-type":"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTMyODZiYTJjMzgzNjAwMTU4NWE3MTgiLCJpYXQiOjE2MzA3MDEyNDMsImV4cCI6MTYzMTkxMDg0M30.4no578CvSqcpn4tFJIiKRdSs0C2awl8cutLVaCS9azo"}})}catch(a){}},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)("h5",{children:"Add new comment"}),Object(I.jsxs)(p.a,{onSubmit:this.handleSubmit,children:[Object(I.jsxs)(p.a.Group,{className:"mb-3",controlId:"comment",children:[Object(I.jsx)(p.a.Label,{children:"Your comment:"}),Object(I.jsx)(p.a.Control,{as:"textarea",rows:3,value:this.state.body.comment,onChange:function(t){e.setState({body:Object(i.a)(Object(i.a)({},e.state.body),{},{comment:t.target.value})})}})]}),Object(I.jsxs)(p.a.Group,{className:"my-3",controlId:"rate",children:[Object(I.jsx)(p.a.Label,{children:"Your rating"}),Object(I.jsxs)(p.a.Control,{as:"select",value:this.state.body.rate,onChange:function(t){e.setState({body:Object(i.a)(Object(i.a)({},e.state.body),{},{rate:t.target.value})})},children:[Object(I.jsx)("option",{children:"1"}),Object(I.jsx)("option",{children:"2"}),Object(I.jsx)("option",{children:"3"}),Object(I.jsx)("option",{children:"4"}),Object(I.jsx)("option",{children:"5"})]})]}),Object(I.jsxs)(f.a,{variant:"primary",type:"submit",children:[this.state.isLoading&&Object(I.jsx)(_.a,{animation:"border",variant:"light",style:{width:"20px",height:"20px",marginRight:"5px"}}),"Add comment"]})]})]})}}]),a}(s.Component),H=Object(C.e)(X),Z=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(h.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={comments:[]},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(j.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://striveschool-api.herokuapp.com/api/comments/"+this.props.selectedMovie,{headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTMyODZiYTJjMzgzNjAwMTU4NWE3MTgiLCJpYXQiOjE2MzA3MDEyNDMsImV4cCI6MTYzMTkxMDg0M30.4no578CvSqcpn4tFJIiKRdSs0C2awl8cutLVaCS9azo"}});case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,this.setState({comments:a}),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)("h5",{children:"Comments:"}),Object(I.jsx)("ul",{children:this.state.comments.map((function(e){return Object(I.jsxs)("li",{children:[e.comment,Object(I.jsxs)("i",{children:["(Rate: ",e.rate," / Date: ",e.createdAt,")"]})]})}))})]})}}]),a}(s.Component),K=function(e){var t=e.match,a=Object(s.useState)(null),n=Object(W.a)(a,2),r=n[0],c=n[1],i=Object(s.useState)([]),o=Object(W.a)(i,2),h=o[0],d=o[1],b=Object(s.useState)(!1),u=Object(W.a)(b,2),m=u[0],x=u[1],p=function(){x(!m)};return Object(s.useEffect)((function(){(function(){var e=Object(j.a)(l.a.mark((function e(){var a,s,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a=t.params.imdbID)){e.next=9;break}return e.next=4,fetch("http://www.omdbapi.com/?apikey=f7c25f33&i="+a);case 4:return s=e.sent,e.next=7,s.json();case 7:n=e.sent,c(n);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t.params.imdbID]),Object(s.useEffect)((function(){(function(){var e=Object(j.a)(l.a.mark((function e(){var a,s,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a=t.params.imdbID)){e.next=9;break}return e.next=4,fetch("https://striveschool-api.herokuapp.com/api/comments/"+a,{headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNzMzNGIzNTgxNzAwMTVjMjI3NWIiLCJpYXQiOjE2Mjk5NzkzNzUsImV4cCI6MTYzMTE4ODk3NX0.8oPWQmDkjhZppxF1O_JjqR5vYAfRMCIn_4zUs7p9_OM"}});case 4:return s=e.sent,e.next=7,s.json();case 7:n=e.sent,d(n);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t.params.imdbID]),Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)("h2",{className:"text-light text-center my-5",children:"Movie Details..."}),r&&Object(I.jsxs)("div",{className:"text-center text-light mb-5",children:[Object(I.jsx)("img",{src:r.Poster,alt:"movie poster",onClick:p}),Object(I.jsxs)("h4",{className:"mt-3",children:[r.Title," ( ",r.Actors," )"]}),Object(I.jsx)("div",{children:Object(I.jsxs)("p",{children:[r.Released," - ",r.Runtime]})}),Object(I.jsx)("p",{children:r.Plot}),Object(I.jsxs)("ul",{style:{listStyle:"none"},children:[Object(I.jsx)("h5",{style:{textDecoration:"underline"},children:"Comments"}),h.map((function(e){return Object(I.jsx)("li",{children:e.comment},e._id)}))]})]}),r&&Object(I.jsxs)(Q.a,{show:m,onHide:function(){return p()},children:[Object(I.jsxs)(Q.a.Header,{closeButton:!0,children:[r.Title," (",Object(I.jsx)("i",{children:r.Year}),")"]}),Object(I.jsxs)(Q.a.Body,{children:[Object(I.jsx)(Z,{selectedMovie:r.imdbID}),Object(I.jsx)(H,{selectedMovie:r})]})]})]})},$=a(53),ee=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(h.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={registration:{name:"",surname:"",email:"",password:"",conformPassword:"",dob:"",address:"",city:"",code:""},isLoading:!1},e.handleInput=function(t,a){e.setState({registration:Object(i.a)(Object(i.a)({},e.state.registration),{},Object($.a)({},t,a))})},e.isButtonClickable=function(){var t=!1;return e.state.registration.name.length>=2&&e.state.registration.surname.length>=3&&e.state.registration.password.length>=8&&5===e.state.registration.code.length&&e.state.registration.password.match(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/)&&e.state.registration.password===e.state.registration.conformPassword&&(t=!0),t},e.handleRegistration=function(t){t.preventDefault(),e.setState({isLoading:!0}),setTimeout((function(){alert("Registration Complete")}),500),setTimeout((function(){e.props.history.push("/")}),2e3)},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)("h2",{className:"text-light text-center",children:"Registration Form"}),Object(I.jsx)(L.a,{children:Object(I.jsx)(D.a,{className:"justify-content-center",children:Object(I.jsxs)(p.a,{className:"w-50 text-light",onSubmit:this.handleRegistration,children:[Object(I.jsxs)(p.a.Group,{className:"my-3",children:[Object(I.jsx)(p.a.Label,{children:"Name"}),Object(I.jsx)(p.a.Control,{type:"text",required:!0,placeholder:"Enter your name",onChange:function(t){return e.handleInput("name",t.target.value)},value:this.state.registration.name}),Object(I.jsx)(p.a.Text,{className:"text-muted",children:"Name should be at least 2 chars long."})]}),Object(I.jsxs)(p.a.Group,{className:"my-3",children:[Object(I.jsx)(p.a.Label,{children:"Surname"}),Object(I.jsx)(p.a.Control,{type:"text",required:!0,placeholder:"Enter your surname",onChange:function(t){return e.handleInput("surname",t.target.value)},value:this.state.registration.surname}),Object(I.jsx)(p.a.Text,{className:"text-muted",children:"Surname should be at least 3 chars long."})]}),Object(I.jsxs)(p.a.Group,{className:"my-3",children:[Object(I.jsx)(p.a.Label,{children:"Email address"}),Object(I.jsx)(p.a.Control,{type:"email",required:!0,placeholder:"name@example.com",onChange:function(t){return e.handleInput("email",t.target.value)},value:this.state.registration.email}),Object(I.jsx)(p.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(I.jsxs)(p.a.Group,{className:"my-3",children:[Object(I.jsx)(p.a.Label,{children:"Password"}),Object(I.jsx)(p.a.Control,{type:"password",required:!0,placeholder:"Password",onChange:function(t){return e.handleInput("password",t.target.value)},value:this.state.registration.password}),Object(I.jsx)(p.a.Text,{className:"text-muted",children:"Should contain at least 8 chars, 1 digit, 1 letter"})]}),Object(I.jsxs)(p.a.Group,{className:"my-3",children:[Object(I.jsx)(p.a.Label,{children:" Conform Password"}),Object(I.jsx)(p.a.Control,{type:"password",required:!0,placeholder:"Conform Password",onChange:function(t){return e.handleInput("conformPassword",t.target.value)},value:this.state.registration.conformPassword}),Object(I.jsx)(p.a.Text,{className:"text-muted",children:"Repeat password"})]}),Object(I.jsxs)(p.a.Group,{className:"my-3",children:[Object(I.jsx)(p.a.Label,{children:"Date of birth"}),Object(I.jsx)(p.a.Control,{type:"date",required:!0,placeholder:"Enter your date of birth",onChange:function(t){return e.handleInput("dob",t.target.value)},value:this.state.registration.dob}),Object(I.jsx)(p.a.Text,{className:"text-muted",children:"Required*"})]}),Object(I.jsxs)(p.a.Group,{className:"my-3",children:[Object(I.jsx)(p.a.Label,{children:"Street Address"}),Object(I.jsx)(p.a.Control,{type:"text",required:!0,placeholder:"Enter your address",onChange:function(t){return e.handleInput("address",t.target.value)},value:this.state.registration.address}),Object(I.jsx)(p.a.Text,{className:"text-muted",children:"Required*"})]}),Object(I.jsxs)(p.a.Group,{className:"my-3",children:[Object(I.jsx)(p.a.Label,{children:"City"}),Object(I.jsx)(p.a.Control,{type:"text",required:!0,placeholder:"Enter your surname",onChange:function(t){return e.handleInput("city",t.target.value)},value:this.state.registration.city}),Object(I.jsx)(p.a.Text,{className:"text-muted",children:"Required*"})]}),Object(I.jsxs)(p.a.Group,{className:"my-3",children:[Object(I.jsx)(p.a.Label,{children:"Postal code"}),Object(I.jsx)(p.a.Control,{type:"number",required:!0,placeholder:"Enter your postal code",onChange:function(t){return e.handleInput("code",t.target.value)},value:this.state.registration.code}),Object(I.jsx)(p.a.Text,{className:"text-muted",children:"Should be numeric 5 digits"})]}),Object(I.jsxs)(f.a,{variant:"primary",type:"submit",disabled:!this.isButtonClickable(),children:[this.state.isLoading&&Object(I.jsx)(_.a,{animation:"border",variant:"light",style:{width:"20px",height:"20px",marginRight:"5px"}}),"Submit"]})]})})})]})}}]),a}(s.Component);var te=function(){return Object(I.jsx)(I.Fragment,{children:Object(I.jsx)(L.a,{fluid:!0,children:Object(I.jsxs)(E.a,{children:[Object(I.jsx)(M,{}),Object(I.jsx)(A,{}),Object(I.jsx)(C.a,{path:"/",exact:!0,component:U}),Object(I.jsx)(C.a,{path:"/registration",exact:!0,component:ee}),Object(I.jsx)(C.a,{path:"/details/:imdbID",exact:!0,render:function(e){return Object(I.jsx)(K,Object(i.a)(Object(i.a)({},e),{},{title:"Bimal"}))}}),Object(I.jsx)(q,{})]})})})},ae=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,107)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),s(e),n(e),r(e),c(e)}))};c.a.render(Object(I.jsx)(n.a.StrictMode,{children:Object(I.jsx)(te,{})}),document.getElementById("root")),ae()}},[[92,1,2]]]);
//# sourceMappingURL=main.8af28576.chunk.js.map