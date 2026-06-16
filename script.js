// ============================================================
// ★ Gist ID 기본값 (선택사항, 비밀 아님 — GitHub에 올려도 무방)
// ★ PAT(토큰)은 여기에 절대 입력하지 마세요 → 설정 모달에서 입력
// ============================================================
const _DEFAULT_PAT     = '';   // ← 비워두세요. 토큰은 설정 모달(⚙️)에서 입력하세요.
const _DEFAULT_GIST_ID = '';   // ← Gist ID를 여기에 넣으면 어느 PC에서든 같은 Gist를 씁니다.
// ============================================================
// 직원 명부 데이터 (PDF 등장 순서 기준, 공석 제외)
// ============================================================
const DEFAULT_DIR_RAW = [
  {dept:'대표이사',name:'이강인',title:'대표이사'},
  {dept:'윤리감사',name:'이정아',title:'직원'},
  {dept:'윤리감사',name:'이은희',title:'직원'},
  {dept:'전략경영실',name:'이은경',title:'실장'},
  {dept:'전략경영실',name:'이승봉',title:'부장'},
  {dept:'전략경영실',name:'이유경',title:'차장',ipHint:'192.168.137'},
  {dept:'전략경영실',name:'서원하',title:'차장'},
  {dept:'전략경영실',name:'김보라',title:'차장'},
  {dept:'전략경영실',name:'홍미소',title:'차장'},
  {dept:'전략경영실',name:'김지은',title:'대리'},
  {dept:'전략경영실',name:'이예재',title:'부장'},
  {dept:'전략경영실',name:'최현서',title:'차장'},
  {dept:'전략경영실',name:'오유정',title:'대리'},
  {dept:'전략경영실',name:'전예리',title:'대리'},
  {dept:'전략경영실',name:'이하림',title:'대리'},
  {dept:'전략경영실',name:'오태규',title:'직원'},
  {dept:'전략경영실',name:'박하나',title:'직원'},
  {dept:'부천시여성회관',name:'조도자',title:'관장'},
  {dept:'부천시여성회관',name:'이승주',title:'부장'},
  {dept:'부천시여성회관',name:'이지원',title:'차장'},
  {dept:'부천시여성회관',name:'최인우',title:'대리'},
  {dept:'부천시여성회관',name:'이지선',title:'주임'},
  {dept:'부천시여성회관',name:'설한솔',title:'직원'},
  {dept:'부천시여성회관',name:'심혜경',title:'직원'},
  {dept:'부천여성청소년센터',name:'김수경',title:'센터장'},
  {dept:'부천여성청소년센터',name:'이선미',title:'부장'},
  {dept:'부천여성청소년센터',name:'신선미',title:'차장'},
  {dept:'부천여성청소년센터',name:'김미연',title:'차장'},
  {dept:'부천여성청소년센터',name:'하수정',title:'대리'},
  {dept:'부천여성청소년센터',name:'김수빈',title:'직원'},
  {dept:'부천여성청소년센터',name:'장지숙',title:'차장'},
  {dept:'부천여성청소년센터',name:'이푸름',title:'대리'},
  {dept:'부천여성청소년센터',name:'박근영',title:'직원'},
  {dept:'부천여성청소년센터',name:'이정규',title:'주임'},
  {dept:'부천여성청소년센터',name:'김채림',title:'직원'},
  {dept:'부천여성청소년센터',name:'이숙진',title:'주임'},
  {dept:'부천여성청소년센터',name:'오종환',title:'주임'},
  {dept:'부천시청소년센터',name:'김홍준',title:'센터장'},
  {dept:'부천시청소년센터',name:'김성애',title:'부장'},
  {dept:'부천시청소년센터',name:'박성희',title:'차장',ipHint:'192.168.137'},
  {dept:'부천시청소년센터',name:'신지영',title:'대리'},
  {dept:'부천시청소년센터',name:'최민아',title:'직원'},
  {dept:'부천시청소년센터',name:'민가원',title:'차장'},
  {dept:'부천시청소년센터',name:'유수진',title:'대리'},
  {dept:'부천시청소년센터',name:'최준',title:'직원'},
  {dept:'산울림청소년센터',name:'양승부',title:'센터장'},
  {dept:'산울림청소년센터',name:'박성희',title:'부장',ipHint:'192.168.101'},
  {dept:'산울림청소년센터',name:'김민선',title:'대리'},
  {dept:'산울림청소년센터',name:'임수지',title:'대리'},
  {dept:'산울림청소년센터',name:'윤진희',title:'직원'},
  {dept:'산울림청소년센터',name:'박예진',title:'직원'},
  {dept:'산울림청소년센터',name:'엄수연',title:'직원'},
  {dept:'산울림청소년센터',name:'김은영',title:'차장'},
  {dept:'산울림청소년센터',name:'송복석',title:'차장'},
  {dept:'산울림청소년센터',name:'김준환',title:'차장'},
  {dept:'산울림청소년센터',name:'유길호',title:'직원'},
  {dept:'산울림청소년센터',name:'라단비',title:'주임'},
  {dept:'산울림청소년센터',name:'신정윤',title:'직원'},
  {dept:'소사청소년센터',name:'김미희',title:'센터장'},
  {dept:'소사청소년센터',name:'김낙현',title:'부장'},
  {dept:'소사청소년센터',name:'이미영',title:'차장'},
  {dept:'소사청소년센터',name:'정화령',title:'대리'},
  {dept:'소사청소년센터',name:'남호석',title:'직원'},
  {dept:'소사청소년센터',name:'나필주',title:'직원'},
  {dept:'소사청소년센터',name:'이재우',title:'차장'},
  {dept:'소사청소년센터',name:'김준호',title:'직원'},
  {dept:'소사청소년센터',name:'정지훈',title:'직원'},
  {dept:'소사청소년센터',name:'용보라',title:'대리'},
  {dept:'소사청소년센터',name:'태진호',title:'대리'},
  {dept:'소사청소년센터',name:'유선영',title:'직원'},
  {dept:'소사청소년센터',name:'이정희',title:'대리'},
  {dept:'소사청소년센터',name:'박희정',title:'직원'},
  {dept:'소사청소년센터',name:'권태현',title:'직원'},
  {dept:'부천시청소년상담복지센터',name:'백진현',title:'센터장'},
  {dept:'부천시청소년상담복지센터',name:'양근원',title:'부장'},
  {dept:'부천시청소년상담복지센터',name:'김선경',title:'주임',ipHint:'192.168.200'},
  {dept:'부천시청소년상담복지센터',name:'신혜선',title:'직원',ipHint:'192.168.200'},
  {dept:'부천시청소년상담복지센터',name:'황지희',title:'주임',ipHint:'192.168.200'},
  {dept:'부천시청소년상담복지센터',name:'조희진',title:'직원'},
  {dept:'부천시청소년상담복지센터',name:'정문선',title:'직원'},
  {dept:'부천시청소년상담복지센터',name:'김은령',title:'주임',ipHint:'192.168.200'},
  {dept:'부천시청소년상담복지센터',name:'원명호',title:'직원',ipHint:'192.168.200'},
  {dept:'부천시청소년상담복지센터',name:'김현숙',title:'차장'},
  {dept:'부천시청소년상담복지센터',name:'이유경',title:'직원',ipHint:'192.168.0'},
  {dept:'부천시청소년상담복지센터',name:'이경영',title:'직원'},
  {dept:'부천시청소년상담복지센터',name:'이선희',title:'직원'},
  {dept:'부천시청소년상담복지센터',name:'이영운',title:'직원'},
  {dept:'부천시청소년상담복지센터',name:'최진아',title:'차장'},
  {dept:'부천시청소년상담복지센터',name:'김현주',title:'주임'},
  {dept:'부천시청소년상담복지센터',name:'신수원',title:'직원'},
  {dept:'부천시청소년상담복지센터',name:'이지의',title:'직원'},
  {dept:'부천시청소년상담복지센터',name:'이아람',title:'대리'},
  {dept:'부천시청소년상담복지센터',name:'이호섭',title:'직원'},
  {dept:'부천시청소년상담복지센터',name:'전유정',title:'직원'},
  {dept:'부천시청소년상담복지센터',name:'김애영',title:'주임',ipHint:'192.168.100'},
  {dept:'부천시청소년상담복지센터',name:'이세나',title:'주임',ipHint:'192.168.100'},
  {dept:'부천시청소년상담복지센터',name:'고가영',title:'직원',ipHint:'192.168.100'},
  {dept:'부천시청소년상담복지센터',name:'김미선',title:'직원',ipHint:'192.168.100'},
  {dept:'부천시청소년상담복지센터',name:'오회옥',title:'직원',ipHint:'192.168.100'},
  {dept:'부천시청소년상담복지센터',name:'신홍철',title:'직원',ipHint:'192.168.100'},
  {dept:'부천시청소년상담복지센터',name:'이지훈',title:'직원',ipHint:'192.168.100'},
  {dept:'부천시청소년상담복지센터',name:'박예지',title:'직원',ipHint:'192.168.100'},
  {dept:'부천시청소년상담복지센터',name:'이다은',title:'직원'},
  {dept:'부천시건강가정지원센터',name:'김윤경',title:'센터장'},
  {dept:'부천시건강가정지원센터',name:'정소라',title:'과장'},
  {dept:'부천시건강가정지원센터',name:'최원진',title:'직원'},
  {dept:'부천시건강가정지원센터',name:'서하린',title:'직원'},
  {dept:'부천시건강가정지원센터',name:'박보름',title:'직원'},
  {dept:'부천시건강가정지원센터',name:'신동은',title:'팀장'},
  {dept:'부천시건강가정지원센터',name:'정지수',title:'선임'},
  {dept:'부천시건강가정지원센터',name:'양서영',title:'선임'},
  {dept:'부천시건강가정지원센터',name:'김수연',title:'직원'},
  {dept:'부천시건강가정지원센터',name:'김나라',title:'직원'},
  {dept:'부천시건강가정지원센터',name:'권정은',title:'직원'},
  {dept:'부천시건강가정지원센터',name:'박지예',title:'직원'},
  {dept:'부천시건강가정지원센터',name:'박희진',title:'직원'},
  {dept:'부천시건강가정지원센터',name:'강예진',title:'팀장'},
  {dept:'부천시건강가정지원센터',name:'윤영득',title:'직원'},
  {dept:'부천시건강가정지원센터',name:'고연주',title:'직원'},
  {dept:'부천시건강가정지원센터',name:'이수영',title:'직원'},
  {dept:'부천시건강가정지원센터',name:'배고은',title:'직원'},
  {dept:'부천시건강가정지원센터',name:'피의정',title:'직원'},
  {dept:'부천시일·쉼지원센터',name:'김수정',title:'센터장'},
  {dept:'부천시일·쉼지원센터',name:'김숙희',title:'총괄팀장'},
  {dept:'부천시일·쉼지원센터',name:'김미선',title:'직원',ipHint:'192.168.150'},
  {dept:'부천시일·쉼지원센터',name:'백승아',title:'직원',ipHint:'192.168.150'},
  {dept:'부천시일·쉼지원센터',name:'윤준영',title:'직원',ipHint:'192.168.150'},
  {dept:'부천시일·쉼지원센터',name:'오나영',title:'직원',ipHint:'192.168.150'}
];
let DIR = DEFAULT_DIR_RAW.map((e,i)=>({...e,idx:i+1}));


