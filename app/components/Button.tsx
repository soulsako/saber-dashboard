export default function Button({
  onClick,
  children,
  className = "",
}: {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded transition duration-150 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </button>
  );
}
// This Button component can be used in any part of the application
// where you need a button with a click handler and optional styling.
// It accepts an onClick function and children to display inside the button,
