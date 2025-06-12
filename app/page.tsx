"use client";

import { useState } from "react";
import LeftPanel from "./containers/LeftPanel";
import MiddlePanel from "./containers/MiddlePanel";
import { RegexProvider } from "./context/RegexContext";

// This is the main entry point of the Saber Dashboard application.
export default function Home() {
  const [text, setText] = useState("");

  return (
    <RegexProvider>
      <main className="flex flex-col min-h-screen overflow-hidden">
        <div className="flex flex-1 md:flex-row flex-1 overflow-hidden">
          <LeftPanel text={text} />
          <MiddlePanel setText={setText} />
        </div>
      </main>
    </RegexProvider>
  );
}
