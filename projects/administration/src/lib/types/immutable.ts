type Immutable<T> = {
  readonly [P in keyof T]: Immutable<T[P]>;
};

export { Immutable };
