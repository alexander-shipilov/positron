/* eslint complexity: ["error", 7] */

/**
 * Type alias for Sudoku cell values.
 * Values range from 0 to (size-1), where size is typically 9 for standard
 * Sudoku. Negative values represent unsolved cells with bitmasks of candidates.
 */
type SudokuValue = number;

/**
 * Counts the number of trailing zeros in a 32-bit integer (count trailing
 * zeros). Used to find the position of the least significant set bit.
 *
 * @param n - Number to count trailing zeros in
 *
 * @returns Number of trailing zeros (0-31)
 */
function ctz(n: number): number {
  return Math.clz32(n) ^ 31;
}

/**
 * Counts the number of set bits in a number (population count/popcount)
 * Uses the Hamming weight algorithm optimized for 32-bit integers.
 *
 * @param n - Number to count bits in
 *
 * @returns Number of set bits in the number (0-32)
 */
function popcount(n: number): number {
  let x = n;

  x = x - ((x >> 1) & 0x55555555);
  x = (x & 0x33333333) + ((x >> 2) & 0x33333333);

  return (((x + (x >> 4)) & 0xf0f0f0f) * 0x1010101) >> 24;
}

/**
 * Utility object providing helper functions for working with Sudoku cell values
 * Provides type guards and operations for both solved and unsolved cells.
 */
const SudokuValue = {
  /**
   * Converts a bitmask to an array of candidate values (indices of set bits)
   *
   * @param value - Bitmask where each bit represents a possible value (1-30)
   *
   * @returns Array of numbers corresponding to set bits (candidates)
   */
  values(value: SudokuValue): SudokuValue[] {
    const values = [];
    let current = value & ((1 << 30) - 1);

    while (current !== 0) {
      const bit = current & -current; // Extract lowest set bit

      values.push(ctz(bit)); // Get position of the bit (0-indexed)
      current = current ^ bit; // Clear the bit
    }

    return values;
  },

  /**
   * Type guard that checks if a cell is solved (i.e., contains a single
   * number)
   *
   * @param cell - The cell to check
   *
   * @returns `true` if the cell is a non-negative number (solved), `false`
   *   otherwise
   */
  isSolved(cell: SudokuValue): boolean {
    return cell >= 0;
  },

  /**
   * Type guard that checks if a cell is unsolved (i.e., contains a bitmask of
   * candidates)
   *
   * @param cell - The cell to check
   *
   * @returns `true` if the cell is negative (bitmask with high bit set),
   *   `false` otherwise
   */
  isUnsolved(cell: SudokuValue): boolean {
    return cell < 0;
  },
};

/**
 * Main class representing a Sudoku board.
 * Manages all cells and units (rows, columns, boxes) of the puzzle.
 * Uses bitmask representation for unsolved cells to optimize operations.
 */
class SudokuBoard {
  /**
   * Factory method to create and immediately reduce a Sudoku board.
   * Applies logical solving techniques to simplify the board immediately.
   *
   * @param boxSize - Size of one small box (e.g., 3 for standard 9x9 Sudoku)
   * @param cells - Initial board state with `null` for empty cells
   *
   * @returns A new, reduced SudokuBoard instance
   */
  static create(boxSize: number, cells: (SudokuValue | null)[]): SudokuBoard {
    return new SudokuBoard(boxSize, cells).reduce();
  }

  /**
   * Array of all box units (sub-squares) in the board
   */
  protected readonly boxes: SudokuUnit[] = [];

  /**
   * Size of one small box (e.g., 3 for standard 9x9 Sudoku)
   */
  protected readonly boxSize: number;

  /**
   * All cells in the board, either solved (number) or unsolved (bitmask of
   * candidates). Negative values indicate unsolved cells with bit 31 set as a
   * flag.
   */
  protected readonly cells: SudokuValue[] = [];

  /**
   * Array of all column units in the board
   */
  protected readonly columns: SudokuUnit[] = [];

  /**
   * Array of all row units in the board
   */
  protected readonly rows: SudokuUnit[] = [];

  /**
   * Full size of the board (boxSize²)
   */
  protected readonly size: number;

  /**
   * Counter of unsolved cells (cells with bitmasks of candidates)
   */
  protected unsolvedCount: number = 0;