// ============================================================
// 직원 명부 동적 관리
// ============================================================
function setDIR(raw){
  DIR = raw.map((e,i)=>({...e,idx:i+1}));
  try{
    localStorage.setItem('bwyf_dir', JSON.stringify(raw));
    localStorage.setItem('bwyf_dir_ts', new Date().toLocaleDateString('ko-KR'));
  }catch(e){}
}
function loadDirFromLocal(){
  try{const s=localStorage.getItem('bwyf_dir');return s?JSON.parse(s):null;}catch{return null;}
}
function exportDirToExcel(){
  const rows=[['순번','부서명','이름','직위','겸직여부(Y)','IP힌트']];
  DIR.forEach((e,i)=>rows.push([i+1,e.dept,e.name||'',e.title||'',e.sameAs?'Y':'',e.ipHint||'']));
  const wb=XLSX.utils.book_new();
  const ws=XLSX.utils.aoa_to_sheet(rows);
  ws['!cols']=[{wch:6},{wch:32},{wch:12},{wch:10},{wch:10},{wch:18}];
  XLSX.utils.book_append_sheet(wb,ws,'직원 명부');
  XLSX.writeFile(wb,'부천여성청소년재단_직원명부_편집용.xlsx');
}
function importDirFromExcel(file){
  if(!file) return;
  const reader=new FileReader();
  reader.onload=e=>{
    try{
      const wb=XLSX.read(e.target.result,{type:'binary'});
      const ws=wb.Sheets[wb.SheetNames[0]];
      const rows=XLSX.utils.sheet_to_json(ws,{header:1,defval:''});
      let hIdx=rows.findIndex(r=>r.some(c=>String(c).trim()==='이름'));
      if(hIdx<0){alert('이름 열을 찾을 수 없습니다.');return;}
      const hdr=rows[hIdx].map(h=>String(h).trim());
      const iDept=hdr.findIndex(h=>h.includes('부서'));
      const iName=hdr.findIndex(h=>h==='이름');
      const iTitle=hdr.findIndex(h=>h.includes('직위'));
      const iSame=hdr.findIndex(h=>h.includes('겸직'));
      const iIP=hdr.findIndex(h=>h.includes('IP'));
      if(iName<0||iDept<0){alert('부서명·이름 열이 필요합니다.');return;}
      const newDir=rows.slice(hIdx+1)
        .filter(r=>String(r[iName]||'').trim())
        .map(r=>{
          const ent={dept:String(r[iDept]||'').trim(),name:String(r[iName]||'').trim(),title:String(r[iTitle]||'').trim()};
          if(String(r[iSame]||'').toUpperCase().trim()==='Y') ent.sameAs=true;
          const ip=String(r[iIP]||'').trim();
          if(ip) ent.ipHint=ip;
          return ent;
        });
      if(!newDir.length){alert('가져올 데이터가 없습니다.');return;}
      if(!confirm('직원 명부 '+newDir.length+'명을 가져옵니다. 현재 데이터를 덮어씁니다.')) return;
      setDIR(newDir);
      updateDirStatus();
      alert('직원 명부 '+newDir.length+'명 가져오기 완료');
    }catch(err){alert('파일 오류: '+err.message);}
  };
  reader.readAsBinaryString(file);
}
function updateDirStatus(){
  const el=document.getElementById('dirStatus');if(!el)return;
  const ts=localStorage.getItem('bwyf_dir_ts')||'';
  const isCustom=!!localStorage.getItem('bwyf_dir');
  el.textContent=isCustom?'커스텀 직원 명부 ('+DIR.length+'명)'+(ts?' · '+ts:''):'기본 직원 명부 ('+DIR.length+'명)';
  el.style.color=isCustom?'var(--g)':'var(--muted)';
}
function resetDir(){
  if(!confirm('직원 명부를 기본값으로 초기화합니까?')) return;
  localStorage.removeItem('bwyf_dir');localStorage.removeItem('bwyf_dir_ts');
  DIR=DEFAULT_DIR_RAW.map((e,i)=>({...e,idx:i+1}));
  updateDirStatus();
  alert('초기화 완료 ('+DIR.length+'명)');
}

// ============================================================
// GitHub Gist 연동
// ============================================================
const GIST_FILE='bwyf_security_config.json';
function getGistCfg(){return{pat:sessionStorage.getItem('bwyf_gist_pat')||_DEFAULT_PAT,gistId:localStorage.getItem('bwyf_gist_id')||_DEFAULT_GIST_ID};}
function saveGistCfg(pat,gistId){sessionStorage.setItem('bwyf_gist_pat',pat);localStorage.setItem('bwyf_gist_id',gistId);}

function setGistStatus(type,msg){
  const el=document.getElementById('gistStatus');if(!el)return;
  el.textContent={ok:'✅',error:'❌',warn:'⚠️'}[type]+' '+msg;
  el.style.color=type==='ok'?'var(--g)':type==='error'?'var(--red)':'var(--orange)';
}

async function loadFromGist(){
  const{pat,gistId}=getGistCfg();
  if(!pat||!gistId) throw new Error('PAT 또는 Gist ID 없음');
  const res=await fetch('https://api.github.com/gists/'+gistId,
    {headers:{'Authorization':'token '+pat,'Accept':'application/vnd.github+json'}});
  if(!res.ok) throw new Error('HTTP '+res.status);
  const data=await res.json();
  const file=data.files[GIST_FILE];
  if(!file) throw new Error('설정 파일('+GIST_FILE+')을 Gist에서 찾을 수 없음');
  return JSON.parse(file.content);
}

async function saveToGist(payload){
  const{pat,gistId}=getGistCfg();
  if(!pat) throw new Error('PAT 없음');
  const body={files:{[GIST_FILE]:{content:JSON.stringify(payload,null,2)}}};
  if(gistId){
    const res=await fetch('https://api.github.com/gists/'+gistId,
      {method:'PATCH',headers:{'Authorization':'token '+pat,'Content-Type':'application/json','Accept':'application/vnd.github+json'},body:JSON.stringify(body)});
    if(!res.ok) throw new Error('HTTP '+res.status);
    return res.json();
  } else {
    const res=await fetch('https://api.github.com/gists',
      {method:'POST',headers:{'Authorization':'token '+pat,'Content-Type':'application/json','Accept':'application/vnd.github+json'},
       body:JSON.stringify({description:'부천여성청소년재단 보안점검 설정',public:false,...body})});
    if(!res.ok) throw new Error('HTTP '+res.status);
    const data=await res.json();
    localStorage.setItem('bwyf_gist_id',data.id);
    document.getElementById('gistIdInput').value=data.id;
    return data;
  }
}


// ============================================================
// 전체 설정 JSON 내보내기 / 가져오기
// ============================================================
function exportSettingsJson(){
  const payload = {
    version: 2,
    exportedAt: new Date().toISOString(),
    exportedBy: '부천여성청소년재단 보안점검 자동화',
    rules: userRules,
    directory: DIR.map(({idx,...rest})=>rest),
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], {type:'application/json'});
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  const ts   = new Date().toLocaleDateString('ko-KR').replace(/\. /g,'-').replace('.','');
  a.href = url;
  a.download = '보안점검_설정_'+ts+'.json';
  a.click();
  URL.revokeObjectURL(url);
  document.getElementById('jsonStatus').textContent = '✅ 내보내기 완료';
}

function importSettingsJson(file){
  if(!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    try{
      const data = JSON.parse(e.target.result);
      if(!data.rules && !data.directory){
        alert('올바른 설정 파일이 아닙니다.'); return;
      }
      const rulesCnt = data.rules?.length || 0;
      const dirCnt   = data.directory?.length || 0;
      if(!confirm(
        '설정을 가져옵니다.\n\n' +
        '• 매핑 규칙: ' + rulesCnt + '개\n' +
        '• 직원 명부: ' + dirCnt + '명\n\n' +
        '현재 설정을 덮어씁니다. 계속하시겠습니까?'
      )) return;

      if(data.rules){
        userRules = data.rules;
        saveRules();
      }
      if(data.directory && data.directory.length){
        setDIR(data.directory);
      }

      renderRulesTable();
      updateDirStatus();
      populatePersonSelect();

      const ts = data.exportedAt
        ? new Date(data.exportedAt).toLocaleString('ko-KR')
        : '날짜 없음';
      document.getElementById('jsonStatus').textContent =
        '✅ 가져오기 완료 (규칙 '+rulesCnt+'개, 명부 '+dirCnt+'명 · 내보낸 시각: '+ts+')';
    }catch(err){
      alert('JSON 파싱 오류: '+err.message);
    }
  };
  reader.readAsText(file, 'utf-8');
}

function buildGistPayload(){
  const dirRaw=DIR.map(({idx,...rest})=>rest);
  return{version:2,savedAt:new Date().toISOString(),rules:userRules,directory:dirRaw};
}

async function syncToGist(){
  const btn=document.getElementById('gistSaveBtn');
  btn.textContent='저장 중…';btn.disabled=true;
  try{
    await saveToGist(buildGistPayload());
    setGistStatus('ok','저장 완료 '+new Date().toLocaleTimeString('ko-KR'));
  }catch(e){setGistStatus('error',e.message);alert('Gist 저장 실패: '+e.message);}
  btn.textContent='☁ Gist에 저장';btn.disabled=false;
}

async function syncFromGist(){
  const btn=document.getElementById('gistLoadBtn');
  btn.textContent='불러오는 중…';btn.disabled=true;
  try{
    const data=await loadFromGist();
    if(data.rules){userRules=data.rules;saveRules();}
    if(data.directory){setDIR(data.directory);}
    setGistStatus('ok','동기화 완료 '+new Date().toLocaleTimeString('ko-KR'));
    renderRulesTable();updateDirStatus();
    alert('Gist 동기화 완료 | 규칙 '+(data.rules?.length||0)+'개, 직원 명부 '+(data.directory?.length||0)+'명');
  }catch(e){setGistStatus('error',e.message);alert('Gist 불러오기 실패: '+e.message);}
  btn.textContent='☁ Gist에서 불러오기';btn.disabled=false;
}

function saveGistInputs(){
  const pat=document.getElementById('gistPatInput').value.trim();
  const gistId=document.getElementById('gistIdInput').value.trim();
  saveGistCfg(pat,gistId);
  setGistStatus('warn', pat?'설정 저장됨 — 동기화 버튼을 눌러 적용':'PAT 없음');
}

// ============================================================
// 앱 초기화 (DOMContentLoaded)
// ============================================================
async function initApp(){
  initDark();
  initReportMonthUI();
  // Gist ID 기본값만 localStorage에 선저장 (PAT은 UI로만 입력)
  if(_DEFAULT_GIST_ID && !localStorage.getItem('bwyf_gist_id'))
    localStorage.setItem('bwyf_gist_id', _DEFAULT_GIST_ID);

  // 로컬 저장 데이터 우선 적용
  const localDir=loadDirFromLocal();
  if(localDir) DIR=localDir.map((e,i)=>({...e,idx:i+1}));
  userRules=loadRules();

  // Gist 연동이 설정된 경우 자동 동기화
  const{pat,gistId}=getGistCfg();
  if(pat&&gistId){
    setGistStatus('warn','자동 동기화 중…');
    try{
      const data=await loadFromGist();
      if(data.rules){userRules=data.rules;saveRules();}
      if(data.directory){setDIR(data.directory);}
      setGistStatus('ok','자동 동기화 완료 '+new Date().toLocaleTimeString('ko-KR'));
    }catch(e){
      setGistStatus('error','자동 동기화 실패 — 로컬 데이터 사용');
    }
  }
}
document.addEventListener('DOMContentLoaded', initApp);


