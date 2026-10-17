import { useEffect, useMemo, useRef } from 'react';
import { ArrowDown, Braces, Database, Layers3, ListOrdered, ArrowRight, Network } from 'lucide-react';
import type { AlgorithmStep, VisualKind, Atom, VisualNode } from '../types';
function tone(s:AlgorithmStep,i:number){return s.success.includes(i)?'success':s.rejected?.includes(i)?'rejected':s.highlights.includes(i)?'active':s.comparisons?.includes(i)?'comparing':s.visited.includes(i)?'visited':'';}
export function ArrayVisualizer({step:s,values=s.values,dp=false}:{step:AlgorithmStep;values?:(Atom|null)[];dp?:boolean}){
 const gap=66,w=Math.max(620,values.length*gap+50),start=(w-values.length*gap)/2;
 return <div className="array-scroll"><svg className="array-svg" role="img" aria-label={dp?'动态规划状态数组':'数组与实时指针'} viewBox={`0 0 ${w} 164`} style={{minWidth:Math.min(w,values.length*48+40)}}>
 {s.pointers.left!==undefined&&s.pointers.right!==undefined&&s.pointers.left>=0&&s.pointers.left<values.length&&s.pointers.right>=s.pointers.left&&<rect className="window-band" x={start+s.pointers.left*gap-7} y="27" width={Math.max(0,(Math.min(s.pointers.right,values.length-1)-s.pointers.left+1)*gap-4)} height="77" rx="12"/>}
 {values.map((v,i)=><g key={s.identities?.length===values.length?s.identities[i]:i} className={`array-cell ${tone(s,i)}`} style={{transform:`translate(${start+i*gap}px,40px)`}}><rect width="54" height="54" rx="9"/><text className="cell-value" style={{fontSize:String(v??'').length>6?11:String(v??'').length>4?13:undefined}} x="27" y="33" textAnchor="middle">{v===null?'—':String(v)}</text><text className="index-label" x="27" y="77" textAnchor="middle">{dp?`dp[${i}]`:i}</text></g>)}
 {Object.entries(s.pointers).map(([label,i],j)=>i>=0&&i<=values.length?<g key={label} className={`svg-pointer pointer-${j%3}`} style={{transform:`translate(${start+i*gap+27}px,${j%2?146:16}px)`}}><path d={j%2?'M0 -18 L0 -7 M-4 -14 L0 -18 L4 -14':'M0 0 L0 12 M-4 8 L0 12 L4 8'}/><text y={j%2?0:-5} textAnchor="middle">{label}</text></g>:null)}
 {!values.length&&<text className="index-label" x={w/2} y="80" textAnchor="middle">空数组 ∅</text>}
 </svg></div>;
}
export function HashMapVisualizer({step:s,window=false}:{step:AlgorithmStep;window?:boolean}){
 const complement=s.variables.complement;
 return <div className="hash-panel"><div className="visual-label"><Database size={14}/><span>{window?'当前窗口字符集合':'哈希表 seen'}</span><span className="mono muted">{window?'set':'value → index'}</span></div><div className="hash-items">{s.map.length?s.map.map(([k,v])=><div key={k} className={`hash-entry ${k===complement?'matched':''}`}><span>{String(k)}</span>{!window&&<><ArrowRight size={13}/><b>{String(v)}</b></>}</div>):<span className="empty-hash"><Braces size={20}/> {s.phase==='ready'?'等待存入第一个元素':'当前为空'}</span>}</div><div className="hash-caption">{window?'集合始终与已加入窗口的字符保持一致':'每次先查找补数，再记录当前数字与下标'}</div></div>;
}
export function LinkedListVisualizer({step:s}:{step:AlgorithmStep}){
 const w=Math.max(620,s.values.length*88+95),start=45;
 return <div className="array-scroll"><svg className="list-svg" viewBox={`0 0 ${w} 215`} style={{minWidth:Math.min(w,s.values.length*65+70)}} role="img" aria-label="链表连接与 prev curr nxt 指针"><defs><marker id="list-arrow" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto-start-reverse"><path d="M0 0L7 3.5L0 7" fill="currentColor"/></marker></defs>
 {s.edges.map(([a,b])=><path key={`${a}-${b}`} className={`list-edge ${a>b?'reversed':''}`} d={a<b?`M${start+a*88+48} 86 Q${start+a*88+68} 65 ${start+b*88-5} 86`:`M${start+a*88} 105 Q${start+(a+b)*44+24} 150 ${start+b*88+48} 105`} markerEnd="url(#list-arrow)"/>)}
 {s.values.map((v,i)=><g key={i} className={`tree-node ${tone(s,i)}`} transform={`translate(${start+i*88},65)`}><rect width="48" height="48" rx="12"/><text x="24" y="30" textAnchor="middle">{v}</text>{!s.edges.some(([a])=>a===i)&&<text className="index-label" x="24" y="80" textAnchor="middle">↓ null</text>}</g>)}
 {Object.entries(s.pointers).map(([name,i],j)=><g key={name} className={`svg-pointer pointer-${j}`} style={{transform:`translate(${i<0?30:start+i*88+24}px,${j===2?190:35-j*17}px)`}}><text textAnchor="middle">{name}{i<0?' = null':''}</text></g>)}
 {!s.values.length&&<text className="index-label" x={w/2} y="100" textAnchor="middle">head = null</text>}
 </svg></div>;
}
function layoutSearch(nodes:VisualNode[]){let leaf=0;const children=new Map<number,VisualNode[]>();nodes.forEach(n=>{if(n.parent!==undefined)children.set(n.parent,[...(children.get(n.parent)||[]),n]);});const positions=new Map<number,{x:number;y:number}>();function visit(n:VisualNode,depth:number):number{const cs=children.get(n.id)||[];const x=cs.length?cs.reduce((sum,c)=>sum+visit(c,depth+1),0)/cs.length:40+leaf++*57;positions.set(n.id,{x,y:35+depth*65});return x;}if(nodes[0])visit(nodes[0],0);const width=Math.max(620,leaf*57+80),offset=width/2-(40+(leaf-1)*57/2);for(const p of positions.values())p.x+=offset;return{positions,width};}
export function BinaryTreeVisualizer({step:s,search=false}:{step:AlgorithmStep;search?:boolean}){
 const box=useRef<HTMLDivElement>(null);const layout=useMemo(()=>search?layoutSearch(s.nodes):{positions:new Map(s.nodes.map(n=>[n.id,{x:n.x,y:n.y}])),width:700},[s.nodes,search]);const height=Math.max(180,...s.nodes.map(n=>(layout.positions.get(n.id)?.y||0)+40));
 useEffect(()=>{if(!search)return;const active=s.highlights[0],p=layout.positions.get(active);if(p&&box.current&&layout.width>box.current.clientWidth){box.current.scrollTo({left:p.x-box.current.clientWidth/2,behavior:'smooth'});}},[s.highlights,search,layout]);
 return <div className="tree-scroll" ref={box}><svg className="tree-svg" role="img" aria-label={search?'逐步展开的回溯搜索树':'二叉树访问状态'} viewBox={`0 0 ${layout.width} ${height}`} style={{minWidth:search?layout.width:400}}>
 {s.edges.map(([a,b])=>{const p=layout.positions.get(a),q=layout.positions.get(b);return p&&q?<path key={`${a}-${b}`} className={`tree-edge ${s.highlights.includes(b)?'active':''}`} d={`M${p.x} ${p.y+16} L${q.x} ${q.y-16}`}/>:null;})}
 {s.nodes.map(n=>{const p=layout.positions.get(n.id)!;return <g key={n.id} className={`tree-node ${tone(s,n.id)}`} style={{transform:`translate(${p.x}px,${p.y}px)`}}><circle r={search?17:21}/><text y="5" textAnchor="middle">{n.value}</text></g>;})}
 {!s.nodes.length&&<text className="index-label" x="350" y="70" textAnchor="middle">空树 ∅</text>}
 </svg></div>;
}
export function QueueVisualizer({values,stack=false}:{values:Atom[];stack?:boolean}){return <div className={`queue-panel ${stack?'stack-panel':''}`}><div className="visual-label">{stack?<Layers3 size={14}/>:<ListOrdered size={14}/>}<span>{stack?'辅助栈 stack':'待访问队列 queue'}</span><span className="mono muted">{values.length} items</span></div><div className="queue-content">{!stack&&<span className="queue-end">队头 →</span>}<div className="queue-items">{values.length?values.map((v,i)=><span key={`${i}-${v}`}>{v}</span>):<em>∅</em>}</div><span className="queue-end">{stack?'← 栈顶':'← 队尾'}</span></div></div>;}
export function DPTableVisualizer({step:s}:{step:AlgorithmStep}){return <><div className="dp-formula">{s.variables.n!==undefined?<><span>dp[i]</span> = <b>dp[i − 1]</b> + <b>dp[i − 2]</b></>:<><span>dp[i]</span> · 从已经求出的状态中寻找最优解</>}</div><ArrayVisualizer step={s} values={s.dp} dp/>{s.values.length>0&&<div className="source-array"><span>原始输入 nums</span><code>[{s.values.join(', ')}]</code></div>}</>;}
export function GridVisualizer({step:s}:{step:AlgorithmStep}){const cols=s.grid[0]?.length||1;return <div className="grid-wrap"><svg viewBox={`0 0 ${cols*44+40} ${s.grid.length*44+35}`} role="img" aria-label="岛屿访问网格">{s.grid.flatMap((row,r)=>row.map((v,c)=><g key={`${r}-${c}`} className={`grid-cell ${v===2?'visited':v===1?'land':'water'} ${tone(s,r*cols+c)}`} transform={`translate(${c*44+20},${r*44+12})`}><rect width="37" height="37" rx="6"/><text x="18.5" y="24" textAnchor="middle">{v===2?'✓':v===1?'1':'·'}</text></g>))}</svg><div className="grid-legend"><span>0 水域</span><span>1 未访问陆地</span><span>✓ 已访问陆地</span></div></div>;}
export default function Visualizer({step,kind}:{step:AlgorithmStep;kind:VisualKind}){return <div className={`visualizer visual-${kind}`}>
 <div className="canvas-heading"><span><span className="live-dot"/> {kind==='tree'?'二叉树 root':kind==='list'?'单向链表 head':kind==='backtrack'?'递归决策树':kind==='grid'?'二维网格 grid':kind==='dp'?'状态数组 dp':'输入数据 '+(kind==='window'||kind==='stack'?'s':'nums')}</span><span className="mono">{step.variables.target!==undefined?`target = ${step.variables.target}`:kind==='backtrack'?`depth = ${step.path.length}`:'LIVE EXECUTION'}</span></div>
 {(kind==='hash'||kind==='window'||kind==='array'||kind==='stack')&&<ArrayVisualizer step={step}/>}
 {kind==='list'&&<LinkedListVisualizer step={step}/>}
 {kind==='tree'&&<BinaryTreeVisualizer step={step}/>}
 {kind==='dp'&&<DPTableVisualizer step={step}/>}
 {kind==='backtrack'&&<><div className="path-display"><Network size={14}/><span>当前路径</span><code>[{step.path.join(', ')}]</code></div><BinaryTreeVisualizer step={step} search/></>}
 {kind==='grid'&&<GridVisualizer step={step}/>}
 {(kind==='hash'||kind==='window')&&<HashMapVisualizer step={step} window={kind==='window'}/>}
 {(kind==='tree'||kind==='grid'||kind==='stack')&&<QueueVisualizer values={step.queue} stack={kind==='stack'}/>}
 {kind==='array'&&<div className="array-explainer"><ArrowDown size={18}/><span>跟随指针，观察每一次比较与状态更新</span></div>}
 {kind==='backtrack'&&<div className="results-preview"><span>已找到 {step.results.length} 个排列</span><code>{step.results.slice(-5).map(r=>`[${r.join(',')}]`).join('  ')}{step.results.length>5?' …':''}</code></div>}
 {step.phase==='done'&&<div className="result-banner"><span>✓ 执行完成</span><code>return {JSON.stringify(step.result)}</code></div>}
 </div>;}
