import { coreAlgorithms } from './core';
import { extendedAlgorithms } from './extended';
import type { AlgorithmDefinition } from '../types';
export const algorithms: Record<number, AlgorithmDefinition> = Object.fromEntries([...coreAlgorithms,...extendedAlgorithms].map(a=>[a.id,a]));
export const supportedIds = Object.keys(algorithms).map(Number);
export function execute(id:number,text:string){
 if(text.length>8000)throw new Error('输入过长，请控制在 8000 字符以内。');
 let input:unknown;try{input=JSON.parse(text);}catch{throw new Error('JSON 格式有误，请检查双引号、逗号与括号。');}
 if(!algorithms[id])throw new Error('该题动画待实现。');
 return algorithms[id].run(input);
}
