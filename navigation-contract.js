// Contract metadata eligibility does not imply runtime input validation.
export function modelInputs(m){if(m.input_contract?.roles)return m.input_contract.roles;const legacy=m.contract?.input||m;return [{id:'records',label:'분석 원장',required:true,semantic_ids:[legacy.schema_id],required_columns:legacy.required_columns||[],formats:legacy.formats||[]}];}
export function modelEntry(m){const p=m.navigation?.entry||(m.engine==='tabular-v1'?'standard-models.html':null);return typeof p==='string'&&/^[a-zA-Z0-9_-]+\.html$/.test(p)?p:null;}
export function modelAvailable(m){return !!modelEntry(m)&&(m.navigation?.state?m.navigation.state==='available':m.engine==='tabular-v1');}
export function compareInput(source,role){
 const c=source.input_contract,reasons=[],unknown=[];
 if(!source.available)reasons.push('현재 이용 불가');
 if(!c)return {state:reasons.length?'incompatible':'unknown',reasons:[...reasons,'입력 계약 미등록']};
 if(!role.semantic_ids?.length||!c.semantic_id)unknown.push('입력 의미 미확인');else if(!role.semantic_ids.includes(c.semantic_id))reasons.push('입력 의미 불일치');
 if(!Array.isArray(c.columns))unknown.push('컬럼 미확인');else{const missing=(role.required_columns||[]).filter(x=>!c.columns.includes(x));if(missing.length)reasons.push('필수 컬럼 없음: '+missing.join(', '));}
 for(const key of ['region','period','crs']){if(role[key]===undefined)continue;if(c[key]===undefined)unknown.push(key+' 미확인');else if(JSON.stringify(role[key])!==JSON.stringify(c[key]))reasons.push(key+' 불일치');}
 for(const [column,unit] of Object.entries(role.units||{})){if(!c.units?.[column])unknown.push(column+' 단위 미확인');else if(c.units[column]!==unit)reasons.push(column+' 단위 불일치');}
 if(role.formats?.length&&!role.formats.includes(c.format))reasons.push('제공 형식 불일치 · 어댑터 필요');
 return {state:reasons.length?'incompatible':unknown.length?'unknown':'eligible',reasons:[...reasons,...unknown]};
}
export function modelCompatibility(m,sources){const roles=modelInputs(m).map(role=>({role,candidates:sources.map(s=>({id:s.id,...compareInput(s,role)}))}));const required=roles.filter(r=>r.role.required!==false);return {state:sources.length&&required.length&&required.every(r=>r.candidates.some(c=>c.state==='eligible'))?'eligible':'needs-input',ready:false,roles};}
export function selectionFrom(query,allowed){const p=query instanceof URLSearchParams?query:new URLSearchParams(query),settings={};for(const k of ['startYear','endYear']){const v=p.get(k);if(/^\d{4}$/.test(v||'')&&+v>=1960&&+v<=2100)settings[k]=+v;}const d=p.get('observationDate');if(/^\d{4}-\d{2}-\d{2}$/.test(d||'')&&!Number.isNaN(Date.parse(d))&&new Date(d).toISOString().slice(0,10)===d)settings.observationDate=d;return {version:1,sourceIds:[...new Set((p.get('sources')||'').split(',').filter(id=>allowed.includes(id)))].slice(0,16),settings};}
export function selectionQuery(s,allowed){const p=new URLSearchParams({sources:(s.sourceIds||[]).join(',')});for(const k of ['startYear','endYear','observationDate'])if(s.settings?.[k]!==undefined)p.set(k,String(s.settings[k]));const safe=selectionFrom(p,allowed),out=new URLSearchParams({selectionVersion:'1',sources:safe.sourceIds.join(',')});for(const [k,v] of Object.entries(safe.settings))out.set(k,String(v));return out;}
