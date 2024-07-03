import camelCase from 'lodash/camelCase.js';

export const version = '0.1.0';

export function printVersion() {
  console.log(camelCase(version));
}
