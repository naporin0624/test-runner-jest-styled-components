const { getJestConfig } = require("@storybook/test-runner");

const testRunnerConfig = getJestConfig();

/**
 * @type {import('@jest/types').Config.InitialOptions}
 */
module.exports = {
  ...testRunnerConfig,
  snapshotSerializers: [
    "./snapshot-serializer.js",
    ...(testRunnerConfig.snapshotSerializers ?? []),
  ],
};
