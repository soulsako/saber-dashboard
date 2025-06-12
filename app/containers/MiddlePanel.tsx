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
    const lorem = new LoremIpsum().generateParagraphs(3);
    setContent(lorem);
    setText(lorem);
  }, [setText]);

  return (
    <section className="w-2/3 p-4">
      <textarea
        className="w-full h-[300px] sm:h-full p-4 border border-borderBase rounded text-sm sm:text-base"
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
          setText(e.target.value);
        }}
      />
    </section>
  );
}
