/**
 * Checks if a user input string is a valid regular expression pattern.
 * Disallows plain text that doesn't look like a regex.
 */
export default function isRegexInputValid(input: string): boolean {
  // Basic sanity check: regex-looking strings usually contain special characters like [], (), +, *, etc.
  const regexLikePattern = /[\\[\]().+*?^$|]/;

  // Must contain at least one regex-specific character
  if (!regexLikePattern.test(input)) return false;

  // Try to compile it
  try {
    new RegExp(input);
    return true;
  } catch {
    return false;
  }
}
