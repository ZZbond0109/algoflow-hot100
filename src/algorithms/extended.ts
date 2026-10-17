import type { AlgorithmDefinition } from '../types';
import { recorder, objectInput, integer, numbers, stringInput } from './trace';
const moveZeroes: AlgorithmDefinition={id:283,kind:'array',name:'双指针 · 稳定交换',inputLabel:'整数数组',defaultInput:'{"nums":[0,1,0,3,12]}',code:`def move_zeroes(nums):
    left = 0
    for right in range(len(nums)):
        if nums[right] != 0:
            nums[left], nums[right] = nums[right], nums[left]
            left += 1
    return nums`,time:'O(n)',space:'O(1)',idea:'left 指向下一个非零元素应放的位置。right 扫描数组，遇到非零元素就与 left 交换，并推进 left。',hints:['如果保留一个位置专门放下一个非零元素呢？','一个指针负责扫描，另一个负责写入。','只有扫描到非零元素时才交换和推进写入指针。'],pitfalls:['非零元素的原有相对顺序必须保留。','返回数组用于演示；实际题目要求原地修改。'],exampleOutput:'[1,3,12,0,0]',constraints:'nums：0–16 个整数。',run(input){const a=numbers(objectInput(input).nums),t=recorder(a),identities=a.map((_,i)=>i);let left=0;t.ready({pointers:{left},variables:{left}});t.add(2,'写入位置从 0 开始','left 前面的元素都已经是处理好的非零元素。');for(let right=0;right<a.length;right++){t.add(3,`扫描下标 ${right}`,'right 每次向右扫描一个位置。',{pointers:{left,right},highlights:[right],variables:{left,right}});t.add(4,a[right]?'遇到非零元素':'遇到零，保留待后续交换','非零元素应依次放到数组前部。',{highlights:[right]});if(a[right]!==0){[a[left],a[right]]=[a[right],a[left]];[identities[left],identities[right]]=[identities[right],identities[left]];t.add(5,`交换下标 ${left} 与 ${right}`,'交换会保留已收集非零元素的相对顺序。',{values:[...a],identities:[...identities],highlights:[left,right]});left++;t.add(6,'推进写入指针','下一个非零元素将写到这里。',{pointers:{left,right},variables:{left,right}});}}t.add(7,'零已移动到数组末尾','原数组已完成修改。',{result:a,phase:'done',success:a.map((_,i)=>i)});return t.steps;}};
const searchInsert:AlgorithmDefinition={id:35,kind:'array',name:'二分查找 · 左闭右开',inputLabel:'递增数组与目标值',defaultInput:'{"nums":[1,3,5,6],"target":2}',code:`def search_insert(nums, target):
    left, right = 0, len(nums)
    while left < right:
        mid = (left + right) // 2
        if nums[mid] < target:
            left = mid + 1
        else:
            right = mid
    return left`,time:'O(log n)',space:'O(1)',idea:'在左闭右开的区间 [left, right) 中查找第一个大于等于 target 的位置。比较中点后排除不可能的一半，区间为空时 left 就是插入位置。',hints:['有序性是否可以帮你排除一半元素？','目标插入位置是第一个不小于它的数的位置。','维护 [left,right) 区间，中点偏小就令 left = mid + 1，否则 right = mid。'],pitfalls:['right 的初始值是数组长度，属于边界而非有效下标。','输入必须严格递增。'],exampleOutput:'1',constraints:'nums：0–16 个严格递增整数；target 为整数。',run(input){const o=objectInput(input),a=numbers(o.nums),target=integer(o.target,'target');if(a.some((v,i)=>i>0&&v<=a[i-1]))throw new Error('nums 必须严格递增。');let left=0,right=a.length;const t=recorder(a);t.ready({variables:{left,right,target},pointers:{left,right}});t.add(2,'初始化搜索区间 [0, n)','右边界可以等于数组长度。');while(left<right){t.add(3,`搜索区间 [${left}, ${right})`,'区间内仍然存在候选位置。',{pointers:{left,right},variables:{left,right,target}});const mid=Math.floor((left+right)/2);t.add(4,`计算中点 mid = ${mid}`,'向下取整，保证中点位于区间内部。',{pointers:{left,right,mid},highlights:[mid],variables:{left,right,mid,target}});t.add(5,`比较 ${a[mid]} 与 ${target}`,'据此排除不可能包含插入位置的一半。',{highlights:[mid]});if(a[mid]<target){left=mid+1;t.add(6,`left = ${left}`,'中点和左侧都比目标小，插入点一定在右侧。',{pointers:{left,right},variables:{left,right,target}});}else{t.add(7,'进入 else 分支','中点不小于目标，应保留中点作为边界候选。');right=mid;t.add(8,`right = ${right}`,'丢弃中点右侧，但保留中点成为最终答案的可能。',{pointers:{left,right},variables:{left,right,target}});}}t.add(9,`插入位置为 ${left}`,'左右边界相遇，该位置是第一个不小于目标的下标。',{result:left,phase:'done',success:left<a.length?[left]:[]});return t.steps;}};
