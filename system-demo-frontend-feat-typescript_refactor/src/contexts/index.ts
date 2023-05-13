import { createContext, CSSProperties } from "react";

export const themeContext = createContext<{ theme: CSSProperties }>({
  theme: {},
});
