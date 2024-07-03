import { version, printVersion } from './dep.js';

export function printBetaVersion() {
  console.log(`${version}-beta`);
}

export {
  version,
  printVersion,
};
