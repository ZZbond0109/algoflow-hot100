import type { AlgorithmStep } from '../types';
export function recorder(values: AlgorithmStep['values'] = []) {
  let state: AlgorithmStep = { step: 0, description: '准备就绪', explanation: '点击播放或下一步，从初始状态开始观察算法。', codeLine: 0, values, identities: values.map((_,i)=>i), rejected: [], comparisons: [], highlights: [], success: [], visited: [], pointers: {}, variables: {}, map: [], queue: [], dp: [], nodes: [], edges: [], path: [], results: [], grid: [], phase: 'ready' };
  const steps: AlgorithmStep[] = [];
  function add(codeLine: number, description: string, explanation: string, patch: Partial<AlgorithmStep> = {}) {
    if (steps.length >= 6000) throw new Error('执行步骤超过 6000，请缩小输入规模。');
    state = { ...state, phase: 'running', rejected: [], comparisons: [], highlights: [], success: [], ...patch, codeLine, description, explanation, step: steps.length };
    steps.push(structuredClone(state));
  }
  function ready(patch: Partial<AlgorithmStep> = {}) { add(0, '准备就绪，开始探索', '先观察输入，再一步一步跟随算法执行。每一步都可以回退和重放。', { ...patch, phase: 'ready' }); }
  return { steps, add, ready };
}
export function objectInput(input: unknown): Record<string, unknown> {
  if (!input || typeof input !== 'object' || Array.isArray(input)) throw new Error('请输入 JSON 对象，例如 {"nums":[2,7],"target":9}。');
  return input as Record<string, unknown>;
}
export function integer(value: unknown, label: string, min = -10000, max = 10000): number {
  if (typeof value !== 'number' || !Number.isInteger(value) || value < min || value > max) throw new Error(`${label} 必须是 ${min} 到 ${max} 之间的整数。`);
  return value;
}
export function numbers(value: unknown, label = 'nums', max = 16, minLength = 0): number[] {
  if (!Array.isArray(value) || value.length < minLength || value.length > max) throw new Error(`${label} 必须是长度 ${minLength}–${max} 的整数数组。`);
  return value.map(v => integer(v, label));
}
export function stringInput(value: unknown, label = 's', max = 24): string {
  if (typeof value !== 'string' || Array.from(value).length > max) throw new Error(`${label} 必须是最多 ${max} 个字符的字符串。`);
  return value;
}
