/* Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
A subsequence of a string is a new string that is formed from the original string by
deleting some (can be none) of the characters without disturbing the relative positions
of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
*/

let isSubsequence = function (s, t) {
  let i = 0;

  for (let j = 0; j < t.length; j++) {
    if (s[i] === t[j]) i++;
  }

  return i == s.length;
};

let s = 'abc';
let t = 'ahbgdc';

console.log(isSubsequence(s, t));

ss = 'axc';
tt = 'ahbgdc';

console.log(isSubsequence(ss, tt));

console.log(isSubsequence('acb', 'ahbgdc'));
