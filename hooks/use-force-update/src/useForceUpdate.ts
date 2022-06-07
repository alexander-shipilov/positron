import { useState } from "react";

/**
 * Returns a function to force component update.
 */
export function useForceUpdate(): () => void {
  const [, setUpdateCount] = useState(0);

  return () => {
    setUpdateCount(
      (currUpdateCount: number) => ++currUpdateCount % 0xffffffffff
    );
  };
}
