import { esbuildPlugin } from '@web/dev-server-esbuild';

export default /** @type {import("@web/test-runner").TestRunnerConfig} */ ({
  /** Test files to run */
  files: ['test/**/*.spec.ts'],
  plugins: [esbuildPlugin({ ts: true })],

  nodeResolve: true,

  coverage: true,
  coverageConfig: {
    report: true,
    reportDir: 'coverage/wtr',
    include: ['**/src/*.*'],
    exclude: ['**/test/*.*', 'node_modules/**/*.*'],
    threshold: {
      statements: 80,
      branches: 60,
      functions: 60,
      lines: 80,
    },
  },
});