// ============================================================
// 연월 선택 헬퍼
// ============================================================
function getReportMonth(){
  const y=document.getElementById('reportYear')?.value||'';
  const m=document.getElementById('reportMonthSel')?.value||'';
  return (y&&m)?y+'-'+m.padStart(2,'0'):'';
}
function setReportMonth(ym){
  if(!ym) return;
  const parts=ym.split('-');
  if(parts.length<2) return;
  const yr=document.getElementById('reportYear');
  const ms=document.getElementById('reportMonthSel');
  if(yr) yr.value=parts[0];
  if(ms) ms.value=String(parseInt(parts[1]));
}
function initReportMonthUI(){
  const now=new Date();
  const curYear=now.getFullYear();
  const yr=document.getElementById('reportYear');
  const ms=document.getElementById('reportMonthSel');
  if(!yr||!ms) return;
  // 연도 옵션: 현재 -2 ~ +1
  yr.innerHTML='';
  for(let y=curYear-2;y<=curYear+1;y++){
    const o=document.createElement('option');
    o.value=y; o.textContent=y+'년';
    if(y===curYear) o.selected=true;
    yr.appendChild(o);
  }
  // 월 옵션
  ms.innerHTML='';
  for(let m=1;m<=12;m++){
    const o=document.createElement('option');
    o.value=m; o.textContent=m+'월';
    if(m===now.getMonth()+1) o.selected=true;
    ms.appendChild(o);
  }
}
function updateReportMonth(){
  // 선택 변경 시 배너 연월 업데이트
  const bannerMonth=document.getElementById('bannerMonth');
  if(bannerMonth) bannerMonth.textContent=getReportMonth()?getReportMonth()+' 기준':'';
}

// ============================================================
// 점검항목 약어 매핑
// ============================================================
const CHECK_COLS = [
  {key:'악성코드 백신 설치 및 실행 점검', short:'백신 미설치/미실행'},
  {key:'악성코드 백신 최신 보안 패치 점검', short:'백신 패치 취약'},
  {key:'운영체제, MS Office 최신 보안 패치 점검', short:'OS/Office 패치 취약'},
  {key:'한글 프로그램 최신 보안 패치 점검', short:'한글 패치 취약'},
  {key:'로그온 패스워드 안전성 점검', short:'패스워드 안전성 취약'},
  {key:'로그온 패스워드 사용 기간 점검', short:'패스워드 기간 초과'},
  {key:'화면 보호기 설정 점검', short:'화면보호기 미설정'},
  {key:'사용자 공유 폴더 설정 점검', short:'공유폴더 노출'},
  {key:'USB 자동 실행 설정 점검', short:'USB 자동실행 취약'},
  {key:'미사용 ActiveX 프로그램 점검', short:'ActiveX 취약'},
];

// IP 대역 → 부서 추정
const IP_DEPT = [
  {prefix:'192.168.137', dept:'전략경영실/본부'},
  {prefix:'192.168.200', dept:'청소년상담복지센터[원미]'},
  {prefix:'192.168.100', dept:'청소년상담복지센터'},
  {prefix:'192.168.101', dept:'산울림청소년센터'},
  {prefix:'192.168.150', dept:'부천시일·쉼지원센터'},
  {prefix:'10.180.39',   dept:'소사청소년센터'},
  {prefix:'172.16.1',    dept:'부천여성청소년센터'},
  {prefix:'192.168.0',   dept:'건강가정지원센터/오정'},
  {prefix:'192.168.1',   dept:'청소년상담복지센터'},
];


// ============================================================
// 사전 매핑 규칙 관리 (localStorage 저장)
// ============================================================
const DEFAULT_RULES = [
  {
    "id": "def1",
    "type": "name_ip",
    "matchName": "BWYF-712",
    "matchIP": "192.168.137",
    "ipMode": "prefix",
    "targetType": "person",
    "targetName": "서원하",
    "note": "BWYF-712 노트북"
  },
  {
    "id": "u1780298713394",
    "type": "name_ip",
    "matchName": "Dodang-cafe1",
    "matchIP": "192.168.0.104",
    "ipMode": "exact",
    "targetType": "person",
    "targetName": "오종환",
    "customDept": "",
    "customLabel": "",
    "note": ""
  },
  {
    "id": "u1780298793970",
    "type": "name_ip",
    "matchName": "산울림업무용2",
    "matchIP": "192.168.101.80",
    "ipMode": "exact",
    "targetType": "public",
    "targetName": "오종환",
    "customDept": "산울림청소년센터",
    "customLabel": "산울림업무용2",
    "note": ""
  },
  {
    "id": "u1780298839930",
    "type": "name_ip",
    "matchName": "서포터즈",
    "matchIP": "192.168.100.195",
    "ipMode": "exact",
    "targetType": "public",
    "targetName": "오종환",
    "customDept": "부천시청소년상담복지센터",
    "customLabel": "서포터즈",
    "note": ""
  },
  {
    "id": "u1780298863562",
    "type": "name_ip",
    "matchName": "원미센터사례연구실",
    "matchIP": "192.168.200.19",
    "ipMode": "exact",
    "targetType": "public",
    "targetName": "오종환",
    "customDept": "부천시청소년상담복지센터",
    "customLabel": "원미센터사례연구실",
    "note": ""
  },
  {
    "id": "u1780298883330",
    "type": "name_ip",
    "matchName": "따르릉북카페",
    "matchIP": "10.180.39.217",
    "ipMode": "exact",
    "targetType": "person",
    "targetName": "남호석",
    "customDept": "",
    "customLabel": "",
    "note": ""
  },
  {
    "id": "u1780298899770",
    "type": "name_ip",
    "matchName": "상상아울LAB",
    "matchIP": "10.180.39.203",
    "ipMode": "exact",
    "targetType": "public",
    "targetName": "남호석",
    "customDept": "소사청소년센터",
    "customLabel": "상상아울LAB",
    "note": ""
  },
  {
    "id": "u1780298918578",
    "type": "name_ip",
    "matchName": "tao",
    "matchIP": "192.168.137.125",
    "ipMode": "exact",
    "targetType": "person",
    "targetName": "조도자",
    "customDept": "",
    "customLabel": "",
    "note": ""
  },
  {
    "id": "u1780298985322",
    "type": "skip",
    "matchName": "신홍철",
    "matchIP": "192.168.100.168",
    "ipMode": "exact",
    "targetType": "skip",
    "targetName": "조도자",
    "customDept": "",
    "customLabel": "",
    "note": ""
  },
  {
    "id": "u1780299028290",
    "type": "skip",
    "matchName": "DESKTOP-9DLCN17",
    "matchIP": "192.168.101.28",
    "ipMode": "exact",
    "targetType": "skip",
    "targetName": "조도자",
    "customDept": "",
    "customLabel": "",
    "note": ""
  },
  {
    "id": "u1780299033353",
    "type": "skip",
    "matchName": "LAPTOP-T7G9U4VA",
    "matchIP": "192.168.0.21",
    "ipMode": "exact",
    "targetType": "skip",
    "targetName": "조도자",
    "customDept": "",
    "customLabel": "",
    "note": ""
  },
  {
    "id": "u1780299038210",
    "type": "skip",
    "matchName": "건강가정",
    "matchIP": "192.168.0.207",
    "ipMode": "exact",
    "targetType": "skip",
    "targetName": "조도자",
    "customDept": "",
    "customLabel": "",
    "note": ""
  },
  {
    "id": "u1780299101802",
    "type": "skip",
    "matchName": "김나님",
    "matchIP": "10.180.39.218",
    "ipMode": "exact",
    "targetType": "skip",
    "targetName": "조도자",
    "customDept": "",
    "customLabel": "",
    "note": ""
  },
  {
    "id": "u1780299142185",
    "type": "skip",
    "matchName": "김나라",
    "matchIP": "192.168.1.5",
    "ipMode": "exact",
    "targetType": "skip",
    "targetName": "조도자",
    "customDept": "",
    "customLabel": "",
    "note": ""
  },
  {
    "id": "u1780299152042",
    "type": "skip",
    "matchName": "김상민",
    "matchIP": "192.168.137.149",
    "ipMode": "exact",
    "targetType": "skip",
    "targetName": "조도자",
    "customDept": "",
    "customLabel": "",
    "note": ""
  },
  {
    "id": "u1780299157154",
    "type": "skip",
    "matchName": "노트북1",
    "matchIP": "192.168.0.187",
    "ipMode": "exact",
    "targetType": "skip",
    "targetName": "조도자",
    "customDept": "",
    "customLabel": "",
    "note": ""
  },
  {
    "id": "u1780299162010",
    "type": "skip",
    "matchName": "대표이사",
    "matchIP": "192.168.137.2",
    "ipMode": "exact",
    "targetType": "skip",
    "targetName": "조도자",
    "customDept": "",
    "customLabel": "",
    "note": ""
  },
  {
    "id": "u1780299178146",
    "type": "skip",
    "matchName": "부천시청소년상담복지센터",
    "matchIP": "192.168.1.2",
    "ipMode": "exact",
    "targetType": "skip",
    "targetName": "조도자",
    "customDept": "",
    "customLabel": "",
    "note": ""
  },
  {
    "id": "u1780299183626",
    "type": "skip",
    "matchName": "부천시청소년센터",
    "matchIP": "192.168.137.45",
    "ipMode": "exact",
    "targetType": "skip",
    "targetName": "조도자",
    "customDept": "",
    "customLabel": "",
    "note": ""
  },
  {
    "id": "u1780299189490",
    "type": "skip",
    "matchName": "소사청공유",
    "matchIP": "10.180.39.216",
    "ipMode": "exact",
    "targetType": "skip",
    "targetName": "조도자",
    "customDept": "",
    "customLabel": "",
    "note": ""
  },
  {
    "id": "u1780299194316",
    "type": "skip",
    "matchName": "신홍철",
    "matchIP": "192.168.100.168",
    "ipMode": "exact",
    "targetType": "skip",
    "targetName": "조도자",
    "customDept": "",
    "customLabel": "",
    "note": ""
  },
  {
    "id": "u1780299199609",
    "type": "skip",
    "matchName": "옥길육아나눔터2",
    "matchIP": "192.168.0.5",
    "ipMode": "exact",
    "targetType": "skip",
    "targetName": "조도자",
    "customDept": "",
    "customLabel": "",
    "note": ""
  },
  {
    "id": "u1780299204106",
    "type": "skip",
    "matchName": "육아나눔터",
    "matchIP": "192.168.0.203",
    "ipMode": "exact",
    "targetType": "skip",
    "targetName": "조도자",
    "customDept": "",
    "customLabel": "",
    "note": ""
  },
  {
    "id": "u1780299209235",
    "type": "skip",
    "matchName": "이유림",
    "matchIP": "192.168.150.171",
    "ipMode": "exact",
    "targetType": "skip",
    "targetName": "조도자",
    "customDept": "",
    "customLabel": "",
    "note": ""
  },
  {
    "id": "u1780299214330",
    "type": "skip",
    "matchName": "일쉼이음공간접수대",
    "matchIP": "192.168.0.35",
    "ipMode": "exact",
    "targetType": "skip",
    "targetName": "조도자",
    "customDept": "",
    "customLabel": "",
    "note": ""
  },
  {
    "id": "u1780299219043",
    "type": "skip",
    "matchName": "일쉼치유공간접수대",
    "matchIP": "192.168.150.22",
    "ipMode": "exact",
    "targetType": "skip",
    "targetName": "조도자",
    "customDept": "",
    "customLabel": "",
    "note": ""
  },
  {
    "id": "u1780299223586",
    "type": "skip",
    "matchName": "일쉼회복공간접수대",
    "matchIP": "192.168.150.19",
    "ipMode": "exact",
    "targetType": "skip",
    "targetName": "조도자",
    "customDept": "",
    "customLabel": "",
    "note": ""
  },
  {
    "id": "u1780299229459",
    "type": "skip",
    "matchName": "장은정",
    "matchIP": "192.168.200.11",
    "ipMode": "exact",
    "targetType": "skip",
    "targetName": "조도자",
    "customDept": "",
    "customLabel": "",
    "note": ""
  },
  {
    "id": "u1780299234995",
    "type": "skip",
    "matchName": "전예리",
    "matchIP": "192.168.137.166",
    "ipMode": "exact",
    "targetType": "skip",
    "targetName": "조도자",
    "customDept": "",
    "customLabel": "",
    "note": ""
  },
  {
    "id": "u1780299239725",
    "type": "skip",
    "matchName": "주말형",
    "matchIP": "10.180.39.205",
    "ipMode": "exact",
    "targetType": "skip",
    "targetName": "조도자",
    "customDept": "",
    "customLabel": "",
    "note": ""
  },
  {
    "id": "u1780299244354",
    "type": "skip",
    "matchName": "차문도",
    "matchIP": "192.168.200.10",
    "ipMode": "exact",
    "targetType": "skip",
    "targetName": "조도자",
    "customDept": "",
    "customLabel": "",
    "note": ""
  },
  {
    "id": "u1780299249497",
    "type": "skip",
    "matchName": "최원진",
    "matchIP": "192.168.0.39",
    "ipMode": "exact",
    "targetType": "skip",
    "targetName": "조도자",
    "customDept": "",
    "customLabel": "",
    "note": ""
  },
  {
    "id": "u1780299254177",
    "type": "skip",
    "matchName": "황서현",
    "matchIP": "192.168.0.198",
    "ipMode": "exact",
    "targetType": "skip",
    "targetName": "조도자",
    "customDept": "",
    "customLabel": "",
    "note": ""
  },
  {
    "id": "u1780299902953",
    "type": "skip",
    "matchName": "이의민",
    "matchIP": "192.168.100.116",
    "ipMode": "exact",
    "targetType": "skip",
    "targetName": "",
    "customDept": "",
    "customLabel": "",
    "note": ""
  }
];

