!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("react-fa")):"function"==typeof define&&define.amd?define(["react","react-fa"],t):"object"==typeof exports?exports.FacebookLogin=t(require("react"),require("react-fa")):e.FacebookLogin=t(e.react,e["react-fa"])}(this,function(e,t){return function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){e.exports=o(2)},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),a=o(5),c=n(a),p=o(3),l=n(p),u=o(6),f=function(e){function t(o){var n=this;r(this,t),e.call(this,o),this.checkLoginState=function(e){e.authResponse?n.props.callback({success:!0,data:e.authResponse}):n.props.callback&&(n.setState({isFetching:!1}),n.props.callback({success:!1,data:e.authResponse}))},this.click=function(){n.setState({isFetching:!0}),FB.login(n.checkLoginState,{scope:n.props.scope})},this.state={isFetching:!1,isLoading:!0}}return i(t,e),s(t,null,[{key:"propTypes",value:{callback:a.PropTypes.func.isRequired,appId:a.PropTypes.string.isRequired,xfbml:a.PropTypes.bool,cookie:a.PropTypes.bool,scope:a.PropTypes.string,textButton:a.PropTypes.string,autoLoad:a.PropTypes.bool,size:a.PropTypes.string,fields:a.PropTypes.string,cssClass:a.PropTypes.string,version:a.PropTypes.string,language:a.PropTypes.string},enumerable:!0},{key:"defaultProps",value:{textButton:"Login with Facebook",scope:"public_profile, email",xfbml:!1,cookie:!1,size:"medium",fields:"name",cssClass:"kep-login-facebook",version:"2.5",language:"en_US"},enumerable:!0}]),t.prototype.componentDidMount=function(){var e=this,t=document.createElement("div");t.id="fb-root",document.body.appendChild(t),window.FB?this.setState({isLoading:!1}):window.fbAsyncInit=function(){FB.init({appId:e.props.appId,xfbml:e.props.xfbml,cookie:e.props.cookie,version:"v"+e.props.version}),e.props.autoLoad&&FB.getLoginStatus(e.checkLoginState),e.setState({isLoading:!1})},function(t,o,n){var r=t.getElementsByTagName(o)[0],i=r,s=r;t.getElementById(n)||(s=t.createElement(o),s.id=n,s.src="//connect.facebook.net/"+e.props.language+"/sdk.js",i.parentNode.insertBefore(s,i))}(document,"script","facebook-jssdk")},t.prototype.render=function(){var e,t;this.state.isFetching?(e=c["default"].createElement(u.Icon,{spin:!0,name:"spinner"}),t="Logging In..."):(e=this.state.isLoading?c["default"].createElement(u.Icon,{spin:!0,name:"spinner"}):c["default"].createElement(u.Icon,{name:"facebook"}),t=this.state.isLoading?"Loading...":this.props.textButton);var o=!!this.state.isLoading;return c["default"].createElement("div",null,c["default"].createElement("button",{type:"button",style:this.props.style,disabled:o,className:this.props.cssClass+" "+this.props.size,onClick:this.click},e," ",t),c["default"].createElement("style",{dangerouslySetInnerHTML:{__html:l["default"]}}))},t}(c["default"].Component);t["default"]=f,e.exports=t["default"]},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0;var r=o(1),i=n(r);t["default"]=i["default"],e.exports=t["default"]},function(e,t,o){t=e.exports=o(4)(),t.push([e.id,".kep-login-facebook{font-family:Roboto,sans-serif;font-weight:700;-webkit-font-smoothing:antialiased;color:#fff;cursor:pointer;display:inline-block;font-size:calc(.27548vw + 10.71074px);text-decoration:none;text-transform:uppercase;transition:background-color .3s,border-color .3s;background-color:#4c69ba;border:calc(.06887vw + .67769px) solid #4c69ba;padding:calc(.34435vw + 13.38843px) calc(.34435vw + 18.38843px)}.kep-login-facebook.small{padding:calc(.34435vw + 3.38843px) calc(.34435vw + 8.38843px)}.kep-login-facebook.medium{padding:calc(.34435vw + 8.38843px) calc(.34435vw + 13.38843px)}.kep-login-facebook.metro{border-radius:0}.kep-login-facebook .fa{margin-right:calc(.34435vw + 3.38843px)}button:focus{outline:none}",""]),t.locals={"kep-login-facebook":"kep-login-facebook",small:"small",medium:"medium",metro:"metro",fa:"fa"}},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var o=this[t];o[2]?e.push("@media "+o[2]+"{"+o[1]+"}"):e.push(o[1])}return e.join("")},e.i=function(t,o){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(n[i]=!0)}for(r=0;r<t.length;r++){var s=t[r];"number"==typeof s[0]&&n[s[0]]||(o&&!s[2]?s[2]=o:o&&(s[2]="("+s[2]+") and ("+o+")"),e.push(s))}},e}},function(t,o){t.exports=e},function(e,o){e.exports=t}])});