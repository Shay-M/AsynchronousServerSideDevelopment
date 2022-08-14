/* Given two strings s and t, determine if they are isomorphic.
Two strings s and t are isomorphic if the characters in s can be replaced to get t.
All occurrences of a character must be replaced with another character 
while preserving the order of characters. No two characters may map to the same
character, but a character may map to itself. */

// https://leetcode.com/problems/isomorphic-strings/

/* 
Input: s = "egg", t = "add"
Output: true 
*/

let isIsomorphic = function (s, t) {
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      if (s[i] === s[j] && t[i] !== t[j]) return false;
      else if (t[i] === t[j] && s[i] !== s[j]) return false;
    }
  }
  return true;
};

////////////////////////////////////////////////////////////////

let isIsomorphicMap = function (s, t) {
  let map = new Map(),
    set = new Set();

  for (let i = 0; i < s.length; i++) {
    let schar = s[i],
      tchar = t[i];

    if (map.has(schar)) {
      if (map.get(schar) !== tchar) return false;
    } else {
      if (set.has(tchar)) return false;

      map.set(schar, tchar);
      set.add(tchar);
    }
  }

  return true;
};

/////////////

let s = 'egg';
let t = 'add';

// t = 'ada';

console.log(isIsomorphic(s, t));