function loadRules(){
  try{
    const s=localStorage.getItem('bwyf_map_rules');
    return s?JSON.parse(s):JSON.parse(JSON.stringify(DEFAULT_RULES));
  }catch{return JSON.parse(JSON.stringify(DEFAULT_RULES));}
}
function saveRules(){localStorage.setItem('bwyf_map_rules',JSON.stringify(userRules));}

let userRules = loadRules();

function ruleMatchesRow(rule, row){
  const comp=row['컴퓨터 이름']||'', ip=row['IP 주소']||'';
  const nameOk = !rule.matchName || comp===rule.matchName;
  const ipOk   = !rule.matchIP   ||
    (rule.ipMode==='prefix'?ip.startsWith(rule.matchIP):ip===rule.matchIP);
  if(rule.type==='name')    return comp===rule.matchName;
  if(rule.type==='ip')      return ipOk;
  if(rule.type==='name_ip') return nameOk && ipOk;
  if(rule.type==='skip')    return nameOk && ipOk;
  return false;
}

function applyRuleToRow(rule, row){
  const comp=row['컴퓨터 이름']||'';
  if(rule.targetType==='skip') return {skip:true};
  if(rule.targetType==='person'){
    const entry=DIR.find(d=>d.name===rule.targetName&&!d.sameAs);
    return {entry, compName: rule.matchName||comp};
  }
  if(rule.targetType==='public'){
    return {entry:null,customDept:rule.customDept,customName:rule.customLabel||comp,compName:comp};
  }
  return null;
}

// ── 설정 모달 UI ──────────────────────────────────────────────────────
function openSettings(){
  const{pat,gistId}=getGistCfg();
  document.getElementById('gistPatInput').value=pat;
  document.getElementById('gistIdInput').value=gistId;
  if(pat&&gistId) setGistStatus('warn','설정됨');
  else setGistStatus('warn','미설정');
  updateDirStatus();
  populatePersonSelect();
  onRuleTypeChange();
  renderRulesTable();
  document.getElementById('settingsModal').classList.remove('hidden');
}
function closeSettings(){
  document.getElementById('settingsModal').classList.add('hidden');
}

function populatePersonSelect(){
  const sel=document.getElementById('rTargetPerson');
  sel.innerHTML='<option value="">-- 선택 --</option>';
  DIR.filter(d=>!d.sameAs).forEach(d=>{
    const o=document.createElement('option');
    o.value=d.name; o.textContent=d.dept+' – '+d.name;
    sel.appendChild(o);
  });
}

function onRuleTypeChange(){
  const t=document.getElementById('ruleType').value;
  document.getElementById('fgName').style.display   = (t==='name'||t==='name_ip'||t==='skip')?'':'none';
  document.getElementById('fgIP').style.display     = (t==='ip'||t==='name_ip'||t==='skip')?'':'none';
  document.getElementById('fgIPMode').style.display = (t==='ip'||t==='name_ip'||t==='skip')?'':'none';
  document.getElementById('fgTarget').style.display = (t==='skip')?'none':'';
  if(t==='skip') document.getElementById('rTargetType').value='person';
}

function onTargetTypeChange(){
  const t=document.getElementById('rTargetType').value;
  document.getElementById('fgPerson').classList.toggle('hidden', t!=='person');
  document.getElementById('fgPublicDept').classList.toggle('hidden', t!=='public');
  document.getElementById('fgPublicLabel').classList.toggle('hidden', t!=='public');
}

const TYPE_LABELS={name:'이름',ip:'IP',name_ip:'이름+IP',skip:'스킵'};
const TYPE_TAGS  ={name:'tag-name',ip:'tag-ip',name_ip:'tag-both',skip:'tag-skip'};

function renderRulesTable(){
  const tb=document.getElementById('rulesTbody');
  tb.innerHTML='';
  if(!userRules.length){
    tb.innerHTML='<tr><td colspan="6" style="text-align:center;color:var(--muted);padding:16px">규칙 없음</td></tr>';
    return;
  }
  userRules.forEach((r,i)=>{
    const target = r.targetType==='skip'?'<span style="color:var(--red)">건너뜀</span>'
      : r.targetType==='public'?`<span style="color:var(--hd)">${r.customDept||''} (공용)</span>`
      : `<span style="color:var(--g)">${r.targetName}</span>`;
    const tr=document.createElement('tr');
    tr.innerHTML=`
      <td><span class="tag ${TYPE_TAGS[r.type]}">${TYPE_LABELS[r.type]}</span></td>
      <td>${r.matchName||'<span style="color:#ccc">-</span>'}</td>
      <td>${r.matchIP?(r.matchIP+(r.ipMode==='prefix'?' (대역)':'')):'<span style="color:#ccc">-</span>'}</td>
      <td>${target}</td>
      <td style="color:var(--muted);font-size:11px">${r.note||''}</td>
      <td><button class="btn btn-sm" style="background:#FEE2E2;color:#991B1B;border:none;cursor:pointer" onclick="deleteRule('${r.id}')">삭제</button></td>
    `;
    tb.appendChild(tr);
  });
}

function deleteRule(id){
  userRules=userRules.filter(r=>r.id!==id);
  saveRules(); renderRulesTable();
}

function resetRules(){
  if(!confirm('기본값으로 초기화하시겠습니까?')) return;
  userRules=JSON.parse(JSON.stringify(DEFAULT_RULES));
  saveRules(); renderRulesTable();
}

function addRule(){
  const type  = document.getElementById('ruleType').value;
  const mName = document.getElementById('rMatchName').value.trim();
  const mIP   = document.getElementById('rMatchIP').value.trim();
  const ipMode= document.getElementById('rIPMode').value;
  const tType = type==='skip'?'skip':document.getElementById('rTargetType').value;
  const tName = document.getElementById('rTargetPerson').value;
  const cDept = document.getElementById('rCustomDept').value.trim();
  const cLabel= document.getElementById('rCustomLabel').value.trim();
  const note  = document.getElementById('rNote').value.trim();

  if(type==='name'&&!mName){alert('컴퓨터이름을 입력하세요.');return;}
  if(type==='ip'&&!mIP){alert('IP 주소를 입력하세요.');return;}
  if(type==='name_ip'&&!mName&&!mIP){alert('컴퓨터이름 또는 IP를 입력하세요.');return;}
  if(type==='skip'&&(!mName&&!mIP)){alert('스킵 조건(이름 또는 IP)을 입력하세요.');return;}
  if(tType==='person'&&!tName){alert('직원을 선택하세요.');return;}
  if(tType==='public'&&!cDept){alert('공용 부서명을 입력하세요.');return;}

  const rule={
    id:'u'+Date.now(),type,matchName:mName,matchIP:mIP,ipMode,
    targetType:tType,targetName:tName,customDept:cDept,customLabel:cLabel,note
  };
  userRules.push(rule);
  saveRules(); renderRulesTable();
  // 폼 초기화
  ['rMatchName','rMatchIP','rNote','rCustomDept','rCustomLabel'].forEach(id=>document.getElementById(id).value='');
}

// ============================================================
// 전역 상태
// ============================================================
let agentRows = [];      // 파싱된 에이전트 데이터
let matchedMap = {};     // dirIdx → agentRow
let unknownRows = [];    // 미매핑 에이전트 rows
let assignments = {};    // unknownId → {dirIdx|customDept, customName, compName}
let currentStep = 1;
let _cachedRows = null;  // buildFinalRows 캐시

// ============================================================
// 파일 입력 처리
// ============================================================
const dropZone = document.getElementById('dropZone');
const fi = document.getElementById('fi');

dropZone.addEventListener('dragover', e=>{e.preventDefault();dropZone.classList.add('over')});
dropZone.addEventListener('dragleave',()=>dropZone.classList.remove('over'));
dropZone.addEventListener('drop', e=>{
  e.preventDefault(); dropZone.classList.remove('over');
  if(e.dataTransfer.files[0]) processFile(e.dataTransfer.files[0]);
});
fi.addEventListener('change', e=>{ if(e.target.files[0]) processFile(e.target.files[0]); });

function processFile(file){
  // 파일명 표시
  const fnEl=document.getElementById('uploadedFileName');
  const dz=document.getElementById('dropZone');
  if(fnEl){fnEl.textContent='📂 '+file.name;fnEl.style.display='block';}
  if(dz) dz.classList.add('loaded');
  const reader = new FileReader();
  reader.onload = e => {
    try{
      const wb = XLSX.read(e.target.result, {type:'binary'});
      const ws = wb.Sheets[wb.SheetNames[0]];
      const raw = XLSX.utils.sheet_to_json(ws, {header:1, defval:''});
      // 헤더 행 찾기
      let hIdx = -1;
      for(let i=0;i<raw.length;i++){
        if(raw[i].some(c=>String(c).trim()==='컴퓨터 이름')){hIdx=i;break;}
      }
      if(hIdx<0){alert('컴퓨터 이름 열을 찾을 수 없습니다. 파일 형식을 확인하세요.');return;}
      const headers = raw[hIdx].map(h=>String(h).trim());
      agentRows = raw.slice(hIdx+1)
        .filter(r=>r.some(c=>c!==''))
        .map(r=>{
          const obj={};
          headers.forEach((h,i)=>obj[h]=String(r[i]??'').trim());
          return obj;
        });
      doMapping();
      goStep(2);
    }catch(err){alert('파일 파싱 오류: '+err.message);}
  };
  reader.readAsBinaryString(file);
}

// ============================================================
// 매핑 로직
// ============================================================
function getIPPrefix(ip){
  for(const d of IP_DEPT) if(ip.startsWith(d.prefix)) return d.dept;
  return '';
}

function buildNotes(row){
  const status = row['구분']||'';
  if(status==='미점검'||(row['보안 점수']===''&&row['점검 완료 시간']==='')) return '미점검';
  const bads = [];
  for(const cc of CHECK_COLS){
    const v = row[cc.key]||'';
    if(v==='취약') bads.push(cc.short);
    // 한글 미설치 PC는 점검 자체가 불가 → 별도 표기
    if(cc.key==='한글 프로그램 최신 보안 패치 점검' && v==='점검 불가')
      bads.push('한글 점검불가(미설치)');
  }
  return bads.join(', ');
}

