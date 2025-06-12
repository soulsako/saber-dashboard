"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { useLocalStorageStore } from "../hooks/useLocalStorageStore";

export type RegexPattern = {
  value: string;
  approved: boolean;
};

type RegexContextType = {
  patterns: RegexPattern[];
  text: string;
  setText: (text: string) => void;
  addPattern: (pattern: string) => void;
  editPattern: (index: number, newValue: string) => void;
  deletePattern: (index: number) => void;
  approvePattern: (value: string) => void;
};

const RegexContext = createContext<RegexContextType | undefined>(undefined);

export const RegexProvider = ({ children }: { children: ReactNode }) => {
  const [patterns, setPatterns] = useLocalStorageStore<RegexPattern[]>(
    "regexPatterns",
    []
  );
  const [text, setText] = useState("");

  const addPattern = (pattern: string) => {
    const newPattern: RegexPattern = { value: pattern, approved: false };
    setPatterns([...patterns, newPattern]);
  };

  const editPattern = (index: number, newValue: string) => {
    const updated = [...patterns];
    updated[index] = { value: newValue, approved: false };
    setPatterns(updated);
  };

  const deletePattern = (index: number) => {
    const updated = [...patterns];
    updated.splice(index, 1);
    setPatterns(updated);
  };

  const approvePattern = (value: string) => {
    const updated = patterns.map((p) =>
      p.value === value ? { ...p, approved: true } : p
    );
    setPatterns(updated);
  };

  return (
    <RegexContext.Provider
      value={{
        patterns,
        text,
        setText,
        addPattern,
        editPattern,
        deletePattern,
        approvePattern,
      }}
    >
      {children}
    </RegexContext.Provider>
  );
};

export const useRegexContext = () => {
  const context = useContext(RegexContext);
  if (!context) {
    throw new Error("RuseRegexContext must be used within a RegexProvider");
  }
  return context;
};