  /**
   * Protected constructor - use SudokuBoard.create() instead.
   * Validates board size and initializes cells and units.
   *
   * @param boxSize - Size of one small box
   * @param values - Initial board state
   *
   * @throws {RangeError} If board size exceeds 30x30
   */
  protected constructor(boxSize: number, values: (SudokuValue | null)[]) {
    const size = boxSize ** 2;

    // Prevent boards larger than 30x30 due to bitmask limitations
    // JavaScript bitwise operations work on 32-bit integers
    if (size > 30) {
      throw new RangeError("Invalid board size");
    }

    this.boxSize = boxSize;
    this.size = size;

    this.initializeCells(values);
    this.initializeUnits();
  }

  /**
   * Creates a deep copy of the board with identical state.
   * Useful for backtracking algorithms.
   *
   * @returns A new SudokuBoard instance with the same state
   */
  copy(): SudokuBoard {
    const copy = Object.create(this) as SudokuBoard;
    const cells = Object.create(this.cells) as SudokuValue[];

    const copyUnit = (unit: SudokuUnit) =>
      Object.assign(Object.create(unit), { cells }) as SudokuUnit;

    Object.assign(copy, {
      cells,
      rows: this.rows.map(copyUnit),
      columns: this.columns.map(copyUnit),
      boxes: this.boxes.map(copyUnit),
    });

    return copy;
    // return new SudokuBoard(this.boxSize, this.cells);
  }

  /**
   * Generator that yields all unsolved cells with their candidate bitmasks.
   * Useful for implementing Minimum Remaining Values (MRV) heuristic.
   *
   * @yields Pairs of [cellIndex, candidatesBitmask] for each unsolved cell
   */
  *findUnsolved(): Generator<[number, SudokuValue]> {
    if (!this.isSolved()) {
      for (let i = 0; i < this.cells.length; i++) {
        const cell = this.cells[i];

        if (SudokuValue.isUnsolved(cell)) {
          yield [i, cell];
        }
      }
    }
  }

  /**
   * Gets a cell value by its index in the flat array representation.
   *
   * @param index - Cell index (0 to size²-1)
   *
   * @returns The cell (either a solved value or a bitmask of candidates)
   */
  getCell(index: number): SudokuValue {
    return this.cells[index];
  }

  /**
   * Checks if the board is completely solved (no unsolved cells remain).
   *
   * @returns `true` if all cells are solved, `false` otherwise
   */
  isSolved(): boolean {
    return this.unsolvedCount === 0;
  }

  /**
   * Sets a cell to a specific value and immediately reduces the board.
   * Applies constraint propagation after setting the value.
   *
   * @param index - Cell index to update
   * @param value - Value to set (0 to size-1)
   *
   * @returns The board instance for chaining
   */
  setCell(index: number, value: SudokuValue): this {
    this.setCellValue(index, value);
    this.reduce();

    return this;
  }

  /**
   * Creates a box unit (sub-square) for the given box index.
   *
   * @param index - Box index (0 to size-1)
   *
   * @returns A new SudokuUnit representing the 3x3 box
   */
  protected createBox(index: number): SudokuUnit {
    const { boxSize } = this;

    // Calculate top-left position of the box
    const boxRow = ((index / boxSize) | 0) * boxSize;
    const boxCol = (index % boxSize) * boxSize;

    const indexes: number[] = [];

    // Collect all cell indices within this box
    for (let row = 0; row < boxSize; row++) {
      for (let col = 0; col < boxSize; col++) {
        indexes.push(this.getCellIndex(boxRow + row, boxCol + col));
      }
    }

    return new SudokuUnit(this.cells, indexes);
  }

  /**
   * Creates a column unit for the given column index.
   *
   * @param index - Column index (0 to size-1)
   * @returns A new SudokuUnit representing the column
   */
  protected createColumn(index: number): SudokuUnit {
    const indexes: number[] = [];

    for (let row = 0; row < this.size; row++) {
      indexes.push(this.getCellIndex(row, index));
    }

    return new SudokuUnit(this.cells, indexes);
  }

  /**
   * Creates a row unit for the given row index.
   *
   * @param index - Row index (0 to size-1)
   * @returns A new SudokuUnit representing the row
   */
  protected createRow(index: number): SudokuUnit {
    const indexes: number[] = [];

    for (let col = 0; col < this.size; col++) {
      indexes.push(this.getCellIndex(index, col));
    }

    return new SudokuUnit(this.cells, indexes);
  }

