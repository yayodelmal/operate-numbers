module.exports = {
    roots: ["<rootDir>/tests"],
    modulePaths: ["<rootDir>"],
    transform: {
      "^.+\\.tsx?$": "ts-jest",
    },
    moduleNameMapper: {
      "^@/(.*)$": "<rootDir>/$1",
    },
  };
  