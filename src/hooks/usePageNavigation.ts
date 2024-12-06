import { useEffect } from 'react';

export function usePageNavigation(currentPage: string) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);
}
