/* eslint-disable no-console */
import { spawn } from 'node:child_process';
import { rename, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { performance } from 'node:perf_hooks';

import type { BuildOptions } from 'esbuild';
import { build } from 'esbuild';
import fastglob from 'fast-glob';
import rimraf from 'rimraf';
import type { PackageJson } from 'type-fest';

const DIST_PATH = join(process.cwd(), 'dist');
const ESM_PATH = join(DIST_PATH, 'esm');
const CJS_PATH = join(DIST_PATH, 'cjs');
const TYPES_PATH = join(DIST_PATH, 'types');
const FINAL_TYPES_PATH = join(DIST_PATH, 'index.d.ts');

function asyncRimraf(path: string): Promise<void> {
  return new Promise((resolve, reject) => {
    rimraf(path, (error) => {
      if (error) {
        reject(error);
        return;
      }
      resolve();
    });
  });
}

const DEFAULT_CONFIG: BuildOptions = {
  minify: false,
  sourcemap: 'inline',
};

async function emitDeclarations(): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      const child = spawn('npm', ['run', 'build-types'], {
        shell: true,
        env: process.env,
      });
      child.on('close', () => {
        resolve();
      });
      child.on('error', (error) => {
        reject(error);
      });
    } catch (error) {
      reject(error);
    }
  });
}

async function apiExtractor(): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      const child = spawn('npm', ['run', 'api-extractor'], {
        shell: true,
        env: process.env,
      });
      child.on('close', () => {
        resolve();
      });
      child.on('error', (error) => {
        reject(error);
      });
    } catch (error) {
      reject(error);
    }
  });
}

async function getDefaultOptions(): Promise<BuildOptions> {
  const files = await fastglob(['src/**/*.ts', '!src/**/*.spec.ts']);
  return {
    ...DEFAULT_CONFIG,
    entryPoints: files,
  };
}

async function renameAllCJS(): Promise<void> {
  const files = await fastglob('dist/cjs/**/*.js');
  await Promise.all(files.map((file) => rename(file, file.replace(/\.js$/, '.cjs'))));
}

function getMs(startMs: number): string {
  return `${((performance.now() - startMs) / 1_000).toFixed(1)}s`;
}

async function main(): Promise<void> {
  const startMs = performance.now();
  await asyncRimraf(DIST_PATH);
  console.log('Cleaned dist', getMs(startMs));
  const configMs = performance.now();
  const config = await getDefaultOptions();
  console.log('Default esbuild config', getMs(configMs));
  const esmMs = performance.now();
  await build({
    ...config,
    format: 'esm',
    platform: 'browser',
    outdir: ESM_PATH,
  });
  console.log('ESM build', getMs(esmMs));
  const cjsMs = performance.now();
  await build({
    ...config,
    format: 'cjs',
    platform: 'node',
    outdir: CJS_PATH,
  });
  console.log('CJS build', getMs(cjsMs));
  const typeDeclarationsMs = performance.now();
  await emitDeclarations();
  console.log('Type declarations', getMs(typeDeclarationsMs));
  const apiExtractorMs = performance.now();
  await apiExtractor();
  console.log('API extracted', getMs(apiExtractorMs));
  const renameMs = performance.now();
  const packageJSON: PackageJson = await import('../package.json').then((json) => ({
    ...json.default,
  }));
  const packageName = packageJSON.name;
  await rename(join(DIST_PATH, `${packageName}.d.ts`), FINAL_TYPES_PATH);
  console.log(`Renamed ${packageName}.d.ts to index.d.ts`, getMs(renameMs));
  const deleteTypesMs = performance.now();
  await asyncRimraf(TYPES_PATH);
  console.log('Deleted types folder', getMs(deleteTypesMs));
  const packageJSONMs = performance.now();
  packageJSON.exports = {
    '.': {
      import: './esm/index.js',
      require: './cjs/index.cjs',
      types: './index.d.ts',
    },
  };
  packageJSON.main = './cjs/index.cjs';
  packageJSON.module = './esm/index.js';
  packageJSON.types = './index.d.ts';
  await writeFile(join(DIST_PATH, 'package.json'), JSON.stringify(packageJSON, null, 2));
  console.log('Copy package.json', getMs(packageJSONMs));
  const renameAllCJSMs = performance.now();
  await renameAllCJS();
  console.log('Renamed all js to cjs in the cjs folder', getMs(renameAllCJSMs));
  console.log('Total', getMs(startMs));
}

main();