const validBrackets:AlgorithmDefinition={id:20,kind:'stack',name:'栈 · 就近匹配',inputLabel:'括号字符串',defaultInput:'{"s":"([]){}"}',code:`def is_valid(s):
    stack = []
    pairs = {')': '(', ']': '[', '}': '{'}
    for i, char in enumerate(s):
        if char in '([{':
            stack.append(char)
        elif not stack or stack.pop() != pairs[char]:
            return False
    return not stack`,time:'O(n)',space:'O(n)',idea:'左括号入栈，右括号必须匹配最近一个尚未匹配的左括号。栈的后进先出顺序正好表达嵌套关系。',hints:['遇到右括号时，应该与哪个左括号匹配？','最近未匹配的左括号可以保存在栈顶。','匹配失败立即返回；遍历结束后还要检查栈是否为空。'],pitfalls:['先检查栈是否为空，再弹出。','遍历结束不代表成功，还可能有多余左括号。'],exampleOutput:'true',constraints:'s：最多 24 个字符，仅允许 ()[]{}。',run(input){const s=stringInput(objectInput(input).s);if(/[^()[\]{}]/.test(s))throw new Error('只允许输入 ()[]{} 六种括号。');const t=recorder(Array.from(s)),stack:string[]=[],pairs:Record<string,string>={')':'(',']':'[','}':'{'};t.ready();t.add(2,'创建空栈','栈记录尚未匹配的左括号。');t.add(3,'建立右括号到左括号的映射','每种右括号都有唯一的匹配类型。');for(let i=0;i<s.length;i++){const c=s[i];t.add(4,`处理字符 ${c}`,'从左向右依次检查。',{pointers:{i},highlights:[i],variables:{i,char:c}});t.add(5,'判断是否为左括号','左括号暂存，等待后续右括号匹配。');if('([{'.includes(c)){stack.push(c);t.add(6,`${c} 入栈`,'新左括号位于栈顶。',{queue:[...stack],highlights:[i]});}else{const top=stack.pop();t.add(7,`弹出栈顶 ${top??'空'}，与 ${c} 匹配`,'右括号只能匹配最近的左括号。',{queue:[...stack],variables:{i,char:c,top:top??null,expected:pairs[c]}});if(top!==pairs[c]){t.add(8,'匹配失败','类型不一致或没有可匹配的左括号。',{result:false,phase:'done',rejected:[i]});return t.steps;}}}t.add(9,stack.length?'存在未匹配的左括号':'所有括号正确匹配','只有栈为空，整个字符串才有效。',{result:stack.length===0,phase:'done'});return t.steps;}};
