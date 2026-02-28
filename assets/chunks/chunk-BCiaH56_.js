import{r as l,g as x,j as u,R as N}from"./chunk-cMJXiiAG.js";const S="h1",y=l.forwardRef(({tag:t,...e},i)=>{const r=x(e)??t??S;return l.createElement(r,{...e,ref:i})});y.displayName="Heading";const z=l.forwardRef(({children:t,...e},i)=>u.jsx("p",{...e,ref:i,children:t}));z.displayName="Paragraph";var I=[16,32,48,64,96,128,256,384],o=[640,750,828,1080,1200,1920,2048,3840],h=[...I,...o],b=(t,e)=>{if(e){const s=/(^|\s)(1?\d?\d)vw/g,a=[];for(let n;n=s.exec(e);n)a.push(Number.parseInt(n[2],10));if(a.length){const n=Math.min(...a)*.01;return{widths:h.filter(d=>d>=o[0]*n),kind:"w"}}return{widths:h,kind:"w"}}if(t==null)return{widths:o,kind:"w"};const i=2;let r=h.findIndex(s=>s>=i*t);return r=r<0?h.length:r,{widths:h.slice(0,r+1),kind:"w"}},E=({src:t,width:e,quality:i,sizes:r,loader:s})=>{const{widths:a,kind:n}=b(e,r);return{sizes:!r&&n==="w"?"100vw":r,srcSet:a.map((d,c)=>`${s({src:t,quality:i,width:d})} ${n==="w"?d:c+1}${n}`).join(", "),src:s({src:t,quality:i,width:a[a.length-1]})}},g=t=>{if(typeof t=="number")return Math.round(t);if(typeof t=="string"){const e=Number.parseFloat(t);if(!Number.isNaN(e))return Math.round(e)}},R="(min-width: 1280px) 50vw, 100vw",L=80,M=t=>{try{return new URL(t),!0}catch{return!1}},A=t=>{const e=g(t.width),i=Math.max(Math.min(g(t.quality)??L,100),0);if(t.src!=null&&t.src!==""){if(t.srcSet==null&&t.optimize){const s=t.sizes??(t.width==null?R:void 0);return E({src:t.src,width:e,quality:i,sizes:s,loader:t.loader})}const r={src:M(t.src)?t.src:t.loader({src:t.src,format:"raw"})};return t.srcSet!=null&&(r.srcSet=t.srcSet),t.sizes!=null&&(r.sizes=t.sizes),r}},m=l.forwardRef(({quality:t,loader:e,optimize:i=!0,loading:r="lazy",decoding:s="async",...a},n)=>{const d=A({src:a.src,srcSet:a.srcSet,sizes:a.sizes,width:a.width,quality:t,loader:e,optimize:i})??{src:D};return u.jsx("img",{alt:"",...a,...d,decoding:s,loading:r,ref:n})});m.displayName="Image";var D=`data:image/svg+xml;base64,${btoa(`<svg
  width="140"
  height="140"
  viewBox="0 0 600 600"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  >
  <rect width="600" height="600" fill="#DFE3E6" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M450 170H150C141.716 170 135 176.716 135 185V415C135 423.284 141.716 430 150 430H450C458.284 430 465 423.284 465 415V185C465 176.716 458.284 170 450 170ZM150 145C127.909 145 110 162.909 110 185V415C110 437.091 127.909 455 150 455H450C472.091 455 490 437.091 490 415V185C490 162.909 472.091 145 450 145H150Z"
    fill="#C1C8CD"
  />
  <path
    d="M237.135 235.012C237.135 255.723 220.345 272.512 199.635 272.512C178.924 272.512 162.135 255.723 162.135 235.012C162.135 214.301 178.924 197.512 199.635 197.512C220.345 197.512 237.135 214.301 237.135 235.012Z"
    fill="#C1C8CD"
  />
  <path
    d="M160 405V367.205L221.609 306.364L256.552 338.628L358.161 234L440 316.043V405H160Z"
    fill="#C1C8CD"
  />
</svg>`)}`;const V=l.forwardRef(({loading:t="lazy",width:e,height:i,optimize:r=!0,decoding:s,$webstudio$canvasOnly$assetId:a,...n},d)=>{const c=String(n.src??""),{imageLoader:v,renderer:C}=l.useContext(N);let w=s,f=c;return C==="canvas"&&(t="eager",w="sync",f=a??c,e!==void 0&&i!==void 0&&Number.isNaN(e)&&Number.isNaN(i)&&(r=!1,e=void 0,i=void 0)),u.jsx(m,{loading:t,decoding:w,optimize:r,width:e,height:i,...n,loader:v,src:c,ref:d},f)});V.displayName="Image";export{y as d,z as f,V as y};
