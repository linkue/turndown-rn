import config from './rollup.config'

export default config({
  output: {
    file: 'lib/turndown.umd.js',
    format: 'umd',
    name: 'TurndownService',
    globals: {
      "jsdom-jscore-rn": "jsdomJscoreRn"
    }
  }
})
