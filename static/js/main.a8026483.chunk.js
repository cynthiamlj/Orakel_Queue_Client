(this.webpackJsonpreact_app=this.webpackJsonpreact_app||[]).push([[0],{101:function(e,t,n){},103:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(25),o=n.n(i);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=n(41),s=n(42),u=n.n(s),c=n(59),d=n(11),m=n(19),g=n(23),h=n(22),p=n(6),f=(n(76),n(105)),v=n(15),b=function(e){var t,a=r.a.createElement(v.a.Link,null,r.a.createElement("button",{style:{background:"none",border:"none",color:"white",width:"100px",height:"40px"},onClick:e.handleLoginClick},r.a.createElement("strong",null,"Logg Inn"))),i=r.a.createElement(v.a.Link,null,r.a.createElement("button",{style:{background:"none",border:"none",color:"white",width:"100px",height:"40px"},onClick:e.handleLogoutClick},r.a.createElement("strong",null,"Logg Ut"))),o=e.user?i:a,l=e.user?(t=e.user.username,r.a.createElement("p",{style:{color:"white",width:"150px",height:"20px",fontWeight:"bold"}},"Welcome ",t)):null;return r.a.createElement(f.a,{bg:"primary",variant:"dark"},r.a.createElement(v.a,{className:"container-fluid"},r.a.createElement(v.a.Item,null,r.a.createElement(f.a.Brand,{href:"#home"},r.a.createElement("img",{alt:"",src:n(81),width:"150",height:"100",className:"d-inline-block align-top"})," ")),r.a.createElement(v.a.Item,null,r.a.createElement("h2",{style:{color:"white"}},r.a.createElement("strong",null,"Orakel - K\xf8system"))),r.a.createElement(v.a.Item,{className:"ml-auto"},l,o)))},E=n(34),y=n.n(E),k=function(e){return r.a.createElement(f.a,{fixed:"bottom",bg:"primary",variant:"dark"},r.a.createElement(v.a,{className:"container-fluid"},r.a.createElement(v.a.Item,null,r.a.createElement("button",{style:{background:"none",border:"none",color:"white",width:"300",height:"50px"},onClick:function(){var e=document.createElement("div");e.innerHTML="<a href='https://github.com/FredrikPedersen/Orakel_Queue_System_Client/issues' target='_blank'>GitHub Repo</a>",y()({title:"Feil eller Mangel rapportering",text:"Orakels k\xf8system er et fritidsprosjekt som er bygget og vedlikeholdt av en person. Det er derfor en viss fare for bugs og feil. Disse kan rapporteres ved \xe5 legge inn en issue p\xe5 GitHub-repoet, eller ved \xe5 ta kontakt med Fredrik Pedersen. Vi setter ogs\xe5 pris p\xe5 \xf8nsker om tilleggsfunksjonalitet :) ",content:e,icon:"success",buttons:!0})}},r.a.createElement("strong",null,"Rapporter feil eller mangler!"))),r.a.createElement(v.a.Item,null,r.a.createElement("h2",{style:{color:"white"}},r.a.createElement("i",null,"Versjon: ",e.versionNumber)))))},w=n(27),H=n(35),C=function(e,t){return Object(w.a)(Object(w.a)({},e),t)},j=function(e,t,n){var a=C(n[t],{value:e.target.value,valid:O(e.target.value,n[t].validation),touched:!0}),r=C(n,Object(H.a)({},t,a)),i=!0;for(var o in r)i=r[o].valid&&i;return{form:r,formIsValid:i}},O=function(e,t){var n=!0;return!t||(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),n)},N=function(e){var t=null;switch(e.inputType){case"input":t=r.a.createElement("input",Object.assign({className:"form-control ml-2 mr-2 mt-2",value:e.value,onChange:e.changed},e.inputConfig));break;case"select":t=r.a.createElement("select",{className:"form-control ml-2 mr-2 mt-2",value:e.value,onChange:e.changed},e.inputConfig.options.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.displayValue)})));break;default:t=r.a.createElement("input",{className:"form-control"})}return r.a.createElement(r.a.Fragment,null,t)},D=n(30),V=function(e){return r.a.createElement("button",{disabled:e.disabled,className:e.styling,onClick:e.clicked},e.children)},x=n(66),I=function(e){return r.a.createElement(D.a,Object.assign({},e,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),r.a.createElement(D.a.Header,{closeButton:!0},r.a.createElement(D.a.Title,{id:"contained-modal-title-vcenter"},"Innlogging")),r.a.createElement(D.a.Body,{className:"show-grid"},r.a.createElement(x.a,null,e.form,r.a.createElement("p",{className:"mt-4"},r.a.createElement("strong",null,"Denne innloggingssiden er kun ment for Orakler p\xe5 jobb. Er du student og skal stelle deg i k\xf8 trenger du IKKE \xe5 logge inn her :)")))),r.a.createElement(D.a.Footer,null,r.a.createElement(V,{styling:"btn btn-danger",clicked:e.onHide},"Lukk"),r.a.createElement(V,{btnType:"Success",styling:"btn btn-primary",disabled:!e.formIsValid,clicked:e.loginHandler},"Logg Inn")))},L=n(67),S=n.n(L).a.create({baseURL:"https://orakelqueueservice.herokuapp.com/api/"}),T=new function e(){var t=this;Object(d.a)(this,e),this.login=function(e,t){return S.post("auth/signin",{username:e,password:t}).then((function(e){return e.data.token&&localStorage.setItem("user",JSON.stringify(e.data)),e.data}))},this.logout=function(){localStorage.removeItem("user")},this.register=function(e,t,n){return S.post("auth/signup",{username:e,email:t,password:n})},this.isUserTokenValid=function(){var e=t.getCurrentUser();return!(!e||!e.token)&&S.post("auth/isTokenValid",e.token).then((function(e){return e.data}))},this.getCurrentUser=function(){return JSON.parse(localStorage.getItem("user"))}},Q=function(e){Object(g.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={form:{username:{inputType:"input",inputConfig:{type:"text",placeholder:"Brukernavn"},value:"",label:"Brukernavn",validation:{required:!0,maxLength:30},valid:!1,touched:!1},password:{inputType:"input",inputConfig:{type:"password",placeholder:"Passord"},value:"",label:"Passord",validation:{required:!0,maxLength:150},valid:!1,touched:!1}},formIsValid:!1,loginFailed:!1,loginErrorMessage:""},e.loginHandler=function(t){var n={};for(var a in e.state.form)n[a]=e.state.form[a].value;e.postLoginData(n)},e.postLoginData=function(t){T.login(t.username,t.password).then((function(){e.props.onHide();var t=Object(w.a)({},e.state.form);t.username.value="",t.password.value="",e.setState({loginForm:t}),e.props.loginHandler()}),(function(e){console.log(e)}))},e.inputChangedHandler=function(t,n){e.setState(j(t,n,e.state.form))},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this,t=[];for(var n in this.state.form)t.push({id:n,config:this.state.form[n]});var a=r.a.createElement("form",{className:"form-inline"},t.map((function(t){return r.a.createElement(N,{key:t.id,inputType:t.config.inputType,inputConfig:t.config.inputConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,label:t.config.label,changed:function(n){return e.inputChangedHandler(n,t.id)}})})),this.state.loginFailed?r.a.createElement("p",{className:"mt-4",style:{color:"red"}},r.a.createElement("strong",null,this.state.loginErrorMessage)):null);return r.a.createElement(I,{form:a,formIsValid:this.state.formIsValid,loginHandler:this.loginHandler,show:this.props.show,onHide:this.props.onHide})}}]),n}(a.Component),F=function(e){Object(g.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={showModal:!1},e.closeModalHandler=function(){e.setState({showModal:!1})},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{handleLoginClick:function(){return e.setState({showModal:!0})},handleLogoutClick:this.props.logoutHandler,user:this.props.user}),r.a.createElement("main",null,r.a.createElement(Q,{show:this.state.showModal,onHide:this.closeModalHandler,loginHandler:this.props.loginHandler}),this.props.children),r.a.createElement(k,{versionNumber:this.props.versionNumber}))}}]),n}(a.Component),q=function(){return r.a.createElement("div",{className:"spinner-border text-primary"})},M=function(e){var t=[],n=r.a.createElement(r.a.Fragment,null,r.a.createElement("th",{key:"queueNumberHeader",scope:"col"},"# I k\xf8"),r.a.createElement("th",{key:"nameHeader",scope:"col"},"Navn"),r.a.createElement("th",{key:"subjectHeader",scope:"col"},"Emne"),r.a.createElement("th",{key:"discordHeader",scope:"col"},"Discord")),a=e.user?r.a.createElement("th",{key:"actionsHeader",scope:"col"},"Handlinger"):null;t.push(n),t.push(a);for(var i=r.a.createElement("thead",{key:"tableHead",className:"thead-dark"},r.a.createElement("tr",null,t)),o=[],l=function(t){var n="row"+t,a=[];a.push(r.a.createElement("td",{key:"entry"+t,id:"entry"+t},t+1)),a.push(r.a.createElement("td",{key:"name"+t,id:"name"+t},e.entities[t].name)),a.push(r.a.createElement("td",{key:"subject"+t,id:"subject"+t},e.entities[t].subject)),a.push(r.a.createElement("td",{key:"discord"+t,id:"discord"+t},e.entities[t].digitalConsultation?"Nei":"Ja"));var i=r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"btn btn-success",onClick:function(){return e.confirmDoneOnClick(e.entities[t])}},"Ferdig"),r.a.createElement("button",{className:"btn btn-danger ml-2",onClick:function(){return e.deleteOnClick(e.entities[t])}},"Slett"));e.user&&(i=e.user.roles.includes("ROLE_ADMIN")?i:null,a.push(r.a.createElement("td",{key:"actions"+t,id:"action"+t},i))),o.push(r.a.createElement("tr",{key:t,id:n},a))},s=0;s<e.entities.length;s++)l(s);var u=r.a.createElement("tbody",null,o);return r.a.createElement("table",{className:"table table-striped mb-4"},i,u)};function B(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.token?{Authorization:"Bearer "+e.token}:{}}var A=new function e(){var t=this;Object(d.a)(this,e),this.getQueueData=function(){return S.get("queue/").then((function(e){return e.data})).catch((function(e){return t.errorHandler(e),e}))},this.postQueueEntry=function(e){return S.post("queue/",e).then((function(e){console.log(e)})).catch((function(e){t.errorHandler(e)}))},this.deleteQueueEntryById=function(e){return S.delete("queue/"+e,{headers:B()}).catch((function(e){t.errorHandler(e)}))},this.confirmDone=function(e){return S.post("queue/confirmdone/"+e,null,{headers:B()}).catch((function(e){t.errorHandler(e)}))},this.getSubjects=function(){return S.get("subjects/").then((function(e){return e.data})).catch((function(e){t.errorHandler(e)}))},this.errorHandler=function(e){e.response.data.message&&(T.logout(),y()({title:"Invalid login token",text:"Your login session has expired, or something else went wrong. Please refresh the page and login again. A better user experience in regards to this is in the works, but was not prioritized for the initial production build.",icon:"warning",buttons:!0}))}},U=function(e){Object(g.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={queueData:[],loading:!0,form:{name:{inputType:"input",inputConfig:{type:"text",placeholder:"Fornavn"},value:"",label:"Navn",validation:{required:!0,minLength:3,maxLength:30},valid:!1,touched:!1},subject:{inputType:"select",inputConfig:{options:[]},value:"Programmering",label:"Velg Emne",validation:{},valid:!0},year:{inputType:"select",inputConfig:{options:[{value:1,displayValue:"1. \xe5r"},{value:2,displayValue:"2. \xe5r"},{value:3,displayValue:"3. \xe5r"}]},value:1,label:"\xc5rstrinn",validation:{},valid:!0},discord:{inputType:"select",inputConfig:{options:[{value:0,displayValue:"Fysisk Veiledning (Datatorget)"},{value:1,displayValue:"Digital Veiledning (Discord)"}]},value:0,label:"Veiledningsform",validation:{},valid:!0}},formIsValid:!1},e.getQueueData=function(){A.getQueueData().then((function(t){console.log(t),e.setState({queueData:t,loading:!1})}))},e.postNewQueueEntry=function(t){var n={name:t.name,subject:t.subject,digitalConsultation:t.discord,studyYear:t.year};A.postQueueEntry(n).then((function(){e.getQueueData()}))},e.deleteQueueEntry=function(t){A.deleteQueueEntryById(t.id).then((function(){e.getQueueData()}))},e.confirmDoneQueueEntry=function(t){A.confirmDone(t.id).then((function(){e.getQueueData()}))},e.inputChangedHandler=function(t,n){e.setState(j(t,n,e.state.form))},e.registrationHandler=function(t){t.preventDefault();var n={};for(var a in e.state.form)n[a]=e.state.form[a].value;e.postNewQueueEntry(n)},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.getQueueData();var e=Object(w.a)({},this.state.form);A.getSubjects().then((function(t){t.forEach((function(t){e.subject.inputConfig.options.push({value:t,displayValue:t})}))})),this.setState({form:e})}},{key:"render",value:function(){var e=this,t=this.state.loading?r.a.createElement(q,null):r.a.createElement(M,{entities:this.state.queueData,user:this.props.user,deleteOnClick:this.deleteQueueEntry,confirmDoneOnClick:this.confirmDoneQueueEntry}),n=[];for(var a in this.state.form)n.push({id:a,config:this.state.form[a]});var i=r.a.createElement("form",{onSubmit:this.registrationHandler,className:"form-inline mt-3"},n.map((function(t){return r.a.createElement(N,{key:t.id,inputType:t.config.inputType,inputConfig:t.config.inputConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,label:t.config.label,changed:function(n){return e.inputChangedHandler(n,t.id)}})})),r.a.createElement(V,{btnType:"Success",styling:"ml-2 mr-2 mt-2 btn btn-primary",disabled:!this.state.formIsValid},"Registrer"));return r.a.createElement(r.a.Fragment,null,t,r.a.createElement("h1",{className:"text-left ml-2 mr-2 mt-5"},"K\xf8 registrering: "),i)}}]),n}(a.Component),_=function(e){Object(g.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={user:null,applicationVersionNumber:"BETA: 0.1.0"},e.loginHandler=function(){var t=T.getCurrentUser();t&&e.setState({user:t})},e.logOutHandler=function(){T.logout(),e.setState({user:null})},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=Object(c.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.isUserTokenValid();case 2:!0===e.sent?this.loginHandler():this.logOutHandler();case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=r.a.createElement(p.d,null,r.a.createElement(p.b,{path:"/",exact:!0,render:function(){return r.a.createElement(U,{user:e.state.user})}}),r.a.createElement(p.a,{to:"/"}));return r.a.createElement("div",{className:"App"},r.a.createElement(F,{user:this.state.user,loginHandler:this.loginHandler,logoutHandler:this.logOutHandler,versionNumber:this.state.applicationVersionNumber},t))}}]),n}(a.Component),J=Object(p.g)(_),P=(n(101),n(102),r.a.createElement(l.a,null,r.a.createElement(J,null)));o.a.render(P,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},70:function(e,t,n){e.exports=n(103)},76:function(e,t,n){},81:function(e,t,n){e.exports=n.p+"static/media/oslomethvit.2c306d99.png"}},[[70,1,2]]]);
//# sourceMappingURL=main.a8026483.chunk.js.map