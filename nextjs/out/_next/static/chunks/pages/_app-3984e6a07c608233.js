(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{7544:function(e,t,n){e.exports=n(4297)},6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(8089)}])},8050:function(e,t,n){"use strict";n.d(t,{T:function(){return l}});var r=n(5893),o=n(7294),a=n(4233),i=n.n(a);let l=(0,o.forwardRef)((e,t)=>{let{left:n=!0,right:o=!0,className:a,children:l}=e;return(0,r.jsx)("div",{ref:t,className:[n&&i().gutterLeft,o&&i().gutterRight,a].filter(Boolean).join(" "),children:l})});l.displayName="Gutter"},227:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,r,o){{let a=n(2554).normalizeLocalePath,i=n(4643).detectDomainLocale,l=t||a(e,r).detectedLocale,s=i(o,void 0,l);if(s){let t="http".concat(s.http?"":"s","://"),n=l===s.defaultLocale?"":"/".concat(l);return"".concat(t).concat(s.domain).concat("").concat(n).concat(e)}return!1}},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(2648).Z,o=n(7273).Z,a=r(n(7294)),i=n(1003),l=n(7795),s=n(4465),c=n(2692),u=n(8245),f=n(9246),d=n(227),p=n(3468);let h=new Set;function v(e,t,n,r){if(i.isLocalURL(t)){if(!r.bypassPrefetchedCheck){let o=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,a=t+"%"+n+"%"+o;if(h.has(a))return;h.add(a)}Promise.resolve(e.prefetch(t,n,r)).catch(e=>{})}}function m(e){return"string"==typeof e?e:l.formatUrl(e)}let y=a.default.forwardRef(function(e,t){let n,r;let{href:l,as:h,children:y,prefetch:_,passHref:g,replace:b,shallow:C,scroll:x,locale:w,onClick:k,onMouseEnter:j,onTouchStart:O,legacyBehavior:E=!1}=e,S=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=y,E&&("string"==typeof n||"number"==typeof n)&&(n=a.default.createElement("a",null,n));let M=!1!==_,P=a.default.useContext(c.RouterContext),L=a.default.useContext(u.AppRouterContext),N=null!=P?P:L,H=!P,{href:B,as:A}=a.default.useMemo(()=>{if(!P){let e=m(l);return{href:e,as:h?m(h):e}}let[e,t]=i.resolveHref(P,l,!0);return{href:e,as:h?i.resolveHref(P,h):t||e}},[P,l,h]),T=a.default.useRef(B),V=a.default.useRef(A);E&&(r=a.default.Children.only(n));let R=E?r&&"object"==typeof r&&r.ref:t,[I,D,Z]=f.useIntersection({rootMargin:"200px"}),U=a.default.useCallback(e=>{(V.current!==A||T.current!==B)&&(Z(),V.current=A,T.current=B),I(e),R&&("function"==typeof R?R(e):"object"==typeof R&&(R.current=e))},[A,R,B,Z,I]);a.default.useEffect(()=>{N&&D&&M&&v(N,B,A,{locale:w})},[A,B,D,w,M,null==P?void 0:P.locale,N]);let z={ref:U,onClick(e){E||"function"!=typeof k||k(e),E&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),N&&!e.defaultPrevented&&function(e,t,n,r,o,l,s,c,u,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!i.isLocalURL(n)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:l,locale:c,scroll:s}):t[o?"replace":"push"](r||n,{forceOptimisticNavigation:!f})};u?a.default.startTransition(h):h()}(e,N,B,A,b,C,x,w,H,M)},onMouseEnter(e){E||"function"!=typeof j||j(e),E&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),N&&(M||!H)&&v(N,B,A,{locale:w,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){E||"function"!=typeof O||O(e),E&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),N&&(M||!H)&&v(N,B,A,{locale:w,priority:!0,bypassPrefetchedCheck:!0})}};if(!E||g||"a"===r.type&&!("href"in r.props)){let e=void 0!==w?w:null==P?void 0:P.locale,t=(null==P?void 0:P.isLocaleDomain)&&d.getDomainLocale(A,e,null==P?void 0:P.locales,null==P?void 0:P.domainLocales);z.href=t||p.addBasePath(s.addLocale(A,e,null==P?void 0:P.defaultLocale))}return E?a.default.cloneElement(r,z):a.default.createElement("a",Object.assign({},S,z),n)});t.default=y,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2554:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.normalizeLocalePath=void 0;let r=(e,t)=>n(4769).normalizeLocalePath(e,t);t.normalizeLocalePath=r,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:s}=e,c=s||!a,[u,f]=r.useState(!1),d=r.useRef(null),p=r.useCallback(e=>{d.current=e},[]);r.useEffect(()=>{if(a){if(c||u)return;let e=d.current;if(e&&e.tagName){let r=function(e,t,n){let{id:r,observer:o,elements:a}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=l.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=i.get(r)))return t;let o=new Map,a=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:a,elements:o},l.push(n),i.set(n,t),t}(n);return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),i.delete(r);let e=l.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&l.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!u){let e=o.requestIdleCallback(()=>f(!0));return()=>o.cancelIdleCallback(e)}},[c,n,t,u,d.current]);let h=r.useCallback(()=>{f(!1)},[]);return[p,u,h]};var r=n(7294),o=n(4686);let a="function"==typeof IntersectionObserver,i=new Map,l=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8089:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return V},getAllGlobals:function(){return A}});var r,o=n(5893),a=n(7294),i=n(8087);function l(e,t){void 0===t&&(t={});var n,r=e&&"j"===e[0]&&":"===e[1]?e.substr(2):e;if(void 0===(n=t.doNotParse)&&(n=!r||"{"!==r[0]&&"["!==r[0]&&'"'!==r[0]),!n)try{return JSON.parse(r)}catch(e){}return e}var s=function(){return(s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},c=function(){function e(e,t){var n=this;this.changeListeners=[],this.HAS_DOCUMENT_COOKIE=!1,this.cookies="string"==typeof e?i.Q(e,t):"object"==typeof e&&null!==e?e:{},new Promise(function(){n.HAS_DOCUMENT_COOKIE="object"==typeof document&&"string"==typeof document.cookie}).catch(function(){})}return e.prototype._updateBrowserValues=function(e){this.HAS_DOCUMENT_COOKIE&&(this.cookies=i.Q(document.cookie,e))},e.prototype._emitChange=function(e){for(var t=0;t<this.changeListeners.length;++t)this.changeListeners[t](e)},e.prototype.get=function(e,t,n){return void 0===t&&(t={}),this._updateBrowserValues(n),l(this.cookies[e],t)},e.prototype.getAll=function(e,t){void 0===e&&(e={}),this._updateBrowserValues(t);var n={};for(var r in this.cookies)n[r]=l(this.cookies[r],e);return n},e.prototype.set=function(e,t,n){var r;"object"==typeof t&&(t=JSON.stringify(t)),this.cookies=s(s({},this.cookies),((r={})[e]=t,r)),this.HAS_DOCUMENT_COOKIE&&(document.cookie=i.q(e,t,n)),this._emitChange({name:e,value:t,options:n})},e.prototype.remove=function(e,t){var n=t=s(s({},t),{expires:new Date(1970,1,1,0,0,1),maxAge:0});this.cookies=s({},this.cookies),delete this.cookies[e],this.HAS_DOCUMENT_COOKIE&&(document.cookie=i.q(e,"",n)),this._emitChange({name:e,value:void 0,options:t})},e.prototype.addChangeListener=function(e){this.changeListeners.push(e)},e.prototype.removeChangeListener=function(e){var t=this.changeListeners.indexOf(e);t>=0&&this.changeListeners.splice(t,1)},e}(),u=a.createContext(new c),f=u.Provider;u.Consumer;var d=(r=function(e,t){return(r=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),p=function(e){function t(t){var n=e.call(this,t)||this;return t.cookies?n.cookies=t.cookies:n.cookies=new c,n}return d(t,e),t.prototype.render=function(){return a.createElement(f,{value:this.cookies},this.props.children)},t}(a.Component),h=n(7544),v=n.n(h),m=n(1163),y=n(1664),_=n.n(y);let g=()=>{let e=(0,m.useRouter)(),[t,n]=(0,a.useState)(0),{locales:r,pathname:o,asPath:i}=e,l=e.locale||e.defaultLocale||r[0],[s,c]=(0,a.useState)(!1),u=(0,a.useCallback)(async a=>{if(!r.includes(a)){console.warn('Language "'.concat(a,'" is not available in this app'));return}c(!0),n(t+1),e.push(o,i,{locale:a}).finally(()=>{t<=1&&c(!1),n(t-1)})},[r,e,o,i,t]);return{current:l,all:r||[],set:u,loading:s}},b=()=>{let{all:e,set:t,current:n,loading:r}=g(),a=async e=>{let n=e.target.value;await t(n)};return(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{children:["Current Language: ",n]}),(0,o.jsx)("div",{children:(0,o.jsx)("select",{disabled:r,value:n,onChange:a,children:e.map(e=>(0,o.jsx)("option",{value:e,children:e},e))})})]})};var C=n(3254),x=n.n(C);let w=e=>{let{el:t="link",label:n,newTab:r,href:a,appearance:i,className:l,onClick:s,type:c="button",disabled:u}=e,f=t,d=r?{target:"_blank",rel:"noopener noreferrer"}:{},p=[x().button,l,x()["appearance--".concat(i)],x().button].filter(Boolean).join(" "),h=(0,o.jsx)("div",{className:x().content,children:(0,o.jsx)("span",{className:x().label,children:n})});if((s||"submit"===c)&&(f="button"),"link"===f)return(0,o.jsx)(_(),{href:a,className:p,...d,onClick:s,children:h});let v=f;return(0,o.jsx)(v,{href:a,className:p,type:c,...d,onClick:s,disabled:u,children:h})},k=e=>{let{type:t,url:n,newTab:r,reference:a,label:i,appearance:l,children:s,className:c}=e,u="reference"===t&&"object"==typeof(null==a?void 0:a.value)&&a.value.slug?"/".concat(a.value.slug):n;if(!l){let e=r?{target:"_blank",rel:"noopener noreferrer"}:{};if("custom"===t)return(0,o.jsxs)("a",{href:n,...e,className:c,children:[i&&i,s&&s]});if(u)return(0,o.jsxs)(_(),{href:u,...e,className:c,children:[i&&i,s&&s]})}return(0,o.jsx)(w,{className:c,newTab:r,href:u,appearance:l,label:i,el:"link"})};var j=n(8050);let O=()=>(0,o.jsxs)("svg",{width:"123",height:"29",viewBox:"0 0 123 29",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,o.jsx)("path",{d:"M34.7441 22.9997H37.2741V16.3297H41.5981C44.7031 16.3297 46.9801 14.9037 46.9801 11.4537C46.9801 8.00369 44.7031 6.55469 41.5981 6.55469H34.7441V22.9997ZM37.2741 14.1447V8.73969H41.4831C43.3921 8.73969 44.3581 9.59069 44.3581 11.4537C44.3581 13.2937 43.3921 14.1447 41.4831 14.1447H37.2741Z",fill:"black"}),(0,o.jsx)("path",{d:"M51.3652 23.3217C53.2742 23.3217 54.6082 22.5627 55.3672 21.3437H55.4132C55.5512 22.6777 56.1492 23.1147 57.2762 23.1147C57.6442 23.1147 58.0352 23.0687 58.4262 22.9767V21.5967C58.2882 21.6197 58.2192 21.6197 58.1502 21.6197C57.7132 21.6197 57.5982 21.1827 57.5982 20.3317V14.9497C57.5982 11.9137 55.6662 10.9017 53.2512 10.9017C49.6632 10.9017 48.1912 12.6727 48.0762 14.9267H50.3762C50.4912 13.3627 51.1122 12.7187 53.1592 12.7187C54.8842 12.7187 55.3902 13.4317 55.3902 14.2827C55.3902 15.4327 54.2632 15.6627 52.4232 16.0077C49.5022 16.5597 47.5242 17.3417 47.5242 19.9637C47.5242 21.9647 49.0192 23.3217 51.3652 23.3217ZM49.8702 19.8027C49.8702 18.5837 50.7442 18.0087 52.8142 17.5947C54.0102 17.3417 55.0222 17.0887 55.3902 16.7437V18.4227C55.3902 20.4697 53.8952 21.5047 51.8712 21.5047C50.4682 21.5047 49.8702 20.9067 49.8702 19.8027Z",fill:"black"}),(0,o.jsx)("path",{d:"M61.4996 27.1167C63.3166 27.1167 64.4436 26.1737 65.5706 23.2757L70.2166 11.2697H67.8476L64.6276 20.2397H64.5816L61.1546 11.2697H58.6936L63.4316 22.8847C62.9716 24.7247 61.9136 25.1847 61.0166 25.1847C60.6486 25.1847 60.4416 25.1617 60.0506 25.1157V26.9557C60.6486 27.0707 60.9936 27.1167 61.4996 27.1167Z",fill:"black"}),(0,o.jsx)("path",{d:"M71.5939 22.9997H73.8479V6.55469H71.5939V22.9997Z",fill:"black"}),(0,o.jsx)("path",{d:"M81.6221 23.3447C85.2791 23.3447 87.4871 20.7917 87.4871 17.1117C87.4871 13.4547 85.2791 10.9017 81.6451 10.9017C77.9651 10.9017 75.7571 13.4777 75.7571 17.1347C75.7571 20.8147 77.9651 23.3447 81.6221 23.3447ZM78.1031 17.1347C78.1031 14.6737 79.2071 12.7877 81.6451 12.7877C84.0371 12.7877 85.1411 14.6737 85.1411 17.1347C85.1411 19.5727 84.0371 21.4817 81.6451 21.4817C79.2071 21.4817 78.1031 19.5727 78.1031 17.1347Z",fill:"black"}),(0,o.jsx)("path",{d:"M92.6484 23.3217C94.5574 23.3217 95.8914 22.5627 96.6504 21.3437H96.6964C96.8344 22.6777 97.4324 23.1147 98.5594 23.1147C98.9274 23.1147 99.3184 23.0687 99.7094 22.9767V21.5967C99.5714 21.6197 99.5024 21.6197 99.4334 21.6197C98.9964 21.6197 98.8814 21.1827 98.8814 20.3317V14.9497C98.8814 11.9137 96.9494 10.9017 94.5344 10.9017C90.9464 10.9017 89.4744 12.6727 89.3594 14.9267H91.6594C91.7744 13.3627 92.3954 12.7187 94.4424 12.7187C96.1674 12.7187 96.6734 13.4317 96.6734 14.2827C96.6734 15.4327 95.5464 15.6627 93.7064 16.0077C90.7854 16.5597 88.8074 17.3417 88.8074 19.9637C88.8074 21.9647 90.3024 23.3217 92.6484 23.3217ZM91.1534 19.8027C91.1534 18.5837 92.0274 18.0087 94.0974 17.5947C95.2934 17.3417 96.3054 17.0887 96.6734 16.7437V18.4227C96.6734 20.4697 95.1784 21.5047 93.1544 21.5047C91.7514 21.5047 91.1534 20.9067 91.1534 19.8027Z",fill:"black"}),(0,o.jsx)("path",{d:"M106.181 23.3217C108.021 23.3217 109.148 22.4477 109.792 21.6197H109.838V22.9997H112.092V6.55469H109.838V12.6957H109.792C109.148 11.7757 108.021 10.9247 106.181 10.9247C103.191 10.9247 100.914 13.2707 100.914 17.1347C100.914 20.9987 103.191 23.3217 106.181 23.3217ZM103.26 17.1347C103.26 14.8347 104.341 12.8107 106.549 12.8107C108.573 12.8107 109.815 14.4667 109.815 17.1347C109.815 19.7797 108.573 21.4587 106.549 21.4587C104.341 21.4587 103.26 19.4347 103.26 17.1347Z",fill:"black"}),(0,o.jsx)("path",{d:"M12.2464 2.33838L22.2871 8.83812V21.1752L14.7265 25.8854V13.5484L4.67383 7.05725L12.2464 2.33838Z",fill:"black"}),(0,o.jsx)("path",{d:"M11.477 25.2017V15.5747L3.90039 20.2936L11.477 25.2017Z",fill:"black"}),(0,o.jsx)("path",{d:"M120.442 6.30273C119.086 6.30273 117.998 7.29978 117.998 8.75952C117.998 10.2062 119.086 11.1968 120.442 11.1968C121.791 11.1968 122.879 10.2062 122.879 8.75952C122.879 7.29978 121.791 6.30273 120.442 6.30273ZM120.442 10.7601C119.34 10.7601 118.48 9.95207 118.48 8.75952C118.48 7.54742 119.34 6.73935 120.442 6.73935C121.563 6.73935 122.397 7.54742 122.397 8.75952C122.397 9.95207 121.563 10.7601 120.442 10.7601ZM120.52 8.97457L121.048 9.9651H121.641L121.041 8.86378C121.367 8.72042 121.511 8.45975 121.511 8.17302C121.511 7.49528 121.054 7.36495 120.285 7.36495H119.49V9.9651H120.025V8.97457H120.52ZM120.37 7.78853C120.729 7.78853 120.976 7.86673 120.976 8.17953C120.976 8.43368 120.807 8.56402 120.403 8.56402H120.025V7.78853H120.37Z",fill:"black"})]});var E=n(8553),S=n(9811),M=n.n(S);let P=e=>{let{adminBarProps:t,user:n,setUser:r}=e;return(0,o.jsx)("div",{className:[M().adminBar,n&&M().show].filter(Boolean).join(" "),children:(0,o.jsx)(j.T,{className:M().container,children:(0,o.jsx)(E.PayloadAdminBar,{...t,cmsURL:"http://localhost:8000",onAuthChange:r,className:M().payloadAdminBar,classNames:{user:M().user,logo:M().logo,controls:M().controls},style:{position:"relative",zIndex:"unset",padding:0,backgroundColor:"transparent"}})})})};var L=n(2875),N=n.n(L);let H=e=>{let{children:t}=e;return(0,o.jsx)("header",{className:N().header,children:(0,o.jsxs)(j.T,{className:N().wrap,children:[(0,o.jsx)(_(),{href:"/",children:(0,o.jsx)(O,{})}),(0,o.jsx)(b,{}),t]})})},B=e=>{let{globals:t,adminBarProps:n}=e,[r,i]=(0,a.useState)(),{mainMenu:{navItems:l}}=t,s=l&&Array.isArray(l)&&l.length>0;return(0,o.jsxs)("div",{children:[(0,o.jsx)(P,{adminBarProps:n,user:r,setUser:i}),(0,o.jsx)(H,{children:s&&(0,o.jsx)("nav",{className:N().nav,children:l.map((e,t)=>{let{link:n}=e;return(0,o.jsx)(k,{...n},t)})})})]})};n(1656);let A=async()=>{let e=await fetch("".concat("http://localhost:8000","/api/globals/main-menu?depth=1")),t=await e.json();return{mainMenu:t}},T=e=>{let{Component:t,pageProps:n,globals:r}=e,{collection:i,id:l,preview:s}=n,c=(0,m.useRouter)(),u=(0,a.useCallback)(()=>{let e=async()=>{let e=await fetch("/api/exit-preview");200===e.status&&c.reload()};e()},[c]);return(0,o.jsxs)(p,{children:[(0,o.jsx)(B,{globals:r,adminBarProps:{collection:i,id:l,preview:s,onPreviewExit:u}}),(0,o.jsx)(t,{...n})]})};T.getInitialProps=async e=>{let t=await v().getInitialProps(e),n=await A();return{...t,globals:n}};var V=T},1656:function(){},3254:function(e){e.exports={label:"Button_label__DHmwZ",button:"Button_button__9tXVr",content:"Button_content___8X3s","primary--white":"Button_primary--white___fmcp","primary--black":"Button_primary--black__mWtnO","secondary--white":"Button_secondary--white__pRP7k","secondary--black":"Button_secondary--black__0Dmiw","appearance--default":"Button_appearance--default___EmLa"}},4233:function(e){e.exports={gutterLeft:"Gutter_gutterLeft__PHEQH",gutterRight:"Gutter_gutterRight__cwFWD"}},9811:function(e){e.exports={adminBar:"AdminBar_adminBar__L7zMs",show:"AdminBar_show__NeFdG",controls:"AdminBar_controls___O5ar",user:"AdminBar_user__9oTyp",logo:"AdminBar_logo___5tXm",innerLogo:"AdminBar_innerLogo__1KxvH",container:"AdminBar_container__Qo_cb",hr:"AdminBar_hr__X54q5"}},2875:function(e){e.exports={header:"Header_header___Yglu",wrap:"Header_wrap__7Vl_W",nav:"Header_nav__F5Ine"}},1664:function(e,t,n){e.exports=n(1551)},1163:function(e,t,n){e.exports=n(880)},8553:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&o(t,e,n);return a(t,e),t},l=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(e){try{s(r.next(e))}catch(e){a(e)}}function l(e){try{s(r.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?o(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(i,l)}s((r=r.apply(e,t||[])).next())})},s=this&&this.__generator||function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(n)throw TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.PayloadAdminBar=void 0;var c=i(n(7294)),u={email:"dev@email.com",id:"12345"};t.PayloadAdminBar=function(e){var t=e.cmsURL,n=void 0===t?"http://localhost:8000":t,o=e.apiPath,a=void 0===o?"/api":o,i=e.adminPath,f=void 0===i?"/admin":i,d=e.collection,p=e.collectionLabels,h=e.id,v=e.logo,m=e.className,y=e.logoProps,_=e.editProps,g=e.createProps,b=e.userProps,C=e.logoutProps,x=e.divProps,w=e.style,k=e.unstyled,j=e.onAuthChange,O=e.classNames,E=e.devMode,S=e.preview,M=e.onPreviewExit,P=e.previewProps,L=(0,c.useState)(),N=L[0],H=L[1];if((0,c.useEffect)(function(){l(void 0,void 0,void 0,function(){var e;return s(this,function(t){switch(t.label){case 0:return t.trys.push([0,3,,4]),[4,fetch(""+n+a+"/users/me",{method:"get",credentials:"include"})];case 1:return[4,t.sent().json()];case 2:return(e=t.sent().user)?H(e):!0!==E?H(null):H(u),[3,4];case 3:return console.warn(t.sent()),!0===E&&H(u),[3,4];case 4:return[2]}})})},[n,f,a]),(0,c.useEffect)(function(){"function"==typeof j&&j(N)},[N,j]),N){var B=N.email,A=N.id;return c.default.createElement("div",{className:m,style:r(r({},!0!==k?{fontSize:"small",position:"fixed",display:"flex",minWidth:"0",alignItems:"center",top:0,left:0,width:"100%",padding:"0.5rem",zIndex:99999,boxSizing:"border-box",backgroundColor:"#222",color:"#fff",fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"}:{}),w)},c.default.createElement("a",r({href:""+n+f,className:null==O?void 0:O.logo},y,{style:r({},!0!==k?r({marginRight:"10px",flexShrink:0,display:"flex",height:"20px",textDecoration:"none",color:"inherit",alignItems:"center"},(null==y?void 0:y.style)?r({},y.style):{}):{})}),v||"Payload CMS"),c.default.createElement("a",r({href:""+n+f+"/collections/users/"+A,target:"_blank",rel:"noopener noreferrer",className:null==O?void 0:O.user},b,{style:r({},!0!==k?r({marginRight:"10px",display:"block",minWidth:"50px",overflow:"hidden",textOverflow:"ellipsis",textDecoration:"none",whiteSpace:"nowrap",color:"inherit"},(null==b?void 0:b.style)?r({},b.style):{}):{})}),c.default.createElement("span",{style:r({},!0!==k?{whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"}:{})},B||"Profile")),c.default.createElement("div",r({className:null==O?void 0:O.controls},x,{style:r({},!0!==k?r({display:"flex",marginRight:"10px",flexShrink:1,flexGrow:1,alignItems:"center",justifyContent:"flex-end"},(null==x?void 0:x.style)?r({},x.style):{}):{})}),d&&h&&c.default.createElement("a",r({href:""+n+f+"/collections/"+d+"/"+h,target:"_blank",rel:"noopener noreferrer",className:null==O?void 0:O.edit},_,{style:r({display:"block"},!0!==k?r({marginRight:"10px",textDecoration:"none",color:"inherit",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",flexShrink:1},(null==_?void 0:_.style)?r({},_.style):{}):{})}),c.default.createElement("span",{style:r({},!0!==k?{whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"}:{})},"Edit "+((null==p?void 0:p.singular)||"page"))),d&&c.default.createElement("a",r({href:""+n+f+"/collections/"+d+"/create",target:"_blank",rel:"noopener noreferrer",className:null==O?void 0:O.create},g,{style:r({},!0!==k?r({flexShrink:1,display:"block",textDecoration:"none",color:"inherit",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},(null==g?void 0:g.style)?r({},g.style):{}):{})}),c.default.createElement("span",{style:r({},!0!==k?{whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"}:{})},"New "+((null==p?void 0:p.singular)||"page"))),S&&c.default.createElement("button",r({className:null==O?void 0:O.preview,onClick:M},P,{style:r({},!0!==k?r({marginLeft:"10px",background:"none",border:"none",padding:0,cursor:"pointer",color:"inherit",fontFamily:"inherit",fontSize:"inherit"},(null==P?void 0:P.style)?r({},P.style):{}):{})}),"Exit preview mode")),c.default.createElement("a",r({href:""+n+f+"/logout",target:"_blank",rel:"noopener noreferrer",className:null==O?void 0:O.logout},C,{style:r({},!0!==k?r({textDecoration:"none",color:"inherit",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",display:"block",flexShrink:1},(null==C?void 0:C.style)?r({},C.style):{}):{})}),c.default.createElement("span",{style:r({},!0!==k?{whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"}:{})},"Logout")))}return null}},8087:function(e,t){"use strict";/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */t.Q=function(e,t){if("string"!=typeof e)throw TypeError("argument str must be a string");for(var r={},o=e.split(";"),a=(t||{}).decode||n,i=0;i<o.length;i++){var l=o[i],s=l.indexOf("=");if(!(s<0)){var c=l.substring(0,s).trim();if(void 0==r[c]){var u=l.substring(s+1,l.length).trim();'"'===u[0]&&(u=u.slice(1,-1)),r[c]=function(e,t){try{return t(e)}catch(t){return e}}(u,a)}}}return r},t.q=function(e,t,n){var a=n||{},i=a.encode||r;if("function"!=typeof i)throw TypeError("option encode is invalid");if(!o.test(e))throw TypeError("argument name is invalid");var l=i(t);if(l&&!o.test(l))throw TypeError("argument val is invalid");var s=e+"="+l;if(null!=a.maxAge){var c=a.maxAge-0;if(isNaN(c)||!isFinite(c))throw TypeError("option maxAge is invalid");s+="; Max-Age="+Math.floor(c)}if(a.domain){if(!o.test(a.domain))throw TypeError("option domain is invalid");s+="; Domain="+a.domain}if(a.path){if(!o.test(a.path))throw TypeError("option path is invalid");s+="; Path="+a.path}if(a.expires){if("function"!=typeof a.expires.toUTCString)throw TypeError("option expires is invalid");s+="; Expires="+a.expires.toUTCString()}if(a.httpOnly&&(s+="; HttpOnly"),a.secure&&(s+="; Secure"),a.sameSite)switch("string"==typeof a.sameSite?a.sameSite.toLowerCase():a.sameSite){case!0:case"strict":s+="; SameSite=Strict";break;case"lax":s+="; SameSite=Lax";break;case"none":s+="; SameSite=None";break;default:throw TypeError("option sameSite is invalid")}return s};var n=decodeURIComponent,r=encodeURIComponent,o=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(880)}),_N_E=e.O()}]);