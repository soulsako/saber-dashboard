"use client";

export default function Input({
  type,
  value,
  onChange,
  placeholder = "Enter text",
  className = "",
}: {
  type: "text" | "password" | "email" | "number";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full border p-2 ${className}`}
    />
  );
}
