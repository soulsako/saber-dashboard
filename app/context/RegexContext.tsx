"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { useLocalStorageStore } from "../hooks/useLocalStorageStore";
import { toast } from "react-toastify";
import { ToastMessages } from "../utils/toastMessages";

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
    toast.success(ToastMessages.REGEX_ADDED);
  };

  const editPattern = (index: number, newValue: string) => {
    const updated = [...patterns];
    updated[index] = { value: newValue, approved: false };
    setPatterns(updated);
    toast.success(ToastMessages.REGEX_UPDATED);
  };

  const deletePattern = (index: number) => {
    const updated = [...patterns];
    updated.splice(index, 1);
    setPatterns(updated);
    toast.success(ToastMessages.REGEX_DELETED);
  };

  const approvePattern = (value: string) => {
    const updated = patterns.map((p) =>
      p.value === value ? { ...p, approved: true } : p
    );
    setPatterns(updated);
    toast.success(ToastMessages.PATTERN_APPROVED);
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
    throw new Error(ToastMessages.REGEX_CONTEXT_ERROR);
  }
  return context;
};