function extractNameFromComp(compName){
  // 직접 포함 여부 검사
  for(const d of DIR){
    if(d.name && compName.includes(d.name)) return d;
  }
  // '-' 뒤 이름 시도: "상담-신혜선" → "신혜선"
  const parts = compName.split(/[-_]/);
  for(const p of parts){
    const trimmed = p.trim();
    const found = DIR.find(d=>d.name===trimmed);
    if(found) return found;
  }
  return null;
}

function findDirEntry(compName, ip){
  // sameAs(겸직) 엔트리는 이름 매핑에서 제외
  const exact = DIR.filter(d=>d.name===compName && !d.sameAs);
  if(exact.length===1) return {entry:exact[0], matchType:'exact'};
  if(exact.length>1){
    // IP 힌트로 구분
    const hinted = exact.find(d=>d.ipHint && ip.startsWith(d.ipHint));
    if(hinted) return {entry:hinted, matchType:'exact_ip'};
    return {entry:exact[0], matchType:'exact_ambiguous', all:exact};
  }
  // 부분 이름 매핑 (컴퓨터이름 내 성명 포함)
  const partial = extractNameFromComp(compName);
  if(partial) return {entry:partial, matchType:'partial'};
  return null;
}

function doMapping(){
  matchedMap = {};
  unknownRows = [];
  assignments = {};
  _cachedRows = null;

  for(const row of agentRows){
    const ip    = row['IP 주소']||'';
    const comp  = row['컴퓨터 이름']||'';
    let mapped  = false;

    // 사용자 정의 규칙 순서대로 적용
    for(const rule of userRules){
      if(!ruleMatchesRow(rule,row)) continue;
      const res = applyRuleToRow(rule,row);
      if(!res){mapped=true;break;}  // null = skip
      if(res.skip){mapped=true;break;}
      if(res.entry){
        const idx=res.entry.idx;
        if(matchedMap[idx]){
          const existScore=parseInt(matchedMap[idx].score||0);
          const newScore=parseInt(row['보안 점수']||0);
          if(newScore>existScore)
            matchedMap[idx]={...res.entry,compName:res.compName,ip:row['IP 주소']||'',score:row['보안 점수'],notes:buildNotes(row),row};
          if(!matchedMap[idx].notes.includes('PC 2대'))
            matchedMap[idx].notes=matchedMap[idx].notes?matchedMap[idx].notes+', PC 2대 운영':'PC 2대 운영';
        } else {
          matchedMap[idx]={...res.entry,compName:res.compName,ip:row['IP 주소']||'',score:row['보안 점수'],notes:buildNotes(row),row};
        }
      } else {
        const uid='pub_'+Object.keys(assignments).length;
        assignments[uid]={customDept:res.customDept,customName:res.customName,compName:res.compName,
          score:row['보안 점수'],notes:buildNotes(row),row};
      }
      mapped=true; break;
    }
    if(mapped) continue;

    // 일반 이름 매핑
    const found=findDirEntry(comp,ip);
    if(found){
      const{entry,matchType,all}=found;
      if(matchType==='exact_ambiguous'){
        unknownRows.push({id:'unk_'+unknownRows.length,row,comp,ip,guessedDept:getIPPrefix(ip),ambiguous:all});
        continue;
      }
      const idx=entry.idx;
      if(matchedMap[idx]){
        const existScore=parseInt(matchedMap[idx].score||0);
        const newScore=parseInt(row['보안 점수']||0);
        if(newScore>existScore)
          matchedMap[idx]={...entry,compName:comp,ip:row['IP 주소']||'',score:row['보안 점수'],notes:buildNotes(row),row,matchType};
        if(!matchedMap[idx].notes.includes('PC 2대'))
          matchedMap[idx].notes=matchedMap[idx].notes?matchedMap[idx].notes+', PC 2대 운영':'PC 2대 운영';
      } else {
        matchedMap[idx]={...entry,compName:comp,ip:row['IP 주소']||'',score:row['보안 점수'],notes:buildNotes(row),row,matchType};
      }
    } else {
      unknownRows.push({id:'unk_'+unknownRows.length,row,comp,ip,guessedDept:getIPPrefix(ip)});
    }
  }
}

// ============================================================
// UI 렌더링
// ============================================================
function goStep(n){
  currentStep=n;
  [1,2,3].forEach(i=>{
    document.getElementById('step'+i).classList.toggle('hidden',i!==n);
    const s=document.getElementById('s'+i);
    s.className='step'+(i<n?' done':i===n?' active':'');
  });
  _cachedRows=null;  // 단계 전환 시 캐시 무효화
  // 하단 고정바: 단계별 콘텐츠 전환
  const bar=document.getElementById('stickyBar');
  const s2=document.getElementById('stickyStep2');
  const s3=document.getElementById('stickyStep3');
  if(n===2){
    bar.classList.remove('hidden'); document.body.classList.add('has-sticky');
    if(s2) s2.style.display='flex'; if(s3) s3.style.display='none';
  } else if(n===3){
    bar.classList.remove('hidden'); document.body.classList.add('has-sticky');
    if(s2) s2.style.display='none'; if(s3) s3.style.display='flex';
  } else {
    bar.classList.add('hidden'); document.body.classList.remove('has-sticky');
  }
  if(n===2) renderStep2();
  if(n===3) renderStep3();
}

function renderStep2(){
  // 통계
  const total = DIR.length;
  const matched = Object.keys(matchedMap).length + Object.keys(assignments).filter(k=>k.startsWith('pub_')).length;
  const unkCnt = unknownRows.length;
  const dangerCnt = Object.values(matchedMap).filter(m=>{const s=parseInt(m.score||0);return s>0&&s<80}).length;
  const warnCnt = Object.values(matchedMap).filter(m=>{const s=parseInt(m.score||0);return s>=80&&s<100}).length;
  document.getElementById('statsArea').innerHTML=`
    <div class="stat"><div class="stat-n">${total}</div><div class="stat-l">직원 명부 인원</div></div>
    <div class="stat"><div class="stat-n">${matched}</div><div class="stat-l">자동 매핑</div></div>
    <div class="stat warn"><div class="stat-n">${warnCnt}</div><div class="stat-l">취약 (80~99점)</div></div>
    <div class="stat danger"><div class="stat-n">${dangerCnt}</div><div class="stat-l">심각 (~79점)</div></div>
    <div class="stat pur"><div class="stat-n">${unkCnt}</div><div class="stat-l">검토 필요</div></div>
  `;

  // 미확인 기기
  document.getElementById('unkCount').textContent=unkCnt;
  if(unkCnt===0){
    document.getElementById('unkCard').classList.add('hidden');
  } else {
    document.getElementById('unkCard').classList.remove('hidden');
    const listEl=document.getElementById('unkList');
    listEl.innerHTML='';
    unknownRows.forEach(u=>{
      // 기본값: 공용 PC / 기타로 사전 할당
      if(!assignments[u.id]) assignUnknown(u.id,'PUBLIC');
      const optHtml = buildAssignOptions(u);
      const div=document.createElement('div');
      div.className='unk-item';
      div.innerHTML=`
        <div>
          <div class="unk-comp">${u.comp}</div>
          <div class="unk-ip">${u.ip}</div>
          <div class="unk-guess">${u.guessedDept?'추정: '+u.guessedDept:''} ${u.ambiguous?'[동명이인]':''}</div>
        </div>
        <div style="font-size:11px;color:var(--muted)">
          점수: ${u.row['보안 점수']||'미점검'} | 구분: ${u.row['구분']||'-'}
        </div>
        <div class="unk-ctrl">
          <select class="asgn" data-id="${u.id}" onchange="assignUnknown('${u.id}',this.value)">
            <option value="">-- 직접 선택 --</option>
            <option value="PUBLIC" selected>🖥️ 공용 PC / 기타</option>
            <option value="IGNORE">❌ 제외 (출력 안 함)</option>
            <optgroup label="── 직원 명부 ──">
            ${optHtml}
            </optgroup>
          </select>
        </div>
      `;
      listEl.appendChild(div);
    });
  }

  // 매핑 미리보기
  renderTable('previewBody', false);
  document.getElementById('matchedCount').textContent=Object.keys(matchedMap).length;
  const umEl=document.getElementById('unmatchedInfo');
  if(umEl) umEl.textContent=unknownRows.length?'(미확인 '+unknownRows.length+'건 포함)':'';

  // 다음 버튼 상태
}

function buildAssignOptions(u){
  // 동명이인 후보가 있으면 상단에
  let opts='';
  if(u.ambiguous){
    opts += u.ambiguous.map(e=>`<option value="${e.idx}" style="font-weight:700">★ ${e.dept} ${e.name}</option>`).join('');
    opts += '<option disabled>──────────</option>';
  }
  opts += DIR.map(e=>`<option value="${e.idx}">${e.dept} – ${e.name}</option>`).join('');
  return opts;
}

function assignUnknown(id, val){
  _cachedRows = null;
  if(val===''){delete assignments[id];}
  else if(val==='PUBLIC'){assignments[id]={customDept:guessedDeptById(id),customName:'(공용)',isPublic:true};}
  else if(val==='IGNORE'){assignments[id]={ignore:true};}
  else{
    const idx=parseInt(val);
    const entry=DIR.find(d=>d.idx===idx);
    if(entry) assignments[id]={dirIdx:idx,entry};
  }
  // 미확인 모두 할당됐는지 확인
  const allDone=unknownRows.every(u=>assignments[u.id]);
  const sn=document.getElementById('stickyNextBtn');
  if(sn) sn.disabled=!allDone;
  renderTable('previewBody', false);
}

function guessedDeptById(id){
  const u=unknownRows.find(x=>x.id===id);
  return u?u.guessedDept:'';
}

function buildFinalRows(){
  if(_cachedRows) return _cachedRows;
  const rows=[];
  // 1. 직원 명부 기준 전체 행
  for(const entry of DIR){
    if(entry.sameAs){
      // 겸직 행: 주 엔트리(동명 비겸직)의 점검 결과를 복사
      const primary = DIR.find(d=>d.name===entry.name && !d.sameAs);
      const m = primary ? matchedMap[primary.idx] : null;
      rows.push({dirIdx:entry.idx, dept:entry.dept, name:entry.name,
        compName: m ? m.compName : null, ip: m ? (m.ip||'') : '',
        score: m ? m.score : '', isSameAs: true,
        row: null,
        notes: m ? (m.notes ? m.notes+' (겸직)' : '겸직') : '미점검(겸직)'});
      continue;
    }
    const m=matchedMap[entry.idx];
    if(m){
      rows.push({dirIdx:entry.idx,dept:entry.dept,name:entry.name,compName:m.compName,
        ip:m.ip||'',score:m.score,notes:m.notes,matchType:m.matchType,row:m.row||null});
    } else {
      rows.push({dirIdx:entry.idx,dept:entry.dept,name:entry.name,compName:null,
        ip:'',score:'',notes:'미점검',row:null});
    }
  }
  // 2. 미확인 기기 반영
  for(const u of unknownRows){
    const asgn=assignments[u.id];
    if(!asgn||asgn.ignore) continue;
    if(asgn.dirIdx){
      // 직원 명부 항목에 덮어쓰기
      const existing=rows.find(r=>r.dirIdx===asgn.dirIdx);
      if(existing){
        existing.compName=u.comp;
        existing.ip=u.ip||'';
        existing.score=u.row['보안 점수'];
        existing.notes=buildNotes(u.row);
        existing.row=u.row;
      }
    } else {
      // 공용 PC → 맨 끝에 추가
      rows.push({dirIdx:9999,dept:asgn.customDept||u.guessedDept||'미확인',
        name:asgn.customName||u.comp,compName:u.comp,ip:u.ip||'',
        score:u.row['보안 점수'],notes:buildNotes(u.row),row:u.row});
    }
  }
  // 3. pub_ assignments (공용 하드코딩)
  for(const [k,v] of Object.entries(assignments)){
    if(k.startsWith('pub_')){
      rows.push({dirIdx:9999,dept:v.customDept||'',name:v.customName||'',
        compName:v.compName,ip:v.row?v.row['IP 주소']||'':'',score:v.score,notes:v.notes,row:v.row||null});
    }
  }
  // 정렬: 공용/미확인 PC(9999)는 해당 부서 마지막 직원 바로 뒤에 삽입
  // 각 부서 그룹의 최대 dirIdx 계산
  const _deptLast={};
  for(const r of rows){
    if(r.dirIdx!==9999){
      const g=getDeptGroup(r.dept);
      if(!_deptLast[g]||r.dirIdx>_deptLast[g]) _deptLast[g]=r.dirIdx;
    }
  }
  rows.sort((a,b)=>{
    // 정렬 키: 일반 행은 dirIdx×2, 9999 행은 소속 부서 마지막 dirIdx×2+1
    const ak=a.dirIdx!==9999 ? a.dirIdx*2
      : ((_deptLast[getDeptGroup(a.dept)]||9000)*2+1);
    const bk=b.dirIdx!==9999 ? b.dirIdx*2
      : ((_deptLast[getDeptGroup(b.dept)]||9000)*2+1);
    return ak-bk;
  });
  _cachedRows=rows;
  return rows;
}

