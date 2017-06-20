const modules = process.env.BABEL_ENV === 'es' ? false : 'commonjs'

const presets = [
  ['latest', {
    es2015: { loose: true, modules }
  }],
  'stage-2',
  'react'
]

const plugins = [
  'dev-expression',
  'add-module-exports',
  'transform-object-assign',
  ['transform-react-remove-prop-types', { mode: 'wrap' }]
]

module.exports = { plugins, presets }
