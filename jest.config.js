
module.exports = {
    moduleFileExtensions: [
     "ts",
     "tsx",
     "js"
    ],
    transform: {
     "^.+\\.tsx?$": "ts-jest"
    },
    testMatch: [
     "<rootDir>/tests/unit/**/*.(test|spec).(ts|tsx)"
    ],
    globals: {
     "ts-jest": {
       babelConfig: true,
       tsConfig: "jest.tsconfig.json",
       diagnostics: false
     }
    },
    coveragePathIgnorePatterns: [
    "/node_modules/",
    "enzyme.js"
   ],
   setupFilesAfterEnv: ["<rootDir>/enzyme.js"],
    coverageReporters: [
    "json",
     "lcov",
     "text",
     "text-summary"
    ],
    moduleNameMapper:{
     "\\.(css|less|sass|scss)$": "<rootDir>/tests/unit/mocks/styleMock.js",
     "\\.(gif|ttf|eot|svg)$": "<rootDir>/tests/unit/mocks/fileMock.js"
    }
  };