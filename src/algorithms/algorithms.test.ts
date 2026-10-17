import { describe, expect, test } from 'vitest';
import { algorithms, execute, supportedIds } from './index';
import { problems, categories } from '../data/problems';
import { validateProgress } from '../hooks/useProgress';
const result=(id:number,input:unknown)=>algorithms[id].run(input).at(-1)!.result;
const defaults:Record<number,unknown>={1:[0,1],206:[5,4,3,2,1],102:[[3],[9,20],[15,7]],3:3,70:13,46:[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]],283:[1,3,12,0,0],35:1,20:true,121:5,53:6,200:3,198:12,300:4};
describe('官方学习计划完整性',()=>{
 test('100 个唯一题号，17 个专题，分类数量正确',()=>{expect(problems).toHaveLength(100);expect(new Set(problems.map(p=>p.id)).size).toBe(100);expect(categories).toHaveLength(17);expect(categories.map(c=>problems.filter(p=>p.category===c).length)).toEqual([3,4,2,3,5,4,14,15,4,8,6,5,3,4,10,5,5]);});
 test('每个题目具有原题链接、原创概述和难度',()=>{for(const p of problems){expect(p.leetcodeUrl).toBe(`https://leetcode.cn/problems/${p.slug}/`);expect(p.summary.length).toBeGreaterThan(15);expect(['EASY','MEDIUM','HARD']).toContain(p.difficulty);}});
 test('每个动画只映射到题单中的真实题目',()=>{expect(supportedIds).toHaveLength(14);for(const id of supportedIds)expect(problems.some(p=>p.id===id)).toBe(true);});
});
describe('真实轨迹与代码映射',()=>{
 for(const a of Object.values(algorithms)){
  test(`${a.id} 默认输入结果与示例一致，所有步骤可独立回放`,()=>{const input=JSON.parse(a.defaultInput),before=structuredClone(input),steps=execute(a.id,a.defaultInput);expect(input).toEqual(before);expect(steps.at(-1)!.result).toEqual(defaults[a.id]);expect(steps[0].phase).toBe('ready');expect(steps.at(-1)!.phase).toBe('done');expect(a.code.split('\n')[steps.at(-1)!.codeLine-1]).toContain('return');for(const [i,s] of steps.entries()){expect(s.step).toBe(i);expect(s.codeLine).toBeGreaterThanOrEqual(0);expect(s.codeLine).toBeLessThanOrEqual(a.code.split('\n').length);expect(s.description).toBeTruthy();expect(s.explanation).toBeTruthy();}const first=JSON.stringify(steps[0]);steps.at(-1)!.variables.testMutation=true;steps.at(-1)!.values.push('test');expect(JSON.stringify(steps[0])).toBe(first);});
 }
 test('调用算法不修改外部输入',()=>{for(const a of Object.values(algorithms)){const input=JSON.parse(a.defaultInput),before=structuredClone(input);a.run(input);expect(input).toEqual(before);}});
 test('两数之和先查询后插入，命中行对应返回下标',()=>{const steps=algorithms[1].run({nums:[3,3],target:6});const insertion=steps.findIndex(s=>s.codeLine===7);expect(steps.slice(0,insertion).some(s=>s.codeLine===5&&s.variables.found===false)).toBe(true);const final=steps.at(-1)!;expect(final.codeLine).toBe(6);expect(final.success).toEqual([0,1]);expect(final.result).toEqual([0,1]);expect(result(1,{nums:[2],target:4})).toEqual([]);});
 test('链表反转中间与最终连接准确，包括重复值节点身份',()=>{const steps=algorithms[206].run({head:[1,1,2]});expect(steps.find(s=>s.codeLine===6)!.edges).toEqual([[1,2]]);expect(steps.at(-1)!.edges).toEqual([[1,0],[2,1]]);expect(steps.at(-1)!.pointers).toEqual({prev:2,curr:-1,nxt:-1});expect(result(206,{head:[]})).toEqual([]);expect(result(206,{head:[9]})).toEqual([9]);});
 test('二叉树支持紧凑层序、空树、缺失左子树',()=>{expect(result(102,{root:[1,null,2,3]})).toEqual([[1],[2],[3]]);expect(result(102,{root:[]})).toEqual([]);expect(result(102,{root:[null]})).toEqual([]);expect(()=>result(102,{root:[null,1]})).toThrow();expect(()=>result(102,{root:[1,null,null,2]})).toThrow();});
 test('回溯完整保存答案并恢复路径和使用集合',()=>{const steps=algorithms[46].run({nums:[1,2,3,4]});const last=steps.at(-1)!;expect(last.results).toHaveLength(24);expect(new Set(last.results.map(r=>JSON.stringify(r))).size).toBe(24);expect(last.path).toEqual([]);expect(last.variables.used).toEqual([]);expect(result(46,{nums:[]})).toEqual([[]]);});
 test('最大回溯输入仍在步数限制内且完整输出',()=>{const steps=algorithms[46].run({nums:[1,2,3,4,5]});expect(steps.length).toBeLessThan(6000);expect(steps.at(-1)!.results).toHaveLength(120);});
 test('DP 边界和全负数组',()=>{expect(result(70,{n:1})).toBe(1);expect(result(70,{n:2})).toBe(2);expect(result(70,{n:30})).toBe(1346269);expect(result(53,{nums:[-8,-2,-9]})).toBe(-2);expect(result(198,{nums:[]})).toBe(0);expect(result(300,{nums:[]})).toBe(0);});
 test('Unicode、空字符串、重复字符',()=>{expect(result(3,{s:'😀a😀b'})).toBe(3);expect(result(3,{s:''})).toBe(0);expect(result(3,{s:'abba'})).toBe(2);});
 test('栈匹配与空输入',()=>{for(const s of ['','()','([]){}'])expect(result(20,{s})).toBe(true);for(const s of ['(','(]','([)]',']'])expect(result(20,{s})).toBe(false);});
 test('网格只按正交连接且单元格只入队一次',()=>{expect(result(200,{grid:[[1,0],[0,1]]})).toBe(2);expect(result(200,{grid:[[0,0]]})).toBe(0);const s=algorithms[200].run({grid:[[1,1],[1,1]]});expect(s.at(-1)!.result).toBe(1);expect(s.at(-1)!.visited).toHaveLength(4);});
});
let seed=20261017;const rand=(n:number)=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed%n;};
describe('确定性生成输入与独立参考解交叉验证',()=>{
 test('两数之和与暴力结果比较（100 组）',()=>{for(let trial=0;trial<100;trial++){const nums=Array.from({length:rand(10)},()=>rand(17)-8),target=rand(25)-12;let exists=false;for(let i=0;i<nums.length;i++)for(let j=i+1;j<nums.length;j++)if(nums[i]+nums[j]===target)exists=true;const r=result(1,{nums,target}) as number[];if(exists){expect(r).toHaveLength(2);expect(r[0]).not.toBe(r[1]);expect(nums[r[0]]+nums[r[1]]).toBe(target);}else expect(r).toEqual([]);}});
 test('滑动窗口与暴力枚举子串比较（100 组）',()=>{for(let trial=0;trial<100;trial++){const s=Array.from({length:rand(12)},()=>'abcd'[rand(4)]).join('');let best=0;for(let i=0;i<=s.length;i++)for(let j=i;j<=s.length;j++){const x=s.slice(i,j);if(new Set(x).size===x.length)best=Math.max(best,x.length);}expect(result(3,{s})).toBe(best);}});
 test('最大子数组、股票、移动零、二分、打家劫舍和 LIS（50 组）',()=>{for(let trial=0;trial<50;trial++){const nums=Array.from({length:1+rand(8)},()=>rand(12)-4);let best=-Infinity;for(let i=0;i<nums.length;i++)for(let j=i;j<nums.length;j++)best=Math.max(best,nums.slice(i,j+1).reduce((a,b)=>a+b,0));expect(result(53,{nums})).toBe(best);
 const prices=nums.map(Math.abs);let profit=0;for(let i=0;i<prices.length;i++)for(let j=i+1;j<prices.length;j++)profit=Math.max(profit,prices[j]-prices[i]);expect(result(121,{prices})).toBe(profit);expect(result(283,{nums})).toEqual([...nums.filter(Boolean),...nums.filter(v=>v===0)]);
 const sorted=[...new Set(nums)].sort((a,b)=>a-b),target=rand(16)-5;const i=sorted.findIndex(n=>n>=target);expect(result(35,{nums:sorted,target})).toBe(i<0?sorted.length:i);
 let maxCash=0,maxLis=0;for(let mask=0;mask<2**nums.length;mask++){const ids=nums.map((_,i)=>i).filter(i=>mask&(1<<i));if(ids.every((v,i)=>!i||v>ids[i-1]+1))maxCash=Math.max(maxCash,ids.reduce((sum,i)=>sum+prices[i],0));const seq=ids.map(i=>nums[i]);if(seq.every((v,i)=>!i||v>seq[i-1]))maxLis=Math.max(maxLis,seq.length);}expect(result(198,{nums:prices})).toBe(maxCash);expect(result(300,{nums})).toBe(maxLis);
 }});
});
describe('输入安全与进度数据',()=>{
 test('拒绝错误格式、过大输入及违反题目约束的输入',()=>{expect(()=>execute(1,'not json')).toThrow('JSON');expect(()=>execute(1,' '.repeat(8001))).toThrow('输入过长');for(const [id,input] of [[1,{nums:[1.2],target:1}],[1,{nums:[1],target:'9'}],[46,{nums:[1,1]}],[46,{nums:[1,2,3,4,5,6]}],[70,{n:0}],[70,{n:31}],[35,{nums:[2,1],target:1}],[20,{s:'abc'}],[200,{grid:[[1],[1,0]]}] ] as [number,unknown][])expect(()=>algorithms[id].run(input)).toThrow();});
 test('导入进度拒绝未知题号和状态，合法数据保持不变',()=>{expect(validateProgress({'1':'mastered','206':'review'})).toEqual({1:'mastered',206:'review'});expect(()=>validateProgress({'999999':'mastered'})).toThrow();expect(()=>validateProgress({'1':'invalid'})).toThrow();expect(()=>validateProgress({'1':'toString'})).toThrow();expect(()=>validateProgress([])).toThrow();});
});
