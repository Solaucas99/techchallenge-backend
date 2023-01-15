import Mocha from 'mocha';
import path from 'path';
import { ITestProvider } from '../ITestProvider';

export class MochaTestProvider implements ITestProvider {
  async runTest(directory: string): Promise<unknown> {
    try {
      Object.keys(require.cache).forEach(function (file) {
        delete require.cache[file];
      });

      const mocha = new Mocha({
        reporter: 'json',
      });

      mocha.addFile(path.join(directory, `/test.js`));

      const mochaFn = () =>
        new Promise((resolve) => {
          mocha
            .run(function (failures) {
              process.exitCode = failures ? -1 : 0;
              mocha.dispose();
            })
            .on('end', function (this: any) {
              resolve(this.testResults);
            });
        });

      const result = await mochaFn();

      return result;
    } catch (err: any) {
      throw new Error(err);
    }
  }
}
