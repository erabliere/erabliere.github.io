import{a as F,r as A,b as H,e as T,w as L,u as M,f as z,h as j,i as S,o as C,j as O,k as h,F as $,l as N,m as E,t as B,p as I,c as R}from"./entry.74cdad59.js";const K=()=>null;function U(...o){var y,p,g,v,b,w,D,k,f;const c=typeof o[o.length-1]=="string"?o.pop():void 0;typeof o[0]!="string"&&o.unshift(c);let[n,l,a={}]=o;if(typeof n!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof l!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");a.server=(y=a.server)!=null?y:!0,a.default=(p=a.default)!=null?p:K,a.defer&&console.warn("[useAsyncData] `defer` has been renamed to `lazy`. Support for `defer` will be removed in RC."),a.lazy=(v=(g=a.lazy)!=null?g:a.defer)!=null?v:!1,a.initialCache=(b=a.initialCache)!=null?b:!0,a.immediate=(w=a.immediate)!=null?w:!0;const e=F(),s=()=>(e.isHydrating||a.initialCache)&&e.payload.data[n]!==void 0;e._asyncData[n]||(e._asyncData[n]={data:A(s()?e.payload.data[n]:(k=(D=a.default)==null?void 0:D.call(a))!=null?k:null),pending:A(!s()),error:A((f=e.payload._errors[n])!=null?f:null)});const t={...e._asyncData[n]};t.refresh=t.execute=(u={})=>{if(e._asyncDataPromises[n]){if(u.dedupe===!1)return e._asyncDataPromises[n];e._asyncDataPromises[n].cancelled=!0}if(u._initial&&s())return e.payload.data[n];t.pending.value=!0;const i=new Promise((r,d)=>{try{r(l(e))}catch(x){d(x)}}).then(r=>{if(i.cancelled)return e._asyncDataPromises[n];a.transform&&(r=a.transform(r)),a.pick&&(r=Y(r,a.pick)),t.data.value=r,t.error.value=null}).catch(r=>{var d,x;if(i.cancelled)return e._asyncDataPromises[n];t.error.value=r,t.data.value=M((x=(d=a.default)==null?void 0:d.call(a))!=null?x:null)}).finally(()=>{i.cancelled||(t.pending.value=!1,e.payload.data[n]=t.data.value,t.error.value&&(e.payload._errors[n]=!0),delete e._asyncDataPromises[n])});return e._asyncDataPromises[n]=i,e._asyncDataPromises[n]};const m=()=>t.refresh({_initial:!0}),P=a.server!==!1&&e.payload.serverRendered;{const u=z();if(u&&!u._nuxtOnBeforeMountCbs){u._nuxtOnBeforeMountCbs=[];const r=u._nuxtOnBeforeMountCbs;u&&(H(()=>{r.forEach(d=>{d()}),r.splice(0,r.length)}),T(()=>r.splice(0,r.length)))}P&&e.isHydrating&&n in e.payload.data?t.pending.value=!1:u&&(e.payload.serverRendered&&e.isHydrating||a.lazy)&&a.immediate?u._nuxtOnBeforeMountCbs.push(m):a.immediate&&m(),a.watch&&L(a.watch,()=>t.refresh());const i=e.hook("app:data:refresh",r=>{if(!r||r.includes(n))return t.refresh()});u&&T(i)}const _=Promise.resolve(e._asyncDataPromises[n]).then(()=>t);return Object.assign(_,t),_}function Y(o,c){const n={};for(const l of c)n[l]=o[l];return n}function Z(o,c,n){const[l={},a]=typeof c=="string"?[{},c]:[c,n],e=l.key||a;if(!e||typeof e!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+e);if(!o)throw new Error("[nuxt] [useFetch] request is missing.");const s="$f"+e,t=j(()=>{let i=o;return typeof i=="function"&&(i=i()),M(i)}),{server:m,lazy:P,default:_,transform:y,pick:p,watch:g,initialCache:v,immediate:b,...w}=l,D={...w,cache:typeof l.cache=="boolean"?void 0:l.cache},k={server:m,lazy:P,default:_,transform:y,pick:p,initialCache:v,immediate:b,watch:[t,...g||[]]};let f;return U(s,()=>{var i;return(i=f==null?void 0:f.abort)==null||i.call(f),f=typeof AbortController<"u"?new AbortController:{},$fetch(t.value,{signal:f.signal,...D})},k)}const q={class:"timeline"},G={class:"datetime"},V={class:"title"},J=["innerHTML"],Q=["innerHTML"],W={__name:"TimelinePosts",async setup(o){let c,n;function l(e){return![t=>t.visible==="oui",t=>t.content_html.match(/[^\s]+/gm)].find(t=>!t(e))}const{data:a}=([c,n]=S(()=>Z("https://erabliere.ga/web/posts.json",{transform:e=>(e.posts=e.posts.map(s=>(s.author==="kafkaah"?s.align="right":s.author==="ttonatiuhh"&&(s.align="left"),s.short_date=new Date(s.date_published).toLocaleString("fr-CA",{timeZone:"America/New_York",year:"numeric",month:"numeric",day:"numeric"}),s.short_time=new Date(s.date_published).toLocaleString("fr-CA",{timeZone:"America/New_York",hour:"numeric",minute:"numeric",hour12:!1}),s.tagline=s.tags.map(t=>`<span class="tag">${t}</span>`).join(" &bull; "),s)).filter(l).sort((s,t)=>s.date_published>t.date_published?1:t.date_published>s.date_published?-1:0),e),key:"arbitrary"},"$yExiUGm3iI")),c=await c,n(),c);return(e,s)=>(C(),O("section",q,[h("ul",null,[(C(!0),O($,null,N(M(a).posts,t=>(C(),O("li",{class:E([t.align,"event font-sans"])},[h("div",{class:E([t.align,"content info"])},[h("div",G,B(t.short_date)+" \xE0 "+B(t.short_time),1),h("div",V,B(t.title),1),h("div",{class:"tagline",innerHTML:t.tagline},null,8,J)],2),h("div",{innerHTML:t.content_html,class:"content post text-sm"},null,8,Q)],2))),256))])]))}},X={};function ee(o,c){const n=W;return C(),R(n)}const ae=I(X,[["render",ee]]);export{ae as default};
