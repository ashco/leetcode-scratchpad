/**
 * @param {character[][]} board
 * @return {boolean}
 */

const validNums = function(range) {
  const nums = range.filter(num => num !== '.');
  const hash = [];

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
  // run validNums on each sub array
  board.forEach((row) => {
    if (!validNums(row)) return false;
  });
  // generate 9 column arrays & run validNums on subArray[0 - 8]
  const colBoard = generateColumns(board);
  colBoard.forEach((col) => {
    if (!validNums(col)) return false;
  });
  // create 9 3x3 grid arrays & run validNums on grid arrays
  const gridBoard = generateGrid(board);
  gridBoard.forEach((grid) => {
    if (!validNums(grid)) return false;
  });

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

// console.log(isValidSudoku(x)); // true
console.log(isValidSudoku(y)); // false
// console.log(validNums(['8', '3', '.', '.', '7', '9', '.', '.', '.'])); // false
