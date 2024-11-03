import{ap as H,R as F,al as g,am as u,an as se,aq as le,ar as ue}from"./index-yhSriC5t.js";var de={exports:{}},ve="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ge=ve,Pe=ge;function ce(){}function fe(){}fe.resetWarningCache=ce;var be=function(){function r(a,i,o,c,h,f){if(f!==Pe){var n=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw n.name="Invariant Violation",n}}r.isRequired=r;function e(){return r}var t={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:e,element:r,elementType:r,instanceOf:e,node:r,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:fe,resetWarningCache:ce};return t.PropTypes=t,t};de.exports=be();var xe=de.exports;const y=H(xe);var we=function r(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var a,i,o;if(Array.isArray(e)){if(a=e.length,a!=t.length)return!1;for(i=a;i--!==0;)if(!r(e[i],t[i]))return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if(o=Object.keys(e),a=o.length,a!==Object.keys(t).length)return!1;for(i=a;i--!==0;)if(!Object.prototype.hasOwnProperty.call(t,o[i]))return!1;for(i=a;i--!==0;){var c=o[i];if(!r(e[c],t[c]))return!1}return!0}return e!==e&&t!==t};const _e=H(we);var U={exports:{}},pe;/**
* @link https://github.com/gajus/sister for the canonical source repository
* @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
*/pe=function(){var r={},e={};return r.on=function(t,a){var i={name:t,handler:a};return e[t]=e[t]||[],e[t].unshift(i),i},r.off=function(t){var a=e[t.name].indexOf(t);a!==-1&&e[t.name].splice(a,1)},r.trigger=function(t,a){var i=e[t],o;if(i)for(o=i.length;o--;)i[o].handler(a)},r};var Se=pe,q={exports:{}},Ce=function(e,t,a){var i=document.head||document.getElementsByTagName("head")[0],o=document.createElement("script");typeof t=="function"&&(a=t,t={}),t=t||{},a=a||function(){},o.type=t.type||"text/javascript",o.charset=t.charset||"utf8",o.async="async"in t?!!t.async:!0,o.src=e,t.attrs&&Ee(o,t.attrs),t.text&&(o.text=""+t.text);var c="onload"in o?ae:Ae;c(o,a),o.onload||ae(o,a),i.appendChild(o)};function Ee(r,e){for(var t in e)r.setAttribute(t,e[t])}function ae(r,e){r.onload=function(){this.onerror=this.onload=null,e(null,r)},r.onerror=function(){this.onerror=this.onload=null,e(new Error("Failed to load "+this.src),r)}}function Ae(r,e){r.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,e(null,r))}}(function(r,e){Object.defineProperty(e,"__esModule",{value:!0});var t=Ce,a=i(t);function i(o){return o&&o.__esModule?o:{default:o}}e.default=function(o){var c=new Promise(function(h){if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function){h(window.YT);return}else{var f=window.location.protocol==="http:"?"http:":"https:";(0,a.default)(f+"//www.youtube.com/iframe_api",function(s){s&&o.trigger("error",s)})}var n=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){n&&n(),h(window.YT)}});return c},r.exports=e.default})(q,q.exports);var Te=q.exports,B={exports:{}},Q={exports:{}},W={exports:{}},N=1e3,j=N*60,k=j*60,D=k*24,Ie=D*365.25,Oe=function(r,e){e=e||{};var t=typeof r;if(t==="string"&&r.length>0)return Re(r);if(t==="number"&&isNaN(r)===!1)return e.long?je(r):Ne(r);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(r))};function Re(r){if(r=String(r),!(r.length>100)){var e=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(r);if(e){var t=parseFloat(e[1]),a=(e[2]||"ms").toLowerCase();switch(a){case"years":case"year":case"yrs":case"yr":case"y":return t*Ie;case"days":case"day":case"d":return t*D;case"hours":case"hour":case"hrs":case"hr":case"h":return t*k;case"minutes":case"minute":case"mins":case"min":case"m":return t*j;case"seconds":case"second":case"secs":case"sec":case"s":return t*N;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return t;default:return}}}}function Ne(r){return r>=D?Math.round(r/D)+"d":r>=k?Math.round(r/k)+"h":r>=j?Math.round(r/j)+"m":r>=N?Math.round(r/N)+"s":r+"ms"}function je(r){return Y(r,D,"day")||Y(r,k,"hour")||Y(r,j,"minute")||Y(r,N,"second")||r+" ms"}function Y(r,e,t){if(!(r<e))return r<e*1.5?Math.floor(r/e)+" "+t:Math.ceil(r/e)+" "+t+"s"}(function(r,e){e=r.exports=i.debug=i.default=i,e.coerce=f,e.disable=c,e.enable=o,e.enabled=h,e.humanize=Oe,e.names=[],e.skips=[],e.formatters={};var t;function a(n){var s=0,l;for(l in n)s=(s<<5)-s+n.charCodeAt(l),s|=0;return e.colors[Math.abs(s)%e.colors.length]}function i(n){function s(){if(s.enabled){var l=s,p=+new Date,m=p-(t||p);l.diff=m,l.prev=t,l.curr=p,t=p;for(var d=new Array(arguments.length),P=0;P<d.length;P++)d[P]=arguments[P];d[0]=e.coerce(d[0]),typeof d[0]!="string"&&d.unshift("%O");var v=0;d[0]=d[0].replace(/%([a-zA-Z%])/g,function(b,_){if(b==="%%")return b;v++;var w=e.formatters[_];if(typeof w=="function"){var I=d[v];b=w.call(l,I),d.splice(v,1),v--}return b}),e.formatArgs.call(l,d);var x=s.log||e.log||console.log.bind(console);x.apply(l,d)}}return s.namespace=n,s.enabled=e.enabled(n),s.useColors=e.useColors(),s.color=a(n),typeof e.init=="function"&&e.init(s),s}function o(n){e.save(n),e.names=[],e.skips=[];for(var s=(typeof n=="string"?n:"").split(/[\s,]+/),l=s.length,p=0;p<l;p++)s[p]&&(n=s[p].replace(/\*/g,".*?"),n[0]==="-"?e.skips.push(new RegExp("^"+n.substr(1)+"$")):e.names.push(new RegExp("^"+n+"$")))}function c(){e.enable("")}function h(n){var s,l;for(s=0,l=e.skips.length;s<l;s++)if(e.skips[s].test(n))return!1;for(s=0,l=e.names.length;s<l;s++)if(e.names[s].test(n))return!0;return!1}function f(n){return n instanceof Error?n.stack||n.message:n}})(W,W.exports);var ke=W.exports;(function(r,e){var t={};e=r.exports=ke,e.log=o,e.formatArgs=i,e.save=c,e.load=h,e.useColors=a,e.storage=typeof chrome<"u"&&typeof chrome.storage<"u"?chrome.storage.local:f(),e.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"];function a(){return typeof window<"u"&&window.process&&window.process.type==="renderer"?!0:typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}e.formatters.j=function(n){try{return JSON.stringify(n)}catch(s){return"[UnexpectedJSONParseError]: "+s.message}};function i(n){var s=this.useColors;if(n[0]=(s?"%c":"")+this.namespace+(s?" %c":" ")+n[0]+(s?"%c ":" ")+"+"+e.humanize(this.diff),!!s){var l="color: "+this.color;n.splice(1,0,l,"color: inherit");var p=0,m=0;n[0].replace(/%[a-zA-Z%]/g,function(d){d!=="%%"&&(p++,d==="%c"&&(m=p))}),n.splice(m,0,l)}}function o(){return typeof console=="object"&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function c(n){try{n==null?e.storage.removeItem("debug"):e.storage.debug=n}catch{}}function h(){var n;try{n=e.storage.debug}catch{}return!n&&typeof process<"u"&&"env"in process&&(n=t.DEBUG),n}e.enable(h());function f(){try{return window.localStorage}catch{}}})(Q,Q.exports);var De=Q.exports,z={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe"],r.exports=e.default})(z,z.exports);var Ve=z.exports,G={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],r.exports=e.default})(G,G.exports);var Ye=G.exports,$={exports:{}},J={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},r.exports=e.default})(J,J.exports);var Me=J.exports;(function(r,e){Object.defineProperty(e,"__esModule",{value:!0});var t=Me,a=i(t);function i(o){return o&&o.__esModule?o:{default:o}}e.default={pauseVideo:{acceptableStates:[a.default.ENDED,a.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[a.default.ENDED,a.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[a.default.ENDED,a.default.PLAYING,a.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},r.exports=e.default})($,$.exports);var Le=$.exports;(function(r,e){Object.defineProperty(e,"__esModule",{value:!0});var t=De,a=s(t),i=Ve,o=s(i),c=Ye,h=s(c),f=Le,n=s(f);function s(m){return m&&m.__esModule?m:{default:m}}var l=(0,a.default)("youtube-player"),p={};p.proxyEvents=function(m){var d={},P=function(O){var C="on"+O.slice(0,1).toUpperCase()+O.slice(1);d[C]=function(A){l('event "%s"',C,A),m.trigger(O,A)}},v=!0,x=!1,b=void 0;try{for(var _=h.default[Symbol.iterator](),w;!(v=(w=_.next()).done);v=!0){var I=w.value;P(I)}}catch(V){x=!0,b=V}finally{try{!v&&_.return&&_.return()}finally{if(x)throw b}}return d},p.promisifyPlayer=function(m){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,P={},v=function(C){d&&n.default[C]?P[C]=function(){for(var A=arguments.length,R=Array(A),E=0;E<A;E++)R[E]=arguments[E];return m.then(function(S){var T=n.default[C],he=S.getPlayerState(),K=S[C].apply(S,R);return T.stateChangeRequired||Array.isArray(T.acceptableStates)&&T.acceptableStates.indexOf(he)===-1?new Promise(function(ee){var ye=function te(){var me=S.getPlayerState(),re=void 0;typeof T.timeout=="number"&&(re=setTimeout(function(){S.removeEventListener("onStateChange",te),ee()},T.timeout)),Array.isArray(T.acceptableStates)&&T.acceptableStates.indexOf(me)!==-1&&(S.removeEventListener("onStateChange",te),clearTimeout(re),ee())};S.addEventListener("onStateChange",ye)}).then(function(){return K}):K})}:P[C]=function(){for(var A=arguments.length,R=Array(A),E=0;E<A;E++)R[E]=arguments[E];return m.then(function(S){return S[C].apply(S,R)})}},x=!0,b=!1,_=void 0;try{for(var w=o.default[Symbol.iterator](),I;!(x=(I=w.next()).done);x=!0){var V=I.value;v(V)}}catch(O){b=!0,_=O}finally{try{!x&&w.return&&w.return()}finally{if(b)throw _}}return P},e.default=p,r.exports=e.default})(B,B.exports);var Fe=B.exports;(function(r,e){Object.defineProperty(e,"__esModule",{value:!0});var t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},a=Se,i=n(a),o=Te,c=n(o),h=Fe,f=n(h);function n(l){return l&&l.__esModule?l:{default:l}}var s=void 0;e.default=function(l){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},m=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,d=(0,i.default)();if(s||(s=(0,c.default)(d)),p.events)throw new Error("Event handlers cannot be overwritten.");if(typeof l=="string"&&!document.getElementById(l))throw new Error('Element "'+l+'" does not exist.');p.events=f.default.proxyEvents(d);var P=new Promise(function(x){if((typeof l>"u"?"undefined":t(l))==="object"&&l.playVideo instanceof Function){var b=l;x(b)}else s.then(function(_){var w=new _.Player(l,p);return d.on("ready",function(){x(w)}),null})}),v=f.default.promisifyPlayer(P,m);return v.on=d.on,v.off=d.off,v},r.exports=e.default})(U,U.exports);var Ue=U.exports;const qe=H(Ue);var Be=Object.defineProperty,Qe=Object.defineProperties,We=Object.getOwnPropertyDescriptors,ne=Object.getOwnPropertySymbols,ze=Object.prototype.hasOwnProperty,Ge=Object.prototype.propertyIsEnumerable,oe=(r,e,t)=>e in r?Be(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,X=(r,e)=>{for(var t in e||(e={}))ze.call(e,t)&&oe(r,t,e[t]);if(ne)for(var t of ne(e))Ge.call(e,t)&&oe(r,t,e[t]);return r},Z=(r,e)=>Qe(r,We(e)),$e=(r,e,t)=>new Promise((a,i)=>{var o=f=>{try{h(t.next(f))}catch(n){i(n)}},c=f=>{try{h(t.throw(f))}catch(n){i(n)}},h=f=>f.done?a(f.value):Promise.resolve(f.value).then(o,c);h((t=t.apply(r,e)).next())});function Je(r,e){var t,a;if(r.videoId!==e.videoId)return!0;const i=((t=r.opts)==null?void 0:t.playerVars)||{},o=((a=e.opts)==null?void 0:a.playerVars)||{};return i.start!==o.start||i.end!==o.end}function ie(r={}){return Z(X({},r),{height:0,width:0,playerVars:Z(X({},r.playerVars),{autoplay:0,start:0,end:0})})}function Xe(r,e){return r.videoId!==e.videoId||!_e(ie(r.opts),ie(e.opts))}function Ze(r,e){var t,a,i,o;return r.id!==e.id||r.className!==e.className||((t=r.opts)==null?void 0:t.width)!==((a=e.opts)==null?void 0:a.width)||((i=r.opts)==null?void 0:i.height)!==((o=e.opts)==null?void 0:o.height)||r.iframeClassName!==e.iframeClassName||r.title!==e.title}var He={videoId:"",id:"",className:"",iframeClassName:"",style:{},title:"",loading:void 0,opts:{},onReady:()=>{},onError:()=>{},onPlay:()=>{},onPause:()=>{},onEnd:()=>{},onStateChange:()=>{},onPlaybackRateChange:()=>{},onPlaybackQualityChange:()=>{}},Ke={videoId:y.string,id:y.string,className:y.string,iframeClassName:y.string,style:y.object,title:y.string,loading:y.oneOf(["lazy","eager"]),opts:y.objectOf(y.any),onReady:y.func,onError:y.func,onPlay:y.func,onPause:y.func,onEnd:y.func,onStateChange:y.func,onPlaybackRateChange:y.func,onPlaybackQualityChange:y.func},M=class extends F.Component{constructor(r){super(r),this.destroyPlayerPromise=void 0,this.onPlayerReady=e=>{var t,a;return(a=(t=this.props).onReady)==null?void 0:a.call(t,e)},this.onPlayerError=e=>{var t,a;return(a=(t=this.props).onError)==null?void 0:a.call(t,e)},this.onPlayerStateChange=e=>{var t,a,i,o,c,h,f,n;switch((a=(t=this.props).onStateChange)==null||a.call(t,e),e.data){case M.PlayerState.ENDED:(o=(i=this.props).onEnd)==null||o.call(i,e);break;case M.PlayerState.PLAYING:(h=(c=this.props).onPlay)==null||h.call(c,e);break;case M.PlayerState.PAUSED:(n=(f=this.props).onPause)==null||n.call(f,e);break}},this.onPlayerPlaybackRateChange=e=>{var t,a;return(a=(t=this.props).onPlaybackRateChange)==null?void 0:a.call(t,e)},this.onPlayerPlaybackQualityChange=e=>{var t,a;return(a=(t=this.props).onPlaybackQualityChange)==null?void 0:a.call(t,e)},this.destroyPlayer=()=>this.internalPlayer?(this.destroyPlayerPromise=this.internalPlayer.destroy().then(()=>this.destroyPlayerPromise=void 0),this.destroyPlayerPromise):Promise.resolve(),this.createPlayer=()=>{if(typeof document>"u")return;if(this.destroyPlayerPromise){this.destroyPlayerPromise.then(this.createPlayer);return}const e=Z(X({},this.props.opts),{videoId:this.props.videoId});this.internalPlayer=qe(this.container,e),this.internalPlayer.on("ready",this.onPlayerReady),this.internalPlayer.on("error",this.onPlayerError),this.internalPlayer.on("stateChange",this.onPlayerStateChange),this.internalPlayer.on("playbackRateChange",this.onPlayerPlaybackRateChange),this.internalPlayer.on("playbackQualityChange",this.onPlayerPlaybackQualityChange),(this.props.title||this.props.loading)&&this.internalPlayer.getIframe().then(t=>{this.props.title&&t.setAttribute("title",this.props.title),this.props.loading&&t.setAttribute("loading",this.props.loading)})},this.resetPlayer=()=>this.destroyPlayer().then(this.createPlayer),this.updatePlayer=()=>{var e;(e=this.internalPlayer)==null||e.getIframe().then(t=>{this.props.id?t.setAttribute("id",this.props.id):t.removeAttribute("id"),this.props.iframeClassName?t.setAttribute("class",this.props.iframeClassName):t.removeAttribute("class"),this.props.opts&&this.props.opts.width?t.setAttribute("width",this.props.opts.width.toString()):t.removeAttribute("width"),this.props.opts&&this.props.opts.height?t.setAttribute("height",this.props.opts.height.toString()):t.removeAttribute("height"),this.props.title?t.setAttribute("title",this.props.title):t.setAttribute("title","YouTube video player"),this.props.loading?t.setAttribute("loading",this.props.loading):t.removeAttribute("loading")})},this.getInternalPlayer=()=>this.internalPlayer,this.updateVideo=()=>{var e,t,a,i;if(typeof this.props.videoId>"u"||this.props.videoId===null){(e=this.internalPlayer)==null||e.stopVideo();return}let o=!1;const c={videoId:this.props.videoId};if((t=this.props.opts)!=null&&t.playerVars&&(o=this.props.opts.playerVars.autoplay===1,"start"in this.props.opts.playerVars&&(c.startSeconds=this.props.opts.playerVars.start),"end"in this.props.opts.playerVars&&(c.endSeconds=this.props.opts.playerVars.end)),o){(a=this.internalPlayer)==null||a.loadVideoById(c);return}(i=this.internalPlayer)==null||i.cueVideoById(c)},this.refContainer=e=>{this.container=e},this.container=null,this.internalPlayer=null}componentDidMount(){this.createPlayer()}componentDidUpdate(r){return $e(this,null,function*(){Ze(r,this.props)&&this.updatePlayer(),Xe(r,this.props)&&(yield this.resetPlayer()),Je(r,this.props)&&this.updateVideo()})}componentWillUnmount(){this.destroyPlayer()}render(){return F.createElement("div",{className:this.props.className,style:this.props.style},F.createElement("div",{id:this.props.id,className:this.props.iframeClassName,ref:this.refContainer}))}},L=M;L.propTypes=Ke;L.defaultProps=He;L.PlayerState={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5};var et=L;const tt=()=>{const r={height:"315",width:"560",playerVars:{autoplay:0}};return u.jsxs(rt,{justify:"space-evenly",align:"center",gap:20,children:[u.jsxs(at,{vertical:!0,align:"center",children:[u.jsx(nt,{children:"Most important title on the page"}),u.jsx(ot,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum ultricies, sem urna convallis metus, vel suscipit nibh lacus tincidunt ante"})]}),u.jsx(it,{children:u.jsx(et,{videoId:"dQw4w9WgXcQ",opts:r})})]})},rt=g(se)`
    padding: 20px;
    @media (max-width:1000px) {
        flex-direction:column;
    }
`,at=g(se)`
    opacity: 0;
    transform: translateX(-20px);
    animation: fadeIn 1.5s forwards;

    @keyframes fadeIn {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`,nt=g.h1`
    font-size: 24px;
    color: #333;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    margin: 0 0 10px;
`,ot=g.small`
    color: #000000;
    font-size: 14px;
    text-align: center;
    max-width: 400px;
    display: inline-block;
    line-height: 1.5;
    text-shadow: 1px 1px 3px rgba(255, 255, 255, 0);
    background: linear-gradient(90deg, #f6f7f9, #e6e9ec);
    padding: 10px 15px;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`,it=g.div`
    overflow: hidden;
    transition: transform 0.3s ease;
    transform: translateX(20px);
    animation: fadeIn 1.5s forwards;

    @keyframes fadeIn {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    &:hover {
        transform: scale(1.03);
    }
    
    @media (max-width: 450px) {
        width: calc(100% - 20px); 
        margin: 0 10px;
    }
`,st=({title:r,description:e})=>u.jsxs(lt,{children:[u.jsx("div",{className:"Logo",children:u.jsx("h2",{children:r})}),u.jsx("span",{children:e})]}),lt=g.article`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;  
`,ut=[{id:1,title:"Title 1",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum"},{id:2,title:"Title 2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum2"},{id:3,title:"Title 3",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum3"},{id:4,title:"Title 4",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum 4"},{id:5,title:"Title 5",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum 5"},{id:6,title:"Title 6",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum 6"}],dt=()=>{const r=le(),e=()=>{r("/contact")};return u.jsxs(ct,{children:[u.jsx(ft,{children:ut.map(t=>u.jsx(pt,{children:u.jsx(st,{title:t.title,description:t.description})},t.id))}),u.jsx(ht,{children:u.jsx(ue,{title:"Contact us",onClick:e})})]})},ct=g.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`,ft=g.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    width: 100%;
    max-width: 1200px;

    @media (max-width: 450px) {
        grid-template-columns: repeat(2, 1fr);
    }
`,pt=g.div`
    background: white;
    border-radius: 10px;
    padding: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border: 1px solid transparent; 
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
    &:hover {
        transform: translateY(-10px) scale(1.05);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        border-color: black;  
    }
`,ht=g.div`
    margin-top:20px;

`,yt=()=>u.jsxs(mt,{children:[u.jsx(vt,{children:u.jsx("h1",{children:"Also very important title"})}),u.jsx("div",{children:u.jsx(dt,{})})]}),mt=g.main`
    width:100%;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeIn 3s forwards;

    @keyframes fadeIn {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`,vt=g.main`
    opacity: 0;
    transform: translateY(20px);
    animation: fadeIn 2.5s forwards;

    @keyframes fadeIn {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`,gt=()=>{const r=le(),e=()=>{console.log("About button clicked!"),r("/contact")};return u.jsxs(Pt,{children:[u.jsx("div",{className:"Logo",children:u.jsx("h2",{children:"Less important title"})}),u.jsx(ue,{title:"Contact us",onClick:e})]})},Pt=g.section`
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background-color:#f5f5f5;
    padding: 20px;
`,xt=()=>u.jsxs("div",{children:[u.jsx(tt,{}),u.jsx(yt,{}),u.jsx(gt,{})]});export{xt as default};
