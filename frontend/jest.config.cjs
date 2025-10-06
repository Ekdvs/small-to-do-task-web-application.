/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: "jsdom",         // ✅ required for React DOM
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",   // ✅ handle TypeScript files
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],  // optional for RTL
  testMatch: [
    "<rootDir>/src/**/*.test.(ts|tsx)",            // where test files live
  ],
};