  /**
   * Converts row and column coordinates to a linear cell index.
   *
   * @param row - Row coordinate (0 to size-1)
   * @param col - Column coordinate (0 to size-1)
   *
   * @returns Cell index in the flat array (0 to size²-1)
   */
  protected getCellIndex(row: number, col: number): number {
    return row * this.size + col;
  }

  /**
   * Initializes cells from the input array, converting nulls to candidate
   * bitmasks. Sets bit 31 as a flag to indicate unsolved cells.
   *
   * @param values - Initial board state with `null` for empty cells
   *
   * @throws {RangeError} If cells count doesn't match board size or values are
   *   invalid
   */
  protected initializeCells(values: (SudokuValue | null)[]) {
    if (values.length === this.size ** 2) {
      // Create a bitmask of all possible values [0, 1, ..., size-1]
      // with bit 31 set
      const possibleValues = ((1 << this.size) - 1) | (1 << 31);

      for (let index = 0; index < values.length; index++) {
        const value = values[index];
        let cell;

        if (value == null) {
          this.unsolvedCount++;
          cell = possibleValues;
        } else if (SudokuValue.isUnsolved(value)) {
          this.unsolvedCount++;
          cell = value;
        } else if (value >= 0 && value < this.size) {
          // Solved cell with valid value
          cell = value;
        } else {
          throw new RangeError("Invalid cell value");
        }

        this.cells[index] = cell;
      }
    } else {
      throw new RangeError("Invalid cells count");
    }
  }

  /**
   * Initializes all units (rows, columns, boxes) for the board.
   * Each unit tracks solved values within its cells.
   */
  protected initializeUnits() {
    for (let index = 0; index < this.size; index++) {
      this.boxes.push(this.createBox(index));
      this.rows.push(this.createRow(index));
      this.columns.push(this.createColumn(index));
    }
  }

  /**
   * Marks a value as solved in all units containing the specified cell.
   * Updates row, column, and box units to eliminate the value from candidates.
   *
   * @param index - Cell index where value was solved
   * @param value - The solved value (0 to size-1)
   */
  protected markSolved(index: number, value: SudokuValue) {
    const { boxSize, size } = this;

    // Calculate row, column, and box indices from cell index
    const row = (index / size) | 0;
    const col = index % size;
    const box = ((row / boxSize) | 0) * boxSize + ((col / boxSize) | 0);

    // Update all units containing this cell
    this.rows[row].markSolved(value);
    this.columns[col].markSolved(value);
    this.boxes[box].markSolved(value);
  }

  /**
   * Reduces the board by applying logical solving techniques until no more
   * progress can be made. Applies naked singles and hidden singles repeatedly.
   *
   * @returns The board instance for chaining
   */
  protected reduce(): this {
    let changed;

    if (this.unsolvedCount > 0) {
      do {
        // Apply basic elimination (naked singles)
        changed = this.reduceNakedSingles();
        // Apply hidden singles technique
        changed = this.reduceHiddenSingles() || changed;
      } while (changed && this.unsolvedCount > 0);
    }

    return this;
  }

  /**
   * Reduces the board by finding hidden singles in all units.
   * A hidden single occurs when a value appears in only one cell's candidates
   * within a unit.
   *
   * @returns `true` if any cell was solved, `false` otherwise
   */
  protected reduceHiddenSingles() {
    let changed = false;

    // Check all rows, columns, and boxes for hidden singles
    for (const units of [this.rows, this.columns, this.boxes]) {
      for (const unit of units) {
        for (const [index, value] of unit.findHiddenSingles()) {
          this.setCellValue(index, value);
          changed = true;
        }
      }
    }

    return changed;
  }

  /**
   * Reduces the board by solving cells with only one candidate (naked singles).
   * Checks each unsolved cell for a single remaining candidate.
   *
   * @returns `true` if any cell was solved, `false` otherwise
   */
  protected reduceNakedSingles() {
    let changed = false;

    for (let i = 0; i < this.cells.length; i++) {
      const cell = this.cells[i];

      // If a cell has exactly one candidate (bit 31 is the only difference),
      // solve it
      if (SudokuValue.isUnsolved(cell) && (cell ^ (cell & -cell)) === 1 << 31) {
        this.setCellValue(i, ctz(cell & -cell));
        // Get the position of the single candidate
        changed = true;
      }
    }

    return changed;
  }

