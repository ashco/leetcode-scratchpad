/**
 * @param {character[][]} board
 * @return {boolean}
 */

const validNums = function(range) {
  const hash = [];
  const nums = range.filter(num => num !== '.');

  for (let i = 0; i < nums.length; i += 1) {
    const val = nums[i];
    if (hash[val]) return false;
    hash[val] = true;
  }
  return true;
};

const generateColumns = function(board) {
  const colBoard = [[], [], [], [], [], [], [], [], []];
  board.forEach((row) => {
    row.forEach((char, i) => {
      colBoard[i].push(char);
    });
  });
  return colBoard;
};

const generateGrid = function(board) {
  const gridBoard = [[[], [], []], [[], [], []], [[], [], []]];
  let x;
  let y;
  board.forEach((row, i) => {
    if (i <= 2) {
      y = 0;
    } else if (i <= 5) {
      y = 1;
    } else {
      y = 2;
    }
    row.forEach((char, j) => {
      if (j <= 2) {
        x = 0;
      } else if (j <= 5) {
        x = 1;
      } else {
        x = 2;
      }
      // push char into correct subgrid
      gridBoard[y][x].push(char);
    });
  });
  return [...gridBoard[0], ...gridBoard[1], ...gridBoard[2]];
};

const isValidSudoku = function(board) {
  const colBoard = generateColumns(board);
  const gridBoard = generateGrid(board);

  if (!board.every(validNums)) return false;
  if (!colBoard.every(validNums)) return false;
  if (!gridBoard.every(validNums)) return false;

  return true;
};

const x = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

const y = [
  ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

console.log(isValidSudoku(x)); // true
// console.log(isValidSudoku(y)); // false
// console.log(validNums(['8', '3', '.', '.', '7', '9', '.', '.', '.'])); // false
