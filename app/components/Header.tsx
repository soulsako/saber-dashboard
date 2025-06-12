"use client";

export default function Header({ text }: { text: string }) {
  return (
    <header className="bg-[var(--tertiary)] text-[var(--text-base)] bg-primary text-white px-4 sm:px-6 py-3 sm:py-4 shadow-md flex items-center justify-between">
      <div className="text-lg sm:text-xl font-bold tracking-wide">{text}</div>
    </header>
  );
}
// This Header component is a simple header that displays the provided text.