  /**
   * Sets a cell to a specific value and updates board state.
   * Validates that the cell isn't already solved with a different value.
   *
   * @param index - Cell index to update
   * @param value - Value to set (0 to size-1)
   *
   * @throws {SudokuError} If trying to change an already solved cell
   */
  protected setCellValue(index: number, value: SudokuValue) {
    const cell = this.cells[index];

    if (SudokuValue.isUnsolved(cell)) {
      // Replace bitmask with the solved value
      this.cells[index] = value;
      this.unsolvedCount--;

      // Update all affected units
      this.markSolved(index, value);
    } else if (cell !== value) {
      // Trying to change an already solved cell to a different value
      throw new SudokuError(`Cell already solved`);
    }
  }
}

/**
 * Custom error class for Sudoku-specific errors.
 * Used for invalid puzzles, illegal moves, or contradictions.
 */
class SudokuError extends RangeError {}

/**
 * Sudoku solver that uses backtracking with constraint propagation.
 * Implements a recursive depth-first search with pruning using Minimum
 * Remaining Values heuristic.
 */
class SudokuSolver {
  /**
   * Main solving entry point. Solves the board if possible.
   *
   * @param board - The Sudoku board to solve
   *
   * @returns Solved board if possible, otherwise the best attempt
   */
  solve(board: SudokuBoard) {
    return board.isSolved() ? board : this.solveWithBacktracking(board);
  }

  /**
   * Selects the most promising unsolved cell for branching.
   * Uses the Minimum Remaining Values (MRV) heuristic to minimize branching
   * factor.
   *
   * @param board - The current board state
   *
   * @returns The cell with the fewest candidates, or `null` if all cells are
   *   solved
   */
  protected getCellForBacktracking(
    board: SudokuBoard,
  ): [number, SudokuValue] | null {
    let cell = null;

    // Find the unsolved cell with the fewest candidates
    for (const unsolved of board.findUnsolved()) {
      if (!cell || popcount(cell[1]) > popcount(unsolved[1])) {
        cell = unsolved;

        // Early exit if we found a cell with only 2 candidates (optimal for
        // branching)
        if (popcount(cell[1] & ((1 << 30) - 1)) === 2) {
          break;
        }
      }
    }

    return cell;
  }

  /**
   * Recursive backtracking solver with constraint propagation.
   * Tries candidate values in the cell with fewest remaining possibilities.
   *
   * @param board - The current board state
   *
   * @returns The solved board, or the input board if no solution found
   */
  protected solveWithBacktracking(board: SudokuBoard): SudokuBoard {
    const cell = this.getCellForBacktracking(board);

    if (cell) {
      const [index, values] = cell;

      // Try each candidate value in the selected cell
      for (const value of SudokuValue.values(values)) {
        try {
          // Create a copy, set the value, and recursively solve
          const copy = this.solveWithBacktracking(
            board.copy().setCell(index, value),
          );

          if (copy.isSolved()) {
            return copy;
          }
        } catch (error) {
          // If this branch leads to contradiction, try next value
          if (error instanceof SudokuError) {
            continue;
          }

          // Re-throw unexpected errors
          throw error;
        }
      }
    }

    // Return current board (maybe solved or unsolved)
    return board;
  }
}

/**
 * Represents a logical unit in Sudoku: a row, column, or box.
 * Tracks which values are already solved within the unit to help eliminate
 * candidates.
 */
class SudokuUnit {
  /**
   * Reference to all cells in the Sudoku board (shared array)
   */
  protected readonly cells: SudokuValue[];

  /**
   * Array of indices within the `cells` array that belong to this unit
   */
  protected readonly indexes: number[];

  /**
   * Bitmask tracking which values are already solved in this unit.
   * Each bit represents a value (0 to size-1), where 1 means the value is
   * present.
   */
  protected solvedMask: number = 0;

  /**
   * Creates a new SudokuUnit. Initializes the solved mask from already solved
   * cells.
   *
   * @param cells - Reference to all cells in the board
   * @param indexes - Indices of cells that belong to this unit
   */
  constructor(cells: SudokuValue[], indexes: number[]) {
    this.cells = cells;
    this.indexes = indexes;

    // Initialize solved mask by checking already solved cells in this unit
    for (const index of this.indexes) {
      const cell = this.cells[index];

      if (SudokuValue.isSolved(cell)) {
        this.markSolved(cell);
      }
    }
  }

