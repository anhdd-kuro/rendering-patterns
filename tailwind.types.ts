import colors from "tailwindcss/colors";

export type ColorKey = keyof typeof colors;

export type ColorSubKey = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export type Color = `${ColorKey}` | `${ColorKey}-${ColorSubKey}`;

export type BackgroundClass = `bg-${Color}`;

export type TextClass = `text-${Color}`;

export type BorderClass = `border-${Color}`;