const stock:AlgorithmDefinition={id:121,kind:'array',name:'贪心 · 最低买入价',inputLabel:'每日股价',defaultInput:'{"prices":[7,1,5,3,6,4]}',code:`def max_profit(prices):
    low, best = float('inf'), 0
    for i, price in enumerate(prices):
        low = min(low, price)
        best = max(best, price - low)
    return best`,time:'O(n)',space:'O(1)',idea:'如果今天卖出，最佳买入价格一定是之前见过的最低价。沿途维护最低价和最大利润，不需要枚举所有买卖日期。',hints:['固定卖出日期，最佳买入日期应满足什么？','只需要记住历史最低价格。','每一天比较历史最大利润与今天卖出的利润。'],pitfalls:['必须先买后卖，不能使用未来的最低价。','价格一直下跌时，最大利润为 0。'],exampleOutput:'5',constraints:'prices：0–16 个非负整数。',run(input){const a=numbers(objectInput(input).prices,'prices');if(a.some(v=>v<0))throw new Error('股价不能为负。');const t=recorder(a);let low=Infinity,best=0;t.ready();t.add(2,'初始化最低价与利润','尚未观察价格，初始可获得利润为 0。',{variables:{low:'∞',best}});for(let i=0;i<a.length;i++){const price=a[i];t.add(3,`观察第 ${i+1} 天价格 ${price}`,'考虑在今天卖出的情况。',{pointers:{i},highlights:[i]});low=Math.min(low,price);t.add(4,`最低买入价更新为 ${low}`,'只从已经观察过的日期里选择买入价格。',{variables:{i,price,low,best}});best=Math.max(best,price-low);t.add(5,`最大利润更新为 ${best}`,'今天的价格减去最低价，与历史最好利润比较。',{variables:{i,price,low,best},success:[i]});}t.add(6,`最大利润为 ${best}`,'最优利润来自一次合法的买入与卖出，或不交易。',{result:best,phase:'done'});return t.steps;}};
const maxSubarray:AlgorithmDefinition={id:53,kind:'array',name:'动态规划 · Kadane',inputLabel:'整数数组',defaultInput:'{"nums":[-2,1,-3,4,-1,2,1,-5,4]}',code:`def max_subarray(nums):
    current = best = nums[0]
    for i in range(1, len(nums)):
        current = max(nums[i], current + nums[i])
        best = max(best, current)
    return best`,time:'O(n)',space:'O(1)',idea:'current 表示必须在当前位置结束的最大子数组和。前面的和若带来负担，就从当前元素重新开始；否则接在已有子数组后面。',hints:['先只考虑以当前元素结尾的最优解。','上一段和为负时，接上它有帮助吗？','在重新开始与继续延伸之间取最大，再维护全局最大值。'],pitfalls:['数组非空，不能把 best 初始化为 0，否则全负数组会出错。','子数组必须连续。'],exampleOutput:'6',constraints:'nums：1–16 个整数。',run(input){const a=numbers(objectInput(input).nums,'nums',16,1),t=recorder(a);let current=a[0],best=current,start=0;t.ready();t.add(2,'用第一个元素初始化','非空子数组至少包含一个元素。',{variables:{current,best},highlights:[0]});for(let i=1;i<a.length;i++){t.add(3,`处理 nums[${i}] = ${a[i]}`,'在当前位置选择重新开始或继续延伸。',{pointers:{i},highlights:[i]});if(a[i]>current+a[i])start=i;current=Math.max(a[i],current+a[i]);t.add(4,`当前结尾的最大和为 ${current}`,'比较当前数字本身与接到前一段后面的总和。',{variables:{i,current,best,start},success:Array.from({length:i-start+1},(_,j)=>start+j)});best=Math.max(best,current);t.add(5,`全局最大和为 ${best}`,'将当前最优与历史全局最优比较。',{variables:{i,current,best,start}});}t.add(6,`最大连续子数组和为 ${best}`,'全部结尾位置都已检查。',{result:best,phase:'done'});return t.steps;}};
