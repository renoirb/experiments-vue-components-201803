/**
 * https://github.com/vuetifyjs/vuetify/blob/dev/package.json
 * https://github.com/justinsisley/Jest-CSS-Modules
 * https://github.com/vuejs/vue-test-utils-jest-example
 */
module.exports = {
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'vue'
  ],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    // '^.+\\.vue$': 'jest-vue-preprocessor',
    '^.+\\.jsx?$': 'babel-jest',
    '\\.(styl)$': 'jest-css-modules'
  },
  moduleNameMapper: {
    '^@/tests$': '<rootDir>/tests/index.js',
    '^@/tests/(.*)$': '<rootDir>/tests/$1',
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  snapshotSerializers: [
    'jest-serializer-vue'
  ]
}
