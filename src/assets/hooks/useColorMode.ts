import { useState, useEffect } from "react";

export type Theme = "light" | "dark";

export function useColorMode(): [Theme, () => void] {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem("bs-theme") as Theme) ?? "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
    localStorage.setItem("bs-theme", theme);
  }, [theme]);

  const toggle = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return [theme, toggle];
}
