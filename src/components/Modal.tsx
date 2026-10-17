import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import type { ReactNode } from 'react';
export default function Modal({title,onClose,children,wide=false}:{title:string;onClose:()=>void;children:ReactNode;wide?:boolean}){
 const dialog=useRef<HTMLDivElement>(null);
 useEffect(()=>{const previous=document.activeElement as HTMLElement;dialog.current?.focus();const key=(e:KeyboardEvent)=>{if(e.key==='Escape')onClose();if(e.key==='Tab'){const items=dialog.current?.querySelectorAll<HTMLElement>('button, input, select, textarea, a[href]');if(!items?.length)return;const first=items[0],last=items[items.length-1];if(e.shiftKey&&(document.activeElement===first||document.activeElement===dialog.current)){last.focus();e.preventDefault();}else if(!e.shiftKey&&document.activeElement===last){first.focus();e.preventDefault();}}};document.addEventListener('keydown',key);return()=>{document.removeEventListener('keydown',key);previous?.focus();};},[onClose]);
 return <div className="modal-backdrop" onMouseDown={e=>{if(e.target===e.currentTarget)onClose();}}><div ref={dialog} role="dialog" aria-modal="true" aria-label={title} tabIndex={-1} className={`modal ${wide?'wide':''}`}><div className="modal-title"><h2>{title}</h2><button onClick={onClose} className="icon-button" aria-label="关闭弹窗"><X size={19}/></button></div>{children}</div></div>;
}
