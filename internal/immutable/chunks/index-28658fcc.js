function w(){}const ct=t=>t;function lt(t,e){for(const n in e)t[n]=e[n];return t}function W(t){return t()}function L(){return Object.create(null)}function v(t){t.forEach(W)}function F(t){return typeof t=="function"}function Bt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let C;function Rt(t,e){return C||(C=document.createElement("a")),C.href=e,t===C.href}function ut(t){return Object.keys(t).length===0}function at(t,...e){if(t==null)return w;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Tt(t,e,n){t.$$.on_destroy.push(at(e,n))}function Ft(t,e,n,i){if(t){const r=Q(t,e,n,i);return t[0](r)}}function Q(t,e,n,i){return t[1]&&i?lt(n.ctx.slice(),t[1](i(e))):n.ctx}function Ht(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],o=Math.max(e.dirty.length,r.length);for(let s=0;s<o;s+=1)u[s]=e.dirty[s]|r[s];return u}return e.dirty|r}return e.dirty}function It(t,e,n,i,r,u){if(r){const o=Q(e,n,i,u);t.p(o,r)}}function Lt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}const U=typeof window<"u";let ft=U?()=>window.performance.now():()=>Date.now(),H=U?t=>requestAnimationFrame(t):w;const $=new Set;function V(t){$.forEach(e=>{e.c(t)||($.delete(e),e.f())}),$.size!==0&&H(V)}function _t(t){let e;return $.size===0&&H(V),{promise:new Promise(n=>{$.add(e={c:t,f:n})}),abort(){$.delete(e)}}}let O=!1;function dt(){O=!0}function ht(){O=!1}function mt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function pt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let l=0;l<e.length;l++){const _=e[l];_.claim_order!==void 0&&c.push(_)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const l=e[c].claim_order,_=(r>0&&e[n[r]].claim_order<=l?r+1:mt(1,r,h=>e[n[h]].claim_order,l))-1;i[c]=n[_]+1;const a=_+1;n[a]=c,r=Math.max(a,r)}const u=[],o=[];let s=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(u.push(e[c-1]);s>=c;s--)o.push(e[s]);s--}for(;s>=0;s--)o.push(e[s]);u.reverse(),o.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<o.length;c++){for(;l<u.length&&o[c].claim_order>=u[l].claim_order;)l++;const _=l<u.length?u[l]:null;t.insertBefore(o[c],_)}}function yt(t,e){t.appendChild(e)}function X(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function gt(t){const e=Z("style");return xt(X(t),e),e.sheet}function xt(t,e){return yt(t.head||t,e),e.sheet}function bt(t,e){if(O){for(pt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Gt(t,e,n){O&&!n?bt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function Y(t){t.parentNode&&t.parentNode.removeChild(t)}function Z(t){return document.createElement(t)}function $t(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function I(t){return document.createTextNode(t)}function Jt(){return I(" ")}function Kt(){return I("")}function Wt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function wt(t){return Array.from(t.childNodes)}function vt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function tt(t,e,n,i,r=!1){vt(t);const u=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const s=t[o];if(e(s)){const c=n(s);return c===void 0?t.splice(o,1):t[o]=c,r||(t.claim_info.last_index=o),s}}for(let o=t.claim_info.last_index-1;o>=0;o--){const s=t[o];if(e(s)){const c=n(s);return c===void 0?t.splice(o,1):t[o]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,s}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function et(t,e,n,i){return tt(t,r=>r.nodeName===e,r=>{const u=[];for(let o=0;o<r.attributes.length;o++){const s=r.attributes[o];n[s.name]||u.push(s.name)}u.forEach(o=>r.removeAttribute(o))},()=>i(e))}function Qt(t,e,n){return et(t,e,n,Z)}function Ut(t,e,n){return et(t,e,n,$t)}function Et(t,e){return tt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>I(e),!0)}function Vt(t){return Et(t," ")}function Xt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Yt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Nt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function Zt(t,e){return new t(e)}const M=new Map;let q=0;function At(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function St(t,e){const n={stylesheet:gt(e),rules:{}};return M.set(t,n),n}function G(t,e,n,i,r,u,o,s=0){const c=16.666/i;let l=`{
`;for(let y=0;y<=1;y+=c){const g=e+(n-e)*u(y);l+=y*100+`%{${o(g,1-g)}}
`}const _=l+`100% {${o(n,1-n)}}
}`,a=`__svelte_${At(_)}_${s}`,h=X(t),{stylesheet:f,rules:d}=M.get(h)||St(h,t);d[a]||(d[a]=!0,f.insertRule(`@keyframes ${a} ${_}`,f.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${a} ${i}ms linear ${r}ms 1 both`,q+=1,a}function Ct(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?u=>u.indexOf(e)<0:u=>u.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),q-=r,q||jt())}function jt(){H(()=>{q||(M.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&Y(e)}),M.clear())})}let A;function N(t){A=t}function nt(){if(!A)throw new Error("Function called outside component initialization");return A}function te(t){nt().$$.on_mount.push(t)}function ee(t){nt().$$.after_update.push(t)}const b=[],J=[],j=[],K=[],it=Promise.resolve();let T=!1;function rt(){T||(T=!0,it.then(st))}function ne(){return rt(),it}function D(t){j.push(t)}const B=new Set;let x=0;function st(){if(x!==0)return;const t=A;do{try{for(;x<b.length;){const e=b[x];x++,N(e),kt(e.$$)}}catch(e){throw b.length=0,x=0,e}for(N(null),b.length=0,x=0;J.length;)J.pop()();for(let e=0;e<j.length;e+=1){const n=j[e];B.has(n)||(B.add(n),n())}j.length=0}while(b.length);for(;K.length;)K.pop()();T=!1,B.clear(),N(t)}function kt(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(D)}}let E;function Mt(){return E||(E=Promise.resolve(),E.then(()=>{E=null})),E}function R(t,e,n){t.dispatchEvent(Nt(`${e?"intro":"outro"}${n}`))}const k=new Set;let p;function ie(){p={r:0,c:[],p}}function re(){p.r||v(p.c),p=p.p}function qt(t,e){t&&t.i&&(k.delete(t),t.i(e))}function se(t,e,n,i){if(t&&t.o){if(k.has(t))return;k.add(t),p.c.push(()=>{k.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Dt={duration:0};function oe(t,e,n,i){const r={direction:"both"};let u=e(t,n,r),o=i?0:1,s=null,c=null,l=null;function _(){l&&Ct(t,l)}function a(f,d){const m=f.b-o;return d*=Math.abs(m),{a:o,b:f.b,d:m,duration:d,start:f.start,end:f.start+d,group:f.group}}function h(f){const{delay:d=0,duration:m=300,easing:y=ct,tick:g=w,css:P}=u||Dt,z={start:ft()+d,b:f};f||(z.group=p,p.r+=1),s||c?c=z:(P&&(_(),l=G(t,o,f,m,d,y,P)),f&&g(0,1),s=a(z,m),D(()=>R(t,f,"start")),_t(S=>{if(c&&S>c.start&&(s=a(c,m),c=null,R(t,s.b,"start"),P&&(_(),l=G(t,o,s.b,s.duration,0,y,u.css))),s){if(S>=s.end)g(o=s.b,1-o),R(t,s.b,"end"),c||(s.b?_():--s.group.r||v(s.group.c)),s=null;else if(S>=s.start){const ot=S-s.start;o=s.a+s.d*y(ot/s.duration),g(o,1-o)}}return!!(s||c)}))}return{run(f){F(u)?Mt().then(()=>{u=u(r),h(f)}):h(f)},end(){_(),s=c=null}}}function ce(t){t&&t.c()}function le(t,e){t&&t.l(e)}function Ot(t,e,n,i){const{fragment:r,after_update:u}=t.$$;r&&r.m(e,n),i||D(()=>{const o=t.$$.on_mount.map(W).filter(F);t.$$.on_destroy?t.$$.on_destroy.push(...o):v(o),t.$$.on_mount=[]}),u.forEach(D)}function Pt(t,e){const n=t.$$;n.fragment!==null&&(v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function zt(t,e){t.$$.dirty[0]===-1&&(b.push(t),rt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ue(t,e,n,i,r,u,o,s=[-1]){const c=A;N(t);const l=t.$$={fragment:null,ctx:[],props:u,update:w,not_equal:r,bound:L(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:L(),dirty:s,skip_bound:!1,root:e.target||c.$$.root};o&&o(l.root);let _=!1;if(l.ctx=n?n(t,e.props||{},(a,h,...f)=>{const d=f.length?f[0]:h;return l.ctx&&r(l.ctx[a],l.ctx[a]=d)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](d),_&&zt(t,a)),h}):[],l.update(),_=!0,v(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){dt();const a=wt(e.target);l.fragment&&l.fragment.l(a),a.forEach(Y)}else l.fragment&&l.fragment.c();e.intro&&qt(t.$$.fragment),Ot(t,e.target,e.anchor,e.customElement),ht(),st()}N(c)}class ae{$destroy(){Pt(this,1),this.$destroy=w}$on(e,n){if(!F(n))return w;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!ut(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ne as A,w as B,Ft as C,bt as D,It as E,Lt as F,Ht as G,Tt as H,$t as I,Ut as J,Rt as K,D as L,oe as M,ae as S,Jt as a,Gt as b,Vt as c,re as d,Kt as e,qt as f,ie as g,Y as h,ue as i,ee as j,Z as k,Qt as l,wt as m,Wt as n,te as o,Yt as p,I as q,Et as r,Bt as s,se as t,Xt as u,Zt as v,ce as w,le as x,Ot as y,Pt as z};
