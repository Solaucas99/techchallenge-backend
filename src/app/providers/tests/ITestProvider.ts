export interface ITestProvider {
  runTest(directory: string): Promise<unknown | void>;
}
