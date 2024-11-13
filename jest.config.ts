import { compilerOptions } from './tsconfig.json';

import type { Config } from 'jest';

const frontendBaseUrl = `<rootDir>${compilerOptions.baseUrl}`;

const config: Config = {
  roots: ['<rootDir>'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    `${frontendBaseUrl}/tests/jest/setup.tsx`
  ],
  modulePaths: [frontendBaseUrl],
  moduleNameMapper: {
    '\\.svg$': `${frontendBaseUrl}/tests/mocks/emptyStub.ts`,
    '\\.(png|jpeg|jpg|ttf|woff|woff2|gif)(\\?.*as=webp)?$': `${frontendBaseUrl}/tests/mocks/emptyStub.ts`,
  },
  testMatch: [
    '**/*.test.ts',
    '**/*.test.tsx'
  ],
  testTimeout: 30000,
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '.+\\.(svg|png|jpg|ttf|woff|woff2|gif)$': 'jest-transform-stub'
  },
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx'
  ],
  reporters: [
    'default',
    ['jest-junit', { outputDirectory: './junitFront' }]
  ],
  collectCoverageFrom: [
    './app/frontend/hooks/**/*.{ts,tsx}',
    './app/frontend/functions/**/*.{ts,tsx}'
  ],
  coverageReporters: ['cobertura', 'text'],
  coverageDirectory: './coverageFront',
  coveragePathIgnorePatterns: [
  ]
};

export default config;
