"use client";

import { useRegexContext } from "../context/RegexContext";
import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import isRegexInputValid from "../helpers/isRegexInputValid";

export default function RegexEditor() {
  const { addPattern } = useRegexContext();
  const [newPattern, setNewPattern] = useState("");

  const addRegexHandler = () => {
    if (!newPattern.trim()) {
      return;
    }

    if (!isRegexInputValid(newPattern)) {
      return;
    }

    addPattern(newPattern);
    setNewPattern("");
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
    </div>
  );
}
