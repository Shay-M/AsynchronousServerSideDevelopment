// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.
// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

// https://leetcode.com/problems/longest-palindrome/

// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  let count = 1;
  let n = 0;
  let oodFlag = 0;

  let tempArray = [];

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++)
      if (s[i] === s[j]) {
        count++;
      }

    if (count % 2 !== 0 && oodFlag < count) oodFlag = count;
    else n += count;

    console.log('count: ' + count);
    console.log('oodFlag: ' + oodFlag);

    count = 1;
  }

  return n + oodFlag;
};

let s = 'abccccdd';
// s = 'bb';

console.log(longestPalindrome(s));
