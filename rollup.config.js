/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
import { terser } from 'rollup-plugin-terser'
import babel from 'rollup-plugin-babel'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'

const packageJson = require('./package.json')

const fs = require('fs-extra')
const path = require('path')

function isDir(dir) {
  return fs.lstatSync(dir).isDirectory()
}

const packages = {}
const dir = path.join(__dirname, './src/components')
const files = fs.readdirSync(dir)
files.forEach((file) => {
  const absolutePath = path.join(dir, file)
  if (isDir(absolutePath)) {
    packages[file] = `src/components/${file}/index.tsx`
  }
})

const allConfig = {
  input: 'src/components/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'esm',
      sourcemap: false
    },
    {
      file: packageJson.module,
      name: 'smile-ui',
      format: 'umd',
      exports: 'named',
      sourcemap: false
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    terser(),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true
    })
  ]
}

const createRollupConfig = (file, name) => {
  let plugins = [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    terser(),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true
    })
  ]
  return {
    input: file,
    output: {
      file: `lib/${name}/index.js`,
      format: 'esm',
      name,
      sourcemap: false
    },
    plugins
  }
}

const buildPackages = []
const ignoreNames = ['style', 'utils', 'assets', 'mixins']
for (const name in packages) {
  const file = packages[name]
  if (ignoreNames.indexOf(name) !== -1) continue
  buildPackages.push(createRollupConfig(file, name))
}
buildPackages.push(allConfig)

export default buildPackages
