import{q as u,s as m,r as d,i as h,o as r,j as o,k as a,t as i,u as l,F as f,l as g,m as _,p,c as b}from"./entry.74cdad59.js";function w(n){return![t=>t.visible==="oui",t=>t.content_html.match(/[^\s]+/gm)].find(t=>!t(n))}function k(n){return n.posts=n.posts.map(e=>(e.author==="kafkaah"?e.align="right":e.author==="ttonatiuhh"&&(e.align="left"),e.short_date=new Date(e.date_published).toLocaleString("fr-CA",{timeZone:"America/New_York",year:"numeric",month:"numeric",day:"numeric"}),e.short_time=new Date(e.date_published).toLocaleString("fr-CA",{timeZone:"America/New_York",hour:"numeric",minute:"numeric",hour12:!1}),e.tagline=e.tags.map(t=>`<span class="tag">${t}</span>`).join(" &bull; "),e)).filter(w).sort((e,t)=>e.date_published>t.date_published?1:t.date_published>e.date_published?-1:0),n}const v=async()=>{const n="https://erabliere.ga/web/posts.json",e=await $fetch.raw(n);return u("posts",()=>k(e._data).posts)},x={class:"timeline"},L={class:"datetime"},S={class:"title"},y=["innerHTML"],A=["innerHTML"],C=m({__name:"Store",async setup(n){let e,t;d(0);const c=([e,t]=h(()=>v()),e=await e,t(),e);return(M,T)=>(r(),o("section",x,[a("pre",null,i(l(c)),1),a("ul",null,[(r(!0),o(f,null,g(l(c),s=>(r(),o("li",{class:_([s.align,"event font-sans"])},[a("div",{class:_([s.align,"content info"])},[a("div",L,i(s.short_date)+" \xE0 "+i(s.short_time),1),a("div",S,i(s.title),1),a("div",{class:"tagline",innerHTML:s.tagline},null,8,y)],2),a("div",{innerHTML:s.content_html,class:"content post text-sm"},null,8,A)],2))),256))])]))}}),B={};function H(n,e){const t=C;return r(),b(t)}const D=p(B,[["render",H]]);export{D as default};
