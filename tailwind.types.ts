import colors from "tailwindcss/colors";

export type ColorKey = keyof typeof colors;

export type ColorSubKey = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export type TwColorClass = `${ColorKey}` | `${ColorKey}-${ColorSubKey}`;

export type TwBackgroundColorClass = `bg-${TwColorClass}`;

export type TwTextColorClass = `text-${TwColorClass}`;

export type TwBorderColorClass = `border-${TwColorClass}`;
