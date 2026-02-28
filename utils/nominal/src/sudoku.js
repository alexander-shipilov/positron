"use strict";
/* eslint complexity: ["error", 7] */
/**
 * Cell helper
 */
const Cell = {
  /**
   * @param cell
   */
  isSolved(cell) {
    return typeof cell === "number";
  },
  /**
   * @param cell
   */
  isUnsolved(cell) {
    return cell instanceof Set;
  }
};

/**
 * Row, column or box
 */
class SudokuBlock {
  /**
   */
  board;
  /**
   */
  indexes;
  /**
   */
  solved = new Set();

  /**
   * @param board
   * @param indexes
   */
  constructor(board, indexes) {
    this.board = board;
    this.indexes = [...indexes];
    for (const index of this.indexes) {
      const cell = this.board.getCell(index);
      if (Cell.isSolved(cell)) {
        this.markSolved(cell);
      }
    }
  }

  /**
   *
   */
  findSolvable() {
    const solvable = [];
    if (!this.isSolved()) {
      const indexes = new Map();
      for (const index of this.indexes) {
        const cell = this.board.getCell(index);
        if (Cell.isUnsolved(cell)) {
          for (const value of cell) {
            let valueIndexes = indexes.get(value);
            if (valueIndexes == null) {
              valueIndexes = [];
              indexes.set(value, valueIndexes);
            }
            valueIndexes.push(index);
          }
        }
      }
      indexes.forEach((valueIndexes, value) => {
        if (valueIndexes.length === 1) {
          solvable.push([valueIndexes[0], value]);
        }
      });
    }
    return solvable;
  }

  /**
   */
  isSolved() {
    return this.solved.size < this.indexes.length;
  }

  /**
   * @param value
   */
  markSolved(value) {
    this.solved.add(value);
    for (const index of this.indexes) {
      const cell = this.board.getCell(index);
      if (Cell.isUnsolved(cell)) {
        cell.delete(value);
        if (cell.size === 0) {
          throw new SudokuError();
        }
      }
    }
  }
}

/**
 *
 */
class SudokuBoard {
  /**
   * @param boxSize
   * @param cells
   */
  static create(boxSize, cells) {
    return new SudokuBoard(boxSize, cells).reduce();
  }

  /**
   */
  boxes = [];
  /**
   */
  boxSize;
  /**
   */
  cells = [];
  /**
   */
  columns = [];
  /**
   */
  rows = [];
  /**
   */
  size;
  /**
   */
  unsolvedCount = 0;

  /**
   * @param boxSize
   * @param cells
   */
  constructor(boxSize, cells) {
    this.boxSize = boxSize;
    this.size = boxSize ** 2;
    this.initializeCells(cells);
    this.initializeBlocks();
  }

  /**
   *
   */
  copy() {
    return new SudokuBoard(this.boxSize, this.cells);
  }

  /**
   */
  findUnsolved() {
    const unsolved = [];
    if (this.unsolvedCount) {
      for (let i = 0; i < this.cells.length; i++) {
        const cell = this.cells[i];
        if (Cell.isUnsolved(cell)) {
          unsolved.push([i, cell]);
        }
      }
    }
    return unsolved;
  }

  /**
   * @param index
   *
   *
   */
  getCell(index) {
    return this.cells[index];
  }

  /**
   *
   */
  isSolved() {
    return this.unsolvedCount === 0;
  }

  /**
   * @param index
   * @param value
   *
   *
   */
  setCell(index, value) {
    this.setCellValue(index, value);
    this.reduce();
    return this;
  }

  /**
   * @param index
   *
   *
   */
  getBoxIndex(index) {
    return [Math.floor(index / this.boxSize), index % this.boxSize];
  }

  /**
   * @param row
   * @param col
   *
   *
   */
  getCellIndex(row, col) {
    return row * this.size + col;
  }

  /**
   *
   */
  initializeBlocks() {
    for (let i = 0; i < this.size; i++) {
      const { boxSize } = this;
      const [boxRow, boxCol] = this.getBoxIndex(i);
      this.boxes[i] = new SudokuBlock(this, Array.from({ length: this.size }, (_, j) => {
        const [row, col] = this.getBoxIndex(j);
        return this.getCellIndex(boxRow * boxSize + row, boxCol * boxSize + col);
      }));
      this.rows[i] = new SudokuBlock(this, Array.from({ length: this.size }, (_, j) => this.getCellIndex(i, j)));
      this.columns[i] = new SudokuBlock(this, Array.from({ length: this.size }, (_, j) => this.getCellIndex(j, i)));
    }
  }

