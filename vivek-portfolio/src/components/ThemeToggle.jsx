import useTheme from "../hooks/useTheme";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="px-3 py-2 rounded bg-gray-200 dark:bg-gray-800"
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}
