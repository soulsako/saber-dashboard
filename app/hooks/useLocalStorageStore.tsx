"use client";

import { useState, useEffect } from "react";

/**
 * Custom hook to manage local storage state for Regex expressions.
 */
export function useLocalStorageStore<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(initialValue);
  const [hydrated, setHydrated] = useState(false); // used to prevent hydration mismatches

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const item = localStorage.getItem(key);
      if (item) {
        setStoredValue(JSON.parse(item));
      }
    } catch {
      setStoredValue(initialValue);
    }

    setHydrated(true); // mark as fully hydrated
  }, [key]);

  useEffect(() => {
    if (hydrated && typeof window !== "undefined") {
      try {
        localStorage.setItem(key, JSON.stringify(storedValue));
      } catch {
        // fail silently
      }
    }
  }, [key, storedValue, hydrated]);

  const update = (value: T | ((val: T) => T)) => {
    setStoredValue((prev) =>
      typeof value === "function" ? (value as (val: T) => T)(prev) : value
    );
  };

  const remove = () => {
    localStorage.removeItem(key);
    setStoredValue(initialValue);
  };

  return [storedValue, update, remove] as const;
}
