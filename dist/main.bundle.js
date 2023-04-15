(()=>{"use strict";var t,e,n={182:(t,e,n)=>{n.d(e,{Z:()=>i});const i={prefix:"embeddable",animation:"animate__fadeIn",appName:"Zuma",fonts:{primary:"'Sedgwick Ave Display', cursive",secondary:"'Archivo', sans-serif"},colors:{appBgColor:"slate-900"}}},706:(t,e,n)=>{n.d(e,{Z:()=>r});class i extends Error{constructor(t){super(t),this.name="EmbeddableException: ",console.log("................................",`\nException: ${this.name} \nMessage: ${this.message} \nStack: ${this.stack}\n`,".................................")}}const r=i},712:(t,e,n)=>{n.d(e,{Z:()=>l});var i=n(591),r=n(669),o=n(182),a=n(706),s=n(318);const l=class{#t=o.Z?.colors?.appBgColor;constructor(){this.navigation={links:[],elements:[],bar:null,visible:!0,availableElementsContainer:null},this.running=!1,s.ZP.setActivity(this)}createId(){const t=Math.floor(9999*Math.random());this.frame.setAttribute("id",t),this.id=t}getId(){return this.id}getFrameColor(){return this.#t}setFrameColor(t){t?.trim().startsWith("bg-")?this.#t=t.replace("bg-",""):this.#t=t}getNavigationBar(){return this.navigation.bar}setNavigationLinks(t){if(!(t instanceof Array))throw new a.Z("Argument must be an array");this.navigation.links.push(...t),this.createNavigationBar()}getNavigationElements(){return this.navigation.elements.slice(1)}createNavigationBar(){const t=this.navigation?.links;if(!this.navigation.visible)return this.navigation.bar?.remove();const e=this.frame.nextNode(null,"div"),n=e.nextNode(null,"button");let i;n.type="button",n.setCss(`fa fa-${this.hasPrev?"arrow-left":"home"} text-${r.$_.white} font-bold p-2 bg-${r.$_.primary700} rounded-full shadow-lg`),i=e.nextNode(null,"div"),e.setCss("flex justify-between items-center"),t?.map((t=>{let e=i.nextNode(`${t?.url}`,"button");e.type="button",e.setCss("text-white font-bold p-2 rounded-full"),e.addEventListener("click",t?.callback||(e=>{console.log("Clicked ",t.url)})),this.navigation.elements.push(e)})),n.addEventListener("click",function(t){this.hasPrev||s.ZP.destroy(this),s.ZP.destroy(this)}.bind(this)),this.navigation.elements.unshift(n),this.navigation.availableElementsContainer=i,this.navigation.bar=e}getAvailableElementsContainer(){return this.navigation.availableElementsContainer}addEvent(t,e){this.frame.addEventListener(t,(function(t){e(t)}))}createActivity(){return this.running=!0,this.frame=(0,i.dS)("div"),this.frame.setCss(`fixed w-full h-full top-0 left-0 right-0 bottom-0 p-5 bg-${this.getFrameColor()} overflow-auto`),this.createId(),this.setNavigationLinks([{url:"APIs"},{url:"Login"}]),this.next(),{Activity:this,frame:this.frame}}getContext(t){t(this)}next(){this.running?(0,i.UG)("body").appendChild(this.frame):(this.children,console.log("frame is not already running "))}setData(t){this.data=t}createChildren(t,e=null){if("function"!=typeof t)throw new a.Z("Argument must be a valid callback function");const n=t({frame:this.frame,context:this,data:e});this.children=n,this.createFooter(this.frame)}updateActivity(){if("function"!=typeof fragment)throw new a.Z("Argument must be a valid callback function");return this}createFooter(t,e=null,n=null){const i=t.nextNode(e||"Developed by Itzfeminisce",n||"p").setCss("text-center text-sm p-3 text-white");return this.footer=i,i}removeFooter(t){t.removeChild(this.footer)}}},318:(t,e,n)=>{n.d(e,{ZP:()=>o,eJ:()=>r}),n(712);class i{static activities=[];constructor(){}static setActivity(t,e){i.activities.push(t);const n=i.activities.at(i.activities.indexOf(this)-1);t.hasPrev=!!n,t.prev=n}static getCurrentActivity(){return i.activities.at(-1)}static hasPrev(){return i.length>1}static getPrev(){return i.slice(-1,1)}static prev(){return i.splice[1],new(0,i[IntentManageractivities.length-1])}static next(){}static destroy(t){t.frame.remove(),i.activities.pop()}}const r=function(t){let e={value:t};return[e.value,function(t){e.value=t}]},o=i},591:(t,e,n)=>{n.d(e,{FO:()=>r,UG:()=>o,b8:()=>s,dS:()=>a});var i=n(182);const r=t=>document.getElementById(t),o=t=>document.querySelector(t),a=(t,e)=>{const n=document.createElement(t);return e instanceof Function?e(n):(e instanceof Object&&options.children&&(n.children=e.children),"string"==typeof e&&(n.innerHTML=e),n)},s=t=>document.querySelector(`[data-${i.Z.prefix}-${t}]`)},669:(t,e,n)=>{n.d(e,{$_:()=>s,Bi:()=>i,OD:()=>a,Ug:()=>o,j8:()=>r});const i=function(){return new Promise(((t,e)=>{const n=document.createElement("style");n.textContent="\n@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;700&family=Sedgwick+Ave+Display&display=swap');\nbody{\n  font-family:'Archivo', sans-serif;\n}\n",document.body.appendChild(n),t(n)}))},r=function(){return new Promise((async(t,e)=>{const n=document.createElement("script");n.src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio",n.className="dependency",document.body.appendChild(n),t(n)}))},o=function(){return new Promise(((t,e)=>{const n=document.createElement("link");n.rel="stylesheet",n.href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",n.className="dependency",n.crossorigin="anonymous",n.referrerPolicy="no-referrer",document.body.appendChild(n),t(n)}))},a=function(){return new Promise(((t,e)=>{const n=document.createElement("link");n.rel="stylesheet",n.href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",n.className="dependency",n.referrerPolicy="no-referrer",document.body.appendChild(n),t(n)}))},s={primary500:"blue-500",primary700:"blue-700",primary300:"blue-300",primary100:"blue-100",blue500:"blue-500",blue300:"blue-300",black:"black",white:"white",grey500:"grey-500",grey300:"grey-300"}},309:(t,e,n)=>{t.exports=n.p+"4f6df144adbea81a4074.png"}},i={};function r(t){var e=i[t];if(void 0!==e)return e.exports;var o=i[t]={exports:{}};return n[t](o,o.exports,r),o.exports}r.m=n,r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.f={},r.e=t=>Promise.all(Object.keys(r.f).reduce(((e,n)=>(r.f[n](t,e),e)),[])),r.u=t=>t+".main.bundle.js",r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),t={},e="chatbot:",r.l=(n,i,o,a)=>{if(t[n])t[n].push(i);else{var s,l;if(void 0!==o)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==e+o){s=u;break}}s||(l=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",e+o),s.src=n),t[n]=[i];var m=(e,i)=>{s.onerror=s.onload=null,clearTimeout(h);var r=t[n];if(delete t[n],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((t=>t(i))),e)return e(i)},h=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),l&&document.head.appendChild(s)}},r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t;r.g.importScripts&&(t=r.g.location+"");var e=r.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=t})(),(()=>{var t={179:0};r.f.j=(e,n)=>{var i=r.o(t,e)?t[e]:void 0;if(0!==i)if(i)n.push(i[2]);else{var o=new Promise(((n,r)=>i=t[e]=[n,r]));n.push(i[2]=o);var a=r.p+r.u(e),s=new Error;r.l(a,(n=>{if(r.o(t,e)&&(0!==(i=t[e])&&(t[e]=void 0),i)){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,i[1](s)}}),"chunk-"+e,e)}};var e=(e,n)=>{var i,o,[a,s,l]=n,c=0;if(a.some((e=>0!==t[e]))){for(i in s)r.o(s,i)&&(r.m[i]=s[i]);l&&l(r)}for(e&&e(n);c<a.length;c++)o=a[c],r.o(t,o)&&t[o]&&t[o][0](),t[o]=0},n=self.webpackChunkchatbot=self.webpackChunkchatbot||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})(),(()=>{var t=r(591),e=r(182);String.prototype.ucfirst=function(){return this.charAt(0).toUpperCase()+this.slice(1,this.length)},HTMLElement.prototype.setFontFamily=function(t){return this.style.fontFamily=t,this},HTMLElement.prototype.setCss=function(t){let n=this.classList;return t.split(" ").forEach(((t,e)=>{n.add(t.trim())})),this.classList=n,this.classList.add("animate__animated",`${e.Z.animation}`),this.addEventListener("animationend",(function(){this.classList.remove(`${e.Z.animation}`)})),this},HTMLElement.prototype.nextNode=function(e="",n="div",i={}){const r=(0,t.dS)(n);for(let t in i){const e=i[t];"className"==t&&(t="class"),r[t]=e}return["img","input"].includes(n)||(r.innerHTML=e),this.appendChild(r),r},HTMLElement.prototype.nextForm=function(e,n,i=[{label:"Username",name:"name1",placeholder:"Type here...",id:"input1"}]){let r,o,a,s=[];const l=(0,t.dS)("form");return(0,t.dS)("button").type="submit",l.action=e,l.method=n,i?.forEach(((e,n)=>{r=(0,t.dS)("label"),e?.label?r.for=e?.id??e.name:r.setAttribute("for",e.name),r.textContent=e?.label?.ucfirst(),e?.use?(o=(0,t.dS)(e.use),"textarea"===e.use&&(o.rows=e?.rows,o.cols=e?.cols)):o=(0,t.dS)("input"),o.name=e.name,o.placeholder=e.placeholder,o.id=e?.id??e.name,o.setAttribute("type",e?.type??["password","pwd","pass","passwd"].includes(e?.name?.toLowerCase())?"password":["phone","number","digit"].includes(e?.name?.toLowerCase())?"number":"text"),r.appendChild(o),l.appendChild(r),s.push({label:r,inputEl:o})})),a=l.nextNode("Submit","button",{type:"submit"}),this.appendChild(l),{inputs:s,form:l,submitButton:a,onSubmit(t){"function"==typeof t&&l.addEventListener("submit",(function(e){t(new FormData(this),e)}))}}},HTMLElement;var n=r(669),i=r(706),o=r(712),a=r(309);const s=function({frame:t,context:i}){const s=t.nextNode(null,"div");s.setCss("h-full w-full flex flex-col justify-around items-center");const l=s.nextNode(null,"div");l.setCss("flex flex-col justify-center items-center py-5");const c=new Image(400,400);c.src=a,c.setCss("m-3 object-fit"),c.onload=function(t){c.src=t.target.currentSrc},l.appendChild(c),l.nextNode(`Say hi to ${e.Z.appName}`,"h1").setFontFamily(e.Z.fonts.secondary).setCss("text-white text-2xl uppercase font-bold prose m-5");const d=l.nextNode("Get Started","button");return d.setCss(`flex justify-center items-center text-white text-lg font-bold font-impact bg-${n.$_.primary700} rounded-full py-1 px-5 shadow-lg mt-5`),d.addEventListener("click",(async function(){const{Activity:t}=(new o.Z).createActivity(),{default:e}=await r.e(801).then(r.bind(r,801));t.createChildren(e)})),i.createFooter(t,"By continuing, you agree to our terms of use and privacy policies.").setCss("text-sm text-center mb-auto text-white prose bg-green-500"),s};(async()=>{let t;(t=document.querySelector(".dependency"))&&t.remove();try{await(0,n.j8)(),await(0,n.Ug)(),await(0,n.OD)(),await(0,n.Bi)()}catch(t){throw new i.Z(t)}})().then((e=>{document.addEventListener("DOMContentLoaded",(()=>{const e=(0,t.b8)("chatbot");e.addEventListener("click",(function(){const{Activity:t}=(new o.Z).createActivity();t.createChildren(s)})),e.appendChild((()=>{const e=(0,t.dS)("button");return e.type="button",e.setCss(`bg-${n.$_.primary700} absolute bottom-10 right-10 p-5 rounded-lg fa fa-inbox text-2xl shadow-2xl shadow-blue-500 text-${n.$_.white}`),e})())}))})).catch((t=>{throw new i.Z(t)}))})()})();