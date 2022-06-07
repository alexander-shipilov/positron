import type { RefObject } from "react";
import { useEffect, useRef } from "react";

/**
 * Hook to reference object containing mounted flag.
 */
export function useIsMountedRef(): RefObject<boolean> {
  const isMountedRef = useRef(false);

  useEffect(() => {
    isMountedRef.current = true;

    return () => {
      isMountedRef.current = false;
    };
  }, []);

  return isMountedRef;
}
