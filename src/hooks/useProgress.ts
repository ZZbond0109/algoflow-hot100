import { useEffect, useState } from 'react';
import { problems } from '../data/problems';
import type { StudyStatus } from '../types';
export type Progress = Record<number, StudyStatus>;
export const statuses: Record<StudyStatus,string> = {new:'未学习',learning:'学习中',mastered:'已掌握',review:'需要复习'};
const key='algoflow.progress.v1';
export function validateProgress(value:unknown):Progress{
 if(!value||typeof value!=='object'||Array.isArray(value))throw new Error('进度文件应为 JSON 对象。');
 const result:Progress={};
 for(const [id,status] of Object.entries(value)){
  if(!problems.some(p=>String(p.id)===id)||typeof status!=='string'||!Object.hasOwn(statuses,status))throw new Error(`无效的题号或学习状态：${id}`);
  result[Number(id)]=status as StudyStatus;
 }
 return result;
}
function load(){try{return validateProgress(JSON.parse(localStorage.getItem(key)||'{}'));}catch{return {};}}
export function useProgress(){
 const [progress,setProgress]=useState<Progress>(load);
 const [storageError,setStorageError]=useState('');
 useEffect(()=>{try{localStorage.setItem(key,JSON.stringify(progress));setStorageError('');}catch{setStorageError('浏览器无法保存进度，请导出备份。');}},[progress]);
 const update=(id:number,status:StudyStatus)=>setProgress(old=>({...old,[id]:status}));
 const exportProgress=()=>{const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([JSON.stringify({version:1,exportedAt:new Date().toISOString(),progress},null,2)],{type:'application/json'}));a.download='algoflow-progress.json';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000);};
 const importProgress=async(file:File)=>{if(file.size>100000)throw new Error('文件超过 100 KB。');const data=JSON.parse(await file.text());if(!data||typeof data!=='object'||data.version!==1)throw new Error('不支持此进度文件版本。');setProgress(validateProgress(data.progress));};
 return {progress,update,exportProgress,importProgress,storageError};
}
