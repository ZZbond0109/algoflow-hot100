import type { AlgorithmDefinition, VisualNode } from '../types';
import { recorder, objectInput, integer, numbers, stringInput } from './trace';
export const twoSum: AlgorithmDefinition = {
 id: 1, kind: 'hash', name: '哈希表 · 一次遍历', inputLabel: '数组与目标值', defaultInput: '{"nums": [2, 7, 11, 15], "target": 9}',
 code: `def two_sum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []`, time: 'O(n)', space: 'O(n)',
 idea: '把问题换个角度：遍历到一个数时，我们只需要知道，它的「另一半」是否已经出现。用哈希表记录数字与下标，每次先查找，再存入，就能避免重复使用同一个元素。',
 hints: ['如果逐一枚举两个数，需要多少次比较？', '遍历到 num 时，你真正想查找的是 target − num。', '用哈希表保存之前见过的数字及其下标，先查询、后插入。'],
 pitfalls: ['必须先查询再插入，避免同一个元素被使用两次。', '返回的是下标，不是元素的值。', '重复的数也可以组成答案，只要下标不同。'], exampleOutput: '[0, 1]', constraints: 'nums：0–16 个整数；target：−10000 至 10000。无解时返回 []；多解时返回首次找到的一组。',
 run(input) {
  const o=objectInput(input), nums=numbers(o.nums), target=integer(o.target,'target');
  const t=recorder(nums), seen=new Map<number,number>();t.ready({variables:{target},map:[]});
  t.add(2,'创建一个空哈希表','seen 保存「已经遍历的数字 → 下标」，用来快速查找补数。');
  for(let i=0;i<nums.length;i++){
   const num=nums[i], complement=target-num;
   t.add(3,`访问 nums[${i}] = ${num}`,'向右移动指针，只与之前出现过的元素配对。',{pointers:{i},highlights:[i],variables:{i,num,target}});
   t.add(4,`计算补数：${target} − ${num} = ${complement}`,'两个数的和必须为 target，所以我们需要找到这个补数。',{highlights:[i],variables:{i,num,target,complement}});
   t.add(5,seen.has(complement)?`命中！哈希表中存在 ${complement}`:`查询 ${complement}，暂未找到`,'哈希表查询的平均时间为 O(1)。只在已访问的元素中查找。',{highlights:[i],variables:{i,num,target,complement,found:seen.has(complement)}});
   if(seen.has(complement)){const j=seen.get(complement)!;t.add(6,`找到答案：下标 [${j}, ${i}]`,`${nums[j]} + ${num} = ${target}，返回两个不同元素的下标。`,{success:[j,i],result:[j,i],phase:'done'});return t.steps;}
   seen.set(num,i);t.add(7,`存入哈希表：${num} → ${i}`,'当前数字没有找到另一半。记录它，供后面的数字查询。',{map:[...seen],visited:Array.from({length:i+1},(_,j)=>j),highlights:[i]});
  }
  t.add(8,'遍历结束，没有找到配对','所有元素均已检查，返回空数组。',{result:[],phase:'done',pointers:{}});return t.steps;
 }
};
export const reverseList: AlgorithmDefinition = {
 id:206,kind:'list',name:'迭代 · 三指针',inputLabel:'链表节点数组',defaultInput:'{"head": [1, 2, 3, 4, 5]}',
 code:`def reverse_list(head):
    prev = None
    curr = head
    while curr:
        nxt = curr.next
        curr.next = prev
        prev = curr
        curr = nxt
    return prev`,time:'O(n)',space:'O(1)',
 idea:'把链表分为已经反转和等待处理的两段。每次先保存后继，再把当前节点指向 prev。最后同步推进 prev 和 curr，直到原链表走到尽头。',hints:['反转一个节点的 next 以后，还能找到剩余链表吗？','需要一个变量保存原来的后继节点。','用 prev、curr、nxt 依次完成保存、反向连接和指针推进。'],pitfalls:['先保存 nxt，再改写 curr.next，否则会丢失剩余节点。','返回 prev，循环结束时 curr 已经为空。'],exampleOutput:'[5, 4, 3, 2, 1]',constraints:'head：0–12 个整数，空数组表示空链表。',
 run(input){const a=numbers(objectInput(input).head,'head',12),t=recorder(a);const next=a.map((_,i)=>i+1<a.length?i+1:-1);let prev=-1,curr=a.length?0:-1,nxt=-1;
 const edges=()=>next.flatMap((n,i):[number,number][]=>n<0?[]:[[i,n]]);const pointers=()=>({prev,curr,nxt});
 t.ready({edges:edges(),pointers:pointers(),variables:{prev:null,curr:curr<0?null:a[curr]}});
 t.add(2,'prev 初始化为空','反转后的链表最初为空，原来的头节点将会指向 null。');t.add(3,'curr 指向原链表头部','从第一个节点开始反转。');
 while(curr>=0){t.add(4,`当前处理节点 ${a[curr]}`,'只要 curr 非空，就还有一个节点等待反转。',{highlights:[curr]});nxt=next[curr];t.add(5,'保存原来的后继 nxt','先保留通往剩余链表的入口，改写连接后也不会丢失它。',{pointers:pointers(),variables:{prev:prev<0?null:a[prev],curr:a[curr],nxt:nxt<0?null:a[nxt]},highlights:[curr]});next[curr]=prev;t.add(6,`反转连接：${a[curr]} → ${prev<0?'null':a[prev]}`,'这一步实际修改当前节点的 next，箭头方向随之改变。',{edges:edges(),highlights:[curr]});prev=curr;t.add(7,'prev 向前移动','已反转部分的头节点现在就是 curr。',{pointers:pointers(),variables:{prev:a[prev],curr:a[curr],nxt:nxt<0?null:a[nxt]}});curr=nxt;t.add(8,'curr 移动到保存的后继','准备处理下一个节点。注意：沿保存的 nxt 移动，而不是已反转的 next。',{pointers:pointers(),variables:{prev:a[prev],curr:curr<0?null:a[curr],nxt:nxt<0?null:a[nxt]}});}
 t.add(9,'所有连接已反转，返回 prev','节点数值没有改变，改变的是节点之间的连接关系。',{result:[...a].reverse(),success:a.map((_,i)=>i),phase:'done'});return t.steps;}
};
export const longestSubstring: AlgorithmDefinition = {
 id:3,kind:'window',name:'滑动窗口 · 字符集合',inputLabel:'字符串',defaultInput:'{"s": "abcabcbb"}',
 code:`def length_of_longest_substring(s):
    seen, left, best = set(), 0, 0
    for right, char in enumerate(s):
        while char in seen:
            seen.remove(s[left])
            left += 1
        seen.add(char)
        best = max(best, right - left + 1)
    return best`,time:'O(n)',space:'O(k)',
 idea:'维护一个不含重复字符的连续窗口。右边遇到重复字符时，逐步从左边移除，直到重复消失，再加入当前字符。每次扩展后更新最长长度。',hints:['连续子串可以用左右两个边界描述。','加入一个重复字符时，窗口左边应该如何移动？','用集合判断重复，用 while 收缩窗口，直到能安全加入当前字符。'],pitfalls:['收缩必须使用 while，移除一个字符不一定足够。','求的是连续子串，不是可以跳过元素的子序列。'],exampleOutput:'3',constraints:'s：最多 24 个 Unicode 字符；空字符串的答案为 0。',
 run(input){const chars=Array.from(stringInput(objectInput(input).s)),t=recorder(chars),seen=new Set<string>();let left=0,best=0;t.ready({variables:{left,right:-1,best},pointers:{left,right:-1}});t.add(2,'初始化空窗口','左右边界从开头出发，当前最优长度为 0。');
 for(let right=0;right<chars.length;right++){const char=chars[right];t.add(3,`右边界来到字符「${char}」`,'尝试把当前字符加入窗口，先检查是否重复。',{pointers:{left,right},highlights:[right],variables:{left,right,char,best}});t.add(4,seen.has(char)?`「${char}」已在窗口中，需要收缩`:'窗口中没有重复，可以加入','窗口中的集合必须始终与已接受的字符一致。',{map:[...seen].map(c=>[c,'存在']),highlights:[right]});
 while(seen.has(char)){seen.delete(chars[left]);t.add(5,`从集合移除「${chars[left]}」`,'释放左边界对应的字符。',{map:[...seen].map(c=>[c,'存在']),highlights:[left]});left++;t.add(6,`左边界移到 ${left}`,'继续检查重复是否已消除。',{pointers:{left,right},variables:{left,right,char,best}});}
 seen.add(char);t.add(7,`加入字符「${char}」`,'现在窗口内全部字符互不相同。',{map:[...seen].map(c=>[c,'存在']),highlights:[right]});best=Math.max(best,right-left+1);t.add(8,`更新最长长度：${best}`,`当前窗口长度为 ${right-left+1}，与历史最优值取最大。`,{variables:{left,right,char,best},success:Array.from({length:right-left+1},(_,i)=>left+i)});}
 t.add(9,`最长无重复子串长度为 ${best}`,'每个字符最多进入和离开窗口各一次，因此总时间是线性的。',{result:best,phase:'done'});return t.steps;}
};
export const climbStairs: AlgorithmDefinition = {
 id:70,kind:'dp',name:'动态规划 · 状态转移',inputLabel:'台阶数量',defaultInput:'{"n": 6}',
 code:`def climb_stairs(n):
    dp = [0] * (n + 1)
    dp[0] = dp[1] = 1
    for i in range(2, n + 1):
        dp[i] = dp[i - 1] + dp[i - 2]
    return dp[n]`,time:'O(n)',space:'O(n)',
 idea:'到第 i 级的最后一步，只可能从第 i−1 级跨一级，或从第 i−2 级跨两级。两种情况互不重叠，所以走法数相加：dp[i] = dp[i−1] + dp[i−2]。',hints:['最后一步可能跨几级？','把最后一步为一级与两级的情况分开。','令 dp[i] 表示到达第 i 级的走法，答案来自前两个状态之和。'],pitfalls:['dp[0] = 1 表示尚未走台阶的一种空方案。','当前实现以 1 ≤ n ≤ 30 为输入范围，避免数值溢出。'],exampleOutput:'13',constraints:'n：1–30 的整数。',
 run(input){const n=integer(objectInput(input).n,'n',1,30),dp:(number|null)[]=Array(n+1).fill(null),t=recorder();t.ready({variables:{n},dp});dp.fill(0);t.add(2,`分配 ${n+1} 个状态`,'dp[i] 记录到达第 i 级台阶的走法数量。',{dp});dp[0]=dp[1]=1;t.add(3,'设置边界：dp[0] = dp[1] = 1','空方案和登一级都只有一种方式，这是状态转移的起点。',{dp,success:[0,1]});for(let i=2;i<=n;i++){t.add(4,`准备计算 dp[${i}]`,'只依赖已经计算好的前两个状态。',{pointers:{i},comparisons:[i-2,i-1],variables:{n,i,'dp[i−2]':dp[i-2],'dp[i−1]':dp[i-1]}});dp[i]=dp[i-1]!+dp[i-2]!;t.add(5,`dp[${i}] = ${dp[i-1]} + ${dp[i-2]} = ${dp[i]}`,'把最后一步跨一级和跨两级的方案数量相加。',{dp,comparisons:[i-2,i-1],success:[i],variables:{n,i,'dp[i]':dp[i]}});}t.add(6,`到第 ${n} 级共有 ${dp[n]} 种走法`,'读取最终状态作为答案。',{result:dp[n],success:[n],phase:'done'});return t.steps;}
};
export const levelOrder: AlgorithmDefinition = {
 id:102,kind:'tree',name:'广度优先搜索 · 队列',inputLabel:'二叉树层序数组',defaultInput:'{"root": [3, 9, 20, null, null, 15, 7]}',
 code:`from collections import deque
def level_order(root):
    if root is None: return []
    queue, result = deque([root]), []
    while queue:
        level = []
        for _ in range(len(queue)):
            node = queue.popleft()
            level.append(node.val)
            if node.left: queue.append(node.left)
            if node.right: queue.append(node.right)
        result.append(level)
    return result`,time:'O(n)',space:'O(n)',
 idea:'利用先进先出的队列逐层访问节点。每一轮开始时固定当前队列长度，恰好取出这一层的节点，再把它们的孩子放到队尾，供下一层处理。',hints:['先进入的数据先被处理，对应哪种数据结构？','访问一个节点后，把它的孩子放进队列。','每层开始时固定队列长度，才能区分当前层与下一层。'],pitfalls:['不能在本层循环里动态更新循环次数，新加入的孩子属于下一层。','层序输入中的 null 代表缺失节点，不是数值为零。'],exampleOutput:'[[3], [9, 20], [15, 7]]',constraints:'root：最多 31 项的紧凑层序数组，以 null 表示缺失节点；最多 5 层。',
 run(input){const o=objectInput(input),raw=o.root;if(!Array.isArray(raw)||raw.length>31)throw new Error('root 必须是最多 31 项的层序数组。');const a=raw.map(v=>v===null?null:integer(v,'root 中的节点'));const nodes:VisualNode[]=[],edges:[number,number][]=[],children=new Map<number,number[]>();
 if(a.length&&a[0]!==null){nodes.push({id:0,value:a[0],x:350,y:45});let cursor=1;for(let j=0;j<nodes.length&&cursor<a.length;j++){const parent=nodes[j],depth=Math.round((parent.y-45)/65);if(depth>=4&&a.slice(cursor).some(v=>v!==null))throw new Error('可视化最多支持 5 层二叉树。');const cs:number[]=[];for(let side=0;side<2&&cursor<a.length;side++,cursor++){if(a[cursor]!==null){const id=cursor;nodes.push({id,value:a[cursor]!,x:parent.x+(side?1:-1)*(160/2**depth),y:parent.y+65,parent:parent.id});edges.push([parent.id,id]);cs.push(id);}}children.set(parent.id,cs);}if(cursor<a.length&&a.slice(cursor).some(v=>v!==null))throw new Error('存在没有父节点的非空节点，请检查层序输入。');}
 else if(a.slice(1).some(v=>v!==null))throw new Error('根为空时不能存在非空子节点。');
 const t=recorder(),queue:number[]=nodes.length?[0]:[],result:(string|number)[][]=[],visited:number[]=[];const val=(id:number)=>nodes.find(n=>n.id===id)!.value;const qvalues=()=>queue.map(val);t.ready({nodes,edges,variables:{root:nodes.length?nodes[0].value:null}});if(!nodes.length){t.add(3,'空树，返回空数组','没有根节点，不需要进入队列。',{result:[],phase:'done'});return t.steps;}t.add(4,'根节点入队','队列按先进先出的顺序保存待访问节点。',{queue:qvalues(),variables:{result}});
 while(queue.length){t.add(5,'队列非空，开始新的一层','当前队列中的节点都处在同一深度。');const size=queue.length,level:(number|string)[]=[];t.add(6,'创建当前层的结果数组','每层单独保存，最终返回二维数组。',{variables:{level:[],result,levelSize:size}});for(let k=0;k<size;k++){t.add(7,`本层处理第 ${k+1}/${size} 个节点`,'循环次数固定为本层开始时的队列长度。');const id=queue.shift()!;t.add(8,`出队节点 ${val(id)}`,'从队头取出待访问节点。',{queue:qvalues(),highlights:[id],variables:{node:val(id),level,result,levelSize:size}});level.push(val(id));visited.push(id);t.add(9,`访问 ${val(id)}，加入当前层`,'把节点值追加到当前层的结果。',{visited:[...visited],success:[id],variables:{node:val(id),level:[...level],result}});for(const child of children.get(id)||[]){queue.push(child);const isLeft=nodes.find(n=>n.id===child)!.x<nodes.find(n=>n.id===id)!.x;t.add(isLeft?10:11,`子节点 ${val(child)} 入队`,'孩子进入队尾，留到下一层处理。',{queue:qvalues(),highlights:[child]});}}
 result.push([...level]);t.add(12,'当前层完成，保存结果','队列里现在只剩下一层的节点。',{results:result,variables:{result:[...result],level}});}
 t.add(13,'层序遍历完成','队列已空，全部可达节点都按层访问了一次。',{result,phase:'done',success:[...visited]});return t.steps;}
};
export const permutations: AlgorithmDefinition = {
 id:46,kind:'backtrack',name:'回溯 · 搜索树',inputLabel:'互异整数数组',defaultInput:'{"nums": [1, 2, 3]}',
 code:`def permute(nums):
    result, path, used = [], [], set()
    def dfs():
        if len(path) == len(nums):
            result.append(path.copy())
            return
        for i, num in enumerate(nums):
            if i in used: continue
            used.add(i)
            path.append(num)
            dfs()
            path.pop()
            used.remove(i)
    dfs()
    return result`,time:'O(n · n!)',space:'O(n) 辅助空间',
 idea:'每一层选择一个还没用过的数字，加入当前路径，再继续选择下一个位置。当路径包含全部数字时保存一个答案。返回上一层后撤销选择，尝试其他分支。',hints:['把第一个位置的每种选择分别尝试。','如何记录一个数字在当前路径里是否已经使用？','选择 → 递归 → 撤销选择，恢复状态后再尝试下一条分支。'],pitfalls:['保存 path 的拷贝，否则后续撤销会改变已有答案。','回溯时必须同时恢复 path 和 used。','排列数量按阶乘增长，所以演示限制为最多 5 个数字。'],exampleOutput:'[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]',constraints:'nums：0–5 个互不相同的整数；空数组有一个空排列。',
 run(input){const a=numbers(objectInput(input).nums,'nums',5);if(new Set(a).size!==a.length)throw new Error('全排列的输入数字必须互不相同。');const t=recorder(a),used=new Set<number>(),path:number[]=[],result:number[][]=[],nodes:VisualNode[]=[{id:0,value:'∅',x:350,y:30}],edges:[number,number][]=[],stack=[0];let count=0;
 const patch=()=>({path:[...path],results:result.map(r=>[...r]),nodes:[...nodes],edges:[...edges],variables:{path:[...path],used:[...used],depth:path.length,answers:result.length,'调用栈':stack.map((_,i)=>`dfs(${i})`)},highlights:[stack[stack.length-1]]});
 t.ready(patch());t.add(2,'初始化答案、路径与使用集合','每次递归都共享这组状态，返回时必须恢复。',patch());
 const dfs=()=>{t.add(3,`进入第 ${path.length} 层搜索`,'当前路径决定已经填好的位置。',patch());t.add(4,`路径长度 ${path.length} / ${a.length}`,'检查是否已填满全部位置。',patch());if(path.length===a.length){result.push([...path]);t.add(5,`保存排列 [${path.join(', ')}]`,'复制当前路径，防止后续回溯修改已保存的答案。',{...patch(),success:[stack[stack.length-1]]});t.add(6,'当前分支完成，递归返回','返回上一层，继续探索其他选择。',patch());return;}
 for(let i=0;i<a.length;i++){t.add(7,`考虑数字 ${a[i]}`,'按输入顺序检查每个候选数字。',patch());if(used.has(i)){t.add(8,`${a[i]} 已使用，跳过`,'同一排列中每个输入元素只能使用一次。',patch());continue;}used.add(i);t.add(9,`标记 ${a[i]} 为已使用`,'先记录使用状态，避免下一层重复选取。',patch());path.push(a[i]);const parent=stack[stack.length-1],id=++count;nodes.push({id,value:a[i],x:350,y:30+path.length*55,parent});edges.push([parent,id]);stack.push(id);t.add(10,`选择 ${a[i]}，路径 [${path.join(', ')}]`,'新增搜索分支，填入当前排列的下一个位置。',patch());t.add(11,'递归搜索下一位置','深入下一层，继续补全排列。',patch());dfs();path.pop();stack.pop();t.add(12,`撤销选择 ${a[i]}`,'从路径移除最后一个元素，回到父节点。',{...patch(),rejected:[id]});used.delete(i);t.add(13,`恢复 ${a[i]} 的可用状态`,'清除使用标记，继续尝试其他分支。',patch());}}
 ;t.add(14,'从空路径开始搜索','根节点代表还没有选择数字。',patch());dfs();t.add(15,`搜索完成，共 ${result.length} 个排列`,'每一条从根到叶子的完整路径对应一个排列。',{...patch(),result,phase:'done'});return t.steps;}
};
export const coreAlgorithms = [twoSum,reverseList,longestSubstring,climbStairs,levelOrder,permutations];
