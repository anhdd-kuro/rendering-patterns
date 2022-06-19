export type ArrayElement<A> = A extends readonly (infer T)[] ? T : never;

export type WithRequired<T, F extends keyof T> = Omit<T, F> & Required<Pick<T, F>>;

export type WithOptional<T, TRequired extends keyof T> = Partial<T> & Pick<T, TRequired>;
