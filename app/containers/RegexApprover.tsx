"use client";

import { useRegexContext } from "../context/RegexContext";
import { useState, useEffect } from "react";
import Button from "../components/Button";

export default function RegexApprover({ text }: { text: string }) {
  const { patterns, approvePattern } = useRegexContext();
  const [selected, setSelected] = useState("");
  const [matches, setMatches] = useState<string[]>([]);

  useEffect(() => {
    if (!selected) return;
    try {
      const re = new RegExp(selected, "g");
      const result = text.match(re) || [];
      setMatches(result);
    } catch {
      setMatches(["Invalid regex"]);
    }
  }, [selected, text]);

  return (
    <div>
      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="w-full mb-4 border border-borderBase rounded px-2 py-1 text-sm sm:text-base"
        role="listbox"
      >
        <option value="">Select regex</option>
        {patterns.map((pattern, i) => (
          <option key={i} value={pattern.value}>
            {pattern.value} {pattern.approved ? "✅" : ""}
          </option>
        ))}
      </select>

      {selected && (
        <Button
          onClick={() => approvePattern(selected)}
          className="bg-[var(--success)] text-white mb-4"
        >
          Approve
        </Button>
      )}

      <div>
        <h3 className="font-bold mb-2">
          Matches:{" "}
          {!!matches.length && (
            <span className="text-sm font-medium">
              ({matches.length}) matches found
            </span>
          )}
        </h3>
        <ul className="border border-borderBase rounded-md divide-y divide-gray-200 overflow-y-auto max-h-64 sm:max-h-96">
          {matches.length > 0 ? (
            matches.map((m, i) => (
              <li
                key={i}
                className={`px-4 py-2 ${
                  i % 2 === 1
                    ? "border-[var(--border-base)]"
                    : "bg-[var(--bg-gray-light)]"
                }`}
              >
                {m}
              </li>
            ))
          ) : (
            <p className="p-2">No matches found.</p>
          )}
        </ul>
      </div>
    </div>
  );
}
