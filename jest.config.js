// jest.config.js
module.exports = {
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  testEnvironment: 'node',
  roots: ['./src'],
  testEnvironmentOptions: {
    testTimeout: 10000, // 10 seconds
  },
};
