!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.FacebookLogin=t(require("react")):e.FacebookLogin=t(e.react)}(this,function(e){return function(e){function t(o){if(r[o])return r[o].exports;var n=r[o]={exports:{},id:o,loaded:!1};return e[o].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){e.exports=r(5)},function(t,r){t.exports=e},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={easeOutFunction:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutFunction:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeOut:function(e,t,r,o){if(o=o||this.easeOutFunction,t&&"[object Array]"===Object.prototype.toString.call(t)){for(var n="",i=0;i<t.length;i++)n&&(n+=","),n+=this.create(e,t[i],r,o);return n}return this.create(e,t,r,o)},create:function(e,t,r,o){return e=e||"450ms",t=t||"all",r=r||"0ms",o=o||"linear",t+" "+e+" "+o+" "+r}}},function(e,t){e.exports=function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}},function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),s=r(1),l=o(s),u=r(6),c=o(u),p=r(11),f=o(p),d=function(e){function t(r){var o=this;n(this,t),e.call(this,r),this.checkLoginState=function(e){e.authResponse?(o.setState({isFetching:!1}),o.props.callback({success:!0,data:e.authResponse})):o.props.callback&&(o.setState({isFetching:!1}),o.props.callback({success:!1,data:e.authResponse}))},this.click=function(){o.setState({isFetching:!0}),FB.login(o.checkLoginState,{scope:o.props.scope})},this.state={isFetching:!1,isLoading:!0}}return i(t,e),a(t,null,[{key:"propTypes",value:{callback:s.PropTypes.func.isRequired,appId:s.PropTypes.string.isRequired,xfbml:s.PropTypes.bool,cookie:s.PropTypes.bool,scope:s.PropTypes.string,textButton:s.PropTypes.string,autoLoad:s.PropTypes.bool,size:s.PropTypes.string,fields:s.PropTypes.string,cssClass:s.PropTypes.string,version:s.PropTypes.string,language:s.PropTypes.string},enumerable:!0},{key:"defaultProps",value:{textButton:"Login with Facebook",scope:"public_profile, email",xfbml:!1,cookie:!1,size:"metro",fields:"name",cssClass:"kep-login-facebook",version:"2.5",language:"en_US"},enumerable:!0}]),t.prototype.componentDidMount=function(){var e=this,t=document.createElement("div");t.id="fb-root",document.body.appendChild(t),window.FB?this.setState({isLoading:!1}):window.fbAsyncInit=function(){FB.init({appId:e.props.appId,xfbml:e.props.xfbml,cookie:e.props.cookie,version:"v"+e.props.version}),e.props.autoLoad&&FB.getLoginStatus(e.checkLoginState),e.setState({isLoading:!1})},function(t,r,o){var n=t.getElementsByTagName(r)[0],i=n,a=n;t.getElementById(o)||(a=t.createElement(r),a.id=o,a.src="//connect.facebook.net/"+e.props.language+"/sdk.js",i.parentNode.insertBefore(a,i))}(document,"script","facebook-jssdk")},t.prototype.render=function(){var e,t={iconFetching:{position:"absolute",top:"4px",left:"30px"},iconFetchingBound:{display:"inline-block",position:"relative",backgroundColor:"#4C69BA",boxShadow:"none"},btnFB:{minWidth:"250px",width:"25%",height:"52px"}},r=l["default"].createElement("div",{style:t.iconFetching},l["default"].createElement(f["default"],{size:40,left:10,top:0,status:"loading",loadingColor:"white",style:t.iconFetchingBound}));this.state.isFetching?e=l["default"].createElement("div",{style:{marginLeft:"40px"}},"Logging In..."):(r=this.state.isLoading?r:"",e=this.state.isLoading?l["default"].createElement("div",{style:{marginLeft:"40px"}},"Loading..."):this.props.textButton);var o=!!this.state.isLoading;return l["default"].createElement("div",null,l["default"].createElement("button",{style:t.btnFB,disabled:o,className:this.props.cssClass+" "+this.props.size,onClick:this.click},r," ",e),l["default"].createElement("style",{dangerouslySetInnerHTML:{__html:c["default"]}}))},t}(l["default"].Component);t["default"]=d,e.exports=t["default"]},function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0;var n=r(4),i=o(n);t["default"]=i["default"],e.exports=t["default"]},function(e,t,r){t=e.exports=r(7)(),t.push([e.id,".kep-login-facebook{font-family:Helvetica,sans-serif;font-weight:700;-webkit-font-smoothing:antialiased;color:#fff;cursor:pointer;display:inline-block;font-size:calc(.27548vw + 12.71074px);text-decoration:none;text-transform:uppercase;transition:background-color .3s,border-color .3s;background-color:#4c69ba;border:calc(.06887vw + .67769px) solid #4c69ba;padding:calc(.34435vw + 13.38843px) calc(.34435vw + 18.38843px)}.kep-login-facebook.small{padding:calc(.34435vw + 3.38843px) calc(.34435vw + 8.38843px)}.kep-login-facebook.medium{padding:calc(.34435vw + 8.38843px) calc(.34435vw + 13.38843px)}.kep-login-facebook.metro{border-radius:0}.kep-login-facebook .fa{margin-right:calc(.34435vw + 3.38843px)}",""]),t.locals={"kep-login-facebook":"kep-login-facebook",small:"small",medium:"medium",metro:"metro",fa:"fa"}},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var r=this[t];r[2]?e.push("@media "+r[2]+"{"+r[1]+"}"):e.push(r[1])}return e.join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},n=0;n<this.length;n++){var i=this[n][0];"number"==typeof i&&(o[i]=!0)}for(n=0;n<t.length;n++){var a=t[n];"number"==typeof a[0]&&o[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),e.push(a))}},e}},function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){var r={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t){var r=e.circle,o=e.rounded,n=e.transitionEnabled,i=e.zDepth,a=t.muiTheme,s=a.baseTheme,l=a.paper;return{root:{color:l.color,backgroundColor:l.backgroundColor,transition:n&&m["default"].easeOut(),boxSizing:"border-box",fontFamily:s.fontFamily,WebkitTapHighlightColor:"rgba(0,0,0,0)",boxShadow:l.zDepthShadows[i-1],borderRadius:r?"50%":o?"2px":"0px"}}}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},c=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),p=r(3),f=o(p),d=r(1),h=o(d),y=r(13),g=o(y),b=r(2),m=o(b),v=function(e){function t(){return i(this,t),a(this,Object.getPrototypeOf(t).apply(this,arguments))}return s(t,e),c(t,[{key:"render",value:function(){var e=this.props,t=e.children,r=e.style,o=n(e,["children","style"]),i=this.context.muiTheme.prepareStyles,a=l(this.props,this.context);return h["default"].createElement("div",u({},o,{style:i((0,f["default"])(a.root,r))}),t)}}]),t}(d.Component);v.propTypes={children:d.PropTypes.node,circle:d.PropTypes.bool,rounded:d.PropTypes.bool,style:d.PropTypes.object,transitionEnabled:d.PropTypes.bool,zDepth:g["default"].zDepth},v.defaultProps={circle:!1,rounded:!0,transitionEnabled:!0,zDepth:1},v.contextTypes={muiTheme:d.PropTypes.object.isRequired},t["default"]=v},function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(8),i=o(n);t["default"]=i["default"]},function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e){var t=.1*e.size;return{root:{position:"absolute",zIndex:2,width:e.size,height:e.size,padding:t,top:-1e4,left:-1e4,transform:"translate3d("+(1e4+e.left)+"px, "+(1e4+e.top)+"px, 0)",opacity:"hide"===e.status?0:1,transition:"hide"===e.status?m["default"].create("all",".3s","ease-out"):"none"}}}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){var r=[],o=!0,n=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(r.push(a.value),!t||r.length!==t);o=!0);}catch(l){n=!0,i=l}finally{try{!o&&s["return"]&&s["return"]()}finally{if(n)throw i}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},c=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),p=r(3),f=o(p),d=r(1),h=o(d),y=r(12),g=o(y),b=r(2),m=o(b),v=r(9),k=o(v),T=32,P=function(e){function t(){return n(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),c(t,[{key:"componentDidMount",value:function(){this.scalePath(this.refs.path,0),this.rotateWrapper(this.refs.wrapper)}},{key:"componentDidUpdate",value:function(){clearTimeout(this.scalePathTimer),clearTimeout(this.rotateWrapperTimer),clearTimeout(this.rotateWrapperSecondTimer),this.scalePath(this.refs.path,0),this.rotateWrapper(this.refs.wrapper)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.scalePathTimer),clearTimeout(this.rotateWrapperTimer),clearTimeout(this.rotateWrapperSecondTimer)}},{key:"renderChildren",value:function(){var e=this.context.muiTheme.prepareStyles,t=this.getPaperSize(),r=null;if("ready"!==this.props.status){var o=this.getCircleStyle(t);r=h["default"].createElement("div",{ref:"wrapper",style:e({transition:m["default"].create("transform","20s",null,"linear"),width:"100%",height:"100%"})},h["default"].createElement("svg",{style:{width:t,height:t},viewBox:"0 0 "+T+" "+T},h["default"].createElement("circle",u({ref:"path",style:e((0,f["default"])(o.style,{transition:m["default"].create("all","1.5s",null,"ease-in-out")}))},o.attr))))}else{var n=this.getCircleStyle(t),i=this.getPolygonStyle(t);r=h["default"].createElement("svg",{style:{width:t,height:t},viewBox:"0 0 "+T+" "+T},h["default"].createElement("circle",u({style:e(n.style)},n.attr)),h["default"].createElement("polygon",u({style:e(i.style)},i.attr)))}return r}},{key:"getTheme",value:function(){return this.context.muiTheme.refreshIndicator}},{key:"getPaddingSize",value:function(){var e=.1*this.props.size;return e}},{key:"getPaperSize",value:function(){return this.props.size-2*this.getPaddingSize()}},{key:"getCircleAttr",value:function(){return{radiu:T/2-5,originX:T/2,originY:T/2,strokeWidth:3}}},{key:"getArcDeg",value:function(){var e=this.props.percentage/100,t=120*e,r=410*e;return[t,r]}},{key:"getFactor",value:function(){var e=this.props.percentage/100,t=Math.min(1,e/.4);return t}},{key:"getCircleStyle",value:function(){var e="loading"===this.props.status,t=e?1:this.getFactor(),r=this.getCircleAttr(),o=2*Math.PI*r.radiu,n=this.getArcDeg(),i=l(n,2),a=i[0],s=i[1],u=(s-a)*o/360,c=-a*o/360,p=this.getTheme();return{style:{strokeDasharray:u+", "+(o-u),strokeDashoffset:c,stroke:e||100===this.props.percentage?this.props.loadingColor||p.loadingStrokeColor:this.props.color||p.strokeColor,strokeLinecap:"round",opacity:t,strokeWidth:r.strokeWidth*t,fill:"none"},attr:{cx:r.originX,cy:r.originY,r:r.radiu}}}},{key:"getPolygonStyle",value:function(){var e=this.getFactor(),t=this.getCircleAttr(),r=t.originX+t.radiu,o=t.originY,n=7*t.strokeWidth/4*e,i=r-n+","+o+" "+(r+n)+","+o+" "+r+","+(o+n),a=this.getArcDeg(),s=l(a,2),u=s[1],c=this.getTheme();return{style:{fill:100===this.props.percentage?this.props.loadingColor||c.loadingStrokeColor:this.props.color||c.strokeColor,transform:"rotate("+u+"deg)",transformOrigin:t.originX+"px "+t.originY+"px",opacity:e},attr:{points:i}}}},{key:"scalePath",value:function(e,t){var r=this;if("loading"===this.props.status){var o=(t||0)%3,n=this.getCircleAttr(),i=2*Math.PI*n.radiu,a=.64*i,s=void 0,l=void 0,u=void 0;0===o?(s="1, 200",l=0,u="0ms"):1===o?(s=a+", 200",l=-15,u="750ms"):(s=a+", 200",l=-(i-1),u="850ms"),g["default"].set(e.style,"strokeDasharray",s),g["default"].set(e.style,"strokeDashoffset",l),g["default"].set(e.style,"transitionDuration",u),this.scalePathTimer=setTimeout(function(){return r.scalePath(e,o+1)},o?750:250)}}},{key:"rotateWrapper",value:function(e){var t=this;"loading"===this.props.status&&(g["default"].set(e.style,"transform",null),g["default"].set(e.style,"transform","rotate(0deg)"),g["default"].set(e.style,"transitionDuration","0ms"),this.rotateWrapperSecondTimer=setTimeout(function(){g["default"].set(e.style,"transform","rotate(1800deg)"),g["default"].set(e.style,"transitionDuration","10s"),g["default"].set(e.style,"transitionTimingFunction","linear")},50),this.rotateWrapperTimer=setTimeout(function(){return t.rotateWrapper(e)},10050))}},{key:"render",value:function(){var e=this.props.style,t=s(this.props,this.context);return h["default"].createElement(k["default"],{circle:!0,style:(0,f["default"])(t.root,e),ref:"indicatorCt"},this.renderChildren())}}]),t}(d.Component);P.propTypes={color:d.PropTypes.string,left:d.PropTypes.number.isRequired,loadingColor:d.PropTypes.string,percentage:d.PropTypes.number,size:d.PropTypes.number,status:d.PropTypes.oneOf(["ready","loading","hide"]),style:d.PropTypes.object,top:d.PropTypes.number.isRequired},P.defaultProps={percentage:0,size:40,status:"hide"},P.contextTypes={muiTheme:d.PropTypes.object.isRequired},t["default"]=P},function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(10),i=o(n);t["default"]=i["default"]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={set:function(e,t,r){e[t]=r}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),n=o.PropTypes.oneOf(["left","middle","right"]),i=o.PropTypes.oneOf(["top","center","bottom"]);t["default"]={corners:o.PropTypes.oneOf(["bottom-left","bottom-right","top-left","top-right"]),horizontal:n,vertical:i,origin:o.PropTypes.shape({horizontal:n,vertical:i}),cornersAndCenter:o.PropTypes.oneOf(["bottom-center","bottom-left","bottom-right","top-center","top-left","top-right"]),stringOrNumber:o.PropTypes.oneOfType([o.PropTypes.string,o.PropTypes.number]),zDepth:o.PropTypes.oneOf([0,1,2,3,4,5])}}])});