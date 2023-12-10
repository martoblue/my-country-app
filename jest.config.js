const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

customJestConfig = {
  moduleNameMapper: {
    // https://jestjs.io/docs/webpack#handling-static-assets
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    // Handle module aliases
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/styles/(.*)$': '<rootDir>/styles/$1',
    '^@/pages/(.*)$': '<rootDir>/pages/$1',
  },
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  testEnvironment: 'jest-environment-jsdom',
};

module.exports = createJestConfig(customJestConfig);
