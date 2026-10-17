import type { Problem } from "../types";
// Source: official study plan, retrieved 2026-10-17. Summaries are original.
export const problems: Problem[] = [
  {
    "id": 1,
    "title": "两数之和",
    "slug": "two-sum",
    "difficulty": "EASY",
    "category": "哈希",
    "tags": [
      "数组",
      "哈希表"
    ],
    "summary": "给定整数数组 nums 和目标值 target，找到和为目标值的两个不同元素，返回它们的下标。",
    "leetcodeUrl": "https://leetcode.cn/problems/two-sum/"
  },
  {
    "id": 49,
    "title": "字母异位词分组",
    "slug": "group-anagrams",
    "difficulty": "MEDIUM",
    "category": "哈希",
    "tags": [
      "数组",
      "哈希表",
      "字符串",
      "排序"
    ],
    "summary": "把一组字符串按字母组成分组；同一组内的字符串可以通过重新排列字母互相得到。",
    "leetcodeUrl": "https://leetcode.cn/problems/group-anagrams/"
  },
  {
    "id": 128,
    "title": "最长连续序列",
    "slug": "longest-consecutive-sequence",
    "difficulty": "MEDIUM",
    "category": "哈希",
    "tags": [
      "并查集",
      "数组",
      "哈希表"
    ],
    "summary": "在未排序的整数数组中，找出数字连续的最长序列长度，要求线性时间。",
    "leetcodeUrl": "https://leetcode.cn/problems/longest-consecutive-sequence/"
  },
  {
    "id": 283,
    "title": "移动零",
    "slug": "move-zeroes",
    "difficulty": "EASY",
    "category": "双指针",
    "tags": [
      "数组",
      "双指针"
    ],
    "summary": "把数组中的零移动到末尾，保留所有非零元素的原有顺序，直接修改数组。",
    "leetcodeUrl": "https://leetcode.cn/problems/move-zeroes/"
  },
  {
    "id": 11,
    "title": "盛最多水的容器",
    "slug": "container-with-most-water",
    "difficulty": "MEDIUM",
    "category": "双指针",
    "tags": [
      "贪心",
      "数组",
      "双指针"
    ],
    "summary": "从高度数组中选择两条竖线，与横轴共同构成容器，求能容纳的最大水量。",
    "leetcodeUrl": "https://leetcode.cn/problems/container-with-most-water/"
  },
  {
    "id": 15,
    "title": "三数之和",
    "slug": "3sum",
    "difficulty": "MEDIUM",
    "category": "双指针",
    "tags": [
      "数组",
      "双指针",
      "排序"
    ],
    "summary": "找出数组中所有和为零的三元组，结果不能包含重复组合。",
    "leetcodeUrl": "https://leetcode.cn/problems/3sum/"
  },
  {
    "id": 42,
    "title": "接雨水",
    "slug": "trapping-rain-water",
    "difficulty": "HARD",
    "category": "双指针",
    "tags": [
      "栈",
      "数组",
      "双指针",
      "动态规划",
      "单调栈"
    ],
    "summary": "把数组元素视为柱子的高度，计算下雨后柱子之间能积存多少水。",
    "leetcodeUrl": "https://leetcode.cn/problems/trapping-rain-water/"
  },
  {
    "id": 3,
    "title": "无重复字符的最长子串",
    "slug": "longest-substring-without-repeating-characters",
    "difficulty": "MEDIUM",
    "category": "滑动窗口",
    "tags": [
      "哈希表",
      "字符串",
      "滑动窗口"
    ],
    "summary": "给定字符串 s，找出其中不含重复字符的最长连续子串，返回它的长度。",
    "leetcodeUrl": "https://leetcode.cn/problems/longest-substring-without-repeating-characters/"
  },
  {
    "id": 438,
    "title": "找到字符串中所有字母异位词",
    "slug": "find-all-anagrams-in-a-string",
    "difficulty": "MEDIUM",
    "category": "滑动窗口",
    "tags": [
      "哈希表",
      "字符串",
      "滑动窗口"
    ],
    "summary": "在字符串 s 中找出所有由 p 的字母重新排列而成的子串，返回起始位置。",
    "leetcodeUrl": "https://leetcode.cn/problems/find-all-anagrams-in-a-string/"
  },
  {
    "id": 560,
    "title": "和为 K 的子数组",
    "slug": "subarray-sum-equals-k",
    "difficulty": "MEDIUM",
    "category": "子串",
    "tags": [
      "数组",
      "哈希表",
      "前缀和"
    ],
    "summary": "统计整数数组中，元素总和恰好等于 k 的连续子数组数量。",
    "leetcodeUrl": "https://leetcode.cn/problems/subarray-sum-equals-k/"
  },
  {
    "id": 239,
    "title": "滑动窗口最大值",
    "slug": "sliding-window-maximum",
    "difficulty": "HARD",
    "category": "子串",
    "tags": [
      "队列",
      "数组",
      "滑动窗口",
      "单调队列",
      "堆（优先队列）",
      ""
    ],
    "summary": "一个固定大小的窗口从数组左侧滑向右侧，依次返回每个窗口的最大值。",
    "leetcodeUrl": "https://leetcode.cn/problems/sliding-window-maximum/"
  },
  {
    "id": 76,
    "title": "最小覆盖子串",
    "slug": "minimum-window-substring",
    "difficulty": "HARD",
    "category": "子串",
    "tags": [
      "哈希表",
      "字符串",
      "滑动窗口"
    ],
    "summary": "从 s 中找到覆盖 t 全部字符及其出现次数的最短连续子串。",
    "leetcodeUrl": "https://leetcode.cn/problems/minimum-window-substring/"
  },
  {
    "id": 53,
    "title": "最大子数组和",
    "slug": "maximum-subarray",
    "difficulty": "MEDIUM",
    "category": "普通数组",
    "tags": [
      "数组",
      "分治",
      "动态规划"
    ],
    "summary": "选择数组中一个非空连续片段，使其元素之和最大，返回这个和。",
    "leetcodeUrl": "https://leetcode.cn/problems/maximum-subarray/"
  },
  {
    "id": 56,
    "title": "合并区间",
    "slug": "merge-intervals",
    "difficulty": "MEDIUM",
    "category": "普通数组",
    "tags": [
      "数组",
      "排序",
      ""
    ],
    "summary": "给定若干区间，合并所有相互重叠的区间，返回互不重叠的区间集合。",
    "leetcodeUrl": "https://leetcode.cn/problems/merge-intervals/"
  },
  {
    "id": 189,
    "title": "轮转数组",
    "slug": "rotate-array",
    "difficulty": "MEDIUM",
    "category": "普通数组",
    "tags": [
      "数组",
      "数学",
      "双指针"
    ],
    "summary": "将数组整体向右轮转 k 个位置，越过末尾的元素回到开头。",
    "leetcodeUrl": "https://leetcode.cn/problems/rotate-array/"
  },
  {
    "id": 238,
    "title": "除了自身以外数组的乘积",
    "slug": "product-of-array-except-self",
    "difficulty": "MEDIUM",
    "category": "普通数组",
    "tags": [
      "数组",
      "前缀和"
    ],
    "summary": "对每个位置，计算数组中除该位置以外全部元素的乘积，不使用除法。",
    "leetcodeUrl": "https://leetcode.cn/problems/product-of-array-except-self/"
  },
  {
    "id": 41,
    "title": "缺失的第一个正数",
    "slug": "first-missing-positive",
    "difficulty": "HARD",
    "category": "普通数组",
    "tags": [
      "数组",
      "哈希表"
    ],
    "summary": "在线性时间、常数额外空间内，找出数组没有出现的最小正整数。",
    "leetcodeUrl": "https://leetcode.cn/problems/first-missing-positive/"
  },
  {
    "id": 73,
    "title": "矩阵置零",
    "slug": "set-matrix-zeroes",
    "difficulty": "MEDIUM",
    "category": "矩阵",
    "tags": [
      "数组",
      "哈希表",
      "矩阵"
    ],
    "summary": "矩阵中某个元素为零时，把它所在的整行和整列都设为零，直接修改矩阵。",
    "leetcodeUrl": "https://leetcode.cn/problems/set-matrix-zeroes/"
  },
  {
    "id": 54,
    "title": "螺旋矩阵",
    "slug": "spiral-matrix",
    "difficulty": "MEDIUM",
    "category": "矩阵",
    "tags": [
      "数组",
      "矩阵",
      "模拟"
    ],
    "summary": "从矩阵左上角开始，顺时针逐层向内访问，返回访问顺序。",
    "leetcodeUrl": "https://leetcode.cn/problems/spiral-matrix/"
  },
  {
    "id": 48,
    "title": "旋转图像",
    "slug": "rotate-image",
    "difficulty": "MEDIUM",
    "category": "矩阵",
    "tags": [
      "数组",
      "数学",
      "矩阵"
    ],
    "summary": "把一个正方形矩阵原地顺时针旋转九十度。",
    "leetcodeUrl": "https://leetcode.cn/problems/rotate-image/"
  },
  {
    "id": 240,
    "title": "搜索二维矩阵 II",
    "slug": "search-a-2d-matrix-ii",
    "difficulty": "MEDIUM",
    "category": "矩阵",
    "tags": [
      "数组",
      "二分查找",
      "分治",
      "矩阵"
    ],
    "summary": "在每行从左向右、每列从上向下均递增的矩阵中查找目标值。",
    "leetcodeUrl": "https://leetcode.cn/problems/search-a-2d-matrix-ii/"
  },
  {
    "id": 160,
    "title": "相交链表",
    "slug": "intersection-of-two-linked-lists",
    "difficulty": "EASY",
    "category": "链表",
    "tags": [
      "哈希表",
      "链表",
      "双指针"
    ],
    "summary": "给定两个单链表，找出它们首次共享的节点；相交依据是节点身份而非数值。",
    "leetcodeUrl": "https://leetcode.cn/problems/intersection-of-two-linked-lists/"
  },
  {
    "id": 206,
    "title": "反转链表",
    "slug": "reverse-linked-list",
    "difficulty": "EASY",
    "category": "链表",
    "tags": [
      "递归",
      "链表"
    ],
    "summary": "给定单链表的头节点，反转每个节点的连接方向，返回新的头节点。",
    "leetcodeUrl": "https://leetcode.cn/problems/reverse-linked-list/"
  },
  {
    "id": 234,
    "title": "回文链表",
    "slug": "palindrome-linked-list",
    "difficulty": "EASY",
    "category": "链表",
    "tags": [
      "栈",
      "递归",
      "链表",
      "双指针"
    ],
    "summary": "判断一个单链表的节点值序列从前向后与从后向前是否相同。",
    "leetcodeUrl": "https://leetcode.cn/problems/palindrome-linked-list/"
  },
  {
    "id": 141,
    "title": "环形链表",
    "slug": "linked-list-cycle",
    "difficulty": "EASY",
    "category": "链表",
    "tags": [
      "哈希表",
      "链表",
      "双指针",
      ""
    ],
    "summary": "判断从链表头部持续沿 next 前进时，是否会再次到达同一个节点。",
    "leetcodeUrl": "https://leetcode.cn/problems/linked-list-cycle/"
  },
  {
    "id": 142,
    "title": "环形链表 II",
    "slug": "linked-list-cycle-ii",
    "difficulty": "MEDIUM",
    "category": "链表",
    "tags": [
      "哈希表",
      "链表",
      "双指针",
      ""
    ],
    "summary": "若链表存在环，返回进入环的第一个节点；否则返回空节点。",
    "leetcodeUrl": "https://leetcode.cn/problems/linked-list-cycle-ii/"
  },
  {
    "id": 21,
    "title": "合并两个有序链表",
    "slug": "merge-two-sorted-lists",
    "difficulty": "EASY",
    "category": "链表",
    "tags": [
      "递归",
      "链表"
    ],
    "summary": "将两个各自递增的链表合并为一个递增链表，复用原有节点。",
    "leetcodeUrl": "https://leetcode.cn/problems/merge-two-sorted-lists/"
  },
  {
    "id": 2,
    "title": "两数相加",
    "slug": "add-two-numbers",
    "difficulty": "MEDIUM",
    "category": "链表",
    "tags": [
      "递归",
      "链表",
      "数学"
    ],
    "summary": "两个链表分别按低位在前存储非负整数，将它们相加并以同样形式返回。",
    "leetcodeUrl": "https://leetcode.cn/problems/add-two-numbers/"
  },
  {
    "id": 19,
    "title": "删除链表的倒数第 N 个结点",
    "slug": "remove-nth-node-from-end-of-list",
    "difficulty": "MEDIUM",
    "category": "链表",
    "tags": [
      "链表",
      "双指针"
    ],
    "summary": "删除单链表中倒数第 N 个节点，返回修改后的头节点。",
    "leetcodeUrl": "https://leetcode.cn/problems/remove-nth-node-from-end-of-list/"
  },
  {
    "id": 24,
    "title": "两两交换链表中的节点",
    "slug": "swap-nodes-in-pairs",
    "difficulty": "MEDIUM",
    "category": "链表",
    "tags": [
      "递归",
      "链表"
    ],
    "summary": "将链表中相邻节点两两交换，交换节点连接而非仅交换数值。",
    "leetcodeUrl": "https://leetcode.cn/problems/swap-nodes-in-pairs/"
  },
  {
    "id": 25,
    "title": "K 个一组翻转链表",
    "slug": "reverse-nodes-in-k-group",
    "difficulty": "HARD",
    "category": "链表",
    "tags": [
      "递归",
      "链表"
    ],
    "summary": "每 k 个节点为一组反转链表；末尾不足 k 个节点的一组保持原样。",
    "leetcodeUrl": "https://leetcode.cn/problems/reverse-nodes-in-k-group/"
  },
  {
    "id": 138,
    "title": "随机链表的复制",
    "slug": "copy-list-with-random-pointer",
    "difficulty": "MEDIUM",
    "category": "链表",
    "tags": [
      "哈希表",
      "链表"
    ],
    "summary": "深拷贝带 next 和 random 指针的链表，新节点不能与原链表共享。",
    "leetcodeUrl": "https://leetcode.cn/problems/copy-list-with-random-pointer/"
  },
  {
    "id": 148,
    "title": "排序链表",
    "slug": "sort-list",
    "difficulty": "MEDIUM",
    "category": "链表",
    "tags": [
      "链表",
      "双指针",
      "分治",
      "排序",
      "归并排序"
    ],
    "summary": "按节点值递增排序单链表，目标时间复杂度为 O(n log n)。",
    "leetcodeUrl": "https://leetcode.cn/problems/sort-list/"
  },
  {
    "id": 23,
    "title": "合并 K 个升序链表",
    "slug": "merge-k-sorted-lists",
    "difficulty": "HARD",
    "category": "链表",
    "tags": [
      "链表",
      "分治",
      "堆（优先队列）",
      "归并排序",
      ""
    ],
    "summary": "把多个已排序的链表合并为一个全局递增的链表。",
    "leetcodeUrl": "https://leetcode.cn/problems/merge-k-sorted-lists/"
  },
  {
    "id": 146,
    "title": "LRU 缓存",
    "slug": "lru-cache",
    "difficulty": "MEDIUM",
    "category": "链表",
    "tags": [
      "设计",
      "哈希表",
      "链表",
      "双向链表"
    ],
    "summary": "设计固定容量的缓存，读写均为常数时间，容量不足时淘汰最久未使用的键。",
    "leetcodeUrl": "https://leetcode.cn/problems/lru-cache/"
  },
  {
    "id": 94,
    "title": "二叉树的中序遍历",
    "slug": "binary-tree-inorder-traversal",
    "difficulty": "EASY",
    "category": "二叉树",
    "tags": [
      "栈",
      "树",
      "深度优先搜索",
      "二叉树"
    ],
    "summary": "按照左子树、根节点、右子树的顺序访问二叉树，返回节点值序列。",
    "leetcodeUrl": "https://leetcode.cn/problems/binary-tree-inorder-traversal/"
  },
  {
    "id": 104,
    "title": "二叉树的最大深度",
    "slug": "maximum-depth-of-binary-tree",
    "difficulty": "EASY",
    "category": "二叉树",
    "tags": [
      "树",
      "深度优先搜索",
      "广度优先搜索",
      "二叉树"
    ],
    "summary": "计算从根节点到最远叶节点的路径所包含的节点数量。",
    "leetcodeUrl": "https://leetcode.cn/problems/maximum-depth-of-binary-tree/"
  },
  {
    "id": 226,
    "title": "翻转二叉树",
    "slug": "invert-binary-tree",
    "difficulty": "EASY",
    "category": "二叉树",
    "tags": [
      "树",
      "深度优先搜索",
      "广度优先搜索",
      "二叉树"
    ],
    "summary": "交换二叉树每个节点的左右子树，返回翻转后的根节点。",
    "leetcodeUrl": "https://leetcode.cn/problems/invert-binary-tree/"
  },
  {
    "id": 101,
    "title": "对称二叉树",
    "slug": "symmetric-tree",
    "difficulty": "EASY",
    "category": "二叉树",
    "tags": [
      "树",
      "深度优先搜索",
      "广度优先搜索",
      "二叉树"
    ],
    "summary": "判断二叉树沿根节点的竖直轴是否左右镜像对称。",
    "leetcodeUrl": "https://leetcode.cn/problems/symmetric-tree/"
  },
  {
    "id": 543,
    "title": "二叉树的直径",
    "slug": "diameter-of-binary-tree",
    "difficulty": "EASY",
    "category": "二叉树",
    "tags": [
      "树",
      "深度优先搜索",
      "二叉树",
      ""
    ],
    "summary": "找出二叉树中任意两个节点之间最长路径的边数，路径不一定经过根。",
    "leetcodeUrl": "https://leetcode.cn/problems/diameter-of-binary-tree/"
  },
  {
    "id": 102,
    "title": "二叉树的层序遍历",
    "slug": "binary-tree-level-order-traversal",
    "difficulty": "MEDIUM",
    "category": "二叉树",
    "tags": [
      "树",
      "广度优先搜索",
      "二叉树"
    ],
    "summary": "逐层从左到右访问二叉树，将每一层的节点值放入独立数组。",
    "leetcodeUrl": "https://leetcode.cn/problems/binary-tree-level-order-traversal/"
  },
  {
    "id": 108,
    "title": "将有序数组转换为二叉搜索树",
    "slug": "convert-sorted-array-to-binary-search-tree",
    "difficulty": "EASY",
    "category": "二叉树",
    "tags": [
      "树",
      "二叉搜索树",
      "数组",
      "分治",
      "二叉树"
    ],
    "summary": "把一个递增数组转换为高度平衡的二叉搜索树。",
    "leetcodeUrl": "https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree/"
  },
  {
    "id": 98,
    "title": "验证二叉搜索树",
    "slug": "validate-binary-search-tree",
    "difficulty": "MEDIUM",
    "category": "二叉树",
    "tags": [
      "树",
      "深度优先搜索",
      "二叉搜索树",
      "二叉树"
    ],
    "summary": "判断二叉树是否满足每个节点的整棵左子树更小、右子树更大的搜索树规则。",
    "leetcodeUrl": "https://leetcode.cn/problems/validate-binary-search-tree/"
  },
  {
    "id": 230,
    "title": "二叉搜索树中第 K 小的元素",
    "slug": "kth-smallest-element-in-a-bst",
    "difficulty": "MEDIUM",
    "category": "二叉树",
    "tags": [
      "树",
      "深度优先搜索",
      "二叉搜索树",
      "二叉树"
    ],
    "summary": "在二叉搜索树中，找到按数值从小到大排列的第 K 个节点值。",
    "leetcodeUrl": "https://leetcode.cn/problems/kth-smallest-element-in-a-bst/"
  },
  {
    "id": 199,
    "title": "二叉树的右视图",
    "slug": "binary-tree-right-side-view",
    "difficulty": "MEDIUM",
    "category": "二叉树",
    "tags": [
      "树",
      "深度优先搜索",
      "广度优先搜索",
      "二叉树"
    ],
    "summary": "从树的右侧观察二叉树，返回每一层最右边可见的节点值。",
    "leetcodeUrl": "https://leetcode.cn/problems/binary-tree-right-side-view/"
  },
  {
    "id": 114,
    "title": "二叉树展开为链表",
    "slug": "flatten-binary-tree-to-linked-list",
    "difficulty": "MEDIUM",
    "category": "二叉树",
    "tags": [
      "栈",
      "树",
      "深度优先搜索",
      "链表",
      "二叉树"
    ],
    "summary": "按照前序遍历顺序把二叉树原地展开为只通过 right 连接的链表。",
    "leetcodeUrl": "https://leetcode.cn/problems/flatten-binary-tree-to-linked-list/"
  },
  {
    "id": 105,
    "title": "从前序与中序遍历序列构造二叉树",
    "slug": "construct-binary-tree-from-preorder-and-inorder-traversal",
    "difficulty": "MEDIUM",
    "category": "二叉树",
    "tags": [
      "树",
      "数组",
      "哈希表",
      "分治",
      "二叉树"
    ],
    "summary": "利用节点值不重复的前序和中序遍历序列，重建原二叉树。",
    "leetcodeUrl": "https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/"
  },
  {
    "id": 437,
    "title": "路径总和 III",
    "slug": "path-sum-iii",
    "difficulty": "MEDIUM",
    "category": "二叉树",
    "tags": [
      "树",
      "深度优先搜索",
      "二叉树"
    ],
    "summary": "统计树中所有沿父到子方向、节点值之和等于目标的连续路径。",
    "leetcodeUrl": "https://leetcode.cn/problems/path-sum-iii/"
  },
  {
    "id": 236,
    "title": "二叉树的最近公共祖先",
    "slug": "lowest-common-ancestor-of-a-binary-tree",
    "difficulty": "MEDIUM",
    "category": "二叉树",
    "tags": [
      "树",
      "深度优先搜索",
      "二叉树",
      "",
      ""
    ],
    "summary": "找出二叉树中同时包含两个指定节点的最深公共祖先。",
    "leetcodeUrl": "https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/"
  },
  {
    "id": 124,
    "title": "二叉树中的最大路径和",
    "slug": "binary-tree-maximum-path-sum",
    "difficulty": "HARD",
    "category": "二叉树",
    "tags": [
      "树",
      "深度优先搜索",
      "动态规划",
      "二叉树",
      ""
    ],
    "summary": "树中一条非空简单路径可以从任意节点出发，求路径节点值的最大和。",
    "leetcodeUrl": "https://leetcode.cn/problems/binary-tree-maximum-path-sum/"
  },
  {
    "id": 200,
    "title": "岛屿数量",
    "slug": "number-of-islands",
    "difficulty": "MEDIUM",
    "category": "图论",
    "tags": [
      "深度优先搜索",
      "广度优先搜索",
      "并查集",
      "数组",
      "矩阵"
    ],
    "summary": "网格中 1 表示陆地，0 表示水域，按上下左右连接计算独立岛屿数量。",
    "leetcodeUrl": "https://leetcode.cn/problems/number-of-islands/"
  },
  {
    "id": 994,
    "title": "腐烂的橘子",
    "slug": "rotting-oranges",
    "difficulty": "MEDIUM",
    "category": "图论",
    "tags": [
      "广度优先搜索",
      "数组",
      "矩阵"
    ],
    "summary": "腐烂橘子每分钟感染上下左右的新鲜橘子，求全部腐烂所需的最短时间。",
    "leetcodeUrl": "https://leetcode.cn/problems/rotting-oranges/"
  },
  {
    "id": 207,
    "title": "课程表",
    "slug": "course-schedule",
    "difficulty": "MEDIUM",
    "category": "图论",
    "tags": [
      "深度优先搜索",
      "广度优先搜索",
      "图",
      "拓扑排序",
      ""
    ],
    "summary": "课程之间有前置依赖，判断能否安排一个顺序学完所有课程。",
    "leetcodeUrl": "https://leetcode.cn/problems/course-schedule/"
  },
  {
    "id": 208,
    "title": "实现 Trie (前缀树)",
    "slug": "implement-trie-prefix-tree",
    "difficulty": "MEDIUM",
    "category": "图论",
    "tags": [
      "设计",
      "字典树",
      "哈希表",
      "字符串"
    ],
    "summary": "设计前缀树，支持插入单词、查找完整单词和查找前缀。",
    "leetcodeUrl": "https://leetcode.cn/problems/implement-trie-prefix-tree/"
  },
  {
    "id": 46,
    "title": "全排列",
    "slug": "permutations",
    "difficulty": "MEDIUM",
    "category": "回溯",
    "tags": [
      "数组",
      "回溯"
    ],
    "summary": "给定不含重复数字的数组，返回所有可能的排列，每个数字在排列中使用一次。",
    "leetcodeUrl": "https://leetcode.cn/problems/permutations/"
  },
  {
    "id": 78,
    "title": "子集",
    "slug": "subsets",
    "difficulty": "MEDIUM",
    "category": "回溯",
    "tags": [
      "位运算",
      "数组",
      "回溯"
    ],
    "summary": "给定元素不重复的数组，生成所有可能的子集，包括空集和数组本身。",
    "leetcodeUrl": "https://leetcode.cn/problems/subsets/"
  },
  {
    "id": 17,
    "title": "电话号码的字母组合",
    "slug": "letter-combinations-of-a-phone-number",
    "difficulty": "MEDIUM",
    "category": "回溯",
    "tags": [
      "哈希表",
      "字符串",
      "回溯"
    ],
    "summary": "按电话键盘的数字到字母映射，生成输入数字串对应的全部字母组合。",
    "leetcodeUrl": "https://leetcode.cn/problems/letter-combinations-of-a-phone-number/"
  },
  {
    "id": 39,
    "title": "组合总和",
    "slug": "combination-sum",
    "difficulty": "MEDIUM",
    "category": "回溯",
    "tags": [
      "数组",
      "回溯"
    ],
    "summary": "从互异正整数中重复选取元素，使其总和等于目标，返回所有不同组合。",
    "leetcodeUrl": "https://leetcode.cn/problems/combination-sum/"
  },
  {
    "id": 22,
    "title": "括号生成",
    "slug": "generate-parentheses",
    "difficulty": "MEDIUM",
    "category": "回溯",
    "tags": [
      "字符串",
      "动态规划",
      "回溯",
      ""
    ],
    "summary": "给定括号对数 n，生成全部正确匹配的括号序列。",
    "leetcodeUrl": "https://leetcode.cn/problems/generate-parentheses/"
  },
  {
    "id": 79,
    "title": "单词搜索",
    "slug": "word-search",
    "difficulty": "MEDIUM",
    "category": "回溯",
    "tags": [
      "深度优先搜索",
      "数组",
      "字符串",
      "回溯",
      "矩阵"
    ],
    "summary": "从字母网格中沿上下左右移动，判断能否拼出指定单词，同一格不能重复使用。",
    "leetcodeUrl": "https://leetcode.cn/problems/word-search/"
  },
  {
    "id": 131,
    "title": "分割回文串",
    "slug": "palindrome-partitioning",
    "difficulty": "MEDIUM",
    "category": "回溯",
    "tags": [
      "字符串",
      "动态规划",
      "回溯"
    ],
    "summary": "切分字符串，使每个片段都是回文，返回所有可行的切分方案。",
    "leetcodeUrl": "https://leetcode.cn/problems/palindrome-partitioning/"
  },
  {
    "id": 51,
    "title": "N 皇后",
    "slug": "n-queens",
    "difficulty": "HARD",
    "category": "回溯",
    "tags": [
      "数组",
      "回溯",
      ""
    ],
    "summary": "在 n × n 棋盘上放置 n 个皇后，使任意两个都不同行、同列或同对角线。",
    "leetcodeUrl": "https://leetcode.cn/problems/n-queens/"
  },
  {
    "id": 35,
    "title": "搜索插入位置",
    "slug": "search-insert-position",
    "difficulty": "EASY",
    "category": "二分查找",
    "tags": [
      "数组",
      "二分查找"
    ],
    "summary": "在递增数组中查找目标，存在则返回下标，否则返回保持有序的插入位置。",
    "leetcodeUrl": "https://leetcode.cn/problems/search-insert-position/"
  },
  {
    "id": 74,
    "title": "搜索二维矩阵",
    "slug": "search-a-2d-matrix",
    "difficulty": "MEDIUM",
    "category": "二分查找",
    "tags": [
      "数组",
      "二分查找",
      "矩阵"
    ],
    "summary": "把行内递增且后一行起点大于前一行终点的矩阵视为有序序列，查找目标。",
    "leetcodeUrl": "https://leetcode.cn/problems/search-a-2d-matrix/"
  },
  {
    "id": 34,
    "title": "在排序数组中查找元素的第一个和最后一个位置",
    "slug": "find-first-and-last-position-of-element-in-sorted-array",
    "difficulty": "MEDIUM",
    "category": "二分查找",
    "tags": [
      "数组",
      "二分查找"
    ],
    "summary": "在非递减数组中，找出目标值第一次和最后一次出现的位置。",
    "leetcodeUrl": "https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/"
  },
  {
    "id": 33,
    "title": "搜索旋转排序数组",
    "slug": "search-in-rotated-sorted-array",
    "difficulty": "MEDIUM",
    "category": "二分查找",
    "tags": [
      "数组",
      "二分查找"
    ],
    "summary": "递增数组经过一次旋转且元素互异，在对数时间内查找目标的位置。",
    "leetcodeUrl": "https://leetcode.cn/problems/search-in-rotated-sorted-array/"
  },
  {
    "id": 153,
    "title": "寻找旋转排序数组中的最小值",
    "slug": "find-minimum-in-rotated-sorted-array",
    "difficulty": "MEDIUM",
    "category": "二分查找",
    "tags": [
      "数组",
      "二分查找"
    ],
    "summary": "在元素互异的旋转递增数组中，找出最小元素。",
    "leetcodeUrl": "https://leetcode.cn/problems/find-minimum-in-rotated-sorted-array/"
  },
  {
    "id": 4,
    "title": "寻找两个正序数组的中位数",
    "slug": "median-of-two-sorted-arrays",
    "difficulty": "HARD",
    "category": "二分查找",
    "tags": [
      "数组",
      "二分查找",
      "分治"
    ],
    "summary": "给定两个递增数组，在对数时间内求合并后序列的中位数。",
    "leetcodeUrl": "https://leetcode.cn/problems/median-of-two-sorted-arrays/"
  },
  {
    "id": 20,
    "title": "有效的括号",
    "slug": "valid-parentheses",
    "difficulty": "EASY",
    "category": "栈",
    "tags": [
      "栈",
      "字符串",
      ""
    ],
    "summary": "判断括号字符串中的每个右括号能否与最近的同类左括号正确匹配。",
    "leetcodeUrl": "https://leetcode.cn/problems/valid-parentheses/"
  },
  {
    "id": 155,
    "title": "最小栈",
    "slug": "min-stack",
    "difficulty": "MEDIUM",
    "category": "栈",
    "tags": [
      "栈",
      "设计"
    ],
    "summary": "设计一个栈，支持常数时间的入栈、出栈、读栈顶和读取最小元素。",
    "leetcodeUrl": "https://leetcode.cn/problems/min-stack/"
  },
  {
    "id": 394,
    "title": "字符串解码",
    "slug": "decode-string",
    "difficulty": "MEDIUM",
    "category": "栈",
    "tags": [
      "栈",
      "递归",
      "字符串"
    ],
    "summary": "按 k[片段] 的嵌套规则解码字符串，片段需要重复 k 次。",
    "leetcodeUrl": "https://leetcode.cn/problems/decode-string/"
  },
  {
    "id": 739,
    "title": "每日温度",
    "slug": "daily-temperatures",
    "difficulty": "MEDIUM",
    "category": "栈",
    "tags": [
      "栈",
      "数组",
      "单调栈"
    ],
    "summary": "对于每一天的温度，计算还需要等待多少天才能遇到更高温度。",
    "leetcodeUrl": "https://leetcode.cn/problems/daily-temperatures/"
  },
  {
    "id": 84,
    "title": "柱状图中最大的矩形",
    "slug": "largest-rectangle-in-histogram",
    "difficulty": "HARD",
    "category": "栈",
    "tags": [
      "栈",
      "数组",
      "单调栈",
      ""
    ],
    "summary": "给定相邻柱子的高度，求能在柱状图中覆盖的最大矩形面积。",
    "leetcodeUrl": "https://leetcode.cn/problems/largest-rectangle-in-histogram/"
  },
  {
    "id": 215,
    "title": "数组中的第K个最大元素",
    "slug": "kth-largest-element-in-an-array",
    "difficulty": "MEDIUM",
    "category": "堆",
    "tags": [
      "数组",
      "分治",
      "快速选择",
      "排序",
      "堆（优先队列）"
    ],
    "summary": "找出数组按降序排列后的第 K 个元素，重复元素分别计数。",
    "leetcodeUrl": "https://leetcode.cn/problems/kth-largest-element-in-an-array/"
  },
  {
    "id": 347,
    "title": "前 K 个高频元素",
    "slug": "top-k-frequent-elements",
    "difficulty": "MEDIUM",
    "category": "堆",
    "tags": [
      "数组",
      "哈希表",
      "分治",
      "桶排序",
      "计数",
      "快速选择",
      "排序",
      "堆（优先队列）"
    ],
    "summary": "统计数组元素的出现次数，返回出现频率最高的 K 个元素。",
    "leetcodeUrl": "https://leetcode.cn/problems/top-k-frequent-elements/"
  },
  {
    "id": 295,
    "title": "数据流的中位数",
    "slug": "find-median-from-data-stream",
    "difficulty": "HARD",
    "category": "堆",
    "tags": [
      "设计",
      "双指针",
      "数据流",
      "排序",
      "堆（优先队列）"
    ],
    "summary": "设计数据结构，支持持续加入整数，并随时查询当前全部数据的中位数。",
    "leetcodeUrl": "https://leetcode.cn/problems/find-median-from-data-stream/"
  },
  {
    "id": 121,
    "title": "买卖股票的最佳时机",
    "slug": "best-time-to-buy-and-sell-stock",
    "difficulty": "EASY",
    "category": "贪心算法",
    "tags": [
      "数组",
      "动态规划"
    ],
    "summary": "给定每日股价，只能先买一次再卖一次，求最多能获得的利润。",
    "leetcodeUrl": "https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/"
  },
  {
    "id": 55,
    "title": "跳跃游戏",
    "slug": "jump-game",
    "difficulty": "MEDIUM",
    "category": "贪心算法",
    "tags": [
      "贪心",
      "数组",
      "动态规划"
    ],
    "summary": "每个数组元素代表从该位置最多能向右跳多远，判断能否到达末尾。",
    "leetcodeUrl": "https://leetcode.cn/problems/jump-game/"
  },
  {
    "id": 45,
    "title": "跳跃游戏 II",
    "slug": "jump-game-ii",
    "difficulty": "MEDIUM",
    "category": "贪心算法",
    "tags": [
      "贪心",
      "数组",
      "动态规划"
    ],
    "summary": "保证能够到达数组末尾，求从起点到末尾需要的最少跳跃次数。",
    "leetcodeUrl": "https://leetcode.cn/problems/jump-game-ii/"
  },
  {
    "id": 763,
    "title": "划分字母区间",
    "slug": "partition-labels",
    "difficulty": "MEDIUM",
    "category": "贪心算法",
    "tags": [
      "贪心",
      "哈希表",
      "双指针",
      "字符串"
    ],
    "summary": "把字符串分成尽量多的片段，使同一种字母只出现在一个片段中。",
    "leetcodeUrl": "https://leetcode.cn/problems/partition-labels/"
  },
  {
    "id": 70,
    "title": "爬楼梯",
    "slug": "climbing-stairs",
    "difficulty": "EASY",
    "category": "动态规划",
    "tags": [
      "记忆化",
      "数学",
      "动态规划"
    ],
    "summary": "每次可以登一级或两级台阶，计算到达第 n 级台阶的不同走法数量。",
    "leetcodeUrl": "https://leetcode.cn/problems/climbing-stairs/"
  },
  {
    "id": 118,
    "title": "杨辉三角",
    "slug": "pascals-triangle",
    "difficulty": "EASY",
    "category": "动态规划",
    "tags": [
      "数组",
      "动态规划"
    ],
    "summary": "生成杨辉三角的前 n 行，每个内部元素等于上一行相邻两元素之和。",
    "leetcodeUrl": "https://leetcode.cn/problems/pascals-triangle/"
  },
  {
    "id": 198,
    "title": "打家劫舍",
    "slug": "house-robber",
    "difficulty": "MEDIUM",
    "category": "动态规划",
    "tags": [
      "数组",
      "动态规划"
    ],
    "summary": "每间房屋存放一定现金，不能连续选择相邻房屋，求最多可获得的金额。",
    "leetcodeUrl": "https://leetcode.cn/problems/house-robber/"
  },
  {
    "id": 279,
    "title": "完全平方数",
    "slug": "perfect-squares",
    "difficulty": "MEDIUM",
    "category": "动态规划",
    "tags": [
      "广度优先搜索",
      "数学",
      "动态规划",
      "",
      ""
    ],
    "summary": "把正整数拆成若干完全平方数之和，求所需平方数的最少个数。",
    "leetcodeUrl": "https://leetcode.cn/problems/perfect-squares/"
  },
  {
    "id": 322,
    "title": "零钱兑换",
    "slug": "coin-change",
    "difficulty": "MEDIUM",
    "category": "动态规划",
    "tags": [
      "广度优先搜索",
      "数组",
      "动态规划",
      "",
      ""
    ],
    "summary": "每种面额的硬币数量无限，求凑出目标金额的最少硬币数，无法凑出则返回 -1。",
    "leetcodeUrl": "https://leetcode.cn/problems/coin-change/"
  },
  {
    "id": 139,
    "title": "单词拆分",
    "slug": "word-break",
    "difficulty": "MEDIUM",
    "category": "动态规划",
    "tags": [
      "字典树",
      "记忆化",
      "数组",
      "哈希表",
      "字符串",
      "动态规划",
      ""
    ],
    "summary": "判断字符串能否被拆成若干词典中的单词，每个单词可以重复使用。",
    "leetcodeUrl": "https://leetcode.cn/problems/word-break/"
  },
  {
    "id": 300,
    "title": "最长递增子序列",
    "slug": "longest-increasing-subsequence",
    "difficulty": "MEDIUM",
    "category": "动态规划",
    "tags": [
      "数组",
      "二分查找",
      "动态规划",
      ""
    ],
    "summary": "从数组中选出保持原顺序且严格递增的子序列，求其最大长度。",
    "leetcodeUrl": "https://leetcode.cn/problems/longest-increasing-subsequence/"
  },
  {
    "id": 152,
    "title": "乘积最大子数组",
    "slug": "maximum-product-subarray",
    "difficulty": "MEDIUM",
    "category": "动态规划",
    "tags": [
      "数组",
      "动态规划"
    ],
    "summary": "在整数数组中选择非空连续子数组，使其中所有元素的乘积最大。",
    "leetcodeUrl": "https://leetcode.cn/problems/maximum-product-subarray/"
  },
  {
    "id": 416,
    "title": "分割等和子集",
    "slug": "partition-equal-subset-sum",
    "difficulty": "MEDIUM",
    "category": "动态规划",
    "tags": [
      "数组",
      "动态规划",
      "",
      ""
    ],
    "summary": "判断能否把正整数数组分成两个互不重叠、元素和相同的子集。",
    "leetcodeUrl": "https://leetcode.cn/problems/partition-equal-subset-sum/"
  },
  {
    "id": 32,
    "title": "最长有效括号",
    "slug": "longest-valid-parentheses",
    "difficulty": "HARD",
    "category": "动态规划",
    "tags": [
      "栈",
      "字符串",
      "动态规划",
      ""
    ],
    "summary": "在只含左右圆括号的字符串中，找出最长的合法连续括号片段长度。",
    "leetcodeUrl": "https://leetcode.cn/problems/longest-valid-parentheses/"
  },
  {
    "id": 62,
    "title": "不同路径",
    "slug": "unique-paths",
    "difficulty": "MEDIUM",
    "category": "多维动态规划",
    "tags": [
      "数学",
      "动态规划",
      "组合数学"
    ],
    "summary": "从网格左上角出发，每次只能向右或向下，计算到达右下角的路径数。",
    "leetcodeUrl": "https://leetcode.cn/problems/unique-paths/"
  },
  {
    "id": 64,
    "title": "最小路径和",
    "slug": "minimum-path-sum",
    "difficulty": "MEDIUM",
    "category": "多维动态规划",
    "tags": [
      "数组",
      "动态规划",
      "矩阵"
    ],
    "summary": "从非负权重网格左上角向右或向下走到右下角，使沿途数字之和最小。",
    "leetcodeUrl": "https://leetcode.cn/problems/minimum-path-sum/"
  },
  {
    "id": 5,
    "title": "最长回文子串",
    "slug": "longest-palindromic-substring",
    "difficulty": "MEDIUM",
    "category": "多维动态规划",
    "tags": [
      "双指针",
      "字符串",
      "动态规划",
      ""
    ],
    "summary": "找出字符串中正读反读完全相同的最长连续片段。",
    "leetcodeUrl": "https://leetcode.cn/problems/longest-palindromic-substring/"
  },
  {
    "id": 1143,
    "title": "最长公共子序列",
    "slug": "longest-common-subsequence",
    "difficulty": "MEDIUM",
    "category": "多维动态规划",
    "tags": [
      "字符串",
      "动态规划",
      ""
    ],
    "summary": "两个字符串可以删除部分字符但不能调整顺序，求它们最长公共子序列的长度。",
    "leetcodeUrl": "https://leetcode.cn/problems/longest-common-subsequence/"
  },
  {
    "id": 72,
    "title": "编辑距离",
    "slug": "edit-distance",
    "difficulty": "MEDIUM",
    "category": "多维动态规划",
    "tags": [
      "字符串",
      "动态规划"
    ],
    "summary": "允许插入、删除或替换一个字符，求把一个单词变为另一个的最少操作数。",
    "leetcodeUrl": "https://leetcode.cn/problems/edit-distance/"
  },
  {
    "id": 136,
    "title": "只出现一次的数字",
    "slug": "single-number",
    "difficulty": "EASY",
    "category": "技巧",
    "tags": [
      "位运算",
      "数组"
    ],
    "summary": "数组中除一个数出现一次外，其余数都出现两次，在线性时间和常数空间内找出它。",
    "leetcodeUrl": "https://leetcode.cn/problems/single-number/"
  },
  {
    "id": 169,
    "title": "多数元素",
    "slug": "majority-element",
    "difficulty": "EASY",
    "category": "技巧",
    "tags": [
      "数组",
      "哈希表",
      "分治",
      "计数",
      "排序",
      ""
    ],
    "summary": "数组中存在一个出现次数超过一半的元素，找出这个多数元素。",
    "leetcodeUrl": "https://leetcode.cn/problems/majority-element/"
  },
  {
    "id": 75,
    "title": "颜色分类",
    "slug": "sort-colors",
    "difficulty": "MEDIUM",
    "category": "技巧",
    "tags": [
      "数组",
      "双指针",
      "",
      "排序",
      ""
    ],
    "summary": "数组只包含 0、1、2，使用原地操作将三种数按升序排列。",
    "leetcodeUrl": "https://leetcode.cn/problems/sort-colors/"
  },
  {
    "id": 31,
    "title": "下一个排列",
    "slug": "next-permutation",
    "difficulty": "MEDIUM",
    "category": "技巧",
    "tags": [
      "数组",
      "双指针"
    ],
    "summary": "将整数序列修改为字典序中紧邻的下一个排列；若已最大，则改为最小排列。",
    "leetcodeUrl": "https://leetcode.cn/problems/next-permutation/"
  },
  {
    "id": 287,
    "title": "寻找重复数",
    "slug": "find-the-duplicate-number",
    "difficulty": "MEDIUM",
    "category": "技巧",
    "tags": [
      "位运算",
      "数组",
      "双指针",
      "二分查找",
      "",
      ""
    ],
    "summary": "n + 1 个整数位于 1 到 n 之间，不修改原数组，找出唯一重复的数值。",
    "leetcodeUrl": "https://leetcode.cn/problems/find-the-duplicate-number/"
  }
];
export const categories = [...new Set(problems.map(p => p.category))];
