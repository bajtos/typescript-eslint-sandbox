class MyCustomError<Props extends object = {}> extends Error {
  constructor(extraProperties?: Props) {
    super('Panic!');

    Error.captureStackTrace(this, this.constructor);

    Object.assign(this, extraProperties);
  }
}

throw new MyCustomError();
