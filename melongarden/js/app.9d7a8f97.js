(function(e){function t(t){for(var r,o,i=t[0],u=t[1],c=t[2],l=0,h=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&h.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(h.length)h.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(s.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a={app:0},s=[];function i(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"35b1210e","chunk-2489820c":"24c34a9d","chunk-4a48deef":"d1c98312","chunk-a27bbfc0":"9b781d57","chunk-2d212f35":"05cdedcd","chunk-2d21a3d2":"d3452ee3"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-4a48deef":1,"chunk-a27bbfc0":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-2489820c":"31d6cfe0","chunk-4a48deef":"e6134fe8","chunk-a27bbfc0":"722af837","chunk-2d212f35":"31d6cfe0","chunk-2d21a3d2":"31d6cfe0"}[e]+".css",a=u.p+r,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var c=s[i],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===a))return t()}var h=document.getElementsByTagName("style");for(i=0;i<h.length;i++){c=h[i],l=c.getAttribute("data-href");if(l===r||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete o[e],d.parentNode.removeChild(d),n(s)},d.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=s);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var h=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;h.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",h.name="ChunkLoadError",h.type=r,h.request=o,n[1](h)}a[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/melongarden/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var h=0;h<c.length;h++)t(c[h]);var d=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},2657:function(e,t,n){"use strict";n.d(t,"b",(function(){return v}));var r=n("b85c"),o=n("bee2"),a=n("d4ec"),s=(n("99af"),n("caad"),n("2532"),n("a434"),n("d3b7"),0),i=100,u=233,c=function e(t,n){Object(a["a"])(this,e),this.userId="",this.userName="<UnknownUserName>",this.userAvatarUrl="",this.userId="".concat(s++),this.userName=t,this.userAvatarUrl=n},l=function(){function e(){Object(a["a"])(this,e),this.userList=[],this.loginUserDictionary={}}return Object(o["a"])(e,[{key:"register",value:function(e,t){this.userList.push(new c(e,t))}},{key:"login",value:function(e){var t,n=Object(r["a"])(this.userList);try{for(n.s();!(t=n.n()).done;){var o=t.value;if(o.userId===e)return console.log("".concat(e,"(").concat(o.userName,") has login.")),this.loginUserDictionary[e]="".concat(i++),this.loginUserDictionary[e]}}catch(a){n.e(a)}finally{n.f()}throw new Error("Unregister user id ".concat(e))}},{key:"getUserIdByName",value:function(e){var t,n=Object(r["a"])(this.userList);try{for(n.s();!(t=n.n()).done;){var o=t.value;if(o.userName===e)return o.userId}}catch(a){n.e(a)}finally{n.f()}return"<UnknownUserId>"}},{key:"getLoginUserIdByToken",value:function(e){for(var t in this.loginUserDictionary)if(this.loginUserDictionary[t]===e)return t;return""}},{key:"logout",value:function(e){var t=this.getLoginUserIdByToken(e);""!==t&&delete this.loginUserDictionary[t]}},{key:"getUser",value:function(e){var t,n=Object(r["a"])(this.userList);try{for(n.s();!(t=n.n()).done;){var o=t.value;if(o.userId===e)return o}}catch(a){n.e(a)}finally{n.f()}return null}},{key:"getUserByToken",value:function(e){return this.getUser(this.getLoginUserIdByToken(e))}},{key:"getUserNum",value:function(){return this.userList.length}},{key:"getUserNameById",value:function(e){var t=this.getUser(e);return t?t.userName:"<UnkwownUser>"}}]),e}(),h=function(){function e(t,n,r){Object(a["a"])(this,e),this.userId="",this.content="",this.level=-1,this.isEdited=!1,this.date=new Date,this.userId=t,this.content=n,this.level=r}return Object(o["a"])(e,[{key:"contain",value:function(e){return this.content.includes(e)}}]),e}(),d=function(){function e(t){Object(a["a"])(this,e),this.postLevelList=[],this.title="",this.postId="",this.isPinned=!1,this.title=t,this.postId="".concat(u++)}return Object(o["a"])(e,[{key:"clearLevels",value:function(){this.postLevelList=[]}},{key:"appendLevel",value:function(e,t){var n=new h(e,t,this.postLevelList.length+1);this.postLevelList.push(n)}},{key:"getPoster",value:function(){return 0===this.postLevelList.length?"":this.postLevelList[0].userId}},{key:"getLastReplior",value:function(){return 0===this.postLevelList.length?"":this.postLevelList[this.postLevelList.length-1].userId}},{key:"getLevels",value:function(e,t,n){if(e<=0)return[[],0];var o=[];if(""===n)o=this.postLevelList;else{var a,s=Object(r["a"])(this.postLevelList);try{for(s.s();!(a=s.n()).done;){var i=a.value;i.contain(n)&&o.push(i)}}catch(d){s.e(d)}finally{s.f()}}for(var u=Math.max(0,(t-1)*e),c=Math.min(o.length,t*e),l=[],h=u;h<c;++h)l.push(o[h]);return[l,o.length]}},{key:"getLastLevel",value:function(){return this.postLevelList[this.postLevelList.length-1]}},{key:"getFirstLevel",value:function(){return this.postLevelList[0]}},{key:"getReplyNum",value:function(){return this.postLevelList.length}},{key:"contain",value:function(e){if(this.title.includes(e))return!0;var t,n=Object(r["a"])(this.postLevelList);try{for(n.s();!(t=n.n()).done;){var o=t.value;if(o.contain(e))return!0}}catch(a){n.e(a)}finally{n.f()}return!1}}]),e}(),f=function(){function e(){Object(a["a"])(this,e),this.postList=[]}return Object(o["a"])(e,[{key:"post",value:function(e,t,n){var r=new d(t);r.appendLevel(e,n);for(var o=!1,a=0;a<this.postList.length;++a)if(!this.postList[a].isPinned&&r.getLastLevel().date>=this.postList[a].getLastLevel().date){this.postList.splice(a,0,r),o=!0;break}return o||this.postList.push(r),r}},{key:"pinPost",value:function(e){var t=this.getPostById(e);if(null===t)throw new Error("postId is invalid");t.isPinned||(t.isPinned=!0,this.sortPosts())}},{key:"getPosts",value:function(e,t,n){if(e<=0)return[[],0];var o=[];if(""===n)o=this.postList;else{var a,s=Object(r["a"])(this.postList);try{for(s.s();!(a=s.n()).done;){var i=a.value;i.contain(n)&&o.push(i)}}catch(d){s.e(d)}finally{s.f()}}for(var u=Math.max(0,(t-1)*e),c=Math.min(o.length,t*e),l=[],h=u;h<c;++h)l.push(o[h]);return[l,o.length]}},{key:"getPostNum",value:function(){return this.postList.length}},{key:"sortPosts",value:function(){this.postList.sort((function(e,t){return e.isPinned===t.isPinned?t.getLastLevel().date.getTime()-e.getLastLevel().date.getTime():e.isPinned?-1:1}))}},{key:"getPostById",value:function(e){var t,n=Object(r["a"])(this.postList);try{for(n.s();!(t=n.n()).done;){var o=t.value;if(o.postId===e)return o}}catch(a){n.e(a)}finally{n.f()}return null}}]),e}(),p=function(){function e(){Object(a["a"])(this,e),this.loginUserToken="",this.userHelper=new l,this.postHelper=new f,this.userHelper.register("ADogMan","https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"),this.userHelper.register("ACatMan","https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"),this.postTest()}return Object(o["a"])(e,[{key:"setLoginTokenCookie",value:function(e){document.cookie="token=".concat(e,";path=/;")}},{key:"loginTestUser",value:function(){this.loginUserToken=this.userHelper.login(this.userHelper.getUserIdByName("ACatMan")),this.setLoginTokenCookie(this.loginUserToken)}},{key:"postTest",value:function(){var e=this.postHelper.post(this.userHelper.getUserIdByName("ADogMan"),"Welcome again everyone!1","Hi every one, this msg is from the Mocker!!!1");e.postLevelList[0].date=new Date("1995-12-17"),e.appendLevel(this.userHelper.getUserIdByName("ACatMan"),"You are a fool, aren't you?"),e.appendLevel(this.userHelper.getUserIdByName("ACatMan"),"You are a fool, aren't you?1"),e.appendLevel(this.userHelper.getUserIdByName("ACatMan"),"You are a fool, aren't you?2"),e.appendLevel(this.userHelper.getUserIdByName("ACatMan"),"You are a fool, aren't you?3"),e.appendLevel(this.userHelper.getUserIdByName("ACatMan"),"You are a fool, aren't you?4"),e.appendLevel(this.userHelper.getUserIdByName("ACatMan"),"You are a fool, aren't you?5"),e.appendLevel(this.userHelper.getUserIdByName("ACatMan"),"You are a fool, aren't you?6"),e.appendLevel(this.userHelper.getUserIdByName("ACatMan"),"You are a fool, aren't you?7"),e=this.postHelper.post(this.userHelper.getUserIdByName("ADogMan"),"Welcome again everyone!2","Hi every one, this msg is from the Mocker!!!2"),e.postLevelList[0].date=new Date("2021-2-17"),e=this.postHelper.post(this.userHelper.getUserIdByName("ADogMan"),"Welcome again everyone!3","Hi every one, this msg is from the Mocker!!!3"),e.postLevelList[0].date=new Date("2020-3-8"),e=this.postHelper.post(this.userHelper.getUserIdByName("ADogMan"),"It should be pinned1","Hi every one, this msg is from the Mocker!!!4"),e.postLevelList[0].date=new Date("2019-4-1"),this.postHelper.pinPost(e.postId),e=this.postHelper.post(this.userHelper.getUserIdByName("ADogMan"),"It should be pinned2","Hi every one, this msg is from the Mocker!!!4"),e.postLevelList[0].date=new Date("2019-4-2"),this.postHelper.pinPost(e.postId)}}]),e}(),g=new p;function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Reject for noreson",r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return new Promise((function(o,a){r?a(new Error(n)):t<=0?o(e):setTimeout((function(){return o(e)}),t)}))}t["a"]=g},"7cf9":function(e,t,n){},"88b8":function(e,t,n){"use strict";n("7cf9")},8973:function(e,t,n){"use strict";var r=n("d4ec"),o=n("bee2"),a=n("2657"),s=function(){return Object(a["b"])({members:a["a"].userHelper.getUserNum(),posts:a["a"].postHelper.getPostNum()},1e3)},i=n("b85c"),u=(n("843c"),n("ac1f"),n("159b"),n("df76"));function c(e){if(0===e.postLevelList.length)return"";var t=50,n=3,r=e.postLevelList[0].content;return""===r?"":(r=u["a"].extractTextFromHtml(r),r.length>t?(r=r.substring(0,t-n),r.padEnd(t,".")):r)}function l(e){if(0===e.postLevelList.length)return"";var t=e.postLevelList[e.postLevelList.length-1].date;return t.getFullYear()!==(new Date).getFullYear()?u["a"].getDateFullDate(t):u["a"].getDateDate(t)===u["a"].getDateDate(new Date)?u["a"].getDateTime(t):u["a"].getDateDate(t)}function h(e){var t=[],n=/<img((?!scr=")[^<])+src="(([^"]|\\")*)"/gim,r=n.exec(e);while(null!==r&&t.length<3)t.push(u["a"].htmlUnescape(r[2])),r=n.exec(e);return t}function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return""===t?t=e:""===e&&(e=t),{big:t,small:e}}var f=function(e,t,n){var r,o=[],s=a["a"].postHelper.getPosts(e,t,n),u=s[0],f=s[1],p=Object(i["a"])(u);try{var g=function(){var e=r.value,t=[],n=e.postLevelList.length>0?h(e.postLevelList[0].content):[];n.forEach((function(e){t.push(d(e))}));var s=[];e.isPinned&&s.push({type:"warning",tag:"Pin"}),o.push({replyNum:e.getReplyNum(),title:e.title,titleTags:s,content:c(e),poster:a["a"].userHelper.getUserNameById(e.getPoster()),lastReplior:a["a"].userHelper.getUserNameById(e.getLastReplior()),updateTime:l(e),postId:e.postId,images:t})};for(p.s();!(r=p.n()).done;)g()}catch(v){p.e(v)}finally{p.f()}return Object(a["b"])({posts:o,postNum:f},1e3)},p=function(){var e=u["a"].getLoginTokenCookie(),t="",n="",r=!1,o=a["a"].userHelper.getUserByToken(e);return null!==o?(t=o.userName,n=o.userAvatarUrl):r=!0,Object(a["b"])({userName:t,userAvatar:n},1e3,"Invalid token",r)},g=function(e,t){var n=u["a"].getLoginTokenCookie(),r=a["a"].userHelper.getLoginUserIdByToken(n),o=!1;return""===r?o=!0:a["a"].postHelper.post(r,e,t),Object(a["b"])({},1e3,"You are not login yet!",o)},v=function(e){var t=!1,n=a["a"].postHelper.getPostById(e),r=0,o="";return null===n?t=!0:(r=n.postLevelList.length,o=n.title),Object(a["b"])({levelNum:r,title:o},1e3,"Post not exists!",t)},b=function(e,t,n,r){var o=[],s=0,c=a["a"].postHelper.getPostById(e);if(null!==c){var l=c.getLevels(t,n,r),h=l[0];s=l[1];var d,f=Object(i["a"])(h);try{for(f.s();!(d=f.n()).done;){var p=d.value,g=a["a"].userHelper.getUser(p.userId),v="<UnkownUser>",b="";null!==g&&(v=g.userName,b=g.userAvatarUrl),o.push({userAvatarUrl:b,userName:v,content:p.content,level:p.level,date:u["a"].getProperDateString(p.date),isPoster:c.getFirstLevel().userId===p.userId,isYou:p.userId===a["a"].userHelper.getLoginUserIdByToken(u["a"].getLoginTokenCookie())})}}catch(m){f.e(m)}finally{f.f()}}return Object(a["b"])({levels:o,levelNum:s},1e3)},m=function(e,t){var n=u["a"].getLoginTokenCookie(),r=a["a"].userHelper.getLoginUserIdByToken(n),o=!1,s="";if(""===r)o=!0,s="You are not login yet!";else{var i=a["a"].postHelper.getPostById(e);null===i?(o=!0,s="Post not found!"):(i.appendLevel(r,t),a["a"].postHelper.sortPosts())}return Object(a["b"])({},1e3,s,o)},y={getMembersAndPosts:s,getPostList:f,checkToken:p,post:g,getPostInfo:v,getPostLevelList:b,reply:m},k=y,L=function(){function e(){Object(r["a"])(this,e)}return Object(o["a"])(e,[{key:"getMembersAndPosts",value:function(){return k.getMembersAndPosts()}},{key:"getPostList",value:function(e,t,n){return k.getPostList(e,t,n)}},{key:"checkToken",value:function(){return k.checkToken()}},{key:"post",value:function(e,t){return k.post(e,t)}},{key:"getPostInfo",value:function(e){return k.getPostInfo(e)}},{key:"getPostLevelList",value:function(e,t,n,r){return k.getPostLevelList(e,t,n,r)}},{key:"reply",value:function(e,t){return k.reply(e,t)}}]),e}(),j=new L;t["a"]=j},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o=n("cf05"),a=n.n(o),s={class:"whole-box"},i={class:"search-bar"},u={class:"search-bar-left"},c=Object(r["createVNode"])("div",null,"MelonGarden",-1),l={key:0,class:"search-bar-right"},h={key:1,class:"search-bar-right"},d=Object(r["createTextVNode"])("Sign Up"),f=Object(r["createTextVNode"])("Sign In"),p={class:"subheader"},g={span:6},v=Object(r["createVNode"])("img",{class:"logo-img",src:a.a},null,-1),b=Object(r["createVNode"])("div",{span:18,class:"right-title"},[Object(r["createVNode"])("div",{class:"subdescription"},"A wanderful community for whom want to communicate"),Object(r["createVNode"])("div",{class:"big-title"},"MelonGarden")],-1),m={class:"status"},y={class:"main-body"},k={class:"footer"},L=Object(r["createTextVNode"])(" ©2021 MelonGarden | Design By Raiix | "),j=Object(r["createTextVNode"])("About"),O=Object(r["createTextVNode"])(" | Contact ");function N(e,t,n,o,a,N){var w=Object(r["resolveComponent"])("el-backtop"),P=Object(r["resolveComponent"])("el-button"),I=Object(r["resolveComponent"])("el-input"),U=Object(r["resolveComponent"])("el-avatar"),C=Object(r["resolveComponent"])("el-card"),D=Object(r["resolveComponent"])("el-affix"),T=Object(r["resolveComponent"])("router-link"),H=Object(r["resolveComponent"])("router-view");return Object(r["openBlock"])(),Object(r["createBlock"])("div",s,[Object(r["createVNode"])(w,{"visibility-height":10,bottom:100}),Object(r["createVNode"])(D,{offset:0},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(C,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])("div",i,[Object(r["createVNode"])("div",u,[c,Object(r["createVNode"])(I,{placeholder:"Type something to search","prefix-icon":"el-icon-search",modelValue:e.searchFilter,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.searchFilter=t}),onChange:e.onSearchButtonClicked,clearable:""},{append:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(P,{icon:"el-icon-search",onClick:e.onSearchButtonClicked},null,8,["onClick"])]})),_:1},8,["modelValue","onChange"])]),e.display_login_info?(Object(r["openBlock"])(),Object(r["createBlock"])("div",l,[Object(r["createVNode"])(U,{size:"small",shape:"square",src:e.userAvatar},null,8,["src"]),Object(r["createVNode"])("div",null,Object(r["toDisplayString"])(e.userName),1)])):Object(r["createCommentVNode"])("",!0),e.display_login_info?Object(r["createCommentVNode"])("",!0):(Object(r["openBlock"])(),Object(r["createBlock"])("div",h,[Object(r["createVNode"])(P,{type:"success"},{default:Object(r["withCtx"])((function(){return[d]})),_:1}),Object(r["createVNode"])(P,{onClick:e.onSignInButtonPressed},{default:Object(r["withCtx"])((function(){return[f]})),_:1},8,["onClick"])]))])]})),_:1})]})),_:1}),Object(r["createVNode"])(C,{class:"header"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])("div",p,[Object(r["createVNode"])("div",g,[Object(r["createVNode"])(T,{to:"/"},{default:Object(r["withCtx"])((function(){return[v]})),_:1})]),b]),Object(r["createVNode"])("div",m,"Members: "+Object(r["toDisplayString"])(e.$store.state.memberNum)+" Posts: "+Object(r["toDisplayString"])(e.$store.state.postNum),1)]})),_:1}),Object(r["createVNode"])("div",y,[Object(r["createVNode"])(H,null,{default:Object(r["withCtx"])((function(e){var t=e.Component;return[Object(r["createVNode"])(r["Transition"],{name:"fade",mode:"out-in"},{default:Object(r["withCtx"])((function(){return[(Object(r["openBlock"])(),Object(r["createBlock"])(Object(r["resolveDynamicComponent"])(t)))]})),_:2},1024)]})),_:1})]),Object(r["createVNode"])("div",k,[L,Object(r["createVNode"])(T,{to:"/about"},{default:Object(r["withCtx"])((function(){return[j]})),_:1}),O])])}var w=n("5530"),P=(n("7f17"),n("f3fc"),n("6573")),I=n.n(P),U=n("d4ec"),C=n("262e"),D=n("2caf"),T=(n("841c"),n("ac1f"),n("9ab4")),H=n("8973"),B=n("df76"),M=n("2657"),A=n("ce1f"),x=function(e){Object(C["a"])(n,e);var t=Object(D["a"])(n);function n(){return Object(U["a"])(this,n),t.apply(this,arguments)}return n}(A["b"]);x=Object(T["a"])([Object(A["a"])({name:"App",data:function(){return{display_login_info:!1,userName:"UserName",userAvatar:"",searchFilter:""}},created:function(){var e=this;this.$watch((function(){return e.$route.path}),(function(){e.loadMembersPosts()}))},mounted:function(){console.log("/melongarden/");var e=B["a"].locationSearchToQuery(window.location.search);this.searchFilter=e.search||"",this.loadMembersPosts()},methods:{onSignInButtonPressed:function(){var e=this;M["a"].loginTestUser(),this.$router.push("/?logining"),setTimeout((function(){e.$router.push("/"),e.loadMembersPosts(),H["a"].checkToken().then((function(t){var n=t;e.display_login_info=!0,e.userName=n.userName,e.userAvatar=n.userAvatar})).catch((function(t){e.display_login_info=!1,I.a.error("Check token fail. "+t)}))}),1e3)},loadMembersPosts:function(){this.$store.dispatch("updateMembersPosts")},onSearchButtonClicked:function(){var e={path:this.$route.path,query:Object(w["a"])(Object(w["a"])({},this.$route.query),{},{search:this.searchFilter,page:1}),hash:this.$route.hash,params:Object(w["a"])({},this.$route.params)};this.$router.push(e)}}})],x);var V=x;n("88b8");V.render=N;var _=V,S=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),F=[{path:"/",name:"Home",component:function(){return n.e("chunk-2d21a3d2").then(n.bind(null,"bb51"))},children:[{path:"/",name:"Posts",component:function(){return Promise.all([n.e("chunk-2489820c"),n.e("chunk-a27bbfc0")]).then(n.bind(null,"17c3"))}},{path:"/images",name:"Images",component:function(){return n.e("chunk-2d212f35").then(n.bind(null,"ab31"))}}]},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/post",name:"PostPage",component:function(){return Promise.all([n.e("chunk-2489820c"),n.e("chunk-4a48deef")]).then(n.bind(null,"00c6"))}}],E=Object(S["a"])({history:Object(S["b"])("/melongarden/"),routes:F}),Y=E,$=n("5502"),q=Object($["a"])({state:{memberNum:0,postNum:0},mutations:{memberNumChanged:function(e,t){e.memberNum=t},postNumChanged:function(e,t){e.postNum=t}},actions:{updateMembersPosts:function(e){H["a"].getMembersAndPosts().then((function(t){var n=t;e.commit("memberNumChanged",n.members),e.commit("postNumChanged",n.posts)})).catch((function(e){I.a.error("There is something wrong with the server. Please try to refresh this page in a moment. "+e)}))}},modules:{}}),R=(n("d9b2"),n("572f")),G=n.n(R),W=(n("f60d"),n("a1dd")),J=n.n(W),Q=(n("5415"),n("d559")),z=n.n(Q),K=(n("9fb0"),n("ab51")),X=n.n(K),Z=(n("f560"),n("c597")),ee=n.n(Z),te=(n("b48b"),n("ed60")),ne=n.n(te),re=(n("7296"),n("a826")),oe=n.n(re),ae=(n("8989"),n("f5c0")),se=n.n(ae),ie=(n("2b7a"),n("05f6")),ue=n.n(ie),ce=(n("3411"),n("4810")),le=n.n(ce),he=(n("51bb"),n("28af")),de=n.n(he),fe=(n("737e"),n("7d11")),pe=n.n(fe),ge=(n("a1a7"),n("9ebf")),ve=n.n(ge),be=(n("5b96"),n("d867")),me=n.n(be),ye=(n("3bc8"),n("ee0f")),ke=n.n(ye),Le=(n("34c0"),n("aff9")),je=n.n(Le),Oe=(n("4af4"),n("44fb")),Ne=n.n(Oe),we=function(e){e.use(Ne.a),e.use(je.a),e.use(ke.a),e.use(me.a),e.use(ve.a),e.use(pe.a),e.use(de.a),e.use(le.a),e.use(ue.a),e.use(se.a),e.use(oe.a),e.use(ne.a),e.use(ee.a),e.use(X.a),e.use(z.a),e.use(J.a),e.use(G.a)},Pe=Object(r["createApp"])(_);we(Pe),Pe.use(q).use(Y).mount("#app")},cf05:function(e,t,n){e.exports=n.p+"img/logo.27317798.png"},df76:function(e,t,n){"use strict";var r=n("b85c"),o=n("d4ec"),a=n("bee2"),s=(n("1276"),n("ac1f"),n("498a"),n("99af"),n("4d90"),n("5319"),n("caad"),n("2532"),function(){function e(){Object(o["a"])(this,e)}return Object(a["a"])(e,[{key:"getLoginTokenCookie",value:function(){var e,t=document.cookie,n=t.split(";"),o=Object(r["a"])(n);try{for(o.s();!(e=o.n()).done;){var a=e.value;if(a=a.trim(),0===a.indexOf("token="))return a.substring("token=".length,a.length)}}catch(s){o.e(s)}finally{o.f()}return""}},{key:"imagesUploadHandler",value:function(e,t){var n=!1;return function(r,o,a,s){e();var i="data:image/jpeg;base64,"+r.base64();console.log("About to upload a image");var u=10,c=setInterval((function(){0===u?(o(i),t(),window.clearInterval(c)):n&&5===u?(a("error force",{remove:!0}),t(),window.clearInterval(c)):(u-=1,s((10-u)/10*100))}),100)}}},{key:"getDateFullDate",value:function(e){return"".concat(e.getFullYear(),"-").concat(e.getMonth()+1,"-").concat(e.getDate())}},{key:"getDateDate",value:function(e){return"".concat(e.getMonth()+1,"-").concat(e.getDate())}},{key:"getDateTime",value:function(e){var t=String(e.getMinutes());return"".concat(e.getHours(),":").concat(t.padStart(2,"0"))}},{key:"getProperDateString",value:function(e){return e.getFullYear()!==(new Date).getFullYear()?"".concat(this.getDateFullDate(e)," ").concat(this.getDateTime(e)):this.getDateDate(e)!==this.getDateDate(new Date)?"".concat(this.getDateDate(e)," ").concat(this.getDateTime(e)):this.getDateTime(e)}},{key:"htmlUnescape",value:function(e){return e.replace(/&lt;|&gt;|&amp;|&quot;|&nbsp;/g,(function(e,t,n){switch(e){case"&lt;":return"<";case"&gt;":return">";case"&amp;":return"&";case"&quot;":return'"';case"&nbsp;":return" "}return n}))}},{key:"extractTextFromHtml",value:function(e){var t=document.createElement("div");return t.innerHTML=e,t.innerText}},{key:"locationSearchToQuery",value:function(e){if(!e.includes("?"))return{};e=e.substr(1);var t,n={},o=e.split("&"),a=Object(r["a"])(o);try{for(a.s();!(t=a.n()).done;){var s=t.value,i=s.split("=");n[i[0]]=i[1]}}catch(u){a.e(u)}finally{a.f()}return n}}]),e}()),i=new s;t["a"]=i}});
//# sourceMappingURL=app.9d7a8f97.js.map