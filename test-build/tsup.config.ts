import { defineConfig } from 'tsup';

export default defineConfig({
  dts: true,
  clean: true,
  bundle: true,
  sourcemap: true,
  format: ['esm', 'cjs'],
  entry: ['src/index.ts'],
  tsconfig: '../tsconfig.json',
});
