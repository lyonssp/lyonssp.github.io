import React, { createContext, useContext, useState, ReactNode } from 'react';

interface TerminalContextType {
  isOpen: boolean;
  toggleTerminal: () => void;
  openTerminal: () => void;
  closeTerminal: () => void;
}

const TerminalContext = createContext<TerminalContextType | undefined>(undefined);

export const TerminalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleTerminal = () => {
    setIsOpen((prev) => !prev);
  };

  const openTerminal = () => {
    setIsOpen(true);
  };

  const closeTerminal = () => {
    setIsOpen(false);
  };

  const value = {
    isOpen,
    toggleTerminal,
    openTerminal,
    closeTerminal,
  };

  return (
    <TerminalContext.Provider value={value}>
      {children}
    </TerminalContext.Provider>
  );
};

export const useTerminalContext = (): TerminalContextType => {
  const context = useContext(TerminalContext);
  if (!context) {
    throw new Error('useTerminalContext must be used within a TerminalProvider');
  }
  return context;
};
