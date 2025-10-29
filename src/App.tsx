import { useState } from 'react';
import { BookOpen, Code2, Search, ChevronRight } from 'lucide-react';

const dsaProblems = [
  {
    category: "Arrays & Lists",
    problems: [
      { name: "Two Sum", url: "https://leetcode.com/problems/two-sum/" },
      { name: "Best Time to Buy and Sell Stock", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" },
      { name: "Maximum Subarray", url: "https://leetcode.com/problems/maximum-subarray/" },
      { name: "Move Zeroes", url: "https://leetcode.com/problems/move-zeroes/" },
      { name: "Find the Duplicate Number", url: "https://leetcode.com/problems/find-the-duplicate-number/" },
      { name: "Missing Number", url: "https://leetcode.com/problems/missing-number/" },
      { name: "Merge Sorted Array", url: "https://leetcode.com/problems/merge-sorted-array/" },
      { name: "Rotate Array", url: "https://leetcode.com/problems/rotate-array/" },
      { name: "Remove Duplicates from Sorted Array", url: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/" },
      { name: "Contains Duplicate", url: "https://leetcode.com/problems/contains-duplicate/" }
    ]
  },
  {
    category: "Strings",
    problems: [
      { name: "Valid Anagram", url: "https://leetcode.com/problems/valid-anagram/" },
      { name: "Longest Substring Without Repeating Characters", url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
      { name: "Reverse Words in a String", url: "https://leetcode.com/problems/reverse-words-in-a-string/" },
      { name: "Longest Common Prefix", url: "https://leetcode.com/problems/longest-common-prefix/" },
      { name: "Valid Palindrome", url: "https://leetcode.com/problems/valid-palindrome/" },
      { name: "Implement strStr()", url: "https://leetcode.com/problems/implement-strstr/" },
      { name: "Group Anagrams", url: "https://leetcode.com/problems/group-anagrams/" },
      { name: "Isomorphic Strings", url: "https://leetcode.com/problems/isomorphic-strings/" },
      { name: "Count and Say", url: "https://leetcode.com/problems/count-and-say/" },
      { name: "Roman to Integer", url: "https://leetcode.com/problems/roman-to-integer/" }
    ]
  },
  {
    category: "HashMap / Dictionary / Set",
    problems: [
      { name: "Intersection of Two Arrays", url: "https://leetcode.com/problems/intersection-of-two-arrays/" },
      { name: "First Unique Character in a String", url: "https://leetcode.com/problems/first-unique-character-in-a-string/" },
      { name: "Happy Number", url: "https://leetcode.com/problems/happy-number/" },
      { name: "Top K Frequent Elements", url: "https://leetcode.com/problems/top-k-frequent-elements/" },
      { name: "Subarray Sum Equals K", url: "https://leetcode.com/problems/subarray-sum-equals-k/" },
      { name: "Longest Consecutive Sequence", url: "https://leetcode.com/problems/longest-consecutive-sequence/" },
      { name: "Word Pattern", url: "https://leetcode.com/problems/word-pattern/" },
      { name: "Group Shifted Strings", url: "https://www.geeksforgeeks.org/group-shifted-string/" },
      { name: "Check if Two Strings are Isomorphic", url: "https://leetcode.com/problems/isomorphic-strings/" },
      { name: "Two Sum with HashMap", url: "https://leetcode.com/problems/two-sum/" }
    ]
  },
  {
    category: "Matrix",
    problems: [
      { name: "Search a 2D Matrix", url: "https://leetcode.com/problems/search-a-2d-matrix/" },
      { name: "Spiral Matrix", url: "https://leetcode.com/problems/spiral-matrix/" },
      { name: "Rotate Image", url: "https://leetcode.com/problems/rotate-image/" },
      { name: "Set Matrix Zeroes", url: "https://leetcode.com/problems/set-matrix-zeroes/" },
      { name: "Word Search", url: "https://leetcode.com/problems/word-search/" },
      { name: "Transpose Matrix", url: "https://leetcode.com/problems/transpose-matrix/" },
      { name: "Number of Islands", url: "https://leetcode.com/problems/number-of-islands/" },
      { name: "Flood Fill", url: "https://leetcode.com/problems/flood-fill/" },
      { name: "Minimum Path Sum", url: "https://leetcode.com/problems/minimum-path-sum/" },
      { name: "Unique Paths", url: "https://leetcode.com/problems/unique-paths/" }
    ]
  },
  {
    category: "Sorting & Searching",
    problems: [
      { name: "Binary Search", url: "https://leetcode.com/problems/binary-search/" },
      { name: "Merge Sort", url: "https://www.geeksforgeeks.org/merge-sort/" },
      { name: "Quick Sort", url: "https://www.geeksforgeeks.org/quick-sort/" },
      { name: "Insertion Sort", url: "https://www.geeksforgeeks.org/insertion-sort/" },
      { name: "Selection Sort", url: "https://www.geeksforgeeks.org/selection-sort/" },
      { name: "Count Inversions", url: "https://www.geeksforgeeks.org/counting-inversions/" },
      { name: "Search in Rotated Sorted Array", url: "https://leetcode.com/problems/search-in-rotated-sorted-array/" },
      { name: "Kth Largest Element", url: "https://leetcode.com/problems/kth-largest-element-in-an-array/" },
      { name: "Find Peak Element", url: "https://leetcode.com/problems/find-peak-element/" },
      { name: "Median of Two Sorted Arrays", url: "https://leetcode.com/problems/median-of-two-sorted-arrays/" }
    ]
  },
  {
    category: "Linked List",
    problems: [
      { name: "Reverse Linked List", url: "https://leetcode.com/problems/reverse-linked-list/" },
      { name: "Detect Cycle in Linked List", url: "https://leetcode.com/problems/linked-list-cycle/" },
      { name: "Merge Two Sorted Lists", url: "https://leetcode.com/problems/merge-two-sorted-lists/" },
      { name: "Remove Nth Node From End", url: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/" },
      { name: "Intersection of Two Linked Lists", url: "https://leetcode.com/problems/intersection-of-two-linked-lists/" },
      { name: "Palindrome Linked List", url: "https://leetcode.com/problems/palindrome-linked-list/" },
      { name: "Add Two Numbers", url: "https://leetcode.com/problems/add-two-numbers/" },
      { name: "Copy List with Random Pointer", url: "https://leetcode.com/problems/copy-list-with-random-pointer/" },
      { name: "Flatten Multilevel Doubly Linked List", url: "https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/" },
      { name: "Rotate List", url: "https://leetcode.com/problems/rotate-list/" }
    ]
  },
  {
    category: "Stack & Queue",
    problems: [
      { name: "Valid Parentheses", url: "https://leetcode.com/problems/valid-parentheses/" },
      { name: "Min Stack", url: "https://leetcode.com/problems/min-stack/" },
      { name: "Implement Queue using Stacks", url: "https://leetcode.com/problems/implement-queue-using-stacks/" },
      { name: "Evaluate Reverse Polish Notation", url: "https://leetcode.com/problems/evaluate-reverse-polish-notation/" },
      { name: "Daily Temperatures", url: "https://leetcode.com/problems/daily-temperatures/" },
      { name: "Next Greater Element I", url: "https://leetcode.com/problems/next-greater-element-i/" },
      { name: "Sliding Window Maximum", url: "https://leetcode.com/problems/sliding-window-maximum/" },
      { name: "LRU Cache", url: "https://leetcode.com/problems/lru-cache/" },
      { name: "Decode String", url: "https://leetcode.com/problems/decode-string/" },
      { name: "Basic Calculator", url: "https://leetcode.com/problems/basic-calculator/" }
    ]
  },
  {
    category: "Recursion & Backtracking",
    problems: [
      { name: "Permutations", url: "https://leetcode.com/problems/permutations/" },
      { name: "Subsets", url: "https://leetcode.com/problems/subsets/" },
      { name: "Combination Sum", url: "https://leetcode.com/problems/combination-sum/" },
      { name: "Generate Parentheses", url: "https://leetcode.com/problems/generate-parentheses/" },
      { name: "Word Search", url: "https://leetcode.com/problems/word-search/" },
      { name: "Sudoku Solver", url: "https://leetcode.com/problems/sudoku-solver/" },
      { name: "Letter Combinations of a Phone Number", url: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/" },
      { name: "N-Queens", url: "https://leetcode.com/problems/n-queens/" },
      { name: "Power of n", url: "https://leetcode.com/problems/powx-n/" },
      { name: "Fibonacci (Recursion)", url: "https://leetcode.com/problems/fibonacci-number/" }
    ]
  },
  {
    category: "Trees & Binary Trees",
    problems: [
      { name: "Inorder Traversal", url: "https://leetcode.com/problems/binary-tree-inorder-traversal/" },
      { name: "Preorder Traversal", url: "https://leetcode.com/problems/binary-tree-preorder-traversal/" },
      { name: "Postorder Traversal", url: "https://leetcode.com/problems/binary-tree-postorder-traversal/" },
      { name: "Level Order Traversal", url: "https://leetcode.com/problems/binary-tree-level-order-traversal/" },
      { name: "Maximum Depth of Binary Tree", url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/" },
      { name: "Check if Tree is Balanced", url: "https://leetcode.com/problems/balanced-binary-tree/" },
      { name: "Invert Binary Tree", url: "https://leetcode.com/problems/invert-binary-tree/" },
      { name: "Symmetric Tree", url: "https://leetcode.com/problems/symmetric-tree/" },
      { name: "Lowest Common Ancestor", url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/" },
      { name: "Diameter of Binary Tree", url: "https://leetcode.com/problems/diameter-of-binary-tree/" }
    ]
  },
  {
    category: "Binary Search Tree (BST)",
    problems: [
      { name: "Validate BST", url: "https://leetcode.com/problems/validate-binary-search-tree/" },
      { name: "Search in BST", url: "https://leetcode.com/problems/search-in-a-binary-search-tree/" },
      { name: "Insert into BST", url: "https://leetcode.com/problems/insert-into-a-binary-search-tree/" },
      { name: "Delete Node in BST", url: "https://leetcode.com/problems/delete-node-in-a-bst/" },
      { name: "Kth Smallest Element in BST", url: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/" },
      { name: "Sorted Array to BST", url: "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/" },
      { name: "Trim a BST", url: "https://leetcode.com/problems/trim-a-binary-search-tree/" },
      { name: "LCA in BST", url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/" },
      { name: "Two Sum BST", url: "https://leetcode.com/problems/two-sum-iv-input-is-a-bst/" },
      { name: "BST to Greater Sum Tree", url: "https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/" }
    ]
  }
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProblems = dsaProblems.map(category => ({
    ...category,
    problems: category.problems.filter(problem =>
      problem.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category =>
    category.problems.length > 0 &&
    (!selectedCategory || category.category === selectedCategory)
  );

  const totalProblems = dsaProblems.reduce((sum, cat) => sum + cat.problems.length, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoLTZ2LTZ6TTAgMHY2aDZWMHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>

      <div className="relative">
        <header className="bg-slate-900/50 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl shadow-lg shadow-emerald-500/20">
                <Code2 className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white tracking-tight">Top 100 DSA Problems</h1>
                <p className="text-slate-400 text-sm mt-1">Master data structures and algorithms with curated practice</p>
              </div>
            </div>

            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search problems..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
              />
            </div>

            <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  !selectedCategory
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/30'
                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50'
                }`}
              >
                All ({totalProblems})
              </button>
              {dsaProblems.map(cat => (
                <button
                  key={cat.category}
                  onClick={() => setSelectedCategory(cat.category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                    selectedCategory === cat.category
                      ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/30'
                      : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50'
                  }`}
                >
                  {cat.category} ({cat.problems.length})
                </button>
              ))}
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProblems.map((category, idx) => (
              <div
                key={category.category}
                className="bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 border-b border-slate-700/50 p-4">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-emerald-400" />
                    <h2 className="text-lg font-semibold text-white">{category.category}</h2>
                  </div>
                  <p className="text-slate-400 text-sm mt-1">{category.problems.length} problems</p>
                </div>

                <div className="p-4">
                  <ul className="space-y-2">
                    {category.problems.map((problem, problemIdx) => (
                      <li key={problemIdx}>
                        <a
                          href={problem.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center justify-between p-3 rounded-lg bg-slate-900/40 hover:bg-slate-700/40 border border-slate-700/30 hover:border-emerald-500/50 transition-all duration-200"
                        >
                          <span className="text-slate-200 text-sm font-medium group-hover:text-emerald-400 transition-colors">
                            {problem.name}
                          </span>
                          <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {filteredProblems.length === 0 && (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-800/50 mb-4">
                <Search className="w-8 h-8 text-slate-500" />
              </div>
              <h3 className="text-xl font-semibold text-slate-300 mb-2">No problems found</h3>
              <p className="text-slate-500">Try adjusting your search or filter</p>
            </div>
          )}
        </main>

        <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-8 border-t border-slate-700/50">
          <p className="text-center text-slate-400 text-sm">
            Practice consistently and track your progress. Happy coding!
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
