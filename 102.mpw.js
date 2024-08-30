var MPW;(()=>{var e,t,r,n,o={95856:()=>{},27355:(e,t,r)=>{"use strict";const n=10**8,o=(0,r(2262).qj)({current:null,main:{name:"mainnet",collateralInSats:1e4*n,isTestnet:!1,TICKER:"TLS",PUBKEY_PREFIX:["T"],STAKING_PREFIX:"T",PUBKEY_ADDRESS:66,STAKING_ADDRESS:66,SECRET_KEY:128,BIP44_TYPE:10117,BIP44_TYPE_LEDGER:77,PROTOCOL_VERSION:70926,MASTERNODE_PORT:8767,Explorers:[{name:"TLS BlockBook",url:"https://blockbook.telestai.io"}],Nodes:[{name:"TLS 1",url:"https://dnsseed.telestainodes.xyz"},{name:"TLS 2",url:"https://telestai.seeds.multicoin.co"}],Consensus:{UPGRADE_V6_0:void 0},coinbaseMaturity:100,budgetCycleBlocks:43200,proposalFee:50*n,proposalFeeConfirmRequirement:6,maxPaymentCycles:6,maxPayment:432e3*n,defaultColdStakingAddress:"TdgQDpS8jDRJDX8yK8m9KnTMarsE84zdsy"},testnet:{name:"testnet",collateralInSats:1e4*n,isTestnet:!0,TICKER:"tTLS",PUBKEY_PREFIX:["t","t"],STAKING_PREFIX:"t",PUBKEY_ADDRESS:111,STAKING_ADDRESS:111,SECRET_KEY:239,BIP44_TYPE:1,BIP44_TYPE_LEDGER:1,PROTOCOL_VERSION:70926,MASTERNODE_PORT:18770,Explorers:[{name:"TLS Blockbook",url:"https://blockbook.telestai.io"}],Nodes:[{name:"TLS TestNode1",url:"seed1-testnet.telestai.io"},{name:"TLS TestNode2",url:"seed2-testnet.telestai.io"}],Consensus:{UPGRADE_V6_0:void 0},coinbaseMaturity:15,budgetCycleBlocks:144,proposalFee:50*n,proposalFeeConfirmRequirement:3,maxPaymentCycles:20,maxPayment:1440*n,defaultColdStakingAddress:"tmNziUEPyhnUkiVdfsiNX93H6rSJnios44"}});o.current=o.main;var s=r(17748),i=r(48764);function a(e){return i.Buffer.from(e).toString("hex")}function l(e=32){return crypto.getRandomValues(new Uint8Array(e))}function c(e,t,r){const n=e.length;if(n-r-t.length<0){const e="CRITICAL: Overflow detected ("+(n-r-t.length)+"), possible state corruption, backup and refresh advised.";throw new Error(e)}let o=0;for(;r<n;)e[r++]=t[o++]}var u=r(27760),p=r(72697),f=r(77191);function E({pkBytes:e,publicKey:t,output:r="ENCODED"}){if(!e&&!t)return null;const n="UNCOMPRESSED_HEX"!==r;let l=t?(E=t,i.Buffer.from(E,"hex")):u.$3(e,n);var E;if("UNCOMPRESSED_HEX"===r){if(65!==l.length)throw new Error("Can't uncompress an already compressed key");return a(l)}if(65===l.length&&(l=function(e){if(65!=e.length)throw new Error("Attempting to compress an invalid uncompressed key");const t=e.slice(1,33);return[e.slice(33)[31]%2==0?2:3,...t]}(l)),33!=l.length)throw new Error("Invalid public key");if("COMPRESSED_HEX"===r)return a(l);const d=(0,s.J)(new Uint8Array(l)),m=(0,p.b)(d),S=new Uint8Array(21);var y;S[0]=o.current.PUBKEY_ADDRESS,c(S,m,1);const P=(y=S,(0,s.J)((0,s.J)(new Uint8Array(y)))).slice(0,4),h=new Uint8Array(25);return c(h,S,0),c(h,P,21),f.encode(h)}onmessage=e=>{for(;;){o.current=o["mainnet"===e.data?"main":"testnet"];const t={};t.priv=l(),t.pub=E({pkBytes:t.priv}),postMessage(t)}}}},s={};function i(e){var t=s[e];if(void 0!==t)return t.exports;var r=s[e]={exports:{}};return o[e](r,r.exports,i),r.exports}i.m=o,i.x=()=>{var e=i.O(void 0,[812,776],(()=>i(27355)));return i.O(e)},e=[],i.O=(t,r,n,o)=>{if(!r){var s=1/0;for(u=0;u<e.length;u++){for(var[r,n,o]=e[u],a=!0,l=0;l<r.length;l++)(!1&o||s>=o)&&Object.keys(i.O).every((e=>i.O[e](r[l])))?r.splice(l--,1):(a=!1,o<s&&(s=o));if(a){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,n,o]},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var o=Object.create(null);i.r(o);var s={};t=t||[null,r({}),r([]),r(r)];for(var a=2&n&&e;"object"==typeof a&&!~t.indexOf(a);a=r(a))Object.getOwnPropertyNames(a).forEach((t=>s[t]=()=>e[t]));return s.default=()=>e,i.d(o,s),o},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,r)=>(i.f[r](e,t),t)),[])),i.u=e=>"./"+e+".mpw.js",i.miniCssF=e=>{},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var n=r.length-1;n>-1&&!e;)e=r[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),(()=>{var e={102:1};i.f.i=(t,r)=>{e[t]||importScripts(i.p+i.u(t))};var t=self.webpackChunkMPW=self.webpackChunkMPW||[],r=t.push.bind(t);t.push=t=>{var[n,o,s]=t;for(var a in o)i.o(o,a)&&(i.m[a]=o[a]);for(s&&s(i);n.length;)e[n.pop()]=1;r(t)}})(),n=i.x,i.x=()=>Promise.all([i.e(812),i.e(776)]).then(n);var a=i.x();MPW=a})();
//# sourceMappingURL=102.mpw.js.map