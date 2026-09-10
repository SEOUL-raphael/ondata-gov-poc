var C=new Set("\uADF8\uB9AC\uACE0 \uADF8\uB7EC\uB098 \uADF8\uB7F0\uB370 \uB610\uD55C \uB300\uD55C \uAD00\uB828 \uC77C\uCCB4 \uC790\uB8CC \uC815\uBCF4 \uACF5\uAC1C \uCCAD\uAD6C \uC694\uCCAD \uD655\uC778 \uC81C\uACF5 \uC0AC\uBCF8 \uCCA8\uBD80 \uD574\uB2F9 \uC0AC\uD56D \uB0B4\uC6A9 \uBB38\uC11C \uD604\uD669 \uCD5C\uADFC \uAE30\uC900 \uC704\uD574 \uD1B5\uD574 \uACBD\uC6B0 \uAD00\uB828\uB41C \uB300\uD558\uC5EC \uC788\uC2B5\uB2C8\uB2E4 \uD569\uB2C8\uB2E4 \uBC14\uB78D\uB2C8\uB2E4 \uBB38\uC758 \uBBFC\uC6D0 \uCC98\uB9AC \uAE30\uAD00 \uBD80\uBD84 \uC0AC\uC6A9 \uC81C\uCD9C \uC694\uCCAD\uD569\uB2C8\uB2E4 \uC2E0\uCCAD \uC2E0\uACE0\uD569\uB2C8\uB2E4 \uAD00\uB828\uD558\uC5EC \uB300\uC0C1 \uC77C\uC790 \uC790\uB8CC\uB97C \uC815\uBCF4\uB97C".split(" ")),S=new Set([...C,..."\uC8FC\uBCC0 \uACB0\uACFC \uC124\uCE58 \uC704\uCE58 \uD655\uC778 \uCC98\uB9AC \uD604\uD669 \uAE30\uAC04 \uC790\uB8CC \uC815\uBCF4 \uACF5\uAC1C \uB0B4\uC6A9 \uB300\uC0C1 \uD574\uB2F9 \uC0AC\uD56D \uB2F9\uC2DC \uB0B4\uC5ED \uC5EC\uBD80 \uACBD\uC704 \uBD80\uC11C \uCCAD\uAD6C \uC81C\uACF5 \uBC1C\uC0DD \uC2E4\uC2DC \uC791\uC131 \uCD94\uC9C4 \uC608\uC815 \uBAA9\uB85D \uD3EC\uD568 \uAE30\uC900 \uBC94\uC704 \uB300\uD55C \uAD00\uD55C \uAD00\uB828 \uC0AC\uC5C5 \uBCC0\uACBD \uC0AC\uC720 \uC801\uC6A9 \uC808\uCC28 \uC9C4\uD589 \uC77C\uC815 \uD544\uC694 \uC815\uBCF4\uACF5\uAC1C\uCCAD\uAD6C \uACF5\uAC1C\uCCAD\uAD6C \uC815\uBCF4\uACF5\uAC1C \uACF5\uAC1C\uC694\uCCAD \uC694\uCCAD\uD569\uB2C8\uB2E4 \uD655\uC778\uD558\uACE0\uC790 \uAC1C\uC778\uC815\uBCF4 \uC81C\uC678".split(" ")]),M=["\uC5D0\uC11C","\uC73C\uB85C","\uB97C","\uC744","\uC758","\uC5D0","\uC640","\uACFC","\uC740","\uB294"],b=(r,n)=>r<n?-1:r>n?1:0,w=(r,n,i=1)=>r.set(n,(r.get(n)||0)+i),k=r=>String(r??"").replace(/_x000D_|<\/?br>/g," ").replace(/\s+/g," ").trim();function A(r){return(k(r).match(/[가-힣A-Za-z0-9]+/g)||[]).map(n=>{let i=/^[A-Za-z0-9]+$/.test(n)?n.toUpperCase():n;if(/^[가-힣]+$/.test(i)){for(let[c,p]of[[["\uC73C\uB85C\uBD80\uD130","\uC73C\uB85C\uC368","\uC73C\uB85C\uC11C","\uC5D0\uAC8C\uC11C","\uAE4C\uC9C0","\uBD80\uD130","\uC5D0\uC11C","\uC5D0\uAC8C","\uAD00\uB828\uD558\uC5EC","\uC73C\uB85C","\uD558\uACE0","\uD558\uBA70","\uD558\uC5EC","\uD558\uAC8C","\uB418\uB294","\uB41C","\uD55C"],1],[["\uB97C","\uC744","\uC740","\uB294","\uC758","\uC5D0","\uB85C","\uB3C4","\uB9CC","\uC640","\uACFC"],null],[["\uC694\uCCAD\uB4DC\uB9BD\uB2C8\uB2E4","\uC694\uCCAD\uD569\uB2C8\uB2E4","\uC2E0\uCCAD\uD569\uB2C8\uB2E4","\uD655\uC778\uD569\uB2C8\uB2E4","\uBC14\uB78D\uB2C8\uB2E4","\uD588\uC2B5\uB2C8\uB2E4","\uD558\uC600\uC2B5\uB2C8\uB2E4","\uD569\uB2C8\uB2E4"],1]])for(let f of c)if(i.endsWith(f)&&(p===null?i.length>3:i.length>f.length+p)){i=i.slice(0,-f.length);break}}return i}).filter(n=>n.length>=2&&!C.has(n))}function V(r){return k(r).split(/(?<=[.!?。！？])\s+|[\r\n]+/).flatMap(n=>n.length>220?n.split(/[;；]/):[n]).map(n=>n.replace(/^[ .\t]+|[ .\t]+$/g,"")).filter(Boolean)}function I(r,n){let i=V(r),c=[...i,...V(n)],p=c.map(A),f=new Map,a=new Map;for(let t of p){for(let d of t)w(f,d);let s=[...new Set(t)];for(let d=0;d<s.length;d++)for(let m of s.slice(d+1,d+5)){let g=s[d];a.has(g)||a.set(g,new Map),a.has(m)||a.set(m,new Map),w(a.get(g),m),w(a.get(m),g)}}let l=new Map([...f.keys()].map(t=>[t,1])),y=new Map([...a].map(([t,s])=>[t,[...s.values()].reduce((d,m)=>d+m,0)]));for(let t=0;t<12;t++){let s=new Map;for(let d of f.keys()){let m=.15;for(let[g,h]of a.get(d)||[])m+=.85*l.get(g)*h/(y.get(g)||1);s.set(d,m)}l=s}let e=p.map((t,s)=>({i:s,score:t.length?t.reduce((d,m)=>d+l.get(m),0)/Math.sqrt(t.length)*(s<i.length?1.25:1)/(1+s*.05):-1})).filter(t=>t.score>=0).sort((t,s)=>s.score-t.score||t.i-s.i).slice(0,3).sort((t,s)=>t.i-s.i);return{keywords:[...new Set(e.flatMap(t=>p[t.i]))],sentence:e.map(t=>c[t.i]).join(`
`)}}function W(r,n){let i=I(r,n),c=i.keywords.length?i.keywords:A(r+" "+n),p=new Set(c),f=new Map;for(let a of c){for(let l of M)if(a.endsWith(l)&&p.has(a.slice(0,-l.length))){a=a.slice(0,-l.length);break}/^[0-9]+(?:년|월|일|호|번|분기)?$/.test(a)||S.has(a)||M.some(l=>a.endsWith(l)&&S.has(a.slice(0,-l.length)))||w(f,a)}return{terms:[...f].sort((a,l)=>l[1]-a[1]).slice(0,10).map(([a])=>a),sentence:i.sentence}}var N=(r,n,i)=>r<2||!n||!i?0:r/Math.sqrt(n*i)*r/(r+2);function F(r){let n=r.map(e=>{let o=k(e.record.\uCCAD\uAD6C\uC81C\uBAA9),t=k(e.record.\uCCAD\uAD6C\uB0B4\uC6A9);return{...e,title:o,...W(o,t)}}),i=new Map,c=new Map;for(let e of n){for(let o of e.terms)w(i,o),c.has(o)||c.set(o,new Map);for(let o=0;o<e.terms.length;o++)for(let t of e.terms.slice(o+1))w(c.get(e.terms[o]),t),w(c.get(t),e.terms[o])}for(let[e,o]of c)c.set(e,new Map([...o].sort((t,s)=>s[1]-t[1]).slice(0,80)));let p=e=>{let o=[...c.get(e)].map(([t,s])=>N(s,i.get(e),i.get(t))).sort((t,s)=>s-t).slice(0,3);return Math.log1p(i.get(e))*Math.log1p(r.length/i.get(e))*(o.length?o.reduce((t,s)=>t+s,0)/o.length:0)},f=[...i.keys()].map(e=>[e,p(e)]).sort((e,o)=>o[1]-e[1]||i.get(o[0])-i.get(e[0])||b(e[0],o[0])),a=new Set,l=[];for(let[e]of f){if(l.length>=12)break;if(a.has(e))continue;let o=[...c.get(e)].filter(([u])=>!a.has(u)).map(([u,_])=>[u,N(_,i.get(e),i.get(u))]),t=Math.max(.1,...o.map(([,u])=>u*.5)),s=[e,...o.filter(([,u])=>u>=t).sort((u,_)=>_[1]-u[1]||b(u[0],_[0])).slice(0,4).map(([u])=>u)];s.forEach(u=>a.add(u));let d=n.filter(u=>u.terms.includes(e)||u.terms.filter(_=>s.includes(_)).length>=2),m=new Map,g=new Map;for(let u of d)w(m,String(u.record.\uACB0\uC815\uAD6C\uBD84||"").trim()),w(g,String(u.record.\uCC98\uB9AC\uBD80\uC11C||"\uBBF8\uC0C1").trim());let h=[...d].sort((u,_)=>_.terms.filter(v=>s.includes(v)).length-u.terms.filter(v=>s.includes(v)).length||b(u.title,_.title)||Number(u.id.slice(4))-Number(_.id.slice(4)))[0],G=[["\uACF5\uAC1C",m.get("\uACF5\uAC1C")||0],["\uC77C\uBD80\uB9CC \uACF5\uAC1C",m.get("\uBD80\uBD84\uACF5\uAC1C")||0],["\uBE44\uACF5\uAC1C",m.get("\uBE44\uACF5\uAC1C")||0],["\uAE30\uAD00\uC5D0 \uC790\uB8CC \uC5C6\uC74C",m.get("\uBD80\uC874\uC7AC")||0],["\uAE30\uD0C0 \uCC98\uB9AC",[...m].filter(([u])=>u&&!["\uACF5\uAC1C","\uBD80\uBD84\uACF5\uAC1C","\uBE44\uACF5\uAC1C","\uBD80\uC874\uC7AC"].includes(u)).reduce((u,[,_])=>u+_,0)],["\uACB0\uC815\uAD6C\uBD84 \uBBF8\uC785\uB825",m.get("")||0]];l.push({topic_id:l.length+1,keywords:s,keyword_label:s.slice(0,3).join(" / "),seed_document_count:i.get(e),related_document_count:d.length,decisions:G,departments:[...g].sort((u,_)=>_[1]-u[1]||b(u[0],_[0])).slice(0,5),representative_title:h?.title||"",representative_sentence:h?.sentence||"",...J(d,s)})}l.sort((e,o)=>o.related_document_count-e.related_document_count||o.seed_document_count-e.seed_document_count||b(e.label,o.label)),l.forEach((e,o)=>e.topic_id=o+1);let y=new Map;for(let e of n)if(e.days!==null){let o=String(e.record.\uCC98\uB9AC\uBD80\uC11C);y.has(o)||y.set(o,[]),y.get(o).push(e.days)}return{method:"specificity-weighted-cooccurrence+full-corpus-evidence-web-v1",topics:l,text_rows:n.filter(e=>e.terms.length).length,durations:[...y].map(([e,o])=>({department:e,count:o.length,mean:o.reduce((t,s)=>t+s,0)/o.length})),notes:["\uD575\uC2EC\uBB38\uC7A5\uACFC \uB2E8\uC5B4\uB97C \uCD94\uCD9C\uD558\uACE0, \uBC18\uBCF5 \uBE48\uB3C4\uB97C \uBCF4\uC815\uD55C \uC5F0\uAD00\uB3C4\uB85C \uCD5C\uB300 12\uAC1C \uD6C4\uBCF4\uB97C \uB9CC\uB4ED\uB2C8\uB2E4.","\uC911\uC2EC \uB2E8\uC5B4\uAC00 \uC788\uAC70\uB098 \uAD00\uB828 \uB2E8\uC5B4\uAC00 \uB450 \uAC1C \uC774\uC0C1 \uC788\uB294 \uCCAD\uAD6C\uB97C \uC804\uCCB4 \uC785\uB825\uC5D0\uC11C \uB2E4\uC2DC \uC149\uB2C8\uB2E4. \uD55C \uCCAD\uAD6C\uAC00 \uC5EC\uB7EC \uD6C4\uBCF4\uC5D0 \uD3EC\uD568\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.","\uD6C4\uBCF4\uBCC4 \uACFC\uAC70 \uCC98\uB9AC \uC774\uB825\uC740 \uC774\uBC88 \uCCAD\uAD6C\uC758 \uACF5\uAC1C \uC5EC\uBD80\uB098 \uCD94\uAC00 \uC870\uCE58 \uD544\uC694\uC131\uC744 \uB73B\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.","\uC6D0\uBCF8\uC758 \uBB38\uC7A5 \uC810\uC218\xB7\uC5F0\uAD00\uB3C4\xB7\uC804\uCCB4 \uC7AC\uC9D1\uACC4 \uAE30\uC900\uC744 \uC6F9\uC73C\uB85C \uC62E\uACBC\uC2B5\uB2C8\uB2E4. \uC6F9 \uC785\uB825 \uB0A0\uC9DC\xB7\uD589\uC218 \uC81C\uD55C\uC740 \uC6D0\uBCF8 EXE\uC640 \uB2E4\uB985\uB2C8\uB2E4."]}}var O=new Set("\uC815\uBCF4 \uACF5\uAC1C \uCCAD\uAD6C \uC694\uCCAD \uC815\uBCF4\uACF5\uAC1C \uACF5\uAC1C\uCCAD\uAD6C \uC815\uBCF4\uACF5\uAC1C\uCCAD\uAD6C \uC790\uB8CC\uACF5\uAC1C \uC790\uB8CC\uC694\uCCAD \uACF5\uAC1C\uC694\uCCAD \uC815\uBCF4\uACF5\uAC1C\uC694\uCCAD \uC815\uBCF4\uACF5\uAC1C\uCCAD\uAD6C\uC11C \uCCAD\uAD6C\uC11C \uC694\uCCAD\uC11C \uBB38\uC758 \uC2E0\uCCAD \uB2F5\uBCC0 \uD68C\uC2E0 \uBD80\uD0C1 \uD574\uC8FC\uC138\uC694 \uD574\uC8FC\uC2DC\uAE30 \uC8FC\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4 \uBD80\uD0C1\uB4DC\uB9BD\uB2C8\uB2E4 \uC54C\uB824\uC8FC\uC138\uC694 \uC54C\uB824\uC8FC\uC2DC\uAE30 \uC54C\uACE0 \uC2F6\uC2B5\uB2C8\uB2E4 \uB300\uD55C \uAD00\uD55C \uAD00\uB828 \uAD00\uB828\uD558\uC5EC \uB300\uD558\uC5EC \uC77C\uCCB4 \uCCA8\uBD80 \uC0AC\uBCF8".split(" ")),Z=new Set([...O,..."\uC790\uB8CC \uBB38\uC11C \uB0B4\uC6A9 \uC0AC\uD56D \uD574\uB2F9 \uB300\uC0C1 \uC5EC\uBD80 \uB0B4\uC5ED \uACB0\uACFC \uD604\uD669 \uAE30\uC900 \uAE30\uAC04 \uC77C\uC790 \uBAA9\uB85D \uC138\uBD80 \uD56D\uBAA9 \uC804\uCCB4 \uAE30\uD0C0 \uCD94\uAC00 \uCD5C\uADFC \uC62C\uD574 \uC791\uB144 \uC0C1\uBC18\uAE30 \uD558\uBC18\uAE30 \uC5F0\uB3C4 \uBCC4 \uBC0F \uB4F1 \uB0B4 \uC678 \uC911 \uC758 \uC640 \uACFC \uC704\uD574 \uD1B5\uD574 \uB300\uD55C \uAD00\uD55C \uAD00\uB828 \uC778\uADFC \uC8FC\uBCC0 \uC77C\uB300 \uC9C0\uC5ED \uC0DD\uD65C\uAD8C \uACC4\uD68D \uCD94\uC9C4 \uD655\uB300 \uD655\uCDA9 \uC9C0\uC6D0 \uC0AC\uC5C5 \uC6B4\uC601 \uD504\uB85C\uADF8\uB7A8 \uC774\uC6A9 \uC774\uC6A9\uC790 \uC124\uCE58 \uC2DC\uC124 \uC548\uC804 \uC810\uAC80 \uCC98\uB9AC \uD655\uC778 \uC81C\uACF5 \uC2E4\uC2DC \uC791\uC131 \uD3EC\uD568 \uC870\uC0AC \uAD00\uB9AC \uD604\uD669\uC790\uB8CC \uC6B4\uC601\uD604\uD669".split(" ")]),B=["\uC73C\uB85C\uBD80\uD130","\uC73C\uB85C","\uC5D0\uC11C","\uC5D0\uAC8C","\uD558\uC5EC","\uD569\uB2C8\uB2E4","\uB4DC\uB9BD\uB2C8\uB2E4","\uB97C","\uC744","\uC740","\uB294","\uC758","\uC5D0","\uB85C","\uC640","\uACFC"],T=new Set("\uBC0F \uB4F1 \uB0B4 \uC678 \uC911 \uC758 \uC640 \uACFC \uC704\uD574 \uD1B5\uD574 \uBCC4 \uB300\uD55C \uAD00\uD55C \uAD00\uB828".split(" ")),P=(r,n)=>n.has(r)||B.some(i=>r.endsWith(i)&&n.has(r.slice(0,-i.length))),z=r=>/^\d+(?:호|번|년도|년|월|일)?$/.test(r)||P(r,O)||["\uC694\uCCAD\uB4DC\uB9BD\uB2C8\uB2E4","\uC694\uCCAD\uD569\uB2C8\uB2E4","\uCCAD\uAD6C\uD569\uB2C8\uB2E4","\uBD80\uD0C1\uB4DC\uB9BD\uB2C8\uB2E4","\uACF5\uAC1C\uD574\uC8FC\uC138\uC694","\uACF5\uAC1C\uBC14\uB78D\uB2C8\uB2E4","\uC54C\uB824\uC8FC\uC138\uC694","\uC54C\uB824\uC8FC\uC2DC\uAE30","\uBC14\uB78D\uB2C8\uB2E4"].some(n=>r.endsWith(n)),j=r=>!z(r)&&!P(r,Z);function J(r,n){let i=new Map,c=new Map;for(let e of r){let o=e.title.replace(/<[^>]*>/g," ").replace(/&(?:lt|gt|amp|quot|apos);/g," ").match(/[가-힣A-Za-z0-9]+(?:[·ㆍ][가-힣A-Za-z0-9]+)*/g)||[],t=[[]];for(let d of o)z(d)?t.at(-1).length&&t.push([]):t.at(-1).push(d);let s=new Set;for(let d of t)for(let m=0;m<d.length;m++)for(let g=1;g<=4&&m+g<=d.length;g++){let h=d.slice(m,m+g);T.has(h[0])||T.has(h.at(-1))||h.join(" ").length>72||!h.some(j)||g===1&&/\d/.test(h[0])||s.add(h.join(" "))}for(let d of s){w(i,d),c.has(d)||c.set(d,[]);let m=c.get(d);m.push(e),m.sort((g,h)=>b(g.title,h.title)||b(g.id,h.id)||b(g.sentence,h.sentence)),m.length>3&&m.pop()}}let p=[...i].filter(([,e])=>e>=2&&e*5>=r.length);p.some(([e])=>e.includes(" "))&&(p=p.filter(([e])=>e.includes(" ")));let f=([e,o])=>{let t=e.split(" ");return o*(1+.14*(t.length-2))*(.8+.2*t.filter(j).length/t.length)};if(p.sort((e,o)=>f(o)-f(e)||o[1]-e[1]||o[0].split(" ").length-e[0].split(" ").length||o[0].split(" ").filter(t=>n.some(s=>s.toLowerCase()===t.toLowerCase())).length-e[0].split(" ").filter(t=>n.some(s=>s.toLowerCase()===t.toLowerCase())).length||b(e[0],o[0])),!p.length)return{label:"\uC8FC\uC81C \uD655\uC778\uC774 \uD544\uC694\uD55C \uC694\uCCAD \uBB36\uC74C",label_support_count:0,label_note:"\uAD00\uB828 \uCCAD\uAD6C \uC81C\uBAA9\uC5D0\uC11C \uB450 \uAC74 \uC774\uC0C1, \uC804\uCCB4\uC758 20% \uC774\uC0C1 \uBC18\uBCF5\uB418\uB294 \uB300\uC0C1 \uD45C\uD604\uC744 \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4."};let[a,l]=p[0],y=c.get(a)[0];return{label:a+(l*5>=r.length*3?" \uAD00\uB828 \uC694\uCCAD":" \uB4F1 \uAD00\uB828 \uC694\uCCAD"),label_support_count:l,label_note:"\uAC19\uC740 \uD45C\uD604\uC774 \uD655\uC778\uB41C \uC81C\uBAA9 "+l+"\uAC74 / \uAD00\uB828 \uCCAD\uAD6C \uC804\uCCB4 "+r.length+"\uAC74 ("+Math.round(l/r.length*100)+"%). \uAC19\uC740 \uB300\uC0C1\uC5D0 \uB300\uD55C \uC11C\uB85C \uB2E4\uB978 \uC694\uCCAD\uC77C \uC218 \uC788\uC2B5\uB2C8\uB2E4.",representative_title:y.title,representative_sentence:y.sentence}}var U=Object.freeze({"foi-v1":F});var ne=new Set("\uBBFC\uC6D0 \uC694\uCCAD \uBB38\uC758 \uBC14\uB78D\uB2C8\uB2E4 \uD569\uB2C8\uB2E4 \uC785\uB2C8\uB2E4 \uC788\uC2B5\uB2C8\uB2E4 \uC8FC\uC138\uC694 \uB300\uD55C \uAD00\uB828 \uD574\uB2F9 \uC704\uD574 \uADF8\uB9AC\uACE0 \uADF8\uB7EC\uB098 \uC800\uB294 \uC6B0\uB9AC \uC774\uBC88 \uD655\uC778 \uCC98\uB9AC \uBD80\uD0C1 \uB4DC\uB9BD\uB2C8\uB2E4 \uC694\uCCAD\uD569\uB2C8\uB2E4 \uD574\uC8FC\uC138\uC694 \uC218 \uAC83 \uB4F1 \uBC0F \uC774 \uADF8 \uC800".split(" ")),oe=new Intl.Segmenter("ko",{granularity:"word"});var $=2e4,x=class extends Error{constructor(n,i=[]){super(n),this.errors=i}};function L(r){if(r=r.replace(/^\uFEFF/,""),r.includes("\0"))throw new x("\uC785\uB825\uC5D0 NUL \uBB38\uC790\uAC00 \uC788\uC2B5\uB2C8\uB2E4.");let n=[],i=[],c="",p=!1,f=!1;for(let a=0;a<r.length;a++){let l=r[a];if(p){l==='"'?r[a+1]==='"'?(c+='"',a++):(p=!1,f=!0):c+=l;continue}if(l==='"'){if(c||f)throw new x("CSV \uB530\uC634\uD45C \uD615\uC2DD\uC774 \uC798\uBABB\uB418\uC5C8\uC2B5\uB2C8\uB2E4.");p=!0}else if(l===","||l===`
`||l==="\r")i.push(c),c="",f=!1,l!==","&&(l==="\r"&&r[a+1]===`
`&&a++,n.push(i),i=[]);else{if(f)throw new x("\uB2EB\uB294 \uB530\uC634\uD45C \uB4A4\uC5D0 \uC798\uBABB\uB41C \uAC12\uC774 \uC788\uC2B5\uB2C8\uB2E4.");c+=l}if(n.length>$+1e3)throw new x("\uC6F9\uD310\uC740 20,000\uD589\uAE4C\uC9C0 \uC9C0\uC6D0\uD569\uB2C8\uB2E4.")}if(p)throw new x("\uB2EB\uD788\uC9C0 \uC54A\uC740 CSV \uB530\uC634\uD45C\uAC00 \uC788\uC2B5\uB2C8\uB2E4.");return(c||i.length||f)&&n.push([...i,c]),n}var R=`"""Public siting: auditable feature-mart RF and separate coverage planning.\r
\r
Runs unchanged in CPython and Pyodide. No network access or generated input.\r
"""\r
import json\r
import math\r
import itertools\r
import hashlib\r
from datetime import datetime, timezone\r
\r
\r
def number(value, label, minimum=None):\r
    if value is None or isinstance(value, bool) or str(value).strip() == '':\r
        raise ValueError(f'{label}: \uC218\uCE58\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4')\r
    try:\r
        n = float(value)\r
    except (ValueError, TypeError):\r
        raise ValueError(f'{label}: \uC798\uBABB\uB41C \uC218\uCE58')\r
    if not math.isfinite(n) or (minimum is not None and n < minimum):\r
        raise ValueError(f'{label}: \uC218\uCE58 \uBC94\uC704 \uC624\uB958')\r
    return n\r
\r
\r
def integer(value, label, minimum, maximum):\r
    n = number(value, label)\r
    if n != int(n) or not minimum <= n <= maximum:\r
        raise ValueError(f'{label}: {minimum}~{maximum} \uC815\uC218 \uD544\uC694')\r
    return int(n)\r
\r
\r
def points(dataset, role, weight=False):\r
    if not isinstance(dataset, dict) or not isinstance(dataset.get('rows'), list):\r
        raise ValueError(f'{role}: \uB370\uC774\uD130 \uBC0F rows \uD544\uC694')\r
    meta = dataset.get('metadata', {})\r
    for key in ['region', 'period', 'crs', 'source', 'kind']:\r
        if not isinstance(meta.get(key), str) or not meta[key].strip():\r
            raise ValueError(f'{role}: \uCD9C\uCC98 \uBA54\uD0C0\uB370\uC774\uD130 {key} \uD544\uC694')\r
        if len(meta[key]) > 2000:\r
            raise ValueError(f'{role}: \uBA54\uD0C0\uB370\uC774\uD130 {key} \uAE38\uC774 \uCD08\uACFC')\r
    if meta['kind'] not in ['synthetic', 'snapshot', 'live', 'user-file']:\r
        raise ValueError(f'{role}: \uC790\uB8CC \uC885\uB958 \uC624\uB958')\r
    if meta['crs'] not in ['EPSG:4326', 'EPSG:5179', 'EPSG:5186', 'LOCAL_METRE']:\r
        raise ValueError(f'{role}: \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uB294 \uC88C\uD45C\uACC4')\r
    if weight and not meta.get('weight_unit'):\r
        raise ValueError('\uC218\uC694 \uAC00\uC911\uCE58 \uB2E8\uC704 \uD544\uC694')\r
    expected = {'\uC218\uC694':['demand-points-v1'],'\uD6C4\uBCF4\uC9C0':['candidate-sites-v1'], '\uAE30\uC874\uC2DC\uC124':['facility-points-v1'],'\uACA9\uC790 \uBD84\uC11D\uB9C8\uD2B8':['siting-mart-v1']}\r
    if meta.get('semantic_id') not in expected.get(role, [meta.get('semantic_id')]):\r
        raise ValueError(f'{role}: \uB370\uC774\uD130 \uC758\uBBF8 \uACC4\uC57D semantic_id\uAC00 \uC5ED\uD560\uACFC \uB2E4\uB985\uB2C8\uB2E4')\r
    if meta['crs']=='LOCAL_METRE' and meta['kind']!='synthetic':\r
        raise ValueError('LOCAL_METRE\uB294 \uD569\uC131 \uC608\uC81C\uC5D0\uB9CC \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4')\r
    if role=='\uACA9\uC790 \uBD84\uC11D\uB9C8\uD2B8' and number(meta.get('grid_size_m'),'\uACA9\uC790 \uD06C\uAE30(m)') != 100:\r
        raise ValueError('\uC6D0\uBCF8 RF\uB294 100m \uACA9\uC790 \uB9C8\uD2B8\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4')\r
    rows, seen = [], set()\r
    if len(dataset['rows']) > 20000:\r
        raise ValueError(f'{role}: \uCD5C\uB300 20,000\uD589')\r
    for i, raw in enumerate(dataset['rows']):\r
        r = dict(raw)\r
        ident = str(r.get('id', '')).strip()\r
        if not ident or ident in seen:\r
            raise ValueError(f'{role} {i+1}\uD589: ID \uB204\uB77D/\uC911\uBCF5')\r
        seen.add(ident)\r
        x, y = number(r.get('x'), 'x'), number(r.get('y'), 'y')\r
        if meta['crs'] == 'EPSG:4326' and not (-180 <= x <= 180 and -90 <= y <= 90):\r
            raise ValueError(f'{role}: \uACBD\uB3C4/\uC704\uB3C4 \uBC94\uC704 \uC624\uB958, \uCD95 \uC21C\uC11C \uD655\uC778')\r
        if meta['crs']=='EPSG:4326' and meta['region'].startswith('KR') and not (124<=x<=132 and 33<=y<=39):\r
            raise ValueError(f'{role}: \uB300\uD55C\uBBFC\uAD6D \uACBD\uC704\uB3C4 \uBC94\uC704 \uBC16, \uC88C\uD45C \uCD95 \uC21C\uC11C \uD655\uC778')\r
        if meta['crs'] in ['EPSG:5179', 'EPSG:5186'] and not (10000 < x < 3000000 and 10000 < y < 4000000):\r
            raise ValueError(f'{role}: \uD55C\uAD6D \uD22C\uC601\uC88C\uD45C(m) \uBC94\uC704 \uC624\uB958')\r
        if not isinstance(raw,dict):raise ValueError(f'{role}: \uD589\uC740 \uAC1D\uCCB4\uC5EC\uC57C \uD569\uB2C8\uB2E4')\r
        r.update(id=ident, x=x, y=y)\r
        if weight:\r
            r['weight'] = number(r.get('weight'), 'weight', 0)\r
        rows.append(r)\r
    return rows\r
\r
\r
def distance(a, b, crs):\r
    if crs != 'EPSG:4326':\r
        return math.hypot(a['x']-b['x'], a['y']-b['y'])\r
    x1, y1, x2, y2 = map(math.radians, [a['x'], a['y'], b['x'], b['y']])\r
    h = math.sin((y2-y1)/2)**2 + math.cos(y1)*math.cos(y2)*math.sin((x2-x1)/2)**2\r
    return 6371008.8 * 2 * math.asin(math.sqrt(min(1, h)))\r
\r
\r
def coverage(payload):\r
    demand = points(payload.get('demand'), '\uC218\uC694', True)\r
    candidates = points(payload.get('candidates'), '\uD6C4\uBCF4\uC9C0')\r
    existing = points(payload.get('existing'), '\uAE30\uC874\uC2DC\uC124')\r
    if not demand or not candidates:\r
        raise ValueError('\uC218\uC694 \uBC0F \uD6C4\uBCF4\uC9C0\uAC00 \uBE44\uC5C8\uC2B5\uB2C8\uB2E4')\r
    metas = [payload[r]['metadata'] for r in ['demand', 'candidates', 'existing']]\r
    for key in ['region', 'period', 'crs', 'kind']:\r
        if len({m[key] for m in metas}) != 1:\r
            raise ValueError(f'\uC785\uB825 {key} \uBD88\uC77C\uCE58: \uC815\uD569\uC131\uC744 \uD655\uC778\uD558\uACE0 \uAC19\uC740 \uAE30\uC900 \uC790\uB8CC\uB85C \uC785\uB825\uD558\uC138\uC694')\r
    if len(demand)*(len(candidates)+len(existing)) > 4000000:\r
        raise ValueError('\uAC70\uB9AC \uC870\uD569 400\uB9CC \uCD08\uACFC: \uBD84\uC11D\uC9C0\uC5ED\uC744 \uB098\uB220 \uC8FC\uC138\uC694')\r
    crs = metas[0]['crs']\r
    opt = payload.get('options', {})\r
    k = integer(opt.get('count', 1), '\uC2E0\uADDC\uC2DC\uC124 \uC218', 1, len(candidates))\r
    radius = number(opt.get('radius', 500), '\uC11C\uBE44\uC2A4 \uBC18\uACBD(m)', 0)\r
    separation = number(opt.get('separation', 0), '\uC2DC\uC124 \uAC04 \uCD5C\uC18C\uAC70\uB9AC(m)', 0)\r
    target = number(opt.get('minimum_coverage', 0), '\uCD5C\uC18C \uCEE4\uBC84\uB9AC\uC9C0', 0)\r
    if target > 1:\r
        raise ValueError('\uCD5C\uC18C \uCEE4\uBC84\uB9AC\uC9C0\uB294 0~1')\r
    method = opt.get('method', 'exact')\r
    if method not in ['exact', 'greedy']:\r
        raise ValueError('\uB4F1\uB85D\uB418\uC9C0 \uC54A\uC740 \uCD5C\uC801\uD654 \uBC29\uC2DD')\r
    total = sum(r['weight'] for r in demand)\r
    if total <= 0:\r
        raise ValueError('\uC218\uC694 \uAC00\uC911\uCE58 \uD569\uC774 0\uC785\uB2C8\uB2E4')\r
    baseline = {i for i, d in enumerate(demand) if any(distance(d, e, crs) <= radius for e in existing)}\r
    candidate_sets = [{i for i, d in enumerate(demand) if distance(d, c, crs) <= radius} for c in candidates]\r
    eligible = [i for i, c in enumerate(candidates) if all(distance(c, e, crs) >= separation and distance(c,e,crs)>1e-6 for e in existing)]\r
    if len(eligible) < k:\r
        raise ValueError('\uC81C\uC57D \uCDA9\uC871 \uBD88\uAC00: \uAE30\uC874\uC2DC\uC124 \uC81C\uC678 \uBC0F \uC774\uACA9\uAC70\uB9AC \uC801\uC6A9 \uD6C4 \uD6C4\uBCF4\uC9C0 \uBD80\uC871')\r
    def score(indices):\r
        covered = baseline.union(*(candidate_sets[i] for i in indices))\r
        return sum(demand[i]['weight'] for i in covered), covered\r
    def feasible(indices):\r
        return all(distance(candidates[a], candidates[b], crs) >= separation and distance(candidates[a], candidates[b],crs)>1e-6 for a,b in itertools.combinations(indices, 2))\r
    evaluated = 0\r
    if method == 'exact':\r
        combinations = math.comb(len(eligible), k)\r
        if combinations > 100000 or combinations * len(demand) > 20000000:\r
            raise ValueError('\uC644\uC804\uD0D0\uC0C9 \uD55C\uB3C4 \uCD08\uACFC: \uD6C4\uBCF4/\uC2DC\uC124 \uC218\uB97C \uC904\uC774\uAC70\uB098 \uD0D0\uC695 \uD734\uB9AC\uC2A4\uD2F1\uC744 \uBA85\uC2DC\uC801\uC73C\uB85C \uC120\uD0DD\uD558\uC138\uC694')\r
        best, chosen = -1, None\r
        for group in itertools.combinations(eligible, k):\r
            evaluated += 1\r
            if feasible(group):\r
                s, _ = score(group)\r
                if s > best:\r
                    best, chosen = s, list(group)\r
        if chosen is None:\r
            raise ValueError('\uC81C\uC57D \uCDA9\uC871 \uBD88\uAC00: \uC694\uCCAD\uD55C \uC2DC\uC124 \uC218\uC640 \uC774\uACA9\uAC70\uB9AC\uC758 \uAC00\uB2A5\uD55C \uC870\uD569 \uC5C6\uC74C')\r
    else:\r
        chosen = []\r
        for _ in range(k):\r
            choices = [i for i in eligible if i not in chosen and feasible(chosen+[i])]\r
            if not choices:\r
                raise ValueError('\uD734\uB9AC\uC2A4\uD2F1\uC774 \uC2E4\uD589 \uAC00\uB2A5\uD55C \uC870\uD569\uC744 \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. \uBD88\uAC00\uB2A5\uC758 \uC99D\uBA85\uC740 \uC544\uB2D9\uB2C8\uB2E4. \uC644\uC804\uD0D0\uC0C9 \uB610\uB294 \uC870\uAC74 \uC870\uC815 \uD544\uC694')\r
            evaluated += len(choices)\r
            chosen.append(max(choices, key=lambda i: score(chosen+[i])[0]))\r
    after, covered = score(chosen)\r
    before = sum(demand[i]['weight'] for i in baseline)\r
    if after/total + 1e-12 < target:\r
        raise ValueError('\uCD5C\uC18C \uCEE4\uBC84\uB9AC\uC9C0 \uBBF8\uB2EC' + (': \uC644\uC804\uD0D0\uC0C9\uC5D0\uC11C \uCDA9\uC871 \uBD88\uAC00' if method == 'exact' else ': \uD734\uB9AC\uC2A4\uD2F1 \uACB0\uACFC\uC774\uBA70 \uBD88\uAC00\uB2A5 \uC99D\uBA85 \uC544\uB2D8'))\r
    table = [{**c, 'selected': i in chosen, 'standalone_additional_weight': sum(demand[j]['weight'] for j in candidate_sets[i]-baseline)} for i,c in enumerate(candidates)]\r
    return {'mode':'coverage', 'algorithm': {'name':'exhaustive-maximal-coverage' if method=='exact' else 'greedy-marginal-coverage', 'global_optimum':method=='exact', 'evaluated':evaluated}, 'selected_ids':[candidates[i]['id'] for i in chosen], 'candidates':table, 'demand':[{**d,'covered_before':i in baseline,'covered_after':i in covered} for i,d in enumerate(demand)], 'existing':existing, 'coverage':{'total_weight':total,'before_weight':before,'after_weight':after,'additional_weight':after-before,'before_ratio':before/total,'after_ratio':after/total}, 'options':{'count':k,'radius_m':radius,'separation_m':separation,'minimum_coverage':target}, 'distance':{'crs':crs,'unit':'m','method':'haversine sphere R=6371008.8m' if crs=='EPSG:4326' else 'Euclidean projected metres'}, 'limitations':['\uCEE4\uBC84\uB9AC\uC9C0\uB294 \uC785\uB825 \uC218\uC694\uC758 \uAC00\uC911 \uD569\uC774\uBA70 \uC2E4\uC81C \uC774\uC6A9\uB7C9 \uC608\uCE21\uC774 \uC544\uB2D9\uB2C8\uB2E4.','\uB3C4\uB85C\uB9DD\xB7\uBCF4\uD589 \uACBD\uB85C\xB7\uC6A9\uB7C9\xB7\uD1A0\uC9C0 \uC18C\uC720\uAD8C\xB7\uC778\uD5C8\uAC00\uB294 \uBC18\uC601\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.','\uC6D0\uBCF8 RF \uCD94\uCC9C\uACFC \uBCC4\uB3C4\uC758 \uC2DC\uC124\uBC30\uCE58 \uD655\uC7A5 \uBD84\uC11D\uC785\uB2C8\uB2E4.']}\r
\r
\r
def recommend(payload, profiles):\r
    import numpy as np\r
    import sklearn\r
    from sklearn.ensemble import RandomForestClassifier\r
    from sklearn.model_selection import train_test_split\r
    from sklearn.metrics import roc_auc_score, roc_curve, confusion_matrix\r
    from sklearn.utils import resample\r
    rows = points(payload.get('mart'), '\uACA9\uC790 \uBD84\uC11D\uB9C8\uD2B8')\r
    opt = payload.get('options', {})\r
    profile = profiles.get(opt.get('facility'))\r
    if not profile:\r
        raise ValueError('\uC2DC\uC124 \uC720\uD615\uC744 \uC120\uD0DD\uD558\uC138\uC694')\r
    features, target = profile['features'], profile['target']\r
    if len(rows) < 8:\r
        raise ValueError('\uD559\uC2B5/\uAC80\uC99D\uC5D0 \uCD5C\uC18C 8\uAC1C \uACE0\uC720 \uACA9\uC790\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4')\r
    seed = integer(opt.get('seed', 42), 'seed', 0, 2147483647)\r
    x = np.array([[number(r.get(f), f) for f in features] for r in rows])\r
    y = np.array([integer(r.get(target), target, 0, 1) for r in rows])\r
    if min(int(sum(y==0)), int(sum(y==1))) < 4:\r
        raise ValueError('\uC124\uCE58/\uBBF8\uC124\uCE58 \uAC01 4\uAC1C \uC774\uC0C1\uC758 \uACE0\uC720 \uACA9\uC790\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4')\r
    k = integer(opt.get('count', 3), '\uCD94\uCC9C \uC218', 1, int(sum(y==0)))\r
    train, test = train_test_split(np.arange(len(rows)), test_size=0.5, random_state=seed, stratify=y)\r
    # Split unique grids BEFORE oversampling: held-out labels never enter training.\r
    groups = [train[y[train]==label] for label in [0,1]]\r
    n = max(map(len, groups))\r
    balanced = np.concatenate([resample(g, n_samples=n, replace=True, random_state=seed+j) if len(g)<n else g for j,g in enumerate(groups)])\r
    model = RandomForestClassifier(n_estimators=100, random_state=seed, n_jobs=1, oob_score=True)\r
    model.fit(x[balanced], y[balanced])\r
    proba = model.predict_proba(x)[:,1]\r
    fpr,tpr,thresholds = roc_curve(y[test], proba[test])\r
    order = sorted((i for i in range(len(rows)) if y[i]==0), key=lambda i:(-float(proba[i]), rows[i]['id']))\r
    selected = order[:k]\r
    first = k//3\r
    ranks = {idx:j for j,idx in enumerate(selected)}\r
    train_set = set(map(int, train))\r
    return {'mode':'recommendation','facility':opt['facility'],'algorithm':{'name':'RandomForestClassifier','library':'scikit-learn','version':sklearn.__version__,'trees':100,'seed':seed,'global_optimum':False,'split':'stratified unique grids 50/50; training-only minority oversampling'}, 'features':features,'target':target,'validation':{'train_count':len(train),'test_count':len(test),'oversampled_train_count':len(balanced),'train_ids':[rows[i]['id'] for i in train],'test_ids':[rows[i]['id'] for i in test],'train_auc':float(roc_auc_score(y[train],proba[train])),'test_auc':float(roc_auc_score(y[test],proba[test])),'confusion_matrix':confusion_matrix(y[test],model.predict(x[test]),labels=[0,1]).tolist(),'roc':[{'fpr':float(a),'tpr':float(b)} for a,b in zip(fpr,tpr)]}, 'importance':dict(zip(features,map(float,model.feature_importances_))), 'selected_ids':[rows[i]['id'] for i in selected], 'candidates':[{'id':r['id'],'x':r['x'],'y':r['y'],'probability':float(proba[i]),'installed':int(y[i]),'partition':'train' if i in train_set else 'test','selected':i in ranks,'tier':(1 if ranks[i]<first else 2 if ranks[i]<2*first else 3) if i in ranks else None} for i,r in enumerate(rows)], 'options':{'count':k,'seed':seed}, 'limitations':['\uD655\uB960\uC740 \uAE30\uC874 \uC124\uCE58 \uD328\uD134\uC5D0 \uB300\uD55C \uBD84\uB958\uAC12\uC774\uBA70 \uC815\uCC45\uD6A8\uACFC\xB7\uC2E4\uC81C \uC218\uC694\xB7\uC778\uACFC\uAD00\uACC4\uAC00 \uC544\uB2D9\uB2C8\uB2E4.','\uC6D0\uBCF8\uC758 \uD559\uC2B5/\uAC80\uC99D \uC911\uBCF5 \uC704\uD5D8\uC744 \uACE0\uC720 \uACA9\uC790 \uBD84\uD560 \uD6C4 \uD559\uC2B5\uC9D1\uD569\uB9CC \uC99D\uAC15\uD558\uC5EC \uC218\uC815\uD588\uC2B5\uB2C8\uB2E4. \uC6D0\uBCF8 \uC218\uCE58\uC640 \uB3D9\uC77C\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.','\uCD94\uCC9C\uC5D0\uB294 \uD559\uC2B5\uC5D0 \uC0AC\uC6A9\uD55C \uBBF8\uC124\uCE58 \uACA9\uC790\uB3C4 \uD3EC\uD568\uB418\uBA70 partition\uC73C\uB85C \uAD6C\uBD84\uD569\uB2C8\uB2E4.','\uACF5\uAC04\uC801\uC73C\uB85C \uC778\uC811\uD55C \uACA9\uC790 \uC0AC\uC774 \uC0C1\uAD00\uC740 \uB0A8\uC544 \uC788\uC2B5\uB2C8\uB2E4. \uB3C5\uB9BD \uC9C0\uC5ED \uAC80\uC99D\uC774 \uD544\uC694\uD569\uB2C8\uB2E4.','\uC815\uADDC\uD654\uD55C \uACA9\uC790 \uBD84\uC11D\uB9C8\uD2B8 \uC785\uB825\uC785\uB2C8\uB2E4. \uC6D0\uBCF8 \uC804\uCCB4 \uC6D0\uC2DC\uD30C\uC77C \uC790\uB3D9 ETL\uACFC \uB3D9\uB4F1\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.']}\r
\r
\r
def run(payload, profiles=None):\r
    mode = payload.get('mode')\r
    if mode == 'coverage':\r
        result = coverage(payload)\r
    elif mode == 'recommendation':\r
        result = recommend(payload, profiles or {})\r
    else:\r
        raise ValueError('\uC9C0\uC6D0\uD558\uC9C0 \uC54A\uB294 \uBD84\uC11D \uBAA8\uB4DC')\r
    if mode=='recommendation' and payload.get('options',{}).get('demand_column'):\r
        column=payload['options']['demand_column']\r
        if column not in result['features'] or not column.startswith('\uC778\uAD6C_'):\r
            raise ValueError('\uCEE4\uBC84\uB9AC\uC9C0 \uBE44\uAD50 \uC218\uC694 \uBCC0\uC218\uB294 \uC120\uD0DD \uC2DC\uC124\uC758 \uC6D0\uBCF8 \uC778\uAD6C \uBCC0\uC218\uC5EC\uC57C \uD569\uB2C8\uB2E4')\r
        rows=points(payload['mart'],'\uACA9\uC790 \uBD84\uC11D\uB9C8\uD2B8');crs=payload['mart']['metadata']['crs']\r
        radius=number(payload['options'].get('radius',500),'\uC11C\uBE44\uC2A4 \uBC18\uACBD(m)',0)\r
        fixed=[p for p in result['candidates'] if p['installed']]\r
        added=[p for p in result['candidates'] if p['selected']]\r
        if len(rows)*(len(fixed)+len(added))>4000000:raise ValueError('RF \uCEE4\uBC84\uB9AC\uC9C0 \uAC70\uB9AC \uC870\uD569 400\uB9CC \uCD08\uACFC')\r
        weights=[number(r.get(column),column,0) for r in rows]\r
        total=sum(weights)\r
        if total<=0:raise ValueError('\uCEE4\uBC84\uB9AC\uC9C0 \uBE44\uAD50 \uC218\uC694\uC758 \uD569\uC774 0\uC785\uB2C8\uB2E4')\r
        before=sum(w for r,w in zip(rows,weights) if any(distance(r,p,crs)<=radius for p in fixed))\r
        after=sum(w for r,w in zip(rows,weights) if any(distance(r,p,crs)<=radius for p in fixed+added))\r
        result['coverage']={'total_weight':total,'before_weight':before,'after_weight':after,'additional_weight':after-before,'before_ratio':before/total,'after_ratio':after/total,'demand_column':column,'weight_unit':'\uBA85','radius_m':radius,'method':'RF \uCD94\uCC9C \uACE0\uC815\uC9D1\uD569 \uD3C9\uAC00; \uCEE4\uBC84\uB9AC\uC9C0 \uCD5C\uC801\uD654 \uC544\uB2D8'}\r
        result['limitations'].append('\uAE30\uC874 \uC2DC\uC124\uACFC \uC2E0\uADDC RF \uCD94\uCC9C\uC744 \uACA9\uC790 \uC911\uC2EC\uC73C\uB85C \uD3C9\uAC00\uD55C \uC778\uAD6C \uBC18\uACBD \uBE44\uAD50\uC785\uB2C8\uB2E4. \uC2E4\uC81C \uC2DC\uC124 \uCD9C\uC785\uAD6C\xB7\uB3C4\uB85C \uACBD\uB85C\uB294 \uBC18\uC601\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.')\r
    result.update(status='complete', engine='public-siting-v1', created_at=datetime.now(timezone.utc).isoformat())\r
    result['provenance'] = {'inputs':{r:payload[r]['metadata'] for r in ['demand','candidates','existing','mart'] if r in payload},'input_sha256':hashlib.sha256(json.dumps(payload,ensure_ascii=False,sort_keys=True).encode()).hexdigest(),'transformations':['\uC5C4\uACA9\uD55C \uC22B\uC790/\uC88C\uD45C/ID \uAC80\uC99D; \uACB0\uCE21 \uC790\uB3D9 0 \uB300\uCCB4 \uC5C6\uC74C'], 'validation_boundary':'\uC9C0\uC5ED\xB7\uC2DC\uC810\xB7\uC785\uB825 \uC758\uBBF8\uB294 \uC0AC\uC6A9\uC790\uAC00 \uC120\uC5B8\uD55C \uBA54\uD0C0\uB370\uC774\uD130\uC640 \uD589 \uBC94\uC704\uB85C \uAC80\uC0AC\uD569\uB2C8\uB2E4. \uD589\uC815\uACBD\uACC4\xB7\uC2E4\uCE21\uC2DC\uC810\xB7\uC124\uCE58\uAC00\uB2A5\uC131\uC758 \uC678\uBD80 \uD655\uC778\uC740 \uBCC4\uB3C4\uC785\uB2C8\uB2E4.'}\r
    return result\r
`;var D=`"""Provider-neutral grid aggregation. Exact source column mappings are inputs."""
def prepare_mart(payload):
    from shapely.geometry import shape, Point
    from shapely.strtree import STRtree
    from shapely.ops import transform
    from pyproj import Transformer
    from copy import deepcopy
    grids=payload.get('grids',{})
    meta=grids.get('metadata',{})
    for key in ['region','period','crs','source','kind']:
        if not meta.get(key):raise ValueError('\uACA9\uC790 \uBA54\uD0C0\uB370\uC774\uD130 \uB204\uB77D: '+key)
    features=grids.get('features',[])
    if not 0<len(features)<=20000:raise ValueError('\uACA9\uC790\uB294 1~20,000\uAC1C')
    if meta['crs'] not in ['EPSG:4326','EPSG:5179','EPSG:5186','LOCAL_METRE']:raise ValueError('\uC9C0\uC6D0\uD558\uC9C0 \uC54A\uB294 \uACA9\uC790 \uC88C\uD45C\uACC4')
    polygons=[];rows=[];seen=set()
    for f in features:
        props=dict(f.get('properties',{}));gid=str(props.pop('id',''))
        if not gid or gid in seen:raise ValueError('\uACA9\uC790 ID \uB204\uB77D/\uC911\uBCF5')
        seen.add(gid);geom=shape(f['geometry'])
        if geom.geom_type not in ['Polygon','MultiPolygon'] or geom.is_empty or not geom.is_valid:raise ValueError('\uC720\uD6A8\uD55C \uACA9\uC790 \uD3F4\uB9AC\uACE4 \uD544\uC694')
        point=geom.centroid
        rows.append({**props,'id':gid,'x':point.x,'y':point.y});polygons.append(geom)
    tree=STRtree(polygons);audit=[]
    for layer in payload.get('layers',[]):
        lm=layer.get('metadata',{})
        for key in ['region','period','kind']:
            if lm.get(key)!=meta[key]:raise ValueError('\uACA9\uC790\uC640 \uB808\uC774\uC5B4 '+key+' \uBD88\uC77C\uCE58')
        if not lm.get('source'):raise ValueError('\uB808\uC774\uC5B4 \uCD9C\uCC98 \uD544\uC694')
        crs=lm.get('crs')
        if crs not in ['EPSG:4326','EPSG:5179','EPSG:5186','LOCAL_METRE']:raise ValueError('\uB808\uC774\uC5B4 \uC88C\uD45C\uACC4 \uC624\uB958')
        if (crs=='LOCAL_METRE')!=(meta['crs']=='LOCAL_METRE'):raise ValueError('\uB85C\uCEEC \uC88C\uD45C\uB294 \uC2E4\uC138\uACC4 \uC88C\uD45C\uB85C \uBCC0\uD658\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4')
        tx=None if crs==meta['crs'] else Transformer.from_crs(crs,meta['crs'],always_xy=True)
        operations=layer.get('aggregations',[])
        if not operations:raise ValueError('\uC9D1\uACC4 \uBA85\uC138 \uD544\uC694')
        for op in operations:
            if op.get('op') not in ['count','sum','mean','unique','presence']:raise ValueError('\uC9C0\uC6D0\uD558\uC9C0 \uC54A\uB294 \uC9D1\uACC4')
            if not op.get('output') or any(op['output'] in r for r in rows):raise ValueError('\uC9D1\uACC4 \uCEEC\uB7FC \uCDA9\uB3CC')
        buckets=[[] for _ in rows];outside=0
        if len(layer.get('rows',[]))>20000:raise ValueError('\uB808\uC774\uC5B4 \uCD5C\uB300 20,000\uD589')
        for r in layer.get('rows',[]):
            x,y=number(r.get('x'),'x'),number(r.get('y'),'y')
            if tx:x,y=tx.transform(x,y)
            if not math.isfinite(x+y):raise ValueError('\uC88C\uD45C \uBCC0\uD658 \uC2E4\uD328')
            p=Point(x,y);matches=tree.query(p,predicate='within')
            if len(matches)>1:raise ValueError('\uC911\uCCA9 \uACA9\uC790\uC5D0 \uC810\uC774 \uC911\uBCF5 \uC5F0\uACB0\uB429\uB2C8\uB2E4')
            if not len(matches):outside+=1;continue
            buckets[int(matches[0])].append(r)
        if outside and not payload.get('acknowledge_unmatched',False):raise ValueError(f'\uACBD\uACC4/\uC9C0\uC5ED \uBC16 {outside}\uD589: \uC6D0\uBCF8 within \uADDC\uCE59\uC73C\uB85C \uBBF8\uC5F0\uACB0. \uC81C\uC678\uB97C \uBA85\uC2DC\uC801\uC73C\uB85C \uC2B9\uC778\uD558\uC138\uC694')
        for op in operations:
            for row,bucket in zip(rows,buckets):
                selected=[r for r in bucket if not op.get('filter') or all(r.get(k)==v for k,v in op['filter'].items())]
                kind=op['op']
                if kind=='count':value=len(selected)
                elif kind=='presence':value=int(bool(selected))
                elif kind=='unique':
                    if any(op['column'] not in r or str(r[op['column']]).strip()=='' for r in selected):raise ValueError('\uACE0\uC720\uAC12 \uC9D1\uACC4 \uCEEC\uB7FC \uB204\uB77D')
                    value=len({r[op['column']] for r in selected})
                else:
                    values=[number(r.get(op['column']),op['column']) for r in selected]
                    value=sum(values) if kind=='sum' else (sum(values)/len(values) if values else None)
                row[op['output']]=value
        audit.append({'source':lm['source'],'input_rows':len(layer.get('rows',[])),'unmatched':outside,'from_crs':crs,'to_crs':meta['crs'],'aggregations':operations})
    return {'rows':rows,'metadata':{**deepcopy(meta),'semantic_id':'siting-mart-v1','transformations':{'predicate':'within (boundary excluded, matching original)','centroid':'input CRS geometry centroid','layers':audit}}}
`;var q={\uACF5\uACF5\uC790\uC804\uAC70:{features:["\uD3C9\uADE0_\uAC74\uBB3C_\uC77C\uBC18_\uC9C0\uC0C1\uCE35\uC218","\uBC84\uC2A4_\uC815\uB958\uC7A5\uC218","\uC18C\uC0C1\uACF5\uC778_\uC74C\uC2DD_\uACC4","\uD3C9\uADE0_\uAC74\uBB3C_\uAC1C\uBCC4\uC8FC\uD0DD_\uAC1C\uBCC4\uC8FC\uD0DD\uAC00\uACA9","\uD3C9\uADE0_\uAC74\uBB3C_\uC77C\uBC18_\uAC74\uCD95\uBA74\uC801","\uAC74\uBB3C_\uC8FC\uC6A9\uB3C4_\uAC74\uCD95\uBB3C\uC218_\uB2E8\uB3C5","\uBC84\uC2A4\uC815\uB958\uC7A5_\uB178\uC120\uC218","\uD3C9\uADE0_\uAC74\uBB3C_\uC77C\uBC18_\uB192\uC774","\uD569\uACC4_\uAC74\uBB3C_\uAD6C\uC870_\uAC74\uCD95\uBB3C\uC218_\uCCA0\uADFC\uCF58\uD06C\uB9AC\uD2B8\uAD6C\uC870","\uD3C9\uADE0_\uAC74\uBB3C_\uAC74\uCD95\uBB3C\uC218_\uACC4","\uC778\uAD6C_\uC5EC","\uC18C\uC0C1\uACF5\uC778_\uACC4_\uC5C5\uC885","\uC778\uAD6C_\uC5F0\uB839_60\uB300","\uD3C9\uADE0_\uAC74\uBB3C_\uC77C\uBC18_\uC9C0\uD558\uCE35\uC218","\uC778\uAD6C_\uC720\uC18C\uB144"],target:"\uACF5\uACF5\uC790\uC804\uAC70_\uC124\uCE58\uC5EC\uBD80"},\uC774\uB3D9\uB178\uB3D9\uC790\uC27C\uD130:{features:["\uC18C\uC0C1\uACF5\uC778_\uC74C\uC2DD_\uACC4","\uD3C9\uADE0_\uACF5\uB3D9\uC8FC\uD0DD_\uAC74\uBB3C\uC5F0\uB839","\uAC74\uBB3C_\uC8FC\uC6A9\uB3C4_\uAC74\uCD95\uBB3C\uC218_\uACF5\uB3D9","\uC18C\uC0C1\uACF5\uC778_\uACC4_\uC5C5\uC885","\uC778\uAD6C_\uCD1D\uC778\uAD6C","\uD3C9\uADE0_\uACF5\uB3D9\uC8FC\uD0DD_\uC804\uC6A9\uBA74\uC801"],target:"\uC774\uB3D9\uB178\uB3D9\uC790\uC27C\uD130_\uC124\uCE58\uC5EC\uBD80"},\uADF8\uB298\uB9C9:{features:["\uD3C9\uADE0_\uD1A0\uC9C0_\uACF5\uC2DC\uC9C0\uAC00","\uD3C9\uADE0_\uAC74\uBB3C_\uC77C\uBC18_\uC5F0\uBA74\uC801","\uBC84\uC2A4\uC815\uB958\uC7A5_\uB178\uC120\uC218","\uD3C9\uADE0_\uAC74\uBB3C_\uC77C\uBC18_\uC9C0\uC0C1\uCE35\uC218","\uAC74\uBB3C_\uC8FC\uC6A9\uB3C4_\uAC74\uCD95\uBB3C\uC218_\uB2E8\uB3C5","\uBC84\uC2A4_\uC815\uB958\uC7A5\uC218","\uC778\uAD6C_\uCD08\uB4F1\uD559\uC0DD","\uD3C9\uADE0_\uAC74\uBB3C_\uAC1C\uBCC4\uC8FC\uD0DD_\uAC1C\uBCC4\uC8FC\uD0DD\uAC00\uACA9","\uC778\uAD6C_\uC5EC","\uD3C9\uADE0_\uAC74\uBB3C_\uC77C\uBC18_\uB300\uC9C0\uBA74\uC801","\uD569\uACC4_\uAC74\uBB3C_\uAC74\uCD95\uBB3C\uC218_\uC2DC\uAE30\uBCC4_15\uB144\uC774\uC0C1_19\uB144\uC774\uD558","\uAC74\uBB3C_\uC8FC\uC6A9\uB3C4_\uAC74\uCD95\uBB3C\uC218_\uACF5\uB3D9","\uD3C9\uADE0_\uAC74\uBB3C_\uAC74\uCD95\uBB3C\uC218_\uACC4","\uC18C\uC0C1\uACF5\uC778_\uACC4_\uC5C5\uC885","\uD6A1\uB2E8\uBCF4\uB3C4\uC218","\uD569\uACC4_\uACF5\uB3D9\uC8FC\uD0DD_\uAC74\uCD95\uBB3C\uC218_\uC2DC\uAE30\uBCC4_25\uB144\uC774\uC0C1_29\uB144\uC774\uD558","\uC778\uAD6C_\uC5F0\uB839_20\uB300","\uC18C\uC0C1\uACF5\uC778_\uC74C\uC2DD_\uACC4"],target:"\uADF8\uB298\uB9C9_\uC124\uCE58\uC5EC\uBD80"},\uC804\uAE30\uCC28\uCDA9\uC804\uC18C:{features:["\uC18C\uC0C1\uACF5\uC778_\uACC4_\uC5C5\uC885","\uD3C9\uADE0_\uAC74\uBB3C_\uC77C\uBC18_\uC5F0\uBA74\uC801","\uC18C\uC0C1\uACF5\uC778_\uAD00\uAD11\uC5EC\uAC00\uC624\uB77D_\uACC4","\uD3C9\uADE0_\uAC74\uBB3C_\uC77C\uBC18_\uC9C0\uC0C1\uCE35\uC218","\uD3C9\uADE0_\uACF5\uB3D9\uC8FC\uD0DD_\uAC74\uBB3C\uC5F0\uB839","\uC778\uAD6C_\uCD1D\uC778\uAD6C","\uD3C9\uADE0_\uAC74\uBB3C_\uAC74\uCD95\uBB3C\uC218_\uACC4","\uD3C9\uADE0_\uAC74\uBB3C_\uC77C\uBC18_\uB300\uC9C0\uBA74\uC801","\uACC4_\uC804\uC6A9\uBA74\uC801_105\uCD08\uACFC125\uC774\uD558","\uD3C9\uADE0_\uAC74\uBB3C_\uC77C\uBC18_\uAC74\uCD95\uBA74\uC801","\uAC74\uBB3C_\uC8FC\uC6A9\uB3C4_\uAC74\uCD95\uBB3C\uC218_\uB2E8\uB3C5","\uBC84\uC2A4_\uC815\uB958\uC7A5\uC218","\uD3C9\uADE0_\uAC74\uBB3C_\uC77C\uBC18_\uC6A9\uC801\uC728","\uAC74\uBB3C_\uC8FC\uC6A9\uB3C4_\uAC74\uCD95\uBB3C\uC218_\uACF5\uB3D9"],target:"\uC804\uAE30\uCC28\uCDA9\uC804\uC18C_\uC124\uCE58\uC5EC\uBD80"},\uD0DD\uBC30\uD568:{features:["\uC778\uAD6C_\uC0DD\uC0B0\uAC00\uB2A5","\uD3C9\uADE0_\uD1A0\uC9C0_\uACF5\uC2DC\uC9C0\uAC00","\uD3C9\uADE0_\uAC74\uBB3C_\uC77C\uBC18_\uC5F0\uBA74\uC801","\uD3C9\uADE0_\uAC74\uBB3C_\uAC74\uCD95\uBB3C\uC218_\uACC4","\uC778\uAD6C_\uC5F0\uB839_20\uB300","\uAC74\uBB3C_\uC8FC\uC6A9\uB3C4_\uAC74\uCD95\uBB3C\uC218_\uB2E8\uB3C5","\uC778\uAD6C_\uC5F0\uB839_50\uB300"],target:"\uD0DD\uBC30\uD568_\uC124\uCE58\uC5EC\uBD80"}};var E;async function X(){if(!E){self.postMessage({progress:"\uC11C\uBE44\uC2A4 \uB0B4\uC7A5 \uBD84\uC11D \uC5D4\uC9C4 \uC900\uBE44 \uC911"});let r=new URL("./vendor/siting-python-314.0.6/",self.location.href).href,{loadPyodide:n}=await import(r+"pyodide.mjs");E=await n({indexURL:r,packageBaseUrl:r}),E.runPython(R),E.runPython(D)}return E}self.onmessage=async({data:r})=>{try{if(r.action==="parse"){let c=r.file;if(!c||c.size>10*1024*1024)throw Error("\uD30C\uC77C\uC740 10MiB \uC774\uD558\uB85C \uC785\uB825\uD558\uC138\uC694.");let p=await c.arrayBuffer(),f=Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256",p)),t=>t.toString(16).padStart(2,"0")).join(""),a,l="utf-8";try{a=new TextDecoder("utf-8",{fatal:!0}).decode(p)}catch{l="cp949",a=new TextDecoder("euc-kr",{fatal:!0}).decode(p)}if(c.name.toLowerCase().endsWith(".json")){self.postMessage({parsed:JSON.parse(a),hash:f,encoding:l});return}let y=L(a),e=y.shift();if(!e?.length||e.some(t=>!t.trim())||new Set(e).size!==e.length)throw Error("CSV \uD5E4\uB354 \uB204\uB77D \uB610\uB294 \uC911\uBCF5");let o=y.filter(t=>t.some(s=>String(s).trim())).map((t,s)=>{if(t.length!==e.length)throw Error(s+2+"\uD589 \uC5F4 \uAC1C\uC218 \uBD88\uC77C\uCE58");return Object.fromEntries(e.map((d,m)=>[d,t[m]]))});self.postMessage({parsed:{rows:o},hash:f,encoding:l});return}let n=await X();if(r.action==="prepare"){self.postMessage({progress:"\uACA9\uC790 \uACF5\uAC04 \uACB0\uD569\xB7\uC88C\uD45C\uBCC0\uD658\xB7\uC9D1\uACC4 \uB77C\uC774\uBE0C\uB7EC\uB9AC \uC900\uBE44 \uC911"}),await n.loadPackage(["shapely","pyproj"]),n.globals.set("payload_json",JSON.stringify(r.payload));let c=await n.runPythonAsync("json.dumps(prepare_mart(json.loads(payload_json)),ensure_ascii=False,allow_nan=False)");self.postMessage({prepared:JSON.parse(c)});return}r.payload.mode==="recommendation"&&(self.postMessage({progress:"\uB0B4\uC7A5 \uBD84\uB958 \uBAA8\uB378\uB85C \uACA9\uC790 \uD559\uC2B5\xB7\uAC80\uC99D \uC900\uBE44 \uC911"}),await n.loadPackage("scikit-learn")),n.globals.set("payload_json",JSON.stringify(r.payload)),n.globals.set("profiles_json",JSON.stringify(q)),self.postMessage({progress:"\uC785\uB825 \uACC4\uC57D \uAC80\uC99D \uBC0F \uCF54\uB4DC \uACC4\uC0B0 \uC911"});let i=await n.runPythonAsync("json.dumps(run(json.loads(payload_json), json.loads(profiles_json)), ensure_ascii=False, allow_nan=False)");self.postMessage({result:JSON.parse(i)})}catch(n){self.postMessage({error:n.message||String(n)})}};