const islands:AlgorithmDefinition={id:200,kind:'grid',name:'广度优先搜索 · 网格染色',inputLabel:'0/1 二维网格',defaultInput:'{"grid":[[1,1,0,0,0],[1,1,0,0,1],[0,0,1,0,1],[0,0,0,1,1]]}',code:`from collections import deque
def num_islands(grid):
    rows, cols = len(grid), len(grid[0])
    count = 0
    for r in range(len(grid)):
        for c in range(len(grid[0])):
            if grid[r][c] != 1: continue
            count += 1
            grid[r][c] = 2
            queue = deque([(r, c)])
            while queue:
                x, y = queue.popleft()
                for nx, ny in ((x-1,y),(x+1,y),(x,y-1),(x,y+1)):
                    if 0 <= nx < rows and 0 <= ny < cols and grid[nx][ny] == 1:
                        grid[nx][ny] = 2
                        queue.append((nx, ny))
    return count`,time:'O(mn)',space:'O(mn)',idea:'逐格扫描，每遇到一个还没访问的陆地，就发现一个新岛。用队列向上下左右扩张，把这座岛的所有陆地标记为已访问，避免重复计数。',hints:['同一座岛的陆地有什么连接关系？','从一块陆地出发，把所有相连陆地都标记起来。','扫描到未标记的陆地时计数加一，再用 BFS 完整遍历这座岛。'],pitfalls:['只有上下左右连接，对角线不算连通。','入队时立刻标记，避免同一格重复入队。','状态 2 表示已访问陆地，网格会在算法内部被标记。'],exampleOutput:'3',constraints:'grid：1–8 行，1–10 列的矩形网格，元素为 0/1 或 "0"/"1"。',run(input){const raw=objectInput(input).grid;if(!Array.isArray(raw)||!raw.length||raw.length>8||!Array.isArray(raw[0])||!raw[0].length||raw[0].length>10)throw new Error('grid 应为 1–8 行、1–10 列的非空矩形网格。');const width=raw[0].length;const g:number[][]=raw.map(row=>{if(!Array.isArray(row)||row.length!==width||row.some(v=>![0,1,'0','1'].includes(v)))throw new Error('每行长度应相同，且只能包含 0 和 1。');return row.map(Number);});const t=recorder();let count=0;const visited:number[]=[];t.ready({grid:g});t.add(4,'初始化岛屿数量为 0','未扫描任何陆地。',{variables:{count}});for(let r=0;r<g.length;r++){t.add(5,`扫描第 ${r} 行`,'按行遍历整个网格。');for(let c=0;c<width;c++){t.add(6,`检查网格 (${r}, ${c})`,'蓝色表示当前检查的单元格。',{highlights:[r*width+c],variables:{r,c,count}});t.add(7,g[r][c]===1?'发现未访问陆地':'水域或已访问陆地，跳过','只从未访问的陆地发起新的搜索。');if(g[r][c]!==1)continue;count++;t.add(8,`发现第 ${count} 座岛`,'该陆地与之前完成搜索的岛屿不连通。',{variables:{r,c,count}});g[r][c]=2;visited.push(r*width+c);t.add(9,'标记起点已访问','以数值 2 记录已访问陆地。',{grid:g,visited:[...visited]});const q:[number,number][]=[[r,c]];t.add(10,'起点加入搜索队列','从该格开始探索整座岛。',{queue:q.map(p=>p.join(','))});while(q.length){t.add(11,'队列非空，继续扩张','本次队列中的格子属于同一座岛。');const [x,y]=q.shift()!;t.add(12,`取出 (${x}, ${y})`,'检查它的四个正交相邻格子。',{queue:q.map(p=>p.join(',')),highlights:[x*width+y],variables:{x,y,count}});for(const [nx,ny] of [[x-1,y],[x+1,y],[x,y-1],[x,y+1]]){t.add(13,`检查邻居 (${nx}, ${ny})`,'邻居仅包含上、下、左、右四个方向。');t.add(14,'检查边界与陆地状态','只有在边界内且未访问的陆地可以加入队列。');if(nx>=0&&nx<g.length&&ny>=0&&ny<width&&g[nx][ny]===1){g[nx][ny]=2;visited.push(nx*width+ny);t.add(15,`标记 (${nx}, ${ny}) 已访问`,'立即标记，防止被其他相邻格子重复发现。',{grid:g,visited:[...visited],highlights:[nx*width+ny]});q.push([nx,ny]);t.add(16,'相邻陆地入队','它的邻居将在稍后被继续检查。',{queue:q.map(p=>p.join(','))});}}}}}t.add(17,`共有 ${count} 座岛屿`,'所有陆地均已归入某一座岛。',{result:count,phase:'done'});return t.steps;}};
