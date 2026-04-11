import { createContext, useContext, type ReactNode } from 'react';

/**
 * False while the initial splash is visible so page entrance motion does not
 * run (and finish) under the loader. True as soon as the splash is dismissed.
 */
const EntrancesReadyContext = createContext(true);

export function EntrancesReadyProvider({
  children,
  value,
}: {
  children: ReactNode;
  value: boolean;
}) {
  return <EntrancesReadyContext.Provider value={value}>{children}</EntrancesReadyContext.Provider>;
}

export function useEntrancesReady() {
  return useContext(EntrancesReadyContext);
}
