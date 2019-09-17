type TestCallback = (testStr: string) => void;

export const test = (callback: TestCallback) => {
  callback('This is a test.');
};