  /**
   * @param cells
   */
  initializeCells(cells) {
    if (cells.length === this.size ** 2) {
      const values = new Set(Array.from({ length: this.size }, (_, i) => i + 1));
      cells.forEach((value, index) => {
        let cell;
        if (value == null) {
          this.unsolvedCount++;
          cell = new Set(values);
        } else if (Cell.isUnsolved(value)) {
          this.unsolvedCount++;
          cell = new Set(value);
        } else if (values.has(value)) {
          cell = value;
        } else {
          throw new RangeError("Invalid cell value");
        }
        this.cells[index] = cell;
      });
    } else {
      throw new RangeError("Invalid cells count");
    }
  }

  /**
   * @param index
   * @param value
   */
  markSolved(index, value) {
    const row = Math.floor(index / this.size);
    const col = index % this.size;
    const box = Math.floor(row / this.boxSize) * this.boxSize +
      Math.floor(col / this.boxSize);
    this.rows[row].markSolved(value);
    this.columns[col].markSolved(value);
    this.boxes[box].markSolved(value);
  }

  /**
   */
  reduce() {
    let changed;
    if (this.unsolvedCount > 0) {
      do {
        changed = this.reduceCells();
        changed = this.reduceBlocks() || changed;
      } while (changed && this.unsolvedCount > 0);
    }
    return this;
  }

  /**
   */
  reduceBlocks() {
    let changed = false;
    for (const block of [...this.rows, ...this.columns, ...this.boxes]) {
      for (const [index, value] of block.findSolvable()) {
        this.setCell(index, value);
        changed = true;
      }
    }
    return changed;
  }

  /**
   */
  reduceCells() {
    let changed = false;
    for (let i = 0; i < this.cells.length; i++) {
      const cell = this.cells[i];
      if (Cell.isUnsolved(cell) && cell.size === 1) {
        this.setCell(i, [...cell][0]);
        changed = true;
      }
    }
    return changed;
  }

  /**
   * @param index
   * @param value
   */
  setCellValue(index, value) {
    const cell = this.cells[index];
    if (Cell.isUnsolved(cell)) {
      this.cells[index] = value;
      this.unsolvedCount--;
      this.markSolved(index, value);
    } else if (cell !== value) {
      throw new SudokuError(`Cell already solved`);
    }
  }
}

class SudokuError extends RangeError {
}

class SudokuSolver {
  /**
   * @param board
   */
  solve(board) {
    return board.isSolved() ? board : this.solveBoard(board);
  }

  /**
   * @param board
   */
  getCellToSolve(board) {
    let cell = null;
    for (const unsolved of board.findUnsolved()) {
      if (!cell || cell[1].size > unsolved[1].size) {
        cell = unsolved;
        if (cell[1].size === 2) {
          break;
        }
      }
    }
    return cell;
  }

  /**
   * @param board
   */
  solveBoard(board) {
    const cell = this.getCellToSolve(board);
    if (cell) {
      const [index, values] = cell;
      for (const value of values) {
        try {
          const copy = this.solveBoard(board.copy().setCell(index, value));
          if (copy.isSolved()) {
            return copy;
          }
        } catch (error) {
          if (error instanceof SudokuError) {
            continue;
          }
          throw error;
        }
      }
    }
    return board;
  }
}

const BOX_SIZE = 3;
const BLOCK_SIZE = BOX_SIZE ** 2;
const EMPTY = ".";

/**
 * @param board
 * @returns Do not return anything, modify board in-place instead.
 */
function solveSudoku(board) {
  const solver = new SudokuSolver();
  const result = solver.solve(SudokuBoard.create(BOX_SIZE, []
    .concat(...board)
    .map((cell) => (cell === EMPTY ? null : Number(cell)))));

  if (result.isSolved()) {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        const cell = result.getCell(i * BLOCK_SIZE + j);

        board[i][j] = Cell.isSolved(cell) ? String(cell) : EMPTY;
      }
    }
  } else {
    throw new Error("No valid solution found");
  }
}

const board = [
  [".", ".", "9", "7", "4", "8", ".", ".", "."],
  ["7", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", "2", ".", "1", ".", "9", ".", ".", "."],
  [".", ".", "7", ".", ".", ".", "2", "4", "."],
  [".", "6", "4", ".", "1", ".", "5", "9", "."],
  [".", "9", "8", ".", ".", ".", "3", ".", "."],
  [".", ".", ".", "8", ".", "3", ".", "2", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "6"],
  [".", ".", ".", "2", "7", "5", "9", ".", "."]
];
solveSudoku(board);
console.log(board);