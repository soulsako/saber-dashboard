"use client";

export default function Footer({ text }: { text: string }) {
  return (
    <footer className="bg-[var(--tertiary)] text-[var(--text-base)] text-center text-xs sm:text-sm py-3 sm:py-4 border-t border-borderBase">
      <div className="container mx-auto">
        <p className="mt-2">
          &copy; {new Date().getFullYear()} {text}
        </p>
      </div>
    </footer>
  );
}
// This footer component can be used to display copyright information or any other relevant text at the bottom of the page.
