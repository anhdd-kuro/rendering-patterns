export const joinClass = (classArray: (string | boolean | undefined)[]) =>
  classArray.filter((x) => typeof x === "string" && !!x).join(" ");
