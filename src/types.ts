export type Difficulty = 'EASY' | 'MEDIUM' | 'HARD';
export type StudyStatus = 'new' | 'learning' | 'mastered' | 'review';
export interface Problem { id: number; title: string; slug: string; difficulty: Difficulty; category: string; tags: string[]; summary: string; leetcodeUrl: string }
export type Atom = string | number;
export interface VisualNode { id: number; value: Atom; x: number; y: number; parent?: number; }
export interface AlgorithmStep {
  step: number; description: string; explanation: string; codeLine: number;
  values: Atom[]; identities: number[]; rejected: number[]; comparisons: number[]; highlights: number[]; success: number[]; visited: number[];
  pointers: Record<string, number>; variables: Record<string, unknown>;
  map: [Atom, Atom][]; queue: Atom[]; dp: (number | null)[];
  nodes: VisualNode[]; edges: [number, number][]; path: Atom[]; results: Atom[][];
  grid: Atom[][]; result?: unknown; phase: 'ready' | 'running' | 'done';
}
export type VisualKind = 'hash' | 'window' | 'list' | 'tree' | 'dp' | 'backtrack' | 'array' | 'stack' | 'grid';
export interface AlgorithmDefinition {
  id: number; kind: VisualKind; name: string; inputLabel: string; defaultInput: string;
  code: string; time: string; space: string; idea: string; hints: string[]; pitfalls: string[];
  exampleOutput: string; constraints: string;
  run: (input: unknown) => AlgorithmStep[];
}
