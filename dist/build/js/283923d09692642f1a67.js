(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{581:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(162);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=m(e);if(t){var r=m(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return s(this,a)}}function s(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(s,e);var t,a,n,c=u(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=c.call(this,e)).state={open:!1},t}return t=s,(a=[{key:"toggleMenuBar",value:function(e){var t=this.state.open;e&&e.preventDefault&&e.preventDefault(),this.setState({open:!t})}},{key:"closeMenuBar",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var e=this,t=this.state.open;return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar",role:"navigation","aria-label":"main navigation"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement(o.b,{to:"/",className:" navbar-item"},r.a.createElement("strong",null,"ReactPWA")),r.a.createElement("button",{type:"button",onClick:function(t){return e.toggleMenuBar(t)},className:"navbar-burger ".concat(t?"is-active":""),"aria-label":"menu","aria-expanded":"false",style:{background:"none",border:"none",outline:"none"}},r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}))),r.a.createElement("div",{className:"navbar-menu ".concat(t?"is-active":"")},r.a.createElement(o.b,{className:"navbar-item",to:"/home",onClick:function(){return e.closeMenuBar()}},"Home"),r.a.createElement(o.b,{className:"navbar-item",to:"/global-local-css",onClick:function(){return e.closeMenuBar()}},"Global & Local CSS"),r.a.createElement(o.b,{className:"navbar-item",to:"/typescript-counter",onClick:function(){return e.closeMenuBar()}},"TypeScript Counter"),r.a.createElement(o.b,{className:"navbar-item",to:"/skeleton-loading",onClick:function(){return e.closeMenuBar()}},"Skeleton Loading"),r.a.createElement(o.b,{className:"navbar-item",to:"/image-optimization",onClick:function(){return e.closeMenuBar()}},"Image Optimization"),r.a.createElement(o.b,{className:"navbar-item",to:"/login",onClick:function(){return e.closeMenuBar()}},"Auth"),r.a.createElement(o.b,{className:"navbar-item",to:"/contribute",onClick:function(){return e.closeMenuBar()}},"Contribute"),r.a.createElement("a",{className:"navbar-item has-text-danger",href:"https://www.reactpwa.com",onClick:function(){return e.closeMenuBar()}},"Visit ReactPWA.com")))))}}])&&l(t.prototype,a),n&&l(t,n),s}(n.PureComponent),b=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"content has-text-centered"},r.a.createElement("p",null,r.a.createElement("strong",null,"Demo for ReactPWA")," ","by"," ",r.a.createElement("a",{href:"https://www.atyantik.com"},"Atyantik Technologies"),". The source code is licensed"," ",r.a.createElement("a",{href:"http://opensource.org/licenses/mit-license.php"},"MIT"),".",r.a.createElement("br",null),'Visit the site"s Github Repo'," ",r.a.createElement("a",{href:"https://github.com/Atyantik/react-pwa"},"https://github.com/Atyantik/react-pwa"),"."),r.a.createElement("div",{className:"has-text-centered m-t-xl m-b-md"},r.a.createElement("a",{href:"https://opencollective.com/react-pwa/donate",target:"_blank",rel:"nofollow noopener noreferrer"},r.a.createElement("img",{alt:"open-collective",src:"https://opencollective.com/react-pwa/contribute/button@2x.png?color=blue",width:"300"})))))};t.a=function(e){var t=e.children;return r.a.createElement("div",null,r.a.createElement(d,null),t,r.a.createElement("br",null),r.a.createElement(b,null))}},585:function(e,t){e.exports=[{sources:{"1200w":"/images/eb9283a72019f2cd75ef49b1f786ffcb-dog-cat.jpg","1000w":"/images/e489e2fe71a125185596f3e20c03e79c-dog-cat.jpg","800w":"/images/f7b8964944bfb18b923d7ab9d4b5c17c-dog-cat.jpg","600w":"/images/3cbcdad7e33b78665bb0aeda852549c4-dog-cat.jpg","400w":"/images/630e27a408ae4e27929dd477a112420a-dog-cat.jpg"},type:"image/jpeg",srcSet:"/images/eb9283a72019f2cd75ef49b1f786ffcb-dog-cat.jpg 1200w,/images/e489e2fe71a125185596f3e20c03e79c-dog-cat.jpg 1000w,/images/f7b8964944bfb18b923d7ab9d4b5c17c-dog-cat.jpg 800w,/images/3cbcdad7e33b78665bb0aeda852549c4-dog-cat.jpg 600w,/images/630e27a408ae4e27929dd477a112420a-dog-cat.jpg 400w",placeholder:{color:[168,147,130,1],url:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjAgMTMiPgogICAgICAgICAgPGZpbHRlciBpZD0ieCI+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEiIC8+CiAgICAgICAgICA8L2ZpbHRlcj4KICAgICAgICAgIDxpbWFnZSB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bGluazpocmVmPSJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai8yd0JEQUFZRUJRWUZCQVlHQlFZSEJ3WUlDaEFLQ2drSkNoUU9Ed3dRRnhRWUdCY1VGaFlhSFNVZkdoc2pIQllXSUN3Z0l5WW5LU29wR1I4dE1DMG9NQ1VvS1NqLzJ3QkRBUWNIQndvSUNoTUtDaE1vR2hZYUtDZ29LQ2dvS0Nnb0tDZ29LQ2dvS0Nnb0tDZ29LQ2dvS0Nnb0tDZ29LQ2dvS0Nnb0tDZ29LQ2dvS0Nnb0tDZ29LQ2ovd0FBUkNBQU5BQlFEQVNJQUFoRUJBeEVCLzhRQUdBQUFBd0VCQUFBQUFBQUFBQUFBQUFBQUFBWUhBZ1gveEFBbEVBQUJBd01FQVFVQkFBQUFBQUFBQUFBQkFnTUVBQVVSQmhJaE1TSUhFeFJCWVNQL3hBQVdBUUVCQVFBQUFBQUFBQUFBQUFBQUFBQUNCQVgveEFBZUVRRUFBZ0VFQXdBQUFBQUFBQUFBQUFBQkFBSWhBeEVTTVJOQlVmL2FBQXdEQVFBQ0VRTVJBRDhBYmRUZW9aVElOdjBuSWl5SDJUL1IwSHhXZTlpVkhJenh5ZjNGYTFSZkwrL1o0MDE3NGFyTk9LbVhXWEd6aHRHeko2NVVld2YwVjMydlRMU3N5UnVhZ09RbEpLQ0REZVUxenRIMTFUYkgwOWJHSFdHV1dYRXNOcmRUN1B1cUtGaFE4dHdQZWFnOGQyenpjZXU1b3VwVUFxWmthczlza0t0cklOMVRiMHBHeExFaFNWbmFEZ0VLUFlQMVJWSHQwQlVaTWlNbGJKYVllVTIwUGpvOFVjRURuUFdhS1pTcWRRYnYyZi9aIiBmaWx0ZXI9InVybCgjeCkiLz4KICAgICAgICA8L3N2Zz4=",ratio:1.6}},{sources:{"1200w":"/images/ddafd6bd6eb99af4b979d5cd5fabd6e2-dog-cat.webp","1000w":"/images/9937ad3c1485918bd21c8ba9eb46cb40-dog-cat.webp","800w":"/images/cde50bcc29694f31ee6517898f93d106-dog-cat.webp","600w":"/images/883649042b470a34b12924e849cb0d38-dog-cat.webp","400w":"/images/333a4be46c5e2a7252f62fd044748b22-dog-cat.webp"},type:"image/webp",srcSet:"/images/ddafd6bd6eb99af4b979d5cd5fabd6e2-dog-cat.webp 1200w,/images/9937ad3c1485918bd21c8ba9eb46cb40-dog-cat.webp 1000w,/images/cde50bcc29694f31ee6517898f93d106-dog-cat.webp 800w,/images/883649042b470a34b12924e849cb0d38-dog-cat.webp 600w,/images/333a4be46c5e2a7252f62fd044748b22-dog-cat.webp 400w",placeholder:{color:[168,147,130,1],url:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjAgMTMiPgogICAgICAgICAgPGZpbHRlciBpZD0ieCI+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEiIC8+CiAgICAgICAgICA8L2ZpbHRlcj4KICAgICAgICAgIDxpbWFnZSB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bGluazpocmVmPSJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai8yd0JEQUFZRUJRWUZCQVlHQlFZSEJ3WUlDaEFLQ2drSkNoUU9Ed3dRRnhRWUdCY1VGaFlhSFNVZkdoc2pIQllXSUN3Z0l5WW5LU29wR1I4dE1DMG9NQ1VvS1NqLzJ3QkRBUWNIQndvSUNoTUtDaE1vR2hZYUtDZ29LQ2dvS0Nnb0tDZ29LQ2dvS0Nnb0tDZ29LQ2dvS0Nnb0tDZ29LQ2dvS0Nnb0tDZ29LQ2dvS0Nnb0tDZ29LQ2ovd0FBUkNBQU5BQlFEQVNJQUFoRUJBeEVCLzhRQUdBQUFBd0VCQUFBQUFBQUFBQUFBQUFBQUFBWUhBZ1gveEFBbEVBQUJBd01FQVFVQkFBQUFBQUFBQUFBQkFnTUVBQVVSQmhJaE1TSUhFeFJCWVNQL3hBQVdBUUVCQVFBQUFBQUFBQUFBQUFBQUFBQUNCQVgveEFBZUVRRUFBZ0VFQXdBQUFBQUFBQUFBQUFBQkFBSWhBeEVTTVJOQlVmL2FBQXdEQVFBQ0VRTVJBRDhBYmRUZW9aVElOdjBuSWl5SDJUL1IwSHhXZTlpVkhJenh5ZjNGYTFSZkwrL1o0MDE3NGFyTk9LbVhXWEd6aHRHeko2NVVld2YwVjMydlRMU3N5UnVhZ09RbEpLQ0REZVUxenRIMTFUYkgwOWJHSFdHV1dYRXNOcmRUN1B1cUtGaFE4dHdQZWFnOGQyenpjZXU1b3VwVUFxWmthczlza0t0cklOMVRiMHBHeExFaFNWbmFEZ0VLUFlQMVJWSHQwQlVaTWlNbGJKYVllVTIwUGpvOFVjRURuUFdhS1pTcWRRYnYyZi9aIiBmaWx0ZXI9InVybCgjeCkiLz4KICAgICAgICA8L3N2Zz4=",ratio:1.6}}]},596:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,o=void 0;try{for(var c,l=e[Symbol.iterator]();!(n=(c=l.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(e){r=!0,o=e}finally{try{n||null==l.return||l.return()}finally{if(r)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return l(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var i=function(e){if(!Array.isArray(e))return e;var t=e.find((function(e){return"image/webp"===e.type.toLowerCase()}));if(!t)return e;var a=e.filter((function(e){return e.type&&"image/webp"!==e.type.toLowerCase()}));return a.unshift(t),a},u=function(e){if("string"==typeof e)return e;if(Array.isArray(e)&&e.length>=2){var t=e.find((function(e){return"image/webp"!==e.type.toLowerCase()}));if(!t)t=c(e,1)[0];var a=t.placeholder&&t.placeholder.url?t.placeholder.url:"";if(a)return a;var n=t.sources&&"object"===o(t.sources)&&Object.keys(t.sources).length?t.sources:{},r=Object.keys(n);return r.length?n[r[r.length-1]]:""}return""},s=function(e){var t=e&&e.srcSet?e.srcSet:"";return t||"".concat(function(e){var t=e&&e.sources&&Object.keys(e.sources).length?e.sources:{},a=Object.keys(t);return a.length?t[a[a.length-1]]:""}(e)," 1w")},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{alt:"",image:[],pictureClassName:"",imgClassName:"",top:0},t=e.alt,a=e.imgClassName,o=e.pictureClassName,l=e.image,m=e.top,d=Object(n.useState)(i(l)),b=c(d,1),f=b[0],p=Object(n.useState)(!1),g=c(p,2),h=g[0],y=g[1],w=Object(n.useRef)(null),Q=Object(n.useRef)(null),U=function(){Q&&Q.current&&w&&w.current&&(Q.current.unobserve&&Q.current.unobserve(w.current),Q.current.disconnect&&Q.current.disconnect(),Q.current=null)},B=function(){if("IntersectionObserver"in window){var e={rootMargin:"".concat(m||0,"px"),threshold:.1};Q.current=new window.IntersectionObserver((function(e){e.forEach((function(e){e.intersectionRatio>0&&(U(),y(!0))}))}),e),Q.current.observe(w.current)}else y(!0)};Object(n.useEffect)((function(){return"requestIdleCallback"in window?window.requestIdleCallback(B):setTimeout(B,1),function(){return U()}}),[w]);var v=function(){if(!h)return null;if("string"==typeof f)return r.a.createElement("img",{className:a,src:f,alt:t});var e=[];return Array.isArray(f)&&(e=f),e.map((function(e){var t=s(e);return r.a.createElement("source",{type:e.type,srcSet:t,key:t})}))},E=function(){return"string"==typeof l?null:r.a.createElement("img",{className:a,src:u(l),alt:t})};return r.a.createElement("picture",{className:o,ref:w},v(),E())},d=a(581),b=a(585),f=a.n(b);t.default=function(){return r.a.createElement(d.a,null,r.a.createElement("div",{className:"container p-t-xl p-r-md p-l-md"},r.a.createElement("h1",{className:"title"},"Optimizing user image experience to the best possible level"),r.a.createElement("p",null,"The original size of the image below is"," ",r.a.createElement("code",null,"216.53 kb")," ","You may check the repo. But with implementation of"," ",r.a.createElement("strong",null,"@pawjs/image-optimizer")," ","we were able to reduce the size of image by"," ",r.a.createElement("strong",null,"57%"),". Thus making the final size to just 91.2KB"),r.a.createElement("img",{alt:"Cat & Dog Sleeping",src:"/images/53d63b4687fc818c0604ef1ce3e65d0a-dog-cat.jpg"}),r.a.createElement("hr",null),r.a.createElement("h2",{className:"title"},"Atyantik (ultimate) Optimization"),r.a.createElement("div",{className:"content"},"Well the above was not enough for us and thus we wanted"," ","more light weight image with undetectable quality loss!"," ","Below is the set of functionality we were looking at:",r.a.createElement("ol",null,r.a.createElement("li",null,"Best Auto Image optimization irrespective of its original size"),r.a.createElement("li",null,"WebP Image format for latest browsers and fallback png/jpeg"," ","image for unsupported browsers."),r.a.createElement("li",null,"Different Images depending on the size of screen. Well that is very important,"," ",'We don"t want any user to download large images for mobile devices! Thus implementing srcset.'),r.a.createElement("li",null,"Why load image instantaneously?"," ","If the SEO bots can wait for image to load, why not users as well? Thus implementing Lazy image loading.")),r.a.createElement("blockquote",null,r.a.createElement("p",null,"To fulfill such complex requirement with simple code we created"," ",r.a.createElement("code",null,"@pawjs/srcset, @pawjs/image-optimizer"))),r.a.createElement("div",{className:"is-medium"},r.a.createElement("h3",null,"Check below!"))),r.a.createElement(m,{alt:"Cat & Dog",image:f.a})))}}}]);