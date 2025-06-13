"use client";

import { useEffect, useState } from "react";
import { LoremIpsum } from "lorem-ipsum";

export default function MiddlePanel({
  setText,
}: {
  setText: (text: string) => void;
}) {
  const [content, setContent] = useState("");

  useEffect(() => {
    // Only run on client
    if (typeof window !== "undefined") {
      const lorem = new LoremIpsum().generateParagraphs(3);
      setContent(lorem);
      setText(lorem); // parent state is updated
    }
  }, [setText]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newVal = e.target.value;
    setContent(newVal);
    setText(newVal); // keep external state in sync
  };

  return (
    <section className="w-2/3 p-4" aria-label="Text input panel" role="region">
      <textarea
        className="w-full h-[300px] sm:h-full p-4 border border-borderBase rounded text-sm sm:text-base"
        value={content}
        onChange={handleChange}
      />
    </section>
  );
}
