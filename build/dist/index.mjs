// src/dep.ts
import camelCase from "lodash/camelCase.js";
var version = "0.1.0";
function printVersion() {
  console.log(camelCase(version));
}

// src/index.ts
function printBetaVersion() {
  console.log(`${version}-beta`);
}
export {
  printBetaVersion,
  printVersion,
  version
};
//# sourceMappingURL=index.mjs.map