(function(e){function t(t){for(var r,s,a=t[0],u=t[1],l=t[2],c=0,d=[];c<a.length;c++)s=a[c],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);h&&h(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var a=n[s];0!==o[a]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},s={app:0},o={app:0},i=[];function a(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"35b1210e","chunk-2489820c":"bcf2f138","chunk-1281ec6a":"f08aa9ec","chunk-98a45650":"0bee5330","chunk-2d212f35":"05cdedcd","chunk-2d21a3d2":"d3452ee3"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-1281ec6a":1,"chunk-98a45650":1};s[e]?t.push(s[e]):0!==s[e]&&n[e]&&t.push(s[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-2489820c":"31d6cfe0","chunk-1281ec6a":"664edb8d","chunk-98a45650":"a7512218","chunk-2d212f35":"31d6cfe0","chunk-2d21a3d2":"31d6cfe0"}[e]+".css",o=u.p+r,i=document.getElementsByTagName("link"),a=0;a<i.length;a++){var l=i[a],c=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(c===r||c===o))return t()}var d=document.getElementsByTagName("style");for(a=0;a<d.length;a++){l=d[a],c=l.getAttribute("data-href");if(c===r||c===o)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete s[e],h.parentNode.removeChild(h),n(i)},h.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(h)})).then((function(){s[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=a(e);var d=new Error;l=function(t){c.onerror=c.onload=null,clearTimeout(h);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+s+")",d.name="ChunkLoadError",d.type=r,d.request=s,n[1](d)}o[e]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:c})}),12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/melongarden/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var h=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},2657:function(e,t,n){"use strict";n.d(t,"b",(function(){return g}));var r=n("b85c"),s=n("bee2"),o=n("d4ec"),i=(n("99af"),n("caad"),n("2532"),n("a434"),n("d3b7"),0),a=100,u=233,l=function e(t,n){Object(o["a"])(this,e),this.userId="",this.userName="<UnknownUserName>",this.userAvatarUrl="",this.userId="".concat(i++),this.userName=t,this.userAvatarUrl=n},c=function(){function e(){Object(o["a"])(this,e),this.userList=[],this.loginUserDictionary={}}return Object(s["a"])(e,[{key:"register",value:function(e,t){this.userList.push(new l(e,t))}},{key:"login",value:function(e){var t,n=Object(r["a"])(this.userList);try{for(n.s();!(t=n.n()).done;){var s=t.value;if(s.userId===e)return console.log("".concat(e,"(").concat(s.userName,") has login.")),this.loginUserDictionary[e]="".concat(a++),this.loginUserDictionary[e]}}catch(o){n.e(o)}finally{n.f()}throw new Error("Unregister user id ".concat(e))}},{key:"getUserIdByName",value:function(e){var t,n=Object(r["a"])(this.userList);try{for(n.s();!(t=n.n()).done;){var s=t.value;if(s.userName===e)return s.userId}}catch(o){n.e(o)}finally{n.f()}return"<UnknownUserId>"}},{key:"getLoginUserIdByToken",value:function(e){for(var t in this.loginUserDictionary)if(this.loginUserDictionary[t]===e)return t;return""}},{key:"logout",value:function(e){var t=this.getLoginUserIdByToken(e);""!==t&&delete this.loginUserDictionary[t]}},{key:"getUser",value:function(e){var t,n=Object(r["a"])(this.userList);try{for(n.s();!(t=n.n()).done;){var s=t.value;if(s.userId===e)return s}}catch(o){n.e(o)}finally{n.f()}return null}},{key:"getUserByToken",value:function(e){return this.getUser(this.getLoginUserIdByToken(e))}},{key:"getUserNum",value:function(){return this.userList.length}},{key:"getUserNameById",value:function(e){var t=this.getUser(e);return t?t.userName:"<UnkwownUser>"}}]),e}(),d=function(){function e(t,n,r){Object(o["a"])(this,e),this.userId="",this.content="",this.level=-1,this.isEdited=!1,this.likeNum=0,this.disLikeNum=0,this.likeOrDislikeUserList={},this.date=new Date,this.userId=t,this.content=n,this.level=r}return Object(s["a"])(e,[{key:"contain",value:function(e){return this.content.includes(e)}},{key:"canUserEdit",value:function(e){return this.userId===e}},{key:"like",value:function(e){1===this.likeOrDislikeUserList[e]?(this.likeNum-=1,delete this.likeOrDislikeUserList[e]):2===this.likeOrDislikeUserList[e]?(this.likeNum+=1,this.disLikeNum-=1,this.likeOrDislikeUserList[e]=1):(this.likeNum+=1,this.likeOrDislikeUserList[e]=1)}},{key:"dislike",value:function(e){2===this.likeOrDislikeUserList[e]?(this.disLikeNum-=1,delete this.likeOrDislikeUserList[e]):1===this.likeOrDislikeUserList[e]?(this.disLikeNum+=1,this.likeNum-=1,this.likeOrDislikeUserList[e]=2):(this.disLikeNum+=1,this.likeOrDislikeUserList[e]=2)}},{key:"hasUserLike",value:function(e){return this.likeOrDislikeUserList[e]||0}}]),e}(),h=function(){function e(t){Object(o["a"])(this,e),this.postLevelList=[],this.title="",this.postId="",this.isPinned=!1,this.title=t,this.postId="".concat(u++)}return Object(s["a"])(e,[{key:"clearLevels",value:function(){this.postLevelList=[]}},{key:"appendLevel",value:function(e,t){var n=new d(e,t,this.postLevelList.length+1);this.postLevelList.push(n)}},{key:"getPoster",value:function(){return 0===this.postLevelList.length?"":this.postLevelList[0].userId}},{key:"getLastReplior",value:function(){return 0===this.postLevelList.length?"":this.postLevelList[this.postLevelList.length-1].userId}},{key:"getLevels",value:function(e,t,n){if(e<=0)return[[],0];var s=[];if(""===n)s=this.postLevelList;else{var o,i=Object(r["a"])(this.postLevelList);try{for(i.s();!(o=i.n()).done;){var a=o.value;a.contain(n)&&s.push(a)}}catch(h){i.e(h)}finally{i.f()}}for(var u=Math.max(0,(t-1)*e),l=Math.min(s.length,t*e),c=[],d=u;d<l;++d)c.push(s[d]);return[c,s.length]}},{key:"getLastLevel",value:function(){return this.postLevelList[this.postLevelList.length-1]}},{key:"getFirstLevel",value:function(){return this.postLevelList[0]}},{key:"getLevel",value:function(e){return e-=1,e<0||e>=this.postLevelList.length?null:this.postLevelList[e]}},{key:"updateLevelIndex",value:function(){var e,t=1,n=Object(r["a"])(this.postLevelList);try{for(n.s();!(e=n.n()).done;){var s=e.value;s.level=t++}}catch(o){n.e(o)}finally{n.f()}}},{key:"deleteLevel",value:function(e){e-=1,this.postLevelList.splice(e,1),this.updateLevelIndex()}},{key:"getReplyNum",value:function(){return this.postLevelList.length}},{key:"contain",value:function(e){if(this.title.includes(e))return!0;var t,n=Object(r["a"])(this.postLevelList);try{for(n.s();!(t=n.n()).done;){var s=t.value;if(s.contain(e))return!0}}catch(o){n.e(o)}finally{n.f()}return!1}},{key:"hasEdited",value:function(){return this.getFirstLevel().isEdited}}]),e}(),p=function(){function e(){Object(o["a"])(this,e),this.postList=[]}return Object(s["a"])(e,[{key:"post",value:function(e,t,n){var r=new h(t);r.appendLevel(e,n);for(var s=!1,o=0;o<this.postList.length;++o)if(!this.postList[o].isPinned&&r.getLastLevel().date>=this.postList[o].getLastLevel().date){this.postList.splice(o,0,r),s=!0;break}return s||this.postList.push(r),r}},{key:"pinPost",value:function(e){var t=this.getPostById(e);if(null===t)throw new Error("postId is invalid");t.isPinned||(t.isPinned=!0,this.sortPosts())}},{key:"deletePost",value:function(e){for(var t=0;t<this.postList.length;++t)this.postList[t].postId===e&&this.postList.splice(t,1)}},{key:"getPosts",value:function(e,t,n){if(e<=0)return[[],0];var s=[];if(""===n)s=this.postList;else{var o,i=Object(r["a"])(this.postList);try{for(i.s();!(o=i.n()).done;){var a=o.value;a.contain(n)&&s.push(a)}}catch(h){i.e(h)}finally{i.f()}}for(var u=Math.max(0,(t-1)*e),l=Math.min(s.length,t*e),c=[],d=u;d<l;++d)c.push(s[d]);return[c,s.length]}},{key:"getPostNum",value:function(){return this.postList.length}},{key:"sortPosts",value:function(){this.postList.sort((function(e,t){return e.isPinned===t.isPinned?t.getLastLevel().date.getTime()-e.getLastLevel().date.getTime():e.isPinned?-1:1}))}},{key:"getPostById",value:function(e){var t,n=Object(r["a"])(this.postList);try{for(n.s();!(t=n.n()).done;){var s=t.value;if(s.postId===e)return s}}catch(o){n.e(o)}finally{n.f()}return null}}]),e}(),f=function(){function e(){Object(o["a"])(this,e),this.loginUserToken="",this.userHelper=new c,this.postHelper=new p,this.userHelper.register("ADogMan","https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"),this.userHelper.register("ACatMan","https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"),this.postTest()}return Object(s["a"])(e,[{key:"setLoginTokenCookie",value:function(e){document.cookie="token=".concat(e,";path=/;")}},{key:"loginTestUser",value:function(){this.loginUserToken=this.userHelper.login(this.userHelper.getUserIdByName("ACatMan")),this.setLoginTokenCookie(this.loginUserToken)}},{key:"postTest",value:function(){var e=this.postHelper.post(this.userHelper.getUserIdByName("ADogMan"),"Welcome again everyone!1","Hi every one, this msg is from the Mocker!!!1");e.postLevelList[0].date=new Date("1995-12-17"),e.appendLevel(this.userHelper.getUserIdByName("ACatMan"),"You are a fool, aren't you?"),e.appendLevel(this.userHelper.getUserIdByName("ACatMan"),"You are a fool, aren't you?1"),e.appendLevel(this.userHelper.getUserIdByName("ACatMan"),"You are a fool, aren't you?2"),e.appendLevel(this.userHelper.getUserIdByName("ACatMan"),"You are a fool, aren't you?3"),e.appendLevel(this.userHelper.getUserIdByName("ACatMan"),"You are a fool, aren't you?4"),e.appendLevel(this.userHelper.getUserIdByName("ACatMan"),"You are a fool, aren't you?5"),e.appendLevel(this.userHelper.getUserIdByName("ACatMan"),"You are a fool, aren't you?6"),e.appendLevel(this.userHelper.getUserIdByName("ACatMan"),"You are a fool, aren't you?7"),e=this.postHelper.post(this.userHelper.getUserIdByName("ADogMan"),"Welcome again everyone!2","Hi every one, this msg is from the Mocker!!!2"),e.postLevelList[0].date=new Date("2021-2-17"),e=this.postHelper.post(this.userHelper.getUserIdByName("ADogMan"),"Welcome again everyone!3","Hi every one, this msg is from the Mocker!!!3"),e.postLevelList[0].date=new Date("2020-3-8"),e=this.postHelper.post(this.userHelper.getUserIdByName("ADogMan"),"It should be pinned1","Hi every one, this msg is from the Mocker!!!4"),e.postLevelList[0].date=new Date("2019-4-1"),this.postHelper.pinPost(e.postId),e.getFirstLevel().like(this.userHelper.getUserIdByName("ADogMan")),e.getFirstLevel().like(this.userHelper.getUserIdByName("ACatMan")),e=this.postHelper.post(this.userHelper.getUserIdByName("ADogMan"),"It should be pinned2","Hi every one, this msg is from the Mocker!!!4"),e.postLevelList[0].date=new Date("2019-4-2"),this.postHelper.pinPost(e.postId),e.getFirstLevel().like(this.userHelper.getUserIdByName("ADogMan"))}}]),e}(),v=new f;function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Reject for noreson",r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return new Promise((function(s,o){r?o(new Error(n)):t<=0?s(e):setTimeout((function(){return s(e)}),t)}))}t["a"]=v},4824:function(e,t,n){"use strict";n("e858")},8973:function(e,t,n){"use strict";var r=n("d4ec"),s=n("bee2"),o=n("2657"),i=function(){return Object(o["b"])({members:o["a"].userHelper.getUserNum(),posts:o["a"].postHelper.getPostNum()},1e3)},a=n("b85c"),u=(n("843c"),n("ac1f"),n("159b"),n("df76"));function l(e){if(0===e.postLevelList.length)return"";var t=50,n=3,r=e.postLevelList[0].content;return""===r?"":(r=u["a"].extractTextFromHtml(r),r.length>t?(r=r.substring(0,t-n),r.padEnd(t,".")):r)}function c(e){if(0===e.postLevelList.length)return"";var t=e.postLevelList[e.postLevelList.length-1].date;return t.getFullYear()!==(new Date).getFullYear()?u["a"].getDateFullDate(t):u["a"].getDateDate(t)===u["a"].getDateDate(new Date)?u["a"].getDateTime(t):u["a"].getDateDate(t)}function d(e){var t=[],n=/<img((?!scr=")[^<])+src="(([^"]|\\")*)"/gim,r=n.exec(e);while(null!==r&&t.length<3)t.push(u["a"].htmlUnescape(r[2])),r=n.exec(e);return t}function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return""===t?t=e:""===e&&(e=t),{big:t,small:e}}var p=function(e,t,n){var r,s=[],i=o["a"].postHelper.getPosts(e,t,n),p=i[0],f=i[1],v=o["a"].userHelper.getLoginUserIdByToken(u["a"].getLoginTokenCookie()),g=Object(a["a"])(p);try{var m=function(){var e=r.value,t=[],n=e.postLevelList.length>0?d(e.postLevelList[0].content):[];n.forEach((function(e){t.push(h(e))}));var i=[];e.isPinned&&i.push({type:"warning",tag:"Pin"}),e.hasEdited()&&i.push({type:"info",tag:"Edited"}),s.push({replyNum:e.getReplyNum(),title:e.title,titleTags:i,content:l(e),poster:o["a"].userHelper.getUserNameById(e.getPoster()),lastReplior:o["a"].userHelper.getUserNameById(e.getLastReplior()),updateTime:c(e),postId:e.postId,hasLike:e.getFirstLevel().hasUserLike(v),likeNum:e.getFirstLevel().likeNum,dislikeNum:e.getFirstLevel().disLikeNum,images:t})};for(g.s();!(r=g.n()).done;)m()}catch(k){g.e(k)}finally{g.f()}return Object(o["b"])({posts:s,postNum:f},1e3)},f=function(){var e=u["a"].getLoginTokenCookie(),t="",n="",r=!1,s=o["a"].userHelper.getUserByToken(e);return null!==s?(t=s.userName,n=s.userAvatarUrl):r=!0,Object(o["b"])({userName:t,userAvatar:n},1e3,"Invalid token",r)},v=function(e,t){var n=u["a"].getLoginTokenCookie(),r=o["a"].userHelper.getLoginUserIdByToken(n),s=!1;return""===r?s=!0:o["a"].postHelper.post(r,e,t),Object(o["b"])({},1e3,"You are not login yet!",s)},g=function(e){var t=!1,n=o["a"].postHelper.getPostById(e),r=0,s="";return null===n?t=!0:(r=n.postLevelList.length,s=n.title),Object(o["b"])({levelNum:r,title:s},1e3,"Post not exists!",t)},m=function(e,t,n,r){var s=[],i=0,l=o["a"].postHelper.getPostById(e),c=o["a"].userHelper.getLoginUserIdByToken(u["a"].getLoginTokenCookie());if(null!==l){var d=l.getLevels(t,n,r),h=d[0];i=d[1];var p,f=Object(a["a"])(h);try{for(f.s();!(p=f.n()).done;){var v=p.value,g=o["a"].userHelper.getUser(v.userId),m="<UnkownUser>",k="";null!==g&&(m=g.userName,k=g.userAvatarUrl),s.push({userAvatarUrl:k,userName:m,content:v.content,level:v.level,date:u["a"].getProperDateString(v.date),hasEdited:v.isEdited,hasLike:v.hasUserLike(c),likeNum:v.likeNum,dislikeNum:v.disLikeNum,isPoster:l.getFirstLevel().userId===v.userId,isLoading:!1,isYou:v.userId===o["a"].userHelper.getLoginUserIdByToken(u["a"].getLoginTokenCookie())})}}catch(b){f.e(b)}finally{f.f()}}return Object(o["b"])({levels:s,levelNum:i},1e3)},k=function(e,t){var n=u["a"].getLoginTokenCookie(),r=o["a"].userHelper.getLoginUserIdByToken(n),s=!1,i="";if(""===r)s=!0,i="You are not login yet!";else{var a=o["a"].postHelper.getPostById(e);null===a?(s=!0,i="Post not found!"):(a.appendLevel(r,t),o["a"].postHelper.sortPosts())}return Object(o["b"])({},1e3,i,s)},b=function(e,t,n){var r=!1,s="",i=o["a"].userHelper.getUserByToken(u["a"].getLoginTokenCookie());if(null===i)r=!0,s="Invalid token.";else{var a=o["a"].postHelper.getPostById(e);if(null===a)r=!0,s="Can't find the post.";else{var l=a.getLevel(t);null===l?(r=!0,s="Invalid level."):l.canUserEdit(i.userId)?(l.content=n,l.isEdited=!0,l.date=new Date):(r=!0,s="You can't edit this level.")}}return Object(o["b"])({},1e3,s,r)},L=function(e,t){var n=!1,r="",s=o["a"].postHelper.getPostById(e),i=o["a"].userHelper.getLoginUserIdByToken(u["a"].getLoginTokenCookie()),a={};if(null===s)n=!0,r="Can't find the post.";else{var l=s.getLevel(t);if(null===l)n=!0,r="Invalid level.";else{var c=o["a"].userHelper.getUser(l.userId),d="<UnkownUser>",h="";null!==c&&(d=c.userName,h=c.userAvatarUrl),a={userAvatarUrl:h,userName:d,content:l.content,level:l.level,date:u["a"].getProperDateString(l.date),hasEdited:l.isEdited,hasLike:l.hasUserLike(i),likeNum:l.likeNum,dislikeNum:l.disLikeNum,isPoster:s.getFirstLevel().userId===l.userId,isLoading:!1,isYou:l.userId===o["a"].userHelper.getLoginUserIdByToken(u["a"].getLoginTokenCookie())}}}return Object(o["b"])({level:a},1e3,r,n)},y=function(e,t){var n=!1,r="",s=o["a"].userHelper.getUserByToken(u["a"].getLoginTokenCookie()),i=!1;if(null===s)n=!0,r="Invalid token.";else{var a=o["a"].postHelper.getPostById(e);if(null===a)n=!0,r="Can't find the post.";else if(t>1){var l=a.getLevel(t);null===l?(n=!0,r="Invalid level."):l.canUserEdit(s.userId)?a.deleteLevel(t):(n=!0,r="You can't delete this level.")}else i=!0,o["a"].postHelper.deletePost(e)}return Object(o["b"])({hasDeletePost:i},1e3,r,n)},O=function(e,t,n){var r=!1,s="",i=o["a"].userHelper.getUserByToken(u["a"].getLoginTokenCookie());if(null===i)r=!0,s="Invalid token.";else{var a=o["a"].postHelper.getPostById(e);if(null===a)r=!0,s="Can't find the post.";else{var l=a.getLevel(t);null===l?(r=!0,s="Invalid level."):1===n?l.like(i.userId):2===n?l.dislike(i.userId):(r=!0,s="Invalid like type.")}}return Object(o["b"])({},100,s,r)},j=function(e,t){var n=!1,r="",s=o["a"].postHelper.getPostById(e),i=o["a"].userHelper.getLoginUserIdByToken(u["a"].getLoginTokenCookie()),a={};if(null===s)n=!0,r="Can't find the post.";else{var l=s.getLevel(t);null===l?(n=!0,r="Invalid level."):a={hasLike:l.hasUserLike(i),likeNum:l.likeNum,dislikeNum:l.disLikeNum}}return Object(o["b"])(a,100,r,n)},N={getMembersAndPosts:i,getPostList:p,checkToken:f,post:v,getPostInfo:g,getPostLevelList:m,reply:k,editPostLevel:b,getPostLevel:L,deletePostLevel:y,likePostLevel:O,getPostLevelLikeInfo:j},I=N,U=function(){function e(){Object(r["a"])(this,e)}return Object(s["a"])(e,[{key:"getMembersAndPosts",value:function(){return I.getMembersAndPosts()}},{key:"getPostList",value:function(e,t,n){return I.getPostList(e,t,n)}},{key:"checkToken",value:function(){return I.checkToken()}},{key:"post",value:function(e,t){return I.post(e,t)}},{key:"getPostInfo",value:function(e){return I.getPostInfo(e)}},{key:"getPostLevelList",value:function(e,t,n,r){return I.getPostLevelList(e,t,n,r)}},{key:"reply",value:function(e,t){return I.reply(e,t)}},{key:"editPostLevel",value:function(e,t,n){return I.editPostLevel(e,t,n)}},{key:"getPostLevel",value:function(e,t){return I.getPostLevel(e,t)}},{key:"deletePostLevel",value:function(e,t){return I.deletePostLevel(e,t)}},{key:"likePostLevel",value:function(e,t,n){return I.likePostLevel(e,t,n)}},{key:"getPostLevelLikeInfo",value:function(e,t){return I.getPostLevelLikeInfo(e,t)}}]),e}(),P=new U;t["a"]=P},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),s=n("cf05"),o=n.n(s),i={class:"whole-box"},a={class:"search-bar"},u={class:"search-bar-left"},l=Object(r["createVNode"])("div",null,"MelonGarden",-1),c={key:0,class:"search-bar-right"},d={key:1,class:"search-bar-right"},h=Object(r["createTextVNode"])("Sign Up"),p=Object(r["createTextVNode"])("Sign In"),f={class:"subheader"},v={span:6},g=Object(r["createVNode"])("img",{class:"logo-img",src:o.a},null,-1),m=Object(r["createVNode"])("div",{span:18,class:"right-title"},[Object(r["createVNode"])("div",{class:"subdescription"},"A wanderful community for whom want to communicate"),Object(r["createVNode"])("div",{class:"big-title"},"MelonGarden")],-1),k={class:"status"},b={class:"main-body"},L={class:"footer"},y=Object(r["createTextVNode"])(" ©2021 MelonGarden | Design By Raiix | "),O=Object(r["createTextVNode"])("About"),j=Object(r["createTextVNode"])(" | Contact ");function N(e,t,n,s,o,N){var I=Object(r["resolveComponent"])("el-backtop"),U=Object(r["resolveComponent"])("el-button"),P=Object(r["resolveComponent"])("el-input"),C=Object(r["resolveComponent"])("el-avatar"),D=Object(r["resolveComponent"])("el-card"),T=Object(r["resolveComponent"])("el-affix"),w=Object(r["resolveComponent"])("router-link"),H=Object(r["resolveComponent"])("router-view");return Object(r["openBlock"])(),Object(r["createBlock"])("div",i,[Object(r["createVNode"])(I,{"visibility-height":10,bottom:100}),Object(r["createVNode"])(T,{offset:0},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(D,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])("div",a,[Object(r["createVNode"])("div",u,[l,Object(r["createVNode"])(P,{placeholder:"Type something to search","prefix-icon":"el-icon-search",modelValue:e.searchFilter,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.searchFilter=t}),onChange:e.onSearchButtonClicked,clearable:""},{append:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(U,{icon:"el-icon-search",onClick:e.onSearchButtonClicked},null,8,["onClick"])]})),_:1},8,["modelValue","onChange"])]),e.display_login_info?(Object(r["openBlock"])(),Object(r["createBlock"])("div",c,[Object(r["createVNode"])(C,{size:"small",shape:"square",src:e.userAvatar},null,8,["src"]),Object(r["createVNode"])("div",null,Object(r["toDisplayString"])(e.userName),1)])):Object(r["createCommentVNode"])("",!0),e.display_login_info?Object(r["createCommentVNode"])("",!0):(Object(r["openBlock"])(),Object(r["createBlock"])("div",d,[Object(r["createVNode"])(U,{type:"success"},{default:Object(r["withCtx"])((function(){return[h]})),_:1}),Object(r["createVNode"])(U,{onClick:e.onSignInButtonPressed},{default:Object(r["withCtx"])((function(){return[p]})),_:1},8,["onClick"])]))])]})),_:1})]})),_:1}),Object(r["createVNode"])(D,{class:"header"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])("div",f,[Object(r["createVNode"])("div",v,[Object(r["createVNode"])(w,{to:"/"},{default:Object(r["withCtx"])((function(){return[g]})),_:1})]),m]),Object(r["createVNode"])("div",k,"Members: "+Object(r["toDisplayString"])(e.$store.state.memberNum)+" Posts: "+Object(r["toDisplayString"])(e.$store.state.postNum),1)]})),_:1}),Object(r["createVNode"])("div",b,[Object(r["createVNode"])(H,null,{default:Object(r["withCtx"])((function(e){var t=e.Component;return[Object(r["createVNode"])(r["Transition"],{name:"fade",mode:"out-in"},{default:Object(r["withCtx"])((function(){return[(Object(r["openBlock"])(),Object(r["createBlock"])(Object(r["resolveDynamicComponent"])(t)))]})),_:2},1024)]})),_:1})]),Object(r["createVNode"])("div",L,[y,Object(r["createVNode"])(w,{to:"/about"},{default:Object(r["withCtx"])((function(){return[O]})),_:1}),j])])}n("7f17"),n("f3fc");var I=n("6573"),U=n.n(I),P=n("5530"),C=n("d4ec"),D=n("262e"),T=n("2caf"),w=(n("841c"),n("ac1f"),n("9ab4")),H=n("8973"),B=n("df76"),M=n("2657"),A=n("ce1f"),x=function(e){Object(D["a"])(n,e);var t=Object(T["a"])(n);function n(){return Object(C["a"])(this,n),t.apply(this,arguments)}return n}(A["b"]);x=Object(w["a"])([Object(A["a"])({name:"App",data:function(){return{display_login_info:!1,userName:"UserName",userAvatar:"",searchFilter:""}},created:function(){var e=this;this.$watch((function(){return e.$route.path}),(function(){e.loadMembersPosts()}))},mounted:function(){console.log("/melongarden/");var e=B["a"].locationSearchToQuery(window.location.search);this.searchFilter=e.search||"",this.loadMembersPosts()},methods:{onSignInButtonPressed:function(){var e=this;M["a"].loginTestUser();var t={path:this.$route.path,query:Object(P["a"])(Object(P["a"])({},this.$route.query),{},{login:"yes"}),hash:this.$route.hash,params:Object(P["a"])({},this.$route.params)};this.$router.push(t),setTimeout((function(){e.$router.go(-1),e.loadMembersPosts(),H["a"].checkToken().then((function(t){var n=t;e.display_login_info=!0,e.userName=n.userName,e.userAvatar=n.userAvatar})).catch((function(t){e.display_login_info=!1,U.a.error("Check token fail. "+t)}))}),1e3)},loadMembersPosts:function(){this.$store.dispatch("updateMembersPosts")},onSearchButtonClicked:function(){var e={path:this.$route.path,query:Object(P["a"])(Object(P["a"])({},this.$route.query),{},{search:this.searchFilter,page:1}),hash:this.$route.hash,params:Object(P["a"])({},this.$route.params)};this.$router.push(e)}}})],x);var V=x;n("4824");V.render=N;var _=V,E=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),F=[{path:"/",name:"Home",component:function(){return n.e("chunk-2d21a3d2").then(n.bind(null,"bb51"))},children:[{path:"/",name:"Posts",component:function(){return Promise.all([n.e("chunk-2489820c"),n.e("chunk-1281ec6a")]).then(n.bind(null,"17c3"))}},{path:"/images",name:"Images",component:function(){return n.e("chunk-2d212f35").then(n.bind(null,"ab31"))}}]},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/post",name:"PostPage",component:function(){return Promise.all([n.e("chunk-2489820c"),n.e("chunk-98a45650")]).then(n.bind(null,"00c6"))}}],S=Object(E["a"])({history:Object(E["b"])("/melongarden/"),routes:F}),Y=S,$=n("5502"),q=Object($["a"])({state:{memberNum:0,postNum:0},mutations:{memberNumChanged:function(e,t){e.memberNum=t},postNumChanged:function(e,t){e.postNum=t}},actions:{updateMembersPosts:function(e){H["a"].getMembersAndPosts().then((function(t){var n=t;e.commit("memberNumChanged",n.members),e.commit("postNumChanged",n.posts)})).catch((function(e){U.a.error("There is something wrong with the server. Please try to refresh this page in a moment. "+e)}))}},modules:{}}),R=(n("0769"),n("31b0")),G=n.n(R),W=(n("d9b2"),n("572f")),J=n.n(W),Q=(n("f60d"),n("a1dd")),z=n.n(Q),K=(n("5415"),n("d559")),X=n.n(K),Z=(n("9fb0"),n("ab51")),ee=n.n(Z),te=(n("f560"),n("c597")),ne=n.n(te),re=(n("b48b"),n("ed60")),se=n.n(re),oe=(n("7296"),n("a826")),ie=n.n(oe),ae=(n("8989"),n("f5c0")),ue=n.n(ae),le=(n("2b7a"),n("05f6")),ce=n.n(le),de=(n("3411"),n("4810")),he=n.n(de),pe=(n("51bb"),n("28af")),fe=n.n(pe),ve=(n("737e"),n("7d11")),ge=n.n(ve),me=(n("a1a7"),n("9ebf")),ke=n.n(me),be=(n("5b96"),n("d867")),Le=n.n(be),ye=(n("3bc8"),n("ee0f")),Oe=n.n(ye),je=(n("34c0"),n("aff9")),Ne=n.n(je),Ie=(n("4af4"),n("44fb")),Ue=n.n(Ie),Pe=function(e){e.use(Ue.a),e.use(Ne.a),e.use(Oe.a),e.use(Le.a),e.use(ke.a),e.use(ge.a),e.use(fe.a),e.use(he.a),e.use(ce.a),e.use(ue.a),e.use(ie.a),e.use(se.a),e.use(ne.a),e.use(ee.a),e.use(X.a),e.use(z.a),e.use(J.a),e.use(G.a)},Ce=Object(r["createApp"])(_);Pe(Ce),Ce.use(q).use(Y).mount("#app")},cf05:function(e,t,n){e.exports=n.p+"img/logo.27317798.png"},df76:function(e,t,n){"use strict";var r=n("b85c"),s=n("d4ec"),o=n("bee2"),i=(n("1276"),n("ac1f"),n("498a"),n("99af"),n("4d90"),n("5319"),n("caad"),n("2532"),function(){function e(){Object(s["a"])(this,e)}return Object(o["a"])(e,[{key:"getLoginTokenCookie",value:function(){var e,t=document.cookie,n=t.split(";"),s=Object(r["a"])(n);try{for(s.s();!(e=s.n()).done;){var o=e.value;if(o=o.trim(),0===o.indexOf("token="))return o.substring("token=".length,o.length)}}catch(i){s.e(i)}finally{s.f()}return""}},{key:"imagesUploadHandler",value:function(e,t){var n=!1;return function(r,s,o,i){e();var a="data:image/jpeg;base64,"+r.base64();console.log("About to upload a image");var u=10,l=setInterval((function(){0===u?(s(a),t(),window.clearInterval(l)):n&&5===u?(o("error force",{remove:!0}),t(),window.clearInterval(l)):(u-=1,i((10-u)/10*100))}),100)}}},{key:"getDateFullDate",value:function(e){return"".concat(e.getFullYear(),"-").concat(e.getMonth()+1,"-").concat(e.getDate())}},{key:"getDateDate",value:function(e){return"".concat(e.getMonth()+1,"-").concat(e.getDate())}},{key:"getDateTime",value:function(e){var t=String(e.getMinutes());return"".concat(e.getHours(),":").concat(t.padStart(2,"0"))}},{key:"getProperDateString",value:function(e){return e.getFullYear()!==(new Date).getFullYear()?"".concat(this.getDateFullDate(e)," ").concat(this.getDateTime(e)):this.getDateDate(e)!==this.getDateDate(new Date)?"".concat(this.getDateDate(e)," ").concat(this.getDateTime(e)):this.getDateTime(e)}},{key:"htmlUnescape",value:function(e){return e.replace(/&lt;|&gt;|&amp;|&quot;|&nbsp;/g,(function(e,t,n){switch(e){case"&lt;":return"<";case"&gt;":return">";case"&amp;":return"&";case"&quot;":return'"';case"&nbsp;":return" "}return n}))}},{key:"extractTextFromHtml",value:function(e){var t=document.createElement("div");return t.innerHTML=e,t.innerText}},{key:"locationSearchToQuery",value:function(e){if(!e.includes("?"))return{};e=e.substr(1);var t,n={},s=e.split("&"),o=Object(r["a"])(s);try{for(o.s();!(t=o.n()).done;){var i=t.value,a=i.split("=");n[a[0]]=a[1]}}catch(u){o.e(u)}finally{o.f()}return n}}]),e}()),a=new i;t["a"]=a},e858:function(e,t,n){}});
//# sourceMappingURL=app.bdb815ac.js.map