/* Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water),
return the number of islands.
An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
You may assume all four edges of the grid are all surrounded by water. */

// https://leetcode.com/problems/number-of-islands/

/* Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3 */

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let count = 0;

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if (grid[r][c] === '1') {
        count++;
        recurse(grid, r, c);
      }
    }
  }

  function recurse(grid, r, c) {
    if (r < 0 || r >= grid.length || c < 0 || c >= grid[r].length) return;

    // return recurse(grid, r + 1, c) + recurse(grid, r, c + 1);

    if (grid[r][c] === '0') return;

    grid[r][c] = '0';

    recurse(grid, r - 1, c);
    recurse(grid, r, c - 1);
    recurse(grid, r + 1, c);
    recurse(grid, r, c + 1);
  }

  return count;
};

console.log(
  numIslands([
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1'],
  ])
);
