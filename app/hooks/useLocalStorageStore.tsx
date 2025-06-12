import { useState, useEffect } from "react";

/**
 * Custom hook to manage local storage state for Regex expressions.
 *
 * @param key - The key under which the Regex value is stored in local storage.
 * @param initialValue - The initial value to use if no value is found in local storage.
 * @returns An array containing the stored Regex values, a function to update it, and a function to remove it.
 */
export function useLocalStorageStore<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === "undefined") return initialValue;
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(storedValue));
    }
  }, [key, storedValue]);

  const update = (value: T | ((val: T) => T)) => {
    setStoredValue(
      typeof value === "function"
        ? (value as (val: T) => T)(storedValue)
        : value
    );
  };

  const remove = () => {
    localStorage.removeItem(key);
    setStoredValue(initialValue);
  };

  return [storedValue, update, remove] as const;
}
