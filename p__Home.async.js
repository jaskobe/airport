(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"STA+":function(e,a,t){"use strict";t.r(a);var n,r,o,i=t("2Taf"),s=t.n(i),c=t("vZ4D"),l=t.n(c),d=t("l4Ni"),p=t.n(d),m=t("ujKo"),u=t.n(m),h=t("MhPg"),v=t.n(h),g=t("q1tI"),E=t.n(g),f=t("QdZy"),w=t("usdK"),y=(t("RVtD"),t("UCyy")),N=t.n(y),_=(t("w+GO"),t("2iNG")),k=t.n(_),x=t("dY+O"),B=t.n(x),C=t("3i6b"),P=t.n(C),b=t("ZMBT"),T=t("TxhB"),V=t("Cz4r"),S=t("vVxf"),j=t("Vb9E"),A=t("49il"),D=(t("+L6B"),t("2/Rp")),I=t("MuoO"),L=t("sjxq"),M=t.n(L),O=(n=Object(I["connect"])(function(e){return{loading:e.loading,login:e.login}}),n((o=function(e){function a(){var e,t;s()(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return t=p()(this,(e=u()(a)).call.apply(e,[this].concat(r))),t.state={userName:"",password:"",active:!1,error:""},t.onUserNameChange=function(e){t.setState({userName:e.target.value},function(){t.checkValid()})},t.onPwdChange=function(e){t.setState({password:e.target.value},function(){t.checkValid()})},t.checkValid=function(){var e=t.state,a=e.userName,n=e.password;return t.setState({active:!(!a||!n)}),!(!a||!n)},t.handleLogin=function(){var e=t.state,a=e.userName,n=e.password;t.props.dispatch({type:"login/doLogin",payload:{username:a,pass:n}})},t}return v()(a,e),l()(a,[{key:"render",value:function(){var e=this.state.active,a=this.props.login,t=a.errorTip,n=a.isLogin;return E.a.createElement("div",{className:"".concat(M.a.layer," ").concat(n&&M.a.none)},E.a.createElement("div",{className:M.a.formBox},E.a.createElement("h3",null,"\u767b\u5f55"),E.a.createElement("input",{type:"text",placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d",onChange:this.onUserNameChange}),E.a.createElement("input",{type:"password",placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801",onChange:this.onPwdChange}),E.a.createElement("p",{className:M.a.errorTip},t),E.a.createElement(D["a"],{className:"".concat(M.a.submitBtn," ").concat(e&&M.a.active),onClick:this.handleLogin},"\u767b\u5f55")))}}]),a}(g["Component"]),r=o))||r),R=O,Y=function(e){function a(){var e,t;s()(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return t=p()(this,(e=u()(a)).call.apply(e,[this].concat(r))),t.state={videoEnd:!1,loading:!0,onProgress:!1},t.onVideoEnd=function(){t.setState({videoEnd:!0})},t.onVideoProgress=function(){t.setState({onProgress:!0,loading:!1})},t.handleReplay=function(){window.location.reload()},t}return v()(a,e),l()(a,[{key:"componentDidMount",value:function(){new f["a"](".swiper-container",{autoplay:!1,slidesPerView:5,spaceBetween:0,centeredSlides:!0,loop:!0,slideToClickedSlide:!0,on:{click:function(e){var a=e.target.getAttribute("path");w["a"].push(a)}}})}},{key:"render",value:function(){var e=this.state,a=e.videoEnd,t=e.loading,n=(e.onProgress,{opacity:a?1:0});return E.a.createElement("div",{className:N.a.wrapper},E.a.createElement("video",{autoPlay:!0,muted:!0,onPlay:this.onVideoProgress,onEnded:this.onVideoEnd,style:{opacity:1}},E.a.createElement("source",{src:B.a,type:"video/ogg"}),E.a.createElement("source",{src:k.a,type:"video/mp4"}),"Your browser does not support the video tag."),t&&E.a.createElement("div",{className:N.a.loadingBox},E.a.createElement("div",{className:N.a.cloud}),E.a.createElement("p",null,"\u6b63\u5728\u4e3a\u60a8\u521d\u59cb\u5316\u9875\u9762\u2026\u2026")),E.a.createElement("div",{className:N.a.contentWrapper},E.a.createElement("div",{className:N.a.introBox,style:n},E.a.createElement(b["e"],{len:10,width:2}),E.a.createElement("img",{src:P.a,className:N.a.headParal,alt:""}),E.a.createElement("h3",null,"\u5317\u4eac\u5927\u5174\u56fd\u9645\u673a\u573a \u73af\u5883\u7ba1\u7406\u4fe1\u606f\u7cfb\u7edf"),E.a.createElement("p",null,"\u7eff\u8272\u5efa\u8bbe\u6307\u6807\u5c55\u793a")),E.a.createElement("div",{className:N.a.enTitle,style:n},"Beijing Daxing International Airport Environmental Management Information System"),E.a.createElement("div",{className:N.a.pageSwiper,style:{bottom:a?75:-300}},E.a.createElement("div",{className:"swiper-container"},E.a.createElement("div",{className:"swiper-wrapper"},V["a"].map(function(e,a){var t=a+1>9?a+1:"0".concat(a+1),n=e.name,r=e.en,o=e.path;return E.a.createElement("div",{className:"swiper-slide",path:o,key:a},E.a.createElement(T["a"],{id:t,title:n,en:r,path:o}))})))),E.a.createElement(S["a"],{showIcon:a}),E.a.createElement(j["a"],{show:a}),a&&E.a.createElement(A["a"],{onClick:this.handleReplay}),a&&E.a.createElement(R,null)))}}]),a}(g["Component"]);a["default"]=Y},"dY+O":function(e,a,t){e.exports=t.p+"static/video-first-frame.8eb29626.jpg"},sjxq:function(e,a,t){e.exports={none:"none___36p-a",layer:"layer___3af7T",formBox:"formBox___37wou",submitBtn:"submitBtn___3IQuZ",active:"active___3YJ-P",errorTip:"errorTip___ETD-e"}}}]);