const robbery:AlgorithmDefinition={id:198,kind:'dp',name:'动态规划 · 选择与跳过',inputLabel:'房屋金额',defaultInput:'{"nums":[2,7,9,3,1]}',code:`def rob(nums):
    dp = [0] * (len(nums) + 1)
    for i in range(1, len(nums) + 1):
        skip = dp[i - 1]
        take = nums[i - 1] + (dp[i - 2] if i > 1 else 0)
        dp[i] = max(skip, take)
    return dp[-1]`,time:'O(n)',space:'O(n)',idea:'dp[i] 表示前 i 间房屋能获得的最大金额。跳过当前房屋就继承 dp[i−1]；选择当前房屋就只能接 dp[i−2]。',hints:['最后一间房屋只有选或不选两种情况。','选择当前房屋后，上一间还能选吗？','比较 dp[i−1] 与 dp[i−2] + nums[i−1]。'],pitfalls:['dp 的下标表示房屋数量，比 nums 下标多 1。','不能同时选择相邻两间房屋。'],exampleOutput:'12',constraints:'nums：0–16 个非负整数。',run(input){const a=numbers(objectInput(input).nums);if(a.some(v=>v<0))throw new Error('金额不能为负。');const dp=Array(a.length+1).fill(0) as number[],t=recorder(a);t.ready({dp});t.add(2,'初始化 dp 数组','没有房屋时可获得金额为 0。');for(let i=1;i<=a.length;i++){t.add(3,`考虑前 ${i} 间房屋`,'最后一间房屋的选择决定如何转移。',{pointers:{i},highlights:[i]});const skip=dp[i-1];t.add(4,`不选当前房屋：${skip}`,'继承前 i−1 间的最优值。',{highlights:[i-1],variables:{i,skip}});const take=a[i-1]+(i>1?dp[i-2]:0);t.add(5,`选择当前房屋：${take}`,'当前金额加上前 i−2 间的最优值。',{highlights:i>1?[i-2]:[],variables:{i,skip,take}});dp[i]=Math.max(skip,take);t.add(6,`dp[${i}] = ${dp[i]}`,'取两种互斥情况中的较大值。',{dp,success:[i],variables:{i,skip,take,'dp[i]':dp[i]}});}t.add(7,`最多获得 ${dp[a.length]}`,'读取涵盖全部房屋的最优状态。',{result:dp[a.length],phase:'done'});return t.steps;}};
const lis:AlgorithmDefinition={id:300,kind:'dp',name:'动态规划 · 枚举前驱',inputLabel:'整数数组',defaultInput:'{"nums":[10,9,2,5,3,7,101,18]}',code:`def length_of_lis(nums):
    if not nums: return 0
    dp = [1] * len(nums)
    for i in range(len(nums)):
        for j in range(i):
            if nums[j] < nums[i]:
                dp[i] = max(dp[i], dp[j] + 1)
    return max(dp)`,time:'O(n²)',space:'O(n)',idea:'令 dp[i] 表示以 nums[i] 结尾的严格递增子序列的最大长度。枚举前面更小的数，尝试在其最优子序列后接上当前元素。',hints:['先固定递增子序列的结尾。','比当前值小的前驱可以来自哪些位置？','对所有 nums[j] < nums[i] 的 j，尝试 dp[j] + 1。'],pitfalls:['严格递增意味着相等元素不能接在一起。','最终答案是 dp 的最大值，不一定是最后一项。'],exampleOutput:'4',constraints:'nums：0–16 个整数。',run(input){const a=numbers(objectInput(input).nums),t=recorder(a),dp=a.map(()=>1);t.ready();if(!a.length){t.add(2,'空数组，长度为 0','没有可选元素。',{result:0,phase:'done'});return t.steps;}t.add(3,'每个位置的初始长度为 1','单个元素本身构成长度 1 的递增子序列。',{dp});for(let i=0;i<a.length;i++){t.add(4,`计算以 ${a[i]} 结尾的状态`,'依次检查前面的所有候选前驱。',{pointers:{i},variables:{i},highlights:[i]});for(let j=0;j<i;j++){t.add(5,`考虑前驱 nums[${j}] = ${a[j]}`,'前驱必须出现在当前位置之前。',{pointers:{i,j},highlights:[i,j],variables:{i,j}});t.add(6,`${a[j]} ${a[j]<a[i]?'<':'≥'} ${a[i]}`,'只有前驱更小时才能形成严格递增序列。');if(a[j]<a[i]){dp[i]=Math.max(dp[i],dp[j]+1);t.add(7,`dp[${i}] 更新为 ${dp[i]}`,'比较现有长度与从该前驱延伸的长度。',{dp,highlights:[j],success:[i],variables:{i,j,'dp[i]':dp[i]}});}}}const best=Math.max(...dp);t.add(8,`最长递增子序列长度为 ${best}`,'最佳子序列可以结束在任意位置，所以取所有状态的最大值。',{result:best,phase:'done',success:dp.flatMap((n,i)=>n===best?[i]:[])});return t.steps;}};
export const extendedAlgorithms=[moveZeroes,searchInsert,validBrackets,stock,maxSubarray,islands,robbery,lis];
