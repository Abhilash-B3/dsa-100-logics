// ...existing code...
import React, { useState } from "react";
import { BookOpen, Code2, ChevronRight } from "lucide-react";

type Problem = { name: string; url: string };
type ProblemCategory = { category: string; problems: Problem[] };
type Note = { name: string; url: string };
type NoteCategory = { category: string; notes: Note[] };

const dsaProblems: ProblemCategory[] = [
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

const notesData: NoteCategory[] = [
  {
    category: "Java",
    notes: [
      { name: "Java Notes", url: "https://drive.google.com/file/d/1cU3ou9sEiKjKd4EGbS7ySlnyakUv1vkE/view?usp=drive_link" },
      { name: "Java Handwritten Notes", url: "https://drive.google.com/file/d/1sgPGRwbD1KVtLGepmszRVvLnjG_LHQoa/view?usp=drive_link" },
      { name: "Java Interview Questions", url: "https://drive.google.com/file/d/1d54zFQfSkFlqHNQkFtqB1Ei_Qo44tWpT/view?usp=drive_link" },
      { name: "Java Collection Framework", url: "https://drive.google.com/file/d/1KQ987PfNuvBflQ7m0wf_T1YCkSQRyTqg/view?usp=drive_link" },
      { name: "Core Java ", url: "https://drive.google.com/file/d/1mEn6anErtC2bANH_hhxCK4Ai3sEcXUcQ/view?usp=drive_link" },
      { name: "Java Handwritten Notes", url: "https://drive.google.com/file/d/1swMFaV1QnYE2J6J3LhCRhx7BNRMcfuVY/view?usp=drive_link" },
      { name: "HCL Java Questions ", url: "https://drive.google.com/file/d/1W9dPMagcoEhH0T7Ffmyi6ehEC1SHjH2T/view?usp=drive_link" }
    ]
  },
  {
    category: "Python",
    notes: [
      { name: "Python Notes", url: "https://drive.google.com/file/d/1anu_hPYy57c3T4lQyd4N3_-K8U0I3vDT/view?usp=drive_link" },
      { name: "Python Notes", url: "https://drive.google.com/file/d/1u4IDS_EzR-567GT9-GuF-4t1fgRpEAd8/view?usp=drive_link" },
      { name: "Python With Examples", url: "https://drive.google.com/file/d/1XacrH62iTOSbxLiYEo8DbmHGforoA2yo/view?usp=drive_link" },
      { name: "Python HandWritten Notes", url: "https://drive.google.com/file/d/1o3i1qusTa9NoyG4IkIksCrSruwnpNzsV/view?usp=drive_link" },
      { name: "Python 101 Programs", url: "https://drive.google.com/file/d/1f57IlKe4UYI3DAdRPRwm7RmQG1zL5cqz/view?usp=drive_link" }
    ]
  },
  {
    category: "Full Stack Development",
    notes: [
      { name: "JavaScript Notes", url: "https://drive.google.com/file/d/1XHWkgGjmvnoBQEMmCMlU9D5R4hKRncE1/view?usp=drive_link" },
      { name: "JavaScript HandWritten Notes", url: "https://drive.google.com/file/d/1Bwb6b4B0Km4sXZiicVI9aqDz84ObXNLj/view?usp=drive_link" },
      { name: "React.js Notes", url: "https://drive.google.com/file/d/1gjS-xVjuRlla_NdEnK1JECyyOV1ePrjw/view?usp=drive_link" },
      { name: "BackEnd Interview QA", url: "https://drive.google.com/file/d/1lcQU_sWyND6iOjuIOkOw4KKZVctJeWOE/view?usp=drive_link" },
      { name: "React.js HandWritten Notes", url: "https://drive.google.com/file/d/1r4XyVLKXBiOTQ6mNByCnAS0qjTgIw-KQ/view?usp=drive_link" },
      { name: "BackEnd HandWritten Notes", url: "https://drive.google.com/file/d/10GVGKWUpAQeTLpJieeezXOaYDcGbjWgm/view?usp=drive_link" },
      { name: "MERN Stack HandWritten Notes", url: "https://drive.google.com/file/d/1Zsk_K2p13kmxPGUHd0c7fFOiLDD_Izik/view?usp=drive_link" },
      { name: "Java Full Stack Interview QA", url: "https://drive.google.com/file/d/1u3bgtoq_f6CICw-HMBgwOofP-eeFinH1/view?usp=drive_link" },
      { name: "Java with Spring and SpringBoot", url: "https://drive.google.com/file/d/14RePIxL-EMfDK3pcc9p70pgecQyyrINS/view?usp=drive_link" },
      { name: "Spring Boot Notes", url: "https://drive.google.com/file/d/1qtmV--WQYbo17hv9jGx86sajl56Hp4zQ/view?usp=drive_link" },
      { name: "Spring & SpringBoot Annotations", url: "https://drive.google.com/file/d/1gvuwa_gX_sl7lvCX6ROFTviVKxM-aayC/view?usp=drive_link" }
    ]
  },
  {
    category: "SQL",
    notes: [
      { name: "SQL Notes", url: "https://drive.google.com/file/d/1GjV1OitZOwcNgMmFgtq13niBqrDU7lfc/view?usp=drive_link" },
      { name: "SQL HandWritten Notes", url: "https://drive.google.com/file/d/1F_DL9UF7HUzb-UHovstyBUDA4DUR398C/view?usp=drive_link" },
      { name: "SQL Interview Questions", url: "https://drive.google.com/file/d/1qRi6_35alnPBbE6rqWM9-kCzSvg1mXJZ/view?usp=drive_link" },
      { name: "SQL CheatSheet 1 Page", url: "https://drive.google.com/file/d/1kjiXIRyAvL5VfHyleo0LuucZAQmRTpOl/view?usp=drive_link" }
    ]
  },
  {
    category: "Technical Interviews",
    notes: [
      { name: "Technical Interviews Prep", url: "https://drive.google.com/file/d/1eTcMvlRVePtozv0KIxWGynxa_hNwPUiv/view?usp=drive_link" },
      { name: "Technical Interviews Prep1", url: "https://drive.google.com/file/d/1CKR6LrnVOqwKE5gODhQ9aExjbLcLSVHe/view?usp=drive_link" },
      { name: "Java Full Stack Interview QA", url: "https://drive.google.com/file/d/1u3bgtoq_f6CICw-HMBgwOofP-eeFinH1/view?usp=drive_link" },
      { name: "150 Java QA", url: "https://drive.google.com/file/d/1Jav70TURVhMQEpryf-1mjgp0j55EObp9/view?usp=drive_link" },
      { name: "Java QA", url: "https://drive.google.com/file/d/1ArJPWx1H60ZY5vowBm-MyYD92nt6Re1f/view?usp=drive_link" },
      { name: "FrontEnd INterview QA", url: "https://drive.google.com/file/d/1uBfnXdnNZSSf9FGKh-A6smLvHoEr_M2L/view?usp=drive_link" },
      { name: "Python Programs", url: "https://drive.google.com/file/d/1f9zlJGFGcLYDR0fYxv7yP_R-YFU5iPp2/view?usp=drive_link" },
      { name: "Python Technical QA", url: "https://drive.google.com/file/d/1YmLj-OLs8mGoVIHORjOZBpEBK0-ghyiZ/view?usp=drive_link" },
      { name: "Python Interview QA", url: "https://drive.google.com/file/d/1QG0swkOfE4xi4-9PdJR8h_3FKnDrTKZx/view?usp=drive_link" },
      { name: "Python Codes Cheatsheet", url: "https://drive.google.com/file/d/13cLOpZws4BqY5xUriQRI41ZtkwKSIfdq/view?usp=drive_link" }
    ]
  },
  {
    category: "DSA",
    notes: [
      { name: "DSA Notes", url: "https://drive.google.com/file/d/1vFJd4TF0fB30bsyj6VZ-za4JsfthKJvF/view?usp=drive_link" },
      { name: "LeetCode Problems with Solutions", url: "https://drive.google.com/file/d/13PJ-ueL-T8ct9HxnNZbqLD6rmYSvFCWO/view?usp=drive_link" },
      { name: "Strivers DSA Part-1", url: "https://drive.google.com/file/d/13l5Z1OfA71qyK0jE3rUHVflb2wSDSfdL/view?usp=drive_link" },
      { name: "Strivers DSA Part-2", url: "https://drive.google.com/file/d/1eocDDHSEG7ApyYnXQv0xnYdmxpfsXuks/view?usp=drive_link" },
      { name: "DSA Algorithms", url: "https://drive.google.com/file/d/1dTECRox-WV0cY3UeNVPnJgXHdagBD3hG/view?usp=drive_link" },
      { name: "DSA LeetCode Topic-Wise", url: "https://drive.google.com/file/d/1iL7jgEjEV-dkN1aHcIO75K1mtgUic3la/view?usp=drive_link" },
      { name: "Strivers SDE Sheet", url: "https://drive.google.com/file/d/1e7nl_jI6ItkA2RelMFqKPRIjdKcJS82_/view?usp=drive_link" },
      { name: "DSA RoadMap Topic-wise", url: "https://drive.google.com/file/d/1QGhE8OfmcQS4Ab6fwKpobTnA4qQrnxgl/view?usp=drive_link" }
    ]
  }
];

export default function App(): JSX.Element {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedNotesCategory, setSelectedNotesCategory] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"home" | "dsa">("home");

  const totalProblems = dsaProblems.reduce((sum, c) => sum + c.problems.length, 0);
  const selectedNotes = notesData.find((n) => n.category === selectedNotesCategory)?.notes || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoLTZ2LTZ6TTAgMHY2aDZWMHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>

      <div className="relative">
        <header className="bg-slate-900 border-b border-slate-700 sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl shadow-lg shadow-emerald-500/20">
                <Code2 className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white tracking-tight">CodePath</h1>
                <p className="text-slate-400 text-sm mt-1">Improve skills, practice problems and prepare for interviews</p>
              </div>
            </div>

            <div className="flex gap-2 mb-4">
              <button
                onClick={() => { setViewMode("home"); setSelectedNotesCategory(null); setSelectedCategory(null); }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${viewMode === "home" ? "bg-emerald-600 text-white" : "bg-slate-800/50 text-slate-300"}`}
              >
                Home
              </button>
              <button
                onClick={() => { setViewMode("dsa"); setSelectedCategory(null); setSelectedNotesCategory(null); }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${viewMode === "dsa" ? "bg-emerald-600 text-white" : "bg-slate-800/50 text-slate-300"}`}
              >
                DSA Practice
              </button>
            </div>

            {viewMode === "dsa" && (
              <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${!selectedCategory ? "bg-emerald-600 text-white" : "bg-slate-800/50 text-slate-300"}`}
                >
                  All ({totalProblems})
                </button>
                {dsaProblems.map((cat) => (
                  <button
                    key={cat.category}
                    onClick={() => setSelectedCategory(cat.category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium ${selectedCategory === cat.category ? "bg-emerald-600 text-white" : "bg-slate-800/50 text-slate-300"}`}
                  >
                    {cat.category} ({cat.problems.length})
                  </button>
                ))}
              </div>
            )}
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {viewMode === "dsa" ? (
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-white">DSA Practice</h2>
                <p className="text-sm text-slate-400">All practice problems grouped by category</p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {dsaProblems.map((category, index) => (
                  <div key={category.category} className="bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden transition-all duration-300">
                    <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 border-b border-slate-700/50 p-4">
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-emerald-400" />
                        <h3 className="text-lg font-semibold text-white">{category.category}</h3>
                      </div>
                      <p className="text-slate-400 text-sm mt-1">{category.problems.length} problems</p>
                    </div>

                    <div className="p-4">
                      <ul className="space-y-2">
                        {category.problems.map((problem) => (
                          <li key={problem.url}>
                            <a
                              href={problem.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group flex items-center justify-between p-3 rounded-lg bg-slate-900/40 hover:bg-slate-700/40 border border-slate-700/30 transition-all"
                            >
                              <span className="text-slate-200 text-sm font-medium group-hover:text-emerald-400">{problem.name}</span>
                              <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400" />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ) : (
            <section>
              {selectedNotesCategory ? (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-semibold text-white">{selectedNotesCategory} Notes</h2>
                    <div className="flex items-center gap-2">
                      <button onClick={() => setSelectedNotesCategory(null)} className="px-3 py-1 rounded bg-slate-800/50 text-slate-200">Back</button>
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {selectedNotes.map((note) => (
                      <div key={note.url} className="bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden transition-all duration-300">
                        <div className="p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="text-sm font-medium text-slate-200">{note.name}</h3>
                              <p className="text-xs text-slate-400 mt-1">{selectedNotesCategory}</p>
                            </div>
                            <a href={note.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-600 text-white text-sm">View</a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div>
                  <div className="mb-8">
                    <div className="bg-slate-800 rounded-2xl p-8 mb-6 text-center ">
                      <h1 className="text-2xl font-semibold text-white mb-3" >Your one-stop hub for Learning Programming, interview prep, and DSA practice.</h1>
                      <h3 className="text-2xl font-semibold text-white mb-3">From fundamentals to job-ready - your journey starts here.</h3>
                      <h3 className="text-2xl font-semibold text-white mb-3">Build skills with clarity. Crack interviews with confidence.</h3>
                      <h3 className="text-2xl font-semibold text-white mb-3">Code better. Think smarter. Perform stronger.</h3>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                      {notesData.map((n) => (
                        <div key={n.category} className="bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden transition-all duration-300">
                          <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 border-b border-slate-700/50 p-4">
                            <div className="flex items-center gap-2">
                              <BookOpen className="w-5 h-5 text-emerald-400" />
                              <h3 className="text-lg font-semibold text-white">{n.category}</h3>
                            </div>
                            <p className="text-slate-400 text-sm mt-1">{n.notes.length} notes</p>
                          </div>

                          <div className="p-4">
                            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900/40 border border-slate-700/30">
                              <span className="text-slate-200 text-sm font-medium">Overview</span>
                              <button onClick={() => setSelectedNotesCategory(n.category)} className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-600 text-white text-sm">Open</button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </section>
          )}
        </main>

        <footer className="bg-slate-900 border-t border-slate-700 mt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <p className="text-center text-slate-400 text-sm">Practice consistently and track your progress. Happy coding!</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
// ...existing code...
