"use client";

import React, { useState } from "react";
import RegexEditor from "./RegexEditor";
import RegexApprover from "./RegexApprover";
import Button from "../components/Button";

export default function LeftPanel({ text }: { text: string }) {
  const [mode, setMode] = useState<"edit" | "approve">("edit");

  return (
    <section className="w-full md:w-1/3 p-4 bg-[var(--bg-white)] order-b md:border-r md:border-b-0 border-borderBase">
      <div className="flex justify-between mb-4">
        <Button
          onClick={() => setMode("edit")}
          className={
            mode === "edit"
              ? "bg-[var(--bg-blue)] text-white"
              : "bg-[var(--bg-gray)]"
          }
        >
          Edit Mode
        </Button>
        <Button
          onClick={() => setMode("approve")}
          className={
            mode === "approve"
              ? "bg-[var(--bg-blue)] text-white"
              : "bg-[var(--bg-gray)]"
          }
        >
          Approve Mode
        </Button>
      </div>
      {mode === "edit" ? <RegexEditor /> : <RegexApprover text={text} />}
    </section>
  );
}
