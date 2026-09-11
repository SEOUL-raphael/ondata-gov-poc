export function createEngineScreens(React){
 function SitingScreen({selection,onBack}){
  const host=React.useRef(null),instance=React.useRef(null),latest=React.useRef({selection,onBack});latest.current={selection,onBack};
  const [error,setError]=React.useState('');
  React.useEffect(()=>{let cancelled=false;Promise.all([import(new URL('./public-siting.js',import.meta.url).href),fetch('./public-siting.css').then(r=>{if(!r.ok)throw Error('분석 스타일을 불러오지 못했습니다.');return r.text();})]).then(([module,css])=>{if(cancelled)return;const style=document.createElement('style');style.textContent='@scope (.siting-embedded) {'+css+'}\n.siting-embedded #siting-root{padding:0;max-width:none}.siting-embedded .siting-back{display:none}';host.current.before(style);instance.current=module.mountSiting(host.current,latest.current);instance.current.style=style;}).catch(e=>setError(e.message));return()=>{cancelled=true;instance.current?.unmount();instance.current?.style?.remove();};},[]);
  React.useEffect(()=>{instance.current?.update({selection,onBack});},[selection,onBack]);
  return React.createElement('section',{className:'siting-embedded','data-testid':'integrated-siting'},error&&React.createElement('p',{role:'alert'},error),React.createElement('div',{ref:host,id:'siting-root'}));
 }
 return {'public-siting-v1':SitingScreen};
}