function scoreClass(sc){
  const n=parseInt(sc);
  if(isNaN(n)||sc==='') return '';
  if(n===100) return 'score-100';
  if(n>=90) return 'score-90';
  if(n>=80) return 'score-80';
  return 'score-low';
}
function rowClass(sc,notes){
  if(notes==='미점검') return 'unchecked-row';
  const n=parseInt(sc);
  if(isNaN(n)||n===100) return 'safe-row';
  if(n>=90) return 'warn-row';
  return 'danger-row';
}
function scoreBadge(sc,notes){
  if(notes==='미점검') return '<span class="badge b-unc">미점검</span>';
  const n=parseInt(sc);
  if(isNaN(n)) return '<span class="badge b-unc">-</span>';
  if(n===100) return '<span class="badge b-safe">100</span>';
  if(n>=90)   return '<span class="badge b-warn">'+n+'</span>';
  return '<span class="badge b-danger">'+n+'</span>';
}

function renderTable(tbodyId, isFinal){
  const rows=buildFinalRows();
  const tb=document.getElementById(tbodyId);
  if(!tb) return;
  tb.innerHTML='';
  rows.forEach((r,i)=>{
    const nameDisplay = r.compName && r.compName!==r.name && r.compName!=='미점검'
      ? `${r.name}<span style="color:var(--muted);font-size:10px;margin-left:3px">(${r.compName})</span>`
      : r.name;
    const notesHtml = r.notes==='미점검'
      ? '<span class="notes-unc">미점검</span>'
      : r.notes
        ? '<span class="notes-bad">'+r.notes+'</span>'
        : '<span style="color:var(--g);font-size:11px">이상없음</span>';
    const tr=document.createElement('tr');
    tr.className=rowClass(r.score,r.notes);
    // 취약 행: 점수 낮을수록 더 진한 배경
    const sc2=parseInt(r.score);
    if(!isNaN(sc2)&&sc2>0&&sc2<80) tr.style.borderLeft='3px solid var(--red)';
    else if(!isNaN(sc2)&&sc2>=80&&sc2<100) tr.style.borderLeft='3px solid var(--orange)';
    tr.innerHTML=`
      <td class="row-idx">${i+1}</td>
      <td>${r.dept}</td>
      <td>${nameDisplay}</td>
      <td style="font-size:11px;color:var(--muted);font-family:monospace">${r.ip||'—'}</td>
      <td class="score-cell">${scoreBadge(r.score,r.notes)}</td>
      <td>${notesHtml}</td>
    `;
    tb.appendChild(tr);
  });
}

function renderStep3(){
  // 1. 연월 초기화 (이미 설정된 경우 유지)
  if(!getReportMonth()) initReportMonthUI();

  // 2. 탭 먼저 표시 (렌더 전에 DOM 활성화)
  switchTab('dash');

  // 3. 렌더링

  try{ renderTable('finalBody', true); }catch(e){ console.error('finalBody:', e); }
  try{ renderDashboard(); }catch(e){ console.error('dashboard:', e); }
  try{
    const rows=buildFinalRows();
    const total=rows.length;
    const safe=rows.filter(r=>parseInt(r.score)===100).length;
    const vuln=rows.filter(r=>{const n=parseInt(r.score);return !isNaN(n)&&n>0&&n<100;}).length;
    const unc=rows.filter(r=>r.notes==='미점검'||r.notes==='미점검(겸직)').length;
    const mEl=document.getElementById('bannerMonth');
    const tEl=document.getElementById('bannerTitle');
    const sEl=document.getElementById('bannerStats');
    const mv=getReportMonth();
    if(mEl) mEl.textContent=mv?mv+' 기준':'';
    const rate=total?Math.round((safe+vuln)/total*100):0;
    if(sEl) sEl.innerHTML=`
      <div style="text-align:center"><div style="font-size:22px;font-weight:800">${total}</div><div style="font-size:11px;opacity:.8">전체</div></div>
      <div style="text-align:center"><div style="font-size:22px;font-weight:800;color:#6EE7B7">${safe}</div><div style="font-size:11px;opacity:.8">안전</div></div>
      <div style="text-align:center"><div style="font-size:22px;font-weight:800;color:#FCD34D">${vuln}</div><div style="font-size:11px;opacity:.8">취약</div></div>
      <div style="text-align:center"><div style="font-size:22px;font-weight:800;color:#D1D5DB">${unc}</div><div style="font-size:11px;opacity:.8">미점검</div></div>
      <div style="text-align:center"><div style="font-size:22px;font-weight:800">${rate}%</div><div style="font-size:11px;opacity:.8">점검률</div></div>
    `;
  }catch(e){ console.error('banner:', e); }

  const ds=document.getElementById('detailSearch');
  const df=document.getElementById('detailFilter');
  if(ds) ds.value='';
  if(df) df.value='';
  filterDetailTable();

}

// ============================================================
// 엑셀 내보내기
// ============================================================
function exportXlsx(){
  const rows=buildFinalRows();
  if(!getReportMonth()) initReportMonthUI();
  const monthVal=getReportMonth();
  let yearM='';
  if(monthVal){
    const [y,m]=monthVal.split('-');
    yearM=y+'년_'+parseInt(m)+'월';
  }
  const filename=(yearM?yearM+'_':'')+'에이전트_보안점검결과.xlsx';

  const wsData=[['부서명','이름(컴퓨터 이름)','IP 주소','보안점수','비고(특이사항)']];
  rows.forEach(r=>{
    const nameCol = r.compName && r.compName!==r.name
      ? r.name+'('+r.compName+')'
      : r.name;
    wsData.push([r.dept, nameCol, r.ip||'', r.notes==='미점검'?'미점검':(r.score||''), r.notes]);
  });

  const wb=XLSX.utils.book_new();
  const ws=XLSX.utils.aoa_to_sheet(wsData);

  // 열 너비
  ws['!cols']=[{wch:30},{wch:22},{wch:18},{wch:10},{wch:50}];

  // 헤더 스타일 (기본 지원 안 하지만 셀 ref 저장)
  XLSX.utils.book_append_sheet(wb, ws, '보안점검결과');

  // 메타 정보 시트
  const meta=[
    ['생성일시', new Date().toLocaleString('ko-KR')],
    ['기준연월', monthVal],
    ['총인원', rows.length],
    ['안전(100점)', rows.filter(r=>parseInt(r.score)===100).length],
    ['취약(<100점)', rows.filter(r=>{const n=parseInt(r.score);return !isNaN(n)&&n<100&&n>0}).length],
    ['미점검', rows.filter(r=>r.notes==='미점검').length],
  ];
  const wsMeta=XLSX.utils.aoa_to_sheet(meta);
  wsMeta['!cols']=[{wch:16},{wch:28}];
  XLSX.utils.book_append_sheet(wb, wsMeta, '요약');

  // 부서별 대시보드 시트
  const depts=buildDeptSummary(rows);
  depts.sort((a,b)=>deptOrderIdx(a.dept)-deptOrderIdx(b.dept)||b.vuln-a.vuln);
  const deptData=[['부서명','총원','안전(100점)','취약','미점검','점검률(%)']];
  depts.forEach(d=>{
    const checked=d.safe+d.vuln;
    const rate=d.total?Math.round(checked/d.total*100):0;
    deptData.push([d.dept,d.total,d.safe,d.vuln,d.unc,rate]);
  });
  const wsDept=XLSX.utils.aoa_to_sheet(deptData);
  wsDept['!cols']=[{wch:32},{wch:8},{wch:12},{wch:8},{wch:8},{wch:10}];
  XLSX.utils.book_append_sheet(wb, wsDept, '부서별현황');

  // 취약 항목 시각화 시트 (Unicode 막대 그래프)
  const rows2=buildFinalRows();
  const vulnItems=buildVulnAnalysis(rows2);
  if(vulnItems.length){
    const checkedCnt=rows2.filter(r=>r.row&&!r.isSameAs).length;
    const maxCnt=vulnItems[0][1];
    const vizData=[['취약 항목','건수','비율']];
    vulnItems.forEach(([label,cnt])=>{
      const pct=checkedCnt?Math.round(cnt/checkedCnt*100):0;
      vizData.push([label,cnt,pct+'%']);
    });
    const wsVuln=XLSX.utils.aoa_to_sheet(vizData);
    wsVuln['!cols']=[{wch:28},{wch:8},{wch:8}];
    XLSX.utils.book_append_sheet(wb,wsVuln,'취약항목분석');
  }

  XLSX.writeFile(wb, filename);
}
// ============================================================
// 대시보드
// ============================================================
const CHECK_SHORT = {
  '악성코드 백신 설치 및 실행 점검':'백신 미설치/미실행',
  '악성코드 백신 최신 보안 패치 점검':'백신 패치 취약',
  '운영체제, MS Office 최신 보안 패치 점검':'OS/Office 패치',
  '한글 프로그램 최신 보안 패치 점검':'한글 패치',
  '로그온 패스워드 안전성 점검':'패스워드 안전성',
  '로그온 패스워드 사용 기간 점검':'패스워드 기간',
  '화면 보호기 설정 점검':'화면보호기 미설정',
  '사용자 공유 폴더 설정 점검':'공유폴더 노출',
  'USB 자동 실행 설정 점검':'USB 자동실행',
  '미사용 ActiveX 프로그램 점검':'ActiveX 취약',
};


// ============================================================
// 기관 순서 및 그룹 매핑
// ============================================================
const DEPT_ORDER = [
  '대표이사','윤리감사','전략경영실',
  '부천시여성회관','부천여성청소년센터',
  '부천시청소년센터','산울림청소년센터','소사청소년센터',
  '청소년상담복지센터','부천시청소년상담복지센터',
  '부천시건강가정지원센터','고리울청소년센터','부천시일·쉼지원센터',
];

