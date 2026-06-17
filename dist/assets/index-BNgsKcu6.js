(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function wl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const _t={},ms=[],Nn=()=>{},ef=()=>!1,da=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Rl=n=>n.startsWith("onUpdate:"),Yt=Object.assign,Cl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Zh=Object.prototype.hasOwnProperty,ut=(n,e)=>Zh.call(n,e),qe=Array.isArray,gs=n=>pa(n)==="[object Map]",tf=n=>pa(n)==="[object Set]",Ke=n=>typeof n=="function",Ct=n=>typeof n=="string",Ai=n=>typeof n=="symbol",Mt=n=>n!==null&&typeof n=="object",nf=n=>(Mt(n)||Ke(n))&&Ke(n.then)&&Ke(n.catch),sf=Object.prototype.toString,pa=n=>sf.call(n),Jh=n=>pa(n).slice(8,-1),rf=n=>pa(n)==="[object Object]",Pl=n=>Ct(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,ks=wl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ma=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},Qh=/-\w/g,bi=ma(n=>n.replace(Qh,e=>e.slice(1).toUpperCase())),ed=/\B([A-Z])/g,wi=ma(n=>n.replace(ed,"-$1").toLowerCase()),af=ma(n=>n.charAt(0).toUpperCase()+n.slice(1)),Pa=ma(n=>n?`on${af(n)}`:""),Ei=(n,e)=>!Object.is(n,e),Gr=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},of=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Dl=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Sc;const ga=()=>Sc||(Sc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Zs(n){if(qe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Ct(i)?sd(i):Zs(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Ct(n)||Mt(n))return n}const td=/;(?![^(]*\))/g,nd=/:([^]+)/,id=/\/\*[^]*?\*\//g;function sd(n){const e={};return n.replace(id,"").split(td).forEach(t=>{if(t){const i=t.split(nd);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function nn(n){let e="";if(Ct(n))e=n;else if(qe(n))for(let t=0;t<n.length;t++){const i=nn(n[t]);i&&(e+=i+" ")}else if(Mt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const rd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ad=wl(rd);function lf(n){return!!n||n===""}const cf=n=>!!(n&&n.__v_isRef===!0),ot=n=>Ct(n)?n:n==null?"":qe(n)||Mt(n)&&(n.toString===sf||!Ke(n.toString))?cf(n)?ot(n.value):JSON.stringify(n,uf,2):String(n),uf=(n,e)=>cf(e)?uf(n,e.value):gs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[Da(i,r)+" =>"]=s,t),{})}:tf(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Da(t))}:Ai(e)?Da(e):Mt(e)&&!qe(e)&&!rf(e)?String(e):e,Da=(n,e="")=>{var t;return Ai(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};let Kt;class od{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Kt,!e&&Kt&&(this.index=(Kt.scopes||(Kt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Kt;try{return Kt=this,e()}finally{Kt=t}}}on(){++this._on===1&&(this.prevScope=Kt,Kt=this)}off(){this._on>0&&--this._on===0&&(Kt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function ld(){return Kt}let xt;const La=new WeakSet;class ff{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Kt&&Kt.active&&Kt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,La.has(this)&&(La.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||df(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ec(this),pf(this);const e=xt,t=En;xt=this,En=!0;try{return this.fn()}finally{mf(this),xt=e,En=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ul(e);this.deps=this.depsTail=void 0,Ec(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?La.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){yo(this)&&this.run()}get dirty(){return yo(this)}}let hf=0,Ws,Xs;function df(n,e=!1){if(n.flags|=8,e){n.next=Xs,Xs=n;return}n.next=Ws,Ws=n}function Ll(){hf++}function Il(){if(--hf>0)return;if(Xs){let e=Xs;for(Xs=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Ws;){let e=Ws;for(Ws=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function pf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function mf(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),Ul(i),cd(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function yo(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(gf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function gf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Js)||(n.globalVersion=Js,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!yo(n))))return;n.flags|=2;const e=n.dep,t=xt,i=En;xt=n,En=!0;try{pf(n);const s=n.fn(n._value);(e.version===0||Ei(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{xt=t,En=i,mf(n),n.flags&=-3}}function Ul(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)Ul(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function cd(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let En=!0;const _f=[];function ti(){_f.push(En),En=!1}function ni(){const n=_f.pop();En=n===void 0?!0:n}function Ec(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=xt;xt=void 0;try{e()}finally{xt=t}}}let Js=0;class ud{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Nl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!xt||!En||xt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==xt)t=this.activeLink=new ud(xt,this),xt.deps?(t.prevDep=xt.depsTail,xt.depsTail.nextDep=t,xt.depsTail=t):xt.deps=xt.depsTail=t,vf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=xt.depsTail,t.nextDep=void 0,xt.depsTail.nextDep=t,xt.depsTail=t,xt.deps===t&&(xt.deps=i)}return t}trigger(e){this.version++,Js++,this.notify(e)}notify(e){Ll();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Il()}}}function vf(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)vf(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const To=new WeakMap,Hi=Symbol(""),Ao=Symbol(""),Qs=Symbol("");function Bt(n,e,t){if(En&&xt){let i=To.get(n);i||To.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new Nl),s.map=i,s.key=t),s.track()}}function Kn(n,e,t,i,s,r){const a=To.get(n);if(!a){Js++;return}const o=l=>{l&&l.trigger()};if(Ll(),e==="clear")a.forEach(o);else{const l=qe(n),c=l&&Pl(t);if(l&&t==="length"){const u=Number(i);a.forEach((h,f)=>{(f==="length"||f===Qs||!Ai(f)&&f>=u)&&o(h)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(Qs)),e){case"add":l?c&&o(a.get("length")):(o(a.get(Hi)),gs(n)&&o(a.get(Ao)));break;case"delete":l||(o(a.get(Hi)),gs(n)&&o(a.get(Ao)));break;case"set":gs(n)&&o(a.get(Hi));break}}Il()}function Ki(n){const e=ct(n);return e===n?e:(Bt(e,"iterate",Qs),dn(n)?e:e.map(yn))}function _a(n){return Bt(n=ct(n),"iterate",Qs),n}function _i(n,e){return ii(n)?Gi(n)?Ss(yn(e)):Ss(e):yn(e)}const fd={__proto__:null,[Symbol.iterator](){return Ia(this,Symbol.iterator,n=>_i(this,n))},concat(...n){return Ki(this).concat(...n.map(e=>qe(e)?Ki(e):e))},entries(){return Ia(this,"entries",n=>(n[1]=_i(this,n[1]),n))},every(n,e){return Gn(this,"every",n,e,void 0,arguments)},filter(n,e){return Gn(this,"filter",n,e,t=>t.map(i=>_i(this,i)),arguments)},find(n,e){return Gn(this,"find",n,e,t=>_i(this,t),arguments)},findIndex(n,e){return Gn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Gn(this,"findLast",n,e,t=>_i(this,t),arguments)},findLastIndex(n,e){return Gn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Gn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Ua(this,"includes",n)},indexOf(...n){return Ua(this,"indexOf",n)},join(n){return Ki(this).join(n)},lastIndexOf(...n){return Ua(this,"lastIndexOf",n)},map(n,e){return Gn(this,"map",n,e,void 0,arguments)},pop(){return Cs(this,"pop")},push(...n){return Cs(this,"push",n)},reduce(n,...e){return bc(this,"reduce",n,e)},reduceRight(n,...e){return bc(this,"reduceRight",n,e)},shift(){return Cs(this,"shift")},some(n,e){return Gn(this,"some",n,e,void 0,arguments)},splice(...n){return Cs(this,"splice",n)},toReversed(){return Ki(this).toReversed()},toSorted(n){return Ki(this).toSorted(n)},toSpliced(...n){return Ki(this).toSpliced(...n)},unshift(...n){return Cs(this,"unshift",n)},values(){return Ia(this,"values",n=>_i(this,n))}};function Ia(n,e,t){const i=_a(n),s=i[e]();return i!==n&&!dn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const hd=Array.prototype;function Gn(n,e,t,i,s,r){const a=_a(n),o=a!==n&&!dn(n),l=a[e];if(l!==hd[e]){const h=l.apply(n,r);return o?yn(h):h}let c=t;a!==n&&(o?c=function(h,f){return t.call(this,_i(n,h),f,n)}:t.length>2&&(c=function(h,f){return t.call(this,h,f,n)}));const u=l.call(a,c,i);return o&&s?s(u):u}function bc(n,e,t,i){const s=_a(n);let r=t;return s!==n&&(dn(n)?t.length>3&&(r=function(a,o,l){return t.call(this,a,o,l,n)}):r=function(a,o,l){return t.call(this,a,_i(n,o),l,n)}),s[e](r,...i)}function Ua(n,e,t){const i=ct(n);Bt(i,"iterate",Qs);const s=i[e](...t);return(s===-1||s===!1)&&zl(t[0])?(t[0]=ct(t[0]),i[e](...t)):s}function Cs(n,e,t=[]){ti(),Ll();const i=ct(n)[e].apply(n,t);return Il(),ni(),i}const dd=wl("__proto__,__v_isRef,__isVue"),xf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Ai));function pd(n){Ai(n)||(n=String(n));const e=ct(this);return Bt(e,"has",n),e.hasOwnProperty(n)}class Mf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?yd:yf:r?bf:Ef).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=qe(e);if(!s){let l;if(a&&(l=fd[t]))return l;if(t==="hasOwnProperty")return pd}const o=Reflect.get(e,t,Vt(e)?e:i);if((Ai(t)?xf.has(t):dd(t))||(s||Bt(e,"get",t),r))return o;if(Vt(o)){const l=a&&Pl(t)?o:o.value;return s&&Mt(l)?Ro(l):l}return Mt(o)?s?Ro(o):Ol(o):o}}class Sf extends Mf{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const a=qe(e)&&Pl(t);if(!this._isShallow){const c=ii(r);if(!dn(i)&&!ii(i)&&(r=ct(r),i=ct(i)),!a&&Vt(r)&&!Vt(i))return c||(r.value=i),!0}const o=a?Number(t)<e.length:ut(e,t),l=Reflect.set(e,t,i,Vt(e)?e:s);return e===ct(s)&&(o?Ei(i,r)&&Kn(e,"set",t,i):Kn(e,"add",t,i)),l}deleteProperty(e,t){const i=ut(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&Kn(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!Ai(t)||!xf.has(t))&&Bt(e,"has",t),i}ownKeys(e){return Bt(e,"iterate",qe(e)?"length":Hi),Reflect.ownKeys(e)}}class md extends Mf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const gd=new Sf,_d=new md,vd=new Sf(!0);const wo=n=>n,pr=n=>Reflect.getPrototypeOf(n);function xd(n,e,t){return function(...i){const s=this.__v_raw,r=ct(s),a=gs(r),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=s[n](...i),u=t?wo:e?Ss:yn;return!e&&Bt(r,"iterate",l?Ao:Hi),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:o?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function mr(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Md(n,e){const t={get(s){const r=this.__v_raw,a=ct(r),o=ct(s);n||(Ei(s,o)&&Bt(a,"get",s),Bt(a,"get",o));const{has:l}=pr(a),c=e?wo:n?Ss:yn;if(l.call(a,s))return c(r.get(s));if(l.call(a,o))return c(r.get(o));r!==a&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Bt(ct(s),"iterate",Hi),s.size},has(s){const r=this.__v_raw,a=ct(r),o=ct(s);return n||(Ei(s,o)&&Bt(a,"has",s),Bt(a,"has",o)),s===o?r.has(s):r.has(s)||r.has(o)},forEach(s,r){const a=this,o=a.__v_raw,l=ct(o),c=e?wo:n?Ss:yn;return!n&&Bt(l,"iterate",Hi),o.forEach((u,h)=>s.call(r,c(u),c(h),a))}};return Yt(t,n?{add:mr("add"),set:mr("set"),delete:mr("delete"),clear:mr("clear")}:{add(s){!e&&!dn(s)&&!ii(s)&&(s=ct(s));const r=ct(this);return pr(r).has.call(r,s)||(r.add(s),Kn(r,"add",s,s)),this},set(s,r){!e&&!dn(r)&&!ii(r)&&(r=ct(r));const a=ct(this),{has:o,get:l}=pr(a);let c=o.call(a,s);c||(s=ct(s),c=o.call(a,s));const u=l.call(a,s);return a.set(s,r),c?Ei(r,u)&&Kn(a,"set",s,r):Kn(a,"add",s,r),this},delete(s){const r=ct(this),{has:a,get:o}=pr(r);let l=a.call(r,s);l||(s=ct(s),l=a.call(r,s)),o&&o.call(r,s);const c=r.delete(s);return l&&Kn(r,"delete",s,void 0),c},clear(){const s=ct(this),r=s.size!==0,a=s.clear();return r&&Kn(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=xd(s,n,e)}),t}function Fl(n,e){const t=Md(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(ut(t,s)&&s in i?t:i,s,r)}const Sd={get:Fl(!1,!1)},Ed={get:Fl(!1,!0)},bd={get:Fl(!0,!1)};const Ef=new WeakMap,bf=new WeakMap,yf=new WeakMap,yd=new WeakMap;function Td(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ad(n){return n.__v_skip||!Object.isExtensible(n)?0:Td(Jh(n))}function Ol(n){return ii(n)?n:Bl(n,!1,gd,Sd,Ef)}function wd(n){return Bl(n,!1,vd,Ed,bf)}function Ro(n){return Bl(n,!0,_d,bd,yf)}function Bl(n,e,t,i,s){if(!Mt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=Ad(n);if(r===0)return n;const a=s.get(n);if(a)return a;const o=new Proxy(n,r===2?i:t);return s.set(n,o),o}function Gi(n){return ii(n)?Gi(n.__v_raw):!!(n&&n.__v_isReactive)}function ii(n){return!!(n&&n.__v_isReadonly)}function dn(n){return!!(n&&n.__v_isShallow)}function zl(n){return n?!!n.__v_raw:!1}function ct(n){const e=n&&n.__v_raw;return e?ct(e):n}function Rd(n){return!ut(n,"__v_skip")&&Object.isExtensible(n)&&of(n,"__v_skip",!0),n}const yn=n=>Mt(n)?Ol(n):n,Ss=n=>Mt(n)?Ro(n):n;function Vt(n){return n?n.__v_isRef===!0:!1}function pt(n){return Cd(n,!1)}function Cd(n,e){return Vt(n)?n:new Pd(n,e)}class Pd{constructor(e,t){this.dep=new Nl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:ct(e),this._value=t?e:yn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||dn(e)||ii(e);e=i?e:ct(e),Ei(e,t)&&(this._rawValue=e,this._value=i?e:yn(e),this.dep.trigger())}}function Dd(n){return Vt(n)?n.value:n}const Ld={get:(n,e,t)=>e==="__v_raw"?n:Dd(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return Vt(s)&&!Vt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function Tf(n){return Gi(n)?n:new Proxy(n,Ld)}class Id{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Nl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Js-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&xt!==this)return df(this,!0),!0}get value(){const e=this.dep.track();return gf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Ud(n,e,t=!1){let i,s;return Ke(n)?i=n:(i=n.get,s=n.set),new Id(i,s,t)}const gr={},ea=new WeakMap;let Ni;function Nd(n,e=!1,t=Ni){if(t){let i=ea.get(t);i||ea.set(t,i=[]),i.push(n)}}function Fd(n,e,t=_t){const{immediate:i,deep:s,once:r,scheduler:a,augmentJob:o,call:l}=t,c=b=>s?b:dn(b)||s===!1||s===0?jn(b,1):jn(b);let u,h,f,p,v=!1,E=!1;if(Vt(n)?(h=()=>n.value,v=dn(n)):Gi(n)?(h=()=>c(n),v=!0):qe(n)?(E=!0,v=n.some(b=>Gi(b)||dn(b)),h=()=>n.map(b=>{if(Vt(b))return b.value;if(Gi(b))return c(b);if(Ke(b))return l?l(b,2):b()})):Ke(n)?e?h=l?()=>l(n,2):n:h=()=>{if(f){ti();try{f()}finally{ni()}}const b=Ni;Ni=u;try{return l?l(n,3,[p]):n(p)}finally{Ni=b}}:h=Nn,e&&s){const b=h,D=s===!0?1/0:s;h=()=>jn(b(),D)}const g=ld(),d=()=>{u.stop(),g&&g.active&&Cl(g.effects,u)};if(r&&e){const b=e;e=(...D)=>{b(...D),d()}}let S=E?new Array(n.length).fill(gr):gr;const T=b=>{if(!(!(u.flags&1)||!u.dirty&&!b))if(e){const D=u.run();if(s||v||(E?D.some((w,I)=>Ei(w,S[I])):Ei(D,S))){f&&f();const w=Ni;Ni=u;try{const I=[D,S===gr?void 0:E&&S[0]===gr?[]:S,p];S=D,l?l(e,3,I):e(...I)}finally{Ni=w}}}else u.run()};return o&&o(T),u=new ff(h),u.scheduler=a?()=>a(T,!1):T,p=b=>Nd(b,!1,u),f=u.onStop=()=>{const b=ea.get(u);if(b){if(l)l(b,4);else for(const D of b)D();ea.delete(u)}},e?i?T(!0):S=u.run():a?a(T.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function jn(n,e=1/0,t){if(e<=0||!Mt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Vt(n))jn(n.value,e,t);else if(qe(n))for(let i=0;i<n.length;i++)jn(n[i],e,t);else if(tf(n)||gs(n))n.forEach(i=>{jn(i,e,t)});else if(rf(n)){for(const i in n)jn(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&jn(n[i],e,t)}return n}function or(n,e,t,i){try{return i?n(...i):n()}catch(s){va(s,e,t)}}function Bn(n,e,t,i){if(Ke(n)){const s=or(n,e,t,i);return s&&nf(s)&&s.catch(r=>{va(r,e,t)}),s}if(qe(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Bn(n[r],e,t,i));return s}}function va(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||_t;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}o=o.parent}if(r){ti(),or(r,null,10,[n,l,c]),ni();return}}Od(n,t,s,i,a)}function Od(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const Xt=[];let Pn=-1;const _s=[];let vi=null,ds=0;const Af=Promise.resolve();let ta=null;function Bd(n){const e=ta||Af;return n?e.then(this?n.bind(this):n):e}function zd(n){let e=Pn+1,t=Xt.length;for(;e<t;){const i=e+t>>>1,s=Xt[i],r=er(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function Vl(n){if(!(n.flags&1)){const e=er(n),t=Xt[Xt.length-1];!t||!(n.flags&2)&&e>=er(t)?Xt.push(n):Xt.splice(zd(e),0,n),n.flags|=1,wf()}}function wf(){ta||(ta=Af.then(Cf))}function Vd(n){qe(n)?_s.push(...n):vi&&n.id===-1?vi.splice(ds+1,0,n):n.flags&1||(_s.push(n),n.flags|=1),wf()}function yc(n,e,t=Pn+1){for(;t<Xt.length;t++){const i=Xt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Xt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Rf(n){if(_s.length){const e=[...new Set(_s)].sort((t,i)=>er(t)-er(i));if(_s.length=0,vi){vi.push(...e);return}for(vi=e,ds=0;ds<vi.length;ds++){const t=vi[ds];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}vi=null,ds=0}}const er=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Cf(n){try{for(Pn=0;Pn<Xt.length;Pn++){const e=Xt[Pn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),or(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Pn<Xt.length;Pn++){const e=Xt[Pn];e&&(e.flags&=-2)}Pn=-1,Xt.length=0,Rf(),ta=null,(Xt.length||_s.length)&&Cf()}}let hn=null,Pf=null;function na(n){const e=hn;return hn=n,Pf=n&&n.type.__scopeId||null,e}function Hd(n,e=hn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Uc(-1);const r=na(e);let a;try{a=n(...s)}finally{na(r),i._d&&Uc(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function ji(n,e){if(hn===null)return n;const t=Ea(hn),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,a,o,l=_t]=e[s];r&&(Ke(r)&&(r={mounted:r,updated:r}),r.deep&&jn(a),i.push({dir:r,instance:t,value:a,oldValue:void 0,arg:o,modifiers:l}))}return n}function Ci(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let a=0;a<s.length;a++){const o=s[a];r&&(o.oldValue=r[a].value);let l=o.dir[i];l&&(ti(),Bn(l,t,8,[n.el,o,n,e]),ni())}}const Gd=Symbol("_vte"),kd=n=>n.__isTeleport,Wd=Symbol("_leaveCb");function Hl(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Hl(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Df(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const ia=new WeakMap;function qs(n,e,t,i,s=!1){if(qe(n)){n.forEach((v,E)=>qs(v,e&&(qe(e)?e[E]:e),t,i,s));return}if(Ys(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&qs(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?Ea(i.component):i.el,a=s?null:r,{i:o,r:l}=n,c=e&&e.r,u=o.refs===_t?o.refs={}:o.refs,h=o.setupState,f=ct(h),p=h===_t?ef:v=>ut(f,v);if(c!=null&&c!==l){if(Tc(e),Ct(c))u[c]=null,p(c)&&(h[c]=null);else if(Vt(c)){c.value=null;const v=e;v.k&&(u[v.k]=null)}}if(Ke(l))or(l,o,12,[a,u]);else{const v=Ct(l),E=Vt(l);if(v||E){const g=()=>{if(n.f){const d=v?p(l)?h[l]:u[l]:l.value;if(s)qe(d)&&Cl(d,r);else if(qe(d))d.includes(r)||d.push(r);else if(v)u[l]=[r],p(l)&&(h[l]=u[l]);else{const S=[r];l.value=S,n.k&&(u[n.k]=S)}}else v?(u[l]=a,p(l)&&(h[l]=a)):E&&(l.value=a,n.k&&(u[n.k]=a))};if(a){const d=()=>{g(),ia.delete(n)};d.id=-1,ia.set(n,d),en(d,t)}else Tc(n),g()}}}function Tc(n){const e=ia.get(n);e&&(e.flags|=8,ia.delete(n))}ga().requestIdleCallback;ga().cancelIdleCallback;const Ys=n=>!!n.type.__asyncLoader,Lf=n=>n.type.__isKeepAlive;function Xd(n,e){If(n,"a",e)}function qd(n,e){If(n,"da",e)}function If(n,e,t=qt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(xa(e,i,t),t){let s=t.parent;for(;s&&s.parent;)Lf(s.parent.vnode)&&Yd(i,e,t,s),s=s.parent}}function Yd(n,e,t,i){const s=xa(e,n,i,!0);Gl(()=>{Cl(i[e],s)},t)}function xa(n,e,t=qt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...a)=>{ti();const o=lr(t),l=Bn(e,t,n,a);return o(),ni(),l});return i?s.unshift(r):s.push(r),r}}const oi=n=>(e,t=qt)=>{(!nr||n==="sp")&&xa(n,(...i)=>e(...i),t)},$d=oi("bm"),Uf=oi("m"),Kd=oi("bu"),jd=oi("u"),Zd=oi("bum"),Gl=oi("um"),Jd=oi("sp"),Qd=oi("rtg"),ep=oi("rtc");function tp(n,e=qt){xa("ec",n,e)}const np=Symbol.for("v-ndc");function ln(n,e,t,i){let s;const r=t,a=qe(n);if(a||Ct(n)){const o=a&&Gi(n);let l=!1,c=!1;o&&(l=!dn(n),c=ii(n),n=_a(n)),s=new Array(n.length);for(let u=0,h=n.length;u<h;u++)s[u]=e(l?c?Ss(yn(n[u])):yn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let o=0;o<n;o++)s[o]=e(o+1,o,void 0,r)}else if(Mt(n))if(n[Symbol.iterator])s=Array.from(n,(o,l)=>e(o,l,void 0,r));else{const o=Object.keys(n);s=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}const Co=n=>n?th(n)?Ea(n):Co(n.parent):null,$s=Yt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Co(n.parent),$root:n=>Co(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Ff(n),$forceUpdate:n=>n.f||(n.f=()=>{Vl(n.update)}),$nextTick:n=>n.n||(n.n=Bd.bind(n.proxy)),$watch:n=>pp.bind(n)}),Na=(n,e)=>n!==_t&&!n.__isScriptSetup&&ut(n,e),ip={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:a,type:o,appContext:l}=n;if(e[0]!=="$"){const f=a[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(Na(i,e))return a[e]=1,i[e];if(s!==_t&&ut(s,e))return a[e]=2,s[e];if(ut(r,e))return a[e]=3,r[e];if(t!==_t&&ut(t,e))return a[e]=4,t[e];Po&&(a[e]=0)}}const c=$s[e];let u,h;if(c)return e==="$attrs"&&Bt(n.attrs,"get",""),c(n);if((u=o.__cssModules)&&(u=u[e]))return u;if(t!==_t&&ut(t,e))return a[e]=4,t[e];if(h=l.config.globalProperties,ut(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return Na(s,e)?(s[e]=t,!0):i!==_t&&ut(i,e)?(i[e]=t,!0):ut(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:a}},o){let l;return!!(t[o]||n!==_t&&o[0]!=="$"&&ut(n,o)||Na(e,o)||ut(r,o)||ut(i,o)||ut($s,o)||ut(s.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ut(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Ac(n){return qe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Po=!0;function sp(n){const e=Ff(n),t=n.proxy,i=n.ctx;Po=!1,e.beforeCreate&&wc(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:v,activated:E,deactivated:g,beforeDestroy:d,beforeUnmount:S,destroyed:T,unmounted:b,render:D,renderTracked:w,renderTriggered:I,errorCaptured:x,serverPrefetch:R,expose:B,inheritAttrs:P,components:k,directives:ee,filters:ie}=e;if(c&&rp(c,i,null),a)for(const O in a){const J=a[O];Ke(J)&&(i[O]=J.bind(t))}if(s){const O=s.call(t,t);Mt(O)&&(n.data=Ol(O))}if(Po=!0,r)for(const O in r){const J=r[O],ce=Ke(J)?J.bind(t,t):Ke(J.get)?J.get.bind(t,t):Nn,be=!Ke(J)&&Ke(J.set)?J.set.bind(t):Nn,Ce=qr({get:ce,set:be});Object.defineProperty(i,O,{enumerable:!0,configurable:!0,get:()=>Ce.value,set:Pe=>Ce.value=Pe})}if(o)for(const O in o)Nf(o[O],i,t,O);if(l){const O=Ke(l)?l.call(t):l;Reflect.ownKeys(O).forEach(J=>{fp(J,O[J])})}u&&wc(u,n,"c");function W(O,J){qe(J)?J.forEach(ce=>O(ce.bind(t))):J&&O(J.bind(t))}if(W($d,h),W(Uf,f),W(Kd,p),W(jd,v),W(Xd,E),W(qd,g),W(tp,x),W(ep,w),W(Qd,I),W(Zd,S),W(Gl,b),W(Jd,R),qe(B))if(B.length){const O=n.exposed||(n.exposed={});B.forEach(J=>{Object.defineProperty(O,J,{get:()=>t[J],set:ce=>t[J]=ce,enumerable:!0})})}else n.exposed||(n.exposed={});D&&n.render===Nn&&(n.render=D),P!=null&&(n.inheritAttrs=P),k&&(n.components=k),ee&&(n.directives=ee),R&&Df(n)}function rp(n,e,t=Nn){qe(n)&&(n=Do(n));for(const i in n){const s=n[i];let r;Mt(s)?"default"in s?r=kr(s.from||i,s.default,!0):r=kr(s.from||i):r=kr(s),Vt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):e[i]=r}}function wc(n,e,t){Bn(qe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Nf(n,e,t,i){let s=i.includes(".")?zf(t,i):()=>t[i];if(Ct(n)){const r=e[n];Ke(r)&&Fa(s,r)}else if(Ke(n))Fa(s,n.bind(t));else if(Mt(n))if(qe(n))n.forEach(r=>Nf(r,e,t,i));else{const r=Ke(n.handler)?n.handler.bind(t):e[n.handler];Ke(r)&&Fa(s,r,n)}}function Ff(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:a}}=n.appContext,o=r.get(e);let l;return o?l=o:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>sa(l,c,a,!0)),sa(l,e,a)),Mt(e)&&r.set(e,l),l}function sa(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&sa(n,r,t,!0),s&&s.forEach(a=>sa(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=ap[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const ap={data:Rc,props:Cc,emits:Cc,methods:Vs,computed:Vs,beforeCreate:Gt,created:Gt,beforeMount:Gt,mounted:Gt,beforeUpdate:Gt,updated:Gt,beforeDestroy:Gt,beforeUnmount:Gt,destroyed:Gt,unmounted:Gt,activated:Gt,deactivated:Gt,errorCaptured:Gt,serverPrefetch:Gt,components:Vs,directives:Vs,watch:lp,provide:Rc,inject:op};function Rc(n,e){return e?n?function(){return Yt(Ke(n)?n.call(this,this):n,Ke(e)?e.call(this,this):e)}:e:n}function op(n,e){return Vs(Do(n),Do(e))}function Do(n){if(qe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Gt(n,e){return n?[...new Set([].concat(n,e))]:e}function Vs(n,e){return n?Yt(Object.create(null),n,e):e}function Cc(n,e){return n?qe(n)&&qe(e)?[...new Set([...n,...e])]:Yt(Object.create(null),Ac(n),Ac(e??{})):e}function lp(n,e){if(!n)return e;if(!e)return n;const t=Yt(Object.create(null),n);for(const i in e)t[i]=Gt(n[i],e[i]);return t}function Of(){return{app:null,config:{isNativeTag:ef,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let cp=0;function up(n,e){return function(i,s=null){Ke(i)||(i=Yt({},i)),s!=null&&!Mt(s)&&(s=null);const r=Of(),a=new WeakSet,o=[];let l=!1;const c=r.app={_uid:cp++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:$p,get config(){return r.config},set config(u){},use(u,...h){return a.has(u)||(u&&Ke(u.install)?(a.add(u),u.install(c,...h)):Ke(u)&&(a.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,f){if(!l){const p=c._ceVNode||an(i,s);return p.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),n(p,u,f),l=!0,c._container=u,u.__vue_app__=c,Ea(p.component)}},onUnmount(u){o.push(u)},unmount(){l&&(Bn(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=vs;vs=c;try{return u()}finally{vs=h}}};return c}}let vs=null;function fp(n,e){if(qt){let t=qt.provides;const i=qt.parent&&qt.parent.provides;i===t&&(t=qt.provides=Object.create(i)),t[n]=e}}function kr(n,e,t=!1){const i=Gp();if(i||vs){let s=vs?vs._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Ke(e)?e.call(i&&i.proxy):e}}const hp=Symbol.for("v-scx"),dp=()=>kr(hp);function Fa(n,e,t){return Bf(n,e,t)}function Bf(n,e,t=_t){const{immediate:i,deep:s,flush:r,once:a}=t,o=Yt({},t),l=e&&i||!e&&r!=="post";let c;if(nr){if(r==="sync"){const p=dp();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Nn,p.resume=Nn,p.pause=Nn,p}}const u=qt;o.call=(p,v,E)=>Bn(p,u,v,E);let h=!1;r==="post"?o.scheduler=p=>{en(p,u&&u.suspense)}:r!=="sync"&&(h=!0,o.scheduler=(p,v)=>{v?p():Vl(p)}),o.augmentJob=p=>{e&&(p.flags|=4),h&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const f=Fd(n,e,o);return nr&&(c?c.push(f):l&&f()),f}function pp(n,e,t){const i=this.proxy,s=Ct(n)?n.includes(".")?zf(i,n):()=>i[n]:n.bind(i,i);let r;Ke(e)?r=e:(r=e.handler,t=e);const a=lr(this),o=Bf(s,r.bind(i),t);return a(),o}function zf(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const mp=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${bi(e)}Modifiers`]||n[`${wi(e)}Modifiers`];function gp(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||_t;let s=t;const r=e.startsWith("update:"),a=r&&mp(i,e.slice(7));a&&(a.trim&&(s=t.map(u=>Ct(u)?u.trim():u)),a.number&&(s=t.map(Dl)));let o,l=i[o=Pa(e)]||i[o=Pa(bi(e))];!l&&r&&(l=i[o=Pa(wi(e))]),l&&Bn(l,n,6,s);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,Bn(c,n,6,s)}}const _p=new WeakMap;function Vf(n,e,t=!1){const i=t?_p:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let a={},o=!1;if(!Ke(n)){const l=c=>{const u=Vf(c,e,!0);u&&(o=!0,Yt(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!o?(Mt(n)&&i.set(n,null),null):(qe(r)?r.forEach(l=>a[l]=null):Yt(a,r),Mt(n)&&i.set(n,a),a)}function Ma(n,e){return!n||!da(e)?!1:(e=e.slice(2).replace(/Once$/,""),ut(n,e[0].toLowerCase()+e.slice(1))||ut(n,wi(e))||ut(n,e))}function Pc(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:h,data:f,setupState:p,ctx:v,inheritAttrs:E}=n,g=na(n);let d,S;try{if(t.shapeFlag&4){const b=s||i,D=b;d=Dn(c.call(D,b,u,h,p,f,v)),S=o}else{const b=e;d=Dn(b.length>1?b(h,{attrs:o,slots:a,emit:l}):b(h,null)),S=e.props?o:vp(o)}}catch(b){Ks.length=0,va(b,n,1),d=an(yi)}let T=d;if(S&&E!==!1){const b=Object.keys(S),{shapeFlag:D}=T;b.length&&D&7&&(r&&b.some(Rl)&&(S=xp(S,r)),T=Es(T,S,!1,!0))}return t.dirs&&(T=Es(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(t.dirs):t.dirs),t.transition&&Hl(T,t.transition),d=T,na(g),d}const vp=n=>{let e;for(const t in n)(t==="class"||t==="style"||da(t))&&((e||(e={}))[t]=n[t]);return e},xp=(n,e)=>{const t={};for(const i in n)(!Rl(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Mp(n,e,t){const{props:i,children:s,component:r}=n,{props:a,children:o,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Dc(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(a[f]!==i[f]&&!Ma(c,f))return!0}}}else return(s||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Dc(i,a,c):!0:!!a;return!1}function Dc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!Ma(t,r))return!0}return!1}function Sp({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Hf={},Gf=()=>Object.create(Hf),kf=n=>Object.getPrototypeOf(n)===Hf;function Ep(n,e,t,i=!1){const s={},r=Gf();n.propsDefaults=Object.create(null),Wf(n,e,s,r);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=i?s:wd(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function bp(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:a}}=n,o=ct(s),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Ma(n.emitsOptions,f))continue;const p=e[f];if(l)if(ut(r,f))p!==r[f]&&(r[f]=p,c=!0);else{const v=bi(f);s[v]=Lo(l,o,v,p,n,!1)}else p!==r[f]&&(r[f]=p,c=!0)}}}else{Wf(n,e,s,r)&&(c=!0);let u;for(const h in o)(!e||!ut(e,h)&&((u=wi(h))===h||!ut(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=Lo(l,o,h,void 0,n,!0)):delete s[h]);if(r!==o)for(const h in r)(!e||!ut(e,h))&&(delete r[h],c=!0)}c&&Kn(n.attrs,"set","")}function Wf(n,e,t,i){const[s,r]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(ks(l))continue;const c=e[l];let u;s&&ut(s,u=bi(l))?!r||!r.includes(u)?t[u]=c:(o||(o={}))[u]=c:Ma(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(r){const l=ct(t),c=o||_t;for(let u=0;u<r.length;u++){const h=r[u];t[h]=Lo(s,l,h,c[h],n,!ut(c,h))}}return a}function Lo(n,e,t,i,s,r){const a=n[t];if(a!=null){const o=ut(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Ke(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=lr(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}a[0]&&(r&&!o?i=!1:a[1]&&(i===""||i===wi(t))&&(i=!0))}return i}const yp=new WeakMap;function Xf(n,e,t=!1){const i=t?yp:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,a={},o=[];let l=!1;if(!Ke(n)){const u=h=>{l=!0;const[f,p]=Xf(h,e,!0);Yt(a,f),p&&o.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return Mt(n)&&i.set(n,ms),ms;if(qe(r))for(let u=0;u<r.length;u++){const h=bi(r[u]);Lc(h)&&(a[h]=_t)}else if(r)for(const u in r){const h=bi(u);if(Lc(h)){const f=r[u],p=a[h]=qe(f)||Ke(f)?{type:f}:Yt({},f),v=p.type;let E=!1,g=!0;if(qe(v))for(let d=0;d<v.length;++d){const S=v[d],T=Ke(S)&&S.name;if(T==="Boolean"){E=!0;break}else T==="String"&&(g=!1)}else E=Ke(v)&&v.name==="Boolean";p[0]=E,p[1]=g,(E||ut(p,"default"))&&o.push(h)}}const c=[a,o];return Mt(n)&&i.set(n,c),c}function Lc(n){return n[0]!=="$"&&!ks(n)}const kl=n=>n==="_"||n==="_ctx"||n==="$stable",Wl=n=>qe(n)?n.map(Dn):[Dn(n)],Tp=(n,e,t)=>{if(e._n)return e;const i=Hd((...s)=>Wl(e(...s)),t);return i._c=!1,i},qf=(n,e,t)=>{const i=n._ctx;for(const s in n){if(kl(s))continue;const r=n[s];if(Ke(r))e[s]=Tp(s,r,i);else if(r!=null){const a=Wl(r);e[s]=()=>a}}},Yf=(n,e)=>{const t=Wl(e);n.slots.default=()=>t},$f=(n,e,t)=>{for(const i in e)(t||!kl(i))&&(n[i]=e[i])},Ap=(n,e,t)=>{const i=n.slots=Gf();if(n.vnode.shapeFlag&32){const s=e._;s?($f(i,e,t),t&&of(i,"_",s,!0)):qf(e,i)}else e&&Yf(n,e)},wp=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,a=_t;if(i.shapeFlag&32){const o=e._;o?t&&o===1?r=!1:$f(s,e,t):(r=!e.$stable,qf(e,s)),a=e}else e&&(Yf(n,e),a={default:1});if(r)for(const o in s)!kl(o)&&a[o]==null&&delete s[o]},en=Lp;function Rp(n){return Cp(n)}function Cp(n,e){const t=ga();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=Nn,insertStaticContent:v}=n,E=(A,C,G,re=null,$=null,Q=null,ue=void 0,he=null,y=!!C.dynamicChildren)=>{if(A===C)return;A&&!Ps(A,C)&&(re=Ee(A),Pe(A,$,Q,!0),A=null),C.patchFlag===-2&&(y=!1,C.dynamicChildren=null);const{type:oe,ref:ve,shapeFlag:de}=C;switch(oe){case Sa:g(A,C,G,re);break;case yi:d(A,C,G,re);break;case Wr:A==null&&S(C,G,re,ue);break;case wt:k(A,C,G,re,$,Q,ue,he,y);break;default:de&1?D(A,C,G,re,$,Q,ue,he,y):de&6?ee(A,C,G,re,$,Q,ue,he,y):(de&64||de&128)&&oe.process(A,C,G,re,$,Q,ue,he,y,Be)}ve!=null&&$?qs(ve,A&&A.ref,Q,C||A,!C):ve==null&&A&&A.ref!=null&&qs(A.ref,null,Q,A,!0)},g=(A,C,G,re)=>{if(A==null)i(C.el=o(C.children),G,re);else{const $=C.el=A.el;C.children!==A.children&&c($,C.children)}},d=(A,C,G,re)=>{A==null?i(C.el=l(C.children||""),G,re):C.el=A.el},S=(A,C,G,re)=>{[A.el,A.anchor]=v(A.children,C,G,re,A.el,A.anchor)},T=({el:A,anchor:C},G,re)=>{let $;for(;A&&A!==C;)$=f(A),i(A,G,re),A=$;i(C,G,re)},b=({el:A,anchor:C})=>{let G;for(;A&&A!==C;)G=f(A),s(A),A=G;s(C)},D=(A,C,G,re,$,Q,ue,he,y)=>{if(C.type==="svg"?ue="svg":C.type==="math"&&(ue="mathml"),A==null)w(C,G,re,$,Q,ue,he,y);else{const oe=A.el&&A.el._isVueCE?A.el:null;try{oe&&oe._beginPatch(),R(A,C,$,Q,ue,he,y)}finally{oe&&oe._endPatch()}}},w=(A,C,G,re,$,Q,ue,he)=>{let y,oe;const{props:ve,shapeFlag:de,transition:V,dirs:H}=A;if(y=A.el=a(A.type,Q,ve&&ve.is,ve),de&8?u(y,A.children):de&16&&x(A.children,y,null,re,$,Oa(A,Q),ue,he),H&&Ci(A,null,re,"created"),I(y,A,A.scopeId,ue,re),ve){for(const m in ve)m!=="value"&&!ks(m)&&r(y,m,null,ve[m],Q,re);"value"in ve&&r(y,"value",null,ve.value,Q),(oe=ve.onVnodeBeforeMount)&&wn(oe,re,A)}H&&Ci(A,null,re,"beforeMount");const _=Pp($,V);_&&V.beforeEnter(y),i(y,C,G),((oe=ve&&ve.onVnodeMounted)||_||H)&&en(()=>{oe&&wn(oe,re,A),_&&V.enter(y),H&&Ci(A,null,re,"mounted")},$)},I=(A,C,G,re,$)=>{if(G&&p(A,G),re)for(let Q=0;Q<re.length;Q++)p(A,re[Q]);if($){let Q=$.subTree;if(C===Q||Zf(Q.type)&&(Q.ssContent===C||Q.ssFallback===C)){const ue=$.vnode;I(A,ue,ue.scopeId,ue.slotScopeIds,$.parent)}}},x=(A,C,G,re,$,Q,ue,he,y=0)=>{for(let oe=y;oe<A.length;oe++){const ve=A[oe]=he?xi(A[oe]):Dn(A[oe]);E(null,ve,C,G,re,$,Q,ue,he)}},R=(A,C,G,re,$,Q,ue)=>{const he=C.el=A.el;let{patchFlag:y,dynamicChildren:oe,dirs:ve}=C;y|=A.patchFlag&16;const de=A.props||_t,V=C.props||_t;let H;if(G&&Pi(G,!1),(H=V.onVnodeBeforeUpdate)&&wn(H,G,C,A),ve&&Ci(C,A,G,"beforeUpdate"),G&&Pi(G,!0),(de.innerHTML&&V.innerHTML==null||de.textContent&&V.textContent==null)&&u(he,""),oe?B(A.dynamicChildren,oe,he,G,re,Oa(C,$),Q):ue||J(A,C,he,null,G,re,Oa(C,$),Q,!1),y>0){if(y&16)P(he,de,V,G,$);else if(y&2&&de.class!==V.class&&r(he,"class",null,V.class,$),y&4&&r(he,"style",de.style,V.style,$),y&8){const _=C.dynamicProps;for(let m=0;m<_.length;m++){const L=_[m],j=de[L],ne=V[L];(ne!==j||L==="value")&&r(he,L,j,ne,$,G)}}y&1&&A.children!==C.children&&u(he,C.children)}else!ue&&oe==null&&P(he,de,V,G,$);((H=V.onVnodeUpdated)||ve)&&en(()=>{H&&wn(H,G,C,A),ve&&Ci(C,A,G,"updated")},re)},B=(A,C,G,re,$,Q,ue)=>{for(let he=0;he<C.length;he++){const y=A[he],oe=C[he],ve=y.el&&(y.type===wt||!Ps(y,oe)||y.shapeFlag&198)?h(y.el):G;E(y,oe,ve,null,re,$,Q,ue,!0)}},P=(A,C,G,re,$)=>{if(C!==G){if(C!==_t)for(const Q in C)!ks(Q)&&!(Q in G)&&r(A,Q,C[Q],null,$,re);for(const Q in G){if(ks(Q))continue;const ue=G[Q],he=C[Q];ue!==he&&Q!=="value"&&r(A,Q,he,ue,$,re)}"value"in G&&r(A,"value",C.value,G.value,$)}},k=(A,C,G,re,$,Q,ue,he,y)=>{const oe=C.el=A?A.el:o(""),ve=C.anchor=A?A.anchor:o("");let{patchFlag:de,dynamicChildren:V,slotScopeIds:H}=C;H&&(he=he?he.concat(H):H),A==null?(i(oe,G,re),i(ve,G,re),x(C.children||[],G,ve,$,Q,ue,he,y)):de>0&&de&64&&V&&A.dynamicChildren?(B(A.dynamicChildren,V,G,$,Q,ue,he),(C.key!=null||$&&C===$.subTree)&&Kf(A,C,!0)):J(A,C,G,ve,$,Q,ue,he,y)},ee=(A,C,G,re,$,Q,ue,he,y)=>{C.slotScopeIds=he,A==null?C.shapeFlag&512?$.ctx.activate(C,G,re,ue,y):ie(C,G,re,$,Q,ue,y):N(A,C,y)},ie=(A,C,G,re,$,Q,ue)=>{const he=A.component=Hp(A,re,$);if(Lf(A)&&(he.ctx.renderer=Be),kp(he,!1,ue),he.asyncDep){if($&&$.registerDep(he,W,ue),!A.el){const y=he.subTree=an(yi);d(null,y,C,G),A.placeholder=y.el}}else W(he,A,C,G,$,Q,ue)},N=(A,C,G)=>{const re=C.component=A.component;if(Mp(A,C,G))if(re.asyncDep&&!re.asyncResolved){O(re,C,G);return}else re.next=C,re.update();else C.el=A.el,re.vnode=C},W=(A,C,G,re,$,Q,ue)=>{const he=()=>{if(A.isMounted){let{next:de,bu:V,u:H,parent:_,vnode:m}=A;{const me=jf(A);if(me){de&&(de.el=m.el,O(A,de,ue)),me.asyncDep.then(()=>{A.isUnmounted||he()});return}}let L=de,j;Pi(A,!1),de?(de.el=m.el,O(A,de,ue)):de=m,V&&Gr(V),(j=de.props&&de.props.onVnodeBeforeUpdate)&&wn(j,_,de,m),Pi(A,!0);const ne=Pc(A),le=A.subTree;A.subTree=ne,E(le,ne,h(le.el),Ee(le),A,$,Q),de.el=ne.el,L===null&&Sp(A,ne.el),H&&en(H,$),(j=de.props&&de.props.onVnodeUpdated)&&en(()=>wn(j,_,de,m),$)}else{let de;const{el:V,props:H}=C,{bm:_,m,parent:L,root:j,type:ne}=A,le=Ys(C);Pi(A,!1),_&&Gr(_),!le&&(de=H&&H.onVnodeBeforeMount)&&wn(de,L,C),Pi(A,!0);{j.ce&&j.ce._def.shadowRoot!==!1&&j.ce._injectChildStyle(ne);const me=A.subTree=Pc(A);E(null,me,G,re,A,$,Q),C.el=me.el}if(m&&en(m,$),!le&&(de=H&&H.onVnodeMounted)){const me=C;en(()=>wn(de,L,me),$)}(C.shapeFlag&256||L&&Ys(L.vnode)&&L.vnode.shapeFlag&256)&&A.a&&en(A.a,$),A.isMounted=!0,C=G=re=null}};A.scope.on();const y=A.effect=new ff(he);A.scope.off();const oe=A.update=y.run.bind(y),ve=A.job=y.runIfDirty.bind(y);ve.i=A,ve.id=A.uid,y.scheduler=()=>Vl(ve),Pi(A,!0),oe()},O=(A,C,G)=>{C.component=A;const re=A.vnode.props;A.vnode=C,A.next=null,bp(A,C.props,re,G),wp(A,C.children,G),ti(),yc(A),ni()},J=(A,C,G,re,$,Q,ue,he,y=!1)=>{const oe=A&&A.children,ve=A?A.shapeFlag:0,de=C.children,{patchFlag:V,shapeFlag:H}=C;if(V>0){if(V&128){be(oe,de,G,re,$,Q,ue,he,y);return}else if(V&256){ce(oe,de,G,re,$,Q,ue,he,y);return}}H&8?(ve&16&&se(oe,$,Q),de!==oe&&u(G,de)):ve&16?H&16?be(oe,de,G,re,$,Q,ue,he,y):se(oe,$,Q,!0):(ve&8&&u(G,""),H&16&&x(de,G,re,$,Q,ue,he,y))},ce=(A,C,G,re,$,Q,ue,he,y)=>{A=A||ms,C=C||ms;const oe=A.length,ve=C.length,de=Math.min(oe,ve);let V;for(V=0;V<de;V++){const H=C[V]=y?xi(C[V]):Dn(C[V]);E(A[V],H,G,null,$,Q,ue,he,y)}oe>ve?se(A,$,Q,!0,!1,de):x(C,G,re,$,Q,ue,he,y,de)},be=(A,C,G,re,$,Q,ue,he,y)=>{let oe=0;const ve=C.length;let de=A.length-1,V=ve-1;for(;oe<=de&&oe<=V;){const H=A[oe],_=C[oe]=y?xi(C[oe]):Dn(C[oe]);if(Ps(H,_))E(H,_,G,null,$,Q,ue,he,y);else break;oe++}for(;oe<=de&&oe<=V;){const H=A[de],_=C[V]=y?xi(C[V]):Dn(C[V]);if(Ps(H,_))E(H,_,G,null,$,Q,ue,he,y);else break;de--,V--}if(oe>de){if(oe<=V){const H=V+1,_=H<ve?C[H].el:re;for(;oe<=V;)E(null,C[oe]=y?xi(C[oe]):Dn(C[oe]),G,_,$,Q,ue,he,y),oe++}}else if(oe>V)for(;oe<=de;)Pe(A[oe],$,Q,!0),oe++;else{const H=oe,_=oe,m=new Map;for(oe=_;oe<=V;oe++){const ge=C[oe]=y?xi(C[oe]):Dn(C[oe]);ge.key!=null&&m.set(ge.key,oe)}let L,j=0;const ne=V-_+1;let le=!1,me=0;const Z=new Array(ne);for(oe=0;oe<ne;oe++)Z[oe]=0;for(oe=H;oe<=de;oe++){const ge=A[oe];if(j>=ne){Pe(ge,$,Q,!0);continue}let ye;if(ge.key!=null)ye=m.get(ge.key);else for(L=_;L<=V;L++)if(Z[L-_]===0&&Ps(ge,C[L])){ye=L;break}ye===void 0?Pe(ge,$,Q,!0):(Z[ye-_]=oe+1,ye>=me?me=ye:le=!0,E(ge,C[ye],G,null,$,Q,ue,he,y),j++)}const ae=le?Dp(Z):ms;for(L=ae.length-1,oe=ne-1;oe>=0;oe--){const ge=_+oe,ye=C[ge],Me=C[ge+1],xe=ge+1<ve?Me.el||Me.placeholder:re;Z[oe]===0?E(null,ye,G,xe,$,Q,ue,he,y):le&&(L<0||oe!==ae[L]?Ce(ye,G,xe,2):L--)}}},Ce=(A,C,G,re,$=null)=>{const{el:Q,type:ue,transition:he,children:y,shapeFlag:oe}=A;if(oe&6){Ce(A.component.subTree,C,G,re);return}if(oe&128){A.suspense.move(C,G,re);return}if(oe&64){ue.move(A,C,G,Be);return}if(ue===wt){i(Q,C,G);for(let de=0;de<y.length;de++)Ce(y[de],C,G,re);i(A.anchor,C,G);return}if(ue===Wr){T(A,C,G);return}if(re!==2&&oe&1&&he)if(re===0)he.beforeEnter(Q),i(Q,C,G),en(()=>he.enter(Q),$);else{const{leave:de,delayLeave:V,afterLeave:H}=he,_=()=>{A.ctx.isUnmounted?s(Q):i(Q,C,G)},m=()=>{Q._isLeaving&&Q[Wd](!0),de(Q,()=>{_(),H&&H()})};V?V(Q,_,m):m()}else i(Q,C,G)},Pe=(A,C,G,re=!1,$=!1)=>{const{type:Q,props:ue,ref:he,children:y,dynamicChildren:oe,shapeFlag:ve,patchFlag:de,dirs:V,cacheIndex:H}=A;if(de===-2&&($=!1),he!=null&&(ti(),qs(he,null,G,A,!0),ni()),H!=null&&(C.renderCache[H]=void 0),ve&256){C.ctx.deactivate(A);return}const _=ve&1&&V,m=!Ys(A);let L;if(m&&(L=ue&&ue.onVnodeBeforeUnmount)&&wn(L,C,A),ve&6)Ge(A.component,G,re);else{if(ve&128){A.suspense.unmount(G,re);return}_&&Ci(A,null,C,"beforeUnmount"),ve&64?A.type.remove(A,C,G,Be,re):oe&&!oe.hasOnce&&(Q!==wt||de>0&&de&64)?se(oe,C,G,!1,!0):(Q===wt&&de&384||!$&&ve&16)&&se(y,C,G),re&&Ye(A)}(m&&(L=ue&&ue.onVnodeUnmounted)||_)&&en(()=>{L&&wn(L,C,A),_&&Ci(A,null,C,"unmounted")},G)},Ye=A=>{const{type:C,el:G,anchor:re,transition:$}=A;if(C===wt){st(G,re);return}if(C===Wr){b(A);return}const Q=()=>{s(G),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(A.shapeFlag&1&&$&&!$.persisted){const{leave:ue,delayLeave:he}=$,y=()=>ue(G,Q);he?he(A.el,Q,y):y()}else Q()},st=(A,C)=>{let G;for(;A!==C;)G=f(A),s(A),A=G;s(C)},Ge=(A,C,G)=>{const{bum:re,scope:$,job:Q,subTree:ue,um:he,m:y,a:oe}=A;Ic(y),Ic(oe),re&&Gr(re),$.stop(),Q&&(Q.flags|=8,Pe(ue,A,C,G)),he&&en(he,C),en(()=>{A.isUnmounted=!0},C)},se=(A,C,G,re=!1,$=!1,Q=0)=>{for(let ue=Q;ue<A.length;ue++)Pe(A[ue],C,G,re,$)},Ee=A=>{if(A.shapeFlag&6)return Ee(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const C=f(A.anchor||A.el),G=C&&C[Gd];return G?f(G):C};let _e=!1;const Oe=(A,C,G)=>{A==null?C._vnode&&Pe(C._vnode,null,null,!0):E(C._vnode||null,A,C,null,null,null,G),C._vnode=A,_e||(_e=!0,yc(),Rf(),_e=!1)},Be={p:E,um:Pe,m:Ce,r:Ye,mt:ie,mc:x,pc:J,pbc:B,n:Ee,o:n};return{render:Oe,hydrate:void 0,createApp:up(Oe)}}function Oa({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Pi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Pp(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Kf(n,e,t=!1){const i=n.children,s=e.children;if(qe(i)&&qe(s))for(let r=0;r<i.length;r++){const a=i[r];let o=s[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=s[r]=xi(s[r]),o.el=a.el),!t&&o.patchFlag!==-2&&Kf(a,o)),o.type===Sa&&o.patchFlag!==-1&&(o.el=a.el),o.type===yi&&!o.el&&(o.el=a.el)}}function Dp(n){const e=n.slice(),t=[0];let i,s,r,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,a=t.length-1;r<a;)o=r+a>>1,n[t[o]]<c?r=o+1:a=o;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,a=t[r-1];r-- >0;)t[r]=a,a=e[a];return t}function jf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:jf(e)}function Ic(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const Zf=n=>n.__isSuspense;function Lp(n,e){e&&e.pendingBranch?qe(n)?e.effects.push(...n):e.effects.push(n):Vd(n)}const wt=Symbol.for("v-fgt"),Sa=Symbol.for("v-txt"),yi=Symbol.for("v-cmt"),Wr=Symbol.for("v-stc"),Ks=[];let rn=null;function et(n=!1){Ks.push(rn=n?null:[])}function Ip(){Ks.pop(),rn=Ks[Ks.length-1]||null}let tr=1;function Uc(n,e=!1){tr+=n,n<0&&rn&&e&&(rn.hasOnce=!0)}function Jf(n){return n.dynamicChildren=tr>0?rn||ms:null,Ip(),tr>0&&rn&&rn.push(n),n}function it(n,e,t,i,s,r){return Jf(z(n,e,t,i,s,r,!0))}function Up(n,e,t,i,s){return Jf(an(n,e,t,i,s,!0))}function Qf(n){return n?n.__v_isVNode===!0:!1}function Ps(n,e){return n.type===e.type&&n.key===e.key}const eh=({key:n})=>n??null,Xr=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Ct(n)||Vt(n)||Ke(n)?{i:hn,r:n,k:e,f:!!t}:n:null);function z(n,e=null,t=null,i=0,s=null,r=n===wt?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&eh(e),ref:e&&Xr(e),scopeId:Pf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:hn};return o?(Xl(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Ct(t)?8:16),tr>0&&!a&&rn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&rn.push(l),l}const an=Np;function Np(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===np)&&(n=yi),Qf(n)){const o=Es(n,e,!0);return t&&Xl(o,t),tr>0&&!r&&rn&&(o.shapeFlag&6?rn[rn.indexOf(n)]=o:rn.push(o)),o.patchFlag=-2,o}if(Yp(n)&&(n=n.__vccOpts),e){e=Fp(e);let{class:o,style:l}=e;o&&!Ct(o)&&(e.class=nn(o)),Mt(l)&&(zl(l)&&!qe(l)&&(l=Yt({},l)),e.style=Zs(l))}const a=Ct(n)?1:Zf(n)?128:kd(n)?64:Mt(n)?4:Ke(n)?2:0;return z(n,e,t,i,s,a,r,!0)}function Fp(n){return n?zl(n)||kf(n)?Yt({},n):n:null}function Es(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:a,children:o,transition:l}=n,c=e?Bp(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&eh(c),ref:e&&e.ref?t&&r?qe(r)?r.concat(Xr(e)):[r,Xr(e)]:Xr(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==wt?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Es(n.ssContent),ssFallback:n.ssFallback&&Es(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Hl(u,l.clone(u)),u}function un(n=" ",e=0){return an(Sa,null,n,e)}function Op(n,e){const t=an(Wr,null,n);return t.staticCount=e,t}function Zi(n="",e=!1){return e?(et(),Up(yi,null,n)):an(yi,null,n)}function Dn(n){return n==null||typeof n=="boolean"?an(yi):qe(n)?an(wt,null,n.slice()):Qf(n)?xi(n):an(Sa,null,String(n))}function xi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Es(n)}function Xl(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(qe(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Xl(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!kf(e)?e._ctx=hn:s===3&&hn&&(hn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ke(e)?(e={default:e,_ctx:hn},t=32):(e=String(e),i&64?(t=16,e=[un(e)]):t=8);n.children=e,n.shapeFlag|=t}function Bp(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=nn([e.class,i.class]));else if(s==="style")e.style=Zs([e.style,i.style]);else if(da(s)){const r=e[s],a=i[s];a&&r!==a&&!(qe(r)&&r.includes(a))&&(e[s]=r?[].concat(r,a):a)}else s!==""&&(e[s]=i[s])}return e}function wn(n,e,t,i=null){Bn(n,e,7,[t,i])}const zp=Of();let Vp=0;function Hp(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||zp,r={uid:Vp++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new od(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Xf(i,s),emitsOptions:Vf(i,s),emit:null,emitted:null,propsDefaults:_t,inheritAttrs:i.inheritAttrs,ctx:_t,data:_t,props:_t,attrs:_t,slots:_t,refs:_t,setupState:_t,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=gp.bind(null,r),n.ce&&n.ce(r),r}let qt=null;const Gp=()=>qt||hn;let ra,Io;{const n=ga(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(a=>a(r)):s[0](r)}};ra=e("__VUE_INSTANCE_SETTERS__",t=>qt=t),Io=e("__VUE_SSR_SETTERS__",t=>nr=t)}const lr=n=>{const e=qt;return ra(n),n.scope.on(),()=>{n.scope.off(),ra(e)}},Nc=()=>{qt&&qt.scope.off(),ra(null)};function th(n){return n.vnode.shapeFlag&4}let nr=!1;function kp(n,e=!1,t=!1){e&&Io(e);const{props:i,children:s}=n.vnode,r=th(n);Ep(n,i,r,e),Ap(n,s,t||e);const a=r?Wp(n,e):void 0;return e&&Io(!1),a}function Wp(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,ip);const{setup:i}=t;if(i){ti();const s=n.setupContext=i.length>1?qp(n):null,r=lr(n),a=or(i,n,0,[n.props,s]),o=nf(a);if(ni(),r(),(o||n.sp)&&!Ys(n)&&Df(n),o){if(a.then(Nc,Nc),e)return a.then(l=>{Fc(n,l)}).catch(l=>{va(l,n,0)});n.asyncDep=a}else Fc(n,a)}else nh(n)}function Fc(n,e,t){Ke(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Mt(e)&&(n.setupState=Tf(e)),nh(n)}function nh(n,e,t){const i=n.type;n.render||(n.render=i.render||Nn);{const s=lr(n);ti();try{sp(n)}finally{ni(),s()}}}const Xp={get(n,e){return Bt(n,"get",""),n[e]}};function qp(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Xp),slots:n.slots,emit:n.emit,expose:e}}function Ea(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Tf(Rd(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in $s)return $s[t](n)},has(e,t){return t in e||t in $s}})):n.proxy}function Yp(n){return Ke(n)&&"__vccOpts"in n}const qr=(n,e)=>Ud(n,e,nr),$p="3.5.25";let Uo;const Oc=typeof window<"u"&&window.trustedTypes;if(Oc)try{Uo=Oc.createPolicy("vue",{createHTML:n=>n})}catch{}const ih=Uo?n=>Uo.createHTML(n):n=>n,Kp="http://www.w3.org/2000/svg",jp="http://www.w3.org/1998/Math/MathML",$n=typeof document<"u"?document:null,Bc=$n&&$n.createElement("template"),Zp={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?$n.createElementNS(Kp,n):e==="mathml"?$n.createElementNS(jp,n):t?$n.createElement(n,{is:t}):$n.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>$n.createTextNode(n),createComment:n=>$n.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>$n.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const a=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Bc.innerHTML=ih(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=Bc.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Jp=Symbol("_vtc");function Qp(n,e,t){const i=n[Jp];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const aa=Symbol("_vod"),sh=Symbol("_vsh"),em={name:"show",beforeMount(n,{value:e},{transition:t}){n[aa]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):Ds(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),Ds(n,!0),i.enter(n)):i.leave(n,()=>{Ds(n,!1)}):Ds(n,e))},beforeUnmount(n,{value:e}){Ds(n,e)}};function Ds(n,e){n.style.display=e?n[aa]:"none",n[sh]=!e}const tm=Symbol(""),nm=/(?:^|;)\s*display\s*:/;function im(n,e,t){const i=n.style,s=Ct(t);let r=!1;if(t&&!s){if(e)if(Ct(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&Yr(i,o,"")}else for(const a in e)t[a]==null&&Yr(i,a,"");for(const a in t)a==="display"&&(r=!0),Yr(i,a,t[a])}else if(s){if(e!==t){const a=i[tm];a&&(t+=";"+a),i.cssText=t,r=nm.test(t)}}else e&&n.removeAttribute("style");aa in n&&(n[aa]=r?i.display:"",n[sh]&&(i.display="none"))}const zc=/\s*!important$/;function Yr(n,e,t){if(qe(t))t.forEach(i=>Yr(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=sm(n,e);zc.test(t)?n.setProperty(wi(i),t.replace(zc,""),"important"):n[i]=t}}const Vc=["Webkit","Moz","ms"],Ba={};function sm(n,e){const t=Ba[e];if(t)return t;let i=bi(e);if(i!=="filter"&&i in n)return Ba[e]=i;i=af(i);for(let s=0;s<Vc.length;s++){const r=Vc[s]+i;if(r in n)return Ba[e]=r}return e}const Hc="http://www.w3.org/1999/xlink";function Gc(n,e,t,i,s,r=ad(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Hc,e.slice(6,e.length)):n.setAttributeNS(Hc,e,t):t==null||r&&!lf(t)?n.removeAttribute(e):n.setAttribute(e,r?"":Ai(t)?String(t):t)}function kc(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?ih(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const o=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=lf(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(s||e)}function ps(n,e,t,i){n.addEventListener(e,t,i)}function rm(n,e,t,i){n.removeEventListener(e,t,i)}const Wc=Symbol("_vei");function am(n,e,t,i,s=null){const r=n[Wc]||(n[Wc]={}),a=r[e];if(i&&a)a.value=i;else{const[o,l]=om(e);if(i){const c=r[e]=um(i,s);ps(n,o,c,l)}else a&&(rm(n,o,a,l),r[e]=void 0)}}const Xc=/(?:Once|Passive|Capture)$/;function om(n){let e;if(Xc.test(n)){e={};let i;for(;i=n.match(Xc);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):wi(n.slice(2)),e]}let za=0;const lm=Promise.resolve(),cm=()=>za||(lm.then(()=>za=0),za=Date.now());function um(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Bn(fm(i,t.value),e,5,[i])};return t.value=n,t.attached=cm(),t}function fm(n,e){if(qe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const qc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,hm=(n,e,t,i,s,r)=>{const a=s==="svg";e==="class"?Qp(n,i,a):e==="style"?im(n,t,i):da(e)?Rl(e)||am(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):dm(n,e,i,a))?(kc(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Gc(n,e,i,a,r,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Ct(i))?kc(n,bi(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Gc(n,e,i,a))};function dm(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&qc(e)&&Ke(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return qc(e)&&Ct(t)?!1:e in n}const Yc=n=>{const e=n.props["onUpdate:modelValue"]||!1;return qe(e)?t=>Gr(e,t):e};function pm(n){n.target.composing=!0}function $c(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Va=Symbol("_assign");function Kc(n,e,t){return e&&(n=n.trim()),t&&(n=Dl(n)),n}const Ls={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n[Va]=Yc(s);const r=i||s.props&&s.props.type==="number";ps(n,e?"change":"input",a=>{a.target.composing||n[Va](Kc(n.value,t,r))}),(t||r)&&ps(n,"change",()=>{n.value=Kc(n.value,t,r)}),e||(ps(n,"compositionstart",pm),ps(n,"compositionend",$c),ps(n,"change",$c))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:s,number:r}},a){if(n[Va]=Yc(a),n.composing)return;const o=(r||n.type==="number")&&!/^0\d/.test(n.value)?Dl(n.value):n.value,l=e??"";o!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||s&&n.value.trim()===l)||(n.value=l))}},mm=["ctrl","shift","alt","meta"],gm={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>mm.some(t=>n[`${t}Key`]&&!e.includes(t))},Wt=(n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=((s,...r)=>{for(let a=0;a<e.length;a++){const o=gm[e[a]];if(o&&o(s,e))return}return n(s,...r)}))},_m={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},vm=(n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=(s=>{if(!("key"in s))return;const r=wi(s.key);if(e.some(a=>a===r||_m[a]===r))return n(s)}))},xm=Yt({patchProp:hm},Zp);let jc;function Mm(){return jc||(jc=Rp(xm))}const Sm=((...n)=>{const e=Mm().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=bm(i);if(!s)return;const r=e._component;!Ke(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,Em(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e});function Em(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function bm(n){return Ct(n)?document.querySelector(n):n}const rh="/images/logo.png",ql=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},ym={class:"site-header"},Tm={class:"site-header__container"},Am={class:"site-header__item"},wm={class:"site-header__row"},Rm={class:"site-header__item"},Cm={class:"site-header__row"},Pm={class:"site-header__item"},Dm={class:"site-header__row"},Lm={class:"site-header__item"},Im={class:"site-header__row"},Um={__name:"SiteHeader",setup(n){const e=pt(!1),t=pt(null),i=()=>{e.value=!e.value,t.value=null},s=a=>{t.value=t.value===a?null:a},r=()=>{e.value=!1,t.value=null};return(a,o)=>(et(),it("header",ym,[z("div",Tm,[z("a",{href:"#top",class:"site-header__logo",onClick:r},[...o[4]||(o[4]=[z("img",{class:"site-header__logo-image",src:rh,alt:"Oblivione Space"},null,-1),z("span",{class:"site-header__logo-text"}," Oblivione Space ",-1)])]),z("button",{class:"site-header__burger",type:"button","aria-label":"Открыть меню",onClick:i},[...o[5]||(o[5]=[z("span",null,null,-1),z("span",null,null,-1),z("span",null,null,-1)])]),z("nav",{class:nn(["site-header__nav",{"site-header__nav--open":e.value}])},[z("div",Am,[z("div",wm,[z("a",{href:"#top",class:"site-header__link",onClick:r}," Главная "),z("button",{class:"site-header__submenu-button",type:"button","aria-label":"Открыть разделы главной",onClick:o[0]||(o[0]=l=>s("home"))},[...o[6]||(o[6]=[z("span",null,null,-1),z("span",null,null,-1),z("span",null,null,-1)])])]),z("div",{class:nn(["site-header__dropdown",{"site-header__dropdown--open":t.value==="home"}])},[z("a",{href:"#mission",onClick:r},"Миссия"),z("a",{href:"#stats",onClick:r},"Показатели"),z("a",{href:"#directions",onClick:r},"Направления"),z("a",{href:"#partners",onClick:r},"Партнёры")],2)]),z("div",Rm,[z("div",Cm,[z("a",{href:"#",class:"site-header__link",onClick:Wt(r,["prevent"])}," О компании "),z("button",{class:"site-header__submenu-button",type:"button","aria-label":"Открыть подразделы о компании",onClick:o[1]||(o[1]=l=>s("about"))},[...o[7]||(o[7]=[z("span",null,null,-1),z("span",null,null,-1),z("span",null,null,-1)])])]),z("div",{class:nn(["site-header__dropdown",{"site-header__dropdown--open":t.value==="about"}])},[z("a",{href:"#",onClick:Wt(r,["prevent"])},"История"),z("a",{href:"#",onClick:Wt(r,["prevent"])},"Команда"),z("a",{href:"#",onClick:Wt(r,["prevent"])},"Сертификаты")],2)]),z("div",Pm,[z("div",Dm,[z("a",{href:"#",class:"site-header__link",onClick:Wt(r,["prevent"])}," Продукты "),z("button",{class:"site-header__submenu-button",type:"button","aria-label":"Открыть подразделы продуктов",onClick:o[2]||(o[2]=l=>s("products"))},[...o[8]||(o[8]=[z("span",null,null,-1),z("span",null,null,-1),z("span",null,null,-1)])])]),z("div",{class:nn(["site-header__dropdown",{"site-header__dropdown--open":t.value==="products"}])},[z("a",{href:"#",onClick:Wt(r,["prevent"])},"Ракетные носители"),z("a",{href:"#",onClick:Wt(r,["prevent"])},"Компоненты"),z("a",{href:"#",onClick:Wt(r,["prevent"])},"Запуски")],2)]),z("div",Lm,[z("div",Im,[z("a",{href:"#",class:"site-header__link",onClick:Wt(r,["prevent"])}," Проекты "),z("button",{class:"site-header__submenu-button",type:"button","aria-label":"Открыть подразделы проектов",onClick:o[3]||(o[3]=l=>s("projects"))},[...o[9]||(o[9]=[z("span",null,null,-1),z("span",null,null,-1),z("span",null,null,-1)])])]),z("div",{class:nn(["site-header__dropdown",{"site-header__dropdown--open":t.value==="projects"}])},[z("a",{href:"#",onClick:Wt(r,["prevent"])},"Реализованные"),z("a",{href:"#",onClick:Wt(r,["prevent"])},"Текущие"),z("a",{href:"#",onClick:Wt(r,["prevent"])},"Будущие")],2)])],2)])]))}},Nm=ql(Um,[["__scopeId","data-v-fa6bcc4a"]]);const Yl="184",Fm=0,Zc=1,Om=2,$r=1,Bm=2,Hs=3,Ti=0,jt=1,Zn=2,Qn=0,xs=1,Jc=2,Qc=3,eu=4,zm=5,Oi=100,Vm=101,Hm=102,Gm=103,km=104,Wm=200,Xm=201,qm=202,Ym=203,No=204,Fo=205,$m=206,Km=207,jm=208,Zm=209,Jm=210,Qm=211,eg=212,tg=213,ng=214,Oo=0,Bo=1,zo=2,bs=3,Vo=4,Ho=5,Go=6,ko=7,$l=0,ig=1,sg=2,Fn=0,ah=1,oh=2,lh=3,ch=4,uh=5,fh=6,hh=7,dh=300,ki=301,ys=302,Ha=303,Ga=304,ba=306,Wo=1e3,Jn=1001,Xo=1002,It=1003,rg=1004,_r=1005,zt=1006,ka=1007,zi=1008,sn=1009,ph=1010,mh=1011,ir=1012,Kl=1013,zn=1014,In=1015,si=1016,jl=1017,Zl=1018,sr=1020,gh=35902,_h=35899,vh=1021,xh=1022,Sn=1023,ri=1026,Vi=1027,Mh=1028,Jl=1029,Wi=1030,Ql=1031,ec=1033,Kr=33776,jr=33777,Zr=33778,Jr=33779,qo=35840,Yo=35841,$o=35842,Ko=35843,jo=36196,Zo=37492,Jo=37496,Qo=37488,el=37489,oa=37490,tl=37491,nl=37808,il=37809,sl=37810,rl=37811,al=37812,ol=37813,ll=37814,cl=37815,ul=37816,fl=37817,hl=37818,dl=37819,pl=37820,ml=37821,gl=36492,_l=36494,vl=36495,xl=36283,Ml=36284,la=36285,Sl=36286,ag=3200,ca=0,og=1,Mi="",fn="srgb",ua="srgb-linear",fa="linear",ft="srgb",Ji=7680,tu=519,lg=512,cg=513,ug=514,tc=515,fg=516,hg=517,nc=518,dg=519,nu=35044,iu="300 es",Un=2e3,rr=2001;function pg(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ar(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function mg(){const n=ar("canvas");return n.style.display="block",n}const su={};function ru(...n){const e="THREE."+n.shift();console.log(e,...n)}function Sh(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ve(...n){n=Sh(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function at(...n){n=Sh(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function El(...n){const e=n.join(" ");e in su||(su[e]=!0,Ve(...n))}function gg(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const _g={[Oo]:Bo,[zo]:Go,[Vo]:ko,[bs]:Ho,[Bo]:Oo,[Go]:zo,[ko]:Vo,[Ho]:bs};class Xi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wa=Math.PI/180,bl=180/Math.PI;function cr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]).toLowerCase()}function nt(n,e,t){return Math.max(e,Math.min(t,n))}function vg(n,e){return(n%e+e)%e}function Xa(n,e,t){return(1-t)*n+t*e}function Is(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function $t(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const lc=class lc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};lc.prototype.isVector2=!0;let lt=lc;class ws{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],f=r[a+0],p=r[a+1],v=r[a+2],E=r[a+3];if(h!==E||l!==f||c!==p||u!==v){let g=l*f+c*p+u*v+h*E;g<0&&(f=-f,p=-p,v=-v,E=-E,g=-g);let d=1-o;if(g<.9995){const S=Math.acos(g),T=Math.sin(S);d=Math.sin(d*S)/T,o=Math.sin(o*S)/T,l=l*d+f*o,c=c*d+p*o,u=u*d+v*o,h=h*d+E*o}else{l=l*d+f*o,c=c*d+p*o,u=u*d+v*o,h=h*d+E*o;const S=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=S,c*=S,u*=S,h*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[a],f=r[a+1],p=r[a+2],v=r[a+3];return e[t]=o*v+u*h+l*p-c*f,e[t+1]=l*v+u*f+c*h-o*p,e[t+2]=c*v+u*p+o*f-l*h,e[t+3]=u*v-o*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),h=o(r/2),f=l(i/2),p=l(s/2),v=l(r/2);switch(a){case"XYZ":this._x=f*u*h+c*p*v,this._y=c*p*h-f*u*v,this._z=c*u*v+f*p*h,this._w=c*u*h-f*p*v;break;case"YXZ":this._x=f*u*h+c*p*v,this._y=c*p*h-f*u*v,this._z=c*u*v-f*p*h,this._w=c*u*h+f*p*v;break;case"ZXY":this._x=f*u*h-c*p*v,this._y=c*p*h+f*u*v,this._z=c*u*v+f*p*h,this._w=c*u*h-f*p*v;break;case"ZYX":this._x=f*u*h-c*p*v,this._y=c*p*h+f*u*v,this._z=c*u*v-f*p*h,this._w=c*u*h+f*p*v;break;case"YZX":this._x=f*u*h+c*p*v,this._y=c*p*h+f*u*v,this._z=c*u*v-f*p*h,this._w=c*u*h-f*p*v;break;case"XZY":this._x=f*u*h-c*p*v,this._y=c*p*h-f*u*v,this._z=c*u*v+f*p*h,this._w=c*u*h+f*p*v;break;default:Ve("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const cc=class cc{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(au.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(au.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),u=2*(o*t-r*s),h=2*(r*i-a*t);return this.x=t+l*c+a*h-o*u,this.y=i+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return qa.copy(this).projectOnVector(e),this.sub(qa)}reflect(e){return this.sub(qa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};cc.prototype.isVector3=!0;let q=cc;const qa=new q,au=new ws,uc=class uc{constructor(e,t,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],p=i[5],v=i[8],E=s[0],g=s[3],d=s[6],S=s[1],T=s[4],b=s[7],D=s[2],w=s[5],I=s[8];return r[0]=a*E+o*S+l*D,r[3]=a*g+o*T+l*w,r[6]=a*d+o*b+l*I,r[1]=c*E+u*S+h*D,r[4]=c*g+u*T+h*w,r[7]=c*d+u*b+h*I,r[2]=f*E+p*S+v*D,r[5]=f*g+p*T+v*w,r[8]=f*d+p*b+v*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*r,p=c*r-a*l,v=t*h+i*f+s*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/v;return e[0]=h*E,e[1]=(s*c-u*i)*E,e[2]=(o*i-s*a)*E,e[3]=f*E,e[4]=(u*t-s*l)*E,e[5]=(s*r-o*t)*E,e[6]=p*E,e[7]=(i*l-c*t)*E,e[8]=(a*t-i*r)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ya.makeScale(e,t)),this}rotate(e){return this.premultiply(Ya.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ya.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};uc.prototype.isMatrix3=!0;let Xe=uc;const Ya=new Xe,ou=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lu=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xg(){const n={enabled:!0,workingColorSpace:ua,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ft&&(s.r=ei(s.r),s.g=ei(s.g),s.b=ei(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ft&&(s.r=Ms(s.r),s.g=Ms(s.g),s.b=Ms(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Mi?fa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return El("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return El("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ua]:{primaries:e,whitePoint:i,transfer:fa,toXYZ:ou,fromXYZ:lu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:fn},outputColorSpaceConfig:{drawingBufferColorSpace:fn}},[fn]:{primaries:e,whitePoint:i,transfer:ft,toXYZ:ou,fromXYZ:lu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:fn}}}),n}const tt=xg();function ei(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ms(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Qi;class Mg{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Qi===void 0&&(Qi=ar("canvas")),Qi.width=e.width,Qi.height=e.height;const s=Qi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Qi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ar("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ei(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ei(t[i]/255)*255):t[i]=ei(t[i]);return{data:t,width:e.width,height:e.height}}else return Ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Sg=0;class ic{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sg++}),this.uuid=cr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push($a(s[a].image)):r.push($a(s[a]))}else r=$a(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function $a(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Mg.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ve("Texture: Unable to serialize Texture."),{})}let Eg=0;const Ka=new q;class Ht extends Xi{constructor(e=Ht.DEFAULT_IMAGE,t=Ht.DEFAULT_MAPPING,i=Jn,s=Jn,r=zt,a=zi,o=Sn,l=sn,c=Ht.DEFAULT_ANISOTROPY,u=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Eg++}),this.uuid=cr(),this.name="",this.source=new ic(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ka).x}get height(){return this.source.getSize(Ka).y}get depth(){return this.source.getSize(Ka).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ve(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ve(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wo:e.x=e.x-Math.floor(e.x);break;case Jn:e.x=e.x<0?0:1;break;case Xo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wo:e.y=e.y-Math.floor(e.y);break;case Jn:e.y=e.y<0?0:1;break;case Xo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=dh;Ht.DEFAULT_ANISOTROPY=1;const fc=class fc{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],v=l[9],E=l[2],g=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-E)<.01&&Math.abs(v-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+E)<.1&&Math.abs(v+g)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,b=(p+1)/2,D=(d+1)/2,w=(u+f)/4,I=(h+E)/4,x=(v+g)/4;return T>b&&T>D?T<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(T),s=w/i,r=I/i):b>D?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=w/s,r=x/s):D<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),i=I/r,s=x/r),this.set(i,s,r,t),this}let S=Math.sqrt((g-v)*(g-v)+(h-E)*(h-E)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(g-v)/S,this.y=(h-E)/S,this.z=(f-u)/S,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this.w=nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this.w=nt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};fc.prototype.isVector4=!0;let Et=fc;class bg extends Xi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},r=new Ht(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new ic(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class On extends bg{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Eh extends Ht{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=It,this.minFilter=It,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class yg extends Ht{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=It,this.minFilter=It,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ha=class ha{constructor(e,t,i,s,r,a,o,l,c,u,h,f,p,v,E,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,u,h,f,p,v,E,g)}set(e,t,i,s,r,a,o,l,c,u,h,f,p,v,E,g){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=v,d[11]=E,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ha().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,s=1/es.setFromMatrixColumn(e,0).length(),r=1/es.setFromMatrixColumn(e,1).length(),a=1/es.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=a*u,p=a*h,v=o*u,E=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+v*c,t[5]=f-E*c,t[9]=-o*l,t[2]=E-f*c,t[6]=v+p*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,v=c*u,E=c*h;t[0]=f+E*o,t[4]=v*o-p,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-v,t[6]=E+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,v=c*u,E=c*h;t[0]=f-E*o,t[4]=-a*h,t[8]=v+p*o,t[1]=p+v*o,t[5]=a*u,t[9]=E-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,p=a*h,v=o*u,E=o*h;t[0]=l*u,t[4]=v*c-p,t[8]=f*c+E,t[1]=l*h,t[5]=E*c+f,t[9]=p*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*c,v=o*l,E=o*c;t[0]=l*u,t[4]=E-f*h,t[8]=v*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*h+v,t[10]=f-E*h}else if(e.order==="XZY"){const f=a*l,p=a*c,v=o*l,E=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+E,t[5]=a*u,t[9]=p*h-v,t[2]=v*h-p,t[6]=o*u,t[10]=E*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Tg,e,Ag)}lookAt(e,t,i){const s=this.elements;return Jt.subVectors(e,t),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),fi.crossVectors(i,Jt),fi.lengthSq()===0&&(Math.abs(i.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),fi.crossVectors(i,Jt)),fi.normalize(),vr.crossVectors(Jt,fi),s[0]=fi.x,s[4]=vr.x,s[8]=Jt.x,s[1]=fi.y,s[5]=vr.y,s[9]=Jt.y,s[2]=fi.z,s[6]=vr.z,s[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],p=i[13],v=i[2],E=i[6],g=i[10],d=i[14],S=i[3],T=i[7],b=i[11],D=i[15],w=s[0],I=s[4],x=s[8],R=s[12],B=s[1],P=s[5],k=s[9],ee=s[13],ie=s[2],N=s[6],W=s[10],O=s[14],J=s[3],ce=s[7],be=s[11],Ce=s[15];return r[0]=a*w+o*B+l*ie+c*J,r[4]=a*I+o*P+l*N+c*ce,r[8]=a*x+o*k+l*W+c*be,r[12]=a*R+o*ee+l*O+c*Ce,r[1]=u*w+h*B+f*ie+p*J,r[5]=u*I+h*P+f*N+p*ce,r[9]=u*x+h*k+f*W+p*be,r[13]=u*R+h*ee+f*O+p*Ce,r[2]=v*w+E*B+g*ie+d*J,r[6]=v*I+E*P+g*N+d*ce,r[10]=v*x+E*k+g*W+d*be,r[14]=v*R+E*ee+g*O+d*Ce,r[3]=S*w+T*B+b*ie+D*J,r[7]=S*I+T*P+b*N+D*ce,r[11]=S*x+T*k+b*W+D*be,r[15]=S*R+T*ee+b*O+D*Ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],v=e[3],E=e[7],g=e[11],d=e[15],S=l*p-c*f,T=o*p-c*h,b=o*f-l*h,D=a*p-c*u,w=a*f-l*u,I=a*h-o*u;return t*(E*S-g*T+d*b)-i*(v*S-g*D+d*w)+s*(v*T-E*D+d*I)-r*(v*b-E*w+g*I)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],v=e[12],E=e[13],g=e[14],d=e[15],S=t*o-i*a,T=t*l-s*a,b=t*c-r*a,D=i*l-s*o,w=i*c-r*o,I=s*c-r*l,x=u*E-h*v,R=u*g-f*v,B=u*d-p*v,P=h*g-f*E,k=h*d-p*E,ee=f*d-p*g,ie=S*ee-T*k+b*P+D*B-w*R+I*x;if(ie===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/ie;return e[0]=(o*ee-l*k+c*P)*N,e[1]=(s*k-i*ee-r*P)*N,e[2]=(E*I-g*w+d*D)*N,e[3]=(f*w-h*I-p*D)*N,e[4]=(l*B-a*ee-c*R)*N,e[5]=(t*ee-s*B+r*R)*N,e[6]=(g*b-v*I-d*T)*N,e[7]=(u*I-f*b+p*T)*N,e[8]=(a*k-o*B+c*x)*N,e[9]=(i*B-t*k-r*x)*N,e[10]=(v*w-E*b+d*S)*N,e[11]=(h*b-u*w-p*S)*N,e[12]=(o*R-a*P-l*x)*N,e[13]=(t*P-i*R+s*x)*N,e[14]=(E*T-v*D-g*S)*N,e[15]=(u*D-h*T+f*S)*N,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,f=r*c,p=r*u,v=r*h,E=a*u,g=a*h,d=o*h,S=l*c,T=l*u,b=l*h,D=i.x,w=i.y,I=i.z;return s[0]=(1-(E+d))*D,s[1]=(p+b)*D,s[2]=(v-T)*D,s[3]=0,s[4]=(p-b)*w,s[5]=(1-(f+d))*w,s[6]=(g+S)*w,s[7]=0,s[8]=(v+T)*I,s[9]=(g-S)*I,s[10]=(1-(f+E))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinant();if(r===0)return i.set(1,1,1),t.identity(),this;let a=es.set(s[0],s[1],s[2]).length();const o=es.set(s[4],s[5],s[6]).length(),l=es.set(s[8],s[9],s[10]).length();r<0&&(a=-a),_n.copy(this);const c=1/a,u=1/o,h=1/l;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=u,_n.elements[5]*=u,_n.elements[6]*=u,_n.elements[8]*=h,_n.elements[9]*=h,_n.elements[10]*=h,t.setFromRotationMatrix(_n),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=Un,l=!1){const c=this.elements,u=2*r/(t-e),h=2*r/(i-s),f=(t+e)/(t-e),p=(i+s)/(i-s);let v,E;if(l)v=r/(a-r),E=a*r/(a-r);else if(o===Un)v=-(a+r)/(a-r),E=-2*a*r/(a-r);else if(o===rr)v=-a/(a-r),E=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Un,l=!1){const c=this.elements,u=2/(t-e),h=2/(i-s),f=-(t+e)/(t-e),p=-(i+s)/(i-s);let v,E;if(l)v=1/(a-r),E=a/(a-r);else if(o===Un)v=-2/(a-r),E=-(a+r)/(a-r);else if(o===rr)v=-1/(a-r),E=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};ha.prototype.isMatrix4=!0;let bt=ha;const es=new q,_n=new bt,Tg=new q(0,0,0),Ag=new q(1,1,1),fi=new q,vr=new q,Jt=new q,cu=new bt,uu=new ws;class ai{constructor(e=0,t=0,i=0,s=ai.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(nt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-nt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return cu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return uu.setFromEuler(this),this.setFromQuaternion(uu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ai.DEFAULT_ORDER="XYZ";class bh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wg=0;const fu=new q,ts=new ws,kn=new bt,xr=new q,Us=new q,Rg=new q,Cg=new ws,hu=new q(1,0,0),du=new q(0,1,0),pu=new q(0,0,1),mu={type:"added"},Pg={type:"removed"},ns={type:"childadded",child:null},ja={type:"childremoved",child:null};class Ut extends Xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wg++}),this.uuid=cr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ut.DEFAULT_UP.clone();const e=new q,t=new ai,i=new ws,s=new q(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new bt},normalMatrix:{value:new Xe}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=Ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ts.setFromAxisAngle(e,t),this.quaternion.multiply(ts),this}rotateOnWorldAxis(e,t){return ts.setFromAxisAngle(e,t),this.quaternion.premultiply(ts),this}rotateX(e){return this.rotateOnAxis(hu,e)}rotateY(e){return this.rotateOnAxis(du,e)}rotateZ(e){return this.rotateOnAxis(pu,e)}translateOnAxis(e,t){return fu.copy(e).applyQuaternion(this.quaternion),this.position.add(fu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hu,e)}translateY(e){return this.translateOnAxis(du,e)}translateZ(e){return this.translateOnAxis(pu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?xr.copy(e):xr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(Us,xr,this.up):kn.lookAt(xr,Us,this.up),this.quaternion.setFromRotationMatrix(kn),s&&(kn.extractRotation(s.matrixWorld),ts.setFromRotationMatrix(kn),this.quaternion.premultiply(ts.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(at("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(mu),ns.child=e,this.dispatchEvent(ns),ns.child=null):at("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pg),ja.child=e,this.dispatchEvent(ja),ja.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(mu),ns.child=e,this.dispatchEvent(ns),ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,e,Rg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,Cg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=s,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Ut.DEFAULT_UP=new q(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Mr extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Dg={type:"move"};class Za{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const E of e.hand.values()){const g=t.getJointPose(E,i),d=this._getHandJoint(c,E);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,v=.005;c.inputState.pinching&&f>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Dg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Mr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const yh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},Sr={h:0,s:0,l:0};function Ja(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,tt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=tt.workingColorSpace){if(e=vg(e,1),t=nt(t,0,1),i=nt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Ja(a,r,e+1/3),this.g=Ja(a,r,e),this.b=Ja(a,r,e-1/3)}return tt.colorSpaceToWorking(this,s),this}setStyle(e,t=fn){function i(r){r!==void 0&&parseFloat(r)<1&&Ve("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ve("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fn){const i=yh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ei(e.r),this.g=ei(e.g),this.b=ei(e.b),this}copyLinearToSRGB(e){return this.r=Ms(e.r),this.g=Ms(e.g),this.b=Ms(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fn){return tt.workingToColorSpace(Ot.copy(this),e),Math.round(nt(Ot.r*255,0,255))*65536+Math.round(nt(Ot.g*255,0,255))*256+Math.round(nt(Ot.b*255,0,255))}getHexString(e=fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(Ot.copy(this),t);const i=Ot.r,s=Ot.g,r=Ot.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=fn){tt.workingToColorSpace(Ot.copy(this),e);const t=Ot.r,i=Ot.g,s=Ot.b;return e!==fn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(hi),this.setHSL(hi.h+e,hi.s+t,hi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(hi),e.getHSL(Sr);const i=Xa(hi.h,Sr.h,t),s=Xa(hi.s,Sr.s,t),r=Xa(hi.l,Sr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new Je;Je.NAMES=yh;class Lg extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ai,this.environmentIntensity=1,this.environmentRotation=new ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const vn=new q,Wn=new q,Qa=new q,Xn=new q,is=new q,ss=new q,gu=new q,eo=new q,to=new q,no=new q,io=new Et,so=new Et,ro=new Et;class Mn{constructor(e=new q,t=new q,i=new q){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),vn.subVectors(e,t),s.cross(vn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){vn.subVectors(s,t),Wn.subVectors(i,t),Qa.subVectors(e,t);const a=vn.dot(vn),o=vn.dot(Wn),l=vn.dot(Qa),c=Wn.dot(Wn),u=Wn.dot(Qa),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const f=1/h,p=(c*l-o*u)*f,v=(a*u-o*l)*f;return r.set(1-p-v,v,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Xn.x),l.addScaledVector(a,Xn.y),l.addScaledVector(o,Xn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return io.setScalar(0),so.setScalar(0),ro.setScalar(0),io.fromBufferAttribute(e,t),so.fromBufferAttribute(e,i),ro.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(io,r.x),a.addScaledVector(so,r.y),a.addScaledVector(ro,r.z),a}static isFrontFacing(e,t,i,s){return vn.subVectors(i,t),Wn.subVectors(e,t),vn.cross(Wn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),vn.cross(Wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Mn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;is.subVectors(s,i),ss.subVectors(r,i),eo.subVectors(e,i);const l=is.dot(eo),c=ss.dot(eo);if(l<=0&&c<=0)return t.copy(i);to.subVectors(e,s);const u=is.dot(to),h=ss.dot(to);if(u>=0&&h<=u)return t.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(is,a);no.subVectors(e,r);const p=is.dot(no),v=ss.dot(no);if(v>=0&&p<=v)return t.copy(r);const E=p*c-l*v;if(E<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(i).addScaledVector(ss,o);const g=u*v-p*h;if(g<=0&&h-u>=0&&p-v>=0)return gu.subVectors(r,s),o=(h-u)/(h-u+(p-v)),t.copy(s).addScaledVector(gu,o);const d=1/(g+E+f);return a=E*d,o=f*d,t.copy(i).addScaledVector(is,a).addScaledVector(ss,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ur{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,xn):xn.fromBufferAttribute(r,a),xn.applyMatrix4(e.matrixWorld),this.expandByPoint(xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Er.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Er.copy(i.boundingBox)),Er.applyMatrix4(e.matrixWorld),this.union(Er)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xn),xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ns),br.subVectors(this.max,Ns),rs.subVectors(e.a,Ns),as.subVectors(e.b,Ns),os.subVectors(e.c,Ns),di.subVectors(as,rs),pi.subVectors(os,as),Di.subVectors(rs,os);let t=[0,-di.z,di.y,0,-pi.z,pi.y,0,-Di.z,Di.y,di.z,0,-di.x,pi.z,0,-pi.x,Di.z,0,-Di.x,-di.y,di.x,0,-pi.y,pi.x,0,-Di.y,Di.x,0];return!ao(t,rs,as,os,br)||(t=[1,0,0,0,1,0,0,0,1],!ao(t,rs,as,os,br))?!1:(yr.crossVectors(di,pi),t=[yr.x,yr.y,yr.z],ao(t,rs,as,os,br))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const qn=[new q,new q,new q,new q,new q,new q,new q,new q],xn=new q,Er=new ur,rs=new q,as=new q,os=new q,di=new q,pi=new q,Di=new q,Ns=new q,br=new q,yr=new q,Li=new q;function ao(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Li.fromArray(n,r);const o=s.x*Math.abs(Li.x)+s.y*Math.abs(Li.y)+s.z*Math.abs(Li.z),l=e.dot(Li),c=t.dot(Li),u=i.dot(Li);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Rt=new q,Tr=new lt;let Ig=0;class bn extends Xi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ig++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=nu,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Tr.fromBufferAttribute(this,t),Tr.applyMatrix3(e),this.setXY(t,Tr.x,Tr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Is(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=$t(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Is(t,this.array)),t}setX(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Is(t,this.array)),t}setY(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Is(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Is(t,this.array)),t}setW(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),i=$t(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),i=$t(i,this.array),s=$t(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),i=$t(i,this.array),s=$t(s,this.array),r=$t(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==nu&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Th extends bn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ah extends bn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class pn extends bn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Ug=new ur,Fs=new q,oo=new q;class ya{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Ug.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fs.subVectors(e,this.center);const t=Fs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Fs,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(oo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fs.copy(e.center).add(oo)),this.expandByPoint(Fs.copy(e.center).sub(oo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Ng=0;const cn=new bt,lo=new Ut,ls=new q,Qt=new ur,Os=new ur,Lt=new q;class gn extends Xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ng++}),this.uuid=cr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pg(e)?Ah:Th)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Xe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,t,i){return cn.makeTranslation(e,t,i),this.applyMatrix4(cn),this}scale(e,t,i){return cn.makeScale(e,t,i),this.applyMatrix4(cn),this}lookAt(e){return lo.lookAt(e),lo.updateMatrix(),this.applyMatrix4(lo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new pn(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ur);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Qt.setFromBufferAttribute(r),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,Qt.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,Qt.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(Qt.min),this.boundingBox.expandByPoint(Qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&at('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ya);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const i=this.boundingSphere.center;if(Qt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Os.setFromBufferAttribute(o),this.morphTargetsRelative?(Lt.addVectors(Qt.min,Os.min),Qt.expandByPoint(Lt),Lt.addVectors(Qt.max,Os.max),Qt.expandByPoint(Lt)):(Qt.expandByPoint(Os.min),Qt.expandByPoint(Os.max))}Qt.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Lt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Lt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Lt.fromBufferAttribute(o,c),l&&(ls.fromBufferAttribute(e,c),Lt.add(ls)),s=Math.max(s,i.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&at('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){at("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new q,l[x]=new q;const c=new q,u=new q,h=new q,f=new lt,p=new lt,v=new lt,E=new q,g=new q;function d(x,R,B){c.fromBufferAttribute(i,x),u.fromBufferAttribute(i,R),h.fromBufferAttribute(i,B),f.fromBufferAttribute(r,x),p.fromBufferAttribute(r,R),v.fromBufferAttribute(r,B),u.sub(c),h.sub(c),p.sub(f),v.sub(f);const P=1/(p.x*v.y-v.x*p.y);isFinite(P)&&(E.copy(u).multiplyScalar(v.y).addScaledVector(h,-p.y).multiplyScalar(P),g.copy(h).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(P),o[x].add(E),o[R].add(E),o[B].add(E),l[x].add(g),l[R].add(g),l[B].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let x=0,R=S.length;x<R;++x){const B=S[x],P=B.start,k=B.count;for(let ee=P,ie=P+k;ee<ie;ee+=3)d(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const T=new q,b=new q,D=new q,w=new q;function I(x){D.fromBufferAttribute(s,x),w.copy(D);const R=o[x];T.copy(R),T.sub(D.multiplyScalar(D.dot(R))).normalize(),b.crossVectors(w,R);const P=b.dot(l[x])<0?-1:1;a.setXYZW(x,T.x,T.y,T.z,P)}for(let x=0,R=S.length;x<R;++x){const B=S[x],P=B.start,k=B.count;for(let ee=P,ie=P+k;ee<ie;ee+=3)I(e.getX(ee+0)),I(e.getX(ee+1)),I(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new bn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const s=new q,r=new q,a=new q,o=new q,l=new q,c=new q,u=new q,h=new q;if(e)for(let f=0,p=e.count;f<p;f+=3){const v=e.getX(f+0),E=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,E),a.fromBufferAttribute(t,g),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let p=0,v=0;for(let E=0,g=l.length;E<g;E++){o.isInterleavedBufferAttribute?p=l[E]*o.data.stride+o.offset:p=l[E]*u;for(let d=0;d<u;d++)f[v++]=c[p++]}return new bn(f,u,h)}if(this.index===null)return Ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new gn,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Fg=0;class qi extends Xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fg++}),this.uuid=cr(),this.name="",this.type="Material",this.blending=xs,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=No,this.blendDst=Fo,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ji,this.stencilZFail=Ji,this.stencilZPass=Ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ve(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ve(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xs&&(i.blending=this.blending),this.side!==Ti&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==No&&(i.blendSrc=this.blendSrc),this.blendDst!==Fo&&(i.blendDst=this.blendDst),this.blendEquation!==Oi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==bs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ji&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ji&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ji&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Yn=new q,co=new q,Ar=new q,mi=new q,uo=new q,wr=new q,fo=new q;class wh{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yn.copy(this.origin).addScaledVector(this.direction,t),Yn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){co.copy(e).add(t).multiplyScalar(.5),Ar.copy(t).sub(e).normalize(),mi.copy(this.origin).sub(co);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ar),o=mi.dot(this.direction),l=-mi.dot(Ar),c=mi.lengthSq(),u=Math.abs(1-a*a);let h,f,p,v;if(u>0)if(h=a*l-o,f=a*o-l,v=r*u,h>=0)if(f>=-v)if(f<=v){const E=1/u;h*=E,f*=E,p=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f<=-v?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=v?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(co).addScaledVector(Ar,f),p}intersectSphere(e,t){Yn.subVectors(e.center,this.origin);const i=Yn.dot(this.direction),s=Yn.dot(Yn)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,t,i,s,r){uo.subVectors(t,e),wr.subVectors(i,e),fo.crossVectors(uo,wr);let a=this.direction.dot(fo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;mi.subVectors(this.origin,e);const l=o*this.direction.dot(wr.crossVectors(mi,wr));if(l<0)return null;const c=o*this.direction.dot(uo.cross(mi));if(c<0||l+c>a)return null;const u=-o*mi.dot(fo);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rh extends qi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=$l,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _u=new bt,Ii=new wh,Rr=new ya,vu=new q,Cr=new q,Pr=new q,Dr=new q,ho=new q,Lr=new q,xu=new q,Ir=new q;class mn extends Ut{constructor(e=new gn,t=new Rh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Lr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(ho.fromBufferAttribute(h,e),a?Lr.addScaledVector(ho,u):Lr.addScaledVector(ho.sub(t),u))}t.add(Lr)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Rr.copy(i.boundingSphere),Rr.applyMatrix4(r),Ii.copy(e.ray).recast(e.near),!(Rr.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(Rr,vu)===null||Ii.origin.distanceToSquared(vu)>(e.far-e.near)**2))&&(_u.copy(r).invert(),Ii.copy(e.ray).applyMatrix4(_u),!(i.boundingBox!==null&&Ii.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ii)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,E=f.length;v<E;v++){const g=f[v],d=a[g.materialIndex],S=Math.max(g.start,p.start),T=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let b=S,D=T;b<D;b+=3){const w=o.getX(b),I=o.getX(b+1),x=o.getX(b+2);s=Ur(this,d,e,i,c,u,h,w,I,x),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const v=Math.max(0,p.start),E=Math.min(o.count,p.start+p.count);for(let g=v,d=E;g<d;g+=3){const S=o.getX(g),T=o.getX(g+1),b=o.getX(g+2);s=Ur(this,a,e,i,c,u,h,S,T,b),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,E=f.length;v<E;v++){const g=f[v],d=a[g.materialIndex],S=Math.max(g.start,p.start),T=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let b=S,D=T;b<D;b+=3){const w=b,I=b+1,x=b+2;s=Ur(this,d,e,i,c,u,h,w,I,x),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const v=Math.max(0,p.start),E=Math.min(l.count,p.start+p.count);for(let g=v,d=E;g<d;g+=3){const S=g,T=g+1,b=g+2;s=Ur(this,a,e,i,c,u,h,S,T,b),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function Og(n,e,t,i,s,r,a,o){let l;if(e.side===jt?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Ti,o),l===null)return null;Ir.copy(o),Ir.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ir);return c<t.near||c>t.far?null:{distance:c,point:Ir.clone(),object:n}}function Ur(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Cr),n.getVertexPosition(l,Pr),n.getVertexPosition(c,Dr);const u=Og(n,e,t,i,Cr,Pr,Dr,xu);if(u){const h=new q;Mn.getBarycoord(xu,Cr,Pr,Dr,h),s&&(u.uv=Mn.getInterpolatedAttribute(s,o,l,c,h,new lt)),r&&(u.uv1=Mn.getInterpolatedAttribute(r,o,l,c,h,new lt)),a&&(u.normal=Mn.getInterpolatedAttribute(a,o,l,c,h,new q),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new q,materialIndex:0};Mn.getNormal(Cr,Pr,Dr,f.normal),u.face=f,u.barycoord=h}return u}class Bg extends Ht{constructor(e=null,t=1,i=1,s,r,a,o,l,c=It,u=It,h,f){super(null,a,o,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const po=new q,zg=new q,Vg=new Xe;class Fi{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=po.subVectors(i,t).cross(zg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(po),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Vg.getNormalMatrix(e),s=this.coplanarPoint(po).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ui=new ya,Hg=new lt(.5,.5),Nr=new q;class sc{constructor(e=new Fi,t=new Fi,i=new Fi,s=new Fi,r=new Fi,a=new Fi){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Un,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],p=r[7],v=r[8],E=r[9],g=r[10],d=r[11],S=r[12],T=r[13],b=r[14],D=r[15];if(s[0].setComponents(c-a,p-u,d-v,D-S).normalize(),s[1].setComponents(c+a,p+u,d+v,D+S).normalize(),s[2].setComponents(c+o,p+h,d+E,D+T).normalize(),s[3].setComponents(c-o,p-h,d-E,D-T).normalize(),i)s[4].setComponents(l,f,g,b).normalize(),s[5].setComponents(c-l,p-f,d-g,D-b).normalize();else if(s[4].setComponents(c-l,p-f,d-g,D-b).normalize(),t===Un)s[5].setComponents(c+l,p+f,d+g,D+b).normalize();else if(t===rr)s[5].setComponents(l,f,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(e){Ui.center.set(0,0,0);const t=Hg.distanceTo(e.center);return Ui.radius=.7071067811865476+t,Ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Nr.x=s.normal.x>0?e.max.x:e.min.x,Nr.y=s.normal.y>0?e.max.y:e.min.y,Nr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Nr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ch extends qi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Mu=new bt,yl=new wh,Fr=new ya,Or=new q;class Gg extends Ut{constructor(e=new gn,t=new Ch){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fr.copy(i.boundingSphere),Fr.applyMatrix4(s),Fr.radius+=r,e.ray.intersectsSphere(Fr)===!1)return;Mu.copy(s).invert(),yl.copy(e.ray).applyMatrix4(Mu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let v=f,E=p;v<E;v++){const g=c.getX(v);Or.fromBufferAttribute(h,g),Su(Or,g,l,s,e,t,this)}}else{const f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let v=f,E=p;v<E;v++)Or.fromBufferAttribute(h,v),Su(Or,v,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Su(n,e,t,i,s,r,a){const o=yl.distanceSqToPoint(n);if(o<t){const l=new q;yl.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Ph extends Ht{constructor(e=[],t=ki,i,s,r,a,o,l,c,u){super(e,t,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ts extends Ht{constructor(e,t,i=zn,s,r,a,o=It,l=It,c,u=ri,h=1){if(u!==ri&&u!==Vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ic(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class kg extends Ts{constructor(e,t=zn,i=ki,s,r,a=It,o=It,l,c=ri){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,s,r,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Dh extends Ht{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class fr extends gn{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,p=0;v("z","y","x",-1,-1,i,t,e,a,r,0),v("z","y","x",1,-1,i,t,-e,a,r,1),v("x","z","y",1,1,e,i,t,s,a,2),v("x","z","y",1,-1,e,i,-t,s,a,3),v("x","y","z",1,-1,e,t,i,s,r,4),v("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new pn(c,3)),this.setAttribute("normal",new pn(u,3)),this.setAttribute("uv",new pn(h,2));function v(E,g,d,S,T,b,D,w,I,x,R){const B=b/I,P=D/x,k=b/2,ee=D/2,ie=w/2,N=I+1,W=x+1;let O=0,J=0;const ce=new q;for(let be=0;be<W;be++){const Ce=be*P-ee;for(let Pe=0;Pe<N;Pe++){const Ye=Pe*B-k;ce[E]=Ye*S,ce[g]=Ce*T,ce[d]=ie,c.push(ce.x,ce.y,ce.z),ce[E]=0,ce[g]=0,ce[d]=w>0?1:-1,u.push(ce.x,ce.y,ce.z),h.push(Pe/I),h.push(1-be/x),O+=1}}for(let be=0;be<x;be++)for(let Ce=0;Ce<I;Ce++){const Pe=f+Ce+N*be,Ye=f+Ce+N*(be+1),st=f+(Ce+1)+N*(be+1),Ge=f+(Ce+1)+N*be;l.push(Pe,Ye,Ge),l.push(Ye,st,Ge),J+=6}o.addGroup(p,J,R),p+=J,f+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ta extends gn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,h=e/o,f=t/l,p=[],v=[],E=[],g=[];for(let d=0;d<u;d++){const S=d*f-a;for(let T=0;T<c;T++){const b=T*h-r;v.push(b,-S,0),E.push(0,0,1),g.push(T/o),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let S=0;S<o;S++){const T=S+c*d,b=S+c*(d+1),D=S+1+c*(d+1),w=S+1+c*d;p.push(T,b,w),p.push(b,D,w)}this.setIndex(p),this.setAttribute("position",new pn(v,3)),this.setAttribute("normal",new pn(E,3)),this.setAttribute("uv",new pn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ta(e.width,e.height,e.widthSegments,e.heightSegments)}}class js extends gn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new q,f=new q,p=[],v=[],E=[],g=[];for(let d=0;d<=i;d++){const S=[],T=d/i;let b=0;d===0&&a===0?b=.5/t:d===i&&l===Math.PI&&(b=-.5/t);for(let D=0;D<=t;D++){const w=D/t;h.x=-e*Math.cos(s+w*r)*Math.sin(a+T*o),h.y=e*Math.cos(a+T*o),h.z=e*Math.sin(s+w*r)*Math.sin(a+T*o),v.push(h.x,h.y,h.z),f.copy(h).normalize(),E.push(f.x,f.y,f.z),g.push(w+b,1-T),S.push(c++)}u.push(S)}for(let d=0;d<i;d++)for(let S=0;S<t;S++){const T=u[d][S+1],b=u[d][S],D=u[d+1][S],w=u[d+1][S+1];(d!==0||a>0)&&p.push(T,b,w),(d!==i-1||l<Math.PI)&&p.push(b,D,w)}this.setIndex(p),this.setAttribute("position",new pn(v,3)),this.setAttribute("normal",new pn(E,3)),this.setAttribute("uv",new pn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new js(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function As(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];if(Eu(s))s.isRenderTargetTexture?(Ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Eu(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function kt(n){const e={};for(let t=0;t<n.length;t++){const i=As(n[t]);for(const s in i)e[s]=i[s]}return e}function Eu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Wg(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Lh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const Xg={clone:As,merge:kt};var qg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vn extends qi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qg,this.fragmentShader=Yg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=As(e.uniforms),this.uniformsGroups=Wg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class $g extends Vn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Kg extends qi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ca,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bu extends qi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Je(16777215),this.specular=new Je(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ca,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=$l,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jg extends qi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ag,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Zg extends qi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const mo={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(yu(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!yu(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function yu(n){try{const e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Jg{constructor(e,t,i){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const p=c[h],v=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Qg=new Jg;class rc{constructor(e){this.manager=e!==void 0?e:Qg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}rc.DEFAULT_MATERIAL_NAME="__DEFAULT";const cs=new WeakMap;class e_ extends rc{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=mo.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let h=cs.get(a);h===void 0&&(h=[],cs.set(a,h)),h.push({onLoad:t,onError:s})}return a}const o=ar("img");function l(){u(),t&&t(this);const h=cs.get(this)||[];for(let f=0;f<h.length;f++){const p=h[f];p.onLoad&&p.onLoad(this)}cs.delete(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),mo.remove(`image:${e}`);const f=cs.get(this)||[];for(let p=0;p<f.length;p++){const v=f[p];v.onError&&v.onError(h)}cs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),mo.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class t_ extends rc{constructor(e){super(e)}load(e,t,i,s){const r=new Ht,a=new e_(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class ac extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const go=new bt,Tu=new q,Au=new q;class Ih{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.mapType=sn,this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sc,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Tu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Tu),Au.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Au),t.updateMatrixWorld(),go.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(go,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===rr||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(go)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Br=new q,zr=new ws,Rn=new q;class Uh extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=Un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Br,zr,Rn),Rn.x===1&&Rn.y===1&&Rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Br,zr,Rn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Br,zr,Rn),Rn.x===1&&Rn.y===1&&Rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Br,zr,Rn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const gi=new q,wu=new lt,Ru=new lt;class tn extends Uh{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Wa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bl*2*Math.atan(Math.tan(Wa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(gi.x,gi.y).multiplyScalar(-e/gi.z),gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(gi.x,gi.y).multiplyScalar(-e/gi.z)}getViewSize(e,t){return this.getViewBounds(e,wu,Ru),t.subVectors(Ru,wu)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Wa*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class n_ extends Ih{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0}}class i_ extends ac{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new n_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class oc extends Uh{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class s_ extends Ih{constructor(){super(new oc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class r_ extends ac{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new s_}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class a_ extends ac{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const us=-90,fs=1;class o_ extends Ut{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new tn(us,fs,e,t);s.layers=this.layers,this.add(s);const r=new tn(us,fs,e,t);r.layers=this.layers,this.add(r);const a=new tn(us,fs,e,t);a.layers=this.layers,this.add(a);const o=new tn(us,fs,e,t);o.layers=this.layers,this.add(o);const l=new tn(us,fs,e,t);l.layers=this.layers,this.add(l);const c=new tn(us,fs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Un)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===rr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class l_ extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const hc=class hc{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};hc.prototype.isMatrix2=!0;let Cu=hc;function Pu(n,e,t,i){const s=c_(i);switch(t){case vh:return n*e;case Mh:return n*e/s.components*s.byteLength;case Jl:return n*e/s.components*s.byteLength;case Wi:return n*e*2/s.components*s.byteLength;case Ql:return n*e*2/s.components*s.byteLength;case xh:return n*e*3/s.components*s.byteLength;case Sn:return n*e*4/s.components*s.byteLength;case ec:return n*e*4/s.components*s.byteLength;case Kr:case jr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Zr:case Jr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Yo:case Ko:return Math.max(n,16)*Math.max(e,8)/4;case qo:case $o:return Math.max(n,8)*Math.max(e,8)/2;case jo:case Zo:case Qo:case el:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Jo:case oa:case tl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case nl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case il:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case sl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case rl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case al:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ol:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ll:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case cl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ul:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case fl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case hl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case dl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case pl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ml:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case gl:case _l:case vl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case xl:case Ml:return Math.ceil(n/4)*Math.ceil(e/4)*8;case la:case Sl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function c_(n){switch(n){case sn:case ph:return{byteLength:1,components:1};case ir:case mh:case si:return{byteLength:2,components:1};case jl:case Zl:return{byteLength:2,components:4};case zn:case Kl:case In:return{byteLength:4,components:1};case gh:case _h:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yl}}));typeof window<"u"&&(window.__THREE__?Ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yl);function Nh(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function u_(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,u);else{h.sort((p,v)=>p.start-v.start);let f=0;for(let p=1;p<h.length;p++){const v=h[f],E=h[p];E.start<=v.start+v.count+1?v.count=Math.max(v.count,E.start+E.count-v.start):(++f,h[f]=E)}h.length=f+1;for(let p=0,v=h.length;p<v;p++){const E=h[p];n.bufferSubData(c,E.start*u.BYTES_PER_ELEMENT,u,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var f_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,h_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,d_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,p_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,m_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,g_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,__=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,v_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,x_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,M_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,S_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,E_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,b_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,y_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,T_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,A_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,w_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,R_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,C_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,P_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,D_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,L_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,I_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,U_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,N_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,F_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,O_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,B_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,z_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,V_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,H_="gl_FragColor = linearToOutputTexel( gl_FragColor );",G_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,k_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,W_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,X_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,q_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Y_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,K_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,j_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Z_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,J_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Q_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,e0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,t0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,n0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,i0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,s0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,r0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,a0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,o0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,l0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,c0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,u0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,f0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,h0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,d0=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,p0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,m0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,v0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,x0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,M0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,S0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,E0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,b0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,y0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,T0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,A0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,R0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,C0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,P0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,D0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,U0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,N0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,F0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,O0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,B0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,z0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,V0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,H0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,G0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,k0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,W0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,X0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,q0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Y0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,$0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,K0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,j0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Z0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,J0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Q0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ev=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,tv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,rv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,av=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ov=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,uv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_v=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,vv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,xv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Mv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Sv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ev=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Av=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Pv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Lv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Iv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Uv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Fv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ov=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Vv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:f_,alphahash_pars_fragment:h_,alphamap_fragment:d_,alphamap_pars_fragment:p_,alphatest_fragment:m_,alphatest_pars_fragment:g_,aomap_fragment:__,aomap_pars_fragment:v_,batching_pars_vertex:x_,batching_vertex:M_,begin_vertex:S_,beginnormal_vertex:E_,bsdfs:b_,iridescence_fragment:y_,bumpmap_pars_fragment:T_,clipping_planes_fragment:A_,clipping_planes_pars_fragment:w_,clipping_planes_pars_vertex:R_,clipping_planes_vertex:C_,color_fragment:P_,color_pars_fragment:D_,color_pars_vertex:L_,color_vertex:I_,common:U_,cube_uv_reflection_fragment:N_,defaultnormal_vertex:F_,displacementmap_pars_vertex:O_,displacementmap_vertex:B_,emissivemap_fragment:z_,emissivemap_pars_fragment:V_,colorspace_fragment:H_,colorspace_pars_fragment:G_,envmap_fragment:k_,envmap_common_pars_fragment:W_,envmap_pars_fragment:X_,envmap_pars_vertex:q_,envmap_physical_pars_fragment:i0,envmap_vertex:Y_,fog_vertex:$_,fog_pars_vertex:K_,fog_fragment:j_,fog_pars_fragment:Z_,gradientmap_pars_fragment:J_,lightmap_pars_fragment:Q_,lights_lambert_fragment:e0,lights_lambert_pars_fragment:t0,lights_pars_begin:n0,lights_toon_fragment:s0,lights_toon_pars_fragment:r0,lights_phong_fragment:a0,lights_phong_pars_fragment:o0,lights_physical_fragment:l0,lights_physical_pars_fragment:c0,lights_fragment_begin:u0,lights_fragment_maps:f0,lights_fragment_end:h0,lightprobes_pars_fragment:d0,logdepthbuf_fragment:p0,logdepthbuf_pars_fragment:m0,logdepthbuf_pars_vertex:g0,logdepthbuf_vertex:_0,map_fragment:v0,map_pars_fragment:x0,map_particle_fragment:M0,map_particle_pars_fragment:S0,metalnessmap_fragment:E0,metalnessmap_pars_fragment:b0,morphinstance_vertex:y0,morphcolor_vertex:T0,morphnormal_vertex:A0,morphtarget_pars_vertex:w0,morphtarget_vertex:R0,normal_fragment_begin:C0,normal_fragment_maps:P0,normal_pars_fragment:D0,normal_pars_vertex:L0,normal_vertex:I0,normalmap_pars_fragment:U0,clearcoat_normal_fragment_begin:N0,clearcoat_normal_fragment_maps:F0,clearcoat_pars_fragment:O0,iridescence_pars_fragment:B0,opaque_fragment:z0,packing:V0,premultiplied_alpha_fragment:H0,project_vertex:G0,dithering_fragment:k0,dithering_pars_fragment:W0,roughnessmap_fragment:X0,roughnessmap_pars_fragment:q0,shadowmap_pars_fragment:Y0,shadowmap_pars_vertex:$0,shadowmap_vertex:K0,shadowmask_pars_fragment:j0,skinbase_vertex:Z0,skinning_pars_vertex:J0,skinning_vertex:Q0,skinnormal_vertex:ev,specularmap_fragment:tv,specularmap_pars_fragment:nv,tonemapping_fragment:iv,tonemapping_pars_fragment:sv,transmission_fragment:rv,transmission_pars_fragment:av,uv_pars_fragment:ov,uv_pars_vertex:lv,uv_vertex:cv,worldpos_vertex:uv,background_vert:fv,background_frag:hv,backgroundCube_vert:dv,backgroundCube_frag:pv,cube_vert:mv,cube_frag:gv,depth_vert:_v,depth_frag:vv,distance_vert:xv,distance_frag:Mv,equirect_vert:Sv,equirect_frag:Ev,linedashed_vert:bv,linedashed_frag:yv,meshbasic_vert:Tv,meshbasic_frag:Av,meshlambert_vert:wv,meshlambert_frag:Rv,meshmatcap_vert:Cv,meshmatcap_frag:Pv,meshnormal_vert:Dv,meshnormal_frag:Lv,meshphong_vert:Iv,meshphong_frag:Uv,meshphysical_vert:Nv,meshphysical_frag:Fv,meshtoon_vert:Ov,meshtoon_frag:Bv,points_vert:zv,points_frag:Vv,shadow_vert:Hv,shadow_frag:Gv,sprite_vert:kv,sprite_frag:Wv},Te={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new q},probesMax:{value:new q},probesResolution:{value:new q}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},Ln={basic:{uniforms:kt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:kt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Je(0)},envMapIntensity:{value:1}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:kt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:kt([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:kt([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new Je(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:kt([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:kt([Te.points,Te.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:kt([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:kt([Te.common,Te.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:kt([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:kt([Te.sprite,Te.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distance:{uniforms:kt([Te.common,Te.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distance_vert,fragmentShader:je.distance_frag},shadow:{uniforms:kt([Te.lights,Te.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Ln.physical={uniforms:kt([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const Vr={r:0,b:0,g:0},Xv=new bt,Fh=new Xe;Fh.set(-1,0,0,0,1,0,0,0,1);function qv(n,e,t,i,s,r){const a=new Je(0);let o=s===!0?0:1,l,c,u=null,h=0,f=null;function p(S){let T=S.isScene===!0?S.background:null;if(T&&T.isTexture){const b=S.backgroundBlurriness>0;T=e.get(T,b)}return T}function v(S){let T=!1;const b=p(S);b===null?g(a,o):b&&b.isColor&&(g(b,1),T=!0);const D=n.xr.getEnvironmentBlendMode();D==="additive"?t.buffers.color.setClear(0,0,0,1,r):D==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function E(S,T){const b=p(T);b&&(b.isCubeTexture||b.mapping===ba)?(c===void 0&&(c=new mn(new fr(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:As(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(D,w,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Xv.makeRotationFromEuler(T.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Fh),c.material.toneMapped=tt.getTransfer(b.colorSpace)!==ft,(u!==b||h!==b.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=b,h=b.version,f=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new mn(new Ta(2,2),new Vn({name:"BackgroundMaterial",uniforms:As(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=tt.getTransfer(b.colorSpace)!==ft,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||h!==b.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=b,h=b.version,f=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function g(S,T){S.getRGB(Vr,Lh(n)),t.buffers.color.setClear(Vr.r,Vr.g,Vr.b,T,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,T=1){a.set(S),o=T,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,g(a,o)},render:v,addToRenderList:E,dispose:d}}function Yv(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,a=!1;function o(P,k,ee,ie,N){let W=!1;const O=h(P,ie,ee,k);r!==O&&(r=O,c(r.object)),W=p(P,ie,ee,N),W&&v(P,ie,ee,N),N!==null&&e.update(N,n.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,b(P,k,ee,ie),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return n.createVertexArray()}function c(P){return n.bindVertexArray(P)}function u(P){return n.deleteVertexArray(P)}function h(P,k,ee,ie){const N=ie.wireframe===!0;let W=i[k.id];W===void 0&&(W={},i[k.id]=W);const O=P.isInstancedMesh===!0?P.id:0;let J=W[O];J===void 0&&(J={},W[O]=J);let ce=J[ee.id];ce===void 0&&(ce={},J[ee.id]=ce);let be=ce[N];return be===void 0&&(be=f(l()),ce[N]=be),be}function f(P){const k=[],ee=[],ie=[];for(let N=0;N<t;N++)k[N]=0,ee[N]=0,ie[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:ee,attributeDivisors:ie,object:P,attributes:{},index:null}}function p(P,k,ee,ie){const N=r.attributes,W=k.attributes;let O=0;const J=ee.getAttributes();for(const ce in J)if(J[ce].location>=0){const Ce=N[ce];let Pe=W[ce];if(Pe===void 0&&(ce==="instanceMatrix"&&P.instanceMatrix&&(Pe=P.instanceMatrix),ce==="instanceColor"&&P.instanceColor&&(Pe=P.instanceColor)),Ce===void 0||Ce.attribute!==Pe||Pe&&Ce.data!==Pe.data)return!0;O++}return r.attributesNum!==O||r.index!==ie}function v(P,k,ee,ie){const N={},W=k.attributes;let O=0;const J=ee.getAttributes();for(const ce in J)if(J[ce].location>=0){let Ce=W[ce];Ce===void 0&&(ce==="instanceMatrix"&&P.instanceMatrix&&(Ce=P.instanceMatrix),ce==="instanceColor"&&P.instanceColor&&(Ce=P.instanceColor));const Pe={};Pe.attribute=Ce,Ce&&Ce.data&&(Pe.data=Ce.data),N[ce]=Pe,O++}r.attributes=N,r.attributesNum=O,r.index=ie}function E(){const P=r.newAttributes;for(let k=0,ee=P.length;k<ee;k++)P[k]=0}function g(P){d(P,0)}function d(P,k){const ee=r.newAttributes,ie=r.enabledAttributes,N=r.attributeDivisors;ee[P]=1,ie[P]===0&&(n.enableVertexAttribArray(P),ie[P]=1),N[P]!==k&&(n.vertexAttribDivisor(P,k),N[P]=k)}function S(){const P=r.newAttributes,k=r.enabledAttributes;for(let ee=0,ie=k.length;ee<ie;ee++)k[ee]!==P[ee]&&(n.disableVertexAttribArray(ee),k[ee]=0)}function T(P,k,ee,ie,N,W,O){O===!0?n.vertexAttribIPointer(P,k,ee,N,W):n.vertexAttribPointer(P,k,ee,ie,N,W)}function b(P,k,ee,ie){E();const N=ie.attributes,W=ee.getAttributes(),O=k.defaultAttributeValues;for(const J in W){const ce=W[J];if(ce.location>=0){let be=N[J];if(be===void 0&&(J==="instanceMatrix"&&P.instanceMatrix&&(be=P.instanceMatrix),J==="instanceColor"&&P.instanceColor&&(be=P.instanceColor)),be!==void 0){const Ce=be.normalized,Pe=be.itemSize,Ye=e.get(be);if(Ye===void 0)continue;const st=Ye.buffer,Ge=Ye.type,se=Ye.bytesPerElement,Ee=Ge===n.INT||Ge===n.UNSIGNED_INT||be.gpuType===Kl;if(be.isInterleavedBufferAttribute){const _e=be.data,Oe=_e.stride,Be=be.offset;if(_e.isInstancedInterleavedBuffer){for(let ze=0;ze<ce.locationSize;ze++)d(ce.location+ze,_e.meshPerAttribute);P.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let ze=0;ze<ce.locationSize;ze++)g(ce.location+ze);n.bindBuffer(n.ARRAY_BUFFER,st);for(let ze=0;ze<ce.locationSize;ze++)T(ce.location+ze,Pe/ce.locationSize,Ge,Ce,Oe*se,(Be+Pe/ce.locationSize*ze)*se,Ee)}else{if(be.isInstancedBufferAttribute){for(let _e=0;_e<ce.locationSize;_e++)d(ce.location+_e,be.meshPerAttribute);P.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let _e=0;_e<ce.locationSize;_e++)g(ce.location+_e);n.bindBuffer(n.ARRAY_BUFFER,st);for(let _e=0;_e<ce.locationSize;_e++)T(ce.location+_e,Pe/ce.locationSize,Ge,Ce,Pe*se,Pe/ce.locationSize*_e*se,Ee)}}else if(O!==void 0){const Ce=O[J];if(Ce!==void 0)switch(Ce.length){case 2:n.vertexAttrib2fv(ce.location,Ce);break;case 3:n.vertexAttrib3fv(ce.location,Ce);break;case 4:n.vertexAttrib4fv(ce.location,Ce);break;default:n.vertexAttrib1fv(ce.location,Ce)}}}}S()}function D(){R();for(const P in i){const k=i[P];for(const ee in k){const ie=k[ee];for(const N in ie){const W=ie[N];for(const O in W)u(W[O].object),delete W[O];delete ie[N]}}delete i[P]}}function w(P){if(i[P.id]===void 0)return;const k=i[P.id];for(const ee in k){const ie=k[ee];for(const N in ie){const W=ie[N];for(const O in W)u(W[O].object),delete W[O];delete ie[N]}}delete i[P.id]}function I(P){for(const k in i){const ee=i[k];for(const ie in ee){const N=ee[ie];if(N[P.id]===void 0)continue;const W=N[P.id];for(const O in W)u(W[O].object),delete W[O];delete N[P.id]}}}function x(P){for(const k in i){const ee=i[k],ie=P.isInstancedMesh===!0?P.id:0,N=ee[ie];if(N!==void 0){for(const W in N){const O=N[W];for(const J in O)u(O[J].object),delete O[J];delete N[W]}delete ee[ie],Object.keys(ee).length===0&&delete i[k]}}}function R(){B(),a=!0,r!==s&&(r=s,c(r.object))}function B(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:B,dispose:D,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:I,initAttributes:E,enableAttribute:g,disableUnusedAttributes:S}}function $v(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let f=0;for(let p=0;p<u;p++)f+=c[p];t.update(f,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Kv(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(I){return!(I!==Sn&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){const x=I===si&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==sn&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==In&&!x)}function l(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Ve("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&Ve("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:v,maxTextureSize:E,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:S,maxVaryings:T,maxFragmentUniforms:b,maxSamples:D,samples:w}}function jv(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new Fi,o=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||s;return s=f,i=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const v=h.clippingPlanes,E=h.clipIntersection,g=h.clipShadows,d=n.get(h);if(!s||v===null||v.length===0||r&&!g)r?u(null):c();else{const S=r?0:i,T=S*4;let b=d.clippingState||null;l.value=b,b=u(v,f,T,p);for(let D=0;D!==T;++D)b[D]=t[D];d.clippingState=b,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,p,v){const E=h!==null?h.length:0;let g=null;if(E!==0){if(g=l.value,v!==!0||g===null){const d=p+E*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(g===null||g.length<d)&&(g=new Float32Array(d));for(let T=0,b=p;T!==E;++T,b+=4)a.copy(h[T]).applyMatrix4(S,o),a.normal.toArray(g,b),g[b+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,g}}const Si=4,Du=[.125,.215,.35,.446,.526,.582],Bi=20,Zv=256,Bs=new oc,Lu=new Je;let _o=null,vo=0,xo=0,Mo=!1;const Jv=new q;class Iu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=Jv}=r;_o=this._renderer.getRenderTarget(),vo=this._renderer.getActiveCubeFace(),xo=this._renderer.getActiveMipmapLevel(),Mo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(_o,vo,xo),this._renderer.xr.enabled=Mo,e.scissorTest=!1,hs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ki||e.mapping===ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_o=this._renderer.getRenderTarget(),vo=this._renderer.getActiveCubeFace(),xo=this._renderer.getActiveMipmapLevel(),Mo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:zt,minFilter:zt,generateMipmaps:!1,type:si,format:Sn,colorSpace:ua,depthBuffer:!1},s=Uu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uu(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Qv(r)),this._blurMaterial=tx(r,e,t),this._ggxMaterial=ex(r,e,t)}return s}_compileMaterial(e){const t=new mn(new gn,e);this._renderer.compile(t,Bs)}_sceneToCubeUV(e,t,i,s,r){const l=new tn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(Lu),h.toneMapping=Fn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new mn(new fr,new Rh({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,g=E.material;let d=!1;const S=e.background;S?S.isColor&&(g.color.copy(S),e.background=null,d=!0):(g.color.copy(Lu),d=!0);for(let T=0;T<6;T++){const b=T%3;b===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[T],r.y,r.z)):b===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[T]));const D=this._cubeSize;hs(s,b*D,T>2?D:0,D,D),h.setRenderTarget(s),d&&h.render(E,l),h.render(e,l)}h.toneMapping=p,h.autoClear=f,e.background=S}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===ki||e.mapping===ys;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nu());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;hs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Bs)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=0+c*1.25,p=h*f,{_lodMax:v}=this,E=this._sizeLods[i],g=3*E*(i>v-Si?i-v+Si:0),d=4*(this._cubeSize-E);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=v-t,hs(r,g,d,3*E,2*E),s.setRenderTarget(r),s.render(o,Bs),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=v-i,hs(e,g,d,3*E,2*E),s.setRenderTarget(e),s.render(o,Bs)}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&at("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[s];h.material=c;const f=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Bi-1),E=r/v,g=isFinite(r)?1+Math.floor(u*E):Bi;g>Bi&&Ve(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Bi}`);const d=[];let S=0;for(let I=0;I<Bi;++I){const x=I/E,R=Math.exp(-x*x/2);d.push(R),I===0?S+=R:I<g&&(S+=2*R)}for(let I=0;I<d.length;I++)d[I]=d[I]/S;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:T}=this;f.dTheta.value=v,f.mipInt.value=T-i;const b=this._sizeLods[s],D=3*b*(s>T-Si?s-T+Si:0),w=4*(this._cubeSize-b);hs(t,D,w,3*b,2*b),l.setRenderTarget(t),l.render(h,Bs)}}function Qv(n){const e=[],t=[],i=[];let s=n;const r=n-Si+1+Du.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>n-Si?l=Du[a-n+Si-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,v=6,E=3,g=2,d=1,S=new Float32Array(E*v*p),T=new Float32Array(g*v*p),b=new Float32Array(d*v*p);for(let w=0;w<p;w++){const I=w%3*2/3-1,x=w>2?0:-1,R=[I,x,0,I+2/3,x,0,I+2/3,x+1,0,I,x,0,I+2/3,x+1,0,I,x+1,0];S.set(R,E*v*w),T.set(f,g*v*w);const B=[w,w,w,w,w,w];b.set(B,d*v*w)}const D=new gn;D.setAttribute("position",new bn(S,E)),D.setAttribute("uv",new bn(T,g)),D.setAttribute("faceIndex",new bn(b,d)),i.push(new mn(D,null)),s>Si&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Uu(n,e,t){const i=new On(n,e,t);return i.texture.mapping=ba,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function hs(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function ex(n,e,t){return new Vn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Zv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Aa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function tx(n,e,t){const i=new Float32Array(Bi),s=new q(0,1,0);return new Vn({name:"SphericalGaussianBlur",defines:{n:Bi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Nu(){return new Vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Fu(){return new Vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Aa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Oh extends On{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Ph(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new fr(5,5,5),r=new Vn({name:"CubemapFromEquirect",uniforms:As(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:jt,blending:Qn});r.uniforms.tEquirect.value=t;const a=new mn(s,r),o=t.minFilter;return t.minFilter===zi&&(t.minFilter=zt),new o_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}function nx(n){let e=new WeakMap,t=new WeakMap,i=null;function s(f,p=!1){return f==null?null:p?a(f):r(f)}function r(f){if(f&&f.isTexture){const p=f.mapping;if(p===Ha||p===Ga)if(e.has(f)){const v=e.get(f).texture;return o(v,f.mapping)}else{const v=f.image;if(v&&v.height>0){const E=new Oh(v.height);return E.fromEquirectangularTexture(n,f),e.set(f,E),f.addEventListener("dispose",c),o(E.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const p=f.mapping,v=p===Ha||p===Ga,E=p===ki||p===ys;if(v||E){let g=t.get(f);const d=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return i===null&&(i=new Iu(n)),g=v?i.fromEquirectangular(f,g):i.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{const S=f.image;return v&&S&&S.height>0||E&&S&&l(S)?(i===null&&(i=new Iu(n)),g=v?i.fromEquirectangular(f):i.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",u),g.texture):null}}}return f}function o(f,p){return p===Ha?f.mapping=ki:p===Ga&&(f.mapping=ys),f}function l(f){let p=0;const v=6;for(let E=0;E<v;E++)f[E]!==void 0&&p++;return p===v}function c(f){const p=f.target;p.removeEventListener("dispose",c);const v=e.get(p);v!==void 0&&(e.delete(p),v.dispose())}function u(f){const p=f.target;p.removeEventListener("dispose",u);const v=t.get(p);v!==void 0&&(t.delete(p),v.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function ix(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&El("WebGLRenderer: "+i+" extension not supported."),s}}}function sx(n,e,t,i){const s={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);f.removeEventListener("dispose",a),delete s[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const p in f)e.update(f[p],n.ARRAY_BUFFER)}function c(h){const f=[],p=h.index,v=h.attributes.position;let E=0;if(v===void 0)return;if(p!==null){const S=p.array;E=p.version;for(let T=0,b=S.length;T<b;T+=3){const D=S[T+0],w=S[T+1],I=S[T+2];f.push(D,w,w,I,I,D)}}else{const S=v.array;E=v.version;for(let T=0,b=S.length/3-1;T<b;T+=3){const D=T+0,w=T+1,I=T+2;f.push(D,w,w,I,I,D)}}const g=new(v.count>=65535?Ah:Th)(f,1);g.version=E;const d=r.get(h);d&&e.remove(d),r.set(h,g)}function u(h){const f=r.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function rx(n,e,t){let i;function s(h){i=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,f){n.drawElements(i,f,r,h*a),t.update(f,i,1)}function c(h,f,p){p!==0&&(n.drawElementsInstanced(i,f,r,h*a,p),t.update(f,i,p))}function u(h,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,h,0,p);let E=0;for(let g=0;g<p;g++)E+=f[g];t.update(E,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function ax(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:at("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function ox(n,e,t){const i=new WeakMap,s=new Et;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let B=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",B)};var p=B;f!==void 0&&f.texture.dispose();const v=o.morphAttributes.position!==void 0,E=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let b=0;v===!0&&(b=1),E===!0&&(b=2),g===!0&&(b=3);let D=o.attributes.position.count*b,w=1;D>e.maxTextureSize&&(w=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const I=new Float32Array(D*w*4*h),x=new Eh(I,D,w,h);x.type=In,x.needsUpdate=!0;const R=b*4;for(let P=0;P<h;P++){const k=d[P],ee=S[P],ie=T[P],N=D*w*4*P;for(let W=0;W<k.count;W++){const O=W*R;v===!0&&(s.fromBufferAttribute(k,W),I[N+O+0]=s.x,I[N+O+1]=s.y,I[N+O+2]=s.z,I[N+O+3]=0),E===!0&&(s.fromBufferAttribute(ee,W),I[N+O+4]=s.x,I[N+O+5]=s.y,I[N+O+6]=s.z,I[N+O+7]=0),g===!0&&(s.fromBufferAttribute(ie,W),I[N+O+8]=s.x,I[N+O+9]=s.y,I[N+O+10]=s.z,I[N+O+11]=ie.itemSize===4?s.w:1)}}f={count:h,texture:x,size:new lt(D,w)},i.set(o,f),o.addEventListener("dispose",B)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let v=0;for(let g=0;g<c.length;g++)v+=c[g];const E=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(n,"morphTargetBaseInfluence",E),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function lx(n,e,t,i,s){let r=new WeakMap;function a(c){const u=s.render.frame,h=c.geometry,f=e.get(c,h);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return f}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const cx={[ah]:"LINEAR_TONE_MAPPING",[oh]:"REINHARD_TONE_MAPPING",[lh]:"CINEON_TONE_MAPPING",[ch]:"ACES_FILMIC_TONE_MAPPING",[fh]:"AGX_TONE_MAPPING",[hh]:"NEUTRAL_TONE_MAPPING",[uh]:"CUSTOM_TONE_MAPPING"};function ux(n,e,t,i,s){const r=new On(e,t,{type:n,depthBuffer:i,stencilBuffer:s,depthTexture:i?new Ts(e,t):void 0}),a=new On(e,t,{type:si,depthBuffer:!1,stencilBuffer:!1}),o=new gn;o.setAttribute("position",new pn([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new pn([0,2,0,0,2,0],2));const l=new $g({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new mn(o,l),u=new oc(-1,1,1,-1,0,1);let h=null,f=null,p=!1,v,E=null,g=[],d=!1;this.setSize=function(S,T){r.setSize(S,T),a.setSize(S,T);for(let b=0;b<g.length;b++){const D=g[b];D.setSize&&D.setSize(S,T)}},this.setEffects=function(S){g=S,d=g.length>0&&g[0].isRenderPass===!0;const T=r.width,b=r.height;for(let D=0;D<g.length;D++){const w=g[D];w.setSize&&w.setSize(T,b)}},this.begin=function(S,T){if(p||S.toneMapping===Fn&&g.length===0)return!1;if(E=T,T!==null){const b=T.width,D=T.height;(r.width!==b||r.height!==D)&&this.setSize(b,D)}return d===!1&&S.setRenderTarget(r),v=S.toneMapping,S.toneMapping=Fn,!0},this.hasRenderPass=function(){return d},this.end=function(S,T){S.toneMapping=v,p=!0;let b=r,D=a;for(let w=0;w<g.length;w++){const I=g[w];if(I.enabled!==!1&&(I.render(S,D,b,T),I.needsSwap!==!1)){const x=b;b=D,D=x}}if(h!==S.outputColorSpace||f!==S.toneMapping){h=S.outputColorSpace,f=S.toneMapping,l.defines={},tt.getTransfer(h)===ft&&(l.defines.SRGB_TRANSFER="");const w=cx[f];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=b.texture,S.setRenderTarget(E),S.render(c,u),E=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Bh=new Ht,Tl=new Ts(1,1),zh=new Eh,Vh=new yg,Hh=new Ph,Ou=[],Bu=[],zu=new Float32Array(16),Vu=new Float32Array(9),Hu=new Float32Array(4);function Rs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Ou[s];if(r===void 0&&(r=new Float32Array(s),Ou[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Pt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Dt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function wa(n,e){let t=Bu[e];t===void 0&&(t=new Int32Array(e),Bu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function fx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function hx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2fv(this.addr,e),Dt(t,e)}}function dx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;n.uniform3fv(this.addr,e),Dt(t,e)}}function px(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4fv(this.addr,e),Dt(t,e)}}function mx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,i))return;Hu.set(i),n.uniformMatrix2fv(this.addr,!1,Hu),Dt(t,i)}}function gx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,i))return;Vu.set(i),n.uniformMatrix3fv(this.addr,!1,Vu),Dt(t,i)}}function _x(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,i))return;zu.set(i),n.uniformMatrix4fv(this.addr,!1,zu),Dt(t,i)}}function vx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function xx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2iv(this.addr,e),Dt(t,e)}}function Mx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3iv(this.addr,e),Dt(t,e)}}function Sx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4iv(this.addr,e),Dt(t,e)}}function Ex(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function bx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2uiv(this.addr,e),Dt(t,e)}}function yx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3uiv(this.addr,e),Dt(t,e)}}function Tx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4uiv(this.addr,e),Dt(t,e)}}function Ax(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Tl.compareFunction=t.isReversedDepthBuffer()?nc:tc,r=Tl):r=Bh,t.setTexture2D(e||r,s)}function wx(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Vh,s)}function Rx(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Hh,s)}function Cx(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||zh,s)}function Px(n){switch(n){case 5126:return fx;case 35664:return hx;case 35665:return dx;case 35666:return px;case 35674:return mx;case 35675:return gx;case 35676:return _x;case 5124:case 35670:return vx;case 35667:case 35671:return xx;case 35668:case 35672:return Mx;case 35669:case 35673:return Sx;case 5125:return Ex;case 36294:return bx;case 36295:return yx;case 36296:return Tx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ax;case 35679:case 36299:case 36307:return wx;case 35680:case 36300:case 36308:case 36293:return Rx;case 36289:case 36303:case 36311:case 36292:return Cx}}function Dx(n,e){n.uniform1fv(this.addr,e)}function Lx(n,e){const t=Rs(e,this.size,2);n.uniform2fv(this.addr,t)}function Ix(n,e){const t=Rs(e,this.size,3);n.uniform3fv(this.addr,t)}function Ux(n,e){const t=Rs(e,this.size,4);n.uniform4fv(this.addr,t)}function Nx(n,e){const t=Rs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Fx(n,e){const t=Rs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Ox(n,e){const t=Rs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Bx(n,e){n.uniform1iv(this.addr,e)}function zx(n,e){n.uniform2iv(this.addr,e)}function Vx(n,e){n.uniform3iv(this.addr,e)}function Hx(n,e){n.uniform4iv(this.addr,e)}function Gx(n,e){n.uniform1uiv(this.addr,e)}function kx(n,e){n.uniform2uiv(this.addr,e)}function Wx(n,e){n.uniform3uiv(this.addr,e)}function Xx(n,e){n.uniform4uiv(this.addr,e)}function qx(n,e,t){const i=this.cache,s=e.length,r=wa(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),Dt(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Tl:a=Bh;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Yx(n,e,t){const i=this.cache,s=e.length,r=wa(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),Dt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Vh,r[a])}function $x(n,e,t){const i=this.cache,s=e.length,r=wa(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),Dt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Hh,r[a])}function Kx(n,e,t){const i=this.cache,s=e.length,r=wa(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),Dt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||zh,r[a])}function jx(n){switch(n){case 5126:return Dx;case 35664:return Lx;case 35665:return Ix;case 35666:return Ux;case 35674:return Nx;case 35675:return Fx;case 35676:return Ox;case 5124:case 35670:return Bx;case 35667:case 35671:return zx;case 35668:case 35672:return Vx;case 35669:case 35673:return Hx;case 5125:return Gx;case 36294:return kx;case 36295:return Wx;case 36296:return Xx;case 35678:case 36198:case 36298:case 36306:case 35682:return qx;case 35679:case 36299:case 36307:return Yx;case 35680:case 36300:case 36308:case 36293:return $x;case 36289:case 36303:case 36311:case 36292:return Kx}}class Zx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Px(t.type)}}class Jx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=jx(t.type)}}class Qx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const So=/(\w+)(\])?(\[|\.)?/g;function Gu(n,e){n.seq.push(e),n.map[e.id]=e}function eM(n,e,t){const i=n.name,s=i.length;for(So.lastIndex=0;;){const r=So.exec(i),a=So.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Gu(t,c===void 0?new Zx(o,n,e):new Jx(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new Qx(o),Gu(t,h)),t=h}}}class Qr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);eM(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function ku(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const tM=37297;let nM=0;function iM(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Wu=new Xe;function sM(n){tt._getMatrix(Wu,tt.workingColorSpace,n);const e=`mat3( ${Wu.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(n)){case fa:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return Ve("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Xu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+iM(n.getShaderSource(e),o)}else return r}function rM(n,e){const t=sM(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const aM={[ah]:"Linear",[oh]:"Reinhard",[lh]:"Cineon",[ch]:"ACESFilmic",[fh]:"AgX",[hh]:"Neutral",[uh]:"Custom"};function oM(n,e){const t=aM[e];return t===void 0?(Ve("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Hr=new q;function lM(){tt.getLuminanceCoefficients(Hr);const n=Hr.x.toFixed(4),e=Hr.y.toFixed(4),t=Hr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gs).join(`
`)}function uM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function fM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Gs(n){return n!==""}function qu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Al(n){return n.replace(hM,pM)}const dM=new Map;function pM(n,e){let t=je[e];if(t===void 0){const i=dM.get(e);if(i!==void 0)t=je[i],Ve('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Al(t)}const mM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $u(n){return n.replace(mM,gM)}function gM(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ku(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const _M={[$r]:"SHADOWMAP_TYPE_PCF",[Hs]:"SHADOWMAP_TYPE_VSM"};function vM(n){return _M[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const xM={[ki]:"ENVMAP_TYPE_CUBE",[ys]:"ENVMAP_TYPE_CUBE",[ba]:"ENVMAP_TYPE_CUBE_UV"};function MM(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":xM[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const SM={[ys]:"ENVMAP_MODE_REFRACTION"};function EM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":SM[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const bM={[$l]:"ENVMAP_BLENDING_MULTIPLY",[ig]:"ENVMAP_BLENDING_MIX",[sg]:"ENVMAP_BLENDING_ADD"};function yM(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":bM[n.combine]||"ENVMAP_BLENDING_NONE"}function TM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function AM(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=vM(t),c=MM(t),u=EM(t),h=yM(t),f=TM(t),p=cM(t),v=uM(r),E=s.createProgram();let g,d,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Gs).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Gs).join(`
`),d.length>0&&(d+=`
`)):(g=[Ku(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gs).join(`
`),d=[Ku(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fn?"#define TONE_MAPPING":"",t.toneMapping!==Fn?je.tonemapping_pars_fragment:"",t.toneMapping!==Fn?oM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,rM("linearToOutputTexel",t.outputColorSpace),lM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Gs).join(`
`)),a=Al(a),a=qu(a,t),a=Yu(a,t),o=Al(o),o=qu(o,t),o=Yu(o,t),a=$u(a),o=$u(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",t.glslVersion===iu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===iu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const T=S+g+a,b=S+d+o,D=ku(s,s.VERTEX_SHADER,T),w=ku(s,s.FRAGMENT_SHADER,b);s.attachShader(E,D),s.attachShader(E,w),t.index0AttributeName!==void 0?s.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function I(P){if(n.debug.checkShaderErrors){const k=s.getProgramInfoLog(E)||"",ee=s.getShaderInfoLog(D)||"",ie=s.getShaderInfoLog(w)||"",N=k.trim(),W=ee.trim(),O=ie.trim();let J=!0,ce=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,E,D,w);else{const be=Xu(s,D,"vertex"),Ce=Xu(s,w,"fragment");at("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+be+`
`+Ce)}else N!==""?Ve("WebGLProgram: Program Info Log:",N):(W===""||O==="")&&(ce=!1);ce&&(P.diagnostics={runnable:J,programLog:N,vertexShader:{log:W,prefix:g},fragmentShader:{log:O,prefix:d}})}s.deleteShader(D),s.deleteShader(w),x=new Qr(s,E),R=fM(s,E)}let x;this.getUniforms=function(){return x===void 0&&I(this),x};let R;this.getAttributes=function(){return R===void 0&&I(this),R};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=s.getProgramParameter(E,tM)),B},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=nM++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=D,this.fragmentShader=w,this}let wM=0;class RM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new CM(e),t.set(e,i)),i}}class CM{constructor(e){this.id=wM++,this.code=e,this.usedTimes=0}}function PM(n){return n===Wi||n===oa||n===la}function DM(n,e,t,i,s,r){const a=new bh,o=new RM,l=new Set,c=[],u=new Map,h=i.logarithmicDepthBuffer;let f=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return l.add(x),x===0?"uv":`uv${x}`}function E(x,R,B,P,k,ee){const ie=P.fog,N=k.geometry,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,O=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,J=e.get(x.envMap||W,O),ce=J&&J.mapping===ba?J.image.height:null,be=p[x.type];x.precision!==null&&(f=i.getMaxPrecision(x.precision),f!==x.precision&&Ve("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const Ce=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Pe=Ce!==void 0?Ce.length:0;let Ye=0;N.morphAttributes.position!==void 0&&(Ye=1),N.morphAttributes.normal!==void 0&&(Ye=2),N.morphAttributes.color!==void 0&&(Ye=3);let st,Ge,se,Ee;if(be){const ke=Ln[be];st=ke.vertexShader,Ge=ke.fragmentShader}else st=x.vertexShader,Ge=x.fragmentShader,o.update(x),se=o.getVertexShaderID(x),Ee=o.getFragmentShaderID(x);const _e=n.getRenderTarget(),Oe=n.state.buffers.depth.getReversed(),Be=k.isInstancedMesh===!0,ze=k.isBatchedMesh===!0,A=!!x.map,C=!!x.matcap,G=!!J,re=!!x.aoMap,$=!!x.lightMap,Q=!!x.bumpMap,ue=!!x.normalMap,he=!!x.displacementMap,y=!!x.emissiveMap,oe=!!x.metalnessMap,ve=!!x.roughnessMap,de=x.anisotropy>0,V=x.clearcoat>0,H=x.dispersion>0,_=x.iridescence>0,m=x.sheen>0,L=x.transmission>0,j=de&&!!x.anisotropyMap,ne=V&&!!x.clearcoatMap,le=V&&!!x.clearcoatNormalMap,me=V&&!!x.clearcoatRoughnessMap,Z=_&&!!x.iridescenceMap,ae=_&&!!x.iridescenceThicknessMap,ge=m&&!!x.sheenColorMap,ye=m&&!!x.sheenRoughnessMap,Me=!!x.specularMap,xe=!!x.specularColorMap,He=!!x.specularIntensityMap,We=L&&!!x.transmissionMap,Qe=L&&!!x.thicknessMap,U=!!x.gradientMap,pe=!!x.alphaMap,te=x.alphaTest>0,Re=!!x.alphaHash,Se=!!x.extensions;let fe=Fn;x.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(fe=n.toneMapping);const Ie={shaderID:be,shaderType:x.type,shaderName:x.name,vertexShader:st,fragmentShader:Ge,defines:x.defines,customVertexShaderID:se,customFragmentShaderID:Ee,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:ze,batchingColor:ze&&k._colorsTexture!==null,instancing:Be,instancingColor:Be&&k.instanceColor!==null,instancingMorph:Be&&k.morphTexture!==null,outputColorSpace:_e===null?n.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:tt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:A,matcap:C,envMap:G,envMapMode:G&&J.mapping,envMapCubeUVHeight:ce,aoMap:re,lightMap:$,bumpMap:Q,normalMap:ue,displacementMap:he,emissiveMap:y,normalMapObjectSpace:ue&&x.normalMapType===og,normalMapTangentSpace:ue&&x.normalMapType===ca,packedNormalMap:ue&&x.normalMapType===ca&&PM(x.normalMap.format),metalnessMap:oe,roughnessMap:ve,anisotropy:de,anisotropyMap:j,clearcoat:V,clearcoatMap:ne,clearcoatNormalMap:le,clearcoatRoughnessMap:me,dispersion:H,iridescence:_,iridescenceMap:Z,iridescenceThicknessMap:ae,sheen:m,sheenColorMap:ge,sheenRoughnessMap:ye,specularMap:Me,specularColorMap:xe,specularIntensityMap:He,transmission:L,transmissionMap:We,thicknessMap:Qe,gradientMap:U,opaque:x.transparent===!1&&x.blending===xs&&x.alphaToCoverage===!1,alphaMap:pe,alphaTest:te,alphaHash:Re,combine:x.combine,mapUv:A&&v(x.map.channel),aoMapUv:re&&v(x.aoMap.channel),lightMapUv:$&&v(x.lightMap.channel),bumpMapUv:Q&&v(x.bumpMap.channel),normalMapUv:ue&&v(x.normalMap.channel),displacementMapUv:he&&v(x.displacementMap.channel),emissiveMapUv:y&&v(x.emissiveMap.channel),metalnessMapUv:oe&&v(x.metalnessMap.channel),roughnessMapUv:ve&&v(x.roughnessMap.channel),anisotropyMapUv:j&&v(x.anisotropyMap.channel),clearcoatMapUv:ne&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:le&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:ye&&v(x.sheenRoughnessMap.channel),specularMapUv:Me&&v(x.specularMap.channel),specularColorMapUv:xe&&v(x.specularColorMap.channel),specularIntensityMapUv:He&&v(x.specularIntensityMap.channel),transmissionMapUv:We&&v(x.transmissionMap.channel),thicknessMapUv:Qe&&v(x.thicknessMap.channel),alphaMapUv:pe&&v(x.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(ue||de),vertexNormals:!!N.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!N.attributes.uv&&(A||pe),fog:!!ie,useFog:x.fog===!0,fogExp2:!!ie&&ie.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||N.attributes.normal===void 0&&ue===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Oe,skinning:k.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:Pe,morphTextureStride:Ye,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:ee.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:fe,decodeVideoTexture:A&&x.map.isVideoTexture===!0&&tt.getTransfer(x.map.colorSpace)===ft,decodeVideoTextureEmissive:y&&x.emissiveMap.isVideoTexture===!0&&tt.getTransfer(x.emissiveMap.colorSpace)===ft,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Zn,flipSided:x.side===jt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Se&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&x.extensions.multiDraw===!0||ze)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ie.vertexUv1s=l.has(1),Ie.vertexUv2s=l.has(2),Ie.vertexUv3s=l.has(3),l.clear(),Ie}function g(x){const R=[];if(x.shaderID?R.push(x.shaderID):(R.push(x.customVertexShaderID),R.push(x.customFragmentShaderID)),x.defines!==void 0)for(const B in x.defines)R.push(B),R.push(x.defines[B]);return x.isRawShaderMaterial===!1&&(d(R,x),S(R,x),R.push(n.outputColorSpace)),R.push(x.customProgramCacheKey),R.join()}function d(x,R){x.push(R.precision),x.push(R.outputColorSpace),x.push(R.envMapMode),x.push(R.envMapCubeUVHeight),x.push(R.mapUv),x.push(R.alphaMapUv),x.push(R.lightMapUv),x.push(R.aoMapUv),x.push(R.bumpMapUv),x.push(R.normalMapUv),x.push(R.displacementMapUv),x.push(R.emissiveMapUv),x.push(R.metalnessMapUv),x.push(R.roughnessMapUv),x.push(R.anisotropyMapUv),x.push(R.clearcoatMapUv),x.push(R.clearcoatNormalMapUv),x.push(R.clearcoatRoughnessMapUv),x.push(R.iridescenceMapUv),x.push(R.iridescenceThicknessMapUv),x.push(R.sheenColorMapUv),x.push(R.sheenRoughnessMapUv),x.push(R.specularMapUv),x.push(R.specularColorMapUv),x.push(R.specularIntensityMapUv),x.push(R.transmissionMapUv),x.push(R.thicknessMapUv),x.push(R.combine),x.push(R.fogExp2),x.push(R.sizeAttenuation),x.push(R.morphTargetsCount),x.push(R.morphAttributeCount),x.push(R.numDirLights),x.push(R.numPointLights),x.push(R.numSpotLights),x.push(R.numSpotLightMaps),x.push(R.numHemiLights),x.push(R.numRectAreaLights),x.push(R.numDirLightShadows),x.push(R.numPointLightShadows),x.push(R.numSpotLightShadows),x.push(R.numSpotLightShadowsWithMaps),x.push(R.numLightProbes),x.push(R.shadowMapType),x.push(R.toneMapping),x.push(R.numClippingPlanes),x.push(R.numClipIntersection),x.push(R.depthPacking)}function S(x,R){a.disableAll(),R.instancing&&a.enable(0),R.instancingColor&&a.enable(1),R.instancingMorph&&a.enable(2),R.matcap&&a.enable(3),R.envMap&&a.enable(4),R.normalMapObjectSpace&&a.enable(5),R.normalMapTangentSpace&&a.enable(6),R.clearcoat&&a.enable(7),R.iridescence&&a.enable(8),R.alphaTest&&a.enable(9),R.vertexColors&&a.enable(10),R.vertexAlphas&&a.enable(11),R.vertexUv1s&&a.enable(12),R.vertexUv2s&&a.enable(13),R.vertexUv3s&&a.enable(14),R.vertexTangents&&a.enable(15),R.anisotropy&&a.enable(16),R.alphaHash&&a.enable(17),R.batching&&a.enable(18),R.dispersion&&a.enable(19),R.batchingColor&&a.enable(20),R.gradientMap&&a.enable(21),R.packedNormalMap&&a.enable(22),R.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.reversedDepthBuffer&&a.enable(4),R.skinning&&a.enable(5),R.morphTargets&&a.enable(6),R.morphNormals&&a.enable(7),R.morphColors&&a.enable(8),R.premultipliedAlpha&&a.enable(9),R.shadowMapEnabled&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),R.decodeVideoTextureEmissive&&a.enable(20),R.alphaToCoverage&&a.enable(21),R.numLightProbeGrids>0&&a.enable(22),x.push(a.mask)}function T(x){const R=p[x.type];let B;if(R){const P=Ln[R];B=Xg.clone(P.uniforms)}else B=x.uniforms;return B}function b(x,R){let B=u.get(R);return B!==void 0?++B.usedTimes:(B=new AM(n,R,x,s),c.push(B),u.set(R,B)),B}function D(x){if(--x.usedTimes===0){const R=c.indexOf(x);c[R]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function I(){o.dispose()}return{getParameters:E,getProgramCacheKey:g,getUniforms:T,acquireProgram:b,releaseProgram:D,releaseShaderCache:w,programs:c,dispose:I}}function LM(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function IM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function ju(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Zu(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function o(f,p,v,E,g,d){let S=n[e];return S===void 0?(S={id:f.id,object:f,geometry:p,material:v,materialVariant:a(f),groupOrder:E,renderOrder:f.renderOrder,z:g,group:d},n[e]=S):(S.id=f.id,S.object=f,S.geometry=p,S.material=v,S.materialVariant=a(f),S.groupOrder=E,S.renderOrder=f.renderOrder,S.z=g,S.group=d),e++,S}function l(f,p,v,E,g,d){const S=o(f,p,v,E,g,d);v.transmission>0?i.push(S):v.transparent===!0?s.push(S):t.push(S)}function c(f,p,v,E,g,d){const S=o(f,p,v,E,g,d);v.transmission>0?i.unshift(S):v.transparent===!0?s.unshift(S):t.unshift(S)}function u(f,p){t.length>1&&t.sort(f||IM),i.length>1&&i.sort(p||ju),s.length>1&&s.sort(p||ju)}function h(){for(let f=e,p=n.length;f<p;f++){const v=n[f];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:h,sort:u}}function UM(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new Zu,n.set(i,[a])):s>=r.length?(a=new Zu,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function NM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new Je};break;case"SpotLight":t={position:new q,direction:new q,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new q,halfWidth:new q,halfHeight:new q};break}return n[e.id]=t,t}}}function FM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let OM=0;function BM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function zM(n){const e=new NM,t=FM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new q);const s=new q,r=new bt,a=new bt;function o(c){let u=0,h=0,f=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let p=0,v=0,E=0,g=0,d=0,S=0,T=0,b=0,D=0,w=0,I=0;c.sort(BM);for(let R=0,B=c.length;R<B;R++){const P=c[R],k=P.color,ee=P.intensity,ie=P.distance;let N=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Wi?N=P.shadow.map.texture:N=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=k.r*ee,h+=k.g*ee,f+=k.b*ee;else if(P.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(P.sh.coefficients[W],ee);I++}else if(P.isDirectionalLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const O=P.shadow,J=t.get(P);J.shadowIntensity=O.intensity,J.shadowBias=O.bias,J.shadowNormalBias=O.normalBias,J.shadowRadius=O.radius,J.shadowMapSize=O.mapSize,i.directionalShadow[p]=J,i.directionalShadowMap[p]=N,i.directionalShadowMatrix[p]=P.shadow.matrix,S++}i.directional[p]=W,p++}else if(P.isSpotLight){const W=e.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(k).multiplyScalar(ee),W.distance=ie,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,i.spot[E]=W;const O=P.shadow;if(P.map&&(i.spotLightMap[D]=P.map,D++,O.updateMatrices(P),P.castShadow&&w++),i.spotLightMatrix[E]=O.matrix,P.castShadow){const J=t.get(P);J.shadowIntensity=O.intensity,J.shadowBias=O.bias,J.shadowNormalBias=O.normalBias,J.shadowRadius=O.radius,J.shadowMapSize=O.mapSize,i.spotShadow[E]=J,i.spotShadowMap[E]=N,b++}E++}else if(P.isRectAreaLight){const W=e.get(P);W.color.copy(k).multiplyScalar(ee),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),i.rectArea[g]=W,g++}else if(P.isPointLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){const O=P.shadow,J=t.get(P);J.shadowIntensity=O.intensity,J.shadowBias=O.bias,J.shadowNormalBias=O.normalBias,J.shadowRadius=O.radius,J.shadowMapSize=O.mapSize,J.shadowCameraNear=O.camera.near,J.shadowCameraFar=O.camera.far,i.pointShadow[v]=J,i.pointShadowMap[v]=N,i.pointShadowMatrix[v]=P.shadow.matrix,T++}i.point[v]=W,v++}else if(P.isHemisphereLight){const W=e.get(P);W.skyColor.copy(P.color).multiplyScalar(ee),W.groundColor.copy(P.groundColor).multiplyScalar(ee),i.hemi[d]=W,d++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Te.LTC_FLOAT_1,i.rectAreaLTC2=Te.LTC_FLOAT_2):(i.rectAreaLTC1=Te.LTC_HALF_1,i.rectAreaLTC2=Te.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const x=i.hash;(x.directionalLength!==p||x.pointLength!==v||x.spotLength!==E||x.rectAreaLength!==g||x.hemiLength!==d||x.numDirectionalShadows!==S||x.numPointShadows!==T||x.numSpotShadows!==b||x.numSpotMaps!==D||x.numLightProbes!==I)&&(i.directional.length=p,i.spot.length=E,i.rectArea.length=g,i.point.length=v,i.hemi.length=d,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=b+D-w,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=I,x.directionalLength=p,x.pointLength=v,x.spotLength=E,x.rectAreaLength=g,x.hemiLength=d,x.numDirectionalShadows=S,x.numPointShadows=T,x.numSpotShadows=b,x.numSpotMaps=D,x.numLightProbes=I,i.version=OM++)}function l(c,u){let h=0,f=0,p=0,v=0,E=0;const g=u.matrixWorldInverse;for(let d=0,S=c.length;d<S;d++){const T=c[d];if(T.isDirectionalLight){const b=i.directional[h];b.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),h++}else if(T.isSpotLight){const b=i.spot[p];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),p++}else if(T.isRectAreaLight){const b=i.rectArea[v];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(g),a.identity(),r.copy(T.matrixWorld),r.premultiply(g),a.extractRotation(r),b.halfWidth.set(T.width*.5,0,0),b.halfHeight.set(0,T.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),v++}else if(T.isPointLight){const b=i.point[f];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(g),f++}else if(T.isHemisphereLight){const b=i.hemi[E];b.direction.setFromMatrixPosition(T.matrixWorld),b.direction.transformDirection(g),E++}}}return{setup:o,setupView:l,state:i}}function Ju(n){const e=new zM(n),t=[],i=[],s=[];function r(f){h.camera=f,t.length=0,i.length=0,s.length=0}function a(f){t.push(f)}function o(f){i.push(f)}function l(f){s.push(f)}function c(){e.setup(t)}function u(f){e.setupView(t,f)}const h={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function VM(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Ju(n),e.set(s,[o])):r>=a.length?(o=new Ju(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const HM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,kM=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],WM=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],Qu=new bt,zs=new q,Eo=new q;function XM(n,e,t){let i=new sc;const s=new lt,r=new lt,a=new Et,o=new jg,l=new Zg,c={},u=t.maxTextureSize,h={[Ti]:jt,[jt]:Ti,[Zn]:Zn},f=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:HM,fragmentShader:GM}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const v=new gn;v.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new mn(v,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$r;let d=this.type;this.render=function(w,I,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===Bm&&(Ve("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=$r);const R=n.getRenderTarget(),B=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),k=n.state;k.setBlending(Qn),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const ee=d!==this.type;ee&&I.traverse(function(ie){ie.material&&(Array.isArray(ie.material)?ie.material.forEach(N=>N.needsUpdate=!0):ie.material.needsUpdate=!0)});for(let ie=0,N=w.length;ie<N;ie++){const W=w[ie],O=W.shadow;if(O===void 0){Ve("WebGLShadowMap:",W,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const J=O.getFrameExtents();s.multiply(J),r.copy(O.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/J.x),s.x=r.x*J.x,O.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/J.y),s.y=r.y*J.y,O.mapSize.y=r.y));const ce=n.state.buffers.depth.getReversed();if(O.camera._reversedDepth=ce,O.map===null||ee===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Hs){if(W.isPointLight){Ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new On(s.x,s.y,{format:Wi,type:si,minFilter:zt,magFilter:zt,generateMipmaps:!1}),O.map.texture.name=W.name+".shadowMap",O.map.depthTexture=new Ts(s.x,s.y,In),O.map.depthTexture.name=W.name+".shadowMapDepth",O.map.depthTexture.format=ri,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=It,O.map.depthTexture.magFilter=It}else W.isPointLight?(O.map=new Oh(s.x),O.map.depthTexture=new kg(s.x,zn)):(O.map=new On(s.x,s.y),O.map.depthTexture=new Ts(s.x,s.y,zn)),O.map.depthTexture.name=W.name+".shadowMap",O.map.depthTexture.format=ri,this.type===$r?(O.map.depthTexture.compareFunction=ce?nc:tc,O.map.depthTexture.minFilter=zt,O.map.depthTexture.magFilter=zt):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=It,O.map.depthTexture.magFilter=It);O.camera.updateProjectionMatrix()}const be=O.map.isWebGLCubeRenderTarget?6:1;for(let Ce=0;Ce<be;Ce++){if(O.map.isWebGLCubeRenderTarget)n.setRenderTarget(O.map,Ce),n.clear();else{Ce===0&&(n.setRenderTarget(O.map),n.clear());const Pe=O.getViewport(Ce);a.set(r.x*Pe.x,r.y*Pe.y,r.x*Pe.z,r.y*Pe.w),k.viewport(a)}if(W.isPointLight){const Pe=O.camera,Ye=O.matrix,st=W.distance||Pe.far;st!==Pe.far&&(Pe.far=st,Pe.updateProjectionMatrix()),zs.setFromMatrixPosition(W.matrixWorld),Pe.position.copy(zs),Eo.copy(Pe.position),Eo.add(kM[Ce]),Pe.up.copy(WM[Ce]),Pe.lookAt(Eo),Pe.updateMatrixWorld(),Ye.makeTranslation(-zs.x,-zs.y,-zs.z),Qu.multiplyMatrices(Pe.projectionMatrix,Pe.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Qu,Pe.coordinateSystem,Pe.reversedDepth)}else O.updateMatrices(W);i=O.getFrustum(),b(I,x,O.camera,W,this.type)}O.isPointLightShadow!==!0&&this.type===Hs&&S(O,x),O.needsUpdate=!1}d=this.type,g.needsUpdate=!1,n.setRenderTarget(R,B,P)};function S(w,I){const x=e.update(E);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new On(s.x,s.y,{format:Wi,type:si})),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(I,null,x,f,E,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(I,null,x,p,E,null)}function T(w,I,x,R){let B=null;const P=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)B=P;else if(B=x.isPointLight===!0?l:o,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const k=B.uuid,ee=I.uuid;let ie=c[k];ie===void 0&&(ie={},c[k]=ie);let N=ie[ee];N===void 0&&(N=B.clone(),ie[ee]=N,I.addEventListener("dispose",D)),B=N}if(B.visible=I.visible,B.wireframe=I.wireframe,R===Hs?B.side=I.shadowSide!==null?I.shadowSide:I.side:B.side=I.shadowSide!==null?I.shadowSide:h[I.side],B.alphaMap=I.alphaMap,B.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,B.map=I.map,B.clipShadows=I.clipShadows,B.clippingPlanes=I.clippingPlanes,B.clipIntersection=I.clipIntersection,B.displacementMap=I.displacementMap,B.displacementScale=I.displacementScale,B.displacementBias=I.displacementBias,B.wireframeLinewidth=I.wireframeLinewidth,B.linewidth=I.linewidth,x.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const k=n.properties.get(B);k.light=x}return B}function b(w,I,x,R,B){if(w.visible===!1)return;if(w.layers.test(I.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&B===Hs)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);const ee=e.update(w),ie=w.material;if(Array.isArray(ie)){const N=ee.groups;for(let W=0,O=N.length;W<O;W++){const J=N[W],ce=ie[J.materialIndex];if(ce&&ce.visible){const be=T(w,ce,R,B);w.onBeforeShadow(n,w,I,x,ee,be,J),n.renderBufferDirect(x,null,ee,be,w,J),w.onAfterShadow(n,w,I,x,ee,be,J)}}}else if(ie.visible){const N=T(w,ie,R,B);w.onBeforeShadow(n,w,I,x,ee,N,null),n.renderBufferDirect(x,null,ee,N,w,null),w.onAfterShadow(n,w,I,x,ee,N,null)}}const k=w.children;for(let ee=0,ie=k.length;ee<ie;ee++)b(k[ee],I,x,R,B)}function D(w){w.target.removeEventListener("dispose",D);for(const x in c){const R=c[x],B=w.target.uuid;B in R&&(R[B].dispose(),delete R[B])}}}function qM(n,e){function t(){let U=!1;const pe=new Et;let te=null;const Re=new Et(0,0,0,0);return{setMask:function(Se){te!==Se&&!U&&(n.colorMask(Se,Se,Se,Se),te=Se)},setLocked:function(Se){U=Se},setClear:function(Se,fe,Ie,ke,yt){yt===!0&&(Se*=ke,fe*=ke,Ie*=ke),pe.set(Se,fe,Ie,ke),Re.equals(pe)===!1&&(n.clearColor(Se,fe,Ie,ke),Re.copy(pe))},reset:function(){U=!1,te=null,Re.set(-1,0,0,0)}}}function i(){let U=!1,pe=!1,te=null,Re=null,Se=null;return{setReversed:function(fe){if(pe!==fe){const Ie=e.get("EXT_clip_control");fe?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),pe=fe;const ke=Se;Se=null,this.setClear(ke)}},getReversed:function(){return pe},setTest:function(fe){fe?_e(n.DEPTH_TEST):Oe(n.DEPTH_TEST)},setMask:function(fe){te!==fe&&!U&&(n.depthMask(fe),te=fe)},setFunc:function(fe){if(pe&&(fe=_g[fe]),Re!==fe){switch(fe){case Oo:n.depthFunc(n.NEVER);break;case Bo:n.depthFunc(n.ALWAYS);break;case zo:n.depthFunc(n.LESS);break;case bs:n.depthFunc(n.LEQUAL);break;case Vo:n.depthFunc(n.EQUAL);break;case Ho:n.depthFunc(n.GEQUAL);break;case Go:n.depthFunc(n.GREATER);break;case ko:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Re=fe}},setLocked:function(fe){U=fe},setClear:function(fe){Se!==fe&&(Se=fe,pe&&(fe=1-fe),n.clearDepth(fe))},reset:function(){U=!1,te=null,Re=null,Se=null,pe=!1}}}function s(){let U=!1,pe=null,te=null,Re=null,Se=null,fe=null,Ie=null,ke=null,yt=null;return{setTest:function(ht){U||(ht?_e(n.STENCIL_TEST):Oe(n.STENCIL_TEST))},setMask:function(ht){pe!==ht&&!U&&(n.stencilMask(ht),pe=ht)},setFunc:function(ht,Hn,Tn){(te!==ht||Re!==Hn||Se!==Tn)&&(n.stencilFunc(ht,Hn,Tn),te=ht,Re=Hn,Se=Tn)},setOp:function(ht,Hn,Tn){(fe!==ht||Ie!==Hn||ke!==Tn)&&(n.stencilOp(ht,Hn,Tn),fe=ht,Ie=Hn,ke=Tn)},setLocked:function(ht){U=ht},setClear:function(ht){yt!==ht&&(n.clearStencil(ht),yt=ht)},reset:function(){U=!1,pe=null,te=null,Re=null,Se=null,fe=null,Ie=null,ke=null,yt=null}}}const r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let u={},h={},f={},p=new WeakMap,v=[],E=null,g=!1,d=null,S=null,T=null,b=null,D=null,w=null,I=null,x=new Je(0,0,0),R=0,B=!1,P=null,k=null,ee=null,ie=null,N=null;const W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,J=0;const ce=n.getParameter(n.VERSION);ce.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(ce)[1]),O=J>=1):ce.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),O=J>=2);let be=null,Ce={};const Pe=n.getParameter(n.SCISSOR_BOX),Ye=n.getParameter(n.VIEWPORT),st=new Et().fromArray(Pe),Ge=new Et().fromArray(Ye);function se(U,pe,te,Re){const Se=new Uint8Array(4),fe=n.createTexture();n.bindTexture(U,fe),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ie=0;Ie<te;Ie++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(pe,0,n.RGBA,1,1,Re,0,n.RGBA,n.UNSIGNED_BYTE,Se):n.texImage2D(pe+Ie,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Se);return fe}const Ee={};Ee[n.TEXTURE_2D]=se(n.TEXTURE_2D,n.TEXTURE_2D,1),Ee[n.TEXTURE_CUBE_MAP]=se(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[n.TEXTURE_2D_ARRAY]=se(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ee[n.TEXTURE_3D]=se(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),_e(n.DEPTH_TEST),a.setFunc(bs),Q(!1),ue(Zc),_e(n.CULL_FACE),re(Qn);function _e(U){u[U]!==!0&&(n.enable(U),u[U]=!0)}function Oe(U){u[U]!==!1&&(n.disable(U),u[U]=!1)}function Be(U,pe){return f[U]!==pe?(n.bindFramebuffer(U,pe),f[U]=pe,U===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=pe),U===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=pe),!0):!1}function ze(U,pe){let te=v,Re=!1;if(U){te=p.get(pe),te===void 0&&(te=[],p.set(pe,te));const Se=U.textures;if(te.length!==Se.length||te[0]!==n.COLOR_ATTACHMENT0){for(let fe=0,Ie=Se.length;fe<Ie;fe++)te[fe]=n.COLOR_ATTACHMENT0+fe;te.length=Se.length,Re=!0}}else te[0]!==n.BACK&&(te[0]=n.BACK,Re=!0);Re&&n.drawBuffers(te)}function A(U){return E!==U?(n.useProgram(U),E=U,!0):!1}const C={[Oi]:n.FUNC_ADD,[Vm]:n.FUNC_SUBTRACT,[Hm]:n.FUNC_REVERSE_SUBTRACT};C[Gm]=n.MIN,C[km]=n.MAX;const G={[Wm]:n.ZERO,[Xm]:n.ONE,[qm]:n.SRC_COLOR,[No]:n.SRC_ALPHA,[Jm]:n.SRC_ALPHA_SATURATE,[jm]:n.DST_COLOR,[$m]:n.DST_ALPHA,[Ym]:n.ONE_MINUS_SRC_COLOR,[Fo]:n.ONE_MINUS_SRC_ALPHA,[Zm]:n.ONE_MINUS_DST_COLOR,[Km]:n.ONE_MINUS_DST_ALPHA,[Qm]:n.CONSTANT_COLOR,[eg]:n.ONE_MINUS_CONSTANT_COLOR,[tg]:n.CONSTANT_ALPHA,[ng]:n.ONE_MINUS_CONSTANT_ALPHA};function re(U,pe,te,Re,Se,fe,Ie,ke,yt,ht){if(U===Qn){g===!0&&(Oe(n.BLEND),g=!1);return}if(g===!1&&(_e(n.BLEND),g=!0),U!==zm){if(U!==d||ht!==B){if((S!==Oi||D!==Oi)&&(n.blendEquation(n.FUNC_ADD),S=Oi,D=Oi),ht)switch(U){case xs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Jc:n.blendFunc(n.ONE,n.ONE);break;case Qc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case eu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:at("WebGLState: Invalid blending: ",U);break}else switch(U){case xs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Jc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Qc:at("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case eu:at("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:at("WebGLState: Invalid blending: ",U);break}T=null,b=null,w=null,I=null,x.set(0,0,0),R=0,d=U,B=ht}return}Se=Se||pe,fe=fe||te,Ie=Ie||Re,(pe!==S||Se!==D)&&(n.blendEquationSeparate(C[pe],C[Se]),S=pe,D=Se),(te!==T||Re!==b||fe!==w||Ie!==I)&&(n.blendFuncSeparate(G[te],G[Re],G[fe],G[Ie]),T=te,b=Re,w=fe,I=Ie),(ke.equals(x)===!1||yt!==R)&&(n.blendColor(ke.r,ke.g,ke.b,yt),x.copy(ke),R=yt),d=U,B=!1}function $(U,pe){U.side===Zn?Oe(n.CULL_FACE):_e(n.CULL_FACE);let te=U.side===jt;pe&&(te=!te),Q(te),U.blending===xs&&U.transparent===!1?re(Qn):re(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);const Re=U.stencilWrite;o.setTest(Re),Re&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),y(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?_e(n.SAMPLE_ALPHA_TO_COVERAGE):Oe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Q(U){P!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),P=U)}function ue(U){U!==Fm?(_e(n.CULL_FACE),U!==k&&(U===Zc?n.cullFace(n.BACK):U===Om?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Oe(n.CULL_FACE),k=U}function he(U){U!==ee&&(O&&n.lineWidth(U),ee=U)}function y(U,pe,te){U?(_e(n.POLYGON_OFFSET_FILL),(ie!==pe||N!==te)&&(ie=pe,N=te,a.getReversed()&&(pe=-pe),n.polygonOffset(pe,te))):Oe(n.POLYGON_OFFSET_FILL)}function oe(U){U?_e(n.SCISSOR_TEST):Oe(n.SCISSOR_TEST)}function ve(U){U===void 0&&(U=n.TEXTURE0+W-1),be!==U&&(n.activeTexture(U),be=U)}function de(U,pe,te){te===void 0&&(be===null?te=n.TEXTURE0+W-1:te=be);let Re=Ce[te];Re===void 0&&(Re={type:void 0,texture:void 0},Ce[te]=Re),(Re.type!==U||Re.texture!==pe)&&(be!==te&&(n.activeTexture(te),be=te),n.bindTexture(U,pe||Ee[U]),Re.type=U,Re.texture=pe)}function V(){const U=Ce[be];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function H(){try{n.compressedTexImage2D(...arguments)}catch(U){at("WebGLState:",U)}}function _(){try{n.compressedTexImage3D(...arguments)}catch(U){at("WebGLState:",U)}}function m(){try{n.texSubImage2D(...arguments)}catch(U){at("WebGLState:",U)}}function L(){try{n.texSubImage3D(...arguments)}catch(U){at("WebGLState:",U)}}function j(){try{n.compressedTexSubImage2D(...arguments)}catch(U){at("WebGLState:",U)}}function ne(){try{n.compressedTexSubImage3D(...arguments)}catch(U){at("WebGLState:",U)}}function le(){try{n.texStorage2D(...arguments)}catch(U){at("WebGLState:",U)}}function me(){try{n.texStorage3D(...arguments)}catch(U){at("WebGLState:",U)}}function Z(){try{n.texImage2D(...arguments)}catch(U){at("WebGLState:",U)}}function ae(){try{n.texImage3D(...arguments)}catch(U){at("WebGLState:",U)}}function ge(U){return h[U]!==void 0?h[U]:n.getParameter(U)}function ye(U,pe){h[U]!==pe&&(n.pixelStorei(U,pe),h[U]=pe)}function Me(U){st.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),st.copy(U))}function xe(U){Ge.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),Ge.copy(U))}function He(U,pe){let te=c.get(pe);te===void 0&&(te=new WeakMap,c.set(pe,te));let Re=te.get(U);Re===void 0&&(Re=n.getUniformBlockIndex(pe,U.name),te.set(U,Re))}function We(U,pe){const Re=c.get(pe).get(U);l.get(pe)!==Re&&(n.uniformBlockBinding(pe,Re,U.__bindingPointIndex),l.set(pe,Re))}function Qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},h={},be=null,Ce={},f={},p=new WeakMap,v=[],E=null,g=!1,d=null,S=null,T=null,b=null,D=null,w=null,I=null,x=new Je(0,0,0),R=0,B=!1,P=null,k=null,ee=null,ie=null,N=null,st.set(0,0,n.canvas.width,n.canvas.height),Ge.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:_e,disable:Oe,bindFramebuffer:Be,drawBuffers:ze,useProgram:A,setBlending:re,setMaterial:$,setFlipSided:Q,setCullFace:ue,setLineWidth:he,setPolygonOffset:y,setScissorTest:oe,activeTexture:ve,bindTexture:de,unbindTexture:V,compressedTexImage2D:H,compressedTexImage3D:_,texImage2D:Z,texImage3D:ae,pixelStorei:ye,getParameter:ge,updateUBOMapping:He,uniformBlockBinding:We,texStorage2D:le,texStorage3D:me,texSubImage2D:m,texSubImage3D:L,compressedTexSubImage2D:j,compressedTexSubImage3D:ne,scissor:Me,viewport:xe,reset:Qe}}function YM(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new lt,u=new WeakMap,h=new Set;let f;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(_,m){return v?new OffscreenCanvas(_,m):ar("canvas")}function g(_,m,L){let j=1;const ne=H(_);if((ne.width>L||ne.height>L)&&(j=L/Math.max(ne.width,ne.height)),j<1)if(typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&_ instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&_ instanceof ImageBitmap||typeof VideoFrame<"u"&&_ instanceof VideoFrame){const le=Math.floor(j*ne.width),me=Math.floor(j*ne.height);f===void 0&&(f=E(le,me));const Z=m?E(le,me):f;return Z.width=le,Z.height=me,Z.getContext("2d").drawImage(_,0,0,le,me),Ve("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+le+"x"+me+")."),Z}else return"data"in _&&Ve("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),_;return _}function d(_){return _.generateMipmaps}function S(_){n.generateMipmap(_)}function T(_){return _.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:_.isWebGL3DRenderTarget?n.TEXTURE_3D:_.isWebGLArrayRenderTarget||_.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(_,m,L,j,ne,le=!1){if(_!==null){if(n[_]!==void 0)return n[_];Ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+_+"'")}let me;j&&(me=e.get("EXT_texture_norm16"),me||Ve("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=m;if(m===n.RED&&(L===n.FLOAT&&(Z=n.R32F),L===n.HALF_FLOAT&&(Z=n.R16F),L===n.UNSIGNED_BYTE&&(Z=n.R8),L===n.UNSIGNED_SHORT&&me&&(Z=me.R16_EXT),L===n.SHORT&&me&&(Z=me.R16_SNORM_EXT)),m===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(Z=n.R8UI),L===n.UNSIGNED_SHORT&&(Z=n.R16UI),L===n.UNSIGNED_INT&&(Z=n.R32UI),L===n.BYTE&&(Z=n.R8I),L===n.SHORT&&(Z=n.R16I),L===n.INT&&(Z=n.R32I)),m===n.RG&&(L===n.FLOAT&&(Z=n.RG32F),L===n.HALF_FLOAT&&(Z=n.RG16F),L===n.UNSIGNED_BYTE&&(Z=n.RG8),L===n.UNSIGNED_SHORT&&me&&(Z=me.RG16_EXT),L===n.SHORT&&me&&(Z=me.RG16_SNORM_EXT)),m===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(Z=n.RG8UI),L===n.UNSIGNED_SHORT&&(Z=n.RG16UI),L===n.UNSIGNED_INT&&(Z=n.RG32UI),L===n.BYTE&&(Z=n.RG8I),L===n.SHORT&&(Z=n.RG16I),L===n.INT&&(Z=n.RG32I)),m===n.RGB_INTEGER&&(L===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),L===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),L===n.UNSIGNED_INT&&(Z=n.RGB32UI),L===n.BYTE&&(Z=n.RGB8I),L===n.SHORT&&(Z=n.RGB16I),L===n.INT&&(Z=n.RGB32I)),m===n.RGBA_INTEGER&&(L===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),L===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),L===n.UNSIGNED_INT&&(Z=n.RGBA32UI),L===n.BYTE&&(Z=n.RGBA8I),L===n.SHORT&&(Z=n.RGBA16I),L===n.INT&&(Z=n.RGBA32I)),m===n.RGB&&(L===n.UNSIGNED_SHORT&&me&&(Z=me.RGB16_EXT),L===n.SHORT&&me&&(Z=me.RGB16_SNORM_EXT),L===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),L===n.UNSIGNED_INT_10F_11F_11F_REV&&(Z=n.R11F_G11F_B10F)),m===n.RGBA){const ae=le?fa:tt.getTransfer(ne);L===n.FLOAT&&(Z=n.RGBA32F),L===n.HALF_FLOAT&&(Z=n.RGBA16F),L===n.UNSIGNED_BYTE&&(Z=ae===ft?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT&&me&&(Z=me.RGBA16_EXT),L===n.SHORT&&me&&(Z=me.RGBA16_SNORM_EXT),L===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function D(_,m){let L;return _?m===null||m===zn||m===sr?L=n.DEPTH24_STENCIL8:m===In?L=n.DEPTH32F_STENCIL8:m===ir&&(L=n.DEPTH24_STENCIL8,Ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===zn||m===sr?L=n.DEPTH_COMPONENT24:m===In?L=n.DEPTH_COMPONENT32F:m===ir&&(L=n.DEPTH_COMPONENT16),L}function w(_,m){return d(_)===!0||_.isFramebufferTexture&&_.minFilter!==It&&_.minFilter!==zt?Math.log2(Math.max(m.width,m.height))+1:_.mipmaps!==void 0&&_.mipmaps.length>0?_.mipmaps.length:_.isCompressedTexture&&Array.isArray(_.image)?m.mipmaps.length:1}function I(_){const m=_.target;m.removeEventListener("dispose",I),R(m),m.isVideoTexture&&u.delete(m),m.isHTMLTexture&&h.delete(m)}function x(_){const m=_.target;m.removeEventListener("dispose",x),P(m)}function R(_){const m=i.get(_);if(m.__webglInit===void 0)return;const L=_.source,j=p.get(L);if(j){const ne=j[m.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&B(_),Object.keys(j).length===0&&p.delete(L)}i.remove(_)}function B(_){const m=i.get(_);n.deleteTexture(m.__webglTexture);const L=_.source,j=p.get(L);delete j[m.__cacheKey],a.memory.textures--}function P(_){const m=i.get(_);if(_.depthTexture&&(_.depthTexture.dispose(),i.remove(_.depthTexture)),_.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(m.__webglFramebuffer[j]))for(let ne=0;ne<m.__webglFramebuffer[j].length;ne++)n.deleteFramebuffer(m.__webglFramebuffer[j][ne]);else n.deleteFramebuffer(m.__webglFramebuffer[j]);m.__webglDepthbuffer&&n.deleteRenderbuffer(m.__webglDepthbuffer[j])}else{if(Array.isArray(m.__webglFramebuffer))for(let j=0;j<m.__webglFramebuffer.length;j++)n.deleteFramebuffer(m.__webglFramebuffer[j]);else n.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&n.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&n.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let j=0;j<m.__webglColorRenderbuffer.length;j++)m.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(m.__webglColorRenderbuffer[j]);m.__webglDepthRenderbuffer&&n.deleteRenderbuffer(m.__webglDepthRenderbuffer)}const L=_.textures;for(let j=0,ne=L.length;j<ne;j++){const le=i.get(L[j]);le.__webglTexture&&(n.deleteTexture(le.__webglTexture),a.memory.textures--),i.remove(L[j])}i.remove(_)}let k=0;function ee(){k=0}function ie(){return k}function N(_){k=_}function W(){const _=k;return _>=s.maxTextures&&Ve("WebGLTextures: Trying to use "+_+" texture units while this GPU supports only "+s.maxTextures),k+=1,_}function O(_){const m=[];return m.push(_.wrapS),m.push(_.wrapT),m.push(_.wrapR||0),m.push(_.magFilter),m.push(_.minFilter),m.push(_.anisotropy),m.push(_.internalFormat),m.push(_.format),m.push(_.type),m.push(_.generateMipmaps),m.push(_.premultiplyAlpha),m.push(_.flipY),m.push(_.unpackAlignment),m.push(_.colorSpace),m.join()}function J(_,m){const L=i.get(_);if(_.isVideoTexture&&de(_),_.isRenderTargetTexture===!1&&_.isExternalTexture!==!0&&_.version>0&&L.__version!==_.version){const j=_.image;if(j===null)Ve("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)Ve("WebGLRenderer: Texture marked for update but image is incomplete");else{Oe(L,_,m);return}}else _.isExternalTexture&&(L.__webglTexture=_.sourceTexture?_.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+m)}function ce(_,m){const L=i.get(_);if(_.isRenderTargetTexture===!1&&_.version>0&&L.__version!==_.version){Oe(L,_,m);return}else _.isExternalTexture&&(L.__webglTexture=_.sourceTexture?_.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+m)}function be(_,m){const L=i.get(_);if(_.isRenderTargetTexture===!1&&_.version>0&&L.__version!==_.version){Oe(L,_,m);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+m)}function Ce(_,m){const L=i.get(_);if(_.isCubeDepthTexture!==!0&&_.version>0&&L.__version!==_.version){Be(L,_,m);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+m)}const Pe={[Wo]:n.REPEAT,[Jn]:n.CLAMP_TO_EDGE,[Xo]:n.MIRRORED_REPEAT},Ye={[It]:n.NEAREST,[rg]:n.NEAREST_MIPMAP_NEAREST,[_r]:n.NEAREST_MIPMAP_LINEAR,[zt]:n.LINEAR,[ka]:n.LINEAR_MIPMAP_NEAREST,[zi]:n.LINEAR_MIPMAP_LINEAR},st={[lg]:n.NEVER,[dg]:n.ALWAYS,[cg]:n.LESS,[tc]:n.LEQUAL,[ug]:n.EQUAL,[nc]:n.GEQUAL,[fg]:n.GREATER,[hg]:n.NOTEQUAL};function Ge(_,m){if(m.type===In&&e.has("OES_texture_float_linear")===!1&&(m.magFilter===zt||m.magFilter===ka||m.magFilter===_r||m.magFilter===zi||m.minFilter===zt||m.minFilter===ka||m.minFilter===_r||m.minFilter===zi)&&Ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(_,n.TEXTURE_WRAP_S,Pe[m.wrapS]),n.texParameteri(_,n.TEXTURE_WRAP_T,Pe[m.wrapT]),(_===n.TEXTURE_3D||_===n.TEXTURE_2D_ARRAY)&&n.texParameteri(_,n.TEXTURE_WRAP_R,Pe[m.wrapR]),n.texParameteri(_,n.TEXTURE_MAG_FILTER,Ye[m.magFilter]),n.texParameteri(_,n.TEXTURE_MIN_FILTER,Ye[m.minFilter]),m.compareFunction&&(n.texParameteri(_,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(_,n.TEXTURE_COMPARE_FUNC,st[m.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===It||m.minFilter!==_r&&m.minFilter!==zi||m.type===In&&e.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||i.get(m).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");n.texParameterf(_,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,s.getMaxAnisotropy())),i.get(m).__currentAnisotropy=m.anisotropy}}}function se(_,m){let L=!1;_.__webglInit===void 0&&(_.__webglInit=!0,m.addEventListener("dispose",I));const j=m.source;let ne=p.get(j);ne===void 0&&(ne={},p.set(j,ne));const le=O(m);if(le!==_.__cacheKey){ne[le]===void 0&&(ne[le]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,L=!0),ne[le].usedTimes++;const me=ne[_.__cacheKey];me!==void 0&&(ne[_.__cacheKey].usedTimes--,me.usedTimes===0&&B(m)),_.__cacheKey=le,_.__webglTexture=ne[le].texture}return L}function Ee(_,m,L){return Math.floor(Math.floor(_/L)/m)}function _e(_,m,L,j){const le=_.updateRanges;if(le.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,m.width,m.height,L,j,m.data);else{le.sort((ye,Me)=>ye.start-Me.start);let me=0;for(let ye=1;ye<le.length;ye++){const Me=le[me],xe=le[ye],He=Me.start+Me.count,We=Ee(xe.start,m.width,4),Qe=Ee(Me.start,m.width,4);xe.start<=He+1&&We===Qe&&Ee(xe.start+xe.count-1,m.width,4)===We?Me.count=Math.max(Me.count,xe.start+xe.count-Me.start):(++me,le[me]=xe)}le.length=me+1;const Z=t.getParameter(n.UNPACK_ROW_LENGTH),ae=t.getParameter(n.UNPACK_SKIP_PIXELS),ge=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,m.width);for(let ye=0,Me=le.length;ye<Me;ye++){const xe=le[ye],He=Math.floor(xe.start/4),We=Math.ceil(xe.count/4),Qe=He%m.width,U=Math.floor(He/m.width),pe=We,te=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Qe),t.pixelStorei(n.UNPACK_SKIP_ROWS,U),t.texSubImage2D(n.TEXTURE_2D,0,Qe,U,pe,te,L,j,m.data)}_.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Z),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ae),t.pixelStorei(n.UNPACK_SKIP_ROWS,ge)}}function Oe(_,m,L){let j=n.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),m.isData3DTexture&&(j=n.TEXTURE_3D);const ne=se(_,m),le=m.source;t.bindTexture(j,_.__webglTexture,n.TEXTURE0+L);const me=i.get(le);if(le.version!==me.__version||ne===!0){if(t.activeTexture(n.TEXTURE0+L),(typeof ImageBitmap<"u"&&m.image instanceof ImageBitmap)===!1){const te=tt.getPrimaries(tt.workingColorSpace),Re=m.colorSpace===Mi?null:tt.getPrimaries(m.colorSpace),Se=m.colorSpace===Mi||te===Re?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,m.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se)}t.pixelStorei(n.UNPACK_ALIGNMENT,m.unpackAlignment);let ae=g(m.image,!1,s.maxTextureSize);ae=V(m,ae);const ge=r.convert(m.format,m.colorSpace),ye=r.convert(m.type);let Me=b(m.internalFormat,ge,ye,m.normalized,m.colorSpace,m.isVideoTexture);Ge(j,m);let xe;const He=m.mipmaps,We=m.isVideoTexture!==!0,Qe=me.__version===void 0||ne===!0,U=le.dataReady,pe=w(m,ae);if(m.isDepthTexture)Me=D(m.format===Vi,m.type),Qe&&(We?t.texStorage2D(n.TEXTURE_2D,1,Me,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,Me,ae.width,ae.height,0,ge,ye,null));else if(m.isDataTexture)if(He.length>0){We&&Qe&&t.texStorage2D(n.TEXTURE_2D,pe,Me,He[0].width,He[0].height);for(let te=0,Re=He.length;te<Re;te++)xe=He[te],We?U&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,xe.width,xe.height,ge,ye,xe.data):t.texImage2D(n.TEXTURE_2D,te,Me,xe.width,xe.height,0,ge,ye,xe.data);m.generateMipmaps=!1}else We?(Qe&&t.texStorage2D(n.TEXTURE_2D,pe,Me,ae.width,ae.height),U&&_e(m,ae,ge,ye)):t.texImage2D(n.TEXTURE_2D,0,Me,ae.width,ae.height,0,ge,ye,ae.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){We&&Qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,Me,He[0].width,He[0].height,ae.depth);for(let te=0,Re=He.length;te<Re;te++)if(xe=He[te],m.format!==Sn)if(ge!==null)if(We){if(U)if(m.layerUpdates.size>0){const Se=Pu(xe.width,xe.height,m.format,m.type);for(const fe of m.layerUpdates){const Ie=xe.data.subarray(fe*Se/xe.data.BYTES_PER_ELEMENT,(fe+1)*Se/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,fe,xe.width,xe.height,1,ge,Ie)}m.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,xe.width,xe.height,ae.depth,ge,xe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,te,Me,xe.width,xe.height,ae.depth,0,xe.data,0,0);else Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?U&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,xe.width,xe.height,ae.depth,ge,ye,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,te,Me,xe.width,xe.height,ae.depth,0,ge,ye,xe.data)}else{We&&Qe&&t.texStorage2D(n.TEXTURE_2D,pe,Me,He[0].width,He[0].height);for(let te=0,Re=He.length;te<Re;te++)xe=He[te],m.format!==Sn?ge!==null?We?U&&t.compressedTexSubImage2D(n.TEXTURE_2D,te,0,0,xe.width,xe.height,ge,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,te,Me,xe.width,xe.height,0,xe.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?U&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,xe.width,xe.height,ge,ye,xe.data):t.texImage2D(n.TEXTURE_2D,te,Me,xe.width,xe.height,0,ge,ye,xe.data)}else if(m.isDataArrayTexture)if(We){if(Qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,Me,ae.width,ae.height,ae.depth),U)if(m.layerUpdates.size>0){const te=Pu(ae.width,ae.height,m.format,m.type);for(const Re of m.layerUpdates){const Se=ae.data.subarray(Re*te/ae.data.BYTES_PER_ELEMENT,(Re+1)*te/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Re,ae.width,ae.height,1,ge,ye,Se)}m.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,ge,ye,ae.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Me,ae.width,ae.height,ae.depth,0,ge,ye,ae.data);else if(m.isData3DTexture)We?(Qe&&t.texStorage3D(n.TEXTURE_3D,pe,Me,ae.width,ae.height,ae.depth),U&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,ge,ye,ae.data)):t.texImage3D(n.TEXTURE_3D,0,Me,ae.width,ae.height,ae.depth,0,ge,ye,ae.data);else if(m.isFramebufferTexture){if(Qe)if(We)t.texStorage2D(n.TEXTURE_2D,pe,Me,ae.width,ae.height);else{let te=ae.width,Re=ae.height;for(let Se=0;Se<pe;Se++)t.texImage2D(n.TEXTURE_2D,Se,Me,te,Re,0,ge,ye,null),te>>=1,Re>>=1}}else if(m.isHTMLTexture){if("texElementImage2D"in n){const te=n.canvas;if(te.hasAttribute("layoutsubtree")||te.setAttribute("layoutsubtree","true"),ae.parentNode!==te){te.appendChild(ae),h.add(m),te.onpaint=ke=>{const yt=ke.changedElements;for(const ht of h)yt.includes(ht.image)&&(ht.needsUpdate=!0)},te.requestPaint();return}const Re=0,Se=n.RGBA,fe=n.RGBA,Ie=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,Re,Se,fe,Ie,ae),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(He.length>0){if(We&&Qe){const te=H(He[0]);t.texStorage2D(n.TEXTURE_2D,pe,Me,te.width,te.height)}for(let te=0,Re=He.length;te<Re;te++)xe=He[te],We?U&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,ge,ye,xe):t.texImage2D(n.TEXTURE_2D,te,Me,ge,ye,xe);m.generateMipmaps=!1}else if(We){if(Qe){const te=H(ae);t.texStorage2D(n.TEXTURE_2D,pe,Me,te.width,te.height)}U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge,ye,ae)}else t.texImage2D(n.TEXTURE_2D,0,Me,ge,ye,ae);d(m)&&S(j),me.__version=le.version,m.onUpdate&&m.onUpdate(m)}_.__version=m.version}function Be(_,m,L){if(m.image.length!==6)return;const j=se(_,m),ne=m.source;t.bindTexture(n.TEXTURE_CUBE_MAP,_.__webglTexture,n.TEXTURE0+L);const le=i.get(ne);if(ne.version!==le.__version||j===!0){t.activeTexture(n.TEXTURE0+L);const me=tt.getPrimaries(tt.workingColorSpace),Z=m.colorSpace===Mi?null:tt.getPrimaries(m.colorSpace),ae=m.colorSpace===Mi||me===Z?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,m.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,m.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);const ge=m.isCompressedTexture||m.image[0].isCompressedTexture,ye=m.image[0]&&m.image[0].isDataTexture,Me=[];for(let fe=0;fe<6;fe++)!ge&&!ye?Me[fe]=g(m.image[fe],!0,s.maxCubemapSize):Me[fe]=ye?m.image[fe].image:m.image[fe],Me[fe]=V(m,Me[fe]);const xe=Me[0],He=r.convert(m.format,m.colorSpace),We=r.convert(m.type),Qe=b(m.internalFormat,He,We,m.normalized,m.colorSpace),U=m.isVideoTexture!==!0,pe=le.__version===void 0||j===!0,te=ne.dataReady;let Re=w(m,xe);Ge(n.TEXTURE_CUBE_MAP,m);let Se;if(ge){U&&pe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,Qe,xe.width,xe.height);for(let fe=0;fe<6;fe++){Se=Me[fe].mipmaps;for(let Ie=0;Ie<Se.length;Ie++){const ke=Se[Ie];m.format!==Sn?He!==null?U?te&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ie,0,0,ke.width,ke.height,He,ke.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ie,Qe,ke.width,ke.height,0,ke.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ie,0,0,ke.width,ke.height,He,We,ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ie,Qe,ke.width,ke.height,0,He,We,ke.data)}}}else{if(Se=m.mipmaps,U&&pe){Se.length>0&&Re++;const fe=H(Me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,Qe,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(ye){U?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Me[fe].width,Me[fe].height,He,We,Me[fe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,Qe,Me[fe].width,Me[fe].height,0,He,We,Me[fe].data);for(let Ie=0;Ie<Se.length;Ie++){const yt=Se[Ie].image[fe].image;U?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ie+1,0,0,yt.width,yt.height,He,We,yt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ie+1,Qe,yt.width,yt.height,0,He,We,yt.data)}}else{U?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,He,We,Me[fe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,Qe,He,We,Me[fe]);for(let Ie=0;Ie<Se.length;Ie++){const ke=Se[Ie];U?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ie+1,0,0,He,We,ke.image[fe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ie+1,Qe,He,We,ke.image[fe])}}}d(m)&&S(n.TEXTURE_CUBE_MAP),le.__version=ne.version,m.onUpdate&&m.onUpdate(m)}_.__version=m.version}function ze(_,m,L,j,ne,le){const me=r.convert(L.format,L.colorSpace),Z=r.convert(L.type),ae=b(L.internalFormat,me,Z,L.normalized,L.colorSpace),ge=i.get(m),ye=i.get(L);if(ye.__renderTarget=m,!ge.__hasExternalTextures){const Me=Math.max(1,m.width>>le),xe=Math.max(1,m.height>>le);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,le,ae,Me,xe,m.depth,0,me,Z,null):t.texImage2D(ne,le,ae,Me,xe,0,me,Z,null)}t.bindFramebuffer(n.FRAMEBUFFER,_),ve(m)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,ne,ye.__webglTexture,0,oe(m)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,ne,ye.__webglTexture,le),t.bindFramebuffer(n.FRAMEBUFFER,null)}function A(_,m,L){if(n.bindRenderbuffer(n.RENDERBUFFER,_),m.depthBuffer){const j=m.depthTexture,ne=j&&j.isDepthTexture?j.type:null,le=D(m.stencilBuffer,ne),me=m.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ve(m)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe(m),le,m.width,m.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe(m),le,m.width,m.height):n.renderbufferStorage(n.RENDERBUFFER,le,m.width,m.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,me,n.RENDERBUFFER,_)}else{const j=m.textures;for(let ne=0;ne<j.length;ne++){const le=j[ne],me=r.convert(le.format,le.colorSpace),Z=r.convert(le.type),ae=b(le.internalFormat,me,Z,le.normalized,le.colorSpace);ve(m)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe(m),ae,m.width,m.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe(m),ae,m.width,m.height):n.renderbufferStorage(n.RENDERBUFFER,ae,m.width,m.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function C(_,m,L){const j=m.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,_),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=i.get(m.depthTexture);if(ne.__renderTarget=m,(!ne.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),j){if(ne.__webglInit===void 0&&(ne.__webglInit=!0,m.depthTexture.addEventListener("dispose",I)),ne.__webglTexture===void 0){ne.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),Ge(n.TEXTURE_CUBE_MAP,m.depthTexture);const ge=r.convert(m.depthTexture.format),ye=r.convert(m.depthTexture.type);let Me;m.depthTexture.format===ri?Me=n.DEPTH_COMPONENT24:m.depthTexture.format===Vi&&(Me=n.DEPTH24_STENCIL8);for(let xe=0;xe<6;xe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,Me,m.width,m.height,0,ge,ye,null)}}else J(m.depthTexture,0);const le=ne.__webglTexture,me=oe(m),Z=j?n.TEXTURE_CUBE_MAP_POSITIVE_X+L:n.TEXTURE_2D,ae=m.depthTexture.format===Vi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(m.depthTexture.format===ri)ve(m)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ae,Z,le,0,me):n.framebufferTexture2D(n.FRAMEBUFFER,ae,Z,le,0);else if(m.depthTexture.format===Vi)ve(m)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ae,Z,le,0,me):n.framebufferTexture2D(n.FRAMEBUFFER,ae,Z,le,0);else throw new Error("Unknown depthTexture format")}function G(_){const m=i.get(_),L=_.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==_.depthTexture){const j=_.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),j){const ne=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,j.removeEventListener("dispose",ne)};j.addEventListener("dispose",ne),m.__depthDisposeCallback=ne}m.__boundDepthTexture=j}if(_.depthTexture&&!m.__autoAllocateDepthBuffer)if(L)for(let j=0;j<6;j++)C(m.__webglFramebuffer[j],_,j);else{const j=_.texture.mipmaps;j&&j.length>0?C(m.__webglFramebuffer[0],_,0):C(m.__webglFramebuffer,_,0)}else if(L){m.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer[j]),m.__webglDepthbuffer[j]===void 0)m.__webglDepthbuffer[j]=n.createRenderbuffer(),A(m.__webglDepthbuffer[j],_,!1);else{const ne=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=m.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,le),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,le)}}else{const j=_.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=n.createRenderbuffer(),A(m.__webglDepthbuffer,_,!1);else{const ne=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=m.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,le),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,le)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function re(_,m,L){const j=i.get(_);m!==void 0&&ze(j.__webglFramebuffer,_,_.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&G(_)}function $(_){const m=_.texture,L=i.get(_),j=i.get(m);_.addEventListener("dispose",x);const ne=_.textures,le=_.isWebGLCubeRenderTarget===!0,me=ne.length>1;if(me||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=m.version,a.memory.textures++),le){L.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(m.mipmaps&&m.mipmaps.length>0){L.__webglFramebuffer[Z]=[];for(let ae=0;ae<m.mipmaps.length;ae++)L.__webglFramebuffer[Z][ae]=n.createFramebuffer()}else L.__webglFramebuffer[Z]=n.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){L.__webglFramebuffer=[];for(let Z=0;Z<m.mipmaps.length;Z++)L.__webglFramebuffer[Z]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(me)for(let Z=0,ae=ne.length;Z<ae;Z++){const ge=i.get(ne[Z]);ge.__webglTexture===void 0&&(ge.__webglTexture=n.createTexture(),a.memory.textures++)}if(_.samples>0&&ve(_)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let Z=0;Z<ne.length;Z++){const ae=ne[Z];L.__webglColorRenderbuffer[Z]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[Z]);const ge=r.convert(ae.format,ae.colorSpace),ye=r.convert(ae.type),Me=b(ae.internalFormat,ge,ye,ae.normalized,ae.colorSpace,_.isXRRenderTarget===!0),xe=oe(_);n.renderbufferStorageMultisample(n.RENDERBUFFER,xe,Me,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Z,n.RENDERBUFFER,L.__webglColorRenderbuffer[Z])}n.bindRenderbuffer(n.RENDERBUFFER,null),_.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),A(L.__webglDepthRenderbuffer,_,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(le){t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),Ge(n.TEXTURE_CUBE_MAP,m);for(let Z=0;Z<6;Z++)if(m.mipmaps&&m.mipmaps.length>0)for(let ae=0;ae<m.mipmaps.length;ae++)ze(L.__webglFramebuffer[Z][ae],_,m,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae);else ze(L.__webglFramebuffer[Z],_,m,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);d(m)&&S(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let Z=0,ae=ne.length;Z<ae;Z++){const ge=ne[Z],ye=i.get(ge);let Me=n.TEXTURE_2D;(_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(Me=_.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Me,ye.__webglTexture),Ge(Me,ge),ze(L.__webglFramebuffer,_,ge,n.COLOR_ATTACHMENT0+Z,Me,0),d(ge)&&S(Me)}t.unbindTexture()}else{let Z=n.TEXTURE_2D;if((_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(Z=_.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Z,j.__webglTexture),Ge(Z,m),m.mipmaps&&m.mipmaps.length>0)for(let ae=0;ae<m.mipmaps.length;ae++)ze(L.__webglFramebuffer[ae],_,m,n.COLOR_ATTACHMENT0,Z,ae);else ze(L.__webglFramebuffer,_,m,n.COLOR_ATTACHMENT0,Z,0);d(m)&&S(Z),t.unbindTexture()}_.depthBuffer&&G(_)}function Q(_){const m=_.textures;for(let L=0,j=m.length;L<j;L++){const ne=m[L];if(d(ne)){const le=T(_),me=i.get(ne).__webglTexture;t.bindTexture(le,me),S(le),t.unbindTexture()}}}const ue=[],he=[];function y(_){if(_.samples>0){if(ve(_)===!1){const m=_.textures,L=_.width,j=_.height;let ne=n.COLOR_BUFFER_BIT;const le=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=i.get(_),Z=m.length>1;if(Z)for(let ge=0;ge<m.length;ge++)t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer);const ae=_.texture.mipmaps;ae&&ae.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let ge=0;ge<m.length;ge++){if(_.resolveDepthBuffer&&(_.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),_.stencilBuffer&&_.resolveStencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),Z){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,me.__webglColorRenderbuffer[ge]);const ye=i.get(m[ge]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ye,0)}n.blitFramebuffer(0,0,L,j,0,0,L,j,ne,n.NEAREST),l===!0&&(ue.length=0,he.length=0,ue.push(n.COLOR_ATTACHMENT0+ge),_.depthBuffer&&_.resolveDepthBuffer===!1&&(ue.push(le),he.push(le),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,he)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ue))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Z)for(let ge=0;ge<m.length;ge++){t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,me.__webglColorRenderbuffer[ge]);const ye=i.get(m[ge]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,ye,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(_.depthBuffer&&_.resolveDepthBuffer===!1&&l){const m=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[m])}}}function oe(_){return Math.min(s.maxSamples,_.samples)}function ve(_){const m=i.get(_);return _.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function de(_){const m=a.render.frame;u.get(_)!==m&&(u.set(_,m),_.update())}function V(_,m){const L=_.colorSpace,j=_.format,ne=_.type;return _.isCompressedTexture===!0||_.isVideoTexture===!0||L!==ua&&L!==Mi&&(tt.getTransfer(L)===ft?(j!==Sn||ne!==sn)&&Ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):at("WebGLTextures: Unsupported texture color space:",L)),m}function H(_){return typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement?(c.width=_.naturalWidth||_.width,c.height=_.naturalHeight||_.height):typeof VideoFrame<"u"&&_ instanceof VideoFrame?(c.width=_.displayWidth,c.height=_.displayHeight):(c.width=_.width,c.height=_.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=ee,this.getTextureUnits=ie,this.setTextureUnits=N,this.setTexture2D=J,this.setTexture2DArray=ce,this.setTexture3D=be,this.setTextureCube=Ce,this.rebindTextures=re,this.setupRenderTarget=$,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=y,this.setupDepthRenderbuffer=G,this.setupFrameBufferTexture=ze,this.useMultisampledRTT=ve,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function $M(n,e){function t(i,s=Mi){let r;const a=tt.getTransfer(s);if(i===sn)return n.UNSIGNED_BYTE;if(i===jl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Zl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===gh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===_h)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===ph)return n.BYTE;if(i===mh)return n.SHORT;if(i===ir)return n.UNSIGNED_SHORT;if(i===Kl)return n.INT;if(i===zn)return n.UNSIGNED_INT;if(i===In)return n.FLOAT;if(i===si)return n.HALF_FLOAT;if(i===vh)return n.ALPHA;if(i===xh)return n.RGB;if(i===Sn)return n.RGBA;if(i===ri)return n.DEPTH_COMPONENT;if(i===Vi)return n.DEPTH_STENCIL;if(i===Mh)return n.RED;if(i===Jl)return n.RED_INTEGER;if(i===Wi)return n.RG;if(i===Ql)return n.RG_INTEGER;if(i===ec)return n.RGBA_INTEGER;if(i===Kr||i===jr||i===Zr||i===Jr)if(a===ft)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Kr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Kr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===jr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Zr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Jr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===qo||i===Yo||i===$o||i===Ko)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===qo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Yo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===$o)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ko)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===jo||i===Zo||i===Jo||i===Qo||i===el||i===oa||i===tl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===jo||i===Zo)return a===ft?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Jo)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Qo)return r.COMPRESSED_R11_EAC;if(i===el)return r.COMPRESSED_SIGNED_R11_EAC;if(i===oa)return r.COMPRESSED_RG11_EAC;if(i===tl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===nl||i===il||i===sl||i===rl||i===al||i===ol||i===ll||i===cl||i===ul||i===fl||i===hl||i===dl||i===pl||i===ml)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===nl)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===il)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===sl)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===rl)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===al)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ol)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ll)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===cl)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ul)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===fl)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===hl)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===dl)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===pl)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ml)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===gl||i===_l||i===vl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===gl)return a===ft?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===_l)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===vl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===xl||i===Ml||i===la||i===Sl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===xl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ml)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===la)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Sl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===sr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const KM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ZM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Dh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Vn({vertexShader:KM,fragmentShader:jM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new mn(new Ta(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class JM extends Xi{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,v=null;const E=typeof XRWebGLBinding<"u",g=new ZM,d={},S=t.getContextAttributes();let T=null,b=null;const D=[],w=[],I=new lt;let x=null;const R=new tn;R.viewport=new Et;const B=new tn;B.viewport=new Et;const P=[R,B],k=new l_;let ee=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let Ee=D[se];return Ee===void 0&&(Ee=new Za,D[se]=Ee),Ee.getTargetRaySpace()},this.getControllerGrip=function(se){let Ee=D[se];return Ee===void 0&&(Ee=new Za,D[se]=Ee),Ee.getGripSpace()},this.getHand=function(se){let Ee=D[se];return Ee===void 0&&(Ee=new Za,D[se]=Ee),Ee.getHandSpace()};function N(se){const Ee=w.indexOf(se.inputSource);if(Ee===-1)return;const _e=D[Ee];_e!==void 0&&(_e.update(se.inputSource,se.frame,c||a),_e.dispatchEvent({type:se.type,data:se.inputSource}))}function W(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",O);for(let se=0;se<D.length;se++){const Ee=w[se];Ee!==null&&(w[se]=null,D[se].disconnect(Ee))}ee=null,ie=null,g.reset();for(const se in d)delete d[se];e.setRenderTarget(T),p=null,f=null,h=null,s=null,b=null,Ge.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){r=se,i.isPresenting===!0&&Ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){o=se,i.isPresenting===!0&&Ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(se){c=se},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&E&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(se){if(s=se,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",W),s.addEventListener("inputsourceschange",O),S.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(I),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Oe=null,Be=null;S.depth&&(Be=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=S.stencil?Vi:ri,Oe=S.stencil?sr:zn);const ze={colorFormat:t.RGBA8,depthFormat:Be,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(ze),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new On(f.textureWidth,f.textureHeight,{format:Sn,type:sn,depthTexture:new Ts(f.textureWidth,f.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const _e={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,_e),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new On(p.framebufferWidth,p.framebufferHeight,{format:Sn,type:sn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ge.setContext(s),Ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function O(se){for(let Ee=0;Ee<se.removed.length;Ee++){const _e=se.removed[Ee],Oe=w.indexOf(_e);Oe>=0&&(w[Oe]=null,D[Oe].disconnect(_e))}for(let Ee=0;Ee<se.added.length;Ee++){const _e=se.added[Ee];let Oe=w.indexOf(_e);if(Oe===-1){for(let ze=0;ze<D.length;ze++)if(ze>=w.length){w.push(_e),Oe=ze;break}else if(w[ze]===null){w[ze]=_e,Oe=ze;break}if(Oe===-1)break}const Be=D[Oe];Be&&Be.connect(_e)}}const J=new q,ce=new q;function be(se,Ee,_e){J.setFromMatrixPosition(Ee.matrixWorld),ce.setFromMatrixPosition(_e.matrixWorld);const Oe=J.distanceTo(ce),Be=Ee.projectionMatrix.elements,ze=_e.projectionMatrix.elements,A=Be[14]/(Be[10]-1),C=Be[14]/(Be[10]+1),G=(Be[9]+1)/Be[5],re=(Be[9]-1)/Be[5],$=(Be[8]-1)/Be[0],Q=(ze[8]+1)/ze[0],ue=A*$,he=A*Q,y=Oe/(-$+Q),oe=y*-$;if(Ee.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(oe),se.translateZ(y),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),Be[10]===-1)se.projectionMatrix.copy(Ee.projectionMatrix),se.projectionMatrixInverse.copy(Ee.projectionMatrixInverse);else{const ve=A+y,de=C+y,V=ue-oe,H=he+(Oe-oe),_=G*C/de*ve,m=re*C/de*ve;se.projectionMatrix.makePerspective(V,H,_,m,ve,de),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function Ce(se,Ee){Ee===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(Ee.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(s===null)return;let Ee=se.near,_e=se.far;g.texture!==null&&(g.depthNear>0&&(Ee=g.depthNear),g.depthFar>0&&(_e=g.depthFar)),k.near=B.near=R.near=Ee,k.far=B.far=R.far=_e,(ee!==k.near||ie!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),ee=k.near,ie=k.far),k.layers.mask=se.layers.mask|6,R.layers.mask=k.layers.mask&-5,B.layers.mask=k.layers.mask&-3;const Oe=se.parent,Be=k.cameras;Ce(k,Oe);for(let ze=0;ze<Be.length;ze++)Ce(Be[ze],Oe);Be.length===2?be(k,R,B):k.projectionMatrix.copy(R.projectionMatrix),Pe(se,k,Oe)};function Pe(se,Ee,_e){_e===null?se.matrix.copy(Ee.matrixWorld):(se.matrix.copy(_e.matrixWorld),se.matrix.invert(),se.matrix.multiply(Ee.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(Ee.projectionMatrix),se.projectionMatrixInverse.copy(Ee.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=bl*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(se){l=se,f!==null&&(f.fixedFoveation=se),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=se)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(k)},this.getCameraTexture=function(se){return d[se]};let Ye=null;function st(se,Ee){if(u=Ee.getViewerPose(c||a),v=Ee,u!==null){const _e=u.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let Oe=!1;_e.length!==k.cameras.length&&(k.cameras.length=0,Oe=!0);for(let C=0;C<_e.length;C++){const G=_e[C];let re=null;if(p!==null)re=p.getViewport(G);else{const Q=h.getViewSubImage(f,G);re=Q.viewport,C===0&&(e.setRenderTargetTextures(b,Q.colorTexture,Q.depthStencilTexture),e.setRenderTarget(b))}let $=P[C];$===void 0&&($=new tn,$.layers.enable(C),$.viewport=new Et,P[C]=$),$.matrix.fromArray(G.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(G.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(re.x,re.y,re.width,re.height),C===0&&(k.matrix.copy($.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Oe===!0&&k.cameras.push($)}const Be=s.enabledFeatures;if(Be&&Be.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&E){h=i.getBinding();const C=h.getDepthInformation(_e[0]);C&&C.isValid&&C.texture&&g.init(C,s.renderState)}if(Be&&Be.includes("camera-access")&&E){e.state.unbindTexture(),h=i.getBinding();for(let C=0;C<_e.length;C++){const G=_e[C].camera;if(G){let re=d[G];re||(re=new Dh,d[G]=re);const $=h.getCameraImage(G);re.sourceTexture=$}}}}for(let _e=0;_e<D.length;_e++){const Oe=w[_e],Be=D[_e];Oe!==null&&Be!==void 0&&Be.update(Oe,Ee,c||a)}Ye&&Ye(se,Ee),Ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Ee}),v=null}const Ge=new Nh;Ge.setAnimationLoop(st),this.setAnimationLoop=function(se){Ye=se},this.dispose=function(){}}}const QM=new bt,Gh=new Xe;Gh.set(-1,0,0,0,1,0,0,0,1);function eS(n,e){function t(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,Lh(n)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function s(g,d,S,T,b){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(g,d):d.isMeshLambertMaterial?(r(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(g,d),h(g,d)):d.isMeshPhongMaterial?(r(g,d),u(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(g,d),f(g,d),d.isMeshPhysicalMaterial&&p(g,d,b)):d.isMeshMatcapMaterial?(r(g,d),v(g,d)):d.isMeshDepthMaterial?r(g,d):d.isMeshDistanceMaterial?(r(g,d),E(g,d)):d.isMeshNormalMaterial?r(g,d):d.isLineBasicMaterial?(a(g,d),d.isLineDashedMaterial&&o(g,d)):d.isPointsMaterial?l(g,d,S,T):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,t(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===jt&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,t(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===jt&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,t(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,t(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const S=e.get(d),T=S.envMap,b=S.envMapRotation;T&&(g.envMap.value=T,g.envMapRotation.value.setFromMatrix4(QM.makeRotationFromEuler(b)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Gh),g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,g.aoMapTransform))}function a(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform))}function o(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,S,T){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*S,g.scale.value=T*.5,d.map&&(g.map.value=d.map,t(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function u(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function h(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function f(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function p(g,d,S){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===jt&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,d){d.matcap&&(g.matcap.value=d.matcap)}function E(g,d){const S=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function tS(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,T){const b=T.program;i.uniformBlockBinding(S,b)}function c(S,T){let b=s[S.id];b===void 0&&(v(S),b=u(S),s[S.id]=b,S.addEventListener("dispose",g));const D=T.program;i.updateUBOMapping(S,D);const w=e.render.frame;r[S.id]!==w&&(f(S),r[S.id]=w)}function u(S){const T=h();S.__bindingPointIndex=T;const b=n.createBuffer(),D=S.__size,w=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,D,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,b),b}function h(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return at("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const T=s[S.id],b=S.uniforms,D=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let w=0,I=b.length;w<I;w++){const x=Array.isArray(b[w])?b[w]:[b[w]];for(let R=0,B=x.length;R<B;R++){const P=x[R];if(p(P,w,R,D)===!0){const k=P.__offset,ee=Array.isArray(P.value)?P.value:[P.value];let ie=0;for(let N=0;N<ee.length;N++){const W=ee[N],O=E(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,k+ie,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):ArrayBuffer.isView(W)?P.__data.set(new W.constructor(W.buffer,W.byteOffset,P.__data.length)):(W.toArray(P.__data,ie),ie+=O.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(S,T,b,D){const w=S.value,I=T+"_"+b;if(D[I]===void 0)return typeof w=="number"||typeof w=="boolean"?D[I]=w:ArrayBuffer.isView(w)?D[I]=w.slice():D[I]=w.clone(),!0;{const x=D[I];if(typeof w=="number"||typeof w=="boolean"){if(x!==w)return D[I]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(x.equals(w)===!1)return x.copy(w),!0}}return!1}function v(S){const T=S.uniforms;let b=0;const D=16;for(let I=0,x=T.length;I<x;I++){const R=Array.isArray(T[I])?T[I]:[T[I]];for(let B=0,P=R.length;B<P;B++){const k=R[B],ee=Array.isArray(k.value)?k.value:[k.value];for(let ie=0,N=ee.length;ie<N;ie++){const W=ee[ie],O=E(W),J=b%D,ce=J%O.boundary,be=J+ce;b+=ce,be!==0&&D-be<O.storage&&(b+=D-be),k.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=b,b+=O.storage}}}const w=b%D;return w>0&&(b+=D-w),S.__size=b,S.__cache={},this}function E(S){const T={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(T.boundary=4,T.storage=4):S.isVector2?(T.boundary=8,T.storage=8):S.isVector3||S.isColor?(T.boundary=16,T.storage=12):S.isVector4?(T.boundary=16,T.storage=16):S.isMatrix3?(T.boundary=48,T.storage=48):S.isMatrix4?(T.boundary=64,T.storage=64):S.isTexture?Ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(T.boundary=16,T.storage=S.byteLength):Ve("WebGLRenderer: Unsupported uniform value type.",S),T}function g(S){const T=S.target;T.removeEventListener("dispose",g);const b=a.indexOf(T.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function d(){for(const S in s)n.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:d}}const nS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Cn=null;function iS(){return Cn===null&&(Cn=new Bg(nS,16,16,Wi,si),Cn.name="DFG_LUT",Cn.minFilter=zt,Cn.magFilter=zt,Cn.wrapS=Jn,Cn.wrapT=Jn,Cn.generateMipmaps=!1,Cn.needsUpdate=!0),Cn}class sS{constructor(e={}){const{canvas:t=mg(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:p=sn}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;const E=p,g=new Set([ec,Ql,Jl]),d=new Set([sn,zn,ir,sr,jl,Zl]),S=new Uint32Array(4),T=new Int32Array(4),b=new q;let D=null,w=null;const I=[],x=[];let R=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const B=this;let P=!1,k=null;this._outputColorSpace=fn;let ee=0,ie=0,N=null,W=-1,O=null;const J=new Et,ce=new Et;let be=null;const Ce=new Je(0);let Pe=0,Ye=t.width,st=t.height,Ge=1,se=null,Ee=null;const _e=new Et(0,0,Ye,st),Oe=new Et(0,0,Ye,st);let Be=!1;const ze=new sc;let A=!1,C=!1;const G=new bt,re=new q,$=new Et,Q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ue=!1;function he(){return N===null?Ge:1}let y=i;function oe(M,F){return t.getContext(M,F)}try{const M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Yl}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",ke,!1),y===null){const F="webgl2";if(y=oe(F,M),y===null)throw oe(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw at("WebGLRenderer: "+M.message),M}let ve,de,V,H,_,m,L,j,ne,le,me,Z,ae,ge,ye,Me,xe,He,We,Qe,U,pe,te;function Re(){ve=new ix(y),ve.init(),U=new $M(y,ve),de=new Kv(y,ve,e,U),V=new qM(y,ve),de.reversedDepthBuffer&&f&&V.buffers.depth.setReversed(!0),H=new ax(y),_=new LM,m=new YM(y,ve,V,_,de,U,H),L=new nx(B),j=new u_(y),pe=new Yv(y,j),ne=new sx(y,j,H,pe),le=new lx(y,ne,j,pe,H),He=new ox(y,de,m),ye=new jv(_),me=new DM(B,L,ve,de,pe,ye),Z=new eS(B,_),ae=new UM,ge=new VM(ve),xe=new qv(B,L,V,le,v,l),Me=new XM(B,le,de),te=new tS(y,H,de,V),We=new $v(y,ve,H),Qe=new rx(y,ve,H),H.programs=me.programs,B.capabilities=de,B.extensions=ve,B.properties=_,B.renderLists=ae,B.shadowMap=Me,B.state=V,B.info=H}Re(),E!==sn&&(R=new ux(E,t.width,t.height,s,r));const Se=new JM(B,y);this.xr=Se,this.getContext=function(){return y},this.getContextAttributes=function(){return y.getContextAttributes()},this.forceContextLoss=function(){const M=ve.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=ve.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Ge},this.setPixelRatio=function(M){M!==void 0&&(Ge=M,this.setSize(Ye,st,!1))},this.getSize=function(M){return M.set(Ye,st)},this.setSize=function(M,F,K=!0){if(Se.isPresenting){Ve("WebGLRenderer: Can't change size while VR device is presenting.");return}Ye=M,st=F,t.width=Math.floor(M*Ge),t.height=Math.floor(F*Ge),K===!0&&(t.style.width=M+"px",t.style.height=F+"px"),R!==null&&R.setSize(t.width,t.height),this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set(Ye*Ge,st*Ge).floor()},this.setDrawingBufferSize=function(M,F,K){Ye=M,st=F,Ge=K,t.width=Math.floor(M*K),t.height=Math.floor(F*K),this.setViewport(0,0,M,F)},this.setEffects=function(M){if(E===sn){at("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let F=0;F<M.length;F++)if(M[F].isOutputPass===!0){Ve("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(J)},this.getViewport=function(M){return M.copy(_e)},this.setViewport=function(M,F,K,X){M.isVector4?_e.set(M.x,M.y,M.z,M.w):_e.set(M,F,K,X),V.viewport(J.copy(_e).multiplyScalar(Ge).round())},this.getScissor=function(M){return M.copy(Oe)},this.setScissor=function(M,F,K,X){M.isVector4?Oe.set(M.x,M.y,M.z,M.w):Oe.set(M,F,K,X),V.scissor(ce.copy(Oe).multiplyScalar(Ge).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(M){V.setScissorTest(Be=M)},this.setOpaqueSort=function(M){se=M},this.setTransparentSort=function(M){Ee=M},this.getClearColor=function(M){return M.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor(...arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha(...arguments)},this.clear=function(M=!0,F=!0,K=!0){let X=0;if(M){let Y=!1;if(N!==null){const we=N.texture.format;Y=g.has(we)}if(Y){const we=N.texture.type,Le=d.has(we),Ae=xe.getClearColor(),Ue=xe.getClearAlpha(),Ne=Ae.r,$e=Ae.g,Ze=Ae.b;Le?(S[0]=Ne,S[1]=$e,S[2]=Ze,S[3]=Ue,y.clearBufferuiv(y.COLOR,0,S)):(T[0]=Ne,T[1]=$e,T[2]=Ze,T[3]=Ue,y.clearBufferiv(y.COLOR,0,T))}else X|=y.COLOR_BUFFER_BIT}F&&(X|=y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(X|=y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&y.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),k=M},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",ke,!1),xe.dispose(),ae.dispose(),ge.dispose(),_.dispose(),L.dispose(),le.dispose(),pe.dispose(),te.dispose(),me.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",dc),Se.removeEventListener("sessionend",pc),Ri.stop()};function fe(M){M.preventDefault(),ru("WebGLRenderer: Context Lost."),P=!0}function Ie(){ru("WebGLRenderer: Context Restored."),P=!1;const M=H.autoReset,F=Me.enabled,K=Me.autoUpdate,X=Me.needsUpdate,Y=Me.type;Re(),H.autoReset=M,Me.enabled=F,Me.autoUpdate=K,Me.needsUpdate=X,Me.type=Y}function ke(M){at("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function yt(M){const F=M.target;F.removeEventListener("dispose",yt),ht(F)}function ht(M){Hn(M),_.remove(M)}function Hn(M){const F=_.get(M).programs;F!==void 0&&(F.forEach(function(K){me.releaseProgram(K)}),M.isShaderMaterial&&me.releaseShaderCache(M))}this.renderBufferDirect=function(M,F,K,X,Y,we){F===null&&(F=Q);const Le=Y.isMesh&&Y.matrixWorld.determinant()<0,Ae=Xh(M,F,K,X,Y);V.setMaterial(X,Le);let Ue=K.index,Ne=1;if(X.wireframe===!0){if(Ue=ne.getWireframeAttribute(K),Ue===void 0)return;Ne=2}const $e=K.drawRange,Ze=K.attributes.position;let Fe=$e.start*Ne,dt=($e.start+$e.count)*Ne;we!==null&&(Fe=Math.max(Fe,we.start*Ne),dt=Math.min(dt,(we.start+we.count)*Ne)),Ue!==null?(Fe=Math.max(Fe,0),dt=Math.min(dt,Ue.count)):Ze!=null&&(Fe=Math.max(Fe,0),dt=Math.min(dt,Ze.count));const Tt=dt-Fe;if(Tt<0||Tt===1/0)return;pe.setup(Y,X,Ae,K,Ue);let St,mt=We;if(Ue!==null&&(St=j.get(Ue),mt=Qe,mt.setIndex(St)),Y.isMesh)X.wireframe===!0?(V.setLineWidth(X.wireframeLinewidth*he()),mt.setMode(y.LINES)):mt.setMode(y.TRIANGLES);else if(Y.isLine){let Nt=X.linewidth;Nt===void 0&&(Nt=1),V.setLineWidth(Nt*he()),Y.isLineSegments?mt.setMode(y.LINES):Y.isLineLoop?mt.setMode(y.LINE_LOOP):mt.setMode(y.LINE_STRIP)}else Y.isPoints?mt.setMode(y.POINTS):Y.isSprite&&mt.setMode(y.TRIANGLES);if(Y.isBatchedMesh)if(ve.get("WEBGL_multi_draw"))mt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Nt=Y._multiDrawStarts,De=Y._multiDrawCounts,Zt=Y._multiDrawCount,rt=Ue?j.get(Ue).bytesPerElement:1,on=_.get(X).currentProgram.getUniforms();for(let An=0;An<Zt;An++)on.setValue(y,"_gl_DrawID",An),mt.render(Nt[An]/rt,De[An])}else if(Y.isInstancedMesh)mt.renderInstances(Fe,Tt,Y.count);else if(K.isInstancedBufferGeometry){const Nt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,De=Math.min(K.instanceCount,Nt);mt.renderInstances(Fe,Tt,De)}else mt.render(Fe,Tt)};function Tn(M,F,K){M.transparent===!0&&M.side===Zn&&M.forceSinglePass===!1?(M.side=jt,M.needsUpdate=!0,dr(M,F,K),M.side=Ti,M.needsUpdate=!0,dr(M,F,K),M.side=Zn):dr(M,F,K)}this.compile=function(M,F,K=null){K===null&&(K=M),w=ge.get(K),w.init(F),x.push(w),K.traverseVisible(function(Y){Y.isLight&&Y.layers.test(F.layers)&&(w.pushLight(Y),Y.castShadow&&w.pushShadow(Y))}),M!==K&&M.traverseVisible(function(Y){Y.isLight&&Y.layers.test(F.layers)&&(w.pushLight(Y),Y.castShadow&&w.pushShadow(Y))}),w.setupLights();const X=new Set;return M.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const we=Y.material;if(we)if(Array.isArray(we))for(let Le=0;Le<we.length;Le++){const Ae=we[Le];Tn(Ae,K,Y),X.add(Ae)}else Tn(we,K,Y),X.add(we)}),w=x.pop(),X},this.compileAsync=function(M,F,K=null){const X=this.compile(M,F,K);return new Promise(Y=>{function we(){if(X.forEach(function(Le){_.get(Le).currentProgram.isReady()&&X.delete(Le)}),X.size===0){Y(M);return}setTimeout(we,10)}ve.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Ra=null;function kh(M){Ra&&Ra(M)}function dc(){Ri.stop()}function pc(){Ri.start()}const Ri=new Nh;Ri.setAnimationLoop(kh),typeof self<"u"&&Ri.setContext(self),this.setAnimationLoop=function(M){Ra=M,Se.setAnimationLoop(M),M===null?Ri.stop():Ri.start()},Se.addEventListener("sessionstart",dc),Se.addEventListener("sessionend",pc),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){at("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;k!==null&&k.renderStart(M,F);const K=Se.enabled===!0&&Se.isPresenting===!0,X=R!==null&&(N===null||K)&&R.begin(B,N);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(F),F=Se.getCamera()),M.isScene===!0&&M.onBeforeRender(B,M,F,N),w=ge.get(M,x.length),w.init(F),w.state.textureUnits=m.getTextureUnits(),x.push(w),G.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),ze.setFromProjectionMatrix(G,Un,F.reversedDepth),C=this.localClippingEnabled,A=ye.init(this.clippingPlanes,C),D=ae.get(M,I.length),D.init(),I.push(D),Se.enabled===!0&&Se.isPresenting===!0){const Le=B.xr.getDepthSensingMesh();Le!==null&&Ca(Le,F,-1/0,B.sortObjects)}Ca(M,F,0,B.sortObjects),D.finish(),B.sortObjects===!0&&D.sort(se,Ee),ue=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,ue&&xe.addToRenderList(D,M),this.info.render.frame++,A===!0&&ye.beginShadows();const Y=w.state.shadowsArray;if(Me.render(Y,M,F),A===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),(X&&R.hasRenderPass())===!1){const Le=D.opaque,Ae=D.transmissive;if(w.setupLights(),F.isArrayCamera){const Ue=F.cameras;if(Ae.length>0)for(let Ne=0,$e=Ue.length;Ne<$e;Ne++){const Ze=Ue[Ne];gc(Le,Ae,M,Ze)}ue&&xe.render(M);for(let Ne=0,$e=Ue.length;Ne<$e;Ne++){const Ze=Ue[Ne];mc(D,M,Ze,Ze.viewport)}}else Ae.length>0&&gc(Le,Ae,M,F),ue&&xe.render(M),mc(D,M,F)}N!==null&&ie===0&&(m.updateMultisampleRenderTarget(N),m.updateRenderTargetMipmap(N)),X&&R.end(B),M.isScene===!0&&M.onAfterRender(B,M,F),pe.resetDefaultState(),W=-1,O=null,x.pop(),x.length>0?(w=x[x.length-1],m.setTextureUnits(w.state.textureUnits),A===!0&&ye.setGlobalState(B.clippingPlanes,w.state.camera)):w=null,I.pop(),I.length>0?D=I[I.length-1]:D=null,k!==null&&k.renderEnd()};function Ca(M,F,K,X){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)K=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(F);else if(M.isLightProbeGrid)w.pushLightProbeGrid(M);else if(M.isLight)w.pushLight(M),M.castShadow&&w.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||ze.intersectsSprite(M)){X&&$.setFromMatrixPosition(M.matrixWorld).applyMatrix4(G);const Le=le.update(M),Ae=M.material;Ae.visible&&D.push(M,Le,Ae,K,$.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||ze.intersectsObject(M))){const Le=le.update(M),Ae=M.material;if(X&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),$.copy(M.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),$.copy(Le.boundingSphere.center)),$.applyMatrix4(M.matrixWorld).applyMatrix4(G)),Array.isArray(Ae)){const Ue=Le.groups;for(let Ne=0,$e=Ue.length;Ne<$e;Ne++){const Ze=Ue[Ne],Fe=Ae[Ze.materialIndex];Fe&&Fe.visible&&D.push(M,Le,Fe,K,$.z,Ze)}}else Ae.visible&&D.push(M,Le,Ae,K,$.z,null)}}const we=M.children;for(let Le=0,Ae=we.length;Le<Ae;Le++)Ca(we[Le],F,K,X)}function mc(M,F,K,X){const{opaque:Y,transmissive:we,transparent:Le}=M;w.setupLightsView(K),A===!0&&ye.setGlobalState(B.clippingPlanes,K),X&&V.viewport(J.copy(X)),Y.length>0&&hr(Y,F,K),we.length>0&&hr(we,F,K),Le.length>0&&hr(Le,F,K),V.buffers.depth.setTest(!0),V.buffers.depth.setMask(!0),V.buffers.color.setMask(!0),V.setPolygonOffset(!1)}function gc(M,F,K,X){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[X.id]===void 0){const Fe=ve.has("EXT_color_buffer_half_float")||ve.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[X.id]=new On(1,1,{generateMipmaps:!0,type:Fe?si:sn,minFilter:zi,samples:Math.max(4,de.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace})}const we=w.state.transmissionRenderTarget[X.id],Le=X.viewport||J;we.setSize(Le.z*B.transmissionResolutionScale,Le.w*B.transmissionResolutionScale);const Ae=B.getRenderTarget(),Ue=B.getActiveCubeFace(),Ne=B.getActiveMipmapLevel();B.setRenderTarget(we),B.getClearColor(Ce),Pe=B.getClearAlpha(),Pe<1&&B.setClearColor(16777215,.5),B.clear(),ue&&xe.render(K);const $e=B.toneMapping;B.toneMapping=Fn;const Ze=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),w.setupLightsView(X),A===!0&&ye.setGlobalState(B.clippingPlanes,X),hr(M,K,X),m.updateMultisampleRenderTarget(we),m.updateRenderTargetMipmap(we),ve.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let dt=0,Tt=F.length;dt<Tt;dt++){const St=F[dt],{object:mt,geometry:Nt,material:De,group:Zt}=St;if(De.side===Zn&&mt.layers.test(X.layers)){const rt=De.side;De.side=jt,De.needsUpdate=!0,_c(mt,K,X,Nt,De,Zt),De.side=rt,De.needsUpdate=!0,Fe=!0}}Fe===!0&&(m.updateMultisampleRenderTarget(we),m.updateRenderTargetMipmap(we))}B.setRenderTarget(Ae,Ue,Ne),B.setClearColor(Ce,Pe),Ze!==void 0&&(X.viewport=Ze),B.toneMapping=$e}function hr(M,F,K){const X=F.isScene===!0?F.overrideMaterial:null;for(let Y=0,we=M.length;Y<we;Y++){const Le=M[Y],{object:Ae,geometry:Ue,group:Ne}=Le;let $e=Le.material;$e.allowOverride===!0&&X!==null&&($e=X),Ae.layers.test(K.layers)&&_c(Ae,F,K,Ue,$e,Ne)}}function _c(M,F,K,X,Y,we){M.onBeforeRender(B,F,K,X,Y,we),M.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),Y.onBeforeRender(B,F,K,X,M,we),Y.transparent===!0&&Y.side===Zn&&Y.forceSinglePass===!1?(Y.side=jt,Y.needsUpdate=!0,B.renderBufferDirect(K,F,X,Y,M,we),Y.side=Ti,Y.needsUpdate=!0,B.renderBufferDirect(K,F,X,Y,M,we),Y.side=Zn):B.renderBufferDirect(K,F,X,Y,M,we),M.onAfterRender(B,F,K,X,Y,we)}function dr(M,F,K){F.isScene!==!0&&(F=Q);const X=_.get(M),Y=w.state.lights,we=w.state.shadowsArray,Le=Y.state.version,Ae=me.getParameters(M,Y.state,we,F,K,w.state.lightProbeGridArray),Ue=me.getProgramCacheKey(Ae);let Ne=X.programs;X.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?F.environment:null,X.fog=F.fog;const $e=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;X.envMap=L.get(M.envMap||X.environment,$e),X.envMapRotation=X.environment!==null&&M.envMap===null?F.environmentRotation:M.envMapRotation,Ne===void 0&&(M.addEventListener("dispose",yt),Ne=new Map,X.programs=Ne);let Ze=Ne.get(Ue);if(Ze!==void 0){if(X.currentProgram===Ze&&X.lightsStateVersion===Le)return xc(M,Ae),Ze}else Ae.uniforms=me.getUniforms(M),k!==null&&M.isNodeMaterial&&k.build(M,K,Ae),M.onBeforeCompile(Ae,B),Ze=me.acquireProgram(Ae,Ue),Ne.set(Ue,Ze),X.uniforms=Ae.uniforms;const Fe=X.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Fe.clippingPlanes=ye.uniform),xc(M,Ae),X.needsLights=Yh(M),X.lightsStateVersion=Le,X.needsLights&&(Fe.ambientLightColor.value=Y.state.ambient,Fe.lightProbe.value=Y.state.probe,Fe.directionalLights.value=Y.state.directional,Fe.directionalLightShadows.value=Y.state.directionalShadow,Fe.spotLights.value=Y.state.spot,Fe.spotLightShadows.value=Y.state.spotShadow,Fe.rectAreaLights.value=Y.state.rectArea,Fe.ltc_1.value=Y.state.rectAreaLTC1,Fe.ltc_2.value=Y.state.rectAreaLTC2,Fe.pointLights.value=Y.state.point,Fe.pointLightShadows.value=Y.state.pointShadow,Fe.hemisphereLights.value=Y.state.hemi,Fe.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Fe.spotLightMatrix.value=Y.state.spotLightMatrix,Fe.spotLightMap.value=Y.state.spotLightMap,Fe.pointShadowMatrix.value=Y.state.pointShadowMatrix),X.lightProbeGrid=w.state.lightProbeGridArray.length>0,X.currentProgram=Ze,X.uniformsList=null,Ze}function vc(M){if(M.uniformsList===null){const F=M.currentProgram.getUniforms();M.uniformsList=Qr.seqWithValue(F.seq,M.uniforms)}return M.uniformsList}function xc(M,F){const K=_.get(M);K.outputColorSpace=F.outputColorSpace,K.batching=F.batching,K.batchingColor=F.batchingColor,K.instancing=F.instancing,K.instancingColor=F.instancingColor,K.instancingMorph=F.instancingMorph,K.skinning=F.skinning,K.morphTargets=F.morphTargets,K.morphNormals=F.morphNormals,K.morphColors=F.morphColors,K.morphTargetsCount=F.morphTargetsCount,K.numClippingPlanes=F.numClippingPlanes,K.numIntersection=F.numClipIntersection,K.vertexAlphas=F.vertexAlphas,K.vertexTangents=F.vertexTangents,K.toneMapping=F.toneMapping}function Wh(M,F){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;b.setFromMatrixPosition(F.matrixWorld);for(let K=0,X=M.length;K<X;K++){const Y=M[K];if(Y.texture!==null&&Y.boundingBox.containsPoint(b))return Y}return null}function Xh(M,F,K,X,Y){F.isScene!==!0&&(F=Q),m.resetTextureUnits();const we=F.fog,Le=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?F.environment:null,Ae=N===null?B.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:tt.workingColorSpace,Ue=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Ne=L.get(X.envMap||Le,Ue),$e=X.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ze=!!K.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Fe=!!K.morphAttributes.position,dt=!!K.morphAttributes.normal,Tt=!!K.morphAttributes.color;let St=Fn;X.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(St=B.toneMapping);const mt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Nt=mt!==void 0?mt.length:0,De=_.get(X),Zt=w.state.lights;if(A===!0&&(C===!0||M!==O)){const vt=M===O&&X.id===W;ye.setState(X,M,vt)}let rt=!1;X.version===De.__version?(De.needsLights&&De.lightsStateVersion!==Zt.state.version||De.outputColorSpace!==Ae||Y.isBatchedMesh&&De.batching===!1||!Y.isBatchedMesh&&De.batching===!0||Y.isBatchedMesh&&De.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&De.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&De.instancing===!1||!Y.isInstancedMesh&&De.instancing===!0||Y.isSkinnedMesh&&De.skinning===!1||!Y.isSkinnedMesh&&De.skinning===!0||Y.isInstancedMesh&&De.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&De.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&De.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&De.instancingMorph===!1&&Y.morphTexture!==null||De.envMap!==Ne||X.fog===!0&&De.fog!==we||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==ye.numPlanes||De.numIntersection!==ye.numIntersection)||De.vertexAlphas!==$e||De.vertexTangents!==Ze||De.morphTargets!==Fe||De.morphNormals!==dt||De.morphColors!==Tt||De.toneMapping!==St||De.morphTargetsCount!==Nt||!!De.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(rt=!0):(rt=!0,De.__version=X.version);let on=De.currentProgram;rt===!0&&(on=dr(X,F,Y),k&&X.isNodeMaterial&&k.onUpdateProgram(X,on,De));let An=!1,li=!1,Yi=!1;const gt=on.getUniforms(),At=De.uniforms;if(V.useProgram(on.program)&&(An=!0,li=!0,Yi=!0),X.id!==W&&(W=X.id,li=!0),De.needsLights){const vt=Wh(w.state.lightProbeGridArray,Y);De.lightProbeGrid!==vt&&(De.lightProbeGrid=vt,li=!0)}if(An||O!==M){V.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),gt.setValue(y,"projectionMatrix",M.projectionMatrix),gt.setValue(y,"viewMatrix",M.matrixWorldInverse);const ui=gt.map.cameraPosition;ui!==void 0&&ui.setValue(y,re.setFromMatrixPosition(M.matrixWorld)),de.logarithmicDepthBuffer&&gt.setValue(y,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&gt.setValue(y,"isOrthographic",M.isOrthographicCamera===!0),O!==M&&(O=M,li=!0,Yi=!0)}if(De.needsLights&&(Zt.state.directionalShadowMap.length>0&&gt.setValue(y,"directionalShadowMap",Zt.state.directionalShadowMap,m),Zt.state.spotShadowMap.length>0&&gt.setValue(y,"spotShadowMap",Zt.state.spotShadowMap,m),Zt.state.pointShadowMap.length>0&&gt.setValue(y,"pointShadowMap",Zt.state.pointShadowMap,m)),Y.isSkinnedMesh){gt.setOptional(y,Y,"bindMatrix"),gt.setOptional(y,Y,"bindMatrixInverse");const vt=Y.skeleton;vt&&(vt.boneTexture===null&&vt.computeBoneTexture(),gt.setValue(y,"boneTexture",vt.boneTexture,m))}Y.isBatchedMesh&&(gt.setOptional(y,Y,"batchingTexture"),gt.setValue(y,"batchingTexture",Y._matricesTexture,m),gt.setOptional(y,Y,"batchingIdTexture"),gt.setValue(y,"batchingIdTexture",Y._indirectTexture,m),gt.setOptional(y,Y,"batchingColorTexture"),Y._colorsTexture!==null&&gt.setValue(y,"batchingColorTexture",Y._colorsTexture,m));const ci=K.morphAttributes;if((ci.position!==void 0||ci.normal!==void 0||ci.color!==void 0)&&He.update(Y,K,on),(li||De.receiveShadow!==Y.receiveShadow)&&(De.receiveShadow=Y.receiveShadow,gt.setValue(y,"receiveShadow",Y.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&F.environment!==null&&(At.envMapIntensity.value=F.environmentIntensity),At.dfgLUT!==void 0&&(At.dfgLUT.value=iS()),li){if(gt.setValue(y,"toneMappingExposure",B.toneMappingExposure),De.needsLights&&qh(At,Yi),we&&X.fog===!0&&Z.refreshFogUniforms(At,we),Z.refreshMaterialUniforms(At,X,Ge,st,w.state.transmissionRenderTarget[M.id]),De.needsLights&&De.lightProbeGrid){const vt=De.lightProbeGrid;At.probesSH.value=vt.texture,At.probesMin.value.copy(vt.boundingBox.min),At.probesMax.value.copy(vt.boundingBox.max),At.probesResolution.value.copy(vt.resolution)}Qr.upload(y,vc(De),At,m)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Qr.upload(y,vc(De),At,m),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&gt.setValue(y,"center",Y.center),gt.setValue(y,"modelViewMatrix",Y.modelViewMatrix),gt.setValue(y,"normalMatrix",Y.normalMatrix),gt.setValue(y,"modelMatrix",Y.matrixWorld),X.uniformsGroups!==void 0){const vt=X.uniformsGroups;for(let ui=0,$i=vt.length;ui<$i;ui++){const Mc=vt[ui];te.update(Mc,on),te.bind(Mc,on)}}return on}function qh(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}function Yh(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return ee},this.getActiveMipmapLevel=function(){return ie},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(M,F,K){const X=_.get(M);X.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),_.get(M.texture).__webglTexture=F,_.get(M.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:K,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,F){const K=_.get(M);K.__webglFramebuffer=F,K.__useDefaultFramebuffer=F===void 0};const $h=y.createFramebuffer();this.setRenderTarget=function(M,F=0,K=0){N=M,ee=F,ie=K;let X=null,Y=!1,we=!1;if(M){const Ae=_.get(M);if(Ae.__useDefaultFramebuffer!==void 0){V.bindFramebuffer(y.FRAMEBUFFER,Ae.__webglFramebuffer),J.copy(M.viewport),ce.copy(M.scissor),be=M.scissorTest,V.viewport(J),V.scissor(ce),V.setScissorTest(be),W=-1;return}else if(Ae.__webglFramebuffer===void 0)m.setupRenderTarget(M);else if(Ae.__hasExternalTextures)m.rebindTextures(M,_.get(M.texture).__webglTexture,_.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const $e=M.depthTexture;if(Ae.__boundDepthTexture!==$e){if($e!==null&&_.has($e)&&(M.width!==$e.image.width||M.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");m.setupDepthRenderbuffer(M)}}const Ue=M.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(we=!0);const Ne=_.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ne[F])?X=Ne[F][K]:X=Ne[F],Y=!0):M.samples>0&&m.useMultisampledRTT(M)===!1?X=_.get(M).__webglMultisampledFramebuffer:Array.isArray(Ne)?X=Ne[K]:X=Ne,J.copy(M.viewport),ce.copy(M.scissor),be=M.scissorTest}else J.copy(_e).multiplyScalar(Ge).floor(),ce.copy(Oe).multiplyScalar(Ge).floor(),be=Be;if(K!==0&&(X=$h),V.bindFramebuffer(y.FRAMEBUFFER,X)&&V.drawBuffers(M,X),V.viewport(J),V.scissor(ce),V.setScissorTest(be),Y){const Ae=_.get(M.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ae.__webglTexture,K)}else if(we){const Ae=F;for(let Ue=0;Ue<M.textures.length;Ue++){const Ne=_.get(M.textures[Ue]);y.framebufferTextureLayer(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0+Ue,Ne.__webglTexture,K,Ae)}}else if(M!==null&&K!==0){const Ae=_.get(M.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,Ae.__webglTexture,K)}W=-1},this.readRenderTargetPixels=function(M,F,K,X,Y,we,Le,Ae=0){if(!(M&&M.isWebGLRenderTarget)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=_.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Le!==void 0&&(Ue=Ue[Le]),Ue){V.bindFramebuffer(y.FRAMEBUFFER,Ue);try{const Ne=M.textures[Ae],$e=Ne.format,Ze=Ne.type;if(M.textures.length>1&&y.readBuffer(y.COLOR_ATTACHMENT0+Ae),!de.textureFormatReadable($e)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!de.textureTypeReadable(Ze)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=M.width-X&&K>=0&&K<=M.height-Y&&y.readPixels(F,K,X,Y,U.convert($e),U.convert(Ze),we)}finally{const Ne=N!==null?_.get(N).__webglFramebuffer:null;V.bindFramebuffer(y.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(M,F,K,X,Y,we,Le,Ae=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=_.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Le!==void 0&&(Ue=Ue[Le]),Ue)if(F>=0&&F<=M.width-X&&K>=0&&K<=M.height-Y){V.bindFramebuffer(y.FRAMEBUFFER,Ue);const Ne=M.textures[Ae],$e=Ne.format,Ze=Ne.type;if(M.textures.length>1&&y.readBuffer(y.COLOR_ATTACHMENT0+Ae),!de.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!de.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Fe=y.createBuffer();y.bindBuffer(y.PIXEL_PACK_BUFFER,Fe),y.bufferData(y.PIXEL_PACK_BUFFER,we.byteLength,y.STREAM_READ),y.readPixels(F,K,X,Y,U.convert($e),U.convert(Ze),0);const dt=N!==null?_.get(N).__webglFramebuffer:null;V.bindFramebuffer(y.FRAMEBUFFER,dt);const Tt=y.fenceSync(y.SYNC_GPU_COMMANDS_COMPLETE,0);return y.flush(),await gg(y,Tt,4),y.bindBuffer(y.PIXEL_PACK_BUFFER,Fe),y.getBufferSubData(y.PIXEL_PACK_BUFFER,0,we),y.deleteBuffer(Fe),y.deleteSync(Tt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,F=null,K=0){const X=Math.pow(2,-K),Y=Math.floor(M.image.width*X),we=Math.floor(M.image.height*X),Le=F!==null?F.x:0,Ae=F!==null?F.y:0;m.setTexture2D(M,0),y.copyTexSubImage2D(y.TEXTURE_2D,K,0,0,Le,Ae,Y,we),V.unbindTexture()};const Kh=y.createFramebuffer(),jh=y.createFramebuffer();this.copyTextureToTexture=function(M,F,K=null,X=null,Y=0,we=0){let Le,Ae,Ue,Ne,$e,Ze,Fe,dt,Tt;const St=M.isCompressedTexture?M.mipmaps[we]:M.image;if(K!==null)Le=K.max.x-K.min.x,Ae=K.max.y-K.min.y,Ue=K.isBox3?K.max.z-K.min.z:1,Ne=K.min.x,$e=K.min.y,Ze=K.isBox3?K.min.z:0;else{const At=Math.pow(2,-Y);Le=Math.floor(St.width*At),Ae=Math.floor(St.height*At),M.isDataArrayTexture?Ue=St.depth:M.isData3DTexture?Ue=Math.floor(St.depth*At):Ue=1,Ne=0,$e=0,Ze=0}X!==null?(Fe=X.x,dt=X.y,Tt=X.z):(Fe=0,dt=0,Tt=0);const mt=U.convert(F.format),Nt=U.convert(F.type);let De;F.isData3DTexture?(m.setTexture3D(F,0),De=y.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(m.setTexture2DArray(F,0),De=y.TEXTURE_2D_ARRAY):(m.setTexture2D(F,0),De=y.TEXTURE_2D),V.activeTexture(y.TEXTURE0),V.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,F.flipY),V.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),V.pixelStorei(y.UNPACK_ALIGNMENT,F.unpackAlignment);const Zt=V.getParameter(y.UNPACK_ROW_LENGTH),rt=V.getParameter(y.UNPACK_IMAGE_HEIGHT),on=V.getParameter(y.UNPACK_SKIP_PIXELS),An=V.getParameter(y.UNPACK_SKIP_ROWS),li=V.getParameter(y.UNPACK_SKIP_IMAGES);V.pixelStorei(y.UNPACK_ROW_LENGTH,St.width),V.pixelStorei(y.UNPACK_IMAGE_HEIGHT,St.height),V.pixelStorei(y.UNPACK_SKIP_PIXELS,Ne),V.pixelStorei(y.UNPACK_SKIP_ROWS,$e),V.pixelStorei(y.UNPACK_SKIP_IMAGES,Ze);const Yi=M.isDataArrayTexture||M.isData3DTexture,gt=F.isDataArrayTexture||F.isData3DTexture;if(M.isDepthTexture){const At=_.get(M),ci=_.get(F),vt=_.get(At.__renderTarget),ui=_.get(ci.__renderTarget);V.bindFramebuffer(y.READ_FRAMEBUFFER,vt.__webglFramebuffer),V.bindFramebuffer(y.DRAW_FRAMEBUFFER,ui.__webglFramebuffer);for(let $i=0;$i<Ue;$i++)Yi&&(y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,_.get(M).__webglTexture,Y,Ze+$i),y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,_.get(F).__webglTexture,we,Tt+$i)),y.blitFramebuffer(Ne,$e,Le,Ae,Fe,dt,Le,Ae,y.DEPTH_BUFFER_BIT,y.NEAREST);V.bindFramebuffer(y.READ_FRAMEBUFFER,null),V.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else if(Y!==0||M.isRenderTargetTexture||_.has(M)){const At=_.get(M),ci=_.get(F);V.bindFramebuffer(y.READ_FRAMEBUFFER,Kh),V.bindFramebuffer(y.DRAW_FRAMEBUFFER,jh);for(let vt=0;vt<Ue;vt++)Yi?y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,At.__webglTexture,Y,Ze+vt):y.framebufferTexture2D(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,At.__webglTexture,Y),gt?y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,ci.__webglTexture,we,Tt+vt):y.framebufferTexture2D(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,ci.__webglTexture,we),Y!==0?y.blitFramebuffer(Ne,$e,Le,Ae,Fe,dt,Le,Ae,y.COLOR_BUFFER_BIT,y.NEAREST):gt?y.copyTexSubImage3D(De,we,Fe,dt,Tt+vt,Ne,$e,Le,Ae):y.copyTexSubImage2D(De,we,Fe,dt,Ne,$e,Le,Ae);V.bindFramebuffer(y.READ_FRAMEBUFFER,null),V.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else gt?M.isDataTexture||M.isData3DTexture?y.texSubImage3D(De,we,Fe,dt,Tt,Le,Ae,Ue,mt,Nt,St.data):F.isCompressedArrayTexture?y.compressedTexSubImage3D(De,we,Fe,dt,Tt,Le,Ae,Ue,mt,St.data):y.texSubImage3D(De,we,Fe,dt,Tt,Le,Ae,Ue,mt,Nt,St):M.isDataTexture?y.texSubImage2D(y.TEXTURE_2D,we,Fe,dt,Le,Ae,mt,Nt,St.data):M.isCompressedTexture?y.compressedTexSubImage2D(y.TEXTURE_2D,we,Fe,dt,St.width,St.height,mt,St.data):y.texSubImage2D(y.TEXTURE_2D,we,Fe,dt,Le,Ae,mt,Nt,St);V.pixelStorei(y.UNPACK_ROW_LENGTH,Zt),V.pixelStorei(y.UNPACK_IMAGE_HEIGHT,rt),V.pixelStorei(y.UNPACK_SKIP_PIXELS,on),V.pixelStorei(y.UNPACK_SKIP_ROWS,An),V.pixelStorei(y.UNPACK_SKIP_IMAGES,li),we===0&&F.generateMipmaps&&y.generateMipmap(De),V.unbindTexture()},this.initRenderTarget=function(M){_.get(M).__webglFramebuffer===void 0&&m.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?m.setTextureCube(M,0):M.isData3DTexture?m.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?m.setTexture2DArray(M,0):m.setTexture2D(M,0),V.unbindTexture()},this.resetState=function(){ee=0,ie=0,N=null,V.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}const rS={class:"cosmic-nexus"},aS={class:"starfield-bg"},oS={class:"app-container"},lS={class:"hero-ultra"},cS={class:"hero-glass"},uS={class:"countdown-block"},fS={class:"timer-digits"},hS={class:"global-numbers"},dS={class:"stat-val"},pS={class:"stat-name"},mS={class:"control-bar"},gS={class:"search-input"},_S={class:"filters"},vS=["onClick"],xS={class:"products-grid"},MS={class:"tile-media"},SS=["src","alt"],ES=["onClick"],bS={key:0,class:"hot-badge"},yS={class:"tile-info"},TS={class:"short-specs"},AS={class:"tile-buttons"},wS=["onClick"],RS=["onClick"],CS={class:"pagination-bar"},PS=["disabled"],DS=["disabled"],LS={class:"earth-3d-container"},IS={class:"port-list"},US={class:"cart-section"},NS={class:"cart-items-list"},FS={key:0,class:"empty-cart"},OS={key:1},BS=["onClick"],zS={class:"tech-advance"},VS={class:"tech-list"},HS={class:"progress-bg"},GS={class:"media-carousel"},kS=["src"],WS={class:"modal-detail"},XS={class:"modal-header"},qS={class:"modal-body"},YS=["src"],$S={class:"full-specs"},KS={class:"extended-info"},jS={class:"modal-actions"},ZS={class:"modal-small"},JS={class:"modal-header"},QS={class:"modal-body"},eE={key:3,class:"floating-chat"},tE={class:"chat-window"},nE={class:"chat-body"},iE={class:"chat-input-area"},bo=12,sE={__name:"ProductPage",setup(n){const t=pt((()=>{const V=[];["Орбита-X Heavy","Старт-1","Титан-3","Вега-Лайт","Союз-2","Ангара-А5","Электрон","Нейтрон-2","Сатурн-9","Протон-М","Falcon Heavy","New Glenn","Vulcan","Ariane 6","H3"].forEach((ne,le)=>{V.push({id:le+1,name:ne,category:"Ракеты",specs:{Высота:`${30+le*3} м`,Грузоподъёмность:`${(le+2)*1.5} т`,Тяга:`${(le+1)*300} кН`},shortDesc:"Современный носитель для вывода полезной нагрузки.",fullDesc:`Ракета ${ne} разработана с применением аддитивных технологий и возвращаемой первой ступени.`,history:"Первая успешная миссия в 2024 году.",features:["Многоразовая ступень","Автономная навигация","Экологичное топливо"],img:`https://picsum.photos/id/${(le+3)*4}/300/200`,hot:le%3===0,price:`${20+le*10} млн $`})});const _=[];["ЖРД R-220",'АСУ "Орион"',"Солнечные панели X-500","Гиростаб ГС-6","Теплозащита Карбон","Квантовый датчик","Композитный бак","Ракетный ускоритель","Система стыковки","Бортовая ЭВМ"].forEach((ne,le)=>{_.push({id:100+le,name:ne,category:"Компоненты",specs:{Масса:`${20+le*5} кг`,Надёжность:"99.8%"},shortDesc:"Высокоточный компонент для космических аппаратов.",fullDesc:"Сертифицирован для работы в условиях глубокого космоса.",features:["Радиационная защита","Низкое энергопотребление"],img:`https://picsum.photos/id/${80+le}/300/200`,price:`${5+le*2} млн $`})});const L=[];return["Вывод на НОО","Геопереходная орбита","Лунная миссия","Запуск группировки","Сопровождение ПН","Морской старт","Межпланетная миссия","Страхование","Проектирование спутника"].forEach((ne,le)=>{L.push({id:200+le,name:ne,category:"Услуги",specs:{Стоимость:`от ${15+le*10} млн $`,Срок:"3-6 месяцев"},shortDesc:"Полный цикл запуска под ключ.",fullDesc:"Включает интеграцию, выведение и послепусковое сопровождение.",features:["Телеметрия 24/7","Страхование груза"],img:`https://picsum.photos/id/${70+le}/300/200`,hot:le===2||le===6,price:`${20+le*15} млн $`})}),[...V,..._,...L]})()),i=pt(""),s=pt("Все"),r=["Все","Ракеты","Компоненты","Услуги"],a=pt(!1),o=pt([]),l=pt(1),c=qr(()=>{let V=t.value;if(s.value!=="Все"&&(V=V.filter(H=>H.category===s.value)),i.value){const H=i.value.toLowerCase();V=V.filter(_=>_.name.toLowerCase().includes(H))}return a.value&&(V=V.filter(H=>o.value.includes(H.id))),V}),u=qr(()=>Math.ceil(c.value.length/bo)),h=qr(()=>{const V=(l.value-1)*bo;return c.value.slice(V,V+bo)});function f(){l.value>1&&l.value--}function p(){l.value<u.value&&l.value++}function v(V){o.value.includes(V)?o.value=o.value.filter(H=>H!==V):o.value.push(V)}const E=pt([]),g=pt(!0);function d(V){E.value.find(H=>H.id===V.id)?st("Товар уже в корзине","info"):(E.value.push({id:V.id,name:V.name,price:V.price||"По запросу"}),st("Добавлено в корзину","success"))}function S(V){E.value=E.value.filter(H=>H.id!==V)}function T(){alert("Заказ оформлен! Свяжемся для уточнения деталей.")}const b=new Date(2026,5,20,10,0,0).getTime(),D=pt(0),w=pt(0),I=pt(0),x=pt(0);let R;function B(){const V=Date.now(),H=b-V;if(H<=0){D.value=w.value=I.value=x.value=0,clearInterval(R);return}D.value=Math.floor(H/(1e3*60*60*24)),w.value=Math.floor(H%864e5/36e5),I.value=Math.floor(H%36e5/6e4),x.value=Math.floor(H%6e4/1e3)}const P=pt([{label:"Запусков",value:0},{label:"Спутников",value:0},{label:"Клиентов",value:0}]);function k(){const V=[142,876,89];P.value.forEach((H,_)=>{let m=0;const L=V[_],j=Math.ceil(L/50),ne=setInterval(()=>{m+=j,m>=L&&(m=L,clearInterval(ne)),H.value=m},30)})}const ee=pt(!1),ie=pt({});function N(V){ie.value=V,ee.value=!0}function W(){ee.value=!1}const O=["Инновационная конструкция","Высокая надёжность","Гарантия качества"],J=pt(!1),ce=pt({name:"",email:"",message:""});function be(){J.value=!0}function Ce(V){ce.value.message=`Интересуюсь: ${V.name}`,J.value=!0}function Pe(){alert("Заявка отправлена! Специалист свяжется с вами."),J.value=!1,ce.value={name:"",email:"",message:""}}const Ye=pt({show:!1,text:"",type:"success"});function st(V,H="success"){Ye.value={show:!0,text:V,type:H},setTimeout(()=>Ye.value.show=!1,3e3)}const Ge=pt([{name:"Ядерный буксир",icon:"⚛️",progress:68},{name:"Квантовая связь",icon:"🔒",progress:72},{name:"3D печать в космосе",icon:"🖨️",progress:85},{name:"Ионные двигатели",icon:"⚡",progress:91}]),se=pt([{name:"Илон М.",position:"SpaceX",text:"Превосходные компоненты, интеграция прошла идеально.",avatar:"https://randomuser.me/api/portraits/men/1.jpg"},{name:"Елена К.",position:"Роскосмос",text:"Надёжность ракет на высоте. Рекомендуем.",avatar:"https://randomuser.me/api/portraits/women/2.jpg"},{name:"Jean-Luc",position:"Arianespace",text:"Отличное сотрудничество, запуск в срок.",avatar:"https://randomuser.me/api/portraits/men/3.jpg"}]);let Ee=0;const _e=pt(null);function Oe(){_e.value&&(_e.value.style.transform=`translateX(-${Ee*360}px)`)}function Be(){Ee=(Ee-1+se.value.length)%se.value.length,Oe()}function ze(){Ee=(Ee+1)%se.value.length,Oe()}const A=pt(!0),C=pt([{role:"bot",text:"Здравствуйте! Чем помочь?"}]),G=pt("");function re(){G.value.trim()&&(C.value.push({role:"user",text:G.value}),setTimeout(()=>C.value.push({role:"bot",text:"Спасибо за вопрос. Наш инженер свяжется с вами."}),600),G.value="")}const $=pt(null);let Q,ue,he,y;function oe(){if(!$.value)return;const V=$.value.clientWidth,H=500;Q=new Lg,Q.background=new Je(329748),ue=new tn(45,V/H,.1,1e3),ue.position.set(0,0,3.5),he=new sS({antialias:!0}),he.setSize(V,H),$.value.innerHTML="",$.value.appendChild(he.domElement);const _=new t_,m=_.load("https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg"),L=_.load("https://threejs.org/examples/textures/planets/earth_specular_2048.jpg");_.load("https://threejs.org/examples/textures/planets/earth_normal_2048.jpg");const j=_.load("https://threejs.org/examples/textures/planets/earth_clouds_1024.png"),ne=new bu({map:m,specularMap:L,specular:new Je("grey"),shininess:5});y=new mn(new js(1,64,64),ne),Q.add(y);const le=new bu({map:j,transparent:!0,opacity:.2}),me=new mn(new js(1.01,64,64),le);Q.add(me);const Z=new gn,ae=3e3,ge=new Float32Array(ae*3);for(let pe=0;pe<ae;pe++)ge[pe*3]=(Math.random()-.5)*2e3,ge[pe*3+1]=(Math.random()-.5)*2e3,ge[pe*3+2]=(Math.random()-.5)*2e3-50;Z.setAttribute("position",new bn(ge,3));const ye=new Ch({color:16777215,size:.5}),Me=new Gg(Z,ye);Q.add(Me),[{lat:45.9,lon:63.3,name:"Байконур"},{lat:28.5,lon:-80.5,name:"Канаверал"},{lat:5.2,lon:-52.7,name:"Куру"},{lat:51.8,lon:128.3,name:"Восточный"},{lat:28.2,lon:102,name:"Сичан"},{lat:-39.3,lon:176.9,name:"Махия"}].forEach(pe=>{const te=(90-pe.lat)*Math.PI/180,Re=pe.lon*Math.PI/180,Se=1.02*Math.sin(te)*Math.cos(Re),fe=1.02*Math.cos(te),Ie=1.02*Math.sin(te)*Math.sin(Re),ke=new mn(new js(.02,16,16),new Kg({color:16724787,emissive:4460817}));ke.position.set(Se,fe,Ie),Q.add(ke)});const He=new a_(4210784);Q.add(He);const We=new r_(16777215,1);We.position.set(5,3,5),Q.add(We);const Qe=new i_(4482764,.5);Qe.position.set(-2,-1,-3),Q.add(Qe);function U(){requestAnimationFrame(U),y.rotation.y+=.0015,me.rotation.y+=.0017,he.render(Q,ue)}U(),window.addEventListener("resize",()=>{if($.value){const pe=$.value.clientWidth,te=500;ue.aspect=pe/te,ue.updateProjectionMatrix(),he.setSize(pe,te)}})}Uf(()=>{oe(),B(),R=setInterval(B,1e3),k()}),Gl(()=>{clearInterval(R),he&&he.dispose()});const ve=pt([{name:"Байконур",country:"Казахстан",launches:1542},{name:"Мыс Канаверал",country:"США",launches:980},{name:"Куру",country:"Французская Гвиана",launches:312},{name:"Восточный",country:"Россия",launches:89},{name:"Сичан",country:"Китай",launches:201},{name:"Махия",country:"Новая Зеландия",launches:47}]),de=V=>({left:Math.random()*100+"%",top:Math.random()*100+"%",animationDuration:5+Math.random()*20+"s",animationDelay:Math.random()*10+"s"});return(V,H)=>(et(),it("div",rS,[z("div",aS,[(et(),it(wt,null,ln(300,_=>z("div",{key:_,class:"star",style:Zs(de())},null,4)),64))]),z("div",oS,[z("section",lS,[z("div",cS,[H[14]||(H[14]=z("h1",null,[un("КОСМИЧЕСКИЙ "),z("span",{class:"gradient-text"},"КАТАЛОГ")],-1)),H[15]||(H[15]=z("p",{class:"tagline"},"Ракеты • Компоненты • Запуски — более 50 решений",-1)),z("div",uS,[H[13]||(H[13]=z("div",{class:"countdown-label"},"БЛИЖАЙШИЙ СТАРТ",-1)),z("div",fS,ot(D.value)+"д "+ot(w.value)+"ч "+ot(I.value)+"м "+ot(x.value)+"с",1)]),z("div",hS,[(et(!0),it(wt,null,ln(P.value,_=>(et(),it("div",{key:_.label,class:"stat-item"},[z("span",dS,ot(_.value),1),z("span",pS,ot(_.label),1)]))),128))])])]),z("div",mS,[z("div",gS,[H[16]||(H[16]=z("i",{class:"fas fa-search"},null,-1)),ji(z("input",{"onUpdate:modelValue":H[0]||(H[0]=_=>i.value=_),placeholder:"Поиск по названию, характеристикам..."},null,512),[[Ls,i.value]])]),z("div",_S,[(et(),it(wt,null,ln(r,_=>z("button",{key:_,class:nn(["filter-chip",{active:s.value===_}]),onClick:m=>s.value=_},ot(_),11,vS)),64)),z("button",{class:"filter-chip",onClick:H[1]||(H[1]=_=>a.value=!a.value)},[...H[17]||(H[17]=[z("i",{class:"fas fa-heart"},null,-1),un(" Избранное",-1)])])])]),z("div",xS,[(et(!0),it(wt,null,ln(h.value,_=>(et(),it("div",{key:_.id,class:"product-tile-advanced"},[z("div",MS,[z("img",{src:_.img,alt:_.name,loading:"lazy"},null,8,SS),z("button",{class:nn(["fav-toggle",{active:o.value.includes(_.id)}]),onClick:m=>v(_.id)},[...H[18]||(H[18]=[z("i",{class:"fas fa-heart"},null,-1)])],10,ES),_.hot?(et(),it("div",bS,"🔥 Хит продаж")):Zi("",!0)]),z("div",yS,[z("h3",null,ot(_.name),1),z("div",TS,[(et(!0),it(wt,null,ln(Object.entries(_.specs).slice(0,2),(m,L)=>(et(),it("span",{key:L},ot(m[0])+": "+ot(m[1]),1))),128))]),z("div",AS,[z("button",{onClick:m=>N(_)},[...H[19]||(H[19]=[z("i",{class:"fas fa-info-circle"},null,-1),un(" Детали",-1)])],8,wS),z("button",{class:"primary",onClick:m=>d(_)},[...H[20]||(H[20]=[z("i",{class:"fas fa-cart-plus"},null,-1),un(" В корзину",-1)])],8,RS)])])]))),128))]),z("div",CS,[z("button",{onClick:f,disabled:l.value===1},"← Предыдущая",8,PS),z("span",null,"Страница "+ot(l.value)+" из "+ot(u.value),1),z("button",{onClick:p,disabled:l.value===u.value},"Следующая →",8,DS)]),z("div",LS,[H[22]||(H[22]=z("h2",null,[z("i",{class:"fas fa-globe-americas"}),un(" Космодромы Земли в реальном времени")],-1)),z("div",{id:"three-canvas",class:"earth-canvas",ref_key:"earthContainer",ref:$},null,512),z("div",IS,[(et(!0),it(wt,null,ln(ve.value,_=>(et(),it("div",{key:_.name,class:"port-badge"},[H[21]||(H[21]=z("i",{class:"fas fa-map-marker-alt"},null,-1)),un(" "+ot(_.name)+" ("+ot(_.country)+") — "+ot(_.launches)+" запусков ",1)]))),128))])]),z("div",US,[z("div",{class:"cart-header",onClick:H[2]||(H[2]=_=>g.value=!g.value)},[z("h3",null,[H[23]||(H[23]=z("i",{class:"fas fa-shopping-cart"},null,-1)),un(" Корзина товаров ("+ot(E.value.length)+")",1)]),z("i",{class:nn(g.value?"fas fa-chevron-up":"fas fa-chevron-down")},null,2)]),ji(z("div",NS,[E.value.length===0?(et(),it("div",FS,"Корзина пуста. Добавьте ракеты или компоненты!")):(et(),it("div",OS,[(et(!0),it(wt,null,ln(E.value,_=>(et(),it("div",{key:_.id,class:"cart-row"},[z("span",null,ot(_.name),1),z("span",null,ot(_.price||"Цена по запросу"),1),z("button",{onClick:m=>S(_.id),class:"remove-btn"},"Удалить",8,BS)]))),128)),z("div",{class:"cart-summary"},[z("button",{class:"btn-primary",onClick:T},"Оформить заказ")])]))],512),[[em,g.value]])]),z("div",zS,[H[24]||(H[24]=z("h2",null,[z("i",{class:"fas fa-microchip"}),un(" Технологии будущего")],-1)),z("div",VS,[(et(!0),it(wt,null,ln(Ge.value,_=>(et(),it("div",{key:_.name,class:"tech-row"},[z("span",null,ot(_.name)+" "+ot(_.icon),1),z("div",HS,[z("div",{class:"progress-fill",style:Zs({width:_.progress+"%"})},null,4)]),z("span",null,ot(_.progress)+"%",1)]))),128))])]),z("div",GS,[H[25]||(H[25]=z("h2",null,[z("i",{class:"fas fa-quote-right"}),un(" Отзывы партнёров")],-1)),z("div",{class:"testimonial-slider",ref_key:"testimonialSlider",ref:_e},[(et(!0),it(wt,null,ln(se.value,_=>(et(),it("div",{key:_.name,class:"testimonial-card"},[z("img",{src:_.avatar,alt:"avatar"},null,8,kS),z("p",null,'"'+ot(_.text)+'"',1),z("h4",null,ot(_.name),1),z("span",null,ot(_.position),1)]))),128))],512),z("div",{class:"slider-controls"},[z("button",{onClick:Be},"◀"),z("button",{onClick:ze},"▶")])]),z("div",{class:"final-cta-universe"},[z("div",{class:"cta-glow"},[H[27]||(H[27]=z("h2",null,"Готовы к запуску?",-1)),H[28]||(H[28]=z("p",null,"Оставьте заявку — наши инженеры подготовят индивидуальное предложение",-1)),z("button",{class:"btn-super",onClick:be},[...H[26]||(H[26]=[z("i",{class:"fas fa-paper-plane"},null,-1),un(" Отправить заявку",-1)])])])])]),ee.value?(et(),it("div",{key:0,class:"modal-overlay",onClick:Wt(W,["self"])},[z("div",WS,[z("div",XS,[z("h2",null,ot(ie.value.name),1),z("button",{onClick:W},"✖")]),z("div",qS,[z("img",{src:ie.value.img,alt:""},null,8,YS),z("div",$S,[(et(!0),it(wt,null,ln(ie.value.specs,(_,m)=>(et(),it("div",{key:m,class:"spec-line"},[z("strong",null,ot(m)+":",1),un(" "+ot(_),1)]))),128))]),z("div",KS,[H[29]||(H[29]=z("h3",null,"История эксплуатации",-1)),z("p",null,ot(ie.value.history||"Новейшая разработка, готов к сертификации."),1),H[30]||(H[30]=z("h3",null,"Технические особенности",-1)),z("ul",null,[(et(!0),it(wt,null,ln(ie.value.features||O,_=>(et(),it("li",{key:_},ot(_),1))),128))]),H[31]||(H[31]=z("h3",null,"Видеообзор (симуляция)",-1)),H[32]||(H[32]=z("div",{class:"video-placeholder"},"🎬 Интерактивная 3D-модель доступна по запросу",-1))]),z("div",jS,[z("button",{class:"btn-primary",onClick:H[3]||(H[3]=_=>d(ie.value))},"Добавить в корзину"),z("button",{class:"btn-outline",onClick:H[4]||(H[4]=_=>Ce(ie.value))},"Запросить консультацию")])])])])):Zi("",!0),J.value?(et(),it("div",{key:1,class:"modal-overlay",onClick:H[9]||(H[9]=Wt(_=>J.value=!1,["self"]))},[z("div",ZS,[z("div",JS,[H[33]||(H[33]=z("h2",null,"Космическая заявка",-1)),z("button",{onClick:H[5]||(H[5]=_=>J.value=!1)},"✖")]),z("div",QS,[z("form",{onSubmit:Wt(Pe,["prevent"])},[ji(z("input",{type:"text",placeholder:"Имя","onUpdate:modelValue":H[6]||(H[6]=_=>ce.value.name=_),required:""},null,512),[[Ls,ce.value.name]]),ji(z("input",{type:"email",placeholder:"Email","onUpdate:modelValue":H[7]||(H[7]=_=>ce.value.email=_),required:""},null,512),[[Ls,ce.value.email]]),ji(z("textarea",{placeholder:"Детали проекта, интересующий товар...","onUpdate:modelValue":H[8]||(H[8]=_=>ce.value.message=_)},null,512),[[Ls,ce.value.message]]),H[34]||(H[34]=z("button",{type:"submit",class:"btn-primary"},"Отправить",-1))],32)])])])):Zi("",!0),Ye.value.show?(et(),it("div",{key:2,class:nn(["toast-message",Ye.value.type])},ot(Ye.value.text),3)):Zi("",!0),A.value?(et(),it("div",eE,[z("div",tE,[z("div",{class:"chat-head",onClick:H[10]||(H[10]=_=>A.value=!1)},"💬 Чат поддержки ✖"),z("div",nE,[(et(!0),it(wt,null,ln(C.value,_=>(et(),it("div",{key:_.id,class:nn(_.role)},ot(_.text),3))),128))]),z("div",iE,[ji(z("input",{"onUpdate:modelValue":H[11]||(H[11]=_=>G.value=_),onKeyup:vm(re,["enter"]),placeholder:"Напишите вопрос..."},null,544),[[Ls,G.value]]),z("button",{onClick:re},"➤")])])])):Zi("",!0),A.value?Zi("",!0):(et(),it("div",{key:4,class:"chat-toggle",onClick:H[12]||(H[12]=_=>A.value=!A.value)},"💬"))]))}},rE=ql(sE,[["__scopeId","data-v-69fa3e53"]]),aE={},oE={class:"site-footer"};function lE(n,e){return et(),it("footer",oE,[...e[0]||(e[0]=[Op('<div class="site-footer__container" data-v-bb0c3319><div class="site-footer__main" data-v-bb0c3319><div class="site-footer__brand" data-v-bb0c3319><a href="#top" class="site-footer__logo" data-v-bb0c3319><img class="site-footer__logo-image" src="'+rh+'" alt="Oblivione Space" data-v-bb0c3319><span class="site-footer__logo-text" data-v-bb0c3319> Oblivione Space </span></a><p data-v-bb0c3319> Частная компания в сфере ракетостроения, спутниковых решений и инженерных исследований. </p></div><div class="site-footer__column" data-v-bb0c3319><h3 data-v-bb0c3319>Навигация</h3><a href="#top" data-v-bb0c3319>Главная</a><a href="#mission" data-v-bb0c3319>Миссия</a><a href="#stats" data-v-bb0c3319>Показатели</a><a href="#directions" data-v-bb0c3319>Направления</a></div><div class="site-footer__column" data-v-bb0c3319><h3 data-v-bb0c3319>Разделы</h3><a href="#partners" data-v-bb0c3319>Партнёры</a><a href="#" data-v-bb0c3319>О компании</a><a href="#" data-v-bb0c3319>Проекты</a><a href="#" data-v-bb0c3319>Контакты</a></div><div class="site-footer__column" data-v-bb0c3319><h3 data-v-bb0c3319>Контакты</h3><p data-v-bb0c3319>info@oblivione-space.ru</p><p data-v-bb0c3319>+7 (900) 000-00-00</p></div></div><div class="site-footer__bottom" data-v-bb0c3319><p data-v-bb0c3319>© 2026 Oblivione Space</p><p data-v-bb0c3319>Учебный проект</p></div></div>',1)])])}const cE=ql(aE,[["render",lE],["__scopeId","data-v-bb0c3319"]]),uE={class:"app"},fE={__name:"App",setup(n){return(e,t)=>(et(),it("div",uE,[an(Nm),an(rE),an(cE)]))}};Sm(fE).mount("#app");