  /**
   * Finds cells that can be solved using the "hidden single" technique.
   * A hidden single occurs when a value appears in only one cell's candidates
   * within this unit.
   *
   * @yields Pairs of [cellIndex, value] that can be immediately solved
   */
  *findHiddenSingles(): Generator<[number, SudokuValue]> {
    // Check each unsolved value in this unit
    for (const value of this.getUnsolved()) {
      const indexes = [];

      // Find all cells in this unit that could contain this value
      for (const index of this.indexes) {
        const cell = this.cells[index];

        if (SudokuValue.isUnsolved(cell) && cell & (1 << value)) {
          indexes.push(index);

          // Early exit if we found more than one candidate cell
          if (indexes.length > 1) {
            break;
          }
        }
      }

      // If exactly one cell can contain this value, we found a hidden single
      if (indexes.length === 1) {
        yield [indexes[0], value];
      }
    }
  }

  /**
   * Checks if this unit is completely solved (all values 0 to size-1 are
   * present).
   *
   * @returns `true` if all values 0..(size-1) are present in this unit
   */
  isSolved() {
    // Create a mask where all bits for our size are set to 1
    // Example for size=9: (1 << 9) - 1 = 0b111111111
    return this.solvedMask === (1 << this.indexes.length) - 1;
  }

  /**
   * Marks a value as solved in this unit and removes it from candidates in all
   * cells. Updates the solved mask and eliminates the value from candidate
   * bitmasks.
   *
   * @param value - The value that has been solved (0 to size-1)
   *
   * @throws {SudokuError} If eliminating the value leaves a cell with no
   *   candidates
   */
  markSolved(value: SudokuValue) {
    // Set the bit for this value in the solved mask
    this.solvedMask |= 1 << value;

    // Remove this value from candidate bitmasks of all unsolved cells in this
    // unit
    for (const index of this.indexes) {
      const cell = this.cells[index];

      if (SudokuValue.isUnsolved(cell) && (cell & (1 << value)) !== 0) {
        // Clear the bit for this value and preserve the unsolved flag (bit 31)
        const nextCell = (cell & (((1 << 30) - 1) ^ (1 << value))) | (1 << 31);

        if (nextCell !== 1 << 31) {
          this.cells[index] = nextCell;
        } else {
          // If a cell has no candidates left (only bit 31 set), the puzzle is
          // invalid
          throw new SudokuError("Invalid cell");
        }
      }
    }
  }

  /**
   * Gets all values that are not yet solved in this unit.
   * Returns values in descending order for optimization.
   *
   * @returns Array of values that are still missing from this unit
   */
  protected getUnsolved(): SudokuValue[] {
    const unsolved: SudokuValue[] = [];

    if (!this.isSolved()) {
      // Check each possible value (from size-1 down to 0)
      for (let value = this.indexes.length - 1; value >= 0; value--) {
        // If the bit for this value is not set in solved mask, it's unsolved
        if ((this.solvedMask & (1 << value)) === 0) {
          unsolved.push(value);
        }
      }
    }

    return unsolved;
  }
}

// Constants for standard 9x9 Sudoku
const BOX_SIZE = 3;
const BLOCK_SIZE = BOX_SIZE ** 2; // 9
const EMPTY = ".";

/**
 * Creates a SudokuBoard from a 2D string array representation.
 * Converts character '1'-'9' to numbers 0-8, and '.' to null.
 *
 * @param board - 2D string array where '.' represents empty cells
 *
 * @returns A new SudokuBoard instance with the given initial state
 */
function createBoard(board: string[][]): SudokuBoard {
  const values = [];

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const cell = board[i][j];

      // Convert '1' -> 0, '2' -> 1, ..., '9' -> 8
      values.push(cell === EMPTY ? null : cell.charCodeAt(0) - 49);
    }
  }

  return SudokuBoard.create(BOX_SIZE, values);
}

/**
 * @param board - 2D string array to solve (modified in-place)
 *
 * @returns Do not return anything, modify board in-place instead.
 * @throws {Error} If no valid solution is found
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function solveSudoku(board: string[][]): void {
  const solver = new SudokuSolver();
  const result = solver.solve(createBoard(board));

  if (result.isSolved()) {
    // Convert the solved board back to string representation
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        const cell = result.getCell(i * BLOCK_SIZE + j);

        // Convert 0->'1', 1->'2', ..., 8->'9'
        board[i][j] = SudokuValue.isSolved(cell) ? String(cell + 1) : EMPTY;
      }
    }
  } else {
    throw new Error("No valid solution found");
  }
}
