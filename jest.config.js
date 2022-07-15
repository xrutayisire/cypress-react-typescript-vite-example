module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(j|t)sx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  setupFilesAfterEnv: ['./src/setupTest.ts'],
  testMatch: ['**/*test.ts?(x)'],
  moduleNameMapper: {
    '^antd/es/(.*)$': 'antd/lib/$1',
    '\\.(css|less)$': 'identity-obj-proxy',
  },
};
