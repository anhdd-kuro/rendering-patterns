export type ArrayElement<A> = A extends readonly (infer T)[] ? T : never;

export type WithRequired<T, F extends keyof T> = Omit<T, F> & Required<Pick<T, F>>;

export type WithOptional<T, TRequired extends keyof T> = Partial<T> & Pick<T, TRequired>;

export type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type ValueOf<T> = T[keyof T];