function getDeptGroup(dept){
  // 직접 일치
  if(DEPT_ORDER.includes(dept)) return dept;
  // 키워드 기반 그룹핑
  if(/전략|경영지원/.test(dept))           return '전략경영실';
  if(/여성회관/.test(dept))                return '부천시여성회관';
  if(/여성청소년|문화의집|카페무지개|방과후아카데미\(여/.test(dept)) return '부천여성청소년센터';
  if(/참여와락|문화와락|부천시청소년센터/.test(dept))  return '부천시청소년센터';
  if(/산울림/.test(dept))                  return '산울림청소년센터';
  if(/소사/.test(dept))                    return '소사청소년센터';
  if(/상담|꿈드림/.test(dept))             return '청소년상담복지센터';
  if(/건강가정|가족사업|아이돌봄/.test(dept)) return '부천시건강가정지원센터';
  if(/고리울/.test(dept))                  return '고리울청소년센터';
  if(/일.쉼|일쉼/.test(dept))             return '부천시일·쉼지원센터';
  return dept;
}

function deptOrderIdx(groupName){
  const i = DEPT_ORDER.indexOf(groupName);
  return i === -1 ? 999 : i;
}


// ============================================================
// 상세 테이블 검색 / 필터
// ============================================================
function filterDetailTable(){
  const kw=(document.getElementById('detailSearch')?.value||'').toLowerCase();
  const filter=document.getElementById('detailFilter')?.value||'';
  const rows=document.getElementById('finalBody')?.querySelectorAll('tr');
  if(!rows) return;
  let shown=0;
  rows.forEach(tr=>{
    const cells=[...tr.querySelectorAll('td')].map(td=>td.textContent.toLowerCase());
    const text=cells.join(' ');
    const kwOk=!kw||text.includes(kw);
    let filterOk=true;
    if(filter==='vuln'){
      const sc=parseInt(cells[4]);
      filterOk=!isNaN(sc)&&sc>0&&sc<100;
    } else if(filter==='unc'){
      filterOk=cells[5]?.includes('미점검');
    } else if(filter==='safe'){
      filterOk=parseInt(cells[4])===100;
    }
    const visible=kwOk&&filterOk;
    tr.style.display=visible?'':'none';
    if(visible) shown++;
  });
  const cnt=document.getElementById('detailCount');
  if(cnt) cnt.textContent=kw||filter?shown+'건 표시':'';
}

function buildDeptSummary(rows){
  const map={};
  for(const r of rows){
    const d=getDeptGroup(r.dept);
    if(!map[d]) map[d]={dept:d,total:0,safe:0,vuln:0,unc:0};
    map[d].total++;
    const sc=parseInt(r.score);
    if(r.notes==='미점검'||r.notes==='미점검(겸직)') map[d].unc++;
    else if(sc===100) map[d].safe++;
    else if(sc>0&&sc<100) map[d].vuln++;
    else map[d].unc++;
  }
  return Object.values(map);
}

function buildVulnAnalysis(rows){
  const cnt={};
  for(const r of rows){
    if(!r.row||r.isSameAs) continue;  // 겸직·미점검 제외
    for(const cc of CHECK_COLS){
      if((r.row[cc.key]||'')==='취약'){
        cnt[cc.short]=(cnt[cc.short]||0)+1;
      }
    }
  }
  return Object.entries(cnt).sort((a,b)=>b[1]-a[1]);
}

function switchTab(tab){
  document.getElementById('pane-dash').classList.toggle('hidden', tab!=='dash');
  document.getElementById('pane-detail').classList.toggle('hidden', tab!=='detail');
  document.getElementById('tabDash').classList.toggle('active', tab==='dash');
  document.getElementById('tabDetail').classList.toggle('active', tab!=='dash');
  // 인쇄용 탭 추적
  document.body.classList.toggle('print-dash', tab==='dash');
  document.body.classList.toggle('print-detail', tab==='detail');
  // 대시보드 저장 버튼: 대시보드 탭일 때만 표시
  const saveBtn=document.getElementById('saveDrop');
  if(saveBtn) saveBtn.style.display=tab==='dash'?'':'none';
}

function renderDashboard(){
  const rows=buildFinalRows();
  const total=rows.length;
  const safe=rows.filter(r=>parseInt(r.score)===100).length;
  const vuln=rows.filter(r=>{const n=parseInt(r.score);return !isNaN(n)&&n>0&&n<100;}).length;
  const unc=rows.filter(r=>r.notes==='미점검'||r.notes==='미점검(겸직)').length;
  const checked=total-unc;
  const rate=total?Math.round(checked/total*100):0;

  // 범례 업데이트
  const legend=document.getElementById('dashLegend');
  if(legend) legend.innerHTML=`
    <span style="display:inline-flex;align-items:center;gap:4px;font-size:11px;color:var(--muted)">
      <span style="width:10px;height:10px;border-radius:2px;background:var(--g);display:inline-block"></span>안전
      <span style="width:10px;height:10px;border-radius:2px;background:var(--orange);display:inline-block;margin-left:8px"></span>취약
      <span style="width:10px;height:10px;border-radius:2px;background:#D1D5DB;display:inline-block;margin-left:8px"></span>미점검
    </span>
  `;
  // 전체 요약 카드 (div가 없어도 오류 없음)
  const smEl=document.getElementById('dashSummary');
  if(smEl) smEl.innerHTML=`
    <div class="dash-stat"><div class="dash-stat-n">${total}</div><div class="dash-stat-l">총 인원</div></div>
    <div class="dash-stat" style="border-color:#D1FAE5"><div class="dash-stat-n safe-n">${safe}</div><div class="dash-stat-l">안전 (100점)</div></div>
    <div class="dash-stat" style="border-color:#FED7AA"><div class="dash-stat-n vuln-n">${vuln}</div><div class="dash-stat-l">취약 (1~99점)</div></div>
    <div class="dash-stat" style="border-color:#E5E7EB"><div class="dash-stat-n unc-n">${unc}</div><div class="dash-stat-l">미점검</div></div>
    <div class="dash-stat" style="border-color:${rate>=80?'#D1FAE5':rate>=60?'#FED7AA':'#FEE2E2'}">
      <div class="dash-stat-n" style="color:${rate>=80?'var(--g)':rate>=60?'var(--orange)':'var(--red)'}">${rate}%</div>
      <div class="dash-stat-l">점검률</div>
    </div>
  `;

  try{renderDeptTable();}catch(e){console.error('deptTable:',e);}
  try{renderVulnAnalysis(rows);}catch(e){console.error('vulnAnalysis:',e);}
}

function renderDeptTable(){
  try{
  const rows=buildFinalRows();
  const depts=buildDeptSummary(rows);
  const sortBy=document.getElementById('deptSort')?.value||'order';

  depts.sort((a,b)=>{
    if(sortBy==='order') return deptOrderIdx(a.dept)-deptOrderIdx(b.dept);
    if(sortBy==='rate'){
      const ra=(a.total-a.unc)/a.total, rb=(b.total-b.unc)/b.total;
      return ra-rb || deptOrderIdx(a.dept)-deptOrderIdx(b.dept);
    }
    if(sortBy==='total') return b.total-a.total || deptOrderIdx(a.dept)-deptOrderIdx(b.dept);
    return b.vuln-a.vuln || b.unc-a.unc || deptOrderIdx(a.dept)-deptOrderIdx(b.dept);
  });

  const tb=document.getElementById('deptBody');
  if(!tb) return;
  tb.innerHTML='';
  depts.forEach(d=>{
    const checked=d.safe+d.vuln;
    const rate=d.total?Math.round(checked/d.total*100):0;
    const sp=d.total?Math.round(d.safe/d.total*100):0;
    const vp=d.total?Math.round(d.vuln/d.total*100):0;
    const up=100-sp-vp;
    const rateColor=rate===100?'var(--g)':rate>=80?'#16A34A':rate>=60?'var(--orange)':'var(--red)';
    const tr=document.createElement('tr');
    tr.innerHTML=`
      <td style="font-weight:600">${d.dept}</td>
      <td style="text-align:center">${d.total}</td>
      <td style="text-align:center" class="safe-n">${d.safe}</td>
      <td style="text-align:center" class="${d.vuln?'vuln-n':'unc-n'}">${d.vuln}</td>
      <td style="text-align:center" class="${d.unc?'unc-n':''}">${d.unc}</td>
      <td style="text-align:center;font-weight:700;color:${rateColor}">${rate}%</td>
      <td>
        <div class="dept-bar-wrap">
          <div class="dept-bar-safe" style="width:${sp}%"></div>
          <div class="dept-bar-vuln" style="width:${vp}%"></div>
          <div class="dept-bar-unc" style="width:${up}%"></div>
        </div>
      </td>
    `;
    if(d.vuln>0) tr.classList.add('has-vuln');
    else if(!d.unc&&!d.vuln) tr.classList.add('all-safe');
    tb.appendChild(tr);
  });
  // 합계 행
  const totals=depts.reduce((a,d)=>({total:a.total+d.total,safe:a.safe+d.safe,vuln:a.vuln+d.vuln,unc:a.unc+d.unc}),{total:0,safe:0,vuln:0,unc:0});
  const tRate=totals.total?Math.round((totals.safe+totals.vuln)/totals.total*100):0;
  const tsp=totals.total?Math.round(totals.safe/totals.total*100):0;
  const tvp=totals.total?Math.round(totals.vuln/totals.total*100):0;
  const tup=100-tsp-tvp;
  const tfooter=document.createElement('tr');
  tfooter.className='dept-total-row';
  tfooter.innerHTML=`
    <td>합계</td>
    <td style="text-align:center">${totals.total}</td>
    <td style="text-align:center;color:var(--g)">${totals.safe}</td>
    <td style="text-align:center;color:var(--orange)">${totals.vuln}</td>
    <td style="text-align:center;color:var(--muted)">${totals.unc}</td>
    <td style="text-align:center;color:${tRate>=80?'var(--g)':'var(--orange)'}">${tRate}%</td>
    <td><div class="dept-bar-wrap"><div class="dept-bar-safe" style="width:${tsp}%"></div><div class="dept-bar-vuln" style="width:${tvp}%"></div><div class="dept-bar-unc" style="width:${tup}%"></div></div></td>
  `;
  tb.appendChild(tfooter);
  }catch(e){console.error('renderDeptTable오류:',e);}
}

function renderVulnAnalysis(rows){
  const items=buildVulnAnalysis(rows);
  const el=document.getElementById('vulnAnalysis');
  if(!el) return;
  // 점검 완료된 기기 수 (미점검 제외)
  const checked=rows.filter(r=>r.row&&!r.isSameAs).length;
  if(!items.length){
    el.innerHTML=`<div style="padding:16px 0;text-align:center;color:var(--g);font-size:13px">
      ✅ 모든 기기가 전 항목 이상없음 (점검 완료 ${checked}대)
    </div>`;
    return;
  }
  const max=items[0][1];
  el.innerHTML=`
    <div style="font-size:11px;color:var(--muted);margin-bottom:10px">점검 완료 기기 <b>${checked}대</b> 기준</div>
    `+items.map(([label,cnt])=>{
    const pct=checked?Math.round(cnt/checked*100):0;
    return `
    <div class="vuln-item">
      <span class="vuln-label">${label}</span>
      <div class="vuln-bar-wrap">
        <div class="vuln-bar-fill" style="width:${Math.round(cnt/max*100)}%"></div>
      </div>
      <span class="vuln-count">${cnt}건</span>
      <span style="font-size:10px;color:var(--muted);min-width:32px">${pct}%</span>
    </div>`;
  }).join('');
}

// ============================================================
// 대시보드 캡처·저장·인쇄
// ============================================================

// 공통 캡처 함수
async function captureDashboard(){
  const el=document.getElementById('pngCaptureArea');
  if(!el) throw new Error('대시보드가 없습니다. 3단계로 이동 후 시도하세요.');
  if(typeof html2canvas==='undefined') throw new Error('html2canvas 로드 중입니다. 잠시 후 다시 시도하세요.');
  const hdr=document.getElementById('pngHeader');
  const sub=document.getElementById('pngHeaderSub');
  const mv=getReportMonth();
  if(sub) sub.textContent='부천여성청소년재단  |  '+(mv?mv+' 기준  |  ':'')+'생성: '+new Date().toLocaleString('ko-KR');
  if(hdr) hdr.style.display='block';
  await new Promise(r=>setTimeout(r,150));
  const canvas=await html2canvas(el,{scale:2,useCORS:true,backgroundColor:'#EFF5F1',
    onclone:(clonedDoc)=>{
      // select 요소를 span으로 교체 (html2canvas 렌더링 문제 방지)
      clonedDoc.querySelectorAll('select').forEach(sel=>{
        const span=clonedDoc.createElement('span');
        span.textContent=sel.options[sel.selectedIndex]?.text||sel.value;
        span.style.cssText='font-size:11px;color:#1C2B24;font-family:Malgun Gothic,sans-serif;'+
          'padding:4px 8px;border:1px solid #D4E0D9;border-radius:6px;display:inline-block';
        sel.parentNode.replaceChild(span,sel);
      });
    }
  });
  if(hdr) hdr.style.display='none';
  return canvas;
}

// PNG 저장
async function exportDashPNG(){
  const btn=document.getElementById('pngBtn');
  const orig=btn?btn.textContent:'';
  if(btn){btn.textContent='저장 중...';btn.disabled=true;}
  try{
    const canvas=await captureDashboard();
    const link=document.createElement('a');
    const mv=getReportMonth();
    link.download=(mv?mv+'_':'')+'보안점검_대시보드.png';
    link.href=canvas.toDataURL('image/png');
    link.click();
  }catch(e){alert('PNG 저장 실패: '+e.message);}
  if(btn){btn.textContent=orig;btn.disabled=false;}
}

// PDF: 브라우저 인쇄 → PDF로 저장
function printForPDF(){
  // 대시보드 탭이 활성화되도록
  switchTab('dash');
  const sub=document.getElementById('pngHeaderSub');
  const mv=getReportMonth()
  if(sub) sub.textContent='부천여성청소년재단  |  '+(mv?mv+' 기준  |  ':'')+' 생성: '+new Date().toLocaleString('ko-KR');
  window.print();
}

// 드롭다운 토글
function toggleSaveDrop(e){
  e.stopPropagation();
  document.getElementById('saveDrop').classList.toggle('open');
}
function closeSaveDrop(){
  const el=document.getElementById('saveDrop');
  if(el) el.classList.remove('open');
}
document.addEventListener('click',()=>closeSaveDrop());

// 인쇄 (활성 탭 자동 감지)
function printPage(){
  const sub=document.getElementById('pngHeaderSub');
  const mv=getReportMonth();
  if(sub) sub.textContent='부천여성청소년재단  |  '+(mv?mv+' 기준  |  ':'')+'생성: '+new Date().toLocaleString('ko-KR');
  window.print();
}

// ============================================================
// 부서별 보고서 ZIP 생성
// ============================================================

function showDeptPreview(){
  renderDeptPreview();
  document.getElementById('deptPreviewModal').classList.remove('hidden');
}
function closeDeptPreview(){
  document.getElementById('deptPreviewModal').classList.add('hidden');
}

function _buildDeptGroups(){
  const rows=buildFinalRows();
  const map={};
  for(const r of rows){
    const g=getDeptGroup(r.dept);
    if(!map[g]) map[g]=[];
    map[g].push(r);
  }
  // DEPT_ORDER 순으로 정렬
  return Object.entries(map).sort((a,b)=>deptOrderIdx(a[0])-deptOrderIdx(b[0]));
}

function renderDeptPreview(){
  const groups=_buildDeptGroups();
  const onlyIssues=document.getElementById('onlyIssues')?.checked||false;
  const listEl=document.getElementById('deptPreviewList');
  const cntEl=document.getElementById('deptFileCount');
  if(!listEl) return;

  listEl.innerHTML='';
  let included=0;

  groups.forEach(([dept,deptRows])=>{
    const safe=deptRows.filter(r=>parseInt(r.score)===100).length;
    const vuln=deptRows.filter(r=>{const n=parseInt(r.score);return !isNaN(n)&&n>0&&n<100;}).length;
    const unc=deptRows.filter(r=>r.notes==='미점검'||r.notes==='미점검(겸직)').length;
    const hasIssues=vuln>0||unc>0;
    const willInclude=!onlyIssues||hasIssues;
    if(willInclude) included++;

    const statusBadge=hasIssues
      ?(vuln>0?`<span class="dept-badge badge-issue">취약 ${vuln}건</span>`:`<span class="dept-badge badge-warn">미점검</span>`)
      :`<span class="dept-badge badge-ok">이상없음</span>`;

    const div=document.createElement('div');
    div.className='dept-preview-row'+(willInclude?'':' excluded');
    div.innerHTML=`
      <span style="flex:1;font-size:13px;font-weight:${hasIssues?600:400}">${dept}</span>
      <div class="dept-preview-stats">
        <span style="min-width:40px;text-align:center;font-weight:600">${deptRows.length}</span>
        <span style="min-width:40px;text-align:center;color:var(--g);font-weight:600">${safe}</span>
        <span style="min-width:40px;text-align:center;color:${vuln?'var(--orange)':'var(--muted)'};font-weight:${vuln?700:400}">${vuln}</span>
        <span style="min-width:40px;text-align:center;color:var(--muted)">${unc}</span>
      </div>
      <div style="min-width:60px;text-align:right;margin-left:8px">${statusBadge}</div>
    `;
    listEl.appendChild(div);
  });

  if(cntEl) cntEl.textContent=`📄 ${included}개 파일 생성 예정`;
  const btn=document.getElementById('deptGenerateBtn');
  if(btn) btn.disabled=included===0;
}

async function doExportDeptZip(){
  const btn=document.getElementById('deptGenerateBtn');
  const orig=btn?btn.textContent:'';
  if(btn){btn.textContent='생성 중...';btn.disabled=true;}

  try{
    if(typeof JSZip==='undefined') throw new Error('JSZip 로드 중입니다. 잠시 후 다시 시도하세요.');

    const mv=getReportMonth();
    const onlyIssues=document.getElementById('onlyIssues')?.checked||false;
    const groups=_buildDeptGroups();

    // 파일명 접두사: 26년 06월 PC점검결과_
    let prefix='PC점검결과_';
    if(mv){
      const [y,m]=mv.split('-');
      prefix=y.slice(2)+'년 '+m.padStart(2,'0')+'월 PC점검결과_';
    }

    const zip=new JSZip();
    let count=0;

    for(const [dept,deptRows] of groups){
      const vuln=deptRows.filter(r=>{const n=parseInt(r.score);return !isNaN(n)&&n>0&&n<100;}).length;
      const unc=deptRows.filter(r=>r.notes==='미점검'||r.notes==='미점검(겸직)').length;
      if(onlyIssues&&!vuln&&!unc) continue;

      const wb=XLSX.utils.book_new();

      // ① 점검결과 시트 (IP 제외)
      const ws1Data=[['부서명','이름(컴퓨터이름)','보안점수','비고(특이사항)']];
      deptRows.forEach(r=>{
        const nc=r.compName&&r.compName!==r.name?r.name+'('+r.compName+')':r.name;
        ws1Data.push([r.dept,nc,r.notes==='미점검'?'미점검':(r.score||''),r.notes]);
      });
      const ws1=XLSX.utils.aoa_to_sheet(ws1Data);
      ws1['!cols']=[{wch:28},{wch:22},{wch:10},{wch:48}];
      XLSX.utils.book_append_sheet(wb,ws1,'점검결과');

      // ② 요약 시트
      const safe=deptRows.filter(r=>parseInt(r.score)===100).length;
      const rate=deptRows.length?Math.round((safe+vuln)/deptRows.length*100):0;
      const ws2=XLSX.utils.aoa_to_sheet([
        ['기관명',dept],['기준연월',mv||''],['총인원',deptRows.length],
        ['안전(100점)',safe],['취약(<100점)',vuln],['미점검',unc],['점검률',rate+'%'],
      ]);
      ws2['!cols']=[{wch:14},{wch:24}];
      XLSX.utils.book_append_sheet(wb,ws2,'요약');

      // ③ 조치필요 시트 (취약·미점검 있을 때만)
      const issueRows=deptRows.filter(r=>{
        const sc=parseInt(r.score);
        return r.notes==='미점검'||r.notes==='미점검(겸직)'||(!isNaN(sc)&&sc>0&&sc<100);
      });
      if(issueRows.length>0){
        const ws3Data=[['부서명','이름(컴퓨터이름)','보안점수','조치 필요 항목']];
        issueRows.forEach(r=>{
          const nc=r.compName&&r.compName!==r.name?r.name+'('+r.compName+')':r.name;
          ws3Data.push([r.dept,nc,r.notes==='미점검'?'미점검':(r.score||''),r.notes]);
        });
        const ws3=XLSX.utils.aoa_to_sheet(ws3Data);
        ws3['!cols']=[{wch:28},{wch:22},{wch:10},{wch:48}];
        XLSX.utils.book_append_sheet(wb,ws3,'조치필요');
      }

      // ④ 취약항목분석 시트 (해당 부서 기준)
      const deptVuln=buildVulnAnalysis(deptRows);
      if(deptVuln.length>0){
        const checkedCnt=deptRows.filter(r=>r.row&&!r.isSameAs).length;
        const vd=[['취약 항목','건수','비율']];
        deptVuln.forEach(([label,cnt])=>{
          vd.push([label,cnt,checkedCnt?Math.round(cnt/checkedCnt*100)+'%':'-%']);
        });
        const ws4=XLSX.utils.aoa_to_sheet(vd);
        ws4['!cols']=[{wch:28},{wch:8},{wch:8}];
        XLSX.utils.book_append_sheet(wb,ws4,'취약항목분석');
      }

      // ZIP에 추가
      const xlsxArr=XLSX.write(wb,{type:'array',bookType:'xlsx'});
      zip.file(prefix+dept+'.xlsx',xlsxArr);
      count++;
    }

    if(count===0){alert('생성할 파일이 없습니다.');return;}

    const zipBlob=await zip.generateAsync({type:'blob',compression:'DEFLATE',compressionOptions:{level:6}});
    const link=document.createElement('a');
    const zipName=(mv?mv.replace('-','_')+'_':'')+'부서별_PC점검결과.zip';
    link.href=URL.createObjectURL(zipBlob);
    link.download=zipName;
    link.click();
    URL.revokeObjectURL(link.href);

    closeDeptPreview();
    alert('✅ '+count+'개 부서 파일 ZIP 생성 완료');
  }catch(e){
    alert('ZIP 생성 실패: '+e.message);
  }

  if(btn){btn.textContent=orig;btn.disabled=false;}
}


// ============================================================
// 업데이트 내역 모달
// ============================================================
function openChangelog(){
  document.getElementById('changelogModal').classList.remove('hidden');
}
function closeChangelog(){
  document.getElementById('changelogModal').classList.add('hidden');
}
function switchClTab(n){
  [1,2].forEach(i=>{
    document.getElementById('clTab'+i).classList.toggle('active',i===n);
    document.getElementById('clPane'+i).classList.toggle('active',i===n);
  });
}

// ============================================================
// 도움말 모달
// ============================================================
function openHelp(){ document.getElementById('helpModal').classList.remove('hidden'); }
function closeHelp(){ document.getElementById('helpModal').classList.add('hidden'); }

// ============================================================
// 다크모드
// ============================================================
function toggleDark(){
  const isDark=document.body.classList.toggle('dark');
  localStorage.setItem('bwyf_dark', isDark?'1':'0');
  const btn=document.getElementById('darkBtn');
  if(btn) btn.textContent=isDark?'☀️ 라이트모드':'🌙 다크모드';
}
function initDark(){
  if(localStorage.getItem('bwyf_dark')==='1'){
    document.body.classList.add('dark');
    const btn=document.getElementById('darkBtn');
    if(btn) btn.textContent='☀️ 라이트모드';
  }
}
