module.exports = {
    roots: ['<rootDir>'],
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
    testRegex: '(/test/.*|(\\.|/)(test|spec))\\.ts?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleNameMapper: {
        '@omi/(.*)': '<rootDir>/src/app/omi/$1',
        '@http/(.*)': '<rootDir>/src/app/http/$1',
        '@cache/(.*)': '<rootDir>/src/app/cache/$1',
        '@authorization/(.*)': '<rootDir>/src/app/authorization/$1',
        '@common/(.*)': '<rootDir>/src/app/common/$1',
        '@geocoding/(.*)': '<rootDir>/src/app/geocoding/$1',
        '@revaluation/(.*)': '<rootDir>/src/app/revaluation/$1',
        '@utils': '<rootDir>/src/app/utils/index.ts',
    },

    preset: 'ts-jest',
    testEnvironment: 'node',
    testPathIgnorePatterns: ['/test/helper/'],
    runner: 'groups',
    setupFiles: ['<rootDir>/jest.setup.js'],
};
