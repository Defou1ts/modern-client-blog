import nextJest from 'next/jest';
const createJestConfig = nextJest({
	dir: './',
});

const customJestConfig = {
	setupFilesAfterEnv: ['@testing-library/jest-dom'], // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
	moduleDirectories: ['node_modules', '<rootDir>/'],
	testEnvironment: 'jest-environment-jsdom',
	modulePathIgnorePatterns: ['cypress'],
};

module.exports = createJestConfig(customJestConfig);
