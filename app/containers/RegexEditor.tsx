"use client";

import { useRegexContext } from "../context/RegexContext";
import { useState, useEffect, useRef } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import isRegexInputValid from "../helpers/isRegexInputValid";
import { ToastMessages } from "../utils/toastMessages";
import { toast } from "react-toastify";

export default function RegexEditor() {
  const { patterns, addPattern, editPattern, deletePattern } =
    useRegexContext();
  const [newPattern, setNewPattern] = useState("");
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editedValue, setEditedValue] = useState("");
  const editInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editIndex !== null && editInputRef.current) {
      editInputRef.current.focus();
    }
  }, [editIndex]);

  const addRegexHandler = () => {
    if (!newPattern.trim()) {
      toast.error(ToastMessages.REGEX_EMPTY);
      return;
    }

    if (!isRegexInputValid(newPattern)) {
      toast.error(ToastMessages.REGEX_INVALID);
      return;
    }

    addPattern(newPattern);
    setNewPattern("");
  };

  const startEdit = (index: number) => {
    setEditIndex(index);
    setEditedValue(patterns[index].value);
  };

  const saveEdit = (index: number) => {
    if (!editedValue.trim()) {
      toast.error(ToastMessages.REGEX_EMPTY);
      return;
    }

    if (!isRegexInputValid(editedValue)) {
      toast.error(ToastMessages.REGEX_INVALID);
      return;
    }

    editPattern(index, editedValue);
    setEditIndex(null);
    setEditedValue("");
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Enter") {
      e.preventDefault();
      saveEdit(index);
    }
    if (e.key === "Escape") {
      setEditIndex(null);
      setEditedValue("");
    }
  };

  return (
    <div className="p-4 bg-[var(--bg-gray-light)] rounded-lg shadow-md">
      <label htmlFor="regex-input" className="sr-only">
        Enter a regex pattern
      </label>
      <Input
        type="text"
        className="mb-2"
        placeholder="Enter regex"
        value={newPattern}
        onChange={(e) => setNewPattern(e.target.value)}
      />
      <Button
        onClick={addRegexHandler}
        className="bg-[var(--success)] text-[var(--text-base)] mb-4"
      >
        Add
      </Button>
      <ul>
        {patterns.map((p, i) => (
          <li
            key={i}
            className="flex flex-col sm:flex-row sm:items-center justify-between border p-2 mb-2 rounded"
          >
            {editIndex === i ? (
              <>
                <label htmlFor="regex-input" className="sr-only">
                  Edit a regex pattern
                </label>
                <input
                  ref={editInputRef}
                  value={editedValue}
                  onChange={(e) => setEditedValue(e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, i)}
                  className="mb-2 p-2 border border-[var(--border-base)] rounded"
                />
                <div className="flex gap-2">
                  <Button
                    onClick={() => saveEdit(i)}
                    className="bg-[var(--primary)] text-white"
                  >
                    Save
                  </Button>
                  <Button
                    onClick={() => {
                      setEditIndex(null);
                      setEditedValue("");
                    }}
                    className="bg-[var(--secondary)] text-[var(--text-base)]"
                  >
                    Cancel
                  </Button>
                </div>
              </>
            ) : (
              <div className="flex justify-between items-center gap-4 flex-wrap w-full">
                <div className="text-sm sm:text-base break-words max-w-[60%]">
                  <span className="text-sm sm:text-base">
                    {p.value}{" "}
                    {p.approved && (
                      <span className="bg-[var(--success)] ml-2">✅</span>
                    )}
                  </span>
                </div>
                <div className="flex gap-2 mt-2 sm:mt-0">
                  <Button
                    onClick={() => startEdit(i)}
                    className="bg-[var(--primary)] text-white"
                    aria-label="Edit regex pattern"
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => deletePattern(i)}
                    className="bg-[var(--danger)] text-white"
                    aria-label="Delete regex pattern"
                  >
                    Delete
                  </Button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
