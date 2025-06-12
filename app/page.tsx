import { RegexProvider } from "./context/RegexContext";

export const metadata = {
  title: "Saber Dashboard",
  description: "Main dashboard to edit and approve regex patterns.",
  keywords: ["regex", "dashboard", "editor", "approver", "text matching"],
};

// This is the main entry point of the Saber Dashboard application.
export default function Home() {
  return (
    <RegexProvider>
      <main className="flex flex-col min-h-screen overflow-hidden">
        <div className="flex flex-1 md:flex-row flex-1 overflow-hidden">
          Saber Dashboard
        </div>
      </main>
    </RegexProvider>
  );
}
