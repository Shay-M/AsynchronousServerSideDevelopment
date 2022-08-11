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
  let count = 0;
  let charMap = {};

  for (const char of s) {
    if (charMap[char]) charMap[char]++;
    else charMap[char] = 1;
    if (charMap[char] % 2 === 0) count += 2;
  }
  //   If count is less than given string's length, it means there should be some extra characters pending from which we can take 1 character to make our final string as odd palindrome.
  //   If count and given string's length are same, it means we have taken every character from the given string and have formed an even palindrome string.
  count += count < s.length ? 1 : 0;
  return count;
};

let s = 'abccccdd';
// s = 'bb';

console.log(longestPalindrome(s));
