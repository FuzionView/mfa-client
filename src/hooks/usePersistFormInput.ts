import { useCallback, useMemo } from 'react';

/** Provides simple api for saving form inputs if the user reloads or leaves the page */
export const usePersistFormInput = (key: string) => {
  const saveInput = useCallback(
    (data: Record<string, any>) => localStorage.setItem(key, JSON.stringify(data)),
    [key],
  );
  const getSavedInput = useCallback(() => JSON.parse(localStorage.getItem(key) ?? '{}'), [key]);

  const ret = useMemo(() => {
    return {
      saveInput,
      getSavedInput,
    };
  }, [getSavedInput, saveInput]);

  return ret;
};
