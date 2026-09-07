export function createExamplePrompts(ids,sources,options={}){
 const chosen=ids.map(id=>sources.find(s=>s.id===id)).filter(Boolean);if(!chosen.length)return [];
 const years=`${options.startYear||2015}~${options.endYear||2024}년`;
 const descriptions=chosen.map(s=>s.indicator?`${years} ${s.name}(${s.unit})`:s.id==='subway'?`${options.observationDate||'설정한 조회일'} ${s.name}의 역별 승차·하차 인원(명)`:`${s.name}의 현재 자전거 수·거치대 수(대)`);
 const intro=descriptions.join(', ');
 const annual=chosen.filter(s=>s.indicator);const sampled=chosen.some(s=>!s.indicator);
 const common='선택한 데이터의 실제 수치만 사용하고 결측값은 제외하며 출처와 단위를 표시해 줘.';
 const limits=(sampled?' 서울시 5건 표본은 전체로 일반화하지 말아 줘.':'')+(sampled&&annual.length?' 연도별 전국 통계와 서울 현재값·일별 표본은 별도로 분석하고 서로 결합하거나 상관계수를 계산하지 말아 줘.':'');
 return [
  {label:'핵심 수치 분석',prompt:`${intro}를 분석해 줘. ${annual.length?'연도별 추이와 처음·마지막 유효 연도의 변화량, 최댓값·최솟값을 정리하고 비율 지표의 변화는 %p로 구분해 줘. ':''}${sampled?'지점별 수치와 표본 내 최댓값·최솟값을 비교해 줘. ':''}${common}${limits}`},
  {label:chosen.length>1?'선택 지표 비교':'상세 비교',prompt:`${intro}를 표와 차트로 비교해 줘. 서로 다른 단위의 값은 합산하지 말고 지표별로 표시해 줘. ${annual.length>1?'공통 관측 연도에서 변화 방향을 비교하되 인과관계를 단정하지 말아 줘. ':''}${common}${limits}`},
  {label:'데이터 품질 점검',prompt:`${intro}의 유효 수치 개수, 결측값, 관측 기간 또는 조회 시점, 단위를 점검해 줘. 확인 가능한 사실과 추가 데이터가 필요한 질문을 구분해 줘. ${common}${limits}`}
 ];
}
