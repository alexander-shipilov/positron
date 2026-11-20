#!/usr/bin/env bash
set -euo pipefail

if [ $# -eq 0 ]; then
  echo "Usage: $0 <dir1> [dir2 ...] [-o output_file] [--no-tests|-T]"
  exit 1
fi

OUTPUT_FILE="bundle.txt"
NO_TESTS=false
DIRS=()

while [ $# -gt 0 ]; do
  case "$1" in
    -o|--output)
      OUTPUT_FILE="$2"
      shift 2
      ;;
    -T|--no-tests)
      NO_TESTS=true
      shift
      ;;
    *)
      DIRS+=("$1")
      shift
      ;;
  esac
done

if [ ${#DIRS[@]} -eq 0 ]; then
  echo "Error: At least one directory must be specified." >&2
  exit 1
fi

: > "$OUTPUT_FILE"

for dir in "${DIRS[@]}"; do
  if [ ! -d "$dir" ]; then
    echo "Warning: Directory '$dir' does not exist, skipping." >&2
    continue
  fi

  find "$dir" \
    -type d \( \
      -name "node_modules" -o \
      -name ".git" -o \
      -name ".idea" -o \
      -name ".rush" -o \
      -name ".yarn" -o \
      -name "coverage" -o \
      -name "dist" -o \
      -name "docs" -o \
      -name "lib" -o \
      -name "temp" -o \
      -name "rush-logs" \
    \) -prune -o \
    -type f ! -name "$(basename "$OUTPUT_FILE")" -print | sort | while IFS= read -r file; do

    if [ "$NO_TESTS" = true ]; then
      case "$file" in
        *.spec.ts|*.test.ts|*.fixtures.ts|*.spec.tsx|*.test.tsx)
          continue
          ;;
      esac
    fi

    clean_path="${file#./}"

    {
      echo "// $clean_path"
      cat "$file"
      echo ""
      echo ""
    } >> "$OUTPUT_FILE"
  done
done

echo "Done! All files bundled into '$OUTPUT_FILE'."